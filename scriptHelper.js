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

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (isNaN(testInput) === true) {
    return "Not a Number";
  }
  if (isNaN(testInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelLevelStatus = document.getElementById("fuelStatus");
  const cargoLevelStatus = document.getElementById("cargoStatus");
  const faultyItems = document.getElementById("faultyItems");
  const launchStatus = document.getElementById("launchStatus");
  const isMissingValue = [pilot, copilot, cargoLevel, fuelLevel]
    .map((input) => validateInput(input))
    .some((check) => check === "Empty");
  const isFuelLevelSufficient = fuelLevel >= 10000;
  const isCargoLevelSufficient = cargoLevel < 10000;

  if (isMissingValue) {
    alert("Missing input.");
  }
  if (!isMissingValue) {
    if (
      validateInput(pilot) === "Is a Number" ||
      validateInput(copilot) === "Is a Number"
    ) {
      alert("Check Pilot and Co-Pilot field for proper input.");
    }
    if (
      validateInput(fuelLevel) === "Not a Number" ||
      validateInput(cargoLevel) === "Not a Number"
    ) {
      alert("Check Fuel Level and Cargo Mass for proper input. ");
    }
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready`;
    faultyItems.style.visibility = "visible";

    if (!isFuelLevelSufficient) {
      launchStatus.innerHTML = "Shuttle is not ready for launch.";
      launchStatus.style.color = "rgb(199, 37, 78)";
      fuelLevelStatus.innerHTML = `Insufficient fuel level for journey`;
    }
    if (!isCargoLevelSufficient) {
      launchStatus.innerHTML = "Shuttle is not ready for launch.";
      launchStatus.style.color = "rgb(199, 37, 78)";
      cargoLevelStatus.innerHTML = `The spaceship is over-encumbered`;
    }
    if (!isMissingValue && isFuelLevelSufficient && isCargoLevelSufficient) {
      launchStatus.innerHTML = "Shuttle is ready for launch.";
      launchStatus.style.color = "rgb(65, 159, 106)";
    }
  }
}

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
