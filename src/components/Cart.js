import React, { Component } from "react";

export class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <div className="thumbnail cart">
        <h2 className="title">CART - {cartItems.length}</h2>
        <div className="products-list">
          {cartItems.map(item => (
            <div className="product" key={item.id}>
              <div className="product-img">
                <img src={`/products/${item.sku}_2.jpg`} alt={item.title} />
              </div>

              <div className="product-infos">
                <p className="title title-sm">{item.title}</p>
                <p className="price-sm">
                  {" "}
                  <i className="fa fa-eur"></i> {item.price}
                </p>
                <p className="quantity quantity-sm">
                  Quantity : {item.quantity}
                </p>
              </div>
            </div>
          ))}
          <hr />
          <p>TOTAL: </p>
        </div>
      </div>
    );
  }
}

export default Cart;
