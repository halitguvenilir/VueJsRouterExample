<template>
    <div class="user">
        <p>Name: {{ user.name }}</p>
        <p>E-Mail: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p>Username: {{ user.username }}</p>
        <p>Website: {{ user.website }}</p>
    </div>
</template>

<script>
    export default {
        name: 'User',
        props: {
            user: {
                type: Object, required: true
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