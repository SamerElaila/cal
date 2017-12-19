const camelWord = word => {
  const out = []

  for (let i = 0, j = 0; i < word.length; i++, j++) {
    if (word[i] === '_') {
      i++
      out[j] = word[i].toUpperCase()
      continue
    }

    out[j] = word[i]
  }

  return out.join('')
}

module.exports = obj => {
  const keys = Object.keys(obj)
  const out = {}

  for (let i = 0; i < keys.length; i++) {
    out[camelWord(keys[i])] = obj[keys[i]]
  }

  return out
}
