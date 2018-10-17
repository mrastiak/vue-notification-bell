![vue-notification-bell](https://github.com/maryayi/vue-notification-bell/blob/master/public/images/bell-demo.png?raw=true)

# vue-notification-bell

##### A Vue UI component for showing notifications

## How To Install

```
npm install vue-notification-bell --save
```

## How to use

Inside your vue files:

```vue
<template>
  <div id="your-component">
    <notification-bell /> <!-- Using Component -->
  </div>
</template>
<script>
// Importing Component
import NotificationBell from 'vue-notification-bell'

export default {
  name: 'YourComponentName',
  // ...
  components: {
    NotificationBell  // Registering Component
  }
  // ...
}
</script>
```

## List of component props

:warning: Warning: You have to v-bind parameters to all of these props.
Don't pass parameters statically:

`v-bind:propName="value"` :heavy_check_mark:

`:propName="value"` :heavy_check_mark:

`propName="value"` :x:



| propName | description | default value |
|----------|-------------|---------------|
| `size`     | size of component in px  | 30 |
| `count`    | number of notifications. (zero or below not shown)  |  0 |
| `upperLimit`  | if `count` is bigger than this number notification shown as `+upperLimit` | 50 |
| `counterLocation`  | position of counter box in component. can be one of: `upperRight`, `lowerRight`, `upperLeft`, `lowerLeft`, `center` | `upperRight` |
| `icon` | custom notification icon. you have to pass your SVG icon location by `require` function  | `null` (showing the default bell icon) |
| `disabledIcon`  | If you want to show a different Icon when you have zero notification. you can use this prop. pass SVG icon location by `require` function. **this prop only works if you are using custom `icon` too** | `null` (showing the default bell icon) |
| `mode` | Can be: `dark` for black bell icon or `light` for white bell icon. **this prop only works if you are _NOT_ using custom `icon`** | `dark` |
| `counterStyle` | shape of counter box. can be one of: `roundRectangle`, `rectangle`, `round`  | `roundRectangle` |
| `counterBackgroundColor` | background color of counter box  | `red`  |
| `counterTextColor` | counter text color | `white` |

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build-bundle
```

### Lints and fixes files
```
npm run lint
```

### License
MIT