import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const configStore = initialState => {
  const composeEnahancers = compose
  return createStore(
    rootReducer,
    initialState,
    composeEnahancers(applyMiddleware(thunk))
  )
}

export default configStore
