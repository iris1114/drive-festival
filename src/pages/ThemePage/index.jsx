import styled from "styled-components";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import ThemeSection from "../HomePage/ThemeSection";

const ThemePage = () => {
  return (
    <StyledThemePage>
      <PageHero pcImg="theme/pc_hero.png" mImg="theme/m_hero.png" />
      <PageBg pcImg="bg/pc_green_bg.png" mImg="bg/m_green_bg.png">
        <ThemeSection />
      </PageBg>
    </StyledThemePage>
  );
};

const StyledThemePage = styled.section`
  overflow: hidden;
`;

export default ThemePage;
