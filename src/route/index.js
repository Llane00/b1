import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Puzzle1 from '../components/Puzzle1.vue'
import Puzzle2 from '../components/Puzzle2.vue'
import Puzzle3 from '../components/Puzzle3.vue'
import Happy from '../components/Happy.vue'

const routes = [
  { path: '/', name: 'welcome', component: Welcome },
  { path: '/puzzle1', name: 'puzzle1', component: Puzzle1 },
  { path: '/puzzle2', name: 'puzzle2', component: Puzzle2 },
  { path: '/puzzle3', name: 'puzzle3', component: Puzzle3 },
  { path: '/happy', name: 'happy', component: Happy },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
