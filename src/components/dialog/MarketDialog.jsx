import { useContext } from "react";
import styled from "styled-components";
import DialogContext from "../../contexts/DialogContent";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const MarketDialog = ({ meta }) => {
  const { setDialogData } = useContext(DialogContext);

  return (
    <StyledMarketDialog>
      <div className="dialog__img">
        <img
          src={require(`../../images/market/${meta.img}`)}
          alt={meta.title}
        />
      </div>

      <div className="dialog__text">
        <div className="dialog__title">{meta.title}</div>
        <p>{meta.desc}</p>
        <div
          className="dialog__btn"
          onClick={() => {
            setDialogData({ meta: meta, open: true, category: "form" });
          }}
        >
          我要報名
        </div>
      </div>
    </StyledMarketDialog>
  );
};

const StyledMarketDialog = styled.div`
  display: flex;
  justify-content:  space-between;
  flex-wrap: wrap;
  align-items: center;
}


  .dialog {
    &__img{
      width: 100%;

      @media ${DEVICE.tablet} {
        width: 40%;
      }
    }
    &__text{
      width: 100%;
      display: flex;
      flex-direction: column;
      @media ${DEVICE.tablet} {
        width: 50%;
      }
    }
    &__title {
      font-size: ${FONT.m};
      margin: 15px 0px; 
    }
    

    &__btn {
      background-color: ${COLOR.orange};
      color: ${COLOR.white};
      padding: 0px 10px;
      border-radius: 20px;
      display: inline;
      margin-left: auto;
      cursor: pointer;
      margin-top: 10px;
  

      @media ${DEVICE.tablet} {
        padding: 5px 20px;
      }
    }
  }
`;

export default MarketDialog;
