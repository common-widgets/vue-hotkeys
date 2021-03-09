import { App } from 'vue'

interface Hotkeys {
  install: (app: App) => void
}
declare var hotkeys: Hotkeys
export default hotkeys;
