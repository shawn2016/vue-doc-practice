<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <h2>{{desc}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{textA}}</h2>
    <h2>{{textPlus}}</h2>
    <div>
      <input type="text" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "HelloWorld2",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      demo:'22222222'
    };
  },
  mounted() {
    let i = 1;
    setInterval(() => {
      // this.$store.commit("updateCount", {
      //   num: i++
      // });
      this.updateCount({
        num: i++
      });
    }, 1000);
    // this.$store.dispatch("updateAsyncCount", {
    //   desc: "你好,这是新的我",
    //   time: 5000
    // });
    this.updateAsyncCount({
      desc: "你好,这是新的我",
      time: 5000
    });
    this.updateAtext({
      num: 1
    });
    this["b/updateBtext"]({
      num: 1
    });
    this.add({
      num: 11
    });
    this["b/add"]({
      num: 11
    });
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState({
      count: state => state.count,
      desc: state => state.desc,
      textA: state => state.a.text
    }),
    // fullName() {
    //   return this.$store.getters.fullName;
    // }
    ...mapGetters(["fullName", "textPlus"])
    // textA() {
    //   return this.$store.state.a.text;
    // }
  },
  methods: {
    ...mapActions(["updateAsyncCount", "add", "b/add", "b/add2"]),
    ...mapMutations(["updateCount", "updateAtext", "b/updateBtext"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
