import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="Container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
