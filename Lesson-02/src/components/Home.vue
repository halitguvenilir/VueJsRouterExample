<template>
    <div>
        <template v-for="user in users">
            <user :user=user></user>
        </template>
    </div>
</template>

<script>
    import User from './User.vue'
    export default {
        name: 'Home',
        data() {
            return {
                users: []
            }
        },
        created() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => { return res.json() })
            .then((users) => { this.users = users; })
        },
        components: {
            User
        }
    }
</script>