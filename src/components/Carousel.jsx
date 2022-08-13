import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper";
import { useEffect, useRef } from "react";

const Carousel = ({ meta, onActive, tabId }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (tabId !== null) {
      swiperRef.current.swiper.slideTo(tabId);
    }
  }, [swiperRef, tabId]);

  return (
    <StyledCarousel>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={(swiperCore) => {
          const { activeIndex } = swiperCore;
          onActive && onActive(activeIndex);
        }}
        className="mySwiper"
      >
        {meta.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={`/theme/${element.id}`} target={element.target}>
                <img
                  src={require(`../images/home/theme/${element.img}`)}
                  alt="banner"
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .swiper-pagination-bullet {
    border: 1px solid #fff;
    opacity: 1;
    background: transparent;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }

  element.style {
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }

  .text {
    position: absolute;
    top: 80%;
    z-index: 100;
  }
`;

export default Carousel;
