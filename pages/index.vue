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
import {createNamespacedHelpers} from "vuex";
// export const { mapFields: mapAddressFields } = createHelpers({
//   getterType: 'customer/address/getField',
//   mutationType: 'customer/address/updateField',
// });
const {mapState: msT, mapActions: maT, mapGetters: mgT} = createNamespacedHelpers("todo");
const {mapState: msA, mapActions: maA, mapGetters: mgA} = createNamespacedHelpers("modulea/modules/foo");
export default {
  mounted() {
    
    window.HybridApp = {}
    HybridApp.funcName = function (param) {
      console.log('android funcName called', param)
    }

    window.webkit = {}
    webkit.messageHandlers = {}
    webkit.messageHandlers.funcName = {}
    webkit.messageHandlers.funcName.postMessage = function (param) {
      console.log('ios funcName called', param)
    }
    
    // interface parameter
    const intfObj = {
      fn: 'funcName',
      params: '{"callback": "callbackFunc", "data": {"key": "value"}}'
    }
    this.$interfaceApp.callIF(intfObj)
    console.log('store', this.$store._modulesNamespaceMap)
  },
  beforeMount() {},
  asyncData(context) {
    console.log('context', context.$axios.get, context.$injectway)
  },
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
    ...msT({ acc: state => state.counter, todoList: "list" }),
    // ...mgT([
    //   'doneTodosCount',
    //   'anotherGetter',
    // ]),
    // ...mapState({
    //   a: state => state.some.nested.module.a,
    //   b: state => state.some.nested.module.b
    // }),
  },
  methods: {
    ...maT(["add"]),
    ...maA(['someAction']),
    addTodo() {
      // this.someAction()
      console.log('add', this.$config)
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
