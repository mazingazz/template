import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f280d08 = () => interopDefault(import('..\\pages\\children.vue' /* webpackChunkName: "pages/children" */))
const _513df786 = () => interopDefault(import('..\\pages\\children\\index.vue' /* webpackChunkName: "pages/children/index" */))
const _14d0236e = () => interopDefault(import('..\\pages\\children\\_id.vue' /* webpackChunkName: "pages/children/_id" */))
const _77ea273c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _13eb82f5 = () => interopDefault(import('..\\pages\\sortable.vue' /* webpackChunkName: "pages/sortable" */))
const _f8ca9b12 = () => interopDefault(import('..\\pages\\template.vue' /* webpackChunkName: "pages/template" */))
const _a37af7b6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/children",
    component: _6f280d08,
    children: [{
      path: "",
      component: _513df786,
      name: "children"
    }, {
      path: ":id",
      component: _14d0236e,
      name: "children-id"
    }]
  }, {
    path: "/login",
    component: _77ea273c,
    name: "login"
  }, {
    path: "/sortable",
    component: _13eb82f5,
    name: "sortable"
  }, {
    path: "/template",
    component: _f8ca9b12,
    name: "template"
  }, {
    path: "/",
    component: _a37af7b6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
