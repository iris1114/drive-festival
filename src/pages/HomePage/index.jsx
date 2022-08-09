import HeroSection from "./HeroSection";
import ExhibitionSection from "./ExhibitionSection";
import ThemeSection from "./ThemeSection";
import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import VoteSection from "./VoteSection";
import DriveSection from "./DriveSection";
import PartnerSection from "./PartnerSection";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "../../utils/styles";
import DialogContext from "../../contexts/DialogContent";
import { useContext } from "react";
import Dialog from "../../components/dialog/index";

const HomePage = () => {
  const { dialogData, setDialogData } = useContext(DialogContext);

  return (
    <StyledHomePage>
      <HeroSection />
      <ExhibitionSection />
      <div className="grass_bg">
        <Reveal keyframes={fadeInUp} delay={300} duration={600}>
          <ThemeSection />
          <VoteSection />
          <DriveSection />
        </Reveal>
      </div>
      <PartnerSection />
      {dialogData.open && (
        <Dialog
          meta={dialogData}
          onClose={() => {
            setDialogData({
              ...dialogData,
              open: false,
            });
          }}
        />
      )}
    </StyledHomePage>
  );
};

const StyledHomePage = styled.main`
  overflow: hidden;

  .grass_bg {
    background-image: url(${require("../../images/home/m_green_bg.png")});
    background-repeat: none;
    background-size: cover;
    padding:50px 0px 200px;

    @media ${DEVICE.tablet}{
      background-image: url(${require("../../images/home/pc_green_bg.png")});
    }
  }
  }
`;

export default HomePage;
