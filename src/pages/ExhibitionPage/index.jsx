import styled from "styled-components";
import PageHero from "../../components/PageHero";
import Title from "../../components/Title";
import { DEVICE } from "../../utils/device";
import ExhibitionSection from "../HomePage/ExhibitionSection";

const ExhibitionPage = () => {
  return (
    <StyledExhibitionPage>
      <PageHero pcImg="exhibition/pc_hero.png" mImg="exhibition/m_hero.png" />
      <div className="exhibition__title">
        <Title imgSrc="exhibition/title.png" />
      </div>
      <ExhibitionSection />
    </StyledExhibitionPage>
  );
};

const StyledExhibitionPage = styled.section`
  overflow: hidden;
  padding-bottom: 100px;

  .title-img {
    display: none;
  }

  .exhibition__title {
    padding: 30px 0%;
    @media ${DEVICE.tablet} {
      background-image: url(${require("../../images/theme/pc_title_bg.png")});
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
`;

export default ExhibitionPage;
