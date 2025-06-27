import initOutsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.buttonMenuMobile = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.userEvents = ["click", "touchstart"];
    this.activeClass = "ativo";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle(this.activeClass);
    this.buttonMenuMobile.classList.toggle(this.activeClass);
    initOutsideClick(this.menuList, this.userEvents, () => {
      this.menuList.classList.remove(this.activeClass);
      this.buttonMenuMobile.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.userEvents.forEach((event) => {
      this.buttonMenuMobile.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.buttonMenuMobile && this.menuList) this.addMenuMobileEvent();
    return this;
  }
}
