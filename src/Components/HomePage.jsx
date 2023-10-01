import React from 'react'
import Carousel from './Carousel';
import HomePageCard from './HomePageCard';
import Image1 from '../images/home_grid_1.jpg';
import Image2 from '../images/home_grid_2.jpg';
import Image3 from '../images/home_grid_3.jpg';
import Image4 from '../images/home_grid_4.jpg';
const HomePage = ()=> {
  return (
    <div className='bg-amazonclone-background'>
        <div className='sm:min-w-[1000px] sm:max-w-[1500px] m-auto bg-purple-500 max-w-[500px]'>
              Testing
              <Carousel/>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  <HomePageCard title={"we have a surprise for you"}
                    img={Image1}
                    link={"See terms and conditions"}
                  />
                  <HomePageCard
                   title={"Watch The Rings of Power"}
                   img={Image2}
                   link={"Start streaming now"}
                   />
                  <HomePageCard
                   title={"Unlimited Streaming"}
                   img={Image3}
                   link={"Find out more"}
                   />
                  <HomePageCard
                  title={"More titles to explore"}
                  img={Image4}
                  link={"Browse Kindle Unlimited"}
                  />
              </div>
        </div>
    </div>
  )
}

export default HomePage;
