import React, { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <div className="row row-margin">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="col-md-4">
            <p>
              Showing {this.props.result} of {this.props.result}
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <select
              className="form-control select size-by"
              onChange={this.props.handleChangeSize}
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
              onChange={this.props.handleChangeSort}
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

export default Filter;
