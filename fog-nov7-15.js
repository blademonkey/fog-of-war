0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F.", wakeFailed: "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628.", wakeUnavailable: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0648\u0643\u064A\u0644 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0647\u0646\u0627." };
  var Bu = new Map(Object.entries({ en: Oa, es: wu, fr: ku, de: vu, it: Pu, pt: Mu, ca: Fu, nl: Au, ro: Du, ru: Ru, he: hr, iw: hr, ar: Tu }));
  function At(e2) {
    return Bu.get((e2 ?? "").toLowerCase().split("-")[0]) ?? Oa;
  }
  var Ou = /* @__PURE__ */ new Set(["he", "iw", "ar", "fa", "ur"]);
  function qa(e2) {
    return Ou.has((e2 ?? "").toLowerCase().split("-")[0]) ? "rtl" : "auto";
  }
  var Oe2 = (0, import_react4.createContext)(Oa);
  function w() {
    return (0, import_react4.useContext)(Oe2);
  }
  function qe2(e2) {
    let a = (0, import_react4.useContext)(Oe2);
    return e2 ? At(e2) : a;
  }
  var $a = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var gr = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var Lr = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var Tt = (e2) => {
    let a = Lr(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var Ir = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var Cr = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var br = (0, import_react8.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: l2 = "", children: r, iconNode: u, ...s }, d) => (0, import_react8.createElement)("svg", { ref: d, ...Ir, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: $a("lucide", l2), ...!r && !Cr(s) && { "aria-hidden": "true" }, ...s }, [...u.map(([n, i]) => (0, import_react8.createElement)(n, i)), ...Array.isArray(r) ? r : [r]]));
  var ue2 = (e2, a) => {
    let t = (0, import_react7.forwardRef)(({ className: o, ...l2 }, r) => (0, import_react7.createElement)(br, { ref: r, iconNode: a, className: $a(`lucide-${gr(Tt(e2))}`, `lucide-${e2}`, o), ...l2 }));
    return t.displayName = Tt(e2), t;
  };
  var $u = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var Le2 = ue2("arrow-up-right", $u);
  var Eu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Ie2 = ue2("check", Eu);
  var Vu = [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]];
  var la = ue2("copy", Vu);
  var Wu = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var se2 = ue2("loader-circle", Wu);
  var Bt = (e2) => (0, import_jsx_runtime4.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: e2 });
  var yr = Bt((0, import_jsx_runtime4.jsx)("path", { d: "M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75" }));
  var Ea = Bt((0, import_jsx_runtime4.jsx)("path", { d: "M14.9998 20L7.70696 12.7071C7.31643 12.3166 7.31643 11.6834 7.70695 11.2929L14.9998 4" }));
  var Va = Bt((0, import_jsx_runtime4.jsx)("path", { d: "M9 4L16.2929 11.2929C16.6834 11.6834 16.6834 12.3166 16.2929 12.7071L9 20" }));
  function z({ variant: e2 = "secondary", compact: a = false, pill: t = false, selected: o, unavailable: l2 = false, states: r, state: u, className: s, children: d, ...n }) {
    let i = ["file-button", a && "is-compact", t && "is-pill", l2 && "is-unavailable", s].filter(Boolean).join(" "), f2 = r && u !== void 0 ? { states: r, state: u } : null, c = f2?.states[f2.state];
    return (0, import_jsx_runtime5.jsx)("button", { type: "button", ...n, className: i, "data-variant": e2, "data-state": f2?.state, "aria-pressed": o, disabled: l2 || n.disabled || c?.variant === "disabled", children: f2 ? (0, import_jsx_runtime5.jsx)(Yu, { ...f2 }) : d });
  }
  function ua({ label: e2, className: a, ...t }) {
    let o = w();
    return (0, import_jsx_runtime5.jsx)(z, { variant: "ghost", ...t, className: ["file-close", a].filter(Boolean).join(" "), "aria-label": e2 ?? o.close, children: yr });
  }
  var _u = 320;
  var ju = typeof window > "u" ? import_react9.useEffect : import_react9.useLayoutEffect;
  function wr({ state: e2, className: a, hidden: t = false, faceRef: o }) {
    return (0, import_jsx_runtime5.jsxs)("span", { ref: o, className: a, "aria-hidden": t || void 0, children: [e2.icon, (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label", children: e2.label }), e2.shortLabel && (0, import_jsx_runtime5.jsx)("span", { className: "file-button-label is-short", children: e2.shortLabel })] });
  }
  function Yu({ states: e2, state: a }) {
    let t = (0, import_react9.useRef)(null), o = (0, import_react9.useRef)(null), l2 = (0, import_react9.useRef)(null), [r, u] = (0, import_react9.useState)(null);
    return ju(() => {
      let s = o.current.offsetWidth, d = l2.current;
      if (l2.current = { state: a, width: s }, !d || d.state === a) return;
      let n = t.current;
      n.style.width = `${d.width}px`, n.offsetWidth, n.style.width = `${s}px`, u(d.state);
      let i = setTimeout(() => {
        n.style.width = "", u(null);
      }, _u);
      return () => clearTimeout(i);
    }, [a]), (0, import_jsx_runtime5.jsxs)("span", { ref: t, className: "file-button-slot", children: [r !== null && (0, import_jsx_runtime5.jsx)(wr, { state: e2[r], className: "file-button-face is-leaving", hidden: true }, `leaving-${r}`), (0, import_jsx_runtime5.jsx)(wr, { state: e2[a], className: r !== null ? "file-button-face is-entering" : "file-button-face", faceRef: o }, a)] });
  }
  function za(e2, a) {
    (0, import_react10.useEffect)(() => {
      if (!a) return;
      let t = e2.current, o = t.ownerDocument.activeElement, l2 = !o.matches(":focus-visible"), r = [];
      for (let u = t.parentElement; u; u = u.parentElement) {
        let s = t.ownerDocument.defaultView.getComputedStyle(u);
        if (u !== t.ownerDocument.scrollingElement && !["auto", "scroll"].includes(s.overflowY)) continue;
        r.push({ element: u, overflow: u.style.getPropertyValue("overflow-y"), priority: u.style.getPropertyPriority("overflow-y"), gutter: u.style.getPropertyValue("scrollbar-gutter"), gutterPriority: u.style.getPropertyPriority("scrollbar-gutter") }), (u === t.ownerDocument.documentElement ? t.ownerDocument.defaultView.innerWidth - u.clientWidth : u.offsetWidth - u.clientWidth - parseFloat(s.borderLeftWidth) - parseFloat(s.borderRightWidth)) > 0 && !s.scrollbarGutter.includes("stable") && u.style.setProperty("scrollbar-gutter", "stable", "important"), u.style.setProperty("overflow-y", "hidden", "important");
      }
      return t.showModal(), t.focus({ preventScroll: true }), () => {
        t.close();
        for (let { element: u, overflow: s, priority: d, gutter: n, gutterPriority: i } of r) u.style.setProperty("overflow-y", s, d), u.style.setProperty("scrollbar-gutter", n, i);
        o.isConnected && (l2 && (o.setAttribute("data-quiet-focus", ""), o.addEventListener("blur", () => o.removeAttribute("data-quiet-focus"), { once: true })), o.focus({ preventScroll: true }));
      };
    }, [e2, a]);
  }
  var sa = { scale: 1, x: 0, y: 0 };
  var Dr = (e2) => Math.min(4, Math.max(1, e2));
  var Mr = (e2, a) => Math.min(a, Math.max(-a, e2));
  var Fr = (e2, a) => Math.hypot(e2.x - a.x, e2.y - a.y);
  var Ar = (e2, a) => ({ x: (e2.x + a.x) / 2, y: (e2.y + a.y) / 2 });
  function ls(e2, a, t) {
    let o = Dr(a.scale), l2 = o === 1 ? sa : { scale: o, x: Mr(a.x, e2.offsetWidth * (o - 1) / 2), y: Mr(a.y, e2.offsetHeight * (o - 1) / 2) };
    return e2.style.transition = t ? "transform 200ms ease-out" : "none", e2.style.transform = `translate(${l2.x}px, ${l2.y}px) scale(${l2.scale})`, l2;
  }
  function Ht(e2, a, t, o) {
    let l2 = e2.parentElement.getBoundingClientRect(), r = { x: l2.left + e2.offsetLeft + e2.offsetWidth / 2, y: l2.top + e2.offsetTop + e2.offsetHeight / 2 }, u = Dr(a), s = u / o.scale;
    return { scale: u, x: o.x + (t.x - r.x - o.x) * (1 - s), y: o.y + (t.y - r.y - o.y) * (1 - s) };
  }
  function Se2({ photos: e2, start: a, title: t, detail: o, onClose: l2 }) {
    let r = w(), u = (0, import_react6.useRef)(null), s = (0, import_react6.useRef)(null), d = (0, import_react6.useRef)(sa), n = (0, import_react6.useRef)(/* @__PURE__ */ new Map()), i = (0, import_react6.useRef)(null), f2 = (0, import_react6.useRef)(null), [c, m] = (0, import_react6.useState)(a), [p, x] = (0, import_react6.useState)(false);
    za(u, true);
    let h2 = (0, import_react6.useCallback)((g, b) => {
      d.current = ls(s.current, g, b), x(d.current.scale > 1);
    }, []);
    (0, import_react6.useEffect)(() => {
      let g = u.current, b = (O2) => {
        O2.preventDefault(), O2.ctrlKey ? h2(Ht(s.current, d.current.scale * Math.exp(-O2.deltaY * 0.01), { x: O2.clientX, y: O2.clientY }, d.current), false) : d.current.scale > 1 && h2({ ...d.current, x: d.current.x - O2.deltaX, y: d.current.y - O2.deltaY }, false);
      };
      return g.addEventListener("wheel", b, { passive: false }), () => g.removeEventListener("wheel", b);
    }, [h2]), (0, import_react6.useEffect)(() => {
      let g = u.current, b = g.ownerDocument.activeElement;
      p && b !== g && g.contains(b) && g.focus({ preventScroll: true });
    }, [p]), (0, import_react6.useEffect)(() => {
      let g = u.current, b = g.ownerDocument.activeElement;
      (!b || !g.contains(b) || b.matches(":disabled")) && g.focus({ preventScroll: true });
    }, [c]);
    let y = (g) => {
      let b = Math.min(e2.length - 1, Math.max(0, c + g));
      b !== c && (d.current = sa, x(false), m(b));
    }, F = (g) => {
      let b = g.target;
      if (b.closest("button")) return;
      let O2 = b.closest(".file-viewer-stage") ? f2.current : "outside";
      f2.current = null, !(O2 === null || O2 === "handled") && (d.current.scale > 1 ? h2(sa, true) : O2 === "outside" && l2());
    }, v = (g) => {
      if (g.target.closest("button")) return;
      g.preventDefault(), f2.current = null;
      try {
        g.currentTarget.setPointerCapture(g.pointerId);
      } catch {
      }
      n.current.set(g.pointerId, { x: g.clientX, y: g.clientY });
      let [b, O2] = [...n.current.values()];
      n.current.size === 1 ? i.current = { type: d.current.scale > 1 ? "pan" : "swipe", start: b, origin: d.current, time: Date.now(), onPhoto: g.target === s.current } : n.current.size === 2 && (i.current = { type: "pinch", distance: Fr(b, O2), middle: Ar(b, O2), origin: d.current });
    }, S2 = (g) => {
      let b = i.current;
      if (!b || !n.current.has(g.pointerId)) return;
      n.current.set(g.pointerId, { x: g.clientX, y: g.clientY });
      let [O2, E2] = [...n.current.values()];
      if (b.type === "pinch" && E2) {
        let k2 = Ar(O2, E2);
        h2(Ht(s.current, b.origin.scale * Fr(O2, E2) / b.distance, k2, { scale: b.origin.scale, x: b.origin.x + k2.x - b.middle.x, y: b.origin.y + k2.y - b.middle.y }), false);
      } else b.type === "pan" && h2({ scale: d.current.scale, x: b.origin.x + g.clientX - b.start.x, y: b.origin.y + g.clientY - b.start.y }, false);
    }, P2 = (g) => {
      if (!n.current.delete(g.pointerId)) return;
      let b = i.current, [O2] = [...n.current.values()];
      if (O2) {
        b?.type === "pinch" && (i.current = { type: "pan", start: O2, origin: d.current, time: Date.now(), onPhoto: true, afterPinch: true });
        return;
      }
      if (i.current = null, !b) return;
      if (b.type === "pinch" || b.afterPinch) {
        d.current.scale < 1.05 && h2(sa, true);
        return;
      }
      let E2 = { x: g.clientX - b.start.x, y: g.clientY - b.start.y }, k2 = Date.now();
      if (Math.hypot(E2.x, E2.y) < 10 && k2 - b.time < 300) {
        b.onPhoto && d.current.scale === 1 ? (f2.current = "handled", h2(Ht(s.current, 4, { x: g.clientX, y: g.clientY }, d.current), true)) : f2.current = b.onPhoto ? "photo" : "outside";
        return;
      }
      b.type === "swipe" && Math.abs(E2.x) > 40 && Math.abs(E2.x) > Math.abs(E2.y) && y(E2.x < 0 ? 1 : -1);
    }, L2 = e2[c];
    return (0, import_jsx_runtime6.jsxs)("dialog", { ref: u, className: "file-viewer", "data-zoomed": p || void 0, "aria-label": r.photosOf(t), tabIndex: -1, onClick: F, onCancel: (g) => {
      g.preventDefault(), g.stopPropagation(), l2();
    }, onKeyDown: (g) => {
      g.key === "Escape" ? (g.preventDefault(), g.stopPropagation(), l2()) : (g.key === "ArrowRight" || g.key === "ArrowLeft") && (g.preventDefault(), y(g.key === "ArrowRight" ? 1 : -1));
    }, children: [(0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-bar", children: (0, import_jsx_runtime6.jsx)(ua, { className: "file-viewer-button", onClick: l2 }) }), (0, import_jsx_runtime6.jsx)("div", { className: "file-viewer-stage", onPointerDown: v, onPointerMove: S2, onPointerUp: P2, onPointerCancel: P2, onDragStart: (g) => g.preventDefault(), children: (0, import_jsx_runtime6.jsx)("img", { ref: s, src: L2.src, alt: L2.alt, draggable: false }, L2.src) }), (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-footer", children: [e2.length > 1 && (0, import_jsx_runtime6.jsxs)("div", { className: "file-viewer-steps", children: [(0, import_jsx_runtime6.jsx)(z, { variant: "ghost", className: "file-viewer-button", "aria-label": r.previousPhoto, disabled: c === 0, onClick: () => y(-1), children: Ea }), (0, import_jsx_runtime6.jsx)("span", { className: "file-viewer-count", "aria-live": "polite", children: r.photoCount(c + 1, e2.length) }), (0, import_jsx_runtime6.jsx)(z, { variant: "ghost", className: "file-viewer-button", "aria-label": r.nextPhoto, disabled: c === e2.length - 1, onClick: () => y(1), children: Va })] }), (0, import_jsx_runtime6.jsxs)("span", { className: "file-viewer-title", children: [t, o && ` \xB7 ${o}`] })] })] });
  }
  var $t = ["pointerdown", "wheel", "touchstart"];
  function Tr({ atStart: e2, atEnd: a, onPrevious: t, onNext: o }) {
    let l2 = w();
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip-arrows", children: [(0, import_jsx_runtime7.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": l2.previousPhoto, disabled: e2, onClick: t, children: Ea }), (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": l2.nextPhoto, disabled: a, onClick: o, children: Va })] });
  }
  function ds(e2) {
    let [a, t] = (0, import_react11.useState)(null), o = (0, import_react11.useRef)(null);
    (0, import_react11.useEffect)(() => {
      let r = e2.current, u = r.ownerDocument.defaultView, s = () => {
        o.current = null;
      }, d = () => {
        o.current !== null && Math.abs(r.scrollLeft - o.current) < 2 && s();
        let n = r.scrollWidth - r.clientWidth;
        t(n < 2 ? null : { atStart: r.scrollLeft < 2, atEnd: r.scrollLeft > n - 2 });
      };
      d(), r.addEventListener("scroll", d, { passive: true });
      for (let n of $t) r.addEventListener(n, s, { passive: true });
      return r.addEventListener("load", d, true), u.addEventListener("resize", d), () => {
        r.removeEventListener("scroll", d);
        for (let n of $t) r.removeEventListener(n, s);
        r.removeEventListener("load", d, true), u.removeEventListener("resize", d);
      };
    }, [e2]);
    let l2 = (r) => {
      let u = e2.current, s = [...u.children], d = s.map((c) => c.offsetLeft - s[0].offsetLeft), n = o.current ?? u.scrollLeft, i = r > 0 ? d.find((c) => c > n + 2) : [...d].reverse().find((c) => c < n - 2), f2 = Math.min(u.scrollWidth - u.clientWidth, Math.max(0, i ?? (r > 0 ? u.scrollWidth : 0)));
      o.current = f2, u.scrollTo({ left: f2, behavior: "smooth" });
    };
    return a && { ...a, onPrevious: () => l2(-1), onNext: () => l2(1) };
  }
  function Ka({ bleed: e2, className: a, children: t, ...o }) {
    let l2 = (0, import_react11.useRef)(null), r = ds(l2);
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-strip", "data-bleed": e2 || void 0, children: [(0, import_jsx_runtime7.jsx)("div", { ref: l2, ...o, className: [a, e2 && "file-bleed"].filter(Boolean).join(" "), children: t }), r && (0, import_jsx_runtime7.jsx)(Tr, { ...r })] });
  }
  function ne2() {
    let e2 = (0, import_react12.useRef)(null), a = (0, import_react12.useRef)(false), t = (o) => {
      e2.current?.pointerId === o.pointerId && (e2.current = null, delete o.currentTarget.dataset.dragging, o.currentTarget.hasPointerCapture(o.pointerId) && o.currentTarget.releasePointerCapture(o.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (o) => {
      o.currentTarget.toggleAttribute("data-can-drag", o.pointerType === "mouse" && o.currentTarget.scrollWidth > o.currentTarget.clientWidth);
    }, onPointerDown: (o) => {
      a.current = false, !(o.pointerType !== "mouse" || o.button !== 0 || o.currentTarget.scrollWidth <= o.currentTarget.clientWidth) && o.target.closest("[data-drag-scroll], dialog") === o.currentTarget && (e2.current = { pointerId: o.pointerId, startX: o.clientX, scrollLeft: o.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (o) => {
      let l2 = e2.current;
      if (!l2 || l2.pointerId !== o.pointerId) return;
      let r = o.clientX - l2.startX;
      !l2.active && Math.abs(r) < 5 || (l2.active || (l2.active = true, a.current = true, o.currentTarget.dataset.dragging = "", o.currentTarget.setPointerCapture(o.pointerId)), o.preventDefault(), o.currentTarget.scrollLeft = l2.scrollLeft - r);
    }, onPointerUp: t, onPointerCancel: t, onLostPointerCapture: t, onPointerLeave: () => {
      e2.current?.active || (e2.current = null);
    }, onDragStart: (o) => o.preventDefault(), onClickCapture: (o) => {
      !a.current || o.detail === 0 || (a.current = false, o.preventDefault(), o.stopPropagation());
    } };
  }
  function V(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function ms({ children: e2, width: a = "fluid", className: t, ...o }) {
    return (0, import_jsx_runtime8.jsx)(Oe2.Provider, { value: qe2(o.lang), children: (0, import_jsx_runtime8.jsx)("main", { dir: qa(o.lang), ...o, className: t ? `file-card ${t}` : "file-card", "data-width": a, children: e2 }) });
  }
  var hs = ["https:", "http:", "mailto:", "tel:"];
  function Nt(e2) {
    if (/^[#./]/.test(e2)) return e2;
    try {
      return hs.includes(new URL(e2).protocol) ? e2 : void 0;
    } catch {
      return;
    }
  }
  function xs({ title: e2, fact: a, factKnown: t = false, intro: o }) {
    return (0, import_jsx_runtime8.jsxs)("header", { className: "file-header", children: [(0, import_jsx_runtime8.jsx)("h1", { className: "file-title", children: e2 }), a && (0, import_jsx_runtime8.jsx)("p", { className: t ? "file-fact is-known" : "file-fact", children: a }), o && (0, import_jsx_runtime8.jsx)("p", { className: "file-intro", children: o })] });
  }
  function gs({ label: e2, heading: a = false, children: t }) {
    let o = import_react5.default.useId();
    return (0, import_jsx_runtime8.jsxs)("section", { className: "file-group", "aria-labelledby": o, children: [typeof a == "string" ? (0, import_jsx_runtime8.jsxs)("hgroup", { className: "file-group-head", children: [(0, import_jsx_runtime8.jsx)("p", { className: "file-group-label", children: e2 }), (0, import_jsx_runtime8.jsx)("h2", { id: o, className: "file-group-heading", children: a })] }) : (0, import_jsx_runtime8.jsx)("h2", { id: o, className: a ? "file-group-heading" : "file-group-label", children: e2 }), t] });
  }
  var qr = (0, import_react5.createContext)(false);
  function Ls({ numbered: e2 = false, children: a }) {
    return e2 ? (0, import_jsx_runtime8.jsx)(qr.Provider, { value: true, children: (0, import_jsx_runtime8.jsx)("ol", { className: "file-rows is-numbered", children: a }) }) : (0, import_jsx_runtime8.jsx)("div", { className: "file-rows", children: a });
  }
  function Is({ number: e2, thumbnail: a, name: t, detail: o, value: l2, valueKnown: r = false }) {
    let u = (0, import_react5.useContext)(qr);
    return (0, import_jsx_runtime8.jsxs)(u ? "li" : "div", { className: "file-row", style: u && e2 !== void 0 ? { counterSet: `file-row ${e2}` } : void 0, children: [e2 !== void 0 ? (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : u && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot is-number is-counted" }), a && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-slot", children: (0, import_jsx_runtime8.jsx)("img", { src: a.src, alt: a.alt, style: V(a), loading: "lazy" }) }), (0, import_jsx_runtime8.jsxs)("div", { className: "file-row-body", children: [(0, import_jsx_runtime8.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: t }), o && (0, import_jsx_runtime8.jsx)("span", { className: "file-row-detail", children: o })] }), l2 && (0, import_jsx_runtime8.jsx)("bdi", { className: r ? "file-row-value file-known" : "file-row-value", children: l2 })] })] });
  }
  function Cs({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("div", { className: "file-text", children: e2 });
  }
  function Ss({ children: e2, sub: a }) {
    return (0, import_jsx_runtime8.jsxs)("div", { className: "file-heading", children: [(0, import_jsx_runtime8.jsx)("span", { className: "file-strong", children: e2 }), a && (0, import_jsx_runtime8.jsx)("span", { className: "file-secondary", children: a })] });
  }
  function bs({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { className: "file-p", children: e2 });
  }
  function ws({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("p", { className: "file-key file-bar", children: e2 });
  }
  function na({ href: e2, children: a }) {
    let t = Nt(e2);
    return t ? (0, import_jsx_runtime8.jsx)("a", { className: "file-link", href: t, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(t) ? "_blank" : void 0, rel: "noopener noreferrer", children: a }) : (0, import_jsx_runtime8.jsx)("span", { className: "file-link", children: a });
  }
  function Et({ items: e2, label: a, title: t = a, layout: o = "grid", bleed: l2 = o === "strip" && e2.length > 1 }) {
    let r = w(), u = ne2(), [s, d] = (0, import_react5.useState)(null), n = e2.map((f2, c) => (0, import_jsx_runtime8.jsx)("button", { type: "button", className: "file-photo-zoom", "aria-label": r.fullScreen(f2.alt), onClick: () => d(c), children: (0, import_jsx_runtime8.jsx)("img", { src: f2.src, alt: f2.alt, style: V(f2), loading: "lazy" }) }, f2.src)), i = e2.length === 1 ? " is-single" : "";
    return (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [o === "strip" && e2.length > 1 ? (0, import_jsx_runtime8.jsx)(Ka, { ...u, bleed: l2, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": a, tabIndex: 0, children: n }) : (0, import_jsx_runtime8.jsx)("div", { ...o === "strip" ? u : {}, className: `file-photos${i}${o === "strip" && l2 ? " file-bleed" : ""}`, "data-layout": o, role: "region", "aria-label": a, children: n }), s !== null && (0, import_jsx_runtime8.jsx)(Se2, { photos: e2, start: s, title: t, onClose: () => d(null) })] });
  }
  function Ds({ children: e2 }) {
    return (0, import_jsx_runtime8.jsx)("footer", { className: "file-closing", children: e2 });
  }
  function be2(e2, a) {
    return e2 == null || a == null ? NaN : e2 
