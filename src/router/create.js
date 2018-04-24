import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [{
        path: '/',
        name: 'index',
        redirect: 'home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login')
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import('@/views/Logout')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/video/live/:roomId/:productId',
        name: 'video-live-one',
        component: () => import('@/views/About'),
        props: true
      },
      {
        path: '/video',
        component: () => import('@/views/Home'),
        children: [{
            path: 'live',
            name: 'video-live',
            component: () => import('@/views/About'),
          },
          {
            path: '',
            name: 'video',
            redirect: 'live'
          }
        ]
      },
      // 404 Not found
      {
        path: '*',
        name: '404',
        component: () => import('@/views/404')
      }
    ]
  })
}
