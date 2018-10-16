<template>
  <div id="notification-bell">
    <div class="notification"
         :style="notificationStyle"
    >
      <img :src="resolvedIcon"
           class="notification-icon"
           :style="notificationIconStyle"
      />
      <div class="notification-counter"
           :style="notificationCounterStyle"
           v-if="count > 0"
      >
        {{ this.decoratedCounter }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotificationBell',
  methods: {

  },
  computed: {
    notificationCounterPosition () {
      switch (this.counterLocation) {
        case 'upperRight':
          return {
            fontSize: `${this.size * 0.3}px`,
            bottom: `calc(100% - ${this.size * 0.4}px)`,
            left: `calc(100% - ${this.size * 0.5}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'lowerRight':
          return {
            fontSize: `${this.size * 0.3}px`,
            top: `calc(100% - ${this.size * 0.5}px)`,
            left: `calc(100% - ${this.size * 0.5}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'upperLeft':
          return {
            fontSize: `${this.size * 0.3}px`,
            bottom: `calc(100% - ${this.size * 0.4}px)`,
            right: `calc(100% - ${this.size * 0.38}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'lowerLeft':
          return {
            fontSize: `${this.size * 0.3}px`,
            top: `calc(100% - ${this.size * 0.5}px)`,
            right: `calc(100% - ${this.size * 0.38}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'center':
          return {
            fontSize: `${this.size * 0.3}px`,
            bottom: `30%`,
            left: `20%`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        default:
          return {
            fontSize: `${this.size * 0.3}px`,
            bottom: `calc(100% - ${this.size * 0.4}px)`,
            left: `calc(100% - ${this.size * 0.5}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
      }
    },
    notificationStyle () {
      return {
        width: `${this.size}px`
      }
    },
    notificationIconStyle () {
      return {
        height: `${this.size}px`
      }
    },
    notificationCounterStyle () {
      return Object.assign(
        {},
        this.notificationCounterPosition,
        this.notificationCounterShape,
        this.notificationCounterColor
      )
    },
    notificationCounterShape () {
      switch (this.counterStyle) {
        case 'roundRectangle':
          return {
            borderRadius: `${this.size / 10}px`
          }
        case 'rectangle':
          return {
            borderRadius: '0'
          }
        case 'round':
          return {
            borderRadius: '100%',
            padding: `${this.size / 10}px`
          }
        default:
          return {
            borderRadius: `${this.size / 10}px`
          }
      }
    },
    notificationCounterColor () {
      return {
        backgroundColor: this.counterBackgroundColor,
        color: this.counterTextColor
      }
    },
    decoratedCounter () {
      if (this.count <= this.upperLimit) {
        return this.count
      } else {
        return `+${this.upperLimit}`
      }
    },
    resolvedIcon () {
      if (this.icon) {
        if (this.count > 0) {
          return this.icon
        } else if (this.disabledIcon) {
          return this.disabledIcon
        }
        return this.icon
      } else if (this.mode === 'light') {
        return require('@/assets/notification.svg')
      } else {
        return require('@/assets/notification-dark.svg')
      }
    }
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    upperLimit: {
      type: Number,
      default: 50
    },
    size: {
      type: Number,
      default: 30
    },
    counterLocation: {
      type: String,
      default: 'upperRight' // Can be: 'upperRight', 'lowerRight', 'upperLeft', 'lowerLeft', 'center'
    },
    icon: {
      type: String,
      default: null // require('@/assets/notification-dark.svg')
    },
    disabledIcon: {
      type: String,
      default: null
    },
    mode: {
      type: String,
      default: 'dark' // Can be: 'light', 'dark'
    },
    counterStyle: {
      type: String,
      default: 'roundRectangle' // Can be: 'roundRectangle', 'rectangle', 'round'
    },
    counterBackgroundColor: {
      type: String,
      default: 'red'
    },
    counterTextColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>
<style lang="sass" scoped>
  .notification
    position: relative
    display: grid
    .notification-counter
      width: fit-content
      position: absolute
      text-align: center
    .notification-icon
      text-align: center

</style>
