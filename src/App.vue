<template>
  <div id="app">
   <div class="header-image">
      
      <Navigation v-if="!mobileView" /> 
  
        <div class="icon-navigation" v-if="mobileView">
          <i class="fas fa-bars element-icon-navigation" v-if="!showNav"  @click="showNav=!showNav" key="menu"></i>
          <i class="fas fa-times element-icon-navigation" v-else @click="showNav=!showNav" key="clear"></i>
          <!-- <i class="fab fa-apple fa-lg element-icon-home"></i> -->
        </div>
        <div v-if="showNav">
          <NavigationMobile />
        </div>
       
      <div class="header-text">
      <h4>{{ mainTitle }}</h4>
      <h1 class="slogon">Развлечения<br>на полной скорости</h1>
      <router-link to="/"><button class="button-catalog">каталог</button></router-link>
      </div>
    </div>
     <router-view/>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import NavigationMobile from './components/NavigationMobile.vue'
import image from './assets/apple.png';


export default {
  name: 'App',
  components: {
    Navigation,
    NavigationMobile
  },
  
  data: () => ({
    isImage: true,
    mainTitle: "Apple iPod",
    plugImage: image,
    showNav: false,
    mobileView: false,
    width: 0,
  }),
  methods: {
    handleView() {
      // this.mobileView = window.innerWidth <= 768;
      if ( window.innerWidth <= 768) {
        this.mobileView = true;
      } else { 
          this.showNav = false; 
          this.mobileView = false;
        }
        
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
} 
 
</script>


<style lang="scss" scopped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
} 
.header-image {
  position: relative;
  height: 30vh;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  background-image: url('./assets/bg1.jpg');
  margin-bottom: 1rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.button-catalog {
  border: none;
  outline: 0;
  padding: 0.7rem 1.5rem;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 0.8rem rgba(0,0,0,0.5);
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
}
.header-text {
  text-align: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  line-height: 1.3;
  letter-spacing: -.015em;
  text-shadow: black 2px 3px 2px; 
}
.slogon {
margin-bottom: 1rem;
line-height: 1;
width: auto;
}
.icon-navigation {
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
} 
.element-icon-navigation {
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
  color: white;
  transition: .5s ease-in-out;
}
.element-icon-home {
  position: absolute;
  left: 0.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
  color: white;
  z-index: 9999;
}
</style>
