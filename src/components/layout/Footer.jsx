import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { COLOR } from "../../utils/styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="left">
        <div>主辦單位：</div>
        <div className="logo">
          <img src={require("../../images/footer/logo1.png")} alt="logo" />
        </div>
        <div className="logo">
          <img src={require("../../images/footer/logo1.png")} alt="logo" />
        </div>
        <div className="logo">
          <img src={require("../../images/footer/logo1.png")} alt="logo" />
        </div>
      </div>
      <div className="right">
        <div>協辦單位：</div>
        <div className="logo">
          <img src={require("../../images/footer/logo1.png")} alt="logo" />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${COLOR.footerBg};
  display: flex;
  padding: 30px 15px;
  align-items: center;
  flex-wrap: wrap;

  @media ${DEVICE.tablet} {
    justify-content: space-around;
    padding: 50px 0px;
  }

  .left,
  .right {
    display: flex;
    .logo {
      width: 80px;
      margin-right: 20px;

      @media ${DEVICE.tablet} {
        width: 100px;
      }
    }
  }

  .left {
    margin-bottom: 20px;
    @media ${DEVICE.tablet} {
      margin-bottom: 0px;
    }
  }
`;

export default Footer;
