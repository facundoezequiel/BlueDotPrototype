import styled from "styled-components";
import "@google/model-viewer";

const Voyager3DContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  z-index: 1;

  .modelLoading {
    animation-name: loadingFadeIn;
    animation-duration: 3s;
    animation-iteration-count: initial;
    animation-timing-function: linear;
  }

  @keyframes loadingFadeIn {
    from {
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
    position: absolute;
  }
`;

const Loading = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  z-index: 1;
  color: white;

  p {
    font-size: 1em;
    color: #fff;
    font-family: "D-DIN-Bold", sans-serif;
    opacity: 0%;
  }
`;

export default function Voyager3D() {
  return (
    <Voyager3DContainer>
      <Loading>
        <p className="modelLoading">LEYENDO INFORMACIÓN</p>
      </Loading>
      <model-viewer
        id="reveal"
        loading="eager"
        camera-controls
        auto-rotate
        ios-src=""
        src="./model/voyager/scene.gltf"
        alt="Voyager 1 3D Model"
        slot="progress-bar"
        className="fadeIn"
        shadow-intensity="1"
        ar
      ></model-viewer>
    </Voyager3DContainer>
  );
}
