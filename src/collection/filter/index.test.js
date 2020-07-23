const { filter } = require('./index')

it('should Iterate over elements of collection, returning an array of all elements predicate returns truthy for', () => {
  const arr = [1, 2, 3, NaN, 'a', 4, 0]

  const resultArr = []
  filter(arr, (value) => {
    if (value > 0) {
      console.log(value)
      return resultArr.push(value)
    }
  })

  expect(resultArr).toEqual([1, 2, 3, 4])
})
