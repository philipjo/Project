import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'
// import store from '@/store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  
  routes: [
    {
      path: "/Login",
      name: "Login",
      component: () => import('@/views/pages/Login'),
      meta: { requiresAuth: false }

    },
    {
      path: '/',
      redirect: '/dashboard',
      component: () => import('@/layouts/Layout'),
      meta: { requiresAuth: true },
      children: [
        {
          name: 'Dashboard',
          path: 'Dashboard',
          component: () => import('@/views/dashboard/BasicDashboard'),
        },
         {
          name: 'Orders',
          path: 'Orders',
          component: () => import('@/views/Orders/Orders'),
        },
 ]
    },

  ],
})

router.beforeEach((to, from, next) => {
 
  // if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
  //   next({
  //     name: 'Login'
  //   })
  //   return
  // }
  // if (to.path === '/Login' && store.state.isLoggedIn) {
  //   next({
  //     path: 'Dashboard'
  //   })
  //   return
  // }
  next()
})

export default router