import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8371c8ee = () => interopDefault(import('../pages/children.vue' /* webpackChunkName: "pages/children" */))
const _5849174c = () => interopDefault(import('../pages/children/index.vue' /* webpackChunkName: "pages/children/index" */))
const _598c7cb4 = () => interopDefault(import('../pages/children/_id.vue' /* webpackChunkName: "pages/children/_id" */))
const _0c40084f = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _09c6a502 = () => interopDefault(import('../pages/sortable.vue' /* webpackChunkName: "pages/sortable" */))
const _7975d484 = () => interopDefault(import('../pages/template.vue' /* webpackChunkName: "pages/template" */))
const _42986538 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5ea75643 = () => interopDefault(import('../pages/_category.vue' /* webpackChunkName: "pages/_category" */))
const _6d4642f4 = () => interopDefault(import('../pages/_category/index.vue' /* webpackChunkName: "pages/_category/index" */))
const _45ad917e = () => interopDefault(import('../pages/_category/_sub-category.vue' /* webpackChunkName: "pages/_category/_sub-category" */))
const _149a8181 = () => interopDefault(import('../pages/_category/_sub-category/index.vue' /* webpackChunkName: "pages/_category/_sub-category/index" */))
const _3c2cf029 = () => interopDefault(import('../pages/_category/_sub-category/_id.vue' /* webpackChunkName: "pages/_category/_sub-category/_id" */))

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
    component: _8371c8ee,
    children: [{
      path: "",
      component: _5849174c,
      name: "children"
    }, {
      path: ":id",
      component: _598c7cb4,
      name: "children-id"
    }]
  }, {
    path: "/login",
    component: _0c40084f,
    name: "login"
  }, {
    path: "/sortable",
    component: _09c6a502,
    name: "sortable"
  }, {
    path: "/template",
    component: _7975d484,
    name: "template"
  }, {
    path: "/",
    component: _42986538,
    name: "index"
  }, {
    path: "/:category",
    component: _5ea75643,
    children: [{
      path: "",
      component: _6d4642f4,
      name: "category"
    }, {
      path: ":sub-category",
      component: _45ad917e,
      children: [{
        path: "",
        component: _149a8181,
        name: "category-sub-category"
      }, {
        path: ":id",
        component: _3c2cf029,
        name: "category-sub-category-id"
      }]
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
