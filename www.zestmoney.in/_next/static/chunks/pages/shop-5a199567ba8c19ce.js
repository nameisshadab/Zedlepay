(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4800], {
        5972: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return x
                }
            });
            var n = i(1161),
                t = i(7294),
                r = i(7714),
                o = i(3555),
                l = i(5893),
                c = function() {
                    return (0, l.jsxs)("div", {
                        className: "",
                        children: [(0, l.jsx)(r.h4, {
                            source: "shop"
                        }), (0, l.jsx)("div", {
                            className: "container-fluid p-0 shopBanner-container shopBanner-image1 position-relative pb-5",
                            children: (0, l.jsxs)("div", {
                                className: "",
                                children: [(0, l.jsx)("div", {
                                    className: "shopBanner-image1-mob position-relative",
                                    children: (0, l.jsx)("div", {
                                        className: "shopBanner-subContainer offset-1 col-lg-6 col-10",
                                        children: (0, l.jsx)("div", {
                                            className: "shopBanner-title ",
                                            children: "Pay at your own pace"
                                        })
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "",
                                    children: [(0, l.jsx)("div", {
                                        className: "offset-1 col-lg-6 col-10",
                                        children: (0, l.jsx)("div", {
                                            className: "shopBanner-subTitle mt-5 position-relative",
                                            children: o.ZP[0].sub
                                        })
                                    }), (0, l.jsx)("p", {
                                        className: "Astr mt-5 mb-0  ml-auto px-0 text-white position-absolute shop-astr",
                                        children: "*0% interest applicable only on the Pay-in-3 option/select offerings"
                                    })]
                                })]
                            })
                        })]
                    })
                },
                a = i(9499),
                d = (i(8322), i(8745), i(6066));

            function p(e, s) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    s && (n = n.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function h(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? p(Object(i), !0).forEach((function(s) {
                        (0, a.Z)(e, s, i[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
                    }))
                }
                return e
            }
            var m = function() {
                    var e, s, i, n = (0, t.useState)(!0),
                        r = n[0],
                        c = n[1],
                        a = (0, t.useState)(!1),
                        p = a[0],
                        m = a[1],
                        u = (0, t.useState)(!0),
                        g = u[0],
                        f = u[1],
                        b = (0, t.useState)(!1),
                        j = b[0],
                        x = b[1],
                        w = (0, t.useState)(!0),
                        k = w[0],
                        v = w[1],
                        N = (0, t.useState)(!1),
                        S = N[0],
                        T = N[1],
                        y = (0, t.useRef)(),
                        P = (0, t.useRef)(),
                        C = (0, t.useRef)(),
                        O = function() {
                            y.current.slickNext()
                        },
                        A = function() {
                            P.current.slickNext()
                        },
                        _ = function() {
                            C.current.slickNext()
                        },
                        Z = function() {
                            y.current.slickPrev()
                        },
                        E = function() {
                            P.current.slickPrev()
                        },
                        D = function() {
                            C.current.slickPrev()
                        },
                        B = {
                            infinite: !1,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            arrow: !1,
                            afterChange: function(e) {
                                return function(e) {
                                    m(0 !== e)
                                }(e)
                            },
                            beforeChange: function(e, s) {
                                c(e !== s || 0 === s)
                            },
                            responsive: [{
                                breakpoint: 1130,
                                settings: {
                                    slidesToShow: 3.8,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2.8,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2.3,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 576,
                                settings: {
                                    slidesToShow: 1.38,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 375,
                                settings: {
                                    slidesToShow: 1.19,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }]
                        },
                        R = {
                            infinite: !1,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            swipeToSlide: !0,
                            arrow: !1,
                            afterChange: function(e) {
                                return function(e) {
                                    x(0 !== e)
                                }(e)
                            },
                            beforeChange: function(e, s) {
                                f(e !== s || 0 === s)
                            },
                            responsive: [{
                                breakpoint: 1130,
                                settings: {
                                    slidesToShow: 3.8,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2.8,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1.2,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 576,
                                settings: {
                                    slidesToShow: 1.38,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 375,
                                settings: {
                                    slidesToShow: 1.19,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }]
                        },
                        M = {
                            infinite: !1,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            arrow: !1,
                            afterChange: function(e) {
                                return function(e) {
                                    T(0 !== e)
                                }(e)
                            },
                            beforeChange: function(e, s) {
                                v(e !== s || 0 === s)
                            },
                            responsive: [{
                                breakpoint: 1130,
                                settings: {
                                    slidesToShow: 3.8,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2.8,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2.2,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 576,
                                settings: {
                                    slidesToShow: 2.2,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }, {
                                breakpoint: 375,
                                settings: {
                                    slidesToShow: 2.19,
                                    slidesToScroll: 1,
                                    infinite: !1,
                                    arrow: !0
                                }
                            }]
                        };
                    return (0, l.jsxs)("div", {
                        className: "shopSliders-container position-relative pb-5",
                        children: [(0, l.jsxs)("div", {
                            className: "shopPhoneContainer1 d-none d-lg-block position-relative",
                            children: [(0, l.jsx)("img", {
                                className: "shopPhone1_1 position-absolute",
                                src: "/images/shopPhone1.png"
                            }), (0, l.jsx)("img", {
                                className: "shopPhone2_1 position-absolute",
                                src: "/images/shopPhone2.png"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "offset-1 col-11 pr-0",
                            children: [!1 === p ? (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0",
                                onClick: Z,
                                children: (0, l.jsx)("img", {
                                    src: "/images/leftArrow.png"
                                })
                            }) : (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0",
                                onClick: Z,
                                children: (0, l.jsx)("img", {
                                    src: "/images/leftArrowDark.png"
                                })
                            }), !0 === r ? (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0 ml-4",
                                onClick: O,
                                children: (0, l.jsx)("img", {
                                    src: "/images/rightArrow.png"
                                })
                            }) : (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0 ml-4",
                                onClick: O,
                                children: (0, l.jsx)("img", {
                                    src: "/images/rightArrowLight.png"
                                })
                            }), (0, l.jsx)(d.Z, h(h({
                                ref: y
                            }, B), {}, {
                                className: "pb-lg-5 mb-lg-5",
                                children: null === (e = o.ZP[1].slider1) || void 0 === e ? void 0 : e.map((function(e, s) {
                                    return (0, l.jsx)("div", {
                                        children: (0, l.jsx)("a", {
                                            href: e.link,
                                            children: (0, l.jsxs)("div", {
                                                className: "position-relative col-lg-10 col-md-10  p-0 col-10",
                                                children: [(0, l.jsx)("img", {
                                                    src: e.image,
                                                    className: "slicker-card"
                                                }), (0, l.jsx)("div", {
                                                    className: "position-absolute",
                                                    style: {
                                                        top: "0",
                                                        left: "0",
                                                        display: "flex",
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    children: (0, l.jsx)("div", {
                                                        className: "card-img-overlay d-flex flex-column justify-content-around",
                                                        children: (0, l.jsx)("p", {
                                                            className: "card-text text-white text-center Ag-32",
                                                            children: e.name
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                }))
                            })), (0, l.jsx)("div", {
                                className: "shopSliders-title mt-5 mb-4",
                                children: "Recommended for you"
                            }), !1 === j ? (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0",
                                onClick: E,
                                children: (0, l.jsx)("img", {
                                    src: "/images/leftArrow.png"
                                })
                            }) : (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0",
                                onClick: E,
                                children: (0, l.jsx)("img", {
                                    src: "/images/leftArrowDark.png"
                                })
                            }), !0 === g ? (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0 ml-4",
                                onClick: A,
                                children: (0, l.jsx)("img", {
                                    src: "/images/rightArrow.png"
                                })
                            }) : (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0 ml-4",
                                onClick: A,
                                children: (0, l.jsx)("img", {
                                    src: "/images/rightArrowLight.png"
                                })
                            }), (0, l.jsx)(d.Z, h(h({
                                ref: P
                            }, R), {}, {
                                className: "mb-5",
                                children: null === (s = o.ZP[1].slider2) || void 0 === s ? void 0 : s.map((function(e, s) {
                                    return (0, l.jsx)("div", {
                                        children: (0, l.jsx)("a", {
                                            href: e.link,
                                            children: (0, l.jsxs)("div", {
                                                className: "position-relative col-lg-10 col-md-10 col-11 p-0 col-10",
                                                children: [(0, l.jsx)("img", {
                                                    src: e.image,
                                                    className: "slicker-card"
                                                }), (0, l.jsx)("div", {
                                                    className: "slider2-title",
                                                    children: e.name
                                                }), (0, l.jsx)("div", {
                                                    className: "slider2-sub",
                                                    children: e.category
                                                })]
                                            })
                                        })
                                    })
                                }))
                            })), (0, l.jsx)("div", {
                                className: "shopSliders-title mt-lg-5 pt-lg-5 mb-3",
                                children: "Popular stores"
                            }), !1 === S ? (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0",
                                onClick: D,
                                children: (0, l.jsx)("img", {
                                    src: "/images/leftArrow.png"
                                })
                            }) : (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0",
                                onClick: D,
                                children: (0, l.jsx)("img", {
                                    src: "/images/leftArrowDark.png"
                                })
                            }), !0 === k ? (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0 ml-4",
                                onClick: _,
                                children: (0, l.jsx)("img", {
                                    src: "/images/rightArrow.png"
                                })
                            }) : (0, l.jsx)("button", {
                                className: "btn custom-slicker-btn p-0 ml-4",
                                onClick: _,
                                children: (0, l.jsx)("img", {
                                    src: "/images/rightArrowLight.png"
                                })
                            }), (0, l.jsx)(d.Z, h(h({
                                ref: C
                            }, M), {}, {
                                className: "mb-5 pb-5",
                                children: null === (i = o.ZP[1].slider3) || void 0 === i ? void 0 : i.map((function(e) {
                                    return (0, l.jsx)("div", {
                                        children: (0, l.jsx)("a", {
                                            href: e.link,
                                            children: (0, l.jsx)("div", {
                                                className: "position-relative col-lg-10 col-md-10 p-0 col-10",
                                                children: (0, l.jsx)("img", {
                                                    src: e.image,
                                                    className: "slicker-card"
                                                })
                                            })
                                        })
                                    })
                                }))
                            }))]
                        })]
                    })
                },
                u = i(6439),
                g = function() {
                    return (0, l.jsx)("div", {
                        className: "position-relative shopStep-container",
                        children: (0, l.jsx)("div", {
                            className: "position-relative shopStep-subContainer",
                            children: (0, l.jsx)(u.R, {
                                source: "shop"
                            })
                        })
                    })
                },
                f = i(9008),
                b = i.n(f),
                j = i(1163),
                x = function() {
                    var e = (0, j.useRouter)().asPath;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(b(), {
                            children: [(0, l.jsx)("link", {
                                rel: "canonical",
                                href: "https://www.zestmoney.in".concat(e)
                            }), (0, l.jsx)("meta", {
                                property: "og:url",
                                content: e
                            }), (0, l.jsx)("meta", {
                                property: "og:title",
                                content: "Sign up with ZestMoney to shop on EMI without credit card!"
                            }), (0, l.jsx)("meta", {
                                property: "og:description",
                                content: "Sign up with ZestMoney today to shop on EMI for electronics, Apparel, Flights & much more! No credit card, debit card or credit score required."
                            })]
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(c, {}), (0, l.jsx)(m, {}), (0, l.jsx)(g, {}), (0, l.jsx)(n.$, {})]
                        })]
                    })
                }
        },
        3276: function(e, s, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/shop", function() {
                return i(5972)
            }])
        }
    },
    function(e) {
        e.O(0, [6066, 653, 4361, 3197, 1407, 1161, 3555, 4467, 9774, 2888, 179], (function() {
            return s = 3276, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);