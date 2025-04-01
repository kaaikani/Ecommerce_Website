import {
  FacetFilterTracker,
  FilterableProductGrid,
  FiltersButton,
  filteredSearchLoaderFromPagination
} from "/build/_shared/chunk-RI5G26KI.js";
import {
  CollectionCard
} from "/build/_shared/chunk-PHWPDOQN.js";
import "/build/_shared/chunk-SRIC3HXS.js";
import {
  Breadcrumbs
} from "/build/_shared/chunk-E6CLSRFG.js";
import "/build/_shared/chunk-WLLYEG7R.js";
import "/build/_shared/chunk-7HHNXP4R.js";
import "/build/_shared/chunk-ZGSQZHKT.js";
import {
  ValidatedForm,
  init_index_esm,
  require_remix_validated_form_with_zod_cjs
} from "/build/_shared/chunk-XPW3HCEW.js";
import "/build/_shared/chunk-3W7WW5ZQ.js";
import "/build/_shared/chunk-2QJY4JOV.js";
import {
  APP_META_TITLE
} from "/build/_shared/chunk-2S5KDW4V.js";
import "/build/_shared/chunk-PKAD657O.js";
import "/build/_shared/chunk-R5BHNF67.js";
import "/build/_shared/chunk-4KYYPW5T.js";
import "/build/_shared/chunk-6IR2VAGI.js";
import "/build/_shared/chunk-76TTLXDT.js";
import "/build/_shared/chunk-L7FVEPUN.js";
import {
  useTranslation
} from "/build/_shared/chunk-7LRNVKNK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  init_esm2 as init_esm,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-BPVN3YYS.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/collections.$slug.tsx
init_remix_hmr();
init_esm();
var import_with_zod = __toESM(require_remix_validated_form_with_zod_cjs(), 1);
var import_react2 = __toESM(require_react(), 1);
init_index_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/collections.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/collections.$slug.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
var meta = ({
  data
}) => {
  return [{
    title: data?.collection ? `${data.collection?.name} - ${APP_META_TITLE}` : APP_META_TITLE
  }];
};
var paginationLimitMinimumDefault = 25;
var allowedPaginationLimits = /* @__PURE__ */ new Set([paginationLimitMinimumDefault, 50, 100]);
var {
  validator,
  filteredSearchLoader
} = filteredSearchLoaderFromPagination(allowedPaginationLimits, paginationLimitMinimumDefault);
function CollectionSlug() {
  _s();
  const loaderData = useLoaderData();
  const {
    collection,
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  } = loaderData;
  const [mobileFiltersOpen, setMobileFiltersOpen] = (0, import_react2.useState)(false);
  const facetValuesTracker = (0, import_react2.useRef)(new FacetFilterTracker());
  facetValuesTracker.current.update(result, resultWithoutFacetValueFilters, facetValueIds);
  const submit = useSubmit();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: collection.name }, void 0, false, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiltersButton, { filterCount: facetValueIds.length, onClick: () => setMobileFiltersOpen(true) }, void 0, false, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumbs, { items: collection.breadcrumbs }, void 0, false, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    collection.children?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto py-16 sm:py-16 lg:max-w-none border-b mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-light text-gray-900", children: t("product.collections") }, void 0, false, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid max-w-xs sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4", children: collection.children.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionCard, { collection: child }, child.id, false, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 115,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 110,
      columnNumber: 38
    }, this) : "",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedForm, { validator: (0, import_with_zod.withZod)(validator), method: "get", onChange: (e) => submit(e.currentTarget, {
      preventScrollReset: true
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilterableProductGrid, { allowedPaginationLimits, mobileFiltersOpen, setMobileFiltersOpen, ...loaderData }, void 0, false, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/collections.$slug.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_s(CollectionSlug, "kdIHBT+i9LJ0A4NwEBXrX4hIzqs=", false, function() {
  return [useLoaderData, useSubmit, useTranslation];
});
_c = CollectionSlug;
function CatchBoundary() {
  _s2();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.collectionNotFound") }, void 0, false, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, false, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, false, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, false, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-5 lg:col-span-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 bg-slate-200 rounded" }, void 0, false, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 bg-slate-200 rounded" }, void 0, false, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 bg-slate-200 rounded" }, void 0, false, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-64 bg-slate-200 rounded" }, void 0, false, {
          fileName: "app/routes/collections.$slug.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/collections.$slug.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/collections.$slug.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/collections.$slug.tsx",
    lineNumber: 135,
    columnNumber: 10
  }, this);
}
_s2(CatchBoundary, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c2 = CatchBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "CollectionSlug");
$RefreshReg$(_c2, "CatchBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CollectionSlug as default,
  meta
};
//# sourceMappingURL=/build/routes/collections.$slug-4W5J3WHN.js.map
