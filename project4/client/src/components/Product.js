import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
const Product = ({ ProductName, ProductDesc, Img, ProductType }) => {
=======
const Product = ({ productName, id, productDesc, Img, productType }) => {
>>>>>>> 17778c8ee8da9aeeb25c47f39b440783709b635a
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
<<<<<<< HEAD
        <p>{ProductType}</p>
=======
        <strong>${id}</strong>
        <p>{productType}</p>
>>>>>>> 17778c8ee8da9aeeb25c47f39b440783709b635a
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
