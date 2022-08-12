import styled from "styled-components";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import Title from "../../components/Title";
import { DEVICE } from "../../utils/device";
import ThemeSection from "../HomePage/ThemeSection";

const ThemePage = () => {
  return (
    <StyledThemePage>
      <PageHero pcImg="theme/pc_hero.png" mImg="theme/m_hero.png" />
      <div className="theme__title">
        <Title imgSrc="theme/title.png" />
      </div>
      <PageBg pcImg="theme/pc_bg.png" mImg="theme/m_bg.png">
        <ThemeSection />
      </PageBg>
    </StyledThemePage>
  );
};

const StyledThemePage = styled.section`
  overflow: hidden;

  .title-img {
    display: none;
  }

  .theme__title {
    padding: 30px 0%;
    @media ${DEVICE.tablet} {
      background-image: url(${require("../../images/theme/pc_title_bg.png")});
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }

  .tabs {
    padding-top: 30%;

    @media ${DEVICE.tablet} {
      padding-top: 20%;
    }
  }
`;

export default ThemePage;
