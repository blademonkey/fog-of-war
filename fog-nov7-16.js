< a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function Vt(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function Za(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = be2, t = (s, d) => be2(e2(s), d), o = (s, d) => e2(s) - d) : (a = e2 === be2 || e2 === Vt ? e2 : Ts, t = e2, o = e2);
    function l2(s, d, n = 0, i = s.length) {
      if (n < i) {
        if (a(d, d) !== 0) return i;
        do {
          let f2 = n + i >>> 1;
          t(s[f2], d) < 0 ? n = f2 + 1 : i = f2;
        } while (n < i);
      }
      return n;
    }
    function r(s, d, n = 0, i = s.length) {
      if (n < i) {
        if (a(d, d) !== 0) return i;
        do {
          let f2 = n + i >>> 1;
          t(s[f2], d) <= 0 ? n = f2 + 1 : i = f2;
        } while (n < i);
      }
      return n;
    }
    function u(s, d, n = 0, i = s.length) {
      let f2 = l2(s, d, n, i - 1);
      return f2 > n && o(s[f2 - 1], d) > -o(s[f2], d) ? f2 - 1 : f2;
    }
    return { left: l2, center: u, right: r };
  }
  function Ts() {
    return 0;
  }
  function Wt(e2) {
    return e2 === null ? NaN : +e2;
  }
  var Nr = Za(be2);
  var Ur = Nr.right;
  var Bs = Nr.left;
  var Os = Za(Wt).center;
  var Gt = Math.sqrt(50);
  var Xt = Math.sqrt(10);
  var Kt = Math.sqrt(2);
  function te2(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function ie2(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function Y() {
  }
  var fe2 = 0.7;
  var ke2 = 1 / fe2;
  var $e2 = "\\s*([+-]?\\d+)\\s*";
  var fa = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var j = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var Hs = /^#([0-9a-f]{3,8})$/;
  var $s = new RegExp(`^rgb\\(${$e2},${$e2},${$e2}\\)$`);
  var Es = new RegExp(`^rgb\\(${j},${j},${j}\\)$`);
  var Vs = new RegExp(`^rgba\\(${$e2},${$e2},${$e2},${fa}\\)$`);
  var Ws = new RegExp(`^rgba\\(${j},${j},${j},${fa}\\)$`);
  var zs = new RegExp(`^hsl\\(${fa},${j},${j}\\)$`);
  var Gs = new RegExp(`^hsla\\(${fa},${j},${j},${fa}\\)$`);
  var Er = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  te2(Y, ce2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: Vr, formatHex: Vr, formatHex8: Xs, formatHsl: Ks, formatRgb: Wr, toString: Wr });
  function Vr() {
    return this.rgb().formatHex();
  }
  function Xs() {
    return this.rgb().formatHex8();
  }
  function Ks() {
    return _r(this).formatHsl();
  }
  function Wr() {
    return this.rgb().formatRgb();
  }
  function ce2(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = Hs.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? zr(a) : t === 3 ? new N(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? Ja(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? Ja(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = $s.exec(e2)) ? new N(a[1], a[2], a[3], 1) : (a = Es.exec(e2)) ? new N(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = Vs.exec(e2)) ? Ja(a[1], a[2], a[3], a[4]) : (a = Ws.exec(e2)) ? Ja(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = zs.exec(e2)) ? Kr(a[1], a[2] / 100, a[3] / 100, 1) : (a = Gs.exec(e2)) ? Kr(a[1], a[2] / 100, a[3] / 100, a[4]) : Er.hasOwnProperty(e2) ? zr(Er[e2]) : e2 === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
  }
  function zr(e2) {
    return new N(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Ja(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new N(e2, a, t, o);
  }
  function ca(e2) {
    return e2 instanceof Y || (e2 = ce2(e2)), e2 ? (e2 = e2.rgb(), new N(e2.r, e2.g, e2.b, e2.opacity)) : new N();
  }
  function Ee2(e2, a, t, o) {
    return arguments.length === 1 ? ca(e2) : new N(e2, a, t, o ?? 1);
  }
  function N(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  te2(N, Ee2, ie2(Y, { brighter(e2) {
    return e2 = e2 == null ? ke2 : Math.pow(ke2, e2), new N(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? fe2 : Math.pow(fe2, e2), new N(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new N(we2(this.r), we2(this.g), we2(this.b), at2(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: Gr, formatHex: Gr, formatHex8: Zs, formatRgb: Xr, toString: Xr }));
  function Gr() {
    return `#${ye2(this.r)}${ye2(this.g)}${ye2(this.b)}`;
  }
  function Zs() {
    return `#${ye2(this.r)}${ye2(this.g)}${ye2(this.b)}${ye2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function Xr() {
    let e2 = at2(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${we2(this.r)}, ${we2(this.g)}, ${we2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function at2(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function we2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function ye2(e2) {
    return e2 = we2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function Kr(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new K(e2, a, t, o);
  }
  function _r(e2) {
    if (e2 instanceof K) return new K(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof Y || (e2 = ce2(e2)), !e2) return new K();
    if (e2 instanceof K) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, l2 = Math.min(a, t, o), r = Math.max(a, t, o), u = NaN, s = r - l2, d = (r + l2) / 2;
    return s ? (a === r ? u = (t - o) / s + (t < o) * 6 : t === r ? u = (o - a) / s + 2 : u = (a - t) / s + 4, s /= d < 0.5 ? r + l2 : 2 - r - l2, u *= 60) : s = d > 0 && d < 1 ? 0 : u, new K(u, s, d, e2.opacity);
  }
  function pa(e2, a, t, o) {
    return arguments.length === 1 ? _r(e2) : new K(e2, a, t, o ?? 1);
  }
  function K(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  te2(K, pa, ie2(Y, { brighter(e2) {
    return e2 = e2 == null ? ke2 : Math.pow(ke2, e2), new K(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? fe2 : Math.pow(fe2, e2), new K(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, l2 = 2 * t - o;
    return new N(_t(e2 >= 240 ? e2 - 240 : e2 + 120, l2, o), _t(e2, l2, o), _t(e2 < 120 ? e2 + 240 : e2 - 120, l2, o), this.opacity);
  }, clamp() {
    return new K(Zr(this.h), et2(this.s), et2(this.l), at2(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = at2(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${Zr(this.h)}, ${et2(this.s) * 100}%, ${et2(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function Zr(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function et2(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function _t(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var tt2 = Math.PI / 180;
  var ot2 = 180 / Math.PI;
  var rt2 = 18;
  var jr = 0.96422;
  var Yr = 1;
  var Qr = 0.82521;
  var Jr = 4 / 29;
  var Ve2 = 6 / 29;
  var el = 3 * Ve2 * Ve2;
  var _s = Ve2 * Ve2 * Ve2;
  function al(e2) {
    if (e2 instanceof Q) return new Q(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof oe2) return tl(e2);
    e2 instanceof N || (e2 = ca(e2));
    var a = Jt(e2.r), t = Jt(e2.g), o = Jt(e2.b), l2 = jt((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / Yr), r, u;
    return a === t && t === o ? r = u = l2 : (r = jt((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / jr), u = jt((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / Qr)), new Q(116 * l2 - 16, 500 * (r - l2), 200 * (l2 - u), e2.opacity);
  }
  function We2(e2, a, t, o) {
    return arguments.length === 1 ? al(e2) : new Q(e2, a, t, o ?? 1);
  }
  function Q(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  te2(Q, We2, ie2(Y, { brighter(e2) {
    return new Q(this.l + rt2 * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new Q(this.l - rt2 * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = jr * Yt(a), e2 = Yr * Yt(e2), t = Qr * Yt(t), new N(Qt(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), Qt(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), Qt(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function jt(e2) {
    return e2 > _s ? Math.pow(e2, 1 / 3) : e2 / el + Jr;
  }
  function Yt(e2) {
    return e2 > Ve2 ? e2 * e2 * e2 : el * (e2 - Jr);
  }
  function Qt(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function Jt(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function js(e2) {
    if (e2 instanceof oe2) return new oe2(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof Q || (e2 = al(e2)), e2.a === 0 && e2.b === 0) return new oe2(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * ot2;
    return new oe2(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function ma(e2, a, t, o) {
    return arguments.length === 1 ? js(e2) : new oe2(e2, a, t, o ?? 1);
  }
  function oe2(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function tl(e2) {
    if (isNaN(e2.h)) return new Q(e2.l, 0, 0, e2.opacity);
    var a = e2.h * tt2;
    return new Q(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  te2(oe2, ma, ie2(Y, { brighter(e2) {
    return new oe2(this.h, this.c, this.l + rt2 * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new oe2(this.h, this.c, this.l - rt2 * (e2 ?? 1), this.opacity);
  }, rgb() {
    return tl(this).rgb();
  } }));
  var ul = -0.14861;
  var eo = 1.78277;
  var ao = -0.29227;
  var lt2 = -0.90649;
  var ha = 1.97294;
  var ol = ha * lt2;
  var rl = ha * eo;
  var ll = eo * ao - lt2 * ul;
  function Ys(e2) {
    if (e2 instanceof ve2) return new ve2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof N || (e2 = ca(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, l2 = (ll * o + ol * a - rl * t) / (ll + ol - rl), r = o - l2, u = (ha * (t - l2) - ao * r) / lt2, s = Math.sqrt(u * u + r * r) / (ha * l2 * (1 - l2)), d = s ? Math.atan2(u, r) * ot2 - 120 : NaN;
    return new ve2(d < 0 ? d + 360 : d, s, l2, e2.opacity);
  }
  function ze2(e2, a, t, o) {
    return arguments.length === 1 ? Ys(e2) : new ve2(e2, a, t, o ?? 1);
  }
  function ve2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  te2(ve2, ze2, ie2(Y, { brighter(e2) {
    return e2 = e2 == null ? ke2 : Math.pow(ke2, e2), new ve2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? fe2 : Math.pow(fe2, e2), new ve2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * tt2, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), l2 = Math.sin(e2);
    return new N(255 * (a + t * (ul * o + eo * l2)), 255 * (a + t * (ao * o + lt2 * l2)), 255 * (a + t * (ha * o)), this.opacity);
  } }));
  function to(e2, a, t, o, l2) {
    var r = e2 * e2, u = r * e2;
    return ((1 - 3 * e2 + 3 * r - u) * a + (4 - 6 * r + 3 * u) * t + (1 + 3 * e2 + 3 * r - 3 * u) * o + u * l2) / 6;
  }
  function sl(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), l2 = e2[o], r = e2[o + 1], u = o > 0 ? e2[o - 1] : 2 * l2 - r, s = o < a - 1 ? e2[o + 2] : 2 * r - l2;
      return to((t - o / a) * a, u, l2, r, s);
    };
  }
  function dl(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), l2 = e2[(o + a - 1) % a], r = e2[o % a], u = e2[(o + 1) % a], s = e2[(o + 2) % a];
      return to((t - o / a) * a, l2, r, u, s);
    };
  }
  var Ge2 = (e2) => () => e2;
  function nl(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function Qs(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function Xe2(e2, a) {
    var t = a - e2;
    return t ? nl(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : Ge2(isNaN(e2) ? a : e2);
  }
  function il(e2) {
    return (e2 = +e2) == 1 ? R2 : function(a, t) {
      return t - a ? Qs(a, t, e2) : Ge2(isNaN(a) ? t : a);
    };
  }
  function R2(e2, a) {
    var t = a - e2;
    return t ? nl(e2, t) : Ge2(isNaN(e2) ? a : e2);
  }
  var Ke2 = (function e(a) {
    var t = il(a);
    function o(l2, r) {
      var u = t((l2 = Ee2(l2)).r, (r = Ee2(r)).r), s = t(l2.g, r.g), d = t(l2.b, r.b), n = R2(l2.opacity, r.opacity);
      return function(i) {
        return l2.r = u(i), l2.g = s(i), l2.b = d(i), l2.opacity = n(i), l2 + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function fl(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), l2 = new Array(t), r = new Array(t), u, s;
      for (u = 0; u < t; ++u) s = Ee2(a[u]), o[u] = s.r || 0, l2[u] = s.g || 0, r[u] = s.b || 0;
      return o = e2(o), l2 = e2(l2), r = e2(r), s.opacity = 1, function(d) {
        return s.r = o(d), s.g = l2(d), s.b = r(d), s + "";
      };
    };
  }
  var Js = fl(sl);
  var ed = fl(dl);
  var ro = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var oo = new RegExp(ro.source, "g");
  function xa(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function Ll(e2) {
    return function(a, t) {
      var o = e2((a = pa(a)).h, (t = pa(t)).h), l2 = R2(a.s, t.s), r = R2(a.l, t.l), u = R2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.s = l2(s), a.l = r(s), a.opacity = u(s), a + "";
      };
    };
  }
  var lo = Ll(Xe2);
  var uo = Ll(R2);
  function ut2(e2, a) {
    var t = R2((e2 = We2(e2)).l, (a = We2(a)).l), o = R2(e2.a, a.a), l2 = R2(e2.b, a.b), r = R2(e2.opacity, a.opacity);
    return function(u) {
      return e2.l = t(u), e2.a = o(u), e2.b = l2(u), e2.opacity = r(u), e2 + "";
    };
  }
  function Il(e2) {
    return function(a, t) {
      var o = e2((a = ma(a)).h, (t = ma(t)).h), l2 = R2(a.c, t.c), r = R2(a.l, t.l), u = R2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.c = l2(s), a.l = r(s), a.opacity = u(s), a + "";
      };
    };
  }
  var so = Il(Xe2);
  var no = Il(R2);
  function Cl(e2) {
    return (function a(t) {
      t = +t;
      function o(l2, r) {
        var u = e2((l2 = ze2(l2)).h, (r = ze2(r)).h), s = R2(l2.s, r.s), d = R2(l2.l, r.l), n = R2(l2.opacity, r.opacity);
        return function(i) {
          return l2.h = u(i), l2.s = s(i), l2.l = d(Math.pow(i, t)), l2.opacity = n(i), l2 + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var io = Cl(Xe2);
  var fo = Cl(R2);
  function yl(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function Me2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function J(e2) {
    return e2 = Me2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function wl(e2, a) {
    return function(t, o) {
      for (var l2 = t.length, r = [], u = 0, s = e2[0], d = 0; l2 > 0 && s > 0 && (d + s + 1 > o && (s = Math.max(1, o - d)), r.push(t.substring(l2 -= s, l2 + s)), !((d += s + 1) > o)); ) s = e2[u = (u + 1) % e2.length];
      return r.reverse().join(a);
    };
  }
  function kl(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var sd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function me2(e2) {
    if (!(a = sd.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new st2({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  me2.prototype = st2.prototype;
  function st2(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  st2.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function vl(e2) {
    e: for (var a = e2.length, t = 1, o = -1, l2; t < a; ++t) switch (e2[t]) {
      case ".":
        o = l2 = t;
        break;
      case "0":
        o === 0 && (o = t), l2 = t;
        break;
      default:
        if (!+e2[t]) break e;
        o > 0 && (o = 0);
        break;
    }
    return o > 0 ? e2.slice(0, o) + e2.slice(l2 + 1) : e2;
  }
  var xo;
  function Pl(e2, a) {
    var t = Me2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], l2 = t[1], r = l2 - (xo = Math.max(-8, Math.min(8, Math.floor(l2 / 3))) * 3) + 1, u = o.length;
    return r === u ? o : r > u ? o + new Array(r - u + 1).join("0") : r > 0 ? o.slice(0, r) + "." + o.slice(r) : "0." + new Array(1 - r).join("0") + Me2(e2, Math.max(0, a + r - 1))[0];
  }
  function go(e2, a) {
    var t = Me2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], l2 = t[1];
    return l2 < 0 ? "0." + new Array(-l2).join("0") + o : o.length > l2 + 1 ? o.slice(0, l2 + 1) + "." + o.slice(l2 + 1) : o + new Array(l2 - o.length + 2).join("0");
  }
  var Lo = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: yl, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => go(e2 * 100, a), r: go, s: Pl, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Io(e2) {
    return e2;
  }
  var Ml = Array.prototype.map;
  var Fl = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function Al(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? Io : wl(Ml.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", l2 = e2.decimal === void 0 ? "." : e2.decimal + "", r = e2.numerals === void 0 ? Io : kl(Ml.call(e2.numerals, String)), u = e2.percent === void 0 ? "%" : e2.percent + "", s = e2.minus === void 0 ? "\u2212" : e2.minus + "", d = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function n(f2) {
      f2 = me2(f2);
      var c = f2.fill, m = f2.align, p = f2.sign, x = f2.symbol, h2 = f2.zero, y = f2.width, F = f2.comma, v = f2.precision, S2 = f2.trim, P2 = f2.type;
      P2 === "n" ? (F = true, P2 = "g") : Lo[P2] || (v === void 0 && (v = 12), S2 = true, P2 = "g"), (h2 || c === "0" && m === "=") && (h2 = true, c = "0", m = "=");
      var L2 = x === "$" ? t : x === "#" && /[boxX]/.test(P2) ? "0" + P2.toLowerCase() : "", g = x === "$" ? o : /[%p]/.test(P2) ? u : "", b = Lo[P2], O2 = /[defgprs%]/.test(P2);
      v = v === void 0 ? 6 : /[gprs]/.test(P2) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v));
      function E2(k2) {
        var ge2 = L2, W2 = g, Be2, cr, Ra;
        if (P2 === "c") W2 = b(k2) + W2, k2 = "";
        else {
          k2 = +k2;
          var Ta = k2 < 0 || 1 / k2 < 0;
          if (k2 = isNaN(k2) ? d : b(Math.abs(k2), v), S2 && (k2 = vl(k2)), Ta && +k2 == 0 && p !== "+" && (Ta = false), ge2 = (Ta ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + ge2, W2 = (P2 === "s" ? Fl[8 + xo / 3] : "") + W2 + (
