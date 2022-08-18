import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import Title from "../../components/Title";
import { themeCarsMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";
import SceduleSection from "./SceduleSection";
import SceneSection from "./SceneSection";

const ThemeDetialPage = () => {
  const param = useParams();
  const themeId = param.themeId;

  const filterMeta = themeCarsMeta.filter((element) => {
    return element.id === themeId;
  });

  const meta = filterMeta[0].detials;

  return (
    <StyledThemeDetialPage className="theme-detial">
      <PageHero
        pcImg={`themeDetial/${meta.pcImg}`}
        mImg={`themeDetial/${meta.mImg}`}
      />
      <div className="theme-detial__text">
        <Title
          className="theme-detial__title"
          imgSrc={`themeDetial/${meta.titleImg}`}
          title="title"
        />
        <div className="pc-none theme-detial__subhero">
          <img
            src={require(`../../images/themeDetial/${meta.mSubHero}`)}
            alt="subhero"
          />
        </div>
        <div className="theme-detial__desc">
          {meta.desc.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
      </div>

      <PageBg
        pcImg={`themeDetial/pc_theme_bg.png`}
        mImg={`themeDetial/m_theme_bg.png`}
      >
        <SceduleSection />

        <div className="btn">
          <img src={require("../../images/themeDetial/btn.png")} alt="title" />
        </div>

        <SceneSection meta={meta} />
      </PageBg>
    </StyledThemeDetialPage>
  );
};

const StyledThemeDetialPage = styled.section`
  .theme-detial {
    &__text {
      @media ${DEVICE.tablet} {
        background-image: url(${require("../../images/themeDetial/pc_text_bg.png")});
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    &__desc {
      padding: 15px;
      width: 90%;
      margin: auto;
      color: ${COLOR.fontBlack};
      line-height: ${FONT.xl};
      text-align: center;

      @media ${DEVICE.tablet} {
        width: 50%;
        font-size: ${FONT.m};
        line-height: ${FONT.xxl};
        padding-bottom: 100px;
      }
    }
  }

  .btn {
    width: 80%;
    margin: auto;

    @media ${DEVICE.tablet} {
      width: 30%;
      margin: auto;
      margin-top: 10%;
    }
  }
`;

export default ThemeDetialPage;
