<template>
  <div class="listdt">
    <div class="top">
      <p>
        <b>正在看</b
        ><span
          class="iconfont icon-jiantou9"
          :class="ortate"
          @click="onClick"
        ></span>
      </p>
      <div class="nas" v-show="show">
        <div
          v-for="(item, index) in this.$store.state.listdata"
          :key="index"
          v-show="item.id == 1"
        >
          <p>{{ item.name }}</p>
          <i @click="oncl(index)">已看完</i><b>|</b>
          <s @click="onCe(index)">删除图书</s>
        </div>
      </div>
    </div>
    <div class="top">
      <p>
        <b>已完结</b
        ><span
          class="iconfont icon-jiantou9"
          :class="orter"
          @click="lick"
        ></span>
      </p>
      <div class="nas" v-show="iSshow">
        <div
          v-for="(item, index) in this.$store.state.listdata"
          :key="index"
          v-show="item.id == 2"
        >
          <p>{{ item.name }}</p>
          <i @click="onCt(index)">再看一遍</i><b>|</b>
          <s @click="onCe(index)">删除图书</s>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ortate: "undonerotate",
      orter: "undonerotate",
      num: 0,
      numm: 0,
      show:false,
      iSshow:false,
    };
  },
  methods: {
    onClick() {
      this.num++;
      if (this.num % 2 == 0) {
        this.ortate = "undonerotate";
        this.show = false;
      } else {
        this.ortate = "";
        this.show = true;
      }
    },
    lick() {
      this.numm++;
      if (this.numm % 2 == 0) {
        this.orter = "undonerotate";
        this.iSshow = false;
      } else {
        this.orter = "";
        this.iSshow = true;
      }
    },
    oncl(index) {
      this.$store.commit("oncl", index);
    },
    onCt(index) {
      this.$store.commit("onCt", index);
    },
    onCe(index) {
        this.$store.commit("remove", index);
    },
  },
};
</script>
<style lang="scss">
.listdt {
  margin-top: 5vh;
}
.top {
  width: 100%;
  > p {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 4%;
    background-color: red;
    b {
      font-size: 25px;
      color: white;
    }
    span {
      font-size: 1.5rem;
      color: white;
    }
  }
  .nas {
    width: 100%;
    max-height: 24vh;
    overflow: auto;
    div {
      width: 100%;
      height: 8vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 4%;
      p {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      i {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: red;
      }
      s {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(190, 190, 190);
      }
    }
  }
}
.undonerotate {
  transform: scale(1) rotate(-90deg) skew(0deg);
}
</style>