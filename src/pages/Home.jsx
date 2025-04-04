import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductList from '../components/ProductList'
import { useState } from "react";


const Home = ({ searchQuery }) => {

 
  
  return (
    <div>

<h2>Products</h2>
      

      <HeroSection/>
      <ProductList searchQuery={searchQuery}/>
    </div>
  )
}

export default Home
