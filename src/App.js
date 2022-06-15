import "./App.css";
import Home from "./User/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Admin/Pages/AddProduct";
import ProductInfo from "./User/Pages/ProductInfo";
import LoginPage from "./User/Pages/LoginPage";
import SignupPage from "./User/Pages/SignupPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/admin" element={<AddProduct />}></Route>
          <Route path="/productInfo" element={<ProductInfo />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
