<template>
  <div class="home">
    <h3 class="catalog-slogon">Ваша музыка с вами посвюду</h3>
    <div>
      <div class="catalog">
        
        <div class="product" @click="goToProduct(product)" v-for="product in products" :key="product.id"> 
          <img class="image" v-if="product.image" :src="product.image"/>
          <img class="image" v-else :src="plugImage"/>
            <div class="product-inf">
              <span class="product-type">{{ product.product_type }}</span>
              <span class="product-title">{{ product.title}}</span>
              <span class="price">{{ product.price }}<i class="fas fa-ruble-sign fa-xs"></i></span>
            </div>
        </div>
        
      </div>
    </div>
  </div>  
</template>

<script>

import image from '../assets/apple.png'
export default {
  name: 'Home',
  data: () => ({
    isImage: true,
    mainTitle: "Apple iPod",
    plugImage: image,
    showNav: false,
    mobileView: false,
    width: 0,
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
    }
  }
}

</script>

<style lang="scss" scopped>
.home {
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
html, body {
	width: 100%;
	font-size: 16px;
}
.catalog-slogon {
  margin-bottom: 1rem;
  font-size: 1.7rem;
}
.catalog {
  display: flex;
  flex-wrap: wrap;
  width: 60rem;
  align-items: center;
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
.image {
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
@media only screen and (min-width: 414px) and (orientation: portrait) {
  .catalog {
    width: 40rem;
  }
}  
  @media only screen and (max-width: 414px) and (orientation: portrait) {
  .catalog {
      flex-direction: column;
      width: 100%;
  }
  .image {
    width: 12rem;
  }
  .header-text {
    font-size: 0.8rem;
  }
  // .element-navigation:not(:first-child) {
  //   display: none;
    
  // }
  .icon-menu {
    position: absolute;
    right: 0;
    top: 0;
  }
}  

</style>

