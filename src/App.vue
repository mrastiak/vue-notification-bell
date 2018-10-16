<template>
  <div id="app">
    <notification-bell class="bell"></notification-bell>
  </div>
</template>

<script>
import NotificationBell from './components/NotificationBell.vue'

export default {
  name: 'app',
  components: {
    NotificationBell
  }
}
</script>
<style lang="sass" scoped>
  .bell
    margin: 100px auto
    width: fit-content
</style>
