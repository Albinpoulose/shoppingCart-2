import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const naviagte = useNavigate();
  const user = useSelector((state) => state.user.info);
  //console.log(user);
  const [drawer, setDrawer] = useState(false);
  return (
    <Fragment>
      <div className="flex  flex-row justify-between p-6 items-center sticky top-0 z-50 bg-white shadow-lg">
        <div className="Logo flex flex-row space-x-3 ml-3 md:ml-14">
          <div
            onClick={() => setDrawer((preState) => !preState)}
            className="cursor-pointer flex items-center lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="text-3xl ">PORTO</div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-16 font-bold text-sm">
            <li onClick={() => naviagte("/")} className="cursor-pointer">
              HOME
            </li>
            <li>
              <div className="indicator">
                <span className="indicator-item badge badge-success text-white -m-2 w-10 h-4 ">
                  New
                </span>
                <div className="grid place-items-center">PRODUCTS</div>
              </div>
            </li>
            <li>
              <div className="indicator">
                <span className="indicator-item badge badge-error text-white -m-2 w-10 h-4 ">
                  Hot
                </span>
                <div className="grid place-items-center">ACCESSORIES</div>
              </div>
            </li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className="flex flex-row space-x-3 mr-3 lg:space-x-6 lg:mr-8 ">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </label>
            <div
              tabIndex="0"
              className="dropdown-content card rounded-sm card-compact w-64 p-2 shadow bg-primary text-primary-content"
            >
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered text-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">0</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
            </label>
            <div
              tabIndex="0"
              className="dropdown-content card rounded-sm	 card-compact w-64 bg-slate-50"
            >
              <div className="card-body">
                {user !== "" ? (
                  <div>
                    <h3 className="card-title">{user.name}</h3>
                    <ul className="flex flex-col">
                      <li>View Profile</li>
                      <li>View Cart</li>
                    </ul>
                  </div>
                ) : (
                  <div className="flex w-full flex-col">
                    <p
                      onClick={() => naviagte("/login")}
                      className="flex justify-end font-bold cursor-pointer"
                    >
                      View Cart
                    </p>
                    <div className="divider m-0"></div>
                    <p className="text-slate-400">
                      You have no items in your shopping cart.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer">
            {/* <span className="flex">            
              </span>
              <span className="flex items-center">{user.name}</span> */}

            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="cursor-pointer flex flex-row  rounded-sm shadow-lg"
              >
                <BiUser style={{ fontSize: "32px" }} />
                <span className="flex items-end mx-2">{user.name}</span>
              </label>

              <div
                tabIndex="0"
                className="dropdown-content card rounded-sm mt-3	 card-compact w-64 shadow bg-slate-50 "
              >
                <div className="card-body">
                  {user !== "" ? (
                    <div>
                      <h3 className="card-title">{user.name}</h3>
                      <ul className="flex flex-col">
                        <li>View Profile</li>
                        <li>View Cart</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="flex w-full flex-col">
                      <p
                        onClick={() => naviagte("/login")}
                        className="flex justify-end font-bold cursor-pointer"
                      >
                        LOGIN
                      </p>
                      <div className="divider m-0"></div>
                      <p className="text-slate-400">
                        {" "}
                        Login to see your account details{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {drawer && (
        <div className="bg-red-400 w-full h-fit absolute dropdown">
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>aboutus</li>
            <li>contactus</li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
