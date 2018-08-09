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
  @import "assets/css/icon.css";
  //@import "assets/iconfont/iconfont.css";

  #app,html,body{
    width:100%;
    height:100%;
  }

</style>
