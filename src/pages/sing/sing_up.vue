<template>
  <div class="sing_up">
    <header_v>
      <p class="center_title_slot" slot="center_title">Sing Up</p>
      <p class="right_minu_slot" slot="right_minu"></p>
    </header_v>
    <div class="sing_cont">
      <!--title-->
      <div class="title">
        <div class="title_name">Account Registration</div>
      </div>

      <!--firm-->
      <div class="form">
        <input type="text" class="form_data username" placeholder="Applemoon">
        <input type="text" class="form_data username" placeholder="Email address">
        <input type="text" class="form_data fassworld" placeholder="Password">
      </div>

      <!--minu-->
      <ul class="minu">
        <li class="minu_sing">Sign Up</li>

      </ul>

      <!--remind-->
      <div class="remind">
        <div class="title_logo">
          <i class="iconfont icon-iconfontshalou"></i>
        </div>
        <p>By signing up, you agree to the </p>
        <p><router-link to="singup">Terms of Service</router-link> & <router-link to="singup">Privacy Poli</router-link></p>
      </div>
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
      console.log(this.aaaa)
    }
  }
</script>

<style lang="scss" scoped>

  .sing_up {
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background: url("./img/sing_up_bg.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    /*position: relative;*/
  }
  .sing_cont {
    text-align: center;
    margin-top:pxTorem(100px);
  }
  .title {
    color: #fff;
    line-height:pxTorem(300px);
  }
  .title_logo{
    margin-bottom:pxTorem(80px);
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
  }
  .form_data {
    width: 85%;
    display: inline-block;
    text-align: left;
    font-size: pxTorem(32px);
    height: pxTorem(95px);
    border-bottom: 1px solid #2f4b6d;
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
    background: #ff9500;
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
    a{
      color: #ff9500;
      font-size:pxTorem(36px);
    }
  }
  input::-webkit-input-placeholder{
    color: #fff;
  }
</style>
