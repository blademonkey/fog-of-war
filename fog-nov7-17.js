Ta && p === "(" ? ")" : ""), O2) {
            for (Be2 = -1, cr = k2.length; ++Be2 < cr; ) if (Ra = k2.charCodeAt(Be2), 48 > Ra || Ra > 57) {
              W2 = (Ra === 46 ? l2 + k2.slice(Be2 + 1) : k2.slice(Be2)) + W2, k2 = k2.slice(0, Be2);
              break;
            }
          }
        }
        F && !h2 && (k2 = a(k2, 1 / 0));
        var Ba = ge2.length + k2.length + W2.length, ae2 = Ba < y ? new Array(y - Ba + 1).join(c) : "";
        switch (F && h2 && (k2 = a(ae2 + k2, ae2.length ? y - W2.length : 1 / 0), ae2 = ""), m) {
          case "<":
            k2 = ge2 + k2 + W2 + ae2;
            break;
          case "=":
            k2 = ge2 + ae2 + k2 + W2;
            break;
          case "^":
            k2 = ae2.slice(0, Ba = ae2.length >> 1) + ge2 + k2 + W2 + ae2.slice(Ba);
            break;
          default:
            k2 = ae2 + ge2 + k2 + W2;
            break;
        }
        return r(k2);
      }
      return E2.toString = function() {
        return f2 + "";
      }, E2;
    }
    function i(f2, c) {
      var m = n((f2 = me2(f2), f2.type = "f", f2)), p = Math.max(-8, Math.min(8, Math.floor(J(c) / 3))) * 3, x = Math.pow(10, -p), h2 = Fl[8 + p / 3];
      return function(y) {
        return m(x * y) + h2;
      };
    }
    return { format: n, formatPrefix: i };
  }
  var dt2;
  var nt2;
  var it2;
  Co({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function Co(e2) {
    return dt2 = Al(e2), nt2 = dt2.format, it2 = dt2.formatPrefix, dt2;
  }
  var ko = /* @__PURE__ */ new Date();
  var vo = /* @__PURE__ */ new Date();
  function T(e2, a, t, o) {
    function l2(r) {
      return e2(r = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r)), r;
    }
    return l2.floor = (r) => (e2(r = /* @__PURE__ */ new Date(+r)), r), l2.ceil = (r) => (e2(r = new Date(r - 1)), a(r, 1), e2(r), r), l2.round = (r) => {
      let u = l2(r), s = l2.ceil(r);
      return r - u < s - r ? u : s;
    }, l2.offset = (r, u) => (a(r = /* @__PURE__ */ new Date(+r), u == null ? 1 : Math.floor(u)), r), l2.range = (r, u, s) => {
      let d = [];
      if (r = l2.ceil(r), s = s == null ? 1 : Math.floor(s), !(r < u) || !(s > 0)) return d;
      let n;
      do
        d.push(n = /* @__PURE__ */ new Date(+r)), a(r, s), e2(r);
      while (n < r && r < u);
      return d;
    }, l2.filter = (r) => T((u) => {
      if (u >= u) for (; e2(u), !r(u); ) u.setTime(u - 1);
    }, (u, s) => {
      if (u >= u) if (s < 0) for (; ++s <= 0; ) for (; a(u, -1), !r(u); ) ;
      else for (; --s >= 0; ) for (; a(u, 1), !r(u); ) ;
    }), t && (l2.count = (r, u) => (ko.setTime(+r), vo.setTime(+u), e2(ko), e2(vo), Math.floor(t(ko, vo))), l2.every = (r) => (r = Math.floor(r), !isFinite(r) || !(r > 0) ? null : r > 1 ? l2.filter(o ? (u) => o(u) % r === 0 : (u) => l2.count(0, u) % r === 0) : l2)), l2;
  }
  var Fe2 = T((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var Dl = Fe2.range;
  var ft2 = T((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var nd = ft2.range;
  var ct2 = T((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var id = ct2.range;
  var pt2 = T((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var fd = pt2.range;
  var mt2 = T((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var cd = mt2.range;
  var ht2 = T((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var pd = ht2.range;
  var xt2 = T((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var md = xt2.range;
  var Rl = T((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var hd = Rl.range;
  function Ae2(e2) {
    return T((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var La = Ae2(0);
  var Tl = Ae2(1);
  var Bl = Ae2(2);
  var Ol = Ae2(3);
  var ql = Ae2(4);
  var Nl = Ae2(5);
  var Ul = Ae2(6);
  var Hl = La.range;
  var gd = Tl.range;
  var Ld = Bl.range;
  var Id = Ol.range;
  var Cd = ql.range;
  var Sd = Nl.range;
  var bd = Ul.range;
  function De2(e2) {
    return T((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var Ia = De2(0);
  var $l = De2(1);
  var El = De2(2);
  var Vl = De2(3);
  var Wl = De2(4);
  var zl = De2(5);
  var Gl = De2(6);
  var Xl = Ia.range;
  var yd = $l.range;
  var wd = El.range;
  var kd = Vl.range;
  var vd = Wl.range;
  var Pd = zl.range;
  var Md = Gl.range;
  var gt2 = T((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var Fd = gt2.range;
  var Lt = T((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Ad = Lt.range;
  var Ca = T((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  Ca.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : T((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var Dd = Ca.range;
  var Sa = T((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  Sa.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : T((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var Rd = Sa.range;
  function Ao(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function Do(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function Ro(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function To(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function Bo(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function Oo(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function qo(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var Kl = { lab: ut2, hcl: so, "hcl-long": no, hsl: lo, "hsl-long": uo, cubehelix: io, "cubehelix-long": fo, rgb: Ke2 };
  function No(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Kl[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = Kl[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function Uo(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = No(a.interpolate);
      e2.interpolate(t);
    }
  }
  var Td = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var Bd = "%Y-%m-%d %H:%M";
  function Ho(e2) {
    var a = e2.tickFormat(1, Bd)(Td);
    return a === "2020-02-02 03:04";
  }
  var Zl = { day: ht2, hour: pt2, minute: ft2, month: gt2, second: Fe2, week: La, year: Ca };
  var _l = { day: xt2, hour: mt2, minute: ct2, month: Lt, second: Fe2, week: Ia, year: Sa };
  function $o(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, l2 = Ho(o);
        if (typeof t == "string") o.nice(l2 ? _l[t] : Zl[t]);
        else {
          var r = t.interval, u = t.step, s = (l2 ? _l[r] : Zl[r]).every(u);
          s != null && o.nice(s);
        }
      }
    }
  }
  function Eo(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function Vo(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function Wo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate(xa));
  }
  function zo(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function Go(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], l2 = t[1], r = l2 < o, u = r ? [l2, o] : [o, l2], s = u[0], d = u[1], n = [Math.min(0, s), Math.max(0, d)];
      e2.domain(r ? n.reverse() : n);
    }
  }
  var Od = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var qd = { domain: Ao, nice: $o, zero: Go, interpolate: Uo, round: Wo, align: Ro, base: To, clamp: Bo, constant: Oo, exponent: qo, padding: Eo, range: Do, reverse: Vo, unknown: zo };
  function ba() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), l2 = Od.filter(function(r) {
      return o.has(r);
    });
    return function(u, s) {
      return typeof s < "u" && l2.forEach(function(d) {
        qd[d](u, s);
      }), u;
    };
  }
  var Nd = ba("domain", "range", "reverse", "align", "padding", "round");
  var Ud = ba("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var Ko = Math.PI;
  var Zo = 2 * Ko;
  var Te2 = 1e-6;
  var Hd = Zo - Te2;
  function _o() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function jl() {
    return new _o();
  }
  _o.prototype = jl.prototype = { constructor: _o, moveTo: function(e2, a) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, a) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +a);
  }, quadraticCurveTo: function(e2, a, t, o) {
    this._ += "Q" + +e2 + "," + +a + "," + (this._x1 = +t) + "," + (this._y1 = +o);
  }, bezierCurveTo: function(e2, a, t, o, l2, r) {
    this._ += "C" + +e2 + "," + +a + "," + +t + "," + +o + "," + (this._x1 = +l2) + "," + (this._y1 = +r);
  }, arcTo: function(e2, a, t, o, l2) {
    e2 = +e2, a = +a, t = +t, o = +o, l2 = +l2;
    var r = this._x1, u = this._y1, s = t - e2, d = o - a, n = r - e2, i = u - a, f2 = n * n + i * i;
    if (l2 < 0) throw new Error("negative radius: " + l2);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (f2 > Te2) if (!(Math.abs(i * s - d * n) > Te2) || !l2) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var c = t - r, m = o - u, p = s * s + d * d, x = c * c + m * m, h2 = Math.sqrt(p), y = Math.sqrt(f2), F = l2 * Math.tan((Ko - Math.acos((p + f2 - x) / (2 * h2 * y))) / 2), v = F / y, S2 = F / h2;
      Math.abs(v - 1) > Te2 && (this._ += "L" + (e2 + v * n) + "," + (a + v * i)), this._ += "A" + l2 + "," + l2 + ",0,0," + +(i * c > n * m) + "," + (this._x1 = e2 + S2 * s) + "," + (this._y1 = a + S2 * d);
    }
  }, arc: function(e2, a, t, o, l2, r) {
    e2 = +e2, a = +a, t = +t, r = !!r;
    var u = t * Math.cos(o), s = t * Math.sin(o), d = e2 + u, n = a + s, i = 1 ^ r, f2 = r ? o - l2 : l2 - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + d + "," + n : (Math.abs(this._x1 - d) > Te2 || Math.abs(this._y1 - n) > Te2) && (this._ += "L" + d + "," + n), t && (f2 < 0 && (f2 = f2 % Zo + Zo), f2 > Hd ? this._ += "A" + t + "," + t + ",0,1," + i + "," + (e2 - u) + "," + (a - s) + "A" + t + "," + t + ",0,1," + i + "," + (this._x1 = d) + "," + (this._y1 = n) : f2 > Te2 && (this._ += "A" + t + "," + t + ",0," + +(f2 >= Ko) + "," + i + "," + (this._x1 = e2 + t * Math.cos(l2)) + "," + (this._y1 = a + t * Math.sin(l2))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function Yl(e2) {
    this._context = e2;
  }
  Yl.prototype = { areaStart: function() {
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
  var tu = mr(Xo());
  var ou = mr(Xo());
  var Kd = (0, import_jsx_runtime9.jsx)("svg", { "aria-hidden": "true", width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: (0, import_jsx_runtime9.jsx)("path", { d: "M11.5497 2.03292C11.7307 1.65569 12.2693 1.65569 12.4503 2.03292L15.0189 7.38732C15.0918 7.53919 15.2367 7.64404 15.4041 7.66599L21.3154 8.44106C21.732 8.49569 21.8986 9.0078 21.5935 9.29588L17.2708 13.3775C17.1479 13.4935 17.0924 13.6637 17.1232 13.8297L18.2087 19.6603C18.2853 20.0717 17.8494 20.388 17.4803 20.1888L12.2376 17.3585C12.0894 17.2785 11.9106 17.2785 11.7624 17.3585L6.51969 20.1888C6.15063 20.388 5.71473 20.0717 5.79132 19.6603L6.87675 13.8297C6.90764 13.6637 6.8521 13.4935 6.7292 13.3775L2.40651 9.29588C2.10142 9.0078 2.26803 8.49569 2.68463 8.44106L8.5959 7.66599C8.7633 7.64404 8.90823 7.53919 8.98108 7.38732L11.5497 2.03292Z" }) });

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
         
