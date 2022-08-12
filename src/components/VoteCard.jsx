import { useContext } from "react";
import styled from "styled-components";
import DialogContext from "../contexts/DialogContent";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const VoteCard = ({ meta }) => {
  const { setDialogData } = useContext(DialogContext);

  return (
    <StyledVoteCard
      onClick={() => {
        setDialogData({ meta: meta, open: true, category: "vote" });
      }}
    >
      <div className="img">
        <img
          src={require(`../images/home/vote/${meta.img}`)}
          alt={meta.title}
        />
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
  width: calc(50% - 10px);
  background-color: ${COLOR.white};
  margin: 5px;
  cursor: pointer;

  @media ${DEVICE.tablet} {
    width: calc(25% - 20px);
    margin: 10px;
  }

  .text {
    padding: 15px 0px 5px;
    .title {
      font-size: ${FONT.s};
      color: ${COLOR.darkGrey};
      padding: 10px 0px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 20px;

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
        padding: 5px 10px;
        border-radius: 10px;

        @media ${DEVICE.tablet} {
          padding: 5px 15px;
          font-size: ${FONT.s};
          border-radius: 12px;
        }
      }
    }
  }
`;

export default VoteCard;
