export const createReducer = (initialState, reducers) =>
  (state = initialState, action) => {
    const reducer = reducers[action.type]

    if (typeof reducer === 'undefined') return state

    return reducer(state, action)
  }

export const createStateSelector = selectors => (state, props) =>
  Object.keys(selectors).reduce((newState, stateKey) => {
    newState[stateKey] = selectors[stateKey](state, props)

    return newState
  }, {})
