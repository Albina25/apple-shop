<template>
  <div class="iPod">
    <h3 class="iPod-slogon">Выбери свой iPod</h3>
    <div class="center">
      <div class="select-block">
        <form class="row">
          <div>
            <select class="select-color" v-model="selectedColor" @change="sendToServer">
              <option selected disabled>Цвет</option>
              <option class="element-dropdown" v-for="option in optionsColor" :value="option.value" :key="option.text">
                {{ option.text }}
              </option>
            </select> 
            <i class="fas fa-angle-down arrow"></i> 
          </div>
          <div>
            <select class="select-price">
              <option selected disabled>Цена</option>
              <option class="element-dropdown">По убыванию</option>
              <option class="element-dropdown">По возрастанию</option>
            </select> 
            <i class="fas fa-angle-down arrow"></i> 
          </div>
        </form>
      </div>
      <div class="iPod-list">
        <div class="product" @click="goToProduct(product)" v-for="product of filteredProd" :key="product.id"> 
          <img class="product-image" :src="getSrcImg(product)" alt="illustration" onerror="this.src=defImage"/>
          <div class="product-inf">
            <span class="product-type">{{ product.product_type }}</span>
            <span class="product-title">{{ product.title}}</span>
            <span class="price">{{ product.price }}<i class="fas fa-ruble-sign fa-xs"></i></span>
          </div>
        </div>
      </div>
    </div>
    <button @click="showMoreProducts" v-show="visibleButtonShowMore" class="button-show-more-pr">показать еще</button>
    <FooterMailing/>
  </div>  
</template>

<script>
import FooterMailing from '../components/FooterMailing.vue'
import image from '../../public/imgApple/apple.png'
import {dataProducts} from '../components/DataProducts.js'

export default {
  name: 'Category_iPod',
  components: {
    FooterMailing
  },
  data: () => ({
    products1: dataProducts,
    isImage: true,
    prductsOnPage: [],
    defImage: image,
    image: null,
    end: 6,
    visibleButtonShowMore:true,
    selectedColor:'Цвет',
    
    optionsColor: [
      { text: 'Белый', value: 'Белый'},
      { text: 'Зеленый', value: 'Зеленый'},
      { text: 'Красный', value: 'Красный'}
    ],
    products: [
      {
          id: 1,
          title: "IPod Nano - 8GB",
          product_type: "Cult Products",
          price: "20000",
          image: null,
      },
      {
          id: 2,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "56700",
          image: "http://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
      },
      {
          id: 3,
          title: "IPod Touch 8GB",
          product_type: "Cult Products",
          price: "5600",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg",
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
  }),
  computed: {
filteredProd() {
  return this.products ? this.products.slice(0, this.end) : [];
}
  },
  methods: {
    goToProduct (product) {
      if (product.id) {
      this.$router.push({name:'product', params:{id:product.id}})
      }
  },
    showMoreProducts () {
      this.end = this.end + 6;
      if (this.end > this.products.length) {this.visibleButtonShowMore = false; }
      return this.end;
    },
    getSrcImg(item) {
      return item.image ? item.image : this.defImage
    },
    sendToServer() { 
      const response =  fetch('sendToServer.php',{
        method: 'POST',
        body: JSON.stringify(this.selectedColor),
        headers: {
              'Content-Type': 'application/json', 
        }
      });
    }
  }
}
</script>

<style lang="scss">
$bg-color: #f3f3f3;
.iPod {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  .iPod-slogon {
    margin-bottom: 1rem;
    font-size: 1.7rem;
  }
  .select-block {
    position: relative;
    top: 0;
    left: 1rem;
    margin-bottom: 1rem;
    display: flex;
    text-align: left;
    justify-content: flex-start;
    width: 95%;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .center {
    display: flex;
    margin: 0 auto;
    text-align: center;
    flex-direction: column;
   
    .iPod-list {
      display: flex;
      display: grid;
      grid-template-columns: auto auto auto;
      margin: 0 auto;
      }
  }
  %select {
    border: none;
    outline: none;
    padding: 0.3rem;
    padding-bottom: 0.3rem;
    background-color: $bg-color;
    color: gray;
    cursor: pointer;
    text-transform: uppercase;
    border-bottom: 1px solid gray;
    margin-right: 1rem;
    -webkit-appearance : none;
    -moz-appearance    : none;
    -ms-appearance     : none;
    appearance         : none !important;
  }
  .select-color {
    @extend %select;
    width: 7rem;
    margin-bottom: 0.5rem;
  }
  .select-price {
    @extend %select;
    width: 12rem;
  }
  .arrow {
    position: relative;
    justify-content: center;
    align-items: center;
    right: 3rem;
    height: 100%;
    pointer-events: none;
    color: gray;
    font-weight: bold;
    padding-left: 1rem;
  }
  .product {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }
  .product-inf {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 1.5rem;
  }
  .price {
    color: #1c6792;
    padding: 0.1rem 0.7rem;
    font-size: 1.4rem;
  }
  .product-image {
    width: 18rem;
    border: 1px solid grey;
    border-radius: 10px;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
  .product-type {
    font-size: 0.7rem;
  }
  .button-show-more-pr {
    text-transform: uppercase;
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    color: black;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 1rem;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
  }
}
@media only screen and (min-width: 415px) and (max-width: 734px) and (orientation: portrait) {
  .iPod {
    .center {
      .iPod-list {
        grid-template-columns: repeat(2,20rem);
      }
    }
  } 
}
  @media only screen and (max-width: 497px) and (orientation: portrait) {
  .iPod {
    .center {
      .iPod-list {
        grid-template-columns: repeat(1,20rem);
      }
      .row {
      flex-direction: column;
      }
    }
    .header-text {
      font-size: 0.8rem;
    }
    .icon-menu {
      position: absolute;
      right: 0;
      top: 0;
    }
  }  
}
  </style>

