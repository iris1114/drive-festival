import { Link } from "react-router-dom";
import styled from "styled-components";

const ExhibitionInfo = ({ meta }) => {
  return (
    <StyledExhibitionInfo className="info">
      <div className="info__text">
        <div className="info__top">
          <Link to={`/exhibition/${meta.id}`} target={meta.target}>
            <img
              className="info__btn"
              src={require(`../images/home/exhibition/${meta.btnImg}`)}
              alt={meta.title}
            />
            <img
              className="info__title"
              src={require(`../images/home/exhibition/${meta.titleImg}`)}
              alt={meta.title}
            />
          </Link>
        </div>
        <p className="info__desc">{meta.desc}</p>
      </div>

      <div className="info__img">
        <Link to={`/exhibition/${meta.id}`} target={meta.target}>
          <img
            src={require(`../images/home/exhibition/${meta.img}`)}
            alt={meta.title}
          />
        </Link>
      </div>
    </StyledExhibitionInfo>
  );
};

const StyledExhibitionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;

  .info {
    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }

    &__btn {
      width: 30%;
      margin-right: 15px;
      cursor: pointer;
    }

    &__title {
      width: 50%;
    }

    &__desc {
      max-width: 260px;
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

export default ExhibitionInfo;
