import Axios from 'axios'
import {SET_LOADED, SET_PIZZAS} from './../types'

export const setPizzas = (payload) => ({type: SET_PIZZAS, payload})
export const setLoaded = (payload) => ({type: SET_LOADED, payload})

export const fetchPizzas = (sortBy, category) => async (dispatch) => {
  dispatch(setLoaded(false))
  let {data} = await Axios.get(
    `http://localhost:3004/pizzas?${
      category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`
  )
  dispatch(setPizzas(data))
  dispatch(setLoaded(true))
}
