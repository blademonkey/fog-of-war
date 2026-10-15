(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../opt/files/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w = /* @__PURE__ */ Symbol.for("react.suspense");
      var x = /* @__PURE__ */ Symbol.for("react.memo");
      var y2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z3 = Symbol.iterator;
      function A3(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z3 && a[z3] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B3 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D2 = {};
      function E3(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E3.prototype;
      function G2(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      var H2 = G2.prototype = new F2();
      H2.constructor = G2;
      C(H2, E3.prototype);
      H2.isPureReactComponent = true;
      var I3 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M2(a, b, e2) {
        var d, c = {}, k2 = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J2.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k2, ref: h, props: c, _owner: K2.current };
      }
      function N2(a, b) {
        return { $$typeof: l2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O3(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q2(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R3(a, b, e2, d, c) {
        var k2 = typeof a;
        if ("undefined" === k2 || "boolean" === k2) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k2) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q2(h, 0) : d, I3(c) ? (e2 = "", null != a && (e2 = a.replace(P, "$&/") + "/"), R3(c, b, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N2(c, e2 + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I3(a)) for (var g = 0; g < a.length; g++) {
          k2 = a[g];
          var f2 = d + Q2(k2, g);
          h += R3(k2, b, e2, f2, c);
        }
        else if (f2 = A3(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q2(k2, g++), h += R3(k2, b, e2, f2, c);
        else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S4(a, b, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R3(a, d, "", "", function(a2) {
          return b.call(e2, a2, c++);
        });
        return d;
      }
      function T2(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U2 = { current: null };
      var V = { transition: null };
      var W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V, ReactCurrentOwner: K2 };
      function X2() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S4, forEach: function(a, b, e2) {
        S4(a, function() {
          b.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b = 0;
        S4(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S4(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O3(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E3;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G2;
      exports.StrictMode = q2;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X2;
      exports.cloneElement = function(a, b, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k2 = b.ref, h = K2.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b) J2.call(b, f2) && !L.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k2, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M2;
      exports.createFactory = function(a) {
        var b = M2.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v2, render: a };
      };
      exports.isValidElement = O3;
      exports.lazy = function(a) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a }, _init: T2 };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X2;
      exports.useCallback = function(a, b) {
        return U2.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U2.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U2.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U2.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U2.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e2) {
        return U2.current.useImperativeHandle(a, b, e2);
      };
      exports.useInsertionEffect = function(a, b) {
        return U2.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U2.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U2.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e2) {
        return U2.current.useReducer(a, b, e2);
      };
      exports.useRef = function(a) {
        return U2.current.useRef(a);
      };
      exports.useState = function(a) {
        return U2.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e2) {
        return U2.current.useSyncExternalStore(a, b, e2);
      };
      exports.useTransition = function() {
        return U2.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // ../../opt/files/node_modules/react/index.js
  var require_react = __commonJS({
    "../../opt/files/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b)) a[d] = b, a[c] = e2, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w = e2 >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e2 && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e2 && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q2 = p.now();
        exports.unstable_now = function() {
          return p.now() - q2;
        };
      }
      var l2;
      var p;
      var q2;
      var r = [];
      var t = [];
      var u = 1;
      var v2 = null;
      var y2 = 3;
      var z3 = false;
      var A3 = false;
      var B3 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k2(t);
          else if (b.startTime <= a) k2(t), b.sortIndex = b.expirationTime, f2(r, b);
          else break;
          b = h(t);
        }
      }
      function H2(a) {
        B3 = false;
        G2(a);
        if (!A3) if (null !== h(r)) A3 = true, I3(J2);
        else {
          var b = h(t);
          null !== b && K2(H2, b.startTime - a);
        }
      }
      function J2(a, b) {
        A3 = false;
        B3 && (B3 = false, E3(L), L = -1);
        z3 = true;
        var c = y2;
        try {
          G2(b);
          for (v2 = h(r); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d(v2.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h(r) && k2(r);
              G2(b);
            } else k2(r);
            v2 = h(r);
          }
          if (null !== v2) var w = true;
          else {
            var m = h(t);
            null !== m && K2(H2, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v2 = null, y2 = c, z3 = false;
        }
      }
      var N2 = false;
      var O3 = null;
      var L = -1;
      var P = 5;
      var Q2 = -1;
      function M2() {
        return exports.unstable_now() - Q2 < P ? false : true;
      }
      function R3() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O3(true, a);
          } finally {
            b ? S4() : (N2 = false, O3 = null);
          }
        } else N2 = false;
      }
      var S4;
      if ("function" === typeof F2) S4 = function() {
        F2(R3);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R3;
        S4 = function() {
          U2.postMessage(null);
        };
      } else S4 = function() {
        D2(R3, 0);
      };
      var T2;
      var U2;
      function I3(a) {
        O3 = a;
        N2 || (N2 = true, S4());
      }
      function K2(a, b) {
        L = D2(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A3 || z3 || (A3 = true, I3(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c = y2;
        y2 = b;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y2;
        y2 = a;
        try {
          return b();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h(r) && a === h(t) && (B3 ? (E3(L), L = -1) : B3 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r, a), A3 || z3 || (A3 = true, I3(J2)));
        return a;
      };
      exports.unstable_shouldYield = M2;
      exports.unstable_wrapCallback = function(a) {
        var b = y2;
        return function() {
          var c = y2;
          y2 = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    }
  });

  // ../../opt/files/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../opt/files/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea2[a] = b;
        for (a = 0; a < b.length; a++) da2.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja2 = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma2 = {};
      function oa2(a) {
        if (ja2.call(ma2, a)) return true;
        if (ja2.call(la2, a)) return false;
        if (ka2.test(a)) return ma2[a] = true;
        la2[a] = true;
        return false;
      }
      function pa2(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa2(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v2(a, b, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z3[b] = new v2(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus auto
