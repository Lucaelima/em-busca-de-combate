import styled from "styled-components"
import BarraVida from "../../componentes/BarraVida"
import PosicaoCombate from "../../componentes/PosicaoCombate"
import { useContext, useEffect, useRef } from "react"
import { PersonagensContext } from "../../context/PersonagensContext"
import { InimigosContext } from "../../context/InimigosContext"
import CaixaDialogo from "../../componentes/CaixaDialogo"
import BotaoAtaque from "../../componentes/BotaoAtaque"
import PosicaoClickAliado from "../../componentes/AreaClick/PosicaoClickAliado"
import PosicaoClickInimigo from "../../componentes/AreaClick/PosicaoClickInimigo"
import TelaVitoria from "../../componentes/TelaVitoria"
import TelaDerrota from "../../componentes/TelaDerrota"
import { DadosCombatesContext } from "../../context/DadosCombatesContext"
import Instrucoes from "../../componentes/Instrucoes"

const ContainerBotaoAtaque = styled.div`
    display: ${props => props.$botaoAtaque};
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 3;
`

const BarraEscura = styled.div`
    background-color: var(--marrom-escuro-auxiliar);
    width: 100%;
    height: 3vw;
    z-index: 1;
    ${({ $barraDeBaixo }) => ($barraDeBaixo ? `
    bottom: 0;
    position: fixed;
    ` : `
    position: static;
    `)};
    @media screen and (max-width: 570px) {
        height: 8vh;
    }
`

const FundoCombate = styled.div`
    background-image: url(${(props) => props.$fundo});
    background-repeat: repeat-x;
    background-size: contain;
    height: 93.5vh;
    width: 100%;
    display: flex;
    justify-content: space-between; 
    @media screen and (max-width: 570px) {
        height: 90vh;
    }
`;

const ContainerPersonagemEscolhido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 50vw;
    padding-bottom: 10vh;
    z-index: 2;
    @media screen and (max-width: 570px) {
        padding-bottom: 19vh;
    }
`

const ContainerInimigo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    width: 50vw;
    padding-bottom: 22vh;
    @media screen and (max-width: 570px) {
        padding-bottom: 25vh;
    }
`

export default function Combate() {

    const { somarDerrotas } = useContext(DadosCombatesContext);
    const {
        inimigosLista,
        inimigoEscolhido,
        statusInimigo,
        setStatusInimigo,
        inimigoBotaoAtaque,
        setInimigoBotaoAtaque,
        mostrarPosicaoClickInimigo,
        setMostrarPosicaoClickInimigo
    } = useContext(InimigosContext);
    const {
        personagensLista,
        personagemEscolhido,
        statusPersonagem,
        setStatusPersonagem,
        personagemBotaoAtaque,
        setPersonagemBotaoAtaque,
        mostrarPosicaoClickPersonagem,
        setMostrarPosicaoClickPersonagem
    } = useContext(PersonagensContext);

    const combataMusica = useRef(null);

    const mostrarAtaqueAliado = () => {
        setPersonagemBotaoAtaque("none");
        setStatusPersonagem("atacando");
        setMostrarPosicaoClickPersonagem(true);
    }

    const mostrarAtaqueInimigo = () => {
        setInimigoBotaoAtaque("none");
        setStatusInimigo("atacando");
        setMostrarPosicaoClickInimigo(true);
    }

    useEffect(() => {
        combataMusica.current = new Audio(inimigoEscolhido.musica);
        combataMusica.current.loop = true;
        combataMusica.current.play();
    }, []);

    useEffect(() => {
        setStatusInimigo(statusInimigo);
    }, []);

    useEffect(() => {
        if (personagemEscolhido.vida <= 0) {
            setPersonagemBotaoAtaque("none");
            setStatusPersonagem("derrota");
            setMostrarPosicaoClickInimigo(false);
            somarDerrotas();
            combataMusica.current.pause();
        }

        if (inimigoEscolhido.vida <= 0) {
            setInimigoBotaoAtaque("none");
            setStatusInimigo("derrota");
            setMostrarPosicaoClickPersonagem(false);
            combataMusica.current.pause();
        }
    }, [inimigoEscolhido.vida, personagemEscolhido.vida])

    return (
        <>
            <BarraEscura />
            <CaixaDialogo inimigo={inimigoEscolhido} />
            <ContainerBotaoAtaque $botaoAtaque={personagemBotaoAtaque}>
                <BotaoAtaque onClick={mostrarAtaqueAliado}>
                    <img src={personagemEscolhido.close} alt={personagemEscolhido.alt} />
                    Atacar o inimigo!
                </BotaoAtaque>
            </ContainerBotaoAtaque>
            <ContainerBotaoAtaque $botaoAtaque={inimigoBotaoAtaque}>
                <BotaoAtaque onClick={mostrarAtaqueInimigo}>
                    Defender ataque do inimigo!
                    <img src={inimigoEscolhido.close} alt={inimigoEscolhido.alt} />
                </BotaoAtaque>
            </ContainerBotaoAtaque>
            <FundoCombate $fundo={inimigoEscolhido.fundo}>
                <ContainerPersonagemEscolhido>
                    <BarraVida personagem={personagemEscolhido} vida={personagemEscolhido.vida} maxVida={personagensLista.find(personagemNaLista => personagemNaLista.id === personagemEscolhido.id)?.vida} inimigo={false} />
                    <PosicaoCombate personagem={personagemEscolhido} status={statusPersonagem} />
                </ContainerPersonagemEscolhido>
                <ContainerInimigo>
                    <BarraVida personagem={inimigoEscolhido} vida={inimigoEscolhido.vida} maxVida={inimigosLista.find(inimigoNaLista => inimigoNaLista.id === inimigoEscolhido.id)?.vida} inimigo={true} />
                    <PosicaoCombate personagem={inimigoEscolhido} status={statusInimigo} />
                </ContainerInimigo>
            </FundoCombate>
            <BarraEscura $barraDeBaixo={true} />
            {(inimigoEscolhido.id === 1 || inimigoEscolhido.id === 3) && <Instrucoes />}
            {personagemEscolhido.vida <= 0 && <TelaDerrota />}
            {inimigoEscolhido.vida <= 0 && <TelaVitoria />}
            {mostrarPosicaoClickPersonagem && <PosicaoClickAliado />}
            {mostrarPosicaoClickInimigo && <PosicaoClickInimigo />}
        </>
    )
}