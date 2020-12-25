import navigation from "./components/navigation";

const dbRefObject = firebase.database().ref().child('object');
  
dbRefObject.on('value', snap => console.log(snap.val()));

// const runWebApp = (() => {
  
//   const content = document.getElementById('content');
  
  
  
  
  
  
  
//   content.append(navigation());
  
// })();