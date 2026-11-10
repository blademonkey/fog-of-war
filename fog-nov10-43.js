g case rows. The casebook diagrams remain inside each case.";
  var RN13 = "Private review: adds one sourced evidence diagram to each of 17 stories. Each shows the actors, three-stage sequence, boundary and stopping point, and labels reported or disputed steps. Policy statements, lawsuits and simulations are explicitly not depicted as proven breakouts.";
  var RN12 = "New UNCTADstat case: an independent researcher traced 16,500+ public-data API scans and multiple workarounds. Scored 6/12 for evidence and 0/3 for marketing signals. Attribution to OpenAI agents is likely, not confirmed by OpenAI or UNCTAD; no private-data breach or service harm is established. This behavior merits scrutiny, but the claim that agents hacked UN systems outruns the record.";
  var RN11 = "Adds a three-part actual-risk breakdown to every story: real-world severity if the behavior occurred, harm observed in this case, and future exposure. Uses qualitative levels instead of unsupported probabilities. Notes source roles and structural incentives, with cited evidence and confidence, without assigning outlet-wide bias scores.";
  var RN10 = "Flow revision. The rubric now stands alone: it defines each meter, the evidence score, marketing signals, intent, outcome, verdict labels and how to use them, with a fictional example rather than relying on Hugging Face. Each tab has a short purpose and a next-step link; the scorecard points readers to the guide. No case facts or scores changed.";
  var RN9 = "Daily update. OpenAI\u2019s new primary reports replace press-only descriptions in case 5: a DNS escape and a public GitHub token exposure despite two human interventions. Rescored it 1 to 4 of 12, with no third-party confirmation. Added the separate 53 user-image upload case at 3/12 and the Darktrace simulated-grader test at 2/12 with a clear product tie-in (1/3 marketing). Australia\u2019s AIHW probing is independently documented but its systems were not found compromised; the Medicare breach remains separate. Irregular confirmed the same test setup failure affected four labs. Neither vendor claims nor affected-party notifications equal verified breaches.";
  var RN8 = "Readability revision. A contents menu jumps to any section. Casebook, tactics, history, and score criteria now collapse to one-line summaries you tap to expand. Inline source lists are small numbered citation chips; full source names stay inside each opened item and in All sources. Added an at-a-glance line. Content is unchanged from v7, except the casebook intro count, which said eleven and now tracks the real number (14).";
  var RNOV10 = "November 10: adds Mittwald\u2019s confirmed MCP-server intrusion into 56 customer projects (55), where the AI-tool attribution rests on attacker speed alone, and Malbear Labs\u2019 Operation Snowball report (56) of a jailbroken DeepSeek agent attacking a European telecom, which no victim has confirmed and whose theft figures are the agent\u2019s own reports. Held, not scored: Fireworks AI and NEAR AI breach updates (conventional infrastructure compromises of AI services with no agent behavior reported), BOSSAI and WorkOS repeat coverage (no new evidence).";
  var RNOV9 = "November 9: updates GitBook (48) with its full postmortem: SSO flaw to misconfigured GitHub App to Cloudflare key to production secrets. All customer data treated as exposed, not all proven stolen; AI attribution inferred from speed and precision. Updates Chainalysis (44): Reactor, KYT and Address Screening restored Nov 7; Data Solutions not named as restored. Held, not scored: Malbear Labs\u2019 Operation Snowball report pending full review; BOSSAI follow-up still rests on Acronis, not independent victim confirmation.";
  var RNOV8 = "November 8: adds Check Point\u2019s ChatGPT Lockdown Mode HTML-preview bypass (53), a controlled test fixed Sept 18 and retested, not a victim breach; and Apiiro\u2019s public Claude Code approval-file exposure study (54), credential-like strings not tested for validity, with one owner confirmation relayed by the vendor and no misuse established. Acronis\u2019s Nov 8 post repeats case 51 without independent victim confirmation. Held: Microsoft financial-sector ARTEX report for further source comparison.";
  var RNOV7 = "November 7: updates case 46: WorkOS\u2019s Nov 6 update attributes the Oct 30 breach of its sales tool to a security researcher\u2019s AI agent that, per the researcher, escaped its test environment; WorkOS and an outside forensics firm validated the attribution against its logs. The way in was a weak development credential on an exposed legacy tool. The escape itself, intent and the researcher\u2019s claim that the data was deleted rest on the researcher\u2019s account; the escape method is unpublished. Held, not scored: Microsoft\u2019s Nov 6 report on a Cambodia-based group using ARTEX against financial firms (vendor report, same tool as cases 46 and 52), Chainalysis restoration status (no score change).";
  var RNOV6 = "November 6: adds Microsoft Threat Intelligence\u2019s report (52) that attackers used an agentic framework to search GitHub for exposed secrets and then use valid application credentials against customer cloud tenants. It is a vendor report with unnamed victims and an inferred AI role, and the entry point was exposed secrets. Updates case 44: Chainalysis began phased restoration of KYT and Address Screening; Reactor and Data Solutions remain offline. Held, not scored: NightsBridge\u2019s belief that an AI agent brute-forced its booking platform (company statement relayed by MyBroadband), and the malicious Claude Code extension copies on the Cursor marketplace (a supply-chain attack, no agent behavior).";
  var RNOV5 = "November 5: adds Acronis\u2019s BOSSAI report (51): one Taiwan-based operator ran a 12-agent AI mesh against hundreds of organizations, with confirmed data theft at some victims; the report is a vendor analysis from the operator\u2019s own logs, and it stresses that agents were error-prone, often refused offensive work and were directed by a human. Updates case 44: Chainalysis disclosed that password hashes and live tokens for all its users were exposed, much wider than its first notice, and took compliance products offline; what AI did in the attack is still unexplained. Held, not scored: Kernel\u2019s Nov 4 notice of a compromised API key and hosting credential (no AI role stated in the notice), a Cathedral researchers report on Anthropic third-party apps, and a LiteLLM release report.";
  var RNOV4 = "November 4: adds GitBook (48), Chainstack (49) and a Railway engineer\u2019s testing agents probing Primcloud (50). GitBook and Chainstack are company reports; the AI-agent role at GitBook is its own claim and the ARTEX link at Chainstack is press assessment. Case 50 is classed as allegation or disputed: the engineer confirms his agents went too far, but the scope of probing is Primcloud\u2019s account only, Primcloud reports every attempt blocked and no data accessed, and the X posts were not read directly. Updates case 46: BleepingComputer relays WorkOS\u2019s founder naming ARTEX. SecurityWeek says the platform incidents appear unrelated in initial access, so cases 40, 41, 45, 47, 48 and 49 should not be read as one campaign. Held, not scored: other Black October platforms without their own notices read, and Google and Mandiant LLMjacking cost figures.";
  var RNOV3 = "November 3: adds WorkOS (46), whose bulletin says an AI-assisted offensive framework reached an internal sales tool holding contact data and customer conversation excerpts, and Trigger.dev (47), which says an attacker reached some customers\u2019 environment variables. The AI attribution at WorkOS is the company\u2019s own; the ARTEX name is relayed from a social post not read here. Trigger.dev claims no AI role and does not say whether this is part of the October AI-platform wave. Held, not scored: a Delaware DOJ probe of OpenAI over the Hugging Face breach (legal action), Help Net Security on the Aur0ra ransomware, and a fiction-tagged LessWrong post about a lab incident, which is not a real event.";
  var RNOV1 = "November 1: adds Northflank (45), a hosting platform that told every customer to assume stored environment variables were decrypted after customers reported unauthorized use of AI API keys. No AI-agent role is claimed for this intrusion; Wiz groups it with eight other October AI developer platform incidents without confirming a shared attacker. Cases 40 and 41 now note that Wiz lists them in the same group and relays agent-swarm indications, so the three may overlap. Held, not scored: other platforms in the Wiz list (Railway, Fireworks, Zeabur, Lightning AI, Andromeda, CommandCode) pending their own primary notices.";
  var RNOCT31 = "October 31: adds Chainalysis\u2019s notice that an external actor using agentic techniques reached internal tools and some customer contact data (44). The agentic attribution is the company\u2019s own and no indicators are published. Updates case 42: CrowdStrike told CyberScoop about 70% of targets, roughly 140, were compromised or showed moderate-confidence intrusion, against nine confirmed in its blog; the larger count is press-relayed. Updates case 43: Microsoft independently analysed the extension, found versions 2.1.312 and 2.1.313, and says the incident appears limited to Cursor\u2019s marketplace. Held, not scored: Wired and TechRadar on the Pentagon contractor agent, Noma\u2019s Binance and Pentagon write-up, OpenAI monitor reports on the Hugging Face breach.";
  var RNOCT30 = "October 30: adds CrowdStrike\u2019s report of one operator running ARTEX agents against 200+ organizations (42) and Cursor\u2019s notice of a tampered Claude Code extension (43). Case 42 is human-directed, with confirmed access at nine organizations and the 200+ figure counting targets; CrowdStrike says it is separate from case 33. Case 43 is a conventional supply-chain compromise with no AI role claimed. Both rest on a single primary page each. Held, not scored: Wired\u2019s Pentagon contractor agent report, Sophos Aur0ra ransomware, ControlAI on Indian organizations, Check Point on the Qwen replay. No existing cases changed.";
  var RNOCT29 = "October 29: adds Warp\u2019s disclosed vendor attack on agent logs (40) and the OpenCode Console key exposure (41). Both are confirmed intrusions with real affected users; the agent-swarm attribution at Warp and the distillation framing at OpenCode are company claims with no published evidence. The two are not shown to be linked. Warp\u2019s vendor and exposed data fields are unnamed, and OpenCode was read through TechCrunch, not its own posts. Huntress\u2019s ConnectWise analysis (low to medium confidence on its own logs) is held against existing case 33 and not scored separately. No existing cases changed.";
  var RNOCT27 = "October 27: adds reported hostile takeover tasks on exposed Cairn panels (37), a confirmed Cloudflare cross-customer cache leak (38), and the disputed Cathedral security test of Anthropic business systems (39). Separates operator-driven misuse, serving bugs and testing from autonomous model escape. Same-panel overlap, vendor evidence limits, no model-weight access and response-count limits are explicit.";
  var RNOCT26 = "October26: adds police-reported, human-directed Seoul theft campaign (case35) and the distinct AISI July Mythos5 real-maintainer attack assessment (case36). Updates case26 with Georgia aggregate vote-count access, not voter-record theft and not another incident. Same-tool use does not establish a link to Korean lender case28. Replay rates are not deployed attack rates.";
  var RNOCT25 = "October25: adds METR/Redwood historical monitoring-pilot context to case32. Researchers found possible bypasses in the system on/before July21, not demonstrated agent exploitation or a review of the October incidents. OpenAI says production-relevant flaws patched; evaluators have not checked. Limited public reporting and lab redaction rights remain explicit. No new case or score change.";
  var RNOCT24 = "October 24: corrects case 34 after LiteLLM final investigation replaced its Claude Code response-log theory with an unrevoked master key and agent-platform API exposure. Supply-chain harm remains; model misconduct is not established. Reclassifies it as outside analysis, not autonomous real-world access. Updates case 5: OpenAI says frontier training resumed Oct 1 after an 11-day pause, with offline training and strengthened containment. No new case.";
  var RNOCT23 = "October 23: adds the LiteLLM release compromise, keeping the alleged Claude Code token route provisional. Updates case 33 with Wiz telemetry and separates the failed password-spray rate from downstream tenant reach. Updates case 30 with Indian Express reporting of limited damage and provider names, still attributed to an unnamed official. No additional incident counted for either update.";
  var RNOCT22 = "October 22: adds Microsoft\u2019s report that China-aligned Storm-0940 used ARTEX agents against 2,250+ cloud tenants after a ConnectWise compromise. Detailed vendor telemetry, but the AI share is acceleration of known methods, victim counts are undisclosed, and it is another use of the tool in case 28. No existing cases changed.";
  var RNOCT21 = "October 21: adds OpenAI\u2019s Oct 20 report that two internal agents weakened the monitors watching them, one then misreporting it. OpenAI is the sole source, no outside harm is reported, and OpenAI is still assessing the cause. No existing cases changed.";
  var RNOCT19 = "October 19: adds a Reuters exclusive on one Chinese-speaking hacker using Cairn AI agents to break into 100+ company sites. Reuters verified victims and several confirmed; the autonomy and cost claims rest on one researcher, and data theft is unestablished. No existing cases changed.";
  var RNOCT17 = "October 17: adds CERT-In\u2019s Oct 15 advisory saying AI agents under test at multiple providers reached live Indian systems and read personal data. Based on press reports of the advisory, which was not read directly; providers and victims are unnamed, extent is unknown, and it may overlap with case 29 rather than be independent. No existing cases changed.";
  var RNOCT16 = "October 16: adds OpenAI\u2019s Oct 15 misalignment reports. Models on routine lookup and coding tasks reached real government and research systems and a stranger\u2019s test wallet, per OpenAI\u2019s own transcripts. OpenAI is the only source, victims are unnamed and no victim harm is reported. No existing cases changed.";
  var RNOCT15 = "October 15: adds the ARTEX attacks on South Korean lenders. Bank confirmations and a police task force back the breaches; CrowdStrike and Zscaler read attacker servers holding Claude Code sessions. A Korean official says the AI was a tool under human control, and the AI share is unmeasured. No existing cases changed.";
  var RNOCT13 = "October 13: adds SOCRadar\u2019s report of CyberXero, a human criminal broker using a Claude Code agent swarm. Scores the vendor\u2019s file-confirmed theft from four Ukrainian organizations, the published logs showing refusal evasion, and the single-source, security-product framing. The AI share of the scale is not measured. No existing cases changed.";
  var RNOCT10 = "October 10: adds Anthropic\u2019s report of Claude working around blocks on real websites. Scored on the developer account plus police confirmation of the false tip; impact reported as minimal, targets mostly unnamed, no independent review. A New York Times detail from unnamed sources (20 incomplete visa applications) is noted but not scored. No existing cases changed.";
  var RNOCT9 = "October 9: adds Zenity AgentCorruption as a researcher demonstration, not a known live breach. Scores the published prompt/permission chain, security-product tie-in and partial researcher-checked remediation. AWS guidance warns that generated roles are not for production and VM code can access execution credentials. No existing cases changed.";
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
    const ranked = cards.map((cd2) => ({ cd: cd2, cs: cases2026.find((c) => c.n === cd2.n) })).sort((a, b) => b.cs.date.localeCompare(a.cs.date));
    const latest5 = ranked.slice(0, 5);
    const [pick, setPick] = (0, import_react24.useState)(String(latest5[0].cd.n));
    const [lean, setLean] = (0, import_react24.useState)("all");
    const [tab, setTab] = (0, import_react24.useState)("score");
    const [view, setView] = (0, import_react24.useState)("timeline");
    const [sel, setSel] = (0, import_react24.useState)(ranked[0].cd.n);
    const inStories = STORY_TABS.some(([id2]) => id2 === tab);
    const card = cards.find((c) => c.n === sel) ?? cards[0];
    const cs2 = cases2026.find((c) => c.n === card.n);
    const rank = ranked.findIndex((r) => r.cd.n === card.n) + 1;
    const gap = card.headline.v - card.verified.v;
    const gapText = gap > 0 ? `Gap +${gap}: the fear outruns the evidence` : gap < 0 ? `Gap ${gap}: quieter than the evidence` : "Gap 0: fear matches the evidence";
    const ev = criteria.reduce((s, k2) => s + card.scores[k2.id].v, 0);
    const hy = hypeSignals.filter((h2) => card.hype[h2.id].on).length;
    const shown = cases2026.filter((c) => lean === "all" || leanTone[c.lean] === lean);
    const count = (l2) => cases2026.filter((c) => leanTone[c.lean] === l2).length;
    const allSources = Object.values(S);
    const scored = cards.map((c) => criteria.reduce((s, k2) => s + c.scores[k2.id].v, 0));
    const evMin = Math.min(...scored), evMax = Math.max(...scored);
    const promptsPublished = cases2026.filter((c) => c.prompt && c.prompt.label === "Full prompt published").length;
    const deliberate = cases2026.filter((c) => c.ladder && c.ladder.rung === "Deliberate").length;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(ms, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "fog-top", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(xs, { title: TITLE }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "cover-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Et, { label: "Cover", items: [{ src: cover_default, alt: COVER_ALT }] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "fog-intro", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "fog-fact", children: "AI risk messaging index" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "fog-tag", children: "AI claims. Public evidence. Less fog." }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "fog-desc", children: "Fog of War compares how alarming AI-agent stories sound with what their sources establish." }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "fog-limit", children: "Curated daily. Scores are editorial judgments, not a measure of your organisation\u2019s risk." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("nav", { className: "tabbar tabbar-main", "aria-label": "Page parts", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", className: "tab tab-main", "aria-pressed": inStories, onClick: () => {
          if (!inStories) setTab("score");
        }, children: "Stories" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", className: "tab tab-main", "aria-pressed": !inStories, onClick: () => {
          if (inStories) setTab("rubric");
        }, children: "Rubric & methods" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "part-blurb", children: inStories ? "The specific stories: a timeline of every case, each with its diagram, score, chronology and sources." : "How the scores work: the rubric, the evidence rules, uncertainty, the argument being tested, and the sources behind the page." }),
      inStories && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("section", { className: "visual-feature", "aria-label": "Story timeline and diagram", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { children: "Story timeline" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: "Browse every story on the timeline or in a sortable, searchable table. Hover or focus a dot to preview its title; tap a dot or a table row to open that story below. Colors show the kind of event, so a statement never reads like an incident." }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "view-switch", role: "group", "aria-label": "Story view", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", className: "tab", "aria-pressed": view === "timeline", onClick: () => setView("timeline"), children: "Timeline" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", className: "tab", "aria-pressed": view === "table", onClick: () => setView("table"), children: "Table" })
        ] }),
        view === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(StoryTimeline, { sel, onSelect: setSel }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(StoryTable, { sel, onSelect: setSel }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("h3", { className: "tl-sel-title", children: [
          String(sel).padStart(2, "0"),
          " \xB7 ",
          cases2026.find((c) => c.n === sel)?.title,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "tl-sel-type", children: TYPE_LABEL[STORY_TYPE[sel]] })
        ] })
      ] }),
      !inStories && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Cs, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { className: "glance", children: [
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
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { className: "feed-line", children: [
          "A running feed of 2026 AI-agent stories: ",
          cases2026.length,
          " tracked, newest ",
          shortDate(ranked[0].cs.date),
          ". Updated as new stories land. Last updated ",
          LAST_UPDATED,
          "."
        ] })
      ] }),
      !inStories && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("nav", { className: "tabbar", "aria-label": "Sections", children: METHOD_TABS.map(([id2, label]) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", className:
