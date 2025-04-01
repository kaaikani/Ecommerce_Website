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
  NavLink,
  Outlet,
  init_esm2 as init_esm,
  useLoaderData,
  useMatches,
  useResolvedPath
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

// app/routes/account.tsx
init_remix_hmr();
var import_solid = __toESM(require_solid(), 1);
init_esm();

// app/components/tabs/TabsContainer.tsx
init_remix_hmr();

// app/components/tabs/Tab.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/tabs/Tab.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/tabs/Tab.tsx"
  );
  import.meta.hot.lastModified = "1742363235107.9072";
}
function Tab({
  Icon,
  text,
  to
}) {
  _s();
  const resolved = useResolvedPath(to);
  const matches = useMatches();
  const isActive = matches.find((m) => m.pathname === resolved.pathname);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: isActive ? `cursor-default` : `cursor-pointer`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to, className: `group w-full gap-x-2 max-w-[12rem] inline-flex items-center justify-around p-4 rounded-t-lg border-b-2 ${isActive ? "text-primary-500 border-primary-500" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: `w-5 h-5 ${isActive ? "text-primary-500" : "text-gray-400 group-hover:text-gray-500"}` }, void 0, false, {
      fileName: "app/components/tabs/Tab.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex-1", children: text }, void 0, false, {
      fileName: "app/components/tabs/Tab.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/tabs/Tab.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/tabs/Tab.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(Tab, "odIckBPyH/JZy4HyUcNxThAudFA=", false, function() {
  return [useResolvedPath, useMatches];
});
_c = Tab;
var _c;
$RefreshReg$(_c, "Tab");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/tabs/TabsContainer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/tabs/TabsContainer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/tabs/TabsContainer.tsx"
  );
  import.meta.hot.lastModified = "1742363235107.9072";
}
function TabsContainer({
  tabs,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-200 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "gap-x-4 grid grid-cols-2 sm:grid-0 sm:flex sm:flex-wrap -mb-px text-sm font-medium text-center text-gray-500", children: tabs.map((props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab, { Icon: props.Icon, text: props.text, to: props.to }, props.text, false, {
      fileName: "app/components/tabs/TabsContainer.tsx",
      lineNumber: 29,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/components/tabs/TabsContainer.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/tabs/TabsContainer.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/tabs/TabsContainer.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = TabsContainer;
var _c2;
$RefreshReg$(_c2, "TabsContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/account.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
function AccountDashboard() {
  _s2();
  const {
    activeCustomer
  } = useLoaderData();
  const {
    firstName,
    lastName
  } = activeCustomer;
  const {
    t
  } = useTranslation();
  const tabs = [{
    Icon: import_solid.UserCircleIcon,
    text: t("account.details"),
    to: "./"
  }, {
    Icon: import_solid.ShoppingBagIcon,
    text: t("account.purchaseHistory"),
    to: "./history"
  }, {
    Icon: import_solid.MapPinIcon,
    text: t("account.addresses"),
    to: "./addresses"
  }, {
    Icon: import_solid.HashtagIcon,
    text: t("account.password"),
    to: "./password"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-6xl xl:mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light text-gray-900 my-8", children: t("account.myAccount") }, void 0, false, {
      fileName: "app/routes/account.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-700 text-lg -mt-4", children: [
      t("account.welcomeBack"),
      ", ",
      firstName,
      " ",
      lastName
    ] }, void 0, true, {
      fileName: "app/routes/account.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", action: "/api/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", className: "underline text-primary-600 hover:text-primary-800", children: t("account.signOut") }, void 0, false, {
      fileName: "app/routes/account.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TabsContainer, { tabs, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/account.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s2(AccountDashboard, "6LxzS9ZKZokvLjJY/Yb8FIsyUps=", false, function() {
  return [useLoaderData, useTranslation];
});
_c3 = AccountDashboard;
var _c3;
$RefreshReg$(_c3, "AccountDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountDashboard as default
};
//# sourceMappingURL=/build/routes/account-WFQEJNVY.js.map
