import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom"; // Thêm Bootstrap JavaScript

// Dữ liệu mẫu (đầy đủ 12 sản phẩm của bạn)
const products = [
  {
    id: 1,
    name: "Dell Inspiron 15 5000",
    brand: "Dell",
    price: "$500",
    image: "/images/laptop1.jpg",
    description:
      "A powerful laptop with 15-inch screen, Intel Core i5, 8GB RAM, and 512GB SSD.",
    images: [
      "/images/laptop1.jpg",
      "/images/laptop1_2.jpg",
      "/images/laptop1_3.jpg",
    ],
  },
  {
    id: 2,
    name: "Dell Latitude 5410",
    brand: "Dell",
    price: "$500",
    image: "/images/laptop2.jpg",
    description:
      "Business laptop with a 14-inch display, Intel Core i5, and 8GB RAM.",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2_2.jpg",
      "/images/laptop2_3.jpg",
    ],
  },
  {
    id: 3,
    name: "Dell Inspiron 3530",
    brand: "Dell",
    price: "$500",
    image: "/images/laptop3.jpg",
    description:
      "Compact and efficient laptop with a 13-inch screen and Intel Core i3 processor.",
    images: [
      "/images/laptop3.jpg",
      "/images/laptop3_2.jpg",
      "/images/laptop3_3.jpg",
    ],
  },
  {
    id: 4,
    name: "HP Pavilion 15",
    brand: "HP",
    price: "$600",
    image: "/images/laptop4.jpg",
    description:
      "A slim and stylish laptop with 15-inch display, Intel i7 processor, and 16GB RAM.",
    images: [
      "/images/laptop4.jpg",
      "/images/laptop4_2.jpg",
      "/images/laptop4_3.jpg",
    ],
  },
  {
    id: 5,
    name: "HP Pavilion Aero 13",
    brand: "HP",
    price: "$600",
    image: "/images/laptop5.jpg",
    description:
      "Lightweight laptop with a 13-inch screen, Ryzen 5 processor, and 8GB RAM.",
    images: [
      "/images/laptop5.jpg",
      "/images/laptop5_2.jpg",
      "/images/laptop5_3.jpg",
    ],
  },
  {
    id: 6,
    name: "HP Gaming Victus 15",
    brand: "HP",
    price: "$600",
    image: "/images/laptop6.jpg",
    description:
      "Gaming laptop with a powerful GPU, 15-inch screen, and Intel Core i7 processor.",
    images: [
      "/images/laptop6.jpg",
      "/images/laptop6_2.jpg",
      "/images/laptop6_3.jpg",
    ],
  },
  {
    id: 7,
    name: "Lenovo LOQ 15IAX9",
    brand: "Lenovo",
    price: "$700",
    image: "/images/laptop7.jpg",
    description:
      "A gaming laptop with Intel i7, 16GB RAM, and 1TB SSD storage.",
    images: [
      "/images/laptop7.jpg",
      "/images/laptop7_2.jpg",
      "/images/laptop7_3.jpg",
    ],
  },
  {
    id: 8,
    name: "Lenovo Thinkbook 16 G6+",
    brand: "Lenovo",
    price: "$700",
    image: "/images/laptop8.jpg",
    description:
      "Professional laptop with a 16-inch screen, Intel Core i7, and 16GB RAM.",
    images: [
      "/images/laptop8.jpg",
      "/images/laptop8_2.jpg",
      "/images/laptop8_3.jpg",
    ],
  },
  {
    id: 9,
    name: "Lenovo Ideapad Slim 5",
    brand: "Lenovo",
    price: "$700",
    image: "/images/laptop9.jpg",
    description:
      "Sleek laptop with Intel i5 processor, 8GB RAM, and 512GB SSD.",
    images: [
      "/images/laptop9.jpg",
      "/images/laptop9_2.jpg",
      "/images/laptop9_3.jpg",
    ],
  },
  {
    id: 10,
    name: "Macbook Air M2 2022",
    brand: "Apple",
    price: "$800",
    image: "/images/laptop10.jpg",
    description:
      "Lightweight laptop with Apple's M2 chip, 8GB RAM, and 256GB SSD.",
    images: [
      "/images/laptop10.jpg",
      "/images/laptop10_2.jpg",
      "/images/laptop10_3.jpg",
    ],
  },
  {
    id: 11,
    name: "Macbook Pro M1 Pro",
    brand: "Apple",
    price: "$800",
    image: "/images/laptop11.jpg",
    description:
      "High-performance MacBook with M1 Pro chip, 16GB RAM, and 512GB SSD.",
    images: [
      "/images/laptop11.jpg",
      "/images/laptop11_2.jpg",
      "/images/laptop11_3.jpg",
    ],
  },
  {
    id: 12,
    name: "MacBook Air 13 inch",
    brand: "Apple",
    price: "$800",
    image: "/images/laptop12.jpg",
    description:
      "Premium 13-inch MacBook with Apple's M1 chip, 8GB RAM, and 256GB SSD.",
    images: [
      "/images/laptop12.jpg",
      "/images/laptop12_2.jpg",
      "/images/laptop12_3.jpg",
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = products.find((p) => p.id.toString() === id);
    setProduct(productData);
  }, [id]);

  if (!product || !product.images) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      {/* Nút Back */}
      <button onClick={() => navigate(-1)} className="btn btn-secondary mb-4">
        Back
      </button>

      <div className="row">
        <div className="col-md-6">
          {/* Carousel cho hình ảnh */}
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5">{product.name}</h1>
          <p className="text-success h4 font-weight-bold">{product.price}</p>
          <p className="text-muted">{product.description}</p>
          <button className="btn btn-primary btn-lg mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
