export default class AccordionNav {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  activeAccordion() {
    this.accordionList[0].classList.add(this.activeClass);
    this.accordionList[0].nextElementSibling.classList.add(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((itemList) => {
      itemList.addEventListener("click", () => this.toggleAnswer(itemList));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.addAccordionEvent();
      this.activeAccordion();
    }
  }
  toggleAnswer(itemList) {
    itemList.classList.toggle(this.activeClass);
    itemList.nextElementSibling.classList.toggle(this.activeClass);
  }
}
