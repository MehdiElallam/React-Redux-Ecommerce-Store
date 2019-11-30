import React, { Component } from "react";

export class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <div className="thumbnail cart">
        <h2 className="title">CART - </h2>
        <div className="products-list">
          <hr />
          <p>TOTAL: </p>
        </div>
      </div>
    );
  }
}

export default Cart;
