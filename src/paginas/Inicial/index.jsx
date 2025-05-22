import { styled } from "styled-components"
import BannerTitulo from "../../componentes/BannerTitulo";
import { useNavigate } from "react-router-dom";
import BotaoPadrao from "../../componentes/BotaoPadrao";

const ContainerBotao = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  position: absolute;
  bottom: 10vh;
  width: 100vw;
`

export default function Inicial() {
  const navigate = useNavigate();
  return (
    <>
      <BannerTitulo>
        Em Busca de
        <br /> Combate
      </BannerTitulo>
      <ContainerBotao>
        <BotaoPadrao onClick={() => navigate("selecionar-personagem")}>Começar!</BotaoPadrao>
      </ContainerBotao>
    </>
  );
}