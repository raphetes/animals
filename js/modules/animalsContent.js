export default function initNavAnimalsContent() {
  const tabImages = [
    ...document.querySelectorAll('[data-nav-tab="images"] li'),
  ];
  const tabContent = [
    ...document.querySelectorAll('[data-nav-tab="content"] section'),
  ];

  function activeContent(i) {
    const animDirection = tabContent[i].dataset.anime;
    tabContent.forEach((content) => {
      content.classList.remove("ativo", animDirection);
    });
    tabContent[i].classList.add("ativo", animDirection);
  }

  if (tabContent.length && tabImages.length) {
    tabImages[0].classList.add("ativo");
    tabContent[0].classList.add("ativo");

    tabImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        activeContent(index);
      });
    });
  }
}
