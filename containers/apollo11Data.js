import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import ChangeModelMenu from "../components/modelos3D/apollo11/changeModelMenu/changeModelMenu";

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

  // Menu Button Container
  #menuButtonContainer {
    height: 30px;
    padding: 0px 25px 0px 25px;
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    background-color: #262626;
    border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
  }
`;

// Information section
const Information = styled.section`
  width: 50%;
  background-color: #171717;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  color: white;
`;

// Model Viwer section
const ModelViwer = styled.section`
  width: 50%;
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
      model1: <Apollo113D />,
      model2: <ApoloInterior3D />,
      model3: <ApoloExclusa3D />,
      model4: <Apollo113603D />,
      model5: <Apollo113603D />,
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
          <ChangeModelMenu toggleModels={this.toggleModels}></ChangeModelMenu>
          <div id="menuButtonContainer">Menu</div>
        </Header>
        <Information>hola</Information>
        <ModelViwer>{this.getModels(this.state.currentMode)}</ModelViwer>
      </Apollo11DataContainer>
    );
  }
}
