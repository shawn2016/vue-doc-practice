<template>
  <div id="app">
    <div class="soubox">
      <button class="showsearch" @click="showsou">搜索</button>
      <div class="sou" v-show="showit">
        <input type="text" name="" id="keywords">
        <div class="closesou" @click="hidesou">X</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showit: false,
    }
  },
  methods:{
    showsou(){
      this.showit = true
      
      this.$nextTick(function () {
        // DOM 更新了
        document.getElementById("keywords").focus()
      })
    },
    hidesou(){
      this.showit = false
    }
  }
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
.soubox{position: relative;width:300px;margin:0 auto;}
.sou{position: absolute;left: 0;top:100%;width:100%;}
.closesou{font-size:30px;color:red;cursor: pointer;}
</style>