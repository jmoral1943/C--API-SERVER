import React from "react";
import "./App.css";
import Product from "./components/Product";
import axios from "axios";

class App extends React.Component {
  state = {
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };

  fetchProducts = () => {
    axios.get("/api/Products").then(res => {
      this.setState({ products: res.data });
    });
  };

  fetchById = () => {
    axios.get("/api/Products/:id").then(res => {
      this.setState({ products: res.data });
    });
  };

  handlePost(event) {
    alert("successfully added new product");
    axios
      .post("/api/Products")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  }

  handlePut(event) {
    alert("update your product info");
    axios
      .put("/api/Products/:id")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  }

  handleDelete(event) {
    alert("deleted a product");
    axios
      .delete("api/Products/:id")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate() {
    this.fetchById();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.products.map((product, index) => (
          <Product key={index} {...product} />
        ))}

        {/* <Product /> */}
      </React.Fragment>
    );
  }
}

export default App;
