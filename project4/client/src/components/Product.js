import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ ProductName, ProductDesc, Img, ProductType }) => {
  return (
    <div className="product-card">
      <div className="product-card--img">
        <img src={Img} alt="product pic" />
      </div>
      <div className="product-card--content">
        <strong>{productName}</strong>
        <p> {productDesc}</p>
      </div>
      <div className="product-card--meta">
        <p>{ProductType}</p>
        <button type="button" onClick={event => this.handlePut(event)}>
          edit
        </button>
        <button type="button" onClick={event => this.handleDelete(event)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
