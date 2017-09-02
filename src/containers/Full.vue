<template>
    <div class="app">
        <AppHeader/>
        <div class="app-body">
            <Sidebar :navItems="nav"/>
            <main class="main">
                <breadcrumb :list="list"/>
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
	import nav from 'src/nav'

	import AppHeader from 'components/Header'
	import Sidebar from 'components/Sidebar'
	import Breadcrumb from 'components/Breadcrumb'

	export default {
		name: 'full',
		components: {
			AppHeader,
			Sidebar,
			Breadcrumb
		},
		data () {
			return {
				nav: nav.items
			}
		},
		computed: {
			name () {
				return this.$route.name
			},

			list () {
				return this.$route.matched
			}
		}
	}
</script>
