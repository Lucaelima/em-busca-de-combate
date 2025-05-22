import { useContext } from "react"
import styled from "styled-components"
import { InimigosContext } from "../../context/InimigosContext"
import BotaoPadrao from "../BotaoPadrao"
import BannerTitulo from "../BannerTitulo"
import { useNavigate } from "react-router-dom"
import { PersonagensContext } from "../../context/PersonagensContext"

const FundoOpaco = styled.div`
    background-color: var(--aliado-cor);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    opacity: 0.7;
    z-index: 3;
`

const ContainerBotaoVitoria = styled.div`
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
        right: 10vw;
        bottom:  10vh;
        @media screen and (max-width: 570px) {
            right: 3vw;
        }
    }
    
`

export default function TelaVitoria() {
    const { inimigoEscolhido, resetInimigo } = useContext(InimigosContext);
    const { resetPersonagem } = useContext(PersonagensContext)

    const navigate = useNavigate();

    return (
        <>
            <FundoOpaco />
            <BannerTitulo fontSize={12}>
                Vitoria
            </BannerTitulo>
            <ContainerBotaoVitoria>
                <BotaoPadrao onClick={() => {
                    resetInimigo(true);
                    resetPersonagem();
                    navigate(inimigoEscolhido.id === 5 && inimigoEscolhido.vida <= 0 ? "/final" : "/trilha-de-combates");
                }}
                >
                    Próximo!
                </BotaoPadrao>
                <img src={inimigoEscolhido.derrota} alt="Inimigo derrotado" />
            </ContainerBotaoVitoria>
        </>
    )
}