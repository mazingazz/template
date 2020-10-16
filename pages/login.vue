<template>
  <section class="container">
    <div>
      <h1>login</h1>
    </div>
    <MyAlert :test-prop="test"/>
  </section>
</template>

<script>
export default {
  name: 'test',
  components: {
    MyAlert: () => import('@/components/MyAlert')
  },
  asyncData({ $config: { baseURL } }) {
    // console.log('async', $config)
    fetch(`${baseURL}/test`)
  },
  created() {
    console.log('device', this.$device)
  },
  data() {
    return {
      test:'test1234'
    }
  }
}
</script>

