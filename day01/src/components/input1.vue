<template>
  <div class="in1">
    <b>手机号:</b><input type="text" v-model="text" @input="input1" />
    <div class="input1-right">
      <div class="dv1" v-show="show">×</div>
      <div class="dv2" v-show="ishow">√</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      show: false,
      ishow: false,
    };
  },
  mounted() {
    let text = "";
    let trues = false;
    this.$store.commit("tet", text);
    this.$store.commit("iSshow", trues);
  },
  methods: {
    input1() {
      var nass = /^[a-zA-Z]\w{5,17}$/;
      var nas = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
      if (nas.test(this.text)) {
        this.ishow = true;
        this.show = false;
        let text = this.text;
        this.$store.commit("tet", text);
        if (nas.test(this.text) && nass.test(this.$store.state.pass)) {
          let iSshow = true;
          this.$store.commit("iSshow", iSshow);
        } else {
          let iSshow = false;
          this.$store.commit("iSshow", iSshow);
        }
      } else {
        this.show = true;
        this.ishow = false;
        let iSshow = false;
        this.$store.commit("iSshow", iSshow);
      }
    },
  },
};
</script>
<style lang="scss">
.in1 {
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3vh 0px;
  input {
    width: 60%;
    height: 100%;
    border-radius: 5px;
  }
  .input1-right {
    width: 12%;
    display: flex;
    div {
      width: 50%;
      border-radius: 50%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dv1 {
      background-color: red;
    }
    .dv2 {
      background-color: green;
    }
  }
}
</style>