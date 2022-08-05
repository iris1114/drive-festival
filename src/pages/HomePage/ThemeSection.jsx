import styled from "styled-components";
import Tabs from "../../components/common/Tabs";
import Title from "../../components/common/Title";
import { themeTabsMeta } from "../../utils/data";

const ThemeSection = () => {
  return (
    <StyledThemeSection>
      <div className="draw1 pc-none">
        <img src={require("../../images/home/theme/m_draw1.png")} alt="draw1" />
      </div>
      <div className="draw1 m-none">
        <img
          src={require("../../images/home/theme/pc_draw1.png")}
          alt="draw1"
        />
      </div>
      <Title imgSrc="home/theme/title.png" title="四大主題活動" />

      {themeTabsMeta.map((element, index) => {
        return <Tabs meta={element} key={index} />;
      })}
    </StyledThemeSection>
  );
};

const StyledThemeSection = styled.section`
  .draw1 {
    width: 80%;
    margin: 40px auto 40px;
  }
`;

export default ThemeSection;
