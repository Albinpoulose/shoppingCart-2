import axios from "axios";
import React,{useState} from "react";
import { useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import { setUser } from "../../Redux/Slice/userSlice";


const Login = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [email,setEmail] = useState();
    const [ password,setPassword] = useState();

const handleLogin = ()=>{
  const data = {email,password}
  axios.post("http://localhost:4000/login",data).then((response)=>{
    // console.log(response);
    if(response.data._id){
    dispatch(setUser(response.data))
      navigate("/",response)
    }
  })
}

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col text-lg font-bold">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">EMAIL</span>
          </label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">PASSWORD</span>
          </label>
          <input
          onChange={(e)=>setPassword(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button 
        onClick={handleLogin}
        className="btn btn-primary rounded-sm mt-6">LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
