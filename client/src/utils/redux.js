import { connect as reduxConnect } from 'react-redux'

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

export const connect = (selectors, mapDispatchToProps, mergeProps) =>
  reduxConnect(
    createStateSelector(selectors),
    mapDispatchToProps,
    mergeProps
  )
// export const requestHORInitalState = {
//   requestStatus: undefined,
//   error: undefined,
//   payload: undefined
// }

// export const requestHOR = actionName => createReducer(requestHORInitalState, {
//   [`${actionName}_PENDING`]: (state, action) => ({
//     ...state,
//     requestStatus: PENDING
//   })
//   [`${actionName}_FAILURE`]: (state, action) => ({
//     ...state,
//     requestStatus: ERROR,
//     error: action.error
//   })
//   [`${actionName}_SUCCESS`]: (state, action) => ({
//     ...state,
//     requestStatus: SUCCESS,
//     payload: action.payload
//   })
// })
