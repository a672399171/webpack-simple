<template>
    <div class="app">
        <AppHeader/>
        <div class="app-body">
            <Sidebar/>
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
	import AppHeader from 'components/Header.vue'
	import Sidebar from 'components/Sidebar.vue'
	import AppFooter from 'components/Footer.vue'
	import Breadcrumb from 'components/Breadcrumb.vue'

    import '../styles/css/font-awesome.css'
	import '../styles/css/simple-line-icons.css'
	import '../styles/css/style.css'

	export default {
		name: 'full',
		components: {
			AppHeader,
			Sidebar,
			AppFooter,
			Breadcrumb
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
