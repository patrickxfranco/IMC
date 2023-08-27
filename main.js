// VARIÁVES

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

Modal = {

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

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const imcValue = result

  Modal.imcValue.innerText = imcValue

  Modal.open()
}

Modal.buttonClose.onclick = () => Modal.close()

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}