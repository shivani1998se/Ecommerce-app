 
import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ cartAllProduct }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary d-flex justify-content-between px-5">
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3 ">
            <NavLink
              to="/"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              HOME
            </NavLink>
            <li className="list-unstyled text-light p-0 pointer"> <NavLink
              to="/about"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              ABOUT
            </NavLink></li>
            <li className="list-unstyled text-light p-0 pointer"> <NavLink
              to="/contact"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              Contact
            </NavLink></li>
          </ul>
          <ul className="m-0 p-0 py-3 position-relative">
            <NavLink
              to="/cart"
              className="list-unstyled text-light p-0 pointer"
            >
              <i className="fa-solid fa-cart-shopping fs-3"></i>
            </NavLink>
            <span
              className="text-decoration-none count rounded-pill text-dark position-absolute top-0 roght"
              style={{ backgroundColor: "orange", right:'-45%' }}
            >
              {cartAllProduct?.length}
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;