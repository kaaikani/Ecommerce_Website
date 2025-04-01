import {
  replaceEmptyString
} from "/build/_shared/chunk-IN422JHN.js";
import {
  use_toggle_state_default
} from "/build/_shared/chunk-37GJJKCE.js";
import {
  Input
} from "/build/_shared/chunk-QC532LL5.js";
import {
  ErrorMessage
} from "/build/_shared/chunk-36WQ6G5C.js";
import {
  Modal_default
} from "/build/_shared/chunk-4EJOO2IT.js";
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
import "/build/_shared/chunk-R5BHNF67.js";
import "/build/_shared/chunk-4KYYPW5T.js";
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
  init_esm2 as init_esm,
  useActionData,
  useLoaderData,
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

// app/routes/account._index.tsx
init_remix_hmr();
var import_outline = __toESM(require_outline(), 1);
init_esm();
var import_with_zod = __toESM(require_remix_validated_form_with_zod_cjs(), 1);
var import_react2 = __toESM(require_react(), 1);
init_index_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account._index.tsx"
  );
  import.meta.hot.lastModified = "1742363235109.9072";
}
var FormIntent = /* @__PURE__ */ function(FormIntent2) {
  FormIntent2["UpdateEmail"] = "updateEmail";
  FormIntent2["UpdateDetails"] = "updateDetails";
  return FormIntent2;
}(FormIntent || {});
var validator = (0, import_with_zod.withZod)(z.object({
  title: z.string(),
  firstName: z.string().min(1, {
    message: "First name is required"
  }),
  lastName: z.string().min(1, {
    message: "Last name is required"
  }),
  phoneNumber: z.string()
}));
var changeEmailValidator = (0, import_with_zod.withZod)(z.object({
  email: z.string().min(1, {
    message: "Email is required"
  }).email("Must be a valid email"),
  password: z.string().min(1, {
    message: "Password is required"
  })
}));
function isFormError(err) {
  return err.message !== void 0;
}
function isEmailSavedResponse(response) {
  return response.newEmailAddress !== void 0;
}
function isCustomerUpdatedResponse(response) {
  return response.customerUpdated !== void 0;
}
function AccountDetails() {
  _s();
  const {
    activeCustomer
  } = useLoaderData();
  const actionDataHook = useActionData();
  const {
    t
  } = useTranslation();
  const {
    firstName,
    lastName,
    title,
    phoneNumber,
    emailAddress
  } = activeCustomer;
  const fullName = `${title ? title + " " : ""}${firstName} ${lastName}`;
  const {
    state
  } = useNavigation();
  const [formError, setFormError] = (0, import_react2.useState)();
  const [emailSavedResponse, setEmailSavedResponse] = (0, import_react2.useState)();
  const [showChangeEmailModal, openChangeEmailModal, closeChangeEmailModal] = use_toggle_state_default(false);
  const [isEditing, setIsEditing] = (0, import_react2.useState)(false);
  const emailInputRef = (0, import_react2.useRef)(null);
  const formRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!actionDataHook) {
      return;
    }
    if (isEmailSavedResponse(actionDataHook)) {
      setEmailSavedResponse(actionDataHook);
      closeChangeEmailModal();
      return;
    }
    if (isCustomerUpdatedResponse(actionDataHook)) {
      setIsEditing(false);
      setFormError(void 0);
      return;
    }
    if (isFormError(actionDataHook)) {
      setFormError(actionDataHook);
      return;
    }
  }, [actionDataHook]);
  (0, import_react2.useEffect)(() => {
    formRef.current?.reset();
  }, [isEditing]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { isOpen: showChangeEmailModal, close: () => closeChangeEmailModal(), afterOpen: () => emailInputRef.current?.focus(), size: "small", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedForm, { validator: changeEmailValidator, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Title, { children: t("account.changeEmailModal.title") }, void 0, false, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 my-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: t("account.changeEmailModal.heading") }, void 0, false, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 203,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          t("account.changeEmailModal.currentEmail"),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: emailAddress }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 204,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: FormIntent.UpdateEmail }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 210,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { ref: emailInputRef, autoFocus: true, label: t("account.changeEmailModal.new"), name: "email", required: true }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("account.password"), type: "password", name: "password", required: true }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", hidden: true }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 213,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 209,
          columnNumber: 15
        }, this),
        formError && formError.intent === FormIntent.UpdateEmail && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorMessage, { heading: t("account.changeEmailModal.errorMessage"), message: formError.message }, void 0, false, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 215,
          columnNumber: 76
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 202,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Footer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "reset", onClick: () => closeChangeEmailModal(), children: t("common.cancel") }, void 0, false, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HighlightedButton, { type: "submit", isSubmitting: state === "submitting", children: t("common.save") }, void 0, false, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 222,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account._index.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account._index.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-10 p-4 mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm text-gray-500", children: t("account.email") }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 232,
            columnNumber: 13
          }, this),
          emailSavedResponse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "italic text-gray-800", children: emailSavedResponse.newEmailAddress }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 234,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300", children: t("account.changeEmailConfirmation") }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 237,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 233,
            columnNumber: 35
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: emailAddress }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 240,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HighlightedButton, { type: "button", onClick: () => openChangeEmailModal(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.PencilIcon, { className: "w-4 h-4" }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, this),
          " ",
          t("account.changeEmailButton")
        ] }, void 0, true, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedForm, { validator, formRef, method: "post", id: "details", defaultValues: {
        title: title ?? void 0,
        firstName,
        lastName,
        phoneNumber: phoneNumber ?? void 0
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: FormIntent.UpdateDetails }, void 0, false, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "gap-4 grid sm:grid-cols-2", children: [
          isEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("account.title"), name: "title", className: "sm:w-1/4" }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 259,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 258,
            columnNumber: 29
          }, this),
          isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("account.firstName"), name: "firstName", required: true }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 263,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 262,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("account.lastName"), name: "lastName", required: true }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 266,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 265,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 261,
            columnNumber: 28
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm text-gray-500", children: t("account.fullName") }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 269,
              columnNumber: 19
            }, this),
            replaceEmptyString(fullName)
          ] }, void 0, true, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 268,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: t("account.phoneNumber"), name: "phoneNumber" }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 276,
            columnNumber: 30
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm text-gray-500", children: t("account.phoneNumber") }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 277,
              columnNumber: 21
            }, this),
            replaceEmptyString(phoneNumber)
          ] }, void 0, true, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 276,
            columnNumber: 94
          }, this) }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2", children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            formError && formError.intent === FormIntent.UpdateDetails && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorMessage, { heading: t("account.errorMessage"), message: formError.message }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 285,
              columnNumber: 84
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HighlightedButton, { type: "submit", isSubmitting: state === "submitting", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.CheckIcon, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 289,
                  columnNumber: 25
                }, this),
                " ",
                t("common.save")
              ] }, void 0, true, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 288,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "reset", onClick: () => setIsEditing(false), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.XMarkIcon, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "app/routes/account._index.tsx",
                  lineNumber: 293,
                  columnNumber: 25
                }, this),
                " ",
                t("common.cancel")
              ] }, void 0, true, {
                fileName: "app/routes/account._index.tsx",
                lineNumber: 292,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 287,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 284,
            columnNumber: 30
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HighlightedButton, { type: "button", onClick: () => setIsEditing(true), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.PencilIcon, { className: "w-4 h-4" }, void 0, false, {
              fileName: "app/routes/account._index.tsx",
              lineNumber: 297,
              columnNumber: 21
            }, this),
            " ",
            t("common.edit")
          ] }, void 0, true, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 296,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/account._index.tsx",
            lineNumber: 283,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account._index.tsx",
          lineNumber: 257,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/account._index.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account._index.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account._index.tsx",
    lineNumber: 197,
    columnNumber: 10
  }, this);
}
_s(AccountDetails, "QlZ8teQFDm0ZeLkkOg1/ap8p1Lg=", false, function() {
  return [useLoaderData, useActionData, useTranslation, useNavigation, use_toggle_state_default];
});
_c = AccountDetails;
var _c;
$RefreshReg$(_c, "AccountDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountDetails as default
};
//# sourceMappingURL=/build/routes/account._index-FKUYV3CZ.js.map
