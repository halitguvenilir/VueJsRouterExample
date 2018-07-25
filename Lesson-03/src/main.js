import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import Cloak from './components/Cloak.vue'

const router = new VueRouter({
    routes: [
        { path: '/cloak', component: Cloak },
    ],
    mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
