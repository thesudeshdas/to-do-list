

function displayProject(obj) {
  const content = document.getElementById('content');
  
  const title = document.createElement('h1');
  title.textContent = obj.title;

  content.append(title);
  
  console.log(obj.title)
}


const showProject = (projectToBeShown) => {
  const todos = JSON.parse(localStorage.getItem('todos'))
  
  for (const todo in todos) {
    if (projectToBeShown == todos[todo].project) {
      displayProject(todos[todo]);
    } 
  }
   
}

export default showProject;