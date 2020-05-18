const { uniq } = require('../uniq/index')

function union (...arrays) {
  // arrays = arrays.filter(!Array.isArray(arrays)) {
  //   return undefined
  // }

  const newArray = [].concat(...arrays)
  return uniq(newArray)
}
module.exports = { union }
