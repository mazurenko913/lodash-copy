const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')

function filter (collection, cb) {
  if (isArray(collection)) {
    const newArr = []
    for (let i = 0; i < collection.length; i++) {
      const result = cb(collection[i], i, collection)
      if (result) {
        newArr.push(collection[i])
      }
    }
    return newArr
  }

  if (isObject(collection, cb)) {
    const newArr = []
    Object.keys(collection).forEach(key => {
      newArr.push(cb(key, collection[key]))
    })
    console.log(newArr)
    return newArr
  }
}

module.exports = { filter }
