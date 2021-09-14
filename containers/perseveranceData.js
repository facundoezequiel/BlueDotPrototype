import styled from "styled-components";
import dynamic from "next/dynamic";

const Perseverance3D = dynamic(
  () => import("../components/modelos3D/perseverance"),
  {
    ssr: false,
  }
);

const PerseveranceDataContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  #titleAside {
    width: 50px;
    height: 100vh;
    background-color: #000;
    border-right: 1px #333 solid;
    z-index: 5;
  }

  #backButton {
    width: 100%;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    border-bottom: 1px #333 solid;
    color: white;
    cursor: pointer;
  }

  #backButton img {
    display: block;
    width: 45%;
    margin: 0 auto;
    height: auto;
  }

  #titleDiv {
    height: calc(100% - 51px);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  #titleDiv div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  #titleDiv h1 {
    margin: 0 auto;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    margin-top: 20px;
    color: #fff;
    font-size: 1.5em;
    text-align: right;
    font-family: "D-DIN-Bold", sans-serif;
    text-transform: uppercase;
    line-height: 0%;
  }

  #titleDiv p {
    line-height: 140%;
    margin: 0 auto;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    margin-bottom: 20px;
    color: #666;
    font-size: 0.9em;
    text-align: left;
    font-family: "D-DIN", sans-serif;
  }
`;

const ModelViwer = styled.div`
  width: 50%;
  display: flex;
`;

const Information = styled.div`
  width: calc(50% - 52px);
  border-right: 1px #333 solid;
  display: flex;
  color: white;
`;

export default function PerseveranceData() {
  return (
    <PerseveranceDataContainer>
      <aside id="titleAside" className="leftIn">
        <div id="backButton">
          <img src="./icons/back.svg" />
        </div>
        <div id="titleDiv">
          <div>
            <h1 className="selectionNone">Perseverance</h1>
            <p>
              Museo Argentino de Ciencias Naturales<br></br>Bernardino Rivadavia
              CONICET
            </p>
          </div>
        </div>
      </aside>
      <Information>
        <div>
          <img src="" />
        </div>
      </Information>
      <ModelViwer>
        <Perseverance3D></Perseverance3D>
      </ModelViwer>
    </PerseveranceDataContainer>
  );
}
