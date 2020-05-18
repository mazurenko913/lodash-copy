const { uniq } = require('../uniq/index')

function union (...arrays) {

  const newArray = [].concat(...arrays)
  return uniq(newArray)
}
module.exports = { union }
