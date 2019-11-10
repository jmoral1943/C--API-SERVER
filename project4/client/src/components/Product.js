import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ productName, id, productDesc, Img, productType, handleDelete }) => {
  return (
    <div className="product-card">
      <button type="button" onClick={event => this.handlePost(event)}>
        Add
      </button>
      <div className="product-card--img">
        <img src={Img} alt="product pic" />
      </div>
      <div className="product-card--content">
        <strong>{productName}</strong>
        <p> {productDesc}</p>
      </div>
      <div className="product-card--meta">
        <strong>${id}</strong>
        <p>{productType}</p>
        <button type="button" onClick={event => this.handlePut(event)}>
          edit
        </button>
        <button type="button" onClick={() => handleDelete(id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
