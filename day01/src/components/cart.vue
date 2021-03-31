<template>
  <div>
    <div class="books">
      <div v-for="(item, index) in this.$store.state.list" :key="index">
        <img :src="item.img" />
        <p>{{ item.desc }}</p>
        <span>{{ item.name }}</span>
        <b @click="join(item)">+</b>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {
    this.$axios.get("http://localhost:8080/data.json").then((res) => {
      this.$store.commit("list",res);
    });
  },
  methods: {
    join(em){
      this.$store.commit("app",em);
    },
  },
};
</script>
<style lang="scss">
.books {
  width: 100%;
  height: 84vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  div {
    width: 48%;
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid rgb(177, 177, 177);
    margin-bottom: 1vh;
    img {
      width: 80%;
      height: 55%;
    }
    p {
      width: 100%;
      height: 5vh;
      overflow: hidden;
    //   text-overflow: ellipsis;
    //   white-space: nowrap;
      font-size: 14px;
      color: rgb(219, 218, 218);
    }
    span{
        width: 70%;
        height: 3vh;
        color: red;
        font-size: 19px;
    }
    b{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.1rem;
        height: 2.3vh;
        padding-top: 0.2vh;
        background-color: red;
        color: white;
        border-radius: 50%;
    }
  }
}
</style>