import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductSlice";
import userReducer from "./Slice/userSlice";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
  product :productReducer,
  user : userReducer,
});

export const store = configureStore({
  reducer : mainReducer
});
