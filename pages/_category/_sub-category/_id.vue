<template>
  <div>
    <h2>Sub-Category : ID</h2>
    <p>ID : {{id}}</p>
  </div>
</template> <script>
export default {
  asyncData({ params }) {
    console.log(params);
    return { id: params.id };
  }
};
</script>