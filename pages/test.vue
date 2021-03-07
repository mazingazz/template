<template>
  <section class="container">
    <b-tree-view
    :data="treeData"
    :contextMenu="false"
    :nodesDraggable="false"
   :showIcons="false"
   :renameNodeOnDblClick="false"
   :contextMenuItems="[]"
   @nodeSelect="nodeSelect">
   </b-tree-view>
  </section>
</template>
<script>

export default {
  mounted() {
    
  },
  beforeMount() {},
  asyncData(context) {
  },
  props:{
  },
  data: function() {
    return {
      treeData: [{"id": 2, "name": "Venus" , "children": [{"id": 3, "name": "Neptune"}, {"id": 4, "name": "Stratus"} ] } ]
    };
  },
  computed: {
   
  },
  methods: {
    nodeSelect() {

    }
  }
};
</script>
