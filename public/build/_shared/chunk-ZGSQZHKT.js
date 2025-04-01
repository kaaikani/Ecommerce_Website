import {
  FormElement_default,
  init_index_esm,
  useField
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
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/Select.tsx
init_remix_hmr();
var import_react = __toESM(require_react(), 1);
init_index_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Select.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
var Select = _s(import_react.default.forwardRef(_c = _s(({
  name,
  label,
  required,
  defaultValue,
  placeholder = "",
  noPlaceholder = false,
  children,
  ...props
}, ref) => {
  _s();
  const {
    getInputProps
  } = useField(name);
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormElement_default, { name, label, required, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { ref, ...props, defaultValue, className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm", ...getInputProps({}), children: [
    !noPlaceholder && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: placeholder ?? t("common.select") }, void 0, false, {
      fileName: "app/components/Select.tsx",
      lineNumber: 45,
      columnNumber: 30
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Select.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Select.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}, "BDUiOjqmRDFk8VO3WJUiHItcwJg=", false, function() {
  return [useField, useTranslation];
})), "BDUiOjqmRDFk8VO3WJUiHItcwJg=", false, function() {
  return [useField, useTranslation];
});
_c2 = Select;
var _c;
var _c2;
$RefreshReg$(_c, "Select$React.forwardRef");
$RefreshReg$(_c2, "Select");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Select
};
//# sourceMappingURL=/build/_shared/chunk-ZGSQZHKT.js.map
