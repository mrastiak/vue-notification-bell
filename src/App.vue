<template>
  <div id="app">
    <header>
      <h1>Vue Notification Bell</h1>
    </header>
    <div class="controls">
      <div class="input-container">
        <label for="size">Size</label>
        <input type="range" min="30" max="500" v-model="size" id="size" class="slider">
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
        <label for="counterBackgroundColor">Counter Background Color</label>
        <input type="color" id="counterBackgroundColor" v-model="counterBackgroundColor">
      </div>
      <div class="input-container">
        <label for="counterTextColor">Counter Text Color</label>
        <input type="color" id="counterTextColor" v-model="counterTextColor">
      </div>
      <div class="input-container">
        <label for="iconColor">Icon Color</label>
        <input type="color" id="iconColor" v-model="iconColor">
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
    <footer>
      <p>Created by <a href="https://twitter.com/maryayi" target="_blank">@maryayi</a> and <a href="https://github.com/mrastiak" target="_blank">@mrastiak</a></p>
    </footer>
  </div>
</template>

<script>
import NotificationBell from './components/NotificationBell.vue'

export default {
  name: 'app',
  data () {
    return {
      size: 100,
      counterLocation: 'upperRight',
      count: 2,
      upperLimit: 50,
      counterStyle: 'roundRectangle',
      counterBackgroundColor: '#FF0000',
      counterTextColor: '#FFFFFF',
      iconColor: '#000000'
    }
  },
  components: {
    NotificationBell
  }
}
</script>
<style lang="sass">
  *, button, input
    margin: 0
    padding: 0
    font-family: sans-serif
  body, html
    width: 100%
    height: 100%
  body
    display: grid
    #app
      display: grid
      grid-template-columns: 1fr 3.5fr
      grid-template-rows: auto 1fr auto
      header, footer
        grid-column: 1 / -1
        text-align: center
        padding: 10px 0
      header
        border-bottom: 1px solid black
      footer
        border-top: 1px solid black
      .controls
        padding: 20px
        border-right: 1px solid black
        display: grid
        align-content: start
        grid-row-gap: 20px
      .bell
        padding: 20px
        justify-self: center
        align-self: center
      .input-container
        display: grid
        grid-template-columns: auto 1fr
        grid-column-gap: 10px
        align-items: center
        label
          font-size: 14px


</style>
