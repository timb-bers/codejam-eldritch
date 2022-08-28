(() => {
  "use strict";
  var e = {};
  (e.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var r;
      e.g.importScripts && (r = e.g.location + "");
      var t = e.g.document;
      if (!r && t && (t.currentScript && (r = t.currentScript.src), !r)) {
        var n = t.getElementsByTagName("script");
        n.length && (r = n[n.length - 1].src);
      }
      if (!r)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (r = r
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = r + "../");
    })();
  const r = {
      azathoth: e.p + "assets/Ancients/Azathoth.png",
      cthulhu: e.p + "assets/Ancients/Cthulthu.png",
      iogSothoth: e.p + "assets/Ancients/IogSothoth.png",
      shubNiggurath: e.p + "assets/Ancients/ShubNiggurath.png",
    },
    t = [
      {
        id: "azathoth",
        name: "azathoth",
        cardFace: r.azathoth,
        firstStage: { greenCards: 1, blueCards: 1, brownCards: 2 },
        secondStage: { greenCards: 2, blueCards: 1, brownCards: 3 },
        thirdStage: { greenCards: 2, blueCards: 0, brownCards: 4 },
      },
      {
        id: "cthulhu",
        name: "cthulhu",
        cardFace: r.cthulhu,
        firstStage: { greenCards: 0, blueCards: 2, brownCards: 2 },
        secondStage: { greenCards: 1, blueCards: 0, brownCards: 3 },
        thirdStage: { greenCards: 2, blueCards: 0, brownCards: 4 },
      },
      {
        id: "iogSothoth",
        name: "iogSothoth",
        cardFace: r.iogSothoth,
        firstStage: { greenCards: 0, blueCards: 1, brownCards: 2 },
        secondStage: { greenCards: 2, blueCards: 1, brownCards: 3 },
        thirdStage: { greenCards: 3, blueCards: 0, brownCards: 4 },
      },
      {
        id: "shubNiggurath",
        name: "shubNiggurath",
        cardFace: r.shubNiggurath,
        firstStage: { greenCards: 1, blueCards: 1, brownCards: 2 },
        secondStage: { greenCards: 3, blueCards: 1, brownCards: 2 },
        thirdStage: { greenCards: 2, blueCards: 0, brownCards: 4 },
      },
    ],
    n = [
      { id: "veryEasy", name: "Очень низкая" },
      { id: "easy", name: "Низкая" },
      { id: "normal", name: "Средняя" },
      { id: "hard", name: "Высокая" },
      { id: "veryHard", name: "Очень высокая" },
    ],
    a = {
      brown1: e.p + "assets/MythicCards/brown/brown1.png",
      brown2: e.p + "assets/MythicCards/brown/brown2.png",
      brown3: e.p + "assets/MythicCards/brown/brown3.png",
      brown4: e.p + "assets/MythicCards/brown/brown4.png",
      brown5: e.p + "assets/MythicCards/brown/brown5.png",
      brown6: e.p + "assets/MythicCards/brown/brown6.png",
      brown7: e.p + "assets/MythicCards/brown/brown7.png",
      brown8: e.p + "assets/MythicCards/brown/brown8.png",
      brown9: e.p + "assets/MythicCards/brown/brown9.png",
      brown10: e.p + "assets/MythicCards/brown/brown10.png",
      brown11: e.p + "assets/MythicCards/brown/brown11.png",
      brown12: e.p + "assets/MythicCards/brown/brown12.png",
      brown13: e.p + "assets/MythicCards/brown/brown13.png",
      brown14: e.p + "assets/MythicCards/brown/brown14.png",
      brown15: e.p + "assets/MythicCards/brown/brown15.png",
      brown16: e.p + "assets/MythicCards/brown/brown16.png",
      brown17: e.p + "assets/MythicCards/brown/brown17.png",
      brown18: e.p + "assets/MythicCards/brown/brown18.png",
      brown19: e.p + "assets/MythicCards/brown/brown19.png",
      brown20: e.p + "assets/MythicCards/brown/brown20.png",
      brown21: e.p + "assets/MythicCards/brown/brown21.png",
    },
    s = [
      {
        id: "brown1",
        cardFace: a.brown1,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown2",
        cardFace: a.brown2,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown3",
        cardFace: a.brown3,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown4",
        cardFace: a.brown4,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown5",
        cardFace: a.brown5,
        difficulty: "normal",
        color: "brown",
      },
      { id: "brown6", cardFace: a.brown6, difficulty: "hard", color: "brown" },
      { id: "brown7", cardFace: a.brown7, difficulty: "hard", color: "brown" },
      { id: "brown8", cardFace: a.brown8, difficulty: "hard", color: "brown" },
      { id: "brown9", cardFace: a.brown9, difficulty: "hard", color: "brown" },
      {
        id: "brown10",
        cardFace: a.brown10,
        difficulty: "hard",
        color: "brown",
      },
      {
        id: "brown11",
        cardFace: a.brown11,
        difficulty: "easy",
        color: "brown",
      },
      {
        id: "brown12",
        cardFace: a.brown12,
        difficulty: "easy",
        color: "brown",
      },
      {
        id: "brown13",
        cardFace: a.brown13,
        difficulty: "easy",
        color: "brown",
      },
      {
        id: "brown14",
        cardFace: a.brown14,
        difficulty: "easy",
        color: "brown",
      },
      {
        id: "brown15",
        cardFace: a.brown15,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown16",
        cardFace: a.brown16,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown17",
        cardFace: a.brown17,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown18",
        cardFace: a.brown18,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown19",
        cardFace: a.brown19,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown20",
        cardFace: a.brown20,
        difficulty: "normal",
        color: "brown",
      },
      {
        id: "brown21",
        cardFace: a.brown21,
        difficulty: "easy",
        color: "brown",
      },
    ],
    o = {
      blue1: e.p + "assets/MythicCards/blue/blue1.png",
      blue2: e.p + "assets/MythicCards/blue/blue2.png",
      blue3: e.p + "assets/MythicCards/blue/blue3.png",
      blue4: e.p + "assets/MythicCards/blue/blue4.png",
      blue5: e.p + "assets/MythicCards/blue/blue5.png",
      blue6: e.p + "assets/MythicCards/blue/blue6.png",
      blue7: e.p + "assets/MythicCards/blue/blue7.png",
      blue8: e.p + "assets/MythicCards/blue/blue8.png",
      blue9: e.p + "assets/MythicCards/blue/blue9.png",
      blue10: e.p + "assets/MythicCards/blue/blue10.png",
      blue11: e.p + "assets/MythicCards/blue/blue11.png",
      blue12: e.p + "assets/MythicCards/blue/blue12.png",
    },
    d = [
      { id: "blue1", cardFace: o.blue1, difficulty: "hard", color: "blue" },
      { id: "blue2", cardFace: o.blue2, difficulty: "hard", color: "blue" },
      { id: "blue3", cardFace: o.blue3, difficulty: "easy", color: "blue" },
      { id: "blue4", cardFace: o.blue4, difficulty: "easy", color: "blue" },
      { id: "blue5", cardFace: o.blue5, difficulty: "easy", color: "blue" },
      { id: "blue6", cardFace: o.blue6, difficulty: "hard", color: "blue" },
      { id: "blue7", cardFace: o.blue7, difficulty: "normal", color: "blue" },
      { id: "blue8", cardFace: o.blue8, difficulty: "hard", color: "blue" },
      { id: "blue9", cardFace: o.blue9, difficulty: "normal", color: "blue" },
      { id: "blue10", cardFace: o.blue10, difficulty: "easy", color: "blue" },
      { id: "blue11", cardFace: o.blue11, difficulty: "normal", color: "blue" },
      { id: "blue12", cardFace: o.blue12, difficulty: "normal", color: "blue" },
    ],
    c = {
      green1: e.p + "assets/MythicCards/green/green1.png",
      green2: e.p + "assets/MythicCards/green/green2.png",
      green3: e.p + "assets/MythicCards/green/green3.png",
      green4: e.p + "assets/MythicCards/green/green4.png",
      green5: e.p + "assets/MythicCards/green/green5.png",
      green6: e.p + "assets/MythicCards/green/green6.png",
      green7: e.p + "assets/MythicCards/green/green7.png",
      green8: e.p + "assets/MythicCards/green/green8.png",
      green9: e.p + "assets/MythicCards/green/green9.png",
      green10: e.p + "assets/MythicCards/green/green10.png",
      green11: e.p + "assets/MythicCards/green/green11.png",
      green12: e.p + "assets/MythicCards/green/green12.png",
      green13: e.p + "assets/MythicCards/green/green13.png",
      green14: e.p + "assets/MythicCards/green/green14.png",
      green15: e.p + "assets/MythicCards/green/green15.png",
      green16: e.p + "assets/MythicCards/green/green16.png",
      green17: e.p + "assets/MythicCards/green/green17.png",
      green18: e.p + "assets/MythicCards/green/green18.png",
    },
    i = [
      { id: "green1", cardFace: c.green1, difficulty: "easy", color: "green" },
      { id: "green2", cardFace: c.green2, difficulty: "hard", color: "green" },
      { id: "green3", cardFace: c.green3, difficulty: "hard", color: "green" },
      { id: "green4", cardFace: c.green4, difficulty: "hard", color: "green" },
      { id: "green5", cardFace: c.green5, difficulty: "hard", color: "green" },
      { id: "green6", cardFace: c.green6, difficulty: "hard", color: "green" },
      {
        id: "green7",
        cardFace: c.green7,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green8",
        cardFace: c.green8,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green9",
        cardFace: c.green9,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green10",
        cardFace: c.green10,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green11",
        cardFace: c.green11,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green12",
        cardFace: c.green12,
        difficulty: "easy",
        color: "green",
      },
      {
        id: "green13",
        cardFace: c.green13,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green14",
        cardFace: c.green14,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green15",
        cardFace: c.green15,
        difficulty: "normal",
        color: "green",
      },
      {
        id: "green16",
        cardFace: c.green16,
        difficulty: "easy",
        color: "green",
      },
      {
        id: "green17",
        cardFace: c.green17,
        difficulty: "easy",
        color: "green",
      },
      {
        id: "green18",
        cardFace: c.green18,
        difficulty: "easy",
        color: "green",
      },
    ],
    l = document.querySelector(".ancient-card"),
    g = document.getElementById("mix"),
    u = document.querySelector(".deck-card-close"),
    b = document.querySelector(".deck-card-open"),
    f = document.querySelector(".stage"),
    h = document.querySelector(".level-list"),
    y = h.querySelectorAll(".level-item"),
    p = l.querySelectorAll(".cards"),
    w = document.querySelectorAll(".stage1-item"),
    C = document.querySelectorAll(".stage2-item"),
    m = document.querySelectorAll(".stage3-item"),
    S = document.querySelector(".deck-card-close"),
    M = document.querySelector(".deck-card-open"),
    F = document.getElementById("veryEasy"),
    v = document.getElementById("easy"),
    k = document.getElementById("normal"),
    L = document.getElementById("hard"),
    x = document.getElementById("veryHard");
  let A = i.filter((e) => "easy" === e.difficulty).length,
    I =
      (i.filter((e) => "normal" === e.difficulty).length,
      i.filter((e) => "hard" === e.difficulty).length),
    E = d.filter((e) => "easy" === e.difficulty).length,
    q =
      (d.filter((e) => "normal" === e.difficulty).length,
      d.filter((e) => "hard" === e.difficulty).length),
    B = s.filter((e) => "easy" === e.difficulty).length,
    $ =
      (s.filter((e) => "normal" === e.difficulty).length,
      s.filter((e) => "hard" === e.difficulty).length),
    N = 0,
    z = 0,
    T = 0,
    _ = "",
    j = [],
    H = [],
    P = [],
    D = [],
    G = [],
    J = [],
    K = [],
    O = "";
  function Q() {
    for (let e = 0; e < n.length; e++)
      (h.children[e].id = n[e].id), (h.children[e].textContent = n[e].name);
  }
  function R(e) {
    let r = t.findIndex((r) => r.id === e);
    (w[0].textContent = t[r].firstStage.greenCards),
      (w[1].textContent = t[r].firstStage.brownCards),
      (w[2].textContent = t[r].firstStage.blueCards),
      (C[0].textContent = t[r].secondStage.greenCards),
      (C[1].textContent = t[r].secondStage.brownCards),
      (C[2].textContent = t[r].secondStage.blueCards),
      (m[0].textContent = t[r].thirdStage.greenCards),
      (m[1].textContent = t[r].thirdStage.brownCards),
      (m[2].textContent = t[r].thirdStage.blueCards);
  }
  function U(e, r, t, n) {
    if (e === r)
      return (n = t.filter((e) => "easy" === e.difficulty)).sort(function () {
        return Math.random() - 0.5;
      });
    if (e < r)
      return (
        (n = (n = t.filter((e) => "easy" === e.difficulty)).sort(function () {
          return Math.random() - 0.5;
        })).splice(n.length - (r - e), r - e),
        n.sort(function () {
          return Math.random() - 0.5;
        }),
        n
      );
    if (e > r) {
      let r = [];
      if (e > (n = t.filter((e) => "easy" === e.difficulty)).length)
        for (
          r = t
            .filter((e) => "normal" === e.difficulty)
            .sort(function () {
              return Math.random() - 0.5;
            });
          n.length != e;

        )
          n.push(r[r.length - 1]),
            r.pop(r.length - 1),
            n.sort(function () {
              return Math.random() - 0.5;
            });
      return n;
    }
  }
  function V(e, r, t, n) {
    if (e === r)
      return (n = t.filter((e) => "hard" === e.difficulty)).sort(function () {
        return Math.random() - 0.5;
      });
    if (e < r)
      return (
        (n = (n = t.filter((e) => "hard" === e.difficulty)).sort(function () {
          return Math.random() - 0.5;
        })).splice(n.length - (r - e), r - e),
        n.sort(function () {
          return Math.random() - 0.5;
        }),
        n
      );
    if (e > r) {
      let r = [];
      if (e > (n = t.filter((e) => "hard" === e.difficulty)).length)
        for (
          r = t
            .filter((e) => "normal" === e.difficulty)
            .sort(function () {
              return Math.random() - 0.5;
            });
          n.length != e;

        )
          n.push(r[r.length - 1]),
            r.pop(r.length - 1),
            n.sort(function () {
              return Math.random() - 0.5;
            });
      return n;
    }
  }
  function W(e, r, t) {
    let n = [];
    if (e === _)
      for (; n.length != t; )
        r.sort(function () {
          return Math.random() - 0.5;
        }),
          n.push(r[r.length - 1]),
          r.pop(r.length - 1);
    return n;
  }
  function X(e, r) {
    let t =
      ((n = 0),
      (a = e.length - 1),
      (n = Math.ceil(n)),
      (a = Math.floor(a)),
      Math.floor(Math.random() * (a - n + 1)) + n);
    var n, a;
    let s = e.at(t),
      o = s.color;
    K.push(s),
      e.splice(t, 1),
      "green" === o && (r[0].textContent -= 1),
      "brown" === o && (r[1].textContent -= 1),
      "blue" === o && (r[2].textContent -= 1);
    const d = new Image();
    return (
      (d.src = `${s.cardFace}`),
      (d.onload = () => {
        M.style.backgroundImage = `url('${d.src}')`;
      }),
      e
    );
  }
  window.addEventListener("load", function () {
    for (let e = 0; e < t.length; e++) {
      l.children[e].id = t[e].id;
      const r = new Image();
      (r.src = `${t[e].cardFace}`),
        (r.onload = () => {
          l.children[e].style.backgroundImage = `url('${r.src}')`;
        });
    }
  }),
    Q(),
    window.addEventListener("load", Q),
    l.addEventListener("click", function (e) {
      const r = e.target,
        n = e.target.id;
      h.classList.contains("deck-visible") &&
        h.classList.remove("deck-visible");
      for (let e = 0; e < y.length; e++)
        y[e].classList.contains("active") && g.classList.remove("deck-visible");
      for (let e = 0; e < t.length; e++) {
        if (r.id === t[e].id) {
          if (r.classList.contains("cards")) {
            for (let e = 0; e < p.length; e++)
              p[e].classList.remove("active-card");
            r.classList.add("active-card"),
              u.classList.add("deck-visible"),
              b.classList.add("deck-visible"),
              f.classList.add("deck-visible"),
              (b.style.backgroundImage = ""),
              (S.style.background =
                "center / cover no-repeat url(./assets/mythicCardBackground.png)");
          }
          (N =
            t[e].firstStage.greenCards +
            t[e].secondStage.greenCards +
            t[e].thirdStage.greenCards),
            (z =
              t[e].firstStage.brownCards +
              t[e].secondStage.brownCards +
              t[e].thirdStage.brownCards),
            (T =
              t[e].firstStage.blueCards +
              t[e].secondStage.blueCards +
              t[e].thirdStage.blueCards);
        }
        (D = []), (G = []), (J = []), (K = []), R(n);
      }
      (_ = r.id), (O = n);
    }),
    h.addEventListener("click", function (e) {
      let r = e.target;
      if (r.classList.contains("level-item")) {
        for (let e = 0; e < y.length; e++)
          y[e].classList.remove("active"),
            (D = []),
            (G = []),
            (J = []),
            (K = []);
        r.classList.add("active"),
          g.classList.remove("deck-visible"),
          u.classList.add("deck-visible"),
          b.classList.add("deck-visible"),
          (b.style.backgroundImage = ""),
          (S.style.background =
            "center / cover no-repeat url(./assets/mythicCardBackground.png)"),
          f.classList.add("deck-visible");
      }
    }),
    g.addEventListener("click", function () {
      u.classList.remove("deck-visible"),
        b.classList.remove("deck-visible"),
        f.classList.remove("deck-visible"),
        g.classList.add("deck-visible"),
        (S.style.background =
          "center / cover no-repeat url(./assets/mythicCardBackground.png)"),
        F.classList.contains("active") &&
          ((function () {
            (j = U(N, A, i, j)), (H = U(z, B, s, H)), (P = U(T, E, d, P));
            let e = t.findIndex((e) => e.name === _);
            D.push(W(_, j, t[e].firstStage.greenCards)),
              D.push(W(_, H, t[e].firstStage.brownCards)),
              D.push(W(_, P, t[e].firstStage.blueCards)),
              (D = D.flat(1)),
              G.push(W(_, j, t[e].secondStage.greenCards)),
              G.push(W(_, H, t[e].secondStage.brownCards)),
              G.push(W(_, P, t[e].secondStage.blueCards)),
              (G = G.flat(1)),
              J.push(W(_, j, t[e].thirdStage.greenCards)),
              J.push(W(_, H, t[e].thirdStage.brownCards)),
              J.push(W(_, P, t[e].thirdStage.blueCards)),
              (J = J.flat(1)),
              R(O),
              console.log(j),
              console.log(H),
              console.log(P);
          })(),
          console.log(j),
          console.log(H),
          console.log(P)),
        v.classList.contains("active") &&
          (function () {
            (j = Array.from(i.filter((e) => "hard" != e.difficulty))),
              (H = Array.from(s.filter((e) => "hard" != e.difficulty))),
              (P = Array.from(d.filter((e) => "hard" != e.difficulty)));
            let e = t.findIndex((e) => e.name === _);
            D.push(W(_, j, t[e].firstStage.greenCards)),
              D.push(W(_, H, t[e].firstStage.brownCards)),
              D.push(W(_, P, t[e].firstStage.blueCards)),
              (D = D.flat(1)),
              G.push(W(_, j, t[e].secondStage.greenCards)),
              G.push(W(_, H, t[e].secondStage.brownCards)),
              G.push(W(_, P, t[e].secondStage.blueCards)),
              (G = G.flat(1)),
              J.push(W(_, j, t[e].thirdStage.greenCards)),
              J.push(W(_, H, t[e].thirdStage.brownCards)),
              J.push(W(_, P, t[e].thirdStage.blueCards)),
              (J = J.flat(1)),
              R(O),
              console.log(j),
              console.log(H),
              console.log(P);
          })(),
        k.classList.contains("active") &&
          (function () {
            (j = Array.from(i)), (H = Array.from(s)), (P = Array.from(d));
            let e = t.findIndex((e) => e.name === _);
            D.push(W(_, j, t[e].firstStage.greenCards)),
              D.push(W(_, H, t[e].firstStage.brownCards)),
              D.push(W(_, P, t[e].firstStage.blueCards)),
              (D = D.flat(1)),
              G.push(W(_, j, t[e].secondStage.greenCards)),
              G.push(W(_, H, t[e].secondStage.brownCards)),
              G.push(W(_, P, t[e].secondStage.blueCards)),
              (G = G.flat(1)),
              J.push(W(_, j, t[e].thirdStage.greenCards)),
              J.push(W(_, H, t[e].thirdStage.brownCards)),
              J.push(W(_, P, t[e].thirdStage.blueCards)),
              (J = J.flat(1)),
              R(O);
          })(),
        L.classList.contains("active") &&
          (function () {
            (j = Array.from(i.filter((e) => "easy" != e.difficulty))),
              (H = Array.from(s.filter((e) => "easy" != e.difficulty))),
              (P = Array.from(d.filter((e) => "easy" != e.difficulty)));
            let e = t.findIndex((e) => e.name === _);
            D.push(W(_, j, t[e].firstStage.greenCards)),
              D.push(W(_, H, t[e].firstStage.brownCards)),
              D.push(W(_, P, t[e].firstStage.blueCards)),
              (D = D.flat(1)),
              G.push(W(_, j, t[e].secondStage.greenCards)),
              G.push(W(_, H, t[e].secondStage.brownCards)),
              G.push(W(_, P, t[e].secondStage.blueCards)),
              (G = G.flat(1)),
              J.push(W(_, j, t[e].thirdStage.greenCards)),
              J.push(W(_, H, t[e].thirdStage.brownCards)),
              J.push(W(_, P, t[e].thirdStage.blueCards)),
              (J = J.flat(1)),
              R(O);
          })(),
        x.classList.contains("active") &&
          (function () {
            (j = V(N, I, i, j)), (H = V(z, $, s, H)), (P = V(T, q, d, P));
            let e = t.findIndex((e) => e.name === _);
            D.push(W(_, j, t[e].firstStage.greenCards)),
              D.push(W(_, H, t[e].firstStage.brownCards)),
              D.push(W(_, P, t[e].firstStage.blueCards)),
              (D = D.flat(1)),
              G.push(W(_, j, t[e].secondStage.greenCards)),
              G.push(W(_, H, t[e].secondStage.brownCards)),
              G.push(W(_, P, t[e].secondStage.blueCards)),
              (G = G.flat(1)),
              J.push(W(_, j, t[e].thirdStage.greenCards)),
              J.push(W(_, H, t[e].thirdStage.brownCards)),
              J.push(W(_, P, t[e].thirdStage.blueCards)),
              (J = J.flat(1)),
              R(O);
          })();
    }),
    S.addEventListener("click", function () {
      0 != D.length
        ? X(D, w)
        : (0 != G.length ? X(G, C) : 0 != J.length && X(J, m),
          0 === J.length && (S.style.background = "none")),
        console.log("stage_one res"),
        console.log(D),
        console.log("stage_two res"),
        console.log(G),
        console.log("stage_three res"),
        console.log(J),
        console.log("result"),
        console.log(K);
    });
})();
