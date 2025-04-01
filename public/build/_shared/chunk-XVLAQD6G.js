import {
  clsx_m_default
} from "/build/_shared/chunk-PKAD657O.js";
import {
  require_outline
} from "/build/_shared/chunk-L7FVEPUN.js";
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

// app/components/HighlightedButton.tsx
init_remix_hmr();
var import_outline = __toESM(require_outline(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HighlightedButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HighlightedButton.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function HighlightedButton({
  isSubmitting = false,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, ...props, className: clsx_m_default("bg-primary-500 border border-transparent rounded-md py-2 px-4 text-base font-medium text-white", "focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-800 hover:bg-primary-600", "disabled:opacity-50 disabled:hover:opacity-30", "flex items-center justify-around gap-2", props.className), children: [
    props.children,
    isSubmitting && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.ArrowPathIcon, { className: "w-4 h-4 animate-spin" }, void 0, false, {
      fileName: "app/components/HighlightedButton.tsx",
      lineNumber: 29,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HighlightedButton.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = HighlightedButton;
var _c;
$RefreshReg$(_c, "HighlightedButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  HighlightedButton
};
//# sourceMappingURL=/build/_shared/chunk-XVLAQD6G.js.map
