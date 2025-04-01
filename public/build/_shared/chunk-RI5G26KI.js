import {
  Pagination,
  paginationValidationSchema,
  translatePaginationFrom,
  translatePaginationTo
} from "/build/_shared/chunk-SRIC3HXS.js";
import {
  search,
  searchFacetValues
} from "/build/_shared/chunk-WLLYEG7R.js";
import {
  Price
} from "/build/_shared/chunk-7HHNXP4R.js";
import {
  C as C2,
  Je,
  mt,
  p,
  s as s2
} from "/build/_shared/chunk-R5BHNF67.js";
import {
  $,
  C,
  I,
  S2 as S,
  T,
  e2 as e,
  o,
  o2,
  r,
  s,
  u,
  y
} from "/build/_shared/chunk-4KYYPW5T.js";
import {
  require_solid
} from "/build/_shared/chunk-76TTLXDT.js";
import {
  require_outline
} from "/build/_shared/chunk-L7FVEPUN.js";
import {
  useTranslation
} from "/build/_shared/chunk-7LRNVKNK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  Link,
  init_esm,
  init_esm2,
  redirect,
  useSearchParams
} from "/build/_shared/chunk-BPVN3YYS.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/facet-filter/facet-filter-tracker.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/facet-filter/facet-filter-tracker.ts"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
var FacetFilterTracker = class {
  _facetsWithValues = [];
  get facetsWithValues() {
    return this._facetsWithValues;
  }
  update(searchResult, resultWithoutFacetValueFilters, activeFacetValueIds) {
    this._facetsWithValues = this.groupFacetValues(
      resultWithoutFacetValueFilters,
      searchResult.facetValues,
      activeFacetValueIds
    );
  }
  groupFacetValues(withoutFilters, current, activeFacetValueIds) {
    if (!current) {
      return [];
    }
    const facetMap = /* @__PURE__ */ new Map();
    for (const {
      facetValue: { id, name, facet },
      count
    } of withoutFilters.facetValues) {
      if (count === withoutFilters.totalItems) {
        continue;
      }
      const facetFromMap = facetMap.get(facet.id);
      const selected = activeFacetValueIds.includes(id);
      if (facetFromMap) {
        facetFromMap.values.push({ id, name, selected });
      } else {
        facetMap.set(facet.id, {
          id: facet.id,
          name: facet.name,
          values: [{ id, name, selected }]
        });
      }
    }
    return Array.from(facetMap.values());
  }
};

// app/components/FiltersButton.tsx
init_remix_hmr();
var import_solid = __toESM(require_solid(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FiltersButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FiltersButton.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function FiltersButton({
  filterCount,
  onClick
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "flex space-x-2 items-center border rounded p-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden", onClick, children: [
    !!filterCount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-200 text-primary-800", children: filterCount }, void 0, false, {
      fileName: "app/components/FiltersButton.tsx",
      lineNumber: 33,
      columnNumber: 24
    }, this) : "",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("common.filters") }, void 0, false, {
      fileName: "app/components/FiltersButton.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.FunnelIcon, { className: "w-5 h-5", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/FiltersButton.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FiltersButton.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(FiltersButton, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = FiltersButton;
var _c;
$RefreshReg$(_c, "FiltersButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/FilterableProductGrid.tsx
init_remix_hmr();

// app/components/facet-filter/FacetFilterControls.tsx
init_remix_hmr();
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react = __toESM(require_react(), 1);
function i(t) {
  var n;
  if (t.type)
    return t.type;
  let e2 = (n = t.as) != null ? n : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s3(t, e2) {
  let [n, u2] = (0, import_react.useState)(() => i(t));
  return s(() => {
    u2(i(t));
  }, [t.type, t.as]), s(() => {
    n || !e2.current || e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
  }, [n, e2]), n;
}

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react2 = __toESM(require_react(), 1);
var J = ((l) => (l[l.Open = 0] = "Open", l[l.Closed = 1] = "Closed", l))(J || {});
var Q = ((t) => (t[t.ToggleDisclosure = 0] = "ToggleDisclosure", t[t.CloseDisclosure = 1] = "CloseDisclosure", t[t.SetButtonId = 2] = "SetButtonId", t[t.SetPanelId = 3] = "SetPanelId", t[t.LinkPanel = 4] = "LinkPanel", t[t.UnlinkPanel = 5] = "UnlinkPanel", t))(Q || {});
var V = { [0]: (e2) => ({ ...e2, disclosureState: u(e2.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e2) => e2.disclosureState === 1 ? e2 : { ...e2, disclosureState: 1 }, [4](e2) {
  return e2.linkedPanel === true ? e2 : { ...e2, linkedPanel: true };
}, [5](e2) {
  return e2.linkedPanel === false ? e2 : { ...e2, linkedPanel: false };
}, [2](e2, n) {
  return e2.buttonId === n.buttonId ? e2 : { ...e2, buttonId: n.buttonId };
}, [3](e2, n) {
  return e2.panelId === n.panelId ? e2 : { ...e2, panelId: n.panelId };
} };
var B = (0, import_react2.createContext)(null);
B.displayName = "DisclosureContext";
function v(e2) {
  let n = (0, import_react2.useContext)(B);
  if (n === null) {
    let l = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, v), l;
  }
  return n;
}
var h = (0, import_react2.createContext)(null);
h.displayName = "DisclosureAPIContext";
function K(e2) {
  let n = (0, import_react2.useContext)(h);
  if (n === null) {
    let l = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, K), l;
  }
  return n;
}
var H = (0, import_react2.createContext)(null);
H.displayName = "DisclosurePanelContext";
function X() {
  return (0, import_react2.useContext)(H);
}
function Y(e2, n) {
  return u(n.type, V, e2, n);
}
var Z = import_react2.Fragment;
var ee = C(function(n, l) {
  let { defaultOpen: y2 = false, ...u2 } = n, T2 = (0, import_react2.useRef)(null), t = y(l, T((a) => {
    T2.current = a;
  }, n.as === void 0 || n.as === import_react2.Fragment)), o4 = (0, import_react2.useRef)(null), f = (0, import_react2.useRef)(null), s4 = (0, import_react2.useReducer)(Y, { disclosureState: y2 ? 0 : 1, linkedPanel: false, buttonRef: f, panelRef: o4, buttonId: null, panelId: null }), [{ disclosureState: i2, buttonId: p2 }, D] = s4, d = o((a) => {
    D({ type: 1 });
    let r2 = e(T2);
    if (!r2 || !p2)
      return;
    let c = (() => a ? a instanceof HTMLElement ? a : a.current instanceof HTMLElement ? a.current : r2.getElementById(p2) : r2.getElementById(p2))();
    c == null || c.focus();
  }), P = (0, import_react2.useMemo)(() => ({ close: d }), [d]), A = (0, import_react2.useMemo)(() => ({ open: i2 === 0, close: d }), [i2, d]), S2 = { ref: t };
  return import_react2.default.createElement(B.Provider, { value: s4 }, import_react2.default.createElement(h.Provider, { value: P }, import_react2.default.createElement(C2, { value: u(i2, { [0]: p.Open, [1]: p.Closed }) }, $({ ourProps: S2, theirProps: u2, slot: A, defaultTag: Z, name: "Disclosure" }))));
});
var te = "button";
var ne = C(function(n, l) {
  let y2 = I(), { id: u2 = `headlessui-disclosure-button-${y2}`, ...T2 } = n, [t, o4] = v("Disclosure.Button"), f = X(), s4 = f === null ? false : f === t.panelId, i2 = (0, import_react2.useRef)(null), p2 = y(i2, l, s4 ? null : t.buttonRef);
  (0, import_react2.useEffect)(() => {
    if (!s4)
      return o4({ type: 2, buttonId: u2 }), () => {
        o4({ type: 2, buttonId: null });
      };
  }, [u2, o4, s4]);
  let D = o((r2) => {
    var c;
    if (s4) {
      if (t.disclosureState === 1)
        return;
      switch (r2.key) {
        case o2.Space:
        case o2.Enter:
          r2.preventDefault(), r2.stopPropagation(), o4({ type: 0 }), (c = t.buttonRef.current) == null || c.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o2.Space:
        case o2.Enter:
          r2.preventDefault(), r2.stopPropagation(), o4({ type: 0 });
          break;
      }
  }), d = o((r2) => {
    switch (r2.key) {
      case o2.Space:
        r2.preventDefault();
        break;
    }
  }), P = o((r2) => {
    var c;
    r(r2.currentTarget) || n.disabled || (s4 ? (o4({ type: 0 }), (c = t.buttonRef.current) == null || c.focus()) : o4({ type: 0 }));
  }), A = (0, import_react2.useMemo)(() => ({ open: t.disclosureState === 0 }), [t]), S2 = s3(n, i2), a = s4 ? { ref: p2, type: S2, onKeyDown: D, onClick: P } : { ref: p2, id: u2, type: S2, "aria-expanded": n.disabled ? void 0 : t.disclosureState === 0, "aria-controls": t.linkedPanel ? t.panelId : void 0, onKeyDown: D, onKeyUp: d, onClick: P };
  return $({ ourProps: a, theirProps: T2, slot: A, defaultTag: te, name: "Disclosure.Button" });
});
var le = "div";
var re = S.RenderStrategy | S.Static;
var oe = C(function(n, l) {
  let y2 = I(), { id: u2 = `headlessui-disclosure-panel-${y2}`, ...T2 } = n, [t, o4] = v("Disclosure.Panel"), { close: f } = K("Disclosure.Panel"), s4 = y(l, t.panelRef, (P) => {
    o4({ type: P ? 4 : 5 });
  });
  (0, import_react2.useEffect)(() => (o4({ type: 3, panelId: u2 }), () => {
    o4({ type: 3, panelId: null });
  }), [u2, o4]);
  let i2 = s2(), p2 = (() => i2 !== null ? i2 === p.Open : t.disclosureState === 0)(), D = (0, import_react2.useMemo)(() => ({ open: t.disclosureState === 0, close: f }), [t, f]), d = { ref: s4, id: u2 };
  return import_react2.default.createElement(H.Provider, { value: t.panelId }, $({ ourProps: d, theirProps: T2, slot: D, defaultTag: le, features: re, visible: p2, name: "Disclosure.Panel" }));
});
var Le = Object.assign(ee, { Button: ne, Panel: oe });

// app/components/facet-filter/FacetFilterControls.tsx
var import_outline = __toESM(require_outline(), 1);
var import_solid2 = __toESM(require_solid(), 1);
init_esm2();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/facet-filter/FacetFilterControls.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/facet-filter/FacetFilterControls.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function FacetFilterControls({
  facetFilterTracker,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  _s2();
  const [searchParams] = useSearchParams();
  const q = searchParams.getAll("q");
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Root, { show: mobileFiltersOpen, as: import_react3.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt, { as: "div", className: "relative z-40 lg:hidden", onClose: setMobileFiltersOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Child, { as: import_react3.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 flex z-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Child, { as: import_react3.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt.Panel, { className: "ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: t("common.filters") }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400", onClick: () => setMobileFiltersOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: t("common.closeMenu") }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 55,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 56,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 border-t border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "q", value: q }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le, { as: "div", defaultOpen: true, className: "border-t border-gray-200 px-4 py-6", children: ({
            open
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Button, { className: "px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 67,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid2.MinusSmallIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 71,
                columnNumber: 41
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid2.PlusSmallIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 71,
                columnNumber: 101
              }, this) }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 70,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 66,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 65,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-mobile-${facet.id}-${optionIdx}`, defaultValue: value.id, type: "checkbox", checked: value.selected, onChange: (ev) => {
                document.getElementById(`filter-${facet.id}-${optionIdx}`).checked = ev.target.checked;
              }, className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 78,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-mobile-${facet.id}-${optionIdx}`, className: "ml-3 min-w-0 flex-1 text-gray-500", children: value.name }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 82,
                columnNumber: 35
              }, this)
            ] }, value.id, true, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 77,
              columnNumber: 71
            }, this)) }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 76,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 75,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this) }, facet.id, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 61,
            columnNumber: 69
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "q", value: q }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le, { as: "div", defaultOpen: true, className: "border-b border-gray-200 py-6", children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Button, { className: "py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 105,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid2.MinusSmallIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 109,
            columnNumber: 31
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid2.PlusSmallIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 109,
            columnNumber: 91
          }, this) }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 104,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Le.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-${facet.id}-${optionIdx}`, name: `fvid`, defaultValue: value.id, type: "checkbox", checked: value.selected, onChange: () => {
          }, className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 116,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-${facet.id}-${optionIdx}`, className: "ml-3 text-sm text-gray-600", children: value.name }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this)
        ] }, value.id, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 115,
          columnNumber: 61
        }, this)) }, void 0, false, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 114,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, facet.id, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 99,
        columnNumber: 59
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/facet-filter/FacetFilterControls.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s2(FacetFilterControls, "2/2hGkpLhAgWFHJC7+gr0asGte0=", false, function() {
  return [useSearchParams, useTranslation];
});
_c2 = FacetFilterControls;
var _c2;
$RefreshReg$(_c2, "FacetFilterControls");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/ProductCard.tsx
init_remix_hmr();
init_esm2();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/ProductCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/ProductCard.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { className: "flex flex-col", prefetch: "intent", to: `/products/${slug}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "rounded-xl flex-grow object-cover aspect-[7/8]", alt: "", src: productAsset?.preview + "?w=300&h=400" }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-2" }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-700", children: productName }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Price, { priceWithTax, currencyCode }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/ProductCard.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c3 = ProductCard;
var _c3;
$RefreshReg$(_c3, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/NoResultsHint.tsx
init_remix_hmr();
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/NoResultsHint.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/NoResultsHint.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function NoResultsHint({
  facetFilterTracker,
  ...props
}) {
  _s3();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl sm:text-4xl font-light tracking-tight text-gray-900", children: t("product.noResults") }, void 0, false, {
      fileName: "app/components/products/NoResultsHint.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    facetFilterTracker?.facetsWithValues.some((f) => f.values.some((v2) => v2.selected)) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg sm:text-2xl font-light tracking-tight text-gray-900", children: t("product.filterTip") }, void 0, false, {
      fileName: "app/components/products/NoResultsHint.tsx",
      lineNumber: 35,
      columnNumber: 90
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/NoResultsHint.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s3(NoResultsHint, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c4 = NoResultsHint;
var _c4;
$RefreshReg$(_c4, "NoResultsHint");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/FilterableProductGrid.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/FilterableProductGrid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/FilterableProductGrid.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function FilterableProductGrid({
  result,
  resultWithoutFacetValueFilters,
  facetValueIds,
  appliedPaginationPage,
  appliedPaginationLimit,
  allowedPaginationLimits,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  _s4();
  const {
    t
  } = useTranslation();
  const facetValuesTracker = (0, import_react7.useRef)(new FacetFilterTracker());
  facetValuesTracker.current.update(result, resultWithoutFacetValueFilters, facetValueIds);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FacetFilterControls, { facetFilterTracker: facetValuesTracker.current, mobileFiltersOpen, setMobileFiltersOpen }, void 0, false, {
      fileName: "app/components/products/FilterableProductGrid.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    result.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "sm:col-span-5 lg:col-span-4 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: result.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductCard, { ...item }, item.productId, false, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 50,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "self-start text-gray-500 text-sm mt-2", children: [
          t("product.showing"),
          " ",
          translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit),
          " ",
          t("product.to"),
          " ",
          translatePaginationTo(appliedPaginationPage, appliedPaginationLimit, result.items.length)
        ] }, void 0, true, {
          fileName: "app/components/products/FilterableProductGrid.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Pagination, { appliedPaginationLimit, allowedPaginationLimits, totalItems: result.totalItems, appliedPaginationPage }, void 0, false, {
          fileName: "app/components/products/FilterableProductGrid.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/products/FilterableProductGrid.tsx",
      lineNumber: 48,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NoResultsHint, { facetFilterTracker: facetValuesTracker.current, className: "sm:col-span-4 sm:p-4" }, void 0, false, {
      fileName: "app/components/products/FilterableProductGrid.tsx",
      lineNumber: 62,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/FilterableProductGrid.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s4(FilterableProductGrid, "12ulESM3mSjbGvTJMUbtHgeAlSU=", false, function() {
  return [useTranslation];
});
_c5 = FilterableProductGrid;
var _c5;
$RefreshReg$(_c5, "FilterableProductGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/filtered-search-loader.ts
init_remix_hmr();
init_esm();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/filtered-search-loader.ts"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
function filteredSearchLoaderFromPagination(allowedPaginationLimits, paginationLimitMinimumDefault) {
  const searchPaginationSchema = paginationValidationSchema(
    allowedPaginationLimits
  );
  return {
    validator: searchPaginationSchema,
    filteredSearchLoader: async ({ params, request }) => {
      const url = new URL(request.url);
      const term = url.searchParams.get("q");
      const facetValueIds = url.searchParams.getAll("fvid");
      const limit = url.searchParams.get("limit") ?? paginationLimitMinimumDefault;
      const page = url.searchParams.get("page") ?? 1;
      const zodResult = searchPaginationSchema.safeParse({ limit, page });
      if (!zodResult.success) {
        url.search = "";
        throw redirect(url.href);
      }
      let resultPromises;
      const searchResultPromise = search(
        {
          input: {
            groupByProduct: true,
            term,
            facetValueFilters: [{ or: facetValueIds }],
            collectionSlug: params.slug,
            take: zodResult.data.limit,
            skip: (zodResult.data.page - 1) * zodResult.data.limit
          }
        },
        { request }
      );
      if (facetValueIds.length) {
        resultPromises = [
          searchResultPromise,
          searchFacetValues(
            {
              input: {
                groupByProduct: true,
                term,
                collectionSlug: params.slug
              }
            },
            { request }
          )
        ];
      } else {
        resultPromises = [searchResultPromise, searchResultPromise];
      }
      const [result, resultWithoutFacetValueFilters] = await Promise.all(
        resultPromises
      );
      return {
        term,
        facetValueIds,
        result: result.search,
        resultWithoutFacetValueFilters: resultWithoutFacetValueFilters.search,
        appliedPaginationLimit: zodResult.data.limit,
        appliedPaginationPage: zodResult.data.page
      };
    }
  };
}

export {
  FacetFilterTracker,
  FiltersButton,
  FilterableProductGrid,
  filteredSearchLoaderFromPagination
};
//# sourceMappingURL=/build/_shared/chunk-RI5G26KI.js.map
