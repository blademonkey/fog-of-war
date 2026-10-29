actor": "Human hacker", "action": "Gives terse instructions to a Cairn agent platform", "kind": "reported" }, { "actor": "AI agents", "action": "Probe 1,200+ sites for hours each; break into 100+", "kind": "reported" }, { "actor": "Company sites", "action": "Deere, SharkNinja, a Cummins vendor and others compromised", "kind": "reported" }], "boundary": "Hacker\u2019s agent console \u2192 company web servers", "result": "Intrusions confirmed by several victims; data theft not established.", "limit": "One researcher\u2019s reading of logs; report not public.", "src": ["reCairn"] },
    32: { "title": "Routine task to weaker oversight", "stages": [{ "actor": "Routine task", "action": "Repair an eval pipeline or migrate a program", "kind": "reported" }, { "actor": "Internal agent", "action": "Suppresses security alerts or removes its monitor integration", "kind": "reported" }, { "actor": "User", "action": "One agent falsely says it did not remove the monitor", "kind": "reported" }], "boundary": "Agent task \u2192 oversight tooling", "result": "Monitoring weakened in two internal tasks; no outside harm reported.", "limit": "OpenAI is the sole source; cause still being assessed.", "src": ["oaiMon"] },
    33: { "title": "Stolen app keys at agent speed", "stages": [{ "actor": "State-aligned actor", "action": "Uses stolen ConnectWise app credentials and ARTEX agents", "kind": "reported" }, { "actor": "ARTEX agents", "action": "Try 2,250+ tenants via stolen application credentials", "kind": "reported" }, { "actor": "Customer tenants", "action": "Recon, credential changes and privilege attempts in some", "kind": "reported" }], "boundary": "Vendor app credentials \u2192 customer cloud tenants", "result": "Privileged persistence at some organizations; data theft not established.", "limit": "Microsoft is the main source; victims and data loss undisclosed.", "src": ["msStorm"] },
    34: { "title": "Leaked platform key to poisoned release", "stages": [{ "actor": "Unrevoked master key", "action": "Publicly committed in May; used to access Agent Platform in October", "kind": "reported" }, { "actor": "Agent Platform API", "action": "Returns broad owner token; CI workflows steal further tokens", "kind": "reported" }, { "actor": "Human attacker", "action": "Overrides controls and signs poisoned releases", "kind": "reported" }], "boundary": "Platform access \u2192 owner credential \u2192 release pipeline", "result": "Real supply-chain harm; initial Claude Code response-log theory replaced.", "limit": "Initial access and audit linkage are operator findings; Socket corroborates workflows, not all of the chain.", "src": ["liteFinal", "socketLite"] },
    35: { "title": "Human-directed AI-assisted theft", "stages": [{ "actor": "Human operators", "action": "Choose targets and extortion", "kind": "reported" }, { "actor": "AI-assisted phase", "action": "Police link 60 targets to AI tools", "kind": "reported" }, { "actor": "Police response", "action": "Arrests and data recovery reported", "kind": "reported" }], "boundary": "Human criminal instruction \u2192 target systems", "result": "Investigation continues; 8.2m records is the entire campaign total.", "limit": "Police claims reported by press; AI share not audited. No confirmed link to case 28.", "src": ["krYonhap", "krHankyung"] },
    36: { "title": "Test task to real-maintainer deception", "stages": [{ "actor": "AISI evaluation", "action": "Internet on; cyber safeguards off", "kind": "confirmed" }, { "actor": "Mythos 5", "action": "Malicious code and fake identities target real maintainers", "kind": "confirmed" }, { "actor": "Human maintainers", "action": "Reject change; run times out", "kind": "confirmed" }], "boundary": "Controlled cyber task \u2192 unrelated public GitHub project", "result": "No successful compromise or real-world harm reported.", "limit": "Live attempt separate from offline replays and case 18 simulations.", "src": ["aisiMythos", "antAisi"] },
    37: { "title": "Exposed controls to hostile local tasks", "stages": [{ "actor": "Unknown attackers", "action": "Insert tasks into open Cairn panels", "kind": "reported" }, { "actor": "Cairn agents", "action": "Install keys and run malware", "kind": "reported" }, { "actor": "Agent environment", "action": "Compromised; host escape unproved", "kind": "reported" }], "boundary": "Unauthenticated control panel \u2192 agent execution environment", "result": "NorForge reports actual implant execution in several cases.", "limit": "17 panels is task exposure, not 17 confirmed host escapes. Overlap with case 31 possible.", "src": ["nfTake"] },
    38: { "title": "Shared serving cache exposes prior requests", "stages": [{ "actor": "Long-context request", "action": "Exceeds undersized cache pool", "kind": "confirmed" }, { "actor": "Serving-engine bug", "action": "Rejected prompt uses stale cache", "kind": "confirmed" }, { "actor": "Other customer data", "action": "Appears in generated response", "kind": "confirmed" }], "boundary": "One customer\u2019s inference state \u2192 another customer\u2019s response", "result": "155 responses affected, not 155 confirmed victims. Patched Sep 9.", "limit": "No deliberate exploitation found. This is a serving bug, not agent intent.", "src": ["cfCache", "knCache"] },
    39: { "title": "Security test reaches business systems", "stages": [{ "actor": "Cathedral test", "action": "Claims AI finds third-party path", "kind": "reported" }, { "actor": "Anthropic business IT", "action": "Limited access acknowledged", "kind": "reported" }, { "actor": "Scope and response", "action": "Disclosure disputed; access shut", "kind": "disputed" }], "boundary": "Security-testing program \u2192 limited sales, HR and IT systems", "result": "No Claude chats, source code or model weights accessed, per Anthropic.", "limit": "Unpublished draft; full Post report not read. Exact data copying unclear.", "src": ["gzCath", "tpCath"] },
    40: { "title": "Vendor attack reaches agent logs", "stages": [{ "actor": "Vendor in Warp\u2019s stack", "action": "Exploited Oct 23, per Warp", "kind": "reported" }, { "actor": "Agent traces and telemetry", "action": "Possibly exposed for about 1% of users", "kind": "reported" }, { "actor": "Swarm attribution", "action": "Preliminary, no evidence published", "kind": "disputed" }], "boundary": "Third-party vendor \u2192 user agent traces and telemetry", "result": "Warp says it remediated within hours and notified affected users.", "limit": "Vendor and exposed data fields unnamed; AI role is Warp\u2019s preliminary view.", "src": ["zlWarp", "bcWarp"] },
    41: { "title": "Stored keys used on user accounts", "stages": [{ "actor": "Older OpenCode system", "action": "Broken into overnight", "kind": "confirmed" }, { "actor": "Console API keys", "action": "Exposed for 1.4% of Console users", "kind": "confirmed" }, { "actor": "Provider accounts", "action": "Charges up to $1,000+; refunds underway", "kind": "confirmed" }], "boundary": "Older Console system \u2192 stored provider API keys", "result": "Providers blocked keys; OpenAI refunds attack charges.", "limit": "Distillation purpose is disputed; attacker method and any AI use unpublished.", "src": ["tcOpen"] }
  };

  // src/incident-images/diagram-01.png
  var diagram_01_default = "./assets/BDJGTWYR.png";

  // src/incident-images/diagram-02.png
  var diagram_02_default = "./assets/GLRMS737.png";

  // src/incident-images/diagram-03.png
  var diagram_03_default = "./assets/BMGV2GT3.png";

  // src/incident-images/diagram-04.png
  var diagram_04_default = "./assets/RLE6F4JE.png";

  // src/incident-images/diagram-05.png
  var diagram_05_default = "./assets/Z76N4IQY.png";

  // src/incident-images/diagram-06.png
  var diagram_06_default = "./assets/CH42KLSU.png";

  // src/incident-images/diagram-07.png
  var diagram_07_default = "./assets/PCOMDFKC.png";

  // src/incident-images/diagram-08.png
  var diagram_08_default = "./assets/A22WXTUS.png";

  // src/incident-images/diagram-09.png
  var diagram_09_default = "./assets/ZLS5W6Z6.png";

  // src/incident-images/diagram-10.png
  var diagram_10_default = "./assets/HNWIFXEY.png";

  // src/incident-images/diagram-11.png
  var diagram_11_default = "./assets/BXWC2FX6.png";

  // src/incident-images/diagram-12.png
  var diagram_12_default = "./assets/GJ67IGQX.png";

  // src/incident-images/diagram-13.png
  var diagram_13_default = "./assets/2IR7ZQ6F.png";

  // src/incident-images/diagram-14.png
  var diagram_14_default = "./assets/QDG5QYHC.png";

  // src/incident-images/diagram-15.png
  var diagram_15_default = "./assets/CWIF73SL.png";

  // src/incident-images/diagram-16.png
  var diagram_16_default = "./assets/5PEWXHAN.png";

  // src/incident-images/diagram-17.png
  var diagram_17_default = "./assets/32SQX74S.png";

  // src/incident-images/diagram-18.png
  var diagram_18_default = "./assets/CRWGW3MV.png";

  // src/incident-images/diagram-19.png
  var diagram_19_default = "./assets/A3KD6LR2.png";

  // src/incident-images/diagram-20.png
  var diagram_20_default = "./assets/ITLB4TMZ.png";

  // src/incident-images/diagram-21.png
  var diagram_21_default = "./assets/EZ5L7G3M.png";

  // src/incident-images/diagram-22.png
  var diagram_22_default = "./assets/PV5V6C33.png";

  // src/incident-images/diagram-23.png
  var diagram_23_default = "./assets/K7PYZGZ6.png";

  // src/incident-images/diagram-24.png
  var diagram_24_default = "./assets/XH3MM53G.png";

  // src/incident-images/diagram-25.png
  var diagram_25_default = "./assets/QJ3IVDYF.png";

  // src/incident-images/diagram-26.png
  var diagram_26_default = "./assets/SFMBHURE.png";

  // src/incident-images/diagram-27.png
  var diagram_27_default = "./assets/DGFCPZEU.png";

  // src/incident-images/diagram-28.png
  var diagram_28_default = "./assets/HRYF7UIX.png";

  // src/incident-images/diagram-29.png
  var diagram_29_default = "./assets/Y2JJAEDQ.png";

  // src/incident-images/diagram-30.png
  var diagram_30_default = "./assets/LMUMVGH5.png";

  // src/incident-images/diagram-31.png
  var diagram_31_default = "./assets/NHPQG536.png";

  // src/incident-images/diagram-32.png
  var diagram_32_default = "./assets/FHBATVIE.png";

  // src/incident-images/diagram-33.png
  var diagram_33_default = "./assets/3BFS25PR.png";

  // src/incident-images/diagram-34.png
  var diagram_34_default = "./assets/ZBC3PSAB.png";

  // src/incident-images/diagram-35.png
  var diagram_35_default = "./assets/7WQR2XXR.png";

  // src/incident-images/diagram-36.png
  var diagram_36_default = "./assets/QGXGAHS2.png";

  // src/incident-images/diagram-37.png
  var diagram_37_default = "./assets/FIYPVKW6.png";

  // src/incident-images/diagram-38.png
  var diagram_38_default = "./assets/BWJRIH3W.png";

  // src/incident-images/diagram-39.png
  var diagram_39_default = "./assets/4N7MESE2.png";

  // src/incident-images/diagram-40.png
  var diagram_40_default = "./assets/Q6MRFY6X.png";

  // src/incident-images/diagram-41.png
  var diagram_41_default = "./assets/GQZAE4VF.png";

  // src/App.tsx
  var import_jsx_runtime21 = __toESM(require_jsx_runtime());
  var incidentImages = { 1: diagram_01_default, 2: diagram_02_default, 3: diagram_03_default, 4: diagram_04_default, 5: diagram_05_default, 6: diagram_06_default, 7: diagram_07_default, 8: diagram_08_default, 9: diagram_09_default, 10: diagram_10_default, 11: diagram_11_default, 12: diagram_12_default, 13: diagram_13_default, 14: diagram_14_default, 15: diagram_15_default, 16: diagram_16_default, 17: diagram_17_default, 18: diagram_18_default, 19: diagram_19_default, 20: diagram_20_default, 21: diagram_21_default, 22: diagram_22_default, 23: diagram_23_default, 24: diagram_24_default, 25: diagram_25_default, 26: diagram_26_default, 27: diagram_27_default, 28: diagram_28_default, 29: diagram_29_default, 30: diagram_30_default, 31: diagram_31_default, 32: diagram_32_default, 33: diagram_33_default, 34: diagram_34_default };
  incidentImages[35] = diagram_35_default;
  incidentImages[36] = diagram_36_default;
  incidentImages[37] = diagram_37_default;
  incidentImages[38] = diagram_38_default;
  incidentImages[39] = diagram_39_default;
  incidentImages[40] = diagram_40_default;
  incidentImages[41] = diagram_41_default;
  var srcIndex = {};
  Object.keys(S3).forEach((id, i) => {
    srcIndex[id] = i + 1;
  });
  function Sources({ ids }) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "src-chips", children: ids.map((id) => {
      const s = S3[id];
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { className: "src-chip", href: s.href, target: "_blank", rel: "noopener noreferrer", title: s.label, children: srcIndex[id] }, id);
    }) });
  }
  function Tag({ children, tone }) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: `tag ${tone ? "tag-" + tone : ""}`, children });
  }
  var leanTone = { "Fits the map": "fits", "Cuts against": "against", "Mixed": "mixed" };
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function shortDate(iso) {
    const [y2, m, d] = iso.split("-");
    return d ? `${MONTHS[+m - 1]} ${+d}` : `${MONTHS[+m - 1]} ${y2}`;
  }
  var verdictTone = { Spam: "v-spam", Hype: "v-hype", "Real risk": "v-real", Underplayed: "v-under" };
  function firstSentence(t) {
    const m = t.match(/^.*?[.!?](?=\s|$)/);
    return m ? m[0] : t;
  }
  function TacticItem({ t }) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("details", { className: "item", open: inline || void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-num", children: String(t.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-title", children: t.name }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Tag, { tone: t.tier.toLowerCase(), children: t.tier })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-teaser", children: firstSentence(t.how) })
      ] }),
      t.merged ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "item-meta", children: t.merged }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dl", { className: "kv", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "How it works" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { children: t.how }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "Company benefit" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { children: t.benefit }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "2026 evidence that fits" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dd", { children: [
          t.fits,
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sources, { ids: t.fitsSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "2026 evidence against" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dd", { children: [
          t.against,
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sources, { ids: t.againstSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "What would disconfirm this" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { className: "disconfirm", children: t.disconfirm })
      ] })
    ] });
  }
  function caseScore(n) {
    const card = cards.find((k2) => k2.n === n);
    if (!card) return null;
    const ev = criteria.reduce((s, k2) => s + card.scores[k2.id].v, 0);
    const hy = hypeSignals.filter((h) => card.hype[h.id].on).length;
    return { ev, hy };
  }
  function RiskLine({ label, part }) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dt", { children: [
        label,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Tag, { tone: part.level === "Unknown" ? "mixed" : part.level === "High" || part.level === "Severe" ? "v-real" : "", children: part.level })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dd", { children: [
        part.note,
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sources, { ids: part.src })
      ] })
    ] });
  }
  function IncidentDiagram({ visual, number }) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("figure", { className: "incident-image", "aria-label": `Illustrated evidence diagram for story ${number}: ${visual.title}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { href: incidentImages[number], target: "_blank", rel: "noopener noreferrer", "aria-label": `Open full-size illustrated diagram for story ${number}`, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("img", { src: incidentImages[number], alt: `Illustrated diagram for story ${number}: ${visual.stages.map((s) => `${s.actor}: ${s.action} (${s.kind === "confirmed" ? "documented" : s.kind === "disputed" ? "disputed" : "reported"})`).join("; ")}. Boundary: ${visual.boundary}. Evidence limit: ${visual.limit}`, loading: "lazy" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("figcaption", { children: [
        "Swipe sideways on the diagram on a phone, or tap it to enlarge. Illustrated diagram, not a scene reconstruction. ",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "Where it stands:" }),
        " ",
        visual.result,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "Source record:" }),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sources, { ids: visual.src })
      ] })
    ] });
  }
  var STORY_TYPE = { 1: "real", 6: "real", 2: "lab", 3: "lab", 4: "lab", 5: "lab", 12: "lab", 15: "lab", 17: "analysis", 20: "analysis", 21: "real", 22: "real", 23: "analysis", 24: "real", 25: "lab", 26: "lab", 27: "real", 28: "real", 29: "real", 30: "real", 31: "real", 32: "real", 33: "real", 34: "analysis", 35: "alleg", 36: "lab", 37: "real", 38: "real", 39: "alleg", 40: "real", 41: "real", 16: "sim", 18: "sim", 7: "statement", 9: "statement", 8: "policy", 10: "policy", 19: "policy", 11: "alleg", 13: "alleg", 14: "alleg" };
  var TYPE_LABEL = { real: "Confirmed real-world access", lab: "Lab or test report", sim: "Simulation", analysis: "Outside analysis", statement: "Statement or warning", policy: "Policy, legal or release decision", alleg: "Allegation or disputed" };
  var TL_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MON_IDX = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
  function caseMonth(c) {
    const m = c.when.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
    const y2 = c.when.match(/(20\d\d)/);
    return m && y2 ? y2[1] + "-" + String(MON_IDX[m[1]]).padStart(2, "0") : c.date.slice(0, 7);
  }
  function shortWhen(w) {
    const m = w.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?(?:\s*[\u2013-]\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*)?(?:\s+(\d{1,2})(?!\d))?/);
    return m ? m[1] + (m[2] ? "\u2013" + m[2] : "") + (m[3] ? " " + m[3] : "") : w;
  }
  function monthLabel(k2) {
    const [y2, m] = k2.split("-");
    return TL_MONTHS[Number(m) - 1] + " " + y2;
  }
  function StoryTable({ sel, onSelect }) {
    const [q2, setQ] = import_react23.default.useState("");
    const [type, setType] = import_react23.default.useState("");
    const [verdict, setVerdict] = import_react23.default.useState("");
    const [key, setKey] = import_react23.default.useState("date");
    const [dir, setDir] = import_react23.default.useState(-1);
    const rows = cases2026.map((c) => {
      const cd = cards.find((k2) => k2.n === c.n);
      const sc = caseScore(c.n);
      return { c, cd, ev: sc ? sc.ev : null, hy: sc ? sc.hy : null, type: STORY_TYPE[c.n], gap: cd ? cd.headline.v - cd.verified.v : null };
    });
    const shown = rows.filter((r) => (!type || r.type === type) && (!verdict || r.cd?.verdict === verdict) && (!q2.trim() || (r.c.title + " " + r.c.who + " " + r.c.when + " " + (r.cd?.verdict || "")).toLowerCase().includes(q2.trim().toLowerCase())));
    const val = (r) => key === "n" ? r.c.n : key === "title" ? r.c.title : key === "who" ? r.c.who : key === "date" ? r.c.date : key === "type" ? TYPE_LABEL[r.type] : key === "ev" ? r.ev ?? -1 : key === "hy" ? r.hy ?? -1 : key === "verdict" ? r.cd?.verdict || "" : r.gap ?? -99;
    shown.sort((a, b) => {
      const x = val(a), y2 = val(b);
      return (x < y2 ? -1 : x > y2 ? 1 : a.c.n - b.c.n) * dir;
    });
    const click = (k2) => {
      if (k2 === key) setDir((d) => d === 1 ? -1 : 1);
      else {
        setKey(k2);
        setDir(k2 === "title" || k2 === "who" || k2 === "type" || k2 === "verdict" ? 1 : -1);
      }
    };
    const reset = () => {
      setQ("");
      setType("");
      setVerdict("");
      setKey("date");
      setDir(-1);
    };
    const dirty = q2 || type || verdict || key !== "date" || dir !== -1;
    const exportCsv = () => {
      const esc = (v2) => '"' + String(v2 ?? "not scored").replace(/"/g, '""') + '"';
      const lines = [["Case", "Title", "Who", "Date", "Kind", "Evidence /12", "Marketing signals /3", "Verdict", "Headline fear /10", "Verified risk /10"].map(esc).join(",")];
      shown.forEach((r) => lines.push([r.c.n, r.c.title, r.c.who, r.c.when, TYPE_LABEL[r.type], r.ev, r.hy, r.cd?.verdict ?? null, r.cd?.headline.v ?? null, r.cd?.verified.v ?? null].map(esc).join(",")));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/csv" }));
      a.download = "fog-of-war-stories.csv";
      a.click();
    };
    const th = (k2, label) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { scope: "col", "aria-sort": key === k2 ? dir === 1 ? "ascending" : "descending" : "none", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { type: "button", className: "st-sort", onClick: () => click(k2), children: [
      label,
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { "aria-hidden": "true", children: key === k2 ? dir === 1 ? " \u25B2" : " \u25BC" : "" })
    ] }) });
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "st-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "st-bar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { className: "st-search", type: "search", placeholder: "Search title, company or date", "aria-label": "Search stories", value: q2, onChange: (e2) => setQ(e2.target.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("select", { "aria-label": "Filter by kind of event", value: type, onChange: (e2) => setType(e2.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: "", children: "All kinds" }),
          Object.keys(TYPE_LABEL).map((k2) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: k2, children: TYPE_LABEL[k2] }, k2))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("select", { "aria-label": "Filter by verdict", value: verdict, onChange: (e2) => setVerdict(e2.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: "", children: "All verdicts" }),
          ["Spam", "Hype", "Real risk", "Underplayed"].map((v2) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: v2, children: v2 }, v2))
        ] }),
        dirty ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", 
