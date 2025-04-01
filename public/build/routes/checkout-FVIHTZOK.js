import {
  classNames
} from "/build/_shared/chunk-WYO5ATGT.js";
import {
  CartTotals
} from "/build/_shared/chunk-JEEW62NV.js";
import {
  CartContents
} from "/build/_shared/chunk-HEMXXL6Y.js";
import "/build/_shared/chunk-7HHNXP4R.js";
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
  Outlet,
  init_esm2 as init_esm,
  useLocation,
  useOutletContext
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

// app/routes/checkout.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/checkout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
var steps = ["shipping", "payment", "confirmation"];
function Checkout() {
  _s();
  const outletContext = useOutletContext();
  const {
    activeOrder,
    adjustOrderLine,
    removeItem
  } = outletContext;
  const location = useLocation();
  const {
    t
  } = useTranslation();
  let state = "shipping";
  if (location.pathname === "/checkout/payment") {
    state = "payment";
  } else if (location.pathname.startsWith("/checkout/confirmation")) {
    state = "confirmation";
  }
  let isConfirmationPage = state === "confirmation";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(isConfirmationPage ? "lg:max-w-3xl mx-auto" : "lg:max-w-7xl", "max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "sr-only", children: t("cart.checkout") }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { "aria-label": t("cart.progress"), className: "hidden sm:block pb-8 mb-8 border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { role: "list", className: "flex space-x-4 justify-center", children: steps.map((step, stepIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
      step === state ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-current": "page", className: "text-primary-600", children: t(`checkout.steps.${step}`) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 54,
        columnNumber: 35
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t(`checkout.steps.${step}`) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 56,
        columnNumber: 29
      }, this),
      stepIdx !== steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.ChevronRightIcon, { className: "w-5 h-5 text-gray-300 ml-4", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 58,
        columnNumber: 49
      }, this) : null
    ] }, step, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 53,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: isConfirmationPage ? "lg:col-span-2" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: outletContext }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      !isConfirmationPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 lg:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: t("order.summary") }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartContents, { orderLines: activeOrder?.lines ?? [], currencyCode: activeOrder?.currencyCode, editable: state === "shipping", removeItem, adjustOrderLine }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartTotals, { order: activeOrder }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 68,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(Checkout, "+PSSCcwo/7FbPA44ghVud+aJPBU=", false, function() {
  return [useOutletContext, useLocation, useTranslation];
});
_c = Checkout;
var _c;
$RefreshReg$(_c, "Checkout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Checkout as default
};
//# sourceMappingURL=/build/routes/checkout-FVIHTZOK.js.map
