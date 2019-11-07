import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ ProductName, Id, ProductDesc, Img, ProductType }) => {
  return (
    <div className="product-card">
      <button type="button" onClick={event => this.handlePost(event)}>
        Add
      </button>
      <div className="product-card--img">
        <img src={Img} alt="product pic" />
      </div>
      <div className="product-card--content">
        <strong>{ProductName}</strong>
        <p> {ProductDesc}</p>
      </div>
      <div className="product-card--meta">
        <strong>${Id}</strong>
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
