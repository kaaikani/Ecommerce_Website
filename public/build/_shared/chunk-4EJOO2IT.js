import {
  clsx_m_default
} from "/build/_shared/chunk-PKAD657O.js";
import {
  Je,
  mt
} from "/build/_shared/chunk-R5BHNF67.js";
import {
  require_solid
} from "/build/_shared/chunk-76TTLXDT.js";
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

// app/components/modal/Modal.tsx
init_remix_hmr();
var import_solid = __toESM(require_solid(), 1);

// app/components/modal/modal-context.tsx
init_remix_hmr();
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/modal/modal-context.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/modal/modal-context.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
var ModalContext = (0, import_react.createContext)(null);
var ModalProvider = ({
  children,
  close
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalContext.Provider, { value: {
    close
  }, children }, void 0, false, {
    fileName: "app/components/modal/modal-context.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = ModalProvider;
var useModal = () => {
  _s();
  const context = (0, import_react.useContext)(ModalContext);
  if (context === null) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
_s(useModal, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
$RefreshReg$(_c, "ModalProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/modal/Modal.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/modal/Modal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/modal/Modal.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
var Modal = ({
  isOpen,
  close,
  size = "medium",
  children,
  afterClose,
  afterOpen
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je, { appear: true, show: isOpen, as: import_react3.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt, { as: "div", className: "relative z-[75]", onClose: close, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Child, { as: import_react3.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", afterEnter: afterOpen, afterLeave: afterClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Child, { as: import_react3.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt.Panel, { className: clsx_m_default("flex flex-col justify-start w-full h-full overflow-auto transform bg-white p-10 text-left align-middle shadow-xl transition-all", {
      "max-w-md": size === "small",
      "max-w-xl": size === "medium",
      "max-w-3xl": size === "large"
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalProvider, { close, children }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 44,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c2 = Modal;
var Title = ({
  children
}) => {
  _s2();
  const {
    close
  } = useModal();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt.Title, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-large-semi", children }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: close, type: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid.XMarkIcon, { className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/modal/Modal.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
};
_s2(Title, "i34XfooBCHbV1Uw2gblynO0lPZM=", false, function() {
  return [useModal];
});
_c22 = Title;
var Description = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt.Description, { className: "flex text-small-regular text-gray-700 items-center justify-center pt-2 pb-4 h-full", children }, void 0, false, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
};
_c3 = Description;
var Body = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children }, void 0, false, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
};
_c4 = Body;
var Footer = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-end gap-x-4", children }, void 0, false, {
    fileName: "app/components/modal/Modal.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
};
_c5 = Footer;
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer;
var Modal_default = Modal;
var _c2;
var _c22;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c2, "Modal");
$RefreshReg$(_c22, "Title");
$RefreshReg$(_c3, "Description");
$RefreshReg$(_c4, "Body");
$RefreshReg$(_c5, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Modal_default
};
//# sourceMappingURL=/build/_shared/chunk-4EJOO2IT.js.map
