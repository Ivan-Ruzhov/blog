import thunk from 'redux-thunk'
import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux'

import { articlesReducer } from './Articles-reducer'
import { userReducer } from './User-reducer'

const store = createStore(
  combineReducers({
    articlesReducer,
    userReducer,
  }),
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export { store }
