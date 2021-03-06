const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')

function forEach (collection, cb) {
  if (isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      cb(collection[i])
    }
    return
  }

  if (isObject(collection)) {
    for (const key in collection) {
      cb(key, collection[key])
    }
  }
}

module.exports = { forEach }
