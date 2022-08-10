import styled from "styled-components";
import Button from "../../components/Button";
import Title from "../../components/Title";
import DriveCard from "../../components/DriveCard";
import { driveMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const DriveSection = ({ moreBtn, slice }) => {
  return (
    <StyledDriveSection>
      <img
        className="draw draw-1"
        src={require("../../images/home/drive/draw1.png")}
        alt="draw1"
      />
      <img
        className="draw draw-2"
        src={require("../../images/home/drive/draw2.png")}
        alt="draw1"
      />

      <Title
        className="title"
        imgSrc="home/drive/title.png"
        title="四大主題活動"
      />

      <p className="desc">
        台灣首度主題汽車派對饗宴以汽車連結生活體驗
        集結「競速改裝」、「古董經典」、「優雅旅行」三大展區，超過 150
        台車主同場炫車搭配音樂、特色活動、美食、特色市集。
      </p>

      <div className="votes">
        {driveMeta.slice(0, slice).map((element, index) => {
          return <DriveCard meta={element} key={index} />;
        })}
      </div>

      {moreBtn && <Button link="/dive" />}

      <img
        className="draw draw-3"
        src={require("../../images/home/drive/draw3.png")}
        alt="draw1"
      />
      <img
        className="draw draw-4"
        src={require("../../images/home/drive/draw4.png")}
        alt="draw1"
      />
    </StyledDriveSection>
  );
};

const StyledDriveSection = styled.section`
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 0px 10px;

  .draw {
    width: 30%;

    @media ${DEVICE.tablet} {
      width: 20%;
    }
  }

  .draw-1 {
    position: relative;
    top: -40%;
    left: 6%;
    width: 36%;
    animation: drive-draw1-m 2s linear infinite;

    @keyframes drive-draw1-m {
      50% {
        left: 2%;
      }
    }

    @media ${DEVICE.tablet} {
      top: -70%;
      left: 0%;
      width: 20%;
      animation: drive-draw1-pc 2s linear infinite;

      @keyframes drive-draw1-pc {
        50% {
          left: 2%;
        }
      }
    
    }
  }
  .draw-2 {
    position: relative;
    top: -50px;
    right: -25%;
    animation: drive-draw2-m 2s linear infinite;

    @keyframes drive-draw2-m {
      50% {
        top: -40px;
      }
    }
   
    @media ${DEVICE.tablet} {
      top: -70%;
      right: -60%;
      width: 18%;
      animation: drive-draw2-pc 2s linear infinite;

      @keyframes drive-draw2-pc {
        50% {
          right: -61%;
        }
      }
    }
  }

 .title {
    padding-top: 10%;

    @media ${DEVICE.tablet} {
        padding-top: 0%;
        padding-bottom: 2%;
      }
  }

  .desc{
    text-align: center;
    color: ${COLOR.white};
    width: 90%;
    margin: auto;
    margin-bottom: 20px;

    @media ${DEVICE.tablet} {
        width: 60%;
        font-size: ${FONT.m};
        line-height: ${FONT.xl};
        margin-bottom: 40px;
      }
  }

  .votes{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .draw-3 {
    position: relative;
    top: -50px;
    left: 5%;
    width: 25%;

    @media ${DEVICE.tablet} {
      top: -110px;
      left: 10%;
      width: 15%;
    }
  }

  .draw-4 {
    position: relative;
    top: -40px;
    left: 48%;
    width: 25%;

    @media ${DEVICE.tablet} {
      top: -120px;
      left: 60%;
      width: 15%;
    }
  }


  }
`;

export default DriveSection;
