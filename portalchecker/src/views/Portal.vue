<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PortalOverview/>
  </div>
</template>

<script>
// @ is an alias to /src
import PortalOverview from '@/components/PortalOverview.vue'

export default {
  name: 'portal',
  components: {
    PortalOverview
  }
}
</script>
