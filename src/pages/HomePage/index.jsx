import HeroSection from "./HeroSection";
import ExhibitionSection from "./ExhibitionSection";
import ThemeSection from "./ThemeSection";
import styled from "styled-components";

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <ExhibitionSection />
      <div className="grass_bg">
        <img
          className="pc-none"
          src={require("../../images/home/m_green_bg.jpg")}
          alt="bg"
        />
        <img
          className="m-none"
          src={require("../../images/home/pc_green_bg.jpg")}
          alt="bg"
        />
        <div className="theme_section">
          <ThemeSection />
        </div>
      </div>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.main`
  overflow: hidden;

  .grass_bg {
    position: relative;

    .theme_section {
      position: absolute;
      top: 0%;
      left: 0%;
    }
  }
`;

export default HomePage;
