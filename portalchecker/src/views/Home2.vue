<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Portal/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portal from '@/components/PortalSelector2.vue'

export default {
  name: 'home',
  components: {
    Portal
  }
}
</script>
