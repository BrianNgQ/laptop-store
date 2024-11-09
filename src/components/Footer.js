import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <footer className="bg-dark text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex align-items-center">
            <img src="logo.jpg" alt="Laptop Store" className="mr-3" />
            <span className="font-weight-bold">Laptop Store</span>
          </div>
          <p className="mt-3">Laptop Cần Thơ - Bảo hành 12 tháng</p>
        </div>
        <div className="col-md-3">
          <h5>Khách hàng</h5>
          <ul className="list-unstyled">
            <li>Gio hàng</li>
            <li>Sản phẩm yêu thích</li>
            <li>Theo dõi đơn hàng</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Thông kê</h5>
          <div>Lượng truy cập hôm nay: 5,683</div>
          <div>Tổng lượng truy cập: 1,531,090</div>
          <div>Đang truy cập: 20</div>
        </div>
        <div className="col-md-3">
          <h5>Hướng dẫn</h5>
          <ul className="list-unstyled">
            <li>Hướng dẫn đặt hàng</li>
            <li>Chính sách kiểm hàng</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách vận chuyển và giao hàng</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2023 Laptop Cần Thơ . All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
