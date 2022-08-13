import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/header/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { DEVICE } from "../../utils/device";
import { COLOR } from "../../utils/styles";
import { menu } from "../../utils/data";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getActiveClass = (element) => {
    if (location.pathname === element) {
      return "nav__link--active";
    }
    return "";
  };

  const openMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const getOpenClass = () => {
    if (isOpen) {
      return "open";
    }
  };

  return (
    <StyledHeader>
      <div className={`container header ${getOpenClass()}`}>
        <StyledLogo>
          <Link to="/" className="logo">
            <Logo />
          </Link>
        </StyledLogo>

        <StyledNav className="nav m-none">
          <ul className="nav__ul">
            {menu.map((element, index) => {
              return (
                <li key={index} onClick={closeMobileMenu}>
                  <Link
                    className={`nav__link ${getActiveClass(element.pathname)}`}
                    to={element.pathname}
                  >
                    {element.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </StyledNav>

        <StyledBurger className="pc-none burger" onClick={openMobileMenu}>
          <div className="burger__box">
            <span className="burger__line burger__line1"></span>
            <span className="burger__line burger__line2"></span>
            <span className="burger__line burger__line3"></span>
          </div>
        </StyledBurger>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: auto;
  position: fixed;
  top: 0px;
  z-index: 2;
  width: 100%;
  background-color: hsl(0, 0%, 100%, 0.6);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    @media ${DEVICE.tablet} {
      height: 65px;
    }

    &.open {
      .nav {
        display: block;
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100vh;
        background-color: hsl(0, 0%, 100%, 0.9);
        border-radius: 5px;

        &__ul {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -40%);
        }

        &__link {
          display: block;
          width: 80px;
          text-align: center;
          padding: 5px 0px;
          cursor: pointer;
          margin-bottom: 20px;

          &:hover,
          &--active {
            color: ${COLOR.white};
            background-color: ${COLOR.hoverBg};
            border-radius: 20px;
          }
        }
      }
      .burger {
        &__line1 {
          transform: rotate(45deg);
        }
        &__line2 {
          opacity: 0;
        }
        &__line3 {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

const StyledLogo = styled.div`
  width: 150px;
  z-index: 2;

  @media ${DEVICE.tablet} {
    width: 200px;
  }
`;

const StyledNav = styled.nav`
  @media ${DEVICE.tablet} {
    .nav {
      &__ul {
        display: flex;
      }

      &__link {
        display: block;
        width: 80px;
        text-align: center;
        padding: 3px 5px;
        cursor: pointer;
        margin-right: 5px;

        &:hover,
        &--active {
          color: ${COLOR.white};
          background-color: ${COLOR.hoverBg};
          border-radius: 20px;
        }
      }
    }
  }
`;

const StyledBurger = styled.div`
  width: 50px;
  height: 35px;
  cursor: pointer;
  border: 1px solid ${COLOR.white};
  border-radius: 5px;
  z-index: 2;

  .burger {
    &__box {
      height: 35px;
    }
    &__line {
      width: 26px;
      height: 2px;
      background-color: ${COLOR.darkGreen};
      display: block;
      margin: 6.5px auto;
      transform-origin: 1px 1px;
      transition: all 300ms ease-in-out;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export default Header;
