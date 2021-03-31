<template>
  <div>
    <button @click="onClick" v-focus>自定义指令</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "",
    };
  },
  methods: {},
  directives: {
    focus: {
      // 指令的定义
      inserted(el) {
        el.onClick()
      },
    },
  },
};
</script>