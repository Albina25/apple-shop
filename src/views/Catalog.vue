<template>
  <div class="catalog">
    <h3 class="catalog-title">знакомьтесь.</h3>
    <h2 class="catalog-slogon">Удивительно мощно. Удивительно просто.</h2>
    <div class="center">
      
      <div class="catalog-list">
        <div class="category" v-for="category of categories" :key="category.id"> 
          <a :href="category.url">
            <div class="gradient">
              <img class="category-image" :src="getSrcImg(category)" alt="illustration" onerror="this.src=defImage"/>
              <span class="category-title">{{ category.title}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <FooterMailing/>
  </div>  
</template>

<script>
import FooterMailing from '../components/FooterMailing.vue'
import image from '../../public/imgApple/apple.png'
import imgIpod from '../../public/imgApple/ipod.jpg'

export default {
  name: 'Catalog',
  components: {
    FooterMailing
  },
  data: () => ({
    isImage: true,
    defImage: image,
    image: null,
    categories: [
      {
          id: 1,
          title: "Mac",
          image: null,
          url: null,
      },
      {
          id: 2,
          title: "IPad",
          image: null,
          url: null,
      },
      {
          id: 3,
          title: "IPhone",
          image: null,
          url: null,
      },
      {
          id: 4,
          title: "Whatch",
          image: null,
          url: null,
      },
      {
          id: 5,
          title: "TV",
          image: null,
          url: null,
      },
      {
          id: 6,
          title: "IPod",
          image: imgIpod,
          url: "/catalog/category_iPod",
      },
    ]
  }),
  methods: {
    getSrcImg(item) {
      return item.image ? item.image : this.defImage
    },
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
  
  .catalog-title {
    margin: 2rem 0;
    font-size: 1.7rem;
    text-transform: uppercase;
  }
  .catalog-slogon {
    margin-bottom: 2rem;
    font-size: 1.5rem;
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
    margin-bottom: 2rem;

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
    padding: 0.3rem;
    padding-bottom: 0.3rem;
    background-color: $bg-color;
    color: gray;
    cursor: pointer;
    text-transform: uppercase;
    border-bottom: 1px solid gray;
    margin-right: 1rem;
    appearance: none !important;
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
  .category {
    padding: 0 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
    position: relative;
  }
  .category-inf {
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
  .category-image {
    width: 18rem;
    height: 10rem;
    text-align: center;
    border: 1px solid grey;
    border-radius: 10px;
  }
  .gradient {
	display: inline-block;
	position: relative;    
	line-height: 0;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
    &:after {
      background: transparent;
      background: linear-gradient(to bottom, rgba(255, 254, 254, 0), 85%, #000000);
      opacity: 0.6;
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
  .category-title {
    z-index: 9;
    position: relative;
    color: white;
    text-shadow: 1px 1px 1px #000;
    width: 100%;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .category-type {
    font-size: 0.7rem;
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

