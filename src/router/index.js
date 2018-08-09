import Vue from 'vue';
import Router from 'vue-router';
import vueResource from 'vue-resource';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);
const header_v = resolve => require(['@/components/header/header'], resolve);
const Welcome = resolve => require(['@/pages/welcome/welcome'], resolve);
const SingIn = resolve => require(['@/pages/sing/sing_in'], resolve);
const SingUp = resolve => require(['@/pages/sing/sing_up'], resolve);
const canNotLogIn = resolve => require(['@/pages/sing/canNotLogIn'], resolve);
const logIn = resolve => require(['@/pages/sing/logIn'], resolve);


// index page
const Musical = resolve => require(['@/pages/Musical/Musical'], resolve);



Vue.use(Router);
Vue.use(vueResource);
Vue.use(Mint);

import { Swipe, SwipeItem,CellSwipe ,Cell, Checklist } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);

Vue.component('header_v', header_v);

var routerRes  = [
  {path: '/', name: 'Welcome', component: Welcome},
  {path: '/hello', name: 'HelloWorld', component: HelloWorld},
  {path: '/SingIn', name: 'SingIn', component: SingIn},
  {path: '/SingUp', name: 'SingUp', component: SingUp},
  {path: '/canNotLogIn', name: 'canNotLogIn', component: canNotLogIn},
  {path: '/logIn', name: 'logIn', component: logIn},
  {path: '/Musical', name: 'Musical', component: Musical}
];

const routers = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routerRes
});

export default routers;


