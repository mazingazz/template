

const obj = {
  actions: {
    testtest({ commit }) {
      console.log('testtest')
    }
  },
  modules: {
    foo: {
      namespaced: true,
      state: () => ({ foolist: 0 }),
      getters: {
        someOtherGetter: state => { }
      },
      actions: {
        someAction({ dispatch, commit, getters, rootGetters }) {
          console.log('someaction')
        },
      }
    }
  }

}
export default obj