<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/portal">Portal Overview</router-link> |
      <router-link to="/basicpages">Basic Pages Overview</router-link> |
      <router-link to="/Valuestreams">Valuestream Overview</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #f9f9f9;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#nav {
  padding: 30px;
  background-color:#00716B;
}

#nav a {
  font-weight: bold;
  color: #EDF7F7;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
