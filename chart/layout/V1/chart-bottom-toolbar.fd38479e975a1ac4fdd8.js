(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7260],
  {
    259142: function (e, t) {
      var n, i, s;
      (i = [t]),
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
            var i = {
              get passive() {
                n = !0;
              },
            };
            window.addEventListener("testPassive", null, i),
              window.removeEventListener("testPassive", null, i);
          }
          var s =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            o = [],
            a = !1,
            r = -1,
            l = void 0,
            c = void 0,
            u = function (e) {
              return o.some(function (t) {
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
          (e.disableBodyScroll = function (e, i) {
            if (s) {
              if (!e)
                return void console.error(
                  "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                );
              if (
                e &&
                !o.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var h = { targetElement: e, options: i || {} };
                (o = [].concat(t(o), [h])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (r = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    var n, i, s, o;
                    1 === t.targetTouches.length &&
                      ((i = e),
                      (o = (n = t).targetTouches[0].clientY - r),
                      !u(n.target) &&
                        ((i && 0 === i.scrollTop && 0 < o) ||
                        ((s = i) &&
                          s.scrollHeight - s.scrollTop <= s.clientHeight &&
                          o < 0)
                          ? d(n)
                          : n.stopPropagation()));
                  }),
                  a ||
                    (document.addEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (a = !0));
              }
            } else {
              (p = i),
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
              var m = { targetElement: e, options: i || {} };
              o = [].concat(t(o), [m]);
            }
            var p;
          }),
            (e.clearAllBodyScrollLocks = function () {
              s
                ? (o.forEach(function (e) {
                    (e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null);
                  }),
                  a &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (a = !1)),
                  (o = []),
                  (r = -1))
                : (h(), (o = []));
            }),
            (e.enableBodyScroll = function (e) {
              if (s) {
                if (!e)
                  return void console.error(
                    "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                  );
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (o = o.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  a &&
                    0 === o.length &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (a = !1));
              } else
                1 === o.length && o[0].targetElement === e
                  ? (h(), (o = []))
                  : (o = o.filter(function (t) {
                      return t.targetElement !== e;
                    }));
            });
        }),
        void 0 === (s = "function" == typeof n ? n.apply(t, i) : n) ||
          (e.exports = s);
    },
    497754: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var i = {}.hasOwnProperty;
        function s() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var o = typeof n;
              if ("string" === o || "number" === o) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var a = s.apply(null, n);
                a && e.push(a);
              } else if ("object" === o)
                for (var r in n) i.call(n, r) && n[r] && e.push(r);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((s.default = s), (e.exports = s))
          : void 0 ===
              (n = function () {
                return s;
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
    504665: (e) => {
      e.exports = {
        loader: "loader-UL6iwcBa",
        static: "static-UL6iwcBa",
        item: "item-UL6iwcBa",
        "tv-button-loader": "tv-button-loader-UL6iwcBa",
        medium: "medium-UL6iwcBa",
        small: "small-UL6iwcBa",
        black: "black-UL6iwcBa",
        white: "white-UL6iwcBa",
        gray: "gray-UL6iwcBa",
        primary: "primary-UL6iwcBa",
      };
    },
    55679: (e) => {
      e.exports = {
        wrapper: "wrapper-TJ9ObuLF",
        animated: "animated-TJ9ObuLF",
        pulsation: "pulsation-TJ9ObuLF",
      };
    },
    331668: (e) => {
      e.exports = {
        item: "item-GJX1EXhk",
        interactive: "interactive-GJX1EXhk",
        hovered: "hovered-GJX1EXhk",
        disabled: "disabled-GJX1EXhk",
        active: "active-GJX1EXhk",
        shortcut: "shortcut-GJX1EXhk",
        normal: "normal-GJX1EXhk",
        big: "big-GJX1EXhk",
        iconCell: "iconCell-GJX1EXhk",
        icon: "icon-GJX1EXhk",
        content: "content-GJX1EXhk",
        label: "label-GJX1EXhk",
        checked: "checked-GJX1EXhk",
        toolbox: "toolbox-GJX1EXhk",
        showToolboxOnHover: "showToolboxOnHover-GJX1EXhk",
        arrowIcon: "arrowIcon-GJX1EXhk",
        subMenu: "subMenu-GJX1EXhk",
        invisibleHotkey: "invisibleHotkey-GJX1EXhk",
      };
    },
    670159: (e) => {
      e.exports = {
        item: "item-WJDah4zD",
        emptyIcons: "emptyIcons-WJDah4zD",
        loading: "loading-WJDah4zD",
        disabled: "disabled-WJDah4zD",
        interactive: "interactive-WJDah4zD",
        hovered: "hovered-WJDah4zD",
        normal: "normal-WJDah4zD",
        big: "big-WJDah4zD",
        icon: "icon-WJDah4zD",
        label: "label-WJDah4zD",
        title: "title-WJDah4zD",
        nested: "nested-WJDah4zD",
        shortcut: "shortcut-WJDah4zD",
        remove: "remove-WJDah4zD",
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
    536204: (e) => {
      e.exports = { separator: "separator-Pf4rIzEt" };
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
    700238: (e) => {
      e.exports = {
        separator: "separator-QjUlCDId",
        small: "small-QjUlCDId",
        normal: "normal-QjUlCDId",
        large: "large-QjUlCDId",
      };
    },
    772808: (e) => {
      e.exports = {
        tabs: "tabs-NGf0gcnH",
        tab: "tab-NGf0gcnH",
        noBorder: "noBorder-NGf0gcnH",
        disabled: "disabled-NGf0gcnH",
        active: "active-NGf0gcnH",
        defaultCursor: "defaultCursor-NGf0gcnH",
        slider: "slider-NGf0gcnH",
        content: "content-NGf0gcnH",
      };
    },
    149128: (e) => {
      e.exports = { icon: "icon-WB2y0EnP", dropped: "dropped-WB2y0EnP" };
    },
    185934: (e, t, n) => {
      "use strict";
      n.d(t, { getStyleClasses: () => r, isCircleLogoWithUrlProps: () => l });
      var i = n(497754),
        s = n(92318),
        o = n(456057),
        a = n.n(o);
      function r(e, t = 2, n) {
        return i(
          a().logo,
          a()[e],
          n,
          0 === t || 1 === t
            ? i(s.skeletonTheme.wrapper, a().skeleton)
            : a().letter,
          1 === t && s.skeletonTheme.animated
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
      n.d(t, { useFunctionalRefObject: () => o });
      var i = n(50959),
        s = n(855393);
      function o(e) {
        const t = (0, i.useMemo)(
            () =>
              (function (e) {
                const t = (n) => {
                  e(n), (t.current = n);
                };
                return (t.current = null), t;
              })((e) => {
                r.current(e);
              }),
            []
          ),
          n = (0, i.useRef)(null),
          o = (t) => {
            if (null === t) return a(n.current, t), void (n.current = null);
            n.current !== e && ((n.current = e), a(n.current, t));
          },
          r = (0, i.useRef)(o);
        return (
          (r.current = o),
          (0, s.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current)
              return r.current(t.current), () => r.current(null);
          }, [e]),
          t
        );
      }
      function a(e, t) {
        null !== e && ("function" == typeof e ? e(t) : (e.current = t));
      }
    },
    855393: (e, t, n) => {
      "use strict";
      n.d(t, { useIsomorphicLayoutEffect: () => s });
      var i = n(50959);
      function s(e, t) {
        ("undefined" == typeof window ? i.useEffect : i.useLayoutEffect)(e, t);
      }
    },
    778199: (e, t, n) => {
      "use strict";
      function i(e, t, n, i, s) {
        function o(s) {
          if (e > s.timeStamp) return;
          const o = s.target;
          void 0 !== n &&
            null !== t &&
            null !== o &&
            o.ownerDocument === i &&
            (t.contains(o) || n(s));
        }
        return (
          s.click && i.addEventListener("click", o, !1),
          s.mouseDown && i.addEventListener("mousedown", o, !1),
          s.touchEnd && i.addEventListener("touchend", o, !1),
          s.touchStart && i.addEventListener("touchstart", o, !1),
          () => {
            i.removeEventListener("click", o, !1),
              i.removeEventListener("mousedown", o, !1),
              i.removeEventListener("touchend", o, !1),
              i.removeEventListener("touchstart", o, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => i });
    },
    183787: (e, t, n) => {
      "use strict";
      n.d(t, { Icon: () => s });
      var i = n(50959);
      const s = i.forwardRef((e, t) => {
        const {
            icon: n = "",
            title: s,
            ariaLabel: o,
            ariaLabelledby: a,
            ariaHidden: r,
            ...l
          } = e,
          c = !!(s || o || a);
        return i.createElement("span", {
          role: "img",
          ...l,
          ref: t,
          "aria-label": o,
          "aria-labelledby": a,
          "aria-hidden": r || !c,
          title: s,
          dangerouslySetInnerHTML: { __html: n },
        });
      });
    },
    878112: (e, t, n) => {
      "use strict";
      n.d(t, { Icon: () => i.Icon });
      var i = n(183787);
    },
    234404: (e, t, n) => {
      "use strict";
      n.d(t, { Loader: () => l });
      var i,
        s = n(50959),
        o = n(497754),
        a = n(504665),
        r = n.n(a);
      function l(e) {
        const {
            className: t,
            size: n = "medium",
            staticPosition: i,
            color: a = "black",
          } = e,
          l = o(r().item, r()[a], r()[n]);
        return s.createElement(
          "span",
          { className: o(r().loader, i && r().static, t) },
          s.createElement("span", { className: l }),
          s.createElement("span", { className: l }),
          s.createElement("span", { className: l })
        );
      }
      !(function (e) {
        (e.Medium = "medium"), (e.Small = "small");
      })(i || (i = {}));
    },
    92318: (e, t, n) => {
      "use strict";
      n.d(t, { skeletonTheme: () => s });
      var i = n(55679);
      const s = i;
    },
    800417: (e, t, n) => {
      "use strict";
      function i(e) {
        return o(e, a);
      }
      function s(e) {
        return o(e, r);
      }
      function o(e, t) {
        const n = Object.entries(e).filter(t),
          i = {};
        for (const [e, t] of n) i[e] = t;
        return i;
      }
      function a(e) {
        const [t, n] = e;
        return 0 === t.indexOf("data-") && "string" == typeof n;
      }
      function r(e) {
        return 0 === e[0].indexOf("aria-");
      }
      n.d(t, {
        filterAriaProps: () => s,
        filterDataProps: () => i,
        filterProps: () => o,
        isAriaAttribute: () => r,
        isDataAttribute: () => a,
      });
    },
    269842: (e, t, n) => {
      "use strict";
      function i(...e) {
        return (t) => {
          for (const n of e) void 0 !== n && n(t);
        };
      }
      n.d(t, { createSafeMulticastEventHandler: () => i });
    },
    670086: (e, t, n) => {
      "use strict";
      n.d(t, { FragmentMap: () => s });
      var i = n(50959);
      function s(e) {
        if (e.map) {
          return i.Children.toArray(e.children).map(e.map);
        }
        return e.children;
      }
    },
    865266: (e, t, n) => {
      "use strict";
      n.d(t, { useRovingTabindexElement: () => o });
      var i = n(50959),
        s = n(718736);
      function o(e, t = []) {
        const [n, o] = (0, i.useState)(!1),
          a = (0, s.useFunctionalRefObject)(e);
        return (
          (0, i.useLayoutEffect)(() => {
            const e = a.current;
            if (null === e) return;
            const t = (e) => {
              switch (e.type) {
                case "roving-tabindex:main-element":
                  o(!0);
                  break;
                case "roving-tabindex:secondary-element":
                  o(!1);
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
          [a, n ? 0 : -1]
        );
      }
    },
    361701: (e, t, n) => {
      "use strict";
      n.d(t, { CircleLogo: () => r, hiddenCircleLogoClass: () => a });
      var i = n(50959),
        s = n(185934),
        o = n(456057);
      const a = n.n(o)().hidden;
      function r(e) {
        const t = (0, s.isCircleLogoWithUrlProps)(e),
          [n, o] = (0, i.useState)(0),
          a = (0, i.useRef)(null),
          r = (0, s.getStyleClasses)(e.size, n, e.className),
          l = e.alt ?? e.title ?? "",
          c = t ? l[0] : e.placeholderLetter;
        return (
          (0, i.useEffect)(() => o(a.current?.complete ?? !t ? 2 : 1), [t]),
          t && 3 !== n
            ? i.createElement("img", {
                ref: a,
                className: r,
                crossOrigin: "",
                src: e.logoUrl,
                alt: l,
                title: e.title,
                loading: e.loading,
                onLoad: () => o(2),
                onError: () => o(3),
                "aria-label": e["aria-label"],
                "aria-hidden": e["aria-hidden"],
              })
            : i.createElement(
                "span",
                {
                  className: r,
                  title: e.title,
                  "aria-label": e["aria-label"],
                  "aria-hidden": e["aria-hidden"],
                },
                c
              )
        );
      }
    },
    68620: (e, t, n) => {
      "use strict";
      n.d(t, { Hint: () => r });
      var i = n(50959),
        s = n(497754),
        o = n.n(s),
        a = n(331668);
      function r(e) {
        const { text: t = "", className: n } = e;
        return i.createElement("span", { className: o()(a.shortcut, n) }, t);
      }
    },
    729624: (e, t, n) => {
      "use strict";
      n.d(t, { ContextMenuItem: () => p });
      var i = n(50959),
        s = n(497754),
        o = n.n(s),
        a = n(878112),
        r = n(234404),
        l = n(134064),
        c = n(68620),
        u = n(339750),
        d = n(379978),
        h = n(460925),
        m = n(670159);
      function p(e) {
        const {
            className: t,
            isTitle: n,
            isLoading: s,
            isHovered: p,
            active: g,
            checkable: v,
            disabled: b,
            checked: f,
            icon: _,
            iconChecked: y,
            hint: C,
            subItems: x,
            label: E,
            styledLabel: w,
            onClick: S,
            children: M,
            toolbox: k,
            jsxLabel: T,
            size: B = "normal",
          } = e,
          R = (0, i.useContext)(l.EmptyIconsContext),
          D = !!x.length;
        return s
          ? i.createElement(
              "li",
              { className: o()(t, m.item, m.loading, m[B]) },
              i.createElement(r.Loader, null)
            )
          : i.createElement(
              "li",
              {
                className: o()(
                  t,
                  m.item,
                  m.interactive,
                  n && m.title,
                  b && m.disabled,
                  p && m.hovered,
                  g && m.active,
                  R && m.emptyIcons,
                  m[B]
                ),
                onClick: S,
              },
              i.createElement(a.Icon, {
                className: o()(m.icon),
                icon: (function () {
                  if (v && f) return y || _ || u;
                  return _;
                })(),
              }),
              i.createElement(
                "span",
                { className: o()(m.label) },
                !T && w
                  ? w.map(({ text: e, ...t }, n) =>
                      i.createElement("span", { key: n, style: t }, e)
                    )
                  : T ?? E
              ),
              !!k &&
                i.createElement(a.Icon, {
                  onClick: function () {
                    k && k.action();
                  },
                  className: m.remove,
                  icon: h,
                }),
              !D &&
                C &&
                i.createElement(c.Hint, { className: m.shortcut, text: C }),
              D && i.createElement(a.Icon, { className: m.nested, icon: d }),
              M
            );
      }
    },
    134064: (e, t, n) => {
      "use strict";
      n.d(t, { EmptyIconsContext: () => i });
      const i = n(50959).createContext(!1);
    },
    163694: (e, t, n) => {
      "use strict";
      n.d(t, { DrawerContext: () => a, DrawerManager: () => o });
      var i = n(50959),
        s = n(285089);
      class o extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._isBodyFixed = !1),
            (this._addDrawer = (e) => {
              this.setState((t) => ({ stack: [...t.stack, e] }));
            }),
            (this._removeDrawer = (e) => {
              this.setState((t) => ({ stack: t.stack.filter((t) => t !== e) }));
            }),
            (this.state = { stack: [] });
        }
        componentDidUpdate(e, t) {
          !t.stack.length &&
            this.state.stack.length &&
            ((0, s.setFixedBodyState)(!0), (this._isBodyFixed = !0)),
            t.stack.length &&
              !this.state.stack.length &&
              this._isBodyFixed &&
              ((0, s.setFixedBodyState)(!1), (this._isBodyFixed = !1));
        }
        componentWillUnmount() {
          this.state.stack.length &&
            this._isBodyFixed &&
            (0, s.setFixedBodyState)(!1);
        }
        render() {
          return i.createElement(
            a.Provider,
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
      const a = i.createContext(null);
    },
    759339: (e, t, n) => {
      "use strict";
      n.d(t, { Drawer: () => m });
      var i = n(50959),
        s = n(650151),
        o = n(497754),
        a = n(924910),
        r = n(8361),
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
            theme: g = d,
          } = e,
          v = (0, s.ensureNotNull)((0, i.useContext)(l.DrawerContext)),
          [b] = (0, i.useState)(() => (0, a.randomHash)()),
          f = (0, i.useRef)(null),
          _ = (0, i.useContext)(c.CloseDelegateContext);
        return (
          (0, i.useLayoutEffect)(
            () => (
              (0, s.ensureNotNull)(f.current).focus({ preventScroll: !0 }),
              _.subscribe(v, n),
              v.addDrawer(b),
              () => {
                v.removeDrawer(b), _.unsubscribe(v, n);
              }
            ),
            []
          ),
          i.createElement(
            r.Portal,
            null,
            i.createElement(
              "div",
              { ref: h, className: o(d.wrap, d[`position${t}`]) },
              b === v.currentDrawer &&
                i.createElement("div", { className: d.backdrop, onClick: n }),
              i.createElement(
                p,
                {
                  className: o(g.drawer, d[`position${t}`], m),
                  ref: f,
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
      const p = (0, i.forwardRef)((e, t) => {
        const { className: n, ...s } = e;
        return i.createElement(u.TouchScrollContainer, {
          className: o(d.drawer, n),
          tabIndex: -1,
          ref: t,
          ...s,
        });
      });
    },
    494707: (e, t, n) => {
      "use strict";
      n.d(t, { Separator: () => a });
      var i = n(50959),
        s = n(497754),
        o = n(536204);
      function a(e) {
        return i.createElement("div", {
          className: s(o.separator, e.className),
        });
      }
    },
    192063: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => u,
        PopupMenuItem: () => h,
      });
      var i = n(50959),
        s = n(497754),
        o = n(32133),
        a = n(370981),
        r = n(361701),
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
            toolboxClassName: g,
            shortcut: v,
            forceShowShortcuts: b,
            icon: f,
            iconClassname: _,
            isActive: y,
            isDisabled: C,
            isHovered: x,
            appearAsDisabled: E,
            label: w,
            link: S,
            showToolboxOnHover: M,
            showToolboxOnFocus: k,
            target: T,
            rel: B,
            toolbox: R,
            toolboxRole: D,
            reference: N,
            onMouseOut: A,
            onMouseOver: W,
            onKeyDown: P,
            suppressToolboxClick: L = !0,
            theme: F = c,
            tabIndex: O,
            tagName: z,
            renderComponent: I,
            roundedIcon: H,
            iconAriaProps: U,
            circleLogo: j,
            dontClosePopup: V,
            onClick: X,
            onClickArg: G,
            trackEventObject: Q,
            trackMouseWheelClick: J,
            trackRightClick: q,
            ...K
          } = e,
          $ = (0, i.useRef)(null),
          Z = (0, i.useMemo)(
            () =>
              (function (e) {
                function t(t) {
                  const { reference: n, ...s } = t,
                    o = e ?? (s.href ? "a" : "div"),
                    a =
                      "a" === o
                        ? s
                        : (function (e) {
                            const {
                              download: t,
                              href: n,
                              hrefLang: i,
                              media: s,
                              ping: o,
                              rel: a,
                              target: r,
                              type: l,
                              referrerPolicy: c,
                              ...u
                            } = e;
                            return u;
                          })(s);
                  return i.createElement(o, { ...a, ref: n });
                }
                return (t.displayName = `DefaultComponent(${e})`), t;
              })(z),
            [z]
          ),
          Y = I ?? Z;
        return i.createElement(
          Y,
          {
            ...K,
            id: t,
            role: n,
            className: s(u, F.item, f && F.withIcon, {
              [F.isActive]: y,
              [F.isDisabled]: C || E,
              [F.hovered]: x,
            }),
            title: h,
            href: S,
            target: T,
            rel: B,
            reference: function (e) {
              ($.current = e), "function" == typeof N && N(e);
              "object" == typeof N && (N.current = e);
            },
            onClick: function (e) {
              if (C) return;
              Q && (0, o.trackEvent)(Q.category, Q.event, Q.label);
              X && X(G, e);
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
                (0, a.globalCloseMenu)());
            },
            onContextMenu: function (e) {
              Q &&
                q &&
                (0, o.trackEvent)(Q.category, Q.event, `${Q.label}_rightClick`);
            },
            onMouseUp: function (e) {
              if (1 === e.button && S && Q) {
                let e = Q.label;
                J && (e += "_mouseWheelClick"),
                  (0, o.trackEvent)(Q.category, Q.event, e);
              }
            },
            onMouseOver: W,
            onMouseOut: A,
            onKeyDown: P,
            tabIndex: O,
          },
          j &&
            i.createElement(r.CircleLogo, {
              ...U,
              className: c["disclosure-item-circle-logo"],
              size: "xxxsmall",
              logoUrl: j.logoUrl,
              placeholderLetter:
                "placeholderLetter" in j ? j.placeholderLetter : void 0,
            }),
          f &&
            i.createElement("span", {
              "aria-label": U && U["aria-label"],
              "aria-hidden": U && Boolean(U["aria-hidden"]),
              className: s(F.icon, H && c["round-icon"], _),
              dangerouslySetInnerHTML: { __html: f },
            }),
          i.createElement(
            "span",
            { className: s(F.labelRow, m) },
            i.createElement("span", { className: s(F.label, p) }, w)
          ),
          (void 0 !== v || b) &&
            i.createElement(
              "span",
              { className: F.shortcut },
              (ee = v) && ee.split("+").join(" + ")
            ),
          void 0 !== R &&
            i.createElement(
              "span",
              {
                role: D,
                onClick: L ? d : void 0,
                className: s(g, F.toolbox, {
                  [F.showOnHover]: M,
                  [F.showOnFocus]: k,
                }),
              },
              R
            )
        );
        var ee;
      }
    },
    917850: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenuSeparator: () => l });
      var i,
        s = n(50959),
        o = n(497754),
        a = n.n(o),
        r = n(700238);
      function l(e) {
        const { size: t = "normal", className: n, ariaHidden: i = !1 } = e;
        return s.createElement("div", {
          className: a()(
            r.separator,
            "small" === t && r.small,
            "normal" === t && r.normal,
            "large" === t && r.large,
            n
          ),
          role: "separator",
          "aria-hidden": i,
        });
      }
      !(function (e) {
        (e.Small = "small"), (e.Large = "large"), (e.Normal = "normal");
      })(i || (i = {}));
    },
    624216: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenu: () => h });
      var i = n(50959),
        s = n(632227),
        o = n(688987),
        a = n(8361),
        r = n(510618),
        l = n(28466);
      const c = i.createContext(void 0);
      var u = n(908783);
      const d = i.createContext({ setMenuMaxWidth: !1 });
      function h(e) {
        const {
            controller: t,
            children: n,
            isOpened: h,
            closeOnClickOutside: m = !0,
            doNotCloseOn: p,
            onClickOutside: g,
            onClose: v,
            onKeyboardClose: b,
            "data-name": f = "popup-menu-container",
            ..._
          } = e,
          y = (0, i.useContext)(l.CloseDelegateContext),
          C = i.useContext(d),
          x = (0, i.useContext)(c),
          E = (0, u.useOutsideEvent)({
            handler: function (e) {
              g && g(e);
              if (!m) return;
              const t = (0, o.default)(p) ? p() : null == p ? [] : [p];
              if (t.length > 0 && e.target instanceof Node)
                for (const n of t) {
                  const t = s.findDOMNode(n);
                  if (t instanceof Node && t.contains(e.target)) return;
                }
              v();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return h
          ? i.createElement(
              a.Portal,
              {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                pointerEvents: "none",
              },
              i.createElement(
                "span",
                { ref: E, style: { pointerEvents: "auto" } },
                i.createElement(
                  r.Menu,
                  {
                    ..._,
                    onClose: v,
                    onKeyboardClose: b,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: y,
                    customRemeasureDelegate: x,
                    ref: t,
                    "data-name": f,
                    limitMaxWidth: C.setMenuMaxWidth,
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
      var i = n(50959),
        s = n(497754),
        o = n(878112),
        a = n(149128),
        r = n(100578);
      function l(e) {
        const { dropped: t, className: n } = e;
        return i.createElement(o.Icon, {
          className: s(n, a.icon, { [a.dropped]: t }),
          icon: r,
        });
      }
    },
    742554: (e, t, n) => {
      "use strict";
      n.d(t, { TouchScrollContainer: () => c });
      var i = n(50959),
        s = n(259142),
        o = n(650151),
        a = n(601227);
      const r = CSS.supports("overscroll-behavior", "none");
      let l = 0;
      const c = (0, i.forwardRef)((e, t) => {
        const { children: n, ...o } = e,
          c = (0, i.useRef)(null);
        return (
          (0, i.useImperativeHandle)(t, () => c.current),
          (0, i.useLayoutEffect)(() => {
            if (a.CheckMobile.iOS())
              return (
                l++,
                null !== c.current &&
                  (r
                    ? 1 === l &&
                      (document.body.style.overscrollBehavior = "none")
                    : (0, s.disableBodyScroll)(c.current, {
                        allowTouchMove: u(c),
                      })),
                () => {
                  l--,
                    null !== c.current &&
                      (r
                        ? 0 === l &&
                          (document.body.style.overscrollBehavior = "")
                        : (0, s.enableBodyScroll)(c.current));
                }
              );
          }, []),
          i.createElement("div", { ref: c, ...o }, n)
        );
      });
      function u(e) {
        return (t) => {
          const n = (0, o.ensureNotNull)(e.current),
            i = document.activeElement;
          return (
            !n.contains(t) || (null !== i && n.contains(i) && i.contains(t))
          );
        };
      }
    },
    493173: (e, t, n) => {
      "use strict";
      function i(e, t, n = {}) {
        return Object.assign(
          {},
          e,
          (function (e, t, n = {}) {
            const i = Object.assign({}, t);
            for (const s of Object.keys(t)) {
              const o = n[s] || s;
              o in e && (i[s] = [e[o], t[s]].join(" "));
            }
            return i;
          })(e, t, n)
        );
      }
      n.d(t, { mergeThemes: () => i });
    },
    906132: (e, t, n) => {
      "use strict";
      var i = n(522134);
      function s() {}
      function o() {}
      (o.resetWarningCache = s),
        (e.exports = function () {
          function e(e, t, n, s, o, a) {
            if (a !== i) {
              var r = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((r.name = "Invariant Violation"), r);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: s,
          };
          return (n.PropTypes = n), n;
        });
    },
    719036: (e, t, n) => {
      e.exports = n(906132)();
    },
    522134: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
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
    155973: (e) => {
      e.exports = { title: "title-u3QJgF_p" };
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
    343119: (e) => {
      e.exports = {
        toolbar: "toolbar-BXXUwft2",
        dateRangeWrapper: "dateRangeWrapper-BXXUwft2",
        noranges: "noranges-BXXUwft2",
        dateRangeExpanded: "dateRangeExpanded-BXXUwft2",
        separator: "separator-BXXUwft2",
        seriesControlWrapper: "seriesControlWrapper-BXXUwft2",
        dateRangeCollapsed: "dateRangeCollapsed-BXXUwft2",
        item: "item-BXXUwft2",
        inline: "inline-BXXUwft2",
        dateRange: "dateRange-BXXUwft2",
        hidden: "hidden-BXXUwft2",
        collapsed: "collapsed-BXXUwft2",
      };
    },
    269873: (e) => {
      e.exports = { button: "button-Hfju7pW_" };
    },
    174153: (e) => {
      e.exports = { button: "button-uToIfRbZ" };
    },
    483580: (e) => {
      e.exports = { separator: "separator-yDfG9Ccu" };
    },
    428580: (e) => {
      e.exports = { headerMenuText: "headerMenuText-AcJrLng7" };
    },
    47825: (e) => {
      e.exports = {
        button: "button-x1dCOTP3",
        disabled: "disabled-x1dCOTP3",
        hover: "hover-x1dCOTP3",
        clicked: "clicked-x1dCOTP3",
        accessible: "accessible-x1dCOTP3",
      };
    },
    340337: (e) => {
      e.exports = { item: "item-SqYYy1zF" };
    },
    935546: (e) => {
      e.exports = { slider: "slider-3kCW6DWs", inner: "inner-3kCW6DWs" };
    },
    338680: (e) => {
      e.exports = { sliderRow: "sliderRow-k2h4OAz8" };
    },
    994567: (e, t, n) => {
      "use strict";
      n.d(t, {
        focusFirstMenuItem: () => u,
        handleAccessibleMenuFocus: () => l,
        handleAccessibleMenuKeyDown: () => c,
        queryMenuElements: () => m,
      });
      var i = n(442092),
        s = n(333086),
        o = n(180185),
        a = n(32556);
      const r = [37, 39, 38, 40];
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
        const t = (0, o.hashFromEvent)(e);
        if (!r.includes(t)) return;
        const n = document.activeElement;
        if (!(document.activeElement instanceof HTMLElement)) return;
        const a = m(e.currentTarget).sort(i.navigationOrderComparator);
        if (0 === a.length) return;
        const l =
          document.activeElement.closest('[data-role="menuitem"]') ||
          document.activeElement.parentElement?.querySelector(
            '[data-role="menuitem"]'
          );
        if (!(l instanceof HTMLElement)) return;
        const c = a.indexOf(l);
        if (-1 === c) return;
        const u = p(l),
          g = u.indexOf(document.activeElement),
          v = -1 !== g,
          b = (e) => {
            n && (0, s.becomeSecondaryElement)(n),
              (0, s.becomeMainElement)(e),
              e.focus();
          };
        switch ((0, i.mapKeyCodeToDirection)(t)) {
          case "inlinePrev":
            if (!u.length) return;
            e.preventDefault(),
              b(0 === g ? a[c] : v ? d(u, g, -1) : u[u.length - 1]);
            break;
          case "inlineNext":
            if (!u.length) return;
            e.preventDefault(),
              g === u.length - 1 ? b(a[c]) : b(v ? d(u, g, 1) : u[0]);
            break;
          case "blockPrev": {
            e.preventDefault();
            const t = d(a, c, -1);
            if (v) {
              const e = h(t, g);
              b(e || t);
              break;
            }
            b(t);
            break;
          }
          case "blockNext": {
            e.preventDefault();
            const t = d(a, c, 1);
            if (v) {
              const e = h(t, g);
              b(e || t);
              break;
            }
            b(t);
          }
        }
      }
      function u(e) {
        const [t] = m(e);
        t && ((0, s.becomeMainElement)(t), t.focus());
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
        ).filter((0, a.createScopedVisibleElementFilter)(e));
      }
      function p(e) {
        return Array.from(
          e.querySelectorAll("[tabindex]:not([disabled]):not([aria-disabled])")
        ).filter((0, a.createScopedVisibleElementFilter)(e));
      }
    },
    333086: (e, t, n) => {
      "use strict";
      var i;
      function s(e) {
        e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
      }
      function o(e) {
        e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
      }
      n.d(t, { becomeMainElement: () => s, becomeSecondaryElement: () => o }),
        (function (e) {
          (e.MainElement = "roving-tabindex:main-element"),
            (e.SecondaryElement = "roving-tabindex:secondary-element");
        })(i || (i = {}));
    },
    565631: (e, t, n) => {
      "use strict";
      n.d(t, { AccessibleIconButton: () => o });
      var i = n(50959),
        s = n(511349);
      const o = (0, i.forwardRef)(function (e, t) {
        const { tooltip: n, ...o } = e;
        return i.createElement(s.ToolWidgetIconButton, {
          "aria-label": n,
          ...o,
          tag: "button",
          ref: t,
          "data-tooltip": n,
          "data-tooltip-show-on-focus": "true",
        });
      });
    },
    975598: (e, t, n) => {
      "use strict";
      n.d(t, { AccessibleMenuButton: () => r });
      var i = n(50959),
        s = n(718736),
        o = n(679458),
        a = n(994567);
      const r = (0, i.forwardRef)(function (e, t) {
        const { tooltip: n, tag: r, buttonRef: l, reference: c, ...u } = e,
          d = (0, s.useFunctionalRefObject)(c ?? null);
        return i.createElement(o.ToolWidgetMenu, {
          "aria-label": n,
          ...u,
          ref: t,
          tag: r ?? "button",
          reference: l ?? d,
          "data-tooltip": n,
          onMenuKeyDown: a.handleAccessibleMenuKeyDown,
          onMenuFocus: (e) => (0, a.handleAccessibleMenuFocus)(e, l ?? d),
        });
      });
    },
    46305: (e, t, n) => {
      "use strict";
      n.d(t, { AccessibleMenuItem: () => u });
      var i = n(50959),
        s = n(497754),
        o = n.n(s),
        a = n(930202),
        r = n(865266),
        l = n(192063),
        c = n(526448);
      function u(e) {
        const { className: t, ...n } = e,
          [s, u] = (0, r.useRovingTabindexElement)(null);
        return i.createElement(l.PopupMenuItem, {
          ...n,
          className: o()(c.accessible, e.isActive && c.active, t),
          reference: s,
          tabIndex: u,
          onKeyDown: function (e) {
            if (e.target !== e.currentTarget) return;
            const t = (0, a.hashFromEvent)(e);
            (13 !== t && 32 !== t) ||
              (e.preventDefault(),
              s.current instanceof HTMLElement && s.current.click());
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
        HorizontalAttachEdge: () => s,
        HorizontalDropDirection: () => a,
        VerticalAttachEdge: () => i,
        VerticalDropDirection: () => o,
        getPopupPositioner: () => c,
      });
      var i,
        s,
        o,
        a,
        r = n(650151);
      !(function (e) {
        (e[(e.Top = 0)] = "Top"),
          (e[(e.Bottom = 1)] = "Bottom"),
          (e[(e.AutoStrict = 2)] = "AutoStrict");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(s || (s = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = "FromTopToBottom"),
            (e[(e.FromBottomToTop = 1)] = "FromBottomToTop");
        })(o || (o = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = "FromLeftToRight"),
            (e[(e.FromRightToLeft = 1)] = "FromRightToLeft");
        })(a || (a = {}));
      const l = {
        verticalAttachEdge: i.Bottom,
        horizontalAttachEdge: s.Left,
        verticalDropDirection: o.FromTopToBottom,
        horizontalDropDirection: a.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
        matchButtonAndListboxWidths: !1,
      };
      function c(e, t) {
        return (n) => {
          const { contentWidth: c, contentHeight: u, availableHeight: d } = n,
            h = (0, r.ensureNotNull)(e).getBoundingClientRect(),
            {
              horizontalAttachEdge: m = l.horizontalAttachEdge,
              horizontalDropDirection: p = l.horizontalDropDirection,
              horizontalMargin: g = l.horizontalMargin,
              verticalMargin: v = l.verticalMargin,
              matchButtonAndListboxWidths: b = l.matchButtonAndListboxWidths,
            } = t;
          let f = t.verticalAttachEdge ?? l.verticalAttachEdge,
            _ = t.verticalDropDirection ?? l.verticalDropDirection;
          f === i.AutoStrict &&
            (d < h.y + h.height + v + u
              ? ((f = i.Top), (_ = o.FromBottomToTop))
              : ((f = i.Bottom), (_ = o.FromTopToBottom)));
          const y = f === i.Top ? -1 * v : v,
            C = m === s.Right ? h.right : h.left,
            x = f === i.Top ? h.top : h.bottom,
            E = {
              x: C - (p === a.FromRightToLeft ? c : 0) + g,
              y: x - (_ === o.FromBottomToTop ? u : 0) + y,
            };
          return b && (E.overrideWidth = h.width), E;
        };
      }
    },
    155352: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => r,
        ToolWidgetButton: () => l,
      });
      var i = n(50959),
        s = n(497754),
        o = n(878112),
        a = n(438576);
      const r = a,
        l = i.forwardRef((e, t) => {
          const {
              tag: n = "div",
              icon: r,
              endIcon: l,
              isActive: c,
              isOpened: u,
              isDisabled: d,
              isGrouped: h,
              isHovered: m,
              isClicked: p,
              onClick: g,
              text: v,
              textBeforeIcon: b,
              title: f,
              theme: _ = a,
              className: y,
              forceInteractive: C,
              inactive: x,
              "data-name": E,
              "data-tooltip": w,
              ...S
            } = e,
            M = s(y, _.button, (f || w) && "apply-common-tooltip", {
              [_.isActive]: c,
              [_.isOpened]: u,
              [_.isInteractive]: (C || Boolean(g)) && !d && !x,
              [_.isDisabled]: Boolean(d || x),
              [_.isGrouped]: h,
              [_.hover]: m,
              [_.clicked]: p,
            }),
            k =
              r &&
              ("string" == typeof r
                ? i.createElement(o.Icon, { className: _.icon, icon: r })
                : i.cloneElement(r, {
                    className: s(_.icon, r.props.className),
                  }));
          return "button" === n
            ? i.createElement(
                "button",
                {
                  ...S,
                  ref: t,
                  type: "button",
                  className: s(M, _.accessible),
                  disabled: d && !x,
                  onClick: g,
                  title: f,
                  "data-name": E,
                  "data-tooltip": w,
                },
                b &&
                  v &&
                  i.createElement(
                    "div",
                    { className: s("js-button-text", _.text) },
                    v
                  ),
                k,
                !b &&
                  v &&
                  i.createElement(
                    "div",
                    { className: s("js-button-text", _.text) },
                    v
                  )
              )
            : i.createElement(
                "div",
                {
                  ...S,
                  ref: t,
                  "data-role": "button",
                  className: M,
                  onClick: d ? void 0 : g,
                  title: f,
                  "data-name": E,
                  "data-tooltip": w,
                },
                b &&
                  v &&
                  i.createElement(
                    "div",
                    { className: s("js-button-text", _.text) },
                    v
                  ),
                k,
                !b &&
                  v &&
                  i.createElement(
                    "div",
                    { className: s("js-button-text", _.text) },
                    v
                  ),
                l && i.createElement(o.Icon, { icon: l, className: a.endIcon })
              );
        });
    },
    511349: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetIconButton: () => r });
      var i = n(50959),
        s = n(497754),
        o = n(155352),
        a = n(697373);
      const r = i.forwardRef(function (e, t) {
        const { className: n, id: r, ...l } = e;
        return i.createElement(o.ToolWidgetButton, {
          id: r,
          "data-name": r,
          ...l,
          ref: t,
          className: s(n, a.button),
        });
      });
    },
    722426: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetMenuSummary: () => a });
      var i = n(50959),
        s = n(497754),
        o = n(155973);
      function a(e) {
        return i.createElement(
          "div",
          { className: s(e.className, o.title) },
          e.children
        );
      }
    },
    679458: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_TOOL_WIDGET_MENU_THEME: () => b,
        ToolWidgetMenu: () => _,
      });
      var i = n(50959),
        s = n(497754),
        o = n.n(s),
        a = n(930202),
        r = n(624216),
        l = n(515783),
        c = n(800417),
        u = n(163694),
        d = n(759339),
        h = n(162458),
        m = n(930052),
        p = n(440891),
        g = n(111706),
        v = n(295389);
      const b = v;
      var f;
      !(function (e) {
        (e[(e.Vertical = 2)] = "Vertical"),
          (e[(e.Horizontal = 0)] = "Horizontal");
      })(f || (f = {}));
      class _ extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._wrapperRef = null),
            (this._controller = i.createRef()),
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
                (this._handleToggleDropdown(void 0, (0, g.isKeyboardClick)(e)),
                this.props.onClick &&
                  this.props.onClick(e, !this.state.isOpened));
            }),
            (this._handleToggleDropdown = (e, t = !1) => {
              const { onClose: n, onOpen: i } = this.props,
                { isOpened: s } = this.state,
                o = "boolean" == typeof e ? e : !s;
              this.setState({ isOpened: o, shouldReturnFocus: !!o && t }),
                o && i && i(),
                !o && n && n();
            }),
            (this._handleClose = () => {
              this.close();
            }),
            (this._handleKeyDown = (e) => {
              const { orientation: t = "horizontal" } = this.props;
              if (e.defaultPrevented) return;
              if (!(e.target instanceof Node)) return;
              const n = (0, a.hashFromEvent)(e);
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
              content: s,
              isDisabled: a,
              isDrawer: r,
              isShowTooltip: u,
              title: d,
              className: h,
              hotKey: p,
              theme: g,
              drawerBreakpoint: v,
              tabIndex: b,
              isClicked: f,
            } = this.props,
            { isOpened: _ } = this.state,
            C = o()(h, g.button, {
              "apply-common-tooltip": u || !a,
              [g.isDisabled]: a,
              [g.isOpened]: _,
              [g.clicked]: f,
            }),
            x = y(s) ? s({ isOpened: _ }) : s;
          return "button" === e
            ? i.createElement(
                "button",
                {
                  type: "button",
                  id: t,
                  className: o()(C, g.accessible),
                  disabled: a,
                  onClick: this._handleClick,
                  title: d,
                  "data-tooltip-hotkey": p,
                  ref: this._handleWrapperRef,
                  onKeyDown: this._handleKeyDown,
                  tabIndex: b,
                  ...(0, c.filterDataProps)(this.props),
                  ...(0, c.filterAriaProps)(this.props),
                },
                x,
                n &&
                  i.createElement(
                    "div",
                    { className: g.arrow },
                    i.createElement(
                      "div",
                      { className: g.arrowWrap },
                      i.createElement(l.ToolWidgetCaret, { dropped: _ })
                    )
                  ),
                this.state.isOpened &&
                  (v
                    ? i.createElement(m.MatchMedia, { rule: v }, (e) =>
                        this._renderContent(e)
                      )
                    : this._renderContent(r))
              )
            : i.createElement(
                "div",
                {
                  id: t,
                  className: C,
                  onClick: a ? void 0 : this._handleClick,
                  title: d,
                  "data-tooltip-hotkey": p,
                  ref: this._handleWrapperRef,
                  "data-role": "button",
                  tabIndex: b,
                  onKeyDown: this._handleKeyDown,
                  "aria-haspopup": this.props["aria-haspopup"],
                  ...(0, c.filterDataProps)(this.props),
                },
                x,
                n &&
                  i.createElement(
                    "div",
                    { className: g.arrow },
                    i.createElement(
                      "div",
                      { className: g.arrowWrap },
                      i.createElement(l.ToolWidgetCaret, { dropped: _ })
                    )
                  ),
                this.state.isOpened &&
                  (v
                    ? i.createElement(m.MatchMedia, { rule: v }, (e) =>
                        this._renderContent(e)
                      )
                    : this._renderContent(r))
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
              menuClassName: s,
              menuRole: o,
              maxHeight: a,
              drawerPosition: l = "Bottom",
              children: c,
              noMomentumBasedScroll: m,
            } = this.props,
            { isOpened: p } = this.state,
            g = {
              horizontalMargin: this.props.horizontalMargin || 0,
              verticalMargin: this.props.verticalMargin || 2,
              verticalAttachEdge: this.props.verticalAttachEdge,
              horizontalAttachEdge: this.props.horizontalAttachEdge,
              verticalDropDirection: this.props.verticalDropDirection,
              horizontalDropDirection: this.props.horizontalDropDirection,
              matchButtonAndListboxWidths:
                this.props.matchButtonAndListboxWidths,
            },
            v = Boolean(p && e && l),
            b = y(c) ? c({ isDrawer: v }) : c;
          return v
            ? i.createElement(
                u.DrawerManager,
                null,
                i.createElement(
                  d.Drawer,
                  {
                    reference: this.props.drawerReference,
                    onClose: this._handleClose,
                    position: l,
                    "data-name": t,
                  },
                  b
                )
              )
            : i.createElement(
                r.PopupMenu,
                {
                  reference: this.props.menuReference,
                  role: o,
                  controller: this._controller,
                  closeOnClickOutside: this.props.closeOnClickOutside,
                  doNotCloseOn: this,
                  isOpened: p,
                  minWidth: n,
                  onClose: this._handleClose,
                  position: (0, h.getPopupPositioner)(this._wrapperRef, g),
                  className: s,
                  maxHeight: a,
                  "data-name": t,
                  tabIndex: "div" !== this.props.tag ? -1 : void 0,
                  onOpen: this._handleOpen,
                  onKeyDown: this.props.onMenuKeyDown,
                  onFocus: this._handleMenuFocus,
                  noMomentumBasedScroll: m,
                },
                b
              );
        }
      }
      function y(e) {
        return "function" == typeof e;
      }
      _.defaultProps = { arrow: !0, closeOnClickOutside: !0, theme: v };
    },
    16609: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_TOOLBAR_BUTTON_THEME: () => a, ToolbarButton: () => r });
      var i = n(50959),
        s = n(155352),
        o = n(865266);
      const a = s.DEFAULT_TOOL_WIDGET_BUTTON_THEME,
        r = (0, i.forwardRef)(function (e, t) {
          const { tooltip: n, ...a } = e,
            [r, l] = (0, o.useRovingTabindexElement)(t);
          return i.createElement(s.ToolWidgetButton, {
            "aria-label": n,
            ...a,
            tag: "button",
            ref: r,
            tabIndex: l,
            "data-tooltip": n,
          });
        });
    },
    939157: (e, t, n) => {
      "use strict";
      n.d(t, { ToolbarIconButton: () => a });
      var i = n(50959),
        s = n(865266),
        o = n(565631);
      const a = (0, i.forwardRef)(function (e, t) {
        const [n, a] = (0, s.useRovingTabindexElement)(t);
        return i.createElement(o.AccessibleIconButton, {
          ...e,
          ref: n,
          tabIndex: a,
        });
      });
    },
    843833: (e, t, n) => {
      "use strict";
      n.d(t, { ToolbarMenuButton: () => l });
      var i = n(50959),
        s = n(718736),
        o = n(865266),
        a = n(74336),
        r = n(975598);
      const l = (0, i.forwardRef)(function (e, t) {
        const { tooltip: n, menuReference: l = null, ...c } = e,
          [u, d] = (0, o.useRovingTabindexElement)(null),
          h = (0, s.useFunctionalRefObject)(l);
        return i.createElement(r.AccessibleMenuButton, {
          "aria-label": n,
          "aria-haspopup": "menu",
          ...a.MouseClickAutoBlurHandler.attributes(),
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
      var i = n(50959),
        s = n(650151),
        o = n(269842),
        a = n(930202),
        r = n(442092),
        l = n(333086),
        c = n(718736),
        u = n(74336);
      const d = (0, i.forwardRef)(function (e, t) {
        const {
            onKeyDown: n,
            orientation: d,
            blurOnEscKeydown: h = !0,
            blurOnClick: m = !0,
            ...p
          } = e,
          g = (0, c.useFunctionalRefObject)(t);
        return (
          (0, i.useLayoutEffect)(() => {
            const e = (0, s.ensureNotNull)(g.current),
              t = () => {
                const t = (0, r.queryTabbableElements)(e).sort(
                  r.navigationOrderComparator
                );
                if (0 === t.length) {
                  const [t] = (0, r.queryFocusableElements)(e).sort(
                    r.navigationOrderComparator
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
          i.createElement("div", {
            ...u.MouseClickAutoBlurHandler.attributes(m),
            ...p,
            role: "toolbar",
            "aria-orientation": d,
            ref: g,
            onKeyDown: (0, o.createSafeMulticastEventHandler)(function (e) {
              if (e.defaultPrevented) return;
              if (!(document.activeElement instanceof HTMLElement)) return;
              const t = (0, a.hashFromEvent)(e);
              if (h && 27 === t)
                return e.preventDefault(), void document.activeElement.blur();
              if ("vertical" !== d && 37 !== t && 39 !== t) return;
              if ("vertical" === d && 38 !== t && 40 !== t) return;
              const n = e.currentTarget,
                i = (0, r.queryFocusableElements)(n).sort(
                  r.navigationOrderComparator
                );
              if (0 === i.length) return;
              const s = i.indexOf(document.activeElement);
              if (-1 === s) return;
              e.preventDefault();
              const o = () => {
                  const e = (s + i.length - 1) % i.length;
                  (0, l.becomeSecondaryElement)(i[s]),
                    (0, l.becomeMainElement)(i[e]),
                    i[e].focus();
                },
                c = () => {
                  const e = (s + i.length + 1) % i.length;
                  (0, l.becomeSecondaryElement)(i[s]),
                    (0, l.becomeMainElement)(i[e]),
                    i[e].focus();
                };
              switch ((0, r.mapKeyCodeToDirection)(t)) {
                case "inlinePrev":
                  "vertical" !== d && o();
                  break;
                case "inlineNext":
                  "vertical" !== d && c();
                  break;
                case "blockPrev":
                  "vertical" === d && o();
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
    102520: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { BottomToolbarRenderer: () => Ot });
      var i = n(50959),
        s = n(632227),
        o = n(609838),
        a = n(719036),
        r = n(497754),
        l = n.n(r),
        c = n(440891),
        u = n(843833),
        d = n(162458),
        h = n(370981),
        m = n(930052),
        p = n(46305),
        g = n(917850),
        v = n(650151),
        b = n(32133),
        f = n(244693),
        _ = n(329452),
        y = n(28964);
      const C = (e) =>
          o.t(
            null,
            { plural: "{str} minutes", count: e, replace: { str: `${e}` } },
            n(805926)
          ),
        x = (e) =>
          o.t(
            null,
            { plural: "{str} hours", count: e, replace: { str: `${e}` } },
            n(664963)
          ),
        E = (e) =>
          o.t(
            null,
            { plural: "{str} months", count: e, replace: { str: `${e}` } },
            n(520062)
          ),
        w = (e) => e,
        S = {
          [w("1")]: { resolution: "1", text: C(1) },
          [w("3")]: { resolution: "3", text: C(3) },
          [w("5")]: { resolution: "5", text: C(5) },
          [w("15")]: { resolution: "15", text: C(15) },
          [w("30")]: { resolution: "30", text: C(30) },
          [w("45")]: { resolution: "45", text: C(45) },
          [w("60")]: { resolution: "60", text: x(1) },
          [w("120")]: { resolution: "120", text: x(2) },
          [w("180")]: { resolution: "180", text: x(3) },
          [w("240")]: { resolution: "240", text: x(4) },
          [w("1D")]: {
            resolution: "1D",
            text:
              ((T = 1),
              o.t(
                null,
                { plural: "{str} days", count: T, replace: { str: `${T}` } },
                n(862368)
              )),
          },
          [w("1W")]: {
            resolution: "1W",
            text:
              ((k = 1),
              o.t(
                null,
                { plural: "{str} weeks", count: k, replace: { str: `${k}` } },
                n(149306)
              )),
          },
          [w("1M")]: { resolution: "1M", text: E(1) },
          [w("3M")]: { resolution: "3M", text: E(3) },
          [w("6M")]: { resolution: "6M", text: E(6) },
          [w("12M")]: {
            resolution: "12M",
            text:
              ((M = 1),
              o.t(
                null,
                { plural: "{str} years", count: M, replace: { str: `${M}` } },
                n(791549)
              )),
          },
        };
      var M, k, T;
      function B(e) {
        const t = (function (e) {
            const t = e.value.value,
              i = y.Interval.parse(t);
            if (!i.isValid()) {
              if ("YTD" === t)
                return o.t(null, { context: "timeframe_title" }, n(119273));
              if ("ALL" === t)
                return o.t(null, { context: "timeframe_title" }, n(858221));
              if ("LASTSESSION" === t) return N(1);
            }
            if (i.isMinutes()) {
              const e = i.multiplier();
              return e % 60 != 0 ? R(e) : D(e / 60);
            }
            if (i.isDays()) return N(i.multiplier());
            if (i.isWeeks()) return A(i.multiplier());
            if (i.isMonths()) {
              const e = i.multiplier();
              return e % 12 != 0 ? W(e) : P(e / 12);
            }
            return e.description || e.text;
          })(e),
          i = (function (e) {
            const t = e.targetResolution,
              n = y.Interval.parse(t);
            if (n.isMinutes()) {
              const e = n.multiplier();
              return e % 60 != 0 ? L(e) : F(e / 60);
            }
            if (n.isDays()) return O(n.multiplier());
            if (n.isWeeks()) return z(n.multiplier());
            if (n.isMonths()) {
              const e = n.multiplier();
              return e % 12 != 0 ? I(e) : H(e / 12);
            }
            return S[t].text;
          })(e);
        return o.t(
          null,
          {
            replace: { timePeriod: t, timeInterval: i },
            context: "timeframe_title",
          },
          n(458426)
        );
      }
      const R = (e) =>
          o.t(
            null,
            {
              plural: "{str} minutes",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(995484)
          ),
        D = (e) =>
          o.t(
            null,
            {
              plural: "{str} hours",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(772495)
          ),
        N = (e) =>
          o.t(
            null,
            {
              plural: "{str} days",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(263808)
          ),
        A = (e) =>
          o.t(
            null,
            {
              plural: "{str} weeks",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(6088)
          ),
        W = (e) =>
          o.t(
            null,
            {
              plural: "{str} months",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(712752)
          ),
        P = (e) =>
          o.t(
            null,
            {
              plural: "{str} years",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(396325)
          ),
        L = (e) =>
          o.t(
            null,
            {
              plural: "{str} minutes intervals",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(815489)
          ),
        F = (e) =>
          o.t(
            null,
            {
              plural: "{str} hours intervals",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(414887)
          ),
        O = (e) =>
          o.t(
            null,
            {
              plural: "{str} days intervals",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(300561)
          ),
        z = (e) =>
          o.t(
            null,
            {
              plural: "{str} weeks intervals",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(960316)
          ),
        I = (e) =>
          o.t(
            null,
            {
              plural: "{str} months intervals",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(548514)
          ),
        H = (e) =>
          o.t(
            null,
            {
              plural: "{str} years intervals",
              count: e,
              replace: { str: `${e}` },
              context: "timeframe_title",
            },
            n(278971)
          );
      class U {
        constructor(e) {
          (this._state = { ranges: [] }),
            (this._change = new _.Delegate()),
            (this._rangeChangedListenerBound = this._onRangeChanged.bind(this)),
            (this._updateAvailableRangesBound =
              this._updateAvailableRanges.bind(this, void 0));
          const { chartWidget: t } = (this._context = e);
          t.withModel(null, () => {
            const e = t.model(),
              n = e.mainSeries();
            n.onStatusChanged().subscribe(this, this._updateAvailableRanges),
              c.enabled("update_timeframes_set_on_symbol_resolve") &&
                n
                  .dataEvents()
                  .symbolResolved()
                  .subscribe(this, this._updateAvailableRangesBound),
              n
                .priceScale()
                .properties()
                .childs()
                .lockScale.subscribe(this, this._updateAvailableRangesBound);
            const i = e.model().appliedTimeFrame();
            i.subscribe(this._rangeChangedListenerBound),
              this._rangeChangedListenerBound(i.value()),
              this._updateAvailableRanges(!0);
          });
        }
        state() {
          return this._state;
        }
        onChange() {
          return this._change;
        }
        selectRange(e) {
          this._setState({ activeRange: e.value.value });
          const { chartWidgetCollection: t } = this._context,
            n = { val: e.value, res: e.targetResolution };
          t.setTimeFrame(n);
        }
        destroy() {
          const { chartWidget: e } = this._context;
          e.withModel(null, () => {
            const t = e.model(),
              n = t.mainSeries();
            n.onStatusChanged().unsubscribe(this, this._updateAvailableRanges),
              c.enabled("update_timeframes_set_on_symbol_resolve") &&
                n
                  .dataEvents()
                  .symbolResolved()
                  .unsubscribe(this, this._updateAvailableRangesBound),
              n
                .priceScale()
                .properties()
                .childs()
                .lockScale.unsubscribe(this, this._updateAvailableRangesBound),
              t
                .model()
                .appliedTimeFrame()
                .unsubscribe(this._rangeChangedListenerBound);
          }),
            this._change.destroy();
        }
        _setState(e) {
          (this._state = Object.assign({}, this._state, e)),
            this._change.fire(this._state);
        }
        _onRangeChanged(e) {
          let t;
          null !== e && "period-back" === e.val.type && (t = e.val.value),
            this._setState({ activeRange: t });
        }
        _updateAvailableRanges(e) {
          const { availableTimeFrames: t, chartWidget: n } = this._context;
          if (!n.hasModel()) return;
          const i = n.model().mainSeries(),
            s = i.symbolInfo(),
            o = i.status();
          if (2 === o || 1 === o || (e && !s)) return;
          const a = t(s, o).map((e) => ({
            ...e,
            description: "" === e.description ? B(e) : e.description,
          }));
          this._setState({ ranges: a });
        }
      }
      const j = (0, f.registryContextType)();
      function V(e) {
        var t;
        return (
          ((t = class extends i.PureComponent {
            constructor(e, t) {
              super(e, t),
                (this._handleUpdate = (e) => {
                  this.setState(e);
                }),
                (this._handleSelectRange = (e) => {
                  (0, b.trackEvent)(
                    "GUI",
                    "Chart Bottom Toolbar",
                    `range ${e.value}`
                  ),
                    this.props.onSelectRange?.(e),
                    this._binding.selectRange(e);
                }),
                (0, f.validateRegistry)(t, {
                  availableTimeFrames: a.any.isRequired,
                  chartWidgetCollection: a.any.isRequired,
                  chartWidget: a.any.isRequired,
                }),
                X.has(t.chartWidget) || X.set(t.chartWidget, new U(t));
              const n = (this._binding = (0, v.ensureDefined)(
                X.get(t.chartWidget)
              ));
              this.state = n.state();
            }
            componentDidMount() {
              this._binding.onChange().subscribe(this, this._handleUpdate);
            }
            componentWillUnmount() {
              this._binding.onChange().unsubscribe(this, this._handleUpdate);
            }
            render() {
              return i.createElement(e, {
                goToDateButton: this.props.goToDateButton,
                className: this.props.className,
                ranges: this.state.ranges,
                activeRange: this.state.activeRange,
                onSelectRange: this._handleSelectRange,
              });
            }
          }).contextType = j),
          t
        );
      }
      const X = new WeakMap();
      var G = n(947552),
        Q = n(729624),
        J = n(494707),
        q = n(669874),
        K = n(290752),
        $ = n(269873);
      function Z(e) {
        const { ranges: t, activeRange: n, onSelectRange: s } = e;
        return i.createElement(
          i.Fragment,
          null,
          t.map((e) =>
            i.createElement(Q.ContextMenuItem, {
              key: e.value.value,
              label: e.description || e.text,
              active: n === e.value.value,
              checked: n === e.value.value,
              checkable: !0,
              disabled: !1,
              onClick: o.bind(null, e),
              doNotCloseOnClick: !1,
              subItems: [],
            })
          )
        );
        function o(e) {
          e && s && s(e), (0, h.globalCloseMenu)();
        }
      }
      function Y(e) {
        const { onGoToDateClick: t } = e;
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(J.Separator, { className: $.separator }),
          i.createElement(Q.ContextMenuItem, {
            icon: K,
            label: (0, q.appendEllipsis)(o.t(null, void 0, n(742432))),
            onClick: t,
            active: !1,
            checked: !1,
            checkable: !1,
            disabled: !1,
            doNotCloseOnClick: !1,
            subItems: [],
          })
        );
      }
      const ee = {
          title: o.t(null, void 0, n(485444)),
          goToDate: (0, q.appendEllipsis)(o.t(null, void 0, n(742432))),
        },
        te = (0, f.registryContextType)();
      class ne extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleGoToDateClick = () => {
              const { chartWidget: e } = this.context;
              (0, G.showGoToDateDialog)(e), (0, h.globalCloseMenu)();
            }),
            (this._handleRangeSelect = (e) => {
              e && this.props.onSelectRange && this.props.onSelectRange(e),
                (0, h.globalCloseMenu)();
            }),
            (this._renderChildren = (e) => {
              const {
                ranges: t,
                activeRange: n,
                goToDateButton: s,
              } = this.props;
              return e
                ? i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(Z, {
                      ranges: t,
                      activeRange: n,
                      onSelectRange: this._handleRangeSelect,
                    }),
                    s &&
                      i.createElement(Y, {
                        onGoToDateClick: this._handleGoToDateClick,
                      })
                  )
                : i.createElement(
                    i.Fragment,
                    null,
                    t.map((e) =>
                      i.createElement(p.AccessibleMenuItem, {
                        key: e.value.value,
                        label: e.description || e.text,
                        isActive: n === e.value.value,
                        onClick: this._handleRangeSelect,
                        onClickArg: e,
                      })
                    ),
                    s &&
                      t.length > 0 &&
                      i.createElement(g.PopupMenuSeparator, null),
                    s &&
                      i.createElement(p.AccessibleMenuItem, {
                        label: ee.goToDate,
                        onClick: this._handleGoToDateClick,
                      })
                  );
            }),
            (0, f.validateRegistry)(t, { chartWidget: a.any.isRequired });
        }
        render() {
          return i.createElement(
            m.MatchMedia,
            { rule: "(max-width: 440px)" },
            (e) =>
              i.createElement(
                u.ToolbarMenuButton,
                {
                  className: l()($.button, this.props.className),
                  content: ee.title,
                  arrow: !0,
                  verticalAttachEdge: d.VerticalAttachEdge.Top,
                  verticalDropDirection:
                    d.VerticalDropDirection.FromBottomToTop,
                  horizontalMargin: 4,
                  "data-name": "date-ranges-menu",
                  isDrawer: e,
                  onClick: this._trackClick,
                },
                this._renderChildren(e)
              )
          );
        }
        _trackClick() {
          0;
        }
      }
      ne.contextType = te;
      const ie = V(ne);
      var se = n(772808);
      const oe = se;
      function ae(e) {
        return class extends i.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null });
          }
          componentDidUpdate() {
            ((0, v.ensureNotNull)(this._slider).style.transition =
              "transform 350ms"),
              this._componentDidUpdate();
          }
          componentDidMount() {
            this._componentDidUpdate();
          }
          render() {
            const { className: t } = this.props,
              n = this._generateTabs();
            return i.createElement(
              "div",
              {
                className: r(t, se.tabs),
                "data-name": this.props["data-name"],
              },
              n,
              i.createElement(e, {
                reference: (e) => {
                  this._slider = e;
                },
              })
            );
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              i.Children.map(this.props.children, (e) => {
                const t = e,
                  n = Boolean(t.props.isActive),
                  s = {
                    reference: (e) => {
                      n && (this.activeTab.current = e),
                        t.props.reference && t.props.reference(e);
                    },
                  };
                return i.cloneElement(t, s);
              })
            );
          }
          _componentDidUpdate() {
            const e = (0, v.ensureNotNull)(this._slider).style;
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                n = this.activeTab.current.offsetLeft;
              (e.transform = `translateX(${n}px)`),
                (e.width = `${t}px`),
                (e.opacity = "1");
            } else e.opacity = "0";
          }
        };
      }
      ae(function (e) {
        return i.createElement("div", {
          className: se.slider,
          ref: e.reference,
        });
      });
      var re = n(493173),
        le = n(16609),
        ce = n(340337);
      (0, re.mergeThemes)(le.DEFAULT_TOOLBAR_BUTTON_THEME, ce);
      function ue(e) {
        const {
            reference: t,
            text: n,
            tooltip: s,
            isActive: o,
            className: a,
            onClick: l,
            theme: c = ce,
            ...u
          } = e,
          d = r(a, c.item, { [c.isActive]: o });
        return i.createElement(le.ToolbarButton, {
          ...u,
          ref: t,
          text: n,
          isActive: o,
          tooltip: s,
          className: d,
          onClick: l,
        });
      }
      var de = n(935546);
      const he = (0, re.mergeThemes)(oe, de);
      var me = n(338680);
      const pe = ae(function (e) {
        return i.createElement(
          "div",
          { className: r(e.className, he.slider), ref: e.reference },
          i.createElement("div", { className: he.inner })
        );
      });
      const ge = V(function (e) {
        const { className: t, ranges: n, activeRange: s, onSelectRange: o } = e;
        return i.createElement(
          pe,
          { className: r(me.sliderRow, t), "data-name": "date-ranges-tabs" },
          n.map((e) =>
            i.createElement(ue, {
              key: e.value.value,
              value: e.value.value,
              "data-name": `date-range-tab-${e.value.value}`,
              isActive: s === e.value.value,
              onClick: o && o.bind(null, e),
              text: e.text,
              tooltip: e.description || e.text,
            })
          )
        );
      });
      var ve = n(725784),
        be = n(180185),
        fe = n(939157),
        _e = n(792574),
        ye = n(174153);
      const Ce = (0, ve.hotKeySerialize)({
          keys: [(0, be.humanReadableModifiers)(be.Modifiers.Alt, !1), "G"],
          text: "{0} + {1}",
        }),
        xe = (0, f.registryContextType)();
      class Ee extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidget: e } = this.context;
              (0, b.trackEvent)("GUI", "Chart Bottom Toolbar", "go to"),
                (0, G.showGoToDateDialog)(e);
            }),
            (0, f.validateRegistry)(t, { chartWidget: a.any.isRequired });
        }
        render() {
          const { className: e } = this.props;
          return i.createElement(fe.ToolbarIconButton, {
            icon: _e,
            onClick: this._handleClick,
            "data-tooltip-hotkey": Ce,
            tooltip: o.t(null, void 0, n(742432)),
            "data-name": "go-to-date",
            className: r(ye.button, e),
          });
        }
      }
      Ee.contextType = xe;
      const we = V(Ee);
      var Se = n(111706),
        Me = n(310355),
        ke = n(7888),
        Te = n(621327),
        Be = n(834002),
        Re = n(835006),
        De = n(814887),
        Ne = n(529596),
        Ae = n(47825);
      const We = (0, re.mergeThemes)(le.DEFAULT_TOOLBAR_BUTTON_THEME, {
        isDisabled: Ae.disabled,
        button: Ae.button,
      });
      const Pe = (0, f.registryContextType)();
      class Le extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._timeFormatter = new ke.TimeFormatter(
              (0, Re.getHourMinuteSecondFormat)(
                De.timeHoursFormatProperty.value()
              )
            )),
            (this._tickInterval = void 0),
            (this._element = null),
            (this._menuShown = !1),
            (this._preventShowingMenu = !1),
            (this._tickClock = () => {
              const { chartApiInstance: e } = this.context;
              if (void 0 !== this._timezone) {
                const t = (0, Be.utc_to_cal)(this._timezone, e.serverTime());
                this.setState({ time: this._timeFormatter.format(t) });
              }
            }),
            (this._getActions = () => {
              if (!this.props.withMenu) return [];
              const { chartWidget: e } = this.context;
              return (function (e) {
                const t = e.actions();
                return t && t.applyTimeZone instanceof Te.Action
                  ? t.applyTimeZone.getSubItems()
                  : [];
              })(e);
            }),
            (this._handleRef = (e) => {
              this._element = e;
            }),
            (this._onMouseDown = () => {
              this._preventShowingMenu = this._menuShown;
            }),
            (this._showMenu = (e) => {
              if (this._preventShowingMenu)
                return void Ne.ContextMenuManager.hideAll();
              const t = (0, v.ensureNotNull)(this._element),
                n = this._getActions();
              if (0 === n.length) return;
              const i = t.getBoundingClientRect();
              Ne.ContextMenuManager.showMenu(
                n,
                { clientX: i.left, clientY: i.top, attachToYBy: "bottom" },
                {
                  returnFocus: !0,
                  takeFocus: !0,
                  isKeyboardEvent: (0, Se.isKeyboardClick)(e),
                },
                { menuName: "TimezoneMenuContextMenu" },
                () => {
                  this._menuShown = !1;
                }
              ).then(() => {
                this._menuShown = !0;
              });
            }),
            (0, f.validateRegistry)(t, {
              chartWidget: a.any.isRequired,
              chartApiInstance: a.any.isRequired,
            }),
            (this.state = { time: "" });
        }
        componentDidMount() {
          const { chartWidget: e } = this.context;
          (this._tickInterval = setInterval(this._tickClock, 1e3)),
            e.withModel(null, () => {
              const t = e.model();
              t
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .subscribe(this, this.updateTimezonesButton),
                t
                  .model()
                  .properties()
                  .childs()
                  .timezone.subscribe(this, this.updateTimezonesButton),
                De.timeHoursFormatProperty.subscribe(
                  this,
                  this._timeHoursFormatPropertyChanged
                );
            });
        }
        componentWillUnmount() {
          const { chartWidget: e } = this.context;
          clearInterval(this._tickInterval),
            e.withModel(null, () => {
              const t = e.model();
              t
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .unsubscribe(this, this.updateTimezonesButton),
                t
                  .model()
                  .properties()
                  .childs()
                  .timezone.unsubscribe(this, this.updateTimezonesButton),
                De.timeHoursFormatProperty.unsubscribe(
                  this,
                  this._timeHoursFormatPropertyChanged
                );
            });
        }
        render() {
          const { className: e, withMenu: t } = this.props,
            { time: s } = this.state,
            a =
              void 0 !== this._timezone
                ? (0, Me.parseTzOffset)(this._timezone.name()).string
                : null;
          return i.createElement(le.ToolbarButton, {
            onMouseDown: this._onMouseDown,
            ref: this._handleRef,
            onClick: this._showMenu,
            isDisabled: !t,
            theme: We,
            "data-name": "time-zone-menu",
            tooltip: t ? o.t(null, void 0, n(877073)) : void 0,
            className: e,
            text: s && a && `${s} ${a}`,
          });
        }
        updateTimezonesButton() {
          const { chartWidget: e } = this.context;
          if (!e.hasModel()) return;
          if (null === e.model().mainSeries().symbolInfo()) return;
          const t = (0, v.ensureNotNull)(
            e.model().model().timezoneExceptExchange().value()
          );
          (this._timezone = (0, Be.get_timezone)(t)), this._tickClock();
        }
        _timeHoursFormatPropertyChanged() {
          (this._timeFormatter = new ke.TimeFormatter(
            (0, Re.getHourMinuteSecondFormat)(
              De.timeHoursFormatProperty.value()
            )
          )),
            this.updateTimezonesButton();
        }
      }
      Le.contextType = Pe;
      var Fe = n(483580);
      function Oe(e) {
        return i.createElement("span", {
          className: r(Fe.separator, e.className),
        });
      }
      var ze = n(602069),
        Ie = n(272047),
        He = n(601227);
      class Ue {
        constructor(e, t, n) {
          (this._highlighted = !1),
            (this._chartWidget = e),
            (this._priceScaleGetter = t),
            (this._owner = n),
            (this._setHighlight = this._setHighlight.bind(this)),
            (this._removeHighlight = this._removeHighlight.bind(this));
        }
        destroy() {
          this._highlighted && this._removeHighlight();
        }
        handlers() {
          const e = He.CheckMobile.any();
          return {
            onMouseEnter: e ? void 0 : this._setHighlight,
            onMouseLeave: e ? void 0 : this._removeHighlight,
          };
        }
        _setHighlight() {
          if (!this._chartWidget.hasModel()) return;
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries()),
            n = this._priceScaleGetter();
          if (null === t || null === n) return;
          const i = this._chartWidget.paneByState(t);
          if (null !== i) {
            const t = i.rightPriceAxisesContainer().findAxisWidgetForScale(n);
            let s = null;
            null !== t && (s = t.axisInfo());
            const o = i.leftPriceAxisesContainer().findAxisWidgetForScale(n);
            null !== o && (s = o.axisInfo());
            const a = i.highlightedPriceAxis();
            null !== s &&
              a.value().axis !== s &&
              (a.setValue({ owner: this._owner, axis: s }),
              e.lightUpdate(),
              (this._highlighted = !0));
          }
        }
        _removeHighlight() {
          if (!this._chartWidget.hasModel()) return;
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries());
          if (null === t) return;
          const n = this._chartWidget.paneByState(t);
          if (null !== n) {
            const t = n.highlightedPriceAxis(),
              i = t.value();
            null !== i.axis &&
              i.owner === this._owner &&
              (t.setValue({ owner: this._owner, axis: null }),
              e.lightUpdate(),
              (this._highlighted = !1));
          }
        }
      }
      const je = (0, f.registryContextType)(),
        Ve = new Ie.TranslatedString(
          "toggle log scale",
          o.t(null, void 0, n(149403))
        );
      const Xe = (0, f.registryContextType)(),
        Ge = new Ie.TranslatedString(
          "toggle auto scale",
          o.t(null, void 0, n(642240))
        );
      const Qe = (0, f.registryContextType)(),
        Je = new Ie.TranslatedString(
          "toggle percentage scale",
          o.t(null, void 0, n(398994))
        );
      const qe = (0, f.registryContextType)();
      var Ke = n(670086),
        $e = n(409174),
        Ze = n(930202),
        Ye = n(722426),
        et = n(140920),
        tt = n(428580);
      const nt = new Ie.TranslatedString(
          "change session",
          o.t(null, void 0, n(887041))
        ),
        it = {
          hint: o.t(null, void 0, n(194031)),
          headerMenuText: o.t(null, void 0, n(827665)),
        },
        st = (0, ve.hotKeySerialize)({
          keys: [
            (0, Ze.humanReadableModifiers)(Ze.Modifiers.Alt, !1),
            (0, Ze.humanReadableModifiers)(Ze.Modifiers.Shift, !1),
            "E",
          ],
          text: "{0} + {1} + {2}",
        }),
        ot = (0, f.registryContextType)();
      class at extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (0, f.validateRegistry)(t, {
              chartWidget: a.any.isRequired,
              chartApiInstance: a.any.isRequired,
            }),
            (this.state = { availableSessions: [] });
        }
        componentDidMount() {
          const { chartWidget: e } = this.context;
          e.withModel(null, () => {
            const t = e.model();
            t
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this.updateSessionButton),
              t
                .model()
                .mainSeries()
                .properties()
                .childs()
                .sessionId.subscribe(this, this.updateSessionButton),
              this.updateSessionButton();
          });
        }
        componentWillUnmount() {
          const { chartWidget: e } = this.context;
          e.withModel(null, () => {
            const t = e.model();
            t
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .unsubscribe(this, this.updateSessionButton),
              t
                .model()
                .mainSeries()
                .properties()
                .childs()
                .sessionId.unsubscribe(this, this.updateSessionButton);
          });
        }
        render() {
          const { className: e, withMenu: t } = this.props,
            { sessionName: n, sessionDescription: s } = this.state;
          return i.createElement(
            u.ToolbarMenuButton,
            {
              arrow: !1,
              isDisabled: !t,
              content: n,
              className: e,
              closeOnClickOutside: !0,
              tooltip: t ? s : void 0,
              hotKey: st,
              "data-name": "session-menu",
              verticalDropDirection: d.VerticalDropDirection.FromBottomToTop,
              verticalAttachEdge: d.VerticalAttachEdge.Top,
              onClick: this._trackClick,
            },
            this._menuItems()
          );
        }
        updateSessionButton() {
          const { chartWidget: e } = this.context;
          if (!e.model()) return;
          const t = e.model().mainSeries().symbolInfo();
          if (null === t) return;
          const n = t.subsession_id,
            i = t.subsessions?.filter((e) => !e.private) ?? [],
            s = i.find((e) => e.id === n);
          this.setState({
            sessionId: n,
            sessionName: (0, et.translateSessionShortDescription)(
              s?.description || ""
            ),
            sessionDescription: (0, et.translateSessionDescription)(
              s?.description || ""
            ),
            availableSessions: i,
          });
        }
        _menuItems() {
          if (!this.props.withMenu) return [];
          const { chartWidget: e } = this.context,
            { availableSessions: t } = this.state;
          if (!e.model()) return [];
          const n = e.model().mainSeries(),
            s = [
              i.createElement(
                Ye.ToolWidgetMenuSummary,
                { key: "header_menu_text", className: tt.headerMenuText },
                it.headerMenuText.toUpperCase()
              ),
            ];
          for (const o of t) {
            const t = { category: "SetSession", event: o.id },
              a = () => {
                e.model().setProperty(
                  n.properties().childs().sessionId,
                  o.id,
                  nt
                );
              };
            s.push(
              i.createElement(p.AccessibleMenuItem, {
                key: o.id,
                label: (0, et.translateSessionDescription)(o.description),
                isActive: this.state.sessionId === o.id,
                trackEventObject: t,
                onClick: a,
              })
            );
          }
          return s;
        }
        _trackClick() {
          0;
        }
      }
      at.contextType = ot;
      var rt = n(311804),
        lt = n(296258),
        ct = n(155352),
        ut = n(451267);
      const dt = (0, f.registryContextType)();
      class ht extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { resizerDetacher: e, chartWidgetCollection: t } =
                this.context;
              t.setViewMode(rt.CollectionViewMode.Multichart),
                e.exitFullscreen();
            }),
            (0, f.validateRegistry)(t, {
              chartWidgetCollection: a.any.isRequired,
              resizerDetacher: a.any.isRequired,
            });
        }
        render() {
          const { className: e } = this.props;
          return i.createElement(ct.ToolWidgetButton, {
            icon: ut,
            className: e,
            onClick: this._handleClick,
          });
        }
      }
      ht.contextType = dt;
      var mt,
        pt = n(821868),
        gt = n(972026),
        vt = n(343119);
      !(function (e) {
        e[(e.MinSpace = 0)] = "MinSpace";
      })(mt || (mt = {}));
      const bt = {
        extLabel: o.t(null, void 0, n(508586)),
        extHint: o.t(null, void 0, n(892966)),
        percentageHint: o.t(null, void 0, n(281649)),
        logLabel: o.t(null, { context: "scale" }, n(604161)),
        logHint: o.t(null, void 0, n(21e4)),
        autoLabel: o.t(null, { context: "scale" }, n(522233)),
        autoHint: o.t(null, void 0, n(441888)),
        maximizeChartHint: o.t(null, void 0, n(461206)),
        restoreChartHint: o.t(null, void 0, n(631142)),
        adjLabel: o.t(null, { context: "adjustments" }, n(894920)),
        adjHint: o.t(null, void 0, n(493020)),
        adjForDividendsOnlyHint: o.t(null, void 0, n(402031)),
        adjForSplitsOnlyHint: o.t(null, void 0, n(895739)),
        backAdjustLabel: o.t(null, { context: "adjustments" }, n(716755)),
        backAdjustHint: o.t(null, void 0, n(768921)),
        settlementAsCloseLabel: o.t(
          null,
          { context: "adjustments" },
          n(882631)
        ),
        settlementAsCloseHint: o.t(null, void 0, n(549545)),
      };
      var ft, _t;
      !(function (e) {
        (e.Separator = "separator"),
          (e.TimeZones = "timeZones"),
          (e.SessionId = "session"),
          (e.Percentage = "percentage"),
          (e.Logarithm = "logarithm"),
          (e.Auto = "auto"),
          (e.Fullscreen = "fullscreen"),
          (e.Adj = "adj"),
          (e.BackAdj = "backAdj"),
          (e.SettlementAsClose = "settlementAsClose"),
          (e.PreventPhoneLayout = "preventPhoneLayout");
      })(ft || (ft = {})),
        (function (e) {
          (e.Expanded = "expanded"),
            (e.Collapsed = "collapsed"),
            (e.Hidden = "hidden");
        })(_t || (_t = {}));
      const yt =
        ((Ct = (e) =>
          i.createElement(le.ToolbarButton, {
            text: bt.logLabel,
            tooltip: bt.logHint,
            className: e.className,
            isActive: e.isLogarithm,
            "aria-pressed": e.isLogarithm,
            onClick: Dt(e.onClick, "log", e.isLogarithm),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "logarithm",
          })),
        ((xt = class extends i.PureComponent {
          constructor(e, t) {
            super(e, t),
              (this._priceScale = null),
              (this._handleSelect = () => {
                const e = this.context.chartWidget.model(),
                  t = (0, v.ensureNotNull)(this.state.series),
                  n = t.priceScale(),
                  i = n.mode();
                t.priceScale().isLockScale() ||
                  e.setPriceScaleMode({ log: !i.log }, n, Ve);
              }),
              (0, f.validateRegistry)(t, { chartWidget: a.any.isRequired }),
              (this.state = { isActive: !1, series: null }),
              (this._priceAxisHighlighter = new Ue(
                this.context.chartWidget,
                () => this._priceScale,
                "logarithm"
              ));
          }
          componentDidMount() {
            const e = this.context.chartWidget;
            e.withModel(null, () => {
              const t = e.model().mainSeries(),
                n = t.priceScale();
              this._handleMainSeriesPriceScaleChanged(n),
                t
                  .priceScaleChanged()
                  .subscribe(this, this._handleMainSeriesPriceScaleChanged),
                this._handleModeChanged({}, n.mode()),
                this.setState({ isActive: t.priceScale().isLog(), series: t });
            });
          }
          componentWillUnmount() {
            const e = this.context.chartWidget;
            e.withModel(null, () => {
              e.model()
                .mainSeries()
                .priceScaleChanged()
                .unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
            }),
              null !== this._priceScale &&
                (this._priceScale.modeChanged().unsubscribeAll(this),
                (this._priceScale = null)),
              this._priceAxisHighlighter.destroy();
          }
          render() {
            const { className: e } = this.props,
              { isActive: t, series: n } = this.state;
            return i.createElement(Ct, {
              ...this._priceAxisHighlighter.handlers(),
              className: e,
              isLogarithm: t,
              isDisabled: null === n,
              onClick: this._handleSelect,
            });
          }
          _handleMainSeriesPriceScaleChanged(e) {
            null !== this._priceScale &&
              this._priceScale
                .modeChanged()
                .unsubscribe(this, this._handleModeChanged),
              (this._priceScale = e),
              this._priceScale
                .modeChanged()
                .subscribe(this, this._handleModeChanged),
              this._handleModeChanged({}, e.mode());
          }
          _handleModeChanged(e, t) {
            Boolean(t.log) !== this.state.isActive &&
              this.setState({ isActive: Boolean(t.log) });
          }
        }).contextType = je),
        xt);
      var Ct, xt;
      const Et = (function (e) {
          var t;
          return (
            ((t = class extends i.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, v.ensureNotNull)(this.state.series).priceScale(),
                      n = t.mode();
                    e.setPriceScaleMode({ autoScale: !n.autoScale }, t, Ge);
                  }),
                  (0, f.validateRegistry)(t, { chartWidget: a.any.isRequired }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new Ue(
                    this.context.chartWidget,
                    () => this._priceScale,
                    "auto"
                  ));
              }
              componentDidMount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    n = t.priceScale();
                  this._handleMainSeriesPriceScaleChanged(n),
                    t
                      .priceScaleChanged()
                      .subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleModeChanged({}, n.mode()),
                    this.setState({
                      isActive: t.priceScale().isAutoScale(),
                      series: t,
                    });
                });
              }
              componentWillUnmount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  e.model()
                    .mainSeries()
                    .priceScaleChanged()
                    .unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this),
                    (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy();
              }
              render() {
                const { className: t } = this.props,
                  { isActive: n, series: s } = this.state;
                return i.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isAuto: n,
                  isDisabled: null === s,
                  onClick: this._handleSelect,
                });
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale &&
                  this._priceScale
                    .modeChanged()
                    .unsubscribe(this, this._handleModeChanged),
                  (this._priceScale = e),
                  this._priceScale
                    .modeChanged()
                    .subscribe(this, this._handleModeChanged),
                  this._handleModeChanged({}, e.mode());
              }
              _handleModeChanged(e, t) {
                Boolean(t.autoScale) !== this.state.isActive &&
                  this.setState({ isActive: Boolean(t.autoScale) });
              }
            }).contextType = Xe),
            t
          );
        })((e) =>
          i.createElement(le.ToolbarButton, {
            text: bt.autoLabel,
            tooltip: bt.autoHint,
            className: e.className,
            isActive: e.isAuto,
            "aria-pressed": e.isAuto,
            onClick: Dt(e.onClick, "auto", e.isAuto),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "auto",
          })
        ),
        wt = (function (e) {
          var t;
          return (
            ((t = class extends i.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, v.ensureNotNull)(this.state.series),
                      n = t.priceScale(),
                      i = n.mode();
                    t.priceScale().isLockScale() ||
                      e.setPriceScaleMode({ percentage: !i.percentage }, n, Je);
                  }),
                  (0, f.validateRegistry)(t, { chartWidget: a.any.isRequired }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new Ue(
                    this.context.chartWidget,
                    () => this._priceScale,
                    "percentage"
                  ));
              }
              componentDidMount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    n = t.priceScale();
                  this._handleMainSeriesPriceScaleChanged(n),
                    t
                      .priceScaleChanged()
                      .subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleScaleChange({}, n.mode()),
                    this.setState({
                      isActive: t.priceScale().isPercentage(),
                      series: t,
                    });
                });
              }
              componentWillUnmount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  e.model()
                    .mainSeries()
                    .priceScaleChanged()
                    .unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this),
                    (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy();
              }
              render() {
                const { className: t } = this.props,
                  { isActive: n, series: s } = this.state;
                return i.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isPercentage: n,
                  isDisabled: null === s,
                  onClick: this._handleSelect,
                });
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale &&
                  this._priceScale
                    .modeChanged()
                    .unsubscribe(this, this._handleScaleChange),
                  (this._priceScale = e),
                  this._priceScale
                    .modeChanged()
                    .subscribe(this, this._handleScaleChange),
                  this._handleScaleChange({}, e.mode());
              }
              _handleScaleChange(e, t) {
                Boolean(t.percentage) !== this.state.isActive &&
                  this.setState({ isActive: Boolean(t.percentage) });
              }
            }).contextType = Qe),
            t
          );
        })((e) =>
          i.createElement(le.ToolbarButton, {
            icon: pt,
            tooltip: bt.percentageHint,
            className: e.className,
            isActive: e.isPercentage,
            "aria-pressed": e.isPercentage,
            isDisabled: e.isDisabled,
            onClick: Dt(e.onClick, "percent", e.isPercentage),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "percentage",
          })
        );
      const St = (0, ve.hotKeySerialize)({
          keys: [(0, be.humanReadableModifiers)(be.Modifiers.Alt, !1), "Enter"],
          text: "{0} + {1}",
        }),
        Mt = (function (e) {
          var t;
          return (
            ((t = class extends i.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._handleClick = (e) => {
                    const { resizerDetacher: t, chartWidgetCollection: n } =
                      this.context;
                    e.shiftKey && t.detachable.value()
                      ? t.detach()
                      : this.state.isFullscreen
                      ? t.exitFullscreen()
                      : t.requestFullscreen();
                  }),
                  (this._handleLayoutChange = (e) => {
                    this.setState({ isFullscreen: e });
                  }),
                  (this._handlePhoneSize = () => {
                    0;
                  }),
                  (0, f.validateRegistry)(t, {
                    chartWidgetCollection: a.any.isRequired,
                    resizerDetacher: a.any.isRequired,
                  });
                const { resizerDetacher: n } = t;
                this.state = {
                  isFullscreen: n.fullscreen.value(),
                  isChangeLayoutButton: this._isChangeLayoutButton(),
                };
              }
              componentDidMount() {
                const { resizerDetacher: e, chartWidgetCollection: t } =
                    this.context,
                  { mobileChangeLayoutEnabled: n } = this.props;
                e.fullscreen.subscribe(this._handleLayoutChange);
              }
              componentWillUnmount() {
                const { resizerDetacher: e, chartWidgetCollection: t } =
                    this.context,
                  { mobileChangeLayoutEnabled: n } = this.props;
                e.fullscreen.unsubscribe(this._handleLayoutChange);
              }
              render() {
                const { className: t } = this.props,
                  { isFullscreen: n, isChangeLayoutButton: s } = this.state;
                return i.createElement(e, {
                  className: t,
                  isFullscreen: n,
                  onClick: this._handleClick,
                });
              }
              _isChangeLayoutButton() {
                return !1;
              }
            }).contextType = qe),
            t
          );
        })((e) =>
          i.createElement(le.ToolbarButton, {
            icon: e.isFullscreen ? ut : gt,
            tooltip: e.isFullscreen
              ? bt.restoreChartHint
              : bt.maximizeChartHint,
            className: e.className,
            isActive: e.isFullscreen,
            onClick: Dt(e.onClick, "maximize chart", e.isFullscreen),
            "data-tooltip-hotkey": St,
            "data-name": "fullscreen",
          })
        ),
        kt = { fullscreen: !0, preventPhoneLayout: !0 },
        Tt = {
          fullscreen: Number.MIN_SAFE_INTEGER,
          preventPhoneLayout: Number.MIN_SAFE_INTEGER,
          separator: -2,
          timeZones: -1,
          auto: 0,
          logarithm: 1,
          percentage: 2,
          session: 3,
          adj: 4,
          backAdj: 5,
          settlementAsClose: 6,
        },
        Bt = (() => {
          const e = new Map();
          return (
            e.set(yt, "logarithm"),
            e.set(wt, "percentage"),
            e.set(Et, "auto"),
            e.set(at, "session"),
            e.set(Mt, "fullscreen"),
            e.set(ht, "preventPhoneLayout"),
            e
          );
        })();
      function Rt(e) {
        0;
      }
      function Dt(e, t, n) {
        return (t) => {
          e(t);
        };
      }
      const Nt = {
          dateRangeMode: "hidden",
          noRanges: !1,
          separator: !0,
          timeZones: !0,
          fullscreen: !0,
          preventPhoneLayout: !0,
          auto: !0,
          logarithm: !0,
          percentage: !0,
          session: !0,
          adj: !0,
          backAdj: !0,
          settlementAsClose: !0,
        },
        At = (0, f.registryContextType)();
      class Wt extends i.PureComponent {
        constructor(e, t) {
          var n, o;
          super(e, t),
            (this._timezoneButtonRef = null),
            (this._layout = Object.assign({}, Nt)),
            (this._raf = null),
            (this._toolbar = null),
            (this._rangeExpanded = null),
            (this._rangeCollapsed = null),
            (this._seriesComponents = {}),
            (this._resizeObserver = null),
            (this._injector =
              ((n = () => this._layout),
              (o = (e, t) => (this._seriesComponents[t] = e)),
              (e, t, s) => {
                if (i.isValidElement(e) && "string" != typeof e.type) {
                  const { props: t } = e;
                  if ("string" == typeof t.className) {
                    const s = { className: t.className },
                      a = n(),
                      l = (0, v.ensureDefined)(Bt.get(e.type));
                    return i.createElement(
                      "div",
                      {
                        key: null === e.key ? void 0 : e.key,
                        className: r(vt.inline, a[l] && vt.collapsed),
                        ref: (e) => o(e, l),
                        onClick: () => Rt(),
                      },
                      i.cloneElement(e, s)
                    );
                  }
                }
                return e;
              })),
            (this._onSymbolSourceCollectionChanged = () => {
              this._updateButtonsVisibilityImp(!0);
            }),
            (this._updateButtonsVisibility = () => {
              this._updateButtonsVisibilityImp();
            }),
            (this._updateButtonsVisibilityImp = (e) => {
              const { chartWidget: t } = this.context,
                n = t.model().model(),
                i = n.mainSeries(),
                s = i.symbolInfo(),
                o = !i.isDWMProperty().value();
              if (i.symbolResolvingActive().value())
                return void this._setStateWithResize(
                  { intervalAllowsSessionButton: o },
                  e
                );
              const a =
                (s?.subsessions || []).filter((e) => !e.private).length > 1;
              this._setStateWithResize(
                {
                  intervalAllowsSessionButton: o,
                  symbolAllowsSessionButton: a,
                },
                e
              );
            }),
            (this._resizeByRaf = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  this._resizeHandler(), (this._raf = null);
                }));
            }),
            (this._resizeHandler = () => {
              const e = this._layout,
                t = (0, v.ensureNotNull)(this._toolbar),
                n = (0, v.ensureNotNull)(this._rangeExpanded),
                i =
                  ((o = (function (e) {
                    const t = {};
                    return (
                      Object.keys(e).forEach((n) => {
                        const i = e[n];
                        if (null !== i) {
                          const e = s.findDOMNode(i);
                          null !== e && (t[n] = e);
                        }
                      }),
                      t
                    );
                  })(this._seriesComponents)),
                  Object.keys(o)
                    .map((e) => ({ name: e, width: o[e].offsetWidth }))
                    .sort((e, t) => Tt[e.name] - Tt[t.name]));
              var o;
              const a = t.offsetWidth,
                r = i.reduce((e, t) => e + t.width, 0),
                l = n.offsetWidth,
                c = !Boolean(n.textContent),
                u = a - r - l <= 0 ? "collapsed" : "expanded";
              if (
                (Object.assign(e, { dateRangeMode: u, noRanges: c }),
                "expanded" !== u)
              ) {
                const t =
                  a -
                  (0, v.ensureNotNull)(this._rangeCollapsed).offsetWidth -
                  0;
                let n = 0,
                  s = 0;
                for (const o of i)
                  (n += o.width),
                    o.name in kt
                      ? ((s += o.width), Object.assign(e, { [o.name]: !1 }))
                      : Object.assign(e, { [o.name]: t <= n });
                t <= s && Object.assign(e, { dateRangeMode: "hidden" });
              } else
                Object.assign(e, {
                  separator: !1,
                  timeZones: !1,
                  fullscreen: !1,
                  preventPhoneLayout: !1,
                  auto: !1,
                  logarithm: !1,
                  percentage: !1,
                  session: !1,
                  adj: !1,
                  settlementAsClose: !1,
                  backAdj: !1,
                });
              this._applyResizing();
            }),
            (this._handleTimezoneButtonRef = (e) => {
              this._timezoneButtonRef = e;
            }),
            (this._handleMeasure = () => {
              null !== this._toolbar && this.resizeUI();
            }),
            (this._handleFullscreenableChange = (e) => {
              this._setStateWithResize({ isFullscreenable: e }),
                this._handlePreventPhoneLayoutButtonVisibility();
            }),
            (this._handlePreventPhoneLayoutButtonVisibility = () => {
              this._setStateWithResize({
                isPreventPhoneLayoutButton: this._isPreventPhoneLayoutButton(),
              });
            }),
            (this._handleToolbarRef = (e) => (this._toolbar = e)),
            (this._handleRangeCollapsedRef = (e) => (this._rangeCollapsed = e)),
            (this._handleRangeExpandedRef = (e) => {
              this._updateResizeObserver(this._rangeExpanded, e),
                (this._rangeExpanded = e);
            }),
            (this._handleTimeZonesRef = (e) => {
              this._updateResizeObserver(this._seriesComponents.timeZones, e),
                (this._seriesComponents.timeZones = e);
            }),
            (this._handleSessionsRef = (e) => {
              this._updateResizeObserver(this._seriesComponents.session, e),
                (this._seriesComponents.session = e);
            }),
            (this._handleSeparatorRef = (e) => {
              this._seriesComponents.separator = e;
            }),
            (this._updateResizeObserver = (e, t) => {
              this._resizeObserver &&
                e !== t &&
                (e && this._resizeObserver.unobserve(e),
                t && this._resizeObserver.observe(t));
            }),
            (0, f.validateRegistry)(t, {
              onContentBoxChanged: a.any.isRequired,
              chartApiInstance: a.any.isRequired,
              chartWidget: a.any.isRequired,
              chartWidgetCollection: a.any.isRequired,
              resizerDetacher: a.any.isRequired,
            });
          const { resizerDetacher: l } = this.context;
          (this.state = {
            isFullscreenable: l.fullscreenable.value(),
            isPreventPhoneLayoutButton: this._isPreventPhoneLayoutButton(),
          }),
            (this._resizeObserver = new ResizeObserver(this._handleMeasure));
        }
        componentDidMount() {
          const {
            onContentBoxChanged: e,
            resizerDetacher: t,
            chartWidgetCollection: n,
            chartWidget: i,
          } = this.context;
          e.subscribe(this, this._resizeByRaf),
            lt.mediaState.on(
              "changeDevice",
              this._handlePreventPhoneLayoutButtonVisibility
            ),
            n.viewMode.subscribe(
              this._handlePreventPhoneLayoutButtonVisibility
            ),
            t.fullscreenable.subscribe(this._handleFullscreenableChange),
            i.withModel(null, () => {
              const e = i.model(),
                t = e.model();
              e
                .mainSeries()
                .isDWMProperty()
                .subscribe(this, this._updateButtonsVisibility),
                t
                  .symbolSourceResolvingActive()
                  .subscribe(this._updateButtonsVisibility),
                t
                  .symbolSourceCollectionChanged()
                  .subscribe(this, this._onSymbolSourceCollectionChanged),
                this._updateButtonsVisibility();
            }),
            this.updateTimezonesButton(),
            this.resizeUI();
        }
        componentWillUnmount() {
          const {
            onContentBoxChanged: e,
            resizerDetacher: t,
            chartWidgetCollection: n,
            chartWidget: i,
          } = this.context;
          e.unsubscribe(this, this._resizeByRaf),
            lt.mediaState.off(
              "changeDevice",
              this._handlePreventPhoneLayoutButtonVisibility
            ),
            n.viewMode.unsubscribe(
              this._handlePreventPhoneLayoutButtonVisibility
            ),
            t.fullscreenable.unsubscribe(this._handleFullscreenableChange),
            this._resizeObserver?.disconnect(),
            i.withModel(null, () => {
              const e = i.model(),
                t = e.model();
              e
                .mainSeries()
                .isDWMProperty()
                .unsubscribe(this, this._updateButtonsVisibility),
                e
                  .mainSeries()
                  .isBackAdjustmentForbiddenProperty()
                  .unsubscribe(this, this._updateButtonsVisibility),
                e
                  .mainSeries()
                  .isSettlementAsCloseForbiddenProperty()
                  .unsubscribe(this, this._updateButtonsVisibility),
                t
                  .symbolSourceCollectionChanged()
                  .unsubscribe(this, this._onSymbolSourceCollectionChanged),
                t
                  .symbolSourceResolvingActive()
                  .unsubscribe(this._updateButtonsVisibility);
            }),
            null !== this._raf &&
              (cancelAnimationFrame(this._raf), (this._raf = null));
        }
        render() {
          const e = this._layout,
            {
              timeFramesWidgetEnabled: t,
              timeWidgetEnabled: n,
              percentageScaleButtonEnabled: s,
              logScaleButtonEnabled: o,
              autoScaleButtonEnabled: a,
              fullscreenButtonEnabled: l,
            } = this.props;
          return i.createElement(
            ze.Toolbar,
            {
              className: vt.toolbar,
              onContextMenu: $e.preventDefault,
              ref: this._handleToolbarRef,
            },
            t &&
              i.createElement(
                Ke.FragmentMap,
                null,
                i.createElement(
                  "div",
                  {
                    className: r(
                      vt.dateRangeWrapper,
                      "collapsed" !== e.dateRangeMode && vt.collapsed
                    ),
                    ref: this._handleRangeCollapsedRef,
                  },
                  i.createElement(
                    "div",
                    { className: r(vt.dateRangeCollapsed) },
                    i.createElement(ie, {
                      goToDateButton: this.props.goToDateEnabled,
                      className: vt.dateRange,
                    })
                  )
                ),
                i.createElement(
                  "div",
                  {
                    className: r(
                      vt.dateRangeWrapper,
                      "expanded" !== e.dateRangeMode && vt.collapsed,
                      e.noRanges && vt.noranges
                    ),
                    ref: this._handleRangeExpandedRef,
                  },
                  i.createElement(
                    "div",
                    { className: r(vt.dateRangeExpanded) },
                    i.createElement(ge, {
                      onSelectRange: this._trackRangeButtonClick,
                      className: vt.dateRange,
                    }),
                    this.props.goToDateEnabled &&
                      i.createElement(Oe, { className: r(vt.separator) }),
                    this.props.goToDateEnabled && i.createElement(we, null)
                  )
                )
              ),
            i.createElement(
              "div",
              { className: vt.seriesControlWrapper },
              n &&
                i.createElement(
                  "div",
                  {
                    className: r(vt.inline, e.timeZones && vt.collapsed),
                    ref: this._handleTimeZonesRef,
                  },
                  i.createElement(
                    "div",
                    {
                      className: vt.inline,
                      onClick: this._trackTimezonesButtonClick,
                    },
                    i.createElement(Le, {
                      className: vt.item,
                      withMenu: this.props.timezoneMenuEnabled,
                      ref: this._handleTimezoneButtonRef,
                    })
                  )
                ),
              this.props.sessionIdButtonEnabled &&
                this.state.symbolAllowsSessionButton &&
                this.state.intervalAllowsSessionButton &&
                i.createElement(
                  "div",
                  {
                    className: r(vt.inline, e.session && vt.collapsed),
                    ref: this._handleSessionsRef,
                  },
                  i.createElement(
                    "div",
                    { className: vt.inline },
                    i.createElement(at, {
                      className: vt.item,
                      withMenu: this.props.sessionIdButtonEnabled,
                    })
                  )
                ),
              i.createElement(
                "div",
                {
                  ref: this._handleSeparatorRef,
                  className: r(vt.inline, e.separator && vt.collapsed),
                },
                i.createElement(Oe, null)
              ),
              i.createElement(
                Ke.FragmentMap,
                { map: this._injector },
                !1,
                !1,
                !1,
                s &&
                  !c.enabled("fundamental_widget") &&
                  i.createElement(wt, { className: vt.item }),
                o && i.createElement(yt, { className: vt.item }),
                a && i.createElement(Et, { className: vt.item }),
                l &&
                  this.state.isFullscreenable &&
                  i.createElement(Mt, {
                    className: vt.item,
                    mobileChangeLayoutEnabled:
                      this.props.mobileChangeLayoutEnabled,
                  }),
                this.props.fullscreenButtonEnabled &&
                  this.props.mobileChangeLayoutEnabled &&
                  this.state.isPreventPhoneLayoutButton &&
                  i.createElement(ht, { className: vt.item })
              )
            )
          );
        }
        updateTimezonesButton() {
          null !== this._timezoneButtonRef &&
            this._timezoneButtonRef.updateTimezonesButton();
        }
        resizeUI() {
          this._resizeByRaf();
        }
        _trackRangeButtonClick(e) {
          0;
        }
        _trackTimezonesButtonClick() {
          Rt();
        }
        _setStateWithResize(e, t) {
          Object.assign(this._layout, Nt),
            this._applyResizing(),
            t
              ? (this.setState(e), this._resizeHandler())
              : this.setState(e, () => this._resizeByRaf());
        }
        _applyResizing() {
          const { dateRangeMode: e, noRanges: t, ...n } = this._layout;
          this._rangeExpanded &&
            (this._rangeExpanded.classList.toggle(
              vt.collapsed,
              "expanded" !== e
            ),
            this._rangeExpanded.classList.toggle(vt.noranges, t)),
            this._rangeCollapsed &&
              this._rangeCollapsed.classList.toggle(
                vt.collapsed,
                "collapsed" !== e
              );
          let i = !1,
            s = !1;
          Object.keys(n).forEach((e) => {
            const t = e;
            if ("separator" !== t) {
              const e = this._seriesComponents[t],
                o = !0 === n[t];
              e &&
                ("timeZones" === t || "session" === t
                  ? (i = i || !o)
                  : (s = s || !o),
                e.classList.toggle(vt.collapsed, o));
            }
          });
          const o = this._seriesComponents.separator;
          if (o) {
            const e = !i || !s || !0 === n.separator;
            o.classList.toggle(vt.collapsed, e);
          }
        }
        _isPreventPhoneLayoutButton() {
          {
            const { chartWidgetCollection: e, resizerDetacher: t } =
              this.context;
            return (
              t.fullscreenable.value() &&
              He.CheckMobile.any() &&
              lt.mediaState.isPhoneSizeDevice() &&
              e.viewMode.value() === rt.CollectionViewMode.ForceFullscreen
            );
          }
        }
      }
      Wt.contextType = At;
      const Pt = {
        onContentBoxChanged: a.any,
        computeContentBox: a.any,
        chartWidget: a.any,
        chartApiInstance: a.any,
        chartWidgetCollection: a.any,
        resizerDetacher: a.any,
        availableTimeFrames: a.any,
      };
      class Lt extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._setActiveChart = (e) => {
              this._defineRegistry(e), this.setState({ chartWidget: e });
            });
          const t = this.props.chartWidgetCollection.activeChartWidget.value();
          (this.state = { chartWidget: t }), this._defineRegistry(t);
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(
            this._setActiveChart
          );
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
            this._setActiveChart
          );
        }
        render() {
          const { chartWidget: e } = this.state;
          if (!e) return null;
          const { options: t } = this.props,
            n = {
              timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
              goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
              timeWidgetEnabled: t.timeWidgetEnabled,
              timezoneMenuEnabled:
                t.timeWidget && t.timeWidget.timezoneMenuEnabled,
              sessionIdButtonEnabled: t.sessionIdButtonEnabled,
              backAdjustmentButtonEnabled: t.backAdjustmentButtonEnabled,
              settlementAsCloseButtonEnabled: t.settlementAsCloseButtonEnabled,
              adjustForDividendsButtonEnabled:
                t.adjustForDividendsButtonEnabled,
              logScaleButtonEnabled: t.logScaleButtonEnabled,
              percentageScaleButtonEnabled: t.percentageScaleButtonEnabled,
              autoScaleButtonEnabled: t.autoScaleButtonEnabled,
              fullscreenButtonEnabled: t.fullscreenButtonEnabled,
              mobileChangeLayoutEnabled: t.mobileChangeLayoutEnabled,
            };
          return i.createElement(
            f.RegistryProvider,
            {
              validation: Pt,
              value: this._registry,
            },
            i.createElement(Wt, { key: e.id(), ...n })
          );
        }
        _defineRegistry(e) {
          const {
              onContentBoxChanged: t,
              computeContentBox: n,
              chartApiInstance: i,
              chartWidgetCollection: s,
              options: { timeFramesWidgetEnabled: o, timeFramesWidget: a },
            } = this.props,
            r = o ? a.availableTimeFrames : void 0;
          this._registry = {
            onContentBoxChanged: t,
            computeContentBox: n,
            chartWidget: e,
            availableTimeFrames: r,
            chartApiInstance: i,
            chartWidgetCollection: s,
            resizerDetacher: e.getResizerDetacher(),
          };
        }
      }
      var Ft;
      !(function (e) {
        e.InitializedAttribute = "data-initialized";
      })(Ft || (Ft = {}));
      class Ot {
        constructor(e, t, n, o, a, r, l) {
          this._container = e;
          const c = i.createElement(Lt, {
            onContentBoxChanged: t,
            computeContentBox: n,
            chartWidgetCollection: o,
            chartApiInstance: a,
            chartWidgetOptions: r,
            options: l,
          });
          s.render(c, e), e.setAttribute("data-initialized", "true");
        }
        destroy() {
          s.unmountComponentAtNode(this._container),
            this._container.removeAttribute("data-initialized");
        }
      }
    },
    244693: (e, t, n) => {
      "use strict";
      n.d(t, {
        RegistryProvider: () => l,
        registryContextType: () => c,
        validateRegistry: () => r,
      });
      var i = n(50959),
        s = n(719036),
        o = n.n(s);
      const a = i.createContext({});
      function r(e, t) {
        o().checkPropTypes(t, e, "context", "RegistryContext");
      }
      function l(e) {
        const { validation: t, value: n } = e;
        return r(n, t), i.createElement(a.Provider, { value: n }, e.children);
      }
      function c() {
        return a;
      }
    },
    972026: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M15 8V3h-5V2h6v6h-1ZM3 10v5h5v1H2v-6h1Z"/></svg>';
    },
    451267: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M11 2v5h5v1h-6V2h1ZM7 16v-5H2v-1h6v6H7Z"/></svg>';
    },
    460925: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12 4h3v1h-1.04l-.88 9.64a1.5 1.5 0 0 1-1.5 1.36H6.42a1.5 1.5 0 0 1-1.5-1.36L4.05 5H3V4h3v-.5C6 2.67 6.67 2 7.5 2h3c.83 0 1.5.67 1.5 1.5V4ZM7.5 3a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5h-3ZM5.05 5l.87 9.55a.5.5 0 0 0 .5.45h5.17a.5.5 0 0 0 .5-.45L12.94 5h-7.9Z"/></svg>';
    },
    792574: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M11 4h-1v2H7.5A2.5 2.5 0 0 0 5 8.5V13h1v-2h16v8.5c0 .83-.67 1.5-1.5 1.5H14v1h6.5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 20.5 6H18V4h-1v2h-6V4Zm6 4V7h-6v1h-1V7H7.5C6.67 7 6 7.67 6 8.5V10h16V8.5c0-.83-.67-1.5-1.5-1.5H18v1h-1Zm-5.15 10.15-3.5-3.5-.7.7L10.29 18H4v1h6.3l-2.65 2.65.7.7 3.5-3.5.36-.35-.36-.35Z"/></svg>';
    },
    100578: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    379978: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    821868: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>';
    },
    339750: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
    },
    290752: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>';
    },
    925931: (e, t, n) => {
      "use strict";
      n.d(t, { nanoid: () => i });
      let i = (e = 21) =>
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
