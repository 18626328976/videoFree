<template>

  <div class="app">
    <div class="main">
      <div class="title">
        <p class="logo" v-text="logo"></p>
        <p class="describe" v-text="describe"></p>
      </div>
      <div class="content">
        <el-input v-model="inputValue" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        <ul class="content-categoryList">
          <li class="content-categoryList-item" v-for="item in categoryList" :key="item.index">
            <p v-text="item.title" @click="turn(item)"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      logo: "小Y的电影大世界",
      describe: "本站收录了3024584部各类电影",
      inputValue: "",
      categoryList: [
        {
          title: "战争片",
          active: false,
          index: 0
        },
        {
          title: "爱情片",
          active: false,
          index: 1
        },
        {
          title: "动作片",
          active: false,
          index: 2
        }
      ]
    };
  },
  methods:{
    // 跳转主页 带参数区分影片类型 
    turn(item){
      this.$router.push({
        path:'/index',
        query:{
          id : item.index
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
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .title {
      margin-top: 60px;
      margin-bottom: 100px;
      .logo {
        font-size: 60px;
        color: gold;
      }
      .describe {
        font-size: 30px;
        color: #999;
        margin-top: 20px;
        margin-left: 40px;
      }
    }
  }
  .content {
    .el-input {
      width: 800px;
      margin-left: 40px;
    }
    &-categoryList {
      width: 168px;
      margin-top: 40px;
      &-item {
        height: 50px;
        text-align: center;
        p {
          font-size: 20px;
          color: #666;
          transition: all 0.5s ease-in;
          cursor: pointer;
        }
        p:hover {
          color: goldenrod;
          font-size: 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
