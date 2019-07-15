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
                  placeholder="(format: C##)"
                  v-model="portal.name">
            <p v-if="portal.nameFormat" class="error">PortalName must be in Format C##</p>
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
              class="btn btn-primary" 
              @click="changePortal()">
              Submit!
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
          name: null,
          type: "CP",
          nameFormat: false
        }
      }
    },
    methods:{
      changePortal( ) {
        const portalName = this.portal.name; 
        const portalType = this.portal.type;
        console.log('test');
        var pattern = /^[C][0-9]{2}$/
        if((this.portal.name).toUpperCase().match(pattern)) {
          this.portal.nameFormat = false;
          this.$store.dispatch("changePortal", {portalName: portalName, portalType: portalType});
        } else{
          this.portal.nameFormat = true;
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>