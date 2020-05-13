function initial (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  return array.slice(0, -1)
}

module.exports = { initial }
