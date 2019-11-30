import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      size: "",
      sort: "",
      cartItems: []
    };
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    //this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
  }
  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data,
          filteredProducts: data
        });
        console.log(data);
      });
    const cartItemsLocal = localStorage.getItem("cartItems");
    if (cartItemsLocal) {
      this.setState({
        cartItems: JSON.parse(cartItemsLocal)
      });
    }
  }
  handleAddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems;
      var alreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          alreadyInCart = true;
          item.quantity++;
        }
      });
      if (!alreadyInCart) {
        cartItems.push({ ...product, quantity: 1 });
      }
      //localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  }

  handleChangeSize(e) {
    this.setState({ size: e.target.value });
    this.ListOfProducts();
  }
  handleChangeSort(e) {
    this.setState({ sort: e.target.value });
    this.ListOfProducts();
  }
  ListOfProducts() {
    this.setState(state => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
      }

      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            product =>
              //product.availableSizes.includes(state.size)
              product.availableSizes.indexOf(state.size) >= 0
          )
        };
      }

      return {
        filteredProducts: state.products
      };
    });
  }
  render() {
    return (
      <div className="Container">
        <Header
          favourites={this.state.favourites}
          cartItems={this.state.cartItems}
        />
        <Filter
          size={this.state.size}
          sort={this.state.sort}
          result={this.state.filteredProducts.length}
          handleChangeSize={this.handleChangeSize}
          handleChangeSort={this.handleChangeSort}
        />
        <div className="row">
          <div className="col-md-3">
            <Cart
              cartItems={this.state.cartItems}
              deleteItemFromCart={this.deleteItemFromCart}
            />
          </div>
          <div className="col-md-9">
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
