import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import KmAMillas from '../components/KmAMillas.vue'
import CelsiusAFahrenheit from '../components/CelsiusAFahrenheit.vue'
import KgALibras from '../components/KgALibras.vue'
import LitrosAGalones from '../components/LitrosAGalones.vue'
import MetrosAPies from '../components/MetrosAPies.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/km-a-millas', name: 'KmAMillas', component: KmAMillas },
  { path: '/celsius-a-fahrenheit', name: 'CelsiusAFahrenheit', component: CelsiusAFahrenheit },
  { path: '/kg-a-libras', name: 'KgALibras', component: KgALibras },
  { path: '/litros-a-galones', name: 'LitrosAGalones', component: LitrosAGalones },
  { path: '/metros-a-pies', name: 'MetrosAPies', component: MetrosAPies },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
