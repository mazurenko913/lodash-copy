function repeat (value, n = 1) {
  if (n < 1) {
    return ''
  }

  return String(value).repeat(n)
}

module.exports = { repeat }
