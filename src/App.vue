<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="scss">
  @import "assets/scss/reset.scss";
  @import "assets/scss/common.scss";
  //@import "assets/css/icon.css";
  #app,html,body{
    width:100%;
    height:100%;
  }

</style>
