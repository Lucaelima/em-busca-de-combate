import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { InimigosContext } from "../../../context/InimigosContext";
import { PersonagensContext } from "../../../context/PersonagensContext";
import AreaClick from "..";
import PosicaoClick from "../../PosicaoClick";
import { DadosCombatesContext } from "../../../context/DadosCombatesContext";

const AnimacaoAtaque = styled.div`
    @keyframes ataque {
        0% {
            left: 20vw;
            opacity: 1;
        }
        90% {
            left: 75vw;
            opacity: 1;
        }
        100% {
            left: 88vw;
            opacity: 0;
        }
    }
    background-image: url(${({ $personagem }) => $personagem.clickAtaque});
    background-size: contain;
    height: 10rem;
    width: 10rem;
    position: absolute;
    top: 60vh;
    display: flex;
    animation: ataque 0.5s linear forwards;
    z-index: 2;
    @media screen and (max-width: 570px) {
        height: 5rem;
        width: 5rem;
    }
`

export default function PosicaoClickAliado() {
    const { somarClickAliado } = useContext(DadosCombatesContext);
    const { inimigoEscolhido, aplicarDanoVidaInimigo, setInimigoBotaoAtaque } = useContext(InimigosContext);
    const { personagemEscolhido, statusPersonagem, setStatusPersonagem } = useContext(PersonagensContext);
    const [disponivelClick, setDisponivelClick] = useState(false);
    const [displayClick, setDisplayClick] = useState("none");
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [dano, setDano] = useState(0);
    const danoRef = useRef(dano);

    useEffect(() => {
        danoRef.current = dano;
    }, [dano])

    const clickExecutado = () => {
        if (disponivelClick === true) {
            setDisponivelClick(false);
            setDano((prevDano) => {
                const novoDano = prevDano + 10;
                return novoDano;
            });
        }
    };

    const executarAtaque = () => {
        const efeitoAudio = new Audio(personagemEscolhido.audio);
        efeitoAudio.play();
        setStatusPersonagem("esperando");
        somarClickAliado(danoRef.current, personagemEscolhido.id);
        setTimeout(() => {
            aplicarDanoVidaInimigo(danoRef.current);
            setDano(0);
            setInimigoBotaoAtaque("flex");
        }, 500)
    }

    const mudarPosicao = () => {
        let count = 0;
        const maxClick = personagemEscolhido.id === 3 ? 4 : 3;
        const intervalo = setInterval(() => {
            setDisponivelClick(true);
            if (count < maxClick) {
                setTop(Math.floor(Math.random() * (82 - 10) + 10));
                setLeft(Math.floor(Math.random() * (92 - 1) + 1));
                setDisplayClick("flex");
                count++;
            } else {
                setDisplayClick("none");
                setDisponivelClick(false);
                clearInterval(intervalo);
                executarAtaque();
            }
        }, (inimigoEscolhido.tempoClick / 1.5) * 1000);
    };

    useEffect(() => {
        mudarPosicao();
    }, []);

    return (
        <>
            <PosicaoClick
                $displayClick={displayClick}
                $top={top}
                $left={left}
                $aliado
            >
                <AreaClick
                    disponivelClick={disponivelClick}
                    onClick={clickExecutado}
                />
            </PosicaoClick>
            {statusPersonagem === 'esperando' && dano > 0 && <AnimacaoAtaque $personagem={personagemEscolhido} />}
        </>
    )
}