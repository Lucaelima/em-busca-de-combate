import styled from "styled-components";

const BotaoPadrao = styled.button`
  background-color: var(--marrom-escuro);
  border: none;
  border-radius: 1rem;
  padding: 1.5rem;
  color: var(--texto); 
  font-weight: 400;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: var(--verde);
  }
  &:active {
    background-color: var(--fundo-secundario);
    color: var(--marrom-escuro);
    padding: 1.2rem;
    transition: 0.2s;
  }
`

export default BotaoPadrao;