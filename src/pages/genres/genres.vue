<template>
  <div class="genres">
    <header_v>
      <p class="center_title_slot" slot="center_title">Musical</p>
      <p class="right_minu_slot" slot="right_minu">
        <i class="iconfont icon-search_light"></i>
      </p>
    </header_v>

    <div class="search">
      <input type="text">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" scoped>
  .genres{
    @extend .pageStyle;
    background-color: #151618;
    padding-bottom:pxTorem(40px);
    padding:pxTorem(100px) pxTorem(32px) pxTorem(40px);

  }
  .search{
    position: relative;
    &:after{
      font-family:iconfont;
      content: "\E7E0";
      font-size:18px;
      position: absolute;
      left:pxTorem(20px);
      top:pxTorem(15px);
      color: #8e8d93;
    }

    &:before{
      font-family:iconfont;
      content: "\e6f0";
      font-size:18px;
      position: absolute;
      right:pxTorem(20px);
      top:pxTorem(15px);
      color: #8e8d93;
    }

    input{
      text-indent:pxTorem(75px);
      display: block;
      background: #242527;
      width:100%;
      height:pxTorem(72px);
      line-height:pxTorem(72px);
      border-radius: pxTorem(10px);
      font-size:pxTorem(32px);
    }
  }
</style>
