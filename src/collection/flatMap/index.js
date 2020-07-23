const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')

function flatMap (collection, func) {
  if (isArray(collection)) {
    const newArr = []
    collection.forEach(el => {
      if (Array.isArray(el)) {
        newArr.push(func(...el))
      } else {
        newArr.push(func(el))
      }
    })
    return
  }

  if (isObject(collection)) {
    const newArr = Object.values(collection)
    newArr.forEach(el => {
      if (Array.isArray(el)) {
        newArr.push(func(...el))
      } else {
        newArr.push(func(el))
      }
    })
  }
}

module.exports = { flatMap }
