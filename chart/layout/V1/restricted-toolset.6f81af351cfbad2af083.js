(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5516, 9685, 9937],
  {
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
    845658: (e) => {
      e.exports = {
        small: "small-CtnpmPzP",
        medium: "medium-CtnpmPzP",
        large: "large-CtnpmPzP",
        switchView: "switchView-CtnpmPzP",
        checked: "checked-CtnpmPzP",
        disabled: "disabled-CtnpmPzP",
        track: "track-CtnpmPzP",
        thumb: "thumb-CtnpmPzP",
      };
    },
    420071: (e) => {
      e.exports = {
        switcher: "switcher-fwE97QDf",
        input: "input-fwE97QDf",
        thumbWrapper: "thumbWrapper-fwE97QDf",
        disabled: "disabled-fwE97QDf",
        checked: "checked-fwE97QDf",
      };
    },
    606917: (e) => {
      e.exports = {
        labelRow: "labelRow-_uXjSSQ5",
        toolbox: "toolbox-_uXjSSQ5",
        description: "description-_uXjSSQ5",
        descriptionTabletSmall: "descriptionTabletSmall-_uXjSSQ5",
        item: "item-_uXjSSQ5",
        titleItem: "titleItem-_uXjSSQ5",
        remove: "remove-_uXjSSQ5",
        active: "active-_uXjSSQ5",
        titleItemTabletSmall: "titleItemTabletSmall-_uXjSSQ5",
        itemTabletSmall: "itemTabletSmall-_uXjSSQ5",
        itemLabelTabletSmall: "itemLabelTabletSmall-_uXjSSQ5",
        wrap: "wrap-_uXjSSQ5",
        hovered: "hovered-_uXjSSQ5",
      };
    },
    434625: (e) => {
      e.exports = { footer: "footer-dwINHZFL" };
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
    667797: (e) => {
      e.exports = {
        menuWrap: "menuWrap-Kq3ruQo8",
        isMeasuring: "isMeasuring-Kq3ruQo8",
        scrollWrap: "scrollWrap-Kq3ruQo8",
        momentumBased: "momentumBased-Kq3ruQo8",
        menuBox: "menuBox-Kq3ruQo8",
        isHidden: "isHidden-Kq3ruQo8",
      };
    },
    395214: (e) => {
      e.exports = {
        item: "item-zwyEh4hn",
        label: "label-zwyEh4hn",
        labelRow: "labelRow-zwyEh4hn",
        toolbox: "toolbox-zwyEh4hn",
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
    149128: (e) => {
      e.exports = { icon: "icon-WB2y0EnP", dropped: "dropped-WB2y0EnP" };
    },
    234539: (e, t, n) => {
      "use strict";
      n.d(t, { CustomBehaviourContext: () => i });
      const i = (0, n(50959).createContext)({ enableActiveStateStyles: !0 });
      i.displayName = "CustomBehaviourContext";
    },
    813550: (e, t, n) => {
      "use strict";
      n.d(t, { useForceUpdate: () => a });
      var i = n(50959);
      const a = () => {
        const [, e] = (0, i.useReducer)((e) => e + 1, 0);
        return e;
      };
    },
    252130: (e, t, n) => {
      "use strict";
      n.d(t, { useIsMounted: () => a });
      var i = n(50959);
      const a = () => {
        const e = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      };
    },
    908783: (e, t, n) => {
      "use strict";
      n.d(t, { useOutsideEvent: () => s });
      var i = n(50959),
        a = n(855393),
        o = n(778199);
      function s(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: s,
            touchStart: l,
            handler: r,
            reference: h,
          } = e,
          c = (0, i.useRef)(null),
          d = (0, i.useRef)(
            "undefined" == typeof window
              ? 0
              : new window.CustomEvent("timestamp").timeStamp
          );
        return (
          (0, a.useIsomorphicLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: s, touchStart: l },
              i = h ? h.current : c.current;
            return (0, o.addOutsideEventListener)(d.current, i, r, document, e);
          }, [t, n, s, l, r]),
          h || c
        );
      }
    },
    234404: (e, t, n) => {
      "use strict";
      n.d(t, { Loader: () => r });
      var i,
        a = n(50959),
        o = n(497754),
        s = n(504665),
        l = n.n(s);
      function r(e) {
        const {
            className: t,
            size: n = "medium",
            staticPosition: i,
            color: s = "black",
          } = e,
          r = o(l().item, l()[s], l()[n]);
        return a.createElement(
          "span",
          { className: o(l().loader, i && l().static, t) },
          a.createElement("span", { className: r }),
          a.createElement("span", { className: r }),
          a.createElement("span", { className: r })
        );
      }
      !(function (e) {
        (e.Medium = "medium"), (e.Small = "small");
      })(i || (i = {}));
    },
    823030: (e, t, n) => {
      "use strict";
      n.d(t, { SubmenuContext: () => a, SubmenuHandler: () => o });
      var i = n(50959);
      const a = i.createContext(null);
      function o(e) {
        const [t, n] = (0, i.useState)(null),
          o = (0, i.useRef)(null),
          s = (0, i.useRef)(new Map());
        return (
          (0, i.useEffect)(
            () => () => {
              null !== o.current && clearTimeout(o.current);
            },
            []
          ),
          i.createElement(
            a.Provider,
            {
              value: {
                current: t,
                setCurrent: function (e) {
                  null !== o.current &&
                    (clearTimeout(o.current), (o.current = null));
                  null === t
                    ? n(e)
                    : (o.current = setTimeout(() => {
                        (o.current = null), n(e);
                      }, 100));
                },
                registerSubmenu: function (e, t) {
                  return (
                    s.current.set(e, t),
                    () => {
                      s.current.delete(e);
                    }
                  );
                },
                isSubmenuNode: function (e) {
                  return Array.from(s.current.values()).some((t) => t(e));
                },
              },
            },
            e.children
          )
        );
      }
    },
    730654: (e, t, n) => {
      "use strict";
      n.d(t, { Portal: () => h, PortalContext: () => c });
      var i = n(50959),
        a = n(632227),
        o = n(925931),
        s = n(801808),
        l = n(481564),
        r = n(682925);
      class h extends i.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, o.nanoid)());
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions
          );
          (e.style.top = this.props.top || ""),
            (e.style.bottom = this.props.bottom || ""),
            (e.style.left = this.props.left || ""),
            (e.style.right = this.props.right || ""),
            (e.style.pointerEvents = this.props.pointerEvents || "");
          const t = this.props.className;
          return (
            t &&
              ("string" == typeof t
                ? e.classList.add(t)
                : e.classList.add(...t)),
            this.props.shouldTrapFocus &&
              !e.hasAttribute(l.FOCUS_TRAP_DATA_ATTRIBUTE) &&
              e.setAttribute(l.FOCUS_TRAP_DATA_ATTRIBUTE, "true"),
            this.props["aria-hidden"] && e.setAttribute("aria-hidden", "true"),
            a.createPortal(
              i.createElement(c.Provider, { value: this }, this.props.children),
              e
            )
          );
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
        _manager() {
          return null === this.context
            ? (0, s.getRootOverlapManager)()
            : this.context;
        }
      }
      h.contextType = r.SlotContext;
      const c = i.createContext(null);
    },
    682925: (e, t, n) => {
      "use strict";
      n.d(t, { Slot: () => a, SlotContext: () => o });
      var i = n(50959);
      class a extends i.Component {
        shouldComponentUpdate() {
          return !1;
        }
        render() {
          return i.createElement("div", {
            style: { position: "fixed", zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          });
        }
      }
      const o = i.createContext(null);
    },
    984950: (e, t, n) => {
      "use strict";
      n.d(t, { Switch: () => m, SwitchView: () => h });
      var i,
        a = n(50959),
        o = n(497754),
        s = n.n(o),
        l = n(234539),
        r = n(845658);
      function h(e) {
        const { size: t = "small", checked: n, disabled: i } = e;
        return a.createElement(
          "span",
          {
            className: s()(r.switchView, r[t], i && r.disabled, n && r.checked),
          },
          a.createElement("span", { className: r.track }),
          a.createElement("span", { className: r.thumb })
        );
      }
      !(function (e) {
        (e.Small = "small"), (e.Medium = "medium"), (e.Large = "large");
      })(i || (i = {}));
      var c,
        d = n(930202),
        u = n(420071),
        v = n.n(u);
      function m(e) {
        const t = (0, a.useContext)(l.CustomBehaviourContext),
          {
            size: n,
            intent: i = "default",
            checked: s,
            className: r,
            enableActiveStateStyles: c = t.enableActiveStateStyles,
            disabled: u,
            onChange: m,
            title: p,
            id: g,
            name: b,
            value: w,
            tabIndex: f,
            role: C = "switch",
            ariaDisabled: y,
            reference: _,
            ariaLabelledBy: S,
            ariaLabel: x,
            ...M
          } = e;
        return a.createElement(
          "span",
          { className: o(r, v().switcher) },
          a.createElement("input", {
            ...M,
            type: "checkbox",
            className: o(
              v().input,
              c && v().activeStylesEnabled,
              s && v().checked,
              u && v().disabled
            ),
            role: C,
            "aria-checked": s,
            checked: s,
            onKeyDown: (e) => {
              13 === (0, d.hashFromEvent)(e) && e.currentTarget?.click();
            },
            onChange: m,
            disabled: u,
            "aria-disabled": y,
            tabIndex: f,
            title: p,
            id: g,
            name: b,
            value: w,
            ref: _,
            "aria-label": x,
            "aria-labelledby": S,
          }),
          a.createElement(
            "span",
            { className: o(v().thumbWrapper, v()[i]) },
            a.createElement(h, { checked: s, size: n, disabled: u })
          )
        );
      }
      !(function (e) {
        (e.Default = "default"), (e.Select = "select");
      })(c || (c = {}));
    },
    801808: (e, t, n) => {
      "use strict";
      n.d(t, { OverlapManager: () => s, getRootOverlapManager: () => r });
      var i = n(650151),
        a = n(481564);
      class o {
        constructor() {
          this._storage = [];
        }
        add(e) {
          this._storage.push(e);
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t);
        }
        has(e) {
          return this._storage.includes(e);
        }
        getItems() {
          return this._storage;
        }
      }
      class s {
        constructor(e = document) {
          (this._storage = new o()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment());
        }
        setContainer(e) {
          const t = this._container,
            n = null === e ? this._document.createDocumentFragment() : e;
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          })(t, n),
            (this._container = n);
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
        ensureWindow(e, t = { position: "fixed", direction: "normal" }) {
          const n = this._windows.get(e);
          if (void 0 !== n) return n;
          this.registerWindow(e);
          const i = this._document.createElement("div");
          if (
            ((i.style.position = t.position),
            (i.style.zIndex = this._index.toString()),
            (i.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length;
            if (t.index >= e) this._container.appendChild(i);
            else if (t.index <= 0)
              this._container.insertBefore(i, this._container.firstChild);
            else {
              const e = this._container.childNodes[t.index];
              this._container.insertBefore(i, e);
            }
          } else
            "reverse" === t.direction
              ? this._container.insertBefore(i, this._container.firstChild)
              : this._container.appendChild(i);
          return this._windows.set(e, i), ++this._index, i;
        }
        unregisterWindow(e) {
          this._storage.remove(e);
          const t = this._windows.get(e);
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e));
        }
        getZindex(e) {
          const t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || "0");
        }
        moveLastWindowToTop() {
          const e = this._storage.getItems(),
            t = e[e.length - 1];
          t && this.moveToTop(t);
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            const t = this.ensureWindow(e);
            this._windows.forEach((e, n) => {
              e.hasAttribute(a.FOCUS_TRAP_DATA_ATTRIBUTE) &&
                e.setAttribute(
                  a.FOCUS_TRAP_DATA_ATTRIBUTE,
                  e === t ? "true" : "false"
                );
            }),
              (t.style.zIndex = (++this._index).toString());
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e);
        }
      }
      const l = new WeakMap();
      function r(e = document) {
        const t = e.getElementById("overlap-manager-root");
        if (null !== t) return (0, i.ensureDefined)(l.get(t));
        {
          const t = new s(e),
            n = (function (e) {
              const t = e.createElement("div");
              return (
                (t.style.position = "absolute"),
                (t.style.zIndex = (150).toString()),
                (t.style.top = "0px"),
                (t.style.left = "0px"),
                (t.id = "overlap-manager-root"),
                t
              );
            })(e);
          return l.set(n, t), t.setContainer(n), e.body.appendChild(n), t;
        }
      }
      var h;
      !(function (e) {
        e[(e.BaseZindex = 150)] = "BaseZindex";
      })(h || (h = {}));
    },
    285089: (e, t, n) => {
      "use strict";
      n.d(t, { setFixedBodyState: () => r });
      var i = n(735922);
      const a = () => !window.matchMedia("(min-width: 768px)").matches,
        o = () => !window.matchMedia("(min-width: 1280px)").matches;
      let s = 0,
        l = !1;
      function r(e) {
        const { body: t } = document,
          n = t.querySelector(".widgetbar-wrap");
        if (e && 1 == ++s) {
          const e = (0, i.getCSSProperty)(t, "overflow"),
            a = (0, i.getCSSPropertyNumericValue)(t, "padding-right");
          "hidden" !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            ((0, i.setStyle)(n, "right", `${(0, i.getScrollbarWidth)()}px`),
            (t.style.paddingRight = `${a + (0, i.getScrollbarWidth)()}px`),
            (l = !0)),
            t.classList.add("i-no-scroll");
        } else if (
          !e &&
          s > 0 &&
          0 == --s &&
          (t.classList.remove("i-no-scroll"), l)
        ) {
          (0, i.setStyle)(n, "right", "0px");
          let e = 0;
          (e = n
            ? ((r = (0, i.getContentWidth)(n)),
              a() ? 0 : o() ? 45 : Math.min(Math.max(r, 45), 450))
            : 0),
            t.scrollHeight <= t.clientHeight &&
              (e -= (0, i.getScrollbarWidth)()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + "px"),
            (l = !1);
        }
        var r;
      }
    },
    366171: (e, t, n) => {
      "use strict";
      n.d(t, { SymbolSearchDialogFooter: () => l });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(434625);
      function l(e) {
        const { className: t, children: n } = e;
        return i.createElement("div", { className: o()(s.footer, t) }, n);
      }
    },
    578601: (e, t, n) => {
      "use strict";
      n.d(t, { useRowsNavigation: () => c });
      var i = n(50959),
        a = n(650151),
        o = n(442092),
        s = n(180185),
        l = n(333086),
        r = n(32556);
      const h = [37, 39, 38, 40];
      function c(e) {
        const t = (0, i.useRef)(null);
        return (
          (0, i.useLayoutEffect)(() => {
            const e = (0, a.ensureNotNull)(t.current),
              n = () => {
                const n = (0, o.queryTabbableElements)(e).sort(
                  o.navigationOrderComparator
                );
                if (
                  0 === n.length ||
                  (n[0].parentElement &&
                    !v(n[0].parentElement, (0, a.ensureNotNull)(t.current)))
                ) {
                  const i = (function (e) {
                    const n = u(e).sort(o.navigationOrderComparator),
                      i = n.find((e) => v(e, (0, a.ensureNotNull)(t.current)));
                    if (!i) return null;
                    const s = Array.from(i.children);
                    if (!s.length) return null;
                    return s[0];
                  })(e);
                  if (null === i) return;
                  if (((0, l.becomeMainElement)(i), n.length > 0))
                    for (const e of n) (0, l.becomeSecondaryElement)(e);
                }
              };
            return (
              window.addEventListener("keyboard-navigation-activation", n),
              n(),
              () =>
                window.removeEventListener("keyboard-navigation-activation", n)
            );
          }, []),
          [
            t,
            function (t) {
              if (t.defaultPrevented) return;
              const n = (0, s.hashFromEvent)(t);
              if (!h.includes(n)) return;
              const i = document.activeElement;
              if (!(i instanceof HTMLElement)) return;
              const a = t.currentTarget;
              let l, c;
              if (e) {
                const e = i.parentElement;
                (l = e ? Array.from(e.children) : []), (c = l.indexOf(i));
              } else
                (l = ((v = a),
                Array.from(
                  v.querySelectorAll(
                    "button:not([disabled]):not([aria-disabled])"
                  )
                ).filter((0, r.createScopedVisibleElementFilter)(v))).sort(
                  o.navigationOrderComparator
                )),
                  (c = l.indexOf(i));
              var v;
              if (0 === l.length || -1 === c) return;
              const p = (0, o.mapKeyCodeToDirection)(n);
              switch (p) {
                case "inlinePrev":
                  if ((t.preventDefault(), !e && 0 === c)) break;
                  m(d(l, c, -1));
                  break;
                case "inlineNext":
                  if ((t.preventDefault(), !e && c === l.length - 1)) break;
                  m(d(l, c, 1));
                  break;
                case "blockPrev":
                case "blockNext":
                  ((n) => {
                    if (!document.activeElement) return;
                    const i = u(a),
                      o = document.activeElement.parentElement;
                    if (!o) return;
                    const s = Array.from(o.children).indexOf(
                      document.activeElement
                    );
                    if (-1 === s) return;
                    const l =
                      i[
                        "blockNext" === n ? i.indexOf(o) + 1 : i.indexOf(o) - 1
                      ];
                    if (!l) return;
                    t.preventDefault();
                    const r = Array.from(l.children);
                    r.length && (!e && s <= r.length - 1 ? m(r[s]) : m(r[0]));
                  })(p);
              }
            },
          ]
        );
      }
      function d(e, t, n) {
        return e[(t + e.length + n) % e.length];
      }
      function u(e) {
        return Array.from(e.querySelectorAll('[data-role="row"]')).filter(
          (0, r.createScopedVisibleElementFilter)(e)
        );
      }
      function v(e, t) {
        const n = (0, a.ensureNotNull)(e.parentElement).offsetTop,
          i = n + (0, a.ensureNotNull)(e.parentElement).clientHeight,
          o = t.scrollTop,
          s = o + t.clientHeight;
        return n >= o && i <= s;
      }
      function m(e) {
        document.activeElement &&
          (0, l.becomeSecondaryElement)(document.activeElement),
          (0, l.becomeMainElement)(e),
          e.focus();
      }
    },
    163694: (e, t, n) => {
      "use strict";
      n.d(t, { DrawerContext: () => s, DrawerManager: () => o });
      var i = n(50959),
        a = n(285089);
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
            ((0, a.setFixedBodyState)(!0), (this._isBodyFixed = !0)),
            t.stack.length &&
              !this.state.stack.length &&
              this._isBodyFixed &&
              ((0, a.setFixedBodyState)(!1), (this._isBodyFixed = !1));
        }
        componentWillUnmount() {
          this.state.stack.length &&
            this._isBodyFixed &&
            (0, a.setFixedBodyState)(!1);
        }
        render() {
          return i.createElement(
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
      const s = i.createContext(null);
    },
    759339: (e, t, n) => {
      "use strict";
      n.d(t, { Drawer: () => v });
      var i = n(50959),
        a = n(650151),
        o = n(497754),
        s = n(924910),
        l = n(8361),
        r = n(163694),
        h = n(28466),
        c = n(742554),
        d = n(536718);
      var u;
      function v(e) {
        const {
            position: t = "Bottom",
            onClose: n,
            children: c,
            reference: u,
            className: v,
            theme: p = d,
          } = e,
          g = (0, a.ensureNotNull)((0, i.useContext)(r.DrawerContext)),
          [b] = (0, i.useState)(() => (0, s.randomHash)()),
          w = (0, i.useRef)(null),
          f = (0, i.useContext)(h.CloseDelegateContext);
        return (
          (0, i.useLayoutEffect)(
            () => (
              (0, a.ensureNotNull)(w.current).focus({ preventScroll: !0 }),
              f.subscribe(g, n),
              g.addDrawer(b),
              () => {
                g.removeDrawer(b), f.unsubscribe(g, n);
              }
            ),
            []
          ),
          i.createElement(
            l.Portal,
            null,
            i.createElement(
              "div",
              { ref: u, className: o(d.wrap, d[`position${t}`]) },
              b === g.currentDrawer &&
                i.createElement("div", { className: d.backdrop, onClick: n }),
              i.createElement(
                m,
                {
                  className: o(p.drawer, d[`position${t}`], v),
                  ref: w,
                  "data-name": e["data-name"],
                },
                c
              )
            )
          )
        );
      }
      !(function (e) {
        (e.Left = "Left"), (e.Bottom = "Bottom");
      })(u || (u = {}));
      const m = (0, i.forwardRef)((e, t) => {
        const { className: n, ...a } = e;
        return i.createElement(c.TouchScrollContainer, {
          className: o(d.drawer, n),
          tabIndex: -1,
          ref: t,
          ...a,
        });
      });
    },
    585938: (e, t, n) => {
      "use strict";
      n.d(t, { useForceUpdate: () => i.useForceUpdate });
      var i = n(813550);
    },
    930052: (e, t, n) => {
      "use strict";
      n.d(t, {
        MatchMedia: () => a,
      });
      var i = n(50959);
      class a extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._handleChange = () => {
              this.forceUpdate();
            }),
            (this.state = { query: window.matchMedia(this.props.rule) });
        }
        componentDidMount() {
          this._subscribe(this.state.query);
        }
        componentDidUpdate(e, t) {
          this.state.query !== t.query &&
            (this._unsubscribe(t.query), this._subscribe(this.state.query));
        }
        componentWillUnmount() {
          this._unsubscribe(this.state.query);
        }
        render() {
          return this.props.children(this.state.query.matches);
        }
        static getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media
            ? { query: window.matchMedia(e.rule) }
            : null;
        }
        _subscribe(e) {
          e.addEventListener("change", this._handleChange);
        }
        _unsubscribe(e) {
          e.removeEventListener("change", this._handleChange);
        }
      }
    },
    230553: (e, t, n) => {
      "use strict";
      n.d(t, { MenuContext: () => i });
      const i = n(50959).createContext(null);
    },
    510618: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_MENU_THEME: () => g, Menu: () => w });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(650151),
        l = n(822960),
        r = n(409174),
        h = n(753327),
        c = n(370981),
        d = n(801808),
        u = n(926032),
        v = n(823030),
        m = n(230553),
        p = n(667797);
      const g = p;
      var b;
      !(function (e) {
        e[(e.IndentFromWindow = 0)] = "IndentFromWindow";
      })(b || (b = {}));
      class w extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._containerRef = null),
            (this._scrollWrapRef = null),
            (this._raf = null),
            (this._scrollRaf = null),
            (this._scrollTimeout = void 0),
            (this._manager = new d.OverlapManager()),
            (this._hotkeys = null),
            (this._scroll = 0),
            (this._handleContainerRef = (e) => {
              (this._containerRef = e),
                this.props.reference &&
                  ("function" == typeof this.props.reference &&
                    this.props.reference(e),
                  "object" == typeof this.props.reference &&
                    (this.props.reference.current = e));
            }),
            (this._handleScrollWrapRef = (e) => {
              (this._scrollWrapRef = e),
                "function" == typeof this.props.scrollWrapReference &&
                  this.props.scrollWrapReference(e),
                "object" == typeof this.props.scrollWrapReference &&
                  (this.props.scrollWrapReference.current = e);
            }),
            (this._handleCustomRemeasureDelegate = () => {
              this._resizeForced(), this._handleMeasure();
            }),
            (this._handleMeasure = ({
              callback: e,
              forceRecalcPosition: t,
            } = {}) => {
              if (this.state.isMeasureValid && !t) return;
              const { position: n } = this.props,
                i = (0, s.ensureNotNull)(this._containerRef);
              let a = i.getBoundingClientRect();
              const o = document.documentElement.clientHeight,
                r = document.documentElement.clientWidth,
                h = this.props.closeOnScrollOutsideOffset ?? 0;
              let c = o - 0 - h;
              const d = a.height > c;
              if (d) {
                ((0, s.ensureNotNull)(this._scrollWrapRef).style.overflowY =
                  "scroll"),
                  (a = i.getBoundingClientRect());
              }
              const { width: u, height: v } = a,
                m =
                  "function" == typeof n
                    ? n({
                        contentWidth: u,
                        contentHeight: v,
                        availableWidth: r,
                        availableHeight: o,
                      })
                    : n,
                p = m?.indentFromWindow?.left ?? 0,
                g =
                  r -
                  (m.overrideWidth ?? u) -
                  (m?.indentFromWindow?.right ?? 0),
                b = (0, l.clamp)(m.x, p, Math.max(p, g)),
                w = (m?.indentFromWindow?.top ?? 0) + h,
                f =
                  o -
                  (m.overrideHeight ?? v) -
                  (m?.indentFromWindow?.bottom ?? 0);
              let C = (0, l.clamp)(m.y, w, Math.max(w, f));
              if (
                (m.forbidCorrectYCoord &&
                  C < m.y &&
                  ((c -= m.y - C), (C = m.y)),
                t &&
                  void 0 !== this.props.closeOnScrollOutsideOffset &&
                  m.y <= this.props.closeOnScrollOutsideOffset)
              )
                return void this._handleGlobalClose(!0);
              const y = m.overrideHeight ?? (d ? c : void 0);
              this.setState(
                {
                  appearingMenuHeight: t ? this.state.appearingMenuHeight : y,
                  appearingMenuWidth: t
                    ? this.state.appearingMenuWidth
                    : m.overrideWidth,
                  appearingPosition: { x: b, y: C },
                  isMeasureValid: !0,
                },
                () => {
                  this.props.doNotRestorePosition ||
                    this._restoreScrollPosition(),
                    e && e();
                }
              );
            }),
            (this._restoreScrollPosition = () => {
              const e = document.activeElement,
                t = (0, s.ensureNotNull)(this._containerRef);
              if (null !== e && t.contains(e))
                try {
                  e.scrollIntoView();
                } catch (e) {}
              else
                (0, s.ensureNotNull)(this._scrollWrapRef).scrollTop =
                  this._scroll;
            }),
            (this._resizeForced = () => {
              this.setState({
                appearingMenuHeight: void 0,
                appearingMenuWidth: void 0,
                appearingPosition: void 0,
                isMeasureValid: void 0,
              });
            }),
            (this._resize = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  this.setState({
                    appearingMenuHeight: void 0,
                    appearingMenuWidth: void 0,
                    appearingPosition: void 0,
                    isMeasureValid: void 0,
                  }),
                    (this._raf = null);
                }));
            }),
            (this._handleGlobalClose = (e) => {
              this.props.onClose(e);
            }),
            (this._handleSlot = (e) => {
              this._manager.setContainer(e);
            }),
            (this._handleScroll = () => {
              this._scroll = (0, s.ensureNotNull)(
                this._scrollWrapRef
              ).scrollTop;
            }),
            (this._handleScrollOutsideEnd = () => {
              clearTimeout(this._scrollTimeout),
                (this._scrollTimeout = setTimeout(() => {
                  this._handleMeasure({ forceRecalcPosition: !0 });
                }, 80));
            }),
            (this._handleScrollOutside = (e) => {
              e.target !== this._scrollWrapRef &&
                (this._handleScrollOutsideEnd(),
                null === this._scrollRaf &&
                  (this._scrollRaf = requestAnimationFrame(() => {
                    this._handleMeasure({ forceRecalcPosition: !0 }),
                      (this._scrollRaf = null);
                  })));
            }),
            (this.state = {});
        }
        componentDidMount() {
          this._handleMeasure({ callback: this.props.onOpen });
          const {
            customCloseDelegate: e = c.globalCloseDelegate,
            customRemeasureDelegate: t,
          } = this.props;
          e.subscribe(this, this._handleGlobalClose),
            t?.subscribe(null, this._handleCustomRemeasureDelegate),
            window.addEventListener("resize", this._resize);
          const n = null !== this.context;
          this._hotkeys ||
            n ||
            ((this._hotkeys = u.createGroup({ desc: "Popup menu" })),
            this._hotkeys.add({
              desc: "Close",
              hotkey: 27,
              handler: () => {
                this.props.onKeyboardClose && this.props.onKeyboardClose(),
                  this._handleGlobalClose();
              },
            })),
            this.props.repositionOnScroll &&
              window.addEventListener("scroll", this._handleScrollOutside, {
                capture: !0,
              });
        }
        componentDidUpdate() {
          this._handleMeasure();
        }
        componentWillUnmount() {
          const {
            customCloseDelegate: e = c.globalCloseDelegate,
            customRemeasureDelegate: t,
          } = this.props;
          e.unsubscribe(this, this._handleGlobalClose),
            t?.unsubscribe(null, this._handleCustomRemeasureDelegate),
            window.removeEventListener("resize", this._resize),
            window.removeEventListener("scroll", this._handleScrollOutside, {
              capture: !0,
            }),
            this._hotkeys && (this._hotkeys.destroy(), (this._hotkeys = null)),
            null !== this._raf &&
              (cancelAnimationFrame(this._raf), (this._raf = null)),
            null !== this._scrollRaf &&
              (cancelAnimationFrame(this._scrollRaf), (this._scrollRaf = null)),
            this._scrollTimeout && clearTimeout(this._scrollTimeout);
        }
        render() {
          const {
              id: e,
              role: t,
              "aria-label": n,
              "aria-labelledby": a,
              "aria-activedescendant": s,
              "aria-hidden": l,
              "aria-describedby": c,
              "aria-invalid": d,
              children: u,
              minWidth: g,
              theme: b = p,
              className: w,
              maxHeight: C,
              onMouseOver: y,
              onMouseOut: _,
              onKeyDown: S,
              onFocus: x,
              onBlur: M,
            } = this.props,
            {
              appearingMenuHeight: E,
              appearingMenuWidth: T,
              appearingPosition: k,
              isMeasureValid: H,
            } = this.state,
            A = {
              "--ui-kit-menu-max-width": `${k && k.x}px`,
              maxWidth: "calc(100vw - var(--ui-kit-menu-max-width) - 6px)",
            };
          return i.createElement(
            m.MenuContext.Provider,
            { value: this },
            i.createElement(
              v.SubmenuHandler,
              null,
              i.createElement(
                h.SlotContext.Provider,
                { value: this._manager },
                i.createElement(
                  "div",
                  {
                    id: e,
                    role: t,
                    "aria-label": n,
                    "aria-labelledby": a,
                    "aria-activedescendant": s,
                    "aria-hidden": l,
                    "aria-describedby": c,
                    "aria-invalid": d,
                    className: o()(w, b.menuWrap, !H && b.isMeasuring),
                    style: {
                      height: E,
                      left: k && k.x,
                      minWidth: g,
                      position: "fixed",
                      top: k && k.y,
                      width: T,
                      ...(this.props.limitMaxWidth && A),
                    },
                    "data-name": this.props["data-name"],
                    "data-tooltip-show-on-focus":
                      this.props["data-tooltip-show-on-focus"],
                    ref: this._handleContainerRef,
                    onScrollCapture: this.props.onScroll,
                    onContextMenu: r.preventDefaultForContextMenu,
                    tabIndex: this.props.tabIndex,
                    onMouseOver: y,
                    onMouseOut: _,
                    onKeyDown: S,
                    onFocus: x,
                    onBlur: M,
                  },
                  i.createElement(
                    "div",
                    {
                      className: o()(
                        b.scrollWrap,
                        !this.props.noMomentumBasedScroll && b.momentumBased
                      ),
                      style: {
                        overflowY: void 0 !== E ? "scroll" : "auto",
                        maxHeight: C,
                      },
                      onScrollCapture: this._handleScroll,
                      ref: this._handleScrollWrapRef,
                    },
                    i.createElement(f, { className: b.menuBox }, u)
                  )
                )
              ),
              i.createElement(h.Slot, { reference: this._handleSlot })
            )
          );
        }
        update(e) {
          e ? this._resizeForced() : this._resize();
        }
        focus(e) {
          this._containerRef?.focus(e);
        }
        blur() {
          this._containerRef?.blur();
        }
      }
      function f(e) {
        const t = (0, s.ensureNotNull)((0, i.useContext)(v.SubmenuContext)),
          n = i.useRef(null);
        return i.createElement(
          "div",
          {
            ref: n,
            className: e.className,
            onMouseOver: function (e) {
              if (
                !(
                  null !== t.current &&
                  e.target instanceof Node &&
                  ((i = e.target), n.current?.contains(i))
                )
              )
                return;
              var i;
              t.isSubmenuNode(e.target) || t.setCurrent(null);
            },
            "data-name": "menu-inner",
          },
          e.children
        );
      }
      w.contextType = v.SubmenuContext;
    },
    614417: (e, t, n) => {
      "use strict";
      n.d(t, { multilineLabelWithIconAndToolboxTheme: () => s });
      var i = n(493173),
        a = n(509059),
        o = n(395214);
      const s = (0, i.mergeThemes)(a, o);
    },
    917850: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenuSeparator: () => r });
      var i,
        a = n(50959),
        o = n(497754),
        s = n.n(o),
        l = n(700238);
      function r(e) {
        const { size: t = "normal", className: n, ariaHidden: i = !1 } = e;
        return a.createElement("div", {
          className: s()(
            l.separator,
            "small" === t && l.small,
            "normal" === t && l.normal,
            "large" === t && l.large,
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
    28466: (e, t, n) => {
      "use strict";
      n.d(t, { CloseDelegateContext: () => o });
      var i = n(50959),
        a = n(370981);
      const o = i.createContext(a.globalCloseDelegate);
    },
    8361: (e, t, n) => {
      "use strict";
      n.d(t, { Portal: () => i.Portal, PortalContext: () => i.PortalContext });
      var i = n(730654);
    },
    753327: (e, t, n) => {
      "use strict";
      n.d(t, { Slot: () => i.Slot, SlotContext: () => i.SlotContext });
      var i = n(682925);
    },
    515783: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetCaret: () => r });
      var i = n(50959),
        a = n(497754),
        o = n(878112),
        s = n(149128),
        l = n(100578);
      function r(e) {
        const { dropped: t, className: n } = e;
        return i.createElement(o.Icon, {
          className: a(n, s.icon, { [s.dropped]: t }),
          icon: l,
        });
      }
    },
    742554: (e, t, n) => {
      "use strict";
      n.d(t, { TouchScrollContainer: () => h });
      var i = n(50959),
        a = n(259142),
        o = n(650151),
        s = n(601227);
      const l = CSS.supports("overscroll-behavior", "none");
      let r = 0;
      const h = (0, i.forwardRef)((e, t) => {
        const { children: n, ...o } = e,
          h = (0, i.useRef)(null);
        return (
          (0, i.useImperativeHandle)(t, () => h.current),
          (0, i.useLayoutEffect)(() => {
            if (s.CheckMobile.iOS())
              return (
                r++,
                null !== h.current &&
                  (l
                    ? 1 === r &&
                      (document.body.style.overscrollBehavior = "none")
                    : (0, a.disableBodyScroll)(h.current, {
                        allowTouchMove: c(h),
                      })),
                () => {
                  r--,
                    null !== h.current &&
                      (l
                        ? 0 === r &&
                          (document.body.style.overscrollBehavior = "")
                        : (0, a.enableBodyScroll)(h.current));
                }
              );
          }, []),
          i.createElement("div", { ref: h, ...o }, n)
        );
      });
      function c(e) {
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
            for (const a of Object.keys(t)) {
              const o = n[a] || a;
              o in e && (i[a] = [e[o], t[a]].join(" "));
            }
            return i;
          })(e, t, n)
        );
      }
      n.d(t, { mergeThemes: () => i });
    },
    369708: (e) => {
      e.exports = {
        summary: "summary-ynHBVe1n",
        hovered: "hovered-ynHBVe1n",
        caret: "caret-ynHBVe1n",
      };
    },
    166114: (e) => {
      e.exports = {
        item: "item-KMkDzD5K",
        accessible: "accessible-KMkDzD5K",
        round: "round-KMkDzD5K",
        active: "active-KMkDzD5K",
      };
    },
    997542: (e) => {
      e.exports = { accessible: "accessible-raQdxQp0" };
    },
    189888: (e) => {
      e.exports = { button: "button-LkmyTVRc", active: "active-LkmyTVRc" };
    },
    717479: (e) => {
      e.exports = {
        wrapper: "wrapper-psOC5oyI",
        labelRow: "labelRow-psOC5oyI",
        label: "label-psOC5oyI",
        labelHint: "labelHint-psOC5oyI",
        labelOn: "labelOn-psOC5oyI",
      };
    },
    222315: (e) => {
      e.exports = {
        wrapper: "wrapper-bl9AR3Gv",
        hovered: "hovered-bl9AR3Gv",
        switchWrap: "switchWrap-bl9AR3Gv",
        withIcon: "withIcon-bl9AR3Gv",
        labelRow: "labelRow-bl9AR3Gv",
        label: "label-bl9AR3Gv",
        icon: "icon-bl9AR3Gv",
        labelHint: "labelHint-bl9AR3Gv",
        labelOn: "labelOn-bl9AR3Gv",
        accessible: "accessible-bl9AR3Gv",
      };
    },
    309306: (e) => {
      e.exports = { button: "button-Y1TCZogJ", active: "active-Y1TCZogJ" };
    },
    552447: (e) => {
      e.exports = { title: "title-dYizlxEN" };
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
    723225: (e) => {
      e.exports = {
        button: "button-ptpAHg8E",
        withText: "withText-ptpAHg8E",
        withoutText: "withoutText-ptpAHg8E",
      };
    },
    697373: (e) => {
      e.exports = { button: "button-xNqEcuN2" };
    },
    568484: (e) => {
      e.exports = { spinnerWrap: "spinnerWrap-cZT0OZe0" };
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
    182316: (e) => {
      e.exports = {
        button: "button-neROVfUe",
        first: "first-neROVfUe",
        last: "last-neROVfUe",
      };
    },
    54663: (e) => {
      e.exports = { wrap: "wrap-n5bmFxyX" };
    },
    921569: (e) => {
      e.exports = { hidden: "hidden-5MVS18J8" };
    },
    63295: (e) => {
      e.exports = {
        "tablet-small-breakpoint": "(max-width: 440px)",
        item: "item-o5a0MQMm",
        withIcon: "withIcon-o5a0MQMm",
        shortcut: "shortcut-o5a0MQMm",
        loading: "loading-o5a0MQMm",
        icon: "icon-o5a0MQMm",
      };
    },
    241340: (e) => {
      e.exports = {
        button: "button-b3Cgff6l",
        group: "group-b3Cgff6l",
        menu: "menu-b3Cgff6l",
        betaBadge: "betaBadge-b3Cgff6l",
        newBadge: "newBadge-b3Cgff6l",
        label: "label-b3Cgff6l",
      };
    },
    900935: (e) => {
      e.exports = {
        customTradingViewStyleButton: "customTradingViewStyleButton-zigjK1n2",
        withoutIcon: "withoutIcon-zigjK1n2",
      };
    },
    569744: (e) => {
      e.exports = {
        dropdown: "dropdown-l0nf43ai",
        label: "label-l0nf43ai",
        smallWidthTitle: "smallWidthTitle-l0nf43ai",
        smallWidthMenuItem: "smallWidthMenuItem-l0nf43ai",
        smallWidthWrapper: "smallWidthWrapper-l0nf43ai",
      };
    },
    18027: (e) => {
      e.exports = { value: "value-gwXludjS", selected: "selected-gwXludjS" };
    },
    723745: (e) => {
      e.exports = {
        smallWidthMenuItem: "smallWidthMenuItem-RmqZNwwp",
        menuItem: "menuItem-RmqZNwwp",
        remove: "remove-RmqZNwwp",
        signal: "signal-RmqZNwwp",
        "highlight-animation": "highlight-animation-RmqZNwwp",
      };
    },
    820905: (e) => {
      e.exports = {
        button: "button-S_1OCXUK",
        first: "first-S_1OCXUK",
        last: "last-S_1OCXUK",
        menu: "menu-S_1OCXUK",
        dropdown: "dropdown-S_1OCXUK",
        menuContent: "menuContent-S_1OCXUK",
        section: "section-S_1OCXUK",
        smallTabletSectionTitle: "smallTabletSectionTitle-S_1OCXUK",
        addCustomInterval: "addCustomInterval-S_1OCXUK",
        desktop: "desktop-S_1OCXUK",
        group: "group-S_1OCXUK",
      };
    },
    393293: (e) => {
      e.exports = {
        row: "row-IFnWgzyS",
        rowInner: "rowInner-IFnWgzyS",
        smallRow: "smallRow-IFnWgzyS",
        rowLabel: "rowLabel-IFnWgzyS",
        smallRowLabel: "smallRowLabel-IFnWgzyS",
        rowButtons: "rowButtons-IFnWgzyS",
        layoutButtonWrap: "layoutButtonWrap-IFnWgzyS",
        accessible: "accessible-IFnWgzyS",
        smallWidth: "smallWidth-IFnWgzyS",
        layoutButton: "layoutButton-IFnWgzyS",
        hovered: "hovered-IFnWgzyS",
        isActive: "isActive-IFnWgzyS",
        smallWidthLayoutButton: "smallWidthLayoutButton-IFnWgzyS",
        layoutButtons: "layoutButtons-IFnWgzyS",
      };
    },
    393998: (e) => {
      e.exports = {
        toggler: "toggler-WlD4m0Iu",
        hovered: "hovered-WlD4m0Iu",
        label: "label-WlD4m0Iu",
        centered: "centered-WlD4m0Iu",
        checked: "checked-WlD4m0Iu",
        switcherLabel: "switcherLabel-WlD4m0Iu",
      };
    },
    29582: (e) => {
      e.exports = {
        button: "button-aGeQPIIx",
        dropdown: "dropdown-aGeQPIIx",
        layoutType: "layoutType-aGeQPIIx",
        title: "title-aGeQPIIx",
        syncCharts: "syncCharts-aGeQPIIx",
        mobile: "mobile-aGeQPIIx",
        tabletWrapper: "tabletWrapper-aGeQPIIx",
        icon: "icon-aGeQPIIx",
        syncListWrapper: "syncListWrapper-aGeQPIIx",
        switcher: "switcher-aGeQPIIx",
        switchLabelWrap: "switchLabelWrap-aGeQPIIx",
        switchLabel: "switchLabel-aGeQPIIx",
        iconWrap: "iconWrap-aGeQPIIx",
        infoIcon: "infoIcon-aGeQPIIx",
        accessibleLabel: "accessibleLabel-aGeQPIIx",
      };
    },
    236488: (e) => {
      e.exports = { button: "button-gn9HMufu" };
    },
    875394: (e) => {
      e.exports = {
        button: "button-ZuDkGGhF",
        isDisabled: "isDisabled-ZuDkGGhF",
      };
    },
    852464: (e) => {
      e.exports = {
        saveString: "saveString-XVd1Kfjg",
        hidden: "hidden-XVd1Kfjg",
        loader: "loader-XVd1Kfjg",
      };
    },
    418603: (e) => {
      e.exports = {
        menuBtnWrap: "menuBtnWrap-yyMUOAN9",
        menu: "menu-yyMUOAN9",
        hintPlaceholder: "hintPlaceholder-yyMUOAN9",
        hintWrapper: "hintWrapper-yyMUOAN9",
        hintText: "hintText-yyMUOAN9",
        hintButton: "hintButton-yyMUOAN9",
        hintButtons: "hintButtons-yyMUOAN9",
        hintAdditionalButton: "hintAdditionalButton-yyMUOAN9",
        opened: "opened-yyMUOAN9",
        hover: "hover-yyMUOAN9",
        clicked: "clicked-yyMUOAN9",
        autoSaveWrapper: "autoSaveWrapper-yyMUOAN9",
        sharingWrapper: "sharingWrapper-yyMUOAN9",
        button: "button-yyMUOAN9",
        buttonSmallPadding: "buttonSmallPadding-yyMUOAN9",
        hintPlaceHolder: "hintPlaceHolder-yyMUOAN9",
        smallHintPlaceHolder: "smallHintPlaceHolder-yyMUOAN9",
        popupItemRowTabletSmall: "popupItemRowTabletSmall-yyMUOAN9",
        shortcut: "shortcut-yyMUOAN9",
        toolTitle: "toolTitle-yyMUOAN9",
        toolTitleMobile: "toolTitleMobile-yyMUOAN9",
        layoutItem: "layoutItem-yyMUOAN9",
        layoutMeta: "layoutMeta-yyMUOAN9",
        toolbox: "toolbox-yyMUOAN9",
        toolboxSmall: "toolboxSmall-yyMUOAN9",
        layoutTitle: "layoutTitle-yyMUOAN9",
        layoutItemWrap: "layoutItemWrap-yyMUOAN9",
        layoutItemWrapSmall: "layoutItemWrapSmall-yyMUOAN9",
        layoutTitleSmall: "layoutTitleSmall-yyMUOAN9",
        textWrap: "textWrap-yyMUOAN9",
        text: "text-yyMUOAN9",
        withIcon: "withIcon-yyMUOAN9",
        sharingLabelWrap: "sharingLabelWrap-yyMUOAN9",
        titleSharingLabel: "titleSharingLabel-yyMUOAN9",
        switcherLabel: "switcherLabel-yyMUOAN9",
        iconWrap: "iconWrap-yyMUOAN9",
        infoIcon: "infoIcon-yyMUOAN9",
        accessibleLabel: "accessibleLabel-yyMUOAN9",
      };
    },
    592876: (e) => {
      e.exports = {
        button: "button-cq__ntSC",
        smallLeftPadding: "smallLeftPadding-cq__ntSC",
        text: "text-cq__ntSC",
        uppercase: "uppercase-cq__ntSC",
      };
    },
    475313: (e) => {
      e.exports = { description: "description-jgoQcEnP" };
    },
    197357: (e) => {
      e.exports = {
        wrap: "wrap-HXSqojvq",
        titleWrap: "titleWrap-HXSqojvq",
        indicators: "indicators-HXSqojvq",
        title: "title-HXSqojvq",
        icon: "icon-HXSqojvq",
        text: "text-HXSqojvq",
        titleTabletSmall: "titleTabletSmall-HXSqojvq",
        labelRow: "labelRow-HXSqojvq",
        label: "label-HXSqojvq",
      };
    },
    972154: (e) => {
      e.exports = {
        menu: "menu-hcofKPms",
        menuSmallTablet: "menuSmallTablet-hcofKPms",
        menuItemHeaderTabletSmall: "menuItemHeaderTabletSmall-hcofKPms",
        menuItemHeader: "menuItemHeader-hcofKPms",
      };
    },
    288506: (e) => {
      e.exports = {
        wrap: "wrap-jiC5bgmi",
        full: "full-jiC5bgmi",
        first: "first-jiC5bgmi",
        last: "last-jiC5bgmi",
        medium: "medium-jiC5bgmi",
        buttonWithFavorites: "buttonWithFavorites-jiC5bgmi",
      };
    },
    928282: (e) => {
      e.exports = { icon: "icon-uMfL97K2" };
    },
    321303: (e, t, n) => {
      "use strict";
      function i(e) {
        return e.includes(":") ? e.split(":") : ["", e];
      }
      n.d(t, { splitSymbolName: () => i });
    },
    565631: (e, t, n) => {
      "use strict";
      n.d(t, { AccessibleIconButton: () => o });
      var i = n(50959),
        a = n(511349);
      const o = (0, i.forwardRef)(function (e, t) {
        const { tooltip: n, ...o } = e;
        return i.createElement(a.ToolWidgetIconButton, {
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
      n.d(t, { AccessibleMenuButton: () => l });
      var i = n(50959),
        a = n(718736),
        o = n(679458),
        s = n(994567);
      const l = (0, i.forwardRef)(function (e, t) {
        const { tooltip: n, tag: l, buttonRef: r, reference: h, ...c } = e,
          d = (0, a.useFunctionalRefObject)(h ?? null);
        return i.createElement(o.ToolWidgetMenu, {
          "aria-label": n,
          ...c,
          ref: t,
          tag: l ?? "button",
          reference: r ?? d,
          "data-tooltip": n,
          onMenuKeyDown: s.handleAccessibleMenuKeyDown,
          onMenuFocus: (e) => (0, s.handleAccessibleMenuFocus)(e, r ?? d),
        });
      });
    },
    628741: (e, t, n) => {
      "use strict";
      n.d(t, { CollapsibleSection: () => r });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(515783),
        l = n(369708);
      const r = (0, i.forwardRef)(function (e, t) {
        const {
          open: n,
          summary: a,
          children: r,
          onStateChange: h,
          tabIndex: c,
          className: d,
          ...u
        } = e;
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              ...u,
              className: o()(d, l.summary),
              onClick: function () {
                h && h(!n);
              },
              "data-open": n,
              "aria-expanded": n,
              ref: t,
              tabIndex: c,
            },
            a,
            i.createElement(s.ToolWidgetCaret, {
              className: l.caret,
              dropped: Boolean(n),
            })
          ),
          n && r
        );
      });
    },
    840781: (e, t, n) => {
      "use strict";
      n.d(t, { MenuFavoriteButton: () => c });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(865266),
        l = n(577687),
        r = n(598448),
        h = n(189888);
      function c(e) {
        const { onClick: t, isFilled: n, isActive: a, ...c } = e,
          [d, u] = (0, s.useRovingTabindexElement)(null),
          v = n
            ? r.removeTitlesMap[r.RemoveTitleType.Remove]
            : r.removeTitlesMap[r.RemoveTitleType.Add];
        return (
          (0, i.useLayoutEffect)(() => {
            const e = d.current;
            e instanceof HTMLElement &&
              e.dispatchEvent(new CustomEvent("common-tooltip-update"));
          }, [v, d]),
          i.createElement(
            "button",
            {
              ref: d,
              tabIndex: u,
              onClick: t,
              className: o()(h.button, a && h.active, "apply-common-tooltip"),
              type: "button",
              "aria-label": v,
              "data-tooltip": v,
            },
            i.createElement(l.FavoriteButton, {
              ...c,
              isFilled: n,
              isActive: a,
              title: "",
            })
          )
        );
      }
    },
    372319: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_MENU_ITEM_SWITCHER_THEME: () => u,
        MenuItemSwitcher: () => v,
      });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(984950),
        l = n(878112),
        r = n(930202),
        h = n(865266),
        c = n(800417),
        d = n(222315);
      const u = d;
      function v(e) {
        const {
            role: t,
            checked: n,
            onChange: a,
            className: u,
            id: v,
            label: m,
            labelDescription: p,
            preventLabelHighlight: g,
            value: b,
            reference: w,
            switchReference: f,
            theme: C = d,
            disabled: y,
            switchRole: _,
            icon: S,
          } = e,
          [x, M] = (0, h.useRovingTabindexElement)(null),
          E = o()(C.label, n && !g && C.labelOn),
          T = o()(
            u,
            C.wrapper,
            n && C.wrapperWithOnLabel,
            p && C.wrapperWithDescription
          );
        return i.createElement(
          "label",
          {
            role: t,
            className: o()(T, S && C.withIcon, d.accessible),
            htmlFor: v,
            ref: w,
            onKeyDown: function (e) {
              if (e.target !== e.currentTarget) return;
              const t = (0, r.hashFromEvent)(e);
              (13 !== t && 32 !== t) ||
                (e.preventDefault(),
                x.current instanceof HTMLElement && x.current.click());
            },
            tabIndex: M,
            "data-role": "menuitem",
            "aria-disabled": e.disabled || void 0,
            "aria-selected": n,
          },
          void 0 !== S &&
            i.createElement(l.Icon, { className: C.icon, icon: S }),
          i.createElement(
            "div",
            { className: C.labelRow },
            i.createElement("div", { className: E }, m),
            p && i.createElement("div", { className: C.labelHint }, p)
          ),
          i.createElement(
            "div",
            { className: d.switchWrap },
            i.createElement(s.Switch, {
              disabled: y,
              className: C.switch,
              reference: function (e) {
                x(e), f?.(e);
              },
              checked: n,
              onChange: function (e) {
                const t = e.target.checked;
                void 0 !== a && a(t);
              },
              value: b,
              tabIndex: -1,
              id: v,
              role: _,
              ariaDisabled: !0,
              ...(0, c.filterDataProps)(e),
            })
          )
        );
      }
    },
    455496: (e, t, n) => {
      "use strict";
      n.d(t, { MenuRemoveButton: () => d });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(609838),
        l = n(865266),
        r = n(72621),
        h = n(460925),
        c = n(309306);
      function d(e) {
        const { onClick: t, isActive: a, onKeyDown: d, ...u } = e,
          [v, m] = (0, l.useRovingTabindexElement)(null);
        return i.createElement(
          "button",
          {
            ref: v,
            tabIndex: m,
            onClick: t,
            onKeyDown: d,
            className: o()(c.button, a && c.active, "apply-common-tooltip"),
            "aria-label": s.t(null, void 0, n(767410)),
            "data-tooltip": s.t(null, void 0, n(767410)),
            type: "button",
          },
          i.createElement(r.RemoveButton, {
            ...u,
            isActive: a,
            title: "",
            icon: h,
          })
        );
      }
    },
    162458: (e, t, n) => {
      "use strict";
      n.d(t, {
        HorizontalAttachEdge: () => a,
        HorizontalDropDirection: () => s,
        VerticalAttachEdge: () => i,
        VerticalDropDirection: () => o,
        getPopupPositioner: () => h,
      });
      var i,
        a,
        o,
        s,
        l = n(650151);
      !(function (e) {
        (e[(e.Top = 0)] = "Top"),
          (e[(e.Bottom = 1)] = "Bottom"),
          (e[(e.AutoStrict = 2)] = "AutoStrict");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(a || (a = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = "FromTopToBottom"),
            (e[(e.FromBottomToTop = 1)] = "FromBottomToTop");
        })(o || (o = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = "FromLeftToRight"),
            (e[(e.FromRightToLeft = 1)] = "FromRightToLeft");
        })(s || (s = {}));
      const r = {
        verticalAttachEdge: i.Bottom,
        horizontalAttachEdge: a.Left,
        verticalDropDirection: o.FromTopToBottom,
        horizontalDropDirection: s.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
        matchButtonAndListboxWidths: !1,
      };
      function h(e, t) {
        return (n) => {
          const { contentWidth: h, contentHeight: c, availableHeight: d } = n,
            u = (0, l.ensureNotNull)(e).getBoundingClientRect(),
            {
              horizontalAttachEdge: v = r.horizontalAttachEdge,
              horizontalDropDirection: m = r.horizontalDropDirection,
              horizontalMargin: p = r.horizontalMargin,
              verticalMargin: g = r.verticalMargin,
              matchButtonAndListboxWidths: b = r.matchButtonAndListboxWidths,
            } = t;
          let w = t.verticalAttachEdge ?? r.verticalAttachEdge,
            f = t.verticalDropDirection ?? r.verticalDropDirection;
          w === i.AutoStrict &&
            (d < u.y + u.height + g + c
              ? ((w = i.Top), (f = o.FromBottomToTop))
              : ((w = i.Bottom), (f = o.FromTopToBottom)));
          const C = w === i.Top ? -1 * g : g,
            y = v === a.Right ? u.right : u.left,
            _ = w === i.Top ? u.top : u.bottom,
            S = {
              x: y - (m === s.FromRightToLeft ? h : 0) + p,
              y: _ - (f === o.FromBottomToTop ? c : 0) + C,
            };
          return b && (S.overrideWidth = u.width), S;
        };
      }
    },
    155352: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => l,
        ToolWidgetButton: () => r,
      });
      var i = n(50959),
        a = n(497754),
        o = n(878112),
        s = n(438576);
      const l = s,
        r = i.forwardRef((e, t) => {
          const {
              tag: n = "div",
              icon: l,
              endIcon: r,
              isActive: h,
              isOpened: c,
              isDisabled: d,
              isGrouped: u,
              isHovered: v,
              isClicked: m,
              onClick: p,
              text: g,
              textBeforeIcon: b,
              title: w,
              theme: f = s,
              className: C,
              forceInteractive: y,
              inactive: _,
              "data-name": S,
              "data-tooltip": x,
              ...M
            } = e,
            E = a(C, f.button, (w || x) && "apply-common-tooltip", {
              [f.isActive]: h,
              [f.isOpened]: c,
              [f.isInteractive]: (y || Boolean(p)) && !d && !_,
              [f.isDisabled]: Boolean(d || _),
              [f.isGrouped]: u,
              [f.hover]: v,
              [f.clicked]: m,
            }),
            T =
              l &&
              ("string" == typeof l
                ? i.createElement(o.Icon, { className: f.icon, icon: l })
                : i.cloneElement(l, {
                    className: a(f.icon, l.props.className),
                  }));
          return "button" === n
            ? i.createElement(
                "button",
                {
                  ...M,
                  ref: t,
                  type: "button",
                  className: a(E, f.accessible),
                  disabled: d && !_,
                  onClick: p,
                  title: w,
                  "data-name": S,
                  "data-tooltip": x,
                },
                b &&
                  g &&
                  i.createElement(
                    "div",
                    { className: a("js-button-text", f.text) },
                    g
                  ),
                T,
                !b &&
                  g &&
                  i.createElement(
                    "div",
                    { className: a("js-button-text", f.text) },
                    g
                  )
              )
            : i.createElement(
                "div",
                {
                  ...M,
                  ref: t,
                  "data-role": "button",
                  className: E,
                  onClick: d ? void 0 : p,
                  title: w,
                  "data-name": S,
                  "data-tooltip": x,
                },
                b &&
                  g &&
                  i.createElement(
                    "div",
                    { className: a("js-button-text", f.text) },
                    g
                  ),
                T,
                !b &&
                  g &&
                  i.createElement(
                    "div",
                    { className: a("js-button-text", f.text) },
                    g
                  ),
                r && i.createElement(o.Icon, { icon: r, className: s.endIcon })
              );
        });
    },
    511349: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetIconButton: () => l });
      var i = n(50959),
        a = n(497754),
        o = n(155352),
        s = n(697373);
      const l = i.forwardRef(function (e, t) {
        const { className: n, id: l, ...r } = e;
        return i.createElement(o.ToolWidgetButton, {
          id: l,
          "data-name": l,
          ...r,
          ref: t,
          className: a(n, s.button),
        });
      });
    },
    531600: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetMenuSpinner: () => r });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(234404),
        l = n(568484);
      function r(e) {
        const { className: t } = e;
        return i.createElement(
          "div",
          { className: o()(l.spinnerWrap, t) },
          i.createElement(s.Loader, null)
        );
      }
    },
    722426: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetMenuSummary: () => s });
      var i = n(50959),
        a = n(497754),
        o = n(155973);
      function s(e) {
        return i.createElement(
          "div",
          { className: a(e.className, o.title) },
          e.children
        );
      }
    },
    679458: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_TOOL_WIDGET_MENU_THEME: () => b,
        ToolWidgetMenu: () => f,
      });
      var i = n(50959),
        a = n(497754),
        o = n.n(a),
        s = n(930202),
        l = n(624216),
        r = n(515783),
        h = n(800417),
        c = n(163694),
        d = n(759339),
        u = n(162458),
        v = n(930052),
        m = n(440891),
        p = n(111706),
        g = n(295389);
      const b = g;
      var w;
      !(function (e) {
        (e[(e.Vertical = 2)] = "Vertical"),
          (e[(e.Horizontal = 0)] = "Horizontal");
      })(w || (w = {}));
      class f extends i.PureComponent {
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
              (m.enabled("skip_event_target_check") ||
                e.target instanceof Node) &&
                e.currentTarget.contains(e.target) &&
                (this._handleToggleDropdown(void 0, (0, p.isKeyboardClick)(e)),
                this.props.onClick &&
                  this.props.onClick(e, !this.state.isOpened));
            }),
            (this._handleToggleDropdown = (e, t = !1) => {
              const { onClose: n, onOpen: i } = this.props,
                { isOpened: a } = this.state,
                o = "boolean" == typeof e ? e : !a;
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
              content: a,
              isDisabled: s,
              isDrawer: l,
              isShowTooltip: c,
              title: d,
              className: u,
              hotKey: m,
              theme: p,
              drawerBreakpoint: g,
              tabIndex: b,
              isClicked: w,
            } = this.props,
            { isOpened: f } = this.state,
            y = o()(u, p.button, {
              "apply-common-tooltip": c || !s,
              [p.isDisabled]: s,
              [p.isOpened]: f,
              [p.clicked]: w,
            }),
            _ = C(a) ? a({ isOpened: f }) : a;
          return "button" === e
            ? i.createElement(
                "button",
                {
                  type: "button",
                  id: t,
                  className: o()(y, p.accessible),
                  disabled: s,
                  onClick: this._handleClick,
                  title: d,
                  "data-tooltip-hotkey": m,
                  ref: this._handleWrapperRef,
                  onKeyDown: this._handleKeyDown,
                  tabIndex: b,
                  ...(0, h.filterDataProps)(this.props),
                  ...(0, h.filterAriaProps)(this.props),
                },
                _,
                n &&
                  i.createElement(
                    "div",
                    { className: p.arrow },
                    i.createElement(
                      "div",
                      { className: p.arrowWrap },
                      i.createElement(r.ToolWidgetCaret, { dropped: f })
                    )
                  ),
                this.state.isOpened &&
                  (g
                    ? i.createElement(v.MatchMedia, { rule: g }, (e) =>
                        this._renderContent(e)
                      )
                    : this._renderContent(l))
              )
            : i.createElement(
                "div",
                {
                  id: t,
                  className: y,
                  onClick: s ? void 0 : this._handleClick,
                  title: d,
                  "data-tooltip-hotkey": m,
                  ref: this._handleWrapperRef,
                  "data-role": "button",
                  tabIndex: b,
                  onKeyDown: this._handleKeyDown,
                  "aria-haspopup": this.props["aria-haspopup"],
                  ...(0, h.filterDataProps)(this.props),
                },
                _,
                n &&
                  i.createElement(
                    "div",
                    { className: p.arrow },
                    i.createElement(
                      "div",
                      { className: p.arrowWrap },
                      i.createElement(r.ToolWidgetCaret, { dropped: f })
                    )
                  ),
                this.state.isOpened &&
                  (g
                    ? i.createElement(v.MatchMedia, { rule: g }, (e) =>
                        this._renderContent(e)
                      )
                    : this._renderContent(l))
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
              menuClassName: a,
              menuRole: o,
              maxHeight: s,
              drawerPosition: r = "Bottom",
              children: h,
              noMomentumBasedScroll: v,
            } = this.props,
            { isOpened: m } = this.state,
            p = {
              horizontalMargin: this.props.horizontalMargin || 0,
              verticalMargin: this.props.verticalMargin || 2,
              verticalAttachEdge: this.props.verticalAttachEdge,
              horizontalAttachEdge: this.props.horizontalAttachEdge,
              verticalDropDirection: this.props.verticalDropDirection,
              horizontalDropDirection: this.props.horizontalDropDirection,
              matchButtonAndListboxWidths:
                this.props.matchButtonAndListboxWidths,
            },
            g = Boolean(m && e && r),
            b = C(h) ? h({ isDrawer: g }) : h;
          return g
            ? i.createElement(
                c.DrawerManager,
                null,
                i.createElement(
                  d.Drawer,
                  {
                    reference: this.props.drawerReference,
                    onClose: this._handleClose,
                    position: r,
                    "data-name": t,
                  },
                  b
                )
              )
            : i.createElement(
                l.PopupMenu,
                {
                  reference: this.props.menuReference,
                  role: o,
                  controller: this._controller,
                  closeOnClickOutside: this.props.closeOnClickOutside,
                  doNotCloseOn: this,
                  isOpened: m,
                  minWidth: n,
                  onClose: this._handleClose,
                  position: (0, u.getPopupPositioner)(this._wrapperRef, p),
                  className: a,
                  maxHeight: s,
                  "data-name": t,
                  tabIndex: "div" !== this.props.tag ? -1 : void 0,
                  onOpen: this._handleOpen,
                  onKeyDown: this.props.onMenuKeyDown,
                  onFocus: this._handleMenuFocus,
                  noMomentumBasedScroll: v,
                },
                b
              );
        }
      }
      function C(e) {
        return "function" == typeof e;
      }
      f.defaultProps = { arrow: !0, closeOnClickOutside: !0, theme: g };
    },
    16609: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_TOOLBAR_BUTTON_THEME: () => s, ToolbarButton: () => l });
      var i = n(50959),
        a = n(155352),
        o = n(865266);
      const s = a.DEFAULT_TOOL_WIDGET_BUTTON_THEME,
        l = (0, i.forwardRef)(function (e, t) {
          const { tooltip: n, ...s } = e,
            [l, r] = (0, o.useRovingTabindexElement)(t);
          return i.createElement(a.ToolWidgetButton, {
            "aria-label": n,
            ...s,
            tag: "button",
            ref: l,
            tabIndex: r,
            "data-tooltip": n,
          });
        });
    },
    939157: (e, t, n) => {
      "use strict";
      n.d(t, { ToolbarIconButton: () => s });
      var i = n(50959),
        a = n(865266),
        o = n(565631);
      const s = (0, i.forwardRef)(function (e, t) {
        const [n, s] = (0, a.useRovingTabindexElement)(t);
        return i.createElement(o.AccessibleIconButton, {
          ...e,
          ref: n,
          tabIndex: s,
        });
      });
    },
    843833: (e, t, n) => {
      "use strict";
      n.d(t, { ToolbarMenuButton: () => r });
      var i = n(50959),
        a = n(718736),
        o = n(865266),
        s = n(74336),
        l = n(975598);
      const r = (0, i.forwardRef)(function (e, t) {
        const { tooltip: n, menuReference: r = null, ...h } = e,
          [c, d] = (0, o.useRovingTabindexElement)(null),
          u = (0, a.useFunctionalRefObject)(r);
        return i.createElement(l.AccessibleMenuButton, {
          "aria-label": n,
          "aria-haspopup": "menu",
          ...s.MouseClickAutoBlurHandler.attributes(),
          ...h,
          ref: t,
          tag: "button",
          buttonRef: c,
          tabIndex: d,
          menuReference: u,
          tooltip: n,
        });
      });
    },
    719338: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { getRestrictedToolSet: () => ma });
      var i = n(440891),
        a = n(50959),
        o = n(719036),
        s = n(878112),
        l = n(609838),
        r = n(688401),
        h = n(983023),
        c = n(50296),
        d = n(843833),
        u = n(497754),
        v = n.n(u),
        m = n(54663);
      const p = a.forwardRef((e, t) => {
        const { children: n, className: i, ...o } = e;
        return a.createElement(
          "div",
          { className: u(i, m.wrap), ref: t, ...o },
          n
        );
      });
      var g = n(16609),
        b = n(182316);
      class w extends a.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleClick = () => {
              const { onClick: e, onClickArg: t } = this.props;
              e && e(t);
            });
        }
        render() {
          const {
            className: e,
            icon: t,
            hint: n,
            text: i,
            isDisabled: o,
            isActive: s,
            isFirst: l,
            isLast: r,
            onClick: h,
            onClickArg: c,
            ...d
          } = this.props;
          return a.createElement(g.ToolbarButton, {
            ...d,
            icon: t,
            text: i,
            tooltip: n,
            isDisabled: o,
            isActive: s,
            isGrouped: !0,
            onClick: this._handleClick,
            className: u(e, b.button, { [b.first]: l, [b.last]: r }),
          });
        }
      }
      var f = n(917850),
        C = n(930052),
        y = n(996038),
        _ = n(614417),
        S = n(244693),
        x = n(344399),
        M = n(162172),
        E = n(269842),
        T = n(930202),
        k = n(442092),
        H = n(32556);
      function A(e) {
        const { orientation: t, onKeyDown: n, ...i } = e;
        return a.createElement("div", {
          ...i,
          role: "radiogroup",
          "aria-orientation": t,
          onKeyDown: (0, E.createSafeMulticastEventHandler)(function (e) {
            if (e.defaultPrevented) return;
            if (!(document.activeElement instanceof HTMLElement)) return;
            const n = (0, T.hashFromEvent)(e);
            if ("vertical" !== t && 38 !== n && 40 !== n) return;
            if ("vertical" === t && 37 !== n && 39 !== n) return;
            const i = ((a = e.currentTarget),
            Array.from(
              a.querySelectorAll(
                '[role="radio"]:not([disabled]):not([aria-disabled])'
              )
            ).filter((0, H.createScopedVisibleElementFilter)(a))).sort(
              k.navigationOrderComparator
            );
            var a;
            if (0 === i.length) return;
            const o = i.indexOf(document.activeElement);
            if (-1 === o) return;
            e.preventDefault();
            const s = () => {
                const e = (o + i.length - 1) % i.length;
                i[o].dispatchEvent(
                  new CustomEvent("roving-tabindex:secondary-element")
                ),
                  i[e].dispatchEvent(
                    new CustomEvent("roving-tabindex:main-element")
                  ),
                  i[e].focus();
              },
              l = () => {
                const e = (o + i.length + 1) % i.length;
                i[o].dispatchEvent(
                  new CustomEvent("roving-tabindex:secondary-element")
                ),
                  i[e].dispatchEvent(
                    new CustomEvent("roving-tabindex:main-element")
                  ),
                  i[e].focus();
              };
            switch (n) {
              case 38:
                "vertical" !== t && s();
                break;
              case 40:
                "vertical" !== t && l();
                break;
              case 37:
                "vertical" === t && s();
                break;
              case 39:
                "vertical" === t && l();
            }
          }, n),
        });
      }
      var I = n(46305),
        R = n(840781),
        N = n(241340);
      const Z = (0, S.registryContextType)();
      function V(e) {
        return !r.linking.supportedChartStyles.value()?.includes(e);
      }
      const W = "ITEMS_DIVIDER",
        D = [
          [0, 1, 9, 19, 21],
          [2, 14, 15],
          [3, 16, 10],
          [13, 12],
          [17, 18, 20],
          [8, 4, 7, 5, 6, 11],
        ];
      new Set([]), new Set([]);
      class O extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleChangeStyle = (e) => {
              const {
                favorites: t,
                lastSelectedNotFavorite: n,
                activeStyle: i,
              } = this.state;
              this.setState({
                activeStyle: e,
                lastSelectedNotFavorite: t.includes(i) ? n : i,
              });
            }),
            (this._handleSelectStyle = (e) => {
              const { chartWidgetCollection: t } = this.context;
              e !== t.activeChartStyle.value() && t.setChartStyleToWidget(e);
            }),
            (this._handleClickFavorite = (e) => {
              this._isStyleFavorited(e)
                ? this._handleRemoveFavorite(e)
                : this._handleAddFavorite(e);
            }),
            (this._boundForceUpdate = () => {
              this.forceUpdate();
            }),
            (this._handleQuickClick = (e) => {
              this._handleSelectStyle(e), this._trackClick();
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
              favoriteChartStylesService: o.any.isRequired,
            });
          const { chartWidgetCollection: n, favoriteChartStylesService: i } = t,
            a = n.activeChartStyle.value(),
            s = i.get(),
            l = new Set((0, x.allChartStyles)());
          this.state = {
            activeStyle: a,
            favorites: s,
            styles: D.reduce((e, t) => {
              const n = t.filter((e) => l.has(e));
              return n.length && (e.length && n.unshift(W), e.push(...n)), e;
            }, []),
          };
        }
        componentDidMount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } =
            this.context;
          e.activeChartStyle.subscribe(this._handleChangeStyle),
            t.getOnChange().subscribe(this, this._handleChangeSettings),
            r.linking.supportedChartStyles.subscribe(this._boundForceUpdate);
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } =
            this.context;
          e.activeChartStyle.unsubscribe(this._handleChangeStyle),
            t.getOnChange().unsubscribe(this, this._handleChangeSettings),
            r.linking.supportedChartStyles.unsubscribe(this._boundForceUpdate);
        }
        render() {
          const {
              isShownQuicks: e,
              displayMode: t = "full",
              id: i,
            } = this.props,
            {
              activeStyle: o,
              favorites: r,
              styles: u,
              lastSelectedNotFavorite: v,
            } = this.state,
            m = "small" !== t && e && 0 !== r.length,
            g = [...r];
          g.includes(o) ? void 0 !== v && g.push(v) : g.push(o);
          const b = m && g.length > 1;
          return a.createElement(
            C.MatchMedia,
            { rule: y.DialogBreakpoints.TabletSmall },
            (e) => {
              const t = u.map((t, n) =>
                t === W
                  ? a.createElement(f.PopupMenuSeparator, {
                      key: `separator-${n}`,
                    })
                  : this._renderPopupMenuItem(t, t === o, e)
              );
              return a.createElement(
                p,
                { id: i },
                b &&
                  a.createElement(
                    A,
                    { orientation: "horizontal", className: N.group },
                    g.map((e, t) =>
                      a.createElement(w, {
                        role: "radio",
                        className: N.button,
                        icon: c.SERIES_ICONS[e],
                        "aria-checked": m && o === e,
                        isActive: m && o === e,
                        isDisabled: V(e),
                        key: t,
                        hint: (0, M.getTranslatedChartStyleName)(e),
                        isFirst: 0 === t,
                        isLast: t === g.length - 1,
                        onClick: m ? this._handleQuickClick : void 0,
                        onClickArg: e,
                        "data-value": h.STYLE_SHORT_NAMES[e],
                      })
                    )
                  ),
                a.createElement(
                  d.ToolbarMenuButton,
                  {
                    arrow: Boolean(b),
                    content: b
                      ? void 0
                      : a.createElement(
                          p,
                          null,
                          a.createElement(s.Icon, { icon: c.SERIES_ICONS[o] })
                        ),
                    tooltip: b
                      ? l.t(null, void 0, n(127246))
                      : (0, M.getTranslatedChartStyleName)(o),
                    className: N.menu,
                    isDrawer: e,
                    onClick: this._trackClick,
                    menuRole: "treegrid",
                  },
                  t
                )
              );
            }
          );
        }
        _renderPopupMenuItem(e, t, n) {
          const { isFavoritingAllowed: i } = this.props,
            o = this._isStyleFavorited(e);
          return a.createElement(I.AccessibleMenuItem, {
            key: `chart-type-${e}`,
            role: "row",
            theme: n ? _.multilineLabelWithIconAndToolboxTheme : void 0,
            icon: c.SERIES_ICONS[e],
            isActive: t,
            "aria-selected": t,
            isDisabled: V(e),
            label: a.createElement(
              "div",
              { className: N.label },
              (0, M.getTranslatedChartStyleName)(e) || "",
              !1,
              !1
            ),
            onClick: this._handleSelectStyle,
            onClickArg: e,
            showToolboxOnHover: !o,
            showToolboxOnFocus: !0,
            toolbox:
              i &&
              a.createElement(R.MenuFavoriteButton, {
                isActive: t,
                isFilled: o,
                onClick: () => this._handleClickFavorite(e),
              }),
            "data-value": h.STYLE_SHORT_NAMES[e],
          });
        }
        _handleChangeSettings(e) {
          this.setState({ lastSelectedNotFavorite: void 0, favorites: e });
        }
        _isStyleFavorited(e) {
          return -1 !== this.state.favorites.indexOf(e);
        }
        _handleAddFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: n } = this.context;
          n.set([...t, e]);
        }
        _handleRemoveFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: n } = this.context;
          n.set(t.filter((t) => t !== e));
        }
        _trackClick() {
          0;
        }
      }
      O.contextType = Z;
      var F = n(865266),
        B = n(155352),
        L = n(723225);
      const U = ["medium", "small"],
        P = (0, a.forwardRef)(function (e, t) {
          const {
              text: n,
              className: i,
              displayMode: o,
              collapseWhen: s = U,
              ...l
            } = e,
            r = !s.includes(o);
          return a.createElement(B.ToolWidgetButton, {
            ...l,
            ref: t,
            text: r ? n : void 0,
            className: u(i, L.button, r ? L.withText : L.withoutText),
          });
        });
      function z(e) {
        const { tooltip: t, ...n } = e,
          [i, o] = (0, F.useRovingTabindexElement)(null);
        return a.createElement(P, {
          "aria-label": t,
          ...n,
          tag: "button",
          tabIndex: o,
          ref: i,
          "data-tooltip": t,
        });
      }
      var K = n(32133),
        Q = n(111706),
        q = n(301393);
      const G = (0, S.registryContextType)();
      class j extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ isActive: e });
            }),
            (this._handleClick = (e) => {
              (0, K.trackEvent)("GUI", "Chart Header Toolbar", "compare"),
                this._compareDialogRenderer?.show({
                  shouldReturnFocus: (0, Q.isKeyboardClick)(e),
                });
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = { isActive: !1 }),
            (this._compareDialogRenderer =
              this.context.chartWidgetCollection.getCompareDialogRenderer());
        }
        componentDidMount() {
          this._compareDialogRenderer?.visible().subscribe(this._updateState);
        }
        componentWillUnmount() {
          this._compareDialogRenderer?.visible().unsubscribe(this._updateState);
        }
        render() {
          const { isActive: e } = this.state;
          return a.createElement(z, {
            ...this.props,
            icon: q,
            isOpened: e,
            onClick: this._handleClick,
            collapseWhen: ["full", "medium", "small"],
            tooltip: l.t(null, void 0, n(253942)),
            "aria-haspopup": "dialog",
          });
        }
      }
      j.contextType = G;
      var X = n(939157),
        $ = n(725784),
        Y = n(180185),
        J = n(597268),
        ee = n(236992);
      const te = (0, $.hotKeySerialize)({
          keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Shift, !1), "F"],
          text: "{0} + {1}",
        }),
        ne = (0, S.registryContextType)();
      function ie(e) {
        return e.fullscreen().value() ? ee : J;
      }
      class ae extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = () => {
              this.setState({ icon: ie(this.context.chartWidgetCollection) });
            }),
            (this._handleClick = () => {
              const { chartWidgetCollection: e } = this.context;
              e.fullscreen().value() ? e.exitFullscreen() : e.startFullscreen();
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = { icon: ie(this.context.chartWidgetCollection) }),
            this._subscribe();
        }
        render() {
          const { className: e, id: t } = this.props,
            { icon: i } = this.state;
          return a.createElement(X.ToolbarIconButton, {
            id: t,
            icon: i,
            onClick: this._handleClick,
            className: u(e),
            tooltip: l.t(null, void 0, n(967092)),
            "data-tooltip-hotkey": te,
          });
        }
        componentWillUnmount() {
          this._unsubscribe();
        }
        _subscribe() {
          this.context.chartWidgetCollection
            .fullscreen()
            .subscribe(this._updateState);
        }
        _unsubscribe() {
          this.context.chartWidgetCollection
            .fullscreen()
            .unsubscribe(this._updateState);
        }
      }
      ae.contextType = ne;
      var oe = n(650151),
        se = n(192063),
        le = n(994567),
        re = n(676725);
      const he = (0, n(671945).getLogger)("FavoritesInfo");
      function ce(e) {
        if (0 === e.length) return Promise.resolve([]);
        he.logNormal("Requesting favorites info");
        const t = [],
          n = new Map(),
          i = new Map(),
          a = new Map();
        return (
          e.forEach((e) => {
            switch (e.type) {
              case "java":
                a.set(e.studyId, e);
                break;
              case "pine":
                isPublishedPineId(e.pineId)
                  ? n.set(e.pineId, e)
                  : i.set(e.pineId, e);
                break;
              default:
                (0, oe.assert)(
                  !1,
                  `unknown favorite type ${JSON.stringify(e)}`
                );
            }
          }),
          0 !== a.size &&
            t.push(
              (0, re.studyMetaInfoRepository)()
                .findAllJavaStudies()
                .then((e) => {
                  const t = new Map();
                  for (const n of e)
                    !n.is_hidden_study &&
                      a.has(n.id) &&
                      t.set(n.id, {
                        name: n.description,
                        localizedName: n.description_localized,
                        studyMarketShittyObject: n,
                      });
                  return t;
                })
                .then((e) => {
                  const t = (function (e, t) {
                    const n = { items: [], notFoundItems: [] };
                    return (
                      e.forEach((e, i) => {
                        const a = t.get(i);
                        void 0 !== a
                          ? n.items.push({ item: e, info: a })
                          : n.notFoundItems.push(e);
                      }),
                      n
                    );
                  })(a, e);
                  if (0 !== t.notFoundItems.length) {
                    const e = t.notFoundItems.map((e) => e.studyId);
                    he.logWarn(
                      `Cannot find java scripts: ${JSON.stringify(e)}`
                    );
                  }
                  return t.items;
                })
            ),
          Promise.all(t).then(
            (e) => (
              he.logNormal("Requesting favorites info finished"),
              e.reduce((e, t) => e.concat(t), [])
            )
          )
        );
      }
      var de = n(128492),
        ue = n(651407),
        ve = n(531600),
        me = n(722426),
        pe = n(559410),
        ge = n(139681),
        be = n(569744);
      const we = (0, $.hotKeySerialize)({ keys: ["/"], text: "{0}" }),
        fe = (0, S.registryContextType)();
      class Ce extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._promise = null),
            (this._menu = a.createRef()),
            (this._menuItemsContainer = a.createRef()),
            (this._favoriteFundamentalsModel = null),
            (this._setActiveState = (e) => {
              this.setState({ isActive: e });
            }),
            (this._handleClick = (e) => {
              const { studyMarket: t } = this.props;
              this.setState({ isActive: !0 }, () => {
                t.visible().value()
                  ? t.hide()
                  : t.show({ shouldReturnFocus: (0, Q.isKeyboardClick)(e) });
              }),
                this._trackClick();
            }),
            (this._handleSelectIndicator = (e) => {
              (e = (0, oe.ensureDefined)(e)),
                this._trackFavoriteAction("Favorite indicator from toolbar");
              "java" === e.type ? e.studyId : e.pineId;
              (async () => {
                e = (0, oe.ensureDefined)(e);
                const { chartWidgetCollection: t } = this.context;
                if ("java" === e.type) {
                  const t = (0, de.tryFindStudyLineToolNameByStudyId)(
                    e.studyId
                  );
                  if (null !== t)
                    return (
                      await (0, de.initLineTool)(t), void ue.tool.setValue(t)
                    );
                }
                t.activeChartWidget.value().insertStudy(e, []);
              })();
            }),
            (this._handleFavoriteIndicatorsChange = () => {
              const { favoriteScriptsModel: e } = this.context,
                t = [...(0, oe.ensureDefined)(e).favorites()];
              this.setState({ favorites: t }), this._clearCache();
            }),
            (this._handleFavoriteFundamentalsChange = () => {
              const e = new Set(
                this._favoriteFundamentalsModel?.favorites() || []
              );
              this.setState({ favoriteFundamentals: e }), this._clearCache();
            }),
            (this._handleMouseEnter = () => {
              this._prefetchFavorites();
            }),
            (this._handleWrapClick = () => {
              this._prefetchFavorites();
            }),
            (this._handleChangeActiveWidget = () => {
              this._clearCache();
            }),
            (this._clearCache = () => {
              (this._promise = null), this.setState({ infos: [] });
            }),
            (this._handleScriptRenamed = (e) => {
              const { favoriteScriptsModel: t } = this.context;
              void 0 !== t && t.isFav(e.scriptIdPart) && this._clearCache();
            }),
            (this._handleFavoriteMenuClick = () => {
              this._trackClick(),
                this._trackFavoriteAction(
                  "Select favorite indicators dropdown"
                );
            }),
            (0, S.validateRegistry)(t, {
              favoriteScriptsModel: o.any,
              chartWidgetCollection: o.any.isRequired,
            });
          const { favoriteScriptsModel: n } = t,
            i = void 0 !== n ? n.favorites() : [];
          this.state = {
            isActive: !1,
            isLoading: !1,
            favorites: i,
            favoriteFundamentals: void 0,
            infos: [],
          };
        }
        componentDidMount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: n } =
              this.context;
          e.visible().subscribe(this._setActiveState),
            void 0 !== t &&
              (t
                .favoritesChanged()
                .subscribe(this, this._handleFavoriteIndicatorsChange),
              n.activeChartWidget.subscribe(this._handleChangeActiveWidget)),
            pe.on("TVScriptRenamed", this._handleScriptRenamed, null);
        }
        componentWillUnmount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: n } =
              this.context;
          e.visible().unsubscribe(this._setActiveState),
            void 0 !== t &&
              (t
                .favoritesChanged()
                .unsubscribe(this, this._handleFavoriteIndicatorsChange),
              n.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)),
            pe.unsubscribe("TVScriptRenamed", this._handleScriptRenamed, null),
            (this._promise = null);
        }
        render() {
          const {
              isActive: e,
              favorites: t,
              favoriteFundamentals: i,
              isLoading: o,
            } = this.state,
            { className: s, displayMode: r, id: h } = this.props,
            { chartWidgetCollection: c } = this.context;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              p,
              {
                id: h,
                onMouseEnter: this._handleMouseEnter,
                onClick: this._handleWrapClick,
              },
              a.createElement(z, {
                displayMode: r,
                className: s,
                icon: ge,
                isOpened: e,
                onClick: this._handleClick,
                text: l.t(null, void 0, n(184549)),
                "data-role": "button",
                "data-name": "open-indicators-dialog",
                tooltip: l.t(null, void 0, n(562005)),
                "data-tooltip-hotkey": we,
              }),
              Boolean(t.length > 0 || i?.size) &&
                a.createElement(
                  C.MatchMedia,
                  { rule: "(max-width: 440px)" },
                  (e) =>
                    a.createElement(
                      d.ToolbarMenuButton,
                      {
                        key: c.activeChartWidget.value().id(),
                        arrow: !0,
                        closeOnClickOutside: !0,
                        isDrawer: e,
                        drawerPosition: "Bottom",
                        ref: this._menu,
                        menuReference: this._menuItemsContainer,
                        onClick: this._handleFavoriteMenuClick,
                        "data-name": "show-favorite-indicators",
                        tooltip: l.t(null, void 0, n(570234)),
                        menuRole: "menu",
                      },
                      a.createElement(
                        "div",
                        {
                          className: v()(
                            be.dropdown,
                            e && be.smallWidthWrapper
                          ),
                        },
                        a.createElement(
                          me.ToolWidgetMenuSummary,
                          { className: e && be.smallWidthTitle },
                          l.t(null, void 0, n(952530))
                        ),
                        o && a.createElement(ve.ToolWidgetMenuSpinner, null),
                        !o &&
                          a.createElement(
                            a.Fragment,
                            null,
                            this.state.infos.length > 0
                              ? this.state.infos.map((t) =>
                                  a.createElement(I.AccessibleMenuItem, {
                                    role: "menuitem",
                                    className: v()(e && be.smallWidthMenuItem),
                                    theme: e
                                      ? _.multilineLabelWithIconAndToolboxTheme
                                      : void 0,
                                    key:
                                      "java" === t.item.type
                                        ? t.item.studyId
                                        : t.item.pineId,
                                    onClick: this._handleSelectIndicator,
                                    onClickArg: t.item,
                                    label: a.createElement(
                                      "span",
                                      {
                                        className: v()(
                                          !e && be.label,
                                          e && be.smallWidthLabel,
                                          "apply-overflow-tooltip"
                                        ),
                                      },
                                      ye(t)
                                    ),
                                  })
                                )
                              : null !== this._promise &&
                                  a.createElement(se.PopupMenuItem, {
                                    isDisabled: !0,
                                    label: l.t(null, void 0, n(318448)),
                                  })
                          )
                      )
                    )
                )
            )
          );
        }
        _prefetchFavorites() {
          const { chartWidgetCollection: e } = this.context;
          if (null !== this._promise || !window.is_authenticated) return;
          if (!e.activeChartWidget.value().hasModel()) return;
          this.setState({ isLoading: !0 });
          const t = (this._promise = Promise.all([
            ce(this.state.favorites),
            void 0,
          ]).then((e) => {
            if (t !== this._promise) return;
            const [n, i] = e;
            let a = [...n];
            if (i) {
              const e = i
                .filter((e) =>
                  this.state.favoriteFundamentals?.has(e.scriptIdPart)
                )
                .map(this._mapFundamentalToFavoriteItemInfo);
              a.push(...e);
            }
            (a = [...a].sort((e, t) => ye(e).localeCompare(ye(t)))),
              this.setState({ infos: a, isLoading: !1 }, () => {
                this._menu.current?.update(),
                  this._menuItemsContainer.current &&
                    document.activeElement ===
                      this._menuItemsContainer.current &&
                    (0, le.focusFirstMenuItem)(
                      this._menuItemsContainer.current
                    );
              });
          }));
        }
        _trackClick() {
          0;
        }
        _trackFavoriteAction(e) {
          (0, K.trackEvent)("GUI", "Chart Header Toolbar", e);
        }
        _mapFundamentalToFavoriteItemInfo(e) {
          return {
            item: { type: "pine", pineId: e.scriptIdPart },
            info: {
              name: e.scriptName,
              localizedName: getLocalizedFundamentalsName(e),
              studyMarketShittyObject: void 0,
            },
          };
        }
      }
      function ye(e) {
        return (
          e.info.localizedName ||
          l.t(e.info.name, { context: "study" }, n(783477))
        );
      }
      Ce.contextType = fe;
      var _e = n(989175),
        Se = n(28964),
        xe = n(18027);
      function Me(e) {
        return a.createElement(
          "div",
          { className: u(xe.value, { [xe.selected]: e.isSelected }) },
          e.value,
          e.metric
        );
      }
      var Ee = n(522224),
        Te = n(972535),
        ke = n(455496),
        He = n(723745);
      function Ae(e) {
        const {
            role: t,
            interval: n,
            hint: i,
            isActive: o,
            isDisabled: s,
            isFavorite: l,
            isRemovable: r,
            isFavoritingAllowed: h,
            isSignaling: c,
            onClick: d,
            onClickRemove: u,
            onClickFavorite: m,
            isSmallTablet: p,
            scrollContainerRef: g,
            ...b
          } = e,
          [w, f] = (0, Ee.useHover)(),
          C = a.useCallback((e) => u(n, e), [u, n]),
          y = a.useCallback(() => m(n), [m, n]),
          S = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (c) {
              const e = S.current;
              if (e && g.current) {
                const t = e.getBoundingClientRect(),
                  n = g.current.getBoundingClientRect();
                (n.top > t.top || n.bottom < t.bottom) && e.scrollIntoView();
              }
            }
          }, [c, g]),
          a.createElement(
            "div",
            { ...f, ref: S },
            a.createElement(I.AccessibleMenuItem, {
              ...b,
              role: t,
              className: v()(
                He.menuItem,
                p && He.smallWidthMenuItem,
                c && He.signal
              ),
              theme: p ? _.multilineLabelWithIconAndToolboxTheme : void 0,
              isActive: o,
              isDisabled: s,
              onClick: d,
              onClickArg: n,
              toolbox: (function () {
                const e = a.createElement(ke.MenuRemoveButton, {
                    key: "remove",
                    isActive: o,
                    hidden: !Te.touch && !w,
                    onClick: C,
                    className: He.remove,
                  }),
                  t = a.createElement(R.MenuFavoriteButton, {
                    key: "favorite",
                    isActive: o,
                    isFilled: l,
                    onClick: y,
                  });
                return [r && e, h && t];
              })(),
              showToolboxOnHover: !l,
              showToolboxOnFocus: !0,
              label: i,
            })
          )
        );
      }
      const Ie = {
        [Se.ResolutionKind.Ticks]: l.t(
          null,
          { context: "interval_group_name" },
          n(570784)
        ),
        [Se.ResolutionKind.Seconds]: l.t(
          null,
          { context: "interval_group_name" },
          n(432116)
        ),
        [Se.ResolutionKind.Minutes]: l.t(
          null,
          { context: "interval_group_name" },
          n(921551)
        ),
        [Se.SpecialResolutionKind.Hours]: l.t(
          null,
          { context: "interval_group_name" },
          n(418817)
        ),
        [Se.ResolutionKind.Days]: l.t(
          null,
          { context: "interval_group_name" },
          n(957252)
        ),
        [Se.ResolutionKind.Weeks]: l.t(
          null,
          { context: "interval_group_name" },
          n(241815)
        ),
        [Se.ResolutionKind.Months]: l.t(
          null,
          { context: "interval_group_name" },
          n(289506)
        ),
        [Se.ResolutionKind.Range]: l.t(
          null,
          { context: "interval_group_name" },
          n(27514)
        ),
        [Se.ResolutionKind.Invalid]: "",
      };
      function Re(e, t = !1) {
        return { id: e, name: Ie[e], items: [], mayOmitSeparator: t };
      }
      var Ne = n(329452),
        Ze = n(28466),
        Ve = n(370981),
        We = n(628741),
        De = n(997542);
      function Oe(e) {
        const { className: t, ...n } = e,
          [i, o] = (0, F.useRovingTabindexElement)(null);
        return a.createElement(We.CollapsibleSection, {
          ...n,
          ref: i,
          tabIndex: o,
          "data-role": "menuitem",
          className: v()(De.accessible, t),
          onKeyDown: function (e) {
            const t = (0, T.hashFromEvent)(e);
            (13 !== t && 32 !== t) ||
              (e.preventDefault(),
              i.current instanceof HTMLElement && i.current.click());
          },
        });
      }
      var Fe = n(669874),
        Be = n(820905),
        Le = n(6198);
      const Ue = {
          openDialog: l.t(null, void 0, n(546311)),
          timeInterval: l.t(null, void 0, n(241173)),
        },
        Pe = (0, $.hotKeySerialize)({
          keys: [","],
          text: l.t(null, void 0, n(892969)),
        }),
        ze = (0, S.registryContextType)(),
        Ke = new Ne.Delegate(),
        Qe = a.lazy(async () => ({
          default: (
            await Promise.all([
              n.e(1025),
              n.e(4524),
              n.e(5816),
              n.e(1356),
              n.e(9258),
              n.e(5480),
              n.e(5387),
              n.e(3799),
              n.e(6445),
              n.e(9296),
              n.e(8222),
              n.e(2106),
              n.e(422),
              n.e(2234),
              n.e(8859),
              n.e(9216),
              n.e(4013),
            ]).then(n.bind(n, 116102))
          ).ToolWidgetIntervalsAddDialog,
        }));
      class qe extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._menu = a.createRef()),
            (this._menuItemsContainerRef = a.createRef()),
            (this._drawerContainerRef = a.createRef()),
            (this._renderChildren = (e, t) => {
              const n = this._customIntervals ? 1 : 0,
                i = (function (e) {
                  const t = Re(Se.ResolutionKind.Ticks),
                    n = Re(Se.ResolutionKind.Seconds),
                    i = Re(Se.ResolutionKind.Minutes),
                    a = Re(Se.SpecialResolutionKind.Hours),
                    o = Re(Se.ResolutionKind.Days),
                    s = Re(Se.ResolutionKind.Range);
                  return (
                    e.forEach((e) => {
                      const l = Se.Interval.parse(e);
                      l.isMinuteHours()
                        ? a.items.push(e)
                        : l.isMinutes()
                        ? (0, Se.isHour)(Number(l.multiplier()))
                          ? a.items.push(e)
                          : i.items.push(e)
                        : l.isSeconds()
                        ? n.items.push(e)
                        : l.isDWM()
                        ? o.items.push(e)
                        : l.isRange()
                        ? s.items.push(e)
                        : l.isTicks() && t.items.push(e);
                    }),
                    [t, n, i, a, o, s].filter((e) => 0 !== e.items.length)
                  );
                })(e),
                a = i.length + n;
              return [
                ...this._createIntervalItem(t, a),
                ...this._createMenuItems(i, t, n, a),
              ];
            }),
            (this._handleChangeInterval = () => {
              const e = r.linking.interval.value(),
                { activeInterval: t, lastNotQuicked: n } = this.state,
                i = this._getQuicks();
              this.setState({
                activeInterval: (0, _e.normalizeIntervalString)(e),
                lastNotQuicked: void 0 === t || i.includes(t) ? n : t,
              });
            }),
            (this._bindedForceUpdate = () => {
              this.forceUpdate();
            }),
            (this._handleSelectInterval = (e) => {
              void 0 !== e &&
                e !== r.linking.interval.value() &&
                this.context.chartWidgetCollection.setResolution(e),
                e && (0, K.trackEvent)("GUI", "Time Interval", e);
            }),
            (this._handleClickFavorite = (e) => {
              (e = (0, oe.ensureDefined)(e)),
                this._isIntervalFavorite(e)
                  ? this._handleRemoveFavorite(e)
                  : this._handleAddFavorite(e);
            }),
            (this._handleAddFavorite = (e) => {
              const { favorites: t } = this.state;
              this.context.favoriteIntervalsService.set([...t, e]);
            }),
            (this._handleRemoveFavorite = (e) => {
              const { favorites: t } = this.state;
              this.context.favoriteIntervalsService.set(
                t.filter((t) => t !== e)
              );
            }),
            (this._handleAddInterval = (e, t) => {
              const { intervalService: n, intervalsMenuViewStateService: i } =
                  this.context,
                { menuViewState: a } = this.state,
                o = n.add(e, t);
              if (o) {
                this.setState({ lastAddedInterval: o });
                const e = Se.Interval.parseExt(o);
                if (e.interval.isMinuteHours())
                  return void i.set({
                    ...a,
                    [Se.SpecialResolutionKind.Hours]: !1,
                  });
                const t = e.guiResolutionKind;
                if (
                  t === Se.ResolutionKind.Days ||
                  t === Se.ResolutionKind.Weeks ||
                  t === Se.ResolutionKind.Months
                )
                  return void i.set({ ...a, [Se.ResolutionKind.Days]: !1 });
                i.set({ ...a, [t]: !1 });
              }
            }),
            (this._handleRemoveInterval = (e, t) => {
              const { intervalService: n } = this.context;
              if (e) {
                if (
                  t &&
                  (0, Q.isKeyboardClick)(t) &&
                  this._menuItemsContainerRef.current
                ) {
                  const t = (0, le.queryMenuElements)(
                      this._menuItemsContainerRef.current
                    ),
                    n = t.findIndex((t) => t.matches(`[data-value="${e}"]`));
                  if (-1 !== n) {
                    const e = t[n + 1] ?? t[n - 1];
                    e
                      ? e.focus()
                      : (0, le.focusFirstMenuItem)(
                          this._menuItemsContainerRef.current
                        );
                  }
                }
                n.remove(e), this._handleRemoveFavorite(e);
              }
            }),
            (this._getHandleSectionStateChange = (e) => (t) => {
              const { menuViewState: n } = this.state,
                { intervalsMenuViewStateService: i } = this.context;
              i.set({ ...n, [e]: !t });
            }),
            (this._handleOpenAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !0 });
            }),
            (this._handleCloseAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !1 });
            }),
            (this._handleGlobalClose = () => {
              const { isFake: e } = this.props,
                { isAddIntervalDialogOpened: t } = this.state;
              e || t || Ke.fire();
            }),
            (this._handeQuickClick = (e) => {
              this._handleSelectInterval(e), this._trackClick();
            }),
            (0, S.validateRegistry)(t, {
              chartApiInstance: o.any.isRequired,
              favoriteIntervalsService: o.any.isRequired,
              intervalService: o.any.isRequired,
              intervalsMenuViewStateService: o.any.isRequired,
            });
          const {
            chartApiInstance: n,
            favoriteIntervalsService: s,
            intervalService: l,
            intervalsMenuViewStateService: h,
          } = t;
          this._customIntervals = i.enabled("custom_resolutions");
          const c = r.linking.interval.value(),
            d = c && (0, _e.normalizeIntervalString)(c),
            u = s.get(),
            v = l.getCustomIntervals(),
            m = h.get();
          (this._defaultIntervals = n
            .defaultResolutions()
            .filter(_e.isIntervalEnabled)
            .map(_e.normalizeIntervalString)),
            (this.state = {
              isOpenedFormMenu: !1,
              activeInterval: d,
              favorites: u,
              customs: v,
              menuViewState: m,
              isAddIntervalDialogOpened: !1,
            });
        }
        componentDidMount() {
          const {
            favoriteIntervalsService: e,
            intervalService: t,
            intervalsMenuViewStateService: n,
          } = this.context;
          e.getOnChange().subscribe(this, this._handleChangeFavorites),
            n.getOnChange().subscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().subscribe(this, this._handleChangeCustoms),
            r.linking.interval.subscribe(this._handleChangeInterval),
            r.linking.intraday.subscribe(this._bindedForceUpdate),
            r.linking.seconds.subscribe(this._bindedForceUpdate),
            r.linking.ticks.subscribe(this._bindedForceUpdate),
            r.linking.range.subscribe(this._bindedForceUpdate),
            r.linking.supportedResolutions.subscribe(this._bindedForceUpdate),
            r.linking.dataFrequencyResolution.subscribe(
              this._bindedForceUpdate
            ),
            Ve.globalCloseDelegate.subscribe(this, this._handleGlobalClose);
        }
        componentWillUnmount() {
          const {
            favoriteIntervalsService: e,
            intervalService: t,
            intervalsMenuViewStateService: n,
          } = this.context;
          e.getOnChange().unsubscribe(this, this._handleChangeFavorites),
            n.getOnChange().unsubscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().unsubscribe(this, this._handleChangeCustoms),
            r.linking.interval.unsubscribe(this._handleChangeInterval),
            r.linking.intraday.unsubscribe(this._bindedForceUpdate),
            r.linking.seconds.unsubscribe(this._bindedForceUpdate),
            r.linking.ticks.unsubscribe(this._bindedForceUpdate),
            r.linking.range.unsubscribe(this._bindedForceUpdate),
            r.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate),
            r.linking.dataFrequencyResolution.unsubscribe(
              this._bindedForceUpdate
            ),
            Ve.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose);
        }
        componentDidUpdate(e, t) {
          this.state.lastAddedInterval &&
            setTimeout(
              () => this.setState({ lastAddedInterval: void 0 }),
              1600
            );
        }
        render() {
          const { isShownQuicks: e, id: t } = this.props,
            {
              activeInterval: n,
              customs: i,
              lastNotQuicked: o,
              isAddIntervalDialogOpened: s,
            } = this.state,
            l = this._getQuicks(),
            r = (0, _e.sortResolutions)([...l]);
          void 0 !== n && r.includes(n)
            ? void 0 !== o && r.push(o)
            : void 0 !== n && r.push(n);
          const h = (!(!e || 0 === l.length) || void 0) && r.length > 1,
            c = {},
            v = (0, _e.mergeResolutions)(this._defaultIntervals, i);
          (void 0 !== n ? v.concat(n) : v)
            .filter(_e.isAvailable)
            .forEach((e) => (c[e] = !0));
          const m =
            void 0 !== n ? (0, _e.getTranslatedResolutionModel)(n) : null;
          return a.createElement(
            p,
            { id: t },
            h &&
              a.createElement(
                A,
                { className: Be.group, orientation: "horizontal" },
                r.map((e, t) => {
                  const i = (0, _e.getTranslatedResolutionModel)(e);
                  return a.createElement(w, {
                    key: t,
                    role: "radio",
                    className: u(Be.button, {
                      [Be.first]: 0 === t,
                      [Be.last]: t === r.length - 1,
                    }),
                    text: a.createElement(Me, {
                      value: i.mayOmitMultiplier ? void 0 : i.multiplier,
                      metric: i.shortKind,
                    }),
                    hint: i.hint,
                    "aria-checked": n === e,
                    isActive: n === e,
                    isDisabled: !c[e],
                    onClick: this._handeQuickClick,
                    onClickArg: e,
                    "data-value": e,
                  });
                })
              ),
            a.createElement(
              C.MatchMedia,
              { rule: y.DialogBreakpoints.TabletSmall },
              (e) =>
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    Ze.CloseDelegateContext.Provider,
                    { value: Ke },
                    a.createElement(
                      d.ToolbarMenuButton,
                      {
                        arrow: Boolean(h),
                        closeOnClickOutside: !s,
                        content:
                          h || null === m
                            ? void 0
                            : a.createElement(
                                p,
                                { className: Be.menuContent },
                                a.createElement(Me, {
                                  value: m.mayOmitMultiplier
                                    ? void 0
                                    : m.multiplier,
                                  metric: m.shortKind,
                                })
                              ),
                        hotKey: h ? Pe : void 0,
                        className: Be.menu,
                        ref: this._menu,
                        isDrawer: e,
                        onClick: this._trackClick,
                        tooltip: h || null === m ? Ue.timeInterval : m.hint,
                        menuReference: this._menuItemsContainerRef,
                        menuRole: "treegrid",
                        drawerReference: this._drawerContainerRef,
                      },
                      a.createElement(
                        "div",
                        { className: Be.dropdown },
                        this._renderChildren(v, e)
                      )
                    )
                  ),
                  s &&
                    a.createElement(
                      a.Suspense,
                      { fallback: null },
                      a.createElement(Qe, {
                        onAdd: this._handleAddInterval,
                        onClose: this._handleCloseAddIntervalDialog,
                        onUnmount: this._handleCloseAddIntervalDialog,
                        intervalService: this.context.intervalService,
                        isSmallTablet: e,
                      })
                    )
                )
            )
          );
        }
        _createMenuItems(e, t, n, i) {
          const a = e.map((e, a, o) =>
            this._renderResolutionsGroup(e, 1 === o.length, t, a + 1 + n, i)
          );
          return (function (e) {
            let t = !1;
            return e.filter((e, n, i) => {
              let a = !0;
              return (
                e.type === f.PopupMenuSeparator &&
                  ((0 !== n && n !== i.length - 1) || (a = !1), t && (a = !1)),
                (t = e.type === f.PopupMenuSeparator),
                a
              );
            });
          })([].concat(...a));
        }
        _createIntervalItem(e, t) {
          return this._customIntervals
            ? [
                a.createElement(Ge, {
                  key: "add-dialog",
                  "aria-level": 1,
                  "aria-posinset": 1,
                  "aria-setsize": t,
                  isSmallTablet: e,
                  onClick: this._handleOpenAddIntervalDialog,
                }),
                a.createElement(f.PopupMenuSeparator, {
                  key: "custom-interval-separator",
                }),
              ]
            : [];
        }
        _renderResolutionsGroup(e, t = !1, n, i, o) {
          const s = [],
            l = t ? 1 : 2,
            r = e.items.map((t, i) =>
              this._renderPopupMenuItem(t, n, i + 1, e.items.length, l)
            );
          if (t) s.push(...r);
          else if (n) {
            const t = a.createElement(je, { key: e.id, title: e.name }, r);
            s.push(t);
          } else {
            const { intervalsMenuViewStateService: t } = this.context,
              { menuViewState: n } = this.state;
            if (!t.isAllowed(e.id)) return [];
            const l = a.createElement(
              Oe,
              {
                key: e.id,
                role: "row",
                "aria-posinset": i,
                "aria-setsize": o,
                "aria-level": 1,
                className: Be.section,
                summary: e.name,
                open: !n[e.id],
                onStateChange: this._getHandleSectionStateChange(e.id),
              },
              r
            );
            s.push(l);
          }
          return (
            (!e.mayOmitSeparator || e.items.length > 1) &&
              (s.unshift(
                a.createElement(f.PopupMenuSeparator, {
                  key: `begin-${e.name}`,
                })
              ),
              s.push(
                a.createElement(f.PopupMenuSeparator, { key: `end-${e.name}` })
              )),
            s
          );
        }
        _handleChangeFavorites(e) {
          this.setState({ lastNotQuicked: void 0, favorites: e });
        }
        _handleChangeCustoms(e) {
          this.setState({ customs: e });
        }
        _handleChangeMenuViewState(e) {
          this.setState({ menuViewState: e }, () => {
            this._menu.current && this._menu.current.update();
          });
        }
        _renderPopupMenuItem(e, t, n, i, o) {
          const { isFavoritingAllowed: s } = this.props,
            { activeInterval: l, lastAddedInterval: r } = this.state,
            h = e === l,
            c = (0, _e.isAvailable)(e),
            d = this._isIntervalFavorite(e),
            u = this._isIntervalDefault(e),
            v = (0, _e.getTranslatedResolutionModel)(e);
          return a.createElement(Ae, {
            key: e,
            role: "row",
            "aria-level": o,
            "aria-posinset": n,
            "aria-setsize": i,
            "aria-selected": h,
            isSmallTablet: t,
            interval: e,
            hint: v.hint,
            isSignaling: r === e,
            isFavoritingAllowed: s,
            isDisabled: !c,
            isFavorite: d,
            isRemovable: !u,
            isActive: h,
            onClick: this._handleSelectInterval,
            onClickRemove: this._handleRemoveInterval,
            onClickFavorite: this._handleClickFavorite,
            scrollContainerRef: t
              ? this._drawerContainerRef
              : this._menuItemsContainerRef,
            "data-value": e,
          });
        }
        _isIntervalDefault(e) {
          return this._defaultIntervals.includes(e);
        }
        _isIntervalFavorite(e) {
          return this.state.favorites.includes(e);
        }
        _getQuicks(e) {
          return this.props.isShownQuicks && "small" !== this.props.displayMode
            ? void 0 === e
              ? this.state.favorites
              : e
            : [];
        }
        _trackClick() {
          0;
        }
      }
      function Ge(e) {
        const { onClick: t, className: i, isSmallTablet: o, ...s } = e;
        return a.createElement(I.AccessibleMenuItem, {
          ...s,
          key: "add-dialog",
          role: "row",
          "aria-haspopup": "dialog",
          className: u(Be.addCustomInterval, !o && Be.desktop, i),
          onClick: t,
          label: (0, Fe.appendEllipsis)(l.t(null, void 0, n(780335))),
          icon: Le,
          dontClosePopup: !0,
        });
      }
      function je(e) {
        const { children: t, title: n, className: i } = e;
        return a.createElement(
          "div",
          { className: i },
          a.createElement("div", { className: Be.smallTabletSectionTitle }, n),
          t
        );
      }
      qe.contextType = ze;
      var Xe = n(236488),
        $e = n(282436);
      const Ye = (0, S.registryContextType)();
      class Je extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const {
                  chartWidgetCollection: e,
                  windowMessageService: t,
                  isFundamental: n,
                } = this.context,
                i = e.activeChartWidget.value();
              const a = (function () {
                const e = new URL(window.location.href),
                  t = JSON.parse(decodeURIComponent(e.hash.slice(1)));
                return (
                  delete t.show_popup_button,
                  (e.hash = `#${encodeURIComponent(JSON.stringify(t))}`),
                  e.toString()
                );
              })();
              i.withModel(null, () => {
                t.post(parent, "openChartInPopup", {
                  symbol: i.model().mainSeries().actualSymbol(),
                  interval: i.model().mainSeries().interval(),
                  fundamental: n,
                  url: a,
                });
              });
            }),
            (0, S.validateRegistry)(t, {
              isFundamental: o.any,
              chartWidgetCollection: o.any.isRequired,
              windowMessageService: o.any.isRequired,
            });
        }
        render() {
          const { className: e } = this.props;
          return a.createElement(X.ToolbarIconButton, {
            className: u(e, Xe.button),
            icon: $e,
            onClick: this._handleClick,
            tooltip: l.t(null, void 0, n(834770)),
          });
        }
      }
      Je.contextType = Ye;
      var et = n(634369);
      const tt = (0, S.registryContextType)();
      class nt extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ isOpened: e });
            }),
            (this._handleClick = (e) => {
              const { chartWidgetCollection: t } = this.context,
                n = t.activeChartWidget.value();
              (0, K.trackEvent)(
                "GUI",
                "Chart Header Toolbar",
                "chart properties"
              ),
                n.showGeneralChartProperties(void 0, {
                  shouldReturnFocus: (0, Q.isKeyboardClick)(e),
                });
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = { isOpened: !1 }),
            (this._propertiesDialogRenderer =
              this.context.chartWidgetCollection.getChartPropertiesDialogRenderer());
        }
        componentDidMount() {
          this._propertiesDialogRenderer
            ?.visible()
            .subscribe(this._updateState);
        }
        componentWillUnmount() {
          this._propertiesDialogRenderer
            ?.visible()
            .unsubscribe(this._updateState);
        }
        render() {
          const { isOpened: e } = this.state;
          return a.createElement(X.ToolbarIconButton, {
            ...this.props,
            icon: et,
            isOpened: e,
            onClick: this._handleClick,
            tooltip: l.t(null, void 0, n(232514)),
          });
        }
      }
      nt.contextType = tt;
      var it = n(926032),
        at = n(577512),
        ot = n(601227),
        st = n(493173),
        lt = n(920709),
        rt = n(372319),
        ht = n(717479);
      const ct = (0, st.mergeThemes)(rt.DEFAULT_MENU_ITEM_SWITCHER_THEME, ht);
      var dt = n(234404),
        ut = n(852464);
      function vt(e) {
        const { wasChanges: t, isSaving: i, className: o } = e;
        return a.createElement(
          "span",
          { className: u(ut.saveString, !t && !i && ut.hidden, o) },
          i
            ? a.createElement(dt.Loader, {
                className: ut.loader,
                size: "small",
                staticPosition: !0,
              })
            : l.t(null, void 0, n(664e3))
        );
      }
      var mt = n(494278),
        pt = n(636296),
        gt = n(13090),
        bt = n(418603),
        wt = n(875394);
      n(222315);
      const ft = i.enabled("widget"),
        Ct = i.enabled("save_shortcut"),
        yt = (0, st.mergeThemes)(B.DEFAULT_TOOL_WIDGET_BUTTON_THEME, wt),
        _t = (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, {
          shortcut: bt.shortcut,
          withIcon: bt.withIcon,
        }),
        St =
          ((0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, {
            toolbox: bt.toolbox,
          }),
          (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, {
            toolbox: bt.toolboxSmall,
          }),
          l.t(null, void 0, n(340115))),
        xt = l.t(null, void 0, n(826276)),
        Mt = [],
        Et = (0, $.hotKeySerialize)({
          keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), "S"],
          text: "{0} + {1}",
        }),
        Tt = () => null;
      class kt extends a.PureComponent {
        constructor(e) {
          super(e),
            (this._copyElRef = a.createRef()),
            (this._menuRef = a.createRef()),
            (this._handleCopyLinkClick = () => Promise.resolve()),
            (this._handleCloneClick = () => {
              this.props.onCloneChart?.();
            }),
            (this._handleSaveClick = () => {
              this.props.onSaveChart?.(), this._trackClick();
            }),
            (this._handleSaveAsClick = () => {
              this.props.onSaveAsChart?.();
            }),
            (this.state = { isSaving: !1 });
        }
        componentDidUpdate(e, t) {
          e.isProcessing &&
            !this.props.isProcessing &&
            (clearTimeout(this._timeout),
            (this._timeout = void 0),
            this.setState({ isSaving: !1 })),
            !e.recentItems?.length &&
              this.props.recentItems?.length &&
              this._menuRef.current?.update(),
            !e.isProcessing &&
              this.props.isProcessing &&
              (this._timeout = setTimeout(() => {
                this.setState({ isSaving: !0 });
              }, 1e3));
        }
        componentWillUnmount() {
          this._timeout && clearTimeout(this._timeout);
        }
        render() {
          const {
              id: e,
              isReadOnly: t,
              displayMode: i,
              isProcessing: o,
              title: r,
              wasChanges: h,
              hideMenu: c,
              isTabletSmall: v,
              onOpenMenu: m,
              dataNameSaveMenu: g,
              isSaveDialogOpened: b,
              chartList: w,
              favorites: f,
              showRemoveFavoriteHint: C,
              onButtonClick: y,
              onAdditionalButtonClick: _,
            } = this.props,
            S = !t && !c;
          let x = [];
          mt.showFavoriteLayouts &&
            w &&
            f &&
            (x = w
              .filter((e) => f[e.id])
              .sort((e, t) => e.name.localeCompare(t.name)));
          const M = !(h || !r || this.state.isSaving),
            E = a.createElement(
              "div",
              { className: bt.textWrap },
              a.createElement(
                "span",
                { className: bt.text },
                a.createElement(lt.LeadingEmojiText, {
                  text: r || l.t(null, void 0, n(664e3)),
                })
              ),
              a.createElement(vt, {
                isSaving: this.state.isSaving,
                wasChanges: h,
              })
            );
          return a.createElement(
            p,
            null,
            t
              ? a.createElement(
                  p,
                  null,
                  a.createElement(z, {
                    id: e,
                    displayMode: i,
                    icon: a.createElement(s.Icon, { icon: pt }),
                    isDisabled: o,
                    onClick: this._handleCloneClick,
                    text: l.t(null, void 0, n(249680)),
                    collapseWhen: Mt,
                    tooltip: St,
                  })
                )
              : a.createElement(
                  p,
                  null,
                  a.createElement(z, {
                    id: e,
                    className: u(bt.button, S && bt.buttonSmallPadding),
                    displayMode: i,
                    "aria-disabled": !!M || void 0,
                    isDisabled: o,
                    onClick: M ? void 0 : this._handleSaveClick,
                    text: E,
                    theme: yt,
                    collapseWhen: Mt,
                    isOpened: b,
                    tooltip: M
                      ? l.t(null, void 0, n(289771))
                      : l.t(null, void 0, n(415356)),
                    "data-tooltip-hotkey": ft || M ? "" : Ct ? Et : "",
                  }),
                  S &&
                    a.createElement(
                      "div",
                      { className: bt.menuBtnWrap },
                      a.createElement(
                        d.ToolbarMenuButton,
                        {
                          "data-name": g,
                          arrow: !0,
                          ref: this._menuRef,
                          isDrawer: v,
                          drawerPosition: "Bottom",
                          onClick: this._trackClick,
                          onOpen: m,
                          tooltip: l.t(null, void 0, n(638973)),
                          menuClassName: u(!v && bt.menu),
                          menuRole: "grid",
                        },
                        this._renderMenuItems(Boolean(v))
                      ),
                      mt.showFavoriteLayouts &&
                        C &&
                        x.length > FAVORITE_LAYOUTS_LIMIT &&
                        a.createElement(
                          a.Suspense,
                          { fallback: null },
                          a.createElement(Tt, {
                            onClick: y,
                            onAdditionalClick: _,
                            placement: "auto",
                            theme: undefined,
                            buttonSize: "small",
                            saveHintStateByClick: !1,
                            text: l.t(
                              null,
                              {
                                count: x.length,
                                plural:
                                  "Your favorite layouts have moved to the top toolbar. You currently have {count} favorites. You can reduce the number to find them easier — unfavorite all in just one click or set up your choice manually.",
                                replace: { count: x.length.toString() },
                              },
                              n(206094)
                            ),
                            buttonText: l.t(null, void 0, n(766418)),
                            additionalButtonText: l.t(null, void 0, n(336291)),
                            settingsHintKey: "hint.favoriteLayouts",
                            placeHolderClassName: bt.hintPlaceholder,
                            hideWithReference: !0,
                            hintStateHandler: favoriteLayoutsHintStateHandler,
                          })
                        )
                    ),
                  !1
                )
          );
        }
        _renderMenuItems(e) {
          const {
              wasChanges: t,
              isProcessing: i,
              chartId: o,
              onSaveChartFromMenu: s,
              onRenameChart: r,
              onLoadChart: h,
              onNewChart: c,
              isAutoSaveEnabled: d,
              autoSaveId: v,
              sharingId: m,
              onAutoSaveChanged: p,
              isSharingEnabled: g,
              onSharingChanged: b,
              recentItems: w,
              onExportData: C,
              isAuthenticated: y,
              favorites: S,
            } = this.props,
            x = e ? _.multilineLabelWithIconAndToolboxTheme : _t,
            M = e ? void 0 : (0, Y.humanReadableHash)(Y.Modifiers.Mod + 83),
            E = e ? void 0 : l.t(null, { context: "hotkey" }, n(23821)),
            T = [];
          return (
            T.push(
              a.createElement(I.AccessibleMenuItem, {
                key: "save",
                role: "row",
                isDisabled: Boolean(i || (!t && o)),
                label: xt,
                onClick: s,
                shortcut: M,
                labelRowClassName: u(e && bt.popupItemRowTabletSmall),
                theme: x,
                "data-name": "save-load-menu-item-save",
              })
            ),
            void 0 !== o &&
              T.push(
                a.createElement(I.AccessibleMenuItem, {
                  key: "rename",
                  role: "row",
                  icon: void 0,
                  label: (0, Fe.appendEllipsis)(l.t(null, void 0, n(606321))),
                  onClick: r,
                  labelRowClassName: u(e && bt.popupItemRowTabletSmall),
                  theme: x,
                  "data-name": "save-load-menu-item-rename",
                  "aria-haspopup": "dialog",
                }),
                a.createElement(I.AccessibleMenuItem, {
                  key: "save-as",
                  role: "row",
                  icon: void 0,
                  label: (0, Fe.appendEllipsis)(St),
                  onClick: this._handleSaveAsClick,
                  labelRowClassName: u(e && bt.popupItemRowTabletSmall),
                  theme: x,
                  "data-name": "save-load-menu-item-clone",
                  "aria-haspopup": "dialog",
                })
              ),
            T.push(
              a.createElement(f.PopupMenuSeparator, {
                key: "all-layouts-separator",
              }),
              a.createElement(I.AccessibleMenuItem, {
                key: "all-layouts",
                role: "row",
                className: "js-save-load-menu-item-load-chart",
                label: (0, Fe.appendEllipsis)(l.t(null, void 0, n(965433))),
                onClick: h,
                icon: gt,
                labelRowClassName: u(e && bt.popupItemRowTabletSmall),
                theme: x,
                shortcut: E,
                "data-name": "save-load-menu-item-load",
                "aria-haspopup": "dialog",
              })
            ),
            T
          );
        }
        _trackClick() {
          0;
        }
      }
      const Ht = (0, S.registryContextType)();
      class At extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._exportDialogPromise = null),
            (this._recentLayoutsAbortController = null),
            (this._requestRecentLayouts = () => {
              this._recentLayoutsAbortController?.abort();
            }),
            (this._updateState = (e) => {
              this.setState((t) => ({ ...t, ...e }));
            }),
            (this._handleExportData = () => {
              0;
            }),
            (this._onSaveDialogVisibleChange = (e) => {
              this.setState({ isSaveDialogOpened: e });
            }),
            (this._syncState = (e) => {
              this.setState(e);
            }),
            (this._handleAdditionalButton = () => {
              const { loadChartService: e } = this.context;
              e.deleteAllFavorites();
            }),
            (this._onChangeHasChanges = (e) => {
              this.state.wasChanges !== e && this.setState({ wasChanges: e });
            }),
            (this._onChangeAutoSaveEnabled = (e) => {
              0;
            }),
            (this._onChangeSharingEnabled = (e) => {
              this.setState({ isSharingEnabled: e });
            }),
            (this._onChangeTitle = (e) => {
              this.setState({ title: e });
            }),
            (this._onChangeId = (e) => {
              this.setState({ id: e });
            }),
            (this._onChartAboutToBeSaved = () => {
              this.setState({ isProcessing: !0 });
            }),
            (this._onChartSaved = () => {
              this.setState({ isProcessing: !1 });
            }),
            (this._handleAutoSaveEnabled = (e) => {
              0;
            }),
            (this._handleSharingEnabled = (e) => {
              0;
            }),
            (this._handleClickSave = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(),
                this._trackEvent("Save click");
            }),
            (this._handleOpenMenu = () => {
              this._requestRecentLayouts();
            }),
            (this._handleClickSaveFromMenu = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(),
                this._trackEvent("Save From Menu");
            }),
            (this._handleClickClone = () => {
              this.context.saveChartService.cloneChart();
            }),
            (this._handleClickSaveAs = () => {
              this.context.saveChartService.saveChartAs(),
                this._trackEvent("Make a copy");
            }),
            (this._handleClickNew = () => {
              this._trackEvent("New chart layout");
            }),
            (this._handleClickLoad = () => {
              this.context.loadChartService.showLoadDialog();
            }),
            (this._handleHotkey = () => {
              this.context.loadChartService.showLoadDialog();
            }),
            (this._handleClickRename = () => {
              this.context.saveChartService.renameChart(),
                this._trackEvent("Rename");
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
              chartChangesWatcher: o.any.isRequired,
              saveChartService: o.any.isRequired,
              sharingChartService: o.any,
              loadChartService: o.any.isRequired,
            });
          const {
            chartWidgetCollection: n,
            chartChangesWatcher: i,
            saveChartService: a,
            sharingChartService: s,
            loadChartService: l,
          } = t;
          (this._loadChartServiceState = l.state()),
            (this.state = {
              isAuthenticated: window.is_authenticated,
              isProcessing: !1,
              id: n.metaInfo.id.value(),
              title: n.metaInfo.name.value(),
              wasChanges: i.hasChanges(),
              iconHovered: !1,
              isSaveDialogOpened: !1,
              ...this._loadChartServiceState.value(),
            });
        }
        componentDidMount() {
          const { chartSaver: e, isFake: t, stateSyncEmitter: i } = this.props,
            {
              chartWidgetCollection: a,
              chartChangesWatcher: o,
              saveChartService: s,
              sharingChartService: r,
              loadChartService: h,
            } = this.context;
          t
            ? i.on("change", this._syncState)
            : (o.getOnChange().subscribe(this, this._onChangeHasChanges),
              a.metaInfo.name.subscribe(this._onChangeTitle),
              a.metaInfo.id.subscribe(this._onChangeId),
              (this._hotkeys = (0, it.createGroup)({ desc: "Save/Load" })),
              this._hotkeys.add({
                desc: l.t(null, void 0, n(929517)),
                handler: this._handleHotkey,
                hotkey: 190,
              }),
              e.chartSaved().subscribe(this, this._onChartSaved),
              e
                .chartAboutToBeSaved()
                .subscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.subscribe(this, this._onLoginStateChange),
              this.context.saveChartService
                .getCreateController()
                .visible()
                .subscribe(this._onSaveDialogVisibleChange),
              this._loadChartServiceState.subscribe(this._updateState),
              mt.showFavoriteLayouts && h.refreshChartList());
        }
        componentDidUpdate(e, t) {
          this.props.isFake ||
            (t !== this.state &&
              this.props.stateSyncEmitter.emit("change", this.state));
        }
        componentWillUnmount() {
          const { chartSaver: e, isFake: t, stateSyncEmitter: n } = this.props,
            {
              chartWidgetCollection: i,
              chartChangesWatcher: a,
              saveChartService: o,
              sharingChartService: s,
            } = this.context;
          t
            ? n.off("change", this._syncState)
            : (a.getOnChange().unsubscribe(this, this._onChangeHasChanges),
              i.metaInfo.name.unsubscribe(this._onChangeTitle),
              i.metaInfo.id.unsubscribe(this._onChangeId),
              (0, oe.ensureDefined)(this._hotkeys).destroy(),
              e.chartSaved().unsubscribe(this, this._onChartSaved),
              e
                .chartAboutToBeSaved()
                .unsubscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.unsubscribe(
                this,
                this._onLoginStateChange
              ),
              this._recentLayoutsAbortController?.abort(),
              this.context.saveChartService
                .getCreateController()
                .visible()
                .unsubscribe(this._onSaveDialogVisibleChange),
              this._loadChartServiceState.unsubscribe(this._updateState));
        }
        render() {
          const {
              isReadOnly: e,
              displayMode: t,
              id: n,
              isFake: i,
            } = this.props,
            {
              isProcessing: o,
              isAuthenticated: s,
              title: l,
              id: r,
              wasChanges: h,
              isAutoSaveEnabled: c,
              isSharingEnabled: d,
              isSaveDialogOpened: u,
              favorites: v,
              chartList: m,
              recents: p,
            } = this.state,
            g = {
              displayMode: t,
              isReadOnly: e,
              isAuthenticated: s,
              isProcessing: o,
              wasChanges: h,
              title: l,
              id: n,
              isSaveDialogOpened: u,
              favorites: v,
              chartList: m,
              chartId: null !== r ? r : void 0,
              dataNameSaveMenu: i ? void 0 : "save-load-menu",
              showRemoveFavoriteHint: !i,
              onCloneChart: this._handleClickClone,
              onSaveChart: this._handleClickSave,
              onSaveChartFromMenu: this._handleClickSaveFromMenu,
              onRenameChart: this._handleClickRename,
              onSaveAsChart: this._handleClickSaveAs,
              onLoadChart: this._handleClickLoad,
              onButtonClick: this._handleClickLoad,
              onAdditionalButtonClick: this._handleAdditionalButton,
            };
          return a.createElement(
            C.MatchMedia,
            { rule: y.DialogBreakpoints.TabletSmall },
            (e) => a.createElement(kt, { ...g, isTabletSmall: e })
          );
        }
        _onLoginStateChange() {
          const e = window.is_authenticated;
          this.setState({ isAuthenticated: e }),
            mt.showFavoriteLayouts &&
              this.context.loadChartService.refreshChartList();
        }
        _trackEvent(e) {
          0;
        }
      }
      At.contextType = Ht;
      var It = n(851258),
        Rt = n(637730),
        Nt = n(918275);
      const Zt = new Rt.DateTimeFormatter({
          dateTimeSeparator: "_",
          timeFormat: "%h-%m-%s",
        }),
        Vt = { takeSnapshot: l.t(null, void 0, n(487972)) },
        Wt = (0, S.registryContextType)();
      var Dt = n(799573);
      function Ot(e, t, i) {
        return (async function (e, t, i) {
          const a = URL.createObjectURL(
            new Blob(
              [
                `<!doctype html><html style="background-color:${
                  getComputedStyle(document.documentElement).backgroundColor
                }"><head><meta charset="utf-8"><title>${l.t(
                  null,
                  void 0,
                  n(493292)
                )}</title></head><body style="background-color:${
                  getComputedStyle(document.body).backgroundColor
                }"></body></html>`,
              ],
              { type: "text/html" }
            )
          );
          try {
            Dt.isIOS && (await new Promise((e) => setTimeout(e)));
            const n = open(a, t, i);
            if (!n) throw new Error("cound not open a new tab");
            const o = await e.catch(() => {});
            void 0 !== o ? n.location.replace(o) : n.close();
          } finally {
            URL.revokeObjectURL(a);
          }
        })(e, t, i);
      }
      var Ft = n(670001),
        Bt = n(921569);
      function Lt(e) {
        const t = u(e.isLoading && Bt.hidden),
          n = u(!e.isLoading && Bt.hidden);
        return a.createElement(
          "div",
          null,
          a.createElement("span", { className: t }, e.children),
          a.createElement(
            "span",
            { className: n },
            a.createElement(dt.Loader, null)
          )
        );
      }
      var Ut = n(252130),
        Pt = n(167487),
        zt = n(201457),
        Kt = n(323595),
        Qt = n(929414),
        qt = n(899280),
        Gt = n(63295);
      const jt = (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, Gt);
      function Xt(e) {
        const { serverSnapshot: t, clientSnapshot: i, hideShortcuts: o } = e,
          [s, r] = (0, a.useState)(!1),
          [h, c] = (0, a.useState)(!1),
          [d, v] = (0, a.useState)(!1),
          [m, p] = (0, a.useState)(!1),
          [g, b] = (0, a.useState)(!1),
          w = (0, Ut.useIsMounted)(),
          f = (0, a.useCallback)(async () => {
            const e = i(),
              t = e.then(
                (e) =>
                  new Promise((t) =>
                    e.canvas.toBlob((e) => {
                      null !== e && t(e);
                    })
                  )
              );
            try {
              await (0, at.writePromiseUsingApi)(t, "image/png"),
                pe.emit("onClientScreenshotCopiedToClipboard");
            } catch (t) {
              const { canvas: n } = await e;
              window
                .open()
                ?.document.write(`<img width="100%" src="${n.toDataURL()}"/>`);
            }
          }, [i]),
          C = (0, a.useCallback)(async () => {
            const e = await i(),
              t = await (function (e) {
                return new Promise((t) => {
                  try {
                    e.canvas.toBlob((e) => {
                      if (null === e)
                        throw new Error("Unable to generate blob");
                      t(URL.createObjectURL(e));
                    });
                  } catch {
                    t(e.canvas.toDataURL());
                  }
                });
              })(e);
            t && (0, Ft.downloadFile)(`${e.name}.png`, t);
          }, [i]),
          y = (e) => Ot(e.then((e) => e.imageUrl)),
          _ = (0, a.useCallback)(
            async (e = !1) => {
              const n = t();
              try {
                if (e) await y(n);
                else {
                  const e = n.then(
                    (e) => new Blob([e.imageUrl], { type: "text/plain" })
                  );
                  await (0, at.writePromiseUsingApi)(e, "text/plain"),
                    pe.emit("onServerScreenshotCopiedToClipboard");
                }
                return !0;
              } catch (e) {
                return y(n), !0;
              } finally {
                w.current && (c(!1), r(!1), (0, Ve.globalCloseMenu)());
              }
            },
            [t]
          ),
          S =
            ((0, a.useCallback)(async () => {
              const e = t();
              try {
                const t = 720,
                  n = e.then(async (e) => {
                    const n = await snapshoter().getSnapshot(
                        e.symbol,
                        new Set(["description"])
                      ),
                      i =
                        "error" !== n.status ? n.values.description : e.symbol,
                      a = e.imageUrl.match(/\/x\/([0-9a-zA-Z]{8})/)?.[1] ?? "",
                      o = createSnapshotImageUrls(a)?.url;
                    return new Blob(
                      [
                        `<img width="${t}" loading="lazy" src="${o}"/><p><a href="https://www.tradingview.com${getSymbolPagePath(
                          { shortName: e.symbol }
                        )}">${i} chart</a> by TradingView</p>`,
                      ],
                      { type: "text/plain" }
                    );
                  });
                return (
                  await (0, at.writePromiseUsingApi)(n, "text/plain"),
                  pe.emit("onServerScreenshotEmbedCodeCopiedToClipboard"),
                  !0
                );
              } catch (t) {
                return y(e), !0;
              } finally {
                w.current && (v(!1), (0, Ve.globalCloseMenu)());
              }
            }, [t]),
            (0, a.useCallback)(async () => {
              p(!0);
              const [e, i] = await Promise.all([
                n.e(4665).then(n.bind(n, 375243)),
                t(),
              ]);
              e.Twitter.shareSnapshotInstantly(i.symbol, i.imageUrl),
                w.current && (p(!1), (0, Ve.globalCloseMenu)());
            }, [t]));
        const x = (e.snapshotUrl && e.snapshotUrl.length > 0) ?? !1;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            me.ToolWidgetMenuSummary,
            null,
            l.t(null, void 0, n(458425))
          ),
          a.createElement(I.AccessibleMenuItem, {
            role: "row",
            "data-name": "save-chart-image",
            label: l.t(null, void 0, n(526200)),
            icon: Kt,
            onClick: C,
            shortcut: o
              ? void 0
              : (0, Y.humanReadableHash)(
                  Y.Modifiers.Mod + Y.Modifiers.Alt + 83
                ),
            theme: jt,
          }),
          a.createElement(I.AccessibleMenuItem, {
            role: "row",
            "data-name": "copy-chart-image",
            label: l.t(null, void 0, n(496554)),
            icon: zt,
            onClick: f,
            shortcut: o
              ? void 0
              : (0, Y.humanReadableHash)(
                  Y.Modifiers.Mod + Y.Modifiers.Shift + 83
                ),
            theme: jt,
          }),
          x &&
            !(0, ot.onWidget)() &&
            a.createElement(I.AccessibleMenuItem, {
              role: "row",
              "data-name": "copy-link-to-the-chart-image",
              label: a.createElement(
                Lt,
                { isLoading: s },
                l.t(null, void 0, n(181939))
              ),
              icon: Qt,
              onClick: () => {
                r(!0), _(!1);
              },
              dontClosePopup: !0,
              isDisabled: s,
              shortcut: o
                ? void 0
                : (0, Y.humanReadableHash)(Y.Modifiers.Alt + 83),
              className: u(s && Gt.loading),
              theme: jt,
            }),
          !1,
          x &&
            !(0, ot.onWidget)() &&
            !(0, ot.isSymphonyEmbed)() &&
            a.createElement(I.AccessibleMenuItem, {
              role: "row",
              "data-name": "open-image-in-new-tab",
              label: a.createElement(
                Lt,
                { isLoading: h },
                l.t(null, void 0, n(619159))
              ),
              icon: qt,
              onClick: () => {
                c(!0), _(!0);
              },
              dontClosePopup: !0,
              isDisabled: h,
              className: u(h && Gt.loading),
              theme: jt,
            }),
          x &&
            !(0, ot.onWidget)() &&
            !(0, ot.isSymphonyEmbed)() &&
            a.createElement(I.AccessibleMenuItem, {
              role: "row",
              "data-name": "tweet-chart-image",
              label: a.createElement(
                Lt,
                { isLoading: m },
                l.t(null, void 0, n(628239))
              ),
              icon: Pt,
              onClick: S,
              dontClosePopup: !0,
              isDisabled: m,
              className: u(m && Gt.loading),
              theme: jt,
            }),
          !1
        );
      }
      var $t = n(69111);
      function Yt(e) {
        const [t, n] = (0, a.useState)(!1),
          i = (0, Ut.useIsMounted)(),
          o = (0, a.useCallback)(async () => {
            n(!0), await e.serverSnapshot(), i.current && n(!1);
          }, [e.serverSnapshot]);
        return a.createElement(B.ToolWidgetButton, {
          id: e.id,
          className: e.className,
          isDisabled: t,
          onClick: o,
          title: e.tooltip,
          icon: e.icon,
        });
      }
      var Jt = n(272644);
      const en =
        ((tn = function (e) {
          return (0, $t.isOnMobileAppPage)("any")
            ? a.createElement(Yt, { ...e, icon: Jt })
            : a.createElement(
                d.ToolbarMenuButton,
                {
                  content: a.createElement(B.ToolWidgetButton, {
                    tag: "div",
                    id: e.id,
                    className: e.className,
                    icon: Jt,
                  }),
                  drawerPosition: "Bottom",
                  drawerBreakpoint: y.DialogBreakpoints.TabletSmall,
                  arrow: !1,
                  onClick: function () {},
                  tooltip: e.tooltip,
                  menuRole: "grid",
                },
                a.createElement(Xt, { ...e })
              );
        }),
        ((nn = class extends a.PureComponent {
          constructor(e, t) {
            super(e, t),
              (this._clientSnapshot = async () => {
                const e = this.context.chartWidgetCollection.activeChartWidget
                  .value()
                  .model()
                  .mainSeries()
                  .actualSymbol();
                return {
                  canvas:
                    await this.context.chartWidgetCollection.clientSnapshot(),
                  name: `${(0, Nt.shortName)(e)}_${Zt.formatLocal(new Date())}`,
                };
              }),
              (this._serverSnapshot = async () => {
                const e = this.context.chartWidgetCollection.activeChartWidget
                    .value()
                    .model()
                    .mainSeries()
                    .actualSymbol(),
                  t = await this.context.chartWidgetCollection.takeScreenshot(),
                  n =
                    void 0 !== this.context.snapshotUrl
                      ? t
                      : (0, It.convertImageNameToUrl)(t);
                return { symbol: (0, Nt.shortName)(e), imageUrl: n };
              }),
              (0, S.validateRegistry)(t, {
                chartWidgetCollection: o.any.isRequired,
              });
          }
          render() {
            const { className: e, id: t } = this.props;
            return a.createElement(tn, {
              id: t,
              className: e,
              tooltip: Vt.takeSnapshot,
              serverSnapshot: this._serverSnapshot,
              clientSnapshot: this._clientSnapshot,
              snapshotUrl: this.context.snapshotUrl,
            });
          }
        }).contextType = Wt),
        nn);
      var tn,
        nn,
        an = n(992835),
        on = n(366171),
        sn = n(549928);
      class ln {
        async show(e) {
          if (null !== ln._provider) {
            const e = await ln._provider.getSymbol();
            return (
              r.linking.setSymbolAndLogInitiator(e.symbol, "symbol search UI"),
              e
            );
          }
          if (ln._currentShowingInstance)
            throw new DOMException(
              "SymbolSearchUI is already shown",
              "InvalidStateError"
            );
          try {
            (ln._currentShowingInstance = this), ln.preload();
            const t = await ln._implementation;
            return (
              (0, oe.assert)(null !== t),
              new Promise((n) => {
                t.showDefaultSearchDialog({
                  ...e,
                  onSearchComplete: (e) => {
                    n({ symbol: e });
                  },
                });
              })
            );
          } finally {
            ln._currentShowingInstance = null;
          }
        }
        static setProvider(e) {
          this._provider = e;
        }
        static preload() {
          null === this._provider &&
            null === this._implementation &&
            (this._implementation = (0, sn.loadNewSymbolSearch)());
        }
      }
      (ln._currentShowingInstance = null),
        (ln._provider = null),
        (ln._implementation = null);
      var rn = n(321303),
        hn = n(529142),
        cn = n(592876);
      const dn = (0, st.mergeThemes)(g.DEFAULT_TOOLBAR_BUTTON_THEME, cn),
        un = (0, S.registryContextType)();
      class vn extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._openSymbolSearchDialog = async (e) => {
              if ((0, Y.modifiersFromEvent)(e) === Y.Modifiers.Alt)
                return void (0, at.getClipboard)().writeText(this.state.symbol);
              if (this.state.isOpened) return;
              const { chartWidgetCollection: t } = this.context,
                o = t?.activeChartWidget.value().model().model(),
                s = o?.mainSeries().symbolInfo(),
                r = "option" === s?.type;
              try {
                (0, K.trackEvent)("GUI", "SS", "main search");
                let t = this._isSpread(this.state.symbol)
                  ? this.state.symbol
                  : this.state.shortName;
                if (i.enabled("symbol_search_option_chain_selector") && r) {
                  const e = await resolveUnderlyingSymbol(this.state.symbol);
                  e &&
                    (t = {
                      type: "option",
                      value: this.state.symbol,
                      underlying: e,
                    });
                }
                await new ln().show({
                  trackResultsOptions: {
                    trackResults: !1,
                    emptySearchType: "empty_result__supercharts",
                  },
                  onClose: () => {
                    this.setState({ isOpened: !1 });
                  },
                  onOpen: () => {
                    this.setState({ isOpened: !0 });
                  },
                  shouldReturnFocus: (0, Q.isKeyboardClick)(e),
                  defaultValue: t,
                  showSpreadActions:
                    (0, an.canShowSpreadActions)() &&
                    this.props.isActionsVisible,
                  source: "searchBar",
                  enableOptionsChain: i.enabled(
                    "symbol_search_option_chain_selector"
                  ),
                  footer: Te.mobiletouch
                    ? void 0
                    : a.createElement(
                        on.SymbolSearchDialogFooter,
                        null,
                        l.t(null, void 0, n(250021))
                      ),
                });
              } catch (e) {}
            }),
            (this._isSpread = (e) => !1),
            (this._onSymbolInfoResolved = () => {
              const e = r.linking.proSymbol.value();
              this.setState({ symbol: e, shortName: mn() });
            }),
            (this._onSymbolChanged = () => {
              const e = r.linking.proSymbol.value();
              this.setState({ symbol: e, shortName: mn() });
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = {
              symbol: r.linking.proSymbol.value(),
              shortName: mn(),
              isOpened: !1,
            });
        }
        componentDidMount() {
          r.linking.proSymbol.subscribe(this._onSymbolChanged),
            i.enabled("use_symbol_name_for_header_toolbar") &&
              r.linking
                .getChartWidget()
                ?.model()
                .mainSeries()
                .symbolResolved()
                .subscribe(null, this._onSymbolInfoResolved, !1),
            ln.preload();
        }
        componentWillUnmount() {
          r.linking.proSymbol.unsubscribe(this._onSymbolChanged),
            i.enabled("use_symbol_name_for_header_toolbar") &&
              r.linking
                .getChartWidget()
                ?.model()
                .mainSeries()
                .symbolResolved()
                .unsubscribe(null, this._onSymbolInfoResolved);
        }
        render() {
          const { id: e, className: t } = this.props;
          return a.createElement(g.ToolbarButton, {
            id: e,
            className: v()(
              t,
              i.enabled("uppercase_instrument_names") && cn.uppercase,
              cn.smallLeftPadding
            ),
            theme: dn,
            icon: hn,
            isOpened: this.state.isOpened,
            text: this.state.shortName,
            onClick: this._openSymbolSearchDialog,
            tooltip: l.t(null, void 0, n(751165)),
          });
        }
        async _updateQuotes(e) {}
      }
      function mn() {
        const e = r.linking.proSymbol.value();
        if (i.enabled("use_symbol_name_for_header_toolbar")) {
          const e = r.linking.seriesShortSymbol.value();
          if (e) return e;
        }
        return (0, rn.splitSymbolName)(e)[1];
      }
      vn.contextType = un;
      var pn = n(475313);
      function gn(e) {
        return a.createElement(
          "div",
          { className: u(pn.description, e.className) },
          e.children
        );
      }
      var bn = n(606917);
      const wn = (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, {
          labelRow: bn.labelRow,
          toolbox: bn.toolbox,
          item: bn.titleItem,
        }),
        fn = (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, {
          labelRow: bn.labelRow,
          toolbox: bn.toolbox,
          item: bn.titleItemTabletSmall,
        }),
        Cn = (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, {
          item: bn.item,
        }),
        yn = (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, {
          item: bn.itemTabletSmall,
        });
      function _n(e) {
        const {
            role: t,
            className: n,
            item: i,
            description: o,
            favorite: s,
            isFavoritingAllowed: l,
            isTabletSmall: r,
            onApply: h,
            onRemove: c,
            onFavor: d,
            isActive: u,
            descriptionDataName: m,
            ...p
          } = e,
          g = p,
          [b, w] = (0, Ee.useHover)(),
          f = r ? fn : wn,
          C = r ? yn : Cn,
          y = (0, a.useCallback)(() => h(i), [h, i]),
          _ = (0, a.useCallback)((e) => c(i, e), [c, i]),
          S = (0, a.useCallback)(() => {
            d && d(i);
          }, [d, i]);
        return a.createElement(
          "div",
          { ...w, ...g, className: v()(n, bn.wrap) },
          a.createElement(I.AccessibleMenuItem, {
            role: t,
            theme: f,
            label: a.createElement(lt.LeadingEmojiText, { text: i.name }),
            labelRowClassName: v()(r && bn.itemLabelTabletSmall),
            isHovered: b,
            showToolboxOnHover: !s && !b,
            showToolboxOnFocus: !0,
            onClick: y,
            isActive: u,
            toolbox: a.createElement(
              a.Fragment,
              null,
              !i.isDefault &&
                a.createElement(ke.MenuRemoveButton, {
                  key: "remove",
                  hidden: !Te.touch && !b,
                  onClick: _,
                  className: v()(bn.remove, u && bn.active),
                }),
              Boolean(d) &&
                l &&
                a.createElement(R.MenuFavoriteButton, {
                  key: "favorite",
                  isFilled: Boolean(s),
                  onClick: S,
                })
            ),
          }),
          o &&
            a.createElement(se.PopupMenuItem, {
              theme: C,
              label: a.createElement(
                gn,
                {
                  className: v()(
                    bn.description,
                    r && bn.descriptionTabletSmall
                  ),
                },
                o
              ),
              onClick: y,
              isHovered: b,
              isActive: u,
              "data-name": m,
            })
        );
      }
      var Sn = n(903003);
      function xn(e) {
        const { item: t } = e,
          n = { ...t, isDefault: t.is_default },
          i = {
            "data-name": t.name,
            "data-id": t.id,
            "data-is-default": Boolean(t.is_default),
          },
          o = t.meta_info,
          s = o ? (0, Sn.getStudyTemplateDescString)(o.indicators) : void 0;
        return a.createElement(_n, { ...e, ...i, description: s, item: n });
      }
      var Mn = n(197357);
      const En = (0, st.mergeThemes)(se.DEFAULT_POPUP_MENU_ITEM_THEME, Mn);
      function Tn(e) {
        const {
          onClick: t,
          isTabletSmall: n,
          className: i,
          icon: o,
          title: l,
          ...r
        } = e;
        return a.createElement(I.AccessibleMenuItem, {
          ...r,
          theme: En,
          className: v()(i, Mn.wrap),
          label: a.createElement(
            "div",
            { className: Mn.titleWrap },
            a.createElement(
              "div",
              { className: v()(Mn.title, n && Mn.titleTabletSmall) },
              a.createElement(s.Icon, { className: Mn.icon, icon: o }),
              a.createElement("div", { className: Mn.text }, l)
            )
          ),
          onClick: t,
        });
      }
      var kn = n(585938),
        Hn = n(230553);
      const An = a.createContext(null),
        In = !1;
      var Rn = n(53707),
        Nn = n(972154);
      function Zn(e) {
        const {
            templates: t,
            recents: i,
            onTemplateSave: o,
            onTemplateRemove: s,
            onTemplateSelect: r,
            onTemplateFavorite: h,
            isTabletSmall: c,
            isLoading: d,
            onOpenTemplatesDialog: u,
          } = e,
          m = (0, a.useMemo)(() => t.filter((e) => e.is_default), [t]),
          p = (0, a.useMemo)(() => t.filter((e) => !e.is_default), [t]),
          g = (0, a.useContext)(An),
          b = (0, a.useContext)(Hn.MenuContext),
          w = (0, kn.useForceUpdate)();
        (0, a.useEffect)(() => {
          if (null !== g) {
            const e = {};
            return (
              g.getOnChange().subscribe(e, () => {
                w(), b && b.update();
              }),
              () => g.getOnChange().unsubscribeAll(e)
            );
          }
          return () => {};
        }, []);
        const C = (e, t) =>
          a.createElement(xn, {
            key: e.name,
            role: "row",
            item: e,
            isFavoritingAllowed: Boolean(h),
            favorite: null !== e.favorite_date,
            onApply: r,
            onFavor: h,
            onRemove: s,
            isTabletSmall: c,
            "data-group-name": t,
          });
        return a.createElement(
          "div",
          {
            role: "treegrid",
            className: v()(Nn.menu, c && Nn.menuSmallTablet),
          },
          a.createElement(Tn, {
            role: "row",
            onClick: o,
            isTabletSmall: c,
            icon: Rn,
            title: (0, Fe.appendEllipsis)(l.t(null, void 0, n(226869))),
            "aria-haspopup": "dialog",
          }),
          d &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(f.PopupMenuSeparator, null),
              a.createElement(ve.ToolWidgetMenuSpinner, null)
            ),
          !d &&
            (c
              ? a.createElement(Vn, {
                  defaults: m,
                  customs: p,
                  recents: i,
                  render: C,
                })
              : a.createElement(Wn, {
                  defaults: m,
                  customs: p,
                  recents: i,
                  render: C,
                  state: g,
                })),
          In
        );
      }
      function Vn(e) {
        const { defaults: t, customs: i, recents: o, render: s } = e;
        return a.createElement(
          a.Fragment,
          null,
          i.length > 0 &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(f.PopupMenuSeparator, null),
              a.createElement(
                me.ToolWidgetMenuSummary,
                { className: Nn.menuItemHeaderTabletSmall },
                l.t(null, void 0, n(183300))
              ),
              i.map((e) => s(e))
            ),
          t.length > 0 &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(f.PopupMenuSeparator, null),
              a.createElement(
                me.ToolWidgetMenuSummary,
                { className: Nn.menuItemHeaderTabletSmall },
                l.t(null, void 0, n(846838))
              ),
              t.map((e) => s(e))
            )
        );
      }
      function Wn(e) {
        const { defaults: t, customs: i, recents: o, render: s, state: r } = e;
        return a.createElement(
          a.Fragment,
          null,
          i.length > 0 &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(f.PopupMenuSeparator, null),
              a.createElement(
                me.ToolWidgetMenuSummary,
                { className: Nn.menuItemHeader },
                l.t(null, void 0, n(183300))
              ),
              i.map((e) => s(e))
            ),
          i.length > 0 &&
            t.length > 0 &&
            r &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(f.PopupMenuSeparator, null),
              a.createElement(
                Oe,
                {
                  role: "row",
                  summary: l.t(null, void 0, n(846838)),
                  open: !r.get().defaultsCollapsed,
                  onStateChange: (e) => r.set({ defaultsCollapsed: !e }),
                },
                t.map((e) => s(e))
              )
            ),
          0 === i.length &&
            t.length > 0 &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(f.PopupMenuSeparator, null),
              a.createElement(
                me.ToolWidgetMenuSummary,
                { className: Nn.menuItemHeader },
                l.t(null, void 0, n(846838))
              ),
              t.map((e) => s(e))
            )
        );
      }
      var Dn = n(240534),
        On = n(301341);
      class Fn {
        constructor(e, t) {
          (this._isFavoriteEnabled = i.enabled("items_favoriting")),
            (this.handleFavorTemplate = (e) => {
              if (!this._isFavoriteEnabled) return;
              const { id: t, is_default: n, favorite_date: i } = e;
              null !== i
                ? this._removeFavoriteTemplate(t, n)
                : this._addFavoriteTemplate(t, n);
            }),
            (this.handleDropdownOpen = () => {
              this._setState({ isLoading: !0 }),
                this._studyTemplates.invalidate(),
                this._studyTemplates.refreshStudyTemplateList(() =>
                  this._setState({ isLoading: !1 })
                );
            }),
            (this.handleApplyTemplate = (e) => {
              this._studyTemplates.applyTemplate(e.name),
                this._recentStudyTemplatesService &&
                  this._recentStudyTemplatesService.add(e.id);
            }),
            (this.handleRemoveTemplate = (e, t, n) => {
              this._studyTemplates.deleteStudyTemplate(e.name, t, n);
            }),
            (this.handleSaveTemplate = (e) => {
              this._studyTemplates.showSaveAsDialog(e);
            }),
            (this._studyTemplates = e),
            (this._recentStudyTemplatesService = t);
          const n = this._recentStudyTemplatesService?.get() || [],
            a = this._studyTemplates.list();
          (this._state = new Dn.WatchedValue({
            isLoading: !1,
            studyTemplatesList: a,
            recents: n,
          })),
            this._studyTemplates
              .getOnChange()
              .subscribe(this, this._handleTemplatesChange),
            this._recentStudyTemplatesService
              ?.getOnChange()
              .subscribe(this, this._handleRecentsChange),
            this._studyTemplates.refreshStudyTemplateList();
        }
        destroy() {
          this._studyTemplates
            .getOnChange()
            .unsubscribe(this, this._handleTemplatesChange),
            this._recentStudyTemplatesService
              ?.getOnChange()
              .unsubscribe(this, this._handleRecentsChange);
        }
        state() {
          return this._state.readonly();
        }
        getSortedFavoritesStudyTemplates(e) {
          return e
            .filter((e) => null !== e.favorite_date)
            .sort((e, t) =>
              null !== e.favorite_date &&
              null !== t.favorite_date &&
              e.favorite_date > t.favorite_date
                ? 1
                : -1
            );
        }
        getValidRecents(e) {
          const t = e.reduce((e, t) => ((e[t.id] = t), e), {});
          return this._state
            .value()
            .recents.map((e) => t[e])
            .filter((e) => void 0 !== e);
        }
        _setState(e) {
          this._state.setValue({ ...this._state.value(), ...e });
        }
        _handleTemplatesChange() {
          this._setState({ studyTemplatesList: this._studyTemplates.list() });
        }
        _handleRecentsChange() {
          this._setState({
            recents: this._recentStudyTemplatesService?.get() || [],
          });
        }
        _removeFavoriteTemplate(e, t) {
          const n = t
            ? On.backend.favorStandardStudyTemplate
            : On.backend.favorStudyTemplate;
          this._replaceOldFavoriteStudyTemplate(e, null, t), n(e, !1);
        }
        _addFavoriteTemplate(e, t) {
          const n = this.getSortedFavoritesStudyTemplates(
              this._state.value().studyTemplatesList
            ),
            i = n.length ? n[n.length - 1].favorite_date : 0,
            a = window.is_authenticated ? Date.now() : i + 1,
            o = t
              ? On.backend.favorStandardStudyTemplate
              : On.backend.favorStudyTemplate;
          this._replaceOldFavoriteStudyTemplate(e, a, t), o(e, !0);
        }
        _replaceOldFavoriteStudyTemplate(e, t, n) {
          const i = this._state
            .value()
            .studyTemplatesList.map((i) =>
              i.id === e && i.is_default === n ? { ...i, favorite_date: t } : i
            );
          this._setState({ studyTemplatesList: i });
        }
      }
      var Bn = n(574871),
        Ln = n(166114);
      function Un(e) {
        const {
            className: t,
            children: n,
            item: i,
            onApply: o,
            isActive: s,
            href: l,
            target: r,
          } = e,
          h = i.name?.trim() ?? " ",
          [c, d] = (0, F.useRovingTabindexElement)(null),
          v = l ? "a" : o ? "button" : "div",
          m = i.tooltip ?? h,
          p = (0, Bn.getLeadingEmojiHtml)(m);
        return a.createElement(
          v,
          {
            ref: c,
            type: o && !l ? "button" : void 0,
            className: u(
              t,
              Ln.item,
              Ln.accessible,
              "apply-common-tooltip",
              "common-tooltip-html"
            ),
            onClick: function (e) {
              if ((e.stopPropagation(), o && l)) {
                if (
                  (0, T.modifiersFromEvent)(e) !== T.Modifiers.None ||
                  1 === e.button
                )
                  return;
                e.preventDefault();
              }
              o?.(i);
            },
            onKeyDown:
              "a" === v
                ? function (e) {
                    32 === (0, T.hashFromEvent)(e) &&
                      (e.preventDefault(), c.current?.click());
                  }
                : void 0,
            "data-tooltip": p,
            "aria-label": m,
            tabIndex: d,
            href: "a" === v ? l : void 0,
            target: "a" === v ? r : void 0,
          },
          a.createElement(
            "div",
            { className: u(Ln.round, s && Ln.active) },
            n ||
              a.createElement(lt.LeadingEmojiText, {
                text: h,
                firstSegmentOnly: !0,
              })
          )
        );
      }
      var Pn = n(221233),
        zn = n(288506);
      const Kn = (0, S.registryContextType)();
      class Qn extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ ...e, isActive: this.state.isActive });
            }),
            (this._handleApplyTemplate = (e) => {
              this._handleClose(), this._model.handleApplyTemplate(e);
            }),
            (this._handleRemoveTemplate = (e, t, n) => {
              this._handleClose(), this._model.handleRemoveTemplate(e, t, n);
            }),
            (this._handleClose = () => {
              this._handleToggleDropdown(!1);
            }),
            (this._handleToggleDropdown = (e) => {
              const { isActive: t } = this.state,
                n = "boolean" == typeof e ? e : !t;
              this.setState({ isActive: n });
            }),
            (this._handleOpenTemplatesDialog = () => {
              isNewTemplatesViewEnabled &&
                showIndicatorTemplatesDialog(this._model);
            }),
            (0, S.validateRegistry)(t, {
              studyTemplates: o.any.isRequired,
              templatesMenuViewStateService: o.any,
              recentStudyTemplatesService: o.any,
            });
          const { recentStudyTemplatesService: n, studyTemplates: i } = t;
          (this._model = new Fn(i, n)),
            (this.state = { ...this._model.state().value(), isActive: !1 });
        }
        componentDidMount() {
          this._model.state().subscribe(this._updateState);
        }
        componentWillUnmount() {
          this._model.state().unsubscribe(this._updateState),
            this._model.destroy();
        }
        render() {
          const { studyTemplatesList: e } = this.state,
            {
              isShownQuicks: t,
              className: n,
              displayMode: i,
              id: o,
            } = this.props,
            s = this._model.getSortedFavoritesStudyTemplates(e),
            l = this._model.getValidRecents(e);
          return a.createElement(
            An.Provider,
            { value: this.context.templatesMenuViewStateService || null },
            a.createElement(qn, {
              id: o,
              className: n,
              mode: i,
              templates: e,
              favorites: s,
              recents: l,
              onMenuOpen: this._model.handleDropdownOpen,
              onTemplateFavorite: t ? this._model.handleFavorTemplate : void 0,
              onTemplateSelect: this._handleApplyTemplate,
              onTemplateRemove: this._handleRemoveTemplate,
              onTemplateSave: this._model.handleSaveTemplate,
              onOpenTemplatesDialog: this._handleOpenTemplatesDialog,
            })
          );
        }
      }
      function qn(e) {
        const {
            id: t,
            className: i,
            mode: o,
            templates: s,
            favorites: r,
            recents: h,
            isMenuOpen: c,
            onTemplateSelect: u,
            onTemplateSave: m,
            onTemplateFavorite: g,
            onTemplateRemove: b,
            onOpenTemplatesDialog: w,
          } = e,
          f = (0, a.useRef)(null),
          _ = (0, a.useRef)(null),
          S = v()(i, zn.wrap, {
            [zn.full]: "full" === o,
            [zn.medium]: "medium" === o,
          }),
          x = "small" !== o && g && r.length > 0;
        return a.createElement(
          p,
          { id: t, className: S },
          a.createElement(
            C.MatchMedia,
            { rule: y.DialogBreakpoints.TabletSmall },
            (t) =>
              a.createElement(
                d.ToolbarMenuButton,
                {
                  ref: f,
                  menuReference: _,
                  onOpen: e.onMenuOpen,
                  isDrawer: t,
                  drawerPosition: "Bottom",
                  arrow: !1,
                  content: a.createElement(P, {
                    tag: "div",
                    className: v()(x && zn.buttonWithFavorites),
                    displayMode: o,
                    isOpened: c,
                    icon: Pn,
                    forceInteractive: !0,
                    collapseWhen: ["full", "medium", "small"],
                  }),
                  onClick: E,
                  tooltip: l.t(null, void 0, n(176443)),
                  menuDataName: "indicator-templates-menu",
                },
                a.createElement(Zn, {
                  onTemplateSave: m,
                  onTemplateSelect: u,
                  onTemplateRemove: M,
                  onTemplateFavorite: g,
                  templates: s,
                  recents: h,
                  isTabletSmall: t,
                  onOpenTemplatesDialog: w,
                })
              )
          ),
          x &&
            a.createElement(Gn, {
              favorites: r,
              onTemplateSelect: function (e) {
                u(e), E();
              },
            })
        );
        function M(e, t) {
          if (t && (0, Q.isKeyboardClick)(t) && _.current) {
            const t = (0, le.queryMenuElements)(_.current),
              n = t.findIndex((t) => null !== t.closest(`[data-id="${e.id}"]`));
            b(e, null, () => {
              if (-1 !== n && _.current) {
                const e = t[n + 1] ?? t[n - 1];
                e ? e.focus() : (0, le.focusFirstMenuItem)(_.current),
                  f.current?.update();
              }
            });
          } else b(e);
        }
        function E() {
          0;
        }
      }
      function Gn(e) {
        return a.createElement(
          a.Fragment,
          null,
          e.favorites.map((t, n, i) =>
            a.createElement(Un, {
              key: t.name,
              item: t,
              onApply: e.onTemplateSelect,
              className: v()({
                [zn.first]: 0 === n,
                [zn.last]: n === i.length - 1,
              }),
            })
          )
        );
      }
      Qn.contextType = Kn;
      n(68212);
      var jn = n(377665),
        Xn = n(796052),
        $n = n(928282);
      const Yn = {
          undoHotKey: (0, $.hotKeySerialize)({
            keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), "Z"],
            text: "{0} + {1}",
          }),
          redoHotKey: (0, $.hotKeySerialize)({
            keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), "Y"],
            text: "{0} + {1}",
          }),
        },
        Jn = (0, st.mergeThemes)(g.DEFAULT_TOOLBAR_BUTTON_THEME, $n),
        ei = (0, S.registryContextType)();
      class ti extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._batched = null),
            (this._handleClickUndo = () => {
              (0, K.trackEvent)("GUI", "Undo");
              const { chartWidgetCollection: e } = this.context;
              e.undoHistory.undo();
            }),
            (this._handleClickRedo = () => {
              (0, K.trackEvent)("GUI", "Redo");
              const { chartWidgetCollection: e } = this.context;
              e.undoHistory.redo();
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = this._getStateFromUndoHistory());
        }
        componentDidMount() {
          const { chartWidgetCollection: e } = this.context;
          e.undoHistory
            .redoStack()
            .onChange()
            .subscribe(this, this._onChangeStack),
            e.undoHistory
              .undoStack()
              .onChange()
              .subscribe(this, this._onChangeStack);
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e } = this.context;
          e.undoHistory
            .redoStack()
            .onChange()
            .unsubscribe(this, this._onChangeStack),
            e.undoHistory
              .undoStack()
              .onChange()
              .unsubscribe(this, this._onChangeStack),
            (this._batched = null);
        }
        render() {
          const { id: e } = this.props,
            {
              isEnabledRedo: t,
              isEnabledUndo: i,
              redoStack: o,
              undoStack: s,
            } = this.state;
          return a.createElement(
            p,
            { id: e },
            a.createElement(g.ToolbarButton, {
              icon: jn,
              isDisabled: !i,
              onClick: this._handleClickUndo,
              theme: Jn,
              tooltip: i
                ? l.t(null, { replace: { hint: s } }, n(466020))
                : void 0,
              "data-tooltip-hotkey": i ? Yn.undoHotKey : void 0,
            }),
            a.createElement(g.ToolbarButton, {
              icon: Xn,
              isDisabled: !t,
              onClick: this._handleClickRedo,
              theme: Jn,
              tooltip: t
                ? l.t(null, { replace: { hint: o } }, n(911304))
                : void 0,
              "data-tooltip-hotkey": t ? Yn.redoHotKey : void 0,
            })
          );
        }
        _onChangeStack() {
          null === this._batched &&
            (this._batched = Promise.resolve().then(() => {
              if (null === this._batched) return;
              this._batched = null;
              const e = this._getStateFromUndoHistory();
              this.setState(e);
            }));
        }
        _getStateFromUndoHistory() {
          const { chartWidgetCollection: e } = this.context,
            t = e.undoHistory.undoStack(),
            n = e.undoHistory.redoStack(),
            i = n.head(),
            a = t.head();
          return {
            isEnabledRedo: !n.isEmpty(),
            isEnabledUndo: !t.isEmpty(),
            redoStack: i ? i.text().translatedText() : "",
            undoStack: a ? a.text().translatedText() : "",
          };
        }
      }
      ti.contextType = ei;
      var ni = n(744471),
        ii = n(552447);
      function ai(e) {
        const { className: t, text: n, id: i, role: o, ariaHidden: s } = e;
        return a.createElement(
          "div",
          { className: v()(ii.title, t), id: i, role: o, "aria-hidden": s },
          n
        );
      }
      var oi = n(393293);
      function si(e) {
        const {
          title: t,
          children: n,
          isSmallWidth: i,
          separator: o,
          className: s,
        } = e;
        return a.createElement(
          "div",
          { role: "group", className: u(s, oi.row, i && oi.smallRow) },
          a.createElement(
            "div",
            { className: oi.rowInner },
            a.createElement(
              "div",
              { className: u(oi.rowLabel, i && oi.smallRowLabel) },
              t
            ),
            a.createElement(
              "div",
              { className: oi.rowButtons, "data-role": "row" },
              n
            )
          ),
          o
        );
      }
      function li(e) {
        const {
            isActive: t,
            icon: n,
            isSmallWidth: i,
            className: o,
            layout: l,
            onClick: r,
            isFirstItemInRow: h,
          } = e,
          [c, d] = (0, F.useRovingTabindexElement)(null);
        return a.createElement(
          "button",
          {
            role: "menuitemradio",
            className: u(
              o,
              oi.layoutButtonWrap,
              i && oi.smallWidth,
              oi.accessible
            ),
            type: "button",
            "aria-checked": t,
            "aria-label": l,
            "data-role": h ? "menuitem" : void 0,
            ref: c,
            tabIndex: d,
            onClick: function () {
              r(l);
            },
          },
          a.createElement(
            "div",
            {
              className: u(
                oi.layoutButton,
                t && oi.isActive,
                i && oi.smallWidthLayoutButton
              ),
            },
            a.createElement(s.Icon, { icon: n })
          )
        );
      }
      var ri = n(841785),
        hi = n(652100),
        ci = n(232217),
        di = n(989959),
        ui = n(328649),
        vi = n(112466),
        mi = n(938926),
        pi = n(451754),
        gi = n(259806),
        bi = n(459702),
        wi = n(272279),
        fi = n(135106),
        Ci = n(758180),
        yi = n(710757),
        _i = n(910997),
        Si = n(687037),
        xi = n(330273),
        Mi = n(49011),
        Ei = n(570309),
        Ti = n(73257),
        ki = n(502992),
        Hi = n(134273),
        Ai = n(652632),
        Ii = n(663962),
        Ri = n(521176),
        Ni = n(236421),
        Zi = n(978222),
        Vi = n(280088),
        Wi = n(44836),
        Di = n(114950),
        Oi = n(605018),
        Fi = n(2043),
        Bi = n(994598),
        Li = n(686963),
        Ui = n(535956),
        Pi = n(534557);
      const zi = {
        s: ri,
        "1-2": hi,
        "1-3": ci,
        "1-4": di,
        "2-4": ui,
        "2-1": vi,
        "2-2": mi,
        "2-2-l": pi,
        "2-3": gi,
        "3-2": bi,
        "2h": wi,
        "2v": fi,
        "3h": Ci,
        "3r": yi,
        "3s": _i,
        "3v": Si,
        4: xi,
        "4h": Mi,
        "4s": Ii,
        "4s-l": Ri,
        "4v": Ni,
        "5s": Zi,
        "5h": Ei,
        "5v": Ti,
        "6h": ki,
        "6v": Hi,
        "7h": Ai,
        "8h": Ai,
        "8v": Hi,
        6: Vi,
        "6c": Wi,
        8: Di,
        "8c": Oi,
        "9s": Fi,
        "9h": Ai,
        "9v": Hi,
        "10h": Ai,
        "10v": Hi,
        "10c5": Bi,
        "12c6": Li,
        "12c4": Ui,
        "14c7": Pi,
        "16c8": Pi,
        "16c4": n(359473),
      };
      var Ki = n(393998);
      const Qi = (0, st.mergeThemes)(ct, { label: Ki.switcherLabel });
      class qi extends a.PureComponent {
        constructor(e) {
          super(e),
            (this._onChange = () => {
              this.setState({ isChecked: this.props.watchedValue.value() });
            }),
            (this._handleClick = () => {
              const { onClick: e, watchedValue: t } = this.props;
              e(t);
            }),
            (this.state = { isChecked: this.props.watchedValue.value() });
        }
        componentDidMount() {
          this.props.watchedValue.subscribe(this._onChange);
        }
        componentWillUnmount() {
          this.props.watchedValue.unsubscribe(this._onChange);
        }
        render() {
          const { role: e, label: t, value: n, className: i } = this.props,
            { isChecked: o } = this.state;
          return a.createElement(rt.MenuItemSwitcher, {
            role: e,
            theme: Qi,
            label: t,
            checked: o,
            value: n,
            onChange: this._handleClick,
            className: i,
          });
        }
      }
      var Gi = n(578601),
        ji = n(527941),
        Xi = n(29582);
      let $i = [
        { layouts: ["s"], title: "1" },
        { layouts: ["2h", "2v"], title: "2" },
        { layouts: ["3v", "3h", "3s", "2-1", "1-2", "3r"], title: "3" },
        {
          layouts: ["4", "4h", "4v", "4s", "4s-l", "1-3", "2-2", "2-2-l"],
          title: "4",
        },
        { layouts: ["1-4", "5s", "2-3", "3-2", "5h", "5v"], title: "5" },
        { layouts: ["6", "6c", "2-4", "6h", "6v"], title: "6" },
        { layouts: ["7h"], title: "7" },
        { layouts: ["8", "8c", "8h", "8v"], title: "8" },
      ];
      i.enabled("additional_multichart_layouts") &&
        ($i = [
          ...$i,
          { layouts: ["9s", "9h", "9v"], title: "9" },
          { layouts: ["10c5", "10h", "10v"], title: "10" },
          { layouts: ["12c6", "12c4"], title: "12" },
          { layouts: ["14c7"], title: "14" },
          { layouts: ["16c8", "16c4"], title: "16" },
        ]);
      const Yi = {
        layoutType: l.t(null, void 0, n(567884)),
        syncGroupTitle: l.t(null, void 0, n(846607)),
        syncCrosshairLabel: l.t(null, void 0, n(374622)),
        syncCrosshairHint: l.t(null, void 0, n(900061)),
        syncIntervalLabel: l.t(null, void 0, n(317854)),
        syncIntervalHint: l.t(null, void 0, n(975715)),
        syncDateRangeLabel: l.t(null, void 0, n(151125)),
        syncDateRangeHint: l.t(null, void 0, n(467900)),
        syncSymbolLabel: l.t(null, void 0, n(595481)),
        syncSymbolHint: l.t(null, void 0, n(548211)),
        syncTrackLabel: l.t(null, void 0, n(312806)),
        syncTrackHint: l.t(null, void 0, n(907940)),
      };
      function Ji(e) {
        const { chartWidgetCollection: t, isSmallWidth: n } = e,
          [i, o] = (0, a.useState)("s"),
          [s, l] = (0, Gi.useRowsNavigation)(!0);
        return (
          (0, a.useEffect)(() => {
            function e(e) {
              o(e || t.layout.value());
            }
            return (
              t.layout.subscribe(e, { callWithLast: !0 }),
              () => t.layout.unsubscribe(e)
            );
          }, [t]),
          a.createElement(
            "div",
            { className: Xi.dropdown },
            a.createElement(
              "div",
              null,
              a.createElement(
                "div",
                {
                  ref: s,
                  role: "menu",
                  onKeyDown: l,
                  "data-name": "layouts-list",
                },
                n && a.createElement(ai, { text: Yi.layoutType }),
                $i.map((e, t) =>
                  a.createElement(
                    si,
                    {
                      key: e.title,
                      isSmallWidth: n,
                      title: e.title,
                      separator:
                        t !== $i.length - 1 &&
                        a.createElement(f.PopupMenuSeparator, null),
                    },
                    e.layouts.map((e, t) =>
                      a.createElement(li, {
                        key: e,
                        layout: e,
                        icon: zi[e],
                        onClick: h,
                        isActive: e === i,
                        isSmallWidth: n,
                        isFirstItemInRow: 0 === t,
                      })
                    )
                  )
                )
              )
            ),
            a.createElement(
              "div",
              null,
              n && a.createElement(f.PopupMenuSeparator, { size: "normal" })
            ),
            a.createElement(
              "div",
              null,
              a.createElement(ai, {
                text: Yi.syncGroupTitle,
                className: u(Xi.syncCharts, n && Xi.mobile),
              }),
              (function () {
                const e = u(Xi.switcher, n && Xi.mobile);
                return a.createElement(
                  "div",
                  {
                    role: "grid",
                    "aria-multiselectable": !0,
                    className: Xi.syncListWrapper,
                  },
                  a.createElement(qi, {
                    role: "row",
                    label: a.createElement(ea, {
                      title: Yi.syncSymbolLabel,
                      hint: Yi.syncSymbolHint,
                      isSmallWidth: n,
                    }),
                    onClick: r,
                    value: "syncSymbolLabel",
                    watchedValue: t.lock.symbol,
                    className: e,
                  }),
                  a.createElement(qi, {
                    role: "row",
                    label: a.createElement(ea, {
                      title: Yi.syncIntervalLabel,
                      hint: Yi.syncIntervalHint,
                      isSmallWidth: n,
                    }),
                    onClick: r,
                    value: "syncIntervalLabel",
                    watchedValue: t.lock.interval,
                    className: e,
                  }),
                  a.createElement(qi, {
                    role: "row",
                    label: a.createElement(ea, {
                      title: Yi.syncCrosshairLabel,
                      hint: Yi.syncCrosshairHint,
                      isSmallWidth: n,
                    }),
                    watchedValue: t.lock.crosshair,
                    value: "syncCrosshairLabel",
                    onClick: r,
                    className: e,
                  }),
                  a.createElement(qi, {
                    role: "row",
                    label: a.createElement(ea, {
                      title: Yi.syncTrackLabel,
                      hint: Yi.syncTrackHint,
                      isSmallWidth: n,
                    }),
                    watchedValue: t.lock.trackTime,
                    value: "syncTrackLabel",
                    onClick: r,
                    className: e,
                  }),
                  a.createElement(qi, {
                    role: "row",
                    label: a.createElement(ea, {
                      title: Yi.syncDateRangeLabel,
                      hint: Yi.syncDateRangeHint,
                      isSmallWidth: n,
                    }),
                    onClick: r,
                    value: "syncDateRangeLabel",
                    watchedValue: t.lock.dateRange,
                    className: e,
                  })
                );
              })()
            )
          )
        );
        function r(e) {
          const t = !e.value();
          e.setValue(t);
        }
        function h(e) {
          (0, Ve.globalCloseMenu)(),
            t.layout.value() === e
              ? t.revertToInline()
              : t.setChartLayoutWithUndo(e);
        }
      }
      function ea(e) {
        const { title: t, hint: n, isSmallWidth: i } = e,
          [o, l] = (0, F.useRovingTabindexElement)(null);
        return a.createElement(
          "div",
          { className: Xi.switchLabelWrap },
          a.createElement(
            "span",
            { role: "rowheader", className: Xi.switchLabel },
            t
          ),
          !i &&
            a.createElement(
              "span",
              {
                role: "cell",
                className: u(
                  Xi.iconWrap,
                  "apply-common-tooltip",
                  Xi.accessibleLabel
                ),
                title: n,
                "aria-label": n,
                onFocus: () =>
                  (0, ni.showOnElement)((0, oe.ensureNotNull)(o.current)),
                onBlur: () => (0, ni.hide)(),
                tabIndex: l,
                ref: o,
              },
              a.createElement(s.Icon, { className: Xi.infoIcon, icon: ji })
            )
        );
      }
      const ta = (0, S.registryContextType)();
      class na extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._onUpdateLayout = (e) => {
              const { chartWidgetCollection: t } = this.context;
              this.setState({ currentId: e || t.layout.value() });
            }),
            (this._handleOpenLayout = () => {
              (0, K.trackEvent)("GUI", "Chart Header Toolbar", "select layout");
            }),
            (0, S.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = { currentId: "s" });
        }
        componentDidMount() {
          const { chartWidgetCollection: e } = this.context;
          e.layout.subscribe(this._onUpdateLayout, { callWithLast: !0 });
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e } = this.context;
          e.layout.unsubscribe(this._onUpdateLayout);
        }
        render() {
          const { chartWidgetCollection: e } = this.context,
            { className: t, id: i } = this.props,
            { currentId: o } = this.state;
          return a.createElement(
            C.MatchMedia,
            { rule: y.DialogBreakpoints.TabletSmall },
            (r) =>
              a.createElement(
                d.ToolbarMenuButton,
                {
                  id: i,
                  arrow: !1,
                  content: a.createElement(s.Icon, {
                    className: Xi.icon,
                    icon: zi[o],
                  }),
                  className: u(t, Xi.button),
                  isDrawer: r,
                  drawerPosition: "Bottom",
                  onOpen: this._handleOpenLayout,
                  tooltip: l.t(null, void 0, n(269010)),
                },
                a.createElement(Ji, {
                  chartWidgetCollection: e,
                  isSmallWidth: r,
                })
              )
          );
        }
      }
      na.contextType = ta;
      const ia = (e) => {
        if (
          ((e) => "http://www.w3.org/1999/xhtml" === e?.namespaceURI)(e) &&
          "true" !== e.dataset.internalAllowKeyboardNavigation
        ) {
          (e.tabIndex = -1), (e.ariaDisabled = "true");
          for (let t = 0; t < e.children.length; t++) ia(e.children.item(t));
        }
      };
      class aa extends a.PureComponent {
        constructor() {
          super(...arguments),
            (this._wrapperElement = null),
            (this._resizeObserver = null),
            (this._mutationObserver = null),
            (this._update = () => {
              this.forceUpdate();
            }),
            (this._setRef = (e) => {
              this._wrapperElement = e;
            }),
            (this._handleMeasure = ([e]) => {
              this.props.width.setValue(e.contentRect.width);
            }),
            (this._handleMutation = ([e]) => {
              "childList" === e.type && ia(this.props.element);
            });
        }
        componentDidMount() {
          const { element: e, isFake: t, width: n } = this.props;
          !t && this._wrapperElement
            ? ((this._resizeObserver = new ResizeObserver(this._handleMeasure)),
              (this._mutationObserver = new MutationObserver(
                this._handleMutation
              )),
              this._wrapperElement.appendChild(e),
              this._resizeObserver.observe(this._wrapperElement),
              this._mutationObserver.observe(e, { subtree: !0, childList: !0 }))
            : n.subscribe(this._update);
        }
        componentWillUnmount() {
          const { width: e, isFake: t } = this.props;
          t && e.unsubscribe(this._update),
            this._resizeObserver &&
              this._wrapperElement &&
              this._resizeObserver.unobserve(this._wrapperElement),
            this._mutationObserver &&
              (this._mutationObserver.disconnect(),
              (this._mutationObserver = null));
        }
        render() {
          const { isFake: e = !1, width: t } = this.props;
          return a.createElement(p, {
            ref: this._setRef,
            style: e ? { width: t.value() } : void 0,
            "data-is-custom-header-element": !0,
          });
        }
      }
      function oa(e) {
        const { displayMode: t, params: n } = e;
        return a.createElement(
          d.ToolbarMenuButton,
          {
            content: a.createElement(P, {
              collapseWhen: void 0 !== n.icon ? void 0 : [],
              displayMode: t,
              icon: n.icon,
              text: n.title,
              "data-name": "dropdown",
              "data-is-custom-header-element": !0,
            }),
            drawerPosition: "Bottom",
            drawerBreakpoint: y.DialogBreakpoints.TabletSmall,
            arrow: !1,
            tooltip: n.tooltip,
          },
          n.items.map((e, t) =>
            a.createElement(se.PopupMenuItem, {
              key: t,
              label: e.title,
              icon: e.icon,
              onClick: () => e.onSelect(),
              "data-name": "dropdown-item",
            })
          )
        );
      }
      var sa = n(900935);
      function la(e) {
        const { className: t, title: n, ...i } = e;
        return a.createElement(z, {
          ...i,
          className: u(t, sa.customTradingViewStyleButton, sa.withoutIcon),
          collapseWhen: [],
          "data-name": "custom-tradingview-styled-button",
          tooltip: n,
        });
      }
      var ra = n(160448);
      const ha = (0, $.hotKeySerialize)({
          keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), "K"],
          text: "{0} + {1}",
        }),
        ca = (0, S.registryContextType)();
      class da extends a.PureComponent {
        constructor(e, t) {
          super(e),
            (this._dialog = null),
            (this._updateState = (e) => {
              this.setState({ isOpened: e });
            }),
            (this._handleClick = (e) => {
              const { openGlobalSearch: t } = this.context;
              t({ shouldReturnFocus: (0, Q.isKeyboardClick)(e) }).then((e) => {
                this._dialog?.visible().unsubscribe(this._updateState),
                  (this._dialog = e),
                  e.visible().subscribe(this._updateState);
              });
            }),
            (0, S.validateRegistry)(t, { openGlobalSearch: o.any.isRequired }),
            (this.state = { isOpened: !1 });
        }
        componentWillUnmount() {
          this._dialog?.visible().unsubscribe(this._updateState);
        }
        render() {
          return a.createElement(X.ToolbarIconButton, {
            ...this.props,
            icon: ra,
            isOpened: this.state.isOpened,
            onClick: this._handleClick,
            "data-tooltip-hotkey": ha,
            tooltip: l.t(null, void 0, n(918243)),
          });
        }
      }
      da.contextType = ca;
      var ua = n(420490),
        va = n(686759);
      function ma() {
        let e;
        return (
          (e = i.enabled("header_layouttoggle") ? na : void 0),
          {
            Bars: i.enabled("header_chart_type") ? O : void 0,
            Compare: i.enabled("header_compare") ? j : void 0,
            Custom: aa,
            CustomTradingViewStyledButton: la,
            Fullscreen: (0, va.shouldShowFullscreen)() ? ae : void 0,
            Indicators: i.enabled("header_indicators") ? Ce : void 0,
            Intervals: i.enabled("header_resolutions") ? qe : void 0,
            OpenPopup: Je,
            Properties:
              i.enabled("header_settings") &&
              i.enabled("show_chart_property_page")
                ? nt
                : void 0,
            SaveLoad: i.enabled("header_saveload") ? At : void 0,
            Screenshot: i.enabled("header_screenshot") ? en : void 0,
            SymbolSearch: i.enabled("header_symbol_search") ? vn : void 0,
            Templates: i.enabled("study_templates") ? Qn : void 0,
            Dropdown: oa,
            UndoRedo: i.enabled("header_undo_redo") ? ti : void 0,
            Layout: e,
            QuickSearch: (0, ua.shouldShowQuickSearchOnLib)() ? da : void 0,
          }
        );
      }
    },
    686759: (e, t, n) => {
      "use strict";
      n.d(t, { shouldShowFullscreen: () => a });
      var i = n(440891);
      function a() {
        return i.enabled("header_fullscreen_button");
      }
    },
    244693: (e, t, n) => {
      "use strict";
      n.d(t, {
        RegistryProvider: () => r,
        registryContextType: () => h,
        validateRegistry: () => l,
      });
      var i = n(50959),
        a = n(719036),
        o = n.n(a);
      const s = i.createContext({});
      function l(e, t) {
        o().checkPropTypes(t, e, "context", "RegistryContext");
      }
      function r(e) {
        const { validation: t, value: n } = e;
        return l(n, t), i.createElement(s.Provider, { value: n }, e.children);
      }
      function h() {
        return s;
      }
    },
    50296: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { SERIES_ICONS: () => y });
      var i = n(149387),
        a = n(893316),
        o = n(173149),
        s = n(943031),
        l = n(283617),
        r = n(704475),
        h = n(94670),
        c = n(832162),
        d = n(539956),
        u = n(14083),
        v = n(45504),
        m = n(352867),
        p = n(241473),
        g = n(831246),
        b = n(715726),
        w = n(724464),
        f = n(671705),
        C = n(309450);
      const y = {
        3: h,
        16: c,
        0: d,
        1: u,
        8: v,
        9: m,
        2: p,
        14: g,
        15: b,
        10: w,
        12: f,
        13: C,
      };
      (y[4] = i), (y[6] = a), (y[7] = o), (y[5] = s), (y[19] = l), (y[21] = r);
    },
    851258: (e, t, n) => {
      "use strict";
      function i(e) {
        return "https://www.tradingview.com/x/" + e + "/";
      }
      n.d(t, { convertImageNameToUrl: () => i });
    },
    670001: (e, t, n) => {
      "use strict";
      function i(e, t) {
        const n = document.createElement("a");
        (n.style.display = "none"), (n.href = t), (n.download = e), n.click();
      }
      n.d(t, { downloadFile: () => i });
    },
    529142: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM8 2a6 6 0 1 0 3.65 10.76l3.58 3.58 1.06-1.06-3.57-3.57A6 6 0 0 0 8 2Z"/></svg>';
    },
    527941: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm1-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.5 9.5H7V8h3v6H8.5V9.5Z"/></svg>';
    },
    597268: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"/></svg>';
    },
    236992: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M17 6v2.5a2.5 2.5 0 0 0 2.5 2.5H22v-1h-2.5A1.5 1.5 0 0 1 18 8.5V6h-1zm2.5 11a2.5 2.5 0 0 0-2.5 2.5V22h1v-2.5c0-.83.67-1.5 1.5-1.5H22v-1h-2.5zm-11 1H6v-1h2.5a2.5 2.5 0 0 1 2.5 2.5V22h-1v-2.5c0-.83-.67-1.5-1.5-1.5zM11 8.5V6h-1v2.5c0 .83-.67 1.5-1.5 1.5H6v1h2.5A2.5 2.5 0 0 0 11 8.5z"/></svg>';
    },
    13090: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M5 7.5C5 6.67 5.67 6 6.5 6h4.2l2 2h8.8c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 5 19.5v-12ZM6.5 7a.5.5 0 0 0-.5.5V11h16V9.5a.5.5 0 0 0-.5-.5h-9.2l-2-2H6.5ZM22 12H6v7.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V12Z"/></svg>';
    },
    6198: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.9 14.1V22h1.2v-7.9H23v-1.2h-7.9V5h-1.2v7.9H6v1.2h7.9Z"/></svg>';
    },
    899280: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>';
    },
    160448: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 4v4h2a1 1 0 0 1 .83 1.55l-4 6A1 1 0 0 1 14 15v-4h-2a1 1 0 0 1-.83-1.55l4-6A1 1 0 0 1 17 4m-2 11 4-6h-3V4l-4 6h3z"/><path d="M5 13.5a7.5 7.5 0 0 1 6-7.35v1.02A6.5 6.5 0 1 0 18.98 13h1l.02.5a7.47 7.47 0 0 1-1.85 4.94L23 23.29l-.71.7-4.85-4.84A7.5 7.5 0 0 1 5 13.5"/></svg>';
    },
    221233: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM6 8c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm11-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8zm-4 8H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8zm9 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z"/></svg>';
    },
    100578: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    94670: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="m25.35 5.35-9.5 9.5-.35.36-.35-.36-4.65-4.64-8.15 8.14-.7-.7 8.5-8.5.35-.36.35.36 4.65 4.64 9.15-9.14.7.7ZM2 21h1v1H2v-1Zm2-1H3v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1Zm1 0v1H4v-1h1Zm1 0H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0H7v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0H9v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1h1v1Zm1 0v1h-1v-1h1Zm0-1v-1h-1v1h1Zm0 0v1h1v1h1v-1h-1v-1h-1Zm6 2v-1h1v1h-1Zm2 0v1h-1v-1h1Zm0-1h-1v-1h1v1Zm1 0h-1v1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h1v1Zm1 0h-1v1h1v-1Zm0-1h1v1h-1v-1Zm0-1h1v-1h-1v1Zm0 0v1h-1v-1h1Zm-4 3v1h-1v-1h1Z"/></svg>';
    },
    539956: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19 6h-1v7h-3v1h3v8h1v-3h3v-1h-3V6ZM11 7h-1v13H7v1h3v2h1V10h3V9h-3V7Z"/></svg>';
    },
    724464: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m10.49 7.55-.42.7-2.1 3.5.86.5 1.68-2.8 1.8 2.82.84-.54-2.23-3.5-.43-.68Zm12.32 4.72-.84-.54 2.61-4 .84.54-2.61 4Zm-5.3 6.3 1.2-1.84.84.54-1.63 2.5-.43.65-.41-.65-1.6-2.5.85-.54 1.17 1.85ZM4.96 16.75l.86.52-2.4 4-.86-.52 2.4-4ZM3 14v1h1v-1H3Zm2 0h1v1H5v-1Zm2 0v1h1v-1H7Zm2 0h1v1H9v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Z"/></svg>';
    },
    14083: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>';
    },
    53707: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>';
    },
    309450: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12 7v14h5V7h-5Zm4 1h-3v12h3V8ZM19 15v6h5v-6h-5Zm4 1h-3v4h3v-4ZM5 12h5v9H5v-9Zm1 1h3v7H6v-7Z"/></svg>';
    },
    301393: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>';
    },
    45504: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>';
    },
    671705: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>';
    },
    832162: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="M22 3h1v1h-1V3Zm0 2V4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1V9h-1V8h-1V7h-1V6h-1V5h-1v1H9v1H8v1H7v1H6v1H5v1H4v1h1v1H4v1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h-1Zm-1 1V5h1v1h-1Zm-1 1V6h1v1h-1Zm-1 1V7h1v1h-1Zm-1 1V8h1v1h-1Zm-1 1V9h1v1h-1Zm-1 1v-1h1v1h-1Zm-1 0v-1h-1V9h-1V8h-1V7h-1V6h-1v1H9v1H8v1H7v1H6v1H5v1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h1v1h1Zm0 0h1v1h-1v-1Zm.84 6.37 7.5-7-.68-.74-7.15 6.67-4.66-4.65-.33-.34-.36.32-5.5 5 .68.74 5.14-4.68 4.67 4.66.34.35.35-.33ZM6 23H5v1h1v-1Zm0-1H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0v1H7v-1h1Zm0-1H7v-1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0v1H9v-1h1Zm0-1H9v-1h1v1Zm1 0h-1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1h1v1Zm0 0h1v1h-1v-1Zm2 2v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1Zm0 0v-1h-1v1h1Z"/></svg>';
    },
    704475: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19 6h-1v7v9h1v-3h3v-1h-3V6ZM11 7h-1v16h1V10h3V9h-3V7Z"/></svg>';
    },
    352867: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>';
    },
    139681: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>';
    },
    943031: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11 5h3v12h5V8h3v13h1V7h-5v9h-3V4h-5v18H7v-5H6v6h5z"/></svg>';
    },
    652100: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    232217: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H6V9H1Zm6 7h5V9H7v7Zm6 0h3.5c.83 0 1.5-.67 1.5-1.5V9h-5v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    989959: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H4V9H1Zm4 7h4V9H5v7Zm5 0h4V9h-4v7Zm5 0h1.5c.83 0 1.5-.67 1.5-1.5V9h-3v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    994598: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M2 3.5C2 2.67 2.67 2 3.5 2H4v7H2V3.5ZM2 10v5.5c0 .83.67 1.5 1.5 1.5H4v-7H2Zm3 7h3v-7H5v7Zm4 0h3v-7H9v7Zm4 0h3v-7h-3v7Zm4 0h.5c.83 0 1.5-.67 1.5-1.5V10h-2v7Zm2-8V3.5c0-.83-.67-1.5-1.5-1.5H17v7h2Zm-3-7h-3v7h3V2Zm-4 0H9v7h3V2ZM8 2H5v7h3V2ZM3.5 1A2.5 2.5 0 0 0 1 3.5v12A2.5 2.5 0 0 0 3.5 18h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 17.5 1h-14Z"/></svg>';
    },
    535956: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M2 3.5C2 2.67 2.67 2 3.5 2H7v3H2v1h5v3H2v1h5v3H2v1h5v3H3.5A1.5 1.5 0 0 1 2 15.5v-12ZM8 14v3h5v-3H8Zm6 0v3h3.5c.83 0 1.5-.67 1.5-1.5V14h-5Zm5-1h-5v-3h5v3Zm-6 0H8v-3h5v3ZM8 9h5V6H8v3Zm6 0h5V6h-5v3Zm-1-4H8V2h5v3Zm1 13H3.5A2.5 2.5 0 0 1 1 15.5v-12A2.5 2.5 0 0 1 3.5 1h14A2.5 2.5 0 0 1 20 3.5v12a2.5 2.5 0 0 1-2.5 2.5H14Zm0-13V2h3.5c.83 0 1.5.67 1.5 1.5V5h-5Z"/></svg>';
    },
    686963: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M2 3.5C2 2.67 2.67 2 3.5 2H4v7H2V3.5ZM2 10v5.5c0 .83.67 1.5 1.5 1.5H4v-7H2Zm3 7h2v-7H5v7Zm3 0h2v-7H8v7Zm3 0h2v-7h-2v7Zm3 0h2v-7h-2v7Zm3 0h.5c.83 0 1.5-.67 1.5-1.5V10h-2v7Zm2-8V3.5c0-.83-.67-1.5-1.5-1.5H17v7h2Zm-3-7h-2v7h2V2Zm-3 0h-2v7h2V2Zm-3 0H8v7h2V2ZM7 2H5v7h2V2ZM3.5 1A2.5 2.5 0 0 0 1 3.5v12A2.5 2.5 0 0 0 3.5 18h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 17.5 1h-14Z"/></svg>';
    },
    359473: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2C2.67 2 2 2.67 2 3.5v12c0 .83.67 1.5 1.5 1.5H5v-3H2v-1h3v-3H2V9h3V6H2V5h3V2H3.5ZM6 14v3h4v-3H6Zm4-1H6v-3h4v3Zm1 1v3h4v-3h-4Zm4-1h-4v-3h4v3Zm1 1v3h1.5c.83 0 1.5-.67 1.5-1.5V14h-3Zm3-1h-3v-3h3v3Zm-8-4h4V6h-4v3Zm5-3v3h3V6h-3ZM6 9h4V6H6v3Zm0-4h4V2H6v3Zm10 13H3.5A2.5 2.5 0 0 1 1 15.5v-12A2.5 2.5 0 0 1 3.5 1h14A2.5 2.5 0 0 1 20 3.5v12a2.5 2.5 0 0 1-2.5 2.5H16Zm0-13V2h1.5c.83 0 1.5.67 1.5 1.5V5h-3Zm-1-3h-4v3h4V2Z"/></svg>';
    },
    112466: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V9H1Zm17-1V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    451754: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M3.5 2C2.67 2 2 2.67 2 3.5v12c0 .83.67 1.5 1.5 1.5H6V2H3.5ZM11 17H7V2h4v15Zm1 0h5.5c.83 0 1.5-.67 1.5-1.5V10h-7v7Zm7-8V3.5c0-.83-.67-1.5-1.5-1.5H12v7h7ZM1 3.5A2.5 2.5 0 0 1 3.5 1h14A2.5 2.5 0 0 1 20 3.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 1 15.5v-12Z"/></svg>';
    },
    938926: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v3h17V9H1Zm17-1V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8Zm0 5H1v1.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V13ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    259806: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H6V9H1Zm6 7h5V9H7v7Zm6 0h3.5c.83 0 1.5-.67 1.5-1.5V9h-5v7Zm5-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    328649: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 3.5A2.5 2.5 0 0 1 3.5 1h14A2.5 2.5 0 0 1 20 3.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 1 15.5v-12ZM11 2h6.5c.83 0 1.5.67 1.5 1.5V9h-8V2Zm-1 0H3.5C2.67 2 2 2.67 2 3.5V9h8V2Zm-8 8v5.5c0 .83.67 1.5 1.5 1.5H5v-7H2Zm4 7h4v-7H6v7Zm5 0h4v-7h-4v7Zm5 0h1.5c.83 0 1.5-.67 1.5-1.5V10h-3v7Z"/></svg>';
    },
    272279: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H10v15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    135106: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V9H1Zm1.5-9A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    459702: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M2 3.5C2 2.67 2.67 2 3.5 2H7v7H2V3.5ZM2 10v5.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V10h-8v7h-1v-7H2Zm17-1V3.5c0-.83-.67-1.5-1.5-1.5H14v7h5Zm-6-7H8v7h5V2ZM3.5 1A2.5 2.5 0 0 0 1 3.5v12A2.5 2.5 0 0 0 3.5 18h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 17.5 1h-14Z"/></svg>';
    },
    758180: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H6v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM7 16h5V1H7v15Zm6-15v15h3.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H13ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    710757: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H10v15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    910997: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    687037: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V5H1V2.5ZM1 6v5h17V6H1Zm17 6H1v2.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V12ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    330273: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    49011: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H4v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM5 16h4V1H5v15Zm5-15v15h4V1h-4Zm5 0v15h1.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    521176: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M2 3.5C2 2.67 2.67 2 3.5 2H11v4H2V3.5ZM2 7v5h9V7H2Zm0 6v2.5c0 .83.67 1.5 1.5 1.5H11v-4H2Zm10 4h5.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H12v15ZM3.5 1A2.5 2.5 0 0 0 1 3.5v12A2.5 2.5 0 0 0 3.5 18h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 17.5 1h-14Z"/></svg>';
    },
    663962: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V12h-8v4Zm8-5V6h-8v5h8Zm0-6V2.5c0-.83-.67-1.5-1.5-1.5H10v4h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    236421: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V4H1V2.5ZM1 5v3h17V5H1Zm17 4H1v3h17V9Zm0 4H1v1.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V13ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    570309: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M19 3.5c0-.83-.67-1.5-1.5-1.5H17v15h.5c.83 0 1.5-.67 1.5-1.5v-12Zm-17 12c0 .83.67 1.5 1.5 1.5H4V2h-.5C2.67 2 2 2.67 2 3.5v12ZM1.01 3.24A2.5 2.5 0 0 1 3.5 1h14A2.5 2.5 0 0 1 20 3.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 1 15.5v-12l.01-.26ZM5 17h3V2H5v15Zm11 0h-3V2h3v15ZM12 2v15H9V2h3Z"/></svg>';
    },
    978222: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V13h-8v3Zm8-4V9h-8v3h8Zm0-4V5h-8v3h8Zm0-4V2.5c0-.83-.67-1.5-1.5-1.5H10v3h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    73257: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 3.5A2.5 2.5 0 0 1 3.5 1h14A2.5 2.5 0 0 1 20 3.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 1 15.5v-12ZM3.5 2h14c.83 0 1.5.67 1.5 1.5V4H2v-.5C2 2.67 2.67 2 3.5 2ZM2 5v2h17V5H2Zm17 3H2v3h17V8Zm0 4H2v2h17v-2Zm0 3H2v.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V15Z"/></svg>';
    },
    280088: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H6v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H6V9H1Zm6 7h5V9H7v7Zm6 0h3.5c.83 0 1.5-.67 1.5-1.5V9h-5v7Zm5-8V2.5c0-.83-.67-1.5-1.5-1.5H13v7h5Zm-6-7H7v7h5V1ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    44836: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v4H1V2.5ZM1 6v5h8V6H1Zm0 6v2.5c0 .83.67 1.5 1.5 1.5H9v-4H1Zm9 4h6.5c.83 0 1.5-.67 1.5-1.5V12h-8v4Zm8-5V6h-8v5h8Zm0-6V2.5c0-.83-.67-1.5-1.5-1.5H10v4h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    502992: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M2 3.5C2 2.67 2.67 2 3.5 2H4v15h-.5A1.5 1.5 0 0 1 2 15.5v-12ZM5 17h2V2H5v15ZM8 2v15h2V2H8Zm3 0v15h2V2h-2Zm3 0v15h2V2h-2Zm3 0v15h.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H17ZM3.5 1A2.5 2.5 0 0 0 1 3.5v12A2.5 2.5 0 0 0 3.5 18h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 17.5 1h-14Z"/></svg>';
    },
    114950: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H4v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H4V9H1Zm4 7h4V9H5v7Zm5 0h4V9h-4v7Zm5 0h1.5c.83 0 1.5-.67 1.5-1.5V9h-3v7Zm3-8V2.5c0-.83-.67-1.5-1.5-1.5H15v7h3Zm-4-7h-4v7h4V1ZM9 1H5v7h4V1ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    605018: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v3H1V2.5ZM1 5v3h8V5H1Zm0 4v3h8V9H1Zm0 4v1.5c0 .83.67 1.5 1.5 1.5H9v-3H1Zm9 3h6.5c.83 0 1.5-.67 1.5-1.5V13h-8v3Zm8-4V9h-8v3h8Zm0-4V5h-8v3h8Zm0-4V2.5c0-.83-.67-1.5-1.5-1.5H10v3h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>';
    },
    2043: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19"><path fill="currentColor" fill-rule="evenodd" d="M3.5 1A2.5 2.5 0 0 0 1 3.5v12A2.5 2.5 0 0 0 3.5 18h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 17.5 1h-14ZM7 2H3.5C2.67 2 2 2.67 2 3.5V6h5V2Zm1 0v4h5V2H8Zm0 5h5v5H8V7Zm-1 5V7H2v5h5Zm-5 1h5v4H3.5A1.5 1.5 0 0 1 2 15.5V13Zm6 0h5v4H8v-4Zm6 0v4h3.5c.83 0 1.5-.67 1.5-1.5V13h-5Zm5-1V7h-5v5h5ZM14 2v4h5V3.5c0-.83-.67-1.5-1.5-1.5H14Z"/></svg>';
    },
    534557: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19" fill="none"><rect width="18" height="16" stroke="currentColor" rx="2" x="1.5" y="1.5"/><path fill="currentColor" d="M19 10H2V9h17v1Z"/><path fill="currentColor" d="M4 17V2h1v15H4Z"/><path fill="currentColor" d="M7 17V2h1v15H7Z" opacity=".85"/><path fill="currentColor" d="M10 17V2h1v15h-1Z" opacity=".65"/><path fill="currentColor" d="M13 17V2h1v15h-1Z" opacity=".25"/><path fill="currentColor" d="M16 18V2h1v16h-1Z" opacity=".05"/></svg>';
    },
    652632: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19" fill="none"><rect width="18" height="16" stroke="currentColor" rx="2" x="1.5" y="1.5"/><path fill="currentColor" d="M4 17V2h1v15H4Z"/><path fill="currentColor" d="M7 17V2h1v15H7Z" opacity=".85"/><path fill="currentColor" d="M10 17V2h1v15h-1Z" opacity=".65"/><path fill="currentColor" d="M13 17V2h1v15h-1Z" opacity=".25"/><path fill="currentColor" d="M16 17V2h1v15h-1Z" opacity=".05"/></svg>';
    },
    134273: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" width="21" height="19" fill="none"><rect width="18" height="16" stroke="currentColor" rx="2" x="1.5" y="1.5"/><path fill="currentColor" d="M1.5 4h18v1h-18V4Z"/><path fill="currentColor" d="M2 7h18v1H2V7Z" opacity=".65"/><path fill="currentColor" d="M1.5 10h18v1h-18v-1Z" opacity=".25"/><path fill="currentColor" d="M1.5 13h18v1h-18v-1Z" opacity=".05"/></svg>';
    },
    841785: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 19" width="21" height="19"><path fill="currentColor" d="M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-14ZM0 2.5A2.5 2.5 0 0 1 2.5 0h14A2.5 2.5 0 0 1 19 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 0 14.5v-12Z"/></svg>';
    },
    831246: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="m18.43 15.91 6.96-8.6-.78-.62-6.96 8.6a2.49 2.49 0 0 0-2.63.2l-2.21-2.02A2.5 2.5 0 0 0 10.5 10a2.5 2.5 0 1 0 1.73 4.3l2.12 1.92a2.5 2.5 0 1 0 4.08-.31ZM10.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path d="M8.37 13.8c.17.3.4.54.68.74l-5.67 6.78-.76-.64 5.75-6.88Z"/></svg>';
    },
    241473: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m25.39 7.31-8.83 10.92-6.02-5.47-7.16 8.56-.76-.64 7.82-9.36 6 5.45L24.61 6.7l.78.62Z"/></svg>';
    },
    173149: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18 24h3V12h-3v12zm-1-13h5v14h-5V11zm-4-8v7h3V3h-3zm-1-1h5v9h-5V2zM8 19h3v-7H8v7zm-1-8h5v9H7v-9z"/></svg>';
    },
    282436: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>';
    },
    893316: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M14.5 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm3.293-15.5l4.707 4.707.707-.707L18.5 4.793z"/><path d="M18.5 10.207L23.207 5.5l-.707-.707L17.793 9.5zm-.707 1.293l4.707 4.707.707-.707-4.707-4.707z"/><path d="M18.5 16.207l4.707-4.707-.707-.707-4.707 4.707zM5.793 17.5l4.707 4.707.707-.707L6.5 16.793z"/><path d="M6.5 22.207l4.707-4.707-.707-.707L5.793 21.5zM5.793 5.5l4.707 4.707.707-.707L6.5 4.793z"/><path d="M6.5 10.207L11.207 5.5l-.707-.707L5.793 9.5zM5.793 11.5l4.707 4.707.707-.707L6.5 10.793z"/><path d="M6.5 16.207l4.707-4.707-.707-.707L5.793 15.5z"/></svg>';
    },
    796052: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>';
    },
    149387: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18 5v5h3V5h-3zm-1-1h5v7h-5V4zm-4 13h3v-5h-3v5zm-1-6h5v7h-5v-7zM8 24h3v-5H8v5zm-1-6h5v7H7v-7z"/></svg>';
    },
    272644: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>';
    },
    715726: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M19 5h5v1h-4v13h-6v-7h-4v12H5v-1h4V11h6v7h4V5Z"/></svg>';
    },
    377665: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>';
    },
    283617: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M18 4h1v3h3.5c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5H19v3h-1v-3h-3.5a.5.5 0 0 1-.5-.5v-13c0-.28.22-.5.5-.5H18V4Zm-3 16h7V8h-7v12ZM10 7H9v3H7.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H9v3h1v-3h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5H10V7Zm-1 4H8v7h3v-7H9Z"/></svg>';
    },
    636296: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
    },
    323595: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>';
    },
    929414: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>';
    },
    167487: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.75 5h3.07l-6.7 7.62L24 23h-6.17l-4.84-6.3L7.46 23H4.4l7.17-8.16L4 5h6.33l4.37 5.75L19.75 5Zm-1.24 16h1.7L9.54 7H7.7l10.8 14Z"/></svg>';
    },
  },
]);
