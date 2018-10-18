<template>
  <div id="app">
    <div class="controls">
      <div class="input-container">
        <label for="size">Size</label>
        <input type="range" min="30" max="500" v-model="size" id="size" class="slider">
        Size = {{ size }}
      </div>
      <div class="input-container">
        <label for="counterLocation">Counter Location</label>
        <select name="counterLocation" id="counterLocation" v-model="counterLocation">
          <option value="upperRight">Upper Right</option>
          <option value="upperLeft">Upper Left</option>
          <option value="lowerRight">Lower Right</option>
          <option value="lowerLeft">Lower Left</option>
          <option value="center">Center</option>
        </select>
      </div>
      <div class="input-container">
        <label for="notificationCount">Notification Count</label>
        <input type="number" v-model="count" min="1" id="notificationCount">
      </div>
      <div class="input-container">
        <label for="upperLimit">Notifications Upper Limit</label>
        <input type="number" min="1" id="upperLimit" v-model="upperLimit">
      </div>
      <div class="input-container">
        <label for="counterStyle">Counter Style</label>
        <select name="counterStyle" id="counterStyle" v-model="counterStyle">
          <option value="roundRectangle">Round Rectangle</option>
          <option value="round">Round</option>
          <option value="rectangle">Rectangle</option>
        </select>
      </div>
      <div class="input-container">
      </div>
    </div>
    <notification-bell class="bell"
                       :size="parseInt(size)"
                       :count="parseInt(count)"
                       :upperLimit="parseInt(upperLimit)"
                       :counter-location="counterLocation"
                       :counterStyle="counterStyle"
                       :counterBackgroundColor="counterBackgroundColor"
                       :counterTextColor="counterTextColor"
                       :iconColor="iconColor"
    />
  </div>
</template>

<script>
import NotificationBell from './components/NotificationBell.vue'

export default {
  name: 'app',
  data () {
    return {
      size: 30,
      counterLocation: 'upperRight',
      count: null,
      upperLimit: 50,
      counterStyle: 'roundRectangle',
      counterBackgroundColor: 'red',
      counterTextColor: 'white',
      iconColor: 'black'
    }
  },
  components: {
    NotificationBell
  }
}
</script>
<style lang="sass">
  *
    margin: 0
    padding: 0
  body, html
    width: 100%
    height: 100%
  body
    display: grid
    #app
      display: grid
      grid-template-columns: 1fr 4fr
      .controls
        padding: 20px
        border-right: 1px solid black
      .bell
        padding: 20px
        justify-self: center
        align-self: center
      .input-container
        display: grid
        grid-row-gap: 10px

</style>
