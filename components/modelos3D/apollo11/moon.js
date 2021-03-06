import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import moonfont from "./moonFont.json";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

const Moon3DContainer = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  overflow: hidden;
  overflow-y: hidden;

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

  canvas {
    margin: 0 auto !important;
    width: auto !important;
    height: auto !important;
    // Desactiva todos los eventos del mouse sobre el canvas
    // pointer-events: none !important;
    // transform: scale(0.9);
    z-index: 98;
  }
`;

const Information = styled.div`
  width: 50%;
  height: 100%;
  background-color: #171717;
  color: white;
  z-index: 99;

  #titleContainer {
    width: calc(100% - 180px);
    margin: 0 auto;
    padding: 60px 0px 10px 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }

  #titleContainer h1 {
    width: 100%;
    margin: 0px 0px 0px 0px;
    font-size: 2em;
    font-family: "D-DIN-Bold", sans-serif;
    text-align: left;
    color: #fff;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
  }

  #titleContainer h3 {
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

  #textContainer {
    width: calc(100% - 180px);
    margin: 0 auto;
    padding: 40px 30px 10px 30px;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-gap: 80px;
    -moz-column-gap: 80px;
    column-gap: 80px;
  }

  #textContainer p {
    margin: 0px 0px 0px 0px;
    text-rendering: optimizeLegibility;
    text-align: justify;
    color: #fff;
    line-height: 200%;
    font-size: 0.68em;
    font-family: "Poppins", sans-serif;
  }
`;

const Model = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #000000;

  #globeContainer {
    width: auto;
    height: auto;
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

export default function Moon3D() {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = -1;
  }, []);

  const markers = [
    {
      lat: 0.6737,
      lng: 23.47295,
      label: "APOLO 11 (1969)",
      color: "red",
      orientation: "right",
      program: "Apollo",
      agency: "NASA",
      date: "1969-7-20",
      url: "https://en.wikipedia.org/wiki/Apollo_11",
    },
    {
      lat: -1.01184,
      lng: -23.42156,
      label: "APOLO 12 (1969)",
      color: "white",
      orientation: "right",
      program: "Apollo",
      agency: "NASA",
      date: "1969-11-19",
      url: "https://en.wikipedia.org/wiki/Apollo_12",
    },
    {
      lat: -4.6445,
      lng: -17.47753,
      label: "APOLO 14 (1971)",
      color: "white",
      orientation: "right",
      program: "Apollo",
      agency: "NASA",
      date: "1971-2-5",
      url: "https://en.wikipedia.org/wiki/Apollo_14",
    },
    {
      lat: 26.13407,
      lng: 3.62981,
      label: "APOLO 15 (1971)",
      color: "white",
      orientation: "right",
      program: "Apollo",
      agency: "NASA",
      date: "1971-7-30",
      url: "https://en.wikipedia.org/wiki/Apollo_15",
    },
    {
      lat: -8.97477,
      lng: 15.49749,
      label: "APOLO 16 (1972)",
      color: "white",
      orientation: "right",
      program: "Apollo",
      agency: "NASA",
      date: "1972-4-21",
      url: "https://en.wikipedia.org/wiki/Apollo_16",
    },
    {
      lat: 20.18935,
      lng: 30.76996,
      label: "APOLO 17 (1972)",
      color: "white",
      orientation: "right",
      program: "Apollo",
      agency: "NASA",
      date: "1972-12-11",
      url: "https://en.wikipedia.org/wiki/Apollo_17",
    },
  ];

  return (
    <Moon3DContainer>
      <Information>
        <div className="opacityIn" id="titleContainer">
          <h1>MISI??N APOLO 11</h1>
          <h3>M??DULO DE COMANDO</h3>
        </div>
        <div className="opacityIn" id="textContainer">
          <p>
            Apolo 11 fue la quinta misi??n tripulada del Programa Apolo de los
            Estados Unidos y la primera de la historia en lograr que un ser
            humano llegara a la Luna. La nave Apolo de la misi??n se envi?? al
            espacio el 16 de julio de 1969, realiz?? su alunizaje el 20 de julio
            de ese mismo a??o y al d??a siguiente dos astronautas (Armstrong y
            Aldrin) se convirtieron en los primeros en caminar sobre la
            superficie lunar. El Apolo 11 fue impulsado por un cohete Saturno V
            desde la plataforma LC 39A y lanzado a las 13:32 UTC del complejo de
            cabo Kennedy, en Florida (EE. UU.). Oficialmente se conoci?? a la
            misi??n como AS-506. La misi??n fue un hito decisivo de la NASA contra
            el programa espacial de la Uni??n Sovi??tica durante la carrera
            espacial y est?? considerada como uno de los momentos m??s
            significativos en la historia de la humanidad.
          </p>
          <br />
          <p>
            La tripulaci??n del Apolo 11 estaba constituida por el comandante de
            la misi??n Neil A. Armstrong, de 38 a??os; Edwin E. Aldrin Jr., de 39
            a??os y piloto del LEM, apodado Buzz; y Michael Collins, de 38 a??os y
            piloto del m??dulo de mando. La denominaci??n de las naves, privilegio
            del comandante, fue Eagle para el m??dulo lunar y Columbia para el
            m??dulo de mando.
          </p>
          <br />
          <p>
            El comandante Armstrong fue el primer ser humano que pis?? la
            superficie del sat??lite terrestre el 21 de julio de 1969 a las 2:56
            (hora internacional UTC) al sur del Mar de la Tranquilidad (Mare
            Tranquillitatis), seis horas y media despu??s de haber alunizado.
            Este hito hist??rico se retransmiti?? a todo el planeta desde las
            instalaciones del Observatorio Parkes (Australia). Inicialmente el
            paseo lunar iba a ser retransmitido a partir de la se??al que llegase
            a la estaci??n de seguimiento de Goldstone (California, EE. UU.),
            perteneciente a la Red del Espacio Profundo, pero ante la mala
            recepci??n de la se??al se opt?? por utilizar la se??al de la estaci??n
            Honeysuckle Creek, cercana a Camberra (Australia).1??? Esta
            retransmiti?? los primeros minutos del paseo lunar, tras los cuales
            la se??al del observatorio Parkes fue utilizada de nuevo durante el
            resto del paseo lunar.2??? Las instalaciones del MDSCC en Robledo de
            Chavela (Madrid, Espa??a) tambi??n pertenecientes a la Red del Espacio
            Profundo, sirvieron de apoyo durante todo el viaje de ida y vuelta.
          </p>
          <br />
          <p>
            El 24 de julio, los tres astronautas lograron un perfecto amerizaje
            en aguas del oc??ano Pac??fico, poniendo fin a la misi??n.
          </p>
        </div>
      </Information>
      <Model>
        <Loading>
          <p className="modelLoading">LEYENDO INFORMACI??N</p>
        </Loading>
        <div id="globeContainer" id="reveal">
          <Globe
            ref={globeEl} // Nombre de referencia
            animateIn={false} // Animaci??n de entrada desactivada
            labelsData={markers} // Toma los puntos de la constante markers
            labelText="label" // Toma los nombres de los puntos del label en cada marker
            labelSize={1.6} // Tama??o del texto en los markers
            labelDotRadius={0.7} // Tama??o del punto en los markers}
            labelResolution={20} // Resolucion de render de los labels
            labelAltitude={0.06} // Altitud del marker
            labelColor="color" // Toma los colores de los puntos del label en caba marker
            labelDotOrientation="orientation" // Toma la posicion del texto de los puntos del label en cada marker
            autoRotate={true} // Animacion de autorotacion activada
            showGraticules={false} // Mostrar la grilla sobre la luna desactivada
            globeImageUrl="./moon.jpg" // Textura de la luna
            backgroundColor="rgba(0,0,0,0)" // Color de fondo
            showAtmosphere={true} // Mostrar atmosfera activado
            atmosphereColor="gray" // Color de la atmosfera
            atmosphereAltitude={0} // Tama??o de la atmosfera
            rendererConfig={{ antialias: true, alpha: true }} // Configuracion del render
            labelTypeFace={moonfont} // Label Font JSON
            labelsTransitionDuration={6000} // Animation In Lables 6s
          />
        </div>
      </Model>
    </Moon3DContainer>
  );
}
