import { useContext } from "react";
import styled from "styled-components";
import DialogContext from "../contexts/DialogContent";
import { DEVICE } from "../utils/device";
import { COLOR, FONT } from "../utils/styles";

const DriveCard = ({ meta }) => {
  const { setDialogData } = useContext(DialogContext);

  return (
    <StyledDriveCard
      onClick={() => {
        setDialogData({ meta: meta, open: true, category: "drive" });
      }}
    >
      <div className="img">
        <img
          src={require(`../images/home/drive/${meta.img}`)}
          alt={meta.title}
        />
        <img
          className="icon"
          src={require(`../images/home/drive/icon.png`)}
          alt={meta.title}
        />
      </div>
      <div className="text">
        <div className="title">{meta.title}</div>
        <div className="btn">我要試駕</div>
      </div>
    </StyledDriveCard>
  );
};

const StyledDriveCard = styled.div`
  padding: 10px;
  width: calc(50% - 10px);
  background-color: ${COLOR.white};
  margin: 5px;

  @media ${DEVICE.tablet} {
    width: calc(25% - 20px);
    margin: 10px;
  }

  .img {
    position: relative;
    margin-bottom: 10px;

    .icon {
      width: 25%;
      position: absolute;
      bottom: -15%;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }
  }

  .text {
    text-align: center;
    padding: 15px 0px 10px;
    .title {
      font-size: ${FONT.s};
      color: ${COLOR.darkGrey};
      padding: 15px 0px;

      @media ${DEVICE.tablet} {
        font-size: ${FONT.m};
      }
    }
    .btn {
      background-color: ${COLOR.grey};
      color: ${COLOR.white};
      padding: 5px 15px;
      border-radius: 20px;
      display: inline;
      font-size: ${FONT.xs};
      cursor: pointer;

      @media ${DEVICE.tablet} {
        font-size: ${FONT.s};
      }
    }
  }
`;

export default DriveCard;
