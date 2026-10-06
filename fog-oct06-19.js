        defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el2 = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el2) {
              el2.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to, { relative } = {}) {
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
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react20.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react20.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/App.tsx
  var import_react21 = __toESM(require_react());

  // src/photos/cover.jpg
  var cover_default = "./assets/SMYRZCZF.jpg";

  // src/sources.ts
  var S = {
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
    apMeta: { id: "apMeta", label: 'AP, "Meta says its A
