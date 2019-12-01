import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterProductsBySize,
  handleChangeSort
} from "../redux/products/productActions";

class Filter extends Component {
  render() {
    return (
      <div className="row row-margin">
        <div className="col-md-3"></div>
        <div className="col-md-9 col-xs-12">
          <div className="col-md-4">
            <p>
              Showing {this.props.filteredItems.length} of{" "}
              {this.props.filteredItems.length}
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <select
              className="form-control select size-by"
              onChange={e =>
                this.props.filterProductsBySize(
                  this.props.products,
                  e.target.value
                )
              }
            >
              <option value="">ALL</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <select
              className="form-control select sort-by"
              onChange={e =>
                this.props.handleChangeSort(this.props.products, e.target.value)
              }
            >
              <option value="">Default sorting</option>
              <option value="lowest">Lowest to highest</option>
              <option value="highest">Highest to lowest</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.items,
    size: state.products.size,
    filteredItems: state.products.filteredItems
  };
};

export default connect(mapStateToProps, {
  filterProductsBySize,
  handleChangeSort
})(Filter);
