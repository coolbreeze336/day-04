<template>
  <div>
    <div class="input">
      <input type="text" v-model="tool" placeholder="请输入书名" @input="input" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tool: "",
    };
  },
  methods: {
    input(){
      let tool = this.tool;
      this.$store.commit("tool",tool);
    },
  },
};
</script>
<style lang="scss">
.input {
  width: 100%;
  height: 6vh;
  input {
    width: 100%;
    height: 100%;
    background-color: rgb(182, 182, 182);
    outline: none;
    border: none;
    box-sizing: border-box;
    padding-left: 2%;
  }
}
</style>