import HeroSection from "./HeroSection";
import ExhibitionSection from "./ExhibitionSection";
import ThemeSection from "./ThemeSection";
import styled from "styled-components";
import VoteSection from "./VoteSection";
import DriveSection from "./DriveSection";
import PartnerSection from "./PartnerSection";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "../../utils/styles";
import DialogContext from "../../contexts/DialogContent";
import { useContext } from "react";
import Dialog from "../../components/dialog/index";
import PageBg from "../../components/PageBg";

const HomePage = () => {
  const { dialogData, setDialogData } = useContext(DialogContext);

  return (
    <StyledHomePage>
      <HeroSection />
      <Reveal keyframes={fadeInUp} delay={600} duration={600}>
        <ExhibitionSection />
      </Reveal>
      <PageBg pcImg="bg/pc_green_bg.png" mImg="bg/m_green_bg.png">
        <Reveal keyframes={fadeInUp} delay={300} duration={600}>
          <ThemeSection />
          <VoteSection moreBtn={true} slice="4" />
          <DriveSection moreBtn={true} slice="4" />
        </Reveal>
      </PageBg>
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
  }
`;

export default HomePage;
