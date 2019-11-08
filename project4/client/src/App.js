import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import axios from "axios";




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

  const getId = async () => {
    try {
      const res = await fetch("api/products/:id");
      const text = await res.text();
      const response = text.length ? JSON.parse(text) : {}
      setProducts(response)

    }
    catch (error) {
      throw error;
    }
  }


  useEffect(() => {
    getProducts()
  }, [])

  return (
    <React.Fragment>
      <button type="button">
        Add
      </button>
      {products && products.map((product) => (

        <div>
          <Product key={product.Id} ProductName={product.productName} ProductDesc={product.productDesc} Img={product.img} ProductType={product.ProductType} />
        </div>
      ))}
    </React.Fragment>
  )
}

export default App;


