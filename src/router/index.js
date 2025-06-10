import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuth } from '@/composables/useAuth'

const { getSession } = useAuth()

// Check if the user is authenticated before each route

const isAuth = async (to, from, next) => {
  const session = await getSession()
  if (!session) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const isLoginAuth = async (to, from, next) => {
  const session = await getSession()
  if (session) {
    next({ name: 'mybalance' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      beforeEnter: isLoginAuth,
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue'),
      beforeEnter: isLoginAuth,
    },
    {
      path: '/createProfile',
      name: 'createProfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/createProfileView.vue'),
    },
    {
      path: '/mybalance',
      name: 'mybalance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyBalanceView.vue'),
      meta: { showMobileNavbar: true },
      beforeEnter: isAuth,
    },
    {
      path: '/transactions',
      name: 'transactions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TransactionsView.vue'),
      meta: { showMobileNavbar: true },
      beforeEnter: isAuth,
    },
    {
      path: '/ucard',
      name: 'ucard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UCardView.vue'),
      meta: { showMobileNavbar: true },
      beforeEnter: isAuth,
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),
      meta: { showMobileNavbar: true },
      beforeEnter: isAuth,
    },
    {
      path: '/recharge',
      name: 'recharge',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RechargeBalance.vue'),
      meta: { showMobileNavbar: true },
      beforeEnter: isAuth,
    },
    {
      path: '/scanQR',
      name: 'scanQR',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ScanQRView.vue'),
      meta: { showMobileNavbar: true },
      beforeEnter: isAuth,
    },
  ],
})

export default router
