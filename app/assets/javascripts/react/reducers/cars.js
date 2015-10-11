import * as types from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  items: []
}

export default function items(state = initialState, action) {
  switch (action.type) {
  case types.CARS_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    });
  case types.CARS_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });
  default:
    return state;
  }
}
