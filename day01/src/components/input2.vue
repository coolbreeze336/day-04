<template>
  <div class="in1">
    <b>密码:</b><input type="text" v-model="pass" @input="input1" />
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
      pass: "",
      show: false,
      ishow: false,
    };
  },
  mounted() {
    let pass = "";
    let trues = false;
    this.$store.commit("pas", pass);
    this.$store.commit("iSshow", trues);
  },
  methods: {
    input1() {
      var nas = /^[a-zA-Z]\w{5,17}$/;
      var nass = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
      if (nas.test(this.pass)) {
        this.ishow = true;
        this.show = false;
        let pass = this.pass;
        this.$store.commit("pas", pass);
        if (nass.test(this.$store.state.text) && nas.test(this.pass)) {
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