export const magics = reducers => {
  const stateKeys = Object.keys(reducers)

  const pow = stateKeys.reduce((acc, k) => {
    const old = reducers[k]

    if (typeof old === 'function') {
      acc[k] = old
      return acc
    }

    if (typeof old === 'object') {
      acc[k] = magics(old)
      return acc
    }

    return acc
  })

  return combineReducers(pow)
}

magics({
  events: (state, action) => {
    if (action.type === CREATE_EVENT) {
      return {
        ...state,
        events: [...state.events, action.payload]
      }
    }

    return state
  },
  people: {
    current: ()
  }
})
