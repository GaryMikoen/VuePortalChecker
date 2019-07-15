<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1> Portal Selector </h1>
          <hr>
          <div class="form-group">
            <label for="portal">Portal </label>
            <input 
                  type="text"
                  class="form-control"
                  placeholder="(format: c##)"
                  v-model="portal.name">
          </div>
        </div>
      </div>
      <div class= row>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="portaltype">
            <input 
                  type="radio"
                  value="CP"
                  v-model="portal.type"> CP
            <input
                  type="radio"
                  value="EP"
                  v-model="portal.type"> EP
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button 
              class="btn btn-primary" @click="changePortal(portal.name, portal.type)"> Submit!
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
        portal: {
          name: "",
          type: ""
        }
        
      }
    },
    methods:{
      changePortal(portalName, portalType ) {
          this.$store.dispatch("changePortal", {portalName: portalName, portalType: portalType});
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>