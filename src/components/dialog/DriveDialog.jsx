import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const DriveDialog = ({ meta }) => {
  return (
    <StyledDriveDialog>
      <div className="dialog__img">
        <img
          src={require(`../../images/home/drive/${meta.img}`)}
          alt={meta.title}
        />
      </div>

      <div className="dialog__text">
        <div className="dialog__title">{meta.title}</div>
        <p>{meta.desc}</p>
        <div className="dialog__form">
          <div className="dialog__form-head">
            填寫資料（<span className="mark">*</span>號為必填）
          </div>
          <div className="dialog__form-info">
            <div className="dialog__form-name">
              <label for="name">
                <span className="mark">*</span>姓名：
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="dialog__form-sex">
              <div>
                <span className="mark">*</span>性別：
              </div>
              <div>
                <input type="radio" id="male" name="sex" value="male" /> 
                <label for="male">男</label>
                <input type="radio" id="female" name="sex" value="female" /> 
                <label for="female">女</label>
              </div>
            </div>
            <div className="dialog__form-phone">
              <label for="phone">
                <span className="mark">*</span>手機：
              </label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>

          <div className="dialog__form-btn">送出資料</div>
        </div>
      </div>
    </StyledDriveDialog>
  );
};

const StyledDriveDialog = styled.div`
  .dialog {
    &__text {
      @media ${DEVICE.tablet} {
        font-size: ${FONT.m};
      }
    }
    &__title {
      margin: 15px 0px;
      padding-bottom: 15px;
      border-bottom: 1px dotted ${COLOR.grey};
    }

    &__form {
      margin: 15px 0px;
      color: ${COLOR.formColor};
      .mark {
        color: ${COLOR.red};
      }
      &-head {
        margin-bottom: 15px;
      }

      &-info {
        padding-left: 20px;

        input {
          margin-bottom: 15px;
          border-radius: 10px;
          line-height: ${FONT.m};
          border: 1px solid ${COLOR.grey};
          padding: 5px 15px;

          @media ${DEVICE.tablet} {
            font-size: ${FONT.l};
          }
        }
      }

      &-sex {
        display: flex;
        label {
          margin-right: 15px;
          cursor: pointer;
        }
        input {
          cursor: pointer;
        }
      }

      &-btn {
        background-color: ${COLOR.subOrange};
        color: ${COLOR.white};
        padding: 10px;
        width: 60%;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        margin: 30px auto 20px;
      }
    }
  }
`;

export default DriveDialog;
