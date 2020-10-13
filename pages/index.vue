<template>
  <section class="container">
    <div id="app"><div class="test"></div></div>
    
    <ul>
      <li v-for="item in todoList" v-bind:key="item.id">
        <input type="checkbox" :checked="item.done" @change="toggle(item)" />
        <span :class="{done: item.done}">{{item.title}}</span>
        <button @click="remove(item)">지우기</button>
      </li>
    </ul>
    <p>
      <input type="text" placeholder="할 일을 적으셈" v-model="todoTitle" @keyup.enter="addTodo" />
      <button @click="addTodo">입력</button>
    </p>
    <p>
      <button @click="pluginTest">plugin test</button>
    </p>
    <nuxt-link to="/login"
      >About (internal link that belongs to the Nuxt App)</nuxt-link
    >
  </section>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: msT, mapActions: maT } = createNamespacedHelpers("todo");

export default {
  mounted() {
    // this.greeting = this.$bold("1111");
  },
  beforeMount() {},
  data: function() {
    return { 
      flag: true,
      greeting: "hellos",
      todoTitle: "" };
  },
  // this.$store.state.todo.list; }
  computed: {
    ...msT({ acc: "counter", todoList: "list" })
  },
  methods: {
    ...maT(["add"]),
    addTodo() {
      this.add(this.todoTitle);
      this.todoTitle = "";
    },
    pluginTest() {
      this.flag = !this.flag
      this.$injectway.show("1111", this.flag);
    }
  }
};
</script>
