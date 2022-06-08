import React, { useState } from "react";

const Product = () => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div className="p-2">
      <div className="text-center font-bold tracking-widest">
        MOST POPULAR PRODUCTS
      </div>
      <div className=" flex justify-around">
        <div
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
          className="card w-44 rounded-sm bg-base-100 shadow-xl cursor-pointer "
        >
          <figure>
            <img
              className="m-0 p-0 h-44"
              src="https://m.media-amazon.com/images/I/81Y+lDwCtvL._SX569_.jpg"
              alt="Shoes"
            />
            {hoverState && (
                <div className="absolute bottom-[148px] bg-slate-600 rounded-sm w-full text-center text-white font-bold p-2">
                QUICK VIEW
              </div>
            )}
          </figure>

          <div className="flex flex-col bg-slate-200 justify-center items-center space-y-2 py-2 mt-4">
            <div>
              <p className="text-[10px] text-gray-500">BIKES</p>
            </div>
            <div className="text-[15px]">Product short name</div>
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
            <div className="font-bold">$55.00</div>
            <div>
              <button
                className={
                  hoverState
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
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        </div>
        
     {/* New Product */}
     
     {/* new Product end  */}

      </div>
    </div>
  );
};

export default Product;
