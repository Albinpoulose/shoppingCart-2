import React from "react";

const QuickView = ({ product }) => {
  // if(!open) return null

  return (
    <div className="flex p-2 flex-col justify-center items-center sm:flex-row ">
      <div className="sm:w-1/2">
        <figure>
          <img src={product.productUrl} alt="" />
        </figure>
      </div>
      <div className="p-2  flex flex-col bg-slate-100 rounded-sm sm:w-1/2 sm:p-3">
        <h1 className="font-bold text-4xl">{product.ProductName}</h1>
        <div className="rating rating-xs pt-1">
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
        <div className="divider"></div>
        <p className="text-slate-500 text-justify mx-2">
          {product.productDesc}
        </p>
        <span className="font-bold text-xl m-2">{product.productPrice}</span>
        <p className="text-sm m-2">
          <span className="text-slate-500 font- font-light">AVAILABILITY:</span>
          <span className="font-bold"> MANY IN STOCK</span>
        </p>
        <div className="divider"></div>
        <div className="flex w-full justify-center">
          <button className="btn p-0 btn-outline w-36 h-8 btn-xs space-x-1 rounded-sm">
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
            <span>ADD TO CART</span>
          </button>
        </div>
        <div className="divider"></div>
        <div>Soaicl media</div>
      </div>
    </div>
  );
};

export default QuickView;
