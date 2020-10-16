export default ({ store, redirect }) => {

  store.app.router.beforeEach((to, from, next) => {
    // console.log('route store to from next', to, from, next)
    if (store.state.todo.counter === 0) next();
    else redirect("/");
  });
}
