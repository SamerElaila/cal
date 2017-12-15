const snakeWord = word => {
  const out = []

  for (let i = 0, j = 0; i < word.length; i++, j++) {
    if (word[i].isUpperCase) {
      const c = word[i].toLowerCase()
      if (i === 0) {
        out[j] = c
        break
      }

      out[j] = '_'
      out[j+1] = c
      j++
      break
    }

    out[j] = word[i]
  }

  return out.join('')
}

module.exports = obj => {
  const keys = Object.keys(obj)
  const out = {}

  for (let i = 0; i < keys.length; i++) {
    out[snakeWord(keys[i])] = obj[keys[i]]
  }

  return out
}
