import Axios from 'axios'

export const setPizzas = (payload) => ({type: 'SET_PIZZAS', payload})
export const setLoaded = (payload) => ({type: 'SET_LOADED', payload})

export const fetchPizzas = () => async (dispatch) => {
  dispatch(setLoaded(false))
  let {data} = await Axios.get(
    'http://localhost:3004/pizzas?_order=desc&_sort=price'
  )
  dispatch(setPizzas(data))
  dispatch(setLoaded(true))
}
