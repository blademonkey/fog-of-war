2(6);
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
    let c = ["file-button", a && "is-compact", t && "is-pill", r && "is-unavailable", s].filter(Boolean).join(" "), i = l2 && u !== void 0 ? { states: l2, state: u } : null, n = i?.states[i.state];
    return (0, import_jsx_runtime7.jsx)("button", { type: "button", ...f2, className: c, "data-variant": e2, "data-state": i?.state, "aria-pressed": o, disabled: r || f2.disabled || n?.variant === "disabled", children: i ? (0, import_jsx_runtime7.jsx)(rd, { ...i }) : d });
  }
  var td = 320;
  var od = typeof window > "u" ? import_react11.useEffect : import_react11.useLayoutEffect;
  function Fl({ state: e2, className: a, hidden: t = false, faceRef: o }) {
    return (0, import_jsx_runtime7.jsxs)("span", { ref: o, className: a, "aria-hidden": t || void 0, children: [e2.icon, (0, import_jsx_runtime7.jsx)("span", { className: "file-button-label", children: e2.label }), e2.shortLabel && (0, import_jsx_runtime7.jsx)("span", { className: "file-button-label is-short", children: e2.shortLabel })] });
  }
  function rd({ states: e2, state: a }) {
    let t = (0, import_react11.useRef)(null), o = (0, import_react11.useRef)(null), r = (0, import_react11.useRef)(null), [l2, u] = (0, import_react11.useState)(null);
    return od(() => {
      let s = o.current.offsetWidth, d = r.current;
      if (r.current = { state: a, width: s }, !d || d.state === a) return;
      let f2 = t.current;
      f2.style.width = `${d.width}px`, f2.offsetWidth, f2.style.width = `${s}px`, u(d.state);
      let c = setTimeout(() => {
        f2.style.width = "", u(null);
      }, td);
      return () => clearTimeout(c);
    }, [a]), (0, import_jsx_runtime7.jsxs)("span", { ref: t, className: "file-button-slot", children: [l2 !== null && (0, import_jsx_runtime7.jsx)(Fl, { state: e2[l2], className: "file-button-face is-leaving", hidden: true }, `leaving-${l2}`), (0, import_jsx_runtime7.jsx)(Fl, { state: e2[a], className: l2 !== null ? "file-button-face is-entering" : "file-button-face", faceRef: o }, a)] });
  }
  function ud({ label: e2, options: a, value: t, onChange: o }) {
    let r = import_react11.default.useId();
    return (0, import_jsx_runtime7.jsxs)("div", { className: "file-control", role: "group", "aria-labelledby": r, children: [(0, import_jsx_runtime7.jsx)("span", { id: r, className: "file-control-label", children: e2 }), (0, import_jsx_runtime7.jsx)("div", { className: "file-choice-row", children: a.map((l2) => (0, import_jsx_runtime7.jsx)(ee2, { compact: true, selected: l2.value === t, unavailable: l2.unavailable, onClick: () => o(l2.value), children: l2.label }, l2.value)) })] });
  }
  var zo = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
  function xd() {
    return (0, import_jsx_runtime11.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, import_jsx_runtime11.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  var Ld = { idle: { icon: (0, import_jsx_runtime11.jsx)(xd, {}), label: zo.label, shortLabel: "Buy this", variant: "active" }, sending: { icon: (0, import_jsx_runtime11.jsx)(fe2, { className: "file-spin", size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sending\u2026", variant: "disabled" }, sent: { icon: (0, import_jsx_runtime11.jsx)(La, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sent to Instinct", shortLabel: "Sent", variant: "disabled" } };

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
    function createMemoryLocation(to, state = null, key, mask) {
      let location = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to,
        state,
        key,
        mask
      );
      warning(
        location.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to
        )}`
      );
      return location;
    }
    function createHref2(to) {
      return typeof to === "string" ? to : createPath(to);
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
      createURL(to) {
        return new URL(createHref2(to), "http://localhost");
      },
      encodeLocation(to) {
        let path = typeof to === "string" ? parsePath(to) : to;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to, state) {
        action = "PUSH";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
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
  function createLocation(current, to, state = null, key, mask) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to === "string" ? parsePath(to) : to,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey(),
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
  function flattenRoutes(routes, branches = [], parentsMe