const { uniq } = require('../uniq/index')

function union (arrays) {
  if (!Array.isArray(arrays)) {
    return undefined
  }
  const newArray = [].concat(...arrays)
  return uniq(newArray)
}
module.exports = { union }
