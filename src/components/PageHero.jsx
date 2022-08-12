import styled from "styled-components";

const PageHero = ({ pcImg, mImg }) => {
  return (
    <StyledPageHero>
      <div className="m-none">
        <img src={require(`../images/${pcImg}`)} alt="hero" />
      </div>
      <div className="pc-none">
        <img src={require(`../images/${mImg}`)} alt="hero" />
      </div>
    </StyledPageHero>
  );
};

const StyledPageHero = styled.div``;

export default PageHero;
