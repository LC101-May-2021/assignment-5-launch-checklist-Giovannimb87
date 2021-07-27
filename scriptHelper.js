// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let destination = document.getElementById("missionTarget");
  destination.innerHTML = `
  <h2>Mission Destination</h2>
      <ul>
          <li>Name: ${name}</li>
          <li>Diameter: ${diameter}</li>
          <li>Star: ${star}</li>
          <li>Distance from Earth: ${distance}</li>
          <li>Number of Moons: ${moons}</li>
      </ul>
      <img src=${imageUrl}>
  `;
}

function validateInput(testInput) {}

function formSubmission(
  document,
  list,
  pilot,
  copilot,
  fuelLevel,
  cargoLevel
) {}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let random = Math.floor(Math.random() * planets.length);
  return planets[random];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
