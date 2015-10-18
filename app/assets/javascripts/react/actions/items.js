import 'whatwg-fetch'
import * as types   from '../constants/ActionTypes'
import * as cons    from '../constants/constants'

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(response.statusText)
}

export function fetchItems(userId) {
  return dispatch => {
    dispatch(itemsRequest());
    return fetch(cons.APIEndpoints.ITEMS, {
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
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': item.name
      })
    })
    .then(status)
    .then(req => req.json())
    .then(json => dispatch(itemCreateSuccess(json)))
    .catch(errors => dispatch(itemCreateFailure(errors)))
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
    items: json
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
  console.log('bbbb', json)
  return {
    type: types.ITEM_CREATE_SUCCESS,
    item: json
  }
}

export function itemCreateFailure(errors) {
  return {
    type: types.ITEM_CREATE_FAILURE,
    errors: errors
  }
}
