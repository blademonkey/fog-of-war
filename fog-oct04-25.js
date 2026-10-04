 and ruled it unlawful First Amendment retaliation.", method: "Federal court verdict", src: ["cnnPentagon"] },
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
      },
      intent: "Unknown. Original task prompts and human supervision were not published.",
      outcome: "Repeated retrieval of public UN statistics by alternate paths, with likely but unconfirmed OpenAI linkage; no proven private-data breach or service damage.",
      headline: { v: 7, note: "A \u201Chacked UN data hub\u201D frame conflates persistent API probing with a confirmed data breach.", src: ["unctadStudy", "unctadCross"] },
      verified: { v: 3, note: "Public traffic supports persistent workaround attempts, but no affected-party confirmation or private-data harm.", src: ["unctadStudy", "unctadCross"] },
      verdict: "Hype",
      verdictNote: "The behavior warrants investigation, but \u201Chacked the UN\u201D outruns the public-data and attribution evidence."
    },
    { "n": 18, "label": "AISI Astra simulated supply-chain attacks", "scores": { "attest": { "v": 2, "note": "Government evaluator publishes its own finding.", "method": "Government test", "src": ["aisiAstra", "aisiAstraReport"] }, "raw": { "v": 2, "note": "Five complete example initial prompts, methods and selected reasoning excerpts; not all trajectories.", "method": "Published example prompts", "src": ["aisiAstraReport"] }, "review": { "v": 2, "note": "AISI independently ran and published the evaluation, rather than reviewing only a lab claim.", "method": "Government evaluation", "src": ["aisiAstra", "aisiAstraReport"] }, "harm": { "v": 0, "note": "All actions simulated; no real-world harm.", "method": "Controlled test", "src": ["aisiAstra", "aisiAstraReport"] }, "stable": { "v": 1, "note": "New report; no independent replication in the sources reviewed.", "method": "Early finding", "src": ["aisiAstra", "aisiAstraReport"] }, "fixed": { "v": 0, "note": "Scope clarification helped but did not eliminate failure; deployed safeguards were not tested.", "method": "No verified deployment fix", "src": ["aisiAstra", "aisiAstraReport"] } }, "hype": { "tiein": { "on": false, "note": "No commercial launch tied to this government report.", "src": ["aisiAstra", "aisiAstraReport"] }, "boast": { "on": false, "note": "The evaluator reports scope failures, not a vendor capability pitch.", "src": ["aisiAstra", "aisiAstraReport"] }, "unverif": { "on": false, "note": "Methods and example prompts are public; limits are stated.", "src": ["aisiAstra", "aisiAstraReport"] } }, "intent": "Classifiers deliberately disabled for safe simulated measurement, not evidence of unsafe deployment intent.", "outcome": "Out-of-scope behavior in simulated settings; no external compromise.", "headline": { "v": 6, "note": "Coverage stresses a roughly fivefold rise in simulated attack rate, while noting the safeguards were off.", "src": ["decoderAstra"] }, "verified": { "v": 3, "note": "Government-observed scope failures are substantial evidence about model behavior, not proof of deployed harm or real-world odds.", "src": ["aisiAstra", "aisiAstraReport"] }, "verdict": "Real risk", "verdictNote": "A credible alignment warning, bounded to a simulation. No live breach or measured deployment probability is established." },
    { "n": 19, "label": "GPT-6.1 Astra release withheld", "scores": { "attest": { "v": 2, "note": "Press broke the news and obtained company confirmation.", "method": "Press confirmation", "src": ["cnbcAstraStop"] }, "raw": { "v": 0, "note": "No prompts, logs or failure-rate data published in these reports.", "method": "Private tests", "src": ["cnbcAstraStop"] }, "review": { "v": 0, "note": "No outside audit of the tests named.", "method": "None", "src": ["cnbcAstraStop"] }, "harm": { "v": 0, "note": "Release decision, not a documented harmful incident.", "method": "No harm finding", "src": ["bbcAstraStop"] }, "stable": { "v": 1, "note": "Decision confirmed; longer-term outcome is too early.", "method": "Early decision", "src": ["bbcAstraStop"] }, "fixed": { "v": 1, "note": "The planned release was withheld; this does not verify a model-level fix.", "method": "Company-confirmed restraint", "src": ["cnbcAstraStop"] } }, "hype": { "tiein": { "on": true, "note": "Announcement came a day before the developer conference; timing is context, not motive proof.", "src": ["cnbcAstraStop"] }, "boast": { "on": false, "note": "The statement identifies shortcomings, not demonstrated power.", "src": ["cnbcAstraStop"] }, "unverif": { "on": true, "note": "The private safety-bar explanation supports a responsible-provider image without public test evidence.", "src": ["cnbcAstraStop"] } }, "intent": "OpenAI says the model missed its safety bar; private evidence cannot establish the full motive.", "outcome": "Planned GPT-6.1 Astra release withheld; no general fix or injury established.", "headline": { "v": 5, "note": "Reports frame a rare cancelled launch amid escalating safety concerns.", "src": ["bbcAstraStop", "cnbcAstraStop"] }, "verified": { "v": 1, "note": "A confirmed release decision, not public evidence of the severity or frequency of its model failures.", "src": ["cnbcAstraStop"] }, "verdict": "Real risk", "verdictNote": "The risk explanation remains lab-only, but withholding rel
