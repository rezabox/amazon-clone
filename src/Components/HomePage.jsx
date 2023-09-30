import React from 'react'
import Carousel from './Carousel';

const HomePage = ()=> {
  return (
    <div className='bg-amazonclone-background'>
        <div className='min-w-[1000px] max-w-[1500px] m-auto bg-purple-500'>
              Testing
              <Carousel/>
              <div className='grid grid-cols-3 xl:grid-cols-4'>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
              </div>
        </div>
    </div>
  )
}

export default HomePage;
