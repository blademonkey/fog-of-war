   if (Pe(s)) {
          X(s(o), t, r, o);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([n, a]) => {
        X(a, oe(t, n), r, o);
      });
    });
  };
  var oe = (e2, t) => {
    let r = e2;
    return t.split("-").forEach((o) => {
      r.nextPart.has(o) || r.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(o);
    }), r;
  };
  var Pe = (e2) => e2.isThemeGetter;
  var Me = (e2, t) => t ? e2.map(([r, o]) => {
    let s = o.map((n) => typeof n == "string" ? t + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [t + a, i])) : n);
    return [r, s];
  }) : e2;
  var Te = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n, a) => {
      r.set(n, a), t++, t > e2 && (t = 0, o = r, r = /* @__PURE__ */ new Map());
    };
    return { get(n) {
      let a = r.get(n);
      if (a !== void 0) return a;
      if ((a = o.get(n)) !== void 0) return s(n, a), a;
    }, set(n, a) {
      r.has(n) ? r.set(n, a) : s(n, a);
    } };
  };
  var Ne = (e2) => {
    let { separator: t, experimentalParseClassName: r } = e2, o = t.length === 1, s = t[0], n = t.length, a = (i) => {
      let d = [], c = 0, u = 0, m;
      for (let p = 0; p < i.length; p++) {
        let y = i[p];
        if (c === 0) {
          if (y === s && (o || i.slice(p, p + n) === t)) {
            d.push(i.slice(u, p)), u = p + n;
            continue;
          }
          if (y === "/") {
            m = p;
            continue;
          }
        }
        y === "[" ? c++ : y === "]" && c--;
      }
      let g = d.length === 0 ? i : i.substring(u), v = g.startsWith("!"), w2 = v ? g.substring(1) : g, x = m && m > u ? m - u : void 0;
      return { modifiers: d, hasImportantModifier: v, baseClassName: w2, maybePostfixModifierPosition: x };
    };
    return r ? (i) => r({ className: i, parseClassName: a }) : a;
  };
  var Be = (e2) => {
    if (e2.length <= 1) return e2;
    let t = [], r = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
    }), t.push(...r.sort()), t;
  };
  var Ie = (e2) => ({ cache: Te(e2.cacheSize), parseClassName: Ne(e2), ...Re(e2) });
  var _e = /\s+/;
  var Ee = (e2, t) => {
    let { parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: s } = t, n = [], a = e2.trim().split(_e), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: m, baseClassName: g, maybePostfixModifierPosition: v } = r(c), w2 = !!v, x = o(w2 ? g.substring(0, v) : g);
      if (!x) {
        if (!w2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (x = o(g), !x) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w2 = false;
      }
      let p = Be(u).join(":"), y = m ? p + "!" : p, S2 = y + x;
      if (n.includes(S2)) continue;
      n.push(S2);
      let T2 = s(x, w2);
      for (let z2 = 0; z2 < T2.length; ++z2) {
        let V2 = T2[z2];
        n.push(y + V2);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Le() {
    let e2 = 0, t, r, o = "";
    for (; e2 < arguments.length; ) (t = arguments[e2++]) && (r = ae(t)) && (o && (o += " "), o += r);
    return o;
  }
  var ae = (e2) => {
    if (typeof e2 == "string") return e2;
    let t, r = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (t = ae(e2[o])) && (r && (r += " "), r += t);
    return r;
  };
  function ne(e2, ...t) {
    let r, o, s, n = a;
    function a(d) {
      let c = t.reduce((u, m) => m(u), e2());
      return r = Ie(c), o = r.cache.get, s = r.cache.set, n = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ee(d, r);
      return s(d, u), u;
    }
    return function() {
      return n(Le.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let t = (r) => r[e2] || [];
    return t.isThemeGetter = true, t;
  };
  var le = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ve = /^\d+\/\d+$/;
  var Ge = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var je = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Oe = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var We = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var He = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var $e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => P(e2) || Ge.has(e2) || Ve.test(e2);
  var R = (e2) => M(e2, "length", Ye);
  var P = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var U = (e2) => M(e2, "number", P);
  var B = (e2) => !!e2 && Number.isInteger(Number(e2));
  var De = (e2) => e2.endsWith("%") && P(e2.slice(0, -1));
  var l = (e2) => le.test(e2);
  var A = (e2) => je.test(e2);
  var Fe = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var Ue = (e2) => M(e2, Fe, ce);
  var Xe = (e2) => M(e2, "position", ce);
  var Ke = /* @__PURE__ */ new Set(["image", "url"]);
  var Ze = (e2) => M(e2, Ke, Qe);
  var qe = (e2) => M(e2, "", Je);
  var I = () => true;
  var M = (e2, t, r) => {
    let o = le.exec(e2);
    return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : false;
  };
  var Ye = (e2) => Oe.test(e2) && !We.test(e2);
  var ce = () => false;
  var Je = (e2) => He.test(e2);
  var Qe = (e2) => $e.test(e2);
  var se = () => {
    let e2 = f("colors"), t = f("spacing"), r = f("blur"), o = f("brightness"), s = f("borderColor"), n = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), m = f("invert"), g = f("gap"), v = f("gradientColorStops"), w2 = f("gradientColorStopPositions"), x = f("inset"), p = f("margin"), y = f("opacity"), S2 = f("padding"), T2 = f("saturate"), z2 = f("scale"), V2 = f("sepia"), K2 = f("skew"), Z2 = f("space"), q2 = f("translate"), H2 = () => ["auto", "contain", "none"], $2 = () => ["auto", "hidden", "clip", "visible", "scroll"], D2 = () => ["auto", l, t], b = () => [l, t], Y2 = () => ["", k, R], G2 = () => ["auto", P, l], J2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j2 = () => ["solid", "dashed", "dotted", "double", "none"], Q2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N2 = () => ["", "0", l], ee2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C2 = () => [P, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [I], spacing: [k, R], blur: ["none", "", A, l], brightness: C2(), borderColor: [e2], borderRadius: ["none", "", "full", A, l], borderSpacing: b(), borderWidth: Y2(), contrast: C2(), grayscale: N2(), hueRotate: C2(), invert: N2(), gap: b(), gradientColorStops: [e2], gradientColorStopPositions: [De, R], inset: D2(), margin: D2(), opacity: C2(), padding: b(), saturate: C2(), scale: C2(), sepia: N2(), skew: C2(), space: b(), translate: b() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [A] }], "break-after": [{ "break-after": ee2() }], "break-before": [{ "break-before": ee2() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J2(), l] }], overflow: [{ overflow: $2() }], "overflow-x": [{ "overflow-x": $2() }], "overflow-y": [{ "overflow-y": $2() }], overscroll: [{ overscroll: H2() }], "overscroll-x": [{ "overscroll-x": H2() }], "overscroll-y": [{ "overscroll-y": H2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [x] }], "inset-x": [{ "inset-x": [x] }], "inset-y": [{ "inset-y": [x] }], start: [{ start: [x] }], end: [{ end: [x] }], top: [{ top: [x] }], right: [{ right: [x] }], bottom: [{ bottom: [x] }], left: [{ left: [x] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", B, l] }], basis: [{ basis: D2() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: N2() }], shrink: [{ shrink: N2() }], order: [{ order: ["first", "last", "none", B, l] }], "grid-cols": [{ "grid-cols": [I] }], "col-start-end": [{ col: ["auto", { span: ["full", B, l] }, l] }], "col-start": [{ "col-start": G2() }], "col-end": [{ "col-end": G2() }], "grid-rows": [{ "grid-rows": [I] }], "row-start-end": [{ row: ["auto", { span: [B, l] }, l] }], "row-start": [{ "row-start": G2() }], "row-end": [{ "row-end": G2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [g] }], "gap-x": [{ "gap-x": [g] }], "gap-y": [{ "gap-y": [g] }], "justify-content": [{ justify: ["normal", ...F()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...F(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...F(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [S2] }], px: [{ px: [S2] }], py: [{ py: [S2] }], ps: [{ ps: [S2] }], pe: [{ pe: [S2] }], pt: [{ pt: [S2] }], pr: [{ pr: [S2] }], pb: [{ pb: [S2] }], pl: [{ pl: [S2] }], m: [{ m: [p] }], mx: [{ mx: [p] }], my: [{ my: [p] }], ms: [{ ms: [p] }], me: [{ me: [p] }], mt: [{ mt: [p] }], mr: [{ mr: [p] }], mb: [{ mb: [p] }], ml: [{ ml: [p] }], "space-x": [{ "space-x": [Z2] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z2] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, t] }], "min-w": [{ "min-w": [l, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, t, "none", "full", "min", "max", "fit", "prose", { screen: [A] }, A] }], h: [{ h: [l, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", A, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", U] }], "font-family": [{ font: [I] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", P, U] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [y] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [y] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...j2(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [y] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J2(), Xe] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", Ue] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Ze] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [w2] }], "gradient-via-pos": [{ via: [w2] }], "gradient-to-pos": [{ to: [w2] }], "gradient-from": [{ from: [v] }], "gradient-via": [{ via: [v] }], "gradient-to": [{ to: [v] }], rounded: [{ rounded: [n] }], "rounded-s": [{ "rounded-s": [n] }], "rounded-e": [{ "rounded-e": [n] }], "rounded-t": [{ "rounded-t": [n] }], "rounded-r": [{ "rounded-r": [n] }], "rounded-b": [{ "rounded-b": [n] }], "rounded-l": [{ "rounded-l": [n] }], "rounded-ss": [{ "rounded-ss": [n] }], "rounded-se": [{ "rounded-se": [n] }], "rounded-ee": [{ "rounded-ee": [n] }], "rounded-es": [{ "rounded-es": [n] }], "rounded-tl": [{ "rounded-tl": [n] }], "rounded-tr": [{ "rounded-tr": [n] }], "rounded-br": [{ "rounded-br": [n] }], "rounded-bl": [{ "rounded-bl": [n] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [y] }], "border-style": [{ border: [...j2(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [y] }], "divide-style": [{ divide: j2() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...j2()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [y] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", A, qe] }], "shadow-color": [{ shadow: [I] }], opacity: [{ opacity: [y] }], "mix-blend": [{ "mix-blend": [...Q2(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": Q2() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", A, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [m] }], saturate: [{ saturate: [T2] }], sepia: [{ sepia: [V2] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [m] }], "backdrop-opacity": [{ "backdrop-opacity": [y] }], "backdrop-saturate": [{ "backdrop-saturate": [T2] }], "backdrop-sepia": [{ "backdrop-sepia": [V2] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: C2() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: C2() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [z2] }], "scale-x": [{ "scale-x": [z2] }], "scale-y": [{ "scale-y": [z2] }], rotate: [{ rotate: [B, l] }], "translate-x": [{ "translate-x": [q2] }], "translate-y": [{ "translate-y": [q2] }], "skew-x": [{ "skew-x": [K2] }], "skew-y": [{ "skew-y": [K2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b() }], "scroll-mx": [{ "scroll-mx": b() }], "scroll-my": [{ "scroll-my": b() }], "scroll-ms": [{ "scroll-ms": b() }], "scroll-me": [{ "scroll-me": b() }], "scroll-mt": [{ "scroll-mt": b() }], "scroll-mr": [{ "scroll-mr": b() }], "scroll-mb": [{ "scroll-mb": b() }], "scroll-ml": [{ "scroll-ml": b() }], "scroll-p": [{ "scroll-p": b() }], "scroll-px": [{ "scroll-px": b() }], "scroll-py": [{ "scroll-py": b() }], "scroll-ps": [{ "scroll-ps": b() }], "scroll-pe": [{ "scroll-pe": b() }], "scroll-pt": [{ "scroll-pt": b() }], "scroll-pr": [{ "scroll-pr": b() }], "scroll-pb": [{ "scroll-pb": b() }], "scroll-pl": [{ "scroll-pl": b() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, U] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var et = (e2, { cacheSize: t, prefix: r, separator: o, experimentalParseClassName: s, extend: n = {}, override: a = {} }) => {
    _(e2, "cacheSize", t), _(e2, "prefix", r), _(e2, "separator", o), _(e2, "experimentalParseClassName", s);
    for (let i in a) tt(e2[i], a[i]);
    for (let i in n) rt(e2[i], n[i]);
    return e2;
  };
  var _ = (e2, t, r) => {
    r !== void 0 && (e2[t] = r);
  };
  var tt = (e2, t) => {
    if (t) for (let r in t) _(e2, r, t[r]);
  };
  var rt = (e2, t) => {
    if (t) for (let r in t) {
      let o = t[r];
      o !== void 0 && (e2[r] = (e2[r] || []).concat(o));
    }
  };
  var de = (e2, ...t) => typeof e2 == "function" ? ne(se, e2, ...t) : ne(() => et(se(), e2), ...t);
  var ue =
