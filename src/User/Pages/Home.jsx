import React, { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Product from "../Components/Product";
import Ribbon from "../Components/Ribbon";
import Footer from "../Components/Footer";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DEPLOY_API}/allProduct`)
//       .get(`${process.env.REACT_APP_DEV_API}/allProduct`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Ribbon />
      <Banner />
      <Product products={products} />
      <Footer/>
    </div>
  );
};

export default Home;
