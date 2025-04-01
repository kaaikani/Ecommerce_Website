import {
  CustomerAddressForm
} from "/build/_shared/chunk-Q7ME2VZG.js";
import "/build/_shared/chunk-J34O3NPF.js";
import {
  use_toggle_state_default
} from "/build/_shared/chunk-37GJJKCE.js";
import "/build/_shared/chunk-QC532LL5.js";
import {
  Modal_default
} from "/build/_shared/chunk-4EJOO2IT.js";
import {
  HighlightedButton
} from "/build/_shared/chunk-XVLAQD6G.js";
import "/build/_shared/chunk-ZGSQZHKT.js";
import "/build/_shared/chunk-XPW3HCEW.js";
import "/build/_shared/chunk-3W7WW5ZQ.js";
import "/build/_shared/chunk-2QJY4JOV.js";
import "/build/_shared/chunk-2S5KDW4V.js";
import {
  Button
} from "/build/_shared/chunk-PKAD657O.js";
import "/build/_shared/chunk-R5BHNF67.js";
import "/build/_shared/chunk-4KYYPW5T.js";
import "/build/_shared/chunk-6IR2VAGI.js";
import "/build/_shared/chunk-76TTLXDT.js";
import "/build/_shared/chunk-L7FVEPUN.js";
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
  useNavigate,
  useNavigation,
  useSubmit
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

// app/routes/account.addresses.$addressId.tsx
init_remix_hmr();
init_esm();
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.addresses.$addressId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.addresses.$addressId.tsx"
  );
  import.meta.hot.lastModified = "1742363235109.9072";
}
function EditAddress() {
  _s();
  const {
    address,
    availableCountries
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const {
    state,
    close
  } = use_toggle_state_default(true);
  const formRef = (0, import_react2.useRef)(null);
  const {
    t
  } = useTranslation();
  const submit = useSubmit();
  (0, import_react2.useEffect)(() => {
    if (actionData?.saved) {
      close();
    }
  }, [actionData]);
  const submitForm = () => {
    submit(formRef.current);
  };
  const afterClose = () => {
    navigate(-1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { isOpen: state, close, afterClose, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Title, { children: t("address.edit") }, void 0, false, {
      fileName: "app/routes/account.addresses.$addressId.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomerAddressForm, { address, availableCountries, formRef, submit: submitForm }, void 0, false, {
      fileName: "app/routes/account.addresses.$addressId.tsx",
      lineNumber: 121,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/account.addresses.$addressId.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", onClick: close, children: t("common.cancel") }, void 0, false, {
        fileName: "app/routes/account.addresses.$addressId.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HighlightedButton, { isSubmitting: navigation.state === "submitting", type: "submit", onClick: submitForm, children: t("common.save") }, void 0, false, {
        fileName: "app/routes/account.addresses.$addressId.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.addresses.$addressId.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.addresses.$addressId.tsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/account.addresses.$addressId.tsx",
    lineNumber: 117,
    columnNumber: 10
  }, this);
}
_s(EditAddress, "oBq/XnQVsiwUykFm2Zc+zSM6+lU=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useNavigate, use_toggle_state_default, useTranslation, useSubmit];
});
_c = EditAddress;
var _c;
$RefreshReg$(_c, "EditAddress");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditAddress as default
};
//# sourceMappingURL=/build/routes/account.addresses.$addressId-TUV3MHCD.js.map
