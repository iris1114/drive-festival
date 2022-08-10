import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const MarketCard = ({ meta }) => {
  return (
    <StyledMarketCard>
      <div className="img">
        <img src={require(`../images/market/${meta.img}`)} alt={meta.title} />
      </div>
      <div className="text">
        <div className="title">{meta.title}</div>
        <div className="bottom">
          <div>編號:{meta.no}</div>
          <div className="btn">了解更多</div>
        </div>
      </div>
    </StyledMarketCard>
  );
};

const StyledMarketCard = styled.div`
  padding: 10px;
  width: calc(50% - 10px);
  background-color: ${COLOR.white};
  margin: 5px;
  cursor: pointer;

  @media ${DEVICE.tablet} {
    width: calc(25% - 20px);
    margin: 10px;
  }

  .text {
    .title {
      font-size: ${FONT.s};
      color: ${COLOR.darkGrey};
      padding: 10px 0px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      @media ${DEVICE.tablet} {
        font-size: ${FONT.m};
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${COLOR.subOrange};
      font-size: ${FONT.xs};

      @media ${DEVICE.tablet} {
        font-size: ${FONT.s};
      }

      .btn {
        background-color: ${COLOR.subOrange};
        color: ${COLOR.white};
        padding: 0px 3px;
        border-radius: 4px;

        @media ${DEVICE.tablet} {
          padding: 0px 10px;
        }
      }
    }
  }
`;

export default MarketCard;
