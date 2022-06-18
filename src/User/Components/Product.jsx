import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuickView from "./QuickView";
import {  useDispatch } from 'react-redux';
import { setProductId } from "../../Redux/Slice/ProductSlice";
import axios from "axios";
import { useSelector } from "react-redux";


const Product = ({ products }) => {
  const navigate = useNavigate();
  const [hoverState, setHoverState] = useState("");
  const [quickView, setQuickView] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.info)

  const addToCart = (productId)=>{
    //console.log(productId);
    if(user){
      const data  = {
        productId,
        userId : user._id    
      }
      axios.post("http://localhost:4000/addtocart",data)
    }else{
      console.log("User dose not exist");
    }
  }

  return (
    <Fragment>
      <div className="p-2 bg-slate-100">
        <div className="text-center font-bold tracking-widest">
          MOST POPULAR PRODUCTS
        </div>
        <div className=" flex flex-wrap justify-center ">
          {products &&
            products.map((product, key) => {
              return (
                <div
                  key={key}
                  onMouseEnter={() => setHoverState(product._id)}
                  onMouseLeave={() => setHoverState(false)}
                  className="card rounded-sm bg-base-100 shadow-xl cursor-pointer mx-2 my-4 "
                >
                  <figure>
                    <img
                    onClick={()=>{
                      dispatch(setProductId(product)) 
                      navigate('/productInfo')
                    }}
                      className="m-0 p-1 h-44 w-60"
                      src={product.productUrl}
                      alt="Shoes"
                    />
                    {hoverState === product._id && (
                      <label
                        onClick={() => setQuickView(product)}
                        htmlFor="my-modal-3"
                        className="absolute modal-button bottom-[148px] bg-slate-600 rounded-sm w-full text-center text-white font-bold p-2"
                      >
                        QUICK VIEW
                      </label>
                    )}
                  </figure>

                  <div className="flex flex-col bg-slate-200 justify-center items-center space-y-2 py-2 mt-4">
                    <div>
                      <p className="text-[10px] text-gray-500">
                        {product.productCateg}
                      </p>
                    </div>
                    <div className="text-[15px]">{product.ProductName}</div>
                    <div className="rating rating-xs">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <div className="font-bold">{product.productPrice}</div>
                    <div>
                      <button
                        className={
                          hoverState === product._id
                            ? "btn p-0 w-36 h-8 btn-xs space-x-1 rounded-sm"
                            : "btn p-0 btn-outline w-36 h-8 btn-xs space-x-1 rounded-sm"
                        }
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </span>
                        <span 
                        onClick={()=>addToCart(product._id)}
                        className="cursor-pointer"
                        >ADD TO CART</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* New Product */}

          {/* new Product end  */}
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal modal-middle ">
        <div className="modal-box relative p-0 modal-middle md:max-w-full rounded-sm">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <QuickView product={quickView} />
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
