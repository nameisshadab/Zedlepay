(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1407], {
        5247: function(e, t, r) {
            "use strict";
            r.d(t, {
                S1: function() {
                    return a
                }
            });
            const n = {
                    _origin: "https://api.emailjs.com"
                },
                a = (e, t = "https://api.emailjs.com") => {
                    n._userID = e, n._origin = t
                }
        },
        2092: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(7294);

            function a() {
                return (0, n.useState)(null)
            }
        },
        8833: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(7294);

            function a(e) {
                var t = (0, n.useRef)(null);
                return (0, n.useEffect)((function() {
                    t.current = e
                })), t.current
            }
        },
        424: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        1132: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        930: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = Function.prototype.bind.call(Function.prototype.call, [].slice);

            function a(e, t) {
                return n(e.querySelectorAll(t))
            }
        },
        4019: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, r, n) {
                return !1
            };
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7942: function(e, t, r) {
            "use strict";
            var n = r(5696);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(2648).Z,
                o = r(7273).Z,
                i = a(r(7294)),
                s = r(4957),
                l = r(7995),
                u = r(647),
                c = r(1992),
                d = r(639),
                f = r(4019),
                p = r(227),
                m = {};

            function h(e, t, r, n) {
                if (e && s.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, r, n)).catch((function(e) {
                        0
                    }));
                    var a = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                    m[t + "%" + r + (a ? "%" + a : "")] = !0
                }
            }
            var y = i.default.forwardRef((function(e, t) {
                var r, a = e.href,
                    y = e.as,
                    v = e.children,
                    g = e.prefetch,
                    b = e.passHref,
                    w = e.replace,
                    E = e.shallow,
                    x = e.scroll,
                    k = e.locale,
                    _ = e.onClick,
                    C = e.onMouseEnter,
                    S = e.onTouchStart,
                    A = e.legacyBehavior,
                    F = void 0 === A ? !0 !== Boolean(!1) : A,
                    N = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                r = v, !F || "string" !== typeof r && "number" !== typeof r || (r = i.default.createElement("a", null, r));
                var O = !1 !== g,
                    V = i.default.useContext(u.RouterContext),
                    D = i.default.useContext(c.AppRouterContext);
                D && (V = D);
                var Z, T = i.default.useMemo((function() {
                        var e = s.resolveHref(V, a, !0),
                            t = n(e, 2),
                            r = t[0],
                            o = t[1];
                        return {
                            href: r,
                            as: y ? s.resolveHref(V, y) : o || r
                        }
                    }), [V, a, y]),
                    R = T.href,
                    M = T.as,
                    j = i.default.useRef(R),
                    L = i.default.useRef(M);
                F && (Z = i.default.Children.only(r));
                var P = F ? Z && "object" === typeof Z && Z.ref : t,
                    B = d.useIntersection({
                        rootMargin: "200px"
                    }),
                    I = n(B, 3),
                    H = I[0],
                    U = I[1],
                    q = I[2],
                    z = i.default.useCallback((function(e) {
                        L.current === M && j.current === R || (q(), L.current = M, j.current = R), H(e), P && ("function" === typeof P ? P(e) : "object" === typeof P && (P.current = e))
                    }), [M, P, R, q, H]);
                i.default.useEffect((function() {
                    var e = U && O && s.isLocalURL(R),
                        t = "undefined" !== typeof k ? k : V && V.locale,
                        r = m[R + "%" + M + (t ? "%" + t : "")];
                    e && !r && h(V, R, M, {
                        locale: t
                    })
                }), [M, R, U, k, O, V]);
                var K = {
                    ref: z,
                    onClick: function(e) {
                        F || "function" !== typeof _ || _(e), F && Z.props && "function" === typeof Z.props.onClick && Z.props.onClick(e), e.defaultPrevented || function(e, t, r, n, a, o, l, u, c, d) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var t = e.currentTarget.target;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && s.isLocalURL(r)) {
                                e.preventDefault();
                                var f = function() {
                                    "beforePopState" in t ? t[a ? "replace" : "push"](r, n, {
                                        shallow: o,
                                        locale: u,
                                        scroll: l
                                    }) : t[a ? "replace" : "push"](r, {
                                        forceOptimisticNavigation: !d
                                    })
                                };
                                c ? i.default.startTransition(f) : f()
                            }
                        }(e, V, R, M, w, E, x, k, Boolean(D), O)
                    },
                    onMouseEnter: function(e) {
                        F || "function" !== typeof C || C(e), F && Z.props && "function" === typeof Z.props.onMouseEnter && Z.props.onMouseEnter(e), !O && D || s.isLocalURL(R) && h(V, R, M, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        F || "function" !== typeof S || S(e), F && Z.props && "function" === typeof Z.props.onTouchStart && Z.props.onTouchStart(e), !O && D || s.isLocalURL(R) && h(V, R, M, {
                            priority: !0
                        })
                    }
                };
                if (!F || b || "a" === Z.type && !("href" in Z.props)) {
                    var W = "undefined" !== typeof k ? k : V && V.locale,
                        $ = V && V.isLocaleDomain && f.getDomainLocale(M, W, V.locales, V.domainLocales);
                    K.href = $ || p.addBasePath(l.addLocale(M, W, V && V.defaultLocale))
                }
                return F ? i.default.cloneElement(Z, K) : i.default.createElement("a", Object.assign({}, N, K), r)
            }));
            t.default = y, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        639: function(e, t, r) {
            "use strict";
            var n = r(5696);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    r = e.rootMargin,
                    u = e.disabled || !i,
                    c = a.useState(!1),
                    d = n(c, 2),
                    f = d[0],
                    p = d[1],
                    m = a.useState(null),
                    h = n(m, 2),
                    y = h[0],
                    v = h[1];
                a.useEffect((function() {
                    if (i) {
                        if (u || f) return;
                        if (y && y.tagName) {
                            var e = function(e, t, r) {
                                var n = function(e) {
                                        var t, r = {
                                                root: e.root || null,
                                                margin: e.rootMargin || ""
                                            },
                                            n = l.find((function(e) {
                                                return e.root === r.root && e.margin === r.margin
                                            }));
                                        if (n && (t = s.get(n))) return t;
                                        var a = new Map,
                                            o = new IntersectionObserver((function(e) {
                                                e.forEach((function(e) {
                                                    var t = a.get(e.target),
                                                        r = e.isIntersecting || e.intersectionRatio > 0;
                                                    t && r && t(r)
                                                }))
                                            }), e);
                                        return t = {
                                            id: r,
                                            observer: o,
                                            elements: a
                                        }, l.push(r), s.set(r, t), t
                                    }(r),
                                    a = n.id,
                                    o = n.observer,
                                    i = n.elements;
                                return i.set(e, t), o.observe(e),
                                    function() {
                                        if (i.delete(e), o.unobserve(e), 0 === i.size) {
                                            o.disconnect(), s.delete(a);
                                            var t = l.findIndex((function(e) {
                                                return e.root === a.root && e.margin === a.margin
                                            }));
                                            t > -1 && l.splice(t, 1)
                                        }
                                    }
                            }(y, (function(e) {
                                return e && p(e)
                            }), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: r
                            });
                            return e
                        }
                    } else if (!f) {
                        var n = o.requestIdleCallback((function() {
                            return p(!0)
                        }));
                        return function() {
                            return o.cancelIdleCallback(n)
                        }
                    }
                }), [y, u, r, t, f]);
                var g = a.useCallback((function() {
                    p(!1)
                }), []);
                return [v, f, g]
            };
            var a = r(7294),
                o = r(6286),
                i = "function" === typeof IntersectionObserver,
                s = new Map,
                l = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1992: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var n = (0, r(2648).Z)(r(7294)),
                a = n.default.createContext(null);
            t.AppRouterContext = a;
            var o = n.default.createContext(null);
            t.LayoutRouterContext = o;
            var i = n.default.createContext(null);
            t.GlobalLayoutRouterContext = i;
            var s = n.default.createContext(null);
            t.TemplateContext = s
        },
        1664: function(e, t, r) {
            e.exports = r(7942)
        },
        8313: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return Fe
                }
            });
            var n, a = r(3366),
                o = r(7462),
                i = r(4184),
                s = r.n(i),
                l = r(9351),
                u = r(3004),
                c = r(7216),
                d = r(99);

            function f(e) {
                if ((!n && 0 !== n || e) && u.Z) {
                    var t = document.createElement("div");
                    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), n = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return n
            }
            var p = r(2092),
                m = r(8146),
                h = r(6852),
                y = r(4305),
                v = r(7294);

            function g(e) {
                void 0 === e && (e = (0, c.Z)());
                try {
                    var t = e.activeElement;
                    return t && t.nodeName ? t : null
                } catch (r) {
                    return e.body
                }
            }
            var b = r(424),
                w = r(2950),
                E = r(5697),
                x = r.n(E),
                k = r(3935),
                _ = r(6454),
                C = r(8833),
                S = r(1132);

            function A(e, t) {
                e.classList ? e.classList.add(t) : (0, S.Z)(e, t) || ("string" === typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
            }

            function F(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }

            function N(e, t) {
                e.classList ? e.classList.remove(t) : "string" === typeof e.className ? e.className = F(e.className, t) : e.setAttribute("class", F(e.className && e.className.baseVal || "", t))
            }
            var O = r(1505);

            function V(e) {
                return "window" in e && e.window === e ? e : "nodeType" in (t = e) && t.nodeType === document.DOCUMENT_NODE && e.defaultView || !1;
                var t
            }

            function D(e) {
                var t;
                return V(e) || (t = e) && "body" === t.tagName.toLowerCase() ? function(e) {
                    var t = V(e) ? (0, c.Z)() : (0, c.Z)(e),
                        r = V(e) || t.defaultView;
                    return t.body.clientWidth < r.innerWidth
                }(e) : e.scrollHeight > e.clientHeight
            }
            var Z = ["template", "script", "style"],
                T = function(e, t, r) {
                    [].forEach.call(e.children, (function(e) {
                        -1 === t.indexOf(e) && function(e) {
                            var t = e.nodeType,
                                r = e.tagName;
                            return 1 === t && -1 === Z.indexOf(r.toLowerCase())
                        }(e) && r(e)
                    }))
                };

            function R(e, t) {
                t && (e ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden"))
            }
            var M, j = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.hideSiblingNodes,
                            n = void 0 === r || r,
                            a = t.handleContainerOverflow,
                            o = void 0 === a || a;
                        this.hideSiblingNodes = void 0, this.handleContainerOverflow = void 0, this.modals = void 0, this.containers = void 0, this.data = void 0, this.scrollbarSize = void 0, this.hideSiblingNodes = n, this.handleContainerOverflow = o, this.modals = [], this.containers = [], this.data = [], this.scrollbarSize = f()
                    }
                    var t = e.prototype;
                    return t.isContainerOverflowing = function(e) {
                        var t = this.data[this.containerIndexFromModal(e)];
                        return t && t.overflowing
                    }, t.containerIndexFromModal = function(e) {
                        return function(e, t) {
                            var r = -1;
                            return e.some((function(e, n) {
                                return !!t(e, n) && (r = n, !0)
                            })), r
                        }(this.data, (function(t) {
                            return -1 !== t.modals.indexOf(e)
                        }))
                    }, t.setContainerStyle = function(e, t) {
                        var r = {
                            overflow: "hidden"
                        };
                        e.style = {
                            overflow: t.style.overflow,
                            paddingRight: t.style.paddingRight
                        }, e.overflowing && (r.paddingRight = parseInt((0, O.Z)(t, "paddingRight") || "0", 10) + this.scrollbarSize + "px"), (0, O.Z)(t, r)
                    }, t.removeContainerStyle = function(e, t) {
                        Object.assign(t.style, e.style)
                    }, t.add = function(e, t, r) {
                        var n = this.modals.indexOf(e),
                            a = this.containers.indexOf(t);
                        if (-1 !== n) return n;
                        if (n = this.modals.length, this.modals.push(e), this.hideSiblingNodes && function(e, t) {
                                var r = t.dialog,
                                    n = t.backdrop;
                                T(e, [r, n], (function(e) {
                                    return R(!0, e)
                                }))
                            }(t, e), -1 !== a) return this.data[a].modals.push(e), n;
                        var o = {
                            modals: [e],
                            classes: r ? r.split(/\s+/) : [],
                            overflowing: D(t)
                        };
                        return this.handleContainerOverflow && this.setContainerStyle(o, t), o.classes.forEach(A.bind(null, t)), this.containers.push(t), this.data.push(o), n
                    }, t.remove = function(e) {
                        var t = this.modals.indexOf(e);
                        if (-1 !== t) {
                            var r = this.containerIndexFromModal(e),
                                n = this.data[r],
                                a = this.containers[r];
                            if (n.modals.splice(n.modals.indexOf(e), 1), this.modals.splice(t, 1), 0 === n.modals.length) n.classes.forEach(N.bind(null, a)), this.handleContainerOverflow && this.removeContainerStyle(n, a), this.hideSiblingNodes && function(e, t) {
                                var r = t.dialog,
                                    n = t.backdrop;
                                T(e, [r, n], (function(e) {
                                    return R(!1, e)
                                }))
                            }(a, e), this.containers.splice(r, 1), this.data.splice(r, 1);
                            else if (this.hideSiblingNodes) {
                                var o = n.modals[n.modals.length - 1],
                                    i = o.backdrop;
                                R(!1, o.dialog), R(!1, i)
                            }
                        }
                    }, t.isTopModal = function(e) {
                        return !!this.modals.length && this.modals[this.modals.length - 1] === e
                    }, e
                }(),
                L = j,
                P = function(e) {
                    var t;
                    return "undefined" === typeof document ? null : null == e ? (0, c.Z)().body : ("function" === typeof e && (e = e()), e && "current" in e && (e = e.current), null != (t = e) && t.nodeType && e || null)
                };

            function B(e) {
                var t = e || (M || (M = new L), M),
                    r = (0, v.useRef)({
                        dialog: null,
                        backdrop: null
                    });
                return Object.assign(r.current, {
                    add: function(e, n) {
                        return t.add(r.current, e, n)
                    },
                    remove: function() {
                        return t.remove(r.current)
                    },
                    isTopModal: function() {
                        return t.isTopModal(r.current)
                    },
                    setDialogRef: (0, v.useCallback)((function(e) {
                        r.current.dialog = e
                    }), []),
                    setBackdropRef: (0, v.useCallback)((function(e) {
                        r.current.backdrop = e
                    }), [])
                })
            }
            var I = (0, v.forwardRef)((function(e, t) {
                    var r = e.show,
                        n = void 0 !== r && r,
                        i = e.role,
                        s = void 0 === i ? "dialog" : i,
                        l = e.className,
                        c = e.style,
                        d = e.children,
                        f = e.backdrop,
                        p = void 0 === f || f,
                        y = e.keyboard,
                        E = void 0 === y || y,
                        x = e.onBackdropClick,
                        S = e.onEscapeKeyDown,
                        A = e.transition,
                        F = e.backdropTransition,
                        N = e.autoFocus,
                        O = void 0 === N || N,
                        V = e.enforceFocus,
                        D = void 0 === V || V,
                        Z = e.restoreFocus,
                        T = void 0 === Z || Z,
                        R = e.restoreFocusOptions,
                        M = e.renderDialog,
                        j = e.renderBackdrop,
                        L = void 0 === j ? function(e) {
                            return v.createElement("div", e)
                        } : j,
                        I = e.manager,
                        H = e.container,
                        U = e.containerClassName,
                        q = e.onShow,
                        z = e.onHide,
                        K = void 0 === z ? function() {} : z,
                        W = e.onExit,
                        $ = e.onExited,
                        G = e.onExiting,
                        Y = e.onEnter,
                        J = e.onEntering,
                        Q = e.onEntered,
                        X = (0, a.Z)(e, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]),
                        ee = function(e, t) {
                            var r = (0, v.useState)((function() {
                                    return P(e)
                                })),
                                n = r[0],
                                a = r[1];
                            if (!n) {
                                var o = P(e);
                                o && a(o)
                            }
                            return (0, v.useEffect)((function() {
                                t && n && t(n)
                            }), [t, n]), (0, v.useEffect)((function() {
                                var t = P(e);
                                t !== n && a(t)
                            }), [e, n]), n
                        }(H),
                        te = B(I),
                        re = (0, _.Z)(),
                        ne = (0, C.Z)(n),
                        ae = (0, v.useState)(!n),
                        oe = ae[0],
                        ie = ae[1],
                        se = (0, v.useRef)(null);
                    (0, v.useImperativeHandle)(t, (function() {
                        return te
                    }), [te]), u.Z && !ne && n && (se.current = g()), A || n || oe ? n && oe && ie(!1) : ie(!0);
                    var le = (0, m.Z)((function() {
                            if (te.add(ee, U), me.current = (0, w.Z)(document, "keydown", fe), pe.current = (0, w.Z)(document, "focus", (function() {
                                    return setTimeout(ce)
                                }), !0), q && q(), O) {
                                var e = g(document);
                                te.dialog && e && !(0, b.Z)(te.dialog, e) && (se.current = e, te.dialog.focus())
                            }
                        })),
                        ue = (0, m.Z)((function() {
                            var e;
                            (te.remove(), null == me.current || me.current(), null == pe.current || pe.current(), T) && (null == (e = se.current) || null == e.focus || e.focus(R), se.current = null)
                        }));
                    (0, v.useEffect)((function() {
                        n && ee && le()
                    }), [n, ee, le]), (0, v.useEffect)((function() {
                        oe && ue()
                    }), [oe, ue]), (0, h.Z)((function() {
                        ue()
                    }));
                    var ce = (0, m.Z)((function() {
                            if (D && re() && te.isTopModal()) {
                                var e = g();
                                te.dialog && e && !(0, b.Z)(te.dialog, e) && te.dialog.focus()
                            }
                        })),
                        de = (0, m.Z)((function(e) {
                            e.target === e.currentTarget && (null == x || x(e), !0 === p && K())
                        })),
                        fe = (0, m.Z)((function(e) {
                            E && 27 === e.keyCode && te.isTopModal() && (null == S || S(e), e.defaultPrevented || K())
                        })),
                        pe = (0, v.useRef)(),
                        me = (0, v.useRef)(),
                        he = A;
                    if (!ee || !(n || he && !oe)) return null;
                    var ye = (0, o.Z)({
                            role: s,
                            ref: te.setDialogRef,
                            "aria-modal": "dialog" === s || void 0
                        }, X, {
                            style: c,
                            className: l,
                            tabIndex: -1
                        }),
                        ve = M ? M(ye) : v.createElement("div", ye, v.cloneElement(d, {
                            role: "document"
                        }));
                    he && (ve = v.createElement(he, {
                        appear: !0,
                        unmountOnExit: !0,
                        in: !!n,
                        onExit: W,
                        onExiting: G,
                        onExited: function() {
                            ie(!0);
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            null == $ || $.apply(void 0, t)
                        },
                        onEnter: Y,
                        onEntering: J,
                        onEntered: Q
                    }, ve));
                    var ge = null;
                    if (p) {
                        var be = F;
                        ge = L({
                            ref: te.setBackdropRef,
                            onClick: de
                        }), be && (ge = v.createElement(be, {
                            appear: !0,
                            in: !!n
                        }, ge))
                    }
                    return v.createElement(v.Fragment, null, k.createPortal(v.createElement(v.Fragment, null, ge, ve), ee))
                })),
                H = {
                    show: x().bool,
                    container: x().any,
                    onShow: x().func,
                    onHide: x().func,
                    backdrop: x().oneOfType([x().bool, x().oneOf(["static"])]),
                    renderDialog: x().func,
                    renderBackdrop: x().func,
                    onEscapeKeyDown: x().func,
                    onBackdropClick: x().func,
                    containerClassName: x().string,
                    keyboard: x().bool,
                    transition: x().elementType,
                    backdropTransition: x().elementType,
                    autoFocus: x().bool,
                    enforceFocus: x().bool,
                    restoreFocus: x().bool,
                    restoreFocusOptions: x().shape({
                        preventScroll: x().bool
                    }),
                    onEnter: x().func,
                    onEntering: x().func,
                    onEntered: x().func,
                    onExit: x().func,
                    onExiting: x().func,
                    onExited: x().func,
                    manager: x().instanceOf(L)
                };
            I.displayName = "Modal", I.propTypes = H;
            var U, q = Object.assign(I, {
                    Manager: L
                }),
                z = (r(2473), r(5068)),
                K = r(930),
                W = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                $ = ".sticky-top",
                G = ".navbar-toggler",
                Y = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, z.Z)(t, e);
                    var r = t.prototype;
                    return r.adjustAndStore = function(e, t, r) {
                        var n, a = t.style[e];
                        t.dataset[e] = a, (0, O.Z)(t, ((n = {})[e] = parseFloat((0, O.Z)(t, e)) + r + "px", n))
                    }, r.restore = function(e, t) {
                        var r, n = t.dataset[e];
                        void 0 !== n && (delete t.dataset[e], (0, O.Z)(t, ((r = {})[e] = n, r)))
                    }, r.setContainerStyle = function(t, r) {
                        var n = this;
                        if (e.prototype.setContainerStyle.call(this, t, r), t.overflowing) {
                            var a = f();
                            (0, K.Z)(r, W).forEach((function(e) {
                                return n.adjustAndStore("paddingRight", e, a)
                            })), (0, K.Z)(r, $).forEach((function(e) {
                                return n.adjustAndStore("marginRight", e, -a)
                            })), (0, K.Z)(r, G).forEach((function(e) {
                                return n.adjustAndStore("marginRight", e, a)
                            }))
                        }
                    }, r.removeContainerStyle = function(t, r) {
                        var n = this;
                        e.prototype.removeContainerStyle.call(this, t, r), (0, K.Z)(r, W).forEach((function(e) {
                            return n.restore("paddingRight", e)
                        })), (0, K.Z)(r, $).forEach((function(e) {
                            return n.restore("marginRight", e)
                        })), (0, K.Z)(r, G).forEach((function(e) {
                            return n.restore("marginRight", e)
                        }))
                    }, t
                }(L),
                J = r(6273),
                Q = r(3825),
                X = r(4509),
                ee = ["className", "children"],
                te = ((U = {})[J.d0] = "show", U[J.cn] = "show", U),
                re = v.forwardRef((function(e, t) {
                    var r = e.className,
                        n = e.children,
                        i = (0, a.Z)(e, ee),
                        l = (0, v.useCallback)((function(e) {
                            (0, X.Z)(e), i.onEnter && i.onEnter(e)
                        }), [i]);
                    return v.createElement(J.ZP, (0, o.Z)({
                        ref: t,
                        addEndListener: Q.Z
                    }, i, {
                        onEnter: l
                    }), (function(e, t) {
                        return v.cloneElement(n, (0, o.Z)({}, t, {
                            className: s()("fade", r, n.props.className, te[e])
                        }))
                    }))
                }));
            re.defaultProps = { in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1
            }, re.displayName = "Fade";
            var ne = re,
                ae = r(6611),
                oe = (0, ae.Z)("modal-body"),
                ie = v.createContext({
                    onHide: function() {}
                }),
                se = r(6792),
                le = ["bsPrefix", "className", "contentClassName", "centered", "size", "children", "scrollable"],
                ue = v.forwardRef((function(e, t) {
                    var r = e.bsPrefix,
                        n = e.className,
                        i = e.contentClassName,
                        l = e.centered,
                        u = e.size,
                        c = e.children,
                        d = e.scrollable,
                        f = (0, a.Z)(e, le),
                        p = (r = (0, se.vE)(r, "modal")) + "-dialog";
                    return v.createElement("div", (0, o.Z)({}, f, {
                        ref: t,
                        className: s()(p, n, u && r + "-" + u, l && p + "-centered", d && p + "-scrollable")
                    }), v.createElement("div", {
                        className: s()(r + "-content", i)
                    }, c))
                }));
            ue.displayName = "ModalDialog";
            var ce = ue,
                de = (0, ae.Z)("modal-footer"),
                fe = ["label", "onClick", "className"],
                pe = {
                    label: x().string.isRequired,
                    onClick: x().func
                },
                me = v.forwardRef((function(e, t) {
                    var r = e.label,
                        n = e.onClick,
                        i = e.className,
                        l = (0, a.Z)(e, fe);
                    return v.createElement("button", (0, o.Z)({
                        ref: t,
                        type: "button",
                        className: s()("close", i),
                        onClick: n
                    }, l), v.createElement("span", {
                        "aria-hidden": "true"
                    }, "\xd7"), v.createElement("span", {
                        className: "sr-only"
                    }, r))
                }));
            me.displayName = "CloseButton", me.propTypes = pe, me.defaultProps = {
                label: "Close"
            };
            var he = me,
                ye = ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"],
                ve = v.forwardRef((function(e, t) {
                    var r = e.bsPrefix,
                        n = e.closeLabel,
                        i = e.closeButton,
                        l = e.onHide,
                        u = e.className,
                        c = e.children,
                        d = (0, a.Z)(e, ye);
                    r = (0, se.vE)(r, "modal-header");
                    var f = (0, v.useContext)(ie),
                        p = (0, m.Z)((function() {
                            f && f.onHide(), l && l()
                        }));
                    return v.createElement("div", (0, o.Z)({
                        ref: t
                    }, d, {
                        className: s()(u, r)
                    }), c, i && v.createElement(he, {
                        label: n,
                        onClick: p
                    }))
                }));
            ve.displayName = "ModalHeader", ve.defaultProps = {
                closeLabel: "Close",
                closeButton: !1
            };
            var ge, be, we = ve,
                Ee = (ge = "h4", v.forwardRef((function(e, t) {
                    return v.createElement("div", (0, o.Z)({}, e, {
                        ref: t,
                        className: s()(e.className, ge)
                    }))
                }))),
                xe = (0, ae.Z)("modal-title", {
                    Component: Ee
                }),
                ke = ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "aria-describedby", "aria-label", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"],
                _e = {
                    show: !1,
                    backdrop: !0,
                    keyboard: !0,
                    autoFocus: !0,
                    enforceFocus: !0,
                    restoreFocus: !0,
                    animation: !0,
                    dialogAs: ce
                };

            function Ce(e) {
                return v.createElement(ne, (0, o.Z)({}, e, {
                    timeout: null
                }))
            }

            function Se(e) {
                return v.createElement(ne, (0, o.Z)({}, e, {
                    timeout: null
                }))
            }
            var Ae = v.forwardRef((function(e, t) {
                var r = e.bsPrefix,
                    n = e.className,
                    i = e.style,
                    g = e.dialogClassName,
                    b = e.contentClassName,
                    w = e.children,
                    E = e.dialogAs,
                    x = e["aria-labelledby"],
                    k = e["aria-describedby"],
                    _ = e["aria-label"],
                    C = e.show,
                    S = e.animation,
                    A = e.backdrop,
                    F = e.keyboard,
                    N = e.onEscapeKeyDown,
                    O = e.onShow,
                    V = e.onHide,
                    D = e.container,
                    Z = e.autoFocus,
                    T = e.enforceFocus,
                    R = e.restoreFocus,
                    M = e.restoreFocusOptions,
                    j = e.onEntered,
                    L = e.onExit,
                    P = e.onExiting,
                    B = e.onEnter,
                    I = e.onEntering,
                    H = e.onExited,
                    U = e.backdropClassName,
                    z = e.manager,
                    K = (0, a.Z)(e, ke),
                    W = (0, v.useState)({}),
                    $ = W[0],
                    G = W[1],
                    J = (0, v.useState)(!1),
                    Q = J[0],
                    X = J[1],
                    ee = (0, v.useRef)(!1),
                    te = (0, v.useRef)(!1),
                    re = (0, v.useRef)(null),
                    ne = (0, p.Z)(),
                    ae = ne[0],
                    oe = ne[1],
                    le = (0, m.Z)(V);
                r = (0, se.vE)(r, "modal"), (0, v.useImperativeHandle)(t, (function() {
                    return {
                        get _modal() {
                            return ae
                        }
                    }
                }), [ae]);
                var ue = (0, v.useMemo)((function() {
                    return {
                        onHide: le
                    }
                }), [le]);

                function ce() {
                    return z || (be || (be = new Y), be)
                }

                function de(e) {
                    if (u.Z) {
                        var t = ce().isContainerOverflowing(ae),
                            r = e.scrollHeight > (0, c.Z)(e).documentElement.clientHeight;
                        G({
                            paddingRight: t && !r ? f() : void 0,
                            paddingLeft: !t && r ? f() : void 0
                        })
                    }
                }
                var fe = (0, m.Z)((function() {
                    ae && de(ae.dialog)
                }));
                (0, h.Z)((function() {
                    (0, d.Z)(window, "resize", fe), re.current && re.current()
                }));
                var pe = function() {
                        ee.current = !0
                    },
                    me = function(e) {
                        ee.current && ae && e.target === ae.dialog && (te.current = !0), ee.current = !1
                    },
                    he = function() {
                        X(!0), re.current = (0, y.Z)(ae.dialog, (function() {
                            X(!1)
                        }))
                    },
                    ye = function(e) {
                        "static" !== A ? te.current || e.target !== e.currentTarget ? te.current = !1 : null == V || V() : function(e) {
                            e.target === e.currentTarget && he()
                        }(e)
                    },
                    ve = (0, v.useCallback)((function(e) {
                        return v.createElement("div", (0, o.Z)({}, e, {
                            className: s()(r + "-backdrop", U, !S && "show")
                        }))
                    }), [S, U, r]),
                    ge = (0, o.Z)({}, i, $);
                S || (ge.display = "block");
                return v.createElement(ie.Provider, {
                    value: ue
                }, v.createElement(q, {
                    show: C,
                    ref: oe,
                    backdrop: A,
                    container: D,
                    keyboard: !0,
                    autoFocus: Z,
                    enforceFocus: T,
                    restoreFocus: R,
                    restoreFocusOptions: M,
                    onEscapeKeyDown: function(e) {
                        F || "static" !== A ? F && N && N(e) : (e.preventDefault(), he())
                    },
                    onShow: O,
                    onHide: V,
                    onEnter: function(e, t) {
                        e && (e.style.display = "block", de(e)), null == B || B(e, t)
                    },
                    onEntering: function(e, t) {
                        null == I || I(e, t), (0, l.ZP)(window, "resize", fe)
                    },
                    onEntered: j,
                    onExit: function(e) {
                        null == re.current || re.current(), null == L || L(e)
                    },
                    onExiting: P,
                    onExited: function(e) {
                        e && (e.style.display = ""), null == H || H(e), (0, d.Z)(window, "resize", fe)
                    },
                    manager: ce(),
                    containerClassName: r + "-open",
                    transition: S ? Ce : void 0,
                    backdropTransition: S ? Se : void 0,
                    renderBackdrop: ve,
                    renderDialog: function(e) {
                        return v.createElement("div", (0, o.Z)({
                            role: "dialog"
                        }, e, {
                            style: ge,
                            className: s()(n, r, Q && r + "-static"),
                            onClick: A ? ye : void 0,
                            onMouseUp: me,
                            "aria-label": _,
                            "aria-labelledby": x,
                            "aria-describedby": k
                        }), v.createElement(E, (0, o.Z)({}, K, {
                            onMouseDown: pe,
                            className: g,
                            contentClassName: b
                        }), w))
                    }
                }))
            }));
            Ae.displayName = "Modal", Ae.defaultProps = _e, Ae.Body = oe, Ae.Header = we, Ae.Title = xe, Ae.Footer = de, Ae.Dialog = ce, Ae.TRANSITION_DURATION = 300, Ae.BACKDROP_TRANSITION_DURATION = 150;
            var Fe = Ae
        },
        1554: function(e, t, r) {
            var n, a = r(7294),
                o = (n = a) && "object" == typeof n && "default" in n ? n.default : n,
                i = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                u = (function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            n[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                    } catch (e) {
                        return !1
                    }
                }() && Object.assign, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");

            function c() {}
            var d = function(e, t) {
                return function(e) {
                    e.exports = function() {
                        function e(e, t, r, n, a, o) {
                            if (o !== u) {
                                var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                throw i.name = "Invariant Violation", i
                            }
                        }

                        function t() {
                            return e
                        }
                        e.isRequired = e;
                        var r = {
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
                            instanceOf: t,
                            node: e,
                            objectOf: t,
                            oneOf: t,
                            oneOfType: t,
                            shape: t,
                            exact: t
                        };
                        return r.checkPropTypes = c, r.PropTypes = r, r
                    }()
                }(t = {
                    exports: {}
                }), t.exports
            }();

            function f(e, t) {
                return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e)) + e
            }
            var p = function(e) {
                function t() {
                    for (var t = this, r = [], n = arguments.length; n--;) r[n] = arguments[n];
                    e.apply(this, r), this.state = {
                        solution: f(111111, 999999),
                        input: ""
                    }, this.componentDidMount = function() {
                        t.drawCaptcha()
                    }, this.drawCaptcha = function() {
                        var e = t.state.solution,
                            r = t.canvas,
                            n = r.width,
                            a = r.height,
                            o = t.canvas.getContext("2d");
                        o.clearRect(0, 0, n, a), o.font = "40px serif", o.textAlign = "center", o.textBaseline = "middle", o.fillText(e, n / 2, a / 2 + 3), o.strokeStyle = "#000000", o.beginPath(), o.moveTo(f(5, 20), f(5, 20)), o.lineTo(n - f(5, 20), a - f(5, 20)), o.stroke(), o.moveTo(f(5, 20), a - f(5, 20)), o.lineTo(n - f(5, 20), f(5, 20)), o.stroke(), o.closePath()
                    }, this.refresh = function() {
                        t.setState({
                            solution: f(111111, 999999),
                            input: ""
                        }, t.drawCaptcha)
                    }, this.playAudio = function() {
                        var e = new SpeechSynthesisUtterance(t.state.solution.toString().split("").join(" "));
                        e.rate = .25, window.speechSynthesis.speak(e)
                    }, this.handleChange = function(e) {
                        var r = t.props.onChange,
                            n = t.state.solution;
                        t.setState({
                            input: e.target.value
                        }), r(e.target.value === n.toString())
                    }
                }
                return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.render = function() {
                    var e = this,
                        t = this.props.placeholder,
                        r = this.state.input;
                    return o.createElement("div", {
                        className: "rnc"
                    }, o.createElement("div", {
                        className: "rnc-row"
                    }, o.createElement("canvas", {
                        ref: function(t) {
                            return e.canvas = t
                        },
                        width: 200,
                        height: 50,
                        className: "rnc-canvas",
                        "data-testid": "captcha-canvas"
                    }), o.createElement("div", {
                        className: "rnc-column"
                    }, o.createElement("button", {
                        type: "button",
                        "aria-label": "get new captcha",
                        onClick: this.refresh,
                        className: "rnc-button",
                        "data-testid": "captcha-refresh"
                    }, o.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, o.createElement("g", {
                        "data-name": "Layer 2"
                    }, o.createElement("g", {
                        "data-name": "refresh"
                    }, o.createElement("rect", {
                        width: "24",
                        height: "24",
                        opacity: "0"
                    }), o.createElement("path", {
                        d: "M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"
                    }))))), o.createElement("button", {
                        type: "button",
                        "aria-label": "play audio",
                        onClick: this.playAudio,
                        className: "rnc-button",
                        "data-testid": "captcha-audio"
                    }, o.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }, o.createElement("g", {
                        "data-name": "Layer 2"
                    }, o.createElement("g", {
                        "data-name": "volume-up"
                    }, o.createElement("rect", {
                        width: "24",
                        height: "24",
                        opacity: "0"
                    }), o.createElement("path", {
                        d: "M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"
                    }), o.createElement("path", {
                        d: "M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"
                    }), o.createElement("path", {
                        d: "M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z"
                    }))))))), o.createElement("input", {
                        type: "number",
                        value: r,
                        onChange: this.handleChange,
                        placeholder: t,
                        className: "rnc-input",
                        "data-testid": "captcha-input"
                    }))
                }, t
            }(a.Component);
            p.defaultProps = {
                placeholder: "Insert captcha"
            }, p.propTypes = {
                onChange: d.func.isRequired,
                placeholder: d.string
            }, e.exports = p
        },
        2473: function(e) {
            "use strict";
            var t = function() {};
            e.exports = t
        },
        7536: function(e, t, r) {
            "use strict";
            r.d(t, {
                cI: function() {
                    return ke
                }
            });
            var n = r(7294),
                a = e => "checkbox" === e.type,
                o = e => e instanceof Date,
                i = e => null == e;
            const s = e => "object" === typeof e;
            var l = e => !i(e) && !Array.isArray(e) && s(e) && !o(e),
                u = e => l(e) && e.target ? a(e.target) ? e.target.checked : e.target.value : e,
                c = (e, t) => e.has((e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
                d = e => Array.isArray(e) ? e.filter(Boolean) : [],
                f = e => void 0 === e,
                p = (e, t, r) => {
                    if (!t || !l(e)) return r;
                    const n = d(t.split(/[,[\].]+?/)).reduce(((e, t) => i(e) ? e : e[t]), e);
                    return f(n) || n === e ? f(e[t]) ? r : e[t] : n
                };
            const m = "blur",
                h = "focusout",
                y = "onBlur",
                v = "onChange",
                g = "onSubmit",
                b = "onTouched",
                w = "all",
                E = "max",
                x = "min",
                k = "maxLength",
                _ = "minLength",
                C = "pattern",
                S = "required",
                A = "validate";
            n.createContext(null);
            var F = (e, t, r, n = !0) => {
                    const a = {
                        defaultValues: t._defaultValues
                    };
                    for (const o in e) Object.defineProperty(a, o, {
                        get: () => {
                            const a = o;
                            return t._proxyFormState[a] !== w && (t._proxyFormState[a] = !n || w), r && (r[a] = !0), e[a]
                        }
                    });
                    return a
                },
                N = e => l(e) && !Object.keys(e).length,
                O = (e, t, r) => {
                    const {
                        name: n,
                        ...a
                    } = e;
                    return N(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((e => t[e] === (!r || w)))
                },
                V = e => Array.isArray(e) ? e : [e];

            function D(e) {
                const t = n.useRef(e);
                t.current = e, n.useEffect((() => {
                    const r = !e.disabled && t.current.subject.subscribe({
                        next: t.current.callback
                    });
                    return () => {
                        r && r.unsubscribe()
                    }
                }), [e.disabled])
            }
            var Z = e => "string" === typeof e,
                T = (e, t, r, n) => {
                    const a = Array.isArray(e);
                    return Z(e) ? (n && t.watch.add(e), p(r, e)) : a ? e.map((e => (n && t.watch.add(e), p(r, e)))) : (n && (t.watchAll = !0), r)
                },
                R = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document;

            function M(e) {
                let t;
                const r = Array.isArray(e);
                if (e instanceof Date) t = new Date(e);
                else if (e instanceof Set) t = new Set(e);
                else {
                    if (R && (e instanceof Blob || e instanceof FileList) || !r && !l(e)) return e;
                    if (t = r ? [] : {}, Array.isArray(e) || (e => {
                            const t = e.constructor && e.constructor.prototype;
                            return l(t) && t.hasOwnProperty("isPrototypeOf")
                        })(e))
                        for (const r in e) t[r] = M(e[r]);
                    else t = e
                }
                return t
            }
            var j = (e, t, r, n, a) => t ? { ...r[e],
                    types: { ...r[e] && r[e].types ? r[e].types : {},
                        [n]: a || !0
                    }
                } : {},
                L = e => /^\w*$/.test(e),
                P = e => d(e.replace(/["|']|\]/g, "").split(/\.|\[/));

            function B(e, t, r) {
                let n = -1;
                const a = L(t) ? [t] : P(t),
                    o = a.length,
                    i = o - 1;
                for (; ++n < o;) {
                    const t = a[n];
                    let o = r;
                    if (n !== i) {
                        const r = e[t];
                        o = l(r) || Array.isArray(r) ? r : isNaN(+a[n + 1]) ? {} : []
                    }
                    e[t] = o, e = e[t]
                }
                return e
            }
            const I = (e, t, r) => {
                for (const n of r || Object.keys(e)) {
                    const r = p(e, n);
                    if (r) {
                        const {
                            _f: e,
                            ...n
                        } = r;
                        if (e && t(e.name)) {
                            if (e.ref.focus) {
                                e.ref.focus();
                                break
                            }
                            if (e.refs && e.refs[0].focus) {
                                e.refs[0].focus();
                                break
                            }
                        } else l(n) && I(n, t)
                    }
                }
            };
            var H = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))))),
                U = (e, t, r) => {
                    const n = d(p(e, r));
                    return B(n, "root", t[r]), B(e, r, n), e
                },
                q = e => "boolean" === typeof e,
                z = e => "file" === e.type,
                K = e => "function" === typeof e,
                W = e => Z(e) || n.isValidElement(e),
                $ = e => "radio" === e.type,
                G = e => e instanceof RegExp;
            const Y = {
                    value: !1,
                    isValid: !1
                },
                J = {
                    value: !0,
                    isValid: !0
                };
            var Q = e => {
                if (Array.isArray(e)) {
                    if (e.length > 1) {
                        const t = e.filter((e => e && e.checked && !e.disabled)).map((e => e.value));
                        return {
                            value: t,
                            isValid: !!t.length
                        }
                    }
                    return e[0].checked && !e[0].disabled ? e[0].attributes && !f(e[0].attributes.value) ? f(e[0].value) || "" === e[0].value ? J : {
                        value: e[0].value,
                        isValid: !0
                    } : J : Y
                }
                return Y
            };
            const X = {
                isValid: !1,
                value: null
            };
            var ee = e => Array.isArray(e) ? e.reduce(((e, t) => t && t.checked && !t.disabled ? {
                isValid: !0,
                value: t.value
            } : e), X) : X;

            function te(e, t, r = "validate") {
                if (W(e) || Array.isArray(e) && e.every(W) || q(e) && !e) return {
                    type: r,
                    message: W(e) ? e : "",
                    ref: t
                }
            }
            var re = e => l(e) && !G(e) ? e : {
                    value: e,
                    message: ""
                },
                ne = async (e, t, r, n, o) => {
                    const {
                        ref: s,
                        refs: u,
                        required: c,
                        maxLength: d,
                        minLength: f,
                        min: p,
                        max: m,
                        pattern: h,
                        validate: y,
                        name: v,
                        valueAsNumber: g,
                        mount: b,
                        disabled: w
                    } = e._f;
                    if (!b || w) return {};
                    const F = u ? u[0] : s,
                        O = e => {
                            n && F.reportValidity && (F.setCustomValidity(q(e) ? "" : e || ""), F.reportValidity())
                        },
                        V = {},
                        D = $(s),
                        T = a(s),
                        R = D || T,
                        M = (g || z(s)) && !s.value || "" === t || Array.isArray(t) && !t.length,
                        L = j.bind(null, v, r, V),
                        P = (e, t, r, n = k, a = _) => {
                            const o = e ? t : r;
                            V[v] = {
                                type: e ? n : a,
                                message: o,
                                ref: s,
                                ...L(e ? n : a, o)
                            }
                        };
                    if (o ? !Array.isArray(t) || !t.length : c && (!R && (M || i(t)) || q(t) && !t || T && !Q(u).isValid || D && !ee(u).isValid)) {
                        const {
                            value: e,
                            message: t
                        } = W(c) ? {
                            value: !!c,
                            message: c
                        } : re(c);
                        if (e && (V[v] = {
                                type: S,
                                message: t,
                                ref: F,
                                ...L(S, t)
                            }, !r)) return O(t), V
                    }
                    if (!M && (!i(p) || !i(m))) {
                        let e, n;
                        const a = re(m),
                            o = re(p);
                        if (i(t) || isNaN(t)) {
                            const r = s.valueAsDate || new Date(t),
                                i = e => new Date((new Date).toDateString() + " " + e),
                                l = "time" == s.type,
                                u = "week" == s.type;
                            Z(a.value) && t && (e = l ? i(t) > i(a.value) : u ? t > a.value : r > new Date(a.value)), Z(o.value) && t && (n = l ? i(t) < i(o.value) : u ? t < o.value : r < new Date(o.value))
                        } else {
                            const r = s.valueAsNumber || (t ? +t : t);
                            i(a.value) || (e = r > a.value), i(o.value) || (n = r < o.value)
                        }
                        if ((e || n) && (P(!!e, a.message, o.message, E, x), !r)) return O(V[v].message), V
                    }
                    if ((d || f) && !M && (Z(t) || o && Array.isArray(t))) {
                        const e = re(d),
                            n = re(f),
                            a = !i(e.value) && t.length > e.value,
                            o = !i(n.value) && t.length < n.value;
                        if ((a || o) && (P(a, e.message, n.message), !r)) return O(V[v].message), V
                    }
                    if (h && !M && Z(t)) {
                        const {
                            value: e,
                            message: n
                        } = re(h);
                        if (G(e) && !t.match(e) && (V[v] = {
                                type: C,
                                message: n,
                                ref: s,
                                ...L(C, n)
                            }, !r)) return O(n), V
                    }
                    if (y)
                        if (K(y)) {
                            const e = te(await y(t), F);
                            if (e && (V[v] = { ...e,
                                    ...L(A, e.message)
                                }, !r)) return O(e.message), V
                        } else if (l(y)) {
                        let e = {};
                        for (const n in y) {
                            if (!N(e) && !r) break;
                            const a = te(await y[n](t), F, n);
                            a && (e = { ...a,
                                ...L(n, a.message)
                            }, O(a.message), r && (V[v] = e))
                        }
                        if (!N(e) && (V[v] = {
                                ref: F,
                                ...e
                            }, !r)) return V
                    }
                    return O(!0), V
                };
            var ae = e => ({
                isOnSubmit: !e || e === g,
                isOnBlur: e === y,
                isOnChange: e === v,
                isOnAll: e === w,
                isOnTouch: e === b
            });

            function oe(e) {
                for (const t in e)
                    if (!f(e[t])) return !1;
                return !0
            }

            function ie(e, t) {
                const r = L(t) ? [t] : P(t),
                    n = 1 == r.length ? e : function(e, t) {
                        const r = t.slice(0, -1).length;
                        let n = 0;
                        for (; n < r;) e = f(e) ? n++ : e[t[n++]];
                        return e
                    }(e, r),
                    a = r[r.length - 1];
                let o;
                n && delete n[a];
                for (let i = 0; i < r.slice(0, -1).length; i++) {
                    let t, n = -1;
                    const a = r.slice(0, -(i + 1)),
                        s = a.length - 1;
                    for (i > 0 && (o = e); ++n < a.length;) {
                        const r = a[n];
                        t = t ? t[r] : e[r], s === n && (l(t) && N(t) || Array.isArray(t) && oe(t)) && (o ? delete o[r] : delete e[r]), o = t
                    }
                }
                return e
            }

            function se() {
                let e = [];
                return {
                    get observers() {
                        return e
                    },
                    next: t => {
                        for (const r of e) r.next(t)
                    },
                    subscribe: t => (e.push(t), {
                        unsubscribe: () => {
                            e = e.filter((e => e !== t))
                        }
                    }),
                    unsubscribe: () => {
                        e = []
                    }
                }
            }
            var le = e => i(e) || !s(e);

            function ue(e, t) {
                if (le(e) || le(t)) return e === t;
                if (o(e) && o(t)) return e.getTime() === t.getTime();
                const r = Object.keys(e),
                    n = Object.keys(t);
                if (r.length !== n.length) return !1;
                for (const a of r) {
                    const r = e[a];
                    if (!n.includes(a)) return !1;
                    if ("ref" !== a) {
                        const e = t[a];
                        if (o(r) && o(e) || l(r) && l(e) || Array.isArray(r) && Array.isArray(e) ? !ue(r, e) : r !== e) return !1
                    }
                }
                return !0
            }
            var ce = e => {
                    const t = e ? e.ownerDocument : 0;
                    return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
                },
                de = e => "select-multiple" === e.type,
                fe = e => ce(e) && e.isConnected,
                pe = e => {
                    for (const t in e)
                        if (K(e[t])) return !0;
                    return !1
                };

            function me(e, t = {}) {
                const r = Array.isArray(e);
                if (l(e) || r)
                    for (const n in e) Array.isArray(e[n]) || l(e[n]) && !pe(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, me(e[n], t[n])) : i(e[n]) || (t[n] = !0);
                return t
            }

            function he(e, t, r) {
                const n = Array.isArray(e);
                if (l(e) || n)
                    for (const a in e) Array.isArray(e[a]) || l(e[a]) && !pe(e[a]) ? f(t) || le(r[a]) ? r[a] = Array.isArray(e[a]) ? me(e[a], []) : { ...me(e[a])
                    } : he(e[a], i(t) ? {} : t[a], r[a]) : ue(e[a], t[a]) ? delete r[a] : r[a] = !0;
                return r
            }
            var ye = (e, t) => he(e, t, me(t)),
                ve = (e, {
                    valueAsNumber: t,
                    valueAsDate: r,
                    setValueAs: n
                }) => f(e) ? e : t ? "" === e ? NaN : e ? +e : e : r && Z(e) ? new Date(e) : n ? n(e) : e;

            function ge(e) {
                const t = e.ref;
                if (!(e.refs ? e.refs.every((e => e.disabled)) : t.disabled)) return z(t) ? t.files : $(t) ? ee(e.refs).value : de(t) ? [...t.selectedOptions].map((({
                    value: e
                }) => e)) : a(t) ? Q(e.refs).value : ve(f(t.value) ? e.ref.value : t.value, e)
            }
            var be = e => f(e) ? void 0 : G(e) ? e.source : l(e) ? G(e.value) ? e.value.source : e.value : e;

            function we(e, t, r) {
                const n = p(e, r);
                if (n || L(r)) return {
                    error: n,
                    name: r
                };
                const a = r.split(".");
                for (; a.length;) {
                    const n = a.join("."),
                        o = p(t, n),
                        i = p(e, n);
                    if (o && !Array.isArray(o) && r !== n) return {
                        name: r
                    };
                    if (i && i.type) return {
                        name: n,
                        error: i
                    };
                    a.pop()
                }
                return {
                    name: r
                }
            }
            const Ee = {
                mode: g,
                reValidateMode: v,
                shouldFocusError: !0
            };

            function xe(e = {}) {
                let t, r = { ...Ee,
                        ...e
                    },
                    n = {
                        submitCount: 0,
                        isDirty: !1,
                        isValidating: !1,
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        touchedFields: {},
                        dirtyFields: {},
                        errors: {}
                    },
                    s = {},
                    l = M(r.defaultValues) || {},
                    y = r.shouldUnregister ? {} : M(l),
                    v = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    g = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    b = 0,
                    E = {};
                const x = {
                        isDirty: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    k = {
                        watch: se(),
                        array: se(),
                        state: se()
                    },
                    _ = ae(r.mode),
                    C = ae(r.reValidateMode),
                    S = r.criteriaMode === w,
                    A = async () => {
                        let e = !1;
                        return x.isValid && (e = r.resolver ? N((await j()).errors) : await L(s, !0), e !== n.isValid && (n.isValid = e, k.state.next({
                            isValid: e
                        }))), e
                    },
                    F = (e, t, r, n) => {
                        const a = p(s, e);
                        if (a) {
                            const o = p(y, e, f(r) ? p(l, e) : r);
                            f(o) || n && n.defaultChecked || t ? B(y, e, t ? o : ge(a._f)) : G(e, o), v.mount && A()
                        }
                    },
                    O = (e, t, r, a, o) => {
                        let i = !1;
                        const s = {
                                name: e
                            },
                            u = p(n.touchedFields, e);
                        if (x.isDirty) {
                            const e = n.isDirty;
                            n.isDirty = s.isDirty = P(), i = e !== s.isDirty
                        }
                        if (x.dirtyFields && (!r || a)) {
                            const r = p(n.dirtyFields, e);
                            ue(p(l, e), t) ? ie(n.dirtyFields, e) : B(n.dirtyFields, e, !0), s.dirtyFields = n.dirtyFields, i = i || r !== p(n.dirtyFields, e)
                        }
                        return r && !u && (B(n.touchedFields, e, r), s.touchedFields = n.touchedFields, i = i || x.touchedFields && u !== r), i && o && k.state.next(s), i ? s : {}
                    },
                    D = (r, a, o, i) => {
                        const s = p(n.errors, r),
                            l = x.isValid && q(a) && n.isValid !== a;
                        var u;
                        if (e.delayError && o ? (u = () => ((e, t) => {
                                B(n.errors, e, t), k.state.next({
                                    errors: n.errors
                                })
                            })(r, o), t = e => {
                                clearTimeout(b), b = window.setTimeout(u, e)
                            }, t(e.delayError)) : (clearTimeout(b), t = null, o ? B(n.errors, r, o) : ie(n.errors, r)), (o ? !ue(s, o) : s) || !N(i) || l) {
                            const e = { ...i,
                                ...l && q(a) ? {
                                    isValid: a
                                } : {},
                                errors: n.errors,
                                name: r
                            };
                            n = { ...n,
                                ...e
                            }, k.state.next(e)
                        }
                        E[r]--, x.isValidating && !Object.values(E).some((e => e)) && (k.state.next({
                            isValidating: !1
                        }), E = {})
                    },
                    j = async e => r.resolver ? await r.resolver({ ...y
                    }, r.context, ((e, t, r, n) => {
                        const a = {};
                        for (const o of e) {
                            const e = p(t, o);
                            e && B(a, o, e._f)
                        }
                        return {
                            criteriaMode: r,
                            names: [...e],
                            fields: a,
                            shouldUseNativeValidation: n
                        }
                    })(e || g.mount, s, r.criteriaMode, r.shouldUseNativeValidation)) : {},
                    L = async (e, t, a = {
                        valid: !0
                    }) => {
                        for (const o in e) {
                            const i = e[o];
                            if (i) {
                                const {
                                    _f: e,
                                    ...o
                                } = i;
                                if (e) {
                                    const o = g.array.has(e.name),
                                        s = await ne(i, p(y, e.name), S, r.shouldUseNativeValidation, o);
                                    if (s[e.name] && (a.valid = !1, t)) break;
                                    !t && (p(s, e.name) ? o ? U(n.errors, s, e.name) : B(n.errors, e.name, s[e.name]) : ie(n.errors, e.name))
                                }
                                o && await L(o, t, a)
                            }
                        }
                        return a.valid
                    },
                    P = (e, t) => (e && t && B(y, e, t), !ue(ee(), l)),
                    W = (e, t, r) => {
                        const n = { ...v.mount ? y : f(t) ? l : Z(e) ? {
                                [e]: t
                            } : t
                        };
                        return T(e, g, n, r)
                    },
                    G = (e, t, r = {}) => {
                        const n = p(s, e);
                        let o = t;
                        if (n) {
                            const r = n._f;
                            r && (!r.disabled && B(y, e, ve(t, r)), o = R && ce(r.ref) && i(t) ? "" : t, de(r.ref) ? [...r.ref.options].forEach((e => e.selected = o.includes(e.value))) : r.refs ? a(r.ref) ? r.refs.length > 1 ? r.refs.forEach((e => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(o) ? !!o.find((t => t === e.value)) : o === e.value))) : r.refs[0] && (r.refs[0].checked = !!o) : r.refs.forEach((e => e.checked = e.value === o)) : z(r.ref) ? r.ref.value = "" : (r.ref.value = o, r.ref.type || k.watch.next({
                                name: e
                            })))
                        }(r.shouldDirty || r.shouldTouch) && O(e, o, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && X(e)
                    },
                    Y = (e, t, r) => {
                        for (const n in t) {
                            const a = t[n],
                                i = `${e}.${n}`,
                                l = p(s, i);
                            !g.array.has(e) && le(a) && (!l || l._f) || o(a) ? G(i, a, r) : Y(i, a, r)
                        }
                    },
                    J = (e, t, r = {}) => {
                        const a = p(s, e),
                            o = g.array.has(e),
                            u = M(t);
                        B(y, e, u), o ? (k.array.next({
                            name: e,
                            values: y
                        }), (x.isDirty || x.dirtyFields) && r.shouldDirty && (n.dirtyFields = ye(l, y), k.state.next({
                            name: e,
                            dirtyFields: n.dirtyFields,
                            isDirty: P(e, u)
                        }))) : !a || a._f || i(u) ? G(e, u, r) : Y(e, u, r), H(e, g) && k.state.next({}), k.watch.next({
                            name: e
                        })
                    },
                    Q = async e => {
                        const a = e.target;
                        let o = a.name;
                        const i = p(s, o);
                        if (i) {
                            let c, d;
                            const f = a.type ? ge(i._f) : u(e),
                                v = e.type === m || e.type === h,
                                b = !((l = i._f).mount && (l.required || l.min || l.max || l.maxLength || l.minLength || l.pattern || l.validate)) && !r.resolver && !p(n.errors, o) && !i._f.deps || ((e, t, r, n, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? n.isOnBlur : a.isOnBlur) ? !e : !(r ? n.isOnChange : a.isOnChange) || e))(v, p(n.touchedFields, o), n.isSubmitted, C, _),
                                w = H(o, g, v);
                            B(y, o, f), v ? (i._f.onBlur && i._f.onBlur(e), t && t(0)) : i._f.onChange && i._f.onChange(e);
                            const F = O(o, f, v, !1),
                                V = !N(F) || w;
                            if (!v && k.watch.next({
                                    name: o,
                                    type: e.type
                                }), b) return x.isValid && A(), V && k.state.next({
                                name: o,
                                ...w ? {} : F
                            });
                            if (!v && w && k.state.next({}), E[o] = E[o] ? E[o] + 1 : 1, k.state.next({
                                    isValidating: !0
                                }), r.resolver) {
                                const {
                                    errors: e
                                } = await j([o]), t = we(n.errors, s, o), r = we(e, s, t.name || o);
                                c = r.error, o = r.name, d = N(e)
                            } else c = (await ne(i, p(y, o), S, r.shouldUseNativeValidation))[o], A();
                            i._f.deps && X(i._f.deps), D(o, d, c, F)
                        }
                        var l
                    },
                    X = async (e, t = {}) => {
                        let a, o;
                        const i = V(e);
                        if (k.state.next({
                                isValidating: !0
                            }), r.resolver) {
                            const t = await (async e => {
                                const {
                                    errors: t
                                } = await j();
                                if (e)
                                    for (const r of e) {
                                        const e = p(t, r);
                                        e ? B(n.errors, r, e) : ie(n.errors, r)
                                    } else n.errors = t;
                                return t
                            })(f(e) ? e : i);
                            a = N(t), o = e ? !i.some((e => p(t, e))) : a
                        } else e ? (o = (await Promise.all(i.map((async e => {
                            const t = p(s, e);
                            return await L(t && t._f ? {
                                [e]: t
                            } : t)
                        })))).every(Boolean), (o || n.isValid) && A()) : o = a = await L(s);
                        return k.state.next({ ...!Z(e) || x.isValid && a !== n.isValid ? {} : {
                                name: e
                            },
                            ...r.resolver || !e ? {
                                isValid: a
                            } : {},
                            errors: n.errors,
                            isValidating: !1
                        }), t.shouldFocus && !o && I(s, (e => e && p(n.errors, e)), e ? i : g.mount), o
                    },
                    ee = e => {
                        const t = { ...l,
                            ...v.mount ? y : {}
                        };
                        return f(e) ? t : Z(e) ? p(t, e) : e.map((e => p(t, e)))
                    },
                    te = (e, t) => ({
                        invalid: !!p((t || n).errors, e),
                        isDirty: !!p((t || n).dirtyFields, e),
                        isTouched: !!p((t || n).touchedFields, e),
                        error: p((t || n).errors, e)
                    }),
                    re = (e, t = {}) => {
                        for (const a of e ? V(e) : g.mount) g.mount.delete(a), g.array.delete(a), p(s, a) && (t.keepValue || (ie(s, a), ie(y, a)), !t.keepError && ie(n.errors, a), !t.keepDirty && ie(n.dirtyFields, a), !t.keepTouched && ie(n.touchedFields, a), !r.shouldUnregister && !t.keepDefaultValue && ie(l, a));
                        k.watch.next({}), k.state.next({ ...n,
                            ...t.keepDirty ? {
                                isDirty: P()
                            } : {}
                        }), !t.keepIsValid && A()
                    },
                    oe = (e, t = {}) => {
                        let n = p(s, e);
                        const o = q(t.disabled);
                        return B(s, e, { ...n || {},
                            _f: { ...n && n._f ? n._f : {
                                    ref: {
                                        name: e
                                    }
                                },
                                name: e,
                                mount: !0,
                                ...t
                            }
                        }), g.mount.add(e), n ? o && B(y, e, t.disabled ? void 0 : p(y, e, ge(n._f))) : F(e, !0, t.value), { ...o ? {
                                disabled: t.disabled
                            } : {},
                            ...r.shouldUseNativeValidation ? {
                                required: !!t.required,
                                min: be(t.min),
                                max: be(t.max),
                                minLength: be(t.minLength),
                                maxLength: be(t.maxLength),
                                pattern: be(t.pattern)
                            } : {},
                            name: e,
                            onChange: Q,
                            onBlur: Q,
                            ref: o => {
                                if (o) {
                                    oe(e, t), n = p(s, e);
                                    const r = f(o.value) && o.querySelectorAll && o.querySelectorAll("input,select,textarea")[0] || o,
                                        i = (e => $(e) || a(e))(r),
                                        u = n._f.refs || [];
                                    if (i ? u.find((e => e === r)) : r === n._f.ref) return;
                                    B(s, e, {
                                        _f: { ...n._f,
                                            ...i ? {
                                                refs: [...u.filter(fe), r, ...Array.isArray(p(l, e)) ? [{}] : []],
                                                ref: {
                                                    type: r.type,
                                                    name: e
                                                }
                                            } : {
                                                ref: r
                                            }
                                        }
                                    }), F(e, !1, void 0, r)
                                } else n = p(s, e, {}), n._f && (n._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && (!c(g.array, e) || !v.action) && g.unMount.add(e)
                            }
                        }
                    },
                    pe = () => r.shouldFocusError && I(s, (e => e && p(n.errors, e)), g.mount);
                return {
                    control: {
                        register: oe,
                        unregister: re,
                        getFieldState: te,
                        _executeSchema: j,
                        _focusError: pe,
                        _getWatch: W,
                        _getDirty: P,
                        _updateValid: A,
                        _removeUnmounted: () => {
                            for (const e of g.unMount) {
                                const t = p(s, e);
                                t && (t._f.refs ? t._f.refs.every((e => !fe(e))) : !fe(t._f.ref)) && re(e)
                            }
                            g.unMount = new Set
                        },
                        _updateFieldArray: (e, t = [], r, a, o = !0, i = !0) => {
                            if (a && r) {
                                if (v.action = !0, i && Array.isArray(p(s, e))) {
                                    const t = r(p(s, e), a.argA, a.argB);
                                    o && B(s, e, t)
                                }
                                if (x.errors && i && Array.isArray(p(n.errors, e))) {
                                    const t = r(p(n.errors, e), a.argA, a.argB);
                                    o && B(n.errors, e, t), ((e, t) => {
                                        !d(p(e, t)).length && ie(e, t)
                                    })(n.errors, e)
                                }
                                if (x.touchedFields && i && Array.isArray(p(n.touchedFields, e))) {
                                    const t = r(p(n.touchedFields, e), a.argA, a.argB);
                                    o && B(n.touchedFields, e, t)
                                }
                                x.dirtyFields && (n.dirtyFields = ye(l, y)), k.state.next({
                                    isDirty: P(e, t),
                                    dirtyFields: n.dirtyFields,
                                    errors: n.errors,
                                    isValid: n.isValid
                                })
                            } else B(y, e, t)
                        },
                        _getFieldArray: t => d(p(v.mount ? y : l, t, e.shouldUnregister ? p(l, t, []) : [])),
                        _subjects: k,
                        _proxyFormState: x,
                        get _fields() {
                            return s
                        },
                        get _formValues() {
                            return y
                        },
                        get _stateFlags() {
                            return v
                        },
                        set _stateFlags(e) {
                            v = e
                        },
                        get _defaultValues() {
                            return l
                        },
                        get _names() {
                            return g
                        },
                        set _names(e) {
                            g = e
                        },
                        get _formState() {
                            return n
                        },
                        set _formState(e) {
                            n = e
                        },
                        get _options() {
                            return r
                        },
                        set _options(e) {
                            r = { ...r,
                                ...e
                            }
                        }
                    },
                    trigger: X,
                    register: oe,
                    handleSubmit: (e, t) => async a => {
                        a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
                        let o = !0,
                            i = M(y);
                        k.state.next({
                            isSubmitting: !0
                        });
                        try {
                            if (r.resolver) {
                                const {
                                    errors: e,
                                    values: t
                                } = await j();
                                n.errors = e, i = t
                            } else await L(s);
                            N(n.errors) ? (k.state.next({
                                errors: {},
                                isSubmitting: !0
                            }), await e(i, a)) : (t && await t({ ...n.errors
                            }, a), pe())
                        } catch (l) {
                            throw o = !1, l
                        } finally {
                            n.isSubmitted = !0, k.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: N(n.errors) && o,
                                submitCount: n.submitCount + 1,
                                errors: n.errors
                            })
                        }
                    },
                    watch: (e, t) => K(e) ? k.watch.subscribe({
                        next: r => e(W(void 0, t), r)
                    }) : W(e, t, !0),
                    setValue: J,
                    getValues: ee,
                    reset: (t, r) => ((t, r = {}) => {
                        const a = t || l,
                            o = M(a),
                            i = t && !N(t) ? o : l;
                        if (r.keepDefaultValues || (l = a), !r.keepValues) {
                            if (r.keepDirtyValues)
                                for (const e of g.mount) p(n.dirtyFields, e) ? B(i, e, p(y, e)) : J(e, p(i, e));
                            else {
                                if (R && f(t))
                                    for (const e of g.mount) {
                                        const t = p(s, e);
                                        if (t && t._f) {
                                            const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                            if (ce(e)) {
                                                const t = e.closest("form");
                                                if (t) {
                                                    t.reset();
                                                    break
                                                }
                                            }
                                        }
                                    }
                                s = {}
                            }
                            y = e.shouldUnregister ? r.keepDefaultValues ? M(l) : {} : o, k.array.next({
                                values: i
                            }), k.watch.next({
                                values: i
                            })
                        }
                        g = {
                            mount: new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, v.mount = !x.isValid || !!r.keepIsValid, v.watch = !!e.shouldUnregister, k.state.next({
                            submitCount: r.keepSubmitCount ? n.submitCount : 0,
                            isDirty: r.keepDirty || r.keepDirtyValues ? n.isDirty : !(!r.keepDefaultValues || ue(t, l)),
                            isSubmitted: !!r.keepIsSubmitted && n.isSubmitted,
                            dirtyFields: r.keepDirty || r.keepDirtyValues ? n.dirtyFields : r.keepDefaultValues && t ? ye(l, t) : {},
                            touchedFields: r.keepTouched ? n.touchedFields : {},
                            errors: r.keepErrors ? n.errors : {},
                            isSubmitting: !1,
                            isSubmitSuccessful: !1
                        })
                    })(K(t) ? t(y) : t, r),
                    resetField: (e, t = {}) => {
                        p(s, e) && (f(t.defaultValue) ? J(e, p(l, e)) : (J(e, t.defaultValue), B(l, e, t.defaultValue)), t.keepTouched || ie(n.touchedFields, e), t.keepDirty || (ie(n.dirtyFields, e), n.isDirty = t.defaultValue ? P(e, p(l, e)) : P()), t.keepError || (ie(n.errors, e), x.isValid && A()), k.state.next({ ...n
                        }))
                    },
                    clearErrors: e => {
                        e ? V(e).forEach((e => ie(n.errors, e))) : n.errors = {}, k.state.next({
                            errors: n.errors
                        })
                    },
                    unregister: re,
                    setError: (e, t, r) => {
                        const a = (p(s, e, {
                            _f: {}
                        })._f || {}).ref;
                        B(n.errors, e, { ...t,
                            ref: a
                        }), k.state.next({
                            name: e,
                            errors: n.errors,
                            isValid: !1
                        }), r && r.shouldFocus && a && a.focus && a.focus()
                    },
                    setFocus: (e, t = {}) => {
                        const r = p(s, e),
                            n = r && r._f;
                        if (n) {
                            const e = n.refs ? n.refs[0] : n.ref;
                            e.focus && (e.focus(), t.shouldSelect && e.select())
                        }
                    },
                    getFieldState: te
                }
            }

            function ke(e = {}) {
                const t = n.useRef(),
                    [r, a] = n.useState({
                        isDirty: !1,
                        isValidating: !1,
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        submitCount: 0,
                        dirtyFields: {},
                        touchedFields: {},
                        errors: {},
                        defaultValues: e.defaultValues
                    });
                t.current || (t.current = { ...xe(e),
                    formState: r
                });
                const o = t.current.control;
                return o._options = e, D({
                    subject: o._subjects.state,
                    callback: n.useCallback((e => {
                        O(e, o._proxyFormState, !0) && (o._formState = { ...o._formState,
                            ...e
                        }, a({ ...o._formState
                        }))
                    }), [o])
                }), n.useEffect((() => {
                    o._stateFlags.mount || (o._proxyFormState.isValid && o._updateValid(), o._stateFlags.mount = !0), o._stateFlags.watch && (o._stateFlags.watch = !1, o._subjects.state.next({})), o._removeUnmounted()
                })), n.useEffect((() => {
                    r.submitCount && o._focusError()
                }), [o, r.submitCount]), t.current.formState = F(r, o), t.current
            }
        }
    }
]);