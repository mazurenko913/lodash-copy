function pull (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  const removeValFromIndex = [0, 2, 3, 5]

  for (var i = removeValFromIndex.length - 1; i >= 0; i--) {
    array.splice(removeValFromIndex[i], 1)
  }
  return array
}
module.exports = { pull }
