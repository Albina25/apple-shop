<template>
  <div class="product">
    <div class="container">
      <div class="product-photo-and-inf">
        <div class="prod-image">
          <img id="expandedImg" class="main-image" :src="getImage.image">
        </div>
        <div class="general-inf">
          <div><h2>{{ selectedProduct.product_type }}</h2></div>
          <div class="general-inf-part"><span>{{ selectedProduct.title }}</span></div>
          <div class="price general-inf-part"><h2>{{ selectedProduct.price }}&#8381;</h2></div>
          <button class="button-basket general-inf-part">добавить в корзину</button>
          <button class="button-buy general-inf-part">купить</button>
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
              <td>{{ getDatail.display }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.format_audio }}</td>
              <td  class="characteristic-col-value">{{ getDatail.format_audio }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.format_video }}</td>
              <td>{{ getDatail.format_video }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.format_graph }}</td>
              <td>{{ getDatail.format_graph }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.memory }}</td>
              <td>{{ getDatail.memory }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.time }}</td>
              <td>{{ getDatail.time }}</td>
            </tr>
            <tr class="characteristic-row">
              <td class="characteristic-col-name">{{ fields.screen }}</td>
              <td>{{ getDatail.screen }}</td>
            </tr>
          </tbody>
        </table>
        <button class="button-full-details" v-if="tableHidden" @click="openDetails">Полное описание</button>
        <button class="button-full-details" v-else @click="closeDetails">Скрыть описание</button>
      </div>
    <div class="padding">
      <h3 class="more-prod-title">Товары, которые могут Вам понравиться</h3>
      <div class="more-products">
        <div class="product" @click="getProduct(product.id)" v-for="product of threeProducts" :key="product.id">
          <img class="three-images" :src="getSrcImg(product)" alt="illustration" onerror="this.src=defImage"/>
          <div class="product-inf">
            <span class="product-type">{{ product.product_type }}</span>
            <span class="product-title">{{ product.title}}</span>
            <span class="price">{{ product.price }}&#8381;</span>
          </div>   
        </div> 
      </div>   
    </div> 
    </div>
  <FooterMailing/>
  </div>
</template>

<script>
const defImage = '/imgApple/apple.png';
import FooterMailing from '../components/FooterMailing.vue'
import {products} from '../data/DataProducts.js'

 export default {
  name:'Product',
  components: {
    FooterMailing
  },
  data() {
    return {
    tableHidden: true,
    image: null,
    productId: null,
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
  }
 },
  mounted() {
    this.productId = +this.$route.params.id;
    this.getProduct(this.productId)
  },
  computed:{
    getImage() {
      return {
        image: this.selectedProduct.image ? this.selectedProduct.image : defImage,
      }
    },
    getDatail() {
      return {
        display: this.selectedProduct.details.display ? this.selectedProduct.details.display : "-" ,
        screen: this.selectedProduct.details.screen ? this.selectedProduct.details.screen : "-" ,
        format_audio: this.selectedProduct.details.format_audio ? this.selectedProduct.details.format_audio : "-" ,
        format_video: this.selectedProduct.details.format_video ? this.selectedProduct.details.format_video : "-" ,
        format_graph: this.selectedProduct.details.format_graph ? this.selectedProduct.details.format_graph : "-" , 
        memory: this.selectedProduct.details.memory ? this.selectedProduct.details.memory : "-" ,
        time: this.selectedProduct.details.time ? this.selectedProduct.details.time : "-"
      }
}
  },
  methods: {
    getProduct(id) {
      this.selectedProduct = products.find(item => item.id === id);
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
      let randomProd = products[Math.floor(Math.random() * products.length)];
      if(!this.threeProducts.includes(randomProd))
      this.threeProducts.push(randomProd);
      }
    },
    getSrcImg(item) {
      return item.image ? item.image : defImage
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
    flex-direction: column;
    align-content: stretch;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .general-inf-part {
    margin-bottom: 1rem;
  }
  .main-image {
    width: 480px;
    border: 1px solid grey;
    border-radius: 10px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .product-photo-and-inf {
    display: flex;
    align-items: flex-start;
    flex-flow: row wrap;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
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
    padding: 0 1rem;
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
  .padding {
    padding: 0 1rem;
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
    .three-images {
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
  }
}
 @media only screen and (max-width: 550px) and (orientation: portrait) {
  .product {
     font-size: 14px;
   
    .main-image {
      width: 240px;
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
    }
    .container {
      padding: 1rem;
    }
    .more-products {
      flex-direction: column;
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