import { useContext, useEffect, useRef, useState } from "react";
import { AreaClickDefenderContext } from "../../../../context/AreaClickDefenderContext";
import AreaClick from "../..";
import PosicaoClick from "../../../PosicaoClick";
import { InimigosContext } from "../../../../context/InimigosContext";

const animacaoClickInimigo3 = (top, left, ladoAleatorio, atualizarPosicao) => {
    const novoTop = Math.floor(Math.random() * (82 - 10) + 10);
    const novoLeft = Math.floor(Math.random() * (94 - 1) + 1);

    if (ladoAleatorio === 1) {
        atualizarPosicao(novoTop, 1);

        return `
            0% {
                top: ${top}vh;
                left: ${left}vw;
            }
            100% {
                top: ${novoTop}vh;
                left: 1vw;
            }
        `;
    } else if (ladoAleatorio === 2) {
        atualizarPosicao(10, novoLeft);

        return `
            0% {
                top: ${top}vh;
                left: ${left}vw;
            }
            100% {
                top: 10vh;
                left: ${novoLeft}vw;
            }
        `;
    } else if (ladoAleatorio === 3) {
        atualizarPosicao(novoTop, 91.2);

        return `
            0% {
                top: ${top}vh;
                left: ${left}vw;
            }
            100% {
                top: ${novoTop}vh;
                left: 91.2vw;
            }
        `;
    } else if (ladoAleatorio === 4) {
        atualizarPosicao(82, novoLeft);

        return `
            0% {
                top: ${top}vh;
                left: ${left}vw;
            }
            100% {
                top: 82vh;
                left: ${novoLeft}vw;
            }
        `;
    }
};

export const ClickInimigo3 = () => {
    const {
        disponivelClickDefender,
        setDisponivelClickDefender,
        displayClickDefender,
        setDisplayClickDefender,
        clickDefesaExecutado,
        executarDefesa,
    } = useContext(AreaClickDefenderContext);
    const { inimigoEscolhido, setInimigoEscolhido } = useContext(InimigosContext);

    const [top, setTop] = useState(Math.floor(Math.random() * (82 - 10) + 10));
    const [left, setLeft] = useState(Math.floor(Math.random() * (91 - 1) + 1));
    const [animacao, setAnimacao] = useState("");
    const [iconeDefender, setIconeDefender] = useState(true);
    const primeiroNaoDefender = Math.floor(Math.random() * 3) + 1;
    const segundoNaoDefender = Math.floor(Math.random() * (8 - 4)) + 4;

    const atualizarPosicao = (novoTop, novoLeft) => {
        setTop(novoTop);
        setLeft(novoLeft);
    };

    const ultimoLadoRef = useRef(null);

    const gerarLadoAleatorio = () => {
        let novoLado;
        do {
            novoLado = Math.floor(Math.random() * 4) + 1;
        } while (novoLado === ultimoLadoRef.current);
        ultimoLadoRef.current = novoLado;
        return novoLado;
    };

    const mudarPosicaoClickInimigo3 = () => {
        let count = 0;
        let currentTop = top;
        let currentLeft = left;

        const mudarPosicao = () => {
            setDisponivelClickDefender(true);
            setDisplayClickDefender("flex");

            const ladoAleatorio = gerarLadoAleatorio();
            setAnimacao("");

            const novaAnimacao = animacaoClickInimigo3(currentTop, currentLeft, ladoAleatorio, (novoTop, novoLeft) => {
                currentTop = novoTop;
                currentLeft = novoLeft;
                atualizarPosicao(novoTop, novoLeft);
            });
            setAnimacao(novaAnimacao);

            if (count === 0) {
                if (primeiroNaoDefender === 1) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "#FF0000" });
                count++;
            } else if (count === 1) {
                if (primeiroNaoDefender === 2) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "#FF7F00" });
                count++;
            } else if (count === 2) {
                if (primeiroNaoDefender === 3) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "#FFFF00" });
                count++;
            } else if (count === 3) {
                if (segundoNaoDefender === 4) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "#00FF00" });
                count++;
            } else if (count === 4) {
                if (segundoNaoDefender === 5) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "#0000FF" });
                count++;
            } else if (count === 5) {
                if (segundoNaoDefender === 6) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "#4B0082" });
                count++;
            } else if (count === 6) {
                if (segundoNaoDefender === 7) {
                    setIconeDefender(false);
                } else {
                    setIconeDefender(true);
                }
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "#9400D3" });
                count++;
            } else {
                setInimigoEscolhido({ ...inimigoEscolhido, cor: "var(--ovelha-cor)" });
                clearInterval(intervalo);
                executarDefesa();
            }

            setTimeout(() => {
                setIconeDefender(true);
                setDisplayClickDefender("none");
            }, 1600);
        };

        mudarPosicao();

        const intervalo = setInterval(() => {
            mudarPosicao();
        }, 1650);
    };

    useEffect(() => {
        mudarPosicaoClickInimigo3();
    }, []);

    return (
        <PosicaoClick
            key={animacao}
            $displayClick={displayClickDefender}
            $animacaoClick={animacao}
            $tempoClick={inimigoEscolhido.tempoClick}
        >
            <AreaClick
                icone={iconeDefender}
                disponivelClick={disponivelClickDefender}
                onClick={() => clickDefesaExecutado(iconeDefender)}
            />
        </PosicaoClick>
    );
};