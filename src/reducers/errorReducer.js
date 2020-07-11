const initState = {
  error: null
}

const reducer = (state = initState, action) => {
  if (action.error) {
    return { error: action.error }
  } else if (action.type === 'SET_ERROR') {
    return { error: action.error }
  } else if (action.type === 'REMOVE_ERROR') {
    return { error: null }
  }
  return { error: null }
}

export const setError = (errorMessage) => {
  return {
    type: 'SET_ERROR',
    error: errorMessage
  }
}

export const removeError = () => {
  return {
    type: 'REMOVE_ERROR'
  }
}

export default reducer