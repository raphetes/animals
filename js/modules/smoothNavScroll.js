export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = [...document.querySelectorAll(links)];
    if (this.options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.smoothScroll = this.smoothScroll.bind(this);
  }
  smoothScroll(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView(this.options);
    } else {
      return;
    }
  }

  addLinkEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener("click", this.smoothScroll);
    });
  }
  init() {
    if (this.internalLinks.length) this.addLinkEvent();
    return this;
  }
}
