<template>
  <div class="home">
    <top />
    <div class="login">
      <input1 />
      <input2 />
      <button
        v-show="!this.$store.state.iSshow"
        disabled
      >
        请输入正确
      </button>
      <button
        @click="btn"
        v-show="this.$store.state.iSshow"
      >
        登录
      </button>
    </div>
  </div>
</template>
<script>
import top from "../components/top.vue";
import input1 from "../components/input1.vue";
import Input2 from "../components/input2.vue";
export default {
  components: { input1, Input2, top},
  data() {
    return {};
  },
  methods: {
    btn() {
      if (this.$store.state.text != "" && this.$store.state.pass != "") {
        let obj = {
          text: this.$store.state.text,
          pass: this.$store.state.pass,
        };
        localStorage.setItem("token", JSON.stringify(obj));
        this.$router.push({ path: "/about" });
      }
      this.$store.commit('splice',);
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 80%;
  height: 30vh;
  background-color: rgb(184, 165, 165);
  margin: 10vh auto;
  display: flex;
  flex-wrap: wrap;
  button {
    width: 70%;
    height: 4vh;
    margin: 0 auto;
  }
}
</style>