import showProjects from "./projectDetails";

const navigation = () => {
  const navbar = document.createElement("div");
  navbar.classList.add("side-bar");

  const heading = document.createElement("h1");
  heading.textContent = "Dashnote";

  const ul = document.createElement("ul");
  ul.setAttribute("id", "navbar-list");

  let projectList = JSON.parse(localStorage.getItem("projects"));
  Object.keys(projectList).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    // li.setAttribute('onclick', '() => {console.log("Hello")}')

    li.addEventListener("click", (e) => showProjects(e.target.textContent));

    ul.append(li);
  });

  navbar.append(heading, ul);

  return navbar;
};

export default navigation;
