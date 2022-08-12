import styled from "styled-components";
import Title from "../../components/Title";
import { partnerMMeta, partnerPcMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";

const PartnerSection = () => {
  return (
    <StyledPartnerSection>
      <img
        className="draw draw-1 m-none"
        src={require("../../images/home/partner/draw1.png")}
        alt="draw1"
      />
      <img
        className="draw draw-2 m-none"
        src={require("../../images/home/partner/draw2.png")}
        alt="draw1"
      />
      <Title
        className="title"
        imgSrc="home/partner/title.png"
        title="活動夥伴"
      />

      <div className="box pc-none">
        <img src={require("../../images/home/partner/m_box.png")} alt="box" />
        <div className="box__partner">
          {partnerMMeta.map((element, index) => {
            return (
              <div className="box__logo" key={index}>
                <img
                  src={require(`../../images/home/partner/${element.img}`)}
                  alt={element.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="box m-none">
        <img src={require("../../images/home/partner/pc_box.png")} alt="box" />
        <div className="box__partner">
          {partnerPcMeta.map((element, index) => {
            return (
              <div className="box__logo" key={index}>
                <img
                  src={require(`../../images/home/partner/${element.img}`)}
                  alt={element.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </StyledPartnerSection>
  );
};

const StyledPartnerSection = styled.section`
  padding: 0px 10px;
  position: relative;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 50px;

  .draw {
    width: 10%;
    margin: 40px auto 40px;
  }

  .draw-1 {
    position: absolute;
    top: -18%;
    left: 5%;
    animation: partner-draw1-pc 2s linear infinite;

    @keyframes partner-draw1-pc {
      50% {
        top: -16%;
      }
    }
  }
  .draw-2 {
    position: absolute;
    top: -15%;
    right: 5%;
    animation: partner-draw2-pc 2s linear infinite;

    @keyframes partner-draw2-pc {
      50% {
        top: -18%;
        right: 3%;
      }
    }
  }

  .title {
    padding-top: 3%;
  }

  .box {
    position: relative;

    &__partner {
      position: absolute;
      top: 28%;
      left: 40%;
      width: 65%;
      transform: translateX(-40%);

      @media ${DEVICE.tablet} {
        width: 58%;
        top: 36%;
        left: 42%;
      }
    }

    &__logo {
      margin-bottom: 40px;

      @media ${DEVICE.tablet} {
        margin-bottom: 45px;
      }
    }
  }
`;

export default PartnerSection;
