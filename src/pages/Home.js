import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
  <div className="container text-center my-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h1 className="display-4 font-weight-bold">Welcome to Laptop Store</h1>
        <p className="lead mt-3">
          Discover the latest and greatest laptops that fit all your needs.
          Quality, performance, and style—all in one place.
        </p>
        <button
          className="btn btn-primary btn-lg mt-4"
          onClick={() => (window.location.href = "/products")}
        >
          View Products
        </button>
      </div>
    </div>
  </div>
);

export default Home;
