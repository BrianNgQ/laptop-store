import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Dùng useNavigate thay cho useHistory
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleAddToCart = () => {
    // Chuyển hướng tới trang giỏ hàng khi người dùng nhấn "Add to Cart"
    navigate("/cart");
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "350px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-success font-weight-bold">
            {product.price}
          </p>
          <Link to={`/product/${product.id}`} className="btn btn-info mt-auto">
            View
          </Link>
          <button onClick={handleAddToCart} className="btn btn-primary mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
