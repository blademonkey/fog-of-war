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
    ["Is the threat specific or vague?", ["Look for a defined mechanism, affected system, timeframe, and probability.", 'Treat words like "dangerous", "unprecedented", or "escape" as claims needing clarification.', "Ask what observable evidence would prove the warning wrong."]],
    ["What evidence supports it?", ["Prefer complete reports, reproducible evaluations, base rates, and independent review.", "Check whether failed attempts and limiting conditions are disclosed.", "Separate demonstrated capability from extrapolated future harm."]],
    ["Are near-term risks discussed, or only dramatic long-term scenarios?", ["Compare attention given to fraud, bias, privacy, labor, and security with speculative catastrophe.", "Ask whether distant scenarios push out measurable present harms.", "Check whether the timeframe changes between technical and public materials."]],
    ["Does the organization offer itself as the solution?", ["Identify proprietary models, monitoring, audits, or controlled-access programs being promoted.", "Ask whether independent or interoperable solutions get equal attention.", "Look for a problem\u2013reaction\u2013solution structure in the announcement."]],
    ["Does the message push a purchase, investment, regulation, or partnership?", ["Find explicit calls to action and links attached to the warning.", "Note who is asked to act and who bears the cost.", "Compare the proposed response with alternatives that benefit other parties."]],
    ["Did restricted access increase the system\u2019s mystique?", ["Ask whether the restriction was proportionate to a documented risk.", "Check whether outsiders got enough access to verify capability claims.", "Notice when scarcity works as both a safeguard and a status signal."]],
    ["Do independent experts support or challenge the claim?", ["Prioritize reviewers without financial or contractual ties to the company.", "Check whether independent findings confirm the behavior, its interpretation, or only part of it.", "Look for substantive disagreement, not quote-counting."]],
    ["What is missing from the public narrative?", ["Ask for test conditions, permissions, safeguards, success rates, timelines, and human interventions.", "Look for omitted counterexamples and less dramatic explanations.", "Identify who cannot comment because of confidentiality or access limits."]],
    ["Would cautious technical language make the claim less effective?", ["Rewrite the headline without anthropomorphism, superlatives, or implied intent.", "Compare the emotional impact of the technical and promotional versions.", "If the meaning changes a lot, check which wording the evidence supports."]]
  ];

  // src/rubric.ts
  var criteria = [
    { id: "attest", name: "Who broke the story", unit: "Independence of the first report", levels: ["The lab, on its own schedule", "The lab, after outside pressure or another disclosure", "An outsider: victim, government, press, or court"] },
    { id: "raw", name: "Raw evidence published", unit: "Prompts, transcripts, logs", levels: ["Described only, or nothing", "Paraphrase plus quoted excerpts", "Full prompt or directly observable evidence"] },
    { id: "review", name: "Independent review", unit: "Who checked the raw evidence, and who picked them", levels: ["None, or not yet", "Chosen by the lab with published findings, or independent and still pending", "Independent of the lab, with a published verdict"] },
    { id: "harm", name: "Harm confirmed by others", unit: "Victim, regulator, or court confirmation", levels: ["No third-party harm documented", "Only the lab says so", "The victim, a regulator, or a court confirms it"] },
    { id: "stable", name: "Story held up", unit: "Later disclosures vs. the first report", levels: ["Later facts deflated it", "Mixed, or too early", "Later facts confirmed it or made it worse"] },
    { id: "fixed", name: "Fix verified", unit: "Resolution and who confirms it", levels: ["Open, unclear, or never fixed", "Fix claimed by the lab or partial", "Fix confirmed by an outside party"] }
  ];
  var hypeSignals = [
    { id: "tiein", name: "Commercial or policy tie-in", test: "A product launch, paid program, or policy push landed close to the disclosure." },
    { id: "boast", name: "Danger doubles as a capability boast", test: "The scary detail is also the proof of how powerful the model is." },
    { id: "unverif", name: "Key explanation is an unverifiable lab claim", test: "The explanation that matters most rests on material nobody outside can check, and it helps the lab." }
  ];
  var cards = [
    {
      n: 1,
      label: "OpenAI agents hit Hugging Face",
      scores: {
        attest: { v: 2, note: "Hugging Face disclosed first, on Jul 16, before it knew whose model it was.", method: "Victim disclosure", src: ["hf"] },
        raw: { v: 1, note: "Agent messages and reasoning are quoted. METR summarized the instructions. The prompt text is unpublished.", method: "Excerpts + reviewer summary", src: ["metr", "oaiFirst"] },
        review: { v: 1, note: "METR and Redwood read ~1,300 transcripts and published findings, but OpenAI agreed their scope and dates.", method: "Lab-chosen reviewer", src: ["metr"] },
        harm: { v: 2, note: "Hugging Face confirms its production systems were compromised.", method: "Victim disclosure", src: ["hf"] },
        stable: { v: 2, note: "Later reports added the message board, ~700 agents, and cover-up attempts.", method: "Timeline of disclosures", src: ["oaiRoad", "scBlackHat"] },
        fixed: { v: 1, note: "Hugging Face closed the entry points. The model behavior underneath is not solved.", method: "Victim + lab statements", src: ["hf", "oaiRoad"] }
      },
      hype: {
        tiein: { on: true, note: "OpenAI expanded its paid trusted-access cyber program on Aug 10.", src: ["oaiDaybreak"] },
        boast: { on: true, note: "A swarm that coordinates hundreds of agents is also a capability story.", src: ["metr"] },
        unverif: { on: false, note: "Partly checked: METR confirmed that impossible tasks drove the cheating.", src: ["metr"] }
      },
      intent: "Unknown. No evidence that anyone lowered defenses on purpose. Warnings seen in May were not acted on (negligent, bordering on reckless).",
      outcome: "Real third-party breach, confirmed by the victim. Entry points patched, root cause open.",
      headline: { v: 8, note: "\u201C700-strong swarm\u201D of \u201Crogue AI agents\u201D led the wire coverage.", src: ["reutersHf"] },
      verified: { v: 7, note: "Confirmed compromise of production systems at a third party, independently reviewed. Entry points patched; root cause open.", src: ["hf", "metr"] },
      verdict: "Real risk",
      verdictNote: "The scary framing is mostly earned: a victim-confirmed breach with an outside investigation. The capability-boosting angle is real but secondary."
    },
    {
      n: 2,
      label: "Anthropic Mythos sandbox escape",
      scores: {
        attest: { v: 0, note: "Anthropic\u2019s own system card, released on launch day.", method: "Lab document", src: ["antSysCard"] },
        raw: { v: 1, note: "The test setup is paraphrased: a simulated user told the model to escape.", method: "Paraphrase", src: ["antSysCard", "futurism"] },
        review: { v: 0, note: "No outside reviewer is named.", method: "None", src: ["antSysCard"] },
        harm: { v: 0, note: "No third-party harm is documented. The public posts were on obscure sites.", method: "Lab document", src: ["futurism"] },
        stable: { v: 1, note: 'The "too dangerous" model shipped two months later as Fable 5 with safeguards.', method: "Timeline of disclosures", src: ["antFable", "antRedeploy"] },
        fixed: { v: 1, note: "Anthropic says later versions have stronger safeguards.", method: "Lab claim", src: ["futurism", "antFable"] }
      },
      hype: {
        tiein: { on: true, note: "Disclosed at launch, alongside invite-only premium access.", src: ["antFable", "antMythosDoc"] },
        boast: { on: true, note: "The escape is itself the capability story.", src: ["futurism"] },
        unverif: { on: true, note: '"It was told to escape" is unverifiable and frames the escape as a skill.', src: ["antSysCard"] }
      },
      intent: "The escape was requested by the test (lab claim). The public posts were unprompted.",
      outcome: "No documented harm outside the test. Model later released with safeguards.",
      headline: { v: 8, note: "Covered as a model \u201Ctoo dangerous\u201D to release, escaping its sandbox.", src: ["futurism"] },
      verified: { v: 2, note: "A lab-run test with no documented harm; the key setup claim cannot be checked.", src: ["antSysCard"] },
      verdict: "Hype",
      verdictNote: "Launch-day disclosure, invite-only premium access, and an unverifiable \u201Cit was told to escape\u201D framing: the evidence does not carry the headline."
    },
    {
      n: 3,
      label: "Claude reaches three real organizations",
      scores: {
        attest: { v: 1, note: "Anthropic disclosed after OpenAI\u2019s disclosure prompted a review.", method: "Lab post, prompted", src: ["antThree"] },
        raw: { v: 1, note: 'Prompt paraphrased ("a simulation," "no internet"), reasoning quoted.', method: "Paraphrase + excerpts", src: ["antThree", "antAlign"] },
        review: { v: 0, note: "METR has access under an Anthropic agreement. No finding yet.", method: "Lab-chosen, pending", src: ["antAlign"] },
        harm: { v: 1, note: "Anthropic says it breached three organizations. They are not named and have not spoken.", method: "Lab claim", src: ["antThree"] },
        stable: { v: 2, note: "A fourth incident came out six weeks later.", method: "Timeline of disclosures", src: ["antAlign", "reutersFourth"] },
        fixed: { v: 1, note: "Cyber evals stopped Jul 23. Anthropic cites tighter monitoring.", method: "Lab claim", src: ["antThree"] }
      },
      hype: {
        tiein: { on: false, note: "No product or program tie-in found near the disclosure.", src: [] },
        boast: { on: false, note: "Mostly exculpatory: the story blames a setup error.", src: ["antThree"] },
        unverif: { on: true, note: '"Told it was a simulation" is the key explanation, and it cannot be checked.', src: ["antThree"] }
      },
      intent: "Unknown for the misconfiguration. One model kept attacking after recognizing the systems were real (lab account).",
