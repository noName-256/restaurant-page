let deselectAllNavElements = function () {
  let allNavElements = document.querySelectorAll(
    "nav .nav-section-element, nav ul li"
  );
  allNavElements.forEach((navElement) => {
    navElement.classList.remove("selected");
  });
};
export default function selectCurrentNavElement() {
  let websiteName = document.querySelector("#website-name").className;
  deselectAllNavElements();
  switch (websiteName) {
    case "home":
      document
        .querySelector(".nav-section-element.home")
        .classList.add("selected");
      document
        .querySelector(".menu-popup nav ul li.home")
        .classList.add("selected");
      break;
    case "about-us":
      document
        .querySelector(".nav-section-element.about-us")
        .classList.add("selected");
      document
        .querySelector(".menu-popup nav ul li.about-us")
        .classList.add("selected");
      break;
    case "menus":
      document
        .querySelector(".nav-section-element.menus")
        .classList.add("selected");
      document
        .querySelector(".menu-popup nav ul li.menus")
        .classList.add("selected");
      break;
    case "gallery":
      document
        .querySelector(".nav-section-element.gallery")
        .classList.add("selected");
      document
        .querySelector(".menu-popup nav ul li.gallery")
        .classList.add("selected");
      break;
    case "contact":
      document
        .querySelector(".nav-section-element.contact")
        .classList.add("selected");
      document
        .querySelector(".menu-popup nav ul li.contact")
        .classList.add("selected");
      break;
  }
}
