<template>
  <ul class="list">

    <li class="clearFix list-li" v-for="(item, index) in listData.data">
        <div class="fl list-img">
          <img src="../../pages/Musical/img/list1.jpg">
        </div>

        <div class="fl list-text">
          <h3>{{ item.name }}</h3>
          <p>{{ item.user }}</p>
        </div>

        <div class="fl list-icon">
          <i :class="'iconfont icon-xinhao' + (index+1)"></i>
        </div>

        <div class="fl list-jg">
            <span class="pay">{{ item.money }}</span>
        </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['listData'],
    mounted(){
      console.log(this.listData)
    }
  }
</script>

<style lang="scss" scoped>
  .list{
    padding-left:pxTorem(20px);
    .list-li{
      border-top:1px solid #3b3b3e;
      padding:pxTorem(20px);
      padding-left:0;
      overflow: hidden;
      /*&:last-child{*/
        /*border-bottom:1px solid #3b3b3e;*/
      /*}*/
    }

    .list-img{
      margin-right:pxTorem(36px);
      img{
        width:pxTorem(88px);
        height:pxTorem(88px);
        -webkit-border-radius: pxTorem(10px);
        -moz-border-radius: pxTorem(10px);
        border-radius: pxTorem(10px);
      }

    }

    .list-text{
      width:pxTorem(370px);
      h3{
        width:100%;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-size:pxTorem(34px);
        line-height:pxTorem(44px);
        color: #fff;
      }
      p{
        font-size:pxTorem(30px);
        line-height:pxTorem(40px);
        color: #8f8e94;
      }
    }

    .list-icon{
      margin-right:pxTorem(36px);
      line-height:pxTorem(100px);
      font-size:pxTorem(20px);
      color: #ff9500;
    }
    .list-jg{
      width:pxTorem(120px);
      font-size:pxTorem(30px);
      line-height:pxTorem(88px);
      text-align: center;
      span{
        vertical-align: middle;
        width:100%;
        height:pxTorem(60px);
        line-height:pxTorem(60px);
        display: inline-block;
        color: #8f8e94;
        -webkit-border-radius: pxTorem(10px);
        -moz-border-radius: pxTorem(10px);
        border-radius: pxTorem(10px);
        &.pay{
          background: #0076ff;
          color: #fff;
        }
      }
    }
  }


</style>
