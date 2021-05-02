<template>
  <div id="navigation-mobile">
    <ul class="top-navigation-mobile">
      <li class="element-navigation-mobile">Mac</li>
      <li class="element-navigation-mobile">iPad</li>
      <li class="element-navigation-mobile">iPhone</li>
      <li class="element-navigation-mobile">Whatch</li>
      <li class="element-navigation-mobile">TV</li>
      <li class="element-navigation-mobile">Music</li>
      <li class="element-navigation-mobile">Поддержка</li>
    </ul> 
    <div class="social-media">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-pinterest"></i>
    </div>
  </div>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scopped>
* {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
} 
#navigation-mobile {
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-top: 1.9rem;
  // background: #202020;
  // background-color: #202020;
  background: linear-gradient(to right, #080808 15%,#606060);
  z-index: 9999;
  transition: .5s ease-in-out;
}
.top-navigation-mobile {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-bottom: 1px solid white;
  // width: auto;
  list-style: none;
  transition: .5s ease-in-out;
}
.element-navigation-mobile {
  padding: 1rem 0;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:last-child { margin-bottom: 1rem;}
    &:hover {
    opacity: 0.8;
    background-color: #585858;
    }
    &:active {
    background-color: #686868;
    opacity: 0.6;
  }
}  
.social-media {
  margin-bottom: 1rem;
    i {
    padding: 1rem;
    color: #fff;
    font-size: 1rem;
      &:hover {
      opacity: 0.8;
      background-color: #585858;
      }
      &:active {
      background-color: #686868;
      opacity: 0.6;
      }
    }
    
  }   
 
</style>
