<template>
  <div>alert {{testProp}}</div>
</template>
<script>
export default {
  props: {
    testProp: {
      type:String,
      default: 'abcd'
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }    
}
</script>