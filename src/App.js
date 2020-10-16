import React from 'react'
import Header from './components/Header'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

export default App
