import styled from "styled-components";

const InicioContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  div {
    width: 30%;
    margin: 0 auto;
  }
`;

export default function Inicio() {
  return (
    <InicioContainer>
      <div>
        <img alt="Blue Dot Logo" src="logos/BlueDotLogo.svg"></img>
      </div>
    </InicioContainer>
  );
}
