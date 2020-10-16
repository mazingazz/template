import Vue from 'vue'
import TestMe from '@/components/TestMe.vue'

const components = { TestMe }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
