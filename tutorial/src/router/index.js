import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Sample from '@/components/Sample'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    }
  ]
})
