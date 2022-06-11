import React, { Fragment, useState } from "react";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <Fragment>
      <div className="flex  flex-row justify-between p-4 items-center ">
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
            <li>HOME</li>
            <li>
              <div className="indicator">
                <span className="indicator-item badge badge-success text-white -m-2 w-10 h-4 ">New</span>
                <div className="grid place-items-center">
                  PRODUCTS
                </div>
              </div>
            </li>
            <li>
            <div className="indicator">
                <span className="indicator-item badge badge-error text-white -m-2 w-10 h-4 ">Hot</span>
                <div className="grid place-items-center">
                ACCESSORIES
                </div>
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
              className="dropdown-content card rounded-sm	 card-compact w-64 p-2 shadow bg-primary text-primary-content"
            >
              <div className="card-body">
                <h3 className="card-title">Cart</h3>
                <p>you can use any element as a dropdown.</p>
              </div>
            </div>
          </div>
          <div>
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
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
