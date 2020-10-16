import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
