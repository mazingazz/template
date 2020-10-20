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
  asyncData({ query }) {
    console.log('login async', query)
    // fetch(`${baseURL}/test`)
  },
  created() {
  },
  data() {
    return {
      test:'test1234'
    }
  }
}
</script>

