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

// app/components/Button.tsx
init_remix_hmr();

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// app/components/Button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Button.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ...props, className: clsx_m_default("hover:text-white hover:bg-primary-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-0 focus:ring-gray-800", "bg-gray-100 border rounded-md py-2 px-4 text-base font-medium text-black", "flex items-center justify-around gap-2", "disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400", props.className), children: props.children }, void 0, false, {
    fileName: "app/components/Button.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  clsx_m_default,
  Button
};
//# sourceMappingURL=/build/_shared/chunk-PKAD657O.js.map
