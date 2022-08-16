import styled from "styled-components";
import { DEVICE } from "../utils/device";

const Title = ({ imgSrc, title }) => {
  return (
    <StyledTitile className="title">
      <img src={require(`../images/${imgSrc}`)} alt={title} />
    </StyledTitile>
  );
};

const StyledTitile = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 30px;

  @media ${DEVICE.tablet} {
    width: 35%;
    height: 48px;
  }
`;

export default Title;
