import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import MoviesIndexContainer from "./MoviesIndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MoviesIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
