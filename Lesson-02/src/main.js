import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'

const router = new VueRouter({
    routes: [
        { path: '/', component: Home }
    ],
    mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
