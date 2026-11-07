 { size4xl: "2.1125rem", size3xl: "1.75625rem", size2xl: "1.40625rem", sizeXl: "1.175rem", sizeLg: "1.078125rem", sizeBody: "0.9375rem", sizeSm: "0.8125rem", sizeXs: "0.6875rem", sizeMono: "0.875rem" };
  var pe = { leading4xl: "2.625rem", leading3xl: "2.5rem", leading2xl: "2.25rem", leadingXl: "2rem", leadingLg: "1.75rem", leadingBody: "1.5rem", leadingSm: "1.125rem", leadingXs: "1rem", leadingMono: "1.5rem" };
  var ot = de({ extend: { classGroups: { "font-size": [{ text: Object.keys(ue) }], leading: [{ leading: Object.keys(pe) }] } } });
  function E(...e2) {
    return ot(O(e2));
  }
  function fe(e2, t) {
    if (typeof e2 == "function") return e2(t);
    e2 != null && (e2.current = t);
  }
  function be(...e2) {
    return (t) => {
      let r = false, o = e2.map((s) => {
        let n = fe(s, t);
        return !r && typeof n == "function" && (r = true), n;
      });
      if (r) return () => {
        for (let s = 0; s < o.length; s++) {
          let n = o[s];
          typeof n == "function" ? n() : fe(e2[s], null);
        }
      };
    };
  }
  var st = /* @__PURE__ */ Symbol.for("react.lazy");
  var W = h[" use ".trim().toString()];
  function it(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ge(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === st && "_payload" in e2 && it(e2._payload);
  }
  function at(e2) {
    let t = lt(e2), r = h.forwardRef((o, s) => {
      let { children: n, ...a } = o;
      ge(n) && typeof W == "function" && (n = W(n._payload));
      let i = h.Children.toArray(n), d = i.find(dt);
      if (d) {
        let c = d.props.children, u = i.map((m) => m === d ? h.Children.count(c) > 1 ? h.Children.only(null) : h.isValidElement(c) ? c.props.children : null : m);
        return (0, import_jsx_runtime.jsx)(t, { ...a, ref: s, children: h.isValidElement(c) ? h.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(t, { ...a, ref: s, children: n });
    });
    return r.displayName = `${e2}.Slot`, r;
  }
  var L = at("Slot");
  function lt(e2) {
    let t = h.forwardRef((r, o) => {
      let { children: s, ...n } = r;
      if (ge(s) && typeof W == "function" && (s = W(s._payload)), h.isValidElement(s)) {
        let a = pt(s), i = ut(n, s.props);
        return s.type !== h.Fragment && (i.ref = o ? be(o, a) : a), h.cloneElement(s, i);
      }
      return h.Children.count(s) > 1 ? h.Children.only(null) : null;
    });
    return t.displayName = `${e2}.SlotClone`, t;
  }
  var ct = /* @__PURE__ */ Symbol("radix.slottable");
  function dt(e2) {
    return h.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === ct;
  }
  function ut(e2, t) {
    let r = { ...t };
    for (let o in t) {
      let s = e2[o], n = t[o];
      /^on[A-Z]/.test(o) ? s && n ? r[o] = (...i) => {
        let d = n(...i);
        return s(...i), d;
      } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...n } : o === "className" && (r[o] = [s, n].filter(Boolean).join(" "));
    }
    return { ...e2, ...r };
  }
  function pt(e2) {
    let t = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e2.ref : (t = Object.getOwnPropertyDescriptor(e2, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var xe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var he = O;
  var ye = (e2, t) => (r) => {
    var o;
    if (t?.variants == null) return he(e2, r?.class, r?.className);
    let { variants: s, defaultVariants: n } = t, a = Object.keys(s).map((c) => {
      let u = r?.[c], m = n?.[c];
      if (u === null) return null;
      let g = xe(u) || xe(m);
      return s[c][g];
    }), i = r && Object.entries(r).reduce((c, u) => {
      let [m, g] = u;
      return g === void 0 || (c[m] = g), c;
    }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: m, className: g, ...v } = u;
      return Object.entries(v).every((w2) => {
        let [x, p] = w2;
        return Array.isArray(p) ? p.includes({ ...n, ...i }[x]) : { ...n, ...i }[x] === p;
      }) ? [...c, m, g] : c;
    }, []);
    return he(e2, a, d, r?.class, r?.className);
  };
  var bt = ye("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ve = (0, import_react.forwardRef)(({ className: e2, variant: t, size: r, asChild: o = false, ...s }, n) => (0, import_jsx_runtime2.jsx)(o ? L : "button", { className: E(bt({ variant: t, size: r, className: e2 })), ref: n, ...s }));
  ve.displayName = "Button";
  var gt = { primary: "border-ds-ink bg-ds-ink text-ds-page shadow-ds-control", secondary: "border-ds-hairline bg-ds-white text-ds-ink shadow-ds-control", ghost: "border-transparent bg-transparent text-ds-ink", destructive: "border-ds-redBorder bg-ds-white text-ds-red shadow-ds-control", success: "border-ds-teal bg-ds-white text-ds-teal shadow-ds-control" };
  function xt({ variant: e2 = "primary", compact: t = false, fullWidth: r = false, large: o = false, mobileLarge: s = false, className: n }) {
    return E("box-border inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border font-text text-[13px] font-normal leading-none tracking-[-0.01em] transition-[background-color,border-color,color,transform] [transition-duration:120ms]", "hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4", "disabled:cursor-default disabled:scale-100 disabled:border-ds-hairline disabled:bg-transparent disabled:text-ds-ink4 disabled:shadow-none", t ? "px-3" : "px-3 md:px-4", r && "flex w-full hover:scale-[1.02]", o && "h-[52px] rounded-lg text-[15px]", s && "max-md:flex max-md:h-[52px] max-md:w-full max-md:rounded-lg max-md:text-[15px] max-md:hover:scale-[1.02]", gt[e2], n);
  }
  var Se = (0, import_react2.forwardRef)(({ variant: e2, compact: t, fullWidth: r, large: o, mobileLarge: s, className: n, asChild: a = false, iconBefore: i, iconAfter: d, type: c = "button", children: u, ...m }, g) => {
    let v = xt({ variant: e2, compact: t, fullWidth: r, large: o, mobileLarge: s, className: n });
    return a ? (0, import_jsx_runtime3.jsx)(L, { ref: g, className: v, ...m, children: u }) : (0, import_jsx_runtime3.jsxs)("button", { ref: g, type: c, className: v, ...m, children: [i, u, d] });
  });
  Se.displayName = "DsButton";
  var Ce = (0, import_react2.forwardRef)(({ label: e2, className: t, asChild: r = false, type: o = "button", ...s }, n) => (0, import_jsx_runtime3.jsx)(r ? L : "button", { ref: n, type: r ? void 0 : o, "aria-label": e2, title: e2, className: E("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded border-0 bg-transparent p-2 leading-none text-ds-ink transition-colors [transition-duration:120ms] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", t), ...s }));
  Ce.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_react20 = __toESM(require_react(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var import_react21 = __toESM(require_react(), 1);
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var import_react22 = __toESM(require_react(), 1);
  var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
  var xu = Object.create;
  var pr = Object.defineProperty;
  var gu = Object.getOwnPropertyDescriptor;
  var Lu = Object.getOwnPropertyNames;
  var Iu = Object.getPrototypeOf;
  var Cu = Object.prototype.hasOwnProperty;
  var Su = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var bu = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let l2 of Lu(a)) !Cu.call(e2, l2) && l2 !== t && pr(e2, l2, { get: () => a[l2], enumerable: !(o = gu(a, l2)) || o.enumerable });
    return e2;
  };
  var mr = (e2, a, t) => (t = e2 != null ? xu(Iu(e2)) : {}, bu(a || !e2 || !e2.__esModule ? pr(t, "default", { value: e2, enumerable: true }) : t, e2));
  var Xo = Su((ch, Ct) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function a() {
        for (var l2 = "", r = 0; r < arguments.length; r++) {
          var u = arguments[r];
          u && (l2 = o(l2, t(u)));
        }
        return l2;
      }
      function t(l2) {
        if (typeof l2 == "string" || typeof l2 == "number") return l2;
        if (typeof l2 != "object") return "";
        if (Array.isArray(l2)) return a.apply(null, l2);
        if (l2.toString !== Object.prototype.toString && !l2.toString.toString().includes("[native code]")) return l2.toString();
        var r = "";
        for (var u in l2) e2.call(l2, u) && l2[u] && (r = o(r, u));
        return r;
      }
      function o(l2, r) {
        return r ? l2 ? l2 + " " + r : l2 + r : l2;
      }
      typeof Ct < "u" && Ct.exports ? (a.default = a, Ct.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  var X2 = (e2) => e2;
  var $ = (e2) => e2.toLocaleLowerCase();
  var Oa = { myPick: "My pick", recommended: "Recommended", rangeLegend: "low \xB7 now \xB7 high", noPhoto: "No photo supplied", noData: "No data to display.", noMatches: "No matching items.", chartData: "View chart data", observation: "Observation", observationNumber: (e2) => `Observation ${e2}`, value: "Value", noObservation: "No observation", attribute: "Attribute", price: "Price", was: ", was ", close: "Close", previousPhoto: "Previous photo", nextPhoto: "Next photo", photoCount: (e2, a) => `${e2} of ${a}`, photosOf: (e2) => `Photos of ${e2}`, fullScreen: (e2) => `${e2}, full screen`, view: (e2) => `View ${e2}`, viewAt: (e2) => `View at ${e2}`, buy: "Let\u2019s buy this", buyShort: "Buy this", sending: "Sending\u2026", sentToInstinct: "Sent to Instinct", sent: "Sent", soldOut: "Sold out", retry: "Retry", copy: "Copy", copied: "Copied", copyFailed: "Copy blocked", choose: (e2) => `Choose ${/^[aeiou]/i.test(e2) ? "an" : "a"} ${$(e2)}`, chooseToCheckStock: (e2) => `${Oa.choose(e2)} to check stock`, soldOutIn: (e2) => `Sold out in ${e2}`, onlyLeftIn: (e2, a) => `Only ${e2} left in ${a}`, inStockIn: (e2) => `In stock in ${e2}`, inStock: (e2) => `${e2} in stock`, valuesSoldOut: (e2) => `${e2.join(", ")} sold out`, valueSoldOut: (e2, a) => `${e2}, sold out${a ? ` in ${a}` : ""}`, plural: (e2) => /(s|sh|ch|x|z)$/i.test(e2) ? `${e2}es` : /[^aeiou]y$/i.test(e2) ? `${e2.slice(0, -1)}ies` : `${e2}s`, optionIn: (e2, a) => `${e2} in ${a}`, andMore: (e2) => ` and ${e2} more`, loadingState: "Loading saved state\u2026", savingState: "Saving\u2026", savedState: "Saved on this device", unsavedState: "Not saved. Changes last only while this File is open.", wakeAccepted: "Sent to your agent", wakeWait: (e2) => `Please wait ${e2} seconds, then retry.`, wakeRetryNow: "You can retry now.", wakeUnconfirmed: "Delivery not confirmed. Retry to check without sending twice.", wakeForbidden: "Sign in as the File owner to send this to your agent.", wakeCanceled: "This request was canceled. You can send a new request.", wakeFailed: "This request could not be sent.", wakeUnavailable: "Agent actions are unavailable here." };
  var wu = { myPick: "Mi elecci\xF3n", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE1x.", noPhoto: "Sin foto", noData: "No hay datos que mostrar.", noMatches: "No hay resultados.", chartData: "Ver los datos del gr\xE1fico", observation: "Observaci\xF3n", observationNumber: (e2) => `Observaci\xF3n ${e2}`, value: "Valor", noObservation: "Sin observaci\xF3n", attribute: "Atributo", price: "Precio", was: ", antes ", close: "Cerrar", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente", photoCount: (e2, a) => `${e2} de ${a}`, photosOf: (e2) => `Fotos de ${e2}`, fullScreen: (e2) => `${e2}, pantalla completa`, view: (e2) => `Ver ${e2}`, viewAt: (e2) => `Ver en ${e2}`, buy: "Vamos a comprarlo", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado a Instinct", sent: "Enviado", soldOut: "Agotado", retry: "Reintentar", copy: "Copiar", copied: "Copiado", copyFailed: "No se pudo copiar", choose: (e2) => `Elige ${$(e2)}`, chooseToCheckStock: (e2) => `Elige ${$(e2)} para ver la disponibilidad`, soldOutIn: (e2) => `Agotado en ${e2}`, onlyLeftIn: (e2, a) => `Solo quedan ${e2} en ${a}`, inStockIn: (e2) => `Disponible en ${e2}`, inStock: (e2) => `${e2} disponible`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "agotados" : "agotado"}`, valueSoldOut: (e2, a) => `${e2}, agotado${a ? ` en ${a}` : ""}`, plural: X2, optionIn: (e2, a) => `${e2} en ${a}`, andMore: (e2) => ` y ${e2} m\xE1s`, loadingState: "Cargando lo guardado\u2026", savingState: "Guardando\u2026", savedState: "Guardado en este dispositivo", unsavedState: "Sin guardar. Los cambios duran solo mientras este File est\xE9 abierto.", wakeAccepted: "Enviado a tu agente", wakeWait: (e2) => `Espera ${e2} segundos y vuelve a intentarlo.`, wakeRetryNow: "Ya puedes reintentarlo.", wakeUnconfirmed: "Entrega sin confirmar. Reintenta para comprobarlo sin enviarlo dos veces.", wakeForbidden: "Inicia sesi\xF3n como due\xF1o del File para envi\xE1rselo a tu agente.", wakeCanceled: "Se cancel\xF3 esta solicitud. Puedes enviar una nueva.", wakeFailed: "No se pudo enviar esta solicitud.", wakeUnavailable: "Las acciones del agente no est\xE1n disponibles aqu\xED." };
  var ku = { myPick: "Mon choix", recommended: "Recommand\xE9", rangeLegend: "min \xB7 actuel \xB7 max", noPhoto: "Pas de photo", noData: "Aucune donn\xE9e \xE0 afficher.", noMatches: "Aucun r\xE9sultat.", chartData: "Voir les donn\xE9es du graphique", observation: "Observation", observationNumber: (e2) => `Observation ${e2}`, value: "Valeur", noObservation: "Aucune observation", attribute: "Attribut", price: "Prix", was: ", au lieu de ", close: "Fermer", previousPhoto: "Photo pr\xE9c\xE9dente", nextPhoto: "Photo suivante", photoCount: (e2, a) => `${e2} sur ${a}`, photosOf: (e2) => `Photos de ${e2}`, fullScreen: (e2) => `${e2}, plein \xE9cran`, view: (e2) => `Voir ${e2}`, viewAt: (e2) => `Voir chez ${e2}`, buy: "On l\u2019ach\xE8te", buyShort: "Acheter", sending: "Envoi\u2026", sentToInstinct: "Envoy\xE9 \xE0 Instinct", sent: "Envoy\xE9", soldOut: "\xC9puis\xE9", retry: "R\xE9essayer", copy: "Copier", copied: "Copi\xE9", copyFailed: "Copie impossible", choose: (e2) => `${e2} \xE0 choisir`, chooseToCheckStock: (e2) => `Choisissez ${$(e2)} pour voir le stock`, soldOutIn: (e2) => `\xC9puis\xE9 en ${e2}`, onlyLeftIn: (e2, a) => `Plus que ${e2} en ${a}`, inStockIn: (e2) => `En stock en ${e2}`, inStock: (e2) => `${e2} en stock`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "\xE9puis\xE9s" : "\xE9puis\xE9"}`, valueSoldOut: (e2, a) => `${e2}, \xE9puis\xE9${a ? ` en ${a}` : ""}`, plural: X2, optionIn: (e2, a) => `${e2} en ${a}`, andMore: (e2) => ` et ${e2} de plus`, loadingState: "Chargement de l\u2019\xE9tat enregistr\xE9\u2026", savingState: "Enregistrement\u2026", savedState: "Enregistr\xE9 sur cet appareil", unsavedState: "Non enregistr\xE9. Les modifications durent tant que ce File reste ouvert.", wakeAccepted: "Envoy\xE9 \xE0 votre agent", wakeWait: (e2) => `Attendez ${e2} secondes, puis r\xE9essayez.`, wakeRetryNow: "Vous pouvez r\xE9essayer.", wakeUnconfirmed: "Envoi non confirm\xE9. R\xE9essayez pour v\xE9rifier sans envoyer deux fois.", wakeForbidden: "Connectez-vous en tant que propri\xE9taire du File pour l\u2019envoyer \xE0 votre agent.", wakeCanceled: "Cette demande a \xE9t\xE9 annul\xE9e. Vous pouvez en envoyer une nouvelle.", wakeFailed: "Cette demande n\u2019a pas pu \xEAtre envoy\xE9e.", wakeUnavailable: "Les actions de l\u2019agent ne sont pas disponibles ici." };
  var vu = { myPick: "Meine Wahl", recommended: "Empfohlen", rangeLegend: "min. \xB7 aktuell \xB7 max.", noPhoto: "Kein Foto", noData: "Keine Daten vorhanden.", noMatches: "Keine Treffer.", chartData: "Diagrammdaten anzeigen", observation: "Messpunkt", observationNumber: (e2) => `Messpunkt ${e2}`, value: "Wert", noObservation: "Kein Messwert", attribute: "Merkmal", price: "Preis", was: ", vorher ", close: "Schlie\xDFen", previousPhoto: "Vorheriges Foto", nextPhoto: "N\xE4chstes Foto", photoCount: (e2, a) => `${e2} von ${a}`, photosOf: (e2) => `Fotos von ${e2}`, fullScreen: (e2) => `${e2}, Vollbild`, view: (e2) => `${e2} ansehen`, viewAt: (e2) => `Bei ${e2} ansehen`, buy: "Lass es uns kaufen", buyShort: "Kaufen", sending: "Wird gesendet\u2026", sentToInstinct: "An Instinct gesendet", sent: "Gesendet", soldOut: "Ausverkauft", retry: "Erneut versuchen", copy: "Kopieren", copied: "Kopiert", copyFailed: "Kopieren blockiert", choose: (e2) => `${e2} w\xE4hlen`, chooseToCheckStock: (e2) => `${e2} w\xE4hlen, um den Bestand zu sehen`, soldOutIn: (e2) => `Ausverkauft in ${e2}`, onlyLeftIn: (e2, a) => `Nur noch ${e2} in ${a}`, inStockIn: (e2) => `Verf\xFCgbar in ${e2}`, inStock: (e2) => `${e2} verf\xFCgbar`, valuesSoldOut: (e2) => `${e2.join(", ")} ausverkauft`, valueSoldOut: (e2, a) => `${e2}, ausverkauft${a ? ` in ${a}` : ""}`, plural: X2, optionIn: (e2, a) => `${e2} in ${a}`, andMore: (e2) => ` und ${e2} weitere`, loadingState: "Gespeicherter Stand wird geladen\u2026", savingState: "Wird gespeichert\u2026", savedState: "Auf diesem Ger\xE4t gespeichert", unsavedState: "Nicht gespeichert. \xC4nderungen bleiben nur, solange dieses File offen ist.", wakeAccepted: "An deinen Agenten gesendet", wakeWait: (e2) => `Bitte warte ${e2} Sekunden und versuche es dann erneut.`, wakeRetryNow: "Du kannst es jetzt erneut versuchen.", wakeUnconfirmed: "Zustellung nicht best\xE4tigt. Versuche es erneut, um ohne doppeltes Senden nachzusehen.", wakeForbidden: "Melde dich als Besitzer dieses Files an, um es an deinen Agenten zu senden.", wakeCanceled: "Diese Anfrage wurde abgebrochen. Du kannst eine neue senden.", wakeFailed: "Diese Anfrage konnte nicht gesendet werden.", wakeUnavailable: "Agentenaktionen sind hier nicht verf\xFCgbar." };
  var Pu = { myPick: "La mia scelta", recommended: "Consigliato", rangeLegend: "min \xB7 attuale \xB7 max", noPhoto: "Nessuna foto", noData: "Nessun dato da mostrare.", noMatches: "Nessun risultato.", chartData: "Vedi i dati del grafico", observation: "Osservazione", observationNumber: (e2) => `Osservazione ${e2}`, value: "Valore", noObservation: "Nessuna osservazione", attribute: "Attributo", price: "Prezzo", was: ", prima ", close: "Chiudi", previousPhoto: "Foto precedente", nextPhoto: "Foto successiva", photoCount: (e2, a) => `${e2} di ${a}`, photosOf: (e2) => `Foto di ${e2}`, fullScreen: (e2) => `${e2}, schermo intero`, view: (e2) => `Vedi ${e2}`, viewAt: (e2) => `Vedi su ${e2}`, buy: "Compriamolo", buyShort: "Compra", sending: "Invio\u2026", sentToInstinct: "Inviato a Instinct", sent: "Inviato", soldOut: "Esaurito", retry: "Riprova", copy: "Copia", copied: "Copiato", copyFailed: "Copia bloccata", choose: (e2) => `Scegli ${$(e2)}`, chooseToCheckStock: (e2) => `Scegli ${$(e2)} per vedere la disponibilit\xE0`, soldOutIn: (e2) => `Esaurito in ${e2}`, onlyLeftIn: (e2, a) => `Solo ${e2} rimasti in ${a}`, inStockIn: (e2) => `Disponibile in ${e2}`, inStock: (e2) => `${e2} disponibile`, valuesSoldOut: (e2) => `${e2.join(", ")} ${e2.length > 1 ? "esauriti" : "esaurito"}`, valueSoldOut: (e2, a) => `${e2}, esaurito${a ? ` in ${a}` : ""}`, plural: X2, optionIn: (e2, a) => `${e2} in ${a}`, andMore: (e2) => ` e altri ${e2}`, loadingState: "Caricamento dello stato salvato\u2026", savingState: "Salvataggio\u2026", savedState: "Salvato su questo dispositivo", unsavedState: "Non salvato. Le modifiche durano solo finch\xE9 questo File resta aperto.", wakeAccepted: "Inviato al tuo agente", wakeWait: (e2) => `Aspetta ${e2} secondi, poi riprova.`, wakeRetryNow: "Ora puoi riprovare.", wakeUnconfirmed: "Consegna non confermata. Riprova per controllare senza inviare due volte.", wakeForbidden: "Accedi come proprietario del File per inviarlo al tuo agente.", wakeCanceled: "Questa richiesta \xE8 stata annullata. Puoi inviarne una nuova.", wakeFailed: "Non \xE8 stato possibile inviare questa richiesta.", wakeUnavailable: "Le azioni dell\u2019agente non sono disponibili qui." };
  var Mu = { myPick: "Minha escolha", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 atual \xB7 m\xE1x.", noPhoto: "Sem foto", noData: "N\xE3o h\xE1 dados para mostrar.", noMatches: "Nenhum resultado.", chartData: "Ver os dados do gr\xE1fico", observation: "Observa\xE7\xE3o", observationNumber: (e2) => `Observa\xE7\xE3o ${e2}`, value: "Valor", noObservation: "Sem observa\xE7\xE3o", attribute: "Atributo", price: "Pre\xE7o", was: ", antes ", close:
