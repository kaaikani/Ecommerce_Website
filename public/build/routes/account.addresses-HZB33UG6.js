import {
  ErrorMessage
} from "/build/_shared/chunk-36WQ6G5C.js";
import {
  require_i18next
} from "/build/_shared/chunk-QZYG7WHP.js";
import {
  Modal_default
} from "/build/_shared/chunk-4EJOO2IT.js";
import {
  HighlightedButton
} from "/build/_shared/chunk-XVLAQD6G.js";
import {
  Button,
  clsx_m_default
} from "/build/_shared/chunk-PKAD657O.js";
import "/build/_shared/chunk-R5BHNF67.js";
import "/build/_shared/chunk-4KYYPW5T.js";
import "/build/_shared/chunk-6IR2VAGI.js";
import "/build/_shared/chunk-76TTLXDT.js";
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
  Outlet,
  init_esm2 as init_esm,
  useFetcher,
  useLoaderData
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

// app/routes/account.addresses.tsx
init_remix_hmr();
init_esm();

// app/components/account/AddAddressCard.tsx
init_remix_hmr();
var import_outline = __toESM(require_outline(), 1);
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/AddAddressCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/AddAddressCard.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function AddAddressCard() {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { preventScrollReset: true, className: "border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between", to: "/account/addresses/new", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-base-semi", children: t("address.new") }, void 0, false, {
      fileName: "app/components/account/AddAddressCard.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.PlusIcon, { className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/account/AddAddressCard.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/AddAddressCard.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/account/AddAddressCard.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(AddAddressCard, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = AddAddressCard;
var _c;
$RefreshReg$(_c, "AddAddressCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/account/EditAddressCard.tsx
init_remix_hmr();
var import_outline2 = __toESM(require_outline(), 1);
init_esm();
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/EditAddressCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/EditAddressCard.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function EditAddressCard({
  address,
  isActive = false
}) {
  _s2();
  const setShipping = useFetcher();
  const setBilling = useFetcher();
  const deleteAddress = useFetcher();
  const [isDeleteModalVisible, setDeleteModalVisible] = (0, import_react3.useState)(false);
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { isOpen: isDeleteModalVisible, close: () => setDeleteModalVisible(deleteAddress.state === "idle" ? false : true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(deleteAddress.Form, { method: "post", preventScrollReset: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Title, { children: t("address.deleteModal.title") }, void 0, false, {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4 my-4", children: [
        t("address.deleteModal.confirmation"),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: address.id }, void 0, false, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this),
        deleteAddress.data && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorMessage, { heading: t("address.deleteModal.error"), message: deleteAddress.data?.message ?? t("common.defaultError") }, void 0, false, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 52,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "button", onClick: () => setDeleteModalVisible(false), disabled: deleteAddress.state !== "idle", children: t("common.cancel") }, void 0, false, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HighlightedButton, { type: "submit", name: "_action", value: "deleteAddress", disabled: deleteAddress.state !== "idle", isSubmitting: deleteAddress.state !== "idle", children: t("common.yes") }, void 0, false, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/EditAddressCard.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/account/EditAddressCard.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: clsx_m_default("border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between gap-8 transition-colors", {
      "border-gray-900": isActive
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-left text-base-semi", children: address.fullName }, void 0, false, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          address.company && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-small-regular text-gray-700", children: address.company }, void 0, false, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 72,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col text-left text-base-regular mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
              address.streetLine1,
              address.streetLine2 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
                ", ",
                address.streetLine2
              ] }, void 0, true, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 78,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
              address.postalCode,
              ", ",
              address.city
            ] }, void 0, true, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
              address.province && `${address.province}, `,
              address.country?.code?.toUpperCase()
            ] }, void 0, true, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        (address.defaultShippingAddress || address.defaultBillingAddress) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-end text-gray-500 uppercase tracking-wider", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-sm font-medium", children: t("common.default") }, void 0, false, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block text-xs mt-1", children: [
            address.defaultShippingAddress && t("common.shipping"),
            address.defaultShippingAddress && address.defaultBillingAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 97,
                columnNumber: 23
              }, this),
              "&\xA0"
            ] }, void 0, true, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 96,
              columnNumber: 85
            }, this),
            address.defaultBillingAddress && t("common.billing")
          ] }, void 0, true, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 90,
          columnNumber: 81
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col md:flex-row items-start gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { role: "button", preventScrollReset: true, className: "text-gray-700 flex items-center gap-x-2", to: `/account/addresses/${address.id}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.PencilIcon, { className: "w-4 h-4" }, void 0, false, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 108,
              columnNumber: 15
            }, this),
            t("common.edit")
          ] }, void 0, true, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", title: "Delete this address", className: "text-gray-700 flex items-center gap-x-2", disabled: deleteAddress.state !== "idle", onClick: () => setDeleteModalVisible(true), children: [
            deleteAddress.state === "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.TrashIcon, { className: "w-4 h-4" }, void 0, false, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 112,
              columnNumber: 49
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.ArrowPathIcon, { className: "w-4 h-4 animate-spin" }, void 0, false, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 112,
              columnNumber: 95
            }, this),
            t("common.remove")
          ] }, void 0, true, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        (!address.defaultShippingAddress || !address.defaultBillingAddress) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-500 flex gap-4", children: [
          !address.defaultShippingAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(setShipping.Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: address.id }, void 0, false, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 120,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "setDefaultShipping", type: "submit", title: "Set as default shipping address", className: "text-gray-700 flex items-center gap-2", disabled: setShipping.state !== "idle", children: [
              setShipping.state === "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.TruckIcon, { className: "w-4 h-4" }, void 0, false, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 122,
                columnNumber: 55
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.ArrowPathIcon, { className: "w-4 h-4 animate-spin" }, void 0, false, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 122,
                columnNumber: 101
              }, this),
              t("common.shipping")
            ] }, void 0, true, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 121,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 119,
            columnNumber: 53
          }, this),
          !address.defaultBillingAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(setBilling.Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: address.id }, void 0, false, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 128,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "setDefaultBilling", type: "submit", title: "Set as default billing address", className: "text-gray-700 flex items-center gap-2", disabled: setBilling.state !== "idle", children: [
              setBilling.state === "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.CreditCardIcon, { className: "w-4 h-4" }, void 0, false, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 130,
                columnNumber: 54
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.ArrowPathIcon, { className: "w-4 h-4 animate-spin" }, void 0, false, {
                fileName: "app/components/account/EditAddressCard.tsx",
                lineNumber: 130,
                columnNumber: 110
              }, this),
              t("common.billing")
            ] }, void 0, true, {
              fileName: "app/components/account/EditAddressCard.tsx",
              lineNumber: 129,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/account/EditAddressCard.tsx",
            lineNumber: 127,
            columnNumber: 52
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/account/EditAddressCard.tsx",
          lineNumber: 116,
          columnNumber: 83
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/EditAddressCard.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/EditAddressCard.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/EditAddressCard.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s2(EditAddressCard, "FUQX3se3egQHMivceqbuS+St21Y=", false, function() {
  return [useFetcher, useFetcher, useFetcher, useTranslation];
});
_c2 = EditAddressCard;
var _c2;
$RefreshReg$(_c2, "EditAddressCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/account.addresses.tsx
var import_i18next = __toESM(require_i18next(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.addresses.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.addresses.tsx"
  );
  import.meta.hot.lastModified = "1742363235109.9072";
}
function AccountAddresses() {
  _s3();
  const {
    activeCustomerAddresses
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/account.addresses.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddAddressCard, {}, void 0, false, {
        fileName: "app/routes/account.addresses.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      activeCustomerAddresses?.addresses.map((address) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditAddressCard, { address }, address.id, false, {
          fileName: "app/routes/account.addresses.tsx",
          lineNumber: 106,
          columnNumber: 18
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/account.addresses.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.addresses.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.addresses.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_s3(AccountAddresses, "SfgTMsPobhoddelX7vEMsn4yyso=", false, function() {
  return [useLoaderData];
});
_c3 = AccountAddresses;
var _c3;
$RefreshReg$(_c3, "AccountAddresses");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountAddresses as default
};
//# sourceMappingURL=/build/routes/account.addresses-HZB33UG6.js.map
