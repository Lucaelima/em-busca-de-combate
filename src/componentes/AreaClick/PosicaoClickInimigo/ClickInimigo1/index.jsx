import { useContext, useEffect, useState } from "react";
import { AreaClickDefenderContext } from "../../../../context/AreaClickDefenderContext";
import AreaClick from "../..";
import PosicaoClick from "../../../PosicaoClick";
import { InimigosContext } from "../../../../context/InimigosContext";

const animacaoClickInimigo1 = (top, left) => `
    0% {
        top: ${top}vh;
        left: ${left}vw;
    }
    100% {
        top: 65vh;
        left: 17vw;
    }
`;
export const ClickInimigo1 = () => {
    const {
        disponivelClickDefender,
        setDisponivelClickDefender,
        displayClickDefender,
        setDisplayClickDefender,
        clickDefesaExecutado,
        executarDefesa
    } = useContext(AreaClickDefenderContext);
    const { inimigoEscolhido } = useContext(InimigosContext);
    const [top, setTop] = useState(Math.floor(Math.random() * (82 - 10) + 10));
    const [left, setLeft] = useState(Math.floor(Math.random() * (91 - 1) + 1));

    const mudarPosicaoClickInimigo1 = () => {
        let count = 0;

        const mudarPosicao = () => {
            setDisponivelClickDefender(true);
            setDisplayClickDefender("flex");
            if (count < 3) {
                setTop(Math.floor(Math.random() * (82 - 10) + 10));
                setLeft(Math.floor(Math.random() * (91 - 1) + 1));
                setTimeout(() => {
                    setDisplayClickDefender('none');
                }, 1800)
                count++;
            } else {
                clearInterval(intervalo);
                executarDefesa();
            }
        }

        mudarPosicao();

        const intervalo = setInterval(() => {
            mudarPosicao();
        }, 1900);

    };

    useEffect(() => {
        mudarPosicaoClickInimigo1();
    }, []);

    return (
        <PosicaoClick
            $displayClick={displayClickDefender}
            $animacaoClick={animacaoClickInimigo1(top, left)}
            $tempoClick={inimigoEscolhido.tempoClick}
        >
            <AreaClick
                icone={true}
                disponivelClick={disponivelClickDefender}
                onClick={() => clickDefesaExecutado(true)}
            />
        </PosicaoClick>
    )
}