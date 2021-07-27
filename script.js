// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      // console.log(listedPlanets);
    })
    .then(function (planets) {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      console.log(pickPlanet(listedPlanets));
    });
  const form = this.document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const pilot = document.querySelector("pilotName");
    const copilot = document.querySelector("copilotName");
    const fuelLevel = document.querySelector("fuelLevel");
    const cargoMass = document.querySelector("cargoMass");
    if (!pilot.value) {
      alert("Please fill all fields.");
    }
  });
});
