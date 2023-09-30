import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image1 from '../images/carousel_1.jpg';
import Image2 from '../images/carousel_2.jpg';
import Image3 from '../images/carousel_3.jpg';
import Image4 from '../images/carousel_4.jpg';
import Image5 from '../images/carousel_5.jpg';
import video from '../images/carousel_vid.mp4';
import video2 from '../images/video.mp4';
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={Image1} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted" autoPlay>
            <source src={video2} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
