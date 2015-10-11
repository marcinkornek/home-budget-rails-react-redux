import * as types   from '../constants/ActionTypes'
import objectAssign from 'object-assign'

const initialState = {
  isFetching: false,
  items: []
}

export default function items(state = initialState, action) {
  switch (action.type) {
  case types.ITEMS_REQUEST:
    return objectAssign({}, state, {
      isFetching: true
    });
  case types.ITEMS_SUCCESS:
    return objectAssign({}, state, {
      isFetching: false,
      items: action.items
    });
  default:
    return state;
  }
}
