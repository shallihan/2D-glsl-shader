import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Sprat';
    font-weight: 100 !important;
	font-size: 2.5rem;
	line-height: 1.25;
	background-color: #222222;
	color: #ffffff;
    position: relative;
  }

  canvas {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vmax;
    height: 100vmax;
    pointer-events: none;
    z-index: -1;
  }
`;

export default GlobalStyles;
