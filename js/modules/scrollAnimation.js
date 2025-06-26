export default class ScrollAnimation {
  constructor(section) {
    this.sections = [...document.querySelectorAll(section)];
    this.windowHeight = window.innerHeight * 0.7;
    this.scrollAnimation = this.scrollAnimation.bind(this);
  }
  scrollAnimation() {
    this.sections.forEach((section) => {
      const sectionTopDistance = section.getBoundingClientRect().top;
      const verify = sectionTopDistance - this.windowHeight < 0;
      if (verify) section.classList.add("ativo");
    });
  }
  init() {
    window.addEventListener("scroll", this.scrollAnimation);
  }
}
