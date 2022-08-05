import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <img
        className="pc-none"
        src={require("../../images/home/hero/m_bg.jpg")}
        alt="bg"
      />
      <img
        className="m-none"
        src={require("../../images/home/hero/pc_bg.jpg")}
        alt="bg"
      />
      <StyledHeroWrap className="hero">
        <img
          className="hero__main pc-none"
          src={require("../../images/home/hero/m_hero.png")}
          alt="hero"
        />
        <img
          className="hero__main m-none"
          src={require("../../images/home/hero/pc_hero.png")}
          alt="hero"
        />

        <img
          className="hero__car hero__car-1"
          src={require("../../images/home/hero/car1.png")}
          alt="car"
        />
        <img
          className="hero__car hero__car-2"
          src={require("../../images/home/hero/car2.png")}
          alt="car"
        />
        <img
          className="hero__car hero__car-3"
          src={require("../../images/home/hero/car3.png")}
          alt="car"
        />
      </StyledHeroWrap>
      <StyledTitleWrap className="title">
        <img
          className="pc-none title__main"
          src={require("../../images/home/hero/m_title.png")}
          alt="title__main"
        />
        <img
          className="pc-none title__main-bg"
          src={require("../../images/home/hero/m_title_bg.png")}
          alt="title__main-bg"
        />

        <div className="title__text">
          <img
            className="pc-none title__sub1"
            src={require("../../images/home/hero/m_subtitle1.png")}
            alt="title__sub1"
          />
          <img
            className="m-none title__sub1"
            src={require("../../images/home/hero/pc_subtitle1.png")}
            alt="title__sub1"
          />
          <p className="title__desc">
            台灣首度主題汽車派對饗宴，以汽車連結生活體驗集結「競速改裝」、「古董經典」、「優雅旅行」三大展區，超過
            150 台車主同場炫車，搭配音樂、特色活動、美食、特色市集。
          </p>
          <img
            className="title__sub2"
            src={require("../../images/home/hero/m_subtitle2.png")}
            alt="title__sub2"
          />
        </div>

        <img
          className="pc-none title__sub-draw"
          src={require("../../images/home/hero/m_subtitle_draw.png")}
          alt="title__sub-draw"
        />

        <img
          className="m-none title__sub-draw"
          src={require("../../images/home/hero/pc_subtitle_draw.png")}
          alt="title__sub-draw"
        />
      </StyledTitleWrap>
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.section`
  position: relative;
`;

const StyledHeroWrap = styled.div`
  padding: 0px 15px;
  .hero {
    &__main {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      padding: 0px 15px;

      @media ${DEVICE.tablet} {
        padding: 0px 80px;
      }
    }

    &__car {
      width: 33%;
      position: absolute;

      @media ${DEVICE.tablet} {
        width: 17%;
      }

      &-1 {
        top: 20%;
        left: 6%;

        @media ${DEVICE.tablet} {
          top: 30%;
          left: 24%;
        }
      }

      &-2 {
        top: 25%;
        left: 30%;

        @media ${DEVICE.tablet} {
          top: 33%;
          left: 46%;
        }
      }

      &-3 {
        top: 23%;
        right: 6.5%;

        @media ${DEVICE.tablet} {
          top: 30%;
          right: 6%;
        }
      }
    }
  }
`;

const StyledTitleWrap = styled.div`
  .title {
    &__main {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      width: 90%;

      &-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;

        @media ${DEVICE.tablet} {
          top: 55%;
          width: 70%;
        }
      }
    }

    &__text {
      position: absolute;
      top: 72%;
      left: 50%;
      transform: translate(-50%, -72%);
      width: 90%;
      text-align: center;

      @media ${DEVICE.tablet} {
        width: 50%;
        top: 68%;
      }
    }

    &__sub1 {
      margin-bottom: 30px;
    }

    &__sub2 {
      @media ${DEVICE.tablet} {
        width: 50%;
      }
    }

    &__desc {
      color: ${COLOR.white};
      line-height: ${FONT.l};
      text-align: center;
      margin-bottom: 30px;
    }

    &__sub-draw {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -90%);
      padding: 0px 40px;

      @media ${DEVICE.tablet} {
        top: 82%;
      }
    }
  }
`;

export default HeroSection;
