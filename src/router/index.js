import { createRouter , createWebHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'

  const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'HomeVue', component: HelloWorld},

    ],
  })

export default router