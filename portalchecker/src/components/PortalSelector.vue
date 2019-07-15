<template>
  <div class="container"> 
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1> Portal Selector </h1>
          <hr>
<!--          
          <div v-if="portal.errors.length">
              <b>Please correct the following error:</b>
              <b>{{portal.errors}}</b>
          </div>
-->
          <div class="form-group">
            <label for="portal">Portal </label>
            <input 
                  type="text"
                  class="form-control"
                  placeholder="(format: C##)"
                  v-model="portal.name">
            <p v-if="portal.nameSpelling">PortalName must be in Format C##</p>
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
          name: null,
          type: null,
          nameSpelling: false,
          typeChosen: false,
          errors: []
        }
      }
    },
    methods:{
      changePortal(portalName, portalType ) {
        var pattern = /^[C][0-9]{2}[:.,-]?$/
        if(this.portal.name.match(pattern)) {
          this.portal.nameSpelling = false;
          this.$store.dispatch("changePortal", {portalName: portalName, portalType: portalType});
        } else{
          this.portal.nameSpelling = true;
        }
      }
/*      ,
      checkForm() {
        var pattern = /^[C][0-9]{2}[:.,-]?$/
        if(this.portal.name.match(pattern)) {
          this.portal.nameSpelling = false;
        } else{
          this.portal.nameSpelling = true;
        }
*/
/*
        this.portal.errors = [];
        if(!this.portal.name) this.portal.errors.push("Name required.");
        if(!this.portal.type) this.portal.errors.push("Type required.");
*/
      
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>