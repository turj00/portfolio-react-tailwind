import clientOne from "../images/testimonials/clientOne.svg";
import clientTwo from "../images/testimonials/clientTwo.svg";
import clientThree from "../images/testimonials/clientThree.svg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "../index.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <div
        name="Testimonials"
        className="w-full text-center bg-gradient-to-b from-gray-800 to-black text-white py-20"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-2">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              Client Reviews
            </p>
          </div>
          <p className="text-xl mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            adipisci eaque deserunt similique est sapiente aliquam voluptatibus!
            Fuga repellendus illum odit quibusdam provident quas cum
            exercitationem modi vel, porro quia deleniti ea atque fugiat alias
            itaque animi non voluptas ducimus dolorem sint? Unde, vel. Quis sed
            ab quos accusantium omnis.
          </p>
          <br />
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },

            250: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img src={clientOne} />
            <div className="swiper_text shadow-xl border border-sky-500">
              <p>
                "<i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sunt itaque inventore in non dolorum accusantium.lorem ipsum text only"</i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={clientTwo} />
            <div className="swiper_text shadow-xl border border-sky-500 " >
              <p>
                <i>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sunt itaque inventore in non dolorum accusantium. Its only demo text"</i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={clientThree} />
            <div className="swiper_text shadow-xl border border-sky-500">
              <p>
                <i>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sunt itaque inventore in non dolorum accusantium.demo text only."</i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={clientOne} />
            <div className="swiper_text shadow-xl border border-sky-500">
              <p>
                <i>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sunt itaque inventore in non dolorum accusantium Its only demo text."</i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={clientTwo} />
            <div className="swiper_text shadow-xl border border-sky-500">
              <p>
                <i>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sunt itaque inventore in non dolorum accusantium Its only demo text."</i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={clientThree} />
            <div className="swiper_text shadow-xl border border-sky-500">
              <p>
                <i>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sunt itaque inventore in non dolorum accusantium Its only demo text."</i>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
