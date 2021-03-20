import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./pages/Counter/Counter";
import Converter from "./pages/Converter/Converter";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import HeaderProvider from "./components/Header/HeaderProvider";

function wrapHeader(Component) {
  return (
    <HeaderProvider>
      <Component />
    </HeaderProvider>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="home">{wrapHeader(Home)}</div>
        </Route>
        <Route path="/counter">{wrapHeader(Counter)}</Route>
        <Route path="/converter">{wrapHeader(Converter)}</Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
