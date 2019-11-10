import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import EditProducts from './components/EditProducts'
import axios from "axios";
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";




const App = () => {
  const [products, setProducts] = useState([])


  const getProducts = async () => {
    try {
      const res = await fetch("api/products");
      const text = await res.text();
      const response = text.length ? JSON.parse(text) : {}
      setProducts(response)

    }
    catch (error) {
      throw error;
    }
  }

  const getProductId = async () => {

  }

  const handlePut = async (id, data) => {
      fetch(`api/products/${id}`, {
        method: "PUT",
        body: data
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <BrowserRouter>
    <div className="container">
      <button className="btn btn-info pl-4 pr-4 mb-2 mt-2" type="button" onClick={event => this.handlePost(event)}>
        Add
      </button>

      <div className="row">
      {products && products.map((product, index) => (
          <Product key={index} {...product} />
      ))}
      </div>
      
        <Route path="/edit/:id" render={props => <EditProducts {...props} />} />
    </div>
    </BrowserRouter>
  )
}

export default App;


