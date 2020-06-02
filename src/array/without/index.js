function without (array, ...del) {
  if (!Array.isArray(array)) {
    return undefined
  }
  const newArray = array.filter(item => !del.includes(item))
  return newArray
}
module.exports = { without }
