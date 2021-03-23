import { createApp } from 'vue'
// import hotkeys from './libs/hotkeys'
import hotkeys from 'vue-hotkey-v3'
import App from './App.vue'

const app = createApp(App)
app.use(hotkeys)

app.mount('#app')
