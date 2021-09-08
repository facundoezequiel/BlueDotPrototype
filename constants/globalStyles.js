import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// Fonts
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

html, 
body {
  padding: 0 !important;
  margin: 0 !important;
  background-color: #faf5ef;
}

.no-selection {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`;

export default GlobalStyle;
