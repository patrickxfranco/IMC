export const Modal = {

  imcValue: document.querySelector('.modal .title span'),
  wrapper: document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('.modal button'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

window.addEventListener('keydown', handleKeydown)

Modal.buttonClose.onclick = () => Modal.close()

function handleKeydown(event) {
  if (event.key == 'Escape') {
    Modal.close()
  }
}