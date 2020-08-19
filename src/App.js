import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventView from "./Pages/Events/View";
import Home from "./Pages/Home";
import Work from "./Pages/Work";

function App() {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events/:id">
          <EventView />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
