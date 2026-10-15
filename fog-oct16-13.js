ount(c) > 1 ? y.Children.only(null) : y.isValidElement(c) ? c.props.children : null : g);
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
      return Object.entries(v2).every((w) => {
        let [h, p] = w;
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
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var import_react20 = __toESM(require_react(), 1);
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var import_react21 = __toESM(require_react(), 1);
  var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
  var ru = Object.create;
  var sr = Object.defineProperty;
  var lu = Object.getOwnPropertyDescriptor;
  var uu = Object.getOwnPropertyNames;
  var su = Object.getPrototypeOf;
  var du = Object.prototype.hasOwnProperty;
  var fu = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var nu = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let r of uu(a)) !du.call(e2, r) && r !== t && sr(e2, r, { get: () => a[r], enumerable: !(o = lu(a, r)) || o.enumerable });
    return e2;
  };
  var dr = (e2, a, t) => (t = e2 != null ? ru(su(e2)) : {}, nu(a || !e2 || !e2.__esModule ? sr(t, "default", { value: e2, enumerable: true }) : t, e2));
  var Oo = fu((bm, ct2) => {
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
      typeof ct2 < "u" && ct2.exports ? (a.default = a, ct2.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  var Fa = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var fr = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var nr = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var yt = (e2) => {
    let a = nr(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var ir = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var cr = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var mr = (0, import_react7.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: r = "", children: l2, iconNode: u, ...s }, d) => (0, import_react7.createElement)("svg", { ref: d, ...ir, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: Fa("lucide", r), ...!l2 && !cr(s) && { "aria-hidden": "true" }, ...s }, [...u.map(([f2, i]) => (0, import_react7.createElement)(f2, i)), ...Array.isArray(l2) ? l2 : [l2]]));
  var De2 = (e2, a) => {
    let t = (0, import_react6.forwardRef)(({ className: o, ...r }, l2) => (0, import_react6.createElement)(mr, { ref: l2, iconNode: a, className: Fa(`lucide-${fr(yt(e2))}`, `lucide-${e2}`, o), ...r }));
    return t.displayName = yt(e2), t;
  };
  var xu = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var pe2 = De2("arrow-up-right", xu);
  var Lu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Qe2 = De2("check", Lu);
  var hu = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var oe2 = De2("loader-circle", hu);
  var wt = (e2) => (0, import_jsx_runtime4.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: e2 });
  var xr = wt((0, import_jsx_runtime4.jsx)("path", { d: "M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75" }));
  var Ta = wt((0, import_jsx_runtime4.jsx)("path", { d: "M14.9998 20L7.70696 12.7071C7.31643 12.3166 7.31643 11.6834 7.70695 11.2929L14.9998 4" }));
  var qa = wt((0, import_jsx_runtime4.jsx)("path", { d: "M9 4L16.2929 11.2929C16.6834 11.6834 16.6834 12.3166 16.2929 12.7071L9 20" }));
  function W({ variant: e2 = "secondary", compact: a = false, pill: t = false, selected: o, unavailable: r = false, states: l2, state: u, className: s, children: d, ...f2 }) {
    let i = ["file-button", a && "is-compact", t && "is-pill", r && "is-unavailable", s].filter(Boolean).join(" "), c = l2 && u !== void 0 ? { states: l2, state: u } : null, n = c?.states[c.state];
    return (0, import_jsx_runtime5.jsx)("button", { type: "button", ...f2, className: i, "data-variant": e2, "data-state": c?.state, "aria-pressed": o, disabled: r || f2.disabled || n?.variant === "disabled", children: c ? (0, import_jsx_runtime5.jsx)(yu, { ...c }) : d });
  }
  function Je2({ label: e2 = "Close", className: a, ...t }) {
    return (0, import_jsx_runtime5.jsx)(W, { variant: "ghost", ...t, className: ["file-close", a].filter(Boolean).join(" "), "aria-label": e2, children: xr });
  }
  var Su = 320;
  var bu = typeof window > "u" ? import_react8.useEffect : import_react8.useLayoutEffect;
  function Lr({ state: e2, className: a, hidden: t = false, faceRef: o }) {
    return (0, import_jsx_runtime5.jsxs)("span", { ref: o, className: a, "aria-hidden": t || void 0, children: [e2.icon, (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label", children: e2.label }), e2.shortLabel && (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label is-short", children: e2.shortLabel })] });
  }
  function yu({ states: e2, state: a }) {
    let t = (0, import_react8.useRef)(null), o = (0, import_react8.useRef)(null), r = (0, import_react8.useRef)(null), [l2, u] = (0, import_react8.useState)(null);
    return bu(() => {
      let s = o.current.offsetWidth, d = r.current;
      if (r.current = { state: a, width: s }, !d || d.state === a) return;
      let f2 = t.current;
      f2.style.width = `${d.width}px`, f2.offsetWidth, f2.style.width = `${s}px`, u(d.state);
      let i = setTimeout(() => {
        f2.style.width = "", u(null);
      }, Su);
      return () => clearTimeout(i);
    }, [a]), (0, import_jsx_runtime5.jsxs)("span", { ref: t, className: "file-button-slot", children: [l2 !== null && (0, import_jsx_runtime5.jsx)(Lr, { state: e2[l2], className: "file-button-face is-leaving", hidden: true }, `leaving-${l2}`), (0, import_jsx_runtime5.jsx)(Lr, { state: e2[a], className: l2 !== null ? "file-button-face is-entering" : "file-button-face", faceRef: o }, a)] });
  }
  function Na(e2, a) {
    (0, import_react9.useEffect)(() => {
      if (!a) return;
      let t = e2.current, o = t.ownerDocument.activeElement, r = !o.matches(":focus-visible"), l2 = [];
      for (let u = t.parentElement; u; u = u.parentElement) {
        let s = t.ownerDocument.defaultView.getComputedStyle(u);
        if (u !== t.ownerDocument.scrollingElement && !["auto", "scroll"].includes(s.overflowY)) continue;
        l2.push({ element: u, overflow: u.style.getPropertyValue("overflow-y"), priority: u.style.getPropertyPriority("overflow-y"), gutter: u.style.getPropertyValue("scrollbar-gutter"), gutterPriority: u.style.getPropertyPriority("scrollbar-gutter") }), (u === t.ownerDocument.documentElement ? t.ownerDocument.defaultView.innerWidth - u.clientWidth : u.offsetWidth - u.clientWidth - parseFloat(s.borderLeftWidth) - parseFloat(s.borderRightWidth)) > 0 && !s.scrollbarGutter.includes("stable") && u.style.setProperty("scrollbar-gutter", "stable", "important"), u.style.setProperty("overflow-y", "hidden", "important");
      }
      return t.showModal(), t.focus({ preventScroll: true }), () => {
        t.close();
        for (let { element: u, overflow: s, priority: d, gutter: f2, gutterPriority: i } of l2) u.style.setProperty("overflow-y", s, d), u.style.setProperty("scrollbar-gutter", f2, i);
        o.isConnected && (r && (o.setAttribute("data-quiet-focus", ""), o.addEventListener("blur", () => o.removeAttribute("data-quiet-focus"), { once: true })), o.focus({ preventScroll: true }));
      };
    }, [e2, a]);
  }
  var aa = { scale: 1, x: 0, y: 0 };
  var Sr = (e2) => Math.min(4, Math.max(1, e2));
  var gr = (e2, a) => Math.min(a, Math.max(-a, e2));
  var Ir = (e2, a) => Math.hypot(e2.x - a.x, e2.y - a.y);
  var Cr = (e2, a) => ({ x: (e2.x + a.x) / 2, y: (e2.y + a.y) / 2 });
  function Du(e2, a, t) {
    let o = Sr(a.scale), r = o === 1 ? aa : { scale: o, x: gr(a.x, e2.offsetWidth * (o - 1) / 2), y: gr(a.y, e2.offsetHeight * (o - 1) / 2) };
    return e2.style.transition = t ? "transform 200ms ease-out" : "none", e2.style.transform = `translate(${r.x}px, ${r.y}px) scale(${r.scale})`, r;
  }
  function At(e2, a, t, o) {
    let r = e2.parentElement.getBoundingClientRect(), l2 = { x: r.left + e2.offsetLeft + e2.offsetWidth / 2, y: r.top + e2.offsetTop + e2.offsetHeight / 2 }, u = Sr(a), s = u / o.scale;
    return { scale: u, x: o.x + (t.x - l2.x - o.x) * (1 - s), y: o.y + (t.y - l2.y - o.y) * (1 - s) };
  }
  function xe2({ photos: e2, start: a, title: t, detail: o, onClose: r }) {
    let l2 = (0, import_react5.useRef)(null), u = (0, import_react5.useRef)(null), s = (0, import_react5.useRef)(aa), d = (0, import_react5.useRef)(/* @__PURE__ */ new Map()), f2 = (0, import_react5.useRef)(null), i = (0, import_react5.useRef)(null), [c, n] = (0, import_react5.useState)(a), [p, x] = (0, import_react5.useState)(false);
    Na(l2, true);
    let m = (0, import_react5.useCallback)((h, b) => {
      s.current = Du(u.current, h, b), x(s.current.scale > 1);
    }, []);
    (0, import_react5.useEffect)(() => {
      let h = l2.current, b = (F2) => {
        F2.preventDefault(), F2.ctrlKey ? m(At(u.current, s.current.scale * Math.exp(-F2.deltaY * 0.01), { x: F2.clientX, y: F2.clientY }, s.current), false) : s.current.scale > 1 && m({ ...s.current, x: s.current.x - F2.deltaX, y: s.current.y - F2.deltaY }, false);
      };
      return h.addEventListener("wheel", b, { passive: false }), () => h.removeEventListener("wheel", b);
    }, [m]), (0, import_react5.useEffect)(() => {
      let h = l2.current, b = h.ownerDocument.activeElement;
      p && b !== h && h.contains(b) && h.focus({ preventScroll: true });
    }, [p]), (0, import_react5.useEffect)(() => {
      let h = l2.current, b = h.ownerDocument.activeElement;
      (!b || !h.contains(b) || b.matches(":disabled")) && h.focus({ preventScroll: true });
    }, [c]);
    let C = (h) => {
      let b = Math.min(e2.length - 1, Math.max(0, c + h));
      b !== c && (s.current = aa, x(false), n(b));
    }, y2 = (h) => {
      let b = h.target;
      if (b.closest("button")) return;
      let F2 = b.closest(".file-viewer-stage") ? i.current : "outside";
      i.current = null, !(F2 === null || F2 === "handled") && (s.current.scale > 1 ? m(aa, true) : F2 === "outside" && r());
    }, P = (h) => {
      if (h.target.closest("button")) return;
      h.preventDefault(), i.current = null;
      try {
        h.currentTarget.setPointerCapture(h.pointerId);
      } catch {
      }
      d.current.set(h.pointerId, { x: h.clientX, y: h.clientY });
      let [b, F2] = [...d.current.values()];
      d.current.size === 1 ? f2.current = { type: s.current.scale > 1 ? "pan" : "swipe", start: b, origin: s.current, time: Date.now(), onPhoto: h.target === u.current } : d.current.size === 2 && (f2.current = { type: "pinch", distance: Ir(b, F2), middle: Cr(b, F2), origin: s.current });
    }, g = (h) => {
      let b = f2.current;
      if (!b || !d.current.has(h.pointerId)) return;
      d.current.set(h.pointerId, { x: h.clientX, y: h.clientY });
      let [F2, U2] = [...d.current.values()];
      if (b.type === "pinch" && U2) {
        let te2 = Cr(F2, U2);
        m(At(u.current, b.origin.scale * Ir(F2, U2) / b.distance, te2, { scale: b.origin.scale, x: b.origin.x + te2.x - b.middle.x, y: b.origin.y + te2.y - b.middle.y }), false);
      } else b.type === "pan" && m({ scale: s.current.scale, x: b.origin.x + h.clientX - b.start.x, y: b.origin.y + h.clientY - b.start.y }, false);
    }, M2 = (h) => {
      if (!d.current.delete(h.pointerId)) return;
      let b = f2.current, [F2] = [...d.current.values()];
      if (F2) {
        b?.type === "pinch" && (f2.current = { type: "pan", start: F2, origin: s.current, time: Date.now(), onPhoto: true, afterPinch: true });
        return;
      }
      if (f2.current = null, !b) return;
      if (b.type === "pinch" || b.afterPinch) {
        s.current.scale < 1.05 && m(aa, true);
        return;
      }
      let U2 = { x: h.clientX - b.start.x, y: h.clientY - b.start.y }, te2 = Date.now();
      if (Math.hypot(U2.x, U2.y) < 10 && te2 - b.time < 300) {
        b.onPhoto && s.current.scale === 1 ? (i.current = "handled", m(At(u.current, 4, { x: h.clientX, y: h.clientY }, s.current), true)) : i.current = b.onPhoto ? "photo" : "outside";
        return;
      }
      b.type === "swipe" && Math.abs(U2.x) > 40 && Math.abs(U2.x) > Math.abs(U2.y) && C(U2.x < 0 ? 1 : -1);
    }, L = e2[c];
    return (0, import_jsx_runtime6.jsxs)("dialog", { ref: l2, className: "file-viewer", "data-zoomed": p || void 0, "aria-label": `${t} photos`, tabIndex: -1, onClick: y2, onCancel: (h) => {
      h.preventDefault(), h.stopPropagation(), r();
    }, onKeyDown: (h) => {
      h.key === "Escape" ? (h.preventDefault(), h.stopPropagation(), r()) : (h.key === "ArrowRight" || h.key === "ArrowLeft") && (h.preventDefault(), C(h.key === "ArrowRight" ? 1 : -1));
    }, children: [(0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-bar", children: (0, import_jsx_runtime6.jsx)(Je2, { className: "file-viewer-button", onClick: r }) }), (0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-stage", onPointerDown: P, onPointerMove: g, onPointerUp: M2, onPointerCancel: M2, onDragStart: (h) => h.preventDefault(), children: (0, import_jsx_runtime6.jsx)("img", { ref: u, src: L.src, alt: L.alt, draggable: false }, L.src) }), (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-footer", children: [e2.length > 1 && (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-steps", children: [(0, import_jsx_runtime6.jsx)(W, { variant: "ghost", className: "file-viewer-button", "aria-label": "Previous photo", disabled: c === 0, onClick: () => C(-1), children: Ta }), (0, import_jsx_runtime6.jsxs)("span", { className: "file-viewer-count", "aria-live": "polite", children: [c + 1, " of ", e2.length] }), (0, import_jsx_runtime6.jsx)(W, { variant: "ghost", className: "file-viewer-button", "aria-label": "Next photo", disabled: c === e2.length - 1, onClick: () => C(1), children: qa })] }), (0, import_jsx_runtime6.jsxs)("span", { className: "file-viewer-title", children: [t, o && ` \xB7 ${o}`] })] })] });
  }
  var Dt = ["pointerdown", "wheel", "touchstart"];
  function yr({ atStart: e2, atEnd: a, onPrevious: t, onNext: o }) {
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip-arrows", children: [(0, import_jsx_runtime7.jsx)("button", { type: "button", class
