import initOutsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");
  dropdownMenu.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, openDropdownMenu);
    });
  });
  function openDropdownMenu(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    initOutsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }
}
