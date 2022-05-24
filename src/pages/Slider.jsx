import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import IntroductionI from "../components/IntroductionI";
import IntroductionII from "../components/IntroductionII";
import IntroductionIII from "../components/IntroductionIII";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <IntroductionI />
        </SwiperSlide>
        <SwiperSlide>
          <IntroductionII />
        </SwiperSlide>
        <SwiperSlide>
          <IntroductionIII />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
