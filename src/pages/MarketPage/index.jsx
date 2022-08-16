import { useContext } from "react";
import styled from "styled-components";
import Dialog from "../../components/dialog";
import MarketCard from "../../components/MarketCard";
import PageBg from "../../components/PageBg";
import PageHero from "../../components/PageHero";
import Title from "../../components/Title";
import DialogContext from "../../contexts/DialogContent";
import { marketMeta } from "../../utils/data";
import { DEVICE } from "../../utils/device";
import { FONT } from "../../utils/styles";

const MarketSection = () => {
  const { dialogData, setDialogData } = useContext(DialogContext);

  return (
    <StyledMarketPage className="market">
      <PageHero
        pcImg="market/pc_market_hero.png"
        mImg="market/m_market_hero.png"
      />
      <div className="market__text">
        <Title
          className="market__title"
          imgSrc="market/title.png"
          title="title"
        />
        <p className="market__desc">
          台灣首度主題汽車派對饗宴以汽車連結生活體驗
          集結「競速改裝」、「古董經典」、「優雅旅行」三大展區，超過 150
          台車主同場炫車搭配音樂、特色活動、美食、特色市集。
        </p>
      </div>

      <PageBg pcImg="market/pc_market_bg.png" mImg="market/m_market_bg.png">
        <div className="market__cards">
          {marketMeta.map((element, index) => {
            return <MarketCard meta={element} key={index} />;
          })}
        </div>
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
    </StyledMarketPage>
  );
};

const StyledMarketPage = styled.main`
  .market {
    &__text {
      background-image: url(${require("../../images/market/title_bg.png")});
      background-repeat: no-repeat;
      background-size: 100%;
    }

    &__desc {
      text-align: center;
      width: 90%;
      margin: 50px auto 20px;

      @media ${DEVICE.tablet} {
        width: 50%;
        font-size: ${FONT.m};
        line-height: ${FONT.xl};
        margin: 80px auto 20px;
      }
    }
    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      max-width: 1100px;
      margin: auto;
      padding: 150px 15px 0px;

      @media ${DEVICE.tablet} {
        padding: 300px 0px 0px;
      }
    }
  }
`;

export default MarketSection;
