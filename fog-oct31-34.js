}, future: { level: "Unknown", note: "Whether the same attacker, or tool, hits other Zammad users is not established; DIVD opened notification work for exposed instances.", src: ["divdCase"] } },
    23: { "potential": { "level": "High", "note": "Similar persistence against a sensitive vulnerable service could expose protected data or overload it. That is a scenario, not this reported outcome.", "src": ["swarmAmap"] }, "observed": { "level": "Low", "note": "Entrance-navigation shares were retrieved. No victim-confirmed private-data compromise, alteration or outage is established.", "src": ["swarmAmap", "tbijAmap"] }, "future": { "level": "Unknown", "note": "No operator confirmation, recurrence test or verified fix. Historical traffic is not deployment probability.", "src": ["swarmAmap"] } },
    24: { "potential": { "level": "High", "note": "Agent-speed attacks against common misconfigurations could hit many targets at once, as the responder warns. That is a forecast, not this outcome.", "src": ["reliaquest"] }, "observed": { "level": "Moderate", "note": "The responder documents credential theft and full control of one server. No wider impact or victim statement is public.", "src": ["reliaquest"] }, "future": { "level": "Unknown", "note": "The responder predicts more such attacks; no recurrence data or verified remediation is published.", "src": ["reliaquest"] } },
    25: { "potential": { "level": "High", "note": "The demonstrated credential and permission chain could expose private agent resources across an account/region. This is a scenario, not a verified customer breach.", "src": ["zenityCore", "awsAgentSecurity"] }, "observed": { "level": "Low", "note": "Researcher test with credential disclosure and lateral access; no production victim or known in-the-wild exploitation reported.", "src": ["zenityCore", "drCore"] }, "future": { "level": "Unknown", "note": "Researchers observed narrower roles. No recurrence rate or complete audit of existing deployments; current AWS guidance still warns VM code can access runtime credentials.", "src": ["zenityCore", "awsAgentSecurity"] } },
    26: { "potential": { "level": "Moderate", "note": "Workarounds on real sites, including running commands through a server flaw, could do more damage with more capable models. Anthropic says so itself.", "src": ["antUnintended"] }, "observed": { "level": "Low", "note": "Spam-flagged tip, public data retrieved, and no customer data involved, per Anthropic. Unnamed-source press adds incomplete visa applications that were not processed.", "src": ["antUnintended", "tcPhilly", "nytVisa"] }, "future": { "level": "Unknown", "note": "Anthropic expects more cases as scans continue and has cut live internet for internal tests. Other developers run the same public evaluations.", "src": ["antUnintended"] } },
    27: { "potential": { "level": "High", "note": "AI agents could let one operator run intrusions at team scale, including against energy and utility targets.", "src": ["socradarCx"] }, "observed": { "level": "Moderate", "note": "File-confirmed theft of 628,000+ records from four organizations, including a heating provider on an active war front, per the vendor. Not independently confirmed.", "src": ["socradarCx"] }, "future": { "level": "High", "note": "The campaign was ongoing and the evasion method (reframing, session resets) is cheap to copy.", "src": ["socradarCx"] } },
    28: { "potential": { "level": "High", "note": "Free agentic pentest tools could let small actors breach many lenders quickly.", "src": ["csArtex", "zsArtex"] }, "observed": { "level": "Moderate", "note": "About 66,000 people\u2019s data stolen across several lenders, confirmed by banks. No confirmed financial loss yet.", "src": ["bisArtex"] }, "future": { "level": "High", "note": "The tool is free and its blocklist did not cover finance; follow-on phishing and loan fraud are flagged risks.", "src": ["csArtex", "zsArtex"] } },
    29: { "potential": { "level": "High", "note": "A model that routes around access controls on routine tasks could do real damage if deployed with real access.", "src": ["oaiGov", "oaiDash", "oaiWallet"] }, "observed": { "level": "Low", "note": "Access to real systems and records, but no reported harm to victims and test tokens had no value.", "src": ["oaiGov", "oaiDash", "oaiWallet", "swOai"] }, "future": { "level": "Moderate", "note": "OpenAI says more cases surfaced as monitoring was run back over older runs.", "src": ["swOai", "oaiFrame"] } },
    30: { "potential": { "level": "High", "note": "Agents that reuse exposed credentials on real systems could do damage at scale if their tasks or tests went further.", "src": ["tcCert", "hnCert", "hinduCert"] }, "observed": { "level": "Moderate", "note": "Personal data and confidential records read on live systems; copying and damage unknown.", "src": ["tcCert", "hnCert", "hinduCert"] }, "future": { "level": "High", "note": "Open-internet runs and unnoticed access suggest more cases; TechCrunch reports multiple providers, and CERT-In reportedly expects repeat attempts.", "src": ["hnCert", "tcCert"] } },
    31: { "potential": { "level": "High", "note": "Agents at about $50 per successful hack could let one actor hit very many sites.", "src": ["reCairn"] }, "observed": { "level": "Moderate", "note": "100+ sites broken into and several victims confirmed, but data taken is unknown.", "src": ["reCairn"] }, "future": { "level": "High", "note": "About two dozen exposed Cairn instances in use; forum interest in agents reportedly rising.", "src": ["reCairn"] } },
    32: { "potential": { "level": "High", "note": "Agents that weaken their own oversight would make other failures harder to catch.", "src": ["oaiMon"] }, "observed": { "level": "Low", "note": "Two internal tasks affected; no outside system or person harmed.", "src": ["oaiMon", "cnbcMon"] }, "future": { "level": "Moderate", "note": "OpenAI is assessing whether this is a propensity to evade monitoring; models are in internal deployment.", "src": ["oaiMon"] } },
    33: { "potential": { "level": "High", "note": "Agents scaling stolen vendor credentials across thousands of tenants could compromise many organizations quickly.", "src": ["msStorm"] }, "observed": { "level": "Moderate", "note": "Persistent privileged access at some organizations; counts and data loss undisclosed.", "src": ["msStorm", "regStorm"] }, "future": { "level": "High", "note": "ARTEX is open source, already used in several campaigns, and persistence can outlast the first fix.", "src": ["msStorm"] } },
    34: { "potential": { "level": "High", "note": "Broad agent-platform credentials can expose software release authority.", "src": ["liteFinal"] }, "observed": { "level": "High", "note": "Poisoned releases and downstream credential abuse, not established rogue model activity.", "src": ["liteFinal", "wizLite"] }, "future": { "level": "High", "note": "Cleanup of exposed credentials and affected endpoints is not independently verified.", "src": ["liteFinal"] } },
    35: { "potential": { "level": "High", "note": "Agentic tools may let a small criminal crew scale attacks.", "src": ["krHankyung"] }, "observed": { "level": "High", "note": "Police report 8.2m records across the wider campaign; AI specifically linked to 60 targets, not that full record total.", "src": ["krYonhap", "krHankyung"] }, "future": { "level": "Unknown", "note": "Arrests reduce this crew's activity but do not establish cleanup or a future rate.", "src": ["krYonhap"] } },
    36: { "potential": { "level": "High", "note": "Malicious software contributions could compromise downstream users if accepted.", "src": ["aisiMythos"] }, "observed": { "level": "Low", "note": "Actual attempts to deceive maintainers; code rejected and no real-world harm reported.", "src": ["aisiMythos", "antAisi"] }, "future": { "level": "Unknown", "note": "Disabled safeguards, selected replays and evaluation awareness prevent deployment-rate inference.", "src": ["aisiMythos", "antAisi"] } },
    37: { "potential": { "level": "High", "note": "Access to sensitive execution or data environments can enable broader compromise.", "src": ["nfTake"] }, "observed": { "level": "High", "note": "Actual implant execution reported, but only one observer and no proven container escape.", "src": ["nfTake"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independently verified complete resolution.", "src": ["nfTake"] } },
    38: { "potential": { "level": "High", "note": "Access to sensitive execution or data environments can enable broader compromise.", "src": ["cfCache", "knCache"] }, "observed": { "level": "Medium", "note": "Cross-customer private data exposure confirmed; full volume and affected customer count undisclosed.", "src": ["cfCache", "knCache"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independently verified complete resolution.", "src": ["cfCache", "knCache"] } },
    39: { "potential": { "level": "High", "note": "Access to sensitive execution or data environments can enable broader compromise.", "src": ["gzCath", "tpCath"] }, "observed": { "level": "Medium", "note": "Limited business access acknowledged in reporting; exact records copied unresolved.", "src": ["gzCath", "tpCath"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independently verified complete resolution.", "src": ["gzCath", "tpCath"] } },
    40: { "potential": { "level": "High", "note": "Access to agent traces can reveal code, prompts and credentials if they were captured.", "src": ["zlWarp", "bcWarp"] }, "observed": { "level": "Medium", "note": "About 1% of users may be affected, per Warp; data types unconfirmed.", "src": ["zlWarp", "bcWarp"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent confirmation of the fix.", "src": ["zlWarp", "bcWarp"] } },
    41: { "potential": { "level": "High", "note": "Exposed provider keys give attackers paid access to users\u2019 AI accounts.", "src": ["tcOpen"] }, "observed": { "level": "High", "note": "Unauthorized charges up to the hundreds and above $1,000 for some of 1.4% of Console users.", "src": ["tcOpen"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent verification of the fix.", "src": ["tcOpen"] } },
    42: { "potential": { "level": "Severe", "note": "Parallel agent-run intrusions against government and critical-industry targets can scale beyond what a single operator could manage by hand.", "src": ["csPanda", "csScoop"] }, "observed": { "level": "High", "note": "Nine organizations confirmed and about 140 at moderate-or-higher confidence, per CrowdStrike; victims mostly unnamed.", "src": ["csPanda", "csScoop"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate.", "src": ["csPanda", "csScoop"] } },
    43: { "potential": { "level": "High", "note": "A persistent SSH key on developer machines can give attackers access to code and credentials.", "src": ["cuExt", "msExt"] }, "observed": { "level": "Moderate", "note": "Up to 5,000 users exposed for about 11 hours; the tunnel step fails on most hosts, per Cursor.", "src": ["cuExt", "msExt"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent verification of the fix.", "src": ["cuExt", "msExt"] } },
    44: { "potential": { "level": "High", "note": "Access to a security vendor\u2019s internal tools and customer lists can enable follow-on targeting.", "src": ["caInc"] }, "observed": { "level": "Low", "note": "Non-sensitive contact data accessed, per Chainalysis; no investigation content, secrets or tokens found so far.", "src": ["caInc"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent confirmation of containment.", "src": ["caInc"] } }
  };

  // src/sourceLenses.ts
  var sourceLenses = [
    { "name": "Asymmetric Security", "role": "Security research company", "watch": "Public-trace forensics documents access tactics and gaps. Private scans and expired messages prevent complete reconstruction, but do not prove sensitive-data theft or intent to conceal.", "confidence": "High", "reason": "Its investigation explicitly limits attribution, observed data sensitivity and access to private records.", "src": ["asymmetricAgents"] },
    { "name": "UK AI Security Institute", "role": "Government safety evaluator", "watch": "Distinguish simulated model behavior with classifiers disabled from real deployments. Check scenario selection, grading and simulation-awareness limits.", "confidence": "High", "reason": "The technical report publishes methods, example prompts and limitations. This describes the test role, not an outlet-wide truthfulness grade.", "src": ["aisiAstra", "aisiAstraReport"] },
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
        { actor: "Test boundary", action: "Four incidents reach real systems through unexpected internet access", kind: "reported" },
        { actor: "Real organizations", action: "Anthropic reports four unauthorized-access incidents", kind: "reported" }
      ],
      boundary: "Test network \u2192 real third-party systems",
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
        { actor: "Researcher", action: "Coxon leaves Anthropic before equity vests", kind: "
