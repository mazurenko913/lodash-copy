const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')

function flatMap (collection, cb) {
  if (isArray(collection)) {
    const newArr = [];
    collection.forEach(el => {
      if (Array.isArray(el)) {
        newArr.push(cb(...el))
      } else {
        newArr.push(cb(el))
      }
    })
    return
  }

  if (isObject(collection)) {
    const newArr = Object.values(collection)
    newArr.forEach(el => {
      if (Array.isArray(el)) {
        newArr.push(cb(...el))
      } else {
        newArr.push(cb(el))
      }
    })
  }
}

module.exports = { flatMap }
