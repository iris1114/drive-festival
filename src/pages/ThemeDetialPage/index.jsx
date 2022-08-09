import { useParams } from "react-router-dom";
import styled from "styled-components";

const ThemeDetialPage = () => {
  const param = useParams();
  const themeId = param.themeId;
  console.log({ themeId });
  return (
    <StyledThemeDetialPage>
      <div></div>
    </StyledThemeDetialPage>
  );
};

const StyledThemeDetialPage = styled.section``;

export default ThemeDetialPage;
