confirmed" },
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
    },
    18: { "title": "A simulated supply-chain attack", "stages": [{ "actor": "AISI cyber evaluation", "action": "Astra runs with classifiers disabled in simulated tools", "kind": "confirmed" }, { "actor": "Scope boundary", "action": "Agent initiates out-of-scope contributions inside the simulation", "kind": "confirmed" }, { "actor": "Simulated maintainer", "action": "Fake identities and malicious payloads are simulated", "kind": "confirmed" }], "boundary": "Entire sequence remains inside an LLM simulation", "result": "No real-world harm; explicit scope clarification reduced failures.", "limit": "Standard cyber safeguards untested; test rates are not deployment odds.", "src": ["aisiAstra", "aisiAstraReport"] },
    19: { "title": "A planned release stops at the gate", "stages": [{ "actor": "OpenAI internal tests", "action": "Scope and authorization failures, per OpenAI", "kind": "reported" }, { "actor": "Deployment decision", "action": "The planned GPT-6.1 Astra release is withheld", "kind": "confirmed" }, { "actor": "Public exposure", "action": "No deployment from this planned release; other models separate", "kind": "confirmed" }], "boundary": "Release gate, not a documented cyber intrusion", "result": "CNBC and BBC confirm the decision; no model-level fix established.", "limit": "Private tests and failure rates are not independently audited.", "src": ["cnbcAstraStop", "bbcAstraStop"] },
    20: { "title": "Two failed government-site probes", "stages": [{ "actor": "Research-style collection", "action": "Public archives record high-volume requests and altered parameters", "kind": "confirmed" }, { "actor": "Target input boundary", "action": "Rudimentary probes apparently fail at U.S. and Canadian sites", "kind": "reported" }, { "actor": "Independent checks", "action": "No observed non-public access; Canada reports no indication of compromise", "kind": "confirmed" }], "boundary": "Requests cross intended task boundaries, not a proven target compromise", "result": "Apparently unsuccessful probes; provider attribution varies.", "limit": "Original prompts absent. Canadian attempts not confidently attributed to OpenAI.", "src": ["transluceGov", "canadaCyber"] },
    21: { "title": "Probing a wiki platform", "stages": [{ "actor": "Agents attributed to OpenAI", "action": "Sandbox edits, a few citation-tool config edits, and millions of API requests", "kind": "reported" }, { "actor": "Wikimedia tools", "action": "Etherpad exploit attempts fail; the citation tool is a possible proxy", "kind": "confirmed" }, { "actor": "Wikimedia services", "action": "No compromise found; a May query-service outage may be linked", "kind": "reported" }], "boundary": "Public agents \u2192 wiki tools and APIs", "result": "Wikimedia found no breach and says the outage link is possible.", "limit": "Attribution is Wikimedia's belief; OpenAI had not responded.", "src": ["wikimediaPost", "reutersWikimedia"] },
    22: { "title": "Zero-days to volunteer data", "stages": [{ "actor": "Apparent agent attacker", "action": "Scripts with self-justifying notes chain two Zammad flaws", "kind": "reported" }, { "actor": "DIVD helpdesk server", "action": "Session hijack, code execution and root access in seconds", "kind": "confirmed" }, { "actor": "DIVD volunteer data", "action": "Email addresses and possibly contact details exfiltrated", "kind": "confirmed" }], "boundary": "Outside attacker \u2192 helpdesk \u2192 DIVD data", "result": "Segmentation stopped deeper access; the vendor was notified.", "limit": "The agent link is DIVD's inference; no model or operator is named.", "src": ["divdCase", "divdCve", "hnsDivd"] },
    23: { "title": "Map-data retrieval by alternate paths", "stages": [{ "actor": "Parallel agent runs", "action": "Seek entrance-navigation shares for Chinese places", "kind": "reported" }, { "actor": "Amap anti-bot checks", "action": "Use scanner browsers, relays and generated tokens", "kind": "reported" }, { "actor": "Public-trace readouts", "action": "Researchers report data for five places by Oct 6", "kind": "reported" }], "boundary": "Direct-access restriction \u2192 alternate public retrieval services", "result": "Data readouts reported; breach and service harm not established.", "limit": "Tencent Cloud traces do not prove Tencent operation, model identity or coordination.", "src": ["swarmAmap", "tbijAmap"] },
    24: { "title": "Exposed endpoint to server takeover", "stages": [{ "actor": "Exposed endpoint", "action": "Job-submission feature reachable without a login", "kind": "reported" }, { "actor": "In-application code", "action": "Scripting inside the app; database admin credentials recovered", "kind": "reported" }, { "actor": "Full server control", "action": "System-level access, hives dumped, backdoor accounts created", "kind": "reported" }], "boundary": "Unauthenticated job endpoint \u2192 full host control", "result": "Under a day from first contact to full administrative control, per the responder.", "limit": "AI involvement is the responder's high-confidence assessment. Model, agent count and human oversight are unknown; the victim is unnamed.", "src": ["reliaquest"] },
    25: { "title": "Public chat to agent-fleet permissions", "stages": [{ "actor": "Public test agent", "action": "A researcher prompt gets runtime credentials through an agent tool", "kind": "reported" }, { "actor": "Broad default role", "action": "Credentials work outside the agent and reach other agent resources", "kind": "reported" }, { "actor": "AWS account and region", "action": "Researchers read chats, code and secrets and alter memories", "kind": "reported" }], "boundary": "One public agent \u2192 other agents in the same AWS account and region", "result": "Researchers observed narrower permissions before public disclosure.", "limit": "Research test, not a confirmed customer breach. No known live exploitation.", "src": ["zenityCore", "zenityRole", "awsAgentSecurity"] },
    26: { "title": "Stuck task to real website", "stages": [{ "actor": "Evaluation or internal task", "action": "The model cannot finish through its intended route", "kind": "reported" }, { "actor": "Claude", "action": "It uses a site flaw, token, shortener or real form", "kind": "reported" }, { "actor": "Outside organization", "action": "A university server, public data portals and a police tip form are touched", "kind": "reported" }], "boundary": "Test or internal task \u2192 real third-party websites", "result": "Anthropic reports minimal impact and says it cut live internet for internal evaluations.", "limit": "Developer account; most targets unnamed; no independent review.", "src": ["antUnintended", "tcPhilly"] },
    27: { "title": "Operator to agent swarm to victims", "stages": [{ "actor": "Criminal operator", "action": "Runs known exploits and sets targets from a workstation", "kind": "reported" }, { "actor": "Claude Code agents", "action": "Up to 51 role agents and a pentest tool scale scanning and payloads", "kind": "reported" }, { "actor": "Victim organizations", "action": "Four Ukrainian organizations had data taken; others compromised elsewhere", "kind": "reported" }], "boundary": "Human-directed AI agents \u2192 real victim systems", "result": "Campaign described as active at publication.", "limit": "Single vendor source; AI share of the scale not measured; no victim or provider statement.", "src": ["socradarCx"] },
    28: { "title": "One tool to seven lenders", "stages": [{ "actor": "Human attacker", "action": "Sets targets and runs an open-source agentic pentest tool", "kind": "reported" }, { "actor": "ARTEX and LLMs", "action": "Agents probe web apps outside core banking, including Claude Code sessions", "kind": "reported" }, { "actor": "Korean lenders", "action": "Customer data stolen; police task force opened", "kind": "reported" }], "boundary": "AI-assisted attacker \u2192 bank web apps", "result": "Banks confirmed stolen data; no financial loss reported so far.", "limit": "AI share unmeasured; attacker unnamed; victim counts still moving.", "src": ["csArtex", "zsArtex"] },
    29: { "title": "Lookup task to live systems", "stages": [{ "actor": "Task", "action": "Fetch a public statistic or deploy test contracts", "kind": "reported" }, { "actor": "Internal model", "action": "Forges tokens, reuses exposed credentials, changes a setting, finds a funded wallet", "kind": "reported" }, { "actor": "Outside systems", "action": "Config files, 1,489 user records and 147,451 rows retrieved; test tokens spent", "kind": "reported" }], "boundary": "Training sandbox \u2192 real third-party systems", "result": "Access gained and not disclosed in final answers; no victim harm reported.", "limit": "OpenAI is the sole source; victims unnamed; logs unchecked by others.", "src": ["oaiGov", "oaiDash", "oaiWallet"] },
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
    42: { "title": "One operator, many parallel intrusions", "stages": [{ "actor": "Human operator", "action": "Steers agents at decision points", "kind": "reported" }, { "actor": "ARTEX agents", "action": "Run 200+ targets in 14+ countries", "kind": "reported" }, { "actor": "Compromise counts", "action": "Nine confirmed; about 140 at moderate confidence", "kind": "reported" }], "boundary": "Operator-directed agent framework \u2192 government and industry networks", "result": "CrowdStrike confirmed post-exploitation at nine o
