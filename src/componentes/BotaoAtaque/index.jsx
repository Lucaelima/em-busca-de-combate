import styled from "styled-components";

const BotaoAtaque = styled.button`
  @keyframes crescendo {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  background-color: var(--marrom-escuro);
  border: 0.5rem solid var(--marrom-escuro-auxiliar);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
  color: var(--texto); 
  font-weight: 400;
  font-size: 5rem;
  cursor: pointer;
  animation: crescendo 0.5s ease-out forwards;
  z-index: 2;
  img {
    background-color: var(--marrom-escuro-auxiliar);
    border-radius: 1rem;
    height: 8rem;
    width: 8rem;
  }
  &:hover {
    border: 0.5rem solid var(--verde);
    color: var(--verde);
    box-shadow: 0 0 2rem 2rem var(--verde);
    img {
      background-color: var(--verde);
    }
  }
  &:active {
    background-color: var(--fundo-secundario);
    padding: 1.2rem;
    transition: 0.2s;
  }
  @media screen and (max-width: 570px) {
    font-size: 2rem;
    padding: 1rem;
    gap: 1rem;
    img {
      height: 6rem;
      width: 6rem;
    }
  }
`

export default BotaoAtaque;