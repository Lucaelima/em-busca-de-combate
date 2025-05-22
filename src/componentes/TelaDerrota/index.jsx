import { useContext } from "react"
import styled from "styled-components"
import BotaoPadrao from "../BotaoPadrao"
import BannerTitulo from "../BannerTitulo"
import { PersonagensContext } from "../../context/PersonagensContext"
import { InimigosContext } from "../../context/InimigosContext"
import { useNavigate } from "react-router-dom"

const FundoOpaco = styled.div`
    background: ${({ $inimigoCor }) => $inimigoCor};
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    opacity: 0.7;
    z-index: 3;
`

const ContainerBotaoDerrota = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    position: absolute;
    bottom: 10vh;
    width: 100vw;
    z-index: 4;
    img {
        height: 30rem;
        width: 30rem;
        position: absolute;
        left: 10vw;
        bottom:  8vh;
        @media screen and (max-width: 570px) {
            left: 4vw;
        }
    }
`

export default function TelaDerrota() {
    const { personagemEscolhido, resetPersonagem } = useContext(PersonagensContext);
    const { inimigoEscolhido, resetInimigo } = useContext(InimigosContext);

    const navigate = useNavigate();

    return (
        <>
            <FundoOpaco $inimigoCor={inimigoEscolhido.cor} />
            <BannerTitulo fontSize={12}>
                Derrota
            </BannerTitulo>
            <ContainerBotaoDerrota>
                <BotaoPadrao onClick={() => { resetInimigo(false); resetPersonagem(); navigate("/trilha-de-combates") }}>
                    Tentar novamente
                </BotaoPadrao>
                <img src={personagemEscolhido.derrota} alt="Personagem derrotado" />
            </ContainerBotaoDerrota>
        </>
    )
}