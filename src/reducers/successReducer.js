const initState = {
  success: null
}

const reducer = (state = initState, action) => {
  if (action.success) {
    return {
      success: action.success
    }
  } else if (action.type === 'REMOVE_SUCCESS') {
    return { success: null }
  }

  return state
}

export const removeSuccess = () => {
  return {
    type: 'REMOVE_SUCCESS'
  }
}

export default reducer