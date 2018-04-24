import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  let router = new Router({
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
        component: () => import ('@/views/Home')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import ('@/views/About'),
      },
      {
        path: '/video/live/:roomId/:productId',
        name: 'video-live-one',
        component: () => import('@/views/About'),
        meta: {
          requiresAuth: true
        },
        props: true
      },
      {
        path: '/video',
        component: () => import('@/views/Home'),
        children: [{
            path: 'live',
            name: 'video-live',
            component: () => import('@/views/About'),
            meta: {
              requiresAuth: true
            }
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

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (true) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })
  return router
}
