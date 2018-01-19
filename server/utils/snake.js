const upperRExp = /[A-Z]/

const isUpper = c => upperRExp.test(c)

const snakeWord = word => {
  const out = []

  for (let i = 0, j = 0; i < word.length; i++, j++) {
    if (isUpper(word[i])) {
      const c = word[i].toLowerCase()
      if (i === 0) {
        out[j] = c
        continue
      }

      out[j] = '_'
      out[j + 1] = c
      j++
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
    out[snakeWord(keys[i])] = obj[keys[i]]
  }

  return out
}
