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
  require_outline
} from "/build/_shared/chunk-L7FVEPUN.js";
import {
  useTranslation
} from "/build/_shared/chunk-7LRNVKNK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  init_esm2 as init_esm,
  useLoaderData,
  useRevalidator
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

// app/routes/checkout.confirmation.$orderCode.tsx
init_remix_hmr();
init_esm();
var import_outline = __toESM(require_outline(), 1);
var import_solid = __toESM(require_solid(), 1);
init_esm();
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/checkout.confirmation.$orderCode.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout.confirmation.$orderCode.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
function CheckoutConfirmation() {
  _s();
  const {
    order,
    error
  } = useLoaderData();
  const revalidator = useRevalidator();
  const [retries, setRetries] = (0, import_react3.useState)(1);
  const {
    t
  } = useTranslation();
  const orderNotFound = !order && !error;
  const orderErrored = !order && error;
  const maxRetries = 5;
  const retriesExhausted = retries >= maxRetries;
  const retryTimeout = 2500;
  const retry = () => {
    if (!window)
      return;
    setRetries(retries + 1);
    window.setTimeout(() => {
      if (retries > maxRetries)
        return;
      revalidator.revalidate();
    }, retryTimeout);
  };
  (0, import_react3.useEffect)(() => {
    if (orderErrored) {
      retry();
    }
  }, [order]);
  (0, import_react3.useEffect)(() => {
    if (revalidator.state === "idle" && orderErrored && retries <= maxRetries && retries > 1) {
      retry();
    }
  }, [revalidator.state]);
  if (orderNotFound) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderNotFound") }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 85,
      columnNumber: 12
    }, this);
  }
  if (orderErrored && retriesExhausted) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.XCircleIcon, { className: "text-red-600 w-8 h-8 sm:w-12 sm:h-12" }, void 0, false, {
          fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("checkout.orderErrorTitle") }, void 0, false, {
          fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700", children: t("checkout.orderErrorMessage") }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 92,
      columnNumber: 12
    }, this);
  }
  if (orderErrored) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderProcessing") }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 103,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.CheckCircleIcon, { className: "text-green-600 w-8 h-8 sm:w-12 sm:h-12" }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("order.summary") }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700", children: [
      t("checkout.orderSuccessMessage"),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: order.code }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    order.active && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-blue-50 p-4 my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.InformationCircleIcon, { className: "h-5 w-5 text-blue-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 121,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-700", children: t("checkout.paymentMessage") }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 118,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartContents, { orderLines: order.lines, currencyCode: order.currencyCode, editable: false }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartTotals, { order }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(CheckoutConfirmation, "tvqwXa0ottJT9EtgLm+ecCVIk3k=", false, function() {
  return [useLoaderData, useRevalidator, useTranslation];
});
_c = CheckoutConfirmation;
var _c;
$RefreshReg$(_c, "CheckoutConfirmation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CheckoutConfirmation as default
};
//# sourceMappingURL=/build/routes/checkout.confirmation.$orderCode-FWQFOQVA.js.map
