export { imc, notANumber }

function notANumber(value) {
  return isNaN(value) || value == ""
}

function imc(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}