const moduleA = {
  namespaced:true,
  state: () => ({ counter: 0, list: [] }),
  // export const mutations = {
  //   increment(state) {
  //     state.counter++
  //   }
  // }
  mutations: {
    add: (state, text) => {
      state.counter++;
      var item = { id: state.counter, title: text, done: false }; state.list.push(item);
    },
    remove: (state, todo) => { var list = state.list; list.splice(list.indexOf(todo), 1) },
    toggle: (state, todo) => { todo.done = !todo.done }
  },
  actions: {
    async add ({ state, commit, rootState }, data) {
      // console.log('state', data, state, rootState)

      let param = {
        headers: {'Authorization': 'JWT '},
        message: 'no',
        params: {
          page: '2'
        }
      }
      try {
        const res = await this.$axios.get('/incidents', param)
        commit('add', data)
      } catch(error) {
        console.log('error::::', error)
      }
      // console.log('res', res)
      // const data = await app.$axios.$get('/posts.json')
      
    }
  },
  getters: {
    doneTodos: state => {
      return state.list
    }
  }
}

export default moduleA