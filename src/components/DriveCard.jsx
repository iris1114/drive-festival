import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const VoteCard = ({ meta }) => {
  return (
    <StyledVoteCard>
      <div className="img">
        <img
          src={require(`../images/home/drive/${meta.img}`)}
          alt={meta.title}
        />
      </div>
      <div className="text">
        <div className="title">{meta.title}</div>
        <div className="btn">我要試駕</div>
      </div>
    </StyledVoteCard>
  );
};

const StyledVoteCard = styled.div`
  padding: 10px;
  width: calc(50% - 10px);
  background-color: ${COLOR.white};
  margin: 5px;

  @media ${DEVICE.tablet} {
    width: calc(25% - 20px);
    margin: 10px;
  }

  .text {
    text-align: center;
    .title {
      font-size: ${FONT.s};
      color: ${COLOR.darkGrey};
      padding: 10px 0px;

      @media ${DEVICE.tablet} {
        font-size: ${FONT.m};
      }
    }
    .btn {
      background-color: ${COLOR.grey};
      color: ${COLOR.white};
      padding: 3px 5px;
      border-radius: 6px;
      display: inline;
      font-size: ${FONT.xs};
      cursor: pointer;

      @media ${DEVICE.tablet} {
        padding: 3px 10px;
        font-size: ${FONT.s};
      }
    }
  }
`;

export default VoteCard;
