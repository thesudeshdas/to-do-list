import navigation from "./components/navigation";



const runWebApp = (() => {
  const content = document.getElementById('content');
  
  content.append(navigation());

})();