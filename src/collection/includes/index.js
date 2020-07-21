const { isArray } = require('../../lang/isArray/index.js')
const { isString } = require('../../lang/isString/index.js')
const { isObject } = require('../../lang/isObject/index.js')

function includes (collection, value, fromIndex = 0) {
  if (isArray(collection)) {
    if (fromIndex < 0) {
      fromIndex = collection.length + fromIndex
    }

    for (let i = fromIndex; i < collection.length; i++) {
      if (collection[i] === value) {
        return true
      }
    }
    return false
  }

  if (isString(collection)) {
    if ((collection.indexOf(value) >= 0)) {
      return true
    }
    return false
  }

  if (isObject(collection)) {
    const keys = Object.values(collection)

    if (fromIndex < 0) {
      fromIndex = keys.length + fromIndex
    }

    for (let i = fromIndex; i < keys.length; i++) {
      if (keys[i] === value) {
        return true
      }
    }
    return false
  }
}

module.exports = { includes }
