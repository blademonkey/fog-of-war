nes each meter, the evidence score, marketing signals, intent, outcome, verdict labels and how to use them, with a fictional example rather than relying on Hugging Face. Each tab has a short purpose and a next-step link; the scorecard points readers to the guide. No case facts or scores changed.";
  var RN9 = "Daily update. OpenAI\u2019s new primary reports replace press-only descriptions in case 5: a DNS escape and a public GitHub token exposure despite two human interventions. Rescored it 1 to 4 of 12, with no third-party confirmation. Added the separate 53 user-image upload case at 3/12 and the Darktrace simulated-grader test at 2/12 with a clear product tie-in (1/3 marketing). Australia\u2019s AIHW probing is independently documented but its systems were not found compromised; the Medicare breach remains separate. Irregular confirmed the same test setup failure affected four labs. Neither vendor claims nor affected-party notifications equal verified breaches.";
  var RN8 = "Readability revision. A contents menu jumps to any section. Casebook, tactics, history, and score criteria now collapse to one-line summaries you tap to expand. Inline source lists are small numbered citation chips; full source names stay inside each opened item and in All sources. Added an at-a-glance line. Content is unchanged from v7, except the casebook intro count, which said eleven and now tracks the real number (14).";
  var TITLE = "Fog of War";
  var COVER_ALT = "Illustration: a strategy map with four flagged team routes, half-covered by fog, a lighthouse beam clearing a path through it";
  var COVER_CAPTION = "Illustration, not an incident image. Four teams chart routes through the same fog of marketing; the beam is the evidence that clears it.";
  var TABS = [
    ["score", "Score a story"],
    ["diagrams", "Incident visuals"],
    ["rubric", "The rubric"],
    ["argument", "The argument"],
    ["cases", "Casebook"],
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
    const card = cards.find((c) => String(c.n) === pick) ?? cards[0];
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
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        uu,
        {
          title: TITLE,
          fact: "AI risk messaging index \xB7 v17 private review \xB7 September 27, 2026",
          intro: "When safety warnings also sell the product. A rubric for telling hype, fear, and marketing apart from what actually happened. The unit of measure is the evidence each story provides and the method behind it."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "visual-feature", "aria-label": "Latest incident visual", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "Incident visuals" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "Start with the newest story. Each illustrated image shows the system or setting and marks where the reported incident occurred, or says when there was no incident. These are not imagined scenes. All 17 are in the Incident visuals tab." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "picker", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "picker-label", htmlFor: "visual-story", children: "Show one of the five latest stories" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "picker-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("select", { id: "visual-story", className: "picker-select", value: pick, onChange: (e2) => setPick(e2.target.value), children: latest5.map(({ cd, cs: cs3 }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: String(cd.n), children: shortDate(cs3.date) + " \xB7 " + cd.label }, cd.n)) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IncidentDiagram, { visual: incidentVisuals[card.n], number: card.n }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "visual-all", onClick: () => {
          setTab("diagrams");
          setTimeout(() => document.getElementById("sec-diagrams")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
        }, children: "See all 17 diagrams \u2193" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Ct, { label: "Cover", items: [{ src: cover_default, alt: COVER_ALT }] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Lu, { children: COVER_CAPTION }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(nu, { children: [
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
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("nav", { className: "tabbar", "aria-label": "Sections", children: TABS.map(([id2, label]) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "tab", "aria-pressed": tab === id2, onClick: () => setTab(id2), children: label }, id2)) }),
      tab === "diagrams" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { id: "sec-diagrams", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "Incident visuals", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "All 17 stories, in case-number order. These illustrated system maps show the actor or model, the boundary and the downstream setting. A pin marks the reported incident point when one exists. Reported, disputed and simulated steps stay labeled in the image; source chips under it open the evidence." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "visual-gallery", children: cases2026.map((c) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "visual-gallery-case", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("h3", { children: [
            String(c.n).padStart(2, "0"),
            " \xB7 ",
            c.title
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IncidentDiagram, { visual: incidentVisuals[c.n], number: c.n })
        ] }, c.n)) })
      ] }) }),
      tab === "score" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { id: "sec-01", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "01 Score a story", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
          "Pick one of the five latest stories. Two meters compare how scary the story was made to sound with what the evidence actually supports; the gap between them is the hype score, and each story gets a verdict: Spam, Hype, Real risk, or Underplayed. Scores are editorial judgment, sourced line by line. Older stories are in the Casebook. ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "inline-link", onClick: () => setTab("rubric"), children: "How are these scores made?" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "picker", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "picker-label", htmlFor: "story", children: "Story" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "picker-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("select", { id: "story", className: "picker-select", value: pick, onChange: (e2) => setPick(e2.target.value), children: latest5.map(({ cd, cs: cs3 }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: String(cd.n), children: shortDate(cs3.date) + " \xB7 " + cd.label }, cd.n)) }) })
        ] }),
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
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IncidentDiagram, { visual: incidentVisuals[card.n], number: card.n }),
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
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Full case file" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "items", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CaseItem, { c: cs2 }) })
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
            