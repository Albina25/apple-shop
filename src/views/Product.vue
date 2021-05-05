<template>
  <div class="product">
    <div>
    <div v-for="(productObj,index) in products" :key="index">
      <div class="container" v-if="productId == productObj.id">
        
        <div class="product-photo-and-inf">
          <div class="images">
            <img id="expandedImg" class="image" :src="productObj.image">
            <div class="images-row">
              
              <img class="demo cursor" :src="plugImage" style="width:100%" alt="img1">
              
              
                <img class="demo cursor" :src="plugImage" style="width:100%" alt="img2">
              
              
                <img class="demo cursor" :src="plugImage" style="width:100%" alt="img3">
            
            </div>
          </div>
          <div class="general-inf">
            <div><h2>{{ productObj.product_type }}</h2></div>
            <div class="general-inf-part"><span>{{ productObj.title }}</span></div>
            <div class="price general-inf-part"><h2>{{ productObj.price }}<i class="fas fa-ruble-sign fa-xs"></i></h2></div>
            <div><button class="button-basket general-inf-part">добавить в корзину</button></div>
            <div><button class="button-show-more general-inf-part" :click="showMoreProducts">Покажите еще</button></div>
          </div>
          
        </div>
        <div>
          <table class="characteristics">
            <thead><tr>характеристики</tr></thead>
            
            
             <tbody v-for="(fieldStr,ind) of fieldsArr" :key="ind">
            <tr v-for="(detailObj,index) in productObj.detailsObj" :key="index">
              <td >{{ fieldStr }}</td>
              <td>{{ detailObj }}</td>
            </tr>
             </tbody>
            </table>
            <!-- <tr>характеристики</tr>
            <tr><td class="characteristic-title">Встроенная память (Гб): </td><td class="characteristic-value">{{ product.memory }}</td></tr>
            <tr><td class="characteristic-title">Диагональ дисплея (дюйм): </td><td class="characteristic-value">{{ product.display }}</td></tr>
            <tr><span class="characteristic-title">Формат аудио: </span><span class="characteristic-value">{{ product.format_audio }}</span></div>
            <div><span class="characteristic-title">Время воспроизведения аудио (ч): </span><span class="characteristic-value">{{ product.time }}</span></div> -->
            <button class="button-details" :click="openDetails">Полное описание</button>
            
          </table>
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
  plugImage: image,
  
  // props: {
  //   products: Array
    // products: {
    //   type: Array,
      // default () {
      //   return {
      //     image: img,
      //   }
      // } 
    // }
  // },
  data() {
    return {
    productId: null,
    fieldsArr: ['Диагональ дисплея', 'Формат аудио', 'Встроенная память', 'Время воспроизведения'],
    products: [
      {
          id: 1,
          title: "IPod Nano - 8GB",
          product_type: "Cult Products",
          price: "20000",
          image: null,
          detailsObj: 
          {
            display: "3.5",
            format_audio: "MP3, WAV, ALAC, AAC, AIFF",
            memory: "8",
            time: "40",
          }
      },
      {
          id: 2,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "56700",
          image: "http://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          detailsObj:
          {
            display: "3.5",
            format_audio: "MP3, WAV, ALAC, AAC, AIFF",
            memory: "8",
            time: "40",
          }
      },
      {
          id: 3,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "5600",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
          display: "3.5",
          format_audio: "MP3, WAV, ALAC, AAC, AIFF",
          memory: "8",
          time: "40",
      },
      {
          id: 4,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "12000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 5,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "7800",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 6,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "30000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 7,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "32000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 8,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "80000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 9,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 10,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 11,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 12,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 13,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 14,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "120000",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      }
    ]
  }
 },
  mounted() {
    this.productId = +this.$route.params.id;
    console.log(field[0])
  },
  methods: {
    // openDetails() {
    //   $(.characteristics-1).css("overflow", "visible");
    // }
  }
    
  
}
</script>

<style lang="scss" scoped>
.characteristics-visible {
  // height: 2rem;
  overflow: hidden;
   -webkit-line-clamp: 2; /* Число отображаемых строк */
    display: -webkit-box; /* Включаем флексбоксы */
    -webkit-box-orient: vertical; 
}
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
}  
* {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
} 
.container {
  display: flex;
  flex-direction: column;
}
.characteristics {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.general-inf {
  display: flex;
  // align-items: center;
  flex-direction: column;
  align-content: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
}
.characteristic-title {
  align-items: center;
  font-size: 0.9rem;
  color: #6F6E6E;
} 
.general-inf-part {
  margin-bottom: 1rem;
}
.image {
  width: 30rem;
  border: 1px solid grey;
  border-radius: 10px;
  margin-right: 1rem;
}
.product-photo-and-inf {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  line-height: 1.5rem;
  margin-bottom: 1rem;
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
.button-details {
  font-size: 1rem;
  transition-duration: 0.4s;
  background-color: white;
  border: 0;
  color: black;
  border-bottom: 2px dotted lightgrey;
  user-select: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
}
.button-show-more {
  display: flex;
  text-transform: uppercase;
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  background-color: white;
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
  justify-content: space-between;
}
.demo {
  opacity: 0.6;
    &:active {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
}
.column {
  width: 16.66%;
}
.cursor {
  cursor: pointer;
}
.price {
  color: #1c6792;
}
</style>