import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import axios from "axios";

// class App extends React.Component {
//   state = {
//     products: ["1", "2", "2"],
//   };

//   componentDidMount() {
//     this.fetchProducts();
//     console.log('componentDidMount')
//   }

//   componentDidUpdate() {
//     this.fetchById();
//   }

//   fetchProducts = () => {
//     axios.get("/api/Products").then(res => {
//       console.log('mounted get products')
//       this.setState({ products: res.data.products });

//     });
//   };

//   fetchById = () => {
//     axios.get("/api/Products/:id").then(res => {
//       this.setState({ products: res.data });
//     });
//   };

//   handlePost(event) {
//     alert("successfully added new product");
//     axios
//       .post("/api/Products")
//       .then(res => {
//         this.setState({ products: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     event.preventDefault();
//   }

//   handlePut(event) {
//     alert("update your product info");
//     axios
//       .put("/api/Products/:id")
//       .then(res => {
//         this.setState({ products: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     event.preventDefault();
//   }

//   handleDelete(event) {
//     alert("deleted a product");
//     axios
//       .delete("api/Products/:id")
//       .then(res => {
//         console.log('delete')
//         this.setState({ products: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.products.map((product, index) => (
//           <Product key={index} {...product} />
//         ))}

//         {/* <Product /> */}
//       </React.Fragment>
//     );
//   }
// }

// export default App;



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


