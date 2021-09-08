import MainTitle from "../components/ui/title/mainTitle";
import styled from "styled-components";

const InicioContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 35%;
  margin: 100px 0px 0px 0px;
`;

export default function Inicio() {
  return (
    <InicioContainer>
      <TextContainer>
        <MainTitle></MainTitle>
      </TextContainer>
    </InicioContainer>
  );
}
