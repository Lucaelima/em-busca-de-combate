import { useContext, useEffect, useState } from "react";
import { AreaClickDefenderContext } from "../../../../context/AreaClickDefenderContext";
import AreaClick from "../..";
import PosicaoClick from "../../../PosicaoClick";
import { InimigosContext } from "../../../../context/InimigosContext";
import styled from "styled-components";

const InimigoImagemAtaque = styled.img`
    display: flex;
    height: 30vh;
    position: absolute;
    top: ${(props) => props.$top - 15}vh;
    left: ${(props) => props.$left - 2}vw;
    transition: top 0.7s linear, left 0.7s linear;
    z-index: 3;
    user-select: none;
    @media screen and (max-width: 570px) {
        height: 11vh;
        top: ${(props) => props.$top - 6}vh;
        left: ${(props) => props.$left - 5}vw;
    }
`

export const ClickInimigo5 = () => {
    const {
        disponivelClickDefender,
        setDisponivelClickDefender,
        displayClickDefender,
        setDisplayClickDefender,
        clickDefesaExecutado,
        executarDefesa
    } = useContext(AreaClickDefenderContext);
    const { inimigoEscolhido, statusInimigo } = useContext(InimigosContext);
    const [top, setTop] = useState(45);
    const [left, setLeft] = useState(78);
    const [iconeDefender, setIconeDefender] = useState(true);

    const mudarPosicaoClickInimigo5 = () => {
        let count = 0;

        const mudarPosicao = () => {

            const posicoes = [
                { top: Math.random() * (82 - 10) + 10, left: Math.random() * (80 - 65) + 65 },
                { top: Math.random() * (82 - 10) + 10, left: Math.random() * (65 - 50) + 50 },
                { top: Math.random() * (82 - 10) + 10, left: Math.random() * (50 - 35) + 35 },
                { top: Math.random() * (82 - 10) + 10, left: Math.random() * (35 - 20) + 20 },
            ];

            if (count < 3) {
                let animacaoCount = 0;
                const naoDefender = Math.floor(Math.random() * 4);

                const posicoesIntervalo = setInterval(() => {
                    if (animacaoCount < posicoes.length) {
                        const posicaoAtual = posicoes[animacaoCount];
                        setDisponivelClickDefender(true);
                        setDisplayClickDefender("none");
                        setIconeDefender(naoDefender === animacaoCount ? false : true);
                        setTop(posicaoAtual.top);
                        setLeft(posicaoAtual.left);
                        setDisplayClickDefender("flex");
                        animacaoCount++;
                    } else {
                        clearInterval(posicoesIntervalo);
                    }
                }, 700);

            }

            setTimeout(() => {
                count++;
                setDisplayClickDefender("none");
            }, 3500)
        }

        mudarPosicao();

        const intervalo = setInterval(() => {
            if (count >= 3) {
                executarDefesa();
                clearInterval(intervalo);
            } else {
                mudarPosicao();
            }
        }, 3600);

    };

    useEffect(() => {
        mudarPosicaoClickInimigo5();
    }, []);

    useEffect(() => {
        setIconeDefender(iconeDefender);
    }, [iconeDefender]);

    return (
        <>
            {statusInimigo === "atacando" &&
                <InimigoImagemAtaque
                    as="img"
                    src={inimigoEscolhido.atacando}
                    alt="Tails ataque"
                    draggable="false"
                    $top={top}
                    $left={left}
                />
            }
            <PosicaoClick
                $displayClick={displayClickDefender}
                $top={top}
                $left={left}
                $tempoClick={inimigoEscolhido.tempoClick}
            >
                <AreaClick
                    icone={iconeDefender}
                    disponivelClick={disponivelClickDefender}
                    onClick={() => clickDefesaExecutado(iconeDefender)}
                />
            </PosicaoClick>

        </>
    )
}