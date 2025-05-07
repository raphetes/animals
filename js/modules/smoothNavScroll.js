export default function initScrollAnimation() {
  const internalLinks = [...document.querySelectorAll('a[href^="#"]')];
  internalLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);
    const topSection = section.offsetTop;
    scrollTo({
      top: topSection,
      behavior: "smooth",
    });
  }
}
