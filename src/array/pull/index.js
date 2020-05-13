function pull (array, ...del) {
  if (!Array.isArray(array)) {
    return undefined
  }

  array = array.filter(item => !del.includes(item))
  return array
}
module.exports = { pull }
