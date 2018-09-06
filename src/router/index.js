import Vue from 'vue';
import Router from 'vue-router';

const Musical = resolve => require(['@/pages/Musical/Musical'], resolve);
const Welcome = resolve => require(['@/pages/welcome/welcome'], resolve);
const SingIn = resolve => require(['@/pages/sing/sing_in'], resolve);
const SingUp = resolve => require(['@/pages/sing/sing_up'], resolve);
const canNotLogIn = resolve => require(['@/pages/sing/canNotLogIn'], resolve);
const logIn = resolve => require(['@/pages/sing/logIn'], resolve);
const genres = resolve => require(['@/pages/genres/genres'], resolve);
const albums = resolve => require(['@/pages/albums/albums'], resolve);

// index page
Vue.use(Router);


var routerRes  = [
  {path: '/', name: 'Welcome', component: Welcome},
  {path: '/SingIn', name: 'SingIn', component: SingIn},
  {path: '/SingUp', name: 'SingUp', component: SingUp},
  {path: '/canNotLogIn', name: 'canNotLogIn', component: canNotLogIn},
  {path: '/logIn', name: 'logIn', component: logIn},
  {path: '/Musical', name: 'Musical', component: Musical},
  {path: '/genres', name: 'genres', component: genres},
  {path: '/albums', name: 'albums', component: albums}
];

const routers = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routerRes
});

export default routers;
