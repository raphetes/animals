import initOutsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const buttonMenuMobile = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="nav"]');
  const userEvents = ["click", "touchstart"];

  function openMenu(event) {
    event.preventDefault();
    menuList.classList.toggle("ativo");
    buttonMenuMobile.classList.toggle("ativo");
    initOutsideClick(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("ativo");
      buttonMenuMobile.classList.remove("ativo");
    });
  }

  if (buttonMenuMobile) {
    userEvents.forEach((userEvent) =>
      buttonMenuMobile.addEventListener(userEvent, openMenu)
    );
  }
}
