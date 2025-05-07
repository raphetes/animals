export default function initScrollAnimation() {
  addEventListener("scroll", scrollAnimation);
  const sections = [...document.querySelectorAll('[data-anime="scroll"]')];
  const windowHeight = innerHeight * 0.7;
  function scrollAnimation() {
    sections.forEach((section) => {
      const sectionTopDistance = section.getBoundingClientRect().top;
      const verify = sectionTopDistance - windowHeight < 0;
      if (verify) section.classList.add("ativo");
    });
  }
  scrollAnimation();
}
