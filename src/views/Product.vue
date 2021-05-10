<template>
  <div class="product">
    <div class="container">
      <div class="product-photo-and-inf">
        <div class="prod-image">
          <img id="expandedImg" class="main-image" :src="getImage.image">
          <!-- <div class="images-row">
            <img class="demo" :src="defImage" @click="currentImage(this)" alt="img1">
            <img class="demo" :src="defImage" @click="currentImage(this)" alt="img2">
            <img class="demo" :src="defImage" @click="currentImage(this)" alt="img3">
          </div> -->
        </div>
        <div class="general-inf">
          <div><h2>{{ selectedProduct.product_type }}</h2></div>
          <div class="general-inf-part"><span>{{ selectedProduct.title }}</span></div>
          <div class="price general-inf-part"><h2>{{ selectedProduct.price }}&#8381;</h2></div>
          <div><button class="button-basket general-inf-part">добавить в корзину</button></div>
          <div><button class="button-buy general-inf-part">купить</button></div>
        </div>
          
      </div>
      <div style="bg">
        <table class="table-characteristics">
          <thead>
            <tr class="characteristic-row">
              <th class="characteristic-title" colspan="2">характеристики</th>
            </tr>
          </thead>
          <tbody :class="{'characteristics-hidden': tableHidden}">
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.display }}</td>
              <!-- <td v-for="(detailValue,index) in selectedProduct.details" :key= "'more' + index">{{ detailValue }}</td>  -->
              <td>{{ selectedProduct.details.display }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.format_audio }}</td>
              <td  class="characteristic-col-value">{{ selectedProduct.details.format_audio }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.format_video }}</td>
              <td>{{ selectedProduct.details.format_video }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.format_graph }}</td>
              <td>{{ selectedProduct.details.format_graph }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.memory }}</td>
              <td>{{ selectedProduct.details.memory }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.time }}</td>
              <td>{{ selectedProduct.details.time }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.screen }}</td>
              <td>{{ selectedProduct.details.screen }}</td>
            </tr>
            
            
            
          </tbody>
        </table>
        <button class="button-full-details" v-if="tableHidden" @click="openDetails">Полное описание</button>
        <button class="button-full-details" v-else @click="closeDetails">Скрыть описание</button>
      </div>
    <div>
      <h3 class="more-prod-title">Товары, которые могут Вам понравиться</h3>
      <div class="more-products">
        <div class="product" @click="getProduct(product.id)" v-for="product in threeProducts" :key="product.id">
          <img class="image" :src="getSrcImg(product)" alt="illustration" onerror="this.src=defImage"/>
          <div class="product-inf">
            <span class="product-type">{{ product.product_type }}</span>
            <span class="product-title">{{ product.title}}</span>
            <span class="price">{{ product.price }}&#8381;</span>
          </div>   
        </div> 
      </div>   
    </div> 
  </div>
  </div>
</template>

<script>
import image from '../assets/apple.png';

 export default {
  name:'Product',
  data() {
    return {
    tableHidden: true,
    image: null,
    productId: null,
    defImage: image,
    selectedProduct: {},
    threeProducts: [],
    fields: {
      display: 'Диагональ дисплея (дюйм)',
      screen: 'Разрешение экрана',
      format_audio: 'Формат аудио',
      format_video: 'Форматы видеофайлов',
      format_graph: 'Форматы графических файлов', 
      memory: 'Встроенная память (Гб)',
      time: 'Время воспроизведения аудио (ч)'
    },
    products: [
      {
          id: 1,
          title: "IPod Nano - 8GB",
          product_type: "Cult Products",
          price: "20000",
          image: null,
          details: 
          {
            display: "3.1",
            format_audio: "MP3, WAV, ALAC", 
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 2,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "56700",
          image: "http://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details:
          {
            display: "3.3",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 3,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "5600",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.2",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 4,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "12000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.4",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 5,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "7800",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.6",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 6,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "30000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.7",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 7,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "32000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.9",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 8,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "80000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.8",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 9,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.9",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 10,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.4",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 11,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.3",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 12,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.5",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 13,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.5",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      },
      {
          id: 14,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          details: 
          {
            display: "3.5",
            format_audio: "MP3, WAV, ALAC",
            format_video: 'H.264',
            format_graph: 'JPEG',
            memory: "8",
            time: "40",
            screen: "480X320",
          }
      }
    ]
  }
 },
  mounted() {
    this.productId = +this.$route.params.id;
    this.getProduct(this.productId)
  },
  computed:{
    getImage() {
      return {
        image: this.selectedProduct.image ? this.selectedProduct.image : this.defImage,
    
      }
    }
  },
  methods: {
    getProduct(id) {
      this.selectedProduct = this.products.find(item => item.id === id);
      window.scrollTo(0,0);
      this.getRandomItems();
    },
    currentImage(imgs) {
      let expandImg = document.getElementById("expandedImg");
      expandImg.src = imgs.src;
      console.log(expandImg)
    },
    openDetails() {
      this.tableHidden = false;
    },
    closeDetails() {
      this.tableHidden = true;
    },
    getRandomItems() {
      this.threeProducts = [];
      while (this.threeProducts.length < 3) {
      let randomProd = this.products[Math.floor(Math.random() * this.products.length)];
      if(!this.threeProducts.includes(randomProd))
      this.threeProducts.push(randomProd);
      }
    },
    getSrcImg(item) {
      return item.image ? item.image : this.defImage
    }
    
  },
  created() {
    this.getRandomItems();
  }
}
</script>

<style lang="scss">
$bg-color: #f3f3f3;
.product {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .container {
    display: flex;
    flex-direction: column;
  }
  .general-inf {
    display: flex;
    // align-items: center;
    flex-direction: column;
    align-content: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    // width: 100%;
    padding: 1rem;
  }
  .general-inf-part {
    margin-bottom: 1rem;
  }
  .main-image {
    width: 30rem;
    border: 1px solid grey;
    border-radius: 10px;
    margin-right: 1rem;
  }
  .product-photo-and-inf {
    display: flex;
    align-items: flex-start;
    flex-flow: row wrap;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    // justify-content: center;
    margin: 0 auto;
    // max-width: 40rem
  }
  .title {
    margin-bottom: 1rem;
  }
  .button-basket {
    display: flex;
    text-transform: uppercase;
    background-color: black;
    color: white;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .button-full-details {
    font-size: 1rem;
    transition-duration: 0.4s;
    // background-color: white;
    border: 0;
    color: black;
    border-bottom: 2px dotted lightgrey;
    user-select: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 1rem;
    background: $bg-color;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
  }
  .button-buy {
    display: flex;
    text-transform: uppercase;
    background-color: $bg-color;
    color: black;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    
    color: black;
    cursor: pointer;
    text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
  }
  .images-row {
    display: flex;
  }
  .demo {
    margin-right: 1rem;
    border: 1px solid black;
    border-radius: 7px;
    cursor: pointer;
    width: 9.3rem;
    opacity: 0.6;
      &:active {
        opacity: 1;
      }
      &:hover {
        opacity: 1;
      }
  }
  .price {
    color: #1c6792;
  }
  .table-characteristics {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 0.5rem;
    background: $bg-color;
  }
  .characteristic-row {
    display: flex;
    padding-bottom: 0.5rem;
    text-align: left;
    background: $bg-color;
  }
  .characteristic-col-name {
    width: 60%;
    border-bottom: 1px dotted lightgray;
  }
  .characteristic-title {
    text-transform: uppercase;
    font-size: 1.1rem;
    color: black;
  }
  .more-prod-title {
    display: flex;
    text-transform: uppercase;
    font-size: 1.1rem;
    color: black;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }  
  .characteristics-hidden {
    height: 5rem;
    overflow: hidden;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    background: white;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #f3f3f3 100%);
    }
  }
    .image {
      width: 14rem;
      border: 1px solid grey;
      border-radius: 10px;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
    }

  .product-inf {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 1.5rem;
  }
  .more-products {
    display: flex;
    margin-bottom: 1rem;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
  }
}
@media (max-width: 876px) {
  .product-photo-and-inf {
    
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
 @media only screen and (max-width: 414px) and (orientation: portrait) {
  .product {
     font-size: 14px;
   
    .main-image {
      width: 20rem;
      border: 1px solid grey;
      border-radius: 10px;
      margin-right: 0;
    }
    .demo {
      width: 5rem;
    }
    .product-photo-and-inf {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }
    .prod-image {
      display: flex;
      justify-content: center;
      // width: 100%;
    }
    .container {
      padding: 1rem;
    }
    .more-products {
    flex-direction: column;
    width: 20rem;
    align-items: center;
    margin-bottom: 0;
    }
    .characteristic-row {
      border-bottom: 1px dotted lightgray;
    }
    .characteristic-col-name {
      border-bottom: 0;
    }
    .characteristic-col-value {
      white-space: pre-wrap;
    }
  }
}
</style>