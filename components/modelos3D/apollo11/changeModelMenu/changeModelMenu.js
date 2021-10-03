import React from "react";
import styled from "styled-components";

// Page Container
const ChangeModelNav = styled.nav`
  height: 30px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: #262626;
  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;

  // Buttons
  button {
    height: 100%;
    padding: 0px 25px 0px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #262626;
    border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    border: 0px;
  }

  // Hover Buttons Text Color
  button:hover {
    cursor: pointer;
  }

  button:hover > p {
    color: #6d6d6d;
  }

  // Active Button Color
  #buttonActive {
    background-color: #6d6d6d !important;
    color: #fff !important;
  }

  #buttonActive p:hover {
    color: #fff !important;
  }

  // Buttons Text
  button p {
    font-size: 0.8em;
    font-family: "Poppins", sans-serif;
    text-align: center;
    color: #fff;
    text-rendering: optimizeLegibility;
    transition: 0.2s;
    margin: 0px 0px 0px 0px;
    text-transform: uppercase;
  }
`;

export default class ChangeModelMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 1 };
  }

  handleSelect(key, modelsCategory) {
    this.props.toggleModels(modelsCategory);
    this.setState({ key });
  }

  render() {
    return (
      <ChangeModelNav activeKey={this.state.key}>
        <button
          eventKey={1}
          title="Model1"
          onClick={() => this.handleSelect(1, "model1")}
          id="buttonActive"
        >
          <p>Exterior</p>
        </button>
        <button
          eventKey={2}
          title="Model2"
          onClick={() => this.handleSelect(2, "model2")}
        >
          <p>Interior</p>
        </button>
        <button
          eventKey={3}
          title="Model3"
          onClick={() => this.handleSelect(3, "model3")}
        >
          <p>Exclusa</p>
        </button>
        <button
          eventKey={4}
          title="Model4"
          onClick={() => this.handleSelect(4, "model4")}
        >
          <p>360</p>
        </button>
        <button
          eventKey={4}
          title="Model4"
          onClick={() => this.handleSelect(4, "model4")}
        >
          <p>Galería</p>
        </button>
      </ChangeModelNav>
    );
  }
}
