<template>
  <div id="app">
    <div class="wrapper">
      <p>First Content</p>
      <p>Second content</p>
      <p>Third content </p>
      <p>Fourth content </p>
    </div>
    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  display: flex;
  flex-direction: column;
}
.wrapper {
  flex: 1 0 auto;
}
footer {
  background: #ccc;
  padding: 20px;
}
</style>