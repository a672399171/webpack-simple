import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from 'containers/Full'

// Views
import Dashboard from 'views/Dashboard'
import NotFoundComponent from 'views/Page404'

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
