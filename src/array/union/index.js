const { uniq } = require('../uniq/index.js')

function union (...arrays) {
  arrays = arrays.filter(el => Array.isArray(el))

  const newArray = [].concat(...arrays)
  return uniq(newArray)
}
module.exports = { union }
