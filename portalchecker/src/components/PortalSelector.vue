<template>
  <div class="container">
    <form>
      <div class="row upper">
        <label>
          <div>Select Portal</div>
          <input
            class="portal-number"
            type="text"
            placeholder="(format: C##)"
            v-model="portal.name"
          />
        </label>
        <p v-if="portal.nameFormat" class="error">PortalName must be in Format C##</p>
      </div>

      <div class="row">
        <div class="switch-field">
          <div class="half">
            <input name="portaltype" type="radio" id="CP" value="CP" v-model="portal.type" checked />
            <label for="CP">Customer Portal</label>
          </div>
          <div class="half">
            <input name="portaltype" type="radio" id="EP" value="EP" v-model="portal.type" />
            <label for="EP">Employee Portal</label>
          </div>
        </div>
      </div>

      <div class="row">
        <button class="button" @click="changePortal($event)">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PortalOverview",
  data() {
    return {
      portal: {
        name: null,
        type: "CP",
        nameFormat: false
      }
    };
  },
  methods: {
    changePortal(event) {
      event.preventDefault();
      var pattern = /^[C][0-9]{2}$/;
      if (this.portal.name.toUpperCase().match(pattern)) {
        this.portal.nameFormat = false;
        this.$store.dispatch("changePortal", {
          portalName: this.portal.name,
          portalType: this.portal.type
        });
      } else {
        this.portal.nameFormat = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 50px 0px 0px 0px;
}

form {
  height: 100%;
}

.row {
  margin: 40px 0px 0px 0px;
  font-size: 2em;
}

.row.upper {
  margin: 0px 0px 0px 0px;
}

.portal-number {
  padding: 20px 10px;
  margin: 20px 0px 0px 0px;
  border: 1px solid #ccc;
  width: 25%;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.8em;
}

.error {
  color: #ff0000;
}

.switch-field {
  margin: 0 auto;
  width: 25%;
  background-origin: border-box;
}

.half {
  display: inline-block;
  width: 50%;
}

.switch-field input {
  position: absolute;
  height: 1px;
  width: 1px;
}

.switch-field label {
  display: block;
  padding: 20px 20px 20px 20px;
  background-color: #edf7f7;
  color: #00716b;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.5em;
  text-align: center;
  transition: all 0.1s ease-in-out;
}

.switch-field input:not(:checked) + label:hover {
  cursor: pointer;
  color: #00857A;
  border-color: #00857A;
}

.switch-field input:checked + label {
  background-color: #00716b;
  color: #edf7f7;
  box-shadow: none;
}

.button {
  padding: 20px 10px;
  margin: 0px auto;
  border: none;
  width: 25%;
  background-color: #ffd200;
  text-align: center;
  font-size: 0.8em;
}

.button:hover {
  cursor: pointer;
  background-color:#ffe263
}

</style>