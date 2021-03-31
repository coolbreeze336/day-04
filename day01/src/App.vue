<template>
  <div id="app">
    <transition name="Transitions">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0%;
  padding: 0%;
}
.Transitions-leave-active,
.Transitions-leave-active  {
  height: 100vh;
  transition: all 0.8s linear;
  transform: rotate(180deg);
}
</style>