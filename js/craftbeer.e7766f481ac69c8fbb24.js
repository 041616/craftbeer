(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    15: function (e, n, t) {
        e.exports = {base: "base-au3vr"}
    }, 16: function (e, n, t) {
        e.exports = {nav: "nav-2S5Zi"}
    }, 31: function (e, n, t) {
        "use strict";
        t.r(n);
        var a = t(0), r = t.n(a), l = t(14), c = t.n(l), u = t(8), i = t(5),
            o = t(15), m = t.n(o), s = function (e) {
                var n = e.children;
                return r.a.createElement("div", {className: m.a.base}, n)
            }, E = t(16), d = t.n(E), p = function () {
                return r.a.createElement("nav", {className: d.a.nav}, r.a.createElement(u.b, {to: "/"}, "Main"), r.a.createElement(u.b, {to: "/articles"}, "Articles"))
            }, f = function () {
                return r.a.createElement("h1", null, "Main Page")
            }, v = function () {
                return r.a.createElement("h1", null, "Articles Page")
            }, b = function () {
                return r.a.createElement(u.a, null, r.a.createElement(s, null, r.a.createElement(p, null), r.a.createElement(i.c, null, r.a.createElement(i.a, {
                    exact: !0,
                    path: "/"
                }, r.a.createElement(f, null)), r.a.createElement(i.a, {
                    exact: !0,
                    path: "/articles"
                }, r.a.createElement(v, null)))))
            };
        document.addEventListener("DOMContentLoaded", (function () {
            return c.a.render(r.a.createElement(b, null), document.getElementById("app"))
        }))
    }
}, [[31, 15, 0, 8, 7, 10, 11, 9, 16, 2, 3, 4, 5, 6, 13, 12, 14, 17, 18, 19]]]);