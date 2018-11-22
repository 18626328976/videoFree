<template>
  <div class="app">
    <topbar></topbar>
    <div class="main">
        <video class="video" src="http://www.w3school.com.cn/tiy/loadtext.asp?f=html5_video" controls="controls">您的浏览器不支持 video 标签,请使用版本更高的浏览器 -- 推荐Chrome</video>
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

      }
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
      .video{
          width: 100%;
          height: 60%;
      }
    }
  }

</style>
