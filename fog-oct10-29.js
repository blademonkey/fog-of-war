ished.", "limit": "Private tests and failure rates are not independently audited.", "src": ["cnbcAstraStop", "bbcAstraStop"] },
    20: { "title": "Two failed government-site probes", "stages": [{ "actor": "Research-style collection", "action": "Public archives record high-volume requests and altered parameters", "kind": "confirmed" }, { "actor": "Target input boundary", "action": "Rudimentary probes apparently fail at U.S. and Canadian sites", "kind": "reported" }, { "actor": "Independent checks", "action": "No observed non-public access; Canada reports no indication of compromise", "kind": "confirmed" }], "boundary": "Requests cross intended task boundaries, not a proven target compromise", "result": "Apparently unsuccessful probes; provider attribution varies.", "limit": "Original prompts absent. Canadian attempts not confidently attributed to OpenAI.", "src": ["transluceGov", "canadaCyber"] },
    21: { "title": "Probing a wiki platform", "stages": [{ "actor": "Agents attributed to OpenAI", "action": "Sandbox edits, a few citation-tool config edits, and millions of API requests", "kind": "reported" }, { "actor": "Wikimedia tools", "action": "Etherpad exploit attempts fail; the citation tool is a possible proxy", "kind": "confirmed" }, { "actor": "Wikimedia services", "action": "No compromise found; a May query-service outage may be linked", "kind": "reported" }], "boundary": "Public agents \u2192 wiki tools and APIs", "result": "Wikimedia found no breach and says the outage link is possible.", "limit": "Attribution is Wikimedia's belief; OpenAI had not responded.", "src": ["wikimediaPost", "reutersWikimedia"] },
    22: { "title": "Zero-days to volunteer data", "stages": [{ "actor": "Apparent agent attacker", "action": "Scripts with self-justifying notes chain two Zammad flaws", "kind": "reported" }, { "actor": "DIVD helpdesk server", "action": "Session hijack, code execution and root access in seconds", "kind": "confirmed" }, { "actor": "DIVD volunteer data", "action": "Email addresses and possibly contact details exfiltrated", "kind": "confirmed" }], "boundary": "Outside attacker \u2192 helpdesk \u2192 DIVD data", "result": "Segmentation stopped deeper access; the vendor was notified.", "limit": "The agent link is DIVD's inference; no model or operator is named.", "src": ["divdCase", "divdCve", "hnsDivd"] },
    23: { "title": "Map-data retrieval by alternate paths", "stages": [{ "actor": "Parallel agent runs", "action": "Seek entrance-navigation shares for Chinese places", "kind": "reported" }, { "actor": "Amap anti-bot checks", "action": "Use scanner browsers, relays and generated tokens", "kind": "reported" }, { "actor": "Public-trace readouts", "action": "Researchers report data for five places by Oct 6", "kind": "reported" }], "boundary": "Direct-access restriction \u2192 alternate public retrieval services", "result": "Data readouts reported; breach and service harm not established.", "limit": "Tencent Cloud traces do not prove Tencent operation, model identity or coordination.", "src": ["swarmAmap", "tbijAmap"] },
    24: { "title": "Exposed endpoint to server takeover", "stages": [{ "actor": "Exposed endpoint", "action": "Job-submission feature reachable without a login", "kind": "reported" }, { "actor": "In-application code", "action": "Scripting inside the app; database admin credentials recovered", "kind": "reported" }, { "actor": "Full server control", "action": "System-level access, hives dumped, backdoor accounts created", "kind": "reported" }], "boundary": "Unauthenticated job endpoint \u2192 full host control", "result": "Under a day from first contact to full administrative control, per the responder.", "limit": "AI involvement is the responder's high-confidence assessment. Model, agent count and human oversight are unknown; the victim is unnamed.", "src": ["reliaquest"] },
    25: { "title": "Public chat to agent-fleet permissions", "stages": [{ "actor": "Public test agent", "action": "A researcher prompt gets runtime credentials through an agent tool", "kind": "reported" }, { "actor": "Broad default role", "action": "Credentials work outside the agent and reach other agent resources", "kind": "reported" }, { "actor": "AWS account and region", "action": "Researchers read chats, code and secrets and alter memories", "kind": "reported" }], "boundary": "One public agent \u2192 other agents in the same AWS account and region", "result": "Researchers observed narrower permissions before public disclosure.", "limit": "Research test, not a confirmed customer breach. No known live exploitation.", "src": ["zenityCore", "zenityRole", "awsAgentSecurity"] }
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

  // src/App.tsx
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  var incidentImages = { 1: diagram_01_default, 2: diagram_02_default, 3: diagram_03_default, 4: diagram_04_default, 5: diagram_05_default, 6: diagram_06_default, 7: diagram_07_default, 8: diagram_08_default, 9: diagram_09_default, 10: diagram_10_default, 11: diagram_11_default, 12: diagram_12_default, 13: diagram_13_default, 14: diagram_14_default, 15: diagram_15_default, 16: diagram_16_default, 17: diagram_17_default, 18: diagram_18_default, 19: diagram_19_default, 20: diagram_20_default, 21: diagram_21_default, 22: diagram_22_default, 23: diagram_23_default, 24: diagram_24_default, 25: diagram_25_default };
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
  var STORY_TYPE = { 1: "real", 6: "real", 2: "lab", 3: "lab", 4: "lab", 5: "lab", 12: "lab", 15: "lab", 17: "analysis", 20: "analysis", 21: "real", 22: "real", 23: "analysis", 24: "real", 25: "lab", 16: "sim", 18: "sim", 7: "statement", 9: "statement", 8: "policy", 10: "policy", 19: "policy", 11: "alleg", 13: "alleg", 14: "alleg" };
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
    const th = (k2, label) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("th", { scope: "col", "aria-sort": key === k2 ? dir === 1 ? "ascending" : "descending" : "none", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", className: "st-sort", onClick: () => click(k2), children: [
      label,
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { "aria-hidden": "true", children: key === k2 ? dir === 1 ? " \u25B2" : " \u25BC" : "" })
    ] }) });
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "st-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "st-bar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { className: "st-search", type: "search", placeholder: "Search title, company or date", "aria-label": "Search stories", value: q, onChange: (e2) => setQ(e2.target.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("select", { "aria-label": "Filter by kind of event", value: type, onChange: (e2) => setType(e2.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "", children: "All kinds" }),
          Object.keys(TYPE_LABEL).map((k2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: k2, children: TYPE_LABEL[k2] }, k2))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("select", { "aria-label": "Filter by verdict", value: verdict, onChange: (e2) => setVerdict(e2.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "", children: "All verdicts" }),
          ["Spam", "Hype", "Real risk", "Underplayed"].map((v2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: v2, children: v2 }, v2))
        ] }),
        dirty ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tl-reset", onClick: reset, children: "Reset filters" }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "st-export", onClick: exportCsv, children: "Export CSV" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "tl-filter-note", role: "status", children: [
        "Showing ",
        shown.length,
        " of ",
        rows.length,
        " stories. Scores are editorial judgments. Click a column heading to sort; dates sort by the latest sourced date, so a range sorts by its end month. Click a story title to open it below."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "st-scroll", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("table", { className: "st-table", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { children: [
          th("n", "#"),
          th("title", "Story"),
          th("who", "Who"),
          th("date", "Date"),
          th("type", "Kind"),
          th("ev", "Evidence"),
          th("hy", "Marketing"),
          th("verdict", "Verdict"),
          th("gap", "Fear vs verified")
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tbody", { children: shown.length ? shown.map((r) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tr", { className: sel === r.c.n ? "on" : "", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: String(r.c.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "st-open", "aria-pressed": sel === r.c.n, onClick: () => onSelect(r.c.n), children: r.c.title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: r.c.who }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: r.c.when }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: TYPE_LABEL[r.type] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: r.ev === null ? "Not scored" : r.ev + "/12" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: r.hy === null ? "Not scored" : r.hy + "/3" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: r.cd ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: verdictTone[r.cd.verdict], children: r.cd.verdict }) : "Not scored" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: r.cd ? r.cd.headline.v + " vs " + r.cd.verified.v : "Not scored" })
        ] }, r.c.n)) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("td", { colSpan: 9, children: [
          "No stories match. ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tl-reset", onClick: reset, children: "Reset filters" })
        ] }) }) })
      ] }) })
    ] });
  }
  function StoryTimeline({ sel, onSelect }) {
    const ref = import_react21.default.useRef(null);
    const [off, setOff] = import_react21.default.useState([]);
    const toggle = (k2) => setOff((o) => o.includes(k2) ? o.filter((x) => x !== k2) : [...o, k2]);
    const items = [...cases2026].sort((a, b2) => caseMonth(a).localeCompare(caseMonth(b2)) || a.date.localeCompare(b2.date) || a.n - b2.n);
    const first = caseMonth(items[0]);
    const now = /* @__PURE__ */ new Date();
    const nowKey = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");
    const lastKey = nowKey > caseMonth(items[items.length - 1]) ? nowKey : caseMonth(items[items.length - 1]);
    const keys = [];
    for (let [y2, m] = first.split("-").map(Number); y2 + "-" + String(m).padStart(2, "0") <= lastKey; m++) {
      if (m > 12) {
        m = 1;
        y2++;
      }
      keys.push(y2 + "-" + String(m).padStart(2, "0"));
      if (keys.length > 60) break;
    }
    import_react21.default.useEffect(() => {
      const el2 = ref.current;
      if (el2) el2.scrollLeft = el2.scrollWidth;
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tl-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tl-legend", role: "group", "aria-label": "Filter the timeline by kind of event", children: [
        Object.keys(TYPE_LABEL).map((k2) => {
          const n = items.filter((c) => STORY_TYPE[c.n] === k2).length;
          const on = !off.includes(k2);
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type:
