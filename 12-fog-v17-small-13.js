  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var Zl = Object.create;
  var er = Object.defineProperty;
  var _l = Object.getOwnPropertyDescriptor;
  var Yl = Object.getOwnPropertyNames;
  var Ql = Object.getPrototypeOf;
  var jl = Object.prototype.hasOwnProperty;
  var Jl = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var eu = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let r of Yl(a)) !jl.call(e2, r) && r !== t && er(e2, r, { get: () => a[r], enumerable: !(o = _l(a, r)) || o.enumerable });
    return e2;
  };
  var ar = (e2, a, t) => (t = e2 != null ? Zl(Ql(e2)) : {}, eu(a || !e2 || !e2.__esModule ? er(t, "default", { value: e2, enumerable: true }) : t, e2));
  var ko = Jl((np, rt2) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function a() {
        for (var r = "", l2 = 0; l2 < arguments.length; l2++) {
          var u = arguments[l2];
          u && (r = o(r, t(u)));
        }
        return r;
      }
      function t(r) {
        if (typeof r == "string" || typeof r == "number") return r;
        if (typeof r != "object") return "";
        if (Array.isArray(r)) return a.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) return r.toString();
        var l2 = "";
        for (var u in r) e2.call(r, u) && r[u] && (l2 = o(l2, u));
        return l2;
      }
      function o(r, l2) {
        return l2 ? r ? r + " " + l2 : r + l2 : r;
      }
      typeof rt2 < "u" && rt2.exports ? (a.default = a, rt2.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  function Ae2() {
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
      let l2 = o.clientX - r.startX;
      !r.active && Math.abs(l2) < 5 || (r.active || (r.active = true, a.current = true, o.currentTarget.dataset.dragging = "", o.currentTarget.setPointerCapture(o.pointerId)), o.preventDefault(), o.currentTarget.scrollLeft = r.scrollLeft - l2);
    }, onPointerUp: t, onPointerCancel: t, onLostPointerCapture: t, onPointerLeave: () => {
      e2.current?.active || (e2.current = null);
    }, onDragStart: (o) => o.preventDefault(), onClickCapture: (o) => {
      !a.current || o.detail === 0 || (a.current = false, o.preventDefault(), o.stopPropagation());
    } };
  }
  function V(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function ru({ children: e2, width: a = "fluid", className: t, ...o }) {
    return (0, import_jsx_runtime4.jsx)("main", { ...o, className: t ? `file-card ${t}` : "file-card", "data-width": a, children: e2 });
  }
  var lu = ["https:", "http:", "mailto:", "tel:"];
  function It(e2) {
    if (/^[#./]/.test(e2)) return e2;
    try {
      return lu.includes(new URL(e2).protocol) ? e2 : void 0;
    } catch {
      return;
    }
  }
  function uu({ title: e2, fact: a, factKnown: t = false, intro: o }) {
    return (0, import_jsx_runtime4.jsxs)("header", { className: "file-header", children: [(0, import_jsx_runtime4.jsx)("h1", { className: "file-title", children: e2 }), a && (0, import_jsx_runtime4.jsx)("p", { className: t ? "file-fact is-known" : "file-fact", children: a }), o && (0, import_jsx_runtime4.jsx)("p", { className: "file-intro", children: o })] });
  }
  function su({ label: e2, heading: a = false, children: t }) {
    let o = import_react4.default.useId();
    return (0, import_jsx_runtime4.jsxs)("section", { className: "file-group", "aria-labelledby": o, children: [(0, import_jsx_runtime4.jsx)("h2", { id: o, className: a ? "file-group-heading" : "file-group-label", children: e2 }), t] });
  }
  function du({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("div", { className: "file-rows", children: e2 });
  }
  function fu({ number: e2, thumbnail: a, name: t, detail: o, value: r, valueKnown: l2 = false }) {
    let u = e2 !== void 0 ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : a ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot", children: (0, import_jsx_runtime4.jsx)("img", { src: a.src, alt: a.alt, style: V(a), loading: "lazy" }) }) : null;
    return (0, import_jsx_runtime4.jsxs)("div", { className: "file-row", children: [u, (0, import_jsx_runtime4.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: t }), o && (0, import_jsx_runtime4.jsx)("span", { className: "file-row-detail", children: o })] }), r && (0, import_jsx_runtime4.jsx)("span", { className: l2 ? "file-row-value file-known" : "file-row-value", children: r })] });
  }
  function nu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("div", { className: "file-text", children: e2 });
  }
  function iu({ children: e2, sub: a }) {
    return (0, import_jsx_runtime4.jsxs)("div", { className: "file-heading", children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: e2 }), a && (0, import_jsx_runtime4.jsx)("span", { className: "file-secondary", children: a })] });
  }
  function cu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-p", children: e2 });
  }
  function mu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-key file-bar", children: e2 });
  }
  function Lu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-caption", children: e2 });
  }
  function je2({ href: e2, children: a }) {
    let t = It(e2);
    return t ? (0, import_jsx_runtime4.jsx)("a", { className: "file-link", href: t, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(t) ? "_blank" : void 0, rel: "noopener noreferrer", children: a }) : (0, import_jsx_runtime4.jsx)("span", { className: "file-link", children: a });
  }
  function Ct({ items: e2, label: a, layout: t = "grid", bleed: o = t === "strip" && e2.length > 1 }) {
    let r = Ae2(), l2 = ["file-photos", e2.length === 1 && "is-single", t === "strip" && o && "file-bleed"].filter(Boolean).join(" ");
    return (0, import_jsx_runtime4.jsx)("div", { ...t === "strip" ? r : {}, className: l2, "data-layout": t, role: "region", "aria-label": a, tabIndex: t === "strip" && e2.length > 1 ? 0 : void 0, children: e2.map((u) => (0, import_jsx_runtime4.jsx)("img", { src: u.src, alt: u.alt, style: V(u), loading: "lazy" }, u.src)) });
  }
  function Su({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("footer", { className: "file-closing", children: e2 });
  }
  function ce2(e2, a) {
    return e2 == null || a == null ? NaN : e2 < a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function St(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function Fa(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = ce2, t = (s, d) => ce2(e2(s), d), o = (s, d) => e2(s) - d) : (a = e2 === ce2 || e2 === St ? e2 : yu, t = e2, o = e2);
    function r(s, d, f2 = 0, c = s.length) {
      if (f2 < c) {
        if (a(d, d) !== 0) return c;
        do {
          let i = f2 + c >>> 1;
          t(s[i], d) < 0 ? f2 = i + 1 : c = i;
        } while (f2 < c);
      }
      return f2;
    }
    function l2(s, d, f2 = 0, c = s.length) {
      if (f2 < c) {
        if (a(d, d) !== 0) return c;
        do {
          let i = f2 + c >>> 1;
          t(s[i], d) <= 0 ? f2 = i + 1 : c = i;
        } while (f2 < c);
      }
      return f2;
    }
    function u(s, d, f2 = 0, c = s.length) {
      let i = r(s, d, f2, c - 1);
      return i > f2 && o(s[i - 1], d) > -o(s[i], d) ? i - 1 : i;
    }
    return { left: r, center: u, right: l2 };
  }
  function yu() {
    return 0;
  }
  function yt(e2) {
    return e2 === null ? NaN : +e2;
  }
  var or = Fa(ce2);
  var rr = or.right;
  var bu = or.left;
  var wu = Fa(yt).center;
  var wt = Math.sqrt(50);
  var kt = Math.sqrt(10);
  var Pt = Math.sqrt(2);
  function j2(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function oe2(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function z2() {
  }
  var re2 = 0.7;
  var xe2 = 1 / re2;
  var Fe2 = "\\s*([+-]?\\d+)\\s*";
  var ea = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var Mu = /^#([0-9a-f]{3,8})$/;
  var Au = new RegExp(`^rgb\\(${Fe2},${Fe2},${Fe2}\\)$`);
  var Du = new RegExp(`^rgb\\(${G},${G},${G}\\)$`);
  var Ru = new RegExp(`^rgba\\(${Fe2},${Fe2},${Fe2},${ea}\\)$`);
  var Fu = new RegExp(`^rgba\\(${G},${G},${G},${ea}\\)$`);
  var Bu = new RegExp(`^hsl\\(${ea},${G},${G}\\)$`);
  var Tu = new RegExp(`^hsla\\(${ea},${G},${G},${ea}\\)$`);
  var sr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  j2(z2, le2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: dr, formatHex: dr, formatHex8: qu, formatHsl: Ou, formatRgb: fr, toString: fr });
  function dr() {
    return this.rgb().formatHex();
  }
  function qu() {
    return this.rgb().formatHex8();
  }
  function Ou() {
    return xr(this).formatHsl();
  }
  function fr() {
    return this.rgb().formatRgb();
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
