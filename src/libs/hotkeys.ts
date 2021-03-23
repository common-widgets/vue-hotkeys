import hotkeys, { HotkeysEvent } from "hotkeys-js";

let hkCache = false
export default {
  install(app: any) {
    app.directive("hotkey", (el: Element, binding: any) => {
      console.log("binding", binding)
      const stop = binding?.modifiers?.stop;
      const prevent = binding?.modifiers?.prevent;
      const configs = binding?.value;
      if (configs) {
        // 清理缓存
        if (hkCache) hotkeys.unbind()
        hkCache = true
        Object.keys(configs).forEach((key: string) => {
          hotkeys(key, function(e: KeyboardEvent, handler: HotkeysEvent) {
            stop && e.stopPropagation();
            prevent && e.preventDefault();
            const callback = configs[key];
            callback && callback(e, handler);
          });
        });
      }
    });
  }
};
