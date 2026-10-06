turn this.rgb().formatRgb();
  }
  function le2(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = Mu.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? nr(a) : t === 3 ? new R2(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? Ha(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? Ha(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = Au.exec(e2)) ? new R2(a[1], a[2], a[3], 1) : (a = Du.exec(e2)) ? new R2(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = Ru.exec(e2)) ? Ha(a[1], a[2], a[3], a[4]) : (a = Fu.exec(e2)) ? Ha(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = Bu.exec(e2)) ? pr(a[1], a[2] / 100, a[3] / 100, 1) : (a = Tu.exec(e2)) ? pr(a[1], a[2] / 100, a[3] / 100, a[4]) : sr.hasOwnProperty(e2) ? nr(sr[e2]) : e2 === "transparent" ? new R2(NaN, NaN, NaN, 0) : null;
  }
  function nr(e2) {
    return new R2(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Ha(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new R2(e2, a, t, o);
  }
  function aa(e2) {
    return e2 instanceof z2 || (e2 = le2(e2)), e2 ? (e2 = e2.rgb(), new R2(e2.r, e2.g, e2.b, e2.opacity)) : new R2();
  }
  function Be2(e2, a, t, o) {
    return arguments.length === 1 ? aa(e2) : new R2(e2, a, t, o ?? 1);
  }
  function R2(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  j2(R2, Be2, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new R2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new R2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new R2(me2(this.r), me2(this.g), me2(this.b), Na(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: ir, formatHex: ir, formatHex8: Hu, formatRgb: cr, toString: cr }));
  function ir() {
    return `#${pe2(this.r)}${pe2(this.g)}${pe2(this.b)}`;
  }
  function Hu() {
    return `#${pe2(this.r)}${pe2(this.g)}${pe2(this.b)}${pe2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function cr() {
    let e2 = Na(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${me2(this.r)}, ${me2(this.g)}, ${me2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function Na(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function me2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function pe2(e2) {
    return e2 = me2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function pr(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new E2(e2, a, t, o);
  }
  function xr(e2) {
    if (e2 instanceof E2) return new E2(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof z2 || (e2 = le2(e2)), !e2) return new E2();
    if (e2 instanceof E2) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = Math.min(a, t, o), l2 = Math.max(a, t, o), u = NaN, s = l2 - r, d = (l2 + r) / 2;
    return s ? (a === l2 ? u = (t - o) / s + (t < o) * 6 : t === l2 ? u = (o - a) / s + 2 : u = (a - t) / s + 4, s /= d < 0.5 ? l2 + r : 2 - l2 - r, u *= 60) : s = d > 0 && d < 1 ? 0 : u, new E2(u, s, d, e2.opacity);
  }
  function ta(e2, a, t, o) {
    return arguments.length === 1 ? xr(e2) : new E2(e2, a, t, o ?? 1);
  }
  function E2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  j2(E2, ta, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new E2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new E2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, r = 2 * t - o;
    return new R2(Mt(e2 >= 240 ? e2 - 240 : e2 + 120, r, o), Mt(e2, r, o), Mt(e2 < 120 ? e2 + 240 : e2 - 120, r, o), this.opacity);
  }, clamp() {
    return new E2(mr(this.h), Ua(this.s), Ua(this.l), Na(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = Na(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${mr(this.h)}, ${Ua(this.s) * 100}%, ${Ua(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function mr(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function Ua(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function Mt(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var Va = Math.PI / 180;
  var Ea = 180 / Math.PI;
  var Wa = 18;
  var Lr = 0.96422;
  var hr = 1;
  var gr = 0.82521;
  var Ir = 4 / 29;
  var Te2 = 6 / 29;
  var Cr = 3 * Te2 * Te2;
  var Uu = Te2 * Te2 * Te2;
  function Sr(e2) {
    if (e2 instanceof X) return new X(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof J) return yr(e2);
    e2 instanceof R2 || (e2 = aa(e2));
    var a = Ft(e2.r), t = Ft(e2.g), o = Ft(e2.b), r = At((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / hr), l2, u;
    return a === t && t === o ? l2 = u = r : (l2 = At((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / Lr), u = At((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / gr)), new X(116 * r - 16, 500 * (l2 - r), 200 * (r - u), e2.opacity);
  }
  function qe2(e2, a, t, o) {
    return arguments.length === 1 ? Sr(e2) : new X(e2, a, t, o ?? 1);
  }
  function X(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  j2(X, qe2, oe2(z2, { brighter(e2) {
    return new X(this.l + Wa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new X(this.l - Wa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = Lr * Dt(a), e2 = hr * Dt(e2), t = gr * Dt(t), new R2(Rt(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), Rt(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), Rt(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function At(e2) {
    return e2 > Uu ? Math.pow(e2, 1 / 3) : e2 / Cr + Ir;
  }
  function Dt(e2) {
    return e2 > Te2 ? e2 * e2 * e2 : Cr * (e2 - Ir);
  }
  function Rt(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function Ft(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function Nu(e2) {
    if (e2 instanceof J) return new J(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof X || (e2 = Sr(e2)), e2.a === 0 && e2.b === 0) return new J(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * Ea;
    return new J(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function oa(e2, a, t, o) {
    return arguments.length === 1 ? Nu(e2) : new J(e2, a, t, o ?? 1);
  }
  function J(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function yr(e2) {
    if (isNaN(e2.h)) return new X(e2.l, 0, 0, e2.opacity);
    var a = e2.h * Va;
    return new X(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  j2(J, oa, oe2(z2, { brighter(e2) {
    return new J(this.h, this.c, this.l + Wa * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new J(this.h, this.c, this.l - Wa * (e2 ?? 1), this.opacity);
  }, rgb() {
    return yr(this).rgb();
  } }));
  var Pr = -0.14861;
  var Bt = 1.78277;
  var Tt = -0.29227;
  var Ga = -0.90649;
  var ra = 1.97294;
  var br = ra * Ga;
  var wr = ra * Bt;
  var kr = Bt * Tt - Ga * Pr;
  function Vu(e2) {
    if (e2 instanceof Le2) return new Le2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof R2 || (e2 = aa(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = (kr * o + br * a - wr * t) / (kr + br - wr), l2 = o - r, u = (ra * (t - r) - Tt * l2) / Ga, s = Math.sqrt(u * u + l2 * l2) / (ra * r * (1 - r)), d = s ? Math.atan2(u, l2) * Ea - 120 : NaN;
    return new Le2(d < 0 ? d + 360 : d, s, r, e2.opacity);
  }
  function Oe2(e2, a, t, o) {
    return arguments.length === 1 ? Vu(e2) : new Le2(e2, a, t, o ?? 1);
  }
  function Le2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  j2(Le2, Oe2, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new Le2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new Le2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * Va, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), r = Math.sin(e2);
    return new R2(255 * (a + t * (Pr * o + Bt * r)), 255 * (a + t * (Tt * o + Ga * r)), 255 * (a + t * (ra * o)), this.opacity);
  } }));
  function qt(e2, a, t, o, r) {
    var l2 = e2 * e2, u = l2 * e2;
    return ((1 - 3 * e2 + 3 * l2 - u) * a + (4 - 6 * l2 + 3 * u) * t + (1 + 3 * e2 + 3 * l2 - 3 * u) * o + u * r) / 6;
  }
  function vr(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), r = e2[o], l2 = e2[o + 1], u = o > 0 ? e2[o - 1] : 2 * r - l2, s = o < a - 1 ? e2[o + 2] : 2 * l2 - r;
      return qt((t - o / a) * a, u, r, l2, s);
    };
  }
  function Mr(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), r = e2[(o + a - 1) % a], l2 = e2[o % a], u = e2[(o + 1) % a], s = e2[(o + 2) % a];
      return qt((t - o / a) * a, r, l2, u, s);
    };
  }
  var He2 = (e2) => () => e2;
  function Ar(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function Eu(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function Ue2(e2, a) {
    var t = a - e2;
    return t ? Ar(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : He2(isNaN(e2) ? a : e2);
  }
  function Dr(e2) {
    return (e2 = +e2) == 1 ? M2 : function(a, t) {
      return t - a ? Eu(a, t, e2) : He2(isNaN(a) ? t : a);
    };
  }
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
  var
