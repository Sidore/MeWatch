import Vue from "vue/dist/vue.min"
import App from './src/components/App/App'

import Links from './src/components/Links/Links'
import Staff from './src/components/Staff/Staff'
import AchievementCalendar from './src/components/AchievementCalendar/AchievementCalendar'
import Dashboard from "./src/components/Dashboard/Dashboard"

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: "/", component : Dashboard , name : "Главная" },
  { path: '/staff', component: Staff, name : "Дневник вещей" },
  { path: '/calendar', component: AchievementCalendar, name : "Календарь достижений" }, 
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
})