import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Bug from '@/components/Bug'
import UseCase from '@/components/UseCase'
import Plan from '@/components/Plan'
import Chart from '@/components/Chart'
import App from '@/App'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path:'app',
      name:'App',
      component:App
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path:'/Plan/select',
      name:'Plan_select_usecase',
      component:()=>import('../components/Plan_SelectUseCase.vue')
    },
    {
      path:'/Bug',
      name:'Bug',
      component:Bug
    },
    {
      path:'/UseCase',
      name:'UseCase',
      component:UseCase
    },
    {
      path:'/Plan',
      name:'Plan',
      component:Plan
    },
    {
      path:'/Chart',
      name:'Chart',
      component:Chart
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
   
  ],
  mode: "history"
})