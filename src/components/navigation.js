const projectList = [];

const dbRefObject = firebase.database().ref('project/name/');
  
dbRefObject.on('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    // ...
    projectList.push(childData);
    
    
  });
  console.log(projectList);
});

const navigation = () => {

  const navbar = document.createElement('div');
  navbar.innerHTML = `
    <div class="side-bar">
      <h1>Dashnote</h1>
      <ul id="navbar-list">
        
      </ul>
    </div>
  `;
  
  

  return navbar;
}

export default navigation;