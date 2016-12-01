!function(e) {
    var i = 0, t = 0, r = 0, n = 10, s = 0, l = "ontouchstart" in window || navigator.msMaxTouchPoints > 0, a = "onorientationchange" in window, o = !1, d = !1, c = !1, f = !1, h = !1, u = !1, S = !1, g = "pointer", v = "pointer", b = new Array(), p = new Array(), m = new Array(), w = new Array(), O = new Array(), y = new Array(), C = new Array(), k = new Array(), N = new Array(), x = new Array(), T = new Array(), A = new Array(), E = new Array(), W = {
        showScrollbar: function(i, t) {
            i.scrollbarHide && e("." + t).css({
                opacity: i.scrollbarOpacity,
                filter: "alpha(opacity:" + 100 * i.scrollbarOpacity + ")"
            });
        },
        hideScrollbar: function(e, i, t, r, s, l, a, o, d, c) {
            if (e.scrollbar && e.scrollbarHide) for (var f = t; f < t + 25; f++) i[i.length] = W.hideScrollbarIntervalTimer(n * f, r[t], (t + 24 - f) / 24, s, l, a, o, d, c, e);
        },
        hideScrollbarInterval: function(i, t, r, n, l, a, o, d, c) {
            s = i * -1 / T[d] * (l - a - o - n), W.setSliderOffset("." + r, s), e("." + r).css({
                opacity: c.scrollbarOpacity * t,
                filter: "alpha(opacity:" + c.scrollbarOpacity * t * 100 + ")"
            });
        },
        slowScrollHorizontalInterval: function(i, t, r, n, l, a, o, d, c, f, h, u, S, g, v, b, p, m, w) {
            if (w.infiniteSlider) {
                if (r <= T[b] * -1 || r <= A[b] * -1) {
                    var O = e(i).width();
                    if (r <= A[b] * -1) {
                        var y = h[0] * -1;
                        e(t).each(function(i) {
                            W.setSliderOffset(e(t)[i], y + p), i < u.length && (u[i] = y * -1), y += v[i];
                        }), r += u[0] * -1, x[b] = u[0] * -1 + p, T[b] = x[b] + O - a, N[b] = 0;
                    }
                    for (;r <= T[b] * -1; ) {
                        var E = 0, $ = W.getSliderOffset(e(t[0]), "x");
                        e(t).each(function(e) {
                            W.getSliderOffset(this, "x") < $ && ($ = W.getSliderOffset(this, "x"), E = e);
                        });
                        var M = x[b] + O;
                        W.setSliderOffset(e(t)[E], M), x[b] = u[1] * -1 + p, T[b] = x[b] + O - a, u.splice(0, 1), 
                        u.splice(u.length, 0, M * -1 + p), N[b]++;
                    }
                }
                if (r >= x[b] * -1 || r >= 0) {
                    var O = e(i).width();
                    if (r > 0) {
                        var y = h[0] * -1;
                        for (e(t).each(function(i) {
                            W.setSliderOffset(e(t)[i], y + p), i < u.length && (u[i] = y * -1), y += v[i];
                        }), r -= u[0] * -1, x[b] = u[0] * -1 + p, T[b] = x[b] + O - a, N[b] = g; u[0] * -1 - O + p > 0; ) {
                            var B = 0, P = W.getSliderOffset(e(t[0]), "x");
                            e(t).each(function(e) {
                                W.getSliderOffset(this, "x") > P && (P = W.getSliderOffset(this, "x"), B = e);
                            });
                            var M = x[b] - v[B];
                            W.setSliderOffset(e(t)[B], M), u.splice(0, 0, M * -1 + p), u.splice(u.length - 1, 1), 
                            x[b] = u[0] * -1 + p, T[b] = x[b] + O - a, N[b]--, C[b]++;
                        }
                    }
                    for (;r > x[b] * -1; ) {
                        var B = 0, P = W.getSliderOffset(e(t[0]), "x");
                        e(t).each(function(e) {
                            W.getSliderOffset(this, "x") > P && (P = W.getSliderOffset(this, "x"), B = e);
                        });
                        var M = x[b] - v[B];
                        W.setSliderOffset(e(t)[B], M), u.splice(0, 0, M * -1 + p), u.splice(u.length - 1, 1), 
                        x[b] = u[0] * -1 + p, T[b] = x[b] + O - a, N[b]--;
                    }
                }
            }
            var H = !1, I = W.calcActiveOffset(w, r, u, a, N[b], g, f, b), M = (I + N[b] + g) % g;
            if (w.infiniteSlider ? M != k[b] && (H = !0) : I != C[b] && (H = !0), H) {
                var q = new W.args("change", w, i, e(i).children(":eq(" + M + ")"), M, m);
                e(i).parent().data("args", q), "" != w.onSlideChange && w.onSlideChange(q);
            }
            if (C[b] = I, k[b] = M, r = Math.floor(r), W.setSliderOffset(i, r), w.scrollbar) {
                s = Math.floor((r * -1 - x[b] + p) / (T[b] - x[b] + p) * (o - d - l));
                var z = l - c;
                r >= x[b] * -1 + p ? (z = l - c - s * -1, W.setSliderOffset(e("." + n), 0), e("." + n).css({
                    width: z + "px"
                })) : r <= T[b] * -1 + 1 ? (z = o - d - c - s, W.setSliderOffset(e("." + n), s), 
                e("." + n).css({
                    width: z + "px"
                })) : (W.setSliderOffset(e("." + n), s), e("." + n).css({
                    width: z + "px"
                }));
            }
        },
        slowScrollHorizontal: function(i, t, r, s, l, a, o, d, c, f, h, u, S, g, v, b, p, m, w, O, A) {
            var E = W.getSliderOffset(i, "x"), $ = new Array(), M = new Array(), B = 0, P = 25 / 1024 * d;
            frictionCoefficient = A.frictionCoefficient, elasticFrictionCoefficient = A.elasticFrictionCoefficient, 
            snapFrictionCoefficient = A.snapFrictionCoefficient, l > A.snapVelocityThreshold && A.snapToChildren && !w ? B = 1 : l < A.snapVelocityThreshold * -1 && A.snapToChildren && !w && (B = -1), 
            l < P * -1 ? l = P * -1 : l > P && (l = P), e(i)[0] !== e(m)[0] && (B *= -1, l *= -2);
            var H = N[v];
            if (A.infiniteSlider) var I = x[v], q = T[v];
            for (var z = new Array(), D = new Array(), X = 0; X < S.length; X++) z[X] = S[X], 
            X < t.length && (D[X] = W.getSliderOffset(e(t[X]), "x"));
            for (;l > 1 || l < -1; ) {
                if (l *= frictionCoefficient, E += l, (E > x[v] * -1 || E < T[v] * -1) && !A.infiniteSlider && (l *= elasticFrictionCoefficient, 
                E += l), A.infiniteSlider) {
                    if (E <= q * -1) {
                        for (var j = e(i).width(), L = 0, R = D[0], X = 0; X < D.length; X++) D[X] < R && (R = D[X], 
                        L = X);
                        var V = I + j;
                        D[L] = V, I = z[1] * -1 + O, q = I + j - d, z.splice(0, 1), z.splice(z.length, 0, V * -1 + O), 
                        H++;
                    }
                    if (E >= I * -1) {
                        for (var j = e(i).width(), Y = 0, U = D[0], X = 0; X < D.length; X++) D[X] > U && (U = D[X], 
                        Y = X);
                        var V = I - g[Y];
                        D[Y] = V, z.splice(0, 0, V * -1 + O), z.splice(z.length - 1, 1), I = z[0] * -1 + O, 
                        q = I + j - d, H--;
                    }
                }
                $[$.length] = E, M[M.length] = l;
            }
            var F = !1, _ = W.calcActiveOffset(A, E, z, d, H, p, C[v], v), G = (_ + H + p) % p;
            if (A.snapToChildren && (A.infiniteSlider ? G != k[v] && (F = !0) : _ != C[v] && (F = !0), 
            B < 0 && !F ? (_++, _ >= S.length && !A.infiniteSlider && (_ = S.length - 1)) : B > 0 && !F && (_--, 
            _ < 0 && !A.infiniteSlider && (_ = 0))), A.snapToChildren || (E > x[v] * -1 || E < T[v] * -1) && !A.infiniteSlider) {
                for ((E > x[v] * -1 || E < T[v] * -1) && !A.infiniteSlider ? $.splice(0, $.length) : ($.splice(.1 * $.length, $.length), 
                E = $.length > 0 ? $[$.length - 1] : E); E < z[_] - .5 || E > z[_] + .5; ) E = (E - z[_]) * snapFrictionCoefficient + z[_], 
                $[$.length] = E;
                $[$.length] = z[_];
            }
            var K = 1;
            $.length % 2 != 0 && (K = 0);
            for (var Q = 0; Q < r.length; Q++) clearTimeout(r[Q]);
            for (var J = (_ + H + p) % p, Z = 0, Q = K; Q < $.length; Q += 2) (Q == K || Math.abs($[Q] - Z) > 1 || Q >= $.length - 2) && (Z = $[Q], 
            r[r.length] = W.slowScrollHorizontalIntervalTimer(n * Q, i, t, $[Q], s, o, d, c, f, h, _, u, S, b, p, g, v, O, J, A));
            var F = !1, G = (_ + N[v] + p) % p;
            A.infiniteSlider ? G != k[v] && (F = !0) : _ != C[v] && (F = !0), "" != A.onSlideComplete && $.length > 1 && (r[r.length] = W.onSlideCompleteTimer(n * (Q + 1), A, i, e(i).children(":eq(" + G + ")"), J, v)), 
            r[r.length] = W.updateBackfaceVisibilityTimer(n * (Q + 1), t, v, p, A), y[v] = r, 
            W.hideScrollbar(A, r, Q, $, s, o, d, f, h, v);
        },
        onSlideComplete: function(i, t, r, n, s) {
            var l = (b[s] != n, new W.args("complete", i, e(t), r, n, n));
            e(t).parent().data("args", l), "" != i.onSlideComplete && i.onSlideComplete(l), 
            b[s] = n;
        },
        getSliderOffset: function(i, t) {
            var r = 0;
            if (t = "x" == t ? 4 : 5, !d || c || f) r = parseInt(e(i).css("left"), 10); else {
                for (var n, s = new Array("-webkit-transform", "-moz-transform", "transform"), l = 0; l < s.length; l++) if (void 0 != e(i).css(s[l]) && e(i).css(s[l]).length > 0) {
                    n = e(i).css(s[l]).split(",");
                    break;
                }
                r = void 0 == n[t] ? 0 : parseInt(n[t], 10);
            }
            return r;
        },
        setSliderOffset: function(i, t) {
            t = parseInt(t, 10), !d || c || f ? e(i).css({
                left: t + "px"
            }) : e(i).css({
                msTransform: "matrix(1,0,0,1," + t + ",0)",
                webkitTransform: "matrix(1,0,0,1," + t + ",0)",
                MozTransform: "matrix(1,0,0,1," + t + ",0)",
                transform: "matrix(1,0,0,1," + t + ",0)"
            });
        },
        setBrowserInfo: function() {
            null != navigator.userAgent.match("WebKit") ? (o = !0, g = "-webkit-grab", v = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ? (S = !0, 
            g = "move", v = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? (c = !0, 
            u = !0) : null != navigator.userAgent.match("MSIE 8") ? (f = !0, u = !0) : null != navigator.userAgent.match("MSIE 9") && (h = !0, 
            u = !0);
        },
        has3DTransform: function() {
            var i = !1, t = e("<div />").css({
                msTransform: "matrix(1,1,1,1,1,1)",
                webkitTransform: "matrix(1,1,1,1,1,1)",
                MozTransform: "matrix(1,1,1,1,1,1)",
                transform: "matrix(1,1,1,1,1,1)"
            });
            return "" == t.attr("style") ? i = !1 : S && parseInt(navigator.userAgent.split("/")[3], 10) >= 21 ? i = !1 : void 0 != t.attr("style") && (i = !0), 
            i;
        },
        getSlideNumber: function(e, i, t) {
            return (e - N[i] + t) % t;
        },
        calcActiveOffset: function(e, i, t, r, n, s, l, a) {
            var o, d = !1, c = new Array();
            i > t[0] && (o = 0), i < t[t.length - 1] && (o = s - 1);
            for (var f = 0; f < t.length; f++) t[f] <= i && t[f] > i - r && (d || t[f] == i || (c[c.length] = t[f - 1]), 
            c[c.length] = t[f], d = !0);
            0 == c.length && (c[0] = t[t.length - 1]);
            for (var h = r, u = 0, f = 0; f < c.length; f++) {
                var S = Math.abs(i - c[f]);
                S < h && (u = c[f], h = S);
            }
            for (var f = 0; f < t.length; f++) u == t[f] && (o = f);
            return o;
        },
        changeSlide: function(i, t, r, s, l, a, o, d, c, f, h, u, S, g, v, b, p, m) {
            W.autoSlidePause(g);
            for (var w = 0; w < s.length; w++) clearTimeout(s[w]);
            var O = Math.ceil(m.autoSlideTransTimer / 10) + 1, x = W.getSliderOffset(t, "x"), T = u[i], A = T - x, E = i - (C[g] + N[g] + b) % b;
            if (m.infiniteSlider) {
                i = (i - N[g] + 2 * b) % b;
                var $ = !1;
                0 == i && 2 == b && (i = b, u[i] = u[i - 1] - e(r).eq(0).outerWidth(!0), $ = !0), 
                T = u[i], A = T - x;
                var M = new Array(u[i] - e(t).width(), u[i] + e(t).width());
                $ && u.splice(u.length - 1, 1);
                for (var B = 0; B < M.length; B++) Math.abs(M[B] - x) < Math.abs(A) && (A = M[B] - x);
            }
            A < 0 && E == -1 ? A += e(t).width() : A > 0 && 1 == E && (A -= e(t).width());
            var P, H, I = new Array();
            W.showScrollbar(m, l);
            for (var B = 0; B <= O; B++) P = B, P /= O, P--, H = x + A * (Math.pow(P, 5) + 1), 
            I[I.length] = H;
            for (var q = (i + N[g] + b) % b, z = 0, B = 0; B < I.length; B++) if ((0 == B || Math.abs(I[B] - z) > 1 || B >= I.length - 2) && (z = I[B], 
            s[B] = W.slowScrollHorizontalIntervalTimer(n * (B + 1), t, r, I[B], l, a, o, d, c, f, i, h, u, v, b, S, g, p, q, m)), 
            0 == B && "" != m.onSlideStart) {
                var D = (C[g] + N[g] + b) % b;
                m.onSlideStart(new W.args("start", m, t, e(t).children(":eq(" + D + ")"), D, i));
            }
            var X = !1;
            m.infiniteSlider ? q != k[g] && (X = !0) : i != C[g] && (X = !0), X && "" != m.onSlideComplete && (s[s.length] = W.onSlideCompleteTimer(n * (B + 1), m, t, e(t).children(":eq(" + q + ")"), q, g)), 
            y[g] = s, W.hideScrollbar(m, s, B, I, l, a, o, c, f, g), W.autoSlide(t, r, s, l, a, o, d, c, f, h, u, S, g, v, b, p, m);
        },
        changeOffset: function(i, t, r, s, l, a, o, d, c, f, h, u, S, g, v, b, p, m) {
            W.autoSlidePause(g);
            for (var w = 0; w < s.length; w++) clearTimeout(s[w]);
            m.infiniteSlider || (i = i > x[g] * -1 + p ? x[g] * -1 + p : i, i = i < T[g] * -1 ? T[g] * -1 : i);
            var O = Math.ceil(m.autoSlideTransTimer / 10) + 1, A = W.getSliderOffset(t, "x"), E = (W.calcActiveOffset(m, i, u, o, N, b, C[g], g) + N[g] + b) % b, $ = u.slice();
            if (m.snapToChildren && !m.infiniteSlider) i = u[E]; else if (m.infiniteSlider && m.snapToChildren) {
                for (;i >= $[0]; ) $.splice(0, 0, $[b - 1] + e(t).width()), $.splice(b, 1);
                for (;i <= $[b - 1]; ) $.splice(b, 0, $[0] - e(t).width()), $.splice(0, 1);
                E = W.calcActiveOffset(m, i, $, o, N, b, C[g], g), i = $[E];
            }
            var M, B, P = i - A, H = new Array();
            W.showScrollbar(m, l);
            for (var I = 0; I <= O; I++) M = I, M /= O, M--, B = A + P * (Math.pow(M, 5) + 1), 
            H[H.length] = B;
            for (var q = (E + N[g] + b) % b, z = 0, I = 0; I < H.length; I++) if ((0 == I || Math.abs(H[I] - z) > 1 || I >= H.length - 2) && (z = H[I], 
            s[I] = W.slowScrollHorizontalIntervalTimer(n * (I + 1), t, r, H[I], l, a, o, d, c, f, E, h, u, v, b, S, g, p, q, m)), 
            0 == I && "" != m.onSlideStart) {
                var q = (C[g] + N[g] + b) % b;
                m.onSlideStart(new W.args("start", m, t, e(t).children(":eq(" + q + ")"), q, E));
            }
            var D = !1;
            m.infiniteSlider ? q != k[g] && (D = !0) : E != C[g] && (D = !0), D && "" != m.onSlideComplete && (s[s.length] = W.onSlideCompleteTimer(n * (I + 1), m, t, e(t).children(":eq(" + q + ")"), q, g)), 
            y[g] = s, W.hideScrollbar(m, s, I, H, l, a, o, c, f, g), W.autoSlide(t, r, s, l, a, o, d, c, f, h, u, S, g, v, b, p, m);
        },
        autoSlide: function(e, i, t, r, n, s, l, a, o, d, c, f, h, u, S, g, v) {
            return !!w[h].autoSlide && (W.autoSlidePause(h), void (p[h] = setTimeout(function() {
                !v.infiniteSlider && C[h] > c.length - 1 && (C[h] = C[h] - S);
                var b = C[h] + N[h] + 1;
                W.changeSlide(b, e, i, t, r, n, s, l, a, o, d, c, f, h, u, S, g, v), W.autoSlide(e, i, t, r, n, s, l, a, o, d, c, f, h, u, S, g, v);
            }, v.autoSlideTimer + v.autoSlideTransTimer)));
        },
        autoSlidePause: function(e) {
            clearTimeout(p[e]);
        },
        isUnselectable: function(i, t) {
            return "" != t.unselectableSelector && 1 == e(i).closest(t.unselectableSelector).length;
        },
        slowScrollHorizontalIntervalTimer: function(e, i, t, r, n, s, l, a, o, d, c, f, h, u, S, g, v, b, p, m) {
            var w = setTimeout(function() {
                W.slowScrollHorizontalInterval(i, t, r, n, s, l, a, o, d, c, f, h, u, S, g, v, b, p, m);
            }, e);
            return w;
        },
        onSlideCompleteTimer: function(e, i, t, r, n, s) {
            var l = setTimeout(function() {
                W.onSlideComplete(i, t, r, n, s);
            }, e);
            return l;
        },
        hideScrollbarIntervalTimer: function(e, i, t, r, n, s, l, a, o, d) {
            var c = setTimeout(function() {
                W.hideScrollbarInterval(i, t, r, n, s, l, a, o, d);
            }, e);
            return c;
        },
        updateBackfaceVisibilityTimer: function(e, i, t, r, n) {
            var s = setTimeout(function() {
                W.updateBackfaceVisibility(i, t, r, n);
            }, e);
            return s;
        },
        updateBackfaceVisibility: function(i, t, r, n) {
            for (var s = (C[t] + N[t] + r) % r, l = Array(), a = 0; a < 2 * n.hardwareAccelBuffer; a++) {
                var o = W.mod(s + a - n.hardwareAccelBuffer, r);
                if ("visible" == e(i).eq(o).css("-webkit-backface-visibility")) {
                    l[l.length] = o;
                    var d = W.mod(o + 2 * n.hardwareAccelBuffer, r), c = W.mod(o - 2 * n.hardwareAccelBuffer, r);
                    e(i).eq(o).css("-webkit-backface-visibility", "hidden"), l.indexOf(c) == -1 && e(i).eq(c).css("-webkit-backface-visibility", ""), 
                    l.indexOf(d) == -1 && e(i).eq(d).css("-webkit-backface-visibility", "");
                }
            }
        },
        mod: function(e, i) {
            var t = e % i;
            return t < 0 ? t + i : t;
        },
        args: function(i, t, r, n, s, l) {
            this.prevSlideNumber = void 0 == e(r).parent().data("args") ? void 0 : e(r).parent().data("args").prevSlideNumber, 
            this.prevSlideObject = void 0 == e(r).parent().data("args") ? void 0 : e(r).parent().data("args").prevSlideObject, 
            this.targetSlideNumber = l + 1, this.targetSlideObject = e(r).children(":eq(" + l + ")"), 
            this.slideChanged = !1, "load" == i ? (this.targetSlideNumber = void 0, this.targetSlideObject = void 0) : "start" == i ? (this.targetSlideNumber = void 0, 
            this.targetSlideObject = void 0) : "change" == i ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == e(r).parent().data("args") ? t.startAtSlide : e(r).parent().data("args").currentSlideNumber, 
            this.prevSlideObject = e(r).children(":eq(" + this.prevSlideNumber + ")")) : "complete" == i && (this.slideChanged = e(r).parent().data("args").slideChanged), 
            this.settings = t, this.data = e(r).parent().data("iosslider"), this.sliderObject = r, 
            this.sliderContainerObject = e(r).parent(), this.currentSlideObject = n, this.currentSlideNumber = s + 1, 
            this.currentSliderOffset = W.getSliderOffset(r, "x") * -1;
        },
        preventDrag: function(e) {
            e.preventDefault();
        },
        preventClick: function(e) {
            return e.stopImmediatePropagation(), !1;
        },
        enableClick: function() {
            return !0;
        }
    };
    W.setBrowserInfo();
    var $ = {
        init: function(n, o) {
            d = W.has3DTransform();
            var h = e.extend(!0, {
                elasticPullResistance: .6,
                frictionCoefficient: .92,
                elasticFrictionCoefficient: .6,
                snapFrictionCoefficient: .92,
                snapToChildren: !1,
                snapSlideCenter: !1,
                startAtSlide: 1,
                scrollbar: !1,
                scrollbarDrag: !1,
                scrollbarHide: !0,
                scrollbarPaging: !1,
                scrollbarLocation: "top",
                scrollbarContainer: "",
                scrollbarOpacity: .4,
                scrollbarHeight: "4px",
                scrollbarBorder: "0",
                scrollbarMargin: "5px",
                scrollbarBackground: "#000",
                scrollbarBorderRadius: "100px",
                scrollbarShadow: "0 0 0 #000",
                scrollbarElasticPullResistance: .9,
                desktopClickDrag: !1,
                keyboardControls: !1,
                tabToAdvance: !1,
                responsiveSlideContainer: !0,
                responsiveSlides: !0,
                navSlideSelector: "",
                navPrevSelector: "",
                navNextSelector: "",
                autoSlideToggleSelector: "",
                autoSlide: !1,
                autoSlideTimer: 5e3,
                autoSlideTransTimer: 750,
                autoSlideHoverPause: !0,
                infiniteSlider: !1,
                snapVelocityThreshold: 5,
                slideStartVelocityThreshold: 0,
                horizontalSlideLockThreshold: 5,
                verticalSlideLockThreshold: 3,
                hardwareAccelBuffer: 5,
                stageCSS: {
                    position: "relative",
                    top: "0",
                    left: "0",
                    overflow: "hidden",
                    zIndex: 1
                },
                unselectableSelector: "",
                onSliderLoaded: "",
                onSliderUpdate: "",
                onSliderResize: "",
                onSlideStart: "",
                onSlideChange: "",
                onSlideComplete: ""
            }, n);
            return void 0 == o && (o = this), e(o).each(function(n) {
                function o() {
                    W.autoSlidePause(d), ve = e(le).find("a"), be = e(le).find("[onclick]"), pe = e(le).find("*"), 
                    e(J).css("width", ""), e(J).css("height", ""), e(le).css("width", ""), R = e(le).children().not("script").get(), 
                    V = new Array(), Y = new Array(), h.responsiveSlides && e(R).css("width", ""), T[d] = 0, 
                    L = new Array(), H = e(J).parent().width(), q = e(J).outerWidth(!0), h.responsiveSlideContainer && (q = e(J).outerWidth(!0) > H ? H : e(J).width()), 
                    e(J).css({
                        position: h.stageCSS.position,
                        top: h.stageCSS.top,
                        left: h.stageCSS.left,
                        overflow: h.stageCSS.overflow,
                        zIndex: h.stageCSS.zIndex,
                        webkitPerspective: 1e3,
                        webkitBackfaceVisibility: "hidden",
                        msTouchAction: "pan-y",
                        width: q
                    }), e(h.unselectableSelector).css({
                        cursor: "default"
                    });
                    for (var i = 0; i < R.length; i++) {
                        V[i] = e(R[i]).width(), Y[i] = e(R[i]).outerWidth(!0);
                        var t = Y[i];
                        h.responsiveSlides && (Y[i] > q ? (t = q + (Y[i] - V[i]) * -1, V[i] = t, Y[i] = q) : t = V[i], 
                        e(R[i]).css({
                            width: t
                        })), e(R[i]).css({
                            overflow: "hidden",
                            position: "absolute"
                        }), L[i] = T[d] * -1, T[d] = T[d] + t + (Y[i] - V[i]);
                    }
                    h.snapSlideCenter && (Q = .5 * (q - Y[0]), h.responsiveSlides && Y[0] > q && (Q = 0)), 
                    A[d] = 2 * T[d];
                    for (var i = 0; i < R.length; i++) W.setSliderOffset(e(R[i]), L[i] * -1 + T[d] + Q), 
                    L[i] = L[i] - T[d];
                    if (!h.infiniteSlider && !h.snapSlideCenter) {
                        for (var r = 0; r < L.length && !(L[r] <= (2 * T[d] - q) * -1); r++) de = r;
                        L.splice(de + 1, L.length), L[L.length] = (2 * T[d] - q) * -1;
                    }
                    for (var r = 0; r < L.length; r++) ie[r] = L[r];
                    if (Z && (w[d].startAtSlide = w[d].startAtSlide > L.length ? L.length : w[d].startAtSlide, 
                    h.infiniteSlider ? (w[d].startAtSlide = (w[d].startAtSlide - 1 + ae) % ae, C[d] = w[d].startAtSlide) : (w[d].startAtSlide = w[d].startAtSlide - 1 < 0 ? L.length - 1 : w[d].startAtSlide, 
                    C[d] = w[d].startAtSlide - 1), k[d] = C[d]), x[d] = T[d] + Q, e(le).css({
                        position: "relative",
                        cursor: g,
                        webkitPerspective: "0",
                        webkitBackfaceVisibility: "hidden",
                        width: T[d] + "px"
                    }), ge = T[d], T[d] = 2 * T[d] - q + 2 * Q, he = ge + Q < q || 0 == q, he && e(le).css({
                        cursor: "default"
                    }), I = e(J).parent().outerHeight(!0), z = e(J).height(), h.responsiveSlideContainer && (z = z > I ? I : z), 
                    e(J).css({
                        height: z
                    }), W.setSliderOffset(le, L[C[d]]), h.infiniteSlider && !he) {
                        for (var n = W.getSliderOffset(e(le), "x"), s = (N[d] + ae) % ae * -1; s < 0; ) {
                            var l = 0, a = W.getSliderOffset(e(R[0]), "x");
                            e(R).each(function(e) {
                                W.getSliderOffset(this, "x") < a && (a = W.getSliderOffset(this, "x"), l = e);
                            });
                            var o = x[d] + ge;
                            W.setSliderOffset(e(R)[l], o), x[d] = L[1] * -1 + Q, T[d] = x[d] + ge - q, L.splice(0, 1), 
                            L.splice(L.length, 0, o * -1 + Q), s++;
                        }
                        for (;L[0] * -1 - ge + Q > 0 && h.snapSlideCenter && Z; ) {
                            var c = 0, f = W.getSliderOffset(e(R[0]), "x");
                            e(R).each(function(e) {
                                W.getSliderOffset(this, "x") > f && (f = W.getSliderOffset(this, "x"), c = e);
                            });
                            var o = x[d] - Y[c];
                            W.setSliderOffset(e(R)[c], o), L.splice(0, 0, o * -1 + Q), L.splice(L.length - 1, 1), 
                            x[d] = L[0] * -1 + Q, T[d] = x[d] + ge - q, N[d]--, C[d]++;
                        }
                        for (;n <= T[d] * -1; ) {
                            var l = 0, a = W.getSliderOffset(e(R[0]), "x");
                            e(R).each(function(e) {
                                W.getSliderOffset(this, "x") < a && (a = W.getSliderOffset(this, "x"), l = e);
                            });
                            var o = x[d] + ge;
                            W.setSliderOffset(e(R)[l], o), x[d] = L[1] * -1 + Q, T[d] = x[d] + ge - q, L.splice(0, 1), 
                            L.splice(L.length, 0, o * -1 + Q), N[d]++, C[d]--;
                        }
                    }
                    return W.setSliderOffset(le, L[C[d]]), W.updateBackfaceVisibility(R, d, ae, h), 
                    h.desktopClickDrag || e(le).css({
                        cursor: "default"
                    }), h.scrollbar && (e("." + G).css({
                        margin: h.scrollbarMargin,
                        overflow: "hidden",
                        display: "none"
                    }), e("." + G + " ." + K).css({
                        border: h.scrollbarBorder
                    }), D = parseInt(e("." + G).css("marginLeft")) + parseInt(e("." + G).css("marginRight")), 
                    X = parseInt(e("." + G + " ." + K).css("borderLeftWidth"), 10) + parseInt(e("." + G + " ." + K).css("borderRightWidth"), 10), 
                    B = "" != h.scrollbarContainer ? e(h.scrollbarContainer).width() : q, P = q / ge * (B - D), 
                    h.scrollbarHide || (te = h.scrollbarOpacity), e("." + G).css({
                        position: "absolute",
                        left: 0,
                        width: B - D + "px",
                        margin: h.scrollbarMargin
                    }), "top" == h.scrollbarLocation ? e("." + G).css("top", "0") : e("." + G).css("bottom", "0"), 
                    e("." + G + " ." + K).css({
                        borderRadius: h.scrollbarBorderRadius,
                        background: h.scrollbarBackground,
                        height: h.scrollbarHeight,
                        width: P - X + "px",
                        minWidth: h.scrollbarHeight,
                        border: h.scrollbarBorder,
                        webkitPerspective: 1e3,
                        webkitBackfaceVisibility: "hidden",
                        position: "relative",
                        opacity: te,
                        filter: "alpha(opacity:" + 100 * te + ")",
                        boxShadow: h.scrollbarShadow
                    }), W.setSliderOffset(e("." + G + " ." + K), Math.floor((L[C[d]] * -1 - x[d] + Q) / (T[d] - x[d] + Q) * (B - D - P))), 
                    e("." + G).css({
                        display: "block"
                    }), p = e("." + G + " ." + K), M = e("." + G)), h.scrollbarDrag && !he && e("." + G + " ." + K).css({
                        cursor: g
                    }), h.infiniteSlider && (U = (T[d] + q) / 3), "" != h.navSlideSelector && e(h.navSlideSelector).each(function(i) {
                        e(this).css({
                            cursor: "pointer"
                        }), e(this).unbind(Oe).bind(Oe, function(t) {
                            "touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), 
                            Oe = t.type + ".iosSliderEvent", W.changeSlide(i, le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h);
                        });
                    }), "" != h.navPrevSelector && (e(h.navPrevSelector).css({
                        cursor: "pointer"
                    }), e(h.navPrevSelector).unbind(Oe).bind(Oe, function(i) {
                        "touchstart" == i.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), 
                        Oe = i.type + ".iosSliderEvent";
                        var t = (C[d] + N[d] + ae) % ae;
                        (t > 0 || h.infiniteSlider) && W.changeSlide(t - 1, le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h);
                    })), "" != h.navNextSelector && (e(h.navNextSelector).css({
                        cursor: "pointer"
                    }), e(h.navNextSelector).unbind(Oe).bind(Oe, function(i) {
                        "touchstart" == i.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), 
                        Oe = i.type + ".iosSliderEvent";
                        var t = (C[d] + N[d] + ae) % ae;
                        (t < L.length - 1 || h.infiniteSlider) && W.changeSlide(t + 1, le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h);
                    })), h.autoSlide && !he && "" != h.autoSlideToggleSelector && (e(h.autoSlideToggleSelector).css({
                        cursor: "pointer"
                    }), e(h.autoSlideToggleSelector).unbind(Oe).bind(Oe, function(i) {
                        "touchstart" == i.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), 
                        Oe = i.type + ".iosSliderEvent", ue ? (W.autoSlide(le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h), 
                        ue = !1, e(h.autoSlideToggleSelector).removeClass("on")) : (W.autoSlidePause(d), 
                        ue = !0, e(h.autoSlideToggleSelector).addClass("on"));
                    })), W.autoSlide(le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h), e(J).bind("mouseleave.iosSliderEvent", function() {
                        return !!ue || void W.autoSlide(le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h);
                    }), e(J).bind("touchend.iosSliderEvent", function() {
                        return !!ue || void W.autoSlide(le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h);
                    }), h.autoSlideHoverPause && e(J).bind("mouseenter.iosSliderEvent", function() {
                        W.autoSlidePause(d);
                    }), e(J).data("iosslider", {
                        obj: ye,
                        settings: h,
                        scrollerNode: le,
                        slideNodes: R,
                        numberOfSlides: ae,
                        centeredSlideOffset: Q,
                        sliderNumber: d,
                        originalOffsets: ie,
                        childrenOffsets: L,
                        sliderMax: T[d],
                        scrollbarClass: K,
                        scrollbarWidth: P,
                        scrollbarStageWidth: B,
                        stageWidth: q,
                        scrollMargin: D,
                        scrollBorder: X,
                        infiniteSliderOffset: N[d],
                        infiniteSliderWidth: U,
                        slideNodeOuterWidths: Y,
                        shortContent: he
                    }), Z = !1, !0;
                }
                i++;
                var d = i, S = new Array();
                w[d] = e.extend({}, h), x[d] = 0, T[d] = 0;
                var p, M, B, P, H, I, q, z, D, X, j, L, R, V, Y, U, F = new Array(0, 0), _ = new Array(0, 0), G = "scrollbarBlock" + i, K = "scrollbar" + i, Q = 0, J = e(this), Z = !0, ee = -1, ie = (new Array(), 
                new Array()), te = 0, re = 0, ne = 0, se = 0, le = e(this).children(":first-child"), ae = e(le).children().not("script").length, oe = !1, de = 0, ce = !1, fe = void 0;
                N[d] = 0;
                var he = !1;
                b[d] = -1;
                var ue = !1;
                m[d] = J, O[d] = !1;
                var Se, ge, ve, be, pe, me = !1, we = !1, Oe = "touchstart.iosSliderEvent click.iosSliderEvent";
                E[d] = !1, y[d] = new Array(), h.scrollbarDrag && (h.scrollbar = !0, h.scrollbarHide = !1);
                var ye = e(this), Ce = ye.data("iosslider");
                if (void 0 != Ce) return !0;
                for (var ke = [ "d", "e", "m", "o", " ", "v", "e", "r", "s", "i", "o", "n" ], Ne = Math.floor(12317 * Math.random()), n = 0; n < ke.length; n++) e(".i" + Ne).html(e(".i" + Ne).html() + ke[n]);
                if (parseInt(e().jquery.split(".").join(""), 10) >= 14.2 ? e(this).delegate("img", "dragstart.iosSliderEvent", function(e) {
                    e.preventDefault();
                }) : e(this).find("img").bind("dragstart.iosSliderEvent", function(e) {
                    e.preventDefault();
                }), h.infiniteSlider && (h.scrollbar = !1), h.infiniteSlider && 1 == ae && (h.infiniteSlider = !1), 
                h.scrollbar && ("" != h.scrollbarContainer ? e(h.scrollbarContainer).append("<div class = '" + G + "'><div class = '" + K + "'></div></div>") : e(le).parent().append("<div class = '" + G + "'><div class = '" + K + "'></div></div>")), 
                !o()) return !0;
                e(this).find("a").bind("mousedown", W.preventDrag), e(this).find("[onclick]").bind("click", W.preventDrag).each(function() {
                    e(this).data("onclick", this.onclick);
                });
                var ee = W.calcActiveOffset(h, W.getSliderOffset(e(le), "x"), L, q, N[d], ae, void 0, d), xe = (ee + N[d] + ae) % ae, Te = new W.args("load", h, le, e(le).children(":eq(" + xe + ")"), xe, xe);
                if (e(J).data("args", Te), "" != h.onSliderLoaded && h.onSliderLoaded(Te), b[d] = xe, 
                h.scrollbarPaging && h.scrollbar && !he && (e(M).css("cursor", "pointer"), e(M).bind("click.iosSliderEvent", function(i) {
                    this == i.target && (i.pageX > e(p).offset().left ? $.nextPage(J) : $.prevPage(J));
                })), w[d].responsiveSlides || w[d].responsiveSlideContainer) {
                    var Ae = a ? "orientationchange" : "resize", Ee = $B.debounce(function() {
                        if (!o()) return !0;
                        var i = e(J).data("args");
                        "" != h.onSliderResize && h.onSliderResize(i);
                    }, 150);
                    e(window).bind(Ae + ".iosSliderEvent-" + d, Ee);
                }
                if (!h.keyboardControls && !h.tabToAdvance || he || e(document).bind("keydown.iosSliderEvent", function(e) {
                    if (!c && !f) var e = e.originalEvent;
                    if (E[d]) return !0;
                    if (37 == e.keyCode && h.keyboardControls) {
                        e.preventDefault();
                        var i = (C[d] + N[d] + ae) % ae;
                        (i > 0 || h.infiniteSlider) && W.changeSlide(i - 1, le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h);
                    } else if (39 == e.keyCode && h.keyboardControls || 9 == e.keyCode && h.tabToAdvance) {
                        e.preventDefault();
                        var i = (C[d] + N[d] + ae) % ae;
                        (i < L.length - 1 || h.infiniteSlider) && W.changeSlide(i + 1, le, R, S, K, P, q, B, D, X, ie, L, Y, d, U, ae, Q, h);
                    }
                }), l || h.desktopClickDrag) {
                    var We = !1, $e = !1, Me = e(le), Be = e(le), Pe = !1;
                    h.scrollbarDrag && (Me = Me.add(p), Be = Be.add(M)), e(Me).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(i) {
                        if (e(window).one("scroll.iosSliderEvent", function(e) {
                            We = !1;
                        }), We) return !0;
                        if (We = !0, $e = !1, "touchstart" == i.type ? e(Be).unbind("mousedown.iosSliderEvent") : e(Be).unbind("touchstart.iosSliderEvent"), 
                        E[d] || he) return We = !1, oe = !1, !0;
                        if (Pe = W.isUnselectable(i.target, h)) return We = !1, oe = !1, !0;
                        if (Se = e(this)[0] === e(p)[0] ? p : le, !c && !f) var i = i.originalEvent;
                        if (W.autoSlidePause(d), pe.unbind(".disableClick"), "touchstart" == i.type) eventX = i.touches[0].pageX, 
                        eventY = i.touches[0].pageY; else {
                            if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges(); else if (document.selection) if (f) try {
                                document.selection.empty();
                            } catch (e) {} else document.selection.empty();
                            eventX = i.pageX, eventY = i.pageY, ce = !0, fe = le, e(this).css({
                                cursor: v
                            });
                        }
                        F = new Array(0, 0), _ = new Array(0, 0), t = 0, oe = !1;
                        for (var r = 0; r < S.length; r++) clearTimeout(S[r]);
                        var n = W.getSliderOffset(le, "x");
                        n > x[d] * -1 + Q + ge ? (n = x[d] * -1 + Q + ge, W.setSliderOffset(e("." + K), n), 
                        e("." + K).css({
                            width: P - X + "px"
                        })) : n < T[d] * -1 && (n = T[d] * -1, W.setSliderOffset(e("." + K), B - D - P), 
                        e("." + K).css({
                            width: P - X + "px"
                        }));
                        var s = e(this)[0] === e(p)[0] ? x[d] : 0;
                        re = (W.getSliderOffset(this, "x") - eventX - s) * -1, ne = (W.getSliderOffset(this, "y") - eventY) * -1, 
                        F[1] = eventX, _[1] = eventY, we = !1;
                    }), e(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(i) {
                        if (!c && !f) var i = i.originalEvent;
                        if (E[d] || he || Pe || !We) return !0;
                        var n = 0;
                        if ("touchmove" == i.type) eventX = i.touches[0].pageX, eventY = i.touches[0].pageY; else {
                            if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges(); else if (document.selection) if (f) try {
                                document.selection.empty();
                            } catch (e) {} else document.selection.empty();
                            if (eventX = i.pageX, eventY = i.pageY, !ce) return !0;
                            if (!u && ("undefined" != typeof i.webkitMovementX || "undefined" != typeof i.webkitMovementY) && 0 === i.webkitMovementY && 0 === i.webkitMovementX) return !0;
                        }
                        if (F[0] = F[1], F[1] = eventX, t = (F[1] - F[0]) / 2, _[0] = _[1], _[1] = eventY, 
                        r = (_[1] - _[0]) / 2, !oe) {
                            var l = (C[d] + N[d] + ae) % ae, a = new W.args("start", h, le, e(le).children(":eq(" + l + ")"), l, void 0);
                            e(J).data("args", a), "" != h.onSlideStart && h.onSlideStart(a);
                        }
                        if ((r > h.verticalSlideLockThreshold || r < h.verticalSlideLockThreshold * -1) && "touchmove" == i.type && !oe && (me = !0), 
                        (t > h.horizontalSlideLockThreshold || t < h.horizontalSlideLockThreshold * -1) && "touchmove" == i.type && i.preventDefault(), 
                        (t > h.slideStartVelocityThreshold || t < h.slideStartVelocityThreshold * -1) && (oe = !0), 
                        oe && !me) {
                            var o = W.getSliderOffset(le, "x"), S = e(Se)[0] === e(p)[0] ? x[d] : Q, g = e(Se)[0] === e(p)[0] ? (x[d] - T[d] - Q) / (B - D - P) : 1, v = e(Se)[0] === e(p)[0] ? h.scrollbarElasticPullResistance : h.elasticPullResistance, b = h.snapSlideCenter && e(Se)[0] === e(p)[0] ? 0 : Q, m = h.snapSlideCenter && e(Se)[0] === e(p)[0] ? Q : 0;
                            if ("touchmove" == i.type && (se != i.touches.length && (re = o * -1 + eventX), 
                            se = i.touches.length), h.infiniteSlider) {
                                if (o <= T[d] * -1) {
                                    var w = e(le).width();
                                    if (o <= A[d] * -1) {
                                        var O = ie[0] * -1;
                                        e(R).each(function(i) {
                                            W.setSliderOffset(e(R)[i], O + Q), i < L.length && (L[i] = O * -1), O += Y[i];
                                        }), re -= L[0] * -1, x[d] = L[0] * -1 + Q, T[d] = x[d] + w - q, N[d] = 0;
                                    } else {
                                        var y = 0, $ = W.getSliderOffset(e(R[0]), "x");
                                        e(R).each(function(e) {
                                            W.getSliderOffset(this, "x") < $ && ($ = W.getSliderOffset(this, "x"), y = e);
                                        });
                                        var M = x[d] + w;
                                        W.setSliderOffset(e(R)[y], M), x[d] = L[1] * -1 + Q, T[d] = x[d] + w - q, L.splice(0, 1), 
                                        L.splice(L.length, 0, M * -1 + Q), N[d]++;
                                    }
                                }
                                if (o >= x[d] * -1 || o >= 0) {
                                    var w = e(le).width();
                                    if (o >= 0) {
                                        var O = ie[0] * -1;
                                        for (e(R).each(function(i) {
                                            W.setSliderOffset(e(R)[i], O + Q), i < L.length && (L[i] = O * -1), O += Y[i];
                                        }), re += L[0] * -1, x[d] = L[0] * -1 + Q, T[d] = x[d] + w - q, N[d] = ae; L[0] * -1 - w + Q > 0; ) {
                                            var H = 0, I = W.getSliderOffset(e(R[0]), "x");
                                            e(R).each(function(e) {
                                                W.getSliderOffset(this, "x") > I && (I = W.getSliderOffset(this, "x"), H = e);
                                            });
                                            var M = x[d] - Y[H];
                                            W.setSliderOffset(e(R)[H], M), L.splice(0, 0, M * -1 + Q), L.splice(L.length - 1, 1), 
                                            x[d] = L[0] * -1 + Q, T[d] = x[d] + w - q, N[d]--, C[d]++;
                                        }
                                    } else {
                                        var H = 0, I = W.getSliderOffset(e(R[0]), "x");
                                        e(R).each(function(e) {
                                            W.getSliderOffset(this, "x") > I && (I = W.getSliderOffset(this, "x"), H = e);
                                        });
                                        var M = x[d] - Y[H];
                                        W.setSliderOffset(e(R)[H], M), L.splice(0, 0, M * -1 + Q), L.splice(L.length - 1, 1), 
                                        x[d] = L[0] * -1 + Q, T[d] = x[d] + w - q, N[d]--;
                                    }
                                }
                            } else {
                                var w = e(le).width();
                                o > x[d] * -1 + Q && (n = (x[d] + (re - S - eventX + b) * -1 * g - S) * v * -1 / g), 
                                o < T[d] * -1 && (n = (T[d] + m + (re - S - eventX) * -1 * g - S) * v * -1 / g);
                            }
                            if (W.setSliderOffset(le, (re - S - eventX - n) * -1 * g - S + m), h.scrollbar) {
                                W.showScrollbar(h, K), s = Math.floor((re - eventX - n - x[d] + b) / (T[d] - x[d] + Q) * (B - D - P) * g);
                                var z = P;
                                s <= 0 ? (z = P - X - s * -1, W.setSliderOffset(e("." + K), 0), e("." + K).css({
                                    width: z + "px"
                                })) : s >= B - D - X - P ? (z = B - D - X - s, W.setSliderOffset(e("." + K), s), 
                                e("." + K).css({
                                    width: z + "px"
                                })) : W.setSliderOffset(e("." + K), s);
                            }
                            "touchmove" == i.type && (j = i.touches[0].pageX);
                            var V = !1, U = W.calcActiveOffset(h, (re - eventX - n) * -1, L, q, N[d], ae, void 0, d), G = (U + N[d] + ae) % ae;
                            if (h.infiniteSlider ? G != k[d] && (V = !0) : U != C[d] && (V = !0), V) {
                                C[d] = U, k[d] = G, we = !0;
                                var a = new W.args("change", h, le, e(le).children(":eq(" + G + ")"), G, G);
                                e(J).data("args", a), "" != h.onSlideChange && h.onSlideChange(a), W.updateBackfaceVisibility(R, d, ae, h);
                            }
                        }
                    });
                    var He = e(window);
                    if (f || c) var He = e(document);
                    e(Me).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function(e) {
                        var e = e.originalEvent;
                        if ($e) return !1;
                        if ($e = !0, E[d] || he) return !0;
                        if (Pe) return !0;
                        if (0 != e.touches.length) for (var i = 0; i < e.touches.length; i++) e.touches[i].pageX == j && W.slowScrollHorizontal(le, R, S, K, t, r, P, q, B, D, X, ie, L, Y, d, U, ae, Se, we, Q, h); else W.slowScrollHorizontal(le, R, S, K, t, r, P, q, B, D, X, ie, L, Y, d, U, ae, Se, we, Q, h);
                        return me = !1, We = !1, !0;
                    }), e(He).bind("mouseup.iosSliderEvent-" + d, function(i) {
                        if (oe ? ve.unbind("click.disableClick").bind("click.disableClick", W.preventClick) : ve.unbind("click.disableClick").bind("click.disableClick", W.enableClick), 
                        be.each(function() {
                            this.onclick = function(i) {
                                return !oe && void (e(this).data("onclick") && e(this).data("onclick").call(this, i || window.event));
                            }, this.onclick = e(this).data("onclick");
                        }), parseFloat(e().jquery) >= 1.8 ? pe.each(function() {
                            var i = e._data(this, "events");
                            if (void 0 != i && void 0 != i.click && "iosSliderEvent" != i.click[0].namespace) {
                                if (!oe) return !1;
                                e(this).one("click.disableClick", W.preventClick);
                                var t = e._data(this, "events").click, r = t.pop();
                                t.splice(0, 0, r);
                            }
                        }) : parseFloat(e().jquery) >= 1.6 && pe.each(function() {
                            var i = e(this).data("events");
                            if (void 0 != i && void 0 != i.click && "iosSliderEvent" != i.click[0].namespace) {
                                if (!oe) return !1;
                                e(this).one("click.disableClick", W.preventClick);
                                var t = e(this).data("events").click, r = t.pop();
                                t.splice(0, 0, r);
                            }
                        }), !O[d]) {
                            if (he) return !0;
                            if (h.desktopClickDrag && e(le).css({
                                cursor: g
                            }), h.scrollbarDrag && e(p).css({
                                cursor: g
                            }), ce = !1, void 0 == fe) return !0;
                            W.slowScrollHorizontal(fe, R, S, K, t, r, P, q, B, D, X, ie, L, Y, d, U, ae, Se, we, Q, h), 
                            fe = void 0;
                        }
                        me = !1, We = !1;
                    });
                }
            });
        },
        destroy: function(i, t) {
            return void 0 == t && (t = this), e(t).each(function() {
                var t = e(this), r = t.data("iosslider");
                if (void 0 == r) return !1;
                void 0 == i && (i = !0), W.autoSlidePause(r.sliderNumber), O[r.sliderNumber] = !0, 
                e(window).unbind(".iosSliderEvent-" + r.sliderNumber), e(document).unbind(".iosSliderEvent-" + r.sliderNumber), 
                e(document).unbind("keydown.iosSliderEvent"), e(this).unbind(".iosSliderEvent"), 
                e(this).children(":first-child").unbind(".iosSliderEvent"), e(this).children(":first-child").children().unbind(".iosSliderEvent"), 
                e(r.settings.scrollbarBlockNode).unbind(".iosSliderEvent"), i && (e(this).attr("style", ""), 
                e(this).children(":first-child").attr("style", ""), e(this).children(":first-child").children().attr("style", ""), 
                e(r.settings.navSlideSelector).attr("style", ""), e(r.settings.navPrevSelector).attr("style", ""), 
                e(r.settings.navNextSelector).attr("style", ""), e(r.settings.autoSlideToggleSelector).attr("style", ""), 
                e(r.settings.unselectableSelector).attr("style", "")), r.settings.scrollbar && e(".scrollbarBlock" + r.sliderNumber).remove();
                for (var n = y[r.sliderNumber], s = 0; s < n.length; s++) clearTimeout(n[s]);
                t.removeData("iosslider"), t.removeData("args");
            });
        },
        update: function(i) {
            return void 0 == i && (i = this), e(i).each(function() {
                var i = e(this), t = i.data("iosslider");
                if (void 0 == t) return !1;
                t.settings.startAtSlide = i.data("args").currentSlideNumber, $.destroy(!1, this), 
                1 != t.numberOfSlides && t.settings.infiniteSlider && (t.settings.startAtSlide = (C[t.sliderNumber] + 1 + N[t.sliderNumber] + t.numberOfSlides) % t.numberOfSlides), 
                $.init(t.settings, this);
                var r = new W.args("update", t.settings, t.scrollerNode, e(t.scrollerNode).children(":eq(" + (t.settings.startAtSlide - 1) + ")"), t.settings.startAtSlide - 1, t.settings.startAtSlide - 1);
                e(t.stageNode).data("args", r), "" != t.settings.onSliderUpdate && t.settings.onSliderUpdate(r);
            });
        },
        addSlide: function(i, t) {
            return this.each(function() {
                var r = e(this), n = r.data("iosslider");
                return void 0 != n && (0 == e(n.scrollerNode).children().length ? (e(n.scrollerNode).append(i), 
                r.data("args").currentSlideNumber = 1) : n.settings.infiniteSlider ? (1 == t ? e(n.scrollerNode).children(":eq(0)").before(i) : e(n.scrollerNode).children(":eq(" + (t - 2) + ")").after(i), 
                N[n.sliderNumber] < -1 && C[n.sliderNumber]--, r.data("args").currentSlideNumber >= t && C[n.sliderNumber]++) : (t <= n.numberOfSlides ? e(n.scrollerNode).children(":eq(" + (t - 1) + ")").before(i) : e(n.scrollerNode).children(":eq(" + (t - 2) + ")").after(i), 
                r.data("args").currentSlideNumber >= t && r.data("args").currentSlideNumber++), 
                r.data("iosslider").numberOfSlides++, void $.update(this));
            });
        },
        removeSlide: function(i) {
            return this.each(function() {
                var t = e(this), r = t.data("iosslider");
                return void 0 != r && (e(r.scrollerNode).children(":eq(" + (i - 1) + ")").remove(), 
                C[r.sliderNumber] > i - 1 && C[r.sliderNumber]--, t.data("iosslider").numberOfSlides--, 
                void $.update(this));
            });
        },
        goToSlide: function(i, t) {
            return void 0 == t && (t = this), e(t).each(function() {
                var t = e(this), r = t.data("iosslider");
                return void 0 != r && !r.shortContent && (i = i > r.childrenOffsets.length ? r.childrenOffsets.length - 1 : i - 1, 
                void W.changeSlide(i, e(r.scrollerNode), e(r.slideNodes), y[r.sliderNumber], r.scrollbarClass, r.scrollbarWidth, r.stageWidth, r.scrollbarStageWidth, r.scrollMargin, r.scrollBorder, r.originalOffsets, r.childrenOffsets, r.slideNodeOuterWidths, r.sliderNumber, r.infiniteSliderWidth, r.numberOfSlides, r.centeredSlideOffset, r.settings));
            });
        },
        prevSlide: function() {
            return this.each(function() {
                var i = e(this), t = i.data("iosslider");
                if (void 0 == t || t.shortContent) return !1;
                var r = (C[t.sliderNumber] + N[t.sliderNumber] + t.numberOfSlides) % t.numberOfSlides;
                (r > 0 || t.settings.infiniteSlider) && W.changeSlide(r - 1, e(t.scrollerNode), e(t.slideNodes), y[t.sliderNumber], t.scrollbarClass, t.scrollbarWidth, t.stageWidth, t.scrollbarStageWidth, t.scrollMargin, t.scrollBorder, t.originalOffsets, t.childrenOffsets, t.slideNodeOuterWidths, t.sliderNumber, t.infiniteSliderWidth, t.numberOfSlides, t.centeredSlideOffset, t.settings), 
                C[t.sliderNumber] = r;
            });
        },
        nextSlide: function() {
            return this.each(function() {
                var i = e(this), t = i.data("iosslider");
                if (void 0 == t || t.shortContent) return !1;
                var r = (C[t.sliderNumber] + N[t.sliderNumber] + t.numberOfSlides) % t.numberOfSlides;
                (r < t.childrenOffsets.length - 1 || t.settings.infiniteSlider) && W.changeSlide(r + 1, e(t.scrollerNode), e(t.slideNodes), y[t.sliderNumber], t.scrollbarClass, t.scrollbarWidth, t.stageWidth, t.scrollbarStageWidth, t.scrollMargin, t.scrollBorder, t.originalOffsets, t.childrenOffsets, t.slideNodeOuterWidths, t.sliderNumber, t.infiniteSliderWidth, t.numberOfSlides, t.centeredSlideOffset, t.settings), 
                C[t.sliderNumber] = r;
            });
        },
        prevPage: function(i) {
            return void 0 == i && (i = this), e(i).each(function() {
                var i = e(this), t = i.data("iosslider");
                if (void 0 == t) return !1;
                var r = W.getSliderOffset(t.scrollerNode, "x") + t.stageWidth;
                W.changeOffset(r, e(t.scrollerNode), e(t.slideNodes), y[t.sliderNumber], t.scrollbarClass, t.scrollbarWidth, t.stageWidth, t.scrollbarStageWidth, t.scrollMargin, t.scrollBorder, t.originalOffsets, t.childrenOffsets, t.slideNodeOuterWidths, t.sliderNumber, t.infiniteSliderWidth, t.numberOfSlides, t.centeredSlideOffset, t.settings);
            });
        },
        nextPage: function(i) {
            return void 0 == i && (i = this), e(i).each(function() {
                var i = e(this), t = i.data("iosslider");
                if (void 0 == t) return !1;
                var r = W.getSliderOffset(t.scrollerNode, "x") - t.stageWidth;
                W.changeOffset(r, e(t.scrollerNode), e(t.slideNodes), y[t.sliderNumber], t.scrollbarClass, t.scrollbarWidth, t.stageWidth, t.scrollbarStageWidth, t.scrollMargin, t.scrollBorder, t.originalOffsets, t.childrenOffsets, t.slideNodeOuterWidths, t.sliderNumber, t.infiniteSliderWidth, t.numberOfSlides, t.centeredSlideOffset, t.settings);
            });
        },
        lock: function() {
            return this.each(function() {
                var i = e(this), t = i.data("iosslider");
                return void 0 != t && !t.shortContent && (e(t.scrollerNode).css({
                    cursor: "default"
                }), void (E[t.sliderNumber] = !0));
            });
        },
        unlock: function() {
            return this.each(function() {
                var i = e(this), t = i.data("iosslider");
                return void 0 != t && !t.shortContent && (e(t.scrollerNode).css({
                    cursor: g
                }), void (E[t.sliderNumber] = !1));
            });
        },
        getData: function() {
            return this.each(function() {
                var i = e(this), t = i.data("iosslider");
                return void 0 != t && !t.shortContent && t;
            });
        },
        autoSlidePause: function() {
            return this.each(function() {
                var i = e(this), t = i.data("iosslider");
                return void 0 != t && !t.shortContent && (w[t.sliderNumber].autoSlide = !1, W.autoSlidePause(t.sliderNumber), 
                t);
            });
        },
        autoSlidePlay: function() {
            return this.each(function() {
                var i = e(this), t = i.data("iosslider");
                return void 0 != t && !t.shortContent && (w[t.sliderNumber].autoSlide = !0, W.autoSlide(e(t.scrollerNode), e(t.slideNodes), y[t.sliderNumber], t.scrollbarClass, t.scrollbarWidth, t.stageWidth, t.scrollbarStageWidth, t.scrollMargin, t.scrollBorder, t.originalOffsets, t.childrenOffsets, t.slideNodeOuterWidths, t.sliderNumber, t.infiniteSliderWidth, t.numberOfSlides, t.centeredSlideOffset, t.settings), 
                t);
            });
        }
    };
    e.fn.iosSlider = function(i) {
        return $[i] ? $[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("invalid method call!") : $.init.apply(this, arguments);
    };
}(jQuery), function() {
    var e, i, t, r, n, s, l;
    l = $B.TH.Util.isSmallScreen(), t = !1, r = function() {
        return !$B.TH.Util.isSmallScreen() && !$B.TH.Util.isAndroid() && $("#header-container").is(":visible");
    }, i = function() {
        return $("#header-container .logo").height() + 18;
    }, e = function() {
        var e;
        if (!window.edit_page.isShowPage && 0 === parseInt($("#strikingly-menu-container").css("marginLeft"), 10) && (e = $("#header-container"), 
        0 === parseInt(e.css("marginLeft"), 10))) return e.animate({
            marginLeft: -100
        });
    }, n = function() {
        var t, s, a, o, d, c, f;
        return l = $B.TH.Util.isSmallScreen(), t = $("#header-container"), s = $("#header-spacer"), 
        f = $("li.slide").first().find(".spacer"), r() ? (o = t.height() - 0, s.show().css("height", o), 
        d = $("#header-container .logo").height(), $("a.section-anchor").css("top", -o + d + 20), 
        $("a.section-anchor").first().css("top", -o)) : ($(".spacer").hide(), s.hide()), 
        $("#header-container .logo img").load(n), c = $(".header .logo img").first().attr("src"), 
        l && (!c || c.indexOf("assets/icons/transparent.png") > -1) ? ($(".header .power").hide(), 
        t.css("height", 0)) : ($(".header .power").show(), t.css("height", "auto")), $(".strikingly-slider .container").each(function() {
            var e, i;
            return i = $(this), e = i.find(".valign"), e.css({
                margin: "0"
            });
        }), $(".strikingly-slider .container").each(function() {
            var e, i, t, r;
            return i = $(this), r = i.height(), e = i.find(".valign"), t = r - e.height(), t < 0 && (t = 0), 
            e.css({
                "margin-top": t / 2 + "px"
            });
        }), $(".subtitle").each(function() {
            var e;
            if (e = $(this).find(".line"), 2 === e.length && e.eq(0).offset().top !== e.eq(1).offset().top) return e.eq(0).hide(), 
            e.eq(1).css({
                display: "block",
                margin: "20px auto 0 auto"
            });
        }), a = $(window).height(), $(".resize, li.slide:first-child .wide.cta-section").each(function(e, r) {
            var n, s, o, d, c, f, h;
            if (h = $(this), n = h.find(".container").first(), !(h.hasClass("no-resize") || (f = a, 
            0 === e && h.parent().is(":first-child") ? l ? f -= t.outerHeight() : t.is(":visible") && (f -= t.height()) : t.is(":visible") && (f -= t.height() - i()), 
            s = h.outerHeight(), Math.abs(s - f) < 64 && $B.TH.Util.isSmallScreen()))) return n.outerHeight(!1) < f ? (o = .5 * (f - n.outerHeight(!1)), 
            c = Math.min(400, Math.floor(o)), d = Math.min(400, Math.ceil(o)), h.stop().animate({
                "padding-top": c,
                "padding-bottom": d
            })) : void 0;
        }), $B.TH.Util.isIpad() && $("#header-container").addClass("no-flicker"), e();
    }, s = function() {
        var e, n, s, l, a;
        if (r()) if (e = $("#header-container"), a = $(window).scrollTop(), s = -parseInt(e.css("margin-top"), 10), 
        s > a - 15) l = -(a - 15), l > 0 && (l = 0), e.stop(!1, !0).css("margin-top", l); else {
            if (t) return;
            if (n = i(), a > e.height()) return e.stop().animate({
                "margin-top": -n + "px"
            }, 500, "swing");
        }
    }, window.runAfterDomBinding.add("fresh", function() {
        var e;
        return $B.TH.Core.applyTouchNav(), $B.TH.Core.enableSlider({
            fullscreen: !1,
            padding: 0
        }), n(), setTimeout(n, 1e3), window.edit_page.Event.subscribe("Slide.afterAdd", function(e, i) {
            return n();
        }), window.edit_page.Event.subscribe("ImageComponent.afterChange", function(e, i) {
            return n();
        }), $(window).resize(n), $("#navbar-top-button img").click(function() {
            return window.location = "#1";
        }), window.edit_page.Event.subscribe("Menu.beforeChange", function(e, i) {
            return t = !0;
        }), window.edit_page.Event.subscribe("Menu.afterChange", function(e, i) {
            return t = !1, s();
        }), $(window).scroll(s), s(), window.edit_page.isShowPage && (e = $(".wide"), e.each(function(i, t) {
            var r, n;
            return n = $(t), r = e.eq(i + 1), n.hasClass("image") || n.hasClass("gray") || !r.length || r.hasClass("image") || r.hasClass("gray") ? n.removeClass("white-next") : n.addClass("white-next");
        })), $(".signup-form-container, .email-form").each(function() {
            return $(this).find(".input").each(function() {
                var e, i, t;
                if (t = $(this).find("label.outside"), "none" !== t.css("display")) return i = $(this).find("input, textarea"), 
                e = function() {
                    return "" === i.val() ? t.show() : t.hide();
                }, i.keypress(function() {
                    if ("" === i.val()) return t.hide();
                }), i.keyup(e), i.blur(e), i.focus(function() {
                    return t.hide();
                }), t.click(function() {
                    return i.focus();
                });
            });
        });
    });
}.call(this);
