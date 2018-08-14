<template>
  <div class="sing_in">
    <header_v>
      <p class="center_title_slot" slot="center_title">Sing In</p>
      <p class="right_minu_slot" slot="right_minu"></p>
    </header_v>
    <div class="sing_cont">

      <!--title-->
      <div class="title">
        <div class="title_logo">
          <i class="iconfont icon-iconfontshalou"></i>
        </div>
        <div class="title_name">Musical</div>
      </div>



      <!--firm-->
      <div class="form">
        <input type="text" class="form_data username" v-model="username" placeholder="Pick a username">
        <input type="text" class="form_data fassworld" v-model="password" placeholder="Create a password">
      </div>

      <!--minu-->
      <ul class="minu">
        <li class="minu_fb minu_shear">
          <i class="iconfont icon-facebookicon"></i>
        </li>
        <li class="minu_sing" @click="submit()">Sign In</li>
        <li class="minu-tw minu_shear">
          <i class="iconfont icon-twitter"></i>
        </li>

      </ul>
      <!--Forgot your password-->
      <div class="reset-password">
        <router-link to="canNotLogIn">Forgot your password?</router-link>
      </div>

      <!--remind-->
      <div class="remind"><router-link to="singup">Already have an account?</router-link></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        username:'',
        password:'',
        popupVisible:false
      }
    },
    methods:{
        submit(){
          if(this.username == ''){
            this.Toast('请输入用户名');
            return false;
          }else if(this.password == ''){
            this.Toast('请输入密码');
            return false;
          }else{
            console.log(1);
            this.$router.push({path:'/Musical'});
          }
        }
    },
    mounted(){
      //console.log(this.aaaa)

    }
  }
</script>

<style lang="scss" scoped>
  .sing_in {
    @extend .defaultStyle;
    background: url("./img/sing_bg.jpg") no-repeat;
    background-size: cover;
  }
  .sing_cont {
    margin-top: pxTorem(180px);
    text-align: center;
  }
  .title {
    color: #fff;
    .iconfont {
      font-size: pxTorem(110px);
      transform: rotate(90deg);
      margin-bottom: pxTorem(35px);
    }
  }
  .title_name {
    font-size: pxTorem(56px);
  }
  .form {
    font-size: 0;
    text-align: right;
    margin-top: pxTorem(40px);
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
    width:pxTorem(342px);
    color: #fff;
    font-size:pxTorem(28px);
    font-weight:bold;
    overflow: hidden;
    line-height:pxTorem(84px);
    background: #0076ff;
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
    a{
      color: #ff9500;
    }
  }
  input::-webkit-input-placeholder{
    color: #fff;
  }
  .reset-password{
    height:auto;
    line-height:pxTorem(32px);
    a{
      font-size:pxTorem(32px);
      color: #fff;
      text-align: center;
    }
  }
</style>
