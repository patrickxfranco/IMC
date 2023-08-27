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

Modal.buttonClose.onclick = () => Modal.close()