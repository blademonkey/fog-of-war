RE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: "st-" + c.status.label.toLowerCase().replace(/ /g, "-"), children: c.status.label }),
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
  var RN14 = "Discoverability revision: the latest evidence diagram now appears at the top of the default story view, before the cover. A dedicated Incident visuals tab shows all 20 diagrams without opening case rows. The casebook diagrams remain inside each case.";
  var RN13 = "Private review: adds one sourced evidence diagram to each of 17 stories. Each shows the actors, three-stage sequence, boundary and stopping point, and labels reported or disputed steps. Policy statements, lawsuits and simulations are explicitly not depicted as proven breakouts.";
  var RN12 = "New UNCTADstat case: an independent researcher traced 16,500+ public-data API scans and multiple workarounds. Scored 6/12 for evidence and 0/3 for marketing signals. Attribution to OpenAI agents is likely, not confirmed by OpenAI or UNCTAD; no private-data breach or service harm is established. This behavior merits scrutiny, but the claim that agents hacked UN systems outruns the record.";
  var RN11 = "Adds a three-part actual-risk breakdown to every story: real-world severity if the behavior occurred, harm observed in this case, and future exposure. Uses qualitative levels instead of unsupported probabilities. Notes source roles and structural incentives, with cited evidence and confidence, without assigning outlet-wide bias scores.";
  var RN10 = "Flow revision. The rubric now stands alone: it defines each meter, the evidence score, marketing signals, intent, outcome, verdict labels and how to use them, with a fictional example rather than relying on Hugging Face. Each tab has a short purpose and a next-step link; the scorecard points readers to the guide. No case facts or scores changed.";
  var RN9 = "Daily update. OpenAI\u2019s new primary reports replace press-only descriptions in case 5: a DNS escape and a public GitHub token exposure despite two human interventions. Rescored it 1 to 4 of 12, with no third-party confirmation. Added the separate 53 user-image upload case at 3/12 and the Darktrace simulated-grader test at 2/12 with a clear product tie-in (1/3 marketing). Australia\u2019s AIHW probing is independently documented but its systems were not found compromised; the Medicare breach remains separate. Irregular confirmed the same test setup failure affected four labs. Neither vendor claims nor affected-party notifications equal verified breaches.";
  var RN8 = "Readability revision. A contents menu jumps to any section. Casebook, tactics, history, and score criteria now collapse to one-line summaries you tap to expand. Inline source lists are small numbered citation chips; full source names stay inside each opened item and in All sources. Added an at-a-glance line. Content is unchanged from v7, except the casebook intro count, which said eleven and now tracks the real number (14).";
  var RNOCT8 = "October 8: adds the ReliaQuest investigation of an agent-driven server takeover through an unauthenticated job endpoint: a documented real-world compromise with a high-confidence, unproven AI attribution and an explicit detection-product pitch. No existing cases changed.";
  var RNOCT7 = "October 7: adds the preliminary Amap agent-fleet analysis with unconfirmed provider attribution and no established breach. Corrects Anthropic\u2019s August discovery versus September disclosure of its fourth incident. Adds the separate UK public-data report with the government\u2019s no-breach statement and AISI\u2019s reported remediation as counter-evidence. No existing incident scores changed.";
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
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "fog-fact", children: "AI risk messaging index" }),
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
        /* @__
