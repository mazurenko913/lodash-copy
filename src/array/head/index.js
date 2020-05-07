function head (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  return array[0]
}

module.exports = { head }
