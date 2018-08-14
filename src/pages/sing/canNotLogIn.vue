<template>
  <div class="sing_up">
    <header_v>
      <p class="center_title_slot" slot="center_title">Can't Log In?</p>
      <p class="right_minu_slot" slot="right_minu"></p>
    </header_v>
    <div class="sing_cont">
      <!--title-->
      <div class="title">
        <div class="title_name">Password Recovery</div>
        <div class="title_Prompt">
          <i class="iconfont icon-goods_new_light"></i>
          <div class="Prompt_text">We’ll help you create a new password</div>
        </div>
      </div>

      <!--firm-->
      <div class="form">
        <input type="text" class="form_data email" placeholder="Email address">
      </div>

      <!--minu-->
      <ul class="minu">
        <li class="minu_sing">Submit</li>
      </ul>

      <!--remind-->
      <div class="remind">

        <p>Be sure to check your spam filter for</p>
        <p>an email <span>musical@gmail.co</span></p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" scoped>

  .sing_up {
    width: 100%;
    height: 100%;
    background: #151618;
    background-size: cover;
    overflow: hidden;
    position: relative;
  }
  .sing_cont {
    text-align: center;
    margin-top:pxTorem(200px);
  }
  .title {
    color: #fff;
  }
  .title_logo{
    margin-bottom:pxTorem(80px);
  }
  .title_Prompt{
    font-size:0;
    margin-top:pxTorem(60px);
    .iconfont,.Prompt_text{
      display: inline-block;

    }
    .iconfont{
      font-size:pxTorem(100px);
      color: #ff9500;
    }
    .Prompt_text{
      font-size:pxTorem(34px);
      color: #fff;
      width:pxTorem(380px);
    }
  }
  .title_logo .iconfont {
    font-size: pxTorem(110px);
    transform: rotate(90deg);
    margin-bottom: pxTorem(35px);
    color: #fff;
  }
  .title_name {
    font-size: pxTorem(56px);
  }
  .form {
    font-size: 0;
    text-align: right;
    margin-top:pxTorem(100px);
  }
  .form_data {
    width: 85%;
    display: inline-block;
    text-align: left;
    font-size: pxTorem(32px);
    height: pxTorem(95px);
    border-bottom: 1px solid #3b3b3e;
    background: none;
    color: #fff;
  }
  .minu{
    font-size:0;
    text-align: center;
    margin-top:pxTorem(80px);
  }
  .minu li{
    display: inline-block;
    height:pxTorem(84px);
    border-radius:pxTorem(10px) ;
    border:1px solid transparent;
  }
  .minu li.minu_sing{
    width:pxTorem(560px);
    color: #fff;
    font-size:pxTorem(28px);
    font-weight:bold;
    overflow: hidden;
    line-height:pxTorem(84px);
    background: #5856d6;
    margin:0 pxTorem(20px);
  }
  .minu li.minu_shear{
    width:pxTorem(84px);
    border-color: #8f8e94;
    color: #fff;
    text-align: center;
    line-height:pxTorem(84px);
    overflow: hidden;
    .iconfont{
      font-size:pxTorem(40px);
    }
  }
  .remind{
    font-size:pxTorem(32px);
    position: absolute;
    width:100%;
    bottom:pxTorem(100px);
    left:50%;
    transform: translateX(-50%);
    color: #8f8e94;
    line-height:pxTorem(50px);
    span{
      color: #fff;
      font-size:pxTorem(36px);
    }
  }
  input::-webkit-input-placeholder{
    color: #fff;
  }
</style>
