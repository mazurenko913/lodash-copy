function initial (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  const ar = []
  for (let i = 0; i < array.length - 1; i++) {
    ar.push(array[i])
  }
  return ar
}

module.exports = { initial }
