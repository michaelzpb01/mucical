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
          <router-link to="genres">See All</router-link>
        </p>
      </titleBar>

      <div class="genre-swiper">
        <swiper :options="genreSwiperOption">
          <!-- slides -->
          <swiper-slide>
            <div class="genre-list">
              <img src="./img/1.jpg">
              <span>Browse by Genre</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="genre-list">
              <img src="./img/2.jpg">
              <span>Browse by Genre</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="genre-list">
              <img src="./img/3.jpg">
              <span>Browse by Genre</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="genre-list">
              <img src="./img/1.jpg">
              <span>Browse by Genre</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="genre-list">
              <img src="./img/2.jpg">
              <span>Browse by Genre</span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="genre-list">
              <img src="./img/3.jpg">
              <span>Browse by Genre</span>
            </div>
          </swiper-slide>

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
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/1.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/2.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/3.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/1.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/2.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/3.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>

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

      <musicList :listData="musicList"></musicList>
    </div>

    <!--Popular Artists-->
    <div class="Popular">
      <titleBar>
        <p class="left_minu_slot" slot="left_minu">Popular Artists</p>
        <p class="right_minu_slot" slot="right_minu">
          <router-link to="#">See All</router-link>
        </p>
      </titleBar>

      <div class="albums-swiper">
        <swiper :options="albumsSwiperOption">
          <!-- slides -->
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/1.jpg"></div>
              <div class="albums-text">
                <h3>Popular Artists</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/2.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/3.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/1.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/2.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="albums-list">
              <div class="albums-img"><img src="./img/3.jpg"></div>
              <div class="albums-text">
                <h3>long Time</h3>
                <p>Blondie</p>
              </div>
            </div>
          </swiper-slide>

        </swiper>
      </div>
    </div>

    <!--footer log-->
    <div class="footer-log">
      <div class="log-minu"><i class="iconfont icon-facebookicon"></i></div>
      <div class="log-minu"><i class="iconfont icon-twitter"></i></div>
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
          loop : true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
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
              imgurl:'../../pages/Musical/img/list1.jpg',
              name:'Long Time',
              user:'Blondie',
              lv:1,
              time:'20:00',
              money:'$10.21'
            },
            {
              imgurl:'../../pages/Musical/img/list2.jpg',
              name:'The Ghost Tower',
              user:'Fabrizio Leo',
              lv:2,
              time:'20:00',
              money:'$10.22'
            },
            {
              imgurl:'../../pages/Musical/img/list3.jpg',
              name:'Naked Poetry',
              user:'Flower Blase',
              lv:3,
              time:'20:00',
              money:'$10.23'
            },
            {
              imgurl:'../../pages/Musical/img/list4.jpg',
              name:'Twilight',
              user:'Denai Moore',
              lv:4,
              time:'20:00',
              money:'$10.24'
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
    padding-bottom:pxTorem(40px);

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
        .genre-list{
          position: relative;
          span{
            font-size:pxTorem(40px);
            line-height:pxTorem(44px);
            color: #fff;
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
          }
        }
        img{
          width:pxTorem(440px);
          height:pxTorem(241px);
        }
      }
    }

    .albums,.Popular{
      padding-bottom: pxTorem(10px);
      border-bottom:1px solid #3b3b3e;

      .albums-swiper{
        padding-left:pxTorem(20px);
      }
      .swiper-slide{
        width:auto;
        height:auto;
        overflow: hidden;
        border-radius: pxTorem(20px);
        .albums-list{
          width:pxTorem(280px);
          position: relative;
          img{
            width:100%;
            height:pxTorem(280px);
          }
          .albums-text{
            *{
              width:100%;
              font-size:pxTorem(34px);
              color: #fff;
              line-height:pxTorem(44px);
            }
            p{
              font-size:pxTorem(26px);
              line-height:pxTorem(36px);
              color: #8f8e94;
            }

          }
        }

      }
    }

    .Popular{
      .swiper-slide{
        .albums-list{
          width:pxTorem(240px);
          img{
            width:100%;
            height:pxTorem(240px);
          }
        }
      }
    }

    .footer-log{
      font-size:0;
      text-align: center;
      margin-top:pxTorem(20px);
      .log-minu{
        font-size:18px;
        display: inline-block;
        height:pxTorem(86px);
        width:pxTorem(330px);
        color: #fff;
        line-height:pxTorem(86px);
        border:1px solid #8f8e94;
        border-radius: pxTorem(10px);
        &:first-child{
          margin-right:pxTorem(40px);
        }
      }
    }
  }

</style>
