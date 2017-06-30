import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router(
    {
  routes: [
    {
      path: '/login',
      name: 'Hello',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },  {
      path: '',
      name: 'redirect',
      redirect: '/login'
    }
  ]
})
