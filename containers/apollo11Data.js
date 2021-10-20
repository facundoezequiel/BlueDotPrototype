import React, { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import ChangeModelMenu from "../components/modelos3D/apollo11/changeModelMenu/changeModelMenu";

// Dynamic import for model component
const Moon3D = dynamic(() => import("../components/modelos3D/apollo11/moon"), {
  ssr: false,
});

// Dynamic import for model component
const Apollo113D = dynamic(
  () => import("../components/modelos3D/apollo11/apollo11"),
  {
    ssr: false,
  }
);

// Dynamic import for model component
const ApoloInterior3D = dynamic(
  () => import("../components/modelos3D/apollo11/apolo11Interior"),
  {
    ssr: false,
  }
);

// Dynamic import for model component
const ApoloExclusa3D = dynamic(
  () => import("../components/modelos3D/apollo11/apolo11Exclusa"),
  {
    ssr: false,
  }
);

// Dynamic import for model component
const Apollo113603D = dynamic(
  () => import("../components/modelos3D/apollo11/apollo11360"),
  {
    ssr: false,
  }
);

// Dynamic import for model component
const Apolo11Casco3D = dynamic(
  () => import("../components/modelos3D/apollo11/apolo11Casco"),
  {
    ssr: false,
  }
);

// Page Container
const Apollo11DataContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

// Header
const Header = styled.header`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: #111;

  // Logo Container
  #logoContainer {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin-left: 80px;
  }

  // Logo Image
  #logoContainer img {
    width: 20%;
    height: auto;
    display: block;
  }

  // Buttons Container
  #buttonsContainer {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin-right: 80px;
  }

  // Menu Button Container
  #menuButtonContainer {
    height: 1.4%;
    width: 1.4%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 1px 0px 0px 10px;
    cursor: pointer;
    transition: 0.1s;
  }

  #menuButtonContainer:hover {
    transform: scale(1.2);
  }

  #menuButtonContainer img {
    width: 100%;
    display: block;
  }
`;

// Model Viwer section
const ModelViwer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;

export default class Apollo11Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      currentMode: "model1",
    };
  }

  getModels(currentMode) {
    const models = {
      model1: <Moon3D />,
      // Exterior
      model2: <Apollo113D />,
      // Interior
      model3: <ApoloInterior3D />,
      // Exclusa
      model4: <ApoloExclusa3D />,
      // Interior 360
      model5: <Apollo113603D />,
      // Casco
      model6: <Apolo11Casco3D />,
      model7: <Apollo113603D />,
      model8: <Apollo113603D />,
    };
    return models[currentMode];
  }

  toggleModels = (currentMode) => {
    this.setState({ currentMode });
  };

  render() {
    return (
      <Apollo11DataContainer>
        <Header>
          <div id="logoContainer" className="opacityIn">
            <a></a>
            <img alt="Blue Dot Logo" src="logos/BlueDotLogo.svg" />
          </div>
          <div id="buttonsContainer" className="opacityIn">
            <ChangeModelMenu toggleModels={this.toggleModels}></ChangeModelMenu>
            <a id="menuButtonContainer">
              <img akt="Menu Image Button" src="icons/menu.svg" />
            </a>
          </div>
        </Header>
        <ModelViwer>{this.getModels(this.state.currentMode)}</ModelViwer>
      </Apollo11DataContainer>
    );
  }
}
