import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Container">
          <Header />
          <Filter />
          <div className="row">
            <div className="col-md-3">
              <Cart />
            </div>
            <div className="col-md-9">
              <Products />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
