// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
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
    // let listedPlanets;
    const pilot = document.querySelector("input[name=pilotName]").value;
    const copilot = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    const cargoLevel = document.querySelector("input[name=cargoMass]").value;
    const faultyList = document.getElementById("faultyItems");

    formSubmission(
      window.document,
      faultyList,
      pilot,
      copilot,
      fuelLevel,
      cargoLevel
    );
    event.preventDefault();
  });
});
