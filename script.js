const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-left");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("mobile-menu");
});

// AJOUTER AU CLICK SUR LA WINDOW LE RETRAIT DE LA CLASSLIST MOBILE-MENU
