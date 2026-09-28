            if (null === h) if (h = e2.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k2 = q);
          e2.baseState = k2;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b2 = e2.shared.interleaved;
          if (null !== b2) {
            e2 = b2;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b2);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function sh(a, b2, c) {
        a = b2.effects;
        b2.effects = null;
        if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
          var d = a[b2], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b2) {
        G2(wh, b2);
        G2(vh, a);
        G2(uh, th);
        a = b2.nodeType;
        switch (a) {
          case 9:
          case 11:
            b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
        }
        E3(uh);
        G2(uh, b2);
      }
      function zh() {
        E3(uh);
        E3(vh);
        E3(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b2 = xh(uh.current);
        var c = lb(b2, a.type);
        b2 !== c && (G2(vh, a), G2(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E3(uh), E3(vh));
      }
      var L2 = Uf(0);
      function Ch(a) {
        for (var b2 = a; null !== b2; ) {
          if (13 === b2.tag) {
            var c = b2.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b2;
          } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
            if (0 !== (b2.flags & 128)) return b2;
          } else if (null !== b2.child) {
            b2.child.return = b2;
            b2 = b2.child;
            continue;
          }
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M3 = null;
      var N2 = null;
      var O3 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b2) {
        if (null === b2) return false;
        for (var c = 0; c < b2.length && c < a.length; c++) if (!He3(a[c], b2[c])) return false;
        return true;
      }
      function Nh(a, b2, c, d, e2, f2) {
        Hh = f2;
        M3 = b2;
        b2.memoizedState = null;
        b2.updateQueue = null;
        b2.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O3 = N2 = null;
            b2.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b2 = null !== N2 && null !== N2.next;
        Hh = 0;
        O3 = N2 = M3 = null;
        Ih = false;
        if (b2) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        return O3;
      }
      function Uh() {
        if (null === N2) {
          var a = M3.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N2.next;
        var b2 = null === O3 ? M3.memoizedState : O3.next;
        if (null !== b2) O3 = b2, N2 = a;
        else {
          if (null === a) throw Error(p(310));
          N2 = a;
          a = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
          null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        }
        return O3;
      }
      function Vh(a, b2) {
        return "function" === typeof b2 ? b2(a) : b2;
      }
      function Wh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N2, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h = g = null, k2 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k2 ? (h = k2 = q, g = d) : k2 = k2.next = q;
              M3.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k2 ? g = d : k2.next = h;
          He3(d, b2.memoizedState) || (dh = true);
          b2.memoizedState = d;
          b2.baseState = g;
          b2.baseQueue = k2;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M3.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b2.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b2.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b2.memoizedState) || (dh = true);
          b2.memoizedState = f2;
          null === b2.baseQueue && (b2.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b2) {
        var c = M3, d = Uh(), e2 = b2(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b2 || f2 || null !== O3 && O3.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e2, b2), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b2, e2);
        }
        return e2;
      }
      function di(a, b2, c) {
        a.flags |= 16384;
        a = { getSnapshot: b2, value: c };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
      }
      function ci(a, b2, c, d) {
        b2.value = c;
        b2.getSnapshot = d;
        ei(b2) && fi(a);
      }
      function ai(a, b2, c) {
        return c(function() {
          ei(b2) && fi(a);
        });
      }
      function ei(a) {
        var b2 = a.getSnapshot;
        a = a.value;
        try {
          var c = b2();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b2 = ih(a, 1);
        null !== b2 && gi(b2, a, 1, -1);
      }
      function hi(a) {
        var b2 = Th();
        "function" === typeof a && (a = a());
        b2.memoizedState = b2.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b2.queue = a;
        a = a.dispatch = ii.bind(null, M3, a);
        return [b2.memoizedState, a];
      }
      function bi(a, b2, c, d) {
        a = { tag: a, create: b2, destroy: c, deps: d, next: null };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b2, c, d) {
        var e2 = Th();
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b2, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N2) {
          var g = N2.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi(b2, c, f2, d);
            return;
          }
        }
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, f2, d);
      }
      function mi(a, b2) {
        return ki(8390656, 8, a, b2);
      }
      function $h(a, b2) {
        return li(2048, 8, a, b2);
      }
      function ni(a, b2) {
        return li(4, 2, a, b2);
      }
      function oi(a, b2) {
        return li(4, 4, a, b2);
      }
      function pi(a, b2) {
        if ("function" === typeof b2) return a = a(), b2(a), function() {
          b2(null);
        };
        if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
          b2.current = null;
        };
      }
      function qi(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b2, a), c);
      }
      function ri() {
      }
      function si(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        c.memoizedState = [a, b2];
        return a;
      }
      function ti(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }
      function ui(a, b2, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b2) || (c = yc(), M3.lanes |= c, rh |= c, a.baseState = true);
        return b2;
      }
      function vi(a, b2) {
        var c = C2;
        C2 = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b2();
        } finally {
          C2 = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b2, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, c);
        else if (c = hh(a, b2, c, d), null !== c) {
          var e2 = R3();
          gi(c, a, d, e2);
          Bi(c, b2, d);
        }
      }
      function ii(a, b2, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
            var g = b2.lastRenderedState, h = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h;
            if (He3(h, g)) {
              var k2 = b2.interleaved;
              null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b2, e2, d);
          null !== c && (e2 = R3(), gi(c, a, d, e2), Bi(c, b2, d));
        }
      }
      function zi(a) {
        var b2 = a.alternate;
        return a === M3 || null !== b2 && b2 === M3;
      }
      function Ai(a, b2) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
        a.pending = b2;
      }
      function Bi(a, b2, c) {
        if (0 !== (c & 4194240)) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b2) {
        Th().memoizedState = [a, void 0 === b2 ? null : b2];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b2, a),
          c
        );
      }, useLayoutEffect: function(a, b2) {
        return ki(4194308, 4, a, b2);
      }, useInsertionEffect: function(a, b2) {
        return ki(4, 2, a, b2);
      }, useMemo: function(a, b2) {
        var c = Th();
        b2 = void 0 === b2 ? null : b2;
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }, useReducer: function(a, b2, c) {
        var d = Th();
        b2 = void 0 !== c ? c(b2) : b2;
        d.memoizedState = d.baseState = b2;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M3, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b2 = Th();
        a = { current: a };
        return b2.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b2 = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b2, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b2, c) {
        var d = M3, e2 = Th();
        if (I2) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b2();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b2, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b2 };
        e2.queue = f2;
        mi(ai.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b2), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b2 = Q.identifierPrefix;
        if (I2) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b2 = ":" + b2 + "R" + c;
          c = Kh++;
          0 < c && (b2 += "H" + c.toString(32));
          b2 += ":";
        } else c = Lh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
        return a.memoizedState = b2;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b2 = Uh();
          return ui(b2, N2.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b2 = Uh().memoizedState;
          return [a, b2];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b2 = Uh();
        return null === N2 ? b2.memoizedState = a : ui(b2, N2.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b2 = Uh().memoizedState;
        return [a, b2];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b2) {
        if (a && a.defaultProps) {
          b2 = A3({}, b2);
          a = a.defaultProps;
          for (var c in a) void 0 === b2[c] && (b2[c] = a[c]);
          return b2;
        }
        return b2;
      }
      function Di(a, b2, c, d) {
        b2 = a.memoizedState;
        c = c(d, b2);
        c = null === c || void 0 === c ? b2 : A3({}, b2, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueReplaceState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueForceUpdate: function(a, b2) {
        a = a._reactInternals;
        var c = R3(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b2 && null !== b2 && (e2.callback = b2);
        b2 = nh(a, e2, d);
        null !== b2 && (gi(b2, a, d, c), oh(b2, a, d));
      } };
      function Fi(a, b2, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie3(c, d) || !Ie3(e2, f2) : true;
      }
      function Gi(a, b2, c) {
        var d = false, e2 = Vf;
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b2 = new b2(c, f2);
        a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
        b2.updater = Ei;
        a.stateNode = b2;
        b2._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b2;
      }
      function Hi(a, b2, c, d) {
        a = b2.state;
        "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
        "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
        b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
      }
      function Ii(a, b2, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b2.getDerivedStateFromProps;
        "function" === typeof f2 && (Di(a, b2, f2, c), e2.state = a.memoizedState);
        "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b2) {
        try {
          var c = "", d = b2;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b2, stack: e2, digest: null };
      }
      function Ki(a, b2, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
      }
      function Li(a, b2) {
        try {
          console.error(b2.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b2.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b2);
        };
        return c;
      }
      function Qi(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b2.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li(a, b2);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li(a, b2);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b2.stack;
          this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b2, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b2, e2);
        } else e2 = d.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b2, e2));
        e2.has(c) || (e2.add(c), a = Ti.bind(null, a, b2, c), b2.then(a, a));
      }
      function Ui(a) {
        do {
          var b2;
          if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
          if (b2) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b2, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c, b2, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b2, c, d) {
        b2.child = null === a ? Vg(b2, null, c, d) : Ug(b2, a.child, c, d);
      }
      function Yi(a, b2, c, d, e2) {
        c = c.render;
        var f2 = b2.ref;
