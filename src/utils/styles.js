import { keyframes } from "@emotion/react";

export const COLOR = {
  black: "#333333",
  white: "#ffffff",
  hoverBg: "#ff7e35",
  darkGreen: "#228773",
  orange: "#ff7e35",
  darkGrey: "#666666",
  grey: "#b3b3b3",
  footerBg: "#e6e6e6",
};

export const FONT = {
  xs: "14px",
  s: "16px",
  m: "20px",
  l: "24px",
  xl: "30px",
};

export const fadeInUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(40px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}`;
