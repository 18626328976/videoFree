<template>
  <div class="app">
    <topbar></topbar>
    <div class="main">
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in crumbData" :key="index" @click="turn()">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="videoInfo" v-for="(item,index) in videoList" :key="index">
        <img src="../../assets/img/logo.png" alt="">
        <p v-text="item.title"></p>
      </div>
    </div>
  </div>
</template>
<script>
  import topbar from "@/common/topbar";
  export default {
    components: {
      topbar
    },
    data() {
      return {
        crumbData:[{
          title:'',
          
        }],
        videoList: [{
          img: "../../assets/img/logo.png",
          title: "Vue.js"
        }]
      };
    },
    created() {},
    methods: {}
  };

</script>
<style lang="less" scoped>
  .app {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .main {
      width: 1200px;
      margin: 0 auto;
      box-sizing: border-box;
      overflow: hidden;

      .videoInfo {
        width: 210px;
        height: 240px;
        text-align: center;
      }
    }
  }

</style>
