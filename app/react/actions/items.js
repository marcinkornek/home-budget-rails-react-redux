import 'whatwg-fetch'
import * as types   from '../constants/ActionTypes'
import * as cons    from '../constants/constants'

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(response.statusText)
}

export function addInitialItems(items) {
  return dispatch => {
    dispatch(itemsSuccess(items))
  };
}

export function fetchMoreItems() {
  return dispatch => {
    dispatch(itemsRequest());
    return fetch(cons.APIEndpoints.ITEMS, {
      credentials: 'same-origin',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(status)
    .then(req => req.json())
    .then(json => dispatch(itemsSuccess(json)))
    .catch(errors => dispatch(itemsFailure(errors)))
  };
}

export function createItem(item) {
  return dispatch => {
    dispatch(itemCreateRequest());
    return fetch(cons.APIEndpoints.ITEMS, {
      credentials: 'same-origin',
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': item.name,
        'price': item.price
      })
    })
    .then(status)
    .then(req => req.json())
    .then(json => dispatch(itemCreateSuccess(json)))
    .catch(errors => dispatch(itemCreateFailure(errors)))
  };
}

export function deleteItem(itemId) {
  return dispatch => {
    dispatch(itemCreateRequest());
    return fetch(cons.APIEndpoints.ITEMS + '/' + itemId, {
      credentials: 'same-origin',
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(status)
    .then(req => req.json())
    .then(json => dispatch(itemDeleteSuccess(json)))
    .catch(errors => dispatch(itemDeleteFailure(errors)))
  };
}

export function itemsRequest() {
  return {
    type: types.ITEMS_REQUEST,
  };
}

export function itemsSuccess(json) {
  return {
    type: types.ITEMS_SUCCESS,
    json: json
  }
}

export function itemsFailure(errors) {
  return {
    type: types.ITEMS_FAILURE,
    errors: errors
  }
}

export function itemCreateRequest() {
  return {
    type: types.ITEM_CREATE_REQUEST,
  };
}

export function itemCreateSuccess(json) {
  return {
    type: types.ITEM_CREATE_SUCCESS,
    json: json
  }
}

export function itemCreateFailure(errors) {
  return {
    type: types.ITEM_CREATE_FAILURE,
    errors: errors
  }
}

export function itemDeleteRequest() {
  return {
    type: types.ITEM_DELETE_REQUEST,
  };
}

export function itemDeleteSuccess(json) {
  return {
    type: types.ITEM_DELETE_SUCCESS,
    json: json
  }
}

export function itemDeleteFailure(errors) {
  return {
    type: types.ITEM_DELETE_FAILURE,
    errors: errors
  }
}
