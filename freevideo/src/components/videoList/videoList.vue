<template>
  <div class="app" v-cloak>
    <topbar></topbar>
    <div class="main">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,index) in crumbData" :key="index" :to="{ path: item.path }" >{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="videoInfo">
        <ul class="list">
          <li class="item" v-for="(item,index) in videoList" :key="index" @click="turn(item)">
            <img src="../../assets/img/logo.png" alt="">
            <p v-text="item.title"></p>
          </li>
        </ul>
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
        crumbData: [],
        videoList: [{
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
          {
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
          {
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
          {
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
          {
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
          {
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
          {
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
          {
            img: "../../assets/img/logo.png",
            title: "Vue.js"
          },
        ]
      };
    },
    // 面包屑控制
    beforeRouteEnter(to, from, next) {
      next(vm => {
        // console.log('我是to.meta.routeList  ',to.meta.routeList);
        vm.crumbData = to.meta.routeList;
        // console.log(vm);
      })
    },
    created() {
      
    },
    mounted() {
      
    },
    methods: {
      turn(item) {
        this.$router.push({
          path: '/videoDetailed/videoDetailed',
          query: {
            item: item
          }
        })
      }
    }
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

      .breadcrumb {
        margin: 20px 0;
      }

      .videoInfo {
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;

        .list {
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .item {
            width: 210px;
            height: 240px;
            text-align: center;
            transition: all .3s ease-in 0s;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }

</style>
