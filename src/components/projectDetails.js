function displayProject(project) {
  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = project.title;

  console.log(project);

  content.append(title);
}

const showProjects = (projectToBeShown) => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  for (const todo in todos) {
    if (projectToBeShown == todos[todo].project) {
      displayProject(todos[todo]);
    }
  }
};

export default showProjects;
