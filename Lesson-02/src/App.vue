<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2, h3 {
  font-weight: normal;
  color: #c33949;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
  color: #f3c148;
}

a {
  color: #42b983;
}
</style>
