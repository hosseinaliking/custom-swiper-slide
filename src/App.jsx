import { useRef } from "react";
import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// import "swiper/css/pagination";

//* Images *//
import Banner from "./assets/Banner.png";
import { Navigation, Autoplay, Pagination } from "swiper";

//* Icons *//
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  const swiperRefNext = useRef();
  const swiperRefPrev = useRef();

  return (
    <div className="App">
      <div className="container-swiper">
        <div className="none-slide">
          <p>hello world</p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          className="slide"
          navigation={{
            prevEl: swiperRefPrev?.current,
            nextEl: swiperRefNext?.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperRefPrev.current;
            swiper.params.navigation.nextEl = swiperRefNext.current;
          }}
          pagination={{
            clickable: true,
          }}
          loop="true"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={Banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner} alt="" />
          </SwiperSlide>
          <div className="button-container">
            <button ref={swiperRefNext} className="next btn">
              <IoIosArrowBack />
            </button>
            <button ref={swiperRefPrev} className="prev btn">
              <IoIosArrowForward />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
