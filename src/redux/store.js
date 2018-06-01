import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { reducer } from 'redux-form'

const initialState = {}

const reducers = combineReducers({ form: reducer })

const enhancers = []
const middleware = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(reducers, initialState, composedEnhancers)

export default store
