/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import productList from "./data.js";
import productList from './data.jsx';

import toast, { Toaster } from "react-hot-toast";

const Home = ({ setProductId }) => {
  const handleAddToCart = (id) => {
    setProductId(id);
    toast.success("Product Added Successfully !");
  };

  return (
    <div className="container-fluid px-5">
      <div className="row gap-5 justify-content-center">
        <Toaster />
        {/* // eslint-disable-next-line no-unused-vars, no-unused-vars */}
        {productList?.map((product, index) => {
          // console.log("product",product);
          return (
            <div className="col-2 border rounded mt-2" key={product?.id}>
              <div className="d-flex justify-content-center p-2">
                <img src={product?.img} alt="" className="product-size" />
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between px-2">
                  <p className="m-0 font-bold font-size-12">{product?.brand}</p>
                  <p className="m-0 font-bold font-size-12">{product?.model}</p>
                </div>
                <div className=" px-2">
                  <p className="m-0">
                    <span className="font-bold">₹</span> {product?.price}
                  </p>
                  <p className="m-0 text-hiding">{product?.space}</p>
                </div>
                <div className="px-2 mt-1">
                  <button
                    className="btn btn-primary p-1 w-100"
                    onClick={() => handleAddToCart(product?.id)}
                  >
                    AddToCart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;