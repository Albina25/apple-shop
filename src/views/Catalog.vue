<template>
  <div class="catalog">
    <h3 class="catalog-slogon">Выбери свой iPod</h3>
    
    <div class="center">
      <div class="select-block">
        <form action="select1.php" method="post">
          <select name="select-color" class="select-color" @click="sendToServer(this.value)">
            <option disabled selected>цвет</option>
            <option value="Зеленый" class="option">зеленый</option>
            <option value="Красный" class="option">красный</option>
            <option value="Белый" class="option">белый</option>
          </select>
          <select name="select-price" class="select-price">
            <option disabled selected>цена</option>
            <option class="option">по убыванию</option>
            <option class="option">по возрастанию</option>
          </select>
        </form>
      </div>
      <div class="catalog-list">
        <div class="product" @click="goToProduct(product)" v-for="product of products.slice(0, end)" :key="product.id"> 
          <img class="product-image" :src="getSrcImg(product)" alt="illustration" onerror="this.src=defImage"/>
          <div class="product-inf">
            <span class="product-type">{{ product.product_type }}</span>
            <span class="product-title">{{ product.title}}</span>
            <span class="price">{{ product.price }}<i class="fas fa-ruble-sign fa-xs"></i></span>
          </div>
        </div>
      </div>
    </div>
    <button @click="showMoreProducts" v-show="this.visibleButtonShowMore" class="button-show-more-pr">показать еще</button>
    <FooterMailing/>
  </div>  
</template>

<script>
import FooterMailing from '../components/FooterMailing.vue'
import image from '../assets/apple.png'
export default {
  name: 'Home',
  components: {
    FooterMailing
  },
  data: () => ({
    isImage: true,
    prductsOnPage: [],
    // mainTitle: "Apple iPod",
    defImage: image,
    // showNav: false,
    // mobileView: false,
    // width: 0,
    image: null,
    end: 6,
    visibleButtonShowMore:true,
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
 
  methods: {
    goToProduct (product) {
      if (product.id) {
      this.$router.push({name:'product', params:{id: product.id}})
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
    sendToServer(val) { 
      const i = val;
      const response =  fetch('sendToServer.php',{
        method: 'POST',
        body: JSON.stringify(i),
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
.catalog {
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
  
  .catalog-slogon {
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
  .center {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    // max-width: 60rem;
    flex-direction: column;
    .catalog-list {
      display: flex;
      display: grid;
      grid-template-columns: auto auto auto;
      margin: 0 auto;
      }
    }
  %select {
    border: none;
    outline: none;
    padding-bottom: 0.5rem;
    background-color: $bg-color;
    color: gray;
    text-transform: uppercase;
    border-bottom: 1px solid gray;
    margin-right: 1rem;
    
  }
  .select-color, .select-price {
    @extend %select;
    &::after {
      content: "";
    padding-bottom: 0.5rem;
    }
  }
  .option {
    padding: 0.5rem 0;
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
    // display: flex;
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
  .catalog {
    .center {
      .catalog-list {
        grid-template-columns: repeat(2,20rem);
      }
    }
  } 
}
  @media only screen and (max-width: 497px) and (orientation: portrait) {
  .catalog {
    .center {
      .catalog-list {
        grid-template-columns: repeat(1,20rem);
          // flex-direction: column;
          // width: 20rem;
      }
    }
    // .product-image {
    //   width: 16rem;
    // }
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

