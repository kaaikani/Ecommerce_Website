import {
  Input
} from "/build/_shared/chunk-QC532LL5.js";
import {
  Select
} from "/build/_shared/chunk-ZGSQZHKT.js";
import {
  ValidatedForm,
  init_index_esm,
  require_remix_validated_form_with_zod_cjs,
  z
} from "/build/_shared/chunk-XPW3HCEW.js";
import {
  useTranslation
} from "/build/_shared/chunk-7LRNVKNK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/account/CustomerAddressForm.tsx
init_remix_hmr();
var import_with_zod = __toESM(require_remix_validated_form_with_zod_cjs(), 1);
init_index_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/CustomerAddressForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/CustomerAddressForm.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
var validator = (0, import_with_zod.withZod)(z.object({
  fullName: z.string().min(1, {
    message: "Name is required"
  }),
  city: z.string(),
  countryCode: z.string().min(1, {
    message: "Country is required"
  }),
  postalCode: z.string(),
  province: z.string(),
  streetLine1: z.string().min(1, {
    message: "Address is required"
  }),
  streetLine2: z.string(),
  phone: z.string(),
  company: z.string()
}));
function CustomerAddressForm({
  address,
  formRef,
  submit,
  availableCountries
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedForm, { id: "editAddressForm", validator, formRef, method: "post", onSubmit: submit, defaultValues: {
    fullName: address?.fullName || void 0,
    city: address?.city || void 0,
    streetLine1: address?.streetLine1 || void 0,
    streetLine2: address?.streetLine2 || void 0,
    countryCode: address?.country?.code || void 0,
    postalCode: address?.postalCode || void 0,
    phone: address?.phoneNumber || void 0,
    company: address?.company || void 0,
    province: address?.province || void 0
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "updateAddress" }, void 0, false, {
      fileName: "app/components/account/CustomerAddressForm.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-2 my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("account.fullName"), name: "fullName", required: true, autoComplete: "full-name" }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("address.company"), name: "company" }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("address.streetLine1"), name: "streetLine1", required: true, autoComplete: "address-line1" }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("address.streetLine2"), name: "streetLine2", autoComplete: "address-line2" }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-[144px_1fr] gap-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("address.postalCode"), name: "postalCode", required: true, autoComplete: "postal-code" }, void 0, false, {
          fileName: "app/components/account/CustomerAddressForm.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("address.city"), name: "city", required: true, autoComplete: "locality" }, void 0, false, {
          fileName: "app/components/account/CustomerAddressForm.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("address.province"), name: "province", autoComplete: "address-level1" }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "countryCode", autoComplete: "country", placeholder: t("address.selectCountry"), required: true, label: "Country", children: availableCountries?.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: country.code, children: country.name }, country.id, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 80,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("address.phoneNumber"), name: "phone", autoComplete: "phone" }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", hidden: true }, void 0, false, {
        fileName: "app/components/account/CustomerAddressForm.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/CustomerAddressForm.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/CustomerAddressForm.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(CustomerAddressForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = CustomerAddressForm;
var _c;
$RefreshReg$(_c, "CustomerAddressForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CustomerAddressForm
};
//# sourceMappingURL=/build/_shared/chunk-Q7ME2VZG.js.map
