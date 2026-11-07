        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie3 = false;
      function je2(a, b) {
        switch (a) {
          case "compositionend":
            return he2(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe3 = true;
            return ee2;
          case "textInput":
            return a = b.data, a === ee2 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b) {
        if (ie3) return "compositionend" === a || !ae2 && ge2(a, b) ? (a = nd2(), md2 = ld = kd2 = null, ie3 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de3 && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le3[a.type] : "textarea" === b ? true : false;
      }
      function ne3(a, b, c, d) {
        Eb(d);
        b = oe3(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe2 = null;
      var qe3 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b = ue3(a);
        if (Wa2(b)) return a;
      }
      function ve3(a, b) {
        if ("change" === a) return b;
      }
      var we3 = false;
      if (ia) {
        if (ia) {
          ye3 = "oninput" in document;
          if (!ye3) {
            ze3 = document.createElement("div");
            ze3.setAttribute("oninput", "return;");
            ye3 = "function" === typeof ze3.oninput;
          }
          xe3 = ye3;
        } else xe3 = false;
        we3 = xe3 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe3;
      var ye3;
      var ze3;
      function Ae3() {
        pe2 && (pe2.detachEvent("onpropertychange", Be2), qe3 = pe2 = null);
      }
      function Be2(a) {
        if ("value" === a.propertyName && te3(qe3)) {
          var b = [];
          ne3(b, qe3, a, xb(a));
          Jb(re3, b);
        }
      }
      function Ce3(a, b, c) {
        "focusin" === a ? (Ae3(), pe2 = b, qe3 = c, pe2.attachEvent("onpropertychange", Be2)) : "focusout" === a && Ae3();
      }
      function De3(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe3);
      }
      function Ee3(a, b) {
        if ("click" === a) return te3(b);
      }
      function Fe3(a, b) {
        if ("input" === a || "change" === a) return te3(b);
      }
      function Ge3(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He2 = "function" === typeof Object.is ? Object.is : Ge3;
      function Ie3(a, b) {
        if (He2(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja.call(b, e2) || !He2(a[e2], b[e2])) return false;
        }
        return true;
      }
      function Je2(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke3(a, b) {
        var c = Je2(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je2(c);
        }
      }
      function Le3(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le3(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me3() {
        for (var a = window, b = Xa2(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa2(a.document);
        }
        return b;
      }
      function Ne3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b = Me3(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke3(c, f2);
              var g = Ke3(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe2 = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe2 = null;
      var Re2 = null;
      var Se3 = null;
      var Te3 = false;
      function Ue2(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te3 || null == Qe2 || Qe2 !== Xa2(d) || (d = Qe2, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se3 && Ie3(Se3, d) || (Se3 = d, d = oe3(Re2, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe2)));
      }
      function Ve3(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We3 = { animationend: Ve3("Animation", "AnimationEnd"), animationiteration: Ve3("Animation", "AnimationIteration"), animationstart: Ve3("Animation", "AnimationStart"), transitionend: Ve3("Transition", "TransitionEnd") };
      var Xe3 = {};
      var Ye2 = {};
      ia && (Ye2 = document.createElement("div").style, "AnimationEvent" in window || (delete We3.animationend.animation, delete We3.animationiteration.animation, delete We3.animationstart.animation), "TransitionEvent" in window || delete We3.transitionend.transition);
      function Ze2(a) {
        if (Xe3[a]) return Xe3[a];
        if (!We3[a]) return a;
        var b = We3[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye2) return Xe3[a] = b[c];
        return a;
      }
      var $e3 = Ze2("animationend");
      var af = Ze2("animationiteration");
      var bf = Ze2("animationstart");
      var cf = Ze2("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa2(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e3, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h2 = d[g], k2 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
            else for (g = 0; g < d.length; g++) {
              h2 = d[g];
              k2 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D2(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd2(b)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd2;
        }
        c = e2.bind(null, b, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
      }
      function hd2(a, b, c, d, e2) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h2 = d.stateNode.containerInfo;
            if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h2; ) {
              g = Wc(h2);
              if (null === g) return;
              k2 = g.tag;
              if (5 === k2 || 6 === k2) {
                d = f2 = g;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h3 = df.get(a);
            if (void 0 !== h3) {
              var k3 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k3 = Rd2;
                  break;
                case "focusin":
                  n = "focus";
                  k3 = Fd2;
                  break;
                case "focusout":
                  n = "blur";
                  k3 = Fd2;
                  break;
                case "beforeblur":
                case "afterblur":
                  k3 = Fd2;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k3 = Bd2;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k3 = Dd2;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k3 = Vd;
                  break;
                case $e3:
                case af:
                case bf:
                  k3 = Hd2;
                  break;
                case cf:
                  k3 = Xd2;
                  break;
                case "scroll":
                  k3 = vd2;
                  break;
                case "wheel":
                  k3 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k3 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k3 = Td2;
              }
              var t = 0 !== (b & 4), J2 = !t && "scroll" === a, x = t ? null !== h3 ? h3 + "Capture" : null : h3;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w2, x), null != F && t.push(tf(w2, F, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h3 = new k3(h3, n, null, c, e3), g2.push({ event: h3, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h3 = "mouseover" === a || "pointerover" === a;
              k3 = "mouseout" === a || "pointerout" === a;
              if (h3 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k3 || h3) {
                h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
                if (k3) {
                  if (n = c.relatedTarget || c.toElement, k3 = d2, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k3 = null, n = d2;
                if (k3 !== n) {
                  t = Bd2;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td2, F = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
                  J2 = null == k3 ? h3 : ue3(k3);
                  u = null == n ? h3 : ue3(n);
                  h3 = new t(F, w2 + "leave", k3, c, e3);
                  h3.target = J2;
                  h3.relatedTarget = u;
                  F = null;
                  Wc(e3) === d2 && (t = new t(x, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J2, F = t);
                  J2 = F;
                  if (k3 && n) b: {
                    t = k3;
                    x = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F = x; F; F = vf(F)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x = vf(x), u--;
                    for (; w2--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k3 && wf(g2, h3, k3, t, false);
                  null !== n && null !== J2 && wf(g2, J2, n, t, true);
                }
              }
            }
            a: {
              h3 = d2 ? ue3(d2) : window;
              k3 = h3.nodeName && h3.nodeName.toLowerCase();
              if ("select" === k3 || "input" === k3 && "file" === h3.type) var na2 = ve3;
              else if (me3(h3)) if (we3) na2 = Fe3;
              else {
                na2 = De3;
                var xa2 = Ce3;
              }
              else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na2 = Ee3);
              if (na2 && (na2 = na2(a, d2))) {
                ne3(g2, na2, c, e3);
                break a;
              }
              xa2 && xa2(a, h3, d2);
              "focusout" === a && (xa2 = h3._wrapperState) && xa2.controlled && "number" === h3.type && cb(h3, "number", h3.value);
            }
            xa2 = d2 ? ue3(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa2) || "true" === xa2.contentEditable) Qe2 = xa2, Re2 = d2, Se3 = null;
                break;
              case "focusout":
                Se3 = Re2 = Qe2 = null;
                break;
              case "mousedown":
                Te3 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te3 = false;
                Ue2(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe2) break;
              case "keydown":
              case "keyup":
                Ue2(g2, c, e3);
            }
            var $a2;
            if (ae2) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie3 ? ge2(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de3 && "ko" !== c.locale && (ie3 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie3 && ($a2 = nd2()) : (kd2 = e3, ld = "value" in kd2 ? kd2.value : kd2.textContent, ie3 = true)), xa2 = oe3(d2, ba2), 0 < xa2.length && (ba2 = new Ld2(ba2, a, null, c, e3), g2.push({ event: ba2, listeners: xa2 }), $a2 ? ba2.data = $a2 : ($a2 = he2(c), null !== $a2 && (ba2.data = $a2))));
            if ($a2 = ce3 ? je2(a, c) : ke3(a, c)) d2 = oe3(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld2("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a2);
          }
          se3(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe3(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e2) {
        for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
          var h2 = c, k2 = h2.alternate, l2 = h2.stateNode;
          if (null !== k2 && k2 === d) break;
          5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h2))) : e2 || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h2))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a
