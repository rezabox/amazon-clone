import React, { useState } from 'react'
import Carousel from './Carousel';

import Image1 from '../AmazonImage/YWU3MmFiMzct-NTc1NzJhMDEt-w379._SY304_CB616413430_.jpg';
import Image2 from '../AmazonImage/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202.jpg';
import Image4 from '../images/home_grid_4.jpg';
import Image5 from '../images/home_grid_5.jpg';
import Image6 from '../images/home_grid_6.jpg';
import Image7 from '../images/home_grid_7.jpg';
import Image8 from '../images/home_grid_8.jpg';
import Banner from '../images/banner_image.jpg';
import {TfiArrowCircleUp} from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const HomePage = ()=> {
  
  return (
    <> 
    <div className='bg-amazonclone-background'>
        <div className='sm:min-w-[1000px] sm:max-w-[1500px] m-auto'>
              <Carousel/>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 space-x-4'>
                  <section className='mt-[-60%] w-[90%]'>
                     <div className='bg-white p-5 space-y-4'>
                        <h2>Discover Echo devices</h2>
                        <div className='img'>
                          <img src={Image1} alt="img 1" />
                        </div>
                        <div className='card-ui-footer'>
                          <Link to={'/moreItem'}>Learn more</Link>
                        </div>
                     </div>
                  </section>
                  <section className='mt-[-60%] w-[90%]'>
                     <div className='bg-white p-5 space-y-4'>
                        <h2>Discover Echo devices</h2>
                        <div className='img'>
                          <img src={Image2} alt="img 1" />
                        </div>
                        <div className='card-ui-footer'>
                          <Link to={'/moreItem'}>Learn more</Link>
                        </div>
                     </div>
                  </section>
                  <section className='mt-[-60%] w-[90%]'>
                     <div className='bg-white p-5 space-y-4'>
                        <h2>Discover Echo devices</h2>
                        <div className='img'>
                          {/* <img src={Image3} alt="img 1" /> */}
                        </div>
                        <div className='card-ui-footer'>
                          <Link to={'/moreItem'}>Learn more</Link>
                        </div>
                     </div>
                  </section>
                  <section className='mt-[-60%] w-[90%]'>
                     <div className='bg-white p-5 space-y-4'>
                        <h2>Discover Echo devices</h2>
                        <div className='img'>
                          <img src={Image1} alt="img 1" />
                        </div>
                        <div className='card-ui-footer'>
                          <Link to={'/moreItem'}>Learn more</Link>
                        </div>
                     </div>
                  </section>
                </div>
          </div>
    </div>
    </>
  )
}

export default HomePage;
