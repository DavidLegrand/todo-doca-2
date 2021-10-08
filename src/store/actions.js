// Action creator : Retourne une action
const increment = (value = 1) => ({ type: 'INCREMENT', payload: value })
const decrement = (value = 1) => ({ type: 'DECREMENT', payload: value })

export { increment, decrement }