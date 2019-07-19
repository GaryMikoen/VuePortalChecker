<template>
  <div class="app">
    <div class="wrapper">
        <p>First Content</p>
        <p>Second Content</p>
    </div>
    <div class="wrapper">
        <p>First Content</p>
        <p>Second Content</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PortalOverview'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* display: flex; */
  /* flex-direction: column; */
}

@media screen and (max-width: 500px){
    .wrapper {
        flex-direction: column;
    }
}

.wrapper {
  flex: 1 0 auto;
  display: flex;
  justify-content: space-around;
}

p {
    display: block;
}


footer {
  background: #ccc;
  padding: 20px;
}
</style>