 test setup failure affected four labs. Neither vendor claims nor affected-party notifications equal verified breaches.";
  var RN8 = "Readability revision. A contents menu jumps to any section. Casebook, tactics, history, and score criteria now collapse to one-line summaries you tap to expand. Inline source lists are small numbered citation chips; full source names stay inside each opened item and in All sources. Added an at-a-glance line. Content is unchanged from v7, except the casebook intro count, which said eleven and now tracks the real number (14).";
  var TITLE = "Fog of War";
  var COVER_ALT = "Illustration: a strategy map with four flagged team routes, half-covered by fog, a lighthouse beam clearing a path through it";
  var STORY_TABS = [["score", "Stories"]];
  var METHOD_TABS = [
    ["rubric", "The rubric"],
    ["argument", "The argument"],
    ["tactics", "Tactics & history"],
    ["playbook", "Playbook"],
    ["notes", "Notes & sources"]
  ];
  function App() {
    const ranked = cards.map((cd) => ({ cd, cs: cases2026.find((c) => c.n === cd.n) })).sort((a, b2) => b2.cs.date.localeCompare(a.cs.date));
    const latest5 = ranked.slice(0, 5);
    const [pick, setPick] = (0, import_react21.useState)(String(latest5[0].cd.n));
    const [lean, setLean] = (0, import_react21.useState)("all");
    const [tab, setTab] = (0, import_react21.useState)("score");
    const [view, setView] = (0, import_react21.useState)("timeline");
    const [sel, setSel] = (0, import_react21.useState)(ranked[0].cd.n);
    const inStories = STORY_TABS.some(([id2]) => id2 === tab);
    const card = cards.find((c) => c.n === sel) ?? cards[0];
    const cs2 = cases2026.find((c) => c.n === card.n);
    const rank = ranked.findIndex((r) => r.cd.n === card.n) + 1;
    const gap = card.headline.v - card.verified.v;
    const gapText = gap > 0 ? `Gap +${gap}: the fear outruns the evidence` : gap < 0 ? `Gap ${gap}: quieter than the evidence` : "Gap 0: fear matches the evidence";
    const ev = criteria.reduce((s, k2) => s + card.scores[k2.id].v, 0);
    const hy = hypeSignals.filter((h) => card.hype[h.id].on).length;
    const shown = cases2026.filter((c) => lean === "all" || leanTone[c.lean] === lean);
    const count = (l2) => cases2026.filter((c) => leanTone[c.lean] === l2).length;
    const allSources = Object.values(S);
    const scored = cards.map((c) => criteria.reduce((s, k2) => s + c.scores[k2.id].v, 0));
    const evMin = Math.min(...scored), evMax = Math.max(...scored);
    const promptsPublished = cases2026.filter((c) => c.prompt && c.prompt.label === "Full prompt published").length;
    const deliberate = cases2026.filter((c) => c.ladder && c.ladder.rung === "Deliberate").length;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(ru, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "fog-top", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(uu, { title: TITLE }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "cover-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Ct, { label: "Cover", items: [{ src: cover_default, alt: COVER_ALT }] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "fog-intro", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "fog-fact", children: "AI risk messaging index \xB7 v17 private review \xB7 September 27, 2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "fog-tag", children: "AI claims. Public evidence. Less fog." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "fog-desc", children: "Fog of War compares how alarming AI-agent stories sound with what their sources establish." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "fog-limit", children: "Curated daily. Scores are editorial judgments, not a measure of your organisation\u2019s risk." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("nav", { className: "tabbar tabbar-main", "aria-label": "Page parts", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tab tab-main", "aria-pressed": inStories, onClick: () => {
          if (!inStories) setTab("score");
        }, children: "Stories" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tab tab-main", "aria-pressed": !inStories, onClick: () => {
          if (inStories) setTab("rubric");
        }, children: "Rubric & methods" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "part-blurb", children: inStories ? "The specific stories: a timeline of every case, each with its diagram, score, chronology and sources." : "How the scores work: the rubric, the evidence rules, uncertainty, the argument being tested, and the sources behind the page." }),
      inStories && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "visual-feature", "aria-label": "Story timeline and diagram", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "Story timeline" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "Browse every story on the timeline or in a sortable, searchable table. Hover or focus a dot to preview its title; tap a dot or a table row to open that story below. Colors show the kind of event, so a statement never reads like an incident." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "view-switch", role: "group", "aria-label": "Story view", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tab", "aria-pressed": view === "timeline", onClick: () => setView("timeline"), children: "Timeline" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tab", "aria-pressed": view === "table", onClick: () => setView("table"), children: "Table" })
        ] }),
        view === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(StoryTimeline, { sel, onSelect: setSel }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(StoryTable, { sel, onSelect: setSel }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("h3", { className: "tl-sel-title", children: [
          String(sel).padStart(2, "0"),
          " \xB7 ",
          cases2026.find((c) => c.n === sel)?.title,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tl-sel-type", children: TYPE_LABEL[STORY_TYPE[sel]] })
        ] })
      ] }),
      !inStories && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(nu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "glance", children: [
          "At a glance: ",
          cases2026.length,
          " cases in 2026, evidence ",
          evMin,
          "/12 to ",
          evMax,
          "/12, ",
          promptsPublished,
          " with a published full prompt, ",
          deliberate,
          " with evidence of deliberate gate-lowering."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "feed-line", children: [
          "A running feed of 2026 AI-agent stories: ",
          cases2026.length,
          " tracked, newest ",
          shortDate(ranked[0].cs.date),
          ". Updated as new stories land. Last updated ",
          LAST_UPDATED,
          "."
        ] })
      ] }),
      !inStories && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("nav", { className: "tabbar", "aria-label": "Sections", children: METHOD_TABS.map(([id2, label]) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tab", "aria-pressed": tab === id2, onClick: () => setTab(id2), children: label }, id2)) }),
      tab === "score" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { id: "sec-01", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "01 Score a story", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
          "Score for the story selected above. Two meters compare how scary the story was made to sound with what the evidence actually supports; the gap between them is the hype score, and each story gets a verdict: Spam, Hype, Real risk, or Underplayed. Scores are editorial judgment, sourced line by line. ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "inline-link", onClick: () => setTab("rubric"), children: "How are these scores made?" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "story-date", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "story-date-k", children: "Happened" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "story-date-v", children: cs2.when }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "story-date-who", children: cs2.who }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "story-rank", children: [
            "Story ",
            rank,
            " of ",
            cards.length,
            " \xB7 newest first"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "meters", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "meter", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "meter-top", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "meter-k", children: "Headline fear" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "meter-v", children: [
                card.headline.v,
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-of", children: "/10" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "meter-bar", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "meter-fill fear", style: { width: card.headline.v * 10 + "%" } }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "meter-note", children: [
              card.headline.note,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: card.headline.src })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "meter", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "meter-top", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "meter-k", children: "Verified risk" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "meter-v", children: [
                card.verified.v,
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-of", children: "/10" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "meter-bar", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "meter-fill risk", style: { width: card.verified.v * 10 + "%" } }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "meter-note", children: [
              card.verified.note,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sources, { ids: card.verified.src })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "actual-risk", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "actual-risk-intro", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Actual risk, broken down" }),
            " \xB7 scenario severity, observed harm, future exposure. These are qualitative judgments, not a third meter or a probability."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dl", { className: "risk-grid", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RiskLine, { label: "If it happened for real", part: actualRisk[card.n].potential }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RiskLine, { label: "Harm observed here", part: actualRisk[card.n].observed }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RiskLine, { label: "Future harm chance", part: actualRisk[card.n].future }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "meter-verdict", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: verdictTone[card.verdict], children: card.verdict }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "meter-gap", children: gapText })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "verdict-note", children: card.verdictNote }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "summary", "aria-live": "polite", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "sum-cell", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-k", children: "Evidence" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "sum-v", children: [
              ev,
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-of", children: "/12" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "sum-cell", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-k", children: "Marketing signals" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "sum-v", children: [
              hy,
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-of", children: "/3" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "sum-read", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-k", children: "Reading" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-t", children: reading(ev, hy) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "sum-read", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-k", children: "Intent" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-t", children: card.intent })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "sum-read", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-k", children: "Outcome" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sum-t", children: card.outcome })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { sub: "Tap a criterion for the evidence and method", children: "Evidence criteria" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "crits", children: criteria.map((k2) => {
          const s = card.scores[k2.id];
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("details", { className: "crit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("summary", { className: "crit-head", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "crit-name", children: k2.name }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "dots", "aria-label": `${s.v} of 2`, children: [0, 1].map((i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "dot" + (i < s.v ? " on" : "") }, i)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "crit-level", children: k2.levels[s.v] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "crit-note", children: [
              s.note,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "method", children: [
                "Method: ",
                s.method
              ] })
            ] }),
            s.src.length ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "src-full", children: [
              "Sources: ",
              s.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react21.default.Fragment, { children: [
                i ? " \xB7 " : "",
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(je2, { href: S[id2].href, children: S[id2].label })
              ] }, id2))
            ] }) : null
          ] }, k2.id);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { sub: "Signals, not proof of motive", children: "Marketing signals" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "crits", children: hypeSignals.map((h) => {
          const x = card.hype[h.id];
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("details", { className: "crit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("summary", { className: "crit-head", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "crit-name", children: h.name }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: x.on ? "st-never-resolved" : "", children: x.on ? "Present" : "Not found" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "crit-note", children: x.note }),
            x.src.length ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "src-full", children: [
              "Sources: ",
              x.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react21.default.Fragment, { children: [
                i ? " \xB7 " : "",
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(je2, { href: S[id2].href, children: S[id2].label })
              ] }, id2))
            ] }) : null
          ] }, h.id);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "The story" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IncidentDiagram, { visual: incidentVisuals[card.n], number: card.n }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Chronology, sources and what happened next" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "items", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CaseItem, { c: cs2, inline: true }, cs2.n) })
      ] }) }) }),
      tab === "rubric" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { id: "sec-02", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "The rubric", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(nu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(mu, { children: "Three different questions: how loud is the claim, how strong is the evidence, and who benefits from the framing?" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Use this guide without choosing a story. A case applies the same questions to a specific event. A high evidence score does not mean the event is catastrophic; a marketing signal does not mean the event is fake." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Start with the two meters" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Headline fear (0\u201310)" }),
            " is an editorial reading of the public framing: how severe and urgent the story was made to sound. ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Verified risk (0\u201310)" }),
            " is an editorial reading of what the available evidence establishes about actual harm, scope and uncertainty. These are not measured probabilities or interchangeable with the evidence score below. A gap means the framing may outrun the proof, or the story may be quieter than the facts. There is no automatic verdict formula."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Imagine a fictional test where an agent changes a score inside a sealed simulation. If a headline says \u201CAI seized control of a company,\u201D that framing would rate high; if nobody outside the test was affected, verified risk would be lower. If an outside victim later confirms a real breach, that new evidence moves the risk reading. This is an example, not a case in the feed." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Actual risk has three parts, not one number" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "If it happened for real" }),
            " asks how serious the plausible outcome would be in a real deployment with relevant access. It is a conditional scenario, not a claim that this case reached that outcome. ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Harm observed here" }),
            " says what people or systems were actually affected, and marks allegations and lab-only reports as uncertain. ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Future harm chance" }),
            " weighs continuing exposure, fixes and recurrence evidence; without a measured base rate, we do not invent a percentage. We use Low, Moderate, High, Severe or Unknown, with a reason and sources for each part. Unknown means the record does not support a rating, not that the risk is zero."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            "This differs from ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "verified risk" }),
            ", the existing 0\u201310 editorial meter of what the present evidence supports about harm and scope, set next to headline fear to examine framing. The three actual-risk parts separate a potential scenario from observed harm and forward-looking uncertainty. A simulated grader hack can have a high-impact scenario but low observed harm and unknown future chance. None of these is the evidence score below."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Then ask how much you can check" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            "Six check
