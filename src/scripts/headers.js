let htmlElement = document.querySelector("html");
let menuOpenerElement = document.querySelector("header nav .hamburger");
let closeNavMenuElement = document.querySelector(".menu-popup .close-button");
let headerElement = document.querySelector("header");

function initSecondaryNavMenu() {
  function openNavMenu() {
    let navMenuElement = document.querySelector(".menu-popup");
    navMenuElement.classList.remove("hidden");
    setTimeout(() => navMenuElement.classList.remove("hidden-content"), 300);
  }
  function closeNavMenu() {
    let navMenuElement = document.querySelector(".menu-popup");
    navMenuElement.classList.add("hidden-content");
    setTimeout(() => navMenuElement.classList.add("hidden"), 200);
  }
  let menuLinks = document.querySelectorAll(".menu-popup a, .menu-popup .btn");
  menuLinks.forEach((link) => link.addEventListener("click", closeNavMenu));
  menuOpenerElement.addEventListener("click", openNavMenu);
  closeNavMenuElement.addEventListener("click", closeNavMenu);
}
function minimizeHeaderOnScroll() {
  let checkForMinimizedHeader = function () {
    if (window.scrollY == 0) {
      //user is at the top of the page; no need to show the back to top button
      headerElement.classList.remove("scroll");
    } else {
      headerElement.classList.add("scroll");
    }
  };
  checkForMinimizedHeader();
  window.addEventListener("scroll", checkForMinimizedHeader);
}

export function initSecondaryNavMenuAgain() {
  let closeNavMenuElement = document.querySelector(".menu-popup .close-button");
  function closeNavMenu() {
    let navMenuElement = document.querySelector(".menu-popup");
    navMenuElement.classList.add("hidden-content");
    setTimeout(() => navMenuElement.classList.add("hidden"), 200);
  }
  closeNavMenuElement.addEventListener("click", closeNavMenu);
}
export function initHeaders() {
  initSecondaryNavMenu();
  minimizeHeaderOnScroll();
}
