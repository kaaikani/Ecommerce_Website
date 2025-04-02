import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/ssr.js
var e = typeof window == "undefined" || typeof document == "undefined";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var s = e ? import_react.useEffect : import_react.useLayoutEffect;

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e4) {
  let r4 = (0, import_react2.useRef)(e4);
  return s(() => {
    r4.current = e4;
  }, [e4]), r4;
}

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t2(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o5) => setTimeout(() => {
    throw o5;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function m() {
  let n = [], i3 = [], r4 = { enqueue(e4) {
    i3.push(e4);
  }, addEventListener(e4, t5, a4, o5) {
    return e4.addEventListener(t5, a4, o5), r4.add(() => e4.removeEventListener(t5, a4, o5));
  }, requestAnimationFrame(...e4) {
    let t5 = requestAnimationFrame(...e4);
    return r4.add(() => cancelAnimationFrame(t5));
  }, nextFrame(...e4) {
    return r4.requestAnimationFrame(() => r4.requestAnimationFrame(...e4));
  }, setTimeout(...e4) {
    let t5 = setTimeout(...e4);
    return r4.add(() => clearTimeout(t5));
  }, microTask(...e4) {
    let t5 = { current: true };
    return t2(() => {
      t5.current && e4[0]();
    }), r4.add(() => {
      t5.current = false;
    });
  }, add(e4) {
    return n.push(e4), () => {
      let t5 = n.indexOf(e4);
      if (t5 >= 0) {
        let [a4] = n.splice(t5, 1);
        a4();
      }
    };
  }, dispose() {
    for (let e4 of n.splice(0))
      e4();
  }, async workQueue() {
    for (let e4 of i3.splice(0))
      await e4();
  } };
  return r4;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);
function p() {
  let [e4] = (0, import_react3.useState)(m);
  return (0, import_react3.useEffect)(() => () => e4.dispose(), [e4]), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o2 = function(t5) {
  let e4 = s2(t5);
  return import_react4.default.useCallback((...r4) => e4.current(...r4), [e4]);
};

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react5 = __toESM(require_react(), 1);
var r = { serverHandoffComplete: false };
function a2() {
  let [e4, f4] = (0, import_react5.useState)(r.serverHandoffComplete);
  return (0, import_react5.useEffect)(() => {
    e4 !== true && f4(true);
  }, [e4]), (0, import_react5.useEffect)(() => {
    r.serverHandoffComplete === false && (r.serverHandoffComplete = true);
  }, []), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react6 = __toESM(require_react(), 1);
var u;
var l = 0;
function r2() {
  return ++l;
}
var I = (u = import_react6.default.useId) != null ? u : function() {
  let n = a2(), [e4, o5] = import_react6.default.useState(n ? r2 : null);
  return s(() => {
    e4 === null && o5(r2());
  }, [e4]), e4 != null ? "" + e4 : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r4, n, ...a4) {
  if (r4 in n) {
    let e4 = n[r4];
    return typeof e4 == "function" ? e4(...a4) : e4;
  }
  let t5 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t5, u2), t5;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e3(r4) {
  return e ? null : r4 instanceof Node ? r4.ownerDocument : r4 != null && r4.hasOwnProperty("current") && r4.current instanceof Node ? r4.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var L = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(L || {});
var N = ((o5) => (o5[o5.Error = 0] = "Error", o5[o5.Overflow = 1] = "Overflow", o5[o5.Success = 2] = "Success", o5[o5.Underflow = 3] = "Underflow", o5))(N || {});
var T = ((r4) => (r4[r4.Previous = -1] = "Previous", r4[r4.Next = 1] = "Next", r4))(T || {});
function E(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(f2)).sort((t5, r4) => Math.sign((t5.tabIndex || Number.MAX_SAFE_INTEGER) - (r4.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var F = ((r4) => (r4[r4.Strict = 0] = "Strict", r4[r4.Loose = 1] = "Loose", r4))(F || {});
function h(e4, t5 = 0) {
  var r4;
  return e4 === ((r4 = e3(e4)) == null ? void 0 : r4.body) ? false : u2(t5, { [0]() {
    return e4.matches(f2);
  }, [1]() {
    let l4 = e4;
    for (; l4 !== null; ) {
      if (l4.matches(f2))
        return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function S(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var H = ["textarea", "input"].join(",");
function w(e4) {
  var t5, r4;
  return (r4 = (t5 = e4 == null ? void 0 : e4.matches) == null ? void 0 : t5.call(e4, H)) != null ? r4 : false;
}
function A(e4, t5 = (r4) => r4) {
  return e4.slice().sort((r4, l4) => {
    let o5 = t5(r4), i3 = t5(l4);
    if (o5 === null || i3 === null)
      return 0;
    let n = o5.compareDocumentPosition(i3);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function I2(e4, t5, { sorted: r4 = true, relativeTo: l4 = null, skipElements: o5 = [] } = {}) {
  let i3 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4.ownerDocument, n = Array.isArray(e4) ? r4 ? A(e4) : e4 : E(e4);
  o5.length > 0 && (n = n.filter((s5) => !o5.includes(s5))), l4 = l4 != null ? l4 : i3.activeElement;
  let d2 = (() => {
    if (t5 & 5)
      return 1;
    if (t5 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (t5 & 1)
      return 0;
    if (t5 & 2)
      return Math.max(0, n.indexOf(l4)) - 1;
    if (t5 & 4)
      return Math.max(0, n.indexOf(l4)) + 1;
    if (t5 & 8)
      return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p3 = t5 & 32 ? { preventScroll: true } : {}, c2 = 0, a4 = n.length, u5;
  do {
    if (c2 >= a4 || c2 + a4 <= 0)
      return 0;
    let s5 = x2 + c2;
    if (t5 & 16)
      s5 = (s5 + a4) % a4;
    else {
      if (s5 < 0)
        return 3;
      if (s5 >= a4)
        return 1;
    }
    u5 = n[s5], u5 == null || u5.focus(p3), c2 += d2;
  } while (u5 !== i3.activeElement);
  return t5 & 6 && w(u5) && u5.select(), u5.hasAttribute("tabindex") || u5.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react7 = __toESM(require_react(), 1);
var u3 = Symbol();
function T2(t5, n = true) {
  return Object.assign(t5, { [u3]: n });
}
function y(...t5) {
  let n = (0, import_react7.useRef)(t5);
  (0, import_react7.useEffect)(() => {
    n.current = t5;
  }, [t5]);
  let c2 = o2((e4) => {
    for (let o5 of n.current)
      o5 != null && (typeof o5 == "function" ? o5(e4) : o5.current = e4);
  });
  return t5.every((e4) => e4 == null || (e4 == null ? void 0 : e4[u3])) ? void 0 : c2;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react8 = __toESM(require_react(), 1);
var S2 = ((a4) => (a4[a4.None = 0] = "None", a4[a4.RenderStrategy = 1] = "RenderStrategy", a4[a4.Static = 2] = "Static", a4))(S2 || {});
var j = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(j || {});
function $({ ourProps: r4, theirProps: t5, slot: e4, defaultTag: a4, features: o5, visible: n = true, name: l4 }) {
  let s5 = T3(t5, r4);
  if (n)
    return p2(s5, e4, a4, l4);
  let u5 = o5 != null ? o5 : 0;
  if (u5 & 2) {
    let { static: i3 = false, ...d2 } = s5;
    if (i3)
      return p2(d2, e4, a4, l4);
  }
  if (u5 & 1) {
    let { unmount: i3 = true, ...d2 } = s5;
    return u2(i3 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return p2({ ...d2, hidden: true, style: { display: "none" } }, e4, a4, l4);
    } });
  }
  return p2(s5, e4, a4, l4);
}
function p2(r4, t5 = {}, e4, a4) {
  let { as: o5 = e4, children: n, refName: l4 = "ref", ...s5 } = m2(r4, ["unmount", "static"]), u5 = r4.ref !== void 0 ? { [l4]: r4.ref } : {}, i3 = typeof n == "function" ? n(t5) : n;
  s5.className && typeof s5.className == "function" && (s5.className = s5.className(t5));
  let d2 = {};
  if (t5) {
    let f4 = false, y2 = [];
    for (let [h3, g] of Object.entries(t5))
      typeof g == "boolean" && (f4 = true), g === true && y2.push(h3);
    f4 && (d2["data-headlessui-state"] = y2.join(" "));
  }
  if (o5 === import_react8.Fragment && Object.keys(F2(s5)).length > 0) {
    if (!(0, import_react8.isValidElement)(i3) || Array.isArray(i3) && i3.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a4} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s5).map((f4) => `  - ${f4}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f4) => `  - ${f4}`).join(`
`)].join(`
`));
    return (0, import_react8.cloneElement)(i3, Object.assign({}, T3(i3.props, F2(m2(s5, ["ref"]))), d2, u5, w2(i3.ref, u5.ref)));
  }
  return (0, import_react8.createElement)(o5, Object.assign({}, m2(s5, ["ref"]), o5 !== import_react8.Fragment && u5, o5 !== import_react8.Fragment && d2), i3);
}
function w2(...r4) {
  return { ref: r4.every((t5) => t5 == null) ? void 0 : (t5) => {
    for (let e4 of r4)
      e4 != null && (typeof e4 == "function" ? e4(t5) : e4.current = t5);
  } };
}
function T3(...r4) {
  var a4;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t5 = {}, e4 = {};
  for (let o5 of r4)
    for (let n in o5)
      n.startsWith("on") && typeof o5[n] == "function" ? ((a4 = e4[n]) != null || (e4[n] = []), e4[n].push(o5[n])) : t5[n] = o5[n];
  if (t5.disabled || t5["aria-disabled"])
    return Object.assign(t5, Object.fromEntries(Object.keys(e4).map((o5) => [o5, void 0])));
  for (let o5 in e4)
    Object.assign(t5, { [o5](n, ...l4) {
      let s5 = e4[o5];
      for (let u5 of s5) {
        if ((n instanceof Event || (n == null ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented)
          return;
        u5(n, ...l4);
      }
    } });
  return t5;
}
function C(r4) {
  var t5;
  return Object.assign((0, import_react8.forwardRef)(r4), { displayName: (t5 = r4.displayName) != null ? t5 : r4.name });
}
function F2(r4) {
  let t5 = Object.assign({}, r4);
  for (let e4 in t5)
    t5[e4] === void 0 && delete t5[e4];
  return t5;
}
function m2(r4, t5 = []) {
  let e4 = Object.assign({}, r4);
  for (let a4 of t5)
    a4 in e4 && delete e4[a4];
  return e4;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n) {
  let e4 = n.parentElement, l4 = null;
  for (; e4 && !(e4 instanceof HTMLFieldSetElement); )
    e4 instanceof HTMLLegendElement && (l4 = e4), e4 = e4.parentElement;
  let t5 = (e4 == null ? void 0 : e4.getAttribute("disabled")) === "";
  return t5 && i2(l4) ? false : t5;
}
function i2(n) {
  if (!n)
    return false;
  let e4 = n.previousElementSibling;
  for (; e4 !== null; ) {
    if (e4 instanceof HTMLLegendElement)
      return false;
    e4 = e4.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "div";
var s4 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(s4 || {});
var h2 = C(function(t5, o5) {
  let { features: e4 = 1, ...r4 } = t5, d2 = { ref: o5, "aria-hidden": (e4 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e4 & 4) === 4 && (e4 & 2) !== 2 && { display: "none" } } };
  return $({ ourProps: d2, theirProps: r4, slot: {}, defaultTag: a3, name: "Hidden" });
});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o4 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o4 || {});

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react9 = __toESM(require_react(), 1);
var d = (0, import_react9.createContext)(null);
function u4() {
  let n = (0, import_react9.useContext)(d);
  if (n === null) {
    let t5 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t5, u4), t5;
  }
  return n;
}
function k() {
  let [n, t5] = (0, import_react9.useState)([]);
  return [n.length > 0 ? n.join(" ") : void 0, (0, import_react9.useMemo)(() => function(e4) {
    let i3 = o2((r4) => (t5((o5) => [...o5, r4]), () => t5((o5) => {
      let s5 = o5.slice(), p3 = s5.indexOf(r4);
      return p3 !== -1 && s5.splice(p3, 1), s5;
    }))), a4 = (0, import_react9.useMemo)(() => ({ register: i3, slot: e4.slot, name: e4.name, props: e4.props }), [i3, e4.slot, e4.name, e4.props]);
    return import_react9.default.createElement(d.Provider, { value: a4 }, e4.children);
  }, [t5])];
}
var S3 = "p";
var F3 = C(function(t5, c2) {
  let e4 = I(), { id: i3 = `headlessui-description-${e4}`, ...a4 } = t5, r4 = u4(), o5 = y(c2);
  s(() => r4.register(i3), [i3, r4.register]);
  let s5 = { ref: o5, ...r4.props, id: i3 };
  return $({ ourProps: s5, theirProps: a4, slot: r4.slot || {}, defaultTag: S3, name: r4.name || "Description" });
});

export {
  e,
  s,
  s2,
  t2 as t,
  m,
  p,
  o2 as o,
  a2 as a,
  I,
  u2 as u,
  e3 as e2,
  L,
  N,
  F,
  h,
  S,
  A,
  I2,
  T2 as T,
  y,
  S2,
  j,
  $,
  C,
  F2,
  r3 as r,
  s4 as s3,
  h2,
  o4 as o2,
  k,
  F3
};
//# sourceMappingURL=/build/_shared/chunk-4KYYPW5T.js.map
