<template>
    <router-link :to="url" class="nav-link">
        <i :class="icon"></i> {{name}}
        <span class="badge badge-info" v-if="badge">{{badge}}</span>
    </router-link>
</template>

<script>
    export default {
        name: 'sidebar-nav-link',
        props: {
            name: {
                type: String,
                default: ''
            },
            url: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            badge: {
                default: ''
            }
        }
    }
</script>
