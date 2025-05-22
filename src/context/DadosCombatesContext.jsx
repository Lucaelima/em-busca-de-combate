import { createContext, useState } from "react";
import { PersonagensProvider } from "./PersonagensContext";
import { InimigosProvider } from "./InimigosContext";

export const DadosCombatesContext = createContext();

export const DadosCombatesProvider = ({ children }) => {
    const [totalClickAliado, setTotalClickAliado] = useState(0);
    const [totalClickErradosAliado, setTotalClickErradosAliado] = useState(0);
    const [totalDerrotas, setTotalDerrotas] = useState(0);
    const [totalClickDefender, setTotalClickDefender] = useState(0);
    const [totalClickErradosDefender, setTotalClickErradosDefender] = useState(0);
    const [totalClickNaoDefender, setTotalClickNaoDefender] = useState(0);

    const somarClickAliado = (dano, id) => {
        const totalClick = dano / 10;
        const maxClickAliado = id === 3 ? 4 : 3;
        setTotalClickAliado((prevClick) => prevClick + totalClick);
        setTotalClickErradosAliado((prevErros) => prevErros + Math.max(0, maxClickAliado - totalClick));
    }

    const somaClickDefenderInimigo = (danoDefendido, danoInimigo) => {
        const totalClick = danoDefendido / 10;
        const maxClickInimigo = danoInimigo / 10;
        setTotalClickDefender((prevClick) => prevClick + totalClick);
        setTotalClickErradosDefender((prevClick) => prevClick + Math.max(0, maxClickInimigo - totalClick));
    }

    const somaClickNaoDefenderInimigo = (dano) => {
        const totalClickErrado = dano / 10;
        setTotalClickNaoDefender((prevClick) => prevClick + totalClickErrado);
    }

    const somarDerrotas = () => {
        setTotalDerrotas((prevDerrotas) => prevDerrotas + 1);
    }

    return (
        <DadosCombatesContext.Provider value={{
            totalClickAliado,
            totalClickErradosAliado,
            totalDerrotas,
            totalClickDefender,
            totalClickErradosDefender,
            totalClickNaoDefender,
            somarClickAliado,
            somaClickDefenderInimigo,
            somaClickNaoDefenderInimigo,
            somarDerrotas,
        }}>
            <PersonagensProvider>
                <InimigosProvider>
                    {children}
                </InimigosProvider>
            </PersonagensProvider>
        </DadosCombatesContext.Provider>
    )
}