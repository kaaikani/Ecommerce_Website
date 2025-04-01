import {
  require_i18next
} from "/build/_shared/chunk-QZYG7WHP.js";
import "/build/_shared/chunk-2S5KDW4V.js";
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
  Link,
  init_esm2 as init_esm,
  useActionData,
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

// app/routes/sign-up.index.tsx
init_remix_hmr();
init_esm();
var import_solid = __toESM(require_solid(), 1);
var import_i18next = __toESM(require_i18next(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/sign-up.index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sign-up.index.tsx"
  );
  import.meta.hot.lastModified = "1742363235111.9072";
}
function SignUpPage() {
  _s();
  const [searchParams] = useSearchParams();
  const formErrors = useActionData();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.create") }, void 0, false, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/sign-in", className: "font-medium text-primary-600 hover:text-primary-500", children: t("account.login") }, void 0, false, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sign-up.index.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: t("vendure.registrationMessage") }, void 0, false, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 83,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "space-y-6", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: searchParams.get("redirectTo") ?? void 0 }, void 0, false, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: t("account.emailAddress") }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 92,
              columnNumber: 19
            }, this),
            formErrors?.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-red-700", children: formErrors.email }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 93,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700", children: t("account.firstName") }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "firstName", name: "firstName", type: "text", autoComplete: "given-name", className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700", children: t("account.lastName") }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "lastName", name: "lastName", type: "text", autoComplete: "family-name", className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 113,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: t("account.password") }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 122,
              columnNumber: 19
            }, this),
            formErrors?.password && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-red-700", children: formErrors.password }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 123,
              columnNumber: 44
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "repeatPassword", className: "block text-sm font-medium text-gray-700", children: t("account.repeatPassword") }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "repeatPassword", name: "repeatPassword", type: "password", autoComplete: "current-password", className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this),
            formErrors?.repeatPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-red-700", children: formErrors.repeatPassword }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 134,
              columnNumber: 50
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this),
        formErrors?.form && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 142,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 141,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: t("account.createError") }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 145,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-red-700 mt-2", children: formErrors.form }, void 0, false, {
              fileName: "app/routes/sign-up.index.tsx",
              lineNumber: 148,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/sign-up.index.tsx",
            lineNumber: 144,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 140,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 139,
          columnNumber: 36
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500", children: t("account.signUp") }, void 0, false, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/sign-up.index.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sign-up.index.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sign-up.index.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/sign-up.index.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sign-up.index.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-up.index.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(SignUpPage, "n029TOwPr5wHY1YTF6uA/dFOdbw=", false, function() {
  return [useSearchParams, useActionData, useTranslation];
});
_c = SignUpPage;
var _c;
$RefreshReg$(_c, "SignUpPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignUpPage as default
};
//# sourceMappingURL=/build/routes/sign-up.index-JDWEQZGK.js.map
