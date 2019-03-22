var buyButton = document.querySelector(".hidden-button-buy");
var buyWindow = document.querySelector(".catalog-popup-window");
var closeBuyWindow = buyWindow.querySelector(".catalog-popup-close-button");

buyButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyWindow.classList.remove("hide-window");
  buyWindow.classList.add("show-window");
  console.log("click");
});

closeBuyWindow.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyWindow.classList.remove("show-window");
  buyWindow.classList.add("hide-window");
  buyWindow.classList.remove("modal-error");
});
