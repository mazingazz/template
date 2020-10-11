import Vue from 'Vue'

export default ({ app }, inject) => {
  app.store.state.test = 1
  let component = null
  class inst {
    constructor() { }
  }
  inst.prototype.show = function (msg) {
    component = new Vue({
      render(h) {
        return h('div', msg)
      }
    });

    const app = document.querySelector(".test");

    // Mounting on a empty div created programatically
    component.$mount(document.createElement("div"));
    app.appendChild(component.$el);
  }
  inst.prototype.hide = function () {
    var app = document.querySelector('.test')
    component.$destroy();
    app.removeChild(component.$el);
  }

  var test = new inst()
  // const inst = {
  //   show: function(msg) {
  //     var vm = new Vue({
  //       render (h) {
  //         return h('div', msg)
  //       }
  //     })
  //     vm.$mount('.test');
  //   }
  // }

  inject('injectway', test)
}