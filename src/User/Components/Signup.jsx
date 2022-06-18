import axios from "axios";
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    //console.log(name,email,password);
    const data = {
      name,
      email,
      password,
    };
    axios
     .post(`${process.env.REACT_APP_DEPLOY_API}/signup`, data)
     // .post(`${process.env.REACT_APP_DEV_API}/signup`,data) 
     .then((response) => {
        console.log("server response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-screen flex h-screen justify-center items-center">
      <div className="flex flex-col">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary rounded-sm mt-6"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Signup;
