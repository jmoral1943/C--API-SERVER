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

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <React.Fragment>
      {products && products.map((product, index) => (

        <div>
          <Product key={index} {...product} />
          <h2>{product.productName}</h2>
        </div>
      ))}
    </React.Fragment>
  )
}

export default App;


