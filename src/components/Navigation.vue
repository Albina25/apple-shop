<template>
  <div id="navigation">
    <ul class="top-navigation">
      <router-link to="/"><li class="element-navigation"><i class="fab fa-apple fa-lg"></i></li></router-link>
      <li class="element-navigation">Mac</li>
      <li class="element-navigation">iPad</li>
      <li class="element-navigation">iPhone</li>
      <li class="element-navigation">Whatch</li>
      <li class="element-navigation">TV</li>
      <li class="element-navigation">Music</li>
      <li class="element-navigation">Поддержка</li>
    </ul> 
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scopped>
#navigation {
  display: flex;
  width: 100%;
  justify-content: center;
}
.top-navigation {
  display: flex;
  margin: 0.5rem 3rem;
  z-index: 9999;
  width: 100%;
  list-style: none;
  justify-content: space-around;
}
.element-navigation {
  text-decoration: none;
  color: white;
  padding: 0 auto;
  text-shadow: black 2px 3px 2px;
  cursor: pointer;
    &:hover {
    opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
}     
</style>
