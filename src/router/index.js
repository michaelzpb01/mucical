import Vue from 'vue';
import Router from 'vue-router';

const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);
const Welcome = resolve => require(['@/pages/welcome/welcome'], resolve);
const SingIn = resolve => require(['@/pages/sing/sing_in'], resolve);
const SingUp = resolve => require(['@/pages/sing/sing_up'], resolve);
const canNotLogIn = resolve => require(['@/pages/sing/canNotLogIn'], resolve);
const logIn = resolve => require(['@/pages/sing/logIn'], resolve);
const genres = resolve => require(['@/pages/genres/genres'], resolve);


// index page
const Musical = resolve => require(['@/pages/Musical/Musical'], resolve);
Vue.use(Router);


var routerRes  = [
  {path: '/', name: 'Welcome', component: Welcome},
  {path: '/SingIn', name: 'SingIn', component: SingIn},
  {path: '/SingUp', name: 'SingUp', component: SingUp},
  {path: '/canNotLogIn', name: 'canNotLogIn', component: canNotLogIn},
  {path: '/logIn', name: 'logIn', component: logIn},
  {path: '/Musical', name: 'Musical', component: Musical},
  {path: '/genres', name: 'genres', component: genres}
];

const routers = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routerRes
});

export default routers;


