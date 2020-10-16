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
  mounted() {
    window.test = {}
    test.depth = {}
    test.depth.inner = function (param) {
      console.log('inner called', param)
    }
    this.$interfaceApp.set()
    const infParam = {namespace:'test.depth.inner', data:{}}
    this.$interfaceApp.call(infParam)
  },
};
</script>

