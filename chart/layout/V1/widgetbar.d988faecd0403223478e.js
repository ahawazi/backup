(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4876],
  {
    497754: (t, e) => {
      var i;
      !(function () {
        "use strict";
        var s = {}.hasOwnProperty;
        function n() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            if (i) {
              var a = typeof i;
              if ("string" === a || "number" === a) t.push(i);
              else if (Array.isArray(i) && i.length) {
                var r = n.apply(null, i);
                r && t.push(r);
              } else if ("object" === a)
                for (var o in i) s.call(i, o) && i[o] && t.push(o);
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((n.default = n), (t.exports = n))
          : void 0 ===
              (i = function () {
                return n;
              }.apply(e, [])) || (t.exports = i);
      })();
    },
    307485: (t) => {
      t.exports = {
        "css-value-widgetbar-tabs-width": "45px",
        "css-value-widgetbar-border-width": "1px",
      };
    },
    262453: (t) => {
      t.exports = {
        "nav-button": "nav-button-znwuaSC1",
        link: "link-znwuaSC1",
        background: "background-znwuaSC1",
        icon: "icon-znwuaSC1",
        "flip-icon": "flip-icon-znwuaSC1",
        "size-large": "size-large-znwuaSC1",
        "preserve-paddings": "preserve-paddings-znwuaSC1",
        "size-medium": "size-medium-znwuaSC1",
        "size-small": "size-small-znwuaSC1",
        "size-xsmall": "size-xsmall-znwuaSC1",
        "size-xxsmall": "size-xxsmall-znwuaSC1",
        "visually-hidden": "visually-hidden-znwuaSC1",
      };
    },
    291011: (t) => {
      t.exports = {
        counter: "counter-napy2vLF",
        "size-xxxsmall": "size-xxxsmall-napy2vLF",
        "size-xxsmall": "size-xxsmall-napy2vLF",
        "size-xsmall": "size-xsmall-napy2vLF",
        "size-small": "size-small-napy2vLF",
        "size-medium": "size-medium-napy2vLF",
        "size-large": "size-large-napy2vLF",
        "size-xlarge": "size-xlarge-napy2vLF",
        "color-danger": "color-danger-napy2vLF",
        "color-accent": "color-accent-napy2vLF",
        "color-accent-light": "color-accent-light-napy2vLF",
        "color-neutral-bold": "color-neutral-bold-napy2vLF",
        "color-neutral": "color-neutral-napy2vLF",
        "borderColor-primary": "borderColor-primary-napy2vLF",
        "borderColor-secondary": "borderColor-secondary-napy2vLF",
        "borderColor-tertiary": "borderColor-tertiary-napy2vLF",
      };
    },
    397303: (t) => {
      t.exports = {
        "css-value-widgets-margin": "4px",
        widget: "widget-X9EuSe_t",
        widgetHeader: "widgetHeader-X9EuSe_t",
        widgetTitle: "widgetTitle-X9EuSe_t",
        headerSpace: "headerSpace-X9EuSe_t",
      };
    },
    848088: (t) => {
      t.exports = {};
    },
    693558: (t) => {
      t.exports = {};
    },
    596789: (t) => {
      t.exports = { wrapper: "wrapper-PQ5O_1M7", touch: "touch-PQ5O_1M7" };
    },
    492575: (t) => {
      t.exports = {};
    },
    389986: (t, e, i) => {
      "use strict";
      i.d(e, { CloseButton: () => c });
      var s = i(50959),
        n = i(270762),
        a = i(117105),
        r = i(315130),
        o = i(238822),
        l = i(663346),
        h = i(534983);
      function d(t = "large") {
        switch (t) {
          case "large":
            return a;
          case "medium":
          default:
            return r;
          case "small":
            return o;
          case "xsmall":
            return l;
          case "xxsmall":
            return h;
        }
      }
      const c = s.forwardRef((t, e) =>
        s.createElement(n.NavButton, { ...t, ref: e, icon: d(t.size) })
      );
    },
    270762: (t, e, i) => {
      "use strict";
      i.d(e, { NavButton: () => h });
      var s = i(50959),
        n = i(497754),
        a = i(878112),
        r = (i(15378), i(262453));
      function o(t) {
        const {
          size: e = "large",
          preservePaddings: i,
          isLink: s,
          flipIconOnRtl: a,
          className: o,
        } = t;
        return n(
          r["nav-button"],
          r[`size-${e}`],
          i && r["preserve-paddings"],
          a && r["flip-icon"],
          s && r.link,
          o
        );
      }
      function l(t) {
        const { children: e, icon: i } = t;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement("span", { className: r.background }),
          s.createElement(a.Icon, {
            icon: i,
            className: r.icon,
            "aria-hidden": !0,
          }),
          e && s.createElement("span", { className: r["visually-hidden"] }, e)
        );
      }
      const h = (0, s.forwardRef)((t, e) => {
        const {
          icon: i,
          type: n = "button",
          preservePaddings: a,
          flipIconOnRtl: r,
          size: h,
          "aria-label": d,
          ...c
        } = t;
        return s.createElement(
          "button",
          { ...c, className: o({ ...t, children: d }), ref: e, type: n },
          s.createElement(l, { icon: i }, d)
        );
      });
      h.displayName = "NavButton";
      var d = i(591365),
        c = i(273388);
      (0, s.forwardRef)((t, e) => {
        const { icon: i, renderComponent: n, "aria-label": a, ...r } = t,
          h = n ?? d.CustomComponentDefaultLink;
        return s.createElement(
          h,
          {
            ...r,
            className: o({ ...t, children: a, isLink: !0 }),
            reference: (0, c.isomorphicRef)(e),
          },
          s.createElement(l, { icon: i }, a)
        );
      }).displayName = "NavAnchorButton";
    },
    15378: (t, e, i) => {
      "use strict";
      var s, n, a, r;
      !(function (t) {
        (t.Primary = "primary"),
          (t.QuietPrimary = "quiet-primary"),
          (t.Secondary = "secondary"),
          (t.Ghost = "ghost");
      })(s || (s = {})),
        (function (t) {
          (t.XXSmall = "xxsmall"),
            (t.XSmall = "xsmall"),
            (t.Small = "small"),
            (t.Medium = "medium"),
            (t.Large = "large"),
            (t.XLarge = "xlarge"),
            (t.XXLarge = "xxlarge");
        })(n || (n = {})),
        (function (t) {
          (t.Brand = "brand"),
            (t.Blue = "blue"),
            (t.Gray = "gray"),
            (t.LightGray = "light-gray"),
            (t.Green = "green"),
            (t.Red = "red"),
            (t.Black = "black"),
            (t.Gradient = "gradient"),
            (t.BlackFriday = "black-friday"),
            (t.CyberMonday = "cyber-monday");
        })(a || (a = {})),
        (function (t) {
          (t.Semibold18px = "semibold18px"),
            (t.Semibold16px = "semibold16px"),
            (t.Semibold14px = "semibold14px"),
            (t.Medium16px = "medium16px"),
            (t.Regular16px = "regular16px"),
            (t.Regular14px = "regular14px");
        })(r || (r = {}));
    },
    409245: (t, e, i) => {
      "use strict";
      function s(t) {
        const { reference: e, ...i } = t;
        return { ...i, ref: e };
      }
      i.d(e, { renameRef: () => s });
    },
    591365: (t, e, i) => {
      "use strict";
      i.d(e, { CustomComponentDefaultLink: () => a });
      var s = i(50959),
        n = i(409245);
      function a(t) {
        return s.createElement("a", { ...(0, n.renameRef)(t) });
      }
      s.PureComponent;
    },
    732219: (t, e, i) => {
      "use strict";
      i.d(e, { Counter: () => c });
      var s,
        n,
        a,
        r = i(497754),
        o = i.n(r),
        l = i(50959),
        h = i(291011),
        d = i.n(h);
      function c(t) {
        const {
            className: e,
            count: i,
            compact: s = !0,
            size: n = "xlarge",
            color: a = "danger",
            sign: r,
            borderColor: h = "none",
            "aria-label": c,
            "aria-hidden": u,
            ...g
          } = t,
          p = g;
        let m;
        m =
          !("xxsmall" === n || "xxxsmall" === n) && i
            ? s && i >= 100
              ? "99+"
              : r && i > 0
              ? `+${i}`
              : i
            : "";
        const _ = o()(
          e,
          d().counter,
          d()[`size-${n}`],
          d()[`color-${a}`],
          "none" !== h && d()[`borderColor-${h}`]
        );
        return l.createElement(
          "span",
          { ...p, className: _, "aria-label": c, "aria-hidden": u },
          m
        );
      }
      !(function (t) {
        (t.XXXSmall = "xxxsmall"),
          (t.XXSmall = "xxsmall"),
          (t.XSmall = "xsmall"),
          (t.Small = "small"),
          (t.Medium = "medium"),
          (t.Large = "large"),
          (t.XLarge = "xlarge");
      })(s || (s = {})),
        (function (t) {
          (t.Danger = "danger"),
            (t.Accent = "accent"),
            (t.AccentLight = "accent-light"),
            (t.NeutralBold = "neutral-bold"),
            (t.Neutral = "neutral");
        })(n || (n = {})),
        (function (t) {
          (t.Primary = "primary"),
            (t.Secondary = "secondary"),
            (t.Tertiary = "tertiary"),
            (t.None = "none");
        })(a || (a = {}));
    },
    718736: (t, e, i) => {
      "use strict";
      i.d(e, { useFunctionalRefObject: () => a });
      var s = i(50959),
        n = i(855393);
      function a(t) {
        const e = (0, s.useMemo)(
            () =>
              (function (t) {
                const e = (i) => {
                  t(i), (e.current = i);
                };
                return (e.current = null), e;
              })((t) => {
                o.current(t);
              }),
            []
          ),
          i = (0, s.useRef)(null),
          a = (e) => {
            if (null === e) return r(i.current, e), void (i.current = null);
            i.current !== t && ((i.current = t), r(i.current, e));
          },
          o = (0, s.useRef)(a);
        return (
          (o.current = a),
          (0, n.useIsomorphicLayoutEffect)(() => {
            if (null !== e.current)
              return o.current(e.current), () => o.current(null);
          }, [t]),
          e
        );
      }
      function r(t, e) {
        null !== t && ("function" == typeof t ? t(e) : (t.current = e));
      }
    },
    975228: (t, e, i) => {
      "use strict";
      i.d(e, {
        hoverMouseEventFilter: () => a,
        useAccurateHover: () => r,
        useHover: () => n,
      });
      var s = i(50959);
      function n() {
        const [t, e] = (0, s.useState)(!1);
        return [
          t,
          {
            onMouseOver: function (t) {
              a(t) && e(!0);
            },
            onMouseOut: function (t) {
              a(t) && e(!1);
            },
          },
        ];
      }
      function a(t) {
        return !t.currentTarget.contains(t.relatedTarget);
      }
      function r(t) {
        const [e, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            const e = (e) => {
              if (null === t.current) return;
              const s = t.current.contains(e.target);
              i(s);
            };
            return (
              document.addEventListener("mouseover", e),
              () => document.removeEventListener("mouseover", e)
            );
          }, []),
          e
        );
      }
    },
    855393: (t, e, i) => {
      "use strict";
      i.d(e, { useIsomorphicLayoutEffect: () => n });
      var s = i(50959);
      function n(t, e) {
        ("undefined" == typeof window ? s.useEffect : s.useLayoutEffect)(t, e);
      }
    },
    664332: (t, e, i) => {
      "use strict";
      i.d(e, { useResizeObserver: () => r });
      var s = i(50959),
        n = i(855393),
        a = i(718736);
      function r(t, e = []) {
        const { callback: i, ref: r = null } = (function (t) {
            return "function" == typeof t ? { callback: t } : t;
          })(t),
          o = (0, s.useRef)(null),
          l = (0, s.useRef)(i);
        l.current = i;
        const h = (0, a.useFunctionalRefObject)(r),
          d = (0, s.useCallback)(
            (t) => {
              h(t),
                null !== o.current &&
                  (o.current.disconnect(), null !== t && o.current.observe(t));
            },
            [h, o]
          );
        return (
          (0, n.useIsomorphicLayoutEffect)(
            () => (
              (o.current = new ResizeObserver((t, e) => {
                l.current(t, e);
              })),
              h.current && d(h.current),
              () => {
                o.current?.disconnect();
              }
            ),
            [h, ...e]
          ),
          d
        );
      }
    },
    183787: (t, e, i) => {
      "use strict";
      i.d(e, { Icon: () => n });
      var s = i(50959);
      const n = s.forwardRef((t, e) => {
        const {
            icon: i = "",
            title: n,
            ariaLabel: a,
            ariaLabelledby: r,
            ariaHidden: o,
            ...l
          } = t,
          h = !!(n || a || r);
        return s.createElement("span", {
          role: "img",
          ...l,
          ref: e,
          "aria-label": a,
          "aria-labelledby": r,
          "aria-hidden": o || !h,
          title: n,
          dangerouslySetInnerHTML: { __html: i },
        });
      });
    },
    878112: (t, e, i) => {
      "use strict";
      i.d(e, { Icon: () => s.Icon });
      var s = i(183787);
    },
    65160: (t, e, i) => {
      "use strict";
      function s(t) {
        const { paddingTop: e, paddingBottom: i } = window.getComputedStyle(t);
        return [e, i].reduce(
          (t, e) => t - Number((e || "").replace("px", "")),
          t.clientHeight
        );
      }
      function n(t, e = !1) {
        const i = getComputedStyle(t),
          s = [i.height];
        return (
          "border-box" !== i.boxSizing &&
            s.push(
              i.paddingTop,
              i.paddingBottom,
              i.borderTopWidth,
              i.borderBottomWidth
            ),
          e && s.push(i.marginTop, i.marginBottom),
          s.reduce((t, e) => t + (parseFloat(e) || 0), 0)
        );
      }
      function a(t, e = !1) {
        const i = getComputedStyle(t),
          s = [i.width];
        return (
          "border-box" !== i.boxSizing &&
            s.push(
              i.paddingLeft,
              i.paddingRight,
              i.borderLeftWidth,
              i.borderRightWidth
            ),
          e && s.push(i.marginLeft, i.marginRight),
          s.reduce((t, e) => t + (parseFloat(e) || 0), 0)
        );
      }
      i.d(e, {
        contentHeight: () => s,
        outerHeight: () => n,
        outerWidth: () => a,
      });
    },
    273388: (t, e, i) => {
      "use strict";
      function s(t) {
        return (e) => {
          t.forEach((t) => {
            "function" == typeof t ? t(e) : null != t && (t.current = e);
          });
        };
      }
      function n(t) {
        return s([t]);
      }
      i.d(e, { isomorphicRef: () => n, mergeRefs: () => s });
    },
    269842: (t, e, i) => {
      "use strict";
      function s(...t) {
        return (e) => {
          for (const i of t) void 0 !== i && i(e);
        };
      }
      i.d(e, { createSafeMulticastEventHandler: () => s });
    },
    247465: (t, e, i) => {
      "use strict";
      i.d(e, { isCancelled: () => a, makeCancelable: () => n });
      class s extends Error {
        constructor() {
          super("CancelToken");
        }
      }
      function n(t) {
        let e = !1;
        return {
          promise: new Promise((i, n) => {
            t.then((t) => (e ? n(new s()) : i(t))),
              t.catch((t) => n(e ? new s() : t));
          }),
          cancel() {
            e = !0;
          },
        };
      }
      function a(t) {
        return t instanceof s;
      }
    },
    32349: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { DataWindowRenderer: () => a });
      var s = i(48547),
        n = i(329452);
      class a extends s.WidgetbarWidgetRenderer {
        constructor(t) {
          super(t),
            (this._mounted = !1),
            (this._contentRenderer = null),
            (this._updateDelegate = new n.Delegate()),
            (this.fullUpdate = () => {
              this._updateChartWidget(),
                this._mounted && this._contentRenderer?.();
            }),
            (this._activityChangeHandler = (t) => {
              t
                ? this._chartWidgetCollection.activeChartWidget.subscribe(
                    this.fullUpdate,
                    { callWithLast: !0 }
                  )
                : this._chartWidgetCollection.activeChartWidget.unsubscribe(
                    this.fullUpdate
                  );
            }),
            (this._props = t);
          const e = this._props.getChartWidgetCollection?.();
          if (!e) throw new Error("ChartWidgetCollection is required");
          (this._chartWidgetCollection = e),
            (this._chartWidget =
              this._chartWidgetCollection.activeChartWidget.value()),
            this._props.active.subscribe(this._activityChangeHandler, {
              callWithLast: !0,
            });
        }
        mount() {
          if (this._mounted) return;
          this._mounted = !0;
          const t = (this._loadModulePromise = Promise.all([
            Promise.resolve().then(i.t.bind(i, 50959, 19)),
            Promise.resolve().then(i.t.bind(i, 632227, 19)),
            Promise.all([
              i.e(8245),
              i.e(7384),
              i.e(7431),
              i.e(8473),
              i.e(5758),
              i.e(9221),
              i.e(1205),
            ]).then(i.bind(i, 792199)),
          ]).then(([e, i, s]) => {
            this._loadModulePromise === t &&
              ((this._contentRenderer = () => {
                i.render(
                  e.createElement(s.DataWindow, {
                    selectedSourcesWV:
                      this._chartWidgetCollection.selectedSources,
                    chartWidget: this._chartWidget,
                    updateDelegate: this._updateDelegate,
                  }),
                  this._container
                );
              }),
              this._contentRenderer());
          }));
        }
        unmount() {
          this._mounted &&
            ((this._mounted = !1),
            super.unmount(),
            (this._loadModulePromise = null));
        }
        unmountBody() {
          this._mounted &&
            ((this._mounted = !1),
            super.unmountBody(),
            (this._loadModulePromise = null));
        }
        destroy() {
          this._props.active.unsubscribe(this._activityChangeHandler),
            super.destroy();
        }
        update() {
          this._mounted && this._updateDelegate.fire();
        }
        _updateChartWidget() {
          const t = this._chartWidget,
            e = this._chartWidgetCollection.activeChartWidget.value();
          t && t.removeDataWindowWidget(),
            e && ((this._chartWidget = e), e.setDataWindowWidget(this));
        }
      }
    },
    658475: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { WidgetBar: () => Et });
      var s = i(916738),
        n = i(650151),
        a = (i(307485), i(609838)),
        r = i(658895),
        o = i(50959),
        l = i(632227),
        h = i(240534);
      const d = {
        isActive: !1,
        notificationCount: 0,
        notificationCounterAriaLabel: "",
      };
      class c {
        constructor(t) {
          const e = { ...d, ...t };
          (this.isActive = new h.WatchedValue(e.isActive)),
            (this.notificationsCount = new h.WatchedValue(e.notificationCount)),
            (this.notificationCounterAriaLabel = new h.WatchedValue(
              e.notificationCounterAriaLabel
            )),
            (this.icon = new h.WatchedValue(e.icon)),
            (this.hint = new h.WatchedValue(e.hint)),
            (this.onClick = new h.WatchedValue(e.onClick)),
            (this.TabButtonComponent = t.TabButtonComponent);
        }
        onActiveStateChange(t) {
          this.isActive.setValue(t);
        }
        updateNotifications(t) {
          this.notificationsCount.setValue(t);
        }
        updateNotificationCounterAriaLabel(t) {
          this.notificationCounterAriaLabel.setValue(t);
        }
      }
      var u = i(191085),
        g = i(452970),
        p = i(981132),
        m = i(397303);
      const _ = parseInt(m["css-value-widgets-margin"]),
        v = {
          reuters_calendar: {
            title: a.t(null, void 0, i(877731)),
            emptyHeader: !0,
            ctor: null,
            lazyLoad: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            noHeaderSpace: !0,
            options: { trackAction: undefined, showTableHeader: !0 },
          },
          earnings_calendar: {
            title: a.t(null, void 0, i(701747)),
            ctor: null,
            lazyLoad: !0,
            emptyHeader: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            margin: _,
          },
          watchlist: {
            title: a.t(null, void 0, i(512504)),
            ctor: null,
            lazyLoad: !0,
            chartWidgetAllowed: !0,
            emptyHeader: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            margin: _,
            preloadDelay: 6e4,
          },
          hotlist: {
            title: a.t(null, void 0, i(941273)),
            ctor: null,
            lazyLoad: !0,
            chartWidgetAllowed: !0,
            emptyHeader: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            margin: _,
          },
          detail: {
            title: a.t(null, void 0, i(278892)),
            ctor: null,
            lazyLoad: !0,
            chartWidgetAllowed: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            margin: _,
            emptyHeader: !0,
            noHeaderSpace: !0,
          },
          news: {
            title: a.t(null, void 0, i(848782)),
            ctor: null,
            noHeaderSpace: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            titleClass: m.widgetTitle,
            margin: _,
          },
          notifications_following: {
            title: a.t(null, void 0, i(974420)),
            ctor: null,
            options: { type: "following" },
            chartWidgetAllowed: !0,
          },
          datawindow: {
            title: a.t(null, void 0, i(748741)),
            ctor: null,
            chartWidgetAllowed: !0,
            chartWidgetRequired: !0,
          },
          notes: {
            title: a.t(null, void 0, i(926647)),
            ctor: null,
            lazyLoad: !0,
            chartWidgetAllowed: !0,
          },
          alerts: {
            ctor: null,
            lazyLoad: !1,
            chartWidgetAllowed: !0,
            emptyHeader: !0,
            noHeaderSpace: !0,
            doNotClearNotifications: !0,
            doNotClearNotificationsOnVisibilityChange: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            margin: _,
          },
          market_summary: { title: a.t(null, void 0, i(176937)), ctor: null },
          object_tree: {
            title: a.t(null, void 0, i(423511)),
            ctor: null,
            noHeader: !0,
            chartWidgetAllowed: !0,
            chartWidgetRequired: !0,
          },
          unionchats: {
            ctor: null,
            emptyHeader: !0,
            widgetClass: m.widget,
            headerClass: m.widgetHeader,
            margin: _,
            chartWidgetAllowed: !0,
            noHeaderSpace: !0,
          },
          pine_logs: {
            title: a.t(null, void 0, i(923304)),
            ctor: null,
            chartWidgetAllowed: !0,
            noHeader: !0,
            widgetClass: m.widget,
            margin: _,
          },
        },
        w = { base: u };
      (w["object-tree"] = g), (w.datawindow = p);
      var b = i(497754),
        f = i.n(b),
        y = i(852752),
        C = i(329452),
        B = i(688401),
        S = i(441827),
        x = i(32133),
        E = i(870122);
      class L {
        constructor(t) {
          (this._settingsKey = null),
            (this._value = null),
            (this._watchedValue = new h.WatchedValue(null)),
            t &&
              t.settingsKey &&
              ((this._settingsKey = t.settingsKey),
              (this._value = E.getJSON(this._settingsKey, null)),
              (this._watchedValue = new h.WatchedValue(this._value))),
            t &&
              t.widgetBarWidget &&
              Object.defineProperty(this, "widgetBarWidget", {
                value: t.widgetBarWidget,
                configurable: !0,
              });
        }
        value() {
          return this._value;
        }
        setValue(t, e) {
          return (
            (this._value = t),
            this._watchedValue.setValue(this._value),
            this._settingsKey &&
              (null == t
                ? ((0, x.trackEvent)(
                    "Settings debug",
                    "WigdetProperties.setValue: " + this._settingsKey,
                    window.user.username
                  ),
                  E.remove(this._settingsKey))
                : E.setJSON(this._settingsKey, t, e)),
            this._value
          );
        }
        readonly() {
          return this._watchedValue.readonly();
        }
        destroy() {
          this._watchedValue.destroy();
        }
      }
      var T,
        W = i(821205);
      const M = new (((T = class {
        postMessage(t, e) {
          T._handlers.forEach((i) => {
            i.handler(t, e);
          });
        }
        onMessage(t) {
          "function" == typeof t &&
            T._handlers.push({ handler: t, widget: this });
        }
        offMessage(t) {
          if ("function" == typeof t) {
            const e = T._handlers.findIndex((e) => e.handler === t);
            -1 !== e && T._handlers.splice(e, 1);
          }
        }
        offWidget(t) {
          T._handlers = T._handlers.filter((e) => e.widget !== t);
        }
      })._handlers = []),
      T)();
      var H = i(924910),
        z = i(496818);
      class P {
        constructor(t) {
          (this.heightRatio = P.heightRatio),
            (this.minHeight = 0),
            (this.widgetConfig = null),
            (this.widgetActive = new h.WatchedValue()),
            (this.widgetMaximized = new h.WatchedValue()),
            (this.widgetVisible = null),
            (this.symbolLinking = null),
            (this.intervalLinking = null),
            (this._header = null),
            (this._widget = null),
            (this._headerIcon = null),
            (this._headerspace = null),
            (this._title = null),
            (this._resizehandle = null),
            (this._widgetStarted = new C.Delegate()),
            (this._resizer = null),
            (this._internalState = {
              alive: new h.WatchedValue(!0),
              container: new h.WatchedValue(),
              width: new h.WatchedValue(),
              height: new h.WatchedValue(),
              detachable: new h.WatchedValue(!1),
            }),
            t && t.widgetBarPage && (this.widgetBarPage = t.widgetBarPage),
            (this._rdState = new y.ResizerDetacherState(this._internalState)),
            this._rdState.owner.subscribe((t) => {
              t !== this._internalState &&
                (this._internalState.container.value().innerHTML = "");
            });
        }
        element(t) {
          switch (t) {
            case "widget":
              return this._widget;
            case "header":
              return this._header;
            case "resize-handle":
              return this._resizehandle;
            default:
              return null;
          }
        }
        setHeight(t) {
          this._internalState.container.value() &&
            (this._internalState.container.value().style.height = t + "px"),
            this._internalState.height.setValue(t);
        }
        onWidthChange(t) {
          this._internalState.width.setValue(t);
        }
        remove() {
          this.widgetBarPage && this.widgetBarPage.removeWidget(this);
        }
        destroy() {
          this.widgetObject &&
            "destroy" in this.widgetObject &&
            this.widgetObject.destroy(),
            this.remove(),
            this.symbolLinking &&
              (this.symbolLinking.destroy(), (this.symbolLinking = null)),
            this.intervalLinking &&
              (this.intervalLinking.destroy(), (this.intervalLinking = null)),
            this.widgetVisible &&
              (this.widgetVisible.unsubscribe(), (this.widgetVisible = null)),
            this.widgetActive &&
              (this.widgetActive.unsubscribe(), (this.widgetActive = null)),
            this.widgetMaximized &&
              (this.widgetMaximized.unsubscribe(),
              (this.widgetMaximized = null)),
            this.properties &&
              (this.properties.destroy(), delete this.properties),
            this._header?.remove(),
            this._widget?.remove(),
            this._headerIcon?.remove(),
            this._headerspace?.remove(),
            this._title?.remove(),
            this._resizehandle?.remove(),
            (this._header = null),
            (this._widget = null),
            (this._headerIcon = null),
            (this._headerspace = null),
            (this._title = null),
            (this._resizehandle = null),
            M.offWidget(this),
            this._preloadTimeout && clearTimeout(this._preloadTimeout);
        }
        rdState() {
          return this._rdState;
        }
        onActiveStateChange(t) {
          const e = (this.getWidgetBarOption("widgetConfig") || v)[this.type];
          t && !e.doNotClearNotifications && this.clearNotifications(),
            this.updateVisibleWatchedValue(),
            this.widgetActive?.setValue(!!t);
        }
        toggleMaximize(t) {
          const e = "boolean" != typeof t ? !this.widgetMaximized?.value() : t;
          e !== this.widgetMaximized?.value() &&
            (this.widgetMaximized?.setValue(e),
            this.widgetBarPage &&
              this.widgetBarPage.widgetBarLayout &&
              this.widgetBarPage.widgetBarLayout.widgetBar &&
              this.widgetBarPage.widgetBarLayout.widgetBar.saveToTVSettings(),
            this.widgetBarPage && this.widgetBarPage.updateWidgetsHeight());
        }
        startWidget() {
          if (this.widgetObject || this.widgetStartDelayed) return;
          if (!this.id) return;
          const t = this.getWidgetBarOption("widgetConfig") || v;
          if (!this.type) return;
          const e = t[this.type];
          if (!e) return;
          const i = e.ctor;
          if (!i) return;
          if (
            ((this.widgetVisible = this.widgetVisible || new h.WatchedValue()),
            this.updateVisibleWatchedValue(),
            e.lazyLoad && !this.widgetVisible.value())
          )
            return (
              (this.widgetStartDelayed = !0),
              this.widgetVisible.when(() => {
                delete this.widgetStartDelayed,
                  this.startWidget(),
                  clearTimeout(this._preloadTimeout);
              }),
              void (
                e.preloadDelay &&
                (this._preloadTimeout = setTimeout(() => {
                  i.preload && i.preload();
                }, e.preloadDelay))
              )
            );
          (this.symbolLinking = B.linking.proSymbol.spawn()),
            (this.intervalLinking = B.linking.interval.spawn());
          const s = this._rdState.bridge(),
            a = {
              ...{},
              header: (0, n.ensureNotNull)(this._header),
              headerspace: this._headerspace,
              widget: (0, n.ensureNotNull)(this._widget),
              container: s.container.value(),
              properties: this.properties,
              notify: this.notify.bind(this),
              clearNotifications: this.clearNotifications.bind(this),
              visible: this.widgetVisible.readonly(),
              active: (0, n.ensureNotNull)(this.widgetActive).readonly(),
              symbol: this.symbolLinking,
              interval: this.intervalLinking,
              height: s.height,
              setMinHeight: this.setMinHeight.bind(this),
              width: s.width,
              setTitle: this.setTitle.bind(this),
              setTitleHtml: this.setTitleHtml.bind(this),
              id: this.id,
              toggleMaximize: this.toggleMaximize.bind(this),
              maximized: (0, n.ensureNotNull)(this.widgetMaximized).readonly(),
              postMessage: M.postMessage.bind(this),
              onMessage: M.onMessage.bind(this),
              offMessage: M.offMessage.bind(this),
              hideDetach: !1,
              unAuthEditable: this.unAuthEditable,
            };
          if (e.chartWidgetAllowed) {
            const t = () =>
              this.widgetBarPage &&
              this.widgetBarPage.widgetBarLayout &&
              this.widgetBarPage.widgetBarLayout.widgetBar &&
              this.widgetBarPage.widgetBarLayout.widgetBar
                .chartWidgetCollection;
            (a.getChartWidget = () => {
              const e = t();
              return e ? e.activeChartWidget.value() : null;
            }),
              (a.getChartWidgetCollection = () => t() || null);
          }
          void 0 !== this.readonly
            ? this.readonly && (a.readonly = !0)
            : this.getWidgetBarOption("readonly") && (a.readonly = !0),
            void 0 !== e.options && (a.options = e.options),
            null != this.stateData
              ? (a.data = this.stateData)
              : null != e.data && (a.data = e.data);
          const r = (this.widgetObject = new i(a));
          "hasLifecycle" in r &&
            this.widgetActive?.readonly().subscribe(
              (t) => {
                t ? r.mount() : r.unmount();
              },
              { callWithLast: !e.lazyLoad }
            ),
            this._widgetStarted.fire(this);
        }
        widgetStarted() {
          return this._widgetStarted;
        }
        notify(t, e = {}) {
          if (
            this.widgetBarPage &&
            (!this.widgetBarPage.isActiveAndVisible() || e.force)
          )
            return this.widgetBarPage.notify(t, e);
        }
        clearNotifications() {
          if (this.widgetBarPage)
            return this.widgetBarPage.clearNotifications();
        }
        onVisibilityChange() {
          this.updateVisibleWatchedValue();
        }
        updateVisibleWatchedValue() {
          this.widgetVisible &&
            this.widgetVisible.setValue(
              !!this.widgetBarPage && this.widgetBarPage.isActiveAndVisible()
            );
        }
        setTitle(t) {
          (this.customTitle = String(t)),
            this._title && (this._title.textContent = this.getTitle());
        }
        setTitleHtml(t) {
          this._title && (0, W.html)(this._title, t);
        }
        setMinHeight(t) {
          const e = this.widgetBarPage;
          e &&
            ((this.minHeight = 0),
            (this.minHeight = Math.min(t, e.getAvailableHeight())),
            e.updateWidgetsHeight());
        }
        getWidgetBarOption(t) {
          if (
            this.widgetBarPage &&
            this.widgetBarPage.widgetBarLayout &&
            this.widgetBarPage.widgetBarLayout.widgetBar &&
            t in this.widgetBarPage.widgetBarLayout.widgetBar
          )
            return this.widgetBarPage.widgetBarLayout.widgetBar[t];
        }
        getTitle(t) {
          const e = (function (t, e) {
            try {
              e = e || v;
              let i = e[t]?.title;
              return (
                !i &&
                  t &&
                  (i = String(t)
                    .match(/[A-Z]{2,}|\d+(?:\.\d+)?|[A-Z]?[a-z]+/g)
                    ?.join(" ")
                    .replace(/^.|\s./g, (t) => t.toUpperCase())),
                i || void 0
              );
            } catch {
              return;
            }
          })(this.type, this.getWidgetBarOption("widgetConfig"));
          return t && this.customTitle && e
            ? this.customTitle.substring(0, e.length) === e
              ? this.customTitle
              : e + ": " + this.customTitle
            : this.customTitle || e || a.t(null, void 0, i(103898));
        }
        createHTML() {
          const t =
              !!this.widgetConfig &&
              !!this.widgetConfig.icon &&
              this.widgetConfig.icon,
            e = this.widgetConfig && this.widgetConfig.emptyHeader,
            i = this.widgetConfig && this.widgetConfig.noHeader,
            s = this.widgetConfig && this.widgetConfig.noHeaderSpace,
            n = (this.widgetConfig && this.widgetConfig.widgetClass) || "",
            a = (this.widgetConfig && this.widgetConfig.headerClass) || "",
            r = (this.widgetConfig && this.widgetConfig.titleClass) || "",
            o = (this._widget = document.createElement("div"));
          (o.dataset.testIdWidgetType = this.type),
            (o.classList.value = f()(
              n,
              "widgetbar-widget",
              "widgetbar-widget-" + this.type
            ));
          const l = (this._header = document.createElement("div"));
          if (
            ((l.classList.value = a || "widgetbar-widgetheader"),
            l.addEventListener("contextmenu", (t) => {
              "input" !== t.target.tagName.toLowerCase() && t.preventDefault();
            }),
            i || o.appendChild(l),
            t)
          ) {
            const e = (this._headerIcon = document.createElement("div"));
            (e.classList.value =
              "widgetbar-widgetheader-icon widgetbar-widgetheader-icon-" + t),
              e.appendChild((0, S.parseHtml)(w[t])),
              l.appendChild(e);
          }
          if (!s) {
            const t = (this._headerspace = document.createElement("div"));
            (t.classList.value = "widgetbar-headerspace"),
              t.addEventListener("click", (t) => t.preventDefault()),
              l.appendChild(t);
          }
          if (!e) {
            const t = (this._title = document.createElement("div"));
            (t.classList.value = f()("widgetbar-widgettitle", r)),
              (t.dataset.name = this.type + "_header"),
              (t.textContent = this.getTitle()),
              l.prepend(t);
          }
          const h = document.createElement("div");
          (h.classList.value = "widgetbar-widgetbody"),
            h.addEventListener("contextmenu", (t) => {
              t.target === h && t.preventDefault();
            }),
            o.appendChild(h),
            this._internalState.container.setValue(h);
          const d = (this._resizehandle = document.createElement("div"));
          (d.classList.value = "widgetbar-widgethandle"),
            d.addEventListener("contextmenu", (t) => {
              t.target === d && t.preventDefault();
            }),
            null !== this._resizer && this._resizer.destroy(),
            (this._resizer = new z.PointerBackend({
              handle: d,
              onDragStart: (t) => {
                this.widgetBarPage?.handleWidgetResizeStart(this, t);
              },
              onDragMove: (t) => {
                this.widgetBarPage?.handleWidgetResizeChange(this, t);
              },
              onDragStop: (t) => {
                this.widgetBarPage?.handleWidgetResizeStop(this, t);
              },
            })),
            o.appendChild(d),
            !0 === this.maximized &&
              (this.toggleMaximize(!0), delete this.maximized);
        }
        demarshal(t) {
          if ("string" == typeof t)
            try {
              t = JSON.parse(t);
            } catch (t) {}
          if (!t || "object" != typeof t) return null;
          let e;
          if (
            ("id" in t
              ? ((this.id = String(t.id)),
                (this.type = this.id.replace(/\..*/, "")))
              : "type" in t
              ? ((this.type = String(t.type)),
                (this.id = this.type + "." + (0, H.randomHash)()))
              : (delete this.type, delete this.id),
            null != t.readonly
              ? (this.readonly = !!t.readonly)
              : delete this.readonly,
            (this.stateData = t.data),
            isFinite(Number(t.heightRatio)) && Number(t.heightRatio) >= 0
              ? (this.heightRatio = Number(t.heightRatio))
              : (this.heightRatio = P.heightRatio),
            !0 === t.maximized && (this.maximized = !0),
            !0 === t.unAuthEditable && (this.unAuthEditable = !0),
            t.settingsKey)
          )
            e = String(t.settingsKey);
          else if (this.id) {
            const t = this.getWidgetBarOption("_settingsPrefix");
            t && (e = t + ".widget." + this.id);
          }
          if (
            ((this.properties = new L({
              widgetBarWidget: this,
              settingsKey: e,
            })),
            null == t.properties ||
              (e && null !== this.properties.value()) ||
              this.properties.setValue(t.properties),
            ("news" !== this.type && "hotlist" !== this.type) ||
              !e ||
              this.properties.setValue(
                (0, s.default)({}, t.properties, this.properties.value())
              ),
            "hotlist" === this.type)
          )
            if (!e && t.properties) this.properties.setValue(t.properties);
            else {
              const t = this.properties.value();
              ("exchangeByLocale" in t || "groupByLocale" in t) &&
                (delete t.exchangeByLocale,
                delete t.groupByLocale,
                this.properties.setValue(t));
            }
          this.widgetConfig = null;
          const i = this.getWidgetBarOption("widgetConfig");
          return (
            this.type &&
              i &&
              i[this.type] &&
              (this.widgetConfig = i[this.type]),
            this
          );
        }
        marshal() {
          const t = {};
          return (
            this.id && (t.id = this.id),
            this.type && (t.type = this.type),
            this.heightRatio !== P.heightRatio &&
              (t.heightRatio = this.heightRatio),
            this.widgetMaximized?.value() && (t.maximized = !0),
            t
          );
        }
      }
      P.heightRatio = 1;
      class V {
        constructor(t) {
          (this.widgets = []),
            (this.notificationCounter = 0),
            (this._page = null),
            (this._invalidated = !1),
            (this._resizeOperations = new WeakMap()),
            (this.widgets = []),
            t &&
              t.widgetBarLayout &&
              (this.widgetBarLayout = t.widgetBarLayout);
        }
        widget(t) {
          for (const e of this.widgets) if (e.type === t) return e;
          return null;
        }
        element() {
          return this._page;
        }
        gaEvent() {
          return this._gaEvent;
        }
        onActiveStateChange(t) {
          (t = !!t),
            this._page?.classList.toggle("active", !!t),
            (0, n.ensure)(this.tab).onActiveStateChange(t),
            t && this.updateWidgetsHeight({ skipIfHeightUnchanged: !0 }),
            this.widgets.forEach((e) => {
              e.onActiveStateChange(t);
            });
        }
        getAvailableHeight() {
          let t =
            this.widgetBarLayout?.widgetBar?.resizerBridge.height.value() || 0;
          if (!t) return 0;
          let e = 0;
          return (
            this.widgets.forEach((i, s) => {
              if (((t -= i.minHeight), s > 0)) {
                const e = (i.widgetConfig && i.widgetConfig.margin) || 1;
                t -= e;
              }
              const n = i.element("header");
              n && (e || (e = (0, W.outerHeight)(n, !0)), (t -= e));
            }),
            Math.max(t, 0)
          );
        }
        updateWidgetsHeight(t = {}) {
          if (!this._page) return;
          if (!this.widgetBarLayout || !this.widgetBarLayout.widgetBar) return;
          if (this.widgetBarLayout.getActivePage() !== this)
            return void (this._invalidated = !0);
          const e = this.widgetBarLayout.widgetBar.resizerBridge.height.value();
          if (
            ((this._pageHeight === e && t.skipIfHeightUnchanged) ||
              ((this._invalidated = !0), (this._pageHeight = e)),
            !this._invalidated)
          )
            return;
          let i,
            s = e,
            a = 0,
            r = this.widgets,
            o = null;
          const l = r.every((t) => 0 === t.heightRatio);
          for (let t = this.widgets.length; t--; )
            if ((0, n.ensureNotNull)(this.widgets[t].widgetMaximized).value()) {
              o = this.widgets[t];
              break;
            }
          if (r.length > 0 && null === o && l) {
            const t = r[r.length - 1];
            (t.heightRatio = 1), (o = t);
          }
          if (o) {
            for (let t = this.widgets.length; t--; ) {
              const e = r[t];
              e !== o && e.setHeight(0);
            }
            r = [o];
          }
          for (let t = r.length - 1; t > 0; t--) {
            const e = r[t];
            s -= (e.widgetConfig && e.widgetConfig.margin) || 1;
          }
          for (let t = r.length; t--; ) {
            const e = r[t],
              n = e.element("header");
            n &&
              (void 0 === i && (i = (0, W.outerHeight)(n, !0)),
              (s -= i),
              (a += e.heightRatio));
          }
          const h = s / a;
          this._recalculateWidgetsHeightRatio(h);
          const d = r.length - 1;
          for (let t = 0; t <= d; t++) {
            const e = r[t];
            let i;
            (i = t === d ? s : Math.round(h * e.heightRatio)),
              (i = Math.max(i, e.minHeight)),
              e.setHeight(i),
              (s -= i);
          }
        }
        handleWidgetResizeStart(t, e) {
          let i, s;
          for (let e = this.widgets.length - 1; e > 0; e--)
            this.widgets[e] === t &&
              ((i = this.widgets[e]), (s = this.widgets[e - 1]));
          (0, n.assert)(void 0 !== i), (0, n.assert)(void 0 !== s);
          const a = s.rdState().bridge().height.value(),
            r = s.heightRatio + i.heightRatio,
            o = a + i.rdState().bridge().height.value();
          0 === o && e.preventDefault(),
            this._resizeOperations.set(t, {
              bottomWidget: i,
              topWidget: s,
              summaryHeight: o,
              summaryRatio: r,
              startTopWidgetHeight: a,
              prevTopWidgetHeight: void 0,
            });
        }
        handleWidgetResizeChange(t, e) {
          const i = this._resizeOperations.get(t);
          if (void 0 === i) return;
          this._page?.classList.add("widget-resize-mode");
          const { current: s, initial: n } = e.detail,
            a = s.pageY - n.pageY,
            r = Math.max(
              i.topWidget.minHeight,
              Math.min(
                i.startTopWidgetHeight + a,
                i.summaryHeight - i.bottomWidget.minHeight
              )
            );
          i.prevTopWidgetHeight !== r &&
            ((i.prevTopWidgetHeight = r),
            (i.topWidget.heightRatio = (r / i.summaryHeight) * i.summaryRatio),
            (i.bottomWidget.heightRatio =
              i.summaryRatio - i.topWidget.heightRatio),
            i.topWidget.setHeight(r),
            i.bottomWidget.setHeight(i.summaryHeight - r));
        }
        handleWidgetResizeStop(t, e) {
          const i = this._resizeOperations.get(t);
          void 0 !== i &&
            (this._resizeOperations.delete(t),
            this._page?.classList.remove("widget-resize-mode"),
            i.prevTopWidgetHeight !== i.startTopWidgetHeight &&
              (this.normalizeRatios(),
              this.widgetBarLayout &&
                this.widgetBarLayout.widgetBar &&
                this.widgetBarLayout.widgetBar.saveToTVSettings()));
        }
        normalizeRatios() {
          let t = 1 / 0;
          for (let e = this.widgets.length; e--; ) {
            const i = this.widgets[e].heightRatio;
            i <= 0 || !isFinite(i) || (i < t && (t = i));
          }
          if (!isFinite(t)) return;
          let e = 1;
          for (; t < 1; ) (t *= 2), (e *= 2);
          for (; t >= 2; ) (t /= 2), (e /= 2);
          for (let t = this.widgets.length; t--; )
            this.widgets[t].heightRatio *= e;
        }
        attachWidget(t, e) {
          e = Number(e);
          const i = this.widgets.indexOf(t);
          -1 !== i
            ? this.widgets.splice(i, 1)
            : t.widgetBarPage &&
              t.widgetBarPage !== this &&
              t.widgetBarPage.removeWidget(t),
            e < this.widgets.length
              ? e < 0 && (e = 0)
              : (e = this.widgets.length),
            delete t.widgetBarPage,
            Object.defineProperty(t, "widgetBarPage", {
              value: this,
              configurable: !0,
            }),
            this.widgets.splice(e, 0, t);
          const s = this.widgets[e + 1],
            n = t.element("widget");
          s
            ? n && n.insertAdjacentElement("beforebegin", s.element("widget"))
            : n && this._page?.appendChild(n),
            this.updateWidgetsHeight(),
            t.updateVisibleWatchedValue();
        }
        removeWidget(t) {
          const e = this.widgets.indexOf(t);
          -1 !== e &&
            (delete t.widgetBarPage,
            this.widgets.splice(e, 1),
            t.element("widget")?.remove(),
            this.updateWidgetsHeight());
        }
        remove() {
          this.widgetBarLayout && this.widgetBarLayout.removePage(this);
        }
        destroy() {
          this.remove(), this._page?.remove();
        }
        onVisibilityChange(t) {
          const e =
            t &&
            this.widgetBarLayout &&
            this.widgetBarLayout.getActivePage() === this;
          this.widgets.forEach((t) => {
            const i = t.getWidgetBarOption("widgetConfig")[t.type];
            e &&
              !i.doNotClearNotificationsOnVisibilityChange &&
              t.clearNotifications(),
              t.onVisibilityChange();
          });
        }
        notify(t, e = {}) {
          !0 !== e.clear
            ? e.stopHighlightTab ||
              ((this.notificationCounter =
                this.notificationCounter + (~~t || 1)),
              this.updateNotifications(e.notificationValue))
            : this.clearNotifications();
        }
        clearNotifications() {
          (this.notificationCounter = 0),
            (0, n.ensure)(this.tab).updateNotifications(
              this.notificationCounter
            ),
            this._clearNotificationsCounterAriaLabel();
        }
        updateNotifications(t) {
          const e = "number" == typeof t ? t : this.notificationCounter;
          (0, n.ensure)(this.tab).updateNotifications(e),
            this._updateNotificationsCounterAriaLabel(e);
        }
        getWidgets(t) {
          const e = [];
          for (let i = 0; i < this.widgets.length; ++i) {
            const s = this.widgets[i];
            s.type === t && e.push(s);
          }
          return e;
        }
        isActiveAndVisible() {
          const t = this.widgetBarLayout;
          return !(!t || !t.visible) && t.getActivePage() === this;
        }
        createHTML() {
          const t = (this._page = document.createElement("div"));
          (t.classList.value = "widgetbar-page"),
            this.widgets.forEach((e) => {
              e.createHTML();
              const i = e.element("widget");
              i && t.appendChild(i);
            });
        }
        createTabButtonViewModel() {
          this.tab = new c({
            icon: w[this.icon],
            hint: this.title,
            onClick: (t) => {
              this.widgetBarLayout && this.widgetBarLayout.onTabClick(t, this);
            },
            TabButtonComponent: this.TabButtonComponent,
          });
        }
        demarshal(t) {
          if ("string" == typeof t)
            try {
              t = JSON.parse(t);
            } catch (t) {}
          if ("object" != typeof t || !t.widgets || !Array.isArray(t.widgets))
            return null;
          const e = this.widgets;
          return (
            e.splice(0, e.length),
            (this._gaEvent = t._gaEvent),
            (this.title = t.title),
            (this.name = t.name),
            (this.icon = t.icon),
            (this.spaceBottom = t.spaceBottom),
            (this.spaceBottomText = t.spaceBottomText),
            (this.onBottom = t.onBottom),
            (this.TabButtonComponent = t.TabButtonComponent),
            (this._createNotificationCounterAriaLabel =
              t.createCounterAriaLabel),
            this.createTabButtonViewModel(),
            t.widgets.forEach((t) => {
              const i = new P({ widgetBarPage: this }).demarshal(t);
              i && e.push(i);
            }),
            0 === e.length ? null : this
          );
        }
        marshal() {
          const t = [];
          return (
            this.widgets.forEach((e) => {
              const i = e.marshal();
              i && t.push(i);
            }),
            0 === t.length ? null : t
          );
        }
        _recalculateWidgetsHeightRatio(t) {
          const e = this.widgets;
          e.length <= 1 ||
            e.forEach((i, s) => {
              if (t * i.heightRatio >= i.minHeight) return;
              let n = i.minHeight / t - i.heightRatio;
              for (let i = 0; i < e.length; i++) {
                if (i === s) continue;
                const a = e[i],
                  r = a.heightRatio - a.minHeight / t;
                if (
                  !(r <= 0) &&
                  ((a.heightRatio -= Math.min(n, r)),
                  (e[s].heightRatio += Math.min(n, r)),
                  (n -= r),
                  n <= 0)
                )
                  break;
              }
            });
        }
        _updateNotificationsCounterAriaLabel(t) {
          this._createNotificationCounterAriaLabel &&
            ((this.notificationCounterAriaLabel =
              this._createNotificationCounterAriaLabel(t)),
            (0, n.ensure)(this.tab).updateNotificationCounterAriaLabel(
              this.notificationCounterAriaLabel
            ));
        }
        _clearNotificationsCounterAriaLabel() {
          (this.notificationCounterAriaLabel = ""),
            (0, n.ensure)(this.tab).updateNotificationCounterAriaLabel(
              this.notificationCounterAriaLabel
            );
        }
      }
      var I = i(440891),
        N = i(719036),
        A = i(671945),
        k = i(972535),
        D = i(389986),
        R = i(397062);
      function O(t) {
        return o.createElement(D.CloseButton, {
          className: b(t.className, R.button),
          onClick: t.onClick,
          "aria-label": a.t(null, { context: "action" }, i(433334)),
          size: "medium",
          preservePaddings: !0,
          "data-role": "button",
          "data-name": t.name,
        });
      }
      var F = i(341121),
        j = i(403636);
      function q(t) {
        return o.createElement("div", {
          className: b(t.className, j.separator),
        });
      }
      var U = i(733660);
      function Z(t) {
        return o.createElement("div", {
          className: b(U.filler, t.className),
        });
      }
      function X(t, e) {
        return class extends o.PureComponent {
          constructor(t) {
            super(t),
              (this._bindedForceUpdate = () => this.forceUpdate()),
              (this.state = { viewModel: e });
          }
          componentDidMount() {
            const { viewModel: t } = this.state;
            t.notificationsCount.subscribe(this._bindedForceUpdate),
              t.notificationCounterAriaLabel.subscribe(this._bindedForceUpdate),
              t.isActive.subscribe(this._bindedForceUpdate);
          }
          componentWillUnmount() {
            const { viewModel: t } = this.state;
            t.notificationsCount.unsubscribe(this._bindedForceUpdate),
              t.notificationCounterAriaLabel.unsubscribe(
                this._bindedForceUpdate
              ),
              t.isActive.unsubscribe(this._bindedForceUpdate);
          }
          render() {
            const { viewModel: e } = this.state,
              i = e.notificationsCount.value(),
              s = e.notificationCounterAriaLabel.value();
            return o.createElement(t, {
              ...this.props,
              icon: e.icon.value(),
              isActive: e.isActive.value(),
              onClick: e.onClick.value(),
              hint: e.hint.value(),
              count: i,
              counterAriaLabel: s,
            });
          }
        };
      }
      var K = i(878112),
        Y = i(732219),
        G = i(865266),
        J = i(286774);
      const $ = (0, o.forwardRef)(function (t, e) {
        const {
            theme: i = J,
            className: s,
            name: n,
            count: a,
            onClick: r,
            hint: l,
            icon: h,
            isActive: d,
            counterAriaLabel: c,
            NotificationComponent: u = Q,
            ...g
          } = t,
          [p, m] = (0, G.useRovingTabindexElement)(e),
          _ = b(
            s,
            i.button,
            d && i.isActive,
            l && "apply-common-tooltip common-tooltip-vertical"
          ),
          v = o.createElement(
            o.Fragment,
            null,
            o.createElement("div", { className: i.hoverMask }),
            o.createElement(K.Icon, { icon: h }),
            a
              ? o.createElement(
                  "div",
                  { className: i.counterRow },
                  o.createElement(u, {
                    className: i.counter,
                    count: a,
                    ariaLabel: c,
                  })
                )
              : null
          );
        return o.createElement(
          "button",
          {
            ...g,
            "aria-label": l,
            ref: p,
            type: "button",
            className: b(_, i.accessible),
            onClick: r,
            "data-name": n,
            "aria-pressed": d,
            "data-tooltip": l,
            tabIndex: m,
          },
          v
        );
      });
      function Q(t) {
        const { className: e, count: i, ariaLabel: s = "" } = t;
        return o.createElement(Y.Counter, {
          "aria-label": s,
          count: i,
          size: "small",
          className: e,
          compact: !0,
        });
      }
      var tt = i(409174),
        et = i(522224),
        it = i(244693),
        st = i(602069),
        nt = i(677478);
      const at = (0, A.getLogger)("Platform.GUI.RightToolbar"),
        rt = (0, it.registryContextType)();
      class ot extends o.PureComponent {
        constructor(t, e) {
          super(t, e),
            (this._pages = {}),
            (this._isOpeningTradingPanelAvailable = null),
            (this._tradingActivePage = null),
            (this._isTradingPanelOpened = null),
            (this._handleMouseOver = (t) => {
              (0, et.hoverMouseEventFilter)(t) &&
                this.setState({ isHovered: !0 });
            }),
            (this._handleMouseOut = (t) => {
              (0, et.hoverMouseEventFilter)(t) &&
                this.setState({ isHovered: !1 });
            }),
            (this._handleFullscreenChange = (t) => {
              this.setState({ isFullscreen: t });
            }),
            (this._handleCloseClick = () => {
              const { widgetBar: t } = this.context;
              (0, n.ensureDefined)(t.layout).setMinimizedState(!0);
            }),
            (0, it.validateRegistry)(e, { widgetBar: N.any.isRequired });
          const { widgetBar: i } = this.context;
          if (
            ((this._isMinimized = (0, n.ensureDefined)(
              i.layout
            ).isMinimized.spawn()),
            (this._isFullscreen = i.resizerBridge.fullscreen.spawn()),
            i.tradingPanelAccessor)
          ) {
            const t = i.tradingPanelAccessor.tradingPanel;
            (this._isOpeningTradingPanelAvailable =
              t.isOpeningAvailable.spawn()),
              (this._tradingActivePage = t.activePage.spawn()),
              (this._isTradingPanelOpened = t.isOpened.spawn());
          }
          (this.state = {
            isHovered: !1,
            isFullscreen: this._isFullscreen.value(),
          }),
            (0, n.ensureDefined)(i.layout).pages.forEach((t) => {
              void 0 === t.name &&
                at.logWarn('Page does not provide required field "name"');
              const e = t.tab;
              this._pages[t.name] = X(e.TabButtonComponent ?? $, e);
            }),
            (this._toolset = this._createToolset());
        }
        componentDidMount() {
          this._isFullscreen.subscribe(this._handleFullscreenChange);
        }
        componentWillUnmount() {
          this._isFullscreen.destroy(),
            this._isMinimized.destroy(),
            null !== this._isOpeningTradingPanelAvailable &&
              this._isOpeningTradingPanelAvailable.destroy(),
            null !== this._tradingActivePage &&
              this._tradingActivePage.destroy(),
            null !== this._isTradingPanelOpened &&
              this._isTradingPanelOpened.destroy();
        }
        render() {
          const { className: t } = this.props,
            { isHovered: e, isFullscreen: i } = this.state,
            { widgetBar: s } = this.context,
            n = this._toolset;
          return o.createElement(
            F.VerticalScroll,
            {
              isVisibleFade: k.mobiletouch,
              isVisibleButtons: !k.mobiletouch && e,
              isVisibleScrollbar: !1,
              onMouseOver: this._handleMouseOver,
              onMouseOut: this._handleMouseOut,
            },
            o.createElement(
              st.Toolbar,
              {
                className: b(t, nt.toolbar),
                onContextMenu: tt.preventDefaultForContextMenu,
                orientation: "vertical",
                "data-name": "right-toolbar",
              },
              s.adaptive &&
                i &&
                o.createElement(O, {
                  name: "close-button",
                  onClick: this._handleCloseClick,
                }),
              this._renderPages(),
              o.createElement(Z, null),
              this._renderPages(!0),
              n.ScreenerDialogBtn &&
                o.createElement(n.ScreenerDialogBtn, {
                  name: "screener-dialog-button",
                }),
              n.CalendarDialogBtn &&
                o.createElement(n.CalendarDialogBtn, {
                  name: "calendar-dialog-button",
                }),
              n.OptionsBuilderDialogBtn &&
                o.createElement(n.OptionsBuilderDialogBtn, {
                  name: "options-builder-dialog-button",
                }),
              n.CommunityFeedCurtainButton &&
                o.createElement(n.CommunityFeedCurtainButton, {
                  name: "community-feed-curtain-dialog-button",
                }),
              n.SupportTicketButton &&
                o.createElement(n.SupportTicketButton, {
                  name: "bug-report-button",
                }),
              n.NotificationsButton &&
                o.createElement(n.NotificationsButton, {
                  name: "notifications-button",
                }),
              n.HelpButton &&
                o.createElement(n.HelpButton, { name: "help-button" })
            )
          );
        }
        _renderPages(t) {
          const e = [],
            { widgetBar: i } = this.context,
            { pages: s } = (0, n.ensureDefined)(i.layout);
          return (
            s.forEach((i) => {
              const s = i.name;
              if (s in this._pages && Boolean(i.onBottom) === Boolean(t)) {
                const t = this._pages[s];
                e.push(o.createElement(t, { name: s, key: s })),
                  i.spaceBottom &&
                    e.push(o.createElement(q, { key: i.spaceBottomText }));
              }
            }),
            e
          );
        }
        _createToolset() {
          const { widgetBar: t } = this.context,
            e =
              (t.calendarDialogBtnViewModel(),
              t.optionsBuilderDialogBtnViewModel(),
              t.screenerDialogBtnViewModel(),
              t.communityFeedCurtainButtonViewModel()),
            i = t.notificationsButtonViewModel();
          return {
            CalendarDialogBtn: void 0,
            OptionsBuilderDialogBtn: void 0,
            ScreenerDialogBtn: void 0,
            SupportTicketButton: this.props.isSupportTicketButtonAvailable
              ? X($, t.ensureSupportTicketButtonViewModel())
              : void 0,
            HelpButton: this.props.isHelpButtonAvailable
              ? X($, t.ensureHelpButtonViewModel())
              : void 0,
            CommunityFeedCurtainButton:
              this.props.isCommunityFeedCurtainButtonAvailable && e
                ? X($, e)
                : void 0,
            NotificationsButton:
              this.props.isNotificationsButtonAvailable && i ? X($, i) : void 0,
          };
        }
      }
      ot.contextType = rt;
      const lt = { widgetBar: N.any };
      class ht extends o.PureComponent {
        constructor(t) {
          super(t), (this._registry = { widgetBar: this.props.widgetBar });
        }
        render() {
          return o.createElement(
            it.RegistryProvider,
            {
              validation: lt,
              value: this._registry,
            },
            this.props.children
          );
        }
      }
      const dt = I.enabled("hide_right_toolbar_tabs");
      class ct {
        constructor(t, e, i) {
          (this._widgetBar = t),
            (this._container = e),
            (this._options = i),
            dt || this._render();
        }
        updateOptions(t) {
          (this._options = t), dt || this._render();
        }
        destroy() {
          l.unmountComponentAtNode(this._container);
        }
        _render() {
          l.render(
            o.createElement(
              ht,
              { widgetBar: this._widgetBar },
              o.createElement(ot, {
                isHelpButtonAvailable: this._options.isHelpButtonAvailable,
                isSupportTicketButtonAvailable:
                  this._options.isSupportTicketButtonAvailable,
                isCalendarDialogBtnAvailable:
                  this._options.isCalendarDialogBtnAvailable,
                isOptionsBuilderDialogBtnAvailable:
                  this._options.isOptionsBuilderDialogBtnAvailable,
                isScreenerDialogBtnAvailable:
                  this._options.isScreenerDialogBtnAvailable,
                isCommunityFeedCurtainButtonAvailable:
                  this._options.isCommunityFeedCurtainButtonAvailable,
                isNotificationsButtonAvailable:
                  this._options.isNotificationsButtonAvailable,
              })
            ),
            this._container
          );
        }
      }
      var ut = i(167645);
      const gt = a.t(null, void 0, i(281982)),
        pt = a.t(null, void 0, i(40305));
      function mt(t) {
        const e = b(
          t.className,
          "apply-common-tooltip",
          "common-tooltip-vertical",
          "common-tooltip-otl"
        );
        return o.createElement(
          "div",
          { className: e, onClick: t.onClick, title: t.isMinimized ? pt : gt },
          o.createElement(ut.VerticalToolbarHider, {
            direction: t.isMinimized ? "left" : "right",
          })
        );
      }
      class _t {
        constructor(t = {}) {
          (this.MIN_WIDTH = 200),
            (this.MINIMIZE_THRESHOLD = 50),
            (this.activeIndex = _t.activeIndex),
            (this.activeName = _t.activeName),
            (this.minimized = _t.minimized),
            (this.visible = _t.visible),
            (this.width = _t.width),
            (this.version = _t.version),
            (this.pages = []),
            (this.isMinimized = new h.WatchedValue()),
            (this.activePageIndex = new h.WatchedValue(this.activeIndex)),
            (this.tabRenderer = null),
            (this.rightToolbarOptions = {
              isSupportTicketButtonAvailable: I.enabled("bugreport_button"),
              isHelpButtonAvailable: !I.enabled("widget") && !1,
              isCalendarDialogBtnAvailable: !1,
              isOptionsBuilderDialogBtnAvailable: !1,
              isScreenerDialogBtnAvailable: !1,
              isCommunityFeedCurtainButtonAvailable: !1,
              isNotificationsButtonAvailable: !1,
            }),
            (this._tabs = null),
            (this._pages = null),
            (this._pagescontent = null),
            (this._handle = null),
            (this._deviceButton = null),
            (this._hider = null),
            (this._draggable = null),
            (this._shouldHideWidgetBar = I.enabled("hide_right_toolbar")),
            (this._shouldHideWidgetBarTabs = I.enabled(
              "hide_right_toolbar_tabs"
            )),
            (this.widgetBar = t.widgetBar),
            (this._rightToolbar = Boolean(t.rightToolbar));
        }
        element(t) {
          switch (t) {
            case "tabs":
              return this._tabs;
            case "pages":
              return this._pages;
            case "pages-content":
              return this._pagescontent;
            case "handle":
              return this._handle;
            case "device-button":
              return this._deviceButton;
            case "hider":
              return this._hider;
            default:
              return null;
          }
        }
        widget(t) {
          for (const e of this.pages) {
            const i = e.widget(t);
            if (i) return i;
          }
          return null;
        }
        startWidgets() {
          this.pages.forEach((t) => {
            t.widgets.forEach((t) => {
              t.widgetObject ||
                t.widgetStartDelayed ||
                setTimeout(() => {
                  t.startWidget();
                }, 0);
            });
          });
          const t = this.getActivePage();
          t && t.onActiveStateChange(!0);
        }
        syncHeight() {
          const t = (0, n.ensureDefined)(
            this.widgetBar
          ).resizerBridge.height.value();
          if (
            (null !== this._pages && (this._pages.style.height = t + "px"),
            !this.minimized)
          ) {
            const t = this.getActivePage();
            t && t.updateWidgetsHeight();
          }
        }
        tabsWidth() {
          return this._shouldHideWidgetBarTabs
            ? 0
            : this._rightToolbar
            ? 45
            : this.minimized
            ? 5
            : 0;
        }
        borderWidth() {
          return 1 * (this.minimized ? 0 : 1);
        }
        canOpen() {
          if (this._shouldHideWidgetBar) return !1;
          const t = (0, n.ensureDefined)(this.widgetBar);
          return (
            t.affectsLayout() &&
            this.MIN_WIDTH + this.tabsWidth() + this.borderWidth() <=
              t.resizerBridge.availWidth.value()
          );
        }
        requestWidth(t) {
          const e = (0, n.ensureDefined)(this.widgetBar).resizerBridge;
          let i = this.tabsWidth();
          i > 0 && (i += this.borderWidth());
          const s = t + i;
          this.canOpen()
            ? e.width.value() !== s &&
              e.negotiateWidth([
                { min: i, max: i },
                { min: this.MIN_WIDTH + i, max: s },
              ])
            : e.negotiateWidth(0);
        }
        requestOptimalWidth() {
          this.minimized ? this.requestWidth(0) : this.requestWidth(this.width);
        }
        updateResponsiveness() {
          const t = !this.canOpen();
          this._tabs?.classList.toggle("js-hidden", t),
            this._pages?.classList.toggle("js-hidden", t);
        }
        changeWidgetBarVisibility(t) {
          (this._shouldHideWidgetBar = !t), this.updateResponsiveness();
        }
        syncWidth() {
          const t = (0, n.ensureDefined)(this.widgetBar).resizerBridge,
            e = this.tabsWidth(),
            i = this.borderWidth(),
            s = t.width.value(),
            a = Math.max(s - e - i, 0) || 0;
          a < this.MINIMIZE_THRESHOLD
            ? this.setMinimizedState(!0)
            : this.setMinimizedState(!1);
          const r = this._pages;
          if (
            (r &&
              ((r.style.width = a + "px"),
              r.classList.toggle("hidden", !!this.minimized)),
            !this.minimized)
          ) {
            const t = this.getActivePage();
            t &&
              t.widgets.forEach((t) => {
                t.onWidthChange(a);
              }),
              this.widgetBar && this.widgetBar.loadWidgets();
          }
          const o = !this.canOpen();
          this._deviceButton &&
            this._deviceButton.classList.toggle(
              "js-hidden",
              !o || !this.minimized
            );
        }
        setMinimizedState(t) {
          const e = Boolean(t);
          !!this.minimized !== e &&
            ((this.minimized = e),
            this.isMinimized.setValue(this.minimized),
            e &&
              (0, n.ensureDefined)(
                this.widgetBar
              ).resizerBridge.exitFullscreen(),
            this.requestOptimalWidth(),
            this.activeIndex >= 0 &&
              this.pages[this.activeIndex].onActiveStateChange(
                !this.minimized
              ));
        }
        switchPage(t) {
          if (-1 === t || 0 === this.pages.length)
            return (
              (this.activeIndex = -1),
              void this.activePageIndex.setValue(this.activeIndex)
            );
          let e;
          if (t instanceof V) {
            if (((e = this.pages.indexOf(t)), -1 === e)) return;
          } else e = +t;
          const i = this.pages[this.activeIndex];
          (this.activeIndex = Math.min(this.pages.length - 1, Math.max(0, e))),
            this.activePageIndex.setValue(this.activeIndex);
          const s = this.pages[this.activeIndex];
          (this.activeName = s.name || ""),
            this.minimized ||
              (i && i === s) ||
              (i && i.onActiveStateChange(!1),
              s && (s.onActiveStateChange(!0), this.syncWidth()));
        }
        getActivePage() {
          return this.minimized ? null : this.pages[this.activeIndex] || null;
        }
        getWidgetByType(t) {
          const e = this.getActivePage()?.widgets;
          if (e) return e.find((e) => e.type === t);
        }
        onTabClick(t, e) {
          if (t.isDefaultPrevented()) return;
          const i = this.pages.indexOf(e);
          if (-1 !== i) {
            if (
              (t.preventDefault(),
              this._trackClick(e.name),
              i !== this.activeIndex || this.minimized)
            ) {
              const t = e.gaEvent();
              t && (0, x.trackEvent)("Platform Widgets", t),
                this.switchPage(i),
                this.minimized && this.setMinimizedState(!1);
            } else this.setMinimizedState(!0);
            this.widgetBar && this.widgetBar.saveToTVSettings();
          }
        }
        removePage(t) {
          const e = this.pages.indexOf(t);
          if (-1 === e) return;
          delete t.widgetBarLayout, this.pages.splice(e, 1);
          const i = t.element();
          i?.remove(), this.activeIndex === e && this.switchPage(e - 1);
        }
        createPage() {
          const t = new V({ widgetBarLayout: this });
          this.pages.push(t), t.createHTML();
          const e = (0, n.ensureNotNull)(t.element());
          return this._pagescontent?.append(e), t;
        }
        createWidget(t, e) {
          if (e) {
            if (-1 === this.pages.indexOf(e)) return null;
          } else e = this.createPage();
          const i = new P({ widgetBarPage: e });
          return i.demarshal({ type: t }), i.createHTML(), e.attachWidget(i), i;
        }
        onVisibilityChange() {
          const t = !(
            !this.widgetBar || !this.widgetBar.resizerBridge.visible.value()
          );
          (this.visible = t),
            this.pages.forEach((e) => {
              e.onVisibilityChange(t);
            });
        }
        destroy() {
          this.widgetBar &&
            this.widgetBar.layout === this &&
            delete this.widgetBar.layout,
            this.tabRenderer &&
              (this.tabRenderer.destroy(), (this.tabRenderer = null)),
            this._hider && l.unmountComponentAtNode(this._hider);
          for (let t = this.pages.length; t--; ) {
            const e = this.pages[t];
            for (let t = e.widgets.length; t--; ) e.widgets[t].destroy();
          }
          this._tabs?.remove(),
            this._pages?.remove(),
            this._pagescontent?.remove(),
            this._handle?.remove(),
            this._deviceButton?.remove(),
            this._hider?.remove();
        }
        updateRightToolbar() {
          this.tabRenderer?.updateOptions(this.rightToolbarOptions);
        }
        createHTML() {
          const t = (0, n.ensureDefined)(this.widgetBar);
          if (this._rightToolbar) {
            const e = (this._tabs = document.createElement("div"));
            this._shouldHideWidgetBarTabs ||
              (e.classList.value = "widgetbar-tabs"),
              this.tabRenderer &&
                (this.tabRenderer.destroy(), (this.tabRenderer = null)),
              this._shouldHideWidgetBarTabs ||
                (this.tabRenderer = new ct(t, e, this.rightToolbarOptions));
          }
          const e = (this._pages = document.createElement("div"));
          this._shouldHideWidgetBarTabs
            ? ((e.classList.value = "widgetbar-pages-no-tabs"),
              e.setAttribute("data-name", "widgetbar-pages-no-tabs"))
            : ((e.classList.value = "widgetbar-pages"),
              e.setAttribute("data-name", "widgetbar-pages-with-tabs"));
          const i = (this._pagescontent = document.createElement("div"));
          (i.classList.value = "widgetbar-pagescontent"),
            e.appendChild(i),
            this._rightToolbar || (this._pages.style.right = "-1px");
          const s = (this._handle = document.createElement("div"));
          if (
            ((s.classList.value = "widgetbar-handle"),
            e.appendChild(s),
            s.addEventListener("contextmenu", (t) => {
              t.target === s && t.preventDefault();
            }),
            this._createDraggable(s),
            t.showCloseButton)
          ) {
            const t = (this._hider = document.createElement("div"));
            t.classList.value = "widgetbar-hider";
            const e = () => {
              t.classList.toggle(
                "widgetbar-hider--closed",
                this.isMinimized.value()
              ),
                t.classList.toggle(
                  "js-hidden",
                  this._rightToolbar && this.isMinimized.value()
                ),
                l.render(
                  o.createElement(mt, {
                    isMinimized: this.isMinimized.value(),
                    onClick: () => {
                      this.setMinimizedState(!this.minimized);
                    },
                  }),
                  t
                );
            };
            this.isMinimized.subscribe(e), e();
          }
          this.pages.forEach((t) => {
            t.createHTML();
            const e = t.element();
            e && i.appendChild(e);
          });
        }
        demarshal(t) {
          if ("string" == typeof t)
            try {
              t = JSON.parse(t);
            } catch (t) {}
          if ("object" != typeof t) return null;
          (this.width = Number(t.width)),
            !isFinite(this.width) || this.width <= 0
              ? (this.width = _t.width)
              : this.width < this.MIN_WIDTH && (this.width = this.MIN_WIDTH),
            "minimized" in t
              ? ((this.minimized = Boolean(t.minimized)),
                this.isMinimized.setValue(this.minimized))
              : ((this.minimized = _t.minimized),
                this.isMinimized.setValue(this.minimized)),
            "version" in t && (this.version = t.version);
          let e = Number(t.activeIndex);
          const i = t.activeName;
          let s = !1;
          const n = this.pages;
          return (
            n.splice(0, this.pages.length),
            Array.isArray(t.pages) &&
              t.pages.forEach((t, a) => {
                const r = new V({ widgetBarLayout: this }).demarshal(t);
                i
                  ? t.name === i && r && ((e = a), (s = !0))
                  : r || a !== e || e--,
                  r && n.push(r);
              }),
            i && !s && (e = 0),
            0 === n.length
              ? ((this.activeIndex = -1),
                this.activePageIndex.setValue(this.activeIndex))
              : e >= 0 &&
                e < n.length &&
                ((this.activeIndex = e),
                this.activePageIndex.setValue(this.activeIndex)),
            this
          );
        }
        marshal() {
          let t = [];
          this.pages.forEach((e) => {
            const i = e.marshal();
            i && (t = t.concat(i));
          });
          const e = {};
          for (let i = 0; i < t.length; i++) {
            const s = t[i].type;
            s &&
              (t[i].id && delete t[i].type,
              e[s] ? e[s].push(t[i]) : (e[s] = [t[i]]));
          }
          const i = { widgets: e, settings: {} };
          return (
            this.minimized !== _t.minimized &&
              (i.settings.minimized = this.minimized),
            this.width !== _t.width && (i.settings.width = this.width),
            this.activeIndex !== _t.activeIndex &&
              (i.settings.activeIndex = this.activeIndex),
            this.activeName !== _t.activeName &&
              (i.settings.activeName = this.activeName),
            this.version !== _t.version && (i.settings.version = this.version),
            i
          );
        }
        _createDraggable(t) {
          null !== this._draggable && this._draggable.destroy();
          const e = { initialWidth: 0 };
          this._draggable = new z.PointerBackend({
            handle: t,
            onDragStart: (t) => {
              this.widgetBar
                ? (e.initialWidth = Math.max(
                    this.widgetBar.resizerBridge.width.value() -
                      this.tabsWidth() -
                      this.borderWidth(),
                    0
                  ))
                : t.preventDefault();
            },
            onDragMove: (t) => {
              const { current: i, initial: s } = t.detail,
                n = i.pageX - s.pageX;
              let a = e.initialWidth - n;
              a < this.MINIMIZE_THRESHOLD
                ? this.setMinimizedState(!0)
                : (a < this.MIN_WIDTH && (a = this.MIN_WIDTH),
                  (this.width = a),
                  this.minimized
                    ? this.setMinimizedState(!1)
                    : this.requestWidth(a));
            },
            onDragStop: (t) => {
              this.widgetBar && this.widgetBar.saveToTVSettings();
            },
          });
        }
        _trackClick(t) {
          0;
        }
      }
      (_t.width = 290),
        (_t.minimized = !I.enabled("show_right_widgets_panel_by_default")),
        (_t.activeIndex = 0),
        (_t.activeName = ""),
        (_t.visible = !0),
        (_t.version = void 0);
      var vt = i(247465),
        wt = i(344557),
        bt = i(235354),
        ft = i(61121),
        yt = i(731503),
        Ct = i(178911);
      const Bt = I.enabled("right_toolbar"),
        St = I.enabled("keep_object_tree_widget_in_right_toolbar"),
        xt = I.enabled("show_object_tree");
      class Et {
        constructor(t) {
          (this._wrap = null),
            (this._tradingServiceCancelable = null),
            (this.options = t),
            (this._load = () => {});
          const e = new Promise((t) => {
            this._load = t;
          });
          const i = this.options.configuration;
          this._configuration = Promise.race([(0, ft.delay)(null, 5e3), e])
            .then(() => i())
            .then((t) => {
              const e = this.widgetConfig;
              return (
                (e.reuters_calendar.ctor = t.ReutersCalendarWidget),
                (e.earnings_calendar.ctor = t.CalendarWidget),
                (e.watchlist.ctor = t.Watchlist),
                (e.hotlist.ctor = t.HotlistWidget),
                (e.detail.ctor = t.Detail && t.Detail.Widget),
                (e.news.ctor = t.NewsWidget),
                (e.notifications_following.ctor = t.IdeasFeedWidget),
                (e.unionchats.ctor = t.UnionChatsWidget),
                (e.notes.ctor = t.NotesWidget),
                (e.alerts.ctor = t.AlertsWidget),
                (e.datawindow.ctor = t.DataWindowWidget),
                ((0, n.ensure)(e.object_tree).ctor = t.ObjectTreeWidget),
                t
              );
            });
          const a = (this.resizerBridge = t.resizerBridge);
          (this.adaptive = Boolean(t.adaptive)),
            (this.tradingPanelAccessor = t.tradingPanelAccessor || null),
            (this._visible = (0, r.combine)(
              (t, e, i) => Boolean(t && e && i),
              a.width.weakReference(),
              a.height.weakReference(),
              a.visible.weakReference()
            )),
            (this.widgetConfig = (0, s.default)({}, v)),
            t.widgetConfig &&
              (this.widgetConfig = (0, s.default)(
                this.widgetConfig,
                t.widgetConfig
              )),
            (this.layout = new _t({ widgetBar: this, rightToolbar: Bt })),
            (this._customization = t.customization || {}),
            t.chartWidgetCollection &&
              (this.chartWidgetCollection = t.chartWidgetCollection),
            t.state
              ? this.layout.demarshal(t.state)
              : t.settingsPrefix &&
                ((this._settingsPrefix = String(t.settingsPrefix)),
                this.loadFromTVSettings()),
            t.readonly && (this.readonly = !0),
            t.fixedMode && (this.fixedMode = !0),
            t.showCloseButton && (this.showCloseButton = !0),
            (this._container = this.resizerBridge.container.value()),
            this.createHTML(),
            this.initLayout(),
            window.loginStateChange.subscribe(this, this.onLoginStateChange),
            this.resizerBridge.width.subscribe(() => {
              this.layout?.syncWidth();
            }),
            this.resizerBridge.height.subscribe(() => {
              this.layout?.syncHeight();
            }),
            this.resizerBridge.visible.subscribe(() => {
              this.layout?.onVisibilityChange(),
                this.layout?.requestOptimalWidth();
            }),
            this.resizerBridge.availWidth.subscribe(() => {
              this.layout?.requestOptimalWidth(),
                this.layout?.updateResponsiveness();
            }),
            (this._tradingServiceCancelable = (0, vt.makeCancelable)(
              (0, wt.waitTradingService)()
            )),
            this._tradingServiceCancelable.promise.then((t) => {
              (this._tradingServiceCancelable = null),
                t.onConnectionStatusChange.subscribe(
                  this,
                  this._onBrokerConnectionStatusChanged
                );
            });
        }
        destroy() {
          if (null !== this._tradingServiceCancelable)
            this._tradingServiceCancelable.cancel(),
              (this._tradingServiceCancelable = null);
          else {
            (0, n.ensureNotNull)(
              (0, wt.tradingService)()
            ).onConnectionStatusChange.unsubscribe(
              this,
              this._onBrokerConnectionStatusChanged
            );
          }
          this.layout?.destroy();
        }
        widget(t) {
          return this.layout ? this.layout.widget(t) : null;
        }
        isVisible() {
          const t = this.resizerBridge;
          return Boolean(
            t.visible.value() && t.height.value() && t.width.value()
          );
        }
        affectsLayout() {
          return this.options.affectsLayout();
        }
        visible() {
          return this._visible;
        }
        initLayout() {
          this.options.instantLoad && this._load(),
            this.layout &&
              (this._configuration.then(() => {
                this.layout?.startWidgets();
              }),
              0 === this.layout.pages.length &&
                (this.layout.setMinimizedState(!0),
                this.layout.element("handle")?.classList.add("js-hidden")),
              this.layout.requestOptimalWidth(),
              this.layout.syncWidth(),
              this.layout.syncHeight(),
              this.layout.onVisibilityChange(),
              this.layout.updateResponsiveness());
        }
        loadWidgets() {
          this._widgetsLoadRequested ||
            ((this._widgetsLoadRequested = !0), this._load());
        }
        onLoginStateChange(t) {
          t ||
            (window.is_authenticated &&
              (this.dropWidgetData(), this.refreshFromTVSettings()));
        }
        dropWidgetData() {
          for (const t in this.widgetConfig)
            delete (0, n.ensure)(this.widgetConfig[t]).data;
        }
        refreshFromTVSettings() {
          if (!this._settingsPrefix) return;
          this.layout && this.layout.destroy(),
            (this.layout = new _t({ widgetBar: this, rightToolbar: Bt })),
            this.loadFromTVSettings(),
            this.layout.createHTML();
          const t = this.layout.element("pages");
          t && this._wrap?.appendChild(t);
          const e = this.layout.element("tabs");
          e && this._wrap?.appendChild(e);
          const i = this.layout.element("hider");
          i && this._wrap?.appendChild(i), this.initLayout();
        }
        getWidgets(t) {
          let e = [];
          if (!this.layout) return e;
          for (let i = 0; i < this.layout.pages.length; ++i)
            e = e.concat(this.layout.pages[i].getWidgets(t));
          return e;
        }
        loadFromTVSettings() {
          if (!this._settingsPrefix) return;
          if (!this.layout) return;
          let t = this.getLayoutState();
          (t = this.mergeProperties(t)),
            this.layout.demarshal(t),
            this.saveToTVSettings();
          const e = this._getSerializedStateFromSetting();
          if (e) {
            let t = [];
            for (const i in e.widgets) {
              const s = e.widgets[i];
              t = t.concat(s.map((t) => t.id));
            }
            const i = E.keysMask(this._settingsPrefix + ".widget.*.*");
            i &&
              i.forEach((e) => {
                const i = e.replace(this._settingsPrefix + ".widget.", "");
                -1 === t.indexOf(i) &&
                  0 === e.indexOf(this._settingsPrefix + ".widget.") &&
                  ((0, x.trackEvent)(
                    "Settings debug",
                    "loadFromTVSettings: " + e,
                    window.user.username
                  ),
                  E.remove(e));
              });
          }
        }
        mergeProperties(t) {
          const e = this._getSerializedStateFromSetting();
          if (!e) return t;
          e.settings && Object.assign(t, e.settings);
          const i = {};
          for (let s = 0; s < t.pages.length; s++)
            for (let n = 0; n < t.pages[s].widgets.length; n++) {
              const a = t.pages[s].widgets[n],
                r = i[a.type] || 0;
              e.widgets[a.type] &&
                e.widgets[a.type][r] &&
                Object.assign(a, e.widgets[a.type][r]),
                (i[a.type] = r + 1);
            }
          return t;
        }
        saveToTVSettings() {
          if (!this._settingsPrefix) return;
          if (!this.layout) return;
          const t = this.layout.marshal();
          this._setSerializedStateToSettings(t);
        }
        getWidgetProperties(t, e = 0) {
          const i =
            (0, n.ensure)(this._settingsPrefix).replace(/\W/g, "\\$&") +
            ".widget.";
          let s = E.keysMask(i + t + ".*");
          return s && s.length && ((s = s.sort()), s[e])
            ? { id: s[e].replace(i, "") }
            : null;
        }
        getGenericLayoutState(t) {
          const e = (0, bt.getDefaultState)(),
            s = [
              {
                _gaEvent: "General Widget",
                title: a.t(null, void 0, i(162818)),
                name: "base",
                icon: "base",
                widgets: [
                  {
                    type: "watchlist",
                    properties: t && t.length ? { list: t } : void 0,
                  },
                  { type: "detail" },
                  { type: "news", isEnabled: !0 },
                ],
              },
              I.enabled("alerts")
                ? {
                    _gaEvent: "Alerts",
                    title: a.t(null, void 0, i(336620)),
                    name: "alerts",
                    icon: "alarm-clock",
                    TabButtonComponent: void 0,
                    widgets: [{ type: "alerts", properties: {} }],
                    createCounterAriaLabel: void 0,
                  }
                : null,
              {
                _gaEvent: "Data Window",
                title: a.t(null, void 0, i(748741)),
                name: "data-window",
                icon: "datawindow",
                TabButtonComponent: void 0,
                widgets: [{ type: "datawindow" }],
              },
              null,
              {
                _gaEvent: "Calendar",
                title: a.t(null, void 0, i(839643)),
                name: "calendar",
                icon: "calendar",
                widgets: [
                  { type: "reuters_calendar", properties: {} },
                  { type: "earnings_calendar", properties: {} },
                ],
              },
              I.enabled("hide_ideas_page") ||
              isFeatureEnabled("show_community_feed_button")
                ? null
                : {
                    _gaEvent: "My Ideas",
                    title: a.t(null, void 0, i(926647)),
                    name: "notes",
                    icon: "notes",
                    spaceBottom: !0,
                    spaceBottomText: a.t(null, void 0, i(134504)),
                    widgets: [{ type: "notes" }],
                  },
              I.enabled("hide_chats_page")
                ? null
                : {
                    _gaEvent: "Chats",
                    title: a.t(null, void 0, i(623633)),
                    name: "union_chats",
                    icon: "messages",
                    widgets: [{ type: "unionchats" }],
                  },
              I.enabled("hide_ideas_streams_page") ||
              isFeatureEnabled("show_community_feed_button")
                ? null
                : {
                    _gaEvent: "Ideas Stream",
                    title: a.t(null, void 0, i(974420)),
                    name: "ideas_stream",
                    icon: "ideas-stream",
                    widgets: [{ type: "notifications_following" }],
                  },
              null,
            ];
          for (let t = 0; t < s.length; t++) {
            const i = s[t];
            i && e.pages.push(i);
          }
          return e;
        }
        getChartingPlatformLayoutState(t, e) {
          const s = (0, bt.getDefaultState)();
          if (
            this._customization.watchlist ||
            this._customization.details ||
            this._customization.news
          ) {
            let n = "";
            const r = [];
            this._customization.watchlist &&
              ((n = a.t(null, void 0, i(512504))),
              r.push({
                type: "watchlist",
                id: "watchlist." + e,
                properties: t && t.length ? { list: t } : void 0,
              })),
              this._customization.details &&
                ((n = this._customization.watchlist
                  ? a.t(null, void 0, i(819134))
                  : a.t(null, void 0, i(278892))),
                r.push({ type: "detail" })),
              this._customization.news &&
                ((n =
                  this._customization.watchlist && this._customization.details
                    ? a.t(null, void 0, i(331165))
                    : this._customization.watchlist
                    ? a.t(null, void 0, i(929848))
                    : a.t(null, void 0, i(338333))),
                r.push({ type: "news", id: "news." + e })),
              s.pages.push({
                name: "base",
                title: n,
                icon: "base",
                widgets: r,
              });
          }
          return (
            this._customization.datawindow &&
              s.pages.push({
                title: a.t(null, void 0, i(748741)),
                name: "data-window",
                icon: "datawindow",
                widgets: [{ type: "datawindow" }],
              }),
            (Bt || (St && !Bt)) &&
              xt &&
              this.chartWidgetCollection &&
              !this.chartWidgetCollection.readOnly() &&
              s.pages.push({
                title: a.t(null, void 0, i(279298)),
                name: "object_tree",
                icon: "object-tree",
                onBottom: !1,
                widgets: [{ type: "object_tree" }],
              }),
            s
          );
        }
        getLayoutState() {
          const t = E.getJSON("watchlist.list", []);
          let e;
          e = I.enabled("trading_terminal")
            ? this.getChartingPlatformLayoutState(t, "terminal")
            : this.getGenericLayoutState(t);
          const i = (t) =>
            !(void 0 !== t.isEnabled && !t.isEnabled) &&
            (this.chartWidgetCollection ||
              !(0, n.ensure)(v[t.type]).chartWidgetRequired);
          for (let t = e.pages.length - 1; t >= 0; t--) {
            const s = e.pages[t];
            s.widgets = s.widgets.filter(i);
          }
          return (
            (e.pages = e.pages.filter((t) => t.widgets && t.widgets.length)), e
          );
        }
        createWidgetId(t) {
          return t + "." + (0, H.randomHash)();
        }
        setPage(t) {
          if (!this.layout) return null;
          this.layout.setMinimizedState(!1);
          let e = this.layout.activeIndex;
          return (
            this.layout.pages.forEach((i, s) => {
              i.name === t && (e = s);
            }),
            this.layout.switchPage(e),
            this.layout.getActivePage()
          );
        }
        ensureSupportTicketButtonViewModel() {
          return (
            this._supportTicketButtonViewModel ||
              (this._supportTicketButtonViewModel = new c({
                icon: yt,
                hint: a.t(null, void 0, i(96052)),
                onClick: () => {
                  this._configuration.then((t) => {
                    const e = t.showSupportDialog;
                    e && e();
                  }),
                    this._load();
                },
              })),
            this._supportTicketButtonViewModel
          );
        }
        optionsBuilderDialogBtnViewModel() {}
        ensureHelpButtonViewModel() {
          if (this._helpButtonViewModel) return this._helpButtonViewModel;
          {
            const t = this.ensureSupportTicketButtonViewModel();
            this._helpButtonViewModel = new c({
              icon: Ct,
              hint: a.t(null, void 0, i(96052)),
              onClick: t.onClick.value(),
            });
          }
          return this._helpButtonViewModel;
        }
        calendarDialogBtnViewModel() {}
        getCalendarDialogViewModel() {
          return this._calendarDialogViewModel;
        }
        screenerDialogBtnViewModel() {}
        communityFeedCurtainButtonViewModel() {}
        notificationsButtonViewModel() {}
        openNotificationsView() {
          const t = this.notificationsButtonViewModel();
          t && t.handleClick();
        }
        createHTML() {
          const t = this._container;
          if (!t) return;
          if (!this.layout) return;
          (t.innerHTML = ""), this.layout.createHTML();
          const e = (this._wrap = document.createElement("div"));
          (e.classList.value = "widgetbar-wrap unselectable"),
            e.setAttribute("data-name", "widgetbar-wrap"),
            t.appendChild(e);
          const i = this.layout.element("tabs");
          Bt && i && this._wrap.appendChild(i);
          const s = this.layout.element("pages");
          s && this._wrap.appendChild(s);
          const n = this.layout.element("device-button");
          n && this._wrap.appendChild(n);
          const a = this.layout.element("hider");
          a && this._wrap.appendChild(a);
        }
        getWrapElement() {
          return this._wrap;
        }
        _getSerializedStateFromSetting() {
          return this._settingsPrefix
            ? E.getJSON(this._settingsPrefix + ".layout-settings", null)
            : null;
        }
        _setSerializedStateToSettings(t) {
          this._settingsPrefix &&
            E.setJSON(this._settingsPrefix + ".layout-settings", t);
        }
        _onBrokerConnectionStatusChanged() {
          0;
        }
      }
    },
    496818: (t, e, i) => {
      "use strict";
      i.d(e, { Draggable: () => a, PointerBackend: () => r });
      var s = i(650151),
        n = i(821205);
      i(492575);
      class a {
        constructor(t) {
          (this._helper = null),
            (this._handleDragStart = (t) => {
              if (null !== this._helper) return;
              const e = this._source;
              e.classList.add("ui-draggable-dragging");
              const [i, s] = [(0, n.outerWidth)(e), (0, n.outerHeight)(e)];
              (this._helper = {
                startTop: parseFloat(e.style.top) || 0,
                startLeft: parseFloat(e.style.left) || 0,
                nextTop: null,
                nextLeft: null,
                raf: null,
                size: [i, s],
                containment:
                  this._containment instanceof HTMLElement
                    ? [
                        parseInt(
                          getComputedStyle(this._containment).borderLeftWidth
                        ) +
                          parseInt(
                            getComputedStyle(this._containment).paddingLeft
                          ),
                        parseInt(
                          getComputedStyle(this._containment).borderTopWidth
                        ) +
                          parseInt(
                            getComputedStyle(this._containment).paddingTop
                          ),
                        this._containment.offsetWidth -
                          parseInt(
                            getComputedStyle(this._containment).borderRightWidth
                          ) -
                          parseInt(
                            getComputedStyle(this._containment).paddingRight
                          ) -
                          parseInt(getComputedStyle(e).marginLeft) -
                          parseInt(getComputedStyle(e).marginRight) -
                          i,
                        this._containment.offsetHeight -
                          parseInt(
                            getComputedStyle(this._containment)
                              .borderBottomWidth
                          ) -
                          parseInt(
                            getComputedStyle(this._containment).paddingBottom
                          ) -
                          parseInt(getComputedStyle(e).marginTop) -
                          parseInt(getComputedStyle(e).marginBottom) -
                          s,
                      ]
                    : "window" === this._containment
                    ? [
                        window.scrollX,
                        window.scrollY,
                        window.scrollX +
                          document.documentElement.offsetWidth -
                          i,
                        window.scrollY +
                          document.documentElement.offsetHeight -
                          s,
                      ]
                    : null,
              }),
                this._start?.();
            }),
            (this._handleDragMove = (t) => {
              if (null === this._helper) return;
              const { current: e, initial: i } = t.detail,
                s = this._source,
                n = this._helper.nextTop,
                a = this._helper.nextLeft,
                r =
                  "y" === this._axis || !1 === this._axis || 0 !== e.movementY;
              if (r) {
                const t = this._helper.startTop;
                isFinite(t) &&
                  (this._helper.nextTop = e.clientY - i.clientY + t);
              }
              const o =
                "x" === this._axis || !1 === this._axis || 0 !== e.movementY;
              if (o) {
                const t = this._helper.startLeft;
                isFinite(t) &&
                  (this._helper.nextLeft = e.clientX - i.clientX + t);
              }
              if (null !== this._helper.containment) {
                const [t, e, i, s] = this._helper.containment;
                r &&
                  this._helper.nextTop &&
                  ((this._helper.nextTop = Math.min(this._helper.nextTop, s)),
                  (this._helper.nextTop = Math.max(this._helper.nextTop, e))),
                  o &&
                    this._helper.nextLeft &&
                    ((this._helper.nextLeft = Math.min(
                      this._helper.nextLeft,
                      i
                    )),
                    (this._helper.nextLeft = Math.max(
                      this._helper.nextLeft,
                      t
                    )));
              }
              null !== this._helper.raf ||
                (n === this._helper.nextTop && a === this._helper.nextLeft) ||
                (this._helper.raf = requestAnimationFrame(() => {
                  null !== this._helper &&
                    (null !== this._helper.nextTop &&
                      ((s.style.top = this._helper.nextTop + "px"),
                      (this._helper.nextTop = null)),
                    null !== this._helper.nextLeft &&
                      ((s.style.left = this._helper.nextLeft + "px"),
                      (this._helper.nextLeft = null)),
                    (this._helper.raf = null));
                })),
                this._drag?.();
            }),
            (this._handleDragStop = (t) => {
              if (null === this._helper) return;
              this._source.classList.remove("ui-draggable-dragging"),
                (this._helper = null),
                this._stop?.();
            });
          const e = (this._source = t.source);
          e.classList.add("ui-draggable");
          const i = (this._handle =
            (t.handle ? e.querySelector(t.handle) : null) ?? e);
          i.classList.add("ui-draggable-handle"),
            (this._start = t.start),
            (this._stop = t.stop),
            (this._drag = t.drag),
            (this._backend = new r({
              handle: i,
              onDragStart: this._handleDragStart,
              onDragMove: this._handleDragMove,
              onDragStop: this._handleDragStop,
            })),
            (this._axis = t.axis ?? !1),
            (this._containment = t.containment);
        }
        destroy() {
          const t = this._source;
          t.classList.remove("ui-draggable"),
            t.classList.remove("ui-draggable-dragging");
          this._handle.classList.remove("ui-draggable-handle"),
            this._backend.destroy(),
            null !== this._helper &&
              (this._helper.raf && cancelAnimationFrame(this._helper.raf),
              (this._helper = null));
        }
      }
      class r {
        constructor(t) {
          (this._pointerStarted = !1),
            (this._initial = null),
            (this._handlePointerDown = (t) => {
              if (null !== this._initial || 0 !== t.button) return;
              if (
                !(
                  t.target instanceof Element && this._handle.contains(t.target)
                )
              )
                return;
              if (
                ((this._initial = t),
                !this._distance &&
                  (this._pointerStart(), !this._pointerStarted))
              )
                return;
              t.preventDefault();
              const e = this._getEventTarget();
              e.addEventListener("pointermove", this._handlePointerMove),
                e.addEventListener("pointerup", this._handlePointerUp),
                e.addEventListener("pointercancel", this._handlePointerUp),
                e.addEventListener(
                  "lostpointercapture",
                  this._handleLostPointerCapture
                );
            }),
            (this._handleLostPointerCapture = (t) => {
              this._getEventTarget() === t.target && this._handlePointerUp(t);
            }),
            (this._handlePointerMove = (t) => {
              if (
                null !== this._initial &&
                this._initial.pointerId === t.pointerId
              )
                if (this._pointerStarted) this._pointerDrag(t);
                else if (this._pointerDistanceMet(t)) {
                  if ((this._pointerStart(), this._pointerStarted))
                    return void this._pointerDrag(t);
                  this._handlePointerUp(t);
                }
            }),
            (this._handlePointerUp = (t) => {
              if (
                null === this._initial ||
                this._initial.pointerId !== t.pointerId
              )
                return;
              t.preventDefault();
              const e = this._getEventTarget();
              e.removeEventListener("pointermove", this._handlePointerMove),
                e.removeEventListener("pointerup", this._handlePointerUp),
                e.removeEventListener("pointercancel", this._handlePointerUp),
                e.removeEventListener(
                  "lostpointercapture",
                  this._handlePointerUp
                ),
                this._pointerStarted &&
                  ((this._pointerStarted = !1),
                  e.releasePointerCapture(this._initial.pointerId),
                  this._dispatchEvent(
                    this._createEvent("pointer-drag-stop", t)
                  )),
                (this._initial = null);
            });
          const e = (this._handle = t.handle);
          (this._onDragStart = t.onDragStart),
            (this._onDragMove = t.onDragMove),
            (this._onDragStop = t.onDragStop),
            (this._distance = t.distance ?? 0),
            (this._rootElement = t.rootElement),
            (e.style.touchAction = "none"),
            e.addEventListener("pointerdown", this._handlePointerDown);
        }
        destroy() {
          const t = this._handle;
          (t.style.touchAction = ""),
            t.removeEventListener("pointerdown", this._handlePointerDown),
            t.removeEventListener("pointermove", this._handlePointerMove),
            t.removeEventListener("pointerup", this._handlePointerUp),
            t.removeEventListener("pointercancel", this._handlePointerUp),
            t.removeEventListener("lostpointercapture", this._handlePointerUp),
            null !== this._initial &&
              (t.releasePointerCapture(this._initial.pointerId),
              (this._initial = null)),
            (this._pointerStarted = !1);
        }
        _pointerStart() {
          if (!this._initial) return;
          const t = this._getEventTarget();
          this._dispatchEvent(
            this._createEvent("pointer-drag-start", this._initial)
          )
            ? ((this._pointerStarted = !0),
              t.setPointerCapture(this._initial.pointerId))
            : (this._initial = null);
        }
        _pointerDrag(t) {
          t.preventDefault(),
            this._dispatchEvent(this._createEvent("pointer-drag-move", t));
        }
        _pointerDistanceMet(t) {
          return (
            !this._initial ||
            !this._distance ||
            Math.max(
              Math.abs(this._initial.clientX - t.clientX),
              Math.abs(this._initial.clientY - t.clientY)
            ) >= this._distance
          );
        }
        _getEventTarget() {
          return this._rootElement ?? this._handle;
        }
        _dispatchEvent(t) {
          switch (t.type) {
            case "pointer-drag-start":
              this._onDragStart(t);
              break;
            case "pointer-drag-move":
              this._onDragMove(t);
              break;
            case "pointer-drag-stop":
              this._onDragStop(t);
          }
          return !t.defaultPrevented;
        }
        _createEvent(t, e) {
          return (
            (0, s.assert)(null !== this._initial),
            new CustomEvent(t, {
              bubbles: !0,
              cancelable: !0,
              detail: { backend: this, initial: this._initial, current: e },
            })
          );
        }
      }
    },
    821205: (t, e, i) => {
      "use strict";
      i.d(e, {
        contentHeight: () => n.contentHeight,
        html: () => a,
        outerHeight: () => n.outerHeight,
        outerWidth: () => n.outerWidth,
        position: () => o,
      });
      var s = i(650151),
        n = i(65160);
      function a(t, e) {
        return (
          void 0 === e ||
            (null === e && (t.innerHTML = ""),
            ("string" != typeof e && "number" != typeof e) ||
              (t.innerHTML = String(e))),
          t
        );
      }
      function r(t) {
        if (!t.getClientRects().length) return { top: 0, left: 0 };
        const e = t.getBoundingClientRect(),
          i = (0, s.ensureNotNull)(t.ownerDocument.defaultView);
        return { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset };
      }
      function o(t) {
        const e = getComputedStyle(t);
        let i,
          s = { top: 0, left: 0 };
        if ("fixed" === e.position) i = t.getBoundingClientRect();
        else {
          i = r(t);
          const e = t.ownerDocument;
          let n = t.offsetParent || e.documentElement;
          for (
            ;
            n &&
            (n === e.body || n === e.documentElement) &&
            "static" === getComputedStyle(n).position;

          )
            n = n.parentElement;
          n &&
            n !== t &&
            1 === n.nodeType &&
            ((s = r(n)),
            (s.top += parseFloat(getComputedStyle(n).borderTopWidth)),
            (s.left += parseFloat(getComputedStyle(n).borderLeftWidth)));
        }
        return {
          top: i.top - s.top - parseFloat(e.marginTop),
          left: i.left - s.left - parseFloat(e.marginLeft),
        };
      }
    },
    438980: (t, e, i) => {
      "use strict";
      i.d(e, { Measure: () => n });
      var s = i(664332);
      function n(t) {
        const { children: e, onResize: i } = t;
        return e((0, s.useResizeObserver)(i || (() => {}), [null === i]));
      }
    },
    479796: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { DetailsContainer: () => l, Widget: () => h });
      var s = i(671945),
        n = i(48547),
        a = i(240534);
      const r = new a.WatchedValue(!1),
        o = (0, s.getLogger)("Platform.GUI.Widgetbar.DetailsWidget");
      class l extends n.WidgetbarWidgetRenderer {
        constructor(t) {
          super(t),
            (this._history = null),
            (this._mounted = !1),
            (this._contentRenderer = null),
            (this._mindsFormState = new a.WatchedValue({ opened: !1 })),
            (this._bridge = t),
            this.mount();
        }
        navigate(t, e) {
          this._history?.replace(t, e);
        }
        mount() {
          this._mounted
            ? o.logWarn("Mount was called on already mounted widget")
            : ((this._mounted = !0), this._load());
        }
        unmount() {
          this._mounted
            ? ((this._mounted = !1),
              r.setValue(!1),
              this._mindsFormState.setValue({ opened: !1 }),
              super.unmount(),
              (this._loadModulePromise = null))
            : o.logWarn("Unmount was called on already unmounted widget");
        }
        destroy() {
          super.destroy();
        }
        openMindForm() {
          this._mindsFormState.setValue({ opened: !0 }, !0);
        }
        _load() {
          if (this._contentRenderer)
            return r.setValue(!0), void this._contentRenderer();
          const t = (this._loadModulePromise = Promise.all([
            Promise.all([
              i.e(1430),
              i.e(4752),
              i.e(2520),
              i.e(8985),
              i.e(3782),
              i.e(8473),
              i.e(9162),
              i.e(5758),
              i.e(2115),
              i.e(6752),
              i.e(9824),
              i.e(6991),
            ]).then(i.bind(i, 533615)),
            Promise.resolve().then(i.t.bind(i, 50959, 19)),
            Promise.resolve().then(i.t.bind(i, 632227, 19)),
          ]).then(([e, i, s]) => {
            t === this._loadModulePromise &&
              ((this._contentRenderer = () => {
                s.render(
                  i.createElement(e.DetailsWrapper, {
                    bridge: this._bridge,
                    widgetHeaderElement: this._headerContainer,
                    history: this._history,
                    mindsFormState: this._mindsFormState,
                  }),
                  this._container
                );
              }),
              this._contentRenderer(),
              r.setValue(!0));
          }));
        }
        _handleLoginStateChange() {
          0;
        }
      }
      const h = l;
    },
    865266: (t, e, i) => {
      "use strict";
      i.d(e, { useRovingTabindexElement: () => a });
      var s = i(50959),
        n = i(718736);
      function a(t, e = []) {
        const [i, a] = (0, s.useState)(!1),
          r = (0, n.useFunctionalRefObject)(t);
        return (
          (0, s.useLayoutEffect)(() => {
            const t = r.current;
            if (null === t) return;
            const e = (t) => {
              switch (t.type) {
                case "roving-tabindex:main-element":
                  a(!0);
                  break;
                case "roving-tabindex:secondary-element":
                  a(!1);
              }
            };
            return (
              t.addEventListener("roving-tabindex:main-element", e),
              t.addEventListener("roving-tabindex:secondary-element", e),
              () => {
                t.removeEventListener("roving-tabindex:main-element", e),
                  t.removeEventListener("roving-tabindex:secondary-element", e);
              }
            );
          }, e),
          [r, i ? 0 : -1]
        );
      }
    },
    704095: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { ObjectTreeRenderer: () => r });
      var s = i(33290),
        n = i(311804),
        a = i(112295);
      class r {
        constructor(t) {
          (this._viewModel = null),
            (this._promise = null),
            (this._activityChangeHandler = (t) => {
              t ? this.mount() : this.destroy();
            }),
            (this._container = t.container),
            t.active.value() && this.mount(),
            t.active.subscribe(this._activityChangeHandler);
        }
        mount() {
          const t = (this._promise = Promise.all([
            Promise.resolve().then(i.t.bind(i, 50959, 19)),
            Promise.resolve().then(i.t.bind(i, 632227, 19)),
            Promise.all([
              i.e(323),
              i.e(3703),
              i.e(3953),
              i.e(4752),
              i.e(2520),
              i.e(5826),
              i.e(9481),
              i.e(4600),
              i.e(7384),
              i.e(5480),
              i.e(3799),
              i.e(4353),
              i.e(7849),
              i.e(7431),
              i.e(8473),
              i.e(7762),
              i.e(4510),
              i.e(9393),
              i.e(4952),
              i.e(3054),
              i.e(3847),
              i.e(3251),
              i.e(3285),
              i.e(9937),
              i.e(3010),
              i.e(7415),
              i.e(5031),
            ]).then(i.bind(i, 420779)),
            Promise.all([
              i.e(323),
              i.e(3703),
              i.e(3953),
              i.e(4752),
              i.e(2520),
              i.e(5826),
              i.e(9481),
              i.e(4600),
              i.e(7384),
              i.e(5480),
              i.e(3799),
              i.e(4353),
              i.e(7849),
              i.e(7431),
              i.e(8473),
              i.e(7762),
              i.e(4510),
              i.e(9393),
              i.e(4952),
              i.e(3054),
              i.e(3847),
              i.e(3251),
              i.e(3285),
              i.e(9937),
              i.e(3010),
              i.e(7415),
              i.e(5031),
            ]).then(i.bind(i, 993321)),
            Promise.all([
              i.e(323),
              i.e(3703),
              i.e(3953),
              i.e(4752),
              i.e(2520),
              i.e(5826),
              i.e(9481),
              i.e(4600),
              i.e(7384),
              i.e(5480),
              i.e(3799),
              i.e(4353),
              i.e(7849),
              i.e(7431),
              i.e(8473),
              i.e(7762),
              i.e(4510),
              i.e(9393),
              i.e(4952),
              i.e(3054),
              i.e(3847),
              i.e(3251),
              i.e(3285),
              i.e(9937),
              i.e(3010),
              i.e(7415),
              i.e(5031),
            ]).then(i.bind(i, 69649)),
            (0, a.loadAllSourcesIcons)(),
          ]).then(([e, i, a, r, o]) => {
            if (this._promise === t) {
              const t = (0, s.service)(n.CHART_WIDGET_COLLECTION_SERVICE);
              null === this._viewModel &&
                (this._viewModel = new o.ObjectTree(t.activeChartWidget)),
                i.render(
                  e.createElement(r.ObjectTree, {
                    nodeRenderer: a.NodeRenderer,
                    viewModel: this._viewModel,
                    hideHeaderTitle: this._hideHeaderTitle,
                  }),
                  this._container
                );
            }
          }));
        }
        unmount() {
          this.unmountBody();
        }
        unmountBody() {
          this._promise = null;
          const t = i.c[632227];
          if (t) {
            t.exports.unmountComponentAtNode(this._container);
          }
        }
        destroy() {
          this.unmount(),
            null !== this._viewModel &&
              (this._viewModel.destroy(), (this._viewModel = null));
        }
      }
    },
    522224: (t, e, i) => {
      "use strict";
      i.d(e, {
        hoverMouseEventFilter: () => s.hoverMouseEventFilter,
        useAccurateHover: () => s.useAccurateHover,
        useHover: () => s.useHover,
      });
      var s = i(975228);
    },
    181436: (t, e, i) => {
      "use strict";
      i.d(e, { getPixelsFromEvent: () => n });
      const s = [
        () =>
          navigator.userAgent.includes("Win") &&
          navigator.userAgent.includes("Chrome")
            ? 1 / window.devicePixelRatio
            : 1,
        () => 16,
        (t = () => 0) => 0.8 * (t() ?? 0),
      ];
      function n(t, e = () => ({})) {
        return {
          x: t.deltaX * s[t.deltaMode](() => e().width),
          y: t.deltaY * s[t.deltaMode](() => e().height),
        };
      }
    },
    906132: (t, e, i) => {
      "use strict";
      var s = i(522134);
      function n() {}
      function a() {}
      (a.resetWarningCache = n),
        (t.exports = function () {
          function t(t, e, i, n, a, r) {
            if (r !== s) {
              var o = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((o.name = "Invariant Violation"), o);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: a,
            resetWarningCache: n,
          };
          return (i.PropTypes = i), i;
        });
    },
    719036: (t, e, i) => {
      t.exports = i(906132)();
    },
    522134: (t) => {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    903088: (t) => {
      t.exports = {
        container: "container-Wp9adlfh",
        mirror: "mirror-Wp9adlfh",
        background: "background-Wp9adlfh",
        arrow: "arrow-Wp9adlfh",
      };
    },
    582374: (t) => {
      t.exports = {
        wrap: "wrap-Z4M3tWHb",
        scrollWrap: "scrollWrap-Z4M3tWHb",
        noScrollBar: "noScrollBar-Z4M3tWHb",
        content: "content-Z4M3tWHb",
        icon: "icon-Z4M3tWHb",
        scrollBot: "scrollBot-Z4M3tWHb",
        scrollTop: "scrollTop-Z4M3tWHb",
        isVisible: "isVisible-Z4M3tWHb",
        iconWrap: "iconWrap-Z4M3tWHb",
        fadeBot: "fadeBot-Z4M3tWHb",
        fadeTop: "fadeTop-Z4M3tWHb",
      };
    },
    397062: (t) => {
      t.exports = { button: "button-c8sm3pCb" };
    },
    733660: (t) => {
      t.exports = { filler: "filler-GfsAWtWz" };
    },
    677478: (t) => {
      t.exports = { toolbar: "toolbar-S4V6IoxY" };
    },
    403636: (t) => {
      t.exports = { separator: "separator-gZVyfVJP" };
    },
    286774: (t) => {
      t.exports = {
        button: "button-I_wb5FjE",
        hover: "hover-I_wb5FjE",
        clicked: "clicked-I_wb5FjE",
        hoverMask: "hoverMask-I_wb5FjE",
        icon: "icon-I_wb5FjE",
        counterRow: "counterRow-I_wb5FjE",
        counter: "counter-I_wb5FjE",
        isActive: "isActive-I_wb5FjE",
        accessible: "accessible-I_wb5FjE",
      };
    },
    333086: (t, e, i) => {
      "use strict";
      var s;
      function n(t) {
        t.dispatchEvent(new CustomEvent("roving-tabindex:main-element"));
      }
      function a(t) {
        t.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"));
      }
      i.d(e, { becomeMainElement: () => n, becomeSecondaryElement: () => a }),
        (function (t) {
          (t.MainElement = "roving-tabindex:main-element"),
            (t.SecondaryElement = "roving-tabindex:secondary-element");
        })(s || (s = {}));
    },
    167645: (t, e, i) => {
      "use strict";
      i.d(e, {
        DEFAULT_VERTICAL_TOOLBAR_HIDER_THEME: () => o,
        VerticalToolbarHider: () => h,
      });
      var s = i(50959),
        n = i(497754),
        a = i(409174),
        r = i(903088);
      const o = r,
        l = "http://www.w3.org/2000/svg";
      function h(t) {
        const { direction: e, theme: i = r } = t;
        return s.createElement(
          "svg",
          {
            xmlns: l,
            width: "9",
            height: "27",
            viewBox: "0 0 9 27",
            className: n(i.container, "right" === e ? i.mirror : null),
            onContextMenu: a.preventDefault,
          },
          s.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            s.createElement("path", {
              className: i.background,
              d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z",
            }),
            s.createElement("path", {
              className: i.arrow,
              d: "M5.5 10l-2 3.5 2 3.5",
            })
          )
        );
      }
    },
    602069: (t, e, i) => {
      "use strict";
      i.d(e, { Toolbar: () => c });
      var s = i(50959),
        n = i(650151),
        a = i(269842),
        r = i(930202),
        o = i(442092),
        l = i(333086),
        h = i(718736),
        d = i(74336);
      const c = (0, s.forwardRef)(function (t, e) {
        const {
            onKeyDown: i,
            orientation: c,
            blurOnEscKeydown: u = !0,
            blurOnClick: g = !0,
            ...p
          } = t,
          m = (0, h.useFunctionalRefObject)(e);
        return (
          (0, s.useLayoutEffect)(() => {
            const t = (0, n.ensureNotNull)(m.current),
              e = () => {
                const e = (0, o.queryTabbableElements)(t).sort(
                  o.navigationOrderComparator
                );
                if (0 === e.length) {
                  const [e] = (0, o.queryFocusableElements)(t).sort(
                    o.navigationOrderComparator
                  );
                  if (void 0 === e) return;
                  (0, l.becomeMainElement)(e);
                }
                if (e.length > 1) {
                  const [, ...t] = e;
                  for (const e of t) (0, l.becomeSecondaryElement)(e);
                }
              };
            return (
              window.addEventListener("keyboard-navigation-activation", e),
              () =>
                window.removeEventListener("keyboard-navigation-activation", e)
            );
          }, []),
          s.createElement("div", {
            ...d.MouseClickAutoBlurHandler.attributes(g),
            ...p,
            role: "toolbar",
            "aria-orientation": c,
            ref: m,
            onKeyDown: (0, a.createSafeMulticastEventHandler)(function (t) {
              if (t.defaultPrevented) return;
              if (!(document.activeElement instanceof HTMLElement)) return;
              const e = (0, r.hashFromEvent)(t);
              if (u && 27 === e)
                return t.preventDefault(), void document.activeElement.blur();
              if ("vertical" !== c && 37 !== e && 39 !== e) return;
              if ("vertical" === c && 38 !== e && 40 !== e) return;
              const i = t.currentTarget,
                s = (0, o.queryFocusableElements)(i).sort(
                  o.navigationOrderComparator
                );
              if (0 === s.length) return;
              const n = s.indexOf(document.activeElement);
              if (-1 === n) return;
              t.preventDefault();
              const a = () => {
                  const t = (n + s.length - 1) % s.length;
                  (0, l.becomeSecondaryElement)(s[n]),
                    (0, l.becomeMainElement)(s[t]),
                    s[t].focus();
                },
                h = () => {
                  const t = (n + s.length + 1) % s.length;
                  (0, l.becomeSecondaryElement)(s[n]),
                    (0, l.becomeMainElement)(s[t]),
                    s[t].focus();
                };
              switch ((0, o.mapKeyCodeToDirection)(e)) {
                case "inlinePrev":
                  "vertical" !== c && a();
                  break;
                case "inlineNext":
                  "vertical" !== c && h();
                  break;
                case "blockPrev":
                  "vertical" === c && a();
                  break;
                case "blockNext":
                  "vertical" === c && h();
              }
            }, i),
            "data-tooltip-show-on-focus": "true",
          })
        );
      });
    },
    341121: (t, e, i) => {
      "use strict";
      i.d(e, { VerticalScroll: () => u });
      var s = i(50959),
        n = i(497754),
        a = i.n(n),
        r = i(878112),
        o = i(351329),
        l = i(176616),
        h = i(438980),
        d = i(582374),
        c = i(661380);
      class u extends s.PureComponent {
        constructor(t) {
          super(t),
            (this._scroll = null),
            (this._handleScrollTop = () => {
              this.animateTo(
                Math.max(
                  0,
                  this.currentPosition() - (this.state.heightWrap - 50)
                )
              );
            }),
            (this._handleScrollBot = () => {
              this.animateTo(
                Math.min(
                  (this.state.heightContent || 0) -
                    (this.state.heightWrap || 0),
                  this.currentPosition() + (this.state.heightWrap - 50)
                )
              );
            }),
            (this._handleResizeWrap = ([t]) => {
              this.setState({ heightWrap: t.contentRect.height });
            }),
            (this._handleResizeContent = ([t]) => {
              this.setState({ heightContent: t.contentRect.height });
            }),
            (this._handleScroll = () => {
              const { onScroll: t } = this.props;
              t && t(this.currentPosition(), this.isAtTop(), this.isAtBot()),
                this._checkButtonsVisibility();
            }),
            (this._checkButtonsVisibility = () => {
              const { isVisibleTopButton: t, isVisibleBotButton: e } =
                  this.state,
                i = this.isAtTop(),
                s = this.isAtBot();
              i || t
                ? i && t && this.setState({ isVisibleTopButton: !1 })
                : this.setState({ isVisibleTopButton: !0 }),
                s || e
                  ? s && e && this.setState({ isVisibleBotButton: !1 })
                  : this.setState({ isVisibleBotButton: !0 });
            }),
            (this.state = {
              heightContent: 0,
              heightWrap: 0,
              isVisibleBotButton: !1,
              isVisibleTopButton: !1,
            });
        }
        componentDidMount() {
          this._checkButtonsVisibility();
        }
        componentDidUpdate(t, e) {
          (e.heightWrap === this.state.heightWrap &&
            e.heightContent === this.state.heightContent) ||
            this._handleScroll();
        }
        currentPosition() {
          return this._scroll ? this._scroll.scrollTop : 0;
        }
        isAtTop() {
          return this.currentPosition() <= 1;
        }
        isAtBot() {
          return (
            this.currentPosition() + this.state.heightWrap >=
            this.state.heightContent - 1
          );
        }
        animateTo(t, e = l.dur) {
          const i = this._scroll;
          i &&
            (0, o.doAnimate)({
              onStep(t, e) {
                i.scrollTop = e;
              },
              from: i.scrollTop,
              to: Math.round(t),
              easing: l.easingFunc.easeInOutCubic,
              duration: e,
            });
        }
        render() {
          const {
              children: t,
              isVisibleScrollbar: e,
              isVisibleFade: i,
              isVisibleButtons: n,
              onMouseOver: o,
              onMouseOut: l,
            } = this.props,
            {
              heightContent: u,
              heightWrap: g,
              isVisibleBotButton: p,
              isVisibleTopButton: m,
            } = this.state;
          return s.createElement(
            h.Measure,
            { onResize: this._handleResizeWrap },
            (_) =>
              s.createElement(
                "div",
                { className: d.wrap, onMouseOver: o, onMouseOut: l, ref: _ },
                s.createElement(
                  "div",
                  {
                    className: a()(d.scrollWrap, { [d.noScrollBar]: !e }),
                    onScroll: this._handleScroll,
                    ref: (t) => (this._scroll = t),
                  },
                  s.createElement(
                    h.Measure,
                    { onResize: this._handleResizeContent },
                    (e) =>
                      s.createElement(
                        "div",
                        { className: d.content, ref: e },
                        t
                      )
                  )
                ),
                i &&
                  s.createElement("div", {
                    className: a()(d.fadeTop, { [d.isVisible]: m && u > g }),
                  }),
                i &&
                  s.createElement("div", {
                    className: a()(d.fadeBot, { [d.isVisible]: p && u > g }),
                  }),
                n &&
                  s.createElement(
                    "div",
                    {
                      className: a()(d.scrollTop, {
                        [d.isVisible]: m && u > g,
                      }),
                      onClick: this._handleScrollTop,
                    },
                    s.createElement(
                      "div",
                      { className: d.iconWrap },
                      s.createElement(r.Icon, { icon: c, className: d.icon })
                    )
                  ),
                n &&
                  s.createElement(
                    "div",
                    {
                      className: a()(d.scrollBot, {
                        [d.isVisible]: p && u > g,
                      }),
                      onClick: this._handleScrollBot,
                    },
                    s.createElement(
                      "div",
                      { className: d.iconWrap },
                      s.createElement(r.Icon, { icon: c, className: d.icon })
                    )
                  )
              )
          );
        }
      }
      u.defaultProps = { isVisibleScrollbar: !0 };
    },
    244693: (t, e, i) => {
      "use strict";
      i.d(e, {
        RegistryProvider: () => l,
        registryContextType: () => h,
        validateRegistry: () => o,
      });
      var s = i(50959),
        n = i(719036),
        a = i.n(n);
      const r = s.createContext({});
      function o(t, e) {
        a().checkPropTypes(e, t, "context", "RegistryContext");
      }
      function l(t) {
        const { validation: e, value: i } = t;
        return o(i, e), s.createElement(r.Provider, { value: i }, t.children);
      }
      function h() {
        return r;
      }
    },
    112295: (t, e, i) => {
      "use strict";
      async function s(t, e, i) {
        let s;
        for (let n = 0; n < e; ++n)
          try {
            return await t(s);
          } catch (t) {
            (s = t), await i(n);
          }
        throw s;
      }
      async function n(t, e) {
        return s(t, e, () => Promise.resolve());
      }
      i.d(e, { getAllSourcesIcons: () => c, loadAllSourcesIcons: () => d });
      const a = (0, i(671945).getLogger)("DataSourcesIcons");
      let r = null;
      function o() {
        const t = i.c[89935];
        return t
          ? Promise.resolve(t.exports.lineToolsIcons)
          : i
              .e(1890)
              .then(i.bind(i, 89935))
              .then((t) => t.lineToolsIcons);
      }
      function l() {
        const t = i.c[50296];
        return t
          ? Promise.resolve(t.exports.SERIES_ICONS)
          : i
              .e(9685)
              .then(i.bind(i, 50296))
              .then((t) => t.SERIES_ICONS);
      }
      let h = null;
      function d() {
        return (
          null === h &&
            (h = (function () {
              const t = n(o, 2)
                  .then((t) => t)
                  .catch((t) => (a.logWarn(t), {})),
                e = n(l, 2)
                  .then((t) => t)
                  .catch((t) => (a.logWarn(t), {}));
              return Promise.all([t, e]);
            })()),
          h.then((t) => ((r = { linetool: t[0], series: t[1] }), r))
        );
      }
      function c() {
        return r;
      }
    },
    633201: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { WidgetBarNews: () => W });
      var s = i(650151),
        n = i(972535),
        a = i(329452),
        r = i(821205),
        o = i(351329),
        l = i(496818),
        h = i(181436),
        d = (i(693558), i(596789));
      const c = {
        headerHeight: 0,
        additionalClass: "",
        alwaysVisible: !1,
        showBottomShadow: !0,
        scrollMarginTop: 1,
        bubbleScrollEvent: !1,
      };
      class u {
        constructor(t, e, i = {}) {
          if (
            ((this.scrolled = new a.Delegate()),
            (this.scrolltoend = new a.Delegate()),
            (this.scrolltostart = new a.Delegate()),
            (this.visibilityCallbacks = []),
            (this._scrollTargetTop = 0),
            (this._scrollSpeed = 40),
            (this._shadowOffset = 10),
            (this._shadowTop = null),
            (this._shadowBottom = null),
            (this._dragInitialized = !1),
            (this._dragging = !1),
            (this._draggable = null),
            (this._atStart = !1),
            (this._atEnd = !1),
            (this._stickyBottom = null),
            (this._animation = null),
            (this._saved = null),
            (this._options = { ...c, ...i }),
            (this._wrapper = t),
            this._wrapper.classList.add(d.wrapper),
            (this._content = e),
            (this._headerHeight = this._options.headerHeight),
            (this._scrollMarginTop = this._options.scrollMarginTop),
            (this._scrollBar = document.createElement("div")),
            this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"),
            this._options.additionalClass &&
              this._scrollBar.classList.add(this._options.additionalClass),
            this._scrollBar.classList.toggle(
              "active-always",
              this._options.alwaysVisible
            ),
            (this._scrollBarWrapper = document.createElement("div")),
            this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"),
            (this._touch = n.touch),
            this._touch)
          )
            return (
              (this._content.style.position = "relative"),
              this._wrapper.classList.add(d.touch),
              void this._wrapper.addEventListener("scroll", () =>
                this._onScroll()
              )
            );
          (this._wrapper.style.overflow = "hidden"),
            (this._unsubscribe = (() => {
              const t = () => {
                  this._dragging ||
                    (this._options.alwaysVisible ||
                      this._scrollBar.classList.add("active"),
                    this._onScroll());
                },
                e = () => {
                  this._dragging ||
                    (this._options.alwaysVisible ||
                      this._scrollBar.classList.remove("active"),
                    this._onScroll());
                },
                i = (t) => {
                  const e = t.target instanceof HTMLElement ? t.target : null;
                  if (
                    (!!!e?.closest(".ignore-horizontal-scroll") || t.deltaY) &&
                    !t.defaultPrevented
                  ) {
                    const e = (0, h.getPixelsFromEvent)(t, () => ({
                      height: this._wrapper.clientHeight,
                    })).y;
                    this.scroll(-e, 1) ||
                      (t.stopPropagation(), t.preventDefault());
                  }
                };
              return (
                this._wrapper.addEventListener("mouseenter", t),
                this._wrapper.addEventListener("mouseleave", e),
                this._wrapper.addEventListener("wheel", i),
                () => {
                  this._wrapper.removeEventListener("mouseenter", t),
                    this._wrapper.removeEventListener("mouseleave", e),
                    this._wrapper.removeEventListener("wheel", i);
                }
              );
            })()),
            !1 !== this._options.showTopShadow &&
              ((this._shadowTop = document.createElement("div")),
              this._shadowTop.classList.add(
                "sb-inner-shadow",
                "top",
                "i-invisible"
              ),
              this._wrapper.appendChild(this._shadowTop)),
            !1 !== this._options.showBottomShadow &&
              ((this._shadowBottom = document.createElement("div")),
              this._shadowBottom.classList.add("sb-inner-shadow"),
              this._wrapper.appendChild(this._shadowBottom)),
            this._shadowTop &&
              this._headerHeight &&
              (this._shadowTop.style.top =
                this._headerHeight - this._shadowOffset + "px"),
            this._wrapper.appendChild(this._scrollBarWrapper),
            this._scrollBarWrapper.appendChild(this._scrollBar),
            this._onScroll();
        }
        isTouch() {
          return this._touch;
        }
        getScrollBar() {
          return this._scrollBar;
        }
        initDraggable() {
          return (
            this._dragInitialized ||
              ((this._draggable = new l.Draggable({
                axis: "y",
                source: this._scrollBar,
                containment: this._scrollBarWrapper,
                start: () => {
                  this._dragging = !0;
                },
                stop: () => {
                  this._dragging = !1;
                },
                drag: () => {
                  this.updateScroll();
                },
              })),
              (this._dragInitialized = !0)),
            this
          );
        }
        updateScroll() {
          if (this._touch) return this;
          const t = Math.ceil(
              (0, r.position)(this._scrollBar).top -
                this._scrollMarginTop -
                this._headerHeight
            ),
            e = this.getContainerHeightWithoutHeader(),
            i = (0, r.outerHeight)(this._content),
            s = i - e - 1;
          return (
            e <= 0 ||
              ((this._scrollTargetTop =
                s <= 0
                  ? this._headerHeight
                  : Math.min(
                      (-t * i) / e + this._headerHeight,
                      this._headerHeight
                    )),
              t + (0, r.contentHeight)(this._scrollBar) + 2 >= e
                ? this.scrollToEnd()
                : ((this._content.style.top = this._scrollTargetTop + "px"),
                  this._onScroll())),
            this
          );
        }
        getContainerHeightWithoutHeader() {
          return (
            this._wrapper.getBoundingClientRect().height - this._headerHeight
          );
        }
        getContainerHeight() {
          return this._wrapper.getBoundingClientRect().height;
        }
        getContentHeight() {
          return this._content.getBoundingClientRect().height;
        }
        updateScrollBar() {
          if (this._touch) return this;
          const t = (0, r.position)(this._content).top,
            e = this.getContentHeight(),
            i = this.getContainerHeight(),
            s = this.getContainerHeightWithoutHeader(),
            n = 1 + this._headerHeight,
            a = s - 2,
            o = ((Math.abs(t) - this._headerHeight) * a) / e,
            l = (i * i) / e;
          return (
            this.isContentShort()
              ? (this._scrollBar.classList.add("js-hidden"),
                this._wrapper.classList.remove("sb-scroll-active"))
              : (this._scrollBar.classList.remove("js-hidden"),
                (this._scrollBar.style.height = l + "px"),
                (this._scrollBar.style.top = n + o + "px"),
                this._wrapper.classList.add("sb-scroll-active"),
                this.initDraggable()),
            this
          );
        }
        scroll(t, e) {
          const i = (0, r.position)(this._content).top,
            s =
              (0, r.outerHeight)(this._content) -
              this.getContainerHeightWithoutHeader() -
              1,
            n = e || this._scrollSpeed;
          return (
            s <= 0 ||
            ((this._scrollTargetTop = Math.max(
              -s + this._headerHeight,
              Math.min(this._headerHeight, i + t * n)
            )),
            this.setContentTop(this._scrollTargetTop),
            this._onScroll())
          );
        }
        animateTo(t) {
          if (this._touch) return this;
          const e =
            (0, r.outerHeight)(this._content) -
            this.getContainerHeightWithoutHeader() -
            1;
          if (e <= 0) return !0;
          (this._scrollTargetTop = Math.max(
            -e + this._headerHeight,
            Math.min(this._headerHeight, -t)
          )),
            this._animation && this._animation.stop(),
            (this._animation = (0, o.doAnimate)({
              duration: 500,
              from: parseFloat(getComputedStyle(this._content).top),
              to: this._scrollTargetTop,
              onStep: (t, e) => {
                this._content.style.top = e + "px";
              },
              onComplete: () => {
                this._onScroll();
              },
            }));
        }
        resize() {
          const t = (0, r.outerHeight)(this._content),
            e = (0, r.outerHeight)(this._wrapper);
          !this._options.vAlignBottom && t < e
            ? this.atStart() || this.scrollToStart()
            : this.atEnd()
            ? this.scrollToEnd()
            : "number" == typeof this._stickyBottom &&
              this.setContentTop(
                Math.min(
                  0,
                  this._stickyBottom +
                    (0, r.outerHeight)(this._wrapper) -
                    (0, r.outerHeight)(this._content)
                )
              );
        }
        resizeHeader(t) {
          const e = t - this._headerHeight;
          (this._headerHeight = t),
            (this._scrollTargetTop += e),
            this._shadowTop &&
              (this._shadowTop.style.top =
                this._headerHeight - this._shadowOffset + "px"),
            this.resize();
        }
        scrollTo(t, e) {
          const i = {
            position: "visible",
            areaHeight: t instanceof HTMLElement ? (0, r.contentHeight)(t) : 0,
            ...e,
          };
          t instanceof HTMLElement &&
            (t = i.offsetTop || (0, r.position)(t).top);
          const s = (0, r.position)(this._content).top,
            n = this._content.getBoundingClientRect().height,
            a = this.getContainerHeightWithoutHeader();
          if (n - a - 1 <= 0) return !0;
          const o = -1 * (s - this._headerHeight),
            l = o + a;
          let h = 0;
          if ("visible" === i.position) {
            if (t > o && t + i.areaHeight < l) return !1;
            h = t + i.areaHeight > l ? l - t - i.areaHeight : o - t;
          } else "top" === i.position && (h = o - t);
          return this.scroll(h, 1), this._onScroll(), !1;
        }
        scrollToEnd() {
          const t = (0, r.position)(this._content).top,
            e = (0, r.outerHeight)(this._content),
            i = (0, r.outerHeight)(this._wrapper),
            s = e > i ? t + (i - (e + t)) + 1 : 1;
          return this.setContentTop(s), this._onScroll(), this;
        }
        scrollToStart() {
          return this.setContentTop(this._headerHeight), this._onScroll(), this;
        }
        currentPosition() {
          return Math.round((0, r.position)(this._content).top);
        }
        atStart() {
          return (
            Math.round((0, r.position)(this._content).top) >= this._headerHeight
          );
        }
        atEnd(t) {
          ("number" == typeof t && isFinite(t)) || (t = 0);
          const e = Math.round((0, r.position)(this._content).top),
            i = Math.floor((0, r.outerHeight)(this._content)),
            s = Math.floor((0, r.outerHeight)(this._wrapper));
          return i - Math.abs(e) - 1 <= s + t;
        }
        checkContentVisibility() {
          this._onContentVisible();
        }
        subscribeToContentVisible(t, e, i) {
          this.visibilityCallbacks.push({ id: t, element: e, callback: i });
        }
        triggerVisibilityCallbacks(t) {
          this._onContentVisible(t);
        }
        save() {
          return (
            (this._saved = {
              top: (0, r.position)(this._content).top,
              height: (0, r.outerHeight)(this._content),
            }),
            this
          );
        }
        restore() {
          if (this._saved) {
            if (
              this._saved.top === (0, r.position)(this._content).top &&
              this._saved.height === (0, r.outerHeight)(this._content)
            )
              return (this._saved = null), this;
            this._options.vAlignBottom &&
              ((this._saved.top -=
                (0, r.outerHeight)(this._content) - this._saved.height),
              this._saved.top > this._headerHeight &&
                (this._saved.top = this._headerHeight)),
              this.setContentTop(this._saved.top),
              (this._saved = null),
              this._onScroll(!0);
          }
          return this;
        }
        setContentTop(t) {
          return (
            this._touch
              ? this._options.vAlignBottom &&
                (0, r.outerHeight)(this._content) <
                  (0, r.outerHeight)(this._wrapper)
                ? ((this._wrapper.style.overflowY = "visible"),
                  (this._content.style.position = "absolute"),
                  (this._content.style.bottom = "0px"))
                : ((this._content.style.position = "relative"),
                  (this._content.style.position = "auto"),
                  (this._wrapper.style.overflowY = "auto"),
                  (this._wrapper.scrollTop = -t))
              : (this._content.style.top = t + "px"),
            this
          );
        }
        isContentShort() {
          return (
            this.getContentHeight() <= this.getContainerHeightWithoutHeader()
          );
        }
        destroy() {
          this._animation && this._animation.stop(),
            this._scrollBarWrapper && this._scrollBarWrapper.remove(),
            this._shadowBottom && this._shadowBottom.remove(),
            this._shadowTop && this._shadowTop.remove(),
            this._draggable &&
              (this._draggable.destroy(), (this._draggable = null)),
            (this._content.style.cssText = ""),
            (this._wrapper.style.cssText = ""),
            this._unsubscribe?.();
        }
        _onScroll(t) {
          this._touch || (this._content.style.bottom = "auto"),
            this.scrolled.fire(),
            (this._dragging && !0 !== t) || this.updateScrollBar();
          const e = this.atStart(),
            i = this.atEnd();
          return (
            this._shadowTop &&
              this._shadowTop.classList.toggle("i-invisible", !!e),
            this._shadowBottom &&
              this._shadowBottom.classList.toggle("i-invisible", !!i),
            this._onContentVisible(),
            !this._atStart && e
              ? ((this._atStart = !0), this.scrolltostart.fire())
              : this._atStart && !e && (this._atStart = !1),
            !this._atEnd && i
              ? ((this._atEnd = !0), this.scrolltoend.fire())
              : this._atEnd && !i && (this._atEnd = !1),
            this._options.vAlignBottom &&
              (this._stickyBottom =
                (0, r.outerHeight)(this._content) -
                Math.abs((0, r.position)(this._content).top) -
                (0, r.outerHeight)(this._wrapper)),
            (this._atStart || this._atEnd) &&
              ("function" == typeof this._options.bubbleScrollEvent
                ? Boolean(this._options.bubbleScrollEvent())
                : Boolean(this._options.bubbleScrollEvent))
          );
        }
        _contentIsVisible(t) {
          return (0, r.position)(t.element).top > -1 * this.currentPosition();
        }
        _onContentVisible(t) {
          if (!this.visibilityCallbacks.length) return;
          const e = t || this._contentIsVisible.bind(this),
            i = [],
            s = this.visibilityCallbacks.filter((t, s) => {
              if (!this._content.contains(t.element)) return !1;
              const n = e(t);
              return n && i.push(s), !n;
            });
          i.forEach((e) => {
            this.visibilityCallbacks[e].callback(!!t);
          }),
            (this.visibilityCallbacks = s);
        }
      }
      var g = i(334529);
      var p = i(247465),
        m = i(851532);
      function _(t) {
        return (function (t) {
          let e,
            i = 0;
          if (0 === t.length) return i;
          for (var s = 0; s < t.length; s++)
            (e = t.charCodeAt(s)), (i = (i << 5) - i + e), (i |= 0);
          return i;
        })(t.title + t.published);
      }
      var v = i(671945),
        w = i(795703),
        b = i(333086),
        f = i(442092),
        y = i(930202);
      const C = new Set([
        ".",
        "۔",
        "܁",
        "܂",
        "…",
        "、",
        "。",
        "．",
        ",",
        ":",
        ";",
        "-",
        "ー",
        " ",
        "(",
        ")",
      ]);
      var B;
      function S(t, e) {
        if (e <= 0) return t;
        const i = t.length;
        if (i <= e) return t;
        if (i > e) {
          const i = t[e],
            s = t[e - 1];
          if (C.has(i) && !C.has(s)) return x(t, e);
        }
        let s = null;
        for (let i = e - 1; i > 0; i--) {
          const e = t[i];
          if (C.has(e)) s = i;
          else if (null !== s) return x(t, s);
        }
        return t + "…";
      }
      function x(t, e) {
        return t.slice(0, e) + "…";
      }
      !(function (t) {
        t.ThreeDottedChar = "…";
      })(B || (B = {}));
      var E = i(626800),
        L = (i(848088), i(135031));
      const T = (0, v.getLogger)("News.Widget");
      class W {
        constructor(t) {
          (this.widgetName = "widgetbar"),
            (this._newsScrollIterator = null),
            (this._newsDiffResolver = null),
            (this._updateWhenVisible = null),
            (this._pendingNewsRequest = null),
            (this._updateIntervalHandle = null),
            (this._needsFullUpdate = !0),
            (this._dataProvider = null),
            (this._resize = this.resize.bind(this)),
            (this._onSymbolChange = this.onSymbolChange.bind(this)),
            (this._quoteSymbol = null),
            (this._quoteMetaInfo = null),
            (this._symbolName = null),
            (this._setNewItemsTabIndexForKeyboardNavigation = () => {
              const t = this._data,
                e = (0, f.queryTabbableElements)(t).sort(
                  f.navigationOrderComparator
                );
              if (0 === e.length) {
                const [e] = (0, f.queryFocusableElements)(t).sort(
                  f.navigationOrderComparator
                );
                if (void 0 === e) return;
                (0, b.becomeMainElement)(e);
              }
              if (e.length > 1) {
                const [, ...t] = e;
                for (const e of t) (0, b.becomeSecondaryElement)(e);
              }
            }),
            (this._newsItemKeyDownListener = (t) => {
              if (t.defaultPrevented) return;
              if (!(document.activeElement instanceof HTMLElement)) return;
              const e = (0, y.hashFromEvent)(t);
              if (27 === e)
                return t.preventDefault(), void document.activeElement.blur();
              if (38 !== e && 40 !== e) return;
              const i = (0, f.queryFocusableElements)(this._data).sort(
                f.navigationOrderComparator
              );
              if (0 === i.length) return;
              const s = i.indexOf(document.activeElement);
              if (-1 === s) return;
              t.preventDefault();
              switch ((0, f.mapKeyCodeToDirection)(e)) {
                case "blockPrev":
                  (() => {
                    const t = (s + i.length - 1) % i.length;
                    (0, b.becomeSecondaryElement)(i[s]),
                      (0, b.becomeMainElement)(i[t]),
                      i[t].focus();
                  })();
                  break;
                case "blockNext":
                  (() => {
                    const t = (s + i.length + 1) % i.length;
                    (0, b.becomeSecondaryElement)(i[s]),
                      (0, b.becomeMainElement)(i[t]),
                      i[t].focus();
                  })();
              }
            }),
            (this._bridge = t),
            (this._widgetTitle = (0, s.ensureNotNull)(
              this._bridge.header.querySelector(".widgetbar-widgettitle")
            )),
            (this._spinner = new w.Spinner()),
            (this._container = t.container),
            this._prepareLayout(this._container);
          const e = new m.LibraryNewsProvider();
          e && (this._dataProvider = e),
            this._bridge.symbol.subscribe(this._onSymbolChange, {
              callWithLast: !0,
            }),
            window.loginStateChange.subscribe(this, this._onLoginChange);
        }
        refresh() {
          this.update(!0);
        }
        update(t) {
          if (!this._dataProvider) return;
          if (!this._bridge.visible.value())
            return void (
              null === this._updateWhenVisible &&
              ((this._updateWhenVisible = (t) => {
                t &&
                  (null !== this._updateIntervalHandle &&
                    this._setUpdateInterval(),
                  this._bridge.visible.unsubscribe(this._updateWhenVisible),
                  (this._updateWhenVisible = null),
                  this.update());
              }),
              this._bridge.visible.subscribe(this._updateWhenVisible),
              this._updateIntervalHandle &&
                clearInterval(this._updateIntervalHandle))
            );
          const e = this._quoteMetaInfo;
          if (!e) return this._clear(), void this._stopLoading();
          const i = e.short_name;
          (this._needsFullUpdate = t || i !== this._symbolName),
            (this._symbolName = i),
            this._needsFullUpdate &&
              (this._startLoading(),
              this._updateIntervalHandle &&
                clearInterval(this._updateIntervalHandle),
              this._setUpdateInterval()),
            this._pendingNewsRequest && this._pendingNewsRequest.cancel(),
            (this._pendingNewsRequest = (0, p.makeCancelable)(
              this._dataProvider.getNews(e)
            )),
            this._pendingNewsRequest.promise
              .then((t) => {
                (this._pendingNewsRequest = null),
                  this._stopLoading(),
                  this._setTitle(t.title),
                  this.updateData(t.newsItems);
              })
              .catch((t) => {
                if (!(0, p.isCancelled)(t))
                  throw (
                    ((this._pendingNewsRequest = null), this._stopLoading(), t)
                  );
              });
        }
        updateData(t) {
          var e;
          if (t && t.length)
            if (this._needsFullUpdate) {
              this._clear(),
                (this._newsScrollIterator = (function (t, e) {
                  if (!Number.isInteger(e))
                    throw new TypeError("Chunks size must be an integer");
                  if (e <= 0)
                    throw new RangeError(
                      "Chunk size must be a positive number"
                    );
                  const i = t.slice();
                  return {
                    next() {
                      const t = i.splice(0, e);
                      return { value: t, done: !t.length };
                    },
                  };
                })(t, 20));
              const i = this._newsScrollIterator.next().value,
                s = _(i[0]);
              (this._newsDiffResolver =
                ((e = s),
                {
                  getDiff(t) {
                    if (0 === t.length) return [];
                    const i = t.findIndex((t) => _(t) === e);
                    return (e = _(t[0])), t.slice(0, -1 === i ? t.length : i);
                  },
                })),
                this._renderItems(i, !1);
            } else {
              if (!this._newsDiffResolver)
                return void T.logError(
                  "Attempt to perform partial update before full update was committed"
                );
              const e = this._newsDiffResolver.getDiff(t);
              this._renderItems(e, !0);
            }
        }
        resize() {
          this._scroll.resize();
        }
        highlight(t) {
          t.classList.add(L["news-item--highlight"]);
          const e = () => {
            t.classList.remove(L["news-item--highlight"]),
              t.removeEventListener("animationend", e);
          };
          t.addEventListener("animationend", e);
        }
        onSymbolChange(t) {
          if ((0, E.safeShortName)(t) === this._symbolName) return;
          const e = (0, g.getQuoteSessionInstance)("full");
          if (
            (this._quoteSymbol &&
              e.unsubscribe(this._bridge.id, this._quoteSymbol),
            (this._quoteMetaInfo = null),
            !t)
          )
            return void (this._quoteSymbol = null);
          (this._quoteSymbol = t),
            this._needsFullUpdate && this.update(),
            this._bridge.clearNotifications();
          let i = !1;
          e.subscribe(this._bridge.id, t, (s) => {
            i ||
              ("permission_denied" === s.status &&
              s.values &&
              s.values.alternative
                ? this.onSymbolChange(s.values.alternative)
                : s.values &&
                  s.values.short_name &&
                  ((this._quoteMetaInfo = {
                    pro_name: s.values.pro_name,
                    short_name: s.values.short_name,
                    type: s.values.type,
                    typespecs: s.values.typespecs,
                    exchange: s.values.exchange,
                  }),
                  this.update(),
                  (i = !0),
                  setTimeout(() => {
                    e.unsubscribe(this._bridge.id, t);
                  }, 0)));
          });
        }
        destroy() {
          window.removeEventListener(
            "keyboard-navigation-activation",
            this._setNewItemsTabIndexForKeyboardNavigation
          ),
            this._quoteSymbol &&
              (0, g.getQuoteSessionInstance)("full").unsubscribe(
                this._bridge.id,
                this._quoteSymbol
              ),
            this._updateIntervalHandle &&
              (clearInterval(this._updateIntervalHandle),
              (this._updateIntervalHandle = null)),
            this._scroll.scrolltoend.unsubscribe(this, this._onScrollToEnd),
            this._updateWhenVisible &&
              this._bridge.visible.unsubscribe(this._updateWhenVisible),
            this._unmountAllNewsItems(),
            this._bridge.height.unsubscribe(this._resize),
            this._bridge.visible.unsubscribe(this._resize),
            this._bridge.symbol.unsubscribe(this._onSymbolChange),
            window.loginStateChange.unsubscribe(this, this._onLoginChange);
        }
        _setTitle(t) {
          this._dataProvider && (this._widgetTitle.textContent = t);
        }
        _clear() {
          this._clearListUI(),
            this._scroll.scrolltoend.unsubscribe(this, this._onScrollToEnd),
            this._scroll.scrollToStart(),
            this._scroll.scrolltoend.subscribe(this, this._onScrollToEnd);
        }
        _prepareLayout(t) {
          this._container = t;
          const e = (this._widget = document.createElement("div"));
          e.classList.add("tv-news"), this._container.appendChild(e);
          const i = (this._data = document.createElement("div"));
          i.classList.add("ns-data"),
            i.setAttribute("data-name", "news_list"),
            e.appendChild(i),
            (this._scroll = new u(this._widget, this._data)),
            this._bridge.height.subscribe(this._resize),
            this._bridge.visible.subscribe(this._resize),
            window.addEventListener(
              "keyboard-navigation-activation",
              this._setNewItemsTabIndexForKeyboardNavigation
            );
        }
        _setUpdateInterval() {
          if (!this._dataProvider) return;
          const t = this._dataProvider.timeout();
          t &&
            (this._updateIntervalHandle = setInterval(
              this.update.bind(this),
              t
            ));
        }
        _renderItems(t, e = !1) {
          if (!this._dataProvider) return;
          const i = document.createDocumentFragment();
          for (const s of t) {
            const t = { ...s };
            t.shortDescription = S(s.shortDescription, 170);
            const n = this._dataProvider.renderItem(t);
            s.clickHandler && n.addEventListener("click", s.clickHandler),
              n.addEventListener("keydown", this._newsItemKeyDownListener),
              e && this.highlight(n),
              i.appendChild(n);
          }
          e ? this._data.prepend(i) : this._data.append(i),
            this._setNewItemsTabIndexForKeyboardNavigation();
        }
        _onScrollToEnd() {
          this._newsScrollIterator &&
            this._renderItems(this._newsScrollIterator.next().value, !1);
        }
        _onLoginChange() {
          window.is_authenticated || this.update(!0);
        }
        _startLoading() {
          this._spinner.spin(this._widget);
        }
        _stopLoading() {
          this._spinner.stop();
        }
        _clearListUI() {
          (this._data.innerHTML = ""), this._unmountAllNewsItems();
        }
        _unmountAllNewsItems() {
          this._dataProvider && this._dataProvider.unmountItems();
        }
      }
    },
    117105: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>';
    },
    315130: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>';
    },
    238822: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>';
    },
    663346: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>';
    },
    534983: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>';
    },
    661380: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
    },
    452970: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44"><path fill="currentColor" d="M21.34 12.13a1 1 0 0 1 .98 0l10.41 5.93a1 1 0 0 1 0 1.73l-10.4 5.93a1 1 0 0 1-.99 0L10.78 19.8a1 1 0 0 1 0-1.75l10.56-5.92Zm.49.87-10.56 5.93 10.56 5.93 10.4-5.93L21.84 13ZM33.5 24.86l-11.66 6.8L10 25l.5-.87 11.33 6.38L32.99 24l.5.87Z"/></svg>';
    },
    731503: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" stroke="currentColor"><path d="M14.5 27.5c0 4.97 3.03 8 8 8 4.97 0 8-3.03 8-8v-6a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3v6z"/><path stroke-linecap="square" d="M22.5 19v16"/><path d="M27.5 18.5a5 5 0 1 0-10 0m13 3h2a2 2 0 0 1 2 2V25m-4 2.5h2a2 2 0 0 1 2 2V31M29 32.5h1.5a2 2 0 0 1 2 2V36m-18-14.5h-2a2 2 0 0 0-2 2V25m4 2.5h-2a2 2 0 0 0-2 2V31m5.5 1.5h-1.5a2 2 0 0 0-2 2V36"/><g transform="translate(12 8)"><circle cx="2.5" cy="2.5" r="2"/><path d="M3.911 3.911L7 7"/></g><g transform="translate(26 8)"><circle cx="4.5" cy="2.5" r="2"/><path d="M3.115 3.885L0 7"/></g></g></svg>';
    },
    981132: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44"><path fill="currentColor" d="M16 13h-4v4h-1v-4H7v-1h4V8h1v4h4v1Zm14.5-1H19v-1h11.5a3.5 3.5 0 0 1 3.5 3.5v16a3.5 3.5 0 0 1-3.5 3.5h-17a3.5 3.5 0 0 1-3.5-3.5V20h1v10.5a2.5 2.5 0 0 0 2.5 2.5h17a2.5 2.5 0 0 0 2.5-2.5v-16a2.5 2.5 0 0 0-2.5-2.5ZM14 18.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 0 5h-11a2.5 2.5 0 0 1-2.5-2.5Zm2.5-1.5a1.5 1.5 0 0 0 0 3h11a1.5 1.5 0 0 0 0-3h-11ZM29 25H15v-1h14v1Zm0 4H15v-1h14v1Z"/></svg>';
    },
    178911: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44"><path fill="currentColor" d="M10 21.5a11.5 11.5 0 1 1 23 0 11.5 11.5 0 0 1-23 0ZM21.5 9a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25ZM18 17c0-.87.32-1.6.9-2.13a3.78 3.78 0 0 1 2.6-.87c2.32 0 3.5 1.37 3.5 2.5 0 1.23-.8 1.96-1.8 2.7l-.27.2c-.4.3-.83.61-1.16.95-.42.42-.77.95-.77 1.65v2h1v-2c0-.32.15-.62.48-.95.27-.27.62-.52 1.01-.81l.3-.23c1-.74 2.21-1.74 2.21-3.51 0-1.87-1.82-3.5-4.5-3.5-1.35 0-2.48.4-3.27 1.13A3.8 3.8 0 0 0 17 17h1Zm4.5 11c0 .55-.46 1-1 1s-1-.45-1-1 .46-1 1-1 1 .45 1 1Zm-1 2c1.08 0 2-.9 2-2s-.92-2-2-2-2 .9-2 2 .92 2 2 2Z"/></svg>';
    },
    191085: (t) => {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44"><path fill="currentColor" d="M13 11h18a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V13c0-1.1.9-2 2-2Zm18-1H13a3 3 0 0 0-3 3v17a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V13a3 3 0 0 0-3-3Zm-2 11H15v1h14v-1Zm-14-5h14v1H15v-1Zm14 10H15v1h14v-1Z"/></svg>';
    },
  },
]);
