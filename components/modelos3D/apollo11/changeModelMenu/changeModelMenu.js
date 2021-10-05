import React from "react";
import styled, { css } from "styled-components";

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
`;

const ModelButton = styled.button`
  height: 100%;
  padding: 0px 25px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;
  border: 0px;
  background-color: #262626;

  @keyframes changeBackground {
    from {
      background-color: #262626;
    }
    to {
      background-color: #6d6d6d;
    }
  }

  ${(props) =>
    props.active === 1 &&
    css`
      :nth-child(1) {
        animation: changeBackground 0.2s ease-in;
        background-color: #6d6d6d;
        :hover > p {
          color: #fff !important;
        }
      }
    `};

  ${(props) =>
    props.active === 2 &&
    css`
      :nth-child(2) {
        animation: changeBackground 0.2s ease-in;
        background-color: #6d6d6d;
        :hover > p {
          color: #fff !important;
        }
      }
    `};

  ${(props) =>
    props.active === 3 &&
    css`
      :nth-child(3) {
        animation: changeBackground 0.2s ease-in;
        background-color: #6d6d6d;
        :hover > p {
          color: #fff !important;
        }
      }
    `};

  ${(props) =>
    props.active === 4 &&
    css`
      :nth-child(4) {
        animation: changeBackground 0.2s ease-in;
        background-color: #6d6d6d;
        :hover > p {
          color: #fff !important;
        }
      }
    `};

  ${(props) =>
    props.active === 5 &&
    css`
      :nth-child(5) {
        animation: changeBackground 0.2s ease-in;
        background-color: #6d6d6d;
        :hover > p {
          color: #fff !important;
        }
      }
    `};

  ${(props) =>
    props.active === 6 &&
    css`
      :nth-child(6) {
        animation: changeBackground 0.2s ease-in;
        background-color: #6d6d6d;
        :hover > p {
          color: #fff !important;
        }
      }
    `};

  ${(props) =>
    props.active === 7 &&
    css`
      :nth-child(7) {
        animation: changeBackground 0.2s ease-in;
        background-color: #6d6d6d;
        :hover > p {
          color: #fff !important;
        }
      }
    `};

  // Hover Buttons Text Color
  :hover {
    cursor: pointer;
  }

  :hover > p {
    color: #999999;
  }

  // Buttons Text
  p {
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

var number = 1;

export default class ChangeModelMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 1 };
  }

  handleSelect(key, modelsCategory) {
    this.props.toggleModels(modelsCategory);
    this.setState({ key });
    number = key;
  }

  render() {
    return (
      <ChangeModelNav activeKey={this.state.key}>
        <ModelButton
          eventKey={1}
          title="Model1"
          onClick={() => this.handleSelect(1, "model1")}
          active={number}
        >
          <p>Exterior</p>
        </ModelButton>
        <ModelButton
          eventKey={2}
          title="Model2"
          onClick={() => this.handleSelect(2, "model2")}
          active={number}
        >
          <p>Interior</p>
        </ModelButton>
        <ModelButton
          eventKey={3}
          title="Model3"
          onClick={() => this.handleSelect(3, "model3")}
          active={number}
        >
          <p>Exclusa</p>
        </ModelButton>
        <ModelButton
          eventKey={4}
          title="Model4"
          onClick={() => this.handleSelect(4, "model4")}
          active={number}
        >
          <p>360</p>
        </ModelButton>
        <ModelButton
          eventKey={5}
          title="Model5"
          onClick={() => this.handleSelect(5, "model5")}
          active={number}
        >
          <p>Casco</p>
        </ModelButton>
        <ModelButton
          eventKey={6}
          title="Model6"
          onClick={() => this.handleSelect(6, "model6")}
          active={number}
        >
          <p>Guante</p>
        </ModelButton>
        <ModelButton
          eventKey={7}
          title="Model7"
          onClick={() => this.handleSelect(7, "model7")}
          active={number}
        >
          <p>Galería</p>
        </ModelButton>
      </ChangeModelNav>
    );
  }
}
