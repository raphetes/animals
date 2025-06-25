import Numbers from "./numeros.js";

export default function fetchAnimals(url, target) {
  const numbersGrid = document.querySelector(target);

  function buildHtml(data) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${data.specie}</h3>
										 <span data-numero>${data.total}</span>`;
    return div;
  }

  function fill(data) {
    const divAnimal = buildHtml(data);
    numbersGrid.appendChild(divAnimal);
  }

  function animNumbers() {
    const numbers = new Numbers("[data-numero]", "ativo", ".numeros");
    numbers.init();
  }

  async function createAnimals() {
    try {
      const data = await fetch(url);
      const datas = await data.json();
      datas.forEach((data) => fill(data));
      animNumbers();
    } catch (error) {}
  }

  return createAnimals();
}
