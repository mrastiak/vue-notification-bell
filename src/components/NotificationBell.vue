<template>
  <div id="notificationBell">
    <div class="notification"
         :style="notificationStyle"
    >
      <svg xmlns="http://www.w3.org/2000/svg"
           :width="size"
           :height="size"
           viewBox="0 0 20 20"
           v-if="!icon"
           :fill="iconColor"
      >
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
        <span v-if="!animated">{{ decoratedCounter }}</span>
        <div class="odometer-wrapper" v-else>
          <div v-if="count > upperLimit">+</div>
          <vue-odometer class="iOdometer" :value="decoratedCounter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueOdometer from 'vue-odometer'
import 'odometer/themes/odometer-theme-default.css'

export default {
  name: 'NotificationBell',
  computed: {
    preDefinedNotificationCounterLocation () {
      switch (this.counterLocation) {
        case 'upperRight':
          return {
            top: 0,
            left: `calc(100% - ${this.size * 0.45}px)`,
            transform: 'translateY(-40%)'
          }
        case 'right':
          return {
            top: '50%',
            left: `calc(100% - ${this.size * 0.45}px)`,
            transform: 'translateY(-50%)'
          }
        case 'lowerRight':
          return {
            bottom: 0,
            left: `calc(100% - ${this.size * 0.45}px)`,
            transform: 'translateY(40%)'
          }
        case 'bottom':
          return {
            bottom: 0,
            left: `50%`,
            transform: 'translate(-50%, 40%)'
          }
        case 'lowerLeft':
          return {
            bottom: 0,
            right: `calc(100% - ${this.size * 0.45}px)`,
            transform: 'translateY(40%)'
          }
        case 'left':
          return {
            top: '50%',
            right: `calc(100% - ${this.size * 0.45}px)`,
            transform: 'translateY(-50%)'
          }
        case 'upperLeft':
          return {
            top: 0,
            right: `calc(100% - ${this.size * 0.45}px)`,
            transform: 'translateY(-40%)'
          }
        case 'top':
          return {
            left: `50%`,
            top: 0,
            transform: 'translate(-50%, -40%)',
          }
        case 'center':
          return {
            top: '50%',
            left: `50%`,
            transform: 'translate(-50%, -50%)'
          }
        default:
          return {
            top: 0,
            left: `calc(100% - ${this.size * 0.45}px)`,
            transform: 'translateY(-40%)'
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
        {
          fontSize: `${this.size * 0.5}px`,
          padding: `${this.size / 20}px ${this.size / 10}px`
        },
        this.notificationCounterLocation,
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
    },
    notificationCounterLocation () {
      if (this.top || this.left) {
        return {
          top: this.top || 0,
          left: this.left || 0
        }
      } else {
        return this.preDefinedNotificationCounterLocation
      }
    }
  },
  components: {
    VueOdometer
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    upperLimit: {
      type: Number,
      default: 99
    },
    size: {
      type: Number,
      default: 30
    },
    counterLocation: {
      type: String,
      default: 'upperRight',
      validator(counterLocation) {
        return [
          'upperRight',
          'right',
          'lowerRight',
          'bottom',
          'lowerLeft',
          'left',
          'upperLeft',
          'top',
          'center'
        ].includes(counterLocation)
      }
    },
    top: {
      type: String,
      default: null
    },
    left: {
      type: String,
      default: null
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
      default: 'roundRectangle',
      validator(counterStyle) {
        return ['roundRectangle', 'rectangle', 'round'].includes(counterStyle)
      }
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
    },
    animated: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="sass">
#notificationBell
  .notification
    position: relative
    display: grid
    .notification-counter
      width: fit-content
      position: absolute
      text-align: center
      .odometer-wrapper
        display: grid
        grid-auto-flow: column
        .odometer-inside
          display: grid
          grid-auto-flow: column
    .notification-icon
      text-align: center
      width: 100%
      height: 100%

</style>
