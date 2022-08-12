import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Tabs from "../../components/Tabs";
import Title from "../../components/Title";
import VoteCard from "../../components/VoteCard";
import { voteMeta, voteTabsMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";

const VoteSection = ({ moreBtn, slice }) => {
  const [tabId, setTabId] = useState("voteHotCar");

  const handleTabClick = (id) => {
    setTabId(id);
  };

  const carMeta = voteMeta.filter((element) => {
    return element.category.includes(tabId);
  });

  return (
    <StyledVoteSection className="vote-section">
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
      <div className="title-img">
        <Title imgSrc="home/vote/title.png" title="展車票選" />
      </div>

      <Tabs meta={voteTabsMeta} onTabClick={handleTabClick} />
      <div className="votes">
        {carMeta.slice(0, slice).map((element, index) => {
          return <VoteCard meta={element} key={index} />;
        })}
      </div>
      {moreBtn && <Button link="/vote" />}
    </StyledVoteSection>
  );
};

const StyledVoteSection = styled.section`
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 70px 10px;

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
    animation: vote-draw1-m 2s linear infinite;

    @keyframes vote-draw1-m {
      50% {
        left: 8%;
      }
    }
  

    @media ${DEVICE.tablet} {
      top: 100px;
      left: 10%;
      animation: vote-draw1-pc 2s linear infinite;

      @keyframes vote-draw1-pc {
        50% {
          top: 120px;
        }
      }
    }
  }
  .draw-2 {
    position: relative;
    top: -15%;
    right: -33%;
    animation: vote-draw2-m 2s linear infinite;

    @keyframes vote-draw2-m {
      50% {
        right: -30%;
      }
    }

    @media ${DEVICE.tablet} {
      top: 120px;
      right: -55%;
      animation: vote-draw2-pc 2s linear infinite;

      @keyframes vote-draw2-pc {
        50% {
          right: -57%;
        }
      }
    }
  }

 .title-img {
    padding-top: 10%;
  
    @media ${DEVICE.tablet} {
        padding-top: 15%;
        padding-bottom: 2%;
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
