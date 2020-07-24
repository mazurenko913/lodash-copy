const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')

function flatMap (collection, func) {
  if (isArray(collection)) {
    const newArr = []
    collection.forEach(el => {
      const res = func(el)
      if (Array.isArray(res)) {
        newArr.push(...res)
      } else {
        newArr.push(res)
      }
    })
    return newArr
  }

  if (isObject(collection)) {
    const newArr = []
    const values = Object.values(collection)
    values.forEach(el => {
      const res = func(el)
      if (Array.isArray(res)) {
        newArr.push(...res)
      } else {
        newArr.push(res)
      }
    })
    return newArr
  }
}

module.exports = { flatMap }
