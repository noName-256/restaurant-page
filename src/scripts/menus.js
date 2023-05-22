export default function menusScript() {
  let menusNavElement = document.querySelector(
    "main #website-name.menus ~ .section-1 nav"
  );
  let selectMenu = function (menu) {
    menusNavElement.className = "menu-nav";
    setTimeout(() => menusNavElement.classList.add(menu), 200);
  };
  menusNavElement
    .querySelector(".breakfast")
    .addEventListener("click", () => selectMenu("breakfast"));
  menusNavElement
    .querySelector(".lunch")
    .addEventListener("click", () => selectMenu("lunch"));
  menusNavElement
    .querySelector(".dinner")
    .addEventListener("click", () => selectMenu("dinner"));
  menusNavElement
    .querySelector(".drinks")
    .addEventListener("click", () => selectMenu("drinks"));
}
