<template>
  <div class="app">
    <topbar></topbar>
    <div class="main">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in crumbData" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="videoArea">
        <video class="video" src="https://www.runoob.com/try/demo_source/movie.mp4" controls="controls" controlslist="nodownload">您的浏览器不支持video标签,请使用版本更高的浏览器
          -- 推荐Chrome</video>
      </div>
    </div>
  </div>
</template>
<script>
  import topbar from "@/common/topbar"
  export default {
    components: {
      topbar,
    },
    data() {
      return {
        crumbData: [{
          title: ""
        }],
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.crumbData = to.meta.routeList;
      })
    },
    methods: {

    }
  }

</script>
<style lang="less" scoped>
  .app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;

    .main {
      width: 1200px;
      margin: auto;
      box-sizing: border-box;
      overflow: hidden;
      margin-top: 20px;

      .videoArea {
        margin-top: 20px;
        box-sizing: border-box;
        overflow: hidden;

        .video {
          width: 100%;
          height: 600px;

        }
      }

    }


  }

</style>
