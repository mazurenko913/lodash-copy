function escape (string) {
  return string.replace('&', '&amp;').replace('<', '&lt;').replace('"', '&quot;').replace('>', '&gt;')
}

module.exports = { escape }
