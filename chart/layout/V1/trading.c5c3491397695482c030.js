(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5142, 9216, 4333],
  {
    497754: (e, t) => {
      var i;
      !(function () {
        "use strict";
        var s = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var i = arguments[t];
            if (i) {
              var o = typeof i;
              if ("string" === o || "number" === o) e.push(i);
              else if (Array.isArray(i) && i.length) {
                var n = r.apply(null, i);
                n && e.push(n);
              } else if ("object" === o)
                for (var a in i) s.call(i, a) && i[a] && e.push(a);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (i = function () {
                return r;
              }.apply(t, [])) || (e.exports = i);
      })();
    },
    24654: (e) => {
      "use strict";
      e.exports = function (e) {
        for (var t = [], i = e.length, s = 0; s < i; s++) {
          var r = e.charCodeAt(s);
          if (r >= 55296 && r <= 56319 && i > s + 1) {
            var o = e.charCodeAt(s + 1);
            o >= 56320 &&
              o <= 57343 &&
              ((r = 1024 * (r - 55296) + o - 56320 + 65536), (s += 1));
          }
          r < 128
            ? t.push(r)
            : r < 2048
            ? (t.push((r >> 6) | 192), t.push((63 & r) | 128))
            : r < 55296 || (r >= 57344 && r < 65536)
            ? (t.push((r >> 12) | 224),
              t.push(((r >> 6) & 63) | 128),
              t.push((63 & r) | 128))
            : r >= 65536 && r <= 1114111
            ? (t.push((r >> 18) | 240),
              t.push(((r >> 12) & 63) | 128),
              t.push(((r >> 6) & 63) | 128),
              t.push((63 & r) | 128))
            : t.push(239, 191, 189);
        }
        return new Uint8Array(t).buffer;
      };
    },
    9995: (e, t, i) => {
      var s = i(939340);
      e.exports = function (e) {
        return (
          (e = s((e ^= e >>> 16), 2246822507)),
          (e = s((e ^= e >>> 13), 3266489909)),
          (e ^= e >>> 16) >>> 0
        );
      };
    },
    939340: (e) => {
      "use strict";
      e.exports =
        Math.imul ||
        function (e, t) {
          var i = 65535 & e,
            s = 65535 & t;
          return (
            (i * s +
              (((((e >>> 16) & 65535) * s + i * ((t >>> 16) & 65535)) << 16) >>>
                0)) |
            0
          );
        };
    },
    188317: (e) => {
      e.exports = {
        pills: "pills-PVWoXu5j",
        primary: "primary-PVWoXu5j",
        gray: "gray-PVWoXu5j",
        selected: "selected-PVWoXu5j",
        grouped: "grouped-PVWoXu5j",
        active: "active-PVWoXu5j",
        disableActiveOnTouch: "disableActiveOnTouch-PVWoXu5j",
        disableActiveStateStyles: "disableActiveStateStyles-PVWoXu5j",
        withGrouped: "withGrouped-PVWoXu5j",
        "quiet-primary": "quiet-primary-PVWoXu5j",
        green: "green-PVWoXu5j",
        red: "red-PVWoXu5j",
        blue: "blue-PVWoXu5j",
        secondary: "secondary-PVWoXu5j",
        ghost: "ghost-PVWoXu5j",
      };
    },
    601538: (e) => {
      e.exports = {
        lightButton: "lightButton-bYDQcOkp",
        link: "link-bYDQcOkp",
        ltr: "ltr-bYDQcOkp",
        rtl: "rtl-bYDQcOkp",
        "typography-regular16px": "typography-regular16px-bYDQcOkp",
        "typography-medium16px": "typography-medium16px-bYDQcOkp",
        "typography-regular14px": "typography-regular14px-bYDQcOkp",
        "typography-semibold14px": "typography-semibold14px-bYDQcOkp",
        "typography-semibold16px": "typography-semibold16px-bYDQcOkp",
        content: "content-bYDQcOkp",
        visuallyHidden: "visuallyHidden-bYDQcOkp",
        nowrap: "nowrap-bYDQcOkp",
        ellipsisContainer: "ellipsisContainer-bYDQcOkp",
        textWrapContainer: "textWrapContainer-bYDQcOkp",
        textWrapWithEllipsis: "textWrapWithEllipsis-bYDQcOkp",
        slot: "slot-bYDQcOkp",
        caret: "caret-bYDQcOkp",
        activeCaret: "activeCaret-bYDQcOkp",
        xsmall: "xsmall-bYDQcOkp",
        withStartSlot: "withStartSlot-bYDQcOkp",
        withEndSlot: "withEndSlot-bYDQcOkp",
        noContent: "noContent-bYDQcOkp",
        wrap: "wrap-bYDQcOkp",
        small: "small-bYDQcOkp",
        medium: "medium-bYDQcOkp",
      };
    },
    262453: (e) => {
      e.exports = {
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
    584928: (e) => {
      e.exports = {
        dialog: "dialog-aRAWUDhF",
        rounded: "rounded-aRAWUDhF",
        shadowed: "shadowed-aRAWUDhF",
        fullscreen: "fullscreen-aRAWUDhF",
        darker: "darker-aRAWUDhF",
        backdrop: "backdrop-aRAWUDhF",
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
    485862: (e) => {
      e.exports = { disableSelfPositioning: "disableSelfPositioning-dYiqkKAE" };
    },
    234639: (e) => {
      e.exports = {
        lightTabButton: "lightTabButton-_v4jz9BC",
        selected: "selected-_v4jz9BC",
        content: "content-_v4jz9BC",
        xsmall: "xsmall-_v4jz9BC",
        small: "small-_v4jz9BC",
        medium: "medium-_v4jz9BC",
      };
    },
    614206: (e) => {
      e.exports = {
        lightTabs: "lightTabs-LqEaU5HP",
        medium: "medium-LqEaU5HP",
      };
    },
    974365: (e) => {
      e.exports = { separator: "separator-gVkHdN_4" };
    },
    553252: (e) => {
      e.exports = {
        header: "header-W5uTS8cc",
        wrapper: "wrapper-W5uTS8cc",
        statusLine: "statusLine-W5uTS8cc",
        informer: "informer-W5uTS8cc",
        text: "text-W5uTS8cc",
        button: "button-W5uTS8cc",
      };
    },
    732373: (e) => {
      e.exports = {
        delayedDataTitleColor: "var(--themed-color-delay-mode,#F57C00)",
        batsQuotesTitleColor: "var(--themed-color-notaccurate-mode,#D81B60)",
        button: "button-ljwP914Q",
        icon: "icon-ljwP914Q",
        wrapper: "wrapper-ljwP914Q",
        infoContainer: "infoContainer-ljwP914Q",
        title: "title-ljwP914Q",
        text: "text-ljwP914Q",
        actionButton: "actionButton-ljwP914Q",
        delayedDataIcon: "delayedDataIcon-ljwP914Q",
        batsQuotesIcon: "batsQuotesIcon-ljwP914Q",
      };
    },
    383383: (e) => {
      e.exports = {
        rootContainer: "rootContainer-LlInYWMC",
        hidden: "hidden-LlInYWMC",
        "trading-panel-content": "trading-panel-content-LlInYWMC",
        "trading-panel-spinner": "trading-panel-spinner-LlInYWMC",
        "trading-panel-header": "trading-panel-header-LlInYWMC",
        "trading-panel-tabs": "trading-panel-tabs-LlInYWMC",
        "trading-panel-handle": "trading-panel-handle-LlInYWMC",
      };
    },
    896108: (e) => {
      e.exports = {
        "tablet-normal-breakpoint": "(max-width: 768px)",
        "small-height-breakpoint": "(max-height: 360px)",
        "tablet-small-breakpoint": "(max-width: 440px)",
      };
    },
    577508: (e) => {
      e.exports = {
        dialog: "dialog-b8SxMnzX",
        wrapper: "wrapper-b8SxMnzX",
        separator: "separator-b8SxMnzX",
        bounded: "bounded-b8SxMnzX",
      };
    },
    710326: (e) => {
      e.exports = {
        "small-height-breakpoint": "(max-height: 360px)",
        container: "container-BZKENkhT",
        unsetAlign: "unsetAlign-BZKENkhT",
        title: "title-BZKENkhT",
        subtitle: "subtitle-BZKENkhT",
        textWrap: "textWrap-BZKENkhT",
        ellipsis: "ellipsis-BZKENkhT",
        close: "close-BZKENkhT",
        icon: "icon-BZKENkhT",
      };
    },
    513100: (e) => {
      e.exports = {
        "tablet-normal-breakpoint": "(max-width: 768px)",
        "tooltip-offset": "20px",
        dialog: "dialog-qyCw0PaN",
        dragging: "dragging-qyCw0PaN",
        mobile: "mobile-qyCw0PaN",
        fullscreen: "fullscreen-qyCw0PaN",
        dialogAnimatedAppearance: "dialogAnimatedAppearance-qyCw0PaN",
        dialogAnimation: "dialogAnimation-qyCw0PaN",
        dialogTooltip: "dialogTooltip-qyCw0PaN",
      };
    },
    536204: (e) => {
      e.exports = { separator: "separator-Pf4rIzEt" };
    },
    855385: (e, t, i) => {
      var s = i(939340),
        r = i(9995),
        o = i(24654),
        n = new Uint32Array([3432918353, 461845907]);
      function a(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      e.exports = function (e, t) {
        if (
          ((t = t ? 0 | t : 0),
          "string" == typeof e && (e = o(e)),
          !(e instanceof ArrayBuffer))
        )
          throw new TypeError("Expected key to be ArrayBuffer or string");
        var i = new Uint32Array([t]);
        return (
          (function (e, t) {
            for (
              var i = (e.byteLength / 4) | 0,
                r = new Uint32Array(e, 0, i),
                o = 0;
              o < i;
              o++
            )
              (r[o] = s(r[o], n[0])),
                (r[o] = a(r[o], 15)),
                (r[o] = s(r[o], n[1])),
                (t[0] = t[0] ^ r[o]),
                (t[0] = a(t[0], 13)),
                (t[0] = s(t[0], 5) + 3864292196);
          })(e, i),
          (function (e, t) {
            var i = (e.byteLength / 4) | 0,
              r = e.byteLength % 4,
              o = 0,
              l = new Uint8Array(e, 4 * i, r);
            switch (r) {
              case 3:
                o ^= l[2] << 16;
              case 2:
                o ^= l[1] << 8;
              case 1:
                (o ^= l[0]),
                  (o = a((o = s(o, n[0])), 15)),
                  (o = s(o, n[1])),
                  (t[0] = t[0] ^ o);
            }
          })(e, i),
          (function (e, t) {
            (t[0] = t[0] ^ e.byteLength), (t[0] = r(t[0]));
          })(e, i),
          i.buffer
        );
      };
    },
    389986: (e, t, i) => {
      "use strict";
      i.d(t, { CloseButton: () => c });
      var s = i(50959),
        r = i(270762),
        o = i(117105),
        n = i(315130),
        a = i(238822),
        l = i(663346),
        d = i(534983);
      function u(e = "large") {
        switch (e) {
          case "large":
            return o;
          case "medium":
          default:
            return n;
          case "small":
            return a;
          case "xsmall":
            return l;
          case "xxsmall":
            return d;
        }
      }
      const c = s.forwardRef((e, t) =>
        s.createElement(r.NavButton, { ...e, ref: t, icon: u(e.size) })
      );
    },
    959189: (e, t, i) => {
      "use strict";
      function s(e, t) {
        return (
          t ||
          null == e ||
          (("string" == typeof e || Array.isArray(e)) && 0 === e.length)
        );
      }
      i.d(t, { isIconOnly: () => s });
    },
    898237: (e, t, i) => {
      "use strict";
      i.d(t, { LightAnchorButton: () => p, LightButton: () => r.LightButton });
      var s = i(418920),
        r = i(943158),
        o = i(50959),
        n = i(591365),
        a = i(273388),
        l = i(854797),
        d = i(601538),
        u = i.n(d),
        c = i(188317),
        h = i.n(c);
      function p(e) {
        const {
            className: t,
            isSelected: i,
            children: r,
            iconOnly: d,
            ellipsis: c,
            showCaret: p,
            forceDirection: _,
            endSlot: g,
            startSlot: b,
            color: y,
            variant: m,
            reference: v,
            size: f,
            enableActiveStateStyles: P,
            renderComponent: k = n.CustomComponentDefaultLink,
            typography: S,
            textWrap: C = !1,
            maxLines: w,
            style: T = {},
            isActive: B,
            isPills: O,
            ...M
          } = e,
          I = C ? w ?? 2 : 1,
          E =
            I > 0 ? { ...T, "--ui-lib-light-button-content-max-lines": I } : T;
        return o.createElement(
          k,
          {
            ...M,
            className: (0, s.useLightButtonClasses)(
              { ...h(), ...u() },
              {
                className: t,
                isSelected: i,
                isActive: B,
                isPills: O,
                children: r,
                iconOnly: d,
                showCaret: p,
                forceDirection: _,
                color: y,
                variant: m,
                size: f,
                enableActiveStateStyles: P,
                typography: S,
                textWrap: C,
                isLink: !0,
                endSlot: g,
                startSlot: b,
              }
            ),
            reference: (0, a.isomorphicRef)(v),
            style: E,
          },
          o.createElement(
            l.LightButtonContent,
            {
              showCaret: p,
              isActiveCaret: p && (O || B || i),
              iconOnly: d,
              ellipsis: c,
              textWrap: C,
              endSlot: g,
              startSlot: b,
            },
            r
          )
        );
      }
      i(15378);
    },
    418920: (e, t, i) => {
      "use strict";
      i.d(t, { useLightButtonClasses: () => d });
      var s = i(50959),
        r = i(497754),
        o = i(234539),
        n = i(959189),
        a = i(380327);
      const l = s.createContext({ isInButtonGroup: !1, isGroupPrimary: !1 }),
        d = (e, t, i) => {
          const d = (0, s.useContext)(o.CustomBehaviourContext),
            {
              className: u,
              isSelected: c,
              children: h,
              showCaret: p,
              forceDirection: _,
              iconOnly: g,
              color: b = "gray",
              variant: y = "primary",
              size: m = "medium",
              enableActiveStateStyles: v = d.enableActiveStateStyles,
              typography: f,
              isLink: P = !1,
              textWrap: k,
              isPills: S,
              isActive: C,
              startSlot: w,
              endSlot: T,
            } = t,
            B =
              e[
                `typography-${((e, t, i) => {
                  if (i) {
                    const e = i.replace(/^\D+/g, "");
                    return t ? `semibold${e}` : i;
                  }
                  switch (e) {
                    case "xsmall":
                      return t ? "semibold14px" : "regular14px";
                    case "small":
                    case "medium":
                      return t ? "semibold16px" : "regular16px";
                    default:
                      return "";
                  }
                })(m, c || S, f || void 0)}`
              ],
            O = (0, s.useContext)(a.ControlGroupContext),
            { isInButtonGroup: M, isGroupPrimary: I } = (0, s.useContext)(l);
          return r(
            u,
            e.lightButton,
            P && e.link,
            C && e.active,
            c && e.selected,
            (0, n.isIconOnly)(h, g) && e.noContent,
            !!w && e.withStartSlot,
            (p || !!T) && e.withEndSlot,
            i && e.withGrouped,
            _ && e[_],
            e[I ? "primary" : y],
            e[I ? "gray" : b],
            e[m],
            B,
            !v && e.disableActiveStateStyles,
            O.isGrouped && e.grouped,
            k && e.wrap,
            M && e.disableActiveOnTouch,
            S && e.pills
          );
        };
    },
    854797: (e, t, i) => {
      "use strict";
      i.d(t, { LightButtonContent: () => h });
      var s = i(50959),
        r = i(497754),
        o = i(601198),
        n = i(959189),
        a = i(878112),
        l = i(602948),
        d = i(601538),
        u = i.n(d);
      const c = (e) =>
        s.createElement(a.Icon, {
          className: r(u().caret, e && u().activeCaret),
          icon: l,
        });
      function h(e) {
        const {
          showCaret: t,
          iconOnly: i,
          ellipsis: a = !0,
          textWrap: l,
          tooltipText: d,
          children: h,
          endSlot: p,
          startSlot: _,
          isActiveCaret: g,
        } = e;
        [p, t].filter((e) => !!e);
        return s.createElement(
          s.Fragment,
          null,
          _ &&
            s.createElement(
              "span",
              { className: r(u().slot, u().startSlot) },
              _
            ),
          !(0, n.isIconOnly)(h, i) &&
            s.createElement(
              "span",
              {
                className: r(
                  u().content,
                  !l && u().nowrap,
                  "apply-overflow-tooltip",
                  "apply-overflow-tooltip--check-children-recursively",
                  "apply-overflow-tooltip--allow-text"
                ),
                "data-overflow-tooltip-text": d ?? (0, o.getTextForTooltip)(h),
              },
              l || a
                ? s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "span",
                      {
                        className: r(
                          !l && a && u().ellipsisContainer,
                          l && u().textWrapContainer,
                          l && a && u().textWrapWithEllipsis
                        ),
                      },
                      h
                    ),
                    s.createElement(
                      "span",
                      { className: u().visuallyHidden, "aria-hidden": !0 },
                      h
                    )
                  )
                : s.createElement(
                    s.Fragment,
                    null,
                    h,
                    s.createElement(
                      "span",
                      { className: u().visuallyHidden, "aria-hidden": !0 },
                      h
                    )
                  )
            ),
          p &&
            s.createElement("span", { className: r(u().slot, u().endSlot) }, p),
          t && c(g)
        );
      }
    },
    943158: (e, t, i) => {
      "use strict";
      i.d(t, { LightButton: () => c });
      var s = i(50959),
        r = i(380327),
        o = i(418920),
        n = i(854797),
        a = i(601538),
        l = i.n(a),
        d = i(188317),
        u = i.n(d);
      function c(e) {
        const { isGrouped: t } = s.useContext(r.ControlGroupContext),
          {
            reference: i,
            className: a,
            isSelected: d,
            children: c,
            iconOnly: h,
            ellipsis: p,
            showCaret: _,
            forceDirection: g,
            endSlot: b,
            startSlot: y,
            color: m,
            variant: v,
            size: f,
            enableActiveStateStyles: P,
            typography: k,
            textWrap: S = !1,
            maxLines: C,
            style: w = {},
            isPills: T,
            isActive: B,
            tooltipText: O,
            role: M,
            ...I
          } = e,
          E = S ? C ?? 2 : 1,
          D =
            E > 0 ? { ...w, "--ui-lib-light-button-content-max-lines": E } : w;
        return s.createElement(
          "button",
          {
            ...I,
            className: (0, o.useLightButtonClasses)(
              { ...u(), ...l() },
              {
                className: a,
                isSelected: d,
                children: c,
                iconOnly: h,
                showCaret: _,
                forceDirection: g,
                endSlot: b,
                startSlot: y,
                color: m,
                variant: v,
                size: f,
                enableActiveStateStyles: P,
                typography: k,
                textWrap: S,
                isPills: T,
                isActive: B,
              },
              t
            ),
            ref: i,
            style: D,
            role: M,
          },
          s.createElement(
            n.LightButtonContent,
            {
              showCaret: _,
              isActiveCaret: _ && (T || B || d),
              iconOnly: h,
              ellipsis: p,
              textWrap: S,
              tooltipText: O,
              endSlot: b,
              startSlot: y,
            },
            c
          )
        );
      }
    },
    270762: (e, t, i) => {
      "use strict";
      i.d(t, { NavButton: () => d });
      var s = i(50959),
        r = i(497754),
        o = i(878112),
        n = (i(15378), i(262453));
      function a(e) {
        const {
          size: t = "large",
          preservePaddings: i,
          isLink: s,
          flipIconOnRtl: o,
          className: a,
        } = e;
        return r(
          n["nav-button"],
          n[`size-${t}`],
          i && n["preserve-paddings"],
          o && n["flip-icon"],
          s && n.link,
          a
        );
      }
      function l(e) {
        const { children: t, icon: i } = e;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement("span", { className: n.background }),
          s.createElement(o.Icon, {
            icon: i,
            className: n.icon,
            "aria-hidden": !0,
          }),
          t && s.createElement("span", { className: n["visually-hidden"] }, t)
        );
      }
      const d = (0, s.forwardRef)((e, t) => {
        const {
          icon: i,
          type: r = "button",
          preservePaddings: o,
          flipIconOnRtl: n,
          size: d,
          "aria-label": u,
          ...c
        } = e;
        return s.createElement(
          "button",
          { ...c, className: a({ ...e, children: u }), ref: t, type: r },
          s.createElement(l, { icon: i }, u)
        );
      });
      d.displayName = "NavButton";
      var u = i(591365),
        c = i(273388);
      (0, s.forwardRef)((e, t) => {
        const { icon: i, renderComponent: r, "aria-label": o, ...n } = e,
          d = r ?? u.CustomComponentDefaultLink;
        return s.createElement(
          d,
          {
            ...n,
            className: a({ ...e, children: o, isLink: !0 }),
            reference: (0, c.isomorphicRef)(t),
          },
          s.createElement(l, { icon: i }, o)
        );
      }).displayName = "NavAnchorButton";
    },
    15378: (e, t, i) => {
      "use strict";
      var s, r, o, n;
      !(function (e) {
        (e.Primary = "primary"),
          (e.QuietPrimary = "quiet-primary"),
          (e.Secondary = "secondary"),
          (e.Ghost = "ghost");
      })(s || (s = {})),
        (function (e) {
          (e.XXSmall = "xxsmall"),
            (e.XSmall = "xsmall"),
            (e.Small = "small"),
            (e.Medium = "medium"),
            (e.Large = "large"),
            (e.XLarge = "xlarge"),
            (e.XXLarge = "xxlarge");
        })(r || (r = {})),
        (function (e) {
          (e.Brand = "brand"),
            (e.Blue = "blue"),
            (e.Gray = "gray"),
            (e.LightGray = "light-gray"),
            (e.Green = "green"),
            (e.Red = "red"),
            (e.Black = "black"),
            (e.Gradient = "gradient"),
            (e.BlackFriday = "black-friday"),
            (e.CyberMonday = "cyber-monday");
        })(o || (o = {})),
        (function (e) {
          (e.Semibold18px = "semibold18px"),
            (e.Semibold16px = "semibold16px"),
            (e.Semibold14px = "semibold14px"),
            (e.Medium16px = "medium16px"),
            (e.Regular16px = "regular16px"),
            (e.Regular14px = "regular14px");
        })(n || (n = {}));
    },
    380327: (e, t, i) => {
      "use strict";
      i.d(t, { ControlGroupContext: () => s });
      const s = i(50959).createContext({
        isGrouped: !1,
        cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
      });
    },
    409245: (e, t, i) => {
      "use strict";
      function s(e) {
        const { reference: t, ...i } = e;
        return { ...i, ref: t };
      }
      i.d(t, { renameRef: () => s });
    },
    591365: (e, t, i) => {
      "use strict";
      i.d(t, { CustomComponentDefaultLink: () => o });
      var s = i(50959),
        r = i(409245);
      function o(e) {
        return s.createElement("a", { ...(0, r.renameRef)(e) });
      }
      s.PureComponent;
    },
    234539: (e, t, i) => {
      "use strict";
      i.d(t, { CustomBehaviourContext: () => s });
      const s = (0, i(50959).createContext)({ enableActiveStateStyles: !0 });
      s.displayName = "CustomBehaviourContext";
    },
    80137: (e, t, i) => {
      "use strict";
      i.d(t, { Dialog: () => d });
      var s = i(50959),
        r = i(497754),
        o = i(682925),
        n = i(801808),
        a = i(800417),
        l = i(584928);
      class d extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._manager = new n.OverlapManager()),
            (this._handleSlot = (e) => {
              this._manager.setContainer(e);
            });
        }
        render() {
          const {
              rounded: e = !0,
              shadowed: t = !0,
              fullscreen: i = !1,
              darker: n = !1,
              className: d,
              backdrop: u,
              containerTabIndex: c = -1,
            } = this.props,
            h = r(
              d,
              l.dialog,
              e && l.rounded,
              t && l.shadowed,
              i && l.fullscreen,
              n && l.darker
            ),
            p = (0, a.filterDataProps)(this.props),
            _ = this.props.style
              ? { ...this._createStyles(), ...this.props.style }
              : this._createStyles();
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              o.SlotContext.Provider,
              { value: this._manager },
              u &&
                s.createElement("div", {
                  onClick: this.props.onClickBackdrop,
                  className: l.backdrop,
                }),
              s.createElement(
                "div",
                {
                  ...p,
                  className: h,
                  style: _,
                  ref: this.props.reference,
                  onFocus: this.props.onFocus,
                  onMouseDown: this.props.onMouseDown,
                  onMouseUp: this.props.onMouseUp,
                  onClick: this.props.onClick,
                  onKeyDown: this.props.onKeyDown,
                  tabIndex: c,
                  "aria-label": this.props.containerAriaLabel,
                },
                this.props.children
              )
            ),
            s.createElement(o.Slot, { reference: this._handleSlot })
          );
        }
        _createStyles() {
          const {
            bottom: e,
            left: t,
            width: i,
            right: s,
            top: r,
            zIndex: o,
            height: n,
          } = this.props;
          return {
            bottom: e,
            left: t,
            right: s,
            top: r,
            zIndex: o,
            maxWidth: i,
            height: n,
          };
        }
      }
    },
    718736: (e, t, i) => {
      "use strict";
      i.d(t, { useFunctionalRefObject: () => o });
      var s = i(50959),
        r = i(855393);
      function o(e) {
        const t = (0, s.useMemo)(
            () =>
              (function (e) {
                const t = (i) => {
                  e(i), (t.current = i);
                };
                return (t.current = null), t;
              })((e) => {
                a.current(e);
              }),
            []
          ),
          i = (0, s.useRef)(null),
          o = (t) => {
            if (null === t) return n(i.current, t), void (i.current = null);
            i.current !== e && ((i.current = e), n(i.current, t));
          },
          a = (0, s.useRef)(o);
        return (
          (a.current = o),
          (0, r.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current)
              return a.current(t.current), () => a.current(null);
          }, [e]),
          t
        );
      }
      function n(e, t) {
        null !== e && ("function" == typeof e ? e(t) : (e.current = t));
      }
    },
    855393: (e, t, i) => {
      "use strict";
      i.d(t, { useIsomorphicLayoutEffect: () => r });
      var s = i(50959);
      function r(e, t) {
        ("undefined" == typeof window ? s.useEffect : s.useLayoutEffect)(e, t);
      }
    },
    183787: (e, t, i) => {
      "use strict";
      i.d(t, { Icon: () => r });
      var s = i(50959);
      const r = s.forwardRef((e, t) => {
        const {
            icon: i = "",
            title: r,
            ariaLabel: o,
            ariaLabelledby: n,
            ariaHidden: a,
            ...l
          } = e,
          d = !!(r || o || n);
        return s.createElement("span", {
          role: "img",
          ...l,
          ref: t,
          "aria-label": o,
          "aria-labelledby": n,
          "aria-hidden": a || !d,
          title: r,
          dangerouslySetInnerHTML: { __html: i },
        });
      });
    },
    878112: (e, t, i) => {
      "use strict";
      i.d(t, { Icon: () => s.Icon });
      var s = i(183787);
    },
    234404: (e, t, i) => {
      "use strict";
      i.d(t, { Loader: () => l });
      var s,
        r = i(50959),
        o = i(497754),
        n = i(504665),
        a = i.n(n);
      function l(e) {
        const {
            className: t,
            size: i = "medium",
            staticPosition: s,
            color: n = "black",
          } = e,
          l = o(a().item, a()[n], a()[i]);
        return r.createElement(
          "span",
          { className: o(a().loader, s && a().static, t) },
          r.createElement("span", { className: l }),
          r.createElement("span", { className: l }),
          r.createElement("span", { className: l })
        );
      }
      !(function (e) {
        (e.Medium = "medium"), (e.Small = "small");
      })(s || (s = {}));
    },
    672511: (e, t, i) => {
      "use strict";
      i.d(t, { Spinner: () => l });
      var s = i(50959),
        r = i(497754),
        o = i(843442),
        n = (i(715216), i(485862)),
        a = i.n(n);
      function l(e) {
        const {
          ariaLabel: t,
          ariaLabelledby: i,
          className: n,
          style: l,
          size: d,
          id: u,
          disableSelfPositioning: c,
        } = e;
        return s.createElement("div", {
          className: r(
            n,
            "tv-spinner",
            "tv-spinner--shown",
            `tv-spinner--size_${o.spinnerSizeMap[d || o.DEFAULT_SIZE]}`,
            c && a().disableSelfPositioning
          ),
          style: l,
          role: "progressbar",
          id: u,
          "aria-label": t,
          "aria-labelledby": i,
        });
      }
    },
    601198: (e, t, i) => {
      "use strict";
      i.d(t, { getTextForTooltip: () => n });
      var s = i(50959);
      const r = (e) => (0, s.isValidElement)(e) && Boolean(e.props.children),
        o = (e) =>
          null == e || "boolean" == typeof e || "{}" === JSON.stringify(e)
            ? ""
            : e.toString() + " ",
        n = (e) =>
          Array.isArray(e) || (0, s.isValidElement)(e)
            ? s.Children.toArray(e)
                .reduce((e, t) => {
                  let i = "";
                  return (
                    (i =
                      (0, s.isValidElement)(t) && r(t)
                        ? n(t.props.children)
                        : (0, s.isValidElement)(t) && !r(t)
                        ? ""
                        : o(t)),
                    e.concat(i)
                  );
                }, "")
                .trim()
            : o(e);
    },
    273388: (e, t, i) => {
      "use strict";
      function s(e) {
        return (t) => {
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function r(e) {
        return s([e]);
      }
      i.d(t, { isomorphicRef: () => r, mergeRefs: () => s });
    },
    738036: (e, t, i) => {
      "use strict";
      i.d(t, { OutsideEvent: () => r });
      var s = i(908783);
      function r(e) {
        const { children: t, ...i } = e;
        return t((0, s.useOutsideEvent)(i));
      }
    },
    586816: (e, t, i) => {
      "use strict";
      i.d(t, { ORDERS_GROUP_ID: () => s });
      const s = "orders";
    },
    242843: (e, t, i) => {
      "use strict";
      i.d(t, { getHeadingText: () => d, getOrderInfoTexts: () => u });
      var s = i(609838),
        r = i(46415),
        o = i(989546);
      const n = {
          0: (e) => s.t(null, { replace: { symbol: e } }, i(877889)),
          5: (e) => s.t(null, { replace: { symbol: e } }, i(735055)),
          3: (e) => s.t(null, { replace: { symbol: e } }, i(184536)),
          2: (e) => s.t(null, { replace: { symbol: e } }, i(425034)),
          1: (e) => s.t(null, { replace: { symbol: e } }, i(107364)),
          4: (e) => s.t(null, { replace: { symbol: e } }, i(978630)),
        },
        a = {
          [r.StopType.StopLoss]: {
            0: (e) => s.t(null, { replace: { symbol: e } }, i(533423)),
            5: (e) => s.t(null, { replace: { symbol: e } }, i(256969)),
            3: (e) => s.t(null, { replace: { symbol: e } }, i(465730)),
            2: (e) => s.t(null, { replace: { symbol: e } }, i(141089)),
            1: (e) => s.t(null, { replace: { symbol: e } }, i(25141)),
            4: (e) => s.t(null, { replace: { symbol: e } }, i(258578)),
          },
          [r.StopType.TrailingStop]: {
            0: (e) => s.t(null, { replace: { symbol: e } }, i(581861)),
            5: (e) => s.t(null, { replace: { symbol: e } }, i(543655)),
            3: (e) => s.t(null, { replace: { symbol: e } }, i(490645)),
            2: (e) => s.t(null, { replace: { symbol: e } }, i(107497)),
            1: (e) => s.t(null, { replace: { symbol: e } }, i(538030)),
            4: (e) => s.t(null, { replace: { symbol: e } }, i(428941)),
          },
          [r.StopType.GuaranteedStop]: {
            0: (e) => s.t(null, { replace: { symbol: e } }, i(131629)),
            5: (e) => s.t(null, { replace: { symbol: e } }, i(728481)),
            3: (e) => s.t(null, { replace: { symbol: e } }, i(779598)),
            2: (e) => s.t(null, { replace: { symbol: e } }, i(888894)),
            1: (e) => s.t(null, { replace: { symbol: e } }, i(666391)),
            4: (e) => s.t(null, { replace: { symbol: e } }, i(508106)),
          },
        },
        l = {
          1: {
            0: (e) => s.t(null, { replace: { symbol: e } }, i(900493)),
            5: (e) => s.t(null, { replace: { symbol: e } }, i(586246)),
            3: (e) => s.t(null, { replace: { symbol: e } }, i(133480)),
            2: (e) => s.t(null, { replace: { symbol: e } }, i(570694)),
            1: (e) => s.t(null, { replace: { symbol: e } }, i(743087)),
            4: (e) => s.t(null, { replace: { symbol: e } }, i(804352)),
          },
          2: {
            0: (e) => s.t(null, { replace: { symbol: e } }, i(649642)),
            5: (e) => s.t(null, { replace: { symbol: e } }, i(924681)),
            3: (e) => s.t(null, { replace: { symbol: e } }, i(771010)),
            2: (e) => s.t(null, { replace: { symbol: e } }, i(847816)),
            1: (e) => s.t(null, { replace: { symbol: e } }, i(404107)),
            4: (e) => s.t(null, { replace: { symbol: e } }, i(623851)),
          },
          3: {
            0: (e) => s.t(null, { replace: { symbol: e } }, i(447530)),
            5: (e) => s.t(null, { replace: { symbol: e } }, i(321105)),
            3: (e) => s.t(null, { replace: { symbol: e } }, i(920175)),
            2: (e) => s.t(null, { replace: { symbol: e } }, i(27267)),
            1: (e) => s.t(null, { replace: { symbol: e } }, i(543880)),
            4: (e) => s.t(null, { replace: { symbol: e } }, i(897978)),
          },
          4: {
            0: (e) => s.t(null, { replace: { symbol: e } }, i(531955)),
            5: (e) => s.t(null, { replace: { symbol: e } }, i(347693)),
            3: (e) => s.t(null, { replace: { symbol: e } }, i(875482)),
            2: (e) => s.t(null, { replace: { symbol: e } }, i(407371)),
            1: (e) => s.t(null, { replace: { symbol: e } }, i(672173)),
            4: (e) => s.t(null, { replace: { symbol: e } }, i(976044)),
          },
        };
      function d(e) {
        const {
          displaySymbol: t,
          orderType: i,
          toastType: s,
          parentId: o,
          stopType: d,
        } = e;
        return o
          ? 1 === i
            ? n[s](t)
            : a[d ?? r.StopType.StopLoss][s](t)
          : l[i][s](t);
      }
      function u(e) {
        const {
            side: t,
            orderType: r,
            quantity: n,
            primaryPrice: a,
            secondaryPrice: l,
          } = e,
          d = o.defaultQuantityFormatter.format(n);
        if (!a)
          return {
            primaryText:
              1 === t
                ? s.t(
                    null,
                    {
                      replace: { quantity: d },
                    },
                    i(581591)
                  )
                : s.t(null, { replace: { quantity: d } }, i(117112)),
          };
        let u;
        4 === r &&
          l &&
          (u =
            1 === t
              ? s.t(
                  null,
                  { replace: { quantity: d, limitPrice: a, stopPrice: l } },
                  i(379498)
                )
              : s.t(
                  null,
                  { replace: { quantity: d, limitPrice: a, stopPrice: l } },
                  i(754789)
                )),
          void 0 === u &&
            (u =
              1 === t
                ? s.t(null, { replace: { quantity: d, price: a } }, i(880512))
                : s.t(null, { replace: { quantity: d, price: a } }, i(162734)));
        const [c, h] = u.split("{separatorTag}");
        return { primaryText: c, secondaryText: h };
      }
    },
    153894: (e, t, i) => {
      "use strict";
      i.d(t, { TRADING_NOTIFICATIONS_GROUP_ID: () => s });
      const s = "trading-notifications";
    },
    763281: (e, t, i) => {
      "use strict";
      i.d(t, {
        OrderTicketProvider: () => c,
        SettingsContext: () => a,
        WidgetContext: () => l,
      });
      var s = i(50959),
        r = i(661851),
        o = i(895318),
        n = i(363111);
      const a = s.createContext(o.defaultSettings),
        l = s.createContext({
          mode: n.OrderEditorDisplayMode.Panel,
          orderPanelStatus: n.OrderPanelStatus.Active,
        });
      function d(e) {
        const { children: t, settings$: i } = e,
          n = (0, r.useObservable)(i, o.defaultSettings);
        return s.createElement(a.Provider, { value: n }, t);
      }
      function u(e) {
        const {
            children: t,
            mode: i,
            orderPanelStatus$: o,
            isFractional: a,
          } = e,
          d = (0, r.useObservable)(o);
        return s.createElement(
          l.Provider,
          {
            value: {
              mode: i,
              orderPanelStatus: d ?? n.OrderPanelStatus.Active,
              isFractional: a,
            },
          },
          t
        );
      }
      function c(e) {
        const {
          children: t,
          settings$: i,
          mode: r,
          orderPanelStatus$: o,
          isFractional: n,
        } = e;
        return s.createElement(
          u,
          { mode: r, orderPanelStatus$: o, isFractional: n },
          s.createElement(d, { settings$: i }, t)
        );
      }
    },
    363111: (e, t, i) => {
      "use strict";
      i.d(t, {
        BracketDefaultPips: () => l,
        BracketSubControlType: () => u,
        CalculatorDecKeyCodes: () => p,
        CalculatorIncKeyCodes: () => _,
        OrderEditorDisplayMode: () => o,
        OrderPanelStatus: () => s,
        OrderPlacingStatus: () => r,
        PriceSubControlType: () => h,
        QuantitySubControlType: () => c,
        orderTypes: () => y,
      });
      var s,
        r,
        o,
        n,
        a,
        l,
        d,
        u,
        c,
        h,
        p,
        _,
        g,
        b = i(609838);
      !(function (e) {
        (e[(e.Wait = 0)] = "Wait"),
          (e[(e.Active = 1)] = "Active"),
          (e[(e.Editing = 2)] = "Editing"),
          (e[(e.Preview = 3)] = "Preview");
      })(s || (s = {})),
        (function (e) {
          (e[(e.Creating = 0)] = "Creating"), (e[(e.Placed = 1)] = "Placed");
        })(r || (r = {})),
        (function (e) {
          (e.Popup = "popup"),
            (e.Panel = "panel"),
            (e.ResizableDrawer = "resizabledrawer");
        })(o || (o = {})),
        (function (e) {
          (e[(e.AbsolutePrice = 0)] = "AbsolutePrice"),
            (e[(e.RelativePrice = 1)] = "RelativePrice");
        })(n || (n = {})),
        (function (e) {
          (e[(e.Quantity = 0)] = "Quantity"),
            (e[(e.RiskInCurrency = 1)] = "RiskInCurrency"),
            (e[(e.RiskInPercent = 2)] = "RiskInPercent"),
            (e[(e.BaseCurrencyQuantity = 3)] = "BaseCurrencyQuantity"),
            (e[(e.QuoteCurrencyQuantity = 4)] = "QuoteCurrencyQuantity"),
            (e[(e.OrderSizeCalculator = 5)] = "OrderSizeCalculator");
        })(a || (a = {})),
        (function (e) {
          (e[(e.TakeProfit = 75)] = "TakeProfit"),
            (e[(e.StopLoss = 25)] = "StopLoss");
        })(l || (l = {})),
        (function (e) {
          (e[(e.Pips = 0)] = "Pips"),
            (e[(e.Price = 1)] = "Price"),
            (e[(e.RiskInCurrency = 2)] = "RiskInCurrency"),
            (e[(e.RiskInPercent = 3)] = "RiskInPercent");
        })(d || (d = {})),
        (function (e) {
          (e.Price = "Price"),
            (e.Pips = "Pips"),
            (e.Money = "Money"),
            (e.Percent = "Percent");
        })(u || (u = {})),
        (function (e) {
          (e.Units = "Units"),
            (e.RiskInCurrency = "RiskInCurrency"),
            (e.RiskInPercent = "RiskInPercent"),
            (e.BaseCurrency = "BaseCurrency"),
            (e.QuoteCurrency = "QuoteCurrency");
        })(c || (c = {})),
        (function (e) {
          (e.Absolute = "Absolute"), (e.Relative = "Relative");
        })(h || (h = {})),
        (function (e) {
          (e[(e.Minus = 189)] = "Minus"),
            (e[(e.NumMinus = 109)] = "NumMinus"),
            (e[(e.FirefoxMinus = 173)] = "FirefoxMinus");
        })(p || (p = {})),
        (function (e) {
          (e[(e.Plus = 187)] = "Plus"),
            (e[(e.NumPlus = 107)] = "NumPlus"),
            (e[(e.FirefoxPlus = 61)] = "FirefoxPlus");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.SideBuy = 0)] = "SideBuy"), (e[(e.SideSell = 1)] = "SideSell");
        })(g || (g = {}));
      const y = {
        1: b.t(null, void 0, i(790258)),
        2: b.t(null, void 0, i(490138)),
        3: b.t(null, void 0, i(898251)),
        4: b.t(null, void 0, i(978369)),
      };
    },
    895318: (e, t, i) => {
      "use strict";
      i.d(t, {
        defaultCryptoBracketsSettings: () => r,
        defaultSettings: () => s,
      });
      const s = {
          showRelativePriceControl: !0,
          showCurrencyRiskInQty: !0,
          showPercentRiskInQty: !0,
          showBracketsInCurrency: !0,
          showBracketsInPercent: !0,
          showOrderPreview: !0,
          showCryptoBracketsInCurrency: !1,
          showCryptoBracketsInPercent: !1,
          enableQuantityInRisk: !0,
        },
        r = {
          showCryptoBracketsInCurrency: !1,
          showCryptoBracketsInPercent: !1,
        };
    },
    600297: (e, t, i) => {
      "use strict";
      i.d(t, { Button: () => n, ButtonType: () => s });
      var s,
        r = i(50959),
        o = i(228837);
      function n(e) {
        const {
          value: t,
          buttonType: i,
          className: n,
          icon: a,
          onClick: l,
        } = e;
        let d;
        switch (i) {
          case s.PlusValue:
          case s.IncDec:
            d = t;
            break;
          case s.Clear:
            d = "clear";
            break;
          case s.Default:
            d = "default";
        }
        return r.createElement(
          o.SquareButton,
          {
            className: n,
            "data-value": d,
            "data-name": `qtyButtonCalculator-${d}`,
            onClick: () => {
              l(t, i);
            },
            size: "xsmall",
            variant: "secondary",
            color: "gray",
            onMouseDown: (e) => e.preventDefault(),
          },
          a || t
        );
      }
      !(function (e) {
        (e[(e.PlusValue = 0)] = "PlusValue"),
          (e[(e.IncDec = 1)] = "IncDec"),
          (e[(e.Clear = 2)] = "Clear"),
          (e[(e.Default = 3)] = "Default");
      })(s || (s = {}));
    },
    820660: (e, t, i) => {
      "use strict";
      i.d(t, { useEnterAndSpaceKeyDownHandler: () => o });
      var s = i(50959),
        r = i(930202);
      function o(e, t) {
        return (0, s.useCallback)(
          (i) => {
            t?.stopAllPropagation && i.stopPropagation();
            const s = (0, r.hashFromEvent)(i);
            (13 !== s && 32 !== s) ||
              (i.stopPropagation(), i.preventDefault(), e?.());
          },
          [e]
        );
      }
    },
    651674: (e, t, i) => {
      "use strict";
      i.d(t, { createReactRoot: () => c });
      var s = i(50959),
        r = i(632227),
        o = i(904237);
      const n = (0, s.createContext)({
        isOnMobileAppPage: () => !1,
        isRtl: !1,
        locale: "en",
      });
      var a = i(69111),
        l = i(431520);
      const d = {
        iOs: "old",
        android: "new",
        old: "old",
        new: "new",
        any: "any",
      };
      function u(e) {
        const [t] = (0, s.useState)({
          isOnMobileAppPage: (e) => (0, a.isOnMobileAppPage)(d[e]),
          isRtl: (0, l.isRtl)(),
          locale: window.locale,
        });
        return s.createElement(n.Provider, { value: t }, e.children);
      }
      function c(e, t, i = "legacy") {
        const n = s.createElement(u, null, e);
        if ("modern" === i) {
          const e = (0, o.createRoot)(t);
          return (
            e.render(n),
            {
              render(t) {
                e.render(s.createElement(u, null, t));
              },
              unmount() {
                e.unmount();
              },
            }
          );
        }
        return (
          r.render(n, t),
          {
            render(e) {
              r.render(s.createElement(u, null, e), t);
            },
            unmount() {
              r.unmountComponentAtNode(t);
            },
          }
        );
      }
    },
    909702: (e, t, i) => {
      "use strict";
      i.d(t, {
        alertSounds: () => p,
        enableAlertSoundsForMobile: () => y,
        onStopped: () => b,
        play: () => _,
        stop: () => g,
      });
      var s = i(609838),
        r = i(69111),
        o = i(671945),
        n = i(240534);
      const a = i.p + "alarm_clock.6f8cd36a9014a21689b4.mp3";
      var l;
      !(function (e) {
        (e.Classic = "classic"),
          (e.Soft = "soft"),
          (e.Nature = "nature"),
          (e.Voices = "voices"),
          (e.Funny = "funny");
      })(l || (l = {}));
      const d = (0, o.getLogger)("Lib.Sound", { color: "#dea433" }),
        u = { sound: "notification/notification", alert: "alert/fired" },
        c = [
          {
            title: s.t(null, void 0, i(510526)),
            path: "alert/alarm_clock",
            soundForAlerts: !0,
            filePath: a,
            group: l.Classic,
          },
        ];
      const h = {};
      function p() {
        return c.filter((e) => !!e.soundForAlerts && e.group === l.Classic);
      }
      function _(e = u.sound, t, i) {
        if ((0, r.isOnMobileAppPage)("any")) return Promise.resolve();
        d.logNormal(`Sound play attempt for "${e}" duration-${t || 0}s;`);
        return v(e).play(t, i);
      }
      function g(e, t = !1) {
        if ((0, r.isOnMobileAppPage)("any")) return;
        let i = [];
        e ? i.push(v(e)) : (i = Object.values(h)),
          i.forEach((e) => {
            e.stop(t);
          });
      }
      function b(e, t) {
        (0, r.isOnMobileAppPage)("any") ||
          v(e).playing.subscribe(
            (e) => {
              e || t();
            },
            { once: !0 }
          );
      }
      function y() {
        m(p().map((e) => e.path));
      }
      function m(e) {
        if ((0, r.isOnMobileAppPage)("any")) return;
        if (!e) return;
        if (
          !/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(
            window.navigator.userAgent
          )
        )
          return;
        if (
          (Array.isArray(e) || (e = [e]),
          0 ===
            (e = e.filter((e) => {
              const t = v(e);
              return (
                !(!t || !t.el.load || t._mobilePreloadActive) &&
                ((t._mobilePreloadActive = !0), !0)
              );
            })).length)
        )
          return void d.logNormal("enableForMobile no sounds passed");
        const t = () => {
            const s = [];
            Array.isArray(e) &&
              e.forEach((e) => {
                const t = v(e);
                t.el.load();
                const i = t.play().catch((e) => {
                  if ("AbortError" !== e.name)
                    throw (
                      (d.logError(
                        `enableForMobile for "${t.el.src}" preload error: - ${e.message}`
                      ),
                      e)
                    );
                });
                t.el.pause(), s.push(i);
              }),
              Promise.all(s).then(() => {
                d.logNormal("enableForMobile sounds initialized");
              }),
              i.forEach((e) => {
                document.removeEventListener(e, t, !0);
              });
          },
          i = ["click", "touchend", "keydown"];
        i.forEach((e) => {
          document.addEventListener(e, t, !0);
        });
      }
      const v = (e) => {
        if (e in h) return h[e];
        d.logNormal(
          `requested sound  ${e} not cached, building a new audio element`
        );
        const t = c.find((t) => t.path === e);
        if (void 0 === t) throw new Error(`Cannot find sound "${e}"`);
        const i = new Audio(t.filePath),
          s = new n.WatchedValue(t.soundForAlerts ? 0.5 : 1);
        let r = s;
        const o = () => {
            (i.volume = r.value()),
              d.logNormal(`Volume for sound ${e} is set to ${i.volume}`);
          },
          a = () => {
            r.unsubscribe(o), (r = s), o();
          };
        o();
        const l = {
          el: i,
          playing: new n.WatchedValue(!1),
          play: (t = 0, i) =>
            l.playing.value()
              ? (d.logNormal("sound already playing"),
                Promise.reject("already playing"))
              : (l.playing.setValue(!0),
                new Promise((s, n) => {
                  let a = t > 0;
                  const u = () => {
                    const t = (function (e) {
                      try {
                        d.logNormal(
                          `"${e.el.src}" triggering html5 play method, readyState - ${e.el.readyState}; muted - ${e.el.muted}; volume - ${e.el.volume}; currentTime - ${e.el.currentTime}`
                        );
                        let t = e.el.play();
                        return t || (t = Promise.resolve()), t;
                      } catch (t) {
                        return (
                          d.logError(
                            `play method for "${e.el.src}" catch error - ${t.message}`
                          ),
                          Promise.reject(t)
                        );
                      }
                    })(l);
                    t.catch((t) => {
                      d.logNormal(
                        `stop counting sound "${e}"; as playing due to an error: ${t.message}`
                      ),
                        l.stop(),
                        n(t);
                    });
                  };
                  (l._onEnded = () => {
                    a ? u() : (l.stop(), s());
                  }),
                    l.el.addEventListener("ended", l._onEnded),
                    a &&
                      setTimeout(() => {
                        d.logNormal(`"${e}" repeat timeout - ${t}s off`),
                          (a = !1);
                      }, 1e3 * t),
                    i &&
                      ((e) => {
                        r.unsubscribe(o), (r = e), r.subscribe(o), o();
                      })(i),
                    u();
                }).finally(a)),
          stop: (e = !1) => {
            l.el.pause(),
              e && (l.el.currentTime = 0),
              l.playing.setValue(!1),
              l._onEnded && l.el.removeEventListener("ended", l._onEnded);
          },
        };
        h[e] = l;
        return (
          ["canplaythrough", "error"].forEach((t) => {
            i.addEventListener(
              t,
              () => {
                d.logNormal(`for sound "${e}", event - ${t} is fired`);
              },
              !1
            );
          }),
          d.logNormal(`canPlayType - ${i.canPlayType("audio/mp3")}`),
          h[e]
        );
      };
      m(c.filter((e) => !!e.common).map((e) => e.path));
    },
    650733: (e, t, i) => {
      "use strict";
      i.d(t, {
        batsToRealtimeCrucialHtml: () => k,
        batsToRealtimeHtml1: () => v,
        batsToRealtimeHtml2WithExchange: () => P,
        batsToRealtimeHtml2WithoutExchange: () => f,
        delayHtml: () => u,
        delayNoRealtimeHtml: () => p,
        delayToRealtimeHtml: () => h,
        delayTooltip: () => o,
        delayWithoutMarketAgreement: () => m,
        eodHtml: () => _,
        eodTooltip: () => n,
        exchangeByOriginalExchangeTooltip: () => d,
        notAccurate1PerSecondTooltip: () => a,
        notAccurateCboeTooltip: () => l,
        rtFreeForRegisteredUsersHtml: () => c,
        tickByTickHtml1: () => b,
        tickByTickHtml1FullInfo: () => g,
        tickByTickHtml2: () => y,
      });
      var s = i(609838),
        r = i(871645);
      const o = s.t(null, void 0, i(543348)),
        n = s.t(null, void 0, i(705805)),
        a = s.t(null, void 0, i(991006)),
        l = s.t(null, void 0, i(58796)),
        d = s.t(null, void 0, i(655154)),
        u =
          (s.t(null, void 0, i(944138)),
          s.t(null, void 0, i(994972)),
          s.t(null, void 0, i(295246)),
          s.t(null, void 0, i(50035)),
          s.t(null, void 0, i(619481)),
          s.t(null, void 0, i(675119)),
          s.t(null, void 0, i(667607)),
          s.t(null, void 0, i(484484)),
          (e, t) =>
            (0, r.htmlEscape)(
              s.t(
                null,
                {
                  plural:
                    "{symbolName} data is delayed by {time} minutes because of exchange requirements.",
                  count: t,
                  replace: { symbolName: e, time: t.toString() },
                },
                i(881227)
              )
            )),
        c = (0, r.htmlEscape)(s.t(null, void 0, i(651211))),
        h = (0, r.htmlEscape)(s.t(null, void 0, i(807281))),
        p = (0, r.htmlEscape)(s.t(null, void 0, i(920987))),
        _ = (0, r.htmlEscape)(s.t(null, void 0, i(932925))),
        g = (0, r.htmlEscape)(s.t(null, void 0, i(138368))),
        b = (0, r.htmlEscape)(s.t(null, void 0, i(833039))),
        y = (0, r.htmlEscape)(s.t(null, void 0, i(23998))),
        m = (0, r.htmlEscape)(s.t(null, void 0, i(195400))),
        v = s.t(null, void 0, i(131539)),
        f =
          (s.t(
            null,
            {
              context:
                'Part of: "Real-time data for {symbolName} is provided by {exchange} exchange."',
            },
            i(348473)
          ),
          s.t(
            null,
            {
              context:
                'Part of: "Real-time data for {symbolName} is provided by {exchange} exchange."',
            },
            i(684455)
          ),
          s.t(null, void 0, i(624669))),
        P = s.t(null, void 0, i(352668)),
        k = s.t(null, void 0, i(344492));
      s.t(null, void 0, i(840225)),
        s.t(null, void 0, i(871847)),
        s.t(null, void 0, i(439664)),
        s.t(null, void 0, i(172723)),
        s.t(null, void 0, i(925608)),
        s.t(null, void 0, i(733161)),
        s.t(null, void 0, i(199452)),
        s.t(null, void 0, i(90589)),
        s.t(null, void 0, i(443383)),
        s.t(null, void 0, i(414181)),
        s.t(null, void 0, i(419679)),
        s.t(null, void 0, i(284937)),
        s.t(null, void 0, i(934987)),
        s.t(null, void 0, i(759269)),
        s.t(null, void 0, i(801356)),
        s.t(null, void 0, i(396341));
    },
    190787: (e, t, i) => {
      "use strict";
      function s(e, t) {
        null === e.firstChild
          ? (e.textContent = t)
          : (e.firstChild.nodeValue = t);
      }
      i.d(t, { updateTextNode: () => s });
    },
    996038: (e, t, i) => {
      "use strict";
      i.d(t, { DialogBreakpoints: () => r });
      var s = i(896108);
      const r = {
        SmallHeight: s["small-height-breakpoint"],
        TabletSmall: s["tablet-small-breakpoint"],
        TabletNormal: s["tablet-normal-breakpoint"],
      };
    },
    533408: (e, t, i) => {
      "use strict";
      i.d(t, { AdaptivePopupDialog: () => M });
      var s = i(50959),
        r = i(650151),
        o = i(497754),
        n = i.n(o),
        a = i(180185),
        l = i(431520),
        d = i(698043),
        u = i(59216),
        c = i(494707),
        h = i(996038),
        p = i(930052),
        _ = i(910549);
      var g = i(206594),
        b = i(559410),
        y = i(609838),
        m = i(389986),
        v = i(190410),
        f = i(710326);
      function P(e) {
        const {
            titleId: t,
            title: r,
            titleTextWrap: o = !1,
            subtitle: a,
            showCloseIcon: l = !0,
            onClose: d,
            onCloseButtonKeyDown: u,
            renderBefore: c,
            renderAfter: h,
            draggable: p,
            className: _,
            unsetAlign: g,
            closeAriaLabel: b = y.t(null, void 0, i(47742)),
            closeButtonReference: P,
          } = e,
          [k, S] = (0, s.useState)(!1);
        return s.createElement(
          v.DialogHeaderContext.Provider,
          { value: { setHideClose: S } },
          s.createElement(
            "div",
            { className: n()(f.container, _, (a || g) && f.unsetAlign) },
            c,
            s.createElement(
              "div",
              { id: t, className: f.title, "data-dragg-area": p },
              s.createElement(
                "div",
                { className: n()(o ? f.textWrap : f.ellipsis) },
                r
              ),
              a &&
                s.createElement(
                  "div",
                  { className: n()(f.ellipsis, f.subtitle) },
                  a
                )
            ),
            h,
            l &&
              !k &&
              s.createElement(m.CloseButton, {
                className: f.close,
                "data-name": "close",
                "aria-label": b,
                onClick: d,
                onKeyDown: u,
                ref: P,
                size: "medium",
                preservePaddings: !0,
              })
          )
        );
      }
      var k = i(273388),
        S = i(800417),
        C = i(924910),
        w = i(440891),
        T = i(577508);
      const B = { vertical: 20 },
        O = { vertical: 0 };
      class M extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._controller = null),
            (this._reference = null),
            (this._orientationMediaQuery = null),
            (this._embedResizerOverridesEnabled = w.enabled(
              "embed_resizer_overrides"
            )),
            (this._titleId = `title_${(0, C.randomHash)()}`),
            (this._renderChildren = (e, t) => (
              (this._controller = e),
              this.props.render({
                requestResize: this._requestResize,
                centerAndFit: this._centerAndFit,
                isSmallWidth: t,
              })
            )),
            (this._handleReference = (e) => (this._reference = e)),
            (this._handleCloseBtnClick = () => {
              this.props.onKeyboardClose && this.props.onKeyboardClose(),
                this._handleClose();
            }),
            (this._handleClose = () => {
              this.props.onClose();
            }),
            (this._handleOpen = () => {
              void 0 !== this.props.onOpen &&
                this.props.isOpened &&
                this.props.onOpen(
                  this.props.fullScreen ||
                    window.matchMedia(h.DialogBreakpoints.TabletSmall).matches
                );
            }),
            (this._handleKeyDown = (e) => {
              if (!e.defaultPrevented) {
                if (
                  (this.props.onKeyDown && this.props.onKeyDown(e),
                  27 === (0, a.hashFromEvent)(e))
                ) {
                  if (e.defaultPrevented) return;
                  if (
                    this.props.forceCloseOnEsc &&
                    this.props.forceCloseOnEsc()
                  )
                    return (
                      this.props.onKeyboardClose &&
                        this.props.onKeyboardClose(),
                      void this._handleClose()
                    );
                  const { activeElement: i } = document;
                  if (null !== i) {
                    if (
                      (e.preventDefault(),
                      "true" === (t = i).getAttribute("data-haspopup") &&
                        "true" !== t.getAttribute("data-expanded"))
                    )
                      return void this._handleClose();
                    const s = this._reference;
                    if (null !== s && (0, d.isTextEditingField)(i))
                      return void s.focus();
                    if (s?.contains(i))
                      return (
                        this.props.onKeyboardClose &&
                          this.props.onKeyboardClose(),
                        void this._handleClose()
                      );
                  }
                }
                var t, i;
                (function (e) {
                  if ("function" == typeof e) return e();
                  return Boolean(e);
                })(this.props.disableTabNavigationContainment) ||
                  ((i = e),
                  [9, a.Modifiers.Shift + 9].includes(
                    (0, a.hashFromEvent)(i)
                  ) && i.stopPropagation());
              }
            }),
            (this._requestResize = () => {
              null !== this._controller && this._controller.recalculateBounds();
            }),
            (this._centerAndFit = () => {
              null !== this._controller && this._controller.centerAndFit();
            }),
            (this._calculatePositionWithOffsets = (e, t) => {
              const i = (0, r.ensureDefined)(
                this.props.fullScreenViewOffsets
              ).value();
              return {
                top: i.top,
                left: (0, l.isRtl)() ? -i.right : i.left,
                width: t.clientWidth - i.left - i.right,
                height: t.clientHeight - i.top - i.bottom,
              };
            });
        }
        componentDidMount() {
          this.props.ignoreClosePopupsAndDialog ||
            b.subscribe(
              g.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
              this._handleClose,
              null
            ),
            this._handleOpen(),
            void 0 !== this.props.onOpen &&
              ((this._orientationMediaQuery = window.matchMedia(
                "(orientation: portrait)"
              )),
              this._orientationMediaQuery.addEventListener(
                "change",
                this._handleOpen
              )),
            this.props.fullScreenViewOffsets &&
              this.props.fullScreen &&
              this.props.fullScreenViewOffsets.subscribe(this._requestResize);
          const {
            backdrop: e,
            draggable: t = !e,
            centerOnResize: i = !t,
          } = this.props;
          i && window.addEventListener("resize", this._centerAndFit);
        }
        componentWillUnmount() {
          this.props.ignoreClosePopupsAndDialog ||
            b.unsubscribe(
              g.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
              this._handleClose,
              null
            ),
            null !== this._orientationMediaQuery &&
              this._orientationMediaQuery.removeEventListener(
                "change",
                this._handleOpen
              ),
            this.props.fullScreenViewOffsets &&
              this.props.fullScreen &&
              this.props.fullScreenViewOffsets.unsubscribe(this._requestResize),
            window.removeEventListener("resize", this._centerAndFit);
        }
        focus() {
          (0, r.ensureNotNull)(this._reference).focus();
        }
        getElement() {
          return this._reference;
        }
        contains(e) {
          return this._reference?.contains(e) ?? !1;
        }
        render() {
          const {
              className: e,
              wrapperClassName: t,
              headerClassName: i,
              isOpened: r,
              title: o,
              titleTextWrap: a,
              dataName: l,
              onClickOutside: d,
              additionalElementPos: g,
              additionalHeaderElement: b,
              backdrop: y,
              shouldForceFocus: m = !0,
              shouldReturnFocus: v,
              onForceFocus: f,
              showSeparator: C,
              subtitle: w,
              draggable: M = !y,
              fullScreen: I = !1,
              showCloseIcon: E = !0,
              rounded: D = !0,
              isAnimationEnabled: V,
              growPoint: $,
              dialogTooltip: L,
              unsetHeaderAlign: x,
              onDragStart: A,
              dataDialogName: R,
              closeAriaLabel: F,
              containerAriaLabel: N,
              reference: q,
              containerTabIndex: Q,
              closeButtonReference: W,
              onCloseButtonKeyDown: U,
              shadowed: z,
              fullScreenViewOffsets: j,
              fixedBody: H,
              onClick: G,
            } = this.props,
            K = "after" !== g ? b : void 0,
            Y = "after" === g ? b : void 0,
            X = "string" == typeof o ? o : R || "",
            Z = (0, S.filterDataProps)(this.props),
            J = (0, k.mergeRefs)([this._handleReference, q]);
          return s.createElement(
            p.MatchMedia,
            { rule: h.DialogBreakpoints.SmallHeight },
            (g) =>
              s.createElement(
                p.MatchMedia,
                { rule: h.DialogBreakpoints.TabletSmall },
                (h) =>
                  s.createElement(
                    u.PopupDialog,
                    {
                      rounded: !(h || I) && D,
                      className: n()(T.dialog, I && j && T.bounded, e),
                      isOpened: r,
                      reference: J,
                      onKeyDown: this._handleKeyDown,
                      onClickOutside: d,
                      onClickBackdrop: d,
                      fullscreen: h || I,
                      guard: g ? O : B,
                      boundByScreen: h || I,
                      shouldForceFocus: m,
                      onForceFocus: f,
                      shouldReturnFocus: v,
                      backdrop: y,
                      draggable: M,
                      isAnimationEnabled: V,
                      growPoint: $,
                      name: this.props.dataName,
                      dialogTooltip: L,
                      onDragStart: A,
                      containerAriaLabel: N,
                      containerTabIndex: Q,
                      calculateDialogPosition:
                        I && j ? this._calculatePositionWithOffsets : void 0,
                      shadowed: z,
                      fixedBody: H,
                      onClick: G,
                      ...Z,
                    },
                    s.createElement(
                      "div",
                      {
                        role: "dialog",
                        "aria-labelledby":
                          void 0 !== o ? this._titleId : void 0,
                        className: n()(T.wrapper, t),
                        "data-name": l,
                        "data-dialog-name": X,
                      },
                      void 0 !== o &&
                        s.createElement(P, {
                          draggable: M && !(h || I),
                          onClose: this._handleCloseBtnClick,
                          renderAfter: Y,
                          renderBefore: K,
                          subtitle: w,
                          title: o,
                          titleId: this._titleId,
                          titleTextWrap: a,
                          showCloseIcon: E,
                          className: i,
                          unsetAlign: x,
                          closeAriaLabel: F,
                          closeButtonReference: W,
                          onCloseButtonKeyDown: U,
                        }),
                      C &&
                        s.createElement(c.Separator, {
                          className: T.separator,
                        }),
                      s.createElement(_.PopupContext.Consumer, null, (e) =>
                        this._renderChildren(e, h || I)
                      )
                    )
                  )
              )
          );
        }
      }
    },
    190410: (e, t, i) => {
      "use strict";
      i.d(t, { DialogHeaderContext: () => s });
      const s = i(50959).createContext({ setHideClose: () => {} });
    },
    910549: (e, t, i) => {
      "use strict";
      i.d(t, { PopupContext: () => s });
      const s = i(50959).createContext(null);
    },
    59216: (e, t, i) => {
      "use strict";
      i.d(t, { PopupDialog: () => I });
      var s,
        r = i(50959),
        o = i(497754),
        n = i(650151),
        a = i(80137),
        l = i(874485),
        d = i(738036),
        u = i(822960),
        c = i(32556);
      function h(e, t, i, s) {
        return e + t > s && (e = s - t), e < i && (e = i), e;
      }
      function p(e) {
        return {
          x: (0, u.clamp)(e.x, 20, document.documentElement.clientWidth - 20),
          y: (0, u.clamp)(e.y, 20, window.innerHeight - 20),
        };
      }
      function _(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function g(e) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      !(function (e) {
        e[(e.MouseGuardZone = 20)] = "MouseGuardZone";
      })(s || (s = {}));
      class b {
        constructor(e, t, i = { boundByScreen: !0 }) {
          (this._drag = null),
            (this._canBeTouchClick = !1),
            (this._frame = null),
            (this._onMouseDragStart = (e) => {
              if (0 !== e.button || this._isTargetNoDraggable(e)) return;
              e.preventDefault(),
                document.addEventListener("mousemove", this._onMouseDragMove),
                document.addEventListener("mouseup", this._onMouseDragEnd);
              const t = p(_(e));
              this._dragStart(t);
            }),
            (this._onTouchDragStart = (e) => {
              if (this._isTargetNoDraggable(e)) return;
              (this._canBeTouchClick = !0),
                e.preventDefault(),
                this._header.addEventListener(
                  "touchmove",
                  this._onTouchDragMove,
                  { passive: !1 }
                );
              const t = p(g(e));
              this._dragStart(t);
            }),
            (this._onMouseDragEnd = (e) => {
              e.target instanceof Node &&
                this._header.contains(e.target) &&
                e.preventDefault(),
                document.removeEventListener(
                  "mousemove",
                  this._onMouseDragMove
                ),
                document.removeEventListener("mouseup", this._onMouseDragEnd),
                this._onDragStop();
            }),
            (this._onTouchDragEnd = (e) => {
              this._header.removeEventListener(
                "touchmove",
                this._onTouchDragMove
              ),
                this._onDragStop(),
                this._canBeTouchClick &&
                  ((this._canBeTouchClick = !1),
                  (function (e) {
                    if (e instanceof SVGElement) {
                      const t = document.createEvent("SVGEvents");
                      t.initEvent("click", !0, !0), e.dispatchEvent(t);
                    }
                    e instanceof HTMLElement && e.click();
                  })(e.target));
            }),
            (this._onMouseDragMove = (e) => {
              const t = p(_(e));
              this._dragMove(t);
            }),
            (this._onTouchDragMove = (e) => {
              (this._canBeTouchClick = !1), e.preventDefault();
              const t = p(g(e));
              this._dragMove(t);
            }),
            (this._onDragStop = () => {
              (this._drag = null),
                this._header.classList.remove("dragging"),
                this._options.onDragEnd && this._options.onDragEnd();
            }),
            (this._dialog = e),
            (this._header = t),
            (this._options = i),
            this._header.addEventListener("mousedown", this._onMouseDragStart),
            this._header.addEventListener("touchstart", this._onTouchDragStart),
            this._header.addEventListener("touchend", this._onTouchDragEnd);
        }
        destroy() {
          null !== this._frame && cancelAnimationFrame(this._frame),
            this._header.removeEventListener(
              "mousedown",
              this._onMouseDragStart
            ),
            document.removeEventListener("mouseup", this._onMouseDragEnd),
            this._header.removeEventListener(
              "touchstart",
              this._onTouchDragStart
            ),
            this._header.removeEventListener("touchend", this._onTouchDragEnd),
            document.removeEventListener("mouseleave", this._onMouseDragEnd);
        }
        updateOptions(e) {
          this._options = e;
        }
        _dragStart(e) {
          const t = this._dialog.getBoundingClientRect();
          this._drag = {
            startX: e.x,
            startY: e.y,
            finishX: e.x,
            finishY: e.y,
            dialogX: t.left,
            dialogY: t.top,
          };
          const i = Math.round(t.left),
            s = Math.round(t.top);
          (this._dialog.style.transform = `translate(${i}px, ${s}px)`),
            this._header.classList.add("dragging"),
            this._options.onDragStart && this._options.onDragStart();
        }
        _dragMove(e) {
          if (this._drag) {
            if (
              ((this._drag.finishX = e.x),
              (this._drag.finishY = e.y),
              null !== this._frame)
            )
              return;
            this._frame = requestAnimationFrame(() => {
              if (this._drag) {
                const t = e.x - this._drag.startX,
                  i = e.y - this._drag.startY;
                this._moveDialog(
                  this._drag.dialogX + t,
                  this._drag.dialogY + i
                );
              }
              this._frame = null;
            });
          }
        }
        _moveDialog(e, t) {
          const i = this._dialog.getBoundingClientRect(),
            { boundByScreen: s } = this._options,
            r = h(e, i.width, s ? 0 : -1 / 0, s ? window.innerWidth : 1 / 0),
            o = h(t, i.height, s ? 0 : -1 / 0, s ? window.innerHeight : 1 / 0);
          this._dialog.style.transform = `translate(${Math.round(
            r
          )}px, ${Math.round(o)}px)`;
        }
        _isTargetNoDraggable(e) {
          return (
            e.target instanceof Element &&
            null !== e.target.closest("[data-disable-drag]")
          );
        }
      }
      const y = { vertical: 0 };
      var m,
        v = i(8361),
        f = i(910549),
        P = i(285089),
        k = i(671945),
        S = i(924910);
      !(function (e) {
        (e.Open = "dialog-open"),
          (e.Close = "dialog-close"),
          (e.FullscreenOn = "dialog-fullscreen-on"),
          (e.FullscreenOff = "dialog-fullscreen-off");
      })(m || (m = {}));
      const C = (0, k.getLogger)("DialogEventDispatcher");
      class w {
        constructor() {
          this._openSessionId = null;
        }
        dispatch(e) {
          if ("dialog-open" === e) {
            if (null !== this._openSessionId)
              return void C.logError("Multiple calls to open dialog");
            this._openSessionId = (0, S.randomHash)();
          }
          null !== this._openSessionId
            ? (window.dispatchEvent(
                new CustomEvent(e, {
                  bubbles: !0,
                  detail: { dialogSessionId: this._openSessionId },
                })
              ),
              "dialog-close" === e && (this._openSessionId = null))
            : C.logError("Empty open dialog session id");
        }
      }
      var T = i(69111),
        B = (i(440891), i(513100));
      B["tooltip-offset"];
      const O = class {
        constructor(e, t) {
          (this._frame = null),
            (this._isFullscreen = !1),
            (this._handleResize = () => {
              null === this._frame &&
                (this._frame = requestAnimationFrame(() => {
                  this.recalculateBounds(), (this._frame = null);
                }));
            }),
            (this._dialog = e),
            (this._guard = t.guard || y),
            (this._calculateDialogPosition = t.calculateDialogPosition),
            (this._initialHeight = e.style.height),
            window.addEventListener("resize", this._handleResize);
        }
        updateOptions(e) {
          (this._guard = e.guard || y),
            (this._calculateDialogPosition = e.calculateDialogPosition);
        }
        setFullscreen(e) {
          this._isFullscreen !== e &&
            ((this._isFullscreen = e), this.recalculateBounds());
        }
        centerAndFit() {
          const { x: e, y: t } = this.getDialogsTopLeftCoordinates(),
            i = this._calcAvailableHeight(),
            s = this._calcDialogHeight();
          if (i === s)
            if (this._calculateDialogPosition) {
              const { left: e, top: t } = this._calculateDialogPosition(
                this._dialog,
                document.documentElement,
                this._guard
              );
              this._dialog.style.transform = `translate(${Math.round(
                e
              )}px, ${Math.round(t)}px)`;
            } else this._dialog.style.height = s + "px";
          (this._dialog.style.top = "0px"),
            (this._dialog.style.left = "0px"),
            (this._dialog.style.transform = `translate(${e}px, ${t}px)`);
        }
        getDialogsTopLeftCoordinates() {
          const { clientWidth: e, clientHeight: t } =
              this._getClientDimensions(),
            i = this._calcDialogHeight(),
            s = e / 2 - this._dialog.clientWidth / 2,
            r = t / 2 - i / 2 + this._getTopOffset();
          return { x: Math.round(s), y: Math.round(r) };
        }
        recalculateBounds() {
          const { clientWidth: e, clientHeight: t } =
              this._getClientDimensions(),
            { vertical: i } = this._guard,
            s = this._calculateDialogPosition?.(
              this._dialog,
              { clientWidth: e, clientHeight: t },
              { vertical: i }
            );
          if (this._isFullscreen) {
            if (
              ((this._dialog.style.top = "0px"),
              (this._dialog.style.left = "0px"),
              (this._dialog.style.width = "100%"),
              (this._dialog.style.height = "100%"),
              (this._dialog.style.transform = "none"),
              s)
            ) {
              const { left: e, top: t, width: i, height: r } = s;
              (this._dialog.style.transform = `translate(${Math.round(
                e
              )}px, ${Math.round(t)}px)`),
                i &&
                  ((this._dialog.style.width = `${i}px`),
                  (this._dialog.style.minWidth = "unset")),
                r &&
                  ((this._dialog.style.height = `${r}px`),
                  (this._dialog.style.minHeight = "unset"));
            }
          } else if (s) {
            const { left: e, top: t } = s;
            this._dialog.style.transform = `translate(${Math.round(
              e
            )}px, ${Math.round(t)}px)`;
          } else {
            (this._dialog.style.width = ""), (this._dialog.style.height = "");
            const s = this._dialog.getBoundingClientRect(),
              r = t - 2 * i,
              o = h(s.left, s.width, 0, e),
              n = h(s.top, s.height, i, t);
            (this._dialog.style.top = "0px"),
              (this._dialog.style.left = "0px"),
              (this._dialog.style.transform = `translate(${Math.round(
                o
              )}px, ${Math.round(n)}px)`),
              (this._dialog.style.height =
                r < s.height ? r + "px" : this._initialHeight);
          }
        }
        destroy() {
          window.removeEventListener("resize", this._handleResize),
            null !== this._frame &&
              (cancelAnimationFrame(this._frame), (this._frame = null));
        }
        _getClientDimensions() {
          return {
            clientHeight: document.documentElement.clientHeight,
            clientWidth: document.documentElement.clientWidth,
          };
        }
        _getTopOffset() {
          return 0;
        }
        _calcDialogHeight() {
          const e = this._calcAvailableHeight();
          return e < this._dialog.clientHeight ? e : this._dialog.clientHeight;
        }
        _calcAvailableHeight() {
          return (
            this._getClientDimensions().clientHeight - 2 * this._guard.vertical
          );
        }
      };
      class M extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._dialog = null),
            (this._cleanUpFunctions = []),
            (this._prevActiveElement = null),
            (this._eventDispatcher = new w()),
            (this._handleDialogRef = (e) => {
              const { reference: t } = this.props;
              (this._dialog = e), "function" == typeof t && t(e);
            }),
            (this._handleFocus = () => {
              this._moveToTop();
            }),
            (this._handleMouseDown = (e) => {
              this._moveToTop();
            }),
            (this._handleTouchStart = (e) => {
              this._moveToTop();
            }),
            (this.state = { canFitTooltip: !1 }),
            (this._prevActiveElement = document.activeElement);
        }
        render() {
          return r.createElement(
            f.PopupContext.Provider,
            { value: this },
            r.createElement(
              d.OutsideEvent,
              {
                mouseDown: !0,
                touchStart: !0,
                handler: this.props.onClickOutside,
              },
              (e) =>
                r.createElement(
                  "div",
                  {
                    ref: e,
                    "data-outside-boundary-for": this.props.name,
                    onFocus: this._handleFocus,
                    onMouseDown: this._handleMouseDown,
                    onTouchStart: this._handleTouchStart,
                    "data-dialog-name": this.props["data-dialog-name"],
                    "data-tooltip-show-on-focus": "true",
                  },
                  r.createElement(
                    a.Dialog,
                    {
                      style: this._applyAnimationCSSVariables(),
                      ...this.props,
                      reference: this._handleDialogRef,
                      className: o(
                        B.dialog,
                        (0, T.isOnMobileAppPage)("any") &&
                          !this.props.noMobileAppShadows &&
                          B.mobile,
                        this.props.fullscreen && B.fullscreen,
                        this.props.className
                      ),
                    },
                    !1,
                    this.props.children
                  )
                )
            )
          );
        }
        componentDidMount() {
          const { draggable: e, boundByScreen: t, onDragStart: i } = this.props,
            s = (0, n.ensureNotNull)(this._dialog);
          if ((this._eventDispatcher.dispatch("dialog-open"), e)) {
            const e = s.querySelector("[data-dragg-area]");
            if (e && e instanceof HTMLElement) {
              const r = new b(s, e, {
                boundByScreen: Boolean(t),
                onDragStart: i,
              });
              this._cleanUpFunctions.push(() => r.destroy()), (this._drag = r);
            }
          }
          this.props.autofocus &&
            !s.contains(document.activeElement) &&
            s.focus(),
            (this._isFullScreen() || this.props.fixedBody) &&
              (0, P.setFixedBodyState)(!0);
          const { guard: r, calculateDialogPosition: o } = this.props;
          if (this.props.resizeHandler) this._resize = this.props.resizeHandler;
          else {
            const e = new O(s, { guard: r, calculateDialogPosition: o });
            this._cleanUpFunctions.push(() => e.destroy()), (this._resize = e);
          }
          if (
            (this._isFullScreen() &&
              this._eventDispatcher.dispatch("dialog-fullscreen-on"),
            this.props.isAnimationEnabled &&
              this.props.growPoint &&
              this._applyAppearanceAnimation(this.props.growPoint),
            this.props.centeredOnMount && this._resize.centerAndFit(),
            this._resize.setFullscreen(this._isFullScreen()),
            this.props.shouldForceFocus)
          ) {
            if (this.props.onForceFocus) return void this.props.onForceFocus(s);
            s.focus();
          }
          if (!s.contains(document.activeElement)) {
            const e = (function (e) {
              const t = e.querySelector("[autofocus]:not([disabled])");
              if (t) return t;
              if (e.tabIndex >= 0) return e;
              const i = (0, c.getActiveElementSelectors)(),
                s = Array.from(e.querySelectorAll(i)).filter(
                  (0, c.createScopedVisibleElementFilter)(e)
                );
              let r = Number.NEGATIVE_INFINITY,
                o = null;
              for (let e = 0; e < s.length; e++) {
                const t = s[e],
                  i = t.getAttribute("tabindex");
                if (null !== i) {
                  const e = parseInt(i, 10);
                  !isNaN(e) && e > r && ((r = e), (o = t));
                }
              }
              return o;
            })(s);
            e instanceof HTMLElement && e.focus();
          }
        }
        componentDidUpdate(e) {
          const t = e.fullscreen;
          if (this._resize) {
            const { guard: e, calculateDialogPosition: t } = this.props;
            this._resize.updateOptions({
              guard: e,
              calculateDialogPosition: t,
            }),
              this._resize.setFullscreen(this._isFullScreen());
          }
          if (
            (this._drag &&
              this._drag.updateOptions({
                boundByScreen: Boolean(this.props.boundByScreen),
                onDragStart: this.props.onDragStart,
              }),
            e.fullscreen !== this.props.fullscreen)
          ) {
            const e = this.props.fullscreen;
            e && !t
              ? this._eventDispatcher.dispatch("dialog-fullscreen-on")
              : !e &&
                t &&
                this._eventDispatcher.dispatch("dialog-fullscreen-off");
          }
        }
        componentWillUnmount() {
          if (
            this.props.shouldReturnFocus &&
            this._prevActiveElement &&
            document.body.contains(this._prevActiveElement) &&
            (null === document.activeElement ||
              document.activeElement === document.body ||
              this._dialog?.contains(document.activeElement))
          )
            try {
              setTimeout(() => {
                this._prevActiveElement.focus({ preventScroll: !0 });
              });
            } catch {}
          for (const e of this._cleanUpFunctions) e();
          (this._isFullScreen() || this.props.fixedBody) &&
            (0, P.setFixedBodyState)(!1),
            this._isFullScreen() &&
              this._eventDispatcher.dispatch("dialog-fullscreen-off"),
            this._eventDispatcher.dispatch("dialog-close");
        }
        focus() {
          this._dialog && this._dialog.focus();
        }
        centerAndFit() {
          this._resize && this._resize.centerAndFit();
        }
        recalculateBounds() {
          this._resize && this._resize.recalculateBounds();
        }
        _moveToTop() {
          this.props.isZIndexFixed ||
            (null !== this.context && this.context.moveToTop());
        }
        _applyAnimationCSSVariables() {
          return {
            "--animationTranslateStartX": null,
            "--animationTranslateStartY": null,
            "--animationTranslateEndX": null,
            "--animationTranslateEndY": null,
          };
        }
        _applyAppearanceAnimation(e) {
          if (this._resize && this._dialog) {
            const { x: t, y: i } = e,
              { x: s, y: r } = this._resize.getDialogsTopLeftCoordinates();
            this._dialog.style.setProperty(
              "--animationTranslateStartX",
              `${t}px`
            ),
              this._dialog.style.setProperty(
                "--animationTranslateStartY",
                `${i}px`
              ),
              this._dialog.style.setProperty(
                "--animationTranslateEndX",
                `${s}px`
              ),
              this._dialog.style.setProperty(
                "--animationTranslateEndY",
                `${r}px`
              ),
              this._dialog.classList.add(B.dialogAnimatedAppearance);
          }
        }
        _handleTooltipFit() {
          0;
        }
        _isFullScreen() {
          return Boolean(this.props.fullscreen);
        }
      }
      (M.contextType = v.PortalContext),
        (M.defaultProps = {
          boundByScreen: !0,
          draggable: !0,
          centeredOnMount: !0,
          shouldReturnFocus: !0,
        });
      const I = (0, l.makeOverlapable)(M, !0);
    },
    494707: (e, t, i) => {
      "use strict";
      i.d(t, { Separator: () => n });
      var s = i(50959),
        r = i(497754),
        o = i(536204);
      function n(e) {
        return s.createElement("div", {
          className: r(o.separator, e.className),
        });
      }
    },
    874485: (e, t, i) => {
      "use strict";
      i.d(t, { makeOverlapable: () => o });
      var s = i(50959),
        r = i(8361);
      function o(e, t) {
        return class extends s.PureComponent {
          render() {
            const { isOpened: i, root: o } = this.props;
            if (!i) return null;
            const n = s.createElement(e, {
              ...this.props,
              ref: this.props.componentRef,
              zIndex: 150,
            });
            return "parent" === o
              ? n
              : s.createElement(r.Portal, { shouldTrapFocus: t }, n);
          }
        };
      }
    },
    132455: (e, t, i) => {
      "use strict";
      i.d(t, { Spinner: () => s.Spinner });
      var s = i(672511);
    },
    904237: (e, t, i) => {
      "use strict";
      var s = i(632227);
      (t.createRoot = s.createRoot), s.hydrateRoot;
    },
    265728: (e, t, i) => {
      "use strict";
      i.d(t, { ReplaySubject: () => n });
      var s = i(446685),
        r = i(737538),
        o = i(712813),
        n = (function (e) {
          function t(t, i, s) {
            void 0 === t && (t = 1 / 0),
              void 0 === i && (i = 1 / 0),
              void 0 === s && (s = o.dateTimestampProvider);
            var r = e.call(this) || this;
            return (
              (r._bufferSize = t),
              (r._windowTime = i),
              (r._timestampProvider = s),
              (r._buffer = []),
              (r._infiniteTimeWindow = !0),
              (r._infiniteTimeWindow = i === 1 / 0),
              (r._bufferSize = Math.max(1, t)),
              (r._windowTime = Math.max(1, i)),
              r
            );
          }
          return (
            (0, s.__extends)(t, e),
            (t.prototype.next = function (t) {
              var i = this,
                s = i.isStopped,
                r = i._buffer,
                o = i._infiniteTimeWindow,
                n = i._timestampProvider,
                a = i._windowTime;
              s || (r.push(t), !o && r.push(n.now() + a)),
                this._trimBuffer(),
                e.prototype.next.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              this._throwIfClosed(), this._trimBuffer();
              for (
                var t = this._innerSubscribe(e),
                  i = this._infiniteTimeWindow,
                  s = this._buffer.slice(),
                  r = 0;
                r < s.length && !e.closed;
                r += i ? 1 : 2
              )
                e.next(s[r]);
              return this._checkFinalizedStatuses(e), t;
            }),
            (t.prototype._trimBuffer = function () {
              var e = this,
                t = e._bufferSize,
                i = e._timestampProvider,
                s = e._buffer,
                r = e._infiniteTimeWindow,
                o = (r ? 1 : 2) * t;
              if (
                (t < 1 / 0 && o < s.length && s.splice(0, s.length - o), !r)
              ) {
                for (
                  var n = i.now(), a = 0, l = 1;
                  l < s.length && s[l] <= n;
                  l += 2
                )
                  a = l;
                a && s.splice(0, a + 1);
              }
            }),
            t
          );
        })(r.Subject);
    },
    958261: (e, t, i) => {
      "use strict";
      i.d(t, { combineLatest: () => g });
      var s = i(815544),
        r = Array.isArray,
        o = Object.getPrototypeOf,
        n = Object.prototype,
        a = Object.keys;
      function l(e) {
        if (1 === e.length) {
          var t = e[0];
          if (r(t)) return { args: t, keys: null };
          if ((s = t) && "object" == typeof s && o(s) === n) {
            var i = a(t);
            return {
              args: i.map(function (e) {
                return t[e];
              }),
              keys: i,
            };
          }
        }
        var s;
        return { args: e, keys: null };
      }
      var d = i(839874),
        u = i(472484),
        c = i(91034),
        h = i(595940);
      var p = i(138966),
        _ = i(72117);
      function g() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = (0, h.popScheduler)(e),
          r = (0, h.popResultSelector)(e),
          o = l(e),
          n = o.args,
          a = o.keys;
        if (0 === n.length) return (0, d.from)([], i);
        var _ = new s.Observable(
          (function (e, t, i) {
            void 0 === i && (i = u.identity);
            return function (s) {
              b(
                t,
                function () {
                  for (
                    var r = e.length,
                      o = new Array(r),
                      n = r,
                      a = r,
                      l = function (r) {
                        b(
                          t,
                          function () {
                            var l = (0, d.from)(e[r], t),
                              u = !1;
                            l.subscribe(
                              new p.OperatorSubscriber(
                                s,
                                function (e) {
                                  (o[r] = e),
                                    u || ((u = !0), a--),
                                    a || s.next(i(o.slice()));
                                },
                                function () {
                                  --n || s.complete();
                                }
                              )
                            );
                          },
                          s
                        );
                      },
                      u = 0;
                    u < r;
                    u++
                  )
                    l(u);
                },
                s
              );
            };
          })(
            n,
            i,
            a
              ? function (e) {
                  return (function (e, t) {
                    return e.reduce(function (e, i, s) {
                      return (e[i] = t[s]), e;
                    }, {});
                  })(a, e);
                }
              : u.identity
          )
        );
        return r ? _.pipe((0, c.mapOneOrManyArgs)(r)) : _;
      }
      function b(e, t, i) {
        e ? (0, _.executeSchedule)(i, e, t) : t();
      }
    },
    423869: (e, t, i) => {
      "use strict";
      i.d(t, { EMPTY: () => s });
      var s = new (i(815544).Observable)(function (e) {
        return e.complete();
      });
    },
    323002: (e, t, i) => {
      "use strict";
      i.d(t, { merge: () => l });
      var s = i(925186),
        r = i(771035),
        o = i(423869),
        n = i(595940),
        a = i(839874);
      function l() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = (0, n.popScheduler)(e),
          l = (0, n.popNumber)(e, 1 / 0),
          d = e;
        return d.length
          ? 1 === d.length
            ? (0, r.innerFrom)(d[0])
            : (0, s.mergeAll)(l)((0, a.from)(d, i))
          : o.EMPTY;
      }
    },
    586639: (e, t, i) => {
      "use strict";
      i.d(t, { of: () => o });
      var s = i(595940),
        r = i(839874);
      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = (0, s.popScheduler)(e);
        return (0, r.from)(e, i);
      }
    },
    218286: (e, t, i) => {
      "use strict";
      i.d(t, { distinctUntilChanged: () => n });
      var s = i(472484),
        r = i(116217),
        o = i(138966);
      function n(e, t) {
        return (
          void 0 === t && (t = s.identity),
          (e = null != e ? e : a),
          (0, r.operate)(function (i, s) {
            var r,
              n = !0;
            i.subscribe(
              new o.OperatorSubscriber(s, function (i) {
                var o = t(i);
                (!n && e(r, o)) || ((n = !1), (r = o), s.next(i));
              })
            );
          })
        );
      }
      function a(e, t) {
        return e === t;
      }
    },
    169977: (e, t, i) => {
      "use strict";
      i.d(t, { filter: () => o });
      var s = i(116217),
        r = i(138966);
      function o(e, t) {
        return (0, s.operate)(function (i, s) {
          var o = 0;
          i.subscribe(
            new r.OperatorSubscriber(s, function (i) {
              return e.call(t, i, o++) && s.next(i);
            })
          );
        });
      }
    },
    312694: (e, t, i) => {
      "use strict";
      i.d(t, { share: () => d });
      var s = i(446685),
        r = i(839874),
        o = i(346502),
        n = i(737538),
        a = i(620210),
        l = i(116217);
      function d(e) {
        void 0 === e && (e = {});
        var t = e.connector,
          i =
            void 0 === t
              ? function () {
                  return new n.Subject();
                }
              : t,
          s = e.resetOnError,
          o = void 0 === s || s,
          d = e.resetOnComplete,
          c = void 0 === d || d,
          h = e.resetOnRefCountZero,
          p = void 0 === h || h;
        return function (e) {
          var t = null,
            s = null,
            n = null,
            d = 0,
            h = !1,
            _ = !1,
            g = function () {
              null == s || s.unsubscribe(), (s = null);
            },
            b = function () {
              g(), (t = n = null), (h = _ = !1);
            },
            y = function () {
              var e = t;
              b(), null == e || e.unsubscribe();
            };
          return (0, l.operate)(function (e, l) {
            d++, _ || h || g();
            var m = (n = null != n ? n : i());
            l.add(function () {
              0 !== --d || _ || h || (s = u(y, p));
            }),
              m.subscribe(l),
              t ||
                ((t = new a.SafeSubscriber({
                  next: function (e) {
                    return m.next(e);
                  },
                  error: function (e) {
                    (_ = !0), g(), (s = u(b, o, e)), m.error(e);
                  },
                  complete: function () {
                    (h = !0), g(), (s = u(b, c)), m.complete();
                  },
                })),
                (0, r.from)(e).subscribe(t));
          })(e);
        };
      }
      function u(e, t) {
        for (var i = [], r = 2; r < arguments.length; r++)
          i[r - 2] = arguments[r];
        return !0 === t
          ? (e(), null)
          : !1 === t
          ? null
          : t
              .apply(void 0, (0, s.__spreadArray)([], (0, s.__read)(i), !1))
              .pipe((0, o.take)(1))
              .subscribe(function () {
                return e();
              });
      }
    },
    173587: (e, t, i) => {
      "use strict";
      i.d(t, { skip: () => r });
      var s = i(169977);
      function r(e) {
        return (0, s.filter)(function (t, i) {
          return e <= i;
        });
      }
    },
    233064: (e, t, i) => {
      "use strict";
      i.d(t, { switchMap: () => n });
      var s = i(771035),
        r = i(116217),
        o = i(138966);
      function n(e, t) {
        return (0, r.operate)(function (i, r) {
          var n = null,
            a = 0,
            l = !1,
            d = function () {
              return l && !n && r.complete();
            };
          i.subscribe(
            new o.OperatorSubscriber(
              r,
              function (i) {
                null == n || n.unsubscribe();
                var l = 0,
                  u = a++;
                (0, s.innerFrom)(e(i, u)).subscribe(
                  (n = new o.OperatorSubscriber(
                    r,
                    function (e) {
                      return r.next(t ? t(i, e, u, l++) : e);
                    },
                    function () {
                      (n = null), d();
                    }
                  ))
                );
              },
              function () {
                (l = !0), d();
              }
            )
          );
        });
      }
    },
    346502: (e, t, i) => {
      "use strict";
      i.d(t, { take: () => n });
      var s = i(423869),
        r = i(116217),
        o = i(138966);
      function n(e) {
        return e <= 0
          ? function () {
              return s.EMPTY;
            }
          : (0, r.operate)(function (t, i) {
              var s = 0;
              t.subscribe(
                new o.OperatorSubscriber(i, function (t) {
                  ++s <= e && (i.next(t), e <= s && i.complete());
                })
              );
            });
      }
    },
    482165: (e, t, i) => {
      "use strict";
      i.d(t, { tap: () => a });
      var s = i(38323),
        r = i(116217),
        o = i(138966),
        n = i(472484);
      function a(e, t, i) {
        var a =
          (0, s.isFunction)(e) || t || i
            ? { next: e, error: t, complete: i }
            : e;
        return a
          ? (0, r.operate)(function (e, t) {
              var i;
              null === (i = a.subscribe) || void 0 === i || i.call(a);
              var s = !0;
              e.subscribe(
                new o.OperatorSubscriber(
                  t,
                  function (e) {
                    var i;
                    null === (i = a.next) || void 0 === i || i.call(a, e),
                      t.next(e);
                  },
                  function () {
                    var e;
                    (s = !1),
                      null === (e = a.complete) || void 0 === e || e.call(a),
                      t.complete();
                  },
                  function (e) {
                    var i;
                    (s = !1),
                      null === (i = a.error) || void 0 === i || i.call(a, e),
                      t.error(e);
                  },
                  function () {
                    var e, t;
                    s &&
                      (null === (e = a.unsubscribe) ||
                        void 0 === e ||
                        e.call(a)),
                      null === (t = a.finalize) || void 0 === t || t.call(a);
                  }
                )
              );
            })
          : n.identity;
      }
    },
    712813: (e, t, i) => {
      "use strict";
      i.d(t, { dateTimestampProvider: () => s });
      var s = {
        now: function () {
          return (s.delegate || Date).now();
        },
        delegate: void 0,
      };
    },
    697373: (e) => {
      e.exports = { button: "button-xNqEcuN2" };
    },
    945319: (e) => {
      e.exports = {
        blockHidden: "blockHidden-e6PF69Df",
        "pane-button": "pane-button-e6PF69Df",
      };
    },
    189822: (e) => {
      e.exports = { "css-value-padding": "4px" };
    },
    255587: (e) => {
      e.exports = {
        "css-value-padding": "4px",
        container: "container-hw_3o_pb",
        informerWrapper: "informerWrapper-hw_3o_pb",
        notAvailableOnMobile: "notAvailableOnMobile-hw_3o_pb",
        sellBuyAndPresetsButtonsContainer:
          "sellBuyAndPresetsButtonsContainer-hw_3o_pb",
        sellBuyButtonsContainer: "sellBuyButtonsContainer-hw_3o_pb",
        buttonsWrapper: "buttonsWrapper-hw_3o_pb",
        column: "column-hw_3o_pb",
        button: "button-hw_3o_pb",
        sellButton: "sellButton-hw_3o_pb",
        buyButton: "buyButton-hw_3o_pb",
        buttonTextWrapper: "buttonTextWrapper-hw_3o_pb",
        buttonText: "buttonText-hw_3o_pb",
        title: "title-hw_3o_pb",
        withoutBg: "withoutBg-hw_3o_pb",
        lastCharSup: "lastCharSup-hw_3o_pb",
        spreadQtyWrapper: "spreadQtyWrapper-hw_3o_pb",
        spread: "spread-hw_3o_pb",
        withoutQty: "withoutQty-hw_3o_pb",
        brokerButton: "brokerButton-hw_3o_pb",
        qty: "qty-hw_3o_pb",
        activeQty: "activeQty-hw_3o_pb",
        loader: "loader-hw_3o_pb",
        circleLoader: "circleLoader-hw_3o_pb",
        loading: "loading-hw_3o_pb",
        brokerButtonIconWrap: "brokerButtonIconWrap-hw_3o_pb",
        brokerButtonDefault: "brokerButtonDefault-hw_3o_pb",
      };
    },
    725796: (e) => {
      e.exports = {
        tooltip: "tooltip-_XsQMwYk",
        slText: "slText-_XsQMwYk",
        tpText: "tpText-_XsQMwYk",
      };
    },
    596225: (e) => {
      e.exports = { tabs: "tabs-oqHzGqN1", divider: "divider-oqHzGqN1" };
    },
    857053: (e) => {
      e.exports = { popupWrapper: "popupWrapper-sxxSUmLh" };
    },
    47507: (e) => {
      e.exports = {
        "small-height-breakpoint": "(max-height: 360px)",
        moreButton: "moreButton-LjodxXHh",
        header: "header-LjodxXHh",
        brokerSelectScreenWrapper: "brokerSelectScreenWrapper-LjodxXHh",
        mobile: "mobile-LjodxXHh",
      };
    },
    296487: (e) => {
      e.exports = {
        content: "content-iSoiahCU",
        contentInner: "contentInner-iSoiahCU",
      };
    },
    511349: (e, t, i) => {
      "use strict";
      i.d(t, { ToolWidgetIconButton: () => a });
      var s = i(50959),
        r = i(497754),
        o = i(155352),
        n = i(697373);
      const a = s.forwardRef(function (e, t) {
        const { className: i, id: a, ...l } = e;
        return s.createElement(o.ToolWidgetButton, {
          id: a,
          "data-name": a,
          ...l,
          ref: t,
          className: r(i, n.button),
        });
      });
    },
    790606: (e, t, i) => {
      "use strict";
      i.d(t, { reactLoaderRendererCreator: () => n });
      var s = i(904237),
        r = i(50959),
        o = i(945319);
      function n(e, t) {
        return (i, n) =>
          (function (e, t, i, n) {
            const a = document.createElement("span"),
              l = (0, s.createRoot)(a);
            function d(e) {
              a.classList.toggle(o.blockHidden, !e);
            }
            d(!1);
            const { className: u } = n ?? {};
            return (
              u && a.classList.add(u),
              l.render((0, r.createElement)(t, i)),
              e.appendChild(a),
              {
                toggleVisibility: d,
                destroy: function () {
                  l.unmount();
                },
              }
            );
          })(i, e, t, n);
      }
    },
    614588: (e, t, i) => {
      "use strict";
      i.d(t, { createPointsLoaderRenderer: () => r });
      var s = i(234404);
      const r = (0, i(790606).reactLoaderRendererCreator)(s.Loader, {
        staticPosition: !0,
        size: "small",
      });
    },
    126373: (e, t, i) => {
      "use strict";
      i.d(t, { trackingModeIsAvailable: () => s });
      const s = i(601227).CheckMobile.any();
    },
    80118: (e, t, i) => {
      "use strict";
      i.d(t, {
        pipsToPrice: () => a,
        pipsToRiskInCurrency: () => l,
        pipsToRiskInPercent: () => d,
        priceToPips: () => r,
        riskInCurrencyToPips: () => o,
        riskInPercentToPips: () => n,
      });
      var s = i(960521);
      function r(e, t, i, r) {
        return (0, s.Big)(e).minus(t).div(r).div(i).toNumber();
      }
      function o(e, t, i, r, o) {
        const n = (0, s.Big)(i)
          .mul(t)
          .mul(o || 1);
        if (n.eq(0)) return 0;
        const a = (0, s.Big)(e).div(n).mul(r).toNumber();
        return Math.floor(a);
      }
      function n(e, t, i, r, o, n) {
        const a = (0, s.Big)(r)
          .mul(t)
          .mul(n || 1)
          .mul(100);
        if (a.eq(0)) return 0;
        const l = (0, s.Big)(e).mul(i).div(a).mul(o).toNumber();
        return Math.floor(l);
      }
      function a(e, t, i, r) {
        return (0, s.Big)(i).mul(e).mul(r).plus(t).toNumber();
      }
      function l(e, t, i, r, o) {
        return (0, s.Big)(e)
          .mul(i)
          .mul(t)
          .mul(o || 1)
          .div(r)
          .toNumber();
      }
      function d(e, t, i, r, o, n) {
        return i
          ? (0, s.Big)(e)
              .mul(r)
              .mul(t)
              .mul(n || 1)
              .mul(100)
              .div(i)
              .div(o)
              .toNumber()
          : 0;
      }
    },
    642659: (e, t, i) => {
      "use strict";
      i.d(t, { BrokerService: () => o });
      var s,
        r = i(650151);
      !(function (e) {
        (e.PositionsWatcher = "PositionsWatcher"),
          (e.TradingNotificationsHandler = "TradingNotificationsHandler"),
          (e.TradingStat = "TradingStat"),
          (e.ExecutionsService = "ExecutionsService"),
          (e.OrdersService = "OrdersService"),
          (e.PositionsService = "PositionsService");
      })(s || (s = {}));
      class o {
        constructor(e, t) {
          (this._activeBroker = null),
            (this._trading = e),
            (this._serviceName = t),
            this._trading.onConnectionStatusChange.subscribe(
              this,
              this._onStatusChange
            ),
            this._onStatusChange(this._trading.connectStatus());
        }
        destroy() {
          this.stopService(),
            this._trading.onConnectionStatusChange.unsubscribeAll(this);
        }
        activeBroker() {
          return this._activeBroker;
        }
        trading() {
          return this._trading;
        }
        _stopService() {
          this.stopService();
          const e = (0, r.ensureNotNull)(this._activeBroker, "activeBroker");
          switch (
            (e.currentAccountUpdate.unsubscribeAll(this), this._serviceName)
          ) {
            case "PositionsService":
            case "PositionsWatcher":
              e.positionsFullUpdate.unsubscribe(this, this._restartService),
                e.individualPositionsFullUpdate.unsubscribe(
                  this,
                  this._restartService
                );
              break;
            case "OrdersService":
              e.ordersFullUpdate.unsubscribe(this, this._restartService);
          }
        }
        _startService() {
          this.startService();
          const e = (0, r.ensureNotNull)(this._activeBroker, "activeBroker");
          switch (
            (e.currentAccountUpdate.subscribe(
              this,
              this._onCurrentAccountUpdate
            ),
            this._serviceName)
          ) {
            case "PositionsService":
            case "PositionsWatcher":
              e.positionsFullUpdate.subscribe(this, this._restartService),
                e.individualPositionsFullUpdate.subscribe(
                  this,
                  this._restartService
                );
              break;
            case "OrdersService":
              e.ordersFullUpdate.subscribe(this, this._restartService);
          }
        }
        _onStatusChange(e) {
          const t = this._trading.activeBroker();
          (this._activeBroker === t && 1 === e) ||
            (null !== this._activeBroker &&
              (this._stopService(), (this._activeBroker = null)),
            null !== t &&
              1 === e &&
              ((this._activeBroker = t),
              this._startService(),
              (this._lastAccountId = t.currentAccount())));
        }
        _restartService() {
          this.stopService(), this.startService();
        }
        _onCurrentAccountUpdate() {
          const e = (0, r.ensureNotNull)(this._activeBroker);
          this._lastAccountId !== e.currentAccount() &&
            (this._restartService(),
            (this._lastAccountId = e.currentAccount()));
        }
      }
    },
    600914: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          addBroker: () => Ve,
          brokersList: () => $e,
          createBrokerConnection: () => xe,
          getBrokerMetainfo: () => Ae,
        });
      var s = i(609838),
        r = i(25043),
        o = i(61121),
        n = i(586639),
        a = i(275734),
        l = i(440891),
        d = i(599016),
        u = i(41899),
        c = i(329452),
        h = i(650151);
      class p {
        constructor(e) {
          (this._objects = {}),
            (this._started = !1),
            (this._isObjectsRequestActual = !1),
            (this._ordersPromise = null),
            (this._getter = e),
            (this.updateDelegate = new c.Delegate()),
            (this.partialUpdateDelegate = new c.Delegate());
        }
        start() {
          this._started ||
            ((this._started = !0),
            (this._ordersPromise = this._requestObjects()));
        }
        stop() {
          (this._objects = {}),
            (this._started = !1),
            (this._ordersPromise = null),
            (this._isObjectsRequestActual = !1);
        }
        update(e, t) {
          this._started &&
            (this._isObjectsRequestActual
              ? (this._isObjectsRequestActual = !1)
              : ((this._objects[e.id] = e), this._onObjectUpdated(e, t)));
        }
        partialUpdate(e, t) {
          if (!this._started) return;
          if (this._isObjectsRequestActual)
            return void (this._isObjectsRequestActual = !1);
          let i, s;
          (0, u.isObject)(e)
            ? ((i = e.id), (s = e))
            : ((i = e), (s = (0, h.ensure)(t)));
          const r = this._objects[i];
          r && (Object.assign(r, s), this.partialUpdateDelegate.fire(r, s));
        }
        fullUpdate() {
          this._started &&
            (this._isObjectsRequestActual
              ? (this._isObjectsRequestActual = !1)
              : (this._ordersPromise = this._requestObjects()));
        }
        getObjects() {
          return (
            this._ordersPromise || Promise.resolve(Object.values(this._objects))
          );
        }
        _onObjectUpdated(e, t) {
          this.updateDelegate.fire(e, t);
        }
        _onAllObjectsUpdated() {
          this._objectsCache().forEach((e) => this.updateDelegate.fire(e, !0));
        }
        _objectsCache() {
          return Object.values(this._objects);
        }
        async _requestObjects() {
          let e = [];
          do {
            (this._isObjectsRequestActual = !0), (e = await this._getter());
          } while (!this._isObjectsRequestActual);
          var t;
          return (
            (this._objects =
              ((t = "id"), e.reduce((e, i) => ((e[i[t]] = i), e), {}))),
            (this._ordersPromise = null),
            (this._isObjectsRequestActual = !1),
            this._onAllObjectsUpdated(),
            e
          );
        }
      }
      var _ = i(671945),
        g = i(684416);
      class b extends p {
        constructor(e, t) {
          super(e), (this._brokerConfigGetter = t);
        }
        _onObjectUpdated(e, t) {
          this._patchIndividualPositions(
            this._objectsCache().filter(
              (t) => t.symbol === e.symbol && 0 !== t.qty
            ),
            e,
            t
          ),
            super._onObjectUpdated(e, t);
        }
        _onAllObjectsUpdated() {
          this._patchIndividualPositions(
            this._objectsCache().filter((e) => 0 !== e.qty)
          ),
            super._onAllObjectsUpdated();
        }
        _patchIndividualPositions(e, t, i) {
          const s = this._brokerConfigGetter();
          let r;
          r = s.requiresFIFOCloseIndividualPositions
            ? s.fifoOnlyForSameQty
              ? v
              : m
            : y;
          const o = r(e);
          for (const e of o) t !== e && super._onObjectUpdated(e, i);
        }
      }
      function y(e) {
        const t = [];
        for (const i of e) i.canBeClosed || ((i.canBeClosed = !0), t.push(i));
        return t;
      }
      function m(e) {
        const t = {};
        for (const i of e) {
          let e = t[i.symbol];
          void 0 === e && ((e = { oldest: null, all: [] }), (t[i.symbol] = e)),
            (null === e.oldest || e.oldest.date > i.date) && (e.oldest = i),
            e.all.push(i);
        }
        const i = [];
        for (const e of Object.keys(t)) {
          const s = (0, h.ensureDefined)(t[e]);
          for (const e of s.all) {
            const t = s.oldest === e,
              r = t !== e.canBeClosed;
            (e.canBeClosed = t), r && i.push(e);
          }
        }
        return i;
      }
      function v(e) {
        const t = {};
        for (const i of e) {
          let e = t[i.symbol];
          void 0 === e && ((e = {}), (t[i.symbol] = e));
          let s = e[i.qty];
          void 0 === s && ((s = { oldest: null, all: [] }), (e[i.qty] = s)),
            (null === s.oldest || s.oldest.date > i.date) && (s.oldest = i),
            s.all.push(i);
        }
        const i = [];
        for (const e of Object.keys(t)) {
          const s = (0, h.ensureDefined)(t[e]);
          for (const e of Object.keys(s)) {
            const t = (0, h.ensureDefined)(s[e]);
            for (const e of t.all) {
              const s = t.oldest === e,
                r = s !== e.canBeClosed;
              (e.canBeClosed = s), r && i.push(e);
            }
          }
        }
        return i;
      }
      const f = (0, _.getLogger)("Trading.Migrations");
      var P = i(525915),
        k = i(871645),
        S = i(229753),
        C = i(924910),
        w = i(404357),
        T = i(391431),
        B = i(806188),
        O = i(145367),
        M = i(328810);
      function I(e, t, i) {
        const s = {
          symbol: t.symbol,
          type: 2,
          side: 1 === t.side ? -1 : 1,
          qty: Math.abs(e),
          seenPrice: null,
          isClose: !0,
        };
        return void 0 === i?.bid || void 0 === i?.ask
          ? s
          : { ...s, currentQuotes: { bid: i.bid, ask: i.ask } };
      }
      class E {
        constructor() {
          this._validators = new Map();
        }
        add(e, t) {
          this._validators.set(t, e);
        }
        validate(e) {
          const t = {};
          let i = !0;
          for (const [s, r] of this._validators.entries()) {
            const o = r.validate(e);
            o.isValid || ((i = !1), (t[s] = o.error));
          }
          return i ? { isValid: i } : { isValid: i, errors: t };
        }
      }
      class D {
        constructor(e, t, i, s = []) {
          (this._status = O.PlaceOrEditContextStatus.Undefined),
            (this._onStatusChange = new c.Delegate()),
            (this._onDataChange = new c.Delegate()),
            (this._errors = {}),
            (this._setData = async (e, t, i, s) => {
              const r = await this._processOrderData(t);
              !0 !== e?.aborted &&
                ((this._orderData = r),
                this._assertOrderIsValid(),
                (this._source = i),
                s || this._onDataChange.fire());
            }),
            (this._isValidationEnabled = t),
            (this._isDisposable = i),
            (this._source = e),
            (this._setData = (0, o.respectLatest)(this._setData)),
            (this._validator = new E());
          for (const { validator: e, validatorName: t } of s)
            this._validator.add(e, t);
        }
        onReady() {
          return this._onReady;
        }
        source() {
          return this._source;
        }
        data() {
          return this._orderData;
        }
        async setData(e, t, i) {
          return this._setData(null, e, t, i);
        }
        status() {
          return this._status;
        }
        errors() {
          return this._errors;
        }
        onStatusChange() {
          return this._onStatusChange;
        }
        onDataChange() {
          return this._onDataChange;
        }
        async send(e) {
          try {
            if (this._status === O.PlaceOrEditContextStatus.Error) {
              const e = Object.values(this._errors)[0];
              return (
                this._processError(e instanceof Error ? e : new Error(e)), !1
              );
            }
            if (this._status !== O.PlaceOrEditContextStatus.Undefined)
              return !1;
            this._setStatus(O.PlaceOrEditContextStatus.Loading),
              await this._onReady;
            const t = await this._processSend(e),
              i = t
                ? O.PlaceOrEditContextStatus.Undefined
                : O.PlaceOrEditContextStatus.Error;
            return this._setStatus(i), t;
          } finally {
            this._isDisposable && this.destroy();
          }
        }
        destroy() {
          this._setStatus(O.PlaceOrEditContextStatus.Destroyed);
        }
        async preview() {
          return this._status === O.PlaceOrEditContextStatus.Error
            ? { sections: [] }
            : (await this._onReady, this._preview(this._orderData));
        }
        _assertOrderIsValid() {
          const { isValid: e, errors: t } = this._validate();
          e
            ? ((this._errors = {}),
              this._setStatus(O.PlaceOrEditContextStatus.Undefined))
            : ((this._errors = t),
              this._setStatus(O.PlaceOrEditContextStatus.Error));
        }
        _setStatus(e) {
          this._status !== e &&
            ((this._status = e), this._onStatusChange.fire());
        }
        _validate() {
          return this._isValidationEnabled
            ? this._validator.validate(this._orderData)
            : { isValid: !0 };
        }
      }
      var V = i(477071),
        $ = i(14654);
      class L {
        constructor(e) {
          (this._stopLimitPercentPriceRuleCheckers = []),
            (this.validate = (e) => {
              const { type: t, side: r, stopPrice: o, limitPrice: n } = e,
                a = 2 === this._priceType;
              if (2 === t || (a && 1 === t) || (!a && 3 === t))
                return { isValid: !0 };
              const l = a ? o : n;
              if (void 0 === l)
                return { isValid: !1, error: s.t(null, void 0, i(845542)) };
              const d = (0, T.getPriceStep)({
                  price: l,
                  priceType: this._priceType,
                  minTick: this._minTick,
                  variableMinTickData: this._variableMinTickData,
                  limitPriceStep: this._limitPriceStep,
                  stopPriceStep: this._stopPriceStep,
                }),
                u = (0, T.roundToStepRequired)({
                  priceType: this._priceType,
                  minTick: this._minTick,
                  limitPriceStep: this._limitPriceStep,
                  stopPriceStep: this._stopPriceStep,
                }),
                c = (0, T.getQuotePrice)(this._getQuotes(), r),
                h = (0, V.validatePrice)({
                  price: l,
                  askOrBid: c,
                  orderType: t,
                  side: r,
                  priceType: this._priceType,
                  isForex: "forex" === this._symbolType,
                  formatter: this._formatter,
                  isStatusEditing: this._isStatusEditing,
                  stopLimitPercentPriceRuleCheckers:
                    this._stopLimitPercentPriceRuleCheckers,
                  supportStopOrdersInBothDirections:
                    this._supportStopOrdersInBothDirections,
                  supportStopLimitOrdersInBothDirections:
                    this._supportStopLimitOrdersInBothDirections,
                  supportStrictCheckingLimitOrderPrice:
                    this._supportStrictCheckingLimitOrderPrice,
                  step: d,
                  roundedToStep: u,
                }),
                p = 1 === r ? "Buy" : "Sell",
                _ = 1 === this._priceType ? "Limit" : "Stop";
              return h.res
                ? {
                    isValid: !1,
                    error: new w.UserFriendlyError({
                      userFriendlyMessage: h.msg,
                      detailedErrorMessage: `${h.msg}: side = ${p}, askOrBid = ${c}, price = ${l}, priceType = ${_}`,
                    }),
                  }
                : { isValid: !0 };
            });
          const {
            priceType: t,
            quotesGetter: r,
            formatter: o,
            instrumentInfo: n,
            validationRules: a,
            isStatusEditing: l,
            supportStopOrdersInBothDirections: d,
            supportStopLimitOrdersInBothDirections: u,
            supportStrictCheckingLimitOrderPrice: c,
          } = e;
          (this._priceType = t),
            (this._getQuotes = r),
            (this._formatter = o),
            (this._isStatusEditing = l),
            (this._supportStopOrdersInBothDirections = Boolean(d)),
            (this._supportStopLimitOrdersInBothDirections = Boolean(u)),
            (this._supportStrictCheckingLimitOrderPrice = Boolean(c)),
            (this._symbolType = n.type || ""),
            (this._minTick = n.minTick),
            (this._limitPriceStep = n.limitPriceStep),
            (this._stopPriceStep = n.stopPriceStep),
            (this._variableMinTickData = n.variableMinTick
              ? (0, $.makeVariableMinTickData)(this._minTick, n.variableMinTick)
              : void 0);
          for (const e of a)
            this._stopLimitPercentPriceRuleCheckers.push(
              (0, V.makeStopLimitPercentPriceRuleChecker)(
                e.options.min,
                e.options.max
              )
            );
        }
      }
      var x = i(499665);
      class A {
        constructor(e) {
          this._quantityMetainfo = e;
        }
        validate(e) {
          const t = (0, x.checkQtyError)(this._quantityMetainfo, e.qty, !0);
          return t.res ? { isValid: !1, error: t.msg } : { isValid: !0 };
        }
      }
      var R = i(960521),
        F = i(797358);
      class N {
        constructor(e) {
          const {
            instrumentInfo: t,
            quotesGetter: i,
            baseCurrencyCryptoBalanceGetter: s,
            quoteCurrencyCryptoBalanceGetter: r,
          } = e;
          (this._quantityMetainfo = t.qty),
            (this._baseCurrency = t.baseCurrency),
            (this._quoteCurrency = t.quoteCurrency),
            (this._getQuotes = i),
            (this._getBaseCurrencyCryptoBalance = s),
            (this._getQuoteCurrencyCryptoBalance = r);
        }
        validate(e) {
          const t = (0, x.checkQtyError)(this._quantityMetainfo, e.qty, !0);
          if (t.res) return { isValid: !1, error: t.msg };
          const r = (0, T.getOrderPrice)(e, this._getQuotes()),
            o = e.hasOwnProperty("id");
          if (void 0 === r)
            return { isValid: !1, error: s.t(null, void 0, i(845542)) };
          const n = (0, T.getCryptoBalanceValue)({
              balance: this._getBaseCurrencyCryptoBalance(),
              side: e.side,
              isExistingOrder: o,
              qty: e.qty,
              orderPrice: r,
            }),
            a = (0, T.getCryptoBalanceValue)({
              balance: this._getQuoteCurrencyCryptoBalance(),
              side: e.side,
              isExistingOrder: o,
              qty: e.qty,
              orderPrice: r,
            }),
            l = (0, F.validateBalance)({
              side: e.side,
              baseValue: e.qty,
              baseBalanceValue: n,
              baseCurrency: this._baseCurrency,
              quoteValue: (0, R.Big)(e.qty).mul(r).toNumber(),
              quoteBalanceValue: a,
              quoteCurrency: this._quoteCurrency,
            });
          return l.res ? { isValid: !1, error: l.msg } : { isValid: !0 };
        }
      }
      var q = i(904664),
        Q = i(464051),
        W = i(80118);
      class U {
        constructor(e) {
          this._bracketPercentPriceRuleCheckers = [];
          const {
            bracketType: t,
            priceType: i,
            parentType: s,
            quotesGetter: r,
            formatter: o,
            isStatusEditing: n,
            instrumentInfo: a,
            validationRules: l,
          } = e;
          if (
            ((this._bracketType = t),
            (this._priceType = i),
            (this._parentType = s),
            (this._getQuotes = r),
            (this._formatter = o),
            (this._isStatusEditing = n),
            (this._pipSize = a.pipSize),
            (this._priceStep = (0, T.getPriceStep)({
              priceType: i,
              minTick: a.minTick || a.pipSize,
              limitPriceStep: a.limitPriceStep,
              stopPriceStep: a.stopPriceStep,
            })),
            (this._roundToStepRequired = (0, T.roundToStepRequired)({
              priceType: i,
              minTick: a.minTick || a.pipSize,
              limitPriceStep: a.limitPriceStep,
              stopPriceStep: a.stopPriceStep,
            })),
            void 0 !== l)
          )
            for (const e of l)
              this._bracketPercentPriceRuleCheckers.push(
                (0, Q.makeBracketPercentPriceRuleChecker)({
                  minPercent: e.options.min,
                  maxPercent: e.options.max,
                  isExpandedBoundary: n,
                })
              );
        }
        validate(e) {
          const {
            side: t,
            takeProfit: r,
            stopLoss: o,
            trailingStopPips: n,
            guaranteedStop: a,
          } = e;
          if (
            (this._bracketType === q.BracketType.TakeProfit && void 0 === r) ||
            (this._bracketType === q.BracketType.StopLoss && void 0 === o) ||
            (this._bracketType === q.BracketType.TrailingStop &&
              void 0 === n) ||
            (this._bracketType === q.BracketType.GuaranteedStop && void 0 === a)
          )
            return { isValid: !0 };
          const l = (0, T.getOrderPrice)(e, this._getQuotes());
          if (void 0 === l)
            return { isValid: !1, error: s.t(null, void 0, i(675236)) };
          const d =
              (this._bracketType !== q.BracketType.TakeProfit ? -1 : 1) * t,
            u = this._getPrice(e, l, d),
            c = this._getPips(e, l, d),
            h = (0, Q.checkBracketError)({
              quotes: this._getQuotes(),
              side: t,
              price: u,
              pips: c,
              priceType: this._priceType,
              priceStep: this._priceStep,
              parentPrice: l,
              parentType: this._parentType,
              bracketType: this._bracketType,
              isStatusEditing: this._isStatusEditing,
              isEnabled: !0,
              bracketPercentPriceRuleCheckers:
                this._bracketPercentPriceRuleCheckers,
              priceFormatter: this._formatter,
              isRoundToPriceStep: this._roundToStepRequired,
            });
          return h.res ? { isValid: !1, error: h.msg } : { isValid: !0 };
        }
        _getPrice(e, t, i) {
          switch (this._bracketType) {
            case q.BracketType.TakeProfit:
              return e.takeProfit ?? null;
            case q.BracketType.StopLoss:
              return e.stopLoss ?? null;
            case q.BracketType.TrailingStop:
              return void 0 === e.trailingStopPips
                ? null
                : (0, W.pipsToPrice)(e.trailingStopPips, t, i, this._pipSize);
            case q.BracketType.GuaranteedStop:
              return e.guaranteedStop ?? null;
            default:
              return null;
          }
        }
        _getPips(e, t, i) {
          switch (this._bracketType) {
            case q.BracketType.TakeProfit:
              return void 0 === e.takeProfit
                ? null
                : (0, W.priceToPips)(e.takeProfit, t, i, this._pipSize);
            case q.BracketType.StopLoss:
              return void 0 === e.stopLoss
                ? null
                : (0, W.priceToPips)(e.stopLoss, t, i, this._pipSize);
            case q.BracketType.TrailingStop:
              return e.trailingStopPips ?? null;
            case q.BracketType.GuaranteedStop:
              return void 0 === e.guaranteedStop
                ? null
                : (0, W.priceToPips)(e.guaranteedStop, t, i, this._pipSize);
            default:
              return null;
          }
        }
      }
      class z {
        constructor(e) {
          const { orderDialogOptions: t } = e;
          this._orderDialogOptions = t;
        }
        validate(e) {
          const { customFields: t, type: r } = e;
          if (
            void 0 === this._orderDialogOptions?.customFields ||
            0 === this._orderDialogOptions.customFields.length
          )
            return { isValid: !0 };
          const o = [];
          return (
            this._orderDialogOptions.customFields.forEach((e) => {
              const i = t?.[e.id];
              void 0 === i && (0, M.isSupportedField)(e, r) && o.push(e.title);
            }),
            0 === o.length
              ? { isValid: !0 }
              : {
                  isValid: !1,
                  error: s
                    .t(null, void 0, i(811195))
                    .format({ customFields: o.join(", ") }),
                }
          );
        }
      }
      var j = i(193080);
      function H(e, t) {
        let i,
          s = !1;
        const r = (0, j.createDeferredPromise)(),
          o = (e) => {
            (s = !0), r.resolve(), (i = e), t?.onValueChange?.();
          },
          n = e.subscribe(o);
        !s &&
          (function (e) {
            return void 0 !== e && "immediateDefaultValue" in e;
          })(t) &&
          o(t.immediateDefaultValue);
        return { subscription: n, getter: () => i, ready: r.promise };
      }
      class G extends D {
        constructor(e) {
          const {
              orderData: t,
              source: i,
              instrumentInfo: s,
              quotes$: r,
              configFlags: o,
              formatter: n,
              tpValidationRules: a,
              slValidationRules: l,
              guaranteedStopValidationRules: u,
              isValidationEnabled: c,
              isDisposable: h,
              orderDialogOptions: p,
              callbacks: _,
              limitOrderRules: g,
              stopOrderRules: b,
              isStatusEditing: y,
              baseCurrencyCryptoBalance$: m,
              quoteCurrencyCryptoBalance$: v,
            } = e,
            f = { onValueChange: () => {} },
            P = { ...f, immediateDefaultValue: null },
            k = Boolean(
              o.supportCryptoExchangeOrderTicket ||
                (o.supportSymbolSpecificCryptoOrderTicket &&
                  "crypto" === s.type)
            ),
            S = k ? P : f,
            { subscription: C, getter: w, ready: T } = H(r, f),
            { subscription: B, getter: O, ready: M } = H(m, S),
            { subscription: I, getter: E, ready: D } = H(v, S),
            V = k
              ? new N({
                  instrumentInfo: s,
                  quotesGetter: w,
                  baseCurrencyCryptoBalanceGetter: O,
                  quoteCurrencyCryptoBalanceGetter: E,
                })
              : new A(s.qty);
          super(i, c, h, [
            { validator: V, validatorName: "qty" },
            {
              validator: new L({
                priceType: 2,
                quotesGetter: w,
                formatter: n,
                instrumentInfo: s,
                validationRules: b,
                isStatusEditing: y,
                supportStopOrdersInBothDirections:
                  o.supportStopOrdersInBothDirections,
                supportStopLimitOrdersInBothDirections:
                  o.supportStopLimitOrdersInBothDirections,
              }),
              validatorName: "stopPrice",
            },
            {
              validator: new L({
                priceType: 1,
                quotesGetter: w,
                formatter: n,
                instrumentInfo: s,
                validationRules: g,
                isStatusEditing: y,
                supportStopOrdersInBothDirections:
                  o.supportStopOrdersInBothDirections,
                supportStopLimitOrdersInBothDirections:
                  o.supportStopLimitOrdersInBothDirections,
                supportStrictCheckingLimitOrderPrice:
                  o.supportStrictCheckingLimitOrderPrice,
              }),
              validatorName: "limitPrice",
            },
            {
              validator: new z({ orderDialogOptions: p }),
              validatorName: "customFields",
            },
            {
              validator: new U({
                bracketType: d.BracketType.TakeProfit,
                priceType: 1,
                parentType: 1,
                quotesGetter: w,
                formatter: n,
                isStatusEditing: y,
                instrumentInfo: s,
                validationRules: a,
              }),
              validatorName: "takeProfit",
            },
            {
              validator: new U({
                bracketType: d.BracketType.StopLoss,
                priceType: 2,
                parentType: 1,
                quotesGetter: w,
                isStatusEditing: y,
                formatter: n,
                instrumentInfo: s,
                validationRules: l,
              }),
              validatorName: "stopLoss",
            },
            {
              validator: new U({
                bracketType: d.BracketType.TrailingStop,
                priceType: 2,
                parentType: 1,
                quotesGetter: w,
                formatter: n,
                isStatusEditing: y,
                instrumentInfo: s,
                validationRules: l,
              }),
              validatorName: "trailingStopPips",
            },
            {
              validator: new U({
                bracketType: d.BracketType.GuaranteedStop,
                priceType: 2,
                parentType: 1,
                quotesGetter: w,
                isStatusEditing: y,
                formatter: n,
                instrumentInfo: s,
                validationRules: u,
              }),
              validatorName: "guaranteedStop",
            },
          ]),
            (this._quotesSubscription = C),
            (this._quoteCurrencyCryptoBalanceSubscription = I),
            (this._baseCurrencyCryptoBalanceSubscription = B),
            (this._createInitialPreOrder = _.createInitialPreOrder),
            (this._placeOrder = _.placeOrder),
            (this._previewOrder = _.previewOrder),
            (this._handleError = _.handleError);
          const $ = k ? [M, D] : [];
          this._onReady = Promise.all([T, ...$])
            .then(() => this.setData(t, i))
            .then(() => {
              f.onValueChange = () => this._assertOrderIsValid();
            });
        }
        externalContext() {
          return {
            type: O.PlaceOrEditContextType.PlaceOrder,
            source: () => this.source(),
            data: () => this.data(),
            preview: () => this.preview(),
            send: (e) => this.send(e),
            status: () => this.status(),
            errors: () => this.errors(),
          };
        }
        destroy() {
          super.destroy(),
            this._quotesSubscription.unsubscribe(),
            this._quoteCurrencyCryptoBalanceSubscription.unsubscribe(),
            this._baseCurrencyCryptoBalanceSubscription.unsubscribe();
        }
        _processSend(e) {
          return this._placeOrder(this._orderData, e);
        }
        _processError(e) {
          this._handleError(e);
        }
        _processOrderData(e) {
          return this._createInitialPreOrder(e);
        }
        _preview(e) {
          return this._previewOrder(e);
        }
      }
      var K,
        Y,
        X = i(154834),
        Z = i(46415);
      class J extends D {
        constructor(e) {
          const { orderData: t, source: i, callbacks: s, isDisposable: r } = e;
          super(i, !1, r),
            (this._modifyOrder = s.modifyOrder),
            (this._metainfo = s.metainfo),
            (this._symbolInfo = s.symbolInfo),
            (this._orderById = s.orderById),
            (this._previewOrder = s.previewOrder),
            (this._handleError = s.handleError),
            (this._onReady = this.setData(t, i));
        }
        externalContext() {
          return {
            type: O.PlaceOrEditContextType.EditOrder,
            source: () => this.source(),
            data: () => this.data(),
            send: () => this.send(),
            status: () => this.status(),
            errors: () => this.errors(),
            preview: () => this.preview(),
          };
        }
        async _processOrderData(e) {
          if (!this._metainfo().configFlags.supportModifyTrailingStop) {
            const t = await this._orderById(e.id);
            e.hasTrailingStopBracket =
              void 0 !== t && void 0 !== t.trailingStopPips;
          }
          const { limitPriceStep: t, stopPriceStep: i } =
            await this._symbolInfo(e.symbol);
          if (
            ((e.limitPrice =
              void 0 !== t && void 0 !== e.limitPrice
                ? (0, P.roundToStepByPriceTypeAndSide)(
                    e.limitPrice,
                    t,
                    1,
                    e.side
                  )
                : e.limitPrice),
            (e.stopPrice =
              void 0 !== i && void 0 !== e.stopPrice
                ? (0, P.roundToStepByPriceTypeAndSide)(
                    e.stopPrice,
                    i,
                    2,
                    e.side
                  )
                : e.stopPrice),
            void 0 !== e.parentId &&
              !l.enabled("always_pass_called_order_to_modify"))
          ) {
            let t;
            try {
              t = await this._orderById(e.parentId);
            } catch (e) {
              (0, w.getLoggerMessage)(e);
            }
            if (void 0 !== t && (0, T.isOrderActive)(t.status)) {
              const i = (0, X.default)(t);
              return (
                void 0 !== e.limitPrice && (i.takeProfit = e.limitPrice),
                void 0 !== e.stopPrice &&
                  (e.stopType === Z.StopType.TrailingStop &&
                  void 0 !== e.trailingStopPips
                    ? ((i.trailingStopPips = e.trailingStopPips),
                      delete i.stopLoss)
                    : ((i.stopLoss = e.stopPrice), delete i.trailingStopPips)),
                i
              );
            }
          }
          return e;
        }
        _processSend(e) {
          return this._modifyOrder(this._orderData, e);
        }
        _processError(e) {
          this._handleError(e);
        }
        _preview(e) {
          return this._previewOrder({ ...e, seenPrice: null });
        }
        _configureValidator() {}
      }
      !(function (e) {
        (e[(e.ConnectingTimeLimit = 6e4)] = "ConnectingTimeLimit"),
          (e[(e.OAuthConnectingTimeLimit = 3e5)] = "OAuthConnectingTimeLimit"),
          (e[(e.ResolveTimeLimit = 1e4)] = "ResolveTimeLimit"),
          (e[(e.PositionReverseTimeLimit = 3e4)] = "PositionReverseTimeLimit"),
          (e[(e.PositionCloseTimeLimit = 3e4)] = "PositionCloseTimeLimit"),
          (e[(e.ModifyTimeLimit = 3e4)] = "ModifyTimeLimit");
      })(K || (K = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.BrokerRealtimeProvider = 1)] = "BrokerRealtimeProvider"),
            (e[(e.Broker = 2)] = "Broker");
        })(Y || (Y = {}));
      const ee = (0, _.getLogger)("Trading.BrokerConnectionAdapter"),
        te = s.t(null, void 0, i(834737)),
        ie = s.t(null, void 0, i(628412));
      function se(e) {
        (0, h.assert)("object" != typeof e, "Expected not an object");
      }
      const re = [1, 2, 3, 4];
      class oe {
        constructor({
          brokerMetainfo: e,
          brokerConnection: t,
          host: r,
          brokerRealtimeAdapter: o,
          tradingStat: n,
          tradingSettingsStorageGetter: a,
          brokerPlan: l,
        }) {
          (this.connectionStatusUpdate = new c.Delegate()),
            (this.executionUpdate = new c.Delegate()),
            (this.tradingOperationFinished = new c.Delegate()),
            (this.currentAccountUpdate = new c.Delegate()),
            (this.ordersFullUpdate = new c.Delegate()),
            (this.positionsFullUpdate = new c.Delegate()),
            (this.individualPositionsFullUpdate = new c.Delegate()),
            (this._brokerPlan = null),
            (this._subscriptions = {}),
            (this._lastFireResult = {}),
            (this._fakeDOMSubscriptions = {}),
            (this._formattersCache = {}),
            (this._spreadFormattersCache = {}),
            (this._quantityFormattersCache = {}),
            (this._individualPositionsCache = null),
            (this._fakePositionUpdateDelegate = null),
            (this._realtimeSubscriptionState = []),
            (this._loggedInManually = !1),
            (this._pendingSubscriptions = []),
            (this._sessionId = (0, C.guid)()),
            (this.createAccount = (e) => {
              if (
                this.config.supportCreateAccount &&
                this._brokerConnection.createAccount
              )
                return this._brokerConnection.createAccount(e);
              throw new Error("Method createAccount is not implemented");
            }),
            (this.accountSettingsInfo = (e) => {
              if (
                (this.config.supportCreateAccount ||
                  this.config.supportResetAccount ||
                  this.config.supportChangeAccountSettings) &&
                this._brokerConnection.accountSettingsInfo
              )
                return this._brokerConnection.accountSettingsInfo(e);
              throw new Error("Method accountSettingsInfo is not implemented");
            }),
            (this.resetAccount = (e) => {
              if (
                this.config.supportResetAccount &&
                this._brokerConnection.resetAccount
              )
                return this._brokerConnection.resetAccount(e);
              throw new Error("Method resetAccount is not implemented");
            }),
            (this.changeAccountSettings = (e) => {
              if (
                this.config.supportChangeAccountSettings &&
                this._brokerConnection.changeAccountSettings
              )
                return this._brokerConnection.changeAccountSettings(e);
              throw new Error(
                "Method changeAccountSettings is not implemented"
              );
            }),
            (this.deleteAccount = (e) => {
              if (
                this.config.supportDeleteAccount &&
                this._brokerConnection.deleteAccount
              )
                return this._brokerConnection.deleteAccount(e);
              throw new Error("Method deleteAccount is not implemented");
            }),
            (this.leverageInfo = (e) => {
              if (
                this.config.supportLeverage &&
                this._brokerConnection.leverageInfo
              )
                return this._brokerConnection.leverageInfo(e);
              throw new Error("Method leverage is not implemented");
            }),
            (this.setLeverage = (e) => {
              if (
                this.config.supportLeverage &&
                this._brokerConnection.setLeverage
              )
                return this._brokerConnection.setLeverage(e);
              throw new Error("Method setLeverage is not implemented");
            }),
            (this.previewLeverage = (e) => {
              if (
                this.config.supportLeverage &&
                this._brokerConnection.previewLeverage
              )
                return this._brokerConnection.previewLeverage(e);
              throw new Error("Method previewLeverage is not implemented");
            }),
            (this.maintenanceStatus = async () => {
              try {
                return void 0 !== this._brokerConnection.maintenanceStatus
                  ? await this._brokerConnection.maintenanceStatus()
                  : { isMaintenance: !1 };
              } catch (e) {
                return (
                  this._brokerLogger.logError(
                    `Failed to fetch maintenance status: ${(0,
                    w.getLoggerMessage)(e)}`
                  ),
                  {
                    isMaintenance: !0,
                    message: s.t(
                      null,
                      { replace: { brokerName: this._brokerMetainfo.title } },
                      i(136106)
                    ),
                  }
                );
              }
            }),
            (this._handleStatusChange = (e) => {
              1 !== e && this._placeOrderContextWithMetaInfo?.context.destroy();
            }),
            (this.config = Object.assign({}, e.configFlags)),
            (this._brokerMetainfo = this._patchMetainfo(e)),
            (this._brokerPlan = l || null),
            (this._brokerConnection = t),
            (this._host = r),
            (this._tradingStat = n),
            (this._getTradingSettingsStorage = a),
            (this._brokerLogger = (0, _.getLogger)(
              "Trading." + this._brokerMetainfo.id + ".Connection"
            )),
            r.setBrokerConnectionAdapter(this),
            this._initializeConnectProtection(),
            (this._positionsCache = t.positions
              ? new p(() => (t.positions ? t.positions() : Promise.resolve([])))
              : null),
            (this._individualPositionsCache = t.individualPositions
              ? new b(
                  () =>
                    t.individualPositions
                      ? t.individualPositions()
                      : Promise.resolve([]),
                  () => this.config
                )
              : null),
            (this._ordersCache = new p(() => t.orders()));
          const d = (e) => {
            1 === e
              ? (null !== this._positionsCache && this._positionsCache.start(),
                this._ordersCache.start(),
                this._individualPositionsCache &&
                  this._individualPositionsCache.start())
              : (null !== this._positionsCache && this._positionsCache.stop(),
                this._ordersCache.stop(),
                this._individualPositionsCache &&
                  this._individualPositionsCache.stop());
          };
          this.connectionStatusUpdate.subscribe(null, d),
            d(this.connectionStatus()),
            this.connectionStatusUpdate.subscribe(
              null,
              this._handleStatusChange
            ),
            (this._originalDOMSubscriptionMethods = {
              subscribeDOM: t.subscribeDOM,
              unsubscribeDOM: t.unsubscribeDOM,
            }),
            this._patchBrokerSubscribeUnsubscribeDOMMethods(),
            this.connectionStatusUpdate.subscribe(null, (e) => {
              1 === e && this._patchBrokerSubscribeUnsubscribeDOMMethods();
            }),
            e.configFlags.supportPositions ||
              (this._fakePositionUpdateDelegate = new c.Delegate()),
            (this._brokerRealtimeAdapter = o);
        }
        tryRestoreSession() {
          if (this._brokerConnection.tryRestoreSession)
            return this._brokerConnection.tryRestoreSession();
        }
        get orderUpdate() {
          return this._ordersCache.updateDelegate;
        }
        get positionUpdate() {
          return null === this._fakePositionUpdateDelegate
            ? (0, h.ensure)(this._positionsCache).updateDelegate
            : this._fakePositionUpdateDelegate;
        }
        get individualPositionUpdate() {
          return (0, h.ensure)(this._individualPositionsCache).updateDelegate;
        }
        get orderPartialUpdate() {
          return this._ordersCache.partialUpdateDelegate;
        }
        get positionPartialUpdate() {
          return null === this._fakePositionUpdateDelegate
            ? (0, h.ensure)(this._positionsCache).partialUpdateDelegate
            : this._fakePositionUpdateDelegate;
        }
        get individualPositionPartialUpdate() {
          return (0, h.ensure)(this._individualPositionsCache)
            .partialUpdateDelegate;
        }
        onOrderUpdate(e) {
          this._ordersCache.update(e);
        }
        onOrdersFullUpdate() {
          this._ordersCache.fullUpdate(), this.ordersFullUpdate.fire();
        }
        onOrderPartialUpdate(e, t) {
          this._ordersCache.partialUpdate(e, t);
        }
        onPositionUpdate(e, t) {
          if (
            ((0, h.assert)(
              !!this.config.supportPositions,
              "Broker doesn`t support positions"
            ),
            0 === e.qty)
          ) {
            const t = this._lastFireResult[e.id];
            t && delete t.PL;
          }
          (0, h.ensure)(this._positionsCache).update(e, t);
        }
        onPositionsFullUpdate() {
          (0, h.assert)(
            !!this.config.supportPositions,
            "Broker doesn`t support positions"
          ),
            this._positionsCache?.fullUpdate(),
            this.positionsFullUpdate.fire();
        }
        onPositionPartialUpdate(e, t) {
          (0, h.assert)(
            !!this.config.supportPositions,
            "Broker doesn`t support positions"
          ),
            (0, h.ensure)(this._positionsCache).partialUpdate(e, t);
        }
        onIndividualPositionUpdate(e, t) {
          if (
            ((0, h.assert)(
              !!this.config.supportPositionNetting,
              "Broker doesn`t support individual positions"
            ),
            0 === e.qty)
          ) {
            const t = this._lastFireResult[e.symbol];
            t && delete t.IndividualPositionPL;
          }
          (0, h.ensure)(this._individualPositionsCache).update(e, t);
        }
        onIndividualPositionPartialUpdate(e, t) {
          (0, h.ensure)(this._individualPositionsCache).partialUpdate(e, t);
        }
        onIndividualPositionsFullUpdate() {
          (0, h.assert)(
            !!this.config.supportPositionNetting,
            "Broker doesn`t support individual positions"
          ),
            this._individualPositionsCache?.fullUpdate(),
            this.individualPositionsFullUpdate.fire();
        }
        onCurrentAccountChanged() {
          null !== this._positionsCache && this._positionsCache.fullUpdate(),
            this._ordersCache.fullUpdate(),
            this._individualPositionsCache &&
              this._individualPositionsCache.fullUpdate();
          const e = this.currentAccount();
          this.currentAccountUpdate.fire(e);
        }
        patchConfig(e) {
          var t;
          !(t = e).hasOwnProperty("supportBrackets") ||
            t.hasOwnProperty("supportOrderBrackets") ||
            t.hasOwnProperty("supportPositionBrackets") ||
            (f.logWarn(
              "supportBrackets is deprecated. Use supportOrderBrackets and supportPositionBrackets instead."
            ),
            (t.supportOrderBrackets = t.supportBrackets),
            (t.supportPositionBrackets = t.supportBrackets)),
            t.hasOwnProperty("supportModifyOrder") &&
              (f.logWarn(
                "supportModifyOrder is deprecated. Use supportModifyOrderPrice, supportEditAmount and supportModifyBrackets instead."
              ),
              (t.supportModifyOrderPrice = t.supportModifyOrder),
              (t.supportEditAmount = t.supportModifyOrder),
              (t.supportModifyBrackets = t.supportModifyOrder)),
            Object.assign(this.config, e),
            Object.assign(this._brokerMetainfo.configFlags, e),
            (this._brokerMetainfo = this._patchMetainfo(this._brokerMetainfo)),
            this._updateConfigDependentProperties();
        }
        async getOrderDialogOptions(e) {
          if (void 0 !== this._brokerConnection.getOrderDialogOptions)
            try {
              return await this._brokerConnection.getOrderDialogOptions(e);
            } catch (e) {
              return void this._brokerLogger.logError(
                `Failed to fetch options for the order dialog: ${(0,
                w.getLoggerMessage)(e)}`
              );
            }
        }
        async getPositionDialogOptions(e) {
          try {
            return await this._brokerConnection.getPositionDialogOptions?.(e);
          } catch (e) {
            return void this._brokerLogger.logError(
              `Failed to fetch options for the position dialog: ${(0,
              w.getLoggerMessage)(e)}`
            );
          }
        }
        async getSymbolSpecificTradingOptions(e) {
          try {
            const { allowedDurations: t, allowedOrderTypes: i } =
                await this.symbolInfo(e),
              {
                supportOrderBrackets: s,
                supportPositionBrackets: r,
                supportIndividualPositionBrackets: o,
                supportReversePosition: n,
                supportModifyBrackets: a,
                supportAddBracketsToExistingOrder: l,
                supportModifyPositionBrackets: d,
                supportModifyOrderBrackets: u,
              } = this._brokerMetainfo.configFlags;
            return {
              allowedDurations: t,
              allowedOrderTypes: i,
              supportOrderBrackets: s,
              supportPositionBrackets: r,
              supportIndividualPositionBrackets: o,
              supportReversePosition: n,
              supportModifyBrackets: a,
              supportAddBracketsToExistingOrder: l,
              supportModifyPositionBrackets: d,
              supportModifyOrderBrackets: u,
              supportBracketsInPips: !0,
              ...(await this._brokerConnection.getSymbolSpecificTradingOptions?.(
                e
              )),
            };
          } catch (e) {
            return void this._brokerLogger.logWarn((0, w.getLoggerMessage)(e));
          }
        }
        async getValidationRules(e) {
          return void 0 !== this._brokerConnection.getValidationRules
            ? this._brokerConnection.getValidationRules(e)
            : void 0;
        }
        chartContextMenuActions(e, t) {
          return this._brokerConnection.chartContextMenuActions(e, t);
        }
        buttonDropdownActions() {
          return this._host.buttonDropdownActions();
        }
        connectionStatus() {
          if (this._brokerConnection.connectionStatus) {
            const e = this._brokerConnection.connectionStatus();
            if (
              (function (e) {
                return re.includes(e);
              })(e)
            )
              return e;
            throw new Error(
              "Method connectionStatus is not properly implemented - Invalid returned value"
            );
          }
          throw new Error(
            "Method connectionStatus is not properly implemented"
          );
        }
        isConnected() {
          return 1 === this._brokerConnection.connectionStatus();
        }
        signIn(e, t, i, s) {
          return (
            this._brokerLogger.logNormal(`Try to login with username: ${e}`),
            (this._loggedInManually = !0),
            this._brokerConnection.signIn(e, t, i, s)
          );
        }
        loggedInManually() {
          return this._loggedInManually;
        }
        disconnect(e = !1) {
          try {
            return this._brokerConnection.disconnect(e);
          } catch {
            ee.logWarn("Failed to disconnect");
          }
        }
        currentAccount() {
          return this._brokerConnection.currentAccount
            ? this._brokerConnection.currentAccount()
            : "";
        }
        currentAccountType() {
          return this._brokerConnection.currentAccountType
            ? this._brokerConnection.currentAccountType()
            : void 0;
        }
        checkUserHasLiveAccount() {
          return void 0 !== this._brokerConnection.checkUserHasLiveAccount
            ? this._brokerConnection.checkUserHasLiveAccount()
            : this.currentAccountType() === d.AccountType.Live;
        }
        metainfo() {
          return this._brokerMetainfo;
        }
        brokerPlan() {
          return this._brokerPlan;
        }
        bro() {
          return this._brokerConnection;
        }
        fireSubscription(e, t, i, s) {
          if (
            (void 0 === this._lastFireResult[t] &&
              (this._lastFireResult[t] = {
                Realtime: null,
                PL: null,
                Equity: null,
                DOM: null,
                IndividualPositionPL: null,
                PipValue: null,
                MarginAvailable: null,
                CryptoBalance: null,
              }),
            ((0, h.ensure)(this._lastFireResult[t])[e] = {
              data: i,
              time: Date.now(),
            }),
            void 0 === this._subscriptions[t])
          )
            return;
          const r = (0, h.ensure)(this._subscriptions[t]);
          (0, h.ensure)(r[e]).forEach((e) => e(t, i, s));
        }
        positions(e) {
          return this.config.supportPositions
            ? (this._makeSureBrokerIsConnected(),
              this._positions().then((t) =>
                t.filter((t) => void 0 === e || t.symbol === e)
              ))
            : Promise.resolve([]);
        }
        disconnectWarningMessage() {
          return this._brokerConnection.disconnectWarningMessage
            ? this._brokerConnection.disconnectWarningMessage()
            : null;
        }
        connectWarningMessages() {
          return this._brokerConnection.connectWarningMessages
            ? this._brokerConnection.connectWarningMessages()
            : null;
        }
        individualPositions(e) {
          return (
            this._makeSureBrokerIsConnected(),
            (0, h.assert)(
              !!this.config.supportPositionNetting,
              "Broker doesn`t support individual positions"
            ),
            this._individualPositions().then((t) =>
              t.filter((t) => void 0 === e || t.symbol === e)
            )
          );
        }
        positionById(e) {
          return this._brokerConnection.positionById
            ? this._brokerConnection.positionById(e)
            : this.positions().then((t) => t.find((t) => t.id === e));
        }
        individualPositionById(e) {
          return (
            (0, h.assert)(
              !!this.config.supportPositionNetting,
              "Broker doesn`t support individual positions"
            ),
            this.individualPositions().then((t) => t.find((t) => t.id === e))
          );
        }
        orders(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._orders().then((t) =>
              t.filter((t) => void 0 === e || t.symbol === e)
            )
          );
        }
        ordersHistory() {
          return (
            this._makeSureBrokerIsConnected(),
            this.config.supportOrdersHistory &&
            this._brokerConnection.ordersHistory
              ? this._brokerConnection.ordersHistory()
              : Promise.resolve([])
          );
        }
        async executions(e) {
          return this.config.supportExecutions
            ? (this._makeSureBrokerIsConnected(),
              this._brokerConnection.executions(e))
            : [];
        }
        async allExecutions() {
          return void 0 === this._brokerConnection.allExecutions
            ? []
            : this._brokerConnection.allExecutions();
        }
        orderById(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._brokerConnection
              .orders()
              .then((t) => t.find((t) => t.id === e))
          );
        }
        accountManagerInfo() {
          return this._brokerConnection.accountManagerInfo();
        }
        isTradable(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._brokerConnection
              .isTradable(e)
              .then(
                (t) => (
                  "object" != typeof t && (t = { tradable: t }),
                  t.tradable ||
                    void 0 !== t.reason ||
                    (t.reason = (0, P.makeNonTradableSymbolText)(
                      (0, k.htmlEscape)(e),
                      this._brokerMetainfo.title
                    )),
                  t
                )
              )
          );
        }
        formatter(e, t = !0) {
          return (
            this._makeSureBrokerIsConnected(),
            this._formattersCache[e] ||
              (this._formattersCache[e] =
                (this._brokerConnection.formatter &&
                  this._brokerConnection.formatter(e, t)) ||
                this._host.defaultFormatter(e, t)),
            (0, g.makeTimeLimited)(
              this._formattersCache[e],
              1e4,
              "formatter not received"
            )
          );
        }
        spreadFormatter(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._spreadFormattersCache[e] ||
              (this._spreadFormattersCache[e] =
                (this._brokerConnection.spreadFormatter &&
                  this._brokerConnection.spreadFormatter(e)) ||
                this._host.defaultFormatter(e, !1)),
            (0, g.makeTimeLimited)(
              this._spreadFormattersCache[e],
              1e4,
              "spreadFormatter not received"
            )
          );
        }
        quantityFormatter(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._quantityFormattersCache[e] ||
              (this._quantityFormattersCache[e] =
                (this._brokerConnection.quantityFormatter &&
                  this._brokerConnection.quantityFormatter(e)) ||
                this._host.quantityFormatter()),
            (0, g.makeTimeLimited)(
              this._quantityFormattersCache[e],
              1e4,
              "quantityFormatter not received"
            )
          );
        }
        async createInitialPreOrder(e) {
          const [t, i] = await Promise.all([
            this.getOrderDialogOptions(e.symbol),
            this.symbolInfo(e.symbol),
          ]);
          return this._createInitialPreOrder(e, i, t);
        }
        async createPlaceOrderContext(e) {
          const {
            order: t,
            source: i,
            isDisposable: s,
            isValidationEnabled: r,
            silent: n,
            signal: a = null,
          } = e;
          if (s) return this._createPlaceOrderContext(e);
          const l = this._placeOrderContextWithMetaInfo;
          if (
            void 0 !== l &&
            l.context.status() !== O.PlaceOrEditContextStatus.Destroyed &&
            l.context.data().symbol === t.symbol &&
            l.isValidationEnabled === r
          )
            return await l.context.setData(t, i, n), l.context;
          this._placeOrderContextWithMetaInfo?.context.destroy();
          const d = await this._createPlaceOrderContext(e);
          if (a?.aborted) throw (d.destroy(), (0, o.createAbortError)());
          return (
            l === this._placeOrderContextWithMetaInfo &&
              (this._placeOrderContextWithMetaInfo = {
                context: d,
                isValidationEnabled: r,
              }),
            d
          );
        }
        async createEditOrderContext(e) {
          const {
            order: t,
            source: i,
            isDisposable: s,
            isValidationEnabled: r,
          } = e;
          if (s) return this._createEditOrderContext(e);
          const o = this._editOrderContextWithMetaInfo;
          if (
            void 0 !== o &&
            o.context.status() !== O.PlaceOrEditContextStatus.Destroyed &&
            o.context.data().id === t.id &&
            o.isValidationEnabled === r
          )
            return await o.context.setData(t, i), o.context;
          const n = await this._createEditOrderContext(e);
          return (
            o === this._editOrderContextWithMetaInfo &&
              (this._editOrderContextWithMetaInfo = {
                context: n,
                isValidationEnabled: r,
              }),
            n
          );
        }
        placeOrder(e, t) {
          return this._placeOrder(e, t);
        }
        previewOrder(e) {
          return this._previewOrder(e);
        }
        modifyOrder(e, t) {
          return this._modifyOrder(e, t);
        }
        cancelOrder(e) {
          return (
            se(e),
            this._makeSureBrokerIsConnected(),
            this.processErrors(
              this._brokerConnection.cancelOrder(e),
              !0,
              s.t(null, void 0, i(919116))
            )
          );
        }
        cancelOrders(e, t, r) {
          return (
            this._makeSureBrokerIsConnected(),
            this._brokerConnection.cancelOrders
              ? this.processErrors(
                  this._brokerConnection.cancelOrders(e, t, r),
                  !0,
                  s.t(null, void 0, i(759469))
                )
              : this.processErrors(
                  Promise.reject(
                    "`cancelOrders` method is not implemented in your broker."
                  ),
                  !1
                )
          );
        }
        async closePosition(e, t) {
          let i;
          se(e),
            this._makeSureBrokerIsConnected(),
            (0, h.assert)(
              void 0 === t || !!this.config.supportPartialClosePosition,
              "Broker doesn`t support partial position closing"
            );
          const s = new Promise(async (s, r) => {
            try {
              const r = await this._positionCopyById(e);
              (i = (e) => {
                void 0 !== r &&
                  e.id === r.id &&
                  e.symbol === r.symbol &&
                  e.qty !== r.qty &&
                  (this.positionUpdate.unsubscribe(this, i), s(!0));
              }),
                this.positionUpdate.subscribe(this, i),
                await this._closePosition(e, t);
            } catch (e) {
              r(e);
            }
          });
          return (0, g.makeTimeLimited)(
            s,
            3e4,
            "Position closing timeout"
          ).catch(
            (e) => (
              this._brokerLogger.logError(
                `${te}: ${(0, w.getLoggerMessage)(e)}`
              ),
              this.positionUpdate.unsubscribe(this, i),
              !1
            )
          );
        }
        async closeIndividualPosition(e, t) {
          se(e),
            this._makeSureBrokerIsConnected(),
            (0, h.assert)(
              !!this.config.supportPositionNetting,
              "Broker doesn`t support individual positions"
            ),
            (0, h.assert)(
              void 0 === t ||
                (this.config.supportPartialCloseIndividualPosition ?? !1),
              "Broker doesn`t support partial individual position closing"
            );
          const r = (0, h.ensureDefined)(await this.individualPositionById(e));
          if (0 === r.qty)
            return (
              this._host.showNotification(
                s.t(null, void 0, i(139924)),
                s.t(null, void 0, i(445863)),
                0
              ),
              !1
            );
          if (void 0 === t || t <= Math.abs(r.qty)) {
            if (this._brokerConnection.closeIndividualPosition) {
              const i = I(t ?? Math.abs(r.qty), r);
              return this.processErrors(
                this._brokerConnection.closeIndividualPosition(e, t),
                !0,
                te,
                () =>
                  (0, h.ensureNotNull)(this._tradingStat).trackOrderPlaced({
                    order: i,
                  })
              );
            }
            throw new Error(
              "Method closeIndividualPosition is not implemented"
            );
          }
          return (
            this._host.showNotification(
              s.t(null, void 0, i(139924)),
              s.t(null, void 0, i(819189)),
              0
            ),
            !1
          );
        }
        reversePosition(e) {
          if (
            (se(e),
            this._makeSureBrokerIsConnected(),
            this.config.supportMultiposition &&
              !this.config.supportNativeReversePosition)
          )
            throw new Error("Cannot reverse position on multiposition account");
          let t;
          const i = new Promise(async (i, s) => {
            try {
              const s = await this._positionCopyById(e);
              (t = (e) => {
                void 0 !== s &&
                  e.symbol === s.symbol &&
                  e.side !== s.side &&
                  (this.positionUpdate.unsubscribe(this, t), i(!0));
              }),
                this.positionUpdate.subscribe(this, t),
                await this._reversePosition(e);
            } catch (e) {
              s(e);
            }
          });
          return (0, g.makeTimeLimited)(
            i,
            3e4,
            "Position reversing timeout"
          ).catch(
            (e) => (
              this._brokerLogger.logError(
                `${ie}: ${(0, w.getLoggerMessage)(e)}`
              ),
              this.positionUpdate.unsubscribe(this, t),
              !1
            )
          );
        }
        editPositionBrackets(e, t, r) {
          if (
            (this._makeSureBrokerIsConnected(),
            this._brokerConnection.editPositionBrackets)
          )
            return this.processErrors(
              this._brokerConnection.editPositionBrackets(e, t, r),
              !0,
              s.t(null, void 0, i(209877))
            );
          throw new Error("Method editPositionBrackets is not implemented");
        }
        editIndividualPositionBrackets(e, t) {
          if (
            (this._makeSureBrokerIsConnected(),
            (0, h.assert)(
              !!this.config.supportIndividualPositionBrackets,
              "Broker doesn`t support brackets on individual positions"
            ),
            this._brokerConnection.editIndividualPositionBrackets)
          )
            return this.processErrors(
              this._brokerConnection.editIndividualPositionBrackets(e, t),
              !0,
              s.t(null, void 0, i(209877))
            );
          throw new Error(
            "Method editIndividualPositionBrackets is not implemented"
          );
        }
        async subscribeRealtime(e, t) {
          this._makeSureBrokerIsConnected();
          const i = { symbol: e, listener: t, provider: 0 };
          this._realtimeSubscriptionState.push(i);
          const s = await this.symbolInfo(e),
            r = this._realtimeSubscriptionState.findIndex(
              (i) => i.symbol === e && i.listener === t
            );
          if (-1 !== r)
            return void 0 !== s.hasQuotes && !1 === s.hasQuotes
              ? ((this._realtimeSubscriptionState[r].provider = 1),
                (0, h.ensure)(this._brokerRealtimeAdapter).subscribeRealtime(
                  e,
                  t
                ))
              : ((this._realtimeSubscriptionState[r].provider = 2),
                this._addSubscription("Realtime", e, t));
        }
        async quotesSnapshot(e) {
          let t, i;
          const s = (e, r) => {
              (i = r),
                (r.ask || r.bid) && (this.unsubscribeRealtime(e, s), t?.(r));
            },
            r = new Promise((i) => {
              (t = i), this.subscribeRealtime(e, s);
            });
          try {
            return await (0, g.makeTimeLimited)(
              r,
              1e4,
              "quotesSnapshot not received"
            );
          } catch (t) {
            if ((this.unsubscribeRealtime(e, s), void 0 !== i)) return i;
            throw t;
          }
        }
        subscribeDOM(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this._addSubscription("DOM", e, t)
          );
        }
        subscribePipValue(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this._addSubscription("PipValue", e, t)
          );
        }
        subscribePL(e, t) {
          this._makeSureBrokerIsConnected(), this._addSubscription("PL", e, t);
        }
        subscribeIndividualPositionPL(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this._addSubscription("IndividualPositionPL", e, t)
          );
        }
        subscribeCryptoBalance(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this._addSubscription("CryptoBalance", e, t)
          );
        }
        subscribeEquity(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._addSubscription("Equity", "Equity", e)
          );
        }
        subscribeMarginAvailable(e) {
          return (
            this._makeSureBrokerIsConnected(),
            this._addSubscription("MarginAvailable", "MarginAvailable", e)
          );
        }
        unsubscribeRealtime(e, t) {
          const i = this._realtimeSubscriptionState.findIndex(
            (i) => i.symbol === e && i.listener === t
          );
          -1 !== i &&
            (1 === this._realtimeSubscriptionState[i].provider
              ? (0, h.ensure)(this._brokerRealtimeAdapter).unsubscribeRealtime(
                  e,
                  t
                )
              : this._removeSubscription("Realtime", e, t),
            this._realtimeSubscriptionState.splice(i, 1));
        }
        unsubscribeDOM(e, t) {
          this._removeSubscription("DOM", e, t);
        }
        unsubscribePipValue(e, t) {
          this._removeSubscription("PipValue", e, t);
        }
        unsubscribePL(e, t) {
          this._removeSubscription("PL", e, t);
        }
        unsubscribeIndividualPositionPL(e, t) {
          this._removeSubscription("IndividualPositionPL", e, t);
        }
        unsubscribeCryptoBalance(e, t) {
          this._removeSubscription("CryptoBalance", e, t);
        }
        unsubscribeEquity(e) {
          this._removeSubscription("Equity", "Equity", e);
        }
        unsubscribeMarginAvailable(e) {
          this._removeSubscription("MarginAvailable", "MarginAvailable", e);
        }
        async accountMetainfo() {
          const e = await this.accountsMetainfo(),
            t = this.currentAccount(),
            i = e.find((e) => e.id === t);
          if (void 0 === i) throw new Error("accountMetainfo not received");
          return i;
        }
        accountsMetainfo() {
          return (0, g.makeTimeLimited)(
            this._brokerConnection.accountsMetainfo(),
            1e4,
            "accountsMetainfo not received"
          );
        }
        setCurrentAccount(e) {
          if (void 0 === this._brokerConnection.setCurrentAccount)
            throw new Error(
              `${this._brokerMetainfo.title} doesn't support sub-accounts`
            );
          this._brokerConnection.setCurrentAccount(e);
        }
        symbolInfo(e) {
          return (0, g.makeTimeLimited)(
            this._brokerConnection.symbolInfo(e),
            1e4,
            "symbolInfo not received"
          );
        }
        async getPositionCurrency(e) {
          try {
            const t = await this._brokerConnection.symbolInfo(e);
            if (this._brokerMetainfo.configFlags.positionPLInInstrumentCurrency)
              return t.currency;
            const i = await this.accountMetainfo();
            return (0, T.getCurrency)(i, !0);
          } catch (e) {
            return void ee.logError(e);
          }
        }
        sessionId() {
          return this._sessionId;
        }
        bugReportInfo() {
          function e(e) {
            return JSON.parse(JSON.stringify(e));
          }
          function t(e) {
            if ("object" != typeof e) return e;
            if ((0, u.isArray)(e)) return e.map(t);
            const i = {};
            for (const t in e) "object" != typeof e[t] && (i[t] = e[t]);
            return i;
          }
          return Promise.all([
            this.orders(),
            this.positions(),
            this.config.supportPositionNetting
              ? this.individualPositions()
              : Promise.resolve([]),
          ]).then((i) => ({
            activeBroker: this.metainfo().title,
            orders: t(e(i[0])),
            positions: t(e(i[1])),
            individualPositions: t(e(i[2])),
            silentOrdersPlacement: this._host.silentOrdersPlacement().value(),
            floatingPanel: (0, h.ensureNotNull)(
              this._host.sellBuyButtonsVisibility()
            ).value(),
            account: this.currentAccount(),
            accountType: this.currentAccountType(),
            lastUpdates: this._lastFireResult,
            time: Date.now(),
            brokerSpecific: this._brokerConnection.bugReportInfo
              ? this._brokerConnection.bugReportInfo()
              : null,
            sessionId: this._sessionId,
            deviceId: getDeviceId(),
          }));
        }
        processErrors(e, t, i, s) {
          if (!(0, u.isPromise)(e))
            throw new Error(
              "Broker incorrectly implements API, should return Promise"
            );
          return e
            .then((e) => s && s(e))
            .then((e) => "boolean" != typeof e || e)
            .catch(
              (e) => (
                (0, o.isAbortError)((0, P.getErrorCauses)(e)[0]) ||
                  (t && l.enabled("trading_notifications")
                    ? this._showErrorNotification({
                        error: e,
                        notificationTitle: i,
                      })
                    : ee.logWarn(e)),
                Promise.resolve(!1)
              )
            )
            .then((e) => (this.tradingOperationFinished.fire(e), e));
        }
        setDurations(e) {
          this._brokerMetainfo.durations = e.slice();
        }
        setSymbolSearchId(e) {
          this._brokerMetainfo.backendBrokerName = e;
        }
        getRealtimeDataCheckParams() {
          return this._brokerConnection.getRealtimeDataCheckParams
            ? this._brokerConnection.getRealtimeDataCheckParams()
            : {};
        }
        getVerifyLiveAccountParams() {
          if (void 0 === this._brokerConnection.getVerifyLiveAccountParams)
            throw new Error(
              `Method getVerifyLiveAccountParams for broker ${this._brokerMetainfo.id} is not implemented`
            );
          return this._brokerConnection.getVerifyLiveAccountParams();
        }
        unhideSymbolSearchGroups() {
          return this._brokerConnection.unhideSymbolSearchGroups
            ? this._brokerConnection.unhideSymbolSearchGroups()
            : [];
        }
        destroy() {
          void 0 !== this._brokerConnection.destroy &&
            this._brokerConnection.destroy();
        }
        currentBroker() {
          return this._brokerMetainfo.id;
        }
        resetConfirmations() {
          this._brokerConnection?.resetConfirmations?.();
        }
        orderInfo(e) {
          if (!this._brokerConnection.orderInfo)
            throw new Error("Broker Provided Order Info is not supported");
          return this._brokerConnection.orderInfo(e);
        }
        _showErrorNotification(e) {
          const {
            error: t,
            notificationTitle: r,
            showErrorNotificationEnding: o = !0,
          } = e;
          let n = "";
          "string" == typeof t
            ? (n = t)
            : "object" == typeof t &&
              null !== t &&
              "message" in t &&
              "string" == typeof t.message &&
              (n = (0, k.removeTags)(t.message)),
            0 !== n.length &&
              (n =
                (0, T.addAsciiDotIfTextDoesNotEndWithSentenceEndingMark)(n) +
                " "),
            o &&
              (n +=
                this._brokerMetainfo.customErrorNotificationEnding ??
                s.t(null, void 0, i(926986))),
            this._host.showNotification(r || "", n.trim(), 0);
        }
        _makeContextErrorHandler(e) {
          return l.enabled("trading_notifications")
            ? (t) => {
                t instanceof Error &&
                  this._brokerLogger.logNormal(
                    `Failed to validate context: ${(0, w.getLoggerMessage)(t)}`
                  ),
                  this._showErrorNotification({
                    error: t,
                    notificationTitle: e,
                    showErrorNotificationEnding: !1,
                  });
              }
            : (e) => ee.logWarn((0, w.getErrorMessage)(e));
        }
        async _createEditOrderContext(e) {
          const { order: t, source: r, isDisposable: o = !1 } = e,
            n = new J({
              orderData: t,
              source: r,
              isDisposable: o,
              callbacks: {
                modifyOrder: this._modifyOrder.bind(this),
                metainfo: this.metainfo.bind(this),
                symbolInfo: this.symbolInfo.bind(this),
                orderById: this.orderById.bind(this),
                previewOrder: this._previewOrder.bind(this),
                handleError: this._makeContextErrorHandler(
                  s.t(null, void 0, i(663504))
                ),
              },
            });
          return await n.onReady(), n;
        }
        async _createPlaceOrderContext(e) {
          const {
              order: t,
              source: r,
              isDisposable: o = !1,
              isValidationEnabled: l = !0,
            } = e,
            [d, u, c] = await Promise.all([
              this.symbolInfo(t.symbol),
              this.formatter(t.symbol),
              this.getOrderDialogOptions(t.symbol),
            ]),
            { configFlags: h, orderRules: p = [] } = this.metainfo(),
            _ =
              h.supportBalances && d.baseCurrency
                ? this._cryptoBalanceObservable(d.baseCurrency)
                : (0, n.of)(null),
            g =
              h.supportBalances && d.quoteCurrency
                ? this._cryptoBalanceObservable(d.quoteCurrency)
                : (0, n.of)(null),
            b = await (0, B.extractTakeProfitValidationRules)(this, t.symbol),
            y = await (0, B.extractStopLossValidationRules)(this, t.symbol),
            m = await (0, B.extractGuaranteedStopValidationRules)(
              this,
              t.symbol
            ),
            v = p.filter(B.isLimitPercentValidationRule),
            f = p.filter(B.isStopPercentValidationRule);
          (h.supportStopOrdersInBothDirections &&
            h.supportStopLimitOrdersInBothDirections) ||
            (v.push(
              ...((await (0, B.extractLimitValidationRules)(this, t.symbol)) ??
                [])
            ),
            f.push(
              ...((await (0, B.extractStopValidationRules)(this, t.symbol)) ??
                [])
            ));
          const P = (0, a.fromEventPattern)(
              (e) => this.subscribeRealtime(t.symbol, e),
              (e) => this.unsubscribeRealtime(t.symbol, e),
              (e, t) => t
            ),
            k = new G({
              orderData: t,
              source: r,
              instrumentInfo: d,
              quotes$: P,
              configFlags: h,
              formatter: u,
              isValidationEnabled: l,
              isDisposable: o,
              orderDialogOptions: c,
              tpValidationRules: b,
              slValidationRules: y,
              guaranteedStopValidationRules: m,
              limitOrderRules: v,
              stopOrderRules: f,
              isStatusEditing: !1,
              baseCurrencyCryptoBalance$: _,
              quoteCurrencyCryptoBalance$: g,
              callbacks: {
                createInitialPreOrder: async (e) =>
                  this._createInitialPreOrder(e, d, c),
                placeOrder: (e, t) => this._placeOrder(e, t),
                previewOrder: (e) => this._previewOrder(e),
                handleError: this._makeContextErrorHandler(
                  s.t(null, void 0, i(74390))
                ),
              },
            });
          return await k.onReady(), k;
        }
        _createInitialPreOrder(e, t, i) {
          if (void 0 === e.duration) {
            const { durations: i } = this.metainfo(),
              s = (0, T.getOrderDuration)({
                orderDuration: void 0,
                orderType: e.type,
                savedDuration:
                  this._getTradingSettingsStorage?.()?.duration(
                    e.symbol,
                    e.type
                  ) ?? null,
                orderDurations: i,
                symbolDurations: t.allowedDurations,
              });
            null !== s && (e.duration = s);
          }
          if (void 0 === e.customFields) {
            const t = this._getSavedCustomFields(e.symbol, e.type, i);
            void 0 !== t && (e.customFields = t);
          }
          return e;
        }
        _getSavedCustomFields(e, t, i) {
          const s = this._getTradingSettingsStorage?.() ?? void 0;
          if (
            void 0 === s ||
            void 0 === i?.customFields ||
            0 === i.customFields.length
          )
            return;
          const r = (0, M.filterAllowedCustomFields)(t, i.customFields).map(
              (e) => e.id
            ),
            o = s.customFields(e, t, r),
            n = (0, T.adjustSavedCustomFieldsValues)(o, i);
          return 0 !== Object.keys(n).length ? n : void 0;
        }
        _placeOrder(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this.processErrors(
              this._brokerConnection.placeOrder(e, t),
              !0,
              s.t(null, void 0, i(74390)),
              (t) => {
                (0, h.ensureNotNull)(this._tradingStat).trackOrderPlaced({
                  order: { ...e, id: t.orderId },
                  label: t.label,
                  source: e.source,
                }),
                  this._host.trackEvent(
                    "",
                    "SilentMode",
                    this._host.silentOrdersPlacement().value() ? "On" : "Off"
                  );
              }
            )
          );
        }
        async _modifyOrder(e, t) {
          this._makeSureBrokerIsConnected();
          const r = new Set((await this._orders()).map(({ id: e }) => e));
          r.delete(e.id);
          return (
            (await this.processErrors(
              this._brokerConnection.modifyOrder(e, t),
              !0,
              s.t(null, void 0, i(663504)),
              () =>
                (0, h.ensureNotNull)(this._tradingStat).trackOrderModified(e)
            )) && this._waitForOrderModification(e, r)
          );
        }
        _previewOrder(e) {
          if (!this._brokerConnection.previewOrder)
            throw new Error("Order preview is not supported");
          return this._brokerConnection.previewOrder(e);
        }
        _initializeConnectProtection() {
          let e = null;
          this.connectionStatusUpdate.subscribe(null, (t) => {
            if ((e && (clearTimeout(e), (e = null)), 2 === t)) {
              const t = (0, T.isOAuthAuthType)(this.config.authorizationType)
                ? 3e5
                : 6e4;
              e = setTimeout(() => {
                this._host.selectBroker(),
                  this._host.showNotification(
                    s.t(null, void 0, i(369635)),
                    s.t(null, void 0, i(949880))
                  );
              }, t);
            }
          });
        }
        _fakeSubscribeDOM(e) {
          (this._fakeDOMSubscriptions[e] = (e, t) => {
            const i = t.ask || t.trade,
              s = t.bid || t.trade,
              r = {
                snapshot: !0,
                asks: i ? [{ price: i, volume: t.ask_size || 1 / 0 }] : [],
                bids: s ? [{ price: s, volume: t.bid_size || 1 / 0 }] : [],
              };
            this._host.domUpdate(e, r);
          }),
            this.subscribeRealtime(e, this._fakeDOMSubscriptions[e]);
        }
        _fakeUnsubscribeDOM(e) {
          this.unsubscribeRealtime(e, this._fakeDOMSubscriptions[e]);
        }
        _isMaintenance() {
          return isFeatureEnabled(
            (0, T.makeMaintananceFeatureToggleName)(this._brokerMetainfo.id)
          );
        }
        _isBrokerSideMaintenance() {
          return isFeatureEnabled(
            (0, T.makeBrokerSideMaintananceFeatureToggleName)(
              this._brokerMetainfo.id
            )
          );
        }
        async _positionCopyById(e) {
          const t = await this.positionById(e);
          return void 0 !== t ? (0, r.default)(t) : void 0;
        }
        _patchBrokerSubscribeUnsubscribeDOMMethods() {
          const e = !this._brokerMetainfo.configFlags.supportLevel2Data;
          (this._brokerConnection.subscribeDOM = e
            ? (e) => {
                this._fakeSubscribeDOM(e);
              }
            : this._originalDOMSubscriptionMethods.subscribeDOM),
            (this._brokerConnection.unsubscribeDOM = e
              ? (e) => {
                  this._fakeUnsubscribeDOM(e);
                }
              : this._originalDOMSubscriptionMethods.unsubscribeDOM);
        }
        _patchMetainfo(e) {
          const t = (0, S.deepCopy)(e);
          (t.configFlags.supportNativeReversePosition =
            !this.config.supportMultiposition ||
            this.config.supportNativeReversePosition),
            (t.configFlags.supportClosePosition = !0),
            (t.configFlags.supportPLUpdate = !0);
          const i =
            !Boolean(this.config.supportStopLoss) &&
            !Boolean(this.config.supportGuaranteedStop) &&
            !Boolean(this.config.supportTrailingStop);
          return (
            (t.configFlags.supportStopLoss =
              !!i || this.config.supportStopLoss),
            t
          );
        }
        _addSubscription(e, t, i) {
          this._pendingSubscriptions.push({
            brokerMethodName: e,
            symbol: t,
            listener: i,
          });
          const s = this._lastFireResult[t];
          if (
            (void 0 !== s &&
              void 0 !== s[e] &&
              null !== s[e] &&
              i(t, s[e].data),
            !this._removePendingSubscription({
              brokerMethodName: e,
              symbol: t,
              listener: i,
            }))
          )
            return;
          void 0 === this._subscriptions[t] &&
            (this._subscriptions[t] = {
              Realtime: [],
              PL: [],
              Equity: [],
              DOM: [],
              IndividualPositionPL: [],
              PipValue: [],
              MarginAvailable: [],
              CryptoBalance: [],
            });
          const r = (0, h.ensure)(this._subscriptions[t]),
            o = r[e].length > 0;
          if (
            (r[e].push(i), !o && (r[e].length > 0 || "CryptoBalance" === e))
          ) {
            const i = "subscribe" + e;
            this._brokerConnection[i] && this._brokerConnection[i](t);
          }
        }
        _removePendingSubscription(e) {
          const t = this._pendingSubscriptions.findIndex(
            (t) =>
              t.symbol === e.symbol &&
              t.brokerMethodName === e.brokerMethodName &&
              t.listener === e.listener
          );
          return -1 !== t && (this._pendingSubscriptions.splice(t, 1), !0);
        }
        _removeSubscription(e, t, i) {
          if (
            this._removePendingSubscription({
              brokerMethodName: e,
              symbol: t,
              listener: i,
            })
          )
            return;
          if (void 0 === this._subscriptions[t]) return;
          const s = (0, h.ensure)(this._subscriptions[t]),
            r = s[e].indexOf(i);
          if ((r > -1 && s[e].splice(r, 1), 0 === s[e].length)) {
            const i = "unsubscribe" + e;
            this._brokerConnection[i] && this._brokerConnection[i](t);
          }
        }
        _positions() {
          return this._positionsCache
            ? this._positionsCache.getObjects()
            : Promise.resolve([]);
        }
        _individualPositions() {
          return this._individualPositionsCache
            ? this._individualPositionsCache.getObjects()
            : Promise.resolve([]);
        }
        _orders() {
          return this._ordersCache.getObjects();
        }
        _makeSureBrokerIsConnected() {
          (0, h.assert)(
            1 === this.connectionStatus(),
            "Broker is not connected"
          );
        }
        async _placeReversePositionOrder(e) {
          const t = await this.quotesSnapshot(e.symbol),
            i = I(2 * e.qty, e, t);
          return this._placeOrder(i);
        }
        async _closePosition(e, t) {
          const r = (0, h.ensureDefined)(await this.positionById(e));
          if (!(0, T.checkIsExistingPosition)(r)) {
            const e = s.t(null, void 0, i(445863));
            throw (this._host.showNotification(te, e, 0), new Error(e));
          }
          if (!(void 0 === t || t <= Math.abs(r.qty))) {
            const e = s.t(null, void 0, i(819189));
            throw (this._host.showNotification(te, e, 0), new Error(e));
          }
          {
            const i = await this.quotesSnapshot(r.symbol),
              s = I(t ?? Math.abs(r.qty), r, i);
            if (
              this.config.supportClosePosition &&
              this._brokerConnection.closePosition
            ) {
              if (
                !(await this.processErrors(
                  this._brokerConnection.closePosition(e, t),
                  !0,
                  te,
                  () =>
                    (0, h.ensureNotNull)(this._tradingStat).trackOrderPlaced({
                      order: s,
                    })
                ))
              )
                throw new Error(te);
            } else {
              if (
                !(await this.processErrors(
                  this._brokerConnection.placeOrder(s),
                  !0,
                  te,
                  () =>
                    (0, h.ensureNotNull)(this._tradingStat).trackOrderPlaced({
                      order: s,
                    })
                ))
              )
                throw new Error(te);
            }
          }
        }
        async _reversePosition(e) {
          const t = (0, h.ensureDefined)(await this.positionById(e));
          if (0 === t.qty) {
            const e = s.t(null, void 0, i(887411));
            throw (this._host.showNotification(ie, e, 0), new Error(e));
          }
          this.config.supportNativeReversePosition &&
          this._brokerConnection.reversePosition
            ? await this.processErrors(
                this._brokerConnection.reversePosition(e),
                !0,
                ie
              )
            : await this.processErrors(
                this._placeReversePositionOrder(t),
                !0,
                ie,
                () => (0, h.ensureNotNull)(this._tradingStat).trackOrderPlaced()
              );
        }
        async _waitForOrderModification(e, t) {
          return new Promise(async (i) => {
            const s = () => {
                i(!0), o(), clearTimeout(n);
              },
              r = (t) => {
                this._areOrdersEqual(t, e) && s();
              },
              o = () => this.orderUpdate.unsubscribe(this, r),
              n = setTimeout(() => {
                i(!1),
                  this._brokerLogger.logError(
                    "Failed to modify order: timeout waiting for new order"
                  ),
                  o();
              }, 3e4);
            this.orderUpdate.subscribe(this, r);
            for (const i of await this._orders())
              if (!t.has(i.id) && this._areOrdersEqual(e, i)) return void s();
          });
        }
        _areOrdersEqual(e, t) {
          const { checkBracketsAfterOrderModification: i } =
            this._brokerMetainfo.configFlags;
          return (
            (function (e, t) {
              return (
                e.type === t.type &&
                e.qty === t.qty &&
                e.limitPrice === t.limitPrice &&
                e.stopPrice === t.stopPrice
              );
            })(e, t) &&
            (!i ||
              (function (e, t) {
                return (
                  e.stopLoss === t.stopLoss &&
                  e.takeProfit === t.takeProfit &&
                  e.trailingStopPips === t.trailingStopPips &&
                  e.guaranteedStop === t.guaranteedStop
                );
              })(e, t))
          );
        }
        _updateConfigDependentProperties() {
          const { supportPositions: e } = this._brokerMetainfo.configFlags;
          e
            ? (this._fakePositionUpdateDelegate?.destroy(),
              (this._fakePositionUpdateDelegate = null))
            : (this._fakePositionUpdateDelegate ??= new c.Delegate());
        }
        _cryptoBalanceObservable(e) {
          return (0, a.fromEventPattern)(
            (t) => this.subscribeCryptoBalance(e, t),
            (t) => this.unsubscribeCryptoBalance(e, t),
            (e, t) => t
          );
        }
      }
      var ne = i(870122),
        ae = i.n(ne),
        le = i(240534),
        de = i(834002),
        ue = i(563223),
        ce = i(167543),
        he = i(334529),
        pe = i(172912),
        _e = i(153055),
        ge = i(537008),
        be = i(220858),
        ye = i(151121),
        me = i(605962),
        ve = i(646323);
      class fe {
        constructor(e, t, i, s) {
          (this._lastPL = 0),
            (this._isActive = !1),
            (this._realtimeUpdate = (e, t) => {
              (this._realtimeData = t), this._updatePL();
            }),
            (this._symbol = e.symbol),
            (this._adapter = i),
            (this._onPlUpdate = t),
            (this._side = e.side),
            (this._qty = e.qty),
            (this._avgPrice = e.avgPrice || e.price),
            (this._instrumentInfo = s),
            this.positionUpdate(e);
        }
        positionUpdate(e) {
          (this._avgPrice = e.avgPrice || e.price),
            (this._qty = e.qty),
            (this._side = e.side),
            this._updatePL();
        }
        lastPL() {
          return this._lastPL;
        }
        start() {
          this._isActive ||
            (this._adapter.subscribeRealtime(
              this._symbol,
              this._realtimeUpdate
            ),
            (this._isActive = !0));
        }
        stop() {
          this._isActive &&
            (this._adapter.unsubscribeRealtime(
              this._symbol,
              this._realtimeUpdate
            ),
            (this._isActive = !1));
        }
        _updatePL() {
          if (
            !this._realtimeData ||
            void 0 === this._realtimeData.bid ||
            void 0 === this._realtimeData.ask
          )
            return;
          const e = Number(
            new R.Big(
              1 === this._side ? this._realtimeData.bid : this._realtimeData.ask
            )
              .minus(Math.abs(this._avgPrice))
              .mul(1 === this._side ? 1 : -1)
              .mul(this._qty)
              .mul(this._instrumentInfo.lotSize ?? 1)
              .div(this._instrumentInfo.pipSize)
              .mul(this._instrumentInfo.pipValue)
          );
          (this._lastPL = e), this._onPlUpdate(e);
        }
      }
      var Pe = i(188412);
      var ke = i(386035);
      class Se {
        constructor(e, t, i, s) {
          (this._setDefaultDropdownActionsBound =
            this._setDefaultDropdownActions.bind(this)),
            (this._qtyChangedSubscriptions = new Map()),
            (this.checkRealtimeDataPermissions = (e) =>
              (0, h.ensureNotNull)(
                this._trading,
                "Trading in realtime data permission checker"
              ).checkRealtimeDataPermissions(e)),
            (this.serverLogger = () => this._serverLogger),
            (this.orderPartialUpdate = (e, t) => {
              this._adapter.onOrderPartialUpdate(e, t);
            }),
            (this.positionPartialUpdate = (e, t) => {
              this._adapter.onPositionPartialUpdate(e, t);
            }),
            (this.individualPositionPartialUpdate = (e, t) => {
              this._adapter.onIndividualPositionPartialUpdate(e, t);
            }),
            (this.createMapperAsync = (e, t) => ({
              ready: async () => Promise.resolve(),
              tvToBroker: async (e) => e,
              brokerToTv: async (e) => e,
            })),
            (this.createMapperSync = (e, t) => {
              let i = null;
              {
                const e = Promise.resolve();
                i = {
                  ready: () => e,
                  tvToBroker: (e) => e,
                  brokerToTv: (e) => e,
                };
              }
              return i;
            }),
            (this._trading = e),
            (this._metainfo = t),
            (this._serverLogger =
              null !== i ? this._makeServerLoggerWithFilledInfo(i) : null),
            (this._setDefaultDropdownActionsBound =
              this._setDefaultDropdownActions.bind(this)),
            (this._defaultDropdownActions = !0),
            (this._credentialsStorage = s),
            this._setDefaultDropdownActions(),
            null !== this._trading &&
              (this.sellBuyButtonsVisibility()?.subscribe(
                this._setDefaultDropdownActionsBound
              ),
              (0, h.ensureNotNull)(this.orderPanelVisibility()).subscribe(
                this._setDefaultDropdownActionsBound
              ),
              (0, h.ensureNotNull)(this.domPanelVisibility()).subscribe(
                this._setDefaultDropdownActionsBound
              ));
        }
        createPLEmitter(e, t, i) {
          return new fe(e, t, this._adapter, i);
        }
        getLogger(e) {
          const t = `Trading.${this._metainfo.id}`;
          if (void 0 === e) return (0, _.getLogger)(t);
          const { brokerSubsystemId: i, metainfo: s } = e,
            r = void 0 !== i ? `.${i}` : "";
          return (0, _.getLogger)(`${t}${r}`, s);
        }
        translate(e) {
          return e;
        }
        setBrokerConnectionAdapter(e) {
          this._adapter = e;
        }
        patchConfig(e) {
          this._adapter.patchConfig(e);
        }
        showOrderDialog(e, t) {
          return (0, h.ensureNotNull)(this._trading)
            .orderViewController()
            .showOrderView({ order: e, focus: t });
        }
        showPositionBracketsDialog(e, t, i) {
          return (0, h.ensureNotNull)(this._trading)
            .orderViewController()
            .showPositionView(e, t, i);
        }
        showCancelOrderDialog(e, t) {
          return ye.ConfirmOrderCancelDialog.get()
            .open(e)
            .then((e) => {
              e &&
                this._adapter.processErrors(
                  t(),
                  !0,
                  s.t(null, void 0, i(919116))
                );
            });
        }
        showCancelMultipleOrdersDialog(e, t, r, o) {
          return ye.ConfirmOrderCancelDialog.get()
            .multiple(e, t, r)
            .then((e) => {
              e &&
                this._adapter.processErrors(
                  o(),
                  !0,
                  s.t(null, void 0, i(759469))
                );
            });
        }
        showCancelBracketsDialog(e, t) {
          return me.ConfirmBracketsCancelDialog.get()
            .open(e)
            .then((e) => {
              e &&
                this._adapter.processErrors(
                  t(),
                  !0,
                  s.t(null, void 0, i(83683))
                );
            });
        }
        showCancelMultipleBracketsDialog(e, t) {
          return me.ConfirmBracketsCancelDialog.get()
            .multiple(e)
            .then((e) => {
              e &&
                this._adapter.processErrors(
                  t(),
                  !0,
                  s.t(null, void 0, i(83683))
                );
            });
        }
        showReversePositionDialog(e, t) {
          return (0, ve.reversePositionDialog)({
            positionId: e,
            showErrorNotification: (0, h.ensureNotNull)(this._trading)
              .showErrorNotification,
            handler: t,
          });
        }
        showMessageDialog(e, t, i = !1) {
          i
            ? (0, _e.showWarning)({ title: e, html: t })
            : (0, _e.showWarning)({ title: e, text: t });
        }
        showConfirmDialog(e, t, i, s, r) {
          return (0, ge.showConfirmDialog)({
            title: e,
            content: t,
            mainButtonText: i,
            cancelButtonText: s,
            showDisableConfirmationsCheckbox: r,
          });
        }
        showSimpleConfirmDialog(e, t, i, s, r) {
          return (0, be.showSimpleConfirmDialog)({
            title: e,
            text: Array.isArray(t) ? t.join(" ") : t,
            mainButtonText: i,
            mainButtonIntent: "primary",
            cancelButtonText: s,
            showDisableConfirmationsCheckbox: r,
          });
        }
        showSimpleConfirmDialogAndRespectAbort(e, t, i, s, r, o) {
          return (0, be.showSimpleConfirmDialog)({
            title: e,
            text: Array.isArray(t) ? t.join(" ") : t,
            abortSignal: i,
            mainButtonText: s,
            mainButtonIntent: "primary",
            cancelButtonText: r,
            showDisableConfirmationsCheckbox: o,
          });
        }
        showOrderQuestionDialog(e, t, s, r, n, a) {
          return (async function (e) {
            const {
                onConfirm: t,
                onClose: s,
                onCancel: r,
                abortSignal: n,
                showDisableConfirmationsCheckbox: a,
                text: l,
              } = e,
              d = new Pe.DisabledConfirmations();
            if (a && d.has(l))
              return Promise.resolve({ isConfirmed: !0, dontShowAgain: !0 });
            if (n?.aborted)
              return Promise.resolve({ isConfirmed: !1, dontShowAgain: !1 });
            const [{ showSimpleDialog: u }, { SimpleConfirmDialog: c }] =
              await Promise.all([
                Promise.all([
                  i.e(7172),
                  i.e(5480),
                  i.e(9766),
                  i.e(8222),
                  i.e(5375),
                  i.e(601),
                  i.e(1389),
                  i.e(6828),
                  i.e(6605),
                  i.e(2371),
                  i.e(7819),
                  i.e(4952),
                  i.e(5789),
                  i.e(3905),
                  i.e(3566),
                ]).then(i.bind(i, 480994)),
                Promise.all([
                  i.e(7172),
                  i.e(5480),
                  i.e(9766),
                  i.e(8222),
                  i.e(5375),
                  i.e(601),
                  i.e(1389),
                  i.e(6828),
                  i.e(6605),
                  i.e(2371),
                  i.e(7819),
                  i.e(4952),
                  i.e(5789),
                  i.e(3905),
                  i.e(3566),
                ]).then(i.bind(i, 714062)),
              ]);
            return new Promise((i, a) => {
              if (n?.aborted) return void a((0, o.createAbortError)());
              const l = u(
                {
                  ...e,
                  disabledConfirmations: d,
                  onConfirm: (e, s) => {
                    i({ isConfirmed: !0, dontShowAgain: s }),
                      void 0 !== t && t(),
                      e.dialogClose();
                  },
                  onClose: () => {
                    i({ isConfirmed: !1, dontShowAgain: !1 }),
                      void 0 !== s && s();
                  },
                  onCancel: (e) => {
                    i({ isConfirmed: !1, dontShowAgain: !1 }),
                      void 0 !== r && r(e),
                      e.dialogClose();
                  },
                },
                c
              );
              n?.addEventListener(
                "abort",
                () => {
                  l(), a((0, o.createAbortError)());
                },
                { once: !0 }
              );
            });
          })({
            title: e,
            text: Array.isArray(t) ? t.join(" ") : t,
            abortSignal: s,
            mainButtonText: r,
            mainButtonIntent: "primary",
            cancelButtonText: n,
            showDisableConfirmationsCheckbox: a,
          });
        }
        setDurations(e) {
          this._adapter.setDurations(e);
        }
        setSymbolSearchId(e) {
          this._adapter.setSymbolSearchId(e);
        }
        activateBottomWidget() {
          return null !== this._trading
            ? (console.warn(
                '"activateBottomWidget" is now deprecated. Please use "setAccountManagerVisibilityMode" instead '
              ),
              this._trading.toggleTradingWidget())
            : Promise.reject(
                "Activate bottom widget failed: trading is not defined"
              );
        }
        getAccountManagerVisibilityMode() {
          if (null === this._trading)
            throw new Error(
              "Unable to interact with the account manager: trading is not defined"
            );
          return this._trading.getAccountManagerVisibilityMode();
        }
        setAccountManagerVisibilityMode(e) {
          if (l.enabled("trading_account_manager")) {
            if (null === this._trading)
              throw new Error(
                "Unable to interact with the account manager: trading is not defined"
              );
            this._trading.setAccountManagerVisibilityMode(e);
          }
        }
        bottomWidgetMode() {
          if (null === this._trading)
            throw new Error(
              "Unable to provide bottom widget mode: trading is not defined"
            );
          return this._trading.bottomWidgetBarMode();
        }
        trackEvent(e, t, i) {
          null !== this._trading && this._trading.trackEvent(e, t, i);
        }
        defaultFormatter(e, t) {
          return (0, he.getQuoteSessionInstance)("simple").formatter(e, t);
        }
        numericFormatter(e) {
          return Promise.resolve(new ue.NumericFormatter({ precision: e }));
        }
        quantityFormatter(e) {
          return Promise.resolve(new ce.QuantityFormatter(e));
        }
        selectBroker() {
          null !== this._trading && this._trading.selectBroker(null);
        }
        showTradingProperties() {
          null !== this._trading && this._trading.showTradingProperties();
        }
        async getSymbolTypespecs(e) {
          return (0, ke.getSymbolTypespecs)(e);
        }
        async getSymbolType(e) {
          return (0, ke.getSymbolType)(e);
        }
        async getSymbolMinTick(e) {
          return (0, ke.getSymbolMinTick)(e);
        }
        silentOrdersPlacement() {
          return (0, h.ensureNotNull)(this._trading).noConfirmEnabled;
        }
        sellBuyButtonsVisibility() {
          return null !== this._trading && l.enabled("buy_sell_buttons")
            ? this._trading.showSellBuyButtons
            : null;
        }
        domPanelVisibility() {
          return null !== this._trading
            ? this._trading.domPanelVisibility()
            : null;
        }
        orderPanelVisibility() {
          return null !== this._trading
            ? this._trading.orderPanelVisibility()
            : null;
        }
        showPricesWithZeroVolume() {
          return (0, h.ensureNotNull)(this._trading).showPricesWith()
            .zeroVolume;
        }
        showNotification(e, t, i = 0) {
          null !== this._trading &&
            (0 === i
              ? this._trading.showErrorNotification(e, t)
              : this._trading.showSuccessNotification(e, t));
        }
        async getOrderTicketSetting(e) {
          return (await this._getOrderTicketSettings())[e];
        }
        async setOrderTicketSetting(e, t) {
          const i = { ...(await this._getOrderTicketSettings()), [e]: t };
          (
            await (0, h.ensureNotNull)(
              this._trading
            ).findOrCreateOrderViewController()
          ).setOrderTicketSetting(i);
        }
        connectionStatusUpdate(e, t) {
          this._adapter.connectionStatusUpdate.fire(e, t),
            1 === e && this._setDefaultDropdownActions();
        }
        orderUpdate(e) {
          this._adapter.onOrderUpdate(e);
        }
        ordersFullUpdate() {
          this._adapter.onOrdersFullUpdate();
        }
        positionUpdate(e, t) {
          this._adapter.onPositionUpdate(e, t);
        }
        positionsFullUpdate() {
          this._adapter.onPositionsFullUpdate();
        }
        individualPositionUpdate(e, t) {
          this._adapter.onIndividualPositionUpdate(e, t);
        }
        individualPositionsFullUpdate() {
          this._adapter.onIndividualPositionsFullUpdate();
        }
        executionUpdate(e) {
          this._adapter.executionUpdate.fire(e);
        }
        currentAccountUpdate() {
          this._adapter.onCurrentAccountChanged();
        }
        realtimeUpdate(e, t) {
          this._adapter.fireSubscription("Realtime", e, t);
        }
        domUpdate(e, t) {
          this._adapter.fireSubscription("DOM", e, t);
        }
        pipValueUpdate(e, t) {
          this._adapter.fireSubscription("PipValue", e, t);
        }
        setQty(e, t) {
          (0, h.ensureNotNull)(this._trading).getQtySuggester().setQty(e, t);
        }
        getQty(e) {
          return (0, h.ensureNotNull)(this._trading)
            .getQtySuggester()
            .getQty(e);
        }
        subscribeSuggestedQtyChange(e, t) {
          const i = this._qtyChangedSubscriptions.get(e) ?? new Map();
          if (i.has(t)) return;
          this._qtyChangedSubscriptions.has(e) ||
            this._qtyChangedSubscriptions.set(e, i);
          const s = (0, h.ensureNotNull)(this._trading)
            .getQtySuggester()
            .suggestedQtyChanged(e);
          i.set(t, s.subscribe(t));
        }
        unsubscribeSuggestedQtyChange(e, t) {
          const i = this._qtyChangedSubscriptions.get(e);
          if (void 0 === i) return;
          const s = i.get(t);
          void 0 !== s &&
            (s.unsubscribe(),
            i.delete(t),
            0 === i.size && this._qtyChangedSubscriptions.delete(e));
        }
        plUpdate(e, t) {
          this._adapter.fireSubscription("PL", e, t);
        }
        individualPositionPLUpdate(e, t) {
          this._adapter.fireSubscription("IndividualPositionPL", e, t);
        }
        equityUpdate(e) {
          this._adapter.fireSubscription("Equity", "Equity", e);
        }
        marginAvailableUpdate(e) {
          this._adapter.fireSubscription(
            "MarginAvailable",
            "MarginAvailable",
            e
          );
        }
        cryptoBalanceUpdate(e, t) {
          this._adapter.fireSubscription("CryptoBalance", e, t);
        }
        setButtonDropdownActions(e) {
          null !== this._trading &&
            this._defaultDropdownActions &&
            ((this._defaultDropdownActions = !1),
            this.sellBuyButtonsVisibility()?.unsubscribe(
              this._setDefaultDropdownActionsBound
            ),
            (0, h.ensureNotNull)(this.orderPanelVisibility()).unsubscribe(
              this._setDefaultDropdownActionsBound
            ),
            (0, h.ensureNotNull)(this.domPanelVisibility()).unsubscribe(
              this._setDefaultDropdownActionsBound
            )),
            (this._buttonDropdownActions = e);
        }
        buttonDropdownActions() {
          return this._buttonDropdownActions;
        }
        defaultContextMenuActions(...e) {
          return null !== this._trading
            ? this._trading.defaultContextMenuActions(...e)
            : Promise.resolve([]);
        }
        defaultDropdownMenuActions(e) {
          return null !== this._trading
            ? this._trading.defaultDropdownMenuActions(e)
            : [];
        }
        get factory() {
          return {
            createDelegate: () => new c.Delegate(),
            createWatchedValue: (e) => new le.WatchedValue(e),
            createPriceFormatter: (e, t, i, s, r) =>
              new pe.PriceFormatter({
                priceScale: e,
                minMove: t,
                fractional: i,
                minMove2: s,
                variableMinTick: r,
              }),
          };
        }
        get settings() {
          return {
            save: (e, t) => ae().setJSON(`${this._metainfo.id}.${e}`, t),
            load: (e, t) => ae().getJSON(`${this._metainfo.id}.${e}`, t),
            clear: (e, t) => ae().remove(`${this._metainfo.id}.${e}`, t),
          };
        }
        get credentialsStorage() {
          return this._credentialsStorage;
        }
        convertTimezone(e, t, i) {
          const s = (0, de.get_timezone)(t),
            r = (0, de.get_timezone)(i),
            o = (0, de.cal_to_utc)(s, e);
          return (0, de.utc_to_cal)(r, o);
        }
        language() {
          return window.language;
        }
        getUserSpecificHash() {
          return window.user.private_channel || "";
        }
        migrateFXCMCFDSettings() {
          ae().remove("fxcm_cfd");
        }
        async isFractional(e) {
          return (0, ke.isFractional)(e);
        }
        suppressedOrderQuestions() {
          const e = this._trading?.getBrokerTradingSettingsStorage() ?? null;
          return null === e ? [] : e.getSuppressedQuestions();
        }
        saveOrderQuestions(e) {
          const t = this._trading?.getBrokerTradingSettingsStorage() ?? null;
          null !== t && t.setSuppressedQuestions(e);
        }
        resetOrderQuestions() {
          this._trading
            ?.getBrokerTradingSettingsStorage()
            ?.clearSuppressedQuestions();
        }
        _makeServerLoggerWithFilledInfo(e) {
          return {
            log: (t) =>
              e.log({ ...this._makeServerLoggerEventAdditionalInfo(), ...t }),
            debounceLog: (t, i, s) =>
              e.debounceLog(
                { ...this._makeServerLoggerEventAdditionalInfo(), ...t },
                i,
                s
              ),
          };
        }
        _makeServerLoggerEventAdditionalInfo() {
          return {
            accountType: this._adapter.currentAccountType(),
            brokerId: this._adapter.metainfo().id,
            sessionId: this._adapter.sessionId(),
            deviceId: getDeviceId(),
            ref: location.href,
            online: navigator.onLine,
            platform: getPlatform(),
          };
        }
        _setDefaultDropdownActions() {
          null !== this._trading &&
            this._defaultDropdownActions &&
            (this._buttonDropdownActions = this.defaultDropdownMenuActions());
        }
        async _getOrderTicketSettings() {
          return (
            await (0, h.ensureNotNull)(
              this._trading
            ).findOrCreateOrderViewController()
          ).orderTicketSettings();
        }
      }
      var Ce = i(17317);
      const we = (0, _.getLogger)("Trading.EncryptedWebStorage");
      class Te {
        constructor({
          prefix: e,
          storageName: t,
          storage: i,
          cryptographer: s,
        }) {
          (this._transientStorage = {}),
            (this._handleStorageStateChange = (e) => {
              const { key: t, storageArea: i } = e;
              i === this._persistentStorage &&
                this._storageName === t &&
                this._decryptStorage();
            }),
            (this._storageName = t),
            (this._prefix = e?.toLowerCase()),
            (this._persistentStorage = i),
            (this._cryptographer = s),
            (this._decryptStorage = (0, Ce.sequentialize)(
              this._decryptStorage
            )),
            window.addEventListener("storage", this._handleStorageStateChange);
        }
        async setItem(e, t) {
          const i = this._addPrefix(e);
          this._transientStorage[i] = JSON.stringify(t);
          try {
            await this._encryptStorageAndSave();
          } catch (e) {
            we.logError(
              `Unable to save value using key ${i}: ${(0, w.getLoggerMessage)(
                e
              )}`
            );
          }
        }
        getItem(e, t = null) {
          const i = this._transientStorage[this._addPrefix(e)];
          if (void 0 === i) return t;
          if ("string" != typeof i) return i;
          try {
            return JSON.parse(i);
          } catch {
            return i;
          }
        }
        async removeItem(e) {
          delete this._transientStorage[this._addPrefix(e)],
            await this._encryptStorageAndSave();
        }
        destroy() {
          window.removeEventListener("storage", this._handleStorageStateChange);
        }
        static async create(e, t, i, s) {
          const r = new Te({
            prefix: e,
            storageName: t,
            storage: i,
            cryptographer: s,
          });
          return await r._decryptStorage(), r;
        }
        _addPrefix(e) {
          return void 0 !== this._prefix ? `${this._prefix}.${e}` : e;
        }
        async _decryptStorage() {
          const e = this._persistentStorage.getItem(this._storageName);
          if (null === e) return void (this._transientStorage = {});
          const t = await this._cryptographer.decrypt(e);
          if (null === t)
            return (
              this._persistentStorage.removeItem(this._storageName),
              void (this._transientStorage = {})
            );
          try {
            this._transientStorage = JSON.parse(t);
          } catch {
            this._transientStorage = {};
          }
        }
        async _encryptStorageAndSave() {
          const e = await this._cryptographer.encrypt(
            JSON.stringify(this._transientStorage)
          );
          this._persistentStorage.setItem(this._storageName, e);
        }
      }
      const Be = "credentials-storage";
      class Oe {
        constructor(e, t, i) {
          (this._rememberCredentials = e),
            (this._encryptedLocalStorage = t),
            (this._encryptedSessionStorage = i);
        }
        async save(e, t) {
          this._currentEncryptedStorage().setItem(e, t);
        }
        load(e, t) {
          return this._currentEncryptedStorage().getItem(e, t);
        }
        async clear(e) {
          this._currentEncryptedStorage().removeItem(e);
        }
        destroy() {
          this._encryptedLocalStorage.destroy(),
            this._encryptedSessionStorage.destroy();
        }
        static async create(e, t, i) {
          const s = await Te.create(e, Be, localStorage, i),
            r = await Te.create(e, Be, sessionStorage, i);
          return new Oe(t, s, r);
        }
        _currentEncryptedStorage() {
          return this._rememberCredentials.value()
            ? this._encryptedLocalStorage
            : this._encryptedSessionStorage;
        }
      }
      var Me = i(203953);
      const Ie = {
        isSuspended: !1,
        supportDemoLiveSwitcher: !0,
        supportModifyOrderPrice: !0,
        supportEditAmount: !0,
        supportModifyBrackets: !0,
        supportMarketBrackets: !0,
        supportMarketOrders: !0,
        supportStopOrders: !0,
        supportLimitOrders: !0,
        supportLeverageButton: !0,
        supportStopLimitOrders: !1,
        supportPositions: !0,
        supportDOM: !0,
        supportModifyTrailingStop: !0,
        supportAddBracketsToExistingOrder: !0,
        supportVerifyLiveAccount: !0,
        supportReversePosition: !0,
        showNotificationsLog: !0,
        supportPLUpdate: !0,
        supportTwoFactorAuthorization: !1,
        supportDisplayBrokerNameInSymbolSearch: !0,
        supportCurrencyInOrderPreview: !0,
        supportRiskControlsAndInfo: !0,
        supportCreateAccount: !1,
        supportDeleteAccount: !1,
        checkBracketsAfterOrderModification: !0,
        hideMarginIfNoLeverage: !1,
        supportStrictCheckingLimitOrderPrice: !1,
        supportOrdersHistory: !1,
        supportOrderBrackets: !1,
        supportPositionBrackets: !1,
        supportMultiposition: !1,
        supportClosePosition: !1,
        supportPartialClosePosition: !1,
        supportNativeReversePosition: !1,
        supportTrailingStop: !1,
        supportStopOrdersInBothDirections: !1,
        supportStopLimitOrdersInBothDirections: !1,
        supportModifyDuration: !1,
        supportCryptoExchangeOrderTicket: !1,
        supportPlaceOrderPreview: !1,
        supportModifyOrderPreview: !1,
        showQuantityInsteadOfAmount: !1,
        supportBalances: !1,
        supportExecutions: !0,
        supportLeverage: !1,
        supportLevel2Data: !1,
        supportTrackLatency: !1,
        supportPositionNetting: !1,
        supportIndividualPositionBrackets: !1,
        supportPartialCloseIndividualPosition: !1,
        supportStopLoss: !0,
        supportGuaranteedStop: !1,
        supportPartialOrderExecution: !1,
        supportDigitalSignature: !1,
        supportLogout: !1,
        supportCustomAccountSummaryRow: !1,
        supportPositionCustomFields: !1,
        supportOrderCustomFields: !1,
        supportOrderHistoryCustomFields: !1,
        supportCryptoBrackets: !1,
        supportCloseIndividualPosition: !1,
        supportSymbolSearch: !1,
        supportMargin: !1,
        calculatePLUsingLast: !1,
        closePositionCancelsOrders: !1,
        supportOnlyPairPositionBrackets: !1,
        supportConfirmations: !1,
        positionPLInInstrumentCurrency: !1,
        supportCancellingBothBracketsOnly: !1,
        supportUnformattedAvgFillPrice: !1,
        forceLogoutAfterUnauthorizedResponse: !1,
        forceLogoutAfterTooManyRequestsResponse: !1,
        useJsonContentType: !1,
        supportHyperlinksInOrderDialog: !1,
        supportHyperlinksInOrderPreview: !1,
        supportModifyPositionBrackets: !0,
        supportModifyOrderBrackets: !0,
        supportOAuthCodeFlowMultiplexing: !1,
        supportClearPositionsStateAfterStreamReconnect: !1,
        supportClearIndividualPositionsStateAfterStreamReconnect: !1,
        supportClearOrdersStateAfterStreamReconnect: !1,
      };
      class Ee {
        constructor(e, t) {
          (this._settingsKey = `trading.${e}.rememberCredentials`),
            (this._trackEvent = t);
          const i = ae().getBool(this._settingsKey);
          void 0 !== i &&
            (localStorage.setItem(this._settingsKey, JSON.stringify(i)),
            ae().remove(this._settingsKey));
        }
        value() {
          const e = localStorage.getItem(this._settingsKey);
          return null === e || Boolean(JSON.parse(e));
        }
        setValue(e) {
          this._trackEvent?.("Don't remember me", String(!e)),
            localStorage.setItem(this._settingsKey, JSON.stringify(e));
        }
      }
      const De = [];
      function Ve(e, t) {
        var i;
        (e.configFlags = ((i = e.configFlags), Object.assign({}, Ie, i))),
          De.push({ metainfo: e, createBrokerFunction: t });
      }
      function $e() {
        return De.map((e) => e.metainfo);
      }
      let Le;
      async function xe(e, t, i, s, r) {
        const o = De.filter((e) => e.metainfo.id === t)[0];
        let n;
        if (null === s) {
          const i = await Oe.create(t, new Ee(t), Le),
            s = (r) => {
              r?.metainfo().id !== t &&
                (e?.onBrokerChange.unsubscribe(null, s), i.destroy());
            };
          e?.onBrokerChange.subscribe(null, s), (n = i);
        } else n = s;
        const a = new Se(e, o.metainfo, i, n);
        try {
          const t = await o.createBrokerFunction(a, e?.brokerTelemetry),
            i = new Me.BrokerRealtimeAdapter(o.metainfo.id);
          return new oe({
            brokerMetainfo: o.metainfo,
            brokerConnection: t,
            host: a,
            brokerRealtimeAdapter: i,
            tradingStat: e && e.tradingStat(),
            tradingSettingsStorageGetter:
              e && e.getBrokerTradingSettingsStorage,
            brokerPlan: r,
          });
        } catch (e) {
          return Promise.reject(
            `${t} broker creation error: ${(0, w.getLoggerMessage)(e)}`
          );
        }
      }
      function Ae(e) {
        return $e().filter((t) => t.id === e)[0];
      }
      Le = { encrypt: async (e) => e, decrypt: async (e) => e };
    },
    804748: (e, t, i) => {
      "use strict";
      i.d(t, { DialogVisibility: () => o });
      var s = i(947488),
        r = i(218286);
      class o {
        constructor() {
          (this._value$ = new s.BehaviorSubject({ isVisible: !1 })),
            (this.value$ = this._value$
              .asObservable()
              .pipe(
                (0, r.distinctUntilChanged)(
                  (e, t) =>
                    e.isVisible === t.isVisible &&
                    e.isFullScreen === t.isFullScreen
                )
              ));
        }
        getValue() {
          return this._value$.getValue();
        }
        setValue(e) {
          this._value$.next(e);
        }
      }
    },
    188412: (e, t, i) => {
      "use strict";
      i.d(t, { DisabledConfirmations: () => c });
      var s = i(870122),
        r = i.n(s),
        o = i(855385),
        n = i.n(o),
        a = i(148296);
      const l = /[0-9]+([\.,][0-9]+)*([\.,][0-9]+)?|\.[0-9]+/gm,
        d = /[A-Z]+/gm,
        u = a.settingsKeys.DISABLED_CONFIRMATIONS;
      class c {
        add(e) {
          const t = this._getAll(),
            i = this._makeMessageHash(e);
          t.add(i), r().setJSON(u, Array.from(t));
        }
        has(e) {
          const t = this._getAll(),
            i = this._makeMessageHash(e);
          return t.has(i);
        }
        clear() {
          r().remove(u);
        }
        _getAll() {
          return new Set(r().getJSON(u));
        }
        _makeMessageHash(e) {
          const t = e.replace(l, "").replace(d, "");
          return (
            (i = n()(t)),
            btoa(String.fromCharCode.apply(null, new Uint8Array(i)))
          );
          var i;
        }
      }
    },
    641116: (e, t, i) => {
      "use strict";
      function s(e) {
        return "string" == typeof e
          ? e
          : Array.isArray(e)
          ? e.join("")
          : void 0;
      }
      i.d(t, { makeConfirmation: () => s });
    },
    537008: (e, t, i) => {
      "use strict";
      i.d(t, { showConfirmDialog: () => a });
      var s = i(609838),
        r = i(641116),
        o = i(188412),
        n = i(61121);
      async function a(e) {
        const {
            title: t,
            content: a,
            mainButtonText: l,
            cancelButtonText: d,
            showDisableConfirmationsCheckbox: u,
            onOpen: c,
            onClose: h,
            abortSignal: p,
            showBackdrop: _,
          } = e,
          g = new o.DisabledConfirmations(),
          b = (0, r.makeConfirmation)(a);
        if (u && void 0 !== b && g.has(b)) return !0;
        const { ConfirmDialogRenderer: y } = await Promise.all([
            i.e(7172),
            i.e(5480),
            i.e(9766),
            i.e(8222),
            i.e(5375),
            i.e(601),
            i.e(1389),
            i.e(6828),
            i.e(6605),
            i.e(2371),
            i.e(7819),
            i.e(4952),
            i.e(5789),
            i.e(3905),
            i.e(3566),
          ]).then(i.bind(i, 852070)),
          m = new y(g),
          v = {
            title: t,
            message: a,
            closeButton: d ?? s.t(null, void 0, i(38733)),
            confirmButton: l ?? s.t(null, void 0, i(955512)),
            showDisableConfirmationsCheckbox: u,
            onOpen: c,
            onClose: h,
            abortSignal: p,
            showBackdrop: _,
          };
        try {
          return (await m.open(v)).status;
        } catch (e) {
          if ((0, n.isAbortError)(e)) return !1;
          throw e;
        }
      }
    },
    220858: (e, t, i) => {
      "use strict";
      i.d(t, { showSimpleConfirmDialog: () => o });
      var s = i(61121),
        r = i(188412);
      async function o(e) {
        const {
            showDisableConfirmationsCheckbox: t,
            text: o,
            onConfirm: n,
            onClose: a,
            onCancel: l,
            abortSignal: d,
          } = e,
          u = new r.DisabledConfirmations();
        if (t && u.has(o)) return Promise.resolve(!0);
        if (d?.aborted) return Promise.resolve(!1);
        const [{ showSimpleDialog: c }, { SimpleConfirmDialog: h }] =
          await Promise.all([
            Promise.all([
              i.e(7172),
              i.e(5480),
              i.e(9766),
              i.e(8222),
              i.e(5375),
              i.e(601),
              i.e(1389),
              i.e(6828),
              i.e(6605),
              i.e(2371),
              i.e(7819),
              i.e(4952),
              i.e(5789),
              i.e(3905),
              i.e(3566),
            ]).then(i.bind(i, 480994)),
            Promise.all([
              i.e(7172),
              i.e(5480),
              i.e(9766),
              i.e(8222),
              i.e(5375),
              i.e(601),
              i.e(1389),
              i.e(6828),
              i.e(6605),
              i.e(2371),
              i.e(7819),
              i.e(4952),
              i.e(5789),
              i.e(3905),
              i.e(3566),
            ]).then(i.bind(i, 714062)),
          ]);
        return new Promise((t, i) => {
          if (d?.aborted) return void i((0, s.createAbortError)());
          const r = c(
            {
              ...e,
              disabledConfirmations: u,
              onConfirm: (e) => {
                t(!0), void 0 !== n && n(), e.dialogClose();
              },
              onClose: () => {
                t(!1), void 0 !== a && a();
              },
              onCancel: (e) => {
                t(!1), void 0 !== l && l(e), e.dialogClose();
              },
            },
            h
          );
          d?.addEventListener(
            "abort",
            () => {
              r(), i((0, s.createAbortError)());
            },
            { once: !0 }
          );
        });
      }
    },
    605962: (e, t, i) => {
      "use strict";
      i.d(t, { ConfirmBracketsCancelDialog: () => o });
      var s = i(609838),
        r = i(220858);
      const o = {
        get() {
          return this;
        },
        open: (e, t) =>
          (0, r.showSimpleConfirmDialog)({
            title: s.t(null, void 0, i(937129)),
            text: s
              .t(null, void 0, i(970322))
              .replace("{orderId}", "" !== e ? e + " " : ""),
            mainButtonIntent: "primary",
            abortSignal: t,
          }),
        multiple: (e, t) =>
          (0, r.showSimpleConfirmDialog)({
            title: s.t(null, void 0, i(937129)),
            text: s
              .t(null, void 0, i(569850))
              .replace("{orderId}", "" !== e ? e + " " : ""),
            mainButtonIntent: "primary",
            abortSignal: t,
          }),
      };
    },
    151121: (e, t, i) => {
      "use strict";
      i.d(t, { ConfirmOrderCancelDialog: () => n });
      i(68212);
      var s = i(609838),
        r = i(220858),
        o = i(391431);
      const n = {
        get() {
          return this;
        },
        open: (e, t) =>
          (0, r.showSimpleConfirmDialog)({
            title: s.t(null, void 0, i(719634)),
            text: s.t(null, void 0, i(223615)).replace("{orderId}", e),
            mainButtonIntent: "primary",
            abortSignal: t,
          }),
        multiple(e, t, n, a) {
          let l = (0, o.getSymbolNameOverFullname)(e);
          if (void 0 !== t) {
            l = `${l} ${
              1 === t
                ? s.t(null, void 0, i(846369))
                : s.t(null, void 0, i(424426))
            }`;
          }
          return (0, r.showSimpleConfirmDialog)({
            title: s.t(null, void 0, i(719634)),
            text: s
              .t(null, void 0, i(333739))
              .replace("{qty}", String(n))
              .replace("{side}", l),
            mainButtonIntent: "primary",
            abortSignal: a,
          });
        },
      };
    },
    646323: (e, t, i) => {
      "use strict";
      i.d(t, { reversePositionDialog: () => n });
      var s = i(609838),
        r = i(220858),
        o = i(391431);
      async function n(e) {
        const {
            positionId: t,
            showErrorNotification: n,
            handler: a,
            closePositionCancelsOrders: l,
            abortSignal: d,
          } = e,
          u = (0, o.getSymbolNameOverFullname)(t);
        if (
          !(await (0, r.showSimpleConfirmDialog)({
            title: s.t(null, void 0, i(178170)).replace("{positionId}", u),
            text:
              s.t(null, void 0, i(431110)).replace("{positionId}", u) +
              (l ? " " + s.t(null, void 0, i(352355)) : ""),
            mainButtonText: s.t(null, void 0, i(360196)),
            mainButtonIntent: "primary",
            cancelButtonText: s.t(null, void 0, i(904543)),
            showBackdrop: !0,
            abortSignal: d,
          }))
        )
          return !1;
        try {
          return await a();
        } catch (e) {
          return (
            n(
              s.t(null, void 0, i(628412)),
              (function (e) {
                let t = "";
                null !== e && "object" == typeof e && e.message
                  ? (t = e.message)
                  : "string" == typeof e && (t = e);
                return t;
              })(e)
            ),
            !1
          );
        }
      }
    },
    970267: (e, t, i) => {
      "use strict";
      i.d(t, {
        HeaderContainer: () => te,
        mountHeader: () => ie,
        unmountHeader: () => se,
      });
      var s,
        r = i(50959),
        o = i(632227),
        n = i(32133),
        a = i(661851),
        l = i(609838),
        d = i(511349),
        u = i(363111),
        c = i(763281),
        h = i(497754),
        p = i.n(h),
        _ = i(878112),
        g = i(679864),
        b = i(319937),
        y = (i(241032), i(930202)),
        m = i(273388),
        v = i(650733),
        f = i(588714),
        P = i(871645),
        k = i(512646),
        S = i(552828),
        C = i(732373);
      !(function (e) {
        (e[(e.Delayed = 0)] = "Delayed"),
          (e[(e.DelayedWithOffer = 1)] = "DelayedWithOffer"),
          (e[(e.Bats = 2)] = "Bats");
      })(s || (s = {}));
      const w = l.t(null, void 0, i(28117)),
        T = l.t(null, void 0, i(668510)),
        B = l.t(null, void 0, i(295271)),
        O = { 0: k, 1: k, 2: S },
        M = { 0: C.delayedDataIcon, 1: C.delayedDataIcon, 2: C.batsQuotesIcon },
        I = {
          0: C.delayedDataTitleColor,
          1: C.delayedDataTitleColor,
          2: C.batsQuotesTitleColor,
        };
      function E(e) {
        const { statusType: t, symbol: i, onClick: s } = e;
        return r.createElement(r.Fragment, null);
      }
      function D() {
        return r.createElement(r.Fragment, null, w);
      }
      function V(e) {
        const { symbol: t } = e,
          i = useIsRealTimeAvailable(t) ? T : B;
        return r.createElement(r.Fragment, null, i);
      }
      function $(e) {
        const { symbol: t } = e,
          [i, s] = t.split(":"),
          o = v.batsToRealtimeHtml1
            .replace("{symbolName}", s)
            .replace("{exchange}", v.notAccurateCboeTooltip),
          n = v.batsToRealtimeHtml2WithExchange.replace("{exchange}", i);
        return r.createElement(r.Fragment, null, `${o} ${n}`);
      }
      function L(e) {
        const { statusType: t, symbol: i } = e;
        switch (t) {
          case 0:
            return r.createElement(D, null);
          case 1:
            return r.createElement(V, { symbol: i });
          case 2:
            return r.createElement($, { symbol: i });
          default:
            return r.createElement(r.Fragment, null);
        }
      }
      function x(e) {
        return r.createElement(
          "span",
          { className: C.text },
          r.createElement(L, { ...e })
        );
      }
      function A(e) {
        const { statusType: t, symbol: s, reference: o, ...n } = e,
          {
            isOpen: a,
            onClose: d,
            anchorButtonRef: u,
            onOpen: c,
          } = (0, b.useDefaultButtonAnchorProps)();
        if (!s) return r.createElement(r.Fragment, null);
        const h = (function (e, t) {
          switch (e) {
            case 0:
            case 1:
              return l.t(null, void 0, i(759158));
            case 2: {
              const [e] = t.split(":");
              return (0, P.htmlEscape)(
                v.exchangeByOriginalExchangeTooltip
              ).format({
                exchange: e,
                originalExchange: v.notAccurateCboeTooltip,
              });
            }
            default:
              return "";
          }
        })(t, s);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(f.ClickableIconButton, {
            ...n,
            ref: (0, m.mergeRefs)([u, o]),
            role: "button",
            colorClassName: C.button,
            iconClassName: p()(C.icon, M[t]),
            title: h,
            icon: O[t],
            onClick: function (e) {
              e.stopPropagation(), c();
            },
            onKeyDown: function (e) {
              switch (
                (a && (e.stopPropagation(), e.preventDefault()),
                (0, y.hashFromEvent)(e))
              ) {
                case 27:
                  a && d(!0);
                  break;
                case 32:
                case 13:
                  a || (e.stopPropagation(), e.preventDefault(), c());
              }
            },
          }),
          r.createElement(
            g.PopoverKeyboardNavigator,
            {
              anchored: {
                type: "element",
                at: u,
              },
              isOpen: a,
              onClose: d,
              closeOnClickAway: !0,
              closeOnScrollOutside: !0,
            },
            r.createElement(
              "div",
              {
                className: C.wrapper,
                onKeyDown: function (e) {
                  if (
                    (e.stopPropagation(),
                    e.preventDefault(),
                    27 === (0, y.hashFromEvent)(e))
                  )
                    d(!0);
                },
              },
              r.createElement(_.Icon, {
                icon: O[t],
                className: p()(C.icon, M[t]),
              }),
              r.createElement(
                "div",
                { className: C.infoContainer },
                r.createElement(
                  "span",
                  { className: C.title, style: { color: I[t] } },
                  h
                ),
                r.createElement(x, { statusType: t, symbol: s }),
                r.createElement(E, {
                  statusType: t,
                  symbol: s,
                  onClick: () => d(!0),
                })
              )
            )
          )
        );
      }
      var R = i(898237),
        F = i(820660),
        N = i(513729);
      function q({ closeHandler: e }) {
        const t = (0, F.useEnterAndSpaceKeyDownHandler)(e);
        return r.createElement(R.LightButton, {
          iconOnly: !0,
          onClick: e,
          "data-name": "button-close",
          size: "small",
          onKeyDown: t,
          variant: "quiet-primary",
          startSlot: r.createElement(_.Icon, { icon: N }),
          title: l.t(null, { context: "action" }, i(433334)),
        });
      }
      var Q = i(528457),
        W = i(224567),
        U = i(431520),
        z = i(723991),
        j = i(354648);
      const H = (e) => {
        const {
            value$: t,
            onIcon: i,
            onClick: s,
            offIcon: o,
            onLabel: n,
            offLabel: l,
            dataName: d,
          } = e,
          u = (0, a.useObservable)(t);
        return r.createElement(z.PopoverItem, {
          onClick: s,
          "data-name": d,
          title: u ? n : l,
          leftSlot: r.createElement(j.SvgIconPopoverItemPart, {
            icon: u ? i : o,
          }),
        });
      };
      var G = i(685075);
      const K = (e) => {
        const { label: t, value$: i, onClick: s, dataName: o } = e,
          n = (0, a.useObservable)(i);
        return r.createElement(G.CheckboxPopoverItem, {
          title: t,
          onClick: s,
          checked: n ?? !1,
          "data-name": o,
          ariaChecked: n,
        });
      };
      var Y = i(29834);
      const X = ({ settings: e, isFocused: t }) => {
        const s = (0, r.useRef)(null),
          {
            isOpen: o,
            onOpen: n,
            onClose: a,
          } = (0, Q.useRootPopoverOpenState)(s);
        (0, r.useEffect)(() => {
          t && s.current?.focus();
        }, [t]);
        const d = (0, r.useMemo)(
          () =>
            e.map((e) =>
              0 === e.settingType
                ? r.createElement(K, { key: e.label, ...e })
                : r.createElement(H, { key: e.onLabel, ...e })
            ),
          [e]
        );
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            W.Tooltip,
            {
              isRtl: (0, U.isRtl)(),
              trigger: [W.Trigger.Focus, W.Trigger.Hover],
              content: l.t(null, void 0, i(232514)),
            },
            r.createElement(R.LightButton, {
              iconOnly: !0,
              isActive: o,
              reference: s,
              onClick: function () {
                o ? a(!0) : n();
              },
              size: "small",
              onKeyDown: function (e) {
                13 === (0, y.hashFromEvent)(e) && e.stopPropagation();
              },
              "data-name": "header-settings",
              variant: "quiet-primary",
              startSlot: r.createElement(_.Icon, { icon: Y }),
            })
          ),
          r.createElement(
            g.PopoverKeyboardNavigator,
            { isOpen: o, onClose: a, anchored: { at: s, type: "element" } },
            r.createElement("div", { "data-name": "popup-menu-container" }, d)
          )
        );
      };
      var Z = i(643959),
        J = i(553252);
      function ee(e) {
        const {
          settings: t,
          title: s,
          description: o,
          symbol: n,
          hasDelayedWarning: a,
          hasBatsQuotes: h,
          informerMessage: p,
          brokerId: _,
          back: g,
          close: b,
          orderPresetsManagerConsumer: y,
          getOrderTemplate: m,
          isTradable: v,
          isSendingDisabled: f,
          applyOrderTemplate: P,
          focusedControl: k,
        } = e;
        let S;
        a && (S = { statusType: "Paper" === _ ? 1 : 0, symbol: n }),
          h && (S = { statusType: 2, symbol: n });
        const C =
          (0, r.useContext)(c.WidgetContext).mode ===
          u.OrderEditorDisplayMode.Popup
            ? { "data-dragg-area": !0 }
            : {};
        return r.createElement(
          "div",
          { className: J.header },
          void 0 !== g &&
            r.createElement(d.ToolWidgetIconButton, {
              title: l.t(null, void 0, i(139403)),
              onClick: g,
              className: J.button,
              "data-name": "button-back",
              icon: Z,
            }),
          r.createElement(
            "div",
            { className: J.wrapper, ...C },
            r.createElement("span", { className: J.text }, s, o && `, ${o}`),
            (void 0 !== p || void 0 !== S) &&
              r.createElement(
                "div",
                { className: J.statusLine },
                void 0 !== p &&
                  r.createElement(TradingInformer, { informerMessage: p }),
                void 0 !== S && r.createElement(A, { ...S })
              )
          ),
          !1,
          void 0 !== t &&
            t.length > 0 &&
            r.createElement(X, { settings: t, isFocused: 0 === k }),
          void 0 !== b && r.createElement(q, { closeHandler: b })
        );
      }
      function te(e) {
        const {
            title$: t,
            description$: i,
            backFunction$: s,
            closeFunction$: o,
            orderTemplateFunction$: l,
            informerMessage$: d,
            symbol$: u,
            hasBatsQuotes$: c,
            hasDelayedQuotes$: h,
            isTradable$: p,
            settings$: _,
            brokerId$: g,
            orderPresetsManagerConsumer$: b,
            isSendingDisabled$: y,
            applyOrderTemplateFunction$: m,
            focusedControl$: v,
          } = e,
          f = (0, a.useObservable)(t),
          P = (0, a.useObservable)(i),
          k = (0, a.useObservable)(m),
          S = (0, a.useObservable)(s),
          C = (0, a.useObservable)(o),
          w = (0, a.useObservable)(l),
          T = (0, a.useObservable)(u),
          B = (0, a.useObservable)(c),
          O = (0, a.useObservable)(h),
          M = (0, a.useObservable)(p),
          I = ((0, a.useObservable)(d), (0, a.useObservable)(g)),
          E = (0, a.useObservable)(y),
          D = (0, a.useObservable)(b),
          V = (0, a.useObservable)(v),
          $ = (0, a.useObservable)(_),
          L = (0, r.useMemo)(
            () =>
              void 0 !== C
                ? () => {
                    (0, n.trackEvent)("GUI", "Close Order Panel from panel"),
                      C();
                  }
                : void 0,
            [C]
          );
        return r.createElement(ee, {
          title: f || "",
          description: P,
          symbol: T ?? "",
          settings: void 0 !== $ && M ? $ : void 0,
          brokerId: I,
          hasDelayedWarning: O,
          hasBatsQuotes: B,
          isTradable: M,
          informerMessage: void 0,
          back: S,
          close: L,
          orderPresetsManagerConsumer: D,
          getOrderTemplate: w,
          isSendingDisabled: E,
          applyOrderTemplate: k,
          focusedControl: V,
        });
      }
      function ie(e, t) {
        o.render(r.createElement(te, { ...t }), e);
      }
      function se(e) {
        o.unmountComponentAtNode(e);
      }
    },
    227915: (e, t, i) => {
      "use strict";
      i.d(t, { makeObservableFromWatchedValue: () => r });
      var s = i(275734);
      function r(e) {
        return (0, s.fromEventPattern)(
          (t) => e.subscribe(t, { callWithLast: !0 }),
          (t) => e.unsubscribe(t)
        );
      }
    },
    567704: (e, t, i) => {
      "use strict";
      i.d(t, {
        alignQuotesToMinTick: () => k,
        calculatePipValue: () => b,
        calculateUsedMargin: () => y,
        calculatedMarginRatio: () => m,
        checkPriceByOrderType: () => S,
        convertToBaseMonetaryUnit: () => T,
        displayedLeverage: () => g,
        formatInfoValue: () => v,
        formatRiskReward: () => P,
        prepareCalculatorEventText: () => C,
        prepareTradableSolution: () => w,
        shouldShowTotal: () => _,
      });
      var s = i(609838),
        r = i(688401),
        o = i(960521),
        n = i(391431),
        a = i(251940),
        l = i(600297),
        d = i(14654),
        u = i(341086),
        c = i(50771),
        h = i(848062),
        p = i(863582);
      function _(e) {
        return void 0 !== e && Boolean(e.showTotal);
      }
      function g(e, t) {
        if (void 0 !== e) return e;
        if (void 0 !== t) {
          const e = Math.round(1 / t);
          return String(e) + ":1";
        }
        return null;
      }
      function b(e, t, i) {
        return null !== e ? (void 0 !== i ? e * i : e) * t : 0;
      }
      function y(e, t) {
        return void 0 !== t ? e * t : 0;
      }
      function m(e, t) {
        if (t < 0) return 100;
        const i = 0 !== t ? (100 * e) / t : 0;
        return i > 100 ? 100 : i;
      }
      function v(e) {
        const t = (0, u.numberFormattersParsersChain)({
          chain: [
            (0, c.prohibitNanOnParseStep)(),
            (0, h.fixedNumberMagnitudeStep)({ decimalPlaces: 2 }),
            (0, p.signumStep)({ negativeSign: p.longMinusSign }),
          ],
        });
        return Number.isInteger(e) || e >= 1
          ? t.format(e)
          : (function (e) {
              if (Number.isInteger(e)) return e + "";
              return e < 1
                ? (function (e) {
                    const t = (e + "").split(".")[1] || "";
                    let i = t.length;
                    for (let e = 0; e < t.length; e++)
                      if ("0" !== t[e]) {
                        i = e + 1;
                        break;
                      }
                    return e.toFixed(i);
                  })(e)
                : e.toFixed(2);
            })(e);
      }
      const f = (0, a.getVolumeFormatter)(2);
      function P(e, t) {
        return null !== e && null !== t && e / t > 0 ? f.format(e / t) : "";
      }
      function k(e, t, i) {
        const s = Object.assign({}, e);
        return (
          ["trade", "ask", "bid"].forEach((e) => {
            const r = s[e];
            if (void 0 !== r) {
              const o = (0, d.getMinTick)({
                minTick: t,
                price: r,
                variableMinTickData: i,
              });
              s[e] = (0, n.alignToMinTick)(r, o);
            }
          }),
          s
        );
      }
      function S(e, t, i) {
        return 4 === e
          ? null === t || null === i
          : 3 === e
          ? null === i
          : null === t;
      }
      function C(e, t) {
        switch (t) {
          case l.ButtonType.IncDec:
            return e < 0 ? "-" : "+";
          case l.ButtonType.PlusValue:
            return String(e);
          case l.ButtonType.Clear:
            return "Clear";
          default:
            return "Default";
        }
      }
      async function w(e, t) {
        if (void 0 !== e.solutions) {
          if ("changeSymbol" in e.solutions) {
            const t = e.solutions.changeSymbol;
            return {
              title: s.t(null, void 0, i(531410)),
              apply: () =>
                r.linking.setSymbolAndLogInitiator(t, "order ticket"),
            };
          }
          if ("changeAccount" in e.solutions) {
            const r = e.solutions.changeAccount,
              o = (await t.accountsMetainfo()).filter((e) => e.id === r)[0]
                .name;
            return {
              title: s.t(null, void 0, i(704707)).replace("{accountName}", o),
              apply: () => t.setCurrentAccount(r),
            };
          }
          if ("openUrl" in e.solutions) {
            const t = e.solutions.openUrl.url;
            return {
              title: e.solutions.openUrl.text,
              apply: () => window.open(t, "_blank"),
            };
          }
        }
      }
      function T(e, t) {
        return void 0 === t ? e : (0, o.Big)(e).div(t).toNumber();
      }
    },
    520985: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          OrderViewController: () => Qt,
          isResizableDrawerEnabled: () => Nt,
        });
      var s = i(870122),
        r = (i(601227), i(650151)),
        o = i(737538),
        n = i(947488),
        a = i(116217),
        l = i(138966),
        d = i(771035),
        u = i(177441);
      function c(e) {
        return (0, a.operate)(function (t, i) {
          (0, d.innerFrom)(e).subscribe(
            new l.OperatorSubscriber(
              i,
              function () {
                return i.complete();
              },
              u.noop
            )
          ),
            !i.closed && t.subscribe(i);
        });
      }
      var h = i(173587),
        p = i(671945),
        _ = i(180185),
        g = i(698043),
        b = i(440891),
        y = i(404357),
        m = i(609838),
        v = i(193080),
        f = i(997345),
        P = i(275734),
        k = i(757604),
        S = i(312694),
        C = i(265728),
        w = i(815544);
      var T = {
        connector: function () {
          return new o.Subject();
        },
        resetOnDisconnect: !0,
      };
      function B(e, t) {
        void 0 === t && (t = T);
        var i = null,
          s = t.connector,
          r = t.resetOnDisconnect,
          o = void 0 === r || r,
          n = s(),
          a = new w.Observable(function (e) {
            return n.subscribe(e);
          });
        return (
          (a.connect = function () {
            var t;
            return (
              (i && !i.closed) ||
                ((i = ((t = function () {
                  return e;
                }),
                new w.Observable(function (e) {
                  (0, d.innerFrom)(t()).subscribe(e);
                })).subscribe(n)),
                o &&
                  i.add(function () {
                    return (n = s());
                  })),
              i
            );
          }),
          a
        );
      }
      var O = i(958261),
        M = i(233064),
        I = i(586639),
        E = i(446685),
        D = i(472484),
        V = i(595940);
      function $() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = (0, V.popResultSelector)(e);
        return (0, a.operate)(function (t, s) {
          for (
            var r = e.length,
              o = new Array(r),
              n = e.map(function () {
                return !1;
              }),
              a = !1,
              c = function (t) {
                (0, d.innerFrom)(e[t]).subscribe(
                  new l.OperatorSubscriber(
                    s,
                    function (e) {
                      (o[t] = e),
                        a ||
                          n[t] ||
                          ((n[t] = !0),
                          (a = n.every(D.identity)) && (n = null));
                    },
                    u.noop
                  )
                );
              },
              h = 0;
            h < r;
            h++
          )
            c(h);
          t.subscribe(
            new l.OperatorSubscriber(s, function (e) {
              if (a) {
                var t = (0, E.__spreadArray)([e], (0, E.__read)(o), !1);
                s.next(
                  i
                    ? i.apply(
                        void 0,
                        (0, E.__spreadArray)([], (0, E.__read)(t), !1)
                      )
                    : t
                );
              }
            })
          );
        });
      }
      var L = i(46415),
        x = i(599016),
        A = i(363111),
        R = i(391431),
        F = i(806188),
        N = i(996038),
        q = i(924910),
        Q = i(329452),
        W = i(172912),
        U = i(41899),
        z = i(14654),
        j = i(466479),
        H = i(567704),
        G = i(346502),
        K = Array.isArray;
      var Y = i(423869);
      function X() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = (0, V.popResultSelector)(e),
          s = (function (e) {
            return 1 === e.length && K(e[0]) ? e[0] : e;
          })(e);
        return s.length
          ? new w.Observable(function (e) {
              var t = s.map(function () {
                  return [];
                }),
                r = s.map(function () {
                  return !1;
                });
              e.add(function () {
                t = r = null;
              });
              for (
                var o = function (o) {
                    (0, d.innerFrom)(s[o]).subscribe(
                      new l.OperatorSubscriber(
                        e,
                        function (s) {
                          if (
                            (t[o].push(s),
                            t.every(function (e) {
                              return e.length;
                            }))
                          ) {
                            var n = t.map(function (e) {
                              return e.shift();
                            });
                            e.next(
                              i
                                ? i.apply(
                                    void 0,
                                    (0, E.__spreadArray)(
                                      [],
                                      (0, E.__read)(n),
                                      !1
                                    )
                                  )
                                : n
                            ),
                              t.some(function (e, t) {
                                return !e.length && r[t];
                              }) && e.complete();
                          }
                        },
                        function () {
                          (r[o] = !0), !t[o].length && e.complete();
                        }
                      )
                    );
                  },
                  n = 0;
                !e.closed && n < s.length;
                n++
              )
                o(n);
              return function () {
                t = r = null;
              };
            })
          : Y.EMPTY;
      }
      var Z = i(464051);
      function J(e, t) {
        let i,
          s = 0,
          r = 0,
          o = !1;
        return (...n) => {
          if (
            ((i = () => {
              e(...n), (i = void 0), (o = !1);
            }),
            !o)
          )
            return (
              (r = performance.now()),
              (o = !0),
              void (s = (function (e, t) {
                if (window.requestIdleCallback)
                  return window.requestIdleCallback(e, t);
                const i = Date.now();
                return setTimeout(() => {
                  e({
                    didTimeout: !1,
                    timeRemaining: () => Math.max(0, 50 - (Date.now() - i)),
                  });
                }, 1);
              })(() => i?.(), t))
            );
          void 0 !== t?.timeout &&
            performance.now() - r >= t.timeout &&
            (!(function (e) {
              if (window.cancelIdleCallback)
                return window.cancelIdleCallback(e);
              clearTimeout(e);
            })(s),
            i());
        };
      }
      var ee,
        te = i(80118),
        ie = i(525915);
      class se {
        constructor(e) {
          this._formatter = e;
        }
        format(e, t) {
          return this._formatter.format(e, {
            ...t,
            ignoreLocaleNumberFormat: !0,
          });
        }
        parse(e, t) {
          return this._formatter.parse
            ? this._formatter.parse(e, { ...t, ignoreLocaleNumberFormat: !0 })
            : { res: !1, error: "Formatter does not support parse" };
        }
      }
      !(function (e) {
        (e.makeInitialSLPrice = (e) =>
          e.trailingStopPips || e.stopType === L.StopType.TrailingStop
            ? null
            : e.guaranteedStop || e.stopType === L.StopType.GuaranteedStop
            ? e.guaranteedStop ?? null
            : e.stopLoss ?? null),
          (e.makeInitialSLPips = (e) =>
            e.trailingStopPips ?? e.stopLossPips ?? null),
          (e.makeInitialSLRiskInPercent = (e) => e.riskInPercent ?? null),
          (e.makeInitialSLEnabled = (e) =>
            Boolean(
              e.riskInPercent ||
                e.trailingStopPips ||
                e.stopLossPips ||
                e.guaranteedStop ||
                e.stopLoss
            )),
          (e.makeInitialSLBracketType = (e) =>
            e.stopLossPips || e.stopType === L.StopType.StopLoss
              ? x.BracketType.StopLoss
              : e.trailingStopPips || e.stopType === L.StopType.TrailingStop
              ? x.BracketType.TrailingStop
              : e.guaranteedStop || e.stopType === L.StopType.GuaranteedStop
              ? x.BracketType.GuaranteedStop
              : e.supportStopLoss
              ? x.BracketType.StopLoss
              : e.supportTrailingStop
              ? x.BracketType.TrailingStop
              : e.supportGuaranteedStop
              ? x.BracketType.GuaranteedStop
              : x.BracketType.StopLoss);
      })(ee || (ee = {}));
      class re {
        constructor({
          initialPrice: e,
          initialPips: t,
          initialRiskInPercent: s,
          initialEnabled: r,
          initialBracketType: o,
          formatter: a,
          equity$: l,
          quotes$: d,
          info: u,
          pipValue$: c,
          side$: h,
          amount$: p,
          parentPrice$: _,
          orderType$: g,
          currency: b,
          parentType: y,
          savedPips: v,
          settings$: P,
          orderWidgetStat: k,
          showRiskControlsAndInfo: S,
          status: C,
          validationRulesByType: w,
          supportStopLoss: T,
          supportTrailingStop: B,
          supportGuaranteedStop: I,
          supportModifyBrackets: E,
          supportModifyTrailingStop: D,
          supportCryptoBrackets: V,
          supportBracketsInPips: $,
          supportAddBracketsToExistingOrder: L,
          hasTrailingStopBracket: F,
          existingBracketPrice: N,
          useContextValidation: q,
          settingsGetter: U,
        }) {
          (this.onControlFocused = new Q.Delegate()),
            (this.roundToPriceStepRequired = !1),
            (this._value$ = new n.BehaviorSubject(null)),
            (this._pips$ = new n.BehaviorSubject(null)),
            (this._price$ = new n.BehaviorSubject(null)),
            (this._riskInCurrency$ = new n.BehaviorSubject(null)),
            (this._riskInPercent$ = new n.BehaviorSubject(null)),
            (this._focusedControl$ = new n.BehaviorSubject(1)),
            (this._error$ = new n.BehaviorSubject({ res: !1 })),
            (this._controlError$ = new n.BehaviorSubject({ res: !1 })),
            (this._isValuesInitialized$ = new n.BehaviorSubject(!1)),
            (this._subscriptions = []),
            (this.getValue = () => this._value$.getValue()),
            (this.getFocusedControl = () => this._focusedControl$.getValue()),
            (this.getEnabled = () => this._enabled$.getValue()),
            (this.getBracketType = () => this._bracketType$.getValue()),
            (this.getError = () => this._error$.getValue()),
            (this.setFocusedControl = (e) => {
              const t = 0 === e && this.roundToPriceStepRequired ? 1 : e;
              this._focusedControl$.next(t);
            }),
            (this.setEnabled = (e) => {
              this._enabled$.next(e);
            }),
            (this.setBracketType = (e) => {
              this._bracketType$.next(e),
                (this._bracketPercentPriceRuleCheckers =
                  this._makeBracketPercentPriceRuleCheckers(!1));
            }),
            (this.setRiskInPercent = (e) => {
              this._riskInPercent$.next(
                (0, R.applyRounding)(e, this._riskInPercentFormatter)
              );
            }),
            (this.setPips = (e) => {
              this._pips$.next((0, R.applyRounding)(e, this._pipsFormatter));
            }),
            (this.setControlError = (e, t) => {
              (this._useContextValidation
                ? this._error$
                : this._controlError$
              ).next({ res: e, msg: t });
            }),
            (this._handleBracketsValuesChange = (e) => {
              const {
                  enabled: t,
                  parentPrice: i,
                  sideSign: s,
                  pipValue: r,
                  equity: o,
                  amount: n,
                  bracketValuesWithFocusedControl: a,
                } = e,
                {
                  focusedControl: l,
                  pips: d,
                  price: u,
                  riskInCurrency: c,
                  riskInPercent: h,
                } = a,
                {
                  pips: p,
                  price: _,
                  riskInCurrency: g,
                  riskInPercent: b,
                } = this._calculateBracketValues({
                  sideSign: s,
                  pipValue: r,
                  equity: o,
                  parentPrice: i,
                  amount: n,
                  focusedControl: l,
                  pips: d,
                  price: u,
                  riskInCurrency: c,
                  riskInPercent: h,
                });
              (!t && null !== c) ||
                (d === p && u === _ && c === g && h === b) ||
                this._setUnfocusedControlsValues(l, p, _, g, b);
            }),
            (this._bracketValuesWithFocusedControlObservable = () =>
              this._focusedControl$.pipe(
                (0, M.switchMap)((e) =>
                  1 === e
                    ? this._priceObservable(e)
                    : 2 === e
                    ? this._riskInCurrencyObservable(e)
                    : 3 === e
                    ? this._riskInPercentObservable(e)
                    : this._pipsObservable(e)
                )
              )),
            (this._getPriceStep = (e) =>
              void 0 === this._variableMinTickData || null === e
                ? this._priceStep
                : (0, R.getPriceStep)({
                    priceType: this._priceType,
                    minTick: this._minTick,
                    variableMinTickData: this._variableMinTickData,
                    price: e,
                  })),
            (this._updateFocusIfNeeded = (e) => {
              const t = this.getFocusedControl();
              ((3 === t && !e[this._getBracketsInPercentProperty()]) ||
                (2 === t && !e[this._getBracketsInCurrencyProperty()])) &&
                this.setFocusedControl(0);
            }),
            (this._getPips = () => this._pips$.getValue()),
            (this._getPrice = () => this._price$.getValue()),
            (this._getRiskInCurrency = () => this._riskInCurrency$.getValue()),
            (this._getRiskInPercent = () => this._riskInPercent$.getValue()),
            (this._setPrice = (e) => {
              this._price$.next((0, R.applyRounding)(e, this._priceFormatter));
            }),
            (this._setRiskInCurrency = (e) => {
              this._riskInCurrency$.next(
                (0, R.applyRounding)(e, this._riskInCurrencyFormatter)
              );
            }),
            (this._makeBracketPercentPriceRuleCheckers = (e) => {
              const t = [],
                i = this._validationRulesByType?.[this._bracketType$.value];
              if (void 0 !== i)
                for (const s of i)
                  t.push(
                    (0, Z.makeBracketPercentPriceRuleChecker)({
                      minPercent: s.options.min,
                      maxPercent: s.options.max,
                      isExpandedBoundary: e,
                    })
                  );
              return t;
            }),
            (this._getSettings = U),
            (this.stopLossTypes = (function (e, t, i) {
              const s = [];
              return (
                e && s.push(x.BracketType.StopLoss),
                t && s.push(x.BracketType.TrailingStop),
                i && s.push(x.BracketType.GuaranteedStop),
                s
              );
            })(Boolean(T), Boolean(B), Boolean(I))),
            (this._handleBracketsValuesChange = J(
              this._handleBracketsValuesChange,
              { timeout: 100 }
            )),
            (this._enabled$ = new n.BehaviorSubject(r)),
            (this._bracketType$ = new n.BehaviorSubject(o)),
            (this._equity$ = l),
            (this._pipValue$ = c),
            (this._side$ = h),
            (this._sideSign$ = h.pipe(
              (0, f.map)((e) => (o !== x.BracketType.TakeProfit ? -1 : 1) * e)
            )),
            (this._quotes$ = d),
            (this._amount$ = p),
            (this._pipSize = u.pipSize),
            (this._lotSize = u.lotSize),
            (this._minTick = u.minTick),
            u.variableMinTick &&
              (this._variableMinTickData = (0, z.makeVariableMinTickData)(
                u.minTick,
                u.variableMinTick
              )),
            (this._settings$ = P),
            (this._parentType = y),
            (this._priceType = o === x.BracketType.TakeProfit ? 1 : 2),
            (this._supportCryptoBrackets = Boolean(V)),
            (this._isStatusEditing =
              1 !== y || C === A.OrderPanelStatus.Editing),
            (this._pipsFormatter = new W.PriceFormatter({
              priceScale: u.pipSize !== u.minTick ? 10 : 1,
              ignoreLocaleNumberFormat: !0,
            })),
            (this._priceFormatter = new se(a)),
            (this._riskInCurrencyFormatter = new W.PriceFormatter({
              priceScale: 100,
              ignoreLocaleNumberFormat: !0,
            })),
            (this._riskInPercentFormatter = new W.PriceFormatter({
              priceScale: 100,
              ignoreLocaleNumberFormat: !0,
            })),
            (this._priceMagnifier = u.priceMagnifier || 1),
            (this._hasTrailingStopBracket = F),
            (this._validationRulesByType = w),
            (this._existingBracketPrice = N),
            (this._useContextValidation = q),
            (this._bracketPercentPriceRuleCheckers =
              this._makeBracketPercentPriceRuleCheckers(!1)),
            (this._parentPrice$ = (0, O.combineLatest)({
              parentPrice: _,
              orderType: g,
              bracketType: this._bracketType$,
              quotes: this._quotes$,
              parentSide: this._side$,
            }).pipe(
              (0, f.map)((e) => {
                const {
                  parentPrice: t,
                  orderType: i,
                  bracketType: s,
                  quotes: r,
                  parentSide: o,
                } = e;
                if (s === x.BracketType.TrailingStop) {
                  if (2 === i)
                    return 1 === o ? (0, R.getAsk)(r) : (0, R.getBid)(r);
                  if (1 !== this._parentType)
                    return 1 === o ? (0, R.getBid)(r) : (0, R.getAsk)(r);
                }
                return t;
              })
            )),
            (this._priceStep = (0, R.getPriceStep)({
              priceType: this._priceType,
              minTick: u.minTick || u.pipSize,
              limitPriceStep: u.limitPriceStep,
              stopPriceStep: u.stopPriceStep,
            })),
            (this.roundToPriceStepRequired =
              (0, R.roundToStepRequired)({
                priceType: this._priceType,
                minTick: u.minTick || u.pipSize,
                limitPriceStep: u.limitPriceStep,
                stopPriceStep: u.stopPriceStep,
              }) || !1 === $),
            (0, O.combineLatest)({
              parentPrice: this._parentPrice$,
              sideSign: this._sideSign$,
              pipValue: this._pipValue$,
              equity: this._equity$,
              amount: this._amount$,
            })
              .pipe((0, G.take)(1))
              .subscribe((i) => {
                const {
                    parentPrice: r,
                    sideSign: n,
                    pipValue: a,
                    equity: l,
                    amount: d,
                  } = i,
                  u = e || s ? void 0 : v ?? this._getDefaultPips(o),
                  { focusedControl: c, ...h } =
                    this._getInitialBracketValuesWithFocusedControl({
                      initialPrice: e,
                      initialRiskInPercent: s,
                      initialPips: t ?? u,
                    }),
                  {
                    pips: p,
                    price: _,
                    riskInCurrency: g,
                    riskInPercent: b,
                  } = this._calculateBracketValues({
                    sideSign: n,
                    pipValue: a,
                    equity: l,
                    parentPrice: r,
                    amount: d,
                    focusedControl: c,
                    ...h,
                  });
                this.setFocusedControl(c),
                  this.setPips(p),
                  this._setPrice(_),
                  this._setRiskInCurrency(g),
                  this.setRiskInPercent(b),
                  this._isValuesInitialized$.next(!0);
              }),
            (this._bracketValuesWithFocusedControl$ =
              this._bracketValuesWithFocusedControlObservable()),
            (this.pips = {
              value$: this._pips$.asObservable(),
              step: 1,
              getValue: this._getPips,
              setValue: this.setPips,
              onModifiedCallback:
                null !== k
                  ? () =>
                      k.setBracketControlModifiedProperty(
                        o,
                        A.BracketSubControlType.Pips
                      )
                  : () => {},
              formatter: this._pipsFormatter,
            }),
            (this.price = {
              value$: this._price$.asObservable(),
              step: this._getPriceStep,
              getValue: this._getPrice,
              setValue: this._setPrice,
              onModifiedCallback:
                null !== k
                  ? () =>
                      k.setBracketControlModifiedProperty(
                        o,
                        A.BracketSubControlType.Price
                      )
                  : () => {},
              formatter: this._priceFormatter,
            }),
            (this.riskInCurrency = {
              value$: this._riskInCurrency$.asObservable(),
              step: 0.01,
              getValue: this._getRiskInCurrency,
              setValue: this._setRiskInCurrency,
              onModifiedCallback:
                null !== k
                  ? () =>
                      k.setBracketControlModifiedProperty(
                        o,
                        A.BracketSubControlType.Money
                      )
                  : () => {},
              formatter: this._riskInCurrencyFormatter,
            }),
            (this.riskInPercent = {
              value$: this._riskInPercent$.asObservable(),
              step: 0.01,
              getValue: this._getRiskInPercent,
              setValue: this.setRiskInPercent,
              onModifiedCallback:
                null !== k
                  ? () =>
                      k.setBracketControlModifiedProperty(
                        o,
                        A.BracketSubControlType.Percent
                      )
                  : () => {},
              formatter: this._riskInPercentFormatter,
            }),
            (this.value$ = this._value$.asObservable()),
            (this.enabled$ = this._enabled$.asObservable()),
            (this.bracketType$ = this._bracketType$.asObservable()),
            (this.focusedControl$ = this._focusedControl$.asObservable()),
            (this.error$ = this._error$.asObservable()),
            (this.isValuesInitialized$ =
              this._isValuesInitialized$.asObservable()),
            (this.controlState = this._computeControlState(y, o, E, D, L)),
            (this.currency = b.length > 0 ? b : m.t(null, void 0, i(808249))),
            (this.showRiskControlsAndInfo = S),
            (this.supportTrailingStop = B),
            (this.supportGuaranteedStop = I);
        }
        setBracketValues(e) {
          const { price: t, pips: i, riskInPercent: s } = e,
            { focusedControl: r, ...o } =
              this._getInitialBracketValuesWithFocusedControl({
                initialPrice: t,
                initialPips: i,
                initialRiskInPercent: s,
              });
          (null === o.pips &&
            null === o.price &&
            null === o.riskInCurrency &&
            null === o.riskInPercent) ||
            (this.setFocusedControl(r),
            this.setEnabled(!0),
            o.pips
              ? this.setPips(o.pips)
              : o.price
              ? this._setPrice(o.price)
              : o.riskInCurrency
              ? this._setRiskInCurrency(o.riskInCurrency)
              : o.riskInPercent && this.setRiskInPercent(o.riskInPercent));
        }
        subscribe() {
          const e = this._settings$.subscribe(this._updateFocusIfNeeded),
            t = (0, O.combineLatest)({
              enabled: this._enabled$,
              parentPrice: this._parentPrice$,
              sideSign: this._sideSign$,
              pipValue: this._pipValue$,
              equity: this._equity$,
              amount: this._amount$,
              bracketValuesWithFocusedControl:
                this._bracketValuesWithFocusedControl$,
            }).subscribe(this._handleBracketsValuesChange),
            i = (0, O.combineLatest)({
              pips: this._pips$,
              error: this._error$,
              enabled: this._enabled$,
            }).subscribe((e) => {
              const { pips: t, error: i, enabled: s } = e;
              this._value$.next(i.res || !s || null === t ? null : t);
            });
          return (
            (this._subscriptions = [e, t, i]),
            this._useContextValidation ||
              this._subscriptions.push(this._subscribeError()),
            this._subscriptions
          );
        }
        unsubscribe() {
          this._subscriptions.forEach((e) => e.unsubscribe());
        }
        isValueIncorrect() {
          const e = this.getEnabled(),
            t = this.getValue();
          return e && null === t;
        }
        _getDefaultPips(e) {
          return e === x.BracketType.TakeProfit
            ? A.BracketDefaultPips.TakeProfit
            : A.BracketDefaultPips.StopLoss;
        }
        _setUnfocusedControlsValues(e, t, i, s, r) {
          0 !== e && this.setPips(t),
            1 !== e && this._setPrice(i),
            2 !== e && this._setRiskInCurrency(s),
            3 !== e && this.setRiskInPercent(r);
        }
        _getInitialBracketValuesWithFocusedControl({
          initialPrice: e,
          initialPips: t,
          initialRiskInPercent: i,
        }) {
          const s = {
              pips: null,
              price: null,
              riskInCurrency: null,
              riskInPercent: null,
              focusedControl: 0,
            },
            r = this._getSettings();
          return i &&
            r[this._getBracketsInPercentProperty()] &&
            this.showRiskControlsAndInfo
            ? ((s.focusedControl = 3), (s.riskInPercent = i), s)
            : t
            ? ((s.focusedControl = 0), (s.pips = t), s)
            : e
            ? ((s.focusedControl = 1), (s.price = e), s)
            : s;
        }
        _subscribeError() {
          return (0, O.combineLatest)({
            side: this._side$,
            enabled: this._enabled$,
            controlError: this._controlError$,
            bracketValuesWithFocusedControl:
              this._bracketValuesWithFocusedControl$,
            parentPrice: this._parentPrice$,
            quotes: this._quotes$,
            bracketType: this._bracketType$,
          }).subscribe((e) => {
            const {
                side: t,
                enabled: i,
                controlError: s,
                bracketValuesWithFocusedControl: r,
                parentPrice: o,
                quotes: n,
                bracketType: a,
              } = e,
              { focusedControl: l, pips: d, price: u } = r;
            i &&
              this._setError({
                side: t,
                originalBracketPrice: this._existingBracketPrice,
                parentPrice: o,
                quotes: n,
                bracketType: a,
                controlError: s,
                focusedControl: l,
                pips: d,
                price: u,
              });
          });
        }
        _setError(e) {
          const {
            side: t,
            parentPrice: i,
            originalBracketPrice: s,
            quotes: r,
            bracketType: o,
            controlError: n,
            focusedControl: a,
            pips: l,
            price: d,
          } = e;
          n.res
            ? this._error$.next(n)
            : this._error$.next(
                (0, Z.checkBracketError)({
                  quotes: r,
                  side: t,
                  price: d,
                  originalBracketPrice: s,
                  pips: l,
                  priceType: this._priceType,
                  priceStep: this._getPriceStep(d),
                  parentPrice: i,
                  parentType: this._parentType,
                  bracketType: o,
                  isStatusEditing: this._isStatusEditing,
                  isEnabled: this.getEnabled(),
                  bracketPercentPriceRuleCheckers:
                    this._bracketPercentPriceRuleCheckers,
                  priceFormatter: this._priceFormatter,
                  isRoundToPriceStep: this.roundToPriceStepRequired && 1 === a,
                })
              );
        }
        _pipsObservable(e) {
          return this._pips$.pipe(
            (0, M.switchMap)((t) =>
              X([
                this._price$,
                this._riskInCurrency$,
                this._riskInPercent$,
              ]).pipe(
                (0, f.map)((i) => {
                  const [s, r, o] = i;
                  return {
                    focusedControl: e,
                    pips: t,
                    price: s,
                    riskInCurrency: r,
                    riskInPercent: o,
                  };
                })
              )
            )
          );
        }
        _priceObservable(e) {
          return this._price$.pipe(
            (0, M.switchMap)((t) =>
              X([
                this._pips$,
                this._riskInCurrency$,
                this._riskInPercent$,
              ]).pipe(
                (0, f.map)((i) => {
                  const [s, r, o] = i;
                  return {
                    focusedControl: e,
                    pips: s,
                    price: t,
                    riskInCurrency: r,
                    riskInPercent: o,
                  };
                })
              )
            )
          );
        }
        _riskInCurrencyObservable(e) {
          return this._riskInCurrency$.pipe(
            (0, M.switchMap)((t) =>
              X([this._pips$, this._price$, this._riskInPercent$]).pipe(
                (0, f.map)((i) => {
                  const [s, r, o] = i;
                  return {
                    focusedControl: e,
                    pips: s,
                    price: r,
                    riskInCurrency: t,
                    riskInPercent: o,
                  };
                })
              )
            )
          );
        }
        _riskInPercentObservable(e) {
          return this._riskInPercent$.pipe(
            (0, M.switchMap)((t) =>
              X([this._pips$, this._price$, this._riskInCurrency$]).pipe(
                (0, f.map)((i) => {
                  const [s, r, o] = i;
                  return {
                    focusedControl: e,
                    pips: s,
                    price: r,
                    riskInCurrency: o,
                    riskInPercent: t,
                  };
                })
              )
            )
          );
        }
        _calculateBracketValues(e) {
          return {
            pips: (0, R.applyRounding)(
              this._calculatePips(e),
              this._pipsFormatter
            ),
            price: (0, R.applyRounding)(
              this._calculatePrice(e),
              this._priceFormatter
            ),
            riskInCurrency: (0, R.applyRounding)(
              this._calculateRiskInCurrency(e),
              this._riskInCurrencyFormatter
            ),
            riskInPercent: (0, R.applyRounding)(
              this._calculateRiskInPercent(e),
              this._riskInPercentFormatter
            ),
          };
        }
        _calculatePips(e) {
          const {
            sideSign: t,
            pipValue: i,
            equity: s,
            parentPrice: r,
            amount: o,
            focusedControl: n,
            pips: a,
            price: l,
            riskInCurrency: d,
            riskInPercent: u,
          } = e;
          switch (n) {
            case 0:
            default:
              return a;
            case 1:
              return null === l
                ? null
                : (0, te.priceToPips)(l, r, t, this._pipSize);
            case 2:
              return null === d || null === o
                ? null
                : (0, te.riskInCurrencyToPips)(
                    d,
                    o,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  );
            case 3:
              return null === u || null === o
                ? null
                : (0, te.riskInPercentToPips)(
                    u,
                    o,
                    s,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  );
          }
        }
        _calculatePrice(e) {
          const {
            sideSign: t,
            pipValue: i,
            equity: s,
            parentPrice: r,
            amount: o,
            focusedControl: n,
            pips: a,
            price: l,
            riskInCurrency: d,
            riskInPercent: u,
          } = e;
          let c, h;
          switch (n) {
            case 0:
            default:
              if (null === a) return null;
              h = (0, te.pipsToPrice)(a, r, t, this._pipSize);
              break;
            case 1:
              return l;
            case 2:
              if (null === d || null === o) return null;
              (c = (0, te.riskInCurrencyToPips)(
                d,
                o,
                i,
                this._priceMagnifier,
                this._lotSize
              )),
                (h = (0, te.pipsToPrice)(c, r, t, this._pipSize));
              break;
            case 3:
              if (null === u || null === o) return null;
              (c = (0, te.riskInPercentToPips)(
                u,
                o,
                s,
                i,
                this._priceMagnifier,
                this._lotSize
              )),
                (h = (0, te.pipsToPrice)(c, r, t, this._pipSize));
          }
          return this.roundToPriceStepRequired
            ? (0, ie.roundToStepByPriceTypeAndSide)(
                h,
                this._getPriceStep(h),
                this._priceType,
                t
              )
            : h;
        }
        _calculateRiskInCurrency(e) {
          const {
            sideSign: t,
            pipValue: i,
            equity: s,
            parentPrice: r,
            amount: o,
            focusedControl: n,
            pips: a,
            price: l,
            riskInCurrency: d,
            riskInPercent: u,
          } = e;
          let c;
          const h = null === a || null === o;
          switch (n) {
            case 0:
            default:
              return h
                ? null
                : (0, te.pipsToRiskInCurrency)(
                    a,
                    o,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  );
            case 1:
              return null === l || h
                ? null
                : ((c = (0, te.priceToPips)(l, r, t, this._pipSize)),
                  (0, te.pipsToRiskInCurrency)(
                    c,
                    o,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  ));
            case 2:
              return d;
            case 3:
              return null === u || h
                ? null
                : ((c = (0, te.riskInPercentToPips)(
                    u,
                    o,
                    s,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  )),
                  (0, te.pipsToRiskInCurrency)(
                    c,
                    o,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  ));
          }
        }
        _calculateRiskInPercent(e) {
          const {
            sideSign: t,
            pipValue: i,
            equity: s,
            parentPrice: r,
            amount: o,
            focusedControl: n,
            pips: a,
            price: l,
            riskInCurrency: d,
            riskInPercent: u,
          } = e;
          let c;
          const h = null === a || null === o;
          switch (n) {
            case 0:
            default:
              return h
                ? null
                : (0, te.pipsToRiskInPercent)(
                    a,
                    o,
                    s,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  );
            case 1:
              return null === l || h
                ? null
                : ((c = (0, te.priceToPips)(l, r, t, this._pipSize)),
                  (0, te.pipsToRiskInPercent)(
                    c,
                    o,
                    s,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  ));
            case 2:
              return null === d || null === o
                ? null
                : ((c = (0, te.riskInCurrencyToPips)(
                    d,
                    o,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  )),
                  (0, te.pipsToRiskInPercent)(
                    c,
                    o,
                    s,
                    i,
                    this._priceMagnifier,
                    this._lotSize
                  ));
            case 3:
              return u;
          }
        }
        _getBracketsInPercentProperty() {
          return this._supportCryptoBrackets
            ? "showCryptoBracketsInPercent"
            : "showBracketsInPercent";
        }
        _getBracketsInCurrencyProperty() {
          return this._supportCryptoBrackets
            ? "showCryptoBracketsInCurrency"
            : "showBracketsInCurrency";
        }
        _computeControlState(e, t, i, s, r) {
          const o =
              this._isStatusEditing &&
              t === x.BracketType.TrailingStop &&
              !s &&
              this._hasTrailingStopBracket,
            n =
              (this._isStatusEditing &&
                t !== x.BracketType.TakeProfit &&
                this.getEnabled() &&
                !s &&
                this._hasTrailingStopBracket) ||
              1 === this.stopLossTypes.length,
            a = this._isStatusEditing && !i,
            l = Boolean(
              1 === e && this._isStatusEditing && !this.getEnabled() && !r
            );
          return {
            inputDisabled: o || a || l,
            labelDisabled: n || a || l,
            checkboxDisabled: a || l,
          };
        }
      }
      var oe,
        ne = i(218286),
        ae = i(477071);
      !(function (e) {
        (e.Ask = "ask"), (e.Bid = "bid"), (e.Stop = "stop"), (e.None = "");
      })(oe || (oe = {}));
      const le = m.t(null, void 0, i(402043));
      function de(e, t) {
        return e.res === t.res && e.msg === t.msg && e.severity === t.severity;
      }
      class ue {
        constructor({
          priceType: e,
          quotes$: t,
          side$: s,
          info: r,
          status$: o,
          formatter: a,
          orderType$: l,
          settings$: d,
          brokerTitle: u,
          orderWidgetStat: c,
          getSettings: h,
          initialPrice: p,
          initialOffset: _,
          orderRules: g,
          stopPriceControlData$: b,
          supportStopOrdersInBothDirections: y,
          supportStopLimitOrdersInBothDirections: v,
          supportStrictCheckingLimitOrderPrice: P,
          useContextValidation: k,
          originalOrderPrice: S,
        }) {
          (this.id = (0, q.randomHashN)(6)),
            (this.onControlFocused = new Q.Delegate()),
            (this._focusedControl$ = new n.BehaviorSubject(0)),
            (this._priceControlData$ = new n.BehaviorSubject(null)),
            (this._value$ = new n.BehaviorSubject(null)),
            (this._error$ = new n.BehaviorSubject({ res: !1 })),
            (this._controlError$ = new n.BehaviorSubject({ res: !1 })),
            (this._subscriptions = []),
            (this._symbolType = ""),
            (this._priceRules = []),
            (this._stopLimitPercentPriceRuleCheckers = []),
            (this.getError = () => this._error$.getValue()),
            (this.setControlError = (e, t) => {
              this._controlError$.next({ res: e, severity: "error", msg: t });
            }),
            (this.setAbsolutePrice = (e) => {
              const t = (0, R.parseValue)(e, this.formatter);
              if (!t.res) {
                const t = this.getPriceControlData() ?? {
                  index: 0,
                  value: 0,
                  absolutePrice: "",
                  offset: 0,
                  base: "ask",
                };
                return void this._setPrice({ ...t, absolutePrice: e });
              }
              const i = t.value,
                s = this._priceToIndex(i);
              let r = 0;
              (0, O.combineLatest)({
                focusedControl: this._focusedControl$,
                quotes: this.quotes$,
                stopPriceControlData: this._stopPriceControlData$,
                side: this.side$,
                orderType: this.orderType$,
              })
                .pipe((0, G.take)(1))
                .subscribe((t) => {
                  const {
                      quotes: o,
                      stopPriceControlData: n,
                      side: a,
                      orderType: l,
                    } = t,
                    d = this._getBase(a, l);
                  switch (d) {
                    case "stop":
                      null !== n && (r = Math.round(s - n.index));
                      break;
                    case "ask":
                      const e = this._priceToIndex((0, R.getAsk)(o));
                      r = Math.round(s - e);
                      break;
                    case "bid":
                      const t = this._priceToIndex((0, R.getBid)(o));
                      r = Math.round(s - t);
                  }
                  this._setPrice({
                    index: s,
                    value: i,
                    absolutePrice: e,
                    offset: r,
                    base: d,
                  });
                });
            }),
            (this.setPriceValue = (e, t = !1) => {
              (0, O.combineLatest)({
                focusedControl: this._focusedControl$,
                quotes: this.quotes$,
                stopPriceControlData: this._stopPriceControlData$,
                side: this.side$,
                orderType: this.orderType$,
              })
                .pipe((0, G.take)(1))
                .subscribe((i) => {
                  const {
                    quotes: s,
                    stopPriceControlData: r,
                    side: o,
                    orderType: n,
                  } = i;
                  (this._roundToStepRequired() || t) &&
                    (e = (0, ie.roundToStepByPriceTypeAndSide)(
                      e,
                      this.getStep(e),
                      this.priceType,
                      o
                    ));
                  const a = this._priceToIndex(e),
                    l = this._getBase(o, n);
                  let d = 0;
                  switch (l) {
                    case "stop":
                      null !== r && (d = Math.round(a - r.index));
                      break;
                    case "ask":
                      const e = this._priceToIndex((0, R.getAsk)(s));
                      d = Math.round(a - e);
                      break;
                    case "bid":
                      const t = this._priceToIndex((0, R.getBid)(s));
                      d = Math.round(a - t);
                  }
                  this._setPrice({
                    index: a,
                    value: e,
                    absolutePrice: this.formatter.format(e),
                    offset: d,
                    base: l,
                  });
                });
            }),
            (this.setPriceOffset = (e) => {
              (0, O.combineLatest)({
                focusedControl: this._focusedControl$,
                quotes: this.quotes$,
                stopPriceControlData: this._stopPriceControlData$,
                side: this.side$,
                orderType: this.orderType$,
              })
                .pipe((0, G.take)(1))
                .subscribe((t) => {
                  const {
                    quotes: i,
                    stopPriceControlData: s,
                    side: r,
                    orderType: o,
                  } = t;
                  let n = 0;
                  const a = this._getBase(r, o);
                  switch (a) {
                    case "stop":
                      null !== s && (n = Math.round(s.index + e));
                      break;
                    case "ask":
                      const t = this._priceToIndex((0, R.getAsk)(i));
                      n = Math.round(t + e);
                      break;
                    case "bid":
                      const r = this._priceToIndex((0, R.getBid)(i));
                      n = Math.round(r + e);
                  }
                  const l = this.indexToPrice(n);
                  this._setPrice({
                    index: n,
                    value: l,
                    absolutePrice: this.formatter.format(l),
                    offset: e,
                    base: a,
                  });
                });
            }),
            (this.forcePriceUpdate = (e) => {
              null !== e &&
                (this.setControlError(!1),
                this.setFocusedControl(0),
                this.setPriceValue(e, !0));
            }),
            (this.getPriceControlData = () =>
              this._priceControlData$.getValue()),
            (this.getPrice = () => this.getPriceControlData()?.value ?? null),
            (this.getValue = () => this._value$.getValue()),
            (this.getFocusedControl = () => this._focusedControl$.getValue()),
            (this.getStep = (e) =>
              void 0 === e
                ? this._minTick
                : (0, R.getPriceStep)({
                    price: e,
                    priceType: this.priceType,
                    minTick: this._minTick,
                    variableMinTickData: this._variableMinTickData,
                    limitPriceStep: this._instrumentInfo.limitPriceStep,
                    stopPriceStep: this._instrumentInfo.stopPriceStep,
                  })),
            (this.setFocusedControl = (e) => {
              this._focusedControl$.next(e);
            }),
            (this._isPriceRules = (e) =>
              "limitPriceDistance" === e.id || "stopPriceDistance" === e.id),
            (this._updateFocusIfNeeded = (e) => {
              1 !== this.getFocusedControl() ||
                (!this.isRelativePriceControlHidden &&
                  e.showRelativePriceControl) ||
                this.setFocusedControl(0);
            }),
            (this._setPrice = (e) => {
              this._priceControlData$.next(e);
            }),
            (this._setError = (e) => {
              const {
                priceControlData: t,
                quotes: s,
                side: r,
                orderType: o,
                controlError: n,
                status: a,
              } = e;
              if (a === A.OrderPanelStatus.Wait)
                return void this._error$.next({ res: !1 });
              if (n.res) return void this._error$.next(n);
              let l = { res: !1 },
                d = { res: !1 };
              if (null === t)
                l = {
                  res: !0,
                  severity: "error",
                  msg: m.t(null, void 0, i(845542)),
                };
              else if (!this._useContextValidation) {
                const e = this.getStep(t.value);
                if (
                  ((d = this._checkPriceWarning(t.value, s, r)),
                  null !== o && 2 !== o)
                ) {
                  const i = (0, R.getQuotePrice)(s, r);
                  l = (0, ae.validatePrice)({
                    price: t.value,
                    originalOrderPrice: this._originalOrderPrice,
                    askOrBid: i,
                    orderType: o,
                    side: r,
                    priceType: this.priceType,
                    isForex: "forex" === this._symbolType,
                    formatter: this.formatter,
                    stopLimitPercentPriceRuleCheckers:
                      this._stopLimitPercentPriceRuleCheckers,
                    supportStopOrdersInBothDirections:
                      this.supportStopOrdersInBothDirections,
                    supportStopLimitOrdersInBothDirections:
                      this.supportStopLimitOrdersInBothDirections,
                    supportStrictCheckingLimitOrderPrice:
                      this.supportStrictCheckingLimitOrderPrice,
                    step: e,
                    isStatusEditing: a === A.OrderPanelStatus.Editing,
                    roundedToStep: this._roundToStepRequired(),
                  });
                }
              }
              l.res
                ? this._error$.next(l)
                : d.res
                ? this._error$.next(d)
                : this._error$.next({ res: !1 });
            }),
            (this.quotes$ = t),
            (this.side$ = s),
            (this._instrumentInfo = r),
            (this._status$ = o),
            (this.formatter = new se(a)),
            (this.orderType$ = l),
            (this.priceType = e),
            (this._settings$ = d),
            (this._getSettings = h),
            (this._brokerTitle = u),
            (this.orderWidgetStat = c),
            (this.supportStopOrdersInBothDirections = Boolean(y)),
            (this.supportStopLimitOrdersInBothDirections = Boolean(v)),
            (this.supportStrictCheckingLimitOrderPrice = Boolean(P)),
            (this._useContextValidation = k),
            (this._symbolType = r.type || ""),
            (this._pipSize = r.pipSize),
            (this._minTick = r.minTick || r.pipSize),
            (this._variableMinTickData = r.variableMinTick
              ? (0, z.makeVariableMinTickData)(this._minTick, r.variableMinTick)
              : void 0);
          const C = this.getStep();
          (this.indexToPrice = (0, z.makePriceIndexToPriceConverter)(
            C,
            this._variableMinTickData
          )),
            (this._priceToIndex = (0, z.makePriceToPriceIndexConverter)(
              C,
              this._variableMinTickData
            )),
            (this.priceControlData$ = this._priceControlData$.asObservable()),
            (this.value$ = this._value$.asObservable()),
            (this.focusedControl$ = this._focusedControl$.asObservable()),
            (this.error$ = this._error$.pipe((0, ne.distinctUntilChanged)(de))),
            (this._originalOrderPrice = S),
            (this._stopPriceControlData$ = (0, O.combineLatest)({
              stopPriceControlData: b ?? (0, I.of)(null),
              orderType: this.orderType$,
            }).pipe(
              (0, f.map)((t) => {
                const { stopPriceControlData: i, orderType: s } = t;
                return 1 === e && 4 === s ? i : null;
              }),
              (0, ne.distinctUntilChanged)()
            )),
            (this.isRelativePriceControlHidden = this._roundToStepRequired()),
            this.setPriceValues({ price: p, offset: _ }),
            (this.modifiedAbsolutePriceControlStat =
              null !== c
                ? () =>
                    c.setPriceControlModifiedProperty(
                      A.PriceSubControlType.Absolute
                    )
                : () => {}),
            (this.modifiedRelativePriceControlStat =
              null !== c
                ? () =>
                    c.setPriceControlModifiedProperty(
                      A.PriceSubControlType.Relative
                    )
                : () => {});
          const w = g ?? [];
          this._priceRules = w.filter(this._isPriceRules) ?? [];
          const T = w.filter(F.isStopLimitPercentValidationRule) ?? [],
            B =
              1 === this.priceType
                ? F.isLimitPercentValidationRule
                : F.isStopPercentValidationRule;
          T.filter(B).forEach((e) => {
            this._stopLimitPercentPriceRuleCheckers.push(
              (0, ae.makeStopLimitPercentPriceRuleChecker)(
                e.options.min,
                e.options.max
              )
            );
          });
        }
        setPriceValues(e) {
          const { price: t, offset: i } = e;
          void 0 !== i &&
          !this.isRelativePriceControlHidden &&
          this._getSettings().showRelativePriceControl
            ? (this.setFocusedControl(1), this.setPriceOffset(i))
            : void 0 !== t &&
              (this.setFocusedControl(0), this.setPriceValue(t, !0));
        }
        subscribe() {
          const e = this._settings$.subscribe(this._updateFocusIfNeeded),
            t = (0, O.combineLatest)({
              quotes: this.quotes$,
              side: this.side$,
              focusedControl: this.focusedControl$,
              status: this._status$,
            })
              .pipe($(this._priceControlData$))
              .subscribe(([e, t]) => {
                const { quotes: i, side: s, focusedControl: r, status: o } = e;
                null !== t && o !== A.OrderPanelStatus.Wait
                  ? 0 === r
                    ? this.setAbsolutePrice(t.absolutePrice)
                    : this.setPriceOffset(t.offset)
                  : this.setPriceValue(
                      1 === s ? (0, R.getAsk)(i) : (0, R.getBid)(i),
                      !1
                    );
              }),
            i = (0, O.combineLatest)({
              priceControlData: this._priceControlData$,
              quotes: this.quotes$,
              side: this.side$,
              orderType: this.orderType$,
              controlError: this._controlError$.pipe(
                (0, ne.distinctUntilChanged)(de)
              ),
              status: this._status$,
            }).subscribe(this._setError),
            s = (0, O.combineLatest)({
              priceControlData: this._priceControlData$,
              error: this.error$,
            }).subscribe((e) => {
              const { priceControlData: t, error: i } = e;
              let s = null === t ? null : t.value;
              this._useContextValidation ||
                (s = i.res && "error" === i.severity ? null : s),
                this._value$.next(s);
            });
          this._subscriptions = [e, t, i, s];
        }
        unsubscribe() {
          this._subscriptions.map((e) => e.unsubscribe());
        }
        resetPrice() {
          this.setControlError(!1),
            this.setFocusedControl(
              this._getSettings().showRelativePriceControl &&
                !this.isRelativePriceControlHidden
                ? 1
                : 0
            ),
            (0, O.combineLatest)([this.quotes$, this.side$])
              .pipe((0, G.take)(1))
              .subscribe(([e, t]) => {
                this.setPriceValue(
                  1 === t ? (0, R.getAsk)(e) : (0, R.getBid)(e),
                  !1
                );
              });
        }
        _checkPriceWarning(e, t, i) {
          const s = this._priceRules.find((s) =>
            this._isDistanceRuleViolated(e, t, s, i)
          );
          return s
            ? {
                res: !0,
                severity: s.severity,
                msg: le.format({ brokerTitle: this._brokerTitle }),
              }
            : { res: !1, msg: void 0 };
        }
        _isDistanceRuleViolated(e, t, i, s) {
          if (
            ("limitPriceDistance" === i.id && 2 === this.priceType) ||
            ("stopPriceDistance" === i.id && 1 === this.priceType)
          )
            return !1;
          const r = 1 === s,
            o = (0, R.getQuotePrice)(t, s);
          let n = null;
          if (
            (r &&
              "buyDirectionPips" in i.options &&
              (n = i.options.buyDirectionPips),
            !r &&
              "sellDirectionPips" in i.options &&
              (n = i.options.sellDirectionPips),
            null === n)
          )
            return !1;
          return Math.abs(o - e) < n * this._pipSize;
        }
        _getBase(e, t) {
          return 1 === this.priceType && 4 === t
            ? "stop"
            : 1 === e
            ? "ask"
            : "bid";
        }
        _roundToStepRequired() {
          return (0, R.roundToStepRequired)({
            priceType: this.priceType,
            minTick: this._minTick,
            limitPriceStep: this._instrumentInfo.limitPriceStep,
            stopPriceStep: this._instrumentInfo.stopPriceStep,
          });
        }
      }
      class ce {
        constructor({
          displaySymbolName: e,
          symbol: t,
          brokerName: i,
          quotes$: s,
          mode$: r,
          status$: n,
          parentType: a,
          isExistingOrder: l,
          isTradable: d,
          data: u,
          formatter: h,
          isBats: p = !1,
          informerMessage$: _,
          headerState: g,
          orderTemplateGetter: b,
          isOrderPresetsEnabled: y = !1,
          brokerId: m,
          isSendButtonDisabled$: v,
        }) {
          (this._stopSubscriptions$ = new o.Subject()),
            (this._pinButtonClicked = new Q.Delegate()),
            (this._backButtonClicked = new Q.Delegate()),
            (this._closeButtonClicked = new Q.Delegate()),
            (this._onStatusChanged = (e, t) => {
              this._headerState.setTitle(this._title(e)),
                this._headerState.setDescription(this._text(e)),
                this._headerState.setCloseFunction(
                  this._hasCloseButton(t) ? () => this.close() : void 0
                ),
                this._headerState.setBackFunction(
                  this._hasBackButton(e, t) ? () => this.back() : void 0
                ),
                this._headerState.setOrderTemplateFunction(
                  this._hasPresetsButton(e) ? this._orderTemplateGetter : void 0
                ),
                this._headerState.setBrokerId(this._brokerId);
            }),
            (this._onQuotes = (e) => {
              this._headerState.setHasDelayedQuotes(Boolean(e.isDelayed));
            }),
            (this._handleSendingDisability = (e) => {
              this._headerState.setIsSendingDisabled(e);
            }),
            (this._headerState = g),
            (this._orderTemplateGetter = b),
            (this._data = u),
            (this._displaySymbolName = e),
            (this._formatter = h),
            (this._brokerName = i),
            (this._brokerId = m),
            (this._parentType = a),
            (this._isExistingOrder = l),
            (this._isOrderPresetsEnabled = y),
            (0, O.combineLatest)({ status: n, mode: r })
              .pipe(c(this._stopSubscriptions$))
              .subscribe(({ status: e, mode: t }) =>
                this._onStatusChanged(e, t)
              ),
            (0, O.combineLatest)({
              status: n,
              mode: r,
            })
              .pipe((0, G.take)(1))
              .subscribe(({ status: e, mode: i }) => {
                this._onStatusChanged(e, i),
                  this._headerState.setSymbol(t),
                  this._headerState.setHasDelayedQuotes(!1),
                  this._headerState.setHasBatsQuotes(p),
                  this._headerState.setIsTradable(d);
              }),
            s && s.pipe(c(this._stopSubscriptions$)).subscribe(this._onQuotes),
            void 0 !== _ &&
              _.pipe(c(this._stopSubscriptions$)).subscribe((e) =>
                this._headerState.setInformerMessage(e)
              ),
            void 0 !== v &&
              v
                .pipe(c(this._stopSubscriptions$))
                .subscribe(this._handleSendingDisability);
        }
        unsubscribe() {
          this._stopSubscriptions$.next(), this._stopSubscriptions$.complete();
        }
        back() {
          this._backButtonClicked.fire();
        }
        pin() {
          this._pinButtonClicked.fire();
        }
        close() {
          this._closeButtonClicked.fire();
        }
        pinButtonClicked() {
          return this._pinButtonClicked;
        }
        backButtonClicked() {
          return this._backButtonClicked;
        }
        closeButtonClicked() {
          return this._closeButtonClicked;
        }
        _hasBackButton(e, t) {
          return (
            t === A.OrderEditorDisplayMode.Panel &&
            (this._isExistingOrder ||
              1 !== this._parentType ||
              e === A.OrderPanelStatus.Preview)
          );
        }
        _hasPresetsButton(e) {
          return (
            this._isOrderPresetsEnabled &&
            (e === A.OrderPanelStatus.Active ||
              e === A.OrderPanelStatus.Wait) &&
            1 === this._parentType
          );
        }
        _hasCloseButton(e) {
          return (
            e !== A.OrderEditorDisplayMode.ResizableDrawer &&
            b.enabled("order_panel_close_button")
          );
        }
        _title(e) {
          return e === A.OrderPanelStatus.Preview
            ? m.t(null, void 0, i(88346))
            : this._displaySymbolName;
        }
        _text(e) {
          if (e !== A.OrderPanelStatus.Preview) {
            if (
              !this._isExistingOrder ||
              void 0 === this._data ||
              void 0 === this._formatter
            )
              return this._brokerName || void 0;
            if (1 === this._parentType)
              return m.t(null, void 0, i(258063)) + " " + this._data.id;
            if (2 === this._parentType || 3 === this._parentType) {
              const e = this._data.side,
                t = this._data.qty,
                s = this._formatter.format(
                  this._data.price ||
                    this._data.avgPrice ||
                    this._data.limitPrice
                );
              return (
                (1 === e
                  ? m.t(null, void 0, i(728257))
                  : m.t(null, void 0, i(13009))) +
                " " +
                t +
                " @ " +
                s
              );
            }
          }
        }
      }
      var he = (function (e) {
          function t(t, i) {
            return e.call(this) || this;
          }
          return (
            (0, E.__extends)(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(i(303448).Subscription),
        pe = {
          setInterval: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var i = pe.delegate;
            return ((null == i ? void 0 : i.setInterval) || setInterval).apply(
              void 0,
              (0, E.__spreadArray)([], (0, E.__read)(e), !1)
            );
          },
          clearInterval: function (e) {
            var t = pe.delegate;
            return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
          },
          delegate: void 0,
        },
        _e = i(3955),
        ge = (function (e) {
          function t(t, i) {
            var s = e.call(this, t, i) || this;
            return (s.scheduler = t), (s.work = i), (s.pending = !1), s;
          }
          return (
            (0, E.__extends)(t, e),
            (t.prototype.schedule = function (e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var i = this.id,
                s = this.scheduler;
              return (
                null != i && (this.id = this.recycleAsyncId(s, i, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id = this.id || this.requestAsyncId(s, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, i) {
              return (
                void 0 === i && (i = 0),
                pe.setInterval(e.flush.bind(e, this), i)
              );
            }),
            (t.prototype.recycleAsyncId = function (e, t, i) {
              if (
                (void 0 === i && (i = 0),
                null != i && this.delay === i && !1 === this.pending)
              )
                return t;
              pe.clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var i = this._execute(e, t);
              if (i) return i;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var i,
                s = !1;
              try {
                this.work(e);
              } catch (e) {
                (s = !0),
                  (i = e || new Error("Scheduled action threw falsy error"));
              }
              if (s) return this.unsubscribe(), i;
            }),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                var t = this.id,
                  i = this.scheduler,
                  s = i.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, _e.arrRemove)(s, this),
                  null != t && (this.id = this.recycleAsyncId(i, t, null)),
                  (this.delay = null),
                  e.prototype.unsubscribe.call(this);
              }
            }),
            t
          );
        })(he),
        be = i(712813),
        ye = (function () {
          function e(t, i) {
            void 0 === i && (i = e.now),
              (this.schedulerActionCtor = t),
              (this.now = i);
          }
          return (
            (e.prototype.schedule = function (e, t, i) {
              return (
                void 0 === t && (t = 0),
                new this.schedulerActionCtor(this, e).schedule(i, t)
              );
            }),
            (e.now = be.dateTimestampProvider.now),
            e
          );
        })(),
        me = new ((function (e) {
          function t(t, i) {
            void 0 === i && (i = ye.now);
            var s = e.call(this, t, i) || this;
            return (
              (s.actions = []), (s._active = !1), (s._scheduled = void 0), s
            );
          }
          return (
            (0, E.__extends)(t, e),
            (t.prototype.flush = function (e) {
              var t = this.actions;
              if (this._active) t.push(e);
              else {
                var i;
                this._active = !0;
                do {
                  if ((i = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this._active = !1), i)) {
                  for (; (e = t.shift()); ) e.unsubscribe();
                  throw i;
                }
              }
            }),
            t
          );
        })(ye))(ge),
        ve = me,
        fe = { leading: !0, trailing: !1 };
      var Pe = i(337160);
      function ke(e, t, i) {
        void 0 === e && (e = 0), void 0 === i && (i = ve);
        var s = -1;
        return (
          null != t && ((0, Pe.isScheduler)(t) ? (i = t) : (s = t)),
          new w.Observable(function (t) {
            var r,
              o = (r = e) instanceof Date && !isNaN(r) ? +e - i.now() : e;
            o < 0 && (o = 0);
            var n = 0;
            return i.schedule(function () {
              t.closed ||
                (t.next(n++), 0 <= s ? this.schedule(void 0, s) : t.complete());
            }, o);
          })
        );
      }
      function Se(e, t, i) {
        void 0 === t && (t = me), void 0 === i && (i = fe);
        var s,
          r,
          o,
          n,
          u,
          c = ke(e, t);
        return (
          (s = function () {
            return c;
          }),
          (n = (o = void 0 === (r = i) ? fe : r).leading),
          (u = o.trailing),
          (0, a.operate)(function (e, t) {
            var i = !1,
              r = null,
              o = null,
              a = !1,
              c = function () {
                null == o || o.unsubscribe(),
                  (o = null),
                  u && (_(), a && t.complete());
              },
              h = function () {
                (o = null), a && t.complete();
              },
              p = function (e) {
                return (o = (0, d.innerFrom)(s(e)).subscribe(
                  new l.OperatorSubscriber(t, c, h)
                ));
              },
              _ = function () {
                if (i) {
                  i = !1;
                  var e = r;
                  (r = null), t.next(e), !a && p(e);
                }
              };
            e.subscribe(
              new l.OperatorSubscriber(
                t,
                function (e) {
                  (i = !0), (r = e), (!o || o.closed) && (n ? _() : p(e));
                },
                function () {
                  (a = !0), (!(u && i && o) || o.closed) && t.complete();
                }
              )
            );
          })
        );
      }
      class Ce {
        constructor({
          initialSide: e,
          quotes$: t,
          priceFormatter: i,
          spreadFormatter: s,
          baseCurrency: r,
        }) {
          (this.baseCurrency = null),
            (this.onControlFocused = new Q.Delegate()),
            (this._formattedQuotes$ = new n.BehaviorSubject({
              ask: " ",
              bid: " ",
            })),
            (this._restrictionTypes$ = new n.BehaviorSubject([])),
            (this._quotes = { ask: 0, bid: 0 }),
            (this._waitQuotesTimeout = void 0),
            (this._subscriptions = []),
            (this.getValue = () => this._value$.getValue()),
            (this.setValue = (e) => {
              this._value$.next(e);
            }),
            (this.getFormattedQuotes = () => this._formattedQuotes$.getValue()),
            (this.currentQuotes = () => this._quotes),
            (this.getRestrictionTypes = () =>
              this._restrictionTypes$.getValue()),
            (this._value$ = new n.BehaviorSubject(e)),
            (this.value$ = this._value$.asObservable()),
            (this.formattedQuotes$ = this._formattedQuotes$.asObservable()),
            (this.restrictionTypes$ = this._restrictionTypes$.asObservable()),
            (this.baseCurrency = r),
            (this._quotes$ = t),
            (this._priceFormatter = i),
            (this._spreadFormatter = s);
        }
        subscribe() {
          this._waitQuotesTimeout = setTimeout(() => {
            this._formattedQuotes$.next({}), (this._quotes = {});
          }, 5e3);
          const e = this._quotes$.subscribe((e) => {
              this._formattedQuotes$.next(this._generateText(e)),
                (this._quotes = e),
                clearTimeout(this._waitQuotesTimeout);
            }),
            t = this._quotes$
              .pipe(Se(2e3, me, { leading: !0, trailing: !0 }))
              .subscribe((e) => {
                this._restrictionTypes$.next(this._generateRestrictionTypes(e));
              });
          return (this._subscriptions = [e, t]), this._subscriptions;
        }
        unsubscribe() {
          this._subscriptions.forEach((e) => e.unsubscribe()),
            clearTimeout(this._waitQuotesTimeout);
        }
        _generateText(e) {
          const t = {},
            i = (0, R.getAsk)(e),
            s = (0, R.getBid)(e);
          return (
            (t.ask = this._priceFormatter.format(i)),
            (t.bid = this._priceFormatter.format(s)),
            (t.spread = (0, U.isNumber)(e.spread)
              ? this._spreadFormatter.format(e.spread)
              : this._priceFormatter.format(i - s)),
            t
          );
        }
        _generateRestrictionTypes(e) {
          const t = [];
          return (
            e.isHalted && t.push(x.RestrictionType.Halted),
            e.isHardToBorrow && t.push(x.RestrictionType.HardToBorrow),
            e.isNotShortable && t.push(x.RestrictionType.NotShortable),
            t
          );
        }
      }
      var we = i(960521),
        Te = i.n(we);
      function Be(e, t) {
        return (0, R.getLast)(e) || (0, R.getQuotePrice)(e, t) || 0;
      }
      class Oe {
        constructor({
          stopPriceModel: e,
          limitPriceModel: t,
          orderType$: i,
          side$: s,
          quotes$: r,
        }) {
          (this._subscriptions = []),
            (this._calculateLimitModelPrice = (e) => {
              const t = this._stopPriceModel.getPrice();
              if (null === t) return null;
              const i = this._limitPriceModel.getStep(t),
                s = 1 === e ? 1 : -1;
              return new (Te())(i).mul(s).plus(t).toNumber();
            }),
            (this._orderType$ = i),
            (this._side$ = s),
            (this._stopPriceModel = e),
            (this._limitPriceModel = t),
            (this.price$ = (0, O.combineLatest)({
              orderType: i,
              side: s,
              quotes: r,
              stopPrice: e.value$,
              limitPrice: t.value$,
            }).pipe(
              (0, f.map)((e) => {
                const {
                  orderType: t,
                  side: i,
                  quotes: s,
                  stopPrice: r,
                  limitPrice: o,
                } = e;
                switch (t) {
                  case 1:
                  case 4:
                    return o || Be(s, i);
                  case 3:
                    return r || Be(s, i);
                  default:
                    return (0, R.getQuotePrice)(s, i);
                }
              }),
              (0, ne.distinctUntilChanged)()
            ));
        }
        subscribe() {
          const e = this._orderType$
            .pipe(
              (0, a.operate)(function (e, t) {
                var i,
                  s = !1;
                e.subscribe(
                  new l.OperatorSubscriber(t, function (e) {
                    var r = i;
                    (i = e), s && t.next([r, e]), (s = !0);
                  })
                );
              }),
              $(this._side$),
              (0, f.map)(([e, t]) => {
                const [i, s] = e,
                  r = this._stopPriceModel.getPrice(),
                  o = this._limitPriceModel.getPrice();
                if (1 === s && null !== i && [3, 4].includes(i))
                  this._limitPriceModel.forcePriceUpdate(r);
                else if (3 !== s || 1 !== i) {
                  if (4 === s) {
                    1 === i && this._stopPriceModel.forcePriceUpdate(o);
                    const e = this._calculateLimitModelPrice(t);
                    this._limitPriceModel.forcePriceUpdate(e);
                  }
                } else this._stopPriceModel.forcePriceUpdate(o);
              })
            )
            .subscribe();
          this._subscriptions.push(e);
        }
        unsubscribe() {
          this._subscriptions.map((e) => e.unsubscribe());
        }
      }
      var Me = i(650279),
        Ie = i(341086),
        Ee = i(50771),
        De = i(848062),
        Ve = i(863582),
        $e = i(499665);
      function Le(e) {
        const {
          step: t,
          pips: i,
          lotSize: s,
          pipValue: r,
          riskInCurrency: o,
          priceMagnifier: n,
        } = e;
        if (!i) return 0;
        return Fe(
          (0, we.Big)(o)
            .mul(n || 1)
            .div(i)
            .div(r)
            .div(s || 1),
          t
        ).toNumber();
      }
      function xe(e) {
        const {
          step: t,
          pips: i,
          equity: s,
          lotSize: r,
          pipValue: o,
          riskInPercent: n,
          priceMagnifier: a,
        } = e;
        if (!i) return 0;
        return Fe(
          (0, we.Big)(n)
            .mul(a || 1)
            .mul(s)
            .div(i)
            .div(o)
            .div(r || 1)
            .div(100),
          t
        ).toNumber();
      }
      function Ae(e) {
        const {
          pips: t,
          amount: i,
          lotSize: s,
          pipValue: r,
          priceMagnifier: o,
        } = e;
        return (0, we.Big)(t)
          .mul(r)
          .mul(i)
          .mul(s || 1)
          .div(o || 1)
          .toNumber();
      }
      function Re(e) {
        const {
          pips: t,
          amount: i,
          equity: s,
          lotSize: r,
          pipValue: o,
          priceMagnifier: n,
        } = e;
        return s && i
          ? (0, we.Big)(t)
              .mul(o)
              .mul(i)
              .mul(r || 1)
              .mul(100)
              .div(s)
              .div(n || 1)
              .toNumber()
          : 0;
      }
      function Fe(e, t) {
        return e.div(t).round(0, 0).mul(t);
      }
      class Ne {
        constructor({
          stopLossAvailable$: e,
          stopLossPips$: t,
          equity$: i,
          pipValue$: s,
          settings$: o,
          initialQty: a,
          initialOrderSizeCalculatorQuantityType: l,
          initialOrderSizeCalculatorValue: d,
          initialLastRiskQuantityType: u,
          stopLossAvailableGetter: c,
          initialLastUsedQuantityType: h,
          info: p,
          currency: _,
          orderWidgetStat: g,
          showRiskControlsAndInfo: b,
          useContextValidation: y,
        }) {
          (this.formatter = (0, Ie.numberFormattersParsersChain)({
            chain: [
              (0, Ee.prohibitNanOnParseStep)(),
              (0, De.decimalNumberMagnitudeStep)({ standardNotationOnly: !0 }),
              (0, Ve.signumStep)({ negativeSign: Ve.longMinusSign }),
            ],
          })),
            (this.riskInCurrencyFormatter = new W.PriceFormatter({
              priceScale: 100,
            })),
            (this.riskInPercentFormatter = new W.PriceFormatter({
              priceScale: 100,
            })),
            (this.convertedValues$ = new C.ReplaySubject(1)),
            (this.riskStep = 0.01),
            (this.onControlFocused = new Q.Delegate()),
            (this._subscriptions = []),
            (this._value$ = new n.BehaviorSubject(null)),
            (this._inputType$ = new n.BehaviorSubject("units")),
            (this._focusedControl$ = new n.BehaviorSubject(0)),
            (this._error$ = new n.BehaviorSubject({ res: !1 })),
            (this._controlError$ = new n.BehaviorSubject({ res: !1 })),
            (this._isOrderSizeCalculatorEnabled = !1),
            (this.setControlError = (e, t) => {
              this._controlError$.next({ res: e, msg: t });
            }),
            (this.setInputTypeAndValue = (e, t) => {
              this._setInputType(e),
                "units" === e
                  ? this.quantity.setValue(t)
                  : this.orderSizeCalculator.setValue(t),
                this.setControlError(!1);
            }),
            (this.getInputType = () => this._inputType$.getValue()),
            (this.getOrderSizeCalculatorQuantityType = () =>
              this._orderSizeCalculatorQuantityType$.getValue()),
            (this.setOrderSizeCalculatorQuantityType = (e) => {
              this._orderSizeCalculatorQuantityType$.next(e);
            }),
            (this.getLastRiskQuantityType = () =>
              this._lastRiskQuantityType$.getValue()),
            (this.getLastUsedQuantityType = () =>
              this._lastUsedQuantityType$.getValue()),
            (this.getFocusedControl = () => this._focusedControl$.getValue()),
            (this.getError = () => this._error$.getValue()),
            (this.getQuantityMetainfo = () =>
              this._quantityMetainfo$.getValue()),
            (this.setFocusedControl = (e) => {
              this._focusedControl$.next(e);
            }),
            (this.stopLossAvailable = () => this._stopLossAvailableGetter()),
            (this.setConvertedValues = (e) => {
              this.convertedValues$.next(e);
            }),
            (this._setInputType = (e) => {
              ("riskInCurrency" !== e && "riskInPercent" !== e) ||
                this._lastRiskQuantityType$.next(e),
                "units" !== e && this.setOrderSizeCalculatorQuantityType(e),
                this._lastUsedQuantityType$.next(e),
                this._inputType$.next(e);
            }),
            (this._updateFocusIfNeeded = (e) => {
              const t = this._focusedControl$.getValue(),
                i = 1 === t && !e.showCurrencyRiskInQty,
                s = 2 === t && !e.showPercentRiskInQty;
              (i || s) && this.setFocusedControl(0);
            }),
            (this._setQuantity = (e) => {
              this._quantity$.next((0, R.applyRounding)(e, this.formatter));
            }),
            (this._setOrderSizeCalculator = (e) => {
              this._orderSizeCalculator$.next(
                (0, R.applyRounding)(e, this.formatter)
              );
            }),
            (this._setRiskInCurrency = (e) => {
              this._riskInCurrency$?.next(
                (0, R.applyRounding)(e, this.riskInCurrencyFormatter)
              );
            }),
            (this._setRiskInPercent = (e) => {
              this._riskInPercent$?.next(
                (0, R.applyRounding)(e, this.riskInPercentFormatter)
              );
            }),
            (this.qty = p.qty),
            (this.units = p.units),
            (this._lotSize = p.lotSize),
            (this._useContextValidation = y),
            (this.showRiskControlsAndInfo = b),
            (this.currency = _),
            (this.stopLossAvailable$ = e),
            (this._equity$ = i),
            (this._pipValue$ = s),
            (this._stopLossPips$ = t),
            (this._settings$ = o),
            (this._stopLossAvailableGetter = c),
            (this._priceMagnifier = p.priceMagnifier),
            (this._quantity$ = new n.BehaviorSubject(
              a ?? this.qty.default ?? null
            )),
            (this._orderSizeCalculator$ = new n.BehaviorSubject(d)),
            (this._orderSizeCalculatorQuantityType$ = new n.BehaviorSubject(l)),
            (this._lastRiskQuantityType$ = new n.BehaviorSubject(u)),
            (this._lastUsedQuantityType$ = new n.BehaviorSubject(h ?? "units")),
            (this._quantityMetainfo$ = new n.BehaviorSubject(p.qty)),
            (this.value$ = this._value$.asObservable()),
            (this.inputType$ = this._inputType$.asObservable()),
            (this.orderSizeCalculatorQuantityType$ =
              this._orderSizeCalculatorQuantityType$.asObservable()),
            (this.lastRiskQuantityType$ =
              this._lastRiskQuantityType$.asObservable()),
            (this.lastUsedQuantityType$ =
              this._lastUsedQuantityType$.asObservable()),
            (this.focusedControl$ = this._focusedControl$.asObservable()),
            (this.error$ = this._error$.asObservable()),
            (this.quantityMetainfo$ = this._quantityMetainfo$.asObservable()),
            (this.orderWidgetStat = g);
          const m = () => {
            if (null !== g) {
              if (!this._isOrderSizeCalculatorEnabled)
                return g.setQtyControlModifiedProperty(
                  A.QuantitySubControlType.Units
                );
              {
                const e = this.getOrderSizeCalculatorQuantityType();
                e && g.setQtyTypeModifiedProperty(e);
              }
            }
          };
          (this.quantity = {
            value$: this._quantity$.asObservable(),
            getValue: () => this._quantity$.getValue(),
            setValue: this._setQuantity,
            onModifiedCallback: m,
            calculatorUsedStat: () =>
              null !== g ? g.setCalculatorUsedProperty() : () => {},
          }),
            (this.orderSizeCalculator = {
              value$: this._orderSizeCalculator$.asObservable(),
              getValue: () => this._orderSizeCalculator$.getValue(),
              setValue: this._setOrderSizeCalculator,
              onModifiedCallback: m,
              calculatorUsedStat: () =>
                null !== g ? g.setCalculatorUsedProperty() : () => {},
            }),
            d &&
              null !== h &&
              h === l &&
              "units" !== h &&
              this.setInputTypeAndValue(h, d),
            this._isOrderSizeCalculatorEnabled ||
              ((this._riskInCurrency$ = new n.BehaviorSubject(null)),
              (this._riskInPercent$ = new n.BehaviorSubject(null)),
              (this.riskInCurrency = {
                value$: this._riskInCurrency$.asObservable(),
                getValue: () =>
                  (0, r.ensureDefined)(this._riskInCurrency$).getValue(),
                setValue: this._setRiskInCurrency,
                onModifiedCallback: () =>
                  null !== g
                    ? g.setQtyControlModifiedProperty(
                        A.QuantitySubControlType.RiskInCurrency
                      )
                    : () => {},
                calculatorUsedStat: () =>
                  null !== g ? g.setCalculatorUsedProperty() : () => {},
              }),
              (this.riskInPercent = {
                value$: this._riskInPercent$.asObservable(),
                getValue: () =>
                  (0, r.ensureDefined)(this._riskInPercent$).getValue(),
                setValue: this._setRiskInPercent,
                onModifiedCallback: () =>
                  null !== g
                    ? g.setQtyControlModifiedProperty(
                        A.QuantitySubControlType.RiskInPercent
                      )
                    : () => {},
                calculatorUsedStat: () =>
                  null !== g ? g.setCalculatorUsedProperty() : () => {},
              }),
              (this._quantityValuesWithFocusedControl$ =
                this._quantityValuesWithFocusedControlObservable()));
        }
        subscribe() {
          const e = [];
          if (this._isOrderSizeCalculatorEnabled) {
            const t = this._inputType$.subscribe((e) => {
                this.setFocusedControl("units" === e ? 0 : 5),
                  this._quantityMetainfo$.next(
                    this._availableQuantityTypeInfos?.[e]?.quantityMetainfo ??
                      this.qty
                  );
              }),
              i = this._focusedControl$
                .pipe(
                  (0, M.switchMap)((e) =>
                    (0, O.combineLatest)([
                      this.convertedValues$,
                      this._orderSizeCalculatorQuantityType$,
                    ]).pipe(
                      (0, f.map)(([t, i]) => ({
                        focusedControl: e,
                        orderSizeCalculatorQuantityType: i,
                        convertedValues: t,
                      }))
                    )
                  )
                )
                .subscribe((e) => {
                  const {
                    focusedControl: t,
                    orderSizeCalculatorQuantityType: i,
                    convertedValues: s,
                  } = e;
                  if (0 === t && null !== i) {
                    const e = s[i];
                    void 0 !== e &&
                      e !== this._orderSizeCalculator$.value &&
                      this._setOrderSizeCalculator(e);
                  }
                  5 === t &&
                    this._quantity$.value !== s.units &&
                    this._setQuantity(s.units);
                }),
              s = this.stopLossAvailable$
                .pipe(
                  (0, ne.distinctUntilChanged)(),
                  skip(1),
                  withLatestFrom(
                    this._settings$,
                    this._lastRiskQuantityType$,
                    this._orderSizeCalculatorQuantityType$,
                    this.convertedValues$,
                    this._inputType$
                  )
                )
                .subscribe(([e, t, i, s, r, o]) => {
                  e || o !== i
                    ? t.enableQuantityInRisk &&
                      e &&
                      null !== i &&
                      void 0 !== this.getAvailableQuantityTypeInfos()?.[i] &&
                      "riskInCurrency" !== s &&
                      "riskInPercent" !== s &&
                      ("units" !== o &&
                        this.setInputTypeAndValue("units", r.units),
                      this.setOrderSizeCalculatorQuantityType(i))
                    : this.setInputTypeAndValue("units", r.units);
                });
            e.push(t, s, i);
          } else {
            const t = this._settings$.subscribe(this._updateFocusIfNeeded),
              i = this.stopLossAvailable$.subscribe((e) => {
                e || this.setFocusedControl(0);
              }),
              s = (0, O.combineLatest)({
                quantityValuesWithFocusedControl: (0, r.ensureDefined)(
                  this._quantityValuesWithFocusedControl$
                ),
                pipValue: this._pipValue$,
                stopLossPips: this._stopLossPips$,
                equity: this._equity$,
              }).subscribe(
                ({
                  quantityValuesWithFocusedControl: e,
                  pipValue: t,
                  stopLossPips: i,
                  equity: s,
                }) => {
                  const {
                      focusedControl: r,
                      quantity: o,
                      riskInCurrency: n,
                      riskInPercent: a,
                    } = e,
                    {
                      quantity: l,
                      riskInCurrency: d,
                      riskInPercent: u,
                    } = this._calculateQuantityValues({
                      focusedControl: r,
                      pipValue: t,
                      quantity: o,
                      riskInCurrency: n,
                      riskInPercent: a,
                      stopLossPips: i,
                      equity: s,
                    });
                  (o === l && n === d && a === u) ||
                    this._setUnfocusedControlsValues(r, l, d, u);
                }
              );
            e.push(t, i, s);
          }
          const t = (0, O.combineLatest)({
            units: this._quantity$,
            controlError: this._controlError$,
            focus: this._focusedControl$,
            orderSizeCalculator: this._orderSizeCalculator$,
            orderSizeCalculatorQuantityType:
              this._orderSizeCalculatorQuantityType$,
          })
            .pipe((0, ne.distinctUntilChanged)(Me.default))
            .subscribe((e) => {
              const {
                units: t,
                controlError: i,
                focus: s,
                orderSizeCalculator: r,
                orderSizeCalculatorQuantityType: o,
              } = e;
              if (this._useContextValidation)
                return (
                  this._error$.next({
                    res: i.res,
                    msg: i.msg,
                    severity: "error",
                  }),
                  void this._value$.next(t)
                );
              const n =
                  null !== o
                    ? this._availableQuantityTypeInfos?.[o]?.quantityMetainfo
                    : void 0,
                a =
                  5 === s && void 0 !== n
                    ? (0, $e.checkQtyError)(n, r, !0)
                    : void 0,
                l = (0, $e.checkQtyError)(this.qty, t, !0),
                d = i.res ? i.msg : a?.msg || l.msg;
              this._error$.next({ res: i.res || a?.res || l.res, msg: d }),
                this._value$.next(
                  i.res || a?.res || l.res || null === s ? null : t
                );
            });
          e.push(t), (this._subscriptions = e);
        }
        unsubscribe() {
          this._subscriptions.map((e) => e.unsubscribe());
        }
        getValue() {
          return this._value$.getValue();
        }
        setAvailableQuantityTypeInfos(e) {
          this._availableQuantityTypeInfos = e;
        }
        getAvailableQuantityTypeInfos() {
          return this._availableQuantityTypeInfos;
        }
        _calculateQuantityValues(e) {
          return {
            quantity: (0, R.applyRounding)(
              this._calculateQuantity(e),
              this.formatter
            ),
            riskInCurrency: (0, R.applyRounding)(
              this._calculateRiskInCurrency(e),
              this.riskInCurrencyFormatter
            ),
            riskInPercent: (0, R.applyRounding)(
              this._calculateRiskInPercent(e),
              this.riskInPercentFormatter
            ),
          };
        }
        _setUnfocusedControlsValues(e, t, i, s) {
          0 !== e && this._setQuantity(t),
            1 !== e && this._setRiskInCurrency(i),
            2 !== e && this._setRiskInPercent(s);
        }
        _quantityValuesWithFocusedControlObservable() {
          return this._focusedControl$.pipe(
            (0, M.switchMap)((e) =>
              1 === e
                ? this._riskInCurrencyObservable(e)
                : 2 === e
                ? this._riskInPercentObservable(e)
                : this._quantityObservable(e)
            )
          );
        }
        _quantityObservable(e) {
          return this._quantity$.pipe(
            (0, M.switchMap)((t) =>
              X([
                (0, r.ensureDefined)(this._riskInCurrency$),
                (0, r.ensureDefined)(this._riskInPercent$),
              ]).pipe(
                (0, f.map)((i) => {
                  const [s, r] = i;
                  return {
                    focusedControl: e,
                    quantity: t,
                    riskInCurrency: s,
                    riskInPercent: r,
                  };
                })
              )
            )
          );
        }
        _riskInCurrencyObservable(e) {
          return (0, r.ensureDefined)(this._riskInCurrency$).pipe(
            (0, M.switchMap)((t) =>
              X([
                this._quantity$,
                (0, r.ensureDefined)(this._riskInPercent$),
              ]).pipe(
                (0, f.map)((i) => {
                  const [s, r] = i;
                  return {
                    focusedControl: e,
                    quantity: s,
                    riskInCurrency: t,
                    riskInPercent: r,
                  };
                })
              )
            )
          );
        }
        _riskInPercentObservable(e) {
          return (0, r.ensureDefined)(this._riskInPercent$).pipe(
            (0, M.switchMap)((t) =>
              X([
                this._quantity$,
                (0, r.ensureDefined)(this._riskInCurrency$),
              ]).pipe(
                (0, f.map)((i) => {
                  const [s, r] = i;
                  return {
                    focusedControl: e,
                    quantity: s,
                    riskInCurrency: r,
                    riskInPercent: t,
                  };
                })
              )
            )
          );
        }
        _calculateQuantity(e) {
          const {
            focusedControl: t,
            pipValue: i,
            quantity: s,
            riskInCurrency: r,
            riskInPercent: o,
            stopLossPips: n,
            equity: a,
          } = e;
          switch (t) {
            case 0:
            default:
              return s;
            case 1:
              return null === r || null === n
                ? null
                : Le({
                    pipValue: i,
                    riskInCurrency: r,
                    pips: n,
                    step: this.qty.step,
                    lotSize: this._lotSize,
                    priceMagnifier: this._priceMagnifier,
                  });
            case 2:
              return null === o || null === n
                ? null
                : xe({
                    equity: a,
                    pipValue: i,
                    riskInPercent: o,
                    pips: n,
                    step: this.qty.step,
                    lotSize: this._lotSize,
                    priceMagnifier: this._priceMagnifier,
                  });
          }
        }
        _calculateRiskInCurrency(e) {
          const {
            focusedControl: t,
            pipValue: i,
            quantity: s,
            riskInCurrency: r,
            riskInPercent: o,
            stopLossPips: n,
            equity: a,
          } = e;
          switch (t) {
            case 0:
            default:
              return null === s || null === n
                ? null
                : Ae({
                    pipValue: i,
                    amount: s,
                    pips: n,
                    lotSize: this._lotSize,
                    priceMagnifier: this._priceMagnifier,
                  });
            case 1:
              return r;
            case 2:
              if (null === o || null === n) return null;
              return Ae({
                pipValue: i,
                pips: n,
                amount: xe({
                  equity: a,
                  pipValue: i,
                  riskInPercent: o,
                  pips: n,
                  step: this.qty.step,
                  lotSize: this._lotSize,
                  priceMagnifier: this._priceMagnifier,
                }),
                lotSize: this._lotSize,
                priceMagnifier: this._priceMagnifier,
              });
          }
        }
        _calculateRiskInPercent(e) {
          const {
              focusedControl: t,
              pipValue: i,
              quantity: s,
              riskInCurrency: r,
              riskInPercent: o,
              stopLossPips: n,
              equity: a,
            } = e,
            l = null === n;
          switch (t) {
            case 0:
              return null === s || l
                ? null
                : Re({
                    equity: a,
                    pipValue: i,
                    amount: s,
                    pips: n,
                    lotSize: this._lotSize,
                    priceMagnifier: this._priceMagnifier,
                  });
            case 1:
              if (null === r || l) return null;
              return Re({
                equity: a,
                pipValue: i,
                pips: n,
                amount: Le({
                  pipValue: i,
                  riskInCurrency: r,
                  pips: n,
                  step: this.qty.step,
                  lotSize: this._lotSize,
                  priceMagnifier: this._priceMagnifier,
                }),
                lotSize: this._lotSize,
                priceMagnifier: this._priceMagnifier,
              });
            case 2:
              return o;
            default:
              return null === s || l
                ? null
                : Re({
                    equity: a,
                    amount: s,
                    pipValue: i,
                    pips: n,
                    lotSize: this._lotSize,
                    priceMagnifier: this._priceMagnifier,
                  });
          }
        }
      }
      var qe = i(797358),
        Qe = i(989546),
        We = i(501329);
      class Ue {
        constructor({
          info: e,
          price$: t,
          baseCurrencyCryptoBalance$: i,
          quoteCurrencyCryptoBalance$: s,
          initialQty: r,
          side$: o,
          sideGetter: a,
          orderWidgetStat: l,
          isExistingOrder: d,
          orderQty: u,
          orderPrice: c,
          useContextValidation: h,
        }) {
          (this.formatter = Qe.defaultQuantityFormatter),
            (this.onControlFocused = new Q.Delegate()),
            (this._value$ = new n.BehaviorSubject(null)),
            (this._quoteCurrencyQuantity$ = new n.BehaviorSubject(null)),
            (this._error$ = new n.BehaviorSubject({ res: !1 })),
            (this._focusedControl$ = new n.BehaviorSubject(3)),
            (this._controlError$ = new n.BehaviorSubject({ res: !1 })),
            (this._baseCurrencyCryptoBalanceValue$ = new n.BehaviorSubject(
              null
            )),
            (this._quoteCurrencyCryptoBalanceValue$ = new n.BehaviorSubject(
              null
            )),
            (this._subscriptions = []),
            (this.setControlError = (e, t) => {
              this._controlError$.next({ res: e, msg: t });
            }),
            (this.getFocusedControl = () => this._focusedControl$.getValue()),
            (this.setFocusedControl = (e) => {
              this._focusedControl$.next(e);
            }),
            (this._setBaseCurrencyQuantity = (e) => {
              this._baseCurrencyQuantity$.next(
                (0, R.applyRounding)(e, this.formatter)
              );
            }),
            (this._setQuoteCurrencyQuantity = (e) => {
              this._quoteCurrencyQuantity$.next(
                (0, R.applyRounding)(e, this.formatter)
              );
            }),
            (this.info = e),
            (this.side$ = o),
            (this.getSide = a),
            (this._price$ = t),
            (this._orderQty = u),
            (this._orderPrice = c),
            (this._isExistingOrder = d),
            (this._baseCurrencyCryptoBalance$ = i),
            (this._quoteCurrencyCryptoBalance$ = s),
            (this._useContextValidation = h),
            (this._baseCurrencyQuantity$ = new n.BehaviorSubject(
              null !== r ? r : e.qty.default || e.qty.step
            )),
            (this.value$ = this._value$.asObservable()),
            (this.focusedControl$ = this._focusedControl$.asObservable()),
            (this.error$ = this._error$.asObservable()),
            (this.baseCurrencyCryptoBalanceValue$ =
              this._baseCurrencyCryptoBalanceValue$.asObservable()),
            (this.quoteCurrencyCryptoBalanceValue$ =
              this._quoteCurrencyCryptoBalanceValue$.asObservable()),
            (this.quoteCurrencyUiParams$ = t.pipe(
              (0, f.map)((t) => {
                const i = (0, we.Big)(t).mul(e.qty.step).toNumber(),
                  s = (0, ie.roundUpToPowerOf10)(i),
                  r = (0, we.Big)(t).mul(e.qty.min).toNumber();
                return { min: (0, We.alignToStep)(r, s), step: s };
              })
            )),
            (this.quantity = {
              value$: this._baseCurrencyQuantity$.asObservable(),
              getValue: () => this._baseCurrencyQuantity$.getValue(),
              setValue: this._setBaseCurrencyQuantity,
              onModifiedCallback:
                null !== l
                  ? () =>
                      l.setQtyControlModifiedProperty(
                        A.QuantitySubControlType.BaseCurrency
                      )
                  : () => {},
            }),
            (this.quoteCurrencyQuantity = {
              value$: this._quoteCurrencyQuantity$.asObservable(),
              getValue: () => this._quoteCurrencyQuantity$.getValue(),
              setValue: this._setQuoteCurrencyQuantity,
              onModifiedCallback:
                null !== l
                  ? () =>
                      l.setQtyControlModifiedProperty(
                        A.QuantitySubControlType.QuoteCurrency
                      )
                  : () => {},
            }),
            (this._quantityValuesWithFocusedControl$ =
              this._quantityValuesWithFocusedControlObservable());
        }
        subscribe() {
          null !== this._baseCurrencyCryptoBalance$ &&
            this._subscriptions.push(
              (0, O.combineLatest)([
                this.side$,
                this._baseCurrencyCryptoBalance$,
              ]).subscribe((e) => {
                const [t, i] = e;
                this._baseCurrencyCryptoBalanceValue$.next(
                  (0, R.getCryptoBalanceValue)({
                    side: t,
                    balance: i,
                    isExistingOrder: this._isExistingOrder,
                    qty: this._orderQty,
                    orderPrice: this._orderPrice,
                  })
                );
              })
            ),
            null !== this._quoteCurrencyCryptoBalance$ &&
              this._subscriptions.push(
                (0, O.combineLatest)([
                  this.side$,
                  this._quoteCurrencyCryptoBalance$,
                ]).subscribe((e) => {
                  const [t, i] = e;
                  this._quoteCurrencyCryptoBalanceValue$.next(
                    (0, R.getCryptoBalanceValue)({
                      side: t,
                      balance: i,
                      isExistingOrder: this._isExistingOrder,
                      qty: this._orderQty,
                      orderPrice: this._orderPrice,
                    })
                  );
                })
              );
          const e = (0, O.combineLatest)({
              price: this._price$,
              quantityValuesWithFocusedControl:
                this._quantityValuesWithFocusedControl$,
            }).subscribe((e) => {
              const { price: t, quantityValuesWithFocusedControl: i } = e,
                {
                  focusedControl: s,
                  baseCurrencyQuantity: r,
                  quoteCurrencyQuantity: o,
                } = i,
                { baseCurrencyQuantity: n, quoteCurrencyQuantity: a } =
                  this._calculateQuantityValues({
                    focusedControl: s,
                    price: t,
                    baseCurrencyQuantity: r,
                    quoteCurrencyQuantity: o,
                  });
              (r === n && o === a) || this._setUnfocusedControlsValues(s, n, a);
            }),
            t = (0, O.combineLatest)({
              baseValue: this._baseCurrencyQuantity$,
              quoteValue: this._quoteCurrencyQuantity$,
              controlError: this._controlError$,
              focus: this._focusedControl$,
              side: this.side$,
              baseBalanceValue: this._baseCurrencyCryptoBalanceValue$,
              quoteBalanceValue: this._quoteCurrencyCryptoBalanceValue$,
            }).subscribe((e) => {
              const {
                baseValue: t,
                quoteValue: i,
                controlError: s,
                focus: r,
                side: o,
                baseBalanceValue: n,
                quoteBalanceValue: a,
              } = e;
              if (this._useContextValidation)
                return (
                  this._error$.next({
                    res: s.res,
                    msg: s.msg,
                    severity: "error",
                  }),
                  void this._value$.next(t)
                );
              const l = (0, $e.checkQtyError)(this.info.qty, t),
                d = (0, qe.validateBalance)({
                  side: o,
                  baseValue: t,
                  baseBalanceValue: n,
                  baseCurrency: this.info.baseCurrency,
                  quoteValue: i,
                  quoteBalanceValue: a,
                  quoteCurrency: this.info.quoteCurrency,
                });
              this._error$.next({
                res: l.res || d.res || s.res,
                msg: l.msg || d.msg || s.msg,
              }),
                this._value$.next(
                  l.res || d.res || s.res || null === r ? null : t
                );
            });
          this._subscriptions.push(e, t);
        }
        getError() {
          return this._error$.getValue();
        }
        unsubscribe() {
          this._subscriptions.forEach((e) => e && e.unsubscribe());
        }
        getValue() {
          return this._value$.getValue();
        }
        _quantityValuesWithFocusedControlObservable() {
          return this._focusedControl$.pipe(
            (0, M.switchMap)((e) => {
              const t = 3 === e,
                i = t
                  ? this._baseCurrencyQuantity$
                  : this._quoteCurrencyQuantity$,
                s = t
                  ? this._quoteCurrencyQuantity$
                  : this._baseCurrencyQuantity$;
              return i.pipe(
                (0, M.switchMap)((i) =>
                  s.pipe(
                    (0, f.map)((s) => ({
                      focusedControl: e,
                      baseCurrencyQuantity: t ? i : s,
                      quoteCurrencyQuantity: t ? s : i,
                    }))
                  )
                )
              );
            })
          );
        }
        _setUnfocusedControlsValues(e, t, i) {
          3 !== e && this._setBaseCurrencyQuantity(t),
            4 !== e && this._setQuoteCurrencyQuantity(i);
        }
        _calculateQuantityValues(e) {
          const {
            focusedControl: t,
            price: i,
            baseCurrencyQuantity: s,
            quoteCurrencyQuantity: r,
          } = e;
          let o = s,
            n = r;
          switch (t) {
            case 3:
              null !== s && (n = (0, we.Big)(s).mul(i).toNumber());
              break;
            case 4:
              null !== r &&
                (o = (0, we.Big)(r)
                  .div(i)
                  .div(this.info.qty.step)
                  .round(0, 0)
                  .mul(this.info.qty.step)
                  .toNumber());
          }
          return {
            baseCurrencyQuantity: (0, R.applyRounding)(o, this.formatter),
            quoteCurrencyQuantity: (0, R.applyRounding)(n, this.formatter),
          };
        }
      }
      class ze {
        constructor({
          initialDuration: e,
          orderType$: t,
          orderWidgetStat: i,
          orderDurations: s,
          symbolDurations: r,
          getOrderType: a,
        }) {
          (this.onControlFocused = new Q.Delegate()),
            (this._value$ = new n.BehaviorSubject(null)),
            (this._hasError$ = new n.BehaviorSubject(!1)),
            (this._stopSubscriptions$ = new o.Subject()),
            (this.setError = (e) => {
              this._hasError$.next(e);
            }),
            (this.getValue = () => {
              const e = this._value$.value;
              if (null === e) return null;
              const t = this.getDurationMetaInfo(e);
              if (void 0 === t) return null;
              const i = { type: e.type };
              return (
                (t.hasDatePicker || t.hasTimePicker) &&
                  (i.datetime = e.datetime),
                i
              );
            }),
            (this.setValue = (e, t) => {
              const i = this._getDurationByOrderType(e, t);
              this._value$.next(i);
            }),
            (this.getOrderType = a),
            (this.orderType$ = t),
            (this.durationMetaInfoList =
              void 0 !== s
                ? (0, R.filterDurationsBySymbolDurations)(s, r)
                : []),
            (this.value$ = this._value$.asObservable()),
            (this.hasError$ = this._hasError$.asObservable()),
            (this.onModifiedCallback =
              null !== i
                ? () => i.setDurationControlModifiedProperty()
                : () => {}),
            this.setValue(e, a());
        }
        isDurationsAvailable() {
          return (
            null !==
            this._getDurationByOrderType(
              this._value$.value,
              this.getOrderType()
            )
          );
        }
        subscribe() {
          (this._stopSubscriptions$ = new o.Subject()),
            this.orderType$.pipe(c(this._stopSubscriptions$)).subscribe((e) => {
              this.setValue(this.getValue(), e);
            });
        }
        unsubscribe() {
          this._stopSubscriptions$.next(), this._stopSubscriptions$.complete();
        }
        getDurationMetaInfo(e) {
          if (null !== e)
            return this.durationMetaInfoList.find((t) => e.type === t.value);
        }
        _getDurationByOrderType(e, t) {
          const i = (0, R.filterDurationsByOrderType)(
            this.durationMetaInfoList,
            t
          );
          if (0 === i.length) return null;
          return null !== e && i.some((t) => e.type === t.value)
            ? e
            : (0, R.makeInitialOrderDuration)(t, i);
        }
      }
      function je(e, t = 100, i) {
        const s = new Map(),
          r = new Map();
        return function (...o) {
          const n = String(i ? i.apply(null, o) : o),
            a = Date.now();
          if (s.has(n) && (r.get(n) ?? -1 / 0) > a) return s.get(n);
          const l = e.apply(this, o);
          return s.set(n, l), r.set(n, a + t), l;
        };
      }
      var He = i(61121);
      const Ge = (0, p.getLogger)("Trading.LeverageViewModel");
      class Ke {
        constructor({
          adapterLeverageInfo: e,
          adapterSetLeverage: t,
          adapterPreviewLeverage: s,
          brokerName: o,
          symbol: a,
          displaySymbol: l,
          orderType$: d,
          getOrderType: u,
          side$: c,
          initialSide: h,
          customFieldsInputValues$: p,
          blocked$: _,
          isBlockedGetter: g,
          onBlockedClick: b,
        }) {
          (this.onControlFocused = new Q.Delegate()),
            (this._leverageInfo$ = new n.BehaviorSubject(null)),
            (this._leveragePreviewResult$ = new n.BehaviorSubject(null)),
            (this._subscription = void 0),
            (this._abortController = new AbortController()),
            (this.leverageInfo = () => this._leverageInfo$.getValue()),
            (this.leveragePreviewResult = () =>
              this._leveragePreviewResult$.getValue()),
            (this.setLeverage = async (e) => {
              try {
                const t = await this._adapterSetLeverage(e),
                  i = this.leverageInfo();
                null !== i &&
                  this._leverageInfo$.next({ ...i, leverage: t.leverage });
              } catch (e) {
                throw (
                  (Ge.logError(
                    `Failed to set leverage: ${(0, y.getLoggerMessage)(e)}`
                  ),
                  new Error(m.t(null, void 0, i(252888))))
                );
              }
            }),
            (this.previewLeverage = async (e) => {
              try {
                const t = await this._adapterPreviewLeverage(e);
                return this._leveragePreviewResult$.next(t), t;
              } catch (e) {
                throw (
                  (this._leveragePreviewResult$.next(null),
                  Ge.logError(
                    `Failed to preview leverage: ${(0, y.getLoggerMessage)(e)}`
                  ),
                  new Error(m.t(null, void 0, i(48048))))
                );
              }
            }),
            (this._updateLeverageInfo = async (e) => {
              const t = await this.getLeverageInfo({
                symbol: this.symbol,
                orderType: this.orderType,
                side: this.side,
                customFields: this.customFields,
              });
              e?.aborted || this._leverageInfo$.next(t);
            }),
            (this._customFieldsInputValues$ = p),
            (this._adapterLeverageInfo = e),
            (this._updateLeverageInfo = (0, He.respectLatest)(
              this._updateLeverageInfo
            )),
            (this._adapterSetLeverage = t),
            (this._adapterPreviewLeverage = s),
            (this.symbol = a),
            (this.displaySymbol = l),
            (this._orderType$ = d),
            (this._side$ = c),
            (this.brokerName = o),
            (this.leverageInfo$ = this._leverageInfo$.asObservable()),
            (this.orderType = (0, r.ensureNotNull)(u())),
            (this.side = h),
            (this.blocked$ = _),
            (this.getBlocked = g),
            (this.onBlockedClick = b),
            (this.getLeverageInfo = je(this.getLeverageInfo));
        }
        async getLeverageInfo(e) {
          try {
            return await this._adapterLeverageInfo(e);
          } catch (e) {
            return (
              Ge.logError(
                `Failed to get leverage info: ${(0, y.getLoggerMessage)(e)}`
              ),
              null
            );
          }
        }
        subscribe() {
          this._subscription = (0, O.combineLatest)({
            orderType: this._orderType$,
            side: this._side$,
            customFieldsDependencies: X(
              this._customFieldsInputValues$,
              this.blocked$
            ).pipe((0, f.map)(([e, t]) => ({ customFields: e, blocked: t }))),
          }).subscribe(
            ({ orderType: e, side: t, customFieldsDependencies: i }) => {
              if (
                ((this.orderType = (0, r.ensureNotNull)(e)),
                (this.side = t),
                (this.customFields = i.customFields),
                i.blocked)
              )
                return (
                  this._abortController.abort(),
                  (this._abortController = new AbortController()),
                  void this._leverageInfo$.next(null)
                );
              this._updateLeverageInfo(this._abortController.signal);
            }
          );
        }
        unsubscribe() {
          this._subscription?.unsubscribe();
        }
      }
      i(68212);
      const Ye = " ",
        Xe = (e, t) =>
          m
            .t(null, void 0, i(733740))
            .format({ qty: e, symbol: t, whitespaceNoBreak: Ye }),
        Ze = (e, t, s) =>
          m
            .t(null, void 0, i(925609))
            .format({ qty: e, symbol: t, stopPrice: s, whitespaceNoBreak: Ye }),
        Je = (e, t, s) =>
          m
            .t(null, void 0, i(416342))
            .format({
              qty: e,
              symbol: t,
              limitPrice: s,
              whitespaceNoBreak: Ye,
            }),
        et = (e, t, s, r) =>
          m
            .t(null, void 0, i(991313))
            .format({
              qty: e,
              symbol: t,
              stopPrice: s,
              limitPrice: r,
              whitespaceNoBreak: Ye,
            }),
        [tt, it] = m.t(null, void 0, i(419676)).split(/{line_break}/);
      class st {
        constructor(e, t) {
          (this.getValue = () => this._value.getValue()),
            (this.subscribe = () => {
              const e = (0, r.ensureDefined)(this._props);
              if (
                e.existingOrder ||
                this._tradingEntityType === x.TradingEntityType.Position
              )
                return;
              const t = {
                status: e.status,
                orderType: e.orderType,
                orderPlacingStatus: e.orderPlacingStatus,
                side: e.side,
                quantity: e.quantity,
                stopPrice: e.stopPrice,
                limitPrice: e.limitPrice,
              };
              this._orderSubscription = (0, O.combineLatest)(t).subscribe(
                this._orderSubscriptionValues
              );
            }),
            (this.unsubscribe = () => {
              this._orderSubscription && this._orderSubscription.unsubscribe();
            }),
            (this._orderSubscriptionValues = (e) => {
              const t = (0, r.ensureDefined)(this._props),
                {
                  status: s,
                  orderType: o,
                  orderPlacingStatus: n,
                  side: a,
                  quantity: l,
                  stopPrice: d,
                  limitPrice: u,
                } = e;
              if (s === A.OrderPanelStatus.Preview)
                return this._value.next({
                  primaryText: m.t(null, void 0, i(454674)),
                });
              if (s === A.OrderPanelStatus.Wait)
                return n === A.OrderPlacingStatus.Placed
                  ? this._value.next({
                      primaryText: m.t(null, void 0, i(348649)),
                    })
                  : this._value.next({ primaryText: tt, secondaryText: it });
              const c = null !== d ? t.formatter.format(d) : "",
                h = null !== u ? t.formatter.format(u) : "",
                p = null !== l ? t.quantityFormatter.format(l) : "",
                _ =
                  1 === a
                    ? m.t(null, void 0, i(169961))
                    : m.t(null, void 0, i(168222));
              switch (o) {
                case 2:
                  return this._value.next({
                    primaryText: _,
                    secondaryText: Xe(p, t.symbol),
                  });
                case 3:
                  return this._value.next({
                    primaryText: _,
                    secondaryText: Ze(p, t.symbol, c),
                  });
                case 1:
                  return this._value.next({
                    primaryText: _,
                    secondaryText: Je(p, t.symbol, h),
                  });
                case 4:
                  return this._value.next({
                    primaryText: _,
                    secondaryText: et(p, t.symbol, c, h),
                  });
              }
            }),
            (this._tradingEntityType = e),
            (this._value = new n.BehaviorSubject({ primaryText: "" })),
            (this.value$ = this._value.asObservable()),
            (this._props = t),
            this._setInitialValue();
        }
        _setInitialValue() {
          const e =
            this._props?.displayMode ===
            A.OrderEditorDisplayMode.ResizableDrawer
              ? m.t(null, void 0, i(561874))
              : m.t(null, void 0, i(224522));
          switch (this._tradingEntityType) {
            case x.TradingEntityType.Order:
              const t = !0 === this._props?.existingOrder ? e : "";
              this._value.next({ primaryText: t });
              break;
            case x.TradingEntityType.Position:
              this._value.next({ primaryText: m.t(null, void 0, i(561874)) });
          }
        }
      }
      i(169977), i(482165);
      i(150335);
      function rt(e, t, i, s, r) {
        return ot(e, t, i / s, r);
      }
      function ot(e, t, i, s) {
        return (0, we.Big)(e)
          .mul(t)
          .mul(i)
          .mul(s || 1)
          .toNumber();
      }
      var nt = i(431520);
      function at(e) {
        const { percentValue: t, currencyValue: i, formatter: s } = e;
        return (0, nt.isRtl)()
          ? `${s.format(i)} / %${s.format(t)}`
          : `${s.format(t)}% / ${s.format(i)}`;
      }
      class lt {
        constructor({
          marginAvailable$: e,
          qty$: t,
          currency: s,
          pipValue$: r,
          price$: o,
          side$: a,
          stopLossType$: l,
          showTotalInsteadOfTradeValue: d,
          showRiskControlsAndInfo: u,
          info: c,
          tpInfo: h,
          slInfo: p,
          supportMargin: _,
          hideMarginIfNoLeverage: g,
          pipValueType$: b,
          leverageInfo$: y,
          marginMeterConfig: v,
          dependencies: f,
          supportCustomOrderInfo: P,
          brokerProvidedOrderInfoGetter: k,
          duration$: S,
          stopLoss$: C,
          takeProfit$: w,
          selectedPriceControl$: T,
          quotes$: B,
          relativePrice$: O,
          isBlocked$: M,
        }) {
          (this._infoTableData$ = new n.BehaviorSubject({ rows: [] })),
            (this._availableMargin$ = new n.BehaviorSubject(0)),
            (this._usedMargin$ = new n.BehaviorSubject(0)),
            (this._leverageInfo = null),
            (this._subscriptions = []),
            (this._tpEnabled$ = null),
            (this._tpRiskInCurrency$ = null),
            (this._tpRiskInPercent$ = null),
            (this._slEnabled$ = null),
            (this._slRiskInCurrency$ = null),
            (this._slRiskInPercent$ = null),
            (this._riskFormatter = new W.PriceFormatter({ priceScale: 100 })),
            (this._isBrokerProvidedDataLoading$ = new n.BehaviorSubject(!1)),
            (this._brokerProvidedData$ = new n.BehaviorSubject(void 0)),
            (this._brokerProvidedDataError$ = new n.BehaviorSubject(void 0)),
            (this._isBrokerProvidedDataApproximate$ = new n.BehaviorSubject(
              !1
            )),
            (this._abortController = new AbortController()),
            (this._setIsBrokerProvidedDataApproximate = (e) => {
              this._isBrokerProvidedDataLoading$.getValue() !== e &&
                this._isBrokerProvidedDataApproximate$.next(e);
            }),
            (this._updateBrokerProvidedOrderInfo = async (e, t) => {
              try {
                if (t)
                  return (
                    void 0 !== this._brokerProvidedData$.value &&
                      this._setBrokerProvidedData({
                        ...this._brokerProvidedData$.value,
                        rows: this._brokerProvidedData$.value.rows.map((e) =>
                          e.hasOwnProperty("isDivider")
                            ? e
                            : { ...e, value: void 0 }
                        ),
                      }),
                    this._setBrokerProvidedDataError(void 0),
                    void this._setIsBrokerProvidedDataApproximate(!1)
                  );
                const i = await this._getBrokerProvidedOrderInfo();
                if (e?.aborted) return;
                this._setBrokerProvidedDataError(void 0),
                  this._setIsBrokerProvidedDataApproximate(!1),
                  this._setBrokerProvidedData(i);
              } catch {
                if (e?.aborted) return;
                this._setBrokerProvidedDataError(m.t(null, void 0, i(835617)));
              } finally {
                e?.aborted || this._setIsBrokerProvidedDataLoading(!1);
              }
            }),
            (this._updateBrokerProvidedOrderInfo = (0, He.respectLatest)(
              this._updateBrokerProvidedOrderInfo
            )),
            (this.infoTableData$ = this._infoTableData$.asObservable()),
            (this.availableMargin$ = this._availableMargin$.asObservable()),
            (this.usedMargin$ = this._usedMargin$.asObservable()),
            (this._marginAvailable$ = e),
            (this._qty$ = t),
            (this._pipValue$ = r),
            (this._side$ = a),
            (this._type = c.type),
            (this._pipValueType$ = b),
            (this._currency = s),
            (this._marginRate = c.marginRate),
            (this._stopLossType$ = l),
            (this._hasMarginMeter = Boolean(
              _ &&
                (void 0 !== y ||
                  (g
                    ? this._marginRate && 1 !== Math.round(1 / this._marginRate)
                    : void 0 !== this._marginRate))
            )),
            (this._marginMeterConfig = v),
            (this._price$ = o),
            (this._showTotalInsteadOfTradeValue = d),
            (this._showRiskControlsAndInfo = u),
            (this._bigPointValue = c.bigPointValue || 1),
            (this._instrumentCurrency = c.currency),
            (this._leverageInfo$ = y),
            (this._leverage = c.leverage),
            (this._lotSize = c.lotSize),
            (this._symbolPipSize = c.pipSize),
            (this._pipValueForCurrentQuantity = 0),
            (this._tradeValueInSymbolCurrency = 0),
            (this._tradeValue = 0),
            (this._priceMagnifier = c.priceMagnifier),
            (this._getBrokerProvidedOrderInfo = k),
            (this._duration$ = S),
            (this._stopLoss$ = C),
            (this._takeProfit$ = w),
            (this._selectedPriceControl$ = T),
            (this._quotes$ = B),
            (this._relativePrice$ = O),
            (this._isBlocked$ = M),
            (this._dependencies = f),
            (this._supportCustomOrderInfo = P),
            (this.brokerProvidedData$ =
              this._brokerProvidedData$.asObservable()),
            (this.isBrokerProvidedDataLoading$ =
              this._isBrokerProvidedDataLoading$.asObservable()),
            (this.brokerProvidedDataError$ =
              this._brokerProvidedDataError$.asObservable()),
            (this.isBrokerProvidedDataApproximate$ =
              this._isBrokerProvidedDataApproximate$.asObservable()),
            h &&
              p &&
              ((this._tpEnabled$ = h.enabled),
              (this._tpRiskInCurrency$ = h.riskInCurrency),
              (this._tpRiskInPercent$ = h.riskInPercent),
              (this._slEnabled$ = p.enabled),
              (this._slRiskInCurrency$ = p.riskInCurrency),
              (this._slRiskInPercent$ = p.riskInPercent));
        }
        subscribe() {
          (this._subscriptions = [
            (0, O.combineLatest)({
              price: this._price$,
              pipValue: this._pipValue$,
              pipValueType: this._pipValueType$,
              side: this._side$,
              qty: this._qty$,
              leverageInfo:
                void 0 !== this._leverageInfo$
                  ? this._leverageInfo$
                  : (0, I.of)(null),
              tpEnabled:
                null !== this._tpEnabled$ ? this._tpEnabled$ : (0, I.of)(null),
              tpRiskInCurrency:
                null !== this._tpRiskInCurrency$
                  ? this._tpRiskInCurrency$
                  : (0, I.of)(null),
              tpRiskInPercent:
                null !== this._tpRiskInPercent$
                  ? this._tpRiskInPercent$
                  : (0, I.of)(null),
              slEnabled:
                null !== this._slEnabled$ ? this._slEnabled$ : (0, I.of)(null),
              slRiskInCurrency:
                null !== this._slRiskInCurrency$
                  ? this._slRiskInCurrency$
                  : (0, I.of)(null),
              slRiskInPercent:
                null !== this._slRiskInPercent$
                  ? this._slRiskInPercent$
                  : (0, I.of)(null),
            })
              .pipe(Se(100, void 0, { trailing: !0, leading: !0 }))
              .subscribe((e) => {
                const {
                  price: t,
                  pipValue: i,
                  pipValueType: s,
                  qty: r,
                  leverageInfo: o,
                  tpEnabled: n,
                  tpRiskInCurrency: a,
                  tpRiskInPercent: l,
                  slEnabled: d,
                  slRiskInCurrency: u,
                  slRiskInPercent: c,
                } = e;
                if (
                  ((this._leverageInfo = o),
                  (this._pipValueForCurrentQuantity = (0,
                  H.convertToBaseMonetaryUnit)(
                    (0, H.calculatePipValue)(r, i, this._lotSize),
                    this._priceMagnifier
                  )),
                  null === r)
                )
                  (this._tradeValue = 0),
                    (this._tradeValueInSymbolCurrency = 0);
                else {
                  const e =
                    "crypto" === this._type
                      ? (0, we.Big)(r).mul(t).toNumber()
                      : rt(r, t, i, this._symbolPipSize, this._lotSize);
                  this._tradeValue = (0, H.convertToBaseMonetaryUnit)(
                    e,
                    this._priceMagnifier
                  );
                  const s = ot(r, t, this._bigPointValue, this._lotSize);
                  this._tradeValueInSymbolCurrency = (0,
                  H.convertToBaseMonetaryUnit)(s, this._priceMagnifier);
                }
                const h = [];
                h.push(
                  ...this._makeLotSizeInfo(),
                  ...this._makePipValueInfo(s),
                  ...this._makeTradeValueInfo(),
                  ...this._makeRewardInfo(n, a, l),
                  ...this._makeRiskInfo(d, u, c)
                );
                const p = this.getMarginRate();
                null === o && h.unshift(...this._makeLeverageInfo()),
                  this._usedMargin$.next(
                    (0, H.calculateUsedMargin)(this._tradeValue, p)
                  ),
                  this._infoTableData$.next({ rows: h });
              }),
          ]),
            this._subscribeDependentFields(),
            this._hasMarginMeter &&
              this._subscriptions.push(
                (0, r.ensureNotNull)(this._marginAvailable$).subscribe((e) =>
                  this._updateAvailableMargin(e)
                )
              );
        }
        unsubscribe() {
          this._subscriptions.map((e) => e.unsubscribe()),
            this._abortController.abort();
        }
        title() {
          return m.t(null, void 0, i(330569));
        }
        getOrderInfoTableRowsCount() {
          return this._infoTableData$.getValue().rows.length;
        }
        hasMarginMeter() {
          return this._hasMarginMeter;
        }
        marginMeterConfig() {
          return this._marginMeterConfig;
        }
        hasTradeValue() {
          const e = this.getMarginRate();
          return Boolean(
            this._showRiskControlsAndInfo &&
              Number.isFinite(this._tradeValue) &&
              (this._isSymbolTypeSupportTradeValue() || void 0 !== e)
          );
        }
        getMarginRate() {
          return null !== this._leverageInfo
            ? 0 !== this._leverageInfo.leverage
              ? (0, we.Big)(1).div(this._leverageInfo.leverage).toNumber()
              : void 0
            : void 0 !== this._marginRate && this._marginRate > 0
            ? this._marginRate
            : void 0;
        }
        getBrokerProvidedData() {
          return this._brokerProvidedData$.value;
        }
        _getTradeValue() {
          if (!this.hasTradeValue()) return;
          const e = this._hasMarginMeter ? 1 : this.getMarginRate() ?? 1;
          return (0, H.formatInfoValue)(this._tradeValue * e);
        }
        _setBrokerProvidedData(e) {
          this._brokerProvidedData$.next(e);
        }
        _setIsBrokerProvidedDataLoading(e) {
          this._isBrokerProvidedDataLoading$.getValue() !== e &&
            this._isBrokerProvidedDataLoading$.next(e);
        }
        _setBrokerProvidedDataError(e) {
          this._brokerProvidedDataError$.next(e);
        }
        _makeObservableIfDependant(e, t) {
          return void 0 !== t && this._dependencies?.includes(e)
            ? t.pipe((0, ne.distinctUntilChanged)())
            : (0, I.of)(null);
        }
        _subscribeDependentFields() {}
        _updateAvailableMargin(e) {
          this._availableMargin$.next(e);
        }
        _makeLeverageInfo() {
          const e = (0, H.displayedLeverage)(this._leverage, this._marginRate);
          return null === e
            ? []
            : [{ title: m.t(null, void 0, i(824813)), value: e }];
        }
        _makeLotSizeInfo() {
          return "number" == typeof this._lotSize &&
            Number.isFinite(this._lotSize)
            ? [
                {
                  title: m.t(null, void 0, i(574045)),
                  value: String(this._lotSize),
                },
              ]
            : [];
        }
        _makePipValueInfo(e) {
          return this._showRiskControlsAndInfo &&
            e !== x.PipValueType.None &&
            Number.isFinite(this._pipValueForCurrentQuantity)
            ? [
                {
                  title:
                    e === x.PipValueType.Pips
                      ? m.t(null, void 0, i(207074))
                      : m.t(null, void 0, i(414285)),
                  value: (0, H.formatInfoValue)(
                    this._pipValueForCurrentQuantity
                  ),
                  currency: this._currency,
                },
              ]
            : [];
        }
        _makeTradeValueInfo() {
          const e = this._getTradeValue();
          if (void 0 === e) return [];
          const t = this._showTotalInsteadOfTradeValue
              ? m.t(null, void 0, i(408007))
              : m.t(null, void 0, i(248410)),
            s = this._getTradeValueInSymbolCurrency();
          return void 0 === s
            ? [{ title: t, value: e, currency: this._currency }]
            : [
                { title: t },
                {
                  title: m.t(null, void 0, i(902456)),
                  value: e,
                  currency: this._currency,
                  listMarker: !0,
                },
                {
                  title: m.t(null, void 0, i(270743)),
                  value: s,
                  currency: this._instrumentCurrency,
                  listMarker: !0,
                },
              ];
        }
        _getTradeValueInSymbolCurrency() {
          const e = this.getMarginRate() ?? 1;
          if (
            void 0 !== this._instrumentCurrency &&
            this._instrumentCurrency !== this._currency &&
            Number.isFinite(this._tradeValueInSymbolCurrency)
          )
            return (0, H.formatInfoValue)(this._tradeValueInSymbolCurrency * e);
        }
        _isSymbolTypeSupportTradeValue() {
          return (
            void 0 !== this._type &&
            ["stock", "dr", "right", "bond", "warrant", "structured"].includes(
              this._type
            )
          );
        }
        _makeRewardInfo(e, t, s) {
          return this._showRiskControlsAndInfo && e && null !== t && null !== s
            ? [
                {
                  title: m.t(null, void 0, i(65183)),
                  value: at({
                    percentValue: s,
                    currencyValue: t,
                    formatter: this._riskFormatter,
                  }),
                  currency: this._currency,
                },
              ]
            : [];
        }
        _makeRiskInfo(e, t, s) {
          return this._showRiskControlsAndInfo && e && null !== t && null !== s
            ? [
                {
                  title: m.t(null, void 0, i(663886)),
                  value: at({
                    percentValue: s,
                    currencyValue: t,
                    formatter: this._riskFormatter,
                  }),
                  currency: this._currency,
                },
              ]
            : [];
        }
      }
      const dt = (0, p.getLogger)("PromiseWithDefault");
      function ut(e, t, i) {
        return e.catch((e) => (dt.logError(e), i && i(), t));
      }
      const ct = {
        symbol: m.t(null, void 0, i(595481)),
        ask: m.t(null, void 0, i(535928)),
        askSize: m.t(null, void 0, i(313518)),
        bid: m.t(null, void 0, i(395506)),
        bidSize: m.t(null, void 0, i(912059)),
        orderType: m.t(null, void 0, i(998413)),
        side: m.t(null, void 0, i(777630)),
        quantity: m.t(null, void 0, i(598721)),
        price: m.t(null, void 0, i(7953)),
        stopPrice: m.t(null, void 0, i(475299)),
        limitPrice: m.t(null, void 0, i(277646)),
        currency: m.t(null, void 0, i(381849)),
        stopLoss: m.t(null, void 0, i(719702)),
        takeProfit: m.t(null, void 0, i(255739)),
        buy: m.t(null, void 0, i(169961)),
        sell: m.t(null, void 0, i(168222)),
        warning: m.t(null, void 0, i(627822)),
        last: m.t(null, void 0, i(440846)),
        lastSize: m.t(null, void 0, i(274485)),
      };
      class ht {
        constructor(e, t, i, s, r, o, a, l) {
          (this.warnings = []),
            (this.errors = []),
            (this._infoTableQuotesData$ = new n.BehaviorSubject({ rows: [] })),
            (this._infoTableOrderData = { rows: [] }),
            (this._infoTableCustomData = []),
            (this.order = e),
            (this.confirmId = t.confirmId),
            (this.onCancelClick = s),
            (this.onPlaceClick = r),
            (this._quotes$ = i),
            (this._currency = l),
            (this._formatter = o),
            (this._quantityFormatter = a),
            (this._infoTableCustomData = t.sections),
            this._fillQuotesInfo(),
            this._fillOrderInfo(),
            (e.takeProfit || e.stopLoss) && this.warnings.push(ct.warning),
            t.warnings && this.warnings.push(...t.warnings),
            t.errors && this.errors.push(...t.errors),
            (this.infoTableQuotesData$ =
              this._infoTableQuotesData$.asObservable());
        }
        subscribe() {
          return this._quotes$
            .pipe(
              (0, ne.distinctUntilChanged)(
                (e, t) => e.ask === t.ask && e.bid === t.bid
              )
            )
            .subscribe((e) => this._fillQuotesInfo(e));
        }
        infoTableOrderData() {
          return this._infoTableOrderData;
        }
        infoTableCustomData() {
          return this._infoTableCustomData;
        }
        _fillQuotesInfo(e) {
          const t = [
            { title: ct.symbol, value: this.order.symbol },
            { title: ct.ask, value: e ? this._formatter.format(e.ask) : "" },
            void 0 !== e?.ask_size
              ? { title: ct.askSize, value: this._formatter.format(e.ask_size) }
              : void 0,
            { title: ct.bid, value: e ? this._formatter.format(e.bid) : "" },
            void 0 !== e?.bid_size
              ? { title: ct.bidSize, value: this._formatter.format(e.bid_size) }
              : void 0,
          ];
          void 0 !== e?.trade &&
            (t.push({
              title: e?.lastExchange
                ? `${ct.last} (${e.lastExchange})`
                : ct.last,
              value: this._formatter.format(e.trade),
            }),
            void 0 !== e?.size &&
              t.push({
                title: ct.lastSize,
                value: this._formatter.format(e.size),
              })),
            this._infoTableQuotesData$.next({
              rows: t.filter((e) => void 0 !== e),
            });
        }
        _fillOrderInfo() {
          this._infoTableOrderData.rows.push(
            {
              title: ct.orderType,
              value: this.order.type ? A.orderTypes[this.order.type] : "",
            },
            {
              title: ct.side,
              value: 1 === this.order.side ? ct.buy : ct.sell,
              type: 1 === this.order.side ? 0 : 1,
            },
            {
              title: ct.quantity,
              value: this._quantityFormatter.format(this.order.qty),
            }
          ),
            (3 !== this.order.type && 1 !== this.order.type) ||
              this._infoTableOrderData.rows.push({
                title: ct.price,
                value: this._formatter.format(
                  3 === this.order.type
                    ? this.order.stopPrice
                    : this.order.limitPrice
                ),
              }),
            4 === this.order.type &&
              this._infoTableOrderData.rows.push(
                {
                  title: ct.stopPrice,
                  value: this._formatter.format(this.order.stopPrice),
                },
                {
                  title: ct.limitPrice,
                  value: this._formatter.format(this.order.limitPrice),
                }
              ),
            this.order.stopLoss &&
              this._infoTableOrderData.rows.push({
                title: ct.stopLoss,
                value: this._formatter.format(this.order.stopLoss),
              }),
            this.order.takeProfit &&
              this._infoTableOrderData.rows.push({
                title: ct.takeProfit,
                value: this._formatter.format(this.order.takeProfit),
              }),
            this._currency.length > 0 &&
              this._infoTableOrderData.rows.push({
                title: ct.currency,
                value: this._currency,
              });
        }
      }
      var pt = i(73359),
        _t = i(350146);
      const gt = b.enabled("order_panel_undock");
      function bt(e) {
        const {
            pin: t,
            mode$: s,
            settings$: r,
            currency: o,
            showRelativePriceControl: n,
            showRiskControlsAndInfo: a,
            showQuantityInsteadOfAmount: l,
            supportBrackets: d,
            supportPlaceOrderPreview: u,
            supportModifyOrderPreview: c,
            isUndockAllowed: h,
            toggleSettings: p,
          } = e,
          _ = (e) => () => p(e),
          g = (e) => r.pipe((0, f.map)((t) => !!t[e])),
          b = [];
        if (
          (h &&
            gt &&
            b.push({
              settingType: 1,
              onLabel: m.t(null, void 0, i(702733)),
              offLabel: m.t(null, void 0, i(442956)),
              dataName: "dock-undock-order-panel-button",
              onIcon: pt,
              offIcon: _t,
              onClick: () => t(),
              value$: s.pipe(
                (0, f.map)((e) => e === A.OrderEditorDisplayMode.Panel)
              ),
            }),
          n &&
            b.push({
              settingType: 0,
              label: m.t(null, void 0, i(373447)),
              onClick: _("showRelativePriceControl"),
              value$: g("showRelativePriceControl"),
              dataName: "order-ticket-price-in-ticks",
            }),
          a)
        ) {
          {
            const e = l
              ? m.t(null, void 0, i(973085))
              : m.t(null, void 0, i(973353));
            b.push(
              {
                settingType: 0,
                label: e.replace("{units}", o || "Money"),
                onClick: _("showCurrencyRiskInQty"),
                value$: g("showCurrencyRiskInQty"),
                dataName: "order-ticket-qty-in-money-risk",
              },
              {
                settingType: 0,
                label: e.replace("{units}", "%"),
                onClick: _("showPercentRiskInQty"),
                value$: g("showPercentRiskInQty"),
                dataName: "order-ticket-qty-in-percent-risk",
              }
            );
          }
          if (d) {
            const e = m.t(null, void 0, i(271854));
            0,
              b.push(
                {
                  settingType: 0,
                  label: e.replace("{units}", o || "Money"),
                  onClick: _("showBracketsInCurrency"),
                  value$: g("showBracketsInCurrency"),
                  dataName: "order-ticket-sl-tp-inputs-in-money",
                },
                {
                  settingType: 0,
                  label: e.replace("{units}", "%"),
                  onClick: _("showBracketsInPercent"),
                  value$: g("showBracketsInPercent"),
                  dataName: "order-ticket-sl-tp-inputs-in-percent",
                }
              );
          }
        }
        return (
          (u || c) &&
            b.push({
              settingType: 0,
              label: m.t(null, void 0, i(74600)),
              onClick: _("showOrderPreview"),
              value$: g("showOrderPreview"),
              dataName: "order-ticket-confirmation",
            }),
          b
        );
      }
      var yt = i(386035);
      const mt = (0, p.getLogger)("Trading.OrderViewModel");
      function vt(e, t) {
        return e.pipe((0, f.map)(({ res: e, severity: i }) => e && i === t));
      }
      function ft(e) {
        try {
          return new URL(e.url), !0;
        } catch {
          return !1;
        }
      }
      class Pt {
        constructor({
          adapter: e,
          order: t,
          settings$: s,
          isTradable: o,
          isUndockAllowed$: a,
          orderWidgetStat: l = null,
          pipValueType$: d,
          onNeedSelectBroker: u,
          displayMode$: c,
          getDisplayMode: h,
          trackEvent: p,
          toggleTradingWidget: _,
          toggleTradingPanelPopup: g,
          toggleMode: b,
          showErrorNotification: f,
          sendHandler: w,
          previewHandler: T,
          toggleSettings: O,
          getSettings: M,
          orderViewInputState: I,
          qtySuggester: E,
          isVisible: D,
          orderDialogOptions: V,
          informerMessage$: $,
          warningMessage$: F,
          headerState: N,
          isOrderPresetsEnabled: U,
          existingPlacedOrder: j,
        }) {
          if (
            ((this.orderInfoModel = null),
            (this.orderPreviewModel = null),
            (this.isFractional = !1),
            (this.onDoneButtonClicked = (0, v.createDeferredPromise)()),
            (this.needSignIn = !1),
            (this.noBroker = !1),
            (this.symbolHasLotSize = !1),
            (this.id = (0, q.randomHashN)(6)),
            (this.existingOrder = !1),
            (this._supportStopLoss = !0),
            (this._onInputStateChanged = new Q.Delegate()),
            (this._onCloseButtonClicked = new Q.Delegate()),
            (this._onBackButtonClicked = new Q.Delegate()),
            (this._onFocusSubscriptions = []),
            (this._subscriptions = []),
            (this._orderType$ = new n.BehaviorSubject(null)),
            (this._loading$ = new n.BehaviorSubject(!1)),
            (this._stopLossPips$ = new n.BehaviorSubject(null)),
            (this._isButtonDisabled$ = new n.BehaviorSubject(!0)),
            (this._rewardRisk$ = new n.BehaviorSubject("")),
            (this._isNoQuotes$ = new n.BehaviorSubject(!1)),
            (this._orderWidgetStat = null),
            (this._existingPlacedOrder = null),
            (this._marginAvailable$ = null),
            (this._baseCurrencyCryptoBalance$ = null),
            (this._quoteCurrencyCryptoBalance$ = null),
            (this._isUndockAllowed = !1),
            (this._orderPlacingStatus = new n.BehaviorSubject(
              A.OrderPlacingStatus.Creating
            )),
            (this._destroyed = !1),
            (this._setSolutionAccount = null),
            (this._isBats = !1),
            (this._dataLoadingAbortController = new AbortController()),
            (this.doneButtonClick = async () => {
              if (!this._loading$.getValue()) {
                this.setLoading(!0);
                try {
                  await this._doneButtonClick();
                } finally {
                  this.setLoading(!1);
                }
              }
            }),
            (this.getOrderType = () => this._orderType$.value),
            (this.setOrderType = (e) => {
              this._orderType$.next(e);
            }),
            (this.preOrder = () => {
              const e = {
                symbol: this.symbol,
                type: (0, r.ensureNotNull)(
                  this._orderType$.value,
                  "Make pre-order: Order type value"
                ),
                qty: (0, r.ensureNotNull)(
                  this.quantityModel.getValue(),
                  "Make pre-order: Quantity model value"
                ),
                side: this.sideModel.getValue(),
                seenPrice: this._calculateSeenPrice(),
                currentQuotes: this._getCurrentQuotes(),
                source: this._orderTemplate.source,
              };
              4 === this._orderType$.value
                ? ((e.stopPrice = this.stopPriceModel.getValue() ?? void 0),
                  (e.limitPrice = this.limitPriceModel.getValue() ?? void 0))
                : 3 === this._orderType$.value
                ? (e.stopPrice = this.stopPriceModel.getValue() ?? void 0)
                : 1 === this._orderType$.value &&
                  (e.limitPrice = this.limitPriceModel.getValue() ?? void 0);
              const t = this.durationModel.getValue();
              null !== t && (e.duration = t),
                this.stopLossModel &&
                  (this.stopLossModel.getBracketType() ===
                    x.BracketType.StopLoss &&
                    ((e.stopLoss = this.stopLossModel.getEnabled()
                      ? this.stopLossModel.price.getValue() ?? void 0
                      : void 0),
                    (e.trailingStopPips = void 0),
                    (e.guaranteedStop = void 0),
                    (e.stopType = L.StopType.StopLoss)),
                  this.stopLossModel.getBracketType() ===
                    x.BracketType.TrailingStop &&
                    ((e.trailingStopPips = this.stopLossModel.getEnabled()
                      ? this.stopLossModel.pips.getValue() ?? void 0
                      : void 0),
                    (e.stopLoss =
                      void 0 !== e.trailingStopPips ? void 0 : e.stopLoss),
                    (e.guaranteedStop = void 0),
                    (e.stopType = L.StopType.TrailingStop)),
                  this.stopLossModel.getBracketType() ===
                    x.BracketType.GuaranteedStop &&
                    ((e.guaranteedStop = this.stopLossModel.getEnabled()
                      ? this.stopLossModel.price.getValue() ?? void 0
                      : void 0),
                    (e.stopLoss =
                      void 0 !== e.guaranteedStop ? void 0 : e.stopLoss),
                    (e.trailingStopPips = void 0),
                    (e.stopType = L.StopType.GuaranteedStop))),
                this.takeProfitModel &&
                  (this.takeProfitModel.getEnabled()
                    ? (e.takeProfit =
                        this.takeProfitModel.price.getValue() ?? void 0)
                    : (e.takeProfit = void 0)),
                this.customFieldsModel.getCustomFieldsModels() &&
                  (e.customFields =
                    this.customFieldsModel.getCustomFieldsInputValues());
              const i = this.orderInfoModel?.getBrokerProvidedData();
              return void 0 !== i && (e.orderInfoId = i.id), e;
            }),
            (this.activateOrderTicket = () => {
              this.setStatus(
                this.existingOrder
                  ? A.OrderPanelStatus.Editing
                  : A.OrderPanelStatus.Active
              ),
                this._orderTypeSubscription?.unsubscribe(),
                this.sideModel &&
                  this.sideModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this.limitPriceModel &&
                  this.limitPriceModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this.stopPriceModel &&
                  this.stopPriceModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this.quantityModel &&
                  this.quantityModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this.leverageModel &&
                  this.leverageModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this.takeProfitModel &&
                  this.takeProfitModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this.stopLossModel &&
                  this.stopLossModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this.durationModel &&
                  this.durationModel.onControlFocused.unsubscribe(
                    this,
                    this.activateOrderTicket
                  ),
                this._onFocusSubscriptions.forEach((e) => e.unsubscribe()),
                this._orderPlacingStatus.next(A.OrderPlacingStatus.Creating);
            }),
            (this.setLoading = (e) => {
              this._loading$.next(e);
            }),
            (this.setStatus = (e) => {
              this._status$.value !== e && this._status$.next(e);
            }),
            (this._getBrokerProvidedOrderInfo = async () => {
              const e = {
                ...this.preOrder(),
                id: this._existingPlacedOrder?.id,
              };
              return this._adapter.orderInfo?.(e);
            }),
            (this._doneButtonClick = async () => {
              const e = this.preOrder(),
                t = this.existingOrder
                  ? this.supportModifyOrderPreview
                  : this.supportPlaceOrderPreview,
                s = this._getDisplayMode();
              if (
                t &&
                this._getSettings().showOrderPreview &&
                null === this.orderPreviewModel
              ) {
                const t =
                  this.supportModifyOrderPreview &&
                  null !== this._existingPlacedOrder
                    ? { ...e, id: this._existingPlacedOrder.id }
                    : e;
                try {
                  const e = await this._previewHandler(t),
                    i =
                      this.supportCurrencyInOrderPreview &&
                      void 0 !== this._symbolInfo.currency
                        ? this._symbolInfo.currency
                        : "";
                  (this.orderPreviewModel = new ht(
                    t,
                    e,
                    this._quotes$,
                    this._back,
                    this.doneButtonClick,
                    this.formatter,
                    this.quantityModel.formatter,
                    i
                  )),
                    this._subscriptions.push(
                      this.orderPreviewModel.subscribe()
                    ),
                    this.setStatus(A.OrderPanelStatus.Preview);
                } catch (e) {
                  this._isFullscreenPopup() && this.headerModel.close(),
                    s === A.OrderEditorDisplayMode.ResizableDrawer &&
                      this.headerModel.close(),
                    this._showErrorNotification(
                      m.t(null, void 0, i(204395)),
                      (0, y.getErrorMessage)(e)
                    );
                }
                return;
              }
              (await this._doneHandler(
                e,
                null !== this.orderPreviewModel
                  ? this.orderPreviewModel.confirmId
                  : void 0
              ))
                ? (this.onDoneButtonClicked.resolve(!0),
                  s === A.OrderEditorDisplayMode.Popup ||
                  s === A.OrderEditorDisplayMode.ResizableDrawer
                    ? this.headerModel.close()
                    : this._cancel(),
                  this.existingOrder ||
                    this._orderPlacingStatus.next(A.OrderPlacingStatus.Placed))
                : (this._isFullscreenPopup() && this.headerModel.close(),
                  s === A.OrderEditorDisplayMode.Panel &&
                    null !== this.orderPreviewModel &&
                    1 === this._adapter.connectionStatus() &&
                    this._back(),
                  s === A.OrderEditorDisplayMode.ResizableDrawer &&
                    this.headerModel.close()),
                (this.orderPreviewModel = null);
            }),
            (this._noQuotesCallback = () => {
              this._trackEvent("Order Ticket", "No Quotes");
            }),
            (this._handleStatusChange = (e) => {
              const t =
                e !== A.OrderPanelStatus.Preview && this._isTradable
                  ? this._makeHeaderSettings()
                  : void 0;
              this._headerState.setSettings(t);
            }),
            (this._onUndockAllowedChanged = (e) => {
              this._isUndockAllowed = e;
              const t =
                this._status$.value !== A.OrderPanelStatus.Preview &&
                this._isTradable
                  ? this._makeHeaderSettings()
                  : void 0;
              this._headerState.setSettings(t);
            }),
            (this._mergeInputStateDiff = (e) => {
              void 0 !== e.duration &&
                (this._currentInputState.duration = null),
                Object.assign(this._currentInputState, e);
            }),
            (this._back = () => {
              this._cleanUp(), this._onBackButtonClicked.fire();
            }),
            (this._onSuggestedQtyChange = (e) => {
              (this._suggestedQty = e),
                !this._isOrderSizeCalculatorAvailable() &&
                  this.quantityModel &&
                  this.quantityModel.getValue() !== e &&
                  (this.quantityModel.setFocusedControl(
                    this.supportCryptoExchangeOrderTicket() ? 3 : 0
                  ),
                  this.quantityModel.quantity.setValue(e));
            }),
            (this._onQtyChange = (e) => {
              this._isOrderSizeCalculatorAvailable() ||
                null === e ||
                this._qtySuggester.setQty(this.symbol, e);
            }),
            (this._isOrderPresetsEnabled = U),
            (this._isTradable = o.tradable),
            (this._headerState = N),
            (this.headerStateValue = N),
            this._headerState.setSettings(void 0),
            (this._displayMode$ = c),
            (this._getDisplayMode = h),
            (this._toggleTradingWidget = _),
            (this._toggleTradingPanelPopup = g),
            (this._toggleMode = b),
            (this._toggleSettings = O),
            (this._getSettings = M),
            (this._onNeedSelectBroker = u),
            (this._showErrorNotification = f),
            (this._trackEvent = p),
            (this._orderWidgetStat = l),
            (this._pipValueType$ = d),
            (this._qtySuggester = E),
            (this._informerMessage$ = $),
            (this._settings$ = s),
            (this._orderTemplate = Object.assign({}, t)),
            j && ((this.existingOrder = !0), (this._existingPlacedOrder = j)),
            (this.useContextValidation = false),
            (this.warningMessage$ = F),
            (this.symbol = t.symbol),
            (this.displaySymbolName = this._getCurrentSymbolName()),
            (this._isUndockAllowed$ = a),
            (this._isVisible = D),
            (this._status$ = new n.BehaviorSubject(
              this.existingOrder
                ? A.OrderPanelStatus.Editing
                : A.OrderPanelStatus.Active
            )),
            (this._stopLossAvailable$ = new n.BehaviorSubject(
              Boolean(t.trailingStopPips ?? t.guaranteedStop ?? t.stopLoss)
            )),
            (this.orderType$ = this._orderType$.asObservable()),
            (this.loading$ = this._loading$.asObservable()),
            (this.status$ = this._status$.asObservable()),
            (this.rewardRisk$ = this._rewardRisk$.asObservable()),
            (this.isNoQuotes$ = this._isNoQuotes$.asObservable()),
            (this.isButtonDisabled$ = this._isButtonDisabled$.asObservable()),
            null === e)
          )
            return void (this.onReady = Promise.resolve());
          if (
            ((this._adapter = e),
            (this.brokerName = e.metainfo().title),
            !o.tradable)
          )
            return void (this.onReady = this._prepareTradableSolution(o));
          (this._sendHandler = w),
            (this._previewHandler = T),
            (this.existingOrder = t.hasOwnProperty("id")),
            this.setStatus(
              this.existingOrder
                ? A.OrderPanelStatus.Editing
                : A.OrderPanelStatus.Active
            );
          const G = e.metainfo().configFlags;
          (this.supportModifyOrderPrice = G.supportModifyOrderPrice),
            (this.supportModifyQuantity =
              !this.existingOrder ||
              Boolean(this.existingOrder && G.supportEditAmount)),
            (this.showQuantityInsteadOfAmount = G.showQuantityInsteadOfAmount),
            (this.supportModifyDuration = G.supportModifyDuration),
            (this.supportLeverage = G.supportLeverage),
            (this.supportLeverageButton =
              G.supportLeverage && G.supportLeverageButton),
            (this.supportPlaceOrderPreview = G.supportPlaceOrderPreview),
            (this.supportModifyOrderPreview = G.supportModifyOrderPreview),
            (this.supportBalances = G.supportBalances),
            (this.supportCryptoBrackets = G.supportCryptoBrackets),
            (this.supportStopOrdersInBothDirections =
              G.supportStopOrdersInBothDirections),
            (this.supportStopLimitOrdersInBothDirections =
              G.supportStopLimitOrdersInBothDirections),
            (this.supportStrictCheckingLimitOrderPrice =
              G.supportStrictCheckingLimitOrderPrice),
            (this.supportCurrencyInOrderPreview =
              G.supportCurrencyInOrderPreview),
            (this.supportModifyOrderType = G.supportModifyOrderType),
            (this.supportHyperlinksInOrderDialog =
              G.supportHyperlinksInOrderDialog),
            this._orderType$.next(
              t.type ?? I?.orderType ?? (0, R.getDefaultOrderType)(G) ?? null
            ),
            (this.onReady = Promise.all([
              e.symbolInfo(t.symbol),
              e.getSymbolSpecificTradingOptions(t.symbol),
              (0, yt.isFractional)(t.symbol, {
                signal: this._dataLoadingAbortController.signal,
              }),
              ut(e.accountMetainfo(), {
                id: e.currentAccount(),
                name: e.metainfo().title,
              }),
              ut(e.quotesSnapshot(t.symbol), {}, this._noQuotesCallback),
              ut(e.formatter(t.symbol, !1), new W.PriceFormatter()),
              ut(e.spreadFormatter(t.symbol), new W.PriceFormatter()),
            ])
              .then(async ([i, s, r, n, a, l, d]) => {
                if (
                  ((this.isFractional = r),
                  (this._isBats = (0, R.isBatsQuotes)(a)),
                  (this._supportCryptoExchangeOrderTicket =
                    G.supportCryptoExchangeOrderTicket ||
                    (G.supportSymbolSpecificCryptoOrderTicket &&
                      "crypto" === i.type)),
                  (this._symbolInfo = i),
                  this._destroyed)
                )
                  return;
                (this._supportMarketOrders =
                  G.supportMarketOrders &&
                  (0, R.isOrderTypeAllowed)(2, s?.allowedOrderTypes)),
                  (this._supportLimitOrders =
                    G.supportLimitOrders &&
                    (0, R.isOrderTypeAllowed)(1, s?.allowedOrderTypes)),
                  (this._supportStopOrders =
                    G.supportStopOrders &&
                    (0, R.isOrderTypeAllowed)(3, s?.allowedOrderTypes)),
                  (this._supportStopLimitOrders =
                    G.supportStopLimitOrders &&
                    (0, R.isOrderTypeAllowed)(4, s?.allowedOrderTypes)),
                  (this._supportBrackets =
                    s?.supportOrderBrackets &&
                    !(t.hasOwnProperty("parentId") && t.parentId)),
                  (this._supportBracketsInPips = s?.supportBracketsInPips),
                  (this._supportModifyBrackets =
                    this._supportBrackets &&
                    G.supportModifyBrackets &&
                    G.supportModifyOrderBrackets),
                  (this._supportAddBracketsToExistingOrder =
                    this._supportModifyBrackets &&
                    G.supportAddBracketsToExistingOrder),
                  (this._supportStopLoss = Boolean(
                    this._supportBrackets && (G.supportStopLoss ?? !0)
                  )),
                  (this._supportTrailingStop =
                    this._supportBrackets && G.supportTrailingStop),
                  (this._supportGuaranteedStop =
                    this._supportBrackets && G.supportGuaranteedStop),
                  (this._supportMarketBrackets =
                    this._supportBrackets && G.supportMarketBrackets),
                  (this._supportModifyTrailingStop =
                    this._supportTrailingStop &&
                    this._supportModifyBrackets &&
                    G.supportModifyTrailingStop),
                  (this._links = V?.links?.filter(ft)),
                  (this.displaySymbolName = this._getCurrentSymbolName()),
                  (this.symbolType = i.type),
                  (this.symbolSpecificWarningMessage = s?.warningMessage),
                  (this.currency = (0, R.getCurrency)(n)),
                  (this._currencyName = (0, R.getCurrency)(n, !0)),
                  (this._accountCurrencyPrecision = n.currencyPrecision),
                  (this.formatter = l),
                  (this.symbolHasLotSize =
                    i.hasOwnProperty("lotSize") && 1 !== i.lotSize),
                  (this.showRiskControlsAndInfo =
                    G.supportRiskControlsAndInfo && 0 !== i.pipValue),
                  (this._suggestedQty = await this._qtySuggester.getQty(
                    this.symbol
                  )),
                  (this._initialInputState = this._getInitialInputState(
                    t,
                    i,
                    I,
                    s
                  )),
                  (this._currentInputState = Object.assign(
                    {},
                    this._initialInputState
                  ));
                const u = i.variableMinTick
                  ? (0, z.makeVariableMinTickData)(i.minTick, i.variableMinTick)
                  : void 0;
                (this._quotes$ = (0, P.fromEventPattern)(
                  (i) => e.subscribeRealtime(t.symbol, i),
                  (i) => e.unsubscribeRealtime(t.symbol, i),
                  (e, t) => (0, H.alignQuotesToMinTick)(t, i.minTick, u)
                ).pipe(
                  (0, k.startWith)(a),
                  (0, S.share)({ connector: () => new C.ReplaySubject(1) })
                )),
                  (this._equity$ = (0, P.fromEventPattern)(
                    (t) => e.subscribeEquity(t),
                    (t) => e.unsubscribeEquity(t),
                    (e, t) => t
                  ).pipe(
                    (0, k.startWith)(NaN),
                    (0, S.share)({ connector: () => new C.ReplaySubject(1) })
                  )),
                  (this._marginAvailable$ = G.supportMargin
                    ? B(
                        (0, P.fromEventPattern)(
                          (t) => e.subscribeMarginAvailable(t),
                          (t) => e.unsubscribeMarginAvailable(t),
                          (e, t) => t
                        )
                      )
                    : null),
                  (this._baseCurrencyCryptoBalance$ = G.supportBalances
                    ? B(
                        (0, P.fromEventPattern)(
                          (t) =>
                            e.subscribeCryptoBalance(i.baseCurrency || "", t),
                          (t) =>
                            e.unsubscribeCryptoBalance(i.baseCurrency || "", t),
                          (e, t) => t
                        ).pipe(
                          (0, k.startWith)({
                            symbol: i.baseCurrency || "",
                            total: 0,
                            available: 0,
                          })
                        )
                      )
                    : null),
                  (this._quoteCurrencyCryptoBalance$ = G.supportBalances
                    ? B(
                        (0, P.fromEventPattern)(
                          (t) =>
                            e.subscribeCryptoBalance(i.quoteCurrency || "", t),
                          (t) =>
                            e.unsubscribeCryptoBalance(
                              i.quoteCurrency || "",
                              t
                            ),
                          (e, t) => t
                        ).pipe(
                          (0, k.startWith)({
                            symbol: i.quoteCurrency || "",
                            total: 0,
                            available: 0,
                          })
                        )
                      )
                    : null),
                  (this._pipValues$ = B(
                    (0, P.fromEventPattern)(
                      (i) => e.subscribePipValue(t.symbol, i),
                      (i) => e.unsubscribePipValue(t.symbol, i),
                      (e, t) => t
                    ).pipe(
                      (0, k.startWith)({
                        buyPipValue: i.pipValue,
                        sellPipValue: i.pipValue,
                      })
                    )
                  )),
                  void 0 === this._orderTemplate.limitPrice &&
                    !1 === this.existingOrder &&
                    (this._orderTemplate.limitPrice =
                      1 === this._initialInputState.side
                        ? (0, R.getAsk)(a)
                        : (0, R.getBid)(a)),
                  void 0 === this._orderTemplate.stopPrice &&
                    !1 === this.existingOrder &&
                    (this._orderTemplate.stopPrice =
                      1 === this._initialInputState.side
                        ? (0, R.getBid)(a)
                        : (0, R.getAsk)(a)),
                  await this._createModels({
                    order: t,
                    info: i,
                    spreadFormatter: d,
                    isTradable: o.tradable,
                    symbolSpecificTradingOptions: s,
                    orderDialogOptions: V,
                  }),
                  this._subscribe(),
                  this._onInputStateChanged.fire(this._getCurrentInputState()),
                  this._headerState.setSettings(this._makeHeaderSettings());
              })
              .catch((e) => {
                throw (mt.logError("Failed to create order model: " + e), e);
              }));
        }
        destroy() {
          (this._destroyed = !0),
            this._dataLoadingAbortController.abort(),
            this.onInputStateChanged().unsubscribe(
              this,
              this._mergeInputStateDiff
            ),
            this._subscriptions.forEach((e) => e && e.unsubscribe()),
            this.orderInfoModel?.unsubscribe(),
            this._orderTypeSubscription &&
              this._orderTypeSubscription.unsubscribe(),
            this._onFocusSubscriptions.forEach((e) => e.unsubscribe()),
            this.headerModel &&
              (this.headerModel.unsubscribe(),
              this.headerModel
                .pinButtonClicked()
                .unsubscribe(this, this._toggleMode),
              this.headerModel
                .closeButtonClicked()
                .unsubscribe(this, this._closeWidget),
              this.headerModel
                .backButtonClicked()
                .unsubscribe(this, this._back)),
            this.sideModel &&
              (this.sideModel.unsubscribe(),
              this.sideModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            this.limitPriceModel &&
              (this.limitPriceModel.unsubscribe(),
              this.limitPriceModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            this.stopPriceModel &&
              (this.stopPriceModel.unsubscribe(),
              this.stopPriceModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            this.priceGroupModel && this.priceGroupModel.unsubscribe(),
            this.quantityConverterController &&
              this.quantityConverterController.destroy(),
            this.quantityModel &&
              (this.quantityModel.unsubscribe(),
              this.quantityModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            this.takeProfitModel &&
              (this.takeProfitModel.unsubscribe(),
              this.takeProfitModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            this.stopLossModel &&
              (this.stopLossModel.unsubscribe(),
              this.stopLossModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            this.durationModel &&
              (this.durationModel.unsubscribe(),
              this.durationModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            void 0 !== this.leverageModel &&
              (this.leverageModel.unsubscribe(),
              this.leverageModel.onControlFocused.unsubscribe(
                this,
                this.activateOrderTicket
              )),
            void 0 !== this.customFieldsModel &&
              this.customFieldsModel.unsubscribe(),
            void 0 !== this.buttonModel && this.buttonModel.unsubscribe(),
            this._adapter &&
              this._adapter.orderUpdate.unsubscribe(this, this._orderUpdate);
        }
        links() {
          if (
            this.supportHyperlinksInOrderDialog &&
            this._links &&
            this._links.length
          )
            return this._links;
        }
        supportCryptoExchangeOrderTicket() {
          return Boolean(this._supportCryptoExchangeOrderTicket);
        }
        supportLimitOrders() {
          return Boolean(this._supportLimitOrders);
        }
        supportMarketOrders() {
          return Boolean(this._supportMarketOrders);
        }
        supportStopOrders() {
          return Boolean(this._supportStopOrders);
        }
        supportStopLimitOrders() {
          return Boolean(this._supportStopLimitOrders);
        }
        supportBrackets() {
          return Boolean(this._supportBrackets);
        }
        supportAddBracketsToExistingOrder() {
          return Boolean(this._supportAddBracketsToExistingOrder);
        }
        supportModifyBrackets() {
          return Boolean(this._supportModifyBrackets);
        }
        supportStopLoss() {
          return Boolean(this._supportStopLoss);
        }
        supportTrailingStop() {
          return Boolean(this._supportTrailingStop);
        }
        supportGuaranteedStop() {
          return Boolean(this._supportGuaranteedStop);
        }
        supportMarketBrackets() {
          return Boolean(this._supportMarketBrackets);
        }
        supportModifyTrailingStop() {
          return Boolean(this._supportModifyTrailingStop);
        }
        onInputStateChanged() {
          return this._onInputStateChanged;
        }
        onCloseButtonClicked() {
          return this._onCloseButtonClicked;
        }
        onBackButtonClicked() {
          return this._onBackButtonClicked;
        }
        side() {
          return this.sideModel?.getValue();
        }
        setSolutionAccount() {
          null !== this._setSolutionAccount && this._setSolutionAccount();
        }
        selectBroker() {
          this._toggleTradingWidget().then(() =>
            this._onNeedSelectBroker.fire()
          );
        }
        orderWidgetStat() {
          return this._orderWidgetStat;
        }
        resetOrderPanel() {
          this._cancel();
        }
        deactivateOrderTicket() {
          this.getStatus() !== A.OrderPanelStatus.Wait &&
            (this._resetBracketsFocus(),
            this.setStatus(A.OrderPanelStatus.Wait),
            (this._orderTypeSubscription = this.orderType$
              .pipe((0, h.skip)(1))
              .subscribe(this.activateOrderTicket)),
            this.sideModel &&
              this.sideModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              ),
            this.limitPriceModel &&
              this.limitPriceModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              ),
            this.stopPriceModel &&
              this.stopPriceModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              ),
            this.quantityModel &&
              this.quantityModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              ),
            void 0 !== this.leverageModel &&
              this.leverageModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              ),
            this.takeProfitModel &&
              (this.takeProfitModel.setEnabled(!1),
              this.takeProfitModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              )),
            this.stopLossModel &&
              (this.stopLossModel.setEnabled(!1),
              this.stopLossModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              )),
            this.durationModel &&
              this.durationModel.onControlFocused.subscribe(
                this,
                this.activateOrderTicket
              ),
            this._onFocusSubscriptions.push(
              this.customFieldsModel.onControlFocused$.subscribe(
                this.activateOrderTicket
              )
            ),
            this._setDisabledIfNeeded({
              status: this.getStatus(),
              loading: this._loading$.getValue(),
              quotes: null,
              side: this.sideModel ? this.sideModel.getValue() : null,
              limitPrice: this.limitPriceModel
                ? this.limitPriceModel.getValue()
                : null,
              stopPrice: this.stopPriceModel
                ? this.stopPriceModel.getValue()
                : null,
              quantity: this.quantityModel
                ? this.quantityModel.getValue()
                : null,
              hasStopLossError: !1,
              hasTakeProfitError: !1,
              isTakeProfitIncorrect:
                !!this.takeProfitModel &&
                this.takeProfitModel.isValueIncorrect(),
              isStopLossIncorrect:
                !!this.stopLossModel && this.stopLossModel.isValueIncorrect(),
              customFields: this.customFieldsModel.getCustomFieldsInputValues(),
              hasDurationError: !1,
              hasLimitPriceError: !1,
              hasStopPriceError: !1,
              hasQuantityError: !1,
            }));
        }
        orderTemplate() {
          const e = this.preOrder(),
            t = this.limitPriceModel.getPriceControlData()?.offset,
            i = this.stopPriceModel.getPriceControlData()?.offset;
          4 === this._orderType$.value
            ? ((e.limitPriceOffset = t), (e.stopPriceOffset = i))
            : 3 === this._orderType$.value
            ? (e.stopPriceOffset = i)
            : 1 === this._orderType$.value && (e.limitPriceOffset = t);
          const s =
            !this.stopLossModel?.roundToPriceStepRequired &&
            !this.takeProfitModel?.roundToPriceStepRequired;
          return (
            this.stopLossModel?.getEnabled() &&
              (this.showRiskControlsAndInfo &&
              3 === this.stopLossModel.getFocusedControl()
                ? ((e.stopLossPips = void 0),
                  (e.stopLossRiskInPercent =
                    this.stopLossModel.riskInPercent.getValue() ?? void 0))
                : s &&
                  ((e.stopLossPips =
                    this.stopLossModel.pips.getValue() ?? void 0),
                  (e.stopLossRiskInPercent = void 0))),
            this.takeProfitModel?.getEnabled() &&
              (this.showRiskControlsAndInfo &&
              3 === this.takeProfitModel.getFocusedControl()
                ? ((e.takeProfitPips = void 0),
                  (e.takeProfitRiskInPercent =
                    this.takeProfitModel.riskInPercent.getValue() ?? void 0))
                : s &&
                  ((e.takeProfitPips =
                    this.takeProfitModel.pips.getValue() ?? void 0),
                  (e.takeProfitRiskInPercent = void 0))),
            e
          );
        }
        getStatus() {
          return this._status$.getValue();
        }
        isButtonDisabled() {
          return this._isButtonDisabled$.getValue();
        }
        _isFullscreenPopup() {
          return (
            window.matchMedia(N.DialogBreakpoints.TabletSmall).matches &&
            this._getDisplayMode() === A.OrderEditorDisplayMode.Popup
          );
        }
        _createSimpleDialog(e) {
          this._orderType$.next(null),
            this.setStatus(A.OrderPanelStatus.Wait),
            (this.headerModel = new ce({
              displaySymbolName: this.displaySymbolName,
              symbol: this.symbol,
              brokerName: e ? e.metainfo().title : "",
              mode$: this._displayMode$,
              status$: this._status$,
              parentType: 1,
              isExistingOrder: !1,
              isTradable: !1,
              quotes$: this._quotes$,
              data: void 0,
              formatter: void 0,
              isBats: this._isBats,
              informerMessage$: this._informerMessage$,
              isOrderPresetsEnabled: this._isOrderPresetsEnabled,
              headerState: this._headerState,
              orderTemplateGetter: () => this.orderTemplate(),
              brokerId: this._adapter?.metainfo().id,
              isSendButtonDisabled$: this.isButtonDisabled$,
            })),
            this.headerModel
              .closeButtonClicked()
              .subscribe(this, this._closeWidget);
        }
        async _createModels(e) {
          const {
              order: t,
              info: i,
              spreadFormatter: s,
              isTradable: o,
              symbolSpecificTradingOptions: n,
              orderDialogOptions: a,
            } = e,
            l = this.supportCryptoExchangeOrderTicket();
          (this.sideModel = new Ce({
            initialSide: this._initialInputState.side,
            quotes$: this._quotes$,
            priceFormatter: this.formatter,
            spreadFormatter: s,
            baseCurrency: (l && "crypto" === i.type && i.baseCurrency) || null,
          })),
            (this._pipValue$ = (0, O.combineLatest)([
              this._pipValues$,
              this.sideModel.value$,
            ]).pipe(
              (0, f.map)(([e, t]) => (1 === t ? e.buyPipValue : e.sellPipValue))
            ));
          const { orderRules: d = [], title: u } = this._adapter.metainfo();
          let c = [],
            h = [];
          (this.supportStopOrdersInBothDirections &&
            this.supportStopLimitOrdersInBothDirections) ||
            ((c =
              (await (0, F.extractLimitValidationRules)(
                this._adapter,
                this.symbol
              )) ?? []),
            (h =
              (await (0, F.extractStopValidationRules)(
                this._adapter,
                this.symbol
              )) ?? [])),
            (this.stopPriceModel = new ue({
              priceType: 2,
              quotes$: this._quotes$,
              side$: this.sideModel.value$,
              info: i,
              status$: this._status$,
              formatter: this.formatter,
              orderType$: this.orderType$,
              settings$: this._settings$,
              brokerTitle: u,
              orderWidgetStat: this._orderWidgetStat,
              initialPrice: this._orderTemplate.stopPrice,
              initialOffset: this._orderTemplate.stopPriceOffset,
              orderRules: [...d, ...h],
              supportStopOrdersInBothDirections:
                this.supportStopOrdersInBothDirections,
              supportStopLimitOrdersInBothDirections:
                this.supportStopLimitOrdersInBothDirections,
              getSettings: this._getSettings,
              useContextValidation: this.useContextValidation,
              originalOrderPrice:
                3 === this._orderType$.getValue() ||
                4 === this._orderType$.getValue()
                  ? this._existingPlacedOrder?.stopPrice
                  : void 0,
            })),
            (this.limitPriceModel = new ue({
              priceType: 1,
              quotes$: this._quotes$,
              side$: this.sideModel.value$,
              info: i,
              status$: this._status$,
              formatter: this.formatter,
              orderType$: this.orderType$,
              settings$: this._settings$,
              brokerTitle: u,
              orderWidgetStat: this._orderWidgetStat,
              getSettings: this._getSettings,
              initialPrice: this._orderTemplate.limitPrice,
              initialOffset: this._orderTemplate.limitPriceOffset,
              orderRules: [...d, ...c],
              stopPriceControlData$: this.stopPriceModel.priceControlData$,
              supportStrictCheckingLimitOrderPrice:
                this.supportStrictCheckingLimitOrderPrice,
              useContextValidation: this.useContextValidation,
              originalOrderPrice:
                1 === this._orderType$.getValue() ||
                4 === this._orderType$.getValue()
                  ? this._existingPlacedOrder?.limitPrice
                  : void 0,
            })),
            (this.priceGroupModel = new Oe({
              stopPriceModel: this.stopPriceModel,
              limitPriceModel: this.limitPriceModel,
              orderType$: this.orderType$,
              side$: this.sideModel.value$,
              quotes$: this._quotes$,
            })),
            (this.quantityModel = l
              ? new Ue({
                  info: i,
                  price$: this.priceGroupModel.price$,
                  baseCurrencyCryptoBalance$: this._baseCurrencyCryptoBalance$,
                  quoteCurrencyCryptoBalance$:
                    this._quoteCurrencyCryptoBalance$,
                  initialQty: this._initialInputState.quantity,
                  side$: this.sideModel.value$,
                  sideGetter: this.sideModel.getValue,
                  orderWidgetStat: this._orderWidgetStat,
                  isExistingOrder: this.existingOrder,
                  orderQty: t.qty,
                  orderPrice: 1 === t.type ? t.limitPrice : t.stopPrice,
                  useContextValidation: this.useContextValidation,
                })
              : new Ne({
                  stopLossAvailable$: this._stopLossAvailable$,
                  stopLossPips$: this._stopLossPips$,
                  equity$: this._equity$,
                  pipValue$: this._pipValue$,
                  info: i,
                  currency: this.currency ?? "",
                  initialQty: this._initialInputState.quantity,
                  initialOrderSizeCalculatorValue:
                    this._initialInputState.orderSizeCalculatorValue,
                  initialOrderSizeCalculatorQuantityType:
                    this._initialInputState.orderSizeCalculatorQuantityType,
                  initialLastRiskQuantityType:
                    this._initialInputState.lastRiskQuantityType,
                  initialLastUsedQuantityType:
                    this._initialInputState.lastUsedQuantityType,
                  stopLossAvailableGetter: () =>
                    this._stopLossAvailable$.getValue(),
                  settings$: this._settings$,
                  orderWidgetStat: this._orderWidgetStat,
                  showRiskControlsAndInfo: this.showRiskControlsAndInfo,
                  useContextValidation: this.useContextValidation,
                }));
          const p = this.supportBrackets();
          (p || this.supportCryptoBrackets) &&
            (await this._createBracketsModels(
              t,
              i,
              (0, r.ensureDefined)(this.currency)
            )),
            (this.headerModel = new ce({
              displaySymbolName: this.displaySymbolName,
              symbol: this.symbol,
              brokerName: this._adapter.metainfo().title,
              mode$: this._displayMode$,
              status$: this._status$,
              parentType: 1,
              isExistingOrder: this.existingOrder,
              isTradable: o,
              quotes$: this._quotes$,
              data: t,
              formatter: this.formatter,
              isBats: this._isBats,
              informerMessage$: this._informerMessage$,
              headerState: this._headerState,
              isOrderPresetsEnabled: this._isOrderPresetsEnabled,
              orderTemplateGetter: () => this.orderTemplate(),
              brokerId: this._adapter?.metainfo().id,
              isSendButtonDisabled$: this.isButtonDisabled$,
            })),
            (this.customFieldsModel = new j.CustomFieldsViewModel({
              existingOrder: this.existingOrder,
              initialInputState: this._initialInputState.customFields ?? void 0,
              customFields: a?.customFields,
              orderType$: this.orderType$,
            })),
            this.supportLeverage &&
              (this.leverageModel = new Ke({
                adapterLeverageInfo: this._adapter.leverageInfo,
                adapterSetLeverage: this._adapter.setLeverage,
                adapterPreviewLeverage: this._adapter.previewLeverage,
                brokerName: this._adapter.metainfo().title,
                symbol: this.symbol,
                displaySymbol: this.displaySymbolName,
                orderType$: this.orderType$,
                side$: this.sideModel.value$,
                initialSide: this.sideModel.getValue(),
                customFieldsInputValues$:
                  this.customFieldsModel.customFieldsInputValues$,
                blocked$: this.customFieldsModel.isCustomFieldsNotSelected$,
                isBlockedGetter: () =>
                  this.customFieldsModel.getIsCustomFieldsNotSelected(),
                onBlockedClick: () =>
                  this.customFieldsModel.setIsEmptyRequiredCustomFieldsHighlighted(
                    !0
                  ),
                getOrderType: this.getOrderType,
              })),
            (this.durationModel = new ze({
              initialDuration: this._initialInputState.duration,
              orderType$: this.orderType$,
              orderWidgetStat: this._orderWidgetStat,
              orderDurations: this._adapter.metainfo().durations,
              symbolDurations: n?.allowedDurations,
              getOrderType: this.getOrderType,
            })),
            l ||
              (this.orderInfoModel = new lt({
                marginAvailable$: this._marginAvailable$,
                qty$: this.quantityModel.value$,
                currency: (0, r.ensureDefined)(this._currencyName),
                pipValue$: this._pipValue$,
                price$: this.priceGroupModel.price$,
                side$: this.sideModel.value$,
                stopLossType$: this.stopLossModel?.bracketType$,
                showTotalInsteadOfTradeValue: (0, H.shouldShowTotal)(a),
                showRiskControlsAndInfo: this.showRiskControlsAndInfo,
                info: i,
                tpInfo:
                  p && this.takeProfitModel
                    ? {
                        enabled: this.takeProfitModel.enabled$,
                        riskInCurrency:
                          this.takeProfitModel.riskInCurrency.value$,
                        riskInPercent:
                          this.takeProfitModel.riskInPercent.value$,
                      }
                    : null,
                slInfo:
                  p && this.stopLossModel
                    ? {
                        enabled: this.stopLossModel.enabled$,
                        riskInCurrency:
                          this.stopLossModel.riskInCurrency.value$,
                        riskInPercent: this.stopLossModel.riskInPercent.value$,
                      }
                    : null,
                supportMargin:
                  this._adapter.metainfo().configFlags.supportMargin || !1,
                hideMarginIfNoLeverage:
                  this._adapter.metainfo().configFlags.hideMarginIfNoLeverage ||
                  !1,
                marginMeterConfig: a?.marginMeterConfig,
                pipValueType$: this._pipValueType$,
                leverageInfo$: this.leverageModel?.leverageInfo$,
                supportCustomOrderInfo:
                  this._adapter.metainfo().configFlags.supportCustomOrderInfo,
                dependencies: a?.orderInfoConfig?.dependencies,
                brokerProvidedOrderInfoGetter: this._getBrokerProvidedOrderInfo,
                duration$: this.durationModel.value$,
                stopLoss$: this.stopLossModel?.value$,
                takeProfit$: this.takeProfitModel?.value$,
                isBlocked$: this.isButtonDisabled$,
                relativePrice$: this._orderType$.pipe(
                  (0, M.switchMap)((e) => {
                    switch (e) {
                      case 1:
                      case 4:
                        return this.limitPriceModel.priceControlData$;
                      case 3:
                        return this.stopPriceModel.priceControlData$;
                      default:
                        return (0, I.of)(null);
                    }
                  }),
                  (0, f.map)((e) => e?.offset)
                ),
                selectedPriceControl$: this._orderType$.pipe(
                  (0, M.switchMap)((e) => {
                    switch (e) {
                      case 1:
                      case 4:
                        return this.limitPriceModel.focusedControl$;
                      case 3:
                        return this.stopPriceModel.focusedControl$;
                      case 2:
                        return (0, I.of)(1);
                      default:
                        return (0, I.of)(null);
                    }
                  })
                ),
                quotes$: this._quotes$,
              }));
          const _ = {
            orderType: this.orderType$,
            side: this.sideModel.value$,
            quantity: this.quantityModel.value$,
            symbol: this.displaySymbolName,
            stopPrice: this.stopPriceModel.value$,
            limitPrice: this.limitPriceModel.value$,
            formatter: this.formatter,
            quantityFormatter: this.quantityModel.formatter,
            orderPlacingStatus: this._orderPlacingStatus.asObservable(),
            status: this._status$,
            existingOrder: this.existingOrder,
            displayMode: this._getDisplayMode(),
          };
          this.buttonModel = new st(x.TradingEntityType.Order, _);
        }
        _getUnitsTitle() {
          return this._symbolInfo.units
            ? this._symbolInfo.units
            : this.symbolHasLotSize
            ? m.t(null, void 0, i(833526))
            : "stock" === this._symbolInfo.type
            ? m.t(null, void 0, i(288368))
            : m.t(null, void 0, i(715432));
        }
        _getAvailableQuantityTypeInfos() {}
        _createQuantityConverterController() {}
        _createQuantityConverters(e) {
          return {};
        }
        _resetBracketsFocus() {
          this.takeProfitModel?.setFocusedControl(0),
            this.stopLossModel?.setFocusedControl(0);
        }
        async _createBracketsModels(e, t, i) {
          const s = {
              [x.BracketType.TakeProfit]: await (0,
              F.extractTakeProfitValidationRules)(this._adapter, this.symbol),
              [x.BracketType.StopLoss]: await (0,
              F.extractStopLossValidationRules)(this._adapter, this.symbol),
              [x.BracketType.GuaranteedStop]: await (0,
              F.extractGuaranteedStopValidationRules)(
                this._adapter,
                this.symbol
              ),
              [x.BracketType.TrailingStop]: await (0,
              F.extractStopLossValidationRules)(this._adapter, this.symbol),
            },
            r = this.supportModifyBrackets(),
            o = this.supportModifyTrailingStop(),
            n = this.supportAddBracketsToExistingOrder();
          this.takeProfitModel = new re({
            initialPrice: e.takeProfit,
            initialPips: e.takeProfitPips,
            initialRiskInPercent: e.takeProfitRiskInPercent,
            initialEnabled: Boolean(
              e.takeProfit || e.takeProfitPips || e.takeProfitRiskInPercent
            ),
            initialBracketType: x.BracketType.TakeProfit,
            existingBracketPrice: this._existingPlacedOrder?.takeProfit,
            formatter: this.formatter,
            equity$: this._equity$,
            quotes$: this._quotes$,
            info: t,
            pipValue$: this._pipValue$,
            side$: this.sideModel.value$,
            amount$: this.quantityModel.value$,
            parentPrice$: this.priceGroupModel.price$,
            orderType$: this.orderType$,
            currency: i,
            parentType: 1,
            savedPips: this._currentInputState.takeProfitPips,
            settings$: this._settings$,
            orderWidgetStat: this._orderWidgetStat,
            showRiskControlsAndInfo: this.showRiskControlsAndInfo,
            status: this.getStatus(),
            supportTrailingStop: this.supportTrailingStop(),
            supportGuaranteedStop: this.supportGuaranteedStop(),
            supportCryptoBrackets: this.supportCryptoBrackets,
            useContextValidation: this.useContextValidation,
            validationRulesByType: s,
            supportModifyBrackets: r,
            supportModifyTrailingStop: o,
            supportAddBracketsToExistingOrder: n,
            settingsGetter: this._getSettings,
            supportBracketsInPips: this._supportBracketsInPips,
          });
          const {
              makeInitialSLPrice: a,
              makeInitialSLPips: l,
              makeInitialSLRiskInPercent: d,
              makeInitialSLBracketType: u,
              makeInitialSLEnabled: c,
            } = ee,
            h = {
              stopLoss: e.stopLoss,
              trailingStopPips: e.trailingStopPips,
              guaranteedStop: e.guaranteedStop,
              stopType: e.stopType,
              stopLossPips: e.stopLossPips,
              riskInPercent: e.stopLossRiskInPercent,
              supportStopLoss: this._supportStopLoss,
              supportGuaranteedStop: this._supportGuaranteedStop,
              supportTrailingStop: this._supportTrailingStop,
            },
            p =
              this._existingPlacedOrder?.stopLoss ??
              this._existingPlacedOrder?.guaranteedStop;
          this.stopLossModel = new re({
            initialPrice: a(h),
            initialPips: l(h),
            initialRiskInPercent: d(h),
            initialEnabled: c(h),
            initialBracketType: u(h),
            existingBracketPrice: p,
            formatter: this.formatter,
            equity$: this._equity$,
            quotes$: this._quotes$,
            info: t,
            pipValue$: this._pipValue$,
            side$: this.sideModel.value$,
            amount$: this.quantityModel.value$,
            parentPrice$: this.priceGroupModel.price$,
            orderType$: this.orderType$,
            currency: i,
            parentType: 1,
            savedPips: this._currentInputState.stopLossPips,
            settings$: this._settings$,
            orderWidgetStat: this._orderWidgetStat,
            showRiskControlsAndInfo: this.showRiskControlsAndInfo,
            status: this.getStatus(),
            supportCryptoBrackets: this.supportCryptoBrackets,
            hasTrailingStopBracket: e.hasTrailingStopBracket,
            supportStopLoss: this._supportStopLoss,
            supportTrailingStop: this._supportTrailingStop,
            supportGuaranteedStop: this._supportGuaranteedStop,
            useContextValidation: this.useContextValidation,
            validationRulesByType: s,
            supportModifyBrackets: r,
            supportModifyTrailingStop: o,
            supportAddBracketsToExistingOrder: n,
            settingsGetter: this._getSettings,
            supportBracketsInPips: this._supportBracketsInPips,
          });
        }
        _makeHeaderSettings() {
          return bt({
            pin: () => this.headerModel.pin(),
            toggleSettings: this._toggleSettings,
            mode$: this._displayMode$,
            settings$: this._settings$,
            currency: this.currency,
            showRelativePriceControl:
              !this.limitPriceModel.isRelativePriceControlHidden &&
              !this.stopPriceModel.isRelativePriceControlHidden,
            showRiskControlsAndInfo: this.showRiskControlsAndInfo,
            showQuantityInsteadOfAmount: this.showQuantityInsteadOfAmount,
            supportBrackets: this.supportBrackets(),
            supportPlaceOrderPreview: this.supportPlaceOrderPreview,
            supportModifyOrderPreview: this.supportModifyOrderPreview,
            isUndockAllowed: this._isUndockAllowed,
          });
        }
        _subscribe() {
          this._getDisplayMode() === A.OrderEditorDisplayMode.Popup &&
            this.getStatus() !== A.OrderPanelStatus.Preview &&
            this.activateOrderTicket();
          const e = this.status$.subscribe(this._handleStatusChange);
          this.onInputStateChanged().subscribe(this, this._mergeInputStateDiff),
            this.headerModel
              .pinButtonClicked()
              .subscribe(this, this._toggleMode),
            this.headerModel
              .closeButtonClicked()
              .subscribe(this, this._closeWidget),
            this.headerModel.backButtonClicked().subscribe(this, this._back);
          const t = (0, O.combineLatest)({
            orderType: this.orderType$,
            status: this.status$,
            side: this.sideModel.value$,
            loading: this._loading$,
            quotes: this._quotes$,
            limitPrice: this.limitPriceModel.value$,
            hasLimitPriceError: this.useContextValidation
              ? vt(this.limitPriceModel.error$, "error")
              : (0, I.of)(!1),
            stopPrice: this.stopPriceModel.value$,
            hasStopPriceError: this.useContextValidation
              ? vt(this.stopPriceModel.error$, "error")
              : (0, I.of)(!1),
            hasStopLossError:
              this.useContextValidation && this.stopLossModel
                ? vt(this.stopLossModel.error$, "error")
                : (0, I.of)(!1),
            hasTakeProfitError:
              this.useContextValidation && this.takeProfitModel
                ? vt(this.takeProfitModel.error$, "error")
                : (0, I.of)(!1),
            quantity: this.quantityModel.value$,
            hasQuantityError: this.useContextValidation
              ? vt(this.quantityModel.error$, "error")
              : (0, I.of)(!1),
            orderSizeCalculatorQuantityType:
              this.quantityModel instanceof Ne
                ? this.quantityModel.orderSizeCalculatorQuantityType$
                : (0, I.of)(null),
            lastRiskQuantityType:
              this.quantityModel instanceof Ne
                ? this.quantityModel.lastRiskQuantityType$
                : (0, I.of)(null),
            lastUsedQuantityType:
              this.quantityModel instanceof Ne
                ? this.quantityModel.lastUsedQuantityType$
                : (0, I.of)(null),
            orderSizeCalculatorValue:
              this.quantityModel instanceof Ne
                ? this.quantityModel.orderSizeCalculator.value$
                : (0, I.of)(null),
            takeProfitPips: this.takeProfitModel?.value$ ?? (0, I.of)(null),
            takeProfitPrice:
              this.takeProfitModel?.price.value$ ?? (0, I.of)(null),
            stopLossPips: this.stopLossModel?.value$ ?? (0, I.of)(null),
            stopLossPrice: this.stopLossModel?.price.value$ ?? (0, I.of)(null),
            takeProfitEnabled: this.takeProfitModel?.enabled$ ?? (0, I.of)(!1),
            stopLossEnabled: this.stopLossModel?.enabled$ ?? (0, I.of)(!1),
            duration: this.durationModel.value$,
            customFields: this.customFieldsModel.customFieldsInputValues$,
            hasDurationError: this.durationModel.hasError$,
            bracketType: this.stopLossModel?.bracketType$ ?? (0, I.of)(null),
          }).subscribe((e) => {
            const {
              orderType: t,
              status: i,
              side: s,
              loading: r,
              quotes: o,
              limitPrice: n,
              hasLimitPriceError: a,
              stopPrice: l,
              hasStopPriceError: d,
              hasStopLossError: u,
              hasTakeProfitError: c,
              quantity: h,
              hasQuantityError: p,
              orderSizeCalculatorQuantityType: _,
              orderSizeCalculatorValue: g,
              lastRiskQuantityType: b,
              lastUsedQuantityType: y,
              takeProfitPips: m,
              takeProfitPrice: v,
              stopLossPips: f,
              stopLossPrice: P,
              takeProfitEnabled: k,
              stopLossEnabled: S,
              duration: C,
              customFields: w,
              hasDurationError: T,
              bracketType: B,
            } = e;
            this._setDisabledIfNeeded({
              status: i,
              loading: r,
              quotes: o,
              side: s,
              limitPrice: n,
              stopPrice: l,
              quantity: h,
              hasQuantityError: p,
              hasStopLossError: u,
              hasTakeProfitError: c,
              isTakeProfitIncorrect: k && null === m,
              isStopLossIncorrect: S && null === f,
              customFields: w,
              hasDurationError: T,
              hasLimitPriceError: a,
              hasStopPriceError: d,
            }),
              this._compareInputStates({
                orderType: t,
                side: s,
                limitPrice: n,
                stopPrice: l,
                quantity: h,
                orderSizeCalculatorQuantityType: _,
                lastRiskQuantityType: b,
                lastUsedQuantityType: y,
                takeProfitPips: m,
                takeProfitPrice: v,
                stopLossPips: f,
                stopLossPrice: P,
                duration: C,
                customFields: w,
                bracketType: B,
                orderSizeCalculatorValue: g,
                takeProfitEnabled: k,
                stopLossEnabled: S,
              });
          });
          this._waitQuotesTimeout = setTimeout(
            () => this._isNoQuotes$.next(!0),
            5e3
          );
          const i = (0, O.combineLatest)([
              this._quotes$,
              this.sideModel.value$,
            ]).subscribe(([e, t]) => {
              const i = 1 === t ? (0, R.getAsk)(e) : (0, R.getBid)(e);
              (this._initialInputState.limitPrice = i),
                (this._initialInputState.stopPrice = i);
            }),
            s = this._quotes$.subscribe((e) => {
              this._isNoQuotes$.next((0, R.isNoQuotes)(e)),
                clearTimeout(this._waitQuotesTimeout);
            });
          if (
            ((this._subscriptions = [
              ...this.sideModel.subscribe(),
              this._qtySuggester
                .suggestedQtyChanged(this.symbol)
                .pipe((0, h.skip)(1))
                .subscribe(this._onSuggestedQtyChange),
              this.quantityModel.value$.subscribe(this._onQtyChange),
              this._isUndockAllowed$.subscribe(this._onUndockAllowedChanged),
            ]),
            this.customFieldsModel.subscribe(),
            this.leverageModel?.subscribe(),
            this.limitPriceModel.subscribe(),
            this.stopPriceModel.subscribe(),
            this.priceGroupModel.subscribe(),
            this.quantityModel.subscribe(),
            this.orderInfoModel?.subscribe(),
            this.durationModel.subscribe(),
            this.buttonModel && this.buttonModel.subscribe(),
            void 0 !== this.takeProfitModel &&
              this._subscriptions.push(...this.takeProfitModel.subscribe()),
            void 0 !== this.stopLossModel)
          ) {
            if (!this.supportCryptoExchangeOrderTicket()) {
              const e = (0, O.combineLatest)({
                  value: this.stopLossModel.value$,
                  enabled: this.stopLossModel.enabled$,
                }).subscribe(({ value: e, enabled: t }) => {
                  this._stopLossAvailable$.next(t),
                    t && this._stopLossPips$.next(e);
                }),
                t = this.stopLossModel.focusedControl$
                  .pipe(
                    $(
                      this.quantityModel.focusedControl$,
                      this.quantityModel instanceof Ne
                        ? this.quantityModel.orderSizeCalculatorQuantityType$
                        : (0, I.of)(null),
                      this.quantityConverterController
                        ? this.quantityConverterController.convertedValues$
                        : (0, I.of)(null)
                    )
                  )
                  .subscribe(([e, t, i, s]) => {
                    this._shouldChangeControlFocus(e, t, i) &&
                      this.quantityModel.setFocusedControl(0);
                  }),
                i = (0, O.combineLatest)({
                  quantityControl: this.quantityModel.focusedControl$,
                  orderSizeCalculatorQuantityType:
                    this.quantityModel instanceof Ne
                      ? this.quantityModel.orderSizeCalculatorQuantityType$
                      : (0, I.of)(null),
                })
                  .pipe($(this.stopLossModel.focusedControl$))
                  .subscribe(([e, t]) => {
                    const {
                      quantityControl: i,
                      orderSizeCalculatorQuantityType: s,
                    } = e;
                    this._shouldChangeControlFocus(t, i, s) &&
                      this.stopLossModel?.setFocusedControl(0);
                  });
              this._subscriptions.push(e, t, i);
            }
            this._subscriptions.push(...this.stopLossModel.subscribe());
          }
          if (
            void 0 !== this.takeProfitModel &&
            void 0 !== this.stopLossModel
          ) {
            const e = (0, O.combineLatest)([
              this.takeProfitModel.value$,
              this.stopLossModel.value$,
            ]).subscribe(([e, t]) => {
              this._rewardRisk$.next((0, H.formatRiskReward)(e, t));
            });
            this._subscriptions.push(e);
          }
          this._subscriptions.push(e, t, i, s, this._pipValues$.connect()),
            null !== this._marginAvailable$ &&
              this._subscriptions.push(this._marginAvailable$.connect()),
            null !== this._baseCurrencyCryptoBalance$ &&
              this._subscriptions.push(
                this._baseCurrencyCryptoBalance$.connect()
              ),
            null !== this._quoteCurrencyCryptoBalance$ &&
              this._subscriptions.push(
                this._quoteCurrencyCryptoBalance$.connect()
              ),
            this._adapter.orderUpdate.subscribe(this, this._orderUpdate);
        }
        _orderUpdate(e) {
          this._isVisible() &&
            !this._loading$.getValue() &&
            this.existingOrder &&
            e.id === this._orderTemplate.id &&
            6 !== e.status &&
            (this._getDisplayMode() === A.OrderEditorDisplayMode.Popup
              ? this.headerModel.close()
              : this._back());
        }
        async _doneHandler(e, t) {
          await this._getAndSendStatistics(e),
            null !== this._orderWidgetStat && this._orderWidgetStat.clear();
          const i = this._sendHandler;
          if (this._isHandlerPlacedOrder(i)) {
            const s = Object.assign({}, this._existingPlacedOrder, e);
            return (
              [2, 1].includes(s.type) && delete s.stopPrice,
              [2, 3].includes(s.type) && delete s.limitPrice,
              i(s, t)
            );
          }
          return i(e, t);
        }
        _isHandlerPlacedOrder(e) {
          return this.existingOrder;
        }
        async _getAndSendStatistics(e) {
          const t = this._isBracketStopTypeEnabled(x.BracketType.StopLoss),
            i = this.takeProfitModel && this.takeProfitModel.getEnabled(),
            s =
              this._supportTrailingStop &&
              this._isBracketStopTypeEnabled(x.BracketType.TrailingStop),
            o =
              this._supportGuaranteedStop &&
              this._isBracketStopTypeEnabled(x.BracketType.GuaranteedStop),
            n = 1 === e.side ? "Buy" : "Sell",
            a = ["Price", "Pips"],
            l = [
              "Units",
              "RiskInCurrency",
              "RiskInPercent",
              "BaseCurrencyQuantity",
              "QuoteCurrencyQuantity",
              "OrderSizeCalculator",
            ],
            d = this.quantityModel.getFocusedControl(),
            u = ["Pips", "Price", "RiskInCurrency", "RiskInPercent"],
            c = ["Limit", "Market", "Stop", "StopLimit"][e.type - 1],
            h = this.durationModel.getValue(),
            p = this.leverageModel ? this.leverageModel.leverageInfo() : null,
            _ = 4 === e.type,
            g = 3 === e.type || _,
            b = 1 === e.type || _,
            y = Object.assign({}, this._getSettings()),
            m =
              (this.limitPriceModel &&
                !this.limitPriceModel.isRelativePriceControlHidden) ||
              (this.stopPriceModel &&
                !this.stopPriceModel.isRelativePriceControlHidden),
            v = Boolean(this.supportBrackets);
          function f(e, t) {
            return t[null !== e ? e : 0];
          }
          (y.showRelativePriceControl = y.showRelativePriceControl && m),
            (y.showCurrencyRiskInQty = y.showCurrencyRiskInQty && v),
            (y.showPercentRiskInQty = y.showPercentRiskInQty && v),
            (y.showBracketsInCurrency = y.showBracketsInCurrency && v),
            (y.showBracketsInPercent = y.showBracketsInPercent && v),
            (y.showOrderPreview =
              y.showOrderPreview &&
              Boolean(
                this.supportPlaceOrderPreview || this.supportModifyOrderPreview
              )),
            null !== this._orderWidgetStat &&
              (this._orderWidgetStat.setStaticSnowplowEventDataProperty({
                userId: window.user.id,
                accountType: this._adapter.currentAccountType(),
                brokerId: this._adapter.metainfo().id,
                orderTicketMode: this._getDisplayMode(),
                source: this._orderTemplate.source ?? null,
                side: n,
                orderType: c,
                leverageInfo: p,
                symbolType:
                  void 0 !== this._symbolInfo.type
                    ? this._symbolInfo.type
                    : null,
                operation: this.existingOrder ? "Modify" : "Place",
                stopLoss: t
                  ? (0, r.ensureDefined)(this.stopLossModel).getValue()
                  : null,
                takeProfit: i
                  ? (0, r.ensureDefined)(this.takeProfitModel).getValue()
                  : null,
                trailingStop: s
                  ? (0, r.ensureDefined)(this.stopLossModel).getValue()
                  : null,
                guaranteedStop: o
                  ? (0, r.ensureDefined)(this.stopLossModel).getValue()
                  : null,
                focusedTPField: i
                  ? f(
                      (0, r.ensureDefined)(
                        this.takeProfitModel
                      ).getFocusedControl(),
                      u
                    )
                  : null,
                focusedSLField: t
                  ? f(
                      (0, r.ensureDefined)(
                        this.stopLossModel
                      ).getFocusedControl(),
                      u
                    )
                  : null,
                focusedQtyField: l[null !== d ? d : 0] ?? null,
                focusedLimitPriceField:
                  b || (_ && this.limitPriceModel)
                    ? f(this.limitPriceModel.getFocusedControl(), a)
                    : null,
                focusedStopPriceField:
                  g && this.stopPriceModel
                    ? a[this.stopPriceModel.getFocusedControl()]
                    : null,
                duration: null !== h ? h.type : null,
                isDefaultDuration:
                  null !== h
                    ? h.type === this._getDefaultDuration().value
                    : null,
                showBracketsInCurrency: y.showBracketsInCurrency,
                showBracketsInPercent: y.showBracketsInPercent,
                showCurrencyRiskInQty: y.showCurrencyRiskInQty,
                showOrderPreview: y.showOrderPreview,
                showPercentRiskInQty: y.showPercentRiskInQty,
                showRelativePriceControl: y.showRelativePriceControl,
              }),
              await this._orderWidgetStat.trackStat());
        }
        _isBracketStopTypeEnabled(e) {
          return (
            void 0 !== this.stopLossModel &&
            this.stopLossModel.getEnabled() &&
            this.stopLossModel.getBracketType() === e
          );
        }
        _getInitialInputState(e, t, i, s) {
          const r = void 0 !== e.customFields ? { ...e.customFields } : void 0;
          return {
            symbol: this.symbol,
            orderType: this._orderType$.value,
            side: e.side ?? i?.side ?? 1,
            limitPrice: e.limitPrice || e.price || e.stopPrice || null,
            stopPrice: e.stopPrice || e.price || e.limitPrice || null,
            quantity: e.qty ?? (this._suggestedQty || i?.quantity || t.qty.min),
            orderSizeCalculatorQuantityType:
              i?.orderSizeCalculatorQuantityType ?? null,
            lastRiskQuantityType: i?.lastRiskQuantityType ?? "riskInPercent",
            lastUsedQuantityType: i?.lastUsedQuantityType ?? "units",
            orderSizeCalculatorValue: i?.orderSizeCalculatorValue ?? null,
            takeProfitPips:
              i?.takeProfitPips ?? A.BracketDefaultPips.TakeProfit,
            takeProfitPrice: null,
            stopLossPips: i?.stopLossPips ?? A.BracketDefaultPips.StopLoss,
            stopLossPrice: null,
            customFields: r ?? i?.customFields ?? {},
            bracketType: null,
            takeProfitEnabled: !1,
            stopLossEnabled: !1,
            duration: (0, R.getOrderDuration)({
              orderDuration: e.duration,
              orderType: this._orderType$.value,
              savedDuration: i?.duration ?? null,
              orderDurations: this._adapter.metainfo().durations,
              symbolDurations: s?.allowedDurations,
            }),
          };
        }
        _compareInputStates(e) {
          const {
              orderType: t,
              side: i,
              limitPrice: s,
              stopPrice: r,
              quantity: o,
              orderSizeCalculatorQuantityType: n,
              lastRiskQuantityType: a,
              lastUsedQuantityType: l,
              orderSizeCalculatorValue: d,
              takeProfitPips: u,
              takeProfitPrice: c,
              stopLossPips: h,
              stopLossPrice: p,
              duration: _,
              customFields: g,
              takeProfitEnabled: b,
              stopLossEnabled: y,
              bracketType: m,
            } = e,
            v = {};
          let f = null === s;
          if (null !== s) {
            const e = this.formatter.format(s),
              i =
                null !== this._currentInputState.limitPrice
                  ? this.formatter.format(this._currentInputState.limitPrice)
                  : null;
            f = 3 !== t && e !== i;
          }
          t !== this._currentInputState.orderType && (v.orderType = t),
            f && (v.limitPrice = s);
          let P = null !== r;
          if (null !== r) {
            const e = this.formatter.format(r),
              i =
                null !== this._currentInputState.stopPrice
                  ? this.formatter.format(this._currentInputState.stopPrice)
                  : null;
            P = (3 === t || 4 === t) && e !== i;
          }
          P && (v.stopPrice = r),
            null !== o &&
              this._currentInputState.quantity !== o &&
              (v.quantity = o),
            this._currentInputState.orderSizeCalculatorQuantityType !== n &&
              (v.orderSizeCalculatorQuantityType = n),
            this._currentInputState.lastRiskQuantityType !== a &&
              (v.lastRiskQuantityType = a),
            this._currentInputState.lastUsedQuantityType !== l &&
              (v.lastUsedQuantityType = l),
            this._currentInputState.orderSizeCalculatorValue !== d &&
              (v.orderSizeCalculatorValue = d),
            this._currentInputState.takeProfitPips !== u &&
              (v.takeProfitPips = u),
            this._currentInputState.takeProfitPrice !== c &&
              (v.takeProfitPrice = c),
            this._currentInputState.stopLossPips !== h && (v.stopLossPips = h),
            this._currentInputState.stopLossPrice !== p &&
              (v.stopLossPrice = p),
            this._currentInputState.takeProfitEnabled !== b &&
              (v.takeProfitEnabled = b),
            this._currentInputState.stopLossEnabled !== y &&
              (v.stopLossEnabled = y),
            (this._currentInputState.duration?.type === _?.type &&
              this._currentInputState.duration?.datetime === _?.datetime) ||
              (v.duration = _),
            null !== i && this._currentInputState.side !== i && (v.side = i),
            null !== t &&
              this._currentInputState.orderType !== t &&
              (v.orderType = t),
            this._currentInputState.symbol !== this.symbol &&
              (v.symbol = this.symbol),
            0 === Object.keys(g).length ||
              (0, U.deepEquals)(this._currentInputState.customFields, g)[0] ||
              (v.customFields = g),
            m !== this._currentInputState.bracketType && (v.bracketType = m),
            0 !== Object.keys(v).length && this._onInputStateChanged.fire(v);
        }
        _getCurrentInputState() {
          return {
            symbol: this.symbol,
            orderType: this._orderType$.value,
            side: this.sideModel.getValue(),
            limitPrice: this.limitPriceModel.getValue(),
            stopPrice: this.stopPriceModel.getValue(),
            quantity: this.quantityModel.getValue(),
            orderSizeCalculatorQuantityType:
              this.quantityModel instanceof Ne
                ? this.quantityModel.getOrderSizeCalculatorQuantityType()
                : null,
            orderSizeCalculatorValue:
              this.quantityModel instanceof Ne
                ? this.quantityModel.orderSizeCalculator.getValue()
                : null,
            lastRiskQuantityType:
              this.quantityModel instanceof Ne
                ? this.quantityModel.getLastRiskQuantityType()
                : null,
            lastUsedQuantityType:
              this.quantityModel instanceof Ne
                ? this.quantityModel.getLastUsedQuantityType()
                : null,
            takeProfitPips: this.takeProfitModel
              ? this.takeProfitModel.pips.getValue()
              : null,
            takeProfitPrice: this.takeProfitModel
              ? this.takeProfitModel.price.getValue()
              : null,
            stopLossPips: this.stopLossModel
              ? this.stopLossModel.pips.getValue()
              : null,
            stopLossPrice: this.stopLossModel
              ? this.stopLossModel.price.getValue()
              : null,
            duration: this.durationModel.getValue(),
            customFields: this.customFieldsModel.getCustomFieldsInputValues(),
            bracketType: this.stopLossModel?.getBracketType() ?? null,
            takeProfitEnabled: this.takeProfitModel?.getEnabled() ?? !1,
            stopLossEnabled: this.stopLossModel?.getEnabled() ?? !1,
          };
        }
        _setDisabledIfNeeded({
          status: e,
          loading: t,
          quotes: i,
          side: s,
          limitPrice: r,
          stopPrice: o,
          quantity: n,
          isTakeProfitIncorrect: a,
          isStopLossIncorrect: l,
          customFields: d,
          hasDurationError: u,
          hasLimitPriceError: c,
          hasStopPriceError: h,
          hasQuantityError: p,
          hasStopLossError: _,
          hasTakeProfitError: g,
        }) {
          this._isButtonDisabled$.next(
            (this._getDisplayMode() === A.OrderEditorDisplayMode.Panel &&
              e === A.OrderPanelStatus.Wait) ||
              t ||
              (0, R.isNoQuotes)(i) ||
              null === s ||
              (0, H.checkPriceByOrderType)(this._orderType$.value, r, o) ||
              null === n ||
              _ ||
              g ||
              a ||
              l ||
              u ||
              c ||
              h ||
              p ||
              Object.values(d).some((e) => void 0 === e) ||
              this.customFieldsModel
                .getCustomFieldsModels()
                .some((e) => !e.isValid())
          );
        }
        _closeWidget() {
          this._cleanUp(), this._onCloseButtonClicked.fire();
        }
        _cancel() {
          this._cleanUp(),
            this.deactivateOrderTicket(),
            (this._currentInputState = Object.assign(
              {},
              this._initialInputState
            )),
            this.limitPriceModel && this.limitPriceModel.resetPrice(),
            this.stopPriceModel && this.stopPriceModel.resetPrice(),
            this.takeProfitModel && this.takeProfitModel.setEnabled(!1),
            this.stopLossModel && this.stopLossModel.setEnabled(!1),
            this._orderPlacingStatus.next(A.OrderPlacingStatus.Creating),
            this.existingOrder && this._back();
        }
        _cleanUp() {
          (this.orderPreviewModel = null), this.onDoneButtonClicked.resolve(!1);
        }
        _getDefaultDuration() {
          const e = (0, r.ensureDefined)(this._adapter.metainfo().durations);
          return e.find((e) => Boolean(e.default)) || e[0];
        }
        async _prepareTradableSolution(e) {
          (this.tradableSolution = await (0, H.prepareTradableSolution)(
            e,
            this._adapter
          )),
            this._createSimpleDialog(this._adapter),
            (this.notTradableText = e.reason);
        }
        _isOrderSizeCalculatorAvailable() {
          return !1;
        }
        _calculateSeenPrice() {
          const e = this.sideModel.currentQuotes();
          return (1 === this.sideModel.getValue() ? e.ask : e.bid) ?? 0;
        }
        _getCurrentQuotes() {
          const e = this.sideModel.currentQuotes();
          if (void 0 !== e.ask && void 0 !== e.bid)
            return { ask: e.ask, bid: e.bid };
        }
        _shouldChangeControlFocus(e, t, i) {
          return (
            (2 === e || 3 === e) &&
            ((5 === t &&
              null !== i &&
              ("riskInCurrency" === i || "riskInPercent" === i)) ||
              1 === t ||
              2 === t)
          );
        }
        _getCurrentSymbolName() {
          return (
            this._symbolInfo?.brokerSymbol ??
            ("brokerSymbol" in this._orderTemplate
              ? this._orderTemplate.brokerSymbol
              : null) ??
            (0, R.safeSplitSymbol)(this._orderTemplate.symbol)[1]
          );
        }
      }
      class kt {
        constructor({
          qty: e,
          currency: t,
          positionPrice: i,
          showTotalInsteadOfTradeValue: s,
          info: r,
          pipValueType$: o,
          tpInfo: a,
          slInfo: l,
          showRiskControlsAndInfo: d,
          supportMargin: u,
        }) {
          (this._infoTableData$ = new n.BehaviorSubject({ rows: [] })),
            (this._riskFormatter = new W.PriceFormatter({ priceScale: 100 })),
            (this._tpEnabled$ = null),
            (this._tpRiskInCurrency$ = null),
            (this._tpRiskInPercent$ = null),
            (this._slEnabled$ = null),
            (this._slRiskInCurrency$ = null),
            (this._slRiskInPercent$ = null),
            (this.infoTableData$ = this._infoTableData$.asObservable()),
            (this._currency = t),
            (this._showTotalInsteadOfTradeValue = s),
            (this._showRiskControlsAndInfo = d),
            (this._type = r.type),
            (this._leverage = r.leverage),
            (this._marginRate = r.marginRate),
            (this._lotSize = r.lotSize),
            (this._pipValue = (0, H.calculatePipValue)(
              e,
              r.pipValue,
              this._lotSize
            )),
            (this._pipValueType$ = o),
            (this._supportMargin = u),
            null === e
              ? (this._tradeValue = 0)
              : "crypto" === this._type
              ? (this._tradeValue = e * i)
              : (this._tradeValue = rt(
                  e,
                  i,
                  r.pipValue,
                  r.pipSize,
                  this._lotSize
                )),
            a &&
              l &&
              ((this._tpEnabled$ = a.enabled),
              (this._tpRiskInCurrency$ = a.riskInCurrency),
              (this._tpRiskInPercent$ = a.riskInPercent),
              (this._slEnabled$ = l.enabled),
              (this._slRiskInCurrency$ = l.riskInCurrency),
              (this._slRiskInPercent$ = l.riskInPercent));
        }
        subscribe() {
          this._subscription = (0, O.combineLatest)({
            tpEnabled:
              null !== this._tpEnabled$ ? this._tpEnabled$ : (0, I.of)(null),
            tpRiskInCurrency:
              null !== this._tpRiskInCurrency$
                ? this._tpRiskInCurrency$
                : (0, I.of)(null),
            tpRiskInPercent:
              null !== this._tpRiskInPercent$
                ? this._tpRiskInPercent$
                : (0, I.of)(null),
            slEnabled:
              null !== this._slEnabled$ ? this._slEnabled$ : (0, I.of)(null),
            slRiskInCurrency:
              null !== this._slRiskInCurrency$
                ? this._slRiskInCurrency$
                : (0, I.of)(null),
            slRiskInPercent:
              null !== this._slRiskInPercent$
                ? this._slRiskInPercent$
                : (0, I.of)(null),
            pipValueType: this._pipValueType$,
          }).subscribe((e) => {
            const {
                tpEnabled: t,
                tpRiskInCurrency: i,
                tpRiskInPercent: s,
                slEnabled: r,
                slRiskInCurrency: o,
                slRiskInPercent: n,
                pipValueType: a,
              } = e,
              l = [];
            l.push(
              ...this._makeLeverageInfo(),
              ...this._makeLotSizeInfo(),
              ...this._makePipValueInfo(a),
              ...this._makeTradeValueInfo(),
              ...this._makeRewardInfo(t, i, s),
              ...this._makeRiskInfo(r, o, n)
            ),
              this._infoTableData$.next({ rows: l });
          });
        }
        unsubscribe() {
          this._subscription?.unsubscribe();
        }
        title() {
          return m.t(null, void 0, i(798565));
        }
        infoTableData() {
          return this._infoTableData$.asObservable();
        }
        getOrderInfoTableRowsCount() {
          return this._infoTableData$.getValue().rows.length;
        }
        _getTradeValue() {
          const e = this._supportMargin ? 1 : this._getMarginRate() ?? 1;
          if (
            this._showRiskControlsAndInfo &&
            Number.isFinite(this._tradeValue) &&
            (this._isSymbolTypeSupportTradeValue() || void 0 !== e)
          )
            return (0, H.formatInfoValue)(this._tradeValue * e);
        }
        _makeLeverageInfo() {
          const e = (0, H.displayedLeverage)(this._leverage, this._marginRate);
          return null === e
            ? []
            : [{ title: m.t(null, void 0, i(824813)), value: e }];
        }
        _makeLotSizeInfo() {
          return "number" == typeof this._lotSize &&
            Number.isFinite(this._lotSize)
            ? [
                {
                  title: m.t(null, void 0, i(574045)),
                  value: String(this._lotSize),
                },
              ]
            : [];
        }
        _makePipValueInfo(e) {
          return this._showRiskControlsAndInfo &&
            e !== x.PipValueType.None &&
            Number.isFinite(this._pipValue)
            ? [
                {
                  title:
                    e === x.PipValueType.Pips
                      ? m.t(null, void 0, i(207074))
                      : m.t(null, void 0, i(414285)),
                  value: (0, H.formatInfoValue)(this._pipValue),
                  currency: this._currency,
                },
              ]
            : [];
        }
        _makeTradeValueInfo() {
          const e = this._getTradeValue();
          if (void 0 === e) return [];
          return [
            {
              title: this._showTotalInsteadOfTradeValue
                ? m.t(null, void 0, i(408007))
                : m.t(null, void 0, i(248410)),
              value: e,
              currency: this._currency,
            },
          ];
        }
        _getMarginRate() {
          return void 0 !== this._marginRate && this._marginRate > 0
            ? this._marginRate
            : void 0;
        }
        _isSymbolTypeSupportTradeValue() {
          return (
            void 0 !== this._type &&
            ["stock", "dr", "right", "bond", "warrant", "structured"].includes(
              this._type
            )
          );
        }
        _makeRewardInfo(e, t, s) {
          return this._showRiskControlsAndInfo && e && null !== t && null !== s
            ? [
                {
                  title: m.t(null, void 0, i(65183)),
                  value: at({
                    percentValue: s,
                    currencyValue: t,
                    formatter: this._riskFormatter,
                  }),
                  currency: this._currency,
                },
              ]
            : [];
        }
        _makeRiskInfo(e, t, s) {
          return this._showRiskControlsAndInfo && e && null !== t && null !== s
            ? [
                {
                  title: m.t(null, void 0, i(663886)),
                  value: at({
                    percentValue: s,
                    currencyValue: t,
                    formatter: this._riskFormatter,
                  }),
                  currency: this._currency,
                },
              ]
            : [];
        }
      }
      var St;
      !(function (e) {
        (e[(e.Position = 0)] = "Position"),
          (e[(e.IndividualPosition = 1)] = "IndividualPosition");
      })(St || (St = {}));
      class Ct {
        constructor({
          adapter: e,
          position: t,
          brackets: i,
          settings$: s,
          realtimeProvider: r,
          isUndockAllowed$: o,
          isVisible: a,
          toggleMode: l,
          getDisplayMode: d,
          toggleSettings: u,
          displayMode$: c,
          getSettings: h,
          viewType: p,
          pipValueType$: _,
          handler: g,
          trackEvent: b,
          orderDialogOptions: y,
          headerState: m,
        }) {
          (this.positionInfoModel = null),
            (this.id = (0, q.randomHashN)(6)),
            (this.onDoneButtonClicked = (0, v.createDeferredPromise)()),
            (this.orderType$ = new n.BehaviorSubject(null)),
            (this.isFractional = !1),
            (this._onBackButtonClicked = new Q.Delegate()),
            (this._onCloseButtonClicked = new Q.Delegate()),
            (this._dataLoadingAbortController = new AbortController()),
            (this._loading$ = new n.BehaviorSubject(!1)),
            (this._rewardRisk$ = new n.BehaviorSubject("")),
            (this._isButtonDisabled$ = new n.BehaviorSubject(!1)),
            (this._status$ = new n.BehaviorSubject(A.OrderPanelStatus.Active)),
            (this._warning$ = new n.BehaviorSubject(void 0)),
            (this._supportStopLoss = !0),
            (this._onUndockAllowedChanged = (e) => {
              this._headerState.setSettings(
                bt({
                  pin: () => this.headerModel.pin(),
                  toggleSettings: this._toggleSettings,
                  mode$: this._displayMode$,
                  settings$: this._settings$,
                  currency: this.currency,
                  showRiskControlsAndInfo: !0,
                  supportBrackets: !0,
                  isUndockAllowed: e,
                })
              );
            }),
            (this._headerState = m),
            (this.headerStateValue = m),
            this._headerState.setSettings(void 0),
            (this._position = t),
            (this._adapter = e),
            (this._pipValueType$ = _),
            (this.position = t),
            (this.symbol = t.symbol),
            (this.brackets = i),
            (this._handler = g),
            (this._isUndockAllowed$ = o),
            (this._isVisible = a),
            (this._toggleMode = l),
            (this._getDisplayMode = d),
            (this._displayMode$ = c),
            (this._toggleSettings = u),
            (this._getSettings = h),
            (this._settings$ = s),
            (this.rewardRisk$ = this._rewardRisk$.asObservable()),
            (this.loading$ = this._loading$.asObservable()),
            (this.status$ = this._status$.asObservable()),
            (this.warning$ = this._warning$.asObservable()),
            (this.isButtonDisabled$ = this._isButtonDisabled$.asObservable());
          const S = this._adapter.metainfo().configFlags;
          (this.supportPositions = p === St.Position && S.supportPositions),
            (this.supportIndividualPositions =
              p === St.IndividualPosition && S.supportPositionNetting),
            (this.supportOnlyPairPositionBrackets =
              S.supportOnlyPairPositionBrackets),
            (this.supportCryptoExchangeOrderTicket =
              S.supportCryptoExchangeOrderTicket),
            (this._trackEvent = b),
            (this.onReady = Promise.all([
              e.symbolInfo(t.symbol),
              e.getSymbolSpecificTradingOptions(t.symbol),
              this._adapter.orders(),
              this._adapter.getPositionDialogOptions(this.symbol),
              (0, yt.isFractional)(t.symbol, {
                signal: this._dataLoadingAbortController.signal,
              }),
              ut(e.accountMetainfo(), {
                id: e.metainfo().id,
                name: e.metainfo().title,
              }),
              ut(e.formatter(t.symbol, !1), new W.PriceFormatter()),
            ]).then(async ([s, o, n, a, l, d, u]) => {
              (this.showRiskControlsAndInfo =
                S.supportRiskControlsAndInfo && 0 !== s.pipValue),
                (this.currency = (0, R.getCurrency)(d)),
                (this.symbolType = s.type),
                (this.brokerSymbol = (0, R.getSymbolNameOverFullname)(
                  s.brokerSymbol || t.brokerSymbol || this.symbol
                )),
                (this.isFractional = l),
                (this._supportBrackets =
                  p === St.IndividualPosition
                    ? o?.supportIndividualPositionBrackets
                    : o?.supportPositionBrackets),
                (this._supportModifyBrackets =
                  this._supportBrackets &&
                  S.supportModifyBrackets &&
                  S.supportModifyPositionBrackets),
                (this._supportStopLoss = Boolean(
                  this._supportBrackets && (S.supportStopLoss ?? !0)
                )),
                (this._supportTrailingStop =
                  this._supportBrackets && S.supportTrailingStop),
                (this._supportGuaranteedStop =
                  this._supportBrackets && S.supportGuaranteedStop),
                (this._supportModifyTrailingStop =
                  this._supportTrailingStop &&
                  this._supportModifyBrackets &&
                  S.supportModifyTrailingStop),
                (this._quotes$ = B(
                  (0, P.fromEventPattern)(
                    (e) => r.subscribeRealtime(t.symbol, e),
                    (e) => r.unsubscribeRealtime(t.symbol, e),
                    (e, t) => t
                  )
                )),
                (this._equity$ = B(
                  (0, P.fromEventPattern)(
                    (t) => e.subscribeEquity(t),
                    (t) => e.unsubscribeEquity(t),
                    (e, t) => t
                  )
                )),
                (this._pipValues$ = B(
                  (0, P.fromEventPattern)(
                    (i) => e.subscribePipValue(t.symbol, i),
                    (i) => e.unsubscribePipValue(t.symbol, i),
                    (e, t) => t
                  ).pipe(
                    (0, k.startWith)({
                      buyPipValue: s.pipValue,
                      sellPipValue: s.pipValue,
                    })
                  )
                )),
                (this._pipValue$ = this._pipValues$.pipe(
                  (0, f.map)((e) =>
                    1 === t.side ? e.buyPipValue : e.sellPipValue
                  )
                )),
                await this._createModels({
                  brackets: i,
                  info: s,
                  accInfo: d,
                  formatter: u,
                  orderDialogOptions: y,
                  orders: n,
                  positionDialogOptions: a,
                }),
                this.supportOnlyPairPositionBrackets && this._updateWarning(),
                this._subscribe();
            }));
        }
        destroy() {
          this._subscriptions &&
            this._subscriptions.forEach((e) => e.unsubscribe()),
            this.headerModel &&
              (this.headerModel.unsubscribe(),
              this.headerModel
                .pinButtonClicked()
                .unsubscribe(this, this._toggleMode),
              this.headerModel
                .backButtonClicked()
                .unsubscribe(this, this._back),
              this.headerModel
                .closeButtonClicked()
                .unsubscribe(this, this._closeWidget)),
            null !== this.positionInfoModel &&
              this.positionInfoModel.unsubscribe(),
            this.supportPositions &&
              this._adapter.positionUpdate.unsubscribe(
                this,
                this._positionOrIndividualPositionUpdate
              ),
            this.supportIndividualPositions &&
              this._adapter.individualPositionUpdate.unsubscribe(
                this,
                this._positionOrIndividualPositionUpdate
              ),
            this.supportOnlyPairPositionBrackets &&
              this._adapter.orderUpdate.unsubscribe(this, this._updateWarning),
            this._dataLoadingAbortController.abort();
        }
        side() {
          return this._position.side;
        }
        async doneButtonClick() {
          const e = this._getDisplayMode();
          this._loading$.next(!0);
          if (!(await this._doneHandler()))
            return (
              e === A.OrderEditorDisplayMode.ResizableDrawer &&
                this.headerModel.close(),
              void this._loading$.next(!1)
            );
          this.onDoneButtonClicked.resolve(!0),
            e === A.OrderEditorDisplayMode.Popup ||
            e === A.OrderEditorDisplayMode.ResizableDrawer
              ? this.headerModel.close()
              : this._back(),
            this._loading$.next(!1),
            this._trackEvent(
              "Position Ticket",
              "Modify Position",
              this._getDisplayMode() === A.OrderEditorDisplayMode.Panel
                ? "Panel"
                : "Popup"
            );
        }
        onBackButtonClicked() {
          return this._onBackButtonClicked;
        }
        onCloseButtonClicked() {
          return this._onCloseButtonClicked;
        }
        supportBrackets() {
          return Boolean(this._supportBrackets);
        }
        supportStopLoss() {
          return Boolean(this._supportStopLoss);
        }
        supportTrailingStop() {
          return Boolean(this._supportTrailingStop);
        }
        supportGuaranteedStop() {
          return Boolean(this._supportGuaranteedStop);
        }
        supportModifyTrailingStop() {
          return Boolean(this._supportModifyTrailingStop);
        }
        getStatus() {
          return this._status$.getValue();
        }
        isButtonDisabled() {
          return this._isButtonDisabled$.getValue();
        }
        async _createModels(e) {
          const {
              brackets: t,
              info: i,
              accInfo: s,
              formatter: r,
              orders: o,
              orderDialogOptions: a,
              positionDialogOptions: l,
            } = e,
            d = {
              [x.BracketType.TakeProfit]: await (0,
              F.extractTakeProfitValidationRules)(this._adapter, this.symbol),
              [x.BracketType.StopLoss]: await (0,
              F.extractStopLossValidationRules)(this._adapter, this.symbol),
              [x.BracketType.GuaranteedStop]: await (0,
              F.extractGuaranteedStopValidationRules)(
                this._adapter,
                this.symbol
              ),
              [x.BracketType.TrailingStop]: await (0,
              F.extractStopLossValidationRules)(this._adapter, this.symbol),
            },
            u = (0, R.getCurrency)(s) || "$",
            c = new n.BehaviorSubject(this._position.side || -1);
          this.headerModel = new ce({
            displaySymbolName: this.brokerSymbol,
            symbol: this.symbol,
            brokerName: " ",
            mode$: this._displayMode$,
            quotes$: this._quotes$,
            status$: this._status$,
            parentType: 2,
            isExistingOrder: !0,
            isTradable: !0,
            data: this._position,
            formatter: this._position.priceFormatter
              ? this._position.priceFormatter
              : r,
            headerState: this._headerState,
            brokerId: this._adapter?.metainfo().id,
          });
          const h = this.supportModifyTrailingStop();
          this.takeProfitModel = new re({
            initialPrice: t.takeProfit || this._position.takeProfit || null,
            initialEnabled: Boolean(t.takeProfit || this._position.takeProfit),
            initialBracketType: x.BracketType.TakeProfit,
            formatter: r,
            equity$: this._equity$,
            quotes$: this._quotes$,
            info: i,
            pipValue$: this._pipValue$,
            side$: c,
            amount$: new n.BehaviorSubject(this._position.qty),
            parentPrice$: new n.BehaviorSubject(
              this._position.avgPrice ?? this._position.price
            ),
            orderType$: this.orderType$,
            currency: u,
            parentType: 2,
            savedPips: null,
            settings$: this._settings$,
            orderWidgetStat: null,
            showRiskControlsAndInfo: this.showRiskControlsAndInfo,
            status: this._status$.getValue(),
            supportTrailingStop: this.supportTrailingStop(),
            supportGuaranteedStop: this.supportGuaranteedStop(),
            supportModifyBrackets: this._supportModifyBrackets,
            useContextValidation: !1,
            validationRulesByType: d,
            supportModifyTrailingStop: h,
            settingsGetter: this._getSettings,
          });
          const p = Boolean(this._position.trailingStopPips),
            {
              makeInitialSLPrice: _,
              makeInitialSLBracketType: g,
              makeInitialSLEnabled: b,
              makeInitialSLPips: y,
            } = ee,
            m = {
              stopLoss: t.stopLoss || this._position.stopLoss,
              trailingStopPips:
                t.trailingStopPips || this._position.trailingStopPips,
              guaranteedStop: t.guaranteedStop ?? this._position.guaranteedStop,
              supportStopLoss:
                this._adapter.metainfo().configFlags?.supportStopLoss,
              supportGuaranteedStop:
                this._adapter.metainfo().configFlags?.supportGuaranteedStop,
              supportTrailingStop:
                this._adapter.metainfo().configFlags?.supportTrailingStop,
            },
            v = o.filter(
              (e) => 2 === e.parentType && e.parentId === this._position.id
            ),
            f = v[0]?.customFields;
          (this.customFieldsModel = new j.CustomFieldsViewModel({
            existingOrder: Boolean(v.length),
            customFields: l?.customFields,
            initialInputState: f,
            orderType$: (0, I.of)(null),
          })),
            (this.stopLossModel = new re({
              initialPrice: _(m),
              initialPips: y(m),
              initialEnabled: b(m),
              initialBracketType: g(m),
              formatter: r,
              equity$: this._equity$,
              quotes$: this._quotes$,
              info: i,
              pipValue$: this._pipValue$,
              side$: c,
              amount$: new n.BehaviorSubject(this._position.qty),
              parentPrice$: new n.BehaviorSubject(this._position.avgPrice),
              orderType$: this.orderType$,
              currency: u,
              parentType: 2,
              savedPips: null,
              settings$: this._settings$,
              orderWidgetStat: null,
              showRiskControlsAndInfo: this.showRiskControlsAndInfo,
              status: this._status$.getValue(),
              supportStopLoss: this._supportStopLoss,
              supportTrailingStop: this._supportTrailingStop,
              supportGuaranteedStop: this._supportGuaranteedStop,
              supportModifyBrackets: this._supportModifyBrackets,
              useContextValidation: !1,
              validationRulesByType: d,
              supportModifyTrailingStop: h,
              hasTrailingStopBracket: p,
              settingsGetter: this._getSettings,
            }));
          const P = (0, H.shouldShowTotal)(a),
            k = this.supportBrackets();
          this.supportCryptoExchangeOrderTicket ||
            (this.positionInfoModel = new kt({
              qty: this._position.qty,
              currency: (0, R.getCurrency)(s),
              positionPrice: this._position.avgPrice,
              showTotalInsteadOfTradeValue: P,
              info: i,
              pipValueType$: this._pipValueType$,
              tpInfo:
                k && this.takeProfitModel
                  ? {
                      enabled: this.takeProfitModel.enabled$,
                      riskInCurrency:
                        this.takeProfitModel.riskInCurrency.value$,
                      riskInPercent: this.takeProfitModel.riskInPercent.value$,
                    }
                  : null,
              slInfo:
                k && this.stopLossModel
                  ? {
                      enabled: this.stopLossModel.enabled$,
                      riskInCurrency: this.stopLossModel.riskInCurrency.value$,
                      riskInPercent: this.stopLossModel.riskInPercent.value$,
                    }
                  : null,
              showRiskControlsAndInfo: this.showRiskControlsAndInfo,
              supportMargin:
                this._adapter.metainfo().configFlags.supportMargin ?? !1,
            })),
            (this.buttonModel = new st(x.TradingEntityType.Position));
        }
        _updateWarning() {
          this._adapter.orders().then((e) => {
            const t = e.find(
              (e) =>
                e.symbol === this._position.symbol &&
                e.side !== this._position.side &&
                ((6 === e.status && void 0 === e.parentId) || 3 === e.status)
            );
            this._warning$.next(t ? m.t(null, void 0, i(913064)) : void 0);
          });
        }
        _subscribe() {
          if (
            (this.headerModel
              .pinButtonClicked()
              .subscribe(this, this._toggleMode),
            this.headerModel.backButtonClicked().subscribe(this, this._back),
            this.headerModel
              .closeButtonClicked()
              .subscribe(this, this._closeWidget),
            (this._buttonDataSubscription = (0, O.combineLatest)({
              loading: this._loading$,
              quotes: this._quotes$,
              takeProfit: this.takeProfitModel.value$,
              stopLoss: this.stopLossModel.value$,
              takeProfitEnabled: this.takeProfitModel.enabled$,
              stopLossEnabled: this.stopLossModel.enabled$,
            }).subscribe((e) => {
              const {
                loading: t,
                quotes: i,
                takeProfit: s,
                stopLoss: r,
                takeProfitEnabled: o,
                stopLossEnabled: n,
              } = e;
              this._isButtonDisabled$.next(
                t ||
                  (0, R.isNoQuotes)(i) ||
                  (o && null === s) ||
                  (n && null === r)
              );
            })),
            (this._rewardRiskSubscription = (0, O.combineLatest)([
              this.takeProfitModel.value$,
              this.stopLossModel.value$,
            ]).subscribe(([e, t]) => {
              this._rewardRisk$.next((0, H.formatRiskReward)(e, t));
            })),
            this.customFieldsModel.subscribe(),
            (this._subscriptions = [
              ...this.takeProfitModel.subscribe(),
              ...this.stopLossModel.subscribe(),
              this._rewardRiskSubscription,
              this._buttonDataSubscription,
              this._equity$.connect(),
              this._quotes$.connect(),
              this._pipValues$.connect(),
              this._isUndockAllowed$.subscribe(this._onUndockAllowedChanged),
            ]),
            null !== this.positionInfoModel &&
              this.positionInfoModel.subscribe(),
            this.supportPositions &&
              this._adapter.positionUpdate.subscribe(
                this,
                this._positionOrIndividualPositionUpdate
              ),
            this.supportIndividualPositions &&
              this._adapter.individualPositionUpdate.subscribe(
                this,
                this._positionOrIndividualPositionUpdate
              ),
            this.supportOnlyPairPositionBrackets)
          ) {
            this._adapter.orderUpdate.subscribe(this, this._updateWarning);
            const e = this.stopLossModel.enabled$
                .pipe($(this.takeProfitModel.enabled$))
                .subscribe((e) => {
                  const [t, i] = e;
                  i !== t && this.takeProfitModel.setEnabled(t);
                }),
              t = this.takeProfitModel.enabled$
                .pipe($(this.stopLossModel.enabled$))
                .subscribe((e) => {
                  const [t, i] = e;
                  i !== t && this.stopLossModel.setEnabled(t);
                });
            this._subscriptions.push(t, e);
          }
        }
        _doneHandler() {
          const e =
              null !== this.stopLossModel.getValue()
                ? this.stopLossModel.price.getValue()
                : null,
            t = this.stopLossModel.getValue(),
            i =
              null !== this.takeProfitModel.getValue()
                ? this.takeProfitModel.price.getValue()
                : null,
            s = {};
          if (
            (null !== t &&
              null !== e &&
              (this.stopLossModel.getBracketType() === x.BracketType.StopLoss &&
                (s.stopLoss = e),
              this.stopLossModel.getBracketType() ===
                x.BracketType.TrailingStop && (s.trailingStopPips = t),
              this.stopLossModel.getBracketType() ===
                x.BracketType.GuaranteedStop && (s.guaranteedStop = e)),
            null !== i && (s.takeProfit = i),
            this.customFieldsModel.getCustomFieldsModels().length > 0)
          ) {
            const e = this.customFieldsModel.getCustomFieldsInputValues();
            return (
              this._getAndSendStatistics(),
              this._handler(this.position.id, s, e)
            );
          }
          return (
            this._getAndSendStatistics(), this._handler(this.position.id, s)
          );
        }
        _getAndSendStatistics() {
          const e = this.stopLossModel.getEnabled(),
            t = this.stopLossModel.getFocusedControl(),
            i = this.takeProfitModel.getEnabled(),
            s = this.takeProfitModel.getFocusedControl(),
            r = this.stopLossModel && this.stopLossModel.getBracketType(),
            o = ["Pips", "Price", "RiskInCurrency", "RiskInPercent"],
            n = [" Disabled", " Active"],
            a = ["StopLoss", "TakeProfit", "TrailingStop"],
            l = {
              SL: { active: n[+e], mode: o[t] },
              TP: { active: n[+i], mode: o[s] },
            };
          this.supportTrailingStop() &&
            (l.SLType = {
              active: n[+e],
              mode: a[r],
            });
          const d = this._getSettings();
          Object.keys(d)
            .filter((e) =>
              ["showBracketsInCurrency", "showBracketsInPercent"].includes(e)
            )
            .forEach((e) => {
              this._trackEvent("Order Ticket", e, d[e] ? "on" : "off");
            }),
            Object.keys(l).forEach((e) => {
              l[e].active && this._trackEvent("Position Ticket", e, l[e].mode);
            });
        }
        _positionOrIndividualPositionUpdate(e) {
          !this._isVisible() ||
            this._loading$.getValue() ||
            e.id !== this.position.id ||
            (0 !== e.qty && this.position.side === e.side) ||
            (this._getDisplayMode() === A.OrderEditorDisplayMode.Popup
              ? this.headerModel.close()
              : this._back());
        }
        _closeWidget() {
          this.onDoneButtonClicked.resolve(!1),
            this._onCloseButtonClicked.fire();
        }
        _back() {
          this.onDoneButtonClicked.resolve(!1),
            this._onBackButtonClicked.fire();
        }
      }
      var wt = i(148296);
      class Tt {
        constructor(e) {
          (this._brokerId = ""), (this._settingsAdapter = e);
        }
        setBrokerId(e) {
          this._brokerId = e;
        }
        saveSettings(e) {
          this._settingsAdapter.setValue(
            this._makeKey(wt.settingsKeys.ORDER_PANEL_SETTINGS, this._brokerId),
            JSON.stringify(e)
          );
        }
        getSettings() {
          const e = this._settingsAdapter.getValue(
            this._makeKey(wt.settingsKeys.ORDER_PANEL_SETTINGS, this._brokerId)
          );
          try {
            return JSON.parse(e);
          } catch {
            return null;
          }
        }
        setWidgetMode(e) {
          this._settingsAdapter.setValue(wt.settingsKeys.ORDER_WIDGET_MODE, e);
        }
        widgetMode() {
          const e = this._settingsAdapter.getValue(
            wt.settingsKeys.ORDER_WIDGET_MODE
          );
          return e || null;
        }
        _makeKey(e, t, i) {
          return e + t + ("string" == typeof i ? "." + i : "");
        }
      }
      var Bt,
        Ot = i(932100),
        Mt = i(227915),
        It = i(145367),
        Et = i(895318),
        Dt = i(403933),
        Vt = i(804748),
        $t = i(240534);
      !(function (e) {
        let t = 0;
        const i = new $t.WatchedValue(!1);
        (e.value = i.readonly()),
          (e.wrap = function (e) {
            return async (...s) => {
              i.setValue(!0), t++;
              try {
                return await e(...s);
              } finally {
                t--, i.setValue(0 !== t);
              }
            };
          });
      })(Bt || (Bt = {}));
      const Lt = {
          [It.PlaceOrEditContextType.PlaceOrder]: A.OrderPanelStatus.Active,
          [It.PlaceOrEditContextType.EditOrder]: A.OrderPanelStatus.Editing,
          [It.PlaceOrEditContextType.EditPosition]: A.OrderPanelStatus.Editing,
          [It.PlaceOrEditContextType.EditIndividualPosition]:
            A.OrderPanelStatus.Editing,
        },
        xt = (0, p.getLogger)("Trading.OrderViewController");
      function At() {
        return Promise.all([
          i.e(5127),
          i.e(5480),
          i.e(9296),
          i.e(2106),
          i.e(303),
          i.e(422),
          i.e(9642),
          i.e(8473),
          i.e(7935),
          i.e(4797),
          i.e(3828),
          i.e(6243),
          i.e(6750),
          i.e(3062),
          i.e(4938),
          i.e(1249),
          i.e(7280),
          i.e(5881),
          i.e(4920),
          i.e(5758),
          i.e(8146),
          i.e(2849),
          i.e(2743),
          i.e(1728),
          i.e(1553),
          i.e(7125),
          i.e(8524),
          i.e(1191),
          i.e(1456),
          i.e(218),
          i.e(7502),
        ]).then(i.bind(i, 214651));
      }
      function Rt() {
        return Promise.all([
          i.e(7226),
          i.e(5480),
          i.e(9296),
          i.e(2106),
          i.e(303),
          i.e(422),
          i.e(9642),
          i.e(4797),
          i.e(6243),
          i.e(3062),
          i.e(4938),
          i.e(1249),
          i.e(5881),
          i.e(8146),
          i.e(2590),
          i.e(1553),
          i.e(7125),
          i.e(1191),
          i.e(1456),
          i.e(218),
          i.e(8751),
        ]).then(i.bind(i, 562152));
      }
      const Ft = "order-ticket",
        Nt = !1;
      function qt(e) {
        if (0 === e.length) return null;
        const t = new Set(e.flatMap((e) => (e.saveToSettings ? e.id : [])));
        return 0 !== t.size ? t : null;
      }
      class Qt {
        constructor(e) {
          (this._orderViewModel = null),
            (this._positionViewModel = null),
            (this._dialogVisibility = new Vt.DialogVisibility()),
            (this._orderWidgetStat = null),
            (this._stopSubscriptions$ = new o.Subject()),
            (this._isOrderSizeCalculatorEnabled = !1),
            (this._settings$ = new n.BehaviorSubject(Et.defaultSettings)),
            (this._mode$ = new n.BehaviorSubject(
              A.OrderEditorDisplayMode.Panel
            )),
            (this.openPanel = async () => {
              try {
                await this.closeDialogs(),
                  this._setDisplayMode(A.OrderEditorDisplayMode.Panel),
                  this._openTradingPanelPage(Ot.TradingPage.OrderPanel);
                const e =
                  void 0 !== this._tradedContextLinking
                    ? this._tradedContextLinking.context()?.data()
                    : void 0;
                await this._recreateOrderViewModel(null, e),
                  await this._openOrderPanel(
                    this._getDefaultOrderTicketFocus()
                  );
              } catch (e) {
                xt.logWarn(
                  `Failed to open panel: ${(0, y.getLoggerMessage)(e)}`
                ),
                  this._closePanel();
              }
            }),
            (this.closePanel = () => {
              this.getDisplayMode() === A.OrderEditorDisplayMode.Panel &&
                this._closePanel();
            }),
            (this.openOrderDialog = async () => {
              try {
                await this.closeDialogs(),
                  Nt
                    ? this._setDisplayMode(
                        A.OrderEditorDisplayMode.ResizableDrawer
                      )
                    : this._setDisplayMode(A.OrderEditorDisplayMode.Popup);
                const e =
                  void 0 !== this._tradedContextLinking
                    ? this._tradedContextLinking.context()?.data()
                    : void 0;
                await this._recreateOrderViewModel(null, e),
                  this.getDisplayMode() ===
                  A.OrderEditorDisplayMode.ResizableDrawer
                    ? this._showOrderDrawer()
                    : this._showOrderDialog();
              } catch (e) {
                xt.logWarn(
                  `Failed to open order dialog: ${(0, y.getLoggerMessage)(e)}`
                ),
                  this.closeDialogs();
              }
            }),
            (this.closeDialogs = async () => {
              this._unsubscribeViewModels(),
                await this._closeOrderDialog(),
                await this._closePositionDialog();
            }),
            (this.closeOrderView = () => {
              this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                ? this._closePanel()
                : this.closeDialogs();
            }),
            (this.isOrderDialogVisible = () =>
              null === this._positionViewModel &&
              !!this._dialogVisibility.getValue().isVisible),
            (this.getDisplayMode = () => this._mode$.getValue()),
            (this.resetQuantityFocusToUnits = () => {
              this._isOrderSizeCalculatorEnabled &&
                this._orderViewModel?.quantityModel instanceof Ne &&
                "units" !== this._orderViewModel.quantityModel.getInputType() &&
                this._orderViewModel.quantityModel.setInputTypeAndValue(
                  "units",
                  this._orderViewModel.quantityModel.getValue()
                );
            }),
            (this._onActiveTradingPanelChanged = (e) => {
              e !== Ot.TradingPage.OrderPanel &&
                (null !== this._positionViewModel &&
                  (this._unmountPositionPanel(),
                  this._unsubscribePositionViewModel()),
                null !== this._orderViewModel &&
                  this.getDisplayMode() === A.OrderEditorDisplayMode.Panel &&
                  (this._orderViewModel.existingOrder &&
                    this._orderViewModel.onDoneButtonClicked.resolve(!1),
                  this._unmountOrderPanel(),
                  this._unsubscribeOrderViewModel()));
            }),
            (this._onStatusChanged = async (e) => {
              try {
                const t = this._state,
                  i = this._makeState();
                (i.symbol === t.symbol &&
                  i.broker === t.broker &&
                  i.accountId === t.accountId &&
                  i.isAuthenticated === t.isAuthenticated) ||
                  (this._unsubscribeViewModels(),
                  (this._state = i),
                  this._setSettings(),
                  await this._closeOrderDialog(),
                  await this._closePositionDialog(),
                  !e?.aborted &&
                    this._isTradingPanelOpened.value() &&
                    this.getDisplayMode() === A.OrderEditorDisplayMode.Panel &&
                    this._tradingPanelActivePage.value() ===
                      Ot.TradingPage.OrderPanel &&
                    (await this._recreateOrderViewModel(e),
                    this._deactivateOrderTicket(),
                    this._openOrderPanel()));
              } catch (e) {
                xt.logWarn(
                  `Failed to change status: ${(0, y.getLoggerMessage)(e)}`
                );
              }
            }),
            (this._recreateOrderViewModel = async (e, t) => {
              this._unsubscribeViewModels(),
                (this._orderStub = t ?? this._createOrderStub());
              const { broker: i, symbol: s, side: o } = this._state;
              let n = null;
              if (null === i)
                n = new Pt({
                  ...this._commonOrderViewModelProps(),
                  adapter: i,
                  isTradable: { tradable: !1 },
                  sendHandler: () => Promise.resolve(!0),
                  previewHandler: async () => ({ sections: [] }),
                });
              else {
                const a = await (0, He.respectAbort)(e, i.isTradable(s));
                let l = i.placeOrder.bind(i);
                void 0 !== this._tradedContextLinking &&
                  (l = async (e, t) => {
                    const i = (0, r.ensureDefined)(
                      this._tradedContextLinking,
                      "Recreate order view model: Trade context linking"
                    );
                    return (0, r.ensureNotNull)(
                      i.context(),
                      "Recreate order view model: Place order handler trade context"
                    )
                      .send(t)
                      .finally(() => i.clear());
                  });
                const d = this._orderStub.hasOwnProperty("id")
                    ? i.modifyOrder.bind(i)
                    : l,
                  u = async (e) => {
                    const t = this._tradedContextLinking?.context();
                    return t?.type === It.PlaceOrEditContextType.PlaceOrder
                      ? t.preview()
                      : i.previewOrder(e);
                  };
                let c = null;
                a.tradable &&
                  (c =
                    t?.type ??
                    this._getTradingSettingsStorage()?.orderType(s) ??
                    (0, R.getDefaultOrderType)(i.config) ??
                    null);
                const h = await (0, He.respectAbort)(
                    e,
                    i.getOrderDialogOptions(s)
                  ),
                  p = void 0 !== h?.customFields ? qt(h.customFields) : null;
                this._setState({ orderType: c, savableCustomFields: p });
                const _ = this._makeOrderViewInputState(s, c, o, p),
                  g =
                    void 0 !== t &&
                    (function (e) {
                      return e.hasOwnProperty("id");
                    })(t)
                      ? this._getOrderById(t.id)
                      : null;
                n = new Pt({
                  ...this._commonOrderViewModelProps(),
                  adapter: i,
                  isTradable: a,
                  sendHandler: d,
                  previewHandler: u,
                  orderViewInputState: _,
                  orderDialogOptions: h,
                  existingPlacedOrder: g,
                });
              }
              (this._orderViewModel = n), this._subscribeOrderViewModel();
              const [a = null] = await (0, He.respectAbort)(
                e,
                Promise.all([
                  this._orderPresetsManager
                    ?.createConsumer(s)
                    .then((t) => (e?.aborted ? (t?.destroy(), null) : t)),
                  n.onReady,
                ])
              );
              if (this._orderViewModel !== n)
                return (
                  this._unsubscribeViewModels(),
                  Promise.reject(
                    "OrderViewModel was recreated during the initialization"
                  )
                );
              (this._orderPresetsManagerConsumer = a),
                this._orderViewHeaderState.setOrderPresetsManagerConsumer(a),
                this._placeOrderAbortController?.abort(),
                (this._placeOrderAbortController = new AbortController()),
                this._updateTradedContextLinking(
                  this._placeOrderAbortController.signal
                );
            }),
            (this._updateTradedContextLinking = async (e) => {
              if (
                !(
                  null === this._state.broker ||
                  void 0 === this._tradedContextLinking ||
                  null === this._orderViewModel ||
                  this._orderViewModel.existingOrder ||
                  this._orderViewModel.getStatus() ===
                    A.OrderPanelStatus.Wait ||
                  void 0 === this._orderViewModel.side() ||
                  null === this._orderViewModel.quantityModel.getValue() ||
                  (void 0 === this._orderViewModel.preOrder().limitPrice &&
                    void 0 === this._orderViewModel.preOrder().stopPrice &&
                    2 !== this._orderViewModel.preOrder().type)
                )
              )
                try {
                  if (
                    this._orderViewModel.getStatus() === A.OrderPanelStatus.Wait
                  )
                    return;
                  const t = await (0, He.respectAbort)(
                    e,
                    this._state.broker.createPlaceOrderContext({
                      order: this._orderViewModel.preOrder(),
                      source: Ft,
                      signal: e,
                    })
                  );
                  if (e?.aborted) return;
                  this._tradedContextLinking.setContext(t),
                    this._setErrorsState(t.errors());
                } catch (e) {
                  (0, He.skipAbortError)(e);
                }
            }),
            (this._updateOrderValues = (e) => {
              if (null === this._orderViewModel) return;
              const {
                duration: t,
                limitPrice: i,
                type: s,
                qty: r,
                side: o,
                stopPrice: n,
                stopLoss: a,
                takeProfit: l,
                stopType: d,
                trailingStopPips: u,
                guaranteedStop: c,
              } = e;
              void 0 !== i &&
                this._orderViewModel.limitPriceModel.setPriceValue(i),
                void 0 !== n &&
                  this._orderViewModel.stopPriceModel.setPriceValue(n),
                this._orderViewModel.sideModel.getValue() !== o &&
                  this._orderViewModel.sideModel.setValue(o),
                this._orderViewModel.getOrderType() !== s &&
                  this._orderViewModel.setOrderType(s),
                this._orderViewModel.quantityModel.quantity.getValue() !== r &&
                  this._orderViewModel.quantityModel.quantity.setValue(r),
                this._orderViewModel.durationModel.getValue() !== t &&
                  this._orderViewModel.durationModel.setValue(t ?? null, s),
                void 0 !== this._orderViewModel.stopLossModel &&
                  this._updateStopLossValues({
                    stopLossModel: this._orderViewModel.stopLossModel,
                    stopLoss: a,
                    trailingStopPips: u,
                    guaranteedStop: c,
                    stopType: d,
                  }),
                void 0 !== this._orderViewModel.takeProfitModel &&
                  this._updateTakeProfitValues(
                    this._orderViewModel.takeProfitModel,
                    l
                  );
            }),
            (this._applyOrderTemplate = (e) => {
              const {
                type: t,
                duration: i,
                limitPrice: s,
                limitPriceOffset: r,
                stopPrice: o,
                stopPriceOffset: n,
                takeProfit: a,
                takeProfitPips: l,
                takeProfitRiskInPercent: d,
                stopLoss: u,
                stopLossPips: c,
                stopLossRiskInPercent: h,
                trailingStopPips: p,
                guaranteedStop: _,
                symbol: g,
                stopType: b,
              } = e;
              if (
                null === this._orderViewModel ||
                g !== this._orderViewModel.symbol
              )
                return;
              const {
                limitPriceModel: y,
                stopPriceModel: m,
                takeProfitModel: v,
                stopLossModel: f,
                durationModel: P,
                setOrderType: k,
              } = this._orderViewModel;
              void 0 !== t && (k(t), i && P.setValue(i, t)),
                (3 !== t && 4 !== t) ||
                  m.setPriceValues({ price: o, offset: n }),
                (1 !== t && 4 !== t) ||
                  y.setPriceValues({ price: s, offset: r }),
                v?.setEnabled(!1),
                v?.setBracketValues({ pips: l, price: a, riskInPercent: d }),
                f?.setEnabled(!1),
                f?.setBracketValues({
                  pips: p || c,
                  price: _ || u,
                  riskInPercent: h,
                }),
                f?.getEnabled() &&
                  f.setBracketType(
                    ee.makeInitialSLBracketType({
                      riskInPercent: h,
                      trailingStopPips: p,
                      stopLossPips: c,
                      guaranteedStop: _,
                      stopLoss: u,
                      stopType: b,
                      supportStopLoss: this._brokerConfigFlags?.supportStopLoss,
                      supportGuaranteedStop:
                        this._brokerConfigFlags?.supportGuaranteedStop,
                      supportTrailingStop:
                        this._brokerConfigFlags?.supportTrailingStop,
                    })
                  );
            }),
            (this._onOrderWidgetModeChanged = async (e) => {
              const t = this._getDefaultOrderTicketFocus();
              e === A.OrderEditorDisplayMode.Panel
                ? (this._orderViewHeaderState.setFocusedControl(0),
                  await this._closeOrderDialog(),
                  await this._openOrderPanel())
                : e === A.OrderEditorDisplayMode.Popup
                ? (this._orderViewHeaderState.setFocusedControl(0),
                  await this._closeOrderPanel(),
                  this._activateOrderTicket(),
                  await this._showOrderDialog())
                : (this._orderViewHeaderState.setFocusedControl(void 0),
                  await this._showOrderDrawer(t)),
                this._saveWidgetMode(e);
            }),
            (this._onOrderWidgetInputStateChanged = (e) => {
              this._updateTradedContextLinking(
                this._placeOrderAbortController?.signal ?? null
              );
              const { symbol: t, orderType: i } = this._state;
              if (
                ((0, R.isDefined)(e.side) && this._setState({ side: e.side }),
                !(0, R.isDefined)(i))
              )
                return;
              const o = this._getTradingSettingsStorage();
              if (null === o) return;
              const n = (0, r.ensureNotNull)(
                this._orderViewModel,
                "Order View Model"
              ).existingOrder;
              if (
                ((0, R.isDefined)(e.quantity) && o.setSymbolQty(t, e.quantity),
                this._isOrderSizeCalculatorEnabled &&
                  !n &&
                  (0, R.isDefined)(e.orderSizeCalculatorQuantityType) &&
                  o.setOrderSizeCalculatorQuantityType(
                    t,
                    e.orderSizeCalculatorQuantityType
                  ),
                this._isOrderSizeCalculatorEnabled &&
                  (0, R.isDefined)(e.lastRiskQuantityType) &&
                  s.setValue(
                    wt.settingsKeys.LAST_RISK_QUANTITY_TYPE,
                    e.lastRiskQuantityType
                  ),
                this._isOrderSizeCalculatorEnabled &&
                  (0, R.isDefined)(e.lastUsedQuantityType) &&
                  o.setLastUsedQuantityType(t, e.lastUsedQuantityType),
                this._isOrderSizeCalculatorEnabled &&
                  (0, R.isDefined)(e.orderSizeCalculatorValue) &&
                  o.setOrderSizeCalculatorValue(t, e.orderSizeCalculatorValue),
                (0, R.isDefined)(e.takeProfitPips) &&
                  o.setTakeProfitPips(
                    t,
                    e.takeProfitPips,
                    A.BracketDefaultPips.TakeProfit
                  ),
                (0, R.isDefined)(e.stopLossPips) &&
                  o.setStopLossPips(
                    t,
                    e.stopLossPips,
                    A.BracketDefaultPips.StopLoss
                  ),
                (0, R.isDefined)(e.orderType) && o.setOrderType(t, e.orderType),
                (0, R.isDefined)(e.duration))
              ) {
                const t =
                    this._state.broker &&
                    this._state.broker.metainfo().durations,
                  s = t && (t.find((e) => e.default) || t[0]),
                  r = s && s.name === e.duration.type ? null : e.duration;
                o.setDuration(this._state.symbol, i, r);
              }
              if (
                (0, R.isDefined)(e.customFields) &&
                null !== this._state.savableCustomFields
              ) {
                const s = (function (e, t) {
                  const i = { ...e };
                  if (void 0 === t) return i;
                  for (const e of Object.keys(i)) t.has(e) || delete i[e];
                  return i;
                })(e.customFields, this._state.savableCustomFields);
                o.setCustomFields(t, i, s);
              }
            }),
            (this._onOrderWidgetCloseButtonClicked = () => {
              this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                ? this._closePanel()
                : (this._closeOrderDialog(), this._unsubscribeViewModels());
            }),
            (this._onOrderWidgetStatusChanged = (e) => {
              const t =
                e === A.OrderPanelStatus.Editing &&
                null !== this._tradedContextLinking?.context();
              (e === A.OrderPanelStatus.Wait || t) &&
                (this._updateTradedContextLinking(null),
                this._tradedContextLinking?.setContext(null)),
                e === A.OrderPanelStatus.Active &&
                  void 0 !== this._placeOrderAbortController &&
                  this._updateTradedContextLinking(
                    this._placeOrderAbortController.signal
                  );
            }),
            (this._onOrderWidgetBackButtonClicked = () => {
              if (
                this._orderViewModel &&
                this._orderViewModel.getStatus() === A.OrderPanelStatus.Preview
              ) {
                this._activateOrderTicket();
                const e = this._getDefaultOrderTicketFocus();
                this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                  ? this._openOrderPanel(e)
                  : this.getDisplayMode() === A.OrderEditorDisplayMode.Popup
                  ? this._showOrderDialog(e)
                  : this._showOrderDrawer(e);
              } else
                this.showOrderView({
                  order: this._createOrderStub(),
                  isDeactivated: !0,
                });
            }),
            (this._onPositionWidgetModeChanged = async (e) => {
              e === A.OrderEditorDisplayMode.ResizableDrawer
                ? await this._showPositionDrawer()
                : e === A.OrderEditorDisplayMode.Panel
                ? (await this._closePositionDialog(),
                  await this._openPositionPanel())
                : (await this._closePositionPanel(),
                  this._activateOrderTicket(),
                  await this._showPositionDialog()),
                this._saveWidgetMode(e);
            }),
            (this._onPositionWidgetBackButtonClicked = () => {
              this._unmountPositionPanel(),
                this._unsubscribePositionViewModel(),
                this.showOrderView({
                  order: this._createOrderStub(),
                  isDeactivated: !0,
                });
            }),
            (this._onPositionWidgetCloseButtonClicked = () => {
              this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                ? this._closePanel()
                : (this._closePositionDialog(), this._unsubscribeViewModels());
            }),
            (this._isVisible = () =>
              this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                ? this._isTradingPanelOpened.value()
                : this._dialogVisibility.getValue().isVisible),
            (this._onOrderTypeChanged = (e) => {
              this._setState({ orderType: e });
            }),
            (this._toggleMode = () => {
              this._setDisplayMode(
                this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                  ? A.OrderEditorDisplayMode.Popup
                  : A.OrderEditorDisplayMode.Panel
              );
            }),
            (this._getSettings = () => this._settings$.getValue()),
            (this._toggleSettings = (e) => {
              const t = this._getSettings();
              this._settings$.next({ ...t, [e]: !t[e] });
            }),
            (this._handleSymbolChange = () => {
              this._symbolChangePromise = this._onStatusChanged(null);
            }),
            (this._unsubscribeViewModels = () => {
              null !== this._positionViewModel &&
                (this._positionViewModel.onDoneButtonClicked.resolve(!1),
                this._unsubscribePositionViewModel()),
                null !== this._orderViewModel &&
                  (this._orderViewModel.existingOrder &&
                    this._orderViewModel.onDoneButtonClicked.resolve(!1),
                  this._unsubscribeOrderViewModel());
            }),
            (this._closePanel = () => {
              null !== this._positionViewModel &&
                (this._positionViewModel.onDoneButtonClicked.resolve(!1),
                this._unmountPositionPanel(),
                this._unsubscribePositionViewModel()),
                null !== this._orderViewModel &&
                  (this._orderViewModel.existingOrder &&
                    this._orderViewModel.onDoneButtonClicked.resolve(!1),
                  this._unmountOrderPanel(),
                  this._unsubscribeOrderViewModel()),
                this._closeTradingPanel();
            }),
            (this._handleKeyDown = (e) => {
              if (
                this.getDisplayMode() === A.OrderEditorDisplayMode.Panel &&
                27 === (0, _.hashFromEvent)(e)
              ) {
                const { activeElement: e } = document;
                if (null !== e && (0, g.isTextEditingField)(e))
                  return void this._rootContainer.focus();
                if (this._rootContainer?.contains(e))
                  return void this.closePanel();
              }
            });
          const {
            tradingCommands: t,
            tradingPanelCommands: i,
            qtySuggester: a,
            tradingLinking: l,
            orderViewHeaderState: d,
            tradedContextLinking: u,
            orderPresetsManager: c,
            orderByIdGetter: h,
          } = e;
          if (
            ((this._orderPresetsManager = c),
            (this._orderViewHeaderState = d),
            c &&
              this._orderViewHeaderState.setOrderTemplateApplicationFunction(
                this._applyOrderTemplate
              ),
            (this._updateTradedContextLinking = (0, He.respectLatest)(
              this._updateTradedContextLinking
            )),
            (this._tradingCommands = t),
            (this._trackEvent = t.trackEvent),
            (this._realtimeProvider = t.realtimeProvider),
            (this._brokerConfigFlags = this._realtimeProvider
              .activeBroker()
              ?.metainfo().configFlags),
            (this._orderViewDataStorage = new Tt(s)),
            (this._rootContainer = i.rootContainer),
            (this._tradingPanelContainer = i.container),
            (this._isOpeningTradingPanelAvailable$ = (0,
            Mt.makeObservableFromWatchedValue)(i.isOpeningAvailable)),
            (this._isTradingPanelOpened = i.isOpened),
            (this._qtySuggester = a),
            (this._tradingLinking = l),
            (this._tradingPanelActivePage = i.activePage),
            (this._closeTradingPanel = i.close),
            (this._openTradingPanelPage = i.openPage),
            (this._getTradingSettingsStorage = t.getTradingSettingsStorage),
            (this.dialogVisibility = this._dialogVisibility.value$),
            Nt)
          )
            this._setDisplayMode(A.OrderEditorDisplayMode.ResizableDrawer);
          else if (window.matchMedia(Dt.TradingLayoutBreakpoint.Mobile).matches)
            this._setDisplayMode(A.OrderEditorDisplayMode.Popup);
          else if (b.enabled("order_panel")) {
            const e = this._orderViewDataStorage.widgetMode();
            this._setDisplayMode(e ?? A.OrderEditorDisplayMode.Panel);
          } else this._setDisplayMode(A.OrderEditorDisplayMode.Popup);
          i.isOpeningAvailable.subscribe((e) => {
            e ||
              this.getDisplayMode() !== A.OrderEditorDisplayMode.Panel ||
              this._setDisplayMode(A.OrderEditorDisplayMode.Popup);
          }),
            (this._state = this._makeState()),
            (this.stateChanging = Bt.value),
            (this._onStatusChanged = (0, He.respectLatest)(
              this._onStatusChanged
            )),
            (this._recreateOrderViewModel = Bt.wrap(
              (0, He.respectLatest)(this._recreateOrderViewModel)
            )),
            (this.openPanel = Bt.wrap(this.openPanel)),
            this._realtimeProvider.onStatusChanged.subscribe(null, () =>
              this._onStatusChanged(null)
            ),
            this._tradingLinking
              .valueObservable()
              .subscribe(this._handleSymbolChange),
            window.loginStateChange &&
              window.loginStateChange.subscribe(this, () =>
                this._onStatusChanged(null)
              ),
            i.activePage.subscribe(this._onActiveTradingPanelChanged),
            (this._tradedContextLinking = u),
            i.rootContainer.addEventListener("keydown", this._handleKeyDown, {
              capture: !1,
            }),
            (this._getOrderById = h);
        }
        async showOrderView(e) {
          try {
            const {
              order: t,
              focus: i,
              forceOrderDialog: s,
              isDeactivated: o = !1,
              forceCollapsedOrderDrawer: n = !1,
              shouldOpenOrderTicket: a = !0,
            } = e;
            0,
              await this.closeDialogs(),
              !Nt && s && this._setDisplayMode(A.OrderEditorDisplayMode.Popup);
            const l = Object.assign(this._createOrderStub(), t);
            t.symbol !== this._state.symbol &&
              this._setState({ symbol: t.symbol }),
              await this._recreateOrderViewModel(null, l),
              o && this._deactivateOrderTicket();
            const d = i ?? this._getDefaultOrderTicketFocus();
            return (
              this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                ? this._openOrderPanel(d)
                : this.getDisplayMode() === A.OrderEditorDisplayMode.Popup
                ? this._showOrderDialog(d)
                : this._showOrderDrawer(d, n),
              await (0, r.ensureNotNull)(this._orderViewModel)
                .onDoneButtonClicked.promise
            );
          } catch (e) {
            return (
              xt.logWarn(
                `Failed to show order view: ${(0, y.getLoggerMessage)(e)}`
              ),
              !1
            );
          }
        }
        async showPositionView(e, t, i) {
          try {
            return (
              await this._symbolChangePromise,
              await this._createAndShowPositionViewModel({
                position: e,
                viewType: St.Position,
                brackets: t,
                focus: i,
              })
            );
          } catch (e) {
            return (
              xt.logWarn(
                `Failed to show position view: ${(0, y.getLoggerMessage)(e)}`
              ),
              !1
            );
          }
        }
        async showIndividualPositionView(e, t, i) {
          try {
            return (
              await this._symbolChangePromise,
              await this._createAndShowPositionViewModel({
                position: e,
                viewType: St.IndividualPosition,
                brackets: t,
                focus: i,
              })
            );
          } catch (e) {
            return (
              xt.logWarn(
                `Failed to show individual position view: ${(0,
                y.getLoggerMessage)(e)}`
              ),
              !1
            );
          }
        }
        orderTicketSettings() {
          return this._settings$.value;
        }
        setOrderTicketSetting(e) {
          this._orderViewDataStorage.saveSettings(e), this._setSettings();
        }
        _setState(e) {
          this._state = { ...this._state, ...e };
        }
        _setDisplayMode(e) {
          this._mode$.next(e), this._saveWidgetMode(e);
        }
        _makeState() {
          const e = window.is_authenticated,
            t = this._tradingLinking.value().symbol || "",
            i = this._realtimeProvider.activeBroker(),
            s = i?.metainfo().configFlags,
            r = void 0 !== s ? (0, R.getDefaultOrderType)(s) : null,
            o = this._orderViewModel?.getOrderType() ?? r ?? null,
            n = i?.currentAccount() ?? null,
            a = i ? i.metainfo().id : "";
          return (
            this._orderViewDataStorage.setBrokerId(a),
            {
              isAuthenticated: e,
              broker: i,
              symbol: t,
              accountId: n,
              side: 1,
              orderType: o,
              savableCustomFields: null,
            }
          );
        }
        async _createAndShowPositionViewModel({
          position: e,
          viewType: t,
          brackets: i,
          focus: s,
        }) {
          await this.closeDialogs(),
            e.symbol !== this._state.symbol &&
              this._setState({ symbol: e.symbol });
          const { broker: r, symbol: o } = this._state,
            n = r ? await r.isTradable(o) : null;
          if (null === r || null === n || !n.tradable)
            return (
              await this.showOrderView({ order: this._createOrderStub() }), !1
            );
          const a = await r.getOrderDialogOptions(o),
            l = void 0 !== a?.customFields ? qt(a.customFields) : void 0;
          this._setState({ savableCustomFields: l });
          const d =
              t === St.Position
                ? r.editPositionBrackets.bind(r)
                : r.editIndividualPositionBrackets.bind(r),
            u = new Ct({
              adapter: r,
              position: e,
              brackets: i,
              settings$: this._settings$,
              displayMode$: this._mode$,
              realtimeProvider: this._tradingCommands.realtimeProvider,
              isUndockAllowed$: this._isOpeningTradingPanelAvailable$,
              isVisible: this._isVisible,
              toggleMode: this._toggleMode,
              getDisplayMode: this.getDisplayMode,
              toggleSettings: this._toggleSettings,
              getSettings: this._getSettings,
              viewType: t,
              pipValueType$: this._tradingCommands.pipValueType$,
              handler: d,
              trackEvent: this._tradingCommands.trackEvent,
              orderDialogOptions: a,
              headerState: this._orderViewHeaderState,
            });
          return (
            (this._positionViewModel = u),
            await this._positionViewModel.onReady,
            this._positionViewModel !== u
              ? Promise.reject(
                  "PositionViewModel was recreated during the initialization"
                )
              : (this._subscribePositionViewModel(),
                this.getDisplayMode() ===
                A.OrderEditorDisplayMode.ResizableDrawer
                  ? this._showPositionDrawer()
                  : this.getDisplayMode() === A.OrderEditorDisplayMode.Panel
                  ? this._openPositionPanel(s)
                  : this._showPositionDialog(s),
                this._positionViewModel.onDoneButtonClicked.promise)
          );
        }
        _setSettings() {
          if (null === this._state.broker) return;
          this._settingsSubscription?.unsubscribe();
          let e = Object.assign(
            {},
            Et.defaultSettings,
            this._orderViewDataStorage.getSettings()
          );
          this._state.broker.metainfo().configFlags.supportCryptoBrackets &&
            (e = Object.assign({}, Et.defaultCryptoBracketsSettings, e)),
            this._settings$.next(e),
            (this._settingsSubscription = this._settings$.subscribe((e) =>
              this._orderViewDataStorage.saveSettings(e)
            ));
        }
        _createOrderStub() {
          return {
            limitPrice: void 0,
            stopPrice: void 0,
            qty: void 0,
            side: void 0,
            symbol: this._state.symbol,
            type: void 0,
            takeProfit: void 0,
            stopLoss: void 0,
          };
        }
        _activateOrderTicket() {
          this._orderViewModel?.activateOrderTicket();
        }
        _deactivateOrderTicket() {
          this._orderViewModel?.deactivateOrderTicket();
        }
        _handleTradedContextChange(e) {
          null !== this._orderViewModel &&
            (null !== e
              ? e.source() !== Ft &&
                (this._orderViewModel.setLoading(
                  e.status() === It.PlaceOrEditContextStatus.Loading
                ),
                this._orderViewModel.setStatus(Lt[e.type]),
                this._updateOrderValues(e.data()),
                this._setErrorsState(e.errors()))
              : this._orderViewModel.getStatus() !==
                  A.OrderPanelStatus.Editing &&
                this._orderViewModel.resetOrderPanel());
        }
        _setErrorsState(e) {
          if (null === this._orderViewModel) return;
          const t = e.stopLoss || e.trailingStopPips || e.guaranteedStop;
          e.limitPrice
            ? this._orderViewModel.limitPriceModel.setControlError(
                !0,
                (0, y.getErrorMessage)(e.limitPrice)
              )
            : this._orderViewModel.limitPriceModel.setControlError(!1),
            void 0 !== e.stopPrice
              ? this._orderViewModel.stopPriceModel.setControlError(
                  !0,
                  (0, y.getErrorMessage)(e.stopPrice)
                )
              : this._orderViewModel.stopPriceModel.setControlError(!1),
            void 0 !== e.qty
              ? this._orderViewModel.quantityModel.setControlError(
                  !0,
                  (0, y.getErrorMessage)(e.qty)
                )
              : this._orderViewModel.quantityModel.setControlError(!1),
            t
              ? this._orderViewModel.stopLossModel?.setControlError(
                  !0,
                  (0, y.getErrorMessage)(t)
                )
              : this._orderViewModel.stopLossModel?.setControlError(!1),
            e.takeProfit
              ? this._orderViewModel.takeProfitModel?.setControlError(
                  !0,
                  (0, y.getErrorMessage)(e.takeProfit)
                )
              : this._orderViewModel.takeProfitModel?.setControlError(!1);
        }
        _updateTakeProfitValues(e, t) {
          const i = void 0 !== t;
          e.getEnabled() !== i && e.setEnabled(void 0 !== t),
            i && 1 !== e.getFocusedControl() && e.setFocusedControl(1);
          const s = t ?? null;
          i && e.price.getValue() !== s && e.price.setValue(s);
        }
        _updateStopLossValues(e) {
          const {
              stopLossModel: t,
              stopLoss: i,
              trailingStopPips: s,
              guaranteedStop: r,
              stopType: o,
            } = e,
            n = void 0 !== i || void 0 !== s || void 0 !== r;
          t.getEnabled() !== n && t.setEnabled(n),
            void 0 !== o &&
              t.getBracketType() !== (0, R.getBracketTypeByStopType)(o) &&
              t.setBracketType((0, R.getBracketTypeByStopType)(o));
          const a = void 0 !== s ? 0 : 1;
          n && t.getFocusedControl() !== a && t.setFocusedControl(a),
            void 0 !== i && t.price.getValue() !== i && t.price.setValue(i),
            void 0 !== r && t.price.getValue() !== r && t.price.setValue(r),
            void 0 !== s && t.pips.getValue() !== s && t.pips.setValue(s);
        }
        async _openOrderPanel(e) {
          await this._mountOrderPanel(e),
            this._openTradingPanelPage(Ot.TradingPage.OrderPanel);
        }
        async _mountOrderPanel(e) {
          const { mountOrderPanel: t } = await At();
          null !== this._orderViewModel &&
            t({
              viewModel: this._orderViewModel,
              settings$: this._settings$,
              mode: this.getDisplayMode(),
              resizerBridgeElement: this._tradingPanelContainer,
              focus: e,
              trackEvent: this._trackEvent,
            });
        }
        async _closeOrderPanel() {
          await this._unmountOrderPanel(), this._closeTradingPanel();
        }
        async _unmountOrderPanel() {
          const { unmountOrderPanel: e } = await At();
          e((0, r.ensureNotNull)(this._tradingPanelContainer));
        }
        async _showOrderDialog(e) {
          const { showOrderDialog: t } = await At();
          null !== this._orderViewModel &&
            t({
              viewModel: this._orderViewModel,
              settings$: this._settings$,
              mode: this.getDisplayMode(),
              focus: e,
              trackEvent: this._trackEvent,
              onOpen: (e) => {
                this._dialogVisibility.setValue({
                  isVisible: !0,
                  isFullScreen: e,
                });
              },
              onClose: () => {
                this._dialogVisibility.setValue({ isVisible: !1 }),
                  this._orderViewModel?.onDoneButtonClicked.resolve(!1),
                  this._unsubscribeViewModels();
              },
            });
        }
        async _closeOrderDialog() {
          const { closeOrderDialog: e, closeOrderDrawer: t } = await At(),
            i = () => this._dialogVisibility.setValue({ isVisible: !1 });
          this.getDisplayMode() !== A.OrderEditorDisplayMode.ResizableDrawer
            ? e(i)
            : t(i);
        }
        async _showOrderDrawer(e, t) {
          const { showOrderDrawer: i } = await At();
          null !== this._orderViewModel &&
            i({
              viewModel: this._orderViewModel,
              settings$: this._settings$,
              mode: this.getDisplayMode(),
              focus: e ?? this._getDefaultOrderTicketFocus(),
              forceCollapsedOrderDrawer: t,
              trackEvent: this._trackEvent,
              onOpen: (e) => {
                this._dialogVisibility.setValue({
                  isVisible: !0,
                  isFullScreen: e,
                });
              },
              onClose: () => {
                this._tradedContextLinking?.clear(),
                  this._dialogVisibility.setValue({ isVisible: !1 }),
                  this._orderViewModel?.onDoneButtonClicked.resolve(!1),
                  this._unsubscribeViewModels();
              },
            });
        }
        _subscribeOrderViewModel() {
          (this._stopSubscriptions$ = new o.Subject()),
            this._tradedContextLinking
              ?.onContextChanged()
              .subscribe(this, this._handleTradedContextChange),
            (0, r.ensureNotNull)(this._orderViewModel)
              .onInputStateChanged()
              .subscribe(this, this._onOrderWidgetInputStateChanged),
            (0, r.ensureNotNull)(this._orderViewModel)
              .onCloseButtonClicked()
              .subscribe(this, this._onOrderWidgetCloseButtonClicked),
            (0, r.ensureNotNull)(this._orderViewModel)
              .onBackButtonClicked()
              .subscribe(this, this._onOrderWidgetBackButtonClicked),
            (0, r.ensureNotNull)(this._orderViewModel)
              .orderType$.pipe(c(this._stopSubscriptions$))
              .subscribe(this._onOrderTypeChanged),
            (0, r.ensureNotNull)(this._orderViewModel)
              .status$.pipe(c(this._stopSubscriptions$))
              .subscribe(this._onOrderWidgetStatusChanged),
            this._mode$
              .pipe(c(this._stopSubscriptions$), (0, h.skip)(1))
              .subscribe(this._onOrderWidgetModeChanged);
        }
        _unsubscribeOrderViewModel() {
          this._orderPresetsManagerConsumer?.destroy(),
            delete this._orderPresetsManagerConsumer,
            this._orderViewHeaderState.setOrderPresetsManagerConsumer(null),
            this._tradedContextLinking
              ?.onContextChanged()
              .unsubscribe(this, this._handleTradedContextChange),
            this._stopSubscriptions$.next(),
            this._stopSubscriptions$.complete(),
            (0, r.ensureNotNull)(this._orderViewModel)
              .onInputStateChanged()
              .unsubscribe(this, this._onOrderWidgetInputStateChanged),
            (0, r.ensureNotNull)(this._orderViewModel)
              .onCloseButtonClicked()
              .unsubscribe(this, this._onOrderWidgetCloseButtonClicked),
            (0, r.ensureNotNull)(this._orderViewModel)
              .onBackButtonClicked()
              .unsubscribe(this, this._onOrderWidgetBackButtonClicked),
            (0, r.ensureNotNull)(this._orderViewModel).destroy(),
            (this._orderViewModel = null);
        }
        _getDefaultOrderTicketFocus() {
          switch (this._orderViewModel?.getOrderType()) {
            case 2:
              return 5;
            case 1:
            case 4:
              return 1;
            case 3:
              return 2;
            default:
              return;
          }
        }
        async _openPositionPanel(e) {
          await this._mountPositionPanel(e),
            this._openTradingPanelPage(Ot.TradingPage.OrderPanel);
        }
        async _mountPositionPanel(e) {
          const { mountPositionPanel: t } = await Rt();
          if (null !== this._positionViewModel)
            return t(
              this._positionViewModel,
              this._settings$,
              this.getDisplayMode(),
              this._tradingPanelContainer,
              e
            );
        }
        async _closePositionPanel() {
          await this._unmountPositionPanel(), this._closeTradingPanel();
        }
        async _unmountPositionPanel() {
          const { unmountPositionPanel: e } = await Rt();
          e(this._tradingPanelContainer);
        }
        async _showPositionDialog(e) {
          const { showPositionDialog: t } = await Rt();
          null !== this._positionViewModel &&
            t({
              viewModel: this._positionViewModel,
              settings$: this._settings$,
              mode: this.getDisplayMode(),
              focus: e,
              onOpen: (e) => {
                this._dialogVisibility.setValue({
                  isVisible: !0,
                  isFullScreen: e,
                });
              },
              onClose: () => {
                this._dialogVisibility.setValue({ isVisible: !1 }),
                  this._positionViewModel?.onDoneButtonClicked.resolve(!1),
                  this._unsubscribeViewModels();
              },
            });
        }
        async _closePositionDialog() {
          const { closePositionDialog: e } = await Rt();
          e(() => this._dialogVisibility.setValue({ isVisible: !1 }));
        }
        async _showPositionDrawer(e) {
          const { showPositionDrawer: t } = await Rt();
          null !== this._positionViewModel &&
            t({
              viewModel: this._positionViewModel,
              settings$: this._settings$,
              mode: this.getDisplayMode(),
              focus: e,
              onOpen: (e) => {
                this._dialogVisibility.setValue({
                  isVisible: !0,
                  isFullScreen: e,
                });
              },
              onClose: () => {
                this._dialogVisibility.setValue({ isVisible: !1 }),
                  this._positionViewModel?.onDoneButtonClicked.resolve(!1),
                  this._unsubscribeViewModels();
              },
            });
        }
        _subscribePositionViewModel() {
          (this._stopSubscriptions$ = new o.Subject()),
            (0, r.ensureNotNull)(this._positionViewModel)
              .onBackButtonClicked()
              .subscribe(this, this._onPositionWidgetBackButtonClicked),
            (0, r.ensureNotNull)(this._positionViewModel)
              .onCloseButtonClicked()
              .subscribe(this, this._onPositionWidgetCloseButtonClicked),
            this._mode$
              .pipe(c(this._stopSubscriptions$), (0, h.skip)(1))
              .subscribe(this._onPositionWidgetModeChanged);
        }
        _unsubscribePositionViewModel() {
          this._stopSubscriptions$.next(),
            this._stopSubscriptions$.complete(),
            (0, r.ensureNotNull)(this._positionViewModel)
              .onBackButtonClicked()
              .unsubscribe(this, this._onPositionWidgetBackButtonClicked),
            (0, r.ensureNotNull)(this._positionViewModel)
              .onCloseButtonClicked()
              .unsubscribe(this, this._onPositionWidgetCloseButtonClicked),
            (0, r.ensureNotNull)(
              this._positionViewModel
            ).onDoneButtonClicked.resolve(!1),
            (0, r.ensureNotNull)(this._positionViewModel).destroy(),
            (this._positionViewModel = null);
        }
        _makeOrderViewInputState(e, t, i, r) {
          const o =
              null !== r && null !== t
                ? this._getTradingSettingsStorage()?.customFields(
                    e,
                    t,
                    Array.from(r)
                  )
                : null,
            n =
              null !== t
                ? this._getTradingSettingsStorage()?.duration(e, t)
                : null;
          return {
            symbol: e,
            side: i,
            orderType: t,
            limitPrice: null,
            stopPrice: null,
            quantity: this._getTradingSettingsStorage()?.symbolQty(e) || null,
            orderSizeCalculatorQuantityType:
              (this._isOrderSizeCalculatorEnabled &&
                this._getTradingSettingsStorage()?.orderSizeCalculatorQuantityType(
                  e
                )) ||
              null,
            lastRiskQuantityType: this._isOrderSizeCalculatorEnabled
              ? s.getValue(wt.settingsKeys.LAST_RISK_QUANTITY_TYPE) ?? null
              : null,
            lastUsedQuantityType:
              (this._isOrderSizeCalculatorEnabled &&
                this._getTradingSettingsStorage()?.lastUsedQuantityType(e)) ||
              null,
            orderSizeCalculatorValue:
              (this._isOrderSizeCalculatorEnabled &&
                this._getTradingSettingsStorage()?.orderSizeCalculatorValue(
                  e
                )) ||
              null,
            takeProfitPips:
              this._getTradingSettingsStorage()?.takeProfitPips(e) || null,
            takeProfitPrice: null,
            stopLossPips:
              this._getTradingSettingsStorage()?.stopLossPips(e) || null,
            stopLossPrice: null,
            duration: n || null,
            customFields: o || null,
            bracketType: null,
            takeProfitEnabled: !1,
            stopLossEnabled: !1,
          };
        }
        _commonOrderViewModelProps() {
          return {
            order: this._orderStub,
            settings$: this._settings$,
            displayMode$: this._mode$,
            orderWidgetStat: this._orderWidgetStat,
            isUndockAllowed$: this._isOpeningTradingPanelAvailable$,
            pipValueType$: this._tradingCommands.pipValueType$,
            onNeedSelectBroker: this._tradingCommands.onNeedSelectBroker,
            trackEvent: this._tradingCommands.trackEvent,
            toggleTradingWidget: this._tradingCommands.toggleTradingWidget,
            toggleTradingPanelPopup:
              this._tradingCommands.toggleTradingPanelPopup,
            toggleMode: this._toggleMode,
            getDisplayMode: this.getDisplayMode,
            toggleSettings: this._toggleSettings,
            getSettings: this._getSettings,
            showErrorNotification: this._tradingCommands.showErrorNotification,
            qtySuggester: this._qtySuggester,
            isVisible: this._isVisible,
            headerState: this._orderViewHeaderState,
            isOrderPresetsEnabled: false,
          };
        }
        _saveWidgetMode(e) {
          e !== A.OrderEditorDisplayMode.ResizableDrawer &&
            this._orderViewDataStorage.setWidgetMode(e);
        }
      }
    },
    145367: (e, t, i) => {
      "use strict";
      var s, r;
      function o(e) {
        return e?.type === r.PlaceOrder;
      }
      i.d(t, {
        PlaceOrEditContextStatus: () => s,
        PlaceOrEditContextType: () => r,
        isContextPlaceOrderContext: () => o,
      }),
        (function (e) {
          (e[(e.Undefined = 0)] = "Undefined"),
            (e[(e.Loading = 1)] = "Loading"),
            (e[(e.Error = 2)] = "Error"),
            (e[(e.Destroyed = 3)] = "Destroyed");
        })(s || (s = {})),
        (function (e) {
          (e[(e.PlaceOrder = 0)] = "PlaceOrder"),
            (e[(e.EditOrder = 1)] = "EditOrder"),
            (e[(e.EditPosition = 2)] = "EditPosition"),
            (e[(e.EditIndividualPosition = 3)] = "EditIndividualPosition");
        })(r || (r = {}));
    },
    386035: (e, t, i) => {
      "use strict";
      i.d(t, {
        getSymbolMinTick: () => u,
        getSymbolType: () => d,
        getSymbolTypespecs: () => l,
        isFractional: () => c,
      });
      var s = i(960521),
        r = i.n(s),
        o = i(334529);
      function n(e) {
        const { fields: t, symbol: i, options: s } = e;
        return (0, o.getQuoteSessionInstance)("simple").snapshot(i);
      }
      function a(e) {
        return "error" === e.status;
      }
      async function l(e, t) {
        const i = await n({ symbol: e, fields: ["typespecs"], options: t });
        return "values" in i
          ? a(i) || void 0 === i.values.typespecs
            ? []
            : i.values.typespecs
          : i.typespecs ?? [];
      }
      async function d(e, t) {
        const i = await n({ symbol: e, fields: ["type"], options: t });
        return "values" in i
          ? a(i)
            ? "undefined"
            : i.values.type
          : i.type ?? "undefined";
      }
      async function u(e, t) {
        const i = await n({
          symbol: e,
          fields: ["minmov", "pricescale"],
          options: t,
        });
        return "values" in i
          ? a(i) || void 0 === i.values.minmov || void 0 === i.values.pricescale
            ? 1
            : r()(i.values.minmov).div(i.values.pricescale).toNumber()
          : r()(i.minmov).div(i.pricescale).toNumber();
      }
      async function c(e, t) {
        const i = await n({ symbol: e, fields: ["fractional"], options: t });
        return "values" in i
          ? !a(i) && void 0 !== i.values.fractional && i.values.fractional
          : i.fractional ?? !1;
      }
    },
    509715: (e, t, i) => {
      "use strict";
      function s(e) {
        return e
          .properties()
          .childs()
          .paneProperties.childs()
          .legendProperties.childs().showTradingButtons;
      }
      i.d(t, { getBuySellButtonsVisibility: () => s });
    },
    865211: (e, t, i) => {
      "use strict";
      i.d(t, {
        setBuySellButtonsVisibility: () => a,
        undoShowBuySellButtonsVisibility: () => n,
      });
      var s = i(609838),
        r = i(272047),
        o = i(509715);
      const n = new r.TranslatedString(
        "change buy/sell buttons visibility",
        s.t(null, void 0, i(605598))
      );
      function a(e, t) {
        e.setProperty((0, o.getBuySellButtonsVisibility)(e.model()), t, n);
      }
    },
    470692: (e, t, i) => {
      "use strict";
      i.d(t, {
        OrdersService: () => _,
        cropOrderData: () => p,
        getOrderPriceByType: () => h,
        isBracketOrderRawData: () => c,
      });
      var s = i(650151),
        r = i(329452),
        o = i(41899),
        n = i(671945),
        a = i(642659),
        l = i(391431),
        d = i(735248);
      const u = (0, n.getLogger)("Trading.OrderService");
      function c(e) {
        return (
          "parentId" in e &&
          void 0 !== e.parentId &&
          "parentType" in e &&
          void 0 !== e.parentType
        );
      }
      function h(e) {
        let t;
        return (
          1 === e.type && (t = e.limitPrice),
          (3 !== e.type && 4 !== e.type) || (t = e.stopPrice),
          t ?? NaN
        );
      }
      function p(e) {
        return {
          id: e.id,
          parentId: e.parentId,
          parentType: e.parentType,
          symbol: e.symbol,
          type: e.type,
          side: e.side,
          avgPrice: e.avgPrice,
          limitPrice: e.limitPrice,
          stopPrice: e.stopPrice,
          price: e.price,
          stopLoss: e.stopLoss,
          trailingStopPips: e.trailingStopPips,
          stopType: e.stopType,
          takeProfit: e.takeProfit,
          status: e.status,
          qty: e.qty,
        };
      }
      class _ extends a.BrokerService {
        constructor(e) {
          super(e, "OrdersService"),
            (this._existingOrdersIds = new Set()),
            (this._activeOrders = new Map()),
            (this._activeOrderUpdate = new r.Delegate()),
            (this._activeOrdersRemoved = new r.Delegate()),
            (this._ordersRejected = new r.Delegate());
        }
        async getCurrency() {
          const e = (0, s.ensureNotNull)(this.activeBroker()),
            t = await e.accountMetainfo();
          return (0, l.getCurrency)(t, !0) || "USD";
        }
        orders() {
          return (0, s.ensureNotNull)(this.activeBroker()).orders();
        }
        find(e) {
          return this._activeOrders.get(e) || null;
        }
        activeOrders() {
          return Array.from(this._activeOrders.values());
        }
        activeOrdersUpdated() {
          return this._activeOrderUpdate;
        }
        activeOrdersRemoved() {
          return this._activeOrdersRemoved;
        }
        orderRejected() {
          return this._ordersRejected;
        }
        stopService() {
          this._clearOrders();
          (0, s.ensureNotNull)(this.activeBroker()).orderUpdate.unsubscribeAll(
            this
          );
        }
        startService() {
          this._clearOrders(), this._requestOrders();
        }
        _clearOrders() {
          const e = Array.from(this._activeOrders.keys());
          this._activeOrders.clear(),
            this._existingOrdersIds.clear(),
            e.length > 0 && u.logNormal(`All orders removed, id's: ${e}`),
            this._activeOrdersRemoved.fire(e);
        }
        async _requestOrders() {
          const e = this.activeBroker();
          if (!e) return;
          const t = await e.orders();
          for (const e of t) this._addActiveOrder(e);
          e.orderUpdate.unsubscribeAll(this),
            e.orderUpdate.subscribe(this, this._addActiveOrder);
        }
        _addActiveOrder(e) {
          this._logOrderUpdate(e);
          const t = e.id,
            i = this._activeOrders.has(t),
            s = 5 === e.status,
            r = 6 !== e.status && 3 !== e.status,
            n = 2 === e.type;
          if (i) {
            if (r || n)
              return (
                this._activeOrders.delete(t),
                void this._activeOrdersRemoved.fire([t])
              );
          } else {
            if (n || (r && !s)) return;
            if (s) return void this._ordersRejected.fire(h(e));
          }
          const a = this._getOrderData(e);
          (0, o.isNumber)(a.price) &&
            (this._activeOrders.set(t, a), this._activeOrderUpdate.fire(a));
        }
        _logOrderUpdate(e) {
          const t = e.id;
          let i = "update";
          this._existingOrdersIds.has(t) ||
            ((i = "add"), this._existingOrdersIds.add(t)),
            (function (e, t) {
              t(JSON.stringify(p(e)));
            })(e, (e) => {
              u.logNormal(`Order ${i}: ${e}`);
            });
        }
        _getOrderData(e) {
          const t = h(e);
          (0, o.isNumber)(t) ||
            u.logError(`order ${e.id} price is not defined`);
          const i = (0, s.ensureNotNull)(this.activeBroker()).metainfo()
            .configFlags;
          return (0, o.merge)((0, o.clone)(e), {
            price: t,
            considerFilledQty: !0,
            supportModify: (0, l.isModifyOrderSupported)(e, i),
            supportMove: (0, l.isMoveOrderSupported)(e, i),
            supportCancel: !0,
            supportModifyOrderPrice: Boolean(i.supportModifyOrderPrice),
            supportTrailingStop: (0, d.checkTrailingStopAvailability)(i),
            supportGuaranteedStop: (0, d.checkGuaranteedStopAvailability)(i),
          });
        }
      }
    },
    936145: (e, t, i) => {
      "use strict";
      i.d(t, {
        PositionsService: () => p,
        PositionsUpdateType: () => c,
        cropPositionData: () => h,
      });
      var s = i(650151),
        r = i(329452),
        o = i(41899),
        n = i(671945),
        a = i(642659),
        l = i(735248);
      const d = (0, n.getLogger)("Trading.PositionService");
      var u, c;
      function h(e) {
        const t = e;
        return {
          id: t.id,
          symbol: t.symbol,
          side: t.side,
          avgPrice: t.avgPrice,
          pl: t.pl,
          price: t.price,
          qtyBySide: t.qtyBySide,
          stopType: t.stopType,
          takeProfit: t.takeProfit,
          stopLoss: t.stopLoss,
          trailingStopPips: t.trailingStopPips,
        };
      }
      !(function (e) {
        (e[(e.IndividualPosition = 0)] = "IndividualPosition"),
          (e[(e.Position = 1)] = "Position");
      })(u || (u = {})),
        (function (e) {
          (e[(e.Full = 0)] = "Full"), (e[(e.Partial = 1)] = "Partial");
        })(c || (c = {}));
      class p extends a.BrokerService {
        constructor(e) {
          super(e, "PositionsService"),
            (this._existingPositionIds = new Set()),
            (this._positions = new Map()),
            (this._positionUpdate = new r.Delegate()),
            (this._positionsRemoved = new r.Delegate()),
            (this._displayMode = 1),
            (this._updatePositionPLHandler = this._updatePositionPL.bind(this));
        }
        positions() {
          return Array.from(this._positions.values());
        }
        find(e) {
          return this._positions.get(e) || null;
        }
        async realIdFromBroker(e) {
          const t = (0, s.ensureNotNull)(this.activeBroker());
          if (1 === this._displayMode) {
            const i = await t.positionById(e);
            if (void 0 !== i) return i.id;
          } else {
            const i = await t.individualPositionById(e);
            if (void 0 !== i) return i.id;
          }
          return null;
        }
        positionUpdate() {
          return this._positionUpdate;
        }
        positionsRemoved() {
          return this._positionsRemoved;
        }
        isDisplayModeIndividualPositions() {
          return 0 === this._displayMode;
        }
        async getCurrency(e) {
          return (
            (await (0, s.ensureNotNull)(
              this.activeBroker()
            ).getPositionCurrency(e)) || ""
          );
        }
        supportBrackets(e) {
          return Boolean(
            this.isDisplayModeIndividualPositions()
              ? e.supportIndividualPositionBrackets
              : e.supportPositionBrackets
          );
        }
        supportReverse(e) {
          return Boolean(
            !this.isDisplayModeIndividualPositions() && e.supportReversePosition
          );
        }
        stopService() {
          this._clearPositions();
          const e = (0, s.ensureNotNull)(this.activeBroker());
          this.isDisplayModeIndividualPositions()
            ? e.individualPositionUpdate.unsubscribeAll(this)
            : e.positionUpdate.unsubscribeAll(this);
        }
        startService() {
          this._clearPositions(),
            (this._displayMode = (function (e) {
              if (null === e) return 1;
              const t = e.metainfo().configFlags;
              return t.supportPositionNetting
                ? t.supportPositionBrackets
                  ? 1
                  : t.supportCloseIndividualPosition
                  ? 0
                  : 1
                : 1;
            })(this.activeBroker())),
            this._requestPositions();
        }
        _clearPositions() {
          const e = (0, s.ensureNotNull)(this.activeBroker()),
            t = Array.from(this._positions.keys());
          for (const i of t)
            this.isDisplayModeIndividualPositions()
              ? e.unsubscribeIndividualPositionPL(
                  i,
                  this._updatePositionPLHandler
                )
              : e.unsubscribePL(i, this._updatePositionPLHandler);
          this._positions.clear(),
            this._existingPositionIds.clear(),
            t.length > 0 && d.logNormal(`All positions removed, id's: ${t}`),
            this._positionsRemoved.fire(t);
        }
        async _requestPositions() {
          const e = this.activeBroker();
          if (!e) return;
          const t = this.isDisplayModeIndividualPositions(),
            i = await (t ? e.individualPositions() : e.positions());
          for (const e of i) this._addPosition(e);
          t
            ? e.individualPositionUpdate.subscribe(this, this._addPosition)
            : e.positionUpdate.subscribe(this, this._addPosition);
        }
        _addPosition(e) {
          const t = e.id,
            i = this._positions.has(t),
            r = (0, s.ensureNotNull)(this.activeBroker()),
            o = this.isDisplayModeIndividualPositions();
          if (!e.qty)
            return (
              i &&
                (o
                  ? r.unsubscribeIndividualPositionPL(
                      t,
                      this._updatePositionPLHandler
                    )
                  : r.unsubscribePL(t, this._updatePositionPLHandler),
                this._positions.delete(t),
                this._positionsRemoved.fire([t])),
              void this._logPositionUpdate(e, !0)
            );
          const n = this._getPositionData(e),
            a = this._updateType(n);
          this._logPositionUpdate(n, a === c.Full),
            this._positions.set(t, n),
            this._firePositionUpdate(n, a),
            i ||
              (o
                ? r.subscribeIndividualPositionPL(
                    t,
                    this._updatePositionPLHandler
                  )
                : r.subscribePL(t, this._updatePositionPLHandler));
        }
        _updatePositionPL(e, t) {
          const i = (0, s.ensureDefined)(this._positions.get(e));
          (i.pl = (0, o.isNumber)(t) ? t : null),
            this._firePositionUpdate(i, c.Partial);
        }
        _getPositionData(e) {
          const t = (0, s.ensureNotNull)(this.activeBroker()).metainfo()
              .configFlags,
            i = this._positions.get(e.id),
            r = this.isDisplayModeIndividualPositions(),
            o = Boolean(
              r
                ? t.supportIndividualPositionBrackets
                : t.supportPositionBrackets
            );
          let n,
            a = !1,
            d = null;
          if (r) {
            const t = e;
            (n = t.price), (a = Boolean(t.canBeClosed));
          } else {
            const t = e;
            (n = t.avgPrice), (d = t.pl ?? i?.pl ?? null);
          }
          return {
            ...e,
            pl: d,
            plBasedOnLast: t.calculatePLUsingLast || !1,
            price: Math.abs((0, s.ensureDefined)(n)),
            qtyBySide: Math.abs(e.qty) * (1 === e.side ? 1 : -1),
            supportClose: Boolean(
              r ? t.supportCloseIndividualPosition && a : t.supportClosePosition
            ),
            supportReverse: Boolean(!r && t.supportReversePosition),
            supportBrackets: o,
            supportOnlyPairBrackets: Boolean(t.supportOnlyPairPositionBrackets),
            supportStopLoss: (0, l.checkStopLossAvailability)(t),
            supportTrailingStop: (0, l.checkTrailingStopAvailability)(t),
            supportGuaranteedStop: (0, l.checkGuaranteedStopAvailability)(t),
          };
        }
        _firePositionUpdate(e, t) {
          this._positionUpdate.fire({ data: e, type: t });
        }
        _updateType(e) {
          const t = this._positions.get(e.id);
          if (void 0 === t) return c.Full;
          for (const i of Object.keys(t)) {
            const s = i;
            if ("pl" !== s && "unrealizedPl" !== s && t[s] !== e[s])
              return c.Full;
          }
          return c.Partial;
        }
        _logPositionUpdate(e, t) {
          if (!t) return;
          const i = e.id;
          let s = "update";
          this._existingPositionIds.has(i) ||
            ((s = "add"), this._existingPositionIds.add(i)),
            (function (e, t) {
              t(JSON.stringify(h(e)));
            })(e, (e) => {
              d.logNormal(`Position  ${s}: ${e}`);
            });
        }
      }
    },
    735248: (e, t, i) => {
      "use strict";
      function s(e) {
        return Boolean(
          e.supportStopLoss && e.supportAddBracketsToExistingOrder
        );
      }
      function r(e) {
        return Boolean(
          e.supportTrailingStop && e.supportAddBracketsToExistingOrder
        );
      }
      function o(e) {
        return Boolean(
          e.supportGuaranteedStop && e.supportAddBracketsToExistingOrder
        );
      }
      var n;
      function a(e, t, i = !0) {
        switch (
          (function (e, t = !0) {
            const i = e ?? 0,
              s = t ? Math.round(100 * i) / 100 : i;
            return s > 0 ? "positive" : s < 0 ? "negative" : "neutral";
          })(t, i)
        ) {
          case "negative":
            return e.negativePlColor;
          case "positive":
            return e.positivePlColor;
          default:
            return e.text.textColor;
        }
      }
      i.d(t, {
        checkGuaranteedStopAvailability: () => o,
        checkStopLossAvailability: () => s,
        checkTrailingStopAvailability: () => r,
        profitLossTextColor: () => a,
      }),
        (function (e) {
          (e.Positive = "positive"),
            (e.Negative = "negative"),
            (e.Neutral = "neutral");
        })(n || (n = {}));
    },
    404412: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { TradingNotificationsHandler: () => m });
      var s = i(290484),
        r = i(650151),
        o = i(909702),
        n = i(642659),
        a = i(440891),
        l = i(229753),
        d = i(743003),
        u = i(525915),
        c = i(391431);
      const h = [
        "qty",
        "stopPrice",
        "limitPrice",
        "status",
        "filledQty",
        "stopType",
      ];
      function p(e, t, i) {
        if (void 0 === e || void 0 === t) return !1;
        const s = i.indexOf(".");
        if (-1 !== s) {
          const r = i.substring(0, s);
          return p(e[r], t[r], i.substring(s + 1));
        }
        return e[i] === t[i];
      }
      function _(e) {
        return 6 === e || 3 === e;
      }
      function g(e) {
        return 2 === e.type
          ? e.avgPrice
          : e.avgPrice || e.limitPrice || e.stopPrice;
      }
      function b(e) {
        if (4 === e.type) return e.stopPrice;
      }
      function y(e) {
        const t = e.brokerSymbol || e.symbol;
        return (0, c.getSymbolNameOverFullname)(t);
      }
      class m extends n.BrokerService {
        constructor(e) {
          super(e, "TradingNotificationsHandler"),
            (this._orders = []),
            (this._playSound = (0, s.default)(this._playSoundImpl, 50)),
            o.enableAlertSoundsForMobile();
        }
        startService() {
          const e = (0, r.ensure)(this.activeBroker());
          e.orders().then((e) => (this._orders = (0, l.deepCopy)(e))),
            e.orderUpdate.subscribe(this, this._orderUpdate),
            (this._shouldHidePriceInOrderExecutedNotifications =
              e.metainfo().configFlags.showAvgFillPriceColumnAsLastFillPrice);
        }
        stopService() {
          (0, r.ensure)(this.activeBroker()).orderUpdate.unsubscribe(
            this,
            this._orderUpdate
          );
        }
        _showOrderStatusToast(e) {
          a.enabled("trading_notifications") &&
            this.trading().showOrderToast(e);
        }
        _priceFormatter(e) {
          return (0, r.ensureNotNull)(this.activeBroker()).formatter(e, !0);
        }
        _checkOrderModified(e, t) {
          const i = this.activeBroker(),
            s = (i && i.metainfo().customNotificationFields) || [],
            r = h.concat(s);
          let o = !1;
          return (
            r.forEach((i) => {
              o || p(e, t, i) || (o = !0);
            }),
            o
          );
        }
        _generateNotificationsData(e, t) {
          const i = [],
            s = this.trading().orderExecutedSoundParams,
            r = e.message?.text
              ? (0, d.capitalizeFirstLetter)(e.message.text)
              : void 0,
            o = {
              orderId: e.id,
              side: e.side,
              quantity: Math.abs(e.qty),
              primaryPrice: g(e),
              secondaryPrice: b(e),
              symbol: e.symbol,
              displaySymbol: y(e),
              orderType: e.type,
              parentId: e.parentId,
              stopType: e.stopType,
              content: r,
            };
          return (
            t
              ? (this._checkOrderModified(e, t) &&
                  (1 === e.status
                    ? i.push({ toastData: { ...o, toastType: 1 } })
                    : 5 === e.status
                    ? i.push({
                        toastData: {
                          ...o,
                          toastType: 2,
                          content: e.message?.text || void 0,
                        },
                      })
                    : 2 === e.status
                    ? i.push({
                        toastData: {
                          ...o,
                          primaryPrice: this
                            ._shouldHidePriceInOrderExecutedNotifications
                            ? void 0
                            : o.primaryPrice,
                          secondaryPrice: this
                            ._shouldHidePriceInOrderExecutedNotifications
                            ? void 0
                            : o.secondaryPrice,
                          toastType: 5,
                        },
                        soundPath: s.enabled.value() ? s.path.value() : void 0,
                      })
                    : t.filledQty !== e.filledQty
                    ? i.push({
                        toastData: {
                          ...o,
                          quantity:
                            void 0 !== e.filledQty && e.filledQty > 0
                              ? e.filledQty
                              : o.quantity,
                          primaryPrice: this
                            ._shouldHidePriceInOrderExecutedNotifications
                            ? void 0
                            : o.primaryPrice,
                          secondaryPrice: this
                            ._shouldHidePriceInOrderExecutedNotifications
                            ? void 0
                            : o.secondaryPrice,
                          toastType: 3,
                        },
                        soundPath: s.enabled.value() ? s.path.value() : void 0,
                      })
                    : _(e.status) &&
                      i.push({ toastData: { ...o, toastType: 4 } })),
                Object.assign(t, e))
              : _(e.status)
              ? (this._orders.push(e),
                i.push({ toastData: { ...o, toastType: 0 } }),
                this.trading().trackEvent("", "Order placed symbol", e.symbol))
              : 1 === e.status
              ? i.push({ toastData: { ...o, toastType: 1 } })
              : 5 === e.status
              ? (this._orders.push(e),
                i.push({
                  toastData: {
                    ...o,
                    toastType: 2,
                    content: e.message?.text || void 0,
                  },
                }))
              : 2 === e.status &&
                (this._orders.push(e),
                i.push(
                  { toastData: { ...o, toastType: 0 } },
                  {
                    toastData: {
                      ...o,
                      primaryPrice: this
                        ._shouldHidePriceInOrderExecutedNotifications
                        ? void 0
                        : o.primaryPrice,
                      secondaryPrice: this
                        ._shouldHidePriceInOrderExecutedNotifications
                        ? void 0
                        : o.secondaryPrice,
                      toastType: 5,
                    },
                    soundPath: s.enabled.value() ? s.path.value() : void 0,
                  }
                ),
                this.trading().trackEvent("", "Order placed symbol", e.symbol)),
            i
          );
        }
        async _orderUpdate(e, t) {
          const i = (0, l.deepCopy)(e),
            s = this._orders.find((e) => e.id === i.id);
          if (t) return void (void 0 === s && this._orders.push(i));
          if (s && (0, u.isFinalOrderStatus)(s.status)) return;
          const r = this._generateNotificationsData(i, s);
          if (0 === r.length) return;
          const o = await this._priceFormatter(i.symbol);
          for (const { toastData: e, soundPath: t } of r)
            void 0 !== t && this._playSound(t),
              this._showOrderStatusToast({ ...e, priceFormatter: o });
        }
        _playSoundImpl(e) {
          if (this._playingSound) {
            if (this._playingSound === e) return;
            o.stop(this._playingSound);
          }
          (this._playingSound = e),
            o.play(e),
            o.onStopped(e, () => {
              delete this._playingSound;
            });
        }
      }
    },
    466479: (e, t, i) => {
      "use strict";
      i.d(t, { CustomFieldsViewModel: () => d });
      var s = i(947488),
        r = i(233064),
        o = i(323002),
        n = i(275734),
        a = i(586639),
        l = i(328810);
      class d {
        constructor({
          existingOrder: e,
          customFields: t,
          initialInputState: i,
          orderType$: a,
        }) {
          (this._isEmptyRequiredCustomFieldsHighlighted$ =
            new s.BehaviorSubject(!1)),
            (this._customFieldModels$ = new s.BehaviorSubject([])),
            (this._isCustomFieldsNotSelected$ = new s.BehaviorSubject(!1)),
            (this._customFieldsInputValues$ = new s.BehaviorSubject({})),
            (this._subscriptions = []),
            (this.getCustomFieldsInputValues = () =>
              this._customFieldsInputValues$.getValue()),
            (this.isCustomFieldsNotSelected$ =
              this._isCustomFieldsNotSelected$.asObservable()),
            (this.customFieldsInputValues$ =
              this._customFieldsInputValues$.asObservable()),
            (this._orderType$ = a),
            (this._customFieldsModelOptions = {
              modifyMode: e,
              existedValues: i,
              tradingDialogCustomFields: t,
              alwaysShowAttachedErrors$:
                this._isEmptyRequiredCustomFieldsHighlighted$.asObservable(),
            }),
            (this.onControlFocused$ = this._customFieldModels$.pipe(
              (0, r.switchMap)((e) =>
                (0, o.merge)(
                  ...e.map((e) =>
                    (0, n.fromEventPattern)(
                      (t) => e.onControlFocused.subscribe(null, t),
                      (t) => e.onControlFocused.unsubscribe(null, t)
                    )
                  )
                )
              )
            ));
        }
        subscribe() {
          const e = this._anyCustomFieldValueChangeObservable().subscribe(
              () => {
                this._calculateCustomFieldsInputValues(),
                  this._checkIsCustomFieldsNotSelected();
              }
            ),
            t = this._orderType$.subscribe((e) =>
              this._customFieldModels$.next(
                (0, l.createCustomFieldModels)({
                  ...this._customFieldsModelOptions,
                  currentOrderType: e,
                })
              )
            );
          this._subscriptions.push(e, t);
        }
        unsubscribe() {
          this._subscriptions.forEach((e) => e?.unsubscribe()),
            (this._subscriptions = []),
            this._customFieldModels$.getValue().forEach((e) => e.destroy());
        }
        setIsEmptyRequiredCustomFieldsHighlighted(e) {
          this._isEmptyRequiredCustomFieldsHighlighted$.next(e);
        }
        getIsCustomFieldsNotSelected() {
          return this._isCustomFieldsNotSelected$.getValue();
        }
        getCustomFieldsModels() {
          return this._customFieldModels$.getValue();
        }
        _checkIsCustomFieldsNotSelected() {
          const e = this._customFieldModels$
            .getValue()
            .flatMap((e) =>
              "ComboBox" === e.type && void 0 === e.getSelectedItem() ? e : []
            );
          this._isCustomFieldsNotSelected$.next(0 !== e.length);
        }
        _anyCustomFieldValueChangeObservable() {
          return this._customFieldModels$.pipe(
            (0, r.switchMap)((e) =>
              (0, o.merge)(
                ...e.map((e) =>
                  "TextWithCheckBox" === e.type
                    ? (0, o.merge)(e.checked$, e.text$)
                    : "TextField" === e.type
                    ? e.text$
                    : "Checkbox" === e.type
                    ? e.checked$
                    : "ComboBox" === e.type
                    ? e.selectedItem$
                    : (0, a.of)(void 0)
                )
              )
            )
          );
        }
        _calculateCustomFieldsInputValues() {
          const e = this._customFieldModels$.getValue(),
            t = this._getCustomFieldsInputValues(e);
          this._customFieldsInputValues$.next(t);
        }
        _getCustomFieldsInputValues(e) {
          const t = {};
          return (
            e.forEach((e) => {
              "TextWithCheckBox" === e.type &&
                (t[e.id] = {
                  text: e.getText().replace(/&quote;/g, '"'),
                  checked: e.getChecked(),
                }),
                "TextField" === e.type && (t[e.id] = e.getText()),
                "Checkbox" === e.type && (t[e.id] = e.getChecked()),
                "ComboBox" === e.type && (t[e.id] = e.getSelectedItem());
            }),
            t
          );
        }
      }
    },
    328810: (e, t, i) => {
      "use strict";
      i.d(t, {
        createCustomFieldModels: () => a,
        filterAllowedCustomFields: () => l,
        isSupportedField: () => n,
      });
      var s = i(947488),
        r = i(329452);
      var o = i(586639);
      function n(e, t) {
        return (
          void 0 === e.supportedOrderTypes || e.supportedOrderTypes.includes(t)
        );
      }
      function a(e) {
        const {
          modifyMode: t,
          alwaysShowAttachedErrors$: i,
          currentOrderType: n,
          existedValues: a,
          tradingDialogCustomFields: d,
        } = e;
        if (void 0 === d || !Array.isArray(d) || 0 === d.length) return [];
        return (null !== n ? l(n, d) : d).map((e) => {
          if ("TextField" === e.inputType)
            return (function ({
              customField: e,
              existedValues: t,
              modifyMode: i,
            }) {
              let o;
              const n = t?.[e.id];
              try {
                o = JSON.parse(n);
              } catch (e) {
                o = n;
              }
              const a = new s.BehaviorSubject(o ?? e.value),
                l = new s.BehaviorSubject(!0),
                d = new s.BehaviorSubject(void 0),
                u = e.validator,
                c =
                  void 0 !== u
                    ? (e) => {
                        const t = u(e);
                        l.next(t.valid),
                          d.next(t.valid ? void 0 : t.errorMessage);
                      }
                    : void 0,
                h = void 0 !== c ? a.subscribe(c) : void 0;
              return {
                id: e.id,
                type: e.inputType,
                inputType: e.maskWithAsterisk ? "password" : "text",
                placeholder: e.placeHolder || "",
                title: e.title || "",
                text$: a.asObservable(),
                getText: a.getValue.bind(a),
                setText: a.next.bind(a),
                onControlFocused: new r.Delegate(),
                errorMessage$: d,
                isValid: () => l.getValue(),
                destroy: () => h?.unsubscribe(),
                disabled: i && e.preventModify,
              };
            })({ customField: e, existedValues: a, modifyMode: t });
          if ("TextWithCheckBox" === e.inputType)
            return (function ({ customField: e, existedValues: t }) {
              let i;
              const o = t?.[e.id];
              try {
                i = JSON.parse(o);
              } catch (e) {
                i = o;
              }
              const n = new s.BehaviorSubject(i?.text ?? e.value.text),
                a = new s.BehaviorSubject(i?.checked ?? e.value.checked),
                l = new s.BehaviorSubject(!0),
                d = new s.BehaviorSubject(void 0),
                u = e.validator,
                c =
                  void 0 !== u
                    ? (e) => {
                        const t = u(e);
                        l.next(t.valid),
                          d.next(t.valid ? void 0 : t.errorMessage);
                      }
                    : void 0,
                h = void 0 !== c ? n.subscribe(c) : void 0;
              return {
                id: e.id,
                type: e.inputType,
                inputType: e.customInfo.asterix ? "password" : "text",
                placeholder: e.placeHolder || "",
                title: e.title || "",
                checkboxTitle: e.customInfo.checkboxTitle,
                text$: n.asObservable(),
                getText: n.getValue.bind(n),
                setText: n.next.bind(n),
                checked$: a.asObservable(),
                getChecked: a.getValue.bind(a),
                setChecked: a.next.bind(a),
                onControlFocused: new r.Delegate(),
                errorMessage$: d,
                isValid: () => l.getValue(),
                destroy: () => h?.unsubscribe(),
              };
            })({ customField: e, existedValues: a });
          if ("Checkbox" === e.inputType)
            return (function ({
              customField: e,
              modifyMode: t,
              existedValues: i,
            }) {
              let n;
              const a = i?.[e.id];
              try {
                n = JSON.parse(a);
              } catch (e) {
                n = a;
              }
              const l = new s.BehaviorSubject(n ?? e.value);
              return {
                id: e.id,
                type: e.inputType,
                title: e.title,
                help: e.help,
                checked$: l.asObservable(),
                getChecked: l.getValue.bind(l),
                setChecked: l.next.bind(l),
                onControlFocused: new r.Delegate(),
                disabled: t && !e.supportModify,
                saveToSettings: e.saveToSettings,
                errorMessage$: (0, o.of)(void 0),
                isValid: () => !0,
                destroy: () => {},
              };
            })({ customField: e, modifyMode: t, existedValues: a });
          if ("ComboBox" === e.inputType && Array.isArray(e.items))
            return (function ({
              customField: e,
              modifyMode: t,
              alwaysShowAttachedErrors$: i,
              existedValues: n,
            }) {
              let a = e.items[0];
              if (n && e.id in n) {
                const t = n[e.id],
                  i = e.items.find((e) => e.value === t);
                void 0 !== i && (a = i);
              } else e.forceUserEnterInitialValue && !t && (a = void 0);
              const l = new s.BehaviorSubject(a?.value);
              return {
                id: e.id,
                type: e.inputType,
                title: e.title,
                items: e.preventModify && t && a ? [a] : e.items,
                selectedItem$: l.asObservable(),
                getSelectedItem: l.getValue.bind(l),
                setSelectedItem: l.next.bind(l),
                onControlFocused: new r.Delegate(),
                saveToSettings: e.saveToSettings,
                alwaysShowAttachedErrors$: i,
                errorMessage$: (0, o.of)(void 0),
                isValid: () => !0,
                destroy: () => {},
              };
            })({
              customField: e,
              modifyMode: t,
              alwaysShowAttachedErrors$: i,
              existedValues: a,
            });
          throw Error("Unknown inputType");
        });
      }
      function l(e, t) {
        return t.filter((t) => n(t, e));
      }
    },
    839085: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          Trading: () => ks,
          TradingActionName: () => as,
          showSellBuyButtonsDefault: () => ps,
        });
      var s = i(650151),
        r = i(609838),
        o = i(688401),
        n = i(870122),
        a = i(926032),
        l = i(180185),
        d = i(909702),
        u = i(150335),
        c = i(947488),
        h = i(323002),
        p = i(997345),
        _ = i(586639),
        g = i(275734),
        b = i(757604),
        y = i(958261),
        m = i(114501),
        v = i(839874),
        f = i(771035),
        P = i(138966),
        k = i(116217);
      function S(e) {
        return (0, k.operate)(function (t, i) {
          var s,
            r = null,
            o = !1;
          (r = t.subscribe(
            new P.OperatorSubscriber(i, void 0, void 0, function (n) {
              (s = (0, f.innerFrom)(e(n, S(e)(t)))),
                r ? (r.unsubscribe(), (r = null), s.subscribe(i)) : (o = !0);
            })
          )),
            o && (r.unsubscribe(), (r = null), s.subscribe(i));
        });
      }
      var C = i(423869),
        w = i(599016),
        T = i(391431),
        B = i(501329),
        O = i(46415),
        M = i(14654),
        I = i(404357),
        E = i(671945),
        D = i(669874),
        V = i(17317),
        $ = i(440891),
        L = i(416637),
        x = i(658895),
        A = i(240534),
        R = i(329452),
        F = i(951827);
      var N = i(61121),
        q = i(525915),
        Q = i(804748),
        W = i(932100),
        U = i(600914),
        z = i(148296),
        j = i(203953),
        H = i(684416);
      const G = (0, E.getLogger)("Trading.RealtimeProvider");
      class K {
        constructor(e) {
          (this._results = {}), (this._getter = e);
        }
        get(e) {
          return (
            this._results[e] || (this._results[e] = this._getter(e)),
            this._results[e]
          );
        }
      }
      class Y {
        constructor(e) {
          (this._stopped = !1),
            (this._subscribed = !1),
            (this._provider = null),
            (this._formatters = null);
          const {
            symbol: t,
            callback: i,
            providersCache: s,
            formattersCache: r,
            subscriptionType: o,
            actualSymbolGetter: n,
          } = e;
          (this._symbol = t),
            (this._subscriptionType = o),
            (this._callback = i),
            (this._providersCache = s),
            (this._formattersCache = r),
            (this._getActualSymbol = n),
            "Realtime" === this._subscriptionType
              ? (this._handler = (e, t) => {
                  this._stopped || i(e, t, this._formatters);
                })
              : (this._handler = (e, t) => {
                  this._stopped || i(e, t);
                }),
            this._start().catch((e) => {});
        }
        symbol() {
          return this._symbol;
        }
        type() {
          return this._subscriptionType;
        }
        callback() {
          return this._callback;
        }
        destroy() {
          this._ensureNotStopped(),
            this._subscribed &&
              void 0 !== this._actualSymbol &&
              ("Realtime" === this._subscriptionType
                ? (0, s.ensureNotNull)(this._provider).unsubscribeRealtime(
                    this._actualSymbol,
                    this._handler
                  )
                : (0, s.ensureNotNull)(this._provider).unsubscribeDOM(
                    this._actualSymbol,
                    this._handler
                  )),
            (this._stopped = !0);
        }
        async _start() {
          const { symbol: e } = await this._getActualSymbol(this._symbol);
          this._ensureNotStopped(),
            (this._provider = await this._providersCache.get(e)),
            this._ensureNotStopped(),
            (this._formatters = await this._formattersCache.get(e)),
            (0, s.ensure)(this._formatters),
            this._ensureNotStopped(),
            (this._actualSymbol = e),
            (this._subscribed = !0),
            "Realtime" === this._subscriptionType
              ? this._provider.subscribeRealtime(e, this._handler)
              : this._provider.subscribeDOM(e, this._handler);
        }
        _ensureNotStopped() {
          (0, s.assert)(!this._stopped, "Should not be stopped");
        }
      }
      class X {
        constructor(e, t, i, s) {
          (this.onStatusChanged = new R.Delegate()),
            (this._subscriptions = []),
            (this._currentBroker = null),
            (this._activeBrokerGetter = e),
            (this._actualSymbolGetter = s),
            t.subscribe(this, this._connectionStatusChanged),
            i.subscribe(this, this._connectionStatusChanged),
            (this._tvProvider = new j.BrokerRealtimeAdapter(
              "RealtimeProvider"
            )),
            this._connectionStatusChanged();
        }
        isTradable(e) {
          return this._tradableCache.get(e);
        }
        subscribeRealtime(e, t) {
          this._subscriptions.some(
            (i) =>
              i.symbol() === e && i.callback() === t && "Realtime" === i.type()
          ) ||
            this._subscriptions.push(
              new Y({
                symbol: e,
                callback: t,
                providersCache: this._providersCache,
                formattersCache: this._formattersCache,
                subscriptionType: "Realtime",
                actualSymbolGetter: this._actualSymbolGetter,
              })
            );
        }
        unsubscribeRealtime(e, t) {
          const i = this._subscriptions.findIndex(
            (i) =>
              i.symbol() === e && i.callback() === t && "Realtime" === i.type()
          );
          if (-1 === i) return;
          this._subscriptions[i].destroy(), this._subscriptions.splice(i, 1);
        }
        subscribeDOM(e, t) {
          this._subscriptions.some(
            (i) => i.symbol() === e && i.callback() === t && "DOM" === i.type()
          ) ||
            this._subscriptions.push(
              new Y({
                symbol: e,
                callback: t,
                providersCache: this._providersCache,
                formattersCache: this._formattersCache,
                subscriptionType: "DOM",
                actualSymbolGetter: this._actualSymbolGetter,
              })
            );
        }
        unsubscribeDOM(e, t) {
          const i = this._subscriptions.findIndex(
            (i) => i.symbol() === e && i.callback() === t && "DOM" === i.type()
          );
          if (-1 === i) return void G.logWarn("Subscription not found");
          this._subscriptions[i].destroy(), this._subscriptions.splice(i, 1);
        }
        formatter(e) {
          return this._formattersCache.get(e).then((e) => e.formatter);
        }
        spreadFormatter(e) {
          return this._formattersCache.get(e).then((e) => e.spreadFormatter);
        }
        quantityFormatter(e) {
          return this._formattersCache.get(e).then((e) => e.quantityFormatter);
        }
        symbolInfo(e) {
          if (!e) {
            const e = {
              minTick: NaN,
              qty: { min: NaN, max: NaN, step: NaN },
              pipValue: NaN,
              pipSize: NaN,
              description: "no symbol",
            };
            return Promise.resolve(e);
          }
          return this._providersCache.get(e).then((t) =>
            t !== this._tvProvider
              ? t
                  .symbolInfo(e)
                  .then((t) => t || this._tvProvider.symbolInfo(e))
                  .catch((t) => this._tvProvider.symbolInfo(e))
              : this._tvProvider.symbolInfo(e)
          );
        }
        quotesSnapshot(e) {
          return this._providersCache.get(e).then((t) => t.quotesSnapshot(e));
        }
        activeBroker() {
          return null !== this._currentBroker &&
            this._currentBroker !== this._tvProvider
            ? this._currentBroker
            : null;
        }
        _isTradable(e) {
          if (
            null === this._currentBroker ||
            this._currentBroker === this._tvProvider
          )
            return Promise.resolve({ tradable: !1 });
          try {
            return (0, H.makeTimeLimited)(
              this._currentBroker.isTradable(e),
              6e4,
              "isTradable Promise Timeout"
            ).catch(() => Promise.resolve({ tradable: !1 }));
          } catch (e) {
            return Promise.resolve({ tradable: !1 });
          }
        }
        _haveRealtime(e) {
          return (
            this._tradableCache.get(e) ||
            Promise.resolve(null === this._currentBroker)
          );
        }
        _connectionStatusChanged() {
          const e = this._activeBrokerGetter(),
            t = this._currentBroker,
            i = e && 1 === e.connectionStatus() ? e : null;
          if ((this._createCaches(), t !== i)) {
            const e = this._subscriptions.map((e) => ({
              symbol: e.symbol(),
              callback: e.callback(),
              type: e.type(),
            }));
            this._unsubscribeAll(),
              (this._currentBroker = i),
              this._subscribeAll(e),
              this.onStatusChanged.fire();
          }
        }
        _createCaches() {
          (this._providersCache = new K((e) => this._provider(e))),
            (this._tradableCache = new K((e) => this._isTradable(e))),
            (this._formattersCache = new K((e) =>
              this._providersCache
                .get(e)
                .then((t) =>
                  Promise.all([
                    t.formatter(e, !1),
                    t.spreadFormatter(e),
                    t.quantityFormatter(e),
                  ])
                )
                .then(([e, t, i]) => ({
                  formatter: e,
                  spreadFormatter: t,
                  quantityFormatter: i,
                }))
            ));
        }
        _provider(e) {
          return $.enabled("enable_dom_data_for_untradable_symbols")
            ? Promise.resolve(this._currentBroker || this._tvProvider)
            : this._haveRealtime(e).then((e) =>
                e.tradable &&
                this._currentBroker &&
                1 === this._currentBroker.connectionStatus()
                  ? this._currentBroker
                  : this._tvProvider
              );
        }
        _unsubscribeAll() {
          this._subscriptions.forEach((e) => {
            e.destroy();
          }),
            (this._subscriptions = []);
        }
        _subscribeAll(e) {
          e.forEach((e) => {
            this._subscriptions.push(
              new Y({
                symbol: e.symbol,
                callback: e.callback,
                providersCache: this._providersCache,
                formattersCache: this._formattersCache,
                subscriptionType: e.type,
                actualSymbolGetter: this._actualSymbolGetter,
              })
            );
          });
        }
      }
      var Z,
        J = i(642659);
      !(function (e) {
        (e.Placed = "Placed"),
          (e.Rejected = "Rejected"),
          (e.Executed = "Executed"),
          (e.Canceled = "Canceled"),
          (e.Modified = "Modified");
      })(Z || (Z = {}));
      const ee = ["Placed", "Executed", "Canceled", "Rejected"];
      class te extends J.BrokerService {
        constructor(e) {
          super(e, "TradingStat"),
            (this._userId = (window.user.id || "").toString()),
            (this._trackedOrderIdsByEventNameMap = new Map()),
            window.loginStateChange &&
              window.loginStateChange.subscribe(this, this._onLoginStateChange),
            this._initTrackedOrderIdsByEventNameMap();
        }
        trackOrderPlaced(e) {
          this._trackOrderEvent("Placed", e), this._trackOrderPlaced(e?.source);
        }
        trackOrderModified(e) {
          this._trackOrderEvent("Modified", { order: e });
        }
        startService() {
          const e = (0, s.ensure)(
            this.activeBroker(),
            "activeBroker() at TradingStat startService"
          );
          this._lastBrokerId !== e.metainfo().id &&
            this._resetTrackedOrderIdsByEventNameMap(),
            e.orderUpdate.subscribe(this, this._orderUpdate),
            this._trackTradingBrokerConnnected();
        }
        stopService() {
          (0, s.ensure)(this.activeBroker()).orderUpdate.unsubscribe(
            this,
            this._orderUpdate
          );
        }
        _orderUpdate(e, t) {
          t ||
            (5 === e.status
              ? this._trackOrderEvent("Rejected", { order: e })
              : 2 === e.status
              ? this._trackOrderEvent("Executed", { order: e })
              : 1 === e.status &&
                this._trackOrderEvent("Canceled", { order: e }));
        }
        _shouldSkipTrackEventByOrderId(e, t) {
          return !!this._trackedOrderIdsByEventNameMap.get(t)?.has(e);
        }
        async _trackOrderPlaced(e) {
          const t = this.activeBroker();
          if (!t) throw new Error("no active broker");
        }
        async _trackOrderEvent(e, t) {
          const i = this.trading().linking().value(),
            s = this.activeBroker(),
            r = t?.order;
          if (void 0 === r || null === s) return;
          if (void 0 !== r.id && ee.includes(e)) {
            if (this._shouldSkipTrackEventByOrderId(r.id, e)) return;
            this._trackedOrderIdsByEventNameMap.get(e)?.add(r.id);
          }
          const o = await s.symbolInfo(r.symbol),
            n = r.qty * (o.lotSize || 1),
            a =
              "Placed" === e && void 0 !== i.continuous && i.symbol === r.symbol
                ? "continuous"
                : o.type,
            l = {
              amount: n,
              orderId: r.id,
              instrumentType: a,
              eventName: "Order " + e,
              userId: this._userId,
              symbol: r.symbol,
              currency: o.currency ?? null,
              label: t?.label,
              source: r.source,
            };
          this._trackTradingOrder(l);
        }
        _trackTradingOrder(e) {
          const t = this.activeBroker();
          if (!t) throw new Error("no active broker");
        }
        _trackTradingBrokerConnnected() {
          const e = this.activeBroker();
          null !== e && e.metainfo().id;
          if (!e) throw new Error("no active broker");
        }
        _onLoginStateChange() {
          this._userId = (window.user.id || "").toString();
        }
        _initTrackedOrderIdsByEventNameMap() {
          for (const e of ee)
            this._trackedOrderIdsByEventNameMap.set(e, new Set());
        }
        _resetTrackedOrderIdsByEventNameMap() {
          this._trackedOrderIdsByEventNameMap.clear(),
            this._initTrackedOrderIdsByEventNameMap();
        }
      }
      var ie = i(32133);
      class se {
        constructor(e) {
          this._chartWidgetCollection = e;
        }
        showTradingProperties() {
          this._chartWidgetCollection.activeChartWidget
            .value()
            .showGeneralChartProperties(F.TabNames.trading);
        }
        showMaintenance(e) {
          0;
        }
        showBrokerSideMaintenance(e) {
          0;
        }
        trackEvent(e, t, i) {
          !(async function (e, t, i) {
            (0, ie.trackEvent)(e, t, i);
          })(e, t, i);
        }
        showReplayConfirmationDialog() {
          return Promise.resolve();
        }
        reconnectChartApi(e) {
          0;
        }
        setBroker(e) {
          const t =
            e?.metainfo().backendBrokerName ||
            e?.metainfo().id.toLowerCase() ||
            "";
          this._chartWidgetCollection.setBroker(t);
        }
      }
      var re = i(154834),
        oe = i(520985),
        ne = (i(68212), i(537008));
      async function ae(e) {
        const {
          showErrorNotification: t,
          handler: s,
          message: o,
          onOpen: n,
          onClose: a,
          abortSignal: l,
        } = e;
        if (
          !(await (0, ne.showConfirmDialog)({
            title: r.t(null, void 0, i(383236)),
            content: o,
            mainButtonText: r.t(null, void 0, i(383236)),
            cancelButtonText: r.t(null, void 0, i(904543)),
            onOpen: n,
            onClose: a,
            abortSignal: l,
            showErrorNotification: t,
            showBackdrop: !1,
          }))
        )
          return !1;
        try {
          return await s();
        } catch (e) {
          return (
            t(
              r.t(null, void 0, i(139924)),
              (function (e) {
                let t = "";
                null !== e && "object" == typeof e && e.message
                  ? (t = e.message)
                  : "string" == typeof e && (t = e);
                return t;
              })(e)
            ),
            !1
          );
        }
      }
      var le = i(646323),
        de = i(151121),
        ue = i(605962);
      i(567704), i(627687), i(816105);
      async function ce(e, t, s, o) {
        const n = await (async function (e, t) {
          const { PartiallyClosingDialogRenderer: s } = await i
              .e(3168)
              .then(i.bind(i, 796737)),
            r = new s();
          return new Promise((i, s) => {
            t?.aborted
              ? i({ status: !1 })
              : (r.open({ ...e, dialogActionHandler: i }),
                t?.addEventListener(
                  "abort",
                  () => {
                    r.close(), i({ status: !1 });
                  },
                  { once: !0 }
                ));
          });
        })(e, o);
        if (!n.status) return !1;
        try {
          return await t(n.qty);
        } catch (e) {
          return (
            s(
              r.t(null, void 0, i(139924)),
              (function (e) {
                let t = "";
                null !== e && "object" == typeof e && e.message
                  ? (t = e.message)
                  : "string" == typeof e && (t = e);
                return t;
              })(e)
            ),
            !1
          );
        }
      }
      var he = i(220858);
      const pe = {
          async show(e) {
            const t = r.t(null, { replace: { symbol: e } }, i(227617)),
              s = r.t(null, { replace: { symbol: e } }, i(182914));
            return (0, he.showSimpleConfirmDialog)({ title: s, text: t });
          },
        },
        _e = {
          async show(e) {
            const t = r.t(null, { replace: { symbol: e } }, i(156910)),
              s = r.t(null, { replace: { symbol: e } }, i(830538));
            return (0, he.showSimpleConfirmDialog)({ title: s, text: t });
          },
        };
      var ge = i(50959);
      function be(e) {
        const {
          symbol: t,
          side: s,
          qty: o,
          price: n,
          id: a,
          closePositionCancelsOrders: l,
        } = e;
        return ge.createElement(
          ge.Fragment,
          null,
          ge.createElement(
            "div",
            null,
            void 0 !== a
              ? r.t(null, void 0, i(792417)).replace("{id}", a)
              : r.t(null, void 0, i(267539))
          ),
          ge.createElement("div", null, ge.createElement("b", null, t)),
          ge.createElement(
            "div",
            null,
            ge.createElement("b", null, `${s} ${o} @ ${n}`)
          ),
          ge.createElement("div", null, l && ` ${r.t(null, void 0, i(178224))}`)
        );
      }
      const ye = (0, E.getLogger)("Trading.BrokerCommandsUI"),
        me = { symbol: 1, qty: 1, side: 1, type: 1, seenPrice: 1 };
      function ve(e) {
        for (const t in me) if (!(t in e)) return !1;
        return !0;
      }
      const fe = !1;
      class Pe {
        constructor({
          activeBroker: e,
          guiAccessor: t,
          noConfirmEnabled: i,
          orderViewController: s,
          showErrorNotification: r,
          trackEvent: o,
          tradingLinking: n,
          tradedContextLinking: a,
          abortSignalGetter: l,
        }) {
          (this._closePositionDialogVisibility = new Q.DialogVisibility()),
            (this._isClosePositionDialogLoading = !1),
            (this._isCloseIndividualPositionDialogLoading = !1),
            (this._onClosePositionDialogOpen = (e) => {
              this._closePositionDialogVisibility.setValue({
                isVisible: !0,
                isFullScreen: e,
              });
            }),
            (this._onClosePositionDialogClose = () => {
              this._closePositionDialogVisibility.setValue({ isVisible: !1 });
            }),
            (this._tradingLinking = n),
            (this._tradedContextLinking = a),
            (this._activeBroker = e),
            (this._guiAccessor = t),
            (this._orderViewController = s),
            (this._showErrorNotification = r),
            (this._noConfirmEnabled = i),
            (this._trackEvent = o),
            (this._getAbortSignal = l),
            (this.closePositionDialogVisibility =
              this._closePositionDialogVisibility.value$);
        }
        async placeOrder(e, t, i, s, r = !0) {
          const o = t && this._noConfirmEnabled.value(),
            n =
              this._guiAccessor && o
                ? this._guiAccessor.showReplayConfirmationDialog()
                : Promise.resolve(!1);
          try {
            await n;
          } catch (e) {
            return Promise.resolve(!1);
          }
          const a = await this._activeBroker.isTradable(e.symbol);
          if (o && a.tradable && ve(e)) {
            return (
              await this._activeBroker.createPlaceOrderContext({
                order: e,
                source: "instant",
                isValidationEnabled: !1,
                isDisposable: !0,
              })
            ).send();
          }
          {
            const t = this._activeBroker.metainfo();
            if (t.customUI && void 0 !== t.customUI.showOrderDialog)
              return t.customUI.showOrderDialog(e);
          }
          return this._orderViewController().then((t) =>
            this._activeBroker
              ? t.showOrderView({
                  order: e,
                  focus: s,
                  forceOrderDialog: i,
                  shouldOpenOrderTicket: oe.isResizableDrawerEnabled || r,
                  forceCollapsedOrderDrawer:
                    oe.isResizableDrawerEnabled && !1 === r && fe,
                })
              : Promise.reject("Broker connection adapter is null")
          );
        }
        async modifyOrder(e, t, i, s) {
          if (t && this._noConfirmEnabled.value() && 1 === e.parentType) {
            return (
              await this._activeBroker.createEditOrderContext({
                order: e,
                source: "instant",
                isDisposable: !0,
              })
            ).send();
          }
          return this._modifyOrder(e, t, i, s);
        }
        async closePosition(e) {
          if (
            (this._makeSureBrokerIsConnected(),
            this._isClosePositionDialogLoading)
          )
            return !1;
          let t, i;
          this._isClosePositionDialogLoading = !0;
          try {
            if (((t = await this._activeBroker.positionById(e)), void 0 === t))
              return !1;
            const { tradable: s } = await this._activeBroker.isTradable(
              t.symbol
            );
            if ((await this._assertPositionExistsAndNotClosed(t.id), !s))
              return this._closePositionForNonTradableSymbol(t);
            if (this._noConfirmEnabled.value())
              return this._activeBroker.closePosition(e);
            i = await this._obtainPositionClosingData(t);
          } finally {
            this._isClosePositionDialogLoading = !1;
          }
          if (void 0 === i) return !1;
          const { supportPartialClosePosition: s, ...r } = i,
            o = this._activeBroker.metainfo();
          if (void 0 !== o.customUI?.showClosePositionDialog)
            return o.customUI?.showClosePositionDialog(t);
          if (s) {
            const i = (i) => (
              i !== t?.qty
                ? this._trackEvent("", "Close Position Dialog", "partial")
                : this._trackEvent("", "Close Position Dialog", "full"),
              this._activeBroker.closePosition(e, i)
            );
            return ce(
              {
                ...r,
                positionOrIndividualPosition: t,
                onOpen: this._onClosePositionDialogOpen,
                onClose: this._onClosePositionDialogClose,
              },
              i,
              this._showErrorNotification,
              this._getAbortSignal()
            );
          }
          {
            const t = () => this._activeBroker.closePosition(e);
            return ae({
              showErrorNotification: this._showErrorNotification,
              handler: t,
              message: i.message,
              onOpen: this._onClosePositionDialogOpen,
              onClose: this._onClosePositionDialogClose,
              abortSignal: this._getAbortSignal(),
            });
          }
        }
        async closeIndividualPosition(e) {
          if (
            (this._makeSureBrokerIsConnected(),
            (0, s.assert)(
              !!this._activeBroker.config.supportPositionNetting,
              "Broker doesn`t support individual positions"
            ),
            this._noConfirmEnabled.value())
          )
            return this._activeBroker.closeIndividualPosition(e);
          {
            if (this._isCloseIndividualPositionDialogLoading) return !1;
            const t = await this._obtainIndividualPositionClosingData(e);
            if (void 0 === t) return !1;
            const {
                supportPartialCloseIndividualPosition: i,
                individualPosition: s,
                ...r
              } = t,
              o =
                this._activeBroker.metainfo().customUI?.showClosePositionDialog;
            if (void 0 !== o) return o(s);
            if (i) {
              const t = async (t) => (
                t !== s.qty
                  ? this._trackEvent(
                      "",
                      "Close Individual Position Dialog",
                      "partial"
                    )
                  : this._trackEvent(
                      "",
                      "Close Individual Position Dialog",
                      "full"
                    ),
                this._activeBroker.closeIndividualPosition(e, t)
              );
              return ce(
                {
                  ...r,
                  positionOrIndividualPosition: s,
                  onOpen: this._onClosePositionDialogOpen,
                  onClose: this._onClosePositionDialogClose,
                },
                t,
                this._showErrorNotification,
                this._getAbortSignal()
              );
            }
            return ae({
              showErrorNotification: this._showErrorNotification,
              handler: () => this._activeBroker.closeIndividualPosition(e),
              message: t.message,
              onOpen: this._onClosePositionDialogOpen,
              onClose: this._onClosePositionDialogClose,
              abortSignal: this._getAbortSignal(),
            });
          }
        }
        editPositionBrackets(e, t, i, r) {
          return (
            this._makeSureBrokerIsConnected(),
            (0, s.assert)(
              !!this._activeBroker.config.supportPositionBrackets,
              "Broker doesn`t support brackets on positions"
            ),
            r && this._noConfirmEnabled.value()
              ? this._activeBroker.editPositionBrackets(e, t ?? {})
              : this._activeBroker
                  .positionById(e)
                  .then((e) =>
                    this._activeBroker
                      ? this._showPositionDialog((0, s.ensureDefined)(e), t, i)
                      : Promise.reject("Broker connection adapter is null")
                  )
          );
        }
        editIndividualPositionBrackets(e, t, i, r) {
          return r && this._noConfirmEnabled.value()
            ? this._activeBroker.editIndividualPositionBrackets(e, t ?? {})
            : this._activeBroker
                .individualPositionById(e)
                .then((e) =>
                  this._activeBroker
                    ? this._showIndividualPositionDialog(
                        (0, s.ensureDefined)(e),
                        t,
                        i
                      )
                    : Promise.reject("Broker connection adapter is null")
                );
        }
        reversePosition(e) {
          const t = this._activeBroker.metainfo();
          return (
            this._makeSureBrokerIsConnected(),
            t.configFlags.supportMultiposition &&
            !this._activeBroker.config.supportNativeReversePosition
              ? Promise.reject(
                  "Cannot reverse position on multiposition acount"
                )
              : this._noConfirmEnabled.value()
              ? this._activeBroker.reversePosition(e)
              : this._activeBroker.positionById(e).then((i) => {
                  if (!this._activeBroker)
                    return Promise.reject("Broker connection adapter is null");
                  if (
                    void 0 !== t.customUI?.showReversePositionDialog &&
                    void 0 !== i
                  )
                    return t.customUI.showReversePositionDialog(i);
                  const s = this._activeBroker.reversePosition.bind(
                    this._activeBroker,
                    e
                  );
                  return (0, le.reversePositionDialog)({
                    positionId: e,
                    showErrorNotification: this._showErrorNotification,
                    handler: s,
                    closePositionCancelsOrders:
                      this._activeBroker.config.closePositionCancelsOrders,
                    abortSignal: this._getAbortSignal(),
                  });
                })
          );
        }
        async cancelOrder(e) {
          this._makeSureBrokerIsConnected();
          const t = await this._activeBroker.orderById(e);
          if (void 0 === t) return Promise.reject("Failed to find order");
          const { tradable: i } = await this._activeBroker.isTradable(t.symbol);
          if ((await this._assertOrderExistsAndNotCanceled(t.id), !i))
            return this._cancelOrderForNonTradableSymbol(t.symbol, t.id);
          if (this._noConfirmEnabled.value())
            return this._activeBroker.cancelOrder(e);
          {
            const i = this._activeBroker.cancelOrder.bind(
                this._activeBroker,
                e
              ),
              s = this._activeBroker.metainfo();
            if (void 0 !== s.customUI?.showCancelOrderDialog)
              return s.customUI?.showCancelOrderDialog(t);
            if (t.parentId) {
              const e = (await this._activeBroker.orders()).filter(
                (e) => e.refNumber === t.refNumber
              );
              return s.configFlags.supportCancellingBothBracketsOnly &&
                e.length > 1
                ? this._showCancelMultipleBracketsDialog(t.parentId, i)
                : this._showCancelBracketsDialog(t.id, i);
            }
            return this._showCancelOrderDialog(t.id, i);
          }
        }
        cancelOrders(e, t) {
          return (
            this._makeSureBrokerIsConnected(),
            this._activeBroker.orders().then((i) => {
              if (!this._activeBroker)
                return Promise.reject("Broker connection adapter is null");
              const s = i.filter(
                (i) =>
                  i.symbol === e &&
                  (!t || i.side === t) &&
                  (function (e) {
                    return 4 === e.status || 3 === e.status || 6 === e.status;
                  })(i)
              );
              if (!s.length) return Promise.resolve(!1);
              if (1 === s.length) return this.cancelOrder(s[0].id);
              const r = s.map((e) => e.id);
              if (this._noConfirmEnabled.value())
                return this._activeBroker.cancelOrders(e, t, r);
              {
                const i = this._activeBroker.cancelOrders.bind(
                  this._activeBroker
                );
                return this._showCancelMultipleOrdersDialog(e, t, r, i);
              }
            })
          );
        }
        async _modifyOrder(e, t, s, o) {
          const n = this._activeBroker.metainfo();
          if (
            (this._makeSureBrokerIsConnected(), e.flags && e.flags.trailingStop)
          )
            return (
              ye.logError("Attempt to modify trailing stop loss order" + e.id),
              this._showErrorNotification(
                r.t(null, void 0, i(500864)),
                r.t(null, void 0, i(908940))
              ),
              Promise.resolve(!1)
            );
          await this._setSymbol(e.symbol);
          const a = await this._activeBroker.symbolInfo(e.symbol);
          if (
            ((e.limitPrice =
              void 0 !== a.limitPriceStep && void 0 !== e.limitPrice
                ? (0, q.roundToStepByPriceTypeAndSide)(
                    e.limitPrice,
                    a.limitPriceStep,
                    1,
                    e.side
                  )
                : e.limitPrice),
            (e.stopPrice =
              void 0 !== a.stopPriceStep && void 0 !== e.stopPrice
                ? (0, q.roundToStepByPriceTypeAndSide)(
                    e.stopPrice,
                    a.stopPriceStep,
                    2,
                    e.side
                  )
                : e.stopPrice),
            !n.configFlags.supportModifyTrailingStop)
          ) {
            const t = await this._activeBroker.orderById(e.id);
            e.hasTrailingStopBracket = void 0 !== t?.trailingStopPips;
          }
          const l = t && this._noConfirmEnabled.value();
          let d = s || (1 === e.type ? 1 : 2);
          if (e.parentId && !$.enabled("always_pass_called_order_to_modify")) {
            const t = await this._getParentOrderOrPosition(e);
            if (void 0 !== t) {
              d = s || (1 === e.type ? 3 : 4);
              const i = {
                takeProfit: e.limitPrice || t.takeProfit,
                trailingStopPips: e.trailingStopPips || t.trailingStopPips,
                stopLoss: e.stopPrice || t.stopLoss,
                guaranteedStop: e.guaranteedStop ?? t.guaranteedStop,
              };
              if (3 === e.parentType)
                return l
                  ? this._activeBroker.editIndividualPositionBrackets(t.id, i)
                  : this._showIndividualPositionDialog(t, i, d);
              if (2 === e.parentType && e.qty === Math.abs(t.qty))
                return l
                  ? this._activeBroker.editPositionBrackets(t.id, i)
                  : this._showPositionDialog(t, i, d);
              1 === e.parentType &&
                (0, T.isOrderActive)(t.status) &&
                (((e = (0, re.default)(t)).takeProfit = i.takeProfit),
                (e.trailingStopPips = i.trailingStopPips),
                (e.stopLoss = i.stopLoss),
                (e.guaranteedStop = i.guaranteedStop),
                (e.hasTrailingStopBracket = void 0 !== t.trailingStopPips));
            }
          }
          return l
            ? this._activeBroker.modifyOrder(e)
            : n.customUI && void 0 !== n.customUI.showOrderDialog
            ? n.customUI.showOrderDialog(e, d)
            : this._orderViewController().then((t) =>
                this._activeBroker
                  ? t.showOrderView({ order: e, focus: d, forceOrderDialog: o })
                  : Promise.reject("Broker connection adapter is null")
              );
        }
        async _setSymbol(e) {
          this._tradingLinking.value().symbol !== e &&
            (await this._tradingLinking.setSymbol(e));
        }
        _makeSureBrokerIsConnected() {
          (0, s.assert)(
            1 === this._activeBroker.connectionStatus(),
            "Broker is not connected"
          );
        }
        async _showPositionDialog(e, t = {}, s) {
          await this._setSymbol(e.symbol);
          const o = await this._activeBroker.isTradable(e.symbol);
          if (!o.tradable) {
            const t =
              void 0 !== o.reason
                ? o.reason
                : (0, q.makeNonTradableSymbolText)(
                    e.symbol,
                    this._activeBroker.metainfo().title
                  );
            return (
              this._showErrorNotification(r.t(null, void 0, i(734567)), t),
              Promise.resolve(!1)
            );
          }
          {
            const i = this._activeBroker.metainfo();
            if (i.customUI && void 0 !== i.customUI.showPositionDialog)
              return i.customUI.showPositionDialog(
                e,
                {
                  stopLoss: t.stopLoss || e.stopLoss,
                  takeProfit: t.takeProfit || e.takeProfit,
                },
                s
              );
          }
          return this._orderViewController().then((i) =>
            this._activeBroker
              ? i.showPositionView(
                  e,
                  {
                    stopLoss: t.stopLoss,
                    takeProfit: t.takeProfit,
                    trailingStopPips: t.trailingStopPips,
                    guaranteedStop: t.guaranteedStop,
                  },
                  s || (e.limitPrice && 3) || (e.stopPrice && 4)
                )
              : Promise.reject("Broker connection adapter is null")
          );
        }
        async _showIndividualPositionDialog(e, t = {}, i) {
          await this._setSymbol(e.symbol);
          {
            const s = this._activeBroker.metainfo();
            if (s.customUI && void 0 !== s.customUI.showPositionDialog)
              return s.customUI.showPositionDialog(
                e,
                {
                  stopLoss: t.stopLoss || e.stopLoss,
                  takeProfit: t.takeProfit || e.takeProfit,
                },
                i
              );
          }
          return this._orderViewController().then((s) =>
            this._activeBroker
              ? s.showIndividualPositionView(
                  e,
                  {
                    stopLoss: t.stopLoss,
                    takeProfit: t.takeProfit,
                    trailingStopPips: t.trailingStopPips,
                    guaranteedStop: t.guaranteedStop,
                  },
                  i || (e.limitPrice && 3) || (e.stopPrice && 4)
                )
              : Promise.reject("Broker connection adapter is null")
          );
        }
        _isMaintenance() {
          return isFeatureEnabled(
            (0, T.makeMaintananceFeatureToggleName)(
              this._activeBroker.metainfo().id
            )
          );
        }
        _isBrokerSideMaintenance() {
          return isFeatureEnabled(
            (0, T.makeBrokerSideMaintananceFeatureToggleName)(
              this._activeBroker.metainfo().id
            )
          );
        }
        _showCancelOrderDialog(e, t) {
          return de.ConfirmOrderCancelDialog.get()
            .open(e, this._getAbortSignal())
            .then((i) => (i ? t(e) : Promise.resolve(!1)));
        }
        _showCancelMultipleOrdersDialog(e, t, i, s) {
          const r = i.length;
          return de.ConfirmOrderCancelDialog.get()
            .multiple(e, t, r, this._getAbortSignal())
            .then((r) => (r ? s(e, t, i) : Promise.resolve(!1)));
        }
        async _showCancelBracketsDialog(e, t) {
          return ue.ConfirmBracketsCancelDialog.get()
            .open(e, this._getAbortSignal())
            .then((i) => (i ? t(e) : Promise.resolve(!1)));
        }
        _showCancelMultipleBracketsDialog(e, t) {
          return ue.ConfirmBracketsCancelDialog.get()
            .multiple(e, this._getAbortSignal())
            .then((i) => (i ? t(e) : Promise.resolve(!1)));
        }
        async _obtainPositionClosingData(e) {
          try {
            const {
                supportLots: t,
                qtyStep: s,
                uiQtyStep: o,
                minQty: n,
                qtyLabel: a,
                qtyFormatter: l,
                priceFormatter: d,
              } = await this._obtainPositionOrIndividualPositionClosingCommonData(
                e
              ),
              u =
                this._activeBroker.metainfo().configFlags
                  .supportPartialClosePosition,
              c = be({
                symbol: (0, T.getSymbolNameOverFullname)(e.symbol),
                side:
                  1 === e.side
                    ? r.t(null, void 0, i(728257))
                    : r.t(null, void 0, i(13009)),
                qty: l.format(e.qty),
                price: d.format(e.avgPrice),
                closePositionCancelsOrders:
                  this._activeBroker.config.closePositionCancelsOrders,
              });
            return {
              position: e,
              supportLots: t,
              qtyStep: s,
              uiQtyStep: o,
              minQty: n,
              qtyLabel: a,
              supportPartialClosePosition: u,
              qtyFormatter: l,
              message: c,
            };
          } catch (e) {
            return;
          }
        }
        async _obtainIndividualPositionClosingData(e) {
          try {
            this._isCloseIndividualPositionDialogLoading = !0;
            const t = (0, s.ensureDefined)(
                await this._activeBroker.individualPositionById(e)
              ),
              {
                supportLots: o,
                qtyStep: n,
                uiQtyStep: a,
                minQty: l,
                qtyLabel: d,
                qtyFormatter: u,
                priceFormatter: c,
              } = await this._obtainPositionOrIndividualPositionClosingCommonData(
                t
              ),
              h =
                this._activeBroker.metainfo().configFlags
                  .supportPartialCloseIndividualPosition,
              p = be({
                symbol: (0, T.getSymbolNameOverFullname)(t.symbol),
                side:
                  1 === t.side
                    ? r.t(null, void 0, i(728257))
                    : r.t(null, void 0, i(13009)),
                qty: u.format(t.qty),
                price: c.format(t.price),
                id: e,
                closePositionCancelsOrders:
                  this._activeBroker.config.closePositionCancelsOrders,
              });
            return (
              (this._isCloseIndividualPositionDialogLoading = !1),
              {
                individualPosition: t,
                supportLots: o,
                qtyStep: n,
                uiQtyStep: a,
                minQty: l,
                qtyLabel: d,
                supportPartialCloseIndividualPosition: h,
                qtyFormatter: u,
                message: p,
              }
            );
          } catch (e) {
            return void (this._isCloseIndividualPositionDialogLoading = !1);
          }
        }
        async _obtainPositionOrIndividualPositionClosingCommonData(e) {
          const t = await this._activeBroker.symbolInfo(e.symbol),
            i = void 0 !== t.lotSize,
            s = t.qty.step,
            r = t.qty.uiStep,
            o = t.qty.min,
            n = t.units;
          return {
            supportLots: i,
            qtyStep: s,
            uiQtyStep: r,
            minQty: o,
            qtyFormatter: await this._activeBroker.quantityFormatter(e.symbol),
            priceFormatter: await this._activeBroker.formatter(e.symbol, !1),
            qtyLabel: n,
          };
        }
        async _closePositionForNonTradableSymbol(e) {
          const {
            supportClosePositionForNonTradableSymbol: t,
            supportClosePosition: s,
          } = this._activeBroker.metainfo().configFlags;
          if (!t || !s) {
            const t = r.t(null, { replace: { symbol: e.symbol } }, i(466690));
            return (
              this._showErrorNotification(t, r.t(null, void 0, i(495610))), !1
            );
          }
          return (
            !!(await pe.show(e.symbol)) &&
            this._activeBroker.closePosition(e.id)
          );
        }
        async _cancelOrderForNonTradableSymbol(e, t) {
          if (
            !this._activeBroker.metainfo().configFlags
              .supportCancelOrderForNonTradableSymbol
          ) {
            const t = r.t(null, { replace: { symbol: e } }, i(947962));
            return (
              this._showErrorNotification(t, r.t(null, void 0, i(746562))), !1
            );
          }
          return !!(await _e.show(e)) && this._activeBroker.cancelOrder(t);
        }
        async _assertPositionExistsAndNotClosed(e) {
          const t = await this._activeBroker.positionById(e);
          if (!(0, T.checkIsExistingPosition)(t))
            throw new I.UserFriendlyError({
              userFriendlyMessage: r.t(
                null,
                { replace: { positionId: e } },
                i(526672)
              ),
              detailedErrorMessage: `Position ${e} doesn't exist or has already been closed`,
            });
        }
        async _getParentOrderOrPosition(e) {
          try {
            return 1 === e.parentType
              ? await this._activeBroker.orderById(e.parentId)
              : 2 === e.parentType
              ? await this._activeBroker.positionById(e.parentId)
              : 3 === e.parentType
              ? await this._activeBroker.individualPositionById(e.parentId)
              : void 0;
          } catch {
            return;
          }
        }
        async _assertOrderExistsAndNotCanceled(e) {
          const t = await this._activeBroker.orderById(e);
          if (void 0 === t || 1 === t.status)
            throw new I.UserFriendlyError({
              userFriendlyMessage: r.t(
                null,
                { replace: { orderId: e } },
                i(733144)
              ),
              detailedErrorMessage: `Order ${e} doesn't exist or has already been canceled`,
            });
        }
      }
      class ke {
        constructor(e) {
          this._domPanel = null;
          const {
            resizerBridge: t,
            closeFn: i,
            trading: s,
            qtySuggester: r,
            tradingLinking: o,
            headerState: n,
            isLoading: a,
          } = e;
          (this._resizerBridge = t),
            (this._trading = s),
            (this._qtySuggester = r),
            (this._tradingLinking = o),
            (this._headerState = n),
            (this._isLoading = a),
            (this._getDOMPanel = (0, V.sequentialize)(this._getDOMPanel)),
            (this._close = () => {
              this.unmount(), i();
            });
        }
        centerDOM() {
          this._domPanel?.centerDOM();
        }
        mount() {
          return this._getDOMPanel().then((e) => {
            e.setVisibility(!0);
          });
        }
        unmount() {
          this._getDOMPanel().then((e) => {
            e.setVisibility(!1);
          });
        }
        headerStateValue() {
          return this._headerState;
        }
        async _getDOMPanel() {
          if (null !== this._domPanel) return this._domPanel;
          const { DOMPanel: e } = await Promise.all([
              i.e(6196),
              i.e(5480),
              i.e(9296),
              i.e(2106),
              i.e(303),
              i.e(422),
              i.e(7935),
              i.e(3062),
              i.e(4938),
              i.e(7280),
              i.e(5881),
              i.e(4920),
              i.e(2849),
              i.e(1818),
              i.e(7125),
              i.e(8524),
              i.e(1456),
              i.e(4627),
            ]).then(i.bind(i, 179050)),
            t = (this._domPanel = new e(
              this._trading,
              this._resizerBridge,
              this._qtySuggester,
              this._tradingLinking,
              this._headerState,
              this._isLoading
            ));
          return t.setCloseHandler(this._close), t;
        }
      }
      class Se {
        constructor(e) {
          this._headerState = e;
        }
        mount() {
          return Promise.resolve();
        }
        unmount() {}
        headerStateValue() {
          return this._headerState;
        }
      }
      var Ce,
        we = i(970267),
        Te = i(632227),
        Be = i(584811);
      !(function (e) {
        (e.XSmall = "xsmall"), (e.Small = "small"), (e.Medium = "medium");
      })(Ce || (Ce = {}));
      const Oe = (0, ge.createContext)("xsmall");
      var Me = i(497754),
        Ie = i.n(Me),
        Ee = i(273388),
        De = i(234639);
      function Ve(e) {
        const { startSlot: t, endSlot: i, children: s, title: r } = e;
        return ge.createElement(
          ge.Fragment,
          null,
          t,
          s &&
            ge.createElement(
              "span",
              {
                title: r,
                className: Ie()(
                  De.content,
                  r ? "apply-common-tooltip" : "apply-overflow-tooltip"
                ),
              },
              s
            ),
          i
        );
      }
      const $e = (0, ge.forwardRef)((e, t) => {
        const {
            id: i,
            active: s,
            startSlot: r,
            children: o,
            endSlot: n,
            className: a,
            title: l,
            ...d
          } = e,
          u = (0, ge.useContext)(Oe);
        return ge.createElement(
          "button",
          {
            ...d,
            id: i,
            ref: t,
            className: Ie()(De.lightTabButton, De[u], s && De.selected, a),
          },
          ge.createElement(Ve, { startSlot: r, endSlot: n, title: l }, o)
        );
      });
      $e.displayName = "LightTabBaseButton";
      const Le = (0, ge.forwardRef)((e, t) => {
        const {
            item: i,
            highlighted: s,
            handleItemRef: r,
            onClick: o,
            ...n
          } = e,
          a = (0, ge.useCallback)(() => {
            o && o(i);
          }, [o, i]),
          l = (0, ge.useCallback)(
            (e) => {
              r && r(i, e), (0, Ee.isomorphicRef)(t)(e);
            },
            [i, r, t]
          );
        return ge.createElement(
          $e,
          {
            ...n,
            id: i.id,
            title: i.title,
            onClick: a,
            ref: l,
            startSlot: i.startSlot,
            endSlot: i.endSlot,
          },
          i.children
        );
      });
      Le.displayName = "LightTabButton";
      var xe = i(540801),
        Ae = i(865679),
        Re = i(614206);
      function Fe(e) {
        const {
            items: t,
            isRtl: i,
            classNameWrap: s,
            className: r,
            style: o,
            "data-name": n = "light-tabs-buttons",
            size: a = "xsmall",
          } = e,
          {
            getBindings: l,
            scrollWrapBinding: d,
            tablistBinding: u,
            handleActivate: c,
          } = (0, Ae.useTabsMainHandlers)(xe.TabNames.LightButtonTabs, e, {
            isRtl: i,
          });
        return ge.createElement(
          Oe.Provider,
          { value: a },
          ge.createElement(
            "div",
            { ...d, "data-name": n, className: s, style: o },
            ge.createElement(
              "div",
              { ...u, className: Ie()(Re.lightTabs, Re[a], r) },
              t.map((e, t) =>
                ge.createElement(Le, {
                  ...l(e),
                  key: e.id,
                  item: e,
                  onClick: () => c(e),
                  "data-name": `light-tab-${t}`,
                })
              )
            )
          )
        );
      }
      var Ne = i(661851),
        qe = i(431520),
        Qe = i(596225);
      function We(e) {
        const { items: t, activeTabId: i, isVisible$: s, onSelect: r } = e,
          o = (0, Ne.useObservable)(s),
          n = (0, ge.useCallback)((e) => e.id === i, [i]),
          a = (0, ge.useCallback)(
            (e) => {
              const t = e.id;
              r(t),
                (0, ie.trackEvent)(
                  "GUI",
                  t === W.TradingPage.OrderPanel
                    ? "Select Order Tab"
                    : "Select DOM Tab"
                );
            },
            [r]
          );
        return o
          ? ge.createElement(
              ge.Fragment,
              null,
              ge.createElement(Fe, {
                id: "trading-panel-page-tabs",
                classNameWrap: Qe.tabs,
                items: t,
                isRtl: qe.isRtl,
                isActive: n,
                onActivate: a,
              }),
              ge.createElement(Be.Divider, {
                className: Qe.divider,
                size: "xsmall",
              })
            )
          : ge.createElement(ge.Fragment, null);
      }
      var Ue = i(28033),
        ze = i(383383);
      class je {
        constructor(e, t) {
          (this.isOpened = new A.WatchedValue(!1)),
            (this.isOpeningAvailable = new A.WatchedValue(!1)),
            (this.isLoading = new A.WatchedValue(!1)),
            (this._showOrderPanelOnStart = $.enabled(
              "show_order_panel_on_start"
            )),
            (this._orderPanelEnabled = $.enabled("order_panel")),
            (this._domPanelEnabled = (0, Ue.checkIsDOMAvailable)()),
            (this._isPanelCanBeOpened =
              this._domPanelEnabled || this._orderPanelEnabled),
            (this._pageTabs = null),
            (this._pages = {}),
            (this._panelWidth = W.minPanelWidth),
            (this.setPage = (e) => {
              this.isOpened.value() &&
                this.activePage.value() !== e &&
                this._pages[this.activePage.value()] &&
                this._pages[this.activePage.value()].unmount(),
                this.activePage.setValue(e),
                n.setValue(z.settingsKeys.TRADING_PANEL_ACTIVE_PAGE, e);
            }),
            (this.openPage = (e) => {
              this.setPage(e), this.open();
            }),
            (this.open = () => {
              const e = this._pages[this.activePage.value()];
              if (this.isOpeningAvailable.value() && e) {
                this._togglePanel(!0), this.isOpened.setValue(!0);
                const s = e.headerStateValue();
                (0, we.mountHeader)(this._header, s),
                  null !== this._tabsConfig &&
                    null !== this._pageTabs &&
                    ((t = this._pageTabs),
                    (i = {
                      items: this._tabsConfig.items,
                      activeTabId: this.activePage.value(),
                      isVisible$: s.backFunction$.pipe(
                        (0, p.map)((e) => void 0 === e)
                      ),
                      onSelect: this._tabsConfig.onSelect,
                    }),
                    Te.render(ge.createElement(We, { ...i }), t)),
                  e.mount();
              }
              var t, i;
            }),
            (this.close = () => {
              this.isOpened.setValue(!1),
                this._pages[this.activePage.value()] &&
                  this._pages[this.activePage.value()].unmount(),
                (0, we.unmountHeader)(this._header),
                this._togglePanel(!1);
            }),
            (this._onLayoutResizeHandleMousedown = (e) => {
              if (e.defaultPrevented || !e.cancelable) return;
              e.preventDefault();
              const t = Math.max(this._resizerBridge.width.value(), 0);
              let i;
              i = "touches" in e ? e.touches[0].clientX : e.clientX;
              const s = (e) => {
                  let s;
                  e.preventDefault(),
                    (s = "touches" in e ? e.touches[0].clientX : e.clientX);
                  let r = t - (s - i);
                  r < W.minPanelWidth
                    ? (r = W.minPanelWidth)
                    : r > W.maxPanelWidth && (r = W.maxPanelWidth),
                    this._requestWidth(r);
                },
                r = () => {
                  document.removeEventListener("mousemove", s),
                    document.removeEventListener("touchmove", s),
                    document.removeEventListener("mouseup", r),
                    document.removeEventListener("touchend", r),
                    n.setValue(z.settingsKeys.PANEL_WIDTH, this._panelWidth);
                };
              document.addEventListener("mousemove", s),
                document.addEventListener("touchmove", s, { passive: !1 }),
                document.addEventListener("mouseup", r),
                document.addEventListener("touchend", r, { passive: !1 });
            });
          let i = n.getValue(
            z.settingsKeys.TRADING_PANEL_ACTIVE_PAGE,
            this._orderPanelEnabled
              ? W.TradingPage.OrderPanel
              : W.TradingPage.DOMPanel
          );
          i !== W.TradingPage.DOMPanel ||
            this._domPanelEnabled ||
            (i = W.TradingPage.OrderPanel),
            i !== W.TradingPage.OrderPanel ||
              this._orderPanelEnabled ||
              (i = W.TradingPage.DOMPanel),
            (this.activePage = new A.WatchedValue(i));
          {
            const e = n.getBool(
              z.settingsKeys.TRADING_PANEL_OPENED,
              this._showOrderPanelOnStart
            );
            this.isOpened.setValue(e && this._isPanelCanBeOpened);
          }
          (this._tabsConfig = t),
            (this._resizerBridge = e),
            (this.rootContainer = e.container.value()),
            this.rootContainer.classList.add(ze.rootContainer),
            (this.rootContainer.tabIndex = -1),
            this.rootContainer.classList.toggle(
              ze.hidden,
              !this.isOpened.value()
            ),
            (this.container = document.createElement("div")),
            this.container.classList.add(
              ze["trading-panel-content"],
              "trading-panel-content"
            ),
            (this._header = document.createElement("div")),
            this._header.classList.add(ze["trading-panel-header"]),
            this.rootContainer.appendChild(this._header),
            null !== this._tabsConfig &&
              ((this._pageTabs = document.createElement("div")),
              this._pageTabs.classList.add(ze["trading-panel-tabs"]),
              this.rootContainer.appendChild(this._pageTabs)),
            this.rootContainer.appendChild(this.container),
            this._addSpinner(),
            this._addResizeHandler(),
            this._subscribeVisibility(),
            this.isLoading.subscribe(this._setLoading.bind(this));
        }
        addPage(e, t) {
          this._pages[e] = t;
        }
        isPageOpened(e) {
          return this.isOpened.value() && this.activePage.value() === e;
        }
        _setLoading(e) {
          e
            ? ((this._header.style.display = "none"),
              null !== this._pageTabs && (this._pageTabs.style.opacity = "0"),
              (this.container.style.visibility = "hidden"),
              (this.container.style.opacity = "0"),
              this.rootContainer.appendChild(this._spinnerContainer))
            : (this._header.style.removeProperty("display"),
              null !== this._pageTabs &&
                this._pageTabs.style.removeProperty("opacity"),
              this.container.style.removeProperty("visibility"),
              this.container.style.removeProperty("opacity"),
              this.rootContainer.contains(this._spinnerContainer) &&
                this.rootContainer.removeChild(this._spinnerContainer));
        }
        _addSpinner() {
          (this._spinnerContainer = document.createElement("div")),
            this._spinnerContainer.classList.add(ze["trading-panel-spinner"]),
            Promise.all([i.e(9325), i.e(7102)])
              .then(i.bind(i, 974063))
              .then((e) => {
                e.render(this._spinnerContainer);
              });
        }
        _addResizeHandler() {
          (this._handle = document.createElement("div")),
            this._handle.classList.add(ze["trading-panel-handle"]),
            this.rootContainer.appendChild(this._handle),
            this._handle.addEventListener(
              "mousedown",
              this._onLayoutResizeHandleMousedown,
              { passive: !1 }
            ),
            this._handle.addEventListener(
              "touchstart",
              this._onLayoutResizeHandleMousedown,
              { passive: !1 }
            ),
            (this._panelWidth =
              n.getInt(z.settingsKeys.PANEL_WIDTH) || W.minPanelWidth);
        }
        _togglePanel(e) {
          this._resizerBridge.negotiateWidth(e ? this._panelWidth : 0),
            this._resizerBridge.negotiateHeight(e ? W.panelHeight : 0),
            this.rootContainer.classList.toggle(ze.hidden, !e),
            n.setValue(z.settingsKeys.TRADING_PANEL_OPENED, e);
        }
        _updateOpeningAvailability() {
          const e =
            "visible" !== document.visibilityState ||
            this._resizerBridge.visible.value();
          this.isOpeningAvailable.setValue(
            Boolean(
              e &&
                this._isPanelCanBeOpened &&
                this._resizerBridge.availHeight.value() >= W.panelHeight &&
                this._resizerBridge.availWidth.value() >= this._panelWidth
            )
          );
        }
        _subscribeVisibility() {
          this._updateOpeningAvailability(),
            this._resizerBridge.visible.subscribe(() => {
              this._updateOpeningAvailability();
            }),
            this._resizerBridge.availHeight.subscribe(() => {
              this._updateOpeningAvailability();
            }),
            this._resizerBridge.availWidth.subscribe(() => {
              this._updateOpeningAvailability();
            });
        }
        _requestWidth(e) {
          this._canResizeWidth(e) &&
            this._resizerBridge.width.value() !== e &&
            (this._resizerBridge.negotiateWidth([
              { min: W.minPanelWidth, max: e },
            ]),
            (this._panelWidth = e));
        }
        _canResizeWidth(e) {
          return e + 45 <= this._resizerBridge.availWidth.value();
        }
      }
      var He = i(139079);
      const Ge = (0, E.getLogger)("Chart.PointsetManager");
      let Ke = 0;
      class Ye {
        constructor(e, t, i, s, r) {
          (this._currentPointsetId = null),
            (this._onUpdate = new R.Delegate()),
            (this._requestPoints = []),
            (this._gateway = e),
            (this._pointsetSuffix = t),
            (this._isGatewayConnected = this._gateway.isConnected().spawn()),
            this._isGatewayConnected.subscribe(
              this._updateByGatewayConnection.bind(this)
            ),
            this._addPoints(i, s, r);
        }
        onUpdate() {
          return this._onUpdate;
        }
        destroy() {
          this._isGatewayConnected.value() &&
            null !== this._currentPointsetId &&
            this._gateway.removePointset(this._currentPointsetId),
            (this._requestPoints = []),
            (this._currentPointsetId = null),
            this._isGatewayConnected.destroy();
        }
        _updateByGatewayConnection(e) {
          e || ((this._currentPointsetId = null), (this._requestPoints = []));
        }
        _addPoints(e, t, i) {
          var r, o;
          this._isGatewayConnected.value() &&
            ((0, s.assert)(
              e.length > 0,
              "Can't possible create point set for empty array of time points"
            ),
            (this._requestPoints = e.map((e) => [e.time_t, e.offset])),
            (this._currentPointsetId =
              ((r = this._pointsetSuffix), (o = ++Ke), `pointset_${r}_${o}`)),
            this._gateway.createPointset(
              this._currentPointsetId,
              "turnaround",
              t,
              (0, He.getServerInterval)(i),
              this._requestPoints,
              this._onMessage.bind(this)
            ));
        }
        _onMessage(e) {
          switch (e.method) {
            case "pointset_error":
              Ge.logNormal(
                `Pointset error with id ${e.params[0]} turnaround ${e.params[1]}`
              );
              break;
            case "data_update": {
              const t = [];
              for (const i of e.params.plots)
                t.push({
                  time_t: this._requestPoints[i.index][0],
                  index: i.value[0],
                  barTime: i.value[1],
                });
              this._onUpdate.fire(t);
              break;
            }
          }
        }
      }
      var Xe = i(341991),
        Ze = i(658098);
      function Je(e) {
        const t = e.mainSeries().data().first();
        return null === t ? null : t.value[0];
      }
      async function et(e, t, s) {
        const [r, o, n] = await Promise.all([
          Promise.all([i.e(4829), i.e(2197), i.e(6161), i.e(2650)]).then(
            i.bind(i, 755962)
          ),
          Promise.all([i.e(4829), i.e(2197), i.e(6161), i.e(2650)]).then(
            i.bind(i, 808779)
          ),
          Promise.all([i.e(4829), i.e(2197), i.e(6161), i.e(2650)]).then(
            i.bind(i, 933417)
          ),
        ]);
        e.addCustomSource("executions", (e, i) => {
          const a = i.mainSeries(),
            l = a.dataEvents(),
            d = (0, Ze.createPrimitivePropertyFromWatchedValue)(
              i.isInReplay().weakReference()
            ),
            u = (0, Xe.createPrimitivePropertyFromGetterAndSubscription)(
              () =>
                a.isConvertedToOtherCurrency() || a.isConvertedToOtherUnit(),
              a.symbolResolved()
            ),
            c = {
              arrowVisibility: (0, Xe.combineProperty)(
                (e, t, i) => i && !t,
                d.ownership(),
                u.ownership(),
                i
                  .properties()
                  .childs()
                  .tradingProperties.childs()
                  .showExecutions.weakReference()
              ),
              labelVisibility: i
                .properties()
                .childs()
                .tradingProperties.childs().showExecutionsLabels,
            },
            h = (function (e, t, i) {
              return (s) => {
                const r = i.seriesSource().symbolInstanceId(),
                  o = i.interval();
                return null === r ? null : new Ye(e, t, s, r, o);
              };
            })(i.chartApi(), "executions", a),
            p = (0, Xe.createWVFromGetterAndSubscription)(
              Je.bind(null, i),
              l.barReceived()
            ),
            _ = new r.ExecutionsService(
              t,
              l,
              (function (e) {
                return () => {
                  const t = e.symbolInfo();
                  return null !== t ? t.pro_name || t.full_name : e.proSymbol();
                };
              })(a)
            ),
            g = new o.ExecutionsPointsManager(_, h, p);
          return new n.ExecutionsSource(e, i, c, s, g);
        });
      }
      var tt = i(936145),
        it = i(470692),
        st = i(598982),
        rt = i(759333),
        ot = i(172912),
        nt = i(41899);
      const at = r.t(null, void 0, i(556445)),
        lt = r.t(null, void 0, i(44402)),
        dt = r.t(null, void 0, i(606569)),
        ut = r.t(null, void 0, i(659707)),
        ct = r.t(null, void 0, i(316183)),
        ht = r.t(null, void 0, i(598721)),
        pt = $.enabled("broker_button");
      class _t {
        constructor({
          dataEvents: e,
          getSymbolName: t,
          isNonTradableInstrument: i,
          qtySuggester: s,
          tradingCommands: r,
          settings: o,
          isInReplay: n,
          hibernated: a,
          orderPresetsManager: l,
        }) {
          (this.ask = new A.WatchedValue(null)),
            (this.nonTradableAskTooltip = new A.WatchedValue(void 0)),
            (this.bid = new A.WatchedValue(null)),
            (this.nonTradableBidTooltip = new A.WatchedValue(void 0)),
            (this.spread = new A.WatchedValue(null)),
            (this.spreadTooltip = new A.WatchedValue(ut)),
            (this.qty = new A.WatchedValue(null)),
            (this.qtyTooltip = new A.WatchedValue("")),
            (this.brokerIconVisible = new A.WatchedValue(!1)),
            (this.brokerIconLoading = new A.WatchedValue(!1)),
            (this.brokerIconUrl = new A.WatchedValue(null)),
            (this.isQtyVisible = new A.WatchedValue(!1)),
            (this.hasAskBidAdditionalPrecision = new A.WatchedValue(!1)),
            (this.canTrade = new A.WatchedValue(!0)),
            (this._isSymbolTradableResult = new rt.WatchedObject(null)),
            (this._formatter = null),
            (this._spreadFormatter = null),
            (this._symbol = null),
            (this._abortController = new AbortController()),
            (this.setQty = (e) => {
              this.qty.setValue(String(e));
            }),
            (this._createTradedSymbol = () => {
              const e = this._getSymbolName();
              this._symbolChangeSubscription?.unsubscribe(),
                this._clearTradedSymbol(),
                e.length > 0 && this._initTradedSymbol(e);
            }),
            (this._onSuggestedQtyChange = (e) => {
              (this._lastSuggestedQty = e), this.setQty(e);
            }),
            (this._updateIsSymbolTradable = async (e) => {
              if (null === this._symbol)
                return void this._isSymbolTradableResult.setValue(null);
              const t = await this._realtimeProvider.isTradable(this._symbol);
              e?.aborted ||
                this._isSymbolTradableResult.setValue((0, nt.clone)(t));
            }),
            (this._updateOrderPresetsManagerConsumer = async (e) => {}),
            (this._updateIsSymbolTradable = (0, N.respectLatest)(
              this._updateIsSymbolTradable
            )),
            (this._updateOrderPresetsManagerConsumer = (0, N.respectLatest)(
              this._updateOrderPresetsManagerConsumer
            ));
          const {
            noConfirmEnabled: d,
            showSellBuyButtons: u,
            themeName: c,
            visuallyHidden: h,
          } = o;
          (this._isInstantMode = d),
            (this._dataEvents = e),
            (this._getSymbolName = t),
            (this._qtySuggester = s),
            (this._realtimeProvider = r.realtimeProvider),
            (this._onNeedSelectBroker = r.onNeedSelectBroker),
            (this._toggleTradingWidget = r.toggleTradingWidget),
            (this._toggleTradingPanelPopup = r.toggleTradingPanelPopup),
            (this._brokerCommandsUI = r.brokerCommandsUI),
            (this._makeActualTradingSymbolObservable =
              r.makeActualSymbolObservable),
            (this._updateRealtimeDataHandler =
              this._updateRealtimeData.bind(this)),
            (this._isBrokerConnected = (0,
            Xe.createWVFromGetterAndSubscription)(
              () => null !== this._realtimeProvider.activeBroker(),
              this._realtimeProvider.onStatusChanged
            )),
            this._isBrokerConnected.subscribe(
              this._updateQtyTooltip.bind(this),
              { callWithLast: !0 }
            ),
            this._isBrokerConnected.subscribe(
              this._updateBrokerIcon.bind(this)
            ),
            this._isBrokerConnected.subscribe(this._createTradedSymbol),
            (this._isBrokerConnecting = (0,
            Xe.createWVFromGetterAndSubscription)(
              () => 2 === r.brokerConnectionStatus(),
              r.onBrokerConnectionStatusChange
            )),
            this._isBrokerConnecting.subscribe(
              this._updateBrokerIcon.bind(this)
            ),
            (this.visible = (0, x.combine)(
              (e, t, i, s) => e && !t && !i && !s,
              u.weakReference(),
              n.weakReference(),
              i.weakReference(),
              h.weakReference()
            )),
            (this._enabled = (0, x.combine)(
              (e, t) => e && !t,
              this.visible.weakReference(),
              a.ownership()
            )),
            this._enabled.subscribe(this._toggleState.bind(this), {
              callWithLast: !0,
            }),
            (this._themeName = c),
            this._themeName.subscribe(this._updateBrokerIcon.bind(this), {
              callWithLast: !0,
            }),
            (this._tradePossibilityComputedWV = (0, x.combine)(
              () => ({}),
              this._isBrokerConnected.weakReference(),
              this._isSymbolTradableResult.weakReference(),
              this.ask.weakReference(),
              this.bid.weakReference()
            )),
            this._tradePossibilityComputedWV.subscribe(
              this._updateTradePossibilityAndTooltip.bind(this),
              { callWithLast: !0 }
            ),
            (this._isQtyVisibleComputedWV = (0, x.combine)(
              () => ({}),
              this.canTrade.weakReference(),
              this._isInstantMode.weakReference()
            )),
            this._isQtyVisibleComputedWV.subscribe(
              this._updateIsQtyVisible.bind(this),
              { callWithLast: !0 }
            );
        }
        destroy() {
          this._abortController?.abort(),
            (this._abortController = null),
            this._stop(),
            this._isBrokerConnected.destroy(),
            this._isInstantMode.release(),
            this._tradePossibilityComputedWV.destroy(),
            this._isQtyVisibleComputedWV.destroy(),
            this._themeName.release(),
            this._isBrokerConnecting.destroy(),
            this._enabled.destroy(),
            this._orderPresetsManagerConsumer$?.value?.destroy(),
            this.visible.destroy();
        }
        async tryToPlaceSellOrder() {
          const e = this._currentQuotes;
          void 0 !== e && (await this._tryToPlaceOrder((0, T.getBid)(e), -1));
        }
        async tryToPlaceBuyOrder() {
          const e = this._currentQuotes;
          void 0 !== e && (await this._tryToPlaceOrder((0, T.getAsk)(e), 1));
        }
        async getQtyInfo() {
          return null !== this._symbol && this.canTrade.value()
            ? (await this._realtimeProvider.symbolInfo(this._symbol)).qty
            : null;
        }
        applyQty() {
          if (null === this._symbol || !this.canTrade.value()) return;
          const e = this.qty.value(),
            t = null !== e ? Number(e) : null;
          null !== t && this._qtySuggester.setQty(this._symbol, t),
            void 0 !== this._lastSuggestedQty &&
              t !== this._lastSuggestedQty &&
              this.qty.setValue(String(this._lastSuggestedQty));
        }
        canShowMobileTrading() {
          return !window.TradingView.bottomWidgetBar?.isVisible().value();
        }
        async _tryToPlaceOrder(e, t) {
          if (null === this._realtimeProvider.activeBroker())
            return (
              this.canShowMobileTrading()
                ? this._toggleTradingPanelPopup()
                : await this._toggleTradingWidget(),
              void this._onNeedSelectBroker.fire()
            );
          const i = Number(this.qty.value()) || 1,
            r = this._orderPresetsManagerConsumer$?.getValue();
          r?.activePreset();
          {
            const r = this._isMarketOrderSupported() ? 2 : 1,
              o = 1 === t ? this._currentQuotes?.ask : this._currentQuotes?.bid,
              n = {
                symbol: (0, s.ensureNotNull)(this._symbol),
                qty: i,
                side: t,
                type: r,
                seenPrice: o ?? null,
                currentQuotes: this._currentQuotes,
              };
            1 === r && (n.limitPrice = e),
              await (0, s.ensureNotNull)(this._brokerCommandsUI()).placeOrder(
                n,
                !0
              );
          }
        }
        _toggleState(e) {
          e ? this._start() : this._stop();
        }
        _start() {
          this._dataEvents
            .symbolResolved()
            .subscribe(this, this._createTradedSymbol),
            this._dataEvents
              .symbolError()
              .subscribe(this, this._createTradedSymbol),
            this._createTradedSymbol();
        }
        _stop() {
          this._symbolChangeSubscription?.unsubscribe(),
            this._clearTradedSymbol(),
            (this._symbol = null),
            this._dataEvents.symbolResolved().unsubscribeAll(this),
            this._dataEvents.symbolError().unsubscribeAll(this);
        }
        _initTradedSymbol(e) {
          (this._symbol = e),
            this._updateIsSymbolTradable(this._abortController?.signal ?? null),
            this._updateOrderPresetsManagerConsumer(
              this._abortController?.signal ?? null
            ),
            this._realtimeProvider.subscribeRealtime(
              this._symbol,
              this._updateRealtimeDataHandler
            ),
            this._resubscribeQtySuggester();
        }
        _clearTradedSymbol() {
          (this._currentQuotes = void 0),
            this.ask.setValue(null),
            this.bid.setValue(null),
            this.spread.setValue(null),
            this.qty.setValue(null),
            null !== this._symbol &&
              (this._realtimeProvider.unsubscribeRealtime(
                this._symbol,
                this._updateRealtimeDataHandler
              ),
              this._qtySuggesterSubscription?.unsubscribe(),
              (this._symbol = null),
              this._updateIsSymbolTradable(
                this._abortController?.signal ?? null
              ),
              this._updateOrderPresetsManagerConsumer(
                this._abortController?.signal ?? null
              ));
        }
        async _resubscribeQtySuggester() {
          const e = this._symbol;
          if (null === e) return;
          this._qtySuggesterSubscription?.unsubscribe();
          const t = (this._suggestedQtyPromise = this._qtySuggester.getQty(e)),
            i = await t;
          t === this._suggestedQtyPromise &&
            e === this._symbol &&
            ((this._lastSuggestedQty = i),
            this.setQty(i),
            (this._qtySuggesterSubscription = this._qtySuggester
              .suggestedQtyChanged(e)
              .subscribe(this._onSuggestedQtyChange)));
        }
        _isMarketOrderSupported() {
          const e = this._realtimeProvider.activeBroker();
          return (
            null === e || Boolean(e.metainfo().configFlags.supportMarketOrders)
          );
        }
        _updateTradePossibilityAndTooltip() {
          this._updateCanTrade(), this._updateSellBuyTooltip();
        }
        _updateCanTrade() {
          const e = this._isSymbolTradableResult.value(),
            t = this._isBrokerConnected.value() && null !== e && e.tradable;
          this.canTrade.setValue(t);
        }
        _updateSellBuyTooltip() {
          const e = this._getNonTradedTooltip();
          this.nonTradableAskTooltip.setValue(
            e ?? this._getNonTradableAskTooltip()
          ),
            this.nonTradableBidTooltip.setValue(
              e ?? this._getNonTradableBidTooltip()
            );
        }
        _getNonTradedTooltip() {
          const e = this._isSymbolTradableResult.value();
          if (this._isBrokerConnected.value() && null !== e && !e.tradable)
            return void 0 !== e.solutions
              ? ""
              : void 0 !== e.shortReason && "" !== e.shortReason
              ? e.shortReason
              : at;
        }
        _getNonTradableAskTooltip() {
          return null === this.ask.value() ? dt : void 0;
        }
        _getNonTradableBidTooltip() {
          return null === this.bid.value() ? lt : void 0;
        }
        _updateRealtimeData(e, t, i) {
          (this._formatter = i.formatter),
            (this._spreadFormatter = i.spreadFormatter);
          const s = t.ask,
            r = t.bid,
            o = (0, u.isNumber)(s),
            n = (0, u.isNumber)(r),
            a = o ? this._formatter.format(s) : null,
            l = n ? this._formatter.format(r) : null;
          this.ask.setValue(a),
            this.bid.setValue(l),
            o && n && (this._currentQuotes = { ask: s, bid: r });
          const d =
              t.spread ||
              ((0, u.isNumber)(s) && (0, u.isNumber)(r) && s - r) ||
              0,
            c = (0, u.isNumber)(t.spread)
              ? this._spreadFormatter
              : this._formatter;
          this.spread.setValue(c.format(d));
          let h = !1;
          (0, ot.isFormatterHasForexAdditionalPrecision)(this._formatter) &&
            (h = this._formatter.hasForexAdditionalPrecision()),
            this.hasAskBidAdditionalPrecision.setValue(h);
        }
        _updateIsQtyVisible() {
          const e = this._isInstantMode.value() && this.canTrade.value();
          this.isQtyVisible.setValue(e);
        }
        _updateQtyTooltip() {
          this.qtyTooltip.setValue(this._getQtyTooltip());
        }
        _getQtyTooltip() {
          const e = this._realtimeProvider.activeBroker();
          return null !== e &&
            e.metainfo().configFlags.showQuantityInsteadOfAmount
            ? ht
            : ct;
        }
        _updateBrokerIcon() {
          if (!pt) return;
          let e;
          const t = this._realtimeProvider.activeBroker();
          if (null !== t) {
            const i = t.metainfo();
            e =
              "dark" === this._themeName.value() && i.logoMiniBlackUrl
                ? i.logoMiniBlackUrl
                : i.logoMiniUrl;
          }
          this.brokerIconVisible.setValue(this._isBrokerConnected.value()),
            this.brokerIconLoading.setValue(this._isBrokerConnecting.value()),
            this.brokerIconUrl.setValue(e || null);
        }
      }
      var gt = i(621327),
        bt = i(509715),
        yt = i(865211),
        mt = i(920057),
        vt = i(190787),
        ft = i(972535),
        Pt = i(724377),
        kt = i(162458),
        St = i(72304),
        Ct = i(614588),
        wt = i(672511);
      const Tt = (0, i(790606).reactLoaderRendererCreator)(wt.Spinner, {
        size: "xxsmall",
      });
      var Bt = i(126373),
        Ot = i(344557);
      var Mt = i(953757),
        It = i(651674),
        Et = i(224567);
      i(725796);
      const Dt = r.t(null, void 0, i(99234)),
        Vt = r.t(null, void 0, i(527953)),
        $t = 150,
        Lt = (e) => {
          const {
              sellButtonEl: t,
              buyButtonEl: i,
              nonTradableAskTooltip: s,
              nonTradableBidTooltip: r,
              orderPreset: o,
            } = e,
            n = !r,
            a = !s,
            {
              open: l,
              close: d,
              visible: u,
            } = (0, Mt.useTooltipState)({ openDelay: $t, closeDelay: $t }),
            {
              open: c,
              close: h,
              visible: p,
            } = (0, Mt.useTooltipState)({ openDelay: $t, closeDelay: $t });
          (0, ge.useEffect)(() => {
            function e(e, t, i) {
              return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", i),
                () => {
                  e.removeEventListener("mouseenter", t),
                    e.removeEventListener("mouseleave", i);
                }
              );
            }
            const s = e(t, c, h),
              r = e(i, l, d);
            return () => {
              s(), r();
            };
          }, [t, i, c, h, l, d]);
          const _ = p && "" !== r,
            g = u && "" !== s;
          return ge.createElement(
            ge.Fragment,
            null,
            ge.createElement(Et.TooltipStateless, {
              id: "sell-button-order-preset-tooltip",
              anchor: { current: t },
              content: ge.createElement(xt, {
                defaultTooltip: Vt,
                orderPreset: o,
                nonTradableTooltip: r,
              }),
              endSlot: n
                ? ge.createElement(
                    ge.Fragment,
                    null,
                    ge.createElement(Et.HotkeyBox, { keyboardKey: "Shift" }),
                    ge.createElement(Et.HotkeyBox, { keyboardKey: "S" })
                  )
                : void 0,
              open: _,
              onClose: h,
              placement: "bottom",
            }),
            ge.createElement(Et.TooltipStateless, {
              id: "buy-button-order-preset-tooltip",
              anchor: { current: i },
              content: ge.createElement(xt, {
                defaultTooltip: Dt,
                orderPreset: o,
                nonTradableTooltip: s,
              }),
              endSlot: a
                ? ge.createElement(
                    ge.Fragment,
                    null,
                    ge.createElement(Et.HotkeyBox, { keyboardKey: "Shift" }),
                    ge.createElement(Et.HotkeyBox, { keyboardKey: "B" })
                  )
                : void 0,
              open: g,
              onClose: d,
              placement: "bottom",
            })
          );
        },
        xt = (e) => {
          const {
            defaultTooltip: t,
            orderPreset: i,
            nonTradableTooltip: s,
          } = e;
          return s
            ? ge.createElement(ge.Fragment, null, s)
            : ge.createElement(ge.Fragment, null, t);
        };
      class At {
        constructor(e) {
          (this.setActiveOrderPreset = (e) => {
            (this._orderPreset = e ?? void 0), this._update();
          }),
            (this.setNonTradableAskTooltip = (e) => {
              (this._nonTradableAskTooltip = e), this._update();
            }),
            (this.setNonTradableBidTooltip = (e) => {
              (this._nonTradableBidTooltip = e), this._update();
            });
          const { sellButtonEl: t, buyButtonEl: i } = e;
          (this._sellButtonEl = t),
            (this._buyButtonEl = i),
            (this._containerEl = document.createElement("div"));
          const { render: s, unmount: r } = (function (e, t) {
            const i = (0, It.createReactRoot)(
              ge.createElement(Lt, { ...t }),
              e,
              "modern"
            );
            return {
              render: function (e) {
                i.render(ge.createElement(Lt, { ...e }));
              },
              unmount: function () {
                i.unmount();
              },
            };
          })(this._containerEl, {
            sellButtonEl: this._sellButtonEl,
            buyButtonEl: this._buyButtonEl,
          });
          (this._unmountFn = r), (this._renderFn = s);
        }
        destroy() {
          this._unmountFn(), this._containerEl.remove();
        }
        _update() {
          this._renderFn({
            sellButtonEl: this._sellButtonEl,
            buyButtonEl: this._buyButtonEl,
            nonTradableAskTooltip: this._nonTradableAskTooltip,
            nonTradableBidTooltip: this._nonTradableBidTooltip,
            orderPreset: this._orderPreset,
          });
        }
      }
      var Rt = i(255587),
        Ft = i(945319),
        Nt = i(189822),
        qt = i(829883);
      const Qt = parseInt(Nt["css-value-padding"]),
        Wt = r.t(null, void 0, i(168222)),
        Ut = r.t(null, void 0, i(169961));
      var zt;
      !(function (e) {
        (e.BidAskDefaultText = "..."),
          (e.TrackEventOrigin = "Sell/Buy Buttons");
      })(zt || (zt = {}));
      const jt = !1,
        Ht = (e) => e?.stopPropagation();
      function Gt(e, t) {
        const i = document.createElement("span");
        i.append(t), i.classList.add(Rt.title), e.appendChild(i);
      }
      function Kt(e) {
        const { el: t, text: i, isLastCharSup: r, title: o } = e,
          n = t.querySelector(`.${Rt.buttonText}`);
        if (!n) return;
        let a = t.querySelector(`.${Rt.lastCharSup}`);
        const l = t.querySelector(`.${Rt.title}`);
        if ((null !== l && l.remove(), !r))
          return (
            null !== a && a.remove(),
            (0, vt.updateTextNode)(n, i),
            void (null !== o && Gt(t, o))
          );
        null === a &&
          ((a = document.createElement("span")),
          a.classList.add(Rt.lastCharSup),
          n.appendChild(a)),
          (0, vt.updateTextNode)((0, s.ensureNotNull)(a), i.slice(-1)),
          (0, vt.updateTextNode)(n, i.slice(0, -1)),
          null !== o && Gt(t, o);
      }
      var Yt, Xt;
      !(function (e) {
        (e[(e.Hidden = 0)] = "Hidden"),
          (e[(e.Column = 1)] = "Column"),
          (e[(e.Row = 2)] = "Row");
      })(Yt || (Yt = {})),
        (function (e) {
          (e[(e.Width = 567)] = "Width"), (e[(e.Height = 440)] = "Height");
        })(Xt || (Xt = {}));
      class Zt {
        constructor({
          model: e,
          instantMode: t,
          trackEvent: i,
          toggleMinimizeBottomWidgetBar: s,
          backgroundTopColor: r,
          onCalculatorOpened: o,
        }) {
          (this.element = document.createElement("div")),
            (this._buttonsWrapperEl = document.createElement("div")),
            (this._informerWrapperEl = null),
            (this._sellButtonEl = document.createElement("div")),
            (this._sellButtonTextEl = document.createElement("span")),
            (this._buyButtonEl = document.createElement("div")),
            (this._buyButtonTextEl = document.createElement("span")),
            (this._spreadQtyWrapper = document.createElement("div")),
            (this._spreadEl = document.createElement("div")),
            (this._qtyEl = document.createElement("div")),
            (this._qtyTextEl = document.createElement("span")),
            (this._brokerButtonEl = document.createElement("div")),
            (this._brokerIconWrapEl = document.createElement("div")),
            (this._sellBuyAndPresetsButtonsContainerEl =
              document.createElement("div")),
            (this._sellBuyButtonsContainerEl = document.createElement("div")),
            (this._sellTitle = Wt),
            (this._buyTitle = Ut),
            (this._isCalcOpened = !1),
            (this._calcContainer = document.createElement("div")),
            (this._sellLoader = (0, Ct.createPointsLoaderRenderer)(
              this._sellButtonEl,
              { className: Rt.loader }
            )),
            (this._buyLoader = (0, Ct.createPointsLoaderRenderer)(
              this._buyButtonEl,
              { className: Rt.loader }
            )),
            (this._brokerLoader = Tt(this._brokerButtonEl, {
              className: Rt.circleLoader,
            })),
            (this._windowResizeHandlerThrottle = (0, mt.default)(
              this._windowResizeHandler.bind(this),
              100
            )),
            (this._isHiddenByViewport = !1),
            (this._mode = 2),
            (this._height = new A.WatchedValue(0)),
            (this._resizeObserver = null),
            (this._cachedBreakPoints = {}),
            (this._parentWidth = 0),
            (this._destroyTradingInformer = null),
            (this._setButtonsTitles = (e) => {
              const t = this._sellButtonTextEl.querySelector(`.${Rt.title}`),
                i = this._buyButtonTextEl.querySelector(`.${Rt.title}`);
              (this._sellTitle = e || Wt),
                (this._buyTitle = e || Ut),
                t && (t.innerHTML = this._sellTitle),
                i && (i.innerHTML = this._buyTitle);
            }),
            (this._changeOrderPresetsManagerConsumerHandler = (e) => {
              this._orderPresetsMenuRenderer?.destroy(),
                this._activeOrderPresetSubscription?.unsubscribe(),
                this._setButtonsTitles(),
                e &&
                  (this._mountOrderPresetsMenu(e),
                  (this._activeOrderPresetSubscription =
                    e.activePreset$.subscribe((e) => {
                      const t = e?.metainfo?.title;
                      this._setButtonsTitles(t),
                        this._sellBuyButtonsTooltipsRenderer?.setActiveOrderPreset(
                          e
                        );
                    })));
            }),
            (this._handleBackgroundTopColorUpdate = (e) => {
              const t = this._makeBackgroundColor(e);
              this._orderPresetsMenuRenderer &&
                this._orderPresetsMenuRenderer.updateButtonColor(t),
                null !== this._qtyEl &&
                  (e
                    ? this._qtyEl.style.setProperty("--inline-background", t)
                    : this._qtyEl.style.removeProperty("--inline-background"));
            }),
            (this._getCurrentQty = () => {
              const e = this._qty.value();
              return null !== e ? Number(e) : null;
            }),
            (this._sellButtonEl.dataset.name = "sell-order-button"),
            (this._buyButtonEl.dataset.name = "buy-order-button"),
            (this._model = e),
            (this._toggleMinimizeBottomWidgetBar = s),
            (this._onCalculatorOpened = o),
            (this._backgroundTopColor = r.spawn()),
            this._backgroundTopColor.subscribe(
              this._handleBackgroundTopColorUpdate
            ),
            this._handleBackgroundTopColorUpdate(
              this._backgroundTopColor.value()
            ),
            (this._ask = this._model.ask.spawn()),
            this._ask.subscribe(this._updateBuyButton.bind(this)),
            (this._bid = this._model.bid.spawn()),
            this._bid.subscribe(this._updateSellButton.bind(this)),
            (this._spread = this._model.spread.spawn()),
            this._spread.subscribe(this._updateSpread.bind(this)),
            (this._qty = this._model.qty.spawn()),
            this._qty.subscribe(this._updateQty.bind(this)),
            (this._brokerIconVisible = this._model.brokerIconVisible.spawn()),
            (this._brokerIconLoading = this._model.brokerIconLoading.spawn()),
            (this._brokerIconUrl = this._model.brokerIconUrl.spawn()),
            $.enabled("trading_account_manager") &&
              (this._brokerIconVisible.subscribe(
                this._updateBrokerIconImage.bind(this)
              ),
              this._brokerIconLoading.subscribe(
                this._updateBrokerIconImage.bind(this)
              ),
              this._brokerIconUrl.subscribe(
                this._updateBrokerIconImage.bind(this),
                { callWithLast: !0 }
              )),
            (this._trackEvent = i),
            this._initTooltips(),
            this._render(),
            (this._spreadTooltip = this._model.spreadTooltip.spawn()),
            this._spreadTooltip.subscribe(
              this._updateButtonTooltip.bind(this, this._spreadEl),
              { callWithLast: !0 }
            ),
            (this._qtyTooltip = this._model.qtyTooltip.spawn()),
            this._qtyTooltip.subscribe(
              this._updateButtonTooltip.bind(this, this._qtyEl),
              { callWithLast: !0 }
            ),
            (this._canTrade = this._model.canTrade.spawn()),
            this._canTrade.subscribe(this._updateBgButtonsMode.bind(this), {
              callWithLast: !0,
            }),
            (this._isVisible = this._model.visible.spawn()),
            this._isVisible.subscribe(this._updateVisibility.bind(this), {
              callWithLast: !0,
            }),
            (this._isQtyVisible = this._model.isQtyVisible.spawn()),
            this._isQtyVisible.subscribe(this._updateQtyVisibility.bind(this), {
              callWithLast: !0,
            }),
            (this._isLastDigitSup =
              this._model.hasAskBidAdditionalPrecision.spawn()),
            this._isLastDigitSup.subscribe(this._updateLastDigitSup.bind(this)),
            (this._instantMode = t.spawn()),
            (this._sellButtonHandler = this._onSellButton.bind(this)),
            (this._buyButtonHandler = this._onBuyButton.bind(this)),
            (this._qtyHandler = this._toggleCalcVisibility.bind(this)),
            (this._brokerButtonHandler = this._onBrokerButton.bind(this)),
            this._sellButtonEl.addEventListener(
              "click",
              this._sellButtonHandler
            ),
            this._buyButtonEl.addEventListener("click", this._buyButtonHandler),
            this._qtyEl.addEventListener("click", this._qtyHandler),
            this._brokerButtonEl.addEventListener(
              "click",
              this._brokerButtonHandler
            ),
            window.addEventListener(
              "resize",
              this._windowResizeHandlerThrottle
            ),
            this._windowResizeHandler();
        }
        destroy() {
          this._ask.destroy(),
            this._nonTradableAskTooltip?.destroy(),
            this._bid.destroy(),
            this._nonTradableBidTooltip?.destroy(),
            this._spread.destroy(),
            this._spreadTooltip.destroy(),
            this._qty.destroy(),
            this._qtyTooltip.destroy(),
            this._isVisible.destroy(),
            this._isQtyVisible.destroy(),
            this._isLastDigitSup.destroy(),
            this._instantMode.destroy(),
            this._backgroundTopColor.destroy(),
            this._canTrade.destroy(),
            this._brokerIconUrl.destroy(),
            this._sellLoader.destroy(),
            this._buyLoader.destroy(),
            this._brokerLoader.destroy(),
            this._orderPresetsMenuRenderer?.destroy(),
            this._sellBuyButtonsTooltipsRenderer?.destroy(),
            this._activeOrderPresetSubscription?.unsubscribe?.(),
            this._orderPresetsManagerConsumerSubscription?.unsubscribe(),
            this._sellButtonEl.removeEventListener(
              "click",
              this._sellButtonHandler
            ),
            this._buyButtonEl.removeEventListener(
              "click",
              this._buyButtonHandler
            ),
            this._qtyEl.removeEventListener("click", this._qtyHandler),
            this._brokerButtonEl.removeEventListener(
              "click",
              this._brokerButtonHandler
            ),
            this._resizeObserver?.disconnect(),
            (this._resizeObserver = null),
            this._destroyTradingInformer?.(),
            this.element.remove(),
            delete this.element,
            window.removeEventListener(
              "resize",
              this._windowResizeHandlerThrottle
            );
        }
        updateModeByWidth(e) {
          const t = this._cachedBreakPoints[0],
            i = this._cachedBreakPoints[1],
            s = this._mode;
          (this._mode =
            void 0 !== t && e < t ? 0 : void 0 !== i && e < i ? 1 : 2),
            (this._parentWidth = e);
          const r = 1 === this._mode;
          s !== this._mode &&
            (this._informerWrapperEl?.removeEventListener("click", Ht),
            this._informerWrapperEl?.remove(),
            this._initTradingInformer()),
            this._buttonsWrapperEl.classList.toggle(Rt.column, r),
            this._informerWrapperEl?.classList.toggle(Rt.column, r),
            this._updateVisibility();
        }
        height() {
          return this._height;
        }
        renderTo(e, t) {
          void 0 !== t
            ? e.insertBefore(this.element, t)
            : e.appendChild(this.element),
            null === this._resizeObserver &&
              (this._resizeObserver = new ResizeObserver(
                this._updateBreakPointsAndSize.bind(this)
              )),
            this._resizeObserver.unobserve(this.element),
            this._resizeObserver.observe(this.element);
        }
        isHiddenByViewport() {
          return this._isHiddenByViewport;
        }
        _render() {
          const e = document.createElement("span");
          e.classList.add(Rt.buttonText),
            e.append(this._bid.value() || "..."),
            this._sellButtonTextEl.appendChild(e),
            this._bid.value() && Gt(this._sellButtonTextEl, this._sellTitle),
            this._sellButtonTextEl.classList.add(Rt.buttonTextWrapper),
            this._sellButtonEl.append(this._sellButtonTextEl),
            this._sellButtonEl.classList.add(
              "apply-common-tooltip",
              Rt.button,
              Rt.sellButton
            );
          const t = this._spread.value() || "";
          this._spreadEl.appendChild(document.createTextNode(String(t))),
            this._spreadEl.classList.add("apply-common-tooltip", Rt.spread);
          const i = this._qty.value() || "";
          this._qtyTextEl.appendChild(document.createTextNode(i)),
            this._qtyEl.append(this._qtyTextEl),
            this._qtyEl.setAttribute("data-name", "qtyEl"),
            this._qtyEl.classList.add(
              "apply-common-tooltip",
              Rt.button,
              Rt.qty
            ),
            this._spreadQtyWrapper.classList.add(Rt.spreadQtyWrapper),
            this._spreadQtyWrapper.appendChild(this._spreadEl),
            this._spreadQtyWrapper.appendChild(this._qtyEl);
          const s = document.createElement("span");
          s.classList.add(Rt.buttonText),
            s.append(this._ask.value() || "..."),
            this._buyButtonTextEl.appendChild(s),
            this._ask.value() && Gt(this._buyButtonTextEl, this._buyTitle),
            this._buyButtonTextEl.classList.add(Rt.buttonTextWrapper),
            this._buyButtonEl.append(this._buyButtonTextEl),
            this._buyButtonEl.classList.add(
              "apply-common-tooltip",
              Rt.button,
              Rt.buyButton
            ),
            this._brokerButtonEl.appendChild(this._brokerIconWrapEl),
            this._brokerIconWrapEl.classList.add(Rt.brokerButtonIconWrap),
            this._brokerButtonEl.classList.add(Rt.brokerButton),
            this._sellBuyAndPresetsButtonsContainerEl.classList.add(
              Rt.sellBuyAndPresetsButtonsContainer
            ),
            this._sellBuyButtonsContainerEl.classList.add(
              Rt.sellBuyButtonsContainer
            ),
            this._sellBuyButtonsContainerEl.appendChild(this._sellButtonEl),
            this._sellBuyButtonsContainerEl.appendChild(this._spreadQtyWrapper),
            this._sellBuyButtonsContainerEl.appendChild(this._buyButtonEl),
            this._sellBuyAndPresetsButtonsContainerEl.appendChild(
              this._sellBuyButtonsContainerEl
            ),
            this._buttonsWrapperEl.appendChild(
              this._sellBuyAndPresetsButtonsContainerEl
            ),
            this._buttonsWrapperEl.appendChild(this._brokerButtonEl),
            this._buttonsWrapperEl.classList.add(Rt.buttonsWrapper),
            this._buttonsWrapperEl.classList.toggle(
              Rt.touchMode,
              Bt.trackingModeIsAvailable
            ),
            this._buttonsWrapperEl.classList.toggle(
              Rt.notAvailableOnMobile,
              jt
            ),
            this.element.appendChild(this._buttonsWrapperEl),
            this._initTradingInformer(),
            this.element.classList.add(Rt.container);
        }
        _initTooltips() {
          ft.mobiletouch ||
            ((this._sellBuyButtonsTooltipsRenderer = new At({
              sellButtonEl: this._sellButtonEl,
              buyButtonEl: this._buyButtonEl,
            })),
            (this._nonTradableAskTooltip =
              this._model.nonTradableAskTooltip.spawn()),
            this._nonTradableAskTooltip.subscribe(
              (e) =>
                this._sellBuyButtonsTooltipsRenderer?.setNonTradableAskTooltip(
                  e
                ),
              { callWithLast: !0 }
            ),
            (this._nonTradableBidTooltip =
              this._model.nonTradableBidTooltip.spawn()),
            this._nonTradableBidTooltip.subscribe(
              (e) =>
                this._sellBuyButtonsTooltipsRenderer?.setNonTradableBidTooltip(
                  e
                ),
              { callWithLast: !0 }
            ));
        }
        _mountOrderPresetsMenu(e) {}
        _initTradingInformer() {
          0;
        }
        _updateBreakPointsAndSize(e) {
          const t = e[0],
            i = 2 * Qt;
          2 === this._mode &&
            (this._cachedBreakPoints[1] = Math.round(t.contentRect.width) + i),
            1 === this._mode &&
              (this._cachedBreakPoints[0] =
                Math.round(t.contentRect.width) + i),
            this.updateModeByWidth(this._parentWidth);
          const s =
            t.contentRect.height > 0 ? Math.round(t.contentRect.height) + i : 0;
          this._height.setValue(s);
        }
        _updateBrokerIconImage() {
          const e = this._brokerIconLoading.value(),
            t = !this._brokerIconVisible.value() && !e;
          if ((this._brokerButtonEl.classList.toggle(Ft.blockHidden, t), t))
            return;
          if (
            (this._toggleLoaderVisibility(
              this._brokerButtonEl,
              this._brokerLoader,
              e
            ),
            e)
          )
            return void (this._brokerIconWrapEl.innerHTML = "");
          const i = this._brokerIconUrl.value(),
            s = null === i;
          (this._brokerIconWrapEl.innerHTML = s
            ? qt
            : `<image src="${i}" alt="Account Manager" />`),
            this._brokerButtonEl.classList.toggle(Rt.brokerButtonDefault, s);
        }
        _makeBackgroundColor(e) {
          const [t, i, s] = (0, Pt.parseRgb)(e);
          return (0, Pt.rgbaToString)([
            t,
            i,
            s,
            (0, Pt.normalizeAlphaComponent)(0.8),
          ]);
        }
        async _onSellButton() {
          if (null === this._bid.value()) return;
          const e = this._instantMode.value();
          this._trackEvent(
            "Sell/Buy Buttons",
            "Sell",
            e ? "Instant" : "Not Instant"
          ),
            e &&
              this._canTrade.value() &&
              this._toggleLoaderVisibility(
                this._sellButtonEl,
                this._sellLoader,
                !0
              ),
            await this._model.tryToPlaceSellOrder(),
            e &&
              this._canTrade.value() &&
              setTimeout(
                () =>
                  this._toggleLoaderVisibility(
                    this._sellButtonEl,
                    this._sellLoader,
                    !1
                  ),
                300
              );
        }
        async _onBuyButton() {
          if (null === this._ask.value()) return;
          const e = this._instantMode.value();
          this._trackEvent(
            "Sell/Buy Buttons",
            "Buy",
            e ? "Instant" : "Not Instant"
          ),
            e &&
              this._canTrade.value() &&
              this._toggleLoaderVisibility(
                this._buyButtonEl,
                this._buyLoader,
                !0
              ),
            await this._model.tryToPlaceBuyOrder(),
            e &&
              this._canTrade.value() &&
              setTimeout(
                () =>
                  this._toggleLoaderVisibility(
                    this._buyButtonEl,
                    this._buyLoader,
                    !1
                  ),
                300
              );
        }
        _onBrokerButton() {
          this._model.canShowMobileTrading()
            ? (async function () {
                (await (0, Ot.waitTradingService)()).tradingPanelPopup.show();
              })()
            : this._toggleMinimizeBottomWidgetBar();
        }
        _toggleLoaderVisibility(e, t, i) {
          e.classList.toggle(Rt.loading, i), t.toggleVisibility(i);
        }
        _updateBuyButton(e) {
          const t = null !== e && this._isLastDigitSup.value();
          Kt({
            el: this._buyButtonTextEl,
            text: `${e || "..."}`,
            isLastCharSup: t,
            title: e ? this._buyTitle : null,
          });
        }
        _updateSellButton(e) {
          const t = null !== e && this._isLastDigitSup.value();
          Kt({
            el: this._sellButtonTextEl,
            text: `${e || "..."}`,
            isLastCharSup: t,
            title: e ? this._sellTitle : null,
          });
        }
        _updateSpread(e) {
          const t = `${e || ""}`;
          (0, vt.updateTextNode)(this._spreadEl, t),
            this._updateVisibilityForSpreadQtyWrapper();
        }
        _updateQty(e) {
          let t = `${e || ""}`;
          !this._isCalcOpened &&
            t.length > 0 &&
            (t = (0, L.abbreviatedNumber)(Number(t))),
            (0, vt.updateTextNode)(this._qtyTextEl, t);
        }
        _updateBgButtonsMode(e) {
          this._buttonsWrapperEl.classList.toggle(Rt.withoutBg, !e),
            this._informerWrapperEl?.classList.toggle(Ft.blockHidden, !e);
        }
        _updateVisibilityForSpreadQtyWrapper() {
          const e =
            !this._isQtyVisible.value() && null === this._spread.value();
          this._spreadQtyWrapper.classList.toggle(Ft.blockHidden, e);
        }
        _updateQtyVisibility(e) {
          this._qtyEl.classList.toggle(Ft.blockHidden, !e),
            this._spreadQtyWrapper.classList.toggle(Rt.withoutQty, !e),
            this._updateVisibilityForSpreadQtyWrapper();
        }
        _updateVisibility() {
          const e =
            this._isVisible.value() &&
            0 !== this._mode &&
            !this._isHiddenByViewport;
          this._buttonsWrapperEl.classList.toggle(Ft.blockHidden, !e),
            this._informerWrapperEl?.classList.toggle(
              Ft.blockHidden,
              !e || !this._canTrade.value()
            );
        }
        _updateLastDigitSup() {
          this._updateBuyButton(this._ask.value()),
            this._updateSellButton(this._bid.value());
        }
        _updateButtonTooltip(e, t) {
          if ("" === t)
            return (
              (0, St.setTooltipData)(e, "text", t),
              void e.removeAttribute("title")
            );
          e.setAttribute("title", t);
        }
        _toggleCalcVisibility() {
          (this._isCalcOpened = !this._isCalcOpened),
            this._qtyEl.classList.toggle(Rt.activeQty, this._isCalcOpened),
            this._renderCalc(),
            this._isCalcOpened && this._onCalculatorOpened();
        }
        _closeCalc() {
          (this._isCalcOpened = !1),
            this._updateQty(this._qty.value()),
            this._qtyEl.classList.remove(Rt.activeQty),
            this._model.applyQty(),
            this._renderCalc();
        }
        _renderCalc() {
          Promise.all([
            i.e(1086),
            i.e(5480),
            i.e(9296),
            i.e(303),
            i.e(4920),
            i.e(2743),
            i.e(7125),
            i.e(3809),
          ])
            .then(i.bind(i, 713191))
            .then(async (e) => {
              const t = await this._model.getQtyInfo();
              null !== t &&
                e.render(this._isCalcOpened, this._calcContainer, {
                  ...t,
                  withInput: !0,
                  valueGetter: this._getCurrentQty,
                  position: this._getCalcPosition(),
                  targetEl: this._qtyEl,
                  onClose: this._closeCalc.bind(this),
                  onValueChange: this._model.setQty,
                  trackEventTarget: "Sell/Buy Buttons",
                  trackEvent: this._trackEvent,
                });
            });
        }
        _getCalcPosition() {
          return (0, kt.getPopupPositioner)(this._qtyEl, {
            horizontalAttachEdge: kt.HorizontalAttachEdge.Left,
            horizontalDropDirection: kt.HorizontalDropDirection.FromLeftToRight,
          });
        }
        _windowResizeHandler() {
          const e = jt;
          this._isHiddenByViewport !== e &&
            ((this._isHiddenByViewport = e), this._updateVisibility());
        }
      }
      const Jt = r.t(null, void 0, i(411258));
      class ei {
        constructor(e) {
          const {
            chartModel: t,
            dataEvents: i,
            getSymbolName: s,
            isNonTradableInstrument: r,
            qtySuggester: o,
            tradingCommands: n,
            settings: a,
            isInReplay: l,
            hibernated: d,
            backgroundTopColor: u,
            orderPresetsManager: c,
          } = e;
          (this._chartModel = t),
            (this._isNonTradableInstrument = r),
            (this._isInReplay = l),
            (this._trackEvent = n.trackEvent),
            (this._model = new _t({
              dataEvents: i,
              getSymbolName: s,
              isNonTradableInstrument: r.spawnOwnership(),
              qtySuggester: o,
              tradingCommands: n,
              settings: a,
              isInReplay: l.spawnOwnership(),
              hibernated: d,
              orderPresetsManager: c,
            })),
            (this._renderer = new Zt({
              model: this._model,
              instantMode: a.noConfirmEnabled.spawnOwnership(),
              trackEvent: n.trackEvent,
              toggleMinimizeBottomWidgetBar: n.toggleMinimizeBottomWidgetBar,
              backgroundTopColor: u,
              onCalculatorOpened: n.onCalculatorOpened,
            }));
        }
        destroy() {
          this._model.destroy(),
            this._renderer.destroy(),
            this._isNonTradableInstrument.release(),
            this._isInReplay.release();
        }
        renderTo(e, t) {
          this._renderer.renderTo(e, t);
        }
        visibility() {
          return this._model.visible;
        }
        updateWidgetModeBySize(e) {
          this._renderer.updateModeByWidth(e.width);
        }
        contextMenuActions() {
          if (this._renderer.isHiddenByViewport()) return [];
          const e = (0, bt.getBuySellButtonsVisibility)(this._chartModel);
          return [
            new gt.Action({
              actionId: "Trading.SellBuyButtonsToggleVisibility",
              options: {
                checkable: !0,
                checked: e.value(),
                label: Jt,
                disabled:
                  this._isInReplay.value() ||
                  this._isNonTradableInstrument.value(),
                onExecute: () => {
                  const t = !e.value();
                  (0, yt.setBuySellButtonsVisibility)(
                    this._chartModel.undoModel(),
                    t
                  ),
                    this._trackEvent(
                      "SellBuyButtonsWidget context menu",
                      "Show Sell/Buy Button",
                      t ? "Check" : "Uncheck"
                    );
                },
              },
            }),
          ];
        }
        height() {
          return this._renderer.height();
        }
      }
      function ti(e) {
        return () => {
          const t = e.symbolInfo();
          return null !== t
            ? t.pro_name || t.full_name || t.name || ""
            : e.proSymbol();
        };
      }
      var ii = i(974365);
      function si(e) {
        return ge.createElement("span", { className: ii.separator });
      }
      var ri = i(628640),
        oi = i(739390),
        ni = i(995553),
        ai = i(533408),
        li = i(857053);
      const di = ge.forwardRef((e, t) =>
        ge.createElement(
          "div",
          { ref: t, className: li.popupWrapper },
          e.children
        )
      );
      var ui = i(753327);
      const ci = (() => {
          let e,
            t,
            s,
            r = null,
            o = null;
          return async (n, a, l, d) => {
            const u = n?.currentAccount();
            if (null === r || o !== n || e !== u || s !== d) {
              t?.remove();
              const { AccountManager: c } = await Promise.all([
                  i.e(8255),
                  i.e(3703),
                  i.e(3953),
                  i.e(4752),
                  i.e(2520),
                  i.e(5826),
                  i.e(9481),
                  i.e(4600),
                  i.e(7384),
                  i.e(3799),
                  i.e(5323),
                  i.e(8985),
                  i.e(5621),
                  i.e(7849),
                  i.e(5083),
                  i.e(9642),
                  i.e(8473),
                  i.e(2234),
                  i.e(4797),
                  i.e(3828),
                  i.e(6243),
                  i.e(7414),
                  i.e(4938),
                  i.e(1249),
                  i.e(7280),
                  i.e(1707),
                  i.e(9704),
                  i.e(5299),
                  i.e(3251),
                  i.e(2433),
                  i.e(6050),
                  i.e(5476),
                  i.e(1191),
                  i.e(427),
                  i.e(8354),
                ]).then(i.bind(i, 399890)),
                h = { container: a, visible: new A.WatchedValue(!0) };
              (r = a),
                (o = n),
                (e = u),
                (s = d),
                (t = await c.create({
                  broker: n,
                  bridge: h,
                  mode: 0,
                  overlapManager: l,
                  summaryFieldsVisibilityManager: d,
                }));
            } else a.appendChild(r);
          };
        })(),
        hi = new A.WatchedValue(null);
      function pi(e) {
        const { broker: t, summaryFieldsVisibilityManager: i } = e,
          s = (0, ge.useRef)(null),
          r = (0, ge.useContext)(ui.SlotContext);
        return (
          (0, ge.useEffect)(() => {
            hi.setValue(r);
          }, [r]),
          (0, ge.useEffect)(() => {
            null !== s.current && ci(t, s.current, hi.readonly(), i);
          }, []),
          ge.createElement(di, { ref: s })
        );
      }
      var _i = i(132455),
        gi = i(628370),
        bi = i(332510),
        yi = i(47507);
      const mi = r.t(null, void 0, i(276495));
      class vi extends ni.DialogRenderer {
        constructor(e) {
          super(),
            (this._title = mi),
            (this._isSubscribed = !1),
            (this._showSeparator = !0),
            (this._handleClose = () => {
              this._rootInstance?.unmount(),
                (this._rootInstance = null),
                this._setVisibility(!1);
            }),
            (this._trading = e);
        }
        visible() {
          return this._visibility.spawn().readonly();
        }
        show() {
          this._isSubscribed ||
            ((this._isSubscribed = !0),
            this._onStatusChange(this._trading.connectStatus()),
            this._trading.onConnectionStatusChange.subscribe(
              this,
              this._onStatusChange
            )),
            this._setVisibility(!0),
            this._renderComponent();
        }
        hide() {
          this._handleClose();
        }
        _onStatusChange(e, t) {
          this._trading
            .activeBroker()
            ?.currentAccountUpdate.unsubscribe(
              this,
              this._renderAccountManager
            ),
            this._connectStatus !== e &&
              ((this._connectStatus = e),
              (this._additionalHeaderElement = void 0),
              window.navigator.onLine
                ? 2 !== e &&
                  t?.disconnectType !== w.DisconnectType.Offline &&
                  3 !== e &&
                  4 !== e
                  ? 1 === e &&
                    (this._trading
                      .activeBroker()
                      ?.currentAccountUpdate.subscribe(
                        this,
                        this._renderAccountManager
                      ),
                    this._renderAccountManager())
                  : this._renderSpinner()
                : this._renderOfflineScreen());
        }
        _renderComponent() {
          const e = ge.createElement(ai.AdaptivePopupDialog, {
            dataName: "trading-dialog",
            isOpened: this.visible().value(),
            onClose: this._handleClose,
            showSeparator: this._showSeparator,
            fullScreen: !0,
            draggable: !1,
            title: this._title,
            render: () => this._content,
            additionalHeaderElement: this._additionalHeaderElement,
            additionalElementPos: "after",
            headerClassName: yi.header,
          });
          this._rootInstance
            ? this._rootInstance.render(e)
            : (this._rootInstance = (0, It.createReactRoot)(
                e,
                this._container
              ));
        }
        _renderSpinner() {
          (this._showSeparator = !0),
            (this._title = mi),
            this._changeDialogContent(ge.createElement(_i.Spinner, null));
        }
        _renderOfflineScreen() {
          (this._title = mi),
            this._changeDialogContent(ge.createElement(oi.OfflineScreen, null));
        }
        async _renderBrokerSelectScreen() {
          0;
        }
        async _renderAccountManager() {
          const e = (0, s.ensureNotNull)(
              this._trading.activeBroker()
            ).accountManagerInfo().summary,
            t = new bi.SummaryFieldsVisibilityManager(
              e,
              this._trading.getBrokerTradingSettingsStorage
            ),
            r = await (0, gi.makeAccountManagerHeaderDropdownsProps)(
              this._trading,
              t,
              0
            );
          if (((this._showSeparator = !1), (this._title = mi), void 0 !== r)) {
            const { AccountManagerHeaderDropdowns: e } = await Promise.all([
              i.e(8255),
              i.e(3703),
              i.e(3953),
              i.e(4752),
              i.e(2520),
              i.e(5826),
              i.e(9481),
              i.e(4600),
              i.e(7384),
              i.e(3799),
              i.e(5323),
              i.e(8985),
              i.e(5621),
              i.e(7849),
              i.e(5083),
              i.e(9642),
              i.e(8473),
              i.e(2234),
              i.e(4797),
              i.e(3828),
              i.e(6243),
              i.e(7414),
              i.e(4938),
              i.e(1249),
              i.e(7280),
              i.e(1707),
              i.e(9704),
              i.e(5299),
              i.e(3251),
              i.e(2433),
              i.e(6050),
              i.e(5476),
              i.e(1191),
              i.e(427),
              i.e(8354),
            ]).then(i.bind(i, 70587));
            this._title = ge.createElement(e, { ...r });
            {
              const e = { ...r.commonDropdownProps, iconSize: "big" };
              this._additionalHeaderElement = ge.createElement(
                "span",
                { className: yi.moreButton },
                ge.createElement(ri.TerminalDropdown, { ...e }),
                ge.createElement(si, null)
              );
            }
          }
          (this._content = ge.createElement(pi, {
            broker: this._trading.activeBroker(),
            summaryFieldsVisibilityManager: t,
          })),
            this._renderComponent();
        }
        _changeDialogContent(e) {
          (this._content = ge.createElement(di, null, e)),
            this._renderComponent();
        }
      }
      var fi,
        Pi = i(188412),
        ki = i(601227);
      async function Si(e, t) {
        localStorage.setItem(e, t);
      }
      !(function (e) {
        (e.get = async function () {
          return (
            ki.CheckMobile.any() ||
              (await (async function () {
                const e = n.getValue(z.settingsKeys.ACTIVE_BROKER);
                if (
                  (n.remove(z.settingsKeys.ACTIVE_BROKER, { forceFlush: !0 }),
                  void 0 === e)
                )
                  return;
                await Si(z.settingsKeys.ACTIVE_BROKER, e);
              })()),
            (async function (e) {
              return localStorage.getItem(e);
              const t = localStorage.getItem(e);
              if (null === t) return null;
              const i = await userSpecificDecrypt(t);
              null === i && localStorage.removeItem(e);
              return i;
            })(z.settingsKeys.ACTIVE_BROKER)
          );
        }),
          (e.set = async function (e) {
            await Si(z.settingsKeys.ACTIVE_BROKER, e);
          }),
          (e.clear = function () {
            n.remove(z.settingsKeys.ACTIVE_BROKER, { forceFlush: !0 }),
              localStorage.removeItem(z.settingsKeys.ACTIVE_BROKER);
          });
      })(fi || (fi = {}));
      var Ci = i(960521),
        wi = i.n(Ci),
        Ti = (0, i(530634).createErrorClass)(function (e) {
          return function () {
            e(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          };
        }),
        Bi = i(620210);
      function Oi(e, t) {
        var i = "object" == typeof t;
        return new Promise(function (s, r) {
          var o = new Bi.SafeSubscriber({
            next: function (e) {
              s(e), o.unsubscribe();
            },
            error: r,
            complete: function () {
              i ? s(t.defaultValue) : r(new Ti());
            },
          });
          e.subscribe(o);
        });
      }
      var Mi = i(265728),
        Ii = i(233064),
        Ei = i(218286),
        Di = i(169977),
        Vi = i(482165),
        $i = i(312694),
        Li = i(822960),
        xi = i(499665);
      class Ai {
        constructor(e) {
          (this._rawAndFilteredQtyMap = new Map()), (this._qtyInfo = new Map());
          const {
            symbolInfoGetter: t,
            onResetNeeded: i,
            qtySettingsStorageGetter: s,
          } = e;
          (this._getQtySettingsStorage = s),
            (this._getSymbolInfo = t),
            i.subscribe(this, this._reset);
        }
        async getQty(e) {
          return Oi(this._getRawAndFilteredQty(e).filteredQty$);
        }
        setQty(e, t) {
          this._getRawAndFilteredQty(e).rawQty$.next(t);
        }
        suggestedQtyChanged(e) {
          return this._getRawAndFilteredQty(e).filteredQty$;
        }
        _getRawAndFilteredQty(e) {
          return (
            this._rawAndFilteredQtyMap.get(e) ?? this._makeRawAndFilteredQty(e)
          );
        }
        _makeRawAndFilteredQty(e) {
          const t = new Mi.ReplaySubject(1),
            i = this._getQtySettingsStorage(),
            s = this._getInitialQty(e).pipe(
              (0, Ii.switchMap)((e) => t.pipe((0, b.startWith)(e))),
              (0, Ei.distinctUntilChanged)(),
              (0, Di.filter)((t) => this._isQtyCorrect(e, t)),
              (0, Vi.tap)((t) => i?.setSymbolQty(e, t)),
              (0, $i.share)({
                connector: () => new Mi.ReplaySubject(1),
                resetOnRefCountZero: !1,
              })
            ),
            r = { rawQty$: t, filteredQty$: s };
          return this._rawAndFilteredQtyMap.set(e, r), r;
        }
        _isQtyCorrect(e, t) {
          const i = (0, s.ensureDefined)(this._qtyInfo.get(e));
          return !(0, xi.checkQtyError)(i, t, !0).res;
        }
        _getInitialQty(e) {
          return (0, v.from)(this._getSymbolInfo(e)).pipe(
            (0, p.map)(({ qty: t }) => {
              this._qtyInfo.set(e, t);
              const i = this._getQtySettingsStorage()?.symbolQty(e),
                s = t.default || t.min;
              return void 0 !== i && i > 0
                ? ((r = (0, Li.clamp)(i, t.min, t.max)),
                  (o = t.min),
                  (n = t.step),
                  wi()(r).minus(o).div(n).round(0, 1).mul(n).plus(o).toNumber())
                : s;
              var r, o, n;
            })
          );
        }
        _reset() {
          this._rawAndFilteredQtyMap.forEach(({ rawQty$: e }) => e.complete()),
            this._rawAndFilteredQtyMap.clear(),
            this._qtyInfo.clear();
        }
      }
      var Ri = i(650279);
      class Fi {
        constructor() {
          (this._context = null),
            (this._onContextChanged = new R.Delegate()),
            (this._contextChange = () => {
              this._onContextChanged.fire(this.context());
            });
        }
        context() {
          return this._context?.externalContext() ?? null;
        }
        setContext(e, t) {
          this._isEqualContexts(e) ||
            (this._clearSubscription(),
            (this._context = e),
            this._context
              ?.onStatusChange()
              .subscribe(this, this._contextChange),
            this._context?.onDataChange().subscribe(this, this._contextChange),
            t || this._contextChange());
        }
        onContextChanged() {
          return this._onContextChanged;
        }
        clear() {
          this.setContext(null);
        }
        _clearSubscription() {
          this._context?.onDataChange().unsubscribeAll(this),
            this._context?.onStatusChange().unsubscribeAll(this);
        }
        _isEqualContexts(e) {
          return null === this._context || null === e
            ? this._context === e
            : this.context()?.type === e?.externalContext().type &&
                this._context.status() === e.status() &&
                (0, Ri.default)(this._context.errors(), e.errors()) &&
                (0, Ri.default)(this._context.data(), e.data());
        }
      }
      var Ni = i(173587);
      const qi = (0, E.getLogger)("Trading Linking");
      class Qi {
        constructor(e) {
          (this._onSymbolChange = (e) => {
            this._processSymbol(null, e);
          }),
            (this._processSymbol = async (e, t) => {
              if (void 0 === this._continuousFrontContractExtractor)
                return void this._value.next({ symbol: t });
              const i = this._continuousFrontContractExtractor
                .makeValueObservable(t)
                .subscribe((e) => this._value.next(e));
              e?.addEventListener("abort", () => i.unsubscribe(), { once: !0 });
            }),
            (this._getCurrentProSymbol = () =>
              this._source.ensuredProSymbol.value() ??
              this._source.proSymbol.value());
          const { source: t, getContinuousFrontContractExtractor: i } = e;
          (this._source = t), (this._getContinuousFrontContractExtractor = i);
          const s = this._getCurrentProSymbol();
          this._value = new c.BehaviorSubject({ symbol: s });
          void 0 !== (this._continuousFrontContractExtractor = i()) &&
            this._onSymbolChange(s),
            (this._processSymbol = (0, N.respectLatest)(this._processSymbol)),
            t.ensuredProSymbol.subscribe(this._onSymbolChange);
        }
        reset() {
          (this._continuousFrontContractExtractor =
            this._getContinuousFrontContractExtractor()),
            this._onSymbolChange(this._getCurrentProSymbol());
        }
        value() {
          return this._value.getValue();
        }
        async setSymbol(e) {
          const t = this.value(),
            s = (t) =>
              t.continuous === e || (void 0 === t.continuous && t.symbol === e);
          if (s(t)) return;
          const o = Oi(
            this._value.pipe(
              (0, Ni.skip)(1),
              (0, Di.filter)((t) => {
                const i = s(t);
                return (
                  i ||
                    qi.logWarn(
                      `Waiting for symbol ${e}, but got ${
                        t.continuous || t.symbol
                      }`
                    ),
                  i
                );
              })
            )
          );
          this._source.setSymbolAndLogInitiator(e, "trading linking"),
            await (0, H.makeTimeLimited)(
              o,
              3e4,
              r.t(
                null,
                {
                  replace: {
                    symbol: e,
                    actualSymbol:
                      this.value().continuous || this.value().symbol,
                  },
                },
                i(992655)
              )
            );
        }
        valueObservable() {
          return this._value.asObservable();
        }
      }
      class Wi {
        constructor() {
          (this._title$ = new c.BehaviorSubject("")),
            (this._description$ = new c.BehaviorSubject(void 0)),
            (this._symbol$ = new c.BehaviorSubject("")),
            (this._hasBatsQuotes$ = new c.BehaviorSubject(!1)),
            (this._hasDelayedQuotes$ = new c.BehaviorSubject(!1)),
            (this._isTradable$ = new c.BehaviorSubject(!1)),
            (this._backFunction$ = new c.BehaviorSubject(void 0)),
            (this._closeFunction$ = new c.BehaviorSubject(void 0)),
            (this._orderTemplateFunction$ = new c.BehaviorSubject(void 0)),
            (this._informerMessage$ = new c.BehaviorSubject(void 0)),
            (this._brokerId$ = new c.BehaviorSubject(void 0)),
            (this._settings$ = new c.BehaviorSubject(void 0)),
            (this._isSendingDisabled$ = new c.BehaviorSubject(!0)),
            (this._applyOrderTemplateFunction$ = new c.BehaviorSubject(void 0)),
            (this._orderPresetsManagerConsumer$ = new c.BehaviorSubject(null)),
            (this._focusedControl$ = new c.BehaviorSubject(void 0)),
            (this.title$ = this._title$.asObservable()),
            (this.description$ = this._description$.asObservable()),
            (this.symbol$ = this._symbol$.asObservable()),
            (this.hasBatsQuotes$ = this._hasBatsQuotes$.asObservable()),
            (this.hasDelayedQuotes$ = this._hasDelayedQuotes$.asObservable()),
            (this.isTradable$ = this._isTradable$.asObservable()),
            (this.backFunction$ = this._backFunction$.asObservable()),
            (this.closeFunction$ = this._closeFunction$.asObservable()),
            (this.orderTemplateFunction$ =
              this._orderTemplateFunction$.asObservable()),
            (this.informerMessage$ = this._informerMessage$.asObservable()),
            (this.settings$ = this._settings$.asObservable()),
            (this.brokerId$ = this._brokerId$.asObservable()),
            (this.isSendingDisabled$ = this._isSendingDisabled$.asObservable()),
            (this.applyOrderTemplateFunction$ =
              this._applyOrderTemplateFunction$.asObservable()),
            (this.orderPresetsManagerConsumer$ =
              this._orderPresetsManagerConsumer$.asObservable()),
            (this.focusedControl$ = this._focusedControl$.asObservable());
        }
        setOrderPresetsManagerConsumer(e) {
          this._orderPresetsManagerConsumer$.next(e);
        }
        setTitle(e) {
          this._title$.next(e);
        }
        setDescription(e) {
          this._description$.next(e);
        }
        setSymbol(e) {
          this._symbol$.next(e);
        }
        setHasBatsQuotes(e) {
          this._hasBatsQuotes$.next(e);
        }
        setHasDelayedQuotes(e) {
          this._hasDelayedQuotes$.next(e);
        }
        setIsTradable(e) {
          this._isTradable$.next(e);
        }
        setBackFunction(e) {
          this._backFunction$.next(e);
        }
        setCloseFunction(e) {
          this._closeFunction$.next(e);
        }
        setOrderTemplateFunction(e) {
          this._orderTemplateFunction$.next(e);
        }
        setInformerMessage(e) {
          this._informerMessage$.next(e);
        }
        setSettings(e) {
          this._settings$.next(e);
        }
        setBrokerId(e) {
          this._brokerId$.next(e);
        }
        setIsSendingDisabled(e) {
          this._isSendingDisabled$.next(e);
        }
        setOrderTemplateApplicationFunction(e) {
          this._applyOrderTemplateFunction$.next(e);
        }
        setFocusedControl(e) {
          this._focusedControl$.next(e);
        }
      }
      var Ui = i(930202),
        zi = i(725784),
        ji = i(296487);
      function Hi(e) {
        const { children: t, tooltipText: i, tooltipHotKey: s } = e;
        return ge.createElement(
          "span",
          {
            className: Ie()("apply-common-tooltip", ji.content),
            "data-tooltip-hotkey": s,
            title: i,
          },
          ge.createElement("span", { className: ji.contentInner }, t)
        );
      }
      const Gi = (0, zi.hotKeySerialize)({
          keys: [(0, Ui.humanReadableModifiers)(Ui.Modifiers.Shift, !1), "T"],
          text: "{0} + {1}",
        }),
        Ki = (0, zi.hotKeySerialize)({
          keys: [(0, Ui.humanReadableModifiers)(Ui.Modifiers.Shift, !1), "D"],
          text: "{0} + {1}",
        });
      var Yi = i(586816),
        Xi = i(924910),
        Zi = i(348194),
        Ji = i(453048),
        es = i(242843);
      var ts,
        is = i(153894);
      !(function (e) {
        (e.Qty = "qty"),
          (e.StopLoss = "stopLoss"),
          (e.TakeProfit = "takeProfit"),
          (e.Duration = "duration"),
          (e.DurationDatetime = "durationDatetime"),
          (e.CustomFields = "customFields"),
          (e.TableColumnsOrder = "tableColumnsOrder"),
          (e.SummaryFields = "summaryFields"),
          (e.OrderType = "orderType"),
          (e.LastUsedQuantityType = "lastUsedQuantityType"),
          (e.OrderSizeCalculatorQuantityType =
            "orderSizeCalculatorQuantityType"),
          (e.OrderSizeCalculatorValue = "orderSizeCalculatorValue"),
          (e.ActiveOrderPresetId = "activeOrderPresetId"),
          (e.SuppressedQuestions = "suppressedQuestions"),
          (e.OrderPresets = "orderPresets");
      })(ts || (ts = {}));
      class ss {
        constructor(e) {
          (this._transientStorage = {}),
            (this._persistentStorageKey = `trading.${e}`);
          const t = n.getJSON(this._persistentStorageKey, {});
          delete t.orderTicketQuantity, (this._transientStorage = t);
        }
        setTakeProfitPips(e, t, i) {
          this._setPips("takeProfit", e, t, i);
        }
        takeProfitPips(e) {
          return this._getSectionValue("takeProfit", e);
        }
        setStopLossPips(e, t, i) {
          this._setPips("stopLoss", e, t, i);
        }
        stopLossPips(e) {
          return this._getSectionValue("stopLoss", e);
        }
        setDuration(e, t, i) {
          const s = this.duration(e, t);
          (null !== i &&
            void 0 !== s &&
            s.type === i.type &&
            s.datetime === i.datetime) ||
            (null === i && void 0 === s) ||
            (this._setDuration(e, t, i), this._syncStorage());
        }
        duration(e, t) {
          return (
            this._migrateDuration(e, t),
            this._getSectionValue("duration", e)?.[t]
          );
        }
        setSymbolQty(e, t) {
          (this._getOrCreateNestedSection("qty")[e] = t), this._syncStorage();
        }
        symbolQty(e) {
          return this._getSectionValue("qty", e);
        }
        setCustomFields(e, t, i) {
          const s = this._getOrCreateNestedSection("customFields");
          (s[e] ??= {}), (s[e][t] ??= {});
          const r = s[e][t];
          for (const [e, t] of Object.entries(i))
            ("string" == typeof t && "" !== t) ||
            "boolean" == typeof t ||
            ("boolean" == typeof t.checked && "string" == typeof t.text)
              ? (r[e] = t)
              : delete r[e];
          0 === Object.keys(r).length && delete s[e][t],
            0 === Object.keys(s[e]).length && delete s[e],
            this._syncStorage();
        }
        customFields(e, t, i) {
          this._migrateCustomFields(e, t, i);
          const s = {},
            r = this._transientStorage.customFields;
          if (void 0 === r || void 0 === r[e]) return s;
          const o = r[e][t];
          return (
            void 0 === o ||
              i.forEach((e) => {
                const t = o[e];
                "" !== t && void 0 !== t && (s[e] = t);
              }),
            s
          );
        }
        orderType(e) {
          return this._getSectionValue("orderType", e);
        }
        setOrderType(e, t) {
          (this._getOrCreateNestedSection("orderType")[e] = t),
            this._syncStorage();
        }
        setTableColumnsOrder(e, t) {
          (this._getOrCreateNestedSection("tableColumnsOrder")[e] = t),
            this._syncStorage();
        }
        tableColumnsOrder(e) {
          return this._getSectionValue("tableColumnsOrder", e);
        }
        setOrderSizeCalculatorQuantityType(e, t) {
          null === t
            ? this._removeValue("orderSizeCalculatorQuantityType", e)
            : (this._getOrCreateNestedSection(
                "orderSizeCalculatorQuantityType"
              )[e] = t),
            this._syncStorage();
        }
        orderSizeCalculatorQuantityType(e) {
          return this._getSectionValue("orderSizeCalculatorQuantityType", e);
        }
        setOrderSizeCalculatorValue(e, t) {
          (this._getOrCreateNestedSection("orderSizeCalculatorValue")[e] = t),
            this._syncStorage();
        }
        orderSizeCalculatorValue(e) {
          return this._getSectionValue("orderSizeCalculatorValue", e);
        }
        setLastUsedQuantityType(e, t) {
          null === t
            ? this._removeValue("lastUsedQuantityType", e)
            : (this._getOrCreateNestedSection("lastUsedQuantityType")[e] = t),
            this._syncStorage();
        }
        lastUsedQuantityType(e) {
          return this._getSectionValue("lastUsedQuantityType", e);
        }
        summaryFieldsVisibilityInfo() {
          const e = new Map(),
            t = this._transientStorage.summaryFields;
          if (void 0 === t) return e;
          for (const [i, s] of Object.entries(t))
            e.set(i, { id: i, visible: s });
          return e;
        }
        setSummaryFieldsVisibilityInfo(e) {
          e.forEach(({ id: e, visible: t }) => {
            this._getOrCreateNestedSection("summaryFields")[e] = t;
          }),
            this._syncStorage();
        }
        setSuppressedQuestions(e) {
          const t = this._transientStorage.suppressedQuestions ?? [];
          (this._transientStorage.suppressedQuestions = [
            ...new Set([...t, ...e]),
          ]),
            this._syncStorage();
        }
        getSuppressedQuestions() {
          const e = this._transientStorage.suppressedQuestions;
          return void 0 === e ? [] : e;
        }
        clearSuppressedQuestions() {
          (this._transientStorage.suppressedQuestions = []),
            this._syncStorage();
        }
        setActiveOrderPresetId(e) {
          null === e
            ? this._removeFlatSection("activeOrderPresetId")
            : this._setFlatSectionValue("activeOrderPresetId", e),
            this._syncStorage({ forceFlush: !0 });
        }
        activeOrderPresetId() {
          return this._transientStorage.activeOrderPresetId;
        }
        setOrderPresets(e) {
          this._setFlatSectionValue("orderPresets", e),
            this._syncStorage({ forceFlush: !0 });
        }
        orderPresets() {
          return this._transientStorage.orderPresets || [];
        }
        _getOrCreateNestedSection(e) {
          return (
            e in this._transientStorage || (this._transientStorage[e] = {}),
            this._transientStorage[e]
          );
        }
        _setFlatSectionValue(e, t) {
          return (this._transientStorage[e] = t);
        }
        _removeFlatSection(e) {
          delete this._transientStorage[e];
        }
        _getSectionValue(e, t) {
          const i = this._transientStorage[e];
          return void 0 !== i ? i[t] : void 0;
        }
        _removeValue(e, t) {
          const i = this._transientStorage[e];
          void 0 !== i &&
            (delete i[t],
            0 === Object.keys(i).length && delete this._transientStorage[e]);
        }
        _setPips(e, t, i, s) {
          const r = this._getSectionValue(e, t);
          if (!((void 0 !== r && r === i) || (void 0 === r && i === s))) {
            if (void 0 !== r && i === s) this._removeValue(e, t);
            else {
              this._getOrCreateNestedSection(e)[t] = i;
            }
            this._syncStorage();
          }
        }
        _setDuration(e, t, i) {
          const s = this._getOrCreateNestedSection("duration");
          if (null === i) {
            if (void 0 === s[e]) return;
            return (
              delete s[e][t],
              void (0 === Object.keys(s[e]).length && delete s[e])
            );
          }
          (s[e] ??= {}), (s[e][t] = i);
        }
        _migrateCustomFields(e, t, i) {
          const s = {},
            r = this._transientStorage.customFields;
          void 0 === r ||
            ("object" == typeof r && void 0 !== r[e]) ||
            (i.forEach((t) => {
              const i = r[`${e}.${t}`];
              "" !== i &&
                void 0 !== i &&
                ((s[t] = i), this._removeValue("customFields", `${e}.${t}`));
            }),
            this.setCustomFields(e, t, s));
        }
        _migrateDuration(e, t) {
          const i = this._getSectionValue("duration", e);
          if ("string" != typeof i) return;
          const s = { type: i },
            r = this._getSectionValue("durationDatetime", e);
          "number" == typeof r &&
            ((s.datetime = r), this._removeValue("durationDatetime", e)),
            this._removeValue("duration", e),
            this._setDuration(e, t, s),
            this._syncStorage();
        }
        _syncStorage(e) {
          n.setJSON(this._persistentStorageKey, this._transientStorage, e);
        }
      }
      const rs = (0, E.getLogger)("Trading.Core"),
        os = { 1: "Connected", 2: "Connecting", 3: "Disconnected", 4: "Error" };
      var ns, as;
      !(function (e) {
        (e.Desktop = "showSellBuyButtons"),
          (e.Mobile = "showSellBuyButtonsMobile");
      })(ns || (ns = {})),
        (function (e) {
          (e.NewOrder = "trade-new-order"), (e.Properties = "trade-properties");
        })(as || (as = {}));
      const ls = "alert/alarm_clock";
      function ds(e) {
        return (0, d.alertSounds)().some((t) => e === t.path);
      }
      function us() {
        return n.getJSON(z.settingsKeys.PROPERTIES, {});
      }
      function cs(e) {
        n.setJSON(z.settingsKeys.PROPERTIES, e);
      }
      const hs = $.enabled("buy_sell_buttons"),
        ps = !0,
        _s = (window.TRADING_SERVER_LOGGER_URL, "Shortcut"),
        gs = a.Modifiers.Shift + a.Modifiers.Alt + 66,
        bs =
          ((0, l.humanReadableModifiers)(a.Modifiers.Shift + a.Modifiers.Alt),
          (0, l.humanReadableHash)(66),
          a.Modifiers.Shift + a.Modifiers.Alt + 83),
        ys =
          ((0, l.humanReadableModifiers)(a.Modifiers.Shift + a.Modifiers.Alt),
          (0, l.humanReadableHash)(83),
          a.Modifiers.Shift + 66),
        ms = a.Modifiers.Shift + 83,
        vs = a.Modifiers.Shift + 84,
        fs = a.Modifiers.Shift + 68,
        Ps = a.Modifiers.Shift + a.Modifiers.Alt + 67;
      class ks {
        constructor(e, t) {
          (this.accountType = new A.WatchedValue()),
            (this.onBrokerChange = new R.Delegate()),
            (this.onBrokerLoading = new R.Delegate()),
            (this.onConnectionStatusChange = new R.Delegate()),
            (this.onNewNotification = new R.Delegate()),
            (this.onNeedSelectBroker = new R.Delegate()),
            (this.onNotificationsChanged = new R.Delegate()),
            (this.showTradedSources = new A.WatchedValue(!0)),
            (this.showSellBuyButtons = null),
            (this.noConfirmEnabled = new A.WatchedValue()),
            (this.showOnlyRejectionNotifications = new A.WatchedValue()),
            (this.showPricesWithZeroVolume = new A.WatchedValue()),
            (this.showSpread = new A.WatchedValue()),
            (this.orderExecutedSoundParams = (function () {
              const e = ds(ls) ? ls : (0, d.alertSounds)()[0].path;
              return {
                enabled: new A.WatchedValue(!1),
                path: new A.WatchedValue(e),
              };
            })()),
            (this._activeBroker = null),
            (this._orderViewController = null),
            (this._orderControllerPromise = null),
            (this._brokerCommandsUI = null),
            (this._showPricesWithZeroVolume = new A.WatchedValue()),
            (this._showSpread = new A.WatchedValue()),
            (this._closePositionDialogVisibility = new Q.DialogVisibility()),
            (this._orderDialogVisibility = new Q.DialogVisibility()),
            (this._loginDialogVisibility = new Q.DialogVisibility()),
            (this._tradingPanelPopupVisibility = new Q.DialogVisibility()),
            (this._tradingSettingsStorage = null),
            (this._offlineListener = this._offlineHandler.bind(this)),
            (this._onlineListener = this._onlineHandler.bind(this)),
            (this._notifications = []),
            (this._account = null),
            (this._domPanelVisibility = new A.WatchedValue(!1)),
            (this._orderPanelVisibility = new A.WatchedValue(!1)),
            (this._pipValueType$ = new c.BehaviorSubject(w.PipValueType.None)),
            (this._switchingBroker = !1),
            (this._isDOMAvailable = (0, Ue.checkIsDOMAvailable)()),
            (this._isReconnectNeeded = !1),
            (this._accountVerificationPromise = null),
            (this._chartWidgetCollection = null),
            (this._tradedItemsChartCollectionFacadePromise = null),
            (this._tradeNowBrokerId = null),
            (this._tradedGroupStyleOverrides = null),
            (this._userActivityStatus = null),
            (this.getBrokerTradingSettingsStorage = () =>
              this._tradingSettingsStorage),
            (this.trackEvent = (e, t, i) => {
              const s = e ? `[${e}] ${t}` : t;
              if (this._gui()) {
                const e = this._activeBroker
                    ? this._activeBroker.metainfo().id + " Trading"
                    : "Trading No Broker",
                  t = this._activeBroker
                    ? this._activeBroker.currentAccountType()
                    : void 0;
                this._gui().trackEvent(e, s, i || t);
              }
            }),
            (this.showErrorNotification = (e, t, i = 25e3) => {
              this._showNotification(e, t, 1, i),
                $.enabled("show_trading_notifications_history") &&
                  this._addNotificationRow(e, t, 1),
                this._log(e, t);
            }),
            (this.setDOMPanelVisibility = (e, t = !0) => {
              (e && t && !this._makeSureCanTrade()) ||
                (e
                  ? this.tradingPanel.openPage(W.TradingPage.DOMPanel)
                  : this.tradingPanel.close());
            }),
            (this.setOrderPanelVisibility = async (e, t = !0) => {
              if (e && t && !this._makeSureCanTrade()) return;
              const { openPanel: i, closePanel: s } =
                await this._getOrderViewController();
              e ? await i() : s();
            }),
            (this.getTradeNowBrokerId = () => this._tradeNowBrokerId),
            (this.clearTradeNowBrokerId = () => {
              this._tradeNowBrokerId = null;
            }),
            (this.checkRealtimeDataPermissions = async (e) => {
              const t = (0, s.ensureNotNull)(this._activeBroker),
                { id: i, altBrokerId: r } = t.metainfo();
              (await checkRealtimeDataSubscription(
                i,
                e ?? t.getRealtimeDataCheckParams(),
                r
              )) && this._guiAccessor.reconnectChartApi(!0);
            }),
            (this.toggleTradingPanelVisibility = async () => {
              const e = this._orderDialogVisibility.getValue().isVisible,
                t = this.tradingPanel.isOpened.value();
              e && this._isDOMAvailable
                ? this.setDOMPanelVisibility(!t)
                : this._updateTradingPanelVisibility({ isOpened: !t });
            }),
            (this._recreateOrderPresetsManagerConsumer = () => {
              this._orderPresetsManagerConsumerPromise?.then((e) =>
                e?.destroy()
              ),
                (this._orderPresetsManagerConsumerPromise =
                  this._orderPresetsManager?.createConsumer(
                    this._linking.value().symbol
                  ));
            }),
            (this._updateOrderPresetsManagerBroker = async (e) => {
              const t =
                1 === this._activeBroker?.connectionStatus()
                  ? this._activeBroker
                  : null;
              await this._orderPresetsManager?.setBroker(t),
                e?.aborted || this._recreateOrderPresetsManagerConsumer();
            }),
            (this._handleVisibilityChange = () => {
              null !== this._activeBroker &&
                this._activeBroker.metainfo().configFlags.usesWSConnection &&
                "visible" !== document.visibilityState &&
                ((this._isReconnectNeeded = !0),
                this._selectBrokerInternal({
                  brokerId: null,
                  isUserAction: !1,
                  keepSessionAlive: !1,
                  disconnectInfo: {
                    disconnectType: w.DisconnectType.BrokenConnection,
                  },
                }).then(() => {
                  if (this._isReconnectNeeded)
                    return this._tryReconnectLastBroker();
                }));
            }),
            (this._tryReconnectLastBroker = async () => {
              if (this._isReconnectNeeded) {
                if ("hidden" === document.visibilityState)
                  return window.addEventListener(
                    "visibilitychange",
                    this._tryReconnectLastBroker,
                    { once: !0 }
                  );
                (this._isReconnectNeeded = !1), await this._selectLastBroker();
              }
            }),
            (this._onCurrentAccountUpdate = () => {
              const e = (0, s.ensureNotNull)(
                this._activeBroker
              ).currentAccount();
              this._account !== e &&
                (this._tradedContextLinking.clear(),
                (this._account = e),
                this.onNotificationsChanged.fire(this.getNotifications()));
            }),
            (this._handleQtyCalculatorOpening = () => {
              this._orderViewController?.resetQuantityFocusToUnits();
            }),
            (this._setPipValueType = async () => {
              const { symbol: e } = this._linking.value(),
                { type: t } = await this._realtimeProvider.symbolInfo(e),
                i = "forex" === t ? w.PipValueType.Pips : w.PipValueType.Ticks;
              this._pipValueType$.next(i);
            }),
            (this._trackNonTradableSymbol = async () => {
              if (1 === this._activeBroker?.connectionStatus()) {
                const { symbol: e } = this._linking.value();
                if (void 0 === e) return;
                const t = await this._activeBroker.isTradable(e);
                t &&
                  !t.tradable &&
                  this.trackEvent("Symbol is not tradable", e);
              }
            }),
            (this._onBrokerChanged = (e) => {
              if (null === e) return void (this._tradingSettingsStorage = null);
              const t = e.metainfo();
              this._tradingSettingsStorage = new ss(t.id);
            }),
            (this._tradeNow = async () => {
              if (
                void 0 !== window.TradingView.bottomWidgetBar &&
                null !== this._tradeNowBrokerId
              )
                try {
                  await window.TradingView.bottomWidgetBar.toggleWidget(
                    "paper_trading",
                    !0
                  );
                } catch {
                  this._tradingWizard.drawAttention();
                }
            }),
            (this._updateTradingPanelVisibility = (e) => {
              const {
                  isOpeningAvailable:
                    t = this.tradingPanel.isOpeningAvailable.value(),
                  isOpened: i = this.tradingPanel.isOpened.value(),
                  activePage: s = this.tradingPanel.activePage.value(),
                  shouldCanTrade: r,
                } = e,
                o = t && i;
              s === W.TradingPage.OrderPanel
                ? this.setOrderPanelVisibility(o, r)
                : this.setDOMPanelVisibility(o, r);
            }),
            (this._toggleTradingPanelPage = (e) => {
              e !== this.tradingPanel.activePage.value() &&
                (e === W.TradingPage.OrderPanel &&
                  this.setOrderPanelVisibility(!0),
                e === W.TradingPage.DOMPanel && this.setDOMPanelVisibility(!0));
            }),
            (this._toggleOrderDialog = async () => {
              const {
                  openOrderDialog: e,
                  closeDialogs: t,
                  isOrderDialogVisible: i,
                } = await this._getOrderViewController(),
                s = i();
              this.trackEvent(
                _s,
                s ? "Close OT" : "Open OT",
                this._getInstantTradingEventLabel()
              ),
                s ? t() : e();
            }),
            (this._closePanelOrDialogs = async () => {
              const { closeOrderView: e } =
                await this._getOrderViewController();
              e();
            }),
            (this._onLinkingSymbolChange = (e) => {
              e.symbol !==
                this._tradedContextLinking.context()?.data().symbol &&
                this._tradedContextLinking.clear();
            }),
            (this._onUserActivityStatusChange = () => {
              if (null === this._activeBroker) return;
              const e = this._activeBroker.metainfo().id,
                t = this._getForceLogoutUserByInactivityTimerInfo()?.message;
              this._logOut(!1, !1),
                this._selectBrokerInternal({
                  brokerId: e,
                  isUserAction: !1,
                  disconnectInfo: {
                    disconnectType: w.DisconnectType.OauthError,
                    message: t,
                  },
                  shouldReconnect: !1,
                });
            }),
            (this._updateOrderPresetsManagerBroker = (0, N.respectLatest)(
              this._updateOrderPresetsManagerBroker
            )),
            (this._linking = new Qi({
              source: o.linking,
              getContinuousFrontContractExtractor: () =>
                this._continuousFrontContractExtractor,
            })),
            (this._abortController = new AbortController()),
            (this._setPipValueType = (0, V.sequentialize)(
              this._setPipValueType
            )),
            (this._selectBrokerInternal = (0, V.sequentialize)(
              this._selectBroker
            )),
            void 0 !== navigator.locks &&
              (this._selectBrokerInternal = (e) =>
                navigator.locks.request(
                  `select-broker-${e.brokerId}`,
                  { ifAvailable: !0 },
                  (t) =>
                    this._selectBroker({
                      ...e,
                      hasConcurrentSession: null === t,
                    })
                )),
            (this._showSellBuyButtonsKey = this._makeShowSellBuyButtonsKey()),
            (this._realtimeProvider = new X(
              () => this.activeBroker(),
              this.onBrokerChange,
              this.onConnectionStatusChange,
              (e) => this.getActualSymbol(e)
            )),
            (this._positionService = new tt.PositionsService(this)),
            (this._ordersService = new it.OrdersService(this)),
            (this._tradingStat = new te(this)),
            (this._serverLogger = null),
            (this._tradedContextLinking = new Fi()),
            this.onBrokerChange.subscribe(this, this._onBrokerChanged),
            (this.tradingPanelPopup = new vi(this)),
            this.tradingPanelPopup.visible().subscribe((e) => {
              e
                ? this._tradingPanelPopupVisibility.setValue({
                    isVisible: e,
                    isFullScreen: !0,
                  })
                : this._tradingPanelPopupVisibility.setValue({ isVisible: e });
            });
          const i = this._makeTradingPanelTabsConfig();
          this.tradingPanel = new je(e, i);
          (this._qtySuggester = new Ai({
            onResetNeeded: this.onConnectionStatusChange,
            symbolInfoGetter: (e) => this._realtimeProvider.symbolInfo(e),
            qtySettingsStorageGetter: () => this._tradingSettingsStorage,
          })),
            (this._qtySuggesterWithOrderSizeCalculatorResetting = {
              getQty: this._qtySuggester.getQty.bind(this._qtySuggester),
              suggestedQtyChanged: this._qtySuggester.suggestedQtyChanged.bind(
                this._qtySuggester
              ),
              setQty: this._qtySuggester.setQty.bind(this._qtySuggester),
            }),
            (this._domPanelPage = new ke({
              resizerBridge: e,
              closeFn: () => this.tradingPanel.close(),
              trading: this,
              qtySuggester: this._qtySuggesterWithOrderSizeCalculatorResetting,
              tradingLinking: this._linking,
              headerState: new Wi(),
              isLoading: this.tradingPanel.isLoading,
            })),
            this.tradingPanel.addPage(
              W.TradingPage.DOMPanel,
              this._domPanelPage
            ),
            (this._orderPanelHeaderState = new Wi());
          const r = new Se(this._orderPanelHeaderState);
          this.tradingPanel.addPage(W.TradingPage.OrderPanel, r),
            this._updateTradingPanelVisibility({ shouldCanTrade: !1 }),
            this.tradingPanel.isOpeningAvailable.subscribe(async (e) => {
              this._updateTradingPanelVisibility({ isOpeningAvailable: e });
            }),
            this._domPanelVisibility.setValue(
              this.tradingPanel.isPageOpened(W.TradingPage.DOMPanel)
            ),
            this._orderPanelVisibility.setValue(
              this.tradingPanel.isPageOpened(W.TradingPage.OrderPanel)
            ),
            (0, x.combine)(
              () => ({}),
              this.tradingPanel.activePage.weakReference(),
              this.tradingPanel.isOpened.weakReference()
            ).subscribe(() => {
              this._domPanelVisibility.setValue(
                this.tradingPanel.isPageOpened(W.TradingPage.DOMPanel)
              ),
                this._orderPanelVisibility.setValue(
                  this.tradingPanel.isPageOpened(W.TradingPage.OrderPanel)
                );
            }),
            (this.closePositionDialogVisibility =
              this._closePositionDialogVisibility.value$),
            (this.orderDialogVisibility = this._orderDialogVisibility.value$),
            (this.loginDialogVisibility = this._loginDialogVisibility.value$),
            (this.possibleFullScreenDialogsVisibility = (0, h.merge)(
              this.closePositionDialogVisibility.pipe(
                (0, p.map)((e) => ({ ...e, name: "close-position-dialog" }))
              ),
              this.orderDialogVisibility.pipe(
                (0, p.map)((e) => ({ ...e, name: "order-dialog" }))
              ),
              this.loginDialogVisibility.pipe(
                (0, p.map)((e) => ({ ...e, name: "login-dialog" }))
              ),
              this._tradingPanelPopupVisibility.value$.pipe(
                (0, p.map)((e) => ({ ...e, name: "trading-panel-popup" }))
              )
            )),
            this._linking
              .valueObservable()
              .subscribe(this._onLinkingSymbolChange);
        }
        setChartWidgetCollection(e) {
          (0, s.assert)(
            null === this._chartWidgetCollection,
            "ChartWidgetCollection can be set only once"
          ),
            (this._chartWidgetCollection = e),
            (this._guiAccessor = new se(e)),
            this._loadState(),
            this._migrateOldSettings(us()),
            (this.showSellBuyButtons = (function (e) {
              const t = new A.WatchedValue(!1);
              return (
                (0, x.accumulate)(
                  (e, t) =>
                    !!t.hasModel() &&
                    (0, bt.getBuySellButtonsVisibility)(
                      t.model().model()
                    ).value(),
                  (0, x.combine)(
                    (e) =>
                      e.reduce((e, t) => {
                        const i = (0, bt.getBuySellButtonsVisibility)(
                          t.model()
                        );
                        return (
                          e.push(
                            (0, Xe.createWVFromGetterAndSubscription)(
                              () => i.value(),
                              i
                            ).ownership()
                          ),
                          e
                        );
                      }, []),
                    e.chartModels().weakReference()
                  ).ownership(),
                  e.activeChartWidget.weakReference()
                ).subscribe((e) => t.setValue(e), { callWithLast: !0 }),
                (t.setValue = (t) => {
                  (0, yt.setBuySellButtonsVisibility)(
                    e.activeChartWidget.value().model(),
                    t
                  );
                }),
                t
              );
            })(this._chartWidgetCollection)),
            n.onSync.subscribe(this, this._loadState);
          const t = () => {
            this._save();
          };
          this.noConfirmEnabled.subscribe(t),
            this.showOnlyRejectionNotifications.subscribe(t),
            this._showPricesWithZeroVolume.subscribe(t),
            this._showSpread.subscribe(t),
            this.orderExecutedSoundParams.enabled.subscribe(t),
            this.orderExecutedSoundParams.path.subscribe(t),
            window.addEventListener("offline", this._offlineListener),
            window.addEventListener("online", this._onlineListener),
            this.bindShortcuts(),
            (this._tradedItemsChartCollectionFacadePromise =
              this._createTradedItemsChartCollectionFacade(e)),
            this._registerCustomSources(e),
            this._registerCustomWidgets(e);
        }
        showPricesWith() {
          return {
            zeroVolume: this._showPricesWithZeroVolume,
            spread: this._showSpread,
          };
        }
        domPanelVisibility() {
          return this._domPanelVisibility;
        }
        orderPanelVisibility() {
          return this._orderPanelVisibility;
        }
        getAccountManagerVisibilityMode() {
          if (!window.TradingView.bottomWidgetBar)
            throw new Error(
              "Unable to provide bottom widget visibility mode: bottomWidgetBar undefined"
            );
          return window.TradingView.bottomWidgetBar.mode();
        }
        setAccountManagerVisibilityMode(e) {
          if (!window.TradingView.bottomWidgetBar)
            throw new Error(
              "Unable to provide bottom widget visibility mode: bottomWidgetBar undefined"
            );
          window.TradingView.bottomWidgetBar.setMode(e);
        }
        realtimeProvider() {
          return this._realtimeProvider;
        }
        toggleTradingPanelPopup() {
          this.tradingPanelPopup.visible().value()
            ? this.tradingPanelPopup.hide()
            : this.tradingPanelPopup.show();
        }
        toggleTradingWidget() {
          return window.TradingView.bottomWidgetBar
            ? window.TradingView.bottomWidgetBar.activateTradingTab()
            : Promise.resolve();
        }
        toggleMinimizeBottomWidgetBar() {
          if (window.TradingView.bottomWidgetBar)
            return window.TradingView.bottomWidgetBar.toggleMinimize();
        }
        bottomWidgetBarMode() {
          if (!window.TradingView.bottomWidgetBar)
            throw new Error(
              "Unable to provide bottom widget mode: bottomWidgetBar undefined"
            );
          return window.TradingView.bottomWidgetBar.mode();
        }
        tradingWizard() {
          return this._tradingWizard;
        }
        showTradingProperties() {
          this._gui() && this._gui().showTradingProperties();
        }
        linking() {
          return this._linking;
        }
        async brokersMetainfo() {
          return await this._brokersRegistrationPromise, U.brokersList();
        }
        brokersList() {
          return getBrokersList();
        }
        brokersPlans() {
          return this._getBrokersPlans();
        }
        activeBroker() {
          return this._activeBroker;
        }
        brokerCommandsUI() {
          return this._brokerCommandsUI;
        }
        async selectBroker(e, t) {
          await this._selectBrokerInternal({
            brokerId: e,
            isUserAction: !0,
            keepSessionAlive: t,
          });
        }
        async pickDefaultBroker() {
          if (this._activeBroker) return;
          let e = null;
          const t = (await this.brokersMetainfo()).filter(
            (e) => !e.configFlags.isSuspended
          );
          if (1 === t.length) e = t[0].id;
          else {
            const i = await fi.get();
            i && t.some((e) => e.id === i) && (e = i);
          }
          e && this._selectBrokerInternal({ brokerId: e, isUserAction: !1 });
        }
        async makeNewOrderContextMenuAction(e, t, s) {
          const o = await this._qtySuggester.getQty(e);
          return {
            name: "trade-new-order",
            action: () => {
              const { symbol: i } = this._linking.value();
              i !== e && this._linking.setSymbol(e),
                this.trackEvent(t, "New Order"),
                this._checkAndOpenOrderDialog({
                  symbol: e,
                  qty: o,
                  limitPrice: s,
                  stopPrice: s,
                });
            },
            text: (0, D.appendEllipsis)(r.t(null, void 0, i(767325))),
            statName: "NewOrder",
            shortcutHint: (0, l.humanReadableHash)(a.Modifiers.Shift + 84),
          };
        }
        async defaultContextMenuActions(
          e,
          {
            onlyMainActions: t = !1,
            gaOrigin: s = "Chart Context Menu",
            hideNotExecutableAction: o = !1,
          } = {}
        ) {
          const { symbol: n } = await this.getActualSymbol(e.symbol),
            a = (
              await Promise.all([
                this._makeSubActions({
                  symbol: n,
                  context: e,
                  gaOrigin: s,
                  hideNotExecutableAction: o,
                }),
                this.makeNewOrderContextMenuAction(n, s, e.value || void 0),
              ])
            ).flat();
          return (
            !t &&
              $.enabled("property_pages") &&
              (a.push({ separator: !0 }),
              a.push({
                name: "trade-properties",
                action: () => {
                  this.trackEvent(s, "Trading Properties"),
                    this.showTradingProperties();
                },
                text: (0, D.appendEllipsis)(r.t(null, void 0, i(881352))),
                iconId: "Settings",
                statName: "Properties",
              })),
            a
          );
        }
        defaultDropdownMenuActions(e) {
          const t = "Bottom Panel Dropdown",
            s = [],
            o = this.activeBroker(),
            n = e || {
              tradingProperties: !0,
              restoreConfirmations:
                o && o.metainfo().configFlags.supportConfirmations,
            };
          return (
            $.enabled("property_pages") || (n.tradingProperties = !1),
            n.tradingProperties &&
              s.push({
                action: () => {
                  this.showTradingProperties(),
                    this.trackEvent(t, "Trading Properties");
                },
                text: (0, D.appendEllipsis)(r.t(null, void 0, i(881352))),
                iconId: "Settings",
              }),
            n.restoreConfirmations &&
              s.push({
                action: () => {
                  this._showRestoreConfirmations(),
                    this.trackEvent(t, "Restore confirmations");
                },
                text: (0, D.appendEllipsis)(r.t(null, void 0, i(18240))),
              }),
            s
          );
        }
        chartContextMenuActions(e, t) {
          return (
            this._activeBroker && 1 === this._activeBroker.connectionStatus()
              ? this._activeBroker.chartContextMenuActions(e, t)
              : this.defaultContextMenuActions(e, t)
          ).then((e) =>
            (0, T.convertActionDescriptionsToActions)(e, () => {
              this._chartWidgetCollection?.activeChartWidget
                .value()
                .exitTrackingMode();
            })
          );
        }
        connectStatus() {
          return this._activeBroker ? this._activeBroker.connectionStatus() : 3;
        }
        bindShortcuts() {
          if (this._hotkeys) return;
          this._hotkeys = a.createGroup({ desc: "Trading" });
          const e = async (e, t, i, s) => {
            const { symbol: r } = this._linking.value(),
              o = {
                qty: await this._qtySuggester.getQty(r),
                side: e,
                symbol: r,
                type: t,
                seenPrice: null,
              };
            if (void 0 !== s) {
              const { limitPrice: e, stopPrice: i } = s;
              switch (t) {
                case 1:
                  o.limitPrice = e;
                  break;
                case 3:
                  o.stopPrice = i;
                  break;
                case 4:
                  (o.limitPrice = e), (o.stopPrice = i);
              }
            }
            const n = (0, q.sideToText)(o.side),
              a = (0, q.orderTypeToText)({ orderType: o.type });
            this.trackEvent(
              _s,
              `${n} ${a}`,
              this._getInstantTradingEventLabel()
            ),
              this._checkAndPlaceOrder(o, i);
          };
          if (
            (this._hotkeys.add({
              desc: "Buy",
              hotkey: ys,
              handler: async () => {
                const t = await this._orderPresetsManagerConsumerPromise;
                t?.activePreset();
                return e(1, 2, !0);
              },
            }),
            this._hotkeys.add({
              desc: "Sell",
              hotkey: ms,
              handler: async () => {
                const t = await this._orderPresetsManagerConsumerPromise;
                t?.activePreset();
                return e(-1, 2, !0);
              },
            }),
            this._hotkeys.add({
              desc: "Buy limit",
              hotkey: gs,
              handler: async () => {
                const t = await this._getPriceByCrossHair(),
                  i =
                    null !== t
                      ? t
                      : (
                          await this._realtimeProvider.quotesSnapshot(
                            this._linking.value().symbol
                          )
                        ).ask;
                e(1, 1, !1, { limitPrice: i });
              },
            }),
            this._hotkeys.add({
              desc: "Sell limit",
              hotkey: bs,
              handler: async () => {
                const t = await this._getPriceByCrossHair(),
                  i =
                    null !== t
                      ? t
                      : (
                          await this._realtimeProvider.quotesSnapshot(
                            this._linking.value().symbol
                          )
                        ).bid;
                e(-1, 1, !1, { limitPrice: i });
              },
            }),
            this._hotkeys.add({
              desc: "Open/close Order Panel",
              hotkey: vs,
              handler: () => {
                if (
                  !$.enabled("order_panel") ||
                  !this.tradingPanel.isOpeningAvailable.value()
                )
                  return void this._toggleOrderDialog();
                const e =
                  this.tradingPanel.isOpened.value() &&
                  this.tradingPanel.activePage.value() ===
                    W.TradingPage.OrderPanel;
                this.trackEvent(
                  _s,
                  e ? "Close OT" : "Open OT",
                  this._getInstantTradingEventLabel()
                ),
                  this.setOrderPanelVisibility(!e);
              },
            }),
            this._isDOMAvailable)
          ) {
            this._hotkeys.add({
              desc: "Open/close DOM",
              hotkey: fs,
              handler: () => {
                if (!this.tradingPanel.isOpeningAvailable.value()) return;
                const e =
                  this.tradingPanel.isOpened.value() &&
                  this.tradingPanel.activePage.value() ===
                    W.TradingPage.DOMPanel;
                this.trackEvent(
                  _s,
                  e ? "Close DOM" : "Open DOM",
                  this._getInstantTradingEventLabel()
                ),
                  this.setDOMPanelVisibility(!e);
              },
            });
            {
              let e;
              const t = (t) => {
                void 0 !== this._hotkeys &&
                  (t && void 0 === e
                    ? (e = this._hotkeys.add({
                        desc: "Manual DOM centering",
                        hotkey: Ps,
                        handler: () => {
                          this._domPanelPage.centerDOM(),
                            this.trackEvent(
                              _s,
                              "Center DOM",
                              this._getInstantTradingEventLabel()
                            );
                        },
                      }))
                    : t ||
                      void 0 === e ||
                      (this._hotkeys.remove(e), (e = void 0)));
              };
              t(this._domPanelVisibility.value()),
                this._domPanelVisibility.subscribe(t);
            }
          }
        }
        formatter(e) {
          return this.realtimeProvider().formatter(e);
        }
        showSuccessNotification(e, t, i = 1e4) {
          this.showOnlyRejectionNotifications.value() ||
            this._showNotification(e, t, 0, i),
            $.enabled("show_trading_notifications_history") &&
              this._addNotificationRow(e, t, 0),
            this._log(e, t);
        }
        getNotifications() {
          return this._notifications.filter(
            (e) =>
              e.account === this._account &&
              e.broker ===
                (this._activeBroker ? this._activeBroker.metainfo().id : null)
          );
        }
        orderViewController() {
          return (0, s.ensureNotNull)(this._orderViewController);
        }
        findOrCreateOrderViewController() {
          return this._getOrderViewController();
        }
        tradingStat() {
          return this._tradingStat;
        }
        async verifyBrokerLiveAccount() {
          return (
            this._verifyLiveAccount(),
            null !== this._accountVerificationPromise
              ? this._accountVerificationPromise
              : Promise.reject("Account verification is not needed")
          );
        }
        pipValueType() {
          return this._pipValueType$.asObservable();
        }
        tradedItemsChartCollectionFacade() {
          return (0, s.ensureNotNull)(
            this._tradedItemsChartCollectionFacadePromise
          );
        }
        async removeRealtimeDataPermissions() {
          (await removeRealtimeDataSubscription(
            (0, s.ensureNotNull)(this._activeBroker).metainfo().id
          )) && this._guiAccessor.reconnectChartApi(!0);
        }
        makeActualSymbolObservable(e) {
          return (
            this._continuousFrontContractExtractor?.makeValueObservable(e) ??
            (0, _.of)({ symbol: e })
          );
        }
        async getActualSymbol(e) {
          return void 0 === this._continuousFrontContractExtractor
            ? { symbol: e }
            : this._continuousFrontContractExtractor.makeValue(e);
        }
        getQtySuggester() {
          return this._qtySuggester;
        }
        showOrderToast(e) {
          const t = 2 === e.toastType,
            { title: i, text: s } = (function (e) {
              const t = (0, es.getHeadingText)(e),
                { primaryText: i, secondaryText: s = "" } = (0,
                es.getOrderInfoTexts)({
                  ...e,
                  primaryPrice: e.primaryPrice
                    ? e.priceFormatter.format(e.primaryPrice)
                    : void 0,
                  secondaryPrice: e.secondaryPrice
                    ? e.priceFormatter.format(e.secondaryPrice)
                    : void 0,
                });
              return { title: t + ` (${e.orderId})`, text: i + s };
            })(e);
          if (
            ($.enabled("show_trading_notifications_history") &&
              this._addNotificationRow(i, s, t ? 1 : 0),
            this._log(i, s),
            this.showOnlyRejectionNotifications.value() && !t)
          )
            return;
          const r = (0, Xi.guid)();
          Zi.toastManager.addToast(r, Yi.ORDERS_GROUP_ID, e),
            (0, Ji.setToastUserActivityBasedRemovalTimeout)(r, t ? 25e3 : 1e4);
        }
        clearTradedContextLinking() {
          null !== this._tradedContextLinking.context() &&
            this._tradedContextLinking.clear();
        }
        overrideTradedGroupStyles(e) {
          this._tradedGroupStyleOverrides = e;
        }
        _getInstantTradingEventLabel() {
          return this.noConfirmEnabled.value() ? "Instant" : "Not Instant";
        }
        async _getOrderViewController() {
          return null !== this._orderViewController
            ? this._orderViewController
            : (await this._createOrderController(),
              this._getOrderViewController());
        }
        async _getPaperCompetitions() {
          return getPaperCompetitions().catch(() => []);
        }
        async _getActivePaperCompetitionsIdsSinceTimestamp(e) {
          const t = await this._getPaperCompetitions(),
            i = window.ChartApiInstance.serverTime(),
            s = t.flatMap((t) => {
              const s = new Date(t.properties.startTime).getTime(),
                r = new Date(t.properties.registrationEndTime).getTime();
              return e > s || i < s || i > r ? [] : t.id;
            });
          return new Set(s);
        }
        async _showPaperCompetitionStartedDialogIfNeeded() {}
        async _selectBroker(e) {
          const {
            brokerId: t,
            isUserAction: s,
            keepSessionAlive: o = !1,
            disconnectInfo: n,
            hasConcurrentSession: a,
            shouldReconnect: l,
          } = e;
          if (this._switchingBroker)
            return void rs.logWarn(
              `Broker is already selected, but a new broker id: ${t} was received.`
            );
          if (
            t !== (this._activeBroker ? this._activeBroker.metainfo().id : null)
          ) {
            if (
              (this._linkingSubscription?.unsubscribe(),
              this._destroyContinuousFrontContractTrading(),
              this._activeBroker)
            ) {
              const e = this._isReconnectNeeded
                  ? null
                  : this._activeBroker.disconnectWarningMessage(),
                t = () =>
                  this._showReviewDialogIfNeeded(3, {
                    disconnectType: w.DisconnectType.LogOut,
                  }),
                a = () => {
                  t(), this._logOut(s, o, n);
                };
              if (null !== e && window.is_authenticated && navigator.onLine) {
                if (
                  !(await (0, he.showSimpleConfirmDialog)({
                    title: r.t(null, void 0, i(672122)),
                    text: e,
                    mainButtonText: r.t(null, void 0, i(732114)),
                    mainButtonIntent: "danger",
                    cancelButtonText: r.t(null, void 0, i(904543)),
                    onConfirm: a,
                    onCancel: () => {
                      t();
                    },
                  }))
                )
                  return;
              } else a();
            }
            if (null != t) {
              let e;
              (this._tradeNowBrokerId = null), (this._switchingBroker = !0);
              try {
                const i = await U.createBrokerConnection(
                    this,
                    t,
                    this._serverLogger,
                    null,
                    e
                  ),
                  { isMaintenance: s, message: r } =
                    await i.maintenanceStatus();
                if (s) {
                  if (
                    !(await this._showBrokerSideMaintenanceWarning(
                      i.metainfo().id,
                      r
                    ))
                  )
                    return (this._switchingBroker = !1), void i.disconnect(!0);
                }
                0,
                  await this._initBroker({
                    brokerConnection: i,
                    keepSessionAlive: o,
                    shouldReconnect: l,
                    disconnectInfo: n,
                  });
              } catch (e) {
                (this._switchingBroker = !1),
                  rs.logError((0, I.getLoggerMessage)(e));
              }
            } else
              s &&
                setTimeout(() => {
                  fi.clear();
                }),
                this.onBrokerChange.fire(null),
                this._closePositionDialogVisibilitySubscription?.unsubscribe(),
                (this._brokerCommandsUI = null);
          } else rs.logWarn(`${t} is already selected.`);
        }
        _destroyContinuousFrontContractTrading() {
          0;
        }
        async _initContinuousFrontContractTrading() {
          0;
        }
        _makeTradingPanelTabsConfig() {
          return (function (e) {
            const {
              onSelect: t,
              orderPanelAvailable: s,
              domPanelAvailable: o,
            } = e;
            return s && o
              ? {
                  items: [
                    {
                      id: W.TradingPage.OrderPanel,
                      children: ge.createElement(
                        Hi,
                        {
                          tooltipText: r.t(null, void 0, i(823887)),
                          tooltipHotKey: Gi,
                        },
                        r.t(null, void 0, i(512686))
                      ),
                    },
                    {
                      id: W.TradingPage.DOMPanel,
                      children: ge.createElement(
                        Hi,
                        {
                          tooltipText: r.t(null, void 0, i(611638)),
                          tooltipHotKey: Ki,
                        },
                        r.t(null, void 0, i(611638))
                      ),
                    },
                  ],
                  onSelect: t,
                }
              : null;
          })({
            onSelect: this._toggleTradingPanelPage,
            orderPanelAvailable: $.enabled("order_panel"),
            domPanelAvailable: this._isDOMAvailable,
          });
        }
        _makeBrokerDependantWarningMessageObservable(e) {
          let t,
            i = async (t, i) => {
              const { tradable: s } = await (0, N.respectAbort)(
                t,
                e.isTradable(i)
              );
              return s;
            };
          i = (0, N.respectLatest)(i);
          try {
            t = e.currentAccount();
          } catch {}
          const s = (0, g.fromEventPattern)(
              (t) => e.currentAccountUpdate.subscribe(null, t),
              (t) => e.currentAccountUpdate.unsubscribe(null, t)
            ).pipe((0, b.startWith)(t)),
            r = (0, g.fromEventPattern)(
              (t) => e.connectionStatusUpdate.subscribe(null, t),
              (t) => e.connectionStatusUpdate.unsubscribe(null, t)
            ).pipe((0, b.startWith)(e.connectionStatus()));
          return (0, y.combineLatest)({
            value: this._linking.valueObservable(),
            currentAccountUpdate: s,
            connectionStatusUpdate: r,
          }).pipe(
            (0, m.mergeMap)(({ value: e }) =>
              (0, y.combineLatest)({
                isTradable: (0, v.from)(i(null, e.symbol)).pipe(
                  (0, b.startWith)(!1),
                  S(() => C.EMPTY)
                ),
                value: (0, _.of)(e),
              })
            ),
            (0, p.map)((e) => (e.isTradable ? e.value.warning : void 0))
          );
        }
        async _initBroker({
          brokerConnection: e,
          shouldReconnect: t = !0,
          disconnectInfo: i,
        }) {
          (this._activeBroker = e),
            this._activeBroker.connectionStatusUpdate.subscribe(
              this,
              this._connectionListener
            ),
            this._activeBroker.currentAccountUpdate.subscribe(
              this,
              this._onCurrentAccountUpdate
            ),
            this._realtimeProvider.onStatusChanged.subscribe(
              null,
              this._setPipValueType
            ),
            this._realtimeProvider.onStatusChanged.subscribe(
              null,
              this._trackNonTradableSymbol
            ),
            await this._initContinuousFrontContractTrading(),
            (this._linkingSubscription = this._linking
              .valueObservable()
              .subscribe((e) => {
                this._setPipValueType(),
                  this._trackNonTradableSymbol(),
                  this._recreateOrderPresetsManagerConsumer();
              })),
            (this._brokerCommandsUI = new Pe({
              activeBroker: this._activeBroker,
              guiAccessor: this._guiAccessor,
              noConfirmEnabled: this.noConfirmEnabled,
              orderViewController: this._getOrderViewController.bind(this),
              showErrorNotification: this.showErrorNotification.bind(this),
              trackEvent: this.trackEvent,
              tradingLinking: this._linking,
              tradedContextLinking: this._tradedContextLinking,
              abortSignalGetter: () => this._abortController.signal,
            })),
            (this._closePositionDialogVisibilitySubscription =
              this._brokerCommandsUI.closePositionDialogVisibility.subscribe(
                this._makeDialogVisibilityHandler(
                  this._closePositionDialogVisibility
                )
              )),
            t && this._activeBroker.tryRestoreSession(),
            await fi.set(this._activeBroker.metainfo().id),
            this.onBrokerChange.fire(this._activeBroker),
            this._getOrderViewController(),
            this._updateConnectionStatus(this.connectStatus(), !1, i),
            (this._switchingBroker = !1);
        }
        async _showBrokerSideMaintenanceWarning(e, t) {
          return (0, he.showSimpleConfirmDialog)({
            title: r.t(null, { replace: { brokerId: e } }, i(637161)),
            text: t ?? r.t(null, void 0, i(943288)),
            cancelButtonText: r.t(null, void 0, i(904543)),
            mainButtonIntent: "primary",
            mainButtonText: r.t(null, void 0, i(116056)),
            showBackdrop: !0,
          });
        }
        _makeDialogVisibilityHandler(e) {
          return (t) => {
            e.setValue(t);
          };
        }
        _gui() {
          return this._guiAccessor;
        }
        _addNotificationRow(e, t, i) {
          const s = {
            id: this._notifications.length,
            account: this._account,
            broker: this._activeBroker
              ? this._activeBroker.metainfo().id
              : null,
            time: new Date(),
            title: e,
            text: t,
            type: i,
          };
          this._notifications.push(s), this.onNewNotification.fire(s);
        }
        _offlineHandler() {
          this._selectBrokerInternal({
            brokerId: null,
            isUserAction: !1,
            keepSessionAlive: !1,
            disconnectInfo: { disconnectType: w.DisconnectType.Offline },
          }),
            rs.logNormal("The connection to the Internet was interrupted");
        }
        async _onlineHandler() {
          (await this._selectLastBroker()) &&
            rs.logNormal("The connection to the Internet was restored");
        }
        _showNotification(e, t, i, s) {
          const r = (0, Xi.guid)();
          Zi.toastManager.addToast(r, is.TRADING_NOTIFICATIONS_GROUP_ID, {
            title: e,
            content: t,
            notificationType: i,
          }),
            (0, Ji.setToastUserActivityBasedRemovalTimeout)(r, s);
        }
        _hideAllNotifications() {
          Zi.toastManager.removeGroup(Yi.ORDERS_GROUP_ID),
            Zi.toastManager.removeGroup(is.TRADING_NOTIFICATIONS_GROUP_ID);
        }
        _showReviewDialogIfNeeded(e, t) {
          if (null === this._activeBroker) return;
          this._activeBroker;
        }
        _connectionListener(e, t) {
          const i = this.connectStatus();
          this._showReviewDialogIfNeeded(e, t);
          const s = this._getForceLogoutUserByInactivityTimerInfo();
          void 0 !== s &&
            this._processForceLogoutUserByInactivityTimerInfoByStatus(e, s);
          const r = (this._isReconnectNeeded =
            t?.disconnectType === w.DisconnectType.BrokenConnection);
          3 !== e ||
            (t?.disconnectType !== w.DisconnectType.LogOut &&
              !this._isReconnectNeeded) ||
            this._selectBrokerInternal({
              brokerId: null,
              isUserAction: !1,
              keepSessionAlive: !1,
              disconnectInfo: t,
            }).then(() => {
              if (this._isReconnectNeeded)
                return this._tryReconnectLastBroker();
            }),
            t?.disconnectType === w.DisconnectType.CancelAuthorization &&
              this.trackEvent("Signin", "OAuth popup closed", "By user"),
            t?.disconnectType === w.DisconnectType.TimeOutForAuthorization &&
              this.trackEvent("Signin", "OAuth popup closed", "By timeout"),
            this._updateConnectionStatus(i, !r, t);
        }
        _processForceLogoutUserByInactivityTimerInfoByStatus(e, t) {
          1 === e
            ? ((this._userActivityStatus = createActivityStatus(t.timeout, !0)),
              this._userActivityStatus.subscribe(
                this._onUserActivityStatusChange
              ))
            : null !== this._userActivityStatus &&
              this._unsubscribeUserActivityStatus();
        }
        async _selectLastBroker() {
          const e = await fi.get();
          return (
            null !== e &&
            (await this._selectBrokerInternal({
              brokerId: e,
              isUserAction: !1,
            }),
            !0)
          );
        }
        _updateOrderPanelSpinnerState() {
          const e = this._orderViewController,
            t = 2 === this.connectStatus(),
            i = null !== e && e.stateChanging.value();
          this.tradingPanel.isLoading.setValue(t || i);
        }
        _showConnectWarningMessage(e) {
          const t = e.title ?? r.t(null, void 0, i(166231)),
            s = e.message;
          e.displayType === O.ConnectWarningMessageDisplayType.PopUp &&
            (0, he.showSimpleConfirmDialog)({
              title: t,
              text: s,
              mainButtonText: r.t(null, void 0, i(819295)),
              mainButtonIntent: "primary",
              checkboxLabel: r.t(null, void 0, i(127328)),
              showDisableConfirmationsCheckbox: e.skippable ?? !0,
              showCancelButton: !1,
            }),
            e.displayType === O.ConnectWarningMessageDisplayType.Notification &&
              (this._showNotification(t, s, 2, 1e4),
              $.enabled("show_trading_notifications_history") &&
                this._addNotificationRow(t, s, 2));
        }
        async _updateConnectionStatus(e, t = !0, i) {
          this._updateOrderPanelSpinnerState(),
            this._updateOrderPresetsManagerBroker(null),
            this.onConnectionStatusChange.fire(e, i),
            this._log("Connection status", os[e]);
          this._activeBroker;
          if (
            (this._abortController.abort(),
            (this._abortController = new AbortController()),
            (3 !== e && 4 !== e) || this._hideAllNotifications(),
            t)
          ) {
            const e = this._activeBroker?.metainfo().id;
            void 0 !== e ? await fi.set(e) : fi.clear();
          }
          null !== this._activeBroker
            ? ((3 !== e && 4 !== e) ||
                this._updateTradingPanelVisibility({ isOpened: !1 }),
              1 === e
                ? ((this._account = this._activeBroker.currentAccount()),
                  this._guiAccessor.setBroker(this._activeBroker))
                : this._tradedContextLinking.clear())
            : ((this._accountVerificationPromise = null),
              this._updateTradingPanelVisibility({ isOpened: !1 }),
              this._guiAccessor.setBroker(null),
              this._tradedContextLinking.clear());
        }
        async _checkOrRemoveRealtimeDataIfNeeded(e) {
          if (!e.configFlags.supportRealtimeDataCheck) return;
          const { realtimeDataPermissionsToggleConfig: t } = e;
          if (void 0 === t) return void this.checkRealtimeDataPermissions();
          const s = `${z.settingsKeys.REALTIME_DATA_ACCEPTED}.${e.id}`;
          switch (n.getValue(s)) {
            case "true":
              return void this.checkRealtimeDataPermissions();
            case "false":
              return void this.removeRealtimeDataPermissions();
            default:
              const e = await showSimpleConfirmDialogWithSolutionLink({
                title: t.enableRealtimeDataPermissionsTitleText,
                text: t.enableRealtimeDataPermissionsToggleText,
                mainButtonText: r.t(null, void 0, i(605954)),
                cancelButtonText: r.t(null, void 0, i(612869)),
                showCloseButton: !1,
                closeOnOutsideClick: !1,
                mainButtonIntent: "primary",
                closeOnEscapePress: !1,
                solutionId: t.solutionId,
                showBackdrop: !0,
                closeOnBackDropClick: !1,
              });
              e
                ? await this.checkRealtimeDataPermissions()
                : await this.removeRealtimeDataPermissions(),
                n.setValue(s, e);
          }
        }
        _verifyLiveAccount() {
          (0, s.ensureNotNull)(this._activeBroker);
        }
        _save() {
          cs({
            ...us(),
            noConfirmEnabled: +!!this.noConfirmEnabled.value(),
            qweqrq: +!!this.showOnlyRejectionNotifications.value(),
            showPricesWithZeroVolume: +!!this._showPricesWithZeroVolume.value(),
            showSpread: +!!this._showSpread.value(),
            orderExecutedSoundParams: JSON.stringify({
              enabled: +!!this.orderExecutedSoundParams.enabled.value(),
              name: this.orderExecutedSoundParams.path.value(),
            }),
          });
        }
        _loadState() {
          const e = us();
          if (
            (this.noConfirmEnabled.setValue(!!e.noConfirmEnabled),
            this.showOnlyRejectionNotifications.setValue(!!e.qweqrq),
            this._showPricesWithZeroVolume.setValue(
              !e.hasOwnProperty("showPricesWithZeroVolume") ||
                Boolean(e.showPricesWithZeroVolume)
            ),
            this._showSpread.setValue(
              !e.hasOwnProperty("showSpread") || Boolean(e.showSpread)
            ),
            e.hasOwnProperty("orderExecutedSoundParams") &&
              void 0 !== e.orderExecutedSoundParams)
          ) {
            const t = JSON.parse(e.orderExecutedSoundParams);
            this.orderExecutedSoundParams.enabled.setValue(!!t.enabled),
              this.orderExecutedSoundParams.path.setValue(
                ds(t.name) ? t.name : this.orderExecutedSoundParams.path.value()
              );
          }
        }
        async _migrateOldSettings(e) {
          const t = e[this._showSellBuyButtonsKey];
          if (void 0 !== t && this._chartWidgetCollection) {
            const e = this._chartWidgetCollection;
            await Promise.all(
              e.getAll().map(
                (e) =>
                  new Promise((t) => {
                    e.withModel(null, () => t);
                  })
              )
            );
            for (const i of e.getAll()) {
              const e = i
                .properties()
                .childs()
                .paneProperties.childs()
                .legendProperties.child(
                  "showSellBuyButtons" === this._showSellBuyButtonsKey
                    ? "showTradingButtons"
                    : "showTradingButtonsMobile"
                );
              e && i.hasModel() && i.model().setProperty(e, !!t, null);
            }
            const [i] = e.getAll();
            if (i.getSaveChartService()?.hasChanges()) {
              await new Promise((e) => {
                i.getSaveChartService()?.getOnChanges().subscribe(null, e, !0);
              });
              const e = us();
              this._showSellBuyButtonsKey in e &&
                (delete e[this._showSellBuyButtonsKey], cs(e));
            }
          }
        }
        _makeShowSellBuyButtonsKey() {
          return "showSellBuyButtons";
        }
        _log(e, t) {
          rs.logNormal(
            `${
              this._activeBroker
                ? this._activeBroker.metainfo().id + " Trading: "
                : ""
            }${e} - ${t}`
          );
        }
        _makeSureCanTrade() {
          const e = this.activeBroker(),
            t = this.brokerCommandsUI();
          return e && t
            ? 1 === e.connectionStatus() || (this.toggleTradingWidget(), !1)
            : (this.toggleTradingWidget().then(() =>
                this.onNeedSelectBroker.fire()
              ),
              !1);
        }
        _checkAndPlaceOrder(e, t = !1) {
          this._makeSureCanTrade() &&
            (!1 === t && this._tradedContextLinking.clear(),
            (0, s.ensureNotNull)(this.brokerCommandsUI()).placeOrder(
              e,
              !0,
              void 0,
              void 0,
              t
            ));
        }
        _checkAndOpenOrderDialog(e) {
          this._makeSureCanTrade() &&
            (0, s.ensureNotNull)(this.brokerCommandsUI()).placeOrder(e);
        }
        _makeSubAction({
          symbol: e,
          side: t,
          orderType: s,
          orderPrices: o,
          currentQuotes: n,
          qty: a,
          gaOrigin: l,
          shortcutHint: d,
        }) {
          const u = 1 === t ? "Trading.Buy" : "Trading.Sell",
            c = 1 === t ? "Buy" : "Sell",
            h = 1 === s ? "Limit" : 3 === s ? "Stop" : "StopLimit",
            p = (function (e) {
              return "altPrice" in e && "formattedAltPrice" in e;
            })(o),
            _ = (0, T.safeSplitSymbol)(e)[1],
            g = c + h,
            b = {
              BuyLimit: r
                .t(null, void 0, i(913571))
                .format({
                  symbol: _,
                  qty: (0, L.abbreviatedNumber)(a),
                  value: o.formattedPrice,
                }),
              SellStop: r
                .t(null, void 0, i(219027))
                .format({
                  symbol: _,
                  qty: (0, L.abbreviatedNumber)(a),
                  value: o.formattedPrice,
                }),
              SellLimit: r
                .t(null, void 0, i(132521))
                .format({
                  symbol: _,
                  qty: (0, L.abbreviatedNumber)(a),
                  value: o.formattedPrice,
                }),
              BuyStop: r
                .t(null, void 0, i(253107))
                .format({
                  symbol: _,
                  qty: (0, L.abbreviatedNumber)(a),
                  value: o.formattedPrice,
                }),
            };
          return (
            p &&
              ((b.SellStopLimit = r
                .t(null, void 0, i(873554))
                .format({
                  symbol: _,
                  qty: (0, L.abbreviatedNumber)(a),
                  value: o.formattedPrice,
                  altValue: o.formattedAltPrice,
                })),
              (b.BuyStopLimit = r
                .t(null, void 0, i(278673))
                .format({
                  symbol: _,
                  qty: (0, L.abbreviatedNumber)(a),
                  value: o.formattedPrice,
                  altValue: o.formattedAltPrice,
                }))),
            {
              name: `trade-${c}-${h}`.toLowerCase(),
              action: () => {
                this.trackEvent(l, `${c} ${h}`);
                const i = 1 === s ? "limitPrice" : "stopPrice",
                  r = {
                    qty: a,
                    side: t,
                    symbol: e,
                    type: s,
                    seenPrice: (1 === t ? n?.ask : n?.bid) ?? null,
                    currentQuotes: n,
                  };
                null !== o.price && (r[i] = o.price),
                  4 === s && p && (r.limitPrice = o.altPrice),
                  this._checkAndPlaceOrder(r);
              },
              iconId: u,
              text: b[g],
              statName: g,
              shortcutHint: d,
            }
          );
        }
        _createOrderController() {
          return (
            null === this._orderControllerPromise &&
              (this._orderControllerPromise = Promise.resolve()
                .then(i.bind(i, 520985))
                .then(
                  ({ OrderViewController: e }) =>
                    new e({
                      tradingCommands: {
                        onNeedSelectBroker: this.onNeedSelectBroker,
                        realtimeProvider: this.realtimeProvider(),
                        pipValueType$: this.pipValueType(),
                        trackEvent: this.trackEvent,
                        toggleTradingWidget:
                          this.toggleTradingWidget.bind(this),
                        toggleTradingPanelPopup:
                          this.toggleTradingPanelPopup.bind(this),
                        showErrorNotification:
                          this.showErrorNotification.bind(this),
                        getTradingSettingsStorage: () =>
                          this._tradingSettingsStorage,
                      },
                      tradingPanelCommands: {
                        rootContainer: this.tradingPanel.rootContainer,
                        container: this.tradingPanel.container,
                        isOpened: this.tradingPanel.isOpened,
                        isOpeningAvailable:
                          this.tradingPanel.isOpeningAvailable,
                        activePage: this.tradingPanel.activePage,
                        close: this.tradingPanel.close.bind(this.tradingPanel),
                        openPage: this.tradingPanel.openPage.bind(
                          this.tradingPanel
                        ),
                      },
                      qtySuggester: this._qtySuggester,
                      tradingLinking: this._linking,
                      orderViewHeaderState: this._orderPanelHeaderState,
                      orderPresetsManager: this._orderPresetsManager,
                      tradedContextLinking: void 0,
                      orderByIdGetter: (e) => this._ordersService.find(e),
                    })
                )
                .then((e) => {
                  (this._orderControllerPromise = null),
                    (this._orderViewController = e),
                    this._orderViewController.stateChanging.subscribe(() =>
                      this._updateOrderPanelSpinnerState()
                    ),
                    this._orderViewController.dialogVisibility.subscribe(
                      this._makeDialogVisibilityHandler(
                        this._orderDialogVisibility
                      )
                    );
                })),
            this._orderControllerPromise
          );
        }
        async _registerCustomSources(e) {
          !(async function (e, t) {
            const s = await Promise.all([
              i.e(4829),
              i.e(2197),
              i.e(6161),
              i.e(2650),
            ]).then(i.bind(i, 586679));
            e.addCustomSource(
              "bidask",
              (i, r) =>
                new s.BidAsk(i, r, t.realtimeProvider(), () => {
                  e.activeChartWidget
                    .value()
                    .showGeneralChartProperties(F.TabNames.scales);
                })
            );
          })(e, this),
            et(e, this, this.showTradedSources);
          new (
            await Promise.all([
              i.e(1067),
              i.e(2197),
              i.e(6161),
              i.e(1652),
            ]).then(i.bind(i, 751792))
          ).TradedSourcesManager(
            this._ordersService,
            this._positionService,
            e,
            {
              activeTradedLinking: this._tradedContextLinking,
              showTradedSources: this.showTradedSources,
              realtimeProvider: this._realtimeProvider,
              qtySuggester: this._qtySuggesterWithOrderSizeCalculatorResetting,
              brokerCommandsUI: this.brokerCommandsUI.bind(this),
              tradingPanelCloser: this._closePanelOrDialogs,
              trackEvent: this.trackEvent,
              pipValueType$: this.pipValueType(),
              makeActualSymbolObservable:
                this.makeActualSymbolObservable.bind(this),
              getSymbolSpecificTradingOptions: (e) =>
                (0, s.ensureNotNull)(
                  this._activeBroker
                ).getSymbolSpecificTradingOptions(e),
              onCalculatorOpened: this._handleQtyCalculatorOpening,
            },
            () => this._tradedGroupStyleOverrides
          );
        }
        _registerCustomWidgets(e) {
          hs &&
            (function (e) {
              const {
                trading: t,
                qtySuggester: i,
                orderPresetsManager: s,
                chartWidgetCollection: r,
                onCalculatorOpened: o,
              } = e;
              r.addCustomWidgetToLegend(
                (e, r, n) => {
                  const a = e.mainSeries(),
                    l = (0, Xe.createWVFromGetterAndSubscriptions)(
                      () => a.isFailed() || "economic" === a.symbolInfo()?.type,
                      [
                        a.dataEvents().symbolResolved(),
                        a.dataEvents().symbolError(),
                        a.dataEvents().unsupportedResolutionRequested(),
                      ]
                    ),
                    d = e
                      .properties()
                      .childs()
                      .paneProperties.childs()
                      .legendProperties.childs();
                  return new ei({
                    chartModel: e,
                    dataEvents: a.dataEvents(),
                    getSymbolName: ti(a),
                    isNonTradableInstrument: l.ownership(),
                    qtySuggester: i,
                    tradingCommands: {
                      onNeedSelectBroker: t.onNeedSelectBroker,
                      realtimeProvider: t.realtimeProvider(),
                      onBrokerConnectionStatusChange:
                        t.onConnectionStatusChange,
                      brokerConnectionStatus: t.connectStatus.bind(t),
                      trackEvent: t.trackEvent,
                      toggleTradingWidget: t.toggleTradingWidget.bind(t),
                      toggleTradingPanelPopup:
                        t.toggleTradingPanelPopup.bind(t),
                      brokerCommandsUI: t.brokerCommandsUI.bind(t),
                      toggleMinimizeBottomWidgetBar: () =>
                        t.toggleMinimizeBottomWidgetBar(),
                      makeActualSymbolObservable:
                        t.makeActualSymbolObservable.bind(t),
                      onCalculatorOpened: o,
                    },
                    settings: {
                      showSellBuyButtons: (0, st.convertPropertyToWatchedValue)(
                        d.showTradingButtons
                      ).ownership(),
                      noConfirmEnabled: t.noConfirmEnabled.spawnOwnership(),
                      themeName: r.ownership(),
                      visuallyHidden: n.ownership(),
                    },
                    isInReplay: e.isInReplay().weakReference(),
                    hibernated: e.collapsed().spawnOwnership(),
                    backgroundTopColor: e.backgroundTopColor().spawnOwnership(),
                    orderPresetsManager: s,
                  });
                },
                { block: 0, position: 0 }
              );
            })({
              trading: this,
              chartWidgetCollection: e,
              orderPresetsManager: this._orderPresetsManager,
              qtySuggester: this._qtySuggesterWithOrderSizeCalculatorResetting,
              onCalculatorOpened: this._handleQtyCalculatorOpening,
            });
        }
        async _makeSubActions(e) {
          const {
            symbol: t,
            context: i,
            gaOrigin: s,
            hideNotExecutableAction: r = !1,
          } = e;
          if (null === i.value || (0, u.isNaN)(i.value)) return [];
          const o = this.activeBroker();
          let n,
            a,
            l,
            d,
            c,
            h,
            p,
            _,
            g,
            b,
            y,
            m,
            v,
            f = null === o,
            P = null === o,
            k = !r && null === o,
            S = !r && null !== o,
            C = !r && null === o;
          null !== o &&
            1 === o.connectionStatus() &&
            (v = await o.isTradable(t));
          const [w, O, I, { ask: E, bid: D }, V] = await Promise.all([
            this._qtySuggester.getQty(t),
            this._realtimeProvider.symbolInfo(t),
            this._realtimeProvider.formatter(t),
            this._realtimeProvider.quotesSnapshot(t),
            o?.getSymbolSpecificTradingOptions(t),
          ]);
          if (void 0 === E || void 0 === D || (i.value < E && i.value > D))
            return [];
          const $ = O.variableMinTick
              ? (0, M.makeVariableMinTickData)(O.minTick, O.variableMinTick)
              : void 0,
            L = (e) =>
              (0, M.getMinTick)({
                minTick: O.minTick,
                price: e,
                variableMinTickData: $,
              });
          if (null !== o && v && v.tradable) {
            const e = o.metainfo().configFlags,
              t = (0, B.alignToStep)(i.value, L(i.value));
            (n = t),
              (l = t),
              (d = t),
              (a = t),
              (c = d + L(d)),
              (h = a - L(a)),
              (f = Boolean(
                e.supportLimitOrders &&
                  (0, T.isOrderTypeAllowed)(1, V?.allowedOrderTypes)
              )),
              (P = Boolean(
                e.supportStopOrders &&
                  (0, T.isOrderTypeAllowed)(3, V?.allowedOrderTypes)
              )),
              (C = Boolean(
                e.supportStopLimitOrders &&
                  (0, T.isOrderTypeAllowed)(4, V?.allowedOrderTypes)
              )),
              (k = Boolean(e.supportStopOrdersInBothDirectionsInUI)),
              (S = Boolean(e.supportStopLimitOrdersInBothDirections)),
              void 0 !== O.limitPriceStep &&
                ((n = (0, q.roundToStepByPriceTypeAndSide)(
                  i.value,
                  O.limitPriceStep,
                  1,
                  1
                )),
                (l = (0, q.roundToStepByPriceTypeAndSide)(
                  i.value,
                  O.limitPriceStep,
                  1,
                  -1
                )),
                (c = (0, q.roundToStepByPriceTypeAndSide)(
                  i.value + L(i.value),
                  O.limitPriceStep,
                  1,
                  1
                )),
                (h = (0, q.roundToStepByPriceTypeAndSide)(
                  i.value - L(i.value),
                  O.limitPriceStep,
                  1,
                  -1
                ))),
              void 0 !== O.stopPriceStep &&
                ((d = (0, q.roundToStepByPriceTypeAndSide)(
                  i.value,
                  O.stopPriceStep,
                  2,
                  1
                )),
                (a = (0, q.roundToStepByPriceTypeAndSide)(
                  i.value,
                  O.stopPriceStep,
                  2,
                  -1
                ))),
              (p = I.format(n)),
              (_ = I.format(a)),
              (g = I.format(l)),
              (b = I.format(d)),
              (y = I.format(c)),
              (m = I.format(h));
          } else
            (n = l = d = a = i.value),
              (p = _ = g = b = i.formattedValue),
              (c = d + L(d)),
              (h = a - L(a)),
              (y = I.format(c)),
              (m = I.format(h));
          const x = { ask: E, bid: D },
            A = (D + E) / 2,
            R = [];
          if (i.value < E && i.value > D) {
            if (f) {
              const e = { price: n, formattedPrice: p };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: 1,
                  orderType: 1,
                  orderPrices: e,
                  shortcutHint: void 0,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
              const i = { price: l, formattedPrice: g };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: -1,
                  orderType: 1,
                  orderPrices: i,
                  shortcutHint: void 0,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
            }
          } else if (i.value <= A) {
            if (f) {
              const e = { price: n, formattedPrice: p };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: 1,
                  orderType: 1,
                  shortcutHint: void 0,
                  orderPrices: e,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
            }
            if (k) {
              const e = { price: d, formattedPrice: b };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: 1,
                  orderType: 3,
                  orderPrices: e,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
            }
            if (P || k) {
              const e = { price: a, formattedPrice: _ };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: -1,
                  orderType: 3,
                  orderPrices: e,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
            }
            if (C) {
              const e = {
                symbol: t,
                side: -1,
                orderType: 4,
                orderPrices: {
                  price: a,
                  formattedPrice: _,
                  altPrice: h,
                  formattedAltPrice: m,
                },
                qty: w,
                gaOrigin: s,
                currentQuotes: x,
              };
              R.push(this._makeSubAction(e)),
                S && R.push(this._makeSubAction({ ...e, side: 1 }));
            }
          } else {
            if (f) {
              const e = { price: l, formattedPrice: g };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: -1,
                  orderType: 1,
                  shortcutHint: void 0,
                  orderPrices: e,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
            }
            if (k) {
              const e = { price: a, formattedPrice: _ };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: -1,
                  orderType: 3,
                  orderPrices: e,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
            }
            if (P || k) {
              const e = { price: d, formattedPrice: b };
              R.push(
                this._makeSubAction({
                  symbol: t,
                  side: 1,
                  orderType: 3,
                  orderPrices: e,
                  qty: w,
                  gaOrigin: s,
                  currentQuotes: x,
                })
              );
            }
            if (C) {
              const e = {
                symbol: t,
                side: 1,
                orderType: 4,
                orderPrices: {
                  price: d,
                  formattedPrice: b,
                  altPrice: c,
                  formattedAltPrice: y,
                },
                qty: w,
                gaOrigin: s,
                currentQuotes: x,
              };
              R.push(this._makeSubAction(e)),
                S && R.push(this._makeSubAction({ ...e, side: -1 }));
            }
          }
          return R;
        }
        _initPaidBrokersByUserRegion() {
          this._brokersPlansPromise = Promise.resolve([]);
        }
        async _getBrokersPlans() {
          let e = [];
          try {
            if (((e = await this._brokersPlansPromise), !Array.isArray(e)))
              throw new Error("Request result is not valid");
          } catch (e) {
            rs.logError(
              `Failed to fetch broker list by user region: ${e.message}`
            );
          }
          return e;
        }
        async _showRestoreConfirmations() {
          const e = await (0, he.showSimpleConfirmDialog)({
            title: r.t(null, void 0, i(18240)),
            text: r.t(null, void 0, i(492299)),
            mainButtonIntent: "primary",
          });
          null !== this._activeBroker &&
            e &&
            (new Pi.DisabledConfirmations().clear(),
            this._activeBroker?.resetConfirmations());
        }
        _logOut(e, t, i) {
          const r = (0, s.ensureNotNull)(this._activeBroker);
          r.connectionStatusUpdate.unsubscribe(this, this._connectionListener),
            r.currentAccountUpdate.unsubscribe(
              this,
              this._onCurrentAccountUpdate
            ),
            this._realtimeProvider.onStatusChanged.unsubscribe(
              null,
              this._setPipValueType
            ),
            this._realtimeProvider.onStatusChanged.unsubscribe(
              null,
              this._trackNonTradableSymbol
            ),
            null !== this._userActivityStatus &&
              this._unsubscribeUserActivityStatus(),
            r.disconnect(t || !e),
            r.destroy(),
            (this._activeBroker = null),
            this._updateConnectionStatus(3, e, i);
        }
        async _createTradedItemsChartCollectionFacade(e) {
          return new (
            await Promise.all([
              i.e(4829),
              i.e(2197),
              i.e(6161),
              i.e(2650),
            ]).then(i.bind(i, 913793))
          ).TradedItemsChartCollectionFacade(e);
        }
        _tradeNowInit() {
          const e = new URL(decodeURIComponent(window.location.href)),
            t = e.searchParams.get("trade-now");
          e.searchParams.delete("trade-now"),
            window.history.replaceState(null, document.title, e.toString()),
            null === t ||
              isMobileTradingAvailable() ||
              ((this._tradeNowBrokerId = t), fi.clear());
        }
        async _getPriceByCrossHair() {
          const e = this._chartWidgetCollection?.activeChartWidget.value();
          if (!0 !== e?.isHovered().value()) return null;
          const t = e.model().model().crosshairSource().price;
          if ((0, u.isNaN)(t)) return null;
          const i = await this._realtimeProvider.symbolInfo(
              this._linking.value().symbol
            ),
            s = i.variableMinTick
              ? (0, M.makeVariableMinTickData)(i.minTick, i.variableMinTick)
              : void 0,
            r = (0, M.getMinTick)({
              minTick: i.minTick,
              price: t,
              variableMinTickData: s,
            });
          return (0, T.alignToMinTick)(t, r);
        }
        _unsubscribeUserActivityStatus() {
          this._userActivityStatus?.unsubscribe(
            this._onUserActivityStatusChange
          ),
            (this._userActivityStatus = null);
        }
        _getForceLogoutUserByInactivityTimerInfo() {
          return this._activeBroker?.metainfo()
            .forceLogoutUserByInactivityTimerInfo;
        }
      }
    },
    499665: (e, t, i) => {
      "use strict";
      i.d(t, { checkQtyError: () => l });
      var s = i(609838),
        r = i(960521),
        o = i.n(r);
      const n = {
          min: s.t(null, void 0, i(96248)),
          max: s.t(null, void 0, i(59195)),
          step: s.t(null, void 0, i(3094)),
        },
        a = s.t(null, void 0, i(784830));
      function l(e, t, i = !1) {
        if (null === t) return { res: !0, msg: a };
        const s = e.step,
          r = e.min,
          l = e.max;
        if (t < r) return { res: !0, msg: n.min.format({ min: r.toString() }) };
        if (t > l) return { res: !0, msg: n.max.format({ max: l.toString() }) };
        const d = new (o())(t).minus(r).mod(s);
        return i && !d.eq(0)
          ? { res: !0, msg: n.step.format({ step: s.toString() }) }
          : { res: !1 };
      }
    },
    797358: (e, t, i) => {
      "use strict";
      i.d(t, { validateBalance: () => a });
      var s = i(609838);
      const r = s.t(null, void 0, i(880452));
      function o(e, t) {
        return s.t(
          null,
          { replace: { amount: String(e), currency: t } },
          i(544668)
        );
      }
      function n(e, t, i) {
        return null === e || null === t || e <= t
          ? { res: !1 }
          : { res: !0, msg: 0 !== t && void 0 !== i ? `${r} ${o(t, i)}` : r };
      }
      function a(e) {
        const {
          side: t,
          baseValue: i,
          baseBalanceValue: s,
          baseCurrency: r,
          quoteValue: o,
          quoteBalanceValue: a,
          quoteCurrency: l,
        } = e;
        return -1 === t ? n(i, s, r) : n(o, a, l);
      }
    },
    464051: (e, t, i) => {
      "use strict";
      i.d(t, {
        checkBracketError: () => b,
        makeBracketPercentPriceRuleChecker: () => _,
      });
      var s = i(609838),
        r = i(960521),
        o = i.n(r),
        n = i(599016),
        a = i(391431),
        l = i(525915),
        d = i(467025);
      const u = {
          orderStopLoss: {
            long: s.t(null, void 0, i(91189)),
            short: s.t(null, void 0, i(753689)),
          },
          orderTakeProfit: {
            long: s.t(null, void 0, i(327163)),
            short: s.t(null, void 0, i(482810)),
          },
          positionStopLoss: {
            long: (e) => s.t(null, { replace: { value: e } }, i(833928)),
            short: (e) => s.t(null, { replace: { value: e } }, i(547602)),
          },
          positionTakeProfit: {
            long: (e) => s.t(null, { replace: { value: e } }, i(345417)),
            short: (e) => s.t(null, { replace: { value: e } }, i(442403)),
          },
        },
        c = 1e13,
        h = -c,
        p = {
          greaterThanMax: s.t(null, { replace: { max: String(c) } }, i(625289)),
          lessThanMin: s.t(null, { replace: { min: String(h) } }, i(443797)),
        };
      function _({ minPercent: e, maxPercent: t, isExpandedBoundary: r }) {
        let a, d;
        const u = (e, t, i, s) => {
          const r = new (o())(t),
            n = r.mul(e).div(100);
          return r.minus(n.mul(i).mul(s)).toNumber();
        };
        return (o) => {
          const {
              bracketPrice: c,
              originalBracketPrice: h,
              parentPrice: p,
              side: _,
              bracketType: g,
              priceType: b,
              priceStep: y,
            } = o,
            m = -1 === _ ? -1 : 1,
            v = g === n.BracketType.TakeProfit ? -1 : 1,
            f = u(e, p, m, v),
            P = u(t, p, m, v),
            k = (0, l.roundToStepByPriceTypeAndSide)(f, y, b, _),
            S = (0, l.roundToStepByPriceTypeAndSide)(P, y, b, _),
            C = void 0 !== h ? h : c;
          (a ??= r ? C : 1 / 0), (d ??= r ? C : -1 / 0);
          const w = Math.min(k, S, a),
            T = Math.max(k, S, d);
          if (!(c >= w && c <= T))
            return {
              res: !0,
              msg: s
                .t(null, void 0, i(514236))
                .replace("{min}", w.toString())
                .replace("{max}", T.toString()),
            };
          return (m * v == -1 ? k >= p && S >= p : k <= p && S <= p)
            ? { res: !1 }
            : { res: !0, msg: s.t(null, void 0, i(798702)) };
        };
      }
      function g(e) {
        const {
          side: t,
          price: i,
          originalBracketPrice: s,
          priceType: r,
          priceStep: o,
          parentPrice: n,
          bracketType: a,
          isStatusEditing: l,
          isEnabled: d,
          bracketPercentPriceRuleCheckers: u,
        } = e;
        for (const e of u) {
          const u = e({
            bracketPrice: i,
            originalBracketPrice: s,
            parentPrice: n,
            side: t,
            bracketType: a,
            priceType: r,
            priceStep: o,
            isStatusEditing: l,
            isEnabled: d,
          });
          if (u.res) return u;
        }
        return { res: !1 };
      }
      function b(e) {
        const {
          quotes: t,
          side: r,
          price: o,
          originalBracketPrice: l,
          pips: _,
          priceType: b,
          priceStep: y,
          parentPrice: m,
          parentType: v,
          bracketType: f,
          isStatusEditing: P,
          isEnabled: k,
          bracketPercentPriceRuleCheckers: S,
          priceFormatter: C,
          isRoundToPriceStep: w,
        } = e;
        if (null === o || null === _)
          return { res: !0, msg: s.t(null, void 0, i(405196)) };
        let T = { res: !1 };
        return (
          (T =
            2 === v
              ? (function (e) {
                  const {
                    quotes: t,
                    side: r,
                    price: o,
                    originalBracketPrice: l,
                    priceType: d,
                    priceStep: c,
                    parentPrice: h,
                    bracketType: p,
                    isStatusEditing: _,
                    isEnabled: b,
                    bracketPercentPriceRuleCheckers: y,
                  } = e;
                  let m = { res: !1 };
                  y.length > 0 &&
                    (m = g({
                      side: r,
                      price: o,
                      originalBracketPrice: l,
                      priceType: d,
                      priceStep: c,
                      parentPrice: h,
                      bracketType: p,
                      isStatusEditing: _,
                      isEnabled: b,
                      bracketPercentPriceRuleCheckers: y,
                    }));
                  const v = (p === n.BracketType.TakeProfit ? -1 : 1) * r,
                    f = -1 === r ? (0, a.getAsk)(t) : (0, a.getBid)(t);
                  if (f && Math.sign(o - f) === v) {
                    const e =
                        p === n.BracketType.TakeProfit
                          ? u.positionTakeProfit
                          : u.positionStopLoss,
                      t =
                        -1 === r
                          ? s.t(null, void 0, i(115822))
                          : s.t(null, void 0, i(473220));
                    m = { res: !0, msg: -1 === r ? e.short(t) : e.long(t) };
                  }
                  return m;
                })({
                  quotes: t,
                  side: r,
                  price: o,
                  originalBracketPrice: l,
                  priceType: b,
                  priceStep: y,
                  parentPrice: m,
                  bracketType: f,
                  isStatusEditing: P,
                  isEnabled: k,
                  bracketPercentPriceRuleCheckers: S,
                })
              : (function (e) {
                  const {
                    side: t,
                    pips: r,
                    price: o,
                    originalBracketPrice: a,
                    priceType: l,
                    priceStep: _,
                    parentPrice: b,
                    bracketType: y,
                    isStatusEditing: m,
                    isEnabled: v,
                    bracketPercentPriceRuleCheckers: f,
                  } = e;
                  let P = { res: !1 };
                  f.length > 0 &&
                    (P = g({
                      side: t,
                      price: o,
                      originalBracketPrice: a,
                      priceType: l,
                      priceStep: _,
                      parentPrice: b,
                      bracketType: y,
                      isStatusEditing: m,
                      isEnabled: v,
                      bracketPercentPriceRuleCheckers: f,
                    }));
                  const k = (0, d.checkValueBoundaries)({
                    value: o,
                    min: h,
                    max: c,
                    boundariesErrorMessages: p,
                  });
                  if (!k.isPassed)
                    return {
                      res: !0,
                      msg: k.msg ?? s.t(null, void 0, i(160523)),
                    };
                  if (r <= 0) {
                    const e =
                      y === n.BracketType.TakeProfit
                        ? u.orderTakeProfit
                        : u.orderStopLoss;
                    P = { res: !0, msg: 1 === t ? e.long : e.short };
                  }
                  return P;
                })({
                  side: r,
                  pips: _,
                  price: o,
                  originalBracketPrice: l,
                  priceType: b,
                  priceStep: y,
                  parentPrice: m,
                  bracketType: f,
                  isStatusEditing: P,
                  isEnabled: k,
                  bracketPercentPriceRuleCheckers: S,
                })),
          !T.res &&
            w &&
            (T = (function (e, t, r) {
              return (0, a.isMintickMultiple)(e, t)
                ? { res: !1 }
                : {
                    res: !0,
                    msg: s
                      .t(null, void 0, i(173069))
                      .format({ minTick: r.format(t) }),
                  };
            })(o, y, C)),
          T
        );
      }
    },
    477071: (e, t, i) => {
      "use strict";
      i.d(t, {
        makeStopLimitPercentPriceRuleChecker: () => c,
        validatePrice: () => h,
      });
      var s = i(609838),
        r = i(960521),
        o = i.n(r),
        n = i(391431),
        a = i(525915);
      const l = s.t(null, void 0, i(10833));
      function d(e, t) {
        return o()(e).minus(t).abs().gt(o()(e).div(2));
      }
      function u(e, t, i, s) {
        const r = new (o())(t),
          n = r.mul(e).div(100);
        return r.minus(n.mul(i).mul(s)).toNumber();
      }
      function c(e, t) {
        return (r) => {
          const {
              orderPrice: o,
              originalOrderPrice: n,
              currentPrice: l,
              side: d,
              orderType: c,
              priceStep: h,
              priceType: p,
              isStatusEditing: _,
            } = r,
            g = -1 === d ? 1 : -1,
            b = 3 === c ? 1 : -1,
            y = u(e, l, g, b),
            m = u(t, l, g, b),
            v = (0, a.roundToStepByPriceTypeAndSide)(y, h, p, d),
            f = (0, a.roundToStepByPriceTypeAndSide)(m, h, p, d);
          let P = Math.min(v, f),
            k = Math.max(v, f);
          _ && void 0 !== n && ((P = Math.min(P, n)), (k = Math.max(k, n)));
          return o >= P && o <= k
            ? { res: !1 }
            : {
                res: !0,
                severity: "error",
                msg: s
                  .t(null, void 0, i(775364))
                  .replace("{min}", P.toString())
                  .replace("{max}", k.toString()),
              };
        };
      }
      function h(e) {
        const {
          price: t,
          originalOrderPrice: r,
          askOrBid: a,
          orderType: u,
          side: c,
          priceType: h,
          isForex: p,
          formatter: _,
          isStatusEditing: g,
          stopLimitPercentPriceRuleCheckers: b,
          supportStopOrdersInBothDirections: y,
          supportStopLimitOrdersInBothDirections: m,
          supportStrictCheckingLimitOrderPrice: v,
          step: f,
          roundedToStep: P,
        } = e;
        for (const e of b) {
          const i = e({
            orderPrice: t,
            originalOrderPrice: r,
            currentPrice: a,
            side: c,
            orderType: u,
            priceStep: f,
            priceType: h,
            isStatusEditing: g,
          });
          if (i.res) return i;
        }
        if ((!p || P) && !1 === (0, n.isMintickMultiple)(t, f))
          return {
            res: !0,
            severity: "error",
            msg: s.t(null, void 0, i(806280)).format({ minTick: _.format(f) }),
          };
        const k =
          t < 0 ||
          o()(a).mul(100).lt(t) ||
          (function (e) {
            const {
              price: t,
              askOrBid: i,
              orderType: s,
              side: r,
              isStopPrice: o,
              supportStopOrdersInBothDirections: n,
              supportStopLimitOrdersInBothDirections: a,
              supportStrictCheckingLimitOrderPrice: l,
            } = e;
            return 1 === s
              ? 1 === r
                ? t > i && (d(i, t) || l)
                : t < i && (d(i, t) || l)
              : !!((3 === s && !n) || (4 === s && o && !a)) &&
                  (1 === r ? t < i : t > i);
          })({
            price: t,
            askOrBid: a,
            orderType: u,
            side: c,
            isStopPrice: 2 === h,
            supportStopOrdersInBothDirections: y,
            supportStopLimitOrdersInBothDirections: m,
            supportStrictCheckingLimitOrderPrice: v,
          });
        return k ? { res: !0, severity: "error", msg: l } : { res: !1 };
      }
    },
    806188: (e, t, i) => {
      "use strict";
      i.d(t, {
        extractGuaranteedStopValidationRules: () => b,
        extractLimitValidationRules: () => g,
        extractStopLossValidationRules: () => p,
        extractStopValidationRules: () => _,
        extractTakeProfitValidationRules: () => h,
        isLimitPercentValidationRule: () => d,
        isStopLimitPercentValidationRule: () => l,
        isStopPercentValidationRule: () => u,
      });
      const s = ["tpPercent"],
        r = ["slPercent"],
        o = ["stopPercent"],
        n = ["limitPercent"],
        a = ["gsPercent"];
      function l(e) {
        return d(e) || u(e);
      }
      function d(e) {
        return n.includes(e.id);
      }
      function u(e) {
        return o.includes(e.id);
      }
      async function c(e, t, i) {
        return (await e.getValidationRules(t))?.filter((e) => i.includes(e.id));
      }
      async function h(e, t) {
        return c(e, t, s);
      }
      async function p(e, t) {
        return c(e, t, r);
      }
      async function _(e, t) {
        return c(e, t, o);
      }
      async function g(e, t) {
        return c(e, t, n);
      }
      async function b(e, t) {
        return c(e, t, a);
      }
    },
    416637: (e, t, i) => {
      "use strict";
      i.d(t, { abbreviatedNumber: () => n });
      i(960521);
      var s = i(563223);
      const r = ["", "K", "M", "G", "T", "P"];
      function o(e) {
        return e < r.length ? r[e] : "e" + 3 * e;
      }
      function n(e) {
        if (e < 1) return s.NumericFormatter.formatNoE(e);
        let t = 0,
          i = +e;
        if (isFinite(i)) for (; i >= 1e3 && i % 100 == 0; ) t++, (i /= 1e3);
        return i + o(t);
      }
    },
    658098: (e, t, i) => {
      "use strict";
      i.d(t, { createPrimitivePropertyFromWatchedValue: () => r });
      var s = i(347542);
      function r(e) {
        const t = (0, s.createPrimitiveProperty)(e.value()),
          i = (e) => t.setValue(e);
        return (
          (t.destroy = () => {
            e.release(), e.unsubscribe(i);
          }),
          e.subscribe(i),
          t
        );
      }
    },
    17317: (e, t, i) => {
      "use strict";
      function s(e) {
        let t = Promise.resolve();
        return function (...i) {
          const s = t.then(() => e.apply(this, i));
          return (t = s.catch(() => {})), s;
        };
      }
      i.d(t, { sequentialize: () => s });
    },
    602948: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.92 7.83 9 12.29l5.08-4.46-1-1.13L9 10.29l-4.09-3.6-.99 1.14Z"/></svg>';
    },
    117105: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>';
    },
    315130: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>';
    },
    238822: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>';
    },
    663346: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>';
    },
    534983: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>';
    },
    512646: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>';
    },
    552828: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>';
    },
    643959: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.2" d="M17 21l-7.5-7.5L17 6"/></svg>';
    },
    513729: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M7 6l15 15m0-15L7 21"/></svg>';
    },
    73359: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 6h11v.5c0 1.115-.442 2.004-1.273 2.593-.7.498-1.637.755-2.727.814v2.267c2.867.677 5 3.252 5 6.326v.5h-6v4h-1v-4H8v-.5a6.502 6.502 0 0 1 5-6.326V9.907c-1.09-.059-2.027-.316-2.727-.814C9.443 8.503 9 7.615 9 6.5V6zm1.043 1c.102.56.383.976.809 1.278.57.405 1.452.642 2.648.642h.5V13.006l-.417.07A5.503 5.503 0 0 0 9.023 18h10.955a5.503 5.503 0 0 0-4.56-4.924l-.418-.07V8.92h.5c1.196 0 2.078-.237 2.648-.642A1.93 1.93 0 0 0 18.958 7h-8.915z"/></svg>';
    },
    350146: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.621 4.6l.354.354 7.07 7.071.354.354-.353.353c-.789.789-1.73 1.104-2.734.934-.847-.144-1.691-.624-2.504-1.353l-1.603 1.603a6.502 6.502 0 0 1-.937 8.008l-.354.354-.354-.354-3.889-3.889-2.828 2.829-.707-.707 2.828-2.829-3.889-3.889-.353-.353.353-.354a6.502 6.502 0 0 1 8.009-.937l1.603-1.604c-.73-.812-1.21-1.656-1.353-2.503-.17-1.005.145-1.945.934-2.734l.353-.354zm.03 1.445a1.93 1.93 0 0 0-.331 1.476c.117.689.573 1.48 1.418 2.326l.354.354-.354.353-2.236 2.237-.3.299-.344-.246a5.503 5.503 0 0 0-6.706.258l3.873 3.873 3.873 3.873a5.503 5.503 0 0 0 .257-6.706l-.245-.345.299-.3 2.236-2.236.354-.353.354.353c.845.846 1.637 1.302 2.326 1.419a1.93 1.93 0 0 0 1.476-.332l-6.303-6.303z"/></svg>';
    },
    29834: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>';
    },
    816105: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><path fill="#363A45" fill-rule="evenodd" clip-rule="evenodd" d="M62.1259 28.2153C61.4066 28.8157 61.0001 29.7273 61.0858 30.6604C61.6716 37.0347 59.7763 44.3291 55.3181 50.8221C46.9016 63.0797 32.5383 67.839 23.2366 61.4522C13.935 55.0654 13.2174 39.9512 21.6339 27.6935C26.4984 20.6088 33.3496 16.029 40.0619 14.6585C40.9752 14.472 41.731 13.8291 42.1024 12.9741C42.485 12.0934 42.9606 11.2346 43.5313 10.4123C47.906 4.1093 56.2129 2.33004 62.0853 6.4382C67.9578 10.5464 69.172 18.9863 64.7974 25.2892C64.0194 26.4103 63.1169 27.3882 62.1259 28.2153Z"/><rect width="47.2" height="34" fill="#1E222D" stroke="#B2B5BE" stroke-width="2" rx="3.8" x="12.4004" y="16"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="2" d="M3.59961 54H67.1996"/><path fill="#B2B5BE" fill-rule="evenodd" clip-rule="evenodd" d="M29.1178 31.1324L30.8107 32.8253L32.225 31.4111L30.5321 29.7182L32.225 28.0253L30.8107 26.6111L29.1178 28.304L27.425 26.6111L26.0107 28.0253L27.7036 29.7182L26.0107 31.4111L27.425 32.8253L29.1178 31.1324Z"/><path fill="#B2B5BE" fill-rule="evenodd" clip-rule="evenodd" d="M43.5182 31.1324L45.2111 32.8253L46.6253 31.4111L44.9325 29.7182L46.6253 28.0253L45.2111 26.6111L43.5182 28.304L41.8253 26.6111L40.4111 28.0253L42.104 29.7182L40.4111 31.4111L41.8253 32.8253L43.5182 31.1324Z"/><path stroke="#B2B5BE" stroke-width="2" d="M30.5996 38.7H40.7996"/></g></svg>';
    },
    627687: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72" fill="none"><g clip-path="url(#clip0)"><path fill="#F0F3FA" fill-rule="evenodd" clip-rule="evenodd" d="M62.1259 28.2153C61.4066 28.8157 61.0001 29.7273 61.0858 30.6604C61.6716 37.0347 59.7763 44.3291 55.3181 50.8221C46.9016 63.0797 32.5383 67.839 23.2366 61.4522C13.935 55.0654 13.2174 39.9512 21.6339 27.6935C26.4984 20.6088 33.3496 16.029 40.0619 14.6585C40.9752 14.472 41.731 13.8291 42.1024 12.9741C42.485 12.0934 42.9606 11.2346 43.5313 10.4123C47.906 4.1093 56.2129 2.33004 62.0853 6.4382C67.9578 10.5464 69.172 18.9863 64.7974 25.2892C64.0194 26.4103 63.1169 27.3882 62.1259 28.2153Z"/><rect width="47.2" height="34" fill="#fff" stroke="#1E222D" stroke-width="2" rx="3.8" x="12.4004" y="16"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M3.59961 54H67.1996"/><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M29.1178 31.1324L30.8107 32.8253L32.225 31.4111L30.5321 29.7182L32.225 28.0253L30.8107 26.6111L29.1178 28.304L27.425 26.6111L26.0107 28.0253L27.7036 29.7182L26.0107 31.4111L27.425 32.8253L29.1178 31.1324Z"/><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M43.5182 31.1324L45.2111 32.8253L46.6253 31.4111L44.9325 29.7182L46.6253 28.0253L45.2111 26.6111L43.5182 28.304L41.8253 26.6111L40.4111 28.0253L42.104 29.7182L40.4111 31.4111L41.8253 32.8253L43.5182 31.1324Z"/><path stroke="#000" stroke-width="2" d="M30.5996 38.7H40.7996"/></g></svg>';
    },
    829883: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16"><path fill="currentColor" fill-rule="evenodd" d="M7.5 2.5C7.5 1.67 8.17 1 9 1h2c.83 0 1.5.67 1.5 1.5v.15h-5V2.5zm6 0v.15H17a2.5 2.5 0 0 1 2.5 2.5v8.35A2.5 2.5 0 0 1 17 16H3a2.5 2.5 0 0 1-2.5-2.5V5.15A2.5 2.5 0 0 1 3 2.65h3.5V2.5A2.5 2.5 0 0 1 9 0h2a2.5 2.5 0 0 1 2.5 2.5zm-12 2.65c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v8.35c0 .83-.67 1.5-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V5.15zM9.25 6.5a1.75 1.75 0 1 0 0 3.5h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75h-1c0 .97.78 1.75 1.75 1.75h.25v1h1v-1h.25a1.75 1.75 0 1 0 0-3.5h-1.5a.75.75 0 0 1 0-1.5h1.5c.41 0 .75.34.75.75h1c0-.97-.78-1.75-1.75-1.75h-.25v-1h-1v1h-.25z"/></svg>';
    },
  },
]);
