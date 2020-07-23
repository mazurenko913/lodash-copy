const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')

function forEachRight (collection, cb) {
  if (isArray(collection)) {
    const newArr = [...collection]
    newArr.reverse()
    for (let i = 0; i < newArr.length; i++) {
      cb(newArr[i])
    }
    return
  }

  if (isObject(collection)) {
    for (const key of Object.keys(collection).reverse()) {
      cb(key, collection[key])
    }
  }
}

module.exports = { forEachRight }
