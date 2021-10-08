
// State inital
const initialState = {
  counter: 0
}

// Reducer : retourner un nouveau state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, counter: state.counter + action.payload }
    case 'DECREMENT': return { ...state, counter: state.counter - action.payload }
    default: return state
  }
}

export default reducer