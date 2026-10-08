sx_runtime19.jsx)("dd", { children: t.how }),
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
  var STORY_TYPE = { 1: "real", 6: "real", 2: "lab", 3: "lab", 4: "lab", 5: "lab", 12: "lab", 15: "lab", 17: "analysis", 20: "analysis", 21: "real", 22: "real", 23: "analysis", 24: "real", 16: "sim", 18: "sim", 7: "statement", 9: "statement", 8: "policy", 10: "policy", 19: "policy", 11: "alleg", 13: "alleg", 14: "alleg" };
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
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", className: "tl-key tl-filter" + (on ? "" : " off"), "aria-pressed": on, onClick: () => toggle(k2), children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-dot tl-" + k2 }),
            TYPE_LABEL[k2],
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-count", children: n })
          ] }, k2);
        }),
        off.length ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tl-reset", onClick: () => setOff([]), children: "Show all" }) : null
      ] }),
      off.length ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "tl-filter-note", role: "status", children: [
        "Showing ",
        items.filter((c) => !off.includes(STORY_TYPE[c.n])).length,
        " of ",
        items.length,
        " stories.",
        off.includes(STORY_TYPE[sel]) ? " The selected story is hidden by this filter but stays open below." : ""
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "tl-scroll", ref, role: "group", "aria-label": "Story timeline by month. Scroll sideways to go back in time.", children: keys.map((k2) => {
        const all = items.filter((c) => caseMonth(c) === k2);
        const inM = all.filter((c) => !off.includes(STORY_TYPE[c.n]));
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tl-month", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "tl-nodes", children: inM.length ? inM.map((c) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", className: "tl-node" + (sel === c.n ? " on" : ""), "aria-pressed": sel === c.n, "aria-label": `Story ${c.n}: ${c.title}. ${c.when}. ${TYPE_LABEL[STORY_TYPE[c.n]]}.`, onClick: () => onSelect(c.n), children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "tl-pop", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("strong", { children: [
                String(c.n).padStart(2, "0"),
                " \xB7 ",
                c.title
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: c.when }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: TYPE_LABEL[STORY_TYPE[c.n]] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-pin tl-" + STORY_TYPE[c.n], children: c.n }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-d", children: shortWhen(c.when) })
          ] }, c.n)) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-empty", children: all.length ? "Filtered out" : "No case yet" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "tl-mlabel", children: monthLabel(k2) })
        ] }, k2);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "tl-note", children: "Scroll sideways for earlier months. A story sits in the first month named in its sourced date. A range (for example Jul\u2013Aug) starts where the record starts; a story dated by a report (Reported, Published, Disclosed, Analyzed) sits where that report came out, which can be later than the underlying events. The text under each title is the sourced date, not an exact event time." })
    ] });
  }
  function CaseItem({ c, inline: inline2 }) {
    const sc = caseScore(c.n);
    const cd = cards.find((k2) => k2.n === c.n);
    const risk = actualRisk[c.n];
    const visual = incidentVisuals[c.n];
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("details", { className: "item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-num", children: String(c.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-title", children: c.title }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "date-chip", children: shortDate(c.date) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: leanTone[c.lean], children: c.lean }),
          cd ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: verdictTone[cd.verdict], children: cd.verdict }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "item-meta", children: [
          c.when,
          " \xB7 ",
          c.who,
          sc ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            " \xB7 Evidence ",
            sc.ev,
            "/12 \xB7 Marketing ",
            sc.hy,
            "/3"
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-teaser", children: firstSentence(c.facts) })
      ] }),
      visual && !inline2 ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IncidentDiagram, { visual, number: c.n }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dl", { className: "kv", children: [
        c.broke ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Who broke the story" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: c.broke.who === "The lab itself" ? "lab" : "outside", children: c.broke.who }),
            " ",
            c.broke.note,
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: c.broke.src })
          ] })
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "What happened" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.facts }),
        cd && !inline2 ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Skeptic read" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: verdictTone[cd.verdict], children: cd.verdict }),
            " Headline fear ",
            cd.headline.v,
            "/10, verified risk ",
            cd.verified.v,
            "/10. ",
            cd.verdictNote,
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: [.../* @__PURE__ */ new Set([...cd.headline.src, ...cd.verified.src])] })
          ] })
        ] }) : null,
        risk && !inline2 ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Actual risk breakdown" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: "Scenario, observed harm and future exposure are separate judgments, not a combined score." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RiskLine, { label: "If it happened for real", part: risk.potential }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RiskLine, { label: "Harm observed here", part: risk.observed }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RiskLine, { label: "Future harm chance", part: risk.future })
        ] }) : null,
        c.fits ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Reading that fits the map" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.fits })
        ] }) : null,
        c.against ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Reading that cuts against it" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.against })
        ] }) : null,
        c.timeline ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Disclosure timeline" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ol", { className: "tl", children: c.timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: t.late ? "tl-late" : "", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-date", children: t.date }),
              t.late ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: "late", children: "later disclosure" }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-event", children: t.event }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-src", children: t.src.map((id2, j3) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react21.default.Fragment, { children: [
                j3 ? " \xB7 " : "",
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(je2, { href: S[id2].href, children: S[id2].label.split(",")[0] })
              ] }, id2)) })
            ] }, i)) }),
            c.lag ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "tl-lag", children: c.lag }) : null
          ] })
        ] }) : null,
        c.status ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Resolution" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PU
