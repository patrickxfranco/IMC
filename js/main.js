import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateImc, notANumber } from './utils.js'

const form = document.querySelector('form')
export const inputWeight = document.querySelector('#weight')
export const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)



  if (weight <= 0 || height <= 0) {
    AlertError.open()
    return
  } else if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()
  const result = calculateImc(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const imcValue = result
  Modal.imcValue.innerText = imcValue
  Modal.open()
}