<template>
  <div class="welcome">
    <header_v>
      <p class="left_minu_slot" slot="left_minu"></p>
      <p class="center_title_slot" slot="center_title">Walkthrough</p>
      <p class="right_minu_slot" slot="right_minu">
        <router-link to="SingIn"> Skip</router-link>
      </p>
    </header_v>
    <div class="silder">
      <mt-swipe :auto = 0 :continuous="false">
        <mt-swipe-item>
          <img src="./img/1.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./img/2.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./img/3.jpg">
        </mt-swipe-item>

      </mt-swipe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 /* import header from '@/components/header/header';

  export default {
    components: {
      'header-v': header
    }
  };*/
</script>

<style lang="scss" scoped>
  .welcome{
    width:100%;
    height:100%;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #151618;
    display: flex;
    flex-direction:column;
    padding-top:pxTorem(78px);
  }
  .silder{
    flex:1;
    img{
      width:100%;
    }
    overflow: hidden;
  }

  .mint-swipe-indicator{
    background: #fff !important;
  }
</style>
