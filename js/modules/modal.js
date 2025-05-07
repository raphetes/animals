export default function initModal() {
  const openModal = document.querySelector('[data-modal="open"]');
  const closeModal = document.querySelector('[data-modal="close"]');
  const modal = document.querySelector('[data-modal="container"]');

  openModal.addEventListener("click", modalOpen);
  closeModal.addEventListener("click", modalClose);
  modal.addEventListener("click", modalClose);

  function modalOpen(event) {
    event.preventDefault();
    modal.classList.toggle("ativo");
  }

  function modalClose(event) {
    const condition = event.target === modal || event.target === closeModal;
    if (condition) modal.classList.remove("ativo");
  }
}
