import React from "react";
import { useSelector } from "react-redux";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";

const Info = () => {
  const product = useSelector((state) => state.product.info);
  return (
    <div className="flex my-10 sm:mx-16 mx-2">
      <div className="flex flex-col sm:flex-row w-screen">
        <div className="sm:m-2 sm:space-y-1 md:max-w-md sm:max-w-sm">
          <figure>
            <img
              className="shadow-lg sm:p-2"
              src={product.productUrl}
              alt=""
            />
          </figure>
          <figure>
            <img
              className="w-36 h-36 border-2 border-slate-400 p-2 cursor-pointer"
              src={product.productUrl}
              alt="smallview"
            />
          </figure>
        </div>
        <div className="my-3 sm:w-4/6  sm:m-2 sm:max-w-md sm:mt-10 sm:flex sm:flex-col">
          <p className="font-bold text-3xl">{product.ProductName}</p>
          <div className="rating rating-sm">
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
          <p className="text-left text-slate-500">{product.productDesc}</p>
          <p className="text-sm m-2">
            <span className="text-slate-500 font- font-light">
              AVAILABILITY:
            </span>
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
          <div className="flex flex-row space-x-1 justify-center">
            <span className="rounded-3xl border-2 border-slate-600 p-2 hover:bg-green-400 cursor-pointer">
              <GrFacebook style={{}} />
            </span>
            <span className="rounded-3xl border-2 border-slate-600 p-2 hover:bg-green-400 cursor-pointer">
              <FaTwitterSquare />
            </span>
            <span className="rounded-3xl border-2 border-slate-600 p-2 hover:bg-green-400 cursor-pointer">
              <GrInstagram />
            </span>
            <span className="rounded-3xl border-2 border-slate-600 p-2 hover:bg-green-400 cursor-pointer">
              <BsLinkedin />
            </span>
            <span className="rounded-3xl border-2 border-slate-600 p-2 hover:bg-green-400 cursor-pointer">
              <HiOutlineMail />
            </span>
          </div>
        </div>
        <div className="hidden lg:flex md:flex-col m-4 ">
          <span className="flex flex-row space-x-14">
            <TbTruckDelivery style={{ fontSize: "55px", color: "green" }} />
           <p className="font-bold text-gray-500">FREE <br/>SHIPPING </p>
          </span>
          <div className="divider"></div>
          <span className="flex flex-row space-x-14">
            <BiDollarCircle style={{ fontSize: "55px", color: "green" }} />
            <p className="font-bold text-gray-500">100% MONEY<br/> BACK GUARANTEE</p>          
           </span>
           <div className="divider"></div>
          <span className="flex flex-row space-x-14">
            <MdSupportAgent style={{ fontSize: "55px", color: "green" }} />
           <p className="font-bold text-gray-500">ONLINE <br/> SUPPORT 24/7</p>
          </span>
          <div className="bg-slate-300 h-64 mt-16">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
