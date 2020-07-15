const personalizacion = document.getElementById("nav-personalizacion-tab"),
  textura = document.getElementById("nav-textura-tab"),
  instalacion = document.getElementById("nav-instalacion-tab");

const elementInstalacion = instalacion
  .getElementsByClassName("bg-info")
  .item(0);
const elementPersonalizacion = personalizacion
  .getElementsByClassName("bg-info")
  .item(0);
const elementTextura = textura.getElementsByClassName("bg-info").item(0);

// console.log("instalacion.classList", instalacion.classList);
instalacion.addEventListener("click", function () {
  // Item Selected
  elementInstalacion.classList = " install-color-left bg-info";

  // Other item
  elementPersonalizacion.classList = " persozalicacion-color-right bg-info";
  elementTextura.classList = "bg-info";
});

personalizacion.addEventListener("click", function () {
  // Item Selected
  elementPersonalizacion.classList = " persozalicacion-color-left bg-info";

  // Other item
  elementInstalacion.classList = " bg-info";
  elementTextura.classList = " textura-color-right bg-info";
});

textura.addEventListener("click", function () {
  // Item Selected
  elementTextura.classList = " bg-info";

  // Other item
  elementPersonalizacion.classList = " bg-info";
  elementInstalacion.classList = "bg-info";
});
