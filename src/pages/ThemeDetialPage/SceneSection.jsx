import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { COLOR, FONT } from "../../utils/styles";

const SceneSection = ({ meta }) => {
  return (
    <StyledSceneSection>
      <div className="scenes">
        {meta.scenes.map((element, index) => {
          return (
            <div key={index} className="scene">
              <div className="scene__img">
                <img
                  src={require(`../../images/themeDetial/${element.img}`)}
                  alt={meta.title}
                />
              </div>

              <div className="scene__text">
                <div className="scene__title">{element.title}</div>
                <div className="scene__desc">{element.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledSceneSection>
  );
};

const StyledSceneSection = styled.section`
  .scenes {
    padding: 0px 15px;
    max-width: 1200px;
    margin: auto;
    margin-top: 150px;

    @media ${DEVICE.tablet} {
      margin-top: 10%;
    }

    .scene {
      display: flex;
      justify-content: space-around;
      margin-bottom: 50px;

      &:nth-child(2) {
        flex-direction: row-reverse;
      }

      @media ${DEVICE.tablet} {
        align-items: center;
      }

      &__img {
        width: 50%;
        margin-right: 10px;

        @media ${DEVICE.tablet} {
          width: 30%;
        }
      }

      &__text {
        width: 50%;
        color: ${COLOR.white};
      }

      &__title {
        font-size: ${FONT.m};
        margin-bottom: 5px;
        @media ${DEVICE.tablet} {
          font-size: ${FONT.xl};
          margin-bottom: 20px;
        }
      }

      &__desc {
        @media ${DEVICE.tablet} {
          font-size: ${FONT.m};
          line-height: ${FONT.xl};
          margin-bottom: 20px;
        }
      }
    }
  }
`;

export default SceneSection;
