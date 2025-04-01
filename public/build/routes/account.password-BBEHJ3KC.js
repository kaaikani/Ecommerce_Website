import {
  Input
} from "/build/_shared/chunk-QC532LL5.js";
import {
  ErrorMessage
} from "/build/_shared/chunk-36WQ6G5C.js";
import {
  HighlightedButton
} from "/build/_shared/chunk-XVLAQD6G.js";
import {
  ValidatedForm,
  init_index_esm,
  require_remix_validated_form_with_zod_cjs,
  z
} from "/build/_shared/chunk-XPW3HCEW.js";
import "/build/_shared/chunk-2QJY4JOV.js";
import {
  Button
} from "/build/_shared/chunk-PKAD657O.js";
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
  init_esm2 as init_esm,
  useActionData,
  useNavigation
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

// app/routes/account.password.tsx
init_remix_hmr();
var import_outline = __toESM(require_outline(), 1);
init_esm();
var import_with_zod = __toESM(require_remix_validated_form_with_zod_cjs(), 1);
var import_react2 = __toESM(require_react(), 1);
init_index_esm();

// app/components/SuccessMessage.tsx
init_remix_hmr();
var import_solid = __toESM(require_solid(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SuccessMessage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SuccessMessage.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function SuccessMessage({
  heading,
  message
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-green-50 p-4 max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.CheckIcon, { className: "h-5 w-5 text-green-400", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/SuccessMessage.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/SuccessMessage.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-green-800", children: heading }, void 0, false, {
        fileName: "app/components/SuccessMessage.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-green-700 mt-2", children: message }, void 0, false, {
        fileName: "app/components/SuccessMessage.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SuccessMessage.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SuccessMessage.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SuccessMessage.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = SuccessMessage;
var _c;
$RefreshReg$(_c, "SuccessMessage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/validation-helper.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/validation-helper.ts"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
function isErrorResult(input) {
  return input && input.message !== void 0 && input.errorCode !== void 0;
}
function isValidationErrorResponseData(input) {
  return input && input.fieldErrors !== void 0;
}

// app/routes/account.password.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.password.tsx"
  );
  import.meta.hot.lastModified = "1742363235110.9072";
}
var validator = (0, import_with_zod.withZod)(z.object({
  currentPassword: z.string().min(1, {
    message: "Password is required"
  }),
  newPassword: z.string().min(1, {
    message: "Password is required"
  }),
  confirmPassword: z.string().min(1, {
    message: "Password is required"
  })
}).refine(({
  newPassword,
  confirmPassword
}) => newPassword === confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords must match"
}));
function AccountPassword() {
  _s();
  const [editing, setEditing] = (0, import_react2.useState)(false);
  const [isSaved, setIsSaved] = (0, import_react2.useState)(false);
  const [errorMessage, setErrorMessage] = (0, import_react2.useState)();
  const actionDataHook = useActionData();
  const {
    state
  } = useNavigation();
  const formRef = (0, import_react2.useRef)(null);
  const {
    t
  } = useTranslation();
  (0, import_react2.useEffect)(() => {
    if (isValidationErrorResponseData(actionDataHook)) {
      return;
    }
    if (isErrorResult(actionDataHook)) {
      setErrorMessage(actionDataHook.message);
      setIsSaved(false);
      return;
    }
    if (actionDataHook?.success) {
      setErrorMessage(void 0);
      setIsSaved(true);
      setEditing(false);
      formRef.current?.reset();
    }
  }, [actionDataHook]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ValidatedForm, { validator, method: "post", formRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 space-y-4", children: [
    editing && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { required: true, label: t("account.currentPassword"), name: "currentPassword", type: "password" }, void 0, false, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 116,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { required: true, label: t("account.newPassword"), name: "newPassword", type: "password" }, void 0, false, {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { required: true, label: t("account.confirmPassword"), name: "confirmPassword", type: "password" }, void 0, false, {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/account.password.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 113,
      columnNumber: 21
    }, this),
    isSaved && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SuccessMessage, { heading: t("account.pwdSuccessHeading"), message: t("account.pwdSuccessMessage") }, void 0, false, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 128,
      columnNumber: 21
    }, this),
    errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorMessage, { heading: t("account.pwdErrorMessage"), message: errorMessage }, void 0, false, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 129,
      columnNumber: 26
    }, this),
    editing ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HighlightedButton, { type: "submit", isSubmitting: state === "submitting", children: t("account.savePassword") }, void 0, false, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "reset", onClick: () => setEditing(false), children: t("common.cancel") }, void 0, false, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 130,
      columnNumber: 20
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HighlightedButton, { type: "button", onClick: () => setEditing(true), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.PencilIcon, { className: "w-4 h-4" }, void 0, false, {
        fileName: "app/routes/account.password.tsx",
        lineNumber: 139,
        columnNumber: 15
      }, this),
      " ",
      t("account.changePassword")
    ] }, void 0, true, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/account.password.tsx",
      lineNumber: 137,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.password.tsx",
    lineNumber: 112,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.password.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s(AccountPassword, "jTV2vI/jeAViafC6R1KT0X6p7vQ=", false, function() {
  return [useActionData, useNavigation, useTranslation];
});
_c2 = AccountPassword;
var _c2;
$RefreshReg$(_c2, "AccountPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountPassword as default
};
//# sourceMappingURL=/build/routes/account.password-BBEHJ3KC.js.map
