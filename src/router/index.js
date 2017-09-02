import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from 'containers/Full'

// Views
import Dashboard from 'views/Dashboard'
import NotFoundComponent from 'views/Page404'

// Views - Components
import Buttons from 'views/components/Buttons'

import App from 'src/App'

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
                },
                {
                    path: 'components',
                    name: 'Components',
                    redirect: '/components/buttons',
                    component: App,
                    children: [
                        {
                            path: 'buttons',
                            name: 'Buttons',
                            component: Buttons
                        }
                    ]
                }
            ]
        },
        {
            path: '*',
            component: NotFoundComponent
        }
    ]
})
