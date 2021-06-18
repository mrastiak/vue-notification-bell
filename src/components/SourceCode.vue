<template>
  <div id="sourceCode">
    &lt;notification-bell
    <span v-if="size">
      &nbsp;&nbsp;&nbsp;&nbsp;:size="{{ size }}"<br>
    </span>
    <span v-if="count">
      &nbsp;&nbsp;&nbsp;&nbsp;:count="{{ count }}"<br>
    </span>
    <span v-if="ding">
      &nbsp;&nbsp;&nbsp;&nbsp;:ding="{{ ding }}"<br>
    </span>
    <span v-if="upperLimit">
      &nbsp;&nbsp;&nbsp;&nbsp;:upperLimit="{{ upperLimit }}"<br>
    </span>
    <span v-if="counterLocation && !top && !left">
      &nbsp;&nbsp;&nbsp;&nbsp;counterLocation="{{ counterLocation }}"<br>
    </span>
    <span v-if="counterStyle">
      &nbsp;&nbsp;&nbsp;&nbsp;counterStyle="{{ counterStyle }}"<br>
    </span>
    <span v-if="counterBackgroundColor">
      &nbsp;&nbsp;&nbsp;&nbsp;counterBackgroundColor="{{ counterBackgroundColor }}"<br>
    </span>
    <span v-if="counterTextColor">
      &nbsp;&nbsp;&nbsp;&nbsp;counterTextColor="{{ counterTextColor }}"<br>
    </span>
    <span v-if="iconColor">
      &nbsp;&nbsp;&nbsp;&nbsp;iconColor="{{ iconColor }}"<br>
    </span>
    <span v-if="animated">
      &nbsp;&nbsp;&nbsp;&nbsp;:animated="{{ animated }}"<br>
    </span>
    <span v-if="top">
      &nbsp;&nbsp;&nbsp;&nbsp;top="{{ top }}"<br>
    </span>
    <span v-if="left">
      &nbsp;&nbsp;&nbsp;&nbsp;left="{{ left }}"<br>
    </span>
    <span v-if="prefixPlus">
      &nbsp;&nbsp;&nbsp;&nbsp;:prefixPlus="{{ prefixPlus }}"<br>
    </span>
    <span v-if="fontSize">
      &nbsp;&nbsp;&nbsp;&nbsp;fontSize="{{ fontSize }}"<br>
    </span>
    <span v-if="counterPadding">
      &nbsp;&nbsp;&nbsp;&nbsp;counterPadding="{{ counterPadding }}"<br>
    </span>
    /&gt;
  </div>
</template>

<script>
export default {
  name: 'SourceCode',
  data () {
    return {
    }
  },
  props: [
    'count',
    'ding',
    'upperLimit',
    'size',
    'counterLocation',
    'top',
    'left',
    'icon',
    'disabledIcon',
    'counterStyle',
    'counterBackgroundColor',
    'counterTextColor',
    'iconColor',
    'animated',
    'prefixPlus',
    'counterPadding',
    'fontSize'
  ]
}
</script>
<style lang="sass" scoped>
#sourceCode
  padding: 0 15px
  display: grid
  align-content: center
  justify-content: center
  border-left: 1px solid #232323
  background: #232323
  color: #fff
  font-size: 18px
  &, span
    font-family: monospace
    .image
      width: 30px
</style>
