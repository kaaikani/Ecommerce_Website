import {
  classNames
} from "/build/_shared/chunk-WYO5ATGT.js";
import {
  Breadcrumbs
} from "/build/_shared/chunk-E6CLSRFG.js";
import "/build/_shared/chunk-WLLYEG7R.js";
import {
  Price
} from "/build/_shared/chunk-7HHNXP4R.js";
import "/build/_shared/chunk-3W7WW5ZQ.js";
import {
  APP_META_TITLE
} from "/build/_shared/chunk-2S5KDW4V.js";
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
  init_esm2 as init_esm,
  useLoaderData,
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

// app/routes/products.$slug.tsx
init_remix_hmr();
var import_react2 = __toESM(require_react(), 1);
init_esm();
var import_solid3 = __toESM(require_solid(), 1);

// app/components/Alert.tsx
init_remix_hmr();
var import_solid = __toESM(require_solid(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Alert.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
function Alert({
  message
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: message }, void 0, false, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Alert.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Alert.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Alert.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Alert;
var _c;
$RefreshReg$(_c, "Alert");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/StockLevelLabel.tsx
init_remix_hmr();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/StockLevelLabel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/StockLevelLabel.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function StockLevelLabel({
  stockLevel
}) {
  _s();
  const {
    t
  } = useTranslation();
  let stockLevelLabel = "";
  let badgeClasses = "bg-gray-100 text-gray-800";
  switch (stockLevel) {
    case "IN_STOCK":
      stockLevelLabel = t("product.inStock");
      badgeClasses = "bg-green-100 text-green-800";
      break;
    case "OUT_OF_STOCK":
      stockLevelLabel = t("product.outOfStock");
      badgeClasses = "bg-red-100 text-red-800";
      break;
    case "LOW_STOCK":
      stockLevelLabel = t("product.lowStock");
      badgeClasses = "bg-yellow-100 text-yellow-800";
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium " + badgeClasses, children: stockLevelLabel }, void 0, false, {
    fileName: "app/components/products/StockLevelLabel.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(StockLevelLabel, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c2 = StockLevelLabel;
var _c2;
$RefreshReg$(_c2, "StockLevelLabel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/TopReviews.tsx
init_remix_hmr();
var import_solid2 = __toESM(require_solid(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/TopReviews.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/TopReviews.tsx"
  );
  import.meta.hot.lastModified = "1742363235107.9072";
}
var reviews = [{
  id: 1,
  title: "I love it!",
  rating: 5,
  content: `
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            `,
  author: "Ryan F",
  date: "May 25, 2022",
  datetime: "2022-05-25"
}, {
  id: 2,
  title: "Awesome product",
  rating: 5,
  content: `
              <p>Ornare quam viverra orci sagittis eu volutpat odio. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Ultrices tincidunt arcu non sodales neque.</p> 
              <p>Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sodales ut etiam sit amet nisl purus in mollis nunc. Turpis egestas integer eget aliquet nibh praesent tristique magna. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Justo laoreet sit amet cursus sit amet.</p>
            `,
  author: "Kent D",
  date: "May 24, 2022",
  datetime: "2022-05-24"
}, {
  id: 3,
  title: "Really happy with this purchase",
  rating: 5,
  content: `
              <p>Nisi est sit amet facilisis magna etiam tempor orci eu.</p> 
              <p>Elit duis tristique sollicitudin nibh sit amet commodo. Dolor sit amet consectetur adipiscing elit. Lorem dolor sed viverra ipsum nunc. Accumsan tortor posuere ac ut consequat semper. Augue mauris augue neque gravida in fermentum et sollicitudin ac.</p>
            `,
  author: "Michael J",
  date: "May 24, 2022",
  datetime: "2022-05-24"
}];
function TopReviews() {
  _s2();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: t("product.recentReviews") }, void 0, false, {
      fileName: "app/components/products/TopReviews.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 pb-10 border-t border-gray-200 divide-y divide-gray-200 space-y-10", children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center xl:col-span-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_solid2.StarIcon, { className: classNames(review.rating > rating ? "text-yellow-400" : "text-gray-200", "h-5 w-5 flex-shrink-0"), "aria-hidden": "true" }, rating, false, {
            fileName: "app/components/products/TopReviews.tsx",
            lineNumber: 74,
            columnNumber: 52
          }, this)) }, void 0, false, {
            fileName: "app/components/products/TopReviews.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "ml-3 text-sm text-gray-700", children: [
            review.rating,
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: [
              " ",
              t("product.recentRating")
            ] }, void 0, true, {
              fileName: "app/components/products/TopReviews.tsx",
              lineNumber: 78,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/products/TopReviews.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/products/TopReviews.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 lg:mt-6 xl:mt-0 xl:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: review.title }, void 0, false, {
            fileName: "app/components/products/TopReviews.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-3 space-y-6 text-sm text-gray-500", dangerouslySetInnerHTML: {
            __html: review.content
          } }, void 0, false, {
            fileName: "app/components/products/TopReviews.tsx",
            lineNumber: 90,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/products/TopReviews.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/products/TopReviews.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-medium text-gray-900", children: review.author }, void 0, false, {
          fileName: "app/components/products/TopReviews.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("time", { dateTime: review.datetime, className: "ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0", children: review.date }, void 0, false, {
          fileName: "app/components/products/TopReviews.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/products/TopReviews.tsx",
        lineNumber: 96,
        columnNumber: 15
      }, this)
    ] }, review.id, true, {
      fileName: "app/components/products/TopReviews.tsx",
      lineNumber: 70,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/components/products/TopReviews.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/TopReviews.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/products/TopReviews.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s2(TopReviews, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c3 = TopReviews;
var _c3;
$RefreshReg$(_c3, "TopReviews");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/ScrollableContainer.tsx
init_remix_hmr();
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/ScrollableContainer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/ScrollableContainer.tsx"
  );
  import.meta.hot.lastModified = "1742363235106.9072";
}
function ScrollableContainer({
  children
}) {
  _s3();
  const spanRef = (0, import_react.useRef)(null);
  let pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  };
  const mouseDownHandler = (e) => {
    const span = spanRef.current;
    pos = {
      left: span.scrollLeft,
      top: span.scrollTop,
      x: e.clientX,
      y: e.clientY
    };
    span.style.cursor = "grabbing";
    span.style.userSelect = "none";
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = (e) => {
    const span = spanRef.current;
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    span.scrollTop = pos.top - dy;
    span.scrollLeft = pos.left - dx;
  };
  const mouseUpHandler = () => {
    const span = spanRef.current;
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
    span.style.cursor = "grab";
    span.style.removeProperty("user-select");
  };
  const wheelHandler = (e) => {
    const diff = e.deltaY || e.deltaX;
    spanRef.current.scrollLeft += diff * 0.5;
    e.preventDefault();
  };
  (0, import_react.useEffect)(() => {
    spanRef.current.addEventListener("wheel", wheelHandler, {
      passive: false
    });
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "py-2 mt-2 flex flex-row flex-nowrap space-x-4 md:overflow-x-hidden overflow-x-auto cursor-grab touch-pan-x", ref: spanRef, onMouseDown: mouseDownHandler, onClickCapture: (e) => {
    if (e.clientX != pos.x || e.clientY != pos.y) {
      e.stopPropagation();
    }
  }, children }, void 0, false, {
    fileName: "app/components/products/ScrollableContainer.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s3(ScrollableContainer, "ObitFCsn35YeSWXF2LU6H3MsDF8=");
_c4 = ScrollableContainer;
var _c4;
$RefreshReg$(_c4, "ScrollableContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/products.$slug.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products.$slug.tsx"
  );
  import.meta.hot.lastModified = "1742363235111.9072";
}
var meta = ({
  data
}) => {
  return [{
    title: data?.product?.name ? `${data.product.name} - ${APP_META_TITLE}` : APP_META_TITLE
  }];
};
var shouldRevalidate = () => true;
function ProductSlug() {
  _s4();
  const {
    product,
    error
  } = useLoaderData();
  const {
    activeOrderFetcher
  } = useOutletContext();
  const {
    activeOrder
  } = activeOrderFetcher.data ?? {};
  const addItemToOrderError = getAddItemToOrderError(error);
  const {
    t
  } = useTranslation();
  if (!product) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: t("product.notFound") }, void 0, false, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 89,
      columnNumber: 12
    }, this);
  }
  const findVariantById = (id) => product.variants.find((v) => v.id === id);
  const [selectedVariantId, setSelectedVariantId] = (0, import_react2.useState)(product.variants[0].id);
  const selectedVariant = findVariantById(selectedVariantId);
  if (!selectedVariant) {
    setSelectedVariantId(product.variants[0].id);
  }
  const qtyInCart = activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)?.quantity ?? 0;
  const asset = product.assets[0];
  const brandName = product.facetValues.find((fv) => fv.facet.code === "brand")?.name;
  const [featuredAsset, setFeaturedAsset] = (0, import_react2.useState)(selectedVariant?.featuredAsset);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: product.name }, void 0, false, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Breadcrumbs, { items: product.collections[product.collections.length - 1]?.breadcrumbs ?? [] }, void 0, false, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full h-full object-center object-cover rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: (featuredAsset?.preview || product.featuredAsset?.preview) + "?w=800", alt: product.name, className: "w-full h-full object-center object-cover rounded-lg" }, void 0, false, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          product.assets.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollableContainer, { children: product.assets.map((asset2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg ${featuredAsset?.id == asset2.id ? "outline outline-2 outline-primary outline-offset-[-2px]" : ""}`, onClick: () => {
            setFeaturedAsset(asset2);
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { draggable: "false", className: "rounded-lg select-none h-24 w-full object-cover", src: asset2.preview + "?preset=full" }, void 0, false, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 120,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 117,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 116,
            columnNumber: 43
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "sr-only", children: t("product.description") }, void 0, false, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 128,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-base text-gray-700", dangerouslySetInnerHTML: {
              __html: product.description
            } }, void 0, false, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 130,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(activeOrderFetcher.Form, { method: "post", action: "/api/active-order", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "action", value: "addItemToOrder" }, void 0, false, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            1 < product.variants.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "option", className: "block text-sm font-medium text-gray-700", children: t("product.selectOption") }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 137,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md", id: "productVariant", value: selectedVariantId, name: "variantId", onChange: (e) => {
                setSelectedVariantId(e.target.value);
                const variant = findVariantById(e.target.value);
                if (variant) {
                  setFeaturedAsset(variant.featuredAsset);
                }
              }, children: product.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: variant.id, children: variant.name }, variant.id, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 147,
                columnNumber: 54
              }, this)) }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 140,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 136,
              columnNumber: 46
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "variantId", value: selectedVariantId }, void 0, false, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 151,
              columnNumber: 26
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 flex flex-col sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-3xl text-gray-900 mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price, { priceWithTax: selectedVariant?.priceWithTax, currencyCode: selectedVariant?.currencyCode }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 155,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 154,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex sm:flex-col1 align-baseline", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", className: `max-w-xs flex-1 ${activeOrderFetcher.state !== "idle" ? "bg-gray-400" : qtyInCart === 0 ? "bg-primary-600 hover:bg-primary-700" : "bg-green-600 active:bg-green-700 hover:bg-green-700"}
                                     transition-colors border border-transparent rounded-md py-3 px-8 flex items-center
                                      justify-center text-base font-medium text-white focus:outline-none
                                      focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full`, disabled: activeOrderFetcher.state !== "idle", children: qtyInCart ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_solid3.CheckIcon, { className: "w-5 h-5 mr-1" }, void 0, false, {
                    fileName: "app/routes/products.$slug.tsx",
                    lineNumber: 163,
                    columnNumber: 25
                  }, this),
                  " ",
                  qtyInCart,
                  " ",
                  t("product.inCart")
                ] }, void 0, true, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 162,
                  columnNumber: 34
                }, this) : t("product.addToCart") }, void 0, false, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 158,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", className: "ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_solid3.HeartIcon, { className: "h-6 w-6 flex-shrink-0", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/products.$slug.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: t("product.addToFavorites") }, void 0, false, {
                    fileName: "app/routes/products.$slug.tsx",
                    lineNumber: 170,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 168,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 157,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2 flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-gray-500", children: selectedVariant?.sku }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 177,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StockLevelLabel, { stockLevel: selectedVariant?.stockLevel }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 178,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 176,
              columnNumber: 15
            }, this),
            addItemToOrderError && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Alert, { message: addItemToOrderError }, void 0, false, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 181,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 180,
              columnNumber: 39
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "mt-12 pt-12 border-t text-xs", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-gray-600 font-bold mb-2", children: t("product.shippingAndReturns") }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 185,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-gray-500 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: t("product.shippingInfo") }, void 0, false, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 189,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: t("product.shippingCostsInfo") }, void 0, false, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 190,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: t("product.returnsInfo") }, void 0, false, {
                  fileName: "app/routes/products.$slug.tsx",
                  lineNumber: 191,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 188,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 184,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TopReviews, {}, void 0, false, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$slug.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_s4(ProductSlug, "t0ZUjMrXfySoN/kBeHICohpvCmM=", false, function() {
  return [useLoaderData, useOutletContext, useTranslation];
});
_c5 = ProductSlug;
function CatchBoundary() {
  _s22();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.notFound") }, void 0, false, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_solid3.PhotoIcon, { className: "w-48 text-white" }, void 0, false, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 221,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: t("product.notFoundInfo") }, void 0, false, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 228,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 space-y-3 py-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-2 bg-slate-200 rounded" }, void 0, false, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 230,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-2 bg-slate-200 rounded col-span-2" }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 233,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-2 bg-slate-200 rounded col-span-1" }, void 0, false, {
                fileName: "app/routes/products.$slug.tsx",
                lineNumber: 234,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 232,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-2 bg-slate-200 rounded" }, void 0, false, {
              fileName: "app/routes/products.$slug.tsx",
              lineNumber: 236,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.$slug.tsx",
            lineNumber: 231,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$slug.tsx",
          lineNumber: 229,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.$slug.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.$slug.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$slug.tsx",
    lineNumber: 212,
    columnNumber: 10
  }, this);
}
_s22(CatchBoundary, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c22 = CatchBoundary;
function getAddItemToOrderError(error) {
  if (!error || !error.errorCode) {
    return void 0;
  }
  switch (error.errorCode) {
    case "ORDER_MODIFICATION_ERROR" /* OrderModificationError */:
    case "ORDER_LIMIT_ERROR" /* OrderLimitError */:
    case "NEGATIVE_QUANTITY_ERROR" /* NegativeQuantityError */:
    case "INSUFFICIENT_STOCK_ERROR" /* InsufficientStockError */:
      return error.message;
  }
}
var _c5;
var _c22;
$RefreshReg$(_c5, "ProductSlug");
$RefreshReg$(_c22, "CatchBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductSlug as default,
  meta,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/products.$slug-F7POUHBE.js.map
