<template>
    <div class="user">
        <router-link :to="userLink">
            <p>Name: {{ user.name }}</p>
            <p>E-Mail: {{ user.email }}</p>
            <p>Phone: {{ user.phone }}</p>
            <p>Username: {{ user.username }}</p>
            <p>Website: {{ user.website }}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'User',
        props: {
            user: {
                type: Object, required: true
            }
        },
        computed: {
            userLink() {
                return `/user/${this.user.id}`
            }
        }
    }
</script>

<style>
    .user {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #42b983;
    }

    .user p {
        color: #333d57;
    }
</style>