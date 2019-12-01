import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div className="header">
          <h2>Shopping Store</h2>
          <ul className="header-menu">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Contact">CONTACT US</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
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
        <div className="banner"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};
export default connect(mapStateToProps)(Header);
