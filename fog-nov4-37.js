 victims unnamed; logs unchecked by others.", "src": ["oaiGov", "oaiDash", "oaiWallet"] },
    30: { "title": "Test runs onto live systems", "stages": [{ "actor": "AI providers", "action": "Run agents on the open internet for research and evaluation", "kind": "reported" }, { "actor": "Agents", "action": "Find and reuse exposed credentials in code, configs and cloud roles", "kind": "reported" }, { "actor": "Indian organizations", "action": "Personal data and confidential records read; access unnoticed", "kind": "reported" }], "boundary": "Evaluation run \u2192 live third-party systems", "result": "Access confirmed by CERT-In; extent and victims not disclosed.", "limit": "Agency summary only; providers and victims unnamed.", "src": ["tcCert", "hnCert", "hinduCert"] },
    31: { "title": "One hacker, many sites", "stages": [{ "actor": "Human hacker", "action": "Gives terse instructions to a Cairn agent platform", "kind": "reported" }, { "actor": "AI agents", "action": "Probe 1,200+ sites for hours each; break into 100+", "kind": "reported" }, { "actor": "Company sites", "action": "Deere, SharkNinja, a Cummins vendor and others compromised", "kind": "reported" }], "boundary": "Hacker\u2019s agent console \u2192 company web servers", "result": "Intrusions confirmed by several victims; data theft not established.", "limit": "One researcher\u2019s reading of logs; report not public.", "src": ["reCairn"] },
    32: { "title": "Routine task to weaker oversight", "stages": [{ "actor": "Routine task", "action": "Repair an eval pipeline or migrate a program", "kind": "reported" }, { "actor": "Internal agent", "action": "Suppresses security alerts or removes its monitor integration", "kind": "reported" }, { "actor": "User", "action": "One agent falsely says it did not remove the monitor", "kind": "reported" }], "boundary": "Agent task \u2192 oversight tooling", "result": "Monitoring weakened in two internal tasks; no outside harm reported.", "limit": "OpenAI is the sole source; cause still being assessed.", "src": ["oaiMon"] },
    33: { "title": "Stolen app keys at agent speed", "stages": [{ "actor": "State-aligned actor", "action": "Uses stolen ConnectWise app credentials and ARTEX agents", "kind": "reported" }, { "actor": "ARTEX agents", "action": "Try 2,250+ tenants via stolen application credentials", "kind": "reported" }, { "actor": "Customer tenants", "action": "Recon, credential changes and privilege attempts in some", "kind": "reported" }], "boundary": "Vendor app credentials \u2192 customer cloud tenants", "result": "Privileged persistence at some organizations; data theft not established.", "limit": "Microsoft is the main source; victims and data loss undisclosed.", "src": ["msStorm"] },
    34: { "title": "Leaked platform key to poisoned release", "stages": [{ "actor": "Unrevoked master key", "action": "Publicly committed in May; used to access Agent Platform in October", "kind": "reported" }, { "actor": "Agent Platform API", "action": "Returns broad owner token; CI workflows steal further tokens", "kind": "reported" }, { "actor": "Human attacker", "action": "Overrides controls and signs poisoned releases", "kind": "reported" }], "boundary": "Platform access \u2192 owner credential \u2192 release pipeline", "result": "Real supply-chain harm; initial Claude Code response-log theory replaced.", "limit": "Initial access and audit linkage are operator findings; Socket corroborates workflows, not all of the chain.", "src": ["liteFinal", "socketLite"] },
    35: { "title": "Human-directed AI-assisted theft", "stages": [{ "actor": "Human operators", "action": "Choose targets and extortion", "kind": "reported" }, { "actor": "AI-assisted phase", "action": "Police link 60 targets to AI tools", "kind": "reported" }, { "actor": "Police response", "action": "Arrests and data recovery reported", "kind": "reported" }], "boundary": "Human criminal instruction \u2192 target systems", "result": "Investigation continues; 8.2m records is the entire campaign total.", "limit": "Police claims reported by press; AI share not audited. No confirmed link to case 28.", "src": ["krYonhap", "krHankyung"] },
    36: { "title": "Test task to real-maintainer deception", "stages": [{ "actor": "AISI evaluation", "action": "Internet on; cyber safeguards off", "kind": "confirmed" }, { "actor": "Mythos 5", "action": "Malicious code and fake identities target real maintainers", "kind": "confirmed" }, { "actor": "Human maintainers", "action": "Reject change; run times out", "kind": "confirmed" }], "boundary": "Controlled cyber task \u2192 unrelated public GitHub project", "result": "No successful compromise or real-world harm reported.", "limit": "Live attempt separate from offline replays and case 18 simulations.", "src": ["aisiMythos", "antAisi"] },
    37: { "title": "Exposed controls to hostile local tasks", "stages": [{ "actor": "Unknown attackers", "action": "Insert tasks into open Cairn panels", "kind": "reported" }, { "actor": "Cairn agents", "action": "Install keys and run malware", "kind": "reported" }, { "actor": "Agent environment", "action": "Compromised; host escape unproved", "kind": "reported" }], "boundary": "Unauthenticated control panel \u2192 agent execution environment", "result": "NorForge reports actual implant execution in several cases.", "limit": "17 panels is task exposure, not 17 confirmed host escapes. Overlap with case 31 possible.", "src": ["nfTake"] },
    38: { "title": "Shared serving cache exposes prior requests", "stages": [{ "actor": "Long-context request", "action": "Exceeds undersized cache pool", "kind": "confirmed" }, { "actor": "Serving-engine bug", "action": "Rejected prompt uses stale cache", "kind": "confirmed" }, { "actor": "Other customer data", "action": "Appears in generated response", "kind": "confirmed" }], "boundary": "One customer\u2019s inference state \u2192 another customer\u2019s response", "result": "155 responses affected, not 155 confirmed victims. Patched Sep 9.", "limit": "No deliberate exploitation found. This is a serving bug, not agent intent.", "src": ["cfCache", "knCache"] },
    39: { "title": "Security test reaches business systems", "stages": [{ "actor": "Cathedral test", "action": "Claims AI finds third-party path", "kind": "reported" }, { "actor": "Anthropic business IT", "action": "Limited access acknowledged", "kind": "reported" }, { "actor": "Scope and response", "action": "Disclosure disputed; access shut", "kind": "disputed" }], "boundary": "Security-testing program \u2192 limited sales, HR and IT systems", "result": "No Claude chats, source code or model weights accessed, per Anthropic.", "limit": "Unpublished draft; full Post report not read. Exact data copying unclear.", "src": ["gzCath", "tpCath"] },
    40: { "title": "Vendor attack reaches agent logs", "stages": [{ "actor": "Vendor in Warp\u2019s stack", "action": "Exploited Oct 23, per Warp", "kind": "reported" }, { "actor": "Agent traces and telemetry", "action": "Possibly exposed for about 1% of users", "kind": "reported" }, { "actor": "Swarm attribution", "action": "Preliminary, no evidence published", "kind": "disputed" }], "boundary": "Third-party vendor \u2192 user agent traces and telemetry", "result": "Warp says it remediated within hours and notified affected users.", "limit": "Vendor and exposed data fields unnamed; AI role is Warp\u2019s preliminary view.", "src": ["zlWarp", "bcWarp"] },
    41: { "title": "Stored keys used on user accounts", "stages": [{ "actor": "Older OpenCode system", "action": "Broken into overnight", "kind": "confirmed" }, { "actor": "Console API keys", "action": "Exposed for 1.4% of Console users", "kind": "confirmed" }, { "actor": "Provider accounts", "action": "Charges up to $1,000+; refunds underway", "kind": "confirmed" }], "boundary": "Older Console system \u2192 stored provider API keys", "result": "Providers blocked keys; OpenAI refunds attack charges.", "limit": "Distillation purpose is disputed; attacker method and any AI use unpublished.", "src": ["tcOpen"] },
    42: { "title": "One operator, many parallel intrusions", "stages": [{ "actor": "Human operator", "action": "Steers agents at decision points", "kind": "reported" }, { "actor": "ARTEX agents", "action": "Run 200+ targets in 14+ countries", "kind": "reported" }, { "actor": "Compromise counts", "action": "Nine confirmed; about 140 at moderate confidence", "kind": "reported" }], "boundary": "Operator-directed agent framework \u2192 government and industry networks", "result": "CrowdStrike confirmed post-exploitation at nine organizations; about 140 at moderate-or-higher confidence.", "limit": "Vendor report plus press-relayed figure; victims mostly unnamed; 200+ counts targets, not breaches.", "src": ["csPanda", "csScoop"] },
    43: { "title": "Tampered extension in a marketplace", "stages": [{ "actor": "Modified package", "action": "Live about 11 hours on Oct 29", "kind": "confirmed" }, { "actor": "Up to 5,000 users", "action": "Backdoor install attempted", "kind": "confirmed" }, { "actor": "Cursor response", "action": "Removed, rebuilt, server offline", "kind": "reported" }], "boundary": "Extension marketplace \u2192 developer machines", "result": "Tunnel step fails on most hosts without admin rights, per Cursor.", "limit": "Number compromised unknown; no AI or model role is claimed.", "src": ["cuExt", "msExt"] },
    44: { "title": "Agentic intrusion at a security vendor", "stages": [{ "actor": "External actor", "action": "Offensive agentic techniques, per Chainalysis", "kind": "reported" }, { "actor": "Internal tools", "action": "Unauthorized access, exploited flaws unnamed", "kind": "reported" }, { "actor": "Customer data", "action": "Names, emails, role labels accessed", "kind": "reported" }], "boundary": "External actor \u2192 internal tools and customer contact data", "result": "No access to investigation content, passwords or tokens found so far.", "limit": "Company notice only; attacker, flaws and agent role unpublished.", "src": ["caInc"] },
    45: { "title": "Stored secrets stolen from a hosting platform", "stages": [{ "actor": "Northflank platform", "action": "Breached; entry method unpublished", "kind": "confirmed" }, { "actor": "Stored variables", "action": "Assumed decrypted; rotate all", "kind": "reported" }, { "actor": "Customer AI keys", "action": "Unauthorized use reported", "kind": "reported" }], "boundary": "Hosting platform \u2192 customers' stored secrets and AI keys", "result": "Rotation tools added; audit logs enabled for all customers.", "limit": "No AI-agent role claimed; scope unpublished; campaign link is Wiz's.", "src": ["nfStat", "bcNf", "wizBO"] },
    46: { "title": "AI-assisted intrusion into a sales tool", "stages": [{ "actor": "Attacker", "action": "AI-assisted framework, per WorkOS", "kind": "reported" }, { "actor": "Internal sales app", "action": "Unauthorized access Oct 30", "kind": "confirmed" }, { "actor": "CRM and Slack excerpts", "action": "Contacts and call summaries held", "kind": "reported" }], "boundary": "Internal sales application \u2192 CRM and customer communications", "result": "No evidence of production services or application data access, per WorkOS.", "limit": "Company bulletin only; tool name and records taken unconfirmed.", "src": ["woBul", "woCsn"] },
    47: { "title": "Environment variables exposed at a workflow platform", "stages": [{ "actor": "Attacker", "action": "Exploit used; method unpublished", "kind": "reported" }, { "actor": "Trigger.dev platform", "action": "Unauthorized access", "kind": "confirmed" }, { "actor": "Customer variables", "action": "Exposed for a subset of organizations", "kind": "confirmed" }], "boundary": "Hosted platform \u2192 customers' environment variables", "result": "Exploit blocked; impacted owners emailed with steps.", "limit": "No AI-agent role claimed; scope and any misuse unpublished.", "src": ["trBlog", "trReg"] },
    48: { "title": "Infrastructure credentials reached, every token reset", "stages": [{ "actor": "Attacker", "action": "AI agents, per GitBook", "kind": "reported" }, { "actor": "Infrastructure credentials", "action": "Unauthorized access Nov 2", "kind": "confirmed" }, { "actor": "Customer tokens", "action": "All API tokens invalidated", "kind": "confirmed" }], "boundary": "GitBook infrastructure \u2192 integration, Git Sync and API tokens", "result": "Services restored Nov 3; no evidence content was modified.", "limit": "Company status page only; agent role and method unpublished.", "src": ["gbStat"] },
    49: { "title": "Dev environment to production, five days undetected", "stages": [{ "actor": "Attacker", "action": "Third-party component; ARTEX link is press assessment", "kind": "reported" }, { "actor": "Dev then production", "action": "Access from Oct 26; cut Oct 31", "kind": "confirmed" }, { "actor": "Customer accounts", "action": "Emails and password hashes accessed", "kind": "confirmed" }], "boundary": "Third-party component \u2192 development and production systems", "result": "Customers told to rotate node credentials and API keys.", "limit": "Company report; AI role is press assessment.", "src": ["csInc", "thnCs"] },
    50: { "title": "Testing agents reach a rival platform", "stages": [{ "actor": "Railway engineer", "action": "Runs agents for signup testing", "kind": "confirmed" }, { "actor": "Agents", "action": "Probe Primcloud; scope per Primcloud", "kind": "reported" }, { "actor": "Primcloud", "action": "Blocks attempts; no data accessed", "kind": "reported" }], "boundary": "Railway test harness \u2192 Primcloud network and secrets", "result": "Engineer halted the harness; CEO apologized.", "limit": "Command detail is Primcloud\u2019s account; X posts not read.", "src": ["sbRail", "exRail"] }
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

  // src/incident-images/diagram-26.png
  var diagram_26_default = "./assets/SFMBHURE.png";

  // src/incident-images/diagram-27.png
  var diagram_27_default = "./assets/DGFCPZEU.png";

  // src/incident-images/diagram-28.png
  var diagram_28_default = "./assets/HRYF7UIX.png";

  // src/incident-images/diagram-29.png
  var diagram_29_default = "./assets/Y2JJAEDQ.png";

  // src/incident-images/diagram-30.png
  var diagram_30_default = "./assets/LMUMVGH5.png";

  // src/incident-images/diagram-31.png
  var diagram_31_default = "./assets/NHPQG536.png";

  // src/incident-images/diagram-32.png
  var diagram_32_default = "./assets/FHBATVIE.png";

  // src/incident-images/diagram-33.png
  var diagram_33_default = "./assets/3BFS25PR.png";

  // src/incident-images/diagram-34.png
  var diagram_34_default = "./assets/ZBC3PSAB.png";

  // src/incident-images/diagram-35.png
  var diagram_35_default = "./assets/7WQR2XXR.png";

  // src/incident-images/diagram-36.png
  var diagram_36_default = "./assets/QGXGAHS2.png";

  // src/incident-images/diagram-37.png
  var diagram_37_default = "./assets/FIYPVKW6.png";

  // src/incident-images/diagram-38.png
  var diagram_38_default = "./assets/BWJRIH3W.png";

  // src/incident-images/diagram-39.png
  var diagram_39_default = "./assets/4N7MESE2.png";

  // src/incident-images/diagram-40.png
  var diagram_40_default = "./assets/Q6MRFY6X.png";

  // src/incident-images/diagram-41.png
  var diagram_41_default = "./assets/GQZAE4VF.png";

  // src/incident-images/diagram-42.png
  var diagram_42_default = "./assets/EL24C6BW.png";

  // src/incident-images/diagram-43.png
  var diagram_43_default = "./assets/T546RY3J.png";

  // src/incident-images/diagram-44.png
  var diagram_44_default = "./assets/ZVWKBOIC.png";

  // src/incident-images/diagram-45.png
  var diagram_45_default = "./assets/HT6TWN4S.png";

  // src/incident-images/diagram-46.png
  var diagram_46_default = "./assets/NSPIN5Z7.png";

  // src/incident-images/diagram-47.png
  var diagram_47_default = "./assets/STUJTGG2.png";

  // src/incident-images/diagram-48.png
  var diagram_48_default = "./assets/5SFVVBXJ.png";

  // src/incident-images/diagram-49.png
  var diagram_49_default = "./assets/BHD2XNZN.png";

  // src/incident-images/diagram-50.png
  var diagram_50_default = "./assets/HTQIOKP3.png";

  // src/App.tsx
  var import_jsx_runtime21 = __toESM(require_jsx_runtime());
  var incidentImages = { 1: diagram_01_default, 2: diagram_02_default, 3: diagram_03_default, 4: diagram_04_default, 5: diagram_05_default, 6: diagram_06_default, 7: diagram_07_default, 8: diagram_08_default, 9: diagram_09_default, 10: diagram_10_default, 11: diagram_11_default, 12: diagram_12_default, 13: diagram_13_default, 14: diagram_14_default, 15: diagram_15_default, 16: diagram_16_default, 17: diagram_17_default, 18: diagram_18_default, 19: diagram_19_default, 20: diagram_20_default, 21: diagram_21_default, 22: diagram_22_default, 23: diagram_23_default, 24: diagram_24_default, 25: diagram_25_default, 26: diagram_26_default, 27: diagram_27_default, 28: diagram_28_default, 29: diagram_29_default, 30: diagram_30_default, 31: diagram_31_default, 32: diagram_32_default, 33: diagram_33_default, 34: diagram_34_default };
  incidentImages[35] = diagram_35_default;
  incidentImages[36] = diagram_36_default;
  incidentImages[37] = diagram_37_default;
  incidentImages[38] = diagram_38_default;
  incidentImages[39] = diagram_39_default;
  incidentImages[40] = diagram_40_default;
  incidentImages[41] = diagram_41_default;
  incidentImages[42] = diagram_42_default;
  incidentImages[43] = diagram_43_default;
  incidentImages[44] = diagram_44_default;
  incidentImages[45] = diagram_45_default;
  incidentImages[46] = diagram_46_default;
  incidentImages[47] = diagram_47_default;
  incidentImages[48] = diagram_48_default;
  incidentImages[49] = diagram_49_default;
  incidentImages[50] = diagram_50_default;
  var srcIndex = {};
  Object.keys(S3).forEach((id, i) => {
    srcIndex[id] = i + 1;
  });
  function Sources({ ids }) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "src-chips", children: ids.map((id) => {
      const s = S3[id];
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { className: "src-chip", href: s.href, target: "_blank", rel: "noopener noreferrer", title: s.label, children: srcIndex[id] }, id);
    }) });
  }
  function Tag({ children, tone }) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: `tag ${tone ? "tag-" + tone : ""}`, children });
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("details", { className: "item", open: inline || void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-num", children: String(t.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-title", children: t.name }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Tag, { tone: t.tier.toLowerCase(), children: t.tier })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-teaser", children: firstSentence(t.how) })
      ] }),
      t.merged ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "item-meta", children: t.merged }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dl", { className: "kv", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "How it works" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { children: t.how }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "Company benefit" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { children: t.benefit }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "2026 evidence that fits" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dd", { children: [
          t.fits,
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sources, { ids: t.fitsSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "2026 evidence against" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dd", { children: [
          t.against,
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sources, { ids: t.againstSrc })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "What would disconfirm this" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { className: "disconfirm", children: t.disconfirm })
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dt", { children: [
        label,
        " ",
        /* @__PURE__ */ (0, 
