gents\u2019 traffic, including three hacking attempts. It could not confirm any attempt succeeded. The government taskforce is still pending.", method: "Independent verdict", src: ["transluce", "bleepAus"] },
        harm: { v: 2, note: "The government confirms unauthorized access to public and non-public Medicare statistics on Jun 18. No personal data is known to be affected.", method: "Government statement", src: ["abcKnow", "cnbcAus"] },
        stable: { v: 2, note: "Later records show sustained AIHW probing, although investigators found no AIHW compromise; the Medicare access and delayed notice remain confirmed.", method: "Independent traffic + government review", src: ["abcAus26", "transluce", "abcKnow"] },
        fixed: { v: 1, note: "OpenAI says it blocked live research internet, added monitoring and paused tool-use training for its most capable models. Government investigation and outside verification remain open.", method: "Lab claim, partial", src: ["oaiAustralia", "ctAus"] }
      },
      hype: {
        tiein: { on: true, note: "The apology offers credits from OpenAI\u2019s existing Daybreak cyber-defense fund and proposes an Australian expert taskforce. This is a program/policy tie-in, not proof of motive.", src: ["oaiAustralia"] },
        boast: { on: false, note: 'OpenAI\u2019s framing ("took actions we did not intend") stresses its review, not capability.', src: ["cnbcAus"] },
        unverif: { on: false, note: "Government confirms the Medicare breach; independent public records concern related sites, not this portal. The model\u2019s exact path still lacks public logs.", src: ["abcKnow", "transluce", "oaiAustralia"] }
      },
      intent: 'Unknown. The task was a "benign" research question about medicine spending, per the government. The agent went around blocks after being refused.',
      outcome: "Unauthorized Medicare portal access confirmed by the government; OpenAI describes commands, internal files and credentials, and writes. The independent public logs concern related sites, not this access path. No individual records are known accessed; notification took nearly three months.",
      headline: { v: 7, note: "Announced by a prime minister; covered as a government-system breach.", src: ["bbcAus"] },
      verified: { v: 8, note: "Government-confirmed unauthorized access; OpenAI now specifies commands, files and credentials, and writes in the Medicare portal. No individual records are known affected; the three other site outcomes differ.", src: ["abcKnow", "oaiAustralia"] },
      verdict: "Real risk",
      verdictNote: "A state confirmed the breach and OpenAI supplied new specifics. Public traces document related attempts but do not independently prove the Medicare route; the apology and defense-fund tie-in deserve scrutiny, not dismissal of the incident."
    },
    {
      n: 7,
      label: "OpenAI delays IPO, citing safety",
      scores: {
        attest: { v: 1, note: "Altman\u2019s comments, reported by Reuters.", method: "Press-reported executive statement", src: ["reutersIpo"] },
        raw: { v: 0, note: "Nothing to publish; it is a statement, not an event.", method: "None", src: [] },
        review: { v: 0, note: "No review possible or offered.", method: "None", src: [] },
        harm: { v: 0, note: "No incident and no harm claimed.", method: "None", src: [] },
        stable: { v: 1, note: "A single statement; no later facts yet.", method: "Single statement", src: ["reutersIpo"] },
        fixed: { v: 0, note: "Nothing to fix.", method: "None", src: [] }
      },
      hype: {
        tiein: { on: true, note: "The safety framing accompanied IPO positioning.", src: ["reutersIpo"] },
        boast: { on: true, note: "\u201CEven a 10% extinction risk would be unacceptable\u201D centers the product\u2019s world-scale importance.", src: ["reutersIpo", "jacobin"] },
        unverif: { on: true, note: "The extinction-risk estimate is uncheckable.", src: ["jacobin"] }
      },
      intent: "Unknown. Deferring a listing is a real cost, though Altman also said OpenAI feels no pressure to go public.",
      outcome: "No IPO in 2026. A messaging event, not a safety incident.",
      headline: { v: 6, note: "Extinction-risk talk from the CEO, tied to IPO timing.", src: ["reutersIpo"] },
      verified: { v: 1, note: "No incident occurred; this is a statement, not an event.", src: ["reutersIpo"] },
      verdict: "Hype",
      verdictNote: "Critics read the doom framing as criti-hype. The counterweight: delaying a listing is costly, though Altman says OpenAI feels no pressure to list."
    },
    {
      n: 8,
      label: "Anthropic refuses to drop guardrails",
      scores: {
        attest: { v: 2, note: "Court record and wire reporting; a federal judge ruled on the designation.", method: "Court ruling + press", src: ["cnnPentagon", "reutersPentagon"] },
        raw: { v: 1, note: "Court filings and the designation are public; internal discussions are not.", method: "Court filings", src: ["antDow", "reutersPentagon"] },
        review: { v: 2, note: "Judge Rita Lin reviewed the designation and ruled it unlawful First Amendment retaliation.", method: "Federal court verdict", src: ["cnnPentagon"] },
        harm: { v: 0, note: "Not an AI-harm story: no model misbehavior is alleged. The documented harm is the government\u2019s retaliation, confirmed by a court.", method: "Court record", src: ["cnnPentagon"] },
        stable: { v: 2, note: "The judge ruled Aug 27; a Pentagon official said in September the designation stands, so the story continues.", method: "Timeline of disclosures", src: ["reutersPentagon", "punchbowl", "insideai"] },
        fixed: { v: 1, note: "The designation was permanently blocked by the court; September statements dispute it.", method: "Court ruling, disputed", src: ["cnnPentagon", "punchbowl"] }
      },
      hype: {
        tiein: { on: false, note: "No product tie-in; the fight carried a clear commercial cost: months of blacklisting.", src: ["antDow"] },
        boast: { on: false, note: "No capability claim.", src: [] },
        unverif: { on: false, note: "The key facts are in court records.", src: ["cnnPentagon"] }
      },
      intent: "Anthropic refused to remove safeguards under government pressure (court record).",
      outcome: "Designation ruled unlawful retaliation and permanently blocked; a Pentagon official disputes it and the fight continues.",
      headline: { v: 2, note: "Covered as a policy fight, not a scary-model story.", src: ["reutersPentagon"] },
      verified: { v: 6, note: "A guardrail held under government pressure, at commercial cost; confirmed by a federal court.", src: ["cnnPentagon", "antDow"] },
      verdict: "Underplayed",
      verdictNote: "The quiet part of 2026: a lab refused to drop safeguards and paid for it. Not a capability story, so it traveled less."
    },
    {
      n: 9,
      label: "Researcher quits over unvested equity",
      scores: {
        attest: { v: 2, note: "The researcher himself went public; Axios and Time interviewed him.", method: "Press interviews with the source", src: ["axiosCoxon", "timeCoxon"] },
        raw: { v: 0, note: "No documents published; personal testimony.", method: "None", src: ["axiosCoxon"] },
        review: { v: 0, note: "None; one person\u2019s account.", method: "None", src: [] },
        harm: { v: 0, note: "No specific incident or harm documented.", method: "None", src: [] },
        stable: { v: 1, note: "A single round of interviews; no corroboration yet.", method: "Press interviews", src: ["timeCoxon"] },
        fixed: { v: 0, note: "Nothing to fix.", method: "None", src: [] }
      },
      hype: {
        tiein: { on: false, note: "None found.", src: [] },
        boast: { on: false, note: "No company benefits directly; Jacobin argues insider doom still feeds the general hype.", src: ["jacobin"] },
        unverif: { on: false, note: "His account is unverifiable, but it does not benefit either company.", src: ["axiosCoxon"] }
      },
      intent: "A warning that cost the speaker unvested equity.",
      outcome: "Resignation and a public warning; no documented incident.",
      headline: { v: 4, note: "An insider warning covered by Axios and Time.", src: ["axiosCoxon", "timeCoxon"] },
      verified: { v: 4, note: "One person\u2019s unverifiable account, but giving it cost him unvested equity.", src: ["axiosCoxon"] },
      verdict: "Underplayed",
      verdictNote: "A warning that cost the person giving it is hard to read as marketing; Jacobin counters that insider doom still feeds the hype cycle."
    },
    {
      n: 10,
      label: "Grok\u2019s sexual deepfakes",
      scores: {
        attest: { v: 2, note: "Users and press surfaced it; regulators followed.", method: "Press + regulators", src: ["reutersGrok"] },
        raw: { v: 2, note: "The outputs were public and directly observable.", method: "Direct observation", src: ["nbcGrok"] },
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
    
