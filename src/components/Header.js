import React, { Component } from "react";

export class Header extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="header">
        <h2>Shopping Store</h2>
        <ul className="header-menu">
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li className="menu-prec">
            <span className="num">5</span>
            <i className="fa fa-heart-o"></i>
          </li>
          <li className="menu-prec">
            <span className="num">{cartItems.length}</span>
            <i className="fa fa-shopping-bag"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
