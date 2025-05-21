export default class Modal {
  constructor(openModal, closeModal, containerModal) {
    this.openModal = document.querySelector(openModal);
    this.closeModal = document.querySelector(closeModal);
    this.modal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalOpen() {
    this.modal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.modalOpen();
  }

  addModalEvents() {
    this.openModal.addEventListener("click", this.eventToggleModal);
    this.closeModal.addEventListener("click", this.eventToggleModal);
    this.modal.addEventListener("click", this.modalClose);
  }

  init() {
    if (this.openModal && this.closeModal && this.modal) {
      this.addModalEvents();
    }
    return this;
  }

  modalClose(event) {
    const condition =
      event.target === this.modal || event.target === this.closeModal;
    if (condition) this.modal.classList.remove("ativo");
  }
}
