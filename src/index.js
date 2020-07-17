const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector('button');
  

  function getSomething(){
    fetch('https://randomuser.me/api/')
    .then(response => {response.json})
    .then(data => {console.log(data)})
  }

  button.addEventListener('click', function(e){
    console.log(e.target)
  })

});
