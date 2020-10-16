<template>
  <div>
    <div>My blog navigation bar here</div>
    <test-me/>
    <nuxt/>
  </div>
</template>
<script>
export default {
  asyncData ({ $config: { baseURL } }) {
    console.log('server', process, $config)
  },
  mounted() {
    this.$config.test = {}
    this.$config.test.dev = '1111'
    console.log(this.$config)
  }
}
</script>

