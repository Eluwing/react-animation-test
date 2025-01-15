import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/swiper-bundle.css";

import "./slider.css";
import { sliderItemData } from "./constants";
import { useEffect, useRef, useState } from "react";

const SliderTest = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="text-center h-[500px] text-white bg-black w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-screen"
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        direction="vertical" // 세로 슬라이더
        slidesPerView={1}
        loop={true}
      >
        {/* Custom Navigation Buttons */}
        {sliderItemData.map((item,index)=>(
          <SwiperSlide className="" key={`${item.name}-${index}`}>
            <div className="w-screen h-screen bg-cover z-0" style={{ backgroundImage:`url('${item.src}')` }}>
            {item.name}
            </div>
            </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination swiperRef={swiperRef} />
    </div>
  );
};

export default SliderTest;

export const CustomPagination = ({ swiperRef }: { swiperRef: React.RefObject<SwiperType | null> }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current;

    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiperRef]);

  const bullets = Array.from({ length: 3 }, (_, index) => (
    <button
      key={index}
      className={`w-4 h-4 rounded-full mx-1 ${
        activeIndex === index ? "bg-blue-500" : "bg-gray-300"
      }`}
      onClick={() => swiperRef.current?.slideTo(index)}
    />
  ));
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-4 flex flex-col gap-2 bg-black z-10">
      <div>
        {bullets}
      </div>
      <button
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        ▲
      </button>
      <button
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
        onClick={() => swiperRef.current?.slideNext()}
      >
        ▼
      </button>
    </div>
  );
};