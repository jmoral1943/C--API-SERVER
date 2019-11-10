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
      const response = text.length ? JSON.parse(text) : {};
      setProducts(response);

    }
    catch (error) {
      throw error;
    }
  }

  const removeProduct = async id => {
    try {
      await fetch(`api/products/${id}`, { method: 'DELETE' });
      setProducts(products.filter(product => product.id != id));
    }
    catch (error) {
      console.error(`Unable to delete product ID: ${id}`, error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <React.Fragment>
      {products && products.map((product, index) => (

        <div>
          <Product
            key={index}
            handleDelete={removeProduct}
            {...product} />
          <h2>{product.productName}</h2>
        </div>
      ))}
    </React.Fragment>
  )
}

export default App;


