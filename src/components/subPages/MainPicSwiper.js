import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import "./mainPicSwiper.scss";

import GranhandswiperPic from "../../assets/DB/swiperPics";

function MainPicSwiper() {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mainPics"
      >
        {GranhandswiperPic.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={path + item.imgURL} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MainPicSwiper;
