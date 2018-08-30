<template>
  <div class="header">
    <div class="left_minu">
      <slot name="left_minu">
        <div class="nav_goback" @click="goBack"><i class="iconfont icon-back"></i> Back</div>
      </slot>
    </div>

    <div class="center_title">
      <slot name="center_title"></slot>
    </div>

    <div class="right_minu">
      <slot name="right_minu"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  export default {
//    props: ['leftState'],
//    data(){
//      return {
//
//      }
//    },
//    mounted(){
//      console.log(this.titleNames)
//    }
//  }
export default {
  props: ['leftState'],
  methods:{
    goBack() {
      //window.history.back();
      javascript:history.go(-1);
      return false;
    }
  },
  mounted(){
    //console.log(this.leftState)
  }
}
</script>

<style lang="scss" scoped>

  .header{
    width:100%;
    height:pxTorem(78px);
    position: fixed;
    left:0;
    top:0;
    z-index:1000;
    line-height:pxTorem(78px);
   /* background: rgba(21,22,24,.5);*/
    .center_title{
      text-align: center;
      font-size:pxTorem(34px);
      line-height: pxTorem(78px);
    }
    .right_minu{
      position: absolute;
      right:pxTorem(30px);
      top:0;
      line-height:pxTorem(78px);
      height:pxTorem(78px);
      font-size:pxTorem(34px);
    }
    .left_minu{
      position: absolute;
      left:pxTorem(30px);
      top:0;
      line-height:pxTorem(78px);
      height:pxTorem(78px);
      font-size:pxTorem(34px);
      .nav_goback{
        color: #ff9500;
      }
    }
    .center_title{
      color: #fff;
    }
    .right_minu a{
      color: #ff9500;
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
  }
</style>
