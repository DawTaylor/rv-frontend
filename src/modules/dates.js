const SET_DATES = 'dates/SET_DATES'

const initialState = {
  from: '',
  to: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATES:
      return {
        ...state,
        ...action.state
      }
    default:
      return state
  }
}

export const setDates = (state) => {
  return dispatch => {
    console.log('dispatch', state)
    dispatch({
      type: SET_DATES,
      state
    })
  }
}
