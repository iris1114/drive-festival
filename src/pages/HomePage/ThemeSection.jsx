import { useState } from "react";
import styled from "styled-components";
import Carousel from "../../components/Carousel";
import Tabs from "../../components/Tabs";
import Title from "../../components/Title";
import { themeCarsMeta, themeTabsMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const ThemeSection = () => {
  const [index, setIndex] = useState(0);

  const changeIndex = (index) => {
    setIndex(index);
  };
  const meta = themeCarsMeta[index];

  return (
    <StyledThemeSection>
      <img
        className="draw draw-1"
        src={require("../../images/home/theme/draw1.png")}
        alt="draw1"
      />
      <img
        className="draw draw-2"
        src={require("../../images/home/theme/draw2.png")}
        alt="draw1"
      />

      <Title
        className="title"
        imgSrc="home/theme/title.png"
        title="四大主題活動"
      />
      <Tabs meta={themeTabsMeta} />
      <div className="slider">
        <img src={require("../../images/home/theme/tv.png")} alt="tv" />
        <div className="slider__content">
          <Carousel meta={themeCarsMeta} onActive={changeIndex} />
        </div>
        <div className="slider__text pc-none">
          <div className="slider__title">{meta.title}</div>
          <p className="slider__desc">{meta.desc}</p>
        </div>
      </div>
    </StyledThemeSection>
  );
};

const StyledThemeSection = styled.section`
  position: relative;
  max-width: 1400px;
  margin: auto;

  .draw {
    width: 30%;
    margin: 40px auto 40px;

    @media ${DEVICE.tablet} {
      width: 18%;
    }
  }

  .draw-1 {
    position: absolute;
    top: -5%;
    left: 5%;
    animation: draw1-m 2s linear infinite;

    @keyframes draw1-m {
      50% {
        top: -4%;
      }
    }

    @media ${DEVICE.tablet} {
      top: -2%;
      left: 10%;
      animation: draw1-pc 2s linear infinite;

      @keyframes draw1-pc {
        50% {
          left: 9%;
        }
      }
    }
  }
  .draw-2 {
    position: absolute;
    top: -5%;
    right: 5%;
    animation: draw2-m 2s linear infinite;

    @keyframes draw2-m {
      50% {
        top: -6%;
        right: 3%;
      }
    }

    @media ${DEVICE.tablet} {
      top: 5%;
      right: 10%;
      animation: draw2-pc 2s linear infinite;

      @keyframes draw2-pc {
        50% {
          top: 4%;
          right: 8%;
        }
      }
    }
  }

  .title {
    padding-top: 30%;

    @media ${DEVICE.tablet} {
      padding-top: 20%;
    }
  }

  .tab {
    background-color: ${COLOR.orange};
  }
  .slider {
    position: relative;
    margin-top: 30px;
    padding: 0px 5px;

    @media ${DEVICE.tablet} {
      width: 70%;
      margin: auto;
      margin-top: 2%;
    }

    &__content {
      width: 73%;
      position: absolute;
      top: 69%;
      left: 37%;
      transform: translate(-37%, -115%);

      @media ${DEVICE.mobileL} {
        top: 71%;
      }

      @media ${DEVICE.tablet} {
        top: 101%;
      }
    }

    &__text {
      width: 70%;
      text-align: center;
      color: ${COLOR.white};
      margin: auto;
      margin-top: 20px;
    }

    &__title {
      font-size: ${FONT.m};
      margin-bottom: 15px;
    }
  }
`;

export default ThemeSection;
