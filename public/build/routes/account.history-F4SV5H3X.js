import {
  Pagination,
  paginationValidationSchema,
  translatePaginationFrom,
  translatePaginationTo
} from "/build/_shared/chunk-SRIC3HXS.js";
import {
  Price
} from "/build/_shared/chunk-7HHNXP4R.js";
import "/build/_shared/chunk-ZGSQZHKT.js";
import {
  ValidatedForm,
  init_index_esm,
  require_remix_validated_form_with_zod_cjs
} from "/build/_shared/chunk-XPW3HCEW.js";
import "/build/_shared/chunk-2QJY4JOV.js";
import {
  Button
} from "/build/_shared/chunk-PKAD657O.js";
import "/build/_shared/chunk-6IR2VAGI.js";
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
  init_esm2 as init_esm,
  useLoaderData,
  useNavigation,
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

// app/routes/account.history.tsx
init_remix_hmr();
init_esm();

// app/components/account/OrderHistoryItem.tsx
init_remix_hmr();
var import_react = __toESM(require_react(), 1);

// app/components/account/OrderStateBadge.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/OrderStateBadge.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/OrderStateBadge.tsx"
  );
  import.meta.hot.lastModified = "1742363235105.9072";
}
function OrderStateBadge({
  state
}) {
  _s();
  const {
    t
  } = useTranslation();
  let colorClasses = "";
  switch (state) {
    default:
    case "Draft":
    case "AddingItems":
      colorClasses = "bg-gray-100 text-gray-800";
      break;
    case "PaymentAuthorized":
    case "PaymentSettled":
    case "Shipped":
      colorClasses = "bg-blue-100 text-blue-800";
      break;
    case "Delivered":
      colorClasses = "bg-green-100 text-green-800";
      break;
    case "PartiallyShipped":
    case "PartiallyDelivered":
    case "Modifying":
    case "ArrangingPayment":
    case "ArrangingAdditionalPayment":
      colorClasses = "bg-yellow-100 text-yellow-800";
      break;
    case "Cancelled":
      colorClasses = "bg-red-100 text-red-800";
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `text-xs font-medium px-2.5 py-0.5 rounded uppercase whitespace-nowrap ${colorClasses}`, children: t(`order.states.${state}`) ?? t(`order.states.Unknown`) }, void 0, false, {
    fileName: "app/components/account/OrderStateBadge.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(OrderStateBadge, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = OrderStateBadge;
var _c;
$RefreshReg$(_c, "OrderStateBadge");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/account/OrderHistoryItem.tsx
var import_solid = __toESM(require_solid(), 1);
var import_outline = __toESM(require_outline(), 1);
init_esm();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/OrderHistoryItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/OrderHistoryItem.tsx"
  );
  import.meta.hot.lastModified = "1742363235105.9072";
}
function OrderHistoryItem({
  order,
  isInitiallyExpanded = false,
  areDetailsInitiallyExpanded = false,
  className
}) {
  _s2();
  const [isExpanded, setIsExpanded] = (0, import_react.useState)(isInitiallyExpanded);
  const [areDetailsExpanded, setAreDetailsExpanded] = (0, import_react.useState)(areDetailsInitiallyExpanded);
  const [isLineCalcExpanded, setIsLineCalcExpanded] = (0, import_react.useState)(false);
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `border rounded-lg overflow-hidden ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 lg:p-6\n            flex flex-row justify-between items-center\n            bg-gray-50 border-b\n        ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-medium", children: t("order.placedAt") }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-500", title: new Date(order?.orderPlacedAt).toLocaleString(), children: order?.orderPlacedAt ? new Date(order.orderPlacedAt).toLocaleDateString(void 0, {
            day: "numeric",
            month: "long",
            year: "numeric"
          }) : "--" }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-medium", children: t("order.totalSum") }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order?.totalWithTax }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block font-medium", children: t("order.number") }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-500", children: order?.code || "--" }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-4 lg:gap-6 flex flex-col items-end self-stretch justify-between md:flex-row md:items-center self-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OrderStateBadge, { state: order?.state }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", role: "group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { title: t("order.actionsMessage"), className: "bg-white text-sm rounded-r-none border-r-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs hidden", children: t("order.actions") }, void 0, false, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.EllipsisVerticalIcon, { className: "w-5 h-5" }, void 0, false, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { className: "bg-white text-sm rounded-l-none", onClick: () => setIsExpanded(!isExpanded), title: t("order.expand"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid.ChevronRightIcon, { className: `w-5 h-5 transition-transform duration-100 ${isExpanded && "rotate-90"}` }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/OrderHistoryItem.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    isExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
      order?.lines.map((line, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 lg:p-6 border-b flex flex-row gap-8 justify-between group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex justify-center items-center justify gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/products/${line.productVariant.product.slug}`, className: "hover:opacity-50 transition-opacity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: line.featuredAsset?.source, className: "w-24 h-24 object-cover rounded-md" }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 97,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex flex-1 flex-col gap-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/products/${line.productVariant.product.slug}`, className: "text-black text-sm font-semibold line-clamp-3 md:line-clamp-2 max-w-md hover:text-black/50", title: line.productVariant.name, children: line.productVariant.name }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "inline-flex gap-2 items-center w-fit text-gray-500 text-sm mt-1", onClick: () => setIsLineCalcExpanded(!isLineCalcExpanded), children: [
            isLineCalcExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { title: t("common.quantity"), children: line.quantity }, void 0, false, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 107,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-300 select-none", children: "\xD7" }, void 0, false, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 110,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { title: "Price per unit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: line.productVariant.currencyCode, priceWithTax: line.discountedUnitPriceWithTax }, void 0, false, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 112,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 111,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-300 select-none", children: "\u039E" }, void 0, false, {
                fileName: "app/components/account/OrderHistoryItem.tsx",
                lineNumber: 114,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 106,
              columnNumber: 44
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { title: "Subtotal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: line.productVariant.currencyCode, priceWithTax: line.discountedLinePriceWithTax }, void 0, false, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 117,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 116,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 105,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-500 text-xs mt-2 tracking-wide", children: [
            line.fulfillmentLines?.reduce((acc, fLine) => acc + fLine.quantity, 0) === 0 ? t("order.notShipped") : `${line.fulfillmentLines?.reduce((acc, fLine) => acc + fLine.quantity, 0)} ${t("common.or")} ${line.quantity} ${t("order.items.fulfilled")}`,
            line.fulfillmentLines?.filter((fLine) => fLine.quantity > 0).map((fLine, key2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block first:mt-2", title: new Date(fLine.fulfillment.updatedAt).toLocaleString(), children: [
              fLine.fulfillment.state,
              ":",
              " ",
              new Intl.DateTimeFormat(void 0, {
                dateStyle: "medium"
              }).format(new Date(fLine.fulfillment.updatedAt))
            ] }, key2, true, {
              fileName: "app/components/account/OrderHistoryItem.tsx",
              lineNumber: 123,
              columnNumber: 101
            }, this))
          ] }, void 0, true, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 121,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this) }, key, false, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 93,
        columnNumber: 44
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2 lg:py-3 lg:px-6 gap-2 lg:gap-6 grid grid-cols-2 sm:flex justify-end items-center", children: [
        order?.fulfillments?.map((f, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClickCapture: () => alert(`${t("trackAlert")} "${f.trackingCode}"`), className: "text-xs", children: [
          t("order.trackPackage"),
          " ",
          order.fulfillments?.length == 1 ? "" : `#${i + 1}`
        ] }, i, true, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 136,
          columnNumber: 49
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => setAreDetailsExpanded(!areDetailsExpanded), className: "col-start-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs", children: t("order.detailedOverview") }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid.ChevronRightIcon, { className: `w-5 h-5 transition-transform duration-100 ${areDetailsExpanded && "rotate-90"}` }, void 0, false, {
            fileName: "app/components/account/OrderHistoryItem.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      areDetailsExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2 lg:p-3 grid grid-cols-2 gap-1 text-sm max-w-sm self-center md:self-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "font-medium col-span-full", children: t("order.summary") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("order.items.subtotal") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order?.subTotalWithTax }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("order.shippingAndHandling") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 157,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order?.shippingLines.reduce((acc, s) => acc + s.priceWithTax, 0) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 159,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("order.totalWithoutTax") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 162,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order?.taxSummary.reduce((acc, t2) => acc + t2.taxBase, 0) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 164,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 163,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("order.estimatedTax") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order?.taxSummary.reduce((acc, t2) => acc + t2.taxTotal, 0) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 169,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("order.total") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this),
        order?.totalWithTax && order.discounts ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order.totalWithTax - order?.discounts.reduce((acc, curr) => acc + curr.amountWithTax, 0) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 174,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 173,
          columnNumber: 57
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-end", children: "--" }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 175,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: t("order.appliedCoupons") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order?.discounts.reduce((acc, curr) => acc + curr.amountWithTax, 0) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 179,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium", children: t("order.grandTotal") }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: order?.currencyCode, priceWithTax: order?.totalWithTax }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 184,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/account/OrderHistoryItem.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/OrderHistoryItem.tsx",
        lineNumber: 148,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/OrderHistoryItem.tsx",
      lineNumber: 92,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/OrderHistoryItem.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s2(OrderHistoryItem, "ja2yJu3llK3Gmahc0LJqZBRSWBI=", false, function() {
  return [useTranslation];
});
_c2 = OrderHistoryItem;
var _c2;
$RefreshReg$(_c2, "OrderHistoryItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/account.history.tsx
init_index_esm();
var import_with_zod = __toESM(require_remix_validated_form_with_zod_cjs(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.history.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.history.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
var paginationLimitMinimumDefault = 10;
var allowedPaginationLimits = /* @__PURE__ */ new Set([paginationLimitMinimumDefault, 20, 30]);
var orderPaginationSchema = paginationValidationSchema(allowedPaginationLimits);
function AccountHistory() {
  _s3();
  const {
    orderList,
    appliedPaginationLimit,
    appliedPaginationPage
  } = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();
  const {
    t
  } = useTranslation();
  const showingOrdersFrom = translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit);
  const showingOrdersTo = translatePaginationTo(appliedPaginationPage, appliedPaginationLimit, orderList.items.length);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pt-10 relative", children: [
    navigation.state !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute top-0 left-0 w-full h-full z-100 bg-white bg-opacity-75" }, void 0, false, {
      fileName: "app/routes/account.history.tsx",
      lineNumber: 99,
      columnNumber: 39
    }, this),
    orderList.items.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-16 text-3xl text-center italic text-gray-300 select-none flex justify-center items-center", children: orderList.totalItems === 0 ? t("order.historyEmpty") : t("order.historyEnd") }, void 0, false, {
      fileName: "app/routes/account.history.tsx",
      lineNumber: 101,
      columnNumber: 40
    }, this),
    orderList.items?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      OrderHistoryItem,
      {
        order: item,
        isInitiallyExpanded: true,
        className: "mb-10"
      },
      item.code,
      false,
      {
        fileName: "app/routes/account.history.tsx",
        lineNumber: 105,
        columnNumber: 37
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "self-start text-gray-500 text-sm ml-4 lg:ml-6 mt-2", children: [
        "Showing orders ",
        showingOrdersFrom,
        " to ",
        showingOrdersTo,
        " of",
        " ",
        orderList.totalItems
      ] }, void 0, true, {
        fileName: "app/routes/account.history.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ValidatedForm, { validator: (0, import_with_zod.withZod)(paginationValidationSchema(allowedPaginationLimits)), method: "get", onChange: (e) => submit(e.currentTarget, {
        preventScrollReset: true
      }), preventScrollReset: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Pagination, { appliedPaginationLimit, allowedPaginationLimits, totalItems: orderList.totalItems, appliedPaginationPage }, void 0, false, {
        fileName: "app/routes/account.history.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/account.history.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.history.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.history.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s3(AccountHistory, "wnoXUq9Sz/cN0C3hi+ZN6XuB01I=", false, function() {
  return [useLoaderData, useSubmit, useNavigation, useTranslation];
});
_c3 = AccountHistory;
var _c3;
$RefreshReg$(_c3, "AccountHistory");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountHistory as default
};
//# sourceMappingURL=/build/routes/account.history-F4SV5H3X.js.map
