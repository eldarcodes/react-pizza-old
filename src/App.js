import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Header from './components/Header'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {connect} from 'react-redux'
import {setPizzas} from './redux/actions/pizzas'

function App(props) {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      props.setPizzas(data.pizzas)
    })
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={props.pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pizzas: state.pizzas.items,
})

export default connect(mapStateToProps, {setPizzas})(App)
