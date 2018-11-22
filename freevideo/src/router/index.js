import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index/index'
import videoList from '@/components/videoList/videoList'
import videoDetailed from '@/components/videoDetailed/videoDetailed'
import videoPlay from '@/components/videoPlay/videoPlay'

import VueRouter from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: '首页',
      component: index
    },{
      path: '/videoList/videoList',
      name: '主页',
      component: videoList
    },{
      path: '/videoDetailed/videoDetailed',
      name: '详情页',
      component: videoDetailed
    },,{
      path: '/videoPlay/videoPlay',
      name: '影片播放',
      component: videoPlay
    },
  ]
});

var routerList = [];

var router = new VueRouter({})

router.beforeEach((to,from,next)=>{

})
