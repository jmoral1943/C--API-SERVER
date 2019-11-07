import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Product = ({ product, price, about, url, category }) => {
  return (
    <div className="product-card">
         <button type='button' onClick={(event) => this.handlePost(event)}>Add</button>
      <div className="product-card--img">
        <img src={url} alt='product pic' />
      </div>
      <div className="product-card--content">
        <strong>{product}</strong>
        <p> {about}</p>
      </div>
      <div className="product-card--meta">
        <strong>${price}</strong>
        <p>{category}</p>
        <button type='submit'>edit</button>
        <button type='submit'>delete</button>
      </div>
    </div>
  );
};

export default Product;