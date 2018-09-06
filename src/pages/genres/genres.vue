<template>
  <div class="genres">
    <header_v>
      <p class="center_title_slot" slot="center_title">genres</p>
      <p class="right_minu_slot" slot="right_minu">
        <i class="iconfont icon-search_light"></i>
      </p>
    </header_v>

    <div class="search">
      <input type="text">
    </div>

    <ul class="genres-lists">
      <li class="genres-list" v-for="item in genresData.data">
        <router-link :to="{path:'albums',query:{id: item.id}}">
          <img :src="item.imgurl">
          <div class="list-name">{{item.name}}</div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  //https://raw.githubusercontent.com/michaelzpb01/mucical/dev/src/pages/genres/img/genres2.jpg
  export default {
    data(){
      return {
        genresData :{
          code:0,
          data:[
            {
              imgurl:'https://raw.githubusercontent.com/michaelzpb01/mucical/dev/src/pages/genres/img/genres1.jpg',
              name:'Ambient1',
              id:1
            },
            {
              imgurl:'https://raw.githubusercontent.com/michaelzpb01/mucical/dev/src/pages/genres/img/genres2.jpg',
              name:'Ambient2',
              id:12
            },
            {
              imgurl:'https://raw.githubusercontent.com/michaelzpb01/mucical/dev/src/pages/genres/img/genres3.jpg',
              name:'Ambient3',
              id:13
            },
            {
              imgurl:'https://raw.githubusercontent.com/michaelzpb01/mucical/dev/src/pages/genres/img/genres2.jpg',
              name:'Ambient4',
              id:14
            },
            {
              imgurl:'https://raw.githubusercontent.com/michaelzpb01/mucical/dev/src/pages/genres/img/genres1.jpg',
              name:'Ambient5',
              id:15
            },
            {
              imgurl:'https://raw.githubusercontent.com/michaelzpb01/mucical/dev/src/pages/genres/img/genres3.jpg',
              name:'Ambient6',
              id:16
            }
          ]
        }
      }
    }
  }
</script>j

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

  .genres-lists{
    margin-top:pxTorem(40px);
    .genres-list{
      position: relative;
      width:100%;
      height:pxTorem(224px);
      overflow: hidden;
      border-radius: pxTorem(20px);
      margin-bottom: pxTorem(20px);
      a{
        display: block;
      }
      img{
        width:100%;
        height:100%;
      }
      .list-name{
        position: absolute;
        top:0;
        font-size:pxTorem(44px);
        left:pxTorem(66px);
        line-height:pxTorem(224px);
        color: #fff;
      }
    }
  }
</style>
