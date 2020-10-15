import filters from './reducers/filters'
import pizzas from './reducers/pizzas'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({filters, pizzas})

export default rootReducer
