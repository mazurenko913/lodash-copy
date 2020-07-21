const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')
const { isString } = require('../../lang/isString/index.js')

function size (collection) {
  if (isObject(collection)) {
    const newArr = Object.keys(collection)
    return newArr.length
  }

  if (isString(collection)) {
    return collection.length
  }

  if (!isObject(collection) || !isArray(collection) || !isString(collection)) {
    return 0
  }

  return collection.length
}

module.exports = { size }
