import { useContext } from "react";
import styled from "styled-components";
import Dialog from "../../components/dialog";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import DialogContext from "../../contexts/DialogContent";
import VoteSection from "../HomePage/VoteSection";

const VotePage = () => {
  const { dialogData, setDialogData } = useContext(DialogContext);

  return (
    <StyledVotePage>
      <PageHero pcImg="vote/pc_hero.png" mImg="vote/m_hero.png" />
      <PageBg pcImg="vote/pc_bg.png" mImg="vote/m_bg.png">
        <VoteSection />
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
    </StyledVotePage>
  );
};

const StyledVotePage = styled.section`
  overflow: hidden;
`;

export default VotePage;
