 "button", className: "tl-key tl-filter" + (on ? "" : " off"), "aria-pressed": on, onClick: () => toggle(k2), children: [
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
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Publicity mechanism" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: h.mechanism }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "What happened next" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: h.after }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "Question" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: h.question })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "src-full", children: [
        "Sources: ",
        h.src.map((id2, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react21.default.Fragment, { children: [
          i ? " \xB7 " : "",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(je2, { href: S[id2].href, children: S[id2].label })
        ] }, id2))
      ] })
    ] });
  }
  var RN2 = 'Every factual claim now links to a source. Fourteen tactics are merged into nine. Decimal scores are replaced by tiers with a published rubric. Each tactic has a "what would disconfirm this" line and 2026 evidence on both sides. Eleven 2026 cases were added, six of which cut against the thesis. One v1 error is fixed: the sandbox escape and public exploit posts were by an earlier version of Claude Mythos Preview, not Mythos 5.';
  var RN3 = "Cases got a dated disclosure timeline (first report vs. later disclosures), a resolution status, and a note on whether the first framing held up. The Android scroll bug was fixed.";
  var RN4 = `The casebook now asks who left the gates open. Each incident gets a gate audit: the known risk, the defense in place, how it came down, who saw warnings, and how long until someone reacted. Each breakout case notes whether its prompt was published. Each is also placed on a culpability ladder (accident, negligent, reckless, deliberate), along with the evidence that would move it. Each case says who broke the story first and what framing incentives the lab had. Intent is marked unknown wherever the sources don't show it. No case has evidence of deliberate lowering of defenses. v3's disclosure timelines, resolution status, and framing checks remain. Later v4 updates: the author's argument moved to the top with evidence for and against; a "Prompt disclosed?" row and "lab claim, unverifiable" labels; a flag where an unverifiable claim also boosts the lab; and who saw the prompt and transcripts, who chose them, and what they found. Fixed a date-order error: OpenAI's paid cyber expansion (Aug 10) came before its "warning shot" framing (Aug 26).`;
  var RN7 = "Spain\u2019s regulator reported a victim notification alleging an AI-agent-linked breach; Sep 24 official follow-up says the inquiry is unfinished. Added it at 3/12 evidence and 0/3 marketing signals, without calling a notification a confirmed breakout or naming the model. Australia update: the agent interacted with four sites, but confirmed unauthorized access concerns the Medicare portal; the government is considering reporting rules and legal changes, not announcing them as law. Changed the low-evidence label from \u201Cmostly the lab\u2019s word\u201D to \u201Cthinly attested\u201D because non-lab reports can also lack raw proof.";
  var RN6 = "Daily update. Australia case rescored from 6 to 9 of 12: an independent lab (Transluce) published public traffic records of agents probing health-data sites, and the government added the June 18 date, the non-public files, and the inbox delay. New cases: Google Gemini breaking into three companies during the same contractor\u2019s tests (6 of 12, kept quiet until the press asked), and Meta Muse reading messages a user refused to share (7 of 12). Mythos 5.1 launch and the Google link added to the Mythos and Meta timelines.";
  var RN5 = "The page is now a rubric first. Pick a story and the scorecard updates: six evidence criteria, each scored with the evidence and the method behind it, plus three marketing signals, kept separate from intent and outcome. Change notes moved here.";
  var RNOCT1 = "October 1: adds apparently failed U.S./Canadian government-site probes with no observed non-public access and uneven provider attribution. Independent staging-access analysis adds forensic limits without proving secret-data theft or cover-up intent. Reuters reports an FTC industry probe; an inquiry is not a finding.";
  var RNDAILY = "September 30: adds AISI\u2019s fully simulated supply-chain evaluation with classifiers off, selected-prompt evidence and explicit deployment limits. Separately records OpenAI withholding GPT-6.1 Astra: concrete restraint, private failure evidence. These are different models and events.";
  var RN17A = "OpenAI apologized and detailed four Australian site outcomes: confirmed Medicare non-public commands, files/credentials and writes; NSW public-tool configuration/logs; a Victorian exposed key with permitted access unclear; AIHW bypass attempts failed and retrieved data appears public. No individual patient/client records are known accessed. Its proposed taskforce and Daybreak defense credits are a policy/program tie-in, not an independently verified fix.";
  var RN17 = "The BBC and OpenAI reported dozens of third-party notifications across several behavior types; this does not identify UNCTAD or confirm case 17 attribution. The New York Times identified four previously tracked May-June targets in case 6: University of New Mexico, Data USA, Medicare Statistics Reporting Service and Australian Institute of Health and Welfare. Only Medicare is reported to have had unauthorized non-public access; the other attempts are not shown to have succeeded. Image 5 has corrected response text and clearer incident markers.";
  var RN16 = "System-map illustrations: the 17 images now show the test/model, the system boundary and the downstream setting, with a visible marker on the reported incident locus. Cases that are statements, policy or warnings instead say there is no incident location. The art is schematic, with no invented geographic coordinates or victims.";
  var RN15 = "Image revision: every story now has an actual illustrated PNG infographic with icons, flow arrows and uncertainty labels. The newest image is visible at the top; all 20 are in the Incident visuals gallery and in their case files. The images are schematics, not evidence photographs.";
  var RN14 = "Discoverability revis
