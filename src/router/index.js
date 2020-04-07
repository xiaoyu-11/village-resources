/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import classs from '@/views/classs'
import find from '@/views/find'
import my from '@/views/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
   {
     path: '/classs',
     name: 'classs',
     component: classs
   },
	 {
	   path: '/find',
	   name: 'find',
	   component: find
	 },
	 {
	   path: '/my',
	   name: 'my',
	   component: my,
	   }
  ]
})
