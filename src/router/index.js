import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:"Main(主頁)",
        content:{
          keywords:"主頁關鍵字",
          description:"主頁網頁描述"
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta:{
        title:"Branch(分頁)",
        content:{
          keywords:"分頁關鍵字",
          description:"分頁網頁描述"
        }
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})
export default router
