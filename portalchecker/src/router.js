import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portal from './views/Portal.vue'
import BasicPages from './views/BasicPages.vue'
import Valuestreams from './views/ValueStreams.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/portal',
      name:'portal',
      component: Portal
    },
    {
      path: '/basicpages',
      name: 'basicpages',
      component: BasicPages
    },
    {
      path: '/valuestreams',
      name: 'valuestreams',
      component: Valuestreams
    }
  ]
})
