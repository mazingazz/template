<template>
  <div class="player">
    <h2>{{ children }}</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('mounted', this.$route.params)
  },
  validate({params}) { return /^\d+$/.test(params.id); 
  },
  // asyncData({params, query}) { console.log( query ); return { id: params.id , hello: query.hello }; },
  asyncData ({ params, env, error }) {
    const user = {id:0, name:'00'}

    return user
  },
  data() {
    return {
      children: this.$route.params.id
    }
  },
  head () {
    return {
      title: this.name
    }
  }
}
</script>

<style scoped>
.player {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
