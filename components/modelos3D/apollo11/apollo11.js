import styled from "styled-components";
import "@google/model-viewer";

const Apollo113DContainer = styled.div`
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

  #titleContainer {
    width: calc(100% - 180px);
    margin: 0 auto;
    padding: 60px 0px 10px 0px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }

  #titleInsigniaContainer {
    width: 10%;
    margin: 0px 25px 0px 0px;
  }

  #titleInsigniaContainer img {
    width: 100%;
    display: block;
  }

  #titleTextContainer {
    width: auto;
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

export default function Apollo3D() {
  return (
    <Apollo113DContainer>
      <Information>
        <div className="opacityIn" id="titleContainer">
          <div id="titleInsigniaContainer">
            <img alt="Apolo 11 Insignia" src="./logos/Apolo11Insignia.png" />
          </div>
          <div id="titleTextContainer">
            <h1>MISI??N APOLO 11</h1>
            <h3>M??DULO DE COMANDO</h3>
          </div>
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
        <model-viewer
          id="reveal"
          loading="eager"
          camera-controls
          auto-rotate
          ios-src=""
          src="./model/apollo11/scene.gltf"
          alt="Apollo 11 3D Model"
          slot="progress-bar"
          shadow-intensity="1"
          ar
        ></model-viewer>
        <Credits>
          <p id="reveal">Desarrollado por The Smithsonian Institute</p>
        </Credits>
      </Model>
    </Apollo113DContainer>
  );
}
