import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const VoteCard = (props) => {
  const meta = props.meta;
  return (
    <StyledVoteCard>
      <div className="img">
        <img src={require(`../images/${meta.img}`)} alt={meta.title} />
      </div>
      <div className="text">
        <div className="title">{meta.title}</div>
        <div className="vote">
          <div>票數:{meta.votes}票</div>
          <div className="btn">我要投票</div>
        </div>
      </div>
    </StyledVoteCard>
  );
};

const StyledVoteCard = styled.div`
  padding: 10px;
  width: 45%;
  background-color: ${COLOR.white};
  margin: 5px;

  @media ${DEVICE.tablet} {
    width: 23%;
    margin: 10px;
  }

  .text {
    .title {
      font-size: ${FONT.s};
      color: ${COLOR.darkGrey};
      padding: 10px 0px;

      @media ${DEVICE.tablet} {
        font-size: ${FONT.m};
      }
    }
    .vote {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${COLOR.grey};
      font-size: ${FONT.xs};

      @media ${DEVICE.tablet} {
        font-size: ${FONT.s};
      }

      .btn {
        background-color: ${COLOR.grey};
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

export default VoteCard;
