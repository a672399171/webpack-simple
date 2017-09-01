import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from 'containers/Full.vue'

// Views
import Dashboard from 'views/Dashboard.vue'
import NotFoundComponent from 'views/Page404.vue'

Vue.use(Router);

export default new Router({
	mode: 'hash', // todo
	linkActiveClass: 'open active',
	routes: [
		{
			path: '/',
			redirect: '/dashboard',
			name: 'Home',
			component: Full,
			children: [
				{
					path: 'dashboard',
					name: 'Dashboard',
					component: Dashboard
				}
			]
		},
		{
			path: '*',
			component: NotFoundComponent
		}
	]
})
