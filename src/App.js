import React from 'react'
import Header from './components/Header'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </div>
    </div>
  )
}

export default App
