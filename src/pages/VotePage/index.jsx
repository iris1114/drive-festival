import { useContext } from "react";
import styled from "styled-components";
import Dialog from "../../components/dialog";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import Title from "../../components/Title";
import DialogContext from "../../contexts/DialogContent";
import { DEVICE } from "../../utils/device";
import VoteSection from "../HomePage/VoteSection";

const VotePage = () => {
  const { dialogData, setDialogData } = useContext(DialogContext);

  return (
    <StyledVotePage>
      <PageHero pcImg="vote/pc_hero.png" mImg="vote/m_hero.png" />
      <div className="vote__title">
        <Title imgSrc="vote/title.png" />
      </div>
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

  .draw,
  .title-img {
    display: none;
  }

  .vote__title {
    padding: 30px 0%;
    @media ${DEVICE.tablet} {
      background-image: url(${require("../../images/theme/pc_title_bg.png")});
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
`;

export default VotePage;
