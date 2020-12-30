(() => {
  "use strict";
  function t(t) {
    const e = document.getElementById("content"),
      o = document.createElement("h1");
    (o.textContent = t.title), console.log(t), e.append(o);
  }
  (() => {
    if (
      (function (t) {
        var e;
        try {
          e = window[t];
          var o = "__storage_test__";
          return e.setItem(o, o), e.removeItem(o), !0;
        } catch (t) {
          return (
            t instanceof DOMException &&
            (22 === t.code ||
              1014 === t.code ||
              "QuotaExceededError" === t.name ||
              "NS_ERROR_DOM_QUOTA_REACHED" === t.name) &&
            e &&
            0 !== e.length
          );
        }
      })("localStorage")
    ) {
      const t = {
          defaultProject: "This is the default project",
          default2: "This is another one",
        },
        e = {
          todo1: {
            id: 0,
            title: "Some title",
            project: "defaultProject",
            description: "This is a todo, simple",
            date: "12-10-2020",
            priority: "Low",
            completed: !1,
          },
          todo2: {
            id: 1,
            title: "Some other title",
            project: "defaultProject",
            description: "This is another todo, simple",
            date: "24-11-2020",
            priority: "High",
            completed: !1,
          },
        };
      localStorage.setItem("projects", JSON.stringify(t)),
        localStorage.setItem("todos", JSON.stringify(e));
    } else console.log("Local Storage not working");
  })();
  document.getElementById("content").append(
    (() => {
      const e = document.createElement("div");
      e.classList.add("side-bar");
      const o = document.createElement("h1");
      o.textContent = "Dashnote";
      const n = document.createElement("ul");
      n.setAttribute("id", "navbar-list");
      let c = JSON.parse(localStorage.getItem("projects"));
      return (
        Object.keys(c).forEach((e) => {
          const o = document.createElement("li");
          (o.textContent = e),
            o.addEventListener("click", (e) =>
              ((e) => {
                const o = JSON.parse(localStorage.getItem("todos"));
                for (const n in o) e == o[n].project && t(o[n]);
              })(e.target.textContent)
            ),
            n.append(o);
        }),
        e.append(o, n),
        e
      );
    })()
  );
})();
