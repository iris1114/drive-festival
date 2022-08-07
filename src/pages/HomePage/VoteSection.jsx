import styled from "styled-components";
import Button from "../../components/Button";
import Title from "../../components/Title";
import VoteCard from "../../components/VoteCard";
import { voteMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const VoteSection = () => {
  return (
    <StyledVoteSection>
      <img
        className="draw draw-1"
        src={require("../../images/home/vote/draw1.png")}
        alt="draw1"
      />
      <img
        className="draw draw-2"
        src={require("../../images/home/vote/draw2.png")}
        alt="draw1"
      />

      <Title
        className="title"
        imgSrc="home/vote/title.png"
        title="四大主題活動"
      />

      <p className="desc">
        台灣首度主題汽車派對饗宴
        以汽車連結生活體驗集結「競速改裝」、「古董經典」、「優雅旅行」三大展區
        超過 150 台車主同場炫車，搭配音樂、特色活動、美食、特色市集。
      </p>

      <div className="votes">
        {voteMeta.map((element, index) => {
          return <VoteCard meta={element} key={index} />;
        })}
      </div>

      <Button link="/vote" />
    </StyledVoteSection>
  );
};

const StyledVoteSection = styled.section`
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

    @media ${DEVICE.tablet} {
      top: 100px;
      left: 10%;
    }
  }
  .draw-2 {
    position: relative;
    top: -15%;
    right: -33%;

    @media ${DEVICE.tablet} {
      top: 120px;
      right: -55%;
    }
  }

 .title {
    padding-top: 10%;

    @media ${DEVICE.tablet} {
        padding-top: 15%;
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


  }
`;

export default VoteSection;
