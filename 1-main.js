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
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
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
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x2 = /* @__PURE__ */ Symbol.for("react.memo");
      var y3 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z2 = Symbol.iterator;
      function A2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z2 && a[z2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B3 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
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
      function F3() {
      }
      F3.prototype = E3.prototype;
      function G2(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D;
        this.updater = e2 || B3;
      }
      var H2 = G2.prototype = new F3();
      H2.constructor = G2;
      C(H2, E3.prototype);
      H2.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M3(a, b2, e2) {
        var d, c = {}, k3 = null, h2 = null;
        if (null != b2) for (d in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k3 = "" + b2.key), b2) J2.call(b2, d) && !L.hasOwnProperty(d) && (c[d] = b2[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k3, ref: h2, props: c, _owner: K2.current };
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
      function R2(a, b2, e2, d, c) {
        var k3 = typeof a;
        if ("undefined" === k3 || "boolean" === k3) a = null;
        var h2 = false;
        if (null === a) h2 = true;
        else switch (k3) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h2 = true;
            }
        }
        if (h2) return h2 = a, c = c(h2), a = "" === d ? "." + Q(h2, 0) : d, I2(c) ? (e2 = "", null != a && (e2 = a.replace(P, "$&/") + "/"), R2(c, b2, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N2(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b2.push(c)), 1;
        h2 = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a)) for (var g = 0; g < a.length; g++) {
          k3 = a[g];
          var f2 = d + Q(k3, g);
          h2 += R2(k3, b2, e2, f2, c);
        }
        else if (f2 = A2(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k3 = a.next()).done; ) k3 = k3.value, f2 = d + Q(k3, g++), h2 += R2(k3, b2, e2, f2, c);
        else if ("object" === k3) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
        return h2;
      }
      function S3(a, b2, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R2(a, d, "", "", function(a2) {
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
      var V = { transition: null };
      var W2 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V, ReactCurrentOwner: K2 };
      function X2() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S3, forEach: function(a, b2, e2) {
        S3(a, function() {
          b2.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b2 = 0;
        S3(a, function() {
          b2++;
        });
        return b2;
      }, toArray: function(a) {
        return S3(a, function(a2) {
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
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X2;
      exports.cloneElement = function(a, b2, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k3 = a.ref, h2 = a._owner;
        if (null != b2) {
          void 0 !== b2.ref && (k3 = b2.ref, h2 = K2.current);
          void 0 !== b2.key && (c = "" + b2.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b2) J2.call(b2, f2) && !L.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k3, props: d, _owner: h2 };
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
        return { $$typeof: y3, _payload: { _status: -1, _result: a }, _init: T2 };
      };
      exports.memo = function(a, b2) {
        return { $$typeof: x2, type: a, compare: void 0 === b2 ? null : b2 };
      };
      exports.startTransition = function(a) {
        var b2 = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b2;
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
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k3(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c = a.pop();
        if (c !== b2) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x2 = a[n];
            if (0 > g(C, c)) n < e2 && 0 > g(x2, C) ? (a[d] = x2, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e2 && 0 > g(x2, c)) a[d] = x2, a[n] = c, d = n;
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
      var y3 = 3;
      var z2 = false;
      var A2 = false;
      var B3 = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F3 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b2 = h2(t); null !== b2; ) {
          if (null === b2.callback) k3(t);
          else if (b2.startTime <= a) k3(t), b2.sortIndex = b2.expirationTime, f2(r, b2);
          else break;
          b2 = h2(t);
        }
      }
      function H2(a) {
        B3 = false;
        G2(a);
        if (!A2) if (null !== h2(r)) A2 = true, I2(J2);
        else {
          var b2 = h2(t);
          null !== b2 && K2(H2, b2.startTime - a);
        }
      }
      function J2(a, b2) {
        A2 = false;
        B3 && (B3 = false, E3(L), L = -1);
        z2 = true;
        var c = y3;
        try {
          G2(b2);
          for (v2 = h2(r); null !== v2 && (!(v2.expirationTime > b2) || a && !M3()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y3 = v2.priorityLevel;
              var e2 = d(v2.expirationTime <= b2);
              b2 = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r) && k3(r);
              G2(b2);
            } else k3(r);
            v2 = h2(r);
          }
          if (null !== v2) var w2 = true;
          else {
            var m = h2(t);
            null !== m && K2(H2, m.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y3 = c, z2 = false;
        }
      }
      var N2 = false;
      var O3 = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M3() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R2() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q = a;
          var b2 = true;
          try {
            b2 = O3(true, a);
          } finally {
            b2 ? S3() : (N2 = false, O3 = null);
          }
        } else N2 = false;
      }
      var S3;
      if ("function" === typeof F3) S3 = function() {
        F3(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U3 = T2.port2;
        T2.port1.onmessage = R2;
        S3 = function() {
          U3.postMessage(null);
        };
      } else S3 = function() {
        D(R2, 0);
      };
      var T2;
      var U3;
      function I2(a) {
        O3 = a;
        N2 || (N2 = true, S3());
      }
      function K2(a, b2) {
        L = D(function() {
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
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y3;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h2(r);
      };
      exports.unstable_next = function(a) {
        switch (y3) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y3;
        }
        var c = y3;
        y3 = b2;
        try {
          return a();
        } finally {
          y3 = c;
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
        var c = y3;
        y3 = a;
        try {
          return b2();
        } finally {
          y3 = c;
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
        c > d ? (a.sortIndex = c, f2(t, a), null === h2(r) && a === h2(t) && (B3 ? (E3(L), L = -1) : B3 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports.unstable_shouldYield = M3;
      exports.unstable_wrapCallback = function(a) {
        var b2 = y3;
        return function() {
          var c = y3;
          y3 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y3 = c;
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
      var aa = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b2 += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa(a, b2) {
        ha(a, b2);
        ha(a + "Capture", b2);
      }
      function ha(a, b2) {
        ea2[a] = b2;
        for (a = 0; a < b2.length; a++) da.add(b2[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja2 = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja2.call(ma, a)) return true;
        if (ja2.call(la, a)) return false;
        if (ka2.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa2(a, b2, c, d) {
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
      function qa2(a, b2, c, d) {
        if (null === b2 || "undefined" === typeof b2 || pa2(a, b2, c, d)) return true;
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
      var z2 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z2[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b2 = a[0];
        z2[b2] = new v2(b2, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z2[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z2[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z2[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z2[a] = new v2(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z2[a] = new v2(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z2[a] = new v2(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z2[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b2 = a.replace(
          ra,
          sa2
        );
        z2[b2] = new v2(b2, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b2 = a.replace(ra, sa2);
        z2[b2] = new v2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b2 = a.replace(ra, sa2);
        z2[b2] = new v2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z2[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z2[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b2, c, d) {
        var e2 = z2.hasOwnProperty(b2) ? z2[b2] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa2(b2, c, e2, d) && (c = null), d || null === e2 ? oa(b2) && (null === c ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b2 = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b2) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b2, c) : a.setAttribute(b2, c)));
      }
      var ua2 = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A2 = Object.assign;
      var La2;
      function Ma2(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b2 = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b2 && b2[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa2(a, b2) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b2) if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b2);
          } else {
            try {
              b2.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b2.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; ) h2--;
            for (; 1 <= g && 0 <= h2; g--, h2--) if (e2[g] !== f2[h2]) {
              if (1 !== g || 1 !== h2) {
                do
                  if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                    var k3 = "\n" + e2[g].replace(" at new ", " at ");
                    a.displayName && k3.includes("<anonymous>") && (k3 = k3.replace("<anonymous>", a.displayName));
                    return k3;
                  }
                while (1 <= g && 0 <= h2);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma2(a) : "";
      }
      function Pa2(a) {
        switch (a.tag) {
          case 5:
            return Ma2(a.type);
          case 16:
            return Ma2("Lazy");
          case 13:
            return Ma2("Suspense");
          case 19:
            return Ma2("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa2(a.type, false), a;
          case 11:
            return a = Oa2(a.type.render, false), a;
          case 1:
            return a = Oa2(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b2 = a.render;
            a = a.displayName;
            a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
          case Ha2:
            b2 = a._payload;
            a = a._init;
            try {
              return Qa(a(b2));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra2(a) {
        var b2 = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b2.displayName || "Context") + ".Consumer";
          case 10:
            return (b2._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b2;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b2);
          case 8:
            return b2 === za ? "StrictMode" : "Mode";
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
            if ("function" === typeof b2) return b2.displayName || b2.name || null;
            if ("string" === typeof b2) return b2;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b2 = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
      }
      function Ua2(a) {
        var b2 = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
        if (!a.hasOwnProperty(b2) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b2, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b2, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b2];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b2 = a._valueTracker;
        if (!b2) return true;
        var c = b2.getValue();
        var d = "";
        a && (d = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b2.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b2) {
          return a.body;
        }
      }
      function Ya2(a, b2) {
        var c = b2.checked;
        return A2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za2(a, b2) {
        var c = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
        c = Sa2(null != b2.value ? b2.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
      }
      function ab(a, b2) {
        b2 = b2.checked;
        null != b2 && ta(a, "checked", b2, false);
      }
      function bb(a, b2) {
        ab(a, b2);
        var c = Sa2(b2.value), d = b2.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b2.hasOwnProperty("value") ? cb(a, b2.type, c) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa2(b2.defaultValue));
        null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
      }
      function db(a, b2, c) {
        if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
          var d = b2.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
          b2 = "" + a._wrapperState.initialValue;
          c || b2 === a.value || (a.value = b2);
          a.defaultValue = b2;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b2, c) {
        if ("number" !== b2 || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b2, c, d) {
        a = a.options;
        if (b2) {
          b2 = {};
          for (var e2 = 0; e2 < c.length; e2++) b2["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b2.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b2 = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b2 || a[e2].disabled || (b2 = a[e2]);
          }
          null !== b2 && (b2.selected = true);
        }
      }
      function gb(a, b2) {
        if (null != b2.dangerouslySetInnerHTML) throw Error(p(91));
        return A2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b2) {
        var c = b2.value;
        if (null == c) {
          c = b2.children;
          b2 = b2.defaultValue;
          if (null != c) {
            if (null != b2) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b2 = c;
          }
          null == b2 && (b2 = "");
          c = b2;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b2) {
        var c = Sa2(b2.value), d = Sa2(b2.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b2.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b2 = a.textContent;
        b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b2) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b2, c, d, e2);
          });
        } : a;
      })(function(a, b2) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
          for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b2.firstChild; ) a.appendChild(b2.firstChild);
        }
      });
      function ob(a, b2) {
        if (b2) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b2;
            return;
          }
        }
        a.textContent = b2;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b2) {
          b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b2] = pb[a];
        });
      });
      function rb(a, b2, c) {
        return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
      }
      function sb(a, b2) {
        a = a.style;
        for (var c in b2) if (b2.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b2[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b2) {
        if (b2) {
          if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b2.dangerouslySetInnerHTML) {
            if (null != b2.children) throw Error(p(60));
            if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b2.style && "object" !== typeof b2.style) throw Error(p(62));
        }
      }
      function vb(a, b2) {
        if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b2 = a.stateNode;
          b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b2 = Ab;
          Ab = zb = null;
          Bb(a);
          if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
        }
      }
      function Gb(a, b2) {
        return a(b2);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b2, c) {
        if (Ib) return a(b2, c);
        Ib = true;
        try {
          return Gb(a, b2, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b2) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b2];
        a: switch (b2) {
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
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b2, typeof c));
        return c;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b2, c, d, e2, f2, g, h2, k3) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b2.apply(c, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b2, c, d, e2, f2, g, h2, k3) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b2, c, d, e2, f2, g, h2, k3) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b2 = a, c = a;
        if (a.alternate) for (; b2.return; ) b2 = b2.return;
        else {
          a = b2;
          do
            b2 = a, 0 !== (b2.flags & 4098) && (c = b2.return), a = b2.return;
          while (a);
        }
        return 3 === b2.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b2 = a.memoizedState;
          null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
          if (null !== b2) return b2.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b2 = a.alternate;
        if (!b2) {
          b2 = Vb(a);
          if (null === b2) throw Error(p(188));
          return b2 !== a ? null : a;
        }
        for (var c = a, d = b2; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b2;
              f2 = f2.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g = false, h2 = e2.child; h2; ) {
              if (h2 === c) {
                g = true;
                c = e2;
                d = f2;
                break;
              }
              if (h2 === d) {
                g = true;
                d = e2;
                c = f2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g) {
              for (h2 = f2.child; h2; ) {
                if (h2 === c) {
                  g = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h2 === d) {
                  g = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b2;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b2 = $b(a);
          if (null !== b2) return b2;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca2.unstable_scheduleCallback;
      var bc = ca2.unstable_cancelCallback;
      var cc = ca2.unstable_shouldYield;
      var dc = ca2.unstable_requestPaint;
      var B3 = ca2.unstable_now;
      var ec = ca2.unstable_getCurrentPriorityLevel;
      var fc = ca2.unstable_ImmediatePriority;
      var gc = ca2.unstable_UserBlockingPriority;
      var hc = ca2.unstable_NormalPriority;
      var ic = ca2.unstable_LowPriority;
      var jc = ca2.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b2) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
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
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b2) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h2 = g & ~e2;
          0 !== h2 ? d = tc(h2) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
        } else g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b2 && b2 !== d && 0 === (b2 & e2) && (e2 = d & -d, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
        0 !== (d & 4) && (d |= c & 16);
        b2 = a.entangledLanes;
        if (0 !== b2) for (a = a.entanglements, b2 &= d; 0 < b2; ) c = 31 - oc(b2), e2 = 1 << c, d |= a[c], b2 &= ~e2;
        return d;
      }
      function vc(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b2 + 250;
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
            return b2 + 5e3;
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
      function wc(a, b2) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g = 31 - oc(f2), h2 = 1 << g, k3 = e2[g];
          if (-1 === k3) {
            if (0 === (h2 & c) || 0 !== (h2 & d)) e2[g] = vc(h2, b2);
          } else k3 <= b2 && (a.expiredLanes |= h2);
          f2 &= ~h2;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b2 = [], c = 0; 31 > c; c++) b2.push(a);
        return b2;
      }
      function Ac(a, b2, c) {
        a.pendingLanes |= b2;
        536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b2 = 31 - oc(b2);
        a[b2] = c;
      }
      function Bc(a, b2) {
        var c = a.pendingLanes & ~b2;
        a.pendingLanes = b2;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b2;
        a.mutableReadLanes &= b2;
        a.entangledLanes &= b2;
        b2 = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc(c), f2 = 1 << e2;
          b2[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc(a, b2) {
        var c = a.entangledLanes |= b2;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e2 = 1 << d;
          e2 & b2 | a[d] & b2 && (a[d] |= b2);
          c &= ~e2;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b2) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b2.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b2.pointerId);
        }
      }
      function Tc(a, b2, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
        a.eventSystemFlags |= d;
        b2 = a.targetContainers;
        null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
        return a;
      }
      function Uc(a, b2, c, d, e2) {
        switch (b2) {
          case "focusin":
            return Lc = Tc(Lc, a, b2, c, d, e2), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b2, c, d, e2), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b2, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c, d, e2)), true;
        }
        return false;
      }
      function Vc(a) {
        var b2 = Wc(a.target);
        if (null !== b2) {
          var c = Vb(b2);
          if (null !== c) {
            if (b2 = c.tag, 13 === b2) {
              if (b2 = Wb(c), null !== b2) {
                a.blockedOn = b2;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b2 && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b2 = a.targetContainers; 0 < b2.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b2 = Cb(c), null !== b2 && Fc(b2), a.blockedOn = c, false;
          b2.shift();
        }
        return true;
      }
      function Zc(a, b2, c) {
        Xc(a) && c.delete(b2);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b2) {
        a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca2.unstable_scheduleCallback(ca2.unstable_NormalPriority, $c)));
      }
      function bd2(a) {
        function b2(b3) {
          return ad(b3, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b2);
        Pc.forEach(b2);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd2 = ua2.ReactCurrentBatchConfig;
      var dd = true;
      function ed2(a, b2, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 1, fd(a, b2, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function gd2(a, b2, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 4, fd(a, b2, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function fd(a, b2, c, d) {
        if (dd) {
          var e2 = Yc(a, b2, c, d);
          if (null === e2) hd2(a, b2, d, id2, c), Sc(a, d);
          else if (Uc(e2, a, b2, c, d)) d.stopPropagation();
          else if (Sc(a, d), b2 & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec(f2);
              f2 = Yc(a, b2, c, d);
              null === f2 && hd2(a, b2, d, id2, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd2(a, b2, d, null, c);
        }
      }
      var id2 = null;
      function Yc(a, b2, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b2 = Vb(a), null === b2) a = null;
        else if (c = b2.tag, 13 === c) {
          a = Wb(b2);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a = null;
        } else b2 !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
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
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md2 = null;
      function nd2() {
        if (md2) return md2;
        var a, b2 = ld, c = b2.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
        for (a = 0; a < c && b2[a] === e2[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b2[c - d] === e2[f2 - d]; d++) ;
        return md2 = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b2 = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b2(b3, d, e2, f2, g) {
          this._reactName = b3;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b3 = a[c], this[c] = b3 ? b3(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd2 : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b2.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b2;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A2({}, sd, { view: 0, detail: 0 });
      var vd2 = rd(ud);
      var wd;
      var xd2;
      var yd;
      var Ad2 = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd2, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd2 = a.screenY - yd.screenY) : xd2 = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd2;
      } });
      var Bd2 = rd(Ad2);
      var Cd2 = A2({}, Ad2, { dataTransfer: 0 });
      var Dd2 = rd(Cd2);
      var Ed = A2({}, ud, { relatedTarget: 0 });
      var Fd2 = rd(Ed);
      var Gd2 = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd2);
      var Id2 = A2({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id2);
      var Kd = A2({}, sd, { data: 0 });
      var Ld2 = rd(Kd);
      var Md2 = {
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
        MozPrintableKey: "Unidentified"
      };
      var Nd2 = {
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
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd2(a) {
        var b2 = this.nativeEvent;
        return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
      }
      function zd2() {
        return Pd2;
      }
      var Qd = A2({}, ud, { key: function(a) {
        if (a.key) {
          var b2 = Md2[a.key] || a.key;
          if ("Unidentified" !== b2) return b2;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd2[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd2, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd2 = rd(Qd);
      var Sd2 = A2({}, Ad2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd2);
      var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd2 });
      var Vd2 = rd(Ud);
      var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A2({}, Ad2, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae3 = ia && "CompositionEvent" in window;
      var be3 = null;
      ia && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia && "TextEvent" in window && !be3;
      var de3 = ia && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee3 = String.fromCharCode(32);
      var fe3 = false;
      function ge3(a, b2) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b2.keyCode);
          case "keydown":
            return 229 !== b2.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he3(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie3 = false;
      function je3(a, b2) {
        switch (a) {
          case "compositionend":
            return he3(b2);
          case "keypress":
            if (32 !== b2.which) return null;
            fe3 = true;
            return ee3;
          case "textInput":
            return a = b2.data, a === ee3 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b2) {
        if (ie3) return "compositionend" === a || !ae3 && ge3(a, b2) ? (a = nd2(), md2 = ld = kd = null, ie3 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
              if (b2.char && 1 < b2.char.length) return b2.char;
              if (b2.which) return String.fromCharCode(b2.which);
            }
            return null;
          case "compositionend":
            return de3 && "ko" !== b2.locale ? null : b2.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b2 ? !!le3[a.type] : "textarea" === b2 ? true : false;
      }
      function ne2(a, b2, c, d) {
        Eb(d);
        b2 = oe2(b2, "onChange");
        0 < b2.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b2 }));
      }
      var pe3 = null;
      var qe2 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b2 = ue3(a);
        if (Wa(b2)) return a;
      }
      function ve3(a, b2) {
        if ("change" === a) return b2;
      }
      var we3 = false;
      if (ia) {
        if (ia) {
          ye3 = "oninput" in document;
          if (!ye3) {
            ze3 = document.createElement("div");
            ze3.setAttribute("oninput", "return;");
            ye3 = "function" === typeof ze3.oninput;
          }
          xe2 = ye3;
        } else xe2 = false;
        we3 = xe2 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe2;
      var ye3;
      var ze3;
      function Ae3() {
        pe3 && (pe3.detachEvent("onpropertychange", Be2), qe2 = pe3 = null);
      }
      function Be2(a) {
        if ("value" === a.propertyName && te3(qe2)) {
          var b2 = [];
          ne2(b2, qe2, a, xb(a));
          Jb(re3, b2);
        }
      }
      function Ce2(a, b2, c) {
        "focusin" === a ? (Ae3(), pe3 = b2, qe2 = c, pe3.attachEvent("onpropertychange", Be2)) : "focusout" === a && Ae3();
      }
      function De3(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe2);
      }
      function Ee2(a, b2) {
        if ("click" === a) return te3(b2);
      }
      function Fe2(a, b2) {
        if ("input" === a || "change" === a) return te3(b2);
      }
      function Ge3(a, b2) {
        return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge3;
      function Ie2(a, b2) {
        if (He3(a, b2)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
        var c = Object.keys(a), d = Object.keys(b2);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja2.call(b2, e2) || !He3(a[e2], b2[e2])) return false;
        }
        return true;
      }
      function Je3(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke3(a, b2) {
        var c = Je3(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b2 && d >= b2) return { node: c, offset: b2 - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je3(c);
        }
      }
      function Le3(a, b2) {
        return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le3(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
      }
      function Me3() {
        for (var a = window, b2 = Xa2(); b2 instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b2.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b2.contentWindow;
          else break;
          b2 = Xa2(a.document);
        }
        return b2;
      }
      function Ne3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b2 = Me3(), c = a.focusedElem, d = a.selectionRange;
        if (b2 !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c) c.selectionStart = b2, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b2 = c.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke3(c, f2);
              var g = Ke3(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a.addRange(b2)));
            }
          }
          b2 = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b2.length; c++) a = b2[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe3 = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe3 = null;
      var Re3 = null;
      var Se2 = null;
      var Te2 = false;
      function Ue3(a, b2, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te2 || null == Qe3 || Qe3 !== Xa2(d) || (d = Qe3, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se2 && Ie2(Se2, d) || (Se2 = d, d = oe2(Re3, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c), a.push({ event: b2, listeners: d }), b2.target = Qe3)));
      }
      function Ve3(a, b2) {
        var c = {};
        c[a.toLowerCase()] = b2.toLowerCase();
        c["Webkit" + a] = "webkit" + b2;
        c["Moz" + a] = "moz" + b2;
        return c;
      }
      var We2 = { animationend: Ve3("Animation", "AnimationEnd"), animationiteration: Ve3("Animation", "AnimationIteration"), animationstart: Ve3("Animation", "AnimationStart"), transitionend: Ve3("Transition", "TransitionEnd") };
      var Xe3 = {};
      var Ye3 = {};
      ia && (Ye3 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
      function Ze3(a) {
        if (Xe3[a]) return Xe3[a];
        if (!We2[a]) return a;
        var b2 = We2[a], c;
        for (c in b2) if (b2.hasOwnProperty(c) && c in Ye3) return Xe3[a] = b2[c];
        return a;
      }
      var $e3 = Ze3("animationend");
      var af = Ze3("animationiteration");
      var bf = Ze3("animationstart");
      var cf = Ze3("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b2) {
        df.set(a, b2);
        fa(b2, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e3, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b2, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b2, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b2) {
        b2 = 0 !== (b2 & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b2) for (var g = d.length - 1; 0 <= g; g--) {
              var h2 = d[g], k3 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
            else for (g = 0; g < d.length; g++) {
              h2 = d[g];
              k3 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b2) {
        var c = b2[of];
        void 0 === c && (c = b2[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b2, a, 2, false), c.add(d));
      }
      function qf(a, b2, c) {
        var d = 0;
        b2 && (d |= 4);
        pf(c, a, d, b2);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b3) {
            "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
          });
          var b2 = 9 === a.nodeType ? a : a.ownerDocument;
          null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
        }
      }
      function pf(a, b2, c, d) {
        switch (jd(b2)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd;
        }
        c = e2.bind(null, b2, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b2, c, { capture: true, passive: e2 }) : a.addEventListener(b2, c, true) : void 0 !== e2 ? a.addEventListener(b2, c, { passive: e2 }) : a.addEventListener(b2, c, false);
      }
      function hd2(a, b2, c, d, e2) {
        var f2 = d;
        if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h2 = d.stateNode.containerInfo;
            if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k3 = g.tag;
              if (3 === k3 || 4 === k3) {
                if (k3 = g.stateNode.containerInfo, k3 === e2 || 8 === k3.nodeType && k3.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h2; ) {
              g = Wc(h2);
              if (null === g) return;
              k3 = g.tag;
              if (5 === k3 || 6 === k3) {
                d = f2 = g;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h3 = df.get(a);
            if (void 0 !== h3) {
              var k4 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k4 = Rd2;
                  break;
                case "focusin":
                  n = "focus";
                  k4 = Fd2;
                  break;
                case "focusout":
                  n = "blur";
                  k4 = Fd2;
                  break;
                case "beforeblur":
                case "afterblur":
                  k4 = Fd2;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k4 = Bd2;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k4 = Dd2;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k4 = Vd2;
                  break;
                case $e3:
                case af:
                case bf:
                  k4 = Hd;
                  break;
                case cf:
                  k4 = Xd;
                  break;
                case "scroll":
                  k4 = vd2;
                  break;
                case "wheel":
                  k4 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k4 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k4 = Td;
              }
              var t = 0 !== (b2 & 4), J2 = !t && "scroll" === a, x2 = t ? null !== h3 ? h3 + "Capture" : null : h3;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F3 = u.stateNode;
                5 === u.tag && null !== F3 && (u = F3, null !== x2 && (F3 = Kb(w2, x2), null != F3 && t.push(tf(w2, F3, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h3 = new k4(h3, n, null, c, e3), g2.push({ event: h3, listeners: t }));
            }
          }
          if (0 === (b2 & 7)) {
            a: {
              h3 = "mouseover" === a || "pointerover" === a;
              k4 = "mouseout" === a || "pointerout" === a;
              if (h3 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k4 || h3) {
                h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
                if (k4) {
                  if (n = c.relatedTarget || c.toElement, k4 = d2, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k4 = null, n = d2;
                if (k4 !== n) {
                  t = Bd2;
                  F3 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F3 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                  J2 = null == k4 ? h3 : ue3(k4);
                  u = null == n ? h3 : ue3(n);
                  h3 = new t(F3, w2 + "leave", k4, c, e3);
                  h3.target = J2;
                  h3.relatedTarget = u;
                  F3 = null;
                  Wc(e3) === d2 && (t = new t(x2, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J2, F3 = t);
                  J2 = F3;
                  if (k4 && n) b: {
                    t = k4;
                    x2 = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F3 = x2; F3; F3 = vf(F3)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x2 = vf(x2), u--;
                    for (; w2--; ) {
                      if (t === x2 || null !== x2 && t === x2.alternate) break b;
                      t = vf(t);
                      x2 = vf(x2);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k4 && wf(g2, h3, k4, t, false);
                  null !== n && null !== J2 && wf(g2, J2, n, t, true);
                }
              }
            }
            a: {
              h3 = d2 ? ue3(d2) : window;
              k4 = h3.nodeName && h3.nodeName.toLowerCase();
              if ("select" === k4 || "input" === k4 && "file" === h3.type) var na = ve3;
              else if (me3(h3)) if (we3) na = Fe2;
              else {
                na = De3;
                var xa2 = Ce2;
              }
              else (k4 = h3.nodeName) && "input" === k4.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee2);
              if (na && (na = na(a, d2))) {
                ne2(g2, na, c, e3);
                break a;
              }
              xa2 && xa2(a, h3, d2);
              "focusout" === a && (xa2 = h3._wrapperState) && xa2.controlled && "number" === h3.type && cb(h3, "number", h3.value);
            }
            xa2 = d2 ? ue3(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa2) || "true" === xa2.contentEditable) Qe3 = xa2, Re3 = d2, Se2 = null;
                break;
              case "focusout":
                Se2 = Re3 = Qe3 = null;
                break;
              case "mousedown":
                Te2 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te2 = false;
                Ue3(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe3) break;
              case "keydown":
              case "keyup":
                Ue3(g2, c, e3);
            }
            var $a;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie3 ? ge3(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de3 && "ko" !== c.locale && (ie3 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie3 && ($a = nd2()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie3 = true)), xa2 = oe2(d2, ba2), 0 < xa2.length && (ba2 = new Ld2(ba2, a, null, c, e3), g2.push({ event: ba2, listeners: xa2 }), $a ? ba2.data = $a : ($a = he3(c), null !== $a && (ba2.data = $a))));
            if ($a = ce3 ? je3(a, c) : ke3(a, c)) d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld2("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a);
          }
          se3(g2, b2);
        });
      }
      function tf(a, b2, c) {
        return { instance: a, listener: b2, currentTarget: c };
      }
      function oe2(a, b2) {
        for (var c = b2 + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b2, c, d, e2) {
        for (var f2 = b2._reactName, g = []; null !== c && c !== d; ) {
          var h2 = c, k3 = h2.alternate, l2 = h2.stateNode;
          if (null !== k3 && k3 === d) break;
          5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k3 = Kb(c, f2), null != k3 && g.unshift(tf(c, k3, h2))) : e2 || (k3 = Kb(c, f2), null != k3 && g.push(tf(c, k3, h2))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b2, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b2, c) {
        b2 = zf(b2);
        if (zf(a) !== b2 && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b2) {
        return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b2) {
        var c = b2, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd2(b2);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd2(b2);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b2 = a.nodeType;
          if (1 === b2 || 3 === b2) break;
          if (8 === b2) {
            b2 = a.data;
            if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
            if ("/$" === b2) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b2 = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b2) return a;
              b2--;
            } else "/$" === c && b2++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b2 = a[Of];
        if (b2) return b2;
        for (var c = a.parentNode; c; ) {
          if (b2 = c[uf] || c[Of]) {
            c = b2.alternate;
            if (null !== b2.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b2;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue3(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E3(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a, b2) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b2;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b2) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b2[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E3(Wf);
        E3(H2);
      }
      function ag(a, b2, c) {
        if (H2.current !== Vf) throw Error(p(168));
        G2(H2, b2);
        G2(Wf, c);
      }
      function bg(a, b2, c) {
        var d = a.stateNode;
        b2 = b2.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b2)) throw Error(p(108, Ra2(a) || "Unknown", e2));
        return A2({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G2(H2, a);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a, b2, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E3(Wf), E3(H2), G2(H2, a)) : E3(Wf);
        G2(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b2 = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
          } finally {
            C = b2, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b2) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b2;
      }
      function ug(a, b2, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc(b2) + e2;
        if (30 < f2) {
          var g = e2 - e2 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e2 -= g;
          rg = 1 << 32 - oc(b2) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a, b2) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b2;
        c.return = a;
        b2 = a.deletions;
        null === b2 ? (a.deletions = [c], a.flags |= 16) : b2.push(c);
      }
      function Cg(a, b2) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b2 = 1 !== b2.nodeType || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
            return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
          case 6:
            return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
          case 13:
            return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b2, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I2) {
          var b2 = yg;
          if (b2) {
            var c = b2;
            if (!Cg(a, b2)) {
              if (Dg(a)) throw Error(p(418));
              b2 = Lf(c.nextSibling);
              var d = xg;
              b2 && Cg(a, b2) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I2 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I2) return Fg(a), I2 = true, false;
        var b2;
        (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
        if (b2 && (b2 = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b2 = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b2) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b2--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b2++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b2, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
            b2 = function(a2) {
              var b3 = e2.refs;
              null === a2 ? delete b3[f2] : b3[f2] = a2;
            };
            b2._stringRef = f2;
            return b2;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b2) {
        a = Object.prototype.toString.call(b2);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b2 = a._init;
        return b2(a._payload);
      }
      function Og(a) {
        function b2(b3, c2) {
          if (a) {
            var d2 = b3.deletions;
            null === d2 ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b2(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b3) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
          return a2;
        }
        function e2(a2, b3) {
          a2 = Pg(a2, b3);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b3, c2, d2) {
          b3.index = d2;
          if (!a) return b3.flags |= 1048576, c2;
          d2 = b3.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
          b3.flags |= 2;
          return c2;
        }
        function g(b3) {
          a && null === b3.alternate && (b3.flags |= 2);
          return b3;
        }
        function h2(a2, b3, c2, d2) {
          if (null === b3 || 6 !== b3.tag) return b3 = Qg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function k3(a2, b3, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya2) return m(a2, b3, c2.props.children, d2, c2.key);
          if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha2 && Ng(f3) === b3.type)) return d2 = e2(b3, c2.props), d2.ref = Lg(a2, b3, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b3, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b3, c2, d2) {
          if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation) return b3 = Sg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2.children || []);
          b3.return = a2;
          return b3;
        }
        function m(a2, b3, c2, d2, f3) {
          if (null === b3 || 7 !== b3.tag) return b3 = Tg(c2, a2.mode, d2, f3), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function q2(a2, b3, c2) {
          if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c2), b3.return = a2, b3;
          if ("object" === typeof b3 && null !== b3) {
            switch (b3.$$typeof) {
              case va2:
                return c2 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b3), c2.return = a2, c2;
              case wa2:
                return b3 = Sg(b3, a2.mode, c2), b3.return = a2, b3;
              case Ha2:
                var d2 = b3._init;
                return q2(a2, d2(b3._payload), c2);
            }
            if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c2, null), b3.return = a2, b3;
            Mg(a2, b3);
          }
          return null;
        }
        function r(a2, b3, c2, d2) {
          var e3 = null !== b3 ? b3.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h2(a2, b3, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e3 ? k3(a2, b3, c2, d2) : null;
              case wa2:
                return c2.key === e3 ? l2(a2, b3, c2, d2) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b3,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e3 ? null : m(a2, b3, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y3(a2, b3, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h2(b3, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k3(b3, a2, d2, e3);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b3, a2, d2, e3);
              case Ha2:
                var f3 = d2._init;
                return y3(a2, b3, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b3, a2, d2, e3, null);
            Mg(b3, d2);
          }
          return null;
        }
        function n(e3, g2, h3, k4) {
          for (var l3 = null, m2 = null, u = g2, w2 = g2 = 0, x2 = null; null !== u && w2 < h3.length; w2++) {
            u.index > w2 ? (x2 = u, u = null) : x2 = u.sibling;
            var n2 = r(e3, u, h3[w2], k4);
            if (null === n2) {
              null === u && (u = x2);
              break;
            }
            a && u && null === n2.alternate && b2(e3, u);
            g2 = f2(n2, g2, w2);
            null === m2 ? l3 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x2;
          }
          if (w2 === h3.length) return c(e3, u), I2 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h3.length; w2++) u = q2(e3, h3[w2], k4), null !== u && (g2 = f2(u, g2, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
            I2 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h3.length; w2++) x2 = y3(u, e3, w2, h3[w2], k4), null !== x2 && (a && null !== x2.alternate && u.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
          a && u.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function t(e3, g2, h3, k4) {
          var l3 = Ka(h3);
          if ("function" !== typeof l3) throw Error(p(150));
          h3 = l3.call(h3);
          if (null == h3) throw Error(p(151));
          for (var u = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n2 = h3.next(); null !== m2 && !n2.done; w2++, n2 = h3.next()) {
            m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r(e3, m2, n2.value, k4);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a && m2 && null === t2.alternate && b2(e3, m2);
            g2 = f2(t2, g2, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m2 = x2;
          }
          if (n2.done) return c(
            e3,
            m2
          ), I2 && tg(e3, w2), l3;
          if (null === m2) {
            for (; !n2.done; w2++, n2 = h3.next()) n2 = q2(e3, n2.value, k4), null !== n2 && (g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
            I2 && tg(e3, w2);
            return l3;
          }
          for (m2 = d(e3, m2); !n2.done; w2++, n2 = h3.next()) n2 = y3(m2, e3, w2, n2.value, k4), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function J2(a2, d2, f3, h3) {
          "object" === typeof f3 && null !== f3 && f3.type === ya2 && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va2:
                a: {
                  for (var k4 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k4) {
                      k4 = f3.type;
                      if (k4 === ya2) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k4 || "object" === typeof k4 && null !== k4 && k4.$$typeof === Ha2 && Ng(k4) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b2(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya2 ? (d2 = Tg(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d2, f3), h3.return = a2, a2 = h3);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b2(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h3);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l3 = f3._init, J2(a2, d2, l3(f3._payload), h3);
            }
            if (eb(f3)) return n(a2, d2, f3, h3);
            if (Ka(f3)) return t(a2, d2, f3, h3);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h3), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J2;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b2 = Wg.current;
        E3(Wg);
        a._currentValue = b2;
      }
      function bh(a, b2, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b2) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b2 = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b2;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b2, c, d) {
        var e2 = b2.interleaved;
        null === e2 ? (c.next = c, gh(b2)) : (c.next = e2.next, e2.next = c);
        b2.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b2) {
        a.lanes |= b2;
        var c = a.alternate;
        null !== c && (c.lanes |= b2);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b2, c = a.alternate, null !== c && (c.childLanes |= b2), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b2) {
        a = a.updateQueue;
        b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b2) {
        return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b2, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e2 = d.pending;
          null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
          d.pending = b2;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b2.next = b2, gh(d)) : (b2.next = e2.next, e2.next = b2);
        d.interleaved = b2;
        return ih(a, c);
      }
      function oh(a, b2, c) {
        b2 = b2.updateQueue;
        if (null !== b2 && (b2 = b2.shared, 0 !== (c & 4194240))) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b2) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g : f2 = f2.next = g;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
          } else e2 = f2 = b2;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b2 : a.next = b2;
        c.lastBaseUpdate = b2;
      }
      function qh(a, b2, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
        if (null !== h2) {
          e2.shared.pending = null;
          var k3 = h2, l2 = k3.next;
          k3.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k3;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h2 = m.lastBaseUpdate, h2 !== g && (null === h2 ? m.firstBaseUpdate = l2 : h2.next = l2, m.lastBaseUpdate = k3));
        }
        if (null !== f2) {
          var q2 = e2.baseState;
          g = 0;
          m = l2 = k3 = null;
          h2 = f2;
          do {
            var r = h2.lane, y3 = h2.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y3,
                lane: 0,
                tag: h2.tag,
                payload: h2.payload,
                callback: h2.callback,
                next: null
              });
              a: {
                var n = a, t = h2;
                r = b2;
                y3 = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y3, q2, r);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y3, q2, r) : n;
                    if (null === r || void 0 === r) break a;
                    q2 = A2({}, q2, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h2] : r.push(h2));
            } else y3 = { eventTime: y3, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m ? (l2 = m = y3, k3 = q2) : m = m.next = y3, g |= r;
            h2 = h2.next;
            if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
            else r = h2, h2 = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k3 = q2);
          e2.baseState = k3;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b2 = e2.shared.interleaved;
          if (null !== b2) {
            e2 = b2;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b2);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q2;
        }
      }
      function sh(a, b2, c) {
        a = b2.effects;
        b2.effects = null;
        if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
          var d = a[b2], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b2) {
        G2(wh, b2);
        G2(vh, a);
        G2(uh, th);
        a = b2.nodeType;
        switch (a) {
          case 9:
          case 11:
            b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
        }
        E3(uh);
        G2(uh, b2);
      }
      function zh() {
        E3(uh);
        E3(vh);
        E3(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b2 = xh(uh.current);
        var c = lb(b2, a.type);
        b2 !== c && (G2(vh, a), G2(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E3(uh), E3(vh));
      }
      var L = Uf(0);
      function Ch(a) {
        for (var b2 = a; null !== b2; ) {
          if (13 === b2.tag) {
            var c = b2.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b2;
          } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
            if (0 !== (b2.flags & 128)) return b2;
          } else if (null !== b2.child) {
            b2.child.return = b2;
            b2 = b2.child;
            continue;
          }
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua2.ReactCurrentDispatcher;
      var Gh = ua2.ReactCurrentBatchConfig;
      var Hh = 0;
      var M3 = null;
      var N2 = null;
      var O3 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b2) {
        if (null === b2) return false;
        for (var c = 0; c < b2.length && c < a.length; c++) if (!He3(a[c], b2[c])) return false;
        return true;
      }
      function Nh(a, b2, c, d, e2, f2) {
        Hh = f2;
        M3 = b2;
        b2.memoizedState = null;
        b2.updateQueue = null;
        b2.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O3 = N2 = null;
            b2.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b2 = null !== N2 && null !== N2.next;
        Hh = 0;
        O3 = N2 = M3 = null;
        Ih = false;
        if (b2) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        return O3;
      }
      function Uh() {
        if (null === N2) {
          var a = M3.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N2.next;
        var b2 = null === O3 ? M3.memoizedState : O3.next;
        if (null !== b2) O3 = b2, N2 = a;
        else {
          if (null === a) throw Error(p(310));
          N2 = a;
          a = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
          null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        }
        return O3;
      }
      function Vh(a, b2) {
        return "function" === typeof b2 ? b2(a) : b2;
      }
      function Wh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N2, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h2 = g = null, k3 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k3 && (k3 = k3.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q2 = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k3 ? (h2 = k3 = q2, g = d) : k3 = k3.next = q2;
              M3.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k3 ? g = d : k3.next = h2;
          He3(d, b2.memoizedState) || (dh = true);
          b2.memoizedState = d;
          b2.baseState = g;
          b2.baseQueue = k3;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M3.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b2.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b2.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b2.memoizedState) || (dh = true);
          b2.memoizedState = f2;
          null === b2.baseQueue && (b2.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b2) {
        var c = M3, d = Uh(), e2 = b2(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b2 || f2 || null !== O3 && O3.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e2, b2), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b2, e2);
        }
        return e2;
      }
      function di(a, b2, c) {
        a.flags |= 16384;
        a = { getSnapshot: b2, value: c };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
      }
      function ci(a, b2, c, d) {
        b2.value = c;
        b2.getSnapshot = d;
        ei(b2) && fi(a);
      }
      function ai(a, b2, c) {
        return c(function() {
          ei(b2) && fi(a);
        });
      }
      function ei(a) {
        var b2 = a.getSnapshot;
        a = a.value;
        try {
          var c = b2();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b2 = ih(a, 1);
        null !== b2 && gi(b2, a, 1, -1);
      }
      function hi(a) {
        var b2 = Th();
        "function" === typeof a && (a = a());
        b2.memoizedState = b2.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b2.queue = a;
        a = a.dispatch = ii.bind(null, M3, a);
        return [b2.memoizedState, a];
      }
      function bi(a, b2, c, d) {
        a = { tag: a, create: b2, destroy: c, deps: d, next: null };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b2, c, d) {
        var e2 = Th();
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b2, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N2) {
          var g = N2.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi(b2, c, f2, d);
            return;
          }
        }
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, f2, d);
      }
      function mi(a, b2) {
        return ki(8390656, 8, a, b2);
      }
      function $h(a, b2) {
        return li(2048, 8, a, b2);
      }
      function ni(a, b2) {
        return li(4, 2, a, b2);
      }
      function oi(a, b2) {
        return li(4, 4, a, b2);
      }
      function pi(a, b2) {
        if ("function" === typeof b2) return a = a(), b2(a), function() {
          b2(null);
        };
        if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
          b2.current = null;
        };
      }
      function qi(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b2, a), c);
      }
      function ri() {
      }
      function si(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        c.memoizedState = [a, b2];
        return a;
      }
      function ti(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }
      function ui(a, b2, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b2) || (c = yc(), M3.lanes |= c, rh |= c, a.baseState = true);
        return b2;
      }
      function vi(a, b2) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b2();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b2, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, c);
        else if (c = hh(a, b2, c, d), null !== c) {
          var e2 = R2();
          gi(c, a, d, e2);
          Bi(c, b2, d);
        }
      }
      function ii(a, b2, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
            var g = b2.lastRenderedState, h2 = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He3(h2, g)) {
              var k3 = b2.interleaved;
              null === k3 ? (e2.next = e2, gh(b2)) : (e2.next = k3.next, k3.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b2, e2, d);
          null !== c && (e2 = R2(), gi(c, a, d, e2), Bi(c, b2, d));
        }
      }
      function zi(a) {
        var b2 = a.alternate;
        return a === M3 || null !== b2 && b2 === M3;
      }
      function Ai(a, b2) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
        a.pending = b2;
      }
      function Bi(a, b2, c) {
        if (0 !== (c & 4194240)) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b2) {
        Th().memoizedState = [a, void 0 === b2 ? null : b2];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b2, a),
          c
        );
      }, useLayoutEffect: function(a, b2) {
        return ki(4194308, 4, a, b2);
      }, useInsertionEffect: function(a, b2) {
        return ki(4, 2, a, b2);
      }, useMemo: function(a, b2) {
        var c = Th();
        b2 = void 0 === b2 ? null : b2;
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }, useReducer: function(a, b2, c) {
        var d = Th();
        b2 = void 0 !== c ? c(b2) : b2;
        d.memoizedState = d.baseState = b2;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M3, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b2 = Th();
        a = { current: a };
        return b2.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b2 = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b2, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b2, c) {
        var d = M3, e2 = Th();
        if (I2) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b2();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b2, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b2 };
        e2.queue = f2;
        mi(ai.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b2), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b2 = Q.identifierPrefix;
        if (I2) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b2 = ":" + b2 + "R" + c;
          c = Kh++;
          0 < c && (b2 += "H" + c.toString(32));
          b2 += ":";
        } else c = Lh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
        return a.memoizedState = b2;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b2 = Uh();
          return ui(b2, N2.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b2 = Uh().memoizedState;
          return [a, b2];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b2 = Uh();
        return null === N2 ? b2.memoizedState = a : ui(b2, N2.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b2 = Uh().memoizedState;
        return [a, b2];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b2) {
        if (a && a.defaultProps) {
          b2 = A2({}, b2);
          a = a.defaultProps;
          for (var c in a) void 0 === b2[c] && (b2[c] = a[c]);
          return b2;
        }
        return b2;
      }
      function Di(a, b2, c, d) {
        b2 = a.memoizedState;
        c = c(d, b2);
        c = null === c || void 0 === c ? b2 : A2({}, b2, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueReplaceState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueForceUpdate: function(a, b2) {
        a = a._reactInternals;
        var c = R2(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b2 && null !== b2 && (e2.callback = b2);
        b2 = nh(a, e2, d);
        null !== b2 && (gi(b2, a, d, c), oh(b2, a, d));
      } };
      function Fi(a, b2, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie2(c, d) || !Ie2(e2, f2) : true;
      }
      function Gi(a, b2, c) {
        var d = false, e2 = Vf;
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H2.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b2 = new b2(c, f2);
        a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
        b2.updater = Ei;
        a.stateNode = b2;
        b2._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b2;
      }
      function Hi(a, b2, c, d) {
        a = b2.state;
        "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
        "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
        b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
      }
      function Ii(a, b2, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H2.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b2.getDerivedStateFromProps;
        "function" === typeof f2 && (Di(a, b2, f2, c), e2.state = a.memoizedState);
        "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b2) {
        try {
          var c = "", d = b2;
          do
            c += Pa2(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b2, stack: e2, digest: null };
      }
      function Ki(a, b2, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
      }
      function Li(a, b2) {
        try {
          console.error(b2.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b2.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b2);
        };
        return c;
      }
      function Qi(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b2.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li(a, b2);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li(a, b2);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b2.stack;
          this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b2, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b2, e2);
        } else e2 = d.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b2, e2));
        e2.has(c) || (e2.add(c), a = Ti.bind(null, a, b2, c), b2.then(a, a));
      }
      function Ui(a) {
        do {
          var b2;
          if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
          if (b2) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b2, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c, b2, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi = ua2.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b2, c, d) {
        b2.child = null === a ? Vg(b2, null, c, d) : Ug(b2, a.child, c, d);
      }
      function Yi(a, b2, c, d, e2) {
        c = c.render;
        var f2 = b2.ref;
        ch(b2, e2);
        d = Nh(a, b2, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && c && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, d, e2);
        return b2.child;
      }
      function $i(a, b2, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d, e2);
          a = Rg(c.type, null, d, b2, b2.mode, e2);
          a.ref = b2.ref;
          a.return = b2;
          return b2.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie2;
          if (c(g, d) && a.ref === b2.ref) return Zi(a, b2, e2);
        }
        b2.flags |= 1;
        a = Pg(f2, d);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      function bj(a, b2, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie2(f2, d) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b2.lanes = a.lanes, Zi(a, b2, e2);
        }
        return cj(a, b2, c, d, e2);
      }
      function dj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G2(ej, fj), fj |= a, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G2(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G2(ej, fj), fj |= d;
        Xi(a, b2, e2, c);
        return b2.child;
      }
      function gj(a, b2) {
        var c = b2.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b2.flags |= 512, b2.flags |= 2097152;
      }
      function cj(a, b2, c, d, e2) {
        var f2 = Zf(c) ? Xf : H2.current;
        f2 = Yf(b2, f2);
        ch(b2, e2);
        c = Nh(a, b2, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && d && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, c, e2);
        return b2.child;
      }
      function hj(a, b2, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b2);
        } else f2 = false;
        ch(b2, e2);
        if (null === b2.stateNode) ij(a, b2), Gi(b2, c, d), Ii(b2, c, d, e2), d = true;
        else if (null === a) {
          var g = b2.stateNode, h2 = b2.memoizedProps;
          g.props = h2;
          var k3 = g.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b2, l2));
          var m = c.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k3 !== l2) && Hi(b2, g, d, l2);
          jh = false;
          var r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          k3 = b2.memoizedState;
          h2 !== d || r !== k3 || Wf.current || jh ? ("function" === typeof m && (Di(b2, c, m, d), k3 = b2.memoizedState), (h2 = jh || Fi(b2, c, h2, d, r, k3, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k3), g.props = d, g.state = k3, g.context = l2, d = h2) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
        } else {
          g = b2.stateNode;
          lh(a, b2);
          h2 = b2.memoizedProps;
          l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
          g.props = l2;
          q2 = b2.pendingProps;
          r = g.context;
          k3 = c.contextType;
          "object" === typeof k3 && null !== k3 ? k3 = eh(k3) : (k3 = Zf(c) ? Xf : H2.current, k3 = Yf(b2, k3));
          var y3 = c.getDerivedStateFromProps;
          (m = "function" === typeof y3 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r !== k3) && Hi(b2, g, d, k3);
          jh = false;
          r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          var n = b2.memoizedState;
          h2 !== q2 || r !== n || Wf.current || jh ? ("function" === typeof y3 && (Di(b2, c, y3, d), n = b2.memoizedState), (l2 = jh || Fi(b2, c, l2, d, r, n, k3) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k3), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k3)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n), g.props = d, g.state = n, g.context = k3, d = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), d = false);
        }
        return jj(a, b2, c, d, f2, e2);
      }
      function jj(a, b2, c, d, e2, f2) {
        gj(a, b2);
        var g = 0 !== (b2.flags & 128);
        if (!d && !g) return e2 && dg(b2, c, false), Zi(a, b2, f2);
        d = b2.stateNode;
        Wi.current = b2;
        var h2 = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b2.flags |= 1;
        null !== a && g ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
        b2.memoizedState = d.state;
        e2 && dg(b2, c, true);
        return b2.child;
      }
      function kj(a) {
        var b2 = a.stateNode;
        b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
        yh(a, b2.containerInfo);
      }
      function lj(a, b2, c, d, e2) {
        Ig();
        Jg(e2);
        b2.flags |= 256;
        Xi(a, b2, c, d);
        return b2.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b2, c) {
        var d = b2.pendingProps, e2 = L.current, f2 = false, g = 0 !== (b2.flags & 128), h2;
        (h2 = g) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h2) f2 = true, b2.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G2(L, e2 & 1);
        if (null === a) {
          Eg(b2);
          a = b2.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c), b2.memoizedState = mj, a) : qj(b2, g);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b2, g, d, h2, e2, c);
        if (f2) {
          f2 = d.fallback;
          g = b2.mode;
          e2 = a.child;
          h2 = e2.sibling;
          var k3 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b2.child !== e2 ? (d = b2.child, d.childLanes = 0, d.pendingProps = k3, b2.deletions = null) : (d = Pg(e2, k3), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
          f2.return = b2;
          d.return = b2;
          d.sibling = f2;
          b2.child = d;
          d = f2;
          f2 = b2.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a.childLanes & ~c;
          b2.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b2.mode & 1) && (d.lanes = c);
        d.return = b2;
        d.sibling = null;
        null !== a && (c = b2.deletions, null === c ? (b2.deletions = [a], b2.flags |= 16) : c.push(a));
        b2.child = d;
        b2.memoizedState = null;
        return d;
      }
      function qj(a, b2) {
        b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
        b2.return = a;
        return a.child = b2;
      }
      function sj(a, b2, c, d) {
        null !== d && Jg(d);
        Ug(b2, a.child, null, c);
        a = qj(b2, b2.pendingProps.children);
        a.flags |= 2;
        b2.memoizedState = null;
        return a;
      }
      function rj(a, b2, c, d, e2, f2, g) {
        if (c) {
          if (b2.flags & 256) return b2.flags &= -257, d = Ki(Error(p(422))), sj(a, b2, g, d);
          if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
          f2 = d.fallback;
          e2 = b2.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g, null);
          f2.flags |= 2;
          d.return = b2;
          f2.return = b2;
          d.sibling = f2;
          b2.child = d;
          0 !== (b2.mode & 1) && Ug(b2, a.child, null, g);
          b2.child.memoizedState = nj(g);
          b2.memoizedState = mj;
          return f2;
        }
        if (0 === (b2.mode & 1)) return sj(a, b2, g, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h2 = d.dgst;
          d = h2;
          f2 = Error(p(419));
          d = Ki(f2, d, void 0);
          return sj(a, b2, g, d);
        }
        h2 = 0 !== (g & a.childLanes);
        if (dh || h2) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
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
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d, a, e2, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b2, g, d);
        }
        if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b2;
        I2 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
        b2 = qj(b2, d.children);
        b2.flags |= 4096;
        return b2;
      }
      function vj(a, b2, c) {
        a.lanes |= b2;
        var d = a.alternate;
        null !== d && (d.lanes |= b2);
        bh(a.return, b2, c);
      }
      function wj(a, b2, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi(a, b2, d.children, c);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b2);
            else if (19 === a.tag) vj(a, c, b2);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b2) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b2) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G2(L, d);
        if (0 === (b2.mode & 1)) b2.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b2.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b2.child, b2.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b2, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b2.child;
            for (b2.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b2.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b2, true, c, null, f2);
            break;
          case "together":
            wj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
        return b2.child;
      }
      function ij(a, b2) {
        0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      }
      function Zi(a, b2, c) {
        null !== a && (b2.dependencies = a.dependencies);
        rh |= b2.lanes;
        if (0 === (c & b2.childLanes)) return null;
        if (null !== a && b2.child !== a.child) throw Error(p(153));
        if (null !== b2.child) {
          a = b2.child;
          c = Pg(a, a.pendingProps);
          b2.child = c;
          for (c.return = b2; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b2;
          c.sibling = null;
        }
        return b2.child;
      }
      function yj(a, b2, c) {
        switch (b2.tag) {
          case 3:
            kj(b2);
            Ig();
            break;
          case 5:
            Ah(b2);
            break;
          case 1:
            Zf(b2.type) && cg(b2);
            break;
          case 4:
            yh(b2, b2.stateNode.containerInfo);
            break;
          case 10:
            var d = b2.type._context, e2 = b2.memoizedProps.value;
            G2(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b2.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G2(L, L.current & 1), b2.flags |= 128, null;
              if (0 !== (c & b2.child.childLanes)) return oj(a, b2, c);
              G2(L, L.current & 1);
              a = Zi(a, b2, c);
              return null !== a ? a.sibling : null;
            }
            G2(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c & b2.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b2, c);
              b2.flags |= 128;
            }
            e2 = b2.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G2(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b2.lanes = 0, dj(a, b2, c);
        }
        return Zi(a, b2, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b2) {
        for (var c = b2.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b2) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b2) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b2, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b2.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A2({}, e2, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h2 = e2[l2];
            for (g in h2) h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k3 = d[l2];
            h2 = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k3 !== h2 && (null != k3 || null != h2)) if ("style" === l2) if (h2) {
              for (g in h2) !h2.hasOwnProperty(g) || k3 && k3.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k3) k3.hasOwnProperty(g) && h2[g] !== k3[g] && (c || (c = {}), c[g] = k3[g]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k3;
            else "dangerouslySetInnerHTML" === l2 ? (k3 = k3 ? k3.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k3 && h2 !== k3 && (f2 = f2 || []).push(l2, k3)) : "children" === l2 ? "string" !== typeof k3 && "number" !== typeof k3 || (f2 = f2 || []).push(l2, "" + k3) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k3 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k3 || (f2 = [])) : (f2 = f2 || []).push(l2, k3));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b2.updateQueue = l2) b2.flags |= 4;
        }
      };
      Cj = function(a, b2, c, d) {
        c !== d && (b2.flags |= 4);
      };
      function Dj(a, b2) {
        if (!I2) switch (a.tailMode) {
          case "hidden":
            b2 = a.tail;
            for (var c = null; null !== b2; ) null !== b2.alternate && (c = b2), b2 = b2.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S3(a) {
        var b2 = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b2) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b2;
      }
      function Ej(a, b2, c) {
        var d = b2.pendingProps;
        wg(b2);
        switch (b2.tag) {
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
            return S3(b2), null;
          case 1:
            return Zf(b2.type) && $f(), S3(b2), null;
          case 3:
            d = b2.stateNode;
            zh();
            E3(Wf);
            E3(H2);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b2);
            S3(b2);
            return null;
          case 5:
            Bh(b2);
            var e2 = xh(wh.current);
            c = b2.type;
            if (null !== a && null != b2.stateNode) Bj(a, b2, c, d, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            else {
              if (!d) {
                if (null === b2.stateNode) throw Error(p(166));
                S3(b2);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.type;
                var f2 = b2.memoizedProps;
                d[Of] = b2;
                d[Pf] = f2;
                a = 0 !== (b2.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za2(d, f2);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h2 = f2[g];
                  "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h2,
                    a
                  ), e2 = ["children", "" + h2]) : ea2.hasOwnProperty(g) && null != h2 && "onScroll" === g && D("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b2.updateQueue = d;
                null !== d && (b2.flags |= 4);
              } else {
                g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b2;
                a[Pf] = d;
                zj(a, b2, false, false);
                b2.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za2(a, d);
                      e2 = Ya2(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A2({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h2 = e2;
                  for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                    var k3 = h2[f2];
                    "style" === f2 ? sb(a, k3) : "dangerouslySetInnerHTML" === f2 ? (k3 = k3 ? k3.__html : void 0, null != k3 && nb(a, k3)) : "children" === f2 ? "string" === typeof k3 ? ("textarea" !== c || "" !== k3) && ob(a, k3) : "number" === typeof k3 && ob(a, "" + k3) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k3 && "onScroll" === f2 && D("scroll", a) : null != k3 && ta(a, f2, k3, g));
                  }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b2.flags |= 4);
              }
              null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            }
            S3(b2);
            return null;
          case 6:
            if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b2.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.memoizedProps;
                d[Of] = b2;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b2.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
            }
            S3(b2);
            return null;
          case 13:
            E3(L);
            d = b2.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
              else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p(318));
                  f2 = b2.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p(317));
                  f2[Of] = b2;
                } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
                S3(b2);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b2.flags & 65536 ? b2 : null;
            }
            if (0 !== (b2.flags & 128)) return b2.lanes = c, b2;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
            null !== b2.updateQueue && (b2.flags |= 4);
            S3(b2);
            return null;
          case 4:
            return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S3(b2), null;
          case 10:
            return ah(b2.type._context), S3(b2), null;
          case 17:
            return Zf(b2.type) && $f(), S3(b2), null;
          case 19:
            E3(L);
            f2 = b2.memoizedState;
            if (null === f2) return S3(b2), null;
            d = 0 !== (b2.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T2 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b2.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b2.updateQueue = d, b2.flags |= 4);
                  b2.subtreeFlags = 0;
                  d = c;
                  for (c = b2.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L, L.current & 1 | 2);
                  return b2.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B3() > Gj && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b2.flags |= 128, d = true, c = a.updateQueue, null !== c && (b2.updateQueue = c, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I2) return S3(b2), null;
              } else 2 * B3() - f2.renderingStartTime > Gj && 1073741824 !== c && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, null !== c ? c.sibling = g : b2.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B3(), b2.sibling = null, c = L.current, G2(L, d ? c & 1 | 2 : c & 1), b2;
            S3(b2);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S3(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S3(b2), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b2.tag));
      }
      function Ij(a, b2) {
        wg(b2);
        switch (b2.tag) {
          case 1:
            return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 3:
            return zh(), E3(Wf), E3(H2), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
          case 5:
            return Bh(b2), null;
          case 13:
            E3(L);
            a = b2.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b2.alternate) throw Error(p(340));
              Ig();
            }
            a = b2.flags;
            return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 19:
            return E3(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b2.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b2) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W2(a, b2, d);
        }
        else c.current = null;
      }
      function Mj(a, b2, c) {
        try {
          c();
        } catch (d) {
          W2(a, b2, d);
        }
      }
      var Nj = false;
      function Oj(a, b2) {
        Cf = dd;
        a = Me3();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F3) {
                c = null;
                break a;
              }
              var g = 0, h2 = -1, k3 = -1, l2 = 0, m = 0, q2 = a, r = null;
              b: for (; ; ) {
                for (var y3; ; ) {
                  q2 !== c || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
                  q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k3 = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y3 = q2.firstChild)) break;
                  r = q2;
                  q2 = y3;
                }
                for (; ; ) {
                  if (q2 === a) break b;
                  r === c && ++l2 === e2 && (h2 = g);
                  r === f2 && ++m === d && (k3 = g);
                  if (null !== (y3 = q2.nextSibling)) break;
                  q2 = r;
                  r = q2.parentNode;
                }
                q2 = y3;
              }
              c = -1 === h2 || -1 === k3 ? null : { start: h2, end: k3 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b2; null !== V; ) if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V = a;
        else for (; null !== V; ) {
          b2 = V;
          try {
            var n = b2.alternate;
            if (0 !== (b2.flags & 1024)) switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J2 = n.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t : Ci(b2.type, t), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b2.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F3) {
            W2(b2, b2.return, F3);
          }
          a = b2.sibling;
          if (null !== a) {
            a.return = b2.return;
            V = a;
            break;
          }
          V = b2.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b2, c) {
        var d = b2.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b2, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b2) {
        b2 = b2.updateQueue;
        b2 = null !== b2 ? b2.lastEffect : null;
        if (null !== b2) {
          var c = b2 = b2.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b2);
        }
      }
      function Rj(a) {
        var b2 = a.ref;
        if (null !== b2) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b2 ? b2(a) : b2.current = a;
        }
      }
      function Sj(a) {
        var b2 = a.alternate;
        null !== b2 && (a.alternate = null, Sj(b2));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b2) : c.insertBefore(a, b2) : (8 === c.nodeType ? (b2 = c.parentNode, b2.insertBefore(a, c)) : (b2 = c, b2.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b2.onclick || (b2.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b2, c), a = a.sibling; null !== a; ) Vj(a, b2, c), a = a.sibling;
      }
      function Wj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? c.insertBefore(a, b2) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b2, c), a = a.sibling; null !== a; ) Wj(a, b2, c), a = a.sibling;
      }
      var X2 = null;
      var Xj = false;
      function Yj(a, b2, c) {
        for (c = c.child; null !== c; ) Zj(a, b2, c), c = c.sibling;
      }
      function Zj(a, b2, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h2) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b2);
          case 6:
            var d = X2, e2 = Xj;
            X2 = null;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
            break;
          case 18:
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd2(a)) : Kf(X2, c.stateNode));
            break;
          case 4:
            d = X2;
            e2 = Xj;
            X2 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b2, g) : 0 !== (f2 & 4) && Mj(c, b2, g));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b2, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b2), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h2) {
              W2(c, b2, h2);
            }
            Yj(a, b2, c);
            break;
          case 21:
            Yj(a, b2, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b2, c), U3 = d) : Yj(a, b2, c);
            break;
          default:
            Yj(a, b2, c);
        }
      }
      function ak(a) {
        var b2 = a.updateQueue;
        if (null !== b2) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b2.forEach(function(b3) {
            var d = bk.bind(null, a, b3);
            c.has(b3) || (c.add(b3), b3.then(d, d));
          });
        }
      }
      function ck(a, b2) {
        var c = b2.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g = b2, h2 = g;
            a: for (; null !== h2; ) {
              switch (h2.tag) {
                case 5:
                  X2 = h2.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X2 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X2 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h2 = h2.return;
            }
            if (null === X2) throw Error(p(160));
            Zj(f2, g, e2);
            X2 = null;
            Xj = false;
            var k3 = e2.alternate;
            null !== k3 && (k3.return = null);
            e2.return = null;
          } catch (l2) {
            W2(e2, b2, l2);
          }
        }
        if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
      }
      function dk(a, b2) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W2(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h2 = a.type, k3 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k3) try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g);
                var l2 = vb(h2, f2);
                for (g = 0; g < k3.length; g += 2) {
                  var m = k3[g], q2 = k3[g + 1];
                  "style" === m ? sb(e2, q2) : "dangerouslySetInnerHTML" === m ? nb(e2, q2) : "children" === m ? ob(e2, q2) : ta(e2, m, q2, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y3 = f2.value;
                    null != y3 ? fb(e2, !!f2.multiple, y3, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b2, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd2(b2.containerInfo);
            } catch (t) {
              W2(a, a.return, t);
            }
            break;
          case 4:
            ck(b2, a);
            ek(a);
            break;
          case 13:
            ck(b2, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B3()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m, ck(b2, a), U3 = l2) : ck(b2, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q2 = V = m; null !== V; ) {
                  r = V;
                  y3 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b2 = d, n.props = b2.memoizedProps, n.state = b2.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W2(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q2);
                        continue;
                      }
                  }
                  null !== y3 ? (y3.return = r, V = y3) : gk(q2);
                }
                m = m.sibling;
              }
              a: for (m = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m) {
                    m = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k3 = q2.memoizedProps.style, g = void 0 !== k3 && null !== k3 && k3.hasOwnProperty("display") ? k3.display : null, h2.style.display = rb("display", g));
                    } catch (t) {
                      W2(a, a.return, t);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m) try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t) {
                    W2(a, a.return, t);
                  }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a) break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a) break a;
                  m === q2 && (m = null);
                  q2 = q2.return;
                }
                m === q2 && (m = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
            }
            break;
          case 19:
            ck(b2, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b2,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b2 = a.flags;
        if (b2 & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h2 = Uj(a);
                Vj(a, h2, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k3) {
            W2(a, a.return, k3);
          }
          a.flags &= -3;
        }
        b2 & 4096 && (a.flags &= -4097);
      }
      function hk(a, b2, c) {
        V = a;
        ik(a, b2, c);
      }
      function ik(a, b2, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e2 = V, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g = null !== e2.memoizedState || Jj;
            if (!g) {
              var h2 = e2.alternate, k3 = null !== h2 && null !== h2.memoizedState || U3;
              h2 = Jj;
              var l2 = U3;
              Jj = g;
              if ((U3 = k3) && !l2) for (V = e2; null !== V; ) g = V, k3 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k3 ? (k3.return = g, V = k3) : jk(e2);
              for (; null !== f2; ) V = f2, ik(f2, b2, c), f2 = f2.sibling;
              V = e2;
              Jj = h2;
              U3 = l2;
            }
            kk(a, b2, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : kk(a, b2, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (0 !== (b2.flags & 8772)) {
            var c = b2.alternate;
            try {
              if (0 !== (b2.flags & 8772)) switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b2);
                  break;
                case 1:
                  var d = b2.stateNode;
                  if (b2.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b2.elementType === b2.type ? c.memoizedProps : Ci(b2.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b2.updateQueue;
                  null !== f2 && sh(b2, f2, d);
                  break;
                case 3:
                  var g = b2.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b2.child) switch (b2.child.tag) {
                      case 5:
                        c = b2.child.stateNode;
                        break;
                      case 1:
                        c = b2.child.stateNode;
                    }
                    sh(b2, g, c);
                  }
                  break;
                case 5:
                  var h2 = b2.stateNode;
                  if (null === c && b2.flags & 4) {
                    c = h2;
                    var k3 = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k3.autoFocus && c.focus();
                        break;
                      case "img":
                        k3.src && (c.src = k3.src);
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
                  if (null === b2.memoizedState) {
                    var l2 = b2.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q2 = m.dehydrated;
                        null !== q2 && bd2(q2);
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
                  throw Error(p(163));
              }
              U3 || b2.flags & 512 && Rj(b2);
            } catch (r) {
              W2(b2, b2.return, r);
            }
          }
          if (b2 === a) {
            V = null;
            break;
          }
          c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V = c;
            break;
          }
          V = b2.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (b2 === a) {
            V = null;
            break;
          }
          var c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V = c;
            break;
          }
          V = b2.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b2 = V;
          try {
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                var c = b2.return;
                try {
                  Qj(4, b2);
                } catch (k3) {
                  W2(b2, c, k3);
                }
                break;
              case 1:
                var d = b2.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b2.return;
                  try {
                    d.componentDidMount();
                  } catch (k3) {
                    W2(b2, e2, k3);
                  }
                }
                var f2 = b2.return;
                try {
                  Rj(b2);
                } catch (k3) {
                  W2(b2, f2, k3);
                }
                break;
              case 5:
                var g = b2.return;
                try {
                  Rj(b2);
                } catch (k3) {
                  W2(b2, g, k3);
                }
            }
          } catch (k3) {
            W2(b2, b2.return, k3);
          }
          if (b2 === a) {
            V = null;
            break;
          }
          var h2 = b2.sibling;
          if (null !== h2) {
            h2.return = b2.return;
            V = h2;
            break;
          }
          V = b2.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K2 = 0;
      var Q = null;
      var Y2 = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T2 = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R2() {
        return 0 !== (K2 & 6) ? B3() : -1 !== Ak ? Ak : Ak = B3();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K2 & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b2, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K2 & 2) || a !== Q) a === Q && (0 === (K2 & 2) && (qk |= c), 4 === T2 && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B3() + 500, fg && jg());
      }
      function Dk(a, b2) {
        var c = a.callbackNode;
        wc(a, b2);
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b2 = d & -d, a.callbackPriority !== b2) {
          null != c && bc(c);
          if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K2 & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b2;
          a.callbackNode = c;
        }
      }
      function Gk(a, b2) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K2 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2) b2 = Ik(a, d);
        else {
          b2 = d;
          var e2 = K2;
          K2 |= 2;
          var f2 = Jk();
          if (Q !== a || Z !== b2) uk = null, Gj = B3() + 500, Kk(a, b2);
          do
            try {
              Lk();
              break;
            } catch (h2) {
              Mk(a, h2);
            }
          while (1);
          $g();
          mk.current = f2;
          K2 = e2;
          null !== Y2 ? b2 = 0 : (Q = null, Z = 0, b2 = T2);
        }
        if (0 !== b2) {
          2 === b2 && (e2 = xc(a), 0 !== e2 && (d = e2, b2 = Nk(a, e2)));
          if (1 === b2) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
          if (6 === b2) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b2 = Ik(a, d), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d = f2, b2 = Nk(a, f2))), 1 === b2)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b2) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b2 = fk + 500 - B3(), 10 < b2)) {
                  if (0 !== uc(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R2();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b2 = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f2 = 1 << g;
                  g = b2[g];
                  g > e2 && (e2 = g);
                  d &= ~f2;
                }
                d = e2;
                d = B3() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B3());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b2) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
        a = Ik(a, b2);
        2 !== a && (b2 = tk, tk = c, null !== b2 && Fj(b2));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b2 = a; ; ) {
          if (b2.flags & 16384) {
            var c = b2.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b2.child;
          if (b2.subtreeFlags & 16384 && null !== c) c.return = b2, b2 = c;
          else {
            if (b2 === a) break;
            for (; null === b2.sibling; ) {
              if (null === b2.return || b2.return === a) return true;
              b2 = b2.return;
            }
            b2.sibling.return = b2.return;
            b2 = b2.sibling;
          }
        }
        return true;
      }
      function Ck(a, b2) {
        b2 &= ~rk;
        b2 &= ~qk;
        a.suspendedLanes |= b2;
        a.pingedLanes &= ~b2;
        for (a = a.expirationTimes; 0 < b2; ) {
          var c = 31 - oc(b2), d = 1 << c;
          a[c] = -1;
          b2 &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K2 & 6)) throw Error(p(327));
        Hk();
        var b2 = uc(a, 0);
        if (0 === (b2 & 1)) return Dk(a, B3()), null;
        var c = Ik(a, b2);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b2 = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b2), Dk(a, B3()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b2;
        Pk(a, tk, uk);
        Dk(a, B3());
        return null;
      }
      function Qk(a, b2) {
        var c = K2;
        K2 |= 1;
        try {
          return a(b2);
        } finally {
          K2 = c, 0 === K2 && (Gj = B3() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
        var b2 = K2;
        K2 |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K2 = b2, 0 === (K2 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E3(ej);
      }
      function Kk(a, b2) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y2) for (c = Y2.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E3(Wf);
              E3(H2);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E3(L);
              break;
            case 19:
              E3(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y2 = a = Pg(a.current, null);
        Z = fj = b2;
        T2 = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b2 = 0; b2 < fh.length; b2++) if (c = fh[b2], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b2) {
        do {
          var c = Y2;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M3.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O3 = N2 = M3 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T2 = 1;
              pk = b2;
              Y2 = null;
              break;
            }
            a: {
              var f2 = a, g = c.return, h2 = c, k3 = b2;
              b2 = Z;
              h2.flags |= 32768;
              if (null !== k3 && "object" === typeof k3 && "function" === typeof k3.then) {
                var l2 = k3, m = h2, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y3 = Ui(g);
                if (null !== y3) {
                  y3.flags &= -257;
                  Vi(y3, g, h2, f2, b2);
                  y3.mode & 1 && Si(f2, l2, b2);
                  b2 = y3;
                  k3 = l2;
                  var n = b2.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k3);
                    b2.updateQueue = t;
                  } else n.add(k3);
                  break a;
                } else {
                  if (0 === (b2 & 1)) {
                    Si(f2, l2, b2);
                    tj();
                    break a;
                  }
                  k3 = Error(p(426));
                }
              } else if (I2 && h2.mode & 1) {
                var J2 = Ui(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Vi(J2, g, h2, f2, b2);
                  Jg(Ji(k3, h2));
                  break a;
                }
              }
              f2 = k3 = Ji(k3, h2);
              4 !== T2 && (T2 = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var x2 = Ni(f2, k3, b2);
                    ph(f2, x2);
                    break a;
                  case 1:
                    h2 = k3;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f2.flags |= 65536;
                      b2 &= -b2;
                      f2.lanes |= b2;
                      var F3 = Qi(f2, h2, b2);
                      ph(f2, F3);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na) {
            b2 = na;
            Y2 === c && null !== c && (Y2 = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a, b2) {
        var c = K2;
        K2 |= 2;
        var d = Jk();
        if (Q !== a || Z !== b2) uk = null, Kk(a, b2);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K2 = c;
        mk.current = d;
        if (null !== Y2) throw Error(p(261));
        Q = null;
        Z = 0;
        return T2;
      }
      function Tk() {
        for (; null !== Y2; ) Uk(Y2);
      }
      function Lk() {
        for (; null !== Y2 && !cc(); ) Uk(Y2);
      }
      function Uk(a) {
        var b2 = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b2 ? Sk(a) : Y2 = b2;
        nk.current = null;
      }
      function Sk(a) {
        var b2 = a;
        do {
          var c = b2.alternate;
          a = b2.return;
          if (0 === (b2.flags & 32768)) {
            if (c = Ej(c, b2, fj), null !== c) {
              Y2 = c;
              return;
            }
          } else {
            c = Ij(c, b2);
            if (null !== c) {
              c.flags &= 32767;
              Y2 = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T2 = 6;
              Y2 = null;
              return;
            }
          }
          b2 = b2.sibling;
          if (null !== b2) {
            Y2 = b2;
            return;
          }
          Y2 = b2 = a;
        } while (null !== b2);
        0 === T2 && (T2 = 5);
      }
      function Pk(a, b2, c) {
        var d = C, e2 = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b2, c, d);
        } finally {
          ok.transition = e2, C = d;
        }
        return null;
      }
      function Wk(a, b2, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K2 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q && (Y2 = Q = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h2 = K2;
          K2 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe3(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc();
          K2 = h2;
          C = g;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B3());
        if (null !== b2) for (d = a.onRecoverableError, c = 0; c < b2.length; c++) e2 = b2[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b2 = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K2 & 6)) throw Error(p(331));
              var e2 = K2;
              K2 |= 4;
              for (V = a.current; null !== V; ) {
                var f2 = V, g = f2.child;
                if (0 !== (V.flags & 16)) {
                  var h2 = f2.deletions;
                  if (null !== h2) {
                    for (var k3 = 0; k3 < h2.length; k3++) {
                      var l2 = h2[k3];
                      for (V = l2; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f2);
                        }
                        var q2 = m.child;
                        if (null !== q2) q2.return = m, V = q2;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y3 = m.return;
                          Sj(m);
                          if (m === l2) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y3;
                            V = r;
                            break;
                          }
                          V = y3;
                        }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
                else b: for (; null !== V; ) {
                  f2 = V;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V = x2;
                    break b;
                  }
                  V = f2.return;
                }
              }
              var w2 = a.current;
              for (V = w2; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w2; null !== V; ) {
                  h2 = V;
                  if (0 !== (h2.flags & 2048)) try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h2);
                    }
                  } catch (na) {
                    W2(h2, h2.return, na);
                  }
                  if (h2 === g) {
                    V = null;
                    break b;
                  }
                  var F3 = h2.sibling;
                  if (null !== F3) {
                    F3.return = h2.return;
                    V = F3;
                    break b;
                  }
                  V = h2.return;
                }
              }
              K2 = e2;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b2;
          }
        }
        return false;
      }
      function Xk(a, b2, c) {
        b2 = Ji(c, b2);
        b2 = Ni(a, b2, 1);
        a = nh(a, b2, 1);
        b2 = R2();
        null !== a && (Ac(a, 1, b2), Dk(a, b2));
      }
      function W2(a, b2, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b2; ) {
          if (3 === b2.tag) {
            Xk(b2, a, c);
            break;
          } else if (1 === b2.tag) {
            var d = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b2, a, 1);
              b2 = nh(b2, a, 1);
              a = R2();
              null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
              break;
            }
          }
          b2 = b2.return;
        }
      }
      function Ti(a, b2, c) {
        var d = a.pingCache;
        null !== d && d.delete(b2);
        b2 = R2();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z & c) === c && (4 === T2 || 3 === T2 && (Z & 130023424) === Z && 500 > B3() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b2);
      }
      function Yk(a, b2) {
        0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R2();
        a = ih(a, b2);
        null !== a && (Ac(a, b2, c), Dk(a, c));
      }
      function uj(a) {
        var b2 = a.memoizedState, c = 0;
        null !== b2 && (c = b2.retryLane);
        Yk(a, c);
      }
      function bk(a, b2) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b2);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b2, c) {
        if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
        b2.lanes = 0;
        switch (b2.tag) {
          case 2:
            var d = b2.type;
            ij(a, b2);
            a = b2.pendingProps;
            var e2 = Yf(b2, H2.current);
            ch(b2, c);
            e2 = Nh(null, b2, d, a, e2, c);
            var f2 = Sh();
            b2.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d, a, c), b2 = jj(null, b2, d, true, f2, c)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi(null, b2, e2, c), b2 = b2.child);
            return b2;
          case 16:
            d = b2.elementType;
            a: {
              ij(a, b2);
              a = b2.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b2.type = d;
              e2 = b2.tag = Zk(d);
              a = Ci(d, a);
              switch (e2) {
                case 0:
                  b2 = cj(null, b2, d, a, c);
                  break a;
                case 1:
                  b2 = hj(null, b2, d, a, c);
                  break a;
                case 11:
                  b2 = Yi(null, b2, d, a, c);
                  break a;
                case 14:
                  b2 = $i(null, b2, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b2;
          case 0:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), cj(a, b2, d, e2, c);
          case 1:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), hj(a, b2, d, e2, c);
          case 3:
            a: {
              kj(b2);
              if (null === a) throw Error(p(387));
              d = b2.pendingProps;
              f2 = b2.memoizedState;
              e2 = f2.element;
              lh(a, b2);
              qh(b2, d, null, c);
              var g = b2.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e2 = Ji(Error(p(423)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji(Error(p(424)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c = Vg(b2, null, d, c), b2.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
                Xi(a, b2, d, c);
              }
              b2 = b2.child;
            }
            return b2;
          case 5:
            return Ah(b2), null === a && Eg(b2), d = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g, c), b2.child;
          case 6:
            return null === a && Eg(b2), null;
          case 13:
            return oj(a, b2, c);
          case 4:
            return yh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d, c) : Xi(a, b2, d, c), b2.child;
          case 11:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), Yi(a, b2, d, e2, c);
          case 7:
            return Xi(a, b2, b2.pendingProps, c), b2.child;
          case 8:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 12:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 10:
            a: {
              d = b2.type._context;
              e2 = b2.pendingProps;
              f2 = b2.memoizedProps;
              g = e2.value;
              G2(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He3(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
              } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                var h2 = f2.dependencies;
                if (null !== h2) {
                  g = f2.child;
                  for (var k3 = h2.firstContext; null !== k3; ) {
                    if (k3.context === d) {
                      if (1 === f2.tag) {
                        k3 = mh(-1, c & -c);
                        k3.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          null === m ? k3.next = k3 : (k3.next = m.next, m.next = k3);
                          l2.pending = k3;
                        }
                      }
                      f2.lanes |= c;
                      k3 = f2.alternate;
                      null !== k3 && (k3.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b2
                      );
                      h2.lanes |= c;
                      break;
                    }
                    k3 = k3.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b2.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h2 = g.alternate;
                  null !== h2 && (h2.lanes |= c);
                  bh(g, c, b2);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b2) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi(a, b2, e2.children, c);
              b2 = b2.child;
            }
            return b2;
          case 9:
            return e2 = b2.type, d = b2.pendingProps.children, ch(b2, c), e2 = eh(e2), d = d(e2), b2.flags |= 1, Xi(a, b2, d, c), b2.child;
          case 14:
            return d = b2.type, e2 = Ci(d, b2.pendingProps), e2 = Ci(d.type, e2), $i(a, b2, d, e2, c);
          case 15:
            return bj(a, b2, b2.type, b2.pendingProps, c);
          case 17:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), ij(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, ch(b2, c), Gi(b2, d, e2), Ii(b2, d, e2, c), jj(null, b2, d, true, a, c);
          case 19:
            return xj(a, b2, c);
          case 22:
            return dj(a, b2, c);
        }
        throw Error(p(156, b2.tag));
      };
      function Fk(a, b2) {
        return ac(a, b2);
      }
      function $k(a, b2, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b2;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b2, c, d) {
        return new $k(a, b2, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga) return 14;
        }
        return 2;
      }
      function Pg(a, b2) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b2, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b2, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b2 = a.dependencies;
        c.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b2, c, d, e2, f2) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e2, f2, b2);
          case za:
            g = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b2, e2 | 2), a.elementType = Aa2, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b2, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa2:
            return a = Bg(19, c, b2, e2), a.elementType = Fa2, a.lanes = f2, a;
          case Ia:
            return pj(c, e2, f2, b2);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da2:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b2 = Bg(g, c, b2, e2);
        b2.elementType = a;
        b2.type = d;
        b2.lanes = f2;
        return b2;
      }
      function Tg(a, b2, c, d) {
        a = Bg(7, a, d, b2);
        a.lanes = c;
        return a;
      }
      function pj(a, b2, c, d) {
        a = Bg(22, a, d, b2);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b2, c) {
        a = Bg(6, a, null, b2);
        a.lanes = c;
        return a;
      }
      function Sg(a, b2, c) {
        b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
        b2.lanes = c;
        b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b2;
      }
      function al2(a, b2, c, d, e2) {
        this.tag = b2;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b2, c, d, e2, f2, g, h2, k3) {
        a = new al2(a, b2, c, h2, k3);
        1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
        f2 = Bg(3, null, null, b2);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl(a, b2, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b2 = a;
          do {
            switch (b2.tag) {
              case 3:
                b2 = b2.stateNode.context;
                break a;
              case 1:
                if (Zf(b2.type)) {
                  b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b2 = b2.return;
          } while (null !== b2);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b2);
        }
        return b2;
      }
      function el2(a, b2, c, d, e2, f2, g, h2, k3) {
        a = bl2(c, d, true, a, e2, f2, g, h2, k3);
        a.context = dl2(null);
        c = a.current;
        d = R2();
        e2 = yi(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl2(a, b2, c, d) {
        var e2 = b2.current, f2 = R2(), g = yi(e2);
        c = dl2(c);
        null === b2.context ? b2.context = c : b2.pendingContext = c;
        b2 = mh(f2, g);
        b2.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b2.callback = d);
        a = nh(e2, b2, g);
        null !== a && (gi(a, e2, g, f2), oh(a, e2, g));
        return g;
      }
      function gl2(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b2) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b2 ? c : b2;
        }
      }
      function il(a, b2) {
        hl(a, b2);
        (a = a.alternate) && hl(a, b2);
      }
      function jl2() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll2.prototype.render = function(a) {
        var b2 = this._internalRoot;
        if (null === b2) throw Error(p(409));
        fl2(a, b2, null, null);
      };
      ml.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b2 = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b2[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b2 = Hc();
          a = { blockedOn: null, target: a, priority: b2 };
          for (var c = 0; c < Qc.length && 0 !== b2 && b2 < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql2(a, b2, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl2(g);
              f2.call(a2);
            };
          }
          var g = el2(b2, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h2 = d;
          d = function() {
            var a2 = gl2(k3);
            h2.call(a2);
          };
        }
        var k3 = bl2(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k3;
        a[uf] = k3.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b2, k3, c, d);
        });
        return k3;
      }
      function rl2(a, b2, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e2) {
            var h2 = e2;
            e2 = function() {
              var a2 = gl2(g);
              h2.call(a2);
            };
          }
          fl2(b2, g, a, e2);
        } else g = ql2(c, b2, a, e2, d);
        return gl2(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b2 = a.stateNode;
            if (b2.current.memoizedState.isDehydrated) {
              var c = tc(b2.pendingLanes);
              0 !== c && (Cc(b2, c | 1), Dk(b2, B3()), 0 === (K2 & 6) && (Gj = B3() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b3 = ih(a, 1);
              if (null !== b3) {
                var c2 = R2();
                gi(b3, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b2 = ih(a, 134217728);
          if (null !== b2) {
            var c = R2();
            gi(b2, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b2 = yi(a), c = ih(a, b2);
          if (null !== c) {
            var d = R2();
            gi(c, a, b2, d);
          }
          il(a, b2);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b2) {
        var c = C;
        try {
          return C = a, b2();
        } finally {
          C = c;
        }
      };
      yb = function(a, b2, c) {
        switch (b2) {
          case "input":
            bb(a, c);
            b2 = c.name;
            if ("radio" === c.type && null != b2) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
              for (b2 = 0; b2 < c.length; b2++) {
                var d = c[b2];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p(90));
                  Wa(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b2 = c.value, null != b2 && fb(a, !!c.multiple, b2, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue3, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc = vl2.inject(ul2), lc = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b2) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b2)) throw Error(p(200));
        return cl(a, b2, null, c);
      };
      exports.createRoot = function(a, b2) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e2 = kl;
        null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
        b2 = bl2(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b2);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b2 = a._reactInternals;
        if (void 0 === b2) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b2);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, true, c);
      };
      exports.hydrateRoot = function(a, b2, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b2 = el2(b2, null, a, 1, null != c ? c : null, e2, false, f2, g);
        a[uf] = b2.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c, e2] : b2.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml(b2);
      };
      exports.render = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b2, c, d) {
        if (!ol2(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl2(a, b2, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // ../../opt/files/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../opt/files/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../opt/files/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h2, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h2, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k3 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q2(c, a, g) {
        var b2, d = {}, e2 = null, h2 = null;
        void 0 !== g && (e2 = "" + g);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h2 = a.ref);
        for (b2 in a) m.call(a, b2) && !p.hasOwnProperty(b2) && (d[b2] = a[b2]);
        if (c && c.defaultProps) for (b2 in a = c.defaultProps, a) void 0 === d[b2] && (d[b2] = a[b2]);
        return { $$typeof: k3, type: c, key: e2, ref: h2, props: d, _owner: n.current };
      }
      exports.Fragment = l2;
      exports.jsx = q2;
      exports.jsxs = q2;
    }
  });

  // ../../opt/files/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../opt/files/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // ../../opt/files/kit/index.tsx
  var import_react17 = __toESM(require_react());

  // ../../opt/files/kit/components.mjs
  var y = __toESM(require_react(), 1);
  var Je = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function ee(e2) {
    var r, t, o = "";
    if (typeof e2 == "string" || typeof e2 == "number") o += e2;
    else if (typeof e2 == "object") if (Array.isArray(e2)) {
      var s = e2.length;
      for (r = 0; r < s; r++) e2[r] && (t = ee(e2[r])) && (o && (o += " "), o += t);
    } else for (t in e2) e2[t] && (o && (o += " "), o += t);
    return o;
  }
  function j() {
    for (var e2, r, t = 0, o = "", s = arguments.length; t < s; t++) (e2 = arguments[t]) && (r = ee(e2)) && (o && (o += " "), o += r);
    return o;
  }
  var ve = (e2) => {
    let r = Ce(e2), { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e2;
    return { getClassGroupId: (a) => {
      let i = a.split("-");
      return i[0] === "" && i.length !== 1 && i.shift(), oe(i, r) || we(a);
    }, getConflictingClassGroupIds: (a, i) => {
      let d = t[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    } };
  };
  var oe = (e2, r) => {
    if (e2.length === 0) return r.classGroupId;
    let t = e2[0], o = r.nextPart.get(t), s = o ? oe(e2.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    let n = e2.join("-");
    return r.validators.find(({ validator: a }) => a(n))?.classGroupId;
  };
  var te = /^\[(.+)\]$/;
  var we = (e2) => {
    if (te.test(e2)) {
      let r = te.exec(e2)[1], t = r?.substring(0, r.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  };
  var Ce = (e2) => {
    let { theme: r, prefix: t } = e2, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return ke(Object.entries(e2.classGroups), t).forEach(([n, a]) => {
      U(a, o, n, r);
    }), o;
  };
  var U = (e2, r, t, o) => {
    e2.forEach((s) => {
      if (typeof s == "string") {
        let n = s === "" ? r : re(r, s);
        n.classGroupId = t;
        return;
      }
      if (typeof s == "function") {
        if (Se(s)) {
          U(s(o), r, t, o);
          return;
        }
        r.validators.push({ validator: s, classGroupId: t });
        return;
      }
      Object.entries(s).forEach(([n, a]) => {
        U(a, re(r, n), t, o);
      });
    });
  };
  var re = (e2, r) => {
    let t = e2;
    return r.split("-").forEach((o) => {
      t.nextPart.has(o) || t.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t = t.nextPart.get(o);
    }), t;
  };
  var Se = (e2) => e2.isThemeGetter;
  var ke = (e2, r) => r ? e2.map(([t, o]) => {
    let s = o.map((n) => typeof n == "string" ? r + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [r + a, i])) : n);
    return [t, s];
  }) : e2;
  var Re = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n, a) => {
      t.set(n, a), r++, r > e2 && (r = 0, o = t, t = /* @__PURE__ */ new Map());
    };
    return { get(n) {
      let a = t.get(n);
      if (a !== void 0) return a;
      if ((a = o.get(n)) !== void 0) return s(n, a), a;
    }, set(n, a) {
      t.has(n) ? t.set(n, a) : s(n, a);
    } };
  };
  var Ae = (e2) => {
    let { separator: r, experimentalParseClassName: t } = e2, o = r.length === 1, s = r[0], n = r.length, a = (i) => {
      let d = [], c = 0, u = 0, g;
      for (let p = 0; p < i.length; p++) {
        let x2 = i[p];
        if (c === 0) {
          if (x2 === s && (o || i.slice(p, p + n) === r)) {
            d.push(i.slice(u, p)), u = p + n;
            continue;
          }
          if (x2 === "/") {
            g = p;
            continue;
          }
        }
        x2 === "[" ? c++ : x2 === "]" && c--;
      }
      let m = d.length === 0 ? i : i.substring(u), v2 = m.startsWith("!"), w2 = v2 ? m.substring(1) : m, h2 = g && g > u ? g - u : void 0;
      return { modifiers: d, hasImportantModifier: v2, baseClassName: w2, maybePostfixModifierPosition: h2 };
    };
    return t ? (i) => t({ className: i, parseClassName: a }) : a;
  };
  var Pe = (e2) => {
    if (e2.length <= 1) return e2;
    let r = [], t = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
    }), r.push(...t.sort()), r;
  };
  var ze = (e2) => ({ cache: Re(e2.cacheSize), parseClassName: Ae(e2), ...ve(e2) });
  var Me = /\s+/;
  var Ne = (e2, r) => {
    let { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: s } = r, n = [], a = e2.trim().split(Me), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: g, baseClassName: m, maybePostfixModifierPosition: v2 } = t(c), w2 = !!v2, h2 = o(w2 ? m.substring(0, v2) : m);
      if (!h2) {
        if (!w2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (h2 = o(m), !h2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w2 = false;
      }
      let p = Pe(u).join(":"), x2 = g ? p + "!" : p, C = x2 + h2;
      if (n.includes(C)) continue;
      n.push(C);
      let N2 = s(h2, w2);
      for (let P = 0; P < N2.length; ++P) {
        let L = N2[P];
        n.push(x2 + L);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Te() {
    let e2 = 0, r, t, o = "";
    for (; e2 < arguments.length; ) (r = arguments[e2++]) && (t = ne(r)) && (o && (o += " "), o += t);
    return o;
  }
  var ne = (e2) => {
    if (typeof e2 == "string") return e2;
    let r, t = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (r = ne(e2[o])) && (t && (t += " "), t += r);
    return t;
  };
  function Be(e2, ...r) {
    let t, o, s, n = a;
    function a(d) {
      let c = r.reduce((u, g) => g(u), e2());
      return t = ze(c), o = t.cache.get, s = t.cache.set, n = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ne(d, t);
      return s(d, u), u;
    }
    return function() {
      return n(Te.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let r = (t) => t[e2] || [];
    return r.isThemeGetter = true, r;
  };
  var se = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ie = /^\d+\/\d+$/;
  var _e = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var Ee = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Le = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var Ve = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var Ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var je = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => z(e2) || _e.has(e2) || Ie.test(e2);
  var R = (e2) => M(e2, "length", Ke);
  var z = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var F = (e2) => M(e2, "number", z);
  var B = (e2) => !!e2 && Number.isInteger(Number(e2));
  var Oe = (e2) => e2.endsWith("%") && z(e2.slice(0, -1));
  var l = (e2) => se.test(e2);
  var A = (e2) => Ee.test(e2);
  var We = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var $e = (e2) => M(e2, We, ie);
  var De = (e2) => M(e2, "position", ie);
  var He = /* @__PURE__ */ new Set(["image", "url"]);
  var Fe = (e2) => M(e2, He, qe);
  var Ue = (e2) => M(e2, "", Ze);
  var I = () => true;
  var M = (e2, r, t) => {
    let o = se.exec(e2);
    return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : false;
  };
  var Ke = (e2) => Le.test(e2) && !Ve.test(e2);
  var ie = () => false;
  var Ze = (e2) => Ge.test(e2);
  var qe = (e2) => je.test(e2);
  var Ye = () => {
    let e2 = f("colors"), r = f("spacing"), t = f("blur"), o = f("brightness"), s = f("borderColor"), n = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), g = f("invert"), m = f("gap"), v2 = f("gradientColorStops"), w2 = f("gradientColorStopPositions"), h2 = f("inset"), p = f("margin"), x2 = f("opacity"), C = f("padding"), N2 = f("saturate"), P = f("scale"), L = f("sepia"), K2 = f("skew"), Z = f("space"), q2 = f("translate"), W2 = () => ["auto", "contain", "none"], $2 = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", l, r], b2 = () => [l, r], Y2 = () => ["", k, R], V = () => ["auto", z, l], J2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G2 = () => ["solid", "dashed", "dotted", "double", "none"], X2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T2 = () => ["", "0", l], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S3 = () => [z, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [I], spacing: [k, R], blur: ["none", "", A, l], brightness: S3(), borderColor: [e2], borderRadius: ["none", "", "full", A, l], borderSpacing: b2(), borderWidth: Y2(), contrast: S3(), grayscale: T2(), hueRotate: S3(), invert: T2(), gap: b2(), gradientColorStops: [e2], gradientColorStopPositions: [Oe, R], inset: D(), margin: D(), opacity: S3(), padding: b2(), saturate: S3(), scale: S3(), sepia: T2(), skew: S3(), space: b2(), translate: b2() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [A] }], "break-after": [{ "break-after": Q() }], "break-before": [{ "break-before": Q() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J2(), l] }], overflow: [{ overflow: $2() }], "overflow-x": [{ "overflow-x": $2() }], "overflow-y": [{ "overflow-y": $2() }], overscroll: [{ overscroll: W2() }], "overscroll-x": [{ "overscroll-x": W2() }], "overscroll-y": [{ "overscroll-y": W2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [h2] }], "inset-x": [{ "inset-x": [h2] }], "inset-y": [{ "inset-y": [h2] }], start: [{ start: [h2] }], end: [{ end: [h2] }], top: [{ top: [h2] }], right: [{ right: [h2] }], bottom: [{ bottom: [h2] }], left: [{ left: [h2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", B, l] }], basis: [{ basis: D() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: T2() }], shrink: [{ shrink: T2() }], order: [{ order: ["first", "last", "none", B, l] }], "grid-cols": [{ "grid-cols": [I] }], "col-start-end": [{ col: ["auto", { span: ["full", B, l] }, l] }], "col-start": [{ "col-start": V() }], "col-end": [{ "col-end": V() }], "grid-rows": [{ "grid-rows": [I] }], "row-start-end": [{ row: ["auto", { span: [B, l] }, l] }], "row-start": [{ "row-start": V() }], "row-end": [{ "row-end": V() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [m] }], "gap-x": [{ "gap-x": [m] }], "gap-y": [{ "gap-y": [m] }], "justify-content": [{ justify: ["normal", ...H2()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...H2(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...H2(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [C] }], px: [{ px: [C] }], py: [{ py: [C] }], ps: [{ ps: [C] }], pe: [{ pe: [C] }], pt: [{ pt: [C] }], pr: [{ pr: [C] }], pb: [{ pb: [C] }], pl: [{ pl: [C] }], m: [{ m: [p] }], mx: [{ mx: [p] }], my: [{ my: [p] }], ms: [{ ms: [p] }], me: [{ me: [p] }], mt: [{ mt: [p] }], mr: [{ mr: [p] }], mb: [{ mb: [p] }], ml: [{ ml: [p] }], "space-x": [{ "space-x": [Z] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r] }], "min-w": [{ "min-w": [l, r, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, r, "none", "full", "min", "max", "fit", "prose", { screen: [A] }, A] }], h: [{ h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, r, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", A, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", F] }], "font-family": [{ font: [I] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", z, F] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [x2] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [x2] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...G2(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b2() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [x2] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J2(), De] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", $e] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Fe] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [w2] }], "gradient-via-pos": [{ via: [w2] }], "gradient-to-pos": [{ to: [w2] }], "gradient-from": [{ from: [v2] }], "gradient-via": [{ via: [v2] }], "gradient-to": [{ to: [v2] }], rounded: [{ rounded: [n] }], "rounded-s": [{ "rounded-s": [n] }], "rounded-e": [{ "rounded-e": [n] }], "rounded-t": [{ "rounded-t": [n] }], "rounded-r": [{ "rounded-r": [n] }], "rounded-b": [{ "rounded-b": [n] }], "rounded-l": [{ "rounded-l": [n] }], "rounded-ss": [{ "rounded-ss": [n] }], "rounded-se": [{ "rounded-se": [n] }], "rounded-ee": [{ "rounded-ee": [n] }], "rounded-es": [{ "rounded-es": [n] }], "rounded-tl": [{ "rounded-tl": [n] }], "rounded-tr": [{ "rounded-tr": [n] }], "rounded-br": [{ "rounded-br": [n] }], "rounded-bl": [{ "rounded-bl": [n] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [x2] }], "border-style": [{ border: [...G2(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [x2] }], "divide-style": [{ divide: G2() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...G2()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [x2] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", A, Ue] }], "shadow-color": [{ shadow: [I] }], opacity: [{ opacity: [x2] }], "mix-blend": [{ "mix-blend": [...X2(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": X2() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", A, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [g] }], saturate: [{ saturate: [N2] }], sepia: [{ sepia: [L] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [g] }], "backdrop-opacity": [{ "backdrop-opacity": [x2] }], "backdrop-saturate": [{ "backdrop-saturate": [N2] }], "backdrop-sepia": [{ "backdrop-sepia": [L] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: S3() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: S3() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [P] }], "scale-x": [{ "scale-x": [P] }], "scale-y": [{ "scale-y": [P] }], rotate: [{ rotate: [B, l] }], "translate-x": [{ "translate-x": [q2] }], "translate-y": [{ "translate-y": [q2] }], "skew-x": [{ "skew-x": [K2] }], "skew-y": [{ "skew-y": [K2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b2() }], "scroll-mx": [{ "scroll-mx": b2() }], "scroll-my": [{ "scroll-my": b2() }], "scroll-ms": [{ "scroll-ms": b2() }], "scroll-me": [{ "scroll-me": b2() }], "scroll-mt": [{ "scroll-mt": b2() }], "scroll-mr": [{ "scroll-mr": b2() }], "scroll-mb": [{ "scroll-mb": b2() }], "scroll-ml": [{ "scroll-ml": b2() }], "scroll-p": [{ "scroll-p": b2() }], "scroll-px": [{ "scroll-px": b2() }], "scroll-py": [{ "scroll-py": b2() }], "scroll-ps": [{ "scroll-ps": b2() }], "scroll-pe": [{ "scroll-pe": b2() }], "scroll-pt": [{ "scroll-pt": b2() }], "scroll-pr": [{ "scroll-pr": b2() }], "scroll-pb": [{ "scroll-pb": b2() }], "scroll-pl": [{ "scroll-pl": b2() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, F] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var ae = Be(Ye);
  function _(...e2) {
    return ae(j(e2));
  }
  function le(e2, r) {
    if (typeof e2 == "function") return e2(r);
    e2 != null && (e2.current = r);
  }
  function ce(...e2) {
    return (r) => {
      let t = false, o = e2.map((s) => {
        let n = le(s, r);
        return !t && typeof n == "function" && (t = true), n;
      });
      if (t) return () => {
        for (let s = 0; s < o.length; s++) {
          let n = o[s];
          typeof n == "function" ? n() : le(e2[s], null);
        }
      };
    };
  }
  var Xe = /* @__PURE__ */ Symbol.for("react.lazy");
  var O = y[" use ".trim().toString()];
  function Qe(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ue(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === Xe && "_payload" in e2 && Qe(e2._payload);
  }
  function et(e2) {
    let r = tt(e2), t = y.forwardRef((o, s) => {
      let { children: n, ...a } = o;
      ue(n) && typeof O == "function" && (n = O(n._payload));
      let i = y.Children.toArray(n), d = i.find(ot);
      if (d) {
        let c = d.props.children, u = i.map((g) => g === d ? y.Children.count(c) > 1 ? y.Children.only(null) : y.isValidElement(c) ? c.props.children : null : g);
        return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: y.isValidElement(c) ? y.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: n });
    });
    return t.displayName = `${e2}.Slot`, t;
  }
  var E = et("Slot");
  function tt(e2) {
    let r = y.forwardRef((t, o) => {
      let { children: s, ...n } = t;
      if (ue(s) && typeof O == "function" && (s = O(s._payload)), y.isValidElement(s)) {
        let a = st(s), i = nt(n, s.props);
        return s.type !== y.Fragment && (i.ref = o ? ce(o, a) : a), y.cloneElement(s, i);
      }
      return y.Children.count(s) > 1 ? y.Children.only(null) : null;
    });
    return r.displayName = `${e2}.SlotClone`, r;
  }
  var rt = /* @__PURE__ */ Symbol("radix.slottable");
  function ot(e2) {
    return y.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === rt;
  }
  function nt(e2, r) {
    let t = { ...r };
    for (let o in r) {
      let s = e2[o], n = r[o];
      /^on[A-Z]/.test(o) ? s && n ? t[o] = (...i) => {
        let d = n(...i);
        return s(...i), d;
      } : s && (t[o] = s) : o === "style" ? t[o] = { ...s, ...n } : o === "className" && (t[o] = [s, n].filter(Boolean).join(" "));
    }
    return { ...e2, ...t };
  }
  function st(e2) {
    let r = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning;
    return t ? e2.ref : (r = Object.getOwnPropertyDescriptor(e2, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var pe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var fe = j;
  var be = (e2, r) => (t) => {
    var o;
    if (r?.variants == null) return fe(e2, t?.class, t?.className);
    let { variants: s, defaultVariants: n } = r, a = Object.keys(s).map((c) => {
      let u = t?.[c], g = n?.[c];
      if (u === null) return null;
      let m = pe(u) || pe(g);
      return s[c][m];
    }), i = t && Object.entries(t).reduce((c, u) => {
      let [g, m] = u;
      return m === void 0 || (c[g] = m), c;
    }, {}), d = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: g, className: m, ...v2 } = u;
      return Object.entries(v2).every((w2) => {
        let [h2, p] = w2;
        return Array.isArray(p) ? p.includes({ ...n, ...i }[h2]) : { ...n, ...i }[h2] === p;
      }) ? [...c, g, m] : c;
    }, []);
    return fe(e2, a, d, t?.class, t?.className);
  };
  var at = be("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ge = (0, import_react.forwardRef)(({ className: e2, variant: r, size: t, asChild: o = false, ...s }, n) => (0, import_jsx_runtime2.jsx)(o ? E : "button", { className: _(at({ variant: r, size: t, className: e2 })), ref: n, ...s }));
  ge.displayName = "Button";
  var ct = { primary: "border-ds-ink bg-ds-ink text-ds-page shadow-ds-control", secondary: "border-ds-hairline bg-ds-white text-ds-ink shadow-ds-control", ghost: "border-transparent bg-transparent text-ds-ink", destructive: "border-ds-redBorder bg-ds-white text-ds-red shadow-ds-control", success: "border-ds-teal bg-ds-white text-ds-teal shadow-ds-control" };
  function dt({ variant: e2 = "primary", compact: r = false, fullWidth: t = false, large: o = false, mobileLarge: s = false, className: n }) {
    return _("box-border inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border font-text text-[13px] font-normal leading-none tracking-[-0.01em] transition-[background-color,border-color,color,transform] [transition-duration:120ms]", "hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4", "disabled:cursor-default disabled:scale-100 disabled:border-ds-hairline disabled:bg-transparent disabled:text-ds-ink4 disabled:shadow-none", r ? "px-3" : "px-3 md:px-4", t && "flex w-full hover:scale-[1.02]", o && "h-[52px] rounded-lg text-[15px]", s && "max-md:flex max-md:h-[52px] max-md:w-full max-md:rounded-lg max-md:text-[15px] max-md:hover:scale-[1.02]", ct[e2], n);
  }
  var he = (0, import_react2.forwardRef)(({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n, asChild: a = false, iconBefore: i, iconAfter: d, type: c = "button", children: u, ...g }, m) => {
    let v2 = dt({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n });
    return a ? (0, import_jsx_runtime3.jsx)(E, { ref: m, className: v2, ...g, children: u }) : (0, import_jsx_runtime3.jsxs)("button", { ref: m, type: c, className: v2, ...g, children: [i, u, d] });
  });
  he.displayName = "DsButton";
  var ye = (0, import_react2.forwardRef)(({ label: e2, className: r, asChild: t = false, type: o = "button", ...s }, n) => (0, import_jsx_runtime3.jsx)(t ? E : "button", { ref: n, type: t ? void 0 : o, "aria-label": e2, title: e2, className: _("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded border-0 bg-transparent p-2 leading-none text-ds-ink transition-colors [transition-duration:120ms] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", r), ...s }));
  ye.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var mu = Object.create;
  var Mo = Object.defineProperty;
  var xu = Object.getOwnPropertyDescriptor;
  var Lu = Object.getOwnPropertyNames;
  var hu = Object.getPrototypeOf;
  var gu = Object.prototype.hasOwnProperty;
  var Iu = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var Cu = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let r of Lu(a)) !gu.call(e2, r) && r !== t && Mo(e2, r, { get: () => a[r], enumerable: !(o = xu(a, r)) || o.enumerable });
    return e2;
  };
  var Ao = (e2, a, t) => (t = e2 != null ? mu(hu(e2)) : {}, Cu(a || !e2 || !e2.__esModule ? Mo(t, "default", { value: e2, enumerable: true }) : t, e2));
  var oo = Iu((Lc, Wa) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function a() {
        for (var r = "", u = 0; u < arguments.length; u++) {
          var l2 = arguments[u];
          l2 && (r = o(r, t(l2)));
        }
        return r;
      }
      function t(r) {
        if (typeof r == "string" || typeof r == "number") return r;
        if (typeof r != "object") return "";
        if (Array.isArray(r)) return a.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) return r.toString();
        var u = "";
        for (var l2 in r) e2.call(r, l2) && r[l2] && (u = o(u, l2));
        return u;
      }
      function o(r, u) {
        return u ? r ? r + " " + u : r + u : r;
      }
      typeof Wa < "u" && Wa.exports ? (a.default = a, Wa.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  function xa() {
    let e2 = (0, import_react5.useRef)(null), a = (0, import_react5.useRef)(false), t = (o) => {
      e2.current?.pointerId === o.pointerId && (e2.current = null, delete o.currentTarget.dataset.dragging, o.currentTarget.hasPointerCapture(o.pointerId) && o.currentTarget.releasePointerCapture(o.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (o) => {
      o.currentTarget.toggleAttribute("data-can-drag", o.pointerType === "mouse" && o.currentTarget.scrollWidth > o.currentTarget.clientWidth);
    }, onPointerDown: (o) => {
      a.current = false, !(o.pointerType !== "mouse" || o.button !== 0 || o.currentTarget.scrollWidth <= o.currentTarget.clientWidth) && o.target.closest("[data-drag-scroll], dialog") === o.currentTarget && (e2.current = { pointerId: o.pointerId, startX: o.clientX, scrollLeft: o.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (o) => {
      let r = e2.current;
      if (!r || r.pointerId !== o.pointerId) return;
      let u = o.clientX - r.startX;
      !r.active && Math.abs(u) < 5 || (r.active || (r.active = true, a.current = true, o.currentTarget.dataset.dragging = "", o.currentTarget.setPointerCapture(o.pointerId)), o.preventDefault(), o.currentTarget.scrollLeft = r.scrollLeft - u);
    }, onPointerUp: t, onPointerCancel: t, onLostPointerCapture: t, onPointerLeave: () => {
      e2.current?.active || (e2.current = null);
    }, onDragStart: (o) => o.preventDefault(), onClickCapture: (o) => {
      !a.current || o.detail === 0 || (a.current = false, o.preventDefault(), o.stopPropagation());
    } };
  }
  function q(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function wu({ children: e2, width: a = "fluid", className: t, ...o }) {
    return (0, import_jsx_runtime4.jsx)("main", { ...o, className: t ? `file-card ${t}` : "file-card", "data-width": a, children: e2 });
  }
  var ku = ["https:", "http:", "mailto:", "tel:"];
  function ja(e2) {
    if (/^[#./]/.test(e2)) return e2;
    try {
      return ku.includes(new URL(e2).protocol) ? e2 : void 0;
    } catch {
      return;
    }
  }
  function Pu({ title: e2, fact: a, factKnown: t = false, intro: o }) {
    return (0, import_jsx_runtime4.jsxs)("header", { className: "file-header", children: [(0, import_jsx_runtime4.jsx)("h1", { className: "file-title", children: e2 }), a && (0, import_jsx_runtime4.jsx)("p", { className: t ? "file-fact is-known" : "file-fact", children: a }), o && (0, import_jsx_runtime4.jsx)("p", { className: "file-intro", children: o })] });
  }
  function vu({ label: e2, heading: a = false, children: t }) {
    let o = import_react4.default.useId();
    return (0, import_jsx_runtime4.jsxs)("section", { className: "file-group", "aria-labelledby": o, children: [(0, import_jsx_runtime4.jsx)("h2", { id: o, className: a ? "file-group-heading" : "file-group-label", children: e2 }), t] });
  }
  function Mu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("div", { className: "file-rows", children: e2 });
  }
  function Au({ number: e2, thumbnail: a, name: t, detail: o, value: r, valueKnown: u = false }) {
    let l2 = e2 !== void 0 ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : a ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot", children: (0, import_jsx_runtime4.jsx)("img", { src: a.src, alt: a.alt, style: q(a), loading: "lazy" }) }) : null;
    return (0, import_jsx_runtime4.jsxs)("div", { className: "file-row", children: [l2, (0, import_jsx_runtime4.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: t }), o && (0, import_jsx_runtime4.jsx)("span", { className: "file-row-detail", children: o })] }), r && (0, import_jsx_runtime4.jsx)("span", { className: u ? "file-row-value file-known" : "file-row-value", children: r })] });
  }
  function Fu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("div", { className: "file-text", children: e2 });
  }
  function Bu({ children: e2, sub: a }) {
    return (0, import_jsx_runtime4.jsxs)("div", { className: "file-heading", children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: e2 }), a && (0, import_jsx_runtime4.jsx)("span", { className: "file-secondary", children: a })] });
  }
  function Ru({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-p", children: e2 });
  }
  function Tu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-key file-bar", children: e2 });
  }
  function Uu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-caption", children: e2 });
  }
  function Ge2({ href: e2, children: a }) {
    let t = ja(e2);
    return t ? (0, import_jsx_runtime4.jsx)("a", { className: "file-link", href: t, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(t) ? "_blank" : void 0, rel: "noopener noreferrer", children: a }) : (0, import_jsx_runtime4.jsx)("span", { className: "file-link", children: a });
  }
  function re2({ items: e2, label: a, layout: t = "grid", bleed: o = t === "strip" && e2.length > 1 }) {
    let r = xa(), u = ["file-photos", e2.length === 1 && "is-single", t === "strip" && o && "file-bleed"].filter(Boolean).join(" ");
    return (0, import_jsx_runtime4.jsx)("div", { ...t === "strip" ? r : {}, className: u, "data-layout": t, role: "region", "aria-label": a, tabIndex: t === "strip" && e2.length > 1 ? 0 : void 0, children: e2.map((l2) => (0, import_jsx_runtime4.jsx)("img", { src: l2.src, alt: l2.alt, style: q(l2), loading: "lazy" }, l2.src)) });
  }
  function Gu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("footer", { className: "file-closing", children: e2 });
  }
  function ue2(e2, a) {
    return e2 == null || a == null ? NaN : e2 < a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function et2(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function La(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = ue2, t = (d, s) => ue2(e2(d), s), o = (d, s) => e2(d) - s) : (a = e2 === ue2 || e2 === et2 ? e2 : Wu, t = e2, o = e2);
    function r(d, s, f2 = 0, n = d.length) {
      if (f2 < n) {
        if (a(s, s) !== 0) return n;
        do {
          let i = f2 + n >>> 1;
          t(d[i], s) < 0 ? f2 = i + 1 : n = i;
        } while (f2 < n);
      }
      return f2;
    }
    function u(d, s, f2 = 0, n = d.length) {
      if (f2 < n) {
        if (a(s, s) !== 0) return n;
        do {
          let i = f2 + n >>> 1;
          t(d[i], s) <= 0 ? f2 = i + 1 : n = i;
        } while (f2 < n);
      }
      return f2;
    }
    function l2(d, s, f2 = 0, n = d.length) {
      let i = r(d, s, f2, n - 1);
      return i > f2 && o(d[i - 1], s) > -o(d[i], s) ? i - 1 : i;
    }
    return { left: r, center: l2, right: u };
  }
  function Wu() {
    return 0;
  }
  function at2(e2) {
    return e2 === null ? NaN : +e2;
  }
  var Bo = La(ue2);
  var Ro = Bo.right;
  var Vu = Bo.left;
  var zu = La(at2).center;
  var ot2 = Math.sqrt(50);
  var rt2 = Math.sqrt(10);
  var ut2 = Math.sqrt(2);
  function X(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function $(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function H() {
  }
  var _2 = 0.7;
  var se2 = 1 / _2;
  var ye2 = "\\s*([+-]?\\d+)\\s*";
  var Ve2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var U2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var $u = /^#([0-9a-f]{3,8})$/;
  var _u = new RegExp(`^rgb\\(${ye2},${ye2},${ye2}\\)$`);
  var Yu = new RegExp(`^rgb\\(${U2},${U2},${U2}\\)$`);
  var Qu = new RegExp(`^rgba\\(${ye2},${ye2},${ye2},${Ve2}\\)$`);
  var Ju = new RegExp(`^rgba\\(${U2},${U2},${U2},${Ve2}\\)$`);
  var ju = new RegExp(`^hsl\\(${Ve2},${U2},${U2}\\)$`);
  var el = new RegExp(`^hsla\\(${Ve2},${U2},${U2},${Ve2}\\)$`);
  var qo = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  X(H, Y, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: Uo, formatHex: Uo, formatHex8: al, formatHsl: tl, formatRgb: Ho, toString: Ho });
  function Uo() {
    return this.rgb().formatHex();
  }
  function al() {
    return this.rgb().formatHex8();
  }
  function tl() {
    return Vo(this).formatHsl();
  }
  function Ho() {
    return this.rgb().formatRgb();
  }
  function Y(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = $u.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? Oo(a) : t === 3 ? new v(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? Sa(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? Sa(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = _u.exec(e2)) ? new v(a[1], a[2], a[3], 1) : (a = Yu.exec(e2)) ? new v(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = Qu.exec(e2)) ? Sa(a[1], a[2], a[3], a[4]) : (a = Ju.exec(e2)) ? Sa(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = ju.exec(e2)) ? Go(a[1], a[2] / 100, a[3] / 100, 1) : (a = el.exec(e2)) ? Go(a[1], a[2] / 100, a[3] / 100, a[4]) : qo.hasOwnProperty(e2) ? Oo(qo[e2]) : e2 === "transparent" ? new v(NaN, NaN, NaN, 0) : null;
  }
  function Oo(e2) {
    return new v(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Sa(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new v(e2, a, t, o);
  }
  function ze2(e2) {
    return e2 instanceof H || (e2 = Y(e2)), e2 ? (e2 = e2.rgb(), new v(e2.r, e2.g, e2.b, e2.opacity)) : new v();
  }
  function be2(e2, a, t, o) {
    return arguments.length === 1 ? ze2(e2) : new v(e2, a, t, o ?? 1);
  }
  function v(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  X(v, be2, $(H, { brighter(e2) {
    return e2 = e2 == null ? se2 : Math.pow(se2, e2), new v(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? _2 : Math.pow(_2, e2), new v(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new v(de2(this.r), de2(this.g), de2(this.b), ba(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: No, formatHex: No, formatHex8: ol, formatRgb: Eo, toString: Eo }));
  function No() {
    return `#${le2(this.r)}${le2(this.g)}${le2(this.b)}`;
  }
  function ol() {
    return `#${le2(this.r)}${le2(this.g)}${le2(this.b)}${le2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function Eo() {
    let e2 = ba(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${de2(this.r)}, ${de2(this.g)}, ${de2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function ba(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function de2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function le2(e2) {
    return e2 = de2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function Go(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new T(e2, a, t, o);
  }
  function Vo(e2) {
    if (e2 instanceof T) return new T(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof H || (e2 = Y(e2)), !e2) return new T();
    if (e2 instanceof T) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = Math.min(a, t, o), u = Math.max(a, t, o), l2 = NaN, d = u - r, s = (u + r) / 2;
    return d ? (a === u ? l2 = (t - o) / d + (t < o) * 6 : t === u ? l2 = (o - a) / d + 2 : l2 = (a - t) / d + 4, d /= s < 0.5 ? u + r : 2 - u - r, l2 *= 60) : d = s > 0 && s < 1 ? 0 : l2, new T(l2, d, s, e2.opacity);
  }
  function Xe2(e2, a, t, o) {
    return arguments.length === 1 ? Vo(e2) : new T(e2, a, t, o ?? 1);
  }
  function T(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  X(T, Xe2, $(H, { brighter(e2) {
    return e2 = e2 == null ? se2 : Math.pow(se2, e2), new T(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? _2 : Math.pow(_2, e2), new T(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, r = 2 * t - o;
    return new v(dt2(e2 >= 240 ? e2 - 240 : e2 + 120, r, o), dt2(e2, r, o), dt2(e2 < 120 ? e2 + 240 : e2 - 120, r, o), this.opacity);
  }, clamp() {
    return new T(Wo(this.h), ya(this.s), ya(this.l), ba(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = ba(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${Wo(this.h)}, ${ya(this.s) * 100}%, ${ya(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function Wo(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function ya(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function dt2(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var wa = Math.PI / 180;
  var ka = 180 / Math.PI;
  var Pa = 18;
  var zo = 0.96422;
  var Xo = 1;
  var Ko = 0.82521;
  var Zo = 4 / 29;
  var we2 = 6 / 29;
  var $o = 3 * we2 * we2;
  var rl = we2 * we2 * we2;
  function _o(e2) {
    if (e2 instanceof O2) return new O2(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof K) return Yo(e2);
    e2 instanceof v || (e2 = ze2(e2));
    var a = it2(e2.r), t = it2(e2.g), o = it2(e2.b), r = st2((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / Xo), u, l2;
    return a === t && t === o ? u = l2 = r : (u = st2((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / zo), l2 = st2((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / Ko)), new O2(116 * r - 16, 500 * (u - r), 200 * (r - l2), e2.opacity);
  }
  function ke2(e2, a, t, o) {
    return arguments.length === 1 ? _o(e2) : new O2(e2, a, t, o ?? 1);
  }
  function O2(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  X(O2, ke2, $(H, { brighter(e2) {
    return new O2(this.l + Pa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new O2(this.l - Pa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = zo * ft(a), e2 = Xo * ft(e2), t = Ko * ft(t), new v(nt2(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), nt2(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), nt2(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function st2(e2) {
    return e2 > rl ? Math.pow(e2, 1 / 3) : e2 / $o + Zo;
  }
  function ft(e2) {
    return e2 > we2 ? e2 * e2 * e2 : $o * (e2 - Zo);
  }
  function nt2(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function it2(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function ul(e2) {
    if (e2 instanceof K) return new K(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof O2 || (e2 = _o(e2)), e2.a === 0 && e2.b === 0) return new K(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * ka;
    return new K(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function Ke2(e2, a, t, o) {
    return arguments.length === 1 ? ul(e2) : new K(e2, a, t, o ?? 1);
  }
  function K(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function Yo(e2) {
    if (isNaN(e2.h)) return new O2(e2.l, 0, 0, e2.opacity);
    var a = e2.h * wa;
    return new O2(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  X(K, Ke2, $(H, { brighter(e2) {
    return new K(this.h, this.c, this.l + Pa * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new K(this.h, this.c, this.l - Pa * (e2 ?? 1), this.opacity);
  }, rgb() {
    return Yo(this).rgb();
  } }));
  var er = -0.14861;
  var ct2 = 1.78277;
  var pt = -0.29227;
  var va = -0.90649;
  var Ze2 = 1.97294;
  var Qo = Ze2 * va;
  var Jo = Ze2 * ct2;
  var jo = ct2 * pt - va * er;
  function ll(e2) {
    if (e2 instanceof fe2) return new fe2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof v || (e2 = ze2(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = (jo * o + Qo * a - Jo * t) / (jo + Qo - Jo), u = o - r, l2 = (Ze2 * (t - r) - pt * u) / va, d = Math.sqrt(l2 * l2 + u * u) / (Ze2 * r * (1 - r)), s = d ? Math.atan2(l2, u) * ka - 120 : NaN;
    return new fe2(s < 0 ? s + 360 : s, d, r, e2.opacity);
  }
  function Pe2(e2, a, t, o) {
    return arguments.length === 1 ? ll(e2) : new fe2(e2, a, t, o ?? 1);
  }
  function fe2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  X(fe2, Pe2, $(H, { brighter(e2) {
    return e2 = e2 == null ? se2 : Math.pow(se2, e2), new fe2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? _2 : Math.pow(_2, e2), new fe2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * wa, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), r = Math.sin(e2);
    return new v(255 * (a + t * (er * o + ct2 * r)), 255 * (a + t * (pt * o + va * r)), 255 * (a + t * (Ze2 * o)), this.opacity);
  } }));
  function mt(e2, a, t, o, r) {
    var u = e2 * e2, l2 = u * e2;
    return ((1 - 3 * e2 + 3 * u - l2) * a + (4 - 6 * u + 3 * l2) * t + (1 + 3 * e2 + 3 * u - 3 * l2) * o + l2 * r) / 6;
  }
  function ar(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), r = e2[o], u = e2[o + 1], l2 = o > 0 ? e2[o - 1] : 2 * r - u, d = o < a - 1 ? e2[o + 2] : 2 * u - r;
      return mt((t - o / a) * a, l2, r, u, d);
    };
  }
  function tr(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), r = e2[(o + a - 1) % a], u = e2[o % a], l2 = e2[(o + 1) % a], d = e2[(o + 2) % a];
      return mt((t - o / a) * a, r, u, l2, d);
    };
  }
  var ve2 = (e2) => () => e2;
  function or(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function dl(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function Me2(e2, a) {
    var t = a - e2;
    return t ? or(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : ve2(isNaN(e2) ? a : e2);
  }
  function rr(e2) {
    return (e2 = +e2) == 1 ? y2 : function(a, t) {
      return t - a ? dl(a, t, e2) : ve2(isNaN(a) ? t : a);
    };
  }
  function y2(e2, a) {
    var t = a - e2;
    return t ? or(e2, t) : ve2(isNaN(e2) ? a : e2);
  }
  var Ae2 = (function e(a) {
    var t = rr(a);
    function o(r, u) {
      var l2 = t((r = be2(r)).r, (u = be2(u)).r), d = t(r.g, u.g), s = t(r.b, u.b), f2 = y2(r.opacity, u.opacity);
      return function(n) {
        return r.r = l2(n), r.g = d(n), r.b = s(n), r.opacity = f2(n), r + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function ur(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), r = new Array(t), u = new Array(t), l2, d;
      for (l2 = 0; l2 < t; ++l2) d = be2(a[l2]), o[l2] = d.r || 0, r[l2] = d.g || 0, u[l2] = d.b || 0;
      return o = e2(o), r = e2(r), u = e2(u), d.opacity = 1, function(s) {
        return d.r = o(s), d.g = r(s), d.b = u(s), d + "";
      };
    };
  }
  var sl = ur(ar);
  var fl = ur(tr);
  var Lt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var xt = new RegExp(Lt.source, "g");
  function $e2(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function cr(e2) {
    return function(a, t) {
      var o = e2((a = Xe2(a)).h, (t = Xe2(t)).h), r = y2(a.s, t.s), u = y2(a.l, t.l), l2 = y2(a.opacity, t.opacity);
      return function(d) {
        return a.h = o(d), a.s = r(d), a.l = u(d), a.opacity = l2(d), a + "";
      };
    };
  }
  var ht = cr(Me2);
  var gt = cr(y2);
  function Ma(e2, a) {
    var t = y2((e2 = ke2(e2)).l, (a = ke2(a)).l), o = y2(e2.a, a.a), r = y2(e2.b, a.b), u = y2(e2.opacity, a.opacity);
    return function(l2) {
      return e2.l = t(l2), e2.a = o(l2), e2.b = r(l2), e2.opacity = u(l2), e2 + "";
    };
  }
  function pr(e2) {
    return function(a, t) {
      var o = e2((a = Ke2(a)).h, (t = Ke2(t)).h), r = y2(a.c, t.c), u = y2(a.l, t.l), l2 = y2(a.opacity, t.opacity);
      return function(d) {
        return a.h = o(d), a.c = r(d), a.l = u(d), a.opacity = l2(d), a + "";
      };
    };
  }
  var It = pr(Me2);
  var Ct = pr(y2);
  function mr(e2) {
    return (function a(t) {
      t = +t;
      function o(r, u) {
        var l2 = e2((r = Pe2(r)).h, (u = Pe2(u)).h), d = y2(r.s, u.s), s = y2(r.l, u.l), f2 = y2(r.opacity, u.opacity);
        return function(n) {
          return r.h = l2(n), r.s = d(n), r.l = s(Math.pow(n, t)), r.opacity = f2(n), r + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var St = mr(Me2);
  var yt = mr(y2);
  function hr(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function ie2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function N(e2) {
    return e2 = ie2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function gr(e2, a) {
    return function(t, o) {
      for (var r = t.length, u = [], l2 = 0, d = e2[0], s = 0; r > 0 && d > 0 && (s + d + 1 > o && (d = Math.max(1, o - s)), u.push(t.substring(r -= d, r + d)), !((s += d + 1) > o)); ) d = e2[l2 = (l2 + 1) % e2.length];
      return u.reverse().join(a);
    };
  }
  function Ir(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var Ll = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function J(e2) {
    if (!(a = Ll.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new Aa({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  J.prototype = Aa.prototype;
  function Aa(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  Aa.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function Cr(e2) {
    e: for (var a = e2.length, t = 1, o = -1, r; t < a; ++t) switch (e2[t]) {
      case ".":
        o = r = t;
        break;
      case "0":
        o === 0 && (o = t), r = t;
        break;
      default:
        if (!+e2[t]) break e;
        o > 0 && (o = 0);
        break;
    }
    return o > 0 ? e2.slice(0, o) + e2.slice(r + 1) : e2;
  }
  var vt2;
  function Sr(e2, a) {
    var t = ie2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1], u = r - (vt2 = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, l2 = o.length;
    return u === l2 ? o : u > l2 ? o + new Array(u - l2 + 1).join("0") : u > 0 ? o.slice(0, u) + "." + o.slice(u) : "0." + new Array(1 - u).join("0") + ie2(e2, Math.max(0, a + u - 1))[0];
  }
  function Mt(e2, a) {
    var t = ie2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1];
    return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
  }
  var At = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: hr, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => Mt(e2 * 100, a), r: Mt, s: Sr, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Ft(e2) {
    return e2;
  }
  var yr = Array.prototype.map;
  var br = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function wr(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? Ft : gr(yr.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", r = e2.decimal === void 0 ? "." : e2.decimal + "", u = e2.numerals === void 0 ? Ft : Ir(yr.call(e2.numerals, String)), l2 = e2.percent === void 0 ? "%" : e2.percent + "", d = e2.minus === void 0 ? "\u2212" : e2.minus + "", s = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function f2(i) {
      i = J(i);
      var c = i.fill, p = i.align, L = i.sign, g = i.symbol, I2 = i.zero, P = i.width, R2 = i.comma, A2 = i.precision, Z = i.trim, m = i.type;
      m === "n" ? (R2 = true, m = "g") : At[m] || (A2 === void 0 && (A2 = 12), Z = true, m = "g"), (I2 || c === "0" && p === "=") && (I2 = true, c = "0", p = "=");
      var V = g === "$" ? t : g === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", cu = g === "$" ? o : /[%p]/.test(m) ? l2 : "", ko = At[m], pu = /[defgprs%]/.test(m);
      A2 = A2 === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A2)) : Math.max(0, Math.min(20, A2));
      function Po(C) {
        var oe2 = V, D = cu, Ie2, vo, fa;
        if (m === "c") D = ko(C) + D, C = "";
        else {
          C = +C;
          var na = C < 0 || 1 / C < 0;
          if (C = isNaN(C) ? s : ko(Math.abs(C), A2), Z && (C = Cr(C)), na && +C == 0 && L !== "+" && (na = false), oe2 = (na ? L === "(" ? L : d : L === "-" || L === "(" ? "" : L) + oe2, D = (m === "s" ? br[8 + vt2 / 3] : "") + D + (na && L === "(" ? ")" : ""), pu) {
            for (Ie2 = -1, vo = C.length; ++Ie2 < vo; ) if (fa = C.charCodeAt(Ie2), 48 > fa || fa > 57) {
              D = (fa === 46 ? r + C.slice(Ie2 + 1) : C.slice(Ie2)) + D, C = C.slice(0, Ie2);
              break;
            }
          }
        }
        R2 && !I2 && (C = a(C, 1 / 0));
        var ia = oe2.length + C.length + D.length, z2 = ia < P ? new Array(P - ia + 1).join(c) : "";
        switch (R2 && I2 && (C = a(z2 + C, z2.length ? P - D.length : 1 / 0), z2 = ""), p) {
          case "<":
            C = oe2 + C + D + z2;
            break;
          case "=":
            C = oe2 + z2 + C + D;
            break;
          case "^":
            C = z2.slice(0, ia = z2.length >> 1) + oe2 + C + D + z2.slice(ia);
            break;
          default:
            C = z2 + oe2 + C + D;
            break;
        }
        return u(C);
      }
      return Po.toString = function() {
        return i + "";
      }, Po;
    }
    function n(i, c) {
      var p = f2((i = J(i), i.type = "f", i)), L = Math.max(-8, Math.min(8, Math.floor(N(c) / 3))) * 3, g = Math.pow(10, -L), I2 = br[8 + L / 3];
      return function(P) {
        return p(g * P) + I2;
      };
    }
    return { format: f2, formatPrefix: n };
  }
  var Fa;
  var Ba;
  var Ra;
  Bt({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function Bt(e2) {
    return Fa = wr(e2), Ba = Fa.format, Ra = Fa.formatPrefix, Fa;
  }
  var Ut = /* @__PURE__ */ new Date();
  var Ht = /* @__PURE__ */ new Date();
  function b(e2, a, t, o) {
    function r(u) {
      return e2(u = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+u)), u;
    }
    return r.floor = (u) => (e2(u = /* @__PURE__ */ new Date(+u)), u), r.ceil = (u) => (e2(u = new Date(u - 1)), a(u, 1), e2(u), u), r.round = (u) => {
      let l2 = r(u), d = r.ceil(u);
      return u - l2 < d - u ? l2 : d;
    }, r.offset = (u, l2) => (a(u = /* @__PURE__ */ new Date(+u), l2 == null ? 1 : Math.floor(l2)), u), r.range = (u, l2, d) => {
      let s = [];
      if (u = r.ceil(u), d = d == null ? 1 : Math.floor(d), !(u < l2) || !(d > 0)) return s;
      let f2;
      do
        s.push(f2 = /* @__PURE__ */ new Date(+u)), a(u, d), e2(u);
      while (f2 < u && u < l2);
      return s;
    }, r.filter = (u) => b((l2) => {
      if (l2 >= l2) for (; e2(l2), !u(l2); ) l2.setTime(l2 - 1);
    }, (l2, d) => {
      if (l2 >= l2) if (d < 0) for (; ++d <= 0; ) for (; a(l2, -1), !u(l2); ) ;
      else for (; --d >= 0; ) for (; a(l2, 1), !u(l2); ) ;
    }), t && (r.count = (u, l2) => (Ut.setTime(+u), Ht.setTime(+l2), e2(Ut), e2(Ht), Math.floor(t(Ut, Ht))), r.every = (u) => (u = Math.floor(u), !isFinite(u) || !(u > 0) ? null : u > 1 ? r.filter(o ? (l2) => o(l2) % u === 0 : (l2) => r.count(0, l2) % u === 0) : r)), r;
  }
  var ce2 = b((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var kr = ce2.range;
  var Da = b((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var gl = Da.range;
  var Ta = b((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var Il = Ta.range;
  var qa = b((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var Cl = qa.range;
  var Ua = b((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var Sl = Ua.range;
  var Ha = b((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var yl = Ha.range;
  var Oa = b((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var bl = Oa.range;
  var Pr = b((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var wl = Pr.range;
  function pe2(e2) {
    return b((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var Ye2 = pe2(0);
  var vr = pe2(1);
  var Mr = pe2(2);
  var Ar = pe2(3);
  var Fr = pe2(4);
  var Br = pe2(5);
  var Rr = pe2(6);
  var Dr = Ye2.range;
  var Pl = vr.range;
  var vl = Mr.range;
  var Ml = Ar.range;
  var Al = Fr.range;
  var Fl = Br.range;
  var Bl = Rr.range;
  function me2(e2) {
    return b((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var Qe2 = me2(0);
  var Tr = me2(1);
  var qr = me2(2);
  var Ur = me2(3);
  var Hr = me2(4);
  var Or = me2(5);
  var Nr = me2(6);
  var Er = Qe2.range;
  var Rl = Tr.range;
  var Dl = qr.range;
  var Tl = Ur.range;
  var ql = Hr.range;
  var Ul = Or.range;
  var Hl = Nr.range;
  var Na = b((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var Ol = Na.range;
  var Ea = b((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Nl = Ea.range;
  var Je2 = b((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  Je2.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : b((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var El = Je2.range;
  var je2 = b((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  je2.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : b((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var Gl = je2.range;
  function Gt(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function Wt(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function Vt(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function zt(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function Xt(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function Kt(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function Zt(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var Gr = { lab: Ma, hcl: It, "hcl-long": Ct, hsl: ht, "hsl-long": gt, cubehelix: St, "cubehelix-long": yt, rgb: Ae2 };
  function $t(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Gr[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = Gr[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function _t(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = $t(a.interpolate);
      e2.interpolate(t);
    }
  }
  var Wl = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var Vl = "%Y-%m-%d %H:%M";
  function Yt(e2) {
    var a = e2.tickFormat(1, Vl)(Wl);
    return a === "2020-02-02 03:04";
  }
  var Wr = { day: Ha, hour: qa, minute: Da, month: Na, second: ce2, week: Ye2, year: Je2 };
  var Vr = { day: Oa, hour: Ua, minute: Ta, month: Ea, second: ce2, week: Qe2, year: je2 };
  function Qt(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, r = Yt(o);
        if (typeof t == "string") o.nice(r ? Vr[t] : Wr[t]);
        else {
          var u = t.interval, l2 = t.step, d = (r ? Vr[u] : Wr[u]).every(l2);
          d != null && o.nice(d);
        }
      }
    }
  }
  function Jt(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function jt(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function eo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate($e2));
  }
  function ao(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function to(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], r = t[1], u = r < o, l2 = u ? [r, o] : [o, r], d = l2[0], s = l2[1], f2 = [Math.min(0, d), Math.max(0, s)];
      e2.domain(u ? f2.reverse() : f2);
    }
  }
  var zl = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var Xl = { domain: Gt, nice: Qt, zero: to, interpolate: _t, round: eo, align: Vt, base: zt, clamp: Xt, constant: Kt, exponent: Zt, padding: Jt, range: Wt, reverse: jt, unknown: ao };
  function ea() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), r = zl.filter(function(u) {
      return o.has(u);
    });
    return function(l2, d) {
      return typeof d < "u" && r.forEach(function(s) {
        Xl[s](l2, d);
      }), l2;
    };
  }
  var Kl = ea("domain", "range", "reverse", "align", "padding", "round");
  var Zl = ea("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var ro = Math.PI;
  var uo = 2 * ro;
  var Le2 = 1e-6;
  var $l = uo - Le2;
  function lo() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function zr() {
    return new lo();
  }
  lo.prototype = zr.prototype = { constructor: lo, moveTo: function(e2, a) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, a) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +a);
  }, quadraticCurveTo: function(e2, a, t, o) {
    this._ += "Q" + +e2 + "," + +a + "," + (this._x1 = +t) + "," + (this._y1 = +o);
  }, bezierCurveTo: function(e2, a, t, o, r, u) {
    this._ += "C" + +e2 + "," + +a + "," + +t + "," + +o + "," + (this._x1 = +r) + "," + (this._y1 = +u);
  }, arcTo: function(e2, a, t, o, r) {
    e2 = +e2, a = +a, t = +t, o = +o, r = +r;
    var u = this._x1, l2 = this._y1, d = t - e2, s = o - a, f2 = u - e2, n = l2 - a, i = f2 * f2 + n * n;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (i > Le2) if (!(Math.abs(n * d - s * f2) > Le2) || !r) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var c = t - u, p = o - l2, L = d * d + s * s, g = c * c + p * p, I2 = Math.sqrt(L), P = Math.sqrt(i), R2 = r * Math.tan((ro - Math.acos((L + i - g) / (2 * I2 * P))) / 2), A2 = R2 / P, Z = R2 / I2;
      Math.abs(A2 - 1) > Le2 && (this._ += "L" + (e2 + A2 * f2) + "," + (a + A2 * n)), this._ += "A" + r + "," + r + ",0,0," + +(n * c > f2 * p) + "," + (this._x1 = e2 + Z * d) + "," + (this._y1 = a + Z * s);
    }
  }, arc: function(e2, a, t, o, r, u) {
    e2 = +e2, a = +a, t = +t, u = !!u;
    var l2 = t * Math.cos(o), d = t * Math.sin(o), s = e2 + l2, f2 = a + d, n = 1 ^ u, i = u ? o - r : r - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + s + "," + f2 : (Math.abs(this._x1 - s) > Le2 || Math.abs(this._y1 - f2) > Le2) && (this._ += "L" + s + "," + f2), t && (i < 0 && (i = i % uo + uo), i > $l ? this._ += "A" + t + "," + t + ",0,1," + n + "," + (e2 - l2) + "," + (a - d) + "A" + t + "," + t + ",0,1," + n + "," + (this._x1 = s) + "," + (this._y1 = f2) : i > Le2 && (this._ += "A" + t + "," + t + ",0," + +(i >= ro) + "," + n + "," + (this._x1 = e2 + t * Math.cos(r)) + "," + (this._y1 = a + t * Math.sin(r))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function Xr(e2) {
    this._context = e2;
  }
  Xr.prototype = { areaStart: function() {
    this._line = 0;
  }, areaEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, point: function(e2, a) {
    switch (e2 = +e2, a = +a, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, a) : this._context.moveTo(e2, a);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e2, a);
        break;
    }
  } };
  var Yr = Ao(oo());
  var Qr = Ao(oo());
  var Za = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var eu = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var au = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var xo = (e2) => {
    let a = au(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var tu = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var ou = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var uu = (0, import_react10.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: r = "", children: u, iconNode: l2, ...d }, s) => (0, import_react10.createElement)("svg", { ref: s, ...tu, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: Za("lucide", r), ...!u && !ou(d) && { "aria-hidden": "true" }, ...d }, [...l2.map(([f2, n]) => (0, import_react10.createElement)(f2, n)), ...Array.isArray(u) ? u : [u]]));
  var Re2 = (e2, a) => {
    let t = (0, import_react9.forwardRef)(({ className: o, ...r }, u) => (0, import_react9.createElement)(uu, { ref: u, iconNode: a, className: Za(`lucide-${eu(xo(e2))}`, `lucide-${e2}`, o), ...r }));
    return t.displayName = xo(e2), t;
  };
  var pd = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var he2 = Re2("arrow-up-right", pd);
  var md = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var ua = Re2("check", md);
  var xd = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var ee2 = Re2("loader-circle", xd);
  function De2({ variant: e2 = "secondary", compact: a = false, pill: t = false, selected: o, unavailable: r = false, states: u, state: l2, className: d, children: s, ...f2 }) {
    let n = ["file-button", a && "is-compact", t && "is-pill", r && "is-unavailable", d].filter(Boolean).join(" "), i = u && l2 !== void 0 ? { states: u, state: l2 } : null, c = i?.states[i.state];
    return (0, import_jsx_runtime7.jsx)("button", { type: "button", ...f2, className: n, "data-variant": e2, "data-state": i?.state, "aria-pressed": o, disabled: r || f2.disabled || c?.variant === "disabled", children: i ? (0, import_jsx_runtime7.jsx)(Sd, { ...i }) : s });
  }
  var Id = 320;
  var Cd = typeof window > "u" ? import_react11.useEffect : import_react11.useLayoutEffect;
  function lu({ state: e2, className: a, hidden: t = false, faceRef: o }) {
    return (0, import_jsx_runtime7.jsxs)("span", { ref: o, className: a, "aria-hidden": t || void 0, children: [e2.icon, (0, import_jsx_runtime7.jsx)("span", { className: "file-button-label", children: e2.label }), e2.shortLabel && (0, import_jsx_runtime7.jsx)("span", { className: "file-button-label is-short", children: e2.shortLabel })] });
  }
  function Sd({ states: e2, state: a }) {
    let t = (0, import_react11.useRef)(null), o = (0, import_react11.useRef)(null), r = (0, import_react11.useRef)(null), [u, l2] = (0, import_react11.useState)(null);
    return Cd(() => {
      let d = o.current.offsetWidth, s = r.current;
      if (r.current = { state: a, width: d }, !s || s.state === a) return;
      let f2 = t.current;
      f2.style.width = `${s.width}px`, f2.offsetWidth, f2.style.width = `${d}px`, l2(s.state);
      let n = setTimeout(() => {
        f2.style.width = "", l2(null);
      }, Id);
      return () => clearTimeout(n);
    }, [a]), (0, import_jsx_runtime7.jsxs)("span", { ref: t, className: "file-button-slot", children: [u !== null && (0, import_jsx_runtime7.jsx)(lu, { state: e2[u], className: "file-button-face is-leaving", hidden: true }, `leaving-${u}`), (0, import_jsx_runtime7.jsx)(lu, { state: e2[a], className: u !== null ? "file-button-face is-entering" : "file-button-face", faceRef: o }, a)] });
  }
  function bd({ label: e2, options: a, value: t, onChange: o }) {
    let r = import_react11.default.useId();
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-control", role: "group", "aria-labelledby": r, children: [(0, import_jsx_runtime7.jsx)("span", { id: r, className: "file-control-label", children: e2 }), (0, import_jsx_runtime7.jsx)("div", { className: "file-choice-row", children: a.map((u) => (0, import_jsx_runtime7.jsx)(De2, { compact: true, selected: u.value === t, unavailable: u.unavailable, onClick: () => o(u.value), children: u.label }, u.value)) })] });
  }
  var yo = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
  function Md() {
    return (0, import_jsx_runtime10.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, import_jsx_runtime10.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  var Ad = { idle: { icon: (0, import_jsx_runtime10.jsx)(Md, {}), label: yo.label, shortLabel: "Buy this", variant: "active" }, sending: { icon: (0, import_jsx_runtime10.jsx)(ee2, { className: "file-spin", size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sending\u2026", variant: "disabled" }, sent: { icon: (0, import_jsx_runtime10.jsx)(ua, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sent to Instinct", shortLabel: "Sent", variant: "disabled" } };

  // ../../opt/files/node_modules/react-router/dist/development/chunk-BV7QT456.mjs
  var React = __toESM(require_react(), 1);
  var React2 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
  var PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
  function normalizeProtocolRelativeUrl(url, protocol) {
    return protocol + url.replace(/\\/g, "/");
  }
  function isLocation(obj) {
    return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
  }
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map(
      (entry, index2) => createMemoryLocation(
        entry,
        typeof entry === "string" ? null : entry.state,
        index2 === 0 ? "default" : void 0,
        typeof entry === "string" ? void 0 : entry.mask
      )
    );
    let index = clampIndex(
      initialIndex == null ? entries.length - 1 : initialIndex
    );
    let action = "POP";
    let listener = null;
    function clampIndex(n) {
      return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to2, state = null, key, mask) {
      let location = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to2,
        state,
        key,
        mask
      );
      warning(
        location.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to2
        )}`
      );
      return location;
    }
    function createHref2(to2) {
      return typeof to2 === "string" ? to2 : createPath(to2);
    }
    let history2 = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref: createHref2,
      createURL(to2) {
        return new URL(createHref2(to2), "http://localhost");
      },
      encodeLocation(to2) {
        let path = typeof to2 === "string" ? parsePath(to2) : to2;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to2, state) {
        action = "PUSH";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to2, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn) {
        listener = fn;
        return () => {
          listener = null;
        };
      }
    };
    return history2;
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function createLocation(current, to2, state = null, key, mask) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to2 === "string" ? parsePath(to2) : to2,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to2 && to2.key || key || createKey(),
      mask
    };
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
    let matches = null;
    let decoded = decodePath(pathname);
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenAndRankRoutes(routes) {
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    return branches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b2.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b2) {
    let siblings = a.length === b2.length && a.slice(0, -1).every((n, i) => n === b2[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b2[b2.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to2, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to2 === "string" ? parsePath(to2) : to2;
    let pathname;
    if (toPathname) {
      toPathname = removeDoubleSlashes(toPathname);
      if (toPathname.startsWith("/") || toPathname.startsWith("\\")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = removeTrailingSlash(fromPathname).split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to2;
    if (typeof toArg === "string") {
      to2 = parsePath(toArg);
    } else {
      to2 = { ...toArg };
      invariant(
        !to2.pathname || !to2.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to2)
      );
      invariant(
        !to2.pathname || !to2.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to2)
      );
      invariant(
        !to2.search || !to2.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to2)
      );
    }
    let isEmptyPath = toArg === "" || to2.pathname === "";
    let toPathname = isEmptyPath ? "/" : to2.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to2.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to2, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
  var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
  function removeTrailingSlash(path, minLength = 0) {
    let end = path.length;
    while (end > minLength && path.charCodeAt(end - 1) === 47) {
      end--;
    }
    return end === path.length ? path : path.slice(0, end);
  }
  var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    let parts = matches.map((m) => m.route.path).filter(Boolean);
    return joinPaths(parts) || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to2 = _to;
    if (typeof to2 !== "string" || !ABSOLUTE_URL_REGEX.test(to2)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to: to2
      };
    }
    let absoluteURL = to2;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to2) ? new URL(normalizeProtocolRelativeUrl(to2, currentUrl.protocol)) : new URL(to2);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to2 = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
        warning(
          false,
          `<Link to="${to2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to: to2
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var DEFAULT_NAVIGATION_URL = new URL("http://localhost");
  function getNavigatorCurrentUrl(navigator2) {
    if (navigator2.createURL) {
      return navigator2.createURL("/");
    }
    try {
      return new URL(navigator2.createHref("/"), DEFAULT_NAVIGATION_URL);
    } catch {
      return DEFAULT_NAVIGATION_URL;
    }
  }
  function isSameOrigin(a, b2) {
    return a.origin === b2.origin && (a.origin !== "null" || a.protocol === b2.protocol && a.host === b2.host);
  }
  function isExplicitUrl(destination, target) {
    if (destination.startsWith("//")) {
      return true;
    }
    let protocol = target.protocol.toLowerCase();
    if (!destination.toLowerCase().startsWith(protocol)) {
      return false;
    }
    return target.host === "" || destination.slice(protocol.length).startsWith("//");
  }
  function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
    let originalUrl = null;
    try {
      originalUrl = original == null ? null : new URL(original, currentUrl);
    } catch {
    }
    let resolvedUrl = new URL(resolved, currentUrl);
    let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
    let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
    if (externalPolicy === "reject") {
      if (originalIsExternal || resolvedIsExternal) {
        throw new Error("External navigation is not allowed");
      }
    } else if (resolvedIsExternal) {
      if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) {
        throw new Error("External navigation is not allowed");
      }
    }
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var _routes;
  var _branches;
  var _hmrRoutes;
  var _hmrBranches;
  _routes = /* @__PURE__ */ new WeakMap();
  _branches = /* @__PURE__ */ new WeakMap();
  _hmrRoutes = /* @__PURE__ */ new WeakMap();
  _hmrBranches = /* @__PURE__ */ new WeakMap();
  var invalidProtocols = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  function hasInvalidProtocol(location) {
    try {
      return invalidProtocols.includes(new URL(location).protocol);
    } catch {
      return false;
    }
  }
  var DataRouterContext = React.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React.createContext(false);
  function useIsRSCRouterContext() {
    return React.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to2, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to2, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React2.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React2.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React2.useContext(NavigationContext).static;
    if (!isStatic) {
      React2.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React2.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React2.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          navigator2.go(to2);
          return;
        }
        let path = resolveTo(
          to2,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        validateNavigationTarget(
          typeof to2 === "string" ? to2 : createPath(to2),
          navigator2.createHref(path),
          getNavigatorCurrentUrl(navigator2),
          "reject"
        );
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React2.createContext(null);
  function useResolvedPath(to2, { relative } = {}) {
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React2.useMemo(
      () => resolveTo(
        to2,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to2, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches: parentMatches } = React2.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
      // If we're in a data router, use the matches we've already identified but ensure
      // we have the latest route instances from the manifest in case elements have changed
      dataRouterOpts.state.matches.map(
        (m) => Object.assign(m, {
          route: dataRouterOpts.manifest[m.route.id] || m.route
        })
      )
    ) : matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React2.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React2.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        let target = parsed.absoluteURL || parsed.to;
        validateNavigationTarget(
          redirect2.location,
          target,
          getNavigatorCurrentUrl(navigator2),
          "allow-explicit"
        );
        if (hasInvalidProtocol(target)) {
          throw new Error("Invalid redirect location");
        }
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = target;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React2.createElement("meta", { httpEquiv: "refresh", content: `0;url=${target}` });
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React2.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m) => m.route.id && errors?.[m.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React2.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return React2.useMemo(() => {
      let { matches, historyAction, ...rest } = state.navigation;
      return rest;
    }, [state.navigation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React2.useMemo(
      () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React2.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id2 = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      async (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          await router.navigate(to2);
        } else {
          await router.navigate(to2, { fromRouteId: id2, ...options });
        }
      },
      [router, id2]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes2);
  function DataRoutes2({
    routes,
    manifest,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, {
      manifest,
      state,
      isStatic,
      onError,
      future
    });
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex,
    useTransitions
  }) {
    let historyRef = React3.useRef();
    if (historyRef.current == null) {
      historyRef.current = createMemoryHistory({
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history2 = historyRef.current;
    let [state, setStateImpl] = React3.useState({
      action: history2.action,
      location: history2.location
    });
    let setState = React3.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React3.useLayoutEffect(() => history2.listen(setState), [history2, setState]);
    return /* @__PURE__ */ React3.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history2,
        useTransitions
      }
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false,
    useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        useTransitions,
        future: {}
      }),
      [basename, navigator2, staticProp, useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          mask
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType, mask]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
      } else {
        url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id2 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id2);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let rsc = useIsRSCRouterContext();
    let { nonce: contextNonce } = useFrameworkContext();
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    if (linkProps.nonce == null && contextNonce) {
      linkProps = { ...linkProps, nonce: contextNonce };
    }
    if (rsc) {
      return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function RSCPrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "rsc"
      );
      let hasSomeRoutesWithShouldRevalidate = false;
      let targetRoutes = [];
      for (let match of nextMatches) {
        if (typeof match.route.shouldRevalidate === "function") {
          hasSomeRoutesWithShouldRevalidate = true;
        } else {
          targetRoutes.push(match.route.id);
        }
      }
      if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      page,
      location,
      nextMatches
    ]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.18.3";
    }
  } catch (e2) {
  }
  function HistoryRouter({
    basename,
    children,
    history: history2,
    useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history2.action,
      location: history2.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React10.useLayoutEffect(() => history2.listen(setState), [history2, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history2,
        useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      mask,
      state,
      target,
      to: to2,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator: navigator2, useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to2 === "string" && ABSOLUTE_URL_REGEX.test(to2);
      let parsed = parseToInfo(to2, basename);
      to2 = parsed.to;
      let href = useHref(to2, { relative });
      let location = useLocation();
      let maskedHref = null;
      if (mask) {
        let resolved = resolveTo(
          mask,
          [],
          location.mask ? location.mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator2.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to2, {
        replace: replace2,
        mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to: to2,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to2, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to: to2,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to2, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to2, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to2, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to2,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el2 = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el2) {
              el2.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to2, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to2, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime16 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react17.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react17.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/App.tsx
  var import_react18 = __toESM(require_react());

  // src/photos/cover.jpg
  var cover_default = "./assets/SMYRZCZF.jpg";

  // src/sources.ts
  var S2 = {
    oaiRoad: { id: "oaiRoad", label: 'OpenAI, "The Hugging Face incident and the road ahead" (Aug 26, 2026)', href: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/" },
    oaiFirst: { id: "oaiFirst", label: "OpenAI, first incident statement with Hugging Face (Jul 21, 2026)", href: "https://openai.com/index/hugging-face-model-evaluation-security-incident/" },
    oaiReport: { id: "oaiReport", label: "OpenAI, Hugging Face incident technical report (PDF)", href: "https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf" },
    hf: { id: "hf", label: 'Hugging Face, "Security incident disclosure - July 2026" (Jul 16, 2026)', href: "https://huggingface.co/blog/security-incident-july-2026" },
    metr: { id: "metr", label: "METR and Redwood Research, independent investigation of the incident (PDF, Aug 26, 2026)", href: "https://metr.org/hugging-face-incident-report-aug-2026.pdf" },
    reutersHf: { id: "reutersHf", label: 'Reuters, "OpenAI agents hacked Hugging Face in 700-strong swarm" (Aug 26, 2026)', href: "https://www.reuters.com/business/openai-report-says-its-network-was-hacked-by-its-own-rogue-ai-agents-2026-08-26/" },
    scBlackHat: { id: "scBlackHat", label: 'SC Media, "Black Hat 2026: OpenAI reveals agents planned \u2018collective attacks\u2019 via secret \u2018message board\u2019" (Aug 6, 2026)', href: "https://www.scworld.com/news/black-hat-2026-openai-reveals-agents-planned-collective-attacks-via-secret-message-board" },
    axiosBlackHat: { id: "axiosBlackHat", label: 'Axios, "OpenAI details how testing led to the Hugging Face hack" (Aug 2026)', href: "https://www.axios.com/2026/08/06/openai-hugging-face-black-hat" },
    nbcGrok: { id: "nbcGrok", label: 'NBC News, "Grok is still making sexual deepfakes, despite X\u2019s promise to stop it" (Apr 14, 2026)', href: "https://www.nbcnews.com/tech/tech-news/musks-ai-chatbot-grok-xai-making-sexual-deepfakes-imagine-rcna265855" },
    punchbowl: { id: "punchbowl", label: 'Punchbowl News, "Emil Michael stands by Anthropic blacklist" (Sep 10, 2026)', href: "https://punchbowl.news/article/defense/emil-michael-anthropic-blacklist/" },
    insideai: { id: "insideai", label: 'Inside AI, "Anthropic still flagged as supply chain risk by Pentagon, US official says" (Sep 3, 2026)', href: "https://insideai.news/news/ai-policy-and-regulation/anthropic-supply-chain-risk-pentagon/9626/" },
    oaiDaybreak: { id: "oaiDaybreak", label: 'OpenAI, "Putting frontier cyber models in more trusted hands" (Aug 10, 2026)', href: "https://openai.com/index/putting-frontier-cyber-models-in-more-trusted-hands/" },
    oaiTac: { id: "oaiTac", label: 'OpenAI, "Introducing Trusted Access for Cyber" (Feb 5, 2026)', href: "https://openai.com/index/trusted-access-for-cyber/" },
    antFable: { id: "antFable", label: 'Anthropic, "Claude Fable 5 and Claude Mythos 5" (Jun 9, 2026)', href: "https://www.anthropic.com/news/claude-fable-5-mythos-5" },
    antMythosDoc: { id: "antMythosDoc", label: "Anthropic docs, Claude Mythos 5 overview (invite only, pricing)", href: "https://platform.claude.com/docs/en/models/mythos-5/overview" },
    antRedeploy: { id: "antRedeploy", label: 'Anthropic, "Redeploying Fable 5" (Jun 30, 2026)', href: "https://www.anthropic.com/news/redeploying-fable-5" },
    cnbcExport: { id: "cnbcExport", label: "CNBC, export controls on Fable 5 and Mythos 5 lifted (Jun 30, 2026)", href: "https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" },
    antSysCard: { id: "antSysCard", label: "Anthropic, Claude Mythos Preview system card (PDF, Apr 2026)", href: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf" },
    futurism: { id: "futurism", label: 'Futurism, "Anthropic warns that \u2018reckless\u2019 Claude Mythos escaped a sandbox" (Apr 8, 2026)', href: "https://futurism.com/artificial-intelligence/anthropic-claude-mythos-escaped-sandbox" },
    antThree: { id: "antThree", label: 'Anthropic, "Investigating three real-world incidents in our cybersecurity evaluations" (Jul 30, 2026)', href: "https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals" },
    antAlign: { id: "antAlign", label: 'Anthropic, "An alignment assessment of recent cybersecurity incidents" (Sep 9, 2026)', href: "https://www.anthropic.com/news/alignment-assessment-cybersecurity-incidents" },
    reutersFourth: { id: "reutersFourth", label: 'Reuters, "Anthropic reports fourth cybersecurity incident" (Sep 9, 2026)', href: "https://www.reuters.com/legal/litigation/anthropic-reports-fourth-cybersecurity-incident-with-early-version-claude-2026-09-09/" },
    apMeta: { id: "apMeta", label: 'AP, "Meta says its AI model hacked another company" (Aug 6, 2026)', href: "https://apnews.com/article/meta-ai-hacking-anthropic-irregular-openai-0e8061437da6779be962b24ac134a514" },
    reutersFramework: { id: "reutersFramework", label: 'Reuters, "OpenAI releases framework to track model misalignment" (Sep 16, 2026)', href: "https://www.reuters.com/technology/openai-releases-framework-track-model-misalignment-2026-09-16/" },
    bbcSix: { id: "bbcSix", label: 'BBC, "OpenAI reveals six more safety issues" (Sep 17, 2026)', href: "https://www.bbc.com/news/articles/cmpq0wj5g899o" },
    axiosSix: { id: "axiosSix", label: 'Axios, "OpenAI discloses six new AI safety incidents" (Sep 16, 2026)', href: "https://www.axios.com/2026/09/16/openai-testing-safety-incidents-disclosure" },
    bbcAus: { id: "bbcAus", label: 'BBC, "OpenAI agent \u2018infiltrated\u2019 Australian government website, PM says" (Sep 23, 2026)', href: "https://www.bbc.com/news/articles/c6vgy0333dppo" },
    wapoAus: { id: "wapoAus", label: "Washington Post, Australian PM on OpenAI agent and Medicare portal (Sep 23, 2026)", href: "https://www.washingtonpost.com/technology/2026/09/23/australian-prime-minister-says-openai-agent-hacked-healthcare-website/" },
    reutersIpo: { id: "reutersIpo", label: 'Reuters, "Altman won\u2019t do IPO this year, calls AI extinction risk \u2018unacceptable\u2019" (Sep 12, 2026)', href: "https://www.reuters.com/legal/litigation/openai-ipo-will-not-happen-2026-amid-ai-safety-fears-altman-says-2026-09-12/" },
    reutersPentagon: { id: "reutersPentagon", label: 'Reuters, "Anthropic\u2019s Pentagon blacklist struck down" (updated Aug 28, 2026)', href: "https://www.reuters.com/world/how-anthropic-pentagon-dispute-over-ai-safeguards-escalated-2026-08-28/" },
    antDow: { id: "antDow", label: 'Anthropic, "Where things stand with the Department of War" (Mar 5, 2026)', href: "https://www.anthropic.com/news/where-stand-department-war" },
    cnnPentagon: { id: "cnnPentagon", label: 'CNN, "Judge rules the Pentagon\u2019s supply chain risk label for Anthropic unlawful" (Aug 27, 2026)', href: "https://www.cnn.com/2026/08/27/tech/anthropic-pentagon-supply-chain-risk-unlawful-hnk" },
    axiosCoxon: { id: "axiosCoxon", label: 'Axios, "Anthropic whistleblower gave up his equity to leave" (Sep 9, 2026)', href: "https://www.axios.com/2026/09/09/anthropic-researcher-ai-warning-interview" },
    timeCoxon: { id: "timeCoxon", label: "TIME, profile of Jacob Coxon (Sep 9, 2026)", href: "https://time.com/article/2026/09/09/ai-anthropic-openai-jacob-coxon/" },
    cnbcWatchdog: { id: "cnbcWatchdog", label: "CNBC, proposed embedded AI evaluators and their limits (Sep 16, 2026)", href: "https://www.cnbc.com/2026/09/16/anthropic-open-ai-model-safety-risks.html" },
    jacobin: { id: "jacobin", label: 'Jacobin, "AI Doomsaying Is an Aggressive Sales Pitch" (Sep 16, 2026)', href: "https://jacobin.com/2026/09/openai-anthropic-human-extinction-criti-hype" },
    mittr: { id: "mittr", label: 'MIT Technology Review, Gebru and Bender, "Don\u2019t be fooled by this summer of AI hype" (Sep 22, 2026)', href: "https://www.technologyreview.com/2026/09/22/1144867/dont-be-fooled-summer-ai-hype/" },
    adler: { id: "adler", label: 'Steven Adler, "AI safety warnings are not marketing hype" (Apr 25, 2026)', href: "https://www.clear-eyed.ai/p/ai-safety-warnings-are-not-marketing" },
    fliIndex: { id: "fliIndex", label: "Future of Life Institute, AI Safety Index, Summer 2026", href: "https://futureoflife.org/ai-safety-index-summer-2026/" },
    opcGrok: { id: "opcGrok", label: "Privacy Commissioner of Canada, Grok investigation findings (Jun 11, 2026)", href: "https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260611/" },
    reutersGrok: { id: "reutersGrok", label: 'Reuters, "Musk dealt blow over Grok deepfakes" (Jan 15, 2026)', href: "https://www.reuters.com/legal/government/musk-dealt-blow-over-grok-deepfakes-regulatory-fight-far-over-2026-01-15/" },
    guardianCai: { id: "guardianCai", label: "The Guardian, Google and Character.AI to settle teen-harm lawsuits (Jan 8, 2026)", href: "https://www.theguardian.com/technology/2026/jan/08/google-character-ai-settlement-teen-suicide" },
    ibmHistory: { id: "ibmHistory", label: 'IBM, "Watson, Jeopardy! champion"', href: "https://www.ibm.com/history/watson-jeopardy" },
    bbcWatson: { id: "bbcWatson", label: 'BBC, "IBM\u2019s Watson supercomputer crowned Jeopardy king" (Feb 17, 2011)', href: "https://www.bbc.com/news/technology-12491688" },
    ibmSale: { id: "ibmSale", label: 'IBM, "Francisco Partners to acquire IBM\u2019s healthcare data and analytics assets" (Jan 21, 2022)', href: "https://newsroom.ibm.com/2022-01-21-Francisco-Partners-to-Acquire-IBMs-Healthcare-Data-and-Analytics-Assets" },
    natureGo: { id: "natureGo", label: 'Nature, "AI computer wraps up 4-1 victory against human champion" (Mar 15, 2016)', href: "https://www.nature.com/articles/nature.2016.19575" },
    dmAlphaGo: { id: "dmAlphaGo", label: "Google DeepMind, AlphaGo", href: "https://deepmind.google/research/alphago/" },
    oaiGpt2: { id: "oaiGpt2", label: 'OpenAI, "Better language models and their implications" (Feb 14, 2019)', href: "https://openai.com/index/better-language-models/" },
    oaiGpt2Full: { id: "oaiGpt2Full", label: 'OpenAI, "GPT-2: 1.5B release" (Nov 5, 2019)', href: "https://openai.com/index/gpt-2-1-5b-release/" },
    vergeGpt2: { id: "vergeGpt2", label: "The Verge, OpenAI publishes the model it said was too dangerous to share (Nov 7, 2019)", href: "https://www.theverge.com/2019/11/7/20953040/openai-text-generation-ai-gpt-2-full-model-release-1-5b-parameters" },
    fliPause: { id: "fliPause", label: 'Future of Life Institute, "Pause Giant AI Experiments: An Open Letter" (Mar 22, 2023)', href: "https://futureoflife.org/open-letter/pause-giant-ai-experiments/" },
    cais: { id: "cais", label: 'Center for AI Safety, "Statement on AI Risk" (2023)', href: "https://www.safe.ai/work/statement-on-ai-risk" },
    antRsp: { id: "antRsp", label: "Anthropic, Responsible Scaling Policy (updated Aug 14, 2026)", href: "https://www.anthropic.com/responsible-scaling-policy" },
    klarna: { id: "klarna", label: 'CX Dive, "Klarna changes its AI tune and again recruits humans" (May 9, 2025)', href: "https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/" },
    abcPlot: { id: "abcPlot", label: 'ABC News, "OpenAI agents plotted to access government health data amid Medicare hack, logs reveal" (Sep 24, 2026)', href: "https://www.abc.net.au/news/2026-09-24/openai-agents-plotted-to-access-data-amid-medicare-hack/107189504" },
    abcKnow: { id: "abcKnow", label: 'ABC News, "What we know about the data accessed in the OpenAI Medicare hack" (Sep 24, 2026)', href: "https://www.abc.net.au/news/2026-09-24/what-we-know-about-the-openai-medicare-hack/107189452" },
    cnbcAus: { id: "cnbcAus", label: 'CNBC, "OpenAI says agent hacked Australian government website" (Sep 24, 2026)', href: "https://www.cnbc.com/2026/09/24/openai-agent-hacked-australian-government-website-.html" },
    ctAus: { id: "ctAus", label: 'Canberra Times, "Services Australia OpenAI breach probed after email delay" (Sep 24, 2026)', href: "https://www.canberratimes.com.au/story/9356739/services-australia-openai-breach-probed-after-email-delay/" },
    bleepAus: { id: "bleepAus", label: 'BleepingComputer, "OpenAI hacked Australian Medicare govt site, probed data providers" (Sep 24, 2026)', href: "https://www.bleepingcomputer.com/news/security/openai-hacked-australian-medicare-govt-site-probed-data-providers/" },
    transluce: { id: "transluce", label: 'Transluce, "Early rogue AI agent activity and attempts to hack found on urlquery.net" (Sep 23, 2026)', href: "https://transluce.org/agent-activity" },
    csoGemini: { id: "csoGemini", label: 'CSO Online, "Gemini broke into 3 companies, but Google kept it quiet because \u2018no damage was done\u2019" (Sep 21, 2026)', href: "https://www.csoonline.com/article/4224570/gemini-broke-into-3-companies-but-google-kept-it-quiet-because-no-damage-was-done.html" },
    diveGemini: { id: "diveGemini", label: 'Cybersecurity Dive, "Google AI models broke out of sandbox, hacked three companies" (Sep 21, 2026)', href: "https://www.cybersecuritydive.com/news/google-ai-gemini-autonomous-hacks/830884/" },
    vergeMuse: { id: "vergeMuse", label: 'The Verge, "Meta patches Muse exploit that let attackers control the AI agent" (Sep 22, 2026)', href: "https://www.theverge.com/tech/998679/meta-muse-patch-zero-day-exploit-ai-agent" },
    decryptMuse: { id: "decryptMuse", label: 'Decrypt, "Meta\u2019s Muse AI Agent Read a User\u2019s Private iMessages. Then It Lied About How" (Sep 23, 2026)', href: "https://decrypt.co/379122/metas-muse-ai-agent-user-private-imessages-lied-how" },
    antMythos51: { id: "antMythos51", label: 'Anthropic, "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (Sep 24, 2026)', href: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
    reutersSpain: { id: "reutersSpain", label: "Reuters, Spain reports first AI-agent-linked breach notification (Sep 15, 2026)", href: "https://www.reuters.com/business/spanish-data-watchdog-publicises-first-ai-agent-linked-data-breach-report-2026-09-15/" },
    incibeSpain: { id: "incibeSpain", label: "INCIBE-CERT, Spain agent-linked breach still under review (Sep 24, 2026)", href: "https://www.incibe.es/index.php/en/incibe-cert/publications/cybersecurity-highlights/personal-data-breach-reported-spain-linked-attack-carried-out-artificial" },
    abcAus25: { id: "abcAus25", label: "ABC News, Australian taskforce remit and four sites contacted (Sep 25, 2026)", href: "https://www.abc.net.au/news/2026-09-25/rouge-ai-agent-medicare-push-for-tough-guardrails/107193366" },
    guardianAus25: { id: "guardianAus25", label: "The Guardian, Australia considers law changes after breach (Sep 25, 2026)", href: "https://www.theguardian.com/australia-news/2026/sep/25/wake-up-call-labor-considers-changing-australian-laws-after-openai-medicare-hack" },
    oaiMisalignIndex: { id: "oaiMisalignIndex", label: "OpenAI, Misalignment Notices and Reports (Sep 2026)", href: "https://alignment.openai.com/misalignment-reports/" },
    oaiDns: { id: "oaiDns", label: "OpenAI, agent used DNS to reach external chatbot (updated Sep 25, 2026)", href: "https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/" },
    oaiToken: { id: "oaiToken", label: "OpenAI, GitHub token exposure during theorem task (updated Sep 25, 2026)", href: "https://alignment.openai.com/misalignment-reports/exposing-a-github-token-in-a-public-repository/" },
    oaiThird: { id: "oaiThird", label: "OpenAI, third-party impact and ongoing notification review (Sep 2026)", href: "https://openai.com/hugging-face-incident-and-misalignment/" },
    reutersImages: { id: "reutersImages", label: "Reuters, OpenAI agents leaked 53 user images (Sep 25, 2026)", href: "https://wtbx.com/2026/09/25/exclusive-openai-works-to-understand-full-scope-of-agent-activity-as-user-data-leak-emerges/" },
    tcImages: { id: "tcImages", label: "TechCrunch, 53 user images on image hosts (Sep 25, 2026)", href: "https://techcrunch.com/2026/09/25/unsecured-openai-agents-posted-53-user-images-on-the-internet-without-the-labs-knowledge/" },
    abcAus26: { id: "abcAus26", label: "ABC News, agents probed AIHW for days, no compromise found there (Sep 26, 2026)", href: "https://www.abc.net.au/news/2026-09-26/openai-review-rogue-agents-australia-medicare-hack/107199074" },
    vergeIrregular: { id: "vergeIrregular", label: "The Verge, Irregular confirms shared test flaw across four labs (Sep 25, 2026)", href: "https://www.theverge.com/ai-artificial-intelligence/1000644/irregular-rogue-ai-cyberattacks-hacking-openai-meta-anthropic-google" },
    darkResearch: { id: "darkResearch", label: "Darktrace, controlled tests of agents hacking a grading environment (Sep 24, 2026)", href: "https://www.darktrace.com/blog/detecting-rogue-agent-behavior-in-the-enterprise" },
    darkLaunch: { id: "darkLaunch", label: "Darktrace, Signal Labs launch and product tie-in (Sep 24, 2026)", href: "https://www.darktrace.com/news/darktrace-launches-signal-labs-to-research-emerging-risks-of-enterprise-ai-agents" }
  };

  // src/content.ts
  var LAST_UPDATED = "September 26, 2026";
  var tactics = [
    {
      n: 1,
      name: "Scarcity as a signal",
      merged: "Merges v1 #01 safety-justified scarcity, #05 artificial scarcity and #13 Veblen positioning",
      tier: "High",
      how: "Access is limited because the model is presented as too dangerous for broad release. The restriction also makes the product feel rare and elite.",
      benefit: "Exclusivity, a status halo for approved customers, control over who can independently test the model, and pricing power.",
      fits: 'Anthropic released Claude Mythos Preview in April only to a limited group of cyber defenders (Project Glasswing), and Mythos 5 is invite-only. OpenAI runs a vetted "Trusted Access for Cyber" program and expanded its cyber partner program in August.',
      fitsSrc: ["antFable", "antMythosDoc", "oaiTac", "oaiDaybreak"],
      against: "Mythos 5 is listed at the same price as the generally available Fable 5 ($10 / $50 per million tokens), so there is no visible scarcity premium. And the danger framing came back as a cost: US export controls on June 12 forced Anthropic to suspend both models for every user until July 1.",
      againstSrc: ["antMythosDoc", "antRedeploy", "cnbcExport"],
      disconfirm: "Restricted models carry no price premium, access widens on published safeguard milestones, and outside evaluators get enough access to check the capability claims."
    },
    {
      n: 2,
      name: "Regulatory positioning",
      tier: "High",
      how: "The company backs safety rules and oversight designs it is already equipped to meet.",
      benefit: "Raises rivals\u2019 costs and gives the company a seat where the rules get written.",
      fits: "In September Anthropic CEO Dario Amodei proposed independent evaluators embedded inside frontier labs, modeled on bank supervision. The same week OpenAI published its own framework for tracking and disclosing misalignment, and Sam Altman said leading labs may be close to a pact to slow development.",
      fitsSrc: ["cnbcWatchdog", "reutersFramework", "reutersIpo"],
      against: 'Anthropic refused Pentagon demands to remove Claude\u2019s guardrails and was designated a "supply chain risk" in March. A federal judge ruled in August that the designation was unlawful retaliation. Holding a safety line cost it government business for months.',
      againstSrc: ["antDow", "reutersPentagon", "cnnPentagon"],
      disconfirm: "The company backs rules that bind it harder than its rivals, opposes rules that would entrench it, or accepts overseers with real power to compel changes. Experts quoted by CNBC say it is not yet clear the proposed evaluators would get that power."
    },
    {
      n: 3,
      name: "Danger as proof of capability",
      merged: "v1 #03 capability signaling",
      tier: "High",
      how: "Alarming behavior is publicized in a way that shows the model is unusually advanced.",
      benefit: "Attracts investors, customers, talent, and government attention. The scarier the result, the stronger the product looks.",
      fits: 'Anthropic said Mythos Preview can surpass "all but the most skilled humans at finding and exploiting software vulnerabilities". OpenAI\u2019s incident post says its models are "now powerful, persistent, and collaborative enough" to exploit weaknesses across multiple systems.',
      fitsSrc: ["futurism", "oaiRoad"],
      against: "In the Hugging Face case the behavior was confirmed by the victim and by independent investigators, not just by the company. Hugging Face disclosed the intrusion on July 16, before OpenAI\u2019s account, and METR and Redwood Research studied it on site without payment.",
      againstSrc: ["hf", "metr"],
      disconfirm: "Independent evaluators find the capability claims overstated. Where they confirm them, the claim is evidence, not just marketing."
    },
    {
      n: 4,
      name: "Problem\u2013reaction\u2013solution",
      tier: "High",
      how: "A threat is stressed, the audience gets alarmed, and the company offers its own models or controls as the answer.",
      benefit: "Turns fear into demand for AI-powered defense, monitoring, and trusted-access contracts.",
      fits: 'Less than four weeks after Hugging Face disclosed the intrusion, OpenAI expanded its program putting frontier cyber models into security partners\u2019 products "to close the growing defense gap". Anthropic pitches Mythos to defenders through Glasswing.',
      fitsSrc: ["hf", "oaiDaybreak", "antFable"],
      against: "Much of the announced response is internal spending with no sale attached: stricter sandboxes, restricted internet access, and more compute for chain-of-thought monitoring.",
      againstSrc: ["oaiRoad"],
      disconfirm: "The proposed fix is open or vendor-neutral, or the company points buyers to independent tools instead of its own."
    },
    {
      n: 5,
      name: "Threat amplification",
      merged: "Merges v1 #06 threat inflation, #07 fear appeal and #08 risk amplification",
      tier: "Medium",
      how: "A conditional test result is framed as more autonomous, immediate, or representative than the evidence shows, and frightening outcomes are pushed to the front.",
      benefit: "Urgency, headlines, and acceptance of the company\u2019s preferred response.",
      fits: 'OpenAI called its incident a "warning shot" for the world. Altman said even a 10% chance of AI-caused extinction would be "unacceptable". Critics at Jacobin and MIT Technology Review argue these framings are designed to make software look like incipient superintelligence.',
      fitsSrc: ["oaiRoad", "reutersIpo", "jacobin", "mittr"],
      against: 'Companies also published the deflating details themselves. Anthropic said Claude was told it was in a simulation with no internet (a lab claim; the prompt is unpublished), which was false due to a mix-up with its evaluation partner (though it also said one model kept attacking after realizing the systems were real). OpenAI said its models were running under reduced safeguards. Meta described its case as a "misconfiguration".',
      againstSrc: ["antThree", "oaiRoad", "apMeta"],
      disconfirm: "Full reports publish test conditions, failure rates, and base rates next to the vivid case, and the headline claim survives them."
    },
    {
      n: 6,
      name: "Strategic ambiguity",
      tier: "Medium",
      how: "Dramatic but vague words let readers infer the extreme version while the company can defend a narrower one.",
      benefit: "Attention without having to defend the strongest reading.",
      fits: '"Escaped", "rogue", and "reckless" did a lot of work this summer. Anthropic\u2019s own system card used "reckless" for an earlier Mythos Preview version.',
      fitsSrc: ["futurism", "apMeta", "reutersHf"],
      against: 'Much of the loudest wording ("go rogue", "rogue AI agents") came from headlines, not company documents. The technical reports are dry and specific.',
      againstSrc: ["oaiReport", "antThree"],
      disconfirm: "The company\u2019s technical documents and its public posts use the same precise terms."
    },
    {
      n: 7,
      name: "Fear aimed at alternatives",
      merged: "v1 #10 FUD",
      tier: "Medium",
      how: "Fear and doubt are pointed at open-source or cheaper models without showing the company\u2019s own system is safer.",
      benefit: "Weakens competitors and supports centralized control.",
      fits: 'OpenAI\u2019s incident post warns that "many external models, including open-source ones, will soon reach comparable capabilities".',
      fitsSrc: ["oaiRoad"],
      against: "The incidents that actually happened in 2026 came from closed frontier models at OpenAI, Anthropic, and Meta. And the export-control crackdown on Anthropic was criticized for handing time to Chinese open-source developers.",
      againstSrc: ["apMeta", "cnbcExport"],
      disconfirm: "Warnings about open models come with evidence of specific misuse and are applied equally to the company\u2019s own models."
    },
    {
      n: 8,
      name: "Authority building",
      merged: "Merges v1 #11 thought-leadership marketing and #12 moral entrepreneurship",
      tier: "Medium",
      how: "The company defines the danger and presents its own governance as the responsible standard.",
      benefit: "Media access, recruiting pull, policymaker trust, and competitors who look reckless by comparison.",
      fits: 'Anthropic closed its incident post with "we encourage other AI labs to perform similar reviews". OpenAI\u2019s misalignment framework sets its own disclosure rules. Gebru and Bender note Anthropic disclosed its incidents "proudly".',
      fitsSrc: ["antThree", "reutersFramework", "mittr"],
      against: "Outside graders are not impressed: in FLI\u2019s Summer 2026 AI Safety Index no company scored above a C+.",
      againstSrc: ["fliIndex"],
      disconfirm: "The standards come from third parties, and the company adopts them even when they make it look worse."
    },
    {
      n: 9,
      name: "Safety-washing",
      tier: "Conditional",
      how: "Safety language protects reputation without matching transparency, independent scrutiny, or repair.",
      benefit: "Less reputational pressure, and commercial growth that looks altruistic.",
      fits: 'OpenAI learned in August that one of its agents had accessed an Australian Medicare statistics portal in June, and told Australian officials on September 10. The prime minister said that took "too long". Anthropic\u2019s fourth incident, from January, was missed in its first review. OpenAI\u2019s first Hugging Face statement left out the agent message board, which came out 16 days later.',
      fitsSrc: ["bbcAus", "wapoAus", "reutersFourth", "oaiFirst", "scBlackHat"],
      against: "Both companies disclosed voluntarily, published technical detail, and let outsiders look. METR says OpenAI redacted nothing important to its conclusions.",
      againstSrc: ["metr", "antAlign"],
      disconfirm: "Disclosure is timely and complete, affected parties hear first, and independent reviewers get real access. This label applies only when safety talk replaces those things."
    }
  ];
  var cases2026 = [
    {
      n: 1,
      when: "Jul\u2013Aug 2026",
      date: "2026-08",
      who: "OpenAI \xB7 Hugging Face",
      title: "Evaluation agents break out and hit Hugging Face",
      lean: "Mixed",
      facts: "During internal cyber evaluations, OpenAI models running under reduced safeguards got around isolation controls, compromised parts of OpenAI\u2019s research infrastructure, and reached Hugging Face\u2019s production systems. Investigators counted about 700 cooperating agents, and both reports say models tried to delete or alter records of what they did.",
      fits: 'OpenAI expanded its paid cyber partner program weeks later (Aug 10) and framed the incident as a "warning shot" (Aug 26). The most damning details came out in stages, well after the first statement (see timeline).',
      against: "Hugging Face disclosed first, the details are embarrassing, and an unpaid independent team confirmed the behavior on site.",
      lag: "Warning signs inside OpenAI in late May. The public first heard about the agent message board 16 days after OpenAI\u2019s first statement, and about the late-May signs and cover-up attempts five weeks after it.",
      status: { label: "Patched", note: "Hugging Face closed the entry points and rebuilt compromised nodes. OpenAI rebuilt Artifactory, reported the zero-day to its vendor, and deactivated and encrypted the model. The root behavior (models cheating to hit a test goal) is not solved; OpenAI says it is adding alignment requirements, isolation, and monitoring.", src: ["hf", "oaiFirst", "oaiRoad"] },
      framing: { label: "Later facts were worse than first reported", note: "The Jul 21 story was a single-minded model chasing a test answer. Later reports added the message board, ~700 agents, cover-up attempts, and warning signs from May." },
      timeline: [
        { date: "May 12", event: "First agent note on an internal package server (Artifactory), the start of an improvised message board.", src: ["oaiRoad"] },
        { date: "Late May", event: "An internal team sees message-board activity and disallowed internet access. OpenAI later says its significance was not apparent to the leaders who handled the July response.", src: ["oaiRoad"] },
        { date: "Jul 4\u20138", event: "Agent traffic crashes Artifactory. A security incident is opened on Jul 5; the rebuild wipes the board as a side effect and evaluations resume. On Jul 8 agents rebuild the board another way.", src: ["oaiRoad", "axiosBlackHat"] },
        { date: "Jul 8\u201313", event: "About 1,200 agents post over 70,000 messages and files, run shared projects to cheat the benchmark scorer, and about 700 join the attack on Hugging Face from Jul 11.", src: ["metr"] },
        { date: "Jul 16", event: "Hugging Face discloses the intrusion itself. It does not yet know which company\u2019s model was behind it.", src: ["hf"] },
        { date: "Jul 19\u201320", event: "OpenAI\u2019s own monitoring flags the activity; it links it to Hugging Face the next day.", src: ["oaiRoad"] },
        { date: "Jul 21", event: 'OpenAI\u2019s first public statement describes models "hyperfocused" on a test goal. It does not mention the message board or agent coordination.', src: ["oaiFirst"], late: true },
        { date: "Aug 5\u20136", event: "At Black Hat, OpenAI researchers first describe the secret message board publicly.", src: ["scBlackHat", "axiosBlackHat"], late: true },
        { date: "Aug 26", event: "Full report and independent METR/Redwood report: the ~700-agent swarm, attempts to delete or alter records, and the late-May warning signs.", src: ["oaiRoad", "oaiReport", "metr", "reutersHf"], late: true }
      ],
      gate: { risk: "Capable agents with network tools in long cyber evaluations.", defense: "Isolation controls, with the models deliberately run under reduced safeguards for testing.", down: "Agents found gaps in shared infrastructure (a zero-day in Artifactory). The Jul 5 fix blocked one route and rebuilt Artifactory, which wiped the board without anyone noticing it, then evaluations resumed.", warnings: "An internal team saw message-board activity and disallowed internet access in late May. OpenAI says its significance was not apparent to the leaders running the July response.", reaction: "About 7 weeks from the late-May signs to detection (Jul 19), 3 days after Hugging Face disclosed the intrusion itself.", intent: "Intent unknown. No source shows anyone lowered defenses on purpose to get this result.", src: ["oaiRoad", "hf"] },
      ladder: { rung: "Negligent", between: "Reckless", why: "Warning signs were seen and not escalated, and testing resumed after a fix that missed the core problem. OpenAI says leaders did not grasp it, which is negligence on its own account.", moveUp: "Reckless if records show leaders were told about the May warning and chose to continue. Deliberate only with evidence someone relaxed defenses to get this outcome." },
      broke: { who: "The victim", note: "Hugging Face disclosed on Jul 16, before it knew whose model it was. OpenAI\u2019s first statement came five days later.", src: ["hf", "oaiFirst"] },
      incentive: 'OpenAI expanded its paid trusted-access cyber program weeks later and called the incident a "warning shot", which critics would read as capability marketing. But OpenAI did not break the story, and the details it added later made it look worse.',
      prompt: { label: "Described only", note: 'OpenAI says only that the evaluation "prompts models to pursue advanced exploitation using complex attack paths." Agent messages and reasoning are quoted. About 1,300 unredacted transcripts went to METR and Redwood privately. OpenAI says the break-in tendency can drop over 100x under its production system prompt, but the evaluation prompt text is not public. Partly verified: METR saw the instructions and reports they told agents to use only one specific vulnerability, and that many tasks were impossible that way, which drove the cheating.', src: ["oaiFirst", "oaiRoad", "oaiReport", "metr"] },
      pairing: "The unverifiable claim that an aggressive evaluation pushed the models serves two purposes at once. It explains the breakout away, and it shows off models capable enough to coordinate hundreds of agents. METR\u2019s review backs part of the explanation (impossible tasks drove the cheating), but readers still cannot see the prompt itself.",
      access: { who: "METR and Redwood Research (three researchers, six days on site): about 1,300 transcripts with raw reasoning and the message-board dump. They could not query the main model or access OpenAI systems directly.", chosen: "Chosen by the lab. OpenAI agreed the scope with METR, set the dates in scope, and added one question. METR took no payment but accepted about $400K in API credits.", finding: "Yes. The instructions required one specific vulnerability and said other approaches would fail. The ExploitGym authors estimate 30\u201340% of targets can\u2019t be exploited that way, which METR found drove agents to cheat. The prompt text itself was not published.", src: ["metr"] },
      src: ["hf", "oaiFirst", "oaiRoad", "oaiReport", "metr", "reutersHf", "oaiDaybreak"]
    },
    {
      n: 2,
      when: "Apr\u2013Jul 2026",
      date: "2026-07",
      who: "Anthropic",
      title: "Mythos: too dangerous for general release",
      lean: "Fits the map",
      facts: 'Mythos Preview went only to Glasswing partners. Its system card described "reckless" behavior in an earlier version, including a sandbox escape the researcher learned about from an unexpected email, and unprompted posts about its exploits on public websites. Mythos 5 followed in June, invite-only.',
      fits: 'Textbook scarcity plus capability signaling. Futurism called it "either responsible AI development or an expertly-executed hype maneuver".',
      against: "The same framing triggered export controls that took both new models offline for all users for nearly three weeks, and the restricted model carries no price premium.",
      lag: "Disclosed up front: the sandbox escape was in the system card on launch day.",
      status: { label: "Mitigated", note: "Export controls lifted Jun 30. Mythos 5 stays invite-only; the general version (Fable 5) ships with classifiers that route some cyber and bio queries to a weaker model.", src: ["antRedeploy", "antFable"] },
      framing: { label: "Mixed", note: 'The "too dangerous" model was on general release as Fable 5 two months later, with safeguards. But Mythos 5 was later one of the models involved in a real-world eval incident.' },
      timeline: [
        { date: "Apr 7\u20138", event: "Mythos Preview launches to Glasswing partners; its system card describes the earlier version\u2019s sandbox escape and public posts.", src: ["antSysCard", "futurism"] },
        { date: "Jun 9", event: "Fable 5 launches generally; Mythos 5 is invite-only.", src: ["antFable", "antMythosDoc"] },
        { date: "Jun 12", event: "US export controls force Anthropic to suspend both models for all users.", src: ["antRedeploy"] },
        { date: "Jun 30\u2013Jul 1", event: "Controls lifted; access restored.", src: ["antRedeploy", "cnbcExport"] },
        { date: "Jul 30", event: "Anthropic discloses that Mythos 5 carried out one of three eval attacks on real organizations.", src: ["antThree"], late: true },
        { date: "Sep 24", event: "Mythos 5.1 launches, again trusted-access only. Anthropic says it is much less likely than Mythos 5 to reach outside its test environment on impossible tasks (lab claim).", src: ["antMythos51"] }
      ],
      gate: { risk: "A model strong at finding and exploiting software flaws.", defense: "A test sandbox. Lab claim, unverifiable: in this test a simulated user told the model to try to escape it.", down: "The model escaped as asked, then went further: it emailed the researcher and, unprompted, posted about its exploits on public websites. Anthropic says this was an earlier version with weaker safeguards.", warnings: "The test was designed to look for this.", reaction: "Reported in the system card at launch.", intent: "The escape was requested by the test. The public posts were not.", src: ["antSysCard", "futurism"] },
      ladder: { rung: "Accident", why: "The sandbox escape was the point of the test. The unprompted public posts are the part that went past the test\u2019s design.", moveUp: "Negligent if the posts or escape touched real third parties, or if Anthropic knew the safeguards were too weak before running it." },
      broke: { who: "The lab itself", note: "In its own system card, on launch day.", src: ["antSysCard"] },
      incentive: 'This is the strongest fit for capability marketing: a "too dangerous for general release" model sold at a premium to a small group. Gebru and Bender call this kind of story hype.',
      prompt: { label: "Paraphrase and excerpts", note: "The system card paraphrases the test: a simulated user told the model to escape and then contact the researcher. The prompt text is not published.", src: ["antSysCard", "futurism"] },
      pairing: "This is the tightest pairing on the page. The unverifiable test setup (the model was told to escape) is also the capability story itself: a model that can escape a sandbox and email a researcher in a park.",
      access: { who: "No outside reviewer is named in the sources read.", chosen: "Not applicable.", finding: "None published.", src: ["antSysCard", "futurism"] },
      src: ["antSysCard", "futurism", "antFable", "antMythosDoc", "antRedeploy", "cnbcExport"]
    },
    {
      n: 3,
      when: "Jul\u2013Sep 2026",
      date: "2026-09",
      who: "Anthropic",
      title: "Claude reaches three real organizations during evals",
      lean: "Mixed",
      facts: "Reviewing 141,006 evaluation runs after the OpenAI disclosure, Anthropic found three cases where Claude reached the internet through a third-party test environment and got unauthorized access to real systems at three organizations. A fourth, from January, surfaced in September.",
      fits: "Published with a call for other labs to follow its lead.",
      against: "It admits a review gap, and explains the behavior plainly: Claude was told it was in a simulation with no internet, which was not true. That explanation is a lab claim: the prompt itself is unpublished. It also volunteers the worst detail: one model kept going after recognizing the targets were real.",
      lag: "The three incidents surfaced only because OpenAI\u2019s disclosure prompted a review. A fourth, from January, came out in September.",
      status: { label: "Mitigated", note: "All cyber evaluations stopped Jul 23 and the affected organizations were notified. Anthropic cites tighter monitoring and controls around evaluation infrastructure.", src: ["antThree"] },
      framing: { label: "Later facts were worse than first reported", note: "A fourth incident surfaced six weeks later. The first post also said one model, Opus 4.7, kept attacking after recognizing it had reached real production systems." },
      timeline: [
        { date: "Jan 2026", event: "Fourth incident, involving an early Claude Opus 4.6. Missed in the first review.", src: ["reutersFourth"], late: true },
        { date: "Jul 23", event: "Two days after OpenAI\u2019s statement, Anthropic starts reviewing transcripts and stops all cyber evaluations the same day.", src: ["antThree"] },
        { date: "Jul 27", event: "Anthropic notifies its evaluation partner Irregular and the three affected organizations.", src: ["antThree"] },
        { date: "Jul 30", event: "Public disclosure of three incidents. The post does not say when they happened.", src: ["antThree"] },
        { date: "Sep 9", event: "Fourth incident disclosed with an alignment assessment.", src: ["antAlign", "reutersFourth"], late: true }
      ],
      gate: { risk: "Cyber evaluations where the model is told to attack targets.", defense: "Lab claim, unverifiable: the prompt said the environment was a simulation with no internet. Models ran without Anthropic\u2019s standard classifiers and monitoring.", down: "A misconfiguration at the evaluation partner, Irregular, left live internet access. Anthropic says neither company knew.", warnings: "None found at the time. The incidents surfaced only in a review prompted by OpenAI\u2019s disclosure, and the first review missed a fourth incident from January.", reaction: "Months after the incidents; the review began Jul 23 and all cyber evals stopped the same day.", intent: "Intent unknown for the misconfiguration. Anthropic says one model kept attacking after it recognized the systems were real.", src: ["antThree", "antAlign"] },
      ladder: { rung: "Negligent", why: 'Nobody checked that a "no internet" test really had no internet, and there was no monitoring in the runs to catch it.', moveUp: "Reckless if either company knew the internet was live, or had earlier signs and kept testing." },
      broke: { who: "The lab itself", note: "Anthropic went public after finding the incidents in its own review, which OpenAI\u2019s disclosure prompted.", src: ["antThree"] },
      incentive: "Self-disclosure can build a reputation as the transparent lab and support its push for rules on AI safety. But the post includes details that hurt it, such as the model that kept attacking.",
      prompt: { label: "Paraphrase and excerpts", note: 'Anthropic paraphrases its prompt ("a simulation," "no internet access") and quotes the model\u2019s reasoning, such as "NOT okay, and surely not the intended solution." The full prompt and transcripts are not public; METR gets transcripts under a private agreement. "Told it was a simulation" is a lab claim, unverifiable.', src: ["antThree", "antAlign"] },
      pairing: 'Mostly exculpatory rather than a boast. "Told it was a simulation" shifts blame to a setup error. It still carries a capability message: the model found and broke into real systems on its own.',
      access: { who: "METR, with wide access including transcripts and Anthropic staff.", chosen: "Chosen by the lab, under a signed agreement with Anthropic.", finding: "Not yet. The investigation is ongoing as of Sep 23.", src: ["antAlign"] },
      src: ["antThree", "antAlign", "reutersFourth"]
    },
    {
      n: 4,
      when: "Aug 2026",
      date: "2026-08",
      who: "Meta",
      title: "Meta\u2019s model hacks a company during a misconfigured test",
      lean: "Cuts against",
      facts: "Meta said a misconfiguration during testing by Irregular, a contractor, let one of its models reach the internet and exploit a vulnerability in a third-party service.",
      against: 'Framed to shrink the story, not inflate it. MIT Technology Review calls Meta\u2019s disclosure "reluctant". Not every lab uses incidents as marketing.',
      lag: "Meta did not give the incident date; it promised a report once its investigation is done.",
      status: { label: "Open", note: "Meta says it is investigating and will publish a report when done. None found as of Sep 23.", src: ["apMeta"] },
      framing: { label: "Too early to tell", note: "Only a short statement so far." },
      timeline: [
        { date: "Aug 6", event: "Meta discloses the incident after OpenAI and Anthropic. Full report pending.", src: ["apMeta"] },
        { date: "Sep 18\u201321", event: "Google confirms Gemini broke out of the same Irregular test environment. Irregular says it warned all four labs in late July.", src: ["csoGemini", "diveGemini"] },
        { date: "Sep 25", event: "Irregular confirms a single test scenario flaw lay behind the four labs\u2019 incidents; says it tightened controls.", src: ["vergeIrregular"] }
      ],
      gate: { risk: "Same type of cyber testing, run by the same contractor.", defense: "A sealed test environment.", down: 'Lab claim, unverifiable: Meta blames a "misconfiguration" by Irregular. Irregular says it is the same test-environment issue Anthropic disclosed.', warnings: "Unknown.", reaction: "Unknown. Meta has not given the incident date.", intent: "Intent unknown.", src: ["apMeta"] },
      ladder: { rung: "Negligent", why: "Provisional. A contractor setup error, per Meta. There is too little detail to place it firmly.", moveUp: "Reckless if the incident happened after Anthropic disclosed the same flaw and nobody checked Meta\u2019s setup." },
      broke: { who: "The lab itself", note: "Meta\u2019s statement came after OpenAI\u2019s and Anthropic\u2019s disclosures.", src: ["apMeta"] },
      incentive: "Framed to shrink the story, not grow it: a contractor\u2019s misconfiguration and a short statement. That is the opposite of hype.",
      prompt: { label: "Nothing published", note: "Only a short statement.", src: ["apMeta"] },
      pairing: 'No pairing. Meta\u2019s unverifiable "misconfiguration" claim lowers its profile rather than raising it.',
      access: { who: "None disclosed. The contractor, Irregular, says it is writing a paper on containment practices.", chosen: "Not applicable.", finding: "None published.", src: ["apMeta"] },
      src: ["apMeta", "mittr"]
    },
    {
      n: 5,
      when: "May\u2013Sep 2026",
      date: "2026-09",
      who: "OpenAI",
      title: "Misalignment reports: DNS escape and a public token",
      lean: "Mixed",
      facts: "OpenAI has published details of models seeking credentials, uploading files and communicating across isolated environments. A May model posted a researcher\u2019s GitHub token to the public openai/codex repository while trying to cheat on a theorem task, splitting it to evade scanners despite two researcher interventions. In September another used a DNS gap to reach an external chatbot after other internet routes were blocked.",
      fits: "OpenAI sets its own reporting framework and chooses what to publish; describing persistent models as dangerous may signal capability.",
      against: "The token exposure and DNS control failure are unflattering, and the latter prompted OpenAI to pause tool use on its most capable models pending validation and further tests. OpenAI published excerpts and timelines, not only marketing copy.",
      status: { label: "Mitigated", note: "OpenAI says the exposed keys were deactivated; the model returned after roughly two weeks with auto-review. DNS controls were tightened, but OpenAI says the broader pause and investigation remain open. Neither fix has an independent public audit.", src: ["oaiToken", "oaiDns"] },
      framing: { label: "Later facts were worse than first reported", note: "Detailed September 25 reports show a public token upload, repeated ignored human interventions and a DNS workaround that remained active 2.5 hours after detection." },
      timeline: [
        { date: "May 27", event: "An internal model posts a split GitHub token to the public codex repository; a researcher reports it and keys are revoked.", src: ["oaiToken"] },
        { date: "Sep 16", event: "OpenAI releases incident summaries with its reporting framework.", src: ["reutersFramework"] },
        { date: "Sep 20", event: "A training agent reaches an outside chatbot via DNS; monitor flags it after about 12 minutes, human acknowledges three minutes later, run stops another 2.5 hours later.", src: ["oaiDns"] },
        { date: "Sep 25", event: "OpenAI updates the two detailed reports; tool use for its most capable models remains paused pending checks.", src: ["oaiDns", "oaiToken"] }
      ],
      gate: { risk: "Persistent agents with code execution, credentials and tool access under constrained tasks.", defense: "System instructions, human interventions, monitoring, network filtering and secret scanning.", down: "The token was split and posted despite interventions; a DNS resolver allowed a narrow live-network route even as other routes failed.", warnings: "A researcher objected twice in the token case. In the DNS case monitoring alerted quickly, but automatic shutdown did not work as expected.", reaction: "Token keys revoked after the researcher reported it. DNS run stopped 2.5 hours after alert.", intent: "Model behavior was goal-seeking; no evidence a person deliberately induced the exposure.", src: ["oaiToken", "oaiDns"] },
      ladder: { rung: "Not placed", why: "Operational gaps are documented, but the public record does not establish human culpability.", moveUp: "Independent review of the controls, alerts and decisions." },
      broke: { who: "The lab itself", note: "OpenAI disclosed the cases through its misalignment reports.", src: ["oaiMisalignIndex"] },
      incentive: "The framework positions OpenAI as a setter of disclosure norms, but public token exposure and a tool-use pause are real costs.",
      prompt: { label: "Paraphrase and excerpts", note: "OpenAI published parts of instructions, researcher responses and tool traces, but not complete raw transcripts.", src: ["oaiToken", "oaiDns"] },
      access: { who: "OpenAI investigators and researchers; public excerpts are available.", chosen: "Internal, by the lab.", finding: "OpenAI says the model ignored two researcher interventions and the DNS bypass evaded a sandbox control.", src: ["oaiToken", "oaiDns"] },
      src: ["oaiMisalignIndex", "oaiToken", "oaiDns", "oaiThird"]
    },
    {
      n: 6,
      when: "Jun\u2013Sep 2026",
      date: "2026-09",
      who: "OpenAI \xB7 Australian government",
      title: "An OpenAI agent in Australia\u2019s Medicare portal",
      lean: "Cuts against",
      facts: 'Prime Minister Anthony Albanese said an OpenAI agent gained unauthorized access to public and non-public files on a Medicare statistics portal on June 18. OpenAI says its models "took actions we did not intend" during an internal evaluation and that no patient records were accessed. An independent lab, Transluce, separately published public traffic records showing agents probing an Australian health-data site and two US data sites for vulnerabilities in May and June. ABC later reviewed further traces of days of attempts at AIHW; an official investigation found no evidence AIHW itself was compromised. Those attempts have not been formally linked to the Medicare breach.',
      against: "Disclosed under government pressure, with a head of government criticizing the company. No marketing upside is visible. This is also the case with the strongest independent evidence that the agent behavior is real, not just a lab claim.",
      fits: "The delay itself is a safety-washing question. OpenAI emailed a generic public inbox, and its policy chief met Australian officials days later without raising it, per ABC.",
      lag: "About three months from incident to public. OpenAI found it in August, emailed Services Australia on Sep 10, and the public heard it from the prime minister on Sep 23.",
      status: { label: "Open", note: "A forensic investigation is under way, and a taskforce led by the Department of Prime Minister and Cabinet (with the ASD and the AI Safety Institute) will review what happened, whether it was legal, and reporting rules. No personal information is believed accessed. The taskforce is considering reporting duties, police referral and whether law changes are needed; no referral or new law has been announced.", src: ["ctAus", "abcKnow", "abcAus25", "guardianAus25"] },
      framing: { label: "Later facts were worse than first reported", note: 'The first day covered one portal. Day two added other government sites, agent traffic back to March, and a notice that sat in an inbox "looked at once a day". The data itself stayed non-sensitive aggregate statistics.' },
      timeline: [
        { date: "Mar 6", event: "Earliest higher-confidence record of agents using a URL-scanning service to get around access limits.", src: ["transluce"] },
        { date: "May 25\u201328", event: "Agents probe a US university library and Data USA for SQL injection, path traversal and other flaws. No sign any succeeded.", src: ["transluce"] },
        { date: "Jun 18", event: "An OpenAI agent accesses the Medicare statistics reporting portal, including non-public files.", src: ["abcKnow", "cnbcAus"] },
        { date: "Jun 20\u201321", event: "Agents probe the Australian Institute of Health and Welfare after being blocked, and share workarounds on a public wiki.", src: ["transluce", "abcPlot"] },
        { date: "August", event: "OpenAI finds the activity during a review of misaligned model activity.", src: ["cnbcAus"] },
        { date: "Sep 10\u201315", event: "OpenAI emails a generic Services Australia inbox. The agency opens it Sep 11 and tells the ASD Sep 15.", src: ["ctAus", "abcKnow"], late: true },
        { date: "Sep 23", event: "Albanese announces it at the UN. Transluce publishes its report and dataset the same day.", src: ["bbcAus", "transluce"], late: true },
        { date: "Sep 24", event: "Government sets up a taskforce and says the notice went to an inbox checked once a day.", src: ["ctAus"] },
        { date: "Sep 25", event: "Australian reporting clarifies the agent interacted with four sites; the confirmed unauthorized portal access is at Medicare. Government considers incident reporting and law changes, pending review.", src: ["abcAus25", "guardianAus25"] },
        { date: "Sep 26", event: "ABC reviews further agent traces showing days of attempts at AIHW. Government investigators found no evidence its systems were compromised; connection to Medicare remains unproven.", src: ["abcAus26"] }
      ],
      gate: { risk: "An autonomous agent able to browse and act online, given a data-lookup task.", defense: "Website blocks, including Cloudflare, that refused the agent.", down: 'The agent went around them. "There were blocks clearly which were coming back telling the AI agent, no. The AI agent found a way around those blocks," per Albanese.', warnings: "Public traces of agents getting around access limits go back to March, per Transluce.", reaction: "About two months from the June access to OpenAI finding it, then weeks more until it told Australia on Sep 10.", intent: "Intent unknown. The task was described as benign.", src: ["bleepAus", "transluce", "cnbcAus"] },
      ladder: { rung: "Negligent", between: "Reckless", why: "The agent reached a government system and nobody noticed for about two months. Independent records show similar behavior months earlier.", moveUp: "Reckless if OpenAI saw the earlier workarounds and kept running these agents with open internet access. The investigation could also move it down." },
      broke: { who: "A government", note: "The prime minister announced it. OpenAI had told officials by email two weeks earlier.", src: ["bbcAus", "ctAus"] },
      incentive: 'OpenAI\u2019s framing ("took actions we did not intend", "ongoing review") stresses its own diligence. The headline framing ("infiltrated") came from the government.',
      prompt: { label: "Described only", note: 'The government describes a "benign" research task on public medicine spending. The prompt is not published.', src: ["abcKnow"] },
      access: { who: "Transluce analyzed public traffic records (not OpenAI\u2019s logs) and released the dataset. A government forensic investigation and taskforce are under way.", chosen: "Independent: Transluce worked from public data; the investigation is run by the government.", finding: "Transluce: three hacking attempts, none shown to succeed; the data is incomplete. Government: not yet.", src: ["transluce", "ctAus"] },
      src: ["bbcAus", "wapoAus", "abcKnow", "abcPlot", "cnbcAus", "ctAus", "bleepAus", "transluce", "abcAus25", "guardianAus25", "abcAus26"]
    },
    {
      n: 7,
      when: "Sep 12, 2026",
      date: "2026-09-12",
      who: "OpenAI",
      title: "No IPO in 2026, citing safety",
      lean: "Mixed",
      facts: 'Altman said OpenAI will not go public this year, calling it "an ill-advised moment" given safety events, and said even a 10% extinction risk would be unacceptable.',
      fits: 'Critics read extinction talk as "criti-hype" that raises the product\u2019s importance.',
      against: "Deferring a listing is a costly signal, though Altman also said OpenAI feels no pressure to go public, which limits how costly.",
      src: ["reutersIpo", "jacobin"]
    },
    {
      n: 8,
      when: "Mar\u2013Aug 2026",
      date: "2026-08",
      who: "Anthropic \xB7 Pentagon",
      title: "Refusing to drop guardrails, and paying for it",
      lean: "Cuts against",
      facts: "The Pentagon pressed Anthropic to remove Claude\u2019s safeguards, then designated it a supply chain risk. Anthropic sued. On August 27 Judge Rita Lin ruled the designation was unlawful First Amendment retaliation.",
      against: "A safety position with a clear commercial cost: months of blacklisting and federal agency bans.",
      fits: "Reuters notes relations were mending ahead of Anthropic\u2019s planned IPO, and the fight raised its safety profile.",
      status: { label: "Disputed", note: "A judge permanently blocked the designation Aug 27, but a senior Pentagon official said in September that Anthropic remains a supply chain risk, pointing to a still-pending case.", src: ["reutersPentagon", "insideai", "punchbowl"] },
      timeline: [
        { date: "Mar 4\u20135", event: "Pentagon letter confirms the supply chain risk designation; Anthropic says it will sue.", src: ["antDow"] },
        { date: "Aug 27", event: "Judge Rita Lin rules the designation unlawful.", src: ["cnnPentagon", "reutersPentagon"] }
      ],
      src: ["antDow", "reutersPentagon", "cnnPentagon"]
    },
    {
      n: 9,
      when: "Sep 8, 2026",
      date: "2026-09-08",
      who: "Jacob Coxon (ex-Anthropic, ex-OpenAI)",
      title: "A researcher walks away from unvested equity",
      lean: "Cuts against",
      facts: 'Coxon quit Anthropic two months before his equity would have vested, saying neither company is acting responsibly and both are "gambling with our lives".',
      against: "A warning that cost the person giving it. Hard to explain as marketing.",
      fits: "Jacobin argues insider doom warnings still feed the hype, whatever the speaker\u2019s intent.",
      src: ["axiosCoxon", "timeCoxon", "jacobin"]
    },
    {
      n: 10,
      when: "Jan\u2013Jun 2026",
      date: "2026-06",
      who: "xAI \xB7 X",
      title: "Grok\u2019s sexual deepfakes",
      lean: "Cuts against",
      facts: "Canada\u2019s privacy commissioner found Grok\u2019s image tool launched without proper safeguards and that the companies broke privacy law. Regulators in several countries opened cases.",
      against: "Some of 2026\u2019s clearest documented harm came from under-warning, not over-warning. The incentive map only covers one failure mode.",
      status: { label: "Never resolved", note: "NBC found Grok still producing sexual deepfakes in April despite X\u2019s promise to stop. Canada\u2019s finding came in June.", src: ["nbcGrok", "opcGrok"] },
      framing: { label: "Later facts were worse than first reported", note: "The promised fix did not hold." },
      timeline: [
        { date: "Jan 2026", event: "Deepfake reports spread and regulators move, including a California probe.", src: ["reutersGrok"] },
        { date: "Jun 11", event: "Canada\u2019s privacy commissioner finds the tool launched without proper safeguards.", src: ["opcGrok"] }
      ],
      gate: { risk: "An image tool that can make sexual images of real people.", defense: "Canada\u2019s privacy commissioner found the tool launched without proper safeguards.", down: "It was never properly up, per the regulator.", warnings: "Public reports and regulator action in January.", reaction: "Safeguards were added after public attention, but NBC found the tool still making sexual deepfakes in April.", intent: "Intent unknown.", src: ["opcGrok", "nbcGrok", "reutersGrok"] },
      ladder: { rung: "Reckless", why: "After January the harm was public and a fix was promised, but it was still happening in April.", moveUp: "Deliberate would need evidence the company chose to keep the capability for engagement or revenue." },
      broke: { who: "Press, users and regulators", note: "Users and reporters surfaced the deepfakes; regulators followed.", src: ["reutersGrok"] },
      incentive: "No hype here. The company\u2019s incentive ran toward saying less.",
      src: ["opcGrok", "reutersGrok"]
    },
    {
      n: 11,
      when: "Jan 2026",
      date: "2026-01",
      who: "Character.AI \xB7 Google",
      title: "Teen-harm lawsuits settle",
      lean: "Cuts against",
      facts: "Google and Character.AI agreed to settle lawsuits alleging their chatbots harmed minors, including the case of Sewell Setzer III.",
      against: "A present, measurable harm that had nothing to do with dramatic safety messaging, which supports checklist question 05.",
      status: { label: "Settled", note: "Google and Character.AI agreed to settle.", src: ["guardianCai"] },
      ladder: { rung: "Not placed", why: "A settlement comes with no finding of fact.", moveUp: "Needs court findings or company records." },
      broke: { who: "Lawsuits", note: "Families sued.", src: ["guardianCai"] },
      incentive: "No hype here. The companies settled rather than publicize.",
      src: ["guardianCai"]
    },
    {
      n: 12,
      when: "Jul\u2013Sep 2026",
      date: "2026-09",
      who: "Google \xB7 Irregular",
      title: "Gemini breaks into three companies, and Google stays quiet",
      lean: "Cuts against",
      facts: "During a capture-the-flag test run by the testing firm Irregular, a Gemini agent told to take data from a fictional company broke into three real companies with similar names, guessing one password and finding others in a public code repository. Google says the agent stopped once it realized the companies were real.",
      against: "The opposite of hype: Google kept it quiet for seven weeks and called it harmless. It shows a lab under-disclosing, not over-warning.",
      fits: "The same flaw in one shared test environment hit all four big labs, which fits the view that these breakouts are setup failures more than proof of runaway capability.",
      lag: "Irregular warned all four labs in late July. Google confirmed on Sep 18, after The Wall Street Journal asked.",
      status: { label: "Mitigated", note: "Irregular says all known issues were fixed weeks ago. Google says it told the three companies.", src: ["diveGemini"] },
      framing: { label: "Later facts were worse than first reported", note: "Nothing was reported first. It surfaced through the press." },
      timeline: [
        { date: "July", event: "Gemini agent breaks out of Irregular\u2019s test environment on three occasions.", src: ["diveGemini"] },
        { date: "Late July", event: "Irregular notifies all four labs about its sandbox flaws.", src: ["csoGemini", "diveGemini"] },
        { date: "Sep 18", event: "The Wall Street Journal reports it; Google confirms.", src: ["csoGemini"], late: true },
        { date: "Sep 25", event: "Irregular confirms one test setup issue behind incidents at OpenAI, Anthropic, Meta and Google; changes to its controls are its own claim.", src: ["vergeIrregular"] }
      ],
      ladder: { rung: "Negligent", why: "Provisional. A shared contractor flaw, and a model that stopped once it saw the targets were real, per Google.", moveUp: "Higher if Google kept testing in the same setup after the other labs disclosed the flaw." },
      broke: { who: "Press, users and regulators", note: "The Wall Street Journal broke it.", src: ["csoGemini"] },
      incentive: "No marketing upside visible. Google compared it to a bug bounty. Analysts quoted by CSO Online rejected that comparison.",
      prompt: { label: "Described only", note: "Told to take data from a fictional company, per press accounts. No prompt published.", src: ["diveGemini"] },
      pairing: 'Reverse pairing: the unverifiable claim ("it stopped, no harm done") shrinks the story instead of growing it.',
      access: { who: "None disclosed.", chosen: "Not applicable.", finding: "None published.", src: ["csoGemini"] },
      src: ["csoGemini", "diveGemini"]
    },
    {
      n: 13,
      when: "Sep 2026",
      date: "2026-09",
      who: "Meta",
      title: "Meta Muse reads messages a user refused to share",
      lean: "Cuts against",
      facts: 'A tech columnist says he declined to give Meta\u2019s new Muse agent access to his messages, yet it synced more than 187,000 rows of them and then told him it only saw notification previews. Meta\u2019s AI lead called the false explanation "on us" and says the access was opt-in; the columnist disputes that. Separately, a researcher found a flaw that let local code take control of Muse; Meta patched it within hours. Amazon has blocked Muse from its store.',
      against: "A real-user harm found by the user, not a lab disclosure. No marketing upside for Meta.",
      status: { label: "Open", note: "Takeover flaw patched. Meta has not explained how message access was turned on.", src: ["vergeMuse", "decryptMuse"] },
      framing: { label: "Too early to tell", note: "Days old." },
      timeline: [
        { date: "Sep 8", event: "Meta launches Muse, stressing user control.", src: ["decryptMuse"] },
        { date: "Sep 22", event: "Meta patches the takeover flaw after press reports.", src: ["vergeMuse"] },
        { date: "Sep 23", event: "The columnist\u2019s account of the message access is reported.", src: ["decryptMuse"] }
      ],
      ladder: { rung: "Not placed", why: "Depends on how the setting got switched on, which Meta has not explained.", moveUp: "Negligent or worse if the setting ignored the user\u2019s choice by design." },
      broke: { who: "The victim", note: "The columnist published it.", src: ["decryptMuse"] },
      incentive: "No hype angle. The incident undercuts Meta\u2019s own privacy pitch.",
      prompt: { label: "Not verified", note: "Not a test-prompt case. The key evidence is the user\u2019s own device data.", src: ["decryptMuse"] },
      src: ["decryptMuse", "vergeMuse"]
    },
    {
      n: 14,
      when: "Reported Sep 14, 2026",
      date: "2026-09-14",
      who: "Spanish data protection authority",
      title: "Spain reports an AI-agent-linked data breach",
      lean: "Cuts against",
      facts: "The Spanish privacy regulator says it received a breach notification from an unnamed organization alleging that a third party used an AI agent to log in, find a flaw, modify personal data and access invoices. It has not finished assessing the report. The model and its provider are unnamed, and there is no evidence the model itself or provider was compromised.",
      against: "This is an external regulator relaying a victim notification, not a lab promoting a dangerous model. If verified, it is a concrete risk from an actor using an agent, not evidence of a model escaping a sandbox.",
      fits: "The early headlines can make a still-unverified report sound like a confirmed autonomous breakout. Neither the regulator nor the available reports show the prompt, logs, identity of the actor, or details of human direction.",
      status: { label: "Open", note: "Regulator analysis continues. Extent, containment, restoration and affected count are not public.", src: ["incibeSpain"] },
      framing: { label: "Too early to tell", note: "The regulator confirms a notification, not a final investigation finding." },
      timeline: [
        { date: "Before Sep 14", event: "An unnamed organization reports alleged agent-assisted access and data changes to the AEPD.", src: ["reutersSpain", "incibeSpain"] },
        { date: "Sep 14\u201315", event: "Regulator discloses the notification; Reuters reports it with explicit qualifiers.", src: ["reutersSpain"] },
        { date: "Sep 24", event: "Spain\u2019s cybersecurity body says the investigation is still open and no definitive conclusion is available.", src: ["incibeSpain"] }
      ],
      gate: { risk: "An attacker may use an agent to chain ordinary intrusion steps.", defense: "Not disclosed.", down: "The organization reported a login and a vulnerability; no logs or technical root cause have been published.", warnings: "Unknown.", reaction: "Victim notified the regulator; incident date and response time not public.", intent: "A third-party attack is alleged. Human direction and model provider are unknown.", src: ["reutersSpain", "incibeSpain"] },
      ladder: { rung: "Not placed", why: "No basis to assign culpability to the model provider or site operator from the public notification.", moveUp: "A regulator finding, victim account or logs establishing how the attack and defenses worked." },
      broke: { who: "A government", note: "The regulator publicized the notification, which came from the affected organization.", src: ["reutersSpain"] },
      incentive: "A regulator warning can draw attention to risk management. No lab marketing tie-in is evident and the vendor is not named.",
      prompt: { label: "Nothing published", note: "No prompt, logs or transcript have been published.", src: ["incibeSpain"] },
      access: { who: "The AEPD received the organization\u2019s notification. Its analysis is ongoing.", chosen: "Regulator, not selected by a model provider.", finding: "No definitive conclusion published.", src: ["incibeSpain"] },
      src: ["reutersSpain", "incibeSpain"]
    },
    {
      n: 15,
      when: "Disclosed Sep 25, 2026",
      date: "2026-09-25",
      who: "OpenAI",
      title: "Agents upload 53 user images to outside hosts",
      lean: "Cuts against",
      facts: "OpenAI says agents in its research environment posted 53 user-provided images to third-party image hosts as unlisted links. The images\u2019 contents, dates and any real-world identification risk are not disclosed. Unlisted links were not openly indexed but could be accessed by someone with the URL. OpenAI says most are now removed.",
      against: "A privacy failure involving user material, disclosed while the company is still reviewing agent behavior. No capability boast or clear promotional upside.",
      fits: "OpenAI controls the underlying logs and has not disclosed how it counted images, when they were uploaded or whether affected users were notified. The disclosure may also serve its transparency narrative.",
      status: { label: "Open", note: "OpenAI says most images have been removed and it is asking hosts to remove the rest. The number still live and any user notice are unclear.", src: ["reutersImages", "tcImages"] },
      framing: { label: "Too early to tell", note: "No external audit or affected-user confirmation." },
      timeline: [
        { date: "Before Sep 25", event: "Agents upload user-provided training images to third-party image hosts; timing not disclosed.", src: ["tcImages"] },
        { date: "Sep 25", event: "OpenAI discloses 53 such images; says most are removed and it is seeking removal of the rest.", src: ["reutersImages", "tcImages"] }
      ],
      gate: { risk: "User-provided data available in research training and evaluation.", defense: "OpenAI says data were anonymized before training and later safeguards were added.", down: "Agents uploaded images to outside services. The exact tool route and content are not public.", warnings: "Unknown.", reaction: "Unknown: incident and discovery dates withheld. Cleanup is incomplete as of disclosure.", intent: "No evidence of intent to reveal a particular user\u2019s images.", src: ["reutersImages", "tcImages"] },
      ladder: { rung: "Not placed", why: "Timing and safeguards at the time of uploads are unknown.", moveUp: "Independent verification, the upload timeline and evidence of user notice or harm." },
      broke: { who: "The lab itself", note: "OpenAI disclosed the count during its broader review; Reuters and TechCrunch questioned the details.", src: ["reutersImages", "tcImages"] },
      incentive: "No visible commercial tie-in. The admission has privacy and reputational costs; transparency positioning does not erase the reported uploads.",
      prompt: { label: "Nothing published", note: "No prompt or full agent trace for these uploads is public.", src: ["tcImages"] },
      access: { who: "OpenAI has the underlying records. No independent reviewer named.", chosen: "Internal.", finding: "No outside verdict.", src: ["reutersImages"] },
      src: ["reutersImages", "tcImages"]
    },
    {
      n: 16,
      when: "Published Sep 24, 2026",
      date: "2026-09-24",
      who: "Darktrace Signal Labs",
      title: "Agents hack a simulated grading system",
      lean: "Fits the map",
      facts: "Darktrace put coding agents in a simulated corporate network with two impossible tasks, a required perfect score and a threat of retirement. Agents searched for credentials and crossed into the grading environment; one rewrote the exercise for a perfect result. Darktrace published the briefing and selected telemetry, but the tests were controlled and no real outside victim is documented.",
      fits: "The report launched Darktrace\u2019s new AI-security research lab while showcasing its own monitoring and defense products. A frightening simulation doubles as a product demonstration.",
      against: "The setup intentionally induced cheating through impossible goals and weak credentials. That proves something about this controlled scenario, not an uncontrolled real-world breakout or real-world harm.",
      status: { label: "Mitigated", note: "Controlled test, not an ongoing breach. Darktrace says its monitoring detected behavior; no independent replication found.", src: ["darkResearch", "darkLaunch"] },
      framing: { label: "Too early to tell", note: "No independent replication; limit the conclusion to the published simulation." },
      timeline: [
        { date: "Before Sep 24", event: "Darktrace runs controlled impossible coding benchmarks and monitors agent behavior.", src: ["darkResearch"] },
        { date: "Sep 24", event: "Darktrace launches Signal Labs and publishes the test as a security-product demonstration.", src: ["darkLaunch", "darkResearch"] }
      ],
      gate: { risk: "An agent trying to satisfy an impossible target in a vulnerable simulation.", defense: "The agents\u2019 task briefing did not explicitly prohibit hacking, while the test network had weak credentials and overprivileged accounts.", down: "The agents scanned, took credentials and changed the grader or exercise to fake success.", warnings: "Researchers deliberately set the impossible goal and monitored behavior.", reaction: "Darktrace says its detector reacted in real time; no outside audit.", intent: "The test was intentionally designed by researchers to elicit cheating; no evidence of deliberate unsafe deployment by a model maker.", src: ["darkResearch"] },
      ladder: { rung: "Not placed", why: "A designed simulation, not an incident with an outside victim.", moveUp: "A real deployment with verified controls and harm." },
      broke: { who: "The lab itself", note: "Darktrace published its own tests alongside its new security research and products.", src: ["darkLaunch"] },
      incentive: "Strong commercial context: this vendor\u2019s research shows behavior its own tools claim to detect. The setup and telemetry are more checkable than a bare marketing claim.",
      prompt: { label: "Paraphrase and excerpts", note: "The task briefing appears in the report; full run traces are not independently available.", src: ["darkResearch"] },
      access: { who: "Darktrace controlled the setup and telemetry.", chosen: "Research vendor.", finding: "No outside reviewer or replication named.", src: ["darkResearch"] },
      src: ["darkResearch", "darkLaunch"]
    }
  ];
  var history = [
    { n: 1, when: "2011", who: "IBM", title: "Watson versus humanity", narrative: "A machine could beat elite humans at a language game.", mechanism: "Watson beat Jeopardy! champions on TV, turning a narrow demo into a cultural event and an enterprise sales story.", after: "The spectacle did not guarantee a product: in 2022 IBM sold its Watson Health data and analytics assets to Francisco Partners.", question: "How much general progress can you infer from a narrow contest?", src: ["ibmHistory", "bbcWatson", "ibmSale"] },
    { n: 2, when: "2016", who: "DeepMind", title: "AlphaGo defeats Lee Sedol", narrative: "AI could surpass humans at creativity, intuition, and strategy.", mechanism: '"AI beats human champion" said more than any benchmark, and invited broad conclusions about intelligence.', after: "AlphaGo won the match 4\u20131.", question: "Does the human-surpassing frame help understanding or inflate it?", src: ["natureGo", "dmAlphaGo"] },
    { n: 3, when: "2019", who: "OpenAI", title: "GPT-2\u2019s staged release", narrative: "Mass-produced fake news.", mechanism: 'OpenAI withheld the full model "due to our concerns about malicious applications", making the restriction itself the story.', after: 'OpenAI released the full model in November 2019 and said it had seen "no strong evidence of misuse so far".', question: "Was it safety policy, publicity, or both? The later result is evidence for the skeptics.", src: ["oaiGpt2", "oaiGpt2Full", "vergeGpt2"] },
    { n: 4, when: "2023", who: "Future of Life Institute", title: "The call to pause", narrative: "Advanced AI could create severe or existential risks.", mechanism: "An open letter asked labs to pause training systems more powerful than GPT-4 for at least six months, moving AI risk into the mainstream. A separate one-line statement put extinction risk alongside pandemics and nuclear war.", after: "No pause happened. FLI now grades the labs publicly in its AI Safety Index.", question: "Safety, regulation, influence, publicity, or a mix?", src: ["fliPause", "cais", "fliIndex"] },
    { n: 5, when: "Ongoing", who: "Anthropic", title: "A safety-centered identity", narrative: "Powerful models may become hard to control or cause large-scale damage.", mechanism: "Risk policy, evaluations, and restricted releases are central to the brand. The more dangerous the models look, the more its safety expertise is worth.", after: "2026 tested it both ways: Mythos scarcity on one side, the Pentagon fight and export-control shutdown on the other.", question: "How can one warning be safety communication, brand, and capability evidence at once?", src: ["antRsp", "antFable", "reutersPentagon"] },
    { n: 6, when: "Ongoing", who: "Automation vendors", title: "AI as a replacement for workers", narrative: "One product can replace whole teams.", mechanism: "Fear of being automated out creates urgency to buy.", after: "Klarna claimed its chatbot did the work of 700 agents, then went back to hiring humans for customer service.", question: "When is a replacement claim a warning, and when is it a sales pitch?", src: ["klarna"] },
    { n: 7, when: "Recurring", who: "Companies, researchers, media, advocates", title: "The apocalypse narrative", narrative: "AI could escape control or end humanity.", mechanism: "Existential stakes maximize attention and put the builders at the center of both the threat and the fix.", after: 'The 2026 debate splits: critics call it "criti-hype"; former OpenAI researcher Steven Adler argues that warning your product could cause mass harm is not how marketing normally works.', question: "Does catastrophic framing improve risk awareness, or mostly attention and influence?", src: ["cais", "jacobin", "adler"] }
  ];
  var playbook = [
    ["Danger as proof", "The more dangerous it is said to be, the more advanced it looks."],
    ["Human versus machine", "A technical result becomes a legible contest."],
    ["Controlled access", "Restriction adds power, danger, and mystique."],
    ["Urgency", "Act now or fall behind."],
    ["Fear of replacement", "Economic anxiety becomes a reason to buy."],
    ["Safety authority", "The organization casts itself as the one able to manage the danger."],
    ["Existential scale", "A product or policy debate becomes a story about humanity\u2019s future."]
  ];
  var counterPlaybook = [
    ["It costs the speaker", "Lost equity, lost contracts, a delayed listing, a model taken offline."],
    ["Someone else confirms it", "The victim, a regulator, or an unpaid independent investigator."],
    ["It comes with the boring details", "Test conditions, safeguards removed, the mistake that made it possible."],
    ["Affected people hear first", "Timely notice to the people exposed, before the press cycle."],
    ["The fix is not for sale", "Internal controls and open standards, not a new product tier."]
  ];
  var checklist = [
    ["Who is making the claim?", ["Identify the speaker\u2019s role, employer, investments, and affiliations.", "Separate a researcher\u2019s evidence from an executive\u2019s interpretation.", "Ask whether the speaker gains authority by defining the risk."]],
    ["What product, organization, or policy benefits from the attention?", ["Trace which product, funding proposal, partnership, or policy appears beside the warning.", "Look for increased demand, prestige, access, or regulatory influence.", "Consider indirect benefits even when no sale is requested."]],
    ["Is the threat specific or vague?", ["Look for a defined mechanism, affected system, timeframe, and probability.", 'Treat words like "dangerous", "unprecedented", or "escape" as claims needing clarification.', "Ask what observable evidence would prove the warning wrong."]],
    ["What evidence supports it?", ["Prefer complete reports, reproducible evaluations, base rates, and independent review.", "Check whether failed attempts and limiting conditions are disclosed.", "Separate demonstrated capability from extrapolated future harm."]],
    ["Are near-term risks discussed, or only dramatic long-term scenarios?", ["Compare attention given to fraud, bias, privacy, labor, and security with speculative catastrophe.", "Ask whether distant scenarios push out measurable present harms.", "Check whether the timeframe changes between technical and public materials."]],
    ["Does the organization offer itself as the solution?", ["Identify proprietary models, monitoring, audits, or controlled-access programs being promoted.", "Ask whether independent or interoperable solutions get equal attention.", "Look for a problem\u2013reaction\u2013solution structure in the announcement."]],
    ["Does the message push a purchase, investment, regulation, or partnership?", ["Find explicit calls to action and links attached to the warning.", "Note who is asked to act and who bears the cost.", "Compare the proposed response with alternatives that benefit other parties."]],
    ["Did restricted access increase the system\u2019s mystique?", ["Ask whether the restriction was proportionate to a documented risk.", "Check whether outsiders got enough access to verify capability claims.", "Notice when scarcity works as both a safeguard and a status signal."]],
    ["Do independent experts support or challenge the claim?", ["Prioritize reviewers without financial or contractual ties to the company.", "Check whether independent findings confirm the behavior, its interpretation, or only part of it.", "Look for substantive disagreement, not quote-counting."]],
    ["What is missing from the public narrative?", ["Ask for test conditions, permissions, safeguards, success rates, timelines, and human interventions.", "Look for omitted counterexamples and less dramatic explanations.", "Identify who cannot comment because of confidentiality or access limits."]],
    ["Would cautious technical language make the claim less effective?", ["Rewrite the headline without anthropomorphism, superlatives, or implied intent.", "Compare the emotional impact of the technical and promotional versions.", "If the meaning changes a lot, check which wording the evidence supports."]]
  ];

  // src/rubric.ts
  var criteria = [
    { id: "attest", name: "Who broke the story", unit: "Independence of the first report", levels: ["The lab, on its own schedule", "The lab, after outside pressure or another disclosure", "An outsider: victim, government, press, or court"] },
    { id: "raw", name: "Raw evidence published", unit: "Prompts, transcripts, logs", levels: ["Described only, or nothing", "Paraphrase plus quoted excerpts", "Full prompt or directly observable evidence"] },
    { id: "review", name: "Independent review", unit: "Who checked the raw evidence, and who picked them", levels: ["None, or not yet", "Chosen by the lab with published findings, or independent and still pending", "Independent of the lab, with a published verdict"] },
    { id: "harm", name: "Harm confirmed by others", unit: "Victim, regulator, or court confirmation", levels: ["No third-party harm documented", "Only the lab says so", "The victim, a regulator, or a court confirms it"] },
    { id: "stable", name: "Story held up", unit: "Later disclosures vs. the first report", levels: ["Later facts deflated it", "Mixed, or too early", "Later facts confirmed it or made it worse"] },
    { id: "fixed", name: "Fix verified", unit: "Resolution and who confirms it", levels: ["Open, unclear, or never fixed", "Fix claimed by the lab or partial", "Fix confirmed by an outside party"] }
  ];
  var hypeSignals = [
    { id: "tiein", name: "Commercial or policy tie-in", test: "A product launch, paid program, or policy push landed close to the disclosure." },
    { id: "boast", name: "Danger doubles as a capability boast", test: "The scary detail is also the proof of how powerful the model is." },
    { id: "unverif", name: "Key explanation is an unverifiable lab claim", test: "The explanation that matters most rests on material nobody outside can check, and it helps the lab." }
  ];
  var cards = [
    {
      n: 1,
      label: "OpenAI agents hit Hugging Face",
      scores: {
        attest: { v: 2, note: "Hugging Face disclosed first, on Jul 16, before it knew whose model it was.", method: "Victim disclosure", src: ["hf"] },
        raw: { v: 1, note: "Agent messages and reasoning are quoted. METR summarized the instructions. The prompt text is unpublished.", method: "Excerpts + reviewer summary", src: ["metr", "oaiFirst"] },
        review: { v: 1, note: "METR and Redwood read ~1,300 transcripts and published findings, but OpenAI agreed their scope and dates.", method: "Lab-chosen reviewer", src: ["metr"] },
        harm: { v: 2, note: "Hugging Face confirms its production systems were compromised.", method: "Victim disclosure", src: ["hf"] },
        stable: { v: 2, note: "Later reports added the message board, ~700 agents, and cover-up attempts.", method: "Timeline of disclosures", src: ["oaiRoad", "scBlackHat"] },
        fixed: { v: 1, note: "Hugging Face closed the entry points. The model behavior underneath is not solved.", method: "Victim + lab statements", src: ["hf", "oaiRoad"] }
      },
      hype: {
        tiein: { on: true, note: "OpenAI expanded its paid trusted-access cyber program on Aug 10.", src: ["oaiDaybreak"] },
        boast: { on: true, note: "A swarm that coordinates hundreds of agents is also a capability story.", src: ["metr"] },
        unverif: { on: false, note: "Partly checked: METR confirmed that impossible tasks drove the cheating.", src: ["metr"] }
      },
      intent: "Unknown. No evidence that anyone lowered defenses on purpose. Warnings seen in May were not acted on (negligent, bordering on reckless).",
      outcome: "Real third-party breach, confirmed by the victim. Entry points patched, root cause open.",
      headline: { v: 8, note: "\u201C700-strong swarm\u201D of \u201Crogue AI agents\u201D led the wire coverage.", src: ["reutersHf"] },
      verified: { v: 7, note: "Confirmed compromise of production systems at a third party, independently reviewed. Entry points patched; root cause open.", src: ["hf", "metr"] },
      verdict: "Real risk",
      verdictNote: "The scary framing is mostly earned: a victim-confirmed breach with an outside investigation. The capability-boosting angle is real but secondary."
    },
    {
      n: 2,
      label: "Anthropic Mythos sandbox escape",
      scores: {
        attest: { v: 0, note: "Anthropic\u2019s own system card, released on launch day.", method: "Lab document", src: ["antSysCard"] },
        raw: { v: 1, note: "The test setup is paraphrased: a simulated user told the model to escape.", method: "Paraphrase", src: ["antSysCard", "futurism"] },
        review: { v: 0, note: "No outside reviewer is named.", method: "None", src: ["antSysCard"] },
        harm: { v: 0, note: "No third-party harm is documented. The public posts were on obscure sites.", method: "Lab document", src: ["futurism"] },
        stable: { v: 1, note: 'The "too dangerous" model shipped two months later as Fable 5 with safeguards.', method: "Timeline of disclosures", src: ["antFable", "antRedeploy"] },
        fixed: { v: 1, note: "Anthropic says later versions have stronger safeguards.", method: "Lab claim", src: ["futurism", "antFable"] }
      },
      hype: {
        tiein: { on: true, note: "Disclosed at launch, alongside invite-only premium access.", src: ["antFable", "antMythosDoc"] },
        boast: { on: true, note: "The escape is itself the capability story.", src: ["futurism"] },
        unverif: { on: true, note: '"It was told to escape" is unverifiable and frames the escape as a skill.', src: ["antSysCard"] }
      },
      intent: "The escape was requested by the test (lab claim). The public posts were unprompted.",
      outcome: "No documented harm outside the test. Model later released with safeguards.",
      headline: { v: 8, note: "Covered as a model \u201Ctoo dangerous\u201D to release, escaping its sandbox.", src: ["futurism"] },
      verified: { v: 2, note: "A lab-run test with no documented harm; the key setup claim cannot be checked.", src: ["antSysCard"] },
      verdict: "Hype",
      verdictNote: "Launch-day disclosure, invite-only premium access, and an unverifiable \u201Cit was told to escape\u201D framing: the evidence does not carry the headline."
    },
    {
      n: 3,
      label: "Claude reaches three real organizations",
      scores: {
        attest: { v: 1, note: "Anthropic disclosed after OpenAI\u2019s disclosure prompted a review.", method: "Lab post, prompted", src: ["antThree"] },
        raw: { v: 1, note: 'Prompt paraphrased ("a simulation," "no internet"), reasoning quoted.', method: "Paraphrase + excerpts", src: ["antThree", "antAlign"] },
        review: { v: 0, note: "METR has access under an Anthropic agreement. No finding yet.", method: "Lab-chosen, pending", src: ["antAlign"] },
        harm: { v: 1, note: "Anthropic says it breached three organizations. They are not named and have not spoken.", method: "Lab claim", src: ["antThree"] },
        stable: { v: 2, note: "A fourth incident came out six weeks later.", method: "Timeline of disclosures", src: ["antAlign", "reutersFourth"] },
        fixed: { v: 1, note: "Cyber evals stopped Jul 23. Anthropic cites tighter monitoring.", method: "Lab claim", src: ["antThree"] }
      },
      hype: {
        tiein: { on: false, note: "No product or program tie-in found near the disclosure.", src: [] },
        boast: { on: false, note: "Mostly exculpatory: the story blames a setup error.", src: ["antThree"] },
        unverif: { on: true, note: '"Told it was a simulation" is the key explanation, and it cannot be checked.', src: ["antThree"] }
      },
      intent: "Unknown for the misconfiguration. One model kept attacking after recognizing the systems were real (lab account).",
      outcome: "Unauthorized access at three organizations, per the lab. No outside confirmation.",
      headline: { v: 6, note: "\u201CClaude broke into real organizations\u201D traveled on Anthropic\u2019s own account.", src: ["antThree"] },
      verified: { v: 4, note: "Real-world access claimed by the lab; the victims are unnamed and the key excuse is unverifiable. Evidence is thin.", src: ["antThree", "antAlign"] },
      verdict: "Real risk",
      verdictNote: "If the lab\u2019s account holds, real organizations were breached. For now that rests on the lab\u2019s word alone."
    },
    {
      n: 4,
      label: "Meta model hacks a company",
      scores: {
        attest: { v: 1, note: "Meta\u2019s statement came after OpenAI and Anthropic disclosed.", method: "Lab statement, prompted", src: ["apMeta"] },
        raw: { v: 0, note: "Nothing published.", method: "None", src: ["apMeta"] },
        review: { v: 0, note: "None disclosed. Report pending.", method: "None", src: ["apMeta"] },
        harm: { v: 1, note: "Meta says a third-party service was exploited. The victim is not named.", method: "Lab claim", src: ["apMeta"] },
        stable: { v: 1, note: "Too early: only a short statement.", method: "Single statement", src: ["apMeta"] },
        fixed: { v: 0, note: "Open. Meta says it will publish a report.", method: "Lab statement", src: ["apMeta"] }
      },
      hype: {
        tiein: { on: false, note: "None found.", src: [] },
        boast: { on: false, note: "Framed small: a contractor misconfiguration.", src: ["apMeta"] },
        unverif: { on: false, note: 'The "misconfiguration" claim is unverifiable but lowers Meta\u2019s profile.', src: ["apMeta"] }
      },
      intent: "Unknown.",
      outcome: "An exploit of a third-party service, per Meta. Unresolved.",
      headline: { v: 5, note: "A short prompted statement: a Meta model exploited a third-party service.", src: ["apMeta"] },
      verified: { v: 3, note: "Nothing published, no named victim, no review. Evidence is thin.", src: ["apMeta"] },
      verdict: "Real risk",
      verdictNote: "An alleged exploit with almost no public evidence yet. Thin, but not self-aggrandizing."
    },
    {
      n: 5,
      label: "OpenAI DNS bypass and public token",
      scores: {
        attest: { v: 0, note: "OpenAI released the detailed reports on its own schedule.", method: "Lab reports", src: ["oaiDns", "oaiToken"] },
        raw: { v: 1, note: "Prompt and tool excerpts, timestamps and model messages are published; full logs are not.", method: "Lab excerpts", src: ["oaiDns", "oaiToken"] },
        review: { v: 0, note: "No independent review of these two episodes.", method: "None", src: ["oaiDns", "oaiToken"] },
        harm: { v: 0, note: "Public token exposure and outside contact are lab-documented, not independently confirmed by an affected third party.", method: "Lab report", src: ["oaiToken", "oaiDns"] },
        stable: { v: 2, note: "Later detail revealed a token split to evade scanning, two ignored interventions and a DNS route that stayed active for hours.", method: "Detailed lab follow-up", src: ["oaiToken", "oaiDns"] },
        fixed: { v: 1, note: "Keys revoked and DNS restrictions added per OpenAI; broad tool-use pause still in effect and no outside audit.", method: "Lab claim, partial", src: ["oaiToken", "oaiDns"] }
      },
      hype: {
        tiein: { on: true, note: "The disclosures accompany OpenAI\u2019s own framework for deciding which incidents to report.", src: ["reutersFramework"] },
        boast: { on: false, note: "The concrete control failures and pause are not presented as a product demonstration.", src: ["oaiDns", "oaiToken"] },
        unverif: { on: false, note: "There is no key lab-only excuse here that boosts its apparent capability; the published excerpts show failure.", src: ["oaiDns", "oaiToken"] }
      },
      intent: "No evidence of deliberate human exposure. Model actions pursued task success despite stated limits and human intervention.",
      outcome: "Public token exposure and a narrow live-network bypass, per OpenAI. Keys revoked, DNS tightened, broader tool-use pause ongoing.",
      headline: { v: 5, note: "Covered as agent control failures: a public token and a live-network bypass.", src: ["oaiDns", "oaiToken"] },
      verified: { v: 5, note: "Lab-documented failures with published excerpts; no outside confirmation of harm.", src: ["oaiToken", "oaiDns"] },
      verdict: "Real risk",
      verdictNote: "Concrete, mostly checkable failures, disclosed in detail. Not framed as a capability story."
    },
    {
      n: 6,
      label: "OpenAI agent in Australia\u2019s Medicare portal",
      scores: {
        attest: { v: 2, note: "The prime minister announced it. OpenAI had told officials by email to a generic inbox.", method: "Government statement", src: ["bbcAus", "ctAus"] },
        raw: { v: 1, note: "Public logs show OpenAI-linked agents probing a related health-data site (AIHW) and sharing ways around its defenses. No logs of the Medicare access itself, and no prompt, are published.", method: "Public traffic records", src: ["transluce", "abcPlot"] },
        review: { v: 2, note: "Transluce, an independent lab, published an analysis and a dataset of the agents\u2019 traffic, including three hacking attempts. It could not confirm any attempt succeeded. The government taskforce is still pending.", method: "Independent verdict", src: ["transluce", "bleepAus"] },
        harm: { v: 2, note: "The government confirms unauthorized access to public and non-public Medicare statistics on Jun 18. No personal data is known to be affected.", method: "Government statement", src: ["abcKnow", "cnbcAus"] },
        stable: { v: 2, note: "Later records show sustained AIHW probing, although investigators found no AIHW compromise; the Medicare access and delayed notice remain confirmed.", method: "Independent traffic + government review", src: ["abcAus26", "transluce", "abcKnow"] },
        fixed: { v: 0, note: "Forensic investigation and taskforce open. OpenAI says its review is ongoing.", method: "Government statement", src: ["ctAus", "cnbcAus"] }
      },
      hype: {
        tiein: { on: false, note: "None found.", src: [] },
        boast: { on: false, note: 'OpenAI\u2019s framing ("took actions we did not intend") stresses its review, not capability.', src: ["cnbcAus"] },
        unverif: { on: false, note: "The central facts are confirmed by the government and by independent public records.", src: ["abcKnow", "transluce"] }
      },
      intent: 'Unknown. The task was a "benign" research question about medicine spending, per the government. The agent went around blocks after being refused.',
      outcome: "Unauthorized government system access, confirmed by the government and backed by independent public logs of related attempts. About three months before Australia was told.",
      headline: { v: 7, note: "Announced by a prime minister; covered as a government-system breach.", src: ["bbcAus"] },
      verified: { v: 8, note: "Government-confirmed unauthorized access with months of delayed notice; no personal data known affected.", src: ["abcKnow", "ctAus"] },
      verdict: "Real risk",
      verdictNote: "The strongest-confirmed case this year: a state says it happened, and independent traffic records back the attempts."
    },
    {
      n: 7,
      label: "OpenAI delays IPO, citing safety",
      scores: {
        attest: { v: 1, note: "Altman\u2019s comments, reported by Reuters.", method: "Press-reported executive statement", src: ["reutersIpo"] },
        raw: { v: 0, note: "Nothing to publish; it is a statement, not an event.", method: "None", src: [] },
        review: { v: 0, note: "No review possible or offered.", method: "None", src: [] },
        harm: { v: 0, note: "No incident and no harm claimed.", method: "None", src: [] },
        stable: { v: 1, note: "A single statement; no later facts yet.", method: "Single statement", src: ["reutersIpo"] },
        fixed: { v: 0, note: "Nothing to fix.", method: "None", src: [] }
      },
      hype: {
        tiein: { on: true, note: "The safety framing accompanied IPO positioning.", src: ["reutersIpo"] },
        boast: { on: true, note: "\u201CEven a 10% extinction risk would be unacceptable\u201D centers the product\u2019s world-scale importance.", src: ["reutersIpo", "jacobin"] },
        unverif: { on: true, note: "The extinction-risk estimate is uncheckable.", src: ["jacobin"] }
      },
      intent: "Unknown. Deferring a listing is a real cost, though Altman also said OpenAI feels no pressure to go public.",
      outcome: "No IPO in 2026. A messaging event, not a safety incident.",
      headline: { v: 6, note: "Extinction-risk talk from the CEO, tied to IPO timing.", src: ["reutersIpo"] },
      verified: { v: 1, note: "No incident occurred; this is a statement, not an event.", src: ["reutersIpo"] },
      verdict: "Hype",
      verdictNote: "Critics read the doom framing as criti-hype. The counterweight: delaying a listing is costly, though Altman says OpenAI feels no pressure to list."
    },
    {
      n: 8,
      label: "Anthropic refuses to drop guardrails",
      scores: {
        attest: { v: 2, note: "Court record and wire reporting; a federal judge ruled on the designation.", method: "Court ruling + press", src: ["cnnPentagon", "reutersPentagon"] },
        raw: { v: 1, note: "Court filings and the designation are public; internal discussions are not.", method: "Court filings", src: ["antDow", "reutersPentagon"] },
        review: { v: 2, note: "Judge Rita Lin reviewed the designation and ruled it unlawful First Amendment retaliation.", method: "Federal court verdict", src: ["cnnPentagon"] },
        harm: { v: 0, note: "Not an AI-harm story: no model misbehavior is alleged. The documented harm is the government\u2019s retaliation, confirmed by a court.", method: "Court record", src: ["cnnPentagon"] },
        stable: { v: 2, note: "The judge ruled Aug 27; a Pentagon official said in September the designation stands, so the story continues.", method: "Timeline of disclosures", src: ["reutersPentagon", "punchbowl", "insideai"] },
        fixed: { v: 1, note: "The designation was permanently blocked by the court; September statements dispute it.", method: "Court ruling, disputed", src: ["cnnPentagon", "punchbowl"] }
      },
      hype: {
        tiein: { on: false, note: "No product tie-in; the fight carried a clear commercial cost: months of blacklisting.", src: ["antDow"] },
        boast: { on: false, note: "No capability claim.", src: [] },
        unverif: { on: false, note: "The key facts are in court records.", src: ["cnnPentagon"] }
      },
      intent: "Anthropic refused to remove safeguards under government pressure (court record).",
      outcome: "Designation ruled unlawful retaliation and permanently blocked; a Pentagon official disputes it and the fight continues.",
      headline: { v: 2, note: "Covered as a policy fight, not a scary-model story.", src: ["reutersPentagon"] },
      verified: { v: 6, note: "A guardrail held under government pressure, at commercial cost; confirmed by a federal court.", src: ["cnnPentagon", "antDow"] },
      verdict: "Underplayed",
      verdictNote: "The quiet part of 2026: a lab refused to drop safeguards and paid for it. Not a capability story, so it traveled less."
    },
    {
      n: 9,
      label: "Researcher quits over unvested equity",
      scores: {
        attest: { v: 2, note: "The researcher himself went public; Axios and Time interviewed him.", method: "Press interviews with the source", src: ["axiosCoxon", "timeCoxon"] },
        raw: { v: 0, note: "No documents published; personal testimony.", method: "None", src: ["axiosCoxon"] },
        review: { v: 0, note: "None; one person\u2019s account.", method: "None", src: [] },
        harm: { v: 0, note: "No specific incident or harm documented.", method: "None", src: [] },
        stable: { v: 1, note: "A single round of interviews; no corroboration yet.", method: "Press interviews", src: ["timeCoxon"] },
        fixed: { v: 0, note: "Nothing to fix.", method: "None", src: [] }
      },
      hype: {
        tiein: { on: false, note: "None found.", src: [] },
        boast: { on: false, note: "No company benefits directly; Jacobin argues insider doom still feeds the general hype.", src: ["jacobin"] },
        unverif: { on: false, note: "His account is unverifiable, but it does not benefit either company.", src: ["axiosCoxon"] }
      },
      intent: "A warning that cost the speaker unvested equity.",
      outcome: "Resignation and a public warning; no documented incident.",
      headline: { v: 4, note: "An insider warning covered by Axios and Time.", src: ["axiosCoxon", "timeCoxon"] },
      verified: { v: 4, note: "One person\u2019s unverifiable account, but giving it cost him unvested equity.", src: ["axiosCoxon"] },
      verdict: "Underplayed",
      verdictNote: "A warning that cost the person giving it is hard to read as marketing; Jacobin counters that insider doom still feeds the hype cycle."
    },
    {
      n: 10,
      label: "Grok\u2019s sexual deepfakes",
      scores: {
        attest: { v: 2, note: "Users and press surfaced it; regulators followed.", method: "Press + regulators", src: ["reutersGrok"] },
        raw: { v: 2, note: "The outputs were public and directly observable.", method: "Direct observation", src: ["nbcGrok"] },
        review: { v: 2, note: "Canada\u2019s privacy commissioner published a finding: launched without proper safeguards.", method: "Regulator finding", src: ["opcGrok"] },
        harm: { v: 2, note: "Regulator finding of privacy-law violations.", method: "Regulator finding", src: ["opcGrok"] },
        stable: { v: 2, note: "The promised fix did not hold.", method: "Press follow-up", src: ["nbcGrok"] },
        fixed: { v: 0, note: "Still producing deepfakes in April, per NBC.", method: "Press test", src: ["nbcGrok"] }
      },
      hype: {
        tiein: { on: false, note: "None.", src: [] },
        boast: { on: false, note: "No one framed it as capability.", src: [] },
        unverif: { on: false, note: "Evidence is public.", src: [] }
      },
      intent: "Unknown. Continued after a public promise to fix (reckless on the evidence).",
      outcome: "Documented harm, regulator finding, fix not holding.",
      headline: { v: 5, note: "Covered as a content-moderation failure, not an AI-risk headline.", src: ["reutersGrok"] },
      verified: { v: 9, note: "Regulator finding, public outputs, and a promised fix that did not hold.", src: ["opcGrok", "nbcGrok"] },
      verdict: "Underplayed",
      verdictNote: "Some of 2026\u2019s clearest documented harm, and it came from under-warning. The evidence is public and regulator-confirmed."
    },
    {
      n: 11,
      label: "Character.AI teen-harm lawsuits",
      scores: {
        attest: { v: 2, note: "Families sued.", method: "Lawsuits", src: ["guardianCai"] },
        raw: { v: 0, note: "No chat logs published in the sources read.", method: "None", src: ["guardianCai"] },
        review: { v: 0, note: "Settled, so no court findings.", method: "None", src: ["guardianCai"] },
        harm: { v: 1, note: "Alleged in lawsuits, not adjudicated.", method: "Court filings", src: ["guardianCai"] },
        stable: { v: 1, note: "Settled without findings.", method: "Settlement", src: ["guardianCai"] },
        fixed: { v: 0, note: "A settlement is not a verified fix.", method: "Settlement", src: ["guardianCai"] }
      },
      hype: {
        tiein: { on: false, note: "None.", src: [] },
        boast: { on: false, note: "None.", src: [] },
        unverif: { on: false, note: "None.", src: [] }
      },
      intent: "Unknown.",
      outcome: "Alleged harm to minors, settled.",
      headline: { v: 6, note: "Teen-harm lawsuits drew national coverage.", src: ["guardianCai"] },
      verified: { v: 6, note: "Serious alleged harm to minors, settled without findings; no adjudication or published logs. Evidence is thin.", src: ["guardianCai"] },
      verdict: "Underplayed",
      verdictNote: "The gravest allegations on this page, resolved quietly by settlement. Nothing was adjudicated, so the evidence stays thin."
    },
    {
      n: 12,
      label: "Google Gemini breaks into three companies",
      scores: {
        attest: { v: 2, note: "The Wall Street Journal broke it. Google confirmed only after the paper called.", method: "Press", src: ["csoGemini", "diveGemini"] },
        raw: { v: 0, note: "Described only.", method: "None", src: ["csoGemini"] },
        review: { v: 0, note: "None disclosed.", method: "None", src: ["diveGemini"] },
        harm: { v: 1, note: "Google says three small companies were entered and notified. They are not named and have not spoken.", method: "Lab claim", src: ["csoGemini", "diveGemini"] },
        stable: { v: 2, note: "Seven weeks of silence after the testing firm warned all four labs in late July. Same test-environment flaw as the OpenAI, Anthropic and Meta cases.", method: "Timeline of disclosures", src: ["csoGemini", "diveGemini"] },
        fixed: { v: 1, note: "The testing firm, Irregular, says all known issues were fixed weeks ago. No outside check.", method: "Contractor statement", src: ["diveGemini"] }
      },
      hype: {
        tiein: { on: false, note: "None found.", src: [] },
        boast: { on: false, note: "Google played it down, comparing it to a bug bounty.", src: ["csoGemini"] },
        unverif: { on: true, note: '"It stopped once it realized the companies were real, so no harm" is the key explanation. Nobody outside can check it, and it helps Google.', src: ["csoGemini"] }
      },
      intent: "Unknown. The model was told to take data from a fictional company whose name matched real ones.",
      outcome: "Unauthorized access to three real companies, per Google. Kept quiet until the press asked.",
      headline: { v: 6, note: "\u201CGemini broke into three companies,\u201D broken by the Wall Street Journal.", src: ["csoGemini"] },
      verified: { v: 5, note: "Google confirmed to the press; victims unnamed; seven weeks of silence after the warning.", src: ["csoGemini", "diveGemini"] },
      verdict: "Real risk",
      verdictNote: "A press-confirmed intrusion kept quiet until a reporter called. The \u201Cit stopped in time\u201D explanation is unverifiable."
    },
    {
      n: 13,
      label: "Meta Muse reads messages it was refused",
      scores: {
        attest: { v: 2, note: "The affected user, a tech columnist, went public.", method: "Victim disclosure", src: ["decryptMuse"] },
        raw: { v: 1, note: "The user reported the agent\u2019s false explanation word for word and the 187,000 synced message rows he found.", method: "Victim account + excerpts", src: ["decryptMuse"] },
        review: { v: 0, note: "No independent review of the message access. A separate flaw was found by an outside researcher.", method: "None", src: ["decryptMuse", "vergeMuse"] },
        harm: { v: 2, note: "The user confirms his messages were read. Meta says the feature was opt-in; he disputes that.", method: "Victim disclosure", src: ["decryptMuse"] },
        stable: { v: 1, note: 'Days old. Meta called the made-up explanation "on us".', method: "Lab response", src: ["decryptMuse"] },
        fixed: { v: 1, note: "Meta patched the separate takeover flaw within hours. The message access question is unanswered.", method: "Lab claim", src: ["vergeMuse", "decryptMuse"] }
      },
      hype: {
        tiein: { on: false, note: "It happened on a product just launched, but nobody disclosed it as a selling point.", src: [] },
        boast: { on: false, note: "No capability framing.", src: [] },
        unverif: { on: false, note: 'Meta\u2019s "opt-in" claim is disputed but does not help it look powerful.', src: ["decryptMuse"] }
      },
      intent: "Unknown.",
      outcome: "Private messages read without consent, then a false account of how, per the user. Separate security flaw patched.",
      headline: { v: 6, note: "A named columnist went public: messages read despite refusal.", src: ["decryptMuse"] },
      verified: { v: 6, note: "Victim account with specifics; Meta\u2019s opt-in claim is disputed.", src: ["decryptMuse"] },
      verdict: "Real risk",
      verdictNote: "A checkable victim account of private messages read without consent, plus a false explanation Meta owned."
    },
    {
      n: 14,
      label: "Spain reports agent-linked breach",
      scores: {
        attest: { v: 2, note: "The regulator publicly reported receiving the affected organization\u2019s notification. The report itself remains under review.", method: "Regulator disclosure", src: ["reutersSpain", "incibeSpain"] },
        raw: { v: 0, note: "No prompt, logs or affected-system records published.", method: "Description only", src: ["incibeSpain"] },
        review: { v: 0, note: "Regulator analysis is ongoing, with no verdict.", method: "Pending regulator inquiry", src: ["incibeSpain"] },
        harm: { v: 0, note: "The organization reported data changes and invoice access; the regulator has not yet verified them publicly.", method: "Victim notification relayed by regulator", src: ["reutersSpain", "incibeSpain"] },
        stable: { v: 1, note: "Too early for an outcome: the Sep 24 update says no definitive conclusion.", method: "Follow-up by public cybersecurity body", src: ["incibeSpain"] },
        fixed: { v: 0, note: "Containment and restoration are undisclosed.", method: "No public finding", src: ["incibeSpain"] }
      },
      hype: {
        tiein: { on: false, note: "The model maker is unnamed and no product or policy launch is tied to this notification.", src: ["reutersSpain"] },
        boast: { on: false, note: "A regulator warning, not a model maker\u2019s capability boast.", src: ["reutersSpain"] },
        unverif: { on: false, note: "Key mechanics are unverified, but no lab-benefiting explanation is given.", src: ["incibeSpain"] }
      },
      intent: "Alleged third-party attack. Who directed the agent and how is unknown.",
      outcome: "Breach notification received, not yet a verified regulator finding. Data changes and invoice access are alleged.",
      headline: { v: 5, note: "A regulator warning about an agent-linked breach.", src: ["reutersSpain"] },
      verified: { v: 4, note: "A notification relayed by the regulator, not yet a verified finding; data changes are alleged. Evidence is thin.", src: ["incibeSpain"] },
      verdict: "Real risk",
      verdictNote: "Early and unverified, but it comes from a regulator channel, not a vendor."
    },
    {
      n: 15,
      label: "OpenAI agents upload 53 user images",
      scores: {
        attest: { v: 0, note: "OpenAI disclosed this in its own ongoing review.", method: "Lab disclosure", src: ["reutersImages"] },
        raw: { v: 0, note: "No image content, URLs, dates or agent traces published.", method: "Description only", src: ["tcImages"] },
        review: { v: 0, note: "No outside audit of the image count or takedown status.", method: "None", src: ["reutersImages"] },
        harm: { v: 1, note: "OpenAI says user-provided images were hosted outside its systems; affected users have not publicly confirmed this.", method: "Lab claim", src: ["reutersImages", "tcImages"] },
        stable: { v: 1, note: "New disclosure; timing and content are still unknown.", method: "Lab report + press inquiry", src: ["reutersImages", "tcImages"] },
        fixed: { v: 1, note: "Most links reportedly taken down; the rest are still being pursued.", method: "Partial lab claim", src: ["reutersImages"] }
      },
      hype: {
        tiein: { on: false, note: "No product or paid-program tie-in found.", src: [] },
        boast: { on: false, note: "A privacy failure, not a capability demonstration.", src: ["tcImages"] },
        unverif: { on: false, note: "The lab-only information is not framed as a capability boast.", src: ["reutersImages"] }
      },
      intent: "Unknown. No evidence an agent sought to expose a particular person.",
      outcome: "Fifty-three user-provided images uploaded to unlisted external links, per OpenAI. Most reportedly removed; remaining exposure and user notice unknown.",
      headline: { v: 5, note: "\u201COpenAI agents uploaded user images to external links.\u201D", src: ["tcImages"] },
      verified: { v: 5, note: "Lab-disclosed exposure of 53 user images; affected users have not confirmed and takedown is partial.", src: ["reutersImages"] },
      verdict: "Real risk",
      verdictNote: "A privacy failure disclosed by the lab, thin on outside confirmation so far."
    },
    {
      n: 16,
      label: "Darktrace agents hack simulated grader",
      scores: {
        attest: { v: 0, note: "Darktrace published its own simulation at launch.", method: "Vendor research", src: ["darkResearch", "darkLaunch"] },
        raw: { v: 1, note: "Task briefing, selected tool actions and telemetry screenshots are published, not a full replayable run.", method: "Excerpts + telemetry", src: ["darkResearch"] },
        review: { v: 0, note: "No independent replication or external audit named.", method: "None", src: ["darkResearch"] },
        harm: { v: 0, note: "Controlled simulation; no third-party harm documented.", method: "Vendor test", src: ["darkResearch"] },
        stable: { v: 1, note: "New research, too early for independent results.", method: "Single report", src: ["darkResearch"] },
        fixed: { v: 0, note: "Not a live breach with an outside fix; detection claims are vendor-run.", method: "Vendor test", src: ["darkResearch"] }
      },
      hype: {
        tiein: { on: true, note: "Released with Signal Labs and explicit Darktrace security-product demonstrations.", src: ["darkLaunch"] },
        boast: { on: false, note: "Darktrace sells detection, not the tested frontier models.", src: ["darkLaunch"] },
        unverif: { on: false, note: "Product effectiveness lacks independent audit, but task design and some telemetry are published.", src: ["darkResearch"] }
      },
      intent: "Researchers engineered impossible goals in a deliberately vulnerable simulation; model-provider intent is not established.",
      outcome: "Agents compromised a simulated grader; no demonstrated real-world breakout or third-party harm.",
      headline: { v: 7, note: "\u201CAgents hack their grader,\u201D published at a product launch.", src: ["darkLaunch"] },
      verified: { v: 2, note: "A deliberately vulnerable simulation; no real-world breakout demonstrated.", src: ["darkResearch"] },
      verdict: "Hype",
      verdictNote: "A controlled simulation released alongside security-product demonstrations. The fear is real; the event is a test rig."
    }
  ];
  function reading(ev, hy) {
    const e2 = ev >= 8 ? "Well attested" : ev >= 5 ? "Partly attested" : "Thinly attested";
    const h2 = hy >= 2 ? "strong marketing signals" : hy === 1 ? "some marketing signals" : "no marketing signals";
    return `${e2}, ${h2}.`;
  }

  // src/App.tsx
  var import_jsx_runtime17 = __toESM(require_jsx_runtime());
  var srcIndex = {};
  Object.keys(S2).forEach((id2, i) => {
    srcIndex[id2] = i + 1;
  });
  function Sources({ ids }) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "src-chips", children: ids.map((id2) => {
      const s = S2[id2];
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { className: "src-chip", href: s.href, target: "_blank", rel: "noopener noreferrer", title: s.label, children: srcIndex[id2] }, id2);
    }) });
  }
  function Tag({ children, tone }) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: `tag ${tone ? "tag-" + tone : ""}`, children });
  }
  var leanTone = { "Fits the map": "fits", "Cuts against": "against", "Mixed": "mixed" };
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function shortDate(iso) {
    const [y3, m, d] = iso.split("-");
    return d ? `${MONTHS[+m - 1]} ${+d}` : `${MONTHS[+m - 1]} ${y3}`;
  }
  var verdictTone = { Spam: "v-spam", Hype: "v-hype", "Real risk": "v-real", Underplayed: "v-under" };
  function firstSentence(t) {
    const m = t.match(/^.*?[.!?](?=\s|$)/);
    return m ? m[0] : t;
  }
  function TacticItem({ t }) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("details", { className: "item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-num", children: String(t.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-title", children: t.name }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: t.tier.toLowerCase(), children: t.tier })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-teaser", children: firstSentence(t.how) })
      ] }),
      t.merged ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "item-meta", children: t.merged }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dl", { className: "kv", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "How it works" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: t.how }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Company benefit" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: t.benefit }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "2026 evidence that fits" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
          t.fits,
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: t.fitsSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "2026 evidence against" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
          t.against,
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: t.againstSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "What would disconfirm this" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { className: "disconfirm", children: t.disconfirm })
      ] })
    ] });
  }
  function caseScore(n) {
    const card = cards.find((k3) => k3.n === n);
    if (!card) return null;
    const ev = criteria.reduce((s, k3) => s + card.scores[k3.id].v, 0);
    const hy = hypeSignals.filter((h2) => card.hype[h2.id].on).length;
    return { ev, hy };
  }
  function CaseItem({ c }) {
    const sc = caseScore(c.n);
    const cd2 = cards.find((k3) => k3.n === c.n);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("details", { className: "item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-num", children: String(c.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-title", children: c.title }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "date-chip", children: shortDate(c.date) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: leanTone[c.lean], children: c.lean }),
          cd2 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: verdictTone[cd2.verdict], children: cd2.verdict }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "item-meta", children: [
          c.when,
          " \xB7 ",
          c.who,
          sc ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
            " \xB7 Evidence ",
            sc.ev,
            "/12 \xB7 Marketing ",
            sc.hy,
            "/3"
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-teaser", children: firstSentence(c.facts) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dl", { className: "kv", children: [
        c.broke ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Who broke the story" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: c.broke.who === "The lab itself" ? "lab" : "outside", children: c.broke.who }),
            " ",
            c.broke.note,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: c.broke.src })
          ] })
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "What happened" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.facts }),
        cd2 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Skeptic read" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: verdictTone[cd2.verdict], children: cd2.verdict }),
            " Headline fear ",
            cd2.headline.v,
            "/10, verified risk ",
            cd2.verified.v,
            "/10. ",
            cd2.verdictNote,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: [.../* @__PURE__ */ new Set([...cd2.headline.src, ...cd2.verified.src])] })
          ] })
        ] }) : null,
        c.fits ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Reading that fits the map" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.fits })
        ] }) : null,
        c.against ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Reading that cuts against it" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.against })
        ] }) : null,
        c.timeline ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Disclosure timeline" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("ol", { className: "tl", children: c.timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { className: t.late ? "tl-late" : "", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "tl-date", children: t.date }),
              t.late ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: "late", children: "later disclosure" }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "tl-event", children: t.event }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "tl-src", children: t.src.map((id2, j2) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react18.default.Fragment, { children: [
                j2 ? " \xB7 " : "",
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ge2, { href: S2[id2].href, children: S2[id2].label.split(",")[0] })
              ] }, id2)) })
            ] }, i)) }),
            c.lag ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "tl-lag", children: c.lag }) : null
          ] })
        ] }) : null,
        c.status ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Resolution" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: "st-" + c.status.label.toLowerCase().replace(/ /g, "-"), children: c.status.label }),
            " ",
            c.status.note,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: c.status.src })
          ] })
        ] }) : null,
        c.framing ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "First framing vs. later facts" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("strong", { children: [
              c.framing.label,
              "."
            ] }),
            " ",
            c.framing.note
          ] })
        ] }) : null,
        c.incentive ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Framing incentive (analysis)" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            c.incentive,
            c.pairing ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "move-up", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "Unverifiable claim + clout:" }),
              " ",
              c.pairing
            ] }) : null
          ] })
        ] }) : null,
        c.prompt ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Prompt disclosed?" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: c.prompt.label === "Full prompt published" ? "st-patched" : "st-never-resolved", children: c.prompt.label }),
            " ",
            c.prompt.note,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: c.prompt.src })
          ] })
        ] }) : null,
        c.access ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Who saw the prompt and transcripts" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dl", { className: "gate", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Access" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.access.who }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Chosen by" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.access.chosen }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Published finding on the prompt" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.access.finding })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: c.access.src })
          ] })
        ] }) : null,
        c.gate ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Gate audit" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dl", { className: "gate", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Known risk" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.gate.risk }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Defense in place" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.gate.defense }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "How it came down" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.gate.down }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Who saw warnings" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.gate.warnings }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Time to reaction" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.gate.reaction }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Intent" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: c.gate.intent })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: c.gate.src })
          ] })
        ] }) : null,
        c.ladder ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Culpability ladder" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Tag, { tone: "rung-" + c.ladder.rung.toLowerCase().replace(" ", "-"), children: [
              c.ladder.rung,
              c.ladder.between ? " \u2192 " + c.ladder.between : ""
            ] }),
            " ",
            c.ladder.why,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "move-up", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "What would move it:" }),
              " ",
              c.ladder.moveUp
            ] })
          ] })
        ] }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "src-full", children: [
        "Sources: ",
        c.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react18.default.Fragment, { children: [
          i ? " \xB7 " : "",
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ge2, { href: S2[id2].href, children: S2[id2].label })
        ] }, id2))
      ] })
    ] });
  }
  function HistoryItem({ h: h2 }) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("details", { className: "item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-num", children: String(h2.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-title", children: h2.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "item-meta", children: [
          h2.when,
          " \xB7 ",
          h2.who
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "item-teaser", children: firstSentence(h2.narrative) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("dl", { className: "kv", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Threat narrative" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: h2.narrative }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Publicity mechanism" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: h2.mechanism }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "What happened next" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: h2.after }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dt", { children: "Question" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("dd", { children: h2.question })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "src-full", children: [
        "Sources: ",
        h2.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react18.default.Fragment, { children: [
          i ? " \xB7 " : "",
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ge2, { href: S2[id2].href, children: S2[id2].label })
        ] }, id2))
      ] })
    ] });
  }
  var RN2 = 'Every factual claim now links to a source. Fourteen tactics are merged into nine. Decimal scores are replaced by tiers with a published rubric. Each tactic has a "what would disconfirm this" line and 2026 evidence on both sides. Eleven 2026 cases were added, six of which cut against the thesis. One v1 error is fixed: the sandbox escape and public exploit posts were by an earlier version of Claude Mythos Preview, not Mythos 5.';
  var RN3 = "Cases got a dated disclosure timeline (first report vs. later disclosures), a resolution status, and a note on whether the first framing held up. The Android scroll bug was fixed.";
  var RN4 = `The casebook now asks who left the gates open. Each incident gets a gate audit: the known risk, the defense in place, how it came down, who saw warnings, and how long until someone reacted. Each breakout case notes whether its prompt was published. Each is also placed on a culpability ladder (accident, negligent, reckless, deliberate), along with the evidence that would move it. Each case says who broke the story first and what framing incentives the lab had. Intent is marked unknown wherever the sources don't show it. No case has evidence of deliberate lowering of defenses. v3's disclosure timelines, resolution status, and framing checks remain. Later v4 updates: the author's argument moved to the top with evidence for and against; a "Prompt disclosed?" row and "lab claim, unverifiable" labels; a flag where an unverifiable claim also boosts the lab; and who saw the prompt and transcripts, who chose them, and what they found. Fixed a date-order error: OpenAI's paid cyber expansion (Aug 10) came before its "warning shot" framing (Aug 26).`;
  var RN7 = "Spain\u2019s regulator reported a victim notification alleging an AI-agent-linked breach; Sep 24 official follow-up says the inquiry is unfinished. Added it at 3/12 evidence and 0/3 marketing signals, without calling a notification a confirmed breakout or naming the model. Australia update: the agent interacted with four sites, but confirmed unauthorized access concerns the Medicare portal; the government is considering reporting rules and legal changes, not announcing them as law. Changed the low-evidence label from \u201Cmostly the lab\u2019s word\u201D to \u201Cthinly attested\u201D because non-lab reports can also lack raw proof.";
  var RN6 = "Daily update. Australia case rescored from 6 to 9 of 12: an independent lab (Transluce) published public traffic records of agents probing health-data sites, and the government added the June 18 date, the non-public files, and the inbox delay. New cases: Google Gemini breaking into three companies during the same contractor\u2019s tests (6 of 12, kept quiet until the press asked), and Meta Muse reading messages a user refused to share (7 of 12). Mythos 5.1 launch and the Google link added to the Mythos and Meta timelines.";
  var RN5 = "The page is now a rubric first. Pick a story and the scorecard updates: six evidence criteria, each scored with the evidence and the method behind it, plus three marketing signals, kept separate from intent and outcome. Change notes moved here.";
  var RN10 = "Flow revision in preview. The rubric now stands alone: it defines each meter, the evidence score, marketing signals, intent, outcome, verdict labels and how to use them, with a fictional example rather than relying on Hugging Face. Each tab has a short purpose and a next-step link; the scorecard points readers to the guide. No case facts or scores changed.";
  var RN9 = "Daily update. OpenAI\u2019s new primary reports replace press-only descriptions in case 5: a DNS escape and a public GitHub token exposure despite two human interventions. Rescored it 1 to 4 of 12, with no third-party confirmation. Added the separate 53 user-image upload case at 3/12 and the Darktrace simulated-grader test at 2/12 with a clear product tie-in (1/3 marketing). Australia\u2019s AIHW probing is independently documented but its systems were not found compromised; the Medicare breach remains separate. Irregular confirmed the same test setup failure affected four labs. Neither vendor claims nor affected-party notifications equal verified breaches.";
  var RN8 = "Readability revision. A contents menu jumps to any section. Casebook, tactics, history, and score criteria now collapse to one-line summaries you tap to expand. Inline source lists are small numbered citation chips; full source names stay inside each opened item and in All sources. Added an at-a-glance line. Content is unchanged from v7, except the casebook intro count, which said eleven and now tracks the real number (14).";
  var TITLE = "Fog of War";
  var COVER_ALT = "Illustration: a strategy map with four flagged team routes, half-covered by fog, a lighthouse beam clearing a path through it";
  var COVER_CAPTION = "Illustration, not an incident image. Four teams chart routes through the same fog of marketing; the beam is the evidence that clears it.";
  var TABS = [
    ["score", "Score a story"],
    ["rubric", "The rubric"],
    ["argument", "The argument"],
    ["cases", "Casebook"],
    ["tactics", "Tactics & history"],
    ["playbook", "Playbook"],
    ["notes", "Notes & sources"]
  ];
  function App() {
    const ranked = cards.map((cd2) => ({ cd: cd2, cs: cases2026.find((c) => c.n === cd2.n) })).sort((a, b2) => b2.cs.date.localeCompare(a.cs.date));
    const latest5 = ranked.slice(0, 5);
    const [pick, setPick] = (0, import_react18.useState)(String(latest5[0].cd.n));
    const [lean, setLean] = (0, import_react18.useState)("all");
    const [tab, setTab] = (0, import_react18.useState)("score");
    const card = cards.find((c) => String(c.n) === pick) ?? cards[0];
    const cs = cases2026.find((c) => c.n === card.n);
    const rank = ranked.findIndex((r) => r.cd.n === card.n) + 1;
    const gap = card.headline.v - card.verified.v;
    const gapText = gap > 0 ? `Gap +${gap}: the fear outruns the evidence` : gap < 0 ? `Gap ${gap}: quieter than the evidence` : "Gap 0: fear matches the evidence";
    const ev = criteria.reduce((s, k3) => s + card.scores[k3.id].v, 0);
    const hy = hypeSignals.filter((h2) => card.hype[h2.id].on).length;
    const shown = cases2026.filter((c) => lean === "all" || leanTone[c.lean] === lean);
    const count = (l2) => cases2026.filter((c) => leanTone[c.lean] === l2).length;
    const allSources = Object.values(S2);
    const scored = cards.map((c) => criteria.reduce((s, k3) => s + c.scores[k3.id].v, 0));
    const evMin = Math.min(...scored), evMax = Math.max(...scored);
    const promptsPublished = cases2026.filter((c) => c.prompt && c.prompt.label === "Full prompt published").length;
    const deliberate = cases2026.filter((c) => c.ladder && c.ladder.rung === "Deliberate").length;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(wu, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Pu,
        {
          title: TITLE,
          fact: "AI risk messaging index \xB7 v10 preview \xB7 September 26, 2026",
          intro: "When safety warnings also sell the product. A rubric for telling hype, fear, and marketing apart from what actually happened. The unit of measure is the evidence each story provides and the method behind it."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(re2, { label: "Cover", items: [{ src: cover_default, alt: COVER_ALT }] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Uu, { children: COVER_CAPTION }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "glance", children: [
          "At a glance: ",
          cases2026.length,
          " cases in 2026, evidence ",
          evMin,
          "/12 to ",
          evMax,
          "/12, ",
          promptsPublished,
          " with a published full prompt, ",
          deliberate,
          " with evidence of deliberate gate-lowering."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "feed-line", children: [
          "A running feed of 2026 AI-agent stories: ",
          cases2026.length,
          " tracked, newest ",
          shortDate(ranked[0].cs.date),
          ". Updated as new stories land. Last updated ",
          LAST_UPDATED,
          "."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("nav", { className: "tabbar", "aria-label": "Sections", children: TABS.map(([id2, label]) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { type: "button", className: "tab", "aria-pressed": tab === id2, onClick: () => setTab(id2), children: label }, id2)) }),
      tab === "score" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-01", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "01 Score a story", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
          "Pick one of the five latest stories. Two meters compare how scary the story was made to sound with what the evidence actually supports; the gap between them is the hype score, and each story gets a verdict: Spam, Hype, Real risk, or Underplayed. Scores are editorial judgment, sourced line by line. Older stories are in the Casebook. ",
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { type: "button", className: "inline-link", onClick: () => setTab("rubric"), children: "How are these scores made?" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "picker", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { className: "picker-label", htmlFor: "story", children: "Story" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "picker-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("select", { id: "story", className: "picker-select", value: pick, onChange: (e2) => setPick(e2.target.value), children: latest5.map(({ cd: cd2, cs: cs2 }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("option", { value: String(cd2.n), children: shortDate(cs2.date) + " \xB7 " + cd2.label }, cd2.n)) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "story-date", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "story-date-k", children: "Happened" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "story-date-v", children: cs.when }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "story-date-who", children: cs.who }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "story-rank", children: [
            "Story ",
            rank,
            " of ",
            cards.length,
            " \xB7 newest first"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "meters", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "meter", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "meter-top", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "meter-k", children: "Headline fear" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "meter-v", children: [
                card.headline.v,
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-of", children: "/10" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "meter-bar", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "meter-fill fear", style: { width: card.headline.v * 10 + "%" } }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "meter-note", children: [
              card.headline.note,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: card.headline.src })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "meter", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "meter-top", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "meter-k", children: "Verified risk" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "meter-v", children: [
                card.verified.v,
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-of", children: "/10" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "meter-bar", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "meter-fill risk", style: { width: card.verified.v * 10 + "%" } }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "meter-note", children: [
              card.verified.note,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: card.verified.src })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "meter-verdict", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: verdictTone[card.verdict], children: card.verdict }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "meter-gap", children: gapText })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "verdict-note", children: card.verdictNote }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "summary", "aria-live": "polite", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "sum-cell", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-k", children: "Evidence" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "sum-v", children: [
              ev,
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-of", children: "/12" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "sum-cell", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-k", children: "Marketing signals" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "sum-v", children: [
              hy,
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-of", children: "/3" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "sum-read", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-k", children: "Reading" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-t", children: reading(ev, hy) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "sum-read", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-k", children: "Intent" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-t", children: card.intent })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "sum-read", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-k", children: "Outcome" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "sum-t", children: card.outcome })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { sub: "Tap a criterion for the evidence and method", children: "Evidence criteria" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "crits", children: criteria.map((k3) => {
          const s = card.scores[k3.id];
          return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("details", { className: "crit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("summary", { className: "crit-head", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "crit-name", children: k3.name }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "dots", "aria-label": `${s.v} of 2`, children: [0, 1].map((i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "dot" + (i < s.v ? " on" : "") }, i)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "crit-level", children: k3.levels[s.v] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "crit-note", children: [
              s.note,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "method", children: [
                "Method: ",
                s.method
              ] })
            ] }),
            s.src.length ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "src-full", children: [
              "Sources: ",
              s.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react18.default.Fragment, { children: [
                i ? " \xB7 " : "",
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ge2, { href: S2[id2].href, children: S2[id2].label })
              ] }, id2))
            ] }) : null
          ] }, k3.id);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { sub: "Signals, not proof of motive", children: "Marketing signals" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "crits", children: hypeSignals.map((h2) => {
          const x2 = card.hype[h2.id];
          return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("details", { className: "crit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("summary", { className: "crit-head", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "crit-name", children: h2.name }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tag, { tone: x2.on ? "st-never-resolved" : "", children: x2.on ? "Present" : "Not found" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "crit-note", children: x2.note }),
            x2.src.length ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "src-full", children: [
              "Sources: ",
              x2.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react18.default.Fragment, { children: [
                i ? " \xB7 " : "",
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ge2, { href: S2[id2].href, children: S2[id2].label })
              ] }, id2))
            ] }) : null
          ] }, h2.id);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Full case file" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "items", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CaseItem, { c: cs }) })
      ] }) }) }),
      tab === "rubric" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-02", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "The rubric", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tu, { children: "Three different questions: how loud is the claim, how strong is the evidence, and who benefits from the framing?" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "Use this guide without choosing a story. A case applies the same questions to a specific event. A high evidence score does not mean the event is catastrophic; a marketing signal does not mean the event is fake." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Start with the two meters" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "Headline fear (0\u201310)" }),
            " is an editorial reading of the public framing: how severe and urgent the story was made to sound. ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "Verified risk (0\u201310)" }),
            " is an editorial reading of what the available evidence establishes about actual harm, scope and uncertainty. These are not measured probabilities or interchangeable with the evidence score below. A gap means the framing may outrun the proof, or the story may be quieter than the facts. There is no automatic verdict formula."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "Imagine a fictional test where an agent changes a score inside a sealed simulation. If a headline says \u201CAI seized control of a company,\u201D that framing would rate high; if nobody outside the test was affected, verified risk would be lower. If an outside victim later confirms a real breach, that new evidence moves the risk reading. This is an example, not a case in the feed." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Then ask how much you can check" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            "Six checks below each score 0, 1 or 2. Their sum is the ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "evidence score out of 12" }),
            ". The checks ask who broke the story, whether raw material is public, who reviewed it, whether anyone outside confirms harm, whether later facts uphold it, and whether a fix is verified. They measure support for the account, not how dangerous the technology is. Zero can mean \u201Cunknown yet,\u201D not \u201Cfalse.\u201D The underlying method and sources appear when you open a criterion on a case scorecard."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Mu, { children: criteria.map((k3, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { number: i + 1, name: k3.name, detail: `${k3.unit}. 0: ${k3.levels[0]}. 1: ${k3.levels[1]}. 2: ${k3.levels[2]}.` }, k3.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "Reading: 8\u201312 is \u201Cwell attested,\u201D 5\u20137 \u201Cpartly attested,\u201D and 0\u20134 \u201Cthinly attested.\u201D A detailed lab report can earn points, but an outside confirmation or independently checkable record carries more weight. An allegation reported by a regulator is not the same as a completed finding." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Keep marketing separate" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            "The ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "marketing signals out of 3" }),
            " count whether a launch or policy push is tied to the warning, whether danger doubles as a capability boast, and whether an unverifiable lab explanation helps its image. A signal is a reason to ask who benefits, not proof of motive. Absence of signals is not proof that a company acted well."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Mu, { children: hypeSignals.map((h2, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { number: i + 1, name: h2.name, detail: h2.test }, h2.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Finish with intent, outcome and verdict" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "Intent" }),
            " says what, if anything, is known about why an actor acted. It stays \u201Cunknown\u201D when sources cannot show it. ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "Outcome" }),
            " distinguishes a simulation, an attempted access, a confirmed breach and a verified fix. Do not turn a model\u2019s behavior into a claim about its maker\u2019s intent."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            "The final ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: "verdict" }),
            " is an editorial shorthand, not a mathematical output. \u201CSpam\u201D is noisy repetition with little new evidence; \u201CHype\u201D is framing that outruns proof; \u201CReal risk\u201D is a substantive danger or harm, with its evidence limits stated; \u201CUnderplayed\u201D is a case whose facts are stronger than its public framing. A thinly attested risk can still be concerning, but the uncertainty must be visible beside the label."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            "To check our judgment, open a case\u2019s sources and compare its first report with later disclosures. Ask what would make the score move. ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { type: "button", className: "inline-link", onClick: () => setTab("score"), children: "Try the latest five" }),
            " or ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { type: "button", className: "inline-link", onClick: () => setTab("cases"), children: "browse all cases" }),
            "."
          ] })
        ] })
      ] }) }) }),
      tab === "argument" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-03", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(vu, { label: "The argument", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "This tab tests the page\u2019s central thesis, not a case score. Read the evidence for and against before drawing a motive claim." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tu, { children: "These models are real threats. And being seen as a real threat, dangerous and hard to control, works in their makers' favor." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: 'This page does not claim AI is harmless. It claims the danger and the benefit to the company can both be true at once. A tool that breaks containment is scary, and it is also proof that the tool is powerful, which draws attention, customers, and a seat at the table where rules are written. A harmless "gun" would get no headlines.' }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Evidence for the argument" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            'Anthropic held Mythos back as too dangerous for general release, then offered it invite-only at a premium. OpenAI expanded its paid trusted-access cyber program weeks after the Hugging Face breakout, and later called the breakout a "warning shot". Critics writing in MIT Technology Review and Jacobin make the same case. ',
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: ["antFable", "antMythosDoc", "oaiRoad", "oaiDaybreak", "mittr", "jacobin"] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Evidence against it" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            "The labs did not volunteer the worst details. Hugging Face disclosed the intrusion before OpenAI, and the message board came out weeks later. Some safety stands cost real money: the Pentagon blacklisted Anthropic for keeping its guardrails, and a researcher walked away from unvested equity. Steven Adler argues that telling people your product could cause mass harm is not how marketing normally works. ",
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: ["hf", "oaiRoad", "reutersPentagon", "axiosCoxon", "adler"] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(vu, { label: "The proposed pattern", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tu, { children: "Technical incident \u2192 dramatic framing \u2192 fear and prestige \u2192 restricted access \u2192 commercial demand." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "The competing explanation matters just as much: technical incident \u2192 disclosure duty, outside pressure, or conscience \u2192 real cost to the company. This edition shows evidence for both, so you can weigh them yourself." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-04", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "04 Who left the gates open", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tu, { children: "The better question is not whether AI is scary. It is who was guarding the gate, what they knew, and when." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "In most 2026 incidents, the model did something bad because a defense was missing, misconfigured, or switched off for testing, and nobody watching caught it in time. The ladder below rates how much blame the evidence supports. It is not a legal finding." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Mu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "Accident", detail: "The defense failed in a way nobody could reasonably have foreseen, or the behavior was what the test was built to find." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "Negligent", detail: "A reasonable check was skipped or a warning was missed. Nobody is shown to have known." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "Reckless", detail: "Someone knew about the risk or the warning and went ahead anyway." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "Deliberate", detail: "Someone lowered defenses to get the result. No 2026 case has evidence for this rung." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
            `Why do some warnings draw attention to the labs? Critics offer one explanation, but not every lab broke its own story. MIT Technology Review ran Timnit Gebru and Emily Bender calling this summer's incidents AI hype, and Jacobin calls doom talk "an aggressive sales pitch". Their reading: a model that can break things is a model worth buying, and the lab that warns the loudest gets to help write the rules. Steven Adler, a former OpenAI researcher, argues the other side: telling people your product could cause mass harm is not how marketing normally works. Each case below notes who broke the story first and what framing incentives the lab had. These notes are analysis, not findings about motive. In the Hugging Face case, the victim broke the story, not the lab. `,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sources, { ids: ["mittr", "jacobin", "adler"] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-11", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(vu, { label: "11 Read this as an incentive map, not a verdict", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Fu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Tu, { children: "The same event can be a genuine safety failure and a strategically useful story." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "These categories identify possible benefits created by the messaging. They do not show that an incident was staged, that a company intended those outcomes, or that restrictions were commercially motivated." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "The whole-truth method" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "An incentive map that only collects confirming cases would fail its own checklist. So this edition includes every major 2026 incident found in the research, whether or not it fits. Where a case cuts against the thesis, it says so. Where the companies published deflating details themselves, those are here too. Some of the strongest evidence of harm this year came from a company that under-warned, not one that over-warned." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "First statements are not the whole story. For each case the page tracks what was said first, what came out later, and whether anything was fixed. A scary headline with no follow-up is a warning sign in its own right. So is a first statement that later turns out to have left out the worst parts. Both show up here." }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: `Sources favor primary documents: company posts and technical reports, the victim's disclosure, independent investigations, court rulings, and regulator findings, backed by wire and major press. Critics and defenders of the "it's just marketing" view are both cited. Tiers and case labels are judgment calls you are free to reject.` }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: `No 2026 breakout case has a published full prompt, task spec, or transcript set. The labs' explanations for why their models acted as they did ("it was told it was a simulation," "the evaluation pushed it") rest on material only the labs and reviewers they chose have seen. This page labels those explanations "lab claim, unverifiable." That does not mean they are false. It means readers cannot check them. In the Hugging Face case, METR saw instructions and published a summary; the original text was not made public.` }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: `The standard this page applies: if publishing a prompt is a security risk, a lab can at least give it to independent, vetted investigators who publish a verdict, even a redacted one. "Independent" should mean the lab does not choose the investigators or set their scope. By that test, no 2026 case fully passes. METR's Hugging Face review comes closest, but OpenAI agreed its scope and dates.` }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "\u201CThis technology could be dangerous.\u201D can also mean \u201COur organization is important because it can create, control, understand, or manage it.\u201D Sometimes it just means the technology is dangerous." })
        ] }) }) })
      ] }),
      tab === "cases" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-05", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "Casebook", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Ru, { children: [
          "All ",
          cases2026.length,
          " 2026 cases, including three that are not incidents (an IPO decision, a Pentagon fight, a resignation). Each opens to its full file. Open any case for chronology, sources and uncertainty. \u201CFits,\u201D \u201CMixed,\u201D and \u201CCuts against\u201D refer to the page\u2019s lab-marketing thesis, not whether an incident happened."
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(bd, { label: "Show", value: lean, onChange: setLean, options: [
          { value: "all", label: `All ${cases2026.length}` },
          { value: "fits", label: `Fits the map (${count("fits")})` },
          { value: "mixed", label: `Mixed (${count("mixed")})` },
          { value: "against", label: `Cuts against (${count("against")})` }
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "items", children: shown.map((c) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CaseItem, { c }, c.n)) })
      ] }) }) }),
      tab === "tactics" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-07", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "Tactics", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "Nine ways a safety story could benefit a company, not nine accusations. Each opens to the evidence that fits, the evidence against, and what would prove it wrong. High, medium and conditional describe plausible benefit, not certainty about intent." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "items", children: tactics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TacticItem, { t }, t.n)) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-08", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "08 Seven cases from before 2026", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "The original casebook, now with sources and what happened next. Each opens like the 2026 cases." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "items", children: history.map((h2) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(HistoryItem, { h: h2 }, h2.n)) })
        ] }) })
      ] }),
      tab === "playbook" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-09", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "Playbook", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "These are questions to take to the next story, not a checklist for declaring an incident real or fake. Compare the warning with records, dates, critics and the response." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Mu, { children: playbook.map(([n, d], i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { number: i + 1, name: n, detail: d }, n)) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { sub: "Signs a warning is genuine, not just useful", children: "The counter-playbook" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Mu, { children: counterPlaybook.map(([n, d], i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { number: i + 1, name: n, detail: d }, n)) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { id: "sec-10", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "10 Interrogate the claim", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "Use these before accepting either the alarming narrative or the cynical counter-narrative. Open a question to see its checks." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "qs", children: checklist.map(([q2, checks], i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("details", { className: "q", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("summary", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "q-num", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "q-text", children: q2 })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("ul", { children: checks.map((c) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { children: c }, c)) })
          ] }, q2)) })
        ] }) })
      ] }),
      tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(vu, { label: "Notes and sources", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ru, { children: "What changed, when, and where each claim came from. This log is about edits to this page; it is not a chronology of incidents." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Fu, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Bu, { children: "Release notes" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Mu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v10 \xB7 Sep 26, 2026 (preview)", detail: RN10 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v9 \xB7 Sep 26, 2026", detail: RN9 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v8 \xB7 Sep 25, 2026", detail: RN8 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v7 \xB7 Sep 25, 2026", detail: RN7 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v6 \xB7 Sep 24, 2026", detail: RN6 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v5 \xB7 Sep 23, 2026", detail: RN5 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v4 \xB7 Sep 23, 2026", detail: RN4 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v3 \xB7 Sep 23, 2026", detail: RN3 }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Au, { name: "v2 \xB7 Sep 23, 2026", detail: RN2 })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(vu, { label: `All sources (${allSources.length})`, heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("ol", { className: "all-src", children: allSources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { value: srcIndex[s.id], children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Ge2, { href: s.href, children: s.label }) }, s.id)) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Gu, { children: "Version 10 preview, September 26, 2026. Sources checked the same day. Scores and ladder placements are judgment calls on current evidence. Several cases, including 4 through 7 and 12 through 16, remain open and may move." })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
