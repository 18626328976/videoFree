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
          <div class="videoInfo-content-left">
            <p class="videoInfo-content-name">{{videoData.title}}</p>
            <img class="videoInfo-content-img" :src="videoData.img" alt="">
          </div>
          <div class="videoInfo-content-right">
            <div>
              <span>导演:</span>
              <a href="javascript:;">鲁本·弗雷斯彻</a>
            </div>
            <div>
              <span>编剧:</span>
              <a href="javascript:;">杰夫·皮克纳 /</a>
              <a href="javascript:;">斯科特·罗森伯格 /</a>
              <a href="javascript:;">凯莉·马塞尔 /</a>
              <a href="javascript:;">托德·麦克法兰 /</a>
              <a href="javascript:;">戴维·麦克法兰</a>
            </div>
            <div>
              <span>主演:</span>
              <a href="javascript:;">汤姆·哈迪 /</a>
              <a href="javascript:;">米歇尔·威廉姆斯 /</a>
              <a href="javascript:;">里兹·阿迈德 /</a>
              <a href="javascript:;">斯科特·黑兹 /</a>
              <a href="javascript:;">瑞德·斯科特 /</a>
              <a href="javascript:;">更多...</a>
            </div>
            <div>
              <span>类型:</span>
              <a href="javascript:;">动作 /</a>
              <a href="javascript:;">科幻 /</a>
              <a href="javascript:;">惊悚</a>
            </div>
            <div>
              <span>官方网站:</span>
              <a href="javascript:;">www.venom.movie/site/</a>
            </div>
            <div>
              <span>制片国家/地区:</span>
              <span>美国 / 中国大陆</span>
            </div>
            <div>
              <span>语言:</span>
              <span>英语 / 汉语普通话</span>
            </div>
            <div>
              <span>上映日期:</span>
              <span>2018-11-09(中国大陆) / 2018-10-05(美国)</span>
            </div>
            <div>
              <span>片长:</span>
              <span>
                112分钟 / 107分钟(中国大陆)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="影片介绍" name="first">{{videoData.introduce}}</el-tab-pane>
          <el-tab-pane label="在线观看" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="迅雷下载" name="third">角色管理</el-tab-pane>
        </el-tabs>
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
      }
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
            width: 50%;
            box-sizing: border-box;

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

          &-right {}

          &-introduce {
            font-size: 20px;
            color: #666;
            margin-top: 20px;
          }
        }
      }
    }
  }

</style>
