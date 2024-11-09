import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartPage = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price, 0)
      .toLocaleString();
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Giỏ hàng của bạn</h2>

      {/* Kiểm tra nếu giỏ hàng trống */}
      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          <h5>Giỏ hàng trống</h5>
          <p>Hãy thêm sản phẩm vào giỏ hàng để tiến hành mua sắm.</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="list-group">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="list-group-item d-flex align-items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-thumbnail mr-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <p className="text-muted">
                      Giá: {item.price.toLocaleString()} VND
                    </p>
                  </div>
                  <button className="btn btn-outline-danger ml-3">Xóa</button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5 className="card-title">Tổng cộng</h5>
              <p className="card-text">Số lượng sản phẩm: {cartItems.length}</p>
              <h4 className="text-danger">
                Tổng tiền: {calculateTotalPrice()} VND
              </h4>
              <button className="btn btn-primary btn-block mt-3">
                Tiến hành thanh toán
              </button>
              <button className="btn btn-outline-secondary btn-block mt-2">
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
