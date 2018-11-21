<template>
  <div class="app" v-cloak>
    <topbar></topbar>
    <div class="main">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in crumbData" :key="index" @click="turn()">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="videoInfo">
        <div>
          <p>{{title}}</p>
          <img :src="img" alt="">
          <p class="introduce">{{introduce}}</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>
<script>
  import topbar from "@/common/topbar";
  export default {
    components: {
      topbar,
    },
    data() {
      return {
        crumbData: [{
          title: ""
        }],
        img: require("../../assets/img/logo.png"),
        title: "Vue.js",
        introduce: '身为记者的埃迪·布洛克（汤姆·哈迪饰）在调查生命基金会老板卡尔顿·德雷克（里兹·阿迈德饰）的过程中，事业遭受重创，与未婚妻安妮·韦英（米歇尔·威廉姆斯饰）的关系岌岌可危，并意外被外星共生体入侵，历经挣扎对抗，最终成为拥有强大超能力，无人可挡的“毒液” [6-7].',
      };
    },
    methods: {}
  };

</script>
<style lang="less" scoped>
  .app {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;

    .main {
      width: 1200px;
      margin: auto;
      box-sizing: border-box;
      overflow: hidden;

    }
  }

</style>
