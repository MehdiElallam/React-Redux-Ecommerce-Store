import React from "react";
import Filter from "./Filter";
import Cart from "./Cart";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <Filter />
      <div className="row" style={{ marginTop: 40 }}>
        <div className="col-md-3">
          <Cart />
        </div>
        <div className="col-md-9">
          <Products />
        </div>
      </div>
    </div>
  );
}
