ve it wrong. High, medium and conditional describe plausible benefit, not certainty about intent." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "items", children: tactics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TacticItem, { t }, t.n)) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { id: "sec-08", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Vu, { label: "08 Seven cases from before 2026", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Gu, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Xu, { children: "The original casebook, now with sources and what happened next. Each opens like the 2026 cases." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "items", children: history.map((h) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(HistoryItem, { h }, h.n)) })
        ] }) })
      ] }),
      tab === "playbook" && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { id: "sec-09", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Vu, { label: "Playbook", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Gu, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Xu, { children: "These are questions to take to the next story, not a checklist for declaring an incident real or fake. Compare the warning with records, dates, critics and the response." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Eu, { children: playbook.map(([n, d], i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { number: i + 1, name: n, detail: d }, n)) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Gu, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(zu, { sub: "Signs a warning is genuine, not just useful", children: "The counter-playbook" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Eu, { children: counterPlaybook.map(([n, d], i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { number: i + 1, name: n, detail: d }, n)) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { id: "sec-10", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Vu, { label: "10 Interrogate the claim", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Gu, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Xu, { children: "Use these before accepting either the alarming narrative or the cynical counter-narrative. Open a question to see its checks." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "qs", children: checklist.map(([q2, checks], i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("details", { className: "q", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("summary", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "q-num", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "q-text", children: q2 })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { children: checks.map((c) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { children: c }, c)) })
          ] }, q2)) })
        ] }) })
      ] }),
      tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Vu, { label: "Notes and sources", heading: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Gu, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Xu, { children: "What changed, when, and where each claim came from. This log is about edits to this page; it is not a chronology of incidents." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Gu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(zu, { children: "Source lenses" }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Xu, { children: "These are possible incentives and limits for the sources this page uses, not a score for truthfulness or a claim that every article by an outlet leans the same way. \u201CConfidence\u201D describes how clear the role or interest is from the linked evidence, not how certain every claim is. Read the cited item and ask who observed the event, who controls the underlying records, and what a counter-source says." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "source-lenses", children: sourceLenses.map((l2) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("details", { className: "item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("summary", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "item-head", children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-title", children: l2.name }),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Tag, { tone: "mixed", children: l2.role })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "item-teaser", children: l2.watch })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dl", { className: "kv", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "Potential lens" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { children: l2.watch }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: "Confidence in this lens" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dd", { children: [
                l2.confidence,
                ". ",
                l2.reason,
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Sources, { ids: l2.src })
              ] })
            ] })
          ] }, l2.name)) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Gu, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(zu, { children: "Release notes" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Eu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 1, 2026 \xB7 Failed probes and forensic limits", detail: RNOCT1 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 31, 2026 \xB7 Vendor intrusion and updates to cases 42 and 43", detail: RNOCT31 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 30, 2026 \xB7 Parallel agent intrusions and a tampered extension", detail: RNOCT30 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 29, 2026 \xB7 Vendor attack and key exposure", detail: RNOCT29 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 27, 2026 \xB7 Hostile tasks, privacy leak and disputed test", detail: RNOCT27 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 26, 2026 \xB7 Theft investigation and AISI assessment", detail: RNOCT26 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 25, 2026 \xB7 Historical monitoring assessment", detail: RNOCT25 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 24, 2026 \xB7 Final root cause and containment update", detail: RNOCT24 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 23, 2026 \xB7 Secret handling and corroboration", detail: RNOCT23 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 22, 2026 \xB7 Storm-0940 and ARTEX", detail: RNOCT22 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 21, 2026 \xB7 OpenAI monitoring report", detail: RNOCT21 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 19, 2026 \xB7 Cairn agent hacking spree", detail: RNOCT19 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 17, 2026 \xB7 CERT-In AI agent advisory", detail: RNOCT17 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 16, 2026 \xB7 OpenAI misalignment reports", detail: RNOCT16 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 15, 2026 \xB7 AI-assisted bank breaches", detail: RNOCT15 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 13, 2026 \xB7 AI-assisted criminal broker", detail: RNOCT13 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 10, 2026 \xB7 Claude workarounds on real sites", detail: RNOCT10 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 9, 2026 \xB7 Agent-to-cloud permission chain", detail: RNOCT9 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 8, 2026 \xB7 New responder case", detail: RNOCT8 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Oct 7, 2026 \xB7 New public-trace case and counter-evidence", detail: RNOCT7 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Sep 30, 2026 \xB7 Simulation and release restraint", detail: RNDAILY }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "Sep 29, 2026 \xB7 Australia evidence update", detail: RN17A }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v17 \xB7 Sep 27, 2026 (private review)", detail: RN17 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v16 \xB7 Sep 27, 2026 (private review)", detail: RN16 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v15 \xB7 Sep 27, 2026 (private review)", detail: RN15 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v14 \xB7 Sep 27, 2026 (private review)", detail: RN14 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v13 \xB7 Sep 27, 2026 (private review)", detail: RN13 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v12 \xB7 Sep 27, 2026", detail: RN12 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v11 \xB7 Sep 26, 2026", detail: RN11 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v10 \xB7 Sep 26, 2026", detail: RN10 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v9 \xB7 Sep 26, 2026", detail: RN9 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v8 \xB7 Sep 25, 2026", detail: RN8 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v7 \xB7 Sep 25, 2026", detail: RN7 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v6 \xB7 Sep 24, 2026", detail: RN6 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v5 \xB7 Sep 23, 2026", detail: RN5 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v4 \xB7 Sep 23, 2026", detail: RN4 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v3 \xB7 Sep 23, 2026", detail: RN3 }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Wu, { name: "v2 \xB7 Sep 23, 2026", detail: RN2 })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Vu, { label: `All sources (${allSources.length})`, heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ol", { className: "all-src", children: allSources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { value: srcIndex[s.id], children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(oa, { href: s.href, children: s.label }) }, s.id)) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(es, { children: [
        "Daily source updates checked ",
        LAST_UPDATED,
        ". Scores and ladder placements are judgment calls on current evidence. Several cases, including 4 through 7 and 12 through 20, remain open and may move."
      ] })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime22 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
