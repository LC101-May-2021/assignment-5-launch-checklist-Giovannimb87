// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function (planets) {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let destination = pickPlanet(listedPlanets);
      addDestinationInfo(
        window.document,
        destination.name,
        destination.diameter,
        destination.star,
        destination.distance,
        destination.moons,
        destination.image
      );
    });
  const form = this.document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

// let usernameInput = document.querySelector("input[name=username]");
// alert the current value found in the username input
// alert("username: " + usernameInput.value);
// const pilot = document.querySelector("input[name=pilotName]");
// const copilot = document.querySelector("input[name=copilotName]");
// const fuelLevel = document.querySelector("input[name=fuelLevel]");
// const cargoMass = document.querySelector("input[name=cargoMass]");
// if (
//   !pilot.value ||
//   !copilot.value ||
//   !fuelLevel.value ||
//   !cargoMass.value
// ) {
//   if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
//     alert("Please be sure to fill in fields properly.");
//   }
//   alert("Please fill in all fields.");
// }
