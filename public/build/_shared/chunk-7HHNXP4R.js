import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/products/Price.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/Price.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/Price.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function Price({
  priceWithTax,
  currencyCode
}) {
  if (priceWithTax == null || !currencyCode) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
      fileName: "app/components/products/Price.tsx",
      lineNumber: 26,
      columnNumber: 12
    }, this);
  }
  if (typeof priceWithTax === "number") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: formatPrice(priceWithTax, currencyCode) }, void 0, false, {
      fileName: "app/components/products/Price.tsx",
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }
  if ("value" in priceWithTax) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: formatPrice(priceWithTax.value, currencyCode) }, void 0, false, {
      fileName: "app/components/products/Price.tsx",
      lineNumber: 32,
      columnNumber: 12
    }, this);
  }
  if (priceWithTax.min === priceWithTax.max) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: formatPrice(priceWithTax.min, currencyCode) }, void 0, false, {
      fileName: "app/components/products/Price.tsx",
      lineNumber: 35,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    formatPrice(priceWithTax.min, currencyCode),
    " -",
    " ",
    formatPrice(priceWithTax.max, currencyCode)
  ] }, void 0, true, {
    fileName: "app/components/products/Price.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c = Price;
function formatPrice(value, currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(value / 100);
}
var _c;
$RefreshReg$(_c, "Price");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Price
};
//# sourceMappingURL=/build/_shared/chunk-7HHNXP4R.js.map
