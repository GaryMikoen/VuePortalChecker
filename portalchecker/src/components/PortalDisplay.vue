<template>
    <div>
        <h2>Chosen portal Name and Type</h2>
        <h2>{{getName}}</h2>
        <h2>{{getType}}</h2>
    </div>
</template>

<script>
export default {
  name: "PortalDisplay",
  computed: {
    getName() {
      return this.$store.getters.getPortalName;
    },
    getType(){
        return this.$store.getters.getPortalType;
    }
  }
};
</script>