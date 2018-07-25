<template>
    <div v-cloak>
        <ul>
            <li v-for="user in users">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'cloak',
        data() {
            return {
                users: [ { name: 'Halit' }, { name: 'Merve' } ]
            }
        }
    }
</script>

<style>
    [v-cloak] {
        display: none;
    }
</style>