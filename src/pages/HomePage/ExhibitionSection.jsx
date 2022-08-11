import styled from "styled-components";
import ExhibitionInfo from "../../components/ExhibitionInfo";
import Title from "../../components/Title";
import { exhibitionMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";

const ExhibitionSection = () => {
  return (
    <StyledExhibitionSection>
      <Title imgSrc="home/exhibition/title.png" title="三大活動區" />
      <StyledAreaSection>
        <img
          className="pc-none"
          src={require("../../images/home/exhibition/m_bg.png")}
          alt="bg"
        />
        <img
          className="m-none"
          src={require("../../images/home/exhibition/pc_bg.png")}
          alt="bg"
        />
        <div className="meta">
          {exhibitionMeta.map((element, index) => {
            return (
              <div className="meta__list" key={index}>
                <ExhibitionInfo meta={element} />
              </div>
            );
          })}
        </div>
        <img
          className="m-none animate1"
          src={require("../../images/home/exhibition/animate1.png")}
          alt="animate"
        />
        <img
          className="m-none animate2"
          src={require("../../images/home/exhibition/animate2.png")}
          alt="animate"
        />
      </StyledAreaSection>
    </StyledExhibitionSection>
  );
};

const StyledExhibitionSection = styled.section``;

const StyledAreaSection = styled.div`
  position: relative;
  padding-bottom: 20px;
  max-width: 1400px;
  margin: auto;

  .meta {
    width: 100%;
    position: absolute;
    top: 7%;
    left: 2%;
    display: flex;
    flex-wrap: wrap;

    @media ${DEVICE.tablet} {
      width: 50%;
      top: 18%;
      left: 50%;
      transform: translate(-50%, 0%);
    }

    &__list {
      margin-bottom: 10px;

      &:nth-child(1) {
        @media ${DEVICE.tablet} {
          position: relative;
          display: inline-block;
          top: -20%;
          right: -30%;
          width: 100%;
        }
      }

      &:nth-child(2) {
        @media ${DEVICE.tablet} {
          position: relative;
          top: 20%;
          left: -25%;
          width: 100%;
          transform: translate(0%, -20%);
        }
        .info {
          flex-direction: row-reverse;

          &__text {
            flex-direction: row-reverse;
          }
        }
      }

      &:nth-child(3) {
        @media ${DEVICE.tablet} {
          position: relative;
          top: 40%;
          left: 30%;
          width: 100%;
          transform: translate(-0%, -40%);
        }
      }
    }
  }

  .animate1 {
    width: 15%;
    position: absolute;
    top: 20%;
    left: 20%;
    animation: animate1 2s linear infinite;

    @keyframes animate1 {
      50% {
        top: 21%;
        left: 21%;
      }
    }
  }

  .animate2 {
    width: 15%;
    position: absolute;
    top: 80%;
    left: 20%;
    animation: animate2 2s linear infinite;

    @keyframes animate2 {
      50% {
        top: 81%;
      }
    }
  }
`;

export default ExhibitionSection;
