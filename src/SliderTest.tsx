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
        {sliderItemData.map((item, index) => (
          <SwiperSlide className="" key={`${item.name}-${index}`}>
            <div
              className="w-screen h-screen bg-cover z-0"
              style={{ backgroundImage: `url('${item.src}')` }}
            >
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

export const CustomPagination = ({
  swiperRef,
}: {
  swiperRef: React.RefObject<SwiperType | null>;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const swiper = swiperRef.current;

    if (swiper) {
      const handleSlideChange = () => setActiveIndex(swiper.activeIndex);
      swiper.on("slideChange", handleSlideChange);

      // Cleanup listener on component unmount
      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperRef]);

  const bullets = Array.from({ length: 3 }, (_, index) => (
    <button
      key={index}
      className={`bg-gray-600 w-3 h-3 rounded-full relative ${
        activeIndex === index ? "bg-[#d9d9d9]" : "bg-gray-300"
      }`}
      onClick={() => swiperRef.current?.slideTo(index)}
    />
  ));
  const handleNavigation = (direction: "prev" | "next") => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const { activeIndex, slides } = swiper;
    const isFirstSlide = activeIndex === 0;
    const isLastSlide = activeIndex === slides.length - 1;

    if (direction === "prev") {
      swiper.slideTo(isFirstSlide ? slides.length - 1 : activeIndex - 1);
    } else if (direction === "next") {
      swiper.slideTo(isLastSlide ? 0 : activeIndex + 1);
    }
  };
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-4 flex  gap-2 bg-black z-10">
      <div className="grid gap-1">{bullets}</div>
      <div className="grid">
      <button
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-transform duration-200"
        onClick={() => handleNavigation("prev")}
        aria-label="Previous Slide"
      >
        ▲
      </button>
      <button
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-transform duration-200"
        onClick={() => handleNavigation("next")}
        aria-label="Next Slide"
      >
        ▼
      </button>

      </div>

    </div>
  );
};
