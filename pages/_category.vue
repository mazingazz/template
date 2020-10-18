<template>
  <div>
    <h1>Category</h1>
    <p>Category: {{category}}</p>
    <nuxt-child />
  </div>
</template> <script>
export default {
  asyncData({ params }) {
    return { category: params.category };
  }
};
</script>