import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE } from "../utils/device";

const Button = ({ link }) => {
  return (
    <StyledButton>
      <Link to={link}>
        <img src={require("../images/common/button.png")} alt="button" />
      </Link>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  width: 25%;
  margin: 5% auto;

  @media ${DEVICE.tablet} {
    width: 10%;
  }
`;

export default Button;
