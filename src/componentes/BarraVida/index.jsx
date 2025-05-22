import styled from "styled-components";

const ContainerBarraVida = styled.div`
  background-color: var(--fundo-secundario);
  border: 0.2rem solid var(--marrom-escuro);
  border-radius: 1.5rem;
  max-height: 30vh;
  max-width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $inimigo }) => $inimigo ? "flex-end" : "flex-start"};
  margin: 1rem;
  padding: 1rem;
  user-select: none;
  h3 {
    font-size: 4vh;
    color: var(--texto);
    white-space: nowrap;
    @media screen and (max-width: 570px) {
      font-size: 2.5vh;
    }
  }
`;

const BarraStatusVida = styled.div`
  background-color: var(--fundo-primario);
  border: 0.2rem solid var(--marrom-escuro);
  border-radius: 1rem;
  display: flex;
  justify-content: ${({ $inimigo }) => $inimigo ? "flex-end" : "flex-start"};
  height: 5vh;
  width: 35vw; 
  overflow: hidden;
  div {
    background-color: var(--verde);
    height: 100%;
    width: ${({ $porcentagemVida }) => $porcentagemVida}%;
    transition: width 0.5s ease-in-out;
  }
`;

export default function BarraVida({ personagem, vida, maxVida, inimigo }) {

  const porcentagemVida = (vida / maxVida) * 100;

  return (
    <ContainerBarraVida $inimigo={inimigo}>
      <h3>{personagem.nome}</h3>
      <BarraStatusVida $porcentagemVida={porcentagemVida} $inimigo={inimigo}>
        <div></div>
      </BarraStatusVida>
    </ContainerBarraVida>
  );
}
