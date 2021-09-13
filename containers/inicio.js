import styled from "styled-components";
import dynamic from "next/dynamic";

const MainTitle = dynamic(() => import("../components/ui/title/mainTitle"), {
  ssr: false,
});

const InicioContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 35%;
  margin: 0px 0px 0px 0px;
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
