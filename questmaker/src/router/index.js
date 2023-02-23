import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubQuest from '../views/SubQuest.vue'

const routes = [
  {
    path: '/',
    redirect: '/simple_sub_quests_maker'
  },
  {
    path: '/simple_sub_quests_maker',
    name: 'home',
    component: HomeView
  },
  {
    path: '/simple_sub_quests_maker/subquest/:id',
    props: true,
    name: 'subquest',
    component: SubQuest
  },
  {
    path: '/simple_sub_quests_maker/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
