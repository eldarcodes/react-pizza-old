import React from 'react'
import Categories from './../components/Categories'
import SortPopup from './../components/SortPopup'
import PizzaBlock from './../components/PizzaBlock'
import {useDispatch, useSelector} from 'react-redux'
import {setCategory} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'
import {setSortBy} from './../redux/actions/filters'
import {addPizzaToCart} from './../redux/actions/cart'

const categoriesNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const cartItems = useSelector(({cart}) => cart.items)
  const {category, sortBy} = useSelector(({filters}) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy, dispatch])

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index))
    },
    [dispatch]
  )

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type))
    },
    [dispatch]
  )

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onSelectCategory={onSelectCategory}
          items={categoriesNames}
          activeCategory={category}
        />
        <SortPopup
          items={[
            {name: 'популярности', type: 'rating', order: 'desc'},
            {name: 'цене', type: 'price', order: 'desc'},
            {name: 'алфавит', type: 'name', order: 'asc'},
          ]}
          activeSortType={sortBy.type}
          sortHandler={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                cartCount={cartItems[obj.id] && cartItems[obj.id].length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home
