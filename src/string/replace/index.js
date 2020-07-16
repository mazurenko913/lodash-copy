function replace (string, pattern, replacement) {
  return String(string).replace(pattern, String(replacement))
}

module.exports = { replace }
