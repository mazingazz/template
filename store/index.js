const common = {
  namespaced:true,
  state: () => ({ token: '' }),
  mutations: {
    addToken: (state, data) => {
      state.token = data
    }
  },
  actions: {
    async addToken ({ state, commit, rootState }, data) {
      console.log('state', data, state, rootState)
      commit('addToken', data)
    }
  },
  getters: {
  }
}

export default common