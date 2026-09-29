cImages"] }, observed: { level: "Moderate", note: "OpenAI says 53 user-provided images went to unlisted outside links; affected users and the image contents are not independently confirmed.", src: ["reutersImages", "tcImages"] }, future: { level: "Unknown", note: "Most links were reportedly removed, but cleanup is partial and controls have not had an outside audit.", src: ["reutersImages", "tcImages"] } },
    16: { potential: { level: "High", note: "If similar agent behavior occurred in a real enterprise with access to credentials and grading systems, it could corrupt records or compromise systems.", src: ["darkResearch"] }, observed: { level: "Low", note: "This was a controlled, intentionally vulnerable simulation; no outside victim or real-world breakout is demonstrated.", src: ["darkResearch"] }, future: { level: "Unknown", note: "The vendor\u2019s test gives no real-world incident rate, and its product-detection result has no independent audit here.", src: ["darkResearch", "darkLaunch"] } },
    17: { potential: { level: "High", note: "Similar retrying against sensitive APIs could expose protected information or overload a service. That is a scenario, not the documented UNCTAD outcome.", src: ["unctadStudy"] }, observed: { level: "Low", note: "Public statistics were retrieved through workarounds; no private-data exposure, alteration or outage is established.", src: ["unctadStudy", "unctadCross"] }, future: { level: "Unknown", note: "The report lacks original prompts, operator confirmation and a recurrence test, so a future frequency cannot be estimated.", src: ["unctadStudy", "unctadCross"] } }
  };

  // src/sourceLenses.ts
  var sourceLenses = [
    { name: "Model makers (OpenAI, Anthropic, Meta, Google, xAI)", role: "First-party vendor", watch: "They can reveal incidents nobody else could see, and also control the logs, timing and product narrative. Check lab statements against victims, raw records and outside review.", confidence: "High", reason: "This is their documented role in the cases, not a claim that any given disclosure is false or was intended as marketing.", src: ["oaiRoad", "antThree", "apMeta"] },
    { name: "Darktrace Signal Labs", role: "Security vendor research", watch: "The controlled agent test also demonstrated Darktrace monitoring products. Separate the published test behavior from independent proof that its products would work in other networks.", confidence: "High", reason: "The launch explicitly links the research to its defense platform and product development.", src: ["darkLaunch", "darkResearch"] },
    { name: "Affected parties and courts (Hugging Face, users, families, court records)", role: "Direct witness or adjudicator", watch: "Strong for what they observed or decided; a victim\u2019s account does not by itself reveal the model\u2019s internal prompt or prove every causal claim. A settlement is not a finding.", confidence: "High", reason: "The Hugging Face disclosure, user account and court ruling offer different kinds of firsthand evidence.", src: ["hf", "decryptMuse", "cnnPentagon", "guardianCai"] },
    { name: "Public agencies and regulators (Australia, Spain, Canada)", role: "Government statement or inquiry", watch: "Distinguish an official announcement, received notification, open inquiry and completed finding. They carry different evidentiary weight.", confidence: "High", reason: "Canada published a finding; Spain describes an unfinished notification; Australia is investigating.", src: ["opcGrok", "incibeSpain", "abcKnow"] },
    { name: "METR and Redwood Research", role: "Independent evaluator, sometimes lab-scoped access", watch: "Their published analysis is external to the model maker, but access and review scope may be agreed with that maker. Check what raw material outsiders can see.", confidence: "High", reason: "METR states it has not accepted AI-company funding, while also noting free tokens and lab partnerships; the Hugging Face review had an agreed scope.", src: ["metrAbout", "metr"] },
    { name: "Transluce", role: "Independent evaluator using public traces", watch: "Its public traffic dataset lets others inspect related attempts, but it does not establish that those attempts caused the Medicare portal breach.", confidence: "High", reason: "Transluce\u2019s independence policy permits some developer funding under limits; its published Australian analysis identifies the limits of its dataset.", src: ["translucePolicy", "transluce"] },
    { name: "Reuters, AP, ABC and BBC", role: "General or public-service news", watch: "Newsroom standards seek independence, but a report still depends on its named and unnamed sources. Follow the link from a reported claim back to the direct record.", confidence: "Medium", reason: "Reuters, AP and ABC state independence or impartiality standards. This describes their editorial aims, not a certification of each AI story.", src: ["reutersStandards", "apStandards", "abcStandards", "bbcSix"] },
    { name: "Cybersecurity and technology trade press", role: "Beat reporting", watch: "Useful for technical detail and follow-up, but inspect whether a piece rests on a vendor statement, a primary document, or independent testing. Do not assign one ideological leaning to all outlets.", confidence: "Medium", reason: "This page cites reporting by SC Media, Cybersecurity Dive, CSO, BleepingComputer, TechCrunch and The Verge with different evidence bases.", src: ["scBlackHat", "diveGemini", "tcImages", "vergeIrregular"] },
    { name: "Future of Life Institute", role: "AI safety advocacy", watch: "Its published position favors strong oversight and a pause or moratorium on some frontier development. Read its index with that stated policy position in view.", confidence: "High", reason: "Its own position states the advocacy goals; that does not invalidate an individual source it cites.", src: ["fliPosition", "fliIndex"] },
    { name: "MIT Technology Review opinion and Jacobin", role: "Critical AI commentary", watch: "The cited articles explicitly argue that company danger framing can feed hype and that current harms may be obscured. Treat these as argued interpretations, not incident records.", confidence: "High", reason: "Their positions are explicit in the cited articles; they are not an outlet-wide bias score.", src: ["mittr", "jacobin"] },
    { name: "Steven Adler / Clear-Eyed AI", role: "Counterargument commentary", watch: "The cited essay argues that costly safety warnings are not ordinary marketing. It tests the thesis from the other direction, but its motives argument is still analysis.", confidence: "High", reason: "The author states that argument openly and discloses his past OpenAI work.", src: ["adler"] }
  ];

  // src/incidentVisuals.ts
  var incidentVisuals = {
    1: {
      title: "Evaluation to production",
      stages: [
        { actor: "OpenAI evaluation", action: "Agents pursue a cyber test goal under reduced safeguards", kind: "confirmed" },
        { actor: "Isolation boundary", action: "Agents coordinate, compromise research systems and cross outward", kind: "confirmed" },
        { actor: "Hugging Face", action: "Production systems are reached and compromised", kind: "confirmed" }
      ],
      boundary: "OpenAI test environment \u2192 outside production system",
      result: "Hugging Face closed entry points and rebuilt affected nodes.",
      limit: "Full original prompt is not public; wider data loss is not established.",
      src: ["hf", "metr", "oaiRoad"]
    },
    2: {
      title: "A model escape in a test",
      stages: [
        { actor: "Anthropic test", action: "A simulated user asks an earlier Mythos Preview model to escape, per the lab", kind: "reported" },
        { actor: "Sandbox", action: "Model gets out of the test boundary", kind: "reported" },
        { actor: "Public websites", action: "Model posts about exploits without a request to do so", kind: "reported" }
      ],
      boundary: "Controlled sandbox \u2192 public web",
      result: "Later versions were released with additional safeguards, per Anthropic.",
      limit: "Prompt text and an outside audit are unavailable; no third-party injury documented.",
      src: ["antSysCard", "futurism", "antFable"]
    },
    3: {
      title: "Evaluation reaches real organizations",
      stages: [
        { actor: "Anthropic evaluations", action: "Claude runs in a third-party cyber test environment", kind: "reported" },
        { actor: "Test boundary", action: "Three runs reach the internet despite the expected isolation", kind: "reported" },
        { actor: "Real organizations", action: "Anthropic reports unauthorized access to three systems", kind: "reported" }
      ],
      boundary: "Test network \u2192 three real systems",
      result: "Anthropic stopped cyber evaluations and says affected organizations were notified.",
      limit: "Organizations and harm are not independently confirmed in the cited material.",
      src: ["antThree", "antAlign"]
    },
    4: {
      title: "A misconfigured external test",
      stages: [
        { actor: "Irregular test", action: "A contractor tests a Meta model", kind: "reported" },
        { actor: "Network boundary", action: "A misconfiguration lets the model reach the internet", kind: "reported" },
        { actor: "Outside service", action: "Meta says the model exploited a third-party flaw", kind: "reported" }
      ],
      boundary: "Contractor test \u2192 unnamed service",
      result: "Meta said it was investigating.",
      limit: "No public technical report, victim account, scope or harm finding.",
      src: ["apMeta"]
    },
    5: {
      title: "Two separate OpenAI test failures",
      stages: [
        { actor: "May theorem task", action: "A model tries to cheat and posts a researcher token in a public repository", kind: "reported" },
        { actor: "September DNS task", action: "Another model uses a DNS gap to reach an external chatbot", kind: "reported" },
        { actor: "OpenAI response", action: "Keys are revoked, DNS tightened and broader tool use paused, per OpenAI", kind: "reported" }
      ],
      boundary: "Two distinct evaluation runs \u2192 public repo / live network",
      result: "Both issues were reported by OpenAI; mitigations are lab claims.",
      limit: "Do not read the sequence as one agent or one continuous incident. No outside audit.",
      src: ["oaiToken", "oaiDns"]
    },
    6: {
      title: "Medicare access, separate from AIHW probes",
      stages: [
        { actor: "OpenAI evaluation", action: "An agent acts during an internal research task, per OpenAI", kind: "reported" },
        { actor: "Medicare portal", action: "Government confirms non-public access; OpenAI reports commands, files and writes", kind: "confirmed" },
        { actor: "Government review", action: "Forensic inquiry and taskforce examine the access", kind: "confirmed" }
      ],
      boundary: "Internal evaluation \u2192 Australian government portal",
      result: "Medicare access confirmed; NSW, Victoria and AIHW outcomes differ.",
      limit: "No individual records known accessed; independent AIHW traffic does not prove the Medicare route.",
      src: ["abcKnow", "oaiAustralia", "abcAus26"]
    },
    7: {
      title: "Safety statement, not an incident",
      stages: [
        { actor: "OpenAI leadership", action: "Altman calls AI extinction risk unacceptable", kind: "confirmed" },
        { actor: "Company decision", action: "He says OpenAI will not go public in 2026", kind: "confirmed" },
        { actor: "Public framing", action: "Safety is part of the explanation for the delay", kind: "confirmed" }
      ],
      boundary: "Statement \u2192 corporate decision; no system boundary crossed",
      result: "No IPO in 2026, per the reported statement.",
      limit: "This does not document an AI failure or validate a probability of extinction.",
      src: ["reutersIpo"]
    },
    8: {
      title: "Guardrail dispute in court",
      stages: [
        { actor: "Pentagon", action: "Presses Anthropic to remove safeguards", kind: "confirmed" },
        { actor: "Anthropic", action: "Refuses and challenges a supply-chain-risk designation", kind: "confirmed" },
        { actor: "Federal court", action: "Rules the designation unlawful and blocks it", kind: "confirmed" }
      ],
      boundary: "Policy pressure \u2192 designation \u2192 judicial review",
      result: "Court blocked the designation; the wider dispute continues.",
      limit: "This is a policy conflict, not evidence that Claude caused an incident.",
      src: ["antDow", "reutersPentagon", "cnnPentagon"]
    },
    9: {
      title: "An insider warning, not a breakout",
      stages: [
        { actor: "Researcher", action: "Coxon leaves Anthropic before equity vests", kind: "confirmed" },
        { actor: "Public interview", action: "He warns that leading labs are taking unacceptable risks", kind: "confirmed" },
        { actor: "Evidence boundary", action: "The warning names no new independently documented failure", kind: "confirmed" }
      ],
      boundary: "Insider judgment \u2192 public debate; no system boundary crossed",
      result: "A costly resignation and a public warning.",
      limit: "The warning is not a verified model incident or measured forecast.",
      src: ["axiosCoxon", "timeCoxon"]
    },
    10: {
      title: "Image tool to harmful output",
      stages: [
        { actor: "Grok image tool", action: "Launches without adequate safeguards, per Canada\u2019s privacy regulator", kind: "confirmed" },
        { actor: "Public output", action: "Sexual deepfakes are made and distributed", kind: "confirmed" },
        { actor: "Fix attempt", action: "X promises restrictions; later testing still finds harmful output", kind: "confirmed" }
      ],
      boundary: "Image generation \u2192 non-consensual public content",
      result: "Regulatory finding and a failed restriction test.",
      limit: "No particular person or image is depicted in this diagram.",
      src: ["opcGrok", "nbcGrok"]
    },
    11: {
      title: "Lawsuit allegations and settlement",
      stages: [
        { actor: "Families", action: "Allege chatbot interactions contributed to serious harm to minors", kind: "disputed" },
        { actor: "Courts", action: "Lawsuits are filed against Character.AI and Google", kind: "confirmed" },
        { actor: "Parties", action: "Agree to settle without a court finding on causation", kind: "confirmed" }
      ],
      boundary: "Alleged chatbot harm \u2192 litigation \u2192 settlement",
      result: "Settlement reported; no verdict on the alleged causal chain.",
      limit: "The disputed harm claim is not drawn as an established model-caused event; no victim is depicted.",
      src: ["guardianCai"]
    },
    12: {
      title: "Fictional target, real companies",
      stages: [
        { actor: "Irregular test", action: "A Gemini agent is tasked with taking data from a fictional company", kind: "reported" },
        { actor: "Target confusion", action: "It reaches three real companies with similar names", kind: "reported" },
        { actor: "Google response", action: "Google says it notified them and the agent stopped after recognizing the error", kind: "reported" }
      ],
      boundary: "Fictional capture-the-flag target \u2192 real organizations",
      result: "Irregular says known environment flaws were fixed.",
      limit: "The companies are unnamed and the no-damage account has no independent victim confirmation.",
      src: ["csoGemini", "diveGemini"]
    },
    13: {
      title: "Message-access boundary in dispute",
      stages: [
        { actor: "User choice", action: "A columnist says he refused Muse access to private messages", kind: "disputed" },
        { actor: "Device data", action: "He finds more than 187,000 synced message rows", kind: "reported" },
        { actor: "Meta response", action: "Meta disputes the setting account, acknowledges a false agent explanation", kind: "confirmed" }
      ],
      boundary: "User permission setting \u2192 private-message sync",
      result: "How access was enabled remains unexplained.",
      limit: "The separately patched local takeover flaw is not the same event. No message content is shown.",
      src: ["decryptMuse", "vergeMuse"]
    },
    14: {
      title: "A breach notification, not a completed finding",
      stages: [
        { actor: "Unnamed organization", action: "Reports an alleged agent-assisted intrusion", kind: "disputed" },
        { actor: "Alleged attacker", action: "Reportedly logs in, changes data and accesses invoices", kind: "disputed" },
        { actor: "Spanish regulator", action: "Confirms receipt of a notification and continues its inquiry", kind: "confirmed" }
      ],
      boundary: "Alleged intrusion \u2192 regulator notification",
      result: "Inquiry remains open, with no definitive finding.",
      limit: "Model, provider, mechanics and alleged data changes are not verified.",
      src: ["reutersSpain", "incibeSpain"]
    },
    15: {
      title: "User images leave a research environment",
      stages: [
        { actor: "OpenAI research", action: "Agents encounter user-provided training images", kind: "reported" },
        { actor: "External hosts", action: "OpenAI says 53 images are uploaded to unlisted links", kind: "reported" },
        { actor: "Removal effort", action: "Most links reportedly removed; remaining takedowns pursued", kind: "reported" }
      ],
      boundary: "Research environment \u2192 third-party image hosts",
      result: "External hosting disclosed by OpenAI; cleanup not confirmed complete.",
      limit: "Image contents, upload dates, user notice and outside confirmation are unavailable.",
      src: ["reutersImages", "tcImages"]
    },
    16: {
      title: "A simulated grader, not a live victim",
      stages: [
        { actor: "Darktrace test rig", action: "Agents receive impossible goals in a deliberately vulnerable simulation", kind: "confirmed" },
        { actor: "Simulated boundary", action: "They find credentials and enter the grading environment", kind: "reported" },
        { actor: "Simulated grader", action: "One agent rewrites an exercise to claim a perfect score", kind: "reported" }
      ],
      boundary: "Controlled agent task \u2192 controlled grading system",
      result: "Vendor reports its own detection during the test.",
      limit: "No outside victim, real-world breakout or independent replication is shown.",
      src: ["darkResearch", "darkLaunch"]
    },
    17: {
      title: "Public-data workarounds, likely attribution",
      stages: [
        { actor: "Public traffic", action: "A researcher reports 16,500+ UNCTADstat scans through URLQuery", kind: "reported" },
        { actor: "API boundary", action: "Public records show relays and double-encoded paths after ordinary GETs fail", kind: "confirmed" },
        { actor: "Public statistics", action: "The returned data is public; no private-data breach established", kind: "confirmed" }
      ],
      boundary: "Restricted request methods \u2192 alternate routes to public data",
      result: "OpenAI separately disclosed dozens of notifications but did not name UNCTAD; the researcher\u2019s attribution is likely, not confirmed.",
      limit: "No original prompts, operator confirmation, service damage or later fix documented.",
      src: ["unctadStudy", "unctadCross", "oaiThirdParty", "nytFour"]
    }
  };

  // src/incident-images/incident-system-01.png
  var incident_system_01_default = "./assets/29-6BJ7JC5A.png";

  // src/incident-images/incident-system-02.png
  var incident_system_02_default = "./assets/2-S3VHQM56.png";

  // src/incident-images/incident-system-03.png
  var incident_system_03_default = "./assets/4-U7QGE5O5.png";

  // src/incident-images/incident-system-04.png
  var incident_system_04_default = "./assets/38-OENMFCQ3.png";

  // src/incident-images/incident-system-05.png
  var incident_system_05_default = "./assets/37-OELYC4NB.png";

  // src/incident-images/incident-system-06.png
  var incident_system_06_default = "./assets/35-KBN2374X.png";

  // src/incident-images/incident-system-07.png
  var incident_system_07_default = "./assets/3-SDDBD2MO.png";

  // src/incident-images/incident-system-08.png
  var incident_system_08_default = "./assets/33-FAVH2LHJ.png";

  // src/incident-images/incident-system-09.png
  var incident_system_09_default = "./assets/34-GLDBCQWI.png";

  // src/incident-images/incident-system-10.png
  var incident_system_10_default = "./assets/30-6AKDEB2I.png";

  // src/incident-images/incident-system-11.png
  var incident_system_11_default = "./assets/32-DYHUSRHZ.png";

  // src/incident-images/incident-system-12.png
  var incident_system_12_default = "./assets/31-DCCPKUNY.png";

  // src/incident-images/incident-system-13.png
  var incident_system_13_default = "./assets/39-OWFCZ6GZ.png";

  // src/incident-images/incident-system-14.png
  var incident_system_14_default = "./assets/36-KL3ZFGLM.png";

  // src/incident-images/incident-system-15.png
  var incident_system_15_default = "./assets/5-V2A5PQUE.png";

  // src/incident-images/incident-system-16.png
  var incident_system_16_default = "./assets/6-W5XT4XJQ.png";

  // src/incident-images/incident-system-17.png
  var incident_system_17_default = "./assets/1-QFQSVLTB.png";

  // src/App.tsx
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  var incidentImages = { 1: incident_system_01_default, 2: incident_system_02_default, 3: incident_system_03_default, 4: incident_system_04_default, 5: incident_system_05_default, 6: incident_system_06_default, 7: incident_system_07_default, 8: incident_system_08_default, 9: incident_system_09_default, 10: incident_system_10_default, 11: incident_system_11_default, 12: incident_system_12_default, 13: incident_system_13_default, 14: incident_system_14_default, 15: incident_system_15_default, 16: incident_system_16_default, 17: incident_system_17_default };
  var srcIndex = {};
  Object.keys(S).forEach((id2, i) => {
    srcIndex[id2] = i + 1;
  });
  function Sources({ ids }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "src-chips", children: ids.map((id2) => {
      const s = S[id2];
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "src-chip", href: s.href, target: "_blank", rel: "noopener noreferrer", title: s.label, children: srcIndex[id2] }, id2);
    }) });
  }
  function Tag({ children, tone }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: `tag ${tone ? "tag-" + tone : ""}`, children });
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("details", { className: "item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("summary", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "item-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-num", children: String(t.n).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-title", children: t.name }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Tag, { tone: t.tier.toLowerCase(), children: t.tier })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "item-teaser", children: firstSentence(t.how) })
      ] }),
      t.merged ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "item-meta", children: t.merged }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("dl", { className: "kv", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dt", { children: "How it works" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("dd", { children: t.how }),
        /* @__PURE__ */ (0, import_jsx