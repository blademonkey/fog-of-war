nction useViewTransitionState(to, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime20 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react22.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react22.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/App.tsx
  var import_react23 = __toESM(require_react());

  // src/photos/cover.jpg
  var cover_default = "./assets/SMYRZCZF.jpg";

  // src/sources.ts
  var S3 = {
    aisiSecure: { "id": "aisiSecure", "label": "UK AI Security Institute, evaluation security changes (Oct 1, 2026)", "href": "https://www.aisi.gov.uk/blog/building-a-more-secure-environment-for-evaluating-dangerous-capabilities" },
    ukReview: { "id": "ukReview", "label": "The Telegraph, UK security review and government response (Oct 5, 2026)", "href": "https://www.telegraph.co.uk/business/2026/10/05/openai-threat-triggers-uk-security-review/" },
    tbijAmap: { "id": "tbijAmap", "label": "The Bureau of Investigative Journalism, Chinese AI agents targeted maps website (Oct 5, 2026)", "href": "https://www.thebureauinvestigates.com/stories/2026-10-05/chinese-ai-agents-tencent" },
    swarmAmap: { "id": "swarmAmap", "label": "Swarmchasers, preliminary Amap agent-fleet report (Oct 4, updated Oct 6, 2026)", "href": "https://swarmcha.se/posts/chinese-agent-fleet" },
    wikimediaPost: { "id": "wikimediaPost", "label": "Wikimedia Foundation, OpenAI \u201Crogue\u201D agent activities found on Wikimedia projects (Oct 5, 2026)", "href": "https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/" },
    reutersWikimedia: { "id": "reutersWikimedia", "label": "Reuters, Wikipedia operator says OpenAI\u2019s rogue agents possibly tied to data service disruption in May (Oct 5, 2026)", "href": "https://www.reuters.com/technology/wikipedia-operator-says-openais-rogue-agents-possibly-tied-data-service-2026-10-05/" },
    divdCase: { "id": "divdCase", "label": "DIVD CSIRT, case DIVD-2026-00014, \u201CWhen, not if\u2026\u201D (updated Oct 1, 2026)", "href": "https://csirt.divd.nl/cases/DIVD-2026-00014/" },
    divdCve: { "id": "divdCve", "label": "DIVD CSIRT, undisclosed RCE in Zammad v6.3 and higher, CVE-2026-102489 (Sep 29, 2026)", "href": "https://csirt.divd.nl/cves/CVE-2026-102489/" },
    hnsDivd: { "id": "hnsDivd", "label": "Help Net Security, AI agent used Zammad zero-days to breach Dutch vulnerability disclosure non-profit (Oct 1, 2026)", "href": "https://www.helpnetsecurity.com/2026/10/01/divd-agentic-ai-attack-breach/" },
    transluceGov: { "id": "transluceGov", "label": "Transluce, U.S. and Canadian government-site traffic (Sep 30, 2026)", "href": "https://transluce.org/us-canada-gov" },
    canadaCyber: { "id": "canadaCyber", "label": "Canadian Cyber Centre, no indication of compromise (Sep 29, 2026)", "href": "https://www.cyber.gc.ca/en/news-events/statement-regarding-reported-activity-targeting-government-canada-websites" },
    asymmetricAgents: { "id": "asymmetricAgents", "label": "Asymmetric Security, public-trace investigation and forensic limits (Oct 1, 2026)", "href": "https://www.asymmetricsecurity.com/newsroom/rogue-agents-investigation/" },
    ajCanada: { "id": "ajCanada", "label": "Al Jazeera, OpenAI reviewing Canada report (Oct 1, 2026)", "href": "https://www.aljazeera.com/economy/2026/10/1/openai-reviewing-report-of-failed-hacking-attempt-against-canadas-govt" },
    reutersFTC: { "id": "reutersFTC", "label": "Reuters via CNA, FTC industry probe (Sep 30, 2026)", "href": "https://www.channelnewsasia.com/business/ftc-opens-probe-ai-giants-including-anthropic-and-openai-source-says-6421931" },
    aisiAstra: { "id": "aisiAstra", "label": "AISI, simulated Astra supply-chain attacks (Sep 28, 2026)", "href": "https://www.aisi.gov.uk/blog/gpt-6-astra-performs-unsanctioned-supply-chain-attacks-in-simulations" },
    aisiAstraReport: { "id": "aisiAstraReport", "label": "AISI technical report, methods and example prompts (Sep 28, 2026)", "href": "https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6aba83e3772048bdd24df3d8_AISI_GPT-6_Astra_Technical_Report.pdf" },
    decoderAstra: { "id": "decoderAstra", "label": "The Decoder, Astra simulated attack-rate coverage (Sep 29, 2026)", "href": "https://the-decoder.com/uk-ai-security-institute-finds-gpt-6-astras-rogue-attack-rate-jumped-fivefold-over-its-predecessor/" },
    cnbcAstraStop: { "id": "cnbcAstraStop", "label": "CNBC, confirms GPT-6.1 Astra release withheld (Sep 28, 2026)", "href": "https://www.cnbc.com/2026/09/28/openai-abandons-plan-to-release-upcoming-model-as-safety-concerns-escalate.html" },
    bbcAstraStop: { "id": "bbcAstraStop", "label": "BBC, OpenAI scraps model rollout (Sep 29, 2026)", "href": "https://www.bbc.com/news/articles/cm5y5nynl75ko" },
    oaiThirdParty: { id: "oaiThirdParty", label: 'OpenAI, "The Hugging Face incident and other third-party impact from misaligned models" (page read Oct 3, 2026; now reports over 100 notified)', href: "https://openai.com/hugging-face-incident-and-misalignment/" },
    abcNsw: { id: "abcNsw", label: 'ABC News, "OpenAI reveals another hack into a government agency in Australia" (Oct 2, 2026)', href: "https://abcnews.com/Business/openai-reveals-hack-government-agency-australia/story?id=136945837" },
    guardianOct3: { id: "guardianOct3", label: 'The Guardian, "OpenAI says its review into hacks ... is costing $500,000 a day" (Oct 3, 2026)', href: "https://www.theguardian.com/technology/2026/oct/03/openai-review-hacks-australian-government-sites-costing-500000-a-day" },
    gizmodo100: { id: "gizmodo100", label: 'Gizmodo, "OpenAI Has Sent Notices of Sketchy AI Behavior to Over 100 Organizations So Far" (Oct 2, 2026)', href: "https://gizmodo.com/openai-has-sent-notices-of-sketchy-ai-behavior-to-over-100-organizations-so-far-2000820702" },
    bbcFired: { id: "bbcFired", label: 'BBC, "OpenAI fires three workers over mishandling sensitive information" (Oct 2, 2026), reports the 100+ notices', href: "https://www.bbc.com/news/articles/c6y9z9r4ejzwo" },
    guardianRobinson: { id: "guardianRobinson", label: 'The Guardian, "OpenAI safety leader quits, warning AI company\u2019s culture is \u2018broken\u2019" (Oct 3, 2026)', href: "https://www.theguardian.com/technology/2026/oct/03/openai-safety-leader-quits-warning-ai-companys-culture-is-broken" },
    bbcDozens: { id: "bbcDozens", label: 'BBC, "OpenAI investigating dozens of instances of agents acting improperly" (Sep 25, 2026)', href: "https://www.bbc.com/news/articles/cw62jje658dlo" },
    nytFour: { id: "nytFour", label: "New York Times via Philadelphia Inquirer, four targets in May-June (Sep 24, 2026)", href: "https://www.inquirer.com/news/nation-world/openai-rouge-attacks-anthropic-meta-google-20260924.html" },
    unctadStudy: { id: "unctadStudy", label: "Rowan Howard-Jones, UNCTADstat traffic analysis (Sep 26, 2026)", href: "https://swarmcha.se/posts/openai-unctad" },
    unctadCross: { id: "unctadCross", label: "RuntimeWire, UNCTAD attribution and limits (Sep 26, 2026)", href: "https://runtimewire.com/article/openai-agents-unctad-stat-api-workarounds" },
    oaiRoad: { id: "oaiRoad", label: 'OpenAI, "The Hugging Face incident and the road ahead" (Aug 26, 2026)', href: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/" },
    oaiFirst: { id: "oaiFirst", label: "OpenAI, first incident statement with Hugging Face (Jul 21, 2026)", href: "https://openai.com/index/hugging-face-model-evaluation-security-incident/" },
    oaiReport: { id: "oaiReport", label: "OpenAI, Hugging Face incident technical report (PDF)", href: "https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf" },
    hf: { id: "hf", label: 'Hugging Face, "Security incident disclosure - July 2026" (Jul 16, 2026)', href: "https://huggingface.co/blog/security-incident-july-2026" },
    metr: { id: "metr", label: "METR and Redwood Research, independent investigation of the incident (PDF, Aug 26, 2026)", href: "https://metr.org/hugging-face-incident-report-aug-2026.pdf" },
    reutersHf: { id: "reutersHf", label: 'Reuters, "OpenAI agents hacked Hugging Face in 700-strong swarm" (Aug 26, 2026)', href: "https://www.reuters.com/business/openai-report-says-its-network-was-hacked-by-its-own-rogue-ai-agents-2026-08-26/" },
    scBlackHat: { id: "scBlackHat", label: 'SC Media, "Black Hat 2026: OpenAI reveals agents planned \u2018collective attacks\u2019 via secret \u2018message board\u2019" (Aug 6, 2026)', href: "https://www.scworld.com/news/black-hat-2026-openai-reveals-agents-planned-collective-attacks-via-secret-message-board" },
    axiosBlackHat: { id: "axiosBlackHat", label: 'Axios, "OpenAI details how testing led to the Hugging Face hack" (Aug 2026)', href: "https://www.axios.com/2026/08/06/openai-hugging-face-black-hat" },
    nbcGrok: { id: "nbcGrok", label: 'NBC News, "Grok is still making sexual deepfakes, despite X\u2019s promise to stop it" (Apr 14, 2026)', href: "https://www.nbcnews.com/tech/tech-news/musks-ai-chatbot-grok-xai-making-sexual-deepfakes-imagine-rcna265855" },
    punchbowl: { id: "punchbowl", label: 'Punchbowl News, "Emil Michael stands by Anthropic blacklist" (Sep 10, 2026)', href: "https://punchbowl.news/article/defense/emil-michael-anthropic-blacklist/" },
    insideai: { id: "insideai", label: 'Inside AI, "Anthropic still flagged as supply chain risk by Pentagon, US official says" (Sep 3, 2026)', href: "https://insideai.news/news/ai-policy-and-regulation/anthropic-supply-chain-risk-pentagon/9626/" },
    oaiDaybreak: { id: "oaiDaybreak", label: 'OpenAI, "Putting frontier cyber models in more trusted hands" (Aug 10, 2026)', href: "https://openai.com/index/putting-frontier-cyber-models-in-more-trusted-hands/" },
    oaiTac: { id: "oaiTac", label: 'OpenAI, "Introducing Trusted Access for Cyber" (Feb 5, 2026)', href: "https://openai.com/index/trusted-access-for-cyber/" },
    antFable: { id: "antFable", label: 'Anthropic, "Claude Fable 5 and Claude Mythos 5" (Jun 9, 2026)', href: "https://www.anthropic.com/news/claude-fable-5-mythos-5" },
    antMythosDoc: { id: "antMythosDoc", label: "Anthropic docs, Claude Mythos 5 overview (invite only, pricing)", href: "https://platform.claude.com/docs/en/models/mythos-5/overview" },
    antRedeploy: { id: "antRedeploy", label: 'Anthropic, "Redeploying Fable 5" (Jun 30, 2026)', href: "https://www.anthropic.com/news/redeploying-fable-5" },
    cnbcExport: { id: "cnbcExport", label: "CNBC, export controls on Fable 5 and Mythos 5 lifted (Jun 30, 2026)", href: "https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" },
    antSysCard: { id: "antSysCard", label: "Anthropic, Claude Mythos Preview system card (PDF, Apr 2026)", href: "https://www-cdn.anthropic.com/8b8380204f74670be75e81c820ca8dda846ab289.pdf" },
    futurism: { id: "futurism", label: 'Futurism, "Anthropic warns that \u2018reckless\u2019 Claude Mythos escaped a sandbox" (Apr 8, 2026)', href: "https://futurism.com/artificial-intelligence/anthropic-claude-mythos-escaped-sandbox" },
    antThree: { id: "antThree", label: 'Anthropic, "Investigating three real-world incidents in our cybersecurity evaluations" (Jul 30, 2026)', href: "https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals" },
    antAlign: { id: "antAlign", label: 'Anthropic, "An alignment assessment of recent cybersecurity incidents" (Sep 9, 2026)', href: "https://www.anthropic.com/news/alignment-assessment-cybersecurity-incidents" },
    reutersFourth: { id: "reutersFourth", label: 'Reuters, "Anthropic reports fourth cybersecurity incident" (Sep 9, 2026)', href: "https://www.reuters.com/legal/litigation/anthropic-reports-fourth-cybersecurity-incident-with-early-version-claude-2026-09-09/" },
    apMeta: { id: "apMeta", label: 'AP, "Meta says its AI model hacked another company" (Aug 6, 2026)', href: "https://apnews.com/article/meta-ai-hacking-anthropic-irregular-openai-0e8061437da6779be962b24ac134a514" },
    reutersFramework: { id: "reutersFramework", label: 'Reuters, "OpenAI releases framework to track model misalignment" (Sep 16, 2026)', href: "https://www.reuters.com/technology/openai-releases-framework-track-model-misalignment-2026-09-16/" },
    bbcSix: { id: "bbcSix", label: 'BBC, "OpenAI reveals six more safety issues" (Sep 17, 2026)', href: "https://www.bbc.com/news/articles/cmpq0wj5g899o" },
    axiosSix: { id: "axiosSix", label: 'Axios, "OpenAI discloses six new AI safety incidents" (Sep 16, 2026)', href: "https://www.axios.com/2026/09/16/openai-testing-safety-incidents-disclosure" },
    bbcAus: { id: "bbcAus", label: 'BBC, "OpenAI agent \u2018infiltrated\u2019 Australian government website, PM says" (Sep 23, 2026)', href: "https://www.bbc.com/news/articles/c6vgy0333dppo" },
    wapoAus: { id: "wapoAus", label: "Washington Post, Australian PM on OpenAI agent and Medicare portal (Sep 23, 2026)", href: "https://www.washingtonpost.com/technology/2026/09/23/australian-prime-minister-says-openai-agent-hacked-healthcare-website/" },
    reutersIpo: { id: "reutersIpo", label: 'Reuters, "Altman won\u2019t do IPO this year, calls AI extinction risk \u2018unacceptable\u2019" (Sep 12, 2026)', href: "https://www.reuters.com/legal/litigation/openai-ipo-will-not-happen-2026-amid-ai-safety-fears-altman-says-2026-09-12/" },
    reutersPentagon: { id: "reutersPentagon", label: 'Reuters, "Anthropic\u2019s Pentagon blacklist struck down" (updated Aug 28, 2026)', href: "https://www.reuters.com/world/how-anthropic-pentagon-dispute-over-ai-safeguards-escalated-2026-08-28/" },
    antDow: { id: "antDow", label: 'Anthropic, "Where things stand with the Department of War" (Mar 5, 2026)', href: "https://www.anthropic.com/news/where-stand-department-war" },
    cnnPentagon: { id: "cnnPentagon", label: 'CNN, "Judge rules the Pentagon\u2019s supply chain risk label for Anthropic unlawful" (Aug 27, 2026)', href: "https://www.cnn.com/2026/08/27/tech/anthropic-pentagon-supply-chain-risk-unlawful-hnk" },
    axiosCoxon: { id: "axiosCoxon", label: 'Axios, "Anthropic whistleblower gave up his equity to leave" (Sep 9, 2026)', href: "https://www.axios.com/2026/09/09/anthropic-researcher-ai-warning-interview" },
    timeCoxon: { id: "timeCoxon", label: "TIME, profile of Jacob Coxon (Sep 9, 2026)", href: "https://time.com/article/2026/09/09/ai-anthropic-openai-jacob-coxon/" },
    cnbcWatchdog: { id: "cnbcWatchdog", label: "CNBC, proposed embedded AI evaluators and their limits (Sep 16, 2026)", href: "https://www.cnbc.com/2026/09/16/anthropic-open-ai-model-safety-risks.html" },
    jacobin: { id: "jacobin", label: 'Jacobin, "AI Doomsaying Is an Aggressive Sales Pitch" (Sep 16, 2026)', href: "https://jacobin.com/2026/09/openai-anthropic-human-extinction-criti-hype" },
    mittr: { id: "mittr", label: 'MIT Technology Review, Gebru and Bender, "Don\u2019t be fooled by this summer of AI hype" (Sep 22, 2026)', href: "https://www.technologyreview.com/2026/09/22/1144867/dont-be-fooled-summer-ai-hype/" },
    adler: { id: "adler", label: 'Steven Adler, "AI safety warnings are not marketing hype" (Apr 25, 2026)', href: "https://www.clear-eyed.ai/p/ai-safety-warnings-are-not-marketing" },
    fliIndex: { id: "fliIndex", label: "Future of Life Institute, AI Safety Index, Summer 2026", href: "https://futureoflife.org/ai-safety-index-summer-2026/" },
    opcGrok: { id: "opcGrok", label: "Privacy Commissioner of Canada, Grok investigation findings (Jun 11, 2026)", href: "https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260611/" },
    reutersGrok: { id: "reutersGrok", label: 'Reuters, "Musk dealt blow over Grok deepfakes" (Jan 15, 2026)', href: "https://www.reuters.com/legal/government/musk-dealt-blow-over-grok-deepfakes-regulatory-fight-far-over-2026-01-15/" },
    guardianCai: { id: "guardianCai", label: "The Guardian, Google and Character.AI to settle teen-harm lawsuits (Jan 8, 2026)", href: "https://www.theguardian.com/technology/2026/jan/08/google-character-ai-settlement-teen-suicide" },
    ibmHistory: { id: "ibmHistory", label: 'IBM, "Watson, Jeopardy! champion"', href: "https://www.ibm.com/history/watson-jeopardy" },
    bbcWatson: { id: "bbcWatson", label: 'BBC, "IBM\u2019s Watson supercomputer crowned Jeopardy king" (Feb 17, 2011)', href: "https://www.bbc.com/news/technology-12491688" },
    ibmSale: { id: "ibmSale", label: 'IBM, "Francisco Partners to acquire IBM\u2019s healthcare data and analytics assets" (Jan 21, 2022)', href: "https://newsroom.ibm.com/2022-01-21-Francisco-Partners-to-Acquire-IBMs-Healthcare-Data-and-Analytics-Assets" },
    natureGo: { id: "natureGo", label: 'Nature, "AI computer wraps up 4-1 victory against human champion" (Mar 15, 2016)', href: "https://www.nature.com/articles/nature.2016.19575" },
    dmAlphaGo: { id: "dmAlphaGo", label: "Google DeepMind, AlphaGo", href: "https://deepmind.google/research/alphago/" },
    oaiGpt2: { id: "oaiGpt2", label: 'OpenAI, "Better language models and their implications" (Feb 14, 2019)', href: "https://openai.com/index/better-language-models/" },
    oaiGpt2Full: { id: "oaiGpt2Full", label: 'OpenAI, "GPT-2: 1.5B release" (Nov 5, 2019)', href: "https://openai.com/index/gpt-2-1-5b-release/" },
    vergeGpt2: { id: "vergeGpt2", label: "The Verge, OpenAI publishes the model it said was too dangerous to share (Nov 7, 2019)", href: "https://www.theverge.com/2019/11/7/20953040/openai-text-generation-ai-gpt-2-full-model-release-1-5b-parameters" },
    fliPause: { id: "fliPause", label: 'Future of Life Institute, "Pause Giant AI Experiments: An Open Letter" (Mar 22, 2023)', href: "https://futureoflife.org/open-letter/pause-giant-ai-experiments/" },
    cais: { id: "cais", label: 'Center for AI Safety, "Statement on AI Risk" (2023)', href: "https://www.safe.ai/work/statement-on-ai-risk" },
    antRsp: { id: "antRsp", label: "Anthropic, Responsible Scaling Policy (updated Aug 14, 2026)", href: "https://www.anthropic.com/responsible-scaling-policy" },
    klarna: { id: "klarna", label: 'CX Dive, "Klarna changes its AI tune and again recruits humans" (May 9, 2025)', href: "https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/" },
    abcPlot: { id: "abcPlot", label: 'ABC News, "OpenAI agents plotted to access government health data amid Medicare hack, logs reveal" (Sep 24, 2026)', href: "https://www.abc.net.au/news/2026-09-24/openai-agents-plotted-to-access-data-amid-medicare-hack/107189504" },
    abcKnow: { id: "abcKnow", label: 'ABC News, "What we know about the data accessed in the OpenAI Medicare hack" (Sep 24, 2026)', href: "https://www.abc.net.au/news/2026-09-24/what-we-know-about-the-openai-medicare-hack/107189452" },
    cnbcAus: { id: "cnbcAus", label: 'CNBC, "OpenAI says agent hacked Australian government website" (Sep 24, 2026)', href: "https://www.cnbc.com/2026/09/24/openai-agent-hacked-australian-government-website-.html" },
    ctAus: { id: "ctAus", label: 'Canberra Times, "Services Australia OpenAI breach probed after email delay" (Sep 24, 2026)', href: "https://www.canberratimes.com.au/story/9356739/services-australia-openai-breach-probed-after-email-delay/" },
    bleepAus: { id: "bleepAus", label: 'BleepingComputer, "OpenAI hacked Australian Medicare govt site, probed data providers" (Sep 24, 2026)', href: "https://www.bleepingcomputer.com/news/security/openai-hacked-australian-medicare-govt-site-probed-data-providers/" },
    transluce: { id: "transluce", label: 'Transluce, "Early rogue AI agent activity and attempts to hack found on urlquery.net" (Sep 23, 2026)', href: "https://transluce.org/agent-activity" },
    csoGemini: { id: "csoGemini", label: 'CSO Online, "Gemini broke into 3 companies, but Google kept it quiet because \u2018no damage was done\u2019" (Sep 21, 2026)', href: "https://www.csoonline.com/article/4224570/gemini-broke-into-3-companies-but-google-kept-it-quiet-because-no-damage-was-done.html" },
    diveGemini: { id: "diveGemini", label: 'Cybersecurity Dive, "Google AI models broke out of sandbox, hacked three companies" (Sep 21, 2026)', href: "https://www.cybersecuritydive.com/news/google-ai-gemini-autonomous-hacks/830884/" },
    vergeMuse: { id: "vergeMuse", label: 'The Verge, "Meta patches Muse exploit that let attackers control the AI agent" (Sep 22, 2026)', href: "https://www.theverge.com/tech/998679/meta-muse-patch-zero-day-exploit-ai-agent" },
    decryptMuse: { id: "decryptMuse", label: 'Decrypt, "Meta\u2019s Muse AI Agent Read a User\u2019s Private iMessages. Then It Lied About How" (Sep 23, 2026)', href: "https://decrypt.co/379122/metas-muse-ai-agent-user-private-imessages-lied-how" },
    antMythos51: { id: "antMythos51", label: 'Anthropic, "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (Sep 24, 2026)', href: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
    reutersSpain: { id: "reutersSpain", label: "Reuters, Spain reports first AI-agent-linked breach notification (Sep 15, 2026)", href: "https://www.reuters.com/business/spanish-data-watchdog-publicises-first-ai-agent-linked-data-breach-report-2026-09-15/" },
    incibeSpain: { id: "incibeSpain", label: "INCIBE-CERT, Spain agent-linked breach still under review (Sep 24, 2026)", href: "https://www.incibe.es/index.php/en/incibe-cert/publications/cybersecurity-highlights/personal-data-breach-reported-spain-linked-attack-carried-out-artificial" },
    abcAus25: { id: "abcAus25", label: "ABC News, Australian taskforce remit and four sites contacted (Sep 25, 2026)", href: "https://www.abc.net.au/news/2026-09-25/rouge-ai-agent-medicare-push-for-tough-guardrails/107193366" },
    guardianAus25: { id: "guardianAus25", label: "The Guardian, Australia considers law changes after breach (Sep 25, 2026)", href: "https://www.theguardian.com/australia-news/2026/sep/25/wake-up-call-labor-considers-changing-australian-laws-after-openai-medicare-hack" },
    oaiRef: { id: "oaiRef", label: "OpenAI, command injecting a reference tool to copy a source file (updated Oct 2, 2026)", href: "https://alignment.openai.com/misalignment-reports/command-injecting-a-reference-tool-to-copy-a-source-file/" },
    bbcKwon: { id: "bbcKwon", label: "BBC, OpenAI admits response to Australian government hacks 'not good enough' (Oct 6, 2026)", href: "https://www.bbc.co.uk/news/articles/cmx2qne2j88wo" },
    oaiMisali
