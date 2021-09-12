import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

const MainTitleContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

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
  color: #333;
  font-size: 3em;
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  line-height: 140%;
  font-weight: 700;
  margin: 0px 0px 0px 0px;
`;

const H2 = styled.h2`
  width: 50%;
  text-align: center;
  color: #333;
  font-size: 1em;
  font-family: "Rubik", sans-serif;
  letter-spacing: 1px;
  line-height: 150%;
  font-weight: 100;
  margin: 30px 0px 0px 0px;
`;

export default function MainTitle() {
  const globeEl = useRef();
  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 2;
  }, []);
  return (
    <MainTitleContainer>
      <H1>A Pale Blue Dot</H1>
      <H2>
        Multimedia y tecnología aplicada para la transformación participativa
        del Museo Argentino de Ciencias Naturales
      </H2>
      <Globe
        ref={globeEl}
        autoRotate={true}
        globeImageUrl="./tierra.jpg"
        backgroundColor="rgba(250,245,239,0)"
        showAtmosphere={true}
        atmosphereColor="gray"
        atmosphereAltitude={0}
        rendererConfig={{ antialias: true, alpha: true }}
        pointAltitude={1}
      />
    </MainTitleContainer>
  );
}
