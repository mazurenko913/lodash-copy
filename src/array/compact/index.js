function compact (array) {
  if (!Array.isArray(array)) {
    return undefined
  }

  return array.filter(el => !!el)
}
module.exports = { compact }
