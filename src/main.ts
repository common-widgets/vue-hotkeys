import { createApp } from 'vue'
import App from './App.vue'
// import hotkeys from './libs/hotkeys'
import hotkeys from 'vue-hotkey-v3'

const app = createApp(App)
app.use(hotkeys)

app.mount('#app')
