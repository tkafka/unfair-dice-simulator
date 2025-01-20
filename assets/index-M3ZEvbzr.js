var tj = Object.defineProperty;
var rj = (e, t, r) =>
  t in e
    ? tj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Gn = (e, t, r) => rj(e, typeof t != "symbol" ? t + "" : t, r);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const l of u.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = r(o);
    fetch(o.href, u);
  }
})();
var _l =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function We(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var id = { exports: {} },
  uo = {},
  ad = { exports: {} },
  Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c1;
function nj() {
  if (c1) return Ae;
  c1 = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    h = Symbol.iterator;
  function g(M) {
    return M === null || typeof M != "object"
      ? null
      : ((M = (h && M[h]) || M["@@iterator"]),
        typeof M == "function" ? M : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    x = {};
  function b(M, L, oe) {
    (this.props = M),
      (this.context = L),
      (this.refs = x),
      (this.updater = oe || w);
  }
  (b.prototype.isReactComponent = {}),
    (b.prototype.setState = function (M, L) {
      if (typeof M != "object" && typeof M != "function" && M != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, M, L, "setState");
    }),
    (b.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    });
  function T() {}
  T.prototype = b.prototype;
  function A(M, L, oe) {
    (this.props = M),
      (this.context = L),
      (this.refs = x),
      (this.updater = oe || w);
  }
  var E = (A.prototype = new T());
  (E.constructor = A), S(E, b.prototype), (E.isPureReactComponent = !0);
  var C = Array.isArray,
    _ = Object.prototype.hasOwnProperty,
    P = { current: null },
    k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(M, L, oe) {
    var pe,
      me = {},
      _e = null,
      Ce = null;
    if (L != null)
      for (pe in (L.ref !== void 0 && (Ce = L.ref),
      L.key !== void 0 && (_e = "" + L.key),
      L))
        _.call(L, pe) && !k.hasOwnProperty(pe) && (me[pe] = L[pe]);
    var Oe = arguments.length - 2;
    if (Oe === 1) me.children = oe;
    else if (1 < Oe) {
      for (var ie = Array(Oe), ye = 0; ye < Oe; ye++)
        ie[ye] = arguments[ye + 2];
      me.children = ie;
    }
    if (M && M.defaultProps)
      for (pe in ((Oe = M.defaultProps), Oe))
        me[pe] === void 0 && (me[pe] = Oe[pe]);
    return {
      $$typeof: e,
      type: M,
      key: _e,
      ref: Ce,
      props: me,
      _owner: P.current,
    };
  }
  function D(M, L) {
    return {
      $$typeof: e,
      type: M.type,
      key: L,
      ref: M.ref,
      props: M.props,
      _owner: M._owner,
    };
  }
  function G(M) {
    return typeof M == "object" && M !== null && M.$$typeof === e;
  }
  function R(M) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      M.replace(/[=:]/g, function (oe) {
        return L[oe];
      })
    );
  }
  var B = /\/+/g;
  function z(M, L) {
    return typeof M == "object" && M !== null && M.key != null
      ? R("" + M.key)
      : L.toString(36);
  }
  function V(M, L, oe, pe, me) {
    var _e = typeof M;
    (_e === "undefined" || _e === "boolean") && (M = null);
    var Ce = !1;
    if (M === null) Ce = !0;
    else
      switch (_e) {
        case "string":
        case "number":
          Ce = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case e:
            case t:
              Ce = !0;
          }
      }
    if (Ce)
      return (
        (Ce = M),
        (me = me(Ce)),
        (M = pe === "" ? "." + z(Ce, 0) : pe),
        C(me)
          ? ((oe = ""),
            M != null && (oe = M.replace(B, "$&/") + "/"),
            V(me, L, oe, "", function (ye) {
              return ye;
            }))
          : me != null &&
            (G(me) &&
              (me = D(
                me,
                oe +
                  (!me.key || (Ce && Ce.key === me.key)
                    ? ""
                    : ("" + me.key).replace(B, "$&/") + "/") +
                  M
              )),
            L.push(me)),
        1
      );
    if (((Ce = 0), (pe = pe === "" ? "." : pe + ":"), C(M)))
      for (var Oe = 0; Oe < M.length; Oe++) {
        _e = M[Oe];
        var ie = pe + z(_e, Oe);
        Ce += V(_e, L, oe, ie, me);
      }
    else if (((ie = g(M)), typeof ie == "function"))
      for (M = ie.call(M), Oe = 0; !(_e = M.next()).done; )
        (_e = _e.value), (ie = pe + z(_e, Oe++)), (Ce += V(_e, L, oe, ie, me));
    else if (_e === "object")
      throw (
        ((L = String(M)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(M).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Ce;
  }
  function K(M, L, oe) {
    if (M == null) return M;
    var pe = [],
      me = 0;
    return (
      V(M, pe, "", "", function (_e) {
        return L.call(oe, _e, me++);
      }),
      pe
    );
  }
  function Z(M) {
    if (M._status === -1) {
      var L = M._result;
      (L = L()),
        L.then(
          function (oe) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = oe));
          },
          function (oe) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = oe));
          }
        ),
        M._status === -1 && ((M._status = 0), (M._result = L));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var J = { current: null },
    W = { transition: null },
    X = {
      ReactCurrentDispatcher: J,
      ReactCurrentBatchConfig: W,
      ReactCurrentOwner: P,
    };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ae.Children = {
      map: K,
      forEach: function (M, L, oe) {
        K(
          M,
          function () {
            L.apply(this, arguments);
          },
          oe
        );
      },
      count: function (M) {
        var L = 0;
        return (
          K(M, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (M) {
        return (
          K(M, function (L) {
            return L;
          }) || []
        );
      },
      only: function (M) {
        if (!G(M))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return M;
      },
    }),
    (Ae.Component = b),
    (Ae.Fragment = r),
    (Ae.Profiler = o),
    (Ae.PureComponent = A),
    (Ae.StrictMode = n),
    (Ae.Suspense = f),
    (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (Ae.act = Q),
    (Ae.cloneElement = function (M, L, oe) {
      if (M == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            M +
            "."
        );
      var pe = S({}, M.props),
        me = M.key,
        _e = M.ref,
        Ce = M._owner;
      if (L != null) {
        if (
          (L.ref !== void 0 && ((_e = L.ref), (Ce = P.current)),
          L.key !== void 0 && (me = "" + L.key),
          M.type && M.type.defaultProps)
        )
          var Oe = M.type.defaultProps;
        for (ie in L)
          _.call(L, ie) &&
            !k.hasOwnProperty(ie) &&
            (pe[ie] = L[ie] === void 0 && Oe !== void 0 ? Oe[ie] : L[ie]);
      }
      var ie = arguments.length - 2;
      if (ie === 1) pe.children = oe;
      else if (1 < ie) {
        Oe = Array(ie);
        for (var ye = 0; ye < ie; ye++) Oe[ye] = arguments[ye + 2];
        pe.children = Oe;
      }
      return {
        $$typeof: e,
        type: M.type,
        key: me,
        ref: _e,
        props: pe,
        _owner: Ce,
      };
    }),
    (Ae.createContext = function (M) {
      return (
        (M = {
          $$typeof: l,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (M.Provider = { $$typeof: u, _context: M }),
        (M.Consumer = M)
      );
    }),
    (Ae.createElement = I),
    (Ae.createFactory = function (M) {
      var L = I.bind(null, M);
      return (L.type = M), L;
    }),
    (Ae.createRef = function () {
      return { current: null };
    }),
    (Ae.forwardRef = function (M) {
      return { $$typeof: c, render: M };
    }),
    (Ae.isValidElement = G),
    (Ae.lazy = function (M) {
      return { $$typeof: v, _payload: { _status: -1, _result: M }, _init: Z };
    }),
    (Ae.memo = function (M, L) {
      return { $$typeof: p, type: M, compare: L === void 0 ? null : L };
    }),
    (Ae.startTransition = function (M) {
      var L = W.transition;
      W.transition = {};
      try {
        M();
      } finally {
        W.transition = L;
      }
    }),
    (Ae.unstable_act = Q),
    (Ae.useCallback = function (M, L) {
      return J.current.useCallback(M, L);
    }),
    (Ae.useContext = function (M) {
      return J.current.useContext(M);
    }),
    (Ae.useDebugValue = function () {}),
    (Ae.useDeferredValue = function (M) {
      return J.current.useDeferredValue(M);
    }),
    (Ae.useEffect = function (M, L) {
      return J.current.useEffect(M, L);
    }),
    (Ae.useId = function () {
      return J.current.useId();
    }),
    (Ae.useImperativeHandle = function (M, L, oe) {
      return J.current.useImperativeHandle(M, L, oe);
    }),
    (Ae.useInsertionEffect = function (M, L) {
      return J.current.useInsertionEffect(M, L);
    }),
    (Ae.useLayoutEffect = function (M, L) {
      return J.current.useLayoutEffect(M, L);
    }),
    (Ae.useMemo = function (M, L) {
      return J.current.useMemo(M, L);
    }),
    (Ae.useReducer = function (M, L, oe) {
      return J.current.useReducer(M, L, oe);
    }),
    (Ae.useRef = function (M) {
      return J.current.useRef(M);
    }),
    (Ae.useState = function (M) {
      return J.current.useState(M);
    }),
    (Ae.useSyncExternalStore = function (M, L, oe) {
      return J.current.useSyncExternalStore(M, L, oe);
    }),
    (Ae.useTransition = function () {
      return J.current.useTransition();
    }),
    (Ae.version = "18.3.1"),
    Ae
  );
}
var f1;
function Om() {
  return f1 || ((f1 = 1), (ad.exports = nj())), ad.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d1;
function ij() {
  if (d1) return uo;
  d1 = 1;
  var e = Om(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, f, p) {
    var v,
      h = {},
      g = null,
      w = null;
    p !== void 0 && (g = "" + p),
      f.key !== void 0 && (g = "" + f.key),
      f.ref !== void 0 && (w = f.ref);
    for (v in f) n.call(f, v) && !u.hasOwnProperty(v) && (h[v] = f[v]);
    if (c && c.defaultProps)
      for (v in ((f = c.defaultProps), f)) h[v] === void 0 && (h[v] = f[v]);
    return {
      $$typeof: t,
      type: c,
      key: g,
      ref: w,
      props: h,
      _owner: o.current,
    };
  }
  return (uo.Fragment = r), (uo.jsx = l), (uo.jsxs = l), uo;
}
var p1;
function aj() {
  return p1 || ((p1 = 1), (id.exports = ij())), id.exports;
}
var ge = aj(),
  ue = Om();
const F = We(ue);
var Ol = {},
  od = { exports: {} },
  qt = {},
  ud = { exports: {} },
  ld = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h1;
function oj() {
  return (
    h1 ||
      ((h1 = 1),
      (function (e) {
        function t(W, X) {
          var Q = W.length;
          W.push(X);
          e: for (; 0 < Q; ) {
            var M = (Q - 1) >>> 1,
              L = W[M];
            if (0 < o(L, X)) (W[M] = X), (W[Q] = L), (Q = M);
            else break e;
          }
        }
        function r(W) {
          return W.length === 0 ? null : W[0];
        }
        function n(W) {
          if (W.length === 0) return null;
          var X = W[0],
            Q = W.pop();
          if (Q !== X) {
            W[0] = Q;
            e: for (var M = 0, L = W.length, oe = L >>> 1; M < oe; ) {
              var pe = 2 * (M + 1) - 1,
                me = W[pe],
                _e = pe + 1,
                Ce = W[_e];
              if (0 > o(me, Q))
                _e < L && 0 > o(Ce, me)
                  ? ((W[M] = Ce), (W[_e] = Q), (M = _e))
                  : ((W[M] = me), (W[pe] = Q), (M = pe));
              else if (_e < L && 0 > o(Ce, Q))
                (W[M] = Ce), (W[_e] = Q), (M = _e);
              else break e;
            }
          }
          return X;
        }
        function o(W, X) {
          var Q = W.sortIndex - X.sortIndex;
          return Q !== 0 ? Q : W.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var l = Date,
            c = l.now();
          e.unstable_now = function () {
            return l.now() - c;
          };
        }
        var f = [],
          p = [],
          v = 1,
          h = null,
          g = 3,
          w = !1,
          S = !1,
          x = !1,
          b = typeof setTimeout == "function" ? setTimeout : null,
          T = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function E(W) {
          for (var X = r(p); X !== null; ) {
            if (X.callback === null) n(p);
            else if (X.startTime <= W)
              n(p), (X.sortIndex = X.expirationTime), t(f, X);
            else break;
            X = r(p);
          }
        }
        function C(W) {
          if (((x = !1), E(W), !S))
            if (r(f) !== null) (S = !0), Z(_);
            else {
              var X = r(p);
              X !== null && J(C, X.startTime - W);
            }
        }
        function _(W, X) {
          (S = !1), x && ((x = !1), T(I), (I = -1)), (w = !0);
          var Q = g;
          try {
            for (
              E(X), h = r(f);
              h !== null && (!(h.expirationTime > X) || (W && !R()));

            ) {
              var M = h.callback;
              if (typeof M == "function") {
                (h.callback = null), (g = h.priorityLevel);
                var L = M(h.expirationTime <= X);
                (X = e.unstable_now()),
                  typeof L == "function"
                    ? (h.callback = L)
                    : h === r(f) && n(f),
                  E(X);
              } else n(f);
              h = r(f);
            }
            if (h !== null) var oe = !0;
            else {
              var pe = r(p);
              pe !== null && J(C, pe.startTime - X), (oe = !1);
            }
            return oe;
          } finally {
            (h = null), (g = Q), (w = !1);
          }
        }
        var P = !1,
          k = null,
          I = -1,
          D = 5,
          G = -1;
        function R() {
          return !(e.unstable_now() - G < D);
        }
        function B() {
          if (k !== null) {
            var W = e.unstable_now();
            G = W;
            var X = !0;
            try {
              X = k(!0, W);
            } finally {
              X ? z() : ((P = !1), (k = null));
            }
          } else P = !1;
        }
        var z;
        if (typeof A == "function")
          z = function () {
            A(B);
          };
        else if (typeof MessageChannel < "u") {
          var V = new MessageChannel(),
            K = V.port2;
          (V.port1.onmessage = B),
            (z = function () {
              K.postMessage(null);
            });
        } else
          z = function () {
            b(B, 0);
          };
        function Z(W) {
          (k = W), P || ((P = !0), z());
        }
        function J(W, X) {
          I = b(function () {
            W(e.unstable_now());
          }, X);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (W) {
            W.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            S || w || ((S = !0), Z(_));
          }),
          (e.unstable_forceFrameRate = function (W) {
            0 > W || 125 < W
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (D = 0 < W ? Math.floor(1e3 / W) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return g;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return r(f);
          }),
          (e.unstable_next = function (W) {
            switch (g) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = g;
            }
            var Q = g;
            g = X;
            try {
              return W();
            } finally {
              g = Q;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (W, X) {
            switch (W) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                W = 3;
            }
            var Q = g;
            g = W;
            try {
              return X();
            } finally {
              g = Q;
            }
          }),
          (e.unstable_scheduleCallback = function (W, X, Q) {
            var M = e.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? M + Q : M))
                : (Q = M),
              W)
            ) {
              case 1:
                var L = -1;
                break;
              case 2:
                L = 250;
                break;
              case 5:
                L = 1073741823;
                break;
              case 4:
                L = 1e4;
                break;
              default:
                L = 5e3;
            }
            return (
              (L = Q + L),
              (W = {
                id: v++,
                callback: X,
                priorityLevel: W,
                startTime: Q,
                expirationTime: L,
                sortIndex: -1,
              }),
              Q > M
                ? ((W.sortIndex = Q),
                  t(p, W),
                  r(f) === null &&
                    W === r(p) &&
                    (x ? (T(I), (I = -1)) : (x = !0), J(C, Q - M)))
                : ((W.sortIndex = L), t(f, W), S || w || ((S = !0), Z(_))),
              W
            );
          }),
          (e.unstable_shouldYield = R),
          (e.unstable_wrapCallback = function (W) {
            var X = g;
            return function () {
              var Q = g;
              g = X;
              try {
                return W.apply(this, arguments);
              } finally {
                g = Q;
              }
            };
          });
      })(ld)),
    ld
  );
}
var v1;
function uj() {
  return v1 || ((v1 = 1), (ud.exports = oj())), ud.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var y1;
function lj() {
  if (y1) return qt;
  y1 = 1;
  var e = Om(),
    t = uj();
  function r(i) {
    for (
      var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + i,
        s = 1;
      s < arguments.length;
      s++
    )
      a += "&args[]=" + encodeURIComponent(arguments[s]);
    return (
      "Minified React error #" +
      i +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var n = new Set(),
    o = {};
  function u(i, a) {
    l(i, a), l(i + "Capture", a);
  }
  function l(i, a) {
    for (o[i] = a, i = 0; i < a.length; i++) n.add(a[i]);
  }
  var c = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    f = Object.prototype.hasOwnProperty,
    p =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    h = {};
  function g(i) {
    return f.call(h, i)
      ? !0
      : f.call(v, i)
      ? !1
      : p.test(i)
      ? (h[i] = !0)
      : ((v[i] = !0), !1);
  }
  function w(i, a, s, d) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d
          ? !1
          : s !== null
          ? !s.acceptsBooleans
          : ((i = i.toLowerCase().slice(0, 5)), i !== "data-" && i !== "aria-");
      default:
        return !1;
    }
  }
  function S(i, a, s, d) {
    if (a === null || typeof a > "u" || w(i, a, s, d)) return !0;
    if (d) return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function x(i, a, s, d, y, m, O) {
    (this.acceptsBooleans = a === 2 || a === 3 || a === 4),
      (this.attributeName = d),
      (this.attributeNamespace = y),
      (this.mustUseProperty = s),
      (this.propertyName = i),
      (this.type = a),
      (this.sanitizeURL = m),
      (this.removeEmptyString = O);
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (i) {
      b[i] = new x(i, 0, !1, i, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (i) {
      var a = i[0];
      b[a] = new x(a, 1, !1, i[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      i
    ) {
      b[i] = new x(i, 2, !1, i.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (i) {
      b[i] = new x(i, 2, !1, i, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (i) {
        b[i] = new x(i, 3, !1, i.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (i) {
      b[i] = new x(i, 3, !0, i, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (i) {
      b[i] = new x(i, 4, !1, i, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (i) {
      b[i] = new x(i, 6, !1, i, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (i) {
      b[i] = new x(i, 5, !1, i.toLowerCase(), null, !1, !1);
    });
  var T = /[\-:]([a-z])/g;
  function A(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (i) {
      var a = i.replace(T, A);
      b[a] = new x(a, 1, !1, i, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (i) {
        var a = i.replace(T, A);
        b[a] = new x(a, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (i) {
      var a = i.replace(T, A);
      b[a] = new x(a, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (i) {
      b[i] = new x(i, 1, !1, i.toLowerCase(), null, !1, !1);
    }),
    (b.xlinkHref = new x(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (i) {
      b[i] = new x(i, 1, !1, i.toLowerCase(), null, !0, !0);
    });
  function E(i, a, s, d) {
    var y = b.hasOwnProperty(a) ? b[a] : null;
    (y !== null
      ? y.type !== 0
      : d ||
        !(2 < a.length) ||
        (a[0] !== "o" && a[0] !== "O") ||
        (a[1] !== "n" && a[1] !== "N")) &&
      (S(a, s, y, d) && (s = null),
      d || y === null
        ? g(a) &&
          (s === null ? i.removeAttribute(a) : i.setAttribute(a, "" + s))
        : y.mustUseProperty
        ? (i[y.propertyName] = s === null ? (y.type === 3 ? !1 : "") : s)
        : ((a = y.attributeName),
          (d = y.attributeNamespace),
          s === null
            ? i.removeAttribute(a)
            : ((y = y.type),
              (s = y === 3 || (y === 4 && s === !0) ? "" : "" + s),
              d ? i.setAttributeNS(d, a, s) : i.setAttribute(a, s))));
  }
  var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _ = Symbol.for("react.element"),
    P = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    I = Symbol.for("react.strict_mode"),
    D = Symbol.for("react.profiler"),
    G = Symbol.for("react.provider"),
    R = Symbol.for("react.context"),
    B = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    V = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    J = Symbol.for("react.offscreen"),
    W = Symbol.iterator;
  function X(i) {
    return i === null || typeof i != "object"
      ? null
      : ((i = (W && i[W]) || i["@@iterator"]),
        typeof i == "function" ? i : null);
  }
  var Q = Object.assign,
    M;
  function L(i) {
    if (M === void 0)
      try {
        throw Error();
      } catch (s) {
        var a = s.stack.trim().match(/\n( *(at )?)/);
        M = (a && a[1]) || "";
      }
    return (
      `
` +
      M +
      i
    );
  }
  var oe = !1;
  function pe(i, a) {
    if (!i || oe) return "";
    oe = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (
          ((a = function () {
            throw Error();
          }),
          Object.defineProperty(a.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(a, []);
          } catch (H) {
            var d = H;
          }
          Reflect.construct(i, [], a);
        } else {
          try {
            a.call();
          } catch (H) {
            d = H;
          }
          i.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (H) {
          d = H;
        }
        i();
      }
    } catch (H) {
      if (H && d && typeof H.stack == "string") {
        for (
          var y = H.stack.split(`
`),
            m = d.stack.split(`
`),
            O = y.length - 1,
            j = m.length - 1;
          1 <= O && 0 <= j && y[O] !== m[j];

        )
          j--;
        for (; 1 <= O && 0 <= j; O--, j--)
          if (y[O] !== m[j]) {
            if (O !== 1 || j !== 1)
              do
                if ((O--, j--, 0 > j || y[O] !== m[j])) {
                  var N =
                    `
` + y[O].replace(" at new ", " at ");
                  return (
                    i.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", i.displayName)),
                    N
                  );
                }
              while (1 <= O && 0 <= j);
            break;
          }
      }
    } finally {
      (oe = !1), (Error.prepareStackTrace = s);
    }
    return (i = i ? i.displayName || i.name : "") ? L(i) : "";
  }
  function me(i) {
    switch (i.tag) {
      case 5:
        return L(i.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (i = pe(i.type, !1)), i;
      case 11:
        return (i = pe(i.type.render, !1)), i;
      case 1:
        return (i = pe(i.type, !0)), i;
      default:
        return "";
    }
  }
  function _e(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case k:
        return "Fragment";
      case P:
        return "Portal";
      case D:
        return "Profiler";
      case I:
        return "StrictMode";
      case z:
        return "Suspense";
      case V:
        return "SuspenseList";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case R:
          return (i.displayName || "Context") + ".Consumer";
        case G:
          return (i._context.displayName || "Context") + ".Provider";
        case B:
          var a = i.render;
          return (
            (i = i.displayName),
            i ||
              ((i = a.displayName || a.name || ""),
              (i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef")),
            i
          );
        case K:
          return (
            (a = i.displayName || null), a !== null ? a : _e(i.type) || "Memo"
          );
        case Z:
          (a = i._payload), (i = i._init);
          try {
            return _e(i(a));
          } catch {}
      }
    return null;
  }
  function Ce(i) {
    var a = i.type;
    switch (i.tag) {
      case 24:
        return "Cache";
      case 9:
        return (a.displayName || "Context") + ".Consumer";
      case 10:
        return (a._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (i = a.render),
          (i = i.displayName || i.name || ""),
          a.displayName || (i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return a;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _e(a);
      case 8:
        return a === I ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof a == "function") return a.displayName || a.name || null;
        if (typeof a == "string") return a;
    }
    return null;
  }
  function Oe(i) {
    switch (typeof i) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return i;
      case "object":
        return i;
      default:
        return "";
    }
  }
  function ie(i) {
    var a = i.type;
    return (
      (i = i.nodeName) &&
      i.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function ye(i) {
    var a = ie(i) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(i.constructor.prototype, a),
      d = "" + i[a];
    if (
      !i.hasOwnProperty(a) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var y = s.get,
        m = s.set;
      return (
        Object.defineProperty(i, a, {
          configurable: !0,
          get: function () {
            return y.call(this);
          },
          set: function (O) {
            (d = "" + O), m.call(this, O);
          },
        }),
        Object.defineProperty(i, a, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return d;
          },
          setValue: function (O) {
            d = "" + O;
          },
          stopTracking: function () {
            (i._valueTracker = null), delete i[a];
          },
        }
      );
    }
  }
  function Pe(i) {
    i._valueTracker || (i._valueTracker = ye(i));
  }
  function re(i) {
    if (!i) return !1;
    var a = i._valueTracker;
    if (!a) return !0;
    var s = a.getValue(),
      d = "";
    return (
      i && (d = ie(i) ? (i.checked ? "true" : "false") : i.value),
      (i = d),
      i !== s ? (a.setValue(i), !0) : !1
    );
  }
  function Be(i) {
    if (
      ((i = i || (typeof document < "u" ? document : void 0)), typeof i > "u")
    )
      return null;
    try {
      return i.activeElement || i.body;
    } catch {
      return i.body;
    }
  }
  function Ee(i, a) {
    var s = a.checked;
    return Q({}, a, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? i._wrapperState.initialChecked,
    });
  }
  function Ze(i, a) {
    var s = a.defaultValue == null ? "" : a.defaultValue,
      d = a.checked != null ? a.checked : a.defaultChecked;
    (s = Oe(a.value != null ? a.value : s)),
      (i._wrapperState = {
        initialChecked: d,
        initialValue: s,
        controlled:
          a.type === "checkbox" || a.type === "radio"
            ? a.checked != null
            : a.value != null,
      });
  }
  function Je(i, a) {
    (a = a.checked), a != null && E(i, "checked", a, !1);
  }
  function dt(i, a) {
    Je(i, a);
    var s = Oe(a.value),
      d = a.type;
    if (s != null)
      d === "number"
        ? ((s === 0 && i.value === "") || i.value != s) && (i.value = "" + s)
        : i.value !== "" + s && (i.value = "" + s);
    else if (d === "submit" || d === "reset") {
      i.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value")
      ? _r(i, a.type, s)
      : a.hasOwnProperty("defaultValue") && _r(i, a.type, Oe(a.defaultValue)),
      a.checked == null &&
        a.defaultChecked != null &&
        (i.defaultChecked = !!a.defaultChecked);
  }
  function ur(i, a, s) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var d = a.type;
      if (
        !(
          (d !== "submit" && d !== "reset") ||
          (a.value !== void 0 && a.value !== null)
        )
      )
        return;
      (a = "" + i._wrapperState.initialValue),
        s || a === i.value || (i.value = a),
        (i.defaultValue = a);
    }
    (s = i.name),
      s !== "" && (i.name = ""),
      (i.defaultChecked = !!i._wrapperState.initialChecked),
      s !== "" && (i.name = s);
  }
  function _r(i, a, s) {
    (a !== "number" || Be(i.ownerDocument) !== i) &&
      (s == null
        ? (i.defaultValue = "" + i._wrapperState.initialValue)
        : i.defaultValue !== "" + s && (i.defaultValue = "" + s));
  }
  var Or = Array.isArray;
  function It(i, a, s, d) {
    if (((i = i.options), a)) {
      a = {};
      for (var y = 0; y < s.length; y++) a["$" + s[y]] = !0;
      for (s = 0; s < i.length; s++)
        (y = a.hasOwnProperty("$" + i[s].value)),
          i[s].selected !== y && (i[s].selected = y),
          y && d && (i[s].defaultSelected = !0);
    } else {
      for (s = "" + Oe(s), a = null, y = 0; y < i.length; y++) {
        if (i[y].value === s) {
          (i[y].selected = !0), d && (i[y].defaultSelected = !0);
          return;
        }
        a !== null || i[y].disabled || (a = i[y]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function lr(i, a) {
    if (a.dangerouslySetInnerHTML != null) throw Error(r(91));
    return Q({}, a, {
      value: void 0,
      defaultValue: void 0,
      children: "" + i._wrapperState.initialValue,
    });
  }
  function pi(i, a) {
    var s = a.value;
    if (s == null) {
      if (((s = a.children), (a = a.defaultValue), s != null)) {
        if (a != null) throw Error(r(92));
        if (Or(s)) {
          if (1 < s.length) throw Error(r(93));
          s = s[0];
        }
        a = s;
      }
      a == null && (a = ""), (s = a);
    }
    i._wrapperState = { initialValue: Oe(s) };
  }
  function xa(i, a) {
    var s = Oe(a.value),
      d = Oe(a.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== i.value && (i.value = s),
      a.defaultValue == null && i.defaultValue !== s && (i.defaultValue = s)),
      d != null && (i.defaultValue = "" + d);
  }
  function Sa(i) {
    var a = i.textContent;
    a === i._wrapperState.initialValue &&
      a !== "" &&
      a !== null &&
      (i.value = a);
  }
  function _g(i) {
    switch (i) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function hc(i, a) {
    return i == null || i === "http://www.w3.org/1999/xhtml"
      ? _g(a)
      : i === "http://www.w3.org/2000/svg" && a === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : i;
  }
  var vu,
    Og = (function (i) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (a, s, d, y) {
            MSApp.execUnsafeLocalFunction(function () {
              return i(a, s, d, y);
            });
          }
        : i;
    })(function (i, a) {
      if (i.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in i)
        i.innerHTML = a;
      else {
        for (
          vu = vu || document.createElement("div"),
            vu.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>",
            a = vu.firstChild;
          i.firstChild;

        )
          i.removeChild(i.firstChild);
        for (; a.firstChild; ) i.appendChild(a.firstChild);
      }
    });
  function _a(i, a) {
    if (a) {
      var s = i.firstChild;
      if (s && s === i.lastChild && s.nodeType === 3) {
        s.nodeValue = a;
        return;
      }
    }
    i.textContent = a;
  }
  var Oa = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    oC = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Oa).forEach(function (i) {
    oC.forEach(function (a) {
      (a = a + i.charAt(0).toUpperCase() + i.substring(1)), (Oa[a] = Oa[i]);
    });
  });
  function Pg(i, a, s) {
    return a == null || typeof a == "boolean" || a === ""
      ? ""
      : s || typeof a != "number" || a === 0 || (Oa.hasOwnProperty(i) && Oa[i])
      ? ("" + a).trim()
      : a + "px";
  }
  function Ag(i, a) {
    i = i.style;
    for (var s in a)
      if (a.hasOwnProperty(s)) {
        var d = s.indexOf("--") === 0,
          y = Pg(s, a[s], d);
        s === "float" && (s = "cssFloat"), d ? i.setProperty(s, y) : (i[s] = y);
      }
  }
  var uC = Q(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function vc(i, a) {
    if (a) {
      if (uC[i] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(r(137, i));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null) throw Error(r(60));
        if (
          typeof a.dangerouslySetInnerHTML != "object" ||
          !("__html" in a.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (a.style != null && typeof a.style != "object") throw Error(r(62));
    }
  }
  function yc(i, a) {
    if (i.indexOf("-") === -1) return typeof a.is == "string";
    switch (i) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mc = null;
  function gc(i) {
    return (
      (i = i.target || i.srcElement || window),
      i.correspondingUseElement && (i = i.correspondingUseElement),
      i.nodeType === 3 ? i.parentNode : i
    );
  }
  var bc = null,
    hi = null,
    vi = null;
  function Eg(i) {
    if ((i = Ga(i))) {
      if (typeof bc != "function") throw Error(r(280));
      var a = i.stateNode;
      a && ((a = Lu(a)), bc(i.stateNode, i.type, a));
    }
  }
  function Tg(i) {
    hi ? (vi ? vi.push(i) : (vi = [i])) : (hi = i);
  }
  function Cg() {
    if (hi) {
      var i = hi,
        a = vi;
      if (((vi = hi = null), Eg(i), a)) for (i = 0; i < a.length; i++) Eg(a[i]);
    }
  }
  function kg(i, a) {
    return i(a);
  }
  function jg() {}
  var wc = !1;
  function Mg(i, a, s) {
    if (wc) return i(a, s);
    wc = !0;
    try {
      return kg(i, a, s);
    } finally {
      (wc = !1), (hi !== null || vi !== null) && (jg(), Cg());
    }
  }
  function Pa(i, a) {
    var s = i.stateNode;
    if (s === null) return null;
    var d = Lu(s);
    if (d === null) return null;
    s = d[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) ||
          ((i = i.type),
          (d = !(
            i === "button" ||
            i === "input" ||
            i === "select" ||
            i === "textarea"
          ))),
          (i = !d);
        break e;
      default:
        i = !1;
    }
    if (i) return null;
    if (s && typeof s != "function") throw Error(r(231, a, typeof s));
    return s;
  }
  var xc = !1;
  if (c)
    try {
      var Aa = {};
      Object.defineProperty(Aa, "passive", {
        get: function () {
          xc = !0;
        },
      }),
        window.addEventListener("test", Aa, Aa),
        window.removeEventListener("test", Aa, Aa);
    } catch {
      xc = !1;
    }
  function lC(i, a, s, d, y, m, O, j, N) {
    var H = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(s, H);
    } catch (te) {
      this.onError(te);
    }
  }
  var Ea = !1,
    yu = null,
    mu = !1,
    Sc = null,
    sC = {
      onError: function (i) {
        (Ea = !0), (yu = i);
      },
    };
  function cC(i, a, s, d, y, m, O, j, N) {
    (Ea = !1), (yu = null), lC.apply(sC, arguments);
  }
  function fC(i, a, s, d, y, m, O, j, N) {
    if ((cC.apply(this, arguments), Ea)) {
      if (Ea) {
        var H = yu;
        (Ea = !1), (yu = null);
      } else throw Error(r(198));
      mu || ((mu = !0), (Sc = H));
    }
  }
  function In(i) {
    var a = i,
      s = i;
    if (i.alternate) for (; a.return; ) a = a.return;
    else {
      i = a;
      do (a = i), a.flags & 4098 && (s = a.return), (i = a.return);
      while (i);
    }
    return a.tag === 3 ? s : null;
  }
  function Ig(i) {
    if (i.tag === 13) {
      var a = i.memoizedState;
      if (
        (a === null && ((i = i.alternate), i !== null && (a = i.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function Ng(i) {
    if (In(i) !== i) throw Error(r(188));
  }
  function dC(i) {
    var a = i.alternate;
    if (!a) {
      if (((a = In(i)), a === null)) throw Error(r(188));
      return a !== i ? null : i;
    }
    for (var s = i, d = a; ; ) {
      var y = s.return;
      if (y === null) break;
      var m = y.alternate;
      if (m === null) {
        if (((d = y.return), d !== null)) {
          s = d;
          continue;
        }
        break;
      }
      if (y.child === m.child) {
        for (m = y.child; m; ) {
          if (m === s) return Ng(y), i;
          if (m === d) return Ng(y), a;
          m = m.sibling;
        }
        throw Error(r(188));
      }
      if (s.return !== d.return) (s = y), (d = m);
      else {
        for (var O = !1, j = y.child; j; ) {
          if (j === s) {
            (O = !0), (s = y), (d = m);
            break;
          }
          if (j === d) {
            (O = !0), (d = y), (s = m);
            break;
          }
          j = j.sibling;
        }
        if (!O) {
          for (j = m.child; j; ) {
            if (j === s) {
              (O = !0), (s = m), (d = y);
              break;
            }
            if (j === d) {
              (O = !0), (d = m), (s = y);
              break;
            }
            j = j.sibling;
          }
          if (!O) throw Error(r(189));
        }
      }
      if (s.alternate !== d) throw Error(r(190));
    }
    if (s.tag !== 3) throw Error(r(188));
    return s.stateNode.current === s ? i : a;
  }
  function Rg(i) {
    return (i = dC(i)), i !== null ? $g(i) : null;
  }
  function $g(i) {
    if (i.tag === 5 || i.tag === 6) return i;
    for (i = i.child; i !== null; ) {
      var a = $g(i);
      if (a !== null) return a;
      i = i.sibling;
    }
    return null;
  }
  var Dg = t.unstable_scheduleCallback,
    Lg = t.unstable_cancelCallback,
    pC = t.unstable_shouldYield,
    hC = t.unstable_requestPaint,
    rt = t.unstable_now,
    vC = t.unstable_getCurrentPriorityLevel,
    _c = t.unstable_ImmediatePriority,
    qg = t.unstable_UserBlockingPriority,
    gu = t.unstable_NormalPriority,
    yC = t.unstable_LowPriority,
    Bg = t.unstable_IdlePriority,
    bu = null,
    Pr = null;
  function mC(i) {
    if (Pr && typeof Pr.onCommitFiberRoot == "function")
      try {
        Pr.onCommitFiberRoot(bu, i, void 0, (i.current.flags & 128) === 128);
      } catch {}
  }
  var sr = Math.clz32 ? Math.clz32 : wC,
    gC = Math.log,
    bC = Math.LN2;
  function wC(i) {
    return (i >>>= 0), i === 0 ? 32 : (31 - ((gC(i) / bC) | 0)) | 0;
  }
  var wu = 64,
    xu = 4194304;
  function Ta(i) {
    switch (i & -i) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return i & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return i;
    }
  }
  function Su(i, a) {
    var s = i.pendingLanes;
    if (s === 0) return 0;
    var d = 0,
      y = i.suspendedLanes,
      m = i.pingedLanes,
      O = s & 268435455;
    if (O !== 0) {
      var j = O & ~y;
      j !== 0 ? (d = Ta(j)) : ((m &= O), m !== 0 && (d = Ta(m)));
    } else (O = s & ~y), O !== 0 ? (d = Ta(O)) : m !== 0 && (d = Ta(m));
    if (d === 0) return 0;
    if (
      a !== 0 &&
      a !== d &&
      !(a & y) &&
      ((y = d & -d), (m = a & -a), y >= m || (y === 16 && (m & 4194240) !== 0))
    )
      return a;
    if ((d & 4 && (d |= s & 16), (a = i.entangledLanes), a !== 0))
      for (i = i.entanglements, a &= d; 0 < a; )
        (s = 31 - sr(a)), (y = 1 << s), (d |= i[s]), (a &= ~y);
    return d;
  }
  function xC(i, a) {
    switch (i) {
      case 1:
      case 2:
      case 4:
        return a + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function SC(i, a) {
    for (
      var s = i.suspendedLanes,
        d = i.pingedLanes,
        y = i.expirationTimes,
        m = i.pendingLanes;
      0 < m;

    ) {
      var O = 31 - sr(m),
        j = 1 << O,
        N = y[O];
      N === -1
        ? (!(j & s) || j & d) && (y[O] = xC(j, a))
        : N <= a && (i.expiredLanes |= j),
        (m &= ~j);
    }
  }
  function Oc(i) {
    return (
      (i = i.pendingLanes & -1073741825),
      i !== 0 ? i : i & 1073741824 ? 1073741824 : 0
    );
  }
  function Fg() {
    var i = wu;
    return (wu <<= 1), !(wu & 4194240) && (wu = 64), i;
  }
  function Pc(i) {
    for (var a = [], s = 0; 31 > s; s++) a.push(i);
    return a;
  }
  function Ca(i, a, s) {
    (i.pendingLanes |= a),
      a !== 536870912 && ((i.suspendedLanes = 0), (i.pingedLanes = 0)),
      (i = i.eventTimes),
      (a = 31 - sr(a)),
      (i[a] = s);
  }
  function _C(i, a) {
    var s = i.pendingLanes & ~a;
    (i.pendingLanes = a),
      (i.suspendedLanes = 0),
      (i.pingedLanes = 0),
      (i.expiredLanes &= a),
      (i.mutableReadLanes &= a),
      (i.entangledLanes &= a),
      (a = i.entanglements);
    var d = i.eventTimes;
    for (i = i.expirationTimes; 0 < s; ) {
      var y = 31 - sr(s),
        m = 1 << y;
      (a[y] = 0), (d[y] = -1), (i[y] = -1), (s &= ~m);
    }
  }
  function Ac(i, a) {
    var s = (i.entangledLanes |= a);
    for (i = i.entanglements; s; ) {
      var d = 31 - sr(s),
        y = 1 << d;
      (y & a) | (i[d] & a) && (i[d] |= a), (s &= ~y);
    }
  }
  var Le = 0;
  function zg(i) {
    return (
      (i &= -i), 1 < i ? (4 < i ? (i & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ug,
    Ec,
    Wg,
    Hg,
    Gg,
    Tc = !1,
    _u = [],
    rn = null,
    nn = null,
    an = null,
    ka = new Map(),
    ja = new Map(),
    on = [],
    OC =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Kg(i, a) {
    switch (i) {
      case "focusin":
      case "focusout":
        rn = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        an = null;
        break;
      case "pointerover":
      case "pointerout":
        ka.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ja.delete(a.pointerId);
    }
  }
  function Ma(i, a, s, d, y, m) {
    return i === null || i.nativeEvent !== m
      ? ((i = {
          blockedOn: a,
          domEventName: s,
          eventSystemFlags: d,
          nativeEvent: m,
          targetContainers: [y],
        }),
        a !== null && ((a = Ga(a)), a !== null && Ec(a)),
        i)
      : ((i.eventSystemFlags |= d),
        (a = i.targetContainers),
        y !== null && a.indexOf(y) === -1 && a.push(y),
        i);
  }
  function PC(i, a, s, d, y) {
    switch (a) {
      case "focusin":
        return (rn = Ma(rn, i, a, s, d, y)), !0;
      case "dragenter":
        return (nn = Ma(nn, i, a, s, d, y)), !0;
      case "mouseover":
        return (an = Ma(an, i, a, s, d, y)), !0;
      case "pointerover":
        var m = y.pointerId;
        return ka.set(m, Ma(ka.get(m) || null, i, a, s, d, y)), !0;
      case "gotpointercapture":
        return (
          (m = y.pointerId), ja.set(m, Ma(ja.get(m) || null, i, a, s, d, y)), !0
        );
    }
    return !1;
  }
  function Vg(i) {
    var a = Nn(i.target);
    if (a !== null) {
      var s = In(a);
      if (s !== null) {
        if (((a = s.tag), a === 13)) {
          if (((a = Ig(s)), a !== null)) {
            (i.blockedOn = a),
              Gg(i.priority, function () {
                Wg(s);
              });
            return;
          }
        } else if (a === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          i.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    i.blockedOn = null;
  }
  function Ou(i) {
    if (i.blockedOn !== null) return !1;
    for (var a = i.targetContainers; 0 < a.length; ) {
      var s = kc(i.domEventName, i.eventSystemFlags, a[0], i.nativeEvent);
      if (s === null) {
        s = i.nativeEvent;
        var d = new s.constructor(s.type, s);
        (mc = d), s.target.dispatchEvent(d), (mc = null);
      } else return (a = Ga(s)), a !== null && Ec(a), (i.blockedOn = s), !1;
      a.shift();
    }
    return !0;
  }
  function Xg(i, a, s) {
    Ou(i) && s.delete(a);
  }
  function AC() {
    (Tc = !1),
      rn !== null && Ou(rn) && (rn = null),
      nn !== null && Ou(nn) && (nn = null),
      an !== null && Ou(an) && (an = null),
      ka.forEach(Xg),
      ja.forEach(Xg);
  }
  function Ia(i, a) {
    i.blockedOn === a &&
      ((i.blockedOn = null),
      Tc ||
        ((Tc = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, AC)));
  }
  function Na(i) {
    function a(y) {
      return Ia(y, i);
    }
    if (0 < _u.length) {
      Ia(_u[0], i);
      for (var s = 1; s < _u.length; s++) {
        var d = _u[s];
        d.blockedOn === i && (d.blockedOn = null);
      }
    }
    for (
      rn !== null && Ia(rn, i),
        nn !== null && Ia(nn, i),
        an !== null && Ia(an, i),
        ka.forEach(a),
        ja.forEach(a),
        s = 0;
      s < on.length;
      s++
    )
      (d = on[s]), d.blockedOn === i && (d.blockedOn = null);
    for (; 0 < on.length && ((s = on[0]), s.blockedOn === null); )
      Vg(s), s.blockedOn === null && on.shift();
  }
  var yi = C.ReactCurrentBatchConfig,
    Pu = !0;
  function EC(i, a, s, d) {
    var y = Le,
      m = yi.transition;
    yi.transition = null;
    try {
      (Le = 1), Cc(i, a, s, d);
    } finally {
      (Le = y), (yi.transition = m);
    }
  }
  function TC(i, a, s, d) {
    var y = Le,
      m = yi.transition;
    yi.transition = null;
    try {
      (Le = 4), Cc(i, a, s, d);
    } finally {
      (Le = y), (yi.transition = m);
    }
  }
  function Cc(i, a, s, d) {
    if (Pu) {
      var y = kc(i, a, s, d);
      if (y === null) Kc(i, a, d, Au, s), Kg(i, d);
      else if (PC(y, i, a, s, d)) d.stopPropagation();
      else if ((Kg(i, d), a & 4 && -1 < OC.indexOf(i))) {
        for (; y !== null; ) {
          var m = Ga(y);
          if (
            (m !== null && Ug(m),
            (m = kc(i, a, s, d)),
            m === null && Kc(i, a, d, Au, s),
            m === y)
          )
            break;
          y = m;
        }
        y !== null && d.stopPropagation();
      } else Kc(i, a, d, null, s);
    }
  }
  var Au = null;
  function kc(i, a, s, d) {
    if (((Au = null), (i = gc(d)), (i = Nn(i)), i !== null))
      if (((a = In(i)), a === null)) i = null;
      else if (((s = a.tag), s === 13)) {
        if (((i = Ig(a)), i !== null)) return i;
        i = null;
      } else if (s === 3) {
        if (a.stateNode.current.memoizedState.isDehydrated)
          return a.tag === 3 ? a.stateNode.containerInfo : null;
        i = null;
      } else a !== i && (i = null);
    return (Au = i), null;
  }
  function Yg(i) {
    switch (i) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (vC()) {
          case _c:
            return 1;
          case qg:
            return 4;
          case gu:
          case yC:
            return 16;
          case Bg:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var un = null,
    jc = null,
    Eu = null;
  function Qg() {
    if (Eu) return Eu;
    var i,
      a = jc,
      s = a.length,
      d,
      y = "value" in un ? un.value : un.textContent,
      m = y.length;
    for (i = 0; i < s && a[i] === y[i]; i++);
    var O = s - i;
    for (d = 1; d <= O && a[s - d] === y[m - d]; d++);
    return (Eu = y.slice(i, 1 < d ? 1 - d : void 0));
  }
  function Tu(i) {
    var a = i.keyCode;
    return (
      "charCode" in i
        ? ((i = i.charCode), i === 0 && a === 13 && (i = 13))
        : (i = a),
      i === 10 && (i = 13),
      32 <= i || i === 13 ? i : 0
    );
  }
  function Cu() {
    return !0;
  }
  function Zg() {
    return !1;
  }
  function zt(i) {
    function a(s, d, y, m, O) {
      (this._reactName = s),
        (this._targetInst = y),
        (this.type = d),
        (this.nativeEvent = m),
        (this.target = O),
        (this.currentTarget = null);
      for (var j in i)
        i.hasOwnProperty(j) && ((s = i[j]), (this[j] = s ? s(m) : m[j]));
      return (
        (this.isDefaultPrevented = (
          m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1
        )
          ? Cu
          : Zg),
        (this.isPropagationStopped = Zg),
        this
      );
    }
    return (
      Q(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = Cu));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = Cu));
        },
        persist: function () {},
        isPersistent: Cu,
      }),
      a
    );
  }
  var mi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (i) {
        return i.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Mc = zt(mi),
    Ra = Q({}, mi, { view: 0, detail: 0 }),
    CC = zt(Ra),
    Ic,
    Nc,
    $a,
    ku = Q({}, Ra, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $c,
      button: 0,
      buttons: 0,
      relatedTarget: function (i) {
        return i.relatedTarget === void 0
          ? i.fromElement === i.srcElement
            ? i.toElement
            : i.fromElement
          : i.relatedTarget;
      },
      movementX: function (i) {
        return "movementX" in i
          ? i.movementX
          : (i !== $a &&
              ($a && i.type === "mousemove"
                ? ((Ic = i.screenX - $a.screenX), (Nc = i.screenY - $a.screenY))
                : (Nc = Ic = 0),
              ($a = i)),
            Ic);
      },
      movementY: function (i) {
        return "movementY" in i ? i.movementY : Nc;
      },
    }),
    Jg = zt(ku),
    kC = Q({}, ku, { dataTransfer: 0 }),
    jC = zt(kC),
    MC = Q({}, Ra, { relatedTarget: 0 }),
    Rc = zt(MC),
    IC = Q({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    NC = zt(IC),
    RC = Q({}, mi, {
      clipboardData: function (i) {
        return "clipboardData" in i ? i.clipboardData : window.clipboardData;
      },
    }),
    $C = zt(RC),
    DC = Q({}, mi, { data: 0 }),
    e0 = zt(DC),
    LC = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    qC = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    BC = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function FC(i) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(i)
      : (i = BC[i])
      ? !!a[i]
      : !1;
  }
  function $c() {
    return FC;
  }
  var zC = Q({}, Ra, {
      key: function (i) {
        if (i.key) {
          var a = LC[i.key] || i.key;
          if (a !== "Unidentified") return a;
        }
        return i.type === "keypress"
          ? ((i = Tu(i)), i === 13 ? "Enter" : String.fromCharCode(i))
          : i.type === "keydown" || i.type === "keyup"
          ? qC[i.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $c,
      charCode: function (i) {
        return i.type === "keypress" ? Tu(i) : 0;
      },
      keyCode: function (i) {
        return i.type === "keydown" || i.type === "keyup" ? i.keyCode : 0;
      },
      which: function (i) {
        return i.type === "keypress"
          ? Tu(i)
          : i.type === "keydown" || i.type === "keyup"
          ? i.keyCode
          : 0;
      },
    }),
    UC = zt(zC),
    WC = Q({}, ku, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    t0 = zt(WC),
    HC = Q({}, Ra, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $c,
    }),
    GC = zt(HC),
    KC = Q({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    VC = zt(KC),
    XC = Q({}, ku, {
      deltaX: function (i) {
        return "deltaX" in i
          ? i.deltaX
          : "wheelDeltaX" in i
          ? -i.wheelDeltaX
          : 0;
      },
      deltaY: function (i) {
        return "deltaY" in i
          ? i.deltaY
          : "wheelDeltaY" in i
          ? -i.wheelDeltaY
          : "wheelDelta" in i
          ? -i.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    YC = zt(XC),
    QC = [9, 13, 27, 32],
    Dc = c && "CompositionEvent" in window,
    Da = null;
  c && "documentMode" in document && (Da = document.documentMode);
  var ZC = c && "TextEvent" in window && !Da,
    r0 = c && (!Dc || (Da && 8 < Da && 11 >= Da)),
    n0 = " ",
    i0 = !1;
  function a0(i, a) {
    switch (i) {
      case "keyup":
        return QC.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function o0(i) {
    return (i = i.detail), typeof i == "object" && "data" in i ? i.data : null;
  }
  var gi = !1;
  function JC(i, a) {
    switch (i) {
      case "compositionend":
        return o0(a);
      case "keypress":
        return a.which !== 32 ? null : ((i0 = !0), n0);
      case "textInput":
        return (i = a.data), i === n0 && i0 ? null : i;
      default:
        return null;
    }
  }
  function ek(i, a) {
    if (gi)
      return i === "compositionend" || (!Dc && a0(i, a))
        ? ((i = Qg()), (Eu = jc = un = null), (gi = !1), i)
        : null;
    switch (i) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return r0 && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var tk = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function u0(i) {
    var a = i && i.nodeName && i.nodeName.toLowerCase();
    return a === "input" ? !!tk[i.type] : a === "textarea";
  }
  function l0(i, a, s, d) {
    Tg(d),
      (a = Ru(a, "onChange")),
      0 < a.length &&
        ((s = new Mc("onChange", "change", null, s, d)),
        i.push({ event: s, listeners: a }));
  }
  var La = null,
    qa = null;
  function rk(i) {
    A0(i, 0);
  }
  function ju(i) {
    var a = _i(i);
    if (re(a)) return i;
  }
  function nk(i, a) {
    if (i === "change") return a;
  }
  var s0 = !1;
  if (c) {
    var Lc;
    if (c) {
      var qc = "oninput" in document;
      if (!qc) {
        var c0 = document.createElement("div");
        c0.setAttribute("oninput", "return;"),
          (qc = typeof c0.oninput == "function");
      }
      Lc = qc;
    } else Lc = !1;
    s0 = Lc && (!document.documentMode || 9 < document.documentMode);
  }
  function f0() {
    La && (La.detachEvent("onpropertychange", d0), (qa = La = null));
  }
  function d0(i) {
    if (i.propertyName === "value" && ju(qa)) {
      var a = [];
      l0(a, qa, i, gc(i)), Mg(rk, a);
    }
  }
  function ik(i, a, s) {
    i === "focusin"
      ? (f0(), (La = a), (qa = s), La.attachEvent("onpropertychange", d0))
      : i === "focusout" && f0();
  }
  function ak(i) {
    if (i === "selectionchange" || i === "keyup" || i === "keydown")
      return ju(qa);
  }
  function ok(i, a) {
    if (i === "click") return ju(a);
  }
  function uk(i, a) {
    if (i === "input" || i === "change") return ju(a);
  }
  function lk(i, a) {
    return (i === a && (i !== 0 || 1 / i === 1 / a)) || (i !== i && a !== a);
  }
  var cr = typeof Object.is == "function" ? Object.is : lk;
  function Ba(i, a) {
    if (cr(i, a)) return !0;
    if (
      typeof i != "object" ||
      i === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var s = Object.keys(i),
      d = Object.keys(a);
    if (s.length !== d.length) return !1;
    for (d = 0; d < s.length; d++) {
      var y = s[d];
      if (!f.call(a, y) || !cr(i[y], a[y])) return !1;
    }
    return !0;
  }
  function p0(i) {
    for (; i && i.firstChild; ) i = i.firstChild;
    return i;
  }
  function h0(i, a) {
    var s = p0(i);
    i = 0;
    for (var d; s; ) {
      if (s.nodeType === 3) {
        if (((d = i + s.textContent.length), i <= a && d >= a))
          return { node: s, offset: a - i };
        i = d;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = p0(s);
    }
  }
  function v0(i, a) {
    return i && a
      ? i === a
        ? !0
        : i && i.nodeType === 3
        ? !1
        : a && a.nodeType === 3
        ? v0(i, a.parentNode)
        : "contains" in i
        ? i.contains(a)
        : i.compareDocumentPosition
        ? !!(i.compareDocumentPosition(a) & 16)
        : !1
      : !1;
  }
  function y0() {
    for (var i = window, a = Be(); a instanceof i.HTMLIFrameElement; ) {
      try {
        var s = typeof a.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) i = a.contentWindow;
      else break;
      a = Be(i.document);
    }
    return a;
  }
  function Bc(i) {
    var a = i && i.nodeName && i.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (i.type === "text" ||
          i.type === "search" ||
          i.type === "tel" ||
          i.type === "url" ||
          i.type === "password")) ||
        a === "textarea" ||
        i.contentEditable === "true")
    );
  }
  function sk(i) {
    var a = y0(),
      s = i.focusedElem,
      d = i.selectionRange;
    if (
      a !== s &&
      s &&
      s.ownerDocument &&
      v0(s.ownerDocument.documentElement, s)
    ) {
      if (d !== null && Bc(s)) {
        if (
          ((a = d.start),
          (i = d.end),
          i === void 0 && (i = a),
          "selectionStart" in s)
        )
          (s.selectionStart = a),
            (s.selectionEnd = Math.min(i, s.value.length));
        else if (
          ((i = ((a = s.ownerDocument || document) && a.defaultView) || window),
          i.getSelection)
        ) {
          i = i.getSelection();
          var y = s.textContent.length,
            m = Math.min(d.start, y);
          (d = d.end === void 0 ? m : Math.min(d.end, y)),
            !i.extend && m > d && ((y = d), (d = m), (m = y)),
            (y = h0(s, m));
          var O = h0(s, d);
          y &&
            O &&
            (i.rangeCount !== 1 ||
              i.anchorNode !== y.node ||
              i.anchorOffset !== y.offset ||
              i.focusNode !== O.node ||
              i.focusOffset !== O.offset) &&
            ((a = a.createRange()),
            a.setStart(y.node, y.offset),
            i.removeAllRanges(),
            m > d
              ? (i.addRange(a), i.extend(O.node, O.offset))
              : (a.setEnd(O.node, O.offset), i.addRange(a)));
        }
      }
      for (a = [], i = s; (i = i.parentNode); )
        i.nodeType === 1 &&
          a.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < a.length; s++)
        (i = a[s]),
          (i.element.scrollLeft = i.left),
          (i.element.scrollTop = i.top);
    }
  }
  var ck = c && "documentMode" in document && 11 >= document.documentMode,
    bi = null,
    Fc = null,
    Fa = null,
    zc = !1;
  function m0(i, a, s) {
    var d =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    zc ||
      bi == null ||
      bi !== Be(d) ||
      ((d = bi),
      "selectionStart" in d && Bc(d)
        ? (d = { start: d.selectionStart, end: d.selectionEnd })
        : ((d = (
            (d.ownerDocument && d.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset,
          })),
      (Fa && Ba(Fa, d)) ||
        ((Fa = d),
        (d = Ru(Fc, "onSelect")),
        0 < d.length &&
          ((a = new Mc("onSelect", "select", null, a, s)),
          i.push({ event: a, listeners: d }),
          (a.target = bi))));
  }
  function Mu(i, a) {
    var s = {};
    return (
      (s[i.toLowerCase()] = a.toLowerCase()),
      (s["Webkit" + i] = "webkit" + a),
      (s["Moz" + i] = "moz" + a),
      s
    );
  }
  var wi = {
      animationend: Mu("Animation", "AnimationEnd"),
      animationiteration: Mu("Animation", "AnimationIteration"),
      animationstart: Mu("Animation", "AnimationStart"),
      transitionend: Mu("Transition", "TransitionEnd"),
    },
    Uc = {},
    g0 = {};
  c &&
    ((g0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wi.animationend.animation,
      delete wi.animationiteration.animation,
      delete wi.animationstart.animation),
    "TransitionEvent" in window || delete wi.transitionend.transition);
  function Iu(i) {
    if (Uc[i]) return Uc[i];
    if (!wi[i]) return i;
    var a = wi[i],
      s;
    for (s in a) if (a.hasOwnProperty(s) && s in g0) return (Uc[i] = a[s]);
    return i;
  }
  var b0 = Iu("animationend"),
    w0 = Iu("animationiteration"),
    x0 = Iu("animationstart"),
    S0 = Iu("transitionend"),
    _0 = new Map(),
    O0 =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function ln(i, a) {
    _0.set(i, a), u(a, [i]);
  }
  for (var Wc = 0; Wc < O0.length; Wc++) {
    var Hc = O0[Wc],
      fk = Hc.toLowerCase(),
      dk = Hc[0].toUpperCase() + Hc.slice(1);
    ln(fk, "on" + dk);
  }
  ln(b0, "onAnimationEnd"),
    ln(w0, "onAnimationIteration"),
    ln(x0, "onAnimationStart"),
    ln("dblclick", "onDoubleClick"),
    ln("focusin", "onFocus"),
    ln("focusout", "onBlur"),
    ln(S0, "onTransitionEnd"),
    l("onMouseEnter", ["mouseout", "mouseover"]),
    l("onMouseLeave", ["mouseout", "mouseover"]),
    l("onPointerEnter", ["pointerout", "pointerover"]),
    l("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var za =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    pk = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(za)
    );
  function P0(i, a, s) {
    var d = i.type || "unknown-event";
    (i.currentTarget = s), fC(d, a, void 0, i), (i.currentTarget = null);
  }
  function A0(i, a) {
    a = (a & 4) !== 0;
    for (var s = 0; s < i.length; s++) {
      var d = i[s],
        y = d.event;
      d = d.listeners;
      e: {
        var m = void 0;
        if (a)
          for (var O = d.length - 1; 0 <= O; O--) {
            var j = d[O],
              N = j.instance,
              H = j.currentTarget;
            if (((j = j.listener), N !== m && y.isPropagationStopped()))
              break e;
            P0(y, j, H), (m = N);
          }
        else
          for (O = 0; O < d.length; O++) {
            if (
              ((j = d[O]),
              (N = j.instance),
              (H = j.currentTarget),
              (j = j.listener),
              N !== m && y.isPropagationStopped())
            )
              break e;
            P0(y, j, H), (m = N);
          }
      }
    }
    if (mu) throw ((i = Sc), (mu = !1), (Sc = null), i);
  }
  function He(i, a) {
    var s = a[Jc];
    s === void 0 && (s = a[Jc] = new Set());
    var d = i + "__bubble";
    s.has(d) || (E0(a, i, 2, !1), s.add(d));
  }
  function Gc(i, a, s) {
    var d = 0;
    a && (d |= 4), E0(s, i, d, a);
  }
  var Nu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ua(i) {
    if (!i[Nu]) {
      (i[Nu] = !0),
        n.forEach(function (s) {
          s !== "selectionchange" && (pk.has(s) || Gc(s, !1, i), Gc(s, !0, i));
        });
      var a = i.nodeType === 9 ? i : i.ownerDocument;
      a === null || a[Nu] || ((a[Nu] = !0), Gc("selectionchange", !1, a));
    }
  }
  function E0(i, a, s, d) {
    switch (Yg(a)) {
      case 1:
        var y = EC;
        break;
      case 4:
        y = TC;
        break;
      default:
        y = Cc;
    }
    (s = y.bind(null, a, s, i)),
      (y = void 0),
      !xc ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (y = !0),
      d
        ? y !== void 0
          ? i.addEventListener(a, s, { capture: !0, passive: y })
          : i.addEventListener(a, s, !0)
        : y !== void 0
        ? i.addEventListener(a, s, { passive: y })
        : i.addEventListener(a, s, !1);
  }
  function Kc(i, a, s, d, y) {
    var m = d;
    if (!(a & 1) && !(a & 2) && d !== null)
      e: for (;;) {
        if (d === null) return;
        var O = d.tag;
        if (O === 3 || O === 4) {
          var j = d.stateNode.containerInfo;
          if (j === y || (j.nodeType === 8 && j.parentNode === y)) break;
          if (O === 4)
            for (O = d.return; O !== null; ) {
              var N = O.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = O.stateNode.containerInfo),
                N === y || (N.nodeType === 8 && N.parentNode === y))
              )
                return;
              O = O.return;
            }
          for (; j !== null; ) {
            if (((O = Nn(j)), O === null)) return;
            if (((N = O.tag), N === 5 || N === 6)) {
              d = m = O;
              continue e;
            }
            j = j.parentNode;
          }
        }
        d = d.return;
      }
    Mg(function () {
      var H = m,
        te = gc(s),
        ne = [];
      e: {
        var ee = _0.get(i);
        if (ee !== void 0) {
          var le = Mc,
            de = i;
          switch (i) {
            case "keypress":
              if (Tu(s) === 0) break e;
            case "keydown":
            case "keyup":
              le = UC;
              break;
            case "focusin":
              (de = "focus"), (le = Rc);
              break;
            case "focusout":
              (de = "blur"), (le = Rc);
              break;
            case "beforeblur":
            case "afterblur":
              le = Rc;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              le = Jg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              le = jC;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              le = GC;
              break;
            case b0:
            case w0:
            case x0:
              le = NC;
              break;
            case S0:
              le = VC;
              break;
            case "scroll":
              le = CC;
              break;
            case "wheel":
              le = YC;
              break;
            case "copy":
            case "cut":
            case "paste":
              le = $C;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              le = t0;
          }
          var he = (a & 4) !== 0,
            nt = !he && i === "scroll",
            q = he ? (ee !== null ? ee + "Capture" : null) : ee;
          he = [];
          for (var $ = H, U; $ !== null; ) {
            U = $;
            var ae = U.stateNode;
            if (
              (U.tag === 5 &&
                ae !== null &&
                ((U = ae),
                q !== null &&
                  ((ae = Pa($, q)), ae != null && he.push(Wa($, ae, U)))),
              nt)
            )
              break;
            $ = $.return;
          }
          0 < he.length &&
            ((ee = new le(ee, de, null, s, te)),
            ne.push({ event: ee, listeners: he }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (
            ((ee = i === "mouseover" || i === "pointerover"),
            (le = i === "mouseout" || i === "pointerout"),
            ee &&
              s !== mc &&
              (de = s.relatedTarget || s.fromElement) &&
              (Nn(de) || de[Dr]))
          )
            break e;
          if (
            (le || ee) &&
            ((ee =
              te.window === te
                ? te
                : (ee = te.ownerDocument)
                ? ee.defaultView || ee.parentWindow
                : window),
            le
              ? ((de = s.relatedTarget || s.toElement),
                (le = H),
                (de = de ? Nn(de) : null),
                de !== null &&
                  ((nt = In(de)),
                  de !== nt || (de.tag !== 5 && de.tag !== 6)) &&
                  (de = null))
              : ((le = null), (de = H)),
            le !== de)
          ) {
            if (
              ((he = Jg),
              (ae = "onMouseLeave"),
              (q = "onMouseEnter"),
              ($ = "mouse"),
              (i === "pointerout" || i === "pointerover") &&
                ((he = t0),
                (ae = "onPointerLeave"),
                (q = "onPointerEnter"),
                ($ = "pointer")),
              (nt = le == null ? ee : _i(le)),
              (U = de == null ? ee : _i(de)),
              (ee = new he(ae, $ + "leave", le, s, te)),
              (ee.target = nt),
              (ee.relatedTarget = U),
              (ae = null),
              Nn(te) === H &&
                ((he = new he(q, $ + "enter", de, s, te)),
                (he.target = U),
                (he.relatedTarget = nt),
                (ae = he)),
              (nt = ae),
              le && de)
            )
              t: {
                for (he = le, q = de, $ = 0, U = he; U; U = xi(U)) $++;
                for (U = 0, ae = q; ae; ae = xi(ae)) U++;
                for (; 0 < $ - U; ) (he = xi(he)), $--;
                for (; 0 < U - $; ) (q = xi(q)), U--;
                for (; $--; ) {
                  if (he === q || (q !== null && he === q.alternate)) break t;
                  (he = xi(he)), (q = xi(q));
                }
                he = null;
              }
            else he = null;
            le !== null && T0(ne, ee, le, he, !1),
              de !== null && nt !== null && T0(ne, nt, de, he, !0);
          }
        }
        e: {
          if (
            ((ee = H ? _i(H) : window),
            (le = ee.nodeName && ee.nodeName.toLowerCase()),
            le === "select" || (le === "input" && ee.type === "file"))
          )
            var ve = nk;
          else if (u0(ee))
            if (s0) ve = uk;
            else {
              ve = ak;
              var be = ik;
            }
          else
            (le = ee.nodeName) &&
              le.toLowerCase() === "input" &&
              (ee.type === "checkbox" || ee.type === "radio") &&
              (ve = ok);
          if (ve && (ve = ve(i, H))) {
            l0(ne, ve, s, te);
            break e;
          }
          be && be(i, ee, H),
            i === "focusout" &&
              (be = ee._wrapperState) &&
              be.controlled &&
              ee.type === "number" &&
              _r(ee, "number", ee.value);
        }
        switch (((be = H ? _i(H) : window), i)) {
          case "focusin":
            (u0(be) || be.contentEditable === "true") &&
              ((bi = be), (Fc = H), (Fa = null));
            break;
          case "focusout":
            Fa = Fc = bi = null;
            break;
          case "mousedown":
            zc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zc = !1), m0(ne, s, te);
            break;
          case "selectionchange":
            if (ck) break;
          case "keydown":
          case "keyup":
            m0(ne, s, te);
        }
        var we;
        if (Dc)
          e: {
            switch (i) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          gi
            ? a0(i, s) && (Se = "onCompositionEnd")
            : i === "keydown" &&
              s.keyCode === 229 &&
              (Se = "onCompositionStart");
        Se &&
          (r0 &&
            s.locale !== "ko" &&
            (gi || Se !== "onCompositionStart"
              ? Se === "onCompositionEnd" && gi && (we = Qg())
              : ((un = te),
                (jc = "value" in un ? un.value : un.textContent),
                (gi = !0))),
          (be = Ru(H, Se)),
          0 < be.length &&
            ((Se = new e0(Se, i, null, s, te)),
            ne.push({ event: Se, listeners: be }),
            we
              ? (Se.data = we)
              : ((we = o0(s)), we !== null && (Se.data = we)))),
          (we = ZC ? JC(i, s) : ek(i, s)) &&
            ((H = Ru(H, "onBeforeInput")),
            0 < H.length &&
              ((te = new e0("onBeforeInput", "beforeinput", null, s, te)),
              ne.push({ event: te, listeners: H }),
              (te.data = we)));
      }
      A0(ne, a);
    });
  }
  function Wa(i, a, s) {
    return { instance: i, listener: a, currentTarget: s };
  }
  function Ru(i, a) {
    for (var s = a + "Capture", d = []; i !== null; ) {
      var y = i,
        m = y.stateNode;
      y.tag === 5 &&
        m !== null &&
        ((y = m),
        (m = Pa(i, s)),
        m != null && d.unshift(Wa(i, m, y)),
        (m = Pa(i, a)),
        m != null && d.push(Wa(i, m, y))),
        (i = i.return);
    }
    return d;
  }
  function xi(i) {
    if (i === null) return null;
    do i = i.return;
    while (i && i.tag !== 5);
    return i || null;
  }
  function T0(i, a, s, d, y) {
    for (var m = a._reactName, O = []; s !== null && s !== d; ) {
      var j = s,
        N = j.alternate,
        H = j.stateNode;
      if (N !== null && N === d) break;
      j.tag === 5 &&
        H !== null &&
        ((j = H),
        y
          ? ((N = Pa(s, m)), N != null && O.unshift(Wa(s, N, j)))
          : y || ((N = Pa(s, m)), N != null && O.push(Wa(s, N, j)))),
        (s = s.return);
    }
    O.length !== 0 && i.push({ event: a, listeners: O });
  }
  var hk = /\r\n?/g,
    vk = /\u0000|\uFFFD/g;
  function C0(i) {
    return (typeof i == "string" ? i : "" + i)
      .replace(
        hk,
        `
`
      )
      .replace(vk, "");
  }
  function $u(i, a, s) {
    if (((a = C0(a)), C0(i) !== a && s)) throw Error(r(425));
  }
  function Du() {}
  var Vc = null,
    Xc = null;
  function Yc(i, a) {
    return (
      i === "textarea" ||
      i === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qc = typeof setTimeout == "function" ? setTimeout : void 0,
    yk = typeof clearTimeout == "function" ? clearTimeout : void 0,
    k0 = typeof Promise == "function" ? Promise : void 0,
    mk =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof k0 < "u"
        ? function (i) {
            return k0.resolve(null).then(i).catch(gk);
          }
        : Qc;
  function gk(i) {
    setTimeout(function () {
      throw i;
    });
  }
  function Zc(i, a) {
    var s = a,
      d = 0;
    do {
      var y = s.nextSibling;
      if ((i.removeChild(s), y && y.nodeType === 8))
        if (((s = y.data), s === "/$")) {
          if (d === 0) {
            i.removeChild(y), Na(a);
            return;
          }
          d--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || d++;
      s = y;
    } while (s);
    Na(a);
  }
  function sn(i) {
    for (; i != null; i = i.nextSibling) {
      var a = i.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (((a = i.data), a === "$" || a === "$!" || a === "$?")) break;
        if (a === "/$") return null;
      }
    }
    return i;
  }
  function j0(i) {
    i = i.previousSibling;
    for (var a = 0; i; ) {
      if (i.nodeType === 8) {
        var s = i.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (a === 0) return i;
          a--;
        } else s === "/$" && a++;
      }
      i = i.previousSibling;
    }
    return null;
  }
  var Si = Math.random().toString(36).slice(2),
    Ar = "__reactFiber$" + Si,
    Ha = "__reactProps$" + Si,
    Dr = "__reactContainer$" + Si,
    Jc = "__reactEvents$" + Si,
    bk = "__reactListeners$" + Si,
    wk = "__reactHandles$" + Si;
  function Nn(i) {
    var a = i[Ar];
    if (a) return a;
    for (var s = i.parentNode; s; ) {
      if ((a = s[Dr] || s[Ar])) {
        if (
          ((s = a.alternate),
          a.child !== null || (s !== null && s.child !== null))
        )
          for (i = j0(i); i !== null; ) {
            if ((s = i[Ar])) return s;
            i = j0(i);
          }
        return a;
      }
      (i = s), (s = i.parentNode);
    }
    return null;
  }
  function Ga(i) {
    return (
      (i = i[Ar] || i[Dr]),
      !i || (i.tag !== 5 && i.tag !== 6 && i.tag !== 13 && i.tag !== 3)
        ? null
        : i
    );
  }
  function _i(i) {
    if (i.tag === 5 || i.tag === 6) return i.stateNode;
    throw Error(r(33));
  }
  function Lu(i) {
    return i[Ha] || null;
  }
  var ef = [],
    Oi = -1;
  function cn(i) {
    return { current: i };
  }
  function Ge(i) {
    0 > Oi || ((i.current = ef[Oi]), (ef[Oi] = null), Oi--);
  }
  function ze(i, a) {
    Oi++, (ef[Oi] = i.current), (i.current = a);
  }
  var fn = {},
    _t = cn(fn),
    Nt = cn(!1),
    Rn = fn;
  function Pi(i, a) {
    var s = i.type.contextTypes;
    if (!s) return fn;
    var d = i.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === a)
      return d.__reactInternalMemoizedMaskedChildContext;
    var y = {},
      m;
    for (m in s) y[m] = a[m];
    return (
      d &&
        ((i = i.stateNode),
        (i.__reactInternalMemoizedUnmaskedChildContext = a),
        (i.__reactInternalMemoizedMaskedChildContext = y)),
      y
    );
  }
  function Rt(i) {
    return (i = i.childContextTypes), i != null;
  }
  function qu() {
    Ge(Nt), Ge(_t);
  }
  function M0(i, a, s) {
    if (_t.current !== fn) throw Error(r(168));
    ze(_t, a), ze(Nt, s);
  }
  function I0(i, a, s) {
    var d = i.stateNode;
    if (((a = a.childContextTypes), typeof d.getChildContext != "function"))
      return s;
    d = d.getChildContext();
    for (var y in d) if (!(y in a)) throw Error(r(108, Ce(i) || "Unknown", y));
    return Q({}, s, d);
  }
  function Bu(i) {
    return (
      (i =
        ((i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext) ||
        fn),
      (Rn = _t.current),
      ze(_t, i),
      ze(Nt, Nt.current),
      !0
    );
  }
  function N0(i, a, s) {
    var d = i.stateNode;
    if (!d) throw Error(r(169));
    s
      ? ((i = I0(i, a, Rn)),
        (d.__reactInternalMemoizedMergedChildContext = i),
        Ge(Nt),
        Ge(_t),
        ze(_t, i))
      : Ge(Nt),
      ze(Nt, s);
  }
  var Lr = null,
    Fu = !1,
    tf = !1;
  function R0(i) {
    Lr === null ? (Lr = [i]) : Lr.push(i);
  }
  function xk(i) {
    (Fu = !0), R0(i);
  }
  function dn() {
    if (!tf && Lr !== null) {
      tf = !0;
      var i = 0,
        a = Le;
      try {
        var s = Lr;
        for (Le = 1; i < s.length; i++) {
          var d = s[i];
          do d = d(!0);
          while (d !== null);
        }
        (Lr = null), (Fu = !1);
      } catch (y) {
        throw (Lr !== null && (Lr = Lr.slice(i + 1)), Dg(_c, dn), y);
      } finally {
        (Le = a), (tf = !1);
      }
    }
    return null;
  }
  var Ai = [],
    Ei = 0,
    zu = null,
    Uu = 0,
    Xt = [],
    Yt = 0,
    $n = null,
    qr = 1,
    Br = "";
  function Dn(i, a) {
    (Ai[Ei++] = Uu), (Ai[Ei++] = zu), (zu = i), (Uu = a);
  }
  function $0(i, a, s) {
    (Xt[Yt++] = qr), (Xt[Yt++] = Br), (Xt[Yt++] = $n), ($n = i);
    var d = qr;
    i = Br;
    var y = 32 - sr(d) - 1;
    (d &= ~(1 << y)), (s += 1);
    var m = 32 - sr(a) + y;
    if (30 < m) {
      var O = y - (y % 5);
      (m = (d & ((1 << O) - 1)).toString(32)),
        (d >>= O),
        (y -= O),
        (qr = (1 << (32 - sr(a) + y)) | (s << y) | d),
        (Br = m + i);
    } else (qr = (1 << m) | (s << y) | d), (Br = i);
  }
  function rf(i) {
    i.return !== null && (Dn(i, 1), $0(i, 1, 0));
  }
  function nf(i) {
    for (; i === zu; )
      (zu = Ai[--Ei]), (Ai[Ei] = null), (Uu = Ai[--Ei]), (Ai[Ei] = null);
    for (; i === $n; )
      ($n = Xt[--Yt]),
        (Xt[Yt] = null),
        (Br = Xt[--Yt]),
        (Xt[Yt] = null),
        (qr = Xt[--Yt]),
        (Xt[Yt] = null);
  }
  var Ut = null,
    Wt = null,
    Ve = !1,
    fr = null;
  function D0(i, a) {
    var s = er(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = a),
      (s.return = i),
      (a = i.deletions),
      a === null ? ((i.deletions = [s]), (i.flags |= 16)) : a.push(s);
  }
  function L0(i, a) {
    switch (i.tag) {
      case 5:
        var s = i.type;
        return (
          (a =
            a.nodeType !== 1 || s.toLowerCase() !== a.nodeName.toLowerCase()
              ? null
              : a),
          a !== null
            ? ((i.stateNode = a), (Ut = i), (Wt = sn(a.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (a = i.pendingProps === "" || a.nodeType !== 3 ? null : a),
          a !== null ? ((i.stateNode = a), (Ut = i), (Wt = null), !0) : !1
        );
      case 13:
        return (
          (a = a.nodeType !== 8 ? null : a),
          a !== null
            ? ((s = $n !== null ? { id: qr, overflow: Br } : null),
              (i.memoizedState = {
                dehydrated: a,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = er(18, null, null, 0)),
              (s.stateNode = a),
              (s.return = i),
              (i.child = s),
              (Ut = i),
              (Wt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function af(i) {
    return (i.mode & 1) !== 0 && (i.flags & 128) === 0;
  }
  function of(i) {
    if (Ve) {
      var a = Wt;
      if (a) {
        var s = a;
        if (!L0(i, a)) {
          if (af(i)) throw Error(r(418));
          a = sn(s.nextSibling);
          var d = Ut;
          a && L0(i, a)
            ? D0(d, s)
            : ((i.flags = (i.flags & -4097) | 2), (Ve = !1), (Ut = i));
        }
      } else {
        if (af(i)) throw Error(r(418));
        (i.flags = (i.flags & -4097) | 2), (Ve = !1), (Ut = i);
      }
    }
  }
  function q0(i) {
    for (
      i = i.return;
      i !== null && i.tag !== 5 && i.tag !== 3 && i.tag !== 13;

    )
      i = i.return;
    Ut = i;
  }
  function Wu(i) {
    if (i !== Ut) return !1;
    if (!Ve) return q0(i), (Ve = !0), !1;
    var a;
    if (
      ((a = i.tag !== 3) &&
        !(a = i.tag !== 5) &&
        ((a = i.type),
        (a = a !== "head" && a !== "body" && !Yc(i.type, i.memoizedProps))),
      a && (a = Wt))
    ) {
      if (af(i)) throw (B0(), Error(r(418)));
      for (; a; ) D0(i, a), (a = sn(a.nextSibling));
    }
    if ((q0(i), i.tag === 13)) {
      if (((i = i.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
        throw Error(r(317));
      e: {
        for (i = i.nextSibling, a = 0; i; ) {
          if (i.nodeType === 8) {
            var s = i.data;
            if (s === "/$") {
              if (a === 0) {
                Wt = sn(i.nextSibling);
                break e;
              }
              a--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || a++;
          }
          i = i.nextSibling;
        }
        Wt = null;
      }
    } else Wt = Ut ? sn(i.stateNode.nextSibling) : null;
    return !0;
  }
  function B0() {
    for (var i = Wt; i; ) i = sn(i.nextSibling);
  }
  function Ti() {
    (Wt = Ut = null), (Ve = !1);
  }
  function uf(i) {
    fr === null ? (fr = [i]) : fr.push(i);
  }
  var Sk = C.ReactCurrentBatchConfig;
  function Ka(i, a, s) {
    if (
      ((i = s.ref),
      i !== null && typeof i != "function" && typeof i != "object")
    ) {
      if (s._owner) {
        if (((s = s._owner), s)) {
          if (s.tag !== 1) throw Error(r(309));
          var d = s.stateNode;
        }
        if (!d) throw Error(r(147, i));
        var y = d,
          m = "" + i;
        return a !== null &&
          a.ref !== null &&
          typeof a.ref == "function" &&
          a.ref._stringRef === m
          ? a.ref
          : ((a = function (O) {
              var j = y.refs;
              O === null ? delete j[m] : (j[m] = O);
            }),
            (a._stringRef = m),
            a);
      }
      if (typeof i != "string") throw Error(r(284));
      if (!s._owner) throw Error(r(290, i));
    }
    return i;
  }
  function Hu(i, a) {
    throw (
      ((i = Object.prototype.toString.call(a)),
      Error(
        r(
          31,
          i === "[object Object]"
            ? "object with keys {" + Object.keys(a).join(", ") + "}"
            : i
        )
      ))
    );
  }
  function F0(i) {
    var a = i._init;
    return a(i._payload);
  }
  function z0(i) {
    function a(q, $) {
      if (i) {
        var U = q.deletions;
        U === null ? ((q.deletions = [$]), (q.flags |= 16)) : U.push($);
      }
    }
    function s(q, $) {
      if (!i) return null;
      for (; $ !== null; ) a(q, $), ($ = $.sibling);
      return null;
    }
    function d(q, $) {
      for (q = new Map(); $ !== null; )
        $.key !== null ? q.set($.key, $) : q.set($.index, $), ($ = $.sibling);
      return q;
    }
    function y(q, $) {
      return (q = wn(q, $)), (q.index = 0), (q.sibling = null), q;
    }
    function m(q, $, U) {
      return (
        (q.index = U),
        i
          ? ((U = q.alternate),
            U !== null
              ? ((U = U.index), U < $ ? ((q.flags |= 2), $) : U)
              : ((q.flags |= 2), $))
          : ((q.flags |= 1048576), $)
      );
    }
    function O(q) {
      return i && q.alternate === null && (q.flags |= 2), q;
    }
    function j(q, $, U, ae) {
      return $ === null || $.tag !== 6
        ? (($ = Zf(U, q.mode, ae)), ($.return = q), $)
        : (($ = y($, U)), ($.return = q), $);
    }
    function N(q, $, U, ae) {
      var ve = U.type;
      return ve === k
        ? te(q, $, U.props.children, ae, U.key)
        : $ !== null &&
          ($.elementType === ve ||
            (typeof ve == "object" &&
              ve !== null &&
              ve.$$typeof === Z &&
              F0(ve) === $.type))
        ? ((ae = y($, U.props)), (ae.ref = Ka(q, $, U)), (ae.return = q), ae)
        : ((ae = vl(U.type, U.key, U.props, null, q.mode, ae)),
          (ae.ref = Ka(q, $, U)),
          (ae.return = q),
          ae);
    }
    function H(q, $, U, ae) {
      return $ === null ||
        $.tag !== 4 ||
        $.stateNode.containerInfo !== U.containerInfo ||
        $.stateNode.implementation !== U.implementation
        ? (($ = Jf(U, q.mode, ae)), ($.return = q), $)
        : (($ = y($, U.children || [])), ($.return = q), $);
    }
    function te(q, $, U, ae, ve) {
      return $ === null || $.tag !== 7
        ? (($ = Hn(U, q.mode, ae, ve)), ($.return = q), $)
        : (($ = y($, U)), ($.return = q), $);
    }
    function ne(q, $, U) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return ($ = Zf("" + $, q.mode, U)), ($.return = q), $;
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case _:
            return (
              (U = vl($.type, $.key, $.props, null, q.mode, U)),
              (U.ref = Ka(q, null, $)),
              (U.return = q),
              U
            );
          case P:
            return ($ = Jf($, q.mode, U)), ($.return = q), $;
          case Z:
            var ae = $._init;
            return ne(q, ae($._payload), U);
        }
        if (Or($) || X($))
          return ($ = Hn($, q.mode, U, null)), ($.return = q), $;
        Hu(q, $);
      }
      return null;
    }
    function ee(q, $, U, ae) {
      var ve = $ !== null ? $.key : null;
      if ((typeof U == "string" && U !== "") || typeof U == "number")
        return ve !== null ? null : j(q, $, "" + U, ae);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case _:
            return U.key === ve ? N(q, $, U, ae) : null;
          case P:
            return U.key === ve ? H(q, $, U, ae) : null;
          case Z:
            return (ve = U._init), ee(q, $, ve(U._payload), ae);
        }
        if (Or(U) || X(U)) return ve !== null ? null : te(q, $, U, ae, null);
        Hu(q, U);
      }
      return null;
    }
    function le(q, $, U, ae, ve) {
      if ((typeof ae == "string" && ae !== "") || typeof ae == "number")
        return (q = q.get(U) || null), j($, q, "" + ae, ve);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case _:
            return (
              (q = q.get(ae.key === null ? U : ae.key) || null), N($, q, ae, ve)
            );
          case P:
            return (
              (q = q.get(ae.key === null ? U : ae.key) || null), H($, q, ae, ve)
            );
          case Z:
            var be = ae._init;
            return le(q, $, U, be(ae._payload), ve);
        }
        if (Or(ae) || X(ae))
          return (q = q.get(U) || null), te($, q, ae, ve, null);
        Hu($, ae);
      }
      return null;
    }
    function de(q, $, U, ae) {
      for (
        var ve = null, be = null, we = $, Se = ($ = 0), vt = null;
        we !== null && Se < U.length;
        Se++
      ) {
        we.index > Se ? ((vt = we), (we = null)) : (vt = we.sibling);
        var je = ee(q, we, U[Se], ae);
        if (je === null) {
          we === null && (we = vt);
          break;
        }
        i && we && je.alternate === null && a(q, we),
          ($ = m(je, $, Se)),
          be === null ? (ve = je) : (be.sibling = je),
          (be = je),
          (we = vt);
      }
      if (Se === U.length) return s(q, we), Ve && Dn(q, Se), ve;
      if (we === null) {
        for (; Se < U.length; Se++)
          (we = ne(q, U[Se], ae)),
            we !== null &&
              (($ = m(we, $, Se)),
              be === null ? (ve = we) : (be.sibling = we),
              (be = we));
        return Ve && Dn(q, Se), ve;
      }
      for (we = d(q, we); Se < U.length; Se++)
        (vt = le(we, q, Se, U[Se], ae)),
          vt !== null &&
            (i &&
              vt.alternate !== null &&
              we.delete(vt.key === null ? Se : vt.key),
            ($ = m(vt, $, Se)),
            be === null ? (ve = vt) : (be.sibling = vt),
            (be = vt));
      return (
        i &&
          we.forEach(function (xn) {
            return a(q, xn);
          }),
        Ve && Dn(q, Se),
        ve
      );
    }
    function he(q, $, U, ae) {
      var ve = X(U);
      if (typeof ve != "function") throw Error(r(150));
      if (((U = ve.call(U)), U == null)) throw Error(r(151));
      for (
        var be = (ve = null), we = $, Se = ($ = 0), vt = null, je = U.next();
        we !== null && !je.done;
        Se++, je = U.next()
      ) {
        we.index > Se ? ((vt = we), (we = null)) : (vt = we.sibling);
        var xn = ee(q, we, je.value, ae);
        if (xn === null) {
          we === null && (we = vt);
          break;
        }
        i && we && xn.alternate === null && a(q, we),
          ($ = m(xn, $, Se)),
          be === null ? (ve = xn) : (be.sibling = xn),
          (be = xn),
          (we = vt);
      }
      if (je.done) return s(q, we), Ve && Dn(q, Se), ve;
      if (we === null) {
        for (; !je.done; Se++, je = U.next())
          (je = ne(q, je.value, ae)),
            je !== null &&
              (($ = m(je, $, Se)),
              be === null ? (ve = je) : (be.sibling = je),
              (be = je));
        return Ve && Dn(q, Se), ve;
      }
      for (we = d(q, we); !je.done; Se++, je = U.next())
        (je = le(we, q, Se, je.value, ae)),
          je !== null &&
            (i &&
              je.alternate !== null &&
              we.delete(je.key === null ? Se : je.key),
            ($ = m(je, $, Se)),
            be === null ? (ve = je) : (be.sibling = je),
            (be = je));
      return (
        i &&
          we.forEach(function (ej) {
            return a(q, ej);
          }),
        Ve && Dn(q, Se),
        ve
      );
    }
    function nt(q, $, U, ae) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === k &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case _:
            e: {
              for (var ve = U.key, be = $; be !== null; ) {
                if (be.key === ve) {
                  if (((ve = U.type), ve === k)) {
                    if (be.tag === 7) {
                      s(q, be.sibling),
                        ($ = y(be, U.props.children)),
                        ($.return = q),
                        (q = $);
                      break e;
                    }
                  } else if (
                    be.elementType === ve ||
                    (typeof ve == "object" &&
                      ve !== null &&
                      ve.$$typeof === Z &&
                      F0(ve) === be.type)
                  ) {
                    s(q, be.sibling),
                      ($ = y(be, U.props)),
                      ($.ref = Ka(q, be, U)),
                      ($.return = q),
                      (q = $);
                    break e;
                  }
                  s(q, be);
                  break;
                } else a(q, be);
                be = be.sibling;
              }
              U.type === k
                ? (($ = Hn(U.props.children, q.mode, ae, U.key)),
                  ($.return = q),
                  (q = $))
                : ((ae = vl(U.type, U.key, U.props, null, q.mode, ae)),
                  (ae.ref = Ka(q, $, U)),
                  (ae.return = q),
                  (q = ae));
            }
            return O(q);
          case P:
            e: {
              for (be = U.key; $ !== null; ) {
                if ($.key === be)
                  if (
                    $.tag === 4 &&
                    $.stateNode.containerInfo === U.containerInfo &&
                    $.stateNode.implementation === U.implementation
                  ) {
                    s(q, $.sibling),
                      ($ = y($, U.children || [])),
                      ($.return = q),
                      (q = $);
                    break e;
                  } else {
                    s(q, $);
                    break;
                  }
                else a(q, $);
                $ = $.sibling;
              }
              ($ = Jf(U, q.mode, ae)), ($.return = q), (q = $);
            }
            return O(q);
          case Z:
            return (be = U._init), nt(q, $, be(U._payload), ae);
        }
        if (Or(U)) return de(q, $, U, ae);
        if (X(U)) return he(q, $, U, ae);
        Hu(q, U);
      }
      return (typeof U == "string" && U !== "") || typeof U == "number"
        ? ((U = "" + U),
          $ !== null && $.tag === 6
            ? (s(q, $.sibling), ($ = y($, U)), ($.return = q), (q = $))
            : (s(q, $), ($ = Zf(U, q.mode, ae)), ($.return = q), (q = $)),
          O(q))
        : s(q, $);
    }
    return nt;
  }
  var Ci = z0(!0),
    U0 = z0(!1),
    Gu = cn(null),
    Ku = null,
    ki = null,
    lf = null;
  function sf() {
    lf = ki = Ku = null;
  }
  function cf(i) {
    var a = Gu.current;
    Ge(Gu), (i._currentValue = a);
  }
  function ff(i, a, s) {
    for (; i !== null; ) {
      var d = i.alternate;
      if (
        ((i.childLanes & a) !== a
          ? ((i.childLanes |= a), d !== null && (d.childLanes |= a))
          : d !== null && (d.childLanes & a) !== a && (d.childLanes |= a),
        i === s)
      )
        break;
      i = i.return;
    }
  }
  function ji(i, a) {
    (Ku = i),
      (lf = ki = null),
      (i = i.dependencies),
      i !== null &&
        i.firstContext !== null &&
        (i.lanes & a && ($t = !0), (i.firstContext = null));
  }
  function Qt(i) {
    var a = i._currentValue;
    if (lf !== i)
      if (((i = { context: i, memoizedValue: a, next: null }), ki === null)) {
        if (Ku === null) throw Error(r(308));
        (ki = i), (Ku.dependencies = { lanes: 0, firstContext: i });
      } else ki = ki.next = i;
    return a;
  }
  var Ln = null;
  function df(i) {
    Ln === null ? (Ln = [i]) : Ln.push(i);
  }
  function W0(i, a, s, d) {
    var y = a.interleaved;
    return (
      y === null ? ((s.next = s), df(a)) : ((s.next = y.next), (y.next = s)),
      (a.interleaved = s),
      Fr(i, d)
    );
  }
  function Fr(i, a) {
    i.lanes |= a;
    var s = i.alternate;
    for (s !== null && (s.lanes |= a), s = i, i = i.return; i !== null; )
      (i.childLanes |= a),
        (s = i.alternate),
        s !== null && (s.childLanes |= a),
        (s = i),
        (i = i.return);
    return s.tag === 3 ? s.stateNode : null;
  }
  var pn = !1;
  function pf(i) {
    i.updateQueue = {
      baseState: i.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function H0(i, a) {
    (i = i.updateQueue),
      a.updateQueue === i &&
        (a.updateQueue = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects,
        });
  }
  function zr(i, a) {
    return {
      eventTime: i,
      lane: a,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function hn(i, a, s) {
    var d = i.updateQueue;
    if (d === null) return null;
    if (((d = d.shared), ke & 2)) {
      var y = d.pending;
      return (
        y === null ? (a.next = a) : ((a.next = y.next), (y.next = a)),
        (d.pending = a),
        Fr(i, s)
      );
    }
    return (
      (y = d.interleaved),
      y === null ? ((a.next = a), df(d)) : ((a.next = y.next), (y.next = a)),
      (d.interleaved = a),
      Fr(i, s)
    );
  }
  function Vu(i, a, s) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (s & 4194240) !== 0))
    ) {
      var d = a.lanes;
      (d &= i.pendingLanes), (s |= d), (a.lanes = s), Ac(i, s);
    }
  }
  function G0(i, a) {
    var s = i.updateQueue,
      d = i.alternate;
    if (d !== null && ((d = d.updateQueue), s === d)) {
      var y = null,
        m = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var O = {
            eventTime: s.eventTime,
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          };
          m === null ? (y = m = O) : (m = m.next = O), (s = s.next);
        } while (s !== null);
        m === null ? (y = m = a) : (m = m.next = a);
      } else y = m = a;
      (s = {
        baseState: d.baseState,
        firstBaseUpdate: y,
        lastBaseUpdate: m,
        shared: d.shared,
        effects: d.effects,
      }),
        (i.updateQueue = s);
      return;
    }
    (i = s.lastBaseUpdate),
      i === null ? (s.firstBaseUpdate = a) : (i.next = a),
      (s.lastBaseUpdate = a);
  }
  function Xu(i, a, s, d) {
    var y = i.updateQueue;
    pn = !1;
    var m = y.firstBaseUpdate,
      O = y.lastBaseUpdate,
      j = y.shared.pending;
    if (j !== null) {
      y.shared.pending = null;
      var N = j,
        H = N.next;
      (N.next = null), O === null ? (m = H) : (O.next = H), (O = N);
      var te = i.alternate;
      te !== null &&
        ((te = te.updateQueue),
        (j = te.lastBaseUpdate),
        j !== O &&
          (j === null ? (te.firstBaseUpdate = H) : (j.next = H),
          (te.lastBaseUpdate = N)));
    }
    if (m !== null) {
      var ne = y.baseState;
      (O = 0), (te = H = N = null), (j = m);
      do {
        var ee = j.lane,
          le = j.eventTime;
        if ((d & ee) === ee) {
          te !== null &&
            (te = te.next =
              {
                eventTime: le,
                lane: 0,
                tag: j.tag,
                payload: j.payload,
                callback: j.callback,
                next: null,
              });
          e: {
            var de = i,
              he = j;
            switch (((ee = a), (le = s), he.tag)) {
              case 1:
                if (((de = he.payload), typeof de == "function")) {
                  ne = de.call(le, ne, ee);
                  break e;
                }
                ne = de;
                break e;
              case 3:
                de.flags = (de.flags & -65537) | 128;
              case 0:
                if (
                  ((de = he.payload),
                  (ee = typeof de == "function" ? de.call(le, ne, ee) : de),
                  ee == null)
                )
                  break e;
                ne = Q({}, ne, ee);
                break e;
              case 2:
                pn = !0;
            }
          }
          j.callback !== null &&
            j.lane !== 0 &&
            ((i.flags |= 64),
            (ee = y.effects),
            ee === null ? (y.effects = [j]) : ee.push(j));
        } else
          (le = {
            eventTime: le,
            lane: ee,
            tag: j.tag,
            payload: j.payload,
            callback: j.callback,
            next: null,
          }),
            te === null ? ((H = te = le), (N = ne)) : (te = te.next = le),
            (O |= ee);
        if (((j = j.next), j === null)) {
          if (((j = y.shared.pending), j === null)) break;
          (ee = j),
            (j = ee.next),
            (ee.next = null),
            (y.lastBaseUpdate = ee),
            (y.shared.pending = null);
        }
      } while (!0);
      if (
        (te === null && (N = ne),
        (y.baseState = N),
        (y.firstBaseUpdate = H),
        (y.lastBaseUpdate = te),
        (a = y.shared.interleaved),
        a !== null)
      ) {
        y = a;
        do (O |= y.lane), (y = y.next);
        while (y !== a);
      } else m === null && (y.shared.lanes = 0);
      (Fn |= O), (i.lanes = O), (i.memoizedState = ne);
    }
  }
  function K0(i, a, s) {
    if (((i = a.effects), (a.effects = null), i !== null))
      for (a = 0; a < i.length; a++) {
        var d = i[a],
          y = d.callback;
        if (y !== null) {
          if (((d.callback = null), (d = s), typeof y != "function"))
            throw Error(r(191, y));
          y.call(d);
        }
      }
  }
  var Va = {},
    Er = cn(Va),
    Xa = cn(Va),
    Ya = cn(Va);
  function qn(i) {
    if (i === Va) throw Error(r(174));
    return i;
  }
  function hf(i, a) {
    switch ((ze(Ya, a), ze(Xa, i), ze(Er, Va), (i = a.nodeType), i)) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : hc(null, "");
        break;
      default:
        (i = i === 8 ? a.parentNode : a),
          (a = i.namespaceURI || null),
          (i = i.tagName),
          (a = hc(a, i));
    }
    Ge(Er), ze(Er, a);
  }
  function Mi() {
    Ge(Er), Ge(Xa), Ge(Ya);
  }
  function V0(i) {
    qn(Ya.current);
    var a = qn(Er.current),
      s = hc(a, i.type);
    a !== s && (ze(Xa, i), ze(Er, s));
  }
  function vf(i) {
    Xa.current === i && (Ge(Er), Ge(Xa));
  }
  var Ye = cn(0);
  function Yu(i) {
    for (var a = i; a !== null; ) {
      if (a.tag === 13) {
        var s = a.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 128) return a;
      } else if (a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === i) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === i) return null;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
    return null;
  }
  var yf = [];
  function mf() {
    for (var i = 0; i < yf.length; i++)
      yf[i]._workInProgressVersionPrimary = null;
    yf.length = 0;
  }
  var Qu = C.ReactCurrentDispatcher,
    gf = C.ReactCurrentBatchConfig,
    Bn = 0,
    Qe = null,
    ut = null,
    pt = null,
    Zu = !1,
    Qa = !1,
    Za = 0,
    _k = 0;
  function Ot() {
    throw Error(r(321));
  }
  function bf(i, a) {
    if (a === null) return !1;
    for (var s = 0; s < a.length && s < i.length; s++)
      if (!cr(i[s], a[s])) return !1;
    return !0;
  }
  function wf(i, a, s, d, y, m) {
    if (
      ((Bn = m),
      (Qe = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (Qu.current = i === null || i.memoizedState === null ? Ek : Tk),
      (i = s(d, y)),
      Qa)
    ) {
      m = 0;
      do {
        if (((Qa = !1), (Za = 0), 25 <= m)) throw Error(r(301));
        (m += 1),
          (pt = ut = null),
          (a.updateQueue = null),
          (Qu.current = Ck),
          (i = s(d, y));
      } while (Qa);
    }
    if (
      ((Qu.current = tl),
      (a = ut !== null && ut.next !== null),
      (Bn = 0),
      (pt = ut = Qe = null),
      (Zu = !1),
      a)
    )
      throw Error(r(300));
    return i;
  }
  function xf() {
    var i = Za !== 0;
    return (Za = 0), i;
  }
  function Tr() {
    var i = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return pt === null ? (Qe.memoizedState = pt = i) : (pt = pt.next = i), pt;
  }
  function Zt() {
    if (ut === null) {
      var i = Qe.alternate;
      i = i !== null ? i.memoizedState : null;
    } else i = ut.next;
    var a = pt === null ? Qe.memoizedState : pt.next;
    if (a !== null) (pt = a), (ut = i);
    else {
      if (i === null) throw Error(r(310));
      (ut = i),
        (i = {
          memoizedState: ut.memoizedState,
          baseState: ut.baseState,
          baseQueue: ut.baseQueue,
          queue: ut.queue,
          next: null,
        }),
        pt === null ? (Qe.memoizedState = pt = i) : (pt = pt.next = i);
    }
    return pt;
  }
  function Ja(i, a) {
    return typeof a == "function" ? a(i) : a;
  }
  function Sf(i) {
    var a = Zt(),
      s = a.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = i;
    var d = ut,
      y = d.baseQueue,
      m = s.pending;
    if (m !== null) {
      if (y !== null) {
        var O = y.next;
        (y.next = m.next), (m.next = O);
      }
      (d.baseQueue = y = m), (s.pending = null);
    }
    if (y !== null) {
      (m = y.next), (d = d.baseState);
      var j = (O = null),
        N = null,
        H = m;
      do {
        var te = H.lane;
        if ((Bn & te) === te)
          N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null,
              }),
            (d = H.hasEagerState ? H.eagerState : i(d, H.action));
        else {
          var ne = {
            lane: te,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null,
          };
          N === null ? ((j = N = ne), (O = d)) : (N = N.next = ne),
            (Qe.lanes |= te),
            (Fn |= te);
        }
        H = H.next;
      } while (H !== null && H !== m);
      N === null ? (O = d) : (N.next = j),
        cr(d, a.memoizedState) || ($t = !0),
        (a.memoizedState = d),
        (a.baseState = O),
        (a.baseQueue = N),
        (s.lastRenderedState = d);
    }
    if (((i = s.interleaved), i !== null)) {
      y = i;
      do (m = y.lane), (Qe.lanes |= m), (Fn |= m), (y = y.next);
      while (y !== i);
    } else y === null && (s.lanes = 0);
    return [a.memoizedState, s.dispatch];
  }
  function _f(i) {
    var a = Zt(),
      s = a.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = i;
    var d = s.dispatch,
      y = s.pending,
      m = a.memoizedState;
    if (y !== null) {
      s.pending = null;
      var O = (y = y.next);
      do (m = i(m, O.action)), (O = O.next);
      while (O !== y);
      cr(m, a.memoizedState) || ($t = !0),
        (a.memoizedState = m),
        a.baseQueue === null && (a.baseState = m),
        (s.lastRenderedState = m);
    }
    return [m, d];
  }
  function X0() {}
  function Y0(i, a) {
    var s = Qe,
      d = Zt(),
      y = a(),
      m = !cr(d.memoizedState, y);
    if (
      (m && ((d.memoizedState = y), ($t = !0)),
      (d = d.queue),
      Of(J0.bind(null, s, d, i), [i]),
      d.getSnapshot !== a || m || (pt !== null && pt.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        eo(9, Z0.bind(null, s, d, y, a), void 0, null),
        ht === null)
      )
        throw Error(r(349));
      Bn & 30 || Q0(s, a, y);
    }
    return y;
  }
  function Q0(i, a, s) {
    (i.flags |= 16384),
      (i = { getSnapshot: a, value: s }),
      (a = Qe.updateQueue),
      a === null
        ? ((a = { lastEffect: null, stores: null }),
          (Qe.updateQueue = a),
          (a.stores = [i]))
        : ((s = a.stores), s === null ? (a.stores = [i]) : s.push(i));
  }
  function Z0(i, a, s, d) {
    (a.value = s), (a.getSnapshot = d), eb(a) && tb(i);
  }
  function J0(i, a, s) {
    return s(function () {
      eb(a) && tb(i);
    });
  }
  function eb(i) {
    var a = i.getSnapshot;
    i = i.value;
    try {
      var s = a();
      return !cr(i, s);
    } catch {
      return !0;
    }
  }
  function tb(i) {
    var a = Fr(i, 1);
    a !== null && vr(a, i, 1, -1);
  }
  function rb(i) {
    var a = Tr();
    return (
      typeof i == "function" && (i = i()),
      (a.memoizedState = a.baseState = i),
      (i = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ja,
        lastRenderedState: i,
      }),
      (a.queue = i),
      (i = i.dispatch = Ak.bind(null, Qe, i)),
      [a.memoizedState, i]
    );
  }
  function eo(i, a, s, d) {
    return (
      (i = { tag: i, create: a, destroy: s, deps: d, next: null }),
      (a = Qe.updateQueue),
      a === null
        ? ((a = { lastEffect: null, stores: null }),
          (Qe.updateQueue = a),
          (a.lastEffect = i.next = i))
        : ((s = a.lastEffect),
          s === null
            ? (a.lastEffect = i.next = i)
            : ((d = s.next), (s.next = i), (i.next = d), (a.lastEffect = i))),
      i
    );
  }
  function nb() {
    return Zt().memoizedState;
  }
  function Ju(i, a, s, d) {
    var y = Tr();
    (Qe.flags |= i),
      (y.memoizedState = eo(1 | a, s, void 0, d === void 0 ? null : d));
  }
  function el(i, a, s, d) {
    var y = Zt();
    d = d === void 0 ? null : d;
    var m = void 0;
    if (ut !== null) {
      var O = ut.memoizedState;
      if (((m = O.destroy), d !== null && bf(d, O.deps))) {
        y.memoizedState = eo(a, s, m, d);
        return;
      }
    }
    (Qe.flags |= i), (y.memoizedState = eo(1 | a, s, m, d));
  }
  function ib(i, a) {
    return Ju(8390656, 8, i, a);
  }
  function Of(i, a) {
    return el(2048, 8, i, a);
  }
  function ab(i, a) {
    return el(4, 2, i, a);
  }
  function ob(i, a) {
    return el(4, 4, i, a);
  }
  function ub(i, a) {
    if (typeof a == "function")
      return (
        (i = i()),
        a(i),
        function () {
          a(null);
        }
      );
    if (a != null)
      return (
        (i = i()),
        (a.current = i),
        function () {
          a.current = null;
        }
      );
  }
  function lb(i, a, s) {
    return (
      (s = s != null ? s.concat([i]) : null), el(4, 4, ub.bind(null, a, i), s)
    );
  }
  function Pf() {}
  function sb(i, a) {
    var s = Zt();
    a = a === void 0 ? null : a;
    var d = s.memoizedState;
    return d !== null && a !== null && bf(a, d[1])
      ? d[0]
      : ((s.memoizedState = [i, a]), i);
  }
  function cb(i, a) {
    var s = Zt();
    a = a === void 0 ? null : a;
    var d = s.memoizedState;
    return d !== null && a !== null && bf(a, d[1])
      ? d[0]
      : ((i = i()), (s.memoizedState = [i, a]), i);
  }
  function fb(i, a, s) {
    return Bn & 21
      ? (cr(s, a) ||
          ((s = Fg()), (Qe.lanes |= s), (Fn |= s), (i.baseState = !0)),
        a)
      : (i.baseState && ((i.baseState = !1), ($t = !0)), (i.memoizedState = s));
  }
  function Ok(i, a) {
    var s = Le;
    (Le = s !== 0 && 4 > s ? s : 4), i(!0);
    var d = gf.transition;
    gf.transition = {};
    try {
      i(!1), a();
    } finally {
      (Le = s), (gf.transition = d);
    }
  }
  function db() {
    return Zt().memoizedState;
  }
  function Pk(i, a, s) {
    var d = gn(i);
    if (
      ((s = {
        lane: d,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      pb(i))
    )
      hb(a, s);
    else if (((s = W0(i, a, s, d)), s !== null)) {
      var y = kt();
      vr(s, i, d, y), vb(s, a, d);
    }
  }
  function Ak(i, a, s) {
    var d = gn(i),
      y = {
        lane: d,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (pb(i)) hb(a, y);
    else {
      var m = i.alternate;
      if (
        i.lanes === 0 &&
        (m === null || m.lanes === 0) &&
        ((m = a.lastRenderedReducer), m !== null)
      )
        try {
          var O = a.lastRenderedState,
            j = m(O, s);
          if (((y.hasEagerState = !0), (y.eagerState = j), cr(j, O))) {
            var N = a.interleaved;
            N === null
              ? ((y.next = y), df(a))
              : ((y.next = N.next), (N.next = y)),
              (a.interleaved = y);
            return;
          }
        } catch {
        } finally {
        }
      (s = W0(i, a, y, d)),
        s !== null && ((y = kt()), vr(s, i, d, y), vb(s, a, d));
    }
  }
  function pb(i) {
    var a = i.alternate;
    return i === Qe || (a !== null && a === Qe);
  }
  function hb(i, a) {
    Qa = Zu = !0;
    var s = i.pending;
    s === null ? (a.next = a) : ((a.next = s.next), (s.next = a)),
      (i.pending = a);
  }
  function vb(i, a, s) {
    if (s & 4194240) {
      var d = a.lanes;
      (d &= i.pendingLanes), (s |= d), (a.lanes = s), Ac(i, s);
    }
  }
  var tl = {
      readContext: Qt,
      useCallback: Ot,
      useContext: Ot,
      useEffect: Ot,
      useImperativeHandle: Ot,
      useInsertionEffect: Ot,
      useLayoutEffect: Ot,
      useMemo: Ot,
      useReducer: Ot,
      useRef: Ot,
      useState: Ot,
      useDebugValue: Ot,
      useDeferredValue: Ot,
      useTransition: Ot,
      useMutableSource: Ot,
      useSyncExternalStore: Ot,
      useId: Ot,
      unstable_isNewReconciler: !1,
    },
    Ek = {
      readContext: Qt,
      useCallback: function (i, a) {
        return (Tr().memoizedState = [i, a === void 0 ? null : a]), i;
      },
      useContext: Qt,
      useEffect: ib,
      useImperativeHandle: function (i, a, s) {
        return (
          (s = s != null ? s.concat([i]) : null),
          Ju(4194308, 4, ub.bind(null, a, i), s)
        );
      },
      useLayoutEffect: function (i, a) {
        return Ju(4194308, 4, i, a);
      },
      useInsertionEffect: function (i, a) {
        return Ju(4, 2, i, a);
      },
      useMemo: function (i, a) {
        var s = Tr();
        return (
          (a = a === void 0 ? null : a),
          (i = i()),
          (s.memoizedState = [i, a]),
          i
        );
      },
      useReducer: function (i, a, s) {
        var d = Tr();
        return (
          (a = s !== void 0 ? s(a) : a),
          (d.memoizedState = d.baseState = a),
          (i = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: i,
            lastRenderedState: a,
          }),
          (d.queue = i),
          (i = i.dispatch = Pk.bind(null, Qe, i)),
          [d.memoizedState, i]
        );
      },
      useRef: function (i) {
        var a = Tr();
        return (i = { current: i }), (a.memoizedState = i);
      },
      useState: rb,
      useDebugValue: Pf,
      useDeferredValue: function (i) {
        return (Tr().memoizedState = i);
      },
      useTransition: function () {
        var i = rb(!1),
          a = i[0];
        return (i = Ok.bind(null, i[1])), (Tr().memoizedState = i), [a, i];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (i, a, s) {
        var d = Qe,
          y = Tr();
        if (Ve) {
          if (s === void 0) throw Error(r(407));
          s = s();
        } else {
          if (((s = a()), ht === null)) throw Error(r(349));
          Bn & 30 || Q0(d, a, s);
        }
        y.memoizedState = s;
        var m = { value: s, getSnapshot: a };
        return (
          (y.queue = m),
          ib(J0.bind(null, d, m, i), [i]),
          (d.flags |= 2048),
          eo(9, Z0.bind(null, d, m, s, a), void 0, null),
          s
        );
      },
      useId: function () {
        var i = Tr(),
          a = ht.identifierPrefix;
        if (Ve) {
          var s = Br,
            d = qr;
          (s = (d & ~(1 << (32 - sr(d) - 1))).toString(32) + s),
            (a = ":" + a + "R" + s),
            (s = Za++),
            0 < s && (a += "H" + s.toString(32)),
            (a += ":");
        } else (s = _k++), (a = ":" + a + "r" + s.toString(32) + ":");
        return (i.memoizedState = a);
      },
      unstable_isNewReconciler: !1,
    },
    Tk = {
      readContext: Qt,
      useCallback: sb,
      useContext: Qt,
      useEffect: Of,
      useImperativeHandle: lb,
      useInsertionEffect: ab,
      useLayoutEffect: ob,
      useMemo: cb,
      useReducer: Sf,
      useRef: nb,
      useState: function () {
        return Sf(Ja);
      },
      useDebugValue: Pf,
      useDeferredValue: function (i) {
        var a = Zt();
        return fb(a, ut.memoizedState, i);
      },
      useTransition: function () {
        var i = Sf(Ja)[0],
          a = Zt().memoizedState;
        return [i, a];
      },
      useMutableSource: X0,
      useSyncExternalStore: Y0,
      useId: db,
      unstable_isNewReconciler: !1,
    },
    Ck = {
      readContext: Qt,
      useCallback: sb,
      useContext: Qt,
      useEffect: Of,
      useImperativeHandle: lb,
      useInsertionEffect: ab,
      useLayoutEffect: ob,
      useMemo: cb,
      useReducer: _f,
      useRef: nb,
      useState: function () {
        return _f(Ja);
      },
      useDebugValue: Pf,
      useDeferredValue: function (i) {
        var a = Zt();
        return ut === null ? (a.memoizedState = i) : fb(a, ut.memoizedState, i);
      },
      useTransition: function () {
        var i = _f(Ja)[0],
          a = Zt().memoizedState;
        return [i, a];
      },
      useMutableSource: X0,
      useSyncExternalStore: Y0,
      useId: db,
      unstable_isNewReconciler: !1,
    };
  function dr(i, a) {
    if (i && i.defaultProps) {
      (a = Q({}, a)), (i = i.defaultProps);
      for (var s in i) a[s] === void 0 && (a[s] = i[s]);
      return a;
    }
    return a;
  }
  function Af(i, a, s, d) {
    (a = i.memoizedState),
      (s = s(d, a)),
      (s = s == null ? a : Q({}, a, s)),
      (i.memoizedState = s),
      i.lanes === 0 && (i.updateQueue.baseState = s);
  }
  var rl = {
    isMounted: function (i) {
      return (i = i._reactInternals) ? In(i) === i : !1;
    },
    enqueueSetState: function (i, a, s) {
      i = i._reactInternals;
      var d = kt(),
        y = gn(i),
        m = zr(d, y);
      (m.payload = a),
        s != null && (m.callback = s),
        (a = hn(i, m, y)),
        a !== null && (vr(a, i, y, d), Vu(a, i, y));
    },
    enqueueReplaceState: function (i, a, s) {
      i = i._reactInternals;
      var d = kt(),
        y = gn(i),
        m = zr(d, y);
      (m.tag = 1),
        (m.payload = a),
        s != null && (m.callback = s),
        (a = hn(i, m, y)),
        a !== null && (vr(a, i, y, d), Vu(a, i, y));
    },
    enqueueForceUpdate: function (i, a) {
      i = i._reactInternals;
      var s = kt(),
        d = gn(i),
        y = zr(s, d);
      (y.tag = 2),
        a != null && (y.callback = a),
        (a = hn(i, y, d)),
        a !== null && (vr(a, i, d, s), Vu(a, i, d));
    },
  };
  function yb(i, a, s, d, y, m, O) {
    return (
      (i = i.stateNode),
      typeof i.shouldComponentUpdate == "function"
        ? i.shouldComponentUpdate(d, m, O)
        : a.prototype && a.prototype.isPureReactComponent
        ? !Ba(s, d) || !Ba(y, m)
        : !0
    );
  }
  function mb(i, a, s) {
    var d = !1,
      y = fn,
      m = a.contextType;
    return (
      typeof m == "object" && m !== null
        ? (m = Qt(m))
        : ((y = Rt(a) ? Rn : _t.current),
          (d = a.contextTypes),
          (m = (d = d != null) ? Pi(i, y) : fn)),
      (a = new a(s, m)),
      (i.memoizedState =
        a.state !== null && a.state !== void 0 ? a.state : null),
      (a.updater = rl),
      (i.stateNode = a),
      (a._reactInternals = i),
      d &&
        ((i = i.stateNode),
        (i.__reactInternalMemoizedUnmaskedChildContext = y),
        (i.__reactInternalMemoizedMaskedChildContext = m)),
      a
    );
  }
  function gb(i, a, s, d) {
    (i = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(s, d),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(s, d),
      a.state !== i && rl.enqueueReplaceState(a, a.state, null);
  }
  function Ef(i, a, s, d) {
    var y = i.stateNode;
    (y.props = s), (y.state = i.memoizedState), (y.refs = {}), pf(i);
    var m = a.contextType;
    typeof m == "object" && m !== null
      ? (y.context = Qt(m))
      : ((m = Rt(a) ? Rn : _t.current), (y.context = Pi(i, m))),
      (y.state = i.memoizedState),
      (m = a.getDerivedStateFromProps),
      typeof m == "function" && (Af(i, a, m, s), (y.state = i.memoizedState)),
      typeof a.getDerivedStateFromProps == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function" ||
        (typeof y.UNSAFE_componentWillMount != "function" &&
          typeof y.componentWillMount != "function") ||
        ((a = y.state),
        typeof y.componentWillMount == "function" && y.componentWillMount(),
        typeof y.UNSAFE_componentWillMount == "function" &&
          y.UNSAFE_componentWillMount(),
        a !== y.state && rl.enqueueReplaceState(y, y.state, null),
        Xu(i, s, y, d),
        (y.state = i.memoizedState)),
      typeof y.componentDidMount == "function" && (i.flags |= 4194308);
  }
  function Ii(i, a) {
    try {
      var s = "",
        d = a;
      do (s += me(d)), (d = d.return);
      while (d);
      var y = s;
    } catch (m) {
      y =
        `
Error generating stack: ` +
        m.message +
        `
` +
        m.stack;
    }
    return { value: i, source: a, stack: y, digest: null };
  }
  function Tf(i, a, s) {
    return { value: i, source: null, stack: s ?? null, digest: a ?? null };
  }
  function Cf(i, a) {
    try {
      console.error(a.value);
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  var kk = typeof WeakMap == "function" ? WeakMap : Map;
  function bb(i, a, s) {
    (s = zr(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var d = a.value;
    return (
      (s.callback = function () {
        sl || ((sl = !0), (Wf = d)), Cf(i, a);
      }),
      s
    );
  }
  function wb(i, a, s) {
    (s = zr(-1, s)), (s.tag = 3);
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var y = a.value;
      (s.payload = function () {
        return d(y);
      }),
        (s.callback = function () {
          Cf(i, a);
        });
    }
    var m = i.stateNode;
    return (
      m !== null &&
        typeof m.componentDidCatch == "function" &&
        (s.callback = function () {
          Cf(i, a),
            typeof d != "function" &&
              (yn === null ? (yn = new Set([this])) : yn.add(this));
          var O = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: O !== null ? O : "",
          });
        }),
      s
    );
  }
  function xb(i, a, s) {
    var d = i.pingCache;
    if (d === null) {
      d = i.pingCache = new kk();
      var y = new Set();
      d.set(a, y);
    } else (y = d.get(a)), y === void 0 && ((y = new Set()), d.set(a, y));
    y.has(s) || (y.add(s), (i = Wk.bind(null, i, a, s)), a.then(i, i));
  }
  function Sb(i) {
    do {
      var a;
      if (
        ((a = i.tag === 13) &&
          ((a = i.memoizedState),
          (a = a !== null ? a.dehydrated !== null : !0)),
        a)
      )
        return i;
      i = i.return;
    } while (i !== null);
    return null;
  }
  function _b(i, a, s, d, y) {
    return i.mode & 1
      ? ((i.flags |= 65536), (i.lanes = y), i)
      : (i === a
          ? (i.flags |= 65536)
          : ((i.flags |= 128),
            (s.flags |= 131072),
            (s.flags &= -52805),
            s.tag === 1 &&
              (s.alternate === null
                ? (s.tag = 17)
                : ((a = zr(-1, 1)), (a.tag = 2), hn(s, a, 1))),
            (s.lanes |= 1)),
        i);
  }
  var jk = C.ReactCurrentOwner,
    $t = !1;
  function Ct(i, a, s, d) {
    a.child = i === null ? U0(a, null, s, d) : Ci(a, i.child, s, d);
  }
  function Ob(i, a, s, d, y) {
    s = s.render;
    var m = a.ref;
    return (
      ji(a, y),
      (d = wf(i, a, s, d, m, y)),
      (s = xf()),
      i !== null && !$t
        ? ((a.updateQueue = i.updateQueue),
          (a.flags &= -2053),
          (i.lanes &= ~y),
          Ur(i, a, y))
        : (Ve && s && rf(a), (a.flags |= 1), Ct(i, a, d, y), a.child)
    );
  }
  function Pb(i, a, s, d, y) {
    if (i === null) {
      var m = s.type;
      return typeof m == "function" &&
        !Qf(m) &&
        m.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((a.tag = 15), (a.type = m), Ab(i, a, m, d, y))
        : ((i = vl(s.type, null, d, a, a.mode, y)),
          (i.ref = a.ref),
          (i.return = a),
          (a.child = i));
    }
    if (((m = i.child), !(i.lanes & y))) {
      var O = m.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Ba), s(O, d) && i.ref === a.ref)
      )
        return Ur(i, a, y);
    }
    return (
      (a.flags |= 1),
      (i = wn(m, d)),
      (i.ref = a.ref),
      (i.return = a),
      (a.child = i)
    );
  }
  function Ab(i, a, s, d, y) {
    if (i !== null) {
      var m = i.memoizedProps;
      if (Ba(m, d) && i.ref === a.ref)
        if ((($t = !1), (a.pendingProps = d = m), (i.lanes & y) !== 0))
          i.flags & 131072 && ($t = !0);
        else return (a.lanes = i.lanes), Ur(i, a, y);
    }
    return kf(i, a, s, d, y);
  }
  function Eb(i, a, s) {
    var d = a.pendingProps,
      y = d.children,
      m = i !== null ? i.memoizedState : null;
    if (d.mode === "hidden")
      if (!(a.mode & 1))
        (a.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ze(Ri, Ht),
          (Ht |= s);
      else {
        if (!(s & 1073741824))
          return (
            (i = m !== null ? m.baseLanes | s : s),
            (a.lanes = a.childLanes = 1073741824),
            (a.memoizedState = {
              baseLanes: i,
              cachePool: null,
              transitions: null,
            }),
            (a.updateQueue = null),
            ze(Ri, Ht),
            (Ht |= i),
            null
          );
        (a.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (d = m !== null ? m.baseLanes : s),
          ze(Ri, Ht),
          (Ht |= d);
      }
    else
      m !== null ? ((d = m.baseLanes | s), (a.memoizedState = null)) : (d = s),
        ze(Ri, Ht),
        (Ht |= d);
    return Ct(i, a, y, s), a.child;
  }
  function Tb(i, a) {
    var s = a.ref;
    ((i === null && s !== null) || (i !== null && i.ref !== s)) &&
      ((a.flags |= 512), (a.flags |= 2097152));
  }
  function kf(i, a, s, d, y) {
    var m = Rt(s) ? Rn : _t.current;
    return (
      (m = Pi(a, m)),
      ji(a, y),
      (s = wf(i, a, s, d, m, y)),
      (d = xf()),
      i !== null && !$t
        ? ((a.updateQueue = i.updateQueue),
          (a.flags &= -2053),
          (i.lanes &= ~y),
          Ur(i, a, y))
        : (Ve && d && rf(a), (a.flags |= 1), Ct(i, a, s, y), a.child)
    );
  }
  function Cb(i, a, s, d, y) {
    if (Rt(s)) {
      var m = !0;
      Bu(a);
    } else m = !1;
    if ((ji(a, y), a.stateNode === null))
      il(i, a), mb(a, s, d), Ef(a, s, d, y), (d = !0);
    else if (i === null) {
      var O = a.stateNode,
        j = a.memoizedProps;
      O.props = j;
      var N = O.context,
        H = s.contextType;
      typeof H == "object" && H !== null
        ? (H = Qt(H))
        : ((H = Rt(s) ? Rn : _t.current), (H = Pi(a, H)));
      var te = s.getDerivedStateFromProps,
        ne =
          typeof te == "function" ||
          typeof O.getSnapshotBeforeUpdate == "function";
      ne ||
        (typeof O.UNSAFE_componentWillReceiveProps != "function" &&
          typeof O.componentWillReceiveProps != "function") ||
        ((j !== d || N !== H) && gb(a, O, d, H)),
        (pn = !1);
      var ee = a.memoizedState;
      (O.state = ee),
        Xu(a, d, O, y),
        (N = a.memoizedState),
        j !== d || ee !== N || Nt.current || pn
          ? (typeof te == "function" &&
              (Af(a, s, te, d), (N = a.memoizedState)),
            (j = pn || yb(a, s, j, d, ee, N, H))
              ? (ne ||
                  (typeof O.UNSAFE_componentWillMount != "function" &&
                    typeof O.componentWillMount != "function") ||
                  (typeof O.componentWillMount == "function" &&
                    O.componentWillMount(),
                  typeof O.UNSAFE_componentWillMount == "function" &&
                    O.UNSAFE_componentWillMount()),
                typeof O.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof O.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = d),
                (a.memoizedState = N)),
            (O.props = d),
            (O.state = N),
            (O.context = H),
            (d = j))
          : (typeof O.componentDidMount == "function" && (a.flags |= 4194308),
            (d = !1));
    } else {
      (O = a.stateNode),
        H0(i, a),
        (j = a.memoizedProps),
        (H = a.type === a.elementType ? j : dr(a.type, j)),
        (O.props = H),
        (ne = a.pendingProps),
        (ee = O.context),
        (N = s.contextType),
        typeof N == "object" && N !== null
          ? (N = Qt(N))
          : ((N = Rt(s) ? Rn : _t.current), (N = Pi(a, N)));
      var le = s.getDerivedStateFromProps;
      (te =
        typeof le == "function" ||
        typeof O.getSnapshotBeforeUpdate == "function") ||
        (typeof O.UNSAFE_componentWillReceiveProps != "function" &&
          typeof O.componentWillReceiveProps != "function") ||
        ((j !== ne || ee !== N) && gb(a, O, d, N)),
        (pn = !1),
        (ee = a.memoizedState),
        (O.state = ee),
        Xu(a, d, O, y);
      var de = a.memoizedState;
      j !== ne || ee !== de || Nt.current || pn
        ? (typeof le == "function" && (Af(a, s, le, d), (de = a.memoizedState)),
          (H = pn || yb(a, s, H, d, ee, de, N) || !1)
            ? (te ||
                (typeof O.UNSAFE_componentWillUpdate != "function" &&
                  typeof O.componentWillUpdate != "function") ||
                (typeof O.componentWillUpdate == "function" &&
                  O.componentWillUpdate(d, de, N),
                typeof O.UNSAFE_componentWillUpdate == "function" &&
                  O.UNSAFE_componentWillUpdate(d, de, N)),
              typeof O.componentDidUpdate == "function" && (a.flags |= 4),
              typeof O.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof O.componentDidUpdate != "function" ||
                (j === i.memoizedProps && ee === i.memoizedState) ||
                (a.flags |= 4),
              typeof O.getSnapshotBeforeUpdate != "function" ||
                (j === i.memoizedProps && ee === i.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = d),
              (a.memoizedState = de)),
          (O.props = d),
          (O.state = de),
          (O.context = N),
          (d = H))
        : (typeof O.componentDidUpdate != "function" ||
            (j === i.memoizedProps && ee === i.memoizedState) ||
            (a.flags |= 4),
          typeof O.getSnapshotBeforeUpdate != "function" ||
            (j === i.memoizedProps && ee === i.memoizedState) ||
            (a.flags |= 1024),
          (d = !1));
    }
    return jf(i, a, s, d, m, y);
  }
  function jf(i, a, s, d, y, m) {
    Tb(i, a);
    var O = (a.flags & 128) !== 0;
    if (!d && !O) return y && N0(a, s, !1), Ur(i, a, m);
    (d = a.stateNode), (jk.current = a);
    var j =
      O && typeof s.getDerivedStateFromError != "function" ? null : d.render();
    return (
      (a.flags |= 1),
      i !== null && O
        ? ((a.child = Ci(a, i.child, null, m)), (a.child = Ci(a, null, j, m)))
        : Ct(i, a, j, m),
      (a.memoizedState = d.state),
      y && N0(a, s, !0),
      a.child
    );
  }
  function kb(i) {
    var a = i.stateNode;
    a.pendingContext
      ? M0(i, a.pendingContext, a.pendingContext !== a.context)
      : a.context && M0(i, a.context, !1),
      hf(i, a.containerInfo);
  }
  function jb(i, a, s, d, y) {
    return Ti(), uf(y), (a.flags |= 256), Ct(i, a, s, d), a.child;
  }
  var Mf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function If(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function Mb(i, a, s) {
    var d = a.pendingProps,
      y = Ye.current,
      m = !1,
      O = (a.flags & 128) !== 0,
      j;
    if (
      ((j = O) ||
        (j = i !== null && i.memoizedState === null ? !1 : (y & 2) !== 0),
      j
        ? ((m = !0), (a.flags &= -129))
        : (i === null || i.memoizedState !== null) && (y |= 1),
      ze(Ye, y & 1),
      i === null)
    )
      return (
        of(a),
        (i = a.memoizedState),
        i !== null && ((i = i.dehydrated), i !== null)
          ? (a.mode & 1
              ? i.data === "$!"
                ? (a.lanes = 8)
                : (a.lanes = 1073741824)
              : (a.lanes = 1),
            null)
          : ((O = d.children),
            (i = d.fallback),
            m
              ? ((d = a.mode),
                (m = a.child),
                (O = { mode: "hidden", children: O }),
                !(d & 1) && m !== null
                  ? ((m.childLanes = 0), (m.pendingProps = O))
                  : (m = yl(O, d, 0, null)),
                (i = Hn(i, d, s, null)),
                (m.return = a),
                (i.return = a),
                (m.sibling = i),
                (a.child = m),
                (a.child.memoizedState = If(s)),
                (a.memoizedState = Mf),
                i)
              : Nf(a, O))
      );
    if (((y = i.memoizedState), y !== null && ((j = y.dehydrated), j !== null)))
      return Mk(i, a, O, d, j, y, s);
    if (m) {
      (m = d.fallback), (O = a.mode), (y = i.child), (j = y.sibling);
      var N = { mode: "hidden", children: d.children };
      return (
        !(O & 1) && a.child !== y
          ? ((d = a.child),
            (d.childLanes = 0),
            (d.pendingProps = N),
            (a.deletions = null))
          : ((d = wn(y, N)), (d.subtreeFlags = y.subtreeFlags & 14680064)),
        j !== null ? (m = wn(j, m)) : ((m = Hn(m, O, s, null)), (m.flags |= 2)),
        (m.return = a),
        (d.return = a),
        (d.sibling = m),
        (a.child = d),
        (d = m),
        (m = a.child),
        (O = i.child.memoizedState),
        (O =
          O === null
            ? If(s)
            : {
                baseLanes: O.baseLanes | s,
                cachePool: null,
                transitions: O.transitions,
              }),
        (m.memoizedState = O),
        (m.childLanes = i.childLanes & ~s),
        (a.memoizedState = Mf),
        d
      );
    }
    return (
      (m = i.child),
      (i = m.sibling),
      (d = wn(m, { mode: "visible", children: d.children })),
      !(a.mode & 1) && (d.lanes = s),
      (d.return = a),
      (d.sibling = null),
      i !== null &&
        ((s = a.deletions),
        s === null ? ((a.deletions = [i]), (a.flags |= 16)) : s.push(i)),
      (a.child = d),
      (a.memoizedState = null),
      d
    );
  }
  function Nf(i, a) {
    return (
      (a = yl({ mode: "visible", children: a }, i.mode, 0, null)),
      (a.return = i),
      (i.child = a)
    );
  }
  function nl(i, a, s, d) {
    return (
      d !== null && uf(d),
      Ci(a, i.child, null, s),
      (i = Nf(a, a.pendingProps.children)),
      (i.flags |= 2),
      (a.memoizedState = null),
      i
    );
  }
  function Mk(i, a, s, d, y, m, O) {
    if (s)
      return a.flags & 256
        ? ((a.flags &= -257), (d = Tf(Error(r(422)))), nl(i, a, O, d))
        : a.memoizedState !== null
        ? ((a.child = i.child), (a.flags |= 128), null)
        : ((m = d.fallback),
          (y = a.mode),
          (d = yl({ mode: "visible", children: d.children }, y, 0, null)),
          (m = Hn(m, y, O, null)),
          (m.flags |= 2),
          (d.return = a),
          (m.return = a),
          (d.sibling = m),
          (a.child = d),
          a.mode & 1 && Ci(a, i.child, null, O),
          (a.child.memoizedState = If(O)),
          (a.memoizedState = Mf),
          m);
    if (!(a.mode & 1)) return nl(i, a, O, null);
    if (y.data === "$!") {
      if (((d = y.nextSibling && y.nextSibling.dataset), d)) var j = d.dgst;
      return (
        (d = j), (m = Error(r(419))), (d = Tf(m, d, void 0)), nl(i, a, O, d)
      );
    }
    if (((j = (O & i.childLanes) !== 0), $t || j)) {
      if (((d = ht), d !== null)) {
        switch (O & -O) {
          case 4:
            y = 2;
            break;
          case 16:
            y = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            y = 32;
            break;
          case 536870912:
            y = 268435456;
            break;
          default:
            y = 0;
        }
        (y = y & (d.suspendedLanes | O) ? 0 : y),
          y !== 0 &&
            y !== m.retryLane &&
            ((m.retryLane = y), Fr(i, y), vr(d, i, y, -1));
      }
      return Yf(), (d = Tf(Error(r(421)))), nl(i, a, O, d);
    }
    return y.data === "$?"
      ? ((a.flags |= 128),
        (a.child = i.child),
        (a = Hk.bind(null, i)),
        (y._reactRetry = a),
        null)
      : ((i = m.treeContext),
        (Wt = sn(y.nextSibling)),
        (Ut = a),
        (Ve = !0),
        (fr = null),
        i !== null &&
          ((Xt[Yt++] = qr),
          (Xt[Yt++] = Br),
          (Xt[Yt++] = $n),
          (qr = i.id),
          (Br = i.overflow),
          ($n = a)),
        (a = Nf(a, d.children)),
        (a.flags |= 4096),
        a);
  }
  function Ib(i, a, s) {
    i.lanes |= a;
    var d = i.alternate;
    d !== null && (d.lanes |= a), ff(i.return, a, s);
  }
  function Rf(i, a, s, d, y) {
    var m = i.memoizedState;
    m === null
      ? (i.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: s,
          tailMode: y,
        })
      : ((m.isBackwards = a),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = d),
        (m.tail = s),
        (m.tailMode = y));
  }
  function Nb(i, a, s) {
    var d = a.pendingProps,
      y = d.revealOrder,
      m = d.tail;
    if ((Ct(i, a, d.children, s), (d = Ye.current), d & 2))
      (d = (d & 1) | 2), (a.flags |= 128);
    else {
      if (i !== null && i.flags & 128)
        e: for (i = a.child; i !== null; ) {
          if (i.tag === 13) i.memoizedState !== null && Ib(i, s, a);
          else if (i.tag === 19) Ib(i, s, a);
          else if (i.child !== null) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === a) break e;
          for (; i.sibling === null; ) {
            if (i.return === null || i.return === a) break e;
            i = i.return;
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      d &= 1;
    }
    if ((ze(Ye, d), !(a.mode & 1))) a.memoizedState = null;
    else
      switch (y) {
        case "forwards":
          for (s = a.child, y = null; s !== null; )
            (i = s.alternate),
              i !== null && Yu(i) === null && (y = s),
              (s = s.sibling);
          (s = y),
            s === null
              ? ((y = a.child), (a.child = null))
              : ((y = s.sibling), (s.sibling = null)),
            Rf(a, !1, y, s, m);
          break;
        case "backwards":
          for (s = null, y = a.child, a.child = null; y !== null; ) {
            if (((i = y.alternate), i !== null && Yu(i) === null)) {
              a.child = y;
              break;
            }
            (i = y.sibling), (y.sibling = s), (s = y), (y = i);
          }
          Rf(a, !0, s, null, m);
          break;
        case "together":
          Rf(a, !1, null, null, void 0);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function il(i, a) {
    !(a.mode & 1) &&
      i !== null &&
      ((i.alternate = null), (a.alternate = null), (a.flags |= 2));
  }
  function Ur(i, a, s) {
    if (
      (i !== null && (a.dependencies = i.dependencies),
      (Fn |= a.lanes),
      !(s & a.childLanes))
    )
      return null;
    if (i !== null && a.child !== i.child) throw Error(r(153));
    if (a.child !== null) {
      for (
        i = a.child, s = wn(i, i.pendingProps), a.child = s, s.return = a;
        i.sibling !== null;

      )
        (i = i.sibling),
          (s = s.sibling = wn(i, i.pendingProps)),
          (s.return = a);
      s.sibling = null;
    }
    return a.child;
  }
  function Ik(i, a, s) {
    switch (a.tag) {
      case 3:
        kb(a), Ti();
        break;
      case 5:
        V0(a);
        break;
      case 1:
        Rt(a.type) && Bu(a);
        break;
      case 4:
        hf(a, a.stateNode.containerInfo);
        break;
      case 10:
        var d = a.type._context,
          y = a.memoizedProps.value;
        ze(Gu, d._currentValue), (d._currentValue = y);
        break;
      case 13:
        if (((d = a.memoizedState), d !== null))
          return d.dehydrated !== null
            ? (ze(Ye, Ye.current & 1), (a.flags |= 128), null)
            : s & a.child.childLanes
            ? Mb(i, a, s)
            : (ze(Ye, Ye.current & 1),
              (i = Ur(i, a, s)),
              i !== null ? i.sibling : null);
        ze(Ye, Ye.current & 1);
        break;
      case 19:
        if (((d = (s & a.childLanes) !== 0), i.flags & 128)) {
          if (d) return Nb(i, a, s);
          a.flags |= 128;
        }
        if (
          ((y = a.memoizedState),
          y !== null &&
            ((y.rendering = null), (y.tail = null), (y.lastEffect = null)),
          ze(Ye, Ye.current),
          d)
        )
          break;
        return null;
      case 22:
      case 23:
        return (a.lanes = 0), Eb(i, a, s);
    }
    return Ur(i, a, s);
  }
  var Rb, $f, $b, Db;
  (Rb = function (i, a) {
    for (var s = a.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === a) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === a) return;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
  }),
    ($f = function () {}),
    ($b = function (i, a, s, d) {
      var y = i.memoizedProps;
      if (y !== d) {
        (i = a.stateNode), qn(Er.current);
        var m = null;
        switch (s) {
          case "input":
            (y = Ee(i, y)), (d = Ee(i, d)), (m = []);
            break;
          case "select":
            (y = Q({}, y, { value: void 0 })),
              (d = Q({}, d, { value: void 0 })),
              (m = []);
            break;
          case "textarea":
            (y = lr(i, y)), (d = lr(i, d)), (m = []);
            break;
          default:
            typeof y.onClick != "function" &&
              typeof d.onClick == "function" &&
              (i.onclick = Du);
        }
        vc(s, d);
        var O;
        s = null;
        for (H in y)
          if (!d.hasOwnProperty(H) && y.hasOwnProperty(H) && y[H] != null)
            if (H === "style") {
              var j = y[H];
              for (O in j) j.hasOwnProperty(O) && (s || (s = {}), (s[O] = ""));
            } else
              H !== "dangerouslySetInnerHTML" &&
                H !== "children" &&
                H !== "suppressContentEditableWarning" &&
                H !== "suppressHydrationWarning" &&
                H !== "autoFocus" &&
                (o.hasOwnProperty(H)
                  ? m || (m = [])
                  : (m = m || []).push(H, null));
        for (H in d) {
          var N = d[H];
          if (
            ((j = y != null ? y[H] : void 0),
            d.hasOwnProperty(H) && N !== j && (N != null || j != null))
          )
            if (H === "style")
              if (j) {
                for (O in j)
                  !j.hasOwnProperty(O) ||
                    (N && N.hasOwnProperty(O)) ||
                    (s || (s = {}), (s[O] = ""));
                for (O in N)
                  N.hasOwnProperty(O) &&
                    j[O] !== N[O] &&
                    (s || (s = {}), (s[O] = N[O]));
              } else s || (m || (m = []), m.push(H, s)), (s = N);
            else
              H === "dangerouslySetInnerHTML"
                ? ((N = N ? N.__html : void 0),
                  (j = j ? j.__html : void 0),
                  N != null && j !== N && (m = m || []).push(H, N))
                : H === "children"
                ? (typeof N != "string" && typeof N != "number") ||
                  (m = m || []).push(H, "" + N)
                : H !== "suppressContentEditableWarning" &&
                  H !== "suppressHydrationWarning" &&
                  (o.hasOwnProperty(H)
                    ? (N != null && H === "onScroll" && He("scroll", i),
                      m || j === N || (m = []))
                    : (m = m || []).push(H, N));
        }
        s && (m = m || []).push("style", s);
        var H = m;
        (a.updateQueue = H) && (a.flags |= 4);
      }
    }),
    (Db = function (i, a, s, d) {
      s !== d && (a.flags |= 4);
    });
  function to(i, a) {
    if (!Ve)
      switch (i.tailMode) {
        case "hidden":
          a = i.tail;
          for (var s = null; a !== null; )
            a.alternate !== null && (s = a), (a = a.sibling);
          s === null ? (i.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = i.tail;
          for (var d = null; s !== null; )
            s.alternate !== null && (d = s), (s = s.sibling);
          d === null
            ? a || i.tail === null
              ? (i.tail = null)
              : (i.tail.sibling = null)
            : (d.sibling = null);
      }
  }
  function Pt(i) {
    var a = i.alternate !== null && i.alternate.child === i.child,
      s = 0,
      d = 0;
    if (a)
      for (var y = i.child; y !== null; )
        (s |= y.lanes | y.childLanes),
          (d |= y.subtreeFlags & 14680064),
          (d |= y.flags & 14680064),
          (y.return = i),
          (y = y.sibling);
    else
      for (y = i.child; y !== null; )
        (s |= y.lanes | y.childLanes),
          (d |= y.subtreeFlags),
          (d |= y.flags),
          (y.return = i),
          (y = y.sibling);
    return (i.subtreeFlags |= d), (i.childLanes = s), a;
  }
  function Nk(i, a, s) {
    var d = a.pendingProps;
    switch ((nf(a), a.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pt(a), null;
      case 1:
        return Rt(a.type) && qu(), Pt(a), null;
      case 3:
        return (
          (d = a.stateNode),
          Mi(),
          Ge(Nt),
          Ge(_t),
          mf(),
          d.pendingContext &&
            ((d.context = d.pendingContext), (d.pendingContext = null)),
          (i === null || i.child === null) &&
            (Wu(a)
              ? (a.flags |= 4)
              : i === null ||
                (i.memoizedState.isDehydrated && !(a.flags & 256)) ||
                ((a.flags |= 1024), fr !== null && (Kf(fr), (fr = null)))),
          $f(i, a),
          Pt(a),
          null
        );
      case 5:
        vf(a);
        var y = qn(Ya.current);
        if (((s = a.type), i !== null && a.stateNode != null))
          $b(i, a, s, d, y),
            i.ref !== a.ref && ((a.flags |= 512), (a.flags |= 2097152));
        else {
          if (!d) {
            if (a.stateNode === null) throw Error(r(166));
            return Pt(a), null;
          }
          if (((i = qn(Er.current)), Wu(a))) {
            (d = a.stateNode), (s = a.type);
            var m = a.memoizedProps;
            switch (((d[Ar] = a), (d[Ha] = m), (i = (a.mode & 1) !== 0), s)) {
              case "dialog":
                He("cancel", d), He("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                He("load", d);
                break;
              case "video":
              case "audio":
                for (y = 0; y < za.length; y++) He(za[y], d);
                break;
              case "source":
                He("error", d);
                break;
              case "img":
              case "image":
              case "link":
                He("error", d), He("load", d);
                break;
              case "details":
                He("toggle", d);
                break;
              case "input":
                Ze(d, m), He("invalid", d);
                break;
              case "select":
                (d._wrapperState = { wasMultiple: !!m.multiple }),
                  He("invalid", d);
                break;
              case "textarea":
                pi(d, m), He("invalid", d);
            }
            vc(s, m), (y = null);
            for (var O in m)
              if (m.hasOwnProperty(O)) {
                var j = m[O];
                O === "children"
                  ? typeof j == "string"
                    ? d.textContent !== j &&
                      (m.suppressHydrationWarning !== !0 &&
                        $u(d.textContent, j, i),
                      (y = ["children", j]))
                    : typeof j == "number" &&
                      d.textContent !== "" + j &&
                      (m.suppressHydrationWarning !== !0 &&
                        $u(d.textContent, j, i),
                      (y = ["children", "" + j]))
                  : o.hasOwnProperty(O) &&
                    j != null &&
                    O === "onScroll" &&
                    He("scroll", d);
              }
            switch (s) {
              case "input":
                Pe(d), ur(d, m, !0);
                break;
              case "textarea":
                Pe(d), Sa(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (d.onclick = Du);
            }
            (d = y), (a.updateQueue = d), d !== null && (a.flags |= 4);
          } else {
            (O = y.nodeType === 9 ? y : y.ownerDocument),
              i === "http://www.w3.org/1999/xhtml" && (i = _g(s)),
              i === "http://www.w3.org/1999/xhtml"
                ? s === "script"
                  ? ((i = O.createElement("div")),
                    (i.innerHTML = "<script></script>"),
                    (i = i.removeChild(i.firstChild)))
                  : typeof d.is == "string"
                  ? (i = O.createElement(s, { is: d.is }))
                  : ((i = O.createElement(s)),
                    s === "select" &&
                      ((O = i),
                      d.multiple
                        ? (O.multiple = !0)
                        : d.size && (O.size = d.size)))
                : (i = O.createElementNS(i, s)),
              (i[Ar] = a),
              (i[Ha] = d),
              Rb(i, a, !1, !1),
              (a.stateNode = i);
            e: {
              switch (((O = yc(s, d)), s)) {
                case "dialog":
                  He("cancel", i), He("close", i), (y = d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  He("load", i), (y = d);
                  break;
                case "video":
                case "audio":
                  for (y = 0; y < za.length; y++) He(za[y], i);
                  y = d;
                  break;
                case "source":
                  He("error", i), (y = d);
                  break;
                case "img":
                case "image":
                case "link":
                  He("error", i), He("load", i), (y = d);
                  break;
                case "details":
                  He("toggle", i), (y = d);
                  break;
                case "input":
                  Ze(i, d), (y = Ee(i, d)), He("invalid", i);
                  break;
                case "option":
                  y = d;
                  break;
                case "select":
                  (i._wrapperState = { wasMultiple: !!d.multiple }),
                    (y = Q({}, d, { value: void 0 })),
                    He("invalid", i);
                  break;
                case "textarea":
                  pi(i, d), (y = lr(i, d)), He("invalid", i);
                  break;
                default:
                  y = d;
              }
              vc(s, y), (j = y);
              for (m in j)
                if (j.hasOwnProperty(m)) {
                  var N = j[m];
                  m === "style"
                    ? Ag(i, N)
                    : m === "dangerouslySetInnerHTML"
                    ? ((N = N ? N.__html : void 0), N != null && Og(i, N))
                    : m === "children"
                    ? typeof N == "string"
                      ? (s !== "textarea" || N !== "") && _a(i, N)
                      : typeof N == "number" && _a(i, "" + N)
                    : m !== "suppressContentEditableWarning" &&
                      m !== "suppressHydrationWarning" &&
                      m !== "autoFocus" &&
                      (o.hasOwnProperty(m)
                        ? N != null && m === "onScroll" && He("scroll", i)
                        : N != null && E(i, m, N, O));
                }
              switch (s) {
                case "input":
                  Pe(i), ur(i, d, !1);
                  break;
                case "textarea":
                  Pe(i), Sa(i);
                  break;
                case "option":
                  d.value != null && i.setAttribute("value", "" + Oe(d.value));
                  break;
                case "select":
                  (i.multiple = !!d.multiple),
                    (m = d.value),
                    m != null
                      ? It(i, !!d.multiple, m, !1)
                      : d.defaultValue != null &&
                        It(i, !!d.multiple, d.defaultValue, !0);
                  break;
                default:
                  typeof y.onClick == "function" && (i.onclick = Du);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break e;
                case "img":
                  d = !0;
                  break e;
                default:
                  d = !1;
              }
            }
            d && (a.flags |= 4);
          }
          a.ref !== null && ((a.flags |= 512), (a.flags |= 2097152));
        }
        return Pt(a), null;
      case 6:
        if (i && a.stateNode != null) Db(i, a, i.memoizedProps, d);
        else {
          if (typeof d != "string" && a.stateNode === null) throw Error(r(166));
          if (((s = qn(Ya.current)), qn(Er.current), Wu(a))) {
            if (
              ((d = a.stateNode),
              (s = a.memoizedProps),
              (d[Ar] = a),
              (m = d.nodeValue !== s) && ((i = Ut), i !== null))
            )
              switch (i.tag) {
                case 3:
                  $u(d.nodeValue, s, (i.mode & 1) !== 0);
                  break;
                case 5:
                  i.memoizedProps.suppressHydrationWarning !== !0 &&
                    $u(d.nodeValue, s, (i.mode & 1) !== 0);
              }
            m && (a.flags |= 4);
          } else
            (d = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(d)),
              (d[Ar] = a),
              (a.stateNode = d);
        }
        return Pt(a), null;
      case 13:
        if (
          (Ge(Ye),
          (d = a.memoizedState),
          i === null ||
            (i.memoizedState !== null && i.memoizedState.dehydrated !== null))
        ) {
          if (Ve && Wt !== null && a.mode & 1 && !(a.flags & 128))
            B0(), Ti(), (a.flags |= 98560), (m = !1);
          else if (((m = Wu(a)), d !== null && d.dehydrated !== null)) {
            if (i === null) {
              if (!m) throw Error(r(318));
              if (
                ((m = a.memoizedState),
                (m = m !== null ? m.dehydrated : null),
                !m)
              )
                throw Error(r(317));
              m[Ar] = a;
            } else
              Ti(),
                !(a.flags & 128) && (a.memoizedState = null),
                (a.flags |= 4);
            Pt(a), (m = !1);
          } else fr !== null && (Kf(fr), (fr = null)), (m = !0);
          if (!m) return a.flags & 65536 ? a : null;
        }
        return a.flags & 128
          ? ((a.lanes = s), a)
          : ((d = d !== null),
            d !== (i !== null && i.memoizedState !== null) &&
              d &&
              ((a.child.flags |= 8192),
              a.mode & 1 &&
                (i === null || Ye.current & 1 ? lt === 0 && (lt = 3) : Yf())),
            a.updateQueue !== null && (a.flags |= 4),
            Pt(a),
            null);
      case 4:
        return (
          Mi(),
          $f(i, a),
          i === null && Ua(a.stateNode.containerInfo),
          Pt(a),
          null
        );
      case 10:
        return cf(a.type._context), Pt(a), null;
      case 17:
        return Rt(a.type) && qu(), Pt(a), null;
      case 19:
        if ((Ge(Ye), (m = a.memoizedState), m === null)) return Pt(a), null;
        if (((d = (a.flags & 128) !== 0), (O = m.rendering), O === null))
          if (d) to(m, !1);
          else {
            if (lt !== 0 || (i !== null && i.flags & 128))
              for (i = a.child; i !== null; ) {
                if (((O = Yu(i)), O !== null)) {
                  for (
                    a.flags |= 128,
                      to(m, !1),
                      d = O.updateQueue,
                      d !== null && ((a.updateQueue = d), (a.flags |= 4)),
                      a.subtreeFlags = 0,
                      d = s,
                      s = a.child;
                    s !== null;

                  )
                    (m = s),
                      (i = d),
                      (m.flags &= 14680066),
                      (O = m.alternate),
                      O === null
                        ? ((m.childLanes = 0),
                          (m.lanes = i),
                          (m.child = null),
                          (m.subtreeFlags = 0),
                          (m.memoizedProps = null),
                          (m.memoizedState = null),
                          (m.updateQueue = null),
                          (m.dependencies = null),
                          (m.stateNode = null))
                        : ((m.childLanes = O.childLanes),
                          (m.lanes = O.lanes),
                          (m.child = O.child),
                          (m.subtreeFlags = 0),
                          (m.deletions = null),
                          (m.memoizedProps = O.memoizedProps),
                          (m.memoizedState = O.memoizedState),
                          (m.updateQueue = O.updateQueue),
                          (m.type = O.type),
                          (i = O.dependencies),
                          (m.dependencies =
                            i === null
                              ? null
                              : {
                                  lanes: i.lanes,
                                  firstContext: i.firstContext,
                                })),
                      (s = s.sibling);
                  return ze(Ye, (Ye.current & 1) | 2), a.child;
                }
                i = i.sibling;
              }
            m.tail !== null &&
              rt() > $i &&
              ((a.flags |= 128), (d = !0), to(m, !1), (a.lanes = 4194304));
          }
        else {
          if (!d)
            if (((i = Yu(O)), i !== null)) {
              if (
                ((a.flags |= 128),
                (d = !0),
                (s = i.updateQueue),
                s !== null && ((a.updateQueue = s), (a.flags |= 4)),
                to(m, !0),
                m.tail === null &&
                  m.tailMode === "hidden" &&
                  !O.alternate &&
                  !Ve)
              )
                return Pt(a), null;
            } else
              2 * rt() - m.renderingStartTime > $i &&
                s !== 1073741824 &&
                ((a.flags |= 128), (d = !0), to(m, !1), (a.lanes = 4194304));
          m.isBackwards
            ? ((O.sibling = a.child), (a.child = O))
            : ((s = m.last),
              s !== null ? (s.sibling = O) : (a.child = O),
              (m.last = O));
        }
        return m.tail !== null
          ? ((a = m.tail),
            (m.rendering = a),
            (m.tail = a.sibling),
            (m.renderingStartTime = rt()),
            (a.sibling = null),
            (s = Ye.current),
            ze(Ye, d ? (s & 1) | 2 : s & 1),
            a)
          : (Pt(a), null);
      case 22:
      case 23:
        return (
          Xf(),
          (d = a.memoizedState !== null),
          i !== null && (i.memoizedState !== null) !== d && (a.flags |= 8192),
          d && a.mode & 1
            ? Ht & 1073741824 &&
              (Pt(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : Pt(a),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, a.tag));
  }
  function Rk(i, a) {
    switch ((nf(a), a.tag)) {
      case 1:
        return (
          Rt(a.type) && qu(),
          (i = a.flags),
          i & 65536 ? ((a.flags = (i & -65537) | 128), a) : null
        );
      case 3:
        return (
          Mi(),
          Ge(Nt),
          Ge(_t),
          mf(),
          (i = a.flags),
          i & 65536 && !(i & 128) ? ((a.flags = (i & -65537) | 128), a) : null
        );
      case 5:
        return vf(a), null;
      case 13:
        if (
          (Ge(Ye), (i = a.memoizedState), i !== null && i.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(r(340));
          Ti();
        }
        return (
          (i = a.flags), i & 65536 ? ((a.flags = (i & -65537) | 128), a) : null
        );
      case 19:
        return Ge(Ye), null;
      case 4:
        return Mi(), null;
      case 10:
        return cf(a.type._context), null;
      case 22:
      case 23:
        return Xf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var al = !1,
    At = !1,
    $k = typeof WeakSet == "function" ? WeakSet : Set,
    ce = null;
  function Ni(i, a) {
    var s = i.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (d) {
          et(i, a, d);
        }
      else s.current = null;
  }
  function Df(i, a, s) {
    try {
      s();
    } catch (d) {
      et(i, a, d);
    }
  }
  var Lb = !1;
  function Dk(i, a) {
    if (((Vc = Pu), (i = y0()), Bc(i))) {
      if ("selectionStart" in i)
        var s = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: {
          s = ((s = i.ownerDocument) && s.defaultView) || window;
          var d = s.getSelection && s.getSelection();
          if (d && d.rangeCount !== 0) {
            s = d.anchorNode;
            var y = d.anchorOffset,
              m = d.focusNode;
            d = d.focusOffset;
            try {
              s.nodeType, m.nodeType;
            } catch {
              s = null;
              break e;
            }
            var O = 0,
              j = -1,
              N = -1,
              H = 0,
              te = 0,
              ne = i,
              ee = null;
            t: for (;;) {
              for (
                var le;
                ne !== s || (y !== 0 && ne.nodeType !== 3) || (j = O + y),
                  ne !== m || (d !== 0 && ne.nodeType !== 3) || (N = O + d),
                  ne.nodeType === 3 && (O += ne.nodeValue.length),
                  (le = ne.firstChild) !== null;

              )
                (ee = ne), (ne = le);
              for (;;) {
                if (ne === i) break t;
                if (
                  (ee === s && ++H === y && (j = O),
                  ee === m && ++te === d && (N = O),
                  (le = ne.nextSibling) !== null)
                )
                  break;
                (ne = ee), (ee = ne.parentNode);
              }
              ne = le;
            }
            s = j === -1 || N === -1 ? null : { start: j, end: N };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Xc = { focusedElem: i, selectionRange: s }, Pu = !1, ce = a;
      ce !== null;

    )
      if (
        ((a = ce), (i = a.child), (a.subtreeFlags & 1028) !== 0 && i !== null)
      )
        (i.return = a), (ce = i);
      else
        for (; ce !== null; ) {
          a = ce;
          try {
            var de = a.alternate;
            if (a.flags & 1024)
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (de !== null) {
                    var he = de.memoizedProps,
                      nt = de.memoizedState,
                      q = a.stateNode,
                      $ = q.getSnapshotBeforeUpdate(
                        a.elementType === a.type ? he : dr(a.type, he),
                        nt
                      );
                    q.__reactInternalSnapshotBeforeUpdate = $;
                  }
                  break;
                case 3:
                  var U = a.stateNode.containerInfo;
                  U.nodeType === 1
                    ? (U.textContent = "")
                    : U.nodeType === 9 &&
                      U.documentElement &&
                      U.removeChild(U.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (ae) {
            et(a, a.return, ae);
          }
          if (((i = a.sibling), i !== null)) {
            (i.return = a.return), (ce = i);
            break;
          }
          ce = a.return;
        }
    return (de = Lb), (Lb = !1), de;
  }
  function ro(i, a, s) {
    var d = a.updateQueue;
    if (((d = d !== null ? d.lastEffect : null), d !== null)) {
      var y = (d = d.next);
      do {
        if ((y.tag & i) === i) {
          var m = y.destroy;
          (y.destroy = void 0), m !== void 0 && Df(a, s, m);
        }
        y = y.next;
      } while (y !== d);
    }
  }
  function ol(i, a) {
    if (
      ((a = a.updateQueue), (a = a !== null ? a.lastEffect : null), a !== null)
    ) {
      var s = (a = a.next);
      do {
        if ((s.tag & i) === i) {
          var d = s.create;
          s.destroy = d();
        }
        s = s.next;
      } while (s !== a);
    }
  }
  function Lf(i) {
    var a = i.ref;
    if (a !== null) {
      var s = i.stateNode;
      switch (i.tag) {
        case 5:
          i = s;
          break;
        default:
          i = s;
      }
      typeof a == "function" ? a(i) : (a.current = i);
    }
  }
  function qb(i) {
    var a = i.alternate;
    a !== null && ((i.alternate = null), qb(a)),
      (i.child = null),
      (i.deletions = null),
      (i.sibling = null),
      i.tag === 5 &&
        ((a = i.stateNode),
        a !== null &&
          (delete a[Ar],
          delete a[Ha],
          delete a[Jc],
          delete a[bk],
          delete a[wk])),
      (i.stateNode = null),
      (i.return = null),
      (i.dependencies = null),
      (i.memoizedProps = null),
      (i.memoizedState = null),
      (i.pendingProps = null),
      (i.stateNode = null),
      (i.updateQueue = null);
  }
  function Bb(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function Fb(i) {
    e: for (;;) {
      for (; i.sibling === null; ) {
        if (i.return === null || Bb(i.return)) return null;
        i = i.return;
      }
      for (
        i.sibling.return = i.return, i = i.sibling;
        i.tag !== 5 && i.tag !== 6 && i.tag !== 18;

      ) {
        if (i.flags & 2 || i.child === null || i.tag === 4) continue e;
        (i.child.return = i), (i = i.child);
      }
      if (!(i.flags & 2)) return i.stateNode;
    }
  }
  function qf(i, a, s) {
    var d = i.tag;
    if (d === 5 || d === 6)
      (i = i.stateNode),
        a
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(i, a)
            : s.insertBefore(i, a)
          : (s.nodeType === 8
              ? ((a = s.parentNode), a.insertBefore(i, s))
              : ((a = s), a.appendChild(i)),
            (s = s._reactRootContainer),
            s != null || a.onclick !== null || (a.onclick = Du));
    else if (d !== 4 && ((i = i.child), i !== null))
      for (qf(i, a, s), i = i.sibling; i !== null; )
        qf(i, a, s), (i = i.sibling);
  }
  function Bf(i, a, s) {
    var d = i.tag;
    if (d === 5 || d === 6)
      (i = i.stateNode), a ? s.insertBefore(i, a) : s.appendChild(i);
    else if (d !== 4 && ((i = i.child), i !== null))
      for (Bf(i, a, s), i = i.sibling; i !== null; )
        Bf(i, a, s), (i = i.sibling);
  }
  var bt = null,
    pr = !1;
  function vn(i, a, s) {
    for (s = s.child; s !== null; ) zb(i, a, s), (s = s.sibling);
  }
  function zb(i, a, s) {
    if (Pr && typeof Pr.onCommitFiberUnmount == "function")
      try {
        Pr.onCommitFiberUnmount(bu, s);
      } catch {}
    switch (s.tag) {
      case 5:
        At || Ni(s, a);
      case 6:
        var d = bt,
          y = pr;
        (bt = null),
          vn(i, a, s),
          (bt = d),
          (pr = y),
          bt !== null &&
            (pr
              ? ((i = bt),
                (s = s.stateNode),
                i.nodeType === 8
                  ? i.parentNode.removeChild(s)
                  : i.removeChild(s))
              : bt.removeChild(s.stateNode));
        break;
      case 18:
        bt !== null &&
          (pr
            ? ((i = bt),
              (s = s.stateNode),
              i.nodeType === 8
                ? Zc(i.parentNode, s)
                : i.nodeType === 1 && Zc(i, s),
              Na(i))
            : Zc(bt, s.stateNode));
        break;
      case 4:
        (d = bt),
          (y = pr),
          (bt = s.stateNode.containerInfo),
          (pr = !0),
          vn(i, a, s),
          (bt = d),
          (pr = y);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !At &&
          ((d = s.updateQueue), d !== null && ((d = d.lastEffect), d !== null))
        ) {
          y = d = d.next;
          do {
            var m = y,
              O = m.destroy;
            (m = m.tag),
              O !== void 0 && (m & 2 || m & 4) && Df(s, a, O),
              (y = y.next);
          } while (y !== d);
        }
        vn(i, a, s);
        break;
      case 1:
        if (
          !At &&
          (Ni(s, a),
          (d = s.stateNode),
          typeof d.componentWillUnmount == "function")
        )
          try {
            (d.props = s.memoizedProps),
              (d.state = s.memoizedState),
              d.componentWillUnmount();
          } catch (j) {
            et(s, a, j);
          }
        vn(i, a, s);
        break;
      case 21:
        vn(i, a, s);
        break;
      case 22:
        s.mode & 1
          ? ((At = (d = At) || s.memoizedState !== null), vn(i, a, s), (At = d))
          : vn(i, a, s);
        break;
      default:
        vn(i, a, s);
    }
  }
  function Ub(i) {
    var a = i.updateQueue;
    if (a !== null) {
      i.updateQueue = null;
      var s = i.stateNode;
      s === null && (s = i.stateNode = new $k()),
        a.forEach(function (d) {
          var y = Gk.bind(null, i, d);
          s.has(d) || (s.add(d), d.then(y, y));
        });
    }
  }
  function hr(i, a) {
    var s = a.deletions;
    if (s !== null)
      for (var d = 0; d < s.length; d++) {
        var y = s[d];
        try {
          var m = i,
            O = a,
            j = O;
          e: for (; j !== null; ) {
            switch (j.tag) {
              case 5:
                (bt = j.stateNode), (pr = !1);
                break e;
              case 3:
                (bt = j.stateNode.containerInfo), (pr = !0);
                break e;
              case 4:
                (bt = j.stateNode.containerInfo), (pr = !0);
                break e;
            }
            j = j.return;
          }
          if (bt === null) throw Error(r(160));
          zb(m, O, y), (bt = null), (pr = !1);
          var N = y.alternate;
          N !== null && (N.return = null), (y.return = null);
        } catch (H) {
          et(y, a, H);
        }
      }
    if (a.subtreeFlags & 12854)
      for (a = a.child; a !== null; ) Wb(a, i), (a = a.sibling);
  }
  function Wb(i, a) {
    var s = i.alternate,
      d = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((hr(a, i), Cr(i), d & 4)) {
          try {
            ro(3, i, i.return), ol(3, i);
          } catch (he) {
            et(i, i.return, he);
          }
          try {
            ro(5, i, i.return);
          } catch (he) {
            et(i, i.return, he);
          }
        }
        break;
      case 1:
        hr(a, i), Cr(i), d & 512 && s !== null && Ni(s, s.return);
        break;
      case 5:
        if (
          (hr(a, i),
          Cr(i),
          d & 512 && s !== null && Ni(s, s.return),
          i.flags & 32)
        ) {
          var y = i.stateNode;
          try {
            _a(y, "");
          } catch (he) {
            et(i, i.return, he);
          }
        }
        if (d & 4 && ((y = i.stateNode), y != null)) {
          var m = i.memoizedProps,
            O = s !== null ? s.memoizedProps : m,
            j = i.type,
            N = i.updateQueue;
          if (((i.updateQueue = null), N !== null))
            try {
              j === "input" && m.type === "radio" && m.name != null && Je(y, m),
                yc(j, O);
              var H = yc(j, m);
              for (O = 0; O < N.length; O += 2) {
                var te = N[O],
                  ne = N[O + 1];
                te === "style"
                  ? Ag(y, ne)
                  : te === "dangerouslySetInnerHTML"
                  ? Og(y, ne)
                  : te === "children"
                  ? _a(y, ne)
                  : E(y, te, ne, H);
              }
              switch (j) {
                case "input":
                  dt(y, m);
                  break;
                case "textarea":
                  xa(y, m);
                  break;
                case "select":
                  var ee = y._wrapperState.wasMultiple;
                  y._wrapperState.wasMultiple = !!m.multiple;
                  var le = m.value;
                  le != null
                    ? It(y, !!m.multiple, le, !1)
                    : ee !== !!m.multiple &&
                      (m.defaultValue != null
                        ? It(y, !!m.multiple, m.defaultValue, !0)
                        : It(y, !!m.multiple, m.multiple ? [] : "", !1));
              }
              y[Ha] = m;
            } catch (he) {
              et(i, i.return, he);
            }
        }
        break;
      case 6:
        if ((hr(a, i), Cr(i), d & 4)) {
          if (i.stateNode === null) throw Error(r(162));
          (y = i.stateNode), (m = i.memoizedProps);
          try {
            y.nodeValue = m;
          } catch (he) {
            et(i, i.return, he);
          }
        }
        break;
      case 3:
        if (
          (hr(a, i), Cr(i), d & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Na(a.containerInfo);
          } catch (he) {
            et(i, i.return, he);
          }
        break;
      case 4:
        hr(a, i), Cr(i);
        break;
      case 13:
        hr(a, i),
          Cr(i),
          (y = i.child),
          y.flags & 8192 &&
            ((m = y.memoizedState !== null),
            (y.stateNode.isHidden = m),
            !m ||
              (y.alternate !== null && y.alternate.memoizedState !== null) ||
              (Uf = rt())),
          d & 4 && Ub(i);
        break;
      case 22:
        if (
          ((te = s !== null && s.memoizedState !== null),
          i.mode & 1 ? ((At = (H = At) || te), hr(a, i), (At = H)) : hr(a, i),
          Cr(i),
          d & 8192)
        ) {
          if (
            ((H = i.memoizedState !== null),
            (i.stateNode.isHidden = H) && !te && i.mode & 1)
          )
            for (ce = i, te = i.child; te !== null; ) {
              for (ne = ce = te; ce !== null; ) {
                switch (((ee = ce), (le = ee.child), ee.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ro(4, ee, ee.return);
                    break;
                  case 1:
                    Ni(ee, ee.return);
                    var de = ee.stateNode;
                    if (typeof de.componentWillUnmount == "function") {
                      (d = ee), (s = ee.return);
                      try {
                        (a = d),
                          (de.props = a.memoizedProps),
                          (de.state = a.memoizedState),
                          de.componentWillUnmount();
                      } catch (he) {
                        et(d, s, he);
                      }
                    }
                    break;
                  case 5:
                    Ni(ee, ee.return);
                    break;
                  case 22:
                    if (ee.memoizedState !== null) {
                      Kb(ne);
                      continue;
                    }
                }
                le !== null ? ((le.return = ee), (ce = le)) : Kb(ne);
              }
              te = te.sibling;
            }
          e: for (te = null, ne = i; ; ) {
            if (ne.tag === 5) {
              if (te === null) {
                te = ne;
                try {
                  (y = ne.stateNode),
                    H
                      ? ((m = y.style),
                        typeof m.setProperty == "function"
                          ? m.setProperty("display", "none", "important")
                          : (m.display = "none"))
                      : ((j = ne.stateNode),
                        (N = ne.memoizedProps.style),
                        (O =
                          N != null && N.hasOwnProperty("display")
                            ? N.display
                            : null),
                        (j.style.display = Pg("display", O)));
                } catch (he) {
                  et(i, i.return, he);
                }
              }
            } else if (ne.tag === 6) {
              if (te === null)
                try {
                  ne.stateNode.nodeValue = H ? "" : ne.memoizedProps;
                } catch (he) {
                  et(i, i.return, he);
                }
            } else if (
              ((ne.tag !== 22 && ne.tag !== 23) ||
                ne.memoizedState === null ||
                ne === i) &&
              ne.child !== null
            ) {
              (ne.child.return = ne), (ne = ne.child);
              continue;
            }
            if (ne === i) break e;
            for (; ne.sibling === null; ) {
              if (ne.return === null || ne.return === i) break e;
              te === ne && (te = null), (ne = ne.return);
            }
            te === ne && (te = null),
              (ne.sibling.return = ne.return),
              (ne = ne.sibling);
          }
        }
        break;
      case 19:
        hr(a, i), Cr(i), d & 4 && Ub(i);
        break;
      case 21:
        break;
      default:
        hr(a, i), Cr(i);
    }
  }
  function Cr(i) {
    var a = i.flags;
    if (a & 2) {
      try {
        e: {
          for (var s = i.return; s !== null; ) {
            if (Bb(s)) {
              var d = s;
              break e;
            }
            s = s.return;
          }
          throw Error(r(160));
        }
        switch (d.tag) {
          case 5:
            var y = d.stateNode;
            d.flags & 32 && (_a(y, ""), (d.flags &= -33));
            var m = Fb(i);
            Bf(i, m, y);
            break;
          case 3:
          case 4:
            var O = d.stateNode.containerInfo,
              j = Fb(i);
            qf(i, j, O);
            break;
          default:
            throw Error(r(161));
        }
      } catch (N) {
        et(i, i.return, N);
      }
      i.flags &= -3;
    }
    a & 4096 && (i.flags &= -4097);
  }
  function Lk(i, a, s) {
    (ce = i), Hb(i);
  }
  function Hb(i, a, s) {
    for (var d = (i.mode & 1) !== 0; ce !== null; ) {
      var y = ce,
        m = y.child;
      if (y.tag === 22 && d) {
        var O = y.memoizedState !== null || al;
        if (!O) {
          var j = y.alternate,
            N = (j !== null && j.memoizedState !== null) || At;
          j = al;
          var H = At;
          if (((al = O), (At = N) && !H))
            for (ce = y; ce !== null; )
              (O = ce),
                (N = O.child),
                O.tag === 22 && O.memoizedState !== null
                  ? Vb(y)
                  : N !== null
                  ? ((N.return = O), (ce = N))
                  : Vb(y);
          for (; m !== null; ) (ce = m), Hb(m), (m = m.sibling);
          (ce = y), (al = j), (At = H);
        }
        Gb(i);
      } else
        y.subtreeFlags & 8772 && m !== null
          ? ((m.return = y), (ce = m))
          : Gb(i);
    }
  }
  function Gb(i) {
    for (; ce !== null; ) {
      var a = ce;
      if (a.flags & 8772) {
        var s = a.alternate;
        try {
          if (a.flags & 8772)
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                At || ol(5, a);
                break;
              case 1:
                var d = a.stateNode;
                if (a.flags & 4 && !At)
                  if (s === null) d.componentDidMount();
                  else {
                    var y =
                      a.elementType === a.type
                        ? s.memoizedProps
                        : dr(a.type, s.memoizedProps);
                    d.componentDidUpdate(
                      y,
                      s.memoizedState,
                      d.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var m = a.updateQueue;
                m !== null && K0(a, m, d);
                break;
              case 3:
                var O = a.updateQueue;
                if (O !== null) {
                  if (((s = null), a.child !== null))
                    switch (a.child.tag) {
                      case 5:
                        s = a.child.stateNode;
                        break;
                      case 1:
                        s = a.child.stateNode;
                    }
                  K0(a, O, s);
                }
                break;
              case 5:
                var j = a.stateNode;
                if (s === null && a.flags & 4) {
                  s = j;
                  var N = a.memoizedProps;
                  switch (a.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && s.focus();
                      break;
                    case "img":
                      N.src && (s.src = N.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (a.memoizedState === null) {
                  var H = a.alternate;
                  if (H !== null) {
                    var te = H.memoizedState;
                    if (te !== null) {
                      var ne = te.dehydrated;
                      ne !== null && Na(ne);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          At || (a.flags & 512 && Lf(a));
        } catch (ee) {
          et(a, a.return, ee);
        }
      }
      if (a === i) {
        ce = null;
        break;
      }
      if (((s = a.sibling), s !== null)) {
        (s.return = a.return), (ce = s);
        break;
      }
      ce = a.return;
    }
  }
  function Kb(i) {
    for (; ce !== null; ) {
      var a = ce;
      if (a === i) {
        ce = null;
        break;
      }
      var s = a.sibling;
      if (s !== null) {
        (s.return = a.return), (ce = s);
        break;
      }
      ce = a.return;
    }
  }
  function Vb(i) {
    for (; ce !== null; ) {
      var a = ce;
      try {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            var s = a.return;
            try {
              ol(4, a);
            } catch (N) {
              et(a, s, N);
            }
            break;
          case 1:
            var d = a.stateNode;
            if (typeof d.componentDidMount == "function") {
              var y = a.return;
              try {
                d.componentDidMount();
              } catch (N) {
                et(a, y, N);
              }
            }
            var m = a.return;
            try {
              Lf(a);
            } catch (N) {
              et(a, m, N);
            }
            break;
          case 5:
            var O = a.return;
            try {
              Lf(a);
            } catch (N) {
              et(a, O, N);
            }
        }
      } catch (N) {
        et(a, a.return, N);
      }
      if (a === i) {
        ce = null;
        break;
      }
      var j = a.sibling;
      if (j !== null) {
        (j.return = a.return), (ce = j);
        break;
      }
      ce = a.return;
    }
  }
  var qk = Math.ceil,
    ul = C.ReactCurrentDispatcher,
    Ff = C.ReactCurrentOwner,
    Jt = C.ReactCurrentBatchConfig,
    ke = 0,
    ht = null,
    it = null,
    wt = 0,
    Ht = 0,
    Ri = cn(0),
    lt = 0,
    no = null,
    Fn = 0,
    ll = 0,
    zf = 0,
    io = null,
    Dt = null,
    Uf = 0,
    $i = 1 / 0,
    Wr = null,
    sl = !1,
    Wf = null,
    yn = null,
    cl = !1,
    mn = null,
    fl = 0,
    ao = 0,
    Hf = null,
    dl = -1,
    pl = 0;
  function kt() {
    return ke & 6 ? rt() : dl !== -1 ? dl : (dl = rt());
  }
  function gn(i) {
    return i.mode & 1
      ? ke & 2 && wt !== 0
        ? wt & -wt
        : Sk.transition !== null
        ? (pl === 0 && (pl = Fg()), pl)
        : ((i = Le),
          i !== 0 || ((i = window.event), (i = i === void 0 ? 16 : Yg(i.type))),
          i)
      : 1;
  }
  function vr(i, a, s, d) {
    if (50 < ao) throw ((ao = 0), (Hf = null), Error(r(185)));
    Ca(i, s, d),
      (!(ke & 2) || i !== ht) &&
        (i === ht && (!(ke & 2) && (ll |= s), lt === 4 && bn(i, wt)),
        Lt(i, d),
        s === 1 &&
          ke === 0 &&
          !(a.mode & 1) &&
          (($i = rt() + 500), Fu && dn()));
  }
  function Lt(i, a) {
    var s = i.callbackNode;
    SC(i, a);
    var d = Su(i, i === ht ? wt : 0);
    if (d === 0)
      s !== null && Lg(s), (i.callbackNode = null), (i.callbackPriority = 0);
    else if (((a = d & -d), i.callbackPriority !== a)) {
      if ((s != null && Lg(s), a === 1))
        i.tag === 0 ? xk(Yb.bind(null, i)) : R0(Yb.bind(null, i)),
          mk(function () {
            !(ke & 6) && dn();
          }),
          (s = null);
      else {
        switch (zg(d)) {
          case 1:
            s = _c;
            break;
          case 4:
            s = qg;
            break;
          case 16:
            s = gu;
            break;
          case 536870912:
            s = Bg;
            break;
          default:
            s = gu;
        }
        s = i1(s, Xb.bind(null, i));
      }
      (i.callbackPriority = a), (i.callbackNode = s);
    }
  }
  function Xb(i, a) {
    if (((dl = -1), (pl = 0), ke & 6)) throw Error(r(327));
    var s = i.callbackNode;
    if (Di() && i.callbackNode !== s) return null;
    var d = Su(i, i === ht ? wt : 0);
    if (d === 0) return null;
    if (d & 30 || d & i.expiredLanes || a) a = hl(i, d);
    else {
      a = d;
      var y = ke;
      ke |= 2;
      var m = Zb();
      (ht !== i || wt !== a) && ((Wr = null), ($i = rt() + 500), Un(i, a));
      do
        try {
          zk();
          break;
        } catch (j) {
          Qb(i, j);
        }
      while (!0);
      sf(),
        (ul.current = m),
        (ke = y),
        it !== null ? (a = 0) : ((ht = null), (wt = 0), (a = lt));
    }
    if (a !== 0) {
      if (
        (a === 2 && ((y = Oc(i)), y !== 0 && ((d = y), (a = Gf(i, y)))),
        a === 1)
      )
        throw ((s = no), Un(i, 0), bn(i, d), Lt(i, rt()), s);
      if (a === 6) bn(i, d);
      else {
        if (
          ((y = i.current.alternate),
          !(d & 30) &&
            !Bk(y) &&
            ((a = hl(i, d)),
            a === 2 && ((m = Oc(i)), m !== 0 && ((d = m), (a = Gf(i, m)))),
            a === 1))
        )
          throw ((s = no), Un(i, 0), bn(i, d), Lt(i, rt()), s);
        switch (((i.finishedWork = y), (i.finishedLanes = d), a)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Wn(i, Dt, Wr);
            break;
          case 3:
            if (
              (bn(i, d),
              (d & 130023424) === d && ((a = Uf + 500 - rt()), 10 < a))
            ) {
              if (Su(i, 0) !== 0) break;
              if (((y = i.suspendedLanes), (y & d) !== d)) {
                kt(), (i.pingedLanes |= i.suspendedLanes & y);
                break;
              }
              i.timeoutHandle = Qc(Wn.bind(null, i, Dt, Wr), a);
              break;
            }
            Wn(i, Dt, Wr);
            break;
          case 4:
            if ((bn(i, d), (d & 4194240) === d)) break;
            for (a = i.eventTimes, y = -1; 0 < d; ) {
              var O = 31 - sr(d);
              (m = 1 << O), (O = a[O]), O > y && (y = O), (d &= ~m);
            }
            if (
              ((d = y),
              (d = rt() - d),
              (d =
                (120 > d
                  ? 120
                  : 480 > d
                  ? 480
                  : 1080 > d
                  ? 1080
                  : 1920 > d
                  ? 1920
                  : 3e3 > d
                  ? 3e3
                  : 4320 > d
                  ? 4320
                  : 1960 * qk(d / 1960)) - d),
              10 < d)
            ) {
              i.timeoutHandle = Qc(Wn.bind(null, i, Dt, Wr), d);
              break;
            }
            Wn(i, Dt, Wr);
            break;
          case 5:
            Wn(i, Dt, Wr);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Lt(i, rt()), i.callbackNode === s ? Xb.bind(null, i) : null;
  }
  function Gf(i, a) {
    var s = io;
    return (
      i.current.memoizedState.isDehydrated && (Un(i, a).flags |= 256),
      (i = hl(i, a)),
      i !== 2 && ((a = Dt), (Dt = s), a !== null && Kf(a)),
      i
    );
  }
  function Kf(i) {
    Dt === null ? (Dt = i) : Dt.push.apply(Dt, i);
  }
  function Bk(i) {
    for (var a = i; ; ) {
      if (a.flags & 16384) {
        var s = a.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var d = 0; d < s.length; d++) {
            var y = s[d],
              m = y.getSnapshot;
            y = y.value;
            try {
              if (!cr(m(), y)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((s = a.child), a.subtreeFlags & 16384 && s !== null))
        (s.return = a), (a = s);
      else {
        if (a === i) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === i) return !0;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    return !0;
  }
  function bn(i, a) {
    for (
      a &= ~zf,
        a &= ~ll,
        i.suspendedLanes |= a,
        i.pingedLanes &= ~a,
        i = i.expirationTimes;
      0 < a;

    ) {
      var s = 31 - sr(a),
        d = 1 << s;
      (i[s] = -1), (a &= ~d);
    }
  }
  function Yb(i) {
    if (ke & 6) throw Error(r(327));
    Di();
    var a = Su(i, 0);
    if (!(a & 1)) return Lt(i, rt()), null;
    var s = hl(i, a);
    if (i.tag !== 0 && s === 2) {
      var d = Oc(i);
      d !== 0 && ((a = d), (s = Gf(i, d)));
    }
    if (s === 1) throw ((s = no), Un(i, 0), bn(i, a), Lt(i, rt()), s);
    if (s === 6) throw Error(r(345));
    return (
      (i.finishedWork = i.current.alternate),
      (i.finishedLanes = a),
      Wn(i, Dt, Wr),
      Lt(i, rt()),
      null
    );
  }
  function Vf(i, a) {
    var s = ke;
    ke |= 1;
    try {
      return i(a);
    } finally {
      (ke = s), ke === 0 && (($i = rt() + 500), Fu && dn());
    }
  }
  function zn(i) {
    mn !== null && mn.tag === 0 && !(ke & 6) && Di();
    var a = ke;
    ke |= 1;
    var s = Jt.transition,
      d = Le;
    try {
      if (((Jt.transition = null), (Le = 1), i)) return i();
    } finally {
      (Le = d), (Jt.transition = s), (ke = a), !(ke & 6) && dn();
    }
  }
  function Xf() {
    (Ht = Ri.current), Ge(Ri);
  }
  function Un(i, a) {
    (i.finishedWork = null), (i.finishedLanes = 0);
    var s = i.timeoutHandle;
    if ((s !== -1 && ((i.timeoutHandle = -1), yk(s)), it !== null))
      for (s = it.return; s !== null; ) {
        var d = s;
        switch ((nf(d), d.tag)) {
          case 1:
            (d = d.type.childContextTypes), d != null && qu();
            break;
          case 3:
            Mi(), Ge(Nt), Ge(_t), mf();
            break;
          case 5:
            vf(d);
            break;
          case 4:
            Mi();
            break;
          case 13:
            Ge(Ye);
            break;
          case 19:
            Ge(Ye);
            break;
          case 10:
            cf(d.type._context);
            break;
          case 22:
          case 23:
            Xf();
        }
        s = s.return;
      }
    if (
      ((ht = i),
      (it = i = wn(i.current, null)),
      (wt = Ht = a),
      (lt = 0),
      (no = null),
      (zf = ll = Fn = 0),
      (Dt = io = null),
      Ln !== null)
    ) {
      for (a = 0; a < Ln.length; a++)
        if (((s = Ln[a]), (d = s.interleaved), d !== null)) {
          s.interleaved = null;
          var y = d.next,
            m = s.pending;
          if (m !== null) {
            var O = m.next;
            (m.next = y), (d.next = O);
          }
          s.pending = d;
        }
      Ln = null;
    }
    return i;
  }
  function Qb(i, a) {
    do {
      var s = it;
      try {
        if ((sf(), (Qu.current = tl), Zu)) {
          for (var d = Qe.memoizedState; d !== null; ) {
            var y = d.queue;
            y !== null && (y.pending = null), (d = d.next);
          }
          Zu = !1;
        }
        if (
          ((Bn = 0),
          (pt = ut = Qe = null),
          (Qa = !1),
          (Za = 0),
          (Ff.current = null),
          s === null || s.return === null)
        ) {
          (lt = 1), (no = a), (it = null);
          break;
        }
        e: {
          var m = i,
            O = s.return,
            j = s,
            N = a;
          if (
            ((a = wt),
            (j.flags |= 32768),
            N !== null && typeof N == "object" && typeof N.then == "function")
          ) {
            var H = N,
              te = j,
              ne = te.tag;
            if (!(te.mode & 1) && (ne === 0 || ne === 11 || ne === 15)) {
              var ee = te.alternate;
              ee
                ? ((te.updateQueue = ee.updateQueue),
                  (te.memoizedState = ee.memoizedState),
                  (te.lanes = ee.lanes))
                : ((te.updateQueue = null), (te.memoizedState = null));
            }
            var le = Sb(O);
            if (le !== null) {
              (le.flags &= -257),
                _b(le, O, j, m, a),
                le.mode & 1 && xb(m, H, a),
                (a = le),
                (N = H);
              var de = a.updateQueue;
              if (de === null) {
                var he = new Set();
                he.add(N), (a.updateQueue = he);
              } else de.add(N);
              break e;
            } else {
              if (!(a & 1)) {
                xb(m, H, a), Yf();
                break e;
              }
              N = Error(r(426));
            }
          } else if (Ve && j.mode & 1) {
            var nt = Sb(O);
            if (nt !== null) {
              !(nt.flags & 65536) && (nt.flags |= 256),
                _b(nt, O, j, m, a),
                uf(Ii(N, j));
              break e;
            }
          }
          (m = N = Ii(N, j)),
            lt !== 4 && (lt = 2),
            io === null ? (io = [m]) : io.push(m),
            (m = O);
          do {
            switch (m.tag) {
              case 3:
                (m.flags |= 65536), (a &= -a), (m.lanes |= a);
                var q = bb(m, N, a);
                G0(m, q);
                break e;
              case 1:
                j = N;
                var $ = m.type,
                  U = m.stateNode;
                if (
                  !(m.flags & 128) &&
                  (typeof $.getDerivedStateFromError == "function" ||
                    (U !== null &&
                      typeof U.componentDidCatch == "function" &&
                      (yn === null || !yn.has(U))))
                ) {
                  (m.flags |= 65536), (a &= -a), (m.lanes |= a);
                  var ae = wb(m, j, a);
                  G0(m, ae);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        e1(s);
      } catch (ve) {
        (a = ve), it === s && s !== null && (it = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zb() {
    var i = ul.current;
    return (ul.current = tl), i === null ? tl : i;
  }
  function Yf() {
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4),
      ht === null || (!(Fn & 268435455) && !(ll & 268435455)) || bn(ht, wt);
  }
  function hl(i, a) {
    var s = ke;
    ke |= 2;
    var d = Zb();
    (ht !== i || wt !== a) && ((Wr = null), Un(i, a));
    do
      try {
        Fk();
        break;
      } catch (y) {
        Qb(i, y);
      }
    while (!0);
    if ((sf(), (ke = s), (ul.current = d), it !== null)) throw Error(r(261));
    return (ht = null), (wt = 0), lt;
  }
  function Fk() {
    for (; it !== null; ) Jb(it);
  }
  function zk() {
    for (; it !== null && !pC(); ) Jb(it);
  }
  function Jb(i) {
    var a = n1(i.alternate, i, Ht);
    (i.memoizedProps = i.pendingProps),
      a === null ? e1(i) : (it = a),
      (Ff.current = null);
  }
  function e1(i) {
    var a = i;
    do {
      var s = a.alternate;
      if (((i = a.return), a.flags & 32768)) {
        if (((s = Rk(s, a)), s !== null)) {
          (s.flags &= 32767), (it = s);
          return;
        }
        if (i !== null)
          (i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null);
        else {
          (lt = 6), (it = null);
          return;
        }
      } else if (((s = Nk(s, a, Ht)), s !== null)) {
        it = s;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        it = a;
        return;
      }
      it = a = i;
    } while (a !== null);
    lt === 0 && (lt = 5);
  }
  function Wn(i, a, s) {
    var d = Le,
      y = Jt.transition;
    try {
      (Jt.transition = null), (Le = 1), Uk(i, a, s, d);
    } finally {
      (Jt.transition = y), (Le = d);
    }
    return null;
  }
  function Uk(i, a, s, d) {
    do Di();
    while (mn !== null);
    if (ke & 6) throw Error(r(327));
    s = i.finishedWork;
    var y = i.finishedLanes;
    if (s === null) return null;
    if (((i.finishedWork = null), (i.finishedLanes = 0), s === i.current))
      throw Error(r(177));
    (i.callbackNode = null), (i.callbackPriority = 0);
    var m = s.lanes | s.childLanes;
    if (
      (_C(i, m),
      i === ht && ((it = ht = null), (wt = 0)),
      (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
        cl ||
        ((cl = !0),
        i1(gu, function () {
          return Di(), null;
        })),
      (m = (s.flags & 15990) !== 0),
      s.subtreeFlags & 15990 || m)
    ) {
      (m = Jt.transition), (Jt.transition = null);
      var O = Le;
      Le = 1;
      var j = ke;
      (ke |= 4),
        (Ff.current = null),
        Dk(i, s),
        Wb(s, i),
        sk(Xc),
        (Pu = !!Vc),
        (Xc = Vc = null),
        (i.current = s),
        Lk(s),
        hC(),
        (ke = j),
        (Le = O),
        (Jt.transition = m);
    } else i.current = s;
    if (
      (cl && ((cl = !1), (mn = i), (fl = y)),
      (m = i.pendingLanes),
      m === 0 && (yn = null),
      mC(s.stateNode),
      Lt(i, rt()),
      a !== null)
    )
      for (d = i.onRecoverableError, s = 0; s < a.length; s++)
        (y = a[s]), d(y.value, { componentStack: y.stack, digest: y.digest });
    if (sl) throw ((sl = !1), (i = Wf), (Wf = null), i);
    return (
      fl & 1 && i.tag !== 0 && Di(),
      (m = i.pendingLanes),
      m & 1 ? (i === Hf ? ao++ : ((ao = 0), (Hf = i))) : (ao = 0),
      dn(),
      null
    );
  }
  function Di() {
    if (mn !== null) {
      var i = zg(fl),
        a = Jt.transition,
        s = Le;
      try {
        if (((Jt.transition = null), (Le = 16 > i ? 16 : i), mn === null))
          var d = !1;
        else {
          if (((i = mn), (mn = null), (fl = 0), ke & 6)) throw Error(r(331));
          var y = ke;
          for (ke |= 4, ce = i.current; ce !== null; ) {
            var m = ce,
              O = m.child;
            if (ce.flags & 16) {
              var j = m.deletions;
              if (j !== null) {
                for (var N = 0; N < j.length; N++) {
                  var H = j[N];
                  for (ce = H; ce !== null; ) {
                    var te = ce;
                    switch (te.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ro(8, te, m);
                    }
                    var ne = te.child;
                    if (ne !== null) (ne.return = te), (ce = ne);
                    else
                      for (; ce !== null; ) {
                        te = ce;
                        var ee = te.sibling,
                          le = te.return;
                        if ((qb(te), te === H)) {
                          ce = null;
                          break;
                        }
                        if (ee !== null) {
                          (ee.return = le), (ce = ee);
                          break;
                        }
                        ce = le;
                      }
                  }
                }
                var de = m.alternate;
                if (de !== null) {
                  var he = de.child;
                  if (he !== null) {
                    de.child = null;
                    do {
                      var nt = he.sibling;
                      (he.sibling = null), (he = nt);
                    } while (he !== null);
                  }
                }
                ce = m;
              }
            }
            if (m.subtreeFlags & 2064 && O !== null) (O.return = m), (ce = O);
            else
              e: for (; ce !== null; ) {
                if (((m = ce), m.flags & 2048))
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(9, m, m.return);
                  }
                var q = m.sibling;
                if (q !== null) {
                  (q.return = m.return), (ce = q);
                  break e;
                }
                ce = m.return;
              }
          }
          var $ = i.current;
          for (ce = $; ce !== null; ) {
            O = ce;
            var U = O.child;
            if (O.subtreeFlags & 2064 && U !== null) (U.return = O), (ce = U);
            else
              e: for (O = $; ce !== null; ) {
                if (((j = ce), j.flags & 2048))
                  try {
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ol(9, j);
                    }
                  } catch (ve) {
                    et(j, j.return, ve);
                  }
                if (j === O) {
                  ce = null;
                  break e;
                }
                var ae = j.sibling;
                if (ae !== null) {
                  (ae.return = j.return), (ce = ae);
                  break e;
                }
                ce = j.return;
              }
          }
          if (
            ((ke = y),
            dn(),
            Pr && typeof Pr.onPostCommitFiberRoot == "function")
          )
            try {
              Pr.onPostCommitFiberRoot(bu, i);
            } catch {}
          d = !0;
        }
        return d;
      } finally {
        (Le = s), (Jt.transition = a);
      }
    }
    return !1;
  }
  function t1(i, a, s) {
    (a = Ii(s, a)),
      (a = bb(i, a, 1)),
      (i = hn(i, a, 1)),
      (a = kt()),
      i !== null && (Ca(i, 1, a), Lt(i, a));
  }
  function et(i, a, s) {
    if (i.tag === 3) t1(i, i, s);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          t1(a, i, s);
          break;
        } else if (a.tag === 1) {
          var d = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof d.componentDidCatch == "function" &&
              (yn === null || !yn.has(d)))
          ) {
            (i = Ii(s, i)),
              (i = wb(a, i, 1)),
              (a = hn(a, i, 1)),
              (i = kt()),
              a !== null && (Ca(a, 1, i), Lt(a, i));
            break;
          }
        }
        a = a.return;
      }
  }
  function Wk(i, a, s) {
    var d = i.pingCache;
    d !== null && d.delete(a),
      (a = kt()),
      (i.pingedLanes |= i.suspendedLanes & s),
      ht === i &&
        (wt & s) === s &&
        (lt === 4 || (lt === 3 && (wt & 130023424) === wt && 500 > rt() - Uf)
          ? Un(i, 0)
          : (zf |= s)),
      Lt(i, a);
  }
  function r1(i, a) {
    a === 0 &&
      (i.mode & 1
        ? ((a = xu), (xu <<= 1), !(xu & 130023424) && (xu = 4194304))
        : (a = 1));
    var s = kt();
    (i = Fr(i, a)), i !== null && (Ca(i, a, s), Lt(i, s));
  }
  function Hk(i) {
    var a = i.memoizedState,
      s = 0;
    a !== null && (s = a.retryLane), r1(i, s);
  }
  function Gk(i, a) {
    var s = 0;
    switch (i.tag) {
      case 13:
        var d = i.stateNode,
          y = i.memoizedState;
        y !== null && (s = y.retryLane);
        break;
      case 19:
        d = i.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    d !== null && d.delete(a), r1(i, s);
  }
  var n1;
  n1 = function (i, a, s) {
    if (i !== null)
      if (i.memoizedProps !== a.pendingProps || Nt.current) $t = !0;
      else {
        if (!(i.lanes & s) && !(a.flags & 128)) return ($t = !1), Ik(i, a, s);
        $t = !!(i.flags & 131072);
      }
    else ($t = !1), Ve && a.flags & 1048576 && $0(a, Uu, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 2:
        var d = a.type;
        il(i, a), (i = a.pendingProps);
        var y = Pi(a, _t.current);
        ji(a, s), (y = wf(null, a, d, i, y, s));
        var m = xf();
        return (
          (a.flags |= 1),
          typeof y == "object" &&
          y !== null &&
          typeof y.render == "function" &&
          y.$$typeof === void 0
            ? ((a.tag = 1),
              (a.memoizedState = null),
              (a.updateQueue = null),
              Rt(d) ? ((m = !0), Bu(a)) : (m = !1),
              (a.memoizedState =
                y.state !== null && y.state !== void 0 ? y.state : null),
              pf(a),
              (y.updater = rl),
              (a.stateNode = y),
              (y._reactInternals = a),
              Ef(a, d, i, s),
              (a = jf(null, a, d, !0, m, s)))
            : ((a.tag = 0), Ve && m && rf(a), Ct(null, a, y, s), (a = a.child)),
          a
        );
      case 16:
        d = a.elementType;
        e: {
          switch (
            (il(i, a),
            (i = a.pendingProps),
            (y = d._init),
            (d = y(d._payload)),
            (a.type = d),
            (y = a.tag = Vk(d)),
            (i = dr(d, i)),
            y)
          ) {
            case 0:
              a = kf(null, a, d, i, s);
              break e;
            case 1:
              a = Cb(null, a, d, i, s);
              break e;
            case 11:
              a = Ob(null, a, d, i, s);
              break e;
            case 14:
              a = Pb(null, a, d, dr(d.type, i), s);
              break e;
          }
          throw Error(r(306, d, ""));
        }
        return a;
      case 0:
        return (
          (d = a.type),
          (y = a.pendingProps),
          (y = a.elementType === d ? y : dr(d, y)),
          kf(i, a, d, y, s)
        );
      case 1:
        return (
          (d = a.type),
          (y = a.pendingProps),
          (y = a.elementType === d ? y : dr(d, y)),
          Cb(i, a, d, y, s)
        );
      case 3:
        e: {
          if ((kb(a), i === null)) throw Error(r(387));
          (d = a.pendingProps),
            (m = a.memoizedState),
            (y = m.element),
            H0(i, a),
            Xu(a, d, null, s);
          var O = a.memoizedState;
          if (((d = O.element), m.isDehydrated))
            if (
              ((m = {
                element: d,
                isDehydrated: !1,
                cache: O.cache,
                pendingSuspenseBoundaries: O.pendingSuspenseBoundaries,
                transitions: O.transitions,
              }),
              (a.updateQueue.baseState = m),
              (a.memoizedState = m),
              a.flags & 256)
            ) {
              (y = Ii(Error(r(423)), a)), (a = jb(i, a, d, s, y));
              break e;
            } else if (d !== y) {
              (y = Ii(Error(r(424)), a)), (a = jb(i, a, d, s, y));
              break e;
            } else
              for (
                Wt = sn(a.stateNode.containerInfo.firstChild),
                  Ut = a,
                  Ve = !0,
                  fr = null,
                  s = U0(a, null, d, s),
                  a.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((Ti(), d === y)) {
              a = Ur(i, a, s);
              break e;
            }
            Ct(i, a, d, s);
          }
          a = a.child;
        }
        return a;
      case 5:
        return (
          V0(a),
          i === null && of(a),
          (d = a.type),
          (y = a.pendingProps),
          (m = i !== null ? i.memoizedProps : null),
          (O = y.children),
          Yc(d, y) ? (O = null) : m !== null && Yc(d, m) && (a.flags |= 32),
          Tb(i, a),
          Ct(i, a, O, s),
          a.child
        );
      case 6:
        return i === null && of(a), null;
      case 13:
        return Mb(i, a, s);
      case 4:
        return (
          hf(a, a.stateNode.containerInfo),
          (d = a.pendingProps),
          i === null ? (a.child = Ci(a, null, d, s)) : Ct(i, a, d, s),
          a.child
        );
      case 11:
        return (
          (d = a.type),
          (y = a.pendingProps),
          (y = a.elementType === d ? y : dr(d, y)),
          Ob(i, a, d, y, s)
        );
      case 7:
        return Ct(i, a, a.pendingProps, s), a.child;
      case 8:
        return Ct(i, a, a.pendingProps.children, s), a.child;
      case 12:
        return Ct(i, a, a.pendingProps.children, s), a.child;
      case 10:
        e: {
          if (
            ((d = a.type._context),
            (y = a.pendingProps),
            (m = a.memoizedProps),
            (O = y.value),
            ze(Gu, d._currentValue),
            (d._currentValue = O),
            m !== null)
          )
            if (cr(m.value, O)) {
              if (m.children === y.children && !Nt.current) {
                a = Ur(i, a, s);
                break e;
              }
            } else
              for (m = a.child, m !== null && (m.return = a); m !== null; ) {
                var j = m.dependencies;
                if (j !== null) {
                  O = m.child;
                  for (var N = j.firstContext; N !== null; ) {
                    if (N.context === d) {
                      if (m.tag === 1) {
                        (N = zr(-1, s & -s)), (N.tag = 2);
                        var H = m.updateQueue;
                        if (H !== null) {
                          H = H.shared;
                          var te = H.pending;
                          te === null
                            ? (N.next = N)
                            : ((N.next = te.next), (te.next = N)),
                            (H.pending = N);
                        }
                      }
                      (m.lanes |= s),
                        (N = m.alternate),
                        N !== null && (N.lanes |= s),
                        ff(m.return, s, a),
                        (j.lanes |= s);
                      break;
                    }
                    N = N.next;
                  }
                } else if (m.tag === 10) O = m.type === a.type ? null : m.child;
                else if (m.tag === 18) {
                  if (((O = m.return), O === null)) throw Error(r(341));
                  (O.lanes |= s),
                    (j = O.alternate),
                    j !== null && (j.lanes |= s),
                    ff(O, s, a),
                    (O = m.sibling);
                } else O = m.child;
                if (O !== null) O.return = m;
                else
                  for (O = m; O !== null; ) {
                    if (O === a) {
                      O = null;
                      break;
                    }
                    if (((m = O.sibling), m !== null)) {
                      (m.return = O.return), (O = m);
                      break;
                    }
                    O = O.return;
                  }
                m = O;
              }
          Ct(i, a, y.children, s), (a = a.child);
        }
        return a;
      case 9:
        return (
          (y = a.type),
          (d = a.pendingProps.children),
          ji(a, s),
          (y = Qt(y)),
          (d = d(y)),
          (a.flags |= 1),
          Ct(i, a, d, s),
          a.child
        );
      case 14:
        return (
          (d = a.type),
          (y = dr(d, a.pendingProps)),
          (y = dr(d.type, y)),
          Pb(i, a, d, y, s)
        );
      case 15:
        return Ab(i, a, a.type, a.pendingProps, s);
      case 17:
        return (
          (d = a.type),
          (y = a.pendingProps),
          (y = a.elementType === d ? y : dr(d, y)),
          il(i, a),
          (a.tag = 1),
          Rt(d) ? ((i = !0), Bu(a)) : (i = !1),
          ji(a, s),
          mb(a, d, y),
          Ef(a, d, y, s),
          jf(null, a, d, !0, i, s)
        );
      case 19:
        return Nb(i, a, s);
      case 22:
        return Eb(i, a, s);
    }
    throw Error(r(156, a.tag));
  };
  function i1(i, a) {
    return Dg(i, a);
  }
  function Kk(i, a, s, d) {
    (this.tag = i),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = a),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = d),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function er(i, a, s, d) {
    return new Kk(i, a, s, d);
  }
  function Qf(i) {
    return (i = i.prototype), !(!i || !i.isReactComponent);
  }
  function Vk(i) {
    if (typeof i == "function") return Qf(i) ? 1 : 0;
    if (i != null) {
      if (((i = i.$$typeof), i === B)) return 11;
      if (i === K) return 14;
    }
    return 2;
  }
  function wn(i, a) {
    var s = i.alternate;
    return (
      s === null
        ? ((s = er(i.tag, a, i.key, i.mode)),
          (s.elementType = i.elementType),
          (s.type = i.type),
          (s.stateNode = i.stateNode),
          (s.alternate = i),
          (i.alternate = s))
        : ((s.pendingProps = a),
          (s.type = i.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = i.flags & 14680064),
      (s.childLanes = i.childLanes),
      (s.lanes = i.lanes),
      (s.child = i.child),
      (s.memoizedProps = i.memoizedProps),
      (s.memoizedState = i.memoizedState),
      (s.updateQueue = i.updateQueue),
      (a = i.dependencies),
      (s.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (s.sibling = i.sibling),
      (s.index = i.index),
      (s.ref = i.ref),
      s
    );
  }
  function vl(i, a, s, d, y, m) {
    var O = 2;
    if (((d = i), typeof i == "function")) Qf(i) && (O = 1);
    else if (typeof i == "string") O = 5;
    else
      e: switch (i) {
        case k:
          return Hn(s.children, y, m, a);
        case I:
          (O = 8), (y |= 8);
          break;
        case D:
          return (
            (i = er(12, s, a, y | 2)), (i.elementType = D), (i.lanes = m), i
          );
        case z:
          return (i = er(13, s, a, y)), (i.elementType = z), (i.lanes = m), i;
        case V:
          return (i = er(19, s, a, y)), (i.elementType = V), (i.lanes = m), i;
        case J:
          return yl(s, y, m, a);
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case G:
                O = 10;
                break e;
              case R:
                O = 9;
                break e;
              case B:
                O = 11;
                break e;
              case K:
                O = 14;
                break e;
              case Z:
                (O = 16), (d = null);
                break e;
            }
          throw Error(r(130, i == null ? i : typeof i, ""));
      }
    return (
      (a = er(O, s, a, y)), (a.elementType = i), (a.type = d), (a.lanes = m), a
    );
  }
  function Hn(i, a, s, d) {
    return (i = er(7, i, d, a)), (i.lanes = s), i;
  }
  function yl(i, a, s, d) {
    return (
      (i = er(22, i, d, a)),
      (i.elementType = J),
      (i.lanes = s),
      (i.stateNode = { isHidden: !1 }),
      i
    );
  }
  function Zf(i, a, s) {
    return (i = er(6, i, null, a)), (i.lanes = s), i;
  }
  function Jf(i, a, s) {
    return (
      (a = er(4, i.children !== null ? i.children : [], i.key, a)),
      (a.lanes = s),
      (a.stateNode = {
        containerInfo: i.containerInfo,
        pendingChildren: null,
        implementation: i.implementation,
      }),
      a
    );
  }
  function Xk(i, a, s, d, y) {
    (this.tag = a),
      (this.containerInfo = i),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Pc(0)),
      (this.expirationTimes = Pc(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Pc(0)),
      (this.identifierPrefix = d),
      (this.onRecoverableError = y),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ed(i, a, s, d, y, m, O, j, N) {
    return (
      (i = new Xk(i, a, s, j, N)),
      a === 1 ? ((a = 1), m === !0 && (a |= 8)) : (a = 0),
      (m = er(3, null, null, a)),
      (i.current = m),
      (m.stateNode = i),
      (m.memoizedState = {
        element: d,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      pf(m),
      i
    );
  }
  function Yk(i, a, s) {
    var d =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P,
      key: d == null ? null : "" + d,
      children: i,
      containerInfo: a,
      implementation: s,
    };
  }
  function a1(i) {
    if (!i) return fn;
    i = i._reactInternals;
    e: {
      if (In(i) !== i || i.tag !== 1) throw Error(r(170));
      var a = i;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break e;
          case 1:
            if (Rt(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(r(171));
    }
    if (i.tag === 1) {
      var s = i.type;
      if (Rt(s)) return I0(i, s, a);
    }
    return a;
  }
  function o1(i, a, s, d, y, m, O, j, N) {
    return (
      (i = ed(s, d, !0, i, y, m, O, j, N)),
      (i.context = a1(null)),
      (s = i.current),
      (d = kt()),
      (y = gn(s)),
      (m = zr(d, y)),
      (m.callback = a ?? null),
      hn(s, m, y),
      (i.current.lanes = y),
      Ca(i, y, d),
      Lt(i, d),
      i
    );
  }
  function ml(i, a, s, d) {
    var y = a.current,
      m = kt(),
      O = gn(y);
    return (
      (s = a1(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = zr(m, O)),
      (a.payload = { element: i }),
      (d = d === void 0 ? null : d),
      d !== null && (a.callback = d),
      (i = hn(y, a, O)),
      i !== null && (vr(i, y, O, m), Vu(i, y, O)),
      O
    );
  }
  function gl(i) {
    if (((i = i.current), !i.child)) return null;
    switch (i.child.tag) {
      case 5:
        return i.child.stateNode;
      default:
        return i.child.stateNode;
    }
  }
  function u1(i, a) {
    if (((i = i.memoizedState), i !== null && i.dehydrated !== null)) {
      var s = i.retryLane;
      i.retryLane = s !== 0 && s < a ? s : a;
    }
  }
  function td(i, a) {
    u1(i, a), (i = i.alternate) && u1(i, a);
  }
  var l1 =
    typeof reportError == "function"
      ? reportError
      : function (i) {
          console.error(i);
        };
  function rd(i) {
    this._internalRoot = i;
  }
  (bl.prototype.render = rd.prototype.render =
    function (i) {
      var a = this._internalRoot;
      if (a === null) throw Error(r(409));
      ml(i, a, null, null);
    }),
    (bl.prototype.unmount = rd.prototype.unmount =
      function () {
        var i = this._internalRoot;
        if (i !== null) {
          this._internalRoot = null;
          var a = i.containerInfo;
          zn(function () {
            ml(null, i, null, null);
          }),
            (a[Dr] = null);
        }
      });
  function bl(i) {
    this._internalRoot = i;
  }
  bl.prototype.unstable_scheduleHydration = function (i) {
    if (i) {
      var a = Hg();
      i = { blockedOn: null, target: i, priority: a };
      for (var s = 0; s < on.length && a !== 0 && a < on[s].priority; s++);
      on.splice(s, 0, i), s === 0 && Vg(i);
    }
  };
  function nd(i) {
    return !(!i || (i.nodeType !== 1 && i.nodeType !== 9 && i.nodeType !== 11));
  }
  function wl(i) {
    return !(
      !i ||
      (i.nodeType !== 1 &&
        i.nodeType !== 9 &&
        i.nodeType !== 11 &&
        (i.nodeType !== 8 || i.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function s1() {}
  function Qk(i, a, s, d, y) {
    if (y) {
      if (typeof d == "function") {
        var m = d;
        d = function () {
          var H = gl(O);
          m.call(H);
        };
      }
      var O = o1(a, d, i, 0, null, !1, !1, "", s1);
      return (
        (i._reactRootContainer = O),
        (i[Dr] = O.current),
        Ua(i.nodeType === 8 ? i.parentNode : i),
        zn(),
        O
      );
    }
    for (; (y = i.lastChild); ) i.removeChild(y);
    if (typeof d == "function") {
      var j = d;
      d = function () {
        var H = gl(N);
        j.call(H);
      };
    }
    var N = ed(i, 0, !1, null, null, !1, !1, "", s1);
    return (
      (i._reactRootContainer = N),
      (i[Dr] = N.current),
      Ua(i.nodeType === 8 ? i.parentNode : i),
      zn(function () {
        ml(a, N, s, d);
      }),
      N
    );
  }
  function xl(i, a, s, d, y) {
    var m = s._reactRootContainer;
    if (m) {
      var O = m;
      if (typeof y == "function") {
        var j = y;
        y = function () {
          var N = gl(O);
          j.call(N);
        };
      }
      ml(a, O, i, y);
    } else O = Qk(s, a, i, y, d);
    return gl(O);
  }
  (Ug = function (i) {
    switch (i.tag) {
      case 3:
        var a = i.stateNode;
        if (a.current.memoizedState.isDehydrated) {
          var s = Ta(a.pendingLanes);
          s !== 0 &&
            (Ac(a, s | 1), Lt(a, rt()), !(ke & 6) && (($i = rt() + 500), dn()));
        }
        break;
      case 13:
        zn(function () {
          var d = Fr(i, 1);
          if (d !== null) {
            var y = kt();
            vr(d, i, 1, y);
          }
        }),
          td(i, 1);
    }
  }),
    (Ec = function (i) {
      if (i.tag === 13) {
        var a = Fr(i, 134217728);
        if (a !== null) {
          var s = kt();
          vr(a, i, 134217728, s);
        }
        td(i, 134217728);
      }
    }),
    (Wg = function (i) {
      if (i.tag === 13) {
        var a = gn(i),
          s = Fr(i, a);
        if (s !== null) {
          var d = kt();
          vr(s, i, a, d);
        }
        td(i, a);
      }
    }),
    (Hg = function () {
      return Le;
    }),
    (Gg = function (i, a) {
      var s = Le;
      try {
        return (Le = i), a();
      } finally {
        Le = s;
      }
    }),
    (bc = function (i, a, s) {
      switch (a) {
        case "input":
          if ((dt(i, s), (a = s.name), s.type === "radio" && a != null)) {
            for (s = i; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                "input[name=" + JSON.stringify("" + a) + '][type="radio"]'
              ),
                a = 0;
              a < s.length;
              a++
            ) {
              var d = s[a];
              if (d !== i && d.form === i.form) {
                var y = Lu(d);
                if (!y) throw Error(r(90));
                re(d), dt(d, y);
              }
            }
          }
          break;
        case "textarea":
          xa(i, s);
          break;
        case "select":
          (a = s.value), a != null && It(i, !!s.multiple, a, !1);
      }
    }),
    (kg = Vf),
    (jg = zn);
  var Zk = { usingClientEntryPoint: !1, Events: [Ga, _i, Lu, Tg, Cg, Vf] },
    oo = {
      findFiberByHostInstance: Nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Jk = {
      bundleType: oo.bundleType,
      version: oo.version,
      rendererPackageName: oo.rendererPackageName,
      rendererConfig: oo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: C.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (i) {
        return (i = Rg(i)), i === null ? null : i.stateNode;
      },
      findFiberByHostInstance: oo.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sl.isDisabled && Sl.supportsFiber)
      try {
        (bu = Sl.inject(Jk)), (Pr = Sl);
      } catch {}
  }
  return (
    (qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zk),
    (qt.createPortal = function (i, a) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!nd(a)) throw Error(r(200));
      return Yk(i, a, null, s);
    }),
    (qt.createRoot = function (i, a) {
      if (!nd(i)) throw Error(r(299));
      var s = !1,
        d = "",
        y = l1;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (d = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError)),
        (a = ed(i, 1, !1, null, null, s, !1, d, y)),
        (i[Dr] = a.current),
        Ua(i.nodeType === 8 ? i.parentNode : i),
        new rd(a)
      );
    }),
    (qt.findDOMNode = function (i) {
      if (i == null) return null;
      if (i.nodeType === 1) return i;
      var a = i._reactInternals;
      if (a === void 0)
        throw typeof i.render == "function"
          ? Error(r(188))
          : ((i = Object.keys(i).join(",")), Error(r(268, i)));
      return (i = Rg(a)), (i = i === null ? null : i.stateNode), i;
    }),
    (qt.flushSync = function (i) {
      return zn(i);
    }),
    (qt.hydrate = function (i, a, s) {
      if (!wl(a)) throw Error(r(200));
      return xl(null, i, a, !0, s);
    }),
    (qt.hydrateRoot = function (i, a, s) {
      if (!nd(i)) throw Error(r(405));
      var d = (s != null && s.hydratedSources) || null,
        y = !1,
        m = "",
        O = l1;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (y = !0),
          s.identifierPrefix !== void 0 && (m = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (O = s.onRecoverableError)),
        (a = o1(a, null, i, 1, s ?? null, y, !1, m, O)),
        (i[Dr] = a.current),
        Ua(i),
        d)
      )
        for (i = 0; i < d.length; i++)
          (s = d[i]),
            (y = s._getVersion),
            (y = y(s._source)),
            a.mutableSourceEagerHydrationData == null
              ? (a.mutableSourceEagerHydrationData = [s, y])
              : a.mutableSourceEagerHydrationData.push(s, y);
      return new bl(a);
    }),
    (qt.render = function (i, a, s) {
      if (!wl(a)) throw Error(r(200));
      return xl(null, i, a, !1, s);
    }),
    (qt.unmountComponentAtNode = function (i) {
      if (!wl(i)) throw Error(r(40));
      return i._reactRootContainer
        ? (zn(function () {
            xl(null, null, i, !1, function () {
              (i._reactRootContainer = null), (i[Dr] = null);
            });
          }),
          !0)
        : !1;
    }),
    (qt.unstable_batchedUpdates = Vf),
    (qt.unstable_renderSubtreeIntoContainer = function (i, a, s, d) {
      if (!wl(s)) throw Error(r(200));
      if (i == null || i._reactInternals === void 0) throw Error(r(38));
      return xl(i, a, s, !1, d);
    }),
    (qt.version = "18.3.1-next-f1338f8080-20240426"),
    qt
  );
}
var m1;
function sj() {
  if (m1) return od.exports;
  m1 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (od.exports = lj()), od.exports;
}
var g1;
function cj() {
  if (g1) return Ol;
  g1 = 1;
  var e = sj();
  return (Ol.createRoot = e.createRoot), (Ol.hydrateRoot = e.hydrateRoot), Ol;
}
var fj = cj();
function eA(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = eA(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function De() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = eA(e)) && (n && (n += " "), (n += t));
  return n;
}
var sd, b1;
function Ft() {
  if (b1) return sd;
  b1 = 1;
  var e = Array.isArray;
  return (sd = e), sd;
}
var cd, w1;
function tA() {
  if (w1) return cd;
  w1 = 1;
  var e = typeof _l == "object" && _l && _l.Object === Object && _l;
  return (cd = e), cd;
}
var fd, x1;
function $r() {
  if (x1) return fd;
  x1 = 1;
  var e = tA(),
    t = typeof self == "object" && self && self.Object === Object && self,
    r = e || t || Function("return this")();
  return (fd = r), fd;
}
var dd, S1;
function ou() {
  if (S1) return dd;
  S1 = 1;
  var e = $r(),
    t = e.Symbol;
  return (dd = t), dd;
}
var pd, _1;
function dj() {
  if (_1) return pd;
  _1 = 1;
  var e = ou(),
    t = Object.prototype,
    r = t.hasOwnProperty,
    n = t.toString,
    o = e ? e.toStringTag : void 0;
  function u(l) {
    var c = r.call(l, o),
      f = l[o];
    try {
      l[o] = void 0;
      var p = !0;
    } catch {}
    var v = n.call(l);
    return p && (c ? (l[o] = f) : delete l[o]), v;
  }
  return (pd = u), pd;
}
var hd, O1;
function pj() {
  if (O1) return hd;
  O1 = 1;
  var e = Object.prototype,
    t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return (hd = r), hd;
}
var vd, P1;
function Jr() {
  if (P1) return vd;
  P1 = 1;
  var e = ou(),
    t = dj(),
    r = pj(),
    n = "[object Null]",
    o = "[object Undefined]",
    u = e ? e.toStringTag : void 0;
  function l(c) {
    return c == null
      ? c === void 0
        ? o
        : n
      : u && u in Object(c)
      ? t(c)
      : r(c);
  }
  return (vd = l), vd;
}
var yd, A1;
function en() {
  if (A1) return yd;
  A1 = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return (yd = e), yd;
}
var md, E1;
function va() {
  if (E1) return md;
  E1 = 1;
  var e = Jr(),
    t = en(),
    r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || (t(o) && e(o) == r);
  }
  return (md = n), md;
}
var gd, T1;
function Pm() {
  if (T1) return gd;
  T1 = 1;
  var e = Ft(),
    t = va(),
    r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function o(u, l) {
    if (e(u)) return !1;
    var c = typeof u;
    return c == "number" || c == "symbol" || c == "boolean" || u == null || t(u)
      ? !0
      : n.test(u) || !r.test(u) || (l != null && u in Object(l));
  }
  return (gd = o), gd;
}
var bd, C1;
function Tn() {
  if (C1) return bd;
  C1 = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return (bd = e), bd;
}
var wd, k1;
function Am() {
  if (k1) return wd;
  k1 = 1;
  var e = Jr(),
    t = Tn(),
    r = "[object AsyncFunction]",
    n = "[object Function]",
    o = "[object GeneratorFunction]",
    u = "[object Proxy]";
  function l(c) {
    if (!t(c)) return !1;
    var f = e(c);
    return f == n || f == o || f == r || f == u;
  }
  return (wd = l), wd;
}
var xd, j1;
function hj() {
  if (j1) return xd;
  j1 = 1;
  var e = $r(),
    t = e["__core-js_shared__"];
  return (xd = t), xd;
}
var Sd, M1;
function vj() {
  if (M1) return Sd;
  M1 = 1;
  var e = hj(),
    t = (function () {
      var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
  function r(n) {
    return !!t && t in n;
  }
  return (Sd = r), Sd;
}
var _d, I1;
function rA() {
  if (I1) return _d;
  I1 = 1;
  var e = Function.prototype,
    t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {}
      try {
        return n + "";
      } catch {}
    }
    return "";
  }
  return (_d = r), _d;
}
var Od, N1;
function yj() {
  if (N1) return Od;
  N1 = 1;
  var e = Am(),
    t = vj(),
    r = Tn(),
    n = rA(),
    o = /[\\^$.*+?()[\]{}|]/g,
    u = /^\[object .+?Constructor\]$/,
    l = Function.prototype,
    c = Object.prototype,
    f = l.toString,
    p = c.hasOwnProperty,
    v = RegExp(
      "^" +
        f
          .call(p)
          .replace(o, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function h(g) {
    if (!r(g) || t(g)) return !1;
    var w = e(g) ? v : u;
    return w.test(n(g));
  }
  return (Od = h), Od;
}
var Pd, R1;
function mj() {
  if (R1) return Pd;
  R1 = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return (Pd = e), Pd;
}
var Ad, $1;
function si() {
  if ($1) return Ad;
  $1 = 1;
  var e = yj(),
    t = mj();
  function r(n, o) {
    var u = t(n, o);
    return e(u) ? u : void 0;
  }
  return (Ad = r), Ad;
}
var Ed, D1;
function Is() {
  if (D1) return Ed;
  D1 = 1;
  var e = si(),
    t = e(Object, "create");
  return (Ed = t), Ed;
}
var Td, L1;
function gj() {
  if (L1) return Td;
  L1 = 1;
  var e = Is();
  function t() {
    (this.__data__ = e ? e(null) : {}), (this.size = 0);
  }
  return (Td = t), Td;
}
var Cd, q1;
function bj() {
  if (q1) return Cd;
  q1 = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return (this.size -= r ? 1 : 0), r;
  }
  return (Cd = e), Cd;
}
var kd, B1;
function wj() {
  if (B1) return kd;
  B1 = 1;
  var e = Is(),
    t = "__lodash_hash_undefined__",
    r = Object.prototype,
    n = r.hasOwnProperty;
  function o(u) {
    var l = this.__data__;
    if (e) {
      var c = l[u];
      return c === t ? void 0 : c;
    }
    return n.call(l, u) ? l[u] : void 0;
  }
  return (kd = o), kd;
}
var jd, F1;
function xj() {
  if (F1) return jd;
  F1 = 1;
  var e = Is(),
    t = Object.prototype,
    r = t.hasOwnProperty;
  function n(o) {
    var u = this.__data__;
    return e ? u[o] !== void 0 : r.call(u, o);
  }
  return (jd = n), jd;
}
var Md, z1;
function Sj() {
  if (z1) return Md;
  z1 = 1;
  var e = Is(),
    t = "__lodash_hash_undefined__";
  function r(n, o) {
    var u = this.__data__;
    return (
      (this.size += this.has(n) ? 0 : 1),
      (u[n] = e && o === void 0 ? t : o),
      this
    );
  }
  return (Md = r), Md;
}
var Id, U1;
function _j() {
  if (U1) return Id;
  U1 = 1;
  var e = gj(),
    t = bj(),
    r = wj(),
    n = xj(),
    o = Sj();
  function u(l) {
    var c = -1,
      f = l == null ? 0 : l.length;
    for (this.clear(); ++c < f; ) {
      var p = l[c];
      this.set(p[0], p[1]);
    }
  }
  return (
    (u.prototype.clear = e),
    (u.prototype.delete = t),
    (u.prototype.get = r),
    (u.prototype.has = n),
    (u.prototype.set = o),
    (Id = u),
    Id
  );
}
var Nd, W1;
function Oj() {
  if (W1) return Nd;
  W1 = 1;
  function e() {
    (this.__data__ = []), (this.size = 0);
  }
  return (Nd = e), Nd;
}
var Rd, H1;
function Em() {
  if (H1) return Rd;
  H1 = 1;
  function e(t, r) {
    return t === r || (t !== t && r !== r);
  }
  return (Rd = e), Rd;
}
var $d, G1;
function Ns() {
  if (G1) return $d;
  G1 = 1;
  var e = Em();
  function t(r, n) {
    for (var o = r.length; o--; ) if (e(r[o][0], n)) return o;
    return -1;
  }
  return ($d = t), $d;
}
var Dd, K1;
function Pj() {
  if (K1) return Dd;
  K1 = 1;
  var e = Ns(),
    t = Array.prototype,
    r = t.splice;
  function n(o) {
    var u = this.__data__,
      l = e(u, o);
    if (l < 0) return !1;
    var c = u.length - 1;
    return l == c ? u.pop() : r.call(u, l, 1), --this.size, !0;
  }
  return (Dd = n), Dd;
}
var Ld, V1;
function Aj() {
  if (V1) return Ld;
  V1 = 1;
  var e = Ns();
  function t(r) {
    var n = this.__data__,
      o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return (Ld = t), Ld;
}
var qd, X1;
function Ej() {
  if (X1) return qd;
  X1 = 1;
  var e = Ns();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return (qd = t), qd;
}
var Bd, Y1;
function Tj() {
  if (Y1) return Bd;
  Y1 = 1;
  var e = Ns();
  function t(r, n) {
    var o = this.__data__,
      u = e(o, r);
    return u < 0 ? (++this.size, o.push([r, n])) : (o[u][1] = n), this;
  }
  return (Bd = t), Bd;
}
var Fd, Q1;
function Rs() {
  if (Q1) return Fd;
  Q1 = 1;
  var e = Oj(),
    t = Pj(),
    r = Aj(),
    n = Ej(),
    o = Tj();
  function u(l) {
    var c = -1,
      f = l == null ? 0 : l.length;
    for (this.clear(); ++c < f; ) {
      var p = l[c];
      this.set(p[0], p[1]);
    }
  }
  return (
    (u.prototype.clear = e),
    (u.prototype.delete = t),
    (u.prototype.get = r),
    (u.prototype.has = n),
    (u.prototype.set = o),
    (Fd = u),
    Fd
  );
}
var zd, Z1;
function Tm() {
  if (Z1) return zd;
  Z1 = 1;
  var e = si(),
    t = $r(),
    r = e(t, "Map");
  return (zd = r), zd;
}
var Ud, J1;
function Cj() {
  if (J1) return Ud;
  J1 = 1;
  var e = _j(),
    t = Rs(),
    r = Tm();
  function n() {
    (this.size = 0),
      (this.__data__ = { hash: new e(), map: new (r || t)(), string: new e() });
  }
  return (Ud = n), Ud;
}
var Wd, ew;
function kj() {
  if (ew) return Wd;
  ew = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  return (Wd = e), Wd;
}
var Hd, tw;
function $s() {
  if (tw) return Hd;
  tw = 1;
  var e = kj();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return (Hd = t), Hd;
}
var Gd, rw;
function jj() {
  if (rw) return Gd;
  rw = 1;
  var e = $s();
  function t(r) {
    var n = e(this, r).delete(r);
    return (this.size -= n ? 1 : 0), n;
  }
  return (Gd = t), Gd;
}
var Kd, nw;
function Mj() {
  if (nw) return Kd;
  nw = 1;
  var e = $s();
  function t(r) {
    return e(this, r).get(r);
  }
  return (Kd = t), Kd;
}
var Vd, iw;
function Ij() {
  if (iw) return Vd;
  iw = 1;
  var e = $s();
  function t(r) {
    return e(this, r).has(r);
  }
  return (Vd = t), Vd;
}
var Xd, aw;
function Nj() {
  if (aw) return Xd;
  aw = 1;
  var e = $s();
  function t(r, n) {
    var o = e(this, r),
      u = o.size;
    return o.set(r, n), (this.size += o.size == u ? 0 : 1), this;
  }
  return (Xd = t), Xd;
}
var Yd, ow;
function Cm() {
  if (ow) return Yd;
  ow = 1;
  var e = Cj(),
    t = jj(),
    r = Mj(),
    n = Ij(),
    o = Nj();
  function u(l) {
    var c = -1,
      f = l == null ? 0 : l.length;
    for (this.clear(); ++c < f; ) {
      var p = l[c];
      this.set(p[0], p[1]);
    }
  }
  return (
    (u.prototype.clear = e),
    (u.prototype.delete = t),
    (u.prototype.get = r),
    (u.prototype.has = n),
    (u.prototype.set = o),
    (Yd = u),
    Yd
  );
}
var Qd, uw;
function nA() {
  if (uw) return Qd;
  uw = 1;
  var e = Cm(),
    t = "Expected a function";
  function r(n, o) {
    if (typeof n != "function" || (o != null && typeof o != "function"))
      throw new TypeError(t);
    var u = function () {
      var l = arguments,
        c = o ? o.apply(this, l) : l[0],
        f = u.cache;
      if (f.has(c)) return f.get(c);
      var p = n.apply(this, l);
      return (u.cache = f.set(c, p) || f), p;
    };
    return (u.cache = new (r.Cache || e)()), u;
  }
  return (r.Cache = e), (Qd = r), Qd;
}
var Zd, lw;
function Rj() {
  if (lw) return Zd;
  lw = 1;
  var e = nA(),
    t = 500;
  function r(n) {
    var o = e(n, function (l) {
        return u.size === t && u.clear(), l;
      }),
      u = o.cache;
    return o;
  }
  return (Zd = r), Zd;
}
var Jd, sw;
function $j() {
  if (sw) return Jd;
  sw = 1;
  var e = Rj(),
    t =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    r = /\\(\\)?/g,
    n = e(function (o) {
      var u = [];
      return (
        o.charCodeAt(0) === 46 && u.push(""),
        o.replace(t, function (l, c, f, p) {
          u.push(f ? p.replace(r, "$1") : c || l);
        }),
        u
      );
    });
  return (Jd = n), Jd;
}
var ep, cw;
function km() {
  if (cw) return ep;
  cw = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, u = Array(o); ++n < o; )
      u[n] = r(t[n], n, t);
    return u;
  }
  return (ep = e), ep;
}
var tp, fw;
function Dj() {
  if (fw) return tp;
  fw = 1;
  var e = ou(),
    t = km(),
    r = Ft(),
    n = va(),
    o = e ? e.prototype : void 0,
    u = o ? o.toString : void 0;
  function l(c) {
    if (typeof c == "string") return c;
    if (r(c)) return t(c, l) + "";
    if (n(c)) return u ? u.call(c) : "";
    var f = c + "";
    return f == "0" && 1 / c == -1 / 0 ? "-0" : f;
  }
  return (tp = l), tp;
}
var rp, dw;
function iA() {
  if (dw) return rp;
  dw = 1;
  var e = Dj();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return (rp = t), rp;
}
var np, pw;
function aA() {
  if (pw) return np;
  pw = 1;
  var e = Ft(),
    t = Pm(),
    r = $j(),
    n = iA();
  function o(u, l) {
    return e(u) ? u : t(u, l) ? [u] : r(n(u));
  }
  return (np = o), np;
}
var ip, hw;
function Ds() {
  if (hw) return ip;
  hw = 1;
  var e = va();
  function t(r) {
    if (typeof r == "string" || e(r)) return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return (ip = t), ip;
}
var ap, vw;
function jm() {
  if (vw) return ap;
  vw = 1;
  var e = aA(),
    t = Ds();
  function r(n, o) {
    o = e(o, n);
    for (var u = 0, l = o.length; n != null && u < l; ) n = n[t(o[u++])];
    return u && u == l ? n : void 0;
  }
  return (ap = r), ap;
}
var op, yw;
function oA() {
  if (yw) return op;
  yw = 1;
  var e = jm();
  function t(r, n, o) {
    var u = r == null ? void 0 : e(r, n);
    return u === void 0 ? o : u;
  }
  return (op = t), op;
}
var Lj = oA();
const ir = We(Lj);
var up, mw;
function qj() {
  if (mw) return up;
  mw = 1;
  function e(t) {
    return t == null;
  }
  return (up = e), up;
}
var Bj = qj();
const $e = We(Bj);
var lp, gw;
function Fj() {
  if (gw) return lp;
  gw = 1;
  var e = Jr(),
    t = Ft(),
    r = en(),
    n = "[object String]";
  function o(u) {
    return typeof u == "string" || (!t(u) && r(u) && e(u) == n);
  }
  return (lp = o), lp;
}
var zj = Fj();
const uu = We(zj);
var Uj = Am();
const Te = We(Uj);
var Wj = Tn();
const ya = We(Wj);
var sp = { exports: {} },
  Ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bw;
function Hj() {
  if (bw) return Ie;
  bw = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.server_context"),
    f = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    v = Symbol.for("react.suspense_list"),
    h = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    w = Symbol.for("react.offscreen"),
    S;
  S = Symbol.for("react.module.reference");
  function x(b) {
    if (typeof b == "object" && b !== null) {
      var T = b.$$typeof;
      switch (T) {
        case e:
          switch (((b = b.type), b)) {
            case r:
            case o:
            case n:
            case p:
            case v:
              return b;
            default:
              switch (((b = b && b.$$typeof), b)) {
                case c:
                case l:
                case f:
                case g:
                case h:
                case u:
                  return b;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return (
    (Ie.ContextConsumer = l),
    (Ie.ContextProvider = u),
    (Ie.Element = e),
    (Ie.ForwardRef = f),
    (Ie.Fragment = r),
    (Ie.Lazy = g),
    (Ie.Memo = h),
    (Ie.Portal = t),
    (Ie.Profiler = o),
    (Ie.StrictMode = n),
    (Ie.Suspense = p),
    (Ie.SuspenseList = v),
    (Ie.isAsyncMode = function () {
      return !1;
    }),
    (Ie.isConcurrentMode = function () {
      return !1;
    }),
    (Ie.isContextConsumer = function (b) {
      return x(b) === l;
    }),
    (Ie.isContextProvider = function (b) {
      return x(b) === u;
    }),
    (Ie.isElement = function (b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }),
    (Ie.isForwardRef = function (b) {
      return x(b) === f;
    }),
    (Ie.isFragment = function (b) {
      return x(b) === r;
    }),
    (Ie.isLazy = function (b) {
      return x(b) === g;
    }),
    (Ie.isMemo = function (b) {
      return x(b) === h;
    }),
    (Ie.isPortal = function (b) {
      return x(b) === t;
    }),
    (Ie.isProfiler = function (b) {
      return x(b) === o;
    }),
    (Ie.isStrictMode = function (b) {
      return x(b) === n;
    }),
    (Ie.isSuspense = function (b) {
      return x(b) === p;
    }),
    (Ie.isSuspenseList = function (b) {
      return x(b) === v;
    }),
    (Ie.isValidElementType = function (b) {
      return (
        typeof b == "string" ||
        typeof b == "function" ||
        b === r ||
        b === o ||
        b === n ||
        b === p ||
        b === v ||
        b === w ||
        (typeof b == "object" &&
          b !== null &&
          (b.$$typeof === g ||
            b.$$typeof === h ||
            b.$$typeof === u ||
            b.$$typeof === l ||
            b.$$typeof === f ||
            b.$$typeof === S ||
            b.getModuleId !== void 0))
      );
    }),
    (Ie.typeOf = x),
    Ie
  );
}
var ww;
function Gj() {
  return ww || ((ww = 1), (sp.exports = Hj())), sp.exports;
}
var Kj = Gj(),
  cp,
  xw;
function uA() {
  if (xw) return cp;
  xw = 1;
  var e = Jr(),
    t = en(),
    r = "[object Number]";
  function n(o) {
    return typeof o == "number" || (t(o) && e(o) == r);
  }
  return (cp = n), cp;
}
var fp, Sw;
function Vj() {
  if (Sw) return fp;
  Sw = 1;
  var e = uA();
  function t(r) {
    return e(r) && r != +r;
  }
  return (fp = t), fp;
}
var Xj = Vj();
const lu = We(Xj);
var Yj = uA();
const Qj = We(Yj);
var wr = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  Qn = function (t) {
    return uu(t) && t.indexOf("%") === t.length - 1;
  },
  se = function (t) {
    return Qj(t) && !lu(t);
  },
  ct = function (t) {
    return se(t) || uu(t);
  },
  Zj = 0,
  Ls = function (t) {
    var r = ++Zj;
    return "".concat(t || "").concat(r);
  },
  oi = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!se(t) && !uu(t)) return n;
    var u;
    if (Qn(t)) {
      var l = t.indexOf("%");
      u = (r * parseFloat(t.slice(0, l))) / 100;
    } else u = +t;
    return lu(u) && (u = n), o && u > r && (u = r), u;
  },
  Fi = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  Jj = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var r = t.length, n = {}, o = 0; o < r; o++)
      if (!n[t[o]]) n[t[o]] = !0;
      else return !0;
    return !1;
  },
  Li = function (t, r) {
    return se(t) && se(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function ly(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : ir(n, t)) === r;
      });
}
function Hi(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function sy(e) {
  "@babel/helpers - typeof";
  return (
    (sy =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sy(e)
  );
}
var eM = ["viewBox", "children"],
  tM = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  _w = ["points", "pathLength"],
  dp = { svg: eM, polygon: _w, polyline: _w },
  Mm = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  ql = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((ue.isValidElement(t) && (n = t.props), !ya(n))) return null;
    var o = {};
    return (
      Object.keys(n).forEach(function (u) {
        Mm.includes(u) &&
          (o[u] =
            r ||
            function (l) {
              return n[u](n, l);
            });
      }),
      o
    );
  },
  rM = function (t, r, n) {
    return function (o) {
      return t(r, n, o), null;
    };
  },
  Bl = function (t, r, n) {
    if (!ya(t) || sy(t) !== "object") return null;
    var o = null;
    return (
      Object.keys(t).forEach(function (u) {
        var l = t[u];
        Mm.includes(u) &&
          typeof l == "function" &&
          (o || (o = {}), (o[u] = rM(l, r, n)));
      }),
      o
    );
  },
  nM = ["children"],
  iM = ["children"];
function Ow(e, t) {
  if (e == null) return {};
  var r = aM(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function aM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Pw = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  Vr = function (t) {
    return typeof t == "string"
      ? t
      : t
      ? t.displayName || t.name || "Component"
      : "";
  },
  Aw = null,
  pp = null,
  Im = function e(t) {
    if (t === Aw && Array.isArray(pp)) return pp;
    var r = [];
    return (
      ue.Children.forEach(t, function (n) {
        $e(n) ||
          (Kj.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (pp = r),
      (Aw = t),
      r
    );
  };
function xr(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (o) {
          return Vr(o);
        }))
      : (n = [Vr(t)]),
    Im(e).forEach(function (o) {
      var u = ir(o, "type.displayName") || ir(o, "type.name");
      n.indexOf(u) !== -1 && r.push(o);
    }),
    r
  );
}
function Kt(e, t) {
  var r = xr(e, t);
  return r[0];
}
var Ew = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      o = r.height;
    return !(!se(n) || n <= 0 || !se(o) || o <= 0);
  },
  oM = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  uM = function (t) {
    return t && t.type && uu(t.type) && oM.indexOf(t.type) >= 0;
  },
  lM = function (t, r, n, o) {
    var u,
      l = (u = dp == null ? void 0 : dp[o]) !== null && u !== void 0 ? u : [];
    return (
      (!Te(t) && ((o && l.includes(r)) || tM.includes(r))) ||
      (n && Mm.includes(r))
    );
  },
  Re = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var o = t;
    if ((ue.isValidElement(t) && (o = t.props), !ya(o))) return null;
    var u = {};
    return (
      Object.keys(o).forEach(function (l) {
        var c;
        lM((c = o) === null || c === void 0 ? void 0 : c[l], l, r, n) &&
          (u[l] = o[l]);
      }),
      u
    );
  },
  cy = function e(t, r) {
    if (t === r) return !0;
    var n = ue.Children.count(t);
    if (n !== ue.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1)
      return Tw(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var o = 0; o < n; o++) {
      var u = t[o],
        l = r[o];
      if (Array.isArray(u) || Array.isArray(l)) {
        if (!e(u, l)) return !1;
      } else if (!Tw(u, l)) return !1;
    }
    return !0;
  },
  Tw = function (t, r) {
    if ($e(t) && $e(r)) return !0;
    if (!$e(t) && !$e(r)) {
      var n = t.props || {},
        o = n.children,
        u = Ow(n, nM),
        l = r.props || {},
        c = l.children,
        f = Ow(l, iM);
      return o && c ? Hi(u, f) && cy(o, c) : !o && !c ? Hi(u, f) : !1;
    }
    return !1;
  },
  Cw = function (t, r) {
    var n = [],
      o = {};
    return (
      Im(t).forEach(function (u, l) {
        if (uM(u)) n.push(u);
        else if (u) {
          var c = Vr(u.type),
            f = r[c] || {},
            p = f.handler,
            v = f.once;
          if (p && (!v || !o[c])) {
            var h = p(u, c, l);
            n.push(h), (o[c] = !0);
          }
        }
      }),
      n
    );
  },
  sM = function (t) {
    var r = t && t.type;
    return r && Pw[r] ? Pw[r] : null;
  },
  cM = function (t, r) {
    return Im(r).indexOf(t);
  },
  fM = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function fy() {
  return (
    (fy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fy.apply(this, arguments)
  );
}
function dM(e, t) {
  if (e == null) return {};
  var r = pM(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function pM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function dy(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    o = e.viewBox,
    u = e.className,
    l = e.style,
    c = e.title,
    f = e.desc,
    p = dM(e, fM),
    v = o || { width: r, height: n, x: 0, y: 0 },
    h = De("recharts-surface", u);
  return F.createElement(
    "svg",
    fy({}, Re(p, !0, "svg"), {
      className: h,
      width: r,
      height: n,
      style: l,
      viewBox: ""
        .concat(v.x, " ")
        .concat(v.y, " ")
        .concat(v.width, " ")
        .concat(v.height),
    }),
    F.createElement("title", null, c),
    F.createElement("desc", null, f),
    t
  );
}
var hM = ["children", "className"];
function py() {
  return (
    (py = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    py.apply(this, arguments)
  );
}
function vM(e, t) {
  if (e == null) return {};
  var r = yM(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function yM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var mt = F.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      o = vM(e, hM),
      u = De("recharts-layer", n);
    return F.createElement("g", py({ className: u }, Re(o, !0), { ref: t }), r);
  }),
  ti = function (t, r) {
    for (
      var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), u = 2;
      u < n;
      u++
    )
      o[u - 2] = arguments[u];
  },
  hp,
  kw;
function mM() {
  if (kw) return hp;
  kw = 1;
  function e(t, r, n) {
    var o = -1,
      u = t.length;
    r < 0 && (r = -r > u ? 0 : u + r),
      (n = n > u ? u : n),
      n < 0 && (n += u),
      (u = r > n ? 0 : (n - r) >>> 0),
      (r >>>= 0);
    for (var l = Array(u); ++o < u; ) l[o] = t[o + r];
    return l;
  }
  return (hp = e), hp;
}
var vp, jw;
function gM() {
  if (jw) return vp;
  jw = 1;
  var e = mM();
  function t(r, n, o) {
    var u = r.length;
    return (o = o === void 0 ? u : o), !n && o >= u ? r : e(r, n, o);
  }
  return (vp = t), vp;
}
var yp, Mw;
function lA() {
  if (Mw) return yp;
  Mw = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    o = t + r + n,
    u = "\\ufe0e\\ufe0f",
    l = "\\u200d",
    c = RegExp("[" + l + e + o + u + "]");
  function f(p) {
    return c.test(p);
  }
  return (yp = f), yp;
}
var mp, Iw;
function bM() {
  if (Iw) return mp;
  Iw = 1;
  function e(t) {
    return t.split("");
  }
  return (mp = e), mp;
}
var gp, Nw;
function wM() {
  if (Nw) return gp;
  Nw = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    o = t + r + n,
    u = "\\ufe0e\\ufe0f",
    l = "[" + e + "]",
    c = "[" + o + "]",
    f = "\\ud83c[\\udffb-\\udfff]",
    p = "(?:" + c + "|" + f + ")",
    v = "[^" + e + "]",
    h = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    g = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    w = "\\u200d",
    S = p + "?",
    x = "[" + u + "]?",
    b = "(?:" + w + "(?:" + [v, h, g].join("|") + ")" + x + S + ")*",
    T = x + S + b,
    A = "(?:" + [v + c + "?", c, h, g, l].join("|") + ")",
    E = RegExp(f + "(?=" + f + ")|" + A + T, "g");
  function C(_) {
    return _.match(E) || [];
  }
  return (gp = C), gp;
}
var bp, Rw;
function xM() {
  if (Rw) return bp;
  Rw = 1;
  var e = bM(),
    t = lA(),
    r = wM();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return (bp = n), bp;
}
var wp, $w;
function SM() {
  if ($w) return wp;
  $w = 1;
  var e = gM(),
    t = lA(),
    r = xM(),
    n = iA();
  function o(u) {
    return function (l) {
      l = n(l);
      var c = t(l) ? r(l) : void 0,
        f = c ? c[0] : l.charAt(0),
        p = c ? e(c, 1).join("") : l.slice(1);
      return f[u]() + p;
    };
  }
  return (wp = o), wp;
}
var xp, Dw;
function _M() {
  if (Dw) return xp;
  Dw = 1;
  var e = SM(),
    t = e("toUpperCase");
  return (xp = t), xp;
}
var OM = _M();
const qs = We(OM);
function Ue(e) {
  return function () {
    return e;
  };
}
const sA = Math.cos,
  Fl = Math.sin,
  Sr = Math.sqrt,
  zl = Math.PI,
  Bs = 2 * zl,
  hy = Math.PI,
  vy = 2 * hy,
  Vn = 1e-6,
  PM = vy - Vn;
function cA(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function AM(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return cA;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let o = 1, u = n.length; o < u; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class EM {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? cA : AM(t));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, o) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +o)}`;
  }
  bezierCurveTo(t, r, n, o, u, l) {
    this._append`C${+t},${+r},${+n},${+o},${(this._x1 = +u)},${(this._y1 =
      +l)}`;
  }
  arcTo(t, r, n, o, u) {
    if (((t = +t), (r = +r), (n = +n), (o = +o), (u = +u), u < 0))
      throw new Error(`negative radius: ${u}`);
    let l = this._x1,
      c = this._y1,
      f = n - t,
      p = o - r,
      v = l - t,
      h = c - r,
      g = v * v + h * h;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (g > Vn)
      if (!(Math.abs(h * f - p * v) > Vn) || !u)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let w = n - l,
          S = o - c,
          x = f * f + p * p,
          b = w * w + S * S,
          T = Math.sqrt(x),
          A = Math.sqrt(g),
          E = u * Math.tan((hy - Math.acos((x + g - b) / (2 * T * A))) / 2),
          C = E / A,
          _ = E / T;
        Math.abs(C - 1) > Vn && this._append`L${t + C * v},${r + C * h}`,
          this._append`A${u},${u},0,0,${+(h * w > v * S)},${(this._x1 =
            t + _ * f)},${(this._y1 = r + _ * p)}`;
      }
  }
  arc(t, r, n, o, u, l) {
    if (((t = +t), (r = +r), (n = +n), (l = !!l), n < 0))
      throw new Error(`negative radius: ${n}`);
    let c = n * Math.cos(o),
      f = n * Math.sin(o),
      p = t + c,
      v = r + f,
      h = 1 ^ l,
      g = l ? o - u : u - o;
    this._x1 === null
      ? this._append`M${p},${v}`
      : (Math.abs(this._x1 - p) > Vn || Math.abs(this._y1 - v) > Vn) &&
        this._append`L${p},${v}`,
      n &&
        (g < 0 && (g = (g % vy) + vy),
        g > PM
          ? this._append`A${n},${n},0,1,${h},${t - c},${
              r - f
            }A${n},${n},0,1,${h},${(this._x1 = p)},${(this._y1 = v)}`
          : g > Vn &&
            this._append`A${n},${n},0,${+(g >= hy)},${h},${(this._x1 =
              t + n * Math.cos(u))},${(this._y1 = r + n * Math.sin(u))}`);
  }
  rect(t, r, n, o) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
      +r)}h${(n = +n)}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Nm(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new EM(t)
  );
}
function Rm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function fA(e) {
  this._context = e;
}
fA.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function Fs(e) {
  return new fA(e);
}
function dA(e) {
  return e[0];
}
function pA(e) {
  return e[1];
}
function hA(e, t) {
  var r = Ue(!0),
    n = null,
    o = Fs,
    u = null,
    l = Nm(c);
  (e = typeof e == "function" ? e : e === void 0 ? dA : Ue(e)),
    (t = typeof t == "function" ? t : t === void 0 ? pA : Ue(t));
  function c(f) {
    var p,
      v = (f = Rm(f)).length,
      h,
      g = !1,
      w;
    for (n == null && (u = o((w = l()))), p = 0; p <= v; ++p)
      !(p < v && r((h = f[p]), p, f)) === g &&
        ((g = !g) ? u.lineStart() : u.lineEnd()),
        g && u.point(+e(h, p, f), +t(h, p, f));
    if (w) return (u = null), w + "" || null;
  }
  return (
    (c.x = function (f) {
      return arguments.length
        ? ((e = typeof f == "function" ? f : Ue(+f)), c)
        : e;
    }),
    (c.y = function (f) {
      return arguments.length
        ? ((t = typeof f == "function" ? f : Ue(+f)), c)
        : t;
    }),
    (c.defined = function (f) {
      return arguments.length
        ? ((r = typeof f == "function" ? f : Ue(!!f)), c)
        : r;
    }),
    (c.curve = function (f) {
      return arguments.length ? ((o = f), n != null && (u = o(n)), c) : o;
    }),
    (c.context = function (f) {
      return arguments.length
        ? (f == null ? (n = u = null) : (u = o((n = f))), c)
        : n;
    }),
    c
  );
}
function Pl(e, t, r) {
  var n = null,
    o = Ue(!0),
    u = null,
    l = Fs,
    c = null,
    f = Nm(p);
  (e = typeof e == "function" ? e : e === void 0 ? dA : Ue(+e)),
    (t = typeof t == "function" ? t : Ue(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? pA : Ue(+r));
  function p(h) {
    var g,
      w,
      S,
      x = (h = Rm(h)).length,
      b,
      T = !1,
      A,
      E = new Array(x),
      C = new Array(x);
    for (u == null && (c = l((A = f()))), g = 0; g <= x; ++g) {
      if (!(g < x && o((b = h[g]), g, h)) === T)
        if ((T = !T)) (w = g), c.areaStart(), c.lineStart();
        else {
          for (c.lineEnd(), c.lineStart(), S = g - 1; S >= w; --S)
            c.point(E[S], C[S]);
          c.lineEnd(), c.areaEnd();
        }
      T &&
        ((E[g] = +e(b, g, h)),
        (C[g] = +t(b, g, h)),
        c.point(n ? +n(b, g, h) : E[g], r ? +r(b, g, h) : C[g]));
    }
    if (A) return (c = null), A + "" || null;
  }
  function v() {
    return hA().defined(o).curve(l).context(u);
  }
  return (
    (p.x = function (h) {
      return arguments.length
        ? ((e = typeof h == "function" ? h : Ue(+h)), (n = null), p)
        : e;
    }),
    (p.x0 = function (h) {
      return arguments.length
        ? ((e = typeof h == "function" ? h : Ue(+h)), p)
        : e;
    }),
    (p.x1 = function (h) {
      return arguments.length
        ? ((n = h == null ? null : typeof h == "function" ? h : Ue(+h)), p)
        : n;
    }),
    (p.y = function (h) {
      return arguments.length
        ? ((t = typeof h == "function" ? h : Ue(+h)), (r = null), p)
        : t;
    }),
    (p.y0 = function (h) {
      return arguments.length
        ? ((t = typeof h == "function" ? h : Ue(+h)), p)
        : t;
    }),
    (p.y1 = function (h) {
      return arguments.length
        ? ((r = h == null ? null : typeof h == "function" ? h : Ue(+h)), p)
        : r;
    }),
    (p.lineX0 = p.lineY0 =
      function () {
        return v().x(e).y(t);
      }),
    (p.lineY1 = function () {
      return v().x(e).y(r);
    }),
    (p.lineX1 = function () {
      return v().x(n).y(t);
    }),
    (p.defined = function (h) {
      return arguments.length
        ? ((o = typeof h == "function" ? h : Ue(!!h)), p)
        : o;
    }),
    (p.curve = function (h) {
      return arguments.length ? ((l = h), u != null && (c = l(u)), p) : l;
    }),
    (p.context = function (h) {
      return arguments.length
        ? (h == null ? (u = c = null) : (c = l((u = h))), p)
        : u;
    }),
    p
  );
}
class vA {
  constructor(t, r) {
    (this._context = t), (this._x = r);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        (this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r
            );
        break;
      }
    }
    (this._x0 = t), (this._y0 = r);
  }
}
function TM(e) {
  return new vA(e, !0);
}
function CM(e) {
  return new vA(e, !1);
}
const $m = {
    draw(e, t) {
      const r = Sr(t / zl);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, Bs);
    },
  },
  kM = {
    draw(e, t) {
      const r = Sr(t / 5) / 2;
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath();
    },
  },
  yA = Sr(1 / 3),
  jM = yA * 2,
  MM = {
    draw(e, t) {
      const r = Sr(t / jM),
        n = r * yA;
      e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath();
    },
  },
  IM = {
    draw(e, t) {
      const r = Sr(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  NM = 0.8908130915292852,
  mA = Fl(zl / 10) / Fl((7 * zl) / 10),
  RM = Fl(Bs / 10) * mA,
  $M = -sA(Bs / 10) * mA,
  DM = {
    draw(e, t) {
      const r = Sr(t * NM),
        n = RM * r,
        o = $M * r;
      e.moveTo(0, -r), e.lineTo(n, o);
      for (let u = 1; u < 5; ++u) {
        const l = (Bs * u) / 5,
          c = sA(l),
          f = Fl(l);
        e.lineTo(f * r, -c * r), e.lineTo(c * n - f * o, f * n + c * o);
      }
      e.closePath();
    },
  },
  Sp = Sr(3),
  LM = {
    draw(e, t) {
      const r = -Sr(t / (Sp * 3));
      e.moveTo(0, r * 2),
        e.lineTo(-Sp * r, -r),
        e.lineTo(Sp * r, -r),
        e.closePath();
    },
  },
  tr = -0.5,
  rr = Sr(3) / 2,
  yy = 1 / Sr(12),
  qM = (yy / 2 + 1) * 3,
  BM = {
    draw(e, t) {
      const r = Sr(t / qM),
        n = r / 2,
        o = r * yy,
        u = n,
        l = r * yy + r,
        c = -u,
        f = l;
      e.moveTo(n, o),
        e.lineTo(u, l),
        e.lineTo(c, f),
        e.lineTo(tr * n - rr * o, rr * n + tr * o),
        e.lineTo(tr * u - rr * l, rr * u + tr * l),
        e.lineTo(tr * c - rr * f, rr * c + tr * f),
        e.lineTo(tr * n + rr * o, tr * o - rr * n),
        e.lineTo(tr * u + rr * l, tr * l - rr * u),
        e.lineTo(tr * c + rr * f, tr * f - rr * c),
        e.closePath();
    },
  };
function FM(e, t) {
  let r = null,
    n = Nm(o);
  (e = typeof e == "function" ? e : Ue(e || $m)),
    (t = typeof t == "function" ? t : Ue(t === void 0 ? 64 : +t));
  function o() {
    let u;
    if (
      (r || (r = u = n()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      u)
    )
      return (r = null), u + "" || null;
  }
  return (
    (o.type = function (u) {
      return arguments.length
        ? ((e = typeof u == "function" ? u : Ue(u)), o)
        : e;
    }),
    (o.size = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : Ue(+u)), o)
        : t;
    }),
    (o.context = function (u) {
      return arguments.length ? ((r = u ?? null), o) : r;
    }),
    o
  );
}
function Ul() {}
function Wl(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function gA(e) {
  this._context = e;
}
gA.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Wl(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6
          );
      default:
        Wl(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function zM(e) {
  return new gA(e);
}
function bA(e) {
  this._context = e;
}
bA.prototype = {
  areaStart: Ul,
  areaEnd: Ul,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6
          );
        break;
      default:
        Wl(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function UM(e) {
  return new bA(e);
}
function wA(e) {
  this._context = e;
}
wA.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Wl(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function WM(e) {
  return new wA(e);
}
function xA(e) {
  this._context = e;
}
xA.prototype = {
  areaStart: Ul,
  areaEnd: Ul,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function HM(e) {
  return new xA(e);
}
function Lw(e) {
  return e < 0 ? -1 : 1;
}
function qw(e, t, r) {
  var n = e._x1 - e._x0,
    o = t - e._x1,
    u = (e._y1 - e._y0) / (n || (o < 0 && -0)),
    l = (r - e._y1) / (o || (n < 0 && -0)),
    c = (u * o + l * n) / (n + o);
  return (
    (Lw(u) + Lw(l)) * Math.min(Math.abs(u), Math.abs(l), 0.5 * Math.abs(c)) || 0
  );
}
function Bw(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function _p(e, t, r) {
  var n = e._x0,
    o = e._y0,
    u = e._x1,
    l = e._y1,
    c = (u - n) / 3;
  e._context.bezierCurveTo(n + c, o + c * t, u - c, l - c * r, u, l);
}
function Hl(e) {
  this._context = e;
}
Hl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        _p(this, this._t0, Bw(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), _p(this, Bw(this, (r = qw(this, e, t))), r);
          break;
        default:
          _p(this, this._t0, (r = qw(this, e, t)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r);
    }
  },
};
function SA(e) {
  this._context = new _A(e);
}
(SA.prototype = Object.create(Hl.prototype)).point = function (e, t) {
  Hl.prototype.point.call(this, t, e);
};
function _A(e) {
  this._context = e;
}
_A.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, o, u) {
    this._context.bezierCurveTo(t, e, n, r, u, o);
  },
};
function GM(e) {
  return new Hl(e);
}
function KM(e) {
  return new SA(e);
}
function OA(e) {
  this._context = e;
}
OA.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Fw(e), o = Fw(t), u = 0, l = 1; l < r; ++u, ++l)
          this._context.bezierCurveTo(
            n[0][u],
            o[0][u],
            n[1][u],
            o[1][u],
            e[l],
            t[l]
          );
    (this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function Fw(e) {
  var t,
    r = e.length - 1,
    n,
    o = new Array(r),
    u = new Array(r),
    l = new Array(r);
  for (o[0] = 0, u[0] = 2, l[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (o[t] = 1), (u[t] = 4), (l[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    o[r - 1] = 2, u[r - 1] = 7, l[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    (n = o[t] / u[t - 1]), (u[t] -= n), (l[t] -= n * l[t - 1]);
  for (o[r - 1] = l[r - 1] / u[r - 1], t = r - 2; t >= 0; --t)
    o[t] = (l[t] - o[t + 1]) / u[t];
  for (u[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t)
    u[t] = 2 * e[t + 1] - o[t + 1];
  return [o, u];
}
function VM(e) {
  return new OA(e);
}
function zs(e, t) {
  (this._context = e), (this._t = t);
}
zs.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};
function XM(e) {
  return new zs(e, 0.5);
}
function YM(e) {
  return new zs(e, 0);
}
function QM(e) {
  return new zs(e, 1);
}
function Vi(e, t) {
  if ((l = e.length) > 1)
    for (var r = 1, n, o, u = e[t[0]], l, c = u.length; r < l; ++r)
      for (o = u, u = e[t[r]], n = 0; n < c; ++n)
        u[n][1] += u[n][0] = isNaN(o[n][1]) ? o[n][0] : o[n][1];
}
function my(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function ZM(e, t) {
  return e[t];
}
function JM(e) {
  const t = [];
  return (t.key = e), t;
}
function e2() {
  var e = Ue([]),
    t = my,
    r = Vi,
    n = ZM;
  function o(u) {
    var l = Array.from(e.apply(this, arguments), JM),
      c,
      f = l.length,
      p = -1,
      v;
    for (const h of u)
      for (c = 0, ++p; c < f; ++c)
        (l[c][p] = [0, +n(h, l[c].key, p, u)]).data = h;
    for (c = 0, v = Rm(t(l)); c < f; ++c) l[v[c]].index = c;
    return r(l, v), l;
  }
  return (
    (o.keys = function (u) {
      return arguments.length
        ? ((e = typeof u == "function" ? u : Ue(Array.from(u))), o)
        : e;
    }),
    (o.value = function (u) {
      return arguments.length
        ? ((n = typeof u == "function" ? u : Ue(+u)), o)
        : n;
    }),
    (o.order = function (u) {
      return arguments.length
        ? ((t =
            u == null ? my : typeof u == "function" ? u : Ue(Array.from(u))),
          o)
        : t;
    }),
    (o.offset = function (u) {
      return arguments.length ? ((r = u ?? Vi), o) : r;
    }),
    o
  );
}
function t2(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, o = 0, u = e[0].length, l; o < u; ++o) {
      for (l = r = 0; r < n; ++r) l += e[r][o][1] || 0;
      if (l) for (r = 0; r < n; ++r) e[r][o][1] /= l;
    }
    Vi(e, t);
  }
}
function r2(e, t) {
  if ((o = e.length) > 0) {
    for (var r = 0, n = e[t[0]], o, u = n.length; r < u; ++r) {
      for (var l = 0, c = 0; l < o; ++l) c += e[l][r][1] || 0;
      n[r][1] += n[r][0] = -c / 2;
    }
    Vi(e, t);
  }
}
function n2(e, t) {
  if (!(!((l = e.length) > 0) || !((u = (o = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, o, u, l; n < u; ++n) {
      for (var c = 0, f = 0, p = 0; c < l; ++c) {
        for (
          var v = e[t[c]],
            h = v[n][1] || 0,
            g = v[n - 1][1] || 0,
            w = (h - g) / 2,
            S = 0;
          S < c;
          ++S
        ) {
          var x = e[t[S]],
            b = x[n][1] || 0,
            T = x[n - 1][1] || 0;
          w += b - T;
        }
        (f += h), (p += w * h);
      }
      (o[n - 1][1] += o[n - 1][0] = r), f && (r -= p / f);
    }
    (o[n - 1][1] += o[n - 1][0] = r), Vi(e, t);
  }
}
function Po(e) {
  "@babel/helpers - typeof";
  return (
    (Po =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Po(e)
  );
}
var i2 = ["type", "size", "sizeType"];
function gy() {
  return (
    (gy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gy.apply(this, arguments)
  );
}
function zw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Uw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zw(Object(r), !0).forEach(function (n) {
          a2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : zw(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function a2(e, t, r) {
  return (
    (t = o2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function o2(e) {
  var t = u2(e, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function u2(e, t) {
  if (Po(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l2(e, t) {
  if (e == null) return {};
  var r = s2(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function s2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var PA = {
    symbolCircle: $m,
    symbolCross: kM,
    symbolDiamond: MM,
    symbolSquare: IM,
    symbolStar: DM,
    symbolTriangle: LM,
    symbolWye: BM,
  },
  c2 = Math.PI / 180,
  f2 = function (t) {
    var r = "symbol".concat(qs(t));
    return PA[r] || $m;
  },
  d2 = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var o = 18 * c2;
        return (
          1.25 *
          t *
          t *
          (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  p2 = function (t, r) {
    PA["symbol".concat(qs(t))] = r;
  },
  Dm = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      o = t.size,
      u = o === void 0 ? 64 : o,
      l = t.sizeType,
      c = l === void 0 ? "area" : l,
      f = l2(t, i2),
      p = Uw(Uw({}, f), {}, { type: n, size: u, sizeType: c }),
      v = function () {
        var b = f2(n),
          T = FM().type(b).size(d2(u, c, n));
        return T();
      },
      h = p.className,
      g = p.cx,
      w = p.cy,
      S = Re(p, !0);
    return g === +g && w === +w && u === +u
      ? F.createElement(
          "path",
          gy({}, S, {
            className: De("recharts-symbols", h),
            transform: "translate(".concat(g, ", ").concat(w, ")"),
            d: v(),
          })
        )
      : null;
  };
Dm.registerSymbol = p2;
function Xi(e) {
  "@babel/helpers - typeof";
  return (
    (Xi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xi(e)
  );
}
function by() {
  return (
    (by = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    by.apply(this, arguments)
  );
}
function Ww(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function h2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ww(Object(r), !0).forEach(function (n) {
          Ao(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ww(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function v2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function y2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, EA(n.key), n);
  }
}
function m2(e, t, r) {
  return (
    y2(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function g2(e, t, r) {
  return (
    (t = Gl(t)),
    b2(
      e,
      AA() ? Reflect.construct(t, r || [], Gl(e).constructor) : t.apply(e, r)
    )
  );
}
function b2(e, t) {
  if (t && (Xi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return w2(e);
}
function w2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function AA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (AA = function () {
    return !!e;
  })();
}
function Gl(e) {
  return (
    (Gl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Gl(e)
  );
}
function x2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wy(e, t);
}
function wy(e, t) {
  return (
    (wy = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    wy(e, t)
  );
}
function Ao(e, t, r) {
  return (
    (t = EA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function EA(e) {
  var t = S2(e, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function S2(e, t) {
  if (Xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yr = 32,
  Lm = (function (e) {
    function t() {
      return v2(this, t), g2(this, t, arguments);
    }
    return (
      x2(t, e),
      m2(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var o = this.props.inactiveColor,
              u = yr / 2,
              l = yr / 6,
              c = yr / 3,
              f = n.inactive ? o : n.color;
            if (n.type === "plainline")
              return F.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: f,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: u,
                x2: yr,
                y2: u,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return F.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: f,
                d: "M0,"
                  .concat(u, "h")
                  .concat(
                    c,
                    `
            A`
                  )
                  .concat(l, ",")
                  .concat(l, ",0,1,1,")
                  .concat(2 * c, ",")
                  .concat(
                    u,
                    `
            H`
                  )
                  .concat(yr, "M")
                  .concat(2 * c, ",")
                  .concat(
                    u,
                    `
            A`
                  )
                  .concat(l, ",")
                  .concat(l, ",0,1,1,")
                  .concat(c, ",")
                  .concat(u),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return F.createElement("path", {
                stroke: "none",
                fill: f,
                d: "M0,"
                  .concat(yr / 8, "h")
                  .concat(yr, "v")
                  .concat((yr * 3) / 4, "h")
                  .concat(-32, "z"),
                className: "recharts-legend-icon",
              });
            if (F.isValidElement(n.legendIcon)) {
              var p = h2({}, n);
              return delete p.legendIcon, F.cloneElement(n.legendIcon, p);
            }
            return F.createElement(Dm, {
              fill: f,
              cx: u,
              cy: u,
              size: yr,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              o = this.props,
              u = o.payload,
              l = o.iconSize,
              c = o.layout,
              f = o.formatter,
              p = o.inactiveColor,
              v = { x: 0, y: 0, width: yr, height: yr },
              h = {
                display: c === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              g = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return u.map(function (w, S) {
              var x = w.formatter || f,
                b = De(
                  Ao(
                    Ao(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(S),
                      !0
                    ),
                    "inactive",
                    w.inactive
                  )
                );
              if (w.type === "none") return null;
              var T = Te(w.value) ? null : w.value;
              ti(
                !Te(w.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
              );
              var A = w.inactive ? p : w.color;
              return F.createElement(
                "li",
                by(
                  { className: b, style: h, key: "legend-item-".concat(S) },
                  Bl(n.props, w, S)
                ),
                F.createElement(
                  dy,
                  { width: l, height: l, viewBox: v, style: g },
                  n.renderIcon(w)
                ),
                F.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: A },
                  },
                  x ? x(T, w, S) : T
                )
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              o = n.payload,
              u = n.layout,
              l = n.align;
            if (!o || !o.length) return null;
            var c = {
              padding: 0,
              margin: 0,
              textAlign: u === "horizontal" ? l : "left",
            };
            return F.createElement(
              "ul",
              { className: "recharts-default-legend", style: c },
              this.renderItems()
            );
          },
        },
      ])
    );
  })(ue.PureComponent);
Ao(Lm, "displayName", "Legend");
Ao(Lm, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var Op, Hw;
function _2() {
  if (Hw) return Op;
  Hw = 1;
  var e = Rs();
  function t() {
    (this.__data__ = new e()), (this.size = 0);
  }
  return (Op = t), Op;
}
var Pp, Gw;
function O2() {
  if (Gw) return Pp;
  Gw = 1;
  function e(t) {
    var r = this.__data__,
      n = r.delete(t);
    return (this.size = r.size), n;
  }
  return (Pp = e), Pp;
}
var Ap, Kw;
function P2() {
  if (Kw) return Ap;
  Kw = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return (Ap = e), Ap;
}
var Ep, Vw;
function A2() {
  if (Vw) return Ep;
  Vw = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (Ep = e), Ep;
}
var Tp, Xw;
function E2() {
  if (Xw) return Tp;
  Xw = 1;
  var e = Rs(),
    t = Tm(),
    r = Cm(),
    n = 200;
  function o(u, l) {
    var c = this.__data__;
    if (c instanceof e) {
      var f = c.__data__;
      if (!t || f.length < n - 1)
        return f.push([u, l]), (this.size = ++c.size), this;
      c = this.__data__ = new r(f);
    }
    return c.set(u, l), (this.size = c.size), this;
  }
  return (Tp = o), Tp;
}
var Cp, Yw;
function TA() {
  if (Yw) return Cp;
  Yw = 1;
  var e = Rs(),
    t = _2(),
    r = O2(),
    n = P2(),
    o = A2(),
    u = E2();
  function l(c) {
    var f = (this.__data__ = new e(c));
    this.size = f.size;
  }
  return (
    (l.prototype.clear = t),
    (l.prototype.delete = r),
    (l.prototype.get = n),
    (l.prototype.has = o),
    (l.prototype.set = u),
    (Cp = l),
    Cp
  );
}
var kp, Qw;
function T2() {
  if (Qw) return kp;
  Qw = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return (kp = t), kp;
}
var jp, Zw;
function C2() {
  if (Zw) return jp;
  Zw = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (jp = e), jp;
}
var Mp, Jw;
function CA() {
  if (Jw) return Mp;
  Jw = 1;
  var e = Cm(),
    t = T2(),
    r = C2();
  function n(o) {
    var u = -1,
      l = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++u < l; ) this.add(o[u]);
  }
  return (
    (n.prototype.add = n.prototype.push = t),
    (n.prototype.has = r),
    (Mp = n),
    Mp
  );
}
var Ip, ex;
function kA() {
  if (ex) return Ip;
  ex = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t)) return !0;
    return !1;
  }
  return (Ip = e), Ip;
}
var Np, tx;
function jA() {
  if (tx) return Np;
  tx = 1;
  function e(t, r) {
    return t.has(r);
  }
  return (Np = e), Np;
}
var Rp, rx;
function MA() {
  if (rx) return Rp;
  rx = 1;
  var e = CA(),
    t = kA(),
    r = jA(),
    n = 1,
    o = 2;
  function u(l, c, f, p, v, h) {
    var g = f & n,
      w = l.length,
      S = c.length;
    if (w != S && !(g && S > w)) return !1;
    var x = h.get(l),
      b = h.get(c);
    if (x && b) return x == c && b == l;
    var T = -1,
      A = !0,
      E = f & o ? new e() : void 0;
    for (h.set(l, c), h.set(c, l); ++T < w; ) {
      var C = l[T],
        _ = c[T];
      if (p) var P = g ? p(_, C, T, c, l, h) : p(C, _, T, l, c, h);
      if (P !== void 0) {
        if (P) continue;
        A = !1;
        break;
      }
      if (E) {
        if (
          !t(c, function (k, I) {
            if (!r(E, I) && (C === k || v(C, k, f, p, h))) return E.push(I);
          })
        ) {
          A = !1;
          break;
        }
      } else if (!(C === _ || v(C, _, f, p, h))) {
        A = !1;
        break;
      }
    }
    return h.delete(l), h.delete(c), A;
  }
  return (Rp = u), Rp;
}
var $p, nx;
function k2() {
  if (nx) return $p;
  nx = 1;
  var e = $r(),
    t = e.Uint8Array;
  return ($p = t), $p;
}
var Dp, ix;
function j2() {
  if (ix) return Dp;
  ix = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (o, u) {
        n[++r] = [u, o];
      }),
      n
    );
  }
  return (Dp = e), Dp;
}
var Lp, ax;
function qm() {
  if (ax) return Lp;
  ax = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (o) {
        n[++r] = o;
      }),
      n
    );
  }
  return (Lp = e), Lp;
}
var qp, ox;
function M2() {
  if (ox) return qp;
  ox = 1;
  var e = ou(),
    t = k2(),
    r = Em(),
    n = MA(),
    o = j2(),
    u = qm(),
    l = 1,
    c = 2,
    f = "[object Boolean]",
    p = "[object Date]",
    v = "[object Error]",
    h = "[object Map]",
    g = "[object Number]",
    w = "[object RegExp]",
    S = "[object Set]",
    x = "[object String]",
    b = "[object Symbol]",
    T = "[object ArrayBuffer]",
    A = "[object DataView]",
    E = e ? e.prototype : void 0,
    C = E ? E.valueOf : void 0;
  function _(P, k, I, D, G, R, B) {
    switch (I) {
      case A:
        if (P.byteLength != k.byteLength || P.byteOffset != k.byteOffset)
          return !1;
        (P = P.buffer), (k = k.buffer);
      case T:
        return !(P.byteLength != k.byteLength || !R(new t(P), new t(k)));
      case f:
      case p:
      case g:
        return r(+P, +k);
      case v:
        return P.name == k.name && P.message == k.message;
      case w:
      case x:
        return P == k + "";
      case h:
        var z = o;
      case S:
        var V = D & l;
        if ((z || (z = u), P.size != k.size && !V)) return !1;
        var K = B.get(P);
        if (K) return K == k;
        (D |= c), B.set(P, k);
        var Z = n(z(P), z(k), D, G, R, B);
        return B.delete(P), Z;
      case b:
        if (C) return C.call(P) == C.call(k);
    }
    return !1;
  }
  return (qp = _), qp;
}
var Bp, ux;
function IA() {
  if (ux) return Bp;
  ux = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, u = t.length; ++n < o; ) t[u + n] = r[n];
    return t;
  }
  return (Bp = e), Bp;
}
var Fp, lx;
function I2() {
  if (lx) return Fp;
  lx = 1;
  var e = IA(),
    t = Ft();
  function r(n, o, u) {
    var l = o(n);
    return t(n) ? l : e(l, u(n));
  }
  return (Fp = r), Fp;
}
var zp, sx;
function N2() {
  if (sx) return zp;
  sx = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, u = 0, l = []; ++n < o; ) {
      var c = t[n];
      r(c, n, t) && (l[u++] = c);
    }
    return l;
  }
  return (zp = e), zp;
}
var Up, cx;
function R2() {
  if (cx) return Up;
  cx = 1;
  function e() {
    return [];
  }
  return (Up = e), Up;
}
var Wp, fx;
function $2() {
  if (fx) return Wp;
  fx = 1;
  var e = N2(),
    t = R2(),
    r = Object.prototype,
    n = r.propertyIsEnumerable,
    o = Object.getOwnPropertySymbols,
    u = o
      ? function (l) {
          return l == null
            ? []
            : ((l = Object(l)),
              e(o(l), function (c) {
                return n.call(l, c);
              }));
        }
      : t;
  return (Wp = u), Wp;
}
var Hp, dx;
function D2() {
  if (dx) return Hp;
  dx = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; ) o[n] = r(n);
    return o;
  }
  return (Hp = e), Hp;
}
var Gp, px;
function L2() {
  if (px) return Gp;
  px = 1;
  var e = Jr(),
    t = en(),
    r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return (Gp = n), Gp;
}
var Kp, hx;
function Bm() {
  if (hx) return Kp;
  hx = 1;
  var e = L2(),
    t = en(),
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = r.propertyIsEnumerable,
    u = e(
      (function () {
        return arguments;
      })()
    )
      ? e
      : function (l) {
          return t(l) && n.call(l, "callee") && !o.call(l, "callee");
        };
  return (Kp = u), Kp;
}
var go = { exports: {} },
  Vp,
  vx;
function q2() {
  if (vx) return Vp;
  vx = 1;
  function e() {
    return !1;
  }
  return (Vp = e), Vp;
}
go.exports;
var yx;
function NA() {
  return (
    yx ||
      ((yx = 1),
      (function (e, t) {
        var r = $r(),
          n = q2(),
          o = t && !t.nodeType && t,
          u = o && !0 && e && !e.nodeType && e,
          l = u && u.exports === o,
          c = l ? r.Buffer : void 0,
          f = c ? c.isBuffer : void 0,
          p = f || n;
        e.exports = p;
      })(go, go.exports)),
    go.exports
  );
}
var Xp, mx;
function Fm() {
  if (mx) return Xp;
  mx = 1;
  var e = 9007199254740991,
    t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var u = typeof n;
    return (
      (o = o ?? e),
      !!o &&
        (u == "number" || (u != "symbol" && t.test(n))) &&
        n > -1 &&
        n % 1 == 0 &&
        n < o
    );
  }
  return (Xp = r), Xp;
}
var Yp, gx;
function zm() {
  if (gx) return Yp;
  gx = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return (Yp = t), Yp;
}
var Qp, bx;
function B2() {
  if (bx) return Qp;
  bx = 1;
  var e = Jr(),
    t = zm(),
    r = en(),
    n = "[object Arguments]",
    o = "[object Array]",
    u = "[object Boolean]",
    l = "[object Date]",
    c = "[object Error]",
    f = "[object Function]",
    p = "[object Map]",
    v = "[object Number]",
    h = "[object Object]",
    g = "[object RegExp]",
    w = "[object Set]",
    S = "[object String]",
    x = "[object WeakMap]",
    b = "[object ArrayBuffer]",
    T = "[object DataView]",
    A = "[object Float32Array]",
    E = "[object Float64Array]",
    C = "[object Int8Array]",
    _ = "[object Int16Array]",
    P = "[object Int32Array]",
    k = "[object Uint8Array]",
    I = "[object Uint8ClampedArray]",
    D = "[object Uint16Array]",
    G = "[object Uint32Array]",
    R = {};
  (R[A] = R[E] = R[C] = R[_] = R[P] = R[k] = R[I] = R[D] = R[G] = !0),
    (R[n] =
      R[o] =
      R[b] =
      R[u] =
      R[T] =
      R[l] =
      R[c] =
      R[f] =
      R[p] =
      R[v] =
      R[h] =
      R[g] =
      R[w] =
      R[S] =
      R[x] =
        !1);
  function B(z) {
    return r(z) && t(z.length) && !!R[e(z)];
  }
  return (Qp = B), Qp;
}
var Zp, wx;
function RA() {
  if (wx) return Zp;
  wx = 1;
  function e(t) {
    return function (r) {
      return t(r);
    };
  }
  return (Zp = e), Zp;
}
var bo = { exports: {} };
bo.exports;
var xx;
function F2() {
  return (
    xx ||
      ((xx = 1),
      (function (e, t) {
        var r = tA(),
          n = t && !t.nodeType && t,
          o = n && !0 && e && !e.nodeType && e,
          u = o && o.exports === n,
          l = u && r.process,
          c = (function () {
            try {
              var f = o && o.require && o.require("util").types;
              return f || (l && l.binding && l.binding("util"));
            } catch {}
          })();
        e.exports = c;
      })(bo, bo.exports)),
    bo.exports
  );
}
var Jp, Sx;
function $A() {
  if (Sx) return Jp;
  Sx = 1;
  var e = B2(),
    t = RA(),
    r = F2(),
    n = r && r.isTypedArray,
    o = n ? t(n) : e;
  return (Jp = o), Jp;
}
var eh, _x;
function z2() {
  if (_x) return eh;
  _x = 1;
  var e = D2(),
    t = Bm(),
    r = Ft(),
    n = NA(),
    o = Fm(),
    u = $A(),
    l = Object.prototype,
    c = l.hasOwnProperty;
  function f(p, v) {
    var h = r(p),
      g = !h && t(p),
      w = !h && !g && n(p),
      S = !h && !g && !w && u(p),
      x = h || g || w || S,
      b = x ? e(p.length, String) : [],
      T = b.length;
    for (var A in p)
      (v || c.call(p, A)) &&
        !(
          x &&
          (A == "length" ||
            (w && (A == "offset" || A == "parent")) ||
            (S && (A == "buffer" || A == "byteLength" || A == "byteOffset")) ||
            o(A, T))
        ) &&
        b.push(A);
    return b;
  }
  return (eh = f), eh;
}
var th, Ox;
function U2() {
  if (Ox) return th;
  Ox = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor,
      o = (typeof n == "function" && n.prototype) || e;
    return r === o;
  }
  return (th = t), th;
}
var rh, Px;
function DA() {
  if (Px) return rh;
  Px = 1;
  function e(t, r) {
    return function (n) {
      return t(r(n));
    };
  }
  return (rh = e), rh;
}
var nh, Ax;
function W2() {
  if (Ax) return nh;
  Ax = 1;
  var e = DA(),
    t = e(Object.keys, Object);
  return (nh = t), nh;
}
var ih, Ex;
function H2() {
  if (Ex) return ih;
  Ex = 1;
  var e = U2(),
    t = W2(),
    r = Object.prototype,
    n = r.hasOwnProperty;
  function o(u) {
    if (!e(u)) return t(u);
    var l = [];
    for (var c in Object(u)) n.call(u, c) && c != "constructor" && l.push(c);
    return l;
  }
  return (ih = o), ih;
}
var ah, Tx;
function su() {
  if (Tx) return ah;
  Tx = 1;
  var e = Am(),
    t = zm();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return (ah = r), ah;
}
var oh, Cx;
function Us() {
  if (Cx) return oh;
  Cx = 1;
  var e = z2(),
    t = H2(),
    r = su();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return (oh = n), oh;
}
var uh, kx;
function G2() {
  if (kx) return uh;
  kx = 1;
  var e = I2(),
    t = $2(),
    r = Us();
  function n(o) {
    return e(o, r, t);
  }
  return (uh = n), uh;
}
var lh, jx;
function K2() {
  if (jx) return lh;
  jx = 1;
  var e = G2(),
    t = 1,
    r = Object.prototype,
    n = r.hasOwnProperty;
  function o(u, l, c, f, p, v) {
    var h = c & t,
      g = e(u),
      w = g.length,
      S = e(l),
      x = S.length;
    if (w != x && !h) return !1;
    for (var b = w; b--; ) {
      var T = g[b];
      if (!(h ? T in l : n.call(l, T))) return !1;
    }
    var A = v.get(u),
      E = v.get(l);
    if (A && E) return A == l && E == u;
    var C = !0;
    v.set(u, l), v.set(l, u);
    for (var _ = h; ++b < w; ) {
      T = g[b];
      var P = u[T],
        k = l[T];
      if (f) var I = h ? f(k, P, T, l, u, v) : f(P, k, T, u, l, v);
      if (!(I === void 0 ? P === k || p(P, k, c, f, v) : I)) {
        C = !1;
        break;
      }
      _ || (_ = T == "constructor");
    }
    if (C && !_) {
      var D = u.constructor,
        G = l.constructor;
      D != G &&
        "constructor" in u &&
        "constructor" in l &&
        !(
          typeof D == "function" &&
          D instanceof D &&
          typeof G == "function" &&
          G instanceof G
        ) &&
        (C = !1);
    }
    return v.delete(u), v.delete(l), C;
  }
  return (lh = o), lh;
}
var sh, Mx;
function V2() {
  if (Mx) return sh;
  Mx = 1;
  var e = si(),
    t = $r(),
    r = e(t, "DataView");
  return (sh = r), sh;
}
var ch, Ix;
function X2() {
  if (Ix) return ch;
  Ix = 1;
  var e = si(),
    t = $r(),
    r = e(t, "Promise");
  return (ch = r), ch;
}
var fh, Nx;
function LA() {
  if (Nx) return fh;
  Nx = 1;
  var e = si(),
    t = $r(),
    r = e(t, "Set");
  return (fh = r), fh;
}
var dh, Rx;
function Y2() {
  if (Rx) return dh;
  Rx = 1;
  var e = si(),
    t = $r(),
    r = e(t, "WeakMap");
  return (dh = r), dh;
}
var ph, $x;
function Q2() {
  if ($x) return ph;
  $x = 1;
  var e = V2(),
    t = Tm(),
    r = X2(),
    n = LA(),
    o = Y2(),
    u = Jr(),
    l = rA(),
    c = "[object Map]",
    f = "[object Object]",
    p = "[object Promise]",
    v = "[object Set]",
    h = "[object WeakMap]",
    g = "[object DataView]",
    w = l(e),
    S = l(t),
    x = l(r),
    b = l(n),
    T = l(o),
    A = u;
  return (
    ((e && A(new e(new ArrayBuffer(1))) != g) ||
      (t && A(new t()) != c) ||
      (r && A(r.resolve()) != p) ||
      (n && A(new n()) != v) ||
      (o && A(new o()) != h)) &&
      (A = function (E) {
        var C = u(E),
          _ = C == f ? E.constructor : void 0,
          P = _ ? l(_) : "";
        if (P)
          switch (P) {
            case w:
              return g;
            case S:
              return c;
            case x:
              return p;
            case b:
              return v;
            case T:
              return h;
          }
        return C;
      }),
    (ph = A),
    ph
  );
}
var hh, Dx;
function Z2() {
  if (Dx) return hh;
  Dx = 1;
  var e = TA(),
    t = MA(),
    r = M2(),
    n = K2(),
    o = Q2(),
    u = Ft(),
    l = NA(),
    c = $A(),
    f = 1,
    p = "[object Arguments]",
    v = "[object Array]",
    h = "[object Object]",
    g = Object.prototype,
    w = g.hasOwnProperty;
  function S(x, b, T, A, E, C) {
    var _ = u(x),
      P = u(b),
      k = _ ? v : o(x),
      I = P ? v : o(b);
    (k = k == p ? h : k), (I = I == p ? h : I);
    var D = k == h,
      G = I == h,
      R = k == I;
    if (R && l(x)) {
      if (!l(b)) return !1;
      (_ = !0), (D = !1);
    }
    if (R && !D)
      return (
        C || (C = new e()),
        _ || c(x) ? t(x, b, T, A, E, C) : r(x, b, k, T, A, E, C)
      );
    if (!(T & f)) {
      var B = D && w.call(x, "__wrapped__"),
        z = G && w.call(b, "__wrapped__");
      if (B || z) {
        var V = B ? x.value() : x,
          K = z ? b.value() : b;
        return C || (C = new e()), E(V, K, T, A, C);
      }
    }
    return R ? (C || (C = new e()), n(x, b, T, A, E, C)) : !1;
  }
  return (hh = S), hh;
}
var vh, Lx;
function Um() {
  if (Lx) return vh;
  Lx = 1;
  var e = Z2(),
    t = en();
  function r(n, o, u, l, c) {
    return n === o
      ? !0
      : n == null || o == null || (!t(n) && !t(o))
      ? n !== n && o !== o
      : e(n, o, u, l, r, c);
  }
  return (vh = r), vh;
}
var yh, qx;
function J2() {
  if (qx) return yh;
  qx = 1;
  var e = TA(),
    t = Um(),
    r = 1,
    n = 2;
  function o(u, l, c, f) {
    var p = c.length,
      v = p,
      h = !f;
    if (u == null) return !v;
    for (u = Object(u); p--; ) {
      var g = c[p];
      if (h && g[2] ? g[1] !== u[g[0]] : !(g[0] in u)) return !1;
    }
    for (; ++p < v; ) {
      g = c[p];
      var w = g[0],
        S = u[w],
        x = g[1];
      if (h && g[2]) {
        if (S === void 0 && !(w in u)) return !1;
      } else {
        var b = new e();
        if (f) var T = f(S, x, w, u, l, b);
        if (!(T === void 0 ? t(x, S, r | n, f, b) : T)) return !1;
      }
    }
    return !0;
  }
  return (yh = o), yh;
}
var mh, Bx;
function qA() {
  if (Bx) return mh;
  Bx = 1;
  var e = Tn();
  function t(r) {
    return r === r && !e(r);
  }
  return (mh = t), mh;
}
var gh, Fx;
function eI() {
  if (Fx) return gh;
  Fx = 1;
  var e = qA(),
    t = Us();
  function r(n) {
    for (var o = t(n), u = o.length; u--; ) {
      var l = o[u],
        c = n[l];
      o[u] = [l, c, e(c)];
    }
    return o;
  }
  return (gh = r), gh;
}
var bh, zx;
function BA() {
  if (zx) return bh;
  zx = 1;
  function e(t, r) {
    return function (n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return (bh = e), bh;
}
var wh, Ux;
function tI() {
  if (Ux) return wh;
  Ux = 1;
  var e = J2(),
    t = eI(),
    r = BA();
  function n(o) {
    var u = t(o);
    return u.length == 1 && u[0][2]
      ? r(u[0][0], u[0][1])
      : function (l) {
          return l === o || e(l, o, u);
        };
  }
  return (wh = n), wh;
}
var xh, Wx;
function rI() {
  if (Wx) return xh;
  Wx = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return (xh = e), xh;
}
var Sh, Hx;
function nI() {
  if (Hx) return Sh;
  Hx = 1;
  var e = aA(),
    t = Bm(),
    r = Ft(),
    n = Fm(),
    o = zm(),
    u = Ds();
  function l(c, f, p) {
    f = e(f, c);
    for (var v = -1, h = f.length, g = !1; ++v < h; ) {
      var w = u(f[v]);
      if (!(g = c != null && p(c, w))) break;
      c = c[w];
    }
    return g || ++v != h
      ? g
      : ((h = c == null ? 0 : c.length),
        !!h && o(h) && n(w, h) && (r(c) || t(c)));
  }
  return (Sh = l), Sh;
}
var _h, Gx;
function iI() {
  if (Gx) return _h;
  Gx = 1;
  var e = rI(),
    t = nI();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return (_h = r), _h;
}
var Oh, Kx;
function aI() {
  if (Kx) return Oh;
  Kx = 1;
  var e = Um(),
    t = oA(),
    r = iI(),
    n = Pm(),
    o = qA(),
    u = BA(),
    l = Ds(),
    c = 1,
    f = 2;
  function p(v, h) {
    return n(v) && o(h)
      ? u(l(v), h)
      : function (g) {
          var w = t(g, v);
          return w === void 0 && w === h ? r(g, v) : e(h, w, c | f);
        };
  }
  return (Oh = p), Oh;
}
var Ph, Vx;
function ma() {
  if (Vx) return Ph;
  Vx = 1;
  function e(t) {
    return t;
  }
  return (Ph = e), Ph;
}
var Ah, Xx;
function oI() {
  if (Xx) return Ah;
  Xx = 1;
  function e(t) {
    return function (r) {
      return r == null ? void 0 : r[t];
    };
  }
  return (Ah = e), Ah;
}
var Eh, Yx;
function uI() {
  if (Yx) return Eh;
  Yx = 1;
  var e = jm();
  function t(r) {
    return function (n) {
      return e(n, r);
    };
  }
  return (Eh = t), Eh;
}
var Th, Qx;
function lI() {
  if (Qx) return Th;
  Qx = 1;
  var e = oI(),
    t = uI(),
    r = Pm(),
    n = Ds();
  function o(u) {
    return r(u) ? e(n(u)) : t(u);
  }
  return (Th = o), Th;
}
var Ch, Zx;
function Cn() {
  if (Zx) return Ch;
  Zx = 1;
  var e = tI(),
    t = aI(),
    r = ma(),
    n = Ft(),
    o = lI();
  function u(l) {
    return typeof l == "function"
      ? l
      : l == null
      ? r
      : typeof l == "object"
      ? n(l)
        ? t(l[0], l[1])
        : e(l)
      : o(l);
  }
  return (Ch = u), Ch;
}
var kh, Jx;
function FA() {
  if (Jx) return kh;
  Jx = 1;
  function e(t, r, n, o) {
    for (var u = t.length, l = n + (o ? 1 : -1); o ? l-- : ++l < u; )
      if (r(t[l], l, t)) return l;
    return -1;
  }
  return (kh = e), kh;
}
var jh, eS;
function sI() {
  if (eS) return jh;
  eS = 1;
  function e(t) {
    return t !== t;
  }
  return (jh = e), jh;
}
var Mh, tS;
function cI() {
  if (tS) return Mh;
  tS = 1;
  function e(t, r, n) {
    for (var o = n - 1, u = t.length; ++o < u; ) if (t[o] === r) return o;
    return -1;
  }
  return (Mh = e), Mh;
}
var Ih, rS;
function fI() {
  if (rS) return Ih;
  rS = 1;
  var e = FA(),
    t = sI(),
    r = cI();
  function n(o, u, l) {
    return u === u ? r(o, u, l) : e(o, t, l);
  }
  return (Ih = n), Ih;
}
var Nh, nS;
function dI() {
  if (nS) return Nh;
  nS = 1;
  var e = fI();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return (Nh = t), Nh;
}
var Rh, iS;
function pI() {
  if (iS) return Rh;
  iS = 1;
  function e(t, r, n) {
    for (var o = -1, u = t == null ? 0 : t.length; ++o < u; )
      if (n(r, t[o])) return !0;
    return !1;
  }
  return (Rh = e), Rh;
}
var $h, aS;
function hI() {
  if (aS) return $h;
  aS = 1;
  function e() {}
  return ($h = e), $h;
}
var Dh, oS;
function vI() {
  if (oS) return Dh;
  oS = 1;
  var e = LA(),
    t = hI(),
    r = qm(),
    n = 1 / 0,
    o =
      e && 1 / r(new e([, -0]))[1] == n
        ? function (u) {
            return new e(u);
          }
        : t;
  return (Dh = o), Dh;
}
var Lh, uS;
function yI() {
  if (uS) return Lh;
  uS = 1;
  var e = CA(),
    t = dI(),
    r = pI(),
    n = jA(),
    o = vI(),
    u = qm(),
    l = 200;
  function c(f, p, v) {
    var h = -1,
      g = t,
      w = f.length,
      S = !0,
      x = [],
      b = x;
    if (v) (S = !1), (g = r);
    else if (w >= l) {
      var T = p ? null : o(f);
      if (T) return u(T);
      (S = !1), (g = n), (b = new e());
    } else b = p ? [] : x;
    e: for (; ++h < w; ) {
      var A = f[h],
        E = p ? p(A) : A;
      if (((A = v || A !== 0 ? A : 0), S && E === E)) {
        for (var C = b.length; C--; ) if (b[C] === E) continue e;
        p && b.push(E), x.push(A);
      } else g(b, E, v) || (b !== x && b.push(E), x.push(A));
    }
    return x;
  }
  return (Lh = c), Lh;
}
var qh, lS;
function mI() {
  if (lS) return qh;
  lS = 1;
  var e = Cn(),
    t = yI();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return (qh = r), qh;
}
var gI = mI();
const sS = We(gI);
function zA(e, t, r) {
  return t === !0 ? sS(e, r) : Te(t) ? sS(e, t) : e;
}
function Yi(e) {
  "@babel/helpers - typeof";
  return (
    (Yi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yi(e)
  );
}
var bI = ["ref"];
function cS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cS(Object(r), !0).forEach(function (n) {
          Ws(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : cS(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, WA(n.key), n);
  }
}
function xI(e, t, r) {
  return (
    fS(e.prototype, t),
    fS(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function SI(e, t, r) {
  return (
    (t = Kl(t)),
    _I(e, UA() ? Reflect.construct(t, r, Kl(e).constructor) : t.apply(e, r))
  );
}
function _I(e, t) {
  if (t && (Yi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return OI(e);
}
function OI(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function UA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (UA = function () {
    return !!e;
  })();
}
function Kl(e) {
  return (
    (Kl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Kl(e)
  );
}
function PI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && xy(e, t);
}
function xy(e, t) {
  return (
    (xy = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    xy(e, t)
  );
}
function Ws(e, t, r) {
  return (
    (t = WA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function WA(e) {
  var t = AI(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function AI(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EI(e, t) {
  if (e == null) return {};
  var r = TI(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function TI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function CI(e) {
  return e.value;
}
function kI(e, t) {
  if (F.isValidElement(e)) return F.cloneElement(e, t);
  if (typeof e == "function") return F.createElement(e, t);
  t.ref;
  var r = EI(t, bI);
  return F.createElement(Lm, r);
}
var dS = 1,
  ri = (function (e) {
    function t() {
      var r;
      wI(this, t);
      for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++)
        o[u] = arguments[u];
      return (
        (r = SI(this, t, [].concat(o))),
        Ws(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      PI(t, e),
      xI(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                o = this.getBBox();
              o
                ? (Math.abs(o.width - this.lastBoundingBox.width) > dS ||
                    Math.abs(o.height - this.lastBoundingBox.height) > dS) &&
                  ((this.lastBoundingBox.width = o.width),
                  (this.lastBoundingBox.height = o.height),
                  n && n(o))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? Hr({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var o = this.props,
                u = o.layout,
                l = o.align,
                c = o.verticalAlign,
                f = o.margin,
                p = o.chartWidth,
                v = o.chartHeight,
                h,
                g;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) &&
                  (n.right === void 0 || n.right === null))
              )
                if (l === "center" && u === "vertical") {
                  var w = this.getBBoxSnapshot();
                  h = { left: ((p || 0) - w.width) / 2 };
                } else
                  h =
                    l === "right"
                      ? { right: (f && f.right) || 0 }
                      : { left: (f && f.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) &&
                  (n.bottom === void 0 || n.bottom === null))
              )
                if (c === "middle") {
                  var S = this.getBBoxSnapshot();
                  g = { top: ((v || 0) - S.height) / 2 };
                } else
                  g =
                    c === "bottom"
                      ? { bottom: (f && f.bottom) || 0 }
                      : { top: (f && f.top) || 0 };
              return Hr(Hr({}, h), g);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                o = this.props,
                u = o.content,
                l = o.width,
                c = o.height,
                f = o.wrapperStyle,
                p = o.payloadUniqBy,
                v = o.payload,
                h = Hr(
                  Hr(
                    {
                      position: "absolute",
                      width: l || "auto",
                      height: c || "auto",
                    },
                    this.getDefaultPosition(f)
                  ),
                  f
                );
              return F.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: h,
                  ref: function (w) {
                    n.wrapperNode = w;
                  },
                },
                kI(u, Hr(Hr({}, this.props), {}, { payload: zA(v, p, CI) }))
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, o) {
              var u = Hr(Hr({}, this.defaultProps), n.props),
                l = u.layout;
              return l === "vertical" && se(n.props.height)
                ? { height: n.props.height }
                : l === "horizontal"
                ? { width: n.props.width || o }
                : null;
            },
          },
        ]
      )
    );
  })(ue.PureComponent);
Ws(ri, "displayName", "Legend");
Ws(ri, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var Bh, pS;
function jI() {
  if (pS) return Bh;
  pS = 1;
  var e = ou(),
    t = Bm(),
    r = Ft(),
    n = e ? e.isConcatSpreadable : void 0;
  function o(u) {
    return r(u) || t(u) || !!(n && u && u[n]);
  }
  return (Bh = o), Bh;
}
var Fh, hS;
function HA() {
  if (hS) return Fh;
  hS = 1;
  var e = IA(),
    t = jI();
  function r(n, o, u, l, c) {
    var f = -1,
      p = n.length;
    for (u || (u = t), c || (c = []); ++f < p; ) {
      var v = n[f];
      o > 0 && u(v)
        ? o > 1
          ? r(v, o - 1, u, l, c)
          : e(c, v)
        : l || (c[c.length] = v);
    }
    return c;
  }
  return (Fh = r), Fh;
}
var zh, vS;
function MI() {
  if (vS) return zh;
  vS = 1;
  function e(t) {
    return function (r, n, o) {
      for (var u = -1, l = Object(r), c = o(r), f = c.length; f--; ) {
        var p = c[t ? f : ++u];
        if (n(l[p], p, l) === !1) break;
      }
      return r;
    };
  }
  return (zh = e), zh;
}
var Uh, yS;
function II() {
  if (yS) return Uh;
  yS = 1;
  var e = MI(),
    t = e();
  return (Uh = t), Uh;
}
var Wh, mS;
function GA() {
  if (mS) return Wh;
  mS = 1;
  var e = II(),
    t = Us();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return (Wh = r), Wh;
}
var Hh, gS;
function NI() {
  if (gS) return Hh;
  gS = 1;
  var e = su();
  function t(r, n) {
    return function (o, u) {
      if (o == null) return o;
      if (!e(o)) return r(o, u);
      for (
        var l = o.length, c = n ? l : -1, f = Object(o);
        (n ? c-- : ++c < l) && u(f[c], c, f) !== !1;

      );
      return o;
    };
  }
  return (Hh = t), Hh;
}
var Gh, bS;
function Wm() {
  if (bS) return Gh;
  bS = 1;
  var e = GA(),
    t = NI(),
    r = t(e);
  return (Gh = r), Gh;
}
var Kh, wS;
function KA() {
  if (wS) return Kh;
  wS = 1;
  var e = Wm(),
    t = su();
  function r(n, o) {
    var u = -1,
      l = t(n) ? Array(n.length) : [];
    return (
      e(n, function (c, f, p) {
        l[++u] = o(c, f, p);
      }),
      l
    );
  }
  return (Kh = r), Kh;
}
var Vh, xS;
function RI() {
  if (xS) return Vh;
  xS = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; ) t[n] = t[n].value;
    return t;
  }
  return (Vh = e), Vh;
}
var Xh, SS;
function $I() {
  if (SS) return Xh;
  SS = 1;
  var e = va();
  function t(r, n) {
    if (r !== n) {
      var o = r !== void 0,
        u = r === null,
        l = r === r,
        c = e(r),
        f = n !== void 0,
        p = n === null,
        v = n === n,
        h = e(n);
      if (
        (!p && !h && !c && r > n) ||
        (c && f && v && !p && !h) ||
        (u && f && v) ||
        (!o && v) ||
        !l
      )
        return 1;
      if (
        (!u && !c && !h && r < n) ||
        (h && o && l && !u && !c) ||
        (p && o && l) ||
        (!f && l) ||
        !v
      )
        return -1;
    }
    return 0;
  }
  return (Xh = t), Xh;
}
var Yh, _S;
function DI() {
  if (_S) return Yh;
  _S = 1;
  var e = $I();
  function t(r, n, o) {
    for (
      var u = -1, l = r.criteria, c = n.criteria, f = l.length, p = o.length;
      ++u < f;

    ) {
      var v = e(l[u], c[u]);
      if (v) {
        if (u >= p) return v;
        var h = o[u];
        return v * (h == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return (Yh = t), Yh;
}
var Qh, OS;
function LI() {
  if (OS) return Qh;
  OS = 1;
  var e = km(),
    t = jm(),
    r = Cn(),
    n = KA(),
    o = RI(),
    u = RA(),
    l = DI(),
    c = ma(),
    f = Ft();
  function p(v, h, g) {
    h.length
      ? (h = e(h, function (x) {
          return f(x)
            ? function (b) {
                return t(b, x.length === 1 ? x[0] : x);
              }
            : x;
        }))
      : (h = [c]);
    var w = -1;
    h = e(h, u(r));
    var S = n(v, function (x, b, T) {
      var A = e(h, function (E) {
        return E(x);
      });
      return { criteria: A, index: ++w, value: x };
    });
    return o(S, function (x, b) {
      return l(x, b, g);
    });
  }
  return (Qh = p), Qh;
}
var Zh, PS;
function qI() {
  if (PS) return Zh;
  PS = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return (Zh = e), Zh;
}
var Jh, AS;
function BI() {
  if (AS) return Jh;
  AS = 1;
  var e = qI(),
    t = Math.max;
  function r(n, o, u) {
    return (
      (o = t(o === void 0 ? n.length - 1 : o, 0)),
      function () {
        for (
          var l = arguments, c = -1, f = t(l.length - o, 0), p = Array(f);
          ++c < f;

        )
          p[c] = l[o + c];
        c = -1;
        for (var v = Array(o + 1); ++c < o; ) v[c] = l[c];
        return (v[o] = u(p)), e(n, this, v);
      }
    );
  }
  return (Jh = r), Jh;
}
var ev, ES;
function FI() {
  if (ES) return ev;
  ES = 1;
  function e(t) {
    return function () {
      return t;
    };
  }
  return (ev = e), ev;
}
var tv, TS;
function VA() {
  if (TS) return tv;
  TS = 1;
  var e = si(),
    t = (function () {
      try {
        var r = e(Object, "defineProperty");
        return r({}, "", {}), r;
      } catch {}
    })();
  return (tv = t), tv;
}
var rv, CS;
function zI() {
  if (CS) return rv;
  CS = 1;
  var e = FI(),
    t = VA(),
    r = ma(),
    n = t
      ? function (o, u) {
          return t(o, "toString", {
            configurable: !0,
            enumerable: !1,
            value: e(u),
            writable: !0,
          });
        }
      : r;
  return (rv = n), rv;
}
var nv, kS;
function UI() {
  if (kS) return nv;
  kS = 1;
  var e = 800,
    t = 16,
    r = Date.now;
  function n(o) {
    var u = 0,
      l = 0;
    return function () {
      var c = r(),
        f = t - (c - l);
      if (((l = c), f > 0)) {
        if (++u >= e) return arguments[0];
      } else u = 0;
      return o.apply(void 0, arguments);
    };
  }
  return (nv = n), nv;
}
var iv, jS;
function WI() {
  if (jS) return iv;
  jS = 1;
  var e = zI(),
    t = UI(),
    r = t(e);
  return (iv = r), iv;
}
var av, MS;
function HI() {
  if (MS) return av;
  MS = 1;
  var e = ma(),
    t = BI(),
    r = WI();
  function n(o, u) {
    return r(t(o, u, e), o + "");
  }
  return (av = n), av;
}
var ov, IS;
function Hs() {
  if (IS) return ov;
  IS = 1;
  var e = Em(),
    t = su(),
    r = Fm(),
    n = Tn();
  function o(u, l, c) {
    if (!n(c)) return !1;
    var f = typeof l;
    return (f == "number" ? t(c) && r(l, c.length) : f == "string" && l in c)
      ? e(c[l], u)
      : !1;
  }
  return (ov = o), ov;
}
var uv, NS;
function GI() {
  if (NS) return uv;
  NS = 1;
  var e = HA(),
    t = LI(),
    r = HI(),
    n = Hs(),
    o = r(function (u, l) {
      if (u == null) return [];
      var c = l.length;
      return (
        c > 1 && n(u, l[0], l[1])
          ? (l = [])
          : c > 2 && n(l[0], l[1], l[2]) && (l = [l[0]]),
        t(u, e(l, 1), [])
      );
    });
  return (uv = o), uv;
}
var KI = GI();
const Hm = We(KI);
function Eo(e) {
  "@babel/helpers - typeof";
  return (
    (Eo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Eo(e)
  );
}
function Sy() {
  return (
    (Sy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Sy.apply(this, arguments)
  );
}
function VI(e, t) {
  return ZI(e) || QI(e, t) || YI(e, t) || XI();
}
function XI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YI(e, t) {
  if (e) {
    if (typeof e == "string") return RS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return RS(e, t);
  }
}
function RS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QI(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function ZI(e) {
  if (Array.isArray(e)) return e;
}
function $S(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function lv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $S(Object(r), !0).forEach(function (n) {
          JI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : $S(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function JI(e, t, r) {
  return (
    (t = eN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function eN(e) {
  var t = tN(e, "string");
  return Eo(t) == "symbol" ? t : t + "";
}
function tN(e, t) {
  if (Eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rN(e) {
  return Array.isArray(e) && ct(e[0]) && ct(e[1]) ? e.join(" ~ ") : e;
}
var nN = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    o = t.contentStyle,
    u = o === void 0 ? {} : o,
    l = t.itemStyle,
    c = l === void 0 ? {} : l,
    f = t.labelStyle,
    p = f === void 0 ? {} : f,
    v = t.payload,
    h = t.formatter,
    g = t.itemSorter,
    w = t.wrapperClassName,
    S = t.labelClassName,
    x = t.label,
    b = t.labelFormatter,
    T = t.accessibilityLayer,
    A = T === void 0 ? !1 : T,
    E = function () {
      if (v && v.length) {
        var B = { padding: 0, margin: 0 },
          z = (g ? Hm(v, g) : v).map(function (V, K) {
            if (V.type === "none") return null;
            var Z = lv(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: V.color || "#000",
                },
                c
              ),
              J = V.formatter || h || rN,
              W = V.value,
              X = V.name,
              Q = W,
              M = X;
            if (Q != null && M != null) {
              var L = J(W, X, V, K, v);
              if (Array.isArray(L)) {
                var oe = VI(L, 2);
                (Q = oe[0]), (M = oe[1]);
              } else Q = L;
            }
            return F.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(K),
                style: Z,
              },
              ct(M)
                ? F.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    M
                  )
                : null,
              ct(M)
                ? F.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    n
                  )
                : null,
              F.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                Q
              ),
              F.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                V.unit || ""
              )
            );
          });
        return F.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: B },
          z
        );
      }
      return null;
    },
    C = lv(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      u
    ),
    _ = lv({ margin: 0 }, p),
    P = !$e(x),
    k = P ? x : "",
    I = De("recharts-default-tooltip", w),
    D = De("recharts-tooltip-label", S);
  P && b && v !== void 0 && v !== null && (k = b(x, v));
  var G = A ? { role: "status", "aria-live": "assertive" } : {};
  return F.createElement(
    "div",
    Sy({ className: I, style: C }, G),
    F.createElement(
      "p",
      { className: D, style: _ },
      F.isValidElement(k) ? k : "".concat(k)
    ),
    E()
  );
};
function To(e) {
  "@babel/helpers - typeof";
  return (
    (To =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    To(e)
  );
}
function Al(e, t, r) {
  return (
    (t = iN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function iN(e) {
  var t = aN(e, "string");
  return To(t) == "symbol" ? t : t + "";
}
function aN(e, t) {
  if (To(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (To(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lo = "recharts-tooltip-wrapper",
  oN = { visibility: "hidden" };
function uN(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return De(
    lo,
    Al(
      Al(
        Al(
          Al({}, "".concat(lo, "-right"), se(r) && t && se(t.x) && r >= t.x),
          "".concat(lo, "-left"),
          se(r) && t && se(t.x) && r < t.x
        ),
        "".concat(lo, "-bottom"),
        se(n) && t && se(t.y) && n >= t.y
      ),
      "".concat(lo, "-top"),
      se(n) && t && se(t.y) && n < t.y
    )
  );
}
function DS(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    o = e.offsetTopLeft,
    u = e.position,
    l = e.reverseDirection,
    c = e.tooltipDimension,
    f = e.viewBox,
    p = e.viewBoxDimension;
  if (u && se(u[n])) return u[n];
  var v = r[n] - c - o,
    h = r[n] + o;
  if (t[n]) return l[n] ? v : h;
  if (l[n]) {
    var g = v,
      w = f[n];
    return g < w ? Math.max(h, f[n]) : Math.max(v, f[n]);
  }
  var S = h + c,
    x = f[n] + p;
  return S > x ? Math.max(v, f[n]) : Math.max(h, f[n]);
}
function lN(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function sN(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    o = e.position,
    u = e.reverseDirection,
    l = e.tooltipBox,
    c = e.useTranslate3d,
    f = e.viewBox,
    p,
    v,
    h;
  return (
    l.height > 0 && l.width > 0 && r
      ? ((v = DS({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: o,
          reverseDirection: u,
          tooltipDimension: l.width,
          viewBox: f,
          viewBoxDimension: f.width,
        })),
        (h = DS({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: o,
          reverseDirection: u,
          tooltipDimension: l.height,
          viewBox: f,
          viewBoxDimension: f.height,
        })),
        (p = lN({ translateX: v, translateY: h, useTranslate3d: c })))
      : (p = oN),
    {
      cssProperties: p,
      cssClasses: uN({ translateX: v, translateY: h, coordinate: r }),
    }
  );
}
function Qi(e) {
  "@babel/helpers - typeof";
  return (
    (Qi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qi(e)
  );
}
function LS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? LS(Object(r), !0).forEach(function (n) {
          Oy(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : LS(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function cN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, YA(n.key), n);
  }
}
function dN(e, t, r) {
  return (
    fN(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function pN(e, t, r) {
  return (
    (t = Vl(t)),
    hN(e, XA() ? Reflect.construct(t, r, Vl(e).constructor) : t.apply(e, r))
  );
}
function hN(e, t) {
  if (t && (Qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return vN(e);
}
function vN(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function XA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (XA = function () {
    return !!e;
  })();
}
function Vl(e) {
  return (
    (Vl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Vl(e)
  );
}
function yN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && _y(e, t);
}
function _y(e, t) {
  return (
    (_y = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    _y(e, t)
  );
}
function Oy(e, t, r) {
  return (
    (t = YA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function YA(e) {
  var t = mN(e, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function mN(e, t) {
  if (Qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var BS = 1,
  gN = (function (e) {
    function t() {
      var r;
      cN(this, t);
      for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++)
        o[u] = arguments[u];
      return (
        (r = pN(this, t, [].concat(o))),
        Oy(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Oy(r, "handleKeyDown", function (l) {
          if (l.key === "Escape") {
            var c, f, p, v;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (c =
                    (f = r.props.coordinate) === null || f === void 0
                      ? void 0
                      : f.x) !== null && c !== void 0
                    ? c
                    : 0,
                y:
                  (p =
                    (v = r.props.coordinate) === null || v === void 0
                      ? void 0
                      : v.y) !== null && p !== void 0
                    ? p
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      yN(t, e),
      dN(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > BS ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > BS) &&
                this.setState({
                  lastBoundingBox: { width: n.width, height: n.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, o;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0
                  ? void 0
                  : n.x) !== this.state.dismissedAtCoordinate.x ||
                  ((o = this.props.coordinate) === null || o === void 0
                    ? void 0
                    : o.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              o = this.props,
              u = o.active,
              l = o.allowEscapeViewBox,
              c = o.animationDuration,
              f = o.animationEasing,
              p = o.children,
              v = o.coordinate,
              h = o.hasPayload,
              g = o.isAnimationActive,
              w = o.offset,
              S = o.position,
              x = o.reverseDirection,
              b = o.useTranslate3d,
              T = o.viewBox,
              A = o.wrapperStyle,
              E = sN({
                allowEscapeViewBox: l,
                coordinate: v,
                offsetTopLeft: w,
                position: S,
                reverseDirection: x,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: b,
                viewBox: T,
              }),
              C = E.cssClasses,
              _ = E.cssProperties,
              P = qS(
                qS(
                  {
                    transition:
                      g && u ? "transform ".concat(c, "ms ").concat(f) : void 0,
                  },
                  _
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && u && h ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                A
              );
            return F.createElement(
              "div",
              {
                tabIndex: -1,
                className: C,
                style: P,
                ref: function (I) {
                  n.wrapperNode = I;
                },
              },
              p
            );
          },
        },
      ])
    );
  })(ue.PureComponent),
  bN = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  On = {
    isSsr: bN(),
    get: function (t) {
      return On[t];
    },
    set: function (t, r) {
      if (typeof t == "string") On[t] = r;
      else {
        var n = Object.keys(t);
        n &&
          n.length &&
          n.forEach(function (o) {
            On[o] = t[o];
          });
      }
    },
  };
function Zi(e) {
  "@babel/helpers - typeof";
  return (
    (Zi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zi(e)
  );
}
function FS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function zS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? FS(Object(r), !0).forEach(function (n) {
          Gm(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : FS(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ZA(n.key), n);
  }
}
function SN(e, t, r) {
  return (
    xN(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _N(e, t, r) {
  return (
    (t = Xl(t)),
    ON(
      e,
      QA() ? Reflect.construct(t, r || [], Xl(e).constructor) : t.apply(e, r)
    )
  );
}
function ON(e, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return PN(e);
}
function PN(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function QA() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (QA = function () {
    return !!e;
  })();
}
function Xl(e) {
  return (
    (Xl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Xl(e)
  );
}
function AN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Py(e, t);
}
function Py(e, t) {
  return (
    (Py = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Py(e, t)
  );
}
function Gm(e, t, r) {
  return (
    (t = ZA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ZA(e) {
  var t = EN(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function EN(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TN(e) {
  return e.dataKey;
}
function CN(e, t) {
  return F.isValidElement(e)
    ? F.cloneElement(e, t)
    : typeof e == "function"
    ? F.createElement(e, t)
    : F.createElement(nN, t);
}
var kr = (function (e) {
  function t() {
    return wN(this, t), _N(this, t, arguments);
  }
  return (
    AN(t, e),
    SN(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            o = this.props,
            u = o.active,
            l = o.allowEscapeViewBox,
            c = o.animationDuration,
            f = o.animationEasing,
            p = o.content,
            v = o.coordinate,
            h = o.filterNull,
            g = o.isAnimationActive,
            w = o.offset,
            S = o.payload,
            x = o.payloadUniqBy,
            b = o.position,
            T = o.reverseDirection,
            A = o.useTranslate3d,
            E = o.viewBox,
            C = o.wrapperStyle,
            _ = S ?? [];
          h &&
            _.length &&
            (_ = zA(
              S.filter(function (k) {
                return (
                  k.value != null && (k.hide !== !0 || n.props.includeHidden)
                );
              }),
              x,
              TN
            ));
          var P = _.length > 0;
          return F.createElement(
            gN,
            {
              allowEscapeViewBox: l,
              animationDuration: c,
              animationEasing: f,
              isAnimationActive: g,
              active: u,
              coordinate: v,
              hasPayload: P,
              offset: w,
              position: b,
              reverseDirection: T,
              useTranslate3d: A,
              viewBox: E,
              wrapperStyle: C,
            },
            CN(p, zS(zS({}, this.props), {}, { payload: _ }))
          );
        },
      },
    ])
  );
})(ue.PureComponent);
Gm(kr, "displayName", "Tooltip");
Gm(kr, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !On.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var sv, US;
function kN() {
  if (US) return sv;
  US = 1;
  var e = $r(),
    t = function () {
      return e.Date.now();
    };
  return (sv = t), sv;
}
var cv, WS;
function jN() {
  if (WS) return cv;
  WS = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); );
    return n;
  }
  return (cv = t), cv;
}
var fv, HS;
function MN() {
  if (HS) return fv;
  HS = 1;
  var e = jN(),
    t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return (fv = r), fv;
}
var dv, GS;
function JA() {
  if (GS) return dv;
  GS = 1;
  var e = MN(),
    t = Tn(),
    r = va(),
    n = NaN,
    o = /^[-+]0x[0-9a-f]+$/i,
    u = /^0b[01]+$/i,
    l = /^0o[0-7]+$/i,
    c = parseInt;
  function f(p) {
    if (typeof p == "number") return p;
    if (r(p)) return n;
    if (t(p)) {
      var v = typeof p.valueOf == "function" ? p.valueOf() : p;
      p = t(v) ? v + "" : v;
    }
    if (typeof p != "string") return p === 0 ? p : +p;
    p = e(p);
    var h = u.test(p);
    return h || l.test(p) ? c(p.slice(2), h ? 2 : 8) : o.test(p) ? n : +p;
  }
  return (dv = f), dv;
}
var pv, KS;
function IN() {
  if (KS) return pv;
  KS = 1;
  var e = Tn(),
    t = kN(),
    r = JA(),
    n = "Expected a function",
    o = Math.max,
    u = Math.min;
  function l(c, f, p) {
    var v,
      h,
      g,
      w,
      S,
      x,
      b = 0,
      T = !1,
      A = !1,
      E = !0;
    if (typeof c != "function") throw new TypeError(n);
    (f = r(f) || 0),
      e(p) &&
        ((T = !!p.leading),
        (A = "maxWait" in p),
        (g = A ? o(r(p.maxWait) || 0, f) : g),
        (E = "trailing" in p ? !!p.trailing : E));
    function C(z) {
      var V = v,
        K = h;
      return (v = h = void 0), (b = z), (w = c.apply(K, V)), w;
    }
    function _(z) {
      return (b = z), (S = setTimeout(I, f)), T ? C(z) : w;
    }
    function P(z) {
      var V = z - x,
        K = z - b,
        Z = f - V;
      return A ? u(Z, g - K) : Z;
    }
    function k(z) {
      var V = z - x,
        K = z - b;
      return x === void 0 || V >= f || V < 0 || (A && K >= g);
    }
    function I() {
      var z = t();
      if (k(z)) return D(z);
      S = setTimeout(I, P(z));
    }
    function D(z) {
      return (S = void 0), E && v ? C(z) : ((v = h = void 0), w);
    }
    function G() {
      S !== void 0 && clearTimeout(S), (b = 0), (v = x = h = S = void 0);
    }
    function R() {
      return S === void 0 ? w : D(t());
    }
    function B() {
      var z = t(),
        V = k(z);
      if (((v = arguments), (h = this), (x = z), V)) {
        if (S === void 0) return _(x);
        if (A) return clearTimeout(S), (S = setTimeout(I, f)), C(x);
      }
      return S === void 0 && (S = setTimeout(I, f)), w;
    }
    return (B.cancel = G), (B.flush = R), B;
  }
  return (pv = l), pv;
}
var hv, VS;
function NN() {
  if (VS) return hv;
  VS = 1;
  var e = IN(),
    t = Tn(),
    r = "Expected a function";
  function n(o, u, l) {
    var c = !0,
      f = !0;
    if (typeof o != "function") throw new TypeError(r);
    return (
      t(l) &&
        ((c = "leading" in l ? !!l.leading : c),
        (f = "trailing" in l ? !!l.trailing : f)),
      e(o, u, { leading: c, maxWait: u, trailing: f })
    );
  }
  return (hv = n), hv;
}
var RN = NN();
const eE = We(RN);
function Co(e) {
  "@babel/helpers - typeof";
  return (
    (Co =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Co(e)
  );
}
function XS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? XS(Object(r), !0).forEach(function (n) {
          $N(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : XS(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function $N(e, t, r) {
  return (
    (t = DN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function DN(e) {
  var t = LN(e, "string");
  return Co(t) == "symbol" ? t : t + "";
}
function LN(e, t) {
  if (Co(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Co(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qN(e, t) {
  return UN(e) || zN(e, t) || FN(e, t) || BN();
}
function BN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FN(e, t) {
  if (e) {
    if (typeof e == "string") return YS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return YS(e, t);
  }
}
function YS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zN(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function UN(e) {
  if (Array.isArray(e)) return e;
}
var WN = ue.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      o = n === void 0 ? { width: -1, height: -1 } : n,
      u = e.width,
      l = u === void 0 ? "100%" : u,
      c = e.height,
      f = c === void 0 ? "100%" : c,
      p = e.minWidth,
      v = p === void 0 ? 0 : p,
      h = e.minHeight,
      g = e.maxHeight,
      w = e.children,
      S = e.debounce,
      x = S === void 0 ? 0 : S,
      b = e.id,
      T = e.className,
      A = e.onResize,
      E = e.style,
      C = E === void 0 ? {} : E,
      _ = ue.useRef(null),
      P = ue.useRef();
    (P.current = A),
      ue.useImperativeHandle(t, function () {
        return Object.defineProperty(_.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported."
              ),
              _.current
            );
          },
          configurable: !0,
        });
      });
    var k = ue.useState({ containerWidth: o.width, containerHeight: o.height }),
      I = qN(k, 2),
      D = I[0],
      G = I[1],
      R = ue.useCallback(function (z, V) {
        G(function (K) {
          var Z = Math.round(z),
            J = Math.round(V);
          return K.containerWidth === Z && K.containerHeight === J
            ? K
            : { containerWidth: Z, containerHeight: J };
        });
      }, []);
    ue.useEffect(
      function () {
        var z = function (X) {
          var Q,
            M = X[0].contentRect,
            L = M.width,
            oe = M.height;
          R(L, oe),
            (Q = P.current) === null || Q === void 0 || Q.call(P, L, oe);
        };
        x > 0 && (z = eE(z, x, { trailing: !0, leading: !1 }));
        var V = new ResizeObserver(z),
          K = _.current.getBoundingClientRect(),
          Z = K.width,
          J = K.height;
        return (
          R(Z, J),
          V.observe(_.current),
          function () {
            V.disconnect();
          }
        );
      },
      [R, x]
    );
    var B = ue.useMemo(
      function () {
        var z = D.containerWidth,
          V = D.containerHeight;
        if (z < 0 || V < 0) return null;
        ti(
          Qn(l) || Qn(f),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          l,
          f
        ),
          ti(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var K = Qn(l) ? z : l,
          Z = Qn(f) ? V : f;
        r &&
          r > 0 &&
          (K ? (Z = K / r) : Z && (K = Z * r), g && Z > g && (Z = g)),
          ti(
            K > 0 || Z > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            K,
            Z,
            l,
            f,
            v,
            h,
            r
          );
        var J = !Array.isArray(w) && Vr(w.type).endsWith("Chart");
        return F.Children.map(w, function (W) {
          return F.isValidElement(W)
            ? ue.cloneElement(
                W,
                El(
                  { width: K, height: Z },
                  J
                    ? {
                        style: El(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: Z,
                            maxWidth: K,
                          },
                          W.props.style
                        ),
                      }
                    : {}
                )
              )
            : W;
        });
      },
      [r, w, f, g, h, v, D, l]
    );
    return F.createElement(
      "div",
      {
        id: b ? "".concat(b) : void 0,
        className: De("recharts-responsive-container", T),
        style: El(
          El({}, C),
          {},
          { width: l, height: f, minWidth: v, minHeight: h, maxHeight: g }
        ),
        ref: _,
      },
      B
    );
  }),
  tE = function (t) {
    return null;
  };
tE.displayName = "Cell";
function ko(e) {
  "@babel/helpers - typeof";
  return (
    (ko =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ko(e)
  );
}
function QS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ay(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? QS(Object(r), !0).forEach(function (n) {
          HN(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : QS(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function HN(e, t, r) {
  return (
    (t = GN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function GN(e) {
  var t = KN(e, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function KN(e, t) {
  if (ko(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qi = { widthCache: {}, cacheCount: 0 },
  VN = 2e3,
  XN = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  ZS = "recharts_measurement_span";
function YN(e) {
  var t = Ay({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var xo = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || On.isSsr) return { width: 0, height: 0 };
    var n = YN(r),
      o = JSON.stringify({ text: t, copyStyle: n });
    if (qi.widthCache[o]) return qi.widthCache[o];
    try {
      var u = document.getElementById(ZS);
      u ||
        ((u = document.createElement("span")),
        u.setAttribute("id", ZS),
        u.setAttribute("aria-hidden", "true"),
        document.body.appendChild(u));
      var l = Ay(Ay({}, XN), n);
      Object.assign(u.style, l), (u.textContent = "".concat(t));
      var c = u.getBoundingClientRect(),
        f = { width: c.width, height: c.height };
      return (
        (qi.widthCache[o] = f),
        ++qi.cacheCount > VN && ((qi.cacheCount = 0), (qi.widthCache = {})),
        f
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  QN = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function jo(e) {
  "@babel/helpers - typeof";
  return (
    (jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jo(e)
  );
}
function Yl(e, t) {
  return tR(e) || eR(e, t) || JN(e, t) || ZN();
}
function ZN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JN(e, t) {
  if (e) {
    if (typeof e == "string") return JS(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return JS(e, t);
  }
}
function JS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eR(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        f = !1;
      } else
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function tR(e) {
  if (Array.isArray(e)) return e;
}
function rR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, iR(n.key), n);
  }
}
function nR(e, t, r) {
  return (
    e_(e.prototype, t),
    e_(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function iR(e) {
  var t = aR(e, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function aR(e, t) {
  if (jo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var t_ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  r_ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  oR = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  uR = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  rE = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  lR = Object.keys(rE),
  zi = "NaN";
function sR(e, t) {
  return e * rE[t];
}
var Tl = (function () {
  function e(t, r) {
    rR(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !oR.test(r) && ((this.num = NaN), (this.unit = "")),
      lR.includes(r) && ((this.num = sR(t, r)), (this.unit = "px"));
  }
  return nR(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            o = (n = uR.exec(r)) !== null && n !== void 0 ? n : [],
            u = Yl(o, 3),
            l = u[1],
            c = u[2];
          return new e(parseFloat(l), c ?? "");
        },
      },
    ]
  );
})();
function nE(e) {
  if (e.includes(zi)) return zi;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = t_.exec(t)) !== null && r !== void 0 ? r : [],
      o = Yl(n, 4),
      u = o[1],
      l = o[2],
      c = o[3],
      f = Tl.parse(u ?? ""),
      p = Tl.parse(c ?? ""),
      v = l === "*" ? f.multiply(p) : f.divide(p);
    if (v.isNaN()) return zi;
    t = t.replace(t_, v.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h,
      g = (h = r_.exec(t)) !== null && h !== void 0 ? h : [],
      w = Yl(g, 4),
      S = w[1],
      x = w[2],
      b = w[3],
      T = Tl.parse(S ?? ""),
      A = Tl.parse(b ?? ""),
      E = x === "+" ? T.add(A) : T.subtract(A);
    if (E.isNaN()) return zi;
    t = t.replace(r_, E.toString());
  }
  return t;
}
var n_ = /\(([^()]*)\)/;
function cR(e) {
  for (var t = e; t.includes("("); ) {
    var r = n_.exec(t),
      n = Yl(r, 2),
      o = n[1];
    t = t.replace(n_, nE(o));
  }
  return t;
}
function fR(e) {
  var t = e.replace(/\s+/g, "");
  return (t = cR(t)), (t = nE(t)), t;
}
function dR(e) {
  try {
    return fR(e);
  } catch {
    return zi;
  }
}
function vv(e) {
  var t = dR(e.slice(5, -1));
  return t === zi ? "" : t;
}
var pR = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  hR = ["dx", "dy", "angle", "className", "breakAll"];
function Ey() {
  return (
    (Ey = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ey.apply(this, arguments)
  );
}
function i_(e, t) {
  if (e == null) return {};
  var r = vR(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function vR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function a_(e, t) {
  return bR(e) || gR(e, t) || mR(e, t) || yR();
}
function yR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mR(e, t) {
  if (e) {
    if (typeof e == "string") return o_(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return o_(e, t);
  }
}
function o_(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gR(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        f = !1;
      } else
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function bR(e) {
  if (Array.isArray(e)) return e;
}
var iE = /[ \f\n\r\t\v\u2028\u2029]+/,
  aE = function (t) {
    var r = t.children,
      n = t.breakAll,
      o = t.style;
    try {
      var u = [];
      $e(r) ||
        (n ? (u = r.toString().split("")) : (u = r.toString().split(iE)));
      var l = u.map(function (f) {
          return { word: f, width: xo(f, o).width };
        }),
        c = n ? 0 : xo(" ", o).width;
      return { wordsWithComputedWidth: l, spaceWidth: c };
    } catch {
      return null;
    }
  },
  wR = function (t, r, n, o, u) {
    var l = t.maxLines,
      c = t.children,
      f = t.style,
      p = t.breakAll,
      v = se(l),
      h = c,
      g = function () {
        var K =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return K.reduce(function (Z, J) {
          var W = J.word,
            X = J.width,
            Q = Z[Z.length - 1];
          if (Q && (o == null || u || Q.width + X + n < Number(o)))
            Q.words.push(W), (Q.width += X + n);
          else {
            var M = { words: [W], width: X };
            Z.push(M);
          }
          return Z;
        }, []);
      },
      w = g(r),
      S = function (K) {
        return K.reduce(function (Z, J) {
          return Z.width > J.width ? Z : J;
        });
      };
    if (!v) return w;
    for (
      var x = "…",
        b = function (K) {
          var Z = h.slice(0, K),
            J = aE({
              breakAll: p,
              style: f,
              children: Z + x,
            }).wordsWithComputedWidth,
            W = g(J),
            X = W.length > l || S(W).width > Number(o);
          return [X, W];
        },
        T = 0,
        A = h.length - 1,
        E = 0,
        C;
      T <= A && E <= h.length - 1;

    ) {
      var _ = Math.floor((T + A) / 2),
        P = _ - 1,
        k = b(P),
        I = a_(k, 2),
        D = I[0],
        G = I[1],
        R = b(_),
        B = a_(R, 1),
        z = B[0];
      if ((!D && !z && (T = _ + 1), D && z && (A = _ - 1), !D && z)) {
        C = G;
        break;
      }
      E++;
    }
    return C || w;
  },
  u_ = function (t) {
    var r = $e(t) ? [] : t.toString().split(iE);
    return [{ words: r }];
  },
  xR = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      o = t.children,
      u = t.style,
      l = t.breakAll,
      c = t.maxLines;
    if ((r || n) && !On.isSsr) {
      var f,
        p,
        v = aE({ breakAll: l, children: o, style: u });
      if (v) {
        var h = v.wordsWithComputedWidth,
          g = v.spaceWidth;
        (f = h), (p = g);
      } else return u_(o);
      return wR(
        { breakAll: l, children: o, maxLines: c, style: u },
        f,
        p,
        r,
        n
      );
    }
    return u_(o);
  },
  l_ = "#808080",
  Ql = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      o = t.y,
      u = o === void 0 ? 0 : o,
      l = t.lineHeight,
      c = l === void 0 ? "1em" : l,
      f = t.capHeight,
      p = f === void 0 ? "0.71em" : f,
      v = t.scaleToFit,
      h = v === void 0 ? !1 : v,
      g = t.textAnchor,
      w = g === void 0 ? "start" : g,
      S = t.verticalAnchor,
      x = S === void 0 ? "end" : S,
      b = t.fill,
      T = b === void 0 ? l_ : b,
      A = i_(t, pR),
      E = ue.useMemo(
        function () {
          return xR({
            breakAll: A.breakAll,
            children: A.children,
            maxLines: A.maxLines,
            scaleToFit: h,
            style: A.style,
            width: A.width,
          });
        },
        [A.breakAll, A.children, A.maxLines, h, A.style, A.width]
      ),
      C = A.dx,
      _ = A.dy,
      P = A.angle,
      k = A.className,
      I = A.breakAll,
      D = i_(A, hR);
    if (!ct(n) || !ct(u)) return null;
    var G = n + (se(C) ? C : 0),
      R = u + (se(_) ? _ : 0),
      B;
    switch (x) {
      case "start":
        B = vv("calc(".concat(p, ")"));
        break;
      case "middle":
        B = vv(
          "calc("
            .concat((E.length - 1) / 2, " * -")
            .concat(c, " + (")
            .concat(p, " / 2))")
        );
        break;
      default:
        B = vv("calc(".concat(E.length - 1, " * -").concat(c, ")"));
        break;
    }
    var z = [];
    if (h) {
      var V = E[0].width,
        K = A.width;
      z.push("scale(".concat((se(K) ? K / V : 1) / V, ")"));
    }
    return (
      P && z.push("rotate(".concat(P, ", ").concat(G, ", ").concat(R, ")")),
      z.length && (D.transform = z.join(" ")),
      F.createElement(
        "text",
        Ey({}, Re(D, !0), {
          x: G,
          y: R,
          className: De("recharts-text", k),
          textAnchor: w,
          fill: T.includes("url") ? l_ : T,
        }),
        E.map(function (Z, J) {
          var W = Z.words.join(I ? "" : " ");
          return F.createElement(
            "tspan",
            { x: G, dy: J === 0 ? B : c, key: "".concat(W, "-").concat(J) },
            W
          );
        })
      )
    );
  };
function Pn(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function SR(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function Km(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = Pn), (r = (c, f) => Pn(e(c), f)), (n = (c, f) => e(c) - f))
    : ((t = e === Pn || e === SR ? e : _R), (r = e), (n = e));
  function o(c, f, p = 0, v = c.length) {
    if (p < v) {
      if (t(f, f) !== 0) return v;
      do {
        const h = (p + v) >>> 1;
        r(c[h], f) < 0 ? (p = h + 1) : (v = h);
      } while (p < v);
    }
    return p;
  }
  function u(c, f, p = 0, v = c.length) {
    if (p < v) {
      if (t(f, f) !== 0) return v;
      do {
        const h = (p + v) >>> 1;
        r(c[h], f) <= 0 ? (p = h + 1) : (v = h);
      } while (p < v);
    }
    return p;
  }
  function l(c, f, p = 0, v = c.length) {
    const h = o(c, f, p, v - 1);
    return h > p && n(c[h - 1], f) > -n(c[h], f) ? h - 1 : h;
  }
  return { left: o, center: l, right: u };
}
function _R() {
  return 0;
}
function oE(e) {
  return e === null ? NaN : +e;
}
function* OR(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const PR = Km(Pn),
  cu = PR.right;
Km(oE).center;
class s_ extends Map {
  constructor(t, r = TR) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [n, o] of t) this.set(n, o);
  }
  get(t) {
    return super.get(c_(this, t));
  }
  has(t) {
    return super.has(c_(this, t));
  }
  set(t, r) {
    return super.set(AR(this, t), r);
  }
  delete(t) {
    return super.delete(ER(this, t));
  }
}
function c_({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function AR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function ER({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && ((r = e.get(n)), e.delete(n)), r;
}
function TR(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function CR(e = Pn) {
  if (e === Pn) return uE;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function uE(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const kR = Math.sqrt(50),
  jR = Math.sqrt(10),
  MR = Math.sqrt(2);
function Zl(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    o = Math.floor(Math.log10(n)),
    u = n / Math.pow(10, o),
    l = u >= kR ? 10 : u >= jR ? 5 : u >= MR ? 2 : 1;
  let c, f, p;
  return (
    o < 0
      ? ((p = Math.pow(10, -o) / l),
        (c = Math.round(e * p)),
        (f = Math.round(t * p)),
        c / p < e && ++c,
        f / p > t && --f,
        (p = -p))
      : ((p = Math.pow(10, o) * l),
        (c = Math.round(e / p)),
        (f = Math.round(t / p)),
        c * p < e && ++c,
        f * p > t && --f),
    f < c && 0.5 <= r && r < 2 ? Zl(e, t, r * 2) : [c, f, p]
  );
}
function Ty(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [o, u, l] = n ? Zl(t, e, r) : Zl(e, t, r);
  if (!(u >= o)) return [];
  const c = u - o + 1,
    f = new Array(c);
  if (n)
    if (l < 0) for (let p = 0; p < c; ++p) f[p] = (u - p) / -l;
    else for (let p = 0; p < c; ++p) f[p] = (u - p) * l;
  else if (l < 0) for (let p = 0; p < c; ++p) f[p] = (o + p) / -l;
  else for (let p = 0; p < c; ++p) f[p] = (o + p) * l;
  return f;
}
function Cy(e, t, r) {
  return (t = +t), (e = +e), (r = +r), Zl(e, t, r)[2];
}
function ky(e, t, r) {
  (t = +t), (e = +e), (r = +r);
  const n = t < e,
    o = n ? Cy(t, e, r) : Cy(e, t, r);
  return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function f_(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function d_(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function lE(e, t, r = 0, n = 1 / 0, o) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (o = o === void 0 ? uE : CR(o); n > r; ) {
    if (n - r > 600) {
      const f = n - r + 1,
        p = t - r + 1,
        v = Math.log(f),
        h = 0.5 * Math.exp((2 * v) / 3),
        g = 0.5 * Math.sqrt((v * h * (f - h)) / f) * (p - f / 2 < 0 ? -1 : 1),
        w = Math.max(r, Math.floor(t - (p * h) / f + g)),
        S = Math.min(n, Math.floor(t + ((f - p) * h) / f + g));
      lE(e, t, w, S, o);
    }
    const u = e[t];
    let l = r,
      c = n;
    for (so(e, r, t), o(e[n], u) > 0 && so(e, r, n); l < c; ) {
      for (so(e, l, c), ++l, --c; o(e[l], u) < 0; ) ++l;
      for (; o(e[c], u) > 0; ) --c;
    }
    o(e[r], u) === 0 ? so(e, r, c) : (++c, so(e, c, n)),
      c <= t && (r = c + 1),
      t <= c && (n = c - 1);
  }
  return e;
}
function so(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function IR(e, t, r) {
  if (((e = Float64Array.from(OR(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return d_(e);
    if (t >= 1) return f_(e);
    var n,
      o = (n - 1) * t,
      u = Math.floor(o),
      l = f_(lE(e, u).subarray(0, u + 1)),
      c = d_(e.subarray(u + 1));
    return l + (c - l) * (o - u);
  }
}
function NR(e, t, r = oE) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      o = (n - 1) * t,
      u = Math.floor(o),
      l = +r(e[u], u, e),
      c = +r(e[u + 1], u + 1, e);
    return l + (c - l) * (o - u);
  }
}
function RR(e, t, r) {
  (e = +e),
    (t = +t),
    (r = (o = arguments.length) < 2 ? ((t = e), (e = 0), 1) : o < 3 ? 1 : +r);
  for (
    var n = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, u = new Array(o);
    ++n < o;

  )
    u[n] = e + n * r;
  return u;
}
function or(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function tn(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const jy = Symbol("implicit");
function Vm() {
  var e = new s_(),
    t = [],
    r = [],
    n = jy;
  function o(u) {
    let l = e.get(u);
    if (l === void 0) {
      if (n !== jy) return n;
      e.set(u, (l = t.push(u) - 1));
    }
    return r[l % r.length];
  }
  return (
    (o.domain = function (u) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new s_());
      for (const l of u) e.has(l) || e.set(l, t.push(l) - 1);
      return o;
    }),
    (o.range = function (u) {
      return arguments.length ? ((r = Array.from(u)), o) : r.slice();
    }),
    (o.unknown = function (u) {
      return arguments.length ? ((n = u), o) : n;
    }),
    (o.copy = function () {
      return Vm(t, r).unknown(n);
    }),
    or.apply(o, arguments),
    o
  );
}
function Mo() {
  var e = Vm().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    o = 1,
    u,
    l,
    c = !1,
    f = 0,
    p = 0,
    v = 0.5;
  delete e.unknown;
  function h() {
    var g = t().length,
      w = o < n,
      S = w ? o : n,
      x = w ? n : o;
    (u = (x - S) / Math.max(1, g - f + p * 2)),
      c && (u = Math.floor(u)),
      (S += (x - S - u * (g - f)) * v),
      (l = u * (1 - f)),
      c && ((S = Math.round(S)), (l = Math.round(l)));
    var b = RR(g).map(function (T) {
      return S + u * T;
    });
    return r(w ? b.reverse() : b);
  }
  return (
    (e.domain = function (g) {
      return arguments.length ? (t(g), h()) : t();
    }),
    (e.range = function (g) {
      return arguments.length
        ? (([n, o] = g), (n = +n), (o = +o), h())
        : [n, o];
    }),
    (e.rangeRound = function (g) {
      return ([n, o] = g), (n = +n), (o = +o), (c = !0), h();
    }),
    (e.bandwidth = function () {
      return l;
    }),
    (e.step = function () {
      return u;
    }),
    (e.round = function (g) {
      return arguments.length ? ((c = !!g), h()) : c;
    }),
    (e.padding = function (g) {
      return arguments.length ? ((f = Math.min(1, (p = +g))), h()) : f;
    }),
    (e.paddingInner = function (g) {
      return arguments.length ? ((f = Math.min(1, g)), h()) : f;
    }),
    (e.paddingOuter = function (g) {
      return arguments.length ? ((p = +g), h()) : p;
    }),
    (e.align = function (g) {
      return arguments.length ? ((v = Math.max(0, Math.min(1, g))), h()) : v;
    }),
    (e.copy = function () {
      return Mo(t(), [n, o]).round(c).paddingInner(f).paddingOuter(p).align(v);
    }),
    or.apply(h(), arguments)
  );
}
function sE(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return sE(t());
    }),
    e
  );
}
function So() {
  return sE(Mo.apply(null, arguments).paddingInner(1));
}
function Xm(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function cE(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function fu() {}
var Io = 0.7,
  Jl = 1 / Io,
  Gi = "\\s*([+-]?\\d+)\\s*",
  No = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Mr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  $R = /^#([0-9a-f]{3,8})$/,
  DR = new RegExp(`^rgb\\(${Gi},${Gi},${Gi}\\)$`),
  LR = new RegExp(`^rgb\\(${Mr},${Mr},${Mr}\\)$`),
  qR = new RegExp(`^rgba\\(${Gi},${Gi},${Gi},${No}\\)$`),
  BR = new RegExp(`^rgba\\(${Mr},${Mr},${Mr},${No}\\)$`),
  FR = new RegExp(`^hsl\\(${No},${Mr},${Mr}\\)$`),
  zR = new RegExp(`^hsla\\(${No},${Mr},${Mr},${No}\\)$`),
  p_ = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Xm(fu, Ro, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: h_,
  formatHex: h_,
  formatHex8: UR,
  formatHsl: WR,
  formatRgb: v_,
  toString: v_,
});
function h_() {
  return this.rgb().formatHex();
}
function UR() {
  return this.rgb().formatHex8();
}
function WR() {
  return fE(this).formatHsl();
}
function v_() {
  return this.rgb().formatRgb();
}
function Ro(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = $R.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? y_(t)
          : r === 3
          ? new Bt(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : r === 8
          ? Cl(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : r === 4
          ? Cl(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = DR.exec(e))
      ? new Bt(t[1], t[2], t[3], 1)
      : (t = LR.exec(e))
      ? new Bt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = qR.exec(e))
      ? Cl(t[1], t[2], t[3], t[4])
      : (t = BR.exec(e))
      ? Cl((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = FR.exec(e))
      ? b_(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = zR.exec(e))
      ? b_(t[1], t[2] / 100, t[3] / 100, t[4])
      : p_.hasOwnProperty(e)
      ? y_(p_[e])
      : e === "transparent"
      ? new Bt(NaN, NaN, NaN, 0)
      : null
  );
}
function y_(e) {
  return new Bt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Cl(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Bt(e, t, r, n);
}
function HR(e) {
  return (
    e instanceof fu || (e = Ro(e)),
    e ? ((e = e.rgb()), new Bt(e.r, e.g, e.b, e.opacity)) : new Bt()
  );
}
function My(e, t, r, n) {
  return arguments.length === 1 ? HR(e) : new Bt(e, t, r, n ?? 1);
}
function Bt(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
Xm(
  Bt,
  My,
  cE(fu, {
    brighter(e) {
      return (
        (e = e == null ? Jl : Math.pow(Jl, e)),
        new Bt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Io : Math.pow(Io, e)),
        new Bt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Bt(ni(this.r), ni(this.g), ni(this.b), es(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: m_,
    formatHex: m_,
    formatHex8: GR,
    formatRgb: g_,
    toString: g_,
  })
);
function m_() {
  return `#${Zn(this.r)}${Zn(this.g)}${Zn(this.b)}`;
}
function GR() {
  return `#${Zn(this.r)}${Zn(this.g)}${Zn(this.b)}${Zn(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function g_() {
  const e = es(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ni(this.r)}, ${ni(this.g)}, ${ni(
    this.b
  )}${e === 1 ? ")" : `, ${e})`}`;
}
function es(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ni(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Zn(e) {
  return (e = ni(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function b_(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new br(e, t, r, n)
  );
}
function fE(e) {
  if (e instanceof br) return new br(e.h, e.s, e.l, e.opacity);
  if ((e instanceof fu || (e = Ro(e)), !e)) return new br();
  if (e instanceof br) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    o = Math.min(t, r, n),
    u = Math.max(t, r, n),
    l = NaN,
    c = u - o,
    f = (u + o) / 2;
  return (
    c
      ? (t === u
          ? (l = (r - n) / c + (r < n) * 6)
          : r === u
          ? (l = (n - t) / c + 2)
          : (l = (t - r) / c + 4),
        (c /= f < 0.5 ? u + o : 2 - u - o),
        (l *= 60))
      : (c = f > 0 && f < 1 ? 0 : l),
    new br(l, c, f, e.opacity)
  );
}
function KR(e, t, r, n) {
  return arguments.length === 1 ? fE(e) : new br(e, t, r, n ?? 1);
}
function br(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
Xm(
  br,
  KR,
  cE(fu, {
    brighter(e) {
      return (
        (e = e == null ? Jl : Math.pow(Jl, e)),
        new br(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Io : Math.pow(Io, e)),
        new br(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        o = 2 * r - n;
      return new Bt(
        yv(e >= 240 ? e - 240 : e + 120, o, n),
        yv(e, o, n),
        yv(e < 120 ? e + 240 : e - 120, o, n),
        this.opacity
      );
    },
    clamp() {
      return new br(w_(this.h), kl(this.s), kl(this.l), es(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = es(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${w_(this.h)}, ${
        kl(this.s) * 100
      }%, ${kl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  })
);
function w_(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function kl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function yv(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
      ? r
      : e < 240
      ? t + ((r - t) * (240 - e)) / 60
      : t) * 255
  );
}
const Ym = (e) => () => e;
function VR(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function XR(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function YR(e) {
  return (e = +e) == 1
    ? dE
    : function (t, r) {
        return r - t ? XR(t, r, e) : Ym(isNaN(t) ? r : t);
      };
}
function dE(e, t) {
  var r = t - e;
  return r ? VR(e, r) : Ym(isNaN(e) ? t : e);
}
const x_ = (function e(t) {
  var r = YR(t);
  function n(o, u) {
    var l = r((o = My(o)).r, (u = My(u)).r),
      c = r(o.g, u.g),
      f = r(o.b, u.b),
      p = dE(o.opacity, u.opacity);
    return function (v) {
      return (
        (o.r = l(v)), (o.g = c(v)), (o.b = f(v)), (o.opacity = p(v)), o + ""
      );
    };
  }
  return (n.gamma = e), n;
})(1);
function QR(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    o;
  return function (u) {
    for (o = 0; o < r; ++o) n[o] = e[o] * (1 - u) + t[o] * u;
    return n;
  };
}
function ZR(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function JR(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    o = new Array(n),
    u = new Array(r),
    l;
  for (l = 0; l < n; ++l) o[l] = ga(e[l], t[l]);
  for (; l < r; ++l) u[l] = t[l];
  return function (c) {
    for (l = 0; l < n; ++l) u[l] = o[l](c);
    return u;
  };
}
function e$(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}
function ts(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function t$(e, t) {
  var r = {},
    n = {},
    o;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (o in t) o in e ? (r[o] = ga(e[o], t[o])) : (n[o] = t[o]);
  return function (u) {
    for (o in r) n[o] = r[o](u);
    return n;
  };
}
var Iy = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  mv = new RegExp(Iy.source, "g");
function r$(e) {
  return function () {
    return e;
  };
}
function n$(e) {
  return function (t) {
    return e(t) + "";
  };
}
function i$(e, t) {
  var r = (Iy.lastIndex = mv.lastIndex = 0),
    n,
    o,
    u,
    l = -1,
    c = [],
    f = [];
  for (e = e + "", t = t + ""; (n = Iy.exec(e)) && (o = mv.exec(t)); )
    (u = o.index) > r &&
      ((u = t.slice(r, u)), c[l] ? (c[l] += u) : (c[++l] = u)),
      (n = n[0]) === (o = o[0])
        ? c[l]
          ? (c[l] += o)
          : (c[++l] = o)
        : ((c[++l] = null), f.push({ i: l, x: ts(n, o) })),
      (r = mv.lastIndex);
  return (
    r < t.length && ((u = t.slice(r)), c[l] ? (c[l] += u) : (c[++l] = u)),
    c.length < 2
      ? f[0]
        ? n$(f[0].x)
        : r$(t)
      : ((t = f.length),
        function (p) {
          for (var v = 0, h; v < t; ++v) c[(h = f[v]).i] = h.x(p);
          return c.join("");
        })
  );
}
function ga(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? Ym(t)
    : (r === "number"
        ? ts
        : r === "string"
        ? (n = Ro(t))
          ? ((t = n), x_)
          : i$
        : t instanceof Ro
        ? x_
        : t instanceof Date
        ? e$
        : ZR(t)
        ? QR
        : Array.isArray(t)
        ? JR
        : (typeof t.valueOf != "function" && typeof t.toString != "function") ||
          isNaN(t)
        ? t$
        : ts)(e, t);
}
function Qm(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function a$(e, t) {
  t === void 0 && ((t = e), (e = ga));
  for (
    var r = 0, n = t.length - 1, o = t[0], u = new Array(n < 0 ? 0 : n);
    r < n;

  )
    u[r] = e(o, (o = t[++r]));
  return function (l) {
    var c = Math.max(0, Math.min(n - 1, Math.floor((l *= n))));
    return u[c](l - c);
  };
}
function o$(e) {
  return function () {
    return e;
  };
}
function rs(e) {
  return +e;
}
var S_ = [0, 1];
function Mt(e) {
  return e;
}
function Ny(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : o$(isNaN(t) ? NaN : 0.5);
}
function u$(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function l$(e, t, r) {
  var n = e[0],
    o = e[1],
    u = t[0],
    l = t[1];
  return (
    o < n ? ((n = Ny(o, n)), (u = r(l, u))) : ((n = Ny(n, o)), (u = r(u, l))),
    function (c) {
      return u(n(c));
    }
  );
}
function s$(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    o = new Array(n),
    u = new Array(n),
    l = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++l < n;

  )
    (o[l] = Ny(e[l], e[l + 1])), (u[l] = r(t[l], t[l + 1]));
  return function (c) {
    var f = cu(e, c, 1, n) - 1;
    return u[f](o[f](c));
  };
}
function du(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Gs() {
  var e = S_,
    t = S_,
    r = ga,
    n,
    o,
    u,
    l = Mt,
    c,
    f,
    p;
  function v() {
    var g = Math.min(e.length, t.length);
    return (
      l !== Mt && (l = u$(e[0], e[g - 1])),
      (c = g > 2 ? s$ : l$),
      (f = p = null),
      h
    );
  }
  function h(g) {
    return g == null || isNaN((g = +g))
      ? u
      : (f || (f = c(e.map(n), t, r)))(n(l(g)));
  }
  return (
    (h.invert = function (g) {
      return l(o((p || (p = c(t, e.map(n), ts)))(g)));
    }),
    (h.domain = function (g) {
      return arguments.length ? ((e = Array.from(g, rs)), v()) : e.slice();
    }),
    (h.range = function (g) {
      return arguments.length ? ((t = Array.from(g)), v()) : t.slice();
    }),
    (h.rangeRound = function (g) {
      return (t = Array.from(g)), (r = Qm), v();
    }),
    (h.clamp = function (g) {
      return arguments.length ? ((l = g ? !0 : Mt), v()) : l !== Mt;
    }),
    (h.interpolate = function (g) {
      return arguments.length ? ((r = g), v()) : r;
    }),
    (h.unknown = function (g) {
      return arguments.length ? ((u = g), h) : u;
    }),
    function (g, w) {
      return (n = g), (o = w), v();
    }
  );
}
function Zm() {
  return Gs()(Mt, Mt);
}
function c$(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function ns(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function Ji(e) {
  return (e = ns(Math.abs(e))), e ? e[1] : NaN;
}
function f$(e, t) {
  return function (r, n) {
    for (
      var o = r.length, u = [], l = 0, c = e[0], f = 0;
      o > 0 &&
      c > 0 &&
      (f + c + 1 > n && (c = Math.max(1, n - f)),
      u.push(r.substring((o -= c), o + c)),
      !((f += c + 1) > n));

    )
      c = e[(l = (l + 1) % e.length)];
    return u.reverse().join(t);
  };
}
function d$(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var p$ =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $o(e) {
  if (!(t = p$.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Jm({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
$o.prototype = Jm.prototype;
function Jm(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
Jm.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function h$(e) {
  e: for (var t = e.length, r = 1, n = -1, o; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = o = r;
        break;
      case "0":
        n === 0 && (n = r), (o = r);
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(o + 1) : e;
}
var pE;
function v$(e, t) {
  var r = ns(e, t);
  if (!r) return e + "";
  var n = r[0],
    o = r[1],
    u = o - (pE = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1,
    l = n.length;
  return u === l
    ? n
    : u > l
    ? n + new Array(u - l + 1).join("0")
    : u > 0
    ? n.slice(0, u) + "." + n.slice(u)
    : "0." + new Array(1 - u).join("0") + ns(e, Math.max(0, t + u - 1))[0];
}
function __(e, t) {
  var r = ns(e, t);
  if (!r) return e + "";
  var n = r[0],
    o = r[1];
  return o < 0
    ? "0." + new Array(-o).join("0") + n
    : n.length > o + 1
    ? n.slice(0, o + 1) + "." + n.slice(o + 1)
    : n + new Array(o - n.length + 2).join("0");
}
const O_ = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: c$,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => __(e * 100, t),
  r: __,
  s: v$,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function P_(e) {
  return e;
}
var A_ = Array.prototype.map,
  E_ = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function y$(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? P_
        : f$(A_.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    o = e.decimal === void 0 ? "." : e.decimal + "",
    u = e.numerals === void 0 ? P_ : d$(A_.call(e.numerals, String)),
    l = e.percent === void 0 ? "%" : e.percent + "",
    c = e.minus === void 0 ? "−" : e.minus + "",
    f = e.nan === void 0 ? "NaN" : e.nan + "";
  function p(h) {
    h = $o(h);
    var g = h.fill,
      w = h.align,
      S = h.sign,
      x = h.symbol,
      b = h.zero,
      T = h.width,
      A = h.comma,
      E = h.precision,
      C = h.trim,
      _ = h.type;
    _ === "n"
      ? ((A = !0), (_ = "g"))
      : O_[_] || (E === void 0 && (E = 12), (C = !0), (_ = "g")),
      (b || (g === "0" && w === "=")) && ((b = !0), (g = "0"), (w = "="));
    var P =
        x === "$"
          ? r
          : x === "#" && /[boxX]/.test(_)
          ? "0" + _.toLowerCase()
          : "",
      k = x === "$" ? n : /[%p]/.test(_) ? l : "",
      I = O_[_],
      D = /[defgprs%]/.test(_);
    E =
      E === void 0
        ? 6
        : /[gprs]/.test(_)
        ? Math.max(1, Math.min(21, E))
        : Math.max(0, Math.min(20, E));
    function G(R) {
      var B = P,
        z = k,
        V,
        K,
        Z;
      if (_ === "c") (z = I(R) + z), (R = "");
      else {
        R = +R;
        var J = R < 0 || 1 / R < 0;
        if (
          ((R = isNaN(R) ? f : I(Math.abs(R), E)),
          C && (R = h$(R)),
          J && +R == 0 && S !== "+" && (J = !1),
          (B = (J ? (S === "(" ? S : c) : S === "-" || S === "(" ? "" : S) + B),
          (z =
            (_ === "s" ? E_[8 + pE / 3] : "") +
            z +
            (J && S === "(" ? ")" : "")),
          D)
        ) {
          for (V = -1, K = R.length; ++V < K; )
            if (((Z = R.charCodeAt(V)), 48 > Z || Z > 57)) {
              (z = (Z === 46 ? o + R.slice(V + 1) : R.slice(V)) + z),
                (R = R.slice(0, V));
              break;
            }
        }
      }
      A && !b && (R = t(R, 1 / 0));
      var W = B.length + R.length + z.length,
        X = W < T ? new Array(T - W + 1).join(g) : "";
      switch (
        (A && b && ((R = t(X + R, X.length ? T - z.length : 1 / 0)), (X = "")),
        w)
      ) {
        case "<":
          R = B + R + z + X;
          break;
        case "=":
          R = B + X + R + z;
          break;
        case "^":
          R = X.slice(0, (W = X.length >> 1)) + B + R + z + X.slice(W);
          break;
        default:
          R = X + B + R + z;
          break;
      }
      return u(R);
    }
    return (
      (G.toString = function () {
        return h + "";
      }),
      G
    );
  }
  function v(h, g) {
    var w = p(((h = $o(h)), (h.type = "f"), h)),
      S = Math.max(-8, Math.min(8, Math.floor(Ji(g) / 3))) * 3,
      x = Math.pow(10, -S),
      b = E_[8 + S / 3];
    return function (T) {
      return w(x * T) + b;
    };
  }
  return { format: p, formatPrefix: v };
}
var jl, eg, hE;
m$({ thousands: ",", grouping: [3], currency: ["$", ""] });
function m$(e) {
  return (jl = y$(e)), (eg = jl.format), (hE = jl.formatPrefix), jl;
}
function g$(e) {
  return Math.max(0, -Ji(Math.abs(e)));
}
function b$(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Ji(t) / 3))) * 3 - Ji(Math.abs(e))
  );
}
function w$(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Ji(t) - Ji(e)) + 1
  );
}
function vE(e, t, r, n) {
  var o = ky(e, t, r),
    u;
  switch (((n = $o(n ?? ",f")), n.type)) {
    case "s": {
      var l = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((u = b$(o, l))) && (n.precision = u),
        hE(n, l)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((u = w$(o, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = u - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((u = g$(o))) &&
        (n.precision = u - (n.type === "%") * 2);
      break;
    }
  }
  return eg(n);
}
function kn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return Ty(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var o = t();
      return vE(o[0], o[o.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        o = 0,
        u = n.length - 1,
        l = n[o],
        c = n[u],
        f,
        p,
        v = 10;
      for (
        c < l && ((p = l), (l = c), (c = p), (p = o), (o = u), (u = p));
        v-- > 0;

      ) {
        if (((p = Cy(l, c, r)), p === f)) return (n[o] = l), (n[u] = c), t(n);
        if (p > 0) (l = Math.floor(l / p) * p), (c = Math.ceil(c / p) * p);
        else if (p < 0) (l = Math.ceil(l * p) / p), (c = Math.floor(c * p) / p);
        else break;
        f = p;
      }
      return e;
    }),
    e
  );
}
function is() {
  var e = Zm();
  return (
    (e.copy = function () {
      return du(e, is());
    }),
    or.apply(e, arguments),
    kn(e)
  );
}
function yE(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, rs)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return yE(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, rs) : [0, 1]),
    kn(r)
  );
}
function mE(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    o = e[r],
    u = e[n],
    l;
  return (
    u < o && ((l = r), (r = n), (n = l), (l = o), (o = u), (u = l)),
    (e[r] = t.floor(o)),
    (e[n] = t.ceil(u)),
    e
  );
}
function T_(e) {
  return Math.log(e);
}
function C_(e) {
  return Math.exp(e);
}
function x$(e) {
  return -Math.log(-e);
}
function S$(e) {
  return -Math.exp(-e);
}
function _$(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function O$(e) {
  return e === 10 ? _$ : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function P$(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function k_(e) {
  return (t, r) => -e(-t, r);
}
function tg(e) {
  const t = e(T_, C_),
    r = t.domain;
  let n = 10,
    o,
    u;
  function l() {
    return (
      (o = P$(n)),
      (u = O$(n)),
      r()[0] < 0 ? ((o = k_(o)), (u = k_(u)), e(x$, S$)) : e(T_, C_),
      t
    );
  }
  return (
    (t.base = function (c) {
      return arguments.length ? ((n = +c), l()) : n;
    }),
    (t.domain = function (c) {
      return arguments.length ? (r(c), l()) : r();
    }),
    (t.ticks = (c) => {
      const f = r();
      let p = f[0],
        v = f[f.length - 1];
      const h = v < p;
      h && ([p, v] = [v, p]);
      let g = o(p),
        w = o(v),
        S,
        x;
      const b = c == null ? 10 : +c;
      let T = [];
      if (!(n % 1) && w - g < b) {
        if (((g = Math.floor(g)), (w = Math.ceil(w)), p > 0)) {
          for (; g <= w; ++g)
            for (S = 1; S < n; ++S)
              if (((x = g < 0 ? S / u(-g) : S * u(g)), !(x < p))) {
                if (x > v) break;
                T.push(x);
              }
        } else
          for (; g <= w; ++g)
            for (S = n - 1; S >= 1; --S)
              if (((x = g > 0 ? S / u(-g) : S * u(g)), !(x < p))) {
                if (x > v) break;
                T.push(x);
              }
        T.length * 2 < b && (T = Ty(p, v, b));
      } else T = Ty(g, w, Math.min(w - g, b)).map(u);
      return h ? T.reverse() : T;
    }),
    (t.tickFormat = (c, f) => {
      if (
        (c == null && (c = 10),
        f == null && (f = n === 10 ? "s" : ","),
        typeof f != "function" &&
          (!(n % 1) && (f = $o(f)).precision == null && (f.trim = !0),
          (f = eg(f))),
        c === 1 / 0)
      )
        return f;
      const p = Math.max(1, (n * c) / t.ticks().length);
      return (v) => {
        let h = v / u(Math.round(o(v)));
        return h * n < n - 0.5 && (h *= n), h <= p ? f(v) : "";
      };
    }),
    (t.nice = () =>
      r(
        mE(r(), {
          floor: (c) => u(Math.floor(o(c))),
          ceil: (c) => u(Math.ceil(o(c))),
        })
      )),
    t
  );
}
function gE() {
  const e = tg(Gs()).domain([1, 10]);
  return (e.copy = () => du(e, gE()).base(e.base())), or.apply(e, arguments), e;
}
function j_(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function M_(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function rg(e) {
  var t = 1,
    r = e(j_(t), M_(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(j_((t = +n)), M_(t)) : t;
    }),
    kn(r)
  );
}
function bE() {
  var e = rg(Gs());
  return (
    (e.copy = function () {
      return du(e, bE()).constant(e.constant());
    }),
    or.apply(e, arguments)
  );
}
function I_(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function A$(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function E$(e) {
  return e < 0 ? -e * e : e * e;
}
function ng(e) {
  var t = e(Mt, Mt),
    r = 1;
  function n() {
    return r === 1 ? e(Mt, Mt) : r === 0.5 ? e(A$, E$) : e(I_(r), I_(1 / r));
  }
  return (
    (t.exponent = function (o) {
      return arguments.length ? ((r = +o), n()) : r;
    }),
    kn(t)
  );
}
function ig() {
  var e = ng(Gs());
  return (
    (e.copy = function () {
      return du(e, ig()).exponent(e.exponent());
    }),
    or.apply(e, arguments),
    e
  );
}
function T$() {
  return ig.apply(null, arguments).exponent(0.5);
}
function N_(e) {
  return Math.sign(e) * e * e;
}
function C$(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function wE() {
  var e = Zm(),
    t = [0, 1],
    r = !1,
    n;
  function o(u) {
    var l = C$(e(u));
    return isNaN(l) ? n : r ? Math.round(l) : l;
  }
  return (
    (o.invert = function (u) {
      return e.invert(N_(u));
    }),
    (o.domain = function (u) {
      return arguments.length ? (e.domain(u), o) : e.domain();
    }),
    (o.range = function (u) {
      return arguments.length
        ? (e.range((t = Array.from(u, rs)).map(N_)), o)
        : t.slice();
    }),
    (o.rangeRound = function (u) {
      return o.range(u).round(!0);
    }),
    (o.round = function (u) {
      return arguments.length ? ((r = !!u), o) : r;
    }),
    (o.clamp = function (u) {
      return arguments.length ? (e.clamp(u), o) : e.clamp();
    }),
    (o.unknown = function (u) {
      return arguments.length ? ((n = u), o) : n;
    }),
    (o.copy = function () {
      return wE(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    or.apply(o, arguments),
    kn(o)
  );
}
function xE() {
  var e = [],
    t = [],
    r = [],
    n;
  function o() {
    var l = 0,
      c = Math.max(1, t.length);
    for (r = new Array(c - 1); ++l < c; ) r[l - 1] = NR(e, l / c);
    return u;
  }
  function u(l) {
    return l == null || isNaN((l = +l)) ? n : t[cu(r, l)];
  }
  return (
    (u.invertExtent = function (l) {
      var c = t.indexOf(l);
      return c < 0
        ? [NaN, NaN]
        : [c > 0 ? r[c - 1] : e[0], c < r.length ? r[c] : e[e.length - 1]];
    }),
    (u.domain = function (l) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let c of l) c != null && !isNaN((c = +c)) && e.push(c);
      return e.sort(Pn), o();
    }),
    (u.range = function (l) {
      return arguments.length ? ((t = Array.from(l)), o()) : t.slice();
    }),
    (u.unknown = function (l) {
      return arguments.length ? ((n = l), u) : n;
    }),
    (u.quantiles = function () {
      return r.slice();
    }),
    (u.copy = function () {
      return xE().domain(e).range(t).unknown(n);
    }),
    or.apply(u, arguments)
  );
}
function SE() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    o = [0, 1],
    u;
  function l(f) {
    return f != null && f <= f ? o[cu(n, f, 0, r)] : u;
  }
  function c() {
    var f = -1;
    for (n = new Array(r); ++f < r; )
      n[f] = ((f + 1) * t - (f - r) * e) / (r + 1);
    return l;
  }
  return (
    (l.domain = function (f) {
      return arguments.length
        ? (([e, t] = f), (e = +e), (t = +t), c())
        : [e, t];
    }),
    (l.range = function (f) {
      return arguments.length
        ? ((r = (o = Array.from(f)).length - 1), c())
        : o.slice();
    }),
    (l.invertExtent = function (f) {
      var p = o.indexOf(f);
      return p < 0
        ? [NaN, NaN]
        : p < 1
        ? [e, n[0]]
        : p >= r
        ? [n[r - 1], t]
        : [n[p - 1], n[p]];
    }),
    (l.unknown = function (f) {
      return arguments.length && (u = f), l;
    }),
    (l.thresholds = function () {
      return n.slice();
    }),
    (l.copy = function () {
      return SE().domain([e, t]).range(o).unknown(u);
    }),
    or.apply(kn(l), arguments)
  );
}
function _E() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function o(u) {
    return u != null && u <= u ? t[cu(e, u, 0, n)] : r;
  }
  return (
    (o.domain = function (u) {
      return arguments.length
        ? ((e = Array.from(u)), (n = Math.min(e.length, t.length - 1)), o)
        : e.slice();
    }),
    (o.range = function (u) {
      return arguments.length
        ? ((t = Array.from(u)), (n = Math.min(e.length, t.length - 1)), o)
        : t.slice();
    }),
    (o.invertExtent = function (u) {
      var l = t.indexOf(u);
      return [e[l - 1], e[l]];
    }),
    (o.unknown = function (u) {
      return arguments.length ? ((r = u), o) : r;
    }),
    (o.copy = function () {
      return _E().domain(e).range(t).unknown(r);
    }),
    or.apply(o, arguments)
  );
}
const gv = new Date(),
  bv = new Date();
function ft(e, t, r, n) {
  function o(u) {
    return e((u = arguments.length === 0 ? new Date() : new Date(+u))), u;
  }
  return (
    (o.floor = (u) => (e((u = new Date(+u))), u)),
    (o.ceil = (u) => (e((u = new Date(u - 1))), t(u, 1), e(u), u)),
    (o.round = (u) => {
      const l = o(u),
        c = o.ceil(u);
      return u - l < c - u ? l : c;
    }),
    (o.offset = (u, l) => (
      t((u = new Date(+u)), l == null ? 1 : Math.floor(l)), u
    )),
    (o.range = (u, l, c) => {
      const f = [];
      if (
        ((u = o.ceil(u)),
        (c = c == null ? 1 : Math.floor(c)),
        !(u < l) || !(c > 0))
      )
        return f;
      let p;
      do f.push((p = new Date(+u))), t(u, c), e(u);
      while (p < u && u < l);
      return f;
    }),
    (o.filter = (u) =>
      ft(
        (l) => {
          if (l >= l) for (; e(l), !u(l); ) l.setTime(l - 1);
        },
        (l, c) => {
          if (l >= l)
            if (c < 0) for (; ++c <= 0; ) for (; t(l, -1), !u(l); );
            else for (; --c >= 0; ) for (; t(l, 1), !u(l); );
        }
      )),
    r &&
      ((o.count = (u, l) => (
        gv.setTime(+u), bv.setTime(+l), e(gv), e(bv), Math.floor(r(gv, bv))
      )),
      (o.every = (u) => (
        (u = Math.floor(u)),
        !isFinite(u) || !(u > 0)
          ? null
          : u > 1
          ? o.filter(n ? (l) => n(l) % u === 0 : (l) => o.count(0, l) % u === 0)
          : o
      ))),
    o
  );
}
const as = ft(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e
);
as.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
    ? ft(
        (t) => {
          t.setTime(Math.floor(t / e) * e);
        },
        (t, r) => {
          t.setTime(+t + r * e);
        },
        (t, r) => (r - t) / e
      )
    : as
);
as.range;
const Gr = 1e3,
  nr = Gr * 60,
  Kr = nr * 60,
  Yr = Kr * 24,
  ag = Yr * 7,
  R_ = Yr * 30,
  wv = Yr * 365,
  Jn = ft(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Gr);
    },
    (e, t) => (t - e) / Gr,
    (e) => e.getUTCSeconds()
  );
Jn.range;
const og = ft(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Gr);
  },
  (e, t) => {
    e.setTime(+e + t * nr);
  },
  (e, t) => (t - e) / nr,
  (e) => e.getMinutes()
);
og.range;
const ug = ft(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * nr);
  },
  (e, t) => (t - e) / nr,
  (e) => e.getUTCMinutes()
);
ug.range;
const lg = ft(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Gr - e.getMinutes() * nr
    );
  },
  (e, t) => {
    e.setTime(+e + t * Kr);
  },
  (e, t) => (t - e) / Kr,
  (e) => e.getHours()
);
lg.range;
const sg = ft(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Kr);
  },
  (e, t) => (t - e) / Kr,
  (e) => e.getUTCHours()
);
sg.range;
const pu = ft(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * nr) / Yr,
  (e) => e.getDate() - 1
);
pu.range;
const Ks = ft(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Yr,
  (e) => e.getUTCDate() - 1
);
Ks.range;
const OE = ft(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Yr,
  (e) => Math.floor(e / Yr)
);
OE.range;
function ci(e) {
  return ft(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * nr) / ag
  );
}
const Vs = ci(0),
  os = ci(1),
  k$ = ci(2),
  j$ = ci(3),
  ea = ci(4),
  M$ = ci(5),
  I$ = ci(6);
Vs.range;
os.range;
k$.range;
j$.range;
ea.range;
M$.range;
I$.range;
function fi(e) {
  return ft(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / ag
  );
}
const Xs = fi(0),
  us = fi(1),
  N$ = fi(2),
  R$ = fi(3),
  ta = fi(4),
  $$ = fi(5),
  D$ = fi(6);
Xs.range;
us.range;
N$.range;
R$.range;
ta.range;
$$.range;
D$.range;
const cg = ft(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth()
);
cg.range;
const fg = ft(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth()
);
fg.range;
const Qr = ft(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear()
);
Qr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : ft(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        }
      );
Qr.range;
const Zr = ft(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear()
);
Zr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : ft(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        }
      );
Zr.range;
function PE(e, t, r, n, o, u) {
  const l = [
    [Jn, 1, Gr],
    [Jn, 5, 5 * Gr],
    [Jn, 15, 15 * Gr],
    [Jn, 30, 30 * Gr],
    [u, 1, nr],
    [u, 5, 5 * nr],
    [u, 15, 15 * nr],
    [u, 30, 30 * nr],
    [o, 1, Kr],
    [o, 3, 3 * Kr],
    [o, 6, 6 * Kr],
    [o, 12, 12 * Kr],
    [n, 1, Yr],
    [n, 2, 2 * Yr],
    [r, 1, ag],
    [t, 1, R_],
    [t, 3, 3 * R_],
    [e, 1, wv],
  ];
  function c(p, v, h) {
    const g = v < p;
    g && ([p, v] = [v, p]);
    const w = h && typeof h.range == "function" ? h : f(p, v, h),
      S = w ? w.range(p, +v + 1) : [];
    return g ? S.reverse() : S;
  }
  function f(p, v, h) {
    const g = Math.abs(v - p) / h,
      w = Km(([, , b]) => b).right(l, g);
    if (w === l.length) return e.every(ky(p / wv, v / wv, h));
    if (w === 0) return as.every(Math.max(ky(p, v, h), 1));
    const [S, x] = l[g / l[w - 1][2] < l[w][2] / g ? w - 1 : w];
    return S.every(x);
  }
  return [c, f];
}
const [L$, q$] = PE(Zr, fg, Xs, OE, sg, ug),
  [B$, F$] = PE(Qr, cg, Vs, pu, lg, og);
function xv(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Sv(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function co(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function z$(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    o = e.periods,
    u = e.days,
    l = e.shortDays,
    c = e.months,
    f = e.shortMonths,
    p = fo(o),
    v = po(o),
    h = fo(u),
    g = po(u),
    w = fo(l),
    S = po(l),
    x = fo(c),
    b = po(c),
    T = fo(f),
    A = po(f),
    E = {
      a: J,
      A: W,
      b: X,
      B: Q,
      c: null,
      d: F_,
      e: F_,
      f: fD,
      g: xD,
      G: _D,
      H: lD,
      I: sD,
      j: cD,
      L: AE,
      m: dD,
      M: pD,
      p: M,
      q: L,
      Q: W_,
      s: H_,
      S: hD,
      u: vD,
      U: yD,
      V: mD,
      w: gD,
      W: bD,
      x: null,
      X: null,
      y: wD,
      Y: SD,
      Z: OD,
      "%": U_,
    },
    C = {
      a: oe,
      A: pe,
      b: me,
      B: _e,
      c: null,
      d: z_,
      e: z_,
      f: TD,
      g: LD,
      G: BD,
      H: PD,
      I: AD,
      j: ED,
      L: TE,
      m: CD,
      M: kD,
      p: Ce,
      q: Oe,
      Q: W_,
      s: H_,
      S: jD,
      u: MD,
      U: ID,
      V: ND,
      w: RD,
      W: $D,
      x: null,
      X: null,
      y: DD,
      Y: qD,
      Z: FD,
      "%": U_,
    },
    _ = {
      a: G,
      A: R,
      b: B,
      B: z,
      c: V,
      d: q_,
      e: q_,
      f: iD,
      g: L_,
      G: D_,
      H: B_,
      I: B_,
      j: eD,
      L: nD,
      m: J$,
      M: tD,
      p: D,
      q: Z$,
      Q: oD,
      s: uD,
      S: rD,
      u: K$,
      U: V$,
      V: X$,
      w: G$,
      W: Y$,
      x: K,
      X: Z,
      y: L_,
      Y: D_,
      Z: Q$,
      "%": aD,
    };
  (E.x = P(r, E)),
    (E.X = P(n, E)),
    (E.c = P(t, E)),
    (C.x = P(r, C)),
    (C.X = P(n, C)),
    (C.c = P(t, C));
  function P(ie, ye) {
    return function (Pe) {
      var re = [],
        Be = -1,
        Ee = 0,
        Ze = ie.length,
        Je,
        dt,
        ur;
      for (Pe instanceof Date || (Pe = new Date(+Pe)); ++Be < Ze; )
        ie.charCodeAt(Be) === 37 &&
          (re.push(ie.slice(Ee, Be)),
          (dt = $_[(Je = ie.charAt(++Be))]) != null
            ? (Je = ie.charAt(++Be))
            : (dt = Je === "e" ? " " : "0"),
          (ur = ye[Je]) && (Je = ur(Pe, dt)),
          re.push(Je),
          (Ee = Be + 1));
      return re.push(ie.slice(Ee, Be)), re.join("");
    };
  }
  function k(ie, ye) {
    return function (Pe) {
      var re = co(1900, void 0, 1),
        Be = I(re, ie, (Pe += ""), 0),
        Ee,
        Ze;
      if (Be != Pe.length) return null;
      if ("Q" in re) return new Date(re.Q);
      if ("s" in re) return new Date(re.s * 1e3 + ("L" in re ? re.L : 0));
      if (
        (ye && !("Z" in re) && (re.Z = 0),
        "p" in re && (re.H = (re.H % 12) + re.p * 12),
        re.m === void 0 && (re.m = "q" in re ? re.q : 0),
        "V" in re)
      ) {
        if (re.V < 1 || re.V > 53) return null;
        "w" in re || (re.w = 1),
          "Z" in re
            ? ((Ee = Sv(co(re.y, 0, 1))),
              (Ze = Ee.getUTCDay()),
              (Ee = Ze > 4 || Ze === 0 ? us.ceil(Ee) : us(Ee)),
              (Ee = Ks.offset(Ee, (re.V - 1) * 7)),
              (re.y = Ee.getUTCFullYear()),
              (re.m = Ee.getUTCMonth()),
              (re.d = Ee.getUTCDate() + ((re.w + 6) % 7)))
            : ((Ee = xv(co(re.y, 0, 1))),
              (Ze = Ee.getDay()),
              (Ee = Ze > 4 || Ze === 0 ? os.ceil(Ee) : os(Ee)),
              (Ee = pu.offset(Ee, (re.V - 1) * 7)),
              (re.y = Ee.getFullYear()),
              (re.m = Ee.getMonth()),
              (re.d = Ee.getDate() + ((re.w + 6) % 7)));
      } else
        ("W" in re || "U" in re) &&
          ("w" in re || (re.w = "u" in re ? re.u % 7 : "W" in re ? 1 : 0),
          (Ze =
            "Z" in re
              ? Sv(co(re.y, 0, 1)).getUTCDay()
              : xv(co(re.y, 0, 1)).getDay()),
          (re.m = 0),
          (re.d =
            "W" in re
              ? ((re.w + 6) % 7) + re.W * 7 - ((Ze + 5) % 7)
              : re.w + re.U * 7 - ((Ze + 6) % 7)));
      return "Z" in re
        ? ((re.H += (re.Z / 100) | 0), (re.M += re.Z % 100), Sv(re))
        : xv(re);
    };
  }
  function I(ie, ye, Pe, re) {
    for (var Be = 0, Ee = ye.length, Ze = Pe.length, Je, dt; Be < Ee; ) {
      if (re >= Ze) return -1;
      if (((Je = ye.charCodeAt(Be++)), Je === 37)) {
        if (
          ((Je = ye.charAt(Be++)),
          (dt = _[Je in $_ ? ye.charAt(Be++) : Je]),
          !dt || (re = dt(ie, Pe, re)) < 0)
        )
          return -1;
      } else if (Je != Pe.charCodeAt(re++)) return -1;
    }
    return re;
  }
  function D(ie, ye, Pe) {
    var re = p.exec(ye.slice(Pe));
    return re ? ((ie.p = v.get(re[0].toLowerCase())), Pe + re[0].length) : -1;
  }
  function G(ie, ye, Pe) {
    var re = w.exec(ye.slice(Pe));
    return re ? ((ie.w = S.get(re[0].toLowerCase())), Pe + re[0].length) : -1;
  }
  function R(ie, ye, Pe) {
    var re = h.exec(ye.slice(Pe));
    return re ? ((ie.w = g.get(re[0].toLowerCase())), Pe + re[0].length) : -1;
  }
  function B(ie, ye, Pe) {
    var re = T.exec(ye.slice(Pe));
    return re ? ((ie.m = A.get(re[0].toLowerCase())), Pe + re[0].length) : -1;
  }
  function z(ie, ye, Pe) {
    var re = x.exec(ye.slice(Pe));
    return re ? ((ie.m = b.get(re[0].toLowerCase())), Pe + re[0].length) : -1;
  }
  function V(ie, ye, Pe) {
    return I(ie, t, ye, Pe);
  }
  function K(ie, ye, Pe) {
    return I(ie, r, ye, Pe);
  }
  function Z(ie, ye, Pe) {
    return I(ie, n, ye, Pe);
  }
  function J(ie) {
    return l[ie.getDay()];
  }
  function W(ie) {
    return u[ie.getDay()];
  }
  function X(ie) {
    return f[ie.getMonth()];
  }
  function Q(ie) {
    return c[ie.getMonth()];
  }
  function M(ie) {
    return o[+(ie.getHours() >= 12)];
  }
  function L(ie) {
    return 1 + ~~(ie.getMonth() / 3);
  }
  function oe(ie) {
    return l[ie.getUTCDay()];
  }
  function pe(ie) {
    return u[ie.getUTCDay()];
  }
  function me(ie) {
    return f[ie.getUTCMonth()];
  }
  function _e(ie) {
    return c[ie.getUTCMonth()];
  }
  function Ce(ie) {
    return o[+(ie.getUTCHours() >= 12)];
  }
  function Oe(ie) {
    return 1 + ~~(ie.getUTCMonth() / 3);
  }
  return {
    format: function (ie) {
      var ye = P((ie += ""), E);
      return (
        (ye.toString = function () {
          return ie;
        }),
        ye
      );
    },
    parse: function (ie) {
      var ye = k((ie += ""), !1);
      return (
        (ye.toString = function () {
          return ie;
        }),
        ye
      );
    },
    utcFormat: function (ie) {
      var ye = P((ie += ""), C);
      return (
        (ye.toString = function () {
          return ie;
        }),
        ye
      );
    },
    utcParse: function (ie) {
      var ye = k((ie += ""), !0);
      return (
        (ye.toString = function () {
          return ie;
        }),
        ye
      );
    },
  };
}
var $_ = { "-": "", _: " ", 0: "0" },
  gt = /^\s*\d+/,
  U$ = /^%/,
  W$ = /[\\^$*+?|[\]().{}]/g;
function Me(e, t, r) {
  var n = e < 0 ? "-" : "",
    o = (n ? -e : e) + "",
    u = o.length;
  return n + (u < r ? new Array(r - u + 1).join(t) + o : o);
}
function H$(e) {
  return e.replace(W$, "\\$&");
}
function fo(e) {
  return new RegExp("^(?:" + e.map(H$).join("|") + ")", "i");
}
function po(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function G$(e, t, r) {
  var n = gt.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function K$(e, t, r) {
  var n = gt.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function V$(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function X$(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function Y$(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function D_(e, t, r) {
  var n = gt.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function L_(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function Q$(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function Z$(e, t, r) {
  var n = gt.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function J$(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function q_(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function eD(e, t, r) {
  var n = gt.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function B_(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function tD(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function rD(e, t, r) {
  var n = gt.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function nD(e, t, r) {
  var n = gt.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function iD(e, t, r) {
  var n = gt.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function aD(e, t, r) {
  var n = U$.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function oD(e, t, r) {
  var n = gt.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function uD(e, t, r) {
  var n = gt.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function F_(e, t) {
  return Me(e.getDate(), t, 2);
}
function lD(e, t) {
  return Me(e.getHours(), t, 2);
}
function sD(e, t) {
  return Me(e.getHours() % 12 || 12, t, 2);
}
function cD(e, t) {
  return Me(1 + pu.count(Qr(e), e), t, 3);
}
function AE(e, t) {
  return Me(e.getMilliseconds(), t, 3);
}
function fD(e, t) {
  return AE(e, t) + "000";
}
function dD(e, t) {
  return Me(e.getMonth() + 1, t, 2);
}
function pD(e, t) {
  return Me(e.getMinutes(), t, 2);
}
function hD(e, t) {
  return Me(e.getSeconds(), t, 2);
}
function vD(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function yD(e, t) {
  return Me(Vs.count(Qr(e) - 1, e), t, 2);
}
function EE(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ea(e) : ea.ceil(e);
}
function mD(e, t) {
  return (e = EE(e)), Me(ea.count(Qr(e), e) + (Qr(e).getDay() === 4), t, 2);
}
function gD(e) {
  return e.getDay();
}
function bD(e, t) {
  return Me(os.count(Qr(e) - 1, e), t, 2);
}
function wD(e, t) {
  return Me(e.getFullYear() % 100, t, 2);
}
function xD(e, t) {
  return (e = EE(e)), Me(e.getFullYear() % 100, t, 2);
}
function SD(e, t) {
  return Me(e.getFullYear() % 1e4, t, 4);
}
function _D(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? ea(e) : ea.ceil(e)),
    Me(e.getFullYear() % 1e4, t, 4)
  );
}
function OD(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    Me((t / 60) | 0, "0", 2) +
    Me(t % 60, "0", 2)
  );
}
function z_(e, t) {
  return Me(e.getUTCDate(), t, 2);
}
function PD(e, t) {
  return Me(e.getUTCHours(), t, 2);
}
function AD(e, t) {
  return Me(e.getUTCHours() % 12 || 12, t, 2);
}
function ED(e, t) {
  return Me(1 + Ks.count(Zr(e), e), t, 3);
}
function TE(e, t) {
  return Me(e.getUTCMilliseconds(), t, 3);
}
function TD(e, t) {
  return TE(e, t) + "000";
}
function CD(e, t) {
  return Me(e.getUTCMonth() + 1, t, 2);
}
function kD(e, t) {
  return Me(e.getUTCMinutes(), t, 2);
}
function jD(e, t) {
  return Me(e.getUTCSeconds(), t, 2);
}
function MD(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ID(e, t) {
  return Me(Xs.count(Zr(e) - 1, e), t, 2);
}
function CE(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ta(e) : ta.ceil(e);
}
function ND(e, t) {
  return (e = CE(e)), Me(ta.count(Zr(e), e) + (Zr(e).getUTCDay() === 4), t, 2);
}
function RD(e) {
  return e.getUTCDay();
}
function $D(e, t) {
  return Me(us.count(Zr(e) - 1, e), t, 2);
}
function DD(e, t) {
  return Me(e.getUTCFullYear() % 100, t, 2);
}
function LD(e, t) {
  return (e = CE(e)), Me(e.getUTCFullYear() % 100, t, 2);
}
function qD(e, t) {
  return Me(e.getUTCFullYear() % 1e4, t, 4);
}
function BD(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? ta(e) : ta.ceil(e)),
    Me(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function FD() {
  return "+0000";
}
function U_() {
  return "%";
}
function W_(e) {
  return +e;
}
function H_(e) {
  return Math.floor(+e / 1e3);
}
var Bi, kE, jE;
zD({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function zD(e) {
  return (
    (Bi = z$(e)),
    (kE = Bi.format),
    Bi.parse,
    (jE = Bi.utcFormat),
    Bi.utcParse,
    Bi
  );
}
function UD(e) {
  return new Date(e);
}
function WD(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function dg(e, t, r, n, o, u, l, c, f, p) {
  var v = Zm(),
    h = v.invert,
    g = v.domain,
    w = p(".%L"),
    S = p(":%S"),
    x = p("%I:%M"),
    b = p("%I %p"),
    T = p("%a %d"),
    A = p("%b %d"),
    E = p("%B"),
    C = p("%Y");
  function _(P) {
    return (
      f(P) < P
        ? w
        : c(P) < P
        ? S
        : l(P) < P
        ? x
        : u(P) < P
        ? b
        : n(P) < P
        ? o(P) < P
          ? T
          : A
        : r(P) < P
        ? E
        : C
    )(P);
  }
  return (
    (v.invert = function (P) {
      return new Date(h(P));
    }),
    (v.domain = function (P) {
      return arguments.length ? g(Array.from(P, WD)) : g().map(UD);
    }),
    (v.ticks = function (P) {
      var k = g();
      return e(k[0], k[k.length - 1], P ?? 10);
    }),
    (v.tickFormat = function (P, k) {
      return k == null ? _ : p(k);
    }),
    (v.nice = function (P) {
      var k = g();
      return (
        (!P || typeof P.range != "function") &&
          (P = t(k[0], k[k.length - 1], P ?? 10)),
        P ? g(mE(k, P)) : v
      );
    }),
    (v.copy = function () {
      return du(v, dg(e, t, r, n, o, u, l, c, f, p));
    }),
    v
  );
}
function HD() {
  return or.apply(
    dg(B$, F$, Qr, cg, Vs, pu, lg, og, Jn, kE).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function GD() {
  return or.apply(
    dg(L$, q$, Zr, fg, Xs, Ks, sg, ug, Jn, jE).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
function Ys() {
  var e = 0,
    t = 1,
    r,
    n,
    o,
    u,
    l = Mt,
    c = !1,
    f;
  function p(h) {
    return h == null || isNaN((h = +h))
      ? f
      : l(
          o === 0
            ? 0.5
            : ((h = (u(h) - r) * o), c ? Math.max(0, Math.min(1, h)) : h)
        );
  }
  (p.domain = function (h) {
    return arguments.length
      ? (([e, t] = h),
        (r = u((e = +e))),
        (n = u((t = +t))),
        (o = r === n ? 0 : 1 / (n - r)),
        p)
      : [e, t];
  }),
    (p.clamp = function (h) {
      return arguments.length ? ((c = !!h), p) : c;
    }),
    (p.interpolator = function (h) {
      return arguments.length ? ((l = h), p) : l;
    });
  function v(h) {
    return function (g) {
      var w, S;
      return arguments.length ? (([w, S] = g), (l = h(w, S)), p) : [l(0), l(1)];
    };
  }
  return (
    (p.range = v(ga)),
    (p.rangeRound = v(Qm)),
    (p.unknown = function (h) {
      return arguments.length ? ((f = h), p) : f;
    }),
    function (h) {
      return (
        (u = h), (r = h(e)), (n = h(t)), (o = r === n ? 0 : 1 / (n - r)), p
      );
    }
  );
}
function jn(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function ME() {
  var e = kn(Ys()(Mt));
  return (
    (e.copy = function () {
      return jn(e, ME());
    }),
    tn.apply(e, arguments)
  );
}
function IE() {
  var e = tg(Ys()).domain([1, 10]);
  return (
    (e.copy = function () {
      return jn(e, IE()).base(e.base());
    }),
    tn.apply(e, arguments)
  );
}
function NE() {
  var e = rg(Ys());
  return (
    (e.copy = function () {
      return jn(e, NE()).constant(e.constant());
    }),
    tn.apply(e, arguments)
  );
}
function pg() {
  var e = ng(Ys());
  return (
    (e.copy = function () {
      return jn(e, pg()).exponent(e.exponent());
    }),
    tn.apply(e, arguments)
  );
}
function KD() {
  return pg.apply(null, arguments).exponent(0.5);
}
function RE() {
  var e = [],
    t = Mt;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((cu(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let o of n) o != null && !isNaN((o = +o)) && e.push(o);
      return e.sort(Pn), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, o) => t(o / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (o, u) => IR(e, u / n));
    }),
    (r.copy = function () {
      return RE(t).domain(e);
    }),
    tn.apply(r, arguments)
  );
}
function Qs() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    o,
    u,
    l,
    c,
    f,
    p = Mt,
    v,
    h = !1,
    g;
  function w(x) {
    return isNaN((x = +x))
      ? g
      : ((x = 0.5 + ((x = +v(x)) - u) * (n * x < n * u ? c : f)),
        p(h ? Math.max(0, Math.min(1, x)) : x));
  }
  (w.domain = function (x) {
    return arguments.length
      ? (([e, t, r] = x),
        (o = v((e = +e))),
        (u = v((t = +t))),
        (l = v((r = +r))),
        (c = o === u ? 0 : 0.5 / (u - o)),
        (f = u === l ? 0 : 0.5 / (l - u)),
        (n = u < o ? -1 : 1),
        w)
      : [e, t, r];
  }),
    (w.clamp = function (x) {
      return arguments.length ? ((h = !!x), w) : h;
    }),
    (w.interpolator = function (x) {
      return arguments.length ? ((p = x), w) : p;
    });
  function S(x) {
    return function (b) {
      var T, A, E;
      return arguments.length
        ? (([T, A, E] = b), (p = a$(x, [T, A, E])), w)
        : [p(0), p(0.5), p(1)];
    };
  }
  return (
    (w.range = S(ga)),
    (w.rangeRound = S(Qm)),
    (w.unknown = function (x) {
      return arguments.length ? ((g = x), w) : g;
    }),
    function (x) {
      return (
        (v = x),
        (o = x(e)),
        (u = x(t)),
        (l = x(r)),
        (c = o === u ? 0 : 0.5 / (u - o)),
        (f = u === l ? 0 : 0.5 / (l - u)),
        (n = u < o ? -1 : 1),
        w
      );
    }
  );
}
function $E() {
  var e = kn(Qs()(Mt));
  return (
    (e.copy = function () {
      return jn(e, $E());
    }),
    tn.apply(e, arguments)
  );
}
function DE() {
  var e = tg(Qs()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return jn(e, DE()).base(e.base());
    }),
    tn.apply(e, arguments)
  );
}
function LE() {
  var e = rg(Qs());
  return (
    (e.copy = function () {
      return jn(e, LE()).constant(e.constant());
    }),
    tn.apply(e, arguments)
  );
}
function hg() {
  var e = ng(Qs());
  return (
    (e.copy = function () {
      return jn(e, hg()).exponent(e.exponent());
    }),
    tn.apply(e, arguments)
  );
}
function VD() {
  return hg.apply(null, arguments).exponent(0.5);
}
const G_ = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Mo,
      scaleDiverging: $E,
      scaleDivergingLog: DE,
      scaleDivergingPow: hg,
      scaleDivergingSqrt: VD,
      scaleDivergingSymlog: LE,
      scaleIdentity: yE,
      scaleImplicit: jy,
      scaleLinear: is,
      scaleLog: gE,
      scaleOrdinal: Vm,
      scalePoint: So,
      scalePow: ig,
      scaleQuantile: xE,
      scaleQuantize: SE,
      scaleRadial: wE,
      scaleSequential: ME,
      scaleSequentialLog: IE,
      scaleSequentialPow: pg,
      scaleSequentialQuantile: RE,
      scaleSequentialSqrt: KD,
      scaleSequentialSymlog: NE,
      scaleSqrt: T$,
      scaleSymlog: bE,
      scaleThreshold: _E,
      scaleTime: HD,
      scaleUtc: GD,
      tickFormat: vE,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var _v, K_;
function qE() {
  if (K_) return _v;
  K_ = 1;
  var e = va();
  function t(r, n, o) {
    for (var u = -1, l = r.length; ++u < l; ) {
      var c = r[u],
        f = n(c);
      if (f != null && (p === void 0 ? f === f && !e(f) : o(f, p)))
        var p = f,
          v = c;
    }
    return v;
  }
  return (_v = t), _v;
}
var Ov, V_;
function XD() {
  if (V_) return Ov;
  V_ = 1;
  function e(t, r) {
    return t > r;
  }
  return (Ov = e), Ov;
}
var Pv, X_;
function YD() {
  if (X_) return Pv;
  X_ = 1;
  var e = qE(),
    t = XD(),
    r = ma();
  function n(o) {
    return o && o.length ? e(o, r, t) : void 0;
  }
  return (Pv = n), Pv;
}
var QD = YD();
const Zs = We(QD);
var Av, Y_;
function ZD() {
  if (Y_) return Av;
  Y_ = 1;
  function e(t, r) {
    return t < r;
  }
  return (Av = e), Av;
}
var Ev, Q_;
function JD() {
  if (Q_) return Ev;
  Q_ = 1;
  var e = qE(),
    t = ZD(),
    r = ma();
  function n(o) {
    return o && o.length ? e(o, r, t) : void 0;
  }
  return (Ev = n), Ev;
}
var eL = JD();
const Js = We(eL);
var Tv, Z_;
function tL() {
  if (Z_) return Tv;
  Z_ = 1;
  var e = km(),
    t = Cn(),
    r = KA(),
    n = Ft();
  function o(u, l) {
    var c = n(u) ? e : r;
    return c(u, t(l, 3));
  }
  return (Tv = o), Tv;
}
var Cv, J_;
function rL() {
  if (J_) return Cv;
  J_ = 1;
  var e = HA(),
    t = tL();
  function r(n, o) {
    return e(t(n, o), 1);
  }
  return (Cv = r), Cv;
}
var nL = rL();
const iL = We(nL);
var kv, eO;
function aL() {
  if (eO) return kv;
  eO = 1;
  var e = Um();
  function t(r, n) {
    return e(r, n);
  }
  return (kv = t), kv;
}
var oL = aL();
const vg = We(oL);
var ba = 1e9,
  uL = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  mg,
  Xe = !0,
  ar = "[DecimalError] ",
  ii = ar + "Invalid argument: ",
  yg = ar + "Exponent out of range: ",
  wa = Math.floor,
  Xn = Math.pow,
  lL = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Vt,
  yt = 1e7,
  Ke = 7,
  BE = 9007199254740991,
  ls = wa(BE / Ke),
  fe = {};
fe.absoluteValue = fe.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
fe.comparedTo = fe.cmp = function (e) {
  var t,
    r,
    n,
    o,
    u = this;
  if (((e = new u.constructor(e)), u.s !== e.s)) return u.s || -e.s;
  if (u.e !== e.e) return (u.e > e.e) ^ (u.s < 0) ? 1 : -1;
  for (n = u.d.length, o = e.d.length, t = 0, r = n < o ? n : o; t < r; ++t)
    if (u.d[t] !== e.d[t]) return (u.d[t] > e.d[t]) ^ (u.s < 0) ? 1 : -1;
  return n === o ? 0 : (n > o) ^ (u.s < 0) ? 1 : -1;
};
fe.decimalPlaces = fe.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * Ke;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
fe.dividedBy = fe.div = function (e) {
  return Xr(this, new this.constructor(e));
};
fe.dividedToIntegerBy = fe.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return Fe(Xr(t, new r(e), 0, 1), r.precision);
};
fe.equals = fe.eq = function (e) {
  return !this.cmp(e);
};
fe.exponent = function () {
  return ot(this);
};
fe.greaterThan = fe.gt = function (e) {
  return this.cmp(e) > 0;
};
fe.greaterThanOrEqualTo = fe.gte = function (e) {
  return this.cmp(e) >= 0;
};
fe.isInteger = fe.isint = function () {
  return this.e > this.d.length - 2;
};
fe.isNegative = fe.isneg = function () {
  return this.s < 0;
};
fe.isPositive = fe.ispos = function () {
  return this.s > 0;
};
fe.isZero = function () {
  return this.s === 0;
};
fe.lessThan = fe.lt = function (e) {
  return this.cmp(e) < 0;
};
fe.lessThanOrEqualTo = fe.lte = function (e) {
  return this.cmp(e) < 1;
};
fe.logarithm = fe.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    o = n.precision,
    u = o + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(Vt))) throw Error(ar + "NaN");
  if (r.s < 1) throw Error(ar + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Vt)
    ? new n(0)
    : ((Xe = !1), (t = Xr(Do(r, u), Do(e, u), u)), (Xe = !0), Fe(t, o));
};
fe.minus = fe.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? UE(t, e) : FE(t, ((e.s = -e.s), e))
  );
};
fe.modulo = fe.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    o = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(ar + "NaN");
  return r.s
    ? ((Xe = !1), (t = Xr(r, e, 0, 1).times(e)), (Xe = !0), r.minus(t))
    : Fe(new n(r), o);
};
fe.naturalExponential = fe.exp = function () {
  return zE(this);
};
fe.naturalLogarithm = fe.ln = function () {
  return Do(this);
};
fe.negated = fe.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
fe.plus = fe.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? FE(t, e) : UE(t, ((e.s = -e.s), e))
  );
};
fe.precision = fe.sd = function (e) {
  var t,
    r,
    n,
    o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ii + e);
  if (
    ((t = ot(o) + 1), (n = o.d.length - 1), (r = n * Ke + 1), (n = o.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = o.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
fe.squareRoot = fe.sqrt = function () {
  var e,
    t,
    r,
    n,
    o,
    u,
    l,
    c = this,
    f = c.constructor;
  if (c.s < 1) {
    if (!c.s) return new f(0);
    throw Error(ar + "NaN");
  }
  for (
    e = ot(c),
      Xe = !1,
      o = Math.sqrt(+c),
      o == 0 || o == 1 / 0
        ? ((t = jr(c.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (o = Math.sqrt(t)),
          (e = wa((e + 1) / 2) - (e < 0 || e % 2)),
          o == 1 / 0
            ? (t = "5e" + e)
            : ((t = o.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new f(t)))
        : (n = new f(o.toString())),
      r = f.precision,
      o = l = r + 3;
    ;

  )
    if (
      ((u = n),
      (n = u.plus(Xr(c, u, l + 2)).times(0.5)),
      jr(u.d).slice(0, l) === (t = jr(n.d)).slice(0, l))
    ) {
      if (((t = t.slice(l - 3, l + 1)), o == l && t == "4999")) {
        if ((Fe(u, r + 1, 0), u.times(u).eq(c))) {
          n = u;
          break;
        }
      } else if (t != "9999") break;
      l += 4;
    }
  return (Xe = !0), Fe(n, r);
};
fe.times = fe.mul = function (e) {
  var t,
    r,
    n,
    o,
    u,
    l,
    c,
    f,
    p,
    v = this,
    h = v.constructor,
    g = v.d,
    w = (e = new h(e)).d;
  if (!v.s || !e.s) return new h(0);
  for (
    e.s *= v.s,
      r = v.e + e.e,
      f = g.length,
      p = w.length,
      f < p && ((u = g), (g = w), (w = u), (l = f), (f = p), (p = l)),
      u = [],
      l = f + p,
      n = l;
    n--;

  )
    u.push(0);
  for (n = p; --n >= 0; ) {
    for (t = 0, o = f + n; o > n; )
      (c = u[o] + w[n] * g[o - n - 1] + t),
        (u[o--] = c % yt | 0),
        (t = (c / yt) | 0);
    u[o] = (u[o] + t) % yt | 0;
  }
  for (; !u[--l]; ) u.pop();
  return t ? ++r : u.shift(), (e.d = u), (e.e = r), Xe ? Fe(e, h.precision) : e;
};
fe.toDecimalPlaces = fe.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (Nr(e, 0, ba),
        t === void 0 ? (t = n.rounding) : Nr(t, 0, 8),
        Fe(r, e + ot(r) + 1, t))
  );
};
fe.toExponential = function (e, t) {
  var r,
    n = this,
    o = n.constructor;
  return (
    e === void 0
      ? (r = ui(n, !0))
      : (Nr(e, 0, ba),
        t === void 0 ? (t = o.rounding) : Nr(t, 0, 8),
        (n = Fe(new o(n), e + 1, t)),
        (r = ui(n, !0, e + 1))),
    r
  );
};
fe.toFixed = function (e, t) {
  var r,
    n,
    o = this,
    u = o.constructor;
  return e === void 0
    ? ui(o)
    : (Nr(e, 0, ba),
      t === void 0 ? (t = u.rounding) : Nr(t, 0, 8),
      (n = Fe(new u(o), e + ot(o) + 1, t)),
      (r = ui(n.abs(), !1, e + ot(n) + 1)),
      o.isneg() && !o.isZero() ? "-" + r : r);
};
fe.toInteger = fe.toint = function () {
  var e = this,
    t = e.constructor;
  return Fe(new t(e), ot(e) + 1, t.rounding);
};
fe.toNumber = function () {
  return +this;
};
fe.toPower = fe.pow = function (e) {
  var t,
    r,
    n,
    o,
    u,
    l,
    c = this,
    f = c.constructor,
    p = 12,
    v = +(e = new f(e));
  if (!e.s) return new f(Vt);
  if (((c = new f(c)), !c.s)) {
    if (e.s < 1) throw Error(ar + "Infinity");
    return c;
  }
  if (c.eq(Vt)) return c;
  if (((n = f.precision), e.eq(Vt))) return Fe(c, n);
  if (((t = e.e), (r = e.d.length - 1), (l = t >= r), (u = c.s), l)) {
    if ((r = v < 0 ? -v : v) <= BE) {
      for (
        o = new f(Vt), t = Math.ceil(n / Ke + 4), Xe = !1;
        r % 2 && ((o = o.times(c)), rO(o.d, t)), (r = wa(r / 2)), r !== 0;

      )
        (c = c.times(c)), rO(c.d, t);
      return (Xe = !0), e.s < 0 ? new f(Vt).div(o) : Fe(o, n);
    }
  } else if (u < 0) throw Error(ar + "NaN");
  return (
    (u = u < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (c.s = 1),
    (Xe = !1),
    (o = e.times(Do(c, n + p))),
    (Xe = !0),
    (o = zE(o)),
    (o.s = u),
    o
  );
};
fe.toPrecision = function (e, t) {
  var r,
    n,
    o = this,
    u = o.constructor;
  return (
    e === void 0
      ? ((r = ot(o)), (n = ui(o, r <= u.toExpNeg || r >= u.toExpPos)))
      : (Nr(e, 1, ba),
        t === void 0 ? (t = u.rounding) : Nr(t, 0, 8),
        (o = Fe(new u(o), e, t)),
        (r = ot(o)),
        (n = ui(o, e <= r || r <= u.toExpNeg, e))),
    n
  );
};
fe.toSignificantDigits = fe.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (Nr(e, 1, ba), t === void 0 ? (t = n.rounding) : Nr(t, 0, 8)),
    Fe(new n(r), e, t)
  );
};
fe.toString =
  fe.valueOf =
  fe.val =
  fe.toJSON =
  fe[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = ot(e),
        r = e.constructor;
      return ui(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function FE(e, t) {
  var r,
    n,
    o,
    u,
    l,
    c,
    f,
    p,
    v = e.constructor,
    h = v.precision;
  if (!e.s || !t.s) return t.s || (t = new v(e)), Xe ? Fe(t, h) : t;
  if (
    ((f = e.d),
    (p = t.d),
    (l = e.e),
    (o = t.e),
    (f = f.slice()),
    (u = l - o),
    u)
  ) {
    for (
      u < 0
        ? ((n = f), (u = -u), (c = p.length))
        : ((n = p), (o = l), (c = f.length)),
        l = Math.ceil(h / Ke),
        c = l > c ? l + 1 : c + 1,
        u > c && ((u = c), (n.length = 1)),
        n.reverse();
      u--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    c = f.length,
      u = p.length,
      c - u < 0 && ((u = c), (n = p), (p = f), (f = n)),
      r = 0;
    u;

  )
    (r = ((f[--u] = f[u] + p[u] + r) / yt) | 0), (f[u] %= yt);
  for (r && (f.unshift(r), ++o), c = f.length; f[--c] == 0; ) f.pop();
  return (t.d = f), (t.e = o), Xe ? Fe(t, h) : t;
}
function Nr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(ii + e);
}
function jr(e) {
  var t,
    r,
    n,
    o = e.length - 1,
    u = "",
    l = e[0];
  if (o > 0) {
    for (u += l, t = 1; t < o; t++)
      (n = e[t] + ""), (r = Ke - n.length), r && (u += Sn(r)), (u += n);
    (l = e[t]), (n = l + ""), (r = Ke - n.length), r && (u += Sn(r));
  } else if (l === 0) return "0";
  for (; l % 10 === 0; ) l /= 10;
  return u + l;
}
var Xr = (function () {
  function e(n, o) {
    var u,
      l = 0,
      c = n.length;
    for (n = n.slice(); c--; )
      (u = n[c] * o + l), (n[c] = u % yt | 0), (l = (u / yt) | 0);
    return l && n.unshift(l), n;
  }
  function t(n, o, u, l) {
    var c, f;
    if (u != l) f = u > l ? 1 : -1;
    else
      for (c = f = 0; c < u; c++)
        if (n[c] != o[c]) {
          f = n[c] > o[c] ? 1 : -1;
          break;
        }
    return f;
  }
  function r(n, o, u) {
    for (var l = 0; u--; )
      (n[u] -= l), (l = n[u] < o[u] ? 1 : 0), (n[u] = l * yt + n[u] - o[u]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, o, u, l) {
    var c,
      f,
      p,
      v,
      h,
      g,
      w,
      S,
      x,
      b,
      T,
      A,
      E,
      C,
      _,
      P,
      k,
      I,
      D = n.constructor,
      G = n.s == o.s ? 1 : -1,
      R = n.d,
      B = o.d;
    if (!n.s) return new D(n);
    if (!o.s) throw Error(ar + "Division by zero");
    for (
      f = n.e - o.e,
        k = B.length,
        _ = R.length,
        w = new D(G),
        S = w.d = [],
        p = 0;
      B[p] == (R[p] || 0);

    )
      ++p;
    if (
      (B[p] > (R[p] || 0) && --f,
      u == null
        ? (A = u = D.precision)
        : l
        ? (A = u + (ot(n) - ot(o)) + 1)
        : (A = u),
      A < 0)
    )
      return new D(0);
    if (((A = (A / Ke + 2) | 0), (p = 0), k == 1))
      for (v = 0, B = B[0], A++; (p < _ || v) && A--; p++)
        (E = v * yt + (R[p] || 0)), (S[p] = (E / B) | 0), (v = E % B | 0);
    else {
      for (
        v = (yt / (B[0] + 1)) | 0,
          v > 1 &&
            ((B = e(B, v)), (R = e(R, v)), (k = B.length), (_ = R.length)),
          C = k,
          x = R.slice(0, k),
          b = x.length;
        b < k;

      )
        x[b++] = 0;
      (I = B.slice()), I.unshift(0), (P = B[0]), B[1] >= yt / 2 && ++P;
      do
        (v = 0),
          (c = t(B, x, k, b)),
          c < 0
            ? ((T = x[0]),
              k != b && (T = T * yt + (x[1] || 0)),
              (v = (T / P) | 0),
              v > 1
                ? (v >= yt && (v = yt - 1),
                  (h = e(B, v)),
                  (g = h.length),
                  (b = x.length),
                  (c = t(h, x, g, b)),
                  c == 1 && (v--, r(h, k < g ? I : B, g)))
                : (v == 0 && (c = v = 1), (h = B.slice())),
              (g = h.length),
              g < b && h.unshift(0),
              r(x, h, b),
              c == -1 &&
                ((b = x.length),
                (c = t(B, x, k, b)),
                c < 1 && (v++, r(x, k < b ? I : B, b))),
              (b = x.length))
            : c === 0 && (v++, (x = [0])),
          (S[p++] = v),
          c && x[0] ? (x[b++] = R[C] || 0) : ((x = [R[C]]), (b = 1));
      while ((C++ < _ || x[0] !== void 0) && A--);
    }
    return S[0] || S.shift(), (w.e = f), Fe(w, l ? u + ot(w) + 1 : u);
  };
})();
function zE(e, t) {
  var r,
    n,
    o,
    u,
    l,
    c,
    f = 0,
    p = 0,
    v = e.constructor,
    h = v.precision;
  if (ot(e) > 16) throw Error(yg + ot(e));
  if (!e.s) return new v(Vt);
  for (
    t == null ? ((Xe = !1), (c = h)) : (c = t), l = new v(0.03125);
    e.abs().gte(0.1);

  )
    (e = e.times(l)), (p += 5);
  for (
    n = ((Math.log(Xn(2, p)) / Math.LN10) * 2 + 5) | 0,
      c += n,
      r = o = u = new v(Vt),
      v.precision = c;
    ;

  ) {
    if (
      ((o = Fe(o.times(e), c)),
      (r = r.times(++f)),
      (l = u.plus(Xr(o, r, c))),
      jr(l.d).slice(0, c) === jr(u.d).slice(0, c))
    ) {
      for (; p--; ) u = Fe(u.times(u), c);
      return (v.precision = h), t == null ? ((Xe = !0), Fe(u, h)) : u;
    }
    u = l;
  }
}
function ot(e) {
  for (var t = e.e * Ke, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function jv(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      ((Xe = !0),
      r && (e.precision = r),
      Error(ar + "LN10 precision limit exceeded"))
    );
  return Fe(new e(e.LN10), t);
}
function Sn(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Do(e, t) {
  var r,
    n,
    o,
    u,
    l,
    c,
    f,
    p,
    v,
    h = 1,
    g = 10,
    w = e,
    S = w.d,
    x = w.constructor,
    b = x.precision;
  if (w.s < 1) throw Error(ar + (w.s ? "NaN" : "-Infinity"));
  if (w.eq(Vt)) return new x(0);
  if ((t == null ? ((Xe = !1), (p = b)) : (p = t), w.eq(10)))
    return t == null && (Xe = !0), jv(x, p);
  if (
    ((p += g),
    (x.precision = p),
    (r = jr(S)),
    (n = r.charAt(0)),
    (u = ot(w)),
    Math.abs(u) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (w = w.times(e)), (r = jr(w.d)), (n = r.charAt(0)), h++;
    (u = ot(w)),
      n > 1 ? ((w = new x("0." + r)), u++) : (w = new x(n + "." + r.slice(1)));
  } else
    return (
      (f = jv(x, p + 2, b).times(u + "")),
      (w = Do(new x(n + "." + r.slice(1)), p - g).plus(f)),
      (x.precision = b),
      t == null ? ((Xe = !0), Fe(w, b)) : w
    );
  for (
    c = l = w = Xr(w.minus(Vt), w.plus(Vt), p), v = Fe(w.times(w), p), o = 3;
    ;

  ) {
    if (
      ((l = Fe(l.times(v), p)),
      (f = c.plus(Xr(l, new x(o), p))),
      jr(f.d).slice(0, p) === jr(c.d).slice(0, p))
    )
      return (
        (c = c.times(2)),
        u !== 0 && (c = c.plus(jv(x, p + 2, b).times(u + ""))),
        (c = Xr(c, new x(h), p)),
        (x.precision = b),
        t == null ? ((Xe = !0), Fe(c, b)) : c
      );
    (c = f), (o += 2);
  }
}
function tO(e, t) {
  var r, n, o;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (o = t.length; t.charCodeAt(o - 1) === 48; ) --o;
  if (((t = t.slice(n, o)), t)) {
    if (
      ((o -= n),
      (r = r - n - 1),
      (e.e = wa(r / Ke)),
      (e.d = []),
      (n = (r + 1) % Ke),
      r < 0 && (n += Ke),
      n < o)
    ) {
      for (n && e.d.push(+t.slice(0, n)), o -= Ke; n < o; )
        e.d.push(+t.slice(n, (n += Ke)));
      (t = t.slice(n)), (n = Ke - t.length);
    } else n -= o;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), Xe && (e.e > ls || e.e < -ls))) throw Error(yg + r);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function Fe(e, t, r) {
  var n,
    o,
    u,
    l,
    c,
    f,
    p,
    v,
    h = e.d;
  for (l = 1, u = h[0]; u >= 10; u /= 10) l++;
  if (((n = t - l), n < 0)) (n += Ke), (o = t), (p = h[(v = 0)]);
  else {
    if (((v = Math.ceil((n + 1) / Ke)), (u = h.length), v >= u)) return e;
    for (p = u = h[v], l = 1; u >= 10; u /= 10) l++;
    (n %= Ke), (o = n - Ke + l);
  }
  if (
    (r !== void 0 &&
      ((u = Xn(10, l - o - 1)),
      (c = (p / u) % 10 | 0),
      (f = t < 0 || h[v + 1] !== void 0 || p % u),
      (f =
        r < 4
          ? (c || f) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : c > 5 ||
            (c == 5 &&
              (r == 4 ||
                f ||
                (r == 6 &&
                  (n > 0 ? (o > 0 ? p / Xn(10, l - o) : 0) : h[v - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !h[0])
  )
    return (
      f
        ? ((u = ot(e)),
          (h.length = 1),
          (t = t - u - 1),
          (h[0] = Xn(10, (Ke - (t % Ke)) % Ke)),
          (e.e = wa(-t / Ke) || 0))
        : ((h.length = 1), (h[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((h.length = v), (u = 1), v--)
      : ((h.length = v + 1),
        (u = Xn(10, Ke - n)),
        (h[v] = o > 0 ? ((p / Xn(10, l - o)) % Xn(10, o) | 0) * u : 0)),
    f)
  )
    for (;;)
      if (v == 0) {
        (h[0] += u) == yt && ((h[0] = 1), ++e.e);
        break;
      } else {
        if (((h[v] += u), h[v] != yt)) break;
        (h[v--] = 0), (u = 1);
      }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (Xe && (e.e > ls || e.e < -ls)) throw Error(yg + ot(e));
  return e;
}
function UE(e, t) {
  var r,
    n,
    o,
    u,
    l,
    c,
    f,
    p,
    v,
    h,
    g = e.constructor,
    w = g.precision;
  if (!e.s || !t.s)
    return t.s ? (t.s = -t.s) : (t = new g(e)), Xe ? Fe(t, w) : t;
  if (
    ((f = e.d),
    (h = t.d),
    (n = t.e),
    (p = e.e),
    (f = f.slice()),
    (l = p - n),
    l)
  ) {
    for (
      v = l < 0,
        v
          ? ((r = f), (l = -l), (c = h.length))
          : ((r = h), (n = p), (c = f.length)),
        o = Math.max(Math.ceil(w / Ke), c) + 2,
        l > o && ((l = o), (r.length = 1)),
        r.reverse(),
        o = l;
      o--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (o = f.length, c = h.length, v = o < c, v && (c = o), o = 0; o < c; o++)
      if (f[o] != h[o]) {
        v = f[o] < h[o];
        break;
      }
    l = 0;
  }
  for (
    v && ((r = f), (f = h), (h = r), (t.s = -t.s)),
      c = f.length,
      o = h.length - c;
    o > 0;
    --o
  )
    f[c++] = 0;
  for (o = h.length; o > l; ) {
    if (f[--o] < h[o]) {
      for (u = o; u && f[--u] === 0; ) f[u] = yt - 1;
      --f[u], (f[o] += yt);
    }
    f[o] -= h[o];
  }
  for (; f[--c] === 0; ) f.pop();
  for (; f[0] === 0; f.shift()) --n;
  return f[0] ? ((t.d = f), (t.e = n), Xe ? Fe(t, w) : t) : new g(0);
}
function ui(e, t, r) {
  var n,
    o = ot(e),
    u = jr(e.d),
    l = u.length;
  return (
    t
      ? (r && (n = r - l) > 0
          ? (u = u.charAt(0) + "." + u.slice(1) + Sn(n))
          : l > 1 && (u = u.charAt(0) + "." + u.slice(1)),
        (u = u + (o < 0 ? "e" : "e+") + o))
      : o < 0
      ? ((u = "0." + Sn(-o - 1) + u), r && (n = r - l) > 0 && (u += Sn(n)))
      : o >= l
      ? ((u += Sn(o + 1 - l)),
        r && (n = r - o - 1) > 0 && (u = u + "." + Sn(n)))
      : ((n = o + 1) < l && (u = u.slice(0, n) + "." + u.slice(n)),
        r && (n = r - l) > 0 && (o + 1 === l && (u += "."), (u += Sn(n)))),
    e.s < 0 ? "-" + u : u
  );
}
function rO(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function WE(e) {
  var t, r, n;
  function o(u) {
    var l = this;
    if (!(l instanceof o)) return new o(u);
    if (((l.constructor = o), u instanceof o)) {
      (l.s = u.s), (l.e = u.e), (l.d = (u = u.d) ? u.slice() : u);
      return;
    }
    if (typeof u == "number") {
      if (u * 0 !== 0) throw Error(ii + u);
      if (u > 0) l.s = 1;
      else if (u < 0) (u = -u), (l.s = -1);
      else {
        (l.s = 0), (l.e = 0), (l.d = [0]);
        return;
      }
      if (u === ~~u && u < 1e7) {
        (l.e = 0), (l.d = [u]);
        return;
      }
      return tO(l, u.toString());
    } else if (typeof u != "string") throw Error(ii + u);
    if (
      (u.charCodeAt(0) === 45 ? ((u = u.slice(1)), (l.s = -1)) : (l.s = 1),
      lL.test(u))
    )
      tO(l, u);
    else throw Error(ii + u);
  }
  if (
    ((o.prototype = fe),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.clone = WE),
    (o.config = o.set = sL),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return o.config(e), o;
}
function sL(e) {
  if (!e || typeof e != "object") throw Error(ar + "Object expected");
  var t,
    r,
    n,
    o = [
      "precision",
      1,
      ba,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < o.length; t += 3)
    if ((n = e[(r = o[t])]) !== void 0)
      if (wa(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(ii + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(ii + r + ": " + n);
  return this;
}
var mg = WE(uL);
Vt = new mg(1);
const qe = mg;
function cL(e) {
  return hL(e) || pL(e) || dL(e) || fL();
}
function fL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dL(e, t) {
  if (e) {
    if (typeof e == "string") return Ry(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ry(e, t);
  }
}
function pL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function hL(e) {
  if (Array.isArray(e)) return Ry(e);
}
function Ry(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var vL = function (t) {
    return t;
  },
  HE = { "@@functional/placeholder": !0 },
  GE = function (t) {
    return t === HE;
  },
  nO = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          GE(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  yL = function e(t, r) {
    return t === 1
      ? r
      : nO(function () {
          for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++)
            o[u] = arguments[u];
          var l = o.filter(function (c) {
            return c !== HE;
          }).length;
          return l >= t
            ? r.apply(void 0, o)
            : e(
                t - l,
                nO(function () {
                  for (
                    var c = arguments.length, f = new Array(c), p = 0;
                    p < c;
                    p++
                  )
                    f[p] = arguments[p];
                  var v = o.map(function (h) {
                    return GE(h) ? f.shift() : h;
                  });
                  return r.apply(void 0, cL(v).concat(f));
                })
              );
        });
  },
  ec = function (t) {
    return yL(t.length, t);
  },
  $y = function (t, r) {
    for (var n = [], o = t; o < r; ++o) n[o - t] = o;
    return n;
  },
  mL = ec(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  gL = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return vL;
    var o = r.reverse(),
      u = o[0],
      l = o.slice(1);
    return function () {
      return l.reduce(function (c, f) {
        return f(c);
      }, u.apply(void 0, arguments));
    };
  },
  Dy = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  KE = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var o = arguments.length, u = new Array(o), l = 0; l < o; l++)
        u[l] = arguments[l];
      return (
        (r &&
          u.every(function (c, f) {
            return c === r[f];
          })) ||
          ((r = u), (n = t.apply(void 0, u))),
        n
      );
    };
  };
function bL(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new qe(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function wL(e, t, r) {
  for (var n = new qe(e), o = 0, u = []; n.lt(t) && o < 1e5; )
    u.push(n.toNumber()), (n = n.add(r)), o++;
  return u;
}
var xL = ec(function (e, t, r) {
    var n = +e,
      o = +t;
    return n + r * (o - n);
  }),
  SL = ec(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  _L = ec(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  });
const tc = {
  rangeStep: wL,
  getDigitCount: bL,
  interpolateNumber: xL,
  uninterpolateNumber: SL,
  uninterpolateTruncation: _L,
};
function Ly(e) {
  return AL(e) || PL(e) || VE(e) || OL();
}
function OL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function AL(e) {
  if (Array.isArray(e)) return qy(e);
}
function Lo(e, t) {
  return CL(e) || TL(e, t) || VE(e, t) || EL();
}
function EL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VE(e, t) {
  if (e) {
    if (typeof e == "string") return qy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qy(e, t);
  }
}
function qy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TL(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      o = !1,
      u = void 0;
    try {
      for (
        var l = e[Symbol.iterator](), c;
        !(n = (c = l.next()).done) && (r.push(c.value), !(t && r.length === t));
        n = !0
      );
    } catch (f) {
      (o = !0), (u = f);
    } finally {
      try {
        !n && l.return != null && l.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function CL(e) {
  if (Array.isArray(e)) return e;
}
function XE(e) {
  var t = Lo(e, 2),
    r = t[0],
    n = t[1],
    o = r,
    u = n;
  return r > n && ((o = n), (u = r)), [o, u];
}
function YE(e, t, r) {
  if (e.lte(0)) return new qe(0);
  var n = tc.getDigitCount(e.toNumber()),
    o = new qe(10).pow(n),
    u = e.div(o),
    l = n !== 1 ? 0.05 : 0.1,
    c = new qe(Math.ceil(u.div(l).toNumber())).add(r).mul(l),
    f = c.mul(o);
  return t ? f : new qe(Math.ceil(f));
}
function kL(e, t, r) {
  var n = 1,
    o = new qe(e);
  if (!o.isint() && r) {
    var u = Math.abs(e);
    u < 1
      ? ((n = new qe(10).pow(tc.getDigitCount(e) - 1)),
        (o = new qe(Math.floor(o.div(n).toNumber())).mul(n)))
      : u > 1 && (o = new qe(Math.floor(e)));
  } else
    e === 0
      ? (o = new qe(Math.floor((t - 1) / 2)))
      : r || (o = new qe(Math.floor(e)));
  var l = Math.floor((t - 1) / 2),
    c = gL(
      mL(function (f) {
        return o.add(new qe(f - l).mul(n)).toNumber();
      }),
      $y
    );
  return c(0, t);
}
function QE(e, t, r, n) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new qe(0), tickMin: new qe(0), tickMax: new qe(0) };
  var u = YE(new qe(t).sub(e).div(r - 1), n, o),
    l;
  e <= 0 && t >= 0
    ? (l = new qe(0))
    : ((l = new qe(e).add(t).div(2)), (l = l.sub(new qe(l).mod(u))));
  var c = Math.ceil(l.sub(e).div(u).toNumber()),
    f = Math.ceil(new qe(t).sub(l).div(u).toNumber()),
    p = c + f + 1;
  return p > r
    ? QE(e, t, r, n, o + 1)
    : (p < r && ((f = t > 0 ? f + (r - p) : f), (c = t > 0 ? c : c + (r - p))),
      {
        step: u,
        tickMin: l.sub(new qe(c).mul(u)),
        tickMax: l.add(new qe(f).mul(u)),
      });
}
function jL(e) {
  var t = Lo(e, 2),
    r = t[0],
    n = t[1],
    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    l = Math.max(o, 2),
    c = XE([r, n]),
    f = Lo(c, 2),
    p = f[0],
    v = f[1];
  if (p === -1 / 0 || v === 1 / 0) {
    var h =
      v === 1 / 0
        ? [p].concat(
            Ly(
              $y(0, o - 1).map(function () {
                return 1 / 0;
              })
            )
          )
        : [].concat(
            Ly(
              $y(0, o - 1).map(function () {
                return -1 / 0;
              })
            ),
            [v]
          );
    return r > n ? Dy(h) : h;
  }
  if (p === v) return kL(p, o, u);
  var g = QE(p, v, l, u),
    w = g.step,
    S = g.tickMin,
    x = g.tickMax,
    b = tc.rangeStep(S, x.add(new qe(0.1).mul(w)), w);
  return r > n ? Dy(b) : b;
}
function ML(e, t) {
  var r = Lo(e, 2),
    n = r[0],
    o = r[1],
    u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    l = XE([n, o]),
    c = Lo(l, 2),
    f = c[0],
    p = c[1];
  if (f === -1 / 0 || p === 1 / 0) return [n, o];
  if (f === p) return [f];
  var v = Math.max(t, 2),
    h = YE(new qe(p).sub(f).div(v - 1), u, 0),
    g = [].concat(
      Ly(tc.rangeStep(new qe(f), new qe(p).sub(new qe(0.99).mul(h)), h)),
      [p]
    );
  return n > o ? Dy(g) : g;
}
var IL = KE(jL),
  NL = KE(ML),
  RL = "Invariant failed";
function li(e, t) {
  throw new Error(RL);
}
var $L = [
  "offset",
  "layout",
  "width",
  "dataKey",
  "data",
  "dataPointFormatter",
  "xAxis",
  "yAxis",
];
function ra(e) {
  "@babel/helpers - typeof";
  return (
    (ra =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ra(e)
  );
}
function ss() {
  return (
    (ss = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ss.apply(this, arguments)
  );
}
function DL(e, t) {
  return FL(e) || BL(e, t) || qL(e, t) || LL();
}
function LL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qL(e, t) {
  if (e) {
    if (typeof e == "string") return iO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return iO(e, t);
  }
}
function iO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function BL(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function FL(e) {
  if (Array.isArray(e)) return e;
}
function zL(e, t) {
  if (e == null) return {};
  var r = UL(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function UL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function WL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function HL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, eT(n.key), n);
  }
}
function GL(e, t, r) {
  return (
    HL(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function KL(e, t, r) {
  return (
    (t = cs(t)),
    VL(
      e,
      ZE() ? Reflect.construct(t, r || [], cs(e).constructor) : t.apply(e, r)
    )
  );
}
function VL(e, t) {
  if (t && (ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return XL(e);
}
function XL(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ZE() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (ZE = function () {
    return !!e;
  })();
}
function cs(e) {
  return (
    (cs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    cs(e)
  );
}
function YL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && By(e, t);
}
function By(e, t) {
  return (
    (By = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    By(e, t)
  );
}
function JE(e, t, r) {
  return (
    (t = eT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function eT(e) {
  var t = QL(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function QL(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rc = (function (e) {
  function t() {
    return WL(this, t), KL(this, t, arguments);
  }
  return (
    YL(t, e),
    GL(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            o = n.offset,
            u = n.layout,
            l = n.width,
            c = n.dataKey,
            f = n.data,
            p = n.dataPointFormatter,
            v = n.xAxis,
            h = n.yAxis,
            g = zL(n, $L),
            w = Re(g, !1);
          this.props.direction === "x" && v.type !== "number" && li();
          var S = f.map(function (x) {
            var b = p(x, c),
              T = b.x,
              A = b.y,
              E = b.value,
              C = b.errorVal;
            if (!C) return null;
            var _ = [],
              P,
              k;
            if (Array.isArray(C)) {
              var I = DL(C, 2);
              (P = I[0]), (k = I[1]);
            } else P = k = C;
            if (u === "vertical") {
              var D = v.scale,
                G = A + o,
                R = G + l,
                B = G - l,
                z = D(E - P),
                V = D(E + k);
              _.push({ x1: V, y1: R, x2: V, y2: B }),
                _.push({ x1: z, y1: G, x2: V, y2: G }),
                _.push({ x1: z, y1: R, x2: z, y2: B });
            } else if (u === "horizontal") {
              var K = h.scale,
                Z = T + o,
                J = Z - l,
                W = Z + l,
                X = K(E - P),
                Q = K(E + k);
              _.push({ x1: J, y1: Q, x2: W, y2: Q }),
                _.push({ x1: Z, y1: X, x2: Z, y2: Q }),
                _.push({ x1: J, y1: X, x2: W, y2: X });
            }
            return F.createElement(
              mt,
              ss(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    _.map(function (M) {
                      return ""
                        .concat(M.x1, "-")
                        .concat(M.x2, "-")
                        .concat(M.y1, "-")
                        .concat(M.y2);
                    })
                  ),
                },
                w
              ),
              _.map(function (M) {
                return F.createElement(
                  "line",
                  ss({}, M, {
                    key: "line-"
                      .concat(M.x1, "-")
                      .concat(M.x2, "-")
                      .concat(M.y1, "-")
                      .concat(M.y2),
                  })
                );
              })
            );
          });
          return F.createElement(mt, { className: "recharts-errorBars" }, S);
        },
      },
    ])
  );
})(F.Component);
JE(rc, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
JE(rc, "displayName", "ErrorBar");
function qo(e) {
  "@babel/helpers - typeof";
  return (
    (qo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qo(e)
  );
}
function aO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? aO(Object(r), !0).forEach(function (n) {
          ZL(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : aO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ZL(e, t, r) {
  return (
    (t = JL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JL(e) {
  var t = eq(e, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function eq(e, t) {
  if (qo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tT = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    o = t.legendWidth,
    u = t.legendContent,
    l = Kt(r, ri);
  if (!l) return null;
  var c = ri.defaultProps,
    f = c !== void 0 ? Kn(Kn({}, c), l.props) : {},
    p;
  return (
    l.props && l.props.payload
      ? (p = l.props && l.props.payload)
      : u === "children"
      ? (p = (n || []).reduce(function (v, h) {
          var g = h.item,
            w = h.props,
            S = w.sectors || w.data || [];
          return v.concat(
            S.map(function (x) {
              return {
                type: l.props.iconType || g.props.legendType,
                value: x.name,
                color: x.fill,
                payload: x,
              };
            })
          );
        }, []))
      : (p = (n || []).map(function (v) {
          var h = v.item,
            g = h.type.defaultProps,
            w = g !== void 0 ? Kn(Kn({}, g), h.props) : {},
            S = w.dataKey,
            x = w.name,
            b = w.legendType,
            T = w.hide;
          return {
            inactive: T,
            dataKey: S,
            type: f.iconType || b || "square",
            color: gg(h),
            value: x || S,
            payload: w,
          };
        })),
    Kn(Kn(Kn({}, f), ri.getWithHeight(l, o)), {}, { payload: p, item: l })
  );
};
function Bo(e) {
  "@babel/helpers - typeof";
  return (
    (Bo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Bo(e)
  );
}
function oO(e) {
  return iq(e) || nq(e) || rq(e) || tq();
}
function tq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rq(e, t) {
  if (e) {
    if (typeof e == "string") return Fy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fy(e, t);
  }
}
function nq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function iq(e) {
  if (Array.isArray(e)) return Fy(e);
}
function Fy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uO(Object(r), !0).forEach(function (n) {
          Ki(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : uO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Ki(e, t, r) {
  return (
    (t = aq(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function aq(e) {
  var t = oq(e, "string");
  return Bo(t) == "symbol" ? t : t + "";
}
function oq(e, t) {
  if (Bo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rr(e, t, r) {
  return $e(e) || $e(t) ? r : ct(t) ? ir(e, t, r) : Te(t) ? t(e) : r;
}
function _o(e, t, r, n) {
  var o = iL(e, function (c) {
    return Rr(c, t);
  });
  if (r === "number") {
    var u = o.filter(function (c) {
      return se(c) || parseFloat(c);
    });
    return u.length ? [Js(u), Zs(u)] : [1 / 0, -1 / 0];
  }
  var l = n
    ? o.filter(function (c) {
        return !$e(c);
      })
    : o;
  return l.map(function (c) {
    return ct(c) || c instanceof Date ? c : "";
  });
}
var uq = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      o = arguments.length > 2 ? arguments[2] : void 0,
      u = arguments.length > 3 ? arguments[3] : void 0,
      l = -1,
      c = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (c <= 1) return 0;
    if (
      u &&
      u.axisType === "angleAxis" &&
      Math.abs(Math.abs(u.range[1] - u.range[0]) - 360) <= 1e-6
    )
      for (var f = u.range, p = 0; p < c; p++) {
        var v = p > 0 ? o[p - 1].coordinate : o[c - 1].coordinate,
          h = o[p].coordinate,
          g = p >= c - 1 ? o[0].coordinate : o[p + 1].coordinate,
          w = void 0;
        if (wr(h - v) !== wr(g - h)) {
          var S = [];
          if (wr(g - h) === wr(f[1] - f[0])) {
            w = g;
            var x = h + f[1] - f[0];
            (S[0] = Math.min(x, (x + v) / 2)),
              (S[1] = Math.max(x, (x + v) / 2));
          } else {
            w = v;
            var b = g + f[1] - f[0];
            (S[0] = Math.min(h, (b + h) / 2)),
              (S[1] = Math.max(h, (b + h) / 2));
          }
          var T = [Math.min(h, (w + h) / 2), Math.max(h, (w + h) / 2)];
          if ((t > T[0] && t <= T[1]) || (t >= S[0] && t <= S[1])) {
            l = o[p].index;
            break;
          }
        } else {
          var A = Math.min(v, g),
            E = Math.max(v, g);
          if (t > (A + h) / 2 && t <= (E + h) / 2) {
            l = o[p].index;
            break;
          }
        }
      }
    else
      for (var C = 0; C < c; C++)
        if (
          (C === 0 && t <= (n[C].coordinate + n[C + 1].coordinate) / 2) ||
          (C > 0 &&
            C < c - 1 &&
            t > (n[C].coordinate + n[C - 1].coordinate) / 2 &&
            t <= (n[C].coordinate + n[C + 1].coordinate) / 2) ||
          (C === c - 1 && t > (n[C].coordinate + n[C - 1].coordinate) / 2)
        ) {
          l = n[C].index;
          break;
        }
    return l;
  },
  gg = function (t) {
    var r,
      n = t,
      o = n.type.displayName,
      u =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? tt(tt({}, t.type.defaultProps), t.props)
          : t.props,
      l = u.stroke,
      c = u.fill,
      f;
    switch (o) {
      case "Line":
        f = l;
        break;
      case "Area":
      case "Radar":
        f = l && l !== "none" ? l : c;
        break;
      default:
        f = c;
        break;
    }
    return f;
  },
  lq = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      o = t.stackGroups,
      u = o === void 0 ? {} : o;
    if (!u) return {};
    for (var l = {}, c = Object.keys(u), f = 0, p = c.length; f < p; f++)
      for (
        var v = u[c[f]].stackGroups, h = Object.keys(v), g = 0, w = h.length;
        g < w;
        g++
      ) {
        var S = v[h[g]],
          x = S.items,
          b = S.cateAxisId,
          T = x.filter(function (k) {
            return Vr(k.type).indexOf("Bar") >= 0;
          });
        if (T && T.length) {
          var A = T[0].type.defaultProps,
            E = A !== void 0 ? tt(tt({}, A), T[0].props) : T[0].props,
            C = E.barSize,
            _ = E[b];
          l[_] || (l[_] = []);
          var P = $e(C) ? r : C;
          l[_].push({
            item: T[0],
            stackList: T.slice(1),
            barSize: $e(P) ? void 0 : oi(P, n, 0),
          });
        }
      }
    return l;
  },
  sq = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      o = t.bandSize,
      u = t.sizeList,
      l = u === void 0 ? [] : u,
      c = t.maxBarSize,
      f = l.length;
    if (f < 1) return null;
    var p = oi(r, o, 0, !0),
      v,
      h = [];
    if (l[0].barSize === +l[0].barSize) {
      var g = !1,
        w = o / f,
        S = l.reduce(function (C, _) {
          return C + _.barSize || 0;
        }, 0);
      (S += (f - 1) * p),
        S >= o && ((S -= (f - 1) * p), (p = 0)),
        S >= o && w > 0 && ((g = !0), (w *= 0.9), (S = f * w));
      var x = ((o - S) / 2) >> 0,
        b = { offset: x - p, size: 0 };
      v = l.reduce(function (C, _) {
        var P = {
            item: _.item,
            position: {
              offset: b.offset + b.size + p,
              size: g ? w : _.barSize,
            },
          },
          k = [].concat(oO(C), [P]);
        return (
          (b = k[k.length - 1].position),
          _.stackList &&
            _.stackList.length &&
            _.stackList.forEach(function (I) {
              k.push({ item: I, position: b });
            }),
          k
        );
      }, h);
    } else {
      var T = oi(n, o, 0, !0);
      o - 2 * T - (f - 1) * p <= 0 && (p = 0);
      var A = (o - 2 * T - (f - 1) * p) / f;
      A > 1 && (A >>= 0);
      var E = c === +c ? Math.min(A, c) : A;
      v = l.reduce(function (C, _, P) {
        var k = [].concat(oO(C), [
          {
            item: _.item,
            position: { offset: T + (A + p) * P + (A - E) / 2, size: E },
          },
        ]);
        return (
          _.stackList &&
            _.stackList.length &&
            _.stackList.forEach(function (I) {
              k.push({ item: I, position: k[k.length - 1].position });
            }),
          k
        );
      }, h);
    }
    return v;
  },
  cq = function (t, r, n, o) {
    var u = n.children,
      l = n.width,
      c = n.margin,
      f = l - (c.left || 0) - (c.right || 0),
      p = tT({ children: u, legendWidth: f });
    if (p) {
      var v = o || {},
        h = v.width,
        g = v.height,
        w = p.align,
        S = p.verticalAlign,
        x = p.layout;
      if (
        (x === "vertical" || (x === "horizontal" && S === "middle")) &&
        w !== "center" &&
        se(t[w])
      )
        return tt(tt({}, t), {}, Ki({}, w, t[w] + (h || 0)));
      if (
        (x === "horizontal" || (x === "vertical" && w === "center")) &&
        S !== "middle" &&
        se(t[S])
      )
        return tt(tt({}, t), {}, Ki({}, S, t[S] + (g || 0)));
    }
    return t;
  },
  fq = function (t, r, n) {
    return $e(r)
      ? !0
      : t === "horizontal"
      ? r === "yAxis"
      : t === "vertical" || n === "x"
      ? r === "xAxis"
      : n === "y"
      ? r === "yAxis"
      : !0;
  },
  rT = function (t, r, n, o, u) {
    var l = r.props.children,
      c = xr(l, rc).filter(function (p) {
        return fq(o, u, p.props.direction);
      });
    if (c && c.length) {
      var f = c.map(function (p) {
        return p.props.dataKey;
      });
      return t.reduce(
        function (p, v) {
          var h = Rr(v, n);
          if ($e(h)) return p;
          var g = Array.isArray(h) ? [Js(h), Zs(h)] : [h, h],
            w = f.reduce(
              function (S, x) {
                var b = Rr(v, x, 0),
                  T = g[0] - Math.abs(Array.isArray(b) ? b[0] : b),
                  A = g[1] + Math.abs(Array.isArray(b) ? b[1] : b);
                return [Math.min(T, S[0]), Math.max(A, S[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(w[0], p[0]), Math.max(w[1], p[1])];
        },
        [1 / 0, -1 / 0]
      );
    }
    return null;
  },
  dq = function (t, r, n, o, u) {
    var l = r
      .map(function (c) {
        return rT(t, c, n, u, o);
      })
      .filter(function (c) {
        return !$e(c);
      });
    return l && l.length
      ? l.reduce(
          function (c, f) {
            return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
          },
          [1 / 0, -1 / 0]
        )
      : null;
  },
  nT = function (t, r, n, o, u) {
    var l = r.map(function (f) {
      var p = f.props.dataKey;
      return (n === "number" && p && rT(t, f, p, o)) || _o(t, p, n, u);
    });
    if (n === "number")
      return l.reduce(
        function (f, p) {
          return [Math.min(f[0], p[0]), Math.max(f[1], p[1])];
        },
        [1 / 0, -1 / 0]
      );
    var c = {};
    return l.reduce(function (f, p) {
      for (var v = 0, h = p.length; v < h; v++)
        c[p[v]] || ((c[p[v]] = !0), f.push(p[v]));
      return f;
    }, []);
  },
  iT = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  ei = function (t, r, n) {
    if (!t) return null;
    var o = t.scale,
      u = t.duplicateDomain,
      l = t.type,
      c = t.range,
      f = t.realScaleType === "scaleBand" ? o.bandwidth() / 2 : 2,
      p = (r || n) && l === "category" && o.bandwidth ? o.bandwidth() / f : 0;
    if (
      ((p =
        t.axisType === "angleAxis" && (c == null ? void 0 : c.length) >= 2
          ? wr(c[0] - c[1]) * 2 * p
          : p),
      r && (t.ticks || t.niceTicks))
    ) {
      var v = (t.ticks || t.niceTicks).map(function (h) {
        var g = u ? u.indexOf(h) : h;
        return { coordinate: o(g) + p, value: h, offset: p };
      });
      return v.filter(function (h) {
        return !lu(h.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (h, g) {
          return { coordinate: o(h) + p, value: h, index: g, offset: p };
        })
      : o.ticks && !n
      ? o.ticks(t.tickCount).map(function (h) {
          return { coordinate: o(h) + p, value: h, offset: p };
        })
      : o.domain().map(function (h, g) {
          return {
            coordinate: o(h) + p,
            value: u ? u[h] : h,
            index: g,
            offset: p,
          };
        });
  },
  Mv = new WeakMap(),
  Ml = function (t, r) {
    if (typeof r != "function") return t;
    Mv.has(t) || Mv.set(t, new WeakMap());
    var n = Mv.get(t);
    if (n.has(r)) return n.get(r);
    var o = function () {
      t.apply(void 0, arguments), r.apply(void 0, arguments);
    };
    return n.set(r, o), o;
  },
  pq = function (t, r, n) {
    var o = t.scale,
      u = t.type,
      l = t.layout,
      c = t.axisType;
    if (o === "auto")
      return l === "radial" && c === "radiusAxis"
        ? { scale: Mo(), realScaleType: "band" }
        : l === "radial" && c === "angleAxis"
        ? { scale: is(), realScaleType: "linear" }
        : u === "category" &&
          r &&
          (r.indexOf("LineChart") >= 0 ||
            r.indexOf("AreaChart") >= 0 ||
            (r.indexOf("ComposedChart") >= 0 && !n))
        ? { scale: So(), realScaleType: "point" }
        : u === "category"
        ? { scale: Mo(), realScaleType: "band" }
        : { scale: is(), realScaleType: "linear" };
    if (uu(o)) {
      var f = "scale".concat(qs(o));
      return { scale: (G_[f] || So)(), realScaleType: G_[f] ? f : "point" };
    }
    return Te(o) ? { scale: o } : { scale: So(), realScaleType: "point" };
  },
  lO = 1e-4,
  hq = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        o = t.range(),
        u = Math.min(o[0], o[1]) - lO,
        l = Math.max(o[0], o[1]) + lO,
        c = t(r[0]),
        f = t(r[n - 1]);
      (c < u || c > l || f < u || f > l) && t.domain([r[0], r[n - 1]]);
    }
  },
  vq = function (t, r) {
    if (!t) return null;
    for (var n = 0, o = t.length; n < o; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  yq = function (t, r) {
    if (!r || r.length !== 2 || !se(r[0]) || !se(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      o = Math.max(r[0], r[1]),
      u = [t[0], t[1]];
    return (
      (!se(t[0]) || t[0] < n) && (u[0] = n),
      (!se(t[1]) || t[1] > o) && (u[1] = o),
      u[0] > o && (u[0] = o),
      u[1] < n && (u[1] = n),
      u
    );
  },
  mq = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, o = t[0].length; n < o; ++n)
        for (var u = 0, l = 0, c = 0; c < r; ++c) {
          var f = lu(t[c][n][1]) ? t[c][n][0] : t[c][n][1];
          f >= 0
            ? ((t[c][n][0] = u), (t[c][n][1] = u + f), (u = t[c][n][1]))
            : ((t[c][n][0] = l), (t[c][n][1] = l + f), (l = t[c][n][1]));
        }
  },
  gq = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, o = t[0].length; n < o; ++n)
        for (var u = 0, l = 0; l < r; ++l) {
          var c = lu(t[l][n][1]) ? t[l][n][0] : t[l][n][1];
          c >= 0
            ? ((t[l][n][0] = u), (t[l][n][1] = u + c), (u = t[l][n][1]))
            : ((t[l][n][0] = 0), (t[l][n][1] = 0));
        }
  },
  bq = {
    sign: mq,
    expand: t2,
    none: Vi,
    silhouette: r2,
    wiggle: n2,
    positive: gq,
  },
  wq = function (t, r, n) {
    var o = r.map(function (c) {
        return c.props.dataKey;
      }),
      u = bq[n],
      l = e2()
        .keys(o)
        .value(function (c, f) {
          return +Rr(c, f, 0);
        })
        .order(my)
        .offset(u);
    return l(t);
  },
  xq = function (t, r, n, o, u, l) {
    if (!t) return null;
    var c = l ? r.reverse() : r,
      f = {},
      p = c.reduce(function (h, g) {
        var w,
          S =
            (w = g.type) !== null && w !== void 0 && w.defaultProps
              ? tt(tt({}, g.type.defaultProps), g.props)
              : g.props,
          x = S.stackId,
          b = S.hide;
        if (b) return h;
        var T = S[n],
          A = h[T] || { hasStack: !1, stackGroups: {} };
        if (ct(x)) {
          var E = A.stackGroups[x] || {
            numericAxisId: n,
            cateAxisId: o,
            items: [],
          };
          E.items.push(g), (A.hasStack = !0), (A.stackGroups[x] = E);
        } else A.stackGroups[Ls("_stackId_")] = { numericAxisId: n, cateAxisId: o, items: [g] };
        return tt(tt({}, h), {}, Ki({}, T, A));
      }, f),
      v = {};
    return Object.keys(p).reduce(function (h, g) {
      var w = p[g];
      if (w.hasStack) {
        var S = {};
        w.stackGroups = Object.keys(w.stackGroups).reduce(function (x, b) {
          var T = w.stackGroups[b];
          return tt(
            tt({}, x),
            {},
            Ki({}, b, {
              numericAxisId: n,
              cateAxisId: o,
              items: T.items,
              stackedData: wq(t, T.items, u),
            })
          );
        }, S);
      }
      return tt(tt({}, h), {}, Ki({}, g, w));
    }, v);
  },
  Sq = function (t, r) {
    var n = r.realScaleType,
      o = r.type,
      u = r.tickCount,
      l = r.originalDomain,
      c = r.allowDecimals,
      f = n || r.scale;
    if (f !== "auto" && f !== "linear") return null;
    if (u && o === "number" && l && (l[0] === "auto" || l[1] === "auto")) {
      var p = t.domain();
      if (!p.length) return null;
      var v = IL(p, u, c);
      return t.domain([Js(v), Zs(v)]), { niceTicks: v };
    }
    if (u && o === "number") {
      var h = t.domain(),
        g = NL(h, u, c);
      return { niceTicks: g };
    }
    return null;
  },
  sO = function (t) {
    var r = t.axis,
      n = t.ticks,
      o = t.offset,
      u = t.bandSize,
      l = t.entry,
      c = t.index;
    if (r.type === "category") return n[c] ? n[c].coordinate + o : null;
    var f = Rr(l, r.dataKey, r.domain[c]);
    return $e(f) ? null : r.scale(f) - u / 2 + o;
  },
  _q = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var o = Math.min(n[0], n[1]),
        u = Math.max(n[0], n[1]);
      return o <= 0 && u >= 0 ? 0 : u < 0 ? u : o;
    }
    return n[0];
  },
  Oq = function (t, r) {
    var n,
      o =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? tt(tt({}, t.type.defaultProps), t.props)
          : t.props,
      u = o.stackId;
    if (ct(u)) {
      var l = r[u];
      if (l) {
        var c = l.items.indexOf(t);
        return c >= 0 ? l.stackedData[c] : null;
      }
    }
    return null;
  },
  Pq = function (t) {
    return t.reduce(
      function (r, n) {
        return [
          Js(n.concat([r[0]]).filter(se)),
          Zs(n.concat([r[1]]).filter(se)),
        ];
      },
      [1 / 0, -1 / 0]
    );
  },
  aT = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (o, u) {
          var l = t[u],
            c = l.stackedData,
            f = c.reduce(
              function (p, v) {
                var h = Pq(v.slice(r, n + 1));
                return [Math.min(p[0], h[0]), Math.max(p[1], h[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(f[0], o[0]), Math.max(f[1], o[1])];
        },
        [1 / 0, -1 / 0]
      )
      .map(function (o) {
        return o === 1 / 0 || o === -1 / 0 ? 0 : o;
      });
  },
  cO = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  fO = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  zy = function (t, r, n) {
    if (Te(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var o = [];
    if (se(t[0])) o[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (cO.test(t[0])) {
      var u = +cO.exec(t[0])[1];
      o[0] = r[0] - u;
    } else Te(t[0]) ? (o[0] = t[0](r[0])) : (o[0] = r[0]);
    if (se(t[1])) o[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (fO.test(t[1])) {
      var l = +fO.exec(t[1])[1];
      o[1] = r[1] + l;
    } else Te(t[1]) ? (o[1] = t[1](r[1])) : (o[1] = r[1]);
    return o;
  },
  fs = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var o = t.scale.bandwidth();
      if (!n || o > 0) return o;
    }
    if (t && r && r.length >= 2) {
      for (
        var u = Hm(r, function (h) {
            return h.coordinate;
          }),
          l = 1 / 0,
          c = 1,
          f = u.length;
        c < f;
        c++
      ) {
        var p = u[c],
          v = u[c - 1];
        l = Math.min((p.coordinate || 0) - (v.coordinate || 0), l);
      }
      return l === 1 / 0 ? 0 : l;
    }
    return n ? void 0 : 0;
  },
  dO = function (t, r, n) {
    return !t || !t.length || vg(t, ir(n, "type.defaultProps.domain")) ? r : t;
  },
  oT = function (t, r) {
    var n = t.type.defaultProps
        ? tt(tt({}, t.type.defaultProps), t.props)
        : t.props,
      o = n.dataKey,
      u = n.name,
      l = n.unit,
      c = n.formatter,
      f = n.tooltipType,
      p = n.chartType,
      v = n.hide;
    return tt(
      tt({}, Re(t, !1)),
      {},
      {
        dataKey: o,
        unit: l,
        formatter: c,
        name: u || o,
        color: gg(t),
        value: Rr(r, o),
        type: f,
        payload: r,
        chartType: p,
        hide: v,
      }
    );
  };
function Fo(e) {
  "@babel/helpers - typeof";
  return (
    (Fo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fo(e)
  );
}
function pO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pO(Object(r), !0).forEach(function (n) {
          Aq(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : pO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Aq(e, t, r) {
  return (
    (t = Eq(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Eq(e) {
  var t = Tq(e, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function Tq(e, t) {
  if (Fo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ds = Math.PI / 180,
  Cq = function (t) {
    return (t * 180) / Math.PI;
  },
  St = function (t, r, n, o) {
    return { x: t + Math.cos(-ds * o) * n, y: r + Math.sin(-ds * o) * n };
  },
  kq = function (t, r) {
    var n = t.x,
      o = t.y,
      u = r.x,
      l = r.y;
    return Math.sqrt(Math.pow(n - u, 2) + Math.pow(o - l, 2));
  },
  jq = function (t, r) {
    var n = t.x,
      o = t.y,
      u = r.cx,
      l = r.cy,
      c = kq({ x: n, y: o }, { x: u, y: l });
    if (c <= 0) return { radius: c };
    var f = (n - u) / c,
      p = Math.acos(f);
    return (
      o > l && (p = 2 * Math.PI - p),
      { radius: c, angle: Cq(p), angleInRadian: p }
    );
  },
  Mq = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      o = Math.floor(r / 360),
      u = Math.floor(n / 360),
      l = Math.min(o, u);
    return { startAngle: r - l * 360, endAngle: n - l * 360 };
  },
  Iq = function (t, r) {
    var n = r.startAngle,
      o = r.endAngle,
      u = Math.floor(n / 360),
      l = Math.floor(o / 360),
      c = Math.min(u, l);
    return t + c * 360;
  },
  vO = function (t, r) {
    var n = t.x,
      o = t.y,
      u = jq({ x: n, y: o }, r),
      l = u.radius,
      c = u.angle,
      f = r.innerRadius,
      p = r.outerRadius;
    if (l < f || l > p) return !1;
    if (l === 0) return !0;
    var v = Mq(r),
      h = v.startAngle,
      g = v.endAngle,
      w = c,
      S;
    if (h <= g) {
      for (; w > g; ) w -= 360;
      for (; w < h; ) w += 360;
      S = w >= h && w <= g;
    } else {
      for (; w > h; ) w -= 360;
      for (; w < g; ) w += 360;
      S = w >= g && w <= h;
    }
    return S ? hO(hO({}, r), {}, { radius: l, angle: Iq(w, r) }) : null;
  };
function zo(e) {
  "@babel/helpers - typeof";
  return (
    (zo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zo(e)
  );
}
var Nq = ["offset"];
function Rq(e) {
  return qq(e) || Lq(e) || Dq(e) || $q();
}
function $q() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dq(e, t) {
  if (e) {
    if (typeof e == "string") return Uy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Uy(e, t);
  }
}
function Lq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function qq(e) {
  if (Array.isArray(e)) return Uy(e);
}
function Uy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Bq(e, t) {
  if (e == null) return {};
  var r = Fq(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Fq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function yO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yO(Object(r), !0).forEach(function (n) {
          zq(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : yO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function zq(e, t, r) {
  return (
    (t = Uq(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Uq(e) {
  var t = Wq(e, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function Wq(e, t) {
  if (zo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Uo.apply(this, arguments)
  );
}
var Hq = function (t) {
    var r = t.value,
      n = t.formatter,
      o = $e(t.children) ? r : t.children;
    return Te(n) ? n(o) : o;
  },
  Gq = function (t, r) {
    var n = wr(r - t),
      o = Math.min(Math.abs(r - t), 360);
    return n * o;
  },
  Kq = function (t, r, n) {
    var o = t.position,
      u = t.viewBox,
      l = t.offset,
      c = t.className,
      f = u,
      p = f.cx,
      v = f.cy,
      h = f.innerRadius,
      g = f.outerRadius,
      w = f.startAngle,
      S = f.endAngle,
      x = f.clockWise,
      b = (h + g) / 2,
      T = Gq(w, S),
      A = T >= 0 ? 1 : -1,
      E,
      C;
    o === "insideStart"
      ? ((E = w + A * l), (C = x))
      : o === "insideEnd"
      ? ((E = S - A * l), (C = !x))
      : o === "end" && ((E = S + A * l), (C = x)),
      (C = T <= 0 ? C : !C);
    var _ = St(p, v, b, E),
      P = St(p, v, b, E + (C ? 1 : -1) * 359),
      k = "M"
        .concat(_.x, ",")
        .concat(
          _.y,
          `
    A`
        )
        .concat(b, ",")
        .concat(b, ",0,1,")
        .concat(
          C ? 0 : 1,
          `,
    `
        )
        .concat(P.x, ",")
        .concat(P.y),
      I = $e(t.id) ? Ls("recharts-radial-line-") : t.id;
    return F.createElement(
      "text",
      Uo({}, n, {
        dominantBaseline: "central",
        className: De("recharts-radial-bar-label", c),
      }),
      F.createElement("defs", null, F.createElement("path", { id: I, d: k })),
      F.createElement("textPath", { xlinkHref: "#".concat(I) }, r)
    );
  },
  Vq = function (t) {
    var r = t.viewBox,
      n = t.offset,
      o = t.position,
      u = r,
      l = u.cx,
      c = u.cy,
      f = u.innerRadius,
      p = u.outerRadius,
      v = u.startAngle,
      h = u.endAngle,
      g = (v + h) / 2;
    if (o === "outside") {
      var w = St(l, c, p + n, g),
        S = w.x,
        x = w.y;
      return {
        x: S,
        y: x,
        textAnchor: S >= l ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (o === "center")
      return { x: l, y: c, textAnchor: "middle", verticalAnchor: "middle" };
    if (o === "centerTop")
      return { x: l, y: c, textAnchor: "middle", verticalAnchor: "start" };
    if (o === "centerBottom")
      return { x: l, y: c, textAnchor: "middle", verticalAnchor: "end" };
    var b = (f + p) / 2,
      T = St(l, c, b, g),
      A = T.x,
      E = T.y;
    return { x: A, y: E, textAnchor: "middle", verticalAnchor: "middle" };
  },
  Xq = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      o = t.offset,
      u = t.position,
      l = r,
      c = l.x,
      f = l.y,
      p = l.width,
      v = l.height,
      h = v >= 0 ? 1 : -1,
      g = h * o,
      w = h > 0 ? "end" : "start",
      S = h > 0 ? "start" : "end",
      x = p >= 0 ? 1 : -1,
      b = x * o,
      T = x > 0 ? "end" : "start",
      A = x > 0 ? "start" : "end";
    if (u === "top") {
      var E = {
        x: c + p / 2,
        y: f - h * o,
        textAnchor: "middle",
        verticalAnchor: w,
      };
      return st(st({}, E), n ? { height: Math.max(f - n.y, 0), width: p } : {});
    }
    if (u === "bottom") {
      var C = {
        x: c + p / 2,
        y: f + v + g,
        textAnchor: "middle",
        verticalAnchor: S,
      };
      return st(
        st({}, C),
        n ? { height: Math.max(n.y + n.height - (f + v), 0), width: p } : {}
      );
    }
    if (u === "left") {
      var _ = {
        x: c - b,
        y: f + v / 2,
        textAnchor: T,
        verticalAnchor: "middle",
      };
      return st(
        st({}, _),
        n ? { width: Math.max(_.x - n.x, 0), height: v } : {}
      );
    }
    if (u === "right") {
      var P = {
        x: c + p + b,
        y: f + v / 2,
        textAnchor: A,
        verticalAnchor: "middle",
      };
      return st(
        st({}, P),
        n ? { width: Math.max(n.x + n.width - P.x, 0), height: v } : {}
      );
    }
    var k = n ? { width: p, height: v } : {};
    return u === "insideLeft"
      ? st(
          { x: c + b, y: f + v / 2, textAnchor: A, verticalAnchor: "middle" },
          k
        )
      : u === "insideRight"
      ? st(
          {
            x: c + p - b,
            y: f + v / 2,
            textAnchor: T,
            verticalAnchor: "middle",
          },
          k
        )
      : u === "insideTop"
      ? st(
          { x: c + p / 2, y: f + g, textAnchor: "middle", verticalAnchor: S },
          k
        )
      : u === "insideBottom"
      ? st(
          {
            x: c + p / 2,
            y: f + v - g,
            textAnchor: "middle",
            verticalAnchor: w,
          },
          k
        )
      : u === "insideTopLeft"
      ? st({ x: c + b, y: f + g, textAnchor: A, verticalAnchor: S }, k)
      : u === "insideTopRight"
      ? st({ x: c + p - b, y: f + g, textAnchor: T, verticalAnchor: S }, k)
      : u === "insideBottomLeft"
      ? st({ x: c + b, y: f + v - g, textAnchor: A, verticalAnchor: w }, k)
      : u === "insideBottomRight"
      ? st({ x: c + p - b, y: f + v - g, textAnchor: T, verticalAnchor: w }, k)
      : ya(u) && (se(u.x) || Qn(u.x)) && (se(u.y) || Qn(u.y))
      ? st(
          {
            x: c + oi(u.x, p),
            y: f + oi(u.y, v),
            textAnchor: "end",
            verticalAnchor: "end",
          },
          k
        )
      : st(
          {
            x: c + p / 2,
            y: f + v / 2,
            textAnchor: "middle",
            verticalAnchor: "middle",
          },
          k
        );
  },
  Yq = function (t) {
    return "cx" in t && se(t.cx);
  };
function Tt(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = Bq(e, Nq),
    o = st({ offset: r }, n),
    u = o.viewBox,
    l = o.position,
    c = o.value,
    f = o.children,
    p = o.content,
    v = o.className,
    h = v === void 0 ? "" : v,
    g = o.textBreakAll;
  if (!u || ($e(c) && $e(f) && !ue.isValidElement(p) && !Te(p))) return null;
  if (ue.isValidElement(p)) return ue.cloneElement(p, o);
  var w;
  if (Te(p)) {
    if (((w = ue.createElement(p, o)), ue.isValidElement(w))) return w;
  } else w = Hq(o);
  var S = Yq(u),
    x = Re(o, !0);
  if (S && (l === "insideStart" || l === "insideEnd" || l === "end"))
    return Kq(o, w, x);
  var b = S ? Vq(o) : Xq(o);
  return F.createElement(
    Ql,
    Uo({ className: De("recharts-label", h) }, x, b, { breakAll: g }),
    w
  );
}
Tt.displayName = "Label";
var uT = function (t) {
    var r = t.cx,
      n = t.cy,
      o = t.angle,
      u = t.startAngle,
      l = t.endAngle,
      c = t.r,
      f = t.radius,
      p = t.innerRadius,
      v = t.outerRadius,
      h = t.x,
      g = t.y,
      w = t.top,
      S = t.left,
      x = t.width,
      b = t.height,
      T = t.clockWise,
      A = t.labelViewBox;
    if (A) return A;
    if (se(x) && se(b)) {
      if (se(h) && se(g)) return { x: h, y: g, width: x, height: b };
      if (se(w) && se(S)) return { x: w, y: S, width: x, height: b };
    }
    return se(h) && se(g)
      ? { x: h, y: g, width: 0, height: 0 }
      : se(r) && se(n)
      ? {
          cx: r,
          cy: n,
          startAngle: u || o || 0,
          endAngle: l || o || 0,
          innerRadius: p || 0,
          outerRadius: v || f || c || 0,
          clockWise: T,
        }
      : t.viewBox
      ? t.viewBox
      : {};
  },
  Qq = function (t, r) {
    return t
      ? t === !0
        ? F.createElement(Tt, { key: "label-implicit", viewBox: r })
        : ct(t)
        ? F.createElement(Tt, { key: "label-implicit", viewBox: r, value: t })
        : ue.isValidElement(t)
        ? t.type === Tt
          ? ue.cloneElement(t, { key: "label-implicit", viewBox: r })
          : F.createElement(Tt, {
              key: "label-implicit",
              content: t,
              viewBox: r,
            })
        : Te(t)
        ? F.createElement(Tt, { key: "label-implicit", content: t, viewBox: r })
        : ya(t)
        ? F.createElement(Tt, Uo({ viewBox: r }, t, { key: "label-implicit" }))
        : null
      : null;
  },
  Zq = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var o = t.children,
      u = uT(t),
      l = xr(o, Tt).map(function (f, p) {
        return ue.cloneElement(f, { viewBox: r || u, key: "label-".concat(p) });
      });
    if (!n) return l;
    var c = Qq(t.label, r || u);
    return [c].concat(Rq(l));
  };
Tt.parseViewBox = uT;
Tt.renderCallByParent = Zq;
var Iv, mO;
function Jq() {
  if (mO) return Iv;
  mO = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return (Iv = e), Iv;
}
var e3 = Jq();
const t3 = We(e3);
function Wo(e) {
  "@babel/helpers - typeof";
  return (
    (Wo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wo(e)
  );
}
var r3 = ["valueAccessor"],
  n3 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function i3(e) {
  return l3(e) || u3(e) || o3(e) || a3();
}
function a3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o3(e, t) {
  if (e) {
    if (typeof e == "string") return Wy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wy(e, t);
  }
}
function u3(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function l3(e) {
  if (Array.isArray(e)) return Wy(e);
}
function Wy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ps() {
  return (
    (ps = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ps.apply(this, arguments)
  );
}
function gO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function bO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gO(Object(r), !0).forEach(function (n) {
          s3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : gO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function s3(e, t, r) {
  return (
    (t = c3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function c3(e) {
  var t = f3(e, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function f3(e, t) {
  if (Wo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wO(e, t) {
  if (e == null) return {};
  var r = d3(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function d3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var p3 = function (t) {
  return Array.isArray(t.value) ? t3(t.value) : t.value;
};
function ai(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? p3 : t,
    n = wO(e, r3),
    o = n.data,
    u = n.dataKey,
    l = n.clockWise,
    c = n.id,
    f = n.textBreakAll,
    p = wO(n, n3);
  return !o || !o.length
    ? null
    : F.createElement(
        mt,
        { className: "recharts-label-list" },
        o.map(function (v, h) {
          var g = $e(u) ? r(v, h) : Rr(v && v.payload, u),
            w = $e(c) ? {} : { id: "".concat(c, "-").concat(h) };
          return F.createElement(
            Tt,
            ps({}, Re(v, !0), p, w, {
              parentViewBox: v.parentViewBox,
              value: g,
              textBreakAll: f,
              viewBox: Tt.parseViewBox(
                $e(l) ? v : bO(bO({}, v), {}, { clockWise: l })
              ),
              key: "label-".concat(h),
              index: h,
            })
          );
        })
      );
}
ai.displayName = "LabelList";
function h3(e, t) {
  return e
    ? e === !0
      ? F.createElement(ai, { key: "labelList-implicit", data: t })
      : F.isValidElement(e) || Te(e)
      ? F.createElement(ai, { key: "labelList-implicit", data: t, content: e })
      : ya(e)
      ? F.createElement(ai, ps({ data: t }, e, { key: "labelList-implicit" }))
      : null
    : null;
}
function v3(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    o = xr(n, ai).map(function (l, c) {
      return ue.cloneElement(l, { data: t, key: "labelList-".concat(c) });
    });
  if (!r) return o;
  var u = h3(e.label, t);
  return [u].concat(i3(o));
}
ai.renderCallByParent = v3;
function Ho(e) {
  "@babel/helpers - typeof";
  return (
    (Ho =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ho(e)
  );
}
function Hy() {
  return (
    (Hy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Hy.apply(this, arguments)
  );
}
function xO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function SO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xO(Object(r), !0).forEach(function (n) {
          y3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : xO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function y3(e, t, r) {
  return (
    (t = m3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function m3(e) {
  var t = g3(e, "string");
  return Ho(t) == "symbol" ? t : t + "";
}
function g3(e, t) {
  if (Ho(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var b3 = function (t, r) {
    var n = wr(r - t),
      o = Math.min(Math.abs(r - t), 359.999);
    return n * o;
  },
  Il = function (t) {
    var r = t.cx,
      n = t.cy,
      o = t.radius,
      u = t.angle,
      l = t.sign,
      c = t.isExternal,
      f = t.cornerRadius,
      p = t.cornerIsExternal,
      v = f * (c ? 1 : -1) + o,
      h = Math.asin(f / v) / ds,
      g = p ? u : u + l * h,
      w = St(r, n, v, g),
      S = St(r, n, o, g),
      x = p ? u - l * h : u,
      b = St(r, n, v * Math.cos(h * ds), x);
    return { center: w, circleTangency: S, lineTangency: b, theta: h };
  },
  lT = function (t) {
    var r = t.cx,
      n = t.cy,
      o = t.innerRadius,
      u = t.outerRadius,
      l = t.startAngle,
      c = t.endAngle,
      f = b3(l, c),
      p = l + f,
      v = St(r, n, u, l),
      h = St(r, n, u, p),
      g = "M "
        .concat(v.x, ",")
        .concat(
          v.y,
          `
    A `
        )
        .concat(u, ",")
        .concat(
          u,
          `,0,
    `
        )
        .concat(+(Math.abs(f) > 180), ",")
        .concat(
          +(l > p),
          `,
    `
        )
        .concat(h.x, ",")
        .concat(
          h.y,
          `
  `
        );
    if (o > 0) {
      var w = St(r, n, o, l),
        S = St(r, n, o, p);
      g += "L "
        .concat(S.x, ",")
        .concat(
          S.y,
          `
            A `
        )
        .concat(o, ",")
        .concat(
          o,
          `,0,
            `
        )
        .concat(+(Math.abs(f) > 180), ",")
        .concat(
          +(l <= p),
          `,
            `
        )
        .concat(w.x, ",")
        .concat(w.y, " Z");
    } else g += "L ".concat(r, ",").concat(n, " Z");
    return g;
  },
  w3 = function (t) {
    var r = t.cx,
      n = t.cy,
      o = t.innerRadius,
      u = t.outerRadius,
      l = t.cornerRadius,
      c = t.forceCornerRadius,
      f = t.cornerIsExternal,
      p = t.startAngle,
      v = t.endAngle,
      h = wr(v - p),
      g = Il({
        cx: r,
        cy: n,
        radius: u,
        angle: p,
        sign: h,
        cornerRadius: l,
        cornerIsExternal: f,
      }),
      w = g.circleTangency,
      S = g.lineTangency,
      x = g.theta,
      b = Il({
        cx: r,
        cy: n,
        radius: u,
        angle: v,
        sign: -h,
        cornerRadius: l,
        cornerIsExternal: f,
      }),
      T = b.circleTangency,
      A = b.lineTangency,
      E = b.theta,
      C = f ? Math.abs(p - v) : Math.abs(p - v) - x - E;
    if (C < 0)
      return c
        ? "M "
            .concat(S.x, ",")
            .concat(
              S.y,
              `
        a`
            )
            .concat(l, ",")
            .concat(l, ",0,0,1,")
            .concat(
              l * 2,
              `,0
        a`
            )
            .concat(l, ",")
            .concat(l, ",0,0,1,")
            .concat(
              -l * 2,
              `,0
      `
            )
        : lT({
            cx: r,
            cy: n,
            innerRadius: o,
            outerRadius: u,
            startAngle: p,
            endAngle: v,
          });
    var _ = "M "
      .concat(S.x, ",")
      .concat(
        S.y,
        `
    A`
      )
      .concat(l, ",")
      .concat(l, ",0,0,")
      .concat(+(h < 0), ",")
      .concat(w.x, ",")
      .concat(
        w.y,
        `
    A`
      )
      .concat(u, ",")
      .concat(u, ",0,")
      .concat(+(C > 180), ",")
      .concat(+(h < 0), ",")
      .concat(T.x, ",")
      .concat(
        T.y,
        `
    A`
      )
      .concat(l, ",")
      .concat(l, ",0,0,")
      .concat(+(h < 0), ",")
      .concat(A.x, ",")
      .concat(
        A.y,
        `
  `
      );
    if (o > 0) {
      var P = Il({
          cx: r,
          cy: n,
          radius: o,
          angle: p,
          sign: h,
          isExternal: !0,
          cornerRadius: l,
          cornerIsExternal: f,
        }),
        k = P.circleTangency,
        I = P.lineTangency,
        D = P.theta,
        G = Il({
          cx: r,
          cy: n,
          radius: o,
          angle: v,
          sign: -h,
          isExternal: !0,
          cornerRadius: l,
          cornerIsExternal: f,
        }),
        R = G.circleTangency,
        B = G.lineTangency,
        z = G.theta,
        V = f ? Math.abs(p - v) : Math.abs(p - v) - D - z;
      if (V < 0 && l === 0)
        return "".concat(_, "L").concat(r, ",").concat(n, "Z");
      _ += "L"
        .concat(B.x, ",")
        .concat(
          B.y,
          `
      A`
        )
        .concat(l, ",")
        .concat(l, ",0,0,")
        .concat(+(h < 0), ",")
        .concat(R.x, ",")
        .concat(
          R.y,
          `
      A`
        )
        .concat(o, ",")
        .concat(o, ",0,")
        .concat(+(V > 180), ",")
        .concat(+(h > 0), ",")
        .concat(k.x, ",")
        .concat(
          k.y,
          `
      A`
        )
        .concat(l, ",")
        .concat(l, ",0,0,")
        .concat(+(h < 0), ",")
        .concat(I.x, ",")
        .concat(I.y, "Z");
    } else _ += "L".concat(r, ",").concat(n, "Z");
    return _;
  },
  x3 = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  sT = function (t) {
    var r = SO(SO({}, x3), t),
      n = r.cx,
      o = r.cy,
      u = r.innerRadius,
      l = r.outerRadius,
      c = r.cornerRadius,
      f = r.forceCornerRadius,
      p = r.cornerIsExternal,
      v = r.startAngle,
      h = r.endAngle,
      g = r.className;
    if (l < u || v === h) return null;
    var w = De("recharts-sector", g),
      S = l - u,
      x = oi(c, S, 0, !0),
      b;
    return (
      x > 0 && Math.abs(v - h) < 360
        ? (b = w3({
            cx: n,
            cy: o,
            innerRadius: u,
            outerRadius: l,
            cornerRadius: Math.min(x, S / 2),
            forceCornerRadius: f,
            cornerIsExternal: p,
            startAngle: v,
            endAngle: h,
          }))
        : (b = lT({
            cx: n,
            cy: o,
            innerRadius: u,
            outerRadius: l,
            startAngle: v,
            endAngle: h,
          })),
      F.createElement(
        "path",
        Hy({}, Re(r, !0), { className: w, d: b, role: "img" })
      )
    );
  };
function Go(e) {
  "@babel/helpers - typeof";
  return (
    (Go =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Go(e)
  );
}
function Gy() {
  return (
    (Gy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gy.apply(this, arguments)
  );
}
function _O(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function OO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _O(Object(r), !0).forEach(function (n) {
          S3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _O(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function S3(e, t, r) {
  return (
    (t = _3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _3(e) {
  var t = O3(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function O3(e, t) {
  if (Go(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var PO = {
    curveBasisClosed: UM,
    curveBasisOpen: WM,
    curveBasis: zM,
    curveBumpX: TM,
    curveBumpY: CM,
    curveLinearClosed: HM,
    curveLinear: Fs,
    curveMonotoneX: GM,
    curveMonotoneY: KM,
    curveNatural: VM,
    curveStep: XM,
    curveStepAfter: QM,
    curveStepBefore: YM,
  },
  Nl = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  ho = function (t) {
    return t.x;
  },
  vo = function (t) {
    return t.y;
  },
  P3 = function (t, r) {
    if (Te(t)) return t;
    var n = "curve".concat(qs(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? PO["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : PO[n] || Fs;
  },
  A3 = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      o = t.points,
      u = o === void 0 ? [] : o,
      l = t.baseLine,
      c = t.layout,
      f = t.connectNulls,
      p = f === void 0 ? !1 : f,
      v = P3(n, c),
      h = p
        ? u.filter(function (x) {
            return Nl(x);
          })
        : u,
      g;
    if (Array.isArray(l)) {
      var w = p
          ? l.filter(function (x) {
              return Nl(x);
            })
          : l,
        S = h.map(function (x, b) {
          return OO(OO({}, x), {}, { base: w[b] });
        });
      return (
        c === "vertical"
          ? (g = Pl()
              .y(vo)
              .x1(ho)
              .x0(function (x) {
                return x.base.x;
              }))
          : (g = Pl()
              .x(ho)
              .y1(vo)
              .y0(function (x) {
                return x.base.y;
              })),
        g.defined(Nl).curve(v),
        g(S)
      );
    }
    return (
      c === "vertical" && se(l)
        ? (g = Pl().y(vo).x1(ho).x0(l))
        : se(l)
        ? (g = Pl().x(ho).y1(vo).y0(l))
        : (g = hA().x(ho).y(vo)),
      g.defined(Nl).curve(v),
      g(h)
    );
  },
  AO = function (t) {
    var r = t.className,
      n = t.points,
      o = t.path,
      u = t.pathRef;
    if ((!n || !n.length) && !o) return null;
    var l = n && n.length ? A3(t) : o;
    return F.createElement(
      "path",
      Gy({}, Re(t, !1), ql(t), {
        className: De("recharts-curve", r),
        d: l,
        ref: u,
      })
    );
  },
  Nv = { exports: {} },
  Rv,
  EO;
function E3() {
  if (EO) return Rv;
  EO = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Rv = e), Rv;
}
var $v, TO;
function T3() {
  if (TO) return $v;
  TO = 1;
  var e = E3();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    ($v = function () {
      function n(l, c, f, p, v, h) {
        if (h !== e) {
          var g = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((g.name = "Invariant Violation"), g);
        }
      }
      n.isRequired = n;
      function o() {
        return n;
      }
      var u = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: o,
        element: n,
        elementType: n,
        instanceOf: o,
        node: n,
        objectOf: o,
        oneOf: o,
        oneOfType: o,
        shape: o,
        exact: o,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return (u.PropTypes = u), u;
    }),
    $v
  );
}
var CO;
function C3() {
  return CO || ((CO = 1), (Nv.exports = T3()())), Nv.exports;
}
var k3 = C3();
const Ne = We(k3);
var j3 = Object.getOwnPropertyNames,
  M3 = Object.getOwnPropertySymbols,
  I3 = Object.prototype.hasOwnProperty;
function kO(e, t) {
  return function (n, o, u) {
    return e(n, o, u) && t(n, o, u);
  };
}
function Rl(e) {
  return function (r, n, o) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, o);
    var u = o.cache,
      l = u.get(r),
      c = u.get(n);
    if (l && c) return l === n && c === r;
    u.set(r, n), u.set(n, r);
    var f = e(r, n, o);
    return u.delete(r), u.delete(n), f;
  };
}
function jO(e) {
  return j3(e).concat(M3(e));
}
var N3 =
  Object.hasOwn ||
  function (e, t) {
    return I3.call(e, t);
  };
function di(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
var R3 = "__v",
  $3 = "__o",
  D3 = "_owner",
  MO = Object.getOwnPropertyDescriptor,
  IO = Object.keys;
function L3(e, t, r) {
  var n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function q3(e, t) {
  return di(e.getTime(), t.getTime());
}
function B3(e, t) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.cause === t.cause &&
    e.stack === t.stack
  );
}
function F3(e, t) {
  return e === t;
}
function NO(e, t, r) {
  var n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  for (
    var o = new Array(n), u = e.entries(), l, c, f = 0;
    (l = u.next()) && !l.done;

  ) {
    for (var p = t.entries(), v = !1, h = 0; (c = p.next()) && !c.done; ) {
      if (o[h]) {
        h++;
        continue;
      }
      var g = l.value,
        w = c.value;
      if (
        r.equals(g[0], w[0], f, h, e, t, r) &&
        r.equals(g[1], w[1], g[0], w[0], e, t, r)
      ) {
        v = o[h] = !0;
        break;
      }
      h++;
    }
    if (!v) return !1;
    f++;
  }
  return !0;
}
var z3 = di;
function U3(e, t, r) {
  var n = IO(e),
    o = n.length;
  if (IO(t).length !== o) return !1;
  for (; o-- > 0; ) if (!cT(e, t, r, n[o])) return !1;
  return !0;
}
function yo(e, t, r) {
  var n = jO(e),
    o = n.length;
  if (jO(t).length !== o) return !1;
  for (var u, l, c; o-- > 0; )
    if (
      ((u = n[o]),
      !cT(e, t, r, u) ||
        ((l = MO(e, u)),
        (c = MO(t, u)),
        (l || c) &&
          (!l ||
            !c ||
            l.configurable !== c.configurable ||
            l.enumerable !== c.enumerable ||
            l.writable !== c.writable)))
    )
      return !1;
  return !0;
}
function W3(e, t) {
  return di(e.valueOf(), t.valueOf());
}
function H3(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function RO(e, t, r) {
  var n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  for (
    var o = new Array(n), u = e.values(), l, c;
    (l = u.next()) && !l.done;

  ) {
    for (var f = t.values(), p = !1, v = 0; (c = f.next()) && !c.done; ) {
      if (!o[v] && r.equals(l.value, c.value, l.value, c.value, e, t, r)) {
        p = o[v] = !0;
        break;
      }
      v++;
    }
    if (!p) return !1;
  }
  return !0;
}
function G3(e, t) {
  var r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function K3(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function cT(e, t, r, n) {
  return (n === D3 || n === $3 || n === R3) && (e.$$typeof || t.$$typeof)
    ? !0
    : N3(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var V3 = "[object Arguments]",
  X3 = "[object Boolean]",
  Y3 = "[object Date]",
  Q3 = "[object Error]",
  Z3 = "[object Map]",
  J3 = "[object Number]",
  eB = "[object Object]",
  tB = "[object RegExp]",
  rB = "[object Set]",
  nB = "[object String]",
  iB = "[object URL]",
  aB = Array.isArray,
  $O =
    typeof ArrayBuffer == "function" && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  DO = Object.assign,
  oB = Object.prototype.toString.call.bind(Object.prototype.toString);
function uB(e) {
  var t = e.areArraysEqual,
    r = e.areDatesEqual,
    n = e.areErrorsEqual,
    o = e.areFunctionsEqual,
    u = e.areMapsEqual,
    l = e.areNumbersEqual,
    c = e.areObjectsEqual,
    f = e.arePrimitiveWrappersEqual,
    p = e.areRegExpsEqual,
    v = e.areSetsEqual,
    h = e.areTypedArraysEqual,
    g = e.areUrlsEqual;
  return function (S, x, b) {
    if (S === x) return !0;
    if (S == null || x == null) return !1;
    var T = typeof S;
    if (T !== typeof x) return !1;
    if (T !== "object")
      return T === "number" ? l(S, x, b) : T === "function" ? o(S, x, b) : !1;
    var A = S.constructor;
    if (A !== x.constructor) return !1;
    if (A === Object) return c(S, x, b);
    if (aB(S)) return t(S, x, b);
    if ($O != null && $O(S)) return h(S, x, b);
    if (A === Date) return r(S, x, b);
    if (A === RegExp) return p(S, x, b);
    if (A === Map) return u(S, x, b);
    if (A === Set) return v(S, x, b);
    var E = oB(S);
    return E === Y3
      ? r(S, x, b)
      : E === tB
      ? p(S, x, b)
      : E === Z3
      ? u(S, x, b)
      : E === rB
      ? v(S, x, b)
      : E === eB
      ? typeof S.then != "function" && typeof x.then != "function" && c(S, x, b)
      : E === iB
      ? g(S, x, b)
      : E === Q3
      ? n(S, x, b)
      : E === V3
      ? c(S, x, b)
      : E === X3 || E === J3 || E === nB
      ? f(S, x, b)
      : !1;
  };
}
function lB(e) {
  var t = e.circular,
    r = e.createCustomConfig,
    n = e.strict,
    o = {
      areArraysEqual: n ? yo : L3,
      areDatesEqual: q3,
      areErrorsEqual: B3,
      areFunctionsEqual: F3,
      areMapsEqual: n ? kO(NO, yo) : NO,
      areNumbersEqual: z3,
      areObjectsEqual: n ? yo : U3,
      arePrimitiveWrappersEqual: W3,
      areRegExpsEqual: H3,
      areSetsEqual: n ? kO(RO, yo) : RO,
      areTypedArraysEqual: n ? yo : G3,
      areUrlsEqual: K3,
    };
  if ((r && (o = DO({}, o, r(o))), t)) {
    var u = Rl(o.areArraysEqual),
      l = Rl(o.areMapsEqual),
      c = Rl(o.areObjectsEqual),
      f = Rl(o.areSetsEqual);
    o = DO({}, o, {
      areArraysEqual: u,
      areMapsEqual: l,
      areObjectsEqual: c,
      areSetsEqual: f,
    });
  }
  return o;
}
function sB(e) {
  return function (t, r, n, o, u, l, c) {
    return e(t, r, c);
  };
}
function cB(e) {
  var t = e.circular,
    r = e.comparator,
    n = e.createState,
    o = e.equals,
    u = e.strict;
  if (n)
    return function (f, p) {
      var v = n(),
        h = v.cache,
        g = h === void 0 ? (t ? new WeakMap() : void 0) : h,
        w = v.meta;
      return r(f, p, { cache: g, equals: o, meta: w, strict: u });
    };
  if (t)
    return function (f, p) {
      return r(f, p, {
        cache: new WeakMap(),
        equals: o,
        meta: void 0,
        strict: u,
      });
    };
  var l = { cache: void 0, equals: o, meta: void 0, strict: u };
  return function (f, p) {
    return r(f, p, l);
  };
}
var fB = Mn();
Mn({ strict: !0 });
Mn({ circular: !0 });
Mn({ circular: !0, strict: !0 });
Mn({
  createInternalComparator: function () {
    return di;
  },
});
Mn({
  strict: !0,
  createInternalComparator: function () {
    return di;
  },
});
Mn({
  circular: !0,
  createInternalComparator: function () {
    return di;
  },
});
Mn({
  circular: !0,
  createInternalComparator: function () {
    return di;
  },
  strict: !0,
});
function Mn(e) {
  e === void 0 && (e = {});
  var t = e.circular,
    r = t === void 0 ? !1 : t,
    n = e.createInternalComparator,
    o = e.createState,
    u = e.strict,
    l = u === void 0 ? !1 : u,
    c = lB(e),
    f = uB(c),
    p = n ? n(f) : sB(f);
  return cB({
    circular: r,
    comparator: f,
    createState: o,
    equals: p,
    strict: l,
  });
}
function dB(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function LO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function o(u) {
      r < 0 && (r = u), u - r > t ? (e(u), (r = -1)) : dB(o);
    };
  requestAnimationFrame(n);
}
function Ky(e) {
  "@babel/helpers - typeof";
  return (
    (Ky =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ky(e)
  );
}
function pB(e) {
  return mB(e) || yB(e) || vB(e) || hB();
}
function hB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vB(e, t) {
  if (e) {
    if (typeof e == "string") return qO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qO(e, t);
  }
}
function qO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yB(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function mB(e) {
  if (Array.isArray(e)) return e;
}
function gB() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function o(u) {
      if (!r) {
        if (Array.isArray(u)) {
          if (!u.length) return;
          var l = u,
            c = pB(l),
            f = c[0],
            p = c.slice(1);
          if (typeof f == "number") {
            LO(o.bind(null, p), f);
            return;
          }
          o(f), LO(o.bind(null, p));
          return;
        }
        Ky(u) === "object" && ((e = u), t(e)), typeof u == "function" && u();
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (u) {
      (r = !1), n(u);
    },
    subscribe: function (u) {
      return (
        (t = u),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Ko(e) {
  "@babel/helpers - typeof";
  return (
    (Ko =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ko(e)
  );
}
function BO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function FO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? BO(Object(r), !0).forEach(function (n) {
          fT(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : BO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function fT(e, t, r) {
  return (
    (t = bB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function bB(e) {
  var t = wB(e, "string");
  return Ko(t) === "symbol" ? t : String(t);
}
function wB(e, t) {
  if (Ko(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ko(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xB = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, o) {
      return n.filter(function (u) {
        return o.includes(u);
      });
    });
  },
  SB = function (t) {
    return t;
  },
  _B = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  Oo = function (t, r) {
    return Object.keys(r).reduce(function (n, o) {
      return FO(FO({}, n), {}, fT({}, o, t(o, r[o])));
    }, {});
  },
  zO = function (t, r, n) {
    return t
      .map(function (o) {
        return "".concat(_B(o), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function OB(e, t) {
  return EB(e) || AB(e, t) || dT(e, t) || PB();
}
function PB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AB(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function EB(e) {
  if (Array.isArray(e)) return e;
}
function TB(e) {
  return jB(e) || kB(e) || dT(e) || CB();
}
function CB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dT(e, t) {
  if (e) {
    if (typeof e == "string") return Vy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vy(e, t);
  }
}
function kB(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function jB(e) {
  if (Array.isArray(e)) return Vy(e);
}
function Vy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var hs = 1e-4,
  pT = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  hT = function (t, r) {
    return t
      .map(function (n, o) {
        return n * Math.pow(r, o);
      })
      .reduce(function (n, o) {
        return n + o;
      });
  },
  UO = function (t, r) {
    return function (n) {
      var o = pT(t, r);
      return hT(o, n);
    };
  },
  MB = function (t, r) {
    return function (n) {
      var o = pT(t, r),
        u = [].concat(
          TB(
            o
              .map(function (l, c) {
                return l * c;
              })
              .slice(1)
          ),
          [0]
        );
      return hT(u, n);
    };
  },
  WO = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var o = r[0],
      u = r[1],
      l = r[2],
      c = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          (o = 0), (u = 0), (l = 1), (c = 1);
          break;
        case "ease":
          (o = 0.25), (u = 0.1), (l = 0.25), (c = 1);
          break;
        case "ease-in":
          (o = 0.42), (u = 0), (l = 1), (c = 1);
          break;
        case "ease-out":
          (o = 0.42), (u = 0), (l = 0.58), (c = 1);
          break;
        case "ease-in-out":
          (o = 0), (u = 0), (l = 0.58), (c = 1);
          break;
        default: {
          var f = r[0].split("(");
          if (
            f[0] === "cubic-bezier" &&
            f[1].split(")")[0].split(",").length === 4
          ) {
            var p = f[1]
                .split(")")[0]
                .split(",")
                .map(function (b) {
                  return parseFloat(b);
                }),
              v = OB(p, 4);
            (o = v[0]), (u = v[1]), (l = v[2]), (c = v[3]);
          }
        }
      }
    var h = UO(o, l),
      g = UO(u, c),
      w = MB(o, l),
      S = function (T) {
        return T > 1 ? 1 : T < 0 ? 0 : T;
      },
      x = function (T) {
        for (var A = T > 1 ? 1 : T, E = A, C = 0; C < 8; ++C) {
          var _ = h(E) - A,
            P = w(E);
          if (Math.abs(_ - A) < hs || P < hs) return g(E);
          E = S(E - _ / P);
        }
        return g(E);
      };
    return (x.isStepper = !1), x;
  },
  IB = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      o = t.damping,
      u = o === void 0 ? 8 : o,
      l = t.dt,
      c = l === void 0 ? 17 : l,
      f = function (v, h, g) {
        var w = -(v - h) * n,
          S = g * u,
          x = g + ((w - S) * c) / 1e3,
          b = (g * c) / 1e3 + v;
        return Math.abs(b - h) < hs && Math.abs(x) < hs ? [h, 0] : [b, x];
      };
    return (f.isStepper = !0), (f.dt = c), f;
  },
  NB = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var o = r[0];
    if (typeof o == "string")
      switch (o) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return WO(o);
        case "spring":
          return IB();
        default:
          if (o.split("(")[0] === "cubic-bezier") return WO(o);
      }
    return typeof o == "function" ? o : null;
  };
function Vo(e) {
  "@babel/helpers - typeof";
  return (
    (Vo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vo(e)
  );
}
function HO(e) {
  return DB(e) || $B(e) || vT(e) || RB();
}
function RB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $B(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function DB(e) {
  if (Array.isArray(e)) return Yy(e);
}
function GO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? GO(Object(r), !0).forEach(function (n) {
          Xy(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : GO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Xy(e, t, r) {
  return (
    (t = LB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function LB(e) {
  var t = qB(e, "string");
  return Vo(t) === "symbol" ? t : String(t);
}
function qB(e, t) {
  if (Vo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BB(e, t) {
  return UB(e) || zB(e, t) || vT(e, t) || FB();
}
function FB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vT(e, t) {
  if (e) {
    if (typeof e == "string") return Yy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yy(e, t);
  }
}
function Yy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zB(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function UB(e) {
  if (Array.isArray(e)) return e;
}
var vs = function (t, r, n) {
    return t + (r - t) * n;
  },
  Qy = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  WB = function e(t, r, n) {
    var o = Oo(function (u, l) {
      if (Qy(l)) {
        var c = t(l.from, l.to, l.velocity),
          f = BB(c, 2),
          p = f[0],
          v = f[1];
        return xt(xt({}, l), {}, { from: p, velocity: v });
      }
      return l;
    }, r);
    return n < 1
      ? Oo(function (u, l) {
          return Qy(l)
            ? xt(
                xt({}, l),
                {},
                {
                  velocity: vs(l.velocity, o[u].velocity, n),
                  from: vs(l.from, o[u].from, n),
                }
              )
            : l;
        }, r)
      : e(t, o, n - 1);
  };
const HB = function (e, t, r, n, o) {
  var u = xB(e, t),
    l = u.reduce(function (b, T) {
      return xt(xt({}, b), {}, Xy({}, T, [e[T], t[T]]));
    }, {}),
    c = u.reduce(function (b, T) {
      return xt(
        xt({}, b),
        {},
        Xy({}, T, { from: e[T], velocity: 0, to: t[T] })
      );
    }, {}),
    f = -1,
    p,
    v,
    h = function () {
      return null;
    },
    g = function () {
      return Oo(function (T, A) {
        return A.from;
      }, c);
    },
    w = function () {
      return !Object.values(c).filter(Qy).length;
    },
    S = function (T) {
      p || (p = T);
      var A = T - p,
        E = A / r.dt;
      (c = WB(r, c, E)),
        o(xt(xt(xt({}, e), t), g())),
        (p = T),
        w() || (f = requestAnimationFrame(h));
    },
    x = function (T) {
      v || (v = T);
      var A = (T - v) / n,
        E = Oo(function (_, P) {
          return vs.apply(void 0, HO(P).concat([r(A)]));
        }, l);
      if ((o(xt(xt(xt({}, e), t), E)), A < 1)) f = requestAnimationFrame(h);
      else {
        var C = Oo(function (_, P) {
          return vs.apply(void 0, HO(P).concat([r(1)]));
        }, l);
        o(xt(xt(xt({}, e), t), C));
      }
    };
  return (
    (h = r.isStepper ? S : x),
    function () {
      return (
        requestAnimationFrame(h),
        function () {
          cancelAnimationFrame(f);
        }
      );
    }
  );
};
function na(e) {
  "@babel/helpers - typeof";
  return (
    (na =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    na(e)
  );
}
var GB = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function KB(e, t) {
  if (e == null) return {};
  var r = VB(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function VB(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    u;
  for (u = 0; u < n.length; u++)
    (o = n[u]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Dv(e) {
  return ZB(e) || QB(e) || YB(e) || XB();
}
function XB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YB(e, t) {
  if (e) {
    if (typeof e == "string") return Zy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zy(e, t);
  }
}
function QB(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function ZB(e) {
  if (Array.isArray(e)) return Zy(e);
}
function Zy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function KO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? KO(Object(r), !0).forEach(function (n) {
          wo(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : KO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wo(e, t, r) {
  return (
    (t = yT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, yT(n.key), n);
  }
}
function t4(e, t, r) {
  return (
    e4(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function yT(e) {
  var t = r4(e, "string");
  return na(t) === "symbol" ? t : String(t);
}
function r4(e, t) {
  if (na(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (na(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function n4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Jy(e, t);
}
function Jy(e, t) {
  return (
    (Jy = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Jy(e, t)
  );
}
function i4(e) {
  var t = a4();
  return function () {
    var n = ys(e),
      o;
    if (t) {
      var u = ys(this).constructor;
      o = Reflect.construct(n, arguments, u);
    } else o = n.apply(this, arguments);
    return em(this, o);
  };
}
function em(e, t) {
  if (t && (na(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return tm(e);
}
function tm(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function a4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ys(e) {
  return (
    (ys = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ys(e)
  );
}
var An = (function (e) {
  n4(r, e);
  var t = i4(r);
  function r(n, o) {
    var u;
    JB(this, r), (u = t.call(this, n, o));
    var l = u.props,
      c = l.isActive,
      f = l.attributeName,
      p = l.from,
      v = l.to,
      h = l.steps,
      g = l.children,
      w = l.duration;
    if (
      ((u.handleStyleChange = u.handleStyleChange.bind(tm(u))),
      (u.changeStyle = u.changeStyle.bind(tm(u))),
      !c || w <= 0)
    )
      return (
        (u.state = { style: {} }),
        typeof g == "function" && (u.state = { style: v }),
        em(u)
      );
    if (h && h.length) u.state = { style: h[0].style };
    else if (p) {
      if (typeof g == "function") return (u.state = { style: p }), em(u);
      u.state = { style: f ? wo({}, f, p) : p };
    } else u.state = { style: {} };
    return u;
  }
  return (
    t4(r, [
      {
        key: "componentDidMount",
        value: function () {
          var o = this.props,
            u = o.isActive,
            l = o.canBegin;
          (this.mounted = !0), !(!u || !l) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (o) {
          var u = this.props,
            l = u.isActive,
            c = u.canBegin,
            f = u.attributeName,
            p = u.shouldReAnimate,
            v = u.to,
            h = u.from,
            g = this.state.style;
          if (c) {
            if (!l) {
              var w = { style: f ? wo({}, f, v) : v };
              this.state &&
                g &&
                ((f && g[f] !== v) || (!f && g !== v)) &&
                this.setState(w);
              return;
            }
            if (!(fB(o.to, v) && o.canBegin && o.isActive)) {
              var S = !o.canBegin || !o.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var x = S || p ? h : o.to;
              if (this.state && g) {
                var b = { style: f ? wo({}, f, x) : x };
                ((f && g[f] !== x) || (!f && g !== x)) && this.setState(b);
              }
              this.runAnimation(
                mr(mr({}, this.props), {}, { from: x, begin: 0 })
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var o = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            o && o();
        },
      },
      {
        key: "handleStyleChange",
        value: function (o) {
          this.changeStyle(o);
        },
      },
      {
        key: "changeStyle",
        value: function (o) {
          this.mounted && this.setState({ style: o });
        },
      },
      {
        key: "runJSAnimation",
        value: function (o) {
          var u = this,
            l = o.from,
            c = o.to,
            f = o.duration,
            p = o.easing,
            v = o.begin,
            h = o.onAnimationEnd,
            g = o.onAnimationStart,
            w = HB(l, c, NB(p), f, this.changeStyle),
            S = function () {
              u.stopJSAnimation = w();
            };
          this.manager.start([g, v, S, f, h]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (o) {
          var u = this,
            l = o.steps,
            c = o.begin,
            f = o.onAnimationStart,
            p = l[0],
            v = p.style,
            h = p.duration,
            g = h === void 0 ? 0 : h,
            w = function (x, b, T) {
              if (T === 0) return x;
              var A = b.duration,
                E = b.easing,
                C = E === void 0 ? "ease" : E,
                _ = b.style,
                P = b.properties,
                k = b.onAnimationEnd,
                I = T > 0 ? l[T - 1] : b,
                D = P || Object.keys(_);
              if (typeof C == "function" || C === "spring")
                return [].concat(Dv(x), [
                  u.runJSAnimation.bind(u, {
                    from: I.style,
                    to: _,
                    duration: A,
                    easing: C,
                  }),
                  A,
                ]);
              var G = zO(D, A, C),
                R = mr(mr(mr({}, I.style), _), {}, { transition: G });
              return [].concat(Dv(x), [R, A, k]).filter(SB);
            };
          return this.manager.start(
            [f].concat(Dv(l.reduce(w, [v, Math.max(g, c)])), [o.onAnimationEnd])
          );
        },
      },
      {
        key: "runAnimation",
        value: function (o) {
          this.manager || (this.manager = gB());
          var u = o.begin,
            l = o.duration,
            c = o.attributeName,
            f = o.to,
            p = o.easing,
            v = o.onAnimationStart,
            h = o.onAnimationEnd,
            g = o.steps,
            w = o.children,
            S = this.manager;
          if (
            ((this.unSubscribe = S.subscribe(this.handleStyleChange)),
            typeof p == "function" || typeof w == "function" || p === "spring")
          ) {
            this.runJSAnimation(o);
            return;
          }
          if (g.length > 1) {
            this.runStepAnimation(o);
            return;
          }
          var x = c ? wo({}, c, f) : f,
            b = zO(Object.keys(x), l, p);
          S.start([v, u, mr(mr({}, x), {}, { transition: b }), l, h]);
        },
      },
      {
        key: "render",
        value: function () {
          var o = this.props,
            u = o.children;
          o.begin;
          var l = o.duration;
          o.attributeName, o.easing;
          var c = o.isActive;
          o.steps,
            o.from,
            o.to,
            o.canBegin,
            o.onAnimationEnd,
            o.shouldReAnimate,
            o.onAnimationReStart;
          var f = KB(o, GB),
            p = ue.Children.count(u),
            v = this.state.style;
          if (typeof u == "function") return u(v);
          if (!c || p === 0 || l <= 0) return u;
          var h = function (w) {
            var S = w.props,
              x = S.style,
              b = x === void 0 ? {} : x,
              T = S.className,
              A = ue.cloneElement(
                w,
                mr(mr({}, f), {}, { style: mr(mr({}, b), v), className: T })
              );
            return A;
          };
          return p === 1
            ? h(ue.Children.only(u))
            : F.createElement(
                "div",
                null,
                ue.Children.map(u, function (g) {
                  return h(g);
                })
              );
        },
      },
    ]),
    r
  );
})(ue.PureComponent);
An.displayName = "Animate";
An.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
An.propTypes = {
  from: Ne.oneOfType([Ne.object, Ne.string]),
  to: Ne.oneOfType([Ne.object, Ne.string]),
  attributeName: Ne.string,
  duration: Ne.number,
  begin: Ne.number,
  easing: Ne.oneOfType([Ne.string, Ne.func]),
  steps: Ne.arrayOf(
    Ne.shape({
      duration: Ne.number.isRequired,
      style: Ne.object.isRequired,
      easing: Ne.oneOfType([
        Ne.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        Ne.func,
      ]),
      properties: Ne.arrayOf("string"),
      onAnimationEnd: Ne.func,
    })
  ),
  children: Ne.oneOfType([Ne.node, Ne.func]),
  isActive: Ne.bool,
  canBegin: Ne.bool,
  onAnimationEnd: Ne.func,
  shouldReAnimate: Ne.bool,
  onAnimationStart: Ne.func,
  onAnimationReStart: Ne.func,
};
function Xo(e) {
  "@babel/helpers - typeof";
  return (
    (Xo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xo(e)
  );
}
function ms() {
  return (
    (ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ms.apply(this, arguments)
  );
}
function o4(e, t) {
  return c4(e) || s4(e, t) || l4(e, t) || u4();
}
function u4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l4(e, t) {
  if (e) {
    if (typeof e == "string") return VO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return VO(e, t);
  }
}
function VO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function s4(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function c4(e) {
  if (Array.isArray(e)) return e;
}
function XO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function YO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? XO(Object(r), !0).forEach(function (n) {
          f4(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : XO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function f4(e, t, r) {
  return (
    (t = d4(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function d4(e) {
  var t = p4(e, "string");
  return Xo(t) == "symbol" ? t : t + "";
}
function p4(e, t) {
  if (Xo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var QO = function (t, r, n, o, u) {
    var l = Math.min(Math.abs(n) / 2, Math.abs(o) / 2),
      c = o >= 0 ? 1 : -1,
      f = n >= 0 ? 1 : -1,
      p = (o >= 0 && n >= 0) || (o < 0 && n < 0) ? 1 : 0,
      v;
    if (l > 0 && u instanceof Array) {
      for (var h = [0, 0, 0, 0], g = 0, w = 4; g < w; g++)
        h[g] = u[g] > l ? l : u[g];
      (v = "M".concat(t, ",").concat(r + c * h[0])),
        h[0] > 0 &&
          (v += "A "
            .concat(h[0], ",")
            .concat(h[0], ",0,0,")
            .concat(p, ",")
            .concat(t + f * h[0], ",")
            .concat(r)),
        (v += "L ".concat(t + n - f * h[1], ",").concat(r)),
        h[1] > 0 &&
          (v += "A "
            .concat(h[1], ",")
            .concat(h[1], ",0,0,")
            .concat(
              p,
              `,
        `
            )
            .concat(t + n, ",")
            .concat(r + c * h[1])),
        (v += "L ".concat(t + n, ",").concat(r + o - c * h[2])),
        h[2] > 0 &&
          (v += "A "
            .concat(h[2], ",")
            .concat(h[2], ",0,0,")
            .concat(
              p,
              `,
        `
            )
            .concat(t + n - f * h[2], ",")
            .concat(r + o)),
        (v += "L ".concat(t + f * h[3], ",").concat(r + o)),
        h[3] > 0 &&
          (v += "A "
            .concat(h[3], ",")
            .concat(h[3], ",0,0,")
            .concat(
              p,
              `,
        `
            )
            .concat(t, ",")
            .concat(r + o - c * h[3])),
        (v += "Z");
    } else if (l > 0 && u === +u && u > 0) {
      var S = Math.min(l, u);
      v = "M "
        .concat(t, ",")
        .concat(
          r + c * S,
          `
            A `
        )
        .concat(S, ",")
        .concat(S, ",0,0,")
        .concat(p, ",")
        .concat(t + f * S, ",")
        .concat(
          r,
          `
            L `
        )
        .concat(t + n - f * S, ",")
        .concat(
          r,
          `
            A `
        )
        .concat(S, ",")
        .concat(S, ",0,0,")
        .concat(p, ",")
        .concat(t + n, ",")
        .concat(
          r + c * S,
          `
            L `
        )
        .concat(t + n, ",")
        .concat(
          r + o - c * S,
          `
            A `
        )
        .concat(S, ",")
        .concat(S, ",0,0,")
        .concat(p, ",")
        .concat(t + n - f * S, ",")
        .concat(
          r + o,
          `
            L `
        )
        .concat(t + f * S, ",")
        .concat(
          r + o,
          `
            A `
        )
        .concat(S, ",")
        .concat(S, ",0,0,")
        .concat(p, ",")
        .concat(t, ",")
        .concat(r + o - c * S, " Z");
    } else
      v = "M "
        .concat(t, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(o, " h ")
        .concat(-n, " Z");
    return v;
  },
  h4 = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      o = t.y,
      u = r.x,
      l = r.y,
      c = r.width,
      f = r.height;
    if (Math.abs(c) > 0 && Math.abs(f) > 0) {
      var p = Math.min(u, u + c),
        v = Math.max(u, u + c),
        h = Math.min(l, l + f),
        g = Math.max(l, l + f);
      return n >= p && n <= v && o >= h && o <= g;
    }
    return !1;
  },
  v4 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  bg = function (t) {
    var r = YO(YO({}, v4), t),
      n = ue.useRef(),
      o = ue.useState(-1),
      u = o4(o, 2),
      l = u[0],
      c = u[1];
    ue.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var C = n.current.getTotalLength();
          C && c(C);
        } catch {}
    }, []);
    var f = r.x,
      p = r.y,
      v = r.width,
      h = r.height,
      g = r.radius,
      w = r.className,
      S = r.animationEasing,
      x = r.animationDuration,
      b = r.animationBegin,
      T = r.isAnimationActive,
      A = r.isUpdateAnimationActive;
    if (f !== +f || p !== +p || v !== +v || h !== +h || v === 0 || h === 0)
      return null;
    var E = De("recharts-rectangle", w);
    return A
      ? F.createElement(
          An,
          {
            canBegin: l > 0,
            from: { width: v, height: h, x: f, y: p },
            to: { width: v, height: h, x: f, y: p },
            duration: x,
            animationEasing: S,
            isActive: A,
          },
          function (C) {
            var _ = C.width,
              P = C.height,
              k = C.x,
              I = C.y;
            return F.createElement(
              An,
              {
                canBegin: l > 0,
                from: "0px ".concat(l === -1 ? 1 : l, "px"),
                to: "".concat(l, "px 0px"),
                attributeName: "strokeDasharray",
                begin: b,
                duration: x,
                isActive: T,
                easing: S,
              },
              F.createElement(
                "path",
                ms({}, Re(r, !0), {
                  className: E,
                  d: QO(k, I, _, P, g),
                  ref: n,
                })
              )
            );
          }
        )
      : F.createElement(
          "path",
          ms({}, Re(r, !0), { className: E, d: QO(f, p, v, h, g) })
        );
  };
function rm() {
  return (
    (rm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    rm.apply(this, arguments)
  );
}
var mT = function (t) {
  var r = t.cx,
    n = t.cy,
    o = t.r,
    u = t.className,
    l = De("recharts-dot", u);
  return r === +r && n === +n && o === +o
    ? F.createElement(
        "circle",
        rm({}, Re(t, !1), ql(t), { className: l, cx: r, cy: n, r: o })
      )
    : null;
};
function Yo(e) {
  "@babel/helpers - typeof";
  return (
    (Yo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yo(e)
  );
}
var y4 = ["x", "y", "top", "left", "width", "height", "className"];
function nm() {
  return (
    (nm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    nm.apply(this, arguments)
  );
}
function ZO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function m4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ZO(Object(r), !0).forEach(function (n) {
          g4(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ZO(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function g4(e, t, r) {
  return (
    (t = b4(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function b4(e) {
  var t = w4(e, "string");
  return Yo(t) == "symbol" ? t : t + "";
}
function w4(e, t) {
  if (Yo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function x4(e, t) {
  if (e == null) return {};
  var r = S4(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function S4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var _4 = function (t, r, n, o, u, l) {
    return "M"
      .concat(t, ",")
      .concat(u, "v")
      .concat(o, "M")
      .concat(l, ",")
      .concat(r, "h")
      .concat(n);
  },
  O4 = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      o = t.y,
      u = o === void 0 ? 0 : o,
      l = t.top,
      c = l === void 0 ? 0 : l,
      f = t.left,
      p = f === void 0 ? 0 : f,
      v = t.width,
      h = v === void 0 ? 0 : v,
      g = t.height,
      w = g === void 0 ? 0 : g,
      S = t.className,
      x = x4(t, y4),
      b = m4({ x: n, y: u, top: c, left: p, width: h, height: w }, x);
    return !se(n) || !se(u) || !se(h) || !se(w) || !se(c) || !se(p)
      ? null
      : F.createElement(
          "path",
          nm({}, Re(b, !0), {
            className: De("recharts-cross", S),
            d: _4(n, u, h, w, c, p),
          })
        );
  },
  Lv,
  JO;
function P4() {
  if (JO) return Lv;
  JO = 1;
  var e = DA(),
    t = e(Object.getPrototypeOf, Object);
  return (Lv = t), Lv;
}
var qv, eP;
function A4() {
  if (eP) return qv;
  eP = 1;
  var e = Jr(),
    t = P4(),
    r = en(),
    n = "[object Object]",
    o = Function.prototype,
    u = Object.prototype,
    l = o.toString,
    c = u.hasOwnProperty,
    f = l.call(Object);
  function p(v) {
    if (!r(v) || e(v) != n) return !1;
    var h = t(v);
    if (h === null) return !0;
    var g = c.call(h, "constructor") && h.constructor;
    return typeof g == "function" && g instanceof g && l.call(g) == f;
  }
  return (qv = p), qv;
}
var E4 = A4();
const T4 = We(E4);
var Bv, tP;
function C4() {
  if (tP) return Bv;
  tP = 1;
  var e = Jr(),
    t = en(),
    r = "[object Boolean]";
  function n(o) {
    return o === !0 || o === !1 || (t(o) && e(o) == r);
  }
  return (Bv = n), Bv;
}
var k4 = C4();
const j4 = We(k4);
function Qo(e) {
  "@babel/helpers - typeof";
  return (
    (Qo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qo(e)
  );
}
function gs() {
  return (
    (gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gs.apply(this, arguments)
  );
}
function M4(e, t) {
  return $4(e) || R4(e, t) || N4(e, t) || I4();
}
function I4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N4(e, t) {
  if (e) {
    if (typeof e == "string") return rP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return rP(e, t);
  }
}
function rP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function R4(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function $4(e) {
  if (Array.isArray(e)) return e;
}
function nP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function iP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nP(Object(r), !0).forEach(function (n) {
          D4(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : nP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function D4(e, t, r) {
  return (
    (t = L4(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function L4(e) {
  var t = q4(e, "string");
  return Qo(t) == "symbol" ? t : t + "";
}
function q4(e, t) {
  if (Qo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aP = function (t, r, n, o, u) {
    var l = n - o,
      c;
    return (
      (c = "M ".concat(t, ",").concat(r)),
      (c += "L ".concat(t + n, ",").concat(r)),
      (c += "L ".concat(t + n - l / 2, ",").concat(r + u)),
      (c += "L ".concat(t + n - l / 2 - o, ",").concat(r + u)),
      (c += "L ".concat(t, ",").concat(r, " Z")),
      c
    );
  },
  B4 = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  F4 = function (t) {
    var r = iP(iP({}, B4), t),
      n = ue.useRef(),
      o = ue.useState(-1),
      u = M4(o, 2),
      l = u[0],
      c = u[1];
    ue.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var E = n.current.getTotalLength();
          E && c(E);
        } catch {}
    }, []);
    var f = r.x,
      p = r.y,
      v = r.upperWidth,
      h = r.lowerWidth,
      g = r.height,
      w = r.className,
      S = r.animationEasing,
      x = r.animationDuration,
      b = r.animationBegin,
      T = r.isUpdateAnimationActive;
    if (
      f !== +f ||
      p !== +p ||
      v !== +v ||
      h !== +h ||
      g !== +g ||
      (v === 0 && h === 0) ||
      g === 0
    )
      return null;
    var A = De("recharts-trapezoid", w);
    return T
      ? F.createElement(
          An,
          {
            canBegin: l > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: g, x: f, y: p },
            to: { upperWidth: v, lowerWidth: h, height: g, x: f, y: p },
            duration: x,
            animationEasing: S,
            isActive: T,
          },
          function (E) {
            var C = E.upperWidth,
              _ = E.lowerWidth,
              P = E.height,
              k = E.x,
              I = E.y;
            return F.createElement(
              An,
              {
                canBegin: l > 0,
                from: "0px ".concat(l === -1 ? 1 : l, "px"),
                to: "".concat(l, "px 0px"),
                attributeName: "strokeDasharray",
                begin: b,
                duration: x,
                easing: S,
              },
              F.createElement(
                "path",
                gs({}, Re(r, !0), {
                  className: A,
                  d: aP(k, I, C, _, P),
                  ref: n,
                })
              )
            );
          }
        )
      : F.createElement(
          "g",
          null,
          F.createElement(
            "path",
            gs({}, Re(r, !0), { className: A, d: aP(f, p, v, h, g) })
          )
        );
  },
  z4 = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function Zo(e) {
  "@babel/helpers - typeof";
  return (
    (Zo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zo(e)
  );
}
function U4(e, t) {
  if (e == null) return {};
  var r = W4(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function W4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function oP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? oP(Object(r), !0).forEach(function (n) {
          H4(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : oP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function H4(e, t, r) {
  return (
    (t = G4(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function G4(e) {
  var t = K4(e, "string");
  return Zo(t) == "symbol" ? t : t + "";
}
function K4(e, t) {
  if (Zo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V4(e, t) {
  return bs(bs({}, t), e);
}
function X4(e, t) {
  return e === "symbols";
}
function uP(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return F.createElement(bg, r);
    case "trapezoid":
      return F.createElement(F4, r);
    case "sector":
      return F.createElement(sT, r);
    case "symbols":
      if (X4(t)) return F.createElement(Dm, r);
      break;
    default:
      return null;
  }
}
function Y4(e) {
  return ue.isValidElement(e) ? e.props : e;
}
function Q4(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    o = n === void 0 ? V4 : n,
    u = e.activeClassName,
    l = u === void 0 ? "recharts-active-shape" : u,
    c = e.isActive,
    f = U4(e, z4),
    p;
  if (ue.isValidElement(t)) p = ue.cloneElement(t, bs(bs({}, f), Y4(t)));
  else if (Te(t)) p = t(f);
  else if (T4(t) && !j4(t)) {
    var v = o(t, f);
    p = F.createElement(uP, { shapeType: r, elementProps: v });
  } else {
    var h = f;
    p = F.createElement(uP, { shapeType: r, elementProps: h });
  }
  return c ? F.createElement(mt, { className: l }, p) : p;
}
function nc(e, t) {
  return t != null && "trapezoids" in e.props;
}
function ic(e, t) {
  return t != null && "sectors" in e.props;
}
function Jo(e, t) {
  return t != null && "points" in e.props;
}
function Z4(e, t) {
  var r,
    n,
    o =
      e.x ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || e.x === t.x,
    u =
      e.y ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || e.y === t.y;
  return o && u;
}
function J4(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function e8(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    o = e.z === t.z;
  return r && n && o;
}
function t8(e, t) {
  var r;
  return nc(e, t) ? (r = Z4) : ic(e, t) ? (r = J4) : Jo(e, t) && (r = e8), r;
}
function r8(e, t) {
  var r;
  return (
    nc(e, t)
      ? (r = "trapezoids")
      : ic(e, t)
      ? (r = "sectors")
      : Jo(e, t) && (r = "points"),
    r
  );
}
function n8(e, t) {
  if (nc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (ic(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return Jo(e, t) ? t.payload : {};
}
function i8(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    o = r8(r, t),
    u = n8(r, t),
    l = n.filter(function (f, p) {
      var v = vg(u, f),
        h = r.props[o].filter(function (S) {
          var x = t8(r, t);
          return x(S, t);
        }),
        g = r.props[o].indexOf(h[h.length - 1]),
        w = p === g;
      return v && w;
    }),
    c = n.indexOf(l[l.length - 1]);
  return c;
}
var Fv, lP;
function a8() {
  if (lP) return Fv;
  lP = 1;
  var e = Math.ceil,
    t = Math.max;
  function r(n, o, u, l) {
    for (var c = -1, f = t(e((o - n) / (u || 1)), 0), p = Array(f); f--; )
      (p[l ? f : ++c] = n), (n += u);
    return p;
  }
  return (Fv = r), Fv;
}
var zv, sP;
function gT() {
  if (sP) return zv;
  sP = 1;
  var e = JA(),
    t = 1 / 0,
    r = 17976931348623157e292;
  function n(o) {
    if (!o) return o === 0 ? o : 0;
    if (((o = e(o)), o === t || o === -1 / 0)) {
      var u = o < 0 ? -1 : 1;
      return u * r;
    }
    return o === o ? o : 0;
  }
  return (zv = n), zv;
}
var Uv, cP;
function o8() {
  if (cP) return Uv;
  cP = 1;
  var e = a8(),
    t = Hs(),
    r = gT();
  function n(o) {
    return function (u, l, c) {
      return (
        c && typeof c != "number" && t(u, l, c) && (l = c = void 0),
        (u = r(u)),
        l === void 0 ? ((l = u), (u = 0)) : (l = r(l)),
        (c = c === void 0 ? (u < l ? 1 : -1) : r(c)),
        e(u, l, c, o)
      );
    };
  }
  return (Uv = n), Uv;
}
var Wv, fP;
function u8() {
  if (fP) return Wv;
  fP = 1;
  var e = o8(),
    t = e();
  return (Wv = t), Wv;
}
var l8 = u8();
const ws = We(l8);
function eu(e) {
  "@babel/helpers - typeof";
  return (
    (eu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    eu(e)
  );
}
function dP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function pP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dP(Object(r), !0).forEach(function (n) {
          bT(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : dP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function bT(e, t, r) {
  return (
    (t = s8(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function s8(e) {
  var t = c8(e, "string");
  return eu(t) == "symbol" ? t : t + "";
}
function c8(e, t) {
  if (eu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var f8 = ["Webkit", "Moz", "O", "ms"],
  d8 = function (t, r) {
    var n = t.replace(/(\w)/, function (u) {
        return u.toUpperCase();
      }),
      o = f8.reduce(function (u, l) {
        return pP(pP({}, u), {}, bT({}, l + n, r));
      }, {});
    return (o[t] = r), o;
  };
function ia(e) {
  "@babel/helpers - typeof";
  return (
    (ia =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ia(e)
  );
}
function xs() {
  return (
    (xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xs.apply(this, arguments)
  );
}
function hP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Hv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hP(Object(r), !0).forEach(function (n) {
          Gt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : hP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function p8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xT(n.key), n);
  }
}
function h8(e, t, r) {
  return (
    vP(e.prototype, t),
    vP(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function v8(e, t, r) {
  return (
    (t = Ss(t)),
    y8(e, wT() ? Reflect.construct(t, r, Ss(e).constructor) : t.apply(e, r))
  );
}
function y8(e, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return m8(e);
}
function m8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wT() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (wT = function () {
    return !!e;
  })();
}
function Ss(e) {
  return (
    (Ss = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ss(e)
  );
}
function g8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && im(e, t);
}
function im(e, t) {
  return (
    (im = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    im(e, t)
  );
}
function Gt(e, t, r) {
  return (
    (t = xT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function xT(e) {
  var t = b8(e, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function b8(e, t) {
  if (ia(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var w8 = function (t) {
    var r = t.data,
      n = t.startIndex,
      o = t.endIndex,
      u = t.x,
      l = t.width,
      c = t.travellerWidth;
    if (!r || !r.length) return {};
    var f = r.length,
      p = So()
        .domain(ws(0, f))
        .range([u, u + l - c]),
      v = p.domain().map(function (h) {
        return p(h);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: p(n),
      endX: p(o),
      scale: p,
      scaleValues: v,
    };
  },
  yP = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  aa = (function (e) {
    function t(r) {
      var n;
      return (
        p8(this, t),
        (n = v8(this, t, [r])),
        Gt(n, "handleDrag", function (o) {
          n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(o)
              : n.state.isSlideMoving && n.handleSlideDrag(o);
        }),
        Gt(n, "handleTouchMove", function (o) {
          o.changedTouches != null &&
            o.changedTouches.length > 0 &&
            n.handleDrag(o.changedTouches[0]);
        }),
        Gt(n, "handleDragEnd", function () {
          n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var o = n.props,
              u = o.endIndex,
              l = o.onDragEnd,
              c = o.startIndex;
            l == null || l({ endIndex: u, startIndex: c });
          }),
            n.detachDragEndListener();
        }),
        Gt(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut
            ));
        }),
        Gt(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        Gt(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        Gt(n, "handleSlideDragStart", function (o) {
          var u = yP(o) ? o.changedTouches[0] : o;
          n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: u.pageX,
          }),
            n.attachDragEndListener();
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      g8(t, e),
      h8(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var o = n.startX,
                u = n.endX,
                l = this.state.scaleValues,
                c = this.props,
                f = c.gap,
                p = c.data,
                v = p.length - 1,
                h = Math.min(o, u),
                g = Math.max(o, u),
                w = t.getIndexInRange(l, h),
                S = t.getIndexInRange(l, g);
              return {
                startIndex: w - (w % f),
                endIndex: S === v ? v : S - (S % f),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var o = this.props,
                u = o.data,
                l = o.tickFormatter,
                c = o.dataKey,
                f = Rr(u[n], c, n);
              return Te(l) ? l(f, n) : f;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var o = this.state,
                u = o.slideMoveStartX,
                l = o.startX,
                c = o.endX,
                f = this.props,
                p = f.x,
                v = f.width,
                h = f.travellerWidth,
                g = f.startIndex,
                w = f.endIndex,
                S = f.onChange,
                x = n.pageX - u;
              x > 0
                ? (x = Math.min(x, p + v - h - c, p + v - h - l))
                : x < 0 && (x = Math.max(x, p - l, p - c));
              var b = this.getIndex({ startX: l + x, endX: c + x });
              (b.startIndex !== g || b.endIndex !== w) && S && S(b),
                this.setState({
                  startX: l + x,
                  endX: c + x,
                  slideMoveStartX: n.pageX,
                });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, o) {
              var u = yP(o) ? o.changedTouches[0] : o;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: u.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var o = this.state,
                u = o.brushMoveStartX,
                l = o.movingTravellerId,
                c = o.endX,
                f = o.startX,
                p = this.state[l],
                v = this.props,
                h = v.x,
                g = v.width,
                w = v.travellerWidth,
                S = v.onChange,
                x = v.gap,
                b = v.data,
                T = { startX: this.state.startX, endX: this.state.endX },
                A = n.pageX - u;
              A > 0
                ? (A = Math.min(A, h + g - w - p))
                : A < 0 && (A = Math.max(A, h - p)),
                (T[l] = p + A);
              var E = this.getIndex(T),
                C = E.startIndex,
                _ = E.endIndex,
                P = function () {
                  var I = b.length - 1;
                  return (
                    (l === "startX" && (c > f ? C % x === 0 : _ % x === 0)) ||
                    (c < f && _ === I) ||
                    (l === "endX" && (c > f ? _ % x === 0 : C % x === 0)) ||
                    (c > f && _ === I)
                  );
                };
              this.setState(
                Gt(Gt({}, l, p + A), "brushMoveStartX", n.pageX),
                function () {
                  S && P() && S(E);
                }
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, o) {
              var u = this,
                l = this.state,
                c = l.scaleValues,
                f = l.startX,
                p = l.endX,
                v = this.state[o],
                h = c.indexOf(v);
              if (h !== -1) {
                var g = h + n;
                if (!(g === -1 || g >= c.length)) {
                  var w = c[g];
                  (o === "startX" && w >= p) ||
                    (o === "endX" && w <= f) ||
                    this.setState(Gt({}, o, w), function () {
                      u.props.onChange(
                        u.getIndex({
                          startX: u.state.startX,
                          endX: u.state.endX,
                        })
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                o = n.x,
                u = n.y,
                l = n.width,
                c = n.height,
                f = n.fill,
                p = n.stroke;
              return F.createElement("rect", {
                stroke: p,
                fill: f,
                x: o,
                y: u,
                width: l,
                height: c,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                o = n.x,
                u = n.y,
                l = n.width,
                c = n.height,
                f = n.data,
                p = n.children,
                v = n.padding,
                h = ue.Children.only(p);
              return h
                ? F.cloneElement(h, {
                    x: o,
                    y: u,
                    width: l,
                    height: c,
                    margin: v,
                    compact: !0,
                    data: f,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, o) {
              var u,
                l,
                c = this,
                f = this.props,
                p = f.y,
                v = f.travellerWidth,
                h = f.height,
                g = f.traveller,
                w = f.ariaLabel,
                S = f.data,
                x = f.startIndex,
                b = f.endIndex,
                T = Math.max(n, this.props.x),
                A = Hv(
                  Hv({}, Re(this.props, !1)),
                  {},
                  { x: T, y: p, width: v, height: h }
                ),
                E =
                  w ||
                  "Min value: "
                    .concat(
                      (u = S[x]) === null || u === void 0 ? void 0 : u.name,
                      ", Max value: "
                    )
                    .concat(
                      (l = S[b]) === null || l === void 0 ? void 0 : l.name
                    );
              return F.createElement(
                mt,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": E,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[o],
                  onTouchStart: this.travellerDragStartHandlers[o],
                  onKeyDown: function (_) {
                    ["ArrowLeft", "ArrowRight"].includes(_.key) &&
                      (_.preventDefault(),
                      _.stopPropagation(),
                      c.handleTravellerMoveKeyboard(
                        _.key === "ArrowRight" ? 1 : -1,
                        o
                      ));
                  },
                  onFocus: function () {
                    c.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    c.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(g, A)
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, o) {
              var u = this.props,
                l = u.y,
                c = u.height,
                f = u.stroke,
                p = u.travellerWidth,
                v = Math.min(n, o) + p,
                h = Math.max(Math.abs(o - n) - p, 0);
              return F.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: f,
                fillOpacity: 0.2,
                x: v,
                y: l,
                width: h,
                height: c,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                o = n.startIndex,
                u = n.endIndex,
                l = n.y,
                c = n.height,
                f = n.travellerWidth,
                p = n.stroke,
                v = this.state,
                h = v.startX,
                g = v.endX,
                w = 5,
                S = { pointerEvents: "none", fill: p };
              return F.createElement(
                mt,
                { className: "recharts-brush-texts" },
                F.createElement(
                  Ql,
                  xs(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(h, g) - w,
                      y: l + c / 2,
                    },
                    S
                  ),
                  this.getTextOfTick(o)
                ),
                F.createElement(
                  Ql,
                  xs(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(h, g) + f + w,
                      y: l + c / 2,
                    },
                    S
                  ),
                  this.getTextOfTick(u)
                )
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                o = n.data,
                u = n.className,
                l = n.children,
                c = n.x,
                f = n.y,
                p = n.width,
                v = n.height,
                h = n.alwaysShowText,
                g = this.state,
                w = g.startX,
                S = g.endX,
                x = g.isTextActive,
                b = g.isSlideMoving,
                T = g.isTravellerMoving,
                A = g.isTravellerFocused;
              if (
                !o ||
                !o.length ||
                !se(c) ||
                !se(f) ||
                !se(p) ||
                !se(v) ||
                p <= 0 ||
                v <= 0
              )
                return null;
              var E = De("recharts-brush", u),
                C = F.Children.count(l) === 1,
                _ = d8("userSelect", "none");
              return F.createElement(
                mt,
                {
                  className: E,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: _,
                },
                this.renderBackground(),
                C && this.renderPanorama(),
                this.renderSlide(w, S),
                this.renderTravellerLayer(w, "startX"),
                this.renderTravellerLayer(S, "endX"),
                (x || b || T || A || h) && this.renderText()
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var o = n.x,
                u = n.y,
                l = n.width,
                c = n.height,
                f = n.stroke,
                p = Math.floor(u + c / 2) - 1;
              return F.createElement(
                F.Fragment,
                null,
                F.createElement("rect", {
                  x: o,
                  y: u,
                  width: l,
                  height: c,
                  fill: f,
                  stroke: "none",
                }),
                F.createElement("line", {
                  x1: o + 1,
                  y1: p,
                  x2: o + l - 1,
                  y2: p,
                  fill: "none",
                  stroke: "#fff",
                }),
                F.createElement("line", {
                  x1: o + 1,
                  y1: p + 2,
                  x2: o + l - 1,
                  y2: p + 2,
                  fill: "none",
                  stroke: "#fff",
                })
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, o) {
              var u;
              return (
                F.isValidElement(n)
                  ? (u = F.cloneElement(n, o))
                  : Te(n)
                  ? (u = n(o))
                  : (u = t.renderDefaultTraveller(o)),
                u
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, o) {
              var u = n.data,
                l = n.width,
                c = n.x,
                f = n.travellerWidth,
                p = n.updateId,
                v = n.startIndex,
                h = n.endIndex;
              if (u !== o.prevData || p !== o.prevUpdateId)
                return Hv(
                  {
                    prevData: u,
                    prevTravellerWidth: f,
                    prevUpdateId: p,
                    prevX: c,
                    prevWidth: l,
                  },
                  u && u.length
                    ? w8({
                        data: u,
                        width: l,
                        x: c,
                        travellerWidth: f,
                        startIndex: v,
                        endIndex: h,
                      })
                    : { scale: null, scaleValues: null }
                );
              if (
                o.scale &&
                (l !== o.prevWidth ||
                  c !== o.prevX ||
                  f !== o.prevTravellerWidth)
              ) {
                o.scale.range([c, c + l - f]);
                var g = o.scale.domain().map(function (w) {
                  return o.scale(w);
                });
                return {
                  prevData: u,
                  prevTravellerWidth: f,
                  prevUpdateId: p,
                  prevX: c,
                  prevWidth: l,
                  startX: o.scale(n.startIndex),
                  endX: o.scale(n.endIndex),
                  scaleValues: g,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, o) {
              for (var u = n.length, l = 0, c = u - 1; c - l > 1; ) {
                var f = Math.floor((l + c) / 2);
                n[f] > o ? (c = f) : (l = f);
              }
              return o >= n[c] ? c : l;
            },
          },
        ]
      )
    );
  })(ue.PureComponent);
Gt(aa, "displayName", "Brush");
Gt(aa, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var Gv, mP;
function x8() {
  if (mP) return Gv;
  mP = 1;
  var e = Wm();
  function t(r, n) {
    var o;
    return (
      e(r, function (u, l, c) {
        return (o = n(u, l, c)), !o;
      }),
      !!o
    );
  }
  return (Gv = t), Gv;
}
var Kv, gP;
function S8() {
  if (gP) return Kv;
  gP = 1;
  var e = kA(),
    t = Cn(),
    r = x8(),
    n = Ft(),
    o = Hs();
  function u(l, c, f) {
    var p = n(l) ? e : r;
    return f && o(l, c, f) && (c = void 0), p(l, t(c, 3));
  }
  return (Kv = u), Kv;
}
var _8 = S8();
const O8 = We(_8);
var Ir = function (t, r) {
    var n = t.alwaysShow,
      o = t.ifOverflow;
    return n && (o = "extendDomain"), o === r;
  },
  Vv,
  bP;
function P8() {
  if (bP) return Vv;
  bP = 1;
  var e = VA();
  function t(r, n, o) {
    n == "__proto__" && e
      ? e(r, n, { configurable: !0, enumerable: !0, value: o, writable: !0 })
      : (r[n] = o);
  }
  return (Vv = t), Vv;
}
var Xv, wP;
function A8() {
  if (wP) return Xv;
  wP = 1;
  var e = P8(),
    t = GA(),
    r = Cn();
  function n(o, u) {
    var l = {};
    return (
      (u = r(u, 3)),
      t(o, function (c, f, p) {
        e(l, f, u(c, f, p));
      }),
      l
    );
  }
  return (Xv = n), Xv;
}
var E8 = A8();
const T8 = We(E8);
var Yv, xP;
function C8() {
  if (xP) return Yv;
  xP = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (!r(t[n], n, t)) return !1;
    return !0;
  }
  return (Yv = e), Yv;
}
var Qv, SP;
function k8() {
  if (SP) return Qv;
  SP = 1;
  var e = Wm();
  function t(r, n) {
    var o = !0;
    return (
      e(r, function (u, l, c) {
        return (o = !!n(u, l, c)), o;
      }),
      o
    );
  }
  return (Qv = t), Qv;
}
var Zv, _P;
function j8() {
  if (_P) return Zv;
  _P = 1;
  var e = C8(),
    t = k8(),
    r = Cn(),
    n = Ft(),
    o = Hs();
  function u(l, c, f) {
    var p = n(l) ? e : t;
    return f && o(l, c, f) && (c = void 0), p(l, r(c, 3));
  }
  return (Zv = u), Zv;
}
var M8 = j8();
const I8 = We(M8);
var N8 = ["x", "y"];
function tu(e) {
  "@babel/helpers - typeof";
  return (
    (tu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    tu(e)
  );
}
function am() {
  return (
    (am = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    am.apply(this, arguments)
  );
}
function OP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? OP(Object(r), !0).forEach(function (n) {
          R8(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : OP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function R8(e, t, r) {
  return (
    (t = $8(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $8(e) {
  var t = D8(e, "string");
  return tu(t) == "symbol" ? t : t + "";
}
function D8(e, t) {
  if (tu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (tu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function L8(e, t) {
  if (e == null) return {};
  var r = q8(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function q8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function B8(e, t) {
  var r = e.x,
    n = e.y,
    o = L8(e, N8),
    u = "".concat(r),
    l = parseInt(u, 10),
    c = "".concat(n),
    f = parseInt(c, 10),
    p = "".concat(t.height || o.height),
    v = parseInt(p, 10),
    h = "".concat(t.width || o.width),
    g = parseInt(h, 10);
  return mo(
    mo(mo(mo(mo({}, t), o), l ? { x: l } : {}), f ? { y: f } : {}),
    {},
    { height: v, width: g, name: t.name, radius: t.radius }
  );
}
function PP(e) {
  return F.createElement(
    Q4,
    am(
      {
        shapeType: "rectangle",
        propTransformer: B8,
        activeClassName: "recharts-active-bar",
      },
      e
    )
  );
}
var F8 = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, o) {
      if (typeof t == "number") return t;
      var u = typeof n == "number";
      return u ? t(n, o) : (u || li(), r);
    };
  },
  z8 = ["value", "background"],
  ST;
function oa(e) {
  "@babel/helpers - typeof";
  return (
    (oa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    oa(e)
  );
}
function U8(e, t) {
  if (e == null) return {};
  var r = W8(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function W8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _s.apply(this, arguments)
  );
}
function AP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? AP(Object(r), !0).forEach(function (n) {
          _n(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : AP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function H8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, OT(n.key), n);
  }
}
function G8(e, t, r) {
  return (
    EP(e.prototype, t),
    EP(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function K8(e, t, r) {
  return (
    (t = Os(t)),
    V8(e, _T() ? Reflect.construct(t, r, Os(e).constructor) : t.apply(e, r))
  );
}
function V8(e, t) {
  if (t && (oa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return X8(e);
}
function X8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _T() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (_T = function () {
    return !!e;
  })();
}
function Os(e) {
  return (
    (Os = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Os(e)
  );
}
function Y8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && om(e, t);
}
function om(e, t) {
  return (
    (om = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    om(e, t)
  );
}
function _n(e, t, r) {
  return (
    (t = OT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function OT(e) {
  var t = Q8(e, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function Q8(e, t) {
  if (oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var En = (function (e) {
  function t() {
    var r;
    H8(this, t);
    for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++)
      o[u] = arguments[u];
    return (
      (r = K8(this, t, [].concat(o))),
      _n(r, "state", { isAnimationFinished: !1 }),
      _n(r, "id", Ls("recharts-bar-")),
      _n(r, "handleAnimationEnd", function () {
        var l = r.props.onAnimationEnd;
        r.setState({ isAnimationFinished: !0 }), l && l();
      }),
      _n(r, "handleAnimationStart", function () {
        var l = r.props.onAnimationStart;
        r.setState({ isAnimationFinished: !1 }), l && l();
      }),
      r
    );
  }
  return (
    Y8(t, e),
    G8(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var o = this,
              u = this.props,
              l = u.shape,
              c = u.dataKey,
              f = u.activeIndex,
              p = u.activeBar,
              v = Re(this.props, !1);
            return (
              n &&
              n.map(function (h, g) {
                var w = g === f,
                  S = w ? p : l,
                  x = at(
                    at(at({}, v), h),
                    {},
                    {
                      isActive: w,
                      option: S,
                      index: g,
                      dataKey: c,
                      onAnimationStart: o.handleAnimationStart,
                      onAnimationEnd: o.handleAnimationEnd,
                    }
                  );
                return F.createElement(
                  mt,
                  _s(
                    { className: "recharts-bar-rectangle" },
                    Bl(o.props, h, g),
                    {
                      key: "rectangle-"
                        .concat(h == null ? void 0 : h.x, "-")
                        .concat(h == null ? void 0 : h.y, "-")
                        .concat(h == null ? void 0 : h.value),
                    }
                  ),
                  F.createElement(PP, x)
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              o = this.props,
              u = o.data,
              l = o.layout,
              c = o.isAnimationActive,
              f = o.animationBegin,
              p = o.animationDuration,
              v = o.animationEasing,
              h = o.animationId,
              g = this.state.prevData;
            return F.createElement(
              An,
              {
                begin: f,
                duration: p,
                isActive: c,
                easing: v,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(h),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (w) {
                var S = w.t,
                  x = u.map(function (b, T) {
                    var A = g && g[T];
                    if (A) {
                      var E = Li(A.x, b.x),
                        C = Li(A.y, b.y),
                        _ = Li(A.width, b.width),
                        P = Li(A.height, b.height);
                      return at(
                        at({}, b),
                        {},
                        { x: E(S), y: C(S), width: _(S), height: P(S) }
                      );
                    }
                    if (l === "horizontal") {
                      var k = Li(0, b.height),
                        I = k(S);
                      return at(
                        at({}, b),
                        {},
                        { y: b.y + b.height - I, height: I }
                      );
                    }
                    var D = Li(0, b.width),
                      G = D(S);
                    return at(at({}, b), {}, { width: G });
                  });
                return F.createElement(
                  mt,
                  null,
                  n.renderRectanglesStatically(x)
                );
              }
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              o = n.data,
              u = n.isAnimationActive,
              l = this.state.prevData;
            return u && o && o.length && (!l || !vg(l, o))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(o);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              o = this.props,
              u = o.data,
              l = o.dataKey,
              c = o.activeIndex,
              f = Re(this.props.background, !1);
            return u.map(function (p, v) {
              p.value;
              var h = p.background,
                g = U8(p, z8);
              if (!h) return null;
              var w = at(
                at(
                  at(at(at({}, g), {}, { fill: "#eee" }, h), f),
                  Bl(n.props, p, v)
                ),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: l,
                  index: v,
                  className: "recharts-bar-background-rectangle",
                }
              );
              return F.createElement(
                PP,
                _s(
                  {
                    key: "background-bar-".concat(v),
                    option: n.props.background,
                    isActive: v === c,
                  },
                  w
                )
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, o) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var u = this.props,
              l = u.data,
              c = u.xAxis,
              f = u.yAxis,
              p = u.layout,
              v = u.children,
              h = xr(v, rc);
            if (!h) return null;
            var g = p === "vertical" ? l[0].height / 2 : l[0].width / 2,
              w = function (b, T) {
                var A = Array.isArray(b.value) ? b.value[1] : b.value;
                return { x: b.x, y: b.y, value: A, errorVal: Rr(b, T) };
              },
              S = { clipPath: n ? "url(#clipPath-".concat(o, ")") : null };
            return F.createElement(
              mt,
              S,
              h.map(function (x) {
                return F.cloneElement(x, {
                  key: "error-bar-".concat(o, "-").concat(x.props.dataKey),
                  data: l,
                  xAxis: c,
                  yAxis: f,
                  layout: p,
                  offset: g,
                  dataPointFormatter: w,
                });
              })
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              o = n.hide,
              u = n.data,
              l = n.className,
              c = n.xAxis,
              f = n.yAxis,
              p = n.left,
              v = n.top,
              h = n.width,
              g = n.height,
              w = n.isAnimationActive,
              S = n.background,
              x = n.id;
            if (o || !u || !u.length) return null;
            var b = this.state.isAnimationFinished,
              T = De("recharts-bar", l),
              A = c && c.allowDataOverflow,
              E = f && f.allowDataOverflow,
              C = A || E,
              _ = $e(x) ? this.id : x;
            return F.createElement(
              mt,
              { className: T },
              A || E
                ? F.createElement(
                    "defs",
                    null,
                    F.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(_) },
                      F.createElement("rect", {
                        x: A ? p : p - h / 2,
                        y: E ? v : v - g / 2,
                        width: A ? h : h * 2,
                        height: E ? g : g * 2,
                      })
                    )
                  )
                : null,
              F.createElement(
                mt,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: C ? "url(#clipPath-".concat(_, ")") : null,
                },
                S ? this.renderBackground() : null,
                this.renderRectangles()
              ),
              this.renderErrorBar(C, _),
              (!w || b) && ai.renderCallByParent(this.props, u)
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, o) {
            return n.animationId !== o.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curData: n.data,
                  prevData: o.curData,
                }
              : n.data !== o.curData
              ? { curData: n.data }
              : null;
          },
        },
      ]
    )
  );
})(ue.PureComponent);
ST = En;
_n(En, "displayName", "Bar");
_n(En, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !On.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
_n(En, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    o = e.bandSize,
    u = e.xAxis,
    l = e.yAxis,
    c = e.xAxisTicks,
    f = e.yAxisTicks,
    p = e.stackedData,
    v = e.dataStartIndex,
    h = e.displayedData,
    g = e.offset,
    w = vq(n, r);
  if (!w) return null;
  var S = t.layout,
    x = r.type.defaultProps,
    b = x !== void 0 ? at(at({}, x), r.props) : r.props,
    T = b.dataKey,
    A = b.children,
    E = b.minPointSize,
    C = S === "horizontal" ? l : u,
    _ = p ? C.scale.domain() : null,
    P = _q({ numericAxis: C }),
    k = xr(A, tE),
    I = h.map(function (D, G) {
      var R, B, z, V, K, Z;
      p
        ? (R = yq(p[v + G], _))
        : ((R = Rr(D, T)), Array.isArray(R) || (R = [P, R]));
      var J = F8(E, ST.defaultProps.minPointSize)(R[1], G);
      if (S === "horizontal") {
        var W,
          X = [l.scale(R[0]), l.scale(R[1])],
          Q = X[0],
          M = X[1];
        (B = sO({
          axis: u,
          ticks: c,
          bandSize: o,
          offset: w.offset,
          entry: D,
          index: G,
        })),
          (z = (W = M ?? Q) !== null && W !== void 0 ? W : void 0),
          (V = w.size);
        var L = Q - M;
        if (
          ((K = Number.isNaN(L) ? 0 : L),
          (Z = { x: B, y: l.y, width: V, height: l.height }),
          Math.abs(J) > 0 && Math.abs(K) < Math.abs(J))
        ) {
          var oe = wr(K || J) * (Math.abs(J) - Math.abs(K));
          (z -= oe), (K += oe);
        }
      } else {
        var pe = [u.scale(R[0]), u.scale(R[1])],
          me = pe[0],
          _e = pe[1];
        if (
          ((B = me),
          (z = sO({
            axis: l,
            ticks: f,
            bandSize: o,
            offset: w.offset,
            entry: D,
            index: G,
          })),
          (V = _e - me),
          (K = w.size),
          (Z = { x: u.x, y: z, width: u.width, height: K }),
          Math.abs(J) > 0 && Math.abs(V) < Math.abs(J))
        ) {
          var Ce = wr(V || J) * (Math.abs(J) - Math.abs(V));
          V += Ce;
        }
      }
      return at(
        at(
          at({}, D),
          {},
          {
            x: B,
            y: z,
            width: V,
            height: K,
            value: p ? R : R[1],
            payload: D,
            background: Z,
          },
          k[G] && k[G].props
        ),
        {},
        {
          tooltipPayload: [oT(r, D)],
          tooltipPosition: { x: B + V / 2, y: z + K / 2 },
        }
      );
    });
  return at({ data: I, layout: S }, g);
});
function ru(e) {
  "@babel/helpers - typeof";
  return (
    (ru =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ru(e)
  );
}
function Z8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, PT(n.key), n);
  }
}
function J8(e, t, r) {
  return (
    TP(e.prototype, t),
    TP(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function CP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? CP(Object(r), !0).forEach(function (n) {
          ac(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : CP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ac(e, t, r) {
  return (
    (t = PT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function PT(e) {
  var t = eF(e, "string");
  return ru(t) == "symbol" ? t : t + "";
}
function eF(e, t) {
  if (ru(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ru(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tF = function (t, r, n, o, u) {
    var l = t.width,
      c = t.height,
      f = t.layout,
      p = t.children,
      v = Object.keys(r),
      h = {
        left: n.left,
        leftMirror: n.left,
        right: l - n.right,
        rightMirror: l - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: c - n.bottom,
        bottomMirror: c - n.bottom,
      },
      g = !!Kt(p, En);
    return v.reduce(function (w, S) {
      var x = r[S],
        b = x.orientation,
        T = x.domain,
        A = x.padding,
        E = A === void 0 ? {} : A,
        C = x.mirror,
        _ = x.reversed,
        P = "".concat(b).concat(C ? "Mirror" : ""),
        k,
        I,
        D,
        G,
        R;
      if (
        x.type === "number" &&
        (x.padding === "gap" || x.padding === "no-gap")
      ) {
        var B = T[1] - T[0],
          z = 1 / 0,
          V = x.categoricalDomain.sort();
        if (
          (V.forEach(function (pe, me) {
            me > 0 && (z = Math.min((pe || 0) - (V[me - 1] || 0), z));
          }),
          Number.isFinite(z))
        ) {
          var K = z / B,
            Z = x.layout === "vertical" ? n.height : n.width;
          if (
            (x.padding === "gap" && (k = (K * Z) / 2), x.padding === "no-gap")
          ) {
            var J = oi(t.barCategoryGap, K * Z),
              W = (K * Z) / 2;
            k = W - J - ((W - J) / Z) * J;
          }
        }
      }
      o === "xAxis"
        ? (I = [
            n.left + (E.left || 0) + (k || 0),
            n.left + n.width - (E.right || 0) - (k || 0),
          ])
        : o === "yAxis"
        ? (I =
            f === "horizontal"
              ? [n.top + n.height - (E.bottom || 0), n.top + (E.top || 0)]
              : [
                  n.top + (E.top || 0) + (k || 0),
                  n.top + n.height - (E.bottom || 0) - (k || 0),
                ])
        : (I = x.range),
        _ && (I = [I[1], I[0]]);
      var X = pq(x, u, g),
        Q = X.scale,
        M = X.realScaleType;
      Q.domain(T).range(I), hq(Q);
      var L = Sq(Q, gr(gr({}, x), {}, { realScaleType: M }));
      o === "xAxis"
        ? ((R = (b === "top" && !C) || (b === "bottom" && C)),
          (D = n.left),
          (G = h[P] - R * x.height))
        : o === "yAxis" &&
          ((R = (b === "left" && !C) || (b === "right" && C)),
          (D = h[P] - R * x.width),
          (G = n.top));
      var oe = gr(
        gr(gr({}, x), L),
        {},
        {
          realScaleType: M,
          x: D,
          y: G,
          scale: Q,
          width: o === "xAxis" ? n.width : x.width,
          height: o === "yAxis" ? n.height : x.height,
        }
      );
      return (
        (oe.bandSize = fs(oe, L)),
        !x.hide && o === "xAxis"
          ? (h[P] += (R ? -1 : 1) * oe.height)
          : x.hide || (h[P] += (R ? -1 : 1) * oe.width),
        gr(gr({}, w), {}, ac({}, S, oe))
      );
    }, {});
  },
  AT = function (t, r) {
    var n = t.x,
      o = t.y,
      u = r.x,
      l = r.y;
    return {
      x: Math.min(n, u),
      y: Math.min(o, l),
      width: Math.abs(u - n),
      height: Math.abs(l - o),
    };
  },
  rF = function (t) {
    var r = t.x1,
      n = t.y1,
      o = t.x2,
      u = t.y2;
    return AT({ x: r, y: n }, { x: o, y: u });
  },
  ET = (function () {
    function e(t) {
      Z8(this, e), (this.scale = t);
    }
    return J8(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              o = n.bandAware,
              u = n.position;
            if (r !== void 0) {
              if (u)
                switch (u) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + l;
                  }
                  case "end": {
                    var c = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + c;
                  }
                  default:
                    return this.scale(r);
                }
              if (o) {
                var f = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + f;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              o = n[0],
              u = n[n.length - 1];
            return o <= u ? r >= o && r <= u : r >= u && r <= o;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ]
    );
  })();
ac(ET, "EPS", 1e-4);
var wg = function (t) {
  var r = Object.keys(t).reduce(function (n, o) {
    return gr(gr({}, n), {}, ac({}, o, ET.create(t[o])));
  }, {});
  return gr(
    gr({}, r),
    {},
    {
      apply: function (o) {
        var u =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          l = u.bandAware,
          c = u.position;
        return T8(o, function (f, p) {
          return r[p].apply(f, { bandAware: l, position: c });
        });
      },
      isInRange: function (o) {
        return I8(o, function (u, l) {
          return r[l].isInRange(u);
        });
      },
    }
  );
};
function nF(e) {
  return ((e % 180) + 180) % 180;
}
var iF = function (t) {
    var r = t.width,
      n = t.height,
      o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      u = nF(o),
      l = (u * Math.PI) / 180,
      c = Math.atan(n / r),
      f = l > c && l < Math.PI - c ? n / Math.sin(l) : r / Math.cos(l);
    return Math.abs(f);
  },
  Jv,
  kP;
function aF() {
  if (kP) return Jv;
  kP = 1;
  var e = Cn(),
    t = su(),
    r = Us();
  function n(o) {
    return function (u, l, c) {
      var f = Object(u);
      if (!t(u)) {
        var p = e(l, 3);
        (u = r(u)),
          (l = function (h) {
            return p(f[h], h, f);
          });
      }
      var v = o(u, l, c);
      return v > -1 ? f[p ? u[v] : v] : void 0;
    };
  }
  return (Jv = n), Jv;
}
var ey, jP;
function oF() {
  if (jP) return ey;
  jP = 1;
  var e = gT();
  function t(r) {
    var n = e(r),
      o = n % 1;
    return n === n ? (o ? n - o : n) : 0;
  }
  return (ey = t), ey;
}
var ty, MP;
function uF() {
  if (MP) return ty;
  MP = 1;
  var e = FA(),
    t = Cn(),
    r = oF(),
    n = Math.max;
  function o(u, l, c) {
    var f = u == null ? 0 : u.length;
    if (!f) return -1;
    var p = c == null ? 0 : r(c);
    return p < 0 && (p = n(f + p, 0)), e(u, t(l, 3), p);
  }
  return (ty = o), ty;
}
var ry, IP;
function lF() {
  if (IP) return ry;
  IP = 1;
  var e = aF(),
    t = uF(),
    r = e(t);
  return (ry = r), ry;
}
lF();
var sF = nA();
const cF = We(sF);
var fF = cF(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    }
  ),
  TT = ue.createContext(void 0),
  CT = ue.createContext(void 0),
  kT = ue.createContext(void 0),
  dF = ue.createContext({}),
  jT = ue.createContext(void 0),
  MT = ue.createContext(0),
  IT = ue.createContext(0),
  NP = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      o = r.yAxisMap,
      u = r.offset,
      l = t.clipPathId,
      c = t.children,
      f = t.width,
      p = t.height,
      v = fF(u);
    return F.createElement(
      TT.Provider,
      { value: n },
      F.createElement(
        CT.Provider,
        { value: o },
        F.createElement(
          dF.Provider,
          { value: u },
          F.createElement(
            kT.Provider,
            { value: v },
            F.createElement(
              jT.Provider,
              { value: l },
              F.createElement(
                MT.Provider,
                { value: p },
                F.createElement(IT.Provider, { value: f }, c)
              )
            )
          )
        )
      )
    );
  },
  pF = function () {
    return ue.useContext(jT);
  },
  NT = function (t) {
    var r = ue.useContext(TT);
    r == null && li();
    var n = r[t];
    return n == null && li(), n;
  },
  RT = function (t) {
    var r = ue.useContext(CT);
    r == null && li();
    var n = r[t];
    return n == null && li(), n;
  },
  hF = function () {
    var t = ue.useContext(kT);
    return t;
  },
  $T = function () {
    return ue.useContext(IT);
  },
  DT = function () {
    return ue.useContext(MT);
  };
function ua(e) {
  "@babel/helpers - typeof";
  return (
    (ua =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ua(e)
  );
}
function vF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, qT(n.key), n);
  }
}
function mF(e, t, r) {
  return (
    yF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function gF(e, t, r) {
  return (
    (t = Ps(t)),
    bF(
      e,
      LT() ? Reflect.construct(t, r || [], Ps(e).constructor) : t.apply(e, r)
    )
  );
}
function bF(e, t) {
  if (t && (ua(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return wF(e);
}
function wF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function LT() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (LT = function () {
    return !!e;
  })();
}
function Ps(e) {
  return (
    (Ps = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ps(e)
  );
}
function xF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && um(e, t);
}
function um(e, t) {
  return (
    (um = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    um(e, t)
  );
}
function RP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? RP(Object(r), !0).forEach(function (n) {
          xg(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : RP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function xg(e, t, r) {
  return (
    (t = qT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qT(e) {
  var t = SF(e, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function SF(e, t) {
  if (ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _F(e, t) {
  return EF(e) || AF(e, t) || PF(e, t) || OF();
}
function OF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PF(e, t) {
  if (e) {
    if (typeof e == "string") return DP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return DP(e, t);
  }
}
function DP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function AF(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function EF(e) {
  if (Array.isArray(e)) return e;
}
function lm() {
  return (
    (lm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    lm.apply(this, arguments)
  );
}
var TF = function (t, r) {
    var n;
    return (
      F.isValidElement(t)
        ? (n = F.cloneElement(t, r))
        : Te(t)
        ? (n = t(r))
        : (n = F.createElement(
            "line",
            lm({}, r, { className: "recharts-reference-line-line" })
          )),
      n
    );
  },
  CF = function (t, r, n, o, u, l, c, f, p) {
    var v = u.x,
      h = u.y,
      g = u.width,
      w = u.height;
    if (n) {
      var S = p.y,
        x = t.y.apply(S, { position: l });
      if (Ir(p, "discard") && !t.y.isInRange(x)) return null;
      var b = [
        { x: v + g, y: x },
        { x: v, y: x },
      ];
      return f === "left" ? b.reverse() : b;
    }
    if (r) {
      var T = p.x,
        A = t.x.apply(T, { position: l });
      if (Ir(p, "discard") && !t.x.isInRange(A)) return null;
      var E = [
        { x: A, y: h + w },
        { x: A, y: h },
      ];
      return c === "top" ? E.reverse() : E;
    }
    if (o) {
      var C = p.segment,
        _ = C.map(function (P) {
          return t.apply(P, { position: l });
        });
      return Ir(p, "discard") &&
        O8(_, function (P) {
          return !t.isInRange(P);
        })
        ? null
        : _;
    }
    return null;
  };
function kF(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    o = e.xAxisId,
    u = e.yAxisId,
    l = e.shape,
    c = e.className,
    f = e.alwaysShow,
    p = pF(),
    v = NT(o),
    h = RT(u),
    g = hF();
  if (!p || !g) return null;
  ti(
    f === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var w = wg({ x: v.scale, y: h.scale }),
    S = ct(t),
    x = ct(r),
    b = n && n.length === 2,
    T = CF(w, S, x, b, g, e.position, v.orientation, h.orientation, e);
  if (!T) return null;
  var A = _F(T, 2),
    E = A[0],
    C = E.x,
    _ = E.y,
    P = A[1],
    k = P.x,
    I = P.y,
    D = Ir(e, "hidden") ? "url(#".concat(p, ")") : void 0,
    G = $P($P({ clipPath: D }, Re(e, !0)), {}, { x1: C, y1: _, x2: k, y2: I });
  return F.createElement(
    mt,
    { className: De("recharts-reference-line", c) },
    TF(l, G),
    Tt.renderCallByParent(e, rF({ x1: C, y1: _, x2: k, y2: I }))
  );
}
var oc = (function (e) {
  function t() {
    return vF(this, t), gF(this, t, arguments);
  }
  return (
    xF(t, e),
    mF(t, [
      {
        key: "render",
        value: function () {
          return F.createElement(kF, this.props);
        },
      },
    ])
  );
})(F.Component);
xg(oc, "displayName", "ReferenceLine");
xg(oc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});
function sm() {
  return (
    (sm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    sm.apply(this, arguments)
  );
}
function la(e) {
  "@babel/helpers - typeof";
  return (
    (la =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    la(e)
  );
}
function LP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? LP(Object(r), !0).forEach(function (n) {
          uc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : LP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function jF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function MF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, FT(n.key), n);
  }
}
function IF(e, t, r) {
  return (
    MF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function NF(e, t, r) {
  return (
    (t = As(t)),
    RF(
      e,
      BT() ? Reflect.construct(t, r || [], As(e).constructor) : t.apply(e, r)
    )
  );
}
function RF(e, t) {
  if (t && (la(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return $F(e);
}
function $F(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function BT() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (BT = function () {
    return !!e;
  })();
}
function As(e) {
  return (
    (As = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    As(e)
  );
}
function DF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && cm(e, t);
}
function cm(e, t) {
  return (
    (cm = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    cm(e, t)
  );
}
function uc(e, t, r) {
  return (
    (t = FT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function FT(e) {
  var t = LF(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function LF(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qF = function (t) {
    var r = t.x,
      n = t.y,
      o = t.xAxis,
      u = t.yAxis,
      l = wg({ x: o.scale, y: u.scale }),
      c = l.apply({ x: r, y: n }, { bandAware: !0 });
    return Ir(t, "discard") && !l.isInRange(c) ? null : c;
  },
  lc = (function (e) {
    function t() {
      return jF(this, t), NF(this, t, arguments);
    }
    return (
      DF(t, e),
      IF(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              o = n.x,
              u = n.y,
              l = n.r,
              c = n.alwaysShow,
              f = n.clipPathId,
              p = ct(o),
              v = ct(u);
            if (
              (ti(
                c === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
              ),
              !p || !v)
            )
              return null;
            var h = qF(this.props);
            if (!h) return null;
            var g = h.x,
              w = h.y,
              S = this.props,
              x = S.shape,
              b = S.className,
              T = Ir(this.props, "hidden") ? "url(#".concat(f, ")") : void 0,
              A = qP(
                qP({ clipPath: T }, Re(this.props, !0)),
                {},
                { cx: g, cy: w }
              );
            return F.createElement(
              mt,
              { className: De("recharts-reference-dot", b) },
              t.renderDot(x, A),
              Tt.renderCallByParent(this.props, {
                x: g - l,
                y: w - l,
                width: 2 * l,
                height: 2 * l,
              })
            );
          },
        },
      ])
    );
  })(F.Component);
uc(lc, "displayName", "ReferenceDot");
uc(lc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
uc(lc, "renderDot", function (e, t) {
  var r;
  return (
    F.isValidElement(e)
      ? (r = F.cloneElement(e, t))
      : Te(e)
      ? (r = e(t))
      : (r = F.createElement(
          mT,
          sm({}, t, {
            cx: t.cx,
            cy: t.cy,
            className: "recharts-reference-dot-dot",
          })
        )),
    r
  );
});
function fm() {
  return (
    (fm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fm.apply(this, arguments)
  );
}
function sa(e) {
  "@babel/helpers - typeof";
  return (
    (sa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sa(e)
  );
}
function BP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function FP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? BP(Object(r), !0).forEach(function (n) {
          sc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : BP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function BF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function FF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, UT(n.key), n);
  }
}
function zF(e, t, r) {
  return (
    FF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function UF(e, t, r) {
  return (
    (t = Es(t)),
    WF(
      e,
      zT() ? Reflect.construct(t, r || [], Es(e).constructor) : t.apply(e, r)
    )
  );
}
function WF(e, t) {
  if (t && (sa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return HF(e);
}
function HF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function zT() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (zT = function () {
    return !!e;
  })();
}
function Es(e) {
  return (
    (Es = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Es(e)
  );
}
function GF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && dm(e, t);
}
function dm(e, t) {
  return (
    (dm = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    dm(e, t)
  );
}
function sc(e, t, r) {
  return (
    (t = UT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function UT(e) {
  var t = KF(e, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function KF(e, t) {
  if (sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var VF = function (t, r, n, o, u) {
    var l = u.x1,
      c = u.x2,
      f = u.y1,
      p = u.y2,
      v = u.xAxis,
      h = u.yAxis;
    if (!v || !h) return null;
    var g = wg({ x: v.scale, y: h.scale }),
      w = {
        x: t ? g.x.apply(l, { position: "start" }) : g.x.rangeMin,
        y: n ? g.y.apply(f, { position: "start" }) : g.y.rangeMin,
      },
      S = {
        x: r ? g.x.apply(c, { position: "end" }) : g.x.rangeMax,
        y: o ? g.y.apply(p, { position: "end" }) : g.y.rangeMax,
      };
    return Ir(u, "discard") && (!g.isInRange(w) || !g.isInRange(S))
      ? null
      : AT(w, S);
  },
  hu = (function (e) {
    function t() {
      return BF(this, t), UF(this, t, arguments);
    }
    return (
      GF(t, e),
      zF(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              o = n.x1,
              u = n.x2,
              l = n.y1,
              c = n.y2,
              f = n.className,
              p = n.alwaysShow,
              v = n.clipPathId;
            ti(
              p === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
            );
            var h = ct(o),
              g = ct(u),
              w = ct(l),
              S = ct(c),
              x = this.props.shape;
            if (!h && !g && !w && !S && !x) return null;
            var b = VF(h, g, w, S, this.props);
            if (!b && !x) return null;
            var T = Ir(this.props, "hidden") ? "url(#".concat(v, ")") : void 0;
            return F.createElement(
              mt,
              { className: De("recharts-reference-area", f) },
              t.renderRect(x, FP(FP({ clipPath: T }, Re(this.props, !0)), b)),
              Tt.renderCallByParent(this.props, b)
            );
          },
        },
      ])
    );
  })(F.Component);
sc(hu, "displayName", "ReferenceArea");
sc(hu, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
sc(hu, "renderRect", function (e, t) {
  var r;
  return (
    F.isValidElement(e)
      ? (r = F.cloneElement(e, t))
      : Te(e)
      ? (r = e(t))
      : (r = F.createElement(
          bg,
          fm({}, t, { className: "recharts-reference-area-rect" })
        )),
    r
  );
});
function WT(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], o = 0; o < e.length; o += t) n.push(e[o]);
  return n;
}
function XF(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return iF(n, r);
}
function YF(e, t, r) {
  var n = r === "width",
    o = e.x,
    u = e.y,
    l = e.width,
    c = e.height;
  return t === 1
    ? { start: n ? o : u, end: n ? o + l : u + c }
    : { start: n ? o + l : u + c, end: n ? o : u };
}
function Ts(e, t, r, n, o) {
  if (e * t < e * n || e * t > e * o) return !1;
  var u = r();
  return e * (t - (e * u) / 2 - n) >= 0 && e * (t + (e * u) / 2 - o) <= 0;
}
function QF(e, t) {
  return WT(e, t + 1);
}
function ZF(e, t, r, n, o) {
  for (
    var u = (n || []).slice(),
      l = t.start,
      c = t.end,
      f = 0,
      p = 1,
      v = l,
      h = function () {
        var S = n == null ? void 0 : n[f];
        if (S === void 0) return { v: WT(n, p) };
        var x = f,
          b,
          T = function () {
            return b === void 0 && (b = r(S, x)), b;
          },
          A = S.coordinate,
          E = f === 0 || Ts(e, A, T, v, c);
        E || ((f = 0), (v = l), (p += 1)),
          E && ((v = A + e * (T() / 2 + o)), (f += p));
      },
      g;
    p <= u.length;

  )
    if (((g = h()), g)) return g.v;
  return [];
}
function nu(e) {
  "@babel/helpers - typeof";
  return (
    (nu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    nu(e)
  );
}
function zP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zP(Object(r), !0).forEach(function (n) {
          JF(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : zP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function JF(e, t, r) {
  return (
    (t = ez(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ez(e) {
  var t = tz(e, "string");
  return nu(t) == "symbol" ? t : t + "";
}
function tz(e, t) {
  if (nu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (nu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rz(e, t, r, n, o) {
  for (
    var u = (n || []).slice(),
      l = u.length,
      c = t.start,
      f = t.end,
      p = function (g) {
        var w = u[g],
          S,
          x = function () {
            return S === void 0 && (S = r(w, g)), S;
          };
        if (g === l - 1) {
          var b = e * (w.coordinate + (e * x()) / 2 - f);
          u[g] = w = Et(
            Et({}, w),
            {},
            { tickCoord: b > 0 ? w.coordinate - b * e : w.coordinate }
          );
        } else u[g] = w = Et(Et({}, w), {}, { tickCoord: w.coordinate });
        var T = Ts(e, w.tickCoord, x, c, f);
        T &&
          ((f = w.tickCoord - e * (x() / 2 + o)),
          (u[g] = Et(Et({}, w), {}, { isShow: !0 })));
      },
      v = l - 1;
    v >= 0;
    v--
  )
    p(v);
  return u;
}
function nz(e, t, r, n, o, u) {
  var l = (n || []).slice(),
    c = l.length,
    f = t.start,
    p = t.end;
  if (u) {
    var v = n[c - 1],
      h = r(v, c - 1),
      g = e * (v.coordinate + (e * h) / 2 - p);
    l[c - 1] = v = Et(
      Et({}, v),
      {},
      { tickCoord: g > 0 ? v.coordinate - g * e : v.coordinate }
    );
    var w = Ts(
      e,
      v.tickCoord,
      function () {
        return h;
      },
      f,
      p
    );
    w &&
      ((p = v.tickCoord - e * (h / 2 + o)),
      (l[c - 1] = Et(Et({}, v), {}, { isShow: !0 })));
  }
  for (
    var S = u ? c - 1 : c,
      x = function (A) {
        var E = l[A],
          C,
          _ = function () {
            return C === void 0 && (C = r(E, A)), C;
          };
        if (A === 0) {
          var P = e * (E.coordinate - (e * _()) / 2 - f);
          l[A] = E = Et(
            Et({}, E),
            {},
            { tickCoord: P < 0 ? E.coordinate - P * e : E.coordinate }
          );
        } else l[A] = E = Et(Et({}, E), {}, { tickCoord: E.coordinate });
        var k = Ts(e, E.tickCoord, _, f, p);
        k &&
          ((f = E.tickCoord + e * (_() / 2 + o)),
          (l[A] = Et(Et({}, E), {}, { isShow: !0 })));
      },
      b = 0;
    b < S;
    b++
  )
    x(b);
  return l;
}
function iz(e, t, r) {
  var n = e.tick,
    o = e.ticks,
    u = e.viewBox,
    l = e.minTickGap,
    c = e.orientation,
    f = e.interval,
    p = e.tickFormatter,
    v = e.unit,
    h = e.angle;
  if (!o || !o.length || !n) return [];
  if (se(f) || On.isSsr) return QF(o, typeof f == "number" && se(f) ? f : 0);
  var g = [],
    w = c === "top" || c === "bottom" ? "width" : "height",
    S =
      v && w === "width"
        ? xo(v, { fontSize: t, letterSpacing: r })
        : { width: 0, height: 0 },
    x = function (E, C) {
      var _ = Te(p) ? p(E.value, C) : E.value;
      return w === "width"
        ? XF(xo(_, { fontSize: t, letterSpacing: r }), S, h)
        : xo(_, { fontSize: t, letterSpacing: r })[w];
    },
    b = o.length >= 2 ? wr(o[1].coordinate - o[0].coordinate) : 1,
    T = YF(u, b, w);
  return f === "equidistantPreserveStart"
    ? ZF(b, T, x, o, l)
    : (f === "preserveStart" || f === "preserveStartEnd"
        ? (g = nz(b, T, x, o, l, f === "preserveStartEnd"))
        : (g = rz(b, T, x, o, l)),
      g.filter(function (A) {
        return A.isShow;
      }));
}
var az = ["viewBox"],
  oz = ["viewBox"],
  uz = ["ticks"];
function ca(e) {
  "@babel/helpers - typeof";
  return (
    (ca =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ca(e)
  );
}
function Ui() {
  return (
    (Ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ui.apply(this, arguments)
  );
}
function UP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? UP(Object(r), !0).forEach(function (n) {
          Sg(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : UP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ny(e, t) {
  if (e == null) return {};
  var r = lz(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function lz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function sz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function WP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, GT(n.key), n);
  }
}
function cz(e, t, r) {
  return (
    WP(e.prototype, t),
    WP(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function fz(e, t, r) {
  return (
    (t = Cs(t)),
    dz(e, HT() ? Reflect.construct(t, r, Cs(e).constructor) : t.apply(e, r))
  );
}
function dz(e, t) {
  if (t && (ca(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return pz(e);
}
function pz(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function HT() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (HT = function () {
    return !!e;
  })();
}
function Cs(e) {
  return (
    (Cs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Cs(e)
  );
}
function hz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && pm(e, t);
}
function pm(e, t) {
  return (
    (pm = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    pm(e, t)
  );
}
function Sg(e, t, r) {
  return (
    (t = GT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function GT(e) {
  var t = vz(e, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function vz(e, t) {
  if (ca(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cc = (function (e) {
  function t(r) {
    var n;
    return (
      sz(this, t),
      (n = fz(this, t, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    hz(t, e),
    cz(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, o) {
            var u = n.viewBox,
              l = ny(n, az),
              c = this.props,
              f = c.viewBox,
              p = ny(c, oz);
            return !Hi(u, f) || !Hi(l, p) || !Hi(o, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var o = n.getElementsByClassName(
                "recharts-cartesian-axis-tick-value"
              )[0];
              o &&
                this.setState({
                  fontSize: window.getComputedStyle(o).fontSize,
                  letterSpacing: window.getComputedStyle(o).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var o = this.props,
              u = o.x,
              l = o.y,
              c = o.width,
              f = o.height,
              p = o.orientation,
              v = o.tickSize,
              h = o.mirror,
              g = o.tickMargin,
              w,
              S,
              x,
              b,
              T,
              A,
              E = h ? -1 : 1,
              C = n.tickSize || v,
              _ = se(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (p) {
              case "top":
                (w = S = n.coordinate),
                  (b = l + +!h * f),
                  (x = b - E * C),
                  (A = x - E * g),
                  (T = _);
                break;
              case "left":
                (x = b = n.coordinate),
                  (S = u + +!h * c),
                  (w = S - E * C),
                  (T = w - E * g),
                  (A = _);
                break;
              case "right":
                (x = b = n.coordinate),
                  (S = u + +h * c),
                  (w = S + E * C),
                  (T = w + E * g),
                  (A = _);
                break;
              default:
                (w = S = n.coordinate),
                  (b = l + +h * f),
                  (x = b + E * C),
                  (A = x + E * g),
                  (T = _);
                break;
            }
            return {
              line: { x1: w, y1: x, x2: S, y2: b },
              tick: { x: T, y: A },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              o = n.orientation,
              u = n.mirror,
              l;
            switch (o) {
              case "left":
                l = u ? "start" : "end";
                break;
              case "right":
                l = u ? "end" : "start";
                break;
              default:
                l = "middle";
                break;
            }
            return l;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              o = n.orientation,
              u = n.mirror,
              l = "end";
            switch (o) {
              case "left":
              case "right":
                l = "middle";
                break;
              case "top":
                l = u ? "start" : "end";
                break;
              default:
                l = u ? "end" : "start";
                break;
            }
            return l;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              o = n.x,
              u = n.y,
              l = n.width,
              c = n.height,
              f = n.orientation,
              p = n.mirror,
              v = n.axisLine,
              h = jt(
                jt(jt({}, Re(this.props, !1)), Re(v, !1)),
                {},
                { fill: "none" }
              );
            if (f === "top" || f === "bottom") {
              var g = +((f === "top" && !p) || (f === "bottom" && p));
              h = jt(
                jt({}, h),
                {},
                { x1: o, y1: u + g * c, x2: o + l, y2: u + g * c }
              );
            } else {
              var w = +((f === "left" && !p) || (f === "right" && p));
              h = jt(
                jt({}, h),
                {},
                { x1: o + w * l, y1: u, x2: o + w * l, y2: u + c }
              );
            }
            return F.createElement(
              "line",
              Ui({}, h, {
                className: De(
                  "recharts-cartesian-axis-line",
                  ir(v, "className")
                ),
              })
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, o, u) {
            var l = this,
              c = this.props,
              f = c.tickLine,
              p = c.stroke,
              v = c.tick,
              h = c.tickFormatter,
              g = c.unit,
              w = iz(jt(jt({}, this.props), {}, { ticks: n }), o, u),
              S = this.getTickTextAnchor(),
              x = this.getTickVerticalAnchor(),
              b = Re(this.props, !1),
              T = Re(v, !1),
              A = jt(jt({}, b), {}, { fill: "none" }, Re(f, !1)),
              E = w.map(function (C, _) {
                var P = l.getTickLineCoord(C),
                  k = P.line,
                  I = P.tick,
                  D = jt(
                    jt(
                      jt(
                        jt({ textAnchor: S, verticalAnchor: x }, b),
                        {},
                        { stroke: "none", fill: p },
                        T
                      ),
                      I
                    ),
                    {},
                    {
                      index: _,
                      payload: C,
                      visibleTicksCount: w.length,
                      tickFormatter: h,
                    }
                  );
                return F.createElement(
                  mt,
                  Ui(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(C.value, "-")
                        .concat(C.coordinate, "-")
                        .concat(C.tickCoord),
                    },
                    Bl(l.props, C, _)
                  ),
                  f &&
                    F.createElement(
                      "line",
                      Ui({}, A, k, {
                        className: De(
                          "recharts-cartesian-axis-tick-line",
                          ir(f, "className")
                        ),
                      })
                    ),
                  v &&
                    t.renderTickItem(
                      v,
                      D,
                      "".concat(Te(h) ? h(C.value, _) : C.value).concat(g || "")
                    )
                );
              });
            return F.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              E
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              o = this.props,
              u = o.axisLine,
              l = o.width,
              c = o.height,
              f = o.ticksGenerator,
              p = o.className,
              v = o.hide;
            if (v) return null;
            var h = this.props,
              g = h.ticks,
              w = ny(h, uz),
              S = g;
            return (
              Te(f) && (S = g && g.length > 0 ? f(this.props) : f(w)),
              l <= 0 || c <= 0 || !S || !S.length
                ? null
                : F.createElement(
                    mt,
                    {
                      className: De("recharts-cartesian-axis", p),
                      ref: function (b) {
                        n.layerReference = b;
                      },
                    },
                    u && this.renderAxisLine(),
                    this.renderTicks(
                      S,
                      this.state.fontSize,
                      this.state.letterSpacing
                    ),
                    Tt.renderCallByParent(this.props)
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, o, u) {
            var l;
            return (
              F.isValidElement(n)
                ? (l = F.cloneElement(n, o))
                : Te(n)
                ? (l = n(o))
                : (l = F.createElement(
                    Ql,
                    Ui({}, o, {
                      className: "recharts-cartesian-axis-tick-value",
                    }),
                    u
                  )),
              l
            );
          },
        },
      ]
    )
  );
})(ue.Component);
Sg(cc, "displayName", "CartesianAxis");
Sg(cc, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
function fa(e) {
  "@babel/helpers - typeof";
  return (
    (fa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fa(e)
  );
}
function yz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, XT(n.key), n);
  }
}
function gz(e, t, r) {
  return (
    mz(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function bz(e, t, r) {
  return (
    (t = ks(t)),
    wz(
      e,
      KT() ? Reflect.construct(t, r || [], ks(e).constructor) : t.apply(e, r)
    )
  );
}
function wz(e, t) {
  if (t && (fa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return xz(e);
}
function xz(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function KT() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (KT = function () {
    return !!e;
  })();
}
function ks(e) {
  return (
    (ks = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ks(e)
  );
}
function Sz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && hm(e, t);
}
function hm(e, t) {
  return (
    (hm = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    hm(e, t)
  );
}
function VT(e, t, r) {
  return (
    (t = XT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function XT(e) {
  var t = _z(e, "string");
  return fa(t) == "symbol" ? t : t + "";
}
function _z(e, t) {
  if (fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vm() {
  return (
    (vm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    vm.apply(this, arguments)
  );
}
function Oz(e) {
  var t = e.xAxisId,
    r = $T(),
    n = DT(),
    o = NT(t);
  return o == null
    ? null
    : F.createElement(
        cc,
        vm({}, o, {
          className: De(
            "recharts-".concat(o.axisType, " ").concat(o.axisType),
            o.className
          ),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (l) {
            return ei(l, !0);
          },
        })
      );
}
var fc = (function (e) {
  function t() {
    return yz(this, t), bz(this, t, arguments);
  }
  return (
    Sz(t, e),
    gz(t, [
      {
        key: "render",
        value: function () {
          return F.createElement(Oz, this.props);
        },
      },
    ])
  );
})(F.Component);
VT(fc, "displayName", "XAxis");
VT(fc, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function da(e) {
  "@babel/helpers - typeof";
  return (
    (da =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    da(e)
  );
}
function Pz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Az(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ZT(n.key), n);
  }
}
function Ez(e, t, r) {
  return (
    Az(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Tz(e, t, r) {
  return (
    (t = js(t)),
    Cz(
      e,
      YT() ? Reflect.construct(t, r || [], js(e).constructor) : t.apply(e, r)
    )
  );
}
function Cz(e, t) {
  if (t && (da(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return kz(e);
}
function kz(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function YT() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (YT = function () {
    return !!e;
  })();
}
function js(e) {
  return (
    (js = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    js(e)
  );
}
function jz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ym(e, t);
}
function ym(e, t) {
  return (
    (ym = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    ym(e, t)
  );
}
function QT(e, t, r) {
  return (
    (t = ZT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ZT(e) {
  var t = Mz(e, "string");
  return da(t) == "symbol" ? t : t + "";
}
function Mz(e, t) {
  if (da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mm() {
  return (
    (mm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    mm.apply(this, arguments)
  );
}
var Iz = function (t) {
    var r = t.yAxisId,
      n = $T(),
      o = DT(),
      u = RT(r);
    return u == null
      ? null
      : F.createElement(
          cc,
          mm({}, u, {
            className: De(
              "recharts-".concat(u.axisType, " ").concat(u.axisType),
              u.className
            ),
            viewBox: { x: 0, y: 0, width: n, height: o },
            ticksGenerator: function (c) {
              return ei(c, !0);
            },
          })
        );
  },
  dc = (function (e) {
    function t() {
      return Pz(this, t), Tz(this, t, arguments);
    }
    return (
      jz(t, e),
      Ez(t, [
        {
          key: "render",
          value: function () {
            return F.createElement(Iz, this.props);
          },
        },
      ])
    );
  })(F.Component);
QT(dc, "displayName", "YAxis");
QT(dc, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});
function HP(e) {
  return Dz(e) || $z(e) || Rz(e) || Nz();
}
function Nz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rz(e, t) {
  if (e) {
    if (typeof e == "string") return gm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gm(e, t);
  }
}
function $z(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Dz(e) {
  if (Array.isArray(e)) return gm(e);
}
function gm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var bm = function (t, r, n, o, u) {
    var l = xr(t, oc),
      c = xr(t, lc),
      f = [].concat(HP(l), HP(c)),
      p = xr(t, hu),
      v = "".concat(o, "Id"),
      h = o[0],
      g = r;
    if (
      (f.length &&
        (g = f.reduce(function (x, b) {
          if (
            b.props[v] === n &&
            Ir(b.props, "extendDomain") &&
            se(b.props[h])
          ) {
            var T = b.props[h];
            return [Math.min(x[0], T), Math.max(x[1], T)];
          }
          return x;
        }, g)),
      p.length)
    ) {
      var w = "".concat(h, "1"),
        S = "".concat(h, "2");
      g = p.reduce(function (x, b) {
        if (
          b.props[v] === n &&
          Ir(b.props, "extendDomain") &&
          se(b.props[w]) &&
          se(b.props[S])
        ) {
          var T = b.props[w],
            A = b.props[S];
          return [Math.min(x[0], T, A), Math.max(x[1], T, A)];
        }
        return x;
      }, g);
    }
    return (
      u &&
        u.length &&
        (g = u.reduce(function (x, b) {
          return se(b) ? [Math.min(x[0], b), Math.max(x[1], b)] : x;
        }, g)),
      g
    );
  },
  iy = { exports: {} },
  GP;
function Lz() {
  return (
    GP ||
      ((GP = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create &&
          ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function o(f, p, v) {
          (this.fn = f), (this.context = p), (this.once = v || !1);
        }
        function u(f, p, v, h, g) {
          if (typeof v != "function")
            throw new TypeError("The listener must be a function");
          var w = new o(v, h || f, g),
            S = r ? r + p : p;
          return (
            f._events[S]
              ? f._events[S].fn
                ? (f._events[S] = [f._events[S], w])
                : f._events[S].push(w)
              : ((f._events[S] = w), f._eventsCount++),
            f
          );
        }
        function l(f, p) {
          --f._eventsCount === 0 ? (f._events = new n()) : delete f._events[p];
        }
        function c() {
          (this._events = new n()), (this._eventsCount = 0);
        }
        (c.prototype.eventNames = function () {
          var p = [],
            v,
            h;
          if (this._eventsCount === 0) return p;
          for (h in (v = this._events))
            t.call(v, h) && p.push(r ? h.slice(1) : h);
          return Object.getOwnPropertySymbols
            ? p.concat(Object.getOwnPropertySymbols(v))
            : p;
        }),
          (c.prototype.listeners = function (p) {
            var v = r ? r + p : p,
              h = this._events[v];
            if (!h) return [];
            if (h.fn) return [h.fn];
            for (var g = 0, w = h.length, S = new Array(w); g < w; g++)
              S[g] = h[g].fn;
            return S;
          }),
          (c.prototype.listenerCount = function (p) {
            var v = r ? r + p : p,
              h = this._events[v];
            return h ? (h.fn ? 1 : h.length) : 0;
          }),
          (c.prototype.emit = function (p, v, h, g, w, S) {
            var x = r ? r + p : p;
            if (!this._events[x]) return !1;
            var b = this._events[x],
              T = arguments.length,
              A,
              E;
            if (b.fn) {
              switch ((b.once && this.removeListener(p, b.fn, void 0, !0), T)) {
                case 1:
                  return b.fn.call(b.context), !0;
                case 2:
                  return b.fn.call(b.context, v), !0;
                case 3:
                  return b.fn.call(b.context, v, h), !0;
                case 4:
                  return b.fn.call(b.context, v, h, g), !0;
                case 5:
                  return b.fn.call(b.context, v, h, g, w), !0;
                case 6:
                  return b.fn.call(b.context, v, h, g, w, S), !0;
              }
              for (E = 1, A = new Array(T - 1); E < T; E++)
                A[E - 1] = arguments[E];
              b.fn.apply(b.context, A);
            } else {
              var C = b.length,
                _;
              for (E = 0; E < C; E++)
                switch (
                  (b[E].once && this.removeListener(p, b[E].fn, void 0, !0), T)
                ) {
                  case 1:
                    b[E].fn.call(b[E].context);
                    break;
                  case 2:
                    b[E].fn.call(b[E].context, v);
                    break;
                  case 3:
                    b[E].fn.call(b[E].context, v, h);
                    break;
                  case 4:
                    b[E].fn.call(b[E].context, v, h, g);
                    break;
                  default:
                    if (!A)
                      for (_ = 1, A = new Array(T - 1); _ < T; _++)
                        A[_ - 1] = arguments[_];
                    b[E].fn.apply(b[E].context, A);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (p, v, h) {
            return u(this, p, v, h, !1);
          }),
          (c.prototype.once = function (p, v, h) {
            return u(this, p, v, h, !0);
          }),
          (c.prototype.removeListener = function (p, v, h, g) {
            var w = r ? r + p : p;
            if (!this._events[w]) return this;
            if (!v) return l(this, w), this;
            var S = this._events[w];
            if (S.fn)
              S.fn === v &&
                (!g || S.once) &&
                (!h || S.context === h) &&
                l(this, w);
            else {
              for (var x = 0, b = [], T = S.length; x < T; x++)
                (S[x].fn !== v ||
                  (g && !S[x].once) ||
                  (h && S[x].context !== h)) &&
                  b.push(S[x]);
              b.length
                ? (this._events[w] = b.length === 1 ? b[0] : b)
                : l(this, w);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (p) {
            var v;
            return (
              p
                ? ((v = r ? r + p : p), this._events[v] && l(this, v))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          (e.exports = c);
      })(iy)),
    iy.exports
  );
}
var qz = Lz();
const Bz = We(qz);
var ay = new Bz(),
  oy = "recharts.syncMouseEvents";
function iu(e) {
  "@babel/helpers - typeof";
  return (
    (iu =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    iu(e)
  );
}
function Fz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, JT(n.key), n);
  }
}
function Uz(e, t, r) {
  return (
    zz(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function uy(e, t, r) {
  return (
    (t = JT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JT(e) {
  var t = Wz(e, "string");
  return iu(t) == "symbol" ? t : t + "";
}
function Wz(e, t) {
  if (iu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (iu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hz = (function () {
  function e() {
    Fz(this, e),
      uy(this, "activeIndex", 0),
      uy(this, "coordinateList", []),
      uy(this, "layout", "horizontal");
  }
  return Uz(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          o = r.coordinateList,
          u = o === void 0 ? null : o,
          l = r.container,
          c = l === void 0 ? null : l,
          f = r.layout,
          p = f === void 0 ? null : f,
          v = r.offset,
          h = v === void 0 ? null : v,
          g = r.mouseHandlerCallback,
          w = g === void 0 ? null : g;
        (this.coordinateList =
          (n = u ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = c ?? this.container),
          (this.layout = p ?? this.layout),
          (this.offset = h ?? this.offset),
          (this.mouseHandlerCallback = w ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1
          ));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1
              )),
                this.spoofMouse();
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse();
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var o = this.container.getBoundingClientRect(),
            u = o.x,
            l = o.y,
            c = o.height,
            f = this.coordinateList[this.activeIndex].coordinate,
            p =
              ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            v =
              ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            h = u + f + p,
            g = l + this.offset.top + c / 2 + v;
          this.mouseHandlerCallback({ pageX: h, pageY: g });
        }
      },
    },
  ]);
})();
function Gz(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      o = e == null ? void 0 : e[1];
    if (n && o && se(n) && se(o)) return !0;
  }
  return !1;
}
function Kz(e, t, r, n) {
  var o = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - o : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - o,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function eC(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    o = e.startAngle,
    u = e.endAngle,
    l = St(t, r, n, o),
    c = St(t, r, n, u);
  return {
    points: [l, c],
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: u,
  };
}
function Vz(e, t, r) {
  var n, o, u, l;
  if (e === "horizontal")
    (n = t.x), (u = n), (o = r.top), (l = r.top + r.height);
  else if (e === "vertical")
    (o = t.y), (l = o), (n = r.left), (u = r.left + r.width);
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var c = t.cx,
        f = t.cy,
        p = t.innerRadius,
        v = t.outerRadius,
        h = t.angle,
        g = St(c, f, p, h),
        w = St(c, f, v, h);
      (n = g.x), (o = g.y), (u = w.x), (l = w.y);
    } else return eC(t);
  return [
    { x: n, y: o },
    { x: u, y: l },
  ];
}
function au(e) {
  "@babel/helpers - typeof";
  return (
    (au =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    au(e)
  );
}
function KP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? KP(Object(r), !0).forEach(function (n) {
          Xz(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : KP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Xz(e, t, r) {
  return (
    (t = Yz(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Yz(e) {
  var t = Qz(e, "string");
  return au(t) == "symbol" ? t : t + "";
}
function Qz(e, t) {
  if (au(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (au(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zz(e) {
  var t,
    r,
    n = e.element,
    o = e.tooltipEventType,
    u = e.isActive,
    l = e.activeCoordinate,
    c = e.activePayload,
    f = e.offset,
    p = e.activeTooltipIndex,
    v = e.tooltipAxisBandSize,
    h = e.layout,
    g = e.chartName,
    w =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
        ? void 0
        : r.cursor;
  if (!n || !w || !u || !l || (g !== "ScatterChart" && o !== "axis"))
    return null;
  var S,
    x = AO;
  if (g === "ScatterChart") (S = l), (x = O4);
  else if (g === "BarChart") (S = Kz(h, l, f, v)), (x = bg);
  else if (h === "radial") {
    var b = eC(l),
      T = b.cx,
      A = b.cy,
      E = b.radius,
      C = b.startAngle,
      _ = b.endAngle;
    (S = {
      cx: T,
      cy: A,
      startAngle: C,
      endAngle: _,
      innerRadius: E,
      outerRadius: E,
    }),
      (x = sT);
  } else (S = { points: Vz(h, l, f) }), (x = AO);
  var P = $l(
    $l($l($l({ stroke: "#ccc", pointerEvents: "none" }, f), S), Re(w, !1)),
    {},
    {
      payload: c,
      payloadIndex: p,
      className: De("recharts-tooltip-cursor", w.className),
    }
  );
  return ue.isValidElement(w) ? ue.cloneElement(w, P) : ue.createElement(x, P);
}
var Jz = ["item"],
  e5 = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function pa(e) {
  "@babel/helpers - typeof";
  return (
    (pa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    pa(e)
  );
}
function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
function VP(e, t) {
  return n5(e) || r5(e, t) || rC(e, t) || t5();
}
function t5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r5(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      u,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((u = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(f = (n = u.call(r)).done) && (c.push(n.value), c.length !== t);
          f = !0
        );
    } catch (v) {
      (p = !0), (o = v);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function n5(e) {
  if (Array.isArray(e)) return e;
}
function XP(e, t) {
  if (e == null) return {};
  var r = i5(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (n = u[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function i5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function a5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, nC(n.key), n);
  }
}
function u5(e, t, r) {
  return (
    o5(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function l5(e, t, r) {
  return (
    (t = Ms(t)),
    s5(e, tC() ? Reflect.construct(t, r, Ms(e).constructor) : t.apply(e, r))
  );
}
function s5(e, t) {
  if (t && (pa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return c5(e);
}
function c5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function tC() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (tC = function () {
    return !!e;
  })();
}
function Ms(e) {
  return (
    (Ms = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ms(e)
  );
}
function f5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wm(e, t);
}
function wm(e, t) {
  return (
    (wm = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    wm(e, t)
  );
}
function ha(e) {
  return h5(e) || p5(e) || rC(e) || d5();
}
function d5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rC(e, t) {
  if (e) {
    if (typeof e == "string") return xm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return xm(e, t);
  }
}
function p5(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function h5(e) {
  if (Array.isArray(e)) return xm(e);
}
function xm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function YP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? YP(Object(r), !0).forEach(function (n) {
          xe(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : YP(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function xe(e, t, r) {
  return (
    (t = nC(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function nC(e) {
  var t = v5(e, "string");
  return pa(t) == "symbol" ? t : t + "";
}
function v5(e, t) {
  if (pa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var y5 = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  m5 = { width: "100%", height: "100%" },
  iC = { x: 0, y: 0 };
function Dl(e) {
  return e;
}
var g5 = function (t, r) {
    return r === "horizontal"
      ? t.x
      : r === "vertical"
      ? t.y
      : r === "centric"
      ? t.angle
      : t.radius;
  },
  b5 = function (t, r, n, o) {
    var u = r.find(function (v) {
      return v && v.index === n;
    });
    if (u) {
      if (t === "horizontal") return { x: u.coordinate, y: o.y };
      if (t === "vertical") return { x: o.x, y: u.coordinate };
      if (t === "centric") {
        var l = u.coordinate,
          c = o.radius;
        return Y(
          Y(Y({}, o), St(o.cx, o.cy, c, l)),
          {},
          { angle: l, radius: c }
        );
      }
      var f = u.coordinate,
        p = o.angle;
      return Y(Y(Y({}, o), St(o.cx, o.cy, f, p)), {}, { angle: p, radius: f });
    }
    return iC;
  },
  pc = function (t, r) {
    var n = r.graphicalItems,
      o = r.dataStartIndex,
      u = r.dataEndIndex,
      l = (n ?? []).reduce(function (c, f) {
        var p = f.props.data;
        return p && p.length ? [].concat(ha(c), ha(p)) : c;
      }, []);
    return l.length > 0
      ? l
      : t && t.length && se(o) && se(u)
      ? t.slice(o, u + 1)
      : [];
  };
function aC(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Sm = function (t, r, n, o) {
    var u = t.graphicalItems,
      l = t.tooltipAxis,
      c = pc(r, t);
    return n < 0 || !u || !u.length || n >= c.length
      ? null
      : u.reduce(function (f, p) {
          var v,
            h = (v = p.props.data) !== null && v !== void 0 ? v : r;
          h &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var g;
          if (l.dataKey && !l.allowDuplicatedCategory) {
            var w = h === void 0 ? c : h;
            g = ly(w, l.dataKey, o);
          } else g = (h && h[n]) || c[n];
          return g ? [].concat(ha(f), [oT(p, g)]) : f;
        }, []);
  },
  QP = function (t, r, n, o) {
    var u = o || { x: t.chartX, y: t.chartY },
      l = g5(u, n),
      c = t.orderedTooltipTicks,
      f = t.tooltipAxis,
      p = t.tooltipTicks,
      v = uq(l, c, p, f);
    if (v >= 0 && p) {
      var h = p[v] && p[v].value,
        g = Sm(t, r, v, h),
        w = b5(n, c, v, u);
      return {
        activeTooltipIndex: v,
        activeLabel: h,
        activePayload: g,
        activeCoordinate: w,
      };
    }
    return null;
  },
  w5 = function (t, r) {
    var n = r.axes,
      o = r.graphicalItems,
      u = r.axisType,
      l = r.axisIdKey,
      c = r.stackGroups,
      f = r.dataStartIndex,
      p = r.dataEndIndex,
      v = t.layout,
      h = t.children,
      g = t.stackOffset,
      w = iT(v, u);
    return n.reduce(function (S, x) {
      var b,
        T =
          x.type.defaultProps !== void 0
            ? Y(Y({}, x.type.defaultProps), x.props)
            : x.props,
        A = T.type,
        E = T.dataKey,
        C = T.allowDataOverflow,
        _ = T.allowDuplicatedCategory,
        P = T.scale,
        k = T.ticks,
        I = T.includeHidden,
        D = T[l];
      if (S[D]) return S;
      var G = pc(t.data, {
          graphicalItems: o.filter(function (L) {
            var oe,
              pe =
                l in L.props
                  ? L.props[l]
                  : (oe = L.type.defaultProps) === null || oe === void 0
                  ? void 0
                  : oe[l];
            return pe === D;
          }),
          dataStartIndex: f,
          dataEndIndex: p,
        }),
        R = G.length,
        B,
        z,
        V;
      Gz(T.domain, C, A) &&
        ((B = zy(T.domain, null, C)),
        w && (A === "number" || P !== "auto") && (V = _o(G, E, "category")));
      var K = aC(A);
      if (!B || B.length === 0) {
        var Z,
          J = (Z = T.domain) !== null && Z !== void 0 ? Z : K;
        if (E) {
          if (((B = _o(G, E, A)), A === "category" && w)) {
            var W = Jj(B);
            _ && W
              ? ((z = B), (B = ws(0, R)))
              : _ ||
                (B = dO(J, B, x).reduce(function (L, oe) {
                  return L.indexOf(oe) >= 0 ? L : [].concat(ha(L), [oe]);
                }, []));
          } else if (A === "category")
            _
              ? (B = B.filter(function (L) {
                  return L !== "" && !$e(L);
                }))
              : (B = dO(J, B, x).reduce(function (L, oe) {
                  return L.indexOf(oe) >= 0 || oe === "" || $e(oe)
                    ? L
                    : [].concat(ha(L), [oe]);
                }, []));
          else if (A === "number") {
            var X = dq(
              G,
              o.filter(function (L) {
                var oe,
                  pe,
                  me =
                    l in L.props
                      ? L.props[l]
                      : (oe = L.type.defaultProps) === null || oe === void 0
                      ? void 0
                      : oe[l],
                  _e =
                    "hide" in L.props
                      ? L.props.hide
                      : (pe = L.type.defaultProps) === null || pe === void 0
                      ? void 0
                      : pe.hide;
                return me === D && (I || !_e);
              }),
              E,
              u,
              v
            );
            X && (B = X);
          }
          w && (A === "number" || P !== "auto") && (V = _o(G, E, "category"));
        } else
          w
            ? (B = ws(0, R))
            : c && c[D] && c[D].hasStack && A === "number"
            ? (B = g === "expand" ? [0, 1] : aT(c[D].stackGroups, f, p))
            : (B = nT(
                G,
                o.filter(function (L) {
                  var oe = l in L.props ? L.props[l] : L.type.defaultProps[l],
                    pe =
                      "hide" in L.props
                        ? L.props.hide
                        : L.type.defaultProps.hide;
                  return oe === D && (I || !pe);
                }),
                A,
                v,
                !0
              ));
        if (A === "number") (B = bm(h, B, D, u, k)), J && (B = zy(J, B, C));
        else if (A === "category" && J) {
          var Q = J,
            M = B.every(function (L) {
              return Q.indexOf(L) >= 0;
            });
          M && (B = Q);
        }
      }
      return Y(
        Y({}, S),
        {},
        xe(
          {},
          D,
          Y(
            Y({}, T),
            {},
            {
              axisType: u,
              domain: B,
              categoricalDomain: V,
              duplicateDomain: z,
              originalDomain: (b = T.domain) !== null && b !== void 0 ? b : K,
              isCategorical: w,
              layout: v,
            }
          )
        )
      );
    }, {});
  },
  x5 = function (t, r) {
    var n = r.graphicalItems,
      o = r.Axis,
      u = r.axisType,
      l = r.axisIdKey,
      c = r.stackGroups,
      f = r.dataStartIndex,
      p = r.dataEndIndex,
      v = t.layout,
      h = t.children,
      g = pc(t.data, { graphicalItems: n, dataStartIndex: f, dataEndIndex: p }),
      w = g.length,
      S = iT(v, u),
      x = -1;
    return n.reduce(function (b, T) {
      var A =
          T.type.defaultProps !== void 0
            ? Y(Y({}, T.type.defaultProps), T.props)
            : T.props,
        E = A[l],
        C = aC("number");
      if (!b[E]) {
        x++;
        var _;
        return (
          S
            ? (_ = ws(0, w))
            : c && c[E] && c[E].hasStack
            ? ((_ = aT(c[E].stackGroups, f, p)), (_ = bm(h, _, E, u)))
            : ((_ = zy(
                C,
                nT(
                  g,
                  n.filter(function (P) {
                    var k,
                      I,
                      D =
                        l in P.props
                          ? P.props[l]
                          : (k = P.type.defaultProps) === null || k === void 0
                          ? void 0
                          : k[l],
                      G =
                        "hide" in P.props
                          ? P.props.hide
                          : (I = P.type.defaultProps) === null || I === void 0
                          ? void 0
                          : I.hide;
                    return D === E && !G;
                  }),
                  "number",
                  v
                ),
                o.defaultProps.allowDataOverflow
              )),
              (_ = bm(h, _, E, u))),
          Y(
            Y({}, b),
            {},
            xe(
              {},
              E,
              Y(
                Y({ axisType: u }, o.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: ir(y5, "".concat(u, ".").concat(x % 2), null),
                  domain: _,
                  originalDomain: C,
                  isCategorical: S,
                  layout: v,
                }
              )
            )
          )
        );
      }
      return b;
    }, {});
  },
  S5 = function (t, r) {
    var n = r.axisType,
      o = n === void 0 ? "xAxis" : n,
      u = r.AxisComp,
      l = r.graphicalItems,
      c = r.stackGroups,
      f = r.dataStartIndex,
      p = r.dataEndIndex,
      v = t.children,
      h = "".concat(o, "Id"),
      g = xr(v, u),
      w = {};
    return (
      g.length
        ? (w = w5(t, {
            axes: g,
            graphicalItems: l,
            axisType: o,
            axisIdKey: h,
            stackGroups: c,
            dataStartIndex: f,
            dataEndIndex: p,
          }))
        : l &&
          l.length &&
          (w = x5(t, {
            Axis: u,
            graphicalItems: l,
            axisType: o,
            axisIdKey: h,
            stackGroups: c,
            dataStartIndex: f,
            dataEndIndex: p,
          })),
      w
    );
  },
  _5 = function (t) {
    var r = Fi(t),
      n = ei(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: Hm(n, function (o) {
        return o.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: fs(r, n),
    };
  },
  ZP = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      o = Kt(r, aa),
      u = 0,
      l = 0;
    return (
      t.data && t.data.length !== 0 && (l = t.data.length - 1),
      o &&
        o.props &&
        (o.props.startIndex >= 0 && (u = o.props.startIndex),
        o.props.endIndex >= 0 && (l = o.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: u,
        dataEndIndex: l,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  O5 = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = Vr(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  JP = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
      ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
      : t === "centric"
      ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
      : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  P5 = function (t, r) {
    var n = t.props,
      o = t.graphicalItems,
      u = t.xAxisMap,
      l = u === void 0 ? {} : u,
      c = t.yAxisMap,
      f = c === void 0 ? {} : c,
      p = n.width,
      v = n.height,
      h = n.children,
      g = n.margin || {},
      w = Kt(h, aa),
      S = Kt(h, ri),
      x = Object.keys(f).reduce(
        function (_, P) {
          var k = f[P],
            I = k.orientation;
          return !k.mirror && !k.hide
            ? Y(Y({}, _), {}, xe({}, I, _[I] + k.width))
            : _;
        },
        { left: g.left || 0, right: g.right || 0 }
      ),
      b = Object.keys(l).reduce(
        function (_, P) {
          var k = l[P],
            I = k.orientation;
          return !k.mirror && !k.hide
            ? Y(Y({}, _), {}, xe({}, I, ir(_, "".concat(I)) + k.height))
            : _;
        },
        { top: g.top || 0, bottom: g.bottom || 0 }
      ),
      T = Y(Y({}, b), x),
      A = T.bottom;
    w && (T.bottom += w.props.height || aa.defaultProps.height),
      S && r && (T = cq(T, o, n, r));
    var E = p - T.left - T.right,
      C = v - T.top - T.bottom;
    return Y(
      Y({ brushBottom: A }, T),
      {},
      { width: Math.max(E, 0), height: Math.max(C, 0) }
    );
  },
  A5 = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  E5 = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      o = t.defaultTooltipEventType,
      u = o === void 0 ? "axis" : o,
      l = t.validateTooltipEventTypes,
      c = l === void 0 ? ["axis"] : l,
      f = t.axisComponents,
      p = t.legendContent,
      v = t.formatAxisMap,
      h = t.defaultProps,
      g = function (T, A) {
        var E = A.graphicalItems,
          C = A.stackGroups,
          _ = A.offset,
          P = A.updateId,
          k = A.dataStartIndex,
          I = A.dataEndIndex,
          D = T.barSize,
          G = T.layout,
          R = T.barGap,
          B = T.barCategoryGap,
          z = T.maxBarSize,
          V = JP(G),
          K = V.numericAxisName,
          Z = V.cateAxisName,
          J = O5(E),
          W = [];
        return (
          E.forEach(function (X, Q) {
            var M = pc(T.data, {
                graphicalItems: [X],
                dataStartIndex: k,
                dataEndIndex: I,
              }),
              L =
                X.type.defaultProps !== void 0
                  ? Y(Y({}, X.type.defaultProps), X.props)
                  : X.props,
              oe = L.dataKey,
              pe = L.maxBarSize,
              me = L["".concat(K, "Id")],
              _e = L["".concat(Z, "Id")],
              Ce = {},
              Oe = f.reduce(function (It, lr) {
                var pi = A["".concat(lr.axisType, "Map")],
                  xa = L["".concat(lr.axisType, "Id")];
                (pi && pi[xa]) || lr.axisType === "zAxis" || li();
                var Sa = pi[xa];
                return Y(
                  Y({}, It),
                  {},
                  xe(
                    xe({}, lr.axisType, Sa),
                    "".concat(lr.axisType, "Ticks"),
                    ei(Sa)
                  )
                );
              }, Ce),
              ie = Oe[Z],
              ye = Oe["".concat(Z, "Ticks")],
              Pe = C && C[me] && C[me].hasStack && Oq(X, C[me].stackGroups),
              re = Vr(X.type).indexOf("Bar") >= 0,
              Be = fs(ie, ye),
              Ee = [],
              Ze =
                J && lq({ barSize: D, stackGroups: C, totalSize: A5(Oe, Z) });
            if (re) {
              var Je,
                dt,
                ur = $e(pe) ? z : pe,
                _r =
                  (Je =
                    (dt = fs(ie, ye, !0)) !== null && dt !== void 0
                      ? dt
                      : ur) !== null && Je !== void 0
                    ? Je
                    : 0;
              (Ee = sq({
                barGap: R,
                barCategoryGap: B,
                bandSize: _r !== Be ? _r : Be,
                sizeList: Ze[_e],
                maxBarSize: ur,
              })),
                _r !== Be &&
                  (Ee = Ee.map(function (It) {
                    return Y(
                      Y({}, It),
                      {},
                      {
                        position: Y(
                          Y({}, It.position),
                          {},
                          { offset: It.position.offset - _r / 2 }
                        ),
                      }
                    );
                  }));
            }
            var Or = X && X.type && X.type.getComposedData;
            Or &&
              W.push({
                props: Y(
                  Y(
                    {},
                    Or(
                      Y(
                        Y({}, Oe),
                        {},
                        {
                          displayedData: M,
                          props: T,
                          dataKey: oe,
                          item: X,
                          bandSize: Be,
                          barPosition: Ee,
                          offset: _,
                          stackedData: Pe,
                          layout: G,
                          dataStartIndex: k,
                          dataEndIndex: I,
                        }
                      )
                    )
                  ),
                  {},
                  xe(
                    xe(
                      xe({ key: X.key || "item-".concat(Q) }, K, Oe[K]),
                      Z,
                      Oe[Z]
                    ),
                    "animationId",
                    P
                  )
                ),
                childIndex: cM(X, T.children),
                item: X,
              });
          }),
          W
        );
      },
      w = function (T, A) {
        var E = T.props,
          C = T.dataStartIndex,
          _ = T.dataEndIndex,
          P = T.updateId;
        if (!Ew({ props: E })) return null;
        var k = E.children,
          I = E.layout,
          D = E.stackOffset,
          G = E.data,
          R = E.reverseStackOrder,
          B = JP(I),
          z = B.numericAxisName,
          V = B.cateAxisName,
          K = xr(k, n),
          Z = xq(G, K, "".concat(z, "Id"), "".concat(V, "Id"), D, R),
          J = f.reduce(function (L, oe) {
            var pe = "".concat(oe.axisType, "Map");
            return Y(
              Y({}, L),
              {},
              xe(
                {},
                pe,
                S5(
                  E,
                  Y(
                    Y({}, oe),
                    {},
                    {
                      graphicalItems: K,
                      stackGroups: oe.axisType === z && Z,
                      dataStartIndex: C,
                      dataEndIndex: _,
                    }
                  )
                )
              )
            );
          }, {}),
          W = P5(
            Y(Y({}, J), {}, { props: E, graphicalItems: K }),
            A == null ? void 0 : A.legendBBox
          );
        Object.keys(J).forEach(function (L) {
          J[L] = v(E, J[L], W, L.replace("Map", ""), r);
        });
        var X = J["".concat(V, "Map")],
          Q = _5(X),
          M = g(
            E,
            Y(
              Y({}, J),
              {},
              {
                dataStartIndex: C,
                dataEndIndex: _,
                updateId: P,
                graphicalItems: K,
                stackGroups: Z,
                offset: W,
              }
            )
          );
        return Y(
          Y(
            {
              formattedGraphicalItems: M,
              graphicalItems: K,
              offset: W,
              stackGroups: Z,
            },
            Q
          ),
          J
        );
      },
      S = (function (b) {
        function T(A) {
          var E, C, _;
          return (
            a5(this, T),
            (_ = l5(this, T, [A])),
            xe(_, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            xe(_, "accessibilityManager", new Hz()),
            xe(_, "handleLegendBBoxUpdate", function (P) {
              if (P) {
                var k = _.state,
                  I = k.dataStartIndex,
                  D = k.dataEndIndex,
                  G = k.updateId;
                _.setState(
                  Y(
                    { legendBBox: P },
                    w(
                      {
                        props: _.props,
                        dataStartIndex: I,
                        dataEndIndex: D,
                        updateId: G,
                      },
                      Y(Y({}, _.state), {}, { legendBBox: P })
                    )
                  )
                );
              }
            }),
            xe(_, "handleReceiveSyncEvent", function (P, k, I) {
              if (_.props.syncId === P) {
                if (
                  I === _.eventEmitterSymbol &&
                  typeof _.props.syncMethod != "function"
                )
                  return;
                _.applySyncEvent(k);
              }
            }),
            xe(_, "handleBrushChange", function (P) {
              var k = P.startIndex,
                I = P.endIndex;
              if (k !== _.state.dataStartIndex || I !== _.state.dataEndIndex) {
                var D = _.state.updateId;
                _.setState(function () {
                  return Y(
                    { dataStartIndex: k, dataEndIndex: I },
                    w(
                      {
                        props: _.props,
                        dataStartIndex: k,
                        dataEndIndex: I,
                        updateId: D,
                      },
                      _.state
                    )
                  );
                }),
                  _.triggerSyncEvent({ dataStartIndex: k, dataEndIndex: I });
              }
            }),
            xe(_, "handleMouseEnter", function (P) {
              var k = _.getMouseInfo(P);
              if (k) {
                var I = Y(Y({}, k), {}, { isTooltipActive: !0 });
                _.setState(I), _.triggerSyncEvent(I);
                var D = _.props.onMouseEnter;
                Te(D) && D(I, P);
              }
            }),
            xe(_, "triggeredAfterMouseMove", function (P) {
              var k = _.getMouseInfo(P),
                I = k
                  ? Y(Y({}, k), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              _.setState(I), _.triggerSyncEvent(I);
              var D = _.props.onMouseMove;
              Te(D) && D(I, P);
            }),
            xe(_, "handleItemMouseEnter", function (P) {
              _.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: P,
                  activePayload: P.tooltipPayload,
                  activeCoordinate: P.tooltipPosition || { x: P.cx, y: P.cy },
                };
              });
            }),
            xe(_, "handleItemMouseLeave", function () {
              _.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            xe(_, "handleMouseMove", function (P) {
              P.persist(), _.throttleTriggeredAfterMouseMove(P);
            }),
            xe(_, "handleMouseLeave", function (P) {
              _.throttleTriggeredAfterMouseMove.cancel();
              var k = { isTooltipActive: !1 };
              _.setState(k), _.triggerSyncEvent(k);
              var I = _.props.onMouseLeave;
              Te(I) && I(k, P);
            }),
            xe(_, "handleOuterEvent", function (P) {
              var k = sM(P),
                I = ir(_.props, "".concat(k));
              if (k && Te(I)) {
                var D, G;
                /.*touch.*/i.test(k)
                  ? (G = _.getMouseInfo(P.changedTouches[0]))
                  : (G = _.getMouseInfo(P)),
                  I((D = G) !== null && D !== void 0 ? D : {}, P);
              }
            }),
            xe(_, "handleClick", function (P) {
              var k = _.getMouseInfo(P);
              if (k) {
                var I = Y(Y({}, k), {}, { isTooltipActive: !0 });
                _.setState(I), _.triggerSyncEvent(I);
                var D = _.props.onClick;
                Te(D) && D(I, P);
              }
            }),
            xe(_, "handleMouseDown", function (P) {
              var k = _.props.onMouseDown;
              if (Te(k)) {
                var I = _.getMouseInfo(P);
                k(I, P);
              }
            }),
            xe(_, "handleMouseUp", function (P) {
              var k = _.props.onMouseUp;
              if (Te(k)) {
                var I = _.getMouseInfo(P);
                k(I, P);
              }
            }),
            xe(_, "handleTouchMove", function (P) {
              P.changedTouches != null &&
                P.changedTouches.length > 0 &&
                _.throttleTriggeredAfterMouseMove(P.changedTouches[0]);
            }),
            xe(_, "handleTouchStart", function (P) {
              P.changedTouches != null &&
                P.changedTouches.length > 0 &&
                _.handleMouseDown(P.changedTouches[0]);
            }),
            xe(_, "handleTouchEnd", function (P) {
              P.changedTouches != null &&
                P.changedTouches.length > 0 &&
                _.handleMouseUp(P.changedTouches[0]);
            }),
            xe(_, "handleDoubleClick", function (P) {
              var k = _.props.onDoubleClick;
              if (Te(k)) {
                var I = _.getMouseInfo(P);
                k(I, P);
              }
            }),
            xe(_, "handleContextMenu", function (P) {
              var k = _.props.onContextMenu;
              if (Te(k)) {
                var I = _.getMouseInfo(P);
                k(I, P);
              }
            }),
            xe(_, "triggerSyncEvent", function (P) {
              _.props.syncId !== void 0 &&
                ay.emit(oy, _.props.syncId, P, _.eventEmitterSymbol);
            }),
            xe(_, "applySyncEvent", function (P) {
              var k = _.props,
                I = k.layout,
                D = k.syncMethod,
                G = _.state.updateId,
                R = P.dataStartIndex,
                B = P.dataEndIndex;
              if (P.dataStartIndex !== void 0 || P.dataEndIndex !== void 0)
                _.setState(
                  Y(
                    { dataStartIndex: R, dataEndIndex: B },
                    w(
                      {
                        props: _.props,
                        dataStartIndex: R,
                        dataEndIndex: B,
                        updateId: G,
                      },
                      _.state
                    )
                  )
                );
              else if (P.activeTooltipIndex !== void 0) {
                var z = P.chartX,
                  V = P.chartY,
                  K = P.activeTooltipIndex,
                  Z = _.state,
                  J = Z.offset,
                  W = Z.tooltipTicks;
                if (!J) return;
                if (typeof D == "function") K = D(W, P);
                else if (D === "value") {
                  K = -1;
                  for (var X = 0; X < W.length; X++)
                    if (W[X].value === P.activeLabel) {
                      K = X;
                      break;
                    }
                }
                var Q = Y(Y({}, J), {}, { x: J.left, y: J.top }),
                  M = Math.min(z, Q.x + Q.width),
                  L = Math.min(V, Q.y + Q.height),
                  oe = W[K] && W[K].value,
                  pe = Sm(_.state, _.props.data, K),
                  me = W[K]
                    ? {
                        x: I === "horizontal" ? W[K].coordinate : M,
                        y: I === "horizontal" ? L : W[K].coordinate,
                      }
                    : iC;
                _.setState(
                  Y(
                    Y({}, P),
                    {},
                    {
                      activeLabel: oe,
                      activeCoordinate: me,
                      activePayload: pe,
                      activeTooltipIndex: K,
                    }
                  )
                );
              } else _.setState(P);
            }),
            xe(_, "renderCursor", function (P) {
              var k,
                I = _.state,
                D = I.isTooltipActive,
                G = I.activeCoordinate,
                R = I.activePayload,
                B = I.offset,
                z = I.activeTooltipIndex,
                V = I.tooltipAxisBandSize,
                K = _.getTooltipEventType(),
                Z = (k = P.props.active) !== null && k !== void 0 ? k : D,
                J = _.props.layout,
                W = P.key || "_recharts-cursor";
              return F.createElement(Zz, {
                key: W,
                activeCoordinate: G,
                activePayload: R,
                activeTooltipIndex: z,
                chartName: r,
                element: P,
                isActive: Z,
                layout: J,
                offset: B,
                tooltipAxisBandSize: V,
                tooltipEventType: K,
              });
            }),
            xe(_, "renderPolarAxis", function (P, k, I) {
              var D = ir(P, "type.axisType"),
                G = ir(_.state, "".concat(D, "Map")),
                R = P.type.defaultProps,
                B = R !== void 0 ? Y(Y({}, R), P.props) : P.props,
                z = G && G[B["".concat(D, "Id")]];
              return ue.cloneElement(
                P,
                Y(
                  Y({}, z),
                  {},
                  {
                    className: De(D, z.className),
                    key: P.key || "".concat(k, "-").concat(I),
                    ticks: ei(z, !0),
                  }
                )
              );
            }),
            xe(_, "renderPolarGrid", function (P) {
              var k = P.props,
                I = k.radialLines,
                D = k.polarAngles,
                G = k.polarRadius,
                R = _.state,
                B = R.radiusAxisMap,
                z = R.angleAxisMap,
                V = Fi(B),
                K = Fi(z),
                Z = K.cx,
                J = K.cy,
                W = K.innerRadius,
                X = K.outerRadius;
              return ue.cloneElement(P, {
                polarAngles: Array.isArray(D)
                  ? D
                  : ei(K, !0).map(function (Q) {
                      return Q.coordinate;
                    }),
                polarRadius: Array.isArray(G)
                  ? G
                  : ei(V, !0).map(function (Q) {
                      return Q.coordinate;
                    }),
                cx: Z,
                cy: J,
                innerRadius: W,
                outerRadius: X,
                key: P.key || "polar-grid",
                radialLines: I,
              });
            }),
            xe(_, "renderLegend", function () {
              var P = _.state.formattedGraphicalItems,
                k = _.props,
                I = k.children,
                D = k.width,
                G = k.height,
                R = _.props.margin || {},
                B = D - (R.left || 0) - (R.right || 0),
                z = tT({
                  children: I,
                  formattedGraphicalItems: P,
                  legendWidth: B,
                  legendContent: p,
                });
              if (!z) return null;
              var V = z.item,
                K = XP(z, Jz);
              return ue.cloneElement(
                V,
                Y(
                  Y({}, K),
                  {},
                  {
                    chartWidth: D,
                    chartHeight: G,
                    margin: R,
                    onBBoxUpdate: _.handleLegendBBoxUpdate,
                  }
                )
              );
            }),
            xe(_, "renderTooltip", function () {
              var P,
                k = _.props,
                I = k.children,
                D = k.accessibilityLayer,
                G = Kt(I, kr);
              if (!G) return null;
              var R = _.state,
                B = R.isTooltipActive,
                z = R.activeCoordinate,
                V = R.activePayload,
                K = R.activeLabel,
                Z = R.offset,
                J = (P = G.props.active) !== null && P !== void 0 ? P : B;
              return ue.cloneElement(G, {
                viewBox: Y(Y({}, Z), {}, { x: Z.left, y: Z.top }),
                active: J,
                label: K,
                payload: J ? V : [],
                coordinate: z,
                accessibilityLayer: D,
              });
            }),
            xe(_, "renderBrush", function (P) {
              var k = _.props,
                I = k.margin,
                D = k.data,
                G = _.state,
                R = G.offset,
                B = G.dataStartIndex,
                z = G.dataEndIndex,
                V = G.updateId;
              return ue.cloneElement(P, {
                key: P.key || "_recharts-brush",
                onChange: Ml(_.handleBrushChange, P.props.onChange),
                data: D,
                x: se(P.props.x) ? P.props.x : R.left,
                y: se(P.props.y)
                  ? P.props.y
                  : R.top + R.height + R.brushBottom - (I.bottom || 0),
                width: se(P.props.width) ? P.props.width : R.width,
                startIndex: B,
                endIndex: z,
                updateId: "brush-".concat(V),
              });
            }),
            xe(_, "renderReferenceElement", function (P, k, I) {
              if (!P) return null;
              var D = _,
                G = D.clipPathId,
                R = _.state,
                B = R.xAxisMap,
                z = R.yAxisMap,
                V = R.offset,
                K = P.type.defaultProps || {},
                Z = P.props,
                J = Z.xAxisId,
                W = J === void 0 ? K.xAxisId : J,
                X = Z.yAxisId,
                Q = X === void 0 ? K.yAxisId : X;
              return ue.cloneElement(P, {
                key: P.key || "".concat(k, "-").concat(I),
                xAxis: B[W],
                yAxis: z[Q],
                viewBox: {
                  x: V.left,
                  y: V.top,
                  width: V.width,
                  height: V.height,
                },
                clipPathId: G,
              });
            }),
            xe(_, "renderActivePoints", function (P) {
              var k = P.item,
                I = P.activePoint,
                D = P.basePoint,
                G = P.childIndex,
                R = P.isRange,
                B = [],
                z = k.props.key,
                V =
                  k.item.type.defaultProps !== void 0
                    ? Y(Y({}, k.item.type.defaultProps), k.item.props)
                    : k.item.props,
                K = V.activeDot,
                Z = V.dataKey,
                J = Y(
                  Y(
                    {
                      index: G,
                      dataKey: Z,
                      cx: I.x,
                      cy: I.y,
                      r: 4,
                      fill: gg(k.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: I.payload,
                      value: I.value,
                    },
                    Re(K, !1)
                  ),
                  ql(K)
                );
              return (
                B.push(
                  T.renderActiveDot(
                    K,
                    J,
                    "".concat(z, "-activePoint-").concat(G)
                  )
                ),
                D
                  ? B.push(
                      T.renderActiveDot(
                        K,
                        Y(Y({}, J), {}, { cx: D.x, cy: D.y }),
                        "".concat(z, "-basePoint-").concat(G)
                      )
                    )
                  : R && B.push(null),
                B
              );
            }),
            xe(_, "renderGraphicChild", function (P, k, I) {
              var D = _.filterFormatItem(P, k, I);
              if (!D) return null;
              var G = _.getTooltipEventType(),
                R = _.state,
                B = R.isTooltipActive,
                z = R.tooltipAxis,
                V = R.activeTooltipIndex,
                K = R.activeLabel,
                Z = _.props.children,
                J = Kt(Z, kr),
                W = D.props,
                X = W.points,
                Q = W.isRange,
                M = W.baseLine,
                L =
                  D.item.type.defaultProps !== void 0
                    ? Y(Y({}, D.item.type.defaultProps), D.item.props)
                    : D.item.props,
                oe = L.activeDot,
                pe = L.hide,
                me = L.activeBar,
                _e = L.activeShape,
                Ce = !!(!pe && B && J && (oe || me || _e)),
                Oe = {};
              G !== "axis" && J && J.props.trigger === "click"
                ? (Oe = {
                    onClick: Ml(_.handleItemMouseEnter, P.props.onClick),
                  })
                : G !== "axis" &&
                  (Oe = {
                    onMouseLeave: Ml(
                      _.handleItemMouseLeave,
                      P.props.onMouseLeave
                    ),
                    onMouseEnter: Ml(
                      _.handleItemMouseEnter,
                      P.props.onMouseEnter
                    ),
                  });
              var ie = ue.cloneElement(P, Y(Y({}, D.props), Oe));
              function ye(lr) {
                return typeof z.dataKey == "function"
                  ? z.dataKey(lr.payload)
                  : null;
              }
              if (Ce)
                if (V >= 0) {
                  var Pe, re;
                  if (z.dataKey && !z.allowDuplicatedCategory) {
                    var Be =
                      typeof z.dataKey == "function"
                        ? ye
                        : "payload.".concat(z.dataKey.toString());
                    (Pe = ly(X, Be, K)), (re = Q && M && ly(M, Be, K));
                  } else
                    (Pe = X == null ? void 0 : X[V]), (re = Q && M && M[V]);
                  if (_e || me) {
                    var Ee =
                      P.props.activeIndex !== void 0 ? P.props.activeIndex : V;
                    return [
                      ue.cloneElement(
                        P,
                        Y(Y(Y({}, D.props), Oe), {}, { activeIndex: Ee })
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!$e(Pe))
                    return [ie].concat(
                      ha(
                        _.renderActivePoints({
                          item: D,
                          activePoint: Pe,
                          basePoint: re,
                          childIndex: V,
                          isRange: Q,
                        })
                      )
                    );
                } else {
                  var Ze,
                    Je =
                      (Ze = _.getItemByXY(_.state.activeCoordinate)) !== null &&
                      Ze !== void 0
                        ? Ze
                        : { graphicalItem: ie },
                    dt = Je.graphicalItem,
                    ur = dt.item,
                    _r = ur === void 0 ? P : ur,
                    Or = dt.childIndex,
                    It = Y(Y(Y({}, D.props), Oe), {}, { activeIndex: Or });
                  return [ue.cloneElement(_r, It), null, null];
                }
              return Q ? [ie, null, null] : [ie, null];
            }),
            xe(_, "renderCustomized", function (P, k, I) {
              return ue.cloneElement(
                P,
                Y(
                  Y({ key: "recharts-customized-".concat(I) }, _.props),
                  _.state
                )
              );
            }),
            xe(_, "renderMap", {
              CartesianGrid: { handler: Dl, once: !0 },
              ReferenceArea: { handler: _.renderReferenceElement },
              ReferenceLine: { handler: Dl },
              ReferenceDot: { handler: _.renderReferenceElement },
              XAxis: { handler: Dl },
              YAxis: { handler: Dl },
              Brush: { handler: _.renderBrush, once: !0 },
              Bar: { handler: _.renderGraphicChild },
              Line: { handler: _.renderGraphicChild },
              Area: { handler: _.renderGraphicChild },
              Radar: { handler: _.renderGraphicChild },
              RadialBar: { handler: _.renderGraphicChild },
              Scatter: { handler: _.renderGraphicChild },
              Pie: { handler: _.renderGraphicChild },
              Funnel: { handler: _.renderGraphicChild },
              Tooltip: { handler: _.renderCursor, once: !0 },
              PolarGrid: { handler: _.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: _.renderPolarAxis },
              PolarRadiusAxis: { handler: _.renderPolarAxis },
              Customized: { handler: _.renderCustomized },
            }),
            (_.clipPathId = "".concat(
              (E = A.id) !== null && E !== void 0 ? E : Ls("recharts"),
              "-clip"
            )),
            (_.throttleTriggeredAfterMouseMove = eE(
              _.triggeredAfterMouseMove,
              (C = A.throttleDelay) !== null && C !== void 0 ? C : 1e3 / 60
            )),
            (_.state = {}),
            _
          );
        }
        return (
          f5(T, b),
          u5(T, [
            {
              key: "componentDidMount",
              value: function () {
                var E, C;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (E = this.props.margin.left) !== null && E !== void 0
                          ? E
                          : 0,
                      top:
                        (C = this.props.margin.top) !== null && C !== void 0
                          ? C
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var E = this.props,
                  C = E.children,
                  _ = E.data,
                  P = E.height,
                  k = E.layout,
                  I = Kt(C, kr);
                if (I) {
                  var D = I.props.defaultIndex;
                  if (
                    !(
                      typeof D != "number" ||
                      D < 0 ||
                      D > this.state.tooltipTicks.length - 1
                    )
                  ) {
                    var G =
                        this.state.tooltipTicks[D] &&
                        this.state.tooltipTicks[D].value,
                      R = Sm(this.state, _, D, G),
                      B = this.state.tooltipTicks[D].coordinate,
                      z = (this.state.offset.top + P) / 2,
                      V = k === "horizontal",
                      K = V ? { x: B, y: z } : { y: B, x: z },
                      Z = this.state.formattedGraphicalItems.find(function (W) {
                        var X = W.item;
                        return X.type.name === "Scatter";
                      });
                    Z &&
                      ((K = Y(Y({}, K), Z.props.points[D].tooltipPosition)),
                      (R = Z.props.points[D].tooltipPayload));
                    var J = {
                      activeTooltipIndex: D,
                      isTooltipActive: !0,
                      activeLabel: G,
                      activePayload: R,
                      activeCoordinate: K,
                    };
                    this.setState(J),
                      this.renderCursor(I),
                      this.accessibilityManager.setIndex(D);
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (E, C) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== C.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== E.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== E.margin)
                ) {
                  var _, P;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (_ = this.props.margin.left) !== null && _ !== void 0
                          ? _
                          : 0,
                      top:
                        (P = this.props.margin.top) !== null && P !== void 0
                          ? P
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (E) {
                cy([Kt(E.children, kr)], [Kt(this.props.children, kr)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var E = Kt(this.props.children, kr);
                if (E && typeof E.props.shared == "boolean") {
                  var C = E.props.shared ? "axis" : "item";
                  return c.indexOf(C) >= 0 ? C : u;
                }
                return u;
              },
            },
            {
              key: "getMouseInfo",
              value: function (E) {
                if (!this.container) return null;
                var C = this.container,
                  _ = C.getBoundingClientRect(),
                  P = QN(_),
                  k = {
                    chartX: Math.round(E.pageX - P.left),
                    chartY: Math.round(E.pageY - P.top),
                  },
                  I = _.width / C.offsetWidth || 1,
                  D = this.inRange(k.chartX, k.chartY, I);
                if (!D) return null;
                var G = this.state,
                  R = G.xAxisMap,
                  B = G.yAxisMap,
                  z = this.getTooltipEventType();
                if (z !== "axis" && R && B) {
                  var V = Fi(R).scale,
                    K = Fi(B).scale,
                    Z = V && V.invert ? V.invert(k.chartX) : null,
                    J = K && K.invert ? K.invert(k.chartY) : null;
                  return Y(Y({}, k), {}, { xValue: Z, yValue: J });
                }
                var W = QP(this.state, this.props.data, this.props.layout, D);
                return W ? Y(Y({}, k), W) : null;
              },
            },
            {
              key: "inRange",
              value: function (E, C) {
                var _ =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  P = this.props.layout,
                  k = E / _,
                  I = C / _;
                if (P === "horizontal" || P === "vertical") {
                  var D = this.state.offset,
                    G =
                      k >= D.left &&
                      k <= D.left + D.width &&
                      I >= D.top &&
                      I <= D.top + D.height;
                  return G ? { x: k, y: I } : null;
                }
                var R = this.state,
                  B = R.angleAxisMap,
                  z = R.radiusAxisMap;
                if (B && z) {
                  var V = Fi(B);
                  return vO({ x: k, y: I }, V);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var E = this.props.children,
                  C = this.getTooltipEventType(),
                  _ = Kt(E, kr),
                  P = {};
                _ &&
                  C === "axis" &&
                  (_.props.trigger === "click"
                    ? (P = { onClick: this.handleClick })
                    : (P = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var k = ql(this.props, this.handleOuterEvent);
                return Y(Y({}, k), P);
              },
            },
            {
              key: "addListener",
              value: function () {
                ay.on(oy, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                ay.removeListener(oy, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (E, C, _) {
                for (
                  var P = this.state.formattedGraphicalItems,
                    k = 0,
                    I = P.length;
                  k < I;
                  k++
                ) {
                  var D = P[k];
                  if (
                    D.item === E ||
                    D.props.key === E.key ||
                    (C === Vr(D.item.type) && _ === D.childIndex)
                  )
                    return D;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var E = this.clipPathId,
                  C = this.state.offset,
                  _ = C.left,
                  P = C.top,
                  k = C.height,
                  I = C.width;
                return F.createElement(
                  "defs",
                  null,
                  F.createElement(
                    "clipPath",
                    { id: E },
                    F.createElement("rect", { x: _, y: P, height: k, width: I })
                  )
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var E = this.state.xAxisMap;
                return E
                  ? Object.entries(E).reduce(function (C, _) {
                      var P = VP(_, 2),
                        k = P[0],
                        I = P[1];
                      return Y(Y({}, C), {}, xe({}, k, I.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var E = this.state.yAxisMap;
                return E
                  ? Object.entries(E).reduce(function (C, _) {
                      var P = VP(_, 2),
                        k = P[0],
                        I = P[1];
                      return Y(Y({}, C), {}, xe({}, k, I.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (E) {
                var C;
                return (C = this.state.xAxisMap) === null ||
                  C === void 0 ||
                  (C = C[E]) === null ||
                  C === void 0
                  ? void 0
                  : C.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (E) {
                var C;
                return (C = this.state.yAxisMap) === null ||
                  C === void 0 ||
                  (C = C[E]) === null ||
                  C === void 0
                  ? void 0
                  : C.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (E) {
                var C = this.state,
                  _ = C.formattedGraphicalItems,
                  P = C.activeItem;
                if (_ && _.length)
                  for (var k = 0, I = _.length; k < I; k++) {
                    var D = _[k],
                      G = D.props,
                      R = D.item,
                      B =
                        R.type.defaultProps !== void 0
                          ? Y(Y({}, R.type.defaultProps), R.props)
                          : R.props,
                      z = Vr(R.type);
                    if (z === "Bar") {
                      var V = (G.data || []).find(function (W) {
                        return h4(E, W);
                      });
                      if (V) return { graphicalItem: D, payload: V };
                    } else if (z === "RadialBar") {
                      var K = (G.data || []).find(function (W) {
                        return vO(E, W);
                      });
                      if (K) return { graphicalItem: D, payload: K };
                    } else if (nc(D, P) || ic(D, P) || Jo(D, P)) {
                      var Z = i8({
                          graphicalItem: D,
                          activeTooltipItem: P,
                          itemData: B.data,
                        }),
                        J = B.activeIndex === void 0 ? Z : B.activeIndex;
                      return {
                        graphicalItem: Y(Y({}, D), {}, { childIndex: J }),
                        payload: Jo(D, P) ? B.data[Z] : D.props.data[Z],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var E = this;
                if (!Ew(this)) return null;
                var C = this.props,
                  _ = C.children,
                  P = C.className,
                  k = C.width,
                  I = C.height,
                  D = C.style,
                  G = C.compact,
                  R = C.title,
                  B = C.desc,
                  z = XP(C, e5),
                  V = Re(z, !1);
                if (G)
                  return F.createElement(
                    NP,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    F.createElement(
                      dy,
                      Wi({}, V, { width: k, height: I, title: R, desc: B }),
                      this.renderClipPath(),
                      Cw(_, this.renderMap)
                    )
                  );
                if (this.props.accessibilityLayer) {
                  var K, Z;
                  (V.tabIndex =
                    (K = this.props.tabIndex) !== null && K !== void 0 ? K : 0),
                    (V.role =
                      (Z = this.props.role) !== null && Z !== void 0
                        ? Z
                        : "application"),
                    (V.onKeyDown = function (W) {
                      E.accessibilityManager.keyboardEvent(W);
                    }),
                    (V.onFocus = function () {
                      E.accessibilityManager.focus();
                    });
                }
                var J = this.parseEventsOfWrapper();
                return F.createElement(
                  NP,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  F.createElement(
                    "div",
                    Wi(
                      {
                        className: De("recharts-wrapper", P),
                        style: Y(
                          {
                            position: "relative",
                            cursor: "default",
                            width: k,
                            height: I,
                          },
                          D
                        ),
                      },
                      J,
                      {
                        ref: function (X) {
                          E.container = X;
                        },
                      }
                    ),
                    F.createElement(
                      dy,
                      Wi({}, V, {
                        width: k,
                        height: I,
                        title: R,
                        desc: B,
                        style: m5,
                      }),
                      this.renderClipPath(),
                      Cw(_, this.renderMap)
                    ),
                    this.renderLegend(),
                    this.renderTooltip()
                  )
                );
              },
            },
          ])
        );
      })(ue.Component);
    xe(S, "displayName", r),
      xe(
        S,
        "defaultProps",
        Y(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          h
        )
      ),
      xe(S, "getDerivedStateFromProps", function (b, T) {
        var A = b.dataKey,
          E = b.data,
          C = b.children,
          _ = b.width,
          P = b.height,
          k = b.layout,
          I = b.stackOffset,
          D = b.margin,
          G = T.dataStartIndex,
          R = T.dataEndIndex;
        if (T.updateId === void 0) {
          var B = ZP(b);
          return Y(
            Y(
              Y({}, B),
              {},
              { updateId: 0 },
              w(Y(Y({ props: b }, B), {}, { updateId: 0 }), T)
            ),
            {},
            {
              prevDataKey: A,
              prevData: E,
              prevWidth: _,
              prevHeight: P,
              prevLayout: k,
              prevStackOffset: I,
              prevMargin: D,
              prevChildren: C,
            }
          );
        }
        if (
          A !== T.prevDataKey ||
          E !== T.prevData ||
          _ !== T.prevWidth ||
          P !== T.prevHeight ||
          k !== T.prevLayout ||
          I !== T.prevStackOffset ||
          !Hi(D, T.prevMargin)
        ) {
          var z = ZP(b),
            V = {
              chartX: T.chartX,
              chartY: T.chartY,
              isTooltipActive: T.isTooltipActive,
            },
            K = Y(Y({}, QP(T, E, k)), {}, { updateId: T.updateId + 1 }),
            Z = Y(Y(Y({}, z), V), K);
          return Y(
            Y(Y({}, Z), w(Y({ props: b }, Z), T)),
            {},
            {
              prevDataKey: A,
              prevData: E,
              prevWidth: _,
              prevHeight: P,
              prevLayout: k,
              prevStackOffset: I,
              prevMargin: D,
              prevChildren: C,
            }
          );
        }
        if (!cy(C, T.prevChildren)) {
          var J,
            W,
            X,
            Q,
            M = Kt(C, aa),
            L =
              M &&
              (J =
                (W = M.props) === null || W === void 0
                  ? void 0
                  : W.startIndex) !== null &&
              J !== void 0
                ? J
                : G,
            oe =
              M &&
              (X =
                (Q = M.props) === null || Q === void 0
                  ? void 0
                  : Q.endIndex) !== null &&
              X !== void 0
                ? X
                : R,
            pe = L !== G || oe !== R,
            me = !$e(E),
            _e = me && !pe ? T.updateId : T.updateId + 1;
          return Y(
            Y(
              { updateId: _e },
              w(
                Y(
                  Y({ props: b }, T),
                  {},
                  { updateId: _e, dataStartIndex: L, dataEndIndex: oe }
                ),
                T
              )
            ),
            {},
            { prevChildren: C, dataStartIndex: L, dataEndIndex: oe }
          );
        }
        return null;
      }),
      xe(S, "renderActiveDot", function (b, T, A) {
        var E;
        return (
          ue.isValidElement(b)
            ? (E = ue.cloneElement(b, T))
            : Te(b)
            ? (E = b(T))
            : (E = F.createElement(mT, T)),
          F.createElement(mt, { className: "recharts-active-dot", key: A }, E)
        );
      });
    var x = ue.forwardRef(function (T, A) {
      return F.createElement(S, Wi({}, T, { ref: A }));
    });
    return (x.displayName = S.displayName), x;
  },
  T5 = E5({
    chartName: "BarChart",
    GraphicalChild: En,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: ["axis", "item"],
    axisComponents: [
      { axisType: "xAxis", AxisComp: fc },
      { axisType: "yAxis", AxisComp: dc },
    ],
    formatAxisMap: tF,
  });
class Ll {
  constructor(t, r) {
    Gn(this, "dice1");
    Gn(this, "dice2");
    Gn(this, "unfairIsFirst");
    const n = t.length,
      o = { faces: n, weights: Array(n).fill(1 / n) },
      u = t.reduce((c, f) => c + f, 0),
      l = { faces: n, weights: t.map((c) => c / u) };
    (this.unfairIsFirst = r ?? Math.random() < 0.5),
      (this.dice1 = this.unfairIsFirst ? l : o),
      (this.dice2 = this.unfairIsFirst ? o : l);
  }
  static generateRandomWeights(t) {
    return Array.from({ length: t }, () => 1 + Math.random());
  }
  rollWeighted(t) {
    const r = t.weights || Array(t.faces).fill(1 / t.faces),
      n = Math.random();
    let o = 0;
    for (let u = 0; u < r.length; u++) if (((o += r[u]), n <= o)) return u + 1;
    return r.length;
  }
  rollDice(t) {
    const r = t ? this.dice1 : this.dice2;
    return { value: this.rollWeighted(r), isFirst: t };
  }
  rollMany(t, r) {
    return Array.from({ length: t }, () => this.rollDice(r));
  }
  getExpectedProbabilities() {
    const t = 1 / this.dice1.faces;
    return {
      first: this.dice1.weights || Array(this.dice1.faces).fill(t),
      second: this.dice2.weights || Array(this.dice2.faces).fill(t),
      fairStdDev: Math.sqrt(t * (1 - t)),
    };
  }
  getFaces() {
    return this.dice1.faces;
  }
  isFirstUnfair() {
    return this.unfairIsFirst;
  }
}
const C5 = {
    title: "Dices are not fair!",
    subtitle: "Unfair dice simulation game",
    sourceCode: "Source code",
    madeWith: "Made with",
    whichDiceUnfair: "Which dice is unfair?",
    dice1: "Blue dice",
    dice2: "Green dice",
    correctGuess: "🎉 Correct! You found the unfair dice!",
    wrongGuess:
      "🤔 Hmm... Try to look better at the distribution of rolls, or roll a bit more",
    roll1: "Roll 1×",
    roll10: "10×",
    roll100: "100×",
    roll1000: "1,000×",
    roll10000: "10,000×",
    newDice: "New dice",
    clearRolls: "Clear rolls",
    distribution: "Roll distribution",
    value: "Value",
    count: "Count",
    expectedDistribution: "Expected distribution ±1σ",
    statistics: "Statistics",
    totalRolls: "Total rolls",
    dice1Rolls: "Blue dice: {0} rolls",
    dice2Rolls: "Green dice: {0} rolls",
  },
  k5 = {
    title: "Kostky nejsou fér!",
    subtitle: "Simulační hra s podvodnou kostkou",
    sourceCode: "Zdrojový kód",
    madeWith: "Vytvořeno pomocí",
    whichDiceUnfair: "Která kostka není fér?",
    dice1: "Modrá kostka",
    dice2: "Zelená kostka",
    correctGuess: "🎉 Správně! Našel jsi podvodnou kostku!",
    wrongGuess:
      "🤔 Hmm... Zkus se líp podívat na rozložení hodů, nebo házej dál",
    roll1: "Hodit 1×",
    roll10: "10×",
    roll100: "100×",
    roll1000: "1 000×",
    roll10000: "10 000×",
    newDice: "Nové kostky",
    clearRolls: "Vymazat hody",
    distribution: "Rozložení hodů",
    value: "Hodnota",
    count: "Počet",
    expectedDistribution: "Očekávané rozložení ±1σ",
    statistics: "Statistika",
    totalRolls: "Celkem hodů",
    dice1Rolls: "Modrá kostka: {0} hodů",
    dice2Rolls: "Zelená kostka: {0} hodů",
  },
  Yn = class Yn {
    constructor() {
      Gn(this, "currentLanguage");
      Gn(this, "translations", { en: C5, cs: k5 });
      const t = document.cookie.split("; ").find((r) => r.startsWith("lang="));
      this.currentLanguage = (t == null ? void 0 : t.split("=")[1]) || "en";
    }
    static getInstance() {
      return Yn.instance || (Yn.instance = new Yn()), Yn.instance;
    }
    getCurrentLanguage() {
      return this.currentLanguage;
    }
    setLanguage(t) {
      (this.currentLanguage = t),
        (document.cookie = `lang=${t};path=/;max-age=31536000`);
    }
    t(t, ...r) {
      let n = this.translations[this.currentLanguage][t];
      return (
        r.forEach((o, u) => {
          n = n.replace(`{${u}}`, o);
        }),
        n
      );
    }
  };
Gn(Yn, "instance");
let _m = Yn;
function j5() {
  var x, b, T;
  const [e] = ue.useState(() => _m.getInstance()),
    [t, r] = ue.useState(e.getCurrentLanguage()),
    [n, o] = ue.useState([]),
    [u, l] = ue.useState(() => {
      const A = Ll.generateRandomWeights(6);
      return new Ll(A);
    }),
    [c, f] = ue.useState(null),
    [p, v] = ue.useState(null);
  ue.useEffect(() => {
    document.title = e.t("title");
  }, [t, e]);
  const h = (A) => {
      e.setLanguage(A), r(A);
    },
    g = () => {
      const A = Ll.generateRandomWeights(6);
      l(new Ll(A)), o([]), v(null), f(null);
    },
    w = (A) => {
      const E = u.rollMany(A, !0),
        C = u.rollMany(A, !1);
      o((_) => [..._, ...E, ...C]);
    },
    S = ue.useMemo(() => {
      const A = u.getFaces(),
        { first: E, second: C, fairStdDev: _ } = u.getExpectedProbabilities(),
        P = new Array(A).fill(0),
        k = new Array(A).fill(0);
      n.forEach((B) => {
        B.isFirst ? P[B.value - 1]++ : k[B.value - 1]++;
      });
      const I = n.filter((B) => B.isFirst).length,
        D = n.filter((B) => !B.isFirst).length,
        G = u.isFirstUnfair() ? C : E,
        R = u.isFirstUnfair() ? D : I;
      return Array.from({ length: A }, (B, z) => ({
        face: z + 1,
        firstCount: P[z],
        secondCount: k[z],
        expectedFair: G[z] * R,
        expectedFairLower: Math.max(0, G[z] * R - _ * Math.sqrt(R)),
        expectedFairUpper: G[z] * R + _ * Math.sqrt(R),
      }));
    }, [n, u]);
  return ge.jsxs("div", {
    className: "bg-gray-100 min-h-screen flex flex-col",
    children: [
      ge.jsxs("div", {
        className: "p-4 sm:p-6 lg:p-8 mx-auto flex-grow w-full",
        children: [
          ge.jsxs("div", {
            className:
              "flex flex-col items-center md:flex-row md:justify-between w-full mb-4",
            children: [
              ge.jsxs("div", {
                className: "mb-4 md:mb-0",
                children: [
                  ge.jsx("h1", {
                    className: "text-gray-800 text-3xl",
                    children: e.t("title"),
                  }),
                  ge.jsx("p", {
                    className: "text-gray-600 text-lg mt-1",
                    children: e.t("subtitle"),
                  }),
                ],
              }),
              ge.jsxs("select", {
                value: t,
                onChange: (A) => h(A.target.value),
                className:
                  "p-2 rounded-lg border border-gray-300 bg-white cursor-pointer",
                children: [
                  ge.jsx("option", { value: "en", children: "English" }),
                  ge.jsx("option", { value: "cs", children: "Čeština" }),
                ],
              }),
            ],
          }),
          ge.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 sm:gap-6 lg:gap-8 w-full",
            children: [
              ge.jsxs("div", {
                className:
                  "bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full text-center",
                children: [
                  ge.jsx("h2", {
                    className: "text-gray-700 mt-0 mb-4 text-2xl lg:text-3xl",
                    children: e.t("whichDiceUnfair"),
                  }),
                  ge.jsxs("div", {
                    className: "flex items-center justify-center gap-4",
                    children: [
                      ge.jsx("button", {
                        onClick: () => {
                          f(1);
                          const A = u.isFirstUnfair();
                          v(A ? e.t("correctGuess") : e.t("wrongGuess"));
                        },
                        className: `px-4 py-2 text-base lg:text-lg font-bold border-2 border-[#8884d8] transition-all duration-300 ${
                          c === 1
                            ? "bg-[#8884d8] text-white"
                            : "bg-white text-[#8884d8]"
                        }`,
                        children: e.t("dice1"),
                      }),
                      ge.jsx("button", {
                        onClick: () => {
                          f(2);
                          const A = !u.isFirstUnfair();
                          v(A ? e.t("correctGuess") : e.t("wrongGuess"));
                        },
                        className: `px-4 py-2 text-base lg:text-lg font-bold border-2 border-[#82ca9d] transition-all duration-300 ${
                          c === 2
                            ? "bg-[#82ca9d] text-white"
                            : "bg-white text-[#82ca9d]"
                        }`,
                        children: e.t("dice2"),
                      }),
                    ],
                  }),
                  p &&
                    ge.jsx("p", {
                      className: `mt-2 text-lg lg:text-xl ${
                        p.includes("Správně")
                          ? "text-green-500"
                          : "text-orange-500"
                      }`,
                      children: p,
                    }),
                  ge.jsx("div", {
                    className: "mt-4",
                    children: ge.jsx("button", {
                      onClick: g,
                      className:
                        "text-blue-500 hover:text-blue-600 transition-colors duration-200 text-lg",
                      children: e.t("newDice"),
                    }),
                  }),
                ],
              }),
              ge.jsxs("div", {
                className:
                  "flex flex-wrap gap-2 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full lg:col-start-1",
                children: [
                  ge.jsx("button", {
                    onClick: () => w(1),
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200",
                    children: e.t("roll1"),
                  }),
                  ge.jsx("button", {
                    onClick: () => w(10),
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200",
                    children: e.t("roll10"),
                  }),
                  ge.jsx("button", {
                    onClick: () => w(100),
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200",
                    children: e.t("roll100"),
                  }),
                  ge.jsx("button", {
                    onClick: () => w(1e3),
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200",
                    children: e.t("roll1000"),
                  }),
                  ge.jsx("button", {
                    onClick: () => w(1e4),
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200",
                    children: e.t("roll10000"),
                  }),
                  ge.jsx("button", {
                    onClick: () => o([]),
                    className:
                      "bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200",
                    children: e.t("clearRolls"),
                  }),
                ],
              }),
              ge.jsxs("div", {
                className:
                  "bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full lg:col-start-2 lg:row-start-1 lg:row-span-3",
                children: [
                  ge.jsx("h2", {
                    className: "text-gray-700 text-xl lg:text-2xl mb-4",
                    children: e.t("distribution"),
                  }),
                  ge.jsx("div", {
                    className: "w-full h-[400px]",
                    children: ge.jsx(WN, {
                      width: "100%",
                      height: "100%",
                      children: ge.jsxs(T5, {
                        data: S,
                        margin: { top: 8, right: 0, left: 16, bottom: 0 },
                        maxBarSize: 60,
                        children: [
                          ge.jsx(fc, { dataKey: "face" }),
                          ge.jsx(dc, {
                            label: {
                              value: e.t("count"),
                              angle: -90,
                              position: "left",
                            },
                            domain: [
                              0,
                              (A) => {
                                var E;
                                if (
                                  n.length > 0 &&
                                  (E = S[0]) != null &&
                                  E.expectedFair
                                ) {
                                  const C = Math.max(
                                    A,
                                    S[0].expectedFair * 1.5
                                  );
                                  return Math.ceil(C / 10) * 10;
                                }
                                return Math.ceil(A / 10) * 10;
                              },
                            ],
                          }),
                          ge.jsx(kr, {}),
                          ge.jsx(ri, {}),
                          ge.jsx(En, {
                            dataKey: "firstCount",
                            name: e.t("dice1"),
                            fill: "#8884d8",
                          }),
                          ge.jsx(En, {
                            dataKey: "secondCount",
                            name: e.t("dice2"),
                            fill: "#82ca9d",
                          }),
                          n.length > 0 &&
                            ge.jsxs(ge.Fragment, {
                              children: [
                                ge.jsx(oc, {
                                  y:
                                    (x = S[0]) == null
                                      ? void 0
                                      : x.expectedFair,
                                  stroke: "#8884d8",
                                  strokeDasharray: "3 3",
                                }),
                                ge.jsx(hu, {
                                  y1:
                                    (b = S[0]) == null
                                      ? void 0
                                      : b.expectedFairLower,
                                  y2:
                                    (T = S[0]) == null
                                      ? void 0
                                      : T.expectedFairUpper,
                                  fill: "#8884d8",
                                  fillOpacity: 0.1,
                                  label: e.t("expectedDistribution"),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              ge.jsxs("div", {
                className:
                  "bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full lg:col-start-1",
                children: [
                  ge.jsx("h2", {
                    className: "text-gray-700 text-xl lg:text-2xl mb-4",
                    children: e.t("statistics"),
                  }),
                  ge.jsxs("p", {
                    className: "text-gray-600",
                    children: [e.t("totalRolls"), ": ", n.length],
                  }),
                  ge.jsx("p", {
                    className: "text-gray-600",
                    children: e.t(
                      "dice1Rolls",
                      n.filter((A) => A.isFirst).length.toString()
                    ),
                  }),
                  ge.jsx("p", {
                    className: "text-gray-600",
                    children: e.t(
                      "dice2Rolls",
                      n.filter((A) => !A.isFirst).length.toString()
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      ge.jsx("footer", {
        className: "bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8",
        children: ge.jsxs("div", {
          className:
            "container mx-auto text-center text-gray-600 flex flex-col sm:flex-row items-center justify-center gap-4",
          children: [
            ge.jsxs("div", {
              children: [
                e.t("madeWith"),
                " ",
                ge.jsx("a", {
                  href: "https://github.com/cline/cline",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-blue-500 hover:text-blue-600 transition-colors duration-200",
                  children: "Cline",
                }),
              ],
            }),
            ge.jsx("div", {
              children: ge.jsxs("a", {
                href: "https://github.com/tkafka/unfair-dice-simulator",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-blue-500 hover:text-blue-500 transition-colors duration-200",
                children: [e.t("sourceCode"), " →"],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
fj.createRoot(document.getElementById("root")).render(
  ge.jsx(ue.StrictMode, { children: ge.jsx(j5, {}) })
);
