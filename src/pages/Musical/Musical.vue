<template>
  <div class="Musical">
    <header_v>
      <p class="left_minu_slot" slot="left_minu">
        <i class="iconfont icon-sortlight"></i>
      </p>
      <p class="center_title_slot" slot="center_title">Musical</p>
      <p class="right_minu_slot" slot="right_minu">
        <i class="iconfont icon-search_light"></i>
      </p>
    </header_v>
    <!--banner-->
    <div class="silder">
      <mt-swipe :auto="5000">
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
  export default {
    props: ['leftState'],
    data(){
      return {

      }
    },
    mounted(){
      const _ = this._;
      _.scaleImg(_._('.silder img'));
      //console.log(_._('.silder img'))
    }
  }
</script>

<style lang="scss" scoped>
  .Musical{
    @extend .defaultStyle;
    .silder{
      height:pxTorem(440px);
      img{
        width:100%;
      }
    }
  }
  .left_minu_slot,.right_minu_slot{
    .iconfont{
      color: #ff9500;
      font-size:24px;
      font-weight:bold;
    }
  }
  .right_minu_slot{
    .iconfont{
      font-size:22px;
    }
  }
</style>
