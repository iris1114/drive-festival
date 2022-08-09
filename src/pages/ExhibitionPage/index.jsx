import styled from "styled-components";
import PageHero from "../../components/PageHero";
import ExhibitionSection from "../HomePage/ExhibitionSection";

const ExhibitionPage = () => {
  return (
    <StyledExhibitionPage>
      <PageHero pcImg="exhibition/pc_hero.png" mImg="exhibition/m_hero.png" />
      <ExhibitionSection />
    </StyledExhibitionPage>
  );
};

const StyledExhibitionPage = styled.section`
  overflow: hidden;
  padding-bottom: 100px;
`;

export default ExhibitionPage;
