import React from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import Product from '../Components/Product'
import Ribbon from '../Components/Ribbon'

const Home = () => {
  return (
    <div>
        <Header/>
        <Ribbon/>
        <Banner/>
        <Product/>
    </div>
  )
}

export default Home