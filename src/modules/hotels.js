import axios from 'axios'

const SEARCH_HOTELS = 'hotels/SEARCH_HOTELS'
const SET_RATINGS = 'hotels/SET_RATINGS'
const SET_RANGE = 'hotels/SET_RANGE'

const initialState = {
  hotelsList: [],
  ratings: 0,
  range: {
    start: 0,
    end: 0
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_HOTELS:
      return {
        ...state,
        ...action.state
      }
    case SET_RATINGS:
      return {
        ...state,
        ...action.state
      }
    case SET_RANGE:
      return {
        ...state,
        ...action.state
      }
    default:
      return state
  }
}

const fetchHotels = () => {
  return new Promise((resolve, reject) => {
    return axios.get('https://www.raphaelfabeni.com.br/rv/hotels.json')
      .then(res => {
        return resolve(res.data.hotels)
      })
      .catch(err => {
        return reject(err)
      }) 
  })
}

export const searchHotels = () => {
  return async dispatch => {
    dispatch({
      type: SEARCH_HOTELS,
      state: { hotelsList: await fetchHotels() }
    })
  }
}

export const setRatings = (state) => {
  return dispatch => {
    dispatch({
      type: SET_RATINGS,
      state
    })
  }
}

export const setRange = (state) => {
  return dispatch => {
    dispatch({
      type: SET_RANGE,
      state
    })
  }
}
