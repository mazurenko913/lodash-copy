const { lt } = require('./index')

it('should checks if first value is less than second.', () => {
  expect(lt(3, 8)).toEqual(true)
  expect(lt(5, 5)).toEqual(false)
  expect(lt(6, 5)).toEqual(false)
  expect(lt([2], 5)).toEqual(true)
})

it('should return false, if one of value empty.', () => {
  expect(lt(3)).toEqual(false)
  expect(lt()).toEqual(false)
})

it('should check only first 2 values', () => {
  expect(lt(1, 5, 4)).toEqual(true)
  expect(lt(6, 4, 8)).toEqual(false)
})

it('should return false, if one of value is not a number.', () => {
  expect(lt(NaN, 3)).toEqual(false)
  expect(lt(NaN, NaN)).toEqual(false)
  expect(lt(NaN, 'abc')).toEqual(false)
})
