// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vueResource from 'vue-resource';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';

const header_v = resolve => require(['@/components/header/header'], resolve);
const titleBar = resolve => require(['@/components/common/titleBar'], resolve);
const musicList = resolve => require(['@/components/common/musicList'], resolve);

// common js file
import base from '@/assets/js/base.js';
import '@/assets/js/rem.750.100.js';
// view style
// import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'iview/dist/styles/iview.css';
import 'swiper/dist/css/swiper.css';
// view in
// import {Alert} from 'iview';
import {Swipe, SwipeItem, CellSwipe, Cell, Checklist, Popup,Toast } from 'mint-ui';

// import iView from 'iview';
// Vue.use(iView);

// sing up
// Vue.use(Mint);
Vue.use(vueResource);
Vue.use(VueAwesomeSwiper);

// sing up view component
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(Popup.name, Popup);
Vue.component('header_v', header_v);
Vue.component('titleBar', titleBar);
Vue.component('musicList', musicList);

Vue.prototype._ = base;
Vue.prototype.Toast = Toast;

Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
