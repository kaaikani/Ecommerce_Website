import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";

// app/utils/class-names.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/class-names.ts"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export {
  classNames
};
//# sourceMappingURL=/build/_shared/chunk-WYO5ATGT.js.map
