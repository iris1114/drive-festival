import HeroSection from "./HeroSection";
import ExhibitionSection from "./ExhibitionSection";
import ThemeSection from "./ThemeSection";
import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import VoteSection from "./VoteSection";

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <ExhibitionSection />
      <div className="grass_bg">
        <div className="theme_section">
          <ThemeSection />
          <VoteSection />
        </div>
      </div>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.main`
  overflow: hidden;

  .grass_bg {
    background-image: url(${require("../../images/home/m_green_bg.png")});
    background-repeat: none;
    background-size: cover;

    @media ${DEVICE.tablet}{
      background-image: url(${require("../../images/home/pc_green_bg.png")});

    }
  }

    .theme_section {
      padding: 50px 0px 200px;
    }
  }
`;

export default HomePage;
