import {
  FacetFilterTracker,
  FilterableProductGrid,
  FiltersButton,
  filteredSearchLoaderFromPagination
} from "/build/_shared/chunk-RI5G26KI.js";
import {
  paginationValidationSchema
} from "/build/_shared/chunk-SRIC3HXS.js";
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
import "/build/_shared/chunk-2S5KDW4V.js";
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

// app/routes/search.tsx
init_remix_hmr();
init_esm();
var import_react2 = __toESM(require_react(), 1);
init_index_esm();
var import_with_zod = __toESM(require_remix_validated_form_with_zod_cjs(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/search.tsx"
  );
  import.meta.hot.lastModified = "1742363235111.9072";
}
var paginationLimitMinimumDefault = 25;
var allowedPaginationLimits = /* @__PURE__ */ new Set([paginationLimitMinimumDefault, 50, 100]);
var validator = (0, import_with_zod.withZod)(paginationValidationSchema(allowedPaginationLimits));
var {
  filteredSearchLoader: loader
} = filteredSearchLoaderFromPagination(allowedPaginationLimits, paginationLimitMinimumDefault);
function Search() {
  _s();
  const loaderData = useLoaderData();
  const {
    result,
    resultWithoutFacetValueFilters,
    term,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: term ? `${t("common.resultsFor")} "${term}"` : t("common.allResults") }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiltersButton, { filterCount: facetValueIds.length, onClick: () => setMobileFiltersOpen(true) }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedForm, { validator, method: "get", onChange: (e) => submit(e.currentTarget, {
      preventScrollReset: true
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilterableProductGrid, { allowedPaginationLimits, mobileFiltersOpen, setMobileFiltersOpen, ...loaderData }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/search.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(Search, "kdIHBT+i9LJ0A4NwEBXrX4hIzqs=", false, function() {
  return [useLoaderData, useSubmit, useTranslation];
});
_c = Search;
var _c;
$RefreshReg$(_c, "Search");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Search as default
};
//# sourceMappingURL=/build/routes/search-EIAAY6UQ.js.map
