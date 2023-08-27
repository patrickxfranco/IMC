export { calculateImc, notANumber }

function notANumber(value) {
  return isNaN(value) || value == ""
}

function calculateImc(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}