import styled from "styled-components";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import DriveSection from "../HomePage/DriveSection";

const DrivePage = () => {
  return (
    <StyledDrivePage>
      <PageHero pcImg="drive/pc_hero.png" mImg="drive/m_hero.png" />
      <PageBg pcImg="bg/pc_green_bg.png" mImg="bg/m_green_bg.png">
        <DriveSection />
      </PageBg>
    </StyledDrivePage>
  );
};

const StyledDrivePage = styled.section`
  overflow: hidden;
`;

export default DrivePage;
