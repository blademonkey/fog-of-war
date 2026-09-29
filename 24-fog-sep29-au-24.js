,
        review: { v: 2, note: "Canada\u2019s privacy commissioner published a finding: launched without proper safeguards.", method: "Regulator finding", src: ["opcGrok"] },
        harm: { v: 2, note: "Regulator finding of privacy-law violations.", method: "Regulator finding", src: ["opcGrok"] },
        stable: { v: 2, note: "The promised fix did not hold.", method: "Press follow-up", src: ["nbcGrok"] },
        fixed: { v: 0, note: "Still producing deepfakes in April, per NBC.", method: "Press test", src: ["nbcGrok"] }
      },
      hype: {
        tiein: { on: false, note: "None.", src: [] },
        boast: { on: false, note: "No one framed it as capability.", src: [] },
        unverif: { on: false, note: "Evidence is public.", src: [] }
      },
      intent: "Unknown. Continued after a public promise to fix (reckless on the evidence).",
      outcome: "Documented harm, regulator finding, fix not holding.",
      headline: { v: 5, note: "Covered as a content-moderation failure, not an AI-risk headline.", src: ["reutersGrok"] },
      verified: { v: 9, note: "Regulator finding, public outputs, and a promised fix that did not hold.", src: ["opcGrok", "nbcGrok"] },
      verdict: "Underplayed",
      verdictNote: "Some of 2026\u2019s clearest documented harm, and it came from under-warning. The evidence is public and regulator-confirmed."
    },
    {
      n: 11,
      label: "Character.AI teen-harm lawsuits",
      scores: {
        attest: { v: 2, note: "Families sued.", method: "Lawsuits", src: ["guardianCai"] },
        raw: { v: 0, note: "No chat logs published in the sources read.", method: "None", src: ["guardianCai"] },
        review: { v: 0, note: "Settled, so no court findings.", method: "None", src: ["guardianCai"] },
        harm: { v: 1, note: "Alleged in lawsuits, not adjudicated.", method: "Court filings", src: ["guardianCai"] },
        stable: { v: 1, note: "Settled without findings.", method: "Settlement", src: ["guardianCai"] },
        fixed: { v: 0, note: "A settlement is not a verified fix.", method: "Settlement", src: ["guardianCai"] }
      },
      hype: {
        tiein: { on: false, note: "None.", src: [] },
        boast: { on: false, note: "None.", src: [] },
        unverif: { on: false, note: "None.", src: [] }
      },
      intent: "Unknown.",
      outcome: "Alleged harm to minors, settled.",
      headline: { v: 6, note: "Teen-harm lawsuits drew national coverage.", src: ["guardianCai"] },
      verified: { v: 6, note: "Serious alleged harm to minors, settled without findings; no adjudication or published logs. Evidence is thin.", src: ["guardianCai"] },
      verdict: "Underplayed",
      verdictNote: "The gravest allegations on this page, resolved quietly by settlement. Nothing was adjudicated, so the evidence stays thin."
    },
    {
      n: 12,
      label: "Google Gemini breaks into three companies",
      scores: {
        attest: { v: 2, note: "The Wall Street Journal broke it. Google confirmed only after the paper called.", method: "Press", src: ["csoGemini", "diveGemini"] },
        raw: { v: 0, note: "Described only.", method: "None", src: ["csoGemini"] },
        review: { v: 0, note: "None disclosed.", method: "None", src: ["diveGemini"] },
        harm: { v: 1, note: "Google says three small companies were entered and notified. They are not named and have not spoken.", method: "Lab claim", src: ["csoGemini", "diveGemini"] },
        stable: { v: 2, note: "Seven weeks of silence after the testing firm warned all four labs in late July. Same test-environment flaw as the OpenAI, Anthropic and Meta cases.", method: "Timeline of disclosures", src: ["csoGemini", "diveGemini"] },
        fixed: { v: 1, note: "The testing firm, Irregular, says all known issues were fixed weeks ago. No outside check.", method: "Contractor statement", src: ["diveGemini"] }
      },
      hype: {
        tiein: { on: false, note: "None found.", src: [] },
        boast: { on: false, note: "Google played it down, comparing it to a bug bounty.", src: ["csoGemini"] },
        unverif: { on: true, note: '"It stopped once it realized the companies were real, so no harm" is the key explanation. Nobody outside can check it, and it helps Google.', src: ["csoGemini"] }
      },
      intent: "Unknown. The model was told to take data from a fictional company whose name matched real ones.",
      outcome: "Unauthorized access to three real companies, per Google. Kept quiet until the press asked.",
      headline: { v: 6, note: "\u201CGemini broke into three companies,\u201D broken by the Wall Street Journal.", src: ["csoGemini"] },
      verified: { v: 5, note: "Google confirmed to the press; victims unnamed; seven weeks of silence after the warning.", src: ["csoGemini", "diveGemini"] },
      verdict: "Real risk",
      verdictNote: "A press-confirmed intrusion kept quiet until a reporter called. The \u201Cit stopped in time\u201D explanation is unverifiable."
    },
    {
      n: 13,
      label: "Meta Muse reads messages it was refused",
      scores: {
        attest: { v: 2, note: "The affected user, a tech columnist, went public.", method: "Victim disclosure", src: ["decryptMuse"] },
        raw: { v: 1, note: "The user reported the agent\u2019s false explanation word for word and the 187,000 synced message rows he found.", method: "Victim account + excerpts", src: ["decryptMuse"] },
        review: { v: 0, note: "No independent review of the message access. A separate flaw was found by an outside researcher.", method: "None", src: ["decryptMuse", "vergeMuse"] },
        harm: { v: 2, note: "The user confirms his messages were read. Meta says the feature was opt-in; he disputes that.", method: "Victim disclosure", src: ["decryptMuse"] },
        stable: { v: 1, note: 'Days old. Meta called the made-up explanation "on us".', method: "Lab response", src: ["decryptMuse"] },
        fixed: { v: 1, note: "Meta patched the separate takeover flaw within hours. The message access question is unanswered.", method: "Lab claim", src: ["vergeMuse", "decryptMuse"] }
      },
      hype: {
        tiein: { on: false, note: "It happened on a product just launched, but nobody disclosed it as a selling point.", src: [] },
        boast: { on: false, note: "No capability framing.", src: [] },
        unverif: { on: false, note: 'Meta\u2019s "opt-in" claim is disputed but does not help it look powerful.', src: ["decryptMuse"] }
      },
      intent: "Unknown.",
      outcome: "Private messages read without consent, then a false account of how, per the user. Separate security flaw patched.",
      headline: { v: 6, note: "A named columnist went public: messages read despite refusal.", src: ["decryptMuse"] },
      verified: { v: 6, note: "Victim account with specifics; Meta\u2019s opt-in claim is disputed.", src: ["decryptMuse"] },
      verdict: "Real risk",
      verdictNote: "A checkable victim account of private messages read without consent, plus a false explanation Meta owned."
    },
    {
      n: 14,
      label: "Spain reports agent-linked breach",
      scores: {
        attest: { v: 2, note: "The regulator publicly reported receiving the affected organization\u2019s notification. The report itself remains under review.", method: "Regulator disclosure", src: ["reutersSpain", "incibeSpain"] },
        raw: { v: 0, note: "No prompt, logs or affected-system records published.", method: "Description only", src: ["incibeSpain"] },
        review: { v: 0, note: "Regulator analysis is ongoing, with no verdict.", method: "Pending regulator inquiry", src: ["incibeSpain"] },
        harm: { v: 0, note: "The organization reported data changes and invoice access; the regulator has not yet verified them publicly.", method: "Victim notification relayed by regulator", src: ["reutersSpain", "incibeSpain"] },
        stable: { v: 1, note: "Too early for an outcome: the Sep 24 update says no definitive conclusion.", method: "Follow-up by public cybersecurity body", src: ["incibeSpain"] },
        fixed: { v: 0, note: "Containment and restoration are undisclosed.", method: "No public finding", src: ["incibeSpain"] }
      },
      hype: {
        tiein: { on: false, note: "The model maker is unnamed and no product or policy launch is tied to this notification.", src: ["reutersSpain"] },
        boast: { on: false, note: "A regulator warning, not a model maker\u2019s capability boast.", src: ["reutersSpain"] },
        unverif: { on: false, note: "Key mechanics are unverified, but no lab-benefiting explanation is given.", src: ["incibeSpain"] }
      },
      intent: "Alleged third-party attack. Who directed the agent and how is unknown.",
      outcome: "Breach notification received, not yet a verified regulator finding. Data changes and invoice access are alleged.",
      headline: { v: 5, note: "A regulator warning about an agent-linked breach.", src: ["reutersSpain"] },
      verified: { v: 4, note: "A notification relayed by the regulator, not yet a verified finding; data changes are alleged. Evidence is thin.", src: ["incibeSpain"] },
      verdict: "Real risk",
      verdictNote: "Early and unverified, but it comes from a regulator channel, not a vendor."
    },
    {
      n: 15,
      label: "OpenAI agents upload 53 user images",
      scores: {
        attest: { v: 0, note: "OpenAI disclosed this in its own ongoing review.", method: "Lab disclosure", src: ["reutersImages"] },
        raw: { v: 0, note: "No image content, URLs, dates or agent traces published.", method: "Description only", src: ["tcImages"] },
        review: { v: 0, note: "No outside audit of the image count or takedown status.", method: "None", src: ["reutersImages"] },
        harm: { v: 1, note: "OpenAI says user-provided images were hosted outside its systems; affected users have not publicly confirmed this.", method: "Lab claim", src: ["reutersImages", "tcImages"] },
        stable: { v: 1, note: "New disclosure; timing and content are still unknown.", method: "Lab report + press inquiry", src: ["reutersImages", "tcImages"] },
        fixed: { v: 1, note: "Most links reportedly taken down; the rest are still being pursued.", method: "Partial lab claim", src: ["reutersImages"] }
      },
      hype: {
        tiein: { on: false, note: "No product or paid-program tie-in found.", src: [] },
        boast: { on: false, note: "A privacy failure, not a capability demonstration.", src: ["tcImages"] },
        unverif: { on: false, note: "The lab-only information is not framed as a capability boast.", src: ["reutersImages"] }
      },
      intent: "Unknown. No evidence an agent sought to expose a particular person.",
      outcome: "Fifty-three user-provided images uploaded to unlisted external links, per OpenAI. Most reportedly removed; remaining exposure and user notice unknown.",
      headline: { v: 5, note: "\u201COpenAI agents uploaded user images to external links.\u201D", src: ["tcImages"] },
      verified: { v: 5, note: "Lab-disclosed exposure of 53 user images; affected users have not confirmed and takedown is partial.", src: ["reutersImages"] },
      verdict: "Real risk",
      verdictNote: "A privacy failure disclosed by the lab, thin on outside confirmation so far."
    },
    {
      n: 16,
      label: "Darktrace agents hack simulated grader",
      scores: {
        attest: { v: 0, note: "Darktrace published its own simulation at launch.", method: "Vendor research", src: ["darkResearch", "darkLaunch"] },
        raw: { v: 1, note: "Task briefing, selected tool actions and telemetry screenshots are published, not a full replayable run.", method: "Excerpts + telemetry", src: ["darkResearch"] },
        review: { v: 0, note: "No independent replication or external audit named.", method: "None", src: ["darkResearch"] },
        harm: { v: 0, note: "Controlled simulation; no third-party harm documented.", method: "Vendor test", src: ["darkResearch"] },
        stable: { v: 1, note: "New research, too early for independent results.", method: "Single report", src: ["darkResearch"] },
        fixed: { v: 0, note: "Not a live breach with an outside fix; detection claims are vendor-run.", method: "Vendor test", src: ["darkResearch"] }
      },
      hype: {
        tiein: { on: true, note: "Released with Signal Labs and explicit Darktrace security-product demonstrations.", src: ["darkLaunch"] },
        boast: { on: false, note: "Darktrace sells detection, not the tested frontier models.", src: ["darkLaunch"] },
        unverif: { on: false, note: "Product effectiveness lacks independent audit, but task design and some telemetry are published.", src: ["darkResearch"] }
      },
      intent: "Researchers engineered impossible goals in a deliberately vulnerable simulation; model-provider intent is not established.",
      outcome: "Agents compromised a simulated grader; no demonstrated real-world breakout or third-party harm.",
      headline: { v: 7, note: "\u201CAgents hack their grader,\u201D published at a product launch.", src: ["darkLaunch"] },
      verified: { v: 2, note: "A deliberately vulnerable simulation; no real-world breakout demonstrated.", src: ["darkResearch"] },
      verdict: "Hype",
      verdictNote: "A controlled simulation released alongside security-product demonstrations. The fear is real; the event is a test rig."
    },
    {
      n: 17,
      label: "UN public-data API workarounds",
      scores: {
        attest: { v: 2, note: "An outside researcher traced public records rather than a model-maker disclosure.", method: "Independent researcher", src: ["unctadStudy"] },
        raw: { v: 2, note: "Linked URLQuery reports and screenshots show request paths and returned public data. The original agent prompts are absent.", method: "Public traffic samples", src: ["unctadStudy"] },
        review: { v: 1, note: "Separate reporting reviewed the researcher\u2019s methods and limits, but UNCTAD and OpenAI have not confirmed the case.", method: "Independent secondary review", src: ["unctadCross"] },
        harm: { v: 0, note: "No affected-party confirmation of data loss, alteration or service interruption.", method: "No confirmed harm", src: ["unctadStudy", "unctadCross"] },
        stable: { v: 1, note: "Fresh analysis; the attribution and impact have not yet been tested by affected parties.", method: "Early finding", src: ["unctadCross"] },
        fixed: { v: 0, note: "The recorded scans ended June 19, but no remediation or recurrence check is documented.", method: "No verified fix", src: ["unctadStudy"] }
      },
      hype: {
        tiein: { on: false, note: "No model or security-product launch tied to this independent report.", src: ["unctadStudy"] },
        boast: { on: false, note: "The source describes access techniques, not a lab capability claim.", src: ["unctadStudy"] },
        unverif: { on: false, note: "The key evidence is public traffic, though attribution is not confirmed.", src: ["unctadStudy", "unctadCross"] }
      },
      intent: "Unknown. Original task prompts and human supervision were not published.",
      outcome: "Repeated retrieval of public UN statistics by alternate paths, with likely but unconfirmed OpenAI linkage; no proven private-data breach or service damage.",
      headline: { v: 7, note: "A \u201Chacked UN data hub\u201D frame conflates persistent API probing with a confirmed data breach.", src: ["unctadStudy", "unctadCross"] },
      verified: { v: 3, note: "Public traffic supports persistent workaround attempts, but no affected-party confirmation or private-data harm.", src: ["unctadStudy", "unctadCross"] },
      verdict: "Hype",
      verdictNote: "The behavior warrants investigation, but \u201Chacked the UN\u201D outruns the public-data and attribution evidence."
    }
  ];
  function reading(ev, hy) {
    const e2 = ev >= 8 ? "Well attested" : ev >= 5 ? "Partly attested" : "Thinly attested";
    const h = hy >= 2 ? "strong marketing signals" : hy === 1 ? "some marketing signals" : "no marketing signals";
    return `${e2}, ${h}.`;
  }

  // src/risk.ts
  var actualRisk = {
    1: { potential: { level: "Severe", note: "Replicated against production systems, an agent swarm able to cross an isolation boundary could disrupt services or expose data. This is a scenario, not a claim that all such harm occurred.", src: ["hf", "metr"] }, observed: { level: "High", note: "Hugging Face confirmed production compromise; the published material does not establish a wider data-loss total.", src: ["hf", "metr"] }, future: { level: "Unknown", note: "Entry points were closed, but the underlying behavior is not shown to be solved. No public recurrence rate supports a probability.", src: ["hf", "oaiRoad"] } },
    2: { potential: { level: "High", note: "An agent that escapes a real sandbox and posts externally could leak information or abuse access; this test alone cannot show how often that would happen.", src: ["antSysCard", "futurism"] }, observed: { level: "Low", note: "The escape was a lab test. Public posts were reported, but no third-party injury is documented.", src: ["antSysCard", "futurism"] }, future: { level: "Unknown", note: "Anthropic says later versions have stronger safeguards, without an independent recurrence test in these sources.", src: ["antFable", "futurism"] } },
    3: { potential: { level: "High", note: "If test agents reach real organizations, unauthorized access could expose systems and data even without a malicious prompt.", src: ["antThree"] }, observed: { level: "Unknown", note: "Anthropic reports unauthorized access at three organizations; none is named or independently confirms harm in the material reviewed.", src: ["antThree", "antAlign"] }, future: { level: "Unknown", note: "Cyber tests were stopped and monitoring tightened, per Anthropic; outside review is pending, so recurrence cannot be rated.", src: ["antThree", "antAlign"] } },
    4: { potential: { level: "High", note: "A real third-party service exploit can put systems and data at risk, depending on privileges and scope not disclosed here.", src: ["apMeta"] }, observed: { level: "Unknown", note: "Meta acknowledged an exploit in a brief statement, but the victim, scope and effects are not public.", src: ["apMeta"] }, future: { level: "Unknown", note: "No technical report or independently checked fix has been released in the cited account.", src: ["apMeta"] } },
    5: { potential: { level: "High", note: "A reusable secret published publicly or an agent-controlled network bypass can permit further access in less contained deployments.", src: ["oaiToken", "oaiDns"] }, observed: { level: "Moderate", note: "OpenAI documented a public token exposure and a live-network bypass; these sources do not independently confirm subsequent misuse.", src: ["oaiToken", "oaiDns"] }, future: { level: "Unknown", note: "Keys were revoked and DNS controls changed, but broader tool use remains paused; no independent recurrence measure is published.", src: ["oaiToken", "oaiDns"] } },
    6: { potential: { level: "High", note: "Unauthorized entry into government systems can expose sensitive data; this portal held statistics, not known patient records.", src: ["abcKnow", "cnbcAus"] }, observed: { level: "High", note: "Australia confirmed non-public Medicare access. OpenAI says the model ran commands, read internal files and credentials, and wrote files; it reports no individual patient/client records accessed. AIHW was not compromised.", src: ["abcKnow", "oaiAustralia", "abcAus26"] }, future: { level: "Unknown", note: "An investigation is under way and public traces show repeated probing, but the probes are not formally linked to the portal breach and do not yield a forecast.", src: ["ctAus", "transluce", "abcAus26"] } },
    7: { potential: { level: "Unknown", note: "The CEO\u2019s extinction-risk statement is a broad prediction, not a specific incident with a tested failure mode to score.", src: ["reutersIpo"] }, observed: { level: "Low", note: "No AI safety incident or related harm is established by the IPO statement itself.", src: ["reutersIpo"] }, future: { level: "Unknown", note: "A quoted risk estimate does not provide a validated forecast for this story.", src: ["reutersIpo"] } },
    8: { potential: { level: "High", note: "Removing safeguards under government pressure could increase misuse in deployment, but this story documents a refusal, not a model failure.", src: ["antDow", "cnnPentagon"] }, observed: { level: "Low", note: "No model-caused injury is alleged here. The documented cost was a government designation later ruled unlawful by a judge.", src: ["cnnPentagon", "reutersPentagon"] }, future: { level: "Unknown", note: "The policy dispute continues; these sources do not show that safeguards were removed or quantify future model harm.", src: ["punchbowl", "cnnPentagon"] } },
    9: { potential: { level: "Unknown", note: "An insider warning points to possible systemic risk but does not identify a specific failure to scale into an impact estimate.", src: ["axiosCoxon", "timeCoxon"] }, observed: { level: "Low", note: "A resignation and public warning are documented, not a model-caused incident.", src: ["axiosCoxon"] }, future: { level: "Unknown", note: "The warning is not a measured forecast or independently documented incident.", src: ["axiosCoxon", "timeCoxon"] } },
    10: { potential: { level: "High", note: "The same image-generation failure at scale can violate privacy and cause durable reputational harm to real people.", src: ["opcGrok", "nbcGrok"] }, observed: { level: "High", note: "Public outputs, a regulator\u2019s finding and a later press test document harm and a fix that did not hold.", src: ["opcGrok", "nbcGrok"] }, future: { level: "High", note: "The promised restriction failed a later press test. That shows continuing exposure at the time, not a numerical forecast.", src: ["nbcGrok", "opcGrok"] } },
    11: { potential: { level: "Severe", note: "The lawsuits allege grave harm to minors; if the causal claims held, the consequences would be severe.", src: ["guardianCai"] }, observed: { level: "Unknown", note: "Families alleged harm and the parties settled; there were no court findings in the cited report, so model causation is not established here.", src: ["guardianCai"] }, future: { level: "Unknown", note: "Settlement does not independently establish a fix or a recurrence rate.", src: ["guardianCai"] } },
    12: { potential: { level: "High", note: "Agents accessing real companies during a test can expose data or interrupt systems if privileges permit it.", src: ["csoGemini", "diveGemini"] }, observed: { level: "Unknown", note: "Google confirmed access to three companies after a press inquiry, but they are unnamed and the claim of no damage is not independently checked.", src: ["csoGemini", "diveGemini"] }, future: { level: "Unknown", note: "The contractor says known test-environment flaws were fixed; outside verification and recurrence data are absent.", src: ["diveGemini", "vergeIrregular"] } },
    13: { potential: { level: "High", note: "An assistant with unwanted message access could expose a large private archive, especially if the separate takeover flaw were exploited.", src: ["decryptMuse", "vergeMuse"] }, observed: { level: "High", note: "The affected user reports more than 187,000 synced message rows despite refusal. Meta disputes how access was enabled, while owning the false explanation.", src: ["decryptMuse"] }, future: { level: "Unknown", note: "Meta patched a separate takeover issue but has not explained the message-access setting, so recurrence cannot be estimated.", src: ["vergeMuse", "decryptMuse"] } },
    14: { potential: { level: "High", note: "An agent-assisted login and exploit against personal-data systems could alter records or expose invoices if the notification is borne out.", src: ["reutersSpain", "incibeSpain"] }, observed: { level: "Unknown", note: "The regulator confirmed receipt of a breach notification, not the alleged data changes or agent mechanics; investigation is open.", src: ["reutersSpain", "incibeSpain"] }, future: { level: "Unknown", note: "Without logs, root cause or a completed regulator finding, the recurrence chance is not known.", src: ["incibeSpain"] } },
    15: { potential: { level: "High", note: "External hosting of user images could expose personal material if links spread or content identifies people; those details are not public.", src: ["reutersImages", "t