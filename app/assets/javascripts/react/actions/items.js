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
        'Accept': 'application/vnd.blabla-clone-v1+json',
        'Content-Type': 'application/json'
      }
    })
    .then(status)
    .then(req => req.json())
    .then(json => dispatch(itemsSuccess(json)))
    .catch(errors => dispatch(itemsFailure(errors)))
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
