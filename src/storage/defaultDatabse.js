import storageAvailable from "./storage";

const createDefaultDatabase = (() => {
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    const projects = {
      defaultProject: "This is the default project",
      default2: "This is another one",
    };

    const todos = {
      todo1: {
        id: 0,
        title: "Some title",
        project: "defaultProject",
        description: "This is a todo, simple",
        date: "12-10-2020",
        priority: "Low",
        completed: false,
      },
      todo2: {
        id: 1,
        title: "Some other title",
        project: "defaultProject",
        description: "This is another todo, simple",
        date: "24-11-2020",
        priority: "High",
        completed: false,
      },
    };

    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    // Too bad, no localStorage for us
    console.log("Local Storage not working");
  }
})();
