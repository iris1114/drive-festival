import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { COLOR } from "../../utils/styles";
import DriveDialog from "./DriveDialog";
import FormDialog from "./FormDialog";
import MarketDialog from "./MarketDialog";
import VoteDialog from "./VoteDialog";

const Dialog = ({ meta, onClose }) => {
  const handleCloseClick = () => {
    onClose && onClose();
  };

  return (
    <StyledDialog>
      <div className="dialog">
        <div className="dialog__contents">
          {meta.category === "vote" ? (
            <VoteDialog meta={meta.meta} />
          ) : meta.category === "drive" ? (
            <DriveDialog meta={meta.meta} />
          ) : meta.category === "market" ? (
            <MarketDialog meta={meta.meta} />
          ) : meta.category === "form" ? (
            <FormDialog />
          ) : null}
        </div>
        <div className="dialog__close" onClick={handleCloseClick}>
          <img
            src={require("../../images/common/close.png")}
            alt={meta.title}
          />
        </div>
      </div>
    </StyledDialog>
  );
};

const StyledDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: ${COLOR.white};
    width: 90%;
    margin: auto;
    padding: 30px 20px;

    @media ${DEVICE.tablet} {
      width: 40%;
      padding: 30px;
    }

    &__close {
      position: absolute;
      top: 1%;
      right: 1.5%;
      cursor: pointer;
      width: 15px;
    }
  }
`;

export default Dialog;
