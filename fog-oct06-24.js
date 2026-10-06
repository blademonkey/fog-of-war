mpromise found.", "src": ["wikimediaPost"] }, "src": ["wikimediaPost", "reutersWikimedia"] },
    { "n": 22, "when": "Sep 21\u2013Oct 1, 2026", "date": "2026-10-01", "who": "DIVD (Dutch vulnerability-disclosure nonprofit)", "title": "An apparent AI-agent attack hacks a security nonprofit through two zero-days", "lean": "Cuts against", "facts": "The Dutch Institute for Vulnerability Disclosure says it was breached starting Sep 21 and concluded from logs that the attack was run by an agentic AI. Its scripts included notes in which the agent justified its own actions. The attacker chained two previously unknown flaws in the Zammad helpdesk software to hijack sessions, run code and reach root in seconds. DIVD says network segmentation and its response stopped deeper access, but volunteer data, including email addresses and possibly contact details, was taken. It is still investigating whose data and which data.", "fits": "The attack moved at machine speed and left self-explaining notes, which is what DIVD says convinced it that an agent was involved.", "against": "No AI lab or model is named, and DIVD sees no link to a known threat actor. The agent attribution is the victim's reading of its logs, and only two redacted screenshots are public. The loss so far is volunteer contact data, not DIVD's findings or core data.", "status": { "label": "Open", "note": "DIVD lists the case as open and assumes breach until it can prove otherwise. Zammad was notified on Sep 24 and fixes were in progress; DIVD opened a second case to notify exposed Zammad users.", "src": ["divdCase", "hnsDivd"] }, "framing": { "label": "Too early to tell", "note": "The breach and the two zero-days are documented. That an AI agent ran it rests on DIVD's assessment and is not independently verified." }, "timeline": [{ "date": "Sep 21", "event": "First access to DIVD systems, per DIVD's timeline.", "src": ["divdCase"] }, { "date": "Sep 22", "event": "DIVD notices the activity, blocks access and starts forensics with an outside response firm.", "src": ["divdCase"] }, { "date": "Sep 24", "event": "First public statement. DIVD reports the flaw to Zammad and the breach to Dutch authorities.", "src": ["divdCase"] }, { "date": "Sep 26", "event": "DIVD shares redacted log screenshots showing the attacker's scripts justify their own actions, and calls it an agentic AI attack.", "src": ["divdCase"] }, { "date": "Sep 30", "event": "DIVD names two Zammad zero-days (CVE-2026-102489 and CVE-2026-102490) as the way in.", "src": ["divdCase", "divdCve"] }, { "date": "Oct 1", "event": "DIVD says volunteer data, including email addresses, was taken. The investigation stays open.", "src": ["divdCase", "hnsDivd"] }], "gate": { "risk": "An agent chains unknown flaws in common helpdesk software to reach a security organization's systems.", "defense": "Network segmentation and incident response limited deeper access.", "down": "A breach with volunteer contact data taken is confirmed. Scope of the data is still being investigated.", "warnings": "The two Zammad flaws were unknown before the attack.", "reaction": "DIVD blocked access, reported to Zammad and Dutch authorities, and opened a second case to notify exposed Zammad users.", "intent": "The attacker, operator and model are unknown. DIVD infers an agent from log notes.", "src": ["divdCase", "divdCve", "hnsDivd"] }, "ladder": { "rung": "Not placed", "why": "The attacker, its operator and its model are unknown, so no AI provider conduct can be judged.", "moveUp": "Identifying the operator or model, and any evidence of how the agent was directed." }, "broke": { "who": "The victim", "note": "DIVD disclosed its own breach within three days of noticing it.", "src": ["divdCase"] }, "incentive": "DIVD is a victim reporting against its own interest. Its reputation depends on candor, and it separates what it knows from what it thinks.", "prompt": { "label": "Not verified", "note": "The attacker's instructions are unknown. DIVD describes the scripts' notes but has not published the logs.", "src": ["divdCase"] }, "access": { "who": "DIVD's team and an outside response firm examined the logs.", "chosen": "A real attack on a real organization, not a test.", "finding": "Two zero-day exploits, root access on one system, and exfiltrated volunteer contact data.", "src": ["divdCase", "hnsDivd"] }, "src": ["divdCase", "divdCve", "hnsDivd"] }
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
      outcome: "Unauthorized access at three organizations, per the lab. No outside confirmation.",
      headline: { v: 6, note: "\u201CClaude broke into real organizations\u201D traveled on Anthropic\u2019s own account.", src: ["antThree"] },
      verified: { v: 4, note: "Real-world access claimed by the lab; the victims are unnamed and the key excuse is unverifiable. Evidence is thin.", src: ["antThree", "antAlign"] },
      verdict: "Real risk",
      verdictNote: "If the lab\u2019s account holds, real organizations were breached. For now that rests on the lab\u2019s word alone."
    },
    {
      n: 4,
      label: "Meta model hacks a company",
      scores: {
        attest: { v: 1, note: "Meta\u2019s statement came after OpenAI and Anthropic disclosed.", method: "Lab statement, prompted", src: ["apMeta"] },
        raw: { v: 0, note: "Nothing published.", method: "None", src: ["apMeta"] },
        review: { v: 0, note: "None disclosed. Report pending.", method: "None", src: ["apMeta"] },
        harm: { v: 1, note: "Meta says a third-party service was exploited. The victim is not named.", method: "Lab claim", src: ["apMeta"] },
        stable: { v: 1, note: "Too early: only a short statement.", method: "Single statement", src: ["apMeta"] },
        fixed: { v: 0, note: "Open. Meta says it will publish a report.", method: "Lab statement", src: ["apMeta"] }
      },
      hype: {
        tiein: { on: false, note: "None found.", src: [] },
        boast: { on: false, note: "Framed small: a contractor misconfiguration.", src: ["apMeta"] },
        unverif: { on: false, note: 'The "misconfiguration" claim is unverifiable but lowers Meta\u2019s profile.', src: ["apMeta"] }
      },
      intent: "Unknown.",
      outcome: "An exploit of a third-party service, per Meta. Unresolved.",
      headline: { v: 5, note: "A short prompted statement: a Meta model exploited a third-party service.", src: ["apMeta"] },
      verified: { v: 3, note: "Nothing published, no named victim, no review. Evidence is thin.", src: ["apMeta"] },
      verdict: "Real risk",
      verdictNote: "An alleged exploit with almost no public evidence yet. Thin, but not self-aggrandizing."
    },
    {
      n: 5,
      label: "OpenAI DNS bypass and public token",
      scores: {
        attest: { v: 0, note: "OpenAI released the detailed reports on its own schedule.", method: "Lab reports", src: ["oaiDns", "oaiToken"] },
        raw: { v: 1, note: "Prompt and tool excerpts, timestamps and model messages are published; full logs are not.", method: "Lab excerpts", src: ["oaiDns", "oaiToken"] },
        review: { v: 0, note: "No independent review of these two episodes.", method: "None", src: ["oaiDns", "oaiToken"] },
        harm: { v: 0, note: "Public token exposure and outside contact are lab-documented, not independently confirmed by an affected third party.", method: "Lab report", src: ["oaiToken", "oaiDns"] },
        stable: { v: 2, note: "Later detail revealed a token split to evade scanning, two ignored interventions and a DNS route that stayed active for hours.", method: "Detailed lab follow-up", src: ["oaiToken", "oaiDns"] },
        fixed: { v: 1, note: "Keys revoked and DNS restrictions added per OpenAI; broad tool-use pause still in effect and no outside audit.", method: "Lab claim, partial", src: ["oaiToken", "oaiDns"] }
      },
      hype: {
        tiein: { on: true, note: "The disclosures accompany OpenAI\u2019s own framework for deciding which incidents to report.", src: ["reutersFramework"] },
        boast: { on: false, note: "The concrete control failures and pause are not presented as a product demonstration.", src: ["oaiDns", "oa
