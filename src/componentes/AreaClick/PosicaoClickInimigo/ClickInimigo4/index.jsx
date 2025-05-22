import { useContext, useEffect, useState } from "react";
import { AreaClickDefenderContext } from "../../../../context/AreaClickDefenderContext";
import AreaClick from "../..";
import PosicaoClick from "../../../PosicaoClick";
import { InimigosContext } from "../../../../context/InimigosContext";

const animacaoClick1Inimigo4 = (top1, left1, top2, left2) => `
    0% {
        top: ${top1}vh;
        left: ${left1}vw;
    }
    50% {
        top: ${top2}vh;
        left: ${left2}vw;
    }
    100% {
        top: 65vh;
        left: 17vw;
    }
`;

const animacaoClick2Inimigo4 = (top1, left1, left2) => `
    0% {
        top: ${top1}vh;
        left: ${left1}vw;
    }
    50% {
        top: 10vh;
        left: ${left2}vw;
    }
    100% {
        top: 82vh;
        left: ${left2 - 15}vw;
    }
`



const animacaoClick3Inimigo4 = (top1, left1, left2, count) => {
    if (count === 6) {
        return `
            0% {
                top: ${top1}vh;
                left: ${left1}vw;
            }
            50% {
                top: 82vh;
                left: ${left2}}
            100% {
                top: 10vh;
                left: 30vw;
            }
        `;
    }
    if (count === 7) {
        return `
            0% {
                top: 10vh;
                left: 30vw;
            }
            50% {
                top: ${top1};
                left: 1vw;
            }
            100% {
                top: 82vh;
                left: 45vw;
            }
        `;
    }
    if (count === 8) {
        return `
            0% {
                top: 82vh;
                left: 45vw;
            }
            50% {
                top: ${top1}vh;
                left: 91.2vw;
            }
            100% {
                top: 65vh;
                left: 17vw;
            }
        `;
    }
}

export const ClickInimigo4 = () => {
    const {
        disponivelClickDefender,
        setDisponivelClickDefender,
        displayClickDefender,
        setDisplayClickDefender,
        clickDefesaExecutado,
        executarDefesa
    } = useContext(AreaClickDefenderContext);
    const { inimigoEscolhido } = useContext(InimigosContext);
    const primeiroNaoDefender = Math.floor(Math.random() * 3);
    const segundoNaoDefender = Math.floor(Math.random() * (6 - 3)) + 3;
    const terceiroNaoDefender = Math.floor(Math.random() * (9 - 6)) + 6;

    const gerarPosicaoAleatoria = (posicoesExistentes) => {
        let novaPosicao;
        let isUnica = false;

        while (!isUnica) {
            novaPosicao = {
                top: Math.floor(Math.random() * (82 - 10) + 10),
                left: Math.floor(Math.random() * (91 - 30) + 30),
            };

            isUnica = posicoesExistentes.every(
                (posicao) =>
                    Math.abs(posicao.top - novaPosicao.top) > 10 &&
                    Math.abs(posicao.left - novaPosicao.left) > 10
            );
        }

        return novaPosicao;
    };
    const [animacaoClick, setAnimacaoClick] = useState("");
    const [iconeDefender, setIconeDefender] = useState(true);

    const mudarPosicaoClickInimigo4 = () => {
        let count = 0;

        const mudarPosicao = () => {
            setDisponivelClickDefender(true);
            const posicao1 = gerarPosicaoAleatoria([]);
            const posicao2 = gerarPosicaoAleatoria([posicao1]);
            setDisplayClickDefender("flex");

            if (count < 3) {
                setAnimacaoClick(animacaoClick1Inimigo4(posicao1.top, posicao1.left, posicao2.top, posicao2.left));
                if (primeiroNaoDefender === count) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
            } else if (count < 6) {
                setAnimacaoClick(animacaoClick2Inimigo4(posicao1.top, posicao1.left, posicao2.left));
                if (segundoNaoDefender === count) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
            } else if (count < 9) {
                setAnimacaoClick(animacaoClick3Inimigo4(posicao1.top, posicao1.left, posicao2.left, count));
                if (terceiroNaoDefender === count) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
            }
            else {
                clearInterval(intervalo);
                executarDefesa();
            }
            count++;
            setTimeout(() => {
                setDisplayClickDefender("none");
            }, 1500)
        }

        mudarPosicao();

        const intervalo = setInterval(() => {
            mudarPosicao();
        }, 1550);

    };

    useEffect(() => {
        mudarPosicaoClickInimigo4();
    }, []);

    return (
        <>

            <PosicaoClick
                $displayClick={displayClickDefender}
                $animacaoClick={animacaoClick}
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