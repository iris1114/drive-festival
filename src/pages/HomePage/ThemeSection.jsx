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
    width: 35%;
    margin: 40px auto 40px;

    @media ${DEVICE.tablet} {
      width: 20%;
    }
  }

  .draw-1 {
    position: absolute;
    top: -18%;
    left: 5%;

    @media ${DEVICE.tablet} {
      top: -2%;
      left: 10%;
    }
  }
  .draw-2 {
    position: absolute;
    top: -15%;
    right: 5%;

    @media ${DEVICE.tablet} {
      top: 0%;
      right: 10%;
    }
  }

  .title {
    padding-top: 15%;
  }

  .slider {
    position: relative;
    margin-top: 50px;
    padding: 0px 5px;

    @media ${DEVICE.tablet} {
      width: 70%;
      margin: auto;
    }

    &__content {
      width: 73%;
      position: relative;
      top: 115%;
      left: 37%;
      transform: translate(-37%, -115%);
    }

    &__text {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      text-align: center;
      color: ${COLOR.white};
    }

    &__title {
      font-size: ${FONT.m};
      margin-bottom: 15px;
    }
  }
`;

export default ThemeSection;
