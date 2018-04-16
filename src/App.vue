<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">首页</router-link>
    <router-link to="/HelloWorld2">首页2</router-link>
    <router-link to="/nextTick">nextTick</router-link>
    
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
