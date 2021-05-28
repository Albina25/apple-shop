<template>
  <div id="app">
    <div class="header-image">
      <Navigation v-if="!mobileView"/> 
        <router-link v-if="mobileView" class="element-icon-home" to="/"><i class="fab fa-apple fa-lg" @click="NavMobile=false"></i></router-link>
        <div class="icon-navigation" v-if="mobileView">
          <i class="fas fa-bars element-icon-navigation" v-if="!NavMobile"  @click="changeNavVisible" key="menu"></i>
          <i class="fas fa-times element-icon-navigation" v-else @click="changeNavVisible" key="clear"></i>
        </div>
        <div v-if="NavMobile" @click="changeNavVisible" >
          <NavigationMobile/>
        </div>
        <div class="header-title-and-button">
            <h3>{{ mainTitle }}</h3>
            <h1 class="slogon">Развлечения<br>на полной скорости</h1>
          <div><router-link class="button-catalog" tag="button" to="/catalog">каталог</router-link></div>
        </div>
    </div>
  <router-view v-show="!NavMobile"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import NavigationMobile from './components/NavigationMobile.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    NavigationMobile
  },
  data: () => ({
    isImage: true,
    mainTitle: "Apple",
    NavMobile: false,
    mobileView: false,
    width: 0,
  }),
  methods: {
    handleView() {
      if ( window.innerWidth <= 734) {
        this.mobileView = true;
      } else { 
          this.NavMobile = false; 
          this.mobileView = false;
        }
    },
    changeNavVisible() {
      this.NavMobile=!this.NavMobile;
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
} 
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f3f3f3;
  background-size: cover;
  height: 100vh;
}
// img {
//   max-width: 100%;
//   display: block;
// }
* {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
} 
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
html, body {
	font-size: 16px;
  width: 100%;
}
.header-image {
  position: relative;
  height: 30vh;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  background: linear-gradient(to right, #080808 15%,#606060);
  margin-bottom: 1rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.button-catalog {
  font-size: 1.2rem;
  border: none;
  text-decoration: none;
  outline: 0;
  padding: 0.3rem 0.8rem;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 0.8rem rgba(0,0,0,0.5);
    &:hover {
      opacity: 0.9;
    }
    &:active {
      opacity: 0.8;
    }
}
.header-title {
  text-shadow: black 2px 3px 2px; 
}
.header-title-and-button {
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
  cursor: pointer;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  color: white;
  z-index: 9999;
  left: 0;
  top: 0;
  }

@media only screen and (min-width: 735px) and (max-width: 1068px) {
  .header-image {
    background-size: 1200px auto;
    background-position: center;
    background-repeat: no-repeat;
  }  
}
@media only screen and (max-width: 734px) and (orientation: portrait) {
  html, body {
	  font-size: 12px;
  }
  .header-title-and-button {
    font-size: 1rem;
  }
  .header-image {
    background-size: 1000px auto;
    background-position: center;
    background-repeat: no-repeat;
  }  
}
</style>
