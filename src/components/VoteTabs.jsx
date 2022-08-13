import { useState } from "react";
import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const VoteTabs = ({ meta, onTabClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getActiveClass = (index) => {
    if (activeIndex === index) {
      return "tab--active";
    }
    return "";
  };

  const handleClick = (event, id, index) => {
    onTabClick && onTabClick(id, index);
    setActiveIndex(index);
  };

  return (
    <StyledVoteTabs className="tabs">
      {meta.map((element, index) => {
        return (
          <div
            key={index}
            className={`tab ${getActiveClass(index)}`}
            onClick={(event) => handleClick(event, element.id, index)}
          >
            {element.title}
          </div>
        );
      })}
    </StyledVoteTabs>
  );
};

const StyledVoteTabs = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;

  .tab {
    margin: 0 5px;
    padding: 0 5px;
    border-radius: 20px;
    color: ${COLOR.white};
    cursor: pointer;

    @media ${DEVICE.tablet} {
      font-size: ${FONT.l};
      padding: 10px 13px;
      margin: 20px;
    }

    &--active {
      background-color: ${COLOR.orange};
    }
  }
`;

export default VoteTabs;
