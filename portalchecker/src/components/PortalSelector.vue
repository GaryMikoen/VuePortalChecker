<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1> Choose your portal</h1>
          <hr>
          <div class="form-group">
            <label for="portal">Portal </label>
            <input 
                  type="text"
                  id="portal"
                  class="form-control"
                  placeholder="(format: c##)"
                  v-model="portal">
          </div>
        </div>
      </div>
      <div class= row>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="portaltype">
            <input 
                  type="radio"
                  name="portaltype"
                  value="CP"
                  v-model="portaltype"> CP
            <input
                  type="radio"
                  name="portaltype"
                  value="EP"
                  v-model="portaltype"> EP
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button 
              class="btn btn-primary"> Submit!
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'PortalOverview',
    data() {
      return {
        portal: " ",
        portaltype: " "
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>