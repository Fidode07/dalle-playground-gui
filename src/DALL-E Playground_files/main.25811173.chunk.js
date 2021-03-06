(this["webpackJsonpdalle-playground"] = this["webpackJsonpdalle-playground"] || []).push([
    [0],
    {
        102: function (e, t, a) {},
        132: function (e, t, a) {},
        142: function (e, t) {},
        169: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                i = a(7),
                c = a.n(i),
                o = (a(102), a(13)),
                l = a(16),
                s = a.n(l),
                u = a(204),
                d = a(205),
                m = a(206),
                p = a(175),
                g = a(181),
                f = a(178),
                h = a(207),
                E = a(177),
                b = a(47),
                x = a.n(b),
                y = a(69),
                v = a(83),
                k = a.n(v);
            function j() {
                return (j = Object(y.a)(
                    x.a.mark(function e(t, a, n) {
                        var r, i;
                        return x.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = new Date()),
                                            (e.t0 = Promise),
                                            (e.next = 4),
                                            fetch(t + "/dalle", { method: "POST", headers: { "Bypass-Tunnel-Reminder": "go", mode: "no-cors" }, body: JSON.stringify({ text: a, num_images: n }) }).then(function (e) {
                                                if (!e.ok) throw Error(e.statusText);
                                                return e;
                                            })
                                        );
                                    case 4:
                                        return (
                                            (e.t1 = e.sent.text()),
                                            (e.t2 = new Promise(function (e, t) {
                                                return setTimeout(function () {
                                                    return t(new Error("Timeout"));
                                                }, 6e4);
                                            })),
                                            (e.t3 = [e.t1, e.t2]),
                                            (e.next = 9),
                                            e.t0.race.call(e.t0, e.t3)
                                        );
                                    case 9:
                                        return (i = e.sent), e.abrupt("return", { executionTime: Math.round(100 * ((new Date() - r) / 1e3 + Number.EPSILON)) / 100, generatedImgs: k.a.parse(i) });
                                    case 11:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function O() {
                return (O = Object(y.a)(
                    x.a.mark(function e(t) {
                        return x.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (e.next = 2),
                                            fetch(t, { headers: { "Bypass-Tunnel-Reminder": "go", mode: "no-cors" } })
                                                .then(function (e) {
                                                    return !0;
                                                })
                                                .catch(function () {
                                                    return !1;
                                                })
                                        );
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            var w = a(201),
                S = s()(function () {
                    return { generatedImg: { borderRadius: "8px" } };
                })(function (e) {
                    var t = e.classes,
                        a = e.generatedImages,
                        n = function (e) {
                            var a = e.imgData,
                                n = e.alt;
                            return r.a.createElement("img", { src: "data:image/png;base64,".concat(a), className: t.generatedImg, alt: n });
                        };
                    return r.a.createElement(
                        w.a,
                        { container: !0, alignItems: "center", spacing: 3 },
                        a.map(function (e, t) {
                            return r.a.createElement(w.a, { item: !0, key: t }, r.a.createElement(n, { imgData: e, alt: t }));
                        })
                    );
                }),
                L = a(203),
                T = s()(function () {
                    return { inputPrompt: { marginTop: "20px" } };
                })(function (e) {
                    var t = e.classes,
                        a = e.enterPressedCallback,
                        i = e.disabled,
                        c = Object(n.useState)(""),
                        l = Object(o.a)(c, 2),
                        s = l[0],
                        u = l[1];
                    return r.a.createElement(L.a, {
                        className: t.inputPrompt,
                        id: "prompt-input",
                        label: "Text prompt",
                        helperText: "hit Enter to search",
                        placeholder: "e.g. an apple on a table",
                        value: s,
                        onChange: function (e) {
                            u(e.target.value);
                        },
                        fullWidth: !0,
                        onKeyPress: function (e) {
                            "Enter" === e.key && a(s);
                        },
                        disabled: i,
                    });
                });
            a(132);
            var I = a(59),
                B = a(88),
                C = a.n(B),
                N = s()(function () {
                    return { inputBackend: { minWidth: "220px" }, loadingSpinner: { paddingTop: "20px !important" } };
                })(function (e) {
                    var t = e.classes,
                        a = e.disabled,
                        i = e.setBackendValidUrl,
                        c = e.isValidBackendEndpoint,
                        l = e.setIsValidBackendEndpoint,
                        s = e.isCheckingBackendEndpoint,
                        u = e.setIsCheckingBackendEndpoint,
                        d = Object(n.useState)(""),
                        m = Object(o.a)(d, 2),
                        p = m[0],
                        g = m[1];
                    function f(e) {
                        var t;
                        (t = e),
                            new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(t)
                                ? (u(!0),
                                  (function (e) {
                                      return O.apply(this, arguments);
                                  })(e)
                                      .then(function (t) {
                                          l(t), t && i(e), u(!1);
                                      })
                                      .catch(function () {
                                          u(!1);
                                      }))
                                : l(!1),
                            g(e);
                    }
                    return (
                        Object(n.useEffect)(
                            function () {
                                var e = C.a.parse(window.location.search, { ignoreQueryPrefix: !0 }).backendUrl;
                                e && f(e);
                            },
                            [g]
                        ),
                        r.a.createElement(
                            w.a,
                            { container: !0, spacing: 1, alignContent: "center" },
                            r.a.createElement(
                                w.a,
                                { item: !0, xs: 10 },
                                r.a.createElement(L.a, {
                                    className: t.inputBackend,
                                    fullWidth: !0,
                                    id: "standard-basic",
                                    label: "Backend URL",
                                    value: p,
                                    disabled: a,
                                    error: !c && "" !== p,
                                    helperText: !c && "" !== p && "No running DALL-E server with this URL",
                                    onChange: function (e) {
                                        return f(e.target.value);
                                    },
                                })
                            ),
                            s && r.a.createElement(w.a, { item: !0, className: t.loadingSpinner, xs: 2 }, r.a.createElement(I.PulseLoader, { sizeUnit: "px", size: 5, color: "purple", loading: s }))
                        )
                    );
                }),
                P = ["Generating images \ud83d\udc68\ud83c\udffd\u200d\ud83c\udfa8", "Doing fancy calculations \u2728"],
                D = s()(function () {
                    return { root: { display: "flex", flexDirection: "column", textAlign: "center", marginTop: "80px" }, loadingText: { paddingTop: "20px" } };
                })(function (e) {
                    var t = e.classes,
                        a = e.isLoading,
                        i = Object(n.useState)(0),
                        c = Object(o.a)(i, 2),
                        l = c[0],
                        s = c[1];
                    Object(n.useEffect)(function () {
                        var e = setTimeout(function () {
                            l + 1 < P.length && s(l + 1);
                        }, 1e4);
                        return function () {
                            return clearInterval(e);
                        };
                    }, []);
                    var d = P[l % P.length];
                    return r.a.createElement("div", { className: t.root }, r.a.createElement(I.PulseLoader, { sizeUnit: "px", size: 20, color: "purple", loading: a }), r.a.createElement(u.a, { className: t.loadingText, variant: "h6" }, d));
                }),
                A = s()(function () {
                    return {
                        root: { display: "flex", width: "100%", flexDirection: "column", margin: "60px 0px 60px 0px", alignItems: "center", textAlign: "center" },
                        title: { marginBottom: "20px" },
                        playgroundSection: { display: "flex", flex: 1, width: "100%", alignItems: "flex-start", justifyContent: "center", marginTop: "20px" },
                        settingsSection: { display: "flex", flexDirection: "column", padding: "1em", maxWidth: "320px" },
                        searchQueryCard: { marginBottom: "20px" },
                        imagesPerQueryControl: { marginTop: "20px" },
                        formControl: { margin: "20px", minWidth: 120 },
                        gallery: { display: "flex", flex: "1", maxWidth: "50%", height: "100%", justifyContent: "center", alignItems: "flex-start", padding: "1rem" },
                    };
                })(function (e) {
                    var t = e.classes,
                        a = Object(n.useState)(""),
                        i = Object(o.a)(a, 2),
                        c = i[0],
                        l = i[1],
                        s = Object(n.useState)(!1),
                        b = Object(o.a)(s, 2),
                        x = b[0],
                        y = b[1],
                        v = Object(n.useState)(!1),
                        k = Object(o.a)(v, 2),
                        O = k[0],
                        w = k[1],
                        L = Object(n.useState)(!0),
                        I = Object(o.a)(L, 2),
                        B = I[0],
                        C = I[1],
                        P = Object(n.useState)([]),
                        A = Object(o.a)(P, 2),
                        z = A[0],
                        q = A[1],
                        U = Object(n.useState)(""),
                        W = Object(o.a)(U, 2),
                        R = W[0],
                        Q = W[1],
                        V = Object(n.useState)(2),
                        _ = Object(o.a)(V, 2),
                        J = _[0],
                        M = _[1],
                        $ = Object(n.useState)(0),
                        G = Object(o.a)($, 2),
                        K = G[0],
                        F = G[1],
                        H = B && c;
                    return r.a.createElement(
                        "div",
                        { className: t.root },
                        r.a.createElement("div", { className: t.title }, r.a.createElement(u.a, { variant: "h3" }, "DALL-E Playground ", r.a.createElement("span", { role: "img", "aria-label": "sparks-emoji" }, "\u2728"))),
                        !H && r.a.createElement("div", null, r.a.createElement(u.a, { variant: "body1", color: "textSecondary" }, "Put your DALL-E backend URL to start")),
                        r.a.createElement(
                            "div",
                            { className: t.playgroundSection },
                            r.a.createElement(
                                "div",
                                { className: t.settingsSection },
                                r.a.createElement(
                                    d.a,
                                    { className: t.searchQueryCard },
                                    r.a.createElement(
                                        m.a,
                                        null,
                                        r.a.createElement(N, { setBackendValidUrl: l, isValidBackendEndpoint: B, setIsValidBackendEndpoint: C, setIsCheckingBackendEndpoint: w, isCheckingBackendEndpoint: O, disabled: x }),
                                        r.a.createElement(T, {
                                            enterPressedCallback: function (e) {
                                                console.log("API call to DALL-E web service with the following prompt [" + e + "]"),
                                                    Q(""),
                                                    y(!0),
                                                    (function (e, t, a) {
                                                        return j.apply(this, arguments);
                                                    })(c, e, J)
                                                        .then(function (e) {
                                                            F(e.executionTime), q(e.generatedImgs), y(!1);
                                                        })
                                                        .catch(function (e) {
                                                            console.log("Error querying DALL-E service.", e),
                                                                "Timeout" === e.message
                                                                    ? Q("Timeout querying DALL-E service (>1min). Consider reducing the images per query or use a stronger backend.")
                                                                    : Q("Error querying DALL-E service. Check your backend server logs."),
                                                                y(!1);
                                                        });
                                            },
                                            disabled: x || !H,
                                        }),
                                        r.a.createElement(
                                            p.a,
                                            { className: t.imagesPerQueryControl, variant: "outlined" },
                                            r.a.createElement(g.a, { id: "images-per-query-label" }, "Images per query"),
                                            r.a.createElement(
                                                f.a,
                                                {
                                                    labelId: "images-per-query-label",
                                                    label: "Images per query",
                                                    value: J,
                                                    disabled: x,
                                                    onChange: function (e) {
                                                        return M(e.target.value);
                                                    },
                                                },
                                                Array.from(Array(10).keys()).map(function (e) {
                                                    return r.a.createElement(h.a, { key: e + 1, value: e + 1 }, e + 1);
                                                })
                                            ),
                                            r.a.createElement(E.a, null, "More images = slower query")
                                        )
                                    )
                                ),
                                0 !== K && r.a.createElement(u.a, { variant: "body2", color: "textSecondary" }, "Query execution time: ", K, " sec")
                            ),
                            (z.length > 0 || R || x) &&
                                r.a.createElement("div", { className: t.gallery }, R ? r.a.createElement(u.a, { variant: "h5", color: "error" }, R) : x ? r.a.createElement(D, { isLoading: x }) : r.a.createElement(S, { generatedImages: z }))
                        )
                    );
                });
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(A, null)), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister();
                        })
                        .catch(function (e) {
                            console.error(e.message);
                        });
        },
        97: function (e, t, a) {
            e.exports = a(169);
        },
    },
    [[97, 1, 2]],
]);
//# sourceMappingURL=main.25811173.chunk.js.map
