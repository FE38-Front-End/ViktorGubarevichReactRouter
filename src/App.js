import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Counter from "./components/counter/App";
import Converter from "./components/converter/Converter";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                <svg
                  className="nav-link-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                  fill="white"
                >
                  <title>ionicons-v5-i</title>
                  <path d="M261.56,101.28a8,8,0,0,0-11.06,0L66.4,277.15a8,8,0,0,0-2.47,5.79L63.9,448a32,32,0,0,0,32,32H192a16,16,0,0,0,16-16V328a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8l0,136a16,16,0,0,0,16,16h96.06a32,32,0,0,0,32-32l0-165.06a8,8,0,0,0-2.47-5.79Z" />
                  <path
                    d="M490.91,244.15l-74.8-71.56,0-108.59a16,16,0,0,0-16-16h-48a16,16,0,0,0-16,16l0,32L278.19,40.62C272.77,35.14,264.71,32,256,32h0c-8.68,0-16.72,3.14-22.14,8.63L21.16,244.13c-6.22,6-7,15.87-1.34,22.37A16,16,0,0,0,43,267.56L250.5,69.28a8,8,0,0,1,11.06,0L469.08,267.56a16,16,0,0,0,22.59-.44C497.81,260.76,497.3,250.26,490.91,244.15Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <div className="home">
              <Home />
            </div>
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/converter">
            <Converter />
          </Route>
          <Route path="/*">
            <h1>Error</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="applications">
      <div className="applications-title">Приложения</div>
      <div className="applications-title-item">
        <Link
          className="applications-title-item-type applications-title-item-type__counter"
          to="/counter"
        >
          Counter
        </Link>
        <Link
          className="applications-title-item-type applications-title-item-type__converter"
          to="/converter"
        >
          Converter
        </Link>
      </div>
    </div>
  );
}

export default App;
