import { createContext, useState } from "react";
import inimigos from '../dados/inimigos'
import { AreaClickDefenderProvider } from "./AreaClickDefenderContext";

export const InimigosContext = createContext();

export const InimigosProvider = ({ children }) => {

    const [inimigosLista, setInimigosLista] = useState(inimigos);
    const [statusInimigo, setStatusInimigo] = useState("esperando");
    const [inimigoEscolhido, setInimigoEscolhido] = useState(null)
    const [inimigoBotaoAtaque, setInimigoBotaoAtaque] = useState('none');
    const [mostrarPosicaoClickInimigo, setMostrarPosicaoClickInimigo] = useState(false);

    const derrotarInimigo = (inimigo) => {
        setInimigosLista(inimigosLista.map(inimigoNaLista => ({
            ...inimigoNaLista,
            derrotado: inimigoNaLista.id === inimigo.id ? true : inimigoNaLista.derrotado
        })));
    }

    const aplicarDanoVidaInimigo = (dano) => {
        const novaVida = Math.max(0, inimigoEscolhido.vida - dano);
        setInimigoEscolhido({ ...inimigoEscolhido, vida: novaVida });
        setMostrarPosicaoClickInimigo(false);
    };

    const resetInimigo = (derrotado) => {
        setStatusInimigo("esperando");
        if (derrotado) {
            derrotarInimigo(inimigoEscolhido);
        }

    }

    return (
        <InimigosContext.Provider value={{
            inimigosLista,
            derrotarInimigo,
            inimigoEscolhido,
            setInimigoEscolhido,
            statusInimigo,
            setStatusInimigo,
            aplicarDanoVidaInimigo,
            inimigoBotaoAtaque,
            setInimigoBotaoAtaque,
            mostrarPosicaoClickInimigo,
            setMostrarPosicaoClickInimigo,
            resetInimigo
        }}>
            <AreaClickDefenderProvider>
                {children}
            </AreaClickDefenderProvider>
        </InimigosContext.Provider>
    )
}