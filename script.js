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
