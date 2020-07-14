function sum (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  return array.reduce((a, b) => a + b)
}
module.exports = { sum }
