import {
  Price
} from "/build/_shared/chunk-7HHNXP4R.js";
import {
  useTranslation
} from "/build/_shared/chunk-7LRNVKNK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  Form,
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

// app/components/cart/CartContents.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cart/CartContents.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cart/CartContents.tsx"
  );
  import.meta.hot.lastModified = "1742363235105.9072";
}
function CartContents({
  orderLines,
  currencyCode,
  editable = true,
  adjustOrderLine,
  removeItem
}) {
  _s();
  const {
    t
  } = useTranslation();
  const isEditable = editable !== false;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "-my-6 divide-y divide-gray-200", children: (orderLines ?? []).map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "py-6 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: line.featuredAsset?.preview + "?preset=thumb", alt: line.productVariant.name, className: "w-full h-full object-center object-cover" }, void 0, false, {
      fileName: "app/components/cart/CartContents.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartContents.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex-1 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${line.productVariant.product.slug}`, children: line.productVariant.name }, void 0, false, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 48,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 47,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { priceWithTax: line.linePriceWithTax, currencyCode }, void 0, false, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 52,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartContents.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/cart/CartContents.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex items-center text-sm", children: [
        editable ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `quantity-${line.id}`, className: "mr-2", children: t("common.quantity") }, void 0, false, {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 59,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { disabled: !isEditable, id: `quantity-${line.id}`, name: `quantity-${line.id}`, value: line.quantity, onChange: (e) => adjustOrderLine && adjustOrderLine(line.id, +e.target.value), className: "max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "1" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 63,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "2" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 64,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "3" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 65,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 4, children: "4" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 66,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 5, children: "5" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 67,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 6, children: "6" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 68,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 7, children: "7" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 69,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 8, children: "8" }, void 0, false, {
              fileName: "app/components/cart/CartContents.tsx",
              lineNumber: 70,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 62,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 58,
          columnNumber: 29
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-1", children: t("common.quantity") }, void 0, false, {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 73,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: line.quantity }, void 0, false, {
            fileName: "app/components/cart/CartContents.tsx",
            lineNumber: 74,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 72,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1" }, void 0, false, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: isEditable && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "removeItem", value: line.id, className: "font-medium text-primary-600 hover:text-primary-500", onClick: () => removeItem && removeItem(line.id), children: t("common.remove") }, void 0, false, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 78,
          columnNumber: 34
        }, this) }, void 0, false, {
          fileName: "app/components/cart/CartContents.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartContents.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cart/CartContents.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, line.id, true, {
    fileName: "app/components/cart/CartContents.tsx",
    lineNumber: 39,
    columnNumber: 41
  }, this)) }, void 0, false, {
    fileName: "app/components/cart/CartContents.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/cart/CartContents.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(CartContents, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = CartContents;
var _c;
$RefreshReg$(_c, "CartContents");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CartContents
};
//# sourceMappingURL=/build/_shared/chunk-HEMXXL6Y.js.map
