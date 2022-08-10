import { useContext } from "react";
import styled from "styled-components";
import Dialog from "../../components/dialog";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import DialogContext from "../../contexts/DialogContent";
import { DEVICE } from "../../utils/device";
import DriveSection from "../HomePage/DriveSection";

const DrivePage = () => {
  const { dialogData, setDialogData } = useContext(DialogContext);

  return (
    <StyledDrivePage>
      <PageHero pcImg="drive/pc_hero.png" mImg="drive/m_hero.png" />
      <PageBg pcImg="bg/pc_green_bg.png" mImg="bg/m_green_bg.png">
        <DriveSection />
      </PageBg>
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
    </StyledDrivePage>
  );
};

const StyledDrivePage = styled.section`
  overflow: hidden;

  .draw-3,
  .draw-4 {
    @media ${DEVICE.tablet} {
      top: 50px;
    }
  }
`;

export default DrivePage;
