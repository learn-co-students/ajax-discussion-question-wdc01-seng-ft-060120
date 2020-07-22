const baseURL = "https://randomuser.me/api/";

const newPersonButton = document.querySelector("button");
const fullname = document.getElementById("fullname");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const email = document.getElementById("email");
const dob = document.getElementById("date_of_birth");

const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  newPersonButton.addEventListener("click", () => {
    personFetch();
  });
  personFetch();
});

const personFetch = () => {
  fetch(baseURL)
    .then((resp) => resp.json())
    .then((data) => renderPerson(data));
};

const renderPerson = (data) => {
  const person = data.results[0];

  const firstName = person.name.first;
  const lastName = person.name.last;
  const titleName = person.name.title;
  fullname.textContent = `${titleName} ${firstName} ${lastName}`;

  phone.textContent = person.phone;
  cell.textContent = person.cell;

  email.textContent = person.email;
  dob.textContent = person.dob.date;

  street.textContent = `${person.location.street.number} ${person.location.street.name}`;
  city.textContent = person.location.city;
  state.textContent = person.location.state;
  postcode.textContent = person.location.postcode;
};
