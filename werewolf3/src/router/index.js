import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'

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
      path: '/home',
      name: 'home',
      component: Home
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
