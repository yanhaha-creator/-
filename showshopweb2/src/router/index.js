import Vue from 'vue'
import Router from 'vue-router'
import V from '@/components/vueecharts'
import Z from '@/components/zzt'
Vue.use(Router)

export default new Router({
mode: 'history',
  routes: [
    {
      path: '/',
      name: 'V',
      component: V
    },
     {
          path: '/zzt',
          name: 'Z',
          component: Z
        }
  ]
})
