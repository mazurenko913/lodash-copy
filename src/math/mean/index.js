function mean (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  const sum = array.reduce((previous, current) => (current += previous))
  const avg = sum / array.length

  return avg
}
module.exports = { mean }
