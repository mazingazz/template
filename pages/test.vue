<template>
  <section class="container">
    <b-tree-view :data="treeData"></b-tree-view>
  </section>
</template>
<script>

export default {
  mounted() {
    
  },
  beforeMount() {},
  asyncData(context) {
  },
  data: function() {
    return {
      treeData: [{"id": 2, "name": "Venus" , "children": [{"id": 3, "name": "Neptune"}, {"id": 4, "name": "Stratus"} ] } ]
    };
  },
  computed: {
   
  },
  methods: {
    
  }
};
</script>
