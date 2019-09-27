! function() {
    "use strict";
    var typeOf = function(variable) {
        return typeof eval(variable)
    };
    ! function() {
        for (var e, n, r, i, a, u, o, d, l, t, s, c = document.getElementById("status"), h = document.querySelector("head"), p = document.getElementById("result"), g = document.getElementById("editor"), f = "click", m = 0, b = document.querySelectorAll(".ui-option"); e = b[m]; m++) e.addEventListener(f, function() {
            document.querySelector("body").classList.toggle(this.id)
        }, !1);

        function v() {
            function s(e) {
                var t = document.querySelector("#favicon"),
                    s = t.cloneNode();
                s.setAttribute("href", "favicon/" + e + ".png"), h.replaceChild(s, t)
            }
            var e, t, n, r = g.value;
            if ("" === (e = r, t = "[\\x20\\t\\r\\n\\f]", n = new RegExp("^" + t + "+|((?:^|[^\\\\])(?:\\\\.)*)" + t + "+$", "g"), e.replace(n, ""))) return p.innerHTML = "", c.classList.remove("status-error"), void s("undefined");
            c.classList.remove("status-error"), setTimeout(function() {
                var e = function(e) {
                    function o(e) {
                        return e.replace(/\s+$/g, "")
                    }

                    function s(e) {
                        return e.replace(/^\s+/g, "")
                    }

                    function d() {
                        for (var e, t, s = 0;;) {
                            for (s = i.indexOf('"', s + 1), e = 0, t = 1;
                                "\\" === i.substring(s - t, s - t + 1);) e += 1, t++;
                            if (e % 2 == 0) break
                        }
                        return s
                    }

                    function l(e) {
                        return -1 === e.indexOf("{") ? (e.err("Opening brace is missing", e.todo), e.update("", "")) : (e.shift(1), e.update('<span class="object"><span class="toggle">{</span><ul>'), -1 === (e = function e(t) {
                            return t.update("<li>"), "}" === t.substring(0, 1) ? t.update("</li>") : (":" !== (s = t = function(e) {
                                var t, s, n, r = e.substring(0, 1);
                                if (e.update(""), '"' === r) {
                                    if (-1 !== (t = e.shift(d(e.todo) + 1)).search(/\\u(?![\d|A-F|a-f]{4})/g)) return e.err("\\u must be followed by 4 hexadecimal characters", t);
                                    for (s = t.length, n = 0; n < s; n++)
                                        if ("\\" == t.substring(n, n + 1) && n + 1 < s && (n++, !t.substring(n, n + 1).search(/[^\"|\\|\/|b|f|n|r|t|u]/))) return e.err("Backslash must be escaped", t);
                                    return e.update('<span class="property">"<span class="p">' + t.substring(1, t.length - 1) + '</span>"</span>')
                                }
                                return t = e.shift(e.indexOf(":")), e.err("Name property must be a String wrapped in double quotes.", t)
                            }(t)).substring(0, 1) && s.err("Semi-column is missing.", s.shift(s.indexOf(":"))), "," === (t = n(t = s.swap(1), "}")).substring(0, 1) ? (t.swap(1).update("</li>"), e(t)) : "}" === t.substring(0, 1) ? t.update("</li>") : t.err("Comma is missing", t.shift(t.indexOf("}"))).update("</li>"));
                            var s
                        }(e).update("</ul>")).indexOf("}") ? (e.err("Closing brace is missing", e.todo), e.update("", "")) : e.span("toggle-end", e.shift(1)))
                    }

                    function c(e) {
                        var s = 0;
                        return -1 === e.indexOf("[") ? (e.err("Opening square bracket is missing", e.todo), e.update("", "")) : (e.shift(1), e.update('<span class="array">'), e.update('<span class="toggle">[</span><ol>'), 0 === e.indexOf("]") ? (e.shift(1), e.update('</ol><span class="toggle-end" card="0">]</span>')) : -1 === (e = function e(t) {
                            return t.update("<li>"), "," === (t = n(t, "]")).substring(0, 1) ? (t.swap(1).update("</li>"), e(t, ++s)) : "]" === t.substring(0, 1) ? t.update("</li>") : t.err("Comma is missing", t.shift(t.search(/(,|\])/))).update("</li>")
                        }(e)).indexOf("]") ? (e.err("Closing square bracket is missing", e.todo), e.update('</ol><span class="toggle-end" card="' + (s + 1) + '"></span>')) : (e.shift(1), e.update('</ol><span class="toggle-end" card="' + (s + 1) + '">]</span>')), e.update("</span>"))
                    }

                    function n(e, t) {
                        var s, n, r, i, a, u = "";
                        if (0 === e.search(/^(")/)) {
                            if (-1 !== (s = e.shift(d(e.todo) + 1)).search(/\\u(?![\d|A-F|a-f]{4})/g)) return e.err("\\u must be followed by 4 hexadecimal characters", s);
                            for (i = s.length, r = 0; r < i; r++)
                                if ("\\" == s.substring(r, r + 1) && r + 1 < i && (r++, !s.substring(r, r + 1).search(/[^\"|\\|\/|b|f|n|r|t|u]/))) return e.err("Backslash must be escaped", s);
                            return e.span("string", s)
                        }
                        if (0 === e.search(/^\{/)) return l(e);
                        if (0 === e.search(/^\[/)) return c(e); - 1 === (n = e.search(new RegExp("(,|" + t + ")"))) ? (n = e.todo.length - 1, a = o(e.todo), e.update("", "")) : a = o(e.shift(n));
                        try {
                            u = typeOf(a)
                        } catch (e) {}
                        switch (u) {
                            case "boolean":
                            case "number":
                                return e.span(u, a);
                            default:
                                return "null" === a ? e.span("null", a) : 0 === a.search(/^(')/) ? e.err("String must be wrapped in double quotes", a) : e.err("Unknown type", a)
                        }
                    }
                    var r = !1,
                        i = new function(e) {
                            this.done = "", this.todo = e || "", this.update = function(e, t) {
                                return e && (this.done += e), void 0 !== t && (this.todo = s(t)), this
                            }, this.swap = function(e) {
                                return e && !isNaN(Number(e)) && this.todo.length >= e && this.update(this.todo.substr(0, e), this.todo.substring(e)), this
                            }, this.toString = function() {
                                return 0 !== this.todo.length && this.err("Text after last closing brace.", this.todo), this.done
                            }, this.span = function(e, t) {
                                return this.update('<span class="' + e + '">' + t + "</span>")
                            }, this.err = function(e, t) {
                                return r = !0, this.update('<span class="error" title="' + e + '">' + t + "</span>")
                            }, this.shift = function(e) {
                                var t;
                                return e && !isNaN(Number(e)) && this.todo.length >= e ? (t = this.substring(0, e), this.update("", this.substring(e)), o(t)) : ""
                            }, this.indexOf = function(e, t) {
                                return t ? this.todo.indexOf(e, t) : this.todo.indexOf(e)
                            }, this.substring = function(e, t) {
                                return t ? this.todo.substring(e, t) : this.todo.substring(e)
                            }, this.search = function(e) {
                                return this.todo.search(e)
                            }
                        }(s(o(e)));
                    return "[" === s(e).substr(0, 1) ? {
                        html: c(i).toString(),
                        valid: !r
                    } : "{" === s(e).substr(0, 1) ? {
                        html: l(i).toString(),
                        valid: !r
                    } : {
                        html: i.err("JSON expression must be an object or an array", e).update(null, "").toString(),
                        valid: !1
                    }
                }(r = (r = r.replace(/</g, "&lt;")).replace(/>/g, "&gt;"));
                if (p.innerHTML = e.html, e.valid) s("valid");
                else {
                    var t = e.html.match(/class="error"/g).length;
                    c.innerHTML = "<b>Invalid JSON</b> &nbsp; " + t + "&nbsp;error" + (1 < t ? "s" : "") + "&nbsp;found", c.classList.add("status-error"), s("syntax-error")
                }
            }, 0)
        }
        p.addEventListener(f, function(e) {
            var t = e.target;
            (t.classList.contains("toggle") || t.classList.contains("toggle-end")) && t.parentNode.classList.toggle("collapsed")
        }, !1), o = document.querySelector(".ui-editor"), d = document.querySelector(".ui-aside"), l = document.querySelector(".ui-resizer"), t = function(e) {
            if ("1px" == window.getComputedStyle(l).height) {
                var t = a + e.clientY - r;
                t = 5 < t ? t : 5, o.style.width = "", o.style.height = t + "px", d.style.height = u - t + "px"
            } else {
                var s = i + e.clientX - n;
                s = 5 < s ? s : 5, o.style.width = s + "px", o.style.height = "", d.style.height = ""
            }
        }, s = function(e) {
            document.removeEventListener("mousemove", t, !1), document.removeEventListener("mouseup", s, !1), l.classList.remove("resizing")
        }, l.addEventListener("mousedown", function(e) {
            n = e.clientX, r = e.clientY, i = parseInt(document.defaultView.getComputedStyle(o).width, 10), a = parseInt(document.defaultView.getComputedStyle(o).height, 10), u = parseInt(window.innerHeight), this.classList.add("resizing"), document.addEventListener("mousemove", t, !1), document.addEventListener("mouseup", s, !1)
        }, !1), window.addEventListener("resize", function() {
            o.style.width = "", o.style.height = "", d.style.height = ""
        }, !1), g.addEventListener("keyup", v, !1), g.addEventListener(f, v, !1), v(), g.select()
    }()
}();