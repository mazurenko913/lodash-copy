function inRange (x, min = 0, max = min) {
  if (min > max) {
    [min, max] = [max, min]
  }
  return x >= min && x < max
}

module.exports = { inRange }
