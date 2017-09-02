<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <div slot="header"></div>
            <ul class="nav">
                <li class="nav-item" v-for="(item, index) in navItems">
                    <template v-if="item.children">
                        <SidebarNavDropdown :name="item.name" :url="item.url" :icon="item.icon">
                            <template v-for="(child, index) in item.children">
                                <div class="nav-item">
                                    <SidebarNavLink :name="child.name" :url="child.url"
                                                    :icon="child.icon" :badge="child.badge"/>
                                </div>
                            </template>
                        </SidebarNavDropdown>
                    </template>
                    <template v-else>
                        <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge"/>
                    </template>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    import SidebarNavDropdown from 'components/SidebarNavDropdown'
    import SidebarNavLink from 'components/SidebarNavLink'

    export default {
        name: 'sidebar',
        props: {
            navItems: {
                type: Array,
                require: true,
                default: []
            }
        },
        components: {
            SidebarNavDropdown,
            SidebarNavLink
        },
        methods: {
            handleClick (e) {
                e.preventDefault();
                e.target.parentElement.classList.toggle('open')
            }
        }
    }
</script>

<style lang="css">
    .nav-link {
        cursor: pointer;
    }
</style>
