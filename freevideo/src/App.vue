<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
img{
  vertical-align: middle;
}
a{
  text-decoration: none;
}
</style>
