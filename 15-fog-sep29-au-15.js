, f2 = l2 - e2, c = u - a, i = f2 * f2 + c * c;
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
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b2.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b2) {
    let siblings = a.length === b2.length && a.slice(0, -1).every((n, i) => n === b2[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b2[b2.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
     