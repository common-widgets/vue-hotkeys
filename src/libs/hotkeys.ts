import hotkeys, { HotkeysEvent } from "hotkeys-js";

export default {
  install(app: any) {
    app.directive("hotkey", (el: Element, binding: any) => {
      const stop = binding?.modifiers?.stop;
      const prevent = binding?.modifiers?.prevent;
      const configs = binding?.value;
      if (configs) {
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
