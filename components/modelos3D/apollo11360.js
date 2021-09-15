import styled from "styled-components";

const Apollo113603DContainer = styled.div`
  width: 100%;
  height: calc(100% - 51px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 1;

  #iframeApolloContainer {
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;

    iframe {
      width: 100% !important;
      height: 100% !important;
    }
  }

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

export default function Apollo3603D() {
  return (
    <Apollo113603DContainer>
      <Loading>
        <p className="modelLoading">LEYENDO INFORMACIÓN</p>
      </Loading>
      <div class="sketchfab-embed-wrapper" id="iframeApolloContainer">
        {" "}
        <iframe
          title="Apollo Command Module Interior Sphere Projection"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/b64f6007aa754cd296f3417a3a6f57ee/embed?autospin=0&autostart=1&camera=0&preload=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"
        >
          {" "}
        </iframe>{" "}
      </div>
      <Credits>
        <p id="reveal">Desarrollado por The Smithsonian Institute</p>
      </Credits>
    </Apollo113603DContainer>
  );
}
