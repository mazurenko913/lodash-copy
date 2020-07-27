const { isArray } = require('../../lang/isArray/index.js')
const { isObject } = require('../../lang/isObject/index.js')

function map (collection, cb) {
  if (isArray(collection)) {
    const newArr = []
    for (let i = 0; i < collection.length; i++) {
      newArr.push(cb(collection[i], i, collection))
    }
    return newArr
  }

  if (isObject(collection, cb)) {
    const newArr = []
    Object.keys(collection).forEach(key => {
      newArr.push(cb(collection[key], key, collection))
    })
    return newArr
  }
}

module.exports = { map }
