<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <h2>{{desc}}</h2>
    <h2>{{fullName}}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
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
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState(["count", "desc"]),
    // fullName() {
    //   return this.$store.getters.fullName;
    // }
    ...mapGetters(["fullName"])
  },
  methods: {
    ...mapActions(["updateAsyncCount"]),
    ...mapMutations(["updateCount"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
