ommitted or otherwise copied out; this is not a spontaneous external send by the model. Including historical settings, shared settings and agent transcripts, Apiiro counted 2,539 distinct secrets in 1,994 repositories, not 2,539 confirmed working credentials. The company used format and public-host rules plus masked LLM review, excluded known placeholders and says it neither tried credentials nor contacted hosts. It says one notified company confirmed its key had been live. That confirmation is relayed by Apiiro, not independently read from the owner. No unauthorized use or third-party intrusion is documented. Apiiro says Anthropic\u2019s Claude Code lead stated it was looking into prevention and would prototype basic secret scanning; that response is relayed, not read at its original source. The primary research was read directly in the browser; The Hacker News corroborates the main counts and mechanism. This is an exposure study, not an agent escaping its task.", "fits": "A headline about thousands of leaked secrets can be mistaken for thousands of working credentials or breaches. Validity was not tested, the owner confirmation is relayed, and code publication is a necessary step. Apiiro sells development-security tools.", "against": "The study identifies a specific persistent plaintext recording behavior and public exposure at scale. Approval files can widen the places credentials are stored, and local ignore settings do not reliably travel with a repository. These are concrete software-security concerns rather than a vague capability boast.", "src": ["apiSecrets", "thnSecrets"], "status": { "label": "Unresolved", "note": "Prevention work is reported as being considered; no shipped fix or verified cleanup established. Deleting a current file does not remove history or forks.", "src": ["apiSecrets", "thnSecrets"] }, "framing": { "label": "Needs qualification", "note": "Public exposure of credential-like strings, not thousands of validated credentials or confirmed intrusions." }, "prompt": { "label": "Partial evidence", "note": "Mechanism, collection method and masked examples published; live credentials were not tested and are not reproduced here.", "src": ["apiSecrets"] }, "lag": "Collected Nov 1-3; organizations notified Nov 2-3; research Nov 5; secondary report Nov 7." },
    { "n": 55, "when": "Exploited Oct 27; found Nov 4; disclosed Nov 7, 2026", "date": "2026-11-07", "who": "Mittwald \xB7 German web host", "title": "Mittwald confirms an MCP-server intrusion into 56 customer projects; its AI-tool attribution rests on attacker speed", "lean": "Mixed", "facts": "Mittwald, a German hosting provider, says an attacker exploited a flaw in its MCP server (the interface that lets customers connect AI assistants to its mStudio platform) on Oct 27, reading users\u2019 session tokens, after testing the flaw from Oct 21 and moving as a normal user from Oct 23. It found unusual behavior on Nov 4, blocked the first attacker account, switched off the MCP server and later other access, and had forensics review 56 compromised projects. It says it treats all data from Oct 27 as compromised, that no passwords were read (session tokens were, and all were revoked), that the customer center and its managed websites were never affected, and that it has no evidence the data was published. It says the logs show the attacker moved extremely fast, with seconds between steps, which it says points to AI tools. The Record reports Mittwald gave no other evidence of AI involvement and did not say how it separates AI tools from ordinary scripts, and that it is unclear whether the flaw was in Mittwald\u2019s code or in open-source MCP libraries. External forensic experts are assisting and a detailed account is promised. The company\u2019s own page and The Record were read.", "fits": "The AI attribution is an inference from timing; no agent logs, model or tool is named, and a fast script would look the same. The flaw sat in an MCP interface, which is relevant to agent tooling, but the intrusion route is a conventional software flaw.", "against": "The victim itself confirms real access to customer projects and a token read, with forensic experts engaged. It shows that interfaces built to connect AI assistants to accounts are a new attack surface, whether or not the attacker used AI.", "src": ["mwBlog", "mwRec"], "status": { "label": "Partly resolved", "note": "Mittwald says the MCP server is offline, tokens revoked and the platform back up; affected sites stay blocked and a full account is pending. No outside review is published.", "src": ["mwBlog"] }, "framing": { "label": "Needs qualification", "note": "Confirmed intrusion through an AI-assistant interface; the claim the attacker used AI rests on speed alone." }, "prompt": { "label": "Nothing published", "note": "No logs, prompts or tool names published.", "src": ["mwBlog", "mwRec"] }, "lag": "Flaw tested Oct 21; exploited Oct 27; found Nov 4; disclosed Nov 5 to 7." },
    { "n": 56, "when": "Found early Nov; reported Nov 8, 2026", "date": "2026-11-08", "who": "Malbear Labs \xB7 European telecom", "title": "Malbear Labs says an exposed workspace shows a jailbroken DeepSeek agent attacking a European telecom for two weeks", "lean": "Mixed", "facts": "Malbear Labs, a malware-research firm, says a routine sweep for open directories found an operator\u2019s workspace containing about 70 session transcripts, recon output, tool staging, credential caches and exfiltrated database dumps. It says the transcripts show a custom harness built on DeepSeek Flash with a long system prompt written to suppress refusals, run by a Chinese-speaking operator who gave short goals such as a target subnet and Go on, and checked in later. Malbear says the agent entered a European telecom provider through a Cisco BroadWorks flaw fixed in August, reached other hosts, adapted when security tools blocked it (for example writing a replacement tunnel), and compiled a list of 13 hosted organizations. It reports dozens of credential sets and, from the agent\u2019s own reports, subscriber billing records, Zabbix backups and what it calls millions of patient records via a database with default credentials. Infosecurity Magazine notes the post does not say whether any victim confirmed the claims, what was taken versus staged, or whether all 13 organizations were breached. The victims are unnamed, the open directory address is withheld, and no victim or authority confirmation was read. The transcripts are not public. Malbear\u2019s page contains an embedded jailbreak prompt; it is quoted as evidence only and is not reproduced here.", "fits": "Everything about the agent\u2019s behavior comes from one researcher reading files nobody else can check, and the volume claims come from the agent\u2019s own reports, which agents have been shown to overstate. The way in was an unpatched known flaw and default credentials.", "against": "The report is detailed and specific, with named flaws, tools and indicators, and it describes an operator delegating most of an intrusion to a model, which is the pattern the alarm describes. Outside coverage repeats it but adds no verification.", "src": ["mbSnow", "ismSnow"], "status": { "label": "Unresolved", "note": "No victim confirmation, takedown or independent review read; the transcripts are not public.", "src": ["mbSnow", "ismSnow"] }, "framing": { "label": "Needs qualification", "note": "Researcher-reported agent activity; scale of theft rests on the agent\u2019s own reports and is not victim-confirmed." }, "prompt": { "label": "Partial evidence", "note": "Excerpts, tool inventory and indicators published; full transcripts are not.", "src": ["mbSnow"] }, "lag": "Two weeks of activity; found early Nov; published Nov 8; press Nov 9." }
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
      verified: { v: 4, note: "Real-
