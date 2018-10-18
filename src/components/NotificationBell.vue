<template>
  <div id="notification-bell">
    <div class="notification"
         :style="notificationStyle"
    >
      <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 20 20" v-if="!icon" :fill="iconColor">
        <title>
          bell
        </title>
        <path d="M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z"
              width="100%"
              height="100%"
        />
      </svg>
      <img :src="resolvedIcon"
           class="notification-icon"
           v-else
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
            fontSize: `${this.size * 0.5}px`,
            left: `calc(100% - ${this.size * 0.45}px)`,
            top: 0,
            transform: 'translateY(-40%)',
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'lowerRight':
          return {
            fontSize: `${this.size * 0.3}px`,
            bottom: 0,
            transform: 'translateY(40%)',
            left: `calc(100% - ${this.size * 0.45}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'upperLeft':
          return {
            fontSize: `${this.size * 0.3}px`,
            top: 0,
            transform: 'translateY(-40%)',
            right: `calc(100% - ${this.size * 0.45}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'lowerLeft':
          return {
            fontSize: `${this.size * 0.3}px`,
            bottom: 0,
            transform: 'translateY(40%)',
            right: `calc(100% - ${this.size * 0.45}px)`,
            padding: `${this.size / 20}px ${this.size / 10}px`
          }
        case 'center':
          return {
            fontSize: `${this.size * 0.3}px`,
            top: '50%',
            left: `50%`,
            transform: 'translate(-50%, -50%)',
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
        width: `${this.size}px`,
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
        return Math.floor(this.count)
      } else {
        return `+${Math.floor(this.upperLimit)}`
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
    },
    iconColor: {
      type: String,
      default: '#000000'
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
      width: 100%
      height: 100%

</style>
