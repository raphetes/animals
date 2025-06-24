export default class Numbers {
  constructor(numbers, observerClass, target) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(target);

    this.handleObserver = this.handleObserver.bind(this);
  }

  static animNumber(number) {
    const totalNumber = +number.textContent;
    const incremento = Math.round(totalNumber / 100);
    let i = 0;

    const timer = setInterval(() => {
      i += incremento;
      number.textContent = i;
      if (i > totalNumber) {
        number.textContent = totalNumber;
        clearInterval(timer);
      }
    }, 20 * Math.random());
  }

  numberAnimation() {
    this.numbers.forEach((number) => {
      this.constructor.animNumber(number);
    });
  }

  handleObserver(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.numberAnimation();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver();
    }
    return this;
  }
}
