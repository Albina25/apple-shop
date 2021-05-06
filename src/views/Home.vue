<template>
  <div class="home">
    <h3 class="catalog-slogon">Ваша музыка с вами посвюду</h3>
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

<style lang="scss" scopped>
$bg-color: #f3f3f3 ;
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/ipod-touch.jpg');
  height: 68vh;
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
}  
.catalog-slogon {
  margin-bottom: 1rem;
  font-size: 1.7rem;
}
@media only screen and (max-width: 414px) and (orientation: portrait) {
  .home {
    height: 67vh;
    background-size: auto 100%;
  }
}  
</style>

