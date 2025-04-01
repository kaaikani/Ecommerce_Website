import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  Link,
  init_esm2 as init_esm
} from "/build/_shared/chunk-BPVN3YYS.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/collections/CollectionCard.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/collections/CollectionCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/collections/CollectionCard.tsx"
  );
  import.meta.hot.lastModified = "1742460190235.9453";
}
function CollectionCard({
  collection
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections/" + collection.slug, prefetch: "intent", className: "max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full object-center object-cover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: collection.featuredAsset?.preview + "?w=300&h=300" }, void 0, false, {
      fileName: "app/components/collections/CollectionCard.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/collections/CollectionCard.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/collections/CollectionCard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", className: "absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" }, void 0, false, {
      fileName: "app/components/collections/CollectionCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white", children: collection.name }, void 0, false, {
      fileName: "app/components/collections/CollectionCard.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, collection.id, true, {
    fileName: "app/components/collections/CollectionCard.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = CollectionCard;
var _c;
$RefreshReg$(_c, "CollectionCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CollectionCard
};
//# sourceMappingURL=/build/_shared/chunk-PHWPDOQN.js.map
