<template>
  <div class="home">
    <div class="bg-image-slogon">
      <div class="home-slogon">Ваша музыка с вами повcюду</div>
      <div class="bg-phone-img"></div>
    </div>
  </div>  
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    isImage: true,
    mainTitle: "Apple iPod",
    showNav: false,
    mobileView: false,
        
  }),
  methods: {
    goToProduct (product) {
      if (product.id) {
      this.$router.push({name:'product', params:{id: product.id}})
      }
    },
    getSrcImg(item) {
      return item.image ? item.image : this.defImage
    }
  }
}

</script>

<style lang="scss">
$bg-color: #f3f3f3 ;
html, body{
width: 100%;
height: 100%;
background-color: $bg-color;
}
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
  align-items: center;
  background: $bg-color;
 
 
  .bg-phone-img {
    background-image: url('../assets/ipod-touch.jpg');
    height: 68.2vh;
    background-size: auto 500px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .home-slogon {
    font-size: 2.5rem;
    padding: 1rem;
    font-weight: bold;
  }
}
@media only screen and (min-width: 735px) and (max-width: 1068px) and (orientation: portrait) {
  html, body{
    font-size: 12px;
  }
  // .home {
  //   height: 67.5vh;
  //   background-size: auto 100%;
  // }
  .home {
    
    .catalog-slogon {
      padding: 0;
    }
    .bg-phone-img {
    background-image: url('../assets/ipod-touch.jpg');
    height: 57.5vh;
    background-size: 500px auto;
    }
    .home-slogon {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }
}  
@media only screen and (max-width: 734px) and (orientation: portrait) {
  .home {
    // height: calc(100%-30vh);
    background-size: 500px auto;
    
  
    .catalog-slogon {
      padding: 0;
    }
    .bg-phone-img {
    background-image: url('../assets/ipod-touch.jpg');
    height: 58vh;
    background-size: 600px auto;
    }
    .home-slogon {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
    html, body{
      font-size: 12px;
    }
  }
} 
</style>

