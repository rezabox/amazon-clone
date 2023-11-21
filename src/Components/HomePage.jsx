import React, { useState } from 'react'
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import Product from './product/product';

const HomePage = ()=> {
  
  return (
    <> 
    <div className='bg-amazonclone-background h-[100vh]'>
        <div className='sm:min-w-[1000px] sm:max-w-[1500px] m-auto'>
              <Carousel/>
              <div className='mt-[-150px]'>
              <Product/>
              </div>
          </div>
    </div>
    </>
  )
}

export default HomePage;
