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
    @extend .defaultStyle;
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
