import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  // Fonts
  @font-face {
    font-family: "D-DIN";
    src: url("/Fonts/d-din/D-DIN.woff") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "D-DIN-Bold";
    src: url("/Fonts/d-din/D-DIN-Bold.woff") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');

  // Selection

  ::-moz-selection {
    color: #000;
    background: #fff;
  }

  ::selection {
    color: #000;
    background: #fff;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #171717;
  }

   // TopIn Animation

  .topIn {
    animation-name: topIn;
    animation-duration: 0.6s;
    animation-iteration-count: initial;
    animation-timing-function: ease-out;
  }

  @keyframes topIn {
    from {
      transform: translate(0, 90px);
      opacity: 0%;
    }
    90% {
      opacity: 100%;
    }
    to {
      transform: translate(0, 0px);
    }
  }

  .topInDelay {
    animation-name: topInDelay;
    animation-duration: 0.8s;
    animation-iteration-count: initial;
    animation-timing-function: ease-out;
  }

  @keyframes topInDelay {
    from {
      transform: translate(0, 90px);
      opacity: 0%;
    }
    20% {
      transform: translate(0, 90px);
      opacity: 0%;
    }
    90% {
      opacity: 100%;
    }
    to {
      transform: translate(0, 0px);
    }
  }

  #reveal, #iframeApolloContainer {
    animation-name: fadeIn;
    animation-duration: 4s;
    animation-iteration-count: initial;
    animation-timing-function: linear;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0%;
    }
    75% {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  .leftIn {
    animation-name: leftIn;
    animation-duration: 1.5s;
    animation-iteration-count: initial;
    animation-timing-function: ease-out;
  }
  
  @keyframes leftIn {
    from {
      transform: translate(-70px, 0px) rotate(180deg);
    }
    to {
      transform: translate(0px, 0px)  rotate(180deg);
    }
  }

  .opacityIn {
    animation-name: opacityIn;
    animation-duration: 1.5s;
    animation-iteration-count: initial;
    animation-timing-function: ease-out;
  }
  
  @keyframes opacityIn {
    from {
      opacity: 0%;
    }
    30% {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;
