<template>
  <div class="app">
    <form>
      <ul class="flex-outer">
        <li>
          <label for="portal-number">PortalNumber</label>
          <input type="text" id="portal-name" placeholder="(format: c##)">
        </li>
        <li>
          <label for="portal-type" id="portal-type">CP or EP </label>
          <input type="radio" name="portal-type" value ="CP" checked> CP <br>
          <input type="radio" name="portal-type" value ="EP" checked> EP <br>
        </li>
        <li>
          <input type="submit" value="Submit">
        </li>
      </ul>
    </form>
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

  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  
  /* display: flex; */
  /* flex-direction: column; */
}

.flex-outer li,
.flex-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.flex-outer,
.flex-inner {
  list-style-type: none;
  padding: 0;
}

.flex-outer {
  max-width: 800px;
  margin: 0 auto;
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
  text-align: left;
}

.rightSide {
  width: 50%; float:right
}

footer {
  background: #ccc;
  padding: 20px;
}
</style>