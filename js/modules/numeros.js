export default function initNumeros() {
  const allNumbers = document.querySelectorAll("[data-numero]");

  function numberAnimation() {
    allNumbers.forEach((number) => {
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
    });
  }

  const numberSection = document.querySelector(".numeros");
  function handleObeserver(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      numberAnimation();
      observer.disconnect();
    }
  }
  const observer = new MutationObserver(handleObeserver);
  observer.observe(numberSection, { attributes: true });
}
