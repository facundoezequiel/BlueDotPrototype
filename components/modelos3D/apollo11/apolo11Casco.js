import styled from "styled-components";
import "@google/model-viewer";

const Apolo11Casco3DContainer = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  align-content: center;
  align-items: center;
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

export default function ApoloCasco3D() {
  return (
    <Apolo11Casco3DContainer>
      <Loading>
        <p className="modelLoading">LEYENDO INFORMACIÓN</p>
      </Loading>
      <model-viewer
        id="reveal"
        loading="eager"
        camera-controls
        auto-rotate
        ios-src=""
        src="./model/apolo11Casco/scene.gltf"
        alt="Apolo 11 Casco 3D Model"
        slot="progress-bar"
        className="fadeIn"
        shadow-intensity="1"
        ar
      ></model-viewer>
      <Credits>
        <p id="reveal">Desarrollado por The Smithsonian Institute</p>
      </Credits>
    </Apolo11Casco3DContainer>
  );
}
