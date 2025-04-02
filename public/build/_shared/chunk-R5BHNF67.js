import {
  $,
  C,
  F,
  F3 as F2,
  I,
  I2,
  L,
  N,
  S,
  S2,
  T,
  a,
  e,
  e2,
  h,
  h2,
  j,
  k,
  m,
  o,
  o2,
  p,
  r,
  s,
  s2,
  s3,
  t,
  u,
  y
} from "/build/_shared/chunk-4KYYPW5T.js";
import {
  require_react_dom
} from "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react = __toESM(require_react(), 1);
function s4(e5, r6, n3) {
  let o5 = s2(r6);
  (0, import_react.useEffect)(() => {
    function t5(i2) {
      o5.current(i2);
    }
    return window.addEventListener(e5, t5, n3), () => window.removeEventListener(e5, t5, n3);
  }, [e5, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s5 = ((r6) => (r6[r6.Forwards = 0] = "Forwards", r6[r6.Backwards = 1] = "Backwards", r6))(s5 || {});
function n() {
  let e5 = (0, import_react2.useRef)(0);
  return s4("keydown", (o5) => {
    o5.key === "Tab" && (e5.current = o5.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react3 = __toESM(require_react(), 1);
function f() {
  let e5 = (0, import_react3.useRef)(false);
  return s(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react4 = __toESM(require_react(), 1);
function n2(...e5) {
  return (0, import_react4.useMemo)(() => e2(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react5 = __toESM(require_react(), 1);
function E(n3, e5, a3, t5) {
  let i2 = s2(a3);
  (0, import_react5.useEffect)(() => {
    n3 = n3 != null ? n3 : window;
    function r6(o5) {
      i2.current(o5);
    }
    return n3.addEventListener(e5, r6, t5), () => n3.removeEventListener(e5, r6, t5);
  }, [n3, e5, t5]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react6 = __toESM(require_react(), 1);
function m2(u3, t5) {
  let e5 = (0, import_react6.useRef)([]), r6 = o(u3);
  (0, import_react6.useEffect)(() => {
    let o5 = [...e5.current];
    for (let [n3, a3] of t5.entries())
      if (e5.current[n3] !== a3) {
        let l5 = r6(t5, o5);
        return e5.current = t5, l5;
      }
  }, [r6, ...t5]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var z = "div";
var A = ((t5) => (t5[t5.None = 1] = "None", t5[t5.InitialFocus = 2] = "InitialFocus", t5[t5.TabLock = 4] = "TabLock", t5[t5.FocusLock = 8] = "FocusLock", t5[t5.RestoreFocus = 16] = "RestoreFocus", t5[t5.All = 30] = "All", t5))(A || {});
var de = Object.assign(C(function(u3, e5) {
  let l5 = (0, import_react7.useRef)(null), a3 = y(l5, e5), { initialFocus: m7, containers: t5, features: n3 = 30, ...E2 } = u3;
  a() || (n3 = 1);
  let s11 = n2(l5);
  J({ ownerDocument: s11 }, Boolean(n3 & 16));
  let S3 = Q({ ownerDocument: s11, container: l5, initialFocus: m7 }, Boolean(n3 & 2));
  X({ ownerDocument: s11, container: l5, containers: t5, previousActiveElement: S3 }, Boolean(n3 & 8));
  let H2 = n(), R = o((o5) => {
    let c4 = l5.current;
    if (!c4)
      return;
    ((_2) => _2())(() => {
      u(H2.current, { [s5.Forwards]: () => I2(c4, L.First, { skipElements: [o5.relatedTarget] }), [s5.Backwards]: () => I2(c4, L.Last, { skipElements: [o5.relatedTarget] }) });
    });
  }), B = p(), L4 = (0, import_react7.useRef)(false), P3 = { ref: a3, onKeyDown(o5) {
    o5.key == "Tab" && (L4.current = true, B.requestAnimationFrame(() => {
      L4.current = false;
    }));
  }, onBlur(o5) {
    let c4 = new Set(t5 == null ? void 0 : t5.current);
    c4.add(l5);
    let p3 = o5.relatedTarget;
    !p3 || p3.dataset.headlessuiFocusGuard !== "true" && (h3(c4, p3) || (L4.current ? I2(l5.current, u(H2.current, { [s5.Forwards]: () => L.Next, [s5.Backwards]: () => L.Previous }) | L.WrapAround, { relativeTo: o5.target }) : o5.target instanceof HTMLElement && S(o5.target)));
  } };
  return import_react7.default.createElement(import_react7.default.Fragment, null, Boolean(n3 & 4) && import_react7.default.createElement(h2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R, features: s3.Focusable }), $({ ourProps: P3, theirProps: E2, defaultTag: z, name: "FocusTrap" }), Boolean(n3 & 4) && import_react7.default.createElement(h2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R, features: s3.Focusable }));
}), { features: A });
function J({ ownerDocument: r6 }, u3) {
  let e5 = (0, import_react7.useRef)(null);
  E(r6 == null ? void 0 : r6.defaultView, "focusout", (a3) => {
    !u3 || e5.current || (e5.current = a3.target);
  }, true), m2(() => {
    u3 || ((r6 == null ? void 0 : r6.activeElement) === (r6 == null ? void 0 : r6.body) && S(e5.current), e5.current = null);
  }, [u3]);
  let l5 = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(() => (l5.current = false, () => {
    l5.current = true, t(() => {
      !l5.current || (S(e5.current), e5.current = null);
    });
  }), []);
}
function Q({ ownerDocument: r6, container: u3, initialFocus: e5 }, l5) {
  let a3 = (0, import_react7.useRef)(null), m7 = f();
  return m2(() => {
    if (!l5)
      return;
    let t5 = u3.current;
    !t5 || t(() => {
      if (!m7.current)
        return;
      let n3 = r6 == null ? void 0 : r6.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === n3) {
          a3.current = n3;
          return;
        }
      } else if (t5.contains(n3)) {
        a3.current = n3;
        return;
      }
      e5 != null && e5.current ? S(e5.current) : I2(t5, L.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a3.current = r6 == null ? void 0 : r6.activeElement;
    });
  }, [l5]), a3;
}
function X({ ownerDocument: r6, container: u3, containers: e5, previousActiveElement: l5 }, a3) {
  let m7 = f();
  E(r6 == null ? void 0 : r6.defaultView, "focus", (t5) => {
    if (!a3 || !m7.current)
      return;
    let n3 = new Set(e5 == null ? void 0 : e5.current);
    n3.add(u3);
    let E2 = l5.current;
    if (!E2)
      return;
    let s11 = t5.target;
    s11 && s11 instanceof HTMLElement ? h3(n3, s11) ? (l5.current = s11, S(s11)) : (t5.preventDefault(), t5.stopPropagation(), S(E2)) : S(l5.current);
  }, true);
}
function h3(r6, u3) {
  var e5;
  for (let l5 of r6)
    if ((e5 = l5.current) != null && e5.contains(u3))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var i = /* @__PURE__ */ new Set();
var r3 = /* @__PURE__ */ new Map();
function u2(t5) {
  t5.setAttribute("aria-hidden", "true"), t5.inert = true;
}
function l(t5) {
  let n3 = r3.get(t5);
  !n3 || (n3["aria-hidden"] === null ? t5.removeAttribute("aria-hidden") : t5.setAttribute("aria-hidden", n3["aria-hidden"]), t5.inert = n3.inert);
}
function M(t5, n3 = true) {
  s(() => {
    if (!n3 || !t5.current)
      return;
    let o5 = t5.current, a3 = e2(o5);
    if (!!a3) {
      i.add(o5);
      for (let e5 of r3.keys())
        e5.contains(o5) && (l(e5), r3.delete(e5));
      return a3.querySelectorAll("body > *").forEach((e5) => {
        if (e5 instanceof HTMLElement) {
          for (let f4 of i)
            if (e5.contains(f4))
              return;
          i.size === 1 && (r3.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), u2(e5));
        }
      }), () => {
        if (i.delete(o5), i.size > 0)
          a3.querySelectorAll("body > *").forEach((e5) => {
            if (e5 instanceof HTMLElement && !r3.has(e5)) {
              for (let f4 of i)
                if (e5.contains(f4))
                  return;
              r3.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), u2(e5);
            }
          });
        else
          for (let e5 of r3.keys())
            l(e5), r3.delete(e5);
      };
    }
  }, [n3]);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react9 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react8 = __toESM(require_react(), 1);
var e3 = (0, import_react8.createContext)(false);
function l2() {
  return (0, import_react8.useContext)(e3);
}
function P(o5) {
  return import_react8.default.createElement(e3.Provider, { value: o5.force }, o5.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function x(i2) {
  let u3 = l2(), o5 = (0, import_react9.useContext)(A2), e5 = n2(i2), [r6, f4] = (0, import_react9.useState)(() => {
    if (!u3 && o5 !== null || e)
      return null;
    let n3 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (n3)
      return n3;
    if (e5 === null)
      return null;
    let t5 = e5.createElement("div");
    return t5.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(t5);
  });
  return (0, import_react9.useEffect)(() => {
    r6 !== null && (e5 != null && e5.body.contains(r6) || e5 == null || e5.body.appendChild(r6));
  }, [r6, e5]), (0, import_react9.useEffect)(() => {
    u3 || o5 !== null && f4(o5.current);
  }, [o5, f4, u3]), r6;
}
var _ = import_react9.Fragment;
var U2 = C(function(u3, o5) {
  let e5 = u3, r6 = (0, import_react9.useRef)(null), f4 = y(T((a3) => {
    r6.current = a3;
  }), o5), n3 = n2(r6), t5 = x(r6), [l5] = (0, import_react9.useState)(() => {
    var a3;
    return e ? null : (a3 = n3 == null ? void 0 : n3.createElement("div")) != null ? a3 : null;
  }), b = a(), p3 = (0, import_react9.useRef)(false);
  return s(() => {
    if (p3.current = false, !(!t5 || !l5))
      return t5.contains(l5) || (l5.setAttribute("data-headlessui-portal", ""), t5.appendChild(l5)), () => {
        p3.current = true, t(() => {
          var a3;
          !p3.current || !t5 || !l5 || (t5.removeChild(l5), t5.childNodes.length <= 0 && ((a3 = t5.parentElement) == null || a3.removeChild(t5)));
        });
      };
  }, [t5, l5]), b ? !t5 || !l5 ? null : (0, import_react_dom.createPortal)($({ ourProps: { ref: f4 }, theirProps: e5, defaultTag: _, name: "Portal" }), l5) : null;
});
var j2 = import_react9.Fragment;
var A2 = (0, import_react9.createContext)(null);
var F3 = C(function(u3, o5) {
  let { target: e5, ...r6 } = u3, n3 = { ref: y(o5) };
  return import_react9.default.createElement(A2.Provider, { value: e5 }, $({ ourProps: n3, theirProps: r6, defaultTag: j2, name: "Popover.Group" }));
});
var $2 = Object.assign(U2, { Group: F3 });

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react10 = __toESM(require_react(), 1);
var o3 = (0, import_react10.createContext)(null);
o3.displayName = "OpenClosedContext";
var p2 = ((e5) => (e5[e5.Open = 0] = "Open", e5[e5.Closed = 1] = "Closed", e5))(p2 || {});
function s8() {
  return (0, import_react10.useContext)(o3);
}
function C2({ value: t5, children: n3 }) {
  return import_react10.default.createElement(o3.Provider, { value: t5 }, n3);
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react11 = __toESM(require_react(), 1);
var a2 = (0, import_react11.createContext)(() => {
});
a2.displayName = "StackContext";
var s9 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s9 || {});
function x2() {
  return (0, import_react11.useContext)(a2);
}
function M2({ children: i2, onUpdate: r6, type: e5, element: n3, enabled: u3 }) {
  let l5 = x2(), o5 = o((...t5) => {
    r6 == null || r6(...t5), l5(...t5);
  });
  return s(() => {
    let t5 = u3 === void 0 || u3 === true;
    return t5 && o5(0, e5, n3), () => {
      t5 && o5(1, e5, n3);
    };
  }, [o5, e5, n3, u3]), import_react11.default.createElement(a2.Provider, { value: o5 }, i2);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react12 = __toESM(require_react(), 1);
function d7(e5, r6, n3) {
  let o5 = s2(r6);
  (0, import_react12.useEffect)(() => {
    function t5(u3) {
      o5.current(u3);
    }
    return document.addEventListener(e5, t5, n3), () => document.removeEventListener(e5, t5, n3);
  }, [e5, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L3(m7, E2, c4 = true) {
  let i2 = (0, import_react13.useRef)(false);
  (0, import_react13.useEffect)(() => {
    requestAnimationFrame(() => {
      i2.current = c4;
    });
  }, [c4]);
  function f4(e5, o5) {
    if (!i2.current || e5.defaultPrevented)
      return;
    let l5 = function r6(t5) {
      return typeof t5 == "function" ? r6(t5()) : Array.isArray(t5) || t5 instanceof Set ? t5 : [t5];
    }(m7), n3 = o5(e5);
    if (n3 !== null && !!n3.getRootNode().contains(n3)) {
      for (let r6 of l5) {
        if (r6 === null)
          continue;
        let t5 = r6 instanceof HTMLElement ? r6 : r6.current;
        if (t5 != null && t5.contains(n3) || e5.composed && e5.composedPath().includes(t5))
          return;
      }
      return !h(n3, F.Loose) && n3.tabIndex !== -1 && e5.preventDefault(), E2(e5, n3);
    }
  }
  let u3 = (0, import_react13.useRef)(null);
  d7("mousedown", (e5) => {
    var o5, l5;
    i2.current && (u3.current = ((l5 = (o5 = e5.composedPath) == null ? void 0 : o5.call(e5)) == null ? void 0 : l5[0]) || e5.target);
  }, true), d7("click", (e5) => {
    !u3.current || (f4(e5, () => u3.current), u3.current = null);
  }, true), d7("blur", (e5) => f4(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/utils/platform.js
function o4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var be = ((r6) => (r6[r6.Open = 0] = "Open", r6[r6.Closed = 1] = "Closed", r6))(be || {});
var ve = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(ve || {});
var Ae = { [0](t5, e5) {
  return t5.titleId === e5.id ? t5 : { ...t5, titleId: e5.id };
} };
var H = (0, import_react14.createContext)(null);
H.displayName = "DialogContext";
function k2(t5) {
  let e5 = (0, import_react14.useContext)(H);
  if (e5 === null) {
    let r6 = new Error(`<${t5} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r6, k2), r6;
  }
  return e5;
}
function Oe(t5, e5, r6 = () => [document.body]) {
  (0, import_react14.useEffect)(() => {
    var c4;
    if (!e5 || !t5)
      return;
    let s11 = m(), d9 = window.pageYOffset;
    function a3(n3, i2, l5) {
      let P3 = n3.style.getPropertyValue(i2);
      return Object.assign(n3.style, { [i2]: l5 }), s11.add(() => {
        Object.assign(n3.style, { [i2]: P3 });
      });
    }
    let o5 = t5.documentElement, f4 = ((c4 = t5.defaultView) != null ? c4 : window).innerWidth - o5.clientWidth;
    if (a3(o5, "overflow", "hidden"), f4 > 0) {
      let n3 = o5.clientWidth - o5.offsetWidth, i2 = f4 - n3;
      a3(o5, "paddingRight", `${i2}px`);
    }
    if (o4()) {
      a3(t5.body, "marginTop", `-${d9}px`), window.scrollTo(0, 0);
      let n3 = null;
      s11.addEventListener(t5, "click", (i2) => {
        if (i2.target instanceof HTMLElement)
          try {
            let l5 = i2.target.closest("a");
            if (!l5)
              return;
            let { hash: P3 } = new URL(l5.href), u3 = t5.querySelector(P3);
            u3 && !r6().some((_2) => _2.contains(u3)) && (n3 = u3);
          } catch {
          }
      }, true), s11.addEventListener(t5, "touchmove", (i2) => {
        i2.target instanceof HTMLElement && !r6().some((l5) => l5.contains(i2.target)) && i2.preventDefault();
      }, { passive: false }), s11.add(() => {
        window.scrollTo(0, window.pageYOffset + d9), n3 && n3.isConnected && (n3.scrollIntoView({ block: "nearest" }), n3 = null);
      });
    }
    return s11.dispose;
  }, [t5, e5]);
}
function Ce(t5, e5) {
  return u(e5.type, Ae, t5, e5);
}
var Se = "div";
var Le = S2.RenderStrategy | S2.Static;
var Me = C(function(e5, r6) {
  let s11 = I(), { id: d9 = `headlessui-dialog-${s11}`, open: a3, onClose: o5, initialFocus: p3, __demoMode: f4 = false, ...c4 } = e5, [n3, i2] = (0, import_react14.useState)(0), l5 = s8();
  a3 === void 0 && l5 !== null && (a3 = u(l5, { [p2.Open]: true, [p2.Closed]: false }));
  let P3 = (0, import_react14.useRef)(/* @__PURE__ */ new Set()), u3 = (0, import_react14.useRef)(null), _2 = y(u3, r6), U3 = (0, import_react14.useRef)(null), y4 = n2(u3), $3 = e5.hasOwnProperty("open") || l5 !== null, Y2 = e5.hasOwnProperty("onClose");
  if (!$3 && !Y2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!$3)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!Y2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof a3 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a3}`);
  if (typeof o5 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o5}`);
  let g = a3 ? 0 : 1, [h5, Q3] = (0, import_react14.useReducer)(Ce, { titleId: null, descriptionId: null, panelRef: (0, import_react14.createRef)() }), R = o(() => o5(false)), j3 = o((T5) => Q3({ type: 0, id: T5 })), x3 = a() ? f4 ? false : g === 0 : false, w = n3 > 1, X3 = (0, import_react14.useContext)(H) !== null, Z = w ? "parent" : "leaf";
  M(u3, w ? x3 : false);
  let N2 = o(() => {
    var b, D2;
    return [...Array.from((b = y4 == null ? void 0 : y4.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? b : []).filter((E2) => !(!(E2 instanceof HTMLElement) || E2.contains(U3.current) || h5.panelRef.current && E2.contains(h5.panelRef.current))), (D2 = h5.panelRef.current) != null ? D2 : u3.current];
  });
  L3(() => N2(), R, x3 && !w), E(y4 == null ? void 0 : y4.defaultView, "keydown", (T5) => {
    T5.defaultPrevented || T5.key === o2.Escape && g === 0 && (w || (T5.preventDefault(), T5.stopPropagation(), R()));
  }), Oe(y4, g === 0 && !X3, N2), (0, import_react14.useEffect)(() => {
    if (g !== 0 || !u3.current)
      return;
    let T5 = new IntersectionObserver((b) => {
      for (let D2 of b)
        D2.boundingClientRect.x === 0 && D2.boundingClientRect.y === 0 && D2.boundingClientRect.width === 0 && D2.boundingClientRect.height === 0 && R();
    });
    return T5.observe(u3.current), () => T5.disconnect();
  }, [g, u3, R]);
  let [ee, te] = k(), oe2 = (0, import_react14.useMemo)(() => [{ dialogState: g, close: R, setTitleId: j3 }, h5], [g, h5, R, j3]), V = (0, import_react14.useMemo)(() => ({ open: g === 0 }), [g]), re2 = { ref: _2, id: d9, role: "dialog", "aria-modal": g === 0 ? true : void 0, "aria-labelledby": h5.titleId, "aria-describedby": ee };
  return import_react14.default.createElement(M2, { type: "Dialog", enabled: g === 0, element: u3, onUpdate: o((T5, b, D2) => {
    b === "Dialog" && u(T5, { [s9.Add]() {
      P3.current.add(D2), i2((E2) => E2 + 1);
    }, [s9.Remove]() {
      P3.current.add(D2), i2((E2) => E2 - 1);
    } });
  }) }, import_react14.default.createElement(P, { force: true }, import_react14.default.createElement($2, null, import_react14.default.createElement(H.Provider, { value: oe2 }, import_react14.default.createElement($2.Group, { target: u3 }, import_react14.default.createElement(P, { force: false }, import_react14.default.createElement(te, { slot: V, name: "Dialog.Description" }, import_react14.default.createElement(de, { initialFocus: p3, containers: P3, features: x3 ? u(Z, { parent: de.features.RestoreFocus, leaf: de.features.All & ~de.features.FocusLock }) : de.features.None }, $({ ourProps: re2, theirProps: c4, slot: V, defaultTag: Se, features: Le, visible: g === 0, name: "Dialog" })))))))), import_react14.default.createElement(h2, { features: s3.Hidden, ref: U3 }));
});
var ke = "div";
var we = C(function(e5, r6) {
  let s11 = I(), { id: d9 = `headlessui-dialog-overlay-${s11}`, ...a3 } = e5, [{ dialogState: o5, close: p3 }] = k2("Dialog.Overlay"), f4 = y(r6), c4 = o((l5) => {
    if (l5.target === l5.currentTarget) {
      if (r(l5.currentTarget))
        return l5.preventDefault();
      l5.preventDefault(), l5.stopPropagation(), p3();
    }
  }), n3 = (0, import_react14.useMemo)(() => ({ open: o5 === 0 }), [o5]);
  return $({ ourProps: { ref: f4, id: d9, "aria-hidden": true, onClick: c4 }, theirProps: a3, slot: n3, defaultTag: ke, name: "Dialog.Overlay" });
});
var Fe = "div";
var Ie = C(function(e5, r6) {
  let s11 = I(), { id: d9 = `headlessui-dialog-backdrop-${s11}`, ...a3 } = e5, [{ dialogState: o5 }, p3] = k2("Dialog.Backdrop"), f4 = y(r6);
  (0, import_react14.useEffect)(() => {
    if (p3.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [p3.panelRef]);
  let c4 = (0, import_react14.useMemo)(() => ({ open: o5 === 0 }), [o5]);
  return import_react14.default.createElement(P, { force: true }, import_react14.default.createElement($2, null, $({ ourProps: { ref: f4, id: d9, "aria-hidden": true }, theirProps: a3, slot: c4, defaultTag: Fe, name: "Dialog.Backdrop" })));
});
var He = "div";
var _e = C(function(e5, r6) {
  let s11 = I(), { id: d9 = `headlessui-dialog-panel-${s11}`, ...a3 } = e5, [{ dialogState: o5 }, p3] = k2("Dialog.Panel"), f4 = y(r6, p3.panelRef), c4 = (0, import_react14.useMemo)(() => ({ open: o5 === 0 }), [o5]), n3 = o((l5) => {
    l5.stopPropagation();
  });
  return $({ ourProps: { ref: f4, id: d9, onClick: n3 }, theirProps: a3, slot: c4, defaultTag: He, name: "Dialog.Panel" });
});
var xe = "h2";
var We = C(function(e5, r6) {
  let s11 = I(), { id: d9 = `headlessui-dialog-title-${s11}`, ...a3 } = e5, [{ dialogState: o5, setTitleId: p3 }] = k2("Dialog.Title"), f4 = y(r6);
  (0, import_react14.useEffect)(() => (p3(d9), () => p3(null)), [d9, p3]);
  let c4 = (0, import_react14.useMemo)(() => ({ open: o5 === 0 }), [o5]);
  return $({ ourProps: { ref: f4, id: d9 }, theirProps: a3, slot: c4, defaultTag: xe, name: "Dialog.Title" });
});
var mt = Object.assign(Me, { Backdrop: Ie, Panel: _e, Overlay: we, Title: We, Description: F2 });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l4(r6) {
  let e5 = { called: false };
  return (...t5) => {
    if (!e5.called)
      return e5.called = true, r6(...t5);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function v2(t5, ...e5) {
  t5 && e5.length > 0 && t5.classList.add(...e5);
}
function f3(t5, ...e5) {
  t5 && e5.length > 0 && t5.classList.remove(...e5);
}
function F5(t5, e5) {
  let n3 = m();
  if (!t5)
    return n3.dispose;
  let { transitionDuration: a3, transitionDelay: i2 } = getComputedStyle(t5), [m7, d9] = [a3, i2].map((o5) => {
    let [r6 = 0] = o5.split(",").filter(Boolean).map((l5) => l5.includes("ms") ? parseFloat(l5) : parseFloat(l5) * 1e3).sort((l5, g) => g - l5);
    return r6;
  });
  if (m7 + d9 !== 0) {
    let o5 = n3.addEventListener(t5, "transitionend", (r6) => {
      r6.target === r6.currentTarget && (e5(), o5());
    });
  } else
    e5();
  return n3.add(() => e5()), n3.dispose;
}
function M3(t5, e5, n3, a3) {
  let i2 = n3 ? "enter" : "leave", m7 = m(), d9 = a3 !== void 0 ? l4(a3) : () => {
  };
  i2 === "enter" && (t5.removeAttribute("hidden"), t5.style.display = "");
  let u3 = u(i2, { enter: () => e5.enter, leave: () => e5.leave }), o5 = u(i2, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r6 = u(i2, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return f3(t5, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), v2(t5, ...u3, ...r6), m7.nextFrame(() => {
    f3(t5, ...r6), v2(t5, ...o5), F5(t5, () => (f3(t5, ...u3), v2(t5, ...e5.entered), d9()));
  }), m7.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D({ container: i2, direction: t5, classes: o5, onStart: s11, onStop: u3 }) {
  let a3 = f(), c4 = p(), r6 = s2(t5);
  s(() => {
    let e5 = m();
    c4.add(e5.dispose);
    let n3 = i2.current;
    if (!!n3 && r6.current !== "idle" && !!a3.current)
      return e5.dispose(), s11.current(r6.current), e5.add(M3(n3, o5.current, r6.current === "enter", () => {
        e5.dispose(), u3.current(r6.current);
      })), e5.dispose;
  }, [t5]);
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function e4(...n3) {
  return n3.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function P2(i2 = "") {
  return i2.split(" ").filter((e5) => e5.trim().length > 1);
}
var A3 = (0, import_react15.createContext)(null);
A3.displayName = "TransitionContext";
var Ce2 = ((s11) => (s11.Visible = "visible", s11.Hidden = "hidden", s11))(Ce2 || {});
function ge() {
  let i2 = (0, import_react15.useContext)(A3);
  if (i2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i2;
}
function be2() {
  let i2 = (0, import_react15.useContext)(M4);
  if (i2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i2;
}
var M4 = (0, import_react15.createContext)(null);
M4.displayName = "NestingContext";
function I3(i2) {
  return "children" in i2 ? I3(i2.children) : i2.current.filter(({ el: e5 }) => e5.current !== null).filter(({ state: e5 }) => e5 === "visible").length > 0;
}
function ne2(i2, e5) {
  let s11 = s2(i2), n3 = (0, import_react15.useRef)([]), m7 = f(), R = p(), b = o((l5, r6 = j.Hidden) => {
    let t5 = n3.current.findIndex(({ el: o5 }) => o5 === l5);
    t5 !== -1 && (u(r6, { [j.Unmount]() {
      n3.current.splice(t5, 1);
    }, [j.Hidden]() {
      n3.current[t5].state = "hidden";
    } }), R.microTask(() => {
      var o5;
      !I3(n3) && m7.current && ((o5 = s11.current) == null || o5.call(s11));
    }));
  }), E2 = o((l5) => {
    let r6 = n3.current.find(({ el: t5 }) => t5 === l5);
    return r6 ? r6.state !== "visible" && (r6.state = "visible") : n3.current.push({ el: l5, state: "visible" }), () => b(l5, j.Unmount);
  }), S3 = (0, import_react15.useRef)([]), u3 = (0, import_react15.useRef)(Promise.resolve()), p3 = (0, import_react15.useRef)({ enter: [], leave: [], idle: [] }), d9 = o((l5, r6, t5) => {
    S3.current.splice(0), e5 && (e5.chains.current[r6] = e5.chains.current[r6].filter(([o5]) => o5 !== l5)), e5 == null || e5.chains.current[r6].push([l5, new Promise((o5) => {
      S3.current.push(o5);
    })]), e5 == null || e5.chains.current[r6].push([l5, new Promise((o5) => {
      Promise.all(p3.current[r6].map(([f4, a3]) => a3)).then(() => o5());
    })]), r6 === "enter" ? u3.current = u3.current.then(() => e5 == null ? void 0 : e5.wait.current).then(() => t5(r6)) : t5(r6);
  }), v3 = o((l5, r6, t5) => {
    Promise.all(p3.current[r6].splice(0).map(([o5, f4]) => f4)).then(() => {
      var o5;
      (o5 = S3.current.shift()) == null || o5();
    }).then(() => t5(r6));
  });
  return (0, import_react15.useMemo)(() => ({ children: n3, register: E2, unregister: b, onStart: d9, onStop: v3, wait: u3, chains: p3 }), [E2, b, n3, d9, v3, p3, u3]);
}
function Ee() {
}
var Se2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re(i2) {
  var s11;
  let e5 = {};
  for (let n3 of Se2)
    e5[n3] = (s11 = i2[n3]) != null ? s11 : Ee;
  return e5;
}
function xe2(i2) {
  let e5 = (0, import_react15.useRef)(re(i2));
  return (0, import_react15.useEffect)(() => {
    e5.current = re(i2);
  }, [i2]), e5;
}
var Pe = "div";
var ie2 = S2.RenderStrategy;
var oe = C(function(e5, s11) {
  let { beforeEnter: n3, afterEnter: m7, beforeLeave: R, afterLeave: b, enter: E2, enterFrom: S3, enterTo: u3, entered: p3, leave: d9, leaveFrom: v3, leaveTo: l5, ...r6 } = e5, t5 = (0, import_react15.useRef)(null), o5 = y(t5, s11), f4 = r6.unmount ? j.Unmount : j.Hidden, { show: a3, appear: x3, initial: se } = ge(), [h5, _2] = (0, import_react15.useState)(a3 ? "visible" : "hidden"), K2 = be2(), { register: D2, unregister: V } = K2, j3 = (0, import_react15.useRef)(null);
  (0, import_react15.useEffect)(() => D2(t5), [D2, t5]), (0, import_react15.useEffect)(() => {
    if (f4 === j.Hidden && !!t5.current) {
      if (a3 && h5 !== "visible") {
        _2("visible");
        return;
      }
      return u(h5, { ["hidden"]: () => V(t5), ["visible"]: () => D2(t5) });
    }
  }, [h5, t5, D2, V, a3, f4]);
  let U3 = s2({ enter: P2(E2), enterFrom: P2(S3), enterTo: P2(u3), entered: P2(p3), leave: P2(d9), leaveFrom: P2(v3), leaveTo: P2(l5) }), w = xe2({ beforeEnter: n3, afterEnter: m7, beforeLeave: R, afterLeave: b }), k3 = a();
  (0, import_react15.useEffect)(() => {
    if (k3 && h5 === "visible" && t5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [t5, h5, k3]);
  let G2 = se && !x3, le2 = (() => !k3 || G2 || j3.current === a3 ? "idle" : a3 ? "enter" : "leave")(), ae2 = o((C3) => u(C3, { enter: () => w.current.beforeEnter(), leave: () => w.current.beforeLeave(), idle: () => {
  } })), ue = o((C3) => u(C3, { enter: () => w.current.afterEnter(), leave: () => w.current.afterLeave(), idle: () => {
  } })), L4 = ne2(() => {
    _2("hidden"), V(t5);
  }, K2);
  D({ container: t5, classes: U3, direction: le2, onStart: s2((C3) => {
    L4.onStart(t5, C3, ae2);
  }), onStop: s2((C3) => {
    L4.onStop(t5, C3, ue), C3 === "leave" && !I3(L4) && (_2("hidden"), V(t5));
  }) }), (0, import_react15.useEffect)(() => {
    !G2 || (f4 === j.Hidden ? j3.current = null : j3.current = a3);
  }, [a3, G2, h5]);
  let B = r6, de2 = { ref: o5 };
  return x3 && a3 && (typeof window == "undefined" || typeof document == "undefined") && (B = { ...B, className: e4(r6.className, ...U3.current.enter, ...U3.current.enterFrom) }), import_react15.default.createElement(M4.Provider, { value: L4 }, import_react15.default.createElement(C2, { value: u(h5, { ["visible"]: p2.Open, ["hidden"]: p2.Closed }) }, $({ ourProps: de2, theirProps: B, defaultTag: Pe, features: ie2, visible: h5 === "visible", name: "Transition.Child" })));
});
var J2 = C(function(e5, s11) {
  let { show: n3, appear: m7 = false, unmount: R, ...b } = e5, E2 = (0, import_react15.useRef)(null), S3 = y(E2, s11);
  a();
  let u3 = s8();
  if (n3 === void 0 && u3 !== null && (n3 = u(u3, { [p2.Open]: true, [p2.Closed]: false })), ![true, false].includes(n3))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p3, d9] = (0, import_react15.useState)(n3 ? "visible" : "hidden"), v3 = ne2(() => {
    d9("hidden");
  }), [l5, r6] = (0, import_react15.useState)(true), t5 = (0, import_react15.useRef)([n3]);
  s(() => {
    l5 !== false && t5.current[t5.current.length - 1] !== n3 && (t5.current.push(n3), r6(false));
  }, [t5, n3]);
  let o5 = (0, import_react15.useMemo)(() => ({ show: n3, appear: m7, initial: l5 }), [n3, m7, l5]);
  (0, import_react15.useEffect)(() => {
    if (n3)
      d9("visible");
    else if (!I3(v3))
      d9("hidden");
    else {
      let a3 = E2.current;
      if (!a3)
        return;
      let x3 = a3.getBoundingClientRect();
      x3.x === 0 && x3.y === 0 && x3.width === 0 && x3.height === 0 && d9("hidden");
    }
  }, [n3, v3]);
  let f4 = { unmount: R };
  return import_react15.default.createElement(M4.Provider, { value: v3 }, import_react15.default.createElement(A3.Provider, { value: o5 }, $({ ourProps: { ...f4, as: import_react15.Fragment, children: import_react15.default.createElement(oe, { ref: S3, ...f4, ...b }) }, theirProps: {}, defaultTag: import_react15.Fragment, features: ie2, visible: p3 === "visible", name: "Transition" })));
});
var ye = C(function(e5, s11) {
  let n3 = (0, import_react15.useContext)(A3) !== null, m7 = s8() !== null;
  return import_react15.default.createElement(import_react15.default.Fragment, null, !n3 && m7 ? import_react15.default.createElement(J2, { ref: s11, ...e5 }) : import_react15.default.createElement(oe, { ref: s11, ...e5 }));
});
var Je = Object.assign(J2, { Child: ye, Root: J2 });

export {
  p2 as p,
  s8 as s,
  C2 as C,
  mt,
  Je
};
//# sourceMappingURL=/build/_shared/chunk-R5BHNF67.js.map
