nefit" }),
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
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { href: incidentImages[number], target: "_blank", rel: "noopener noreferrer", "aria-label": `Open full-size illustrated diagram for story ${number}`, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: incidentImages[number], alt: `Illustrated three-stage flow for story ${number}: ${visual.stages.map((s) => `${s.actor}: ${s.action} (${s.kind === "confirmed" ? "documented" : s.kind === "disputed" ? "disputed" : "reported"})`).join("; ")}. Boundary: ${visual.boundary}. Evidence limit: ${visual.limit}`, loading: number === 17 ? "eager" : "lazy" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("figcaption", { children: [
        "Tap the image to enlarge. Illustrated diagram, not a scene reconstruction. ",
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
  function CaseItem({ c }) {
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
      visual ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IncidentDiagram, { visual, number: c.n }) : null,
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
        cd ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
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
        risk ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
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
  var RN17A = "OpenAI apologized and detailed four Australian site outcomes: confirmed Medicare non-public commands, files/credentials and writes; NSW public-tool configuration/logs; a Victorian exposed key with permitted access unclear; AIHW bypass attempts failed and retrieved data appears public. No individual patient/client records are known accessed. Its proposed taskforce and Daybreak defense credits are a policy/program tie-in, not an independently verified fix.";
  var RN17 = "The BBC and OpenAI reported dozens of third-party notifications across several behavior types; this does not identify UNCTAD or confirm case 17 attribution. The New York Times identified four previously tracked May-June targets in case 6: University of New Mexico, Data USA, Medicare Statistics Reporting Service and Australian Institute of Health and Welfare. Only Medicare is reported to have had unauthorized non-public access; the other attempts are not shown to have succeeded. Image 5 has corrected response text and clearer incident markers.";
  var RN16 = "System-map illustrations: the 17 images now show the test/model, the system boundary and the downstream setting, with a visible marker on the reported incident locus. Cases that are statements, policy or warnings instead say there is no incident location. The art is schematic, with no invented geographic coordinates or victims.";
  var RN15 = "Image revision: every story now has an actual illustrated PNG infographic with icons, flow arrows and uncertainty labels. The newest image is visible at the top; all 17 are in the Incident visuals gallery and in their case files. The images are schematics, not evidence photographs.";
  var RN14 = "Discoverability revision: the latest evidence diagram now appears at the top of the default story view, before the cover. A dedicated Incident visuals tab shows all 17 diagrams without opening case rows. The casebook diagrams remain inside each case.";
  var RN13 = "Private review: adds one sourced evidence diagram to each of 17 stories. Each shows the actors, three-stage sequence, boundary and stopping point, and labels reported or disputed steps. Policy statements, lawsuits and simulations are explicitly not depicted as proven breakouts.";
  var RN12 = "New UNCTADstat case: an independent researcher traced 16,500+ public-data API scans and multiple workarounds. Scored 6/12 for evidence and 0/3 for marketing signals. Attribution to OpenAI agents is likely, not confirmed by OpenAI or UNCTAD; no private-data breach or service harm is established. This behavior merits scrutiny, but the claim that agents hacked UN systems outruns the record.";
  var RN11 = "Adds a three-part actual-risk breakdown to every story: real-world severity if the behavior occurred, harm observed in this case, and future exposure. Uses qualitative levels instead of unsupported probabilities. Notes source roles and structural incentives, with cited evidence and confidence, without assigning outlet-wide bias scores.";
  var RN10 = "Flow revision. The rubric now stands alone: it defines each meter, the evidence score, marketing