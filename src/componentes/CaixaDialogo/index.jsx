import styled from "styled-components"
import { useContext, useState } from "react"
import BotaoPadrao from "../BotaoPadrao"
import { PersonagensContext } from "../../context/PersonagensContext"

const ContainerDialogo = styled.div`
    display: ${({ $visibilidadeDialogo }) => $visibilidadeDialogo};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 4;
`

const ContainerBotao = styled.div`
    background-color: var(--verde);
    border-top-left-radius: 1.5rem ;
    border-top-right-radius: 1.5rem ;
    display: flex;
    padding: 1.5rem;
    padding-bottom: 0;
    height: auto;
    width: max-content;
    justify-self: center;
`

const Dialogo = styled.div`
    background-color: var(--marrom-escuro);
    border: 1.5rem outset var(--verde);
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 40vh;
    padding: 2rem;
    div {
        background-color: var(--fundo-secundario);
        border: 0.6rem solid var(--marrom-escuro-auxiliar);
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        padding: 2rem;
        p{
            font-size: 2rem;
            @media screen and (max-width: 570px) {
                font-size: 1.2rem;
            }
        }
    }
    img {
        background-color: var(--marrom-escuro-auxiliar);
        border-radius: 1rem;
        width: 15vw;
        height: 15vw;
        margin-left: 2rem;
    }
`

export default function CaixaDialogo({ inimigo }) {

    const [visibilidadeDialogo, setVisibilidadeDialogo] = useState("block");
    const { setPersonagemBotaoAtaque } = useContext(PersonagensContext);
    const linhas = inimigo.dialogo.split("<br>");

    const mudarVisibilidade = () => {
        setVisibilidadeDialogo("none");
        setPersonagemBotaoAtaque("flex");
    }
    return (
        <ContainerDialogo $visibilidadeDialogo={visibilidadeDialogo}>
            <ContainerBotao>
                <BotaoPadrao onClick={mudarVisibilidade}>
                    Vamos Começar!
                </BotaoPadrao>
            </ContainerBotao>
            <Dialogo>
                <div>
                    {linhas.map((linha, index) => (
                        <p key={index}>{linha}</p>
                    ))}
                </div>
                <img src={inimigo.close} alt={inimigo.alt} />
            </Dialogo>
        </ContainerDialogo>
    )
}