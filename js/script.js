var popup = document.querySelector(".write-us-window");
var close = popup.querySelector(".close-button");

var writeUs = document.querySelector(".about-button-map");
var mapButton = document.querySelector(".map-popup");

var map = document.querySelector(".map-window");
var mapCloseButton = map.querySelector(".map-close-button")

var deliveryButton = document.querySelector(".delivery-button");
var deliveryAction = document.querySelector(".delivery-action");

var guaranteeButton = document.querySelector(".guarantee-button");
var guaranteeAction = document.querySelector(".guarantee-action");

var creditButton = document.querySelector(".credit-button");
var creditAction = document.querySelector(".credit-action");

var leftButton = document.querySelector(".inner-slider-button-left");
var rightButton = document.querySelector(".inner-slider-button-right");

var drillSlide = document.querySelector(".drill-slide-display");

var firstSliderIndicator = document.querySelector(".first-slider");
var secondSliderIndicator = document.querySelector(".second-slider");

var form = popup.querySelector("form");
var name = popup.querySelector("login-text");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

rightButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  drillSlide.classList.remove("slider-switch");
  firstSliderIndicator.classList.remove("slider-indicator-show");
  firstSliderIndicator.classList.add("slider-indicator");
  secondSliderIndicator.classList.remove("slider-indicator");
  secondSliderIndicator.classList.add("slider-indicator-show");
});

leftButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  drillSlide.classList.add("slider-switch");
  firstSliderIndicator.classList.remove("slider-indicator");
  firstSliderIndicator.classList.add("slider-indicator-show");
  secondSliderIndicator.classList.remove("slider-indicator-show");
  secondSliderIndicator.classList.add("slider-indicator");
});

guaranteeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  guaranteeButton.classList.remove("service-button");
  guaranteeButton.classList.add("service-active-button");
  creditButton.classList.remove("service-active-button");
  creditButton.classList.add("service-button");
  deliveryButton.classList.remove("service-active-button");
  deliveryButton.classList.add("service-button");

  guaranteeAction.classList.remove("visually-hidden");
  deliveryAction.classList.add("visually-hidden");
  creditAction.classList.add("visually-hidden");
});

deliveryButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  deliveryButton.classList.remove("service-button");
  deliveryButton.classList.add("service-active-button");
  creditButton.classList.remove("service-active-button");
  creditButton.classList.add("service-button");
  guaranteeButton.classList.remove("service-active-button");
  guaranteeButton.classList.add("service-button");

  deliveryAction.classList.remove("visually-hidden");
  guaranteeAction.classList.add("visually-hidden");
  creditAction.classList.add("visually-hidden");
});

creditButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  creditButton.classList.remove("service-button");
  creditButton.classList.add("service-active-button");
  deliveryButton.classList.remove("service-active-button");
  deliveryButton.classList.add("service-button");
  guaranteeButton.classList.remove("service-active-button");
  guaranteeButton.classList.add("service-button");

  creditAction.classList.remove("visually-hidden");
  deliveryAction.classList.add("visually-hidden");
  guaranteeAction.classList.add("visually-hidden");
});

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("hide-window");
  popup.classList.add("show-window");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("show-window");
  popup.classList.add("hide-window");
  popup.classList.remove("modal-error");
});

mapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("hide-window");
  map.classList.add("show-window");
});


mapCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("click")
  map.classList.remove("show-window");
  map.classList.add("hide-window");
  map.classList.remove("modal-error");
});
