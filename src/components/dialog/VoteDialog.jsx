import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const VoteDialog = ({ meta }) => {
  return (
    <StyledVoteDialog>
      <div className="dialog__img">
        <img
          src={require(`../../images/home/vote/${meta.img}`)}
          alt={meta.title}
        />
      </div>

      <div className="dialog__text">
        <div className="dialog__title">{meta.title}</div>
        <p>{meta.desc}</p>
        <div className="dialog__vote">
          <div>票數:{meta.votes}票</div>
          <div className="dialog__btn">我要投票</div>
        </div>
      </div>
    </StyledVoteDialog>
  );
};

const StyledVoteDialog = styled.div`
  .dialog {
    &__title {
      font-size: ${FONT.m};
      margin-bottom: 15px;
    }

    &__vote {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${COLOR.orange};
      font-size: ${FONT.xs};
      cursor: pointer;
      padding: 30px 0px 10px;

      @media ${DEVICE.tablet} {
        font-size: ${FONT.s};
      }
    }

    &__btn {
      background-color: ${COLOR.orange};
      color: ${COLOR.white};
      padding: 0px 10px;
      border-radius: 20px;

      @media ${DEVICE.tablet} {
        padding: 5px 20px;
      }
    }
  }
`;

export default VoteDialog;
