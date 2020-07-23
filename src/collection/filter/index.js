// const { isObject } = require('../../lang/isObject/index.js')
const { isArray } = require('../../lang/isArray/index.js')
const { isNumber } = require('../../lang/isNumber/index.js')
const { isNaN } = require('../../lang/isNaN/index.js')

function filter (collection, cb) {
  if (isArray(collection)) {
    const newArr = []
    for (let i = 0; i < collection.length; i++) {
      if (isNumber(collection[i]) && !isNaN(collection[i])) {
        newArr.push(cb(collection[i], i, newArr))
        // console.log(newArr)
      }
    }
  }
}

module.exports = { filter }
