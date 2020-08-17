import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./Pages/About"
import Home from "./Pages/Home"
import Work from "./Pages/Work"

// const work = () => {
//   const components = [A, B];
//   const componentsToRender = components.map((Component, i) => (
//     <Component key={i} testProp="testProp" />
//   ));
//   return <div>{componentsToRender}</div>;
// };

function App() {
  return (
    <Router>
      <div id="home">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
