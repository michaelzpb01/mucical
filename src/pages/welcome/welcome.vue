<template>
  <div class="welcome">
    <header_v>
      <p class="left_minu_slot" slot="left_minu"></p>
      <p class="center_title_slot" slot="center_title">Walkthrough</p>
      <p class="right_minu_slot" slot="right_minu">
        <router-link to="logIn"> Skip</router-link>
      </p>
    </header_v>
    <div class="silder">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide><img src="./img/1.jpg"></swiper-slide>
        <swiper-slide><img src="./img/2.jpg"></swiper-slide>
        <swiper-slide><img src="./img/3.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
            el: '.swiper-pagination'
          },
          loop : true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .welcome{
    position: fixed;
    left:0;
    top:0;
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
    .swiper-pagination{
      position: fixed;
      bottom:10px;
    }
  }

  .mint-swipe-indicator{
    background: #fff !important;
  }
</style>
