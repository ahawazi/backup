(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7707],
  {
    259142: function (e, t) {
      var n, o, r;
      (o = [t]),
        (n = function (e) {
          "use strict";
          function t(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = !1;
          if ("undefined" != typeof window) {
            var o = {
              get passive() {
                n = !0;
              },
            };
            window.addEventListener("testPassive", null, o),
              window.removeEventListener("testPassive", null, o);
          }
          var r =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            i = [],
            s = !1,
            a = -1,
            l = void 0,
            c = void 0,
            u = function (e) {
              return i.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                );
              });
            },
            d = function (e) {
              var t = e || window.event;
              return (
                !!u(t.target) ||
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              );
            },
            h = function () {
              setTimeout(function () {
                void 0 !== c &&
                  ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== l &&
                    ((document.body.style.overflow = l), (l = void 0));
              });
            };
          (e.disableBodyScroll = function (e, o) {
            if (r) {
              if (!e)
                return void console.error(
                  "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                );
              if (
                e &&
                !i.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var h = { targetElement: e, options: o || {} };
                (i = [].concat(t(i), [h])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (a = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    var n, o, r, i;
                    1 === t.targetTouches.length &&
                      ((o = e),
                      (i = (n = t).targetTouches[0].clientY - a),
                      !u(n.target) &&
                        ((o && 0 === o.scrollTop && 0 < i) ||
                        ((r = o) &&
                          r.scrollHeight - r.scrollTop <= r.clientHeight &&
                          i < 0)
                          ? d(n)
                          : n.stopPropagation()));
                  }),
                  s ||
                    (document.addEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (s = !0));
              }
            } else {
              (p = o),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!p && !0 === p.reserveScrollBarGap,
                      t =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + "px"));
                  }
                  void 0 === l &&
                    ((l = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                });
              var m = { targetElement: e, options: o || {} };
              i = [].concat(t(i), [m]);
            }
            var p;
          }),
            (e.clearAllBodyScrollLocks = function () {
              r
                ? (i.forEach(function (e) {
                    (e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null);
                  }),
                  s &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (s = !1)),
                  (i = []),
                  (a = -1))
                : (h(), (i = []));
            }),
            (e.enableBodyScroll = function (e) {
              if (r) {
                if (!e)
                  return void console.error(
                    "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                  );
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (i = i.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  s &&
                    0 === i.length &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (s = !1));
              } else
                1 === i.length && i[0].targetElement === e
                  ? (h(), (i = []))
                  : (i = i.filter(function (t) {
                      return t.targetElement !== e;
                    }));
            });
        }),
        void 0 === (r = "function" == typeof n ? n.apply(t, o) : n) ||
          (e.exports = r);
    },
    497754: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var o = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var s = r.apply(null, n);
                s && e.push(s);
              } else if ("object" === i)
                for (var a in n) o.call(n, a) && n[a] && e.push(a);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (n = function () {
                return r;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
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
    536718: (e) => {
      e.exports = {
        "default-drawer-min-top-distance": "100px",
        wrap: "wrap-_HnK0UIN",
        positionBottom: "positionBottom-_HnK0UIN",
        backdrop: "backdrop-_HnK0UIN",
        drawer: "drawer-_HnK0UIN",
        positionLeft: "positionLeft-_HnK0UIN",
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
    149128: (e) => {
      e.exports = { icon: "icon-WB2y0EnP", dropped: "dropped-WB2y0EnP" };
    },
    185934: (e, t, n) => {
      "use strict";
      n.d(t, { getStyleClasses: () => a, isCircleLogoWithUrlProps: () => l });
      var o = n(497754),
        r = n(92318),
        i = n(456057),
        s = n.n(i);
      function a(e, t = 2, n) {
        return o(
          s().logo,
          s()[e],
          n,
          0 === t || 1 === t
            ? o(r.skeletonTheme.wrapper, s().skeleton)
            : s().letter,
          1 === t && r.skeletonTheme.animated
        );
      }
      function l(e) {
        return (
          "logoUrl" in e &&
          null !== e.logoUrl &&
          void 0 !== e.logoUrl &&
          0 !== e.logoUrl.length
        );
      }
    },
    718736: (e, t, n) => {
      "use strict";
      n.d(t, { useFunctionalRefObject: () => i });
      var o = n(50959),
        r = n(855393);
      function i(e) {
        const t = (0, o.useMemo)(
            () =>
              (function (e) {
                const t = (n) => {
                  e(n), (t.current = n);
                };
                return (t.current = null), t;
              })((e) => {
                a.current(e);
              }),
            []
          ),
          n = (0, o.useRef)(null),
          i = (t) => {
            if (null === t) return s(n.current, t), void (n.current = null);
            n.current !== e && ((n.current = e), s(n.current, t));
          },
          a = (0, o.useRef)(i);
        return (
          (a.current = i),
          (0, r.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current)
              return a.current(t.current), () => a.current(null);
          }, [e]),
          t
        );
      }
      function s(e, t) {
        null !== e && ("function" == typeof e ? e(t) : (e.current = t));
      }
    },
    855393: (e, t, n) => {
      "use strict";
      n.d(t, { useIsomorphicLayoutEffect: () => r });
      var o = n(50959);
      function r(e, t) {
        ("undefined" == typeof window ? o.useEffect : o.useLayoutEffect)(e, t);
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
    183787: (e, t, n) => {
      "use strict";
      n.d(t, { Icon: () => r });
      var o = n(50959);
      const r = o.forwardRef((e, t) => {
        const {
            icon: n = "",
            title: r,
            ariaLabel: i,
            ariaLabelledby: s,
            ariaHidden: a,
            ...l
          } = e,
          c = !!(r || i || s);
        return o.createElement("span", {
          role: "img",
          ...l,
          ref: t,
          "aria-label": i,
          "aria-labelledby": s,
          "aria-hidden": a || !c,
          title: r,
          dangerouslySetInnerHTML: { __html: n },
        });
      });
    },
    878112: (e, t, n) => {
      "use strict";
      n.d(t, { Icon: () => o.Icon });
      var o = n(183787);
    },
    92318: (e, t, n) => {
      "use strict";
      n.d(t, { skeletonTheme: () => r });
      var o = n(55679);
      const r = o;
    },
    800417: (e, t, n) => {
      "use strict";
      function o(e) {
        return i(e, s);
      }
      function r(e) {
        return i(e, a);
      }
      function i(e, t) {
        const n = Object.entries(e).filter(t),
          o = {};
        for (const [e, t] of n) o[e] = t;
        return o;
      }
      function s(e) {
        const [t, n] = e;
        return 0 === t.indexOf("data-") && "string" == typeof n;
      }
      function a(e) {
        return 0 === e[0].indexOf("aria-");
      }
      n.d(t, {
        filterAriaProps: () => r,
        filterDataProps: () => o,
        filterProps: () => i,
        isAriaAttribute: () => a,
        isDataAttribute: () => s,
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
    865266: (e, t, n) => {
      "use strict";
      n.d(t, { useRovingTabindexElement: () => i });
      var o = n(50959),
        r = n(718736);
      function i(e, t = []) {
        const [n, i] = (0, o.useState)(!1),
          s = (0, r.useFunctionalRefObject)(e);
        return (
          (0, o.useLayoutEffect)(() => {
            const e = s.current;
            if (null === e) return;
            const t = (e) => {
              switch (e.type) {
                case "roving-tabindex:main-element":
                  i(!0);
                  break;
                case "roving-tabindex:secondary-element":
                  i(!1);
              }
            };
            return (
              e.addEventListener("roving-tabindex:main-element", t),
              e.addEventListener("roving-tabindex:secondary-element", t),
              () => {
                e.removeEventListener("roving-tabindex:main-element", t),
                  e.removeEventListener("roving-tabindex:secondary-element", t);
              }
            );
          }, t),
          [s, n ? 0 : -1]
        );
      }
    },
    361701: (e, t, n) => {
      "use strict";
      n.d(t, { CircleLogo: () => a, hiddenCircleLogoClass: () => s });
      var o = n(50959),
        r = n(185934),
        i = n(456057);
      const s = n.n(i)().hidden;
      function a(e) {
        const t = (0, r.isCircleLogoWithUrlProps)(e),
          [n, i] = (0, o.useState)(0),
          s = (0, o.useRef)(null),
          a = (0, r.getStyleClasses)(e.size, n, e.className),
          l = e.alt ?? e.title ?? "",
          c = t ? l[0] : e.placeholderLetter;
        return (
          (0, o.useEffect)(() => i(s.current?.complete ?? !t ? 2 : 1), [t]),
          t && 3 !== n
            ? o.createElement("img", {
                ref: s,
                className: a,
                crossOrigin: "",
                src: e.logoUrl,
                alt: l,
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
                  className: a,
                  title: e.title,
                  "aria-label": e["aria-label"],
                  "aria-hidden": e["aria-hidden"],
                },
                c
              )
        );
      }
    },
    163694: (e, t, n) => {
      "use strict";
      n.d(t, { DrawerContext: () => s, DrawerManager: () => i });
      var o = n(50959),
        r = n(285089);
      class i extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._isBodyFixed = !1),
            (this._addDrawer = (e) => {
              this.setState((t) => ({ stack: [...t.stack, e] }));
            }),
            (this._removeDrawer = (e) => {
              this.setState((t) => ({ stack: t.stack.filter((t) => t !== e) }));
            }),
            (this.state = {
              stack: [],
            });
        }
        componentDidUpdate(e, t) {
          !t.stack.length &&
            this.state.stack.length &&
            ((0, r.setFixedBodyState)(!0), (this._isBodyFixed = !0)),
            t.stack.length &&
              !this.state.stack.length &&
              this._isBodyFixed &&
              ((0, r.setFixedBodyState)(!1), (this._isBodyFixed = !1));
        }
        componentWillUnmount() {
          this.state.stack.length &&
            this._isBodyFixed &&
            (0, r.setFixedBodyState)(!1);
        }
        render() {
          return o.createElement(
            s.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.stack.length
                  ? this.state.stack[this.state.stack.length - 1]
                  : null,
              },
            },
            this.props.children
          );
        }
      }
      const s = o.createContext(null);
    },
    759339: (e, t, n) => {
      "use strict";
      n.d(t, { Drawer: () => m });
      var o = n(50959),
        r = n(650151),
        i = n(497754),
        s = n(924910),
        a = n(8361),
        l = n(163694),
        c = n(28466),
        u = n(742554),
        d = n(536718);
      var h;
      function m(e) {
        const {
            position: t = "Bottom",
            onClose: n,
            children: u,
            reference: h,
            className: m,
            theme: v = d,
          } = e,
          f = (0, r.ensureNotNull)((0, o.useContext)(l.DrawerContext)),
          [g] = (0, o.useState)(() => (0, s.randomHash)()),
          b = (0, o.useRef)(null),
          w = (0, o.useContext)(c.CloseDelegateContext);
        return (
          (0, o.useLayoutEffect)(
            () => (
              (0, r.ensureNotNull)(b.current).focus({ preventScroll: !0 }),
              w.subscribe(f, n),
              f.addDrawer(g),
              () => {
                f.removeDrawer(g), w.unsubscribe(f, n);
              }
            ),
            []
          ),
          o.createElement(
            a.Portal,
            null,
            o.createElement(
              "div",
              { ref: h, className: i(d.wrap, d[`position${t}`]) },
              g === f.currentDrawer &&
                o.createElement("div", { className: d.backdrop, onClick: n }),
              o.createElement(
                p,
                {
                  className: i(v.drawer, d[`position${t}`], m),
                  ref: b,
                  "data-name": e["data-name"],
                },
                u
              )
            )
          )
        );
      }
      !(function (e) {
        (e.Left = "Left"), (e.Bottom = "Bottom");
      })(h || (h = {}));
      const p = (0, o.forwardRef)((e, t) => {
        const { className: n, ...r } = e;
        return o.createElement(u.TouchScrollContainer, {
          className: i(d.drawer, n),
          tabIndex: -1,
          ref: t,
          ...r,
        });
      });
    },
    192063: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => u,
        PopupMenuItem: () => h,
      });
      var o = n(50959),
        r = n(497754),
        i = n(32133),
        s = n(370981),
        a = n(361701),
        l = n(111706),
        c = n(509059);
      const u = c;
      function d(e) {
        e.stopPropagation();
      }
      function h(e) {
        const {
            id: t,
            role: n,
            className: u,
            title: h,
            labelRowClassName: m,
            labelClassName: p,
            toolboxClassName: v,
            shortcut: f,
            forceShowShortcuts: g,
            icon: b,
            iconClassname: w,
            isActive: E,
            isDisabled: x,
            isHovered: k,
            appearAsDisabled: _,
            label: y,
            link: M,
            showToolboxOnHover: T,
            showToolboxOnFocus: C,
            target: N,
            rel: B,
            toolbox: D,
            toolboxRole: O,
            reference: A,
            onMouseOut: F,
            onMouseOver: P,
            onKeyDown: W,
            suppressToolboxClick: R = !0,
            theme: S = c,
            tabIndex: L,
            tagName: I,
            renderComponent: z,
            roundedIcon: Q,
            iconAriaProps: U,
            circleLogo: H,
            dontClosePopup: V,
            onClick: j,
            onClickArg: K,
            trackEventObject: q,
            trackMouseWheelClick: J,
            trackRightClick: G,
            ...Y
          } = e,
          X = (0, o.useRef)(null),
          Z = (0, o.useMemo)(
            () =>
              (function (e) {
                function t(t) {
                  const { reference: n, ...r } = t,
                    i = e ?? (r.href ? "a" : "div"),
                    s =
                      "a" === i
                        ? r
                        : (function (e) {
                            const {
                              download: t,
                              href: n,
                              hrefLang: o,
                              media: r,
                              ping: i,
                              rel: s,
                              target: a,
                              type: l,
                              referrerPolicy: c,
                              ...u
                            } = e;
                            return u;
                          })(r);
                  return o.createElement(i, { ...s, ref: n });
                }
                return (t.displayName = `DefaultComponent(${e})`), t;
              })(I),
            [I]
          ),
          $ = z ?? Z;
        return o.createElement(
          $,
          {
            ...Y,
            id: t,
            role: n,
            className: r(u, S.item, b && S.withIcon, {
              [S.isActive]: E,
              [S.isDisabled]: x || _,
              [S.hovered]: k,
            }),
            title: h,
            href: M,
            target: N,
            rel: B,
            reference: function (e) {
              (X.current = e), "function" == typeof A && A(e);
              "object" == typeof A && (A.current = e);
            },
            onClick: function (e) {
              if (x) return;
              q && (0, i.trackEvent)(q.category, q.event, q.label);
              j && j(K, e);
              V ||
                (e.currentTarget.dispatchEvent(
                  new CustomEvent("popup-menu-close-event", {
                    bubbles: !0,
                    detail: {
                      clickType: (0, l.isKeyboardClick)(e)
                        ? "keyboard"
                        : "mouse",
                    },
                  })
                ),
                (0, s.globalCloseMenu)());
            },
            onContextMenu: function (e) {
              q &&
                G &&
                (0, i.trackEvent)(q.category, q.event, `${q.label}_rightClick`);
            },
            onMouseUp: function (e) {
              if (1 === e.button && M && q) {
                let e = q.label;
                J && (e += "_mouseWheelClick"),
                  (0, i.trackEvent)(q.category, q.event, e);
              }
            },
            onMouseOver: P,
            onMouseOut: F,
            onKeyDown: W,
            tabIndex: L,
          },
          H &&
            o.createElement(a.CircleLogo, {
              ...U,
              className: c["disclosure-item-circle-logo"],
              size: "xxxsmall",
              logoUrl: H.logoUrl,
              placeholderLetter:
                "placeholderLetter" in H ? H.placeholderLetter : void 0,
            }),
          b &&
            o.createElement("span", {
              "aria-label": U && U["aria-label"],
              "aria-hidden": U && Boolean(U["aria-hidden"]),
              className: r(S.icon, Q && c["round-icon"], w),
              dangerouslySetInnerHTML: { __html: b },
            }),
          o.createElement(
            "span",
            { className: r(S.labelRow, m) },
            o.createElement("span", { className: r(S.label, p) }, y)
          ),
          (void 0 !== f || g) &&
            o.createElement(
              "span",
              { className: S.shortcut },
              (ee = f) && ee.split("+").join(" + ")
            ),
          void 0 !== D &&
            o.createElement(
              "span",
              {
                role: O,
                onClick: R ? d : void 0,
                className: r(v, S.toolbox, {
                  [S.showOnHover]: T,
                  [S.showOnFocus]: C,
                }),
              },
              D
            )
        );
        var ee;
      }
    },
    624216: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenu: () => h });
      var o = n(50959),
        r = n(632227),
        i = n(688987),
        s = n(8361),
        a = n(510618),
        l = n(28466);
      const c = o.createContext(void 0);
      var u = n(908783);
      const d = o.createContext({ setMenuMaxWidth: !1 });
      function h(e) {
        const {
            controller: t,
            children: n,
            isOpened: h,
            closeOnClickOutside: m = !0,
            doNotCloseOn: p,
            onClickOutside: v,
            onClose: f,
            onKeyboardClose: g,
            "data-name": b = "popup-menu-container",
            ...w
          } = e,
          E = (0, o.useContext)(l.CloseDelegateContext),
          x = o.useContext(d),
          k = (0, o.useContext)(c),
          _ = (0, u.useOutsideEvent)({
            handler: function (e) {
              v && v(e);
              if (!m) return;
              const t = (0, i.default)(p) ? p() : null == p ? [] : [p];
              if (t.length > 0 && e.target instanceof Node)
                for (const n of t) {
                  const t = r.findDOMNode(n);
                  if (t instanceof Node && t.contains(e.target)) return;
                }
              f();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return h
          ? o.createElement(
              s.Portal,
              {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                pointerEvents: "none",
              },
              o.createElement(
                "span",
                { ref: _, style: { pointerEvents: "auto" } },
                o.createElement(
                  a.Menu,
                  {
                    ...w,
                    onClose: f,
                    onKeyboardClose: g,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: E,
                    customRemeasureDelegate: k,
                    ref: t,
                    "data-name": b,
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
    515783: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetCaret: () => l });
      var o = n(50959),
        r = n(497754),
        i = n(878112),
        s = n(149128),
        a = n(100578);
      function l(e) {
        const { dropped: t, className: n } = e;
        return o.createElement(i.Icon, {
          className: r(n, s.icon, { [s.dropped]: t }),
          icon: a,
        });
      }
    },
    742554: (e, t, n) => {
      "use strict";
      n.d(t, { TouchScrollContainer: () => c });
      var o = n(50959),
        r = n(259142),
        i = n(650151),
        s = n(601227);
      const a = CSS.supports("overscroll-behavior", "none");
      let l = 0;
      const c = (0, o.forwardRef)((e, t) => {
        const { children: n, ...i } = e,
          c = (0, o.useRef)(null);
        return (
          (0, o.useImperativeHandle)(t, () => c.current),
          (0, o.useLayoutEffect)(() => {
            if (s.CheckMobile.iOS())
              return (
                l++,
                null !== c.current &&
                  (a
                    ? 1 === l &&
                      (document.body.style.overscrollBehavior = "none")
                    : (0, r.disableBodyScroll)(c.current, {
                        allowTouchMove: u(c),
                      })),
                () => {
                  l--,
                    null !== c.current &&
                      (a
                        ? 0 === l &&
                          (document.body.style.overscrollBehavior = "")
                        : (0, r.enableBodyScroll)(c.current));
                }
              );
          }, []),
          o.createElement("div", { ref: c, ...i }, n)
        );
      });
      function u(e) {
        return (t) => {
          const n = (0, i.ensureNotNull)(e.current),
            o = document.activeElement;
          return (
            !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
          );
        };
      }
    },
    526448: (e) => {
      e.exports = {
        accessible: "accessible-NQERJsv9",
        active: "active-NQERJsv9",
      };
    },
    438576: (e) => {
      e.exports = {
        button: "button-GwQQdU8S",
        hover: "hover-GwQQdU8S",
        clicked: "clicked-GwQQdU8S",
        isInteractive: "isInteractive-GwQQdU8S",
        accessible: "accessible-GwQQdU8S",
        isGrouped: "isGrouped-GwQQdU8S",
        isActive: "isActive-GwQQdU8S",
        isOpened: "isOpened-GwQQdU8S",
        isDisabled: "isDisabled-GwQQdU8S",
        text: "text-GwQQdU8S",
        icon: "icon-GwQQdU8S",
        endIcon: "endIcon-GwQQdU8S",
      };
    },
    697373: (e) => {
      e.exports = { button: "button-xNqEcuN2" };
    },
    295389: (e) => {
      e.exports = {
        button: "button-merBkM5y",
        hover: "hover-merBkM5y",
        clicked: "clicked-merBkM5y",
        accessible: "accessible-merBkM5y",
        arrow: "arrow-merBkM5y",
        arrowWrap: "arrowWrap-merBkM5y",
        isOpened: "isOpened-merBkM5y",
      };
    },
    497876: (e) => {
      e.exports = { tab: "tab-jJ_D7IlA", accessible: "accessible-jJ_D7IlA" };
    },
    112595: (e) => {
      e.exports = {
        tabbar: "tabbar-n3UmcVi3",
        tabs: "tabs-n3UmcVi3",
        fakeTabs: "fakeTabs-n3UmcVi3",
        tab: "tab-n3UmcVi3",
        menuButtonWrap: "menuButtonWrap-n3UmcVi3",
        hover: "hover-n3UmcVi3",
        clicked: "clicked-n3UmcVi3",
        active: "active-n3UmcVi3",
        title: "title-n3UmcVi3",
        titleText: "titleText-n3UmcVi3",
        menuButton: "menuButton-n3UmcVi3",
      };
    },
    342822: (e) => {
      e.exports = { "css-value-footer-widget-horizontal-margin": "4px" };
    },
    320004: (e) => {
      e.exports = {
        footerPanel: "footerPanel-dA6R3Y1X",
        buttons: "buttons-dA6R3Y1X",
        hidden: "hidden-dA6R3Y1X",
        button: "button-dA6R3Y1X",
        firstButton: "firstButton-dA6R3Y1X",
        overlap: "overlap-dA6R3Y1X",
      };
    },
    994567: (e, t, n) => {
      "use strict";
      n.d(t, {
        focusFirstMenuItem: () => u,
        handleAccessibleMenuFocus: () => l,
        handleAccessibleMenuKeyDown: () => c,
        queryMenuElements: () => m,
      });
      var o = n(442092),
        r = n(333086),
        i = n(180185),
        s = n(32556);
      const a = [37, 39, 38, 40];
      function l(e, t) {
        if (!e.target) return;
        const n = e.relatedTarget?.getAttribute("aria-activedescendant");
        if (e.relatedTarget !== t.current) {
          const e = n && document.getElementById(n);
          if (!e || e !== t.current) return;
        }
        u(e.target);
      }
      function c(e) {
        if (e.defaultPrevented) return;
        const t = (0, i.hashFromEvent)(e);
        if (!a.includes(t)) return;
        const n = document.activeElement;
        if (!(document.activeElement instanceof HTMLElement)) return;
        const s = m(e.currentTarget).sort(o.navigationOrderComparator);
        if (0 === s.length) return;
        const l =
          document.activeElement.closest('[data-role="menuitem"]') ||
          document.activeElement.parentElement?.querySelector(
            '[data-role="menuitem"]'
          );
        if (!(l instanceof HTMLElement)) return;
        const c = s.indexOf(l);
        if (-1 === c) return;
        const u = p(l),
          v = u.indexOf(document.activeElement),
          f = -1 !== v,
          g = (e) => {
            n && (0, r.becomeSecondaryElement)(n),
              (0, r.becomeMainElement)(e),
              e.focus();
          };
        switch ((0, o.mapKeyCodeToDirection)(t)) {
          case "inlinePrev":
            if (!u.length) return;
            e.preventDefault(),
              g(0 === v ? s[c] : f ? d(u, v, -1) : u[u.length - 1]);
            break;
          case "inlineNext":
            if (!u.length) return;
            e.preventDefault(),
              v === u.length - 1 ? g(s[c]) : g(f ? d(u, v, 1) : u[0]);
            break;
          case "blockPrev": {
            e.preventDefault();
            const t = d(s, c, -1);
            if (f) {
              const e = h(t, v);
              g(e || t);
              break;
            }
            g(t);
            break;
          }
          case "blockNext": {
            e.preventDefault();
            const t = d(s, c, 1);
            if (f) {
              const e = h(t, v);
              g(e || t);
              break;
            }
            g(t);
          }
        }
      }
      function u(e) {
        const [t] = m(e);
        t && ((0, r.becomeMainElement)(t), t.focus());
      }
      function d(e, t, n) {
        return e[(t + e.length + n) % e.length];
      }
      function h(e, t) {
        const n = p(e);
        return n.length ? n[(t + n.length) % n.length] : null;
      }
      function m(e) {
        return Array.from(
          e.querySelectorAll(
            '[data-role="menuitem"]:not([disabled]):not([aria-disabled])'
          )
        ).filter((0, s.createScopedVisibleElementFilter)(e));
      }
      function p(e) {
        return Array.from(
          e.querySelectorAll("[tabindex]:not([disabled]):not([aria-disabled])")
        ).filter((0, s.createScopedVisibleElementFilter)(e));
      }
    },
    333086: (e, t, n) => {
      "use strict";
      var o;
      function r(e) {
        e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
      }
      function i(e) {
        e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
      }
      n.d(t, { becomeMainElement: () => r, becomeSecondaryElement: () => i }),
        (function (e) {
          (e.MainElement = "roving-tabindex:main-element"),
            (e.SecondaryElement = "roving-tabindex:secondary-element");
        })(o || (o = {}));
    },
    565631: (e, t, n) => {
      "use strict";
      n.d(t, { AccessibleIconButton: () => i });
      var o = n(50959),
        r = n(511349);
      const i = (0, o.forwardRef)(function (e, t) {
        const { tooltip: n, ...i } = e;
        return o.createElement(r.ToolWidgetIconButton, {
          "aria-label": n,
          ...i,
          tag: "button",
          ref: t,
          "data-tooltip": n,
          "data-tooltip-show-on-focus": "true",
        });
      });
    },
    975598: (e, t, n) => {
      "use strict";
      n.d(t, { AccessibleMenuButton: () => a });
      var o = n(50959),
        r = n(718736),
        i = n(679458),
        s = n(994567);
      const a = (0, o.forwardRef)(function (e, t) {
        const { tooltip: n, tag: a, buttonRef: l, reference: c, ...u } = e,
          d = (0, r.useFunctionalRefObject)(c ?? null);
        return o.createElement(i.ToolWidgetMenu, {
          "aria-label": n,
          ...u,
          ref: t,
          tag: a ?? "button",
          reference: l ?? d,
          "data-tooltip": n,
          onMenuKeyDown: s.handleAccessibleMenuKeyDown,
          onMenuFocus: (e) => (0, s.handleAccessibleMenuFocus)(e, l ?? d),
        });
      });
    },
    46305: (e, t, n) => {
      "use strict";
      n.d(t, { AccessibleMenuItem: () => u });
      var o = n(50959),
        r = n(497754),
        i = n.n(r),
        s = n(930202),
        a = n(865266),
        l = n(192063),
        c = n(526448);
      function u(e) {
        const { className: t, ...n } = e,
          [r, u] = (0, a.useRovingTabindexElement)(null);
        return o.createElement(l.PopupMenuItem, {
          ...n,
          className: i()(c.accessible, e.isActive && c.active, t),
          reference: r,
          tabIndex: u,
          onKeyDown: function (e) {
            if (e.target !== e.currentTarget) return;
            const t = (0, s.hashFromEvent)(e);
            (13 !== t && 32 !== t) ||
              (e.preventDefault(),
              r.current instanceof HTMLElement && r.current.click());
          },
          "data-role": "menuitem",
          "aria-disabled": e.isDisabled || void 0,
          toolboxRole: "toolbar",
        });
      }
    },
    162458: (e, t, n) => {
      "use strict";
      n.d(t, {
        HorizontalAttachEdge: () => r,
        HorizontalDropDirection: () => s,
        VerticalAttachEdge: () => o,
        VerticalDropDirection: () => i,
        getPopupPositioner: () => c,
      });
      var o,
        r,
        i,
        s,
        a = n(650151);
      !(function (e) {
        (e[(e.Top = 0)] = "Top"),
          (e[(e.Bottom = 1)] = "Bottom"),
          (e[(e.AutoStrict = 2)] = "AutoStrict");
      })(o || (o = {})),
        (function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(r || (r = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = "FromTopToBottom"),
            (e[(e.FromBottomToTop = 1)] = "FromBottomToTop");
        })(i || (i = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = "FromLeftToRight"),
            (e[(e.FromRightToLeft = 1)] = "FromRightToLeft");
        })(s || (s = {}));
      const l = {
        verticalAttachEdge: o.Bottom,
        horizontalAttachEdge: r.Left,
        verticalDropDirection: i.FromTopToBottom,
        horizontalDropDirection: s.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
        matchButtonAndListboxWidths: !1,
      };
      function c(e, t) {
        return (n) => {
          const { contentWidth: c, contentHeight: u, availableHeight: d } = n,
            h = (0, a.ensureNotNull)(e).getBoundingClientRect(),
            {
              horizontalAttachEdge: m = l.horizontalAttachEdge,
              horizontalDropDirection: p = l.horizontalDropDirection,
              horizontalMargin: v = l.horizontalMargin,
              verticalMargin: f = l.verticalMargin,
              matchButtonAndListboxWidths: g = l.matchButtonAndListboxWidths,
            } = t;
          let b = t.verticalAttachEdge ?? l.verticalAttachEdge,
            w = t.verticalDropDirection ?? l.verticalDropDirection;
          b === o.AutoStrict &&
            (d < h.y + h.height + f + u
              ? ((b = o.Top), (w = i.FromBottomToTop))
              : ((b = o.Bottom), (w = i.FromTopToBottom)));
          const E = b === o.Top ? -1 * f : f,
            x = m === r.Right ? h.right : h.left,
            k = b === o.Top ? h.top : h.bottom,
            _ = {
              x: x - (p === s.FromRightToLeft ? c : 0) + v,
              y: k - (w === i.FromBottomToTop ? u : 0) + E,
            };
          return g && (_.overrideWidth = h.width), _;
        };
      }
    },
    155352: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => a,
        ToolWidgetButton: () => l,
      });
      var o = n(50959),
        r = n(497754),
        i = n(878112),
        s = n(438576);
      const a = s,
        l = o.forwardRef((e, t) => {
          const {
              tag: n = "div",
              icon: a,
              endIcon: l,
              isActive: c,
              isOpened: u,
              isDisabled: d,
              isGrouped: h,
              isHovered: m,
              isClicked: p,
              onClick: v,
              text: f,
              textBeforeIcon: g,
              title: b,
              theme: w = s,
              className: E,
              forceInteractive: x,
              inactive: k,
              "data-name": _,
              "data-tooltip": y,
              ...M
            } = e,
            T = r(E, w.button, (b || y) && "apply-common-tooltip", {
              [w.isActive]: c,
              [w.isOpened]: u,
              [w.isInteractive]: (x || Boolean(v)) && !d && !k,
              [w.isDisabled]: Boolean(d || k),
              [w.isGrouped]: h,
              [w.hover]: m,
              [w.clicked]: p,
            }),
            C =
              a &&
              ("string" == typeof a
                ? o.createElement(i.Icon, { className: w.icon, icon: a })
                : o.cloneElement(a, {
                    className: r(w.icon, a.props.className),
                  }));
          return "button" === n
            ? o.createElement(
                "button",
                {
                  ...M,
                  ref: t,
                  type: "button",
                  className: r(T, w.accessible),
                  disabled: d && !k,
                  onClick: v,
                  title: b,
                  "data-name": _,
                  "data-tooltip": y,
                },
                g &&
                  f &&
                  o.createElement(
                    "div",
                    { className: r("js-button-text", w.text) },
                    f
                  ),
                C,
                !g &&
                  f &&
                  o.createElement(
                    "div",
                    { className: r("js-button-text", w.text) },
                    f
                  )
              )
            : o.createElement(
                "div",
                {
                  ...M,
                  ref: t,
                  "data-role": "button",
                  className: T,
                  onClick: d ? void 0 : v,
                  title: b,
                  "data-name": _,
                  "data-tooltip": y,
                },
                g &&
                  f &&
                  o.createElement(
                    "div",
                    { className: r("js-button-text", w.text) },
                    f
                  ),
                C,
                !g &&
                  f &&
                  o.createElement(
                    "div",
                    { className: r("js-button-text", w.text) },
                    f
                  ),
                l && o.createElement(i.Icon, { icon: l, className: s.endIcon })
              );
        });
    },
    511349: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetIconButton: () => a });
      var o = n(50959),
        r = n(497754),
        i = n(155352),
        s = n(697373);
      const a = o.forwardRef(function (e, t) {
        const { className: n, id: a, ...l } = e;
        return o.createElement(i.ToolWidgetButton, {
          id: a,
          "data-name": a,
          ...l,
          ref: t,
          className: r(n, s.button),
        });
      });
    },
    679458: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_TOOL_WIDGET_MENU_THEME: () => g,
        ToolWidgetMenu: () => w,
      });
      var o = n(50959),
        r = n(497754),
        i = n.n(r),
        s = n(930202),
        a = n(624216),
        l = n(515783),
        c = n(800417),
        u = n(163694),
        d = n(759339),
        h = n(162458),
        m = n(930052),
        p = n(440891),
        v = n(111706),
        f = n(295389);
      const g = f;
      var b;
      !(function (e) {
        (e[(e.Vertical = 2)] = "Vertical"),
          (e[(e.Horizontal = 0)] = "Horizontal");
      })(b || (b = {}));
      class w extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._wrapperRef = null),
            (this._controller = o.createRef()),
            (this._onPopupCloseOnClick = (e) => {
              "keyboard" === e.detail.clickType && this.focus();
            }),
            (this._handleMenuFocus = (e) => {
              e.relatedTarget === this._wrapperRef &&
                this.setState((e) => ({ ...e, isOpenedByButton: !0 })),
                this.props.onMenuFocus?.(e);
            }),
            (this._handleWrapperRef = (e) => {
              (this._wrapperRef = e),
                this.props.reference && this.props.reference(e);
            }),
            (this._handleOpen = () => {
              "div" !== this.props.tag &&
                (this.setState((e) => ({ ...e, isOpenedByButton: !1 })),
                this.props.menuReference?.current?.addEventListener(
                  "popup-menu-close-event",
                  this._onPopupCloseOnClick
                ),
                this._controller.current?.focus());
            }),
            (this._handleClick = (e) => {
              (p.enabled("skip_event_target_check") ||
                e.target instanceof Node) &&
                e.currentTarget.contains(e.target) &&
                (this._handleToggleDropdown(void 0, (0, v.isKeyboardClick)(e)),
                this.props.onClick &&
                  this.props.onClick(e, !this.state.isOpened));
            }),
            (this._handleToggleDropdown = (e, t = !1) => {
              const { onClose: n, onOpen: o } = this.props,
                { isOpened: r } = this.state,
                i = "boolean" == typeof e ? e : !r;
              this.setState({ isOpened: i, shouldReturnFocus: !!i && t }),
                i && o && o(),
                !i && n && n();
            }),
            (this._handleClose = () => {
              this.close();
            }),
            (this._handleKeyDown = (e) => {
              const { orientation: t = "horizontal" } = this.props;
              if (e.defaultPrevented) return;
              if (!(e.target instanceof Node)) return;
              const n = (0, s.hashFromEvent)(e);
              if (e.currentTarget.contains(e.target))
                switch (n) {
                  case 40:
                    if ("div" === this.props.tag || "horizontal" !== t) return;
                    if (this.state.isOpened) return;
                    e.preventDefault(), this._handleToggleDropdown(!0, !0);
                    break;
                  case 27:
                    if (!this.state.isOpened || !this.props.closeOnEsc) return;
                    e.preventDefault(),
                      e.stopPropagation(),
                      this._handleToggleDropdown(!1);
                }
              else {
                if ("div" === this.props.tag) return;
                switch (n) {
                  case 27: {
                    e.preventDefault();
                    const { shouldReturnFocus: t, isOpenedByButton: n } =
                      this.state;
                    this._handleToggleDropdown(!1),
                      t && n && this._wrapperRef?.focus();
                    break;
                  }
                }
              }
            }),
            (this.state = {
              isOpened: !1,
              shouldReturnFocus: !1,
              isOpenedByButton: !1,
            });
        }
        render() {
          const {
              tag: e = "div",
              id: t,
              arrow: n,
              content: r,
              isDisabled: s,
              isDrawer: a,
              isShowTooltip: u,
              title: d,
              className: h,
              hotKey: p,
              theme: v,
              drawerBreakpoint: f,
              tabIndex: g,
              isClicked: b,
            } = this.props,
            { isOpened: w } = this.state,
            x = i()(h, v.button, {
              "apply-common-tooltip": u || !s,
              [v.isDisabled]: s,
              [v.isOpened]: w,
              [v.clicked]: b,
            }),
            k = E(r) ? r({ isOpened: w }) : r;
          return "button" === e
            ? o.createElement(
                "button",
                {
                  type: "button",
                  id: t,
                  className: i()(x, v.accessible),
                  disabled: s,
                  onClick: this._handleClick,
                  title: d,
                  "data-tooltip-hotkey": p,
                  ref: this._handleWrapperRef,
                  onKeyDown: this._handleKeyDown,
                  tabIndex: g,
                  ...(0, c.filterDataProps)(this.props),
                  ...(0, c.filterAriaProps)(this.props),
                },
                k,
                n &&
                  o.createElement(
                    "div",
                    { className: v.arrow },
                    o.createElement(
                      "div",
                      { className: v.arrowWrap },
                      o.createElement(l.ToolWidgetCaret, { dropped: w })
                    )
                  ),
                this.state.isOpened &&
                  (f
                    ? o.createElement(m.MatchMedia, { rule: f }, (e) =>
                        this._renderContent(e)
                      )
                    : this._renderContent(a))
              )
            : o.createElement(
                "div",
                {
                  id: t,
                  className: x,
                  onClick: s ? void 0 : this._handleClick,
                  title: d,
                  "data-tooltip-hotkey": p,
                  ref: this._handleWrapperRef,
                  "data-role": "button",
                  tabIndex: g,
                  onKeyDown: this._handleKeyDown,
                  "aria-haspopup": this.props["aria-haspopup"],
                  ...(0, c.filterDataProps)(this.props),
                },
                k,
                n &&
                  o.createElement(
                    "div",
                    { className: v.arrow },
                    o.createElement(
                      "div",
                      { className: v.arrowWrap },
                      o.createElement(l.ToolWidgetCaret, { dropped: w })
                    )
                  ),
                this.state.isOpened &&
                  (f
                    ? o.createElement(m.MatchMedia, { rule: f }, (e) =>
                        this._renderContent(e)
                      )
                    : this._renderContent(a))
              );
        }
        close() {
          this.props.menuReference?.current?.removeEventListener(
            "popup-menu-close-event",
            this._onPopupCloseOnClick
          ),
            this._handleToggleDropdown(!1);
        }
        focus() {
          this._wrapperRef?.focus();
        }
        update() {
          null !== this._controller.current &&
            this._controller.current.update();
        }
        _renderContent(e) {
          const {
              menuDataName: t,
              minWidth: n,
              menuClassName: r,
              menuRole: i,
              maxHeight: s,
              drawerPosition: l = "Bottom",
              children: c,
              noMomentumBasedScroll: m,
            } = this.props,
            { isOpened: p } = this.state,
            v = {
              horizontalMargin: this.props.horizontalMargin || 0,
              verticalMargin: this.props.verticalMargin || 2,
              verticalAttachEdge: this.props.verticalAttachEdge,
              horizontalAttachEdge: this.props.horizontalAttachEdge,
              verticalDropDirection: this.props.verticalDropDirection,
              horizontalDropDirection: this.props.horizontalDropDirection,
              matchButtonAndListboxWidths:
                this.props.matchButtonAndListboxWidths,
            },
            f = Boolean(p && e && l),
            g = E(c) ? c({ isDrawer: f }) : c;
          return f
            ? o.createElement(
                u.DrawerManager,
                null,
                o.createElement(
                  d.Drawer,
                  {
                    reference: this.props.drawerReference,
                    onClose: this._handleClose,
                    position: l,
                    "data-name": t,
                  },
                  g
                )
              )
            : o.createElement(
                a.PopupMenu,
                {
                  reference: this.props.menuReference,
                  role: i,
                  controller: this._controller,
                  closeOnClickOutside: this.props.closeOnClickOutside,
                  doNotCloseOn: this,
                  isOpened: p,
                  minWidth: n,
                  onClose: this._handleClose,
                  position: (0, h.getPopupPositioner)(this._wrapperRef, v),
                  className: r,
                  maxHeight: s,
                  "data-name": t,
                  tabIndex: "div" !== this.props.tag ? -1 : void 0,
                  onOpen: this._handleOpen,
                  onKeyDown: this.props.onMenuKeyDown,
                  onFocus: this._handleMenuFocus,
                  noMomentumBasedScroll: m,
                },
                g
              );
        }
      }
      function E(e) {
        return "function" == typeof e;
      }
      w.defaultProps = { arrow: !0, closeOnClickOutside: !0, theme: f };
    },
    939157: (e, t, n) => {
      "use strict";
      n.d(t, { ToolbarIconButton: () => s });
      var o = n(50959),
        r = n(865266),
        i = n(565631);
      const s = (0, o.forwardRef)(function (e, t) {
        const [n, s] = (0, r.useRovingTabindexElement)(t);
        return o.createElement(i.AccessibleIconButton, {
          ...e,
          ref: n,
          tabIndex: s,
        });
      });
    },
    843833: (e, t, n) => {
      "use strict";
      n.d(t, { ToolbarMenuButton: () => l });
      var o = n(50959),
        r = n(718736),
        i = n(865266),
        s = n(74336),
        a = n(975598);
      const l = (0, o.forwardRef)(function (e, t) {
        const { tooltip: n, menuReference: l = null, ...c } = e,
          [u, d] = (0, i.useRovingTabindexElement)(null),
          h = (0, r.useFunctionalRefObject)(l);
        return o.createElement(a.AccessibleMenuButton, {
          "aria-label": n,
          "aria-haspopup": "menu",
          ...s.MouseClickAutoBlurHandler.attributes(),
          ...c,
          ref: t,
          tag: "button",
          buttonRef: u,
          tabIndex: d,
          menuReference: h,
          tooltip: n,
        });
      });
    },
    602069: (e, t, n) => {
      "use strict";
      n.d(t, { Toolbar: () => d });
      var o = n(50959),
        r = n(650151),
        i = n(269842),
        s = n(930202),
        a = n(442092),
        l = n(333086),
        c = n(718736),
        u = n(74336);
      const d = (0, o.forwardRef)(function (e, t) {
        const {
            onKeyDown: n,
            orientation: d,
            blurOnEscKeydown: h = !0,
            blurOnClick: m = !0,
            ...p
          } = e,
          v = (0, c.useFunctionalRefObject)(t);
        return (
          (0, o.useLayoutEffect)(() => {
            const e = (0, r.ensureNotNull)(v.current),
              t = () => {
                const t = (0, a.queryTabbableElements)(e).sort(
                  a.navigationOrderComparator
                );
                if (0 === t.length) {
                  const [t] = (0, a.queryFocusableElements)(e).sort(
                    a.navigationOrderComparator
                  );
                  if (void 0 === t) return;
                  (0, l.becomeMainElement)(t);
                }
                if (t.length > 1) {
                  const [, ...e] = t;
                  for (const t of e) (0, l.becomeSecondaryElement)(t);
                }
              };
            return (
              window.addEventListener("keyboard-navigation-activation", t),
              () =>
                window.removeEventListener("keyboard-navigation-activation", t)
            );
          }, []),
          o.createElement("div", {
            ...u.MouseClickAutoBlurHandler.attributes(m),
            ...p,
            role: "toolbar",
            "aria-orientation": d,
            ref: v,
            onKeyDown: (0, i.createSafeMulticastEventHandler)(function (e) {
              if (e.defaultPrevented) return;
              if (!(document.activeElement instanceof HTMLElement)) return;
              const t = (0, s.hashFromEvent)(e);
              if (h && 27 === t)
                return e.preventDefault(), void document.activeElement.blur();
              if ("vertical" !== d && 37 !== t && 39 !== t) return;
              if ("vertical" === d && 38 !== t && 40 !== t) return;
              const n = e.currentTarget,
                o = (0, a.queryFocusableElements)(n).sort(
                  a.navigationOrderComparator
                );
              if (0 === o.length) return;
              const r = o.indexOf(document.activeElement);
              if (-1 === r) return;
              e.preventDefault();
              const i = () => {
                  const e = (r + o.length - 1) % o.length;
                  (0, l.becomeSecondaryElement)(o[r]),
                    (0, l.becomeMainElement)(o[e]),
                    o[e].focus();
                },
                c = () => {
                  const e = (r + o.length + 1) % o.length;
                  (0, l.becomeSecondaryElement)(o[r]),
                    (0, l.becomeMainElement)(o[e]),
                    o[e].focus();
                };
              switch ((0, a.mapKeyCodeToDirection)(t)) {
                case "inlinePrev":
                  "vertical" !== d && i();
                  break;
                case "inlineNext":
                  "vertical" !== d && c();
                  break;
                case "blockPrev":
                  "vertical" === d && i();
                  break;
                case "blockNext":
                  "vertical" === d && c();
              }
            }, n),
            "data-tooltip-show-on-focus": "true",
          })
        );
      });
    },
    14517: (e, t, n) => {
      "use strict";
      n.d(t, { FooterToolbarTab: () => l });
      var o = n(50959),
        r = n(497754),
        i = n.n(r),
        s = n(865266),
        a = n(497876);
      function l(e) {
        const { tooltip: t, children: n, className: r, ...l } = e,
          [c, u] = (0, s.useRovingTabindexElement)(null);
        return o.createElement(
          "button",
          {
            "aria-label": t,
            ...l,
            ref: c,
            tabIndex: u,
            type: "button",
            "data-tooltip": t,
            className: i()(a.tab, a.accessible, r),
          },
          n
        );
      }
    },
    281239: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { FooterWidgetRenderer: () => F });
      var o = n(50959),
        r = n(632227),
        i = n(497754),
        s = n(843833),
        a = n(46305),
        l = n(878112),
        c = n(650151),
        u = n(32133),
        d = n(14517),
        h = n(112595);
      class m extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._ref = (e) => {
              const { name: t, reference: n } = this.props;
              n && n(t, e);
            }),
            (this._onToggle = () => {
              this._toggleWidget();
            }),
            (this._activationCallback = () => {
              this._toggleWidget(!0);
            });
        }
        render() {
          const {
              name: e,
              isActive: t,
              title: n,
              customTitleComponent: r,
              buttonOpenTooltip: s,
              buttonCloseTooltip: a,
              dataName: l,
              className: c,
            } = this.props,
            u = t ? a : s,
            m = r;
          return o.createElement(
            "div",
            {
              className: i(h.tab, m && h.customTab, t && h.active, c),
              ref: this._ref,
            },
            m
              ? o.createElement(m, {
                  onClick: this._onToggle,
                  activationCallback: this._activationCallback,
                  isActive: t,
                  dataName: l,
                  tooltip: u,
                })
              : o.createElement(
                  d.FooterToolbarTab,
                  {
                    onClick: this._onToggle,
                    className: i(h.title, u && "apply-common-tooltip"),
                    "data-name": this.props.dataName,
                    "data-active": t,
                    "aria-pressed": t,
                    tooltip: u,
                  },
                  o.createElement("span", { className: h.titleText }, n || e)
                )
          );
        }
        _toggleWidget(e) {
          const { name: t, onToggle: n, _gaEvent: o } = this.props;
          o && (0, u.trackEvent)("Platform widgets", o), n(t, e);
        }
      }
      var p = n(844996);
      class v extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._fakeTabs = {}),
            (this._fakeMenuButton = null),
            (this._resizeObserver = null),
            (this._refFakeTabs = (e, t) => {
              (this._fakeTabs[e] = t), t && this._resizeObserver?.observe(t);
            }),
            (this._handleMeasure = () => {
              this._resize(this.props.width);
            }),
            (this._refFakeMenuButton = (e) => {
              this._fakeMenuButton = e;
            }),
            (this._resize = (e) => {
              if (!e) return;
              const t = (0, c.ensureNotNull)(this._fakeMenuButton).offsetWidth,
                { activeWidgetName: n } = this.props;
              let o = [],
                r = [],
                i = 0;
              "string" == typeof n &&
                ((r = [n]),
                (i = (0, c.ensureNotNull)(this._fakeTabs[n]).offsetWidth));
              const s = this.props.widgets.map((e) => e.name),
                a = s.filter((e) => e !== n);
              let l = !1;
              a.forEach((n) => {
                if (!this._fakeTabs[n]) return;
                const a = (0, c.ensureNotNull)(this._fakeTabs[n]).offsetWidth,
                  u = s.length - r.length == 1 ? e : e - t;
                !l && i + a < u ? ((i += a), r.push(n)) : ((l = !0), o.push(n));
              }),
                0 === r.length &&
                  ((r = [s[0]]), (o = o.filter((e) => e !== s[0]))),
                (r = s.filter((e) => r.includes(e))),
                this.setState({ visibleTabs: r, hiddenTabs: o });
            }),
            (this._onToggle = (e, t) => {
              void 0 !== e &&
                (this._trackButtonClick(e),
                (0, r.flushSync)(() => this.props.setActiveWidget(e, t)),
                this._resize(this.props.width));
            }),
            (this._onMenuItemClick = (e) => {
              this._onToggle(e, !0);
            }),
            (this._handleMenuClick = () => {
              this._trackButtonClick("menu"), this._toggleMenu();
            }),
            (this._toggleMenu = () => {
              this.setState((e) => ({ isMenuOpened: !e.isMenuOpened }));
            }),
            (this._trackButtonClick = (e) => {
              0;
            }),
            (this._resizeObserver = new ResizeObserver(this._handleMeasure)),
            (this.state = {
              visibleTabs: [],
              hiddenTabs: [],
              isMenuOpened: !1,
            });
        }
        componentDidMount() {
          this._resize(this.props.width);
        }
        componentDidUpdate(e) {
          const { widgets: t, activeWidgetName: n, width: o } = this.props;
          (e.widgets === t && e.activeWidgetName === n && e.width === o) ||
            this._resize(o);
        }
        componentWillUnmount() {
          this._resizeObserver?.disconnect();
        }
        getMinWidth() {
          const e = this.props.activeWidgetName || this.props.widgets[0].name;
          return (
            (0, c.ensureNotNull)(this._fakeTabs[e]).offsetWidth +
            (0, c.ensureNotNull)(this._fakeMenuButton).offsetWidth
          );
        }
        render() {
          const { visibleTabs: e } = this.state,
            { widgets: t } = this.props,
            n = t.filter((t) => e.includes(t.name));
          return o.createElement(
            "div",
            { className: h.tabbar },
            o.createElement(
              "div",
              { className: h.tabs },
              this._renderTabs(n, !1)
            ),
            o.createElement(
              "div",
              { className: i(h.tabs, h.fakeTabs) },
              this._renderTabs(t, !0)
            )
          );
        }
        _renderTabs(e, t) {
          const { activeWidgetName: n, widgets: r } = this.props,
            { hiddenTabs: c, isMenuOpened: u } = this.state,
            d = e.map((e) =>
              o.createElement(m, {
                ...e,
                key: e.name,
                isActive: n === e.name,
                onToggle: this._onToggle,
                dataName: t ? void 0 : e.name,
                reference: t ? this._refFakeTabs : void 0,
                className: "screener" === e.name && h.screenerTab,
              })
            );
          return (
            (t || c.length > 0) &&
              d.push(
                o.createElement(
                  "div",
                  {
                    key: "menu-button",
                    className: h.menuButtonWrap,
                    ref: t ? this._refFakeMenuButton : void 0,
                  },
                  o.createElement(
                    s.ToolbarMenuButton,
                    {
                      className: i(h.menuButton, u && h.active),
                      onClick: this._handleMenuClick,
                      content: o.createElement(l.Icon, { icon: p }),
                      arrow: !1,
                    },
                    r
                      .filter((e) => c.includes(e.name))
                      .map((e) =>
                        o.createElement(a.AccessibleMenuItem, {
                          key: e.name,
                          onClick: this._onMenuItemClick,
                          onClickArg: e.name,
                          label: e.title || e.name,
                        })
                      )
                  )
                )
              ),
            d
          );
        }
      }
      var f = n(409174),
        g = n(342822);
      const b = parseInt(g["css-value-footer-widget-horizontal-margin"]);
      var w = n(609838),
        E = n(939157),
        x = n(544460),
        k = n(19182),
        _ = n(978592),
        y = n(587257),
        M = n(320004);
      const T = w.t(null, void 0, n(911505)),
        C = w.t(null, void 0, n(32310)),
        N = w.t(null, void 0, n(573376)),
        B = w.t(null, void 0, n(123695));
      class D extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._updateMode = () => {
              this.setState({ mode: this.props.mode.value() });
            }),
            (this.state = { mode: e.mode.value() });
        }
        componentDidMount() {
          this.props.mode.subscribe(this._updateMode);
        }
        componentWillUnmount() {
          this.props.mode.unsubscribe(this._updateMode);
        }
        render() {
          const { toggleMinimize: e, toggleMaximize: t } = this.props,
            { mode: n } = this.state,
            r = "minimized" === n,
            s = "maximized" === n;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(E.ToolbarIconButton, {
              className: i(M.button, M.firstButton),
              tooltip: r ? T : C,
              onClick: e,
              "data-name": "toggle-visibility-button",
              "data-active": r,
              icon: o.createElement(l.Icon, { icon: r ? k : x }),
            }),
            o.createElement(E.ToolbarIconButton, {
              className: i(M.button),
              tooltip: s ? B : N,
              onClick: t,
              "data-name": "toggle-maximize-button",
              "data-active": s,
              icon: o.createElement(l.Icon, { icon: s ? y : _ }),
            })
          );
        }
      }
      var O = n(602069);
      class A extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._buttons = null),
            (this._refButtons = (e) => {
              this._buttons = e;
            }),
            (this._handleMode = (e) => {
              this.setState({ isOpened: "minimized" !== e });
            }),
            (this._handleOverlap = (e) => {
              this.setState({ isOverlap: e });
            }),
            (this._handleActiveWidgetName = (e) => {
              const { resizerBridge: t } = this.props;
              this.setState({ activeWidgetName: e }, () =>
                this._resize(t.width.value())
              );
            }),
            (this._setActiveWidget = (e, t, n) => {
              this.props.bottomWidgetBar.toggleWidget(e, t, n);
            }),
            (this._resize = (e) => {
              e && ((e -= b + b), this.setState({ width: e }));
            });
          const { bottomWidgetBar: t, resizerBridge: n } = this.props;
          this.state = {
            isOpened: "minimized" !== t.mode().value(),
            isOverlap: t.isOverlap().value(),
            activeWidgetName: t.activeWidget().value(),
            width: n.width.value(),
          };
        }
        componentDidMount() {
          const { bottomWidgetBar: e, resizerBridge: t } = this.props;
          e.mode().subscribe(this._handleMode),
            e.isOverlap().subscribe(this._handleOverlap),
            e
              .activeWidget()
              .subscribe(this._handleActiveWidgetName, { callWithLast: !0 }),
            t.width.subscribe(this._resize),
            this._resize(t.width.value());
        }
        componentWillUnmount() {
          const { bottomWidgetBar: e, resizerBridge: t } = this.props;
          e.mode().unsubscribe(this._handleMode),
            e.isOverlap().unsubscribe(this._handleOverlap),
            e.activeWidget().unsubscribe(this._handleActiveWidgetName),
            t.width.unsubscribe(this._resize);
        }
        render() {
          const { bottomWidgetBar: e } = this.props,
            { isOverlap: t, activeWidgetName: n, width: r } = this.state,
            s = this._buttons ? this._buttons.offsetWidth : 0,
            a = e.enabledWidgets(),
            l = "minimized" !== e.mode().value() && n;
          return o.createElement(
            O.Toolbar,
            {
              id: "footer-chart-panel",
              className: i(M.footerPanel, t && M.overlap),
              onContextMenu: f.preventDefault,
            },
            o.createElement(v, {
              widgets: a,
              activeWidgetName: l,
              setActiveWidget: this._setActiveWidget,
              settingsActiveWidget: n,
              close: e.close,
              width: r - s,
            }),
            o.createElement(
              "div",
              { className: M.buttons, ref: this._refButtons },
              o.createElement(D, {
                toggleMinimize: e.toggleMinimize,
                toggleMaximize: e.toggleMaximize,
                mode: e.mode(),
              })
            )
          );
        }
      }
      class F {
        constructor(e, t, n) {
          (this._component = null),
            (this._handleRef = (e) => (this._component = e)),
            (this._container = e);
          const i = o.createElement(A, {
            resizerBridge: t,
            bottomWidgetBar: n,
            ref: this._handleRef,
          });
          r.render(i, this._container);
        }
        getComponent() {
          return (0, c.ensureNotNull)(this._component);
        }
        destroy() {
          r.unmountComponentAtNode(this._container);
        }
      }
    },
    978592: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6ZM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32Z"/></svg>';
    },
    587257: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 17H8.68A2.68 2.68 0 0 0 6 19.68V22h1v-2.32c0-.93.75-1.68 1.68-1.68h10.64c.93 0 1.68.75 1.68 1.68V22h1v-2.32C22 18.2 20.8 17 19.32 17ZM7 8.32C7 9.25 7.75 10 8.68 10h10.64c.93 0 1.68-.75 1.68-1.68V6h1v2.32C22 9.8 20.8 11 19.32 11H8.68A2.68 2.68 0 0 1 6 8.32V6h1v2.32Z"/></svg>';
    },
    100578: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    544460: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M7 20h14v1H7z"/></svg>';
    },
    19182: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none"><path stroke="currentColor" d="M1 8l8.5-6.5L18 8"/></svg>';
    },
    844996: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>';
    },
    925931: (e, t, n) => {
      "use strict";
      n.d(t, { nanoid: () => o });
      let o = (e = 21) =>
        crypto
          .getRandomValues(new Uint8Array(e))
          .reduce(
            (e, t) =>
              (e +=
                (t &= 63) < 36
                  ? t.toString(36)
                  : t < 62
                  ? (t - 26).toString(36).toUpperCase()
                  : t > 62
                  ? "-"
                  : "_"),
            ""
          );
    },
  },
]);
