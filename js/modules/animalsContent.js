export default class NavAnimalsContent {
  constructor(tabImages, tabContent) {
    this.tabImages = [...document.querySelectorAll(tabImages)];
    this.tabContent = [...document.querySelectorAll(tabContent)];
    this.activeClass = "ativo";
  }

  activeContent(i) {
    const animDirection = this.tabContent[i].dataset.anime;
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass, animDirection);
    });
    this.tabContent[i].classList.add(this.activeClass, animDirection);
  }

  addTabNavEvent() {
    this.tabImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        this.activeContent(index);
      });
    });
  }

  init() {
    if (this.tabContent.length && this.tabImages.length) {
      this.addTabNavEvent();
      this.activeContent(0);
    }
  }
}
