import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const Tabs = ({ meta, onTabClick }) => {
  const handleClick = (event, index) => {
    onTabClick && onTabClick(index);
  };
  return (
    <StyledTabs>
      {meta.map((element, index) => {
        return (
          <Link to={element.link} key={index}>
            <div
              className="tab"
              key={index}
              onClick={(event) => handleClick(event, index)}
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

  .tab {
    margin: 0 5px;
    padding: 0 5px;
    background-color: ${COLOR.orange};
    border-radius: 5px;
    color: ${COLOR.white};
    cursor: pointer;

    @media ${DEVICE.tablet} {
      font-size: ${FONT.l};
      padding: 10px 10px;
      margin: 40% 20px 30% 0px;
    }
  }
`;

export default Tabs;
