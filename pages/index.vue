<template>
  <section class="container">
    <div id="app"><div class="test"></div></div>
    <div>donetodo {{doneTodos}}</div>
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
    <nuxt-link to="/login">login</nuxt-link>
    <nuxt-link to="/children">children</nuxt-link>
    <nuxt-link :to="`/${dynaurl}/sub-category/20`">dyna</nuxt-link>
  </section>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: msT, mapActions: maT, mapGetters: mgT } = createNamespacedHelpers("todo");
export default {
  mounted() {
    window.HybridApp = {}
    HybridApp.inner = function (param) {
      console.log('android inner called', param)
    }

    window.webkit = {}
    webkit.messageHandlers = {}
    webkit.messageHandlers.inner = {}
    webkit.messageHandlers.inner.postMessage = function (param) {
      console.log('ios inner called', param)
    }
    
    const infParam = {
      fn: 'inner',
      params: '{"callback": "callbackFunc", "data": {}}'
    }
    this.$interfaceApp.call(infParam)
  },
  beforeMount() {},
  data: function() {
    return {
      dynaurl: 10, 
      flag: true,
      greeting: "hellos",
      todoTitle: "" };
  },
  // this.$store.state.todo.list; }
  computed: {
    ...mgT(['doneTodos']),
    ...msT({ acc: "counter", todoList: "list" })
    // ...mgT([
    //   'doneTodosCount',
    //   'anotherGetter',
    // ])
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
