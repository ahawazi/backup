(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5476],
  {
    456057: (e) => {
      e.exports = {
        logo: "logo-PsAlMQQF",
        hidden: "hidden-PsAlMQQF",
        xxceptionallysmalldonotusebrv1023:
          "xxceptionallysmalldonotusebrv1023-PsAlMQQF",
        xxxsmall: "xxxsmall-PsAlMQQF",
        xxsmall: "xxsmall-PsAlMQQF",
        xsmall: "xsmall-PsAlMQQF",
        small: "small-PsAlMQQF",
        medium: "medium-PsAlMQQF",
        large: "large-PsAlMQQF",
        xlarge: "xlarge-PsAlMQQF",
        xxlarge: "xxlarge-PsAlMQQF",
        xxxlarge: "xxxlarge-PsAlMQQF",
        skeleton: "skeleton-PsAlMQQF",
        letter: "letter-PsAlMQQF",
      };
    },
    55679: (e) => {
      e.exports = {
        wrapper: "wrapper-TJ9ObuLF",
        animated: "animated-TJ9ObuLF",
        pulsation: "pulsation-TJ9ObuLF",
      };
    },
    509059: (e) => {
      e.exports = {
        "tablet-small-breakpoint": "(max-width: 440px)",
        item: "item-jFqVJoPk",
        hovered: "hovered-jFqVJoPk",
        isDisabled: "isDisabled-jFqVJoPk",
        isActive: "isActive-jFqVJoPk",
        shortcut: "shortcut-jFqVJoPk",
        toolbox: "toolbox-jFqVJoPk",
        withIcon: "withIcon-jFqVJoPk",
        "round-icon": "round-icon-jFqVJoPk",
        icon: "icon-jFqVJoPk",
        labelRow: "labelRow-jFqVJoPk",
        label: "label-jFqVJoPk",
        showOnHover: "showOnHover-jFqVJoPk",
        "disclosure-item-circle-logo": "disclosure-item-circle-logo-jFqVJoPk",
        showOnFocus: "showOnFocus-jFqVJoPk",
      };
    },
    185934: (e, t, n) => {
      "use strict";
      n.d(t, { getStyleClasses: () => s, isCircleLogoWithUrlProps: () => a });
      var o = n(497754),
        r = n(92318),
        i = n(456057),
        l = n.n(i);
      function s(e, t = 2, n) {
        return o(
          l().logo,
          l()[e],
          n,
          0 === t || 1 === t
            ? o(r.skeletonTheme.wrapper, l().skeleton)
            : l().letter,
          1 === t && r.skeletonTheme.animated
        );
      }
      function a(e) {
        return (
          "logoUrl" in e &&
          null !== e.logoUrl &&
          void 0 !== e.logoUrl &&
          0 !== e.logoUrl.length
        );
      }
    },
    429510: (e, t, n) => {
      "use strict";
      var o;
      n.d(t, { useCollapsible: () => l }),
        (function (e) {
          (e.StartFirst = "start-first"), (e.EndFirst = "end-first");
        })(o || (o = {}));
      var r = n(50959),
        i = n(708886);
      function l(e, t, n, l = o.EndFirst) {
        const s = (0, r.useCallback)(
          (n, r) => {
            const i = e.map((e) => n.widthsMap.get(t(e)) ?? 0);
            return (function ({
              items: e,
              containerWidth: t,
              elementsWidths: n,
              menuItemWidth: r,
              keepVisible: i,
              direction: l,
            }) {
              const s = [...e],
                a = [],
                c = [];
              let u = 0;
              for (const e of n) u += e;
              if (u <= t) return { visible: s, hidden: c };
              const d = [...n];
              if (
                ((u = i.map((e) => d[e]).reduce((e, t) => e + t, 0) + r),
                l === o.EndFirst)
              )
                for (let e = 0; e < s.length; e++)
                  i.includes(e)
                    ? a.push(s[e])
                    : ((u += d[e]), u <= t ? a.push(s[e]) : c.push(s[e]));
              else
                for (let e = s.length - 1; e >= 0; e--)
                  i.includes(e)
                    ? a.unshift(s[e])
                    : ((u += d[e]), u <= t ? a.unshift(s[e]) : c.unshift(s[e]));
              return { visible: a, hidden: c };
            })({
              items: e,
              containerWidth: n.containerWidth,
              elementsWidths: i,
              menuItemWidth: n.moreButtonWidth,
              keepVisible: r,
              direction: l,
            });
          },
          [e]
        );
        return (0, i.useCollapsibleCommon)({
          itemsList: e,
          getItemId: t,
          calcVisibleAndHiddenItems: s,
          shouldKeepItemVisible: n,
        });
      }
    },
    708886: (e, t, n) => {
      "use strict";
      n.d(t, { useCollapsibleCommon: () => c });
      var o = n(50959),
        r = n(664332),
        i = n(65160),
        l = n(457927),
        s = n(855393),
        a = n(273388);
      function c(e) {
        const {
            itemsList: t,
            getItemId: n,
            calcVisibleAndHiddenItems: c,
            shouldKeepItemVisible: d,
            onMeasureCallback: f,
            forceUpdate: h = !1,
          } = e,
          [b, m] = (0, l.useRefsMap)(),
          p = (0, o.useRef)(null),
          g = (0, o.useRef)({
            widthsMap: new Map(),
            containerWidth: 0,
            moreButtonWidth: 0,
          }),
          [v, C] = (0, o.useState)({ visible: t, hidden: [] }),
          k = (0, o.useMemo)(
            () => t.reduce((e, t, n) => (d(t) && e.push(n), e), []),
            [t, d]
          ),
          x = (0, o.useCallback)(() => {
            if (g.current.containerWidth) {
              const e = c(g.current, k);
              (function (e, t) {
                return !u(e.visible, t.visible) || !u(e.hidden, t.hidden);
              })(v, e) && C(e);
            }
          }, [g, C, v, k, c]),
          E = (0, o.useCallback)(() => {
            g.current.moreButtonWidth = p.current
              ? (0, i.outerWidth)(p.current, !0)
              : 0;
            const e = new Map(g.current.widthsMap);
            for (const o of t) {
              const t = n(o),
                r = b.current.get(t);
              if (r) {
                const n = (0, i.outerWidth)(r, !0);
                e.set(t, n);
              }
            }
            (g.current.widthsMap = e), f && f();
          }, [g, t, n, b, f]),
          M = (0, o.useRef)(null),
          w = (0, o.useCallback)(
            ([e]) => {
              e.contentRect.width !== g.current.containerWidth &&
                (M.current && cancelAnimationFrame(M.current),
                (g.current.containerWidth = e.contentRect.width),
                (M.current = requestAnimationFrame(() => {
                  x();
                })));
            },
            [g, x]
          ),
          S = (0, o.useRef)(null),
          y = (0, o.useCallback)(
            ([e]) => {
              S.current && cancelAnimationFrame(S.current),
                E(),
                (S.current = requestAnimationFrame(() => {
                  x();
                }));
            },
            [E, x]
          ),
          I = (0, r.useResizeObserver)(y),
          F = (0, r.useResizeObserver)(w),
          R = (0, o.useRef)(null),
          A = (0, a.mergeRefs)([F, R]),
          H = (0, o.useRef)(t),
          T = (0, o.useRef)(!0),
          P = (0, o.useRef)([]);
        return (
          (0, s.useIsomorphicLayoutEffect)(() => {
            (!h && !T.current && u(H.current, t) && u(k, P.current)) ||
              (x(), (T.current = !1), (H.current = t), (P.current = k));
          }, [t, x, k, h]),
          {
            containerRefCallback: A,
            moreButtonRef: p,
            innerContainerRefCallback: I,
            itemsRefs: b,
            setItemRef: m,
            hiddenItems: v.hidden,
            visibleItems: v.visible,
            itemsMeasurements: g,
          }
        );
      }
      function u(e, t) {
        return (
          e.length === t.length && e.reduce((e, n, o) => e && n === t[o], !0)
        );
      }
    },
    865968: (e, t, n) => {
      "use strict";
      n.d(t, {
        useComposedKeyboardActionHandlers: () => s,
        useKeyboardActionHandler: () => l,
        useKeyboardClose: () => u,
        useKeyboardEventHandler: () => a,
        useKeyboardOpen: () => d,
        useKeyboardToggle: () => c,
      });
      var o = n(50959),
        r = n(930202);
      const i = () => !0;
      function l(e, t, n = i, r) {
        return (0, o.useCallback)(
          (o) => {
            if (r) {
              if ("horizontal" === r && (40 === o || 38 === o)) return;
              if ("vertical" === r && (37 === o || 39 === o)) return;
            }
            const i = e.map((e) => ("function" == typeof e ? e() : e));
            return !(!n(o) || !i.includes(o)) && (t(o), !0);
          },
          [...e, t, n]
        );
      }
      function s(...e) {
        return (0, o.useCallback)(
          (t) => {
            for (const n of e) if (n(t)) return !0;
            return !1;
          },
          [...e]
        );
      }
      function a(e, t = !0, n = !1) {
        const i = s(...e);
        return (0, o.useCallback)(
          (e) => {
            const o = i((0, r.hashFromEvent)(e));
            o && t && e.preventDefault(), o && n && e.stopPropagation();
          },
          [i]
        );
      }
      function c(e, t = !0) {
        return l([13, 32], e, function (e) {
          if (13 === e) return t;
          return !0;
        });
      }
      function u(e, t) {
        return l(
          [9, (0, o.useCallback)(() => r.Modifiers.Shift + 9, []), 27],
          t,
          (0, o.useCallback)(() => e, [e])
        );
      }
      function d(e, t) {
        return l(
          [40, 38],
          t,
          (0, o.useCallback)(() => !e, [e])
        );
      }
    },
    772069: (e, t, n) => {
      "use strict";
      n.d(t, { useDisclosure: () => c });
      var o = n(50959),
        r = n(650151),
        i = n(954343),
        l = n(383836),
        s = n(269842),
        a = n(414823);
      function c(e) {
        const {
            id: t,
            listboxId: n,
            disabled: c,
            buttonTabIndex: u = 0,
            onFocus: d,
            onBlur: f,
            onClick: h,
          } = e,
          [b, m] = (0, o.useState)(!1),
          [p, g] = (0, l.useFocus)(),
          v = p || b,
          C = n ?? void 0 !== t ? (0, a.createDomId)(t, "listbox") : void 0,
          k = (0, o.useRef)(null),
          x = (0, o.useCallback)((e) => k.current?.focus(e), [k]),
          E = (0, o.useRef)(null),
          M = (0, o.useCallback)(
            () => (0, r.ensureNotNull)(E.current).focus(),
            [E]
          ),
          w = (0, o.useCallback)(() => m(!0), [m]),
          S = (0, o.useCallback)(
            (e = !1, t = !1) => {
              m(!1);
              const { activeElement: n } = document;
              (n && (0, i.isTextEditingField)(n)) ||
                t ||
                x({
                  preventScroll: e,
                });
            },
            [m, x]
          ),
          y = (0, o.useCallback)(() => {
            b ? S() : w();
          }, [b, S, w]),
          I = c ? [] : [d, g.onFocus],
          F = c ? [] : [f, g.onBlur],
          R = c ? [] : [h, y],
          A = (0, s.createSafeMulticastEventHandler)(...I),
          H = (0, s.createSafeMulticastEventHandler)(...F),
          T = (0, s.createSafeMulticastEventHandler)(...R);
        return {
          listboxId: C,
          isOpened: b,
          isFocused: v,
          buttonTabIndex: c ? -1 : u,
          listboxTabIndex: -1,
          open: w,
          close: S,
          toggle: y,
          onOpen: M,
          buttonFocusBindings: { onFocus: A, onBlur: H },
          onButtonClick: T,
          buttonRef: k,
          listboxRef: E,
          buttonAria: {
            "aria-controls": b ? C : void 0,
            "aria-expanded": b,
            "aria-disabled": c,
          },
        };
      }
    },
    383836: (e, t, n) => {
      "use strict";
      n.d(t, { useFocus: () => r });
      var o = n(50959);
      function r(e, t) {
        const [n, r] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          t && n && r(!1);
        }, [t, n]);
        const i = {
          onFocus: (0, o.useCallback)(
            function (t) {
              (void 0 !== e && e.current !== t.target) || r(!0);
            },
            [e]
          ),
          onBlur: (0, o.useCallback)(
            function (t) {
              (void 0 !== e && e.current !== t.target) || r(!1);
            },
            [e]
          ),
        };
        return [n, i];
      }
    },
    648621: (e, t, n) => {
      "use strict";
      n.d(t, { useItemsKeyboardNavigation: () => a });
      var o,
        r = n(50959),
        i = n(865968);
      function l(e, t) {
        return e >= 0 ? e % t : (t - (Math.abs(e) % t)) % t;
      }
      !(function (e) {
        (e.Next = "next"),
          (e.Previous = "previous"),
          (e.First = "first"),
          (e.Last = "last");
      })(o || (o = {}));
      const s = (e) => ({
        next: [40, () => (e() ? 37 : 39)],
        previous: [38, () => (e() ? 39 : 37)],
        first: [33, () => (e() ? 35 : 36)],
        last: [34, () => (e() ? 36 : 35)],
      });
      function a(e, t, n, o, a, c, u = {}, d, f) {
        const h = (0, r.useCallback)(
            (e) => {
              const t = n.findIndex(o);
              if (t === n.length - 1 && !c)
                return void (d?.onFailNext && d.onFailNext(e));
              const r = l(t + 1, n.length);
              a && a(n[r], "next");
            },
            [n, o, a, c]
          ),
          b = (0, r.useCallback)(
            (e) => {
              const t = n.findIndex(o);
              if (0 === t && !c) return void (d?.onFailPrev && d.onFailPrev(e));
              const r = l(t - 1, n.length);
              a && a(n[r], "previous");
            },
            [n, o, a, c]
          ),
          m = (0, r.useCallback)(() => {
            a && a(n[0], "first");
          }, [a, n]),
          p = (0, r.useCallback)(() => {
            a && a(n[n.length - 1], "last");
          }, [a, n]),
          g = (0, r.useMemo)(() => s(t), [t]),
          {
            next: v = g.next,
            previous: C = g.previous,
            first: k = g.first,
            last: x = g.last,
          } = u;
        return (0, i.useComposedKeyboardActionHandlers)(
          (0, i.useKeyboardActionHandler)(v, h, f?.next ?? (() => !0), e),
          (0, i.useKeyboardActionHandler)(C, b, f?.previous ?? (() => !0), e),
          (0, i.useKeyboardActionHandler)(k, m, () => !0, e),
          (0, i.useKeyboardActionHandler)(x, p, () => !0, e)
        );
      }
    },
    930617: (e, t, n) => {
      "use strict";
      n.d(t, { useKeepActiveItemIntoView: () => d });
      var o = n(50959),
        r = n(650151),
        i = n(549423);
      const l = { duration: 200, additionalScroll: 0 },
        s = {
          vertical: {
            scrollSize: "scrollHeight",
            clientSize: "clientHeight",
            start: "top",
            end: "bottom",
            size: "height",
          },
          horizontal: {
            scrollSize: "scrollWidth",
            clientSize: "clientWidth",
            start: "left",
            end: "right",
            size: "width",
          },
        };
      function a(e, t) {
        const n = s[e];
        return t[n.scrollSize] > t[n.clientSize];
      }
      function c(e, t, n, o, r, l) {
        const a = (function (e, t, n, o = 0) {
          const r = s[e];
          return {
            start: -1 * o,
            middle:
              -1 * (Math.floor(n[r.size] / 2) - Math.floor(t[r.size] / 2)),
            end: -1 * (n[r.size] - t[r.size]) + o,
          };
        })(e, o, r, l.additionalScroll);
        let c = 0;
        if (
          l.snapToMiddle ||
          (function (e, t, n) {
            const o = s[e];
            return (
              t[o.start] < n[o.start] - n[o.size] / 2 ||
              t[o.end] > n[o.end] + n[o.size] / 2
            );
          })(e, o, r)
        )
          c = a.middle;
        else {
          const t = (function (e, t, n, o = 0) {
              const r = s[e],
                i = t[r.start] + Math.floor(t[r.size] / 2),
                l = n[r.start] + Math.floor(n[r.size] / 2);
              return {
                start: t[r.start] - n[r.start] - o,
                middle: i - l,
                end: t[r.end] - n[r.end] + o,
              };
            })(e, o, r, l.additionalScroll),
            n = (function (e) {
              const { start: t, middle: n, end: o } = e,
                r = new Map([
                  [Math.abs(t), { key: "start", value: Math.sign(t) }],
                  [Math.abs(n), { key: "middle", value: Math.sign(n) }],
                  [Math.abs(o), { key: "end", value: Math.sign(o) }],
                ]),
                i = Math.min(...r.keys());
              return r.get(i);
            })(t);
          c = void 0 !== n ? a[n.key] : 0;
        }
        return (
          l.align && (c = a[l.align]),
          (function (e) {
            const {
              additionalScroll: t = 0,
              duration: n = i.dur,
              func: o = i.easingFunc.easeInOutCubic,
              onScrollEnd: r,
              target: l,
              wrap: s,
              direction: a = "vertical",
            } = e;
            let { targetRect: c, wrapRect: u } = e;
            (c = c ?? l.getBoundingClientRect()),
              (u = u ?? s.getBoundingClientRect());
            const d = ("vertical" === a ? c.top - u.top : c.left - u.left) + t,
              f = "vertical" === a ? "scrollTop" : "scrollLeft",
              h = s ? s[f] : 0;
            let b,
              m = 0;
            return (
              (m = window.requestAnimationFrame(function e(t) {
                let i;
                if ((b ? (i = t - b) : ((i = 0), (b = t)), i >= n))
                  return (s[f] = h + d), void (r && r());
                const l = h + d * o(i / n);
                (s[f] = Math.floor(l)), (m = window.requestAnimationFrame(e));
              })),
              function () {
                window.cancelAnimationFrame(m), r && r();
              }
            );
          })({
            ...l,
            target: t,
            targetRect: o,
            wrap: n,
            wrapRect: r,
            additionalScroll: c,
            direction: e,
          })
        );
      }
      class u {
        constructor(e = null) {
          (this._container = null),
            (this._lastScrolledElement = null),
            (this._stopVerticalScroll = null),
            (this._stopHorizontalScroll = null),
            (this._container = e);
        }
        scrollTo(e, t = l) {
          if (
            null !== this._container &&
            null !== e &&
            !(function (e, t, n = 0) {
              const o = e.getBoundingClientRect(),
                r = t.getBoundingClientRect();
              return (
                o.top - r.top >= 0 &&
                r.bottom - o.bottom >= 0 &&
                o.left - r.left >= n &&
                r.right - o.right >= n
              );
            })(e, this._container, t.visibilityDetectionOffsetInline)
          ) {
            const n = e.getBoundingClientRect(),
              o = this._container.getBoundingClientRect();
            this.stopScroll(),
              a("vertical", this._container) &&
                (this._stopVerticalScroll = c(
                  "vertical",
                  e,
                  this._container,
                  n,
                  o,
                  this._modifyOptions("vertical", t)
                )),
              a("horizontal", this._container) &&
                (this._stopHorizontalScroll = c(
                  "horizontal",
                  e,
                  this._container,
                  n,
                  o,
                  this._modifyOptions("horizontal", t)
                ));
          }
          this._lastScrolledElement = e;
        }
        scrollToLastElement(e) {
          this.scrollTo(this._lastScrolledElement, e);
        }
        stopScroll() {
          null !== this._stopVerticalScroll && this._stopVerticalScroll(),
            null !== this._stopHorizontalScroll && this._stopHorizontalScroll();
        }
        getContainer() {
          return this._container;
        }
        setContainer(e) {
          (this._container = e),
            this._container?.contains(this._lastScrolledElement) ||
              (this._lastScrolledElement = null);
        }
        destroy() {
          this.stopScroll(),
            (this._container = null),
            (this._lastScrolledElement = null);
        }
        _handleScrollEnd(e) {
          "vertical" === e
            ? (this._stopVerticalScroll = null)
            : (this._stopHorizontalScroll = null);
        }
        _modifyOptions(e, t) {
          return Object.assign({}, t, {
            onScrollEnd: () => {
              this._handleScrollEnd(e),
                void 0 !== t.onScrollEnd && t.onScrollEnd();
            },
          });
        }
      }
      function d(e = {}) {
        const { activeItem: t, getKey: n, ...i } = e,
          l = (0, o.useRef)(null),
          s = (0, o.useRef)(new Map()),
          a = (function (e) {
            const t = (0, o.useRef)(null);
            return (
              (0, o.useEffect)(
                () => (
                  (t.current = new u(e)),
                  () => (0, r.ensureNotNull)(t.current).destroy()
                ),
                []
              ),
              t
            );
          })(l.current),
          c = (0, o.useCallback)(() => {
            null !== a.current &&
              null !== l.current &&
              a.current.getContainer() !== l.current &&
              a.current.setContainer(l.current);
          }, [a, l]),
          d = (0, o.useCallback)(
            (e) => {
              l.current = e;
            },
            [l]
          ),
          f = (0, o.useCallback)(
            (e, t) => {
              const o = n ? n(e) : e;
              t ? s.current.set(o, t) : s.current.delete(o);
            },
            [s, n]
          ),
          h = (0, o.useCallback)(
            (e, t) => {
              if (!e) return;
              const o = n ? n(e) : e,
                i = s.current.get(o);
              i && (c(), (0, r.ensureNotNull)(a.current).scrollTo(i, t));
            },
            [s, a, n]
          );
        return (0, o.useEffect)(() => h(t, i), [h, t]), [d, f, h];
      }
    },
    671129: (e, t, n) => {
      "use strict";
      n.d(t, { useMatchMedia: () => i, useSafeMatchMedia: () => r });
      var o = n(50959);
      function r(e, t = !1) {
        const [n, r] = (0, o.useState)(t);
        return (
          (0, o.useEffect)(() => {
            const t = window.matchMedia(e);
            function n() {
              r(t.matches);
            }
            return (
              n(),
              t.addEventListener("change", n),
              () => {
                t.removeEventListener("change", n);
              }
            );
          }, [e]),
          n
        );
      }
      function i(e) {
        const t = (0, o.useMemo)(() => window.matchMedia(e).matches, []);
        return r(e, t);
      }
    },
    525388: (e, t, n) => {
      "use strict";
      n.d(t, { useMergedRefs: () => i });
      var o = n(50959),
        r = n(273388);
      function i(e) {
        return (0, o.useCallback)((0, r.mergeRefs)(e), e);
      }
    },
    118965: (e, t, n) => {
      "use strict";
      n.d(t, { useMobileTouchState: () => i });
      var o = n(50959),
        r = n(799573);
      function i() {
        const [e, t] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            t(r.mobiletouch);
          }, []),
          e
        );
      }
    },
    778199: (e, t, n) => {
      "use strict";
      function o(e, t, n, o, r) {
        function i(r) {
          if (e > r.timeStamp) return;
          const i = r.target;
          void 0 !== n &&
            null !== t &&
            null !== i &&
            i.ownerDocument === o &&
            (t.contains(i) || n(r));
        }
        return (
          r.click && o.addEventListener("click", i, !1),
          r.mouseDown && o.addEventListener("mousedown", i, !1),
          r.touchEnd && o.addEventListener("touchend", i, !1),
          r.touchStart && o.addEventListener("touchstart", i, !1),
          () => {
            o.removeEventListener("click", i, !1),
              o.removeEventListener("mousedown", i, !1),
              o.removeEventListener("touchend", i, !1),
              o.removeEventListener("touchstart", i, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => o });
    },
    457927: (e, t, n) => {
      "use strict";
      n.d(t, { useRefsMap: () => r });
      var o = n(50959);
      function r() {
        const e = (0, o.useRef)(new Map()),
          t = (0, o.useCallback)(
            (t) => (n) => {
              null !== n ? e.current.set(t, n) : e.current.delete(t);
            },
            [e]
          );
        return [e, t];
      }
    },
    664332: (e, t, n) => {
      "use strict";
      n.d(t, { useResizeObserver: () => l });
      var o = n(50959),
        r = n(855393),
        i = n(718736);
      function l(e, t = []) {
        const { callback: n, ref: l = null } = (function (e) {
            return "function" == typeof e ? { callback: e } : e;
          })(e),
          s = (0, o.useRef)(null),
          a = (0, o.useRef)(n);
        a.current = n;
        const c = (0, i.useFunctionalRefObject)(l),
          u = (0, o.useCallback)(
            (e) => {
              c(e),
                null !== s.current &&
                  (s.current.disconnect(), null !== e && s.current.observe(e));
            },
            [c, s]
          );
        return (
          (0, r.useIsomorphicLayoutEffect)(
            () => (
              (s.current = new ResizeObserver((e, t) => {
                a.current(e, t);
              })),
              c.current && u(c.current),
              () => {
                s.current?.disconnect();
              }
            ),
            [c, ...t]
          ),
          u
        );
      }
    },
    984164: (e, t, n) => {
      "use strict";
      n.d(t, { useTabs: () => p });
      var o = n(50959),
        r = n(540801),
        i = n(269842),
        l = n(383836),
        s = n(930617),
        a = n(650151),
        c = n(865968),
        u = n(648621);
      function d() {
        return !1;
      }
      function f(e, t) {
        return { next: () => t !== e.length - 1, previous: () => 0 !== t };
      }
      function h(e) {
        const { activationType: t = "manual" } = e,
          n = (0, o.useMemo)(() => t, []);
        return (
          (0, a.assert)(t === n, "Activation type must be invariant."),
          "automatic" === t
            ? (function (e) {
                const {
                    isRtl: t,
                    items: n,
                    preventDefaultIfHandled: r = !0,
                    stopPropagationIfHandled: i = !1,
                    loop: l = !0,
                    isHighlighted: s,
                    onHighlight: a,
                    onActivate: h,
                    isCollapsed: b = d,
                    orientation: m,
                  } = e,
                  p = (0, o.useCallback)(
                    (e) => {
                      a(e), b(e) || h(e);
                    },
                    [a, h, b]
                  ),
                  g = !l && i ? f(n, n.findIndex(s)) : void 0;
                return (0, c.useKeyboardEventHandler)(
                  [
                    (0, u.useItemsKeyboardNavigation)(
                      m,
                      t,
                      n,
                      s,
                      p,
                      l,
                      {},
                      void 0,
                      g
                    ),
                  ],
                  r,
                  i
                );
              })(e)
            : (function (e) {
                const {
                    isRtl: t,
                    items: n,
                    preventDefaultIfHandled: r = !0,
                    stopPropagationIfHandled: i = !1,
                    loop: l = !0,
                    isHighlighted: s,
                    onHighlight: a,
                    onActivate: d,
                    orientation: h,
                  } = e,
                  b = n.findIndex(s),
                  m = n[b],
                  p = (0, o.useCallback)(() => {
                    void 0 !== m && d(m);
                  }, [m, d]),
                  g = !l && i ? f(n, b) : void 0,
                  v = (0, o.useCallback)((e) => a(e), [a]),
                  C = (0, u.useItemsKeyboardNavigation)(
                    h,
                    t,
                    n,
                    s,
                    v,
                    l,
                    {},
                    void 0,
                    g
                  ),
                  k = (0, c.useKeyboardActionHandler)([13, 32], p);
                return (0, c.useKeyboardEventHandler)([C, k], r, i);
              })(e)
        );
      }
      var b = n(118965);
      const m = 24;
      function p(e) {
        const {
            id: t,
            items: n,
            orientation: a,
            activationType: c = "manual",
            disabled: u,
            tablistLabelId: d,
            tablistLabel: f,
            focusOnHighlight: p = !0,
            preventDefaultIfKeyboardActionHandled: g = !0,
            stopPropagationIfKeyboardActionHandled: v = !1,
            keyboardNavigationLoop: C = !0,
            scrollIntoViewOptions: k,
            isActive: x,
            onActivate: E,
            isCollapsed: M,
            isRtl: w,
            isDisclosureOpened: S,
            isRadioGroup: y,
            defaultKeyboardFocus: I,
            focusableItemAttributes: F = {},
          } = e,
          R = (0, b.useMobileTouchState)(),
          A = S ? null : a || "horizontal",
          H = (0, o.useRef)(e.itemsRefs?.current ?? new Map()),
          [T, P] = (0, o.useState)(),
          [O, L] = (0, l.useFocus)(),
          _ = n.find(x),
          z = (0, o.useCallback)((e) => !u && !e.disabled && e === T, [u, T]),
          N = (0, o.useCallback)(
            (e) => {
              const t = H.current.get(e);
              p && void 0 !== t && t !== document.activeElement && t.focus();
            },
            [p]
          ),
          W = (0, o.useRef)(),
          K = (0, o.useCallback)(
            (e, t) => {
              u ||
                e.disabled ||
                (P(e),
                "number" == typeof t
                  ? (clearTimeout(W.current),
                    (W.current = setTimeout(() => N(e), t)))
                  : N(e));
            },
            [u, P, N, S]
          ),
          D = (0, o.useCallback)(
            (e) => {
              u || e.disabled || (E(e), z(e) || K(e));
            },
            [u, E, z, K]
          ),
          B = h({
            isRtl: w,
            items: (0, o.useMemo)(
              () => n.filter((e) => !u && !e.disabled),
              [n, u]
            ),
            activationType: c,
            preventDefaultIfHandled: g,
            stopPropagationIfHandled: v,
            loop: C,
            onActivate: D,
            isHighlighted: z,
            onHighlight: K,
            isCollapsed: M,
            orientation: A,
          }),
          V = (0, o.useCallback)(
            (e) => {
              let t = null;
              for (const [n, o] of H.current.entries())
                if (e.target === o) {
                  t = n;
                  break;
                }
              t && !z(t) && ("automatic" === c && M && !M(t) ? D(t) : K(t));
            },
            [c, z, K, D, M]
          );
        (0, o.useEffect)(() => {
          R || (void 0 !== _ && P(_));
        }, [_, R]),
          (0, o.useEffect)(() => {
            O || P(void 0);
          }, [O]),
          (0, o.useEffect)(() => () => clearTimeout(W.current), []);
        const Q = k?.additionalScroll ?? 0,
          [j, q] = (0, s.useKeepActiveItemIntoView)({
            ...k,
            visibilityDetectionOffsetInline: Q + m,
            snapToMiddle: !0,
            activeItem: T ?? _,
            getKey: (0, o.useCallback)((e) => e.id, []),
          }),
          J = (0, o.useCallback)(
            (e, t) => {
              q(e, t), null !== t ? H.current.set(e, t) : H.current.delete(e);
            },
            [q]
          ),
          { firstEdgeItemIndex: U, lastEdgeItemIndex: $ } = (0, r.findEdgesTab)(
            n,
            M
          );
        return {
          tabsBindings: n.map((e, t) => {
            const n = z(e),
              o = x(e),
              i = e.disabled ?? u ?? !1,
              l = 1 === I ? (O ? n : t === U || t === $) : !i && (O ? n : o);
            return {
              ...(0, r.getTabAttributes)(e.id, l, o, e.tabpanelId, i, y, "", F),
              highlighted: n,
              active: o,
              handleItemRef: J,
            };
          }),
          tablistBinding: {
            ...(0, r.getTabListAttributes)(t, a, u, d, f, y),
            onBlur: L.onBlur,
            onFocus: (0, i.createSafeMulticastEventHandler)(L.onFocus, V),
            onKeyDown: B,
          },
          scrollWrapBinding: { ref: j },
          onActivate: D,
          onHighlight: K,
          isHighlighted: z,
        };
      }
    },
    92318: (e, t, n) => {
      "use strict";
      n.d(t, { skeletonTheme: () => r });
      var o = n(55679);
      const r = o;
    },
    540801: (e, t, n) => {
      "use strict";
      function o(e, t = "horizontal", n, o, r, i) {
        return {
          id: e,
          role: i ? "radiogroup" : "tablist",
          "aria-orientation": t,
          "aria-label": r,
          "aria-labelledby": o,
          "aria-disabled": n,
        };
      }
      function r(e, t, n, o, r, i, l, s) {
        return {
          id: e,
          role: i ? "radio" : "tab",
          tabIndex: t ? s?.tabIndex ?? 0 : -1,
          disabled: r,
          "aria-selected": i ? void 0 : n,
          "aria-checked": i ? n : void 0,
          "aria-controls": o,
          "aria-disabled": r,
          "aria-label": l,
          "data-focus-manager": void 0 !== s ? s["data-focus-manager"] : void 0,
        };
      }
      function i(e, t) {
        let n, o;
        for (let r = 0; r < e.length; r++) {
          const i = e.length - (r + 1),
            l = void 0 !== t && t(e[i]);
          if (
            (!e[r].disabled && void 0 === n && (n = r),
            !e[i].disabled && !l && void 0 === o && (o = i),
            void 0 !== n && void 0 !== o)
          )
            break;
        }
        return { firstEdgeItemIndex: n, lastEdgeItemIndex: o };
      }
      var l, s, a, c, u;
      n.d(t, {
        TabNames: () => u,
        findEdgesTab: () => i,
        getTabAttributes: () => r,
        getTabListAttributes: () => o,
      }),
        (function (e) {
          (e[(e.Active = 0)] = "Active"), (e[(e.Edges = 1)] = "Edges");
        })(l || (l = {})),
        (function (e) {
          (e.Horizontal = "horizontal"), (e.Vertical = "vertical");
        })(s || (s = {})),
        (function (e) {
          (e.Automatic = "automatic"), (e.Manual = "manual");
        })(a || (a = {})),
        (function (e) {
          (e.Collapse = "collapse"),
            (e.Scroll = "scroll"),
            (e.Wrap = "wrap"),
            (e.None = "none");
        })(c || (c = {})),
        (function (e) {
          (e.SquareButtonTabs = "square-button-tabs"),
            (e.UnderlineButtonTabs = "underline-button-tabs"),
            (e.UnderlineAnchorTabs = "underline-anchor-tabs"),
            (e.RoundAnchorTabs = "round-anchor-tabs"),
            (e.RoundButtonTabs = "round-button-tabs"),
            (e.LightButtonTabs = "light-button-tabs");
        })(u || (u = {}));
    },
    800417: (e, t, n) => {
      "use strict";
      function o(e) {
        return i(e, l);
      }
      function r(e) {
        return i(e, s);
      }
      function i(e, t) {
        const n = Object.entries(e).filter(t),
          o = {};
        for (const [e, t] of n) o[e] = t;
        return o;
      }
      function l(e) {
        const [t, n] = e;
        return 0 === t.indexOf("data-") && "string" == typeof n;
      }
      function s(e) {
        return 0 === e[0].indexOf("aria-");
      }
      n.d(t, {
        filterAriaProps: () => r,
        filterDataProps: () => o,
        filterProps: () => i,
        isAriaAttribute: () => s,
        isDataAttribute: () => l,
      });
    },
    414823: (e, t, n) => {
      "use strict";
      n.d(t, { createDomId: () => f, joinDomIds: () => h });
      const o = "id",
        r = /\s/g,
        i = "-",
        l = "_",
        s = " ";
      function a(e) {
        return "string" == typeof e;
      }
      function c(e) {
        switch (typeof e) {
          case "string":
            return e;
          case "number":
          case "bigint":
            return e.toString(10);
          case "boolean":
          case "symbol":
            return e.toString();
          default:
            return null;
        }
      }
      function u(e) {
        return e.trim().length > 0;
      }
      function d(e) {
        return e.replace(r, i);
      }
      function f(...e) {
        const t = e.map(c).filter(a).filter(u).map(d);
        return (t.length > 0 && t[0].startsWith(o + l) ? t : [o, ...t]).join(l);
      }
      function h(...e) {
        return e.map(c).filter(a).filter(u).join(s);
      }
    },
    65160: (e, t, n) => {
      "use strict";
      function o(e) {
        const { paddingTop: t, paddingBottom: n } = window.getComputedStyle(e);
        return [t, n].reduce(
          (e, t) => e - Number((t || "").replace("px", "")),
          e.clientHeight
        );
      }
      function r(e, t = !1) {
        const n = getComputedStyle(e),
          o = [n.height];
        return (
          "border-box" !== n.boxSizing &&
            o.push(
              n.paddingTop,
              n.paddingBottom,
              n.borderTopWidth,
              n.borderBottomWidth
            ),
          t && o.push(n.marginTop, n.marginBottom),
          o.reduce((e, t) => e + (parseFloat(t) || 0), 0)
        );
      }
      function i(e, t = !1) {
        const n = getComputedStyle(e),
          o = [n.width];
        return (
          "border-box" !== n.boxSizing &&
            o.push(
              n.paddingLeft,
              n.paddingRight,
              n.borderLeftWidth,
              n.borderRightWidth
            ),
          t && o.push(n.marginLeft, n.marginRight),
          o.reduce((e, t) => e + (parseFloat(t) || 0), 0)
        );
      }
      n.d(t, {
        contentHeight: () => o,
        outerHeight: () => r,
        outerWidth: () => i,
      });
    },
    269842: (e, t, n) => {
      "use strict";
      function o(...e) {
        return (t) => {
          for (const n of e) void 0 !== n && n(t);
        };
      }
      n.d(t, { createSafeMulticastEventHandler: () => o });
    },
    361701: (e, t, n) => {
      "use strict";
      n.d(t, { CircleLogo: () => s, hiddenCircleLogoClass: () => l });
      var o = n(50959),
        r = n(185934),
        i = n(456057);
      const l = n.n(i)().hidden;
      function s(e) {
        const t = (0, r.isCircleLogoWithUrlProps)(e),
          [n, i] = (0, o.useState)(0),
          l = (0, o.useRef)(null),
          s = (0, r.getStyleClasses)(e.size, n, e.className),
          a = e.alt ?? e.title ?? "",
          c = t ? a[0] : e.placeholderLetter;
        return (
          (0, o.useEffect)(() => i(l.current?.complete ?? !t ? 2 : 1), [t]),
          t && 3 !== n
            ? o.createElement("img", {
                ref: l,
                className: s,
                crossOrigin: "",
                src: e.logoUrl,
                alt: a,
                title: e.title,
                loading: e.loading,
                onLoad: () => i(2),
                onError: () => i(3),
                "aria-label": e["aria-label"],
                "aria-hidden": e["aria-hidden"],
              })
            : o.createElement(
                "span",
                {
                  className: s,
                  title: e.title,
                  "aria-label": e["aria-label"],
                  "aria-hidden": e["aria-hidden"],
                },
                c
              )
        );
      }
    },
    192063: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => u,
        PopupMenuItem: () => f,
      });
      var o = n(50959),
        r = n(497754),
        i = n(32133),
        l = n(370981),
        s = n(361701),
        a = n(111706),
        c = n(509059);
      const u = c;
      function d(e) {
        e.stopPropagation();
      }
      function f(e) {
        const {
            id: t,
            role: n,
            className: u,
            title: f,
            labelRowClassName: h,
            labelClassName: b,
            toolboxClassName: m,
            shortcut: p,
            forceShowShortcuts: g,
            icon: v,
            iconClassname: C,
            isActive: k,
            isDisabled: x,
            isHovered: E,
            appearAsDisabled: M,
            label: w,
            link: S,
            showToolboxOnHover: y,
            showToolboxOnFocus: I,
            target: F,
            rel: R,
            toolbox: A,
            toolboxRole: H,
            reference: T,
            onMouseOut: P,
            onMouseOver: O,
            onKeyDown: L,
            suppressToolboxClick: _ = !0,
            theme: z = c,
            tabIndex: N,
            tagName: W,
            renderComponent: K,
            roundedIcon: D,
            iconAriaProps: B,
            circleLogo: V,
            dontClosePopup: Q,
            onClick: j,
            onClickArg: q,
            trackEventObject: J,
            trackMouseWheelClick: U,
            trackRightClick: $,
            ...G
          } = e,
          X = (0, o.useRef)(null),
          Y = (0, o.useMemo)(
            () =>
              (function (e) {
                function t(t) {
                  const { reference: n, ...r } = t,
                    i = e ?? (r.href ? "a" : "div"),
                    l =
                      "a" === i
                        ? r
                        : (function (e) {
                            const {
                              download: t,
                              href: n,
                              hrefLang: o,
                              media: r,
                              ping: i,
                              rel: l,
                              target: s,
                              type: a,
                              referrerPolicy: c,
                              ...u
                            } = e;
                            return u;
                          })(r);
                  return o.createElement(i, { ...l, ref: n });
                }
                return (t.displayName = `DefaultComponent(${e})`), t;
              })(W),
            [W]
          ),
          Z = K ?? Y;
        return o.createElement(
          Z,
          {
            ...G,
            id: t,
            role: n,
            className: r(u, z.item, v && z.withIcon, {
              [z.isActive]: k,
              [z.isDisabled]: x || M,
              [z.hovered]: E,
            }),
            title: f,
            href: S,
            target: F,
            rel: R,
            reference: function (e) {
              (X.current = e), "function" == typeof T && T(e);
              "object" == typeof T && (T.current = e);
            },
            onClick: function (e) {
              if (x) return;
              J && (0, i.trackEvent)(J.category, J.event, J.label);
              j && j(q, e);
              Q ||
                (e.currentTarget.dispatchEvent(
                  new CustomEvent("popup-menu-close-event", {
                    bubbles: !0,
                    detail: {
                      clickType: (0, a.isKeyboardClick)(e)
                        ? "keyboard"
                        : "mouse",
                    },
                  })
                ),
                (0, l.globalCloseMenu)());
            },
            onContextMenu: function (e) {
              J &&
                $ &&
                (0, i.trackEvent)(J.category, J.event, `${J.label}_rightClick`);
            },
            onMouseUp: function (e) {
              if (1 === e.button && S && J) {
                let e = J.label;
                U && (e += "_mouseWheelClick"),
                  (0, i.trackEvent)(J.category, J.event, e);
              }
            },
            onMouseOver: O,
            onMouseOut: P,
            onKeyDown: L,
            tabIndex: N,
          },
          V &&
            o.createElement(s.CircleLogo, {
              ...B,
              className: c["disclosure-item-circle-logo"],
              size: "xxxsmall",
              logoUrl: V.logoUrl,
              placeholderLetter:
                "placeholderLetter" in V ? V.placeholderLetter : void 0,
            }),
          v &&
            o.createElement("span", {
              "aria-label": B && B["aria-label"],
              "aria-hidden": B && Boolean(B["aria-hidden"]),
              className: r(z.icon, D && c["round-icon"], C),
              dangerouslySetInnerHTML: { __html: v },
            }),
          o.createElement(
            "span",
            {
              className: r(z.labelRow, h),
            },
            o.createElement("span", { className: r(z.label, b) }, w)
          ),
          (void 0 !== p || g) &&
            o.createElement(
              "span",
              { className: z.shortcut },
              (ee = p) && ee.split("+").join(" + ")
            ),
          void 0 !== A &&
            o.createElement(
              "span",
              {
                role: H,
                onClick: _ ? d : void 0,
                className: r(m, z.toolbox, {
                  [z.showOnHover]: y,
                  [z.showOnFocus]: I,
                }),
              },
              A
            )
        );
        var ee;
      }
    },
    624216: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenu: () => f });
      var o = n(50959),
        r = n(632227),
        i = n(688987),
        l = n(8361),
        s = n(510618),
        a = n(28466);
      const c = o.createContext(void 0);
      var u = n(908783);
      const d = o.createContext({ setMenuMaxWidth: !1 });
      function f(e) {
        const {
            controller: t,
            children: n,
            isOpened: f,
            closeOnClickOutside: h = !0,
            doNotCloseOn: b,
            onClickOutside: m,
            onClose: p,
            onKeyboardClose: g,
            "data-name": v = "popup-menu-container",
            ...C
          } = e,
          k = (0, o.useContext)(a.CloseDelegateContext),
          x = o.useContext(d),
          E = (0, o.useContext)(c),
          M = (0, u.useOutsideEvent)({
            handler: function (e) {
              m && m(e);
              if (!h) return;
              const t = (0, i.default)(b) ? b() : null == b ? [] : [b];
              if (t.length > 0 && e.target instanceof Node)
                for (const n of t) {
                  const t = r.findDOMNode(n);
                  if (t instanceof Node && t.contains(e.target)) return;
                }
              p();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return f
          ? o.createElement(
              l.Portal,
              {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                pointerEvents: "none",
              },
              o.createElement(
                "span",
                { ref: M, style: { pointerEvents: "auto" } },
                o.createElement(
                  s.Menu,
                  {
                    ...C,
                    onClose: p,
                    onKeyboardClose: g,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: k,
                    customRemeasureDelegate: E,
                    ref: t,
                    "data-name": v,
                    limitMaxWidth: x.setMenuMaxWidth,
                    "data-tooltip-show-on-focus": "true",
                  },
                  n
                )
              )
            )
          : null;
      }
    },
    586240: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"size-header-height":"64px","media-phone":"all and (max-width: 767px)","media-phone-vertical":"all and (max-width: 479px)","media-extreme-thin":"all and (max-width: 329px)","media-mf-phone-landscape":"all and (min-width: 568px)"}'
      );
    },
  },
]);
