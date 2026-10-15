Name: "file-strip-arrow", "aria-label": "Previous photo", disabled: e2, onClick: t, children: Ta }), (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": "Next photo", disabled: a, onClick: o, children: qa })] });
  }
  function Fu(e2) {
    let [a, t] = (0, import_react10.useState)(null), o = (0, import_react10.useRef)(null);
    (0, import_react10.useEffect)(() => {
      let l2 = e2.current, u = l2.ownerDocument.defaultView, s = () => {
        o.current = null;
      }, d = () => {
        o.current !== null && Math.abs(l2.scrollLeft - o.current) < 2 && s();
        let f2 = l2.scrollWidth - l2.clientWidth;
        t(f2 < 2 ? null : { atStart: l2.scrollLeft < 2, atEnd: l2.scrollLeft > f2 - 2 });
      };
      d(), l2.addEventListener("scroll", d, { passive: true });
      for (let f2 of Dt) l2.addEventListener(f2, s, { passive: true });
      return l2.addEventListener("load", d, true), u.addEventListener("resize", d), () => {
        l2.removeEventListener("scroll", d);
        for (let f2 of Dt) l2.removeEventListener(f2, s);
        l2.removeEventListener("load", d, true), u.removeEventListener("resize", d);
      };
    }, [e2]);
    let r = (l2) => {
      let u = e2.current, s = [...u.children], d = s.map((n) => n.offsetLeft - s[0].offsetLeft), f2 = o.current ?? u.scrollLeft, i = l2 > 0 ? d.find((n) => n > f2 + 2) : [...d].reverse().find((n) => n < f2 - 2), c = Math.min(u.scrollWidth - u.clientWidth, Math.max(0, i ?? (l2 > 0 ? u.scrollWidth : 0)));
      o.current = c, u.scrollTo({ left: c, behavior: "smooth" });
    };
    return a && { ...a, onPrevious: () => r(-1), onNext: () => r(1) };
  }
  function Ua({ bleed: e2, className: a, children: t, ...o }) {
    let r = (0, import_react10.useRef)(null), l2 = Fu(r);
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip", "data-bleed": e2 || void 0, children: [(0, import_jsx_runtime7.jsx)("div", { ref: r, ...o, className: [a, e2 && "file-bleed"].filter(Boolean).join(" "), children: t }), l2 && (0, import_jsx_runtime7.jsx)(yr, { ...l2 })] });
  }
  function re2() {
    let e2 = (0, import_react11.useRef)(null), a = (0, import_react11.useRef)(false), t = (o) => {
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
  function H(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function Nu({ children: e2, width: a = "fluid", className: t, ...o }) {
    return (0, import_jsx_runtime8.jsx)("main", { ...o, className: t ? `file-card ${t}` : "file-card", "data-width": a, children: e2 });
  }
  var Hu = ["https:", "http:", "mailto:", "tel:"];
  function vt2(e2) {
    if (/^[#./]/.test(e2)) return e2;
    try {
      return Hu.includes(new URL(e2).protocol) ? e2 : void 0;
    } catch {
      return;
    }
  }
  function Uu({ title: e2, fact: a, factKnown: t = false, intro: o }) {
    return (0, import_jsx_runtime8.jsxs)("header", { className: "file-header", children: [(0, import_jsx_runtime8.jsx)("h1", { className: "file-title", children: e2 }), a && (0, import_jsx_runtime8.jsx)("p", { className: t ? "file-fact is-known" : "file-fact", children: a }), o && (0, import_jsx_runtime8.jsx)("p", { className: "file-intro", children: o })] });
  }
  function Vu({ label: e2, heading: a = false, children: t }) {
    let o = import_react4.default.useId();
    return (0, import_jsx_runtime8.jsxs)("section", { className: "file-group", "aria-labelledby": o, children: [(0, import_jsx_runtime8.jsx)("h2", { id: o, className: a ? "file-group-heading" : "file-group-label", children: e2 }), t] });
  }
  function Eu({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("div", { className: "file-rows", children: e2 });
  }
  function Wu({ number: e2, thumbnail: a, name: t, detail: o, value: r, valueKnown: l2 = false }) {
    let u = e2 !== void 0 ? (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : a ? (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot", children: (0, import_jsx_runtime8.jsx)("img", { src: a.src, alt: a.alt, style: H(a), loading: "lazy" }) }) : null;
    return (0, import_jsx_runtime8.jsxs)("div", { className: "file-row", children: [u, (0, import_jsx_runtime8.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: t }), o && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-detail", children: o })] }), r && (0, import_jsx_runtime8.jsx)("span", { className: l2 ? "file-row-value file-known" : "file-row-value", children: r })] });
  }
  function Gu({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("div", { className: "file-text", children: e2 });
  }
  function zu({ children: e2, sub: a }) {
    return (0, import_jsx_runtime8.jsxs)("div", { className: "file-heading", children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: e2 }), a && (0, import_jsx_runtime8.jsx)("span", { className: "file-secondary", children: a })] });
  }
  function Xu({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { className: "file-p", children: e2 });
  }
  function Zu({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { className: "file-key file-bar", children: e2 });
  }
  function oa({ href: e2, children: a }) {
    let t = vt2(e2);
    return t ? (0, import_jsx_runtime8.jsx)("a", { className: "file-link", href: t, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(t) ? "_blank" : void 0, rel: "noopener noreferrer", children: a }) : (0, import_jsx_runtime8.jsx)("span", { className: "file-link", children: a });
  }
  function Rt({ items: e2, label: a, title: t = a, layout: o = "grid", bleed: r = o === "strip" && e2.length > 1 }) {
    let l2 = re2(), [u, s] = (0, import_react4.useState)(null), d = e2.map((i, c) => (0, import_jsx_runtime8.jsx)("button", { type: "button", className: "file-photo-zoom", "aria-label": `${i.alt}, full screen`, onClick: () => s(c), children: (0, import_jsx_runtime8.jsx)("img", { src: i.src, alt: i.alt, style: H(i), loading: "lazy" }) }, i.src)), f2 = e2.length === 1 ? " is-single" : "";
    return (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [o === "strip" && e2.length > 1 ? (0, import_jsx_runtime8.jsx)(Ua, { ...l2, bleed: r, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": a, tabIndex: 0, children: d }) : (0, import_jsx_runtime8.jsx)("div", { ...o === "strip" ? l2 : {}, className: `file-photos${f2}${o === "strip" && r ? " file-bleed" : ""}`, "data-layout": o, role: "region", "aria-label": a, children: d }), u !== null && (0, import_jsx_runtime8.jsx)(xe2, { photos: e2, start: u, title: t, onClose: () => s(null) })] });
  }
  function es({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("footer", { className: "file-closing", children: e2 });
  }
  function Le2(e2, a) {
    return e2 == null || a == null ? NaN : e2 < a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function Bt(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function Va(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = Le2, t = (s, d) => Le2(e2(s), d), o = (s, d) => e2(s) - d) : (a = e2 === Le2 || e2 === Bt ? e2 : ts, t = e2, o = e2);
    function r(s, d, f2 = 0, i = s.length) {
      if (f2 < i) {
        if (a(d, d) !== 0) return i;
        do {
          let c = f2 + i >>> 1;
          t(s[c], d) < 0 ? f2 = c + 1 : i = c;
        } while (f2 < i);
      }
      return f2;
    }
    function l2(s, d, f2 = 0, i = s.length) {
      if (f2 < i) {
        if (a(d, d) !== 0) return i;
        do {
          let c = f2 + i >>> 1;
          t(s[c], d) <= 0 ? f2 = c + 1 : i = c;
        } while (f2 < i);
      }
      return f2;
    }
    function u(s, d, f2 = 0, i = s.length) {
      let c = r(s, d, f2, i - 1);
      return c > f2 && o(s[c - 1], d) > -o(s[c], d) ? c - 1 : c;
    }
    return { left: r, center: u, right: l2 };
  }
  function ts() {
    return 0;
  }
  function Ft(e2) {
    return e2 === null ? NaN : +e2;
  }
  var Pr = Va(Le2);
  var vr = Pr.right;
  var os = Pr.left;
  var rs = Va(Ft).center;
  var qt = Math.sqrt(50);
  var Ot = Math.sqrt(10);
  var Nt = Math.sqrt(2);
  function Q(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function le2(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function Z() {
  }
  var ue2 = 0.7;
  var Ie2 = 1 / ue2;
  var qe2 = "\\s*([+-]?\\d+)\\s*";
  var la = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var $ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var ds = /^#([0-9a-f]{3,8})$/;
  var fs = new RegExp(`^rgb\\(${qe2},${qe2},${qe2}\\)$`);
  var ns = new RegExp(`^rgb\\(${$},${$},${$}\\)$`);
  var is = new RegExp(`^rgba\\(${qe2},${qe2},${qe2},${la}\\)$`);
  var cs = new RegExp(`^rgba\\(${$},${$},${$},${la}\\)$`);
  var ps = new RegExp(`^hsl\\(${la},${$},${$}\\)$`);
  var ms = new RegExp(`^hsla\\(${la},${$},${$},${la}\\)$`);
  var Dr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  Q(Z, se2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: Rr, formatHex: Rr, formatHex8: xs, formatHsl: Ls, formatRgb: Br, toString: Br });
  function Rr() {
    return this.rgb().formatHex();
  }
  function xs() {
    return this.rgb().formatHex8();
  }
  function Ls() {
    return Hr(this).formatHsl();
  }
  function Br() {
    return this.rgb().formatRgb();
  }
  function se2(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = ds.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? Fr(a) : t === 3 ? new T(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? Xa(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? Xa(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = fs.exec(e2)) ? new T(a[1], a[2], a[3], 1) : (a = ns.exec(e2)) ? new T(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = is.exec(e2)) ? Xa(a[1], a[2], a[3], a[4]) : (a = cs.exec(e2)) ? Xa(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = ps.exec(e2)) ? Or(a[1], a[2] / 100, a[3] / 100, 1) : (a = ms.exec(e2)) ? Or(a[1], a[2] / 100, a[3] / 100, a[4]) : Dr.hasOwnProperty(e2) ? Fr(Dr[e2]) : e2 === "transparent" ? new T(NaN, NaN, NaN, 0) : null;
  }
  function Fr(e2) {
    return new T(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Xa(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new T(e2, a, t, o);
  }
  function ua(e2) {
    return e2 instanceof Z || (e2 = se2(e2)), e2 ? (e2 = e2.rgb(), new T(e2.r, e2.g, e2.b, e2.opacity)) : new T();
  }
  function Oe2(e2, a, t, o) {
    return arguments.length === 1 ? ua(e2) : new T(e2, a, t, o ?? 1);
  }
  function T(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  Q(T, Oe2, le2(Z, { brighter(e2) {
    return e2 = e2 == null ? Ie2 : Math.pow(Ie2, e2), new T(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? ue2 : Math.pow(ue2, e2), new T(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new T(ge2(this.r), ge2(this.g), ge2(this.b), Za(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: Tr, formatHex: Tr, formatHex8: hs, formatRgb: qr, toString: qr }));
  function Tr() {
    return `#${he2(this.r)}${he2(this.g)}${he2(this.b)}`;
  }
  function hs() {
    return `#${he2(this.r)}${he2(this.g)}${he2(this.b)}${he2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function qr() {
    let e2 = Za(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${ge2(this.r)}, ${ge2(this.g)}, ${ge2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function Za(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function ge2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function he2(e2) {
    return e2 = ge2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function Or(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new G(e2, a, t, o);
  }
  function Hr(e2) {
    if (e2 instanceof G) return new G(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof Z || (e2 = se2(e2)), !e2) return new G();
    if (e2 instanceof G) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = Math.min(a, t, o), l2 = Math.max(a, t, o), u = NaN, s = l2 - r, d = (l2 + r) / 2;
    return s ? (a === l2 ? u = (t - o) / s + (t < o) * 6 : t === l2 ? u = (o - a) / s + 2 : u = (a - t) / s + 4, s /= d < 0.5 ? l2 + r : 2 - l2 - r, u *= 60) : s = d > 0 && d < 1 ? 0 : u, new G(u, s, d, e2.opacity);
  }
  function sa(e2, a, t, o) {
    return arguments.length === 1 ? Hr(e2) : new G(e2, a, t, o ?? 1);
  }
  function G(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  Q(G, sa, le2(Z, { brighter(e2) {
    return e2 = e2 == null ? Ie2 : Math.pow(Ie2, e2), new G(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? ue2 : Math.pow(ue2, e2), new G(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, r = 2 * t - o;
    return new T(Ut(e2 >= 240 ? e2 - 240 : e2 + 120, r, o), Ut(e2, r, o), Ut(e2 < 120 ? e2 + 240 : e2 - 120, r, o), this.opacity);
  }, clamp() {
    return new G(Nr(this.h), $a(this.s), $a(this.l), Za(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = Za(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${Nr(this.h)}, ${$a(this.s) * 100}%, ${$a(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function Nr(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function $a(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function Ut(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var Ka = Math.PI / 180;
  var _a = 180 / Math.PI;
  var Ya = 18;
  var Ur = 0.96422;
  var Vr = 1;
  var Er = 0.82521;
  var Wr = 4 / 29;
  var Ne2 = 6 / 29;
  var Gr = 3 * Ne2 * Ne2;
  var gs = Ne2 * Ne2 * Ne2;
  function zr(e2) {
    if (e2 instanceof K) return new K(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof J) return Xr(e2);
    e2 instanceof T || (e2 = ua(e2));
    var a = Gt(e2.r), t = Gt(e2.g), o = Gt(e2.b), r = Vt((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / Vr), l2, u;
    return a === t && t === o ? l2 = u = r : (l2 = Vt((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / Ur), u = Vt((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / Er)), new K(116 * r - 16, 500 * (l2 - r), 200 * (r - u), e2.opacity);
  }
  function He2(e2, a, t, o) {
    return arguments.length === 1 ? zr(e2) : new K(e2, a, t, o ?? 1);
  }
  function K(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  Q(K, He2, le2(Z, { brighter(e2) {
    return new K(this.l + Ya * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new K(this.l - Ya * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = Ur * Et(a), e2 = Vr * Et(e2), t = Er * Et(t), new T(Wt(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), Wt(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), Wt(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function Vt(e2) {
    return e2 > gs ? Math.pow(e2, 1 / 3) : e2 / Gr + Wr;
  }
  function Et(e2) {
    return e2 > Ne2 ? e2 * e2 * e2 : Gr * (e2 - Wr);
  }
  function Wt(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function Gt(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function Is(e2) {
    if (e2 instanceof J) return new J(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof K || (e2 = zr(e2)), e2.a === 0 && e2.b === 0) return new J(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * _a;
    return new J(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function da(e2, a, t, o) {
    return arguments.length === 1 ? Is(e2) : new J(e2, a, t, o ?? 1);
  }
  function J(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function Xr(e2) {
    if (isNaN(e2.h)) return new K(e2.l, 0, 0, e2.opacity);
    var a = e2.h * Ka;
    return new K(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  Q(J, da, le2(Z, { brighter(e2) {
    return new J(this.h, this.c, this.l + Ya * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new J(this.h, this.c, this.l - Ya * (e2 ?? 1), this.opacity);
  }, rgb() {
    return Xr(this).rgb();
  } }));
  var _r = -0.14861;
  var zt = 1.78277;
  var Xt = -0.29227;
  var ja = -0.90649;
  var fa = 1.97294;
  var $r = fa * ja;
  var Zr = fa * zt;
  var Kr = zt * Xt - ja * _r;
  function Cs(e2) {
    if (e2 instanceof Ce2) return new Ce2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof T || (e2 = ua(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = (Kr * o + $r * a - Zr * t) / (Kr + $r - Zr), l2 = o - r, u = (fa * (t - r) - Xt * l2) / ja, s = Math.sqrt(u * u + l2 * l2) / (fa * r * (1 - r)), d = s ? Math.atan2(u, l2) * _a - 120 : NaN;
    return new Ce2(d < 0 ? d + 360 : d, s, r, e2.opacity);
  }
  function Ue2(e2, a, t, o) {
    return arguments.length === 1 ? Cs(e2) : new Ce2(e2, a, t, o ?? 1);
  }
  function Ce2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  Q(Ce2, Ue2, le2(Z, { brighter(e2) {
    return e2 = e2 == null ? Ie2 : Math.pow(Ie2, e2), new Ce2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? ue2 : Math.pow(ue2, e2), new Ce2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * Ka, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), r = Math.sin(e2);
    return new T(255 * (a + t * (_r * o + zt * r)), 255 * (a + t * (Xt * o + ja * r)), 255 * (a + t * (fa * o)), this.opacity);
  } }));
  function $t(e2, a, t, o, r) {
    var l2 = e2 * e2, u = l2 * e2;
    return ((1 - 3 * e2 + 3 * l2 - u) * a + (4 - 6 * l2 + 3 * u) * t + (1 + 3 * e2 + 3 * l2 - 3 * u) * o + u * r) / 6;
  }
  function Yr(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), r = e2[o], l2 = e2[o + 1], u = o > 0 ? e2[o - 1] : 2 * r - l2, s = o < a - 1 ? e2[o + 2] : 2 * l2 - r;
      return $t((t - o / a) * a, u, r, l2, s);
    };
  }
  function jr(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), r = e2[(o + a - 1) % a], l2 = e2[o % a], u = e2[(o + 1) % a], s = e2[(o + 2) % a];
      return $t((t - o / a
