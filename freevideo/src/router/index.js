import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login/login'
import index from '@/components/index/index'
import topbar from '@/common/topbar'
import VueRouter from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: '首页',
      component: login
    },
    {
      path: '',
      name: '头部',
      component: topbar
    },
    {
      path: '/index',
      name: '主页',
      component: index
    },
  ]
});

var routerList = [];

var router = new VueRouter({})

router.beforeEach((to,from,next)=>{

})
