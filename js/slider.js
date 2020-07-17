var sliderParent = document.getElementsByClassName(
  "woo-variation-gallery-slider"
);

if (sliderParent.length) {
  var img =
    "https://javiermendozain.github.io/crocket/assets/Web_product_next_image_overlay.png";

  var imgPrev = document.createElement("img");
  imgPrev.setAttribute("alt", "prev");
  imgPrev.src = img;
  imgPrev.style = "transform: rotate(180deg);";

  var imgNext = document.createElement("img");
  imgNext.setAttribute("alt", "Next");
  imgNext.src = img;
  var sliderChilds = sliderParent.item(0);

  // selecting buttons prev and next from slider
  var btnPrev = sliderChilds.getElementsByClassName("slick-prev").item(0);
  var btnNext = sliderChilds.getElementsByClassName("slick-next").item(0);

  // Editing class
  btnPrev.classList = "carousel-control-prev slick-prev slick-arrow";
  btnNext.classList = "carousel-control-next slick-next slick-arrow";

  // Add img custom
  btnPrev.appendChild(imgPrev);
  btnNext.appendChild(imgNext);

  console.log("inside", sliderChilds);
} else {
  console.log("outside", sliderParent);
}
