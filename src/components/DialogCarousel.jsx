import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const DialogCarousel = ({ meta }) => {
  console.log({ meta });
  return (
    <StyledDialogCarousel>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {meta.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={require(`../images/${element}`)} alt="banner" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledDialogCarousel>
  );
};

const StyledDialogCarousel = styled.div`
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

export default DialogCarousel;
