import {
  classNames
} from "/build/_shared/chunk-WYO5ATGT.js";
import {
  CartContents
} from "/build/_shared/chunk-HEMXXL6Y.js";
import {
  require_i18next
} from "/build/_shared/chunk-QZYG7WHP.js";
import {
  Price
} from "/build/_shared/chunk-7HHNXP4R.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-2QJY4JOV.js";
import {
  APP_META_DESCRIPTION,
  APP_META_TITLE
} from "/build/_shared/chunk-2S5KDW4V.js";
import {
  Je,
  mt
} from "/build/_shared/chunk-R5BHNF67.js";
import "/build/_shared/chunk-4KYYPW5T.js";
import "/build/_shared/chunk-6IR2VAGI.js";
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
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  init_esm2 as init_esm,
  isRouteErrorResponse,
  useFetcher,
  useLoaderData,
  useLocation,
  useMatches,
  useRouteError
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

// app/root.tsx
init_remix_hmr();

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/root.tsx
init_esm();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-BAVMJVC2.css";

// app/components/header/Header.tsx
init_remix_hmr();
init_esm();
var import_outline = __toESM(require_outline(), 1);

// app/components/header/SearchBar.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/header/SearchBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/header/SearchBar.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function SearchBar() {
  _s();
  const {
    t
  } = useTranslation();
  let initialQuery = "";
  if (typeof window === "undefined") {
  } else {
    initialQuery = new URL(window.location.href).searchParams.get("q") ?? "";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", action: "/search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", name: "q", defaultValue: initialQuery, placeholder: t("common.search"), className: "shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md" }, void 0, false, {
    fileName: "app/components/header/SearchBar.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, initialQuery, false, {
    fileName: "app/components/header/SearchBar.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(SearchBar, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/use-root-loader.ts
init_remix_hmr();
init_esm();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/use-root-loader.ts"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
function useRootLoader() {
  return useMatches().find((match) => match.id === "root").data;
}

// app/components/header/Header.tsx
var import_solid = __toESM(require_solid(), 1);

// app/utils/use-scrolling-up.ts
init_remix_hmr();
var import_react3 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/use-scrolling-up.ts"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
var useScrollingUp = () => {
  let prevScroll;
  if (typeof window !== "undefined") {
    prevScroll = window.pageYOffset;
  }
  const [scrollingUp, setScrollingUp] = (0, import_react3.useState)(false);
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll > currScroll;
    setScrollingUp(isScrolled);
    prevScroll = currScroll;
  };
  (0, import_react3.useEffect)(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollingUp;
};

// app/components/header/Header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/header/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/header/Header.tsx"
  );
  import.meta.hot.lastModified = "1742460735864.476";
}
function Header({
  onCartIconClick,
  cartQuantity
}) {
  _s2();
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const isScrollingUp = useScrollingUp();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: classNames(isScrollingUp ? "sticky top-0 z-10 animate-dropIn" : "", "bg-gradient-to-r from-zinc-700 to-gray-900 shadow-lg transform shadow-xl"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-zinc-100 text-gray-600 shadow-inner text-center text-sm py-2 px-2 xl:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-6xl mx-2 md:mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "hidden sm:block", children: [
        t("vendure.exclusive"),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://github.com/vendure-ecommerce/storefront-remix-starter", target: "_blank", className: "underline", children: t("vendure.repoLinkLabel") }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: isSignedIn ? "/account" : "/sign-in", className: "flex space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid.UserIcon, { className: "w-4 h-4" }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: isSignedIn ? t("account.myAccount") : t("account.signIn") }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-6xl mx-auto p-4 flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-white w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/cube-logo-small.webp", width: 40, height: 31, alt: t("commmon.logoAlt") }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4 hidden sm:block", children: data.collections.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-sm md:text-base text-gray-200 hover:text-white", to: "/collections/" + collection.slug, prefetch: "intent", children: collection.name }, collection.id, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 69,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 md:pr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchBar, {}, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "relative w-9 h-9 bg-white bg-opacity-20 rounded text-white p-1", onClick: onCartIconClick, "aria-label": "Open cart tray", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ShoppingBagIcon, {}, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        cartQuantity ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute rounded-full -top-2 -right-2 bg-primary-600 min-w-6 min-h-6 flex items-center justify-center text-xs p-1", children: cartQuantity }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this) : ""
      ] }, void 0, true, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header/Header.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s2(Header, "WSY+632tkh2ArTqn/iLf/cgu4/A=", false, function() {
  return [useRootLoader, useScrollingUp, useTranslation];
});
_c2 = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_react13 = __toESM(require_react(), 1);

// app/components/cart/CartTray.tsx
init_remix_hmr();
var import_react5 = __toESM(require_react(), 1);
var import_outline2 = __toESM(require_outline(), 1);
init_esm();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cart/CartTray.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cart/CartTray.tsx"
  );
  import.meta.hot.lastModified = "1742363235105.9072";
}
function CartTray({
  open,
  onClose,
  activeOrder,
  adjustOrderLine,
  removeItem
}) {
  _s3();
  const currencyCode = activeOrder?.currencyCode || "USD" /* Usd */;
  const location = useLocation();
  const editable = !location.pathname.startsWith("/checkout");
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Je.Root, { show: open, as: import_react5.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(mt, { as: "div", className: "fixed inset-0 overflow-hidden z-20", onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Je.Child, { as: import_react5.Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(mt.Overlay, { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed inset-y-0 right-0 pl-10 max-w-full flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Je.Child, { as: import_react5.Fragment, enter: "transform transition ease-in-out duration-300 sm:duration-300", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-300 sm:duration-300", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full flex flex-col bg-white shadow-xl overflow-y-scroll", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1 py-6 overflow-y-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(mt.Title, { className: "text-lg font-medium text-gray-900", children: t("cart.title") }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 57,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-3 h-7 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", className: "-m-2 p-2 text-gray-400 hover:text-gray-500", onClick: () => onClose(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: t("common.closePanel") }, void 0, false, {
              fileName: "app/components/cart/CartTray.tsx",
              lineNumber: 62,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline2.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/cart/CartTray.tsx",
              lineNumber: 65,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 61,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 60,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-8", children: activeOrder?.totalQuantity ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartContents, { orderLines: activeOrder?.lines ?? [], currencyCode, editable, removeItem, adjustOrderLine }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 71,
          columnNumber: 53
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-center h-48 text-xl text-gray-400", children: t("cart.empty") }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 71,
          columnNumber: 229
        }, this) }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartTray.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this),
      activeOrder?.totalQuantity && editable && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-t border-gray-200 py-6 px-4 sm:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: t("common.subtotal") }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 79,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: currencyCode && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Price, { priceWithTax: activeOrder?.subTotalWithTax ?? 0, currencyCode }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 81,
            columnNumber: 44
          }, this) }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 80,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 78,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-0.5 text-sm text-gray-500", children: t("cart.shippingMessage") }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 84,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/checkout", onClick: () => onClose(false), className: "flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700", children: t("cart.checkout") }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 87,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartTray.tsx",
        lineNumber: 77,
        columnNumber: 62
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 53,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/cart/CartTray.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/cart/CartTray.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/cart/CartTray.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s3(CartTray, "kW2jYC7nVp2/SohMTqVbTbyrVn8=", false, function() {
  return [useLocation, useTranslation];
});
_c3 = CartTray;
var _c3;
$RefreshReg$(_c3, "CartTray");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/footer/Footer.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/footer/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/footer/Footer.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
var navigation = {
  support: [{
    page: "help",
    href: "#"
  }, {
    page: "trackOrder",
    href: "#"
  }, {
    page: "shipping",
    href: "#"
  }, {
    page: "returns",
    href: "#"
  }],
  company: [{
    page: "about",
    href: "#"
  }, {
    page: "blog",
    href: "#"
  }, {
    page: "responsibility",
    href: "#"
  }, {
    page: "press",
    href: "#"
  }]
};
function Footer({
  collections
}) {
  _s4();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "mt-24 border-t bg-gray-50", "aria-labelledby": "footer-heading", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: t("footer.title") }, void 0, false, {
      fileName: "app/components/footer/Footer.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 gap-8 xl:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("footer.shop") }, void 0, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "mt-4 space-y-4", children: collections.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { className: "text-base text-gray-500 hover:text-gray-600", to: "/collections/" + collection.slug, prefetch: "intent", children: collection.name }, collection.id, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 73,
                columnNumber: 23
              }, this) }, collection.id, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 72,
                columnNumber: 50
              }, this)) }, void 0, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 71,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-12 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("footer.support") }, void 0, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 80,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "mt-4 space-y-4", children: navigation.support.map(({
                page,
                href
              }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href, className: "text-base text-gray-500 hover:text-gray-600", children: t(`navigation.support.${page}`) }, void 0, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 88,
                columnNumber: 23
              }, this) }, page, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 87,
                columnNumber: 23
              }, this)) }, void 0, false, {
                fileName: "app/components/footer/Footer.tsx",
                lineNumber: 83,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("account.company") }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 97,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "mt-4 space-y-4", children: navigation.company.map(({
              page,
              href
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href, className: "text-base text-gray-500 hover:text-gray-600", children: t(`navigation.company.${page}`) }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 105,
              columnNumber: 23
            }, this) }, page, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 104,
              columnNumber: 23
            }, this)) }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 xl:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-500 tracking-wider uppercase", children: t("footer.subscribeHeader") }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-4 text-base text-gray-500", children: t("footer.subscribeIntro") }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "mt-4 sm:flex sm:max-w-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: t("acount.emailAddress") }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 121,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "email", name: "email-address", id: "email-address", autoComplete: "email", required: true, className: "appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400", placeholder: t("footer.emailPlaceholder") }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 124,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", className: "w-full bg-primary-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500", children: t("footer.subscribe") }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 126,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 border-t pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "flex items-center space-x-4 font-medium text-gray-500 hover:text-gray-700", href: "https://github.com/vendure-ecommerce/storefront-remix-starter", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", className: "h-6 w-6", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "github.com/vendure-ecommerce/storefront-remix-starter" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 134,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer/Footer.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer/Footer.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s4(Footer, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c4 = Footer;
var _c4;
$RefreshReg$(_c4, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/use-active-order.tsx
init_remix_hmr();
init_esm();
var import_react10 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/use-active-order.tsx"
  );
  import.meta.hot.lastModified = "1742363235112.9072";
}
function useActiveOrder() {
  const activeOrderFetcher = useFetcher();
  (0, import_react10.useEffect)(() => {
    if (activeOrderFetcher.state === "idle" && !activeOrderFetcher.data) {
      activeOrderFetcher.load("/api/active-order");
    }
  }, [activeOrderFetcher]);
  function refresh() {
    activeOrderFetcher.load("/api/active-order");
  }
  const { activeOrder } = activeOrderFetcher.data ?? {};
  const removeItem = (lineId) => {
    activeOrderFetcher.submit(
      {
        action: "removeItem",
        lineId
      },
      {
        method: "post",
        action: "/api/active-order"
      }
    );
  };
  const adjustOrderLine = (lineId, quantity) => {
    activeOrderFetcher.submit(
      {
        action: "adjustItem",
        lineId,
        quantity: quantity.toString()
      },
      {
        method: "post",
        action: "/api/active-order"
      }
    );
  };
  return {
    activeOrderFetcher,
    activeOrder,
    removeItem,
    adjustOrderLine,
    refresh
  };
}

// node_modules/remix-i18next/browser/react.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react11 = __toESM(require_react());
function useChangeLanguage(locale) {
  let { i18n } = useTranslation();
  (0, import_react11.useEffect)(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

// app/root.tsx
var import_i18next = __toESM(require_i18next(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var meta = () => {
  return [{
    title: APP_META_TITLE
  }, {
    description: APP_META_DESCRIPTION
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
var devMode = typeof process !== "undefined" && true;
var shouldRevalidate = ({
  nextUrl,
  currentUrl,
  formAction
}) => {
  if (currentUrl.pathname === "/sign-in") {
    return true;
  }
  if (currentUrl.pathname === "/account" && nextUrl.pathname === "/") {
    return true;
  }
  if (formAction === "/checkout/payment") {
    return true;
  }
  return false;
};
function App() {
  _s5();
  const [open, setOpen] = (0, import_react13.useState)(false);
  const loaderData = useLoaderData();
  const {
    collections
  } = loaderData;
  const {
    locale
  } = useLoaderData();
  const {
    i18n
  } = useTranslation();
  const {
    activeOrderFetcher,
    activeOrder,
    adjustOrderLine,
    removeItem,
    refresh
  } = useActiveOrder();
  useChangeLanguage(locale);
  (0, import_react13.useEffect)(() => {
    refresh();
  }, [loaderData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: locale, dir: i18n.dir(), id: "app", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, { onCartIconClick: () => setOpen(!open), cartQuantity: activeOrder?.totalQuantity ?? 0 }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, { context: {
        activeOrderFetcher,
        activeOrder,
        adjustOrderLine,
        removeItem
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CartTray, { open, onClose: setOpen, activeOrder, adjustOrderLine, removeItem }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, { collections }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      devMode && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_s5(App, "S/yjElHTGOHJYWCdrAYtOa+UIwU=", false, function() {
  return [useLoaderData, useLoaderData, useTranslation, useActiveOrder, useChangeLanguage];
});
_c5 = App;
function DefaultSparseErrorPage({
  tagline,
  headline,
  description
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", id: "app", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "flex flex-col items-center px-4 py-16 sm:py-32 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wide", children: tagline }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mt-2 font-bold text-gray-900 tracking-tight text-4xl sm:text-5xl", children: headline }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-4 text-base text-gray-500 max-w-full break-words", children: description }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/", className: "text-base font-medium text-primary-600 hover:text-primary-500 inline-flex gap-2", children: "Go back home" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      devMode && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 198,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 170,
    columnNumber: 10
  }, this);
}
_c22 = DefaultSparseErrorPage;
function ErrorBoundary() {
  _s22();
  let tagline = "Oopsy daisy";
  let headline = "Unexpected error";
  let description = "We couldn't handle your request. Please try again later.";
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    tagline = `${error.status} error`;
    headline = error.statusText;
    description = error.data;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DefaultSparseErrorPage, { tagline, headline, description }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 218,
    columnNumber: 10
  }, this);
}
_s22(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c32 = ErrorBoundary;
function CatchBoundary() {
  return ErrorBoundary();
}
_c42 = CatchBoundary;
var _c5;
var _c22;
var _c32;
var _c42;
$RefreshReg$(_c5, "App");
$RefreshReg$(_c22, "DefaultSparseErrorPage");
$RefreshReg$(_c32, "ErrorBoundary");
$RefreshReg$(_c42, "CatchBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links,
  meta,
  shouldRevalidate
};
//# sourceMappingURL=/build/root-7YHNHZBP.js.map
