import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GettingStartedView from '../views/GettingStartedView.vue'
import BlogIndexView from '../views/BlogIndexView.vue'
import BlogArticleView from '../views/BlogArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/getting-started', name: 'getting-started', component: GettingStartedView },
    { path: '/blog', name: 'blog', component: BlogIndexView },
    { path: '/blog/:slug', name: 'blog-article', component: BlogArticleView, props: true },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
