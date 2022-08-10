import styled from "styled-components";
import { DEVICE } from "../../utils/device";

const SceduleSection = () => {
  return (
    <StyledSceduleSection>
      <div className="scedule">
        <div className="scedule__title">
          <img
            src={require("../../images/themeDetial/scedule_title.png")}
            alt="title"
          />
        </div>
        <div className="scedule__time">
          <img
            src={require("../../images/themeDetial/blank.png")}
            alt="title"
          />
        </div>
      </div>
    </StyledSceduleSection>
  );
};

const StyledSceduleSection = styled.section`
  .scedule {
    max-width: 1200px;
    margin: auto;
    padding: 0px 15px;

    &__title {
      width: 50%;
      margin: auto;
      padding-top: 30%;

      @media ${DEVICE.tablet} {
        width: 30%;
        padding-top: 10%;
      }
    }

    &__time {
      @media ${DEVICE.tablet} {
        width: 70%;
        margin: auto;
      }
    }
  }
`;

export default SceduleSection;
