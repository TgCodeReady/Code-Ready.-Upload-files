const modalContainer = document.querySelector('.modal-container');
const modalButton = document.querySelector('.modal-button');
const modalClose = document.querySelector('.modal-close');
modalButton.addEventListener('click', () => {
  modalContainer.classList.add('modal-open');
});
modalClose.addEventListener('click', () => {
  modalContainer.classList.remove('modal-open');
});
modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.classList.remove('modal-open');
  }
});
