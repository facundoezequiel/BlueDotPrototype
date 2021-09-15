import styled from "styled-components";
import dynamic from "next/dynamic";

// Dynamic import for model component
const Apollo113D = dynamic(() => import("../components/modelos3D/apollo11"), {
  ssr: false,
});

// Dynamic import for model component
const Apollo113603D = dynamic(
  () => import("../components/modelos3D/apollo11360"),
  {
    ssr: false,
  }
);

// Page Container
const Apollo11DataContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  #titleAside {
    width: 50px;
    height: 100vh;
    background-color: #000;
    border-right: 1px #333 solid;
    z-index: 5;
  }

  #backButton {
    width: 100%;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    border-bottom: 1px #333 solid;
    color: white;
    cursor: pointer;
  }

  #backButton img {
    display: block;
    width: 45%;
    margin: 0 auto;
    height: auto;
  }

  #titleDiv {
    height: calc(100% - 51px);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  #titleDiv div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  #titleDiv h1 {
    margin: 0 auto;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    margin-top: 20px;
    color: #fff;
    font-size: 1.5em;
    text-align: right;
    font-family: "D-DIN-Bold", sans-serif;
    text-transform: uppercase;
    line-height: 0%;
  }

  #titleDiv p {
    line-height: 140%;
    margin: 0 auto;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    margin-bottom: 20px;
    color: #666;
    font-size: 0.9em;
    text-align: left;
    font-family: "D-DIN", sans-serif;
  }
`;

// Information section
const Information = styled.section`
  width: calc(50% - 52px);
  border-right: 1px #333 solid;
  display: flex;
  color: white;
`;

// Logo Blue Dot Container
const LogoContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px #333 solid;
  display: flex;
  color: white;
`;

// Model Viwer section
const ModelViwer = styled.section`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

// Buttons Menu Container
const ButtonsMenuContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px #333 solid;
  display: flex;
  justify-content: space-between;

  #modelButtonsContainer {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }

  #modelButtonsContainer button {
    width: auto;
    padding: 0px 30px 0px 30px;
    height: 100%;
    background-color: #000;
    border: 0;
    border-right: 1px #333 solid;
    transition: 0.2s;
    text-transform: uppercase;
  }

  #modelButtonsContainer button p {
    color: #fff;
    font-size: 0.9em;
    text-align: center;
    font-family: "D-DIN", sans-serif;
    text-rendering: optimizeLegibility;
  }

  #buttonActive {
    background-color: #222 !important;
  }

  #modelButtonsContainer button:hover {
    background-color: #fff !important;
    cursor: pointer;
  }

  #modelButtonsContainer button:hover > p {
    color: #000;
  }
`;

export default function Apollo11Data() {
  return (
    <Apollo11DataContainer>
      <aside id="titleAside">
        <div id="backButton">
          <img src="./icons/back.svg" className="opacityIn" />
        </div>
        <div id="titleDiv">
          <div>
            <h1 className="opacityIn">Apollo 11</h1>
            <p className="opacityIn">
              Museo Argentino de Ciencias Naturales<br></br>Bernardino Rivadavia
              CONICET
            </p>
          </div>
        </div>
      </aside>
      <Information>
        <LogoContainer>
          <img src="" />
        </LogoContainer>
      </Information>
      <ModelViwer>
        <ButtonsMenuContainer>
          <div id="modelButtonsContainer">
            <button id="buttonActive">
              <p className="opacityIn">Exterior</p>
            </button>
            <button>
              <p className="opacityIn">Interior</p>
            </button>
            <button>
              <p className="opacityIn">Exclusa</p>
            </button>
            <button>
              <p className="opacityIn">360</p>
            </button>
          </div>
          <div id="menuButtonContainer">
            <p>Menu</p>
          </div>
        </ButtonsMenuContainer>
        <Apollo113D></Apollo113D>
      </ModelViwer>
    </Apollo11DataContainer>
  );
}
