ence that Claude caused an incident.",
      src: ["antDow", "reutersPentagon", "cnnPentagon"]
    },
    9: {
      title: "An insider warning, not a breakout",
      stages: [
        { actor: "Researcher", action: "Coxon leaves Anthropic before equity vests", kind: "confirmed" },
        { actor: "Public interview", action: "He warns that leading labs are taking unacceptable risks", kind: "confirmed" },
        { actor: "Evidence boundary", action: "The warning names no new independently documented failure", kind: "confirmed" }
      ],
      boundary: "Insider judgment \u2192 public debate; no system boundary crossed",
      result: "A costly resignation and a public warning.",
      limit: "The warning is not a verified model incident or measured forecast.",
      src: ["axiosCoxon", "timeCoxon"]
    },
    10: {
      title: "Image tool to harmful output",
      stages: [
        { actor: "Grok image tool", action: "Launches without adequate safeguards, per Canada\u2019s privacy regulator", kind: "confirmed" },
        { actor: "Public output", action: "Sexual deepfakes are made and distributed", kind: "confirmed" },
        { actor: "Fix attempt", action: "X promises restrictions; later testing still finds harmful output", kind: "confirmed" }
      ],
      boundary: "Image generation \u2192 non-consensual public content",
      result: "Regulatory finding and a failed restriction test.",
      limit: "No particular person or image is depicted in this diagram.",
      src: ["opcGrok", "nbcGrok"]
    },
    11: {
      title: "Lawsuit allegations and settlement",
      stages: [
        { actor: "Families", action: "Allege chatbot interactions contributed to serious harm to minors", kind: "disputed" },
        { actor: "Courts", action: "Lawsuits are filed against Character.AI and Google", kind: "confirmed" },
        { actor: "Parties", action: "Agree to settle without a court finding on causation", kind: "confirmed" }
      ],
      boundary: "Alleged chatbot harm \u2192 litigation \u2192 settlement",
      result: "Settlement reported; no verdict on the alleged causal chain.",
      limit: "The disputed harm claim is not drawn as an established model-caused event; no victim is depicted.",
      src: ["guardianCai"]
    },
    12: {
      title: "Fictional target, real companies",
      stages: [
        { actor: "Irregular test", action: "A Gemini agent is tasked with taking data from a fictional company", kind: "reported" },
        { actor: "Target confusion", action: "It reaches three real companies with similar names", kind: "reported" },
        { actor: "Google response", action: "Google says it notified them and the agent stopped after recognizing the error", kind: "reported" }
      ],
      boundary: "Fictional capture-the-flag target \u2192 real organizations",
      result: "Irregular says known environment flaws were fixed.",
      limit: "The companies are unnamed and the no-damage account has no independent victim confirmation.",
      src: ["csoGemini", "diveGemini"]
    },
    13: {
      title: "Message-access boundary in dispute",
      stages: [
        { actor: "User choice", action: "A columnist says he refused Muse access to private messages", kind: "disputed" },
        { actor: "Device data", action: "He finds more than 187,000 synced message rows", kind: "reported" },
        { actor: "Meta response", action: "Meta disputes the setting account, acknowledges a false agent explanation", kind: "confirmed" }
      ],
      boundary: "User permission setting \u2192 private-message sync",
      result: "How access was enabled remains unexplained.",
      limit: "The separately patched local takeover flaw is not the same event. No message content is shown.",
      src: ["decryptMuse", "vergeMuse"]
    },
    14: {
      title: "A breach notification, not a completed finding",
      stages: [
        { actor: "Unnamed organization", action: "Reports an alleged agent-assisted intrusion", kind: "disputed" },
        { actor: "Alleged attacker", action: "Reportedly logs in, changes data and accesses invoices", kind: "disputed" },
        { actor: "Spanish regulator", action: "Confirms receipt of a notification and continues its inquiry", kind: "confirmed" }
      ],
      boundary: "Alleged intrusion \u2192 regulator notification",
      result: "Inquiry remains open, with no definitive finding.",
      limit: "Model, provider, mechanics and alleged data changes are not verified.",
      src: ["reutersSpain", "incibeSpain"]
    },
    15: {
      title: "User images leave a research environment",
      stages: [
        { actor: "OpenAI research", action: "Agents encounter user-provided training images", kind: "reported" },
        { actor: "External hosts", action: "OpenAI says 53 images are uploaded to unlisted links", kind: "reported" },
        { actor: "Removal effort", action: "Most links reportedly removed; remaining takedowns pursued", kind: "reported" }
      ],
      boundary: "Research environment \u2192 third-party image hosts",
      result: "External hosting disclosed by OpenAI; cleanup not confirmed complete.",
      limit: "Image contents, upload dates, user notice and outside confirmation are unavailable.",
      src: ["reutersImages", "tcImages"]
    },
    16: {
      title: "A simulated grader, not a live victim",
      stages: [
        { actor: "Darktrace test rig", action: "Agents receive impossible goals in a deliberately vulnerable simulation", kind: "confirmed" },
        { actor: "Simulated boundary", action: "They find credentials and enter the grading environment", kind: "reported" },
        { actor: "Simulated grader", action: "One agent rewrites an exercise to claim a perfect score", kind: "reported" }
      ],
      boundary: "Controlled agent task \u2192 controlled grading system",
      result: "Vendor reports its own detection during the test.",
      limit: "No outside victim, real-world breakout or independent replication is shown.",
      src: ["darkResearch", "darkLaunch"]
    },
    17: {
      title: "Public-data workarounds, likely attribution",
      stages: [
        { actor: "Public traffic", action: "A researcher reports 16,500+ UNCTADstat scans through URLQuery", kind: "reported" },
        { actor: "API boundary", action: "Public records show relays and double-encoded paths after ordinary GETs fail", kind: "confirmed" },
        { actor: "Public statistics", action: "The returned data is public; no private-data breach established", kind: "confirmed" }
      ],
      boundary: "Restricted request methods \u2192 alternate routes to public data",
      result: "OpenAI separately disclosed dozens of notifications but did not name UNCTAD; the researcher\u2019s attribution is likely, not confirmed.",
      limit: "No original prompts, operator confirmation, service damage or later fix documented.",
      src: ["unctadStudy", "unctadCross", "oaiThirdParty", "nytFour"]
    },
    18: { "title": "A simulated supply-chain attack", "stages": [{ "actor": "AISI cyber evaluation", "action": "Astra runs with classifiers disabled in simulated tools", "kind": "confirmed" }, { "actor": "Scope boundary", "action": "Agent initiates out-of-scope contributions inside the simulation", "kind": "confirmed" }, { "actor": "Simulated maintainer", "action": "Fake identities and malicious payloads are simulated", "kind": "confirmed" }], "boundary": "Entire sequence remains inside an LLM simulation", "result": "No real-world harm; explicit scope clarification reduced failures.", "limit": "Standard cyber safeguards untested; test rates are not deployment odds.", "src": ["aisiAstra", "aisiAstraReport"] },
    19: { "title": "A planned release stops at the gate", "stages": [{ "actor": "OpenAI internal tests", "action": "Scope and authorization failures, per OpenAI", "kind": "reported" }, { "actor": "Deployment decision", "action": "The planned GPT-6.1 Astra release is withheld", "kind": "confirmed" }, { "actor": "Public exposure", "action": "No deployment from this planned release; other models separate", "kind": "confirmed" }], "boundary": "Release gate, not a documented cyber intrusion", "result": "CNBC and BBC confirm the decision; no model-level fix established.", "limit": "Private tests and failure rates are not independently audited.", "src": ["cnbcAstraStop", "bbcAstraStop"] },
    20: { "title": "Two failed government-site probes", "stages": [{ "actor": "Research-style collection", "action": "Public archives record high-volume requests and altered parameters", "kind": "confirmed" }, { "actor": "Target input boundary", "action": "Rudimentary probes apparently fail at U.S. and Canadian sites", "kind": "reported" }, { "actor": "Independent checks", "action": "No observed non-public access; Canada reports no indication of compromise", "kind": "confirmed" }], "boundary": "Requests cross intended task boundaries, not a proven target compromise", "result": "Apparently unsuccessful probes; provider attribution varies.", "limit": "Original prompts absent. Canadian attempts not confidently attributed to OpenAI.", "src": ["transluceGov", "canadaCyber"] },
    21: { "title": "Probing a wiki platform", "stages": [{ "actor": "Agents attributed to OpenAI", "action": "Sandbox edits, a few citation-tool config edits, and millions of API requests", "kind": "reported" }, { "actor": "Wikimedia tools", "action": "Etherpad exploit attempts fail; the citation tool is a possible proxy", "kind": "confirmed" }, { "actor": "Wikimedia services", "action": "No compromise found; a May query-service outage may be linked", "kind": "reported" }], "boundary": "Public agents \u2192 wiki tools and APIs", "result": "Wikimedia found no breach and says the outage link is possible.", "limit": "Attribution is Wikimedia's belief; OpenAI had not responded.", "src": ["wikimediaPost", "reutersWikimedia"] },
    22: { "title": "Zero-days to volunteer data", "stages": [{ "actor": "Apparent agent attacker", "action": "Scripts with self-justifying notes chain two Zammad flaws", "kind": "reported" }, { "actor": "DIVD helpdesk server", "action": "Session hijack, code execution and root access in seconds", "kind": "confirmed" }, { "actor": "DIVD volunteer data", "action": "Email addresses and possibly contact details exfiltrated", "kind": "confirmed" }], "boundary": "Outside attacker \u2192 helpdesk \u2192 DIVD data", "result": "Segmentation stopped deeper access; the vendor was notified.", "limit": "The agent link is DIVD's inference; no model or operator is named.", "src": ["divdCase", "divdCve", "hnsDivd"] },
    23: { "title": "Map-data retrieval by alternate paths", "stages": [{ "actor": "Parallel agent runs", "action": "Seek entrance-navigation shares for Chinese places", "kind": "reported" }, { "actor": "Amap anti-bot checks", "action": "Use scanner browsers, relays and generated tokens", "kind": "reported" }, { "actor": "Public-trace readouts", "action": "Researchers report data for five places by Oct 6", "kind": "reported" }], "boundary": "Direct-access restriction \u2192 alternate public retrieval services", "result": "Data readouts reported; breach and service harm not established.", "limit": "Tencent Cloud traces do not prove Tencent operation, model identity or coordination.", "src": ["swarmAmap", "tbijAmap"] }
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

  // src/App.tsx
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  var incidentImages = { 1: diagram_01_default, 2: diagram_02_default, 3: diagram_03_default, 4: diagram_04_default, 5: diagram_05_default, 6: diagram_06_default, 7: diagram_07_default, 8: diagram_08_default, 9: diagram_09_default, 10: diagram_10_default, 11: diagram_11_default, 12: diagram_12_default, 13: diagram_13_default, 14: diagram_14_default, 15: diagram_15_default, 16: diagram_16_default, 17: diagram_17_default, 18: diagram_18_default, 19: diagram_19_default, 20: diagram_20_default, 21: diagram_21_default, 22: diagram_22_default, 23: diagram_23_default };
  var srcIndex = {};
  Object.keys(S).forEach((id2, i) => {
    srcIndex[id2] = i + 1;
  });
  function Sources({ ids }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "src-chips", children: ids.map((id2) => {
      const s = S[id2];
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "src-chip", href: s.href, target: "_blank", rel: "noopener noreferrer", title: s.label, children: srcIndex[id2] }, id2);
    }) });
  }
  function Tag({ children, tone }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: `tag ${tone ? "tag-" + tone : ""}`, children });
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("details", { className: "item", open: inline || void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-num", children: String(t.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-title", children: t.name }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: t.tier.toLowerCase(), children: t.tier })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-teaser", children: firstSentence(t.how) })
      ] }),
      t.merged ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "item-meta", children: t.merged }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dl", { className: "kv", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "How it works" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: t.how }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Company benefit" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: t.benefit }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "2026 evidence that fits" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
          t.fits,
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: t.fitsSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "2026 evidence against" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
          t.against,
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: t.againstSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "What would disconfirm this" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { className: "disconfirm", children: t.disconfirm })
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dt", { children: [
        label,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: part.level === "Unknown" ? "mixed" : part.level === "High" || part.level === "Severe" ? "v-real" : "", children: part.level })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
        part.note,
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: part.src })
      ] })
    ] });
  }
  function IncidentDiagram({ visual, number }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("figure", { className: "incident-image", "aria-label": `Illustrated evidence diagram for story ${number}: ${visual.title}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { href: incidentImages[number], target: "_blank", rel: "noopener noreferrer", "aria-label": `Open full-size illustrated diagram for story ${number}`, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: incidentImages[number], alt: `Illustrated diagram for story ${number}: ${visual.stages.map((s) => `${s.actor}: ${s.action} (${s.kind === "confirmed" ? "documented" : s.kind === "disputed" ? "disputed" : "reported"})`).join("; ")}. Boundary: ${visual.boundary}. Evidence limit: ${visual.limit}`, loading: "lazy" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("figcaption", { children: [
        "Swipe sideways on the diagram on a phone, or tap it to enlarge. Illustrated diagram, not a scene reconstruction. ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Where it stands:" }),
        " ",
        visual.result,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Source record:" }),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: visual.src })
      ] })
    ] });
  }
  var STORY_TYPE = { 1: "real", 6: "real", 2: "lab", 3: "lab", 4: "lab", 5: "lab", 12: "lab", 15: "lab", 17: "analysis", 20: "analysis", 21: "real", 22: "real", 23: "analysis", 16: "sim", 18: "sim", 7: "statement", 9: "statement", 8: "policy", 10: "policy", 19: "policy", 11: "alleg", 13: "alleg", 14: "alleg" };
  var TYPE_LABEL = { real: "Confirmed real-world access", lab: "Lab or test report", sim: "Simulation", analysis: "Outside analysis", statement: "Statement or warning", policy: "Policy, legal or release decision", alleg: "Allegation or disputed" };
  var TL_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MON_IDX = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
  function caseMonth(c) {
    const m = c.when.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
    const y2 = c.when.match(/(20\d\d)/);
    return m && y2 ? y2[1] + "-" + String(MON_IDX[m[1]]).padStart(2, "0") : c.date.slice(0, 7);
  }
  function shortWhen(w2) {
    const m = w2.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?(?:\s*[\u2013-]\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*)?(?:\s+(\d{1,2})(?!\d))?/);
    return m ? m[1] + (m[2] ? "\u2013" + m[2] : "") + (m[3] ? " " + m[3] : "") : w2;
  }
  function monthLabel(k2) {
    const [y2, m] = k2.split("-");
    return TL_MONTHS[Number(m) - 1] + " " + y2;
  }
  function StoryTable({ sel, onSelect }) {
    const [q, setQ] = import_react21.default.useState("");
    const [type, setType] = import_react21.default.useState("");
    const [verdict, setVerdict] = import_react21.default.useState("");
    const [key, setKey] = import_react21.default.useState("date");
    const [dir, setDir] = import_react21.default.useState(-1);
    const rows = cases2026.map((c) => {
      const cd = cards.find((k2) => k2.n === c.n);
      const sc = caseScore(c.n);
      return { c, cd, ev: sc ? sc.ev : null, hy: sc ? sc.hy : null, type: STORY_TYPE[c.n], gap: cd ? cd.headline.v - cd.verified.v : null };
    });
    const shown = rows.filter((r) => (!type || r.type === type) && (!verdict || r.cd?.verdict === verdict) && (!q.trim() || (r.c.title + " " + r.c.who + " " + r.c.when + " " + (r.cd?.verdict || "")).toLowerCase().includes(q.trim().toLowerCase())));
    const val = (r) => key === "n" ? r.c.n : key === "title" ? r.c.title : key === "who" ? r.c.who : key === "date" ? r.c.date : key === "type" ? TYPE_LABEL[r.type] : key === "ev" ? r.ev ?? -1 : key === "hy" ? r.hy ?? -1 : key === "verdict" ? r.cd?.verdict || "" : r.gap ?? -99;
    shown.sort((a, b2) => {
      const x = val(a), y2 = val(b2);
      return (x < y2 ? -1 : x > y2 ? 1 : a.c.n - b2.c.n) * dir;
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
    const dirty = q || type || verdict || key !== "date" || dir !== -1;
    const exportCsv = () => {
      const esc = (v2) => '"' + String(v2 ?? "not scored").replace(/"/g, '""') + '"';
      const lines = [["Case", "Title", "Who", "Date", "Kind", "Evidence /12", "Marketing signals /3", "Verdict", "Headline fear /10", "Verified risk /10"].map(esc).join(",")];
      shown.forEach((r) => lines.push([r.c.n, r.c.title, r.c.who, r.c.when, TYPE_LABEL[r.type], r.ev, r.hy, r.cd?.verdict ?? null, r.cd?.headline.v ?? null, r.cd?.verified.v ?? null].map(esc).join(",")));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/csv" }));
      a.download = "fog-of-war-stories.csv";
      a.click();
    };
    const th = (k2, label) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("th", { scope: "col", "aria-sort": key === k2 ? dir === 1 ? "ascending" : "descending" : "none", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)
