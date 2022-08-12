import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const Tabs = ({ meta, onTabClick, newId }) => {
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
    <StyledTabs className="tabs">
      {meta.map((element, index) => {
        return (
          <Link to={element.link} target={element.target} key={index}>
            <div
              className={`tab ${getActiveClass(index)}`}
              onClick={(event) => handleClick(event, element.id, index)}
            >
              {element.title}
            </div>
          </Link>
        );
      })}
    </StyledTabs>
  );
};

const StyledTabs = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;

  .tab {
    margin: 0 5px;
    padding: 0 5px;

    border-radius: 5px;
    color: ${COLOR.white};
    cursor: pointer;

    @media ${DEVICE.tablet} {
      font-size: ${FONT.l};
      padding: 10px 10px;
      margin: 20px;
    }

    &--active {
      background-color: ${COLOR.orange};
    }
  }
`;

export default Tabs;
