import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container my-5">
      {/* Pills navs */}
      <ul className="nav nav-pills nav-justified mb-4" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "login" ? "active" : ""}`}
            id="tab-login"
            onClick={() => handleTabChange("login")}
            role="tab"
            aria-controls="pills-login"
            aria-selected={activeTab === "login"}
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "register" ? "active" : ""}`}
            id="tab-register"
            onClick={() => handleTabChange("register")}
            role="tab"
            aria-controls="pills-register"
            aria-selected={activeTab === "register"}
          >
            Register
          </a>
        </li>
      </ul>

      {/* Pills content */}
      <div className="tab-content">
        {/* Login Tab */}
        {activeTab === "login" && (
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div className="text-center mb-4">
                <p>Sign in with:</p>
                {/* Social login buttons */}
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>

              <p className="text-center">or:</p>

              {/* Login Form Inputs */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="loginEmail"
                  className="form-control w-100"
                />
                <label className="form-label" htmlFor="loginEmail">
                  Email or username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control w-100"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 w-100"
              >
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member?{" "}
                  <a href="#!" onClick={() => handleTabChange("register")}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Register Tab */}
        {activeTab === "register" && (
          <div
            className="tab-pane fade show active"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form>
              <div className="text-center mb-4">
                <p>Sign up with:</p>
                {/* Social login buttons */}
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>

              <p className="text-center">or:</p>

              {/* Register Form Inputs */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerName"
                  className="form-control w-100"
                />
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control w-100"
                />
                <label className="form-label" htmlFor="registerUsername">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control w-100"
                />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control w-100"
                />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control w-100"
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  checked
                />
                <label className="form-check-label" htmlFor="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-3 w-100"
              >
                Sign up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
