import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Giả sử các hãng máy tính và sản phẩm
    const fetchedBrands = ["Dell", "HP", "Lenovo", "Apple"];
    setBrands(fetchedBrands);

    // Lấy dữ liệu sản phẩm (có thể thay thế bằng API)
    setProducts([
      {
        id: 1,
        name: "Dell  Inspiron 15 5000",
        brand: "Dell",
        price: "$500",
        image: "/images/laptop1.jpg",
      },
      {
        id: 1,
        name: "Dell Latitude 5410",
        brand: "Dell",
        price: "$500",
        image: "/images/laptop2.jpg",
      },
      {
        id: 1,
        name: "Dell Inspiron 3530",
        brand: "Dell",
        price: "$500",
        image: "/images/laptop3.jpg",
      },
      {
        id: 2,
        name: "HP Paviion 15",
        brand: "HP",
        price: "$600",
        image: "/images/laptop4.jpg",
      },
      {
        id: 2,
        name: "HP Pavilion Aero 13",
        brand: "HP",
        price: "$600",
        image: "/images/laptop5.jpg",
      },
      {
        id: 2,
        name: "HP Gaming Victus 15",
        brand: "HP",
        price: "$600",
        image: "/images/laptop6.jpg",
      },
      {
        id: 3,
        name: "Lenovo LOQ 15IAX9",
        brand: "Lenovo",
        price: "$700",
        image: "/images/laptop7.jpg",
      },
      {
        id: 3,
        name: "Lenovo Thinkbook 16 G6+",
        brand: "Lenovo",
        price: "$700",
        image: "/images/laptop8.jpg",
      },
      {
        id: 3,
        name: "Lenovo Ideapad Slim 5",
        brand: "Lenovo",
        price: "$700",
        image: "/images/laptop9.jpg",
      },
      {
        id: 4,
        name: "Macbook Air M2 2022",
        brand: "Apple",
        price: "$800",
        image: "/images/laptop10.jpg",
      },
      {
        id: 4,
        name: "Macbook Pro M1 Pro",
        brand: "Apple",
        price: "$800",
        image: "/images/laptop11.jpg",
      },
      {
        id: 4,
        name: "MacBook Air 13 inch",
        brand: "Apple",
        price: "$800",
        image: "/images/laptop12.jpg",
      },
    ]);
  }, []);

  const handleBrandSelect = (brand) => {
    // Khi người dùng chọn hãng, chuyển hướng đến trang sản phẩm của hãng đó
    navigate(`/products/${brand}`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Laptops</h2>

      {/* Dropdown cho các hãng máy tính */}
      <div className="mb-4">
        <select
          className="form-select"
          onChange={(e) => handleBrandSelect(e.target.value)}
        >
          <option value="">Select a Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
