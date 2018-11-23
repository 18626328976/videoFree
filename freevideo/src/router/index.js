import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index/index'
import videoList from '@/components/videoList/videoList'
import videoDetailed from '@/components/videoDetailed/videoDetailed'
import videoPlay from '@/components/videoPlay/videoPlay'

Vue.use(Router)

var router =  new Router({
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

var routeList = [];

router.beforeEach((to,from,next)=>{
  let w =  "";
  let index = null;
  for(let i=0;i<routeList.length;i++){
    // console.log(routeList[i].name);
    w += routeList[i].name;
    index = i;
    console.log(w);
  }
  // console.log('我是router里的to.name   ',to.name);
  if(w.indexOf(to.name) !== -1 ){
    routeList.splice(index+1,routeList.length - index - 1);
    console.log('routeList---',routeList);
  }else{
    let crumb = {};
    crumb.name = to.name;
    crumb.path = to.path;
    routeList.push(crumb);
    // console.log('routeList+++',routeList);
  }
  to.meta.routeList = routeList
  next();
})
export default router;