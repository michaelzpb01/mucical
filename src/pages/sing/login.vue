<template>
  <div class="login">
    <header_v>
      <p class="left_minu_slot" slot="left_minu"></p>
      <p class="center_title_slot" slot="center_title">Sing In</p>
      <p class="right_minu_slot" slot="right_minu"></p>
    </header_v>
    <div class="title_img">
      <ul>
        <li><img src="./img/sing_title_img1.jpg"></li>
        <li><img src="./img/sing_title_img2.jpg"></li>
        <li><img src="./img/sing_title_img3.jpg"></li>
      </ul>
    </div>
    <div class="title_text">
      <h2>Navigation Bar</h2>
      <p>Check out listings of all this week's new singles and albums</p>
    </div>
    <div class="minu">

      <div class="login_minu">
        <router-link to="SingIn">Sing In</router-link>
        <!--<input type="button" class="login_btn" value="Login">-->
      </div>


      <div class="Thirdparty">
        <div class="party_btn login_fb">
          <i class="iconfont icon-facebookicon"></i>
          <span>Facebook</span>
        </div>
        <div class="party_btn login_tw">
          <i class="iconfont icon-twitter"></i>
          <span>Twitter</span>
        </div>

       <!-- <input type="button" class="login_fb">
        <input type="button" class="login_tw">-->
      </div>
      <!--<div class="test">-->

      <!--</div>-->
      <div class="singup">
        <router-link to="Singup">Sing Up</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" scoped>
  .test{
    height:30px;
    background: #0adef7;
    width:pxTorem(750px);
  }
  .login{
    @extend .defaultStyle;
    background: #4b2b96 url("./img/login_footerbg.jpg") no-repeat bottom;
    background-size: 100% auto;
  }
  .title_img{
    font-size:0;
    text-align: center;
    width:100%;
    margin-top:pxTorem(176px);
    padding:pxTorem(44px) 0;
    li{
      display: inline-block;
      margin:0 pxTorem(20px);
    }
    img{
      display:block;
      border-radius: 100%;
      width:pxTorem(120px);
      height:pxTorem(120px);
    }
  }
  .title_text{
    color: #fff;
    text-align: center;
    h2{
      font-size:pxTorem(52px);
      line-height:pxTorem(106px);
    }
    p{
      font-size:pxTorem(34px);
      width:80%;
      line-height:pxTorem(44px);
      margin:0 auto;
    }
  }
  .minu{
    position: absolute;
    left:0;
    width:100%;
    text-align: center;
    bottom:pxTorem(70px);
    .singup a{
      color: #ff9500;
      font-size:pxTorem(32px);
      line-height:pxTorem(92px);
    }
  }
  .login_minu{
    a{
      display: block;
      width:pxTorem(554px);
      height:pxTorem(88px);
      line-height:pxTorem(80px);
      background: none;
      border:1px solid #3f3e44;
      border-radius: pxTorem(10px);
      display: block;
      margin:0 auto;
      color: #fff;
      text-align: center;
      font-size:pxTorem(36px);
    }
  }
  .Thirdparty{
    font-size:0;
    margin-top:pxTorem(20px);
    .party_btn{
      width:pxTorem(268px);
      height:pxTorem(88px);
      display: inline-block;
      font-size:pxTorem(32px);
      text-align: center;
      overflow: hidden;
      color: #fff;
      line-height:pxTorem(88px);
      border-radius: pxTorem(10px);
      margin:0 pxTorem(10px);
    }
    .iconfont{
      font-size:pxTorem(36px);
    }
    .party_btn.login_fb{
      background: #2244af;
    }
    .party_btn.login_tw{
      background: #3cc1ff;
    }
  }
</style>
