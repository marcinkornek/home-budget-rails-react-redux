import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware                      from 'redux-thunk';
import rootReducer                          from '../reducers/index';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore);

export default function storage() {
  return finalCreateStore(rootReducer);
}
