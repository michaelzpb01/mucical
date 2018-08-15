<template>
  <div class="title-bar clearfix">
    <div class="left_minu">
      <slot name="left_minu"></slot>
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

</script>

<style lang="scss" scoped>

  .title-bar{
    position: relative;
    font-family: "Microsoft Yahei";
    line-height:pxTorem(80px);
    font-size:pxTorem(34px);
    display: flex;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding:pxTorem(20px);
    justify-content: space-between;
    .left_minu{
      color: #fff;
    }
    .right_minu{
      a{
        color: #ff9500;
      }
    }
  }
</style>
