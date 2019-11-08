import React from "react";
import "./App.css";
import Product from "./components/Product";
import axios from "axios";

class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.fetchProducts();
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // this.fetchById();
  }

  fetchProducts = () => {
    axios
      .get("/api/Products")
      .then(res => {
        console.log("mounted get products");
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };

  // fetchById = () => {
  //   axios.get("/api/Products/:id").then(res => {
  //     this.setState({ products: res.data });
  //   });
  // };

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
        console.log("delete");
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
