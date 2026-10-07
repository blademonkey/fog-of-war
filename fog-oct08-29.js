("button", { type: "button", className: "st-sort", onClick: () => click(k2), children: [
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
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: "st-" + c.status.label.toLowerCase().replace(/ /g, "-"), children: c.status.label }),
            " ",
            c.status.note,
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: c.status.src })
          ] })
        ] }) : null,
        c.framing ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "First framing vs. later facts" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("strong", { children: [
              c.framing.label,
              "."
            ] }),
            " ",
            c.framing.note
          ] })
        ] }) : null,
        c.incentive ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Framing incentive (analysis)" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            c.incentive,
            c.pairing ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "move-up", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Unverifiable claim + clout:" }),
              " ",
              c.pairing
            ] }) : null
          ] })
        ] }) : null,
        c.prompt ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Prompt disclosed?" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: c.prompt.label === "Full prompt published" ? "st-patched" : "st-never-resolved", children: c.prompt.label }),
            " ",
            c.prompt.note,
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: c.prompt.src })
          ] })
        ] }) : null,
        c.access ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Who saw the prompt and transcripts" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dl", { className: "gate", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Access" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.access.who }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Chosen by" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.access.chosen }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Published finding on the prompt" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.access.finding })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: c.access.src })
          ] })
        ] }) : null,
        c.gate ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Gate audit" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dl", { className: "gate", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Known risk" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.gate.risk }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Defense in place" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.gate.defense }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "How it came down" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.gate.down }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Who saw warnings" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.gate.warnings }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Time to reaction" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.gate.reaction }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Intent" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: c.gate.intent })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: c.gate.src })
          ] })
        ] }) : null,
        c.ladder ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Culpability ladder" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Tag, { tone: "rung-" + c.ladder.rung.toLowerCase().replace(" ", "-"), children: [
              c.ladder.rung,
              c.ladder.between ? " \u2192 " + c.ladder.between : ""
            ] }),
            " ",
            c.ladder.why,
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "move-up", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "What would move it:" }),
              " ",
              c.ladder.moveUp
            ] })
          ] })
        ] }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "src-full", children: [
        "Sources: ",
        c.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react21.default.Fragment, { children: [
          i ? " \xB7 " : "",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(je2, { href: S[id2].href, children: S[id2].label })
        ] }, id2))
      ] })
    ] });
  }
  function HistoryItem({ h }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("details", { className: "item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-num", children: String(h.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-title", children: h.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "item-meta", children: [
          h.when,
          " \xB7 ",
          h.who
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-teaser", children: firstSentence(h.narrative) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dl", { className: "kv", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Threat narrative" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: h.narrative }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Publicity 
