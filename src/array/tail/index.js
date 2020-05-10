function tail (array) {
  if (!Array.isArray(array)) {
    return undefined
  }
  return array.slice(1)
}
module.exports = { tail }
