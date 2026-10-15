) * a, r, l2, u, s);
    };
  }
  var Ve2 = (e2) => () => e2;
  function Qr(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function Ss(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function Ee2(e2, a) {
    var t = a - e2;
    return t ? Qr(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : Ve2(isNaN(e2) ? a : e2);
  }
  function Jr(e2) {
    return (e2 = +e2) == 1 ? R2 : function(a, t) {
      return t - a ? Ss(a, t, e2) : Ve2(isNaN(a) ? t : a);
    };
  }
  function R2(e2, a) {
    var t = a - e2;
    return t ? Qr(e2, t) : Ve2(isNaN(e2) ? a : e2);
  }
  var We2 = (function e(a) {
    var t = Jr(a);
    function o(r, l2) {
      var u = t((r = Oe2(r)).r, (l2 = Oe2(l2)).r), s = t(r.g, l2.g), d = t(r.b, l2.b), f2 = R2(r.opacity, l2.opacity);
      return function(i) {
        return r.r = u(i), r.g = s(i), r.b = d(i), r.opacity = f2(i), r + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function el(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), r = new Array(t), l2 = new Array(t), u, s;
      for (u = 0; u < t; ++u) s = Oe2(a[u]), o[u] = s.r || 0, r[u] = s.g || 0, l2[u] = s.b || 0;
      return o = e2(o), r = e2(r), l2 = e2(l2), s.opacity = 1, function(d) {
        return s.r = o(d), s.g = r(d), s.b = l2(d), s + "";
      };
    };
  }
  var bs = el(Yr);
  var ys = el(jr);
  var Kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Zt = new RegExp(Kt.source, "g");
  function na(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function sl(e2) {
    return function(a, t) {
      var o = e2((a = sa(a)).h, (t = sa(t)).h), r = R2(a.s, t.s), l2 = R2(a.l, t.l), u = R2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.s = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var _t = sl(Ee2);
  var Yt = sl(R2);
  function Qa(e2, a) {
    var t = R2((e2 = He2(e2)).l, (a = He2(a)).l), o = R2(e2.a, a.a), r = R2(e2.b, a.b), l2 = R2(e2.opacity, a.opacity);
    return function(u) {
      return e2.l = t(u), e2.a = o(u), e2.b = r(u), e2.opacity = l2(u), e2 + "";
    };
  }
  function dl(e2) {
    return function(a, t) {
      var o = e2((a = da(a)).h, (t = da(t)).h), r = R2(a.c, t.c), l2 = R2(a.l, t.l), u = R2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.c = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var jt = dl(Ee2);
  var Qt = dl(R2);
  function fl(e2) {
    return (function a(t) {
      t = +t;
      function o(r, l2) {
        var u = e2((r = Ue2(r)).h, (l2 = Ue2(l2)).h), s = R2(r.s, l2.s), d = R2(r.l, l2.l), f2 = R2(r.opacity, l2.opacity);
        return function(i) {
          return r.h = u(i), r.s = s(i), r.l = d(Math.pow(i, t)), r.opacity = f2(i), r + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var Jt = fl(Ee2);
  var eo = fl(R2);
  function cl(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function be2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function _2(e2) {
    return e2 = be2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function pl(e2, a) {
    return function(t, o) {
      for (var r = t.length, l2 = [], u = 0, s = e2[0], d = 0; r > 0 && s > 0 && (d + s + 1 > o && (s = Math.max(1, o - d)), l2.push(t.substring(r -= s, r + s)), !((d += s + 1) > o)); ) s = e2[u = (u + 1) % e2.length];
      return l2.reverse().join(a);
    };
  }
  function ml(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var Ds = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function fe2(e2) {
    if (!(a = Ds.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new Ja({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  fe2.prototype = Ja.prototype;
  function Ja(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  Ja.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function xl(e2) {
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
  var lo;
  function Ll(e2, a) {
    var t = be2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1], l2 = r - (lo = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, u = o.length;
    return l2 === u ? o : l2 > u ? o + new Array(l2 - u + 1).join("0") : l2 > 0 ? o.slice(0, l2) + "." + o.slice(l2) : "0." + new Array(1 - l2).join("0") + be2(e2, Math.max(0, a + l2 - 1))[0];
  }
  function uo(e2, a) {
    var t = be2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1];
    return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
  }
  var so = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: cl, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => uo(e2 * 100, a), r: uo, s: Ll, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function fo(e2) {
    return e2;
  }
  var hl = Array.prototype.map;
  var gl = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function Il(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? fo : pl(hl.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", r = e2.decimal === void 0 ? "." : e2.decimal + "", l2 = e2.numerals === void 0 ? fo : ml(hl.call(e2.numerals, String)), u = e2.percent === void 0 ? "%" : e2.percent + "", s = e2.minus === void 0 ? "\u2212" : e2.minus + "", d = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function f2(c) {
      c = fe2(c);
      var n = c.fill, p = c.align, x = c.sign, m = c.symbol, C = c.zero, y2 = c.width, P = c.comma, g = c.precision, M2 = c.trim, L = c.type;
      L === "n" ? (P = true, L = "g") : so[L] || (g === void 0 && (g = 12), M2 = true, L = "g"), (C || n === "0" && p === "=") && (C = true, n = "0", p = "=");
      var h = m === "$" ? t : m === "#" && /[boxX]/.test(L) ? "0" + L.toLowerCase() : "", b = m === "$" ? o : /[%p]/.test(L) ? u : "", F2 = so[L], U2 = /[defgprs%]/.test(L);
      g = g === void 0 ? 6 : /[gprs]/.test(L) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
      function te2(w) {
        var ce2 = h, V = b, Ae2, ur, va;
        if (L === "c") V = F2(w) + V, w = "";
        else {
          w = +w;
          var Ma = w < 0 || 1 / w < 0;
          if (w = isNaN(w) ? d : F2(Math.abs(w), g), M2 && (w = xl(w)), Ma && +w == 0 && x !== "+" && (Ma = false), ce2 = (Ma ? x === "(" ? x : s : x === "-" || x === "(" ? "" : x) + ce2, V = (L === "s" ? gl[8 + lo / 3] : "") + V + (Ma && x === "(" ? ")" : ""), U2) {
            for (Ae2 = -1, ur = w.length; ++Ae2 < ur; ) if (va = w.charCodeAt(Ae2), 48 > va || va > 57) {
              V = (va === 46 ? r + w.slice(Ae2 + 1) : w.slice(Ae2)) + V, w = w.slice(0, Ae2);
              break;
            }
          }
        }
        P && !C && (w = a(w, 1 / 0));
        var Aa = ce2.length + w.length + V.length, j2 = Aa < y2 ? new Array(y2 - Aa + 1).join(n) : "";
        switch (P && C && (w = a(j2 + w, j2.length ? y2 - V.length : 1 / 0), j2 = ""), p) {
          case "<":
            w = ce2 + w + V + j2;
            break;
          case "=":
            w = ce2 + j2 + w + V;
            break;
          case "^":
            w = j2.slice(0, Aa = j2.length >> 1) + ce2 + w + V + j2.slice(Aa);
            break;
          default:
            w = j2 + ce2 + w + V;
            break;
        }
        return l2(w);
      }
      return te2.toString = function() {
        return c + "";
      }, te2;
    }
    function i(c, n) {
      var p = f2((c = fe2(c), c.type = "f", c)), x = Math.max(-8, Math.min(8, Math.floor(_2(n) / 3))) * 3, m = Math.pow(10, -x), C = gl[8 + x / 3];
      return function(y2) {
        return p(m * y2) + C;
      };
    }
    return { format: f2, formatPrefix: i };
  }
  var et2;
  var at2;
  var tt2;
  no({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function no(e2) {
    return et2 = Il(e2), at2 = et2.format, tt2 = et2.formatPrefix, et2;
  }
  var xo = /* @__PURE__ */ new Date();
  var Lo = /* @__PURE__ */ new Date();
  function B2(e2, a, t, o) {
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
    }, r.filter = (l2) => B2((u) => {
      if (u >= u) for (; e2(u), !l2(u); ) u.setTime(u - 1);
    }, (u, s) => {
      if (u >= u) if (s < 0) for (; ++s <= 0; ) for (; a(u, -1), !l2(u); ) ;
      else for (; --s >= 0; ) for (; a(u, 1), !l2(u); ) ;
    }), t && (r.count = (l2, u) => (xo.setTime(+l2), Lo.setTime(+u), e2(xo), e2(Lo), Math.floor(t(xo, Lo))), r.every = (l2) => (l2 = Math.floor(l2), !isFinite(l2) || !(l2 > 0) ? null : l2 > 1 ? r.filter(o ? (u) => o(u) % l2 === 0 : (u) => r.count(0, u) % l2 === 0) : r)), r;
  }
  var ye2 = B2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var Cl = ye2.range;
  var ot2 = B2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var Bs = ot2.range;
  var rt2 = B2((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var Fs = rt2.range;
  var lt2 = B2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var Ts = lt2.range;
  var ut2 = B2((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var qs = ut2.range;
  var st2 = B2((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var Os = st2.range;
  var dt2 = B2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var Ns = dt2.range;
  var Sl = B2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var Hs = Sl.range;
  function we2(e2) {
    return B2((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var ca = we2(0);
  var bl = we2(1);
  var yl = we2(2);
  var wl = we2(3);
  var kl = we2(4);
  var Pl = we2(5);
  var vl = we2(6);
  var Ml = ca.range;
  var Vs = bl.range;
  var Es = yl.range;
  var Ws = wl.range;
  var Gs = kl.range;
  var zs = Pl.range;
  var Xs = vl.range;
  function ke2(e2) {
    return B2((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var pa = ke2(0);
  var Al = ke2(1);
  var Dl = ke2(2);
  var Rl = ke2(3);
  var Bl = ke2(4);
  var Fl = ke2(5);
  var Tl = ke2(6);
  var ql = pa.range;
  var $s = Al.range;
  var Zs = Dl.range;
  var Ks = Rl.range;
  var _s = Bl.range;
  var Ys = Fl.range;
  var js = Tl.range;
  var ft = B2((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var Qs = ft.range;
  var nt2 = B2((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Js = nt2.range;
  var ma = B2((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  ma.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : B2((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var ed = ma.range;
  var xa = B2((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  xa.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : B2((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var ad = xa.range;
  function Co(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function So(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function bo(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function yo(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function wo(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function ko(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function Po(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var Ol = { lab: Qa, hcl: jt, "hcl-long": Qt, hsl: _t, "hsl-long": Yt, cubehelix: Jt, "cubehelix-long": eo, rgb: We2 };
  function vo(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Ol[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = Ol[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function Mo(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = vo(a.interpolate);
      e2.interpolate(t);
    }
  }
  var td = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var od = "%Y-%m-%d %H:%M";
  function Ao(e2) {
    var a = e2.tickFormat(1, od)(td);
    return a === "2020-02-02 03:04";
  }
  var Nl = { day: st2, hour: lt2, minute: ot2, month: ft, second: ye2, week: ca, year: ma };
  var Hl = { day: dt2, hour: ut2, minute: rt2, month: nt2, second: ye2, week: pa, year: xa };
  function Do(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, r = Ao(o);
        if (typeof t == "string") o.nice(r ? Hl[t] : Nl[t]);
        else {
          var l2 = t.interval, u = t.step, s = (r ? Hl[l2] : Nl[l2]).every(u);
          s != null && o.nice(s);
        }
      }
    }
  }
  function Ro(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function Bo(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function Fo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate(na));
  }
  function To(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function qo(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], r = t[1], l2 = r < o, u = l2 ? [r, o] : [o, r], s = u[0], d = u[1], f2 = [Math.min(0, s), Math.max(0, d)];
      e2.domain(l2 ? f2.reverse() : f2);
    }
  }
  var rd = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var ld = { domain: Co, nice: Do, zero: qo, interpolate: Mo, round: Fo, align: bo, base: yo, clamp: wo, constant: ko, exponent: Po, padding: Ro, range: So, reverse: Bo, unknown: To };
  function La() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), r = rd.filter(function(l2) {
      return o.has(l2);
    });
    return function(u, s) {
      return typeof s < "u" && r.forEach(function(d) {
        ld[d](u, s);
      }), u;
    };
  }
  var ud = La("domain", "range", "reverse", "align", "padding", "round");
  var sd = La("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var No = Math.PI;
  var Ho = 2 * No;
  var ve2 = 1e-6;
  var dd = Ho - ve2;
  function Uo() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function Ul() {
    return new Uo();
  }
  Uo.prototype = Ul.prototype = { constructor: Uo, moveTo: function(e2, a) {
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
    var l2 = this._x1, u = this._y1, s = t - e2, d = o - a, f2 = l2 - e2, i = u - a, c = f2 * f2 + i * i;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (c > ve2) if (!(Math.abs(i * s - d * f2) > ve2) || !r) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var n = t - l2, p = o - u, x = s * s + d * d, m = n * n + p * p, C = Math.sqrt(x), y2 = Math.sqrt(c), P = r * Math.tan((No - Math.acos((x + c - m) / (2 * C * y2))) / 2), g = P / y2, M2 = P / C;
      Math.abs(g - 1) > ve2 && (this._ += "L" + (e2 + g * f2) + "," + (a + g * i)), this._ += "A" + r + "," + r + ",0,0," + +(i * n > f2 * p) + "," + (this._x1 = e2 + M2 * s) + "," + (this._y1 = a + M2 * d);
    }
  }, arc: function(e2, a, t, o, r, l2) {
    e2 = +e2, a = +a, t = +t, l2 = !!l2;
    var u = t * Math.cos(o), s = t * Math.sin(o), d = e2 + u, f2 = a + s, i = 1 ^ l2, c = l2 ? o - r : r - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + d + "," + f2 : (Math.abs(this._x1 - d) > ve2 || Math.abs(this._y1 - f2) > ve2) && (this._ += "L" + d + "," + f2), t && (c < 0 && (c = c % Ho + Ho), c > dd ? this._ += "A" + t + "," + t + ",0,1," + i + "," + (e2 - u) + "," + (a - s) + "A" + t + "," + t + ",0,1," + i + "," + (this._x1 = d) + "," + (this._y1 = f2) : c > ve2 && (this._ += "A" + t + "," + t + ",0," + +(c >= No) + "," + i + "," + (this._x1 = e2 + t * Math.cos(r)) + "," + (this._y1 = a + t * Math.sin(r))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function Vl(e2) {
    this._context = e2;
  }
  Vl.prototype = { areaStart: function() {
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
  var Xl = dr(Oo());
  var $l = dr(Oo());
  var Ld = (0, import_jsx_runtime9.jsx)("svg", { "aria-hidden": "true", width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: (0, import_jsx_runtime9.jsx)("path", { d: "M11.5497 2.03292C11.7307 1.65569 12.2693 1.65569 12.4503 2.03292L15.0189 7.38732C15.0918 7.53919 15.2367 7.64404 15.4041 7.66599L21.3154 8.44106C21.732 8.49569 21.8986 9.0078 21.5935 9.29588L17.2708 13.3775C17.1479 13.4935 17.0924 13.6637 17.1232 13.8297L18.2087 19.6603C18.2853 20.0717 17.8494 20.388 17.4803 20.1888L12.2376 17.3585C12.0894 17.2785 11.9106 17.2785 11.7624 17.3585L6.51969 20.1888C6.15063 20.388 5.71473 20.0717 5.79132 19.6603L6.87675 13.8297C6.90764 13.6637 6.8521 13.4935 6.7292 13.3775L2.40651 9.29588C2.10142 9.0078 2.26803 8.49569 2.68463 8.44106L8.5959 7.66599C8.7633 7.64404 8.90823 7.
