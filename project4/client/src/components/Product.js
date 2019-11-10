import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';


const Product = ({ productName, id, productDesc, Img, productType }) => {

  console.log(Img)
  return (
    <div className="card text-center ml-3 mr-2 mb-4 pl-2 pr-2 pb-2 pt-2 col-sm-12 col-md-4 col-lg-3">
        <img src={Img} alt="product image" className="card-img img" />
      <div>
        <h2 className="card-title">{productName}</h2>
        <p className="card-subtitle">{productDesc}</p>
      </div>
      <div>
        <p className="font-weight-bold card-text">${id}</p>
        <p>{productType}</p>
        {<Link to={`/edit/${id}`}><button className="btn btn-info mr-1 pl-4 pr-4" type="button">
          EDIT
        </button></Link>}
        <button className="btn btn-info" type="button" onClick={event => this.handleDelete(event)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Product;
