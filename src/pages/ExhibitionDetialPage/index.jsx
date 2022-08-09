import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Dialog from "../../components/dialog";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import Title from "../../components/Title";
import DialogContext from "../../contexts/DialogContent";
import { exhibitionMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";
import VoteSection from "../HomePage/VoteSection";

const ExhibitionDetialPage = () => {
  const param = useParams();
  const exhibitionId = param.exhibitionId;
  const filterMeta = exhibitionMeta.filter((element) => {
    return element.id === exhibitionId;
  });

  const meta = filterMeta[0].detials;

  const { dialogData, setDialogData } = useContext(DialogContext);

  return (
    <StyledExhibitionDetialPage className="exhibition-detial">
      <PageHero
        pcImg={`exhibitionDetial/${meta.pcImg}`}
        mImg={`exhibitionDetial/${meta.mImg}`}
      />
      <div className="exhibition-detial__text">
        <Title
          className="exhibition-detial__title"
          imgSrc={`exhibitionDetial/${meta.titleImg}`}
          title="title"
        />
        <div className="exhibition-detial__desc">
          {meta.desc.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
      </div>

      <PageBg
        pcImg={`exhibitionDetial/${meta.pcBg}`}
        mImg={`exhibitionDetial/${meta.mBg}`}
      >
        <VoteSection className="vote" />
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
    </StyledExhibitionDetialPage>
  );
};

const StyledExhibitionDetialPage = styled.section`
  .exhibition-detial {
    &__text {
      @media ${DEVICE.tablet} {
        background-image: url(${require("../../images/exhibitionDetial/pc_text_bg.png")});
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    &__desc {
      padding: 15px;
      width: 80%;
      margin: auto;
      color: ${COLOR.fontBlack};
      line-height: ${FONT.xl};
      border: 1px dashed ${COLOR.fontBlack};
      border-radius: 10px;

      @media ${DEVICE.tablet} {
        width: 60%;
        font-size: ${FONT.m};
        line-height: ${FONT.xxl};
        margin-bottom: 150px;
        padding: 30px;
      }

      p {
        margin-bottom: 20px;
      }
    }
  }

  .vote-section {
    padding-top: 150px;

    .draw {
      display: none;
    }
  }
`;

export default ExhibitionDetialPage;
