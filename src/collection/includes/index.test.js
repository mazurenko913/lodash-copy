const { includes } = require('./index')

it('should checks if value is in collection.', () => {
  expect(includes(1, 2, 3], 1)).toEqual([2])
})
