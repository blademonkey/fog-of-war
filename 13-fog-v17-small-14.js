  function M2(e2, a) {
    var t = a - e2;
    return t ? Ar(e2, t) : He2(isNaN(e2) ? a : e2);
  }
  var Ne2 = (function e(a) {
    var t = Dr(a);
    function o(r, l2) {
      var u = t((r = Be2(r)).r, (l2 = Be2(l2)).r), s = t(r.g, l2.g), d = t(r.b, l2.b), f2 = M2(r.opacity, l2.opacity);
      return function(c) {
        return r.r = u(c), r.g = s(c), r.b = d(c), r.opacity = f2(c), r + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function Rr(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), r = new Array(t), l2 = new Array(t), u, s;
      for (u = 0; u < t; ++u) s = Be2(a[u]), o[u] = s.r || 0, r[u] = s.g || 0, l2[u] = s.b || 0;
      return o = e2(o), r = e2(r), l2 = e2(l2), s.opacity = 1, function(d) {
        return s.r = o(d), s.g = r(d), s.b = l2(d), s + "";
      };
    };
  }
  var Wu = Rr(vr);
  var Gu = Rr(Mr);
  var Ht = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Ot = new RegExp(Ht.source, "g");
  function la(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function Ur(e2) {
    return function(a, t) {
      var o = e2((a = ta(a)).h, (t = ta(t)).h), r = M2(a.s, t.s), l2 = M2(a.l, t.l), u = M2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.s = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var Ut = Ur(Ue2);
  var Nt = Ur(M2);
  function za(e2, a) {
    var t = M2((e2 = qe2(e2)).l, (a = qe2(a)).l), o = M2(e2.a, a.a), r = M2(e2.b, a.b), l2 = M2(e2.opacity, a.opacity);
    return function(u) {
      return e2.l = t(u), e2.a = o(u), e2.b = r(u), e2.opacity = l2(u), e2 + "";
    };
  }
  function Nr(e2) {
    return function(a, t) {
      var o = e2((a = oa(a)).h, (t = oa(t)).h), r = M2(a.c, t.c), l2 = M2(a.l, t.l), u = M2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.c = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var Vt = Nr(Ue2);
  var Et = Nr(M2);
  function Vr(e2) {
    return (function a(t) {
      t = +t;
      function o(r, l2) {
        var u = e2((r = Oe2(r)).h, (l2 = Oe2(l2)).h), s = M2(r.s, l2.s), d = M2(r.l, l2.l), f2 = M2(r.opacity, l2.opacity);
        return function(c) {
          return r.h = u(c), r.s = s(c), r.l = d(Math.pow(c, t)), r.opacity = f2(c), r + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var Wt = Vr(Ue2);
  var Gt = Vr(M2);
  function Gr(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function ge2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function $(e2) {
    return e2 = ge2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function zr(e2, a) {
    return function(t, o) {
      for (var r = t.length, l2 = [], u = 0, s = e2[0], d = 0; r > 0 && s > 0 && (d + s + 1 > o && (s = Math.max(1, o - d)), l2.push(t.substring(r -= s, r + s)), !((d += s + 1) > o)); ) s = e2[u = (u + 1) % e2.length];
      return l2.reverse().join(a);
    };
  }
  function Xr(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function se2(e2) {
    if (!(a = Yu.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new Xa({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  se2.prototype = Xa.prototype;
  function Xa(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  Xa.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function $r(e2) {
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
  var Zt;
  function Kr(e2, a) {
    var t = ge2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1], l2 = r - (Zt = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, u = o.length;
    return l2 === u ? o : l2 > u ? o + new Array(l2 - u + 1).join("0") : l2 > 0 ? o.slice(0, l2) + "." + o.slice(l2) : "0." + new Array(1 - l2).join("0") + ge2(e2, Math.max(0, a + l2 - 1))[0];
  }
  function _t(e2, a) {
    var t = ge2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1];
    return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
  }
  var Yt = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: Gr, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => _t(e2 * 100, a), r: _t, s: Kr, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Qt(e2) {
    return e2;
  }
  var Zr = Array.prototype.map;
  var _r = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function Yr(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? Qt : zr(Zr.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", r = e2.decimal === void 0 ? "." : e2.decimal + "", l2 = e2.numerals === void 0 ? Qt : Xr(Zr.call(e2.numerals, String)), u = e2.percent === void 0 ? "%" : e2.percent + "", s = e2.minus === void 0 ? "\u2212" : e2.minus + "", d = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function f2(i) {
      i = se2(i);
      var n = i.fill, m = i.align, x = i.sign, I2 = i.symbol, S2 = i.zero, k2 = i.width, D = i.comma, h = i.precision, P = i.trim, p = i.type;
      p === "n" ? (D = true, p = "g") : Yt[p] || (h === void 0 && (h = 12), P = true, p = "g"), (S2 || n === "0" && m === "=") && (S2 = true, n = "0", m = "=");
      var g = I2 === "$" ? t : I2 === "#" && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "", F2 = I2 === "$" ? o : /[%p]/.test(p) ? u : "", q = Yt[p], Y = /[defgprs%]/.test(p);
      h = h === void 0 ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h));
      function ve2(y2) {
        var ie2 = g, H = F2, Me2, Jo, Pa;
        if (p === "c") H = q(y2) + H, y2 = "";
        else {
          y2 = +y2;
          var va = y2 < 0 || 1 / y2 < 0;
          if (y2 = isNaN(y2) ? d : q(Math.abs(y2), h), P && (y2 = $r(y2)), va && +y2 == 0 && x !== "+" && (va = false), ie2 = (va ? x === "(" ? x : s : x === "-" || x === "(" ? "" : x) + ie2, H = (p === "s" ? _r[8 + Zt / 3] : "") + H + (va && x === "(" ? ")" : ""), Y) {
            for (Me2 = -1, Jo = y2.length; ++Me2 < Jo; ) if (Pa = y2.charCodeAt(Me2), 48 > Pa || Pa > 57) {
              H = (Pa === 46 ? r + y2.slice(Me2 + 1) : y2.slice(Me2)) + H, y2 = y2.slice(0, Me2);
              break;
            }
          }
        }
        D && !S2 && (y2 = a(y2, 1 / 0));
        var Ma = ie2.length + y2.length + H.length, Q = Ma < k2 ? new Array(k2 - Ma + 1).join(n) : "";
        switch (D && S2 && (y2 = a(Q + y2, Q.length ? k2 - H.length : 1 / 0), Q = ""), m) {
          case "<":
            y2 = ie2 + y2 + H + Q;
            break;
          case "=":
            y2 = ie2 + Q + y2 + H;
            break;
          case "^":
            y2 = Q.slice(0, Ma = Q.length >> 1) + ie2 + y2 + H + Q.slice(Ma);
            break;
          default:
            y2 = Q + ie2 + y2 + H;
            break;
        }
        return l2(y2);
      }
      return ve2.toString = function() {
        return i + "";
      }, ve2;
    }
    function c(i, n) {
      var m = f2((i = se2(i), i.type = "f", i)), x = Math.max(-8, Math.min(8, Math.floor($(n) / 3))) * 3, I2 = Math.pow(10, -x), S2 = _r[8 + x / 3];
      return function(k2) {
        return m(I2 * k2) + S2;
      };
    }
    return { format: f2, formatPrefix: c };
  }
  var $a;
  var Ka;
  var Za;
  jt({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function jt(e2) {
    return $a = Yr(e2), Ka = $a.format, Za = $a.formatPrefix, $a;
  }
  var oo = /* @__PURE__ */ new Date();
  var ro = /* @__PURE__ */ new Date();
  function A2(e2, a, t, o) {
    function r(l2) {
      return e2(l2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l2)), l2;
    }
    return r.floor = (l2) => (e2(l2 = /* @__PURE__ */ new Date(+l2)), l2), r.ceil = (l2) => (e2(l2 = new Date(l2 - 1)), a(l2, 1), e2(l2), l2), r.round = (l2) => {
      let u = r(l2), s = r.ceil(l2);
      return l2 - u < s - l2 ? u : s;
    }, r.offset = (l2, u) => (a(l2 = /* @__PURE__ */ new Date(+l2), u == null ? 1 : Math.floor(u)), l2), r.range = (l2, u, s) => {
      let d = [];
      if (l2 = r.ceil(l2), s = s == null ? 1 : Math.floor(s), !(l2 < u) || !(s > 0)) return d;
      let f2;
      do
        d.push(f2 = /* @__PURE__ */ new Date(+l2)), a(l2, s), e2(l2);
      while (f2 < l2 && l2 < u);
      return d;
    }, r.filter = (l2) => A2((u) => {
      if (u >= u) for (; e2(u), !l2(u); ) u.setTime(u - 1);
    }, (u, s) => {
      if (u >= u) if (s < 0) for (; ++s <= 0; ) for (; a(u, -1), !l2(u); ) ;
      else for (; --s >= 0; ) for (; a(u, 1), !l2(u); ) ;
    }), t && (r.count = (l2, u) => (oo.setTime(+l2), ro.setTime(+u), e2(oo), e2(ro), Math.floor(t(oo, ro))), r.every = (l2) => (l2 = Math.floor(l2), !isFinite(l2) || !(l2 > 0) ? null : l2 > 1 ? r.filter(o ? (u) => o(u) % l2 === 0 : (u) => r.count(0, u) % l2 === 0) : r)), r;
  }
  var Ie2 = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var Qr = Ie2.range;
  var _a = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var ju = _a.range;
  var Ya = A2((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var Ju = Ya.range;
  var Qa = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var es = Qa.range;
  var ja = A2((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var as = ja.range;
  var Ja = A2((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var ts = Ja.range;
  var et2 = A2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var os = et2.range;
  var jr = A2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var rs = jr.range;
  function Ce2(e2) {
    return A2((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var sa = Ce2(0);
  var Jr = Ce2(1);
  var el = Ce2(2);
  var al = Ce2(3);
  var tl = Ce2(4);
  var ol = Ce2(5);
  var rl = Ce2(6);
  var ll = sa.range;
  var us = Jr.range;
  var ss = el.range;
  var ds = al.range;
  var fs = tl.range;
  var ns = ol.range;
  var is = rl.range;
  function Se2(e2) {
    return A2((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var da = Se2(0);
  var ul = Se2(1);
  var sl = Se2(2);
  var dl = Se2(3);
  var fl = Se2(4);
  var nl = Se2(5);
  var il = Se2(6);
  var cl = da.range;
  var cs = ul.range;
  var ps = sl.range;
  var ms = dl.range;
  var xs = fl.range;
  var Ls = nl.range;
  var hs = il.range;
  var at2 = A2((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var gs = at2.range;
  var tt2 = A2((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Is = tt2.range;
  var fa = A2((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  fa.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : A2((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var Cs = fa.range;
  var na = A2((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  na.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : A2((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var Ss = na.range;
  function fo(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function no(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function io(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function co(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function po(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function mo(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function xo(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var pl = { lab: za, hcl: Vt, "hcl-long": Et, hsl: Ut, "hsl-long": Nt, cubehelix: Wt, "cubehelix-long": Gt, rgb: Ne2 };
  function Lo(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return pl[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = pl[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function ho(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = Lo(a.interpolate);
      e2.interpolate(t);
    }
  }
  var ys = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var bs = "%Y-%m-%d %H:%M";
  function go(e2) {
    var a = e2.tickFormat(1, bs)(ys);
    return a === "2020-02-02 03:04";
  }
  var ml = { day: Ja, hour: Qa, minute: _a, month: at2, second: Ie2, week: sa, year: fa };
  var xl = { day: et2, hour: ja, minute: Ya, month: tt2, second: Ie2, week: da, year: na };
  function Io(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, r = go(o);
        if (typeof t == "string") o.nice(r ? xl[t] : ml[t]);
        else {
          var l2 = t.interval, u = t.step, s = (r ? xl[l2] : ml[l2]).every(u);
          s != null && o.nice(s);
        }
      }
    }
  }
  function Co(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function So(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function yo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate(la));
  }
  function bo(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function wo(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], r = t[1], l2 = r < o, u = l2 ? [r, o] : [o, r], s = u[0], d = u[1], f2 = [Math.min(0, s), Math.max(0, d)];
      e2.domain(l2 ? f2.reverse() : f2);
    }
  }
  var ws = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var ks = { domain: fo, nice: Io, zero: wo, interpolate: ho, round: yo, align: io, base: co, clamp: po, constant: mo, exponent: xo, padding: Co, range: no, reverse: So, unknown: bo };
  function ia() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), r = ws.filter(function(l2) {
      return o.has(l2);
    });
    return function(u, s) {
      return typeof s < "u" && r.forEach(function(d) {
        ks[d](u, s);
      }), u;
    };
  }
  var Ps = ia("domain", "range", "reverse", "align", "padding", "round");
  var vs = ia("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var Po = Math.PI;
  var vo = 2 * Po;
  var be2 = 1e-6;
  var Ms = vo - be2;
  function Mo() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function Ll() {
    return new Mo();
  }
  Mo.prototype = Ll.prototype = { constructor: Mo, moveTo: function(e2, a) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, a) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +a);
  }, quadraticCurveTo: function(e2, a, t, o) {
    this._ += "Q" + +e2 + "," + +a + "," + (this._x1 = +t) + "," + (this._y1 = +o);
  }, bezierCurveTo: function(e2, a, t, o, r, l2) {
    this._ += "C" + +e2 + "," + +a + "," + +t + "," + +o + "," + (this._x1 = +r) + "," + (this._y1 = +l2);
  }, arcTo: function(e2, a, t, o, r) {
    e2 = +e2, a = +a, t = +t, o = +o, r = +r;
    var l2 = this._x1, u = this._y1, s = t - e2, d = o - a, f2 = l2 - e2, c = u - a, i = f2 * f2 + c * c;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (i > be2) if (!(Math.abs(c * s - d * f2) > be2) || !r) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var n = t - l2, m = o - u, x = s * s + d * d, I2 = n * n + m * m, S2 = Math.sqrt(x), k2 = Math.sqrt(i), D = r * Math.tan((Po - Math.acos((x + i - I2) / (2 * S2 * k2))) / 2), h = D / k2, P = D / S2;
      Math.abs(h - 1) > be2 && (this._ += "L" + (e2 + h * f2) + "," + (a + h * c)), this._ += "A" + r + "," + r + ",0,0," + +(c * n > f2 * m) + "," + (this._x1 = e2 + P * s) + "," + (this._y1 = a + P * d);
    }
  }, arc: function(e2, a, t, o, r, l2) {
    e2 = +e2, a = +a, t = +t, l2 = !!l2;
    var u = t * Math.cos(o), s = t * Math.sin(o), d = e2 + u, f2 = a + s, c = 1 ^ l2, i = l2 ? o - r : r - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + d + "," + f2 : (Math.abs(this._x1 - d) > be2 || Math.abs(this._y1 - f2) > be2) && (this._ += "L" + d + "," + f2), t && (i < 0 && (i = i % vo + vo), i > Ms ? this._ += "A" + t + "," + t + ",0,1," + c + "," + (e2 - u) + "," + (a - s) + "A" + t + "," + t + ",0,1," + c + "," + (this._x1 = d) + "," + (this._y1 = f2) : i > be2 && (this._ += "A" + t + "," + t + ",0," + +(i >= Po) + "," + c + "," + (this._x1 = e2 + t * Math.cos(r)) + "," + (this._y1 = a + t * Math.sin(r))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function hl(e2) {
    this._context = e2;
  }
  hl.prototype = { areaStart: function() {
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
  var yl = ar(ko());
  var bl = ar(ko());
  var ft = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var Pl = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var vl = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var Oo = (e2) => {
    let a = vl(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var Ml = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var Al = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var Rl = (0, import_react10.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: r = "", children: l2, iconNode: u, ...s }, d) => (0, import_react10.createElement)("svg", { ref: d, ...Ml, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: ft("lucide", r), ...!l2 && !Al(s) && { "aria-hidden": "true" }, ...s }, [...u.map(([f2, c]) => (0, import_react10.createElement)(f2, c)), ...Array.isArray(l2) ? l2 : [l2]]));
  var U2 = (e2, a) => {
    let t = (0, import_react9.forwardRef)(({ className: o, ...r }, l2) => (0, import_react9.createElement)(Rl, { ref: l2, iconNode: a, className: ft(`lucide-${Pl(Oo(e2))}`, `lucide-${e2}`, o), ...r }));
    return t.displayName = Oo(e2), t;
  };
  var Ks = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var we2 = U2("arrow-up-right", Ks);
  var Zs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var La = U2("check", Zs);
  var _s = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
  var ha = U2("chevron-left", _s);
  var Ys = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var ga = U2("chevron-right", Ys);
  var Qs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var fe2 = U2("loader-circle", Qs);
  var js = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]];
  var Ia = U2("x", js);
  function ee2({ variant: e2 = "secondary", compact: a = false, pill: t = false, selected: o, unavailable: r = false, states: l2, state: u, className: s, children: d, ...f2 }) {
