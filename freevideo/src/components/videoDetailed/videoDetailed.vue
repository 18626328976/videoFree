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
        <div class="videoInfo-content">
          <p class="videoInfo-content-name">{{videoData.title}}</p>
          <div class="videoInfo-content-left">
            <img class="videoInfo-content-img" :src="videoData.img" alt="">
          </div>
          <div class="videoInfo-content-right">
            <castlist></castlist>
          </div>
        </div>
      </div>
      <div class="tab-bar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="影片介绍" name="first">{{videoData.introduce}}</el-tab-pane>
          <el-tab-pane label="在线观看" name="second"><a href="javascript:;" @click="toVideo()">源地址1</a></el-tab-pane>
          <el-tab-pane label="迅雷下载" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
  import topbar from "@/common/topbar";
  import castlist from "@/common/castlist";
  export default {
    components: {
      topbar,
      castlist,
    },
    data() {
      return {
        videoData: {
          img: require("../../assets/img/logo.png"),
          title: "Vue.js",
          introduce: '身为记者的埃迪·布洛克（汤姆·哈迪饰）在调查生命基金会老板卡尔顿·德雷克（里兹·阿迈德饰）的过程中，事业遭受重创，与未婚妻安妮·韦英（米歇尔·威廉姆斯饰）的关系岌岌可危，并意外被外星共生体入侵，历经挣扎对抗，最终成为拥有强大超能力，无人可挡的“毒液”.',
        },
        activeName: 'first',
        crumbData: [{
          title: ""
        }],
      };
    },
    created() {
      console.log(this.$route.query.item);
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      toVideo(){
        this.$router.push({
          name:'影片播放',
          params:{

          }
        })
      },
    }
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
      .breadcrumb {
        margin: 20px 0;
      }
      .videoInfo {
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        &-content {
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          &-left {
            float: left;
            box-sizing: border-box;
            margin-right: 40px;
            &-name {
              font-size: 28px;
              color: #999;
              text-shadow: 2px 1px 1px #666;
            }
            &-img {
              margin-top: 20px;
              max-width: 240px;
              max-height: 300px;
              width: 100%;
            }
          }
          &-right {
            float: left;
            box-sizing: border-box;
            overflow: hidden;
          }
          &-introduce {
            font-size: 18px;
            color: #666;
            margin-top: 20px;
          }
        }
      }
      .tab-bar{
        margin-top: 40px;
        box-sizing: border-box;
        overflow: hidden;
      }
    }
  }

</style>
