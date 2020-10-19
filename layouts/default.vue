<template>
  <div>
    <div>My blog navigation bar here</div>
    <test-me />
    <nuxt />
  </div>
</template>
<script>
export default {
  asyncData({ $config: { baseURL } }) {
    console.log("server", $config);
  },
  create() {
  },
  mounted() {},
};
</script>

