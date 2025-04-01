import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";

// app/constants.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/constants.ts"
  );
  import.meta.hot.lastModified = "1742363591918.695";
}
var APP_META_TITLE = "Vendure Remix Storefront";
var APP_META_DESCRIPTION = "A headless commerce storefront starter kit built with Remix & Vendure";
var DEMO_API_URL = "http://localhost:3000/shop-api";
var API_URL = typeof process !== "undefined" ? process.env.VENDURE_API_URL ?? DEMO_API_URL : DEMO_API_URL;

export {
  APP_META_TITLE,
  APP_META_DESCRIPTION,
  API_URL
};
//# sourceMappingURL=/build/_shared/chunk-2S5KDW4V.js.map
