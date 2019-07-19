<template>
  <div class="home">
    <Portal/>
    <PortalDisplay/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portal from '@/components/PortalSelector.vue'
import PortalDisplay from '@/components/PortalDisplay.vue'

export default {
  components: {
    Portal,
    PortalDisplay
  }
}
</script>

<style>

</style>

