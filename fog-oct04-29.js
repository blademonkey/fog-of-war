sxs)(nu, { children: [
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
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(nu, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "All 20 stories, in case-number order. These illustrated system maps show the actor or model, the boundary and the downstream setting. A pin marks the reported incident point when one exists. Reported, disputed and simulated steps stay labeled in the image; source chips under it open the evidence." }) }),
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
            ", the existing 0\u201310 editorial meter of what the present evidence supports about harm and scope, set next to headline fear to examine framing. The three actual-risk parts separate a potential scenario from observed harm and forward-looking uncertainty. A simulated grader hack can have a high-impact scenario but low observed harm and unknown future chance. None of these is the evidence score below."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Then ask how much you can check" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            "Six checks below each score 0, 1 or 2. Their sum is the ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "evidence score out of 12" }),
            ". The checks ask who broke the story, whether raw material is public, who reviewed it, whether anyone outside confirms harm, whether later facts uphold it, and whether a fix is verified. They measure support for the account, not how dangerous the technology is. Zero can mean \u201Cunknown yet,\u201D not \u201Cfalse.\u201D The underlying method and sources appear when you open a criterion on a case scorecard."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(du, { children: criteria.map((k2, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(fu, { number: i + 1, name: k2.name, detail: `${k2.unit}. 0: ${k2.levels[0]}. 1: ${k2.levels[1]}. 2: ${k2.levels[2]}.` }, k2.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(nu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Reading: 8\u201312 is \u201Cwell attested,\u201D 5\u20137 \u201Cpartly attested,\u201D and 0\u20134 \u201Cthinly attested.\u201D A detailed lab report can earn points, but an outside confirmation or independently checkable record carries more weight. An allegation reported by a regulator is not the same as a completed finding." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Keep marketing separate" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            "The ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "marketing signals out of 3" }),
            " count whether a launch or policy push is tied to the warning, whether danger doubles as a capability boast, and whether an unverifiable lab explanation helps its image. A signal is a reason to ask who benefits, not proof of motive. Absence of signals is not proof that a company acted well."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(du, { children: hypeSignals.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(fu, { number: i + 1, name: h.name, detail: h.test }, h.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(nu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(iu, { children: "Finish with intent, outcome and verdict" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Intent" }),
            " says what, if anything, is known about why an actor acted. It stays \u201Cunknown\u201D when sources cannot show it. ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "Outcome" }),
            " distinguishes a simulation, an attempted access, a confirmed breach and a verified fix. Do not turn a model\u2019s behavior into a claim about its maker\u2019s intent."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            "The final ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "verdict" }),
            " is an editorial shorthand, not a mathematical output. \u201CSpam\u201D is noisy repetition with little new evidence; \u201CHype\u201D is framing that outruns proof; \u201CReal risk\u201D is a substantive danger or harm, with its evidence limits stated; \u201CUnderplayed\u201D is a case whose facts are stronger than its public framing. A thinly attested risk can still be concerning, but the uncertainty must be visible beside the label."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(cu, { children: [
            "To check our judgment, open a case\u2019s sources and compare its first report with later disclosures. Ask what would make the score move. ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "inline-link", onClick: () => setTab("score"), children: "Try the latest five" }),
            " or ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "inline-link", onClick: () => setTab("cases"), children: "browse all cases" }),
            "."
          ] })
        ] })
      ] }) }) }),
      tab === "argument" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { id: "sec-03", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(su, { label: "The argument", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(nu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "This tab tests the page\u2019s central thesis, not a case score. Read the evidence for and against before drawing a motive claim." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(mu, { children: "The
