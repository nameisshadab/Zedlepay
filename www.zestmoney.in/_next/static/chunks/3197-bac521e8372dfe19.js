(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3197], {
        7719: function() {},
        6545: function(e, t, n) {
            "use strict";
            n.d(t, {
                CB: function() {
                    return Y
                },
                Mt: function() {
                    return X
                },
                Ol: function() {
                    return J
                },
                Qd: function() {
                    return Z
                },
                UQ: function() {
                    return j
                },
                on: function() {
                    return z
                }
            });
            var r = n(7294);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t && a(e.prototype, t), n && a(e, n), e
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        u(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }

            function p(e) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, p(e)
            }

            function f(e, t) {
                return f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, f(e, t)
            }

            function m(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? b(e) : t
            }

            function g(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || y(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || y(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                if (e) {
                    if ("string" === typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
                }
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var w = function e(t) {
                    var n = this,
                        r = t.expanded,
                        a = void 0 === r ? [] : r,
                        i = t.allowMultipleExpanded,
                        l = void 0 !== i && i,
                        c = t.allowZeroExpanded,
                        s = void 0 !== c && c;
                    o(this, e), u(this, "expanded", void 0), u(this, "allowMultipleExpanded", void 0), u(this, "allowZeroExpanded", void 0), u(this, "toggleExpanded", (function(e) {
                        return n.isItemDisabled(e) ? n : n.isItemExpanded(e) ? n.augment({
                            expanded: n.expanded.filter((function(t) {
                                return t !== e
                            }))
                        }) : n.augment({
                            expanded: n.allowMultipleExpanded ? [].concat(E(n.expanded), [e]) : [e]
                        })
                    })), u(this, "isItemDisabled", (function(e) {
                        var t = n.isItemExpanded(e),
                            r = 1 === n.expanded.length;
                        return Boolean(t && !n.allowZeroExpanded && r)
                    })), u(this, "isItemExpanded", (function(e) {
                        return -1 !== n.expanded.indexOf(e)
                    })), u(this, "getPanelAttributes", (function(e, t) {
                        var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e);
                        return {
                            role: n.allowMultipleExpanded ? void 0 : "region",
                            "aria-hidden": n.allowMultipleExpanded ? !r : void 0,
                            "aria-labelledby": n.getButtonId(e),
                            id: n.getPanelId(e),
                            hidden: !r || void 0
                        }
                    })), u(this, "getHeadingAttributes", (function() {
                        return {
                            role: "heading"
                        }
                    })), u(this, "getButtonAttributes", (function(e, t) {
                        var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e),
                            o = n.isItemDisabled(e);
                        return {
                            id: n.getButtonId(e),
                            "aria-disabled": o,
                            "aria-expanded": r,
                            "aria-controls": n.getPanelId(e),
                            role: "button",
                            tabIndex: 0
                        }
                    })), u(this, "getPanelId", (function(e) {
                        return "accordion__panel-".concat(e)
                    })), u(this, "getButtonId", (function(e) {
                        return "accordion__heading-".concat(e)
                    })), u(this, "augment", (function(t) {
                        return new e(d({
                            expanded: n.expanded,
                            allowMultipleExpanded: n.allowMultipleExpanded,
                            allowZeroExpanded: n.allowZeroExpanded
                        }, t))
                    })), this.expanded = a, this.allowMultipleExpanded = l, this.allowZeroExpanded = s
                },
                A = (0, r.createContext)(null),
                I = function(e) {
                    s(n, e);
                    var t = g(n);

                    function n() {
                        var e;
                        o(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return u(b(e = t.call.apply(t, [this].concat(a))), "state", new w({
                            expanded: e.props.preExpanded,
                            allowMultipleExpanded: e.props.allowMultipleExpanded,
                            allowZeroExpanded: e.props.allowZeroExpanded
                        })), u(b(e), "toggleExpanded", (function(t) {
                            e.setState((function(e) {
                                return e.toggleExpanded(t)
                            }), (function() {
                                e.props.onChange && e.props.onChange(e.state.expanded)
                            }))
                        })), u(b(e), "isItemDisabled", (function(t) {
                            return e.state.isItemDisabled(t)
                        })), u(b(e), "isItemExpanded", (function(t) {
                            return e.state.isItemExpanded(t)
                        })), u(b(e), "getPanelAttributes", (function(t, n) {
                            return e.state.getPanelAttributes(t, n)
                        })), u(b(e), "getHeadingAttributes", (function() {
                            return e.state.getHeadingAttributes()
                        })), u(b(e), "getButtonAttributes", (function(t, n) {
                            return e.state.getButtonAttributes(t, n)
                        })), e
                    }
                    return i(n, [{
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.allowZeroExpanded,
                                n = e.allowMultipleExpanded;
                            return (0, r.createElement)(A.Provider, {
                                value: {
                                    allowMultipleExpanded: n,
                                    allowZeroExpanded: t,
                                    toggleExpanded: this.toggleExpanded,
                                    isItemDisabled: this.isItemDisabled,
                                    isItemExpanded: this.isItemExpanded,
                                    getPanelAttributes: this.getPanelAttributes,
                                    getHeadingAttributes: this.getHeadingAttributes,
                                    getButtonAttributes: this.getButtonAttributes
                                }
                            }, this.props.children || null)
                        }
                    }]), n
                }(r.PureComponent);
            u(I, "defaultProps", {
                allowMultipleExpanded: !1,
                allowZeroExpanded: !1
            });
            var O, P = function(e) {
                    s(n, e);
                    var t = g(n);

                    function n() {
                        var e;
                        o(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return u(b(e = t.call.apply(t, [this].concat(a))), "renderChildren", (function(t) {
                            return t ? e.props.children(t) : null
                        })), e
                    }
                    return i(n, [{
                        key: "render",
                        value: function() {
                            return (0, r.createElement)(A.Consumer, null, this.renderChildren)
                        }
                    }]), n
                }(r.PureComponent),
                j = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "accordion" : t,
                        o = e.allowMultipleExpanded,
                        a = e.allowZeroExpanded,
                        i = e.onChange,
                        u = e.preExpanded,
                        c = m(e, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);
                    return (0, r.createElement)(I, {
                        preExpanded: u,
                        allowMultipleExpanded: o,
                        allowZeroExpanded: a,
                        onChange: i
                    }, (0, r.createElement)("div", l({
                        "data-accordion-component": "Accordion",
                        className: n
                    }, c)))
                };
            ! function(e) {
                e.Accordion = "Accordion", e.AccordionItem = "AccordionItem", e.AccordionItemButton = "AccordionItemButton", e.AccordionItemHeading = "AccordionItemHeading", e.AccordionItemPanel = "AccordionItemPanel"
            }(O || (O = {}));
            var C = O,
                D = 0;
            var S = /[\u0009\u000a\u000c\u000d\u0020]/g;

            function _(e) {
                return "" !== e && !S.test(e) || (console.error('uuid must be a valid HTML5 id but was given "'.concat(e, '", ASCII whitespaces are forbidden')), !1)
            }
            var M = (0, r.createContext)(null),
                N = function(e) {
                    var t = e.children,
                        n = e.uuid,
                        o = e.accordionContext,
                        a = e.dangerouslySetExpanded,
                        i = function() {
                            o.toggleExpanded(n)
                        },
                        u = function(e) {
                            var o = null !== a && void 0 !== a ? a : e.isItemExpanded(n),
                                u = e.isItemDisabled(n),
                                l = e.getPanelAttributes(n, a),
                                c = e.getHeadingAttributes(n),
                                d = e.getButtonAttributes(n, a);
                            return (0, r.createElement)(M.Provider, {
                                value: {
                                    uuid: n,
                                    expanded: o,
                                    disabled: u,
                                    toggleExpanded: i,
                                    panelAttributes: l,
                                    headingAttributes: c,
                                    buttonAttributes: d
                                }
                            }, t)
                        };
                    return (0, r.createElement)(P, null, u)
                },
                k = function(e) {
                    return (0, r.createElement)(P, null, (function(t) {
                        return (0, r.createElement)(N, l({}, e, {
                            accordionContext: t
                        }))
                    }))
                },
                B = function(e) {
                    var t = e.children,
                        n = function(e) {
                            return e ? t(e) : null
                        };
                    return (0, r.createElement)(M.Consumer, null, n)
                },
                Z = function(e) {
                    var t = e.uuid,
                        n = e.dangerouslySetExpanded,
                        o = e.className,
                        a = void 0 === o ? "accordion__item" : o,
                        i = e.activeClassName,
                        u = m(e, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]),
                        c = h((0, r.useState)(function() {
                            var e = D;
                            return D += 1, "raa-".concat(e)
                        }()), 1)[0],
                        d = null !== t && void 0 !== t ? t : c,
                        s = function(e) {
                            var t = e.expanded && i ? i : a;
                            return (0, r.createElement)("div", l({
                                "data-accordion-component": "AccordionItem",
                                className: t
                            }, u))
                        };
                    return _(d.toString()), u.id && _(u.id), (0, r.createElement)(k, {
                        uuid: d,
                        dangerouslySetExpanded: n
                    }, (0, r.createElement)(B, null, s))
                };

            function H(e) {
                return e && (e.matches('[data-accordion-component="Accordion"]') ? e : H(e.parentElement))
            }

            function T(e) {
                var t = H(e);
                return t && Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))
            }
            Z.displayName = C.AccordionItem;
            var R = "End",
                L = "Enter",
                U = "Home",
                V = " ",
                F = "Spacebar",
                Q = "ArrowUp",
                q = "ArrowDown",
                K = "ArrowLeft",
                W = "ArrowRight",
                $ = function(e) {
                    var t = e.toggleExpanded,
                        n = e.className,
                        o = void 0 === n ? "accordion__button" : n,
                        a = m(e, ["toggleExpanded", "className"]);
                    return a.id && _(a.id), (0, r.createElement)("div", l({
                        className: o
                    }, a, {
                        role: "button",
                        tabIndex: 0,
                        onClick: t,
                        onKeyDown: function(e) {
                            var n = e.key;
                            if (n !== L && n !== V && n !== F || (e.preventDefault(), t()), e.target instanceof HTMLElement) switch (n) {
                                case U:
                                    e.preventDefault(),
                                        function(e) {
                                            var t = (T(e) || [])[0];
                                            t && t.focus()
                                        }(e.target);
                                    break;
                                case R:
                                    e.preventDefault(),
                                        function(e) {
                                            var t = T(e) || [],
                                                n = t[t.length - 1];
                                            n && n.focus()
                                        }(e.target);
                                    break;
                                case K:
                                case Q:
                                    e.preventDefault(),
                                        function(e) {
                                            var t = T(e) || [],
                                                n = t.indexOf(e);
                                            if (-1 !== n) {
                                                var r = t[n - 1];
                                                r && r.focus()
                                            }
                                        }(e.target);
                                    break;
                                case W:
                                case q:
                                    e.preventDefault(),
                                        function(e) {
                                            var t = T(e) || [],
                                                n = t.indexOf(e);
                                            if (-1 !== n) {
                                                var r = t[n + 1];
                                                r && r.focus()
                                            }
                                        }(e.target)
                            }
                        },
                        "data-accordion-component": "AccordionItemButton"
                    }))
                },
                z = function(e) {
                    return (0, r.createElement)(B, null, (function(t) {
                        var n = t.toggleExpanded,
                            o = t.buttonAttributes;
                        return (0, r.createElement)($, l({
                            toggleExpanded: n
                        }, e, o))
                    }))
                },
                G = function(e) {
                    s(n, e);
                    var t = g(n);

                    function n() {
                        var e;
                        o(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return u(b(e = t.call.apply(t, [this].concat(a))), "ref", void 0), u(b(e), "setRef", (function(t) {
                            e.ref = t
                        })), e
                    }
                    return i(n, [{
                        key: "componentDidUpdate",
                        value: function() {
                            n.VALIDATE(this.ref)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            n.VALIDATE(this.ref)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, r.createElement)("div", l({
                                "data-accordion-component": "AccordionItemHeading"
                            }, this.props, {
                                ref: this.setRef
                            }))
                        }
                    }], [{
                        key: "VALIDATE",
                        value: function(e) {
                            if (void 0 === e) throw new Error("ref is undefined");
                            if (1 !== e.childElementCount || !e.firstElementChild || "AccordionItemButton" !== e.firstElementChild.getAttribute("data-accordion-component")) throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")
                        }
                    }]), n
                }(r.PureComponent);
            u(G, "defaultProps", {
                className: "accordion__heading",
                "aria-level": 3
            });
            var J = function(e) {
                return (0, r.createElement)(B, null, (function(t) {
                    var n = t.headingAttributes;
                    return e.id && _(e.id), (0, r.createElement)(G, l({}, e, n))
                }))
            };
            J.displayName = C.AccordionItemHeading;
            var X = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "accordion__panel" : t,
                        o = e.region,
                        a = e.id,
                        i = m(e, ["className", "region", "id"]),
                        u = function(e) {
                            var t = e.panelAttributes;
                            a && _(a);
                            var u = d(d({}, t), {}, {
                                "aria-labelledby": o ? t["aria-labelledby"] : void 0
                            });
                            return (0, r.createElement)("div", l({
                                "data-accordion-component": "AccordionItemPanel",
                                className: n
                            }, i, u, {
                                role: o ? "region" : void 0
                            }))
                        };
                    return (0, r.createElement)(B, null, u)
                },
                Y = function(e) {
                    var t = e.children,
                        n = function(e) {
                            var n = e.expanded,
                                o = e.disabled;
                            return (0, r.createElement)(r.Fragment, null, t({
                                expanded: n,
                                disabled: o
                            }))
                        };
                    return (0, r.createElement)(B, null, n)
                }
        }
    }
]);