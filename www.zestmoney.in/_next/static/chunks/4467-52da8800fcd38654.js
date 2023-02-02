(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4467], {
        6439: function(e, s, n) {
            "use strict";
            n.d(s, {
                R: function() {
                    return i
                }
            });
            var t = n(7714),
                a = n(3507),
                l = n(5893),
                i = function(e) {
                    return (0, l.jsxs)("div", {
                        className: " position-relative part3 minHeight bg-grey pb-5",
                        id: "steps",
                        children: [(0, l.jsxs)("div", {
                            className: "container d-flex align-items-center h-100 ",
                            children: ["shop" === e.source ? (0, l.jsxs)("div", {
                                children: [(0, l.jsxs)("div", {
                                    className: "shopPhone-container2 position-absolute",
                                    children: [(0, l.jsx)("img", {
                                        className: "shopPhone3 position-absolute d-lg-block d-none",
                                        src: "/images/shopPhone3.png"
                                    }), (0, l.jsx)("img", {
                                        className: "shopPhone3 position-absolute d-lg-none d-block",
                                        src: "/images/shopPhone3.1.png"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "shopPhone-container3 position-absolute",
                                    children: [(0, l.jsx)("img", {
                                        className: "shopPhone4 position-absolute d-lg-block d-none",
                                        src: "/images/shopPhone4.png"
                                    }), (0, l.jsx)("img", {
                                        className: "shopPhone4 position-absolute d-lg-none d-block",
                                        src: "/images/shopPhone4.1.png"
                                    })]
                                })]
                            }) : "", (0, l.jsx)("div", {
                                className: "d-flex mt-5",
                                children: (0, l.jsxs)("div", {
                                    className: "col-12",
                                    children: [(0, l.jsx)("h2", {
                                        className: "steps-title px-0 col-10 col-md-6 position-relative mt-5",
                                        children: "As easy as 1, 2, 3"
                                    }), (0, l.jsxs)("div", {
                                        className: "stepsAlign row",
                                        children: [(0, l.jsx)(t.JD, {
                                            title: "Download",
                                            number: "1",
                                            desc: "Download the Zest app, complete your profile, and see what your credit limit is."
                                        }), (0, l.jsx)(t.JD, {
                                            title: "Activate",
                                            number: "2",
                                            desc: "Upload your KYC, set up automatic repayments from your bank account, and you are set."
                                        }), (0, l.jsx)(t.JD, {
                                            title: "Use",
                                            number: "3",
                                            desc: "Use Zest to pay when making payments at 100,000 offline and 15,000 online stores. "
                                        })]
                                    })]
                                })
                            })]
                        }), "shop" === e.source ? (0, l.jsx)("div", {
                            className: "pb-3 container  btnPos pt-5 ",
                            children: (0, l.jsx)("a", {
                                href: "https://zestlife.page.link/ct5V",
                                children: (0, l.jsx)(t.un, {
                                    color: "green",
                                    bg: "#1FBA68",
                                    name: "CHECK YOUR CREDIT LIMIT!"
                                })
                            })
                        }) : (0, l.jsx)("div", {
                            className: "pt-4 pb-3 container  btnPos ",
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)(a.Z, {
                                    text: "Check Your Credit Limit!",
                                    bg: "green",
                                    color: "white",
                                    link: "https://zestlife.page.link/ct5V"
                                })
                            })
                        }), "shop" == e.source ? (0, l.jsx)("div", {
                            className: "justify-content-center d-flex pb-4 d-lg-none mt-3",
                            children: (0, l.jsx)("a", {
                                href: "#allStores",
                                children: (0, l.jsx)(t.ox, {})
                            })
                        }) : (0, l.jsx)("div", {
                            className: "justify-content-center d-flex pb-5",
                            children: (0, l.jsx)("a", {
                                href: "#whyZest",
                                children: (0, l.jsx)(t.ox, {})
                            })
                        })]
                    })
                }
        },
        7788: function(e, s, n) {
            "use strict";
            n.d(s, {
                gp: function() {
                    return l
                },
                un: function() {
                    return a
                }
            });
            n(7294);
            var t = n(5893),
                a = function(e) {
                    var s = e.name,
                        n = e.color;
                    e.bg;
                    return (0, t.jsx)(t.Fragment, {
                        children: "CHECK YOUR CREDIT LIMIT!" == s ? (0, t.jsx)("div", {
                            className: "payButton".concat(n, "-check btn mt-lg-5 mt-2 col-lg-5 py-auto d-flex justify-content-center align-items-center"),
                            children: (0, t.jsx)("span", {
                                children: e.name
                            })
                        }) : (0, t.jsx)("div", {
                            className: "payButton".concat(n, " btn mt-lg-5 mt-2 col-lg-5 py-auto d-flex justify-content-center align-items-center"),
                            children: (0, t.jsx)("span", {
                                children: e.name
                            })
                        })
                    })
                },
                l = function() {
                    return (0, t.jsx)("img", {
                        src: "/images/closeIcon.png",
                        alt: "ZestMoney",
                        className: "img-fluid menubtn closebtn"
                    })
                }
        },
        3507: function(e, s, n) {
            "use strict";
            n.d(s, {
                Z: function() {
                    return a
                }
            });
            n(7294);
            var t = n(5893),
                a = function(e) {
                    return (0, t.jsx)("div", {
                        className: "cbtn-container d-flex",
                        children: (0, t.jsx)("a", {
                            href: e.link,
                            children: (0, t.jsx)("div", {
                                className: "green" == e.bg ? "cbtn cbtn-green" : "black" == e.bg ? "cbtn cbtn-black" : "white" == e.bg ? "cbtn cbtn-white" : "",
                                style: {},
                                children: e.text
                            })
                        })
                    })
                }
        },
        7878: function(e, s, n) {
            "use strict";
            n.d(s, {
                T: function() {
                    return l
                },
                w: function() {
                    return i
                }
            });
            n(7294);
            var t = n(1163),
                a = n(5893),
                l = function() {
                    var e = (0, t.useRouter)();
                    return (0, a.jsxs)("div", {
                        className: "ml-lg-2",
                        children: ["/myntra-sales/" == e.asPath ? (0, a.jsx)("a", {
                            href: "/",
                            children: (0, a.jsx)("img", {
                                src: "/images/ZestLogoGreen.png",
                                alt: "ZestMoney",
                                className: "headerLogo whiteLogo"
                            })
                        }) : (0, a.jsx)("a", {
                            href: "/",
                            children: (0, a.jsx)("img", {
                                src: "/images/ZestLogo.png",
                                alt: "ZestMoney",
                                className: "headerLogo whiteLogo"
                            })
                        }), "/" == e.asPath ? (0, a.jsx)("a", {
                            href: "/",
                            children: (0, a.jsx)("img", {
                                src: "/images/ZestLogo.png",
                                alt: "ZestMoney",
                                className: "headerLogo greenLogo mt-2 ml-md-5 newbanner-logo"
                            })
                        }) : (0, a.jsx)("a", {
                            href: "/",
                            children: (0, a.jsx)("img", {
                                src: "/images/ZestLogo.png",
                                alt: "ZestMoney",
                                className: "headerLogo greenLogo mt-2"
                            })
                        })]
                    })
                },
                i = function() {
                    return (0, a.jsx)("a", {
                        href: "/",
                        className: "logo-container",
                        children: (0, a.jsx)("img", {
                            src: "/images/ZestDarkLogo.png",
                            alt: "ZestMoney",
                            className: "headerLogo"
                        })
                    })
                }
        },
        6597: function(e, s, n) {
            "use strict";
            n.d(s, {
                Bb: function() {
                    return a
                },
                Cz: function() {
                    return r
                },
                H7: function() {
                    return o
                },
                No: function() {
                    return i
                },
                ox: function() {
                    return l
                }
            });
            n(7294);
            var t = n(5893),
                a = function() {
                    return (0, t.jsx)("div", {
                        className: "navArrow1 text-center",
                        children: (0, t.jsx)("img", {
                            src: "/images/downArrowWhite.png"
                        })
                    })
                },
                l = function() {
                    return (0, t.jsx)("div", {
                        className: "navArrow text-center",
                        children: (0, t.jsx)("img", {
                            className: "",
                            src: "/images/navArrowBlack.png"
                        })
                    })
                },
                i = function() {
                    return (0, t.jsx)("div", {
                        className: "navArrow text-center",
                        children: (0, t.jsx)("img", {
                            className: "",
                            src: "/images/greyDownArrow.png"
                        })
                    })
                },
                r = function() {
                    return (0, t.jsx)("div", {
                        className: "navArrow text-center",
                        children: (0, t.jsx)("img", {
                            className: "",
                            src: "/images/slimwhitearrow.png"
                        })
                    })
                },
                o = function() {
                    return (0, t.jsx)("div", {
                        className: "navArrow text-center",
                        children: (0, t.jsx)("img", {
                            className: "",
                            src: "/images/slimblackarrow.png"
                        })
                    })
                }
        },
        52: function(e, s, n) {
            "use strict";
            n.d(s, {
                h: function() {
                    return c
                }
            });
            var t = n(7294),
                a = n(1664),
                l = n.n(a),
                i = n(7714),
                r = n(1163),
                o = n(5893),
                c = function(e) {
                    var s = (0, t.useState)(!1),
                        n = (s[0], s[1], (0, t.useState)(!1)),
                        a = (n[0], n[1], (0, t.useState)(!1)),
                        c = a[0],
                        d = a[1],
                        m = function() {
                            d(!c)
                        },
                        h = (0, r.useRouter)().asPath.split("/");
                    return (0, o.jsxs)("div", {
                        className: "header-container",
                        style: {
                            background: "transparent"
                        },
                        children: [(0, o.jsx)("div", {
                            className: "desktop",
                            children: (0, o.jsx)("div", {
                                className: "",
                                children: (0, o.jsxs)("nav", {
                                    className: "  navbar-expand-sm",
                                    children: [(0, o.jsx)("div", {
                                        className: "col-6",
                                        children: (0, o.jsxs)("div", {
                                            className: " d-block  position-absolute logospace",
                                            style: {
                                                top: "3rem"
                                            },
                                            children: [(0, o.jsx)(i.TR, {}), (0, o.jsx)(i.wp, {})]
                                        })
                                    }), (0, o.jsxs)("div", {
                                        className: "navBtn d-flex ml-4 position-absolute",
                                        children: [(0, o.jsx)("a", {
                                            href: "https://app.zestmoney.in/authentication",
                                            children: (0, o.jsx)(i.f6, {
                                                color: "white",
                                                bg: "black",
                                                name: "Log in"
                                            })
                                        }), (0, o.jsx)("a", {
                                            href: "https://zestlife.page.link/ct5V",
                                            children: (0, o.jsx)(i.ry, {
                                                color: "white",
                                                bg: "transparent",
                                                name: "Get the app"
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), (0, o.jsx)("div", {
                            className: "mob",
                            children: (0, o.jsx)("div", {
                                className: "col-12 position-absolute",
                                style: {
                                    zIndex: 9999
                                },
                                children: (0, o.jsxs)("div", {
                                    className: "row",
                                    children: [(0, o.jsxs)("div", {
                                        className: "bg-white  position-fixed",
                                        style: {
                                            height: "119vh",
                                            display: c ? "inline-block" : "none",
                                            padding: "5px",
                                            width: "100%"
                                        },
                                        children: [(0, o.jsx)("div", {
                                            children: (0, o.jsx)(i.wn, {})
                                        }), (0, o.jsx)("div", {
                                            onClick: m,
                                            children: (0, o.jsx)(i.gp, {})
                                        }), (0, o.jsxs)("div", {
                                            className: "d-block   ml-4 mobNavbarlink",
                                            children: [(0, o.jsx)("div", {
                                                className: "d-block menuLink ",
                                                children: (0, o.jsx)(l(), {
                                                    href: "/",
                                                    children: "" == h[1] ? (0, o.jsx)("label", {
                                                        className: "navOption ml-2 green",
                                                        children: "Home"
                                                    }) : (0, o.jsx)("label", {
                                                        className: "navOption ml-2 ",
                                                        children: "Home"
                                                    })
                                                })
                                            }), (0, o.jsx)("div", {
                                                className: "d-block menuLink  menuLink-color py-3",
                                                children: (0, o.jsx)("a", {
                                                    href: "/shop",
                                                    children: "shop" == h[1] ? (0, o.jsx)("label", {
                                                        className: "navOption ml-2  green",
                                                        children: "Shop"
                                                    }) : (0, o.jsx)("label", {
                                                        className: "navOption ml-2 menuLink-color ",
                                                        children: "Shop"
                                                    })
                                                })
                                            }), (0, o.jsx)("div", {
                                                className: "d-block menuLink  py-3",
                                                children: (0, o.jsx)("a", {
                                                    href: "/partner-with-us",
                                                    children: "partner-with-us" == h[1] ? (0, o.jsx)("label", {
                                                        className: "navOption ml-2 green",
                                                        children: "Partner"
                                                    }) : (0, o.jsx)("label", {
                                                        className: "navOption ml-2 menuLink-color ",
                                                        children: "Partner"
                                                    })
                                                })
                                            }), (0, o.jsx)("div", {
                                                className: "d-block menuLink  py-3",
                                                children: (0, o.jsx)("a", {
                                                    href: "/about",
                                                    children: "about" == h[1] ? (0, o.jsx)("label", {
                                                        className: "navOption ml-2 green",
                                                        children: "About"
                                                    }) : (0, o.jsx)("label", {
                                                        className: "navOption ml-2 menuLink-color ",
                                                        children: "About"
                                                    })
                                                })
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "mt-5 pl-4 d-flex",
                                            children: [(0, o.jsx)("a", {
                                                href: "https://app.zestmoney.in/authentication",
                                                className: "",
                                                children: (0, o.jsx)(i.f6, {
                                                    color: "white",
                                                    bg: "black",
                                                    name: "Log in"
                                                })
                                            }), (0, o.jsx)("a", {
                                                className: "ml-5",
                                                href: "https://zestlife.page.link/ct5V",
                                                children: (0, o.jsx)(i.ry, {
                                                    color: "black",
                                                    bg: "white",
                                                    name: "Get the app"
                                                })
                                            })]
                                        })]
                                    }), (0, o.jsx)("div", {
                                        className: "col-6",
                                        children: c ? "" : (0, o.jsx)(i.TR, {})
                                    }), (0, o.jsx)("div", {
                                        className: "col-6",
                                        children: c ? "" : (0, o.jsx)("div", {
                                            onClick: m,
                                            children: (0, o.jsx)(i._p, {})
                                        })
                                    })]
                                })
                            })
                        }), " "]
                    })
                }
        },
        9983: function(e, s, n) {
            "use strict";
            n.d(s, {
                j: function() {
                    return l
                }
            });
            n(7294);
            var t = n(5467),
                a = n(5893),
                l = function(e) {
                    var s = e.data;
                    return (0, a.jsxs)("div", {
                        className: "imgWithDescription container-fluid col-12 ".concat(s.background ? s.background : ""),
                        children: [(0, a.jsx)("div", {
                            className: "IwdHeader",
                            children: (0, a.jsx)("h1", {
                                children: s.header
                            })
                        }), (0, a.jsx)("div", {
                            className: "iwdContent",
                            children: s.content.map((function(e, s) {
                                return (0, a.jsxs)("div", {
                                    className: "iwdItem",
                                    children: [(0, a.jsx)("div", {
                                        className: "iconWrapper",
                                        children: (0, a.jsx)("img", {
                                            src: "".concat(e.icon)
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "iwdItemWrapper",
                                        children: [(0, a.jsx)("div", {
                                            className: "iwdItemHeader",
                                            children: e.heading
                                        }), (0, a.jsx)("div", {
                                            className: "iwd-item-content",
                                            children: e.description
                                        })]
                                    })]
                                })
                            }))
                        }), s.isCta ? (0, a.jsx)("div", {
                            className: "iwd-cta",
                            children: (0, a.jsx)(t.Z, {})
                        }) : ""]
                    })
                }
        },
        7714: function(e, s, n) {
            "use strict";
            n.d(s, {
                BJ: function() {
                    return B
                },
                fx: function() {
                    return z
                },
                SX: function() {
                    return Z
                },
                YA: function() {
                    return O
                },
                un: function() {
                    return c.un
                },
                Ir: function() {
                    return g
                },
                Jr: function() {
                    return P
                },
                gp: function() {
                    return c.gp
                },
                wn: function() {
                    return a.w
                },
                $_: function() {
                    return x.$
                },
                h4: function() {
                    return t.h
                },
                FS: function() {
                    return u
                },
                TR: function() {
                    return a.T
                },
                _p: function() {
                    return o
                },
                wp: function() {
                    return A
                },
                ox: function() {
                    return h.ox
                },
                H7: function() {
                    return h.H7
                },
                Bb: function() {
                    return h.Bb
                },
                Cz: function() {
                    return h.Cz
                },
                $S: function() {
                    return v
                },
                f6: function() {
                    return d
                },
                _V: function() {
                    return _
                },
                Zv: function() {
                    return F
                },
                ry: function() {
                    return m
                },
                Rg: function() {
                    return b.R
                },
                JD: function() {
                    return R
                },
                AM: function() {
                    return N
                }
            });
            var t = n(52),
                a = n(7878),
                l = n(7294),
                i = n(1163),
                r = n(5893),
                o = function() {
                    var e = (0, i.useRouter)();
                    return (0, r.jsx)("div", {
                        children: (e.asPath, (0, r.jsx)("img", {
                            src: "/images/menubtnWhite.png",
                            alt: "ZestMoney",
                            className: "img-fluid menubtn"
                        }))
                    })
                },
                c = n(7788),
                d = function(e) {
                    var s = e.name;
                    e.color, e.bg;
                    return (0, r.jsx)("div", {
                        className: "my-5 zestPrimaryBtn Ag-24px-600 px-3 my-auto text-center btn mx-auto rounded-pill",
                        children: s
                    })
                },
                m = function(e) {
                    var s = e.name,
                        n = e.color;
                    e.bg;
                    return "black" == n ? (0, r.jsx)("div", {
                        className: "zestSecondaryBtn1 px-3 btn Ag-24px-600 text-center rounded-pill",
                        children: s
                    }) : (0, r.jsx)("div", {
                        className: "my-5 zestSecondaryBtn ml-md-3 px-3 my-auto btn Ag-24px-600 text-center rounded-pill",
                        children: s
                    })
                };
            var h = n(6597),
                x = n(1161),
                p = (n(9983), n(3507)),
                u = function() {
                    var e = (0, l.useState)(!1),
                        s = (e[0], e[1]);
                    (0, l.useEffect)((function() {
                        !sessionStorage.getItem("sessionCount") && setTimeout((function() {
                            sessionStorage.setItem("sessionCount", "1"), s(!0)
                        }), 1e3) && console.log(window.history.state)
                    }), []);
                    return (0, r.jsxs)("div", {
                        className: "part part1 homeWall pb-5 minHeight",
                        style: {
                            backgroundColor: "#1FBA68;"
                        },
                        children: [(0, r.jsx)(t.h, {
                            source: "home"
                        }), (0, r.jsx)("div", {
                            className: "col-12 d-lg-none px-0 newhomeBannertab"
                        }), (0, r.jsxs)("div", {
                            className: " d-flex w-100 h-100 bannerPadding position-relative",
                            children: [(0, r.jsx)("div", {
                                className: "newhome-banner d-none d-lg-block col-lg-6 px-0"
                            }), (0, r.jsxs)("div", {
                                className: "  align-self-center text-center col-lg-6",
                                children: [(0, r.jsx)("h1", {
                                    className: "title mt-4 mt-lg-5 text-center mx-auto text-lg-left offset-lg-1 col-12 col-md-10 px-0",
                                    children: "Adjust Nahi, Zest Karo."
                                }), (0, r.jsx)("div", {
                                    className: "desc text-center text-lg-left col-lg-10 mx-auto offset-md-1 mt-md-3 px-0",
                                    children: "A better life is for everyone. ZestMoney makes it possible to upgrade while keeping it affordable! Download the app to experience the smart way to shop!"
                                }), (0, r.jsx)("div", {
                                    className: "homebanner-btn text-center text-lg-left col-10 offset-1 px-0",
                                    children: (0, r.jsx)(p.Z, {
                                        text: "Get Credit Limit Now",
                                        bg: "white",
                                        color: "#1FBA68",
                                        link: "https://zestlife.page.link/ct5V"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "d-none d-lg-flex pb-lg-5 col-10 offset-1",
                                    children: (0, r.jsx)("a", {
                                        href: "#buy",
                                        children: (0, r.jsx)(h.Bb, {})
                                    })
                                })]
                            })]
                        })]
                    })
                },
                g = function() {
                    return (0, r.jsxs)("div", {
                        className: " position-relative part2 minHeight",
                        id: "buy",
                        children: [(0, r.jsx)("div", {
                            className: "imgContainer1 d-lg-flex d-none",
                            children: (0, r.jsx)("img", {
                                className: "homePhone1 col-lg-3 offset-9 p-0",
                                src: "/images/homePhone1.png"
                            })
                        }), (0, r.jsx)("div", {
                            className: "imgContainer2 d-lg-flex d-none",
                            children: (0, r.jsx)("img", {
                                className: "homePhone2 col-lg-5 offset-7 p-0",
                                src: "/images/homePhone2.png"
                            })
                        }), (0, r.jsx)("div", {
                            className: "imgContainer3 d-lg-none",
                            children: (0, r.jsx)("img", {
                                className: "homePhone3 col-md-3 col-lg-3 col-6 p-0",
                                src: "/images/homePhone3.png"
                            })
                        }), (0, r.jsx)("div", {
                            className: "imgContainer2-mob position-absolute d-lg-none",
                            children: (0, r.jsx)("img", {
                                className: "homePhone2-mob",
                                src: "/images/homePhone2-mob.png"
                            })
                        }), (0, r.jsx)("div", {
                            className: "imgContainer1-mob position-absolute d-lg-none",
                            children: (0, r.jsx)("img", {
                                className: "homePhone1-mob",
                                src: "/images/homePhone1-mob.png"
                            })
                        }), (0, r.jsx)("div", {
                            className: "container d-flex align-items-center h-100 mt-5 pt-3",
                            children: (0, r.jsx)("div", {
                                className: "d-flex",
                                children: (0, r.jsxs)("div", {
                                    className: "align-items-center h-100",
                                    children: [(0, r.jsx)("h2", {
                                        className: "buy-title col-10 col-md-10 col-xl-9  position-relative",
                                        children: "Buy in one go, pay in 3 or more"
                                    }), (0, r.jsx)("p", {
                                        className: "Ag-20px-700 buysub col-sm-7 col-12 mt-4",
                                        children: "Enjoy guilt-free shopping - Pay later in 3 parts at 0% interest*. For more convenience, pay in 6, 9, & 12 parts as well."
                                    }), (0, r.jsx)("p", {
                                        className: "Astr mb-0 position-absolute astr-home",
                                        children: "*0% interest applicable only on the Pay-in-3 option/select offerings"
                                    })]
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "justify-content-center d-flex my-5 pb-5",
                            children: (0, r.jsx)("a", {
                                href: "#steps",
                                children: (0, r.jsx)(h.ox, {})
                            })
                        })]
                    })
                },
                j = n(9039),
                f = n.n(j),
                v = function() {
                    return (0, r.jsxs)("div", {
                        className: "".concat(f().PayContainer, " pt-lg-5"),
                        id: "pay",
                        children: [(0, r.jsxs)("div", {
                            className: "row pt-md-5 mx-0 col-md-10 mx-auto px-0",
                            children: [(0, r.jsx)("div", {
                                className: "".concat(f().box2, " col-md-6 order-md-2 order-lg-2 p-0"),
                                children: (0, r.jsx)("img", {
                                    src: "/images/pay.png",
                                    className: "".concat(f().payImage)
                                })
                            }), (0, r.jsxs)("div", {
                                className: "".concat(f().box1, " col-md-6 px-0 col-10 order-lg-1 order-md-1 mx-auto"),
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(f().title, " pay-title  mt-4 mt-md-0  mb-3"),
                                    children: (0, r.jsx)("span", {
                                        className: "",
                                        children: "Less price to pay, more time to pay"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "".concat(f().subTitle, " pay-subTitle pt-3 pl-1 px-0 col-md-11 mb-4 mb-lg-0"),
                                    children: (0, r.jsx)("span", {
                                        className: "",
                                        children: "ZestMoney helps you break down whole payments into smaller manageable payments over 3 or 6,9,12 months, at 0% interest*"
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "py-1 navigation-btn-pos offset-lg-1 mx-md-auto mx-auto pl-lg-0 col-lg-10 col-md-11 pt-lg-5",
                            children: (0, r.jsx)(p.Z, {
                                text: "Download Zest Now!",
                                bg: "black",
                                color: "white",
                                link: "https://zestlife.page.link/ct5V"
                            })
                        }), (0, r.jsx)("div", {
                            className: " mt-5 justify-content-center d-flex mx-lg-auto pb-5 position-relative",
                            style: {
                                zIndex: 1
                            },
                            children: (0, r.jsx)("a", {
                                href: "#reviews",
                                children: (0, r.jsx)(h.Bb, {})
                            })
                        }), (0, r.jsx)("p", {
                            className: "Astr mb-0 position-absolute astr-home2 text-white",
                            children: "*0% interest applicable only on the Pay-in-3 option/select offerings"
                        })]
                    })
                },
                b = n(6439),
                N = function() {
                    return (0, r.jsx)("div", {
                        className: "part4 whyZest-desk",
                        id: "whyZest",
                        children: (0, r.jsxs)("div", {
                            className: "position-relative",
                            children: [(0, r.jsx)("div", {
                                className: "whyZest container position-relative",
                                children: (0, r.jsx)("div", {
                                    className: "",
                                    children: (0, r.jsx)("label", {
                                        className: "text-white zestWhy-title",
                                        children: "5 reasons to Zest"
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "blueWall",
                                children: (0, r.jsxs)("div", {
                                    className: "container ",
                                    children: [(0, r.jsx)(_, {
                                        title: "0% interest*, no joining fees, no hidden charges"
                                    }), (0, r.jsx)("div", {
                                        className: "py-1 ",
                                        children: (0, r.jsx)(_, {
                                            title: "Personalized credit limit of up to 2 lac"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "py-1",
                                        children: (0, r.jsx)(_, {
                                            title: "Accepted at 10,000 online stores and 75,000 physical retail stores"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "py-1",
                                        children: (0, r.jsx)(_, {
                                            title: "3-step fast approval process - no paperwork, no credit card needed "
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "py-1",
                                        children: (0, r.jsx)("div", {
                                            className: " px-4 col-lg-10",
                                            children: (0, r.jsx)("label", {
                                                className: "text-white py-4 Ag-20px-600 w-100",
                                                children: "\u2022\xa017+ million registered users, 4.4 app rating on Play Store"
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "py-3 navigation-btn-pos mb-4 pl-3",
                                        children: (0, r.jsx)(p.Z, {
                                            text: "Download Zest Now!",
                                            bg: "white",
                                            color: "white",
                                            link: "https://zestlife.page.link/ct5V"
                                        })
                                    }), (0, r.jsx)("p", {
                                        className: "Astr mb-0 position-absolute text-white astr-home1",
                                        children: "*0% interest applicable only on the Pay-in-3 option/select offerings"
                                    }), (0, r.jsx)("div", {
                                        className: "justify-content-center d-flex pb-5",
                                        children: (0, r.jsx)("a", {
                                            href: "#check",
                                            className: "position-relative",
                                            style: {
                                                zIndex: 1
                                            },
                                            children: (0, r.jsx)(h.Bb, {})
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                y = n(9499),
                w = (n(8322), n(8745), n(6066));

            function k(e, s) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    s && (t = t.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), n.push.apply(n, t)
                }
                return n
            }

            function C(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var n = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? k(Object(n), !0).forEach((function(s) {
                        (0, y.Z)(e, s, n[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s))
                    }))
                }
                return e
            }
            var P = function(e) {
                    var s = (0, l.useState)(!0),
                        n = s[0],
                        t = s[1],
                        a = (0, l.useState)(!1),
                        i = a[0],
                        o = a[1],
                        d = (0, l.useRef)(),
                        m = function() {
                            d.current.slickNext()
                        },
                        x = function() {
                            d.current.slickPrev()
                        },
                        p = {
                            infinite: !1,
                            slidesToShow: 4.3,
                            slidesToScroll: 1,
                            arrow: !1,
                            afterChange: function(e) {
                                return function(e) {
                                    o(0 !== e)
                                }(e)
                            },
                            beforeChange: function(e, s) {
                                t(e !== s || 0 === s)
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
                                    slidesToShow: 1.99,
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
                        };
                    return (0, r.jsxs)("div", {
                        className: "part 5 py-5 position-relative",
                        id: "check",
                        children: ["cat" == e.path ? "" : (0, r.jsxs)("div", {
                            className: "imgContainer5 position-absolute d-lg-block d-md-block ",
                            children: [(0, r.jsx)("img", {
                                className: "homePhone7 position-absolute",
                                src: "/images/homePhone7.png"
                            }), (0, r.jsx)("img", {
                                className: "homePhone6 position-absolute",
                                src: "/images/homePhone6.png"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "container check-title pt-5",
                            children: (0, r.jsx)("h3", {
                                className: "cat" == e.path ? "Ag-72 position-relative checkTitle " : "Ag-72 position-relative checkTitle col-12",
                                style: {
                                    zIndex: 1
                                },
                                children: "Check anything out, checkout with Zest"
                            })
                        }), (0, r.jsx)("div", {
                            className: "desktop"
                        }), (0, r.jsxs)("div", {
                            className: "",
                            children: [(0, r.jsxs)("div", {
                                className: "cat" == e.path ? "offset-1 slicker-container offset-xl-1  mt-5" : "offset-1 slicker-container offset-xl-1 pl-xl-5 mt-5",
                                children: ["cat" == e.path ? (0, r.jsx)("div", {
                                    className: "pb-lg-5 pl-xl-5  d-lg-none mb-5",
                                    children: (0, r.jsx)("div", {
                                        className: "col-11 col-md-7 mt-2 px-0",
                                        children: (0, r.jsx)("a", {
                                            href: "https://zestlife.page.link/ct5V",
                                            children: (0, r.jsx)(c.un, {
                                                color: "green",
                                                bg: "green",
                                                name: "DOWNLOAD ZEST NOW!"
                                            })
                                        })
                                    })
                                }) : "", (0, r.jsxs)("div", {
                                    className: "ml-xl-5",
                                    children: [!1 === i ? (0, r.jsx)("button", {
                                        className: "btn custom-slicker-btn p-0",
                                        onClick: x,
                                        children: (0, r.jsx)("img", {
                                            src: "/images/leftArrow.png"
                                        })
                                    }) : (0, r.jsx)("button", {
                                        className: "btn custom-slicker-btn p-0",
                                        onClick: x,
                                        children: (0, r.jsx)("img", {
                                            src: "/images/leftArrowDark.png"
                                        })
                                    }), !0 === n ? (0, r.jsx)("button", {
                                        className: "btn custom-slicker-btn p-0 ml-4",
                                        onClick: m,
                                        children: (0, r.jsx)("img", {
                                            src: "/images/rightArrow.png"
                                        })
                                    }) : (0, r.jsx)("button", {
                                        className: "btn custom-slicker-btn p-0 ml-4",
                                        onClick: m,
                                        children: (0, r.jsx)("img", {
                                            src: "/images/rightArrowLight.png"
                                        })
                                    })]
                                }), (0, r.jsxs)(w.Z, C(C({
                                    ref: d
                                }, p), {}, {
                                    className: "ml-xl-5 slider-my-container",
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsx)("a", {
                                            href: "/fashion",
                                            children: (0, r.jsxs)("div", {
                                                className: "position-relative col-lg-10 col-md-10 p-0 col-10",
                                                children: [(0, r.jsx)("img", {
                                                    src: "/images/cardI.png",
                                                    className: "slicker-card"
                                                }), (0, r.jsx)("div", {
                                                    className: "position-absolute",
                                                    style: {
                                                        top: "0",
                                                        left: "0",
                                                        display: "flex",
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    children: (0, r.jsx)("div", {
                                                        className: "card-img-overlay d-flex flex-column justify-content-around",
                                                        children: (0, r.jsx)("p", {
                                                            className: "card-text text-white text-center Ag-32",
                                                            children: "Fashion"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        children: (0, r.jsx)("a", {
                                            href: "/travel",
                                            children: (0, r.jsxs)("div", {
                                                className: "position-relative col-lg-10 col-md-10 p-0 col-10",
                                                children: [(0, r.jsx)("img", {
                                                    src: "/images/cardII.png",
                                                    className: "slicker-card"
                                                }), (0, r.jsx)("div", {
                                                    className: "position-absolute",
                                                    style: {
                                                        top: "0",
                                                        left: "0",
                                                        display: "flex",
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    children: (0, r.jsx)("div", {
                                                        className: "card-img-overlay d-flex flex-column justify-content-around",
                                                        children: (0, r.jsx)("p", {
                                                            className: "card-text text-white text-center Ag-32",
                                                            children: "Travel"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        children: (0, r.jsx)("a", {
                                            href: "/category",
                                            children: (0, r.jsxs)("div", {
                                                className: "position-relative col-lg-10 col-md-10 p-0 col-10",
                                                children: [(0, r.jsx)("img", {
                                                    src: "/images/cardIII.png",
                                                    className: "slicker-card"
                                                }), (0, r.jsx)("div", {
                                                    className: "position-absolute",
                                                    style: {
                                                        top: "0",
                                                        left: "0",
                                                        display: "flex",
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    children: (0, r.jsx)("div", {
                                                        className: "card-img-overlay d-flex flex-column justify-content-around",
                                                        children: (0, r.jsx)("p", {
                                                            className: "card-text text-white text-center Ag-32",
                                                            children: "Gadgets"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        children: (0, r.jsx)("a", {
                                            href: "/durable",
                                            children: (0, r.jsxs)("div", {
                                                className: "position-relative col-lg-10 col-md-10 p-0 col-10",
                                                children: [(0, r.jsx)("img", {
                                                    src: "/images/cardIV.png",
                                                    className: "slicker-card"
                                                }), (0, r.jsx)("div", {
                                                    className: "position-absolute",
                                                    style: {
                                                        top: "0",
                                                        left: "0",
                                                        display: "flex",
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    children: (0, r.jsx)("div", {
                                                        className: "card-img-overlay d-flex flex-column justify-content-around",
                                                        children: (0, r.jsx)("p", {
                                                            className: "card-text text-white text-center Ag-32",
                                                            children: "Home"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        children: (0, r.jsx)("a", {
                                            href: "/edtech",
                                            children: (0, r.jsxs)("div", {
                                                className: "position-relative col-lg-10 col-md-10 p-0 col-10",
                                                children: [(0, r.jsx)("img", {
                                                    src: "/images/edtech.jpg",
                                                    className: "slicker-card"
                                                }), (0, r.jsx)("div", {
                                                    className: "position-absolute",
                                                    style: {
                                                        top: "0",
                                                        left: "0",
                                                        display: "flex",
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    children: (0, r.jsx)("div", {
                                                        className: "card-img-overlay d-flex flex-column justify-content-around",
                                                        children: (0, r.jsx)("p", {
                                                            className: "card-text text-white text-center Ag-32",
                                                            children: "Edtech"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })), "cat" == e.path ? (0, r.jsx)("div", {
                                    className: "pb-lg-5 pl-xl-5 d-none d-lg-block",
                                    children: (0, r.jsx)("div", {
                                        className: "mt-5 p-0",
                                        children: (0, r.jsx)("a", {
                                            href: "https://zestlife.page.link/ct5V",
                                            children: (0, r.jsx)(c.un, {
                                                color: "green",
                                                bg: "green",
                                                name: "DOWNLOAD ZEST NOW!"
                                            })
                                        })
                                    })
                                }) : ""]
                            }), "home" == e.path ? (0, r.jsx)("div", {
                                className: "justify-content-center d-flex py-5 mt-3",
                                children: (0, r.jsx)("a", {
                                    href: "#certificate",
                                    children: (0, r.jsx)(h.ox, {})
                                })
                            }) : (0, r.jsx)("div", {
                                className: "d-flex ml-lg-5 mx-3 px-4 pt-3 pl-0",
                                children: (0, r.jsx)("a", {
                                    href: "#footer",
                                    children: (0, r.jsx)(h.H7, {})
                                })
                            })]
                        })]
                    })
                },
                I = n(69),
                S = n.n(I),
                F = function() {
                    return (0, r.jsxs)("div", {
                        className: "ReviewContainer bg-grey px-3 px-lg-0 pb-lg-5 position-relative",
                        id: "reviews",
                        children: [(0, r.jsx)("div", {
                            className: "imgContainer4 position-absolute d-none d-lg-block",
                            children: (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("img", {
                                    className: "homePhone4 position-absolute",
                                    src: "/images/homePhone4.png"
                                }), (0, r.jsx)("img", {
                                    className: "homePhone5",
                                    src: "/images/homePhone5.png"
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "imgContainer4-mob position-absolute d-lg-none",
                            children: (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("img", {
                                    className: "homePhone4-mob",
                                    src: "/images/homePhone4-mob.png"
                                }), (0, r.jsx)("img", {
                                    className: "homePhone5-mob position-absolute",
                                    src: "/images/homePhone5-mob.png"
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "".concat(S().title, " col-lg-7 offset-lg-1 mb-lg-5 pb-lg-5"),
                            children: (0, r.jsxs)("span", {
                                className: "mb-5",
                                children: ["Don't Take ", (0, r.jsx)("br", {}), " Our Word For It"]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "d-flex flex-column flex-lg-row col-lg-10 offset-lg-1 p-0 mt-4 mt-lg-0",
                            children: [(0, r.jsxs)("div", {
                                className: "".concat(S().star, " d-flex order-lg-3 pl-3"),
                                children: [(0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("p", {
                                    className: "".concat(S().rating, " p-0"),
                                    children: "5/5"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "order-lg-2 flex-grow-1 px-4",
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(S().reviewText),
                                    children: (0, r.jsx)("span", {
                                        children: '"Service you cannot get in a bank if you had no credit score!"'
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "".concat(S().custName),
                                    children: (0, r.jsx)("span", {
                                        children: "Huveto Khamo"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "".concat(S().custImage, " order-lg-1 ml-3"),
                                children: (0, r.jsx)("img", {
                                    src: "/images/personIcon.png"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "px-4",
                            children: (0, r.jsx)("div", {
                                className: "".concat(S().profileSeparator, " col-lg-10 offset-lg-1 d-none d-lg-block my-5")
                            })
                        }), (0, r.jsxs)("div", {
                            className: "d-flex flex-column flex-lg-row col-lg-10 offset-lg-1 p-0 mt-4 mt-lg-0",
                            children: [(0, r.jsxs)("div", {
                                className: "".concat(S().star, " d-flex order-lg-3 pl-3"),
                                children: [(0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/greyStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("p", {
                                    className: "".concat(S().rating, " p-0"),
                                    children: "4/5"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "order-lg-2 flex-grow-1 px-4",
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(S().reviewText),
                                    children: (0, r.jsx)("span", {
                                        children: '"8 loans in 2 years. No hassles and quick. I do not need a credit card to shop!"'
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "".concat(S().custName),
                                    children: (0, r.jsx)("span", {
                                        children: "Ritesh Rai"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "".concat(S().custImage, " order-lg-1 ml-3"),
                                children: (0, r.jsx)("img", {
                                    src: "/images/personIcon.png"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "px-4",
                            children: (0, r.jsx)("div", {
                                className: "".concat(S().profileSeparator, " col-lg-10 offset-lg-1 d-none d-lg-block my-5")
                            })
                        }), (0, r.jsxs)("div", {
                            className: "d-flex flex-column flex-lg-row col-lg-10 offset-lg-1 p-0 mt-4 mt-lg-0",
                            children: [(0, r.jsxs)("div", {
                                className: "".concat(S().star, " d-flex  order-lg-3 pl-3"),
                                children: [(0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("img", {
                                    src: "/images/fullStar.png",
                                    className: "".concat(S().starImage)
                                }), (0, r.jsx)("p", {
                                    className: "".concat(S().rating, " p-0"),
                                    children: "5/5"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "order-lg-2 flex-grow-1 px-4",
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(S().reviewText),
                                    children: (0, r.jsx)("span", {
                                        children: '"No additional charges, no processing fee, no hidden charges. Just quick disbursement!"'
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "".concat(S().custName),
                                    children: (0, r.jsx)("span", {
                                        children: "Ravindra Prasad Pelluru"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "".concat(S().custImage, " order-lg-1 ml-3"),
                                children: (0, r.jsx)("img", {
                                    src: "/images/personIcon.png"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: " px-4",
                            children: (0, r.jsx)("div", {
                                className: "".concat(S().profileSeparator, " col-lg-10 offset-lg-1 d-none d-lg-block my-5")
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-4 pb-5 d-lg-none"
                        })]
                    })
                },
                A = function() {
                    var e = (0, i.useRouter)().asPath.split("/");
                    return (0, r.jsx)("div", {
                        className: "menuLink Navbar",
                        children: (0, r.jsxs)("div", {
                            className: "container d-flex",
                            style: {
                                position: "absolute",
                                bottom: 0
                            },
                            children: [(0, r.jsx)("a", {
                                href: "/",
                                className: "nav-content",
                                children: "" == e[1] ? (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace  border-bottom-1 border-white",
                                    children: "Home"
                                }) : (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace",
                                    children: "Home"
                                })
                            }), (0, r.jsx)("a", {
                                href: "/shop",
                                className: "nav-content",
                                children: "shop" == e[1] ? (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace border-bottom-1 border-white",
                                    children: "Shop"
                                }) : (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace",
                                    children: "Shop"
                                })
                            }), (0, r.jsx)("a", {
                                href: "/partner-with-us",
                                className: "nav-content",
                                children: "partner-with-us" == e[1] ? (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace border-bottom-1 border-white",
                                    children: "Partner"
                                }) : (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace",
                                    children: "Partner"
                                })
                            }), (0, r.jsx)("a", {
                                href: "/about",
                                className: "nav-content",
                                children: "about" == e[1] ? (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace border-bottom-1 border-white",
                                    children: "About"
                                }) : (0, r.jsx)("label", {
                                    className: "Ag-24px-600 text-center linkspace",
                                    children: "About"
                                })
                            })]
                        })
                    })
                },
                R = function(e) {
                    var s = e.title,
                        n = e.number,
                        t = e.desc;
                    return (0, r.jsxs)("div", {
                        className: " col-lg-4 col-12 stepCard pt-5",
                        children: [(0, r.jsxs)("div", {
                            className: "d-flex align-item-center",
                            children: [(0, r.jsx)("div", {
                                className: " text-center",
                                style: {
                                    backgroundColor: "black",
                                    borderRadius: "50%",
                                    color: "white",
                                    width: "40px",
                                    height: "40px",
                                    border: "1px solid black"
                                },
                                children: (0, r.jsx)("label", {
                                    className: "text-center my-1",
                                    style: {
                                        fontSize: "20px",
                                        fontWeight: 600
                                    },
                                    children: n
                                })
                            }), (0, r.jsx)("h3", {
                                className: "Ag-36 mx-3 my-1",
                                children: s
                            })]
                        }), (0, r.jsx)("p", {
                            className: "my-3 Ag-20px ",
                            children: t
                        })]
                    })
                },
                _ = function(e) {
                    var s = e.title;
                    return (0, r.jsx)("div", {
                        className: " px-4 col-lg-10",
                        children: (0, r.jsxs)("label", {
                            className: "text-white py-4 Ag-20px-600 w-100 reasonCard-border",
                            children: ["\u2022\xa0", s]
                        })
                    })
                },
                T = n(3555),
                B = function() {
                    return (0, r.jsxs)("div", {
                        className: "BoltWall",
                        children: [(0, r.jsx)(t.h, {
                            source: "bolt"
                        }), (0, r.jsxs)("div", {
                            className: "bannerContainer1 position-relative ",
                            children: [(0, r.jsx)("div", {
                                className: "boltPhone-Container1 position-absolute d-none d-md-block",
                                children: (0, r.jsx)("img", {
                                    className: "boltPhone3",
                                    src: "/images/boltBDR3.png"
                                })
                            }), (0, r.jsx)("div", {
                                className: "row w-100 pb-5 pt-md-5 text-center mx-0",
                                children: (0, r.jsxs)("div", {
                                    className: "col-12 bannerText pt-3 pt-md-5 pb-5 px-0",
                                    children: [(0, r.jsxs)("div", {
                                        className: "text-capitalize bannerTitle geoMed mb-3  d-block d-md-flex justify-content-md-center",
                                        children: [(0, r.jsx)("div", {
                                            className: "",
                                            children: T.RR.banner["mini-title"]
                                        }), (0, r.jsx)("img", {
                                            className: "boltIcon",
                                            src: "/images/BOLT-21.png"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "bannerSubtitle col-lg-6 py-4 pb-lg-5 mb-md-5 col-11 mx-auto",
                                        children: T.RR.banner.title
                                    })]
                                })
                            })]
                        })]
                    })
                },
                L = n(4872),
                z = function() {
                    return (0, r.jsx)("div", {
                        className: "BoltInfo",
                        children: (0, r.jsxs)("div", {
                            className: "bannerContainer2 px-lg-0 container mx-auto row  w-100 pb-5 m-0 col-lg-10",
                            children: [(0, r.jsxs)("div", {
                                className: "col-11 text-capitalize boltFAQTitle px-lg-0",
                                children: ["frequently ", (0, r.jsx)("br", {}), "asked questions"]
                            }), (0, r.jsx)("div", {
                                className: "row",
                                children: T.RR.accord.map((function(e) {
                                    return (0, r.jsxs)("div", {
                                        className: "questionContainer col-lg-6 px-4 px-lg-3",
                                        children: [(0, r.jsx)("div", {
                                            className: "boltFAQSub text-capitalize mt-3",
                                            children: e.title
                                        }), (0, r.jsx)(L.b, {
                                            item: e.content
                                        })]
                                    })
                                }))
                            })]
                        })
                    })
                },
                Z = function() {
                    return (0, r.jsx)("div", {
                        className: "BoltInfo",
                        children: (0, r.jsxs)("div", {
                            className: "bannerContainer3 row  w-100 pb-5 m-0 infoContainer position-relative",
                            children: [(0, r.jsxs)("div", {
                                className: "boltPhone-container2 position-absolute d-none d-lg-block",
                                children: [(0, r.jsx)("img", {
                                    className: "boltPhone1",
                                    src: "/images/boltBDR1.png"
                                }), (0, r.jsx)("img", {
                                    className: "boltPhone2 position-absolute",
                                    src: "/images/boltBDR2.png"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "boltPhone-container1-mob position-absolute d-md-none",
                                children: [(0, r.jsx)("img", {
                                    className: "boltPhone1-mob",
                                    src: "/images/boltPhone1-mob.png"
                                }), (0, r.jsx)("img", {
                                    className: "boltPhone2-mob position-absolute",
                                    src: "/images/boltPhone2-mob.png"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "col-lg-4 col-md-4 offset-1 pl-2 mt-5 order-lg-2 order-md-2",
                                children: T.RR.Info.map((function(e) {
                                    return (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("div", {
                                            className: "boltInfoQ mb-4",
                                            children: e.Qn
                                        }), (0, r.jsx)("div", {
                                            className: "boltInfoAns col-11 col-lg-12 col-md-12 px-0",
                                            children: e.ans
                                        })]
                                    })
                                }))
                            }), (0, r.jsx)("div", {
                                className: "col-lg-5 col-md-5 offset-md-1 offset-lg-1 infoImgContainer",
                                children: (0, r.jsx)("img", {
                                    className: "boltInfoPhone",
                                    src: "/images/boltInfoPhone1.png"
                                })
                            })]
                        })
                    })
                },
                O = function() {
                    return (0, r.jsx)("div", {
                        className: " py-5 row  w-100 pb-5 boltMsgContainer m-0",
                        children: (0, r.jsx)("div", {
                            className: "container justify-content-sm-center d-flex flex-column justify-content-md-start ml-lg-5 pl-lg-5 pt-lg-5",
                            children: (0, r.jsxs)("div", {
                                className: "ml-lg-4",
                                children: [(0, r.jsx)("div", {
                                    className: "",
                                    children: (0, r.jsx)("div", {
                                        className: " messageTitle  px-lg-0  px-md-0 ",
                                        children: "Not able to find answer to your question?"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "justify-content-center col-lg-10 col-md-12 messageSub col-12  mt-lg-5 my-4 mb-md-5 pl-0 ",
                                    children: ["Please reach out to us at", " ", (0, r.jsx)("label", {
                                        className: "msg-mail",
                                        children: "help@zestmoney.in"
                                    }), " and one of our support executive will contact you within 24 hours."]
                                })]
                            })
                        })
                    })
                }
        },
        4872: function(e, s, n) {
            "use strict";
            n.d(s, {
                b: function() {
                    return r
                }
            });
            var t = n(7294),
                a = n(6545),
                l = (n(7719), n(653)),
                i = n(5893),
                r = function(e) {
                    var s = (0, t.useState)(!1),
                        n = (s[0], s[1], (0, t.useState)(!1)),
                        r = (n[0], n[1], (0, t.useState)(!1));
                    r[0], r[1];
                    return (0, i.jsx)(a.UQ, {
                        allowZeroExpanded: !0,
                        children: e.item.map((function(e) {
                            return (0, i.jsxs)(a.Qd, {
                                children: [(0, i.jsx)(a.Ol, {
                                    children: (0, i.jsxs)(a.on, {
                                        className: "row justify-content-between py-5",
                                        children: [(0, i.jsx)("h3", {
                                            className: "col-10 Accordion-Qn",
                                            children: e.Qn
                                        }), (0, i.jsx)(a.CB, {
                                            children: function(e) {
                                                return e.expanded ? (0, i.jsx)("img", {
                                                    className: "mr-3 align-self-center h-50 rotated",
                                                    src: "/images/downIcon.png"
                                                }) : (0, i.jsx)("img", {
                                                    className: "mr-3 align-self-center h-50",
                                                    src: "/images/downIcon.png"
                                                })
                                            }
                                        })]
                                    })
                                }), (0, i.jsx)(a.Mt, {
                                    className: "pb-lg-5 pb-3 col-10 px-0",
                                    children: (0, i.jsx)("p", {
                                        className: "Accordion-ans",
                                        children: (0, l.ZP)(e.ans)
                                    })
                                })]
                            })
                        }))
                    })
                }
        },
        5467: function(e, s, n) {
            "use strict";
            var t = n(29),
                a = n(7794),
                l = n.n(a),
                i = n(1163),
                r = n(7294),
                o = n(7714),
                c = n(8313),
                d = n(7536),
                m = n(9669),
                h = n.n(m),
                x = n(5247),
                p = n(1554),
                u = n.n(p),
                g = n(5893);
            (0, x.S1)("ALtS-oxNCPoaLY5xb"), s.Z = function(e) {
                (0, i.useRouter)().asPath, (0, r.useEffect)((function() {
                    C(), localStorage.getItem("hit") ? (F(!0), A()) : F(!1)
                }), []);
                var s = (0, r.useState)(!1),
                    n = s[0],
                    a = s[1],
                    m = (0, r.useState)(""),
                    x = (m[0], m[1]),
                    p = (0, r.useState)(""),
                    j = p[0],
                    f = p[1],
                    v = (0, r.useState)(!1),
                    b = v[0],
                    N = v[1],
                    y = (0, r.useState)(!0),
                    w = y[0],
                    k = y[1],
                    C = function() {
                        var e = (0, t.Z)(l().mark((function e() {
                            var s;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h().get("https://geolocation-db.com/json/");
                                    case 2:
                                        s = e.sent, console.log(s.data), f(s.data.IPv4);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    P = (0, r.useState)(!1),
                    I = (P[0], P[1], (0, r.useState)(!1)),
                    S = I[0],
                    F = I[1],
                    A = function() {
                        console.log(j), a(!0), console.log(window.history)
                    },
                    R = function() {
                        T(), a(!1), F(!1), localStorage.removeItem("hit")
                    },
                    _ = (0, d.cI)(),
                    T = (_.register, _.handleSubmit, _.reset),
                    B = _.formState.errors,
                    L = function() {
                        var e = (0, t.Z)(l().mark((function e() {
                            var s;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        s = {
                                            method: "post",
                                            url: "https://zestmoney.my.salesforce.com/services/oauth2/token?client_id=3MVG9YDQS5WtC11oBAWq.mmfQwyxzp2fQ5sJoh0FylT65SJeo6BczzwT_JXh4oRsMUAaXhqJ.4.Bvf9ykkKFZ&client_secret=8576256114121081226&username=rajasekhar@zestmoney.in&password=zmsf@123&grant_type=password",
                                            headers: {
                                                accept: "application/json",
                                                "content-type": "application/x-www-form-urlencoded",
                                                Cookie: "BrowserId=yASqYo_JEeyTeeGiPjc-Gw; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1; BrowserId=DBXvtY2KEeyzrUN8AJbEIg"
                                            }
                                        }, h()(s).then((function(e) {
                                            console.log(JSON.stringify(e.data.access_token)), x(e.data.access_token)
                                        })).catch((function(e) {
                                            console.log(e)
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, g.jsx)(g.Fragment, {
                    children: (0, g.jsxs)("div", {
                        className: "stats-button",
                        children: [(0, g.jsx)("div", {
                            className: "sell-btn",
                            onClick: function() {
                                A(), L()
                            },
                            children: (0, g.jsx)(o.un, {
                                color: "green",
                                bg: "#1FBA68",
                                name: "PARTNER WITH US"
                            })
                        }), (0, g.jsxs)(c.Z, {
                            className: "partnerForm-modal",
                            show: n,
                            onHide: R,
                            centered: !0,
                            size: "xl",
                            children: [(0, g.jsx)(c.Z.Header, {
                                className: "position-relative cardless-modalHeader position-relative",
                                children: (0, g.jsx)("img", {
                                    src: "/images/closeIcon.png",
                                    onClick: R,
                                    className: "cardless-modalClose"
                                })
                            }), !1 === S ? (0, g.jsxs)(c.Z.Body, {
                                className: "partnerForm-modalBody",
                                children: [(0, g.jsx)("p", {
                                    className: "pt-5 text-center geoMed partnerForm-modaltitle",
                                    children: "Please fill this form and one of our account managers will get in touch with you"
                                }), (0, g.jsxs)("form", {
                                    className: w ? "col-10 px-0 mx-auto" : "col-10 px-0 mx-auto catcolor",
                                    onSubmit: function(e) {
                                        console.log("form function"), localStorage.setItem("hit", "true")
                                    },
                                    action: "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
                                    method: "POST",
                                    onChange: function() {
                                        F(!1)
                                    },
                                    id: "partnerform",
                                    children: [(0, g.jsxs)("div", {
                                        className: "d-lg-flex justify-content-between",
                                        children: [(0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("input", {
                                                type: "hidden",
                                                name: "oid",
                                                value: "00D6F000001P9tq"
                                            }), (0, g.jsx)("input", {
                                                type: "hidden",
                                                name: "Source_IP__c",
                                                value: j
                                            }), (0, g.jsx)("input", {
                                                type: "hidden",
                                                name: "retURL",
                                                value: "https://zestmoney.in/partner-with-us/"
                                            }), (0, g.jsx)("label", {
                                                htmlFor: "last_name",
                                                className: "geoReg partnerForm-label",
                                                children: "Name"
                                            }), (0, g.jsx)("input", {
                                                className: "partnerForm-modalInput",
                                                id: "last_name",
                                                maxLength: 80,
                                                name: "last_name",
                                                "aria-setsize": 20,
                                                type: "text",
                                                required: !0
                                            })]
                                        }), "\u200b", " ", (0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                htmlFor: "email",
                                                className: "geoReg partnerForm-label",
                                                children: "Email"
                                            }), (0, g.jsx)("input", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "email",
                                                maxLength: 80,
                                                name: "email",
                                                "aria-setsize": 20,
                                                type: "email"
                                            })]
                                        })]
                                    }), "\u200b", (0, g.jsxs)("div", {
                                        className: "d-lg-flex justify-content-between",
                                        children: [(0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "mobile",
                                                children: "Mobile"
                                            }), (0, g.jsx)("input", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "mobile",
                                                maxLength: 10,
                                                name: "mobile",
                                                "aria-setsize": 20,
                                                pattern: "[6789][0-9]{9}",
                                                type: "tel",
                                                onKeyDown: function(e) {
                                                    var s;
                                                    (function(e) {
                                                        var s = e.keyCode;
                                                        return s >= 48 && s <= 57 || s >= 96 && s <= 105
                                                    })(s = e) || function(e) {
                                                        var s = e.keyCode;
                                                        return !0 === e.shiftKey || 35 === s || 36 === s || 8 === s || 9 === s || 13 === s || 46 === s || s > 36 && s < 41 || (!0 === e.ctrlKey || !0 === e.metaKey) && (65 === s || 67 === s || 86 === s || 88 === s || 90 === s)
                                                    }(s) || s.preventDefault()
                                                }
                                            })]
                                        }), (0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "company",
                                                children: "Company"
                                            }), (0, g.jsx)("input", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "company",
                                                maxLength: 40,
                                                name: "company",
                                                "aria-setsize": 20,
                                                type: "text"
                                            })]
                                        })]
                                    }), (0, g.jsxs)("div", {
                                        className: "d-lg-flex justify-content-between",
                                        children: [(0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "city",
                                                children: "Headquartered City"
                                            }), (0, g.jsx)("input", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "00N0K00000LGj1S",
                                                maxLength: 200,
                                                name: "00N0K00000LGj1S",
                                                "aria-setsize": 20,
                                                type: "text"
                                            })]
                                        }), (0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "url",
                                                children: "Website"
                                            }), (0, g.jsx)("input", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "url",
                                                maxLength: 80,
                                                name: "url",
                                                "aria-setsize": 20,
                                                pattern: "http(s)?:\\/\\/.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&=]*"
                                            })]
                                        })]
                                    }), (0, g.jsxs)("div", {
                                        className: "d-lg-flex justify-content-between",
                                        children: [(0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "industry",
                                                children: "Industry"
                                            }), (0, g.jsxs)("select", {
                                                className: "partnerForm-modalInput",
                                                id: "industry",
                                                name: "industry",
                                                required: !0,
                                                defaultValue: "",
                                                children: [(0, g.jsx)("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    selected: !0,
                                                    hidden: !0
                                                }), (0, g.jsx)("option", {
                                                    value: "Agriculture",
                                                    children: "Agriculture"
                                                }), (0, g.jsx)("option", {
                                                    value: "Apparel",
                                                    children: "Apparel"
                                                }), (0, g.jsx)("option", {
                                                    value: "Banking",
                                                    children: "Banking"
                                                }), (0, g.jsx)("option", {
                                                    value: "Beauty & Wellness",
                                                    children: "Beauty & Wellness"
                                                }), (0, g.jsx)("option", {
                                                    value: "Biotechnology",
                                                    children: "Biotechnology"
                                                }), (0, g.jsx)("option", {
                                                    value: "Chemicals",
                                                    children: "Chemicals"
                                                }), (0, g.jsx)("option", {
                                                    value: "Communications",
                                                    children: "Communications"
                                                }), (0, g.jsx)("option", {
                                                    value: "Construction",
                                                    children: "Construction"
                                                }), (0, g.jsx)("option", {
                                                    value: "Consulting",
                                                    children: "Consulting"
                                                }), (0, g.jsx)("option", {
                                                    value: "Education",
                                                    children: "Education"
                                                }), (0, g.jsx)("option", {
                                                    value: "Electronics",
                                                    children: "Electronics"
                                                }), (0, g.jsx)("option", {
                                                    value: "Energy",
                                                    children: "Energy"
                                                }), (0, g.jsx)("option", {
                                                    value: "Engineering",
                                                    children: "Engineering"
                                                }), (0, g.jsx)("option", {
                                                    value: "Entertainment",
                                                    children: "Entertainment"
                                                }), (0, g.jsx)("option", {
                                                    value: "Environmental",
                                                    children: "Environmental"
                                                }), (0, g.jsx)("option", {
                                                    value: "Finance",
                                                    children: "Finance"
                                                }), (0, g.jsx)("option", {
                                                    value: "Food & Beverage",
                                                    children: "Food & Beverage"
                                                }), (0, g.jsx)("option", {
                                                    value: "Government",
                                                    children: "Government"
                                                }), (0, g.jsx)("option", {
                                                    value: "Healthcare",
                                                    children: "Healthcare"
                                                }), (0, g.jsx)("option", {
                                                    value: "Hospitality",
                                                    children: "Hospitality"
                                                }), (0, g.jsx)("option", {
                                                    value: "Insurance",
                                                    children: "Insurance"
                                                }), (0, g.jsx)("option", {
                                                    value: "Machinery",
                                                    children: "Machinery"
                                                }), (0, g.jsx)("option", {
                                                    value: "Manufacturing",
                                                    children: "Manufacturing"
                                                }), (0, g.jsx)("option", {
                                                    value: "Media",
                                                    children: "Media"
                                                }), (0, g.jsx)("option", {
                                                    value: "Not For Profit",
                                                    children: "Not For Profit"
                                                }), (0, g.jsx)("option", {
                                                    value: "Pet Care",
                                                    children: "Pet Care"
                                                }), (0, g.jsx)("option", {
                                                    value: "Recreation",
                                                    children: "Recreation"
                                                }), (0, g.jsx)("option", {
                                                    value: "Retail",
                                                    children: "Retail"
                                                }), (0, g.jsx)("option", {
                                                    value: "Shipping",
                                                    children: "Shipping"
                                                }), (0, g.jsx)("option", {
                                                    value: "Technology",
                                                    children: "Technology"
                                                }), (0, g.jsx)("option", {
                                                    value: "Telecommunications",
                                                    children: "Telecommunications"
                                                }), (0, g.jsx)("option", {
                                                    value: "Transportation",
                                                    children: "Transportation"
                                                }), (0, g.jsx)("option", {
                                                    value: "Utilities",
                                                    children: "Utilities"
                                                }), (0, g.jsx)("option", {
                                                    value: "Furniture",
                                                    children: "Furniture"
                                                }), (0, g.jsx)("option", {
                                                    value: "Other",
                                                    children: "Other"
                                                })]
                                            })]
                                        }), (0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "revenue",
                                                children: "Approx Company revenue per year:"
                                            }), (0, g.jsxs)("select", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "00N2x000008P51b",
                                                name: "00N2x000008P51b",
                                                title: "Approx Company revenue per year",
                                                defaultValue: "",
                                                children: [(0, g.jsx)("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    selected: !0,
                                                    hidden: !0
                                                }), (0, g.jsx)("option", {
                                                    value: "Less than Rs. 50L",
                                                    children: "Less than Rs. 50L"
                                                }), (0, g.jsx)("option", {
                                                    value: "51L to 1CR",
                                                    children: "51L to 1CR"
                                                }), (0, g.jsx)("option", {
                                                    value: "1CR to 10CR",
                                                    children: "1CR to 10CR"
                                                }), (0, g.jsx)("option", {
                                                    value: "50CR to 100CR",
                                                    children: "50CR to 100CR"
                                                }), (0, g.jsx)("option", {
                                                    value: "100CR to 500CR",
                                                    children: "100CR to 500CR"
                                                }), (0, g.jsx)("option", {
                                                    value: "More than 500CR",
                                                    children: "More than 500CR"
                                                })]
                                            })]
                                        })]
                                    }), (0, g.jsxs)("div", {
                                        className: "d-lg-flex justify-content-between",
                                        children: [(0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "webtech",
                                                children: "Website Technology"
                                            }), (0, g.jsxs)("select", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "00N2x000008P51W",
                                                name: "00N2x000008P51W",
                                                title: "Website Technology",
                                                defaultValue: "",
                                                children: [(0, g.jsx)("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    selected: !0,
                                                    hidden: !0
                                                }), (0, g.jsx)("option", {
                                                    value: "Woocomerce",
                                                    children: "Woocomerce"
                                                }), (0, g.jsx)("option", {
                                                    value: "Magento",
                                                    children: "Magento"
                                                }), (0, g.jsx)("option", {
                                                    value: "PHP",
                                                    children: "PHP"
                                                }), (0, g.jsx)("option", {
                                                    value: "Custom APIs",
                                                    children: "Custom APIs"
                                                }), (0, g.jsx)("option", {
                                                    value: "Shopify",
                                                    children: "Shopify"
                                                })]
                                            })]
                                        }), (0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "gateway",
                                                children: "Payment Gateway"
                                            }), (0, g.jsxs)("select", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "00N6F00000IzqYD",
                                                name: "00N6F00000IzqYD",
                                                title: "Payment Gateway",
                                                defaultValue: "",
                                                children: [(0, g.jsx)("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    selected: !0,
                                                    hidden: !0
                                                }), (0, g.jsx)("option", {
                                                    value: "Razorpay",
                                                    children: "Razorpay"
                                                }), (0, g.jsx)("option", {
                                                    value: "Cashfree",
                                                    children: "Cashfree"
                                                }), (0, g.jsx)("option", {
                                                    value: "PayU",
                                                    children: "PayU"
                                                }), (0, g.jsx)("option", {
                                                    value: "Paytm",
                                                    children: "Paytm"
                                                }), (0, g.jsx)("option", {
                                                    value: "Juspay",
                                                    children: "Juspay"
                                                }), (0, g.jsx)("option", {
                                                    value: "CCAvenue",
                                                    children: "CCAvenue"
                                                }), (0, g.jsx)("option", {
                                                    value: "Stripe",
                                                    children: "Stripe"
                                                }), (0, g.jsx)("option", {
                                                    value: "Others",
                                                    children: "Others"
                                                })]
                                            })]
                                        })]
                                    }), (0, g.jsxs)("div", {
                                        className: "d-lg-flex justify-content-between",
                                        children: [(0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "store",
                                                children: "\u200b Business Type"
                                            }), (0, g.jsxs)("select", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "00N2x000008P51M",
                                                name: "00N2x000008P51M",
                                                title: "Business Type",
                                                defaultValue: "",
                                                children: [(0, g.jsx)("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    selected: !0,
                                                    hidden: !0
                                                }), (0, g.jsx)("option", {
                                                    value: "B2B",
                                                    children: "B2B"
                                                }), (0, g.jsx)("option", {
                                                    value: "B2C",
                                                    children: "B2C"
                                                })]
                                            })]
                                        }), (0, g.jsxs)("div", {
                                            className: "d-inline-grid  partnerForm-subContainer my-3 my-3 mr-4",
                                            children: [(0, g.jsx)("label", {
                                                className: "geoReg partnerForm-label",
                                                htmlFor: "company",
                                                children: "Channel"
                                            }), (0, g.jsxs)("select", {
                                                required: !0,
                                                className: "partnerForm-modalInput",
                                                id: "00N6F00000EYqB9",
                                                name: "00N6F00000EYqB9",
                                                title: "Merchant Type",
                                                defaultValue: "",
                                                children: [(0, g.jsx)("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    selected: !0,
                                                    hidden: !0
                                                }), (0, g.jsx)("option", {
                                                    value: "Online",
                                                    children: "Online"
                                                }), (0, g.jsx)("option", {
                                                    value: "Instore",
                                                    children: "Offline"
                                                }), (0, g.jsx)("option", {
                                                    value: "Both",
                                                    children: "Both"
                                                })]
                                            })]
                                        }), "\u200b"]
                                    }), (0, g.jsx)(u(), {
                                        onChange: function(e) {
                                            return N(e)
                                        }
                                    }), b ? (0, g.jsx)("div", {
                                        className: "form-group",
                                        onClick: function(e) {
                                            var s;
                                            null === (s = document.getElementById("partnerform")) || void 0 === s || s.classList.remove("catcolor")
                                        },
                                        children: (0, g.jsx)("input", {
                                            type: "submit",
                                            name: "submit",
                                            className: "partnerSubmit geo mr-1"
                                        })
                                    }) : (0, g.jsx)("div", {
                                        className: "form-group",
                                        children: (0, g.jsx)("div", {
                                            className: "partnerSubmit geo mr-1 text-center pt-1",
                                            onClick: function(e) {
                                                return k(!1)
                                            },
                                            children: "Submit"
                                        })
                                    }), 0 !== Object.keys(B).length && (0, g.jsxs)("p", {
                                        className: "warningMsg pb-lg-4 pb-3",
                                        children: [Object.keys(B).map((function(e, s) {
                                            return Object.keys(B).length === s + 1 ? (0, g.jsx)("label", {
                                                className: "text-uppercase",
                                                children: e
                                            }) : (0, g.jsxs)("label", {
                                                className: "text-uppercase",
                                                children: [e, ",\xa0"]
                                            })
                                        })), " ", "field(s) have an error. Please check and try again."]
                                    }), "\u200b"]
                                })]
                            }) : (0, g.jsx)(c.Z.Body, {
                                className: "partnerForm-modalBody py-5",
                                children: (0, g.jsxs)("p", {
                                    className: "geoMed successMsg text-center pt-lg-5 ",
                                    children: ["Thank for your interest in offering ZestMoney to your customers!", (0, g.jsx)("br", {}), " You will hear from our team soon!"]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        9039: function(e) {
            e.exports = {
                PayContainer: "styles_PayContainer__axhZq",
                title: "styles_title__1udiE",
                subTitle: "styles_subTitle__QMHhA",
                box2: "styles_box2__v6TJz",
                payImage: "styles_payImage__1Mek8",
                payButton: "styles_payButton__Rler4"
            }
        },
        69: function(e) {
            e.exports = {
                ReviewContainer: "styles_ReviewContainer__WnQej",
                title: "styles_title__MbFcc",
                star: "styles_star__WBy12",
                rating: "styles_rating__4eze8",
                starImage: "styles_starImage__d4Xly",
                starImage8: "styles_starImage8__g38pn",
                reviewText: "styles_reviewText__QBq4F",
                custName: "styles_custName__hTZPu",
                custImage: "styles_custImage___Xciw",
                profileSeparator: "styles_profileSeparator__izFU5"
            }
        },
        247: function() {}
    }
]);