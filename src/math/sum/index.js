function sum (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  return array.reduce((acc, currentValue) => acc + currentValue)
}
module.exports = { sum }
