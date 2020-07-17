const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData(){
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => parseData(json))
  }

  function formatBirthDate(date) {
    const miliseconds = Date.parse(date)
    const dateObject = new Date(miliseconds);
    return humanDateFormat = dateObject.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"})
  }

  function parseData(json) {
    const data = json.results[0];
    document.querySelector("#fullname").innerText = `${data.name.first} ${data.name.last}`;
    document.querySelector("#email").innerText = data.email;
    document.querySelector("#street").innerText = `${data.location.street.number} ${data.location.street.name}`;
    document.querySelector("#city").innerText = data.location.city;
    document.querySelector("#state").innerText = data.location.state;
    document.querySelector("#postcode").innerText = data.location.postcode;
    document.querySelector("#phone").innerText = data.phone;
    document.querySelector("#cell").innerText = data.cell;
    document.querySelector("#date_of_birth").innerText = formatBirthDate(data.dob.date);
  }

  document.addEventListener('click', (e) => {
    if (e.target.className === 'btn btn-primary') {
      fetchData();
    }
  })
});
