import * as types   from '../constants/ActionTypes'
import objectAssign from 'object-assign'
import _            from 'lodash'

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
  case types.ITEM_CREATE_SUCCESS:
    var items = _.cloneDeep(state.items)
    items.push(action.item)
    return objectAssign({}, state, {
      isFetching: false,
      items: items
    });
  case types.ITEM_DELETE_SUCCESS:
    var items = _.cloneDeep(state.items)
    items = _.reject(items, function(el) { return el.id === action.item.id; })
    return objectAssign({}, state, {
      isFetching: false,
      items: items
    });
  default:
    return state;
  }
}
