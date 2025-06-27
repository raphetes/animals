import initOutsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenu) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);
    this.openDropdownMenu = this.openDropdownMenu.bind(this);
  }

  addDropdownEvent() {
    this.dropdownMenu.forEach((menu) => {
      ["click", "touchstart"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.openDropdownMenu);
      });
    });
  }
  openDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle("ativo");
    initOutsideClick(element, ["click", "touchstart"], () => {
      element.classList.remove("ativo");
    });
  }

  init() {
    if (this.dropdownMenu.length) this.addDropdownEvent();
    return this;
  }
}
