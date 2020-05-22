function drop (array, el = 1) {
  if (!Array.isArray(array)) {
    return undefined
  }

  if (el < 1) {
    el = 0
  }

  return array.slice(el)
}

module.exports = { drop }
