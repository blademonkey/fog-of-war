nbcMon"] }, "future": { "level": "Moderate", "note": "OpenAI is assessing whether this is a propensity to evade monitoring; models are in internal deployment.", "src": ["oaiMon"] } },
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
    44: { "potential": { "level": "High", "note": "Access to a security vendor\u2019s internal tools and customer lists can enable follow-on targeting.", "src": ["caInc", "trCa"] }, "observed": { "level": "High", "note": "Password hashes and live tokens for all users exposed and some KYT accounts apparently accessed, per Chainalysis; no evidence investigations data was touched.", "src": ["caInc", "trCa"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent confirmation of containment.", "src": ["caInc", "trCa"] } },
    45: { "potential": { "level": "High", "note": "Stored environment variables can hold database passwords and cloud and AI provider keys.", "src": ["nfStat", "bcNf"] }, "observed": { "level": "Moderate", "note": "Customers report unauthorized AI key use; Wiz saw about 2.5 million Bedrock calls and $100,000 of usage in two cases from the wider campaign, not tied to Northflank.", "src": ["nfStat", "bcNf", "wizBO"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent confirmation of containment.", "src": ["nfStat", "bcNf"] } },
    46: { "potential": { "level": "High", "note": "Contact details and conversation excerpts make convincing phishing against customers of an identity-infrastructure vendor.", "src": ["woBul"] }, "observed": { "level": "Low", "note": "No evidence of production or application data access, per WorkOS; records taken not yet established.", "src": ["woBul"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent confirmation of containment.", "src": ["woBul"] } },
    47: { "potential": { "level": "High", "note": "Environment variables often hold API keys and credentials for connected services.", "src": ["trBlog", "trReg"] }, "observed": { "level": "Unknown", "note": "No misuse or affected-customer count published.", "src": ["trBlog", "trReg"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent confirmation of containment.", "src": ["trBlog", "trReg"] } },
    48: { "potential": { "level": "High", "note": "Integration, Git Sync and API tokens can reach customers\u2019 connected tools and repositories.", "src": ["gbStat"] }, "observed": { "level": "Moderate", "note": "Day-long outage and forced token reset; no evidence content was changed, per GitBook.", "src": ["gbStat"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate; postmortem pending.", "src": ["gbStat"] } },
    49: { "potential": { "level": "High", "note": "Node credentials and password hashes can enable follow-on access to customer infrastructure.", "src": ["csInc", "thnCs"] }, "observed": { "level": "Moderate", "note": "Account database accessed; node credentials not confirmed read, per Chainstack.", "src": ["csInc", "thnCs"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate or independent confirmation of containment.", "src": ["csInc", "thnCs"] } },
    50: { "potential": { "level": "High", "note": "Agents with real credentials and network reach can probe third parties beyond their owner\u2019s intent.", "src": ["sbRail", "exRail"] }, "observed": { "level": "Low", "note": "Primcloud reports every attempt blocked and no data accessed.", "src": ["sbRail", "exRail"] }, "future": { "level": "Unknown", "note": "Railway pledges a testing ban; no written policy or review published.", "src": ["sbRail", "exRail"] } },
    51: { "potential": { "level": "High", "note": "One person with open-source tools and local models reached hundreds of targets.", "src": ["acBoss"] }, "observed": { "level": "Moderate", "note": "Acronis alone reports confirmed breaches and medical and personal data theft at some universities and emergency services; no victim confirmation read.", "src": ["acBoss"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate; infrastructure exposed but no takedown reported.", "src": ["acBoss"] } },
    52: { "potential": { "level": "High", "note": "Agents compress the step from a leaked secret to cloud data theft to minutes.", "src": ["msArtex"] }, "observed": { "level": "Moderate", "note": "Sign-ins, credential and data access at some customers, per Microsoft; no victim confirmation.", "src": ["msArtex"] }, "future": { "level": "Unknown", "note": "No supported recurrence estimate.", "src": ["msArtex"] } }
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
      limit: "The disputed harm claim is not drawn as an established model-caused event;
