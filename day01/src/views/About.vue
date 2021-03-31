<template>
  <div class="about">
    <top />
    <input3 />
    <cart />
  </div>
</template>
<script>
import top from "../components/top.vue";
import cart from "../components/cart.vue";
import input3 from "../components/input3.vue";
export default {
  components: { input3, cart, top},
  data() {
    return {};
  },
  methods: {},
};
</script>