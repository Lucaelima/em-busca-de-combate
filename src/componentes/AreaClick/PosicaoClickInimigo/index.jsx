import { useContext } from "react";
import { ClickInimigo1 } from "./ClickInimigo1";
import { InimigosContext } from "../../../context/InimigosContext";
import AnimacaoAtaqueInimigo from "./AnimacaoAtaqueInimigo";
import { ClickInimigo2 } from "./ClickInimigo2";
import { ClickInimigo3 } from "./ClickInimigo3";
import { ClickInimigo4 } from "./ClickInimigo4";
import { ClickInimigo5 } from "./ClickInimigo5";
import { AreaClickDefenderContext } from "../../../context/AreaClickDefenderContext";
import AnimacaoDesviokirby from "./AnimacaoDesvioKirby";

export default function PosicaoClickInimigo() {
    const { inimigoEscolhido, statusInimigo } = useContext(InimigosContext);
    const { danoeEvitado } = useContext(AreaClickDefenderContext);

    return (
        <>
            {inimigoEscolhido.id === 1 ? <ClickInimigo1 /> : inimigoEscolhido.id === 2 ? <ClickInimigo2 /> : inimigoEscolhido.id === 3 ? <ClickInimigo3 /> : inimigoEscolhido.id === 4 ? <ClickInimigo4 /> : <ClickInimigo5 />}
            {statusInimigo === 'esperando' ? (danoeEvitado ? <AnimacaoDesviokirby /> : <AnimacaoAtaqueInimigo />) : null}
        </>
    )
}