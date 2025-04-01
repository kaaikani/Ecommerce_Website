import {
  require_solid
} from "/build/_shared/chunk-76TTLXDT.js";
import {
  useTranslation
} from "/build/_shared/chunk-7LRNVKNK.js";
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

// app/components/Breadcrumbs.tsx
init_remix_hmr();
var import_solid = __toESM(require_solid(), 1);
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Breadcrumbs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Breadcrumbs.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function Breadcrumbs({
  items
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { role: "list", className: "flex items-center space-x-1 md:space-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-gray-400 hover:text-gray-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.HomeIcon, { className: "flex-shrink-0 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/Breadcrumbs.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: t("home") }, void 0, false, {
        fileName: "app/components/Breadcrumbs.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    items.filter((item) => item.name !== "__root_collection__").map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "flex-shrink-0 h-5 w-5 text-gray-300", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z" }, void 0, false, {
        fileName: "app/components/Breadcrumbs.tsx",
        lineNumber: 45,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/Breadcrumbs.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections/" + item.slug, className: "ml-2 md:ml-4 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700", children: item.name }, void 0, false, {
        fileName: "app/components/Breadcrumbs.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this) }, item.name, false, {
      fileName: "app/components/Breadcrumbs.tsx",
      lineNumber: 42,
      columnNumber: 89
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/Breadcrumbs.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Breadcrumbs.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(Breadcrumbs, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = Breadcrumbs;
var _c;
$RefreshReg$(_c, "Breadcrumbs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Breadcrumbs
};
//# sourceMappingURL=/build/_shared/chunk-E6CLSRFG.js.map
