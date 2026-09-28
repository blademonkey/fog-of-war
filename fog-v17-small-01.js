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
      var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
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
      var C2 = Object.assign;
      var D = {};
      function E3(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D;
        this.updater = e2 || B3;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b2) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b2, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E3.prototype;
      function G2(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D;
        this.updater = e2 || B3;
      }
      var H = G2.prototype = new F2();
      H.constructor = G2;
      C2(H, E3.prototype);
      H.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M3(a, b2, e2) {
        var d, c = {}, k2 = null, h = null;
        if (null != b2) for (d in void 0 !== b2.ref && (h = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J2.call(b2, d) && !L2.hasOwnProperty(d) && (c[d] = b2[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k2, ref: h, props: c, _owner: K2.current };
      }
      function N2(a, b2) {
        return { $$typeof: l2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O3(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b2 = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b2[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b2) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
      }
      function R3(a, b2, e2, d, c) {
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
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I2(c) ? (e2 = "", null != a && (e2 = a.replace(P, "$&/") + "/"), R3(c, b2, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N2(c, e2 + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b2.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a)) for (var g = 0; g < a.length; g++) {
          k2 = a[g];
          var f2 = d + Q(k2, g);
          h += R3(k2, b2, e2, f2, c);
        }
        else if (f2 = A3(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q(k2, g++), h += R3(k2, b2, e2, f2, c);
        else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S2(a, b2, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R3(a, d, "", "", function(a2) {
          return b2.call(e2, a2, c++);
        });
        return d;
      }
      function T2(a) {
        if (-1 === a._status) {
          var b2 = a._result;
          b2 = b2();
          b2.then(function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
          }, function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
          });
          -1 === a._status && (a._status = 0, a._result = b2);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V2 = { transition: null };
      var W2 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
      function X2() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S2, forEach: function(a, b2, e2) {
        S2(a, function() {
          b2.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b2 = 0;
        S2(a, function() {
          b2++;
        });
        return b2;
      }, toArray: function(a) {
        return S2(a, function(a2) {
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
      exports.StrictMode = q;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X2;
      exports.cloneElement = function(a, b2, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C2({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
        if (null != b2) {
          void 0 !== b2.ref && (k2 = b2.ref, h = K2.current);
          void 0 !== b2.key && (c = "" + b2.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b2) J2.call(b2, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
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
      exports.createElement = M3;
      exports.createFactory = function(a) {
        var b2 = M3.bind(null, a);
        b2.type = a;
        return b2;
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
      exports.memo = function(a, b2) {
        return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
      };
      exports.startTransition = function(a) {
        var b2 = V2.transition;
        V2.transition = {};
        try {
          a();
        } finally {
          V2.transition = b2;
        }
      };
      exports.unstable_act = X2;
      exports.useCallback = function(a, b2) {
        return U3.current.useCallback(a, b2);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b2) {
        return U3.current.useEffect(a, b2);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b2, e2) {
        return U3.current.useImperativeHandle(a, b2, e2);
      };
      exports.useInsertionEffect = function(a, b2) {
        return U3.current.useInsertionEffect(a, b2);
      };
      exports.useLayoutEffect = function(a, b2) {
        return U3.current.useLayoutEffect(a, b2);
      };
      exports.useMemo = function(a, b2) {
        return U3.current.useMemo(a, b2);
      };
      exports.useReducer = function(a, b2, e2) {
        return U3.current.useReducer(a, b2, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b2, e2) {
        return U3.current.useSyncExternalStore(a, b2, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
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
      function f2(a, b2) {
        var c = a.length;
        a.push(b2);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b2)) a[d] = b2, a[c] = e2, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c = a.pop();
        if (c !== b2) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C2 = a[m], n = m + 1, x = a[n];
            if (0 > g(C2, c)) n < e2 && 0 > g(x, C2) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C2, a[m] = c, d = m);
            else if (n < e2 && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b2;
      }
      function g(a, b2) {
        var c = a.sortIndex - b2.sortIndex;
        return 0 !== c ? c : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l2;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v2 = null;
      var y2 = 3;
      var z3 = false;
      var A3 = false;
      var B3 = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b2 = h(t); null !== b2; ) {
          if (null === b2.callback) k2(t);
          else if (b2.startTime <= a) k2(t), b2.sortIndex = b2.expirationTime, f2(r, b2);
          else break;
          b2 = h(t);
        }
      }
      function H(a) {
        B3 = false;
        G2(a);
        if (!A3) if (null !== h(r)) A3 = true, I2(J2);
        else {
          var b2 = h(t);
          null !== b2 && K2(H, b2.startTime - a);
        }
      }
      function J2(a, b2) {
        A3 = false;
        B3 && (B3 = false, E3(L2), L2 = -1);
        z3 = true;
        var c = y2;
        try {
          G2(b2);
          for (v2 = h(r); null !== v2 && (!(v2.expirationTime > b2) || a && !M3()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d(v2.expirationTime <= b2);
              b2 = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h(r) && k2(r);
              G2(b2);
            } else k2(r);
            v2 = h(r);
          }
          if (null !== v2) var w2 = true;
          else {
            var m = h(t);
            null !== m && K2(H, m.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z3 = false;
        }
      }
      var N2 = false;
      var O3 = null;
      var L2 = -1;
      var P = 5;
      var Q = -1;
      function M3() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R3() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q = a;
          var b2 = true;
          try {
            b2 = O3(true, a);
          } finally {
            b2 ? S2() : (N2 = false, O3 = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F2) S2 = function() {
        F2(R3);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U3 = T2.port2;
        T2.port1.onmessage = R3;
        S2 = function() {
          U3.postMessage(null);
        };
      } else S2 = function() {
        D(R3, 0);
      };
      var T2;
      var U3;
      function I2(a) {
        O3 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b2) {
        L2 = D(function() {
          a(exports.unstable_now());
        }, b2);
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
        A3 || z3 || (A3 = true, I2(J2));
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
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c = y2;
        y2 = b2;
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
      exports.unstable_runWithPriority = function(a, b2) {
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
          return b2();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b2, c) {
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
        a = { id: u++, callback: b2, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h(r) && a === h(t) && (B3 ? (E3(L2), L2 = -1) : B3 = true, K2(H, c - d))) : (a.sortIndex = e2, f2(r, a), A3 || z3 || (A3 = true, I2(J2)));
        return a;
      };
      exports.unstable_shouldYield = M3;
      exports.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c = y2;
          y2 = b2;
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
      var ca = require_scheduler();
      function p(a) {
        for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b2 += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b2) {
        ha2(a, b2);
        ha2(a + "Capture", b2);
      }
      function ha2(a, b2) {
        ea2[a] = b2;
        for (a = 0; a < b2.length; a++) da2.add(b2[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja2 = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma = {};
      function oa2(a) {
        if (ja2.call(ma, a)) return true;
        if (ja2.call(la2, a)) return false;
        if (ka2.test(a)) return ma[a] = true;
        la2[a] = true;
        return false;
      }
      function pa(a, b2, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b2) {
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
      function qa(a, b2, c, d) {
        if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
        return false;
      }
      function v2(a, b2, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b2;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b2 = a[0];
        z3[b2] = new v2(b2, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z3[a] = new v2(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z3[a] = new v2(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z3[a] = new v2(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z3[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
      });
