import React from 'react'
import Carousel from './Carousel';
import HomePageCard from './HomePageCard';
import Image1 from '../images/home_grid_1.jpg';
import Image2 from '../images/home_grid_2.jpg';
import Image3 from '../images/home_grid_3.jpg';
import Image4 from '../images/home_grid_4.jpg';
import Image5 from '../images/home_grid_5.jpg';
import Image6 from '../images/home_grid_6.jpg';
import Image7 from '../images/home_grid_7.jpg';
import Image8 from '../images/home_grid_8.jpg';
import Banner from '../images/banner_image.jpg';

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
                  <HomePageCard
                  title={"Shop Pet Supplies"}
                  img={Image5}
                  link={"See more"}
                  />
                  <HomePageCard
                   title={"Spring Sale"}
                   img={Image6}
                   link={"See the deals"}
                 />
                 <HomePageCard
                  title={"Echo Buds"}
                  img={Image7}
                  link={"See more"}
                />
                <HomePageCard
                  title={"Echo Buds"}
                  img={Image8}
                  link={"Learn more"}
                />
              <div className="m-3">
               <img
                className="xl:hidden"
                src={Banner}
                alt="Banner 2"
                />
                </div>
              </div>
        </div>
    </div>
  )
}

export default HomePage;
