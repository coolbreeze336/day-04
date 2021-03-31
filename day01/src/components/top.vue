<template>
  <div>
    <div class="app_top">
      <div @click="back">{{ this.$route.meta.title3 }}</div>
      <b> {{ this.$route.meta.title }}</b>
      <div @click="onClick" ref="mysd">{{ this.$route.meta.title2 }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back(){
      window.history.back();
    },
    onClick(){
      if(this.$refs.mysd.innerText.includes('我的')){
        this.$router.push({path:"/listdata"});
      }
    },
  },
};
</script>
<style lang="scss">
.app_top {
  width: 100%;
  height: 10vh;
  background-color: rgb(226, 204, 132);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2%;
  b {
    color: white;
    font-size: 25px;
  }
  div {
    width: 20%;
    color: rgb(134, 132, 132);
  }
}
</style>