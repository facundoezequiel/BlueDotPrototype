import styled from "styled-components";
import dynamic from "next/dynamic";

const Voyager3D = dynamic(() => import("../components/modelos3D/voyager"), {
  ssr: false,
});

const Perseverance3D = dynamic(
  () => import("../components/modelos3D/perseverance"),
  {
    ssr: false,
  }
);

const InicioContainer = styled.section`
  width: 100%;
`;

export default function Inicio() {
  return (
    <InicioContainer>
      <Perseverance3D></Perseverance3D>
    </InicioContainer>
  );
}
