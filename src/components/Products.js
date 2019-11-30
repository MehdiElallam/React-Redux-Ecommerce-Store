import React, { Component } from "react";

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="col-md-3" key={product.id}>
        <div className="thumbnail text-center col-mine">
          <a
            href={`#${product.id}`}
            onClick={e => this.props.handleAddToCart(e, product)}
          >
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
          </a>
          <p className="reviews">
            <span className="gold-star">
              <i className="fa fa-star"></i>
            </span>
            <span className="gold-star">
              <i className="fa fa-star"></i>
            </span>
            <span className="gold-star">
              <i className="fa fa-star"></i>
            </span>
            <span className="normal-star">
              <i className="fa fa-star-o"></i>
            </span>
            <span className="normal-star">
              <i className="fa fa-star-o"></i>
            </span>
          </p>
          <p className="product-title">{product.title}</p>
          <p className="product-price">
            <i className="fa fa-eur"></i> {product.price}{" "}
          </p>

          <div className="product-menu">
            <button
              className="btn-add-cart"
              onClick={e => this.props.handleAddToCart(e, product)}
            >
              <span className="cart-icon">
                <i className="fa fa-shopping-bag"></i>
              </span>
              Add To Cart
            </button>
            <button className="btn-add-favourite">
              <i className="fa fa-heart-o"></i>
            </button>
            <button className="btn-add-favourite">
              <i className="fa fa-heart-o"></i>
            </button>
          </div>
        </div>
      </div>
    ));

    return <div className="products">{productItems}</div>;
  }
}
