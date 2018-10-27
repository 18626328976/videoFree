<template>
  <div class="app">
    <div class="content">
      <img class="logo" src="../assets/img/logo.png" alt="">
      <ul class="menuList">
        <li class="menuList-item" v-for="item in menuList" :key="item.index">
          <p v-text="item.title" @click="turn(item)"></p>
        </li>
      </ul>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "动作片",
          active: false,
          index: 0
        },
        {
          title: "爱情片",
          active: false,
          index: 1
        },
        {
          title: "战争片",
          active: false,
          index: 2
        }
      ],
      search: ""
    };
  },
  methods: {
    turn(item) {
      this.$router.push({
        path: "/index",
        query: {
          id: item.index
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.app {
  width: 100%;
  height: 60px;
  background-color: #4fa5fe;

  .content {
    width: 1200px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    .logo {
      max-height: 60px;
      float: left;
    }

    .menuList {
      margin-left: 40px;
      display: flex;
      float: left;
      &-item {
        width: 80px;
        line-height: 60px;
        p {
          font-size: 20px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .el-input {
      width: 160px;
      float: right;
    }
  }
}
</style>
