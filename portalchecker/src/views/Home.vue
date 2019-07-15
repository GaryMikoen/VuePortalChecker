<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Portal/>
    <PortalDisplay/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portal from '@/components/PortalSelector.vue'
import PortalDisplay from '@/components/PortalDisplay.vue'

export default {
  name: 'home',
  components: {
    Portal,
    PortalDisplay
  }
}
</script>
