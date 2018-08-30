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
      <swiper :options="bannerSwiperOption">
        <!-- slides -->
        <swiper-slide><img src="./img/1.jpg"></swiper-slide>
        <swiper-slide><img src="./img/2.jpg"></swiper-slide>
        <swiper-slide><img src="./img/3.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="musical-swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>

    </div>

    <!--Browse by Genre-->
    <div class="genre">
      <titleBar>
        <p class="left_minu_slot" slot="left_minu">Browse by Genre</p>
        <p class="right_minu_slot" slot="right_minu">
          <router-link to="#">See All</router-link>
        </p>
      </titleBar>

      <div class="genre-swiper">
        <swiper :options="genreSwiperOption">
          <!-- slides -->
          <swiper-slide><img src="./img/1.jpg"></swiper-slide>
          <swiper-slide><img src="./img/2.jpg"></swiper-slide>
          <swiper-slide><img src="./img/3.jpg"></swiper-slide>
          <swiper-slide><img src="./img/1.jpg"></swiper-slide>
          <swiper-slide><img src="./img/2.jpg"></swiper-slide>
          <swiper-slide><img src="./img/3.jpg"></swiper-slide>

        </swiper>
      </div>
    </div>

    <!--New Albums-->
    <div class="albums">
      <titleBar>
        <p class="left_minu_slot" slot="left_minu">New Albums</p>
        <p class="right_minu_slot" slot="right_minu">
          <router-link to="#">See All</router-link>
        </p>
      </titleBar>

      <div class="albums-swiper">
        <swiper :options="albumsSwiperOption">
          <!-- slides -->
          <swiper-slide><img src="./img/1.jpg"></swiper-slide>
          <swiper-slide><img src="./img/2.jpg"></swiper-slide>
          <swiper-slide><img src="./img/3.jpg"></swiper-slide>
          <swiper-slide><img src="./img/1.jpg"></swiper-slide>
          <swiper-slide><img src="./img/2.jpg"></swiper-slide>
          <swiper-slide><img src="./img/3.jpg"></swiper-slide>

        </swiper>
      </div>
    </div>

    <!--Most Played Tracks-->
    <div class="tracks">
      <titleBar>
        <p class="left_minu_slot" slot="left_minu">Most Played Tracks</p>
        <p class="right_minu_slot" slot="right_minu">
          <router-link to="#">See All</router-link>
        </p>
      </titleBar>

      <musicList list-data="this.musicList"></musicList>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['leftState'],
    data(){
      return {
        bannerSwiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
            el: '.musical-swiper-pagination'
          },
          loop : true
        },
        genreSwiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 10,
          freeMode: true,
        },
        albumsSwiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 10,
          freeMode: true,
        },
        musicList:{
          type:1,
          data:[
            {
              img:'../../pages/Musical/img/list1.jpg',
              name:'Long Time',
              user:'Blondie',
              lv:2,
              time:'20:00',
              money:'$10.22'
            }
          ]
        }
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
    @extend .pageStyle;
    background-color: #151618;
    .silder{
      height:pxTorem(440px);
      overflow: hidden;
      position: relative;
      .swiper-container{
        height:100%;
        overflow: hidden;
      }
      img{
        width:100%;
      }
      .musical-swiper-pagination{
        text-align: center;
        position: absolute;
        bottom:0;
        z-index:1;
      }
    }
    .genre{
      .genre-swiper{
        padding-left:pxTorem(20px);
      }
      .swiper-slide{
        width:auto;
        height:auto;
        overflow: hidden;
        position: relative;
        border-radius: pxTorem(20px);
        img{
          width:pxTorem(440px);
          height:pxTorem(241px);
        }
      }
    }
    .albums{
      padding-bottom: pxTorem(10px);
      border-bottom:1px solid #3b3b3e;
      /*position: relative;*/
      /*&:after{*/
        /*position: absolute;*/
        /*width:100%;*/
        /*left:0;*/
        /*bottom:0;*/
        /*height:1px;*/
        /*overflow: hidden;*/
        /*content: '';*/
        /*background: #3b3b3e;*/
      /*}*/

      .albums-swiper{
        padding-left:pxTorem(20px);
      }
      .swiper-slide{
        width:auto;
        height:auto;
        overflow: hidden;
        border-radius: pxTorem(20px);
        img{
          width:pxTorem(280px);
          height:pxTorem(280px);
        }
      }
    }
  }

</style>
