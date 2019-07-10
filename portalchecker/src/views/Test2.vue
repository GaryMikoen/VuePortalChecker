<template>
  <ul class="flex-container">
    <li >1</li>
    <li >2</li>
    <li >3</li>
    <li >4</li>
    <li >5</li>
    <li >6</li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: DodgerBlue; 
  }

  .flex-container > div {
    background-color: #f1f1f1;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
  }
</style>
