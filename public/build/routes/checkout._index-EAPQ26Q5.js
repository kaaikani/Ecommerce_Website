import {
  shippingFormDataIsValid
} from "/build/_shared/chunk-IN422JHN.js";
import {
  classNames
} from "/build/_shared/chunk-WYO5ATGT.js";
import "/build/_shared/chunk-J34O3NPF.js";
import {
  Price
} from "/build/_shared/chunk-7HHNXP4R.js";
import "/build/_shared/chunk-3W7WW5ZQ.js";
import "/build/_shared/chunk-2S5KDW4V.js";
import {
  $,
  A,
  C,
  F2 as F,
  F3 as F2,
  I,
  I2,
  L,
  N,
  e2 as e,
  h2 as h,
  k,
  o,
  o2,
  p,
  r,
  s,
  s2,
  s3,
  u,
  y
} from "/build/_shared/chunk-4KYYPW5T.js";
import "/build/_shared/chunk-6IR2VAGI.js";
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
  Form,
  init_esm2 as init_esm,
  useLoaderData,
  useNavigate,
  useOutletContext
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

// app/routes/checkout._index.tsx
init_remix_hmr();
var import_react8 = __toESM(require_react(), 1);
var import_solid3 = __toESM(require_solid(), 1);
init_esm();

// app/components/account/AddressForm.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/AddressForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/AddressForm.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function AddressForm({
  address,
  defaultFullName,
  availableCountries
}) {
  _s();
  const {
    t: t2
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "fullName", className: "block text-sm font-medium text-gray-700", children: t2("account.fullName") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "fullName", name: "fullName", defaultValue: defaultFullName, autoComplete: "given-name", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700", children: t2("address.company") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "company", id: "company", defaultValue: address?.company ?? "", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "streetLine1", className: "block text-sm font-medium text-gray-700", children: t2("address.streetLine1") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "streetLine1", id: "streetLine1", defaultValue: address?.streetLine1 ?? "", autoComplete: "street-address", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "streetLine2", className: "block text-sm font-medium text-gray-700", children: t2("address.streetLine2") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "streetLine2", id: "streetLine2", defaultValue: address?.streetLine2 ?? "", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", className: "block text-sm font-medium text-gray-700", children: t2("address.city") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "city", id: "city", autoComplete: "address-level2", defaultValue: address?.city ?? "", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "countryCode", className: "block text-sm font-medium text-gray-700", children: t2("address.country") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: availableCountries && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "countryCode", name: "countryCode", defaultValue: address?.countryCode ?? "US", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm", children: availableCountries.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.code, children: item.name }, item.id, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 84,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 83,
        columnNumber: 34
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "province", className: "block text-sm font-medium text-gray-700", children: t2("address.province") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "province", id: "province", defaultValue: address?.province ?? "", autoComplete: "address-level1", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "postalCode", className: "block text-sm font-medium text-gray-700", children: t2("address.postalCode") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "postalCode", id: "postalCode", defaultValue: address?.postalCode ?? "", autoComplete: "postal-code", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phoneNumber", className: "block text-sm font-medium text-gray-700", children: t2("address.phoneNumber") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "phoneNumber", id: "phoneNumber", defaultValue: address?.phoneNumber ?? "", autoComplete: "tel", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/AddressForm.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(AddressForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = AddressForm;
var _c;
$RefreshReg$(_c, "AddressForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/checkout/ShippingMethodSelector.tsx
init_remix_hmr();

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react = __toESM(require_react(), 1);
function F3({ container: e3, accept: t2, walk: r2, enabled: c2 = true }) {
  let o4 = (0, import_react.useRef)(t2), l = (0, import_react.useRef)(r2);
  (0, import_react.useEffect)(() => {
    o4.current = t2, l.current = r2;
  }, [t2, r2]), s(() => {
    if (!e3 || !c2)
      return;
    let n = e(e3);
    if (!n)
      return;
    let f4 = o4.current, p4 = l.current, d = Object.assign((i) => f4(i), { acceptNode: f4 }), u3 = n.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, d, false);
    for (; u3.nextNode(); )
      p4(u3.currentNode);
  }, [e3, c2, o4, l]);
}

// node_modules/@headlessui/react/dist/utils/form.js
function e2(n = {}, r2 = null, t2 = []) {
  for (let [i, o4] of Object.entries(n))
    f(t2, s4(r2, i), o4);
  return t2;
}
function s4(n, r2) {
  return n ? n + "[" + r2 + "]" : r2;
}
function f(n, r2, t2) {
  if (Array.isArray(t2))
    for (let [i, o4] of t2.entries())
      f(n, s4(r2, i.toString()), o4);
  else
    t2 instanceof Date ? n.push([r2, t2.toISOString()]) : typeof t2 == "boolean" ? n.push([r2, t2 ? "1" : "0"]) : typeof t2 == "string" ? n.push([r2, t2]) : typeof t2 == "number" ? n.push([r2, `${t2}`]) : t2 == null ? n.push([r2, ""]) : e2(t2, r2, n);
}
function p2(n) {
  var t2;
  let r2 = (t2 = n == null ? void 0 : n.form) != null ? t2 : n.closest("form");
  if (!!r2) {
    for (let i of r2.elements)
      if (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image") {
        i.click();
        return;
      }
  }
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T(l, r2, c2) {
  let [i, s5] = (0, import_react2.useState)(c2), e3 = l !== void 0, t2 = (0, import_react2.useRef)(e3), u3 = (0, import_react2.useRef)(false), d = (0, import_react2.useRef)(false);
  return e3 && !t2.current && !u3.current ? (u3.current = true, t2.current = e3, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e3 && t2.current && !d.current && (d.current = true, t2.current = e3, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e3 ? l : i, o((n) => (e3 || s5(n), r2 == null ? void 0 : r2(n)))];
}

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react3 = __toESM(require_react(), 1);
function b(g2 = 0) {
  let [r2, l] = (0, import_react3.useState)(g2), u3 = (0, import_react3.useCallback)((e3) => l((a) => a | e3), [r2]), n = (0, import_react3.useCallback)((e3) => Boolean(r2 & e3), [r2]), o4 = (0, import_react3.useCallback)((e3) => l((a) => a & ~e3), [l]), s5 = (0, import_react3.useCallback)((e3) => l((a) => a ^ e3), [l]);
  return { addFlag: u3, hasFlag: n, removeFlag: o4, toggleFlag: s5 };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react4 = __toESM(require_react(), 1);
var u2 = (0, import_react4.createContext)(null);
function c() {
  let n = (0, import_react4.useContext)(u2);
  if (n === null) {
    let r2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r2, c), r2;
  }
  return n;
}
function M() {
  let [n, r2] = (0, import_react4.useState)([]);
  return [n.length > 0 ? n.join(" ") : void 0, (0, import_react4.useMemo)(() => function(e3) {
    let o4 = o((l) => (r2((t2) => [...t2, l]), () => r2((t2) => {
      let i = t2.slice(), a = i.indexOf(l);
      return a !== -1 && i.splice(a, 1), i;
    }))), s5 = (0, import_react4.useMemo)(() => ({ register: o4, slot: e3.slot, name: e3.name, props: e3.props }), [o4, e3.slot, e3.name, e3.props]);
    return import_react4.default.createElement(u2.Provider, { value: s5 }, e3.children);
  }, [r2])];
}
var h2 = "label";
var F4 = C(function(r2, d) {
  let e3 = I(), { id: o4 = `headlessui-label-${e3}`, passive: s5 = false, ...l } = r2, t2 = c(), i = y(d);
  s(() => t2.register(o4), [o4, t2.register]);
  let a = { ref: i, ...t2.props, id: o4 };
  return s5 && ("onClick" in a && delete a.onClick, "onClick" in l && delete l.onClick), $({ ourProps: a, theirProps: l, slot: t2.slot || {}, defaultTag: h2, name: t2.name || "Label" });
});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var he = ((t2) => (t2[t2.RegisterOption = 0] = "RegisterOption", t2[t2.UnregisterOption = 1] = "UnregisterOption", t2))(he || {});
var ke = { [0](n, r2) {
  let t2 = [...n.options, { id: r2.id, element: r2.element, propsRef: r2.propsRef }];
  return { ...n, options: A(t2, (d) => d.element.current) };
}, [1](n, r2) {
  let t2 = n.options.slice(), d = n.options.findIndex((c2) => c2.id === r2.id);
  return d === -1 ? n : (t2.splice(d, 1), { ...n, options: t2 });
} };
var $2 = (0, import_react5.createContext)(null);
$2.displayName = "RadioGroupDataContext";
function ne(n) {
  let r2 = (0, import_react5.useContext)($2);
  if (r2 === null) {
    let t2 = new Error(`<${n} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, ne), t2;
  }
  return r2;
}
var V = (0, import_react5.createContext)(null);
V.displayName = "RadioGroupActionsContext";
function ie(n) {
  let r2 = (0, import_react5.useContext)(V);
  if (r2 === null) {
    let t2 = new Error(`<${n} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, ie), t2;
  }
  return r2;
}
function Fe(n, r2) {
  return u(r2.type, ke, n, r2);
}
var Le = "div";
var Ce = C(function(r2, t2) {
  let d = I(), { id: c2 = `headlessui-radiogroup-${d}`, value: D, defaultValue: O, name: I3, onChange: E2, by: G = (e3, i) => e3 === i, disabled: h3 = false, ...U } = r2, T2 = o(typeof G == "string" ? (e3, i) => {
    let o4 = G;
    return (e3 == null ? void 0 : e3[o4]) === (i == null ? void 0 : i[o4]);
  } : G), [k2, F5] = (0, import_react5.useReducer)(Fe, { options: [] }), a = k2.options, [M2, N2] = M(), [m4, L3] = k(), C2 = (0, import_react5.useRef)(null), W = y(C2, t2), [l, x] = T(D, E2, O), s5 = (0, import_react5.useMemo)(() => a.find((e3) => !e3.propsRef.current.disabled), [a]), b3 = (0, import_react5.useMemo)(() => a.some((e3) => T2(e3.propsRef.current.value, l)), [a, l]), u3 = o((e3) => {
    var o4;
    if (h3 || T2(e3, l))
      return false;
    let i = (o4 = a.find((f4) => T2(f4.propsRef.current.value, e3))) == null ? void 0 : o4.propsRef.current;
    return i != null && i.disabled ? false : (x == null || x(e3), true);
  });
  F3({ container: C2.current, accept(e3) {
    return e3.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e3) {
    e3.setAttribute("role", "none");
  } });
  let K = o((e3) => {
    let i = C2.current;
    if (!i)
      return;
    let o4 = e(i), f4 = a.filter((p4) => p4.propsRef.current.disabled === false).map((p4) => p4.element.current);
    switch (e3.key) {
      case o2.Enter:
        p2(e3.currentTarget);
        break;
      case o2.ArrowLeft:
      case o2.ArrowUp:
        if (e3.preventDefault(), e3.stopPropagation(), I2(f4, L.Previous | L.WrapAround) === N.Success) {
          let y2 = a.find((j) => j.element.current === (o4 == null ? void 0 : o4.activeElement));
          y2 && u3(y2.propsRef.current.value);
        }
        break;
      case o2.ArrowRight:
      case o2.ArrowDown:
        if (e3.preventDefault(), e3.stopPropagation(), I2(f4, L.Next | L.WrapAround) === N.Success) {
          let y2 = a.find((j) => j.element.current === (o4 == null ? void 0 : o4.activeElement));
          y2 && u3(y2.propsRef.current.value);
        }
        break;
      case o2.Space:
        {
          e3.preventDefault(), e3.stopPropagation();
          let p4 = a.find((y2) => y2.element.current === (o4 == null ? void 0 : o4.activeElement));
          p4 && u3(p4.propsRef.current.value);
        }
        break;
    }
  }), w = o((e3) => (F5({ type: 0, ...e3 }), () => F5({ type: 1, id: e3.id }))), R = (0, import_react5.useMemo)(() => ({ value: l, firstOption: s5, containsCheckedOption: b3, disabled: h3, compare: T2, ...k2 }), [l, s5, b3, h3, T2, k2]), S = (0, import_react5.useMemo)(() => ({ registerOption: w, change: u3 }), [w, u3]), ae = { ref: W, id: c2, role: "radiogroup", "aria-labelledby": M2, "aria-describedby": m4, onKeyDown: K }, le = (0, import_react5.useMemo)(() => ({ value: l }), [l]), _ = (0, import_react5.useRef)(null), pe = p();
  return (0, import_react5.useEffect)(() => {
    !_.current || O !== void 0 && pe.addEventListener(_.current, "reset", () => {
      u3(O);
    });
  }, [_, u3]), import_react5.default.createElement(L3, { name: "RadioGroup.Description" }, import_react5.default.createElement(N2, { name: "RadioGroup.Label" }, import_react5.default.createElement(V.Provider, { value: S }, import_react5.default.createElement($2.Provider, { value: R }, I3 != null && l != null && e2({ [I3]: l }).map(([e3, i], o4) => import_react5.default.createElement(h, { features: s3.Hidden, ref: o4 === 0 ? (f4) => {
    var p4;
    _.current = (p4 = f4 == null ? void 0 : f4.closest("form")) != null ? p4 : null;
  } : void 0, ...F({ key: e3, as: "input", type: "radio", checked: i != null, hidden: true, readOnly: true, name: e3, value: i }) })), $({ ourProps: ae, theirProps: U, slot: le, defaultTag: Le, name: "RadioGroup" })))));
});
var xe = ((t2) => (t2[t2.Empty = 1] = "Empty", t2[t2.Active = 2] = "Active", t2))(xe || {});
var we = "div";
var Ie = C(function(r2, t2) {
  var w;
  let d = I(), { id: c2 = `headlessui-radiogroup-option-${d}`, value: D, disabled: O = false, ...I3 } = r2, E2 = (0, import_react5.useRef)(null), G = y(E2, t2), [h3, U] = M(), [T2, k2] = k(), { addFlag: F5, removeFlag: a, hasFlag: M2 } = b(1), N2 = s2({ value: D, disabled: O }), m4 = ne("RadioGroup.Option"), L3 = ie("RadioGroup.Option");
  s(() => L3.registerOption({ id: c2, element: E2, propsRef: N2 }), [c2, L3, E2, r2]);
  let C2 = o((R) => {
    var S;
    if (r(R.currentTarget))
      return R.preventDefault();
    !L3.change(D) || (F5(2), (S = E2.current) == null || S.focus());
  }), W = o((R) => {
    if (r(R.currentTarget))
      return R.preventDefault();
    F5(2);
  }), l = o(() => a(2)), x = ((w = m4.firstOption) == null ? void 0 : w.id) === c2, s5 = m4.disabled || O, b3 = m4.compare(m4.value, D), u3 = { ref: G, id: c2, role: "radio", "aria-checked": b3 ? "true" : "false", "aria-labelledby": h3, "aria-describedby": T2, "aria-disabled": s5 ? true : void 0, tabIndex: (() => s5 ? -1 : b3 || !m4.containsCheckedOption && x ? 0 : -1)(), onClick: s5 ? void 0 : C2, onFocus: s5 ? void 0 : W, onBlur: s5 ? void 0 : l }, K = (0, import_react5.useMemo)(() => ({ checked: b3, disabled: s5, active: M2(2) }), [b3, s5, M2]);
  return import_react5.default.createElement(k2, { name: "RadioGroup.Description" }, import_react5.default.createElement(U, { name: "RadioGroup.Label" }, $({ ourProps: u3, theirProps: I3, slot: K, defaultTag: we, name: "RadioGroup.Option" })));
});
var ut = Object.assign(Ce, { Option: Ie, Label: F4, Description: F2 });

// app/components/checkout/ShippingMethodSelector.tsx
var import_solid = __toESM(require_solid(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/checkout/ShippingMethodSelector.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/checkout/ShippingMethodSelector.tsx"
  );
  import.meta.hot.lastModified = "1742363235105.9072";
}
function ShippingMethodSelector({
  eligibleShippingMethods,
  currencyCode,
  shippingMethodId,
  onChange
}) {
  _s2();
  const {
    t: t2
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ut, { value: shippingMethodId, onChange, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ut.Label, { className: "text-lg font-medium text-gray-900", children: t2("checkout.deliveryMethod") }, void 0, false, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: eligibleShippingMethods.map((shippingMethod) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ut.Option, { value: shippingMethod.id, className: ({
      checked,
      active
    }) => classNames(checked ? "border-transparent" : "border-gray-300", active ? "ring-2 ring-primary-500" : "", "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"), children: ({
      checked,
      active
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex-1 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ut.Label, { as: "span", className: "block text-sm font-medium text-gray-900", children: shippingMethod.name }, void 0, false, {
          fileName: "app/components/checkout/ShippingMethodSelector.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ut.Description, { as: "span", className: "mt-6 text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { priceWithTax: shippingMethod.priceWithTax, currencyCode }, void 0, false, {
          fileName: "app/components/checkout/ShippingMethodSelector.tsx",
          lineNumber: 57,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/checkout/ShippingMethodSelector.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      checked ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid.CheckCircleIcon, { className: "h-5 w-5 text-primary-600", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 61,
        columnNumber: 28
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: classNames(active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "absolute -inset-px rounded-lg pointer-events-none"), "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 50,
      columnNumber: 15
    }, this) }, shippingMethod.id, false, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 43,
      columnNumber: 56
    }, this)) }, void 0, false, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/checkout/ShippingMethodSelector.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s2(ShippingMethodSelector, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c2 = ShippingMethodSelector;
var _c2;
$RefreshReg$(_c2, "ShippingMethodSelector");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/checkout/ShippingAddressSelector.tsx
init_remix_hmr();
var import_solid2 = __toESM(require_solid(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/checkout/ShippingAddressSelector.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/checkout/ShippingAddressSelector.tsx"
  );
  import.meta.hot.lastModified = "1742363235105.9072";
}
function ShippingAddressSelector({
  addresses,
  selectedAddressIndex,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ut, { value: selectedAddressIndex, onChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: (addresses || []).map((address, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ut.Option, { value: index, className: ({
    checked,
    active
  }) => classNames(checked ? "border-transparent" : "border-gray-300", active ? "ring-2 ring-primary-500" : "", "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"), children: ({
    checked,
    active
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex-1 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ut.Label, { as: "span", className: "block text-sm font-medium text-gray-900", children: [
        address.streetLine1,
        ", ",
        address.postalCode
      ] }, void 0, true, {
        fileName: "app/components/checkout/ShippingAddressSelector.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ut.Description, { as: "span", className: "mt-6 text-sm text-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.streetLine1 }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.streetLine2 }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.city }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.province }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 49,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.postalCode }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.country.name }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/checkout/ShippingAddressSelector.tsx",
        lineNumber: 45,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/checkout/ShippingAddressSelector.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 40,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    checked ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_solid2.CheckCircleIcon, { className: "h-5 w-5 text-primary-600", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 56,
      columnNumber: 28
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: classNames(active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "absolute -inset-px rounded-lg pointer-events-none"), "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 38,
    columnNumber: 15
  }, this) }, index, false, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 31,
    columnNumber: 52
  }, this)) }, void 0, false, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c3 = ShippingAddressSelector;
var _c3;
$RefreshReg$(_c3, "ShippingAddressSelector");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/checkout._index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/checkout._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout._index.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
function CheckoutShipping() {
  _s3();
  const {
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error
  } = useLoaderData();
  const {
    activeOrderFetcher,
    activeOrder
  } = useOutletContext();
  const [customerFormChanged, setCustomerFormChanged] = (0, import_react8.useState)(false);
  const [addressFormChanged, setAddressFormChanged] = (0, import_react8.useState)(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = (0, import_react8.useState)(0);
  let navigate = useNavigate();
  const {
    t: t2
  } = useTranslation();
  const {
    customer,
    shippingAddress
  } = activeOrder ?? {};
  const isSignedIn = !!activeCustomer?.id;
  const addresses = activeCustomer?.addresses ?? [];
  const defaultFullName = shippingAddress?.fullName ?? (customer ? `${customer.firstName} ${customer.lastName}` : ``);
  const canProceedToPayment = customer && (shippingAddress?.streetLine1 && shippingAddress?.postalCode || selectedAddressIndex != null) && activeOrder?.shippingLines?.length && activeOrder?.lines?.length;
  const submitCustomerForm = (event) => {
    const formData = new FormData(event.currentTarget);
    const {
      emailAddress,
      firstName,
      lastName
    } = Object.fromEntries(formData.entries());
    const isValid = event.currentTarget.checkValidity();
    if (customerFormChanged && isValid && emailAddress && firstName && lastName) {
      activeOrderFetcher.submit(formData, {
        method: "post",
        action: "/api/active-order"
      });
      setCustomerFormChanged(false);
    }
  };
  const submitAddressForm = (event) => {
    const formData = new FormData(event.currentTarget);
    const isValid = event.currentTarget.checkValidity();
    if (addressFormChanged && isValid) {
      setShippingAddress(formData);
    }
  };
  const submitSelectedAddress = (index) => {
    const selectedAddress = activeCustomer?.addresses?.[index];
    if (selectedAddress) {
      setSelectedAddressIndex(index);
      const formData = new FormData();
      Object.keys(selectedAddress).forEach((key) => formData.append(key, selectedAddress[key]));
      formData.append("countryCode", selectedAddress.country.code);
      formData.append("action", "setCheckoutShipping");
      setShippingAddress(formData);
    }
  };
  function setShippingAddress(formData) {
    if (shippingFormDataIsValid(formData)) {
      activeOrderFetcher.submit(formData, {
        method: "post",
        action: "/api/active-order"
      });
      setAddressFormChanged(false);
    }
  }
  const submitSelectedShippingMethod = (value) => {
    if (value) {
      activeOrderFetcher.submit({
        action: "setShippingMethod",
        shippingMethodId: value
      }, {
        method: "post",
        action: "/api/active-order"
      });
    }
  };
  function navigateToPayment() {
    navigate("./payment");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: t2("checkout.detailsTitle") }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this),
      isSignedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-gray-600", children: [
          customer?.firstName,
          " ",
          customer?.lastName
        ] }, void 0, true, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: customer?.emailAddress }, void 0, false, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 161,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", action: "/api/active-order", onBlur: submitCustomerForm, onChange: () => setCustomerFormChanged(true), hidden: isSignedIn, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "action", value: "setOrderCustomer" }, void 0, false, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "emailAddress", className: "block text-sm font-medium text-gray-700", children: t2("account.emailAddress") }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "email", id: "emailAddress", name: "emailAddress", autoComplete: "email", defaultValue: customer?.emailAddress, className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          error?.errorCode === "EMAIL_ADDRESS_CONFLICT_ERROR" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-sm text-red-600", id: "email-error", children: error.message }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 175,
            columnNumber: 71
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700", children: t2("account.firstName") }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 181,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "firstName", name: "firstName", autoComplete: "given-name", defaultValue: customer?.firstName, className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 185,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 184,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700", children: t2("account.lastName") }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 190,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "lastName", name: "lastName", autoComplete: "family-name", defaultValue: customer?.lastName, className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 193,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 166,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", action: "/api/active-order", onBlur: submitAddressForm, onChange: () => setAddressFormChanged(true), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "action", value: "setCheckoutShipping" }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: t2("checkout.shippingTitle") }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      isSignedIn && activeCustomer.addresses?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ShippingAddressSelector, { addresses: activeCustomer.addresses, selectedAddressIndex, onChange: submitSelectedAddress }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 208,
        columnNumber: 59
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AddressForm, { availableCountries: activeOrder ? availableCountries : void 0, address: shippingAddress, defaultFullName }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 210,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ShippingMethodSelector, { eligibleShippingMethods, currencyCode: activeOrder?.currencyCode, shippingMethodId: activeOrder?.shippingLines[0]?.shippingMethod.id ?? "", onChange: submitSelectedShippingMethod }, void 0, false, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 214,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", disabled: !canProceedToPayment, onClick: navigateToPayment, className: classNames(canProceedToPayment ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400", "flex w-full items-center justify-center space-x-2 mt-24 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_solid3.LockClosedIcon, { className: "w-5 h-5" }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: t2("checkout.goToPayment") }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout._index.tsx",
    lineNumber: 155,
    columnNumber: 10
  }, this);
}
_s3(CheckoutShipping, "/BqNhZzIAIFPjsHoZn9yOKLct+E=", false, function() {
  return [useLoaderData, useOutletContext, useNavigate, useTranslation];
});
_c4 = CheckoutShipping;
var _c4;
$RefreshReg$(_c4, "CheckoutShipping");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CheckoutShipping as default
};
//# sourceMappingURL=/build/routes/checkout._index-EAPQ26Q5.js.map
