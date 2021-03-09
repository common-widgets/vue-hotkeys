<template lang="pug">
.wrapper(v-hotkey.stop.prevent="keymaps")
  .container
    .logs(v-for="log in logs")
      .log {{log}}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const logs = ref([])
    return {
      logs,
      keymaps: {
        'cmd+s'() {
          console.log('cmd + s')
          if (logs.value.length > 20) {
            logs.value.shift()
          }
          logs.value.push('cmd+s')
        }
      }
    }
  }
})
</script>

<style lang="stylus">
#app
  height 100%

.container
  position relative
  left 200px
  top 200px
  width 400px
  height 300px
  overflow auto
  border 1px solid teal
</style>