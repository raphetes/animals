import initNumbers from "./numeros.js";

export default function initFetchNumbers() {
  async function fetchAnimal(url) {
    try {
      const data = await fetch(url);
      const datas = await data.json();
      const numbersGrid = document.querySelector(".numeros-grid");
      datas.forEach((data) => {
        const divAnimal = buildHtml(data);
        numbersGrid.appendChild(divAnimal);
      });
      initNumbers();
    } catch (error) {}
  }
  function buildHtml(data) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${data.specie}</h3>
										 <span data-numero>${data.total}</span>`;
    return div;
  }
  fetchAnimal("./animaisapi.json");
}
