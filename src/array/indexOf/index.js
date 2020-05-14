function indexOf (array, value) {
  if (!Array.isArray(array)) {
    return undefined
  }

  return array.indexOf(value)
}
module.exports = { indexOf }
