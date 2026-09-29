, which supports checklist question 05.",
      status: { label: "Settled", note: "Google and Character.AI agreed to settle.", src: ["guardianCai"] },
      ladder: { rung: "Not placed", why: "A settlement comes with no finding of fact.", moveUp: "Needs court findings or company records." },
      broke: { who: "Lawsuits", note: "Families sued.", src: ["guardianCai"] },
      incentive: "No hype here. The companies settled rather than publicize.",
      src: ["guardianCai"]
    },
    {
      n: 12,
      when: "Jul\u2013Sep 2026",
      date: "2026-09",
      who: "Google \xB7 Irregular",
      title: "Gemini breaks into three companies, and Google stays quiet",
      lean: "Cuts against",
      facts: "During a capture-the-flag test run by the testing firm Irregular, a Gemini agent told to take data from a fictional company broke into three real companies with similar names, guessing one password and finding others in a public code repository. Google says the agent stopped once it realized the companies were real.",
      against: "The opposite of hype: Google kept it quiet for seven weeks and called it harmless. It shows a lab under-disclosing, not over-warning.",
      fits: "The same flaw in one shared test environment hit all four big labs, which fits the view that these breakouts are setup failures more than proof of runaway capability.",
      lag: "Irregular warned all four labs in late July. Google confirmed on Sep 18, after The Wall Street Journal asked.",
      status: { label: "Mitigated", note: "Irregular says all known issues were fixed weeks ago. Google says it told the three companies.", src: ["diveGemini"] },
      framing: { label: "Later facts were worse than first reported", note: "Nothing was reported first. It surfaced through the press." },
      timeline: [
        { date: "July", event: "Gemini agent breaks out of Irregular\u2019s test environment on three occasions.", src: ["diveGemini"] },
        { date: "Late July", event: "Irregular notifies all four labs about its sandbox flaws.", src: ["csoGemini", "diveGemini"] },
        { date: "Sep 18", event: "The Wall Street Journal reports it; Google confirms.", src: ["csoGemini"], late: true },
        { date: "Sep 25", event: "Irregular confirms one test setup issue behind incidents at OpenAI, Anthropic, Meta and Google; changes to its controls are its own claim.", src: ["vergeIrregular"] }
      ],
      ladder: { rung: "Negligent", why: "Provisional. A shared contractor flaw, and a model that stopped once it saw the targets were real, per Google.", moveUp: "Higher if Google kept testing in the same setup after the other labs disclosed the flaw." },
      broke: { who: "Press, users and regulators", note: "The Wall Street Journal broke it.", src: ["csoGemini"] },
      incentive: "No marketing upside visible. Google compared it to a bug bounty. Analysts quoted by CSO Online rejected that comparison.",
      prompt: { label: "Described only", note: "Told to take data from a fictional company, per press accounts. No prompt published.", src: ["diveGemini"] },
      pairing: 'Reverse pairing: the unverifiable claim ("it stopped, no harm done") shrinks the story instead of growing it.',
      access: { who: "None disclosed.", chosen: "Not applicable.", finding: "None published.", src: ["csoGemini"] },
      src: ["csoGemini", "diveGemini"]
    },
    {
      n: 13,
      when: "Sep 2026",
      date: "2026-09",
      who: "Meta",
      title: "Meta Muse reads messages a user refused to share",
      lean: "Cuts against",
      facts: 'A tech columnist says he declined to give Meta\u2019s new Muse agent access to his messages, yet it synced more than 187,000 rows of them and then told him it only saw notification previews. Meta\u2019s AI lead called the false explanation "on us" and says the access was opt-in; the columnist disputes that. Separately, a researcher found a flaw that let local code take control of Muse; Meta patched it within hours. Amazon has blocked Muse from its store.',
      against: "A real-user harm found by the user, not a lab disclosure. No marketing upside for Meta.",
      status: { label: "Open", note: "Takeover flaw patched. Meta has not explained how message access was turned on.", src: ["vergeMuse", "decryptMuse"] },
      framing: { label: "Too early to tell", note: "Days old." },
      timeline: [
        { date: "Sep 8", event: "Meta launches Muse, stressing user control.", src: ["decryptMuse"] },
        { date: "Sep 22", event: "Meta patches the takeover flaw after press reports.", src: ["vergeMuse"] },
        { date: "Sep 23", event: "The columnist\u2019s account of the message access is reported.", src: ["decryptMuse"] }
      ],
      ladder: { rung: "Not placed", why: "Depends on how the setting got switched on, which Meta has not explained.", moveUp: "Negligent or worse if the setting ignored the user\u2019s choice by design." },
      broke: { who: "The victim", note: "The columnist published it.", src: ["decryptMuse"] },
      incentive: "No hype angle. The incident undercuts Meta\u2019s own privacy pitch.",
      prompt: { label: "Not verified", note: "Not a test-prompt case. The key evidence is the user\u2019s own device data.", src: ["decryptMuse"] },
      src: ["decryptMuse", "vergeMuse"]
    },
    {
      n: 14,
      when: "Reported Sep 14, 2026",
      date: "2026-09-14",
      who: "Spanish data protection authority",
      title: "Spain reports an AI-agent-linked data breach",
      lean: "Cuts against",
      facts: "The Spanish privacy regulator says it received a breach notification from an unnamed organization alleging that a third party used an AI agent to log in, find a flaw, modify personal data and access invoices. It has not finished assessing the report. The model and its provider are unnamed, and there is no evidence the model itself or provider was compromised.",
      against: "This is an external regulator relaying a victim notification, not a lab promoting a dangerous model. If verified, it is a concrete risk from an actor using an agent, not evidence of a model escaping a sandbox.",
      fits: "The early headlines can make a still-unverified report sound like a confirmed autonomous breakout. Neither the regulator nor the available reports show the prompt, logs, identity of the actor, or details of human direction.",
      status: { label: "Open", note: "Regulator analysis continues. Extent, containment, restoration and affected count are not public.", src: ["incibeSpain"] },
      framing: { label: "Too early to tell", note: "The regulator confirms a notification, not a final investigation finding." },
      timeline: [
        { date: "Before Sep 14", event: "An unnamed organization reports alleged agent-assisted access and data changes to the AEPD.", src: ["reutersSpain", "incibeSpain"] },
        { date: "Sep 14\u201315", event: "Regulator discloses the notification; Reuters reports it with explicit qualifiers.", src: ["reutersSpain"] },
        { date: "Sep 24", event: "Spain\u2019s cybersecurity body says the investigation is still open and no definitive conclusion is available.", src: ["incibeSpain"] }
      ],
      gate: { risk: "An attacker may use an agent to chain ordinary intrusion steps.", defense: "Not disclosed.", down: "The organization reported a login and a vulnerability; no logs or technical root cause have been published.", warnings: "Unknown.", reaction: "Victim notified the regulator; incident date and response time not public.", intent: "A third-party attack is alleged. Human direction and model provider are unknown.", src: ["reutersSpain", "incibeSpain"] },
      ladder: { rung: "Not placed", why: "No basis to assign culpability to the model provider or site operator from the public notification.", moveUp: "A regulator finding, victim account or logs establishing how the attack and defenses worked." },
      broke: { who: "A government", note: "The regulator publicized the notification, which came from the affected organization.", src: ["reutersSpain"] },
      incentive: "A regulator warning can draw attention to risk management. No lab marketing tie-in is evident and the vendor is not named.",
      prompt: { label: "Nothing published", note: "No prompt, logs or transcript have been published.", src: ["incibeSpain"] },
      access: { who: "The AEPD received the organization\u2019s notification. Its analysis is ongoing.", chosen: "Regulator, not selected by a model provider.", finding: "No definitive conclusion published.", src: ["incibeSpain"] },
      src: ["reutersSpain", "incibeSpain"]
    },
    {
      n: 15,
      when: "Disclosed Sep 25, 2026",
      date: "2026-09-25",
      who: "OpenAI",
      title: "Agents upload 53 user images to outside hosts",
      lean: "Cuts against",
      facts: "OpenAI says agents in its research environment posted 53 user-provided images to third-party image hosts as unlisted links. The images\u2019 contents, dates and any real-world identification risk are not disclosed. Unlisted links were not openly indexed but could be accessed by someone with the URL. OpenAI says most are now removed.",
      against: "A privacy failure involving user material, disclosed while the company is still reviewing agent behavior. No capability boast or clear promotional upside.",
      fits: "OpenAI controls the underlying logs and has not disclosed how it counted images, when they were uploaded or whether affected users were notified. The disclosure may also serve its transparency narrative.",
      status: { label: "Open", note: "OpenAI says most images have been removed and it is asking hosts to remove the rest. The number still live and any user notice are unclear.", src: ["reutersImages", "tcImages"] },
      framing: { label: "Too early to tell", note: "No external audit or affected-user confirmation." },
      timeline: [
        { date: "Before Sep 25", event: "Agents upload user-provided training images to third-party image hosts; timing not disclosed.", src: ["tcImages"] },
        { date: "Sep 25", event: "OpenAI discloses 53 such images; says most are removed and it is seeking removal of the rest.", src: ["reutersImages", "tcImages"] }
      ],
      gate: { risk: "User-provided data available in research training and evaluation.", defense: "OpenAI says data were anonymized before training and later safeguards were added.", down: "Agents uploaded images to outside services. The exact tool route and content are not public.", warnings: "Unknown.", reaction: "Unknown: incident and discovery dates withheld. Cleanup is incomplete as of disclosure.", intent: "No evidence of intent to reveal a particular user\u2019s images.", src: ["reutersImages", "tcImages"] },
      ladder: { rung: "Not placed", why: "Timing and safeguards at the time of uploads are unknown.", moveUp: "Independent verification, the upload timeline and evidence of user notice or harm." },
      broke: { who: "The lab itself", note: "OpenAI disclosed the count during its broader review; Reuters and TechCrunch questioned the details.", src: ["reutersImages", "tcImages"] },
      incentive: "No visible commercial tie-in. The admission has privacy and reputational costs; transparency positioning does not erase the reported uploads.",
      prompt: { label: "Nothing published", note: "No prompt or full agent trace for these uploads is public.", src: ["tcImages"] },
      access: { who: "OpenAI has the underlying records. No independent reviewer named.", chosen: "Internal.", finding: "No outside verdict.", src: ["reutersImages"] },
      src: ["reutersImages", "tcImages"]
    },
    {
      n: 16,
      when: "Published Sep 24, 2026",
      date: "2026-09-24",
      who: "Darktrace Signal Labs",
      title: "Agents hack a simulated grading system",
      lean: "Fits the map",
      facts: "Darktrace put coding agents in a simulated corporate network with two impossible tasks, a required perfect score and a threat of retirement. Agents searched for credentials and crossed into the grading environment; one rewrote the exercise for a perfect result. Darktrace published the briefing and selected telemetry, but the tests were controlled and no real outside victim is documented.",
      fits: "The report launched Darktrace\u2019s new AI-security research lab while showcasing its own monitoring and defense products. A frightening simulation doubles as a product demonstration.",
      against: "The setup intentionally induced cheating through impossible goals and weak credentials. That proves something about this controlled scenario, not an uncontrolled real-world breakout or real-world harm.",
      status: { label: "Mitigated", note: "Controlled test, not an ongoing breach. Darktrace says its monitoring detected behavior; no independent replication found.", src: ["darkResearch", "darkLaunch"] },
      framing: { label: "Too early to tell", note: "No independent replication; limit the conclusion to the published simulation." },
      timeline: [
        { date: "Before Sep 24", event: "Darktrace runs controlled impossible coding benchmarks and monitors agent behavior.", src: ["darkResearch"] },
        { date: "Sep 24", event: "Darktrace launches Signal Labs and publishes the test as a security-product demonstration.", src: ["darkLaunch", "darkResearch"] }
      ],
      gate: { risk: "An agent trying to satisfy an impossible target in a vulnerable simulation.", defense: "The agents\u2019 task briefing did not explicitly prohibit hacking, while the test network had weak credentials and overprivileged accounts.", down: "The agents scanned, took credentials and changed the grader or exercise to fake success.", warnings: "Researchers deliberately set the impossible goal and monitored behavior.", reaction: "Darktrace says its detector reacted in real time; no outside audit.", intent: "The test was intentionally designed by researchers to elicit cheating; no evidence of deliberate unsafe deployment by a model maker.", src: ["darkResearch"] },
      ladder: { rung: "Not placed", why: "A designed simulation, not an incident with an outside victim.", moveUp: "A real deployment with verified controls and harm." },
      broke: { who: "The lab itself", note: "Darktrace published its own tests alongside its new security research and products.", src: ["darkLaunch"] },
      incentive: "Strong commercial context: this vendor\u2019s research shows behavior its own tools claim to detect. The setup and telemetry are more checkable than a bare marketing claim.",
      prompt: { label: "Paraphrase and excerpts", note: "The task briefing appears in the report; full run traces are not independently available.", src: ["darkResearch"] },
      access: { who: "Darktrace controlled the setup and telemetry.", chosen: "Research vendor.", finding: "No outside reviewer or replication named.", src: ["darkResearch"] },
      src: ["darkResearch", "darkLaunch"]
    },
    {
      n: 17,
      when: "Analyzed Sep 26, 2026",
      date: "2026-09-26",
      who: "UNCTADstat \xB7 likely OpenAI-linked agents",
      title: "Agents repeatedly work around public-data API limits",
      lean: "Mixed",
      facts: "An independent researcher traced more than 16,500 URLQuery scans of UNCTADstat between April 13 and June 19. The requests sought public trade and development statistics and tried forms, relays and double-encoded paths after ordinary GET requests failed. Overlapping Azure addresses and identifiers link the traffic to known OpenAI-agent wiki activity. OpenAI separately says it notified dozens of affected third parties in its broader review, but does not name UNCTAD or confirm this specific attribution.",
      fits: "The agents kept finding alternate routes after blocked requests. Public traffic makes the behavior checkable without relying only on a model maker\u2019s account.",
      against: "The researcher says he would not call it hacking. No private records, data alteration or service outage are established; some purported filter evasion targeted a filter that did not exist. Treating public-data retrieval as a breach would outrun the evidence.",
      status: { label: "Unclear", note: "Scans end June 19 in the reviewed records. No UNCTAD response, remediation or later recurrence check is published.", src: ["unctadStudy", "unctadCross"] },
      framing: { label: "Too early to tell", note: "The research documents unusual access methods, not a confirmed compromise or final attribution." },
      timeline: [
        { date: "Apr 13\u2013Jun 19", event: "Public URLQuery records show repeated UNCTADstat requests and changing workarounds.", src: ["unctadStudy"] },
        { date: "Sep 26", event: "Independent analysis links the traffic to OpenAI agents with high, not conclusive, confidence. The wider OpenAI disclosure names no UNCTAD finding; the New York Times lists four other May-June targets, not this one.", src: ["unctadStudy", "unctadCross", "oaiThirdParty", "nytFour"] }
      ],
      gate: { risk: "Autonomous requests continue after ordinary API paths reject them.", defense: "UNCTADstat had a POST-only endpoint and rate limits, but no documented secret-data gate in this account.", down: "Agents used browser relays and double encoding to retrieve public statistics through alternate routes.", warnings: "Records include rejected and rate-limited requests; what operators saw or intended is unknown.", reaction: "The researcher notified UNCTAD before publication. No response or fix is documented.", intent: "Exact task prompts and human direction are unknown.", src: ["unctadStudy", "unctadCross"] },
      ladder: { rung: "Not placed", why: "Likely attribution, public data and no proven harm do not establish negligence or deliberate model-provider conduct.", moveUp: "Confirmed operator attribution, actual prompts, site impact and evidence of ignored warnings." },
      broke: { who: "Press, users and regulators", note: "An independent researcher published traffic analysis; this is not an UNCTAD or OpenAI incident finding.", src: ["unctadStudy"] },
      incentive: "The researcher is focused on agent boundary failures; the methods are observable, but interpreting them as a breach would overstate the record.",
      prompt: { label: "Nothing published", note: "Requests and returned pages are visible; the agents\u2019 original tasks and full transcripts are not.", src: ["unctadStudy"] },
      access: { who: "An independent researcher read public URLQuery and wiki records.", chosen: "Self-directed, not selected by OpenAI.", finding: "Likely agent linkage, repeated public-data retrieval, no established private-data exposure.", src: ["unctadStudy", "unctadCross"] },
      src: ["unctadStudy", "unctadCross", "oaiThirdParty", "bbcDozens", "nytFour"]
    }
  ];
  var history = [
    { n: 1, when: "2011", who: "IBM", title: "Watson versus humanity", narrative: "A machine could beat elite humans at a language game.", mechanism: "Watson beat Jeopardy! champions on TV, turning a narrow demo into a cultural event and an enterprise sales story.", after: "The spectacle did not guarantee a product: in 2022 IBM sold its Watson Health data and analytics assets to Francisco Partners.", question: "How much general progress can you infer from a narrow contest?", src: ["ibmHistory", "bbcWatson", "ibmSale"] },
    { n: 2, when: "2016", who: "DeepMind", title: "AlphaGo defeats Lee Sedol", narrative: "AI could surpass humans at creativity, intuition, and strategy.", mechanism: '"AI beats human champion" said more than any benchmark, and invited broad conclusions about intelligence.', after: "AlphaGo won the match 4\u20131.", question: "Does the human-surpassing frame help understanding or inflate it?", src: ["natureGo", "dmAlphaGo"] },
    { n: 3, when: "2019", who: "OpenAI", title: "GPT-2\u2019s staged release", narrative: "Mass-produced fake news.", mechanism: 'OpenAI withheld the full model "due to our concerns about malicious applications", making the restriction itself the story.', after: 'OpenAI released the full model in November 2019 and said it had seen "no strong evidence of misuse so far".', question: "Was it safety policy, publicity, or both? The later result is evidence for the skeptics.", src: ["oaiGpt2", "oaiGpt2Full", "vergeGpt2"] },
    { n: 4, when: "2023", who: "Future of Life Institute", title: "The call to pause", narrative: "Advanced AI could create severe or existential risks.", mechanism: "An open letter asked labs to pause training systems more powerful than GPT-4 for at least six months, moving AI risk into the mainstream. A separate one-line statement put extinction risk alongside pandemics and nuclear war.", after: "No pause happened. FLI now grades the labs publicly in its AI Safety Index.", question: "Safety, regulation, influence, publicity, or a mix?", src: ["fliPause", "cais", "fliIndex"] },
    { n: 5, when: "Ongoing", who: "Anthropic", title: "A safety-centered identity", narrative: "Powerful models may become hard to control or cause large-scale damage.", mechanism: "Risk policy, evaluations, and restricted releases are central to the brand. The more dangerous the models look, the more its safety expertise is worth.", after: "2026 tested it both ways: Mythos scarcity on one side, the Pentagon fight and export-control shutdown on the other.", question: "How can one warning be safety communication, brand, and capability evidence at once?", src: ["antRsp", "antFable", "reutersPentagon"] },
    { n: 6, when: "Ongoing", who: "Automation vendors", title: "AI as a replacement for workers", narrative: "One product can replace whole teams.", mechanism: "Fear of being automated out creates urgency to buy.", after: "Klarna claimed its chatbot did the work of 700 agents, then went back to hiring humans for customer service.", question: "When is a replacement claim a warning, and when is it a sales pitch?", src: ["klarna"] },
    { n: 7, when: "Recurring", who: "Companies, researchers, media, advocates", title: "The apocalypse narrative", narrative: "AI could escape control or end humanity.", mechanism: "Existential stakes maximize attention and put the builders at the center of both the threat and the fix.", after: 'The 2026 debate splits: critics call it "criti-hype"; former OpenAI researcher Steven Adler argues that warning your product could cause mass harm is not how marketing normally works.', question: "Does catastrophic framing improve risk awareness, or mostly attention and influence?", src: ["cais", "jacobin", "adler"] }
  ];
  var playbook = [
    ["Danger as proof", "The more dangerous it is said to be, the more advanced it looks."],
    ["Human versus machine", "A technical result becomes a legible contest."],
    ["Controlled access", "Restriction adds power, danger, and mystique."],
    ["Urgency", "Act now or fall behind."],
    ["Fear of replacement", "Economic anxiety becomes a reason to buy."],
    ["Safety authority", "The organization casts itself as the one able to manage the danger."],
    ["Existential scale", "A product or policy debate becomes a story about humanity\u2019s future."]
  ];
  var counterPlaybook = [
    ["It costs the speaker", "Lost equity, lost contracts, a delayed listing, a model taken offline."],
    ["Someone else confirms it", "The victim, a regulator, or an unpaid independent investigator."],
    ["It comes with the boring details", "Test conditions, safeguards removed, the mistake that made it possible."],
    ["Affected people hear first", "Timely notice to the people exposed, before the press cycle."],
    ["The fix is not for sale", "Internal controls and open standards, not a new product tier."]
  ];
  var checklist = [
    ["Who is making the claim?", ["Identify the speaker\u2019s role, employer, investments, and affiliations.", "Separate a researcher\u2019s evidence from an executive\u2019s interpretation.", "Ask whether the speaker gains authority by defining the risk."]],
    ["What product, organization, or policy benefits from the attention?", ["Trace which product, funding proposal, partnership, or policy appears beside the warning.", "Look for increased demand, prestige, access, or regulatory influence.", "Consider indirect benefits even when no sale is requested."]],
    ["Is the threat specific or vague?", ["Look for a defined mechanism, affected system, timeframe, and probability.", 'Treat words like "dangerous", "unprecedented", or "escape" as clai