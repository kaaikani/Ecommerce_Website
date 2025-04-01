import {
  Button
} from "/build/_shared/chunk-PKAD657O.js";
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
  Link,
  init_esm2 as init_esm,
  useFetcher,
  useSearchParams
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

// app/routes/sign-in.tsx
init_remix_hmr();
init_esm();
var import_solid = __toESM(require_solid(), 1);
var import_solid2 = __toESM(require_solid(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/sign-in.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sign-in.tsx"
  );
  import.meta.hot.lastModified = "1742363235111.9072";
}
function SignInPage() {
  _s();
  const [searchParams] = useSearchParams();
  const login = useFetcher();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.signInTitle") }, void 0, false, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/sign-up", className: "font-medium text-primary-600 hover:text-primary-500", children: t("account.register") }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: t("vendure.demoCredentials") }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          t("account.emailAddress"),
          ": ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "test@vendure.io" }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          t("account.password"),
          ": ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "test" }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 84,
            columnNumber: 42
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(login.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { disabled: login.state !== "idle", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: searchParams.get("redirectTo") ?? void 0 }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: t("account.emailAddress") }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 91,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, defaultValue: "test@vendure.io", placeholder: t("account.emailAddress"), className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed" }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 95,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: t("account.password") }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, placeholder: t("account.password"), defaultValue: "test", className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed" }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 104,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "rememberMe", name: "rememberMe", type: "checkbox", className: "h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:bg-gray-300 disabled:cursor-not-allowed", defaultChecked: true }, void 0, false, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "rememberMe", className: "ml-2 block text-sm text-gray-900", children: t("account.rememberMe") }, void 0, false, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 111,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "font-medium text-primary-600 hover:text-primary-500", children: t("account.forgotPassword") }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 117,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 116,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this),
        login.data && login.state === "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 126,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 125,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: t("account.errorSignIn") }, void 0, false, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 129,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-red-700 mt-2", children: login.data.message }, void 0, false, {
              fileName: "app/routes/sign-in.tsx",
              lineNumber: 132,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 128,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 124,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 123,
          columnNumber: 58
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex gap-4 items-center", children: [
          login.state !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid2.ArrowPathIcon, { className: "animate-spin h-5 w-5 text-gray-500" }, void 0, false, {
            fileName: "app/routes/sign-in.tsx",
            lineNumber: 142,
            columnNumber: 50
          }, this),
          t("account.signIn")
        ] }, void 0, true, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 141,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 140,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/sign-in.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 88,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(SignInPage, "1IZYs5YoaHUUV7tWy4lqQt1lkVA=", false, function() {
  return [useSearchParams, useFetcher, useTranslation];
});
_c = SignInPage;
var _c;
$RefreshReg$(_c, "SignInPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignInPage as default
};
//# sourceMappingURL=/build/routes/sign-in-SXXRR3X4.js.map
