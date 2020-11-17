import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";

function App() {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
