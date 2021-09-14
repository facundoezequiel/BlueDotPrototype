import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

const MainTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  canvas {
    margin: 0 auto !important;
    width: 1200px !important;
    height: auto !important;
    pointer-events: none !important;
  }
`;

const H1 = styled.h1`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 3em;
  font-family: "D-DIN-Bold", sans-serif;
  letter-spacing: 0px;
  font-weight: normal;
  margin: -40px 0px 0px 0px;
`;

const H2 = styled.h2`
  width: 50%;
  text-align: center;
  color: #fff;
  font-size: 0.9em;
  font-family: "D-DIN", sans-serif;
  letter-spacing: 0px;
  line-height: 180%;
  font-weight: 100;
  margin: 30px 0px 0px 0px;
  text-transform: uppercase;
`;

const Name = styled.p`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 0.9em;
  font-family: "D-DIN", sans-serif;
  letter-spacing: 0px;
  font-weight: 100;
  margin: 25px 0px 0px 0px;
`;

export default function MainTitle() {
  const globeEl = useRef();
  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = -2;
  }, []);
  return (
    <MainTitleContainer>
      <Globe
        ref={globeEl}
        autoRotate={true}
        globeImageUrl="./tierra.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="gray"
        atmosphereAltitude={0.1}
        rendererConfig={{ antialias: true, alpha: true }}
        pointAltitude={1}
      />
      <H1 className="topIn">A PALE BLUE DOT</H1>
      <H2 className="topInDelay">
        Multimedia y tecnología aplicada para la transformación participativa
        del Museo Argentino de Ciencias Naturales
      </H2>
      <Name className="topInDelay">Facundo E. Brahim</Name>
    </MainTitleContainer>
  );
}
