ounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
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
        let [h, p] = w2;
        return Array.isArray(p) ? p.includes({ ...n, ...i }[h]) : { ...n, ...i }[h] === p;
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
    return this.rg