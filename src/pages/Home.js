import React from 'react'
import Categories from './../components/Categories'
import SortPopup from './../components/SortPopup'
import PizzaBlock from './../components/PizzaBlock'
import {useDispatch, useSelector} from 'react-redux'
import {setCategory} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'

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
  const {category, sortBy} = useSelector(({filters}) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [category])

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index))
    },
    [dispatch]
  )

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
            {name: 'популярности', type: 'popular'},
            {name: 'цене', type: 'price'},
            {name: 'алфавит', type: 'alphaber'},
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home
