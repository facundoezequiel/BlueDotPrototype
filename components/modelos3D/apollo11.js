import styled from "styled-components";
import "@google/model-viewer";

const Apollo113DContainer = styled.div`
  width: 100%;
  height: calc(100% - 51px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 1;

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
    width: 50%;
    height: calc(100% - 51px);
    background-color: transparent;
    --poster-color: transparent;
    position: absolute;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  z-index: 1;
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

export default function Apollo3D() {
  return (
    <Apollo113DContainer>
      <Loading>
        <p className="modelLoading">LEYENDO INFORMACIÓN</p>
      </Loading>
      <model-viewer
        id="reveal"
        loading="eager"
        camera-controls
        auto-rotate
        ios-src=""
        src="./model/apollo11/scene.gltf"
        alt="Apollo 11 3D Model"
        slot="progress-bar"
        className="fadeIn"
        shadow-intensity="1"
        ar
      ></model-viewer>
      <Credits>
        <p id="reveal">Desarrollado por The Smithsonian Institute</p>
      </Credits>
    </Apollo113DContainer>
  );
}
