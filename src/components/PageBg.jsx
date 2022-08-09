import styled from "styled-components";
import { DEVICE } from "../utils/device";

const PageBg = (props) => {
  const pcImg = require(`../images/${props.pcImg}`);
  const mImg = require(`../images/${props.mImg}`);
  return (
    <StyledPageBg pcImg={pcImg} mImg={mImg}>
      <div className="content">{props.children}</div>
    </StyledPageBg>
  );
};

const StyledPageBg = styled.div`
  background-image: url(${(props) => props.mImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${DEVICE.tablet} {
    background-image: url(${(props) => props.pcImg});
  }

  .content {
    padding-bottom: 100px;
  }
`;

export default PageBg;
