import { useContext, useEffect, useState } from "react";
import { AreaClickDefenderContext } from "../../../../context/AreaClickDefenderContext";
import AreaClick from "../..";
import PosicaoClick from "../../../PosicaoClick";
import { InimigosContext } from "../../../../context/InimigosContext";

const animacaoClickInimigo2 = (left) => `
    0% {
        top: 5vh;
        left: ${left}vw;
    }
    100% {
        top: 82vh;
        left: ${left - 15}vw;
    }
`;
export const ClickInimigo2 = () => {
    const {
        disponivelClickDefender,
        setDisponivelClickDefender,
        displayClickDefender,
        setDisplayClickDefender,
        clickDefesaExecutado,
        executarDefesa
    } = useContext(AreaClickDefenderContext);
    const [left, setLeft] = useState(Math.floor(Math.random() * (88 - 15) + 15));
    const { inimigoEscolhido } = useContext(InimigosContext);

    const mudarPosicaoClickInimigo2 = () => {
        let count = 0;

        const mudarPosicao = () => {
            setDisponivelClickDefender(true);
            setDisplayClickDefender("flex");
            if (count < 5) {
                setLeft(Math.floor(Math.random() * (88 - 15) + 15));
                setTimeout(() => {
                    setDisplayClickDefender('none');
                }, 1700)
                count++;
            } else {
                clearInterval(intervalo);
                executarDefesa();
            }
        }

        mudarPosicao();

        const intervalo = setInterval(() => {
            mudarPosicao();
        }, 1800);

    };

    useEffect(() => {
        mudarPosicaoClickInimigo2();
    }, []);

    return (
        <PosicaoClick
            $displayClick={displayClickDefender}
            $animacaoClick={animacaoClickInimigo2(left)}
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