import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import MoviesIndexContainer from "./MoviesIndexContainer"
import MovieShowContainer from "./MovieShowContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/:id" component={MovieShowContainer}/>
        <Route path="/" component={MoviesIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
