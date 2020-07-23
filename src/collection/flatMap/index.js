const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')

function flatMap (collection, cb) {
  if (isArray(collection)) {
    const newArr = []
    for (let i = 0; i < collection.length; ++i) {
      const index = collection.indexOf(collection[i])
      newArr.push(collection[i])
      newArr.push(collection[i])
      cb(collection[i], index, newArr)
    }
    return newArr
  }

  if (isObject(collection)) {
    const newArr = []
    for (const key in collection) {
      newArr.push(collection[key])
      newArr.push(collection[key])
      cb(collection[key], key, newArr)
    }
    return newArr
  }
}

module.exports = { flatMap }
