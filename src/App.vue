<template>
  <div id="app">
    <header>
      <h1>Vue Notification Bell</h1>
    </header>
    <div class="controls">
      <div class="input-container">
        <label for="size">Size</label>
        <input
          type="range"
          min="30"
          max="500"
          v-model.number="size"
          id="size"
          class="slider"
        >
      </div>

      <div class="input-container">
        <input
          type="checkbox"
          v-model="customFontSize"
          id="customFontSize"
        >
        <label for="customFontSize">Custom Font Size</label>
      </div>
      <div
        class="input-container"
        v-if="customFontSize"
      >
        <label for="fontSize">Font Size</label>
        <input
          type="text"
          placeholder="e.g: 20px"
          v-model="fontSize"
          id="fontSize"
        >
      </div>

      <div class="input-container">
        <input
          type="checkbox"
          v-model="customCounterPadding"
          id="customCounterPadding"
        >
        <label for="customCounterPadding">Custom Counter Padding</label>
      </div>
      <div
        class="input-container"
        v-if="customCounterPadding"
      >
        <label for="padding">Padding</label>
        <input
          type="text"
          placeholder="e.g: 20px"
          v-model="counterPadding"
          id="padding"
        >
      </div>

      <div class="input-container">
        <input
          type="checkbox"
          v-model="customLocation"
          id="customLocation"
        >
        <label for="customLocation">Custom Location</label>
      </div>
      <div
        class="input-container"
        v-if="customLocation"
      >
        <label for="top">Top</label>
        <input
          type="text"
          placeholder="e.g: 20px"
          v-model="top"
          id="top"
        >
      </div>
      <div
        class="input-container"
        v-if="customLocation"
      >
        <label for="left">Left</label>
        <input
          type="text"
          placeholder="e.g: 20px"
          v-model="left"
          id="left"
        >
      </div>
      <div
        class="input-container"
        v-if="!customLocation"
      >
        <label for="counterLocation">Counter Location</label>
        <select
          name="counterLocation"
          id="counterLocation"
          v-model="counterLocation"
        >
          <option value="upperRight">Upper Right</option>
          <option value="right">Right</option>
          <option value="lowerRight">Lower Right</option>
          <option value="bottom">Bottom</option>
          <option value="lowerLeft">Lower Left</option>
          <option value="left">Left</option>
          <option value="upperLeft">Upper Left</option>
          <option value="top">Top</option>
          <option value="center">Center</option>
        </select>
      </div>
      <div class="input-container">
        <label for="notificationCount">Notification Count</label>
        <input
          type="number"
          v-model.number="count"
          min="1"
          id="notificationCount"
        >
      </div>
      <div class="input-container">
        <label for="upperLimit">Notifications Upper Limit</label>
        <input
          type="number"
          min="1"
          id="upperLimit"
          v-model.number="upperLimit"
        >
      </div>
      <div class="input-container">
        <label for="prefixPlus">Prefix Plus?</label>
        <input
          type="checkbox"
          id="prefixPlus"
          v-model="prefixPlus"
        >
      </div>
      <div class="input-container">
        <label for="counterStyle">Counter Style</label>
        <select
          name="counterStyle"
          id="counterStyle"
          v-model="counterStyle"
        >
          <option value="roundRectangle">Round Rectangle</option>
          <option value="round">Round</option>
          <option value="rectangle">Rectangle</option>
        </select>
      </div>
      <div class="input-container">
        <label for="counterBackgroundColor">Counter Background Color</label>
        <input
          type="color"
          id="counterBackgroundColor"
          v-model="counterBackgroundColor"
        >
      </div>
      <div class="input-container">
        <label for="counterTextColor">Counter Text Color</label>
        <input
          type="color"
          id="counterTextColor"
          v-model="counterTextColor"
        >
      </div>
      <div class="input-container">
        <label for="iconColor">Icon Color</label>
        <input
          type="color"
          id="iconColor"
          v-model="iconColor"
        >
      </div>
      <div class="input-container">
        <input
          type="checkbox"
          v-model="ding"
          id="ding"
        >
        <label for="ding">Play ding on new notification</label>
      </div>
      <div class="input-container">
        <input
          type="checkbox"
          v-model="animated"
          id="animated"
        >
        <label for="animated">Animated</label>
      </div>
      <div class="docs">
        <a
          href="https://github.com/Carrene/vue-notification-bell"
          target="_blank"
        >Docs</a>
      </div>
    </div>
    <notification-bell
      class="bell"
      :size="size"
      :count="count"
      :ding="ding"
      :upperLimit="upperLimit"
      :counter-location="counterLocation"
      :counterStyle="counterStyle"
      :counterBackgroundColor="counterBackgroundColor"
      :counterTextColor="counterTextColor"
      :iconColor="iconColor"
      :animated="animated"
      :top="top"
      :left="left"
      :prefixPlus="prefixPlus"
      :fontSize="fontSize"
      :counterPadding="counterPadding"
    />
    <source-code
      :size="size"
      :count="count"
      :ding="ding"
      :upperLimit="upperLimit"
      :counter-location="counterLocation"
      :counterStyle="counterStyle"
      :counterBackgroundColor="counterBackgroundColor"
      :counterTextColor="counterTextColor"
      :iconColor="iconColor"
      :animated="animated"
      :top="top"
      :left="left"
      :prefixPlus="prefixPlus"
      :fontSize="fontSize"
      :counterPadding="counterPadding"
    />
    <footer>
      <p>
        Created by <a
          href="https://twitter.com/maryayi"
          target="_blank"
        >@maryayi</a>,
        <a
          href="https://github.com/mrastiak"
          target="_blank"
        >@mrastiak</a> and
        <a
          href="https://github.com/eghrarish"
          target="_blank"
        >@eghrarish</a>
      </p>
    </footer>
  </div>
</template>

<script>
import NotificationBell from './components/NotificationBell.vue'
import SourceCode from './components/SourceCode'

export default {
  name: 'app',
  data () {
    return {
      size: 100,
      customLocation: false,
      counterLocation: 'upperRight',
      top: null,
      left: null,
      count: 2,
      ding: false,
      upperLimit: 50,
      counterStyle: 'roundRectangle',
      counterBackgroundColor: '#FF0000',
      counterTextColor: '#FFFFFF',
      iconColor: '#000000',
      animated: false,
      prefixPlus: false,
      customFontSize: false,
      fontSize: null,
      customCounterPadding: false,
      counterPadding: null
    }
  },
  watch: {
    'customLocation' (newValue) {
      if (!newValue) {
        this.top = this.left = null
      }
    },
    'customFontSize' (newValue) {
      if (!newValue) {
        this.fontSize = null
      }
    },
    'customCounterPadding' (newValue) {
      if (!newValue) {
        this.counterPadding = null
      }
    }
  },
  components: {
    SourceCode,
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
      grid-template-columns: 1fr 2fr 1fr
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
        grid-row-gap: 20px
        .input-container
          display: grid
          grid-template-columns: auto 1fr
          grid-column-gap: 10px
          align-items: center
          label
            font-size: 14px
        .docs
          text-align: center
          align-self: end
          a
            color: black
            font-size: 20px
      .bell
        padding: 20px
        justify-self: center
        align-self: center
</style>
