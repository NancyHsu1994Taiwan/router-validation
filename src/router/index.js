import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/frontLayout',
      name: 'frontPage',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: 'indexPage',
          name: 'indexPage',
          component: () => import('../views/IndexPage.vue')
        },
        {
          path: 'productsView',
          name: 'productsView',
          component: () => import('../views/productsView.vue'),
          children: [
            {
              path: 'productView',
              name: 'productView',
              component: () => import('../views/productView.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/dashBoard',
      name: 'dashBoard',
      component: () => import('../views/DashBoard.vue'),
      children: [
        {
          path: 'productsTable',
          name: 'productsTable',
          component: () => import('../views/productsTable.vue')
        },
        {
          path: 'UsersTable',
          name: 'UsersTable',
          component: () => import('../views/UsersTable.vue')
        }
      ]
    }
  ]
})

export default router
