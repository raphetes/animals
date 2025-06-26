export default class ScrollAnimation {
  constructor(section) {
    this.sections = [...document.querySelectorAll(section)];
    this.windowHeight = window.innerHeight * 0.7;
    this.checkDistance = this.checkDistance.bind(this);
  }
  getDistance() {
    this.distances = this.sections.map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset) - this.windowHeight,
      };
    });
  }
  checkDistance() {
    this.distances.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      }
    });
  }
  init() {
    if (this.sections.length) {
      window.addEventListener("scroll", this.checkDistance);
      this.getDistance();
      this.checkDistance();
    }
    return this;
  }
}
