import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index/index'
import videoList from '@/components/videoList/videoList'
import videoDetailed from '@/components/videoDetailed/videoDetailed'
import videoPlay from '@/components/videoPlay/videoPlay'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: '首页',
    component: index
  }, {
    path: '/videoList/videoList',
    name: '主页',
    component: videoList
  }, {
    path: '/videoDetailed/videoDetailed',
    name: '详情页',
    component: videoDetailed
  }, , {
    path: '/videoPlay/videoPlay',
    name: '影片播放',
    component: videoPlay
  }, ]
});

//储存路由信息
var routeList = [];

// 每次跳转路由前都会调用
router.beforeEach((to, from, next) => {

  let w = [];
  // 把路由的信息存在里面
  for (let i = 0; i < routeList.length; i++) {
    w.push(routeList[i].name);
    console.log(w);
  }
  // 如果有同样的就删除后面所有的
  for (let i = 0; i < w.length; i++) {
    if (w[i] == to.name) {
      routeList.splice(i, routeList.length - i + 1);
    }
  }
  // 储存路由
  let crumb = {};
  crumb.name = to.name;
  crumb.path = to.path;
  routeList.push(crumb);
  // console.log('routeList+++',routeList);

  // 把值赋给to.meta.routeList
  to.meta.routeList = routeList
  // next是必须的!!!
  next();
})
export default router;
