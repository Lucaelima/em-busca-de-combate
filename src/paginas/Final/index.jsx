import styled from "styled-components";
import TituloPagina from "../../componentes/TituloPagina";
import { useContext } from "react";
import { PersonagensContext } from "../../context/PersonagensContext";
import { DadosCombatesContext } from "../../context/DadosCombatesContext";
import musicaFinal from "./assets/final-audio.mp3";

const ContainerDados = styled.div`
    background-color: var(--fundo-secundario);
    border: 0.5rem solid var(--marrom-escuro);
    border-radius: 1rem;
    margin: 3rem 0;
    gap: 1rem;
    padding: 1.5rem;
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: center;
    justify-items: center;
    img {
        height: 40rem;
        width: auto;
        margin: 1.5rem;
    }
    div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin: 1.5rem;
        gap: 0.5rem;
        font-size: 2rem;
        h3 {
            align-self: center;
            margin: 0.6rem 0;
            font-size: 3rem;
            color: var(--marrom-escuro);
        }
        b {
            font-weight: 900;
            color: var(--marrom-escuro-auxiliar);
        }
    }
    @media screen and (max-width: 570px) {
        flex-direction: column;
        padding: 1rem;
        gap: 0;
        img {
            height: 25rem;
        }
        div {
            font-size: 1.5rem;
        }
    }
`

const BarraDivisao = styled.div`
    background-color: var(--marrom-escuro);
    border-radius: 1rem;
    align-self: center;
    height: 35rem;
    width: 0.5rem;
    @media screen and (max-width: 570px) {
        height: 0.5rem;
        width: 20rem;
    }
`

export default function Final() {
    const {
        totalClickAliado,
        totalClickErradosAliado,
        totalDerrotas,
        totalClickDefender,
        totalClickErradosDefender,
        totalClickNaoDefender,
    } = useContext(DadosCombatesContext);
    const { personagemEscolhido } = useContext(PersonagensContext);
    const tocarMusicaFinal = new Audio(musicaFinal);
    tocarMusicaFinal.loop = true;
    tocarMusicaFinal.play();

    return (
        <>
            <TituloPagina>Resultados Finais</TituloPagina>
            <ContainerDados>
                <img src={personagemEscolhido.imagem} alt={personagemEscolhido.alt} />
                <BarraDivisao />
                <div>
                    <h3>{personagemEscolhido.nome}</h3>
                    <p>Total de ataques acertados:  <b>{totalClickAliado}</b></p>
                    <p>Total de ataques não acertados: <b>{totalClickErradosAliado}</b></p>
                    <p>Total de defesas acertados: <b>{totalClickDefender}</b></p>
                    <p>Total de defesas não acertadas:  <b>{totalClickErradosDefender}</b></p>
                    <p>Total de defesas erradas acertas: <b>{totalClickNaoDefender}</b></p>
                    <p>Total de derrotas:  <b>{totalDerrotas}</b></p>
                </div>
            </ContainerDados>
        </>
    )
}