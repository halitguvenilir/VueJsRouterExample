<template>
    <div>
        <a @click="backUser">Go to back user list</a>
        <h3>{{ userData.name }}</h3>
        <ul>
            <li>{{ userData.email }}</li>
            <li>{{ userData.phone }}</li>
            <li>{{ userData.website }}</li>
        </ul>
        <router-link :to="postsLink">Posts</router-link>
        <router-link :to="nextUser">Next User</router-link>
    </div>
</template>

<script>
    export default {
        name: 'UserProfile',
        data() {
            return {
                userData: {}
            }
        },
        methods: {
            fetchData() {
                fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
                .then((res) => { return res.json() })
                .then((data) => { this.userData = data; })
            },
            backUser() {
                this.$router.push('/');
            }
        },
        watch: {
            '$route': 'fetchData'
        },
        computed: {
            postsLink() {
                return `/user/${this.$route.params.id}/posts`;
            },
            nextUser() {
                return `/user/${parseInt(this.$route.params.id, 10) + 1}`;
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style>
    a {
        cursor: pointer;
    }
</style>