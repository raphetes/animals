export default function initAccordionNav() {
  const questions = document.querySelectorAll('[data-anime="accordion"] dt');
  const answers = document.querySelectorAll('[data-anime="accordion"] dd');

  questions[0].classList.add("ativo");
  answers[0].classList.add("ativo");

  questions.forEach((question) => {
    question.addEventListener("click", activeAnswer);
  });
  function activeAnswer() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }
}
