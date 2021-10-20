import styled from "styled-components";
import "@google/model-viewer";

const Apolo11Interior3DContainer = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;

  .modelLoading {
    animation-name: loadingFadeIn;
    animation-duration: 3s;
    animation-iteration-count: initial;
    animation-timing-function: linear;
  }

  @keyframes loadingFadeIn {
    from {
      opacity: 0%;
    }
    25% {
      opacity: 100%;
    }
    85% {
      opacity: 100%;
    }
    to {
      opacity: 0%;
    }
  }

  model-viewer {
    width: 100%;
    height: 100%;
    background-color: transparent;
    --poster-color: transparent;
  }
`;

const Information = styled.div`
  width: 50%;
  height: 100%;
  background-color: #171717;
  color: white;

  div {
    width: calc(100% - 60px);
    padding: 40px 30px 10px 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }

  div h1 {
    width: 100%;
    margin: 0px 0px 0px 0px;
    font-size: 2em;
    font-family: "D-DIN-Bold", sans-serif;
    text-align: left;
    color: #fff;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
  }

  h3 {
    width: 100%;
    font-family: "D-DIN", sans-serif;
    text-align: left;
    color: #fff;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
    margin: 20px 0px 0px 0px;
    font-size: 0.9em;
    letter-spacing: 1px;
  }
`;

const Model = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  z-index: 0;
  color: white;

  p {
    text-align: center;
    font-size: 1em;
    color: #fff;
    font-family: "D-DIN-Bold", sans-serif;
    opacity: 0%;
  }
`;

const Credits = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 2 !important;

  p {
    text-align: center;
    font-size: 0.8em;
    margin: 0;
    color: #666;
    font-family: "D-DIN", sans-serif;
  }
`;

export default function ApoloInterior3D() {
  return (
    <Apolo11Interior3DContainer>
      <Information>
        <div>
          <h1 className="opacityIn">MISIÓN APOLO 11</h1>
          <h3 className="opacityIn">INTERIOR</h3>
        </div>
      </Information>
      <Model>
        <Loading>
          <p className="modelLoading">LEYENDO INFORMACIÓN</p>
        </Loading>
        <model-viewer
          id="reveal"
          loading="eager"
          camera-controls
          auto-rotate
          ios-src=""
          src="./model/apolo11Interior/scene.gltf"
          alt="Apolo 11 Interior 3D Model"
          slot="progress-bar"
          className="fadeIn"
          shadow-intensity="1"
          ar
        ></model-viewer>
        <Credits>
          <p id="reveal">Desarrollado por The Smithsonian Institute</p>
        </Credits>
      </Model>
    </Apolo11Interior3DContainer>
  );
}
