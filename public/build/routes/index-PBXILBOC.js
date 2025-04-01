import {
  CollectionCard
} from "/build/_shared/chunk-PHWPDOQN.js";
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
  init_esm2 as init_esm,
  useLoaderData
} from "/build/_shared/chunk-BPVN3YYS.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/index.tsx
init_remix_hmr();
init_esm();
var import_solid = __toESM(require_solid(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/index.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
function Index() {
  _s();
  const {
    collections
  } = useLoaderData();
  const {
    t
  } = useTranslation();
  const headerImage = collections[0]?.featuredAsset?.preview;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-hidden": "true", className: "absolute inset-0 overflow-hidden", children: [
        headerImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "absolute inset-0 w-full", src: headerImage + "?w=800", alt: "header" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 50,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-br from-zinc-400 to-black mix-blend-darken" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-hidden": "true", className: "absolute inset-0 bg-gray-900 opacity-50" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-zinc-800 bg-opacity-0 rounded-lg p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-6xl text-transparent bg-clip-text font-extrabold tracking-normal lg:text-6xl bg-gradient-to-r from-yellow-600 via-red-500 to-blue-600", children: t("vendure.title") }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-2xl text-white", children: [
          t("vendure.intro"),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.vendure.io", className: "text-blue-300 hover:text-blue-500", children: "Vendure" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          " ",
          "&",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "~/routes/__cart/index", className: "text-red-300 hover:text-red-500", children: "Remix" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-gray-300 space-x-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.BookOpenIcon, { className: "w-5 h-5 inline" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("common.readMore") }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "text-primary-200 hover:text-primary-400", href: "https://www.vendure.io/blog/2022/05/lightning-fast-headless-commerce-with-vendure-and-remix", children: t("vendure.link") }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { "aria-labelledby": "category-heading", className: "pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8 xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "category-heading", className: "text-2xl font-light tracking-tight text-gray-900", children: t("common.shopByCategory") }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8", children: collections.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionCard, { collection }, collection.id, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 91,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 px-4 sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "~/routes/__cart/index#", className: "block text-sm font-semibold text-primary-600 hover:text-primary-500", children: [
        t("common.browseCategories"),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(Index, "1Vy81FqO1Twq8CvvfUoCngZf6R8=", false, function() {
  return [useLoaderData, useTranslation];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-PBXILBOC.js.map
