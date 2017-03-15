var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".btn-close");
mapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});
var link = document.querySelector(".write-to-us");
var popup = document.querySelector(".messages");
var close = popup.querySelector(".btn-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
